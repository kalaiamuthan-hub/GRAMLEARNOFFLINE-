const CACHE_NAME = 'gramlearn-ai-v24';

const APP_SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './webllm-worker.js',
  './icons/icon.svg',
  './icons/favicon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './css/variables.css',
  './css/style.css',
  './css/layout.css',
  './css/components.css',
  './css/chat.css',
  './js/app.js',
  './js/db.js',
  './js/data.js',
  './js/tn-syllabus-knowledge.js',
  './js/ai-engine.js',
  './js/webllm-worker.js',
  './js/chat.js',
  './js/ocr.js',
  './js/quiz.js',
  './js/gaps.js',
  './js/notes.js',
  './js/settings.js',
  './vendor/tesseract/tesseract.min.js',
  './vendor/tesseract/worker.min.js',
  './vendor/pdfjs/pdf.min.js',
  './vendor/pdfjs/pdf.worker.min.js',
  './vendor/webllm/web-llm.js'
];

// Install Event: Precache Application Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[Service Worker] Precaching GramLearn AI App Shell');
      // Cache assets individually to prevent a single failure from blocking the rest
      for (const asset of APP_SHELL_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn(`[Service Worker] Failed to precache ${asset}:`, err);
        }
      }
      return self.skipWaiting();
    })
  );
});

// Activate Event: Clean old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key.startsWith('gramlearn-ai-')) {
            console.log('[Service Worker] Purging old cache version:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-First for seamless code updates, with robust Cache Fallback when offline
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Allow WebLLM internal Cache API / Hugging Face model weight requests to handle themselves
  if (url.hostname.includes('huggingface.co') || url.hostname.includes('raw.githubusercontent.com')) {
    return;
  }

  event.respondWith(
    // Try Network first
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Network failed (offline / airplane mode) -> Serve from local cache
        const cached = await caches.match(event.request);
        if (cached) return cached;

        // Fallback to index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      })
  );
});
