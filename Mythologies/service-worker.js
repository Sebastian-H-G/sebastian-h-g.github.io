const cacheName = 'mythologies-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/greek_mythology.html',
  '/roman_mythology.html',
  '/egyptian_mythology.html',
  '/nordic_mythology.html',
  '/mythology.css',
  '/Logos/mythology.ico',
  '/Logos/mythology-192x192.png',
  '/Logos/mythology-512x512.png',
  // Add other necessary assets here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
