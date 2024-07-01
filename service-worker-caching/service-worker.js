self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll(["/", "/index.html", "/style.css", "/index.js"]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Updating");
  const cacheWhitelist = ["my-cache"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// self.addEventListener("fetch", (event) => {
//   console.log("Service worker Fetching");
//   event.respondWith(
//     fetch(event.request)
//       .then((res) => {
//         //Make clone of responce
//         const resClone = res.clone();

//         //open cache
//         caches.open("my-cache").then((cache) => {
//           cache.put(event.request, resClone);
//         });
//         return res;
//       })
//       .catch((err) => caches.match(event.request).then((res) => res))
//   );
// });
