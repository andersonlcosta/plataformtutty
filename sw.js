const CACHE_NAME = 'tutty-cache-v1';
const assets = [
  './',
  './index.html',
  './estilo.css',
  './icone-192.png',
  './icone-512.png',
  './barra.png',
  './som-flip.mp3'
];

// Instala o Service Worker e guarda os arquivos essenciais no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responde às requisições mesmo se o aluno estiver sem internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
