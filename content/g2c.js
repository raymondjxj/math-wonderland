/* ============================================================
   数学奇境 · 二年级扩展单元 v2（第 7~8 课）
   单元：7 有余数的除法 / 8 万以内数的认识
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[2] = MW.content[2] || { grade: 2, name: "二年级 · 橙光星球", units: [] };

G.units.push(

  /* ================= 单元 7：有余数的除法 ================= */
  {
    id: "g2u7",
    title: "有余数的除法",
    subtitle: "分不完的那一块",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "分不完的星星糖",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="340" cy="42" r="24" fill="#ffc233"/>
          <circle cx="75" cy="105" r="24" fill="#ffb26b"/>
          <circle cx="67" cy="100" r="4" fill="#2b2d42"/><circle cx="83" cy="100" r="4" fill="#2b2d42"/>
          <path d="M67 113 q8 7 16 0" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round"/>
          <circle cx="325" cy="105" r="24" fill="#ffcf9e"/>
          <circle cx="317" cy="100" r="4" fill="#2b2d42"/><circle cx="333" cy="100" r="4" fill="#2b2d42"/>
          <path d="M317 113 q8 7 16 0" stroke="#2b2d42" stroke-width="3" fill="none" stroke-linecap="round"/>
          <rect x="30" y="150" width="340" height="16" rx="8" fill="#b25e14"/>
          <g fill="#ff8a3d">
            <circle cx="118" cy="136" r="10"/><circle cx="144" cy="136" r="10"/><circle cx="170" cy="136" r="10"/>
            <circle cx="230" cy="136" r="10"/><circle cx="256" cy="136" r="10"/><circle cx="282" cy="136" r="10"/>
            <circle cx="200" cy="118" r="10"/>
          </g>
          <g fill="#ffffff" opacity=".55">
            <circle cx="115" cy="133" r="2.5"/><circle cx="141" cy="133" r="2.5"/><circle cx="167" cy="133" r="2.5"/>
            <circle cx="227" cy="133" r="2.5"/><circle cx="253" cy="133" r="2.5"/><circle cx="279" cy="133" r="2.5"/>
            <circle cx="197" cy="115" r="2.5"/>
          </g>
          <text x="194" y="92" font-size="22" fill="#b25e14" font-weight="bold">?</text>
          <text x="106" y="215" font-size="17" fill="#b25e14" font-weight="bold">🍬 多出来的 1 颗怎么办？</text>
        </svg>`,
        paragraphs: [
          "橙光星球的丰收节到了！奇奇摘了 7 颗亮晶晶的星星糖，要分给自己和好朋友米米。",
          "你一颗，我一颗……分到第 6 颗，每人 3 颗，一样多。可桌上还剩 1 颗！",
          "给奇奇？米米噘起嘴。给米米？奇奇直摇头。掰成两半？星星糖会碎掉！<b>这多出来的 1 颗糖，到底该怎么办？</b>"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先动手分一分：每人 3 颗糖，2 个人——请摆出 2 行 × 3 列的方阵！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 2, targetCols: 3 },
        successText: "摆好了！2 行 3 列正好 6 颗。可糖一共有 7 颗——多出来的那 1 颗摆不进去，它就是今天的主角：余数。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "7 颗糖分给 2 个人。先摆能分完的部分：每人 3 颗，2 行 3 列，用掉 6 颗。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "还剩 1 颗！想再分一轮，每人 1 颗得要 2 颗——不够了。这摆不完剩下的 1 颗，就叫余数。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "写成除法：7 ÷ 2 = 3 …… 1。3 是商，1 是余数，读作「七除以二等于三余一」。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "多拿 1 颗再试：8 颗正好摆成 2 行 4 列，8 ÷ 2 = 4，一颗不剩。", state: { rows: 2, cols: 4, showTotal: true } },
          { caption: "再添 1 颗：9 颗摆 2 行 4 列用掉 8 颗，又剩 1 颗，9 ÷ 2 = 4 …… 1。剩下的凑不够 2 颗就分不了——余数一定比除数小！", state: { rows: 2, cols: 4, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把分糖的过程，写成数学的语言：",
          "平均分，能分完的部分写成商；分不完剩下的，写在「……」后面，叫余数。"
        ],
        formula: "7 ÷ 2 = 3 …… 1",
        keypoints: [
          "「÷」读作「除以」，7 ÷ 2 读作「七除以二」",
          "商 3：每人分到 3 颗；余数 1：剩下 1 颗",
          "余数必须比除数小：够再分一轮，就不许算剩下",
          "检查口诀：商 × 除数 + 余数 = 被分的总数 → 3 × 2 + 1 = 7"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "7 颗糖分给 2 个人，每人 3 颗，还剩几颗？", options: ["1 颗", "2 颗", "3 颗", "一颗不剩"], answer: 0,
            hint: "先算分掉的：2 个 3 是 6，再算 7 − 6", explain: "分掉 6 颗，7 − 6 = 1，还剩 1 颗。这 1 颗就是余数。" },
          { type: "fill", level: "基础", q: "13 ÷ 4 = 3 …… □", answer: "1",
            hint: "想 4 的乘法口诀：三四十二，13 − 12 = ?", explain: "13 − 12 = 1，余数是 1。检查：3 × 4 + 1 = 13，没错！" },
          { type: "choice", level: "基础", q: "9 ÷ 2 的商和余数分别是多少？", options: ["商 4 余 1", "商 3 余 3", "商 4 余 2", "商 5 余 1"], answer: 0,
            hint: "二四得八，9 − 8 = ?", explain: "9 ÷ 2 = 4 …… 1。「商 3 余 3」不对：剩 3 颗还能再分一轮呢！" },
          { type: "judge", level: "变式", q: "奇奇算：11 ÷ 3 = 2 …… 5，因为 2 × 3 + 5 = 11，所以他算对了。", answer: false,
            hint: "余数 5 和除数 3 比一比，谁大？", explain: "余数 5 比除数 3 还大，说明没分完！5 里面还能再分一轮：11 ÷ 3 = 3 …… 2 才对。" },
          { type: "choice", level: "变式", q: "为什么余数一定要比除数小？", options: ["剩下的若够除数那么多，就还能再分一轮，不算分完", "乘法口诀表上就是这样印的", "只是碰巧，没有原因"], answer: 0,
            hint: "假如剩 5 颗糖、每人要分 1 颗……够再分一轮吗？", explain: "剩下的只要够除数那么多，就能继续分。真正的「剩下」，一定少到不够再分一轮。" },
          { type: "fill", level: "变式", q: "一个数除以 5，余数最大可能是几？", answer: "4",
            hint: "余数要比除数 5 小，比 5 小的数里最大的是几？", explain: "余数最大是 4。如果剩 5 个，就又能再分一轮，商就该加 1 啦。" },
          { type: "choice", level: "挑战", q: "17 个苹果，每 5 个装一袋，能装满几袋？还剩几个？", options: ["3 袋，还剩 2 个", "2 袋，还剩 7 个", "3 袋，还剩 3 个", "4 袋，还剩 1 个"], answer: 0,
            hint: "三五十五，17 − 15 = ?", explain: "17 ÷ 5 = 3 …… 2，装满 3 袋剩 2 个。「2 袋剩 7 个」不行：7 个还能再装满 1 袋！" },
          { type: "fill", level: "温故", q: "还记得吗：6 × 4 = □", answer: "24",
            hint: "背背 6 的乘法口诀：四六……", explain: "6 × 4 = 24。除法全靠乘法帮忙——算 24 ÷ 6 时，就要想起它！" }
        ]
      },
      {
        type: "review",
        question: "7 ÷ 2 = 3 …… 1，余数 1 是怎么来的？它为什么不能是 2？",
        ways: [
          { name: "摆一摆", text: "7 颗糖你一颗我一颗轮流分，每人 3 颗后只剩 1 颗；1 颗不够两人再分一轮，只能留下。" },
          { name: "想乘法", text: "想 2 的乘法口诀：二三得六，二四得八；8 比 7 大，每人最多分 3 颗，7 − 6 = 1。" },
          { name: "减一减", text: "每分一轮减掉 2 颗：7 − 2 − 2 − 2 = 1，减了 3 次，剩 1 颗不够再减一次。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么余数一定要比除数小？（可以拿 7 颗糖分给 2 个人举例）"
      },
      {
        type: "beauty",
        headline: "一道「剩几颗」的谜题，惊动了全世界",
        paragraphs: [
          "一千七百多年前的《孙子算经》里藏着一道谜题：一堆东西，三个三个数剩 2 个，五个五个数剩 3 个，七个七个数又剩 2 个——这堆东西有多少个？",
          "全世界的数学家为它着迷，给它起名「中国剩余定理」。今天，它还躲在手机密码和二维码里站岗呢！",
          "古人算这样的题，用的是一把小竹棍——算筹。去博物馆看看，小棍怎么摆出一部「随身计算器」。"
        ],
        museum: "his-suanchou"
      }
    ]
  },

  /* ================= 单元 8：万以内数的认识 ================= */
  {
    id: "g2u8",
    title: "万以内数的认识",
    subtitle: "比一百大的世界",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "数不完的星星",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="330" cy="50" r="26" fill="#ffc233"/>
          <circle cx="322" cy="44" r="6" fill="#ffe1a8"/><circle cx="341" cy="59" r="4" fill="#ffe1a8"/>
          <text x="34" y="120" font-size="34" fill="#ffd9ad" font-weight="bold">10000</text>
          <g fill="#ff8a3d">
            <circle cx="52" cy="42" r="3"/><circle cx="98" cy="66" r="2.5"/><circle cx="140" cy="36" r="3"/>
            <circle cx="186" cy="58" r="2.5"/><circle cx="232" cy="38" r="3"/><circle cx="272" cy="70" r="2.5"/>
            <circle cx="66" cy="150" r="2.5"/><circle cx="120" cy="164" r="3"/><circle cx="176" cy="146" r="2.5"/>
            <circle cx="238" cy="158" r="3"/><circle cx="292" cy="140" r="2.5"/><circle cx="352" cy="150" r="3"/>
            <path d="M150 96 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z"/>
            <path d="M258 108 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z"/>
            <path d="M88 108 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z"/>
          </g>
          <circle cx="330" cy="182" r="20" fill="#ffb26b"/>
          <circle cx="323" cy="178" r="3.4" fill="#2b2d42"/><circle cx="338" cy="178" r="3.4" fill="#2b2d42"/>
          <path d="M323 189 q7 6 15 0" stroke="#2b2d42" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <ellipse cx="200" cy="272" rx="250" ry="54" fill="#8bd450"/>
          <text x="86" y="204" font-size="17" fill="#b25e14" font-weight="bold">✨ 一百之外，还有多大的数？</text>
        </svg>`,
        paragraphs: [
          "夏夜的橙光星球，星星撒满天空。米米托着下巴问：「天上的星星，有一百颗吗？」",
          "奇奇一颗一颗数：一、二、三……数到一百，脖子都酸了，可星星还多得数不完。",
          "猫头鹰天文学家笑了：「一百只是小小的一步！比它大的数排着队呢——一千、一万，都在等你去认识。」<b>比一百大的世界，到底有多大？</b>"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先搭一座「百块城」：摆出 10 行 × 10 列的大方阵，亲眼看一看 100 有多大！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 10, targetCols: 10 },
        successText: "哇，满满一整面墙！10 × 10 = 100 块。记住这座城的样子——10 座这样的城连起来，就是一千。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "先看一行：10 个一，是十。", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "10 行排满：10 个十是一百，10 × 10 = 100。", state: { rows: 10, cols: 10, showTotal: true } },
          { caption: "把这整块「一百」记在心里。一百、二百、三百……每多一整块，就多一百。", state: { rows: 10, cols: 10, showTotal: true } },
          { caption: "想象 10 块这样的大板排成一排：10 个一百，是一千！", state: { rows: 10, cols: 10, showTotal: true } },
          { caption: "再想象 10 个一千排开：10 个一千，是一万！一万个小朋友手拉手，能站满一整个运动场。", state: { rows: 10, cols: 10, showTotal: true } },
          { caption: "规律只有一个：满十进一。十个一进成十，十个十进成百，十个百进成千，十个千进成万。", state: { rows: 10, cols: 10, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「满十进一」写成数学的语言：",
          "数位从右边排起：个位、十位、百位、千位、万位。哪一位攒满 10，就向前一位进 1。"
        ],
        formula: "10 个一百 = 一千，10 个一千 = 一万",
        keypoints: [
          "数位顺序（从右往左）：个位、十位、百位、千位、万位",
          "相邻两个数位之间，都是满十进一",
          "2458 = 2 个千 + 4 个百 + 5 个十 + 8 个一",
          "读数写数都从高位起；中间的 0 读「零」，末尾的 0 不读"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "10 个一百是多少？", options: ["一千", "一百", "一万", "九十"], answer: 0,
            hint: "满十进一：攒满 10 个一百，要向前进一位", explain: "一百一百地数：二百、三百……数到第 10 个一百，就进成一千。" },
          { type: "fill", level: "基础", q: "10 个一千 = □", answer: "10000",
            hint: "千位后面的一位是万位", explain: "10 个一千是一万，写作 10000——1 后面跟着 4 个 0。" },
          { type: "choice", level: "基础", q: "数位从右边数起，第四位是什么位？", options: ["千位", "百位", "万位", "十位"], answer: 0,
            hint: "从右往左背：个、十、百、千……", explain: "第一位个位、第二位十位、第三位百位、第四位千位。" },
          { type: "fill", level: "变式", q: "2458 是由 2 个千、4 个百、5 个十和 □ 个一组成的。", answer: "8",
            hint: "个位上是几，就有几个一", explain: "2458 的个位是 8，所以有 8 个一。" },
          { type: "choice", level: "变式", q: "为什么 10 个一百要换成 1 个一千？", options: ["每攒满 10 个，就向前一位进 1，用更大的数位来记", "因为「千」比「百」读起来顺口", "只是约定，没有道理"], answer: 0,
            hint: "想想 10 个一变成 1 个十，是不是一样的道理？", explain: "满十进一！10 个一进成十，10 个十进成百，10 个百就进成千——数位就是这样一级一级变大的。" },
          { type: "choice", level: "变式", q: "3005 读作什么？", options: ["三千零五", "三千五", "三千零零五", "三百零五"], answer: 0,
            hint: "中间有两个 0，也只读一个「零」", explain: "千位 3 读三千，中间两个 0 只读一个零，个位 5 读五——三千零五。" },
          { type: "fill", level: "挑战", q: "一个四位数：十位是 3，千位是 5，个位是 0，百位是 8。这个数是 □。", answer: "5830",
            hint: "别按题目顺序写！从最高位开始：千位 5、百位 8、十位 3、个位 0", explain: "这个数是 5830。个位的 0 必须写，不写就变成 583 啦！" },
          { type: "fill", level: "温故", q: "还记得吗：10 个十是 □", answer: "100",
            hint: "一十一十地数，数到第 10 个十", explain: "10 个十是一百。今天你又往前走了一步：10 个一百是一千！" }
        ]
      },
      {
        type: "review",
        question: "一千是怎么从一百变出来的？一万呢？你能用几种方法讲清楚？",
        ways: [
          { name: "数方块", text: "一个 10 × 10 的方阵是 100；10 个这样的方阵排成一排，10 个一百就是 1000。" },
          { name: "一百一百地数", text: "一百、二百、三百……数到 10 个一百，满十进一，变成一千；接着数到 10 个一千，就是一万。" },
          { name: "看数位", text: "百位攒满 10 个就进到千位，千位攒满 10 个就进到万位——满十进一，一级一级往上升。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：数位为什么按「个、十、百、千、万」排队？（用「10 个换 1 个」来讲）"
      },
      {
        type: "beauty",
        headline: "一个小圆圈，让大数写得下",
        paragraphs: [
          "一千多年前，人们记大数最怕「空位」：三百零五的中间什么都没有，一不留神就看成 35。",
          "后来，古印度人发明了数字 0：空着的数位，就请 0 来把守。有了 0 和数位，10 个数字符号就能写出任何大数——三千零五，清清爽爽写成 3005。",
          "这个了不起的小圆圈一路旅行，经阿拉伯传到全世界。去博物馆看看它的传奇吧！"
        ],
        museum: "his-zero"
      }
    ]
  }
);
