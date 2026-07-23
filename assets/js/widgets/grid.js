/* 数学奇境 · 教具：方格纸（面积：铺单位正方形）
   状态: { rows, cols, filled, showCount, cellLabel }
   交互: { interactive:true, onSuccess } —— 点击格子从左到右、从上到下铺，铺满即成功 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.grid = (function () {
  var W = 480, H = 320;
  var FILL = "#2ec4b6", EMPTY = "#f4f4fb", LINE = "#c9c9e0";

  function mount(container, cfg) {
    cfg = Object.assign({ rows: 3, cols: 4, filled: 0, showCount: true }, cfg);
    var cur = { filled: cfg.filled };

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = (H - 40) * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    var cvH = cv.height / dpr;
    container.appendChild(cv);

    var label = MW.util.el("div", "caption-box");
    label.style.minHeight = "56px";
    container.appendChild(label);

    function geom() {
      var cell = Math.min((W - 60) / cfg.cols, (cvH - 40) / cfg.rows);
      return { cell: cell, ox: (W - cell * cfg.cols) / 2, oy: (cvH - cell * cfg.rows) / 2 };
    }

    function draw() {
      ctx.clearRect(0, 0, W, cvH);
      var g = geom(), n = Math.round(cur.filled);
      for (var r = 0; r < cfg.rows; r++) {
        for (var c = 0; c < cfg.cols; c++) {
          var idx = r * cfg.cols + c;
          var x = g.ox + c * g.cell, y = g.oy + r * g.cell;
          ctx.fillStyle = idx < n ? FILL : EMPTY;
          ctx.fillRect(x, y, g.cell, g.cell);
          ctx.strokeStyle = LINE;
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, g.cell, g.cell);
          if (cfg.showCount && idx < n) {
            ctx.fillStyle = "#fff";
            ctx.font = "900 " + Math.min(26, g.cell * .44) + "px " + "'Chalkboard SE','PingFang SC',sans-serif";
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(String(idx + 1), x + g.cell / 2, y + g.cell / 2 + 1);
          }
        }
      }
      // 边长标注
      ctx.fillStyle = "#5c607a";
      ctx.font = "800 16px 'Chalkboard SE','PingFang SC',sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "top";
      ctx.fillText("长：" + cfg.cols + " 格", W / 2, g.oy + cfg.rows * g.cell + 8);
      ctx.save();
      ctx.translate(g.ox - 14, g.oy + (cfg.rows * g.cell) / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center"; ctx.textBaseline = "bottom";
      ctx.fillText("宽：" + cfg.rows + " 格", 0, 0);
      ctx.restore();

      if (n >= cfg.rows * cfg.cols) {
        label.innerHTML = "铺满啦！面积 = 长 × 宽 = <b>" + cfg.cols + " × " + cfg.rows + " = " + cfg.rows * cfg.cols + "</b> 个方格";
      } else {
        label.innerHTML = "已经铺了 <b>" + n + "</b> 个方格" + (cfg.interactive ? "（点击格子继续铺）" : "");
      }
    }

    var done = false;
    if (cfg.interactive) {
      cv.style.cursor = "pointer";
      cv.tabIndex = 0;
      cv.setAttribute("role", "img");
      cv.setAttribute("aria-label", "方格纸教具：左右方向键可增减铺设格数");
      cv.addEventListener("keydown", function (e) {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        MW.feedback.sound("click");
        var delta = e.key === "ArrowRight" ? 1 : -1;
        update({ filled: Math.max(0, Math.min(cfg.rows * cfg.cols, Math.round(cur.filled) + delta)) });
      });
      cv.addEventListener("click", function (e) {
        var rect = cv.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * W;
        var y = ((e.clientY - rect.top) / rect.height) * cvH;
        var g = geom();
        var c = Math.floor((x - g.ox) / g.cell), r = Math.floor((y - g.oy) / g.cell);
        if (r < 0 || r >= cfg.rows || c < 0 || c >= cfg.cols) return;
        var idx = r * cfg.cols + c;
        MW.feedback.sound("click");
        update({ filled: idx + 1 === Math.round(cur.filled) ? idx : idx + 1 });
      });
    }

    function check() {
      if (!cfg.interactive) return;
      var ok = Math.round(cur.filled) >= cfg.rows * cfg.cols;
      if (ok && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
      if (!ok) done = false;
    }

    var cancel = null;
    function update(ns) {
      Object.assign(cfg, ns);
      if (cancel) cancel();
      cancel = MW.util.tween(cur, { filled: cfg.filled }, 350, function (v) {
        cur = v; draw();
      }, check);
    }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
