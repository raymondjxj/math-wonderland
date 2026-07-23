/* 数学之美实验室 · 展项参考实现：分形树
   注册格式：MW.lab.register({ id, icon, title, desc, note, mount(body) -> {destroy?} })
   body 为空白容器，展项在里面自建 canvas 与控件（.lab-controls）。 */
window.MW = window.MW || {}; MW.lab = MW.lab || {};

(function () {
  MW.lab.register({
    id: "fractal-tree",
    icon: "🌳",
    title: "会生长的分形树",
    desc: "一根树枝分出两根，两根分出四根……同样的规则重复下去，就长出了整棵树。这就是「分形」——简单规则创造的无限复杂。",
    note: "试一试：角度调到 60° 以上，树会变成什么样子？自然界的大树、血管、闪电都是分形！",
    mount: function (body) {
      var W = 760, H = 440;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      var params = { angle: 25, depth: 9, ratio: 0.72 };
      var growT = 1; // 生长动画进度

      var ctr = MW.util.el("div", "lab-controls");
      ctr.innerHTML =
        '<label>分叉角度 <input type="range" min="5" max="80" value="25" data-k="angle"></label>' +
        '<label>层数 <input type="range" min="3" max="12" value="9" data-k="depth"></label>' +
        '<label>长度比 <input type="range" min="55" max="80" value="72" data-k="ratio"></label>';
      var growBtn = MW.util.el("button", "btn small", "🌱 重新生长");
      ctr.appendChild(growBtn);
      body.appendChild(ctr);

      function branch(x, y, len, ang, depth, t) {
        if (depth === 0 || len < 2) return;
        var x2 = x + Math.cos(ang) * len, y2 = y - Math.sin(ang) * len;
        ctx.strokeStyle = depth > params.depth - 3 ? "#8a5a33" : (depth > 2 ? "#3aa655" : "#7ed491");
        ctx.lineWidth = Math.max(1, depth * 0.9);
        ctx.lineCap = "round";
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke();
        // 生长动画：t 控制当前层出现与否
        var layerT = t * params.depth - (params.depth - depth);
        if (layerT <= 0) return;
        var a = (params.angle * Math.PI) / 180;
        branch(x2, y2, len * params.ratio, ang + a, depth - 1, t);
        branch(x2, y2, len * params.ratio, ang - a, depth - 1, t);
      }

      function draw(t) {
        ctx.clearRect(0, 0, W, H);
        // 地面
        ctx.fillStyle = "rgba(58,166,85,.25)";
        ctx.fillRect(0, H - 24, W, 24);
        branch(W / 2, H - 24, 105, Math.PI / 2, params.depth, t);
      }

      var cancel = null;
      function redraw(animate) {
        if (cancel) cancel();
        if (animate === false) { growT = 1; draw(1); return; }
        var cur = { t: 0 };
        cancel = MW.util.tween(cur, { t: 1 }, 1200, function (v) { growT = v.t; draw(growT); });
      }

      ctr.addEventListener("input", function (e) {
        var k = e.target.dataset.k;
        if (!k) return;
        params[k] = k === "ratio" ? parseInt(e.target.value, 10) / 100 : parseInt(e.target.value, 10);
        redraw(false);
      });
      growBtn.onclick = function () { MW.feedback.sound("click"); redraw(true); };

      redraw(true);
      return { destroy: function () { if (cancel) cancel(); } };
    }
  });
})();
