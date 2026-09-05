import type { CapacitorElectronConfig } from '@capacitor-community/electron';
import {
  CapElectronEventEmitter,
  CapacitorSplashScreen,
  setupCapacitorElectronPlugins,
} from '@capacitor-community/electron';
import chokidar from 'chokidar';
import type { MenuItemConstructorOptions } from 'electron';
import { app, BrowserWindow, Menu, MenuItem, nativeImage, Tray, session } from 'electron';
import electronIsDev from 'electron-is-dev';
import windowStateKeeper from 'electron-window-state';
import http from 'http';
import { readFile, stat } from 'fs/promises';
import { extname, join, resolve, sep } from 'path';

// Define components for a watcher to detect when the webapp is changed so we can reload in Dev mode.
const reloadWatcher = {
  debouncer: null,
  ready: false,
  watcher: null,
};
export function setupReloadWatcher(electronCapacitorApp: ElectronCapacitorApp): void {
  reloadWatcher.watcher = chokidar
    .watch(join(app.getAppPath(), 'app'), {
      ignored: /[/\\]\./,
      persistent: true,
    })
    .on('ready', () => {
      reloadWatcher.ready = true;
    })
    .on('all', (_event, _path) => {
      if (reloadWatcher.ready) {
        clearTimeout(reloadWatcher.debouncer);
        reloadWatcher.debouncer = setTimeout(async () => {
          electronCapacitorApp.getMainWindow().webContents.reload();
          reloadWatcher.ready = false;
          clearTimeout(reloadWatcher.debouncer);
          reloadWatcher.debouncer = null;
          reloadWatcher.watcher = null;
          setupReloadWatcher(electronCapacitorApp);
        }, 1500);
      }
    });
}

// ---- Local HTTP app server -------------------------------------------------
// We serve the bundled web app over `http://localhost:<port>` instead of the
// capacitor-electron:// custom scheme so Firebase Auth (signInWithPopup) works
// out of the box: `localhost` is already an authorized domain in every Firebase
// project by default, while custom schemes (capacitor-electron://-) are not
// real domains and often cannot be added to the Firebase Console at all.
const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.txt': 'text/plain; charset=utf-8',
  '.wasm': 'application/wasm',
};

async function startAppServer(directory: string): Promise<{ server: http.Server; port: number }> {
  const base = resolve(directory);

  const server = http.createServer(async (req, res) => {
    try {
      let pathname: string;
      try {
        pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
      } catch {
        res.writeHead(400);
        res.end('Bad Request');
        return;
      }

      // Path traversal guard: only ever serve files inside the app directory.
      let filePath = resolve(base, '.' + pathname);
      if (filePath !== base && !filePath.startsWith(base + sep)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      let info = null;
      try {
        info = await stat(filePath);
      } catch {
        info = null;
      }
      if (!info || info.isDirectory()) {
        filePath = join(base, 'index.html');
      }

      const data = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': MIME_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream',
        'Cache-Control': 'no-cache',
      });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end('Internal Server Error');
    }
  });

  // Prefer port 8080 (predictable origin), fall back to an ephemeral port if busy.
  const tryListen = (port: number): Promise<number> =>
    new Promise((resolvePort, rejectPort) => {
      const onError = (err: NodeJS.ErrnoException) => {
        server.off('listening', onListening);
        rejectPort(err);
      };
      const onListening = () => {
        server.off('error', onError);
        const addr = server.address();
        resolvePort(addr && typeof addr === 'object' ? addr.port : port);
      };
      server.once('error', onError);
      server.once('listening', onListening);
      server.listen(port, 'localhost');
    });

  try {
    const port = await tryListen(8080);
    return { server, port };
  } catch (err) {
    if ((err as NodeJS.ErrnoException)?.code === 'EADDRINUSE') {
      const port = await tryListen(0);
      return { server, port };
    }
    throw err;
  }
}

// True for the app's own origin: localhost HTTP server or the legacy custom scheme.
function isAppUrl(url: string, customScheme: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === `${customScheme}:` || (u.protocol === 'http:' && u.hostname === 'localhost');
  } catch {
    return false;
  }
}

// Hosts used by the Firebase/Google OAuth popup opened via signInWithPopup.
function isFirebaseAuthUrl(url: string): boolean {
  try {
    const host = new URL(url).hostname;
    return (
      host === 'localhost' ||
      host === 'accounts.google.com' ||
      host.endsWith('.google.com') ||
      host.endsWith('.firebaseapp.com') ||
      host.endsWith('.googleapis.com')
    );
  } catch {
    return false;
  }
}

