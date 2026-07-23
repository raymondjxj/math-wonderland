/* 数学奇境 · 小工具：缓动补间、DOM 帮手 */
window.MW = window.MW || {};

MW.util = (function () {
  // easeOutCubic
  function ease(t) { return 1 - Math.pow(1 - t, 3); }

  /**
   * 把 from 对象里的数值字段补间到 to，回调每一步的中间值。
   * tween({a:0},{a:10},400,function(v){...}) -> 返回 cancel 函数
   */
  function tween(from, to, ms, onStep, onDone) {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onStep(to); if (onDone) onDone(); return function () {};
    }
    var start = null, raf = 0, cancelled = false;
    function frame(ts) {
      if (cancelled) return;
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / ms);
      var e = ease(t), cur = {};
      for (var k in to) {
        cur[k] = (typeof from[k] === "number" ? from[k] : 0) + (to[k] - (typeof from[k] === "number" ? from[k] : 0)) * e;
      }
      onStep(cur);
      if (t < 1) raf = requestAnimationFrame(frame);
      else if (onDone) onDone();
    }
    raf = requestAnimationFrame(frame);
    return function () { cancelled = true; cancelAnimationFrame(raf); };
  }

  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }

  function param(name, def) {
    var m = new URLSearchParams(location.search).get(name);
    return m === null ? def : m;
  }

  // 随机取一个数组元素
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  return { ease: ease, tween: tween, el: el, param: param, pick: pick };
})();
