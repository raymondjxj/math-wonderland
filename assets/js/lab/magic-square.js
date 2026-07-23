/* 数学之美实验室 · 幻方挑战
   3×3 方格 + 数字牌 1~9。点击数字牌再点格子放入；点已放的格子取下。
   实时显示每行、每列、每条对角线的和；全部等于 15 时礼花庆祝（洛书）。 */
window.MW = window.MW || {}; MW.lab = MW.lab || {};

(function () {
  // 洛书及全部旋转/镜像（共 8 个解），行优先一维数组
  var BASE = [8, 1, 6, 3, 5, 7, 4, 9, 2];
  var SOLUTIONS = (function () {
    function rot(b) { // 顺时针 90°
      var r = new Array(9);
      for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) r[j * 3 + (2 - i)] = b[i * 3 + j];
      return r;
    }
    function flip(b) { // 左右镜像
      var r = new Array(9);
      for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) r[i * 3 + (2 - j)] = b[i * 3 + j];
      return r;
    }
    var out = [], cur = BASE;
    for (var k = 0; k < 4; k++) { out.push(cur); out.push(flip(cur)); cur = rot(cur); }
    return out;
  })();
  var LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 行
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 列
    [0, 4, 8], [2, 4, 6]             // 对角线
  ];

  MW.lab.register({
    id: "magic-square",
    icon: "✨",
    title: "幻方挑战",
    desc: "传说四千多年前，洛水里浮出一只神龟，龟壳上的花纹就是这个方阵：每行、每列、每条对角线的和都等于 15！它就是著名的「洛书」，世界上最早的幻方。你能把 1~9 摆回去吗？",
    note: "小秘密：5 一定要坐在正中间，双数守在四个角。古人把洛书当作吉祥的图案，它藏着中国古代数学的智慧。",
    mount: function (body) {
      var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 = 空
      var selected = 0;   // 当前选中的数字牌
      var won = false;

      var wrap = MW.util.el("div");
      wrap.style.cssText = "display:flex;flex-direction:column;align-items:center;gap:16px";
      body.appendChild(wrap);

      /* ---------- 棋盘（4×4 网格：3×3 格子 + 行列和徽标 + 目标角） ---------- */
      var CELL = 84, GAP = 10;
      var grid = MW.util.el("div");
      grid.style.cssText = "display:grid;grid-template-columns:repeat(3," + CELL + "px) 54px;" +
        "grid-template-rows:repeat(3," + CELL + "px) 54px;gap:" + GAP + "px;justify-content:center";
      wrap.appendChild(grid);

      var cells = [];
      for (var i = 0; i < 9; i++) {
        (function (i) {
          var c = MW.util.el("button");
          c.style.cssText = "width:" + CELL + "px;height:" + CELL + "px;border-radius:16px;" +
            "font-size:2rem;font-weight:800;color:#fff;transition:all .15s ease;" +
            "grid-row:" + (Math.floor(i / 3) + 1) + ";grid-column:" + (i % 3 + 1);
          c.onclick = function () { onCell(i); };
          grid.appendChild(c);
          cells.push(c);
        })(i);
      }
      function badge(text) {
        var b = MW.util.el("div", null, text);
        b.style.cssText = "display:flex;align-items:center;justify-content:center;border-radius:14px;" +
          "font-weight:800;font-size:1.05rem;background:rgba(255,255,255,.08);color:#c9c9ee;transition:all .2s ease";
        return b;
      }
      var rowBadges = [], colBadges = [];
      for (var r = 0; r < 3; r++) {
        var rb = badge("·");
        rb.style.gridRow = (r + 1); rb.style.gridColumn = "4";
        grid.appendChild(rb); rowBadges.push(rb);
      }
      for (var cc = 0; cc < 3; cc++) {
        var cb = badge("·");
        cb.style.gridRow = "4"; cb.style.gridColumn = (cc + 1);
        grid.appendChild(cb); colBadges.push(cb);
      }
      var target = badge("★15");
      target.style.cssText += ";grid-row:4;grid-column:4;background:rgba(255,194,51,.2);color:#ffc233;font-size:.95rem";
      target.title = "目标：每条线都等于 15";
      grid.appendChild(target);

      /* ---------- 对角线和 ---------- */
      var diagLine = MW.util.el("div");
      diagLine.style.cssText = "display:flex;gap:14px;justify-content:center;flex-wrap:wrap";
      var diagA = badge("↘ ·"), diagB = badge("↙ ·");
      diagA.style.cssText += ";padding:8px 18px";
      diagB.style.cssText += ";padding:8px 18px";
      diagLine.appendChild(diagA); diagLine.appendChild(diagB);
      wrap.appendChild(diagLine);

      /* ---------- 数字牌 ---------- */
      var tray = MW.util.el("div");
      tray.style.cssText = "display:flex;gap:10px;flex-wrap:wrap;justify-content:center";
      wrap.appendChild(tray);
      var tiles = [];
      for (var v = 1; v <= 9; v++) {
        (function (v) {
          var t = MW.util.el("button", null, v);
          t.style.cssText = "width:52px;height:52px;border-radius:14px;font-size:1.3rem;font-weight:800;" +
            "background:rgba(255,255,255,.1);color:#fff;border:2px solid rgba(255,255,255,.25);transition:all .15s ease";
          t.onclick = function () {
            if (board.indexOf(v) !== -1) return; // 已放上棋盘
            selected = selected === v ? 0 : v;
            MW.feedback.sound("click");
            render();
          };
          tray.appendChild(t);
          tiles.push(t);
        })(v);
      }

      /* ---------- 状态行与按钮 ---------- */
      var status = MW.util.el("div", null, "先点一张数字牌，再点一个空格。让每条线的和都等于 15！");
      status.style.cssText = "text-align:center;color:#ffc233;font-weight:700;min-height:24px";
      wrap.appendChild(status);

      var ctr = MW.util.el("div", "lab-controls");
      var hintBtn = MW.util.el("button", "btn small", "💡 提示");
      var resetBtn = MW.util.el("button", "btn small", "🔄 重置");
      ctr.appendChild(hintBtn); ctr.appendChild(resetBtn);
      wrap.appendChild(ctr);

      /* ---------- 逻辑 ---------- */
      function onCell(i) {
        if (board[i]) { // 取下数字
          board[i] = 0;
          won = false;
          MW.feedback.sound("click");
          render();
          return;
        }
        if (!selected) {
          status.textContent = "先点下面的数字牌，再点空格哦！";
          return;
        }
        board[i] = selected;
        selected = 0;
        MW.feedback.sound("click");
        render();
        checkWin();
      }

      function lineSum(L) {
        var s = 0, full = true;
        L.forEach(function (i) { if (!board[i]) full = false; s += board[i]; });
        return { s: s, full: full };
      }
      function paintBadge(b, sum, full, prefix) {
        b.textContent = (prefix || "") + sum;
        if (full && sum === 15) {
          b.style.background = "#ffc233"; b.style.color = "#20203a";
          b.textContent = (prefix || "") + "15 ✓";
        } else if (full) {
          b.style.background = "rgba(255,107,107,.25)"; b.style.color = "#ffb3b3";
        } else {
          b.style.background = "rgba(255,255,255,.08)"; b.style.color = "#c9c9ee";
        }
      }

      function render() {
        for (var i = 0; i < 9; i++) {
          var c = cells[i], v = board[i];
          c.textContent = v || "";
          if (v) {
            c.style.background = "rgba(255,194,51,.16)";
            c.style.border = "2px solid #ffc233";
            c.style.color = "#fff";
          } else {
            c.style.background = selected ? "rgba(255,194,51,.07)" : "rgba(0,0,0,.2)";
            c.style.border = "2px dashed " + (selected ? "#ffc233" : "rgba(255,255,255,.3)");
          }
        }
        for (var t = 1; t <= 9; t++) {
          var el = tiles[t - 1], used = board.indexOf(t) !== -1;
          el.style.opacity = used ? ".15" : "1";
          el.style.pointerEvents = used ? "none" : "";
          if (t === selected) {
            el.style.background = "#ffc233"; el.style.color = "#20203a";
            el.style.transform = "scale(1.12)"; el.style.borderColor = "#fff";
          } else {
            el.style.background = "rgba(255,255,255,.1)"; el.style.color = "#fff";
            el.style.transform = ""; el.style.borderColor = "rgba(255,255,255,.25)";
          }
        }
        for (var r = 0; r < 3; r++) { var rs = lineSum(LINES[r]); paintBadge(rowBadges[r], rs.s, rs.full); }
        for (var q = 0; q < 3; q++) { var cs = lineSum(LINES[3 + q]); paintBadge(colBadges[q], cs.s, cs.full); }
        var d1 = lineSum(LINES[6]), d2 = lineSum(LINES[7]);
        paintBadge(diagA, d1.s, d1.full, "↘ ");
        paintBadge(diagB, d2.s, d2.full, "↙ ");
      }

      function checkWin() {
        if (won) return;
        for (var i = 0; i < 9; i++) if (!board[i]) return;
        for (var k = 0; k < 8; k++) if (lineSum(LINES[k]).s !== 15) return;
        won = true;
        status.textContent = "🎉 太了不起了！你解开了四千年前的洛书之谜！";
        MW.feedback.confetti();
        MW.feedback.sound("star");
      }

      hintBtn.onclick = function () {
        var empty = [];
        for (var i = 0; i < 9; i++) if (!board[i]) empty.push(i);
        if (!empty.length) { status.textContent = "已经摆满啦！看看每条线是不是 15。"; return; }
        // 找出与当前摆法不冲突的解
        var sols = SOLUTIONS.filter(function (s) {
          for (var i = 0; i < 9; i++) if (board[i] && board[i] !== s[i]) return false;
          return true;
        });
        if (!sols.length) {
          MW.feedback.sound("wrong");
          status.textContent = "现在的摆法走不通啦——点放错的格子取下来，或点「重置」重新开始。";
          return;
        }
        var sol = MW.util.pick(sols);
        var cell = MW.util.pick(empty);
        var v = sol[cell];
        var oldPos = board.indexOf(v);
        if (oldPos !== -1) board[oldPos] = 0; // 这个数字放错了位置，先挪走
        board[cell] = v;
        selected = 0;
        won = false;
        MW.feedback.sound("right");
        status.textContent = "提示：把 " + v + " 放在这里试试！";
        render();
        checkWin();
      };

      resetBtn.onclick = function () {
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        selected = 0; won = false;
        MW.feedback.sound("click");
        status.textContent = "先点一张数字牌，再点一个空格。让每条线的和都等于 15！";
        render();
      };

      render();
      return { destroy: function () {} };
    }
  });
})();
