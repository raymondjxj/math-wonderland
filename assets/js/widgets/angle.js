/* 数学奇境 · 教具：角（两条边的张开程度 / 量角器）
   状态: { deg, showArc, showLabel, showProtractor }
   交互: { interactive:true, target:目标角度, tolerance, onSuccess } —— 滑块摆角 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.angle = (function () {
  var W = 480, H = 320;
  var ARM = "#4d96ff", ARC = "#ffc233", INK = "#2b2d42";

  function mount(container, cfg) {
    cfg = Object.assign({ deg: 45, showArc: true, showLabel: true, showProtractor: false }, cfg);
    var cur = { deg: cfg.deg };

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px"; cv.style.height = H + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    var ox = W / 2, oy = H - 80, L = 170;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var rad = (-cur.deg * Math.PI) / 180;

      if (cfg.showProtractor) {
        ctx.beginPath();
        ctx.arc(ox, oy, L + 26, Math.PI, 0);
        ctx.fillStyle = "rgba(255,194,51,.13)";
        ctx.fill();
        ctx.strokeStyle = "#e0a91f";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "#8a6d1f";
        ctx.font = "700 12px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        for (var d = 0; d <= 180; d += 30) {
          var a = (-d * Math.PI) / 180;
          var tx = ox + Math.cos(a) * (L + 14), ty = oy + Math.sin(a) * (L + 14);
          ctx.fillText(String(d), tx, ty);
          ctx.beginPath();
          ctx.moveTo(ox + Math.cos(a) * (L + 2), oy + Math.sin(a) * (L + 2));
          ctx.lineTo(ox + Math.cos(a) * (L + 8), oy + Math.sin(a) * (L + 8));
          ctx.stroke();
        }
      }

      // 弧线
      if (cfg.showArc) {
        ctx.beginPath();
        ctx.arc(ox, oy, 54, Math.PI, Math.PI + (cur.deg * Math.PI) / 180, false);
        // canvas 逆时针角度：从 180° 回到 180°-deg
        ctx.beginPath();
        ctx.arc(ox, oy, 54, -((cur.deg * Math.PI) / 180), 0, false);
        ctx.strokeStyle = ARC;
        ctx.lineWidth = 6;
        ctx.stroke();
        if (cfg.showLabel) {
          var mid = (-cur.deg / 2) * (Math.PI / 180);
          ctx.fillStyle = INK;
          ctx.font = "900 22px 'Chalkboard SE','PingFang SC',sans-serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText(Math.round(cur.deg) + "°", ox + Math.cos(mid) * 92, oy + Math.sin(mid) * 92);
        }
      }

      // 两条边
      ctx.lineCap = "round";
      ctx.strokeStyle = ARM;
      ctx.lineWidth = 10;
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + L, oy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + Math.cos(rad) * L, oy + Math.sin(rad) * L); ctx.stroke();
      // 顶点
      ctx.beginPath(); ctx.arc(ox, oy, 10, 0, 2 * Math.PI);
      ctx.fillStyle = INK; ctx.fill();
    }

    /* 交互：滑块摆角 */
    var done = false;
    if (cfg.interactive) {
      var ctr = MW.util.el("div", "widget-controls");
      var slider = document.createElement("input");
      slider.type = "range"; slider.min = 5; slider.max = 180; slider.value = cfg.deg;
      slider.className = "slider";
      var ok = MW.util.el("button", "btn small", "我摆好了！");
      var hintEl = MW.util.el("div", "caption-box", "🎯 目标：把角摆到 <b>" + cfg.target + "°</b>（拖动滑块）");
      hintEl.style.minHeight = "52px";
      slider.oninput = function () { update({ deg: parseInt(slider.value, 10) }); };
      ok.onclick = function () {
        var tol = cfg.tolerance == null ? 3 : cfg.tolerance;
        if (Math.abs(cur.deg - cfg.target) <= tol) {
          if (!done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
        } else {
          MW.feedback.sound("wrong");
          hintEl.innerHTML = cur.deg < cfg.target
            ? "还差一点！开口再<b>张大</b>一点点 📐"
            : "开口太<b>大</b>啦，往回关一点点 📐";
        }
      };
      ctr.appendChild(slider); ctr.appendChild(ok);
      container.appendChild(hintEl);
      container.appendChild(ctr);
    }

    var cancel = null;
    function update(ns) {
      Object.assign(cfg, ns);
      if (cancel) cancel();
      cancel = MW.util.tween(cur, { deg: cfg.deg }, 300, function (v) {
        cur = v; draw();
      });
    }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
