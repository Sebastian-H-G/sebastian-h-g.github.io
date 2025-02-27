const CACHE_NAME = 'geo-quiz-cache-v5'; // Update version when modifying cache
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
  'Memory_Quiz.html',
  'Logos/oceania.webp',
  'oceania.html',
  'oceania.js',
  'us.html',
  'mexico.html',
  'Memory_Quiz.html',
  'Mountain_Quiz.html',
  'mountain-sort.html',
  'Germany.html',
  'MemoryGame.html',
  'River_Map.html',
  'River.html',
  'capitals.js',
  'flag-script',
  'germany.js',
  'map-script.js',
  'memory.js',
  'memoryscript.js',
  'mexico.js',
  'capitals.css',
  'flag-styles.css',
  'map-styles.css',
  'memory.css',
  'memorystyles.css',
  'mountain-quiz.css',
  'mountain-sort.css',
  'river.css',
  'river-lenght-sort',
  'worldcountries.css',
  'us.js',
  'river.js',
  'river-length-sort.js',
  'river-map.js',
  'worldcountries.js',
  'worldcountries.html',
  'africa.html',
  'River Length Sort.html',
  'offline.html' // Ensure you have an offline fallback page
];

// ** Install & Precache Critical Files **
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// ** Cleanup Old Caches **
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

// ** Fetch & Dynamic Caching for JS, CSS, Images **
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache if available
      }

      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Cache JavaScript, CSS, and images dynamically
          if (['script', 'style', 'image'].includes(event.request.destination)) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }

          return response;
        })
        .catch(() => caches.match('offline.html')); // Show offline page if network fails
    })
  );
});
