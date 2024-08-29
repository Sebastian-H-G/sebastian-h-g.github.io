const CACHE_NAME = 'capital-quiz-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/capitals.css',
  '/all_capitals.js',
  '/Logos/Capital.ico',
  '/Logos/Capital-16x16.webp',
  '/Logos/Capital-32x32.webp',
  '/Logos/Capital-48x48.webp',
  '/Logos/Capital.webp',
  '/Logos/Capital-57x57.webp',
  '/Logos/Capital-72x72.webp',
  '/Logos/Capital-114x114.webp',
  '/Logos/Capital-152x152.webp',
  '/Logos/Capital-180x180.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
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
