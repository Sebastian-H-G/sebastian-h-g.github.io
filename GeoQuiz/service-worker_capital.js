const CACHE_NAME = 'capital-quiz-cache-v1';
const urlsToCache = [
  '/All_Capitals.html',
  '/capitals.css',
  '/all_capitals.js',
  '/Logos/Capital-72x72.webp',
  '/Logos/Capital-114x114.webp',
  '/Logos/Capital-180x180.webp',
  '/Logos/Capital-192x192.webp',
  '/Logos/Capital-512x512.webp'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', function(event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
