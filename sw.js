/* 数学奇境 Service Worker：全站离线（缓存优先，网络兜底更新） */
var CACHE = "mw-v3.8.1";

/* 核心页面：安装时预缓存 */
var CORE = [
  "index.html", "grade.html", "lesson.html", "think.html", "museum.html",
  "lab.html", "drills.html", "mistakes.html", "map.html", "report.html",
  "about.html", "privacy.html", "404.html",
  "assets/css/base.css", "assets/css/components.css",
  "assets/img/favicon.svg", "assets/img/og.png",
  "manifest.webmanifest"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* 缓存策略：
   - 页面导航与内容文件（html、content/）：网络优先，离线回退缓存（保证更新及时）
   - 静态资产（css/js/img/engine/widgets）：缓存优先，离线可用 */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  if (e.request.url.indexOf(self.location.origin) !== 0) return;
  var url = e.request.url;
  var networkFirst = e.request.mode === "navigate" || url.indexOf("/content/") >= 0;

  if (networkFirst) {
    e.respondWith(
      fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && resp.type === "basic") {
          var clone = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, clone); });
        }
        return resp;
      }).catch(function () {
        return caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
          return hit || (e.request.mode === "navigate" ? caches.match("index.html") : new Response("", { status: 504 }));
        });
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (resp) {
        if (resp && resp.status === 200 && resp.type === "basic") {
          var clone = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, clone); });
        }
        return resp;
      }).catch(function () {
        return new Response("", { status: 504 });
      });
    })
  );
});
