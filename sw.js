const CACHE_NAME = "registro-shell-v1.10.0";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js",
  "https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js",
  "https://cdn.jsdelivr.net/npm/prop-types@15.8.1/prop-types.min.js",
  "https://cdn.jsdelivr.net/npm/react-is@18.3.1/umd/react-is.production.min.js",
  "https://cdn.jsdelivr.net/npm/recharts@2.15.4/umd/Recharts.min.js",
  "https://cdn.jsdelivr.net/npm/@babel/standalone@7.28.1/babel.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  // Non toccare mai le chiamate verso il tuo Google Sheet: devono sempre andare in rete, mai da cache.
  if (req.url.includes("script.google.com") || req.url.includes("googleusercontent.com")) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
