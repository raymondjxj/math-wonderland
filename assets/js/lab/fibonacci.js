/* 数学之美实验室 · 展项：黄金螺旋
   斐波那契方块（1,1,2,3,5,8…）依次拼接成方阵，每块里画四分之一圆弧连成螺旋；
   「生长一步」带补间动画逐步添加，并实时显示 F(n+1)/F(n) 比值如何逼近 φ ≈ 1.618。 */
window.MW = window.MW || {}; MW.lab = MW.lab || {};

(function () {
  var PHI = (1 + Math.sqrt(5)) / 2;

  MW.lab.register({
    id: "fibonacci",
    icon: "🐚",
    title: "黄金螺旋",
    desc: "1，1，2，3，5，8……每个数都是前两个数的和。拿这些数当边长，一块接一块拼正方形，再在每个方块里画一段圆弧——看，著名的黄金螺旋长出来了！向日葵的花盘、鹦鹉螺的壳里，都藏着它。",
    note: "小发现：每生长一步，留意「后一个数 ÷ 前一个数」——它会越来越接近 1.618，这就是黄金比 φ。下次观察向日葵，数数花盘上的螺旋线，很可能正好是 34 和 55！",
    mount: function (body) {
      var W = 760, H = 520, PAD = 36;
      var FIB = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
      var MAX = FIB.length;

      /* —— 预计算布局：方块绕圈拼（右→下→左→上），记录每步的外接框与圆弧 —— */
      var squares = [], rect = null, i;
      for (i = 0; i < MAX; i++) {
        var f = FIB[i];
        var dir = i === 0 ? 3 : (i - 1) % 4; // 0右 1下 2左 3上；首块与第 2 块共圆心，视同「上」
        var x, y;
        if (i === 0) { x = 0; y = 0; rect = { x: 0, y: 0, w: 1, h: 1 }; }
        else if (dir === 0) { x = rect.x + rect.w; y = rect.y; rect.w += f; }
        else if (dir === 1) { x = rect.x; y = rect.y + rect.h; rect.h += f; }
        else if (dir === 2) { x = rect.x - f; y = rect.y; rect.x -= f; rect.w += f; }
        else { x = rect.x; y = rect.y - f; rect.y -= f; rect.h += f; }
        var cx, cy, a0, a1; // 圆弧圆心所在角 + 起止角（y 轴向下，角度顺时针）
        if (dir === 0) { cx = x; cy = y + f; a0 = -Math.PI / 2; a1 = 0; }            // 圆心：左下角
        else if (dir === 1) { cx = x; cy = y; a0 = 0; a1 = Math.PI / 2; }            // 圆心：左上角
        else if (dir === 2) { cx = x + f; cy = y; a0 = Math.PI / 2; a1 = Math.PI; }  // 圆心：右上角
        else { cx = x + f; cy = y + f; a0 = Math.PI; a1 = Math.PI * 1.5; }           // 圆心：右下角
        squares.push({
          x: x, y: y, f: f, cx: cx, cy: cy, a0: a0, a1: a1,
          box: { x: rect.x, y: rect.y, w: rect.w, h: rect.h }
        });
      }

      /* —— 画布 —— */
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      /* —— 比值读数 —— */
      var info = MW.util.el("div");
      info.style.cssText = "text-align:center;padding-top:12px;font-weight:700;color:#e8e8ff;line-height:1.9;";
      body.appendChild(info);

      /* —— 控件 —— */
      var ctr = MW.util.el("div", "lab-controls");
      var growBtn = MW.util.el("button", "btn small", "🌱 生长一步");
      var resetBtn = MW.util.el("button", "btn small", "↺ 重置");
      resetBtn.style.background = "#3d3d5c";
      ctr.appendChild(growBtn);
      ctr.appendChild(resetBtn);
      body.appendChild(ctr);

      /* 相机：把第 count 步的外接框居中缩放到画布内 */
      function camFor(count) {
        var b = squares[count - 1].box;
        return {
          u: Math.min((W - PAD * 2) / b.w, (H - PAD * 2) / b.h),
          cx: b.x + b.w / 2,
          cy: b.y + b.h / 2
        };
      }

      var count = 1, cam = camFor(1), g = 1, busy = false, cancel = null;

      function draw() {
        ctx.clearRect(0, 0, W, H);
        function X(v) { return W / 2 + (v - cam.cx) * cam.u; }
        function Y(v) { return H / 2 + (v - cam.cy) * cam.u; }
        var i, s, last, k;
        // 方块
        for (i = 0; i < count; i++) {
          s = squares[i]; last = i === count - 1;
          k = last ? 0.45 + 0.55 * g : 1; // 新方块从小长到大
          var size = s.f * cam.u * k;
          var mx = X(s.x + s.f / 2), my = Y(s.y + s.f / 2);
          ctx.globalAlpha = last ? 0.3 + 0.7 * g : 1;
          ctx.fillStyle = "rgba(255,194,51," + (0.07 + 0.13 * (i / (MAX - 1))).toFixed(3) + ")";
          ctx.strokeStyle = "rgba(255,194,51,.55)";
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.rect(mx - size / 2, my - size / 2, size, size);
          ctx.fill(); ctx.stroke();
          if (size >= 30 && (!last || g > 0.5)) {
            ctx.fillStyle = "rgba(255,255,255,.92)";
            ctx.font = "800 " + Math.min(30, size * 0.36).toFixed(1) + 'px "PingFang SC","Microsoft YaHei",sans-serif';
            ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(String(s.f), mx, my + 1);
          }
          ctx.globalAlpha = 1;
        }
        // 螺旋
        ctx.strokeStyle = "#ffc233";
        ctx.lineWidth = 3.2;
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(255,194,51,.6)";
        ctx.shadowBlur = 10;
        for (i = 0; i < count; i++) {
          s = squares[i]; last = i === count - 1;
          k = last ? 0.45 + 0.55 * g : 1;
          var aEnd = last ? s.a0 + (s.a1 - s.a0) * g : s.a1;
          ctx.beginPath();
          ctx.arc(X(s.cx), Y(s.cy), s.f * cam.u * k, s.a0, aEnd);
          ctx.stroke();
        }
        ctx.shadowBlur = 0;
      }

      function readout() {
        var seq = [];
        for (var i = 0; i < count; i++) {
          seq.push(i === count - 1 ? '<b style="color:#ffc233">' + FIB[i] + "</b>" : String(FIB[i]));
        }
        var html = "数列：" + seq.join("、") + (count < MAX ? "、…" : "");
        if (count >= 2) {
          var r = FIB[count - 1] / FIB[count - 2];
          var diff = Math.abs(r - PHI);
          var msg = diff < 0.002 ? "✨ 几乎就是黄金比了！"
            : diff < 0.02 ? "非常接近黄金比！"
            : "正在逼近黄金比……";
          html += "<br>" + FIB[count - 1] + " ÷ " + FIB[count - 2] +
            ' ≈ <b style="color:#ffc233">' + r.toFixed(5) + "</b>　黄金比 φ ≈ 1.61803　" +
            '<span style="color:#7ed491">' + msg + "</span>";
        } else {
          html += '<br><span style="color:#a9a9d0">再生长一步，就能看到相邻两数的比值啦</span>';
        }
        info.innerHTML = html;
      }

      growBtn.onclick = function () {
        if (busy || count >= MAX) return;
        busy = true; growBtn.disabled = true;
        MW.feedback.sound("click");
        count++;
        var target = camFor(count);
        cancel = MW.util.tween(
          { g: 0, u: cam.u, cx: cam.cx, cy: cam.cy },
          { g: 1, u: target.u, cx: target.cx, cy: target.cy },
          900,
          function (v) { g = v.g; cam.u = v.u; cam.cx = v.cx; cam.cy = v.cy; draw(); },
          function () {
            busy = false;
            growBtn.disabled = count >= MAX;
            if (count >= MAX) MW.feedback.sound("star");
          }
        );
        readout();
      };

      resetBtn.onclick = function () {
        MW.feedback.sound("click");
        if (cancel) cancel();
        count = 1; g = 1; cam = camFor(1); busy = false;
        growBtn.disabled = false;
        draw(); readout();
      };

      draw(); readout();
      return { destroy: function () { if (cancel) cancel(); } };
    }
  });
})();
