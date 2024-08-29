const CACHE_NAME = 'geo-quiz-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'styles.css',
  'https://unpkg.com/swiper/swiper-bundle.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css',
  'https://unpkg.com/swiper/swiper-bundle.min.js',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
  'Logos/Geography.ico',
  'Logos/Geography-16x16.webp',
  'Logos/Geography-32x32.webp',
  'Logos/Geography-48x48.webp',
  'Logos/Geography.webp',
  'Logos/Geography-57x57.webp',
  'Logos/Geography-72x72.webp',
  'Logos/Geography-114x114.webp',
  'Logos/Geography-152x152.webp',
  'Logos/Geography-180x180.webp',
  'Bilder/slide1.webp',
  'Bilder/capital slide.webp',
  'Bilder/flag slide.webp',
  'Bilder/map slide.webp',
  'path/to/slide3.jpg',
  'Logos/Capital.webp',
  'Logos/Flag.webp',
  'Logos/Map.webp',
  'Logos/River.webp',
  'Logos/Memory.webp',
  'All_Capitals.html',
  'All_Flags.html',
  'Map_Quiz.html',
  'All_Maps.html',
  'Memory_Quiz.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
