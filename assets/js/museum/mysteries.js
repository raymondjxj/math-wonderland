/* 数学博物馆 · 未解之谜橱窗（hall: "mystery"）
   连最聪明的头脑都还没解开的谜——但它们对孩子完全开放：
   冰雹猜想 / 哥德巴赫猜想 / 孪生质数 / 完美数 */
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
  function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i * i <= n; i++) if (n % i === 0) return false;
    return true;
  }

  /* ============ 1. 冰雹猜想（Collatz）============ */
  MW.museum.register({
    id: "mys-collatz",
    hall: "mystery",
    icon: "🌨️",
    title: "冰雹猜想",
    sub: "偶数÷2、奇数×3+1——每个数最后都会落回 1 吗？",
    paragraphs: [
      "规则简单到小学生都会：选一个正整数，是偶数就 ÷2，是奇数就 ×3+1，对结果一直重复下去。",
      "比如 27：它先冲上 9232 的高空，又跌下来，上上下下 111 步才落到 1。就像冰雹在云里被气流抛上抛下，所以叫「冰雹猜想」（也叫 3n+1 猜想）。",
      "数学家猜：不管从哪个数出发，最后都会落到 1。计算机已经验算了 10²⁰ 量级的所有数，全部落回 1——可至今没有人能证明「所有数」都这样。连顶尖数学家陶哲轩，也只证明了「几乎所有」数最终会降到足够低。下一个线索，也许就在你试的那个数里。"
    ],
    mount: function (body) {
      var W = 760, H = 380;
      var ctx = makeCanvas(body, W, H);
      var seq = [], cancelAnim = null;

      function collatz(n) {
        var s = [n], guard = 0;
        while (n !== 1 && guard < 2000) {
          n = n % 2 === 0 ? n / 2 : 3 * n + 1;
          s.push(n); guard++;
        }
        return s;
      }
      function draw(upto) {
        ctx.clearRect(0, 0, W, H);
        if (!seq.length) return;
        var max = Math.max.apply(null, seq);
        var N = seq.length - 1;
        var L = 64, Rr = 20, T = 26, B = 34;
        function X(i) { return L + (W - L - Rr) * (N === 0 ? 0 : i / N); }
        function Y(v) { return H - B - (H - T - B) * (v / max); }
        // 网格线
        ctx.textAlign = "right"; ctx.textBaseline = "middle";
        ctx.font = "700 12px " + FONT;
        for (var g = 0; g <= 4; g++) {
          var v = max * g / 4, y = Y(v);
          ctx.strokeStyle = "rgba(255,255,255,.12)"; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(L, y); ctx.lineTo(W - Rr, y); ctx.stroke();
          ctx.fillStyle = "#b9b9dd";
          ctx.fillText(g === 0 ? "1" : String(Math.round(v)), L - 8, y);
        }
        // 折线
        var end = Math.max(1, Math.floor(upto));
        ctx.strokeStyle = "#ffc233"; ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(X(0), Y(seq[0]));
        for (var i = 1; i <= end; i++) ctx.lineTo(X(i), Y(seq[i]));
        ctx.stroke();
        // 当前点 + 最高点 + 终点
        ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(X(end), Y(seq[end]), 4.5, 0, 2 * Math.PI); ctx.fill();
        var mi = seq.indexOf(max);
        if (mi <= end) {
          ctx.fillStyle = "#ff6b6b";
          ctx.beginPath(); ctx.arc(X(mi), Y(seq[mi]), 5, 0, 2 * Math.PI); ctx.fill();
          ctx.font = "800 14px " + FONT; ctx.textAlign = "center"; ctx.textBaseline = "bottom";
          ctx.fillText("最高 " + max, Math.min(Math.max(X(mi), L + 40), W - 60), Y(seq[mi]) - 8);
        }
        if (end >= N && seq[N] === 1) {
          ctx.fillStyle = "#35c163";
          ctx.beginPath(); ctx.arc(X(N), Y(1), 6, 0, 2 * Math.PI); ctx.fill();
          ctx.font = "900 15px " + FONT; ctx.textAlign = "center"; ctx.textBaseline = "top";
          ctx.fillText("落到 1！", X(N) - 24, Y(1) + 10);
        }
      }

      var info = makeInfo(body, "");
      function run(n, animate) {
        seq = collatz(n);
        var max = Math.max.apply(null, seq);
        var steps = seq.length - 1;
        info.innerHTML = "<b>" + seq[0] + "</b> 走了 <b>" + steps + "</b> 步，最高飞到 <b>" +
          max + "</b>，最后落到 <b>1</b>。换个数再试试！";
        if (cancelAnim) { cancelAnim(); cancelAnim = null; }
        if (animate && window.matchMedia && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
          var total = seq.length - 1;
          cancelAnim = MW.util.tween({ v: 1 }, { v: total }, Math.min(1600, 300 + total * 12), function (v) {
            draw(v.v);
          }, function () { cancelAnim = null; draw(total); MW.feedback.sound("star"); });
        } else {
          draw(seq.length - 1);
        }
      }

      // 输入区
      var ctr = MW.util.el("div", "lab-controls");
      var label = MW.util.el("label", null, "选一个正整数 ");
      var input = document.createElement("input");
      input.type = "number"; input.min = 1; input.max = 9999; input.value = 27;
      input.style.cssText = "width:100px;padding:8px 12px;border-radius:12px;border:2px solid rgba(255,255,255,.35);" +
        "background:rgba(0,0,0,.25);color:#fff;font:800 16px " + FONT + ";";
      label.appendChild(input);
      var bGo = MW.util.el("button", "btn small", "🚀 出发");
      ctr.appendChild(label); ctr.appendChild(bGo);
      [6, 27, 97].forEach(function (v) {
        var b = MW.util.el("button", "btn ghost small", "试试 " + v);
        b.onclick = function () { input.value = v; MW.feedback.sound("click"); run(v, true); };
        ctr.appendChild(b);
      });
      body.appendChild(ctr);

      bGo.onclick = function () {
        var n = Math.floor(+input.value);
        if (!n || n < 1 || n > 9999) {
          info.innerHTML = "请输入 1 到 9999 之间的正整数哦。";
          MW.feedback.sound("click");
          return;
        }
        MW.feedback.sound("click");
        run(n, true);
      };

      run(27, false);   // 初始画面：著名的 27
      return { destroy: function () { if (cancelAnim) cancelAnim(); } };
    }
  });

  /* ============ 2. 哥德巴赫猜想 ============ */
  MW.museum.register({
    id: "mys-goldbach",
    hall: "mystery",
    icon: "👑",
    title: "哥德巴赫猜想",
    sub: "每个大于 2 的偶数，都是两个质数之和？",
    paragraphs: [
      "1742 年，哥德巴赫写信给大数学家欧拉，猜想说：每个大于 2 的偶数，都能写成两个质数之和。比如 10 = 3+7，100 = 47+53。",
      "听起来简单，却难倒了全世界两百八十多年。离它最近的是中国数学家陈景润：1966 年，他证明了「1+2」——任何充分大的偶数，都能写成一个质数，加上一个「不超过两个质数的乘积」。这至今仍是人类最好的纪录。",
      "注意，「1+2」不是 1 加 2 等于 3，而是「1 个质数 + 至多 2 个质数的乘积」。从「1+2」到真正的猜想「1+1」（一个质数加一个质数），只差最后一步——至今无人能走完。"
    ],
    mount: function (body) {
      var result = MW.util.el("div");
      result.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;padding:14px 4px;min-height:60px;";
      body.appendChild(result);

      var info = makeInfo(body, "");
      function chip(html) {
        var c = MW.util.el("span", null, html);
        c.style.cssText = "background:rgba(255,194,51,.18);border:1px solid rgba(255,194,51,.55);color:#fff;" +
          "border-radius:999px;padding:6px 14px;font:800 15px " + FONT + ";";
        return c;
      }
      function run(n) {
        result.innerHTML = "";
        var pairs = [];
        for (var p = 2; p <= n / 2; p++) {
          if (isPrime(p) && isPrime(n - p)) pairs.push([p, n - p]);
        }
        pairs.forEach(function (pr) {
          result.appendChild(chip(pr[0] + " + " + pr[1]));
        });
        info.innerHTML = "<b>" + n + "</b> 一共有 <b>" + pairs.length + "</b> 种拆法：" +
          n + " = " + pairs.map(function (pr) { return pr[0] + "+" + pr[1]; }).join(" = ") +
          "。每个偶数都拆得开——可「每个偶数都行」这件事，至今没人能证明！";
      }

      var ctr = MW.util.el("div", "lab-controls");
      var label = MW.util.el("label", null, "大于 2 的偶数 ");
      var input = document.createElement("input");
      input.type = "number"; input.min = 4; input.max = 500; input.step = 2; input.value = 48;
      input.style.cssText = "width:100px;padding:8px 12px;border-radius:12px;border:2px solid rgba(255,255,255,.35);" +
        "background:rgba(0,0,0,.25);color:#fff;font:800 16px " + FONT + ";";
      label.appendChild(input);
      var bGo = MW.util.el("button", "btn small", "👑 拆拆看");
      ctr.appendChild(label); ctr.appendChild(bGo);
      [10, 100, 500].forEach(function (v) {
        var b = MW.util.el("button", "btn ghost small", "试试 " + v);
        b.onclick = function () { input.value = v; MW.feedback.sound("click"); run(v); };
        ctr.appendChild(b);
      });
      body.appendChild(ctr);

      bGo.onclick = function () {
        var n = Math.floor(+input.value);
        if (!n || n < 4 || n > 500 || n % 2 !== 0) {
          info.innerHTML = "请输入 4 到 500 之间的偶数哦。";
          result.innerHTML = "";
          MW.feedback.sound("click");
          return;
        }
        MW.feedback.sound("click");
        run(n);
        MW.feedback.sound("star");
      };

      run(48);   // 初始画面：48 的 5 种拆法
      return { destroy: function () {} };
    }
  });

  /* ============ 3. 孪生质数（故事型 + SVG）============ */
  (function () {
    var twins = { 3:1, 5:1, 7:1, 11:1, 13:1, 17:1, 19:1, 29:1, 31:1, 41:1, 43:1, 59:1, 61:1, 71:1, 73:1 };
    var s = '<svg viewBox="0 0 540 432" xmlns="http://www.w3.org/2000/svg" style="max-width:560px;width:100%">';
    for (var n = 1; n <= 100; n++) {
      var r = Math.floor((n - 1) / 10), c = (n - 1) % 10;
      var x = 10 + c * 52, y = 12 + r * 40;
      if (twins[n]) {
        s += '<rect x="' + (x + 3) + '" y="' + (y + 2) + '" width="46" height="34" rx="10" fill="#ffc233"/>';
        s += '<text x="' + (x + 26) + '" y="' + (y + 25) + '" text-anchor="middle" font-size="16" font-weight="800" fill="#141433">' + n + '</text>';
      } else if (isPrime(n)) {
        s += '<rect x="' + (x + 3) + '" y="' + (y + 2) + '" width="46" height="34" rx="10" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.5"/>';
        s += '<text x="' + (x + 26) + '" y="' + (y + 25) + '" text-anchor="middle" font-size="15" font-weight="700" fill="#dcdcf5">' + n + '</text>';
      } else {
        s += '<text x="' + (x + 26) + '" y="' + (y + 25) + '" text-anchor="middle" font-size="14" fill="rgba(255,255,255,.32)">' + n + '</text>';
      }
    }
    s += '<text x="270" y="424" text-anchor="middle" font-size="14" fill="#b9b9dd">金色 = 孪生质数（共 8 对）　白框 = 孤独的质数</text>';
    s += '</svg>';

    MW.museum.register({
      id: "mys-twinprime",
      hall: "mystery",
      icon: "👯",
      title: "孪生质数",
      sub: "相差 2 的质数对，会一直成对出现下去吗？",
      paragraphs: [
        "质数是只能被 1 和自己整除的数。有些质数喜欢手拉手——它们正好相差 2，比如 3 和 5、11 和 13、71 和 73。这样的质数对叫「孪生质数」。",
        "看下面的 100 数字表：金色的 8 对就是 100 以内所有的孪生质数。越往大数走，质数越来越稀少，可孪生质数似乎总在不远处又冒出一对。它们会永远成对出现下去吗？没人知道。",
        "2013 年，华人数学家张益唐轰动世界：他证明了存在无穷多对质数，它们的差距小于 7000 万——这是人类第一次证明「质数之间有固定距离的无限对」。之后全世界的数学家接力，把这个距离缩小到了 246。但「距离正好是 2 的有无穷多对」，至今无人能证。"
      ],
      art: s
    });
  })();

  /* ============ 4. 完美数（故事型 + SVG）============ */
  (function () {
    function dots(count, x0, y, color) {
      var out = "";
      for (var i = 0; i < count; i++) {
        out += '<circle cx="' + (x0 + i * 17) + '" cy="' + y + '" r="7" fill="' + color + '"/>';
      }
      return out;
    }
    var s = '<svg viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" style="max-width:560px;width:100%">';
    // —— 6 的面板 ——
    s += '<text x="20" y="22" font-size="17" font-weight="800" fill="#ffc233">6 自己：6 个圆点</text>';
    s += dots(6, 48, 50, "#ffc233");
    [1, 2, 3].forEach(function (d, i) {
      var y = 82 + i * 24;
      s += '<text x="20" y="' + (y + 5) + '" font-size="14" font-weight="700" fill="#dcdcf5">' + d + '</text>';
      s += dots(d, 48, y, "#6ea8ff");
    });
    s += '<text x="20" y="162" font-size="15" font-weight="800" fill="#fff">1 + 2 + 3 = 6 ✓ 正好等于自己！</text>';
    // —— 28 的面板 ——
    s += '<text x="20" y="206" font-size="17" font-weight="800" fill="#ffc233">28 自己：28 个圆点</text>';
    s += dots(28, 48, 234, "#ffc233");
    [1, 2, 4, 7, 14].forEach(function (d, i) {
      var y = 266 + i * 24;
      s += '<text x="20" y="' + (y + 5) + '" font-size="14" font-weight="700" fill="#dcdcf5">' + d + '</text>';
      s += dots(d, 48, y, "#35c163");
    });
    s += '<text x="20" y="396" font-size="15" font-weight="800" fill="#fff">1 + 2 + 4 + 7 + 14 = 28 ✓ 又是完美数！</text>';
    s += '</svg>';

    MW.museum.register({
      id: "mys-perfect",
      hall: "mystery",
      icon: "💎",
      title: "完美数",
      sub: "真因数加起来正好等于自己——几千年只找到几十个",
      paragraphs: [
        "把一个数的「真因数」（除了它自己以外的所有因数）加起来，如果正好等于它自己，它就是「完美数」。最小的是 6：1+2+3=6。",
        "下一个是 28：1+2+4+7+14=28。再往下是 496、8128……它们稀少得像沙漠里的宝石。古希腊的欧几里得就找到了制造偶完美数的「配方」；两千年后，欧拉证明了所有偶完美数都符合这个配方——每发现一个「梅森质数」，就诞生一个新的偶完美数。",
        "借助超级计算机，人类至今已知的完美数只有几十个，而且全是偶数。两个大问题至今无人回答：完美数有无穷多个吗？存在奇完美数吗？——如果存在，它至少要比 10 的 1500 次方还大。"
      ],
      art: s
    });
  })();
})();
