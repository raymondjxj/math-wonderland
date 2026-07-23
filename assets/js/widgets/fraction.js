/* 数学奇境 · 教具：分数（圆饼/长条，点击涂色）
   状态: { shape:"circle"|"bar", parts, shaded, showLabel }
   交互: { interactive:true, target:要涂的份数, onSuccess } */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.fraction = (function () {
  var W = 480, H = 320;
  var COLOR = "#ff8a3d", EMPTY = "#f0eef8", LINE = "#2b2d42";

  function mount(container, cfg) {
    cfg = Object.assign({ shape: "circle", parts: 4, shaded: 0, showLabel: true }, cfg);
    var cur = { shaded: cfg.shaded };

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = (cfg.showLabel || cfg.interactive ? H - 60 : H) * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    var cvH = cv.height / dpr;
    container.appendChild(cv);

    var label = null;
    if (cfg.showLabel || cfg.interactive) {
      label = MW.util.el("div", "caption-box");
      label.style.minHeight = "56px";
      container.appendChild(label);
    }

    function fracText(n) {
      if (n === 0) return "0（还没涂色）";
      if (n === cfg.parts) return n + "/" + cfg.parts + " = 1（整个都涂满啦！）";
      return n + "/" + cfg.parts;
    }

    function draw() {
      ctx.clearRect(0, 0, W, cvH);
      var n = Math.round(cur.shaded);
      ctx.lineWidth = 3;
      if (cfg.shape === "circle") {
        var cx = W / 2, cy = cvH / 2, R = Math.min(W, cvH) / 2 - 26;
        for (var i = 0; i < cfg.parts; i++) {
          var a0 = -Math.PI / 2 + (i * 2 * Math.PI) / cfg.parts;
          var a1 = -Math.PI / 2 + ((i + 1) * 2 * Math.PI) / cfg.parts;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.arc(cx, cy, R, a0, a1);
          ctx.closePath();
          ctx.fillStyle = i < n ? COLOR : EMPTY;
          ctx.fill();
          ctx.strokeStyle = LINE;
          ctx.stroke();
        }
      } else {
        var bw = W - 120, bh = 90, bx = 60, by = (cvH - bh) / 2;
        var pw = bw / cfg.parts;
        for (var j = 0; j < cfg.parts; j++) {
          ctx.fillStyle = j < n ? COLOR : EMPTY;
          ctx.fillRect(bx + j * pw, by, pw, bh);
          ctx.strokeStyle = LINE;
          ctx.lineWidth = 3;
          ctx.strokeRect(bx + j * pw, by, pw, bh);
        }
      }
      if (label) {
        label.innerHTML = cfg.interactive
          ? "涂了 <b>" + fracText(n) + "</b>　🎯 目标：涂出 <b>" + cfg.target + "/" + cfg.parts + "</b>"
          : "涂色部分是 <b>" + fracText(n) + "</b>";
      }
    }

    /* 交互：点击某一块 → 涂到那一块（像进度条） */
    var done = false;
    if (cfg.interactive) {
      cv.style.cursor = "pointer";
      cv.addEventListener("click", function (e) {
        var rect = cv.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * W;
        var y = ((e.clientY - rect.top) / rect.height) * cvH;
        var idx = -1;
        if (cfg.shape === "circle") {
          var dx = x - W / 2, dy = y - cvH / 2;
          var R = Math.min(W, cvH) / 2 - 26;
          if (dx * dx + dy * dy <= R * R) {
            var ang = Math.atan2(dy, dx) + Math.PI / 2;
            if (ang < 0) ang += 2 * Math.PI;
            idx = Math.floor((ang / (2 * Math.PI)) * cfg.parts);
          }
        } else {
          var bw = W - 120, bh = 90, bx = 60, by = (cvH - bh) / 2;
          if (x >= bx && x <= bx + bw && y >= by && y <= by + bh) {
            idx = Math.floor((x - bx) / (bw / cfg.parts));
          }
        }
        if (idx < 0) return;
        MW.feedback.sound("click");
        var target = idx + 1 === Math.round(cur.shaded) ? idx : idx + 1;
        update({ shaded: target });
      });
    }

    function check() {
      if (!cfg.interactive) return;
      var ok = Math.round(cur.shaded) === cfg.target;
      if (ok && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
      if (!ok) done = false;
    }

    var cancel = null;
    function update(ns) {
      Object.assign(cfg, ns);
      if (cancel) cancel();
      cancel = MW.util.tween(cur, { shaded: cfg.shaded }, 260, function (v) {
        cur = v; draw();
      }, check);
    }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
