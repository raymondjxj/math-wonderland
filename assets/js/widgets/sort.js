/* 数学奇境 · 思维教具：冒泡排序（算法可视化）
   anim: { values:[5,2,7,1], step:比较进行到的步数 }
   play: { interactive:true, values:[…] } 孩子点击「执行一步」或「自动播放」，排好即成功 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.sort = (function () {
  var W = 480, H = 300;

  // 预计算冒泡排序的每一步快照
  function makeHistory(values) {
    var a = values.slice(), hist = [{ a: a.slice(), i: -1, j: -1, swapped: false }];
    var n = a.length, compares = 0;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1 - i; j++) {
        compares++;
        var sw = false;
        if (a[j] > a[j + 1]) { var t = a[j]; a[j] = a[j + 1]; a[j + 1] = t; sw = true; }
        hist.push({ a: a.slice(), i: j, j: j + 1, swapped: sw, compares: compares });
      }
    }
    return hist;
  }

  function mount(container, cfg) {
    cfg = Object.assign({ values: [5, 2, 7, 1, 4], step: 0 }, cfg);
    var hist = makeHistory(cfg.values);
    var step = Math.min(cfg.step || 0, hist.length - 1);

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    var label = MW.util.el("div", "caption-box");
    label.style.minHeight = "52px";
    container.appendChild(label);

    var COLORS = ["#4d96ff", "#2ec4b6", "#9b5de5", "#f15bb5", "#ff8a3d", "#35c163", "#ffc233"];

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var h = hist[step];
      var n = h.a.length;
      var bw = Math.min(64, (W - 80) / n - 12);
      var maxV = Math.max.apply(null, h.a);
      var baseY = H - 40;
      h.a.forEach(function (v, idx) {
        var x = W / 2 - (n * (bw + 12)) / 2 + idx * (bw + 12);
        var bh = (v / maxV) * (H - 120);
        var isCmp = idx === h.i || idx === h.j;
        ctx.fillStyle = isCmp ? (h.swapped ? "#ffc233" : "#ff6b6b") : COLORS[idx % COLORS.length];
        roundTop(x, baseY - bh, bw, bh, 10);
        ctx.fill();
        ctx.fillStyle = "#2b2d42";
        ctx.font = "900 18px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(v, x + bw / 2, baseY - bh - 10);
      });
      var done = step >= hist.length - 1;
      if (done) {
        label.innerHTML = "🎉 排好啦！一共比较了 <b>" + (hist.length - 1) + "</b> 次。";
      } else if (step === 0) {
        label.innerHTML = "目标：把数字<b>从小到大</b>排好。规则：相邻两个比较，左边大就交换。";
      } else {
        label.innerHTML = h.swapped
          ? "第 " + step + " 步：" + h.a[h.i] + " 和 " + h.a[h.j] + "，左边大，<b>交换！</b>"
          : "第 " + step + " 步：顺序正确，<b>不动</b>。";
      }
    }

    function roundTop(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x, y + h);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.lineTo(x + w - r, y);
      ctx.arcTo(x + w, y, x + w, y + r, r);
      ctx.lineTo(x + w, y + h);
      ctx.closePath();
    }

    var done = false, auto = null;
    function advance() {
      if (step < hist.length - 1) { step++; draw(); }
      if (step >= hist.length - 1) {
        stopAuto();
        if (cfg.interactive && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
      }
    }
    function stopAuto() { if (auto) { clearInterval(auto); auto = null; } }

    if (cfg.interactive) {
      var ctr = MW.util.el("div", "widget-controls");
      var bStep = MW.util.el("button", "btn small", "👣 执行一步");
      var bAuto = MW.util.el("button", "btn ghost small", "▶ 自动播放");
      var bReset = MW.util.el("button", "btn ghost small", "↺ 重来");
      bStep.onclick = function () { MW.feedback.sound("click"); advance(); };
      bAuto.onclick = function () {
        if (auto) { stopAuto(); bAuto.textContent = "▶ 自动播放"; return; }
        bAuto.textContent = "⏸ 暂停";
        auto = setInterval(function () {
          if (step >= hist.length - 1) { stopAuto(); bAuto.textContent = "▶ 自动播放"; }
          else advance();
        }, 500);
      };
      bReset.onclick = function () { stopAuto(); bAuto.textContent = "▶ 自动播放"; step = 0; done = false; draw(); };
      ctr.appendChild(bStep); ctr.appendChild(bAuto); ctr.appendChild(bReset);
      container.appendChild(ctr);
    }

    function update(ns) {
      if (ns.step != null) { step = Math.max(0, Math.min(hist.length - 1, ns.step)); }
      draw();
    }

    draw();
    return { update: update, destroy: stopAuto };
  }

  return { mount: mount };
})();
