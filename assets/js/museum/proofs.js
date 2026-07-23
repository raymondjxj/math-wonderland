/* 数学博物馆 · 无字证明画廊（hall: "proof"）
   不用公式，用眼睛看懂的证明：
   赵爽弦图 / 奇数和是平方数 / (a+b)² / 三角形内角和 */
window.MW = window.MW || {}; MW.museum = MW.museum || {};

(function () {
  var FONT = "'Chalkboard SE','PingFang SC',sans-serif";

  function makeCanvas(body, W, H) {
    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = "100%";
    cv.style.maxWidth = W + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    body.appendChild(cv);
    return ctx;
  }
  // caption-box 是 flex 容器：把内容包进唯一一个 span，避免 <b> 被当成 flex item 挤成多列
  function makeInfo(body, html) {
    var info = document.createElement("div");
    info.className = "caption-box";
    info.style.minHeight = "56px";
    info.style.background = "rgba(255,194,51,.15)";
    info.style.color = "#fff";
    var span = MW.util.el("span");
    info.appendChild(span);
    body.appendChild(info);
    Object.defineProperty(info, "innerHTML", {
      get: function () { return span.innerHTML; },
      set: function (h) { span.innerHTML = h; }
    });
    info.innerHTML = html;
    return info;
  }
  function lerp(a, b, t) { return a + (b - a) * t; }

  /* ============ 1. 赵爽弦图：a²+b²=c² ============ */
  MW.museum.register({
    id: "prf-gougu",
    hall: "proof",
    icon: "📐",
    title: "勾股定理 · 赵爽弦图",
    sub: "四个三角形转一转，c² 就变成了 a²+b²",
    paragraphs: [
      "近两千年前，中国数学家赵爽为《周髀算经》作注时，画下了这幅「弦图」：四个一模一样的直角三角形围成一圈。",
      "点下面的「转一转」，四个三角形会在同一个大正方形里重新排队——中间空出来的地方，从一块 c² 的正方形，变成 a² 和 b² 两块正方形。大正方形没变，三角形没变，空地当然一样大：所以 a² + b² = c²。这就是中国古人的「出入相补」原理。",
      "2002 年国际数学家大会在北京召开，会徽正是这幅弦图——一个没有字的证明，成了全世界数学家的共同语言。"
    ],
    mount: function (body) {
      var W = 760, H = 500;
      var ctx = makeCanvas(body, W, H);
      var a = 3, b = 4, u = 46;          // 3-4-5 直角三角形
      var S = (a + b) * u;               // 大正方形边长（像素）
      var ox = (W - S) / 2, oy = 60;
      var COLORS = ["#ffc233", "#35c163", "#6ea8ff", "#ff8fa3"];

      // 每个三角形：局部坐标 (0,0)-(a,0)-(0,b)，姿态 = 平移 + 旋转
      // 状态 0「弦图」：直角顶点在大正方形四角，斜边围成中间倾斜的 c²
      // 状态 1「重排」：两两拼成 a×b 矩形，留下 a² 与 b² 两块空地
      var A = [ {x:0, y:0, r:0}, {x:S, y:0, r:90}, {x:S, y:S, r:180}, {x:0, y:S, r:270} ];
      var B = [ {x:0, y:a*u, r:0}, {x:a*u, y:S, r:180}, {x:S, y:0, r:90}, {x:a*u, y:a*u, r:270} ];
      var state = 0, t = 0, cancelAnim = null;

      function pose(i) {
        return {
          x: lerp(A[i].x, B[i].x, t), y: lerp(A[i].y, B[i].y, t),
          r: lerp(A[i].r, B[i].r, t) * Math.PI / 180
        };
      }
      function drawTriangle(i) {
        var p = pose(i);
        ctx.save();
        ctx.translate(ox + p.x, oy + p.y);
        ctx.rotate(p.r);
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(a * u, 0); ctx.lineTo(0, b * u); ctx.closePath();
        ctx.fillStyle = COLORS[i]; ctx.fill();
        ctx.lineWidth = 2.5; ctx.strokeStyle = "#141433"; ctx.stroke();
        ctx.restore();
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        // 大正方形外框
        ctx.strokeStyle = "rgba(255,255,255,.75)"; ctx.lineWidth = 2;
        ctx.setLineDash([8, 6]);
        ctx.strokeRect(ox, oy, S, S);
        ctx.setLineDash([]);
        // 空地高亮：状态0 = 倾斜的 c²；状态1 = a² 与 b²
        ctx.fillStyle = "rgba(255,255,255,.16)";
        if (1 - t > 0.01) {
          ctx.save(); ctx.globalAlpha = 1 - t;
          ctx.beginPath();
          ctx.moveTo(ox + a*u, oy); ctx.lineTo(ox + S, oy + a*u);
          ctx.lineTo(ox + b*u, oy + S); ctx.lineTo(ox, oy + b*u);
          ctx.closePath(); ctx.fill();
          ctx.fillStyle = "#ffc233"; ctx.font = "900 30px " + FONT;
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText("c²", ox + S/2, oy + S/2);
          ctx.restore();
        }
        if (t > 0.01) {
          ctx.save(); ctx.globalAlpha = t;
          ctx.fillStyle = "rgba(255,255,255,.16)";
          ctx.fillRect(ox, oy, a*u, a*u);
          ctx.fillRect(ox + a*u, oy + a*u, b*u, b*u);
          ctx.fillStyle = "#ffc233"; ctx.font = "900 26px " + FONT;
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText("a²", ox + a*u/2, oy + a*u/2);
          ctx.fillText("b²", ox + a*u + b*u/2, oy + a*u + b*u/2);
          ctx.restore();
        }
        for (var i = 0; i < 4; i++) drawTriangle(i);
        // 边长标注
        ctx.fillStyle = "#b9b9dd"; ctx.font = "700 15px " + FONT;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText("a", ox + a*u/2, oy - 16);
        ctx.fillText("b", ox + a*u + b*u/2, oy - 16);
        ctx.fillText("b", ox - 16, oy + b*u/2);
        ctx.fillText("a", ox - 16, oy + b*u + a*u/2);
        // 底部结论
        ctx.fillStyle = "#fff"; ctx.font = "900 21px " + FONT;
        if (t < 0.5) {
          ctx.fillText("大正方形 = 4 个三角形 + c²", W/2, oy + S + 34);
        } else {
          ctx.fillText("大正方形 = 4 个三角形 + a² + b²   →   a² + b² = c²", W/2, oy + S + 34);
        }
      }

      var info = makeInfo(body,
        "四个三角形围成一圈，中间空出一块倾斜的正方形——它的边长正好是斜边 c，面积是 <b>c²</b>。点「转一转」试试！");
      var ctr = MW.util.el("div", "lab-controls");
      var bTurn = MW.util.el("button", "btn small", "🔃 转一转");
      ctr.appendChild(bTurn);
      body.appendChild(ctr);

      bTurn.onclick = function () {
        if (cancelAnim) return;
        MW.feedback.sound("click");
        var to = state === 0 ? 1 : 0, from = t;
        cancelAnim = MW.util.tween({ v: from }, { v: to }, 900, function (v) {
          t = v.v; draw();
        }, function () {
          cancelAnim = null; state = to;
          if (state === 1) {
            info.innerHTML = "还是那四个三角形，只是换了个摆法！这次空出两块正方形：<b>a²</b> 和 <b>b²</b>。大正方形一样大，三角形一样多——所以 <b>a² + b² = c²</b>！";
            bTurn.textContent = "🔃 转回去";
            MW.feedback.confetti(); MW.feedback.sound("star");
          } else {
            info.innerHTML = "转回来了：中间空出的是倾斜的 <b>c²</b>。不管怎么摆，空地都一样大。";
            bTurn.textContent = "🔃 转一转";
          }
        });
      };

      draw();
      return { destroy: function () { if (cancelAnim) cancelAnim(); } };
    }
  });

  /* ============ 2. 奇数和是平方数：1+3+5+…+(2n−1)=n² ============ */
  MW.museum.register({
    id: "prf-oddsum",
    hall: "proof",
    icon: "🟦",
    title: "奇数和是平方数",
    sub: "L 形方块一层层包住正方形：1+3+5+…+(2n−1)=n²",
    paragraphs: [
      "1 = 1²，1+3 = 4 = 2²，1+3+5 = 9 = 3²……是巧合吗？",
      "点「加一层」，你会看到：每一个新的奇数，正好是一个 L 形，刚好包住原来的正方形一圈，变成一个更大的正方形。所以 1+3+5+…+(2n−1) = n²，永远成立。"
    ],
    mount: function (body) {
      var W = 760, H = 440;
      var ctx = makeCanvas(body, W, H);
      var MAX = 8, CELL = 44, GX = 36, GY = 30;
      var PALETTE = ["#ffd166", "#6ea8ff", "#35c163", "#ff8fa3", "#c792ea", "#4ecdc4", "#ffa94d", "#ff6b6b"];
      var n = 2;

      function draw() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < n; i++) {
          for (var j = 0; j < n; j++) {
            var k = Math.max(i, j);      // 第 k 层（0 起），共 2k+1 块
            ctx.fillStyle = PALETTE[k % PALETTE.length];
            ctx.fillRect(GX + i * CELL + 1.5, GY + j * CELL + 1.5, CELL - 3, CELL - 3);
            if (k === n - 1) {
              ctx.strokeStyle = "#fff"; ctx.lineWidth = 2.5;
              ctx.strokeRect(GX + i * CELL + 3, GY + j * CELL + 3, CELL - 6, CELL - 6);
            }
          }
        }
        // 右侧算式记录
        var tx = GX + MAX * CELL + 46;
        ctx.textAlign = "left"; ctx.textBaseline = "middle";
        ctx.fillStyle = "#b9b9dd"; ctx.font = "800 17px " + FONT;
        ctx.fillText("一层一层看：", tx, GY + 10);
        for (var k = 0; k < n; k++) {
          var y = GY + 44 + k * 32;
          ctx.fillStyle = PALETTE[k % PALETTE.length];
          ctx.fillRect(tx, y - 8, 16, 16);
          ctx.fillStyle = k === n - 1 ? "#ffc233" : "#dcdcf5";
          ctx.font = (k === n - 1 ? "900 18px " : "700 16px ") + FONT;
          var parts = [];
          for (var m = 0; m <= k; m++) parts.push(2 * m + 1);
          ctx.fillText(parts.join("+") + " = " + (k + 1) * (k + 1) + " = " + (k + 1) + "²", tx + 26, y);
        }
        ctx.fillStyle = "#fff"; ctx.font = "900 20px " + FONT;
        ctx.fillText("1+3+5+…+(2n−1) = n²", tx, GY + 60 + n * 32);
      }

      var info = makeInfo(body, "");
      function say() {
        var parts = [];
        for (var m = 0; m < n; m++) parts.push(2 * m + 1);
        info.innerHTML = "现在 <b>" + n + "×" + n + "</b>：" + parts.join("+") +
          " = <b>" + n * n + "</b>。新的一圈 L 形正好 <b>" + (2 * n - 1) + "</b> 块——下一个奇数！";
      }
      var ctr = MW.util.el("div", "lab-controls");
      var bAdd = MW.util.el("button", "btn small", "➕ 加一层");
      var bReset = MW.util.el("button", "btn ghost small", "↺ 再来一次");
      ctr.appendChild(bAdd); ctr.appendChild(bReset);
      body.appendChild(ctr);

      bAdd.onclick = function () {
        if (n >= MAX) return;
        n++; MW.feedback.sound("click");
        if (n === MAX) {
          bAdd.disabled = true;
          info.innerHTML = "已经 8 层啦！不管加多少层，每圈的 L 形永远正好是下一个奇数——所以 <b>1+3+5+…+(2n−1) = n²</b> 永远成立。";
          MW.feedback.confetti(); MW.feedback.sound("star");
        } else say();
        draw();
      };
      bReset.onclick = function () {
        n = 1; bAdd.disabled = false; MW.feedback.sound("click"); say(); draw();
      };

      say(); draw();
      return { destroy: function () {} };
    }
  });

  /* ============ 3. (a+b)² 的面积证明 ============ */
  MW.museum.register({
    id: "prf-square",
    hall: "proof",
    icon: "🔲",
    title: "(a+b)² 藏在面积里",
    sub: "把大正方形切成四块：(a+b)² = a² + 2ab + b²",
    paragraphs: [
      "(a+b)² 等于 a²+b² 吗？拖动滑块，用面积看一看。",
      "边长 a+b 的大正方形，可以被切成四块：一个 a²、一个 b²，还有两个一模一样的 a×b。所以 (a+b)² = a² + 2ab + b²——那两块 ab 可不能丢！"
    ],
    mount: function (body) {
      var W = 760, H = 460;
      var ctx = makeCanvas(body, W, H);
      var a = 5, b = 3;

      function draw() {
        ctx.clearRect(0, 0, W, H);
        var side = 330 / (a + b);         // 自适应缩放
        var aw = a * side, bw = b * side;
        var ox = 40, oy = 56;
        // 四块
        ctx.fillStyle = "#ffc233"; ctx.fillRect(ox, oy, aw, aw);                       // a²
        ctx.fillStyle = "#6ea8ff"; ctx.fillRect(ox + aw, oy, bw, aw);                  // ab
        ctx.fillStyle = "#6ea8ff"; ctx.fillRect(ox, oy + aw, aw, bw);                  // ab
        ctx.fillStyle = "#35c163"; ctx.fillRect(ox + aw, oy + aw, bw, bw);             // b²
        ctx.strokeStyle = "#141433"; ctx.lineWidth = 2.5;
        ctx.strokeRect(ox, oy, aw + bw, aw + bw);
        ctx.beginPath();
        ctx.moveTo(ox + aw, oy); ctx.lineTo(ox + aw, oy + aw + bw);
        ctx.moveTo(ox, oy + aw); ctx.lineTo(ox + aw + bw, oy + aw);
        ctx.stroke();
        // 块内标签
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillStyle = "#141433"; ctx.font = "900 22px " + FONT;
        ctx.fillText("a²", ox + aw/2, oy + aw/2);
        ctx.fillText("b²", ox + aw + bw/2, oy + aw + bw/2);
        ctx.font = "900 18px " + FONT;
        ctx.fillText("ab", ox + aw + bw/2, oy + aw/2);
        ctx.fillText("ab", ox + aw/2, oy + aw + bw/2);
        // 边长标注
        ctx.fillStyle = "#b9b9dd"; ctx.font = "700 15px " + FONT;
        ctx.fillText("a = " + a, ox + aw/2, oy - 16);
        ctx.fillText("b = " + b, ox + aw + bw/2, oy - 16);
        // 右侧数字账
        var tx = ox + aw + bw + 42;
        ctx.textAlign = "left";
        ctx.fillStyle = "#fff"; ctx.font = "900 19px " + FONT;
        ctx.fillText("(a+b)² = a² + 2ab + b²", tx, oy + 6);
        var rows = [
          ["#ffc233", "a² = " + a + "×" + a + " = " + a * a],
          ["#6ea8ff", "ab = " + a + "×" + b + " = " + a * b],
          ["#6ea8ff", "ab = " + a + "×" + b + " = " + a * b],
          ["#35c163", "b² = " + b + "×" + b + " = " + b * b]
        ];
        rows.forEach(function (r, i) {
          var y = oy + 52 + i * 36;
          ctx.fillStyle = r[0]; ctx.fillRect(tx, y - 8, 16, 16);
          ctx.fillStyle = "#dcdcf5"; ctx.font = "700 16px " + FONT;
          ctx.fillText(r[1], tx + 26, y);
        });
        var total = (a + b) * (a + b);
        ctx.fillStyle = "#ffc233"; ctx.font = "900 18px " + FONT;
        ctx.fillText("(" + a + "+" + b + ")² = " + total + " = " +
          (a * a) + " + " + 2 * a * b + " + " + (b * b), tx, oy + 64 + 4 * 36);
      }

      var info = makeInfo(body, "拖动滑块改变 a 和 b——不管怎么变，四块永远正好拼成一个大正方形。");
      var ctr = MW.util.el("div", "lab-controls");
      var la = MW.util.el("label", null, "a ");
      var sa = document.createElement("input");
      sa.type = "range"; sa.min = 2; sa.max = 8; sa.value = a;
      la.appendChild(sa);
      var lb = MW.util.el("label", null, "b ");
      var sb = document.createElement("input");
      sb.type = "range"; sb.min = 1; sb.max = 7; sb.value = b;
      lb.appendChild(sb);
      ctr.appendChild(la); ctr.appendChild(lb);
      body.appendChild(ctr);

      sa.oninput = function () { a = +sa.value; draw(); };
      sb.oninput = function () { b = +sb.value; draw(); };

      draw();
      return { destroy: function () {} };
    }
  });

  /* ============ 4. 三角形内角和：撕下三个角 ============ */
  MW.museum.register({
    id: "prf-triangle",
    hall: "proof",
    icon: "📐",
    title: "三角形内角和",
    sub: "撕下三个角拼一拼：正好是一条直线 180°",
    paragraphs: [
      "随便画一个三角形，不管它长得高矮胖瘦，三个内角加起来永远是 180°。",
      "点「撕下三个角」，把三个角搬到同一条直线上——它们肩并肩，正好拼成一个平角。还可以「换一个三角形」再撕一次，每次都一样！"
    ],
    mount: function (body) {
      var W = 760, H = 520;
      var ctx = makeCanvas(body, W, H);
      var P = { x: 380, y: 452 };          // 直线上的拼接点
      var LINE_Y = 452, R = 44;
      var tri, angles, wedges, t = 0, torn = false, cancelAnim = null;

      function randTri() {
        var A = { x: 120 + Math.random() * 60, y: 300 + Math.random() * 30 };
        var B = { x: 560 + Math.random() * 60, y: 300 + Math.random() * 30 };
        var C = { x: 250 + Math.random() * 260, y: 80 + Math.random() * 90 };
        return [A, B, C];
      }
      function compute() {
        angles = []; wedges = [];
        var names = ["α", "β", "γ"];
        tri.forEach(function (V, i) {
          var U = tri[(i + 1) % 3], Wp = tri[(i + 2) % 3];
          var d1 = Math.atan2(U.y - V.y, U.x - V.x);
          var d2 = Math.atan2(Wp.y - V.y, Wp.x - V.x);
          var diff = d2 - d1;
          while (diff > Math.PI) diff -= 2 * Math.PI;
          while (diff < -Math.PI) diff += 2 * Math.PI;
          var start = diff > 0 ? d1 : d2, sweep = Math.abs(diff);
          angles.push(sweep);
          wedges.push({ vx: V.x, vy: V.y, start: start, sweep: sweep, name: names[i] });
        });
        // 目标：从 180° 起依次排在直线左侧→右侧（画布坐标，270° 朝上）
        var acc = Math.PI;
        wedges.forEach(function (w) {
          w.target = acc; acc += w.sweep;
          var d = w.target - w.start;
          while (d > Math.PI) d -= 2 * Math.PI;
          while (d < -Math.PI) d += 2 * Math.PI;
          w.rotDelta = d;
        });
      }
      function drawWedge(x, y, start, sweep, color, label) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, R, start, start + sweep);
        ctx.closePath();
        ctx.fillStyle = color; ctx.fill();
        ctx.strokeStyle = "#141433"; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = "#141433"; ctx.font = "900 15px " + FONT;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        var mid = start + sweep / 2;
        ctx.fillText(label, x + Math.cos(mid) * R * 0.6, y + Math.sin(mid) * R * 0.6);
      }
      function draw() {
        ctx.clearRect(0, 0, W, H);
        // 三角形本体（角撕下后变淡，原处留下虚线扇形缺口）
        ctx.beginPath();
        ctx.moveTo(tri[0].x, tri[0].y);
        ctx.lineTo(tri[1].x, tri[1].y);
        ctx.lineTo(tri[2].x, tri[2].y);
        ctx.closePath();
        ctx.fillStyle = "rgba(255,255,255," + (0.14 * (1 - t) + 0.03 * t) + ")";
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.8)"; ctx.lineWidth = 2.5; ctx.stroke();
        wedges.forEach(function (w) {
          if (t > 0.02) {
            ctx.setLineDash([5, 5]);
            ctx.strokeStyle = "rgba(255,255,255,.45)"; ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(w.vx, w.vy);
            ctx.arc(w.vx, w.vy, R, w.start, w.start + w.sweep);
            ctx.closePath(); ctx.stroke();
            ctx.setLineDash([]);
          }
        });
        // 底部直线
        ctx.strokeStyle = "rgba(255,255,255,.7)"; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(110, LINE_Y); ctx.lineTo(650, LINE_Y); ctx.stroke();
        if (t > 0.95) {
          ctx.fillStyle = "#ffc233"; ctx.font = "900 20px " + FONT;
          ctx.textAlign = "center"; ctx.textBaseline = "top";
          ctx.fillText("平角 = 180°", P.x, LINE_Y + 14);
        }
        // 三个角：t=0 在原位，t=1 飞到 P 点拼好
        var COLORS = ["#ffc233", "#6ea8ff", "#ff8fa3"];
        wedges.forEach(function (w, i) {
          var x = lerp(w.vx, P.x, t), y = lerp(w.vy, P.y, t);
          var st = w.start + w.rotDelta * t;
          drawWedge(x, y, st, w.sweep, COLORS[i], w.name);
        });
      }

      var info = makeInfo(body,
        "一个普普通通的三角形。点「✂️ 撕下三个角」，看看它们能拼成什么。");
      var ctr = MW.util.el("div", "lab-controls");
      var bTear = MW.util.el("button", "btn small", "✂️ 撕下三个角");
      var bNew = MW.util.el("button", "btn ghost small", "🔀 换一个三角形");
      ctr.appendChild(bTear); ctr.appendChild(bNew);
      body.appendChild(ctr);

      bTear.onclick = function () {
        if (cancelAnim) return;
        MW.feedback.sound("click");
        var to = torn ? 0 : 1, from = t;
        cancelAnim = MW.util.tween({ v: from }, { v: to }, 900, function (v) {
          t = v.v; draw();
        }, function () {
          cancelAnim = null; torn = (to === 1);
          if (torn) {
            info.innerHTML = "三个角肩并肩，严丝合缝拼成<b>一条直线</b>——平角 180°！所以三角形内角和 = <b>180°</b>。";
            bTear.textContent = "🧩 拼回去";
            MW.feedback.confetti(); MW.feedback.sound("star");
          } else {
            info.innerHTML = "角都回家啦。换个三角形再撕一次，结果还是 180°。";
            bTear.textContent = "✂️ 撕下三个角";
          }
        });
      };
      bNew.onclick = function () {
        if (cancelAnim) return;
        MW.feedback.sound("click");
        tri = randTri(); compute();
        t = 0; torn = false;
        bTear.textContent = "✂️ 撕下三个角";
        info.innerHTML = "换了一个新三角形。再撕一次试试——结果会不一样吗？";
        draw();
      };

      tri = randTri(); compute(); draw();
      return { destroy: function () { if (cancelAnim) cancelAnim(); } };
    }
  });
})();
