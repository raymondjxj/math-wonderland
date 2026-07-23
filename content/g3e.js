/* ============================================================
   数学奇境 · 三年级扩展单元 v2（g3e：push 模式，全教材覆盖冲刺）
   单元：12 小数的初步认识 / 13 位置与方向（一） / 14 复式统计表
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[3] = MW.content[3] || { grade: 3, name: "三年级 · 青绿星球", units: [] };
G.units.push(

  /* ================= 单元 12：小数的初步认识 ================= */
  {
    id: "g3u12",
    title: "小数的初步认识",
    subtitle: "一个小圆点，量出半个世界",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "果汁店里的神秘小圆点",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e6f9f5"/>
          <circle cx="348" cy="38" r="22" fill="#ffd166"/>
          <rect x="60" y="64" width="280" height="126" rx="14" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
          <path d="M48 72 L352 72 L330 38 L70 38 Z" fill="#2ec4b6"/>
          <path d="M48 72 L352 72 L352 81 L48 81 Z" fill="#0e7c74" opacity=".35"/>
          <rect x="84" y="94" width="104" height="58" rx="10" fill="#0e7c74"/>
          <text x="136" y="132" font-size="24" fill="#ffffff" font-weight="bold" text-anchor="middle">3.5 元</text>
          <rect x="212" y="94" width="104" height="58" rx="10" fill="#2ec4b6"/>
          <text x="264" y="132" font-size="24" fill="#ffffff" font-weight="bold" text-anchor="middle">0.9 元</text>
          <rect x="118" y="162" width="26" height="24" rx="5" fill="#9be7dd" stroke="#0e7c74" stroke-width="2.5"/>
          <line x1="136" y1="150" x2="128" y2="164" stroke="#e04f4f" stroke-width="4" stroke-linecap="round"/>
          <rect x="250" y="162" width="26" height="24" rx="5" fill="#ffd166" stroke="#d96a00" stroke-width="2.5"/>
          <line x1="268" y1="150" x2="260" y2="164" stroke="#e04f4f" stroke-width="4" stroke-linecap="round"/>
          <text x="200" y="222" font-size="16" fill="#0e7c74" font-weight="bold" text-anchor="middle">🥤 数中间的小圆点，是什么？</text>
        </svg>`,
        paragraphs: [
          "青绿星球的果汁店开张啦！小店主芽芽把价格牌挂出来：青柠汁 3.5 元，蜜桃汁 0.9 元。",
          "小顾客嘀嘀盯着牌子看了半天：3.5？这个数中间怎么有个小圆点？它比 3 大，还是比 4 大？",
          "芽芽笑了：「这叫小数！3.5 元就是 3 元 5 角。」<b>小数到底藏着什么秘密？这一课，我们把它看个明白。</b>"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先动手感受一下：这条长条被平均分成了 10 份。涂出 3 份——涂好的部分就是十分之三，它还能写成一个带小圆点的数！",
        config: { interactive: true, shape: "bar", parts: 10, target: 3 },
        successText: "涂好了！10 份里的 3 份 = 3/10，写成小数是 0.3。小数点后面那个数字，说的就是「十份里有几份」。"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "一条长条平均分成 10 份，先什么都不涂。", state: { shape: "bar", parts: 10, shaded: 0, showLabel: true } },
          { caption: "涂上 1 份：十分之一，写成小数是 0.1。小数点后面的 1，就是 10 份里的 1 份。", state: { shape: "bar", parts: 10, shaded: 1, showLabel: true } },
          { caption: "涂 3 份：3 个 0.1 加起来，是 0.3。", state: { shape: "bar", parts: 10, shaded: 3, showLabel: true } },
          { caption: "涂 7 份：7 个 0.1，是 0.7。", state: { shape: "bar", parts: 10, shaded: 7, showLabel: true } },
          { caption: "涂满 10 份：10 个 0.1 正好拼成整个 1！所以 1.0 就是 1。", state: { shape: "bar", parts: 10, shaded: 10, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「十分之几」写成小数，只要一个小圆点：",
          "小数点左边是完整的几个 1，右边第一位是十份里的几份。元角分里，天天都能见到它。"
        ],
        formula: "1/10 = 0.1，0.1 元 = 1 角",
        keypoints: [
          "小数点「.」左边表示几个 1，右边第一位表示几个 0.1",
          "0.1 元 = 1 角，3.5 元 = 3 元 5 角",
          "比大小：先比小数点左边；左边相同，再比右边——0.8 > 0.6",
          "一位小数相加减：小数点对齐再算——0.7 + 0.2 = 0.9"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "0.4 元是几角？", options: ["4 元", "4 角", "40 角", "1 角"], answer: 1,
            hint: "0.1 元 = 1 角，那 0.4 元是几个 0.1 元？", explain: "0.4 元是 4 个 0.1 元，也就是 4 个 1 角 = 4 角。" },
          { type: "fill", level: "基础", q: "十分之七写成小数是 ＿＿。", answer: "0.7",
            hint: "10 份里的 7 份，小数点后面写几？", explain: "7/10 就是 7 个 0.1，写成小数是 0.7。" },
          { type: "choice", level: "变式", q: "为什么 0.1 元正好等于 1 角？", options: ["因为 1 元 = 10 角，平均分成 10 份，每份 1 角就是 0.1 元", "因为小数点很神奇", "只是碰巧一样"], answer: 0,
            hint: "想想 1 元可以换几个 1 角", explain: "1 元 = 10 角，1 角正好是 1 元的十分之一，写成小数就是 0.1 元。" },
          { type: "choice", level: "变式", q: "比一比：0.8 ○ 0.6，○ 里填什么？", options: [">", "<", "="], answer: 0,
            hint: "8 个 0.1 和 6 个 0.1，哪个多？", explain: "0.8 是 8 个 0.1，0.6 是 6 个 0.1，8 > 6，所以 0.8 > 0.6。" },
          { type: "choice", level: "挑战", q: "买一块橡皮 0.5 元、一把尺子 0.9 元，一共要付多少元？", options: ["1.4 元", "0.4 元", "5.9 元", "1.3 元"], answer: 0,
            hint: "0.5 + 0.9：5 个 0.1 加 9 个 0.1 是几个 0.1？", explain: "0.5 + 0.9 = 1.4 元。14 个 0.1 是 1 又 0.4，小数点满十要向前进 1。" },
          { type: "fill", level: "挑战", q: "2.5 − 1.3 = ＿＿", answer: "1.2",
            hint: "小数点对齐：先算 5 − 3，再算 2 − 1", explain: "0.5 − 0.3 = 0.2，2 − 1 = 1，合起来 2.5 − 1.3 = 1.2。" },
          { type: "fill", level: "温故", q: "还记得吗：以前学过，1 元 = ＿＿ 角。", answer: "10",
            hint: "一张 1 元能换几张 1 角？", explain: "1 元 = 10 角。正因为 1 元能平均分成 10 角，1 角才可以写成 0.1 元。" },
          { type: "fill", level: "开放", q: "写出一个比 0.5 大的小数（答案不唯一）。", check: { gt: 0.5 }, answer: "0.6",
            hint: "比 5 个 0.1 再多一点点就行", explain: "0.6、0.7、0.9、1.2……答案有无数个！只要比 0.5 大都对。" }
        ]
      },
      {
        type: "review",
        question: "0.3 为什么和十分之三一样大？",
        ways: [
          { name: "分数条", text: "长条平均分成 10 份，涂 3 份：写作 3/10，也写作 0.3——同一块涂色，两种写法。" },
          { name: "元角分", text: "3 角是 1 元的 3/10，也就是 0.3 元——换钱时对得严丝合缝。" },
          { name: "数一数", text: "0.1、0.2、0.3——0.3 就是 3 个 0.1 一个挨一个连起来。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 0.9 再加 0.1 就变成 1 了？（可以画一条 10 格的长条给他们看）"
      },
      {
        type: "beauty",
        headline: "小数点轻轻一点，量出整个宇宙",
        paragraphs: [
          "有了小数点，尺子上两格之间的缝隙也能写得清清楚楚：1.4 米、0.05 克……世界忽然变精细了。",
          "早在一千七百年前，我国数学家刘徽就提出了「微数」，是世界上最早的小数思想；祖冲之爷爷更把圆周率算到 3.1415926 和 3.1415927 之间，领先世界约一千年。",
          "而把 1.618… 这个写不完的小数画出来，就是美丽的黄金螺旋——去实验室里亲眼看看它吧！"
        ],
        lab: "fibonacci",
        museum: "ppl-zu"
      }
    ]
  },

  /* ================= 单元 13：位置与方向（一） ================= */
  {
    id: "g3u13",
    title: "位置与方向（一）",
    subtitle: "东南西北，做校园小向导",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "开学第一天就迷路的小刺猬",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e6f9f5"/>
          <circle cx="56" cy="54" r="26" fill="#ffd166"/>
          <g stroke="#f0a832" stroke-width="4" stroke-linecap="round">
            <line x1="56" y1="14" x2="56" y2="22"/><line x1="14" y1="54" x2="22" y2="54"/>
            <line x1="28" y1="28" x2="34" y2="34"/><line x1="84" y1="28" x2="78" y2="34"/>
          </g>
          <text x="92" y="40" font-size="15" fill="#d96a00" font-weight="bold">太阳升起的方向 = 东</text>
          <rect x="150" y="96" width="150" height="84" rx="10" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
          <path d="M140 100 L310 100 L225 60 Z" fill="#2ec4b6"/>
          <rect x="205" y="132" width="40" height="48" rx="6" fill="#0e7c74"/>
          <rect x="166" y="112" width="24" height="20" rx="4" fill="#9be7dd"/>
          <rect x="260" y="112" width="24" height="20" rx="4" fill="#9be7dd"/>
          <circle cx="338" cy="188" r="30" fill="#ffffff" stroke="#0e7c74" stroke-width="3"/>
          <path d="M338 166 L345 188 L338 182 L331 188 Z" fill="#e04f4f"/>
          <path d="M338 210 L331 188 L338 194 L345 188 Z" fill="#2ec4b6"/>
          <text x="338" y="158" font-size="13" fill="#0e7c74" font-weight="bold" text-anchor="middle">北</text>
          <text x="70" y="212" font-size="16" fill="#0e7c74" font-weight="bold">🦔 图书馆在哪个方向？</text>
        </svg>`,
        paragraphs: [
          "清晨，青绿小学门口，小刺猬果果急得快哭了：开学第一天，他就找不到图书馆了！",
          "门卫爷爷不慌不忙，指指天上：「孩子，太阳从哪边升起来的？」「那边！」「那就是东方。认准方向，校园里就丢不了啦。」",
          "东南西北，到底怎么认？地图上的方向又藏着什么约定？<b>学会这一课，你就是全校最棒的「小向导」！</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "先当一回小向导：青绿小学的校门在最南边，图书馆在最北边。在方格画板上画出「从校门到图书馆的路线」——可以直走，也可以转弯，画完点「我画好了」。",
        config: { interactive: true, grid: true, straightEdge: false },
        successText: "路线画好了！一直向北走就能到。不过真正的校园里常常要转弯——想把路线说清楚，得先学会说方向。"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "把校园画成方格地图。先记住口诀：上北、下南、左西、右东。", state: { rows: 4, cols: 4, filled: 0, showCount: false } },
          { caption: "最北面的一行亮起来：教学楼，在学校的北边。", state: { rows: 4, cols: 4, filled: 4, showCount: false } },
          { caption: "教学楼南面的两行，是每天做课间操的大操场。", state: { rows: 4, cols: 4, filled: 12, showCount: false } },
          { caption: "最南面的一行：校门和花坛。从校门一直向北走，穿过操场，就到教学楼啦。", state: { rows: 4, cols: 4, filled: 16, showCount: false } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「认方向」写成数学的语言：",
          "地图和平面图，全世界都按同一个约定来画：上北、下南、左西、右东。"
        ],
        formula: "上北 · 下南 · 左西 · 右东",
        keypoints: [
          "太阳每天从东方升起、从西方落下——大自然就是最好的指南针",
          "看地图先找「北」，其余三个方向跟着排好队",
          "方向是相对的：图书馆在操场北面，操场就在图书馆南面",
          "说路线要讲清：从哪里出发，向什么方向走"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "早晨，太阳从哪个方向升起？", options: ["东方", "西方", "南方", "北方"], answer: 0,
            hint: "想想故事里门卫爷爷指的方向", explain: "太阳每天从东方升起，从西方落下。" },
          { type: "choice", level: "基础", q: "看地图时，地图的上面是什么方向？", options: ["南", "北", "东", "西"], answer: 1,
            hint: "口诀：上北、下南、左西、右东", explain: "地图按「上北下南左西右东」来画，上面是北。" },
          { type: "choice", level: "变式", q: "为什么地图要统一按「上北下南」来画？", options: ["统一约定，大家看同一张地图才不会乱", "因为北边的风景好看", "只是碰巧这样"], answer: 0,
            hint: "如果每张地图画法都不一样，会怎样？", explain: "约定统一，你画的地图我也能看懂。各画各的，方向就对不上了。" },
          { type: "choice", level: "变式", q: "图书馆在操场的北面，那么操场在图书馆的哪一面？", options: ["北面", "南面", "东面", "西面"], answer: 1,
            hint: "方向是相对的：北的反义词是……", explain: "北和南相对：A 在 B 的北面，B 就在 A 的南面。" },
          { type: "choice", level: "挑战", q: "傍晚放学，果果面向太阳（西边）站着，他的右手边是什么方向？", options: ["南", "东", "北", "西"], answer: 2,
            hint: "伸开双臂试一试：面向西时，左手指南", explain: "面向西站：前面西、后面东、左手南、右手北。" },
          { type: "judge", level: "挑战", q: "刮北风的日子，红旗会向南飘。", answer: true,
            hint: "北风是从北方吹来的风，它往哪边吹？", explain: "北风从北吹向南，旗子顺着风向南边飘。是对的。" },
          { type: "fill", level: "温故", q: "还记得吗：前面学过，1 小时 = ＿＿ 分钟。", answer: "60",
            hint: "分针走完一整圈，就是 1 小时", explain: "1 小时 = 60 分钟。认时间和认方向一样，都是生活里天天用的本领。" },
          { type: "open", level: "开放", q: "想一想，写一写：你的座位在教室门的什么方向？试着用「我的座位在门的＿＿面」说一说。",
            placeholder: "我的座位在门的……",
            reference: "参考想法：先找到教室门的位置，再按方向判断。比如：「门在教室南面，我的座位在门的北面。」能说清「谁在谁的哪一面」，就是合格的小向导！" }
        ]
      },
      {
        type: "review",
        question: "到了陌生的地方，怎样快速分清东南西北？",
        ways: [
          { name: "看太阳", text: "早晨太阳在东，傍晚在西——伸出手一指，方向就有了。" },
          { name: "用口诀", text: "地图上统一「上北、下南、左西、右东」，先找到北，其余三个方向跟着排好队。" },
          { name: "找标志", text: "记住一个熟悉的建筑，比如校门在南边，再推算别的地方。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么说方向是「相对」的？（可以举「图书馆在操场北面，操场在图书馆南面」这个例子）"
      },
      {
        type: "beauty",
        headline: "从洛书九宫到指南针：中国人的方向智慧",
        paragraphs: [
          "四千多年前，传说神龟从洛水浮出，背上刻着神奇的九宫图：「戴九履一，左三右七」——数字各就各位，南北东西各有其数，这就是著名的洛书。",
          "后来，中国人发明了指南鱼和指南针，茫茫大海上也能认准方向。郑和的宝船队七下西洋，靠的就是这份「方向感」。",
          "去实验室转动洛书幻方，看看每个方位上的数字，藏着怎样的秘密吧！"
        ],
        lab: "magic-square",
        museum: "his-suanchou"
      }
    ]
  },

  /* ================= 单元 14：复式统计表 ================= */
  {
    id: "g3u14",
    title: "复式统计表",
    subtitle: "两张表合一比，高低立见",
    tag: "数据",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "两个班吵起来了",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e6f9f5"/>
          <rect x="30" y="58" width="130" height="112" rx="10" fill="#ffffff" stroke="#2ec4b6" stroke-width="3"/>
          <rect x="30" y="58" width="130" height="26" rx="10" fill="#2ec4b6"/>
          <text x="95" y="76" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">三（1）班</text>
          <g font-size="13" fill="#0e7c74">
            <text x="46" y="106">跑步 8</text>
            <text x="46" y="130">跳绳 12</text>
            <text x="46" y="154">踢球 10</text>
          </g>
          <rect x="240" y="58" width="130" height="112" rx="10" fill="#ffffff" stroke="#2ec4b6" stroke-width="3"/>
          <rect x="240" y="58" width="130" height="26" rx="10" fill="#2ec4b6"/>
          <text x="305" y="76" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">三（2）班</text>
          <g font-size="13" fill="#0e7c74">
            <text x="256" y="106">跑步 6</text>
            <text x="256" y="130">跳绳 14</text>
            <text x="256" y="154">踢球 9</text>
          </g>
          <circle cx="200" cy="114" r="24" fill="#ffd166"/>
          <text x="200" y="122" font-size="26" fill="#7a4d00" font-weight="bold" text-anchor="middle">?</text>
          <text x="200" y="212" font-size="16" fill="#0e7c74" font-weight="bold" text-anchor="middle">📊 两张表翻来翻去，怎么比？</text>
        </svg>`,
        paragraphs: [
          "青绿小学春季运动会刚结束，广播里却吵翻了天：三（1）班说「我们才是运动最强班」，三（2）班喊「明明是我们！」",
          "小裁判青青手里有两张纸：一张记着 1 班各项目的人数，一张记着 2 班的。她来回翻，翻得眼都花了：「两张表换来换去，根本没法比嘛！」",
          "要是能把两张表合成一张大表，两个班的数据肩并肩排在一起……<b>比一比，立刻见分晓！</b>"
        ]
      },
      {
        type: "play",
        widget: "chart",
        prompt: "先帮青青把数据摆出来：对照下面的复式数据表，用 －/＋ 把 6 根条形调到正确的高度——左边三根是三（1）班，右边三根是三（2）班。",
        config: {
          interactive: true,
          mode: "bar",
          data: [
            { label: "1班·跑", value: 5 }, { label: "1班·跳", value: 5 }, { label: "1班·踢", value: 5 },
            { label: "2班·跑", value: 5 }, { label: "2班·跳", value: 5 }, { label: "2班·踢", value: 5 }
          ],
          targets: [8, 12, 10, 6, 14, 9],
          targetsText: "1班：跑步 8、跳绳 12、踢球 10；2班：跑步 6、跳绳 14、踢球 9"
        },
        successText: "调好了！6 根条形肩并肩：一眼就能看出两个班谁更爱跳绳。数据排在一起，比较就方便了——这正是复式统计表的本领！"
      },
      {
        type: "anim",
        widget: "chart",
        steps: [
          { caption: "先看三（1）班：跑步 8 人、跳绳 12 人、踢球 10 人，跳绳最受欢迎。", state: { mode: "bar", data: [{ label: "跑步", value: 8 }, { label: "跳绳", value: 12 }, { label: "踢球", value: 10 }], title: "三（1）班最喜欢的运动", highlight: -1, showValues: true } },
          { caption: "再看三（2）班：跑步 6 人、跳绳 14 人、踢球 9 人。", state: { mode: "bar", data: [{ label: "跑步", value: 6 }, { label: "跳绳", value: 14 }, { label: "踢球", value: 9 }], title: "三（2）班最喜欢的运动", highlight: -1, showValues: true } },
          { caption: "合成一张图：每个项目两个班肩并肩，一眼就能比。", state: { mode: "bar", data: [{ label: "1班·跑", value: 8 }, { label: "1班·跳", value: 12 }, { label: "1班·踢", value: 10 }, { label: "2班·跑", value: 6 }, { label: "2班·跳", value: 14 }, { label: "2班·踢", value: 9 }], title: "两个班合在一起比一比", highlight: -1, showValues: true } },
          { caption: "盯住跳绳：1 班 12 人，2 班 14 人——2 班多 2 人。一对比，答案自己跳出来！", state: { mode: "bar", data: [{ label: "1班·跑", value: 8 }, { label: "1班·跳", value: 12 }, { label: "1班·踢", value: 10 }, { label: "2班·跑", value: 6 }, { label: "2班·跳", value: 14 }, { label: "2班·踢", value: 9 }], title: "发现：跳绳谁更多", highlight: 4, showValues: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把两张单式统计表合并，就得到复式统计表：",
          "表头里多了「班级」，每个项目、每个班的人数，都有了自己的格子。"
        ],
        formula: "复式统计表 = 两张（或多张）单式表合并成一张",
        keypoints: [
          "读表先看表头：横行是项目，竖列是班级，交叉的格子里是人数",
          "复式表最大的本领：便于比较——同一项目，两个班一眼比出多少",
          "还能提出新问题：一共有多少人？哪个班多？多几人？",
          "画成条形图也一样：两个班的条形并排站，高低立见"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "看表回答：三（1）班喜欢跳绳的有多少人？", options: ["8 人", "12 人", "10 人", "14 人"], answer: 1,
            hint: "找到「1 班」和「跳绳」交叉的格子", explain: "三（1）班喜欢跳绳的有 12 人。" },
          { type: "choice", level: "基础", q: "三（2）班喜欢哪项运动的人最多？", options: ["跑步", "跳绳", "踢球"], answer: 1,
            hint: "2 班：跑步 6、跳绳 14、踢球 9，哪个数最大？", explain: "14 最大，三（2）班喜欢跳绳的人最多。" },
          { type: "choice", level: "变式", q: "为什么要把两张单式表合并成复式统计表？", options: ["两个班的数据肩并肩，一眼就能比较", "因为大纸更好看", "老师规定的，不用问"], answer: 0,
            hint: "想想青青翻两张纸翻得眼花的烦恼", explain: "两张表翻来翻去不好比；合并后同一项目两个班并排，比较、提问都方便。" },
          { type: "choice", level: "变式", q: "两个班喜欢跑步的一共有多少人？", options: ["8 人", "14 人", "6 人", "2 人"], answer: 1,
            hint: "1 班 8 人 + 2 班 6 人", explain: "8 + 6 = 14 人。复式表不光能比，还能合起来算总数。" },
          { type: "fill", level: "挑战", q: "三（2）班喜欢跳绳的比三（1）班多 ＿＿ 人。", answer: "2",
            hint: "14 − 12 = ？", explain: "14 − 12 = 2，三（2）班喜欢跳绳的多 2 人。" },
          { type: "choice", level: "挑战", q: "学校想为最受欢迎的项目多准备器材。看表，应该多准备哪项？", options: ["跑步", "踢球", "跳绳"], answer: 2,
            hint: "把两个班加起来比一比：跑步 14、踢球 19、跳绳 26", explain: "跳绳 12 + 14 = 26 人，是最多的，应该多准备跳绳。" },
          { type: "fill", level: "温故", q: "还记得吗：二年级统计课学过，画「正」字记票，一个「正」字代表 ＿＿ 票。", answer: "5",
            hint: "数一数「正」字有几笔", explain: "一个「正」字 5 笔，代表 5 票。收集数据用「正」字，整理数据用统计表。" },
          { type: "open", level: "开放", q: "如果请你调查全班同学「最喜欢的课外活动」，你打算怎么收集数据、怎么记录？写出你的小计划。",
            placeholder: "我的调查小计划：第一步……",
            reference: "参考想法：先想好要调查的类别（如看书、运动、画画），再逐个问同学、画「正」字记录，最后数一数每项有几票，填进统计表。能想到「先分类、再记录、最后数一数」，计划就很完整啦！" }
        ]
      },
      {
        type: "review",
        question: "从这张复式统计表里，怎样看出两个班谁更强？",
        ways: [
          { name: "逐项比", text: "同一项目比一比：跑步 1 班 8 > 6 领先，跳绳 2 班 14 > 12 反超。" },
          { name: "算总数", text: "三项加起来：1 班 8 + 12 + 10 = 30 人，2 班 6 + 14 + 9 = 29 人——总数 1 班多 1 人。" },
          { name: "看条形", text: "画成条形图，两根条并排站，哪边高一眼就看见。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：复式统计表比两张单式表好在哪里？（可以拿两个班跳绳的例子说给他们听）"
      },
      {
        type: "beauty",
        headline: "从结绳记事到大数据：统计改变世界的三千年",
        paragraphs: [
          "远古时代没有数字，人们用绳子打结记录猎物的数量：一只鹿打一个结，十只羊打一排结——这就是人类最早的「统计表」。",
          "如今，统计的本领越来越大：医生用它追踪病毒，气象员用它预报天气，你每天走了多少步，手环也在悄悄帮你统计着。",
          "就连抛硬币这样「全凭运气」的事，抛上几千次，正反面也会乖乖各占一半——数据里藏着秩序，这就是统计之美！"
        ],
        museum: "his-jiesheng"
      }
    ]
  }
);
