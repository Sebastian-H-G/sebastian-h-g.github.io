const CACHE_NAME = 'simple-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/offline.html', // Your offline page (you can create a simple one)
];

// Install event: Cache the essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Fetch event: Serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(() => {
      return caches.match('/offline.html'); // Fallback to offline page
    })
  );
});

// Send cache progress
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.keys().then((keys) => {
        self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({ type: 'CACHE_PROGRESS', loaded: keys.length, total: urlsToCache.length });
          });
        });
      });
    })
  );
});