// Define our class to manage our app.
export class ElectronCapacitorApp {
  private MainWindow: BrowserWindow | null = null;
  private SplashScreen: CapacitorSplashScreen | null = null;
  private TrayIcon: Tray | null = null;
  private CapacitorFileConfig: CapacitorElectronConfig;
  private TrayMenuTemplate: (MenuItem | MenuItemConstructorOptions)[] = [
    new MenuItem({ label: 'Quit App', role: 'quit' }),
  ];
  private AppMenuBarMenuTemplate: (MenuItem | MenuItemConstructorOptions)[] = [
    { role: process.platform === 'darwin' ? 'appMenu' : 'fileMenu' },
    { role: 'viewMenu' },
  ];
  private mainWindowState;
  private loadWebApp;
  private customScheme: string;
  private localServerPromise: Promise<{ server: http.Server; port: number }>;
  private localServer: http.Server | null = null;

  constructor(
    capacitorFileConfig: CapacitorElectronConfig,
    trayMenuTemplate?: (MenuItemConstructorOptions | MenuItem)[],
    appMenuBarMenuTemplate?: (MenuItemConstructorOptions | MenuItem)[]
  ) {
    this.CapacitorFileConfig = capacitorFileConfig;

    this.customScheme = this.CapacitorFileConfig.electron?.customUrlScheme ?? 'capacitor-electron';

    if (trayMenuTemplate) {
      this.TrayMenuTemplate = trayMenuTemplate;
    }

    if (appMenuBarMenuTemplate) {
      this.AppMenuBarMenuTemplate = appMenuBarMenuTemplate;
    }

    // Serve the web app over a local HTTP server (http://localhost:<port>).
    // Rationale documented above (startAppServer) — this keeps Firebase Auth
    // (signInWithPopup) working without any manual Firebase Console setup.
    this.localServerPromise = startAppServer(join(app.getAppPath(), 'app')).then(({ server, port }) => {
      this.localServer = server;
      return { server, port };
    });

    // Make sure the embedded HTTP server never keeps the process alive after quit.
    app.once('will-quit', () => {
      if (this.localServer) {
        try {
          this.localServer.close();
        } catch {
          /* ignore */
        }
      }
    });

    this.loadWebApp = async (win: BrowserWindow) => {
      const { port } = await this.localServerPromise;
      await win.loadURL(`http://localhost:${port}`);
    };
  }

  // Helper function to load in the app.
  private async loadMainWindow(thisRef: any) {
    await thisRef.loadWebApp(thisRef.MainWindow);
  }

  // Expose the mainWindow ref for use outside of the class.
  getMainWindow(): BrowserWindow {
    return this.MainWindow;
  }

  getCustomURLScheme(): string {
    return this.customScheme;
  }

