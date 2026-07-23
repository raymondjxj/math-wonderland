/* 数学之美实验室 · 质数之谜
   模式一：埃拉托斯特尼筛法——1~100 方格，动画划掉 2、3、5、7 的倍数，剩下的就是质数。
   模式二：乌拉姆螺旋——数字从中心螺旋排列，质数点亮成金色，神秘的斜线纹理出现了。 */
window.MW = window.MW || {}; MW.lab = MW.lab || {};

(function () {
  function isPrime(n) {
    if (n < 2) return false;
    for (var d = 2; d * d <= n; d++) if (n % d === 0) return false;
    return true;
  }
  function smallestFactor(n) {
    for (var d = 2; d * d <= n; d++) if (n % d === 0) return d;
    return n;
  }

  MW.lab.register({
    id: "prime-spiral",
    icon: "🔢",
    title: "质数之谜",
    desc: "质数是「数的原子」——只能被 1 和它自己整除的数。两千多年前，埃拉托斯特尼发明了筛出质数的妙办法；后来数学家乌拉姆把数字排成螺旋，竟发现了神秘的图案！",
    note: "数学家到今天还在研究质数的秘密图案。在螺旋里点一点格子看看它是几——为什么质数喜欢排成斜线？这至今仍是未解之谜！",
    mount: function (body) {
      var W = 500, H = 500;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      var mode = "sieve"; // "sieve" | "ulam"
      var timer = null, cancel = null;

      /* ---------- 控件 ---------- */
      var ctr = MW.util.el("div", "lab-controls");
      var sieveTab = MW.util.el("button", "lab-tab on", "🧺 埃氏筛法");
      var ulamTab = MW.util.el("button", "lab-tab", "🌀 乌拉姆螺旋");
      var playBtn = MW.util.el("button", "btn small", "▶ 开始筛选");
      var spinBtn = MW.util.el("button", "btn small", "🔁 再转一次");
      spinBtn.style.display = "none";
      ctr.appendChild(sieveTab); ctr.appendChild(ulamTab);
      ctr.appendChild(playBtn); ctr.appendChild(spinBtn);
      body.appendChild(ctr);

      var status = MW.util.el("div", null, "1~100 里藏着 25 个质数。点「开始筛选」，看筛子把它们找出来！");
      status.style.cssText = "text-align:center;color:#ffc233;font-weight:700;min-height:24px;padding-top:8px";
      body.appendChild(status);

      function stopAll() {
        if (timer) { clearInterval(timer); timer = null; }
        if (cancel) { cancel(); cancel = null; }
      }

      /* ================= 埃氏筛法 ================= */
      var CELL = 50;
      var states = new Int8Array(101); // 0 普通 1 划掉 2 当前质数 3 确认质数
      var actions = [];

      function buildActions() {
        actions = [{ n: 1, to: 1, msg: "1 很特殊，它不是质数哦。" }];
        [2, 3, 5, 7].forEach(function (p) {
          actions.push({ n: p, to: 2, msg: p + " 是质数！给它戴上金牌——现在划掉 " + p + " 的其他倍数。" });
          for (var m = p * 2; m <= 100; m += p) actions.push({ n: m, to: 1 });
        });
        for (var n = 2; n <= 100; n++) {
          if (!isPrime(n)) continue;
          actions.push({ n: n, to: 3 });
        }
      }

      function drawSieve() {
        ctx.clearRect(0, 0, W, H);
        for (var n = 1; n <= 100; n++) {
          var r = Math.floor((n - 1) / 10), c = (n - 1) % 10;
          var x = c * CELL, y = r * CELL;
          ctx.strokeStyle = "rgba(255,255,255,.1)";
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 1, y + 1, CELL - 2, CELL - 2);
          var st = states[n];
          var cx = x + CELL / 2, cy = y + CELL / 2;
          if (st === 2 || st === 3) {
            ctx.fillStyle = st === 2 ? "rgba(255,194,51,.3)" : "rgba(255,194,51,.16)";
            ctx.beginPath(); ctx.arc(cx, cy, CELL / 2 - 6, 0, Math.PI * 2); ctx.fill();
          }
          ctx.font = "bold 20px system-ui, sans-serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          if (st === 1) {
            ctx.fillStyle = "rgba(200,200,220,.28)";
            ctx.fillText(n, cx, cy);
            ctx.strokeStyle = "rgba(255,107,107,.75)";
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(x + 10, y + CELL - 10); ctx.lineTo(x + CELL - 10, y + 10); ctx.stroke();
          } else {
            ctx.fillStyle = (st === 2 || st === 3) ? "#ffc233" : "#e8e8ff";
            ctx.fillText(n, cx, cy);
          }
        }
      }

      function playSieve() {
        stopAll();
        states = new Int8Array(101);
        buildActions();
        var i = 0;
        playBtn.disabled = true;
        playBtn.innerHTML = "⏳ 筛选中……";
        timer = setInterval(function () {
          if (i >= actions.length) {
            clearInterval(timer); timer = null;
            playBtn.disabled = false;
            playBtn.innerHTML = "🔁 重新播放";
            status.textContent = "完成！剩下的金色数字都是质数，一共 25 个！";
            drawSieve();
            return;
          }
          var a = actions[i++];
          states[a.n] = a.to;
          if (a.msg) status.textContent = a.msg;
          if (a.to === 2) MW.feedback.sound("click");
          drawSieve();
        }, 65);
      }

      /* ================= 乌拉姆螺旋 ================= */
      var N = 21, UC = 24; // 21×21，每格 24px → 504
      var spiral = [];     // 出螺旋顺序的格子 [{x,y,v}]
      var gridVal = {};    // "x,y" -> v
      (function buildSpiral() {
        var x = 0, y = 0, v = 1;
        var dirs = [[1, 0], [0, -1], [-1, 0], [0, 1]]; // 右 上 左 下
        var di = 0, step = 1;
        spiral.push({ x: x, y: y, v: v });
        while (v < N * N) {
          for (var rep = 0; rep < 2 && v < N * N; rep++) {
            for (var k = 0; k < step && v < N * N; k++) {
              x += dirs[di][0]; y += dirs[di][1]; v++;
              spiral.push({ x: x, y: y, v: v });
            }
            di = (di + 1) % 4;
          }
          step++;
        }
        // 螺旋坐标有正有负，归一化到 0..N-1
        var minX = 0, minY = 0, i;
        for (i = 0; i < spiral.length; i++) {
          if (spiral[i].x < minX) minX = spiral[i].x;
          if (spiral[i].y < minY) minY = spiral[i].y;
        }
        for (i = 0; i < spiral.length; i++) {
          spiral[i].x -= minX;
          spiral[i].y -= minY;
        }
        spiral.forEach(function (c) { gridVal[c.x + "," + c.y] = c.v; });
      })();
      var revealCount = 0;
      var picked = null; // 孩子点选的格子 "x,y"

      function drawUlam() {
        ctx.clearRect(0, 0, W, H);
        var off = (W - (N - 1) * UC) / 2; // 点阵居中：跨度 (N-1)*24 = 480
        for (var i = 0; i < revealCount && i < spiral.length; i++) {
          var c = spiral[i];
          var px = off + c.x * UC, py = off + c.y * UC;
          if (isPrime(c.v)) {
            ctx.fillStyle = "#ffc233";
            ctx.shadowColor = "rgba(255,194,51,.8)";
            ctx.shadowBlur = 7;
            ctx.beginPath();
            ctx.arc(px, py, 4.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = "rgba(255,255,255,.09)";
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        // 中心起点
        if (revealCount > 0) {
          ctx.fillStyle = "#e8e8ff";
          ctx.font = "bold 11px system-ui, sans-serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText("1", off + spiral[0].x * UC, off + spiral[0].y * UC);
        }
        if (picked && gridVal[picked] != null && revealCount >= spiral.length) {
          var pp = picked.split(",");
          ctx.strokeStyle = "#4d96ff"; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(off + (+pp[0]) * UC, off + (+pp[1]) * UC, 9, 0, Math.PI * 2); ctx.stroke();
        }
      }

      function playUlam() {
        stopAll();
        picked = null;
        revealCount = 0;
        status.textContent = "数字从中心的 1 开始，一圈一圈螺旋向外排……";
        cancel = MW.util.tween({ t: 0 }, { t: 1 }, 2600, function (v) {
          revealCount = Math.round(v.t * spiral.length);
          drawUlam();
        }, function () {
          cancel = null;
          status.textContent = "金色斑点全是质数——它们竟然排出了神秘的斜线！点一个格子看看它是几。";
        });
      }

      /* ---------- 模式切换与交互 ---------- */
      function setMode(m) {
        stopAll();
        mode = m;
        sieveTab.classList.toggle("on", m === "sieve");
        ulamTab.classList.toggle("on", m === "ulam");
        playBtn.style.display = m === "sieve" ? "" : "none";
        spinBtn.style.display = m === "ulam" ? "" : "none";
        if (m === "sieve") {
          states = new Int8Array(101);
          playBtn.disabled = false;
          playBtn.innerHTML = "▶ 开始筛选";
          status.textContent = "1~100 里藏着 25 个质数。点「开始筛选」，看筛子把它们找出来！";
          drawSieve();
        } else {
          playUlam();
        }
      }
      sieveTab.onclick = function () { MW.feedback.sound("click"); setMode("sieve"); };
      ulamTab.onclick = function () { MW.feedback.sound("click"); setMode("ulam"); };
      playBtn.onclick = function () { MW.feedback.sound("click"); playSieve(); };
      spinBtn.onclick = function () { MW.feedback.sound("click"); playUlam(); };

      cv.addEventListener("click", function (e) {
        if (mode !== "ulam" || revealCount < spiral.length) return;
        var r = cv.getBoundingClientRect();
        var x = (e.clientX - r.left) * W / r.width;
        var y = (e.clientY - r.top) * H / r.height;
        var off = (W - (N - 1) * UC) / 2;
        var gx = Math.round((x - off) / UC), gy = Math.round((y - off) / UC);
        var v = gridVal[gx + "," + gy];
        if (v == null) return;
        picked = gx + "," + gy;
        if (v === 1) status.textContent = "1 很特殊，它不是质数哦。";
        else if (isPrime(v)) status.textContent = v + " 是质数！✨ 没人能把它拆开（除了 1 × " + v + "）。";
        else { var d = smallestFactor(v); status.textContent = v + " = " + d + " × " + (v / d) + "，所以它不是质数。"; }
        MW.feedback.sound("click");
        drawUlam();
      });

      setMode("sieve");
      return { destroy: stopAll };
    }
  });
})();
