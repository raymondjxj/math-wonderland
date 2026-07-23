/* 数学博物馆 · 参考互动：小高斯的闪电算法（ppl-gauss）
   1+2+…+100：首尾配对，每对 101，共 50 对 → 5050 */
window.MW = window.MW || {}; MW.museum = MW.museum || {};

(function () {
  MW.museum.register({
    id: "ppl-gauss",
    hall: "people",
    icon: "👦",
    title: "小高斯的闪电算法",
    sub: "老师想难住全班，9 岁的高斯 30 秒就算完了",
    paragraphs: [
      "两百多年前，德国小学课堂上，老师想让大家安静一会儿，出了一道题：1 + 2 + 3 + …… + 100 = ？",
      "别的孩子埋头苦算，小高斯却盯着数字看了一会儿，写下答案：5050。",
      "他没有一个一个加——他发现了一个<b>配对</b>的秘密。点下面的按钮，亲眼看看他看到了什么。"
    ],
    mount: function (body) {
      var W = 760, H = 330;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      var pairs = 0;          // 已配成的对数
      var SHOW = 5;           // 两端各显示 5 个数
      var SP = 56, R0 = 22;   // 间距与圆点半径
      var info = MW.util.el("div", "caption-box", "点击「配一对」，把最小的和最大的配在一起 👇");
      info.style.minHeight = "56px";
      info.style.background = "rgba(255,194,51,.15)";
      info.style.color = "#fff";
      body.appendChild(info);

      function draw() {
        ctx.clearRect(0, 0, W, H);
        var cy1 = 90, cy2 = 250, r = 24;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        // 上排：1..5 … 96..100
        for (var i = 0; i < SHOW; i++) {
          var nL = i + 1, nR = 100 - SHOW + 1 + i;
          dot(60 + i * SP, cy1, nL, i < pairs);
          dot(60 + (SHOW + 1) * SP + i * SP, cy1, nR, (SHOW - 1 - i) < pairs);
        }
        ctx.fillStyle = "#b9b9dd"; ctx.font = "900 20px sans-serif";
        ctx.fillText("…", 60 + SHOW * SP + SP / 2, cy1);
        // 下排：配好的对
        for (var p = 0; p < pairs; p++) {
          var a = p + 1, b = 100 - p;
          var x = 70 + p * 76;
          if (x > W - 90) break;
          ctx.fillStyle = "rgba(255,194,51,.18)";
          ctx.beginPath(); ctx.arc(x, cy2, 30, 0, 2 * Math.PI); ctx.fill();
          ctx.fillStyle = "#ffc233"; ctx.font = "900 16px 'Chalkboard SE','PingFang SC',sans-serif";
          ctx.fillText(a + "+" + b, x, cy2 - 8);
          ctx.fillStyle = "#fff";
          ctx.fillText("=101", x, cy2 + 12);
        }
        // 连线
        ctx.strokeStyle = "rgba(255,194,51,.7)"; ctx.lineWidth = 2;
        for (var q = 0; q < Math.min(pairs, SHOW); q++) {
          ctx.beginPath();
          ctx.moveTo(60 + q * SP, cy1 + R0);
          ctx.quadraticCurveTo(W / 2, 170 + q * 10, 60 + (SHOW + 1) * SP + (SHOW - 1 - q) * SP, cy1 + R0);
          ctx.stroke();
        }
      }
      function dot(x, y, n, paired) {
        ctx.beginPath(); ctx.arc(x, y, R0, 0, 2 * Math.PI);
        ctx.fillStyle = paired ? "#ffc233" : "rgba(255,255,255,.14)";
        ctx.fill();
        ctx.fillStyle = paired ? "#141433" : "#fff";
        ctx.font = "900 16px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.fillText(n, x, y);
      }

      var ctr = MW.util.el("div", "lab-controls");
      var bPair = MW.util.el("button", "btn small", "🤝 配一对");
      var bAll = MW.util.el("button", "btn ghost small", "⏩ 全部配完");
      ctr.appendChild(bPair); ctr.appendChild(bAll);
      body.appendChild(ctr);

      function step() {
        if (pairs >= 50) return;
        pairs++;
        MW.feedback.sound("click");
        if (pairs <= 4) {
          info.innerHTML = (pairs) + " + " + (101 - pairs) + " = <b>101</b>！下一对还是 101 吗？";
        } else if (pairs < 50) {
          info.innerHTML = "已经配了 <b>" + pairs + "</b> 对，每对都是 101……";
        }
        if (pairs === 50) finish();
        draw();
      }
      function finish() {
        pairs = 50;
        info.innerHTML = "1~100 正好配成 <b>50 对</b>，每对 101 → <b>101 × 50 = 5050</b>！小高斯就是这样一眼看穿。";
        MW.feedback.confetti();
        MW.feedback.sound("star");
      }
      bPair.onclick = step;
      bAll.onclick = function () { pairs = 50; finish(); draw(); };

      draw();
      return { destroy: function () {} };
    }
  });
})();
