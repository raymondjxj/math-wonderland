/* ============================================================
   数学奇境 · 五年级扩展课程 v2（push 模式，接 g5.js / g5b.js / g5c.js / g5d.js）
   单元：12 观察物体（三） / 13 图形的运动（三） / 14 折线统计图
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[5] = MW.content[5] || { grade: 5, name: "五年级 · 紫晶星球", units: [] };
G.units.push(

  /* ================= 单元 12：观察物体（三） ================= */
  {
    id: "g5u12",
    title: "观察物体（三）",
    subtitle: "三张影子照片，还原积木塔",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "三张影子照片",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <text x="30" y="38" font-size="16" fill="#5b2a9d" font-weight="bold">塌掉的积木塔 · 只剩三张影子</text>
          <g stroke="#5b2a9d" stroke-width="3">
            <rect x="156" y="52" width="44" height="44" fill="#b088f9"/>
            <rect x="156" y="96" width="44" height="44" fill="#9b5de5"/>
            <rect x="200" y="96" width="44" height="44" fill="#9b5de5"/>
            <rect x="244" y="96" width="44" height="44" fill="#9b5de5"/>
          </g>
          <g fill="#ffffff" opacity=".35">
            <rect x="160" y="56" width="36" height="12" rx="4"/>
            <rect x="160" y="100" width="36" height="12" rx="4"/>
            <rect x="204" y="100" width="36" height="12" rx="4"/>
            <rect x="248" y="100" width="36" height="12" rx="4"/>
          </g>
          <text x="222" y="162" font-size="13" fill="#5b2a9d" text-anchor="middle">原来的塔（塌了……）</text>
          <rect x="20" y="170" width="110" height="60" rx="10" fill="#ffffff" stroke="#c8b6ff" stroke-width="3"/>
          <text x="75" y="186" font-size="12" fill="#7c3aed" text-anchor="middle" font-weight="bold">从正面看</text>
          <g fill="#5b2a9d">
            <rect x="54" y="210" width="14" height="14"/><rect x="68" y="210" width="14" height="14"/><rect x="82" y="210" width="14" height="14"/>
            <rect x="54" y="196" width="14" height="14"/>
          </g>
          <rect x="145" y="170" width="110" height="60" rx="10" fill="#ffffff" stroke="#c8b6ff" stroke-width="3"/>
          <text x="200" y="186" font-size="12" fill="#7c3aed" text-anchor="middle" font-weight="bold">从上面看</text>
          <g fill="#5b2a9d">
            <rect x="179" y="202" width="14" height="14"/><rect x="193" y="202" width="14" height="14"/><rect x="207" y="202" width="14" height="14"/>
          </g>
          <rect x="270" y="170" width="110" height="60" rx="10" fill="#ffffff" stroke="#c8b6ff" stroke-width="3"/>
          <text x="325" y="186" font-size="12" fill="#7c3aed" text-anchor="middle" font-weight="bold">从左面看</text>
          <g fill="#5b2a9d">
            <rect x="318" y="194" width="14" height="14"/><rect x="318" y="208" width="14" height="14"/>
          </g>
        </svg>`,
        paragraphs: [
          "紫晶建筑队接到紧急任务：仓库塌了一角！机器人保管员只抢救出三张「影子照片」——那是塌掉的积木塔从正面、上面、左面看到的样子。",
          "朵朵盯着照片发愁：塔已经塌了，积木散了一地。只凭三张扁扁的影子图，真的能把原来的塔一块不差地搭回来吗？",
          "更奇怪的是：小机器人只看了「正面」那一张，就信心满满地搭了一座。朵朵却直摇头：<b>一张影子，真的够用吗……</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "先当一回小侦探：一座积木塔，下层 3 块并排站，最左边那块的头上再叠 1 块。想象你站到它的正前方——看到的影子是什么形状？打开直尺模式，沿方格把它画出来！",
        config: { interactive: true, grid: true, straightEdge: true },
        successText: "画好了！正确的影子是：下面一排 3 格，左上角再叠 1 格，像一把小椅子。你刚才用眼睛给积木塔「拍了张照」——这张照片，数学上叫「从正面看到的形状」！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "先看「正面照片」：影子是 2 行 × 3 列的长方形——这座塔左右有 3 列、上下有 2 层。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "再看「上面照片」：影子扁扁的，只有 1 行 × 3 列——原来塔前后只有 1 排！", state: { rows: 1, cols: 3, showTotal: true } },
          { caption: "最后看「左面照片」：瘦瘦高高，2 行 × 1 列——和「前后 1 排、上下 2 层」正好对上。", state: { rows: 2, cols: 1, showTotal: true } },
          { caption: "三张影子合起来：前后 1 排、左右 3 列、上下 2 层——谜底是一堵 6 块的积木墙！", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "陷阱在此：要是前后排开两堵一模一样的墙，积木变成 12 块，从正面看还是同样的 2×3 影子！所以只看一个方向，真的不够。", state: { rows: 2, cols: 6, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「看影子还原积木塔」的本领，写成数学的语言：",
          "从正面、上面、左面看到的平面图形合在一起，就能描述一个立体——这正是工程师画图纸的办法！"
        ],
        formula: "正面图 ＋ 上面图 ＋ 左面图 → 还原立体",
        keypoints: [
          "从正面看：知道左右有几列、上下有几层",
          "从上面看：知道左右有几列、前后有几排（像看积木的「脚印」）",
          "从左面看：知道前后有几排、上下有几层",
          "只凭一个方向的图，摆法可能不止一种——看的方向越多，答案越确定"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "一个几何体从正面看是 2 行 3 列的长方形，从上面看是 1 行 3 列。这个几何体有几块小正方体？", options: ["3 块", "6 块", "9 块", "12 块"], answer: 1,
            hint: "从上面看只有 1 排；从正面看有 2 层", explain: "上面图 1×3 说明前后只有 1 排、左右 3 列；正面图 2×3 说明每列都有 2 层。3 列 × 2 层 = 6 块。" },
          { type: "fill", level: "基础", q: "一个几何体从正面看是 2 行 2 列的正方形，从上面看是 1 行 2 列。这个几何体用了 ＿＿ 块小正方体。", answer: "4",
            hint: "只有 1 排，每列 2 层", explain: "上面图 1×2 说明只有 1 排 2 列；正面图 2×2 说明每列 2 层。2 × 2 = 4 块。" },
          { type: "judge", level: "变式", q: "只要知道从正面看到的形状，就能确定几何体用了多少块小正方体。", answer: false,
            hint: "前后方向上能「藏」积木吗？", explain: "不能！在正后方悄悄加积木，从正面看到的形状一点儿不变，块数却变了。一个方向的图定不下摆法。" },
          { type: "choice", level: "变式", q: "为什么只凭一个方向看到的形状，不能确定积木的摆法？", options: ["因为前后方向藏着几排、几块，从这个方向看不出来", "因为我们的眼睛容易看花", "因为小正方体长得都一个样"], answer: 0,
            hint: "想想正后方「藏」积木的把戏", explain: "从一个方向看，前后重叠的积木会合成同一片影子——藏着几排几块根本看不出来，所以摆法没法确定。" },
          { type: "choice", level: "挑战", q: "一个几何体从正面看是 2 层 3 列，从上面看是 2 排 3 列。它最少用几块小正方体？", options: ["6 块", "8 块", "9 块", "12 块"], answer: 2,
            hint: "上面图有 6 个位置，先各放 1 块；正面图要求 3 列每列都够 2 层", explain: "上面图 6 格 → 底面 6 个位置先各放 1 块，共 6 块；正面图要求左、中、右 3 列每列最高都是 2 层 → 每列至少再补 1 块。6 + 3 = 9 块。" },
          { type: "fill", level: "挑战", q: "还是这个几何体（正面 2 层 3 列、上面 2 排 3 列），它最多用 ＿＿ 块小正方体。", answer: "12",
            hint: "每个位置都叠到 2 层，就是最多", explain: "底面 6 个位置，每个最多叠 2 块：6 × 2 = 12 块。最少 9 块、最多 12 块，中间的块数也都有可能！" },
          { type: "choice", level: "温故", q: "还记得吗：低年级观察物体时我们发现——站的位置不同，看到的形状会怎样？", options: ["一定完全相同", "可能不一样", "一定完全不一样"], answer: 1,
            hint: "想想从正面和背后看同一只玩具熊", explain: "站的位置不同，看到的形状可能不一样（有时也碰巧相同）。所以观察物体，要多换几个方向看。" },
          { type: "open", level: "开放", q: "用 5 块一样的小正方体搭一个几何体，要求从上面看正好是 1 行 3 列。你能想出几种不同的搭法？说一说。",
            reference: "先在地上摆一排 3 块当「脚印」，剩下 2 块往上叠：2 块都叠在同一根柱子上，有 3 种选法；分开叠在两根不同的柱子上，也有 3 种选法——一共 6 种搭法！它们从上面看，都是同样的 1 行 3 列。" }
        ]
      },
      {
        type: "review",
        question: "只给你从正面看到的形状，为什么不能确定积木塔的样子？",
        ways: [
          { name: "举个反例", text: "正面都是 2 行 3 列：可以是一堵 6 块的墙，也可以前后再藏一堵变成 12 块——同一张照片，两种不同的塔。" },
          { name: "动手摆一摆", text: "摆好一堵墙，从正面拍张照；再在正后方悄悄加 1 块，重拍一张——照片一模一样！前后方向的秘密，正面照片守不住。" },
          { name: "三图合璧", text: "正面图定「几列几层」，上面图定「几列几排」，左面图定「几排几层」。三张图一起登场，摆法才基本锁定。" }
        ],
        ask: "用积木搭一座小塔，请爸爸妈妈只从正面画出它的样子、猜猜有几块；再请他们换到上面看一看——给他们讲讲：为什么一张图猜不准？"
      },
      {
        type: "beauty",
        headline: "三张「影子」，盖起摩天大楼",
        paragraphs: [
          "你今天还原积木塔用的三张图，工程师天天在用：盖大楼前，建筑师要画出从正面、上面、侧面看到的图纸，工人照着图施工，一块砖都不会砌错。",
          "四千多年前，埃及人建起金字塔：从每个侧面看都是三角形，从上面看却是正方形——换一个方向看，形状大不同。地图、医院的 CT 片，也都是「换个方向看」的智慧。",
          "图形换个摆法，还能一片挨一片铺满整个平面——去实验室玩玩密铺，感受图形拼接的魔力吧！"
        ],
        lab: "tessellation",
        museum: "his-egypt"
      }
    ]
  },

  /* ================= 单元 13：图形的运动（三）——旋转 ================= */
  {
    id: "g5u13",
    title: "图形的运动（三）",
    subtitle: "旋转：绕着一个点转身",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "老风车的转身术",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <path d="M0 202 Q120 162 240 196 T400 192 V240 H0 Z" fill="#e6defc"/>
          <path d="M188 130 L212 130 L220 212 L180 212 Z" fill="#c8b6ff" stroke="#5b2a9d" stroke-width="3"/>
          <g stroke="#5b2a9d" stroke-width="3">
            <path d="M200 122 L256 64 L272 90 Z" fill="#9b5de5"/>
            <path d="M200 122 L256 180 L228 192 Z" fill="#c8b6ff"/>
            <path d="M200 122 L144 180 L130 154 Z" fill="#9b5de5"/>
            <path d="M200 122 L144 64 L172 52 Z" fill="#c8b6ff"/>
          </g>
          <circle cx="200" cy="122" r="10" fill="#5b2a9d"/>
          <circle cx="200" cy="122" r="4" fill="#f3edff"/>
          <path d="M288 132 A90 90 0 0 0 248 54" fill="none" stroke="#7c3aed" stroke-width="4" stroke-dasharray="2 8" stroke-linecap="round"/>
          <path d="M242 48 L254 50 L248 63 Z" fill="#7c3aed"/>
          <text x="318" y="122" font-size="15" fill="#5b2a9d" font-weight="bold">转了多少度？</text>
          <text x="200" y="34" font-size="16" fill="#5b2a9d" font-weight="bold" text-anchor="middle">老风车的转身术</text>
        </svg>`,
        paragraphs: [
          "紫晶星球的山坡上，立着一座老风车。风一吹，四片叶片「呼——」地绕着中心的铜螺丝转起来，磨坊里的面粉就雪白雪白地落下来。",
          "这天叶片刮坏了一片。朵朵跑去报修，师傅头也不抬地问：「它转了多少度？说清楚，我才好配零件。」多少……度？转圈也能用「度」来量吗？",
          "山下的钟楼里，钟摆「嘀嗒、嘀嗒」地荡；广场上，旋转木马一圈又一圈。<b>这些转动的背后，藏着同一把数学钥匙……</b>"
        ]
      },
      {
        type: "play",
        widget: "angle",
        prompt: "先感受一下「转了多少度」：风车叶片从指向正右方，转到指向正上方——正好转过一个直角。拖动滑块，把这个转角摆到 90°！",
        config: { interactive: true, deg: 20, target: 90, tolerance: 3, showProtractor: true },
        successText: "摆好了！从向右到向上，正好 90°——这就是叶片转过的角度。原来「转了多少」，真的可以用度来量！"
      },
      {
        type: "anim",
        widget: "angle",
        steps: [
          { caption: "风车叶片绕着中心的铜螺丝转——这个固定不动的点，叫旋转中心。现在叶片指向右，还没开始转。", state: { deg: 5, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "转动有两条路线：和钟表指针同方向，叫顺时针；反着来，叫逆时针。今天叶片走顺时针路线。", state: { deg: 45, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "转到指向正上方：正好一个直角——90°。钟面上分针走 3 大格，也是 90°。", state: { deg: 90, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "再转一个 90°，指向左方：从出发到现在一共 180°，整整半圈——像钟摆从一边荡到另一边。", state: { deg: 180, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "继续！转到指向正下方：270°，大半圈已经过去了。", state: { deg: 270, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "转满 360°，叶片回到出发点。一圈 360°、半圈 180°、四分之一圈 90°——记住这三把量旋转的尺子！", state: { deg: 360, showArc: true, showLabel: false, showProtractor: false } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把风车、钟摆的转动，写成数学的语言：",
          "想说清楚一个旋转，必须报出三样东西——一样都不能少。"
        ],
        formula: "旋转三要素：旋转中心 ＋ 旋转方向 ＋ 旋转角度",
        keypoints: [
          "旋转中心：绕着的那个固定点，旋转时它一动不动",
          "旋转方向：和钟表指针同向叫顺时针，反着来叫逆时针",
          "旋转角度：钟面一大格是 30°；直角 90°，半圈 180°，整圈 360°",
          "旋转前后，图形的形状、大小不变，只是方向和位置变了"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "钟面上，分针从 12 顺时针走到 3，旋转了多少度？", options: ["30°", "60°", "90°", "180°"], answer: 2,
            hint: "钟面 12 大格共 360°，一大格是几度？", explain: "一大格 360° ÷ 12 = 30°；从 12 到 3 走了 3 大格：3 × 30° = 90°。" },
          { type: "choice", level: "基础", q: "分针从 12 顺时针走到 4，旋转了多少度？", options: ["90°", "120°", "150°", "180°"], answer: 1,
            hint: "数一数走了几大格，再乘 30°", explain: "从 12 到 4 走了 4 大格：4 × 30° = 120°。" },
          { type: "fill", level: "基础", q: "钟面上，相邻两个数字之间（一大格）是 ＿＿ 度。", answer: "30",
            hint: "一圈 360°，平均分成 12 大格", explain: "360° ÷ 12 = 30°，一大格是 30°。" },
          { type: "choice", level: "变式", q: "一个图形绕点旋转 90° 后，发生了什么变化？", options: ["大小变了", "形状变了", "方向和位置变了，形状和大小没变"], answer: 2,
            hint: "想想旋转的风车叶片：叶片本身变了吗？", explain: "旋转只是让图形「转身」：方向、位置变了，形状和大小一点儿没变。" },
          { type: "choice", level: "变式", q: "为什么旋转之后，图形的形状和大小都不会变？", options: ["因为旋转是整个图形绕中心一起「转身」，每条边、每个角原样跟着转，谁也没被拉长压扁", "因为图形是硬纸板做的，很结实", "碰巧不变而已"], answer: 0,
            hint: "旋转时，图形上每一点到中心的距离变吗？", explain: "旋转时图形上每一点都绕中心转过同样的角度，到中心的距离不变——边长、角度全都保持原样，所以形状大小不变。" },
          { type: "judge", level: "变式", q: "荡秋千时，秋千绕着横梁来回摆，这也是一种旋转现象。", answer: true,
            hint: "秋千绕哪个点转？转过的角度固定吗？", explain: "对！秋千绕横梁这个固定点转动，每次转过一定的角度——钟摆、秋千、跷跷板，都是旋转现象。" },
          { type: "choice", level: "挑战", q: "钟面上，时针从「4」顺时针转到「10」，转过了多少度？", options: ["120°", "150°", "180°", "210°"], answer: 2,
            hint: "从 4 到 10 是几大格？", explain: "从 4 到 10 走了 6 大格：6 × 30° = 180°，正好半圈。" },
          { type: "choice", level: "温故", q: "还记得吗：二年级学过的平移——图形平移之后，什么保持不变？", options: ["形状、大小和方向都不变，只有位置变了", "方向会反过来", "大小会变小"], answer: 0,
            hint: "滑梯上滑下来的小朋友，头还朝原来的方向", explain: "平移只改位置，形状、大小、方向都不变。平移和旋转是好朋友：都不改变图形的形状和大小；区别是平移不「转头」，旋转要绕点「转头」。" },
          { type: "open", level: "开放", q: "找一找：生活中还有哪些「绕着一个点转动」的现象？说出它的旋转中心，再估一估它转了多少度。",
            reference: "旋转门绕中间的立柱转半圈约 180°；停车场的道闸绕一端抬起约 90°；风扇叶片绕电机轴一圈圈转 360°；拧水龙头，把手绕阀芯转约 90°……说得出旋转中心和角度，就很棒！" }
        ]
      },
      {
        type: "review",
        question: "怎样把一个旋转说清楚？转 90° 和转 180° 有什么不一样？",
        ways: [
          { name: "报三要素", text: "说清旋转要报三样：绕哪个点（旋转中心）、朝哪个方向（顺时针/逆时针）、转了多少度（旋转角度）。缺一样就说不清。" },
          { name: "看钟面", text: "90° 是 3 大格：分针从 12 走到 3；180° 是 6 大格：分针从 12 走到 6。数格子，就能数出角度。" },
          { name: "看终点", text: "叶片从指向右出发：转 90° 指向正上方，转 180° 正好指向反方向——角度不同，停下的方向也不同。" }
        ],
        ask: "给爸爸妈妈表演一下：伸直手臂当指针，绕着自己的肩膀先顺时针转 90°、再转 180°，边转边大声报出旋转三要素。"
      },
      {
        type: "beauty",
        headline: "转一转，转出对称的美",
        paragraphs: [
          "万花筒轻轻一转，彩色碎片就排出全新的花纹——有的图案绕中心转过一定角度，居然能和原来的自己重合！数学家叫它「旋转对称」。",
          "正方形绕中心转 90° 就重合一次；雪花的正六边形转 60° 就重合一次。风车、齿轮、向日葵的花盘，都藏着旋转对称的秘密。",
          "去实验室转动万花筒，亲手找一找：每种图案重合一次，最少要转多少度？"
        ],
        lab: "kaleidoscope"
      }
    ]
  },

  /* ================= 单元 14：折线统计图 ================= */
  {
    id: "g5u14",
    title: "折线统计图",
    subtitle: "会讲故事的线：一眼看趋势",
    tag: "数据",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "气象站的一周日记",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <text x="200" y="34" font-size="16" fill="#5b2a9d" font-weight="bold" text-anchor="middle">气象站的一周日记</text>
          <rect x="52" y="56" width="26" height="120" rx="13" fill="#ffffff" stroke="#5b2a9d" stroke-width="3"/>
          <rect x="59" y="96" width="14" height="86" fill="#9b5de5"/>
          <circle cx="65" cy="186" r="20" fill="#9b5de5" stroke="#5b2a9d" stroke-width="3"/>
          <g stroke="#5b2a9d" stroke-width="2">
            <line x1="82" y1="76" x2="92" y2="76"/><line x1="82" y1="106" x2="92" y2="106"/><line x1="82" y1="136" x2="92" y2="136"/>
          </g>
          <rect x="120" y="56" width="180" height="150" rx="12" fill="#ffffff" stroke="#c8b6ff" stroke-width="3"/>
          <g font-size="13" fill="#5b2a9d" font-weight="bold">
            <text x="136" y="82">周一 18°C</text><text x="208" y="82">周五 26°C</text>
            <text x="136" y="110">周二 20°C</text><text x="208" y="110">周六 29°C</text>
            <text x="136" y="138">周三 23°C</text><text x="208" y="138">周日 27°C</text>
            <text x="136" y="166">周四 22°C</text>
          </g>
          <text x="210" y="194" font-size="12" fill="#7c3aed" text-anchor="middle">哪天升得最快？</text>
          <path d="M330 196 L366 100" stroke="#9b5de5" stroke-width="5" stroke-linecap="round"/>
          <path d="M366 100 L346 104 L360 120 Z" fill="#9b5de5"/>
          <text x="346" y="222" font-size="13" fill="#5b2a9d" text-anchor="middle" font-weight="bold">趋势向上！</text>
        </svg>`,
        paragraphs: [
          "紫晶气象站的墙上，贴着朵朵记了一周的气温日记：周一 18°C、周二 20°C、周三 23°C、周四 22°C、周五 26°C、周六 29°C、周日 27°C。",
          "站长考她：「哪一段气温升得最快？这一周总体在变冷还是变暖？」朵朵盯着 7 个数字，比过来、算过去，眼睛都看花了。",
          "隔壁老气象员笑了：「把数字变成一条线试试？」<b>数字怎么会变成线？这条线又凭什么开口「讲故事」……</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "数字变线大挑战：方格纸上，横着数格是星期、竖着数格是温度。先把 7 天的气温描成 7 个点（周一 18°C……周日 27°C），再打开直尺模式，按顺序把点连一连——看看你画出了什么！",
        config: { interactive: true, grid: true, straightEdge: true },
        successText: "连好啦！一条高高低低的折线出现了——你刚刚亲手画出了数学里的折线统计图！哪天最高、哪段最陡，是不是一眼就能看到？"
      },
      {
        type: "anim",
        widget: "chart",
        steps: [
          { caption: "第一步描点：每天的气温变成一个点，点越高天越热，点越低天越凉。", state: { mode: "line", data: [{ label: "周一", value: 18 }, { label: "周二", value: 20 }, { label: "周三", value: 23 }, { label: "周四", value: 22 }, { label: "周五", value: 26 }, { label: "周六", value: 29 }, { label: "周日", value: 27 }], title: "紫晶城一周气温（°C）", highlight: -1, showValues: true } },
          { caption: "第二步连线：按周一到周日的顺序，把相邻的点用线段连起来——折线统计图诞生！", state: { mode: "line", data: [{ label: "周一", value: 18 }, { label: "周二", value: 20 }, { label: "周三", value: 23 }, { label: "周四", value: 22 }, { label: "周五", value: 26 }, { label: "周六", value: 29 }, { label: "周日", value: 27 }], title: "紫晶城一周气温（°C）", highlight: -1, showValues: true } },
          { caption: "找最陡的一段：周四到周五，从 22°C 蹿到 26°C，一天升了 4°C——线段最陡，升得最快！", state: { mode: "line", data: [{ label: "周一", value: 18 }, { label: "周二", value: 20 }, { label: "周三", value: 23 }, { label: "周四", value: 22 }, { label: "周五", value: 26 }, { label: "周六", value: 29 }, { label: "周日", value: 27 }], title: "紫晶城一周气温（°C）", highlight: 4, showValues: true } },
          { caption: "也有往下走的：周三到周四，23°C 掉到 22°C——线段向下，气温下降了。", state: { mode: "line", data: [{ label: "周一", value: 18 }, { label: "周二", value: 20 }, { label: "周三", value: 23 }, { label: "周四", value: 22 }, { label: "周五", value: 26 }, { label: "周六", value: 29 }, { label: "周日", value: 27 }], title: "紫晶城一周气温（°C）", highlight: 3, showValues: true } },
          { caption: "周六 29°C 站在最高点，是本周的「高温冠军」；周一 18°C 蹲在最低点。", state: { mode: "line", data: [{ label: "周一", value: 18 }, { label: "周二", value: 20 }, { label: "周三", value: 23 }, { label: "周四", value: 22 }, { label: "周五", value: 26 }, { label: "周六", value: 29 }, { label: "周日", value: 27 }], title: "紫晶城一周气温（°C）", highlight: 5, showValues: true } },
          { caption: "退一步看整条线：虽然中间拐了个小弯，但整体一路向右上爬——这周在变暖！这就是折线图最拿手的「看趋势」。", state: { mode: "line", data: [{ label: "周一", value: 18 }, { label: "周二", value: 20 }, { label: "周三", value: 23 }, { label: "周四", value: 22 }, { label: "周五", value: 26 }, { label: "周六", value: 29 }, { label: "周日", value: 27 }], title: "紫晶城一周气温（°C）", highlight: -1, showValues: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把一周气温的画法与读法，写成数学的语言：",
          "折线统计图 = 先描点，再连线。点管大小，线管变化。"
        ],
        formula: "折线统计图：点定高低，线看趋势；线段越陡，变化越快",
        keypoints: [
          "画法两步：① 按数据描点；② 按顺序用线段把点连起来",
          "读法三看：看点找最大最小，看线判上升下降，看陡缓比变化快慢",
          "线段水平 = 数量没变；线段越陡 = 变化越快",
          "条形图擅长比多少，折线图擅长看变化趋势——按目的选图"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "看这张一周气温折线图：哪一天最热？", options: ["周三", "周五", "周六", "周日"], answer: 2,
            hint: "找最高的那个点", explain: "周六 29°C 站在最高的点上，是本周最热的一天。" },
          { type: "choice", level: "基础", q: "哪一段气温下降了？", options: ["周一到周二", "周三到周四", "周四到周五", "周五到周六"], answer: 1,
            hint: "找线段往下走的那一段", explain: "周三 23°C → 周四 22°C，线段向下走，气温下降了 1°C。其余三段都在上升。" },
          { type: "fill", level: "基础", q: "周五的气温是 ＿＿ °C。", answer: "26",
            hint: "找到「周五」正上方的点，看它标的数", explain: "周五对应的点是 26，所以周五的气温是 26°C。" },
          { type: "choice", level: "变式", q: "哪一段气温上升得最快？", options: ["周一到周二", "周二到周三", "周四到周五", "周五到周六"], answer: 2,
            hint: "比一比每段升了几度：线段最陡的就是它", explain: "周一到周二升 2°C，周二到周三升 3°C，周四到周五升 4°C，周五到周六升 3°C。升 4°C 最多，线段最陡——周四到周五升得最快。" },
          { type: "choice", level: "变式", q: "为什么折线统计图比统计表更擅长「看趋势」？", options: ["点连成线后，上升、下降和变化快慢一眼就能看到，不用逐个数去比", "折线图的颜色比较好看", "统计表里的数字太小看不清"], answer: 0,
            hint: "想想朵朵看数字看到眼花的样子", explain: "表格里要逐个数比较才能发现变化；折线把数据画成「山坡」，升、降、快、慢一眼就能看到——这就是图像的力量。" },
          { type: "judge", level: "变式", q: "折线统计图里，线段越平，说明数量变化越快。", answer: false,
            hint: "线段水平时，数量变了吗？", explain: "说反了！线段越平，变化越慢；线段水平，说明数量一点儿没变。线段越陡，变化才越快。" },
          { type: "choice", level: "挑战", q: "这一周气温总体向上升。照这个趋势猜一猜：下周一的气温最可能怎样？", options: ["和周日差不多，或再高一点", "突然降到 0°C", "一定正好 30°C"], answer: 0,
            hint: "趋势能帮我们「合理猜」，但不能「打包票」", explain: "总体在上升，所以下周一很可能和周日（27°C）差不多或略高。但天气有变数，「突然到 0°C」没依据，「一定 30°C」太武断——折线图给的是线索，不是保证。" },
          { type: "choice", level: "温故", q: "还记得吗：以前学过的条形统计图，最拿手的本领是什么？", options: ["一眼比较谁多谁少", "一眼看出变化趋势", "直接算出平均数"], answer: 0,
            hint: "条形图用直条的高矮表示数量", explain: "条形图用直条高矮比多少；看变化趋势是折线图的拿手好戏。两种图各有分工，按需要来选。" },
          { type: "open", level: "开放", q: "如果记录你一周每晚的阅读分钟数，画成折线统计图，你希望这条线是什么形状？为什么？",
            reference: "我希望这条线总体向右上角爬——说明越读越多；就算中间掉下去一两天也没关系，趋势向上就是进步。折线图像成长的脚印，坚持记录，就能看到自己的变化！" }
        ]
      },
      {
        type: "review",
        question: "拿到一张折线统计图，怎样把它读懂？",
        ways: [
          { name: "看点", text: "点的高低就是数量的大小：最高点找最大值，最低点找最小值，每个点都对应一个数据。" },
          { name: "看线", text: "线段向右上走 = 数量增加，向右下走 = 数量减少，水平不动 = 数量没变。" },
          { name: "看陡缓", text: "线段越陡，变化越快；越平，变化越慢。整条线的走向就是「趋势」，还能帮我们做合理的预测。" }
        ],
        ask: "找一张生活里的折线图（天气 App 的气温曲线就行），给爸爸妈妈讲讲：最高点、最低点在哪里，哪一段变化最快。"
      },
      {
        type: "beauty",
        headline: "会讲故事的线",
        paragraphs: [
          "折线图的本事，是把枯燥的数字变成一眼能懂的故事：上升、下降、猛增、平稳，全写在线条高高低低的舞姿里。",
          "抛一枚硬币，把正面向上的频率画成折线：起先上蹿下跳，抛得越多，越贴近 50% 这条水平线——这就是著名的大数定律。回家和爸爸妈妈抛 100 次试试！",
          "数学家的未解之谜「冰雹猜想」也能画成折线：任取一个数，偶数除以 2、奇数乘 3 加 1，一路算下去，数值像过山车一样起伏——至今没人能证明它最后一定落回 1。去博物馆看看这个谜题吧！"
        ],
        museum: "mys-collatz"
      }
    ]
  }

);
