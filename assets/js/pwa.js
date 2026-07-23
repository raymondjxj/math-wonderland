/* 数学奇境 PWA 注册：动态注入 manifest + 注册 Service Worker */
(function () {
  if (!("serviceWorker" in navigator)) return;
  var link = document.createElement("link");
  link.rel = "manifest";
  link.href = "manifest.webmanifest";
  document.head.appendChild(link);
  var theme = document.createElement("meta");
  theme.name = "theme-color";
  theme.content = "#141433";
  document.head.appendChild(theme);
  navigator.serviceWorker.register("sw.js").catch(function () { /* file:// 下静默失败 */ });
})();
