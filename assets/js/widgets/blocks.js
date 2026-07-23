/* 数学奇境 · 教具：计数方块阵列（乘法的意义）
   状态: { rows, cols, showTotal }
   交互: { interactive:true, targetRows, targetCols, onSuccess } */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.blocks = (function () {
  var W = 480, H = 320;
  var PALETTE = ["#ff8a3d", "#2ec4b6", "#4d96ff", "#9b5de5", "#f15bb5", "#ffc233", "#35c163", "#ff6b6b", "#00c2d1", "#b088f9"];

  function mount(container, cfg) {
    cfg = Object.assign({ rows: 1, cols: 1, showTotal: false }, cfg);
    var cur = { rows: cfg.rows, cols: cfg.cols };

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px"; cv.style.height = H + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    var label = null;
    if (cfg.showTotal || cfg.interactive) {
      label = MW.util.el("div", "caption-box");
      label.style.minHeight = "56px";
      container.appendChild(label);
    }

    function roundRect(x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var cell = Math.min((W - 80) / Math.ceil(cur.cols), (H - 80) / Math.ceil(cur.rows), 56);
      var ox = (W - cell * cur.cols) / 2, oy = (H - cell * cur.rows) / 2;
      for (var r = 0; r < Math.ceil(cur.rows); r++) {
        for (var c = 0; c < Math.ceil(cur.cols); c++) {
          var alpha = Math.min(cur.rows - r, cur.cols - c, 1);
          if (alpha <= 0.02) continue;
          var x = ox + c * cell, y = oy + r * cell;
          ctx.globalAlpha = Math.max(0, alpha);
          roundRect(x + 3, y + 3, cell - 6, cell - 6, Math.min(12, cell / 4));
          ctx.fillStyle = PALETTE[r % PALETTE.length];
          ctx.fill();
          ctx.fillStyle = "rgba(255,255,255,.35)";
          roundRect(x + 3, y + 3, cell - 6, (cell - 6) * .38, Math.min(12, cell / 4));
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }
      var R = Math.max(1, Math.round(cur.rows)), C = Math.max(1, Math.round(cur.cols));
      if (label) {
        label.innerHTML = cfg.interactive
          ? "现在：<b>" + R + " 行 × " + C + " 列 = " + R * C + "</b> 块　🎯 目标：" + cfg.targetRows + " 行 × " + cfg.targetCols + " 列"
          : "<b>" + R + " × " + C + " = " + R * C + "</b> 块";
      }
      if (valEls.rows) valEls.rows.textContent = R;
      if (valEls.cols) valEls.cols.textContent = C;
    }

    var cancel = null;
    function update(ns) {
      Object.assign(cfg, ns);
      if (cancel) cancel();
      cancel = MW.util.tween(cur, { rows: cfg.rows, cols: cfg.cols }, 420, function (v) {
        cur = v; draw();
      }, check);
    }

    /* 交互模式：+/- 行与列，达成目标触发 onSuccess */
    var done = false, valEls = {};
    if (cfg.interactive) {
      var ctr = MW.util.el("div", "widget-controls");
      [["rows", "行"], ["cols", "列"]].forEach(function (pair) {
        var key = pair[0], name = pair[1];
        var st = MW.util.el("div", "stepper");
        st.appendChild(MW.util.el("span", null, name));
        var minus = MW.util.el("button", null, "−");
        var val = MW.util.el("span", "val", "");
        var plus = MW.util.el("button", null, "＋");
        valEls[key] = val;
        minus.onclick = function () { MW.feedback.sound("click"); var o = {}; o[key] = Math.max(1, Math.round(cur[key]) - 1); update(o); };
        plus.onclick = function () { MW.feedback.sound("click"); var o = {}; o[key] = Math.min(10, Math.round(cur[key]) + 1); update(o); };
        st.appendChild(minus); st.appendChild(val); st.appendChild(plus);
        ctr.appendChild(st);
      });
      container.appendChild(ctr);
    }

    function check() {
      if (!cfg.interactive) return;
      var ok = Math.round(cur.rows) === cfg.targetRows && Math.round(cur.cols) === cfg.targetCols;
      if (ok && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
      if (!ok) done = false;
    }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
