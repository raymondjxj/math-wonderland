/* ============================================================
   数学奇境 · 未来思维营课程（A 辑：第 1~4 课）
   设计依据：Jeannette Wing 计算思维（分解/模式/抽象/算法）、
   2022 版数学新课标核心素养、吴军《数学之美》（数学 × 信息时代）
   课程结构同年級单元：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.think = MW.think || [];

/* ============ 第 1 课：二分查找（参考实现，后续课程模仿本课） ============ */
MW.think.push({
  id: "think1",
  title: "猜数机器人：每次砍一半",
  subtitle: "二分查找——计算机最快的找数本领",
  band: "3~6 年级",
  tag: "算法思维",
  minutes: 15,
  scenes: [
    {
      type: "story",
      title: "100 个宝箱，只能开 7 次",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <g fill="#00b4d8">
          <rect x="60" y="90" width="40" height="34" rx="6"/><rect x="115" y="90" width="40" height="34" rx="6"/>
          <rect x="170" y="90" width="40" height="34" rx="6"/><rect x="225" y="90" width="40" height="34" rx="6"/>
          <rect x="280" y="90" width="40" height="34" rx="6"/>
        </g>
        <text x="200" y="80" text-anchor="middle" font-size="17" fill="#0a6d84" font-weight="bold">……一共 100 个箱子……</text>
        <circle cx="200" cy="185" r="26" fill="#ffc233"/>
        <text x="200" y="192" text-anchor="middle" font-size="22">💎</text>
        <text x="200" y="228" text-anchor="middle" font-size="15" fill="#0a6d84" font-weight="bold">宝石只藏在其中一个箱子里</text>
      </svg>`,
      paragraphs: [
        "海盗船长把一颗蓝宝石藏进了 100 个编了号（1~100）的箱子里，箱子按号码从小到大排成一排。",
        "规则：你可以打开箱子看，但每次开箱子都要花 1 枚金币。船长只给你 <b>7 枚金币</b>！",
        "一个一个翻？最坏要翻 100 次，金币远远不够。怎么办？先记住一个秘密：<b>箱子是按顺序排的</b>。"
      ]
    },
    {
      type: "play",
      widget: "guess",
      prompt: "先体验一下「砍一半」的厉害：你心里想一个 1~100 的数，让机器人来猜！",
      config: { interactive: true, min: 1, max: 100 },
      successText: "感受到没有？每次回答「大了/小了」，可能的范围就缩小一半！"
    },
    {
      type: "anim",
      widget: "guess",
      steps: [
        { caption: "100 个数排成一排，要找到藏起来的那个。", state: { interactive: false, min: 1, max: 100, lo: 1, hi: 100, guess: 0, steps: 0 } },
        { caption: "第一刀切正中间：猜 50。如果答案比 50 小，右边一半全部排除！", state: { interactive: false, min: 1, max: 100, lo: 1, hi: 50, guess: 50, steps: 1 } },
        { caption: "只剩 1~50。再切一半：猜 25。", state: { interactive: false, min: 1, max: 100, lo: 1, hi: 25, guess: 25, steps: 2 } },
        { caption: "再切：只剩 1~12。看到了吗？每猜一次，范围就缩小一半。", state: { interactive: false, min: 1, max: 100, lo: 1, hi: 12, guess: 12, steps: 3 } },
        { caption: "100 → 50 → 25 → 12 → 6 → 3 → 1。最多 7 次，必中！", state: { interactive: false, min: 1, max: 100, lo: 1, hi: 1, guess: 1, steps: 7 } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "这种「每次排除一半」的方法叫<b>二分查找</b>（binary search）。",
        "它厉害在哪？东西翻一倍，找的次数只多 1 次！"
      ],
      formula: "100 → 7 次　1000 → 10 次　100万 → 20 次",
      keypoints: [
        "前提：东西必须按顺序排好（排好序）",
        "每一步：猜正中间，排除一半",
        "2⁷ = 128 > 100，所以 100 个数最多 7 次",
        "这就是「算法」：解决问题的一串明确步骤"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "在 1~100 里猜一个数，二分法第一次应该猜几？", options: ["1", "100", "50", "随便猜"], answer: 2,
          hint: "要从正中间切，才能排除掉一半", explain: "猜 50，无论大了小了都能排除一半。" },
        { type: "choice", level: "基础", q: "猜 50 之后，对方说「小了」，接下来应该猜多少？", options: ["25", "75", "49", "100"], answer: 1,
          hint: "小了说明答案在 51~100 之间，取正中间", explain: "51~100 的中间是 75。" },
        { type: "judge", level: "变式", q: "二分查找不要求数按顺序排列，乱排的也能用。", answer: false,
          hint: "如果乱排，猜中间还能排除一半吗？", explain: "乱排时猜中间什么都不能排除。二分查找的前提是排好序。" },
        { type: "choice", level: "变式", q: "1000 个排好序的数，二分查找最多要猜几次？", options: ["500 次", "100 次", "10 次", "3 次"], answer: 2,
          hint: "1000→500→250→125→62→31→15→7→3→1，数一数", explain: "2¹⁰=1024>1000，所以最多 10 次。" },
        { type: "choice", level: "挑战", q: "查汉语词典找「数」字，你其实也在用二分查找。为什么翻词典比一页页翻快？", options: ["因为词典很薄", "因为字是按拼音/部首排好序的，可以每次排除一大段", "因为运气好"], answer: 1,
          hint: "词典里的字是乱排的吗？", explain: "词典是排好序的，翻中间、判断往前还是往后，就是二分查找。" },
        { type: "fill", level: "挑战", q: "100 → 50 → 25 → ？，下一个范围大约是几个数？", answer: "12",
          hint: "25 的一半是多少？（取整数）", explain: "25 的一半约等于 12（或 13），每次砍一半。" },
        { type: "judge", level: "温故", q: "还记得吗：4 × 5 和 5 × 4 的结果一样多。", answer: true,
          hint: "方阵转一转，总数不变", explain: "对！4 × 5 = 5 × 4 = 20。" },
        { type: "fill", level: "温故", q: "还记得吗：1 米 = ？厘米", answer: "100",
          hint: "100 个 1 厘米接起来是 1 米", explain: "1 米 = 100 厘米。" }
      ]
    },
    {
      type: "review",
      question: "为什么二分查找最多 7 次就能从 100 个数里找到目标？",
      ways: [
        { name: "砍一半", text: "100→50→25→13→7→4→2→1，每猜一次范围缩小一半，7 次就只剩 1 个。" },
        { name: "算一算", text: "2 的 7 次方是 128，比 100 大，所以 7 次足够覆盖 100 种可能。" },
        { name: "倒着想", text: "1 次能找 2 个里的，2 次能找 4 个里的，3 次 8 个……7 次能找 128 个里的。" }
      ],
      ask: "考考爸爸妈妈：让他们在 1~100 里想一个数，你用二分法去猜，看看是不是 7 次以内一定猜中！"
    },
    {
      type: "beauty",
      headline: "从图书馆到搜索引擎",
      paragraphs: [
        "你手机里的通讯录、地图里的地址、搜索引擎里的几十亿网页——计算机全都是用「排好序 + 二分查找」这样的办法，眨眼就找到目标。",
        "数学家说：好的算法不是「更快地蛮干」，而是「更聪明地想」。这就是计算思维的第一课。",
        "图灵爷爷当年破译密码，靠的也是把庞大的可能一步步排除。去博物馆听听他的故事吧！"
      ],
      museum: "ppl-turing"
    }
  ]
});

/* ============ 第 2 课：冒泡排序 ============ */
MW.think.push({
  id: "think2",
  title: "排队比高矮：气泡冒上来",
  subtitle: "冒泡排序——计算机整理数据的基本功",
  band: "3~6 年级",
  tag: "算法思维",
  minutes: 15,
  scenes: [
    {
      type: "story",
      title: "长颈鹿老师的难题",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <text x="200" y="30" text-anchor="middle" font-size="16" fill="#0a6d84" font-weight="bold">从小到大排队，可一次只能比相邻两个！</text>
        <g>
          <rect x="44" y="90" width="48" height="110" rx="10" fill="#00b4d8"/>
          <rect x="108" y="156" width="48" height="44" rx="10" fill="#48cae4"/>
          <rect x="172" y="46" width="48" height="154" rx="10" fill="#0096c7"/>
          <rect x="236" y="178" width="48" height="22" rx="10" fill="#90e0ef"/>
          <rect x="300" y="112" width="48" height="88" rx="10" fill="#00b4d8"/>
        </g>
        <g font-size="17" font-weight="bold" fill="#0a6d84" text-anchor="middle">
          <text x="68" y="82">5</text><text x="132" y="148">2</text>
          <text x="196" y="38">7</text><text x="260" y="170">1</text><text x="324" y="104">4</text>
        </g>
        <path d="M74 214 q 26 16 52 0" stroke="#e0a91f" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M126 214 l -8 -3 m 8 3 l -8 3" stroke="#e0a91f" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M126 206 q -26 -16 -52 0" stroke="#e0a91f" stroke-width="4" fill="none" stroke-linecap="round"/>
        <text x="200" y="233" text-anchor="middle" font-size="13" fill="#0a6d84">相邻的两个，左边高就交换位置</text>
      </svg>`,
      paragraphs: [
        "森林运动会要入场啦！5 只小动物身高分别是 5、2、7、1、4，要按<b>从小到大</b>排成一队。",
        "可长颈鹿老师一次只能看清<b>相邻的两个人</b>：他们俩要是左边高、右边矮，就让他俩交换位置。",
        "这样一对比一对地换下去，真的能排好吗？要比多少次才排得完？"
      ]
    },
    {
      type: "play",
      widget: "sort",
      prompt: "点「执行一步」，看看数字怎么一点点归位；也可以点「自动播放」，一口气看完！",
      config: { interactive: true, values: [5, 2, 7, 1, 4] },
      successText: "排好啦！发现没有：最大的数最先「冒」到最右边，像水里的气泡一样！"
    },
    {
      type: "anim",
      widget: "sort",
      steps: [
        { caption: "5 个数排成一排，目标：从小到大。规则只有一条——相邻两个比一比，左边大就交换。", state: { values: [5, 2, 7, 1, 4], step: 0 } },
        { caption: "第一比：5 和 2，左边大，交换！接着 5 和 7 比，顺序对，不动。", state: { values: [5, 2, 7, 1, 4], step: 1 } },
        { caption: "第一轮比了 4 次，最大的 7 已经「冒」到最右边——它再也不用动了。", state: { values: [5, 2, 7, 1, 4], step: 4 } },
        { caption: "第二轮只比 3 次，第二大的 5 也到位了。每过一轮，就少比一次。", state: { values: [5, 2, 7, 1, 4], step: 7 } },
        { caption: "第三轮比 2 次、第四轮比 1 次。全部排好，一共比较了 4+3+2+1 = 10 次！", state: { values: [5, 2, 7, 1, 4], step: 10 } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "把刚才的办法写成一串明确的步骤，就是一个<b>算法</b>——它有个形象的名字：<b>冒泡排序</b>。",
        "「算法」就是解决问题的一串明确步骤，每一步都不许含糊，这样计算机才能照着做。"
      ],
      formula: "5 个数：比较 4+3+2+1 = 10 次",
      keypoints: [
        "每一轮：从头到尾，相邻比较，左边大就交换",
        "每轮结束，最大的数「冒」到最后，下一轮不用再管它",
        "n 个数要比较 n×(n-1)÷2 次：5×4÷2 = 10 次",
        "还有更快的排序算法吗？有！将来你会认识「快速排序」"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "冒泡排序每一轮做的事是？", options: ["相邻两个比较，左边大就交换", "随便挑两个交换", "把最大的直接拿到最前面", "把所有数倒过来"], answer: 0,
          hint: "回想你点「执行一步」时，数字是怎么动的", explain: "冒泡排序只比较相邻的两个数，左边大就交换位置。" },
        { type: "choice", level: "基础", q: "第一轮比较结束后，谁一定站在了最右边？", options: ["最小的数", "最大的数", "最中间的数", "不一定"], answer: 1,
          hint: "最大的数每次和别人比，都会赢……", explain: "最大的数每次比较都会交换到右边，一轮下来必然「冒」到最后。" },
        { type: "fill", level: "基础", q: "4 个数用冒泡排序，要比较 3+2+1 = ？次", answer: "6",
          hint: "把 3、2、1 加起来", explain: "3+2+1 = 6 次。也就是 4×3÷2 = 6。" },
        { type: "judge", level: "变式", q: "3、5、8 已经排好序了，用冒泡排序检查时一次都不用比较。", answer: false,
          hint: "不比较，怎么知道它们已经排好了呢？", explain: "还是要比一比（3 和 5、5 和 8……），只是不用交换。比较过，才能确认顺序没错。" },
        { type: "choice", level: "变式", q: "为什么第二轮可以比第一轮少比一次？", options: ["因为第二轮运气好", "因为最大的数已经坐在最后，不用再跟它比", "因为数字偷偷变少了", "因为可以偷看答案"], answer: 1,
          hint: "第一轮结束时，谁已经到位了？", explain: "每轮结束，最大的数「冒」到最后定了位，后面的轮次不用再管它，所以少比一次。" },
        { type: "choice", level: "挑战", q: "1000 本书按高矮排序，还用冒泡排序一本本比，要将近 50 万次比较！科学家怎么办？", options: ["忍着，慢慢比", "发明更聪明的算法，比如「快速排序」，能省下大量比较", "不排了，乱着也行"], answer: 1,
          hint: "n×(n-1)÷2，当 n 很大时这个数字会爆炸", explain: "1000×999÷2 ≈ 50 万次。寻找更快、更省的算法，正是计算机科学家的大事。" },
        { type: "judge", level: "温故", q: "还记得吗：比较 48 和 52，48 比较小。", answer: true,
          hint: "先比十位：4 个十和 5 个十，谁小？", explain: "对！48 的十位是 4，52 的十位是 5，所以 48 < 52。比大小也是一位一位来的。" },
        { type: "fill", level: "温故", q: "还记得吗：把 3、1、2 从小到大排一排，站在中间的数是？", answer: "2",
          hint: "先排好队：1、？、3", explain: "排好是 1、2、3，中间是 2。你刚才就在做排序啦！" }
      ]
    },
    {
      type: "review",
      question: "为什么冒泡排序每一轮结束后，最大的数一定在最右边？",
      ways: [
        { name: "跟着走一遍", text: "最大的数和别人比，每次都是它更大，就交换到右边；一路换到底，自然站在最右边。" },
        { name: "反过来想", text: "要是它不在最右边，右边就还站着别人——可它比谁都大，早该把那人换到左边去了，矛盾！" },
        { name: "气泡想一想", text: "水里的大气泡浮得最快；最大的数也像大气泡，一轮就「浮」到顶端，所以它叫冒泡排序。" }
      ],
      ask: "用 4 张写着数字的卡片，给爸爸妈妈表演一次冒泡排序，边做边讲：为什么每过一轮就少比一次？"
    },
    {
      type: "beauty",
      headline: "排序，让世界变整齐",
      paragraphs: [
        "图书馆的书、字典里的字、成绩单上的名次……排好序的东西找起来才快。还记得第 1 课的二分查找吗？它就要求先排好序！",
        "几千年前，我们的祖先用算筹记数、计算，一步一步按规矩来——那也是古老的「算法」。去博物馆看看算筹的故事吧！",
        "今天，科学家还在研究更快的排序算法。说不定将来改进它的，就是正在排队比高矮的你。"
      ],
      museum: "his-suanchou"
    }
  ]
});

