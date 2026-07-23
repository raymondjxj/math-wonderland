window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[2] = MW.content[2] || { grade: 2, name: "二年级 · 橙光星球", units: [] };
G.units.push(

  /* ================= 单元 12：图形的运动（一）（8 幕探究课） ================= */
  {
    id: "g2u12",
    title: "图形的运动（一）",
    subtitle: "轴对称、平移和旋转",
    tag: "空间",
    minutes: 20,
    inquiry: true,
    scenes: [
      {
        type: "story",
        title: "只剪一半的魔法",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="342" cy="40" r="22" fill="#ffc233"/>
          <rect x="70" y="44" width="260" height="152" rx="12" fill="#ffffff" stroke="#ffcf9e" stroke-width="3"/>
          <line x1="200" y1="48" x2="200" y2="192" stroke="#b25e14" stroke-width="2.5" stroke-dasharray="8 6"/>
          <g fill="#ff8a3d">
            <ellipse cx="162" cy="96" rx="30" ry="20"/>
            <ellipse cx="168" cy="140" rx="22" ry="14"/>
          </g>
          <g fill="#ffb26b">
            <ellipse cx="238" cy="96" rx="30" ry="20"/>
            <ellipse cx="232" cy="140" rx="22" ry="14"/>
          </g>
          <rect x="195" y="76" width="10" height="80" rx="5" fill="#b25e14"/>
          <path d="M197 76 q-9 -16 -18 -18" stroke="#b25e14" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M203 76 q9 -16 18 -18" stroke="#b25e14" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <circle cx="179" cy="58" r="3.5" fill="#b25e14"/>
          <circle cx="221" cy="58" r="3.5" fill="#b25e14"/>
          <g stroke="#8a8aa3" stroke-width="4" fill="none" stroke-linecap="round">
            <line x1="52" y1="196" x2="96" y2="158"/>
            <line x1="96" y1="196" x2="52" y2="158"/>
          </g>
          <circle cx="48" cy="200" r="7" fill="none" stroke="#8a8aa3" stroke-width="4"/>
          <circle cx="100" cy="200" r="7" fill="none" stroke="#8a8aa3" stroke-width="4"/>
          <text x="316" y="224" font-size="16" fill="#b25e14" font-weight="bold">只剪一半？</text>
        </svg>`,
        paragraphs: [
          "橙光星球要办风筝节，小狐狸朵朵在学剪窗花。她把纸对折，咔嚓咔嚓——只剪出了半只蝴蝶。",
          "展开一看，朵朵惊呆了：一只完整的蝴蝶！左边和右边一模一样，连翅膀上的花纹都分毫不差。",
          "更神奇的还在后面：电梯把积木直直地送上楼，一块都没变形；风车呼呼地转，叶片还是那几片。<b>图形的运动里，藏着三个大秘密……</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "先不翻答案，画出你的猜想：纸对折后只剪「一半」，为什么展开就是完整图案？在方格纸上画出你心中那只蝴蝶的「一半」——已打开直尺模式，沿格线画更稳。画完点「我画好了」。",
        config: { interactive: true, grid: true, straightEdge: true },
        successText: "画好了！这是你猜的「一半」。它到底对不对？先别改——接下来仔细观察真正的对称剪纸，再回头验证你的想法。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "朵朵把纸对折，剪出半只蝴蝶：数一数，正好占 3 行 2 列 = 6 格。", state: { rows: 3, cols: 2, showTotal: true } },
          { caption: "展开！折痕另一边「印」出同样的一半：3 行 4 列 = 12 格。左右两边一模一样，对折能完全重合。", state: { rows: 3, cols: 4, showTotal: true } },
          { caption: "电梯把蝴蝶贴纸直直地运上楼：位置变了，还是 3 行 4 列，一块不多一块不少——这样的运动叫平移。", state: { rows: 3, cols: 4, showTotal: true } },
          { caption: "风车叶片转个身：方阵跟着转成 4 行 3 列，还是 12 格——绕着一个点转的运动叫旋转。", state: { rows: 4, cols: 3, showTotal: true } },
          { caption: "比一比：平移和旋转，形状和大小都没变！平移连方向都不变，旋转会换个朝向。", state: { rows: 4, cols: 3, showTotal: true } }
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "猜想时间结束，动手验证！朵朵蝴蝶的左翅正好占 3 行 2 列——摆出和左翅一模一样的右翅。两边完全一样，对折才能重合！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 3, targetCols: 2 },
        successText: "摆好了！左右两翅一模一样：沿折痕对折，能完全重合——你的猜想得到了验证，这就是轴对称的秘密！"
      },
      {
        type: "symbol",
        paragraphs: [
          "观察、猜想、验证都完成了——现在把剪纸、电梯、风车的发现，写成数学的语言：",
          "对折后两边能完全重合的图形，叫轴对称图形；沿直线移动是平移，绕着一个点转是旋转。"
        ],
        formula: "对折后两边完全重合 → 轴对称图形",
        keypoints: [
          "折痕所在的这条直线让左右两边一模一样（以后它会有个正式名字：对称轴）",
          "平移：沿直线移动，形状、大小、方向都不变——电梯升降、推拉抽屉、升国旗",
          "旋转：绕着一个点转动，形状、大小不变，方向改变——风车、风扇、旋转门",
          "剪对称图案的秘密：纸对折后剪一半，两层纸同时成形，展开一定重合"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "下面哪个是轴对称图形？", options: ["对折后两边完全重合的蝴蝶剪纸", "随手撕出的碎纸片", "歪歪扭扭的涂鸦"], answer: 0,
            hint: "想想朵朵的蝴蝶：折痕两边能重合吗？", explain: "轴对称图形对折后，折痕两边能完全重合。碎纸片和涂鸦对折后对不上，不是轴对称。" },
          { type: "choice", level: "基础", q: "电梯从 1 楼升到 5 楼，电梯箱做的是哪种运动？", options: ["平移", "旋转", "对折"], answer: 0,
            hint: "它是直直地沿一条线移动的", explain: "电梯沿直线上下移动，形状、大小、方向都不变，是平移。" },
          { type: "choice", level: "基础", q: "风车叶片绕着中心呼呼转，这是哪种运动？", options: ["平移", "旋转", "变小"], answer: 1,
            hint: "它绕着一个点转圈", explain: "风车绕中心点转动，形状大小不变、方向不停改变，是旋转。" },
          { type: "judge", level: "变式", q: "一个图形平移之后，会越变越小。", answer: false,
            hint: "坐电梯上楼的人，变矮了吗？", explain: "平移只改变位置，形状、大小、方向都不变——当然不会越变越小。" },
          { type: "choice", level: "变式", q: "为什么剪纸只剪一半，展开就能得到完整的蝴蝶？", options: ["对折后两层纸完全重合，剪一半等于同时剪出对称的两半", "因为剪刀特别锋利", "只是碰巧好看"], answer: 0,
            hint: "对折之后，折痕两边是什么关系？", explain: "对折后两层纸完全重合，剪刀一刀走过两层，展开后折痕两边一模一样——这就是轴对称。" },
          { type: "choice", level: "挑战", q: "下面哪个汉字是轴对称图形？", options: ["田", "力", "心"], answer: 0,
            hint: "沿竖直的中线折一折，哪个字左右能重合？", explain: "「田」沿竖直中线对折，左右完全重合；「力」和「心」对折后对不上，不是轴对称。" },
          { type: "fill", level: "温故", q: "还记得吗：3 × 4 = □（乘法的老本领，图形课也用得上）", answer: "12",
            hint: "3 个 4 相加：4 + 4 + 4 = ?", explain: "3 × 4 = 12。蝴蝶翅膀数格子、摆方阵，都要靠乘法帮忙。" },
          { type: "build", level: "开放", q: "用画板设计一个轴对称图案：想象方格纸中间有一条竖直折痕，画出对折后能完全重合的图案（半只蝴蝶、一棵树、一座塔都行）。已打开直尺模式，画完点「我画好了」。",
            widget: "sketchpad", config: { interactive: true, grid: true, straightEdge: true },
            reference: "一种画法：先在折痕左边画出一半（比如半只蝴蝶），再照着格子数，在右边画出左右完全对称的另一半——数一数左右各占几格，就能检查画得对不对。" }
        ]
      },
      {
        type: "review",
        question: "为什么只剪一半，展开就是完整的轴对称图案？平移和旋转又没有改变什么？",
        ways: [
          { name: "折一折", text: "纸对折后两边完全重合，剪一半等于同时剪出对称的两半，展开必然一模一样。" },
          { name: "数一数", text: "蝴蝶左翅 3 行 2 列 = 6 格，右翅也是 6 格：两边一样多，对折才能重合。" },
          { name: "比一比", text: "电梯平移、风车旋转，形状和大小都没变——平移连方向都不变，旋转只换个朝向。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：怎么剪出一个轴对称的窗花？再在家里找一找：哪种运动是平移，哪种是旋转？"
      },
      {
        type: "beauty",
        headline: "万花筒：镜子里的对称魔法",
        paragraphs: [
          "万花筒里只有三面小镜子和一把碎纸片，可只要轻轻一转，就能变出千万种整整齐齐的对称图案。",
          "镜子把碎纸片的影子一次次反射，就像把纸对折再对折——每一朵「花」的四周，都对称得一模一样。",
          "你在剪纸里发现的轴对称，和万花筒里的对称是同一家！去实验室转一转，看看对称还能变出什么花样。"
        ],
        lab: "kaleidoscope"
      }
    ]
  },

  /* ================= 单元 13：数据收集整理 ================= */
  {
    id: "g2u13",
    title: "数据收集整理",
    subtitle: "小调查与统计表",
    tag: "数据",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "水果派对的难题",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="342" cy="40" r="22" fill="#ffc233"/>
          <g>
            <rect x="28" y="50" width="54" height="34" rx="6" fill="#ffffff" stroke="#ffcf9e" stroke-width="2.5" transform="rotate(-6 55 67)"/>
            <rect x="44" y="88" width="54" height="34" rx="6" fill="#ffffff" stroke="#ffcf9e" stroke-width="2.5" transform="rotate(5 71 105)"/>
            <rect x="26" y="126" width="54" height="34" rx="6" fill="#ffffff" stroke="#ffcf9e" stroke-width="2.5" transform="rotate(-4 53 143)"/>
          </g>
          <g stroke="#ff8a3d" stroke-width="2.5" stroke-linecap="round">
            <line x1="44" y1="58" x2="44" y2="76"/><line x1="51" y1="58" x2="51" y2="76"/><line x1="58" y1="58" x2="58" y2="76"/><line x1="65" y1="58" x2="65" y2="76"/>
            <line x1="40" y1="67" x2="69" y2="67"/>
          </g>
          <circle cx="150" cy="66" r="17" fill="#ff6b6b"/>
          <line x1="150" y1="49" x2="150" y2="41" stroke="#7a4a1e" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="159" cy="44" rx="7" ry="3.5" fill="#8bd450"/>
          <path d="M132 128 q18 26 44 10" stroke="#ffc233" stroke-width="11" fill="none" stroke-linecap="round"/>
          <circle cx="152" cy="186" r="16" fill="#ff8a3d"/>
          <ellipse cx="160" cy="170" rx="7" ry="3.5" fill="#8bd450"/>
          <line x1="232" y1="200" x2="392" y2="200" stroke="#b25e14" stroke-width="3" stroke-linecap="round"/>
          <rect x="246" y="120" width="30" height="80" rx="6" fill="#ff6b6b"/>
          <rect x="296" y="150" width="30" height="50" rx="6" fill="#ffc233"/>
          <rect x="346" y="140" width="30" height="60" rx="6" fill="#ff8a3d"/>
          <text x="261" y="112" font-size="15" fill="#b25e14" font-weight="bold" text-anchor="middle">8</text>
          <text x="311" y="142" font-size="15" fill="#b25e14" font-weight="bold" text-anchor="middle">5</text>
          <text x="361" y="132" font-size="15" fill="#b25e14" font-weight="bold" text-anchor="middle">6</text>
          <text x="261" y="218" font-size="12" fill="#5c607a" font-weight="bold" text-anchor="middle">苹果</text>
          <text x="311" y="218" font-size="12" fill="#5c607a" font-weight="bold" text-anchor="middle">香蕉</text>
          <text x="361" y="218" font-size="12" fill="#5c607a" font-weight="bold" text-anchor="middle">橙子</text>
          <text x="200" y="26" font-size="15" fill="#b25e14" font-weight="bold">19 张纸条乱糟糟？</text>
        </svg>`,
        paragraphs: [
          "橙光森林幼儿园要办水果派对啦！小熊老师挠着头：苹果、香蕉、橙子，到底该多买哪种？",
          "小兔子说：「问问大家呀！」全班 19 个小朋友举手投票，结果记在 19 张小纸条上——纸条堆成小山，乱得根本数不清。",
          "奇奇一拍脑门：先把数据整理好，答案一眼就能看出来！<b>怎么做调查、怎么整理数据？今天就来学会它！</b>"
        ]
      },
      {
        type: "play",
        widget: "chart",
        prompt: "先来把调查数据「种」进条形图！对照数据表：苹果 8 票、香蕉 5 票、橙子 6 票——用 −/＋ 按钮把三根柱子调到正确的高度。",
        config: { interactive: true, mode: "bar", data: [{ label: "苹果", value: 2 }, { label: "香蕉", value: 7 }, { label: "橙子", value: 3 }], targets: [8, 5, 6], targetsText: "苹果 8、香蕉 5、橙子 6" },
        successText: "调好了！柱子和调查表完全对上了——条形图就是用「高度」把数据画出来，谁多谁少，一目了然！"
      },
      {
        type: "anim",
        widget: "chart",
        steps: [
          { caption: "第一步·收集：每人举一次手，19 张选票收齐啦。选票乱糟糟的，得想个办法数清楚。", state: { mode: "bar", data: [{ label: "苹果", value: 8 }, { label: "香蕉", value: 5 }, { label: "橙子", value: 6 }], title: "水果派对小调查", highlight: -1, showValues: true } },
          { caption: "第二步·记录：用画「正」字的方法记票——一个「正」字正好 5 画，五个五个数，又快又准。", state: { mode: "bar", data: [{ label: "苹果", value: 8 }, { label: "香蕉", value: 5 }, { label: "橙子", value: 6 }], title: "水果派对小调查", highlight: -1, showValues: true } },
          { caption: "第三步·整理：把记好的票数填进统计表：苹果 8 票、香蕉 5 票、橙子 6 票。再检查一遍：8 + 5 + 6 = 19 人，和全班人数一样，没有漏记！", state: { mode: "bar", data: [{ label: "苹果", value: 8 }, { label: "香蕉", value: 5 }, { label: "橙子", value: 6 }], title: "水果派对小调查", highlight: -1, showValues: true } },
          { caption: "第四步·画图：一种水果画一根柱子，有几票就画多高——苹果的柱子一下子蹿得最高！", state: { mode: "bar", data: [{ label: "苹果", value: 8 }, { label: "香蕉", value: 5 }, { label: "橙子", value: 6 }], title: "最爱水果条形图", highlight: 0, showValues: true } },
          { caption: "第五步·读图：不用一个个数，看高度就知道：苹果 8 票最多，香蕉 5 票最少。派对多买苹果，准没错！", state: { mode: "bar", data: [{ label: "苹果", value: 8 }, { label: "香蕉", value: 5 }, { label: "橙子", value: 6 }], title: "最爱水果条形图", highlight: 0, showValues: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把这场小调查的全过程，写成数学的语言：",
          "收集数据（举手投票）→ 记录数据（画正字）→ 整理成统计表 → 画成条形图。一步一步，乱糟糟的纸条就变成了会说话的图！"
        ],
        formula: "8 + 5 + 6 = 19（人）",
        keypoints: [
          "收集数据：一人一票，不能重复，也不能漏掉",
          "画「正」字记票：一个正字 5 画，五个五个数最快",
          "统计表：每种水果几票，写得清清楚楚",
          "条形图：票越多柱子越高，谁多谁少一眼看出"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "最喜欢苹果的有 □ 人。", answer: "8",
            hint: "看统计表或条形图里「苹果」那一栏", explain: "统计表和条形图都写着：苹果 8 票。" },
          { type: "choice", level: "基础", q: "最喜欢哪种水果的人最多？", options: ["苹果", "香蕉", "橙子"], answer: 0,
            hint: "找最高的那根柱子", explain: "苹果 8 票最高，8 > 6 > 5，最喜欢苹果的人最多。" },
          { type: "choice", level: "变式", q: "最喜欢香蕉的比最喜欢橙子的少几人？", options: ["1 人", "5 人", "11 人"], answer: 0,
            hint: "香蕉 5 票，橙子 6 票：6 − 5 = ?", explain: "6 − 5 = 1，少 1 人。读图先看清每个数，再比一比。" },
          { type: "choice", level: "变式", q: "为什么记票时大家爱用画「正」字？", options: ["一个「正」字正好 5 画，五个五个数又快又不容易错", "因为「正」字写出来最好看", "随便画着玩，没有原因"], answer: 0,
            hint: "想想 5、10、15…… 数数的节奏", explain: "「正」字 5 画一个，五个五个数：5、10、15…… 比一个个数圆圈快得多，还不容易数错。" },
          { type: "fill", level: "挑战", q: "全班一共有 □ 个小朋友参加了投票。", answer: "19",
            hint: "把三种水果的票数全加起来", explain: "8 + 5 + 6 = 19 人。加起来正好等于全班人数，说明没有漏记、重记。" },
          { type: "choice", level: "挑战", q: "又有 2 个小朋友补票，都投给香蕉。现在票数最少的还是香蕉吗？", options: ["不是了，香蕉 7 票，超过了橙子的 6 票", "还是香蕉最少", "香蕉变成最多了"], answer: 0,
            hint: "5 + 2 = 7，再和 6、8 比一比", explain: "香蕉 5 + 2 = 7 票，7 > 6，橙子变成最少的了。数据变了，结论也会跟着变！" },
          { type: "choice", level: "温故", q: "还记得吗：角的大小由什么决定？", options: ["两条边张开的大小", "两条边的长短", "两条边的粗细"], answer: 0,
            hint: "用放大镜看一个角，角会变大吗？", explain: "角的大小只看两条边张开的大小，和边的长短、粗细都没关系。" },
          { type: "open", level: "开放", q: "如果让你在班里做一次小调查，你想调查什么？说说你准备怎么收集和记录数据。", placeholder: "我想调查…… 我会用…… 来记录",
            reference: "参考想法：调查大家最喜欢的运动——每人举一次手（一人一票，不重复不遗漏），用画「正」字的方法记票，最后填进统计表、画出条形图。" }
        ]
      },
      {
        type: "review",
        question: "怎么知道全班小朋友最喜欢哪种水果？你能找出几种办法？",
        ways: [
          { name: "举手数一数", text: "一种水果举一次手：苹果 8 人、香蕉 5 人、橙子 6 人，直接比出苹果最多。" },
          { name: "画正字", text: "边问边画「正」：苹果是一个正字多 3 画（8 票），五个五个数，又快又准。" },
          { name: "看条形图", text: "一根柱子一种水果：苹果的柱子最高，不用数也知道它票数最多。" }
        ],
        ask: "给爸爸妈妈讲讲：为什么画「正」字比画圆圈更好数？再试试调查全家三口人最爱吃的菜，把结果填进一张小表格！"
      },
      {
        type: "beauty",
        headline: "冰雹猜想：从一大堆数据里挖出的谜",
        paragraphs: [
          "收集数据、整理数据，可不只是数水果——科学家靠它发现大秘密！随便拿一个数：是偶数就除以 2，是奇数就乘 3 加 1，一直变下去……",
          "比如 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1，像冰雹一样上上下下，最后总会掉到 1。这就是著名的「冰雹猜想」。",
          "人们收集了海量数字的变化数据，至今没找到一个例外，却也没人能证明它永远正确。去博物馆看看这个让全世界数学家着迷的谜！"
        ],
        museum: "mys-collatz"
      }
    ]
  }
);
