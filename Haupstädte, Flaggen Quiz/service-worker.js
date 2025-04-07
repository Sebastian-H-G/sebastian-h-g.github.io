const CACHE_NAME = 'geo-quiz-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'styles.css',
  'https://unpkg.com/swiper/swiper-bundle.min.css',
  'Logos/Geography.ico',
  'offline.html' // Optional offline page
];

let totalUrls = urlsToCache.length;
let loadedUrls = 0;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map((url) => {
          return fetch(url).then((response) => {
            if (response.ok) {
              return cache.put(url, response);
            } else {
              console.warn(`Failed to cache: ${url}`);
            }
            loadedUrls++;
            sendProgress();
          }).catch((err) => {
            console.error(`Error caching ${url}:`, err);
            loadedUrls++;
            sendProgress();
          });
        })
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// Send progress updates to the client
function sendProgress() {
  const progress = Math.round((loadedUrls / totalUrls) * 100);
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'CACHE_PROGRESS',
        loaded: loadedUrls,
        total: totalUrls,
        progress: progress
      });
    });
  });
}
