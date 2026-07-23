/* 数学奇境 · 思维教具：二分猜数（算法思维）
   仅交互：{ interactive:true, min:1, max:100 }
   孩子心里想一个数，机器人二分猜；孩子点「大了/小了/猜中了」。 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.guess = (function () {
  var W = 480, H = 170;

  function mount(container, cfg) {
    cfg = Object.assign({ min: 1, max: 100 }, cfg);
    var lo = cfg.lo != null ? cfg.lo : cfg.min;
    var hi = cfg.hi != null ? cfg.hi : cfg.max;
    var guess = cfg.guess || 0, steps = cfg.steps || 0, done = false;

    var info = MW.util.el("div", "caption-box",
      cfg.interactive === false
        ? (cfg.info || "范围：<b>" + cfg.min + " ~ " + cfg.max + "</b>")
        : "心里想一个 <b>" + cfg.min + " ~ " + cfg.max + "</b> 之间的数，别告诉我。我来猜！");
    info.style.minHeight = "56px";
    container.appendChild(info);

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var pad = 40, span = cfg.max - cfg.min;
      var x0 = pad, x1 = W - pad;
      // 整条数轴
      ctx.strokeStyle = "#e0e0ee"; ctx.lineWidth = 10; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(x0, 70); ctx.lineTo(x1, 70); ctx.stroke();
      // 剩余可能范围
      var lx = x0 + ((lo - cfg.min) / span) * (x1 - x0);
      var rx = x0 + ((hi - cfg.min) / span) * (x1 - x0);
      ctx.strokeStyle = "#00b4d8";
      ctx.beginPath(); ctx.moveTo(lx, 70); ctx.lineTo(rx, 70); ctx.stroke();
      // 端点数字
      ctx.fillStyle = "#5c607a"; ctx.font = "800 14px 'Chalkboard SE','PingFang SC',sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(lo, lx, 100);
      ctx.fillText(hi, rx, 100);
      // 猜测点
      if (guess) {
        var gx = x0 + ((guess - cfg.min) / span) * (x1 - x0);
        ctx.beginPath(); ctx.arc(gx, 70, 16, 0, 2 * Math.PI);
        ctx.fillStyle = "#ffc233"; ctx.fill();
        ctx.fillStyle = "#2b2d42"; ctx.font = "900 16px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.fillText(guess, gx, 75);
        ctx.fillStyle = "#2b2d42"; ctx.font = "800 15px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.fillText("是 " + guess + " 吗？", gx, 40);
      }
      ctx.fillStyle = "#8d90ad"; ctx.font = "700 13px 'Chalkboard SE','PingFang SC',sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("已猜 " + steps + " 次 · 还剩 " + (hi - lo + 1) + " 种可能", pad, 140);
    }

    var ctr = MW.util.el("div", "widget-controls");
    var bBig = MW.util.el("button", "btn ghost small", "👆 大了");
    var bSmall = MW.util.el("button", "btn ghost small", "👇 小了");
    var bHit = MW.util.el("button", "btn small", "🎉 猜中了！");
    ctr.appendChild(bBig); ctr.appendChild(bSmall); ctr.appendChild(bHit);
    container.appendChild(ctr);

    function ask() {
      guess = Math.floor((lo + hi) / 2);
      steps++;
      MW.feedback.sound("click");
      draw();
    }
    bBig.onclick = function () { if (done) return; hi = guess - 1; checkRange() || ask(); };
    bSmall.onclick = function () { if (done) return; lo = guess + 1; checkRange() || ask(); };
    bHit.onclick = function () {
      if (done) return;
      done = true;
      info.innerHTML = "我只用 <b>" + steps + " 次</b>就猜中了！秘密是<b>每次都砍一半</b>——这就是「二分查找」，计算机查找数据的看家本领。";
      draw();
      if (cfg.onSuccess) cfg.onSuccess();
    };
    function checkRange() {
      if (lo > hi) {
        info.innerHTML = "咦，范围空了 🤔 是不是有哪一次点错啦？重新开始吧！";
        lo = cfg.min; hi = cfg.max; guess = 0; steps = 0;
        ask();
        return true;
      }
      return false;
    }

    /* 动画模式（非交互）：只显示数轴，由 update 驱动 */
    if (!cfg.interactive) {
      ctr.style.display = "none";
      bBig.disabled = bSmall.disabled = bHit.disabled = true;
      if (!cfg.info) info.innerHTML = "范围：<b>" + cfg.min + " ~ " + cfg.max + "</b>";
    }

    function update(ns) {
      if (cfg.interactive) return;
      if (ns.lo != null) lo = ns.lo;
      if (ns.hi != null) hi = ns.hi;
      if (ns.guess != null) guess = ns.guess;
      if (ns.steps != null) steps = ns.steps;
      if (ns.info != null) info.innerHTML = ns.info;
      draw();
    }

    if (cfg.interactive) ask(); else draw();
    return { update: update, destroy: function () {} };
  }

  return { mount: mount };
})();
