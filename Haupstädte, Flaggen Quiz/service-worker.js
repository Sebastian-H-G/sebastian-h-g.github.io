const CACHE_NAME = 'geo-quiz-cache-v6';
const baseUrl = 'https://flags.fmcdn.net/data/flags/w580/';  // The base URL for flags
const flagCodes = [
  'af', 'al', 'dz', 'ad', 'ao', 'ag', 'ar', 'au', 'at', 'az', 'bs', 'bh', 'bd', 'bb', 'by', 'be', 'bz', 
  'bj', 'bt', 'bo', 'ba', 'bw', 'br', 'bn', 'bg', 'bf', 'bi', 'kh', 'cm', 'ca', 'cv', 'cf', 'td', 'cl', 'cn', 
  'co', 'km', 'cg', 'cd', 'ck', 'cr', 'ci', 'hr', 'cu', 'cy', 'cz', 'dk', 'dj', 'dm', 'do', 'ec', 'eg', 'sv', 'gq', 
  'er', 'ee', 'et', 'fi', 'fr', 'ga', 'gm', 'ge', 'de', 'gh', 'gr', 'gd', 'gt', 'gn', 'gw', 'gy', 'ht', 'va', 'hn', 
  'hu', 'is', 'in', 'id', 'ir', 'iq', 'ie', 'il', 'it', 'jm', 'jp', 'jo', 'kz', 'ke', 'ki', 'kr', 'kw', 'kg', 'la', 
  'lv', 'lb', 'ls', 'lr', 'ly', 'li', 'lt', 'lu', 'mk', 'mg', 'mw', 'my', 'mv', 'ml', 'mt', 'mh', 'mr', 'mu', 'mx', 
  'fm', 'md', 'mc', 'mn', 'me', 'ma', 'mz', 'mm', 'na', 'nr', 'np', 'nl', 'nz', 'ni', 'ne', 'ng', 'nu', 'no', 'om', 
  'pk', 'pw', 'pa', 'pg', 'py', 'pe', 'ph', 'pl', 'pt', 'qa', 'ro', 'ru', 'rw', 'kn', 'lc', 'vc', 'ws', 'sm', 'st', 
  'sa', 'sn', 'rs', 'sc', 'sl', 'sg', 'sk', 'si', 'sb', 'so', 'za', 'es', 'lk', 'sd', 'sr', 'sz', 'se', 'ch', 'sy', 
  'tw', 'tj', 'tz', 'th', 'tl', 'tg', 'to', 'tt', 'tn', 'tr', 'tm', 'tv', 'ug', 'ua', 'ae', 'gb', 'us', 'uy', 'uz', 
  'vu', 've', 'vn', 'eh', 'ye', 'zm', 'zw'
];

// Generate URLs for the flag images
const urlsToCache = [
  '/',  
  'index.html',
  'styles.css',
  'https://unpkg.com/swiper/swiper-bundle.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css',
  'https://unpkg.com/swiper/swiper-bundle.min.js',
  'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  '',
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
  'Memory.html',
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
  'asia.html',
  'europe.html',
  'north-america.html',
  'south-america.html',
  'oceania.html',
  'oceania.js',
  'africa.js',
  'asia.js',
  'europe.js',
  'north-america.js',
  'south-america.js',
  'worldcountries.js',
  'worldcountries.css',
  'worldcountries.html',
  'worldcountries_in_90.html',
  'worldcountries_in_90.js',
  'us states capitals.html',
  'shape.html',
  'worldcountries_empty.html',
  'worldcountries_empty.js',
  'River Length Sort.html',
  'offline.html' // Ensure you have an offline fallback page
];


// Loop through the flag codes and create URLs to cache
flagCodes.forEach(code => {
  urlsToCache.push(`${baseUrl}${code}.png`);
});

// ** Install & Precache Critical Files with PROGRESS **
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      let loaded = 0;

      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          loaded++;
          // Send progress update to all pages
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
        return cachedResponse;
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
        .catch(() => caches.match('offline.html'));
    })
  );
});
