/* 数学博物馆 · 数学史长廊（hall: "history"）
   6 件故事型展品：结绳计数 / 巴比伦的 60 进制 / 古埃及的分数 /
   中国算筹与《九章算术》 / 伟大的 0 / 数字的环球旅行 */
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

  /* ---- his-jiesheng：三只羊对应绳子上的结 ---- */
  function artJiesheng() {
    var s = svgOpen("0 0 640 250");
    s += txt(320, 28, "一只羊，对一个结 —— 一一对应", 15, DIM);
    var sheep = [[100, 66], [205, 54], [310, 70]];
    for (var i = 0; i < sheep.length; i++) {
      var x = sheep[i][0], y = sheep[i][1];
      s += "<g stroke='" + INK + "' stroke-width='3' fill='none' stroke-linecap='round'>" +
        "<ellipse cx='" + x + "' cy='" + y + "' rx='24' ry='16' fill='rgba(255,255,255,.10)'/>" +
        "<circle cx='" + (x + 26) + "' cy='" + (y - 10) + "' r='9' fill='rgba(255,255,255,.10)'/>" +
        "<circle cx='" + (x + 29) + "' cy='" + (y - 12) + "' r='1.8' fill='" + INK + "' stroke='none'/>" +
        "<path d='M" + (x - 14) + " " + (y + 14) + " L" + (x - 14) + " " + (y + 30) +
        " M" + (x - 4) + " " + (y + 16) + " L" + (x - 4) + " " + (y + 32) +
        " M" + (x + 8) + " " + (y + 16) + " L" + (x + 8) + " " + (y + 32) +
        " M" + (x + 16) + " " + (y + 14) + " L" + (x + 16) + " " + (y + 30) + "'/></g>";
      // 羊到结的虚线
      s += "<path d='M" + x + " " + (y + 34) + " L" + (x + 10) + " 176' stroke='rgba(255,255,255,.3)' stroke-width='1.5' stroke-dasharray='4 4'/>";
    }
    // 绳子
    s += "<path d='M55 192 Q 320 165 585 192' stroke='#c9a86a' stroke-width='5' fill='none' stroke-linecap='round'/>";
    // 结：大小不同
    var knots = [[110, 187, 7], [215, 181, 11], [320, 178, 7.5], [430, 177, 15], [525, 182, 8]];
    for (var j = 0; j < knots.length; j++) {
      s += "<circle cx='" + knots[j][0] + "' cy='" + knots[j][1] + "' r='" + knots[j][2] +
        "' fill='" + GOLD + "' stroke='#8a6a1f' stroke-width='2'/>";
    }
    s += txt(115, 226, "小事 → 小结", 13, DIM);
    s += txt(432, 226, "大事 → 大结", 13, DIM);
    return s + "</svg>";
  }

  /* ---- his-babylon：楔形文字泥板 + 60 分钟的钟 ---- */
  function artBabylon() {
    var s = svgOpen("0 0 640 250");
    // 泥板
    s += "<rect x='45' y='35' width='290' height='180' rx='20' fill='#8a6844' stroke='#6d4f30' stroke-width='3'/>";
    var rows = [64, 92, 120, 148, 176];
    for (var r = 0; r < rows.length; r++) {
      var count = r % 2 ? 6 : 7;
      for (var i = 0; i < count; i++) {
        var x = 80 + i * 33 + (r % 2 ? 12 : 0);
        s += "<path d='M" + x + " " + rows[r] + " l13 3 l-10 13 z' fill='#5d4023'/>";
      }
    }
    s += txt(190, 240, "泥板上的楔形数字：满 60 进一位", 14, DIM);
    // 钟面
    s += "<circle cx='490' cy='118' r='76' fill='rgba(255,255,255,.06)' stroke='" + DIM + "' stroke-width='3'/>";
    for (var k = 0; k < 12; k++) {
      var a = k * Math.PI / 6;
      var x1 = 490 + 64 * Math.sin(a), y1 = 118 - 64 * Math.cos(a);
      var x2 = 490 + 74 * Math.sin(a), y2 = 118 - 74 * Math.cos(a);
      s += "<line x1='" + x1.toFixed(1) + "' y1='" + y1.toFixed(1) + "' x2='" + x2.toFixed(1) +
        "' y2='" + y2.toFixed(1) + "' stroke='" + INK + "' stroke-width='3' stroke-linecap='round'/>";
    }
    s += "<line x1='490' y1='118' x2='490' y2='58' stroke='" + GOLD + "' stroke-width='4' stroke-linecap='round'/>";
    s += "<line x1='490' y1='118' x2='452' y2='132' stroke='" + GOLD + "' stroke-width='4' stroke-linecap='round'/>";
    s += "<circle cx='490' cy='118' r='5' fill='" + GOLD + "'/>";
    s += txt(490, 226, "1 小时 = 60 分", 16, GOLD, 700);
    s += txt(490, 32, "一圈 = 360° = 6 × 60", 13, DIM);
    return s + "</svg>";
  }

  /* ---- his-egypt：5 个面包分给 8 个人 ---- */
  function artEgypt() {
    var s = svgOpen("0 0 640 240");
    function loaf(x, y) {
      return "<ellipse cx='" + x + "' cy='" + y + "' rx='32' ry='19' fill='#d9a441' stroke='#a8742a' stroke-width='2.5'/>" +
        "<path d='M" + (x - 14) + " " + (y - 3) + " q7 8 13 0 M" + (x + 1) + " " + (y - 6) + " q7 8 13 0' stroke='#a8742a' stroke-width='2' fill='none'/>";
    }
    function person(x, y) {
      return "<circle cx='" + x + "' cy='" + y + "' r='8' fill='" + GOLD + "'/>" +
        "<path d='M" + x + " " + (y + 8) + " L" + x + " " + (y + 28) +
        " M" + (x - 7) + " " + (y + 16) + " L" + (x + 7) + " " + (y + 16) +
        "' stroke='" + INK + "' stroke-width='2.5' fill='none' stroke-linecap='round'/>";
    }
    s += loaf(75, 58) + loaf(155, 58) + loaf(235, 58) + loaf(115, 118) + loaf(195, 118);
    s += txt(155, 172, "5 个面包 ÷ 8 个人", 14, DIM);
    s += "<path d='M285 92 L345 92 M330 79 L345 92 L330 105' stroke='" + GOLD + "' stroke-width='4' fill='none' stroke-linecap='round'/>";
    var xs = [400, 455, 510, 565];
    for (var i = 0; i < 4; i++) { s += person(xs[i], 52); s += person(xs[i], 122); }
    s += txt(482, 182, "每人：1/2 + 1/8 = 5/8", 17, GOLD, 700);
    s += txt(482, 208, "4 个面包切成 8 个半，最后 1 个切成 8 小块", 12, DIM);
    return s + "</svg>";
  }

  /* ---- his-suanchou：算筹摆「372」---- */
  function artSuanchou() {
    var s = svgOpen("0 0 640 215");
    function vrod(x, y) { return "<rect x='" + (x - 3.5) + "' y='" + y + "' width='7' height='48' rx='3.5' fill='" + GOLD + "'/>"; }
    function hrod(x, y) { return "<rect x='" + x + "' y='" + (y - 3.5) + "' width='48' height='7' rx='3.5' fill='" + GOLD + "'/>"; }
    // 百位 3：纵式三竖
    s += vrod(112, 58) + vrod(136, 58) + vrod(160, 58);
    // 十位 7：横式（上竖下两横）
    s += vrod(330, 40) + hrod(306, 102) + hrod(306, 118);
    // 个位 2：纵式两竖
    s += vrod(520, 58) + vrod(544, 58);
    s += txt(136, 32, "3", 24, GOLD, 900);
    s += txt(330, 32, "7", 24, GOLD, 900);
    s += txt(532, 32, "2", 24, GOLD, 900);
    s += txt(136, 152, "百位 · 纵式", 14, INK);
    s += txt(330, 152, "十位 · 横式", 14, INK);
    s += txt(532, 152, "个位 · 纵式", 14, INK);
    s += txt(320, 196, "纵横相间记数，空位就是 0 ——「一纵十横，百立千僵」", 14, DIM);
    return s + "</svg>";
  }

  /* ---- his-zero：空位之谜 → 0 来守位 ---- */
  function artZero() {
    var s = svgOpen("0 0 640 215");
    s += "<rect x='55' y='45' width='200' height='115' rx='14' fill='rgba(255,255,255,.07)' stroke='rgba(255,255,255,.2)' stroke-width='2'/>";
    s += txt(97, 132, "3", 44, INK, 900);
    s += txt(213, 132, "5", 44, INK, 900);
    s += "<circle cx='155' cy='115' r='19' fill='none' stroke='#ff8a3d' stroke-width='2.5' stroke-dasharray='5 4'/>";
    s += txt(155, 124, "？", 20, "#ff8a3d", 900);
    s += txt(155, 192, "空位让人犯迷糊", 14, DIM);
    s += "<path d='M272 102 L330 102' stroke='" + GOLD + "' stroke-width='4' stroke-linecap='round'/>" +
      "<path d='M330 102 l-13 -7 l0 14 z' fill='" + GOLD + "'/>";
    s += "<rect x='352' y='45' width='235' height='115' rx='14' fill='rgba(255,194,51,.10)' stroke='rgba(255,194,51,.5)' stroke-width='2'/>";
    s += txt(397, 132, "3", 44, INK, 900);
    s += txt(470, 134, "0", 54, GOLD, 900);
    s += txt(545, 132, "5", 44, INK, 900);
    s += txt(470, 192, "0 把守空位，305 不会看成 35", 14, GOLD, 700);
    return s + "</svg>";
  }

  /* ---- his-arabic：印度 → 阿拉伯 → 欧洲 ---- */
  function artTravel() {
    var s = svgOpen("0 0 640 240");
    s += "<path d='M110 150 Q 215 45 320 85 Q 425 125 530 150' stroke='" + DIM + "' stroke-width='2.5' fill='none' stroke-dasharray='6 6'/>";
    s += "<path d='M530 150 l-15 -5 l5 12 z' fill='" + DIM + "'/>";
    s += "<text x='218' y='112' font-size='24'>🐪</text>";
    s += "<text x='418' y='116' font-size='24'>⛵</text>";
    var nodes = [[110, 150, "印度 · 发明"], [320, 85, "阿拉伯 · 传播"], [530, 150, "欧洲 · 推广"]];
    for (var i = 0; i < nodes.length; i++) {
      s += "<circle cx='" + nodes[i][0] + "' cy='" + nodes[i][1] + "' r='9' fill='" + GOLD + "'/>";
      s += txt(nodes[i][0], nodes[i][1] - 18, nodes[i][2], 15, INK, 700);
    }
    s += txt(320, 218, "0 1 2 3 4 5 6 7 8 9", 20, GOLD, 900);
    return s + "</svg>";
  }

  /* ================= 注册 6 件展品 ================= */

  MW.museum.register({
    id: "his-jiesheng",
    hall: "history",
    icon: "🪢",
    title: "结绳计数",
    sub: "没有数字的年代，古人怎么记住有多少只羊？",
    paragraphs: [
      "几万年前，还没有数字。牧民早上把羊赶出圈，晚上怎么知道羊是不是全回来了？少了一只，少的又是哪一只？",
      "聪明的古人想了个办法：每过一只羊，就在绳子上打一个结，或者放下一颗石子、在骨头上刻一道痕。<b>一只羊对一个结</b>——这就是数学里超级重要的「一一对应」，它是一切计数的起点。",
      "中国的古书《周易》里说：「上古结绳而治」——大事打大结，小事打小结。南美洲的印加人更厉害，他们的绳结「奇普」用绳子的颜色、粗细和结的位置记录粮食与人口，复杂得像一台绳子做的计算机。",
      "后来，人们把符号刻在龟甲、泥板和竹简上，绳结慢慢退休，数字登上了舞台。今天小朋友掰着手指数数，用的其实还是最古老的一一对应！"
    ],
    art: artJiesheng()
  });

  MW.museum.register({
    id: "his-babylon",
    hall: "history",
    icon: "⏳",
    title: "巴比伦的 60 进制",
    sub: "为什么 1 小时是 60 分、一圈是 360°？",
    paragraphs: [
      "四千多年前，在两河流域（今天的伊拉克一带），巴比伦人把湿泥板当纸，用芦苇杆压出一个个小楔形符号。泥板烤干之后硬得像砖头，几千年后的今天还能读到。",
      "我们数数满十进一，叫十进制；巴比伦人却<b>满六十进一</b>——这就是「60 进制」。",
      "为什么偏偏是 60？因为 60 的因数特别多：1、2、3、4、5、6、10、12、15、20、30、60。把 60 平均分给 2 人、3 人、4 人、5 人、6 人，全都分得干干净净，算账分东西特别方便。",
      "这个四千年前的选择一直活到今天：1 小时 = 60 分钟，1 分钟 = 60 秒，一圈 = 360°（正好是 6 个 60）。下次你抬头看钟表，看到的就是古巴比伦！"
    ],
    art: artBabylon()
  });

  MW.museum.register({
    id: "his-egypt",
    hall: "history",
    icon: "🥧",
    title: "古埃及的分数",
    sub: "5 个面包分给 8 个人，怎么切才公平？",
    paragraphs: [
      "三千多年前的古埃及，分数有个怪脾气：几乎只用<b>分子是 1 的「单位分数」</b>，比如 1/2、1/3、1/8（只有 2/3 有特权，拥有自己的专用符号）。",
      "在著名的莱因德纸草书（约公元前 1650 年抄写）里，有一大张对照表，教书记员把普通分数拆成几个单位分数相加。比如 5/8，要写成 1/2 + 1/8。",
      "用单位分数分面包特别公平。5 个面包分给 8 个人：先把 4 个面包各自切成两半，每人分到 1/2；再把最后 1 个切成 8 小块，每人再分 1/8。每人正好得到 <b>1/2 + 1/8 = 5/8</b>，谁也不吃亏！",
      "今天我们可以直接写 5/8，方便多了。但古埃及人的拆法里藏着分数加法的大学问。直到现在，数学家还在研究单位分数的各种谜题呢。"
    ],
    art: artEgypt()
  });

  MW.museum.register({
    id: "his-suanchou",
    hall: "history",
    icon: "🧮",
    title: "中国算筹与《九章算术》",
    sub: "一把小竹棍，算出中国古代数学的骄傲",
    paragraphs: [
      "两千多年前的中国，人们算账不用纸笔，而是随身带一把小棍——<b>算筹</b>。往桌上一摆，加减乘除都能算，是当时的「随身计算器」。",
      "摆法很有讲究：个位、百位用竖着的「纵式」，十位、千位用横着的「横式」，纵横相间；哪一位是 0，就让它空着。古书《孙子算经》的口诀说：「一纵十横，百立千僵。」",
      "大约两千年前成书的《九章算术》，总结了从田地丈量到粮食交易的 246 类问题。书中的「方程术」是<b>世界上最早的方程组解法</b>，比欧洲早了一千五百多年。",
      "书里还第一次为负数定下运算规则，注释家刘徽说：用红筹表示正数、黑筹表示负数。当别的地方还觉得「比 0 还小」不可理喻时，中国的负数已经上岗干活啦！"
    ],
    art: artSuanchou()
  });

  MW.museum.register({
    id: "his-zero",
    hall: "history",
    icon: "0️⃣",
    title: "伟大的 0",
    sub: "「什么都没有」，也值得专门发明一个数字",
    paragraphs: [
      "很早以前，人们记数最怕空位：三百零五的中间什么都没有，一不留神就看成 35。巴比伦人后来干脆在空位上放个记号——但那只表示「这里是空的」，还算不上真正的数字。",
      "真正把 0 当作一个数字的，是古印度的数学家。公元 628 年，婆罗摩笈多第一次写下 0 的运算法则：任何数加 0 还是它自己，减 0 也不变……中美洲的玛雅人也很早独立想到了 0。",
      "别小看这个圆圈！有了 0，<b>位值制</b>才算完整：同一个 5，站在个位是 5，站在十位是 50，站在百位是 500——位置说了算，空位全交给 0 把守。",
      "0 跟着印度数字一路旅行，经阿拉伯世界传到欧洲。起初还有人怀疑它、甚至下过禁令（怕有人把 0 偷偷改成 6 或 9 做假账），可它实在太好用了，最终征服了世界。今天计算机的世界，仍然由 0 和 1 搭建。"
    ],
    art: artZero()
  });

  MW.museum.register({
    id: "his-arabic",
    hall: "history",
    icon: "🗺️",
    title: "数字的环球旅行",
    sub: "1、2、3 出生在印度，为什么叫「阿拉伯数字」？",
    paragraphs: [
      "我们每天写的 0、1、2、3……9，其实出生在古印度。一千多年前，印度人发明了这套写法，配上位值制，算起账来又快又清楚。",
      "最识货的是阿拉伯商人。9 世纪，巴格达数学家花拉子密写书大力介绍印度数字——他的名字念着念着，就变成了今天英文里的「算法」（algorithm）这个词！",
      "1202 年，意大利数学家斐波那契出版《算盘书》，把这套数字郑重推荐给欧洲。他小时候随父亲在北非生活，亲眼见过阿拉伯商人用它算账有多快。",
      "因为欧洲人是跟阿拉伯人学的，就管这套数字叫「阿拉伯数字」，名字一直叫到今天。数字的模样也在旅途中慢慢变化，过了几百年才长成现在这个样子。",
      "从印度到阿拉伯，再到欧洲和全世界——数字的环球旅行告诉我们：好想法不属于某一个地方，而属于所有爱动脑筋的人。"
    ],
    art: artTravel()
  });
})();
