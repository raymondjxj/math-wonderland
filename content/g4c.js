/* ============================================================
   数学奇境 · 四年级扩展单元（第 7~8 课）v2
   单元：7 三角形 / 8 小数的意义和性质
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[4] = MW.content[4] || { grade: 4, name: "四年级 · 蔚蓝星球", units: [] };
G.units.push(

  /* ================= 单元 7：三角形 ================= */
  {
    id: "g4u7",
    title: "三角形",
    subtitle: "三条边的约定，三个角的秘密",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "搭不起来的帐篷",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="340" cy="42" r="24" fill="#ffd166"/>
          <path d="M0 208 Q50 196 100 208 T200 208 T300 208 T400 208 V240 H0 Z" fill="#bcd8ff"/>
          <path d="M0 222 Q50 211 100 222 T200 222 T300 222 T400 222 V240 H0 Z" fill="#4d96ff" opacity=".5"/>
          <g stroke-linecap="round" stroke-width="10">
            <line x1="80" y1="173" x2="320" y2="173" stroke="#2f7df0"/>
            <line x1="80" y1="173" x2="140" y2="122" stroke="#4d96ff"/>
            <line x1="320" y1="173" x2="264" y2="124" stroke="#93beff"/>
          </g>
          <line x1="148" y1="120" x2="256" y2="122" stroke="#ff6b6b" stroke-width="4" stroke-dasharray="8 7"/>
          <text x="202" y="104" font-size="15" fill="#d94f5c" font-weight="bold" text-anchor="middle">够不着！</text>
          <text x="92" y="142" font-size="14" fill="#1c4b8f" font-weight="bold">3 厘米</text>
          <text x="290" y="142" font-size="14" fill="#1c4b8f" font-weight="bold">4 厘米</text>
          <text x="200" y="162" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">8 厘米</text>
          <text x="24" y="36" font-size="17" fill="#1c4b8f" font-weight="bold">⛺ 三根小棒搭帐篷</text>
        </svg>`,
        paragraphs: [
          "蔚蓝星球要办海洋运动会，小海豚蓝蓝报名搭帐篷。教练发来三根小棒：3 厘米、4 厘米和 8 厘米。",
          "蓝蓝把 8 厘米的小棒铺在地上当底边，举起另外两根往上搭——哎呀！两根小棒的尖儿怎么也碰不到一起，帐篷塌了。",
          "换一组小棒，帐篷「唰」地一下就立起来了。<b>同样是三根小棒，为什么有的围得成三角形，有的围不成？</b>三条边之间，藏着一条铁规矩。"
        ]
      },
      {
        type: "play",
        widget: "angle",
        prompt: "撕角游戏开始之前，先认识一位关键朋友——平角。拖动滑块，把角一直张到 180°，让它变成一条平平的直线！",
        config: { interactive: true, deg: 45, target: 180, tolerance: 3, showProtractor: true },
        successText: "拉开了！180° 的平角，就像一条笔直的地平线。记住它的样子——等会儿三角形的三个角撕下来，正好能拼成它！"
      },
      {
        type: "anim",
        widget: "angle",
        steps: [
          { caption: "任意画一个三角形，量一量它的三个角。第一个角：60°。", state: { deg: 60, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "第二个角：70°。", state: { deg: 70, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "第三个角：50°。", state: { deg: 50, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "变个小魔术：把角撕下来，顶点对顶点拼。先拼 60° 和 70°，合成 130°。", state: { deg: 130, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "再拼上 50°——三个角严丝合缝，正好拼成一个平角：180°！", state: { deg: 180, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "再换个高矮胖瘦不同的三角形，撕了拼、拼了撕，结果都一样：三角形的内角和 = 180°。", state: { deg: 180, showArc: true, showLabel: true, showProtractor: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把动手发现的秘密，写成数学的语言：",
          "三角形按角分类，看最大的那个角；按边分类，数有几条边相等。"
        ],
        formula: "∠1 + ∠2 + ∠3 = 180°　·　任意两边之和 > 第三边",
        keypoints: [
          "按角分：三个角都是锐角 → 锐角三角形；有一个直角 → 直角三角形；有一个钝角 → 钝角三角形",
          "按边分：两条边相等 → 等腰三角形；三条边都相等 → 等边三角形（特殊的等腰三角形）",
          "三角形的内角和是 180°：三个角撕下来，正好拼成一个平角",
          "任意两边之和大于第三边：两条短边接起来够不到长边的两端，就围不成三角形"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "三个角都是锐角的三角形，叫什么三角形？", options: ["锐角三角形", "直角三角形", "钝角三角形"], answer: 0,
            hint: "按角分类，看最大的那个角", explain: "三个角都是锐角，最大的角也是锐角，所以是锐角三角形。" },
          { type: "choice", level: "基础", q: "一个三角形里最大的角是 92°，它是什么三角形？", options: ["锐角三角形", "直角三角形", "钝角三角形"], answer: 2,
            hint: "92° 比直角大还是小？", explain: "92° 是钝角，有一个钝角的三角形就是钝角三角形。按角分类，由最大的角说了算。" },
          { type: "fill", level: "基础", q: "三角形的两个角分别是 50° 和 60°，第三个角是 □°。", answer: "70",
            hint: "三个角加起来是 180°：180 − 50 − 60 = ?", explain: "180° − 50° − 60° = 70°。内角和 180°，是三角形的铁规矩。" },
          { type: "judge", level: "变式", q: "一个三角形里可以同时有 2 个直角。", answer: false,
            hint: "两个直角就已经 180° 了，第三个角怎么办？", explain: "90° + 90° = 180°，第三个角只能是 0°——那就不叫三角形了。所以一个三角形最多有 1 个直角。" },
          { type: "choice", level: "变式", q: "等边三角形的每个角是多少度？", options: ["45°", "60°", "90°"], answer: 1,
            hint: "三条边相等，三个角也相等：180° ÷ 3 = ?", explain: "等边三角形三个角一样大，180° ÷ 3 = 60°。" },
          { type: "choice", level: "变式", q: "为什么 3 厘米、4 厘米、8 厘米的三根小棒围不成三角形？", options: ["因为 3 + 4 比 8 小，两根短棒接起来够不到长边的两端", "因为小棒的厘米数都是单数双数混在一起了", "因为小棒太滑了"], answer: 0,
            hint: "把 8 厘米的小棒横放当底边，3 和 4 接起来够长吗？", explain: "3 + 4 = 7 < 8，两根短棒接满还差 1 厘米。两边之和必须大于第三边，才围得成三角形。" },
          { type: "choice", level: "挑战", q: "已经有 5 厘米和 9 厘米的小棒，再选哪一根能围成三角形？", options: ["3 厘米", "4 厘米", "6 厘米", "14 厘米"], answer: 2,
            hint: "逐个检查：两根较短的加起来，必须比最长的那根长", explain: "5 + 3 = 8 < 9，不行；5 + 4 = 9，正好接上躺平了，不行；5 + 6 = 11 > 9，行；5 + 9 = 14，不大于 14，也不行。选 6 厘米。" },
          { type: "fill", level: "挑战", q: "等腰三角形的顶角是 100°，它的一个底角是 □°。", answer: "40",
            hint: "等腰三角形的两个底角相等：(180 − 100) ÷ 2 = ?", explain: "(180° − 100°) ÷ 2 = 40°。等腰三角形的两个底角一样大。" },
          { type: "fill", level: "温故", q: "还记得吗：第 2 课《角的度量》里学过，1 平角 = □°。", answer: "180",
            hint: "平角就是两条边躺成一条直线的角", explain: "1 平角 = 180°。怪不得三角形三个角总能拼成平角——它们加起来正好 180°！" }
        ]
      },
      {
        type: "review",
        question: "为什么任意三角形的三个角加起来都是 180°？你能用几种方法说服别人？",
        ways: [
          { name: "撕一撕", text: "把纸三角形的三个角撕下来，顶点对顶点拼在一起，正好拼成一个平角 180°。" },
          { name: "折一折", text: "不撕也行：把三个角向里折，三个尖角落在同一点，同样拼成一个平角。" },
          { name: "算一算", text: "量出三个角再相加：60° + 70° + 50° = 180°。换个三角形再量再算，还是 180°。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 3 厘米、4 厘米、8 厘米的三根小棒围不成三角形？（可以拿三支笔摆给他们看）"
      },
      {
        type: "beauty",
        headline: "撕一撕，拼一拼：一个骗不了人的证明",
        paragraphs: [
          "不用量角器，也能证明三角形内角和是 180°：把纸三角形的三个角撕下来拼在一起——不管三角形什么形状，它们总是严丝合缝地拼成一个平角。",
          "这个「撕角实验」，是几何学里最漂亮的证明之一。两千多年前，欧几里得在《几何原本》里用平行线，把同一个结论写得严严密密。",
          "三角形还是密铺高手：任意一种三角形，都能不重不漏地铺满整个平面。去博物馆看看撕角实验，再去实验室亲手铺一铺！"
        ],
        museum: "prf-triangle",
        lab: "tessellation"
      }
    ]
  },

  /* ================= 单元 8：小数的意义和性质 ================= */
  {
    id: "g4u8",
    title: "小数的意义和性质",
    subtitle: "小数点的大本领",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "谁跳得更远？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="340" cy="42" r="24" fill="#ffd166"/>
          <path d="M0 208 Q50 196 100 208 T200 208 T300 208 T400 208 V240 H0 Z" fill="#bcd8ff"/>
          <path d="M0 222 Q50 211 100 222 T200 222 T300 222 T400 222 V240 H0 Z" fill="#4d96ff" opacity=".5"/>
          <rect x="40" y="96" width="8" height="84" rx="3" fill="#2b2d42"/>
          <line x1="48" y1="140" x2="366" y2="140" stroke="#93beff" stroke-width="4" stroke-dasharray="10 8"/>
          <line x1="272" y1="140" x2="272" y2="98" stroke="#2f7df0" stroke-width="5" stroke-linecap="round"/>
          <path d="M272 98 L300 106 L272 114 Z" fill="#4d96ff"/>
          <line x1="288" y1="140" x2="288" y2="90" stroke="#e0a91f" stroke-width="5" stroke-linecap="round"/>
          <path d="M288 90 L316 98 L288 106 Z" fill="#ffd166"/>
          <text x="266" y="164" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="end">🐬 2.9 米</text>
          <text x="294" y="186" font-size="15" fill="#8a6d1f" font-weight="bold" text-anchor="end">🐢 3.05 米</text>
          <text x="24" y="36" font-size="17" fill="#1c4b8f" font-weight="bold">🏁 跳远决赛：谁更远？</text>
        </svg>`,
        paragraphs: [
          "海洋运动会跳远决赛！小海豚蓝蓝跳出 2.9 米，小海龟慢慢跳出 3.05 米。记分牌前，两个小伙伴都说自己赢了。",
          "蓝蓝急了：「2.9 和 3.05，到底谁更远？」裁判章鱼爷爷捋捋胡子：「别急别急，小数比大小，得一位一位来。」",
          "0.9 有多长？0.05 又是多小？<b>小数点后面的每一个位置，都有自己的名字和本领。</b>今天，就把小数的家底摸个清楚！"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "蓝蓝跳了 2.9 米——2 米好懂，那 0.9 米有多长？这条长条表示 1 米，被平均分成 10 份，请你涂出 0.9 米！",
        config: { interactive: true, shape: "bar", parts: 10, target: 9 },
        successText: "涂好了！10 份里的 9 份就是 9/10 米，写成小数是 0.9 米——离整条 1 米只差 1 小格！"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "把「1」平均分成 10 份，其中的 1 份是十分之一，写成小数是 0.1。", state: { shape: "bar", parts: 10, shaded: 1, showLabel: true } },
          { caption: "3 份是 3 个 0.1：0.3。十分之几，就写成一位小数。", state: { shape: "bar", parts: 10, shaded: 3, showLabel: true } },
          { caption: "9 份是 9 个 0.1：0.9——这就是蓝蓝成绩里的小数部分。", state: { shape: "bar", parts: 10, shaded: 9, showLabel: true } },
          { caption: "涂满 10 份：10 个 0.1 正好是 1。十分位满十，就向个位进一。", state: { shape: "bar", parts: 10, shaded: 10, showLabel: true } },
          { caption: "把 0.1 这一小格放大，再平均分成 10 份：这样的 1 份是百分之一，写成 0.01。", state: { shape: "bar", parts: 10, shaded: 1, showLabel: true } },
          { caption: "这样的 6 份是 0.06。0.1 和 0.01 是邻居：10 个 0.01 正好换回 1 个 0.1。", state: { shape: "bar", parts: 10, shaded: 6, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把长条上看到的，写成数学的语言：",
          "十分之几写成一位小数，百分之几写成两位小数。小数点右边，依次是十分位、百分位、千分位。"
        ],
        formula: "1/10 = 0.1　　1/100 = 0.01　　1/1000 = 0.001",
        keypoints: [
          "小数点右边第一位是十分位（0.1），第二位是百分位（0.01），相邻两个计数单位的进率都是 10",
          "小数的性质：小数末尾添上 0 或去掉 0，大小不变——0.5 = 0.50",
          "比大小：先比整数部分；整数部分相同，再比十分位，一位一位往下比",
          "小数点向右移一位，数扩大到原来的 10 倍；向左移一位，缩小到原来的 1/10"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "把「1」平均分成 10 份，其中的 1 份用小数表示是？", options: ["0.1", "0.01", "1.1"], answer: 0,
            hint: "十分之一写成小数是什么？", explain: "1/10 = 0.1。小数点右边第一位就是十分位。" },
          { type: "fill", level: "基础", q: "0.35 里面有 □ 个 0.01。", answer: "35",
            hint: "0.35 = 35/100，数一数有几个百分之一", explain: "0.35 是 35 个 0.01 组成的，所以有 35 个。" },
          { type: "choice", level: "基础", q: "0.7 和 0.9，哪个大？", options: ["0.7", "0.9", "一样大"], answer: 1,
            hint: "都是几个 0.1，数数谁的个数多", explain: "0.9 是 9 个 0.1，0.7 是 7 个 0.1，9 > 7，所以 0.9 大。" },
          { type: "judge", level: "变式", q: "在小数的末尾添上一个 0，小数的大小不变，比如 0.5 = 0.50。", answer: true,
            hint: "5 个 0.1 和 50 个 0.01，在长条上涂出来一样长", explain: "这是小数的基本性质：末尾添 0 或去掉 0，大小不变。注意是「末尾」，0.5 变成 0.05 可就不一样了！" },
          { type: "choice", level: "变式", q: "0.08 和 0.079，哪个大？", options: ["0.08", "0.079", "一样大"], answer: 0,
            hint: "位数多不一定大！把 0.08 写成 0.080，再一位一位比", explain: "0.08 = 0.080。十分位都是 0，比百分位：8 > 7，所以 0.080 > 0.079。小数比大小，从高位一位一位往下比。" },
          { type: "choice", level: "变式", q: "为什么 0.5 和 0.50 一样大？", options: ["因为 5 个 0.1 就是 50 个 0.01，涂满的部分一样长", "因为 0 不占地方，可以随便添在小数中间", "因为它们读起来差不多"], answer: 0,
            hint: "想想长条：5/10 和 50/100 涂的是不是同一段？", explain: "0.5 = 5/10，0.50 = 50/100，是同一段长度。末尾的 0 只是把单位分得更细，没有增加新的大小。" },
          { type: "fill", level: "挑战", q: "把 0.35 的小数点向右移动一位，得到的数是 □。", answer: "3.5",
            hint: "小数点向右移一位，数扩大到原来的 10 倍", explain: "0.35 × 10 = 3.5。小数点向右搬了一个家，数就长大 10 倍。" },
          { type: "choice", level: "挑战", q: "把 4.2 的小数点向左移动一位，得到的数是？", options: ["42", "0.42", "4.02"], answer: 1,
            hint: "向左移一位，数缩小到原来的 1/10", explain: "4.2 ÷ 10 = 0.42。小数点往左搬，数就变小；往右搬，数就变大。" },
          { type: "fill", level: "温故", q: "还记得吗：三年级就认识了小数——5 角写成以「元」为单位的小数，是 □ 元。", answer: "0.5",
            hint: "1 元 = 10 角，5 角是 5/10 元", explain: "5 角 = 5/10 元 = 0.5 元。老朋友小数，今天总算把它的家底摸清楚啦！" }
        ]
      },
      {
        type: "review",
        question: "0.5 和 0.50 为什么一样大？你能用几种方法说明白？",
        ways: [
          { name: "涂长条", text: "把同样长的两条长条分别平均分成 10 份和 100 份：涂 5 份和涂 50 份，长度一模一样。" },
          { name: "算零钱", text: "0.5 元是 5 角，0.50 元是 50 分——5 角正好等于 50 分，一分钱都不差。" },
          { name: "看数位", text: "两个数的 5 都在十分位上；末尾添的 0 只占位置，没有带来新的大小。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 0.08 比 0.079 大？（提示：把 0.08 写成 0.080，再一位一位比给他们看）"
      },
      {
        type: "beauty",
        headline: "写不完的小数：黄金比的魔法",
        paragraphs: [
          "有一种小数，小数点后面的数字永远写不完，而且从不循环：1.6180339887……它就是大名鼎鼎的「黄金比」。",
          "向日葵的种子排列、鹦鹉螺的螺旋壳、星系的旋臂里，都藏着这个数。画家还发现：按黄金比分割的画面，看起来格外舒服。",
          "神奇的是，这串写不完的小数，能从一串简简单单的整数里长出来。去实验室种下斐波那契数列，看它一步一步逼近黄金比！"
        ],
        lab: "fibonacci"
      }
    ]
  }
);