  async init(): Promise<void> {
    const icon = nativeImage.createFromPath(
      join(app.getAppPath(), 'assets', process.platform === 'win32' ? 'appIcon.ico' : 'appIcon.png')
    );
    this.mainWindowState = windowStateKeeper({
      defaultWidth: 1000,
      defaultHeight: 800,
    });
    // Setup preload script path and construct our main window.
    const preloadPath = join(app.getAppPath(), 'build', 'src', 'preload.js');
    this.MainWindow = new BrowserWindow({
      icon,
      show: false,
      x: this.mainWindowState.x,
      y: this.mainWindowState.y,
      width: this.mainWindowState.width,
      height: this.mainWindowState.height,
      webPreferences: {
        // Security hardening: the renderer (our www/ web app) gets NO Node.js
        // access at all. Firebase (HTTPS/WSS) and PeerJS (WebRTC) work purely
        // over the network, so no direct filesystem/Node APIs are required.
        nodeIntegration: false,
        contextIsolation: true,
        // sandbox stays off ONLY so the first-party preload (build/src/preload.js)
        // can require Node built-ins (crypto/events) to build the Capacitor
        // plugin bridge. The web page itself remains fully isolated from Node
        // and from Electron internals (nodeIntegration:false + isolation on).
        sandbox: false,
        // Use preload to inject the electron variant overrides for capacitor plugins.
        preload: preloadPath,
      },
    });
    this.mainWindowState.manage(this.MainWindow);

    if (this.CapacitorFileConfig.backgroundColor) {
      this.MainWindow.setBackgroundColor(this.CapacitorFileConfig.electron.backgroundColor);
    }

    // If we close the main window with the splashscreen enabled we need to destory the ref.
    this.MainWindow.on('closed', () => {
      if (this.SplashScreen?.getSplashWindow() && !this.SplashScreen.getSplashWindow().isDestroyed()) {
        this.SplashScreen.getSplashWindow().close();
      }
    });

    // When the tray icon is enabled, setup the options.
    if (this.CapacitorFileConfig.electron?.trayIconAndMenuEnabled) {
      this.TrayIcon = new Tray(icon);
      this.TrayIcon.on('double-click', () => {
        if (this.MainWindow) {
          if (this.MainWindow.isVisible()) {
            this.MainWindow.hide();
          } else {
            this.MainWindow.show();
            this.MainWindow.focus();
          }
        }
      });
      this.TrayIcon.on('click', () => {
        if (this.MainWindow) {
          if (this.MainWindow.isVisible()) {
            this.MainWindow.hide();
          } else {
            this.MainWindow.show();
            this.MainWindow.focus();
          }
        }
      });
      this.TrayIcon.setToolTip(app.getName());
      this.TrayIcon.setContextMenu(Menu.buildFromTemplate(this.TrayMenuTemplate));
    }

    // Setup the main manu bar at the top of our window.
    Menu.setApplicationMenu(Menu.buildFromTemplate(this.AppMenuBarMenuTemplate));

    // If the splashscreen is enabled, show it first while the main window loads then switch it out for the main window, or just load the main window from the start.
    if (this.CapacitorFileConfig.electron?.splashScreenEnabled) {
      this.SplashScreen = new CapacitorSplashScreen({
        imageFilePath: join(
          app.getAppPath(),
          'assets',
          this.CapacitorFileConfig.electron?.splashScreenImageName ?? 'splash.png'
        ),
        windowWidth: 400,
        windowHeight: 400,
      });
      this.SplashScreen.init(this.loadMainWindow, this);
    } else {
      this.loadMainWindow(this);
    }

    // Security
    // Allow popups only for the Firebase/Google OAuth flow (signInWithPopup
    // opens a window to the Firebase auth handler) or for the app itself.
    this.MainWindow.webContents.setWindowOpenHandler((details) => {
      if (isFirebaseAuthUrl(details.url) || isAppUrl(details.url, this.customScheme)) {
        return { action: 'allow' };
      }
      return { action: 'deny' };
    });
    // Prevent the app window itself from navigating away from the app origin.
    this.MainWindow.webContents.on('will-navigate', (event, newUrl) => {
      if (!isAppUrl(newUrl, this.customScheme)) {
        event.preventDefault();
      }
    });

    // Link electron plugins into the system.
    setupCapacitorElectronPlugins();

    // When the web app is loaded we hide the splashscreen if needed and show the mainwindow.
    this.MainWindow.webContents.on('dom-ready', () => {
      if (this.CapacitorFileConfig.electron?.splashScreenEnabled) {
        this.SplashScreen.getSplashWindow().hide();
      }
      if (!this.CapacitorFileConfig.electron?.hideMainWindowOnLaunch) {
        this.MainWindow.show();
      }
      setTimeout(() => {
        if (electronIsDev) {
          this.MainWindow.webContents.openDevTools();
        }
        CapElectronEventEmitter.emit('CAPELECTRON_DeeplinkListenerInitialized', '');
      }, 400);
    });
  }
}

// Set a CSP for our application. The app origin is the local HTTP server
// (http://localhost:<port>) — the legacy capacitor-electron:// custom scheme is
// still allowed as well. Remote origins the web app needs:
//  - Firebase JS SDK: https://www.gstatic.com (script-src)
//  - Auth/Firestore: https://*.googleapis.com, *.firebaseio.com (https + wss)
//  - PeerJS signaling: https://0.peerjs.com (https + wss); WebRTC media itself
//    is NOT governed by CSP.
// CSP is injected ONLY on responses from our own origin — never on external
// responses such as Google's own auth-handler page, which would break it.
export function setupContentSecurityPolicy(customScheme: string): void {
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    const appPrefixes = [`${customScheme}://`, 'http://localhost:'];
    const isAppResponse = appPrefixes.some((prefix) => details.url.startsWith(prefix));
    if (!isAppResponse) {
      callback({ responseHeaders: details.responseHeaders });
      return;
    }

    const appOrigins = ['http://localhost:*', `${customScheme}://*`].join(' ');
    const devExtras = electronIsDev ? " devtools://* 'unsafe-eval'" : '';
    const csp = [
      `default-src ${appOrigins} 'unsafe-inline' data: blob:${devExtras}`,
      `script-src ${appOrigins} 'unsafe-inline' https://www.gstatic.com https://www.googleapis.com${devExtras}`,
      `connect-src ${appOrigins} https://*.googleapis.com https://*.firebaseio.com wss://*.googleapis.com wss://*.firebaseio.com https://0.peerjs.com wss://0.peerjs.com https://*.peerjs.com wss://*.peerjs.com`,
      `img-src ${appOrigins} 'unsafe-inline' data: blob: https://www.gstatic.com https://*.googleusercontent.com`,
      `style-src ${appOrigins} 'unsafe-inline'`,
      `font-src ${appOrigins} data:`,
      `media-src ${appOrigins} data: blob: mediastream:`,
      `frame-src ${appOrigins} https://*.firebaseapp.com https://*.googleapis.com`,
    ].join('; ');
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [csp],
      },
    });
  });
}
