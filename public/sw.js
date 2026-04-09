self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // Simple passthrough service worker; caching can be added later if needed.
});

self.addEventListener('fetch', () => {
  // Let the network handle all requests.
});
