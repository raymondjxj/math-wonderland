window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[5] = MW.content[5] || { grade: 5, name: "五年级 · 紫晶星球", units: [] };
G.units.push(

  /* ================= 单元 9：位置（用数对确定位置） ================= */
  {
    id: "g5u9",
    title: "位置",
    subtitle: "数对：两个数的定位魔法",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "紫晶电影院的找座难题",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <rect x="60" y="22" width="280" height="34" rx="10" fill="#5b2a9d"/>
          <text x="200" y="45" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">大 银 幕</text>
          <g fill="#c8b6ff">
            <circle cx="92" cy="88" r="11"/><circle cx="132" cy="88" r="11"/><circle cx="172" cy="88" r="11"/><circle cx="212" cy="88" r="11"/><circle cx="252" cy="88" r="11"/>
            <circle cx="92" cy="124" r="11"/><circle cx="132" cy="124" r="11"/><circle cx="212" cy="124" r="11"/><circle cx="252" cy="124" r="11"/>
            <circle cx="92" cy="160" r="11"/><circle cx="132" cy="160" r="11"/><circle cx="172" cy="160" r="11"/><circle cx="212" cy="160" r="11"/><circle cx="252" cy="160" r="11"/>
          </g>
          <circle cx="172" cy="124" r="13" fill="#ffc233" stroke="#b25e14" stroke-width="3"/>
          <text x="300" y="128" font-size="14" fill="#5b2a9d" font-weight="bold">← 我的座位！</text>
          <rect x="268" y="176" width="104" height="40" rx="10" fill="#9b5de5"/>
          <text x="320" y="194" font-size="12" fill="#ffffff" font-weight="bold" text-anchor="middle">电影票</text>
          <text x="320" y="210" font-size="13" fill="#ffc233" font-weight="bold" text-anchor="middle">3 列 2 行</text>
          <text x="200" y="230" font-size="13" fill="#5b2a9d" font-weight="bold" text-anchor="middle">紫晶电影院 · 从左往右数列，从前往后数行</text>
        </svg>`,
        paragraphs: [
          "紫晶星球的电影院开张啦！第一场放《星星漂流记》，小狐狸拿着票冲进放映厅，票上写着：<b>第 3 列第 2 行</b>。",
          "可小狐狸只看了「第 3」两个字，一屁股坐下——啪！灯亮了，他坐在第 3 行第 5 列，是别人的位子，真不好意思！",
          "只说「第 3 个」会坐错，为什么呢？原来找一个座位，<b>一个数不够，要两个数才行</b>。今天，我们就来学一种用两个数准确说出位置的魔法——数对。"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "把这张方格纸想成电影院的座位表：从左往右数是列，从上往下数是行。找到「第 3 列第 2 行」的座位，点它一下！看看要铺过多少个格子才能铺到它；接着往下点，把全场铺满。",
        config: { interactive: true, rows: 4, cols: 5 },
        successText: "找到了！先数列、再数行，交叉的那一格就是座位。数学家把这个位置写成数对 (3, 2)——待会儿你就知道这个写法的厉害啦。"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "这是一张座位表：横排叫「行」，竖排叫「列」。这张表有 5 列 4 行。", state: { rows: 4, cols: 5, filled: 0, showCount: true } },
          { caption: "找座位第一步：先数列。从左往右数——1、2、3，第 3 列！", state: { rows: 4, cols: 5, filled: 3, showCount: true } },
          { caption: "第二步：再数行。从上往下数到第 2 行，列和行交叉的那一格，就是它！", state: { rows: 4, cols: 5, filled: 8, showCount: true } },
          { caption: "这个位置写成数对 (3, 2)：前一个数是列，后一个数是行，中间用逗号隔开。", state: { rows: 4, cols: 5, filled: 8, showCount: true } },
          { caption: "那 (4, 3) 在哪儿？第 4 列第 3 行——铺到这里才能到。顺序一换，位置全变！", state: { rows: 4, cols: 5, filled: 14, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把刚才找座位的过程，写成数学的语言：",
          "用有顺序的两个数表示一个确定的位置，这样的两个数叫「数对」。"
        ],
        formula: "第 3 列第 2 行 → 数对 (3, 2)",
        keypoints: [
          "数对先写列、后写行：(列, 行)，顺序有约定，不能随手换",
          "(3, 2) 和 (2, 3) 是两个不同的位置：一个在第 3 列第 2 行，一个在第 2 列第 3 行",
          "一个数对只对应一个位置，一个位置也只对应一个数对——一一对应"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "数对 (2, 3) 表示的位置是？", options: ["第 2 列第 3 行", "第 3 列第 2 行", "第 2 列第 2 行", "第 3 列第 3 行"], answer: 0,
            hint: "数对里前一个数是列，后一个数是行", explain: "(2, 3)：第 2 列、第 3 行。先列后行，别记反啦。" },
          { type: "choice", level: "基础", q: "「第 5 列第 1 行」写成数对是？", options: ["(1, 5)", "(5, 1)", "(5, 5)", "(1, 1)"], answer: 1,
            hint: "列写在前，行写在后", explain: "第 5 列第 1 行 → (5, 1)。(1, 5) 是第 1 列第 5 行，不是同一个位置。" },
          { type: "judge", level: "变式", q: "(3, 2) 和 (2, 3) 是同一个位置，只是写法不一样。", answer: false,
            hint: "动手在方格纸上点一点这两个位置", explain: "(3, 2) 是第 3 列第 2 行，(2, 3) 是第 2 列第 3 行——顺序一换，位置完全不同。" },
          { type: "choice", level: "变式", q: "为什么数对里两个数的顺序不能随便交换？", options: ["因为数对约定了「先列后行」，交换后指向的是另一个位置", "因为交换后数字看起来不漂亮", "随便换没关系，位置都一样"], answer: 0,
            hint: "想想 (3, 2) 和 (2, 3) 在座位表上是不是同一格", explain: "数对是有顺序的：列和行交换后指向别的格子，所以顺序是定位的关键，绝不能乱换。" },
          { type: "choice", level: "挑战", q: "小明的电影票只剩半个数对：(4, △)。只知道他坐在第 4 列，能找到他的座位吗？", options: ["能，第 4 列随便坐", "不能，还必须知道第几行", "能，他就是 (4, 0)"], answer: 1,
            hint: "第 4 列上有很多个座位……", explain: "第 4 列有好多行呢！确定一个位置必须两个数齐全：列和行，缺一不可。" },
          { type: "fill", level: "挑战", q: "小兔坐在 (6, 2)。它右边紧挨着的座位列数多 1、行数不变，用数对表示是（ ）。", answer: ["(7,2)", "7,2", "(7, 2)", "7, 2", "(7，2)", "7，2"],
            hint: "列数 6 加 1 是几？行数不变哦", explain: "右边相邻：列 6 + 1 = 7，行还是 2，所以是 (7, 2)。" },
          { type: "choice", level: "温故", q: "还记得吗：三年级学的方向——面向北方站好，你的右手边是哪个方向？", options: ["东", "南", "西", "北"], answer: 0,
            hint: "伸出手比划一下：面北而立，右手朝哪儿？", explain: "面北时右手边是东。方向是「一个参照」就能说的，而数对要用两个数——这就是今天的进步！" },
          { type: "open", level: "开放", q: "除了电影院，生活中还有哪些地方用「两个数定位」？找一个例子写下来，并说说那两个数分别表示什么。",
            placeholder: "比如：我知道……",
            reference: "参考想法：国际象棋棋盘上「e4」表示第 e 列第 4 行的格子；地球仪上用「东经 116°、北纬 40°」两个数找到北京；教室座位表上「第 2 组第 3 个」也是数对的想法。" }
        ]
      },
      {
        type: "review",
        question: "数对 (3, 2) 为什么能准确找到一个座位？",
        ways: [
          { name: "画格子", text: "在 5 列 4 行的方格纸上先数到第 3 列，再数到第 2 行，列与行交叉的那一格就是它——独一无二。" },
          { name: "两条线相交", text: "第 3 列是一条竖线，第 2 行是一条横线，一竖一横只有一个交点，所以位置只有一个。" },
          { name: "对比", text: "(3, 2) 和 (2, 3) 一对比就明白：顺序换了格子也换了，正因为顺序固定，数对才不会指错。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 (3, 2) 和 (2, 3) 不是同一个座位？可以在方格纸上点给他们看。"
      },
      {
        type: "beauty",
        headline: "一只苍蝇「爬」出来的坐标系",
        paragraphs: [
          "传说三百多年前，数学家笛卡尔生病躺在床上，看见一只苍蝇在天花板上爬。他想：要说出苍蝇在哪儿，只要看它离两边墙各有多远——两个数就够了！坐标系就这样诞生了。",
          "有了坐标，地图有了经纬度，飞船能找到星星，手机导航能找到冰淇淋店。两个小小的数，定位了整个世界。",
          "方格子里还藏着更多秘密：古老的幻方让每行每列每条对角线的和都相等——去实验室试试，给每个数字找到它的「座位」吧！"
        ],
        lab: "magic-square"
      }
    ]
  },

  /* ================= 单元 10：可能性 ================= */
  {
    id: "g5u10",
    title: "可能性",
    subtitle: "一定、可能与不可能",
    tag: "数据",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "星光抽奖箱",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <rect x="110" y="96" width="180" height="112" rx="14" fill="#9b5de5"/>
          <rect x="130" y="76" width="140" height="28" rx="10" fill="#5b2a9d"/>
          <ellipse cx="200" cy="90" rx="46" ry="9" fill="#2d1450"/>
          <g stroke="#ffffff" stroke-width="2">
            <circle cx="152" cy="150" r="16" fill="#c8b6ff"/>
            <circle cx="200" cy="168" r="16" fill="#c8b6ff"/>
            <circle cx="248" cy="150" r="16" fill="#c8b6ff"/>
          </g>
          <circle cx="200" cy="126" r="16" fill="#ffc233" stroke="#b25e14" stroke-width="2"/>
          <text x="200" y="131" font-size="15" fill="#7a4d00" font-weight="bold" text-anchor="middle">?</text>
          <rect x="24" y="30" width="150" height="44" rx="16" fill="#ffffff" stroke="#9b5de5" stroke-width="3"/>
          <text x="99" y="49" font-size="13" fill="#5b2a9d" font-weight="bold" text-anchor="middle">摸到金球</text>
          <text x="99" y="66" font-size="13" fill="#5b2a9d" font-weight="bold" text-anchor="middle">就中大奖！</text>
          <text x="330" y="120" font-size="26" fill="#9b5de5" font-weight="bold" text-anchor="middle">?</text>
          <text x="200" y="230" font-size="14" fill="#5b2a9d" font-weight="bold" text-anchor="middle">3 个紫球 + 1 个金球，闭上眼睛摸一个</text>
        </svg>`,
        paragraphs: [
          "紫晶星球的丰收节上，有一个星光抽奖箱：里面装着 <b>3 个紫球和 1 个金球</b>，摸到金球就能中大奖！",
          "小猴子闭上眼睛摸了一个——紫球。小松鼠摸了一个——还是紫球。轮到你了：这一次<b>一定</b>摸到金球吗？<b>可能</b>摸到金球吗？",
          "如果有人喊「我摸到了红球」，你信吗？箱子里根本没有红球呀！一定、可能、不可能——今天我们来把这三个词用得又准又稳。"
        ]
      },
      {
        type: "play",
        widget: "coins",
        prompt: "抛一枚硬币，落地之前，你能确定它正面朝上吗？——不能，它只是「可能」正面朝上。点按钮亲手抛一抛：先 1 次 1 次地抛，再 10 次连抛，一直抛满 50 次，盯着那条蓝色曲线看！",
        config: { interactive: true, goal: 50 },
        successText: "看到没？抛的次数越多，正面出现的比例越靠近 50% 这条虚线——「可能」的背后，藏着稳稳的规律！"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "箱子里有 4 个球。闭上眼睛摸，每个球被摸到的机会都一样多。", state: { shape: "bar", parts: 4, shaded: 0, showLabel: true } },
          { caption: "3 个是紫球：4 份里占了 3 份——摸到紫球的可能性大。", state: { shape: "bar", parts: 4, shaded: 3, showLabel: true } },
          { caption: "金球只占 1 份：摸到它的可能性小——但小不等于不可能！", state: { shape: "bar", parts: 4, shaded: 1, showLabel: true } },
          { caption: "红球呢？一份都不占——没有红球，就不可能摸到红球。", state: { shape: "bar", parts: 4, shaded: 0, showLabel: true } },
          { caption: "如果 4 个球全是紫球呢？随便摸，一定摸到紫球！", state: { shape: "bar", parts: 4, shaded: 4, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把抽奖箱里的发现，写成数学的语言：",
          "有些事情确定会发生，叫「一定」；确定不会发生，叫「不可能」；也许发生、也许不发生，叫「可能」。"
        ],
        formula: "数量多 → 可能性大　·　数量为 0 → 不可能　·　全是它 → 一定",
        keypoints: [
          "「一定」：不管摸多少次，结果都确定（箱子里全是紫球）",
          "「不可能」：结果绝不会发生（箱子里没有红球）",
          "「可能」：结果事先不能确定；数量越多，可能性越大，但可能性大也不等于一定"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "箱子里装着 5 个红球，别的什么也没有。闭上眼睛摸一个，结果怎样？", options: ["一定摸到红球", "可能摸到蓝球", "不可能摸到红球"], answer: 0,
            hint: "箱子里只有红球……", explain: "全是红球，摸谁都一样——一定摸到红球。" },
          { type: "choice", level: "基础", q: "箱子里有 3 个红球和 2 个蓝球，摸一个，下面哪句话对？", options: ["一定摸到红球", "可能摸到红球，也可能摸到蓝球", "一定摸到蓝球"], answer: 1,
            hint: "两种球都在箱子里", explain: "两种球都有可能被摸到，事先说不准是哪一种——这就是「可能」。" },
          { type: "judge", level: "变式", q: "抛硬币抛出了正面朝上，那么下一次就一定反面朝上。", answer: false,
            hint: "硬币记得上一次的结果吗？", explain: "硬币没有记性！每一次抛，正面、反面都可能朝上，谁也不欠谁。" },
          { type: "choice", level: "变式", q: "箱子里有 3 个紫球和 1 个金球，为什么摸到紫球的可能性比金球大？", options: ["紫球数量多，被摸到的机会更大", "紫球比较重，容易滚到手上", "纯属运气，说不出道理"], answer: 0,
            hint: "回忆动画里那条分成 4 份的长条", explain: "4 个球机会一样多，紫球占了 3 份、金球只占 1 份——数量多的球，被摸到的机会自然大。" },
          { type: "choice", level: "变式", q: "幸运转盘平均分成 4 格，其中 3 格涂紫色、1 格涂金色。指针更可能停在哪种颜色上？", options: ["紫色", "金色", "两种颜色一样可能"], answer: 0,
            hint: "哪种颜色占的格子多？", explain: "紫色占 3 格、金色只占 1 格，占的格子越多，指针停上去的可能性越大。" },
          { type: "choice", level: "挑战", q: "要让「摸到红球」和「摸到蓝球」的可能性一样大，应该怎么放球？", options: ["红球和蓝球放同样多", "红球多放 5 个", "只放红球"], answer: 0,
            hint: "可能性的大小跟着数量走", explain: "数量相等，机会就相等。红球蓝球一样多时，摸到谁的可能性都一样大。" },
          { type: "choice", level: "温故", q: "还记得吗：三年级学的分数——把 1 个月饼平均分成 2 份，每份是它的几分之几？", options: ["二分之一（1/2）", "四分之一（1/4）", "2 个月饼"], answer: 0,
            hint: "平均分成 2 份，每份是 2 份里的 1 份", explain: "每份是 1/2。抛硬币时正面朝上的可能性，就像这「一半」——抛得越多越接近一半。" },
          { type: "open", level: "开放", q: "请你设计一个抽奖箱：让「摸到金球」的可能性很小，但不是不可能。你会放几个金球、几个别的球？说说你的理由。",
            placeholder: "我会放……因为……",
            reference: "参考想法：放 1 个金球和 9 个紫球。金球只有 1 个，摸到的可能性很小；但金球确实在箱子里，所以不是不可能。只要金球比别的球少、又不为 0，你的设计就成立！" }
        ]
      },
      {
        type: "review",
        question: "抛一枚硬币，正面朝上和反面朝上，哪个可能性大？",
        ways: [
          { name: "做实验", text: "亲手抛 50 次，记录正面出现的次数：抛得越多，正面比例越靠近 50%。" },
          { name: "讲道理", text: "硬币只有正反两面，两面朝上的机会一样——所以两种结果的可能性一样大。" },
          { name: "辨一辨", text: "「可能」不等于「一定」：就算连续抛出 3 次正面，下一次仍然可能是正面、也可能是反面。" }
        ],
        ask: "给爸爸妈妈讲讲：为什么「明天可能下雨」不等于「明天一定下雨」？再举一个你身边「一定、可能、不可能」的例子。"
      },
      {
        type: "beauty",
        headline: "连数学都算不准的事",
        paragraphs: [
          "天气预报说「明天降水概率 70%」——明明天上有那么多数据，科学家还是说「可能」，因为世界上有些事天生就不能打包票。",
          "数学里也有这样的「调皮鬼」：角谷猜想让一个数按两条简单规则不停变化，有时一飞冲天、有时一落千丈，下一步落在哪儿，谁也猜不准——可数学家至今没能证明它最终一定回到家。",
          "从抛硬币到角谷猜想：承认「说不准」，再用数学去度量「有多准」——这正是可能性最迷人的地方。去博物馆看看这个连数学家都挠头的谜题吧！"
        ],
        museum: "mys-collatz"
      }
    ]
  },

  /* ================= 单元 11：植树问题（探究课） ================= */
  {
    id: "g5u11",
    title: "植树问题",
    subtitle: "间隔里的「加一减一」",
    tag: "推理",
    minutes: 25,
    inquiry: true,
    scenes: [
      {
        type: "story",
        title: "20 米小路栽几棵树？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <rect x="40" y="150" width="320" height="26" rx="13" fill="#e7d7ff" stroke="#9b5de5" stroke-width="3"/>
          <g>
            <line x1="70" y1="150" x2="70" y2="118" stroke="#7a4d00" stroke-width="5" stroke-linecap="round"/>
            <circle cx="70" cy="108" r="16" fill="#9b5de5"/>
            <line x1="150" y1="150" x2="150" y2="118" stroke="#7a4d00" stroke-width="5" stroke-linecap="round"/>
            <circle cx="150" cy="108" r="16" fill="#9b5de5"/>
            <line x1="230" y1="150" x2="230" y2="118" stroke="#7a4d00" stroke-width="5" stroke-linecap="round"/>
            <circle cx="230" cy="108" r="16" fill="#9b5de5"/>
            <line x1="310" y1="150" x2="310" y2="118" stroke="#7a4d00" stroke-width="5" stroke-linecap="round"/>
            <circle cx="310" cy="108" r="16" fill="#9b5de5"/>
          </g>
          <g stroke="#b25e14" stroke-width="2" stroke-dasharray="5 4">
            <line x1="70" y1="186" x2="150" y2="186"/>
            <line x1="150" y1="186" x2="230" y2="186"/>
            <line x1="230" y1="186" x2="310" y2="186"/>
          </g>
          <text x="110" y="202" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">5 米</text>
          <text x="190" y="202" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">5 米</text>
          <text x="270" y="202" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">5 米</text>
          <rect x="30" y="26" width="158" height="46" rx="16" fill="#ffffff" stroke="#9b5de5" stroke-width="3"/>
          <text x="109" y="46" font-size="13" fill="#5b2a9d" font-weight="bold" text-anchor="middle">20 ÷ 5 = 4</text>
          <text x="109" y="63" font-size="13" fill="#5b2a9d" font-weight="bold" text-anchor="middle">栽 4 棵？</text>
          <rect x="226" y="26" width="150" height="46" rx="16" fill="#9b5de5"/>
          <text x="301" y="46" font-size="13" fill="#ffffff" font-weight="bold" text-anchor="middle">不对不对，</text>
          <text x="301" y="63" font-size="13" fill="#ffc233" font-weight="bold" text-anchor="middle">我数出 5 棵！</text>
          <text x="200" y="228" font-size="14" fill="#5b2a9d" font-weight="bold" text-anchor="middle">到底谁说得对？</text>
        </svg>`,
        paragraphs: [
          "紫晶星球修了一条 <b>20 米</b>长的星光小路，要在小路一边栽上发光树，<b>每隔 5 米栽一棵</b>。",
          "小松鼠抢答：「20 ÷ 5 = 4，栽 4 棵！」小兔子却用石子摆了摆，说：「不对，我数出来是 5 棵！」两个好朋友争得脸红红的。",
          "咦，除法算得没错，怎么会差一棵呢？先别急着判断谁对谁错——下一站，亲手摆一摆，答案就藏在你摆的「树」里。"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先不急着下结论，动手摆一摆：用方块摆出 1 行 5 棵「星光树」。摆好后，把手指伸进相邻两棵树的中间——5 棵树，一共有几个「间隔」？",
        config: { interactive: true, targetRows: 1, targetCols: 5 },
        successText: "数出来了吗？5 棵树，中间只有 4 个间隔！间隔数比棵数少 1——把这个发现悄悄记在心里，马上就有大用。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "把 4 棵树摆成一排，数一数树与树之间：只有 3 个间隔。", state: { rows: 1, cols: 4, showTotal: true } },
          { caption: "再添一棵：5 棵树，4 个间隔。路的两头都栽树时，棵数总是比间隔数多 1。", state: { rows: 1, cols: 5, showTotal: true } },
          { caption: "如果路的一端是一座小房子，那端不栽：房子替掉了开头的树——每棵树正好配一个间隔，棵数 = 间隔数。", state: { rows: 1, cols: 4, showTotal: true } },
          { caption: "如果两端都是房子，都不栽：4 个间隔里只能塞进 3 棵树，棵数 = 间隔数 − 1。", state: { rows: 1, cols: 3, showTotal: true } },
          { caption: "回到小路的争论：20 ÷ 5 = 4 个间隔，两端都栽 → 4 + 1 = 5 棵。小兔子对啦！", state: { rows: 1, cols: 5, showTotal: true } }
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "现在验证你的发现：一条小路有 5 个间隔，两端都要栽树。请摆出 6 棵「树」，再数一数：它们中间是不是正好 5 个间隔？",
        config: { interactive: true, targetRows: 1, targetCols: 6 },
        successText: "6 棵树，正好 5 个间隔——两端都栽时，棵数 = 间隔数 + 1。这个规律不是老师告诉你的，是你自己摆出来的！"
      },
      {
        type: "symbol",
        paragraphs: [
          "摆过、看过、验证过，现在把发现写成数学的语言：",
          "先算间隔数：间隔数 = 总长 ÷ 间隔长。再看两端栽不栽，决定加一、减一还是不变。"
        ],
        formula: "两端都栽：棵数 = 间隔数 + 1　｜　只栽一端：棵数 = 间隔数　｜　两端都不栽：棵数 = 间隔数 − 1",
        keypoints: [
          "间隔数 = 总长 ÷ 间隔长，如 20 ÷ 5 = 4 个间隔——它只是第一步",
          "张开一只手掌：5 个手指、4 个指缝。手指是树、指缝是间隔——两端都有时，树比间隔多 1",
          "锯木头、爬楼梯、插彩旗，都是「植树问题」的变身：先找谁是树、谁是间隔"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "20 米长的小路，每隔 5 米栽一棵（路的一边），两端都栽，要栽几棵？", options: ["4 棵", "5 棵", "6 棵", "3 棵"], answer: 1,
            hint: "先算间隔数 20 ÷ 5，再想想两端都栽要加几", explain: "20 ÷ 5 = 4 个间隔，两端都栽：4 + 1 = 5 棵。" },
          { type: "fill", level: "基础", q: "30 米长的走廊一边摆花，每隔 6 米摆一盆，两端都摆，要摆 ＿＿ 盆。", answer: "6",
            hint: "30 ÷ 6 = 5 个间隔，两端都摆……", explain: "30 ÷ 6 = 5 个间隔，两端都摆：5 + 1 = 6 盆。" },
          { type: "choice", level: "变式", q: "还是这条 20 米小路，每隔 5 米栽一棵，但路的一端是雕塑，只栽一端。要栽几棵？", options: ["3 棵", "4 棵", "5 棵"], answer: 1,
            hint: "只栽一端时，棵数和间隔数什么关系？", explain: "20 ÷ 5 = 4 个间隔，只栽一端：棵数 = 间隔数 = 4 棵。" },
          { type: "choice", level: "变式", q: "小路两端各有一座房子，两端都不栽，每隔 5 米栽一棵，要栽几棵？", options: ["3 棵", "4 棵", "5 棵"], answer: 0,
            hint: "两端都不栽，要比间隔数少 1", explain: "20 ÷ 5 = 4 个间隔，两端都不栽：4 − 1 = 3 棵。" },
          { type: "choice", level: "变式", q: "为什么两端都栽时，棵数比间隔数多 1？", options: ["每棵树都和一个间隔一一配对，只有开头第一棵树前面没有间隔，多出了它", "因为栽树工人多送了一棵", "只是碰巧，换条小路就不对了"], answer: 0,
            hint: "张开手掌数一数：手指和指缝谁多？为什么？", explain: "从第二棵树起，每棵树前面都正好有一个间隔，一一配对；开头第一棵树没有间隔可配——所以棵数总是多 1。" },
          { type: "fill", level: "挑战", q: "把一根木头锯成 5 段，要锯 ＿＿ 次。", answer: "4",
            hint: "锯口在木头的「中间」，相当于两端都不栽", explain: "锯的次数相当于「两端都不栽」的棵数：5 段之间有 5 − 1 = 4 个锯口，锯 4 次。" },
          { type: "fill", level: "温故", q: "还记得吗：二年级学的除法——20 里面有几个 5？20 ÷ 5 = ＿＿。", answer: "4",
            hint: "背口诀：四五（　）", explain: "四五二十，20 ÷ 5 = 4。植树问题的第一步，靠的就是这条除法老本领！" },
          { type: "open", level: "开放", q: "猜一猜：在一个圆形花坛的四周围栽花，每隔一段距离栽一棵。栽的棵数和间隔数之间是什么关系？说说你的猜想和理由（可以画个圆圈摆石子试试）。",
            placeholder: "我猜……因为……",
            reference: "参考想法：棵数 = 间隔数！沿着圆圈栽，首尾相接，没有「端点」——把圆圈剪开拉直，正好相当于「只栽一端」。比如周长 20 米、每隔 5 米栽一棵，正好栽 4 棵。" }
        ]
      },
      {
        type: "review",
        question: "20 米小路每隔 5 米栽一棵，两端都栽，为什么是 5 棵而不是 4 棵？",
        ways: [
          { name: "画一画", text: "画一条线段，平均分成 4 段：数一数端点——1、2、3、4、5，共 5 个点，每个点栽一棵，就是 5 棵。" },
          { name: "手指模型", text: "张开手掌：5 个手指像 5 棵树，指缝只有 4 个。两端都有「树」时，树总比缝多 1。" },
          { name: "一一对应", text: "让每棵树领走它前面的一个间隔：第 2、3、4、5 棵都领到了，只有第 1 棵没有间隔可领——所以它多出来，棵数 = 间隔数 + 1。" }
        ],
        ask: "伸出你的手，给爸爸妈妈表演一遍：为什么两端都栽树时，棵数 = 间隔数 + 1？再说说「只栽一端」和「两端都不栽」又该怎么算。"
      },
      {
        type: "beauty",
        headline: "藏在树里的数学",
        paragraphs: [
          "今天你在小路上「栽」的是假树，可真正的树本身就是数学杰作：一根树干分出两根枝，每根枝又分出更小的枝——同一个规律一遍遍重复，这就是「分形」。",
          "间隔的智慧也无处不在：马路上的路灯、楼梯的扶手栏杆、日历里的星期……谁多 1、谁少 1，全都逃不出你今天发现的规律。",
          "去实验室亲手「种」一棵会无限分叉的分形树吧，看看简单的规则怎样长出让人惊叹的美！"
        ],
        lab: "fractal-tree"
      }
    ]
  }
);
