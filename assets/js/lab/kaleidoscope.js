/* 数学之美实验室 · 展项：对称万花筒
   自由绘画（鼠标/触摸拖动），笔画绕画布中心按 N 重旋转对称实时复制（N=2/4/6/8），
   笔刷颜色彩虹色相轮转。空画布时显示引导提示。 */
window.MW = window.MW || {}; MW.lab = MW.lab || {};

(function () {
  MW.lab.register({
    id: "kaleidoscope",
    icon: "❄️",
    title: "对称万花筒",
    desc: "万花筒里藏着对称的魔法：你画一笔，画布就帮你绕中心复制出一圈分身，再普通的涂鸦也会变成美丽的图案。雪花的六个瓣、海星的五条臂，都是大自然的对称作品。",
    note: "试一试：把对称重数调到 6，从中心向外随便画几笔——一朵雪花就出现啦！真正的雪花永远是六重对称，因为水分子结冰时喜欢排成六边形。",
    mount: function (body) {
      var W = 760, H = 520;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      cv.style.touchAction = "none";
      cv.style.cursor = "crosshair";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      ctx.lineCap = "round"; ctx.lineJoin = "round";
      body.appendChild(cv);

      var N = 6, hue = Math.floor(Math.random() * 360);
      var drawing = false, painted = false, last = null;

      /* —— 控件 —— */
      var ctr = MW.util.el("div", "lab-controls");
      ctr.innerHTML =
        '<label>对称重数 <input type="range" min="2" max="8" step="2" value="6"> <span class="nval">6 重</span></label>';
      var clearBtn = MW.util.el("button", "btn small", "🧽 清空");
      ctr.appendChild(clearBtn);
      body.appendChild(ctr);
      var slider = ctr.querySelector("input");
      var nval = ctr.querySelector(".nval");

      /* —— 空画布引导：虚线同心圆 + 放射线 + 提示文字 —— */
      function hint() {
        ctx.clearRect(0, 0, W, H);
        ctx.save();
        ctx.strokeStyle = "rgba(255,255,255,.10)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 8]);
        var radii = [75, 145, 215], i, k;
        for (i = 0; i < radii.length; i++) {
          ctx.beginPath(); ctx.arc(W / 2, H / 2, radii[i], 0, Math.PI * 2); ctx.stroke();
        }
        for (k = 0; k < N; k++) {
          var a = k * Math.PI * 2 / N;
          ctx.beginPath();
          ctx.moveTo(W / 2 + Math.cos(a) * 30, H / 2 + Math.sin(a) * 30);
          ctx.lineTo(W / 2 + Math.cos(a) * 230, H / 2 + Math.sin(a) * 230);
          ctx.stroke();
        }
        ctx.setLineDash([]);
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillStyle = "rgba(232,232,255,.6)";
        ctx.font = '700 22px "PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillText("按住拖一拖，画出对称魔法 ✨", W / 2, H / 2 - 8);
        ctx.font = '400 15px "PingFang SC","Microsoft YaHei",sans-serif';
        ctx.fillStyle = "rgba(232,232,255,.38)";
        ctx.fillText("你画一笔，万花筒帮你绕中心复制成 " + N + " 份", W / 2, H / 2 + 22);
        ctx.restore();
      }

      /* 坐标换算：CSS 像素 → 画布逻辑坐标 */
      function pos(e) {
        var r = cv.getBoundingClientRect();
        return { x: (e.clientX - r.left) * (W / r.width), y: (e.clientY - r.top) * (H / r.height) };
      }

      /* 把一笔绕中心旋转复制 N 份 */
      function stamp(drawOne) {
        for (var k = 0; k < N; k++) {
          ctx.save();
          ctx.translate(W / 2, H / 2);
          ctx.rotate(k * Math.PI * 2 / N);
          ctx.translate(-W / 2, -H / 2);
          drawOne();
          ctx.restore();
        }
      }

      function dot(p) {
        ctx.fillStyle = "hsl(" + hue + ", 95%, 66%)";
        stamp(function () {
          ctx.beginPath(); ctx.arc(p.x, p.y, 2.4, 0, Math.PI * 2); ctx.fill();
        });
      }

      function seg(a, b) {
        hue = (hue + 1.2) % 360;
        ctx.strokeStyle = "hsl(" + hue + ", 95%, 66%)";
        ctx.lineWidth = 4.5;
        stamp(function () {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        });
      }

      cv.addEventListener("pointerdown", function (e) {
        e.preventDefault();
        try { cv.setPointerCapture(e.pointerId); } catch (err) { /* 旧浏览器无捕获 */ }
        if (!painted) { painted = true; ctx.clearRect(0, 0, W, H); }
        drawing = true;
        last = pos(e);
        dot(last); // 单击也能留下一朵小花
        MW.feedback.sound("click");
      });
      cv.addEventListener("pointermove", function (e) {
        if (!drawing) return;
        var p = pos(e);
        seg(last, p); // lineTo 连续绘制，笔画流畅
        last = p;
      });
      function end() { drawing = false; last = null; }
      cv.addEventListener("pointerup", end);
      cv.addEventListener("pointercancel", end);

      slider.addEventListener("input", function () {
        N = parseInt(slider.value, 10);
        nval.textContent = N + " 重";
        MW.feedback.sound("click");
        if (!painted) hint();
      });
      clearBtn.onclick = function () {
        MW.feedback.sound("click");
        painted = false; drawing = false; last = null;
        hint();
      };

      hint();
    }
  });
})();
