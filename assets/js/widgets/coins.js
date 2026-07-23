/* 数学奇境 · 思维教具：抛硬币（大数定律）
   仅交互：{ interactive:true, goal:100 }
   按钮抛 1/10/100 次，实时画「正面比例」曲线，看它越来越接近 50%。 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.coins = (function () {
  var W = 480, H = 260;

  function mount(container, cfg) {
    cfg = Object.assign({ goal: 100 }, cfg);
    var total = 0, heads = 0, history = [];
    var done = false;

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    var label = MW.util.el("div", "caption-box", "正面出现 <b>0</b> 次 / 共抛 <b>0</b> 次");
    label.style.minHeight = "52px";
    container.appendChild(label);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var pad = 46, x0 = pad, x1 = W - 20, y0 = 16, y1 = H - 34;
      // 50% 参考线
      var midY = y0 + (1 - 0.5) * (y1 - y0);
      ctx.strokeStyle = "#e0a91f"; ctx.lineWidth = 2; ctx.setLineDash([7, 6]);
      ctx.beginPath(); ctx.moveTo(x0, midY); ctx.lineTo(x1, midY); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = "#e0a91f"; ctx.font = "800 13px 'Chalkboard SE','PingFang SC',sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("50%", x0 - 8, midY + 4);
      // 0%/100% 刻度
      ctx.fillStyle = "#8d90ad";
      ctx.fillText("0%", x0 - 8, y1 + 4);
      ctx.fillText("100%", x0 - 8, y0 + 4);
      ctx.textAlign = "center";
      ctx.fillText("抛的次数 →", (x0 + x1) / 2, H - 8);
      // 频率曲线（横轴按对数感：前 100 次展开）
      if (history.length > 1) {
        ctx.strokeStyle = "#00b4d8"; ctx.lineWidth = 3; ctx.lineJoin = "round";
        ctx.beginPath();
        history.forEach(function (h, i) {
          var px = x0 + (Math.log(h.n + 1) / Math.log(Math.max(total, 10) + 1)) * (x1 - x0);
          var py = y0 + (1 - h.r) * (y1 - y0);
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        });
        ctx.stroke();
        var last = history[history.length - 1];
        var lx = x0 + (Math.log(last.n + 1) / Math.log(Math.max(total, 10) + 1)) * (x1 - x0);
        var ly = y0 + (1 - last.r) * (y1 - y0);
        ctx.beginPath(); ctx.arc(lx, ly, 6, 0, 2 * Math.PI);
        ctx.fillStyle = "#00b4d8"; ctx.fill();
      }
    }

    function flip(k) {
      for (var i = 0; i < k; i++) {
        total++;
        if (Math.random() < 0.5) heads++;
        if (total <= 30 || total % 10 === 0 || i === k - 1) {
          history.push({ n: total, r: heads / total });
        }
      }
      MW.feedback.sound("click");
      var pct = ((heads / total) * 100).toFixed(1);
      label.innerHTML = "正面 <b>" + heads + "</b> 次 / 共 <b>" + total + "</b> 次　＝　<b>" + pct + "%</b>";
      draw();
      if (!done && total >= cfg.goal) {
        done = true;
        if (cfg.onSuccess) cfg.onSuccess();
      }
    }

    var ctr = MW.util.el("div", "widget-controls");
    [["抛 1 次", 1], ["抛 10 次", 10], ["抛 100 次", 100]].forEach(function (p) {
      var b = MW.util.el("button", "btn small", p[0]);
      b.onclick = function () { flip(p[1]); };
      ctr.appendChild(b);
    });
    container.appendChild(ctr);

    draw();
    return { update: function () {}, destroy: function () {} };
  }

  return { mount: mount };
})();
