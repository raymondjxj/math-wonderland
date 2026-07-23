/* 数学奇境 · 教具：图形剪拼（shape）——探究几何面积的来历
   三种模式：
   parallelogram 平行四边形沿高剪开 → 平移拼成长方形（面积 = 底 × 高）
   triangle     两个全等三角形 → 旋转拼成平行四边形（面积 = 底 × 高 ÷ 2）
   trapezoid    两个全等梯形 → 旋转拼成平行四边形（面积 = (上底+下底) × 高 ÷ 2）
   anim: { mode, step }（0 原图 → 1 剪开/复制 → 2 拼成）
   play: { interactive:true, mode } 点「剪一剪/拼一拼」推进 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.shape = (function () {
  var W = 480, H = 320;

  function mount(container, cfg) {
    cfg = Object.assign({ mode: "parallelogram", step: 0 }, cfg);
    var cur = { t: Math.min(cfg.step, 2) / 2 }; // t: 0 原图 0.5 剪开 1 拼成
    var targetStep = Math.min(cfg.step, 2);

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    var label = MW.util.el("div", "caption-box");
    label.style.minHeight = "56px";
    container.appendChild(label);

    var C1 = "#4d96ff", C2 = "#2ec4b6", C3 = "#ffc233";

    function poly(pts, fill, stroke) {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);
      for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
      ctx.closePath();
      ctx.fillStyle = fill; ctx.globalAlpha = .9; ctx.fill();
      ctx.globalAlpha = 1;
      ctx.strokeStyle = stroke || "#2b2d42"; ctx.lineWidth = 2.5; ctx.stroke();
    }
    function txt(s, x, y, color, size) {
      ctx.fillStyle = color || "#2b2d42";
      ctx.font = "900 " + (size || 16) + "px 'Chalkboard SE','PingFang SC',sans-serif";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(s, x, y);
    }

    /* ---- 平行四边形：底 200 高 110，斜移 60。t 控制剪下的三角平移量 ---- */
    function drawParallelogram(t) {
      var bx = 90, by = 90, bw = 200, bh = 110, skew = 60;
      var cut = Math.max(0, Math.min(1, (t - 0.25) / 0.5)); // 0.25~0.75 平移
      // 主体（梯形部分）
      poly([[bx + skew, by], [bx + bw, by], [bx + bw - skew, by + bh], [bx, by + bh]], C1);
      // 剪下的小三角（从左边移动到右边）
      var tx = bx + cut * (bw - skew), ty = by;
      poly([[tx + skew, ty], [tx + skew, ty + bh], [tx, ty + bh]], C2);
      if (t >= 0.95) {
        txt("底", bx + bw / 2, by + bh + 18, "#2b2d42");
        txt("高", bx + bw + skew / 2 + 14, by + bh / 2, "#2b2d42");
        txt("拼成了长方形！", W / 2, 40, "#e0a91f", 20);
      } else if (t >= 0.5) {
        txt("把剪下的三角形移到右边……", W / 2, 40, "#5c607a", 15);
      } else {
        txt("沿高剪开 →", W / 2, 40, "#5c607a", 15);
        ctx.setLineDash([6, 5]);
        ctx.strokeStyle = "#f15bb5"; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(bx + skew, by); ctx.lineTo(bx + skew, by + bh); ctx.stroke();
        ctx.setLineDash([]);
      }
    }

    /* ---- 三角形/梯形：原图 + 旋转的副本拼成平行四边形 ---- */
    function drawPair(t, isTrap) {
      var cx = 170, cy = 210;
      var base = isTrap
        ? [[-90, 0], [90, 0], [40, -90], [-40, -90]]
        : [[-90, 0], [90, 0], [0, -110]];
      // 原图
      var ox = cx - 40;
      poly(base.map(function (p) { return [ox + p[0], cy + p[1]]; }), C1);
      // 副本（旋转 180°，随 t 旋转平移到位）
      var rot = Math.PI * Math.min(1, t * 1.2);
      var off = (1 - t) * 160;
      var cos = Math.cos(rot), sin = Math.sin(rot);
      var dup = base.map(function (p) {
        var x = p[0] * cos - p[1] * sin, y = p[0] * sin + p[1] * cos;
        return [ox + 90 + off + x + 40 * (1 - t), cy - (isTrap ? 90 : 110) - y * 0 + y];
      });
      if (t > 0.3) poly(dup, C2);
      if (t >= 0.95) {
        if (isTrap) {
          txt("上底 + 下底", cx + 30, cy + 16, "#2b2d42", 14);
          txt("高", cx + 160, cy - 45, "#2b2d42", 14);
        } else {
          txt("底", cx + 40, cy + 16, "#2b2d42");
          txt("高", cx + 145, cy - 55, "#2b2d42");
        }
        txt("拼成了平行四边形！", W / 2, 40, "#e0a91f", 20);
      } else {
        txt(isTrap ? "复制一个，旋转 180° 拼上去……" : "复制一个一样的，转过来拼……", W / 2, 40, "#5c607a", 15);
      }
    }

    var INFO = {
      parallelogram: [
        "这是一个平行四边形。沿它的高剪一刀，会发生什么？",
        "把剪下的三角形平移到右边……",
        "变成了长方形！长方形面积 = 长 × 宽，所以平行四边形面积 = <b>底 × 高</b>"
      ],
      triangle: [
        "两个一模一样的三角形，能拼成什么？",
        "把其中一个旋转 180°，拼到另一个旁边……",
        "拼成平行四边形！它的面积 = 底 × 高，所以一个三角形 = <b>底 × 高 ÷ 2</b>"
      ],
      trapezoid: [
        "两个一模一样的梯形，能拼成什么？",
        "把其中一个旋转 180°，拼到另一个旁边……",
        "拼成平行四边形！底是「上底+下底」，所以梯形面积 = <b>（上底+下底）× 高 ÷ 2</b>"
      ]
    };

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var t = cur.t;
      if (cfg.mode === "parallelogram") drawParallelogram(t);
      else if (cfg.mode === "triangle") drawPair(t, false);
      else drawPair(t, true);
      var stepIdx = t < 0.25 ? 0 : t < 0.75 ? 1 : 2;
      label.innerHTML = INFO[cfg.mode][stepIdx];
      if (cfg.interactive && stepIdx === 2 && !done) {
        done = true;
        if (cfg.onSuccess) cfg.onSuccess();
      }
    }

    var done = false, cancel = null;
    function go(step) {
      targetStep = Math.max(0, Math.min(2, step));
      if (cancel) cancel();
      cancel = MW.util.tween(cur, { t: targetStep / 2 }, 700, function (v) {
        cur = v; draw();
      });
    }

    if (cfg.interactive) {
      var ctr = MW.util.el("div", "widget-controls");
      var btn = MW.util.el("button", "btn small", cfg.mode === "parallelogram" ? "✂ 剪一剪，移过去" : "🔄 拼一拼");
      var reset = MW.util.el("button", "btn ghost small", "↺ 再看一次");
      btn.onclick = function () { MW.feedback.sound("click"); go(targetStep + 1); };
      reset.onclick = function () { done = false; go(0); };
      ctr.appendChild(btn); ctr.appendChild(reset);
      container.appendChild(ctr);
    }

    function update(ns) { if (ns.step != null) go(ns.step); }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
