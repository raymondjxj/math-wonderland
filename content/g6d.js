/* ============================================================
   数学奇境 · 六年级扩展单元（对齐人教版六年级上册）
   单元：9 位置与方向（二） / 10 扇形统计图 / 11 数与形（数学广角）
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   g6u11 为 inquiry:true 8 幕探究课
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[6] = MW.content[6] || { grade: 6, name: "六年级 · 玫瑰星球", units: [] };
G.units.push(

  /* ================= 单元 9：位置与方向（二） ================= */
  {
    id: "g6u9",
    title: "位置与方向（二）",
    subtitle: "方向 + 距离 = 唯一的位置",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "藏宝图上的暗号",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="344" cy="40" r="22" fill="#ffd6ec"/>
          <circle cx="120" cy="130" r="72" fill="#fff" stroke="#f15bb5" stroke-width="3"/>
          <line x1="120" y1="72" x2="120" y2="188" stroke="#f3c6e3" stroke-width="2"/>
          <line x1="62" y1="130" x2="178" y2="130" stroke="#f3c6e3" stroke-width="2"/>
          <text x="120" y="66" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">北</text>
          <text x="120" y="206" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">南</text>
          <text x="50" y="135" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">西</text>
          <text x="190" y="135" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">东</text>
          <line x1="120" y1="130" x2="185" y2="92.5" stroke="#f15bb5" stroke-width="4" stroke-linecap="round"/>
          <path d="M 150 130 A 30 30 0 0 0 146 115" fill="none" stroke="#b03a82" stroke-width="2"/>
          <text x="150" y="114" font-size="12" fill="#b03a82" font-weight="bold">30°</text>
          <circle cx="120" cy="130" r="5" fill="#b03a82"/>
          <path d="M185 78 l4.5 9.2 10.1 1.4 -7.3 7.1 1.7 10 -9 -4.7 -9 4.7 1.7 -10 -7.3 -7.1 10.1 -1.4 Z" fill="#ffc233" stroke="#e0a91f" stroke-width="2"/>
          <text x="120" y="228" font-size="13" fill="#b03a82" text-anchor="middle">图上 1 厘米 = 实际 100 米</text>
          <text x="292" y="96" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">宝盒在灯塔的</text>
          <text x="292" y="118" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">「东北边」300 米</text>
          <text x="292" y="152" font-size="15" fill="#f15bb5" text-anchor="middle" font-weight="bold">东北边这么大，</text>
          <text x="292" y="174" font-size="15" fill="#f15bb5" text-anchor="middle" font-weight="bold">到底埋哪儿？</text>
          <text x="292" y="206" font-size="16" fill="#b03a82" text-anchor="middle" font-weight="bold">🗺️ 星光宝盒藏宝图</text>
        </svg>`,
        paragraphs: [
          "玫瑰星球的沙丘下，埋着传说中的星光宝盒。朵朵得到一张藏宝图：「宝盒在玫瑰灯塔的东北边，300 米处。」",
          "朵朵跑到灯塔下朝东北边望去——天哪，东北边是一大片扇形沙滩！往左偏一点、往右偏一点，连挖三个坑，坑里全是沙子。",
          "浣熊爷爷拄着铲子赶来：「傻孩子，『东北边』太模糊啦。要说清一个位置，得用两样东西……」<b>到底是哪两样？</b>"
        ]
      },
      {
        type: "play",
        widget: "angle",
        prompt: "藏宝图的真正暗号是「东偏北 30°」。拖动滑块，以正东为基准，向北摆出 30° 的方向角——量角器已经打开，对准了再停！",
        config: { interactive: true, deg: 90, target: 30, tolerance: 3, showProtractor: true },
        successText: "摆好了！从正东向北偏 30°，这条粉红色的射线就是宝盒所在的方向。方向定下来了，还差一样——距离。"
      },
      {
        type: "anim",
        widget: "angle",
        steps: [
          { caption: "以灯塔为观测点：水平向右是正东，竖直向上是正北。方向角要从正方向量起。", state: { deg: 90, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "「东偏北 30°」：从正东出发，向北偏转 30°。这条射线，就是宝盒所在的方向。", state: { deg: 30, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "同一条射线还有另一个名字：「北偏东 60°」。30° + 60° = 90°，说的是同一个方向！", state: { deg: 30, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "方向只定了一条线，宝盒在线上的哪一点？还要量距离：图上 1 厘米 = 实际 100 米，300 米就沿射线量 3 厘米。", state: { deg: 30, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "方向定线、距离定点，两样齐全，位置唯一：宝盒在灯塔的东偏北 30° 方向 300 米处。开挖！", state: { deg: 30, showArc: true, showLabel: true, showProtractor: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把找宝盒的办法，写成数学的语言：",
          "用方向和距离确定位置：先定观测点，再量方向角，最后算距离。"
        ],
        formula: "位置 = 方向（角度）+ 距离",
        keypoints: [
          "方向角从正方向量起：东偏北 30°，是从正东向北偏 30°",
          "同一个方向有两种说法：东偏北 30° = 北偏东 60°（两个角合起来是 90°）",
          "距离用比例尺换算：图上 1 厘米 = 实际 100 米，300 米就画 3 厘米",
          "只说方向，是一条望不到头的射线；只说距离，是整整一圈圆——两样齐全，才交出唯一的点"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "「东偏北 30°」是什么意思？", options: ["从正东出发，向北偏 30°", "从正北出发，向东偏 30°", "从正东出发，向南偏 30°"], answer: 0,
            hint: "先说「东」，就从正东开始量；「偏北」是向北边转", explain: "东偏北 30° = 从正东向北偏转 30°。先说哪个方向，就从哪个方向量起。" },
          { type: "fill", level: "基础", q: "图上 1 厘米表示实际 100 米，3 厘米表示实际 □ 米。", answer: "300",
            hint: "1 厘米是 100 米，3 个 100 米是多少？", explain: "3 × 100 = 300（米）。比例尺把图上的长度和实际距离连起来。" },
          { type: "choice", level: "变式", q: "东偏北 30°，还可以说成北偏东多少度？", options: ["北偏东 60°", "北偏东 30°", "北偏东 40°"], answer: 0,
            hint: "正东和正北之间是 90°，90° − 30° = ?", explain: "90° − 30° = 60°，所以东偏北 30° = 北偏东 60°，同一条射线，两种说法。" },
          { type: "choice", level: "变式", q: "为什么只说「宝盒在灯塔的东北边 300 米」找不到宝盒？", options: ["「东北边」方向太模糊，会偏到别处；方向定了线、距离定了点，两样齐全位置才唯一", "因为藏宝图故意写错了", "因为 300 米太远，挖不动"], answer: 0,
            hint: "想想朵朵为什么连挖三个坑都是沙子", explain: "「东北边」是一大片范围，不是一条线。方向把位置锁在一条射线上，距离再锁死射线上的一个点——缺一不可。" },
          { type: "choice", level: "挑战", q: "书店在朵朵家的西偏南 40° 方向 200 米。以书店为观测点，朵朵家在什么位置？", options: ["东偏北 40° 方向 200 米", "西偏南 40° 方向 200 米", "东偏北 40° 方向 400 米"], answer: 0,
            hint: "观测点反过来，方向也正好反过来，距离不变", explain: "西偏南的反方向是东偏北，角度仍是 40°，距离仍是 200 米。观测点换了，描述要整个翻过来。" },
          { type: "fill", level: "挑战", q: "图上 1 厘米表示实际 200 米，实际 500 米要画 □ 厘米。", answer: "2.5",
            hint: "500 里面有几个 200？500 ÷ 200 = ?", explain: "500 ÷ 200 = 2.5（厘米）。已知实际距离求图上距离，用除法。" },
          { type: "choice", level: "温故", q: "还记得吗：二年级学的地图方向——上面是北，右边是什么方向？", options: ["东", "西", "南"], answer: 0,
            hint: "口诀：上北下南，左西右……", explain: "上北下南，左西右东。今天的方向角，就是从这四个正方向量起来的。" },
          { type: "open", level: "开放", q: "当一回小小导航员：选一处你熟悉的地方（比如从你家到学校），用「方向 + 距离」写一段位置描述，讲给同桌听。",
            reference: "示例：学校在我家的东偏北 20° 方向大约 800 米处。先用手机指南针或太阳找方向，再用步数估一估距离——不需要特别精确，能把位置说清楚就很棒！" }
        ]
      },
      {
        type: "review",
        question: "确定一个位置，为什么必须「方向 + 距离」两样齐全？",
        ways: [
          { name: "只说方向", text: "「东偏北 30°」画出的是一条射线：线上 100 米、300 米、800 米……每个点都符合，根本不止一个答案。" },
          { name: "只说距离", text: "「300 米」画出的是一整个圆：以灯塔为圆心、300 米为半径，圆上每个点都有可能。" },
          { name: "两样齐全", text: "射线和圆只相交于一个点——方向定线、距离定点，交点就是唯一的宝藏位置。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：怎么描述学校在你家的什么位置？（先说观测点，再说方向和距离）"
      },
      {
        type: "beauty",
        headline: "洛书：三千年前的方位密码",
        paragraphs: [
          "传说大禹治水时，洛水里浮出一只神龟，背上刻着一幅神秘的点阵图——这就是大名鼎鼎的「洛书」。",
          "把点阵写成数字，是一个 3×3 的方阵：横着、竖着、斜着，每三个数相加都等于 15！古人还把这个方阵对应到四面八方，用它辨认方位。",
          "小小的九宫格，把数和方向紧紧连在了一起。去实验室摆一摆幻方：你能让每行、每列、每条斜线都等于 15 吗？"
        ],
        lab: "magic-square"
      }
    ]
  },

  /* ================= 单元 10：扇形统计图 ================= */
  {
    id: "g6u10",
    title: "扇形统计图",
    subtitle: "一个圆装下全班的秘密",
    tag: "数据",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "全班的运动榜单",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="344" cy="40" r="22" fill="#ffd6ec"/>
          <path d="M150 120 L150 50 A70 70 0 0 1 216.6 141.6 Z" fill="#f15bb5" stroke="#fff" stroke-width="2"/>
          <path d="M150 120 L216.6 141.6 A70 70 0 0 1 150 190 Z" fill="#ffc233" stroke="#fff" stroke-width="2"/>
          <path d="M150 120 L150 190 A70 70 0 0 1 93.4 161.1 Z" fill="#2ec4b6" stroke="#fff" stroke-width="2"/>
          <path d="M150 120 L93.4 161.1 A70 70 0 0 1 80 120 Z" fill="#9b5de5" stroke="#fff" stroke-width="2"/>
          <path d="M150 120 L80 120 A70 70 0 0 1 150 50 Z" fill="#ff8ac8" stroke="#fff" stroke-width="2"/>
          <text x="186" y="94" font-size="13" fill="#fff" font-weight="bold" text-anchor="middle">30%</text>
          <text x="176" y="160" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">20%</text>
          <text x="128" y="162" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">15%</text>
          <text x="102" y="136" font-size="11" fill="#fff" font-weight="bold" text-anchor="middle">10%</text>
          <text x="118" y="90" font-size="12" fill="#fff" font-weight="bold" text-anchor="middle">25%</text>
          <rect x="282" y="66" width="14" height="14" fill="#f15bb5"/><text x="302" y="78" font-size="13" fill="#b03a82">足球 12</text>
          <rect x="282" y="92" width="14" height="14" fill="#ffc233"/><text x="302" y="104" font-size="13" fill="#b03a82">乒乓球 8</text>
          <rect x="282" y="118" width="14" height="14" fill="#2ec4b6"/><text x="302" y="130" font-size="13" fill="#b03a82">跳绳 6</text>
          <rect x="282" y="144" width="14" height="14" fill="#9b5de5"/><text x="302" y="156" font-size="13" fill="#b03a82">踢毽 4</text>
          <rect x="282" y="170" width="14" height="14" fill="#ff8ac8"/><text x="302" y="182" font-size="13" fill="#b03a82">其他 10</text>
          <text x="200" y="224" font-size="16" fill="#b03a82" text-anchor="middle" font-weight="bold">🏀 谁占了全班的多少？</text>
        </svg>`,
        paragraphs: [
          "体育节要到了，朵朵调查了全班 40 名同学最喜欢的运动：足球 12 人、乒乓球 8 人、跳绳 6 人、踢毽 4 人、其他 10 人。",
          "她画了一张条形统计图，高高矮矮挺好看。可班主任看了一眼问：「喜欢足球的，占全班的几分之几呀？」朵朵盯着条形数了半天——看不出来！",
          "有没有一种图，能一眼看出「谁占了全班的多少」？<b>一个圆圆的图形举起了手……</b>"
        ]
      },
      {
        type: "play",
        widget: "chart",
        prompt: "先把调查结果做成条形统计图：对照数据表，用 −/＋ 把每个项目的条形调到正确人数。调好后想一想——从这张图能看出「足球占全班的 30%」吗？",
        config: {
          interactive: true,
          mode: "bar",
          data: [
            { label: "足球", value: 0 },
            { label: "乒乓球", value: 0 },
            { label: "跳绳", value: 0 },
            { label: "踢毽", value: 0 },
            { label: "其他", value: 0 }
          ],
          targets: [12, 8, 6, 4, 10],
          targetsText: "足球 12 人，乒乓球 8 人，跳绳 6 人，踢毽 4 人，其他 10 人（全班 40 人）"
        },
        successText: "条形图调好了！谁多谁少一眼看清。可「占全班的几分之几」呢？条形图答不上来——下一站，换一个圆圆的新图！"
      },
      {
        type: "anim",
        widget: "chart",
        steps: [
          { caption: "把全班 40 人的调查画进一个圆：整个圆 = 全班 40 人 = 100%。", state: { mode: "pie", data: [{ label: "足球", value: 12 }, { label: "乒乓球", value: 8 }, { label: "跳绳", value: 6 }, { label: "踢毽", value: 4 }, { label: "其他", value: 10 }], title: "全班最喜欢的运动项目", showValues: true, highlight: -1 } },
          { caption: "足球 12 人：12 ÷ 40 = 30%，占整个圆的 30%——最大的一块扇形。", state: { mode: "pie", data: [{ label: "足球", value: 12 }, { label: "乒乓球", value: 8 }, { label: "跳绳", value: 6 }, { label: "踢毽", value: 4 }, { label: "其他", value: 10 }], title: "全班最喜欢的运动项目", showValues: true, highlight: 0 } },
          { caption: "乒乓球 8 人占 20%，「其他」10 人占 25%。每块扇形都是一部分占整体的百分比。", state: { mode: "pie", data: [{ label: "足球", value: 12 }, { label: "乒乓球", value: 8 }, { label: "跳绳", value: 6 }, { label: "踢毽", value: 4 }, { label: "其他", value: 10 }], title: "全班最喜欢的运动项目", showValues: true, highlight: 4 } },
          { caption: "踢毽 4 人：4 ÷ 40 = 10%，最小的一块。谁的占比大，谁的扇形就大。", state: { mode: "pie", data: [{ label: "足球", value: 12 }, { label: "乒乓球", value: 8 }, { label: "跳绳", value: 6 }, { label: "踢毽", value: 4 }, { label: "其他", value: 10 }], title: "全班最喜欢的运动项目", showValues: true, highlight: 3 } },
          { caption: "所有扇形合起来正好是整个圆：30% + 20% + 15% + 10% + 25% = 100%。部分与整体，一目了然！", state: { mode: "pie", data: [{ label: "足球", value: 12 }, { label: "乒乓球", value: 8 }, { label: "跳绳", value: 6 }, { label: "踢毽", value: 4 }, { label: "其他", value: 10 }], title: "全班最喜欢的运动项目", showValues: true, highlight: -1 } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把这个圆圆的新图，写成数学的语言：",
          "扇形统计图用整个圆表示总数，用圆内各个扇形的大小表示各部分占总数的百分比。"
        ],
        formula: "部分 ÷ 整体 = 百分比 → 圆心角 = 360° × 百分比",
        keypoints: [
          "整个圆表示总数（整体，100%），每块扇形表示一部分占整体的百分比",
          "扇形越大，占的百分比越大——占比大小，一眼就能比出来",
          "圆心角 = 360° × 百分比：30% 对应 108°，25% 正好是 90°",
          "扇形图看「占比」，条形图比「多少」，折线图看「变化」——三种图各有所长"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "扇形统计图里，整个圆表示什么？", options: ["全班总人数（整体，100%）", "最喜欢足球的人数", "圆心角 360° 的角"], answer: 0,
            hint: "圆是「全部」，扇形是其中的「部分」", explain: "整个圆 = 总数 = 100%，每块扇形是部分占整体的百分比。" },
          { type: "choice", level: "基础", q: "足球 12 人、全班 40 人，喜欢足球的占全班的百分之几？", options: ["30%", "12%", "40%", "25%"], answer: 0,
            hint: "部分 ÷ 整体：12 ÷ 40 = ?", explain: "12 ÷ 40 = 0.3 = 30%。部分除以整体，就得到它占的百分比。" },
          { type: "choice", level: "变式", q: "想看「谁占全班的多少」，为什么扇形统计图比条形统计图更拿手？", options: ["圆被分成扇形，每块占整个圆的几分之几一目了然；条形图更擅长比数量的多少", "因为扇形图是圆的，更好看", "因为条形图不能画人数"], answer: 0,
            hint: "想想朵朵的苦恼：条形图上数得出 12 人，却看不出 30%", explain: "扇形图把整体画成一个圆，部分占多少直接写在「块头」上；条形图比多少很清楚，比占比却要绕弯。看图选工具，各有所长。" },
          { type: "fill", level: "变式", q: "乒乓球占全班的 20%，全班 40 人，喜欢乒乓球的有 □ 人。", answer: "8",
            hint: "求 40 的 20%，用乘法：40 × 20% = ?", explain: "40 × 20% = 40 × 0.2 = 8（人）。知道整体和百分比，用乘法求部分。" },
          { type: "choice", level: "挑战", q: "跳绳占全班的 15%，它的扇形圆心角是多少度？", options: ["54°", "15°", "150°", "90°"], answer: 0,
            hint: "圆心角 = 360° × 百分比：360° × 15% = ?", explain: "360° × 15% = 54°。百分比越大，分到的圆心角越大。" },
          { type: "judge", level: "挑战", q: "「其他」占 25%，它的扇形圆心角正好是 90°。", answer: true,
            hint: "360° × 25% = ?", explain: "360° × 25% = 90°，正好是直角——四分之一圆。对，图中那块就是一个直角扇形。" },
          { type: "choice", level: "温故", q: "还记得吗：四年级学的条形统计图，最大的本领是什么？", options: ["清楚地看出各种数量的多少", "看出部分占整体的百分比", "看出数量的变化趋势"], answer: 0,
            hint: "高高矮矮的条形，最擅长比什么？", explain: "条形统计图用条形的长短比「多少」，一目了然。看占比请找扇形图，看变化趋势请找折线图。" },
          { type: "open", level: "开放", q: "班里想统计「同学们一周的睡眠时间」，你觉得选条形统计图还是扇形统计图？说说你的理由。",
            reference: "一种想法：如果想看「睡 9 小时的有几人、10 小时的有几人」，比人数多少，选条形图；如果想看「睡够 10 小时的同学占全班的几分之几」，选扇形图。关键是先想清楚：你想回答什么问题？" }
        ]
      },
      {
        type: "review",
        question: "扇形统计图凭什么能一眼看出「部分占整体的多少」？",
        ways: [
          { name: "圆 = 整体", text: "整个圆规定为 100%，每个部分都变成圆里的一块扇形——部分和整体的关系直接画在了图上。" },
          { name: "角度 = 百分比", text: "圆心角 = 360° × 百分比：25% 是直角，50% 是半圆。块头越大占得越多，眼睛一比就知道。" },
          { name: "和条形图对比", text: "条形图能告诉你足球 12 人、踢毽 4 人（比多少），却看不出 12 人是全班的 30%（比占比）——这正是扇形图的绝活。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：如果想看看家里一个月的开销是怎么分配的，选什么统计图？为什么？"
      },
      {
        type: "beauty",
        headline: "高斯和数据：把数字画成图，规律自己站出来",
        paragraphs: [
          "两百多年前，德国数学家高斯还是小学生时，就秒算出 1+2+3+…+100 = 5050。长大后，他天天和天文台的观测数据打交道。",
          "同一颗星星，每次测出的位置总有一点点差别。高斯把这些误差画成图，发现它们排成一条中间高、两边低的「钟形曲线」——小误差最多，大误差很少。这条曲线后来以他的名字命名。",
          "把杂乱的数据画成图，藏着的规律就会自己站出来。今天学的扇形图、条形图，都是这个智慧的延续！"
        ],
        museum: "ppl-gauss"
      }
    ]
  },

  /* ================= 单元 11：数与形（数学广角，8 幕探究课） ================= */
  {
    id: "g6u11",
    title: "数与形",
    subtitle: "观察 → 猜想 → 验证：算式藏在图形里",
    tag: "模式",
    minutes: 25,
    inquiry: true,
    scenes: [
      {
        type: "story",
        title: "地砖上的神秘加法",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="344" cy="40" r="22" fill="#ffd6ec"/>
          <rect x="48" y="96" width="44" height="44" rx="6" fill="#f15bb5"/>
          <text x="70" y="166" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">1 = 1²</text>
          <rect x="140" y="66" width="34" height="34" rx="5" fill="#f15bb5"/>
          <rect x="178" y="66" width="34" height="34" rx="5" fill="#ff8ac8"/>
          <rect x="140" y="104" width="34" height="34" rx="5" fill="#ff8ac8"/>
          <rect x="178" y="104" width="34" height="34" rx="5" fill="#ff8ac8"/>
          <text x="176" y="166" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">1+3 = 4 = 2²</text>
          <g>
            <rect x="258" y="40" width="26" height="26" rx="4" fill="#f15bb5"/><rect x="288" y="40" width="26" height="26" rx="4" fill="#f15bb5"/>
            <rect x="258" y="70" width="26" height="26" rx="4" fill="#f15bb5"/><rect x="288" y="70" width="26" height="26" rx="4" fill="#f15bb5"/>
            <rect x="318" y="40" width="26" height="26" rx="4" fill="#ff8ac8"/><rect x="318" y="70" width="26" height="26" rx="4" fill="#ff8ac8"/>
            <rect x="258" y="100" width="26" height="26" rx="4" fill="#ff8ac8"/><rect x="288" y="100" width="26" height="26" rx="4" fill="#ff8ac8"/>
            <rect x="318" y="100" width="26" height="26" rx="4" fill="#ff8ac8"/>
          </g>
          <text x="302" y="166" font-size="14" fill="#b03a82" text-anchor="middle" font-weight="bold">1+3+5 = 9 = 3²</text>
          <text x="200" y="208" font-size="16" fill="#b03a82" text-anchor="middle" font-weight="bold">🧱 加的总是奇数，得的总是平方数！</text>
        </svg>`,
        paragraphs: [
          "玫瑰广场在铺地砖。第一圈 1 块；补上 3 块，变成 2×2；再补 5 块，变成 3×3；再补 7 块，变成 4×4……",
          "朵朵蹲在地上看呆了：补上的总是奇数——1、3、5、7；得到的总是正方形数——1、4、9、16。这是巧合，还是藏着密码？",
          "另一边，浣熊爷爷切西瓜：先吃掉 1/2，再吃剩下的 1/4，再吃 1/8……西瓜好像永远吃不完，可又越吃越接近「整个」。<b>图形里藏着数的密码，你看得出来吗？</b>"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先不急着看答案，动手铺一铺：点击方格，从 1 格开始铺满这个 4×4 方阵。盯住格子上的编号——1、4、9、16，这四个数有什么特别的？",
        config: { interactive: true, rows: 4, cols: 4 },
        successText: "铺满 16 格！1 = 1×1，4 = 2×2，9 = 3×3，16 = 4×4——全是平方数！而且每次新补的格子是 1、3、5、7……全是奇数。你摸到密码的边了吗？"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "先看 1 格：1 = 1×1 = 1²。", state: { rows: 1, cols: 1, filled: 1, showCount: true } },
          { caption: "补上一层 L 形（3 格）：1+3 = 4 = 2²。看，变成 2×2 的正方形！", state: { rows: 2, cols: 2, filled: 4, showCount: true } },
          { caption: "再补一层 L 形（5 格）：1+3+5 = 9 = 3²。3×3 的正方形！", state: { rows: 3, cols: 3, filled: 9, showCount: true } },
          { caption: "再补一层（7 格）：1+3+5+7 = 16 = 4²。每补一层 L 形，边长刚好多 1 格。", state: { rows: 4, cols: 4, filled: 16, showCount: true } },
          { caption: "规律现身：从 1 开始，n 个连续奇数相加 = n²。下一层 L 形是 9 格：16+9 = 25 = 5²，信不信由你验证！", state: { rows: 4, cols: 4, filled: 16, showCount: true } }
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "再来验证西瓜问题：这条长条是「1 个西瓜」，被分成 16 份。依次涂上 1/2（8 份）＋ 1/4（4 份）＋ 1/8（2 份）＋ 1/16（1 份）——一共涂 15 份，看看最后剩下多少！",
        config: { interactive: true, shape: "bar", parts: 16, target: 15 },
        successText: "涂了 15/16，只剩小小的 1/16！照这样下去：每次都加上剩下的一半，长条永远差一点点涂不满，却又无限逼近 1。你的猜想被验证了！"
      },
      {
        type: "symbol",
        paragraphs: [
          "观察、猜想、验证都完成了——现在把发现写成数学的语言：",
          "数与形是一对好朋友：算式的规律，画成图形一眼就能看见。"
        ],
        formula: "1+3+5+…+(2n−1) = n²　　1/2+1/4+1/8+… = 1",
        keypoints: [
          "从 1 开始，n 个连续奇数相加 = n 的平方：1+3+5+7 = 4² = 16",
          "每加一个奇数，正好给正方形补上一层 L 形的边，边长多 1 格",
          "1/2 + 1/4 + 1/8 + … 每次加上剩下的一半，和越来越接近 1，却永远差一点点——极限就是 1",
          "想不明白的算式，画个图试试：图形会让规律自己站出来"
        ],
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <rect x="60" y="40" width="24" height="24" rx="4" fill="#f15bb5"/>
          <rect x="84" y="40" width="24" height="24" rx="4" fill="#ff8ac8"/>
          <rect x="60" y="64" width="24" height="24" rx="4" fill="#ff8ac8"/>
          <rect x="84" y="64" width="24" height="24" rx="4" fill="#ff8ac8"/>
          <rect x="108" y="40" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="108" y="64" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="132" y="40" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="132" y="64" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="60" y="88" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="84" y="88" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="108" y="88" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="132" y="88" width="24" height="24" rx="4" fill="#ffc233"/>
          <rect x="156" y="40" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="156" y="64" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="156" y="88" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="156" y="112" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="60" y="112" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="84" y="112" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="108" y="112" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <rect x="132" y="112" width="24" height="24" rx="4" fill="#2ec4b6"/>
          <text x="220" y="56" font-size="14" fill="#f15bb5" font-weight="bold">1 = 1²</text>
          <text x="220" y="82" font-size="14" fill="#e065a4" font-weight="bold">1+3 = 2²</text>
          <text x="220" y="108" font-size="14" fill="#c98a12" font-weight="bold">1+3+5 = 3²</text>
          <text x="220" y="134" font-size="14" fill="#1d8a7b" font-weight="bold">1+3+5+7 = 4²</text>
          <text x="200" y="186" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">每层 L 形都是一个奇数：1、3、5、7……</text>
          <text x="200" y="212" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">n 层正好拼成 n × n 的正方形</text>
        </svg>`
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "1 + 3 + 5 + 7 + 9 = □", answer: "25",
            hint: "这是从 1 开始的 5 个连续奇数，5² = ?", explain: "5 个连续奇数相加 = 5² = 25。也可以一个个加：1+3+5+7+9 = 25。" },
          { type: "choice", level: "基础", q: "1 + 3 + 5 + 7 + 9 + 11 + 13 的和是多少？", options: ["49", "36", "42", "64"], answer: 0,
            hint: "数一数有几个奇数：7 个。7² = ?", explain: "7 个连续奇数相加 = 7² = 49。数个数，再平方，一步搞定。" },
          { type: "choice", level: "变式", q: "为什么从 1 开始的连续奇数相加，总能拼成正方形？", options: ["每加一个奇数，正好给正方形补上一层 L 形的边，边长多 1 格", "因为奇数比偶数运气好", "只是碰巧前几个成立，往后就不行了"], answer: 0,
            hint: "回忆你铺方格时，每次新补的格子排成什么形状", explain: "n×n 的正方形扩成 (n+1)×(n+1)，补上的右列加底行正好是 2n+1 个格子——一个奇数。所以每个奇数都严丝合缝地补上一层，永远成立，不是碰巧。" },
          { type: "choice", level: "变式", q: "1/2 + 1/4 + 1/8 + 1/16 + 1/32 的和，离 1 还差多少？", options: ["1/32", "1/16", "1/64", "1/2"], answer: 0,
            hint: "回忆涂西瓜：每次都加上剩下的一半，剩下的和最后加的一样多", explain: "和是 31/32，离 1 还差 1/32。规律：加到的最后一个分数是几分之一，就差几分之一。" },
          { type: "fill", level: "挑战", q: "1 + 3 + 5 + … + 39（从 1 开始的 20 个连续奇数）= □", answer: "400",
            hint: "20 个连续奇数相加 = 20² = ?", explain: "20² = 20 × 20 = 400。不用真的加 20 个数，数清个数再平方就行。" },
          { type: "choice", level: "挑战", q: "64 是一个正方形数（8²）。它是从 1 开始的几个连续奇数之和？", options: ["8 个", "6 个", "16 个", "64 个"], answer: 0,
            hint: "n 个连续奇数 = n²，现在 n² = 64，n = ?", explain: "8² = 64，所以是 8 个：1+3+5+7+9+11+13+15 = 64，最后一个奇数正好是 15 = 2×8−1。" },
          { type: "choice", level: "温故", q: "还记得吗：五年级学的异分母分数加法——1/2 + 1/4 = ？", options: ["3/4", "2/6", "1/6", "3/8"], answer: 0,
            hint: "先通分：1/2 = 2/4，再相加", explain: "1/2 + 1/4 = 2/4 + 1/4 = 3/4。通分的老本领，正是今天「无限逼近 1」的第一级台阶。" },
          { type: "open", level: "开放", q: "数与形手拉手。找一找：生活中或图形里，还有哪些「算式藏在图形里」的例子？画一画或写一写你的发现。",
            reference: "示例：楼梯形 1+2+3+4 可以两个一拼变成 4×5 的长方形，所以 1+2+3+4 = 4×5÷2 = 10；三角形的点阵 1、3、6、10 叫三角形数。你的发现也可以很不一样！" }
        ]
      },
      {
        type: "review",
        question: "1 + 3 + 5 + 7 为什么等于 4²？",
        ways: [
          { name: "摆方块", text: "1 块摆中间，3 块补成 2×2，5 块补成 3×3，7 块补成 4×4——每层 L 形都是奇数块，四层正好 16 块 = 4²。" },
          { name: "看图数", text: "在 4×4 方格图里按 L 形一层一层数：1、3、5、7，四层加起来 16 格，正好是 4×4。" },
          { name: "用公式", text: "从 1 开始的 n 个连续奇数 = n²。1+3+5+7 是 4 个奇数，所以 = 4² = 16。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 1/2 + 1/4 + 1/8 + … 会越来越接近 1？（可以画一个正方形，一次次涂掉剩下的一半）"
      },
      {
        type: "beauty",
        headline: "不用公式的证明：看一眼就明白",
        paragraphs: [
          "1+3+5+…+(2n−1) = n²，这个结论古希腊的毕达哥拉斯学派早就发现了——他们不是算出来的，是「摆」出来的：小石子摆成 L 形，一层一层往外扩。",
          "数学里这样的「无字证明」还有很多：一张图摆在那里，不用写一个字，道理自己说话。",
          "去博物馆看看这幅「奇数求和图」，数一数 L 形的层，亲手把 n² 摆出来！"
        ],
        museum: "prf-oddsum"
      }
    ]
  }
);
