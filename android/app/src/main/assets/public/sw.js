const CACHE_NAME = 'black-file-cache-v8'; // bumped: fix module scripts failing when served from SW cache (opaque no-cors copies of cross-origin Firebase modules broke ES module imports: net::ERR_FAILED)
const APP_SHELL = [
  './index.html',
  './styles.css',
  './translations.js',
  './app.js',
  './firebase.js',
  './firebase-config.js',
  './peerjs.min.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-512-maskable.png',
  './assets/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(APP_SHELL);
      // NOTE: we intentionally do NOT cache the cross-origin Firebase modules
      // (gstatic). They are consumed as ES module imports (CORS mode), and a
      // no-cors cached copy is an opaque response that CANNOT be replayed for
      // a module request — it fails with net::ERR_FAILED. The fetch handler
      // below always goes to the network for cross-origin module scripts.
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

  // Resolve the request URL against the SW's own origin.
  let reqUrl;
  try {
    reqUrl = new URL(req.url);
  } catch {
    return;
  }

  // Cross-origin requests (Firebase CDN / PeerJS / avatar images):
  //  - ES module scripts (destination 'script') MUST get a live network
  //    response with real CORS headers — never a cached opaque copy.
  //  - Other cross-origin assets (images) stay network-first with cache fallback.
  if (reqUrl.origin !== self.location.origin) {
    if (req.destination === 'script') {
      event.respondWith(fetch(req));
    } else {
      event.respondWith(fetch(req).catch(() => caches.match(req)));
    }
    return;
  }

  // Same-origin resources: cache-first with stale-while-revalidate.
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          // Refresh the cache in the background
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          return networkRes;
        })
        .catch(() => cached); // offline: fall back to cache
      return cached || fetchPromise;
    })
  );
});