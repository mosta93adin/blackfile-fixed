const CACHE_NAME = 'black-file-cache-v7'; // bumped: added local peerjs.min.js to APP_SHELL for reliable offline multiplayer
const APP_SHELL = [
  './index.html',
  './styles.css',
  './translations.js',
  './app.js',
  './firebase.js',
  './peerjs.min.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-512-maskable.png',
  './assets/apple-touch-icon.png'
];
// Cached separately with no-cors since they're cross-origin (opaque response,
// but still lets them load while offline after the first successful fetch).
// تمت إضافة firebase-firestore.js و firebase-firestore-lite.js لدعم أوفلاين كامل
// ملاحظة: peerjs.min.js أصبح محلياً ولا حاجة لتخزينه كـ external
const EXTERNAL = [
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
  // تم حذف firebase-firestore-lite.js لأنه غير مستخدم ويهدر مساحة
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(APP_SHELL);
      await Promise.all(EXTERNAL.map(async (url) => {
        try {
          const res = await fetch(url, { mode: 'no-cors' });
          await cache.put(url, res);
        } catch (e) { /* offline first install: skip, will retry later */ }
      }));
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

  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          // Refresh the cache in the background (stale-while-revalidate)
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => {});
          return networkRes;
        })
        .catch(() => cached); // offline: fall back to cache
      return cached || fetchPromise;
    })
  );
});