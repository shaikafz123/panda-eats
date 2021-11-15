
const cacheName = "afzal-service-worker";

const cacheAssets = [
  "./",
  "./index.html",
  "./images/",
  "./images/panda-round.jpg",
  "./images/panda.webp",
  "./deserts.html",
  "./non-veg.html",
  "./veg.html",
  "./styles/main.css",
  "./styles/bulma-gtx.css",
  "./styles/material-icons-self-host.css",
  "./scripts/app.js",
  "./scripts/jquery.min.js"
];
self.addEventListener("install", (e) => {
  /*console.log("__ - __");*/
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        /*console.log("__ - __");*/
        cache.addAll(cacheAssets);
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});
self.addEventListener("activate", (e) => {
  /*console.log("__ - __");*/
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache != cacheName) {
            /*console.log("__ - __");*/
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  /*console.log("__ - __");*/
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
