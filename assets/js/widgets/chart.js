/* 数学奇境 · 教具：数据图表（chart）
   bar 条形图（可交互调高度）/ line 折线图 / pie 扇形图（后两者仅动画）
   anim: { mode, data:[{label,value}], title, highlight:-1, showValues:true }
   play: { interactive:true, mode:"bar", data, targets:[…] } 用 −/＋ 把条形调到表格给的数量 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.chart = (function () {
  var W = 480, H = 320;
  var COLORS = ["#4d96ff", "#2ec4b6", "#f15bb5", "#ffc233", "#9b5de5", "#35c163", "#ff8a3d"];

  function mount(container, cfg) {
    cfg = Object.assign({ mode: "bar", data: [], title: "", showValues: true, highlight: -1 }, cfg);
    var cur = { values: cfg.data.map(function (d) { return d.value; }) };

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    var label = MW.util.el("div", "caption-box");
    label.style.minHeight = "52px";
    container.appendChild(label);

    var pad = { l: 46, r: 16, t: 46, b: 46 };
    function maxV() {
      var m = 5;
      cfg.data.forEach(function (d) { if (d.value > m) m = d.value; });
      if (cfg.targets) cfg.targets.forEach(function (v) { if (v > m) m = v; });
      return m;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var n = cfg.data.length, mv = maxV();
      var cw = (W - pad.l - pad.r) / n;
      // 标题
      if (cfg.title) {
        ctx.fillStyle = "#2b2d42"; ctx.font = "900 17px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(cfg.title, W / 2, 24);
      }
      // 坐标轴
      ctx.strokeStyle = "#c9c9e0"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b); ctx.stroke();

      if (cfg.mode === "bar") {
        cfg.data.forEach(function (d, i) {
          var v = cur.values[i];
          var bh = (v / mv) * (H - pad.t - pad.b - 20);
          var x = pad.l + i * cw + cw * 0.18;
          var y = H - pad.b - bh;
          ctx.fillStyle = i === cfg.highlight ? "#e0a91f" : COLORS[i % COLORS.length];
          roundTop(x, y, cw * 0.64, bh, 8);
          ctx.fill();
          if (cfg.showValues || cfg.interactive) {
            ctx.fillStyle = "#2b2d42"; ctx.font = "900 16px 'Chalkboard SE','PingFang SC',sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(v, x + cw * 0.32, y - 10);
          }
          ctx.fillStyle = "#5c607a"; ctx.font = "700 14px 'Chalkboard SE','PingFang SC',sans-serif";
          ctx.fillText(d.label, pad.l + i * cw + cw / 2, H - pad.b + 20);
        });
      } else if (cfg.mode === "line") {
        var pts = cfg.data.map(function (d, i) {
          return [pad.l + i * cw + cw / 2, H - pad.b - (cur.values[i] / mv) * (H - pad.t - pad.b - 20)];
        });
        // 网格
        ctx.strokeStyle = "#eeeef6"; ctx.lineWidth = 1;
        for (var gy = 0; gy <= 4; gy++) {
          var yy = pad.t + ((H - pad.b - pad.t) / 4) * gy;
          ctx.beginPath(); ctx.moveTo(pad.l, yy); ctx.lineTo(W - pad.r, yy); ctx.stroke();
        }
        ctx.strokeStyle = "#4d96ff"; ctx.lineWidth = 3; ctx.lineJoin = "round";
        ctx.beginPath();
        pts.forEach(function (p, i) { if (i === 0) ctx.moveTo(p[0], p[1]); else ctx.lineTo(p[0], p[1]); });
        ctx.stroke();
        pts.forEach(function (p, i) {
          ctx.beginPath(); ctx.arc(p[0], p[1], i === cfg.highlight ? 8 : 5.5, 0, 2 * Math.PI);
          ctx.fillStyle = i === cfg.highlight ? "#e0a91f" : "#4d96ff"; ctx.fill();
          if (cfg.showValues) {
            ctx.fillStyle = "#2b2d42"; ctx.font = "900 14px 'Chalkboard SE','PingFang SC',sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(cur.values[i], p[0], p[1] - 12);
          }
          ctx.fillStyle = "#5c607a"; ctx.font = "700 13px 'Chalkboard SE','PingFang SC',sans-serif";
          ctx.fillText(cfg.data[i].label, p[0], H - pad.b + 20);
        });
      } else {
        // pie
        var total = 0;
        cfg.data.forEach(function (d) { total += d.value; });
        var cx = W / 2 - 40, cy = H / 2 + 6, R = Math.min(W, H) / 2 - 44;
        var a0 = -Math.PI / 2;
        cfg.data.forEach(function (d, i) {
          var frac = d.value / total, a1 = a0 + frac * 2 * Math.PI;
          var mid = (a0 + a1) / 2, off = i === cfg.highlight ? 10 : 0;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(mid) * off, cy + Math.sin(mid) * off);
          ctx.arc(cx + Math.cos(mid) * off, cy + Math.sin(mid) * off, R, a0, a1);
          ctx.closePath();
          ctx.fillStyle = COLORS[i % COLORS.length]; ctx.fill();
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
          if (frac > 0.06) {
            var lx = cx + Math.cos(mid) * R * 0.62, ly = cy + Math.sin(mid) * R * 0.62;
            ctx.fillStyle = "#fff"; ctx.font = "900 14px 'Chalkboard SE','PingFang SC',sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(Math.round(frac * 100) + "%", lx, ly);
          }
          a0 = a1;
        });
        // 图例
        cfg.data.forEach(function (d, i) {
          var ly = 56 + i * 26;
          ctx.fillStyle = COLORS[i % COLORS.length];
          ctx.fillRect(W - 118, ly - 8, 14, 14);
          ctx.fillStyle = "#2b2d42"; ctx.font = "700 13px 'Chalkboard SE','PingFang SC',sans-serif";
          ctx.textAlign = "left";
          ctx.fillText(d.label + " " + d.value, W - 100, ly);
        });
      }

      // 交互标签
      if (cfg.interactive) {
        var matched = 0;
        cfg.data.forEach(function (d, i) { if (Math.round(cur.values[i]) === cfg.targets[i]) matched++; });
        label.innerHTML = cfg.title
          ? "对照表格调一调：已对准 <b>" + matched + " / " + cfg.data.length + "</b> 项"
          : "已对准 <b>" + matched + " / " + cfg.data.length + "</b> 项";
      } else if (!cfg.title) {
        label.innerHTML = "读图：你能从图里发现什么？";
      } else {
        label.innerHTML = cfg.title;
      }
    }

    function roundTop(x, y, w, h, r) {
      if (h <= 0) return;
      ctx.beginPath();
      ctx.moveTo(x, y + h);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.lineTo(x + w - r, y);
      ctx.arcTo(x + w, y, x + w, y + r, r);
      ctx.lineTo(x + w, y + h);
      ctx.closePath();
    }

    /* 交互：每类 −/＋ 调数值 */
    var done = false;
    if (cfg.interactive && cfg.mode === "bar" && cfg.targets) {
      var ctr = MW.util.el("div", "widget-controls");
      cfg.data.forEach(function (d, i) {
        var st = MW.util.el("div", "stepper");
        var minus = MW.util.el("button", null, "−");
        var val = MW.util.el("span", "val", d.label);
        var plus = MW.util.el("button", null, "＋");
        minus.onclick = function () { MW.feedback.sound("click"); setV(i, Math.max(0, Math.round(cur.values[i]) - 1)); };
        plus.onclick = function () { MW.feedback.sound("click"); setV(i, Math.round(cur.values[i]) + 1); };
        st.appendChild(minus); st.appendChild(val); st.appendChild(plus);
        ctr.appendChild(st);
      });
      container.appendChild(ctr);
      if (cfg.targetsText) {
        var tt = MW.util.el("div", "caption-box", "📋 数据表：" + cfg.targetsText);
        tt.style.minHeight = "44px";
        container.insertBefore(tt, ctr);
      }
    }

    function setV(i, v) {
      var target = cur.values.slice();
      target[i] = v;
      if (cancel) cancel();
      cancel = MW.util.tween({ v: cur.values[i] }, { v: v }, 220, function (tv) {
        cur.values[i] = tv.v; draw();
      }, check);
      void target;
    }
    function check() {
      if (!cfg.interactive || !cfg.targets) return;
      var ok = cfg.data.every(function (d, i) { return Math.round(cur.values[i]) === cfg.targets[i]; });
      if (ok && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
      if (!ok) done = false;
    }

    var cancel = null;
    function update(ns) {
      if (ns.data) { cfg.data = ns.data; }
      if (ns.highlight != null) cfg.highlight = ns.highlight;
      if (ns.title != null) cfg.title = ns.title;
      if (ns.values) {
        if (cancel) cancel();
        var from = { t: 0 }, start = cur.values.slice();
        cancel = MW.util.tween(from, { t: 1 }, 500, function (v) {
          cur.values = start.map(function (s, i) { return s + (ns.values[i] - s) * v.t; });
          draw();
        });
      } else draw();
    }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
