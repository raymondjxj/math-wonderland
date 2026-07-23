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

/* 缓存优先；未命中则联网并写入缓存（JS/HTML 内容文件同样缓存，保证二次访问离线可用） */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  if (e.request.url.indexOf(self.location.origin) !== 0) return;
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
        /* 离线且未缓存：页面导航回退首页 */
        if (e.request.mode === "navigate") return caches.match("index.html");
        return new Response("", { status: 504 });
      });
    })
  );
});
