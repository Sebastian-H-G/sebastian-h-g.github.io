const CACHE_NAME = 'space-shooter-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/space-shooter.css',
  '/space-shooter.js',
  '/Bilder/space_shooter.ico',
  '/Bilder/space_shooter-16x16.png',
  '/Bilder/space_shooter-32x32.png',
  '/Bilder/space_shooter-48x48.png',
  '/Bilder/space_shooter.png',
  '/Bilder/space_shooter-57x57.png',
  '/Bilder/space_shooter-72x72.png',
  '/Bilder/space_shooter-114x114.png',
  '/Bilder/space_shooter-152x152.png',
  '/Bilder/space_shooter-180x180.png',
  '/space-bg.jpg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Press+Start+2P&family=Roboto+Condensed:wght@700&family=Anton&display=swap',
  'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
