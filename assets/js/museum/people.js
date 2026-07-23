/* 数学博物馆 · 数学家群星（hall: "people"）
   5 件展品：阿基米德 / 刘徽与祖冲之的割圆术（互动） / 欧几里得 /
   华罗庚的优选法（互动） / 图灵破译密码 */
window.MW = window.MW || {}; MW.museum = MW.museum || {};

(function () {
  var GOLD = "#ffc233", INK = "#dcdcf5", DIM = "#b9b9dd", TEAL = "#2ec4b6", BLUE = "#4d96ff";
  var FT = "PingFang SC,sans-serif";

  function svgOpen(vb, w) {
    return "<svg viewBox='" + vb + "' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:" + (w || 640) + "px'>";
  }
  function txt(x, y, s, size, color, weight, anchor) {
    return "<text x='" + x + "' y='" + y + "' text-anchor='" + (anchor || "middle") +
      "' font-family='" + FT + "' font-size='" + size + "' font-weight='" + (weight || 400) +
      "' fill='" + color + "'>" + s + "</text>";
  }

  /* ---- ppl-archimedes：给我一个支点 ---- */
  function artArchimedes() {
    var s = svgOpen("0 0 640 250");
    s += "<rect x='165' y='14' width='430' height='44' rx='22' fill='rgba(255,194,51,.12)' stroke='" + GOLD + "' stroke-width='1.5'/>";
    s += txt(380, 42, "「给我一个支点，我就能撬动地球！」", 16, GOLD, 700);
    // 地球（坐在杠杆左端）
    s += "<circle cx='95' cy='105' r='40' fill='" + BLUE + "' stroke='rgba(255,255,255,.35)' stroke-width='2'/>";
    s += "<ellipse cx='82' cy='94' rx='14' ry='9' fill='#3aa655'/>";
    s += "<ellipse cx='111' cy='118' rx='10' ry='7' fill='#3aa655'/>";
    s += txt(95, 178, "大大的地球", 13, DIM);
    // 杠杆与支点
    s += "<line x1='88' y1='152' x2='618' y2='224' stroke='" + GOLD + "' stroke-width='6' stroke-linecap='round'/>";
    s += "<path d='M400 232 L462 232 L431 194 Z' fill='#8d8db5'/>";
    s += txt(431, 248, "支点", 13, DIM);
    // 右端小小的力气
    s += "<line x1='618' y1='148' x2='618' y2='212' stroke='" + TEAL + "' stroke-width='4' stroke-linecap='round'/>";
    s += "<path d='M618 220 l-8 -13 l16 0 z' fill='" + TEAL + "'/>";
    s += txt(618, 134, "小小的力气", 13, TEAL);
    return s + "</svg>";
  }

  /* ---- ppl-euclid：圆规 + 三角形 ---- */
  function artEuclid() {
    var s = svgOpen("0 0 640 250");
    // 圆规画圆
    s += "<circle cx='150' cy='122' r='70' fill='rgba(255,194,51,.06)' stroke='" + GOLD + "' stroke-width='3'/>";
    s += "<line x1='150' y1='122' x2='211' y2='87' stroke='" + GOLD + "' stroke-width='2.5'/>";
    s += txt(192, 90, "r", 14, GOLD, 700);
    s += "<circle cx='150' cy='26' r='5' fill='" + INK + "'/>";
    s += "<line x1='150' y1='26' x2='118' y2='202' stroke='" + INK + "' stroke-width='3' stroke-linecap='round'/>";
    s += "<line x1='150' y1='26' x2='182' y2='202' stroke='" + INK + "' stroke-width='3' stroke-linecap='round'/>";
    s += "<path d='M182 202 l-7 -15 l11 5 z' fill='" + INK + "'/>";
    s += txt(150, 228, "圆规 + 直尺", 13, DIM);
    // 三角形（带直角标记）
    s += "<path d='M385 185 L470 65 L575 185 Z' fill='rgba(46,196,182,.07)' stroke='" + TEAL + "' stroke-width='3' stroke-linejoin='round'/>";
    s += "<path d='M385 167 L403 167 L403 185' fill='none' stroke='" + TEAL + "' stroke-width='2'/>";
    s += txt(480, 140, "几何", 15, TEAL, 700);
    // 平行线
    s += "<line x1='395' y1='208' x2='520' y2='208' stroke='" + DIM + "' stroke-width='2.5'/>";
    s += "<line x1='395' y1='222' x2='520' y2='222' stroke='" + DIM + "' stroke-width='2.5'/>";
    s += "<path d='M450 203 l10 5 l-10 5 M450 217 l10 5 l-10 5' fill='none' stroke='" + DIM + "' stroke-width='2'/>";
    s += txt(320, 246, "从 5 条公设出发，一步步推出 400 多个定理", 14, DIM);
    return s + "</svg>";
  }

  /* ---- ppl-turing：密码机 ---- */
  function artTuring() {
    var s = svgOpen("0 0 640 240");
    s += "<text x='95' y='118' text-anchor='middle' font-family='Menlo,monospace' font-size='19' font-weight='700' letter-spacing='3' fill='" + TEAL + "'>HELLO</text>";
    s += "<line x1='150' y1='110' x2='210' y2='110' stroke='" + GOLD + "' stroke-width='3'/>" +
      "<path d='M212 110 l-11 -6 l0 12 z' fill='" + GOLD + "'/>";
    // 密码机
    s += "<rect x='225' y='55' width='195' height='125' rx='14' fill='rgba(255,255,255,.06)' stroke='" + DIM + "' stroke-width='2.5'/>";
    var cxs = [275, 322, 369];
    for (var i = 0; i < 3; i++) {
      var cx = cxs[i];
      s += "<circle cx='" + cx + "' cy='100' r='22' fill='rgba(255,194,51,.08)' stroke='" + GOLD + "' stroke-width='3'/>";
      for (var j = 0; j < 3; j++) {
        var a = j * Math.PI / 3;
        var dx = 19 * Math.cos(a), dy = 19 * Math.sin(a);
        s += "<line x1='" + (cx - dx).toFixed(1) + "' y1='" + (100 - dy).toFixed(1) + "' x2='" + (cx + dx).toFixed(1) + "' y2='" + (100 + dy).toFixed(1) + "' stroke='" + GOLD + "' stroke-width='1.5'/>";
      }
    }
    // 插线板
    for (var k = 0; k < 8; k++) {
      s += "<circle cx='" + (245 + k * 22) + "' cy='155' r='4' fill='" + INK + "'/>";
    }
    s += "<path d='M245 155 C 270 130, 305 182, 333 155' fill='none' stroke='" + TEAL + "' stroke-width='2'/>";
    s += "<path d='M289 155 C 310 178, 350 132, 377 155' fill='none' stroke='" + TEAL + "' stroke-width='2'/>";
    s += "<line x1='425' y1='110' x2='483' y2='110' stroke='" + GOLD + "' stroke-width='3'/>" +
      "<path d='M485 110 l-11 -6 l0 12 z' fill='" + GOLD + "'/>";
    s += "<text x='548' y='118' text-anchor='middle' font-family='Menlo,monospace' font-size='19' font-weight='700' letter-spacing='3' fill='" + GOLD + "'>XQVKP</text>";
    s += txt(320, 218, "字母进，谜语出 —— 数学找规律，机器来试错", 14, DIM);
    return s + "</svg>";
  }

  /* ================= 故事型展品 ================= */

  MW.museum.register({
    id: "ppl-archimedes",
    hall: "people",
    icon: "🛁",
    title: "阿基米德",
    sub: "洗澡洗出大发现，还想撬动整个地球",
    paragraphs: [
      "阿基米德（约公元前 287—前 212 年）住在古希腊的叙拉古城。国王让金匠打了一顶纯金皇冠，事后却怀疑金匠掺了银子，命他想个办法查明白——还不许把皇冠弄坏。",
      "一天洗澡，他看见身体泡进澡盆，水就哗哗往外溢，突然开窍：同样重的金子和银子，体积不一样，排开的水也不一样多！他激动得跳上大街大喊：「尤里卡！」（意思是「我发现啦！」）皇冠之谜就此解开，<b>浮力定律</b>也由此诞生。",
      "他还摸清了杠杆的脾气：力臂越长，越省力。于是他放出名言：「给我一个支点，我就能撬动地球！」这样的杠杆当然找不到，但道理千真万确——跷跷板、撬棍、开瓶器，全都在用它。",
      "为了量圆，他把圆夹在正 96 边形的里面和外面，算出圆周率 π 在 3.1408 和 3.1429 之间。几百年后，中国的刘徽和祖冲之，会把这场「割圆」游戏玩到新的高度。",
      "传说罗马士兵破城时，他正蹲在沙地上画几何图形，只留下一句「别碰我的圆」。他为数学而生，也为数学而终。"
    ],
    art: artArchimedes()
  });

  MW.museum.register({
    id: "ppl-euclid",
    hall: "people",
    icon: "📐",
    title: "欧几里得与《几何原本》",
    sub: "从 5 条「显而易见」推出整座几何大厦",
    paragraphs: [
      "大约公元前 300 年，欧几里得在埃及的亚历山大城教书。他把前人零散的几何知识收集整理，写成 13 卷的《几何原本》。",
      "这本书的开头简单得惊人，只有几条「不用证明的显而易见」：两点之间可以连一条直线；线段可以任意延长；用任意圆心都能画出圆；所有直角都相等……一共 <b>5 条公设</b>，再加几条公理。",
      "神奇的是，从这寥寥几条出发，欧几里得一步一步推出了 400 多个定理：每一步都只能用前面已经证明的结论，像搭积木一样严丝合缝，搭起整座几何大厦。这种「公理 + 推理」的方法，成了后世所有数学的样板。",
      "相传国王问他：「学几何有没有捷径？」他回答：「<b>几何学里没有专为国王铺设的大道。</b>」意思是：想学会就得一步步动脑筋，国王也不能例外。",
      "《几何原本》当了 2000 多年的教科书，是历史上流传最广的书之一。明朝时，徐光启和意大利人利玛窦把它译成中文——「几何」这个中文名字，就是那时定下来的。"
    ],
    art: artEuclid()
  });

  MW.museum.register({
    id: "ppl-turing",
    hall: "people",
    icon: "🧩",
    title: "图灵破译密码",
    sub: "用数学和机器破译密码，悄悄改变战争",
    paragraphs: [
      "艾伦·图灵（1912—1954）是英国数学家。第二次世界大战时，德军用「恩尼格玛」密码机发报：字母经过转子和插线板层层打乱，可能的变化比天上的星星还多，德军坚信没人破得了。",
      "图灵和同事们钻进英国的布莱切利园，用数学找出密码的规律，再造出专门「猜密码」的机器，让机器不知疲倦地高速尝试。德军的一封封秘密电报，就这样被读了出来。",
      "历史学家估计，破译工作让战争缩短了大约两年，拯救了上千万人的生命。可这在当时是最高机密，图灵的功劳被尘封了很多年。",
      "其实早在 1936 年，图灵就在纸上设计出一种「思想机器」——<b>图灵机</b>，第一次讲清楚了「计算」到底是怎么回事：今天每一台电脑、每一部手机，理论上都是图灵机。他还提出「图灵测试」，追问机器会不会思考。人们称他为「计算机科学之父」。",
      "图灵去世时，床头放着一个咬了一口的苹果。于是有传说：苹果公司的标志是为了纪念他。不过设计师亲口说过，那只是巧合——但这个美丽的误会说明，人们多想用自己的方式记住他。"
    ],
    art: artTuring()
  });

  /* ================= 互动：割圆术 ================= */

  MW.museum.register({
    id: "ppl-zu",
    hall: "people",
    icon: "⭕",
    title: "刘徽与祖冲之的割圆术",
    sub: "边数翻倍再翻倍，把 π 一点点逼出来",
    paragraphs: [
      "三国时期，数学家刘徽想量出圆的周长。直尺量不了弯弯的圆，他就盯上了圆里面的正多边形：边数每翻一倍，多边形就朝圆贴近一步。",
      "他写下名言：「割之弥细，所失弥少；割之又割，以至于不可割，则与圆周合体而无所失矣。」靠着这股耐心，他从正 6 边形一直割到正 96 边形，算出 π ≈ 3.14。",
      "两百多年后，祖冲之（429—500）接着割，把 π 钉在了 3.1415926 和 3.1415927 之间，还找到漂亮的分数 355/113（叫「密率」）。这个精度领先了全世界将近一千年！",
      "现在轮到你当小割圆家：从正 6 边形出发，点「边数翻倍」，亲眼看 π 一点点浮出水面。"
    ],
    mount: function (body) {
      var W = 760, H = 430;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      var CX = 250, CY = 225, R = 165;
      var n = 6;      // 当前（或目标）边数
      var b = 1;      // 从 n/2 边形「鼓」到 n 边形的进度，1 = 到位
      var busy = false, cancel = null;

      var info = MW.util.el("div", "caption-box", "");
      info.style.minHeight = "60px";
      info.style.background = "rgba(255,194,51,.15)";
      info.style.color = "#fff";
      body.appendChild(info);

      var ctr = MW.util.el("div", "lab-controls");
      var bDouble = MW.util.el("button", "btn small", "✖️2 边数翻倍");
      var bSkip = MW.util.el("button", "btn ghost small", "⏩ 直接割到 192");
      var bReset = MW.util.el("button", "btn ghost small", "🔄 从正 6 边形重来");
      ctr.appendChild(bDouble); ctr.appendChild(bSkip); ctr.appendChild(bReset);
      body.appendChild(ctr);

      // 当前多边形的 周长 ÷ 直径（= π 的估计值）
      function estPi() {
        var half = n / 2, ang = Math.PI / half;
        var r = R * (Math.cos(ang) + b * (1 - Math.cos(ang)));
        var edge = Math.sqrt(R * R + r * r - 2 * R * r * Math.cos(ang));
        return n * edge / (2 * R);
      }

      function draw() {
        ctx.clearRect(0, 0, W, H);
        // 真正的圆（虚线）
        ctx.strokeStyle = "rgba(255,255,255,.5)"; ctx.lineWidth = 2; ctx.setLineDash([7, 7]);
        ctx.beginPath(); ctx.arc(CX, CY, R, 0, 2 * Math.PI); ctx.stroke();
        ctx.setLineDash([]);
        // 内接正多边形：n/2 个固定顶点 + n/2 个向外「鼓」的顶点
        var half = n / 2, ang = Math.PI / half;
        var r = R * (Math.cos(ang) + b * (1 - Math.cos(ang)));
        ctx.beginPath();
        for (var k = 0; k < half; k++) {
          var a0 = -Math.PI / 2 + 2 * Math.PI * k / half;
          var x0 = CX + R * Math.cos(a0), y0 = CY + R * Math.sin(a0);
          var x1 = CX + r * Math.cos(a0 + ang), y1 = CY + r * Math.sin(a0 + ang);
          if (k === 0) ctx.moveTo(x0, y0); else ctx.lineTo(x0, y0);
          ctx.lineTo(x1, y1);
        }
        ctx.closePath();
        ctx.fillStyle = "rgba(255,194,51,.16)"; ctx.fill();
        ctx.strokeStyle = "#ffc233"; ctx.lineWidth = 2.5; ctx.stroke();
        // 图例
        ctx.textAlign = "left"; ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#b9b9dd"; ctx.font = "14px '" + FT + "'";
        ctx.fillText("┄ 真正的圆", 20, H - 16);
        ctx.fillStyle = "#ffc233";
        ctx.fillText("━ 正多边形", 140, H - 16);
        // 右侧实时数据
        var est = estPi();
        ctx.fillStyle = "#dcdcf5"; ctx.font = "700 20px '" + FT + "'";
        ctx.fillText("正 " + n + " 边形", 470, 120);
        ctx.fillStyle = "#b9b9dd"; ctx.font = "15px '" + FT + "'";
        ctx.fillText("周长 ÷ 直径 ≈", 470, 158);
        ctx.fillStyle = "#ffc233"; ctx.font = "900 40px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.fillText(est.toFixed(6), 470, 204);
        ctx.fillStyle = "#b9b9dd"; ctx.font = "15px '" + FT + "'";
        ctx.fillText("与真正的 π 还差", 470, 250);
        ctx.fillStyle = "#fff"; ctx.font = "900 26px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.fillText((Math.PI - est).toFixed(6), 470, 284);
        ctx.fillStyle = "#b9b9dd"; ctx.font = "14px '" + FT + "'";
        ctx.fillText("π = 3.14159265…", 470, 332);
      }

      function paintButtons() {
        bDouble.disabled = busy || n >= 192;
        bSkip.disabled = busy || n >= 192;
      }

      function updateInfo() {
        var est = estPi();
        if (n === 6) {
          info.innerHTML = "正 <b>6</b> 边形：周长 ÷ 直径 = <b>" + est.toFixed(6) + "</b>。离 π 还远着呢——按「边数翻倍」，跟刘徽一起割！";
        } else if (n < 96) {
          info.innerHTML = "正 <b>" + n + "</b> 边形：π ≈ <b>" + est.toFixed(6) + "</b>，差距缩小到 <b>" + (Math.PI - est).toFixed(6) + "</b>。割之弥细，所失弥少——继续翻！";
        } else if (n === 96) {
          info.innerHTML = "正 <b>96</b> 边形：π ≈ <b>3.141032</b> —— 刘徽当年就割到这里，写下了 π ≈ 3.14！再翻一次，追上祖冲之！";
        } else {
          info.innerHTML = "正 <b>192</b> 边形：π ≈ <b>3.141453</b>！祖冲之又翻了好多倍（有人推测他算到了正 24576 边形），把 π 钉在 <b>3.1415926～3.1415927</b>，领先世界近千年 🏆";
        }
      }

      function finish() {
        MW.feedback.confetti();
        MW.feedback.sound("star");
      }

      bDouble.onclick = function () {
        if (busy || n >= 192) return;
        busy = true;
        MW.feedback.sound("click");
        n *= 2; b = 0;
        if (cancel) cancel();
        cancel = MW.util.tween({ t: 0 }, { t: 1 }, 800, function (v) {
          b = v.t; draw();
        }, function () {
          busy = false; b = 1; draw(); updateInfo(); paintButtons();
          if (n >= 192) finish();
        });
        paintButtons();
        draw();
      };
      bSkip.onclick = function () {
        if (busy || n >= 192) return;
        MW.feedback.sound("click");
        n = 192; b = 1; draw(); updateInfo(); paintButtons();
        finish();
      };
      bReset.onclick = function () {
        if (cancel) cancel();
        MW.feedback.sound("click");
        busy = false; n = 6; b = 1;
        draw(); updateInfo(); paintButtons();
      };

      draw(); updateInfo(); paintButtons();
      return { destroy: function () { if (cancel) cancel(); } };
    }
  });

  /* ================= 互动：0.618 优选法 ================= */

  MW.museum.register({
    id: "ppl-hua",
    hall: "people",
    icon: "📈",
    title: "华罗庚的优选法",
    sub: "0.618 的黄金魔力：几次试验找到最高产量",
    paragraphs: [
      "上世纪六七十年代，数学家华罗庚（1910—1985）跑遍全国二十多个省市，把一个叫「优选法」的法宝教给工人师傅和农民伯伯：怎么用最少的试验，找到最好的温度、配方和田块。",
      "法宝的核心是个神奇的数：<b>0.618</b>——黄金分割比。每次在区间的 0.618 处做试验，比较差的一头就淘汰，搜索范围一下缩到原来的 0.618 倍，几轮就能逼近最好点。",
      "现在轮到你了：下面这块试验田，不同位置的产量不一样（曲线越高，产量越高）。点一点田里的位置「试种」，看看你要几次能找到产量最高的宝地！"
    ],
    mount: function (body) {
      var W = 760, H = 400;
      var cv = document.createElement("canvas");
      var dpr = window.devicePixelRatio || 1;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = "100%";
      cv.style.maxWidth = W + "px";
      var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
      body.appendChild(cv);

      var PX = 70, PW = 620, GY = 330, CH = 240; // 绘图区参数
      var opt, lo, hi, keep, tests, sug, doneFlag, tries;

      function newField() {
        opt = Math.round((0.3 + Math.random() * 0.4) * 100) / 100;
        lo = 0; hi = 1; keep = null; tests = []; sug = null; doneFlag = false; tries = 0;
      }
      function yld(x) { return Math.max(0, yval(x)); }                          // 显示用：不低于 0
      function yval(x) { var d = (x - opt) / 0.4; return 1 - d * d; }          // 比较用：完整抛物线
      function tx(x) { return PX + x * PW; }
      function ty(y) { return GY - y * CH; }
      function pct(y) { return Math.round(y * 100) + "%"; }

      function draw() {
        ctx.clearRect(0, 0, W, H);
        // 土地
        ctx.fillStyle = "rgba(146,104,63,.55)";
        ctx.fillRect(PX, GY, PW, 24);
        // 产量曲线
        ctx.beginPath();
        for (var i = 0; i <= 200; i++) {
          var x = i / 200, px = tx(x), py = ty(yld(x));
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.save();
        ctx.lineTo(tx(1), GY); ctx.lineTo(tx(0), GY); ctx.closePath();
        ctx.fillStyle = "rgba(255,194,51,.07)"; ctx.fill();
        ctx.restore();
        ctx.beginPath();
        for (var j = 0; j <= 200; j++) {
          var x2 = j / 200;
          if (j === 0) ctx.moveTo(tx(x2), ty(yld(x2))); else ctx.lineTo(tx(x2), ty(yld(x2)));
        }
        ctx.strokeStyle = "#ffc233"; ctx.lineWidth = 3.5; ctx.stroke();
        // 当前搜索区间高亮（地面金色带）
        ctx.fillStyle = "rgba(255,194,51,.28)";
        ctx.fillRect(tx(lo), GY, tx(hi) - tx(lo), 24);
        // 淘汰区暗化
        ctx.fillStyle = "rgba(0,0,0,.38)";
        ctx.fillRect(PX, 30, tx(lo) - PX, GY + 24 - 30);
        ctx.fillRect(tx(hi), 30, PX + PW - tx(hi), GY + 24 - 30);
        // 轴标签
        ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
        ctx.fillStyle = "#b9b9dd"; ctx.font = "14px '" + FT + "'";
        ctx.textAlign = "left"; ctx.fillText("↑ 产量", PX - 8, 26);
        ctx.fillText("← 田这头", PX, GY + 46);
        ctx.textAlign = "right"; ctx.fillText("田那头 →", PX + PW, GY + 46);
        // 已试种的点
        ctx.textAlign = "center";
        for (var t = 0; t < tests.length; t++) {
          var tp = tests[t], px2 = tx(tp.x), py2 = ty(tp.y);
          var isBest = keep && tp.x === keep.x;
          ctx.strokeStyle = "rgba(255,255,255,.3)"; ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(px2, GY); ctx.lineTo(px2, py2); ctx.stroke();
          ctx.beginPath(); ctx.arc(px2, py2, isBest ? 8 : 6, 0, 2 * Math.PI);
          ctx.fillStyle = isBest ? "#ffc233" : "#8d8db5"; ctx.fill();
          ctx.fillStyle = "#fff"; ctx.font = "700 13px '" + FT + "'";
          ctx.fillText(pct(tp.y), px2, py2 - 14);
        }
        // 0.618 推荐点
        if (sug != null && !doneFlag) {
          var sx = tx(sug), sy = ty(yld(sug));
          ctx.setLineDash([5, 5]); ctx.strokeStyle = "#2ec4b6"; ctx.lineWidth = 2.5;
          ctx.beginPath(); ctx.arc(sx, sy, 13, 0, 2 * Math.PI); ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle = "#2ec4b6"; ctx.font = "700 14px '" + FT + "'";
          ctx.fillText("💡 试这里", sx, sy - 22);
        }
        // 找到后：在真正的峰顶插旗
        if (doneFlag) {
          var fx = tx(opt), fy = ty(1);
          ctx.strokeStyle = "#dcdcf5"; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx, fy - 54); ctx.stroke();
          ctx.fillStyle = "#ffc233";
          ctx.beginPath(); ctx.moveTo(fx, fy - 54); ctx.lineTo(fx + 34, fy - 45); ctx.lineTo(fx, fy - 36); ctx.closePath(); ctx.fill();
          ctx.font = "700 14px '" + FT + "'";
          ctx.fillText("最高峰（位置 " + opt.toFixed(2) + "）", fx, fy - 62);
        }
      }

      var info = MW.util.el("div", "caption-box",
        "这块田哪里产量最高？<b>点田面任意位置</b>试种，或按「💡 0.618 推荐点」让黄金分割帮你选！");
      info.style.minHeight = "60px";
      info.style.background = "rgba(255,194,51,.15)";
      info.style.color = "#fff";
      body.appendChild(info);

      var ctr = MW.util.el("div", "lab-controls");
      var bSug = MW.util.el("button", "btn small", "💡 0.618 推荐点");
      var bNew = MW.util.el("button", "btn ghost small", "🔄 换一块田");
      ctr.appendChild(bSug); ctr.appendChild(bNew);
      body.appendChild(ctr);

      function finish() {
        doneFlag = true;
        var praise = tries <= 6
          ? "只用了 <b>" + tries + "</b> 次试种，0.618 法真省试验！"
          : "一共试了 <b>" + tries + "</b> 次——下次多用「0.618 推荐点」，会更快！";
        info.innerHTML = "🎉 找到最高峰啦！最好产量 <b>" + pct(keep.y) + "</b>，" + praise +
          " 最高峰藏在位置 <b>" + opt.toFixed(2) + "</b>，旗子已经插上。华罗庚爷爷为你点赞！";
        MW.feedback.confetti();
        MW.feedback.sound("star");
        draw();
      }

      function test(x) {
        if (doneFlag) {
          info.innerHTML = "已经找到最高峰啦！按「🔄 换一块田」再玩一次。";
          return;
        }
        if (x < lo - 0.002 || x > hi + 0.002) {
          MW.feedback.sound("wrong");
          info.innerHTML = "那里已经<b>淘汰</b>啦！在中间发亮的区间里找。";
          return;
        }
        if (keep && Math.abs(x - keep.x) < 0.012) {
          info.innerHTML = "这块刚刚种过啦，换个位置试试。";
          return;
        }
        var y = yld(x), yu = yval(x), msg;
        tries++;
        tests.push({ x: x, y: y });
        MW.feedback.sound("click");
        var used618 = sug != null && Math.abs(x - sug) < 0.045;
        if (!keep) {
          keep = { x: x, y: y, yu: yu };
          msg = "产量 <b>" + pct(y) + "</b>！第一个试点记下了。点「💡 0.618 推荐点」，让黄金分割选下一个。";
        } else if (yu >= keep.yu) {
          // 新点不输给旧最好点 → 峰顶必在旧点内侧，淘汰旧点外侧（平局时峰顶在两点之间，同样成立）
          var crown = Math.abs(yu - keep.yu) < 0.005
            ? "产量差不多，新点略占上风！"
            : "产量 <b>" + pct(y) + "</b>，新纪录！🏆";
          if (x > keep.x) { lo = keep.x; msg = crown + " 旧点<b>左边</b>全淘汰——好地在右边 →"; }
          else { hi = keep.x; msg = crown + " 旧点<b>右边</b>全淘汰——好地在左边 ←"; }
          keep = { x: x, y: y, yu: yu };
        } else {
          if (x > keep.x) { hi = x; msg = "产量只有 <b>" + pct(y) + "</b>——这里往右都太低，<b>右边</b>淘汰，好地在左边 ←"; }
          else { lo = x; msg = "产量只有 <b>" + pct(y) + "</b>——这里往左都太低，<b>左边</b>淘汰，好地在右边 →"; }
        }
        sug = null;
        if (hi - lo <= 0.06) { finish(); return; }
        msg += "<br>搜索范围只剩全田的 <b>" + Math.round((hi - lo) * 100) + "%</b> 啦。" +
          (used618 ? " 你用上了 0.618，缩得真快！" : " 试试「💡 0.618 推荐点」，缩小得更快！");
        info.innerHTML = msg;
        draw();
      }

      bSug.onclick = function () {
        if (doneFlag) return;
        sug = keep ? (lo + hi - keep.x) : (lo + 0.618 * (hi - lo));
        if (keep && Math.abs(sug - keep.x) < 0.02) {
          sug = keep.x > (lo + hi) / 2 ? lo + 0.382 * (hi - lo) : lo + 0.618 * (hi - lo);
        }
        MW.feedback.sound("click");
        info.innerHTML = "0.618 说：去<b>虚线圈</b>的位置试种！点一下圆圈里的田面。";
        draw();
      };
      bNew.onclick = function () {
        MW.feedback.sound("click");
        newField();
        info.innerHTML = "新田到了！最高峰换了个地方藏着。点田面试种，或按「💡 0.618 推荐点」。";
        draw();
      };

      cv.addEventListener("click", function (e) {
        var rect = cv.getBoundingClientRect();
        var px = (e.clientX - rect.left) * (W / rect.width);
        var x = (px - PX) / PW;
        if (x < 0 || x > 1) return;
        test(x);
      });

      newField();
      draw();
      return { destroy: function () {} };
    }
  });
})();
