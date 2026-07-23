/* 数学奇境 PWA 注册：manifest + Service Worker + 版本自更新 */
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

  navigator.serviceWorker.register("sw.js").then(function (reg) {
    /* 每次打开页面都主动检查 SW 更新 */
    reg.update().catch(function () {});
  }).catch(function () { /* file:// 下静默失败 */ });

  /* 新 SW 接管（activate + claim）→ 自动刷新一次，保证用户永远跑最新代码 */
  var reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", function () {
    if (reloading) return;
    reloading = true;
    location.reload();
  });
})();
