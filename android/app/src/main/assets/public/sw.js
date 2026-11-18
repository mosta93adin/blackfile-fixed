const CACHE_NAME = 'black-file-cache-v11'; // v11: app shell now includes engine modules + invite.js (offline PWA), only successful responses are cached
const APP_SHELL = [
  './index.html',
  './styles.css',
  './translations.js',
  './app.js',
  './firebase.js',
  './firebase-sdk.js',
  './firebase-config.js',
  './invite.js',
  './peerjs.min.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-512-maskable.png',
  './assets/apple-touch-icon.png',
  './engine/accusation-engine.mjs',
  './engine/case-dispatch.mjs',
  './engine/case-loader.mjs',
  './engine/case-one-presentation.mjs',
  './engine/case-zero-presentation.mjs',
  './engine/contradiction-engine.mjs',
  './engine/deduction-engine.mjs',
  './engine/evidence-engine.mjs',
  './engine/hint-engine.mjs',
  './engine/hypothesis-engine.mjs',
  './engine/interrogation-engine.mjs',
  './engine/investigation-model.mjs',
  './engine/investigation-presentation.mjs',
  './engine/investigation-runtime.mjs',
  './engine/investigation-state.mjs'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(APP_SHELL);
      // NOTE: cross-origin Firebase modules (gstatic) are intentionally NOT cached:
      // they are ES module imports (CORS mode) and an opaque no-cors copy cannot be
      // replayed for a module request (net::ERR_FAILED).
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let reqUrl;
  try {
    reqUrl = new URL(req.url);
  } catch {
    return;
  }

  // Cross-origin: scripts always go live (see note above); other assets network-first.
  if (reqUrl.origin !== self.location.origin) {
    if (req.destination === 'script') {
      event.respondWith(fetch(req));
    } else {
      event.respondWith(fetch(req).catch(() => caches.match(req)));
    }
    return;
  }

  // Same-origin: cache-first with stale-while-revalidate.
  // Only successful (2xx) responses are stored, so a missing optional image
  // (404) is never cached and shows up as soon as it exists.
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.ok) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return networkRes;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
