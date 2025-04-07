const CACHE_NAME = 'geo-quiz-cache-v6';
const urlsToCache = [
  '/',  
  'index.html',
  'styles.css',
  'https://unpkg.com/swiper/swiper-bundle.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css',
  'https://unpkg.com/swiper/swiper-bundle.min.js',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
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
  'Logos/Capital.webp',
  'Logos/Flag.webp',
  'Logos/Map.webp',
  'Logos/River.webp',
  'Logos/Memory.webp',
  'All_Capitals.html',
  'All_Flags.html',
  'Map_Quiz.html',
  'Logos/oceania.webp',
  'oceania.html',
  'oceania.js',
  'us.html',
  'mexico.html',
  'Mountain_Quiz.html',
  'mountain-sort.html',
  'Germany.html',
  'MemoryGame.html',
  'River_Map.html',
  'River.html',
  'capitals.js',
  'flag-script.js',
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

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      let loaded = 0;

      console.log('Installing Service Worker and starting caching...'); // Debug log

      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          loaded++;
          console.log(`Cached: ${url}`); // Debug log
          // 📨 Send progress update to all pages
          const clients = await self.clients.matchAll();
          clients.forEach(client => {
            client.postMessage({
              type: 'CACHE_PROGRESS',
              loaded,
              total: urlsToCache.length
            });
          });
        } catch (err) {
          console.error('Failed to cache', url, err);
        }
      }
    })()
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Dynamically cache JS, CSS, and images
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(() => caches.match('offline.html'));
    })
  );
});