/* ============ 第 3 课：二进制 ============ */
MW.think.push({
  id: "think3",
  title: "计算机的语言：只有 0 和 1",
  subtitle: "二进制——用开关拼出所有的数",
  band: "4~6 年级",
  tag: "抽象思维",
  minutes: 15,
  scenes: [
    {
      type: "story",
      title: "灯塔上的 5 盏灯",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <path d="M52 200 L64 96 L96 96 L108 200 Z" fill="#ffffff" stroke="#00b4d8" stroke-width="4"/>
        <rect x="60" y="66" width="40" height="30" rx="6" fill="#00b4d8"/>
        <circle cx="80" cy="81" r="8" fill="#ffc233"/>
        <path d="M0 200 q 50 -12 100 0 t 100 0 t 100 0 t 100 0 V240 H0 Z" fill="#00b4d8" opacity="0.85"/>
        <g stroke="#00b4d8" stroke-width="3">
          <circle cx="170" cy="90" r="16" fill="#ffc233"/>
          <circle cx="215" cy="90" r="16" fill="#ffffff"/>
          <circle cx="260" cy="90" r="16" fill="#ffffff"/>
          <circle cx="305" cy="90" r="16" fill="#ffc233"/>
          <circle cx="350" cy="90" r="16" fill="#ffc233"/>
        </g>
        <g font-size="14" font-weight="bold" fill="#0a6d84" text-anchor="middle">
          <text x="170" y="128">16</text><text x="215" y="128">8</text>
          <text x="260" y="128">4</text><text x="305" y="128">2</text><text x="350" y="128">1</text>
        </g>
        <text x="260" y="45" text-anchor="middle" font-size="15" fill="#0a6d84" font-weight="bold">5 盏灯，只有亮和灭</text>
        <text x="260" y="165" text-anchor="middle" font-size="15" fill="#0a6d84" font-weight="bold">怎么报出「19 条鱼」？</text>
      </svg>`,
      paragraphs: [
        "海岛上的灯塔守护员要给对岸村庄报信：今天渔船捕到了 <b>19 条鱼</b>！",
        "可他只有 5 盏灯，每盏灯只有两种样子：<b>亮，或者灭</b>。不能写字，也不能喊话。",
        "5 盏灯、两种状态，怎么报出 19 这个数？先别急着看答案——如果是你，你会怎么约定？"
      ]
    },
    {
      type: "play",
      widget: "binary",
      prompt: "点卡片翻面：正面是「开」，算上面的点数；背面是「关」，不算。试试拼出 19！",
      config: { interactive: true, cards: 5, target: 19 },
      successText: "19 = 16+2+1！你刚刚说的，就是计算机的语言。"
    },
    {
      type: "anim",
      widget: "binary",
      steps: [
        { caption: "5 张卡片排好队，点数是 16、8、4、2、1——往右每张减半。全部「关」，表示 0。", state: { cards: 5, bits: [0, 0, 0, 0, 0], showValues: true } },
        { caption: "翻开 1：把「开」着的卡片点数加起来，就是表示的数。现在是 1。", state: { cards: 5, bits: [0, 0, 0, 0, 1], showValues: true } },
        { caption: "4 开、1 开：4+1=5。写成 00101——开记作 1，关记作 0。", state: { cards: 5, bits: [0, 0, 1, 0, 1], showValues: true } },
        { caption: "8+4+1=13！01101 就是 13。每个位置只有开、关两种选择。", state: { cards: 5, bits: [0, 1, 1, 0, 1], showValues: true } },
        { caption: "16+2+1=19，写成 10011！5 张卡片最大能表示 16+8+4+2+1=31。", state: { cards: 5, bits: [1, 0, 0, 1, 1], showValues: true } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "这种只用 <b>0 和 1</b> 两个数字来记数的方法，叫<b>二进制</b>。",
        "我们平时的十进制是「满十进一」，每位 0~9；二进制是「满二进一」，每位只有 0 和 1。"
      ],
      formula: "10011₂ = 16+2+1 = 19",
      keypoints: [
        "每个位置的值：……16、8、4、2、1，往左翻一倍",
        "每一位只有 0 或 1：0 是关，1 是开",
        "满 2 进 1：二进制里 1+1 要写成 10",
        "计算机身体里全是小开关，用 0 和 1 最稳当"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "二进制里，每个数位上能出现的数字是？", options: ["0 和 1", "0 到 9", "只有 1", "1 和 2"], answer: 0,
          hint: "想一想：卡片只有几种状态？", explain: "二进制每位只有 0 或 1，就像开关只有关和开。" },
        { type: "choice", level: "基础", q: "二进制卡片的点数是 1、2、4、8、16。往左再摆一张，应该是多少？", options: ["20", "32", "24", "10"], answer: 1,
          hint: "往左每位翻一倍", explain: "16 的左边是 16×2 = 32。位值依次翻倍。" },
        { type: "fill", level: "基础", q: "8、4、1 这三张卡片打开（其余关），表示的数是？", answer: "13",
          hint: "把开着的点数加起来：8+4+1", explain: "8+4+1 = 13，写成二进制是 01101。" },
        { type: "choice", level: "变式", q: "5 张二进制卡片，最大能表示多少？", options: ["15", "31", "32", "100"], answer: 1,
          hint: "全部打开试试：16+8+4+2+1", explain: "全打开是 16+8+4+2+1 = 31。算上全关的 0，一共 32 种状态。" },
        { type: "choice", level: "变式", q: "为什么卡片点数是 1、2、4、8、16，而不是 1、2、3、4、5？", options: ["因为这样写更好看", "因为每位翻一倍，才能不重不漏地表示每个数", "因为古人随便定的"], answer: 1,
          hint: "用 1、2、3、4、5 拼 5：可以是一张 5，也可以是 2+3——会出什么问题？", explain: "每位翻倍，每个数才只有一种拼法，不重不漏。这就是二进制位值的秘密。" },
        { type: "choice", level: "挑战", q: "为什么计算机喜欢用二进制，而不是我们熟悉的十进制？", options: ["因为 0 和 1 写起来省墨水", "因为计算机由亿万个「小开关」组成，开和关两种状态最稳定、最不容易出错", "因为十进制太难了，计算机学不会"], answer: 1,
          hint: "计算机的身体里装着什么？", explain: "电子开关只有通、断两种可靠状态，正好对应 1 和 0。要算得快又不出错，二进制最稳当。" },
        { type: "judge", level: "温故", q: "还记得吗：在 365 这个数里，数字 6 表示 6 个十。", answer: true,
          hint: "6 站在哪一位上？", explain: "对！6 在十位，表示 6 个十。十进制和二进制一样，位置决定大小——这就是「位值」。" },
        { type: "fill", level: "温故", q: "还记得吗：10 个十是多少？", answer: "100",
          hint: "10 个十就是 1 个百", explain: "10 个十是 100——十进制「满十进一」，二进制则是「满二进一」。" }
      ]
    },
    {
      type: "review",
      question: "二进制只用 0 和 1，为什么就能表示所有的数？",
      ways: [
        { name: "卡片实验", text: "1、2、4、8、16……每张卡片管一位，开着的加起来：0~31 每个数都能拼出来，而且只有一种拼法。" },
        { name: "满二进一", text: "和十进制「满十进一」一个道理：二进制每一位满 2 就向前进 1，所以 1、10、11、100……一个都不少。" },
        { name: "开关组合", text: "每位是一个开关，5 位有 32 种组合，10 位有 1024 种，30 位超过 10 亿种——再大的数也装得下。" }
      ],
      ask: "考考爸爸妈妈：用手指当开关（伸出来是 1，握起来是 0），摆出 10011，让他们猜猜是几！"
    },
    {
      type: "beauty",
      headline: "0 和 1 撑起的信息世界",
      paragraphs: [
        "你发的每条消息、每张表情包、每首歌，在计算机里都是一长串 0 和 1。二进制，就是信息时代的「通用语言」。",
        "把复杂的数、字、图，都变成简单的 0 和 1——这种「抓住本质、化繁为简」的本领，数学上叫<b>抽象</b>。",
        "图灵爷爷最早把「用机器计算」这件事想明白。去博物馆看看，他是怎样用数学改变世界的。"
      ],
      museum: "ppl-turing"
    }
  ]
});

/* ============ 第 4 课：概率与大数定律 ============ */
MW.think.push({
  id: "think4",
  title: "抛硬币的智慧：越抛越「听话」",
  subtitle: "概率与大数定律——偶然里藏着必然",
  band: "4~6 年级",
  tag: "数据思维",
  minutes: 15,
  scenes: [
    {
      type: "story",
      title: "连出 8 次正面，公平吗？",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <path d="M148 62 q 52 -42 104 0" stroke="#00b4d8" stroke-width="5" fill="none" stroke-linecap="round" stroke-dasharray="1 14"/>
        <ellipse cx="200" cy="105" rx="46" ry="46" fill="#ffc233" stroke="#e0a91f" stroke-width="5"/>
        <text x="200" y="115" text-anchor="middle" font-size="24" font-weight="bold" fill="#0a6d84">1/2</text>
        <circle cx="105" cy="185" r="22" fill="#ffffff" stroke="#00b4d8" stroke-width="4"/>
        <text x="105" y="192" text-anchor="middle" font-size="16" font-weight="bold" fill="#0a6d84">正</text>
        <circle cx="295" cy="185" r="22" fill="#ffffff" stroke="#00b4d8" stroke-width="4"/>
        <text x="295" y="192" text-anchor="middle" font-size="16" font-weight="bold" fill="#0a6d84">反</text>
        <path d="M127 185 h 40 M 233 185 h 40" stroke="#90e0ef" stroke-width="4" stroke-linecap="round"/>
        <text x="200" y="225" text-anchor="middle" font-size="15" fill="#0a6d84" font-weight="bold">正面？反面？谁说了算？</text>
      </svg>`,
      paragraphs: [
        "点球大战前，裁判抛出一枚硬币：正面，你先踢；反面，对方先踢。",
        "有队员小声嘀咕：「万一裁判手气怪，连出 8 次正面，这办法还公平吗？」",
        "硬币里藏着一个数学大秘密：它既「没准」，又「很准」。这节课，我们亲手把这个秘密<b>抛</b>出来。"
      ]
    },
    {
      type: "play",
      widget: "coins",
      prompt: "亲自试试！先「抛 1 次」几下，再点「抛 10 次」「抛 100 次」，盯着那条蓝线：它最后靠近哪里？",
      config: { interactive: true, goal: 100 },
      successText: "看到没有？抛得越多，正面的比例就越靠近 50% 那条虚线！"
    },
    {
      type: "anim",
      widget: "fraction",
      steps: [
        { caption: "一枚硬币落下来，结果有 2 种可能：正面、反面。把这个长条看成「所有可能」。", state: { shape: "bar", parts: 2, shaded: 0, showLabel: true } },
        { caption: "正面占其中 1 份，所以正面的可能性是 1/2——一半。这个 1/2 就叫「概率」。", state: { shape: "bar", parts: 2, shaded: 1, showLabel: true } },
        { caption: "1/2 也就是 2/4。但注意：它的意思不是「抛 4 次一定 2 次正面」！", state: { shape: "bar", parts: 4, shaded: 2, showLabel: true } },
        { caption: "真的抛 10 次，可能只有 4 次正面：4/10，比一半少一点。这很正常，叫「波动」。", state: { shape: "bar", parts: 10, shaded: 4, showLabel: true } },
        { caption: "继续抛，不停地抛：100 次、1000 次……频率会越来越稳，紧紧靠住 1/2。这就是大数定律。", state: { shape: "bar", parts: 10, shaded: 5, showLabel: true } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "抛一次硬币，结果谁也说不准——这叫<b>随机</b>。",
        "但抛的次数多了，「正面出现的比例」会稳定在 1/2 附近。偶然里，藏着必然。"
      ],
      formula: "正面频率 = 正面次数 ÷ 总次数 ≈ 1/2",
      keypoints: [
        "概率 1/2：正面这件事的可能性占一半",
        "频率：真实做实验时，正面实际占的比例",
        "次数少，频率可能偏；次数多，频率靠近概率——大数定律",
        "两边赢的可能性相等，所以抛硬币定先后，谁也不吃亏"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "抛一枚公平的硬币，正面朝上的可能性是？", options: ["1/4", "1/2", "1（一定是正面）", "说不准，没法用数表示"], answer: 1,
          hint: "两种结果，正面占其中一种", explain: "2 种结果里正面占 1 种，可能性是 1/2。" },
        { type: "judge", level: "基础", q: "抛 10 次硬币，一定正好 5 次正面。", answer: false,
          hint: "回想你刚才亲手抛的结果", explain: "不一定！1/2 是「大约一半」，10 次里 4 次、6 次正面都很正常。" },
        { type: "choice", level: "变式", q: "抛 1000 次硬币，正面的次数最可能是？", options: ["正好 500 次，一次都不能差", "接近 500 次，但可能多一点或少一点", "接近 1000 次", "接近 0 次"], answer: 1,
          hint: "大数定律说的是「靠近」，不是「正好」", explain: "大数定律保证频率靠近 1/2，也就是 500 次附近，但不保证正好 500 次。" },
        { type: "choice", level: "变式", q: "连抛 5 次都是正面！第 6 次抛，反面的可能性会变大吗？", options: ["会，该轮到反面了", "不会，每次都是新的 1/2，硬币没有记性", "会，反而正面的可能性更大"], answer: 1,
          hint: "硬币记得自己上一次是什么吗？", explain: "每次抛硬币都是独立的一抛，硬币没有记忆：第 6 次，正反仍然各占 1/2。" },
        { type: "choice", level: "挑战", q: "为什么抛得越多，正面的频率越靠近 1/2？", options: ["因为硬币越抛越听话", "因为偶然的偏多偏少，会在大量次数里互相抵消，真正的 1/2 显露出来", "因为人越抛越熟练"], answer: 1,
          hint: "前面多出的几次正面，放进后面几百次里还显眼吗？", explain: "少量次数的偶然偏差，会被大量次数稀释、抵消，频率就稳定在概率附近——这就是大数定律。" },
        { type: "choice", level: "挑战", q: "哪个游戏公平？A：抛硬币，正面小明赢；B：掷骰子，掷出 6 小明赢。", options: ["A 公平", "B 公平", "两个都公平"], answer: 0,
          hint: "公平 = 双方赢的可能性一样大", explain: "A 中两人赢的可能性都是 1/2，公平；B 中小明赢的可能性只有 1/6，太吃亏，不公平。" },
        { type: "choice", level: "温故", q: "还记得吗：盒子里有 3 个红球和 1 个白球，闭眼摸出一个，摸到哪种球的可能性大？", options: ["红球", "白球", "一样大"], answer: 0,
          hint: "哪种球的数量多？", explain: "红球数量多，摸到红球的可能性就大。可能性的大小和数量有关。" },
        { type: "judge", level: "温故", q: "还记得吗：1/2 和 2/4 一样大。", answer: true,
          hint: "同一块蛋糕，不管切成 2 份取 1 份，还是切成 4 份取 2 份……", explain: "对！2/4 约分后就是 1/2，它们一样大，都是「一半」。" }
      ]
    },
    {
      type: "review",
      question: "连抛 5 次正面之后，为什么说下一次反面不会「该来了」？",
      ways: [
        { name: "硬币没记性", text: "每一次抛掷都是独立的：硬币不记得前面发生了什么，正、反可能性永远各占 1/2。" },
        { name: "长远看", text: "「平衡」靠的是成千上万次的平均，不是「下一次补回来」。5 次的偏差放进 1000 次里，几乎看不见。" },
        { name: "做实验", text: "自己抛 50 次记下来：中途常有连着 3、4 次正面的情况，可最后频率还是靠近一半。" }
      ],
      ask: "给爸爸妈妈讲讲：为什么用抛硬币决定「谁先发球」是公平的？再考考他们：连出 3 次正面后，下一次反面会更容易吗？"
    },
    {
      type: "beauty",
      headline: "偶然里的必然",
      paragraphs: [
        "大数定律可不只管硬币：保险公司的定价、疫苗的有效率、天气预报的准确率，背后都有它在撑腰。",
        "数学家还研究另一种「没准」：一条简单规则反复作用，结果竟无人能预测——比如著名的「冰雹猜想」。去博物馆看看这个谜题吧！",
        "学会和「不确定」做朋友：不轻信运气，也不害怕偶然——这是概率送给你的礼物。"
      ],
      museum: "mys-collatz"
    }
  ]
});
