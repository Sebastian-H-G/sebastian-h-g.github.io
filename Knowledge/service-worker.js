// service-worker.js

const CACHE_NAME = 'phobias-quiz-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/Logos/Phobias.ico',
    '/Logos/Phobias-16x16.webp',
    '/Logos/Phobias-32x32.webp',
    '/Logos/Phobias-48x48.webp',
    '/Logos/Phobias.webp',
    '/Logos/Phobias-57x57.webp',
    '/Logos/Phobias-72x72.webp',
    '/Logos/Phobias-114x114.webp',
    '/Logos/Phobias-152x152.webp',
    '/Logos/Phobias-180x180.webp',
    '/Phobias Images/spider.png',
    '/Phobias Images/snake.jpg',
    '/Phobias Images/water.jpg',
    '/Phobias Images/dog.jpg',
    '/Phobias Images/snow.jpg',
    '/Phobias Images/flowers.webp',
    '/Phobias Images/ghosts.jpg',
    '/Phobias Images/insects.jpg',
    '/Phobias Images/trees.jpg',
    '/Phobias Images/germs.jpg',
    '/Phobias Images/star.jpg',
    '/Phobias Images/technology.jpg',
    '/Phobias Images/buttons.jpg',
    '/Phobias Images/tornado.webp',
    '/Phobias Images/rain.jpg',
    '/Phobias Images/sharks.jpg',
    '/Phobias Images/moon.jpg',
    '/Phobias Images/nomophobia.jpg',
    '/Phobias Images/colors.jpg',
    '/Phobias Images/red.jpg',
    '/Phobias Images/butterflies.jpg',
    '/Phobias Images/blood.jpg',
    '/Phobias Images/weapons.webp',
    '/Phobias Images/animals.jpg'
];

// Install the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Serve cached files
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return the response from the cached version
                return response || fetch(event.request);
            })
    );
});

// Update the service worker
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
