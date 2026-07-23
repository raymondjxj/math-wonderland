/* ============================================================
   数学奇境 · 四年级扩展单元 v2（第 12~15 课，push 模式）
   单元：12 小数的加法和减法 / 13 观察物体（二）/ 14 图形的运动（二）/ 15 平均数与条形统计图
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   （g4u14 为 8 幕探究课：story → play → anim → play → symbol → quiz → review → beauty）
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[4] = MW.content[4] || { grade: 4, name: "四年级 · 蔚蓝星球", units: [] };
G.units.push(

  /* ================= 单元 12：小数的加法和减法 ================= */
  {
    id: "g4u12",
    title: "小数的加法和减法",
    subtitle: "小数点对齐的秘密",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "小螃蟹的账单",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="344" cy="40" r="22" fill="#ffd166"/>
          <path d="M0 204 Q60 194 120 204 T240 204 T400 204 V240 H0 Z" fill="#bcd8ff"/>
          <rect x="26" y="66" width="180" height="130" rx="14" fill="#ffffff" stroke="#4d96ff" stroke-width="3"/>
          <rect x="26" y="66" width="180" height="34" rx="14" fill="#4d96ff"/>
          <text x="116" y="89" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">海洋文具店</text>
          <rect x="44" y="116" width="62" height="60" rx="8" fill="#eaf4ff" stroke="#2f7df0" stroke-width="2.5"/>
          <rect x="56" y="126" width="10" height="36" rx="5" fill="#1c4b8f"/>
          <rect x="54" y="120" width="14" height="10" rx="4" fill="#ffd166"/>
          <text x="75" y="190" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">钢笔 6.45 元</text>
          <rect x="122" y="116" width="62" height="60" rx="8" fill="#eaf4ff" stroke="#2f7df0" stroke-width="2.5"/>
          <rect x="136" y="126" width="34" height="40" rx="4" fill="#bcd8ff" stroke="#2f7df0" stroke-width="2"/>
          <line x1="142" y1="136" x2="164" y2="136" stroke="#2f7df0" stroke-width="2"/>
          <line x1="142" y1="144" x2="164" y2="144" stroke="#2f7df0" stroke-width="2"/>
          <line x1="142" y1="152" x2="164" y2="152" stroke="#2f7df0" stroke-width="2"/>
          <text x="153" y="190" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">笔记本 4.2 元</text>
          <circle cx="296" cy="150" r="34" fill="#ff6b6b"/>
          <circle cx="284" cy="142" r="6" fill="#ffffff"/><circle cx="308" cy="142" r="6" fill="#ffffff"/>
          <circle cx="284" cy="143" r="2.6" fill="#1c4b8f"/><circle cx="308" cy="143" r="2.6" fill="#1c4b8f"/>
          <path d="M262 128 l-14 -12 M330 128 l14 -12" stroke="#ff6b6b" stroke-width="6" stroke-linecap="round"/>
          <path d="M286 168 q10 8 20 0" stroke="#ffffff" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <rect x="226" y="52" width="150" height="40" rx="20" fill="#ffffff" stroke="#ffd166" stroke-width="3"/>
          <text x="301" y="77" font-size="15" fill="#d96a00" font-weight="bold" text-anchor="middle">一共 10.47 元？</text>
          <text x="116" y="222" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">海龟老板：不对，是 10.65 元！</text>
        </svg>`,
        paragraphs: [
          "蔚蓝星球的海洋文具店里，小海豚蓝蓝挑了一支钢笔：6.45 元；一本笔记本：4.2 元。",
          "小螃蟹店员举起计算器「咔咔」一按：「一共 10.47 元！」海龟老板摇摇头：「不对，应该是 10.65 元。」",
          "同样的两支笔，算出两个答案！小螃蟹把 4.2 的「2」对齐了 6.45 的「5」——<b>小数加减，到底该谁对齐谁？</b>"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先热热身，感受小数的「格子」：这条能量尺被平均分成 10 格，每 1 格是 0.1。点亮 7 格，涂出 0.7 米长的彩带！",
        config: { interactive: true, shape: "bar", parts: 10, target: 7 },
        successText: "涂好了！7 格就是 7 个 0.1，也就是 0.7。记住：小数和整数一样，是一格一格「数」出来的——相同的格子才能加在一起。"
      },
      {
        type: "anim",
        widget: "vertical",
        steps: [
          { caption: "蓝蓝的难题：6.45 元 + 4.2 元。先别管小数点——换成「分」来想：6.45 元 = 645 分，4.2 元 = 4 元 2 角 = 420 分。", state: { op: "add", a: 645, b: 420, step: 0 } },
          { caption: "整数竖式的老规矩：末位对齐！5 对 0（分和分对齐），4 对 2（角和角对齐）——相同的单位才能相加。从最低位算起：5 + 0 = 5。", state: { op: "add", a: 645, b: 420, step: 1 } },
          { caption: "接着算十位：4 角 + 2 角 = 6 角。", state: { op: "add", a: 645, b: 420, step: 2 } },
          { caption: "百位：6 + 4 = 10，满十进一！一共 1065 分，也就是 10.65 元。小螃蟹把 2 角当成 2 分来算，才错成 10.47 元。", state: { op: "add", a: 645, b: 420, step: 4 } },
          { caption: "换回小数：6.45 + 4.2。「分和分对齐、角和角对齐」，写成小数就是——小数点对齐！把 4.2 看成 4.20：6.45 + 4.20 = 10.65。", state: { op: "add", a: 645, b: 420, step: 0 } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「元角分的对齐」写成数学的语言：",
          "小数加减法和整数加减法的道理完全一样——相同数位才能相加减。小数点对齐了，所有数位就自动对齐了。"
        ],
        formula: "6.45 + 4.2 = 6.45 + 4.20 = 10.65",
        keypoints: [
          "小数点对齐 = 相同数位对齐，这是小数加减法的第一条规矩",
          "位数不一样多？补上 0 再算：4.2 写成 4.20，7.6 写成 7.60",
          "从最低位算起，满十进一；不够减就退一当十——和整数竖式一模一样",
          "得数的小数点，要和上面的小数点对齐"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "3.4 + 2.3 = ？", options: ["5.7", "5.07", "57", "6.7"], answer: 0,
            hint: "小数点对齐：十分位 4 + 3，个位 3 + 2", explain: "3.4 + 2.3 = 5.7。5.07 是把数位对错位的算法；小数加法不是把数直接拼起来。" },
          { type: "fill", level: "基础", q: "0.8 − 0.5 = ＿＿", answer: ["0.3", "0.30"],
            hint: "8 个 0.1 减去 5 个 0.1，还剩几个 0.1？", explain: "8 个 0.1 − 5 个 0.1 = 3 个 0.1，也就是 0.3。" },
          { type: "choice", level: "变式", q: "为什么计算小数加减法时，要把小数点对齐？", options: ["小数点对齐，相同数位就对齐了——相同的单位才能相加减", "小数点对齐看起来整齐好看", "数学书规定的，没有道理"], answer: 0,
            hint: "想想小螃蟹错在哪：2 角和 5 分能直接相加吗？", explain: "小数点对齐后，个位对个位、十分位对十分位……相同单位的数才能相加减。这就是对齐的道理！" },
          { type: "judge", level: "变式", q: "7.6 − 3.24 = 4.44。", answer: false,
            hint: "7.6 的百分位上没有数，补个 0：7.60 − 3.24 = ？", explain: "7.60 − 3.24 = 4.36，不是 4.44。位数不够要补 0，不能把 24 直接搬下来。" },
          { type: "fill", level: "挑战", q: "蓝蓝买橡皮用了 0.75 元，买尺子用了 1.5 元，一共用了 ＿＿ 元。", answer: "2.25",
            hint: "把 1.5 写成 1.50，再算 0.75 + 1.50", explain: "0.75 + 1.50 = 2.25 元。小数点对齐：5 分 + 0 分，7 角 + 5 角满十进一。" },
          { type: "choice", level: "挑战", q: "一支钢笔 6.4 元，蓝蓝付了 10 元，应找回多少元？", options: ["3.6 元", "4.6 元", "3.4 元", "16.4 元"], answer: 0,
            hint: "10 元可以写成 10.0 元，10.0 − 6.4 = ？", explain: "10.0 − 6.4 = 3.6 元。十分位 0 不够减 4，向个位退一当十：10 − 4 = 6，个位 9 − 6 = 3。" },
          { type: "choice", level: "温故", q: "还记得吗：整数加法 645 + 420 = ？（本课开头换成的「分」就是它！）", options: ["1065", "965", "10065", "1025"], answer: 0,
            hint: "末位对齐，从个位加起：5+0、4+2、6+4", explain: "645 + 420 = 1065。整数竖式「末位对齐」和小数「小数点对齐」，是同一个道理：相同数位对齐。" },
          { type: "fill", level: "开放", q: "写出一个比 5.5 大、比 5.6 小的小数。", answer: "5.51", check: { between: [5.5, 5.6] },
            hint: "5.5 和 5.6 之间藏着好多小数——往百分位想一想：5.51、5.52……", explain: "5.51、5.55、5.58、5.505……都在 5.5 和 5.6 之间。小数位越多，能找到的数越多，数也数不完！" }
        ]
      },
      {
        type: "review",
        question: "6.45 + 4.2 为什么是 10.65，而不是小螃蟹算的 10.47？",
        ways: [
          { name: "元角分", text: "4.2 元 = 4 元 2 角，那个「2」是 2 角，要和 6.45 里的「4」（4 角）对齐：5 分 + 0 分 = 5 分，4 角 + 2 角 = 6 角，6 元 + 4 元 = 10 元，合起来 10.65 元。" },
          { name: "补 0 竖式", text: "把 4.2 写成 4.20，小数点对齐列竖式：6.45 + 4.20 = 10.65。小螃蟹没对齐小数点，把 2 角加到 5 分上去了。" },
          { name: "分数", text: "小数是十进分数：6.45 = 645/100，4.2 = 420/100，645/100 + 420/100 = 1065/100 = 10.65。分母相同才能直接加。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么小数加减法要「小数点对齐」？（可以拿 1.5 元 + 0.75 元举例子，用元、角、分来说）"
      },
      {
        type: "beauty",
        headline: "小数：中国数学家送给世界的礼物",
        paragraphs: [
          "一千七百多年前，中国数学家刘徽在计算中遇到「除不尽的零头」，发明了用十进分数表示零头的办法——这是世界上最早的小数！",
          "靠着小数，祖冲之把圆周率算到 3.1415926 和 3.1415927 之间，这个纪录保持了近一千年。小数点对齐了，精度才能一位一位往下走。",
          "幻方里也能玩小数：每行、每列、每条对角线上的小数加起来都相等——去实验室摆一摆，感受「对齐与平衡」的魔力！"
        ],
        museum: "ppl-zu",
        lab: "magic-square"
      }
    ]
  },

  /* ================= 单元 13：观察物体（二） ================= */
  {
    id: "g4u13",
    title: "观察物体（二）",
    subtitle: "同一座城堡，三张不同的照片",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "三只小动物吵起来了",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="46" cy="40" r="20" fill="#ffd166"/>
          <path d="M0 208 Q60 198 120 208 T240 208 T400 208 V240 H0 Z" fill="#bcd8ff"/>
          <g stroke="#1c4b8f" stroke-width="2.5">
            <rect x="170" y="128" width="26" height="26" fill="#4d96ff"/>
            <rect x="170" y="158" width="26" height="26" fill="#4d96ff"/>
            <rect x="200" y="128" width="26" height="26" fill="#2f7df0"/>
            <rect x="200" y="158" width="26" height="26" fill="#2f7df0"/>
            <rect x="230" y="128" width="26" height="26" fill="#4d96ff"/>
            <rect x="230" y="158" width="26" height="26" fill="#4d96ff"/>
          </g>
          <text x="213" y="116" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">积木城堡</text>
          <rect x="20" y="60" width="104" height="88" rx="10" fill="#ffffff" stroke="#4d96ff" stroke-width="3"/>
          <text x="72" y="80" font-size="12" fill="#2f7df0" font-weight="bold" text-anchor="middle">蓝蓝：正面看</text>
          <g fill="#4d96ff" stroke="#1c4b8f" stroke-width="2">
            <rect x="30" y="92" width="26" height="18"/><rect x="58" y="92" width="26" height="18"/><rect x="86" y="92" width="26" height="18"/>
            <rect x="30" y="112" width="26" height="18"/><rect x="58" y="112" width="26" height="18"/><rect x="86" y="112" width="26" height="18"/>
          </g>
          <rect x="148" y="20" width="104" height="64" rx="10" fill="#ffffff" stroke="#ffd166" stroke-width="3"/>
          <text x="200" y="40" font-size="12" fill="#d96a00" font-weight="bold" text-anchor="middle">海鸥：上面看</text>
          <g fill="#ffd166" stroke="#d96a00" stroke-width="2">
            <rect x="158" y="50" width="26" height="18"/><rect x="186" y="50" width="26" height="18"/><rect x="214" y="50" width="26" height="18"/>
          </g>
          <rect x="276" y="60" width="104" height="88" rx="10" fill="#ffffff" stroke="#ff6b6b" stroke-width="3"/>
          <text x="328" y="80" font-size="12" fill="#ff6b6b" font-weight="bold" text-anchor="middle">螃蟹：左面看</text>
          <g fill="#ff6b6b" stroke="#b23b3b" stroke-width="2">
            <rect x="315" y="92" width="26" height="18"/><rect x="315" y="112" width="26" height="18"/>
          </g>
          <text x="200" y="226" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">同一座城堡，谁画错了？</text>
        </svg>`,
        paragraphs: [
          "蓝蓝用 6 块积木搭了一座城堡：3 根柱子排成一排，每根 2 层高。",
          "蓝蓝从正面看：「是 2 层 3 列的长方形！」小海鸥从上面看：「明明是 3 个正方形排一排！」小螃蟹从左面看：「不对，是 2 个正方形叠起来！」",
          "三个小伙伴争得吐泡泡。城堡只有一座，画出来的形状却不一样——<b>到底是谁看错了？</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "轮到你当小海鸥！想象自己飞到城堡（一排 3 根柱子、每根 2 层高）的正上方，低头往下看——你看到了什么形状？在方格纸上画出来（直尺模式已打开）。画完点「我画好了」。",
        config: { interactive: true, grid: true, straightEdge: true },
        successText: "画好了！从上面看，柱子的高矮「消失」了，只能看到 3 个正方形排成一排。带着你的画，去看看动画里另外两个方向的样子。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "蓝蓝的城堡：一排 3 根柱子，每根 2 层高，共 6 块积木。从正面看——看到 3 列、2 层，是 2 行 3 列的长方形。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "从上面看（小海鸥的视角）：高矮消失了，只看到 3 根柱子的头顶——1 行 3 列，3 个正方形。", state: { rows: 1, cols: 3, showTotal: true } },
          { caption: "从左面看（小螃蟹的视角）：3 根柱子前后重叠成一根，只看到 2 层——2 行 1 列，2 个正方形。", state: { rows: 2, cols: 1, showTotal: true } },
          { caption: "同一座城堡，三张不同的「照片」，谁也没有看错！观察的方向不同，看到的形状就可能不同。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "升级一下：前后两排、每排 3 根、都是 2 层高。从上面看是 2 行 3 列（6 个头顶），从正面看也是 2 行 3 列——有时两个方向会碰巧看到一样的形状！", state: { rows: 2, cols: 3, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「换方向看物体」写成数学的语言：",
          "观察一个立体图形，通常从三个方向看：正面、上面、左面。把每个方向看到的形状画成方格图，立体图形就被「拍」成了三张平面图。"
        ],
        formula: "同一物体，从不同方向看，形状可能不同",
        keypoints: [
          "三个方向：正面（平视）、上面（俯视）、左面（站到左边看）",
          "从上面看：只看到「占地」的形状，看不出柱子的高矮",
          "从正面、左面看：能看出层数；前后（或左右）的柱子会重叠在一起",
          "画看到的形状时，一列一列地数：每列有几层、有几列"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "一排 3 根柱子、每根 2 层高的城堡，从上面看是什么形状？", options: ["3 个正方形排成一排", "2 行 3 列共 6 个正方形", "2 个正方形叠起来"], answer: 0,
            hint: "从上面看，高矮会「消失」，只看到头顶", explain: "从上面看只能看到 3 根柱子的顶面：1 行 3 列，3 个正方形。6 个正方形是从正面看到的。" },
          { type: "choice", level: "基础", q: "这座城堡从正面看，一共能看到几个正方形？", options: ["6 个", "3 个", "2 个"], answer: 0,
            hint: "正面能看到层数和列数：3 列、每列 2 层", explain: "3 列 × 2 层 = 6 个正方形。3 个是从上面看的，2 个是从左面看的。" },
          { type: "judge", level: "变式", q: "从上面看一座积木城堡，能数出每根柱子有几层高。", answer: false,
            hint: "从上往下看，2 层的柱子和 5 层的柱子，头顶有什么不一样？", explain: "从上面只能看到柱子的头顶，高 2 层和高 5 层看起来一模一样——想知道有几层，要从正面或左面看。" },
          { type: "choice", level: "变式", q: "为什么同一座城堡，从正面、上面、左面看到的形状不一样？", options: ["观察的方向不同，看到的面、层数和重叠情况就不同", "因为积木在偷偷移动", "因为其中两只小动物看错了"], answer: 0,
            hint: "回忆三张「照片」：高矮、占地、重叠，各被哪个方向看到？", explain: "每个方向只能看到朝向自己的面：正面看到宽和高，上面看到占地，左面看到前后和高——方向不同，看到的信息就不同。" },
          { type: "choice", level: "挑战", q: "4 块积木：下面 3 块排成一排，最左边那块的上面再放 1 块。从正面看是什么形状？", options: ["下面 3 个、左上角 1 个，像一把小椅子", "4 个正方形排成一排", "2 行 2 列的「田」字形"], answer: 0,
            hint: "一列一列看：左边那列有 2 层，另外两列各 1 层", explain: "从正面看：左列 2 个正方形，中列、右列各 1 个——下面 3 个、左上角多 1 个，像小椅子。" },
          { type: "choice", level: "温故", q: "还记得吗：二年级观察物体（一）——同一只玩偶，从正面看和从背后看，照片一样吗？", options: ["不一样，看的方向不同，样子就不同", "完全一样", "颜色一样，所以照片也一样"], answer: 0,
            hint: "正面能看到脸，背后只能看到后脑勺", explain: "方向不同，看到的面就不同——这正是二年级学过的本领，今天只是把它用到积木组合上！" },
          { type: "build", level: "开放", q: "找一个牙膏盒（长方体），先从上面看一眼，再把看到的形状画在方格纸上。画完点「我画好了」。",
            widget: "sketchpad", config: { interactive: true, grid: true, straightEdge: true },
            reference: "牙膏盒从上面看是一个长方形；从正面看也是一个长方形，但大小、方向可能不同。画完可以再从正面、左面各看一眼，把三张「照片」都画下来比一比。" }
        ]
      },
      {
        type: "review",
        question: "怎么画出一个积木组合「从上面看」的形状？",
        ways: [
          { name: "拍照想象法", text: "想象自己是一架小无人机，升到城堡正上方拍一张照片：高矮全部消失，照片里只有占地的那几个正方形。" },
          { name: "数头顶法", text: "一根柱子不管多高，从上面看只贡献 1 个正方形。数有几根柱子、它们怎么排队，就画几个正方形、怎么排。" },
          { name: "对比法", text: "正面看「宽 × 高」，上面看「占地」，左面看「前后 × 高」。三张图合在一起，才能把立体图形看清楚。" }
        ],
        ask: "给爸爸妈妈讲讲：为什么从上面看不出柱子的高矮？可以拿三块橡皮叠一叠，让他们从正上方看一眼。"
      },
      {
        type: "beauty",
        headline: "三张平面图，盖起摩天大楼",
        paragraphs: [
          "你今天画的「正面、上面、左面」，在工程师手里有个威风的名字：三视图。盖大楼、造轮船、设计潜水艇，都要先画三视图。",
          "四千多年前，古埃及人建金字塔时，就懂得从上面画方形的地基、从正面画三角形的轮廓——不同方向藏着不同的秘密。",
          "平面的瓷砖铺法也讲究「换个角度看」：同一批正方形砖，能铺出千变万化的图案。去实验室玩一玩密铺吧！"
        ],
        museum: "his-egypt",
        lab: "tessellation"
      }
    ]
  },

  /* ================= 单元 14：图形的运动（二）轴对称与平移（探究课） ================= */
  {
    id: "g4u14",
    title: "图形的运动（二）",
    subtitle: "对折的魔法与滑行的图形",
    tag: "空间",
    minutes: 20,
    inquiry: true,
    scenes: [
      {
        type: "story",
        title: "剪纸大赛的秘密武器",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="348" cy="38" r="22" fill="#ffd166"/>
          <path d="M0 210 Q60 200 120 210 T240 210 T400 210 V240 H0 Z" fill="#bcd8ff"/>
          <line x1="200" y1="46" x2="200" y2="196" stroke="#ff6b6b" stroke-width="3" stroke-dasharray="8 6"/>
          <text x="200" y="38" font-size="12" fill="#ff6b6b" font-weight="bold" text-anchor="middle">对称轴</text>
          <g stroke="#1c4b8f" stroke-width="2.5">
            <path d="M200 84 C168 52 118 62 118 96 C118 124 158 132 200 158 Z" fill="#4d96ff"/>
            <path d="M200 84 C232 52 282 62 282 96 C282 124 242 132 200 158 Z" fill="#2f7df0"/>
            <path d="M200 158 C188 178 176 186 164 190 C178 192 192 186 200 172 Z" fill="#4d96ff"/>
            <path d="M200 158 C212 178 224 186 236 190 C222 192 208 186 200 172 Z" fill="#2f7df0"/>
          </g>
          <circle cx="152" cy="98" r="7" fill="#ffd166"/>
          <circle cx="248" cy="98" r="7" fill="#ffd166"/>
          <rect x="24" y="120" width="92" height="66" rx="10" fill="#ffffff" stroke="#2f7df0" stroke-width="3"/>
          <path d="M44 148 l10 -14 10 14 M74 148 l10 -14 10 14" stroke="#2f7df0" stroke-width="3" fill="none" stroke-linecap="round"/>
          <text x="70" y="176" font-size="12" fill="#1c4b8f" font-weight="bold" text-anchor="middle">小章鱼剪的</text>
          <rect x="284" y="120" width="92" height="66" rx="10" fill="#ffffff" stroke="#ff6b6b" stroke-width="3"/>
          <path d="M300 150 l12 -18 12 18 M332 150 l8 -12 8 12" stroke="#ff6b6b" stroke-width="3" fill="none" stroke-linecap="round"/>
          <text x="330" y="176" font-size="12" fill="#b23b3b" font-weight="bold" text-anchor="middle">蓝蓝剪的</text>
          <text x="200" y="228" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">对折一剪，为什么两边一模一样？</text>
        </svg>`,
        paragraphs: [
          "海洋剪纸大赛开始了！小章鱼手快，「咔嚓咔嚓」直接剪出一只蝴蝶——哎呀，一边翅膀大，一边翅膀小。",
          "蓝蓝不慌不忙：把纸对折，只剪半边，再轻轻一打开——哇，两边的翅膀一模一样，像照了镜子！",
          "为什么对折剪一刀，两边就完全相同？先别急着听答案——<b>拿起画笔，亲手找出这个秘密！</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "先不追求标准画法！在方格纸中间画一条竖直的线当「折痕」，左边画半条小鱼（鱼头挨着线），再补出右半边——想办法让纸对折后两边能重合。画完点「我画好了」。",
        config: { interactive: true, grid: true, straightEdge: true },
        successText: "画好了！你是怎么让两边一样的？数一数：左边鱼鳍离线几格，右边鱼鳍离线几格？带着你的发现，去看动画里的方块蝴蝶。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "把剪纸换成方块来看：折痕（对称轴）左边，是 2 行 2 列的「半只蝴蝶」。", state: { rows: 2, cols: 2, showTotal: true } },
          { caption: "沿对称轴轻轻一「翻」，右边长出同样的 2×2：合成 2 行 4 列。沿正中间对折，左右两边完全重合——这就是轴对称！", state: { rows: 2, cols: 4, showTotal: true } },
          { caption: "轴对称的秘密：左边第 1 列离轴 1 格，右边第 1 列也离轴 1 格。对应点到对称轴的距离相等——画另一半全靠它！", state: { rows: 2, cols: 4, showTotal: true } },
          { caption: "现在让这只蝴蝶整体向右「滑」3 格：形状没变、大小没变、方向没变，只是位置变了——这样的运动叫平移。", state: { rows: 2, cols: 4, showTotal: true } },
          { caption: "平移了几格？盯住蝴蝶左上角那一个角：它向右走了 3 格，整只蝴蝶就平移了 3 格。数「点走的格数」，别数「中间空的格数」！", state: { rows: 2, cols: 4, showTotal: true } }
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "动手验证平移！在方格纸左边画一面小旗子（比如 2 格宽、2 格高的三角旗），再把它「向右平移 5 格」画出来：先盯住旗尖，向右数 5 格点上点，再把整面旗子照样搬过去。两面旗子要一模一样、方向相同！",
        config: { interactive: true, grid: true, straightEdge: true },
        successText: "画好了！两面旗子形状、大小、方向完全相同，只是位置变了。再数一遍：旗尖走了 5 格，旗杆底端也走了 5 格——每个点走的格数都一样！"
      },
      {
        type: "symbol",
        paragraphs: [
          "观察、猜想、验证都完成了——现在把发现写成数学的语言：",
          "对折后两边能完全重合的图形，叫轴对称图形，那条折痕叫对称轴。图形沿直线移动、只换位置的运动，叫平移。"
        ],
        formula: "轴对称：对折后完全重合；平移：只变位置，不变形状",
        keypoints: [
          "轴对称图形沿对称轴对折，两边完全重合；对应点到对称轴的距离相等",
          "画另一半：找关键点 → 数它到对称轴几格 → 在另一边同距离描出对应点 → 连线",
          "平移前后：形状、大小、方向都不变，只有位置改变",
          "数平移了几格：盯住同一个点数它走了几格；数两个图形之间的空格会少数！"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "下面哪个是轴对称图形？", options: ["沿中线对折能完全重合的蝴蝶图案", "随手撕下来的一张纸片", "被风吹歪的涂鸦"], answer: 0,
            hint: "判断标准只有一个：对折后两边能不能完全重合", explain: "蝴蝶图案沿中线对折，两边完全重合，是轴对称图形；撕下的纸片和歪涂鸦对折后合不上。" },
          { type: "fill", level: "基础", q: "小旗子向右平移了 6 格，旗尖那个点向右走了 ＿＿ 格。", answer: "6",
            hint: "平移时，图形上每个点走的格数都一样", explain: "整个图形平移 6 格，旗尖、旗杆……每个点都向右走了 6 格。" },
          { type: "multi", level: "变式", q: "图形平移之后，哪些没有改变？（多选，全选对才算对）", options: ["形状", "大小", "方向", "位置"], answer: [0, 1, 2],
            hint: "平移只是「换了个地方」——想想什么东西跟着地方一起变了", explain: "平移只改变位置；形状、大小、方向都不变。所以平移前后的图形能完全重合。" },
          { type: "choice", level: "变式", q: "为什么数「平移了几格」要盯住同一个点，而不是数两个图形中间的空格？", options: ["图形上每个点走的格数都一样，盯住一个点才数得准；中间的空格没算上图形的宽度，会少数", "这样数起来比较快", "两种数法的结果其实一样"], answer: 0,
            hint: "小旗子宽 2 格、向右平移 5 格——两面旗子之间只空 3 格", explain: "平移的距离是「点走的格数」。两面旗子中间的空格 = 平移格数 − 旗子宽度，数空格会少数！所以盯住同一个点最靠谱。" },
          { type: "choice", level: "变式", q: "把半只蝴蝶补成完整的轴对称图形，关键是什么？", options: ["让对应点到对称轴的距离相等", "让两边的颜色涂得一样", "左右两边要画得一样快"], answer: 0,
            hint: "回忆方块蝴蝶：左边第 1 列离轴 1 格，右边呢？", explain: "对应点到对称轴的距离相等，对折后两边才能重合。颜色、速度都和「能不能重合」无关。" },
          { type: "choice", level: "挑战", q: "一棵小树图案先向右平移 4 格，再向上平移 2 格。这棵小树会怎样？", options: ["形状、方向不变，只是换了位置", "变得更高了", "转向别的方向了"], answer: 0,
            hint: "平移再平移，还是平移", explain: "连续平移两次，仍然是平移：形状、大小、方向都不变，只是位置变了。" },
          { type: "choice", level: "温故", q: "还记得吗：把一张长方形纸对折、再对折，展开后分成的 4 份怎样？（三年级·分数的初步认识）", options: ["每份都一样大，各是整张纸的四分之一", "每份都不一样大", "两份大、两份小"], answer: 0,
            hint: "对折就是平均分成 2 份，再对折就是平均分成 4 份", explain: "对折两次把纸平均分成 4 份，每份是四分之一。「对折能重合」正是今天轴对称的老朋友！" },
          { type: "build", level: "开放", q: "设计一个你自己的轴对称图案：先画一条对称轴，在左边画出半个图案，再用「对应点到轴距离相等」补出右半边。画完点「我画好了」。",
            widget: "sketchpad", config: { interactive: true, grid: true, straightEdge: true },
            reference: "一种做法：先画竖直对称轴；左边画半个爱心或半片树叶；数每个关键点到轴有几格，在右边同样距离描点；最后连线。对折（想象）检查一下：两边能重合就成功了！" }
        ]
      },
      {
        type: "review",
        question: "怎样又快又准地画出轴对称图形的另一半？平移 6 格又该怎么数？",
        ways: [
          { name: "对折想象法", text: "想象把纸沿对称轴折过去：左边每一点落到哪里，就在哪里描点——落点离轴的距离和原来一样。" },
          { name: "数格描点法", text: "找关键点（尖角、拐弯处）：数它到对称轴几格，在另一边同样格数描出对应点，再把点连起来。" },
          { name: "盯点数格法", text: "数平移：盯住图形上一个点（比如左上角），数它向右走了 6 格，整个图形就平移了 6 格——不数两图之间的空格。" }
        ],
        ask: "给爸爸妈妈讲讲：为什么数「平移了几格」要盯住同一个点？在方格纸上画一面小旗子平移 5 格，让他们数数两种数法差多少。"
      },
      {
        type: "beauty",
        headline: "万花筒：三面镜子里的对称魔法",
        paragraphs: [
          "你小时候玩过万花筒吗？三面镜子围成三角形，几粒彩色小纸片掉进去——「嗡」的一下，变出几十个一模一样、围成一圈的图案！",
          "这正是对称的魔法：每面镜子都是一条对称轴，图案被一次一次「对折复制」。雪花六瓣、蝴蝶双翼、宫殿的中轴线，全是它的杰作。",
          "去实验室转动万花筒，数一数：一粒小纸片，被镜子复制出了多少个对称的自己？"
        ],
        lab: "kaleidoscope"
      }
    ]
  },

  /* ================= 单元 15：平均数与条形统计图 ================= */
  {
    id: "g4u15",
    title: "平均数与条形统计图",
    subtitle: "移多补少，一眼看懂数据",
    tag: "数据",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "投篮比赛的争吵",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="50" cy="38" r="20" fill="#ffd166"/>
          <rect x="150" y="30" width="100" height="12" rx="6" fill="#1c4b8f"/>
          <rect x="244" y="30" width="10" height="70" fill="#1c4b8f"/>
          <circle cx="238" cy="112" r="16" fill="#ff8a3d" stroke="#b25e14" stroke-width="3"/>
          <path d="M224 106 q14 8 28 0 M224 118 q14 -8 28 0" stroke="#b25e14" stroke-width="2" fill="none"/>
          <g stroke="#1c4b8f" stroke-width="2.5">
            <rect x="40" y="110" width="34" height="90" fill="#4d96ff"/>
            <rect x="84" y="136" width="34" height="64" fill="#4d96ff"/>
            <rect x="128" y="123" width="34" height="77" fill="#4d96ff"/>
          </g>
          <text x="57" y="104" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">7</text>
          <text x="101" y="130" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">5</text>
          <text x="145" y="117" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">6</text>
          <line x1="34" y1="129.5" x2="168" y2="129.5" stroke="#ff6b6b" stroke-width="3" stroke-dasharray="8 6"/>
          <text x="232" y="160" font-size="13" fill="#ff6b6b" font-weight="bold" text-anchor="middle">平均数 6</text>
          <rect x="210" y="176" width="170" height="46" rx="12" fill="#ffffff" stroke="#4d96ff" stroke-width="3"/>
          <text x="295" y="196" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">蓝队 3 人共 15 个</text>
          <text x="295" y="214" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">红队 4 人共 16 个</text>
          <text x="80" y="232" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">总数多的队一定赢吗？</text>
        </svg>`,
        paragraphs: [
          "海洋运动会投篮比赛：蓝队 3 名队员一共投中 15 个，红队 4 名队员一共投中 16 个。裁判大声宣布：「红队总数多，红队赢！」",
          "蓝队队员不服气地跳起来：「他们比我们多一个人！比总数不公平！」",
          "人数不一样，到底怎么比才公平？<b>如果每支队伍只许报一个数，报哪个数才代表全队的水平？</b>"
        ]
      },
      {
        type: "play",
        widget: "chart",
        prompt: "先把成绩单画成条形统计图！对照数据表，用 ＋ / − 把每根直条调到正确的数量。调好后看看：谁的直条最高？谁的最矮？",
        config: { interactive: true, mode: "bar", data: [{ label: "小海", value: 0 }, { label: "小蓝", value: 0 }, { label: "小星", value: 0 }, { label: "小贝", value: 0 }], targets: [7, 5, 6, 6], targetsText: "小海 7 个、小蓝 5 个、小星 6 个、小贝 6 个" },
        successText: "画好了！直条越高，投中越多——一眼就看出小海最多、小蓝最少。条形统计图的本事，就是把数字变成「高矮」。"
      },
      {
        type: "anim",
        widget: "chart",
        steps: [
          { caption: "四位队员的成绩画成条形图：7、5、6、6，高高低低不一样。", state: { mode: "bar", data: [{ label: "小海", value: 7 }, { label: "小蓝", value: 5 }, { label: "小星", value: 6 }, { label: "小贝", value: 6 }], title: "投篮成绩（个）", highlight: -1, showValues: true } },
          { caption: "小海最高（7 个），小蓝最矮（5 个）。让高的「分一点」给矮的，会发生什么？", state: { mode: "bar", data: [{ label: "小海", value: 7 }, { label: "小蓝", value: 5 }, { label: "小星", value: 6 }, { label: "小贝", value: 6 }], title: "投篮成绩（个）", highlight: 0, showValues: true } },
          { caption: "移多补少：小海分 1 个给小蓝——7 − 1 = 6，5 + 1 = 6。四根直条一样高了，都是 6！", state: { mode: "bar", data: [{ label: "小海", value: 6 }, { label: "小蓝", value: 6 }, { label: "小星", value: 6 }, { label: "小贝", value: 6 }], title: "投篮成绩（个）", highlight: 1, showValues: true } },
          { caption: "这个一样高的 6，就是平均数。用算式算：先合起来 7+5+6+6 = 24，再平分 24÷4 = 6。先合后分！", state: { mode: "bar", data: [{ label: "小海", value: 6 }, { label: "小蓝", value: 6 }, { label: "小星", value: 6 }, { label: "小贝", value: 6 }], title: "投篮成绩（个）", highlight: -1, showValues: true } },
          { caption: "注意：平均数 6 是「匀出来」的水平，它代表整支队伍，不一定等于某一个人的真实成绩。现在再比蓝队和红队：15÷3 = 5，16÷4 = 4——蓝队平均每人 5 个，赢得公平！", state: { mode: "bar", data: [{ label: "蓝队平均", value: 5 }, { label: "红队平均", value: 4 }], title: "两队平均成绩（个）", highlight: 0, showValues: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「移多补少」写成数学的语言：",
          "一组数据的总和，平均分给每一份，得到的数叫平均数。它能代表这组数据的整体水平。条形统计图用直条的高矮表示数量，一眼就能比出多少。"
        ],
        formula: "平均数 = 总数量 ÷ 总份数",
        keypoints: [
          "求平均数两条路：移多补少（图上匀一匀）、先合后分（总和 ÷ 份数）",
          "平均数一定在最大数和最小数之间——比最大的小，比最小的大",
          "平均数代表整体水平，不一定是某个人的真实成绩",
          "条形统计图：直条越高数量越多；每格代表的数量要统一，才能公平比较"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "3、5、7 这三个数的平均数是 ＿＿。", answer: "5",
            hint: "先合后分：3 + 5 + 7 = 15，再 ÷ 3", explain: "(3 + 5 + 7) ÷ 3 = 15 ÷ 3 = 5。也可以移多补少：7 分 2 给 3，三个数都变成 5。" },
          { type: "choice", level: "基础", q: "条形统计图里，直条越高表示什么？", options: ["数量越多", "数量越少", "和数量没有关系"], answer: 0,
            hint: "回忆投篮成绩图：小海 7 个，直条最高", explain: "直条越高，表示数量越多——这正是条形统计图「一眼比多少」的本事。" },
          { type: "choice", level: "变式", q: "为什么人数不同的两支队伍，比平均数比比总数公平？", options: ["平均数把总数平摊到每个人，人数不同也能比「每个人的水平」", "平均数听起来更高级", "总数总是会算错"], answer: 0,
            hint: "蓝队 3 人 15 个、红队 4 人 16 个：比总数时红队多占了一个人", explain: "总数会被人数影响：人多的队占便宜。平均数把总数平摊到每人，比的是「人均水平」，人数不同也公平。" },
          { type: "judge", level: "变式", q: "一条小河平均水深 1.2 米，小明身高 1.4 米，所以他在河里任何地方都安全。", answer: false,
            hint: "平均水深 1.2 米，是不是每个地方都正好 1.2 米？", explain: "平均数是「匀出来」的：浅的地方可能只有 0.5 米，深的地方可能有 2 米！平均数不代表每个地方的真实深度，千万不能下水冒险。" },
          { type: "fill", level: "挑战", q: "蓝蓝四天分别读了 6、8、7、7 页课外书，平均每天读 ＿＿ 页。", answer: "7",
            hint: "先合后分：6 + 8 + 7 + 7 = 28，再 ÷ 4", explain: "28 ÷ 4 = 7 页。验算：平均数 7 在最大 8 和最小 6 之间，合理！" },
          { type: "choice", level: "挑战", q: "小队 5 人的平均身高是 130 厘米，新转来一位 148 厘米的同学，全队的平均身高会怎样？", options: ["变高", "变矮", "不变"], answer: 0,
            hint: "新同学比原来的平均数高，他要把多出来的「分」给大家", explain: "148 比 130 高 18 厘米，多出的部分平摊给 6 个人，每人「涨」3 厘米，平均数变成 133 厘米——比平均数高的新数据会把平均数拉高。" },
          { type: "choice", level: "温故", q: "还记得吗：把 24 平均分成 4 份，每份是多少？（二三年级·除法的意义）", options: ["6", "8", "7", "4"], answer: 0,
            hint: "24 ÷ 4 = ？想乘法口诀：四六二十四", explain: "24 ÷ 4 = 6。平均数的「先合后分」，用的正是除法「平均分」的老本领！" },
          { type: "open", level: "开放", q: "记录你家一周 7 天跳绳（或看课外书、倒垃圾）的次数，算出平均数，再画成条形统计图。说说：哪几天高于平均数？",
            placeholder: "我记录的是……7 天分别是……平均数是……高于平均数的是……",
            reference: "比如 7 天跳绳：80、90、100、90、110、100、100 个，总和 670，平均数 = 670 ÷ 7 ≈ 96 个。画 7 根直条，高于 96 的是第 3、5、6、7 天。平均数大约站在所有直条的「半山腰」。" }
        ]
      },
      {
        type: "review",
        question: "7、5、6、6 的平均数为什么是 6？",
        ways: [
          { name: "移多补少", text: "最多的 7 分 1 个给最少的 5：7 − 1 = 6，5 + 1 = 6。四根直条一样高，平均数就是 6。" },
          { name: "先合后分", text: "先合起来：7 + 5 + 6 + 6 = 24；再平均分：24 ÷ 4 = 6。总数量 ÷ 总份数 = 平均数。" },
          { name: "范围检查", text: "平均数一定在最大数（7）和最小数（5）之间。算出的 6 正好在中间——如果算出 8 或 4，肯定是算错了！" }
        ],
        ask: "给爸爸妈妈讲讲：为什么平均数一定在最大数和最小数之间？（提示：一堆数「匀」完之后，能匀得比最大的还大吗？）"
      },
      {
        type: "beauty",
        headline: "平均：让嘈杂的数据安静下来",
        paragraphs: [
          "抛 10 次硬币，可能 7 次正面；抛 1000 次，正面就接近一半。次数越多，频率越「稳」——平均有一种让混乱变安静的魔力。",
          "两百多年前，高斯测量土地时发现：每次测量都有误差，但多测几次取平均，就离真相越来越近。今天的天文、医学、体育成绩，全靠这个智慧。",
          "去博物馆认识一下这位「数学王子」高斯吧——他小时候秒算 1 加到 100 的故事，也藏着「先合后分」的影子！"
        ],
        museum: "ppl-gauss"
      }
    ]
  }
);
