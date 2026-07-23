/* 数学之美实验室 · 密铺工坊
   选一种正多边形，在画布上点击"盖章"铺砖（自动吸附到密铺网格）。
   另有「正五边形会怎样？」演示：108°×3=324° < 360°，铺不满！ */
window.MW = window.MW || {}; MW.lab = MW.lab || {};

(function () {
  var PALETTE = ["#ffc233", "#ff8a3d", "#2ec4b6", "#4d96ff", "#9b5de5", "#f15bb5"];

  MW.lab.register({
    id: "tessellation",
    icon: "🐝",
    title: "密铺工坊",
    desc: "把同一种正多边形一块接一块铺满平面，不留缝隙也不重叠，这叫「密铺」。选一块砖，点点画布，铺出你的图案吧！",
    note: "正多边形里只有正三角形、正方形、正六边形能独自密铺平面——因为只有它们的内角能正好拼满 360°。蜂巢选择六边形：用最少的蜂蜡围出最大的家，蜜蜂是天生的数学家！",
    mount: function (body) {
      var W = 760, H = 440;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      cv.style.touchAction = "none";
      cv.style.cursor = "pointer";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      var SQRT3 = Math.sqrt(3);
      var SHAPES = {
        tri:   { name: "正三角形", s: 46 },
        square:{ name: "正方形",   s: 46 },
        hex:   { name: "正六边形", s: 34 }
      };
      var shape = "hex";
      var tiles = {};        // key -> colorIndex
      var colorIdx = 0;      // 下一块砖的颜色
      var mode = "tile";     // "tile" | "pentagon"

      /* ---------- 控件 ---------- */
      var ctr = MW.util.el("div", "lab-controls");
      var shapeBtns = {};
      [["tri", "🔺 正三角形"], ["square", "⬛ 正方形"], ["hex", "⬡ 正六边形"]].forEach(function (it) {
        var b = MW.util.el("button", "lab-tab", it[1]);
        b.onclick = function () { MW.feedback.sound("click"); setShape(it[0]); };
        ctr.appendChild(b);
        shapeBtns[it[0]] = b;
      });
      var clearBtn = MW.util.el("button", "btn small", "🧹 清空");
      var pentaBtn = MW.util.el("button", "btn small", "🧐 正五边形会怎样？");
      ctr.appendChild(clearBtn);
      ctr.appendChild(pentaBtn);
      body.appendChild(ctr);

      /* ---------- 网格几何 ---------- */
      // 三角形：用斜坐标 (i,j,half)。基向量 e1=(s,0), e2=(s/2, s*√3/2)
      function triPoints(i, j, half, s) {
        var h = s * SQRT3 / 2;
        var p00 = [i * s + j * s / 2, j * h];
        var p10 = [p00[0] + s, p00[1]];
        var p01 = [p00[0] + s / 2, p00[1] + h];
        var p11 = [p01[0] + s, p01[1]];
        return half === 0 ? [p00, p10, p01] : [p11, p01, p10];
      }
      function triSnap(x, y, s) {
        var h = s * SQRT3 / 2;
        var b = y / h, a = (x - b * s / 2) / s;
        var i = Math.floor(a), j = Math.floor(b);
        var half = (a - i) + (b - j) > 1 ? 1 : 0;
        return { key: i + "," + j + "," + half, pts: triPoints(i, j, half, s) };
      }
      function squareSnap(x, y, s) {
        var i = Math.floor(x / s), j = Math.floor(y / s);
        return {
          key: i + "," + j,
          pts: [[i * s, j * s], [(i + 1) * s, j * s], [(i + 1) * s, (j + 1) * s], [i * s, (j + 1) * s]]
        };
      }
      // 六边形：平顶，横向间隔 1.5s，纵向间隔 √3·s，奇数列下移半格
      function hexCenter(q, r, s) {
        return [q * 1.5 * s, r * SQRT3 * s + (q % 2 ? SQRT3 / 2 * s : 0)];
      }
      function hexPoints(q, r, s) {
        var c = hexCenter(q, r, s), pts = [];
        for (var k = 0; k < 6; k++) {
          var a = k * Math.PI / 3;
          pts.push([c[0] + s * Math.cos(a), c[1] + s * Math.sin(a)]);
        }
        return pts;
      }
      function hexSnap(x, y, s) {
        var q0 = Math.round(x / (1.5 * s)), best = null, bestD = 1e9;
        for (var q = q0 - 1; q <= q0 + 1; q++) {
          var off = q % 2 ? SQRT3 / 2 * s : 0;
          var r = Math.round((y - off) / (SQRT3 * s));
          var c = hexCenter(q, r, s);
          var d = (c[0] - x) * (c[0] - x) + (c[1] - y) * (c[1] - y);
          if (d < bestD) { bestD = d; best = { q: q, r: r }; }
        }
        return { key: best.q + "," + best.r, pts: hexPoints(best.q, best.r, s) };
      }
      function snap(x, y) {
        var s = SHAPES[shape].s;
        if (shape === "tri") return triSnap(x, y, s);
        if (shape === "square") return squareSnap(x, y, s);
        return hexSnap(x, y, s);
      }

      /* ---------- 绘制 ---------- */
      function pathPoly(pts) {
        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
        ctx.closePath();
      }
      function drawGhostGrid() {
        ctx.strokeStyle = "rgba(255,255,255,.08)";
        ctx.lineWidth = 1;
        var s = SHAPES[shape].s, i, j, q, r;
        if (shape === "square") {
          for (i = 0; i * s <= W; i++) for (j = 0; j * s <= H; j++) pathPoly(squareSnap(i * s + 1, j * s + 1, s).pts), ctx.stroke();
        } else if (shape === "tri") {
          var h = s * SQRT3 / 2;
          for (j = -1; j * h <= H + h; j++) for (i = -2; i * s <= W + s; i++) {
            pathPoly(triPoints(i, j, 0, s)); ctx.stroke();
            pathPoly(triPoints(i, j, 1, s)); ctx.stroke();
          }
        } else {
          for (q = 0; q * 1.5 * s <= W + s; q++) for (r = -1; r * SQRT3 * s <= H + s; r++) {
            var c = hexCenter(q, r, s);
            if (c[1] < -s || c[1] > H + s) continue;
            pathPoly(hexPoints(q, r, s)); ctx.stroke();
          }
        }
      }
      function drawTiles() {
        for (var key in tiles) {
          var t = tiles[key];
          ctx.fillStyle = PALETTE[t.color % PALETTE.length];
          ctx.globalAlpha = 0.9;
          pathPoly(t.pts); ctx.fill();
          ctx.globalAlpha = 1;
          ctx.strokeStyle = "rgba(20,20,40,.55)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }
      function drawBoard() {
        ctx.clearRect(0, 0, W, H);
        drawGhostGrid();
        drawTiles();
      }

      /* ---------- 正五边形演示 ---------- */
      // 以 O 为一个顶点、占据 [ang, ang+108°] 楔形的正五边形顶点序列
      function pentagonPoints(O, s, ang) {
        var pts = [O.slice()], dir = ang;
        for (var k = 0; k < 4; k++) {
          var last = pts[pts.length - 1];
          pts.push([last[0] + s * Math.cos(dir), last[1] + s * Math.sin(dir)]);
          dir += 72 * Math.PI / 180; // 外角 72°
        }
        return pts;
      }
      function drawPentagonDemo(t) {
        ctx.clearRect(0, 0, W, H);
        var O = [W / 2, H / 2 + 30], s = 105;
        var start = -90 * Math.PI / 180; // 第一块朝上
        for (var k = 0; k < 3; k++) {
          var appear = t * 3 - k; // 依次出现
          if (appear <= 0) continue;
          var sc = Math.min(1, appear);
          var ang = start + k * 108 * Math.PI / 180;
          var pts = pentagonPoints(O, s * sc, ang);
          ctx.fillStyle = PALETTE[k];
          ctx.globalAlpha = 0.55 * sc;
          pathPoly(pts); ctx.fill();
          ctx.globalAlpha = Math.min(1, sc);
          ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke();
          // 内角标注 108°
          var mid = ang + 54 * Math.PI / 180;
          var arcR = 34 * sc;
          ctx.strokeStyle = "rgba(255,255,255,.85)"; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(O[0], O[1], arcR, ang, ang + 108 * Math.PI / 180); ctx.stroke();
          ctx.fillStyle = "#fff";
          ctx.font = "bold 15px system-ui, sans-serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText("108°", O[0] + Math.cos(mid) * 58, O[1] + Math.sin(mid) * 58);
          ctx.globalAlpha = 1;
        }
        // 缺口楔形
        if (t > 0.95) {
          var g0 = start + 3 * 108 * Math.PI / 180, g1 = start + 2 * Math.PI;
          ctx.strokeStyle = "#ffc233"; ctx.lineWidth = 3;
          ctx.setLineDash([7, 6]);
          ctx.beginPath(); ctx.moveTo(O[0], O[1]);
          ctx.lineTo(O[0] + s * Math.cos(g0), O[1] + s * Math.sin(g0)); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(O[0], O[1]);
          ctx.lineTo(O[0] + s * Math.cos(g1), O[1] + s * Math.sin(g1)); ctx.stroke();
          ctx.setLineDash([]);
          ctx.beginPath(); ctx.arc(O[0], O[1], 30, g0, g1); ctx.stroke();
          var gm = (g0 + g1) / 2;
          ctx.fillStyle = "#ffc233";
          ctx.font = "bold 17px system-ui, sans-serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText("缺口 36°", O[0] + Math.cos(gm) * 74, O[1] + Math.sin(gm) * 74);
        }
        ctx.fillStyle = "#ffc233";
        ctx.font = "bold 19px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("108° × 3 = 324°，比一圈 360° 还差 36°！", W / 2, 34);
        ctx.fillStyle = "#e8e8ff";
        ctx.font = "15px system-ui, sans-serif";
        ctx.fillText("三块正五边形拼在一起会留下缺口，所以正五边形不能独自密铺平面。", W / 2, H - 22);
      }

      /* ---------- 状态切换 ---------- */
      var cancel = null;
      function setShape(s) {
        shape = s; mode = "tile";
        tiles = {}; colorIdx = 0;
        for (var k in shapeBtns) shapeBtns[k].classList.toggle("on", k === s);
        pentaBtn.innerHTML = "🧐 正五边形会怎样？";
        prefill();
        drawBoard();
      }
      function stamp(x, y, recolor) {
        var t = snap(x, y);
        if (tiles[t.key]) {
          if (recolor) tiles[t.key].color = colorIdx++ ;
          else return;
        } else {
          tiles[t.key] = { pts: t.pts, color: colorIdx++ };
        }
      }
      // 初始预铺一小片，避免空白画布
      function prefill() {
        if (shape === "hex") {
          var cq = 7, cr = 3, s = SHAPES.hex.s;
          stamp.apply(null, hexCenter(cq, cr, s));
          var cand = [[cq + 1, cr], [cq + 1, cr - 1], [cq + 1, cr + 1], [cq - 1, cr], [cq - 1, cr - 1], [cq - 1, cr + 1], [cq, cr + 1], [cq, cr - 1]];
          var c0 = hexCenter(cq, cr, s);
          cand.forEach(function (qr) {
            var c = hexCenter(qr[0], qr[1], s);
            var d = Math.hypot(c[0] - c0[0], c[1] - c0[1]);
            if (Math.abs(d - SQRT3 * s) < 1) stamp(c[0], c[1]);
          });
        } else if (shape === "square") {
          var s2 = SHAPES.square.s;
          for (var i = 6; i < 11; i++) for (var j = 3; j < 7; j++)
            if ((i + j) % 2 === 0) stamp(i * s2 + 2, j * s2 + 2);
        } else {
          var s3 = SHAPES.tri.s, h3 = s3 * SQRT3 / 2;
          for (var jj = 3; jj < 7; jj++) for (var ii = 6; ii < 11; ii++) {
            stamp(ii * s3 + jj * s3 / 2 + s3 / 4, jj * h3 + h3 / 4);       // half 0 内一点
            stamp(ii * s3 + jj * s3 / 2 + s3, jj * h3 + 2 * h3 / 3);       // half 1 内一点
          }
        }
      }

      /* ---------- 交互：点按盖章，可拖动连铺 ---------- */
      var painting = false;
      function pos(e) {
        var r = cv.getBoundingClientRect();
        return [(e.clientX - r.left) * W / r.width, (e.clientY - r.top) * H / r.height];
      }
      cv.addEventListener("pointerdown", function (e) {
        if (mode !== "tile") return;
        e.preventDefault();
        painting = true;
        var p = pos(e);
        stamp(p[0], p[1], true);
        MW.feedback.sound("click");
        drawBoard();
      });
      cv.addEventListener("pointermove", function (e) {
        if (!painting || mode !== "tile") return;
        var p = pos(e);
        stamp(p[0], p[1], false);
        drawBoard();
      });
      function stopPaint() { painting = false; }
      window.addEventListener("pointerup", stopPaint);
      window.addEventListener("pointercancel", stopPaint);

      clearBtn.onclick = function () {
        if (mode !== "tile") return;
        tiles = {}; MW.feedback.sound("click"); drawBoard();
      };
      pentaBtn.onclick = function () {
        MW.feedback.sound("click");
        if (mode === "pentagon") { setShape(shape); return; }
        mode = "pentagon";
        pentaBtn.innerHTML = "🔙 返回铺砖";
        if (cancel) cancel();
        cancel = MW.util.tween({ t: 0 }, { t: 1 }, 1400, function (v) { drawPentagonDemo(v.t); });
      };

      setShape("hex");
      return {
        destroy: function () {
          if (cancel) cancel();
          window.removeEventListener("pointerup", stopPaint);
          window.removeEventListener("pointercancel", stopPaint);
        }
      };
    }
  });
})();
