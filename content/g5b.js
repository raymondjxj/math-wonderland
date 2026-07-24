/* ============================================================
   数学奇境 · 五年级扩展单元 v2（第 4~6 课，push 模式）
   单元：4 小数除法 / 5 简易方程 / 6 多边形的面积
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[5] = MW.content[5] || { grade: 5, name: "五年级 · 紫晶星球", units: [] };
G.units.push(

  /* ================= 单元 4：小数除法 ================= */
  {
    id: "g5u4",
    title: "小数除法",
    subtitle: "商的小数点站队看齐",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "三艘飞船分彩带",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <circle cx="344" cy="38" r="20" fill="#c8b6ff"/>
          <circle cx="337" cy="32" r="6" fill="#b088f9"/>
          <text x="200" y="66" font-size="16" fill="#5b2a9d" font-weight="bold" text-anchor="middle">能量彩带 · 全长 3.6 米</text>
          <rect x="50" y="80" width="300" height="34" rx="9" fill="#ffffff" stroke="#9b5de5" stroke-width="3"/>
          <rect x="53" y="83" width="97" height="28" rx="6" fill="#9b5de5"/>
          <rect x="151" y="83" width="97" height="28" fill="#b088f9"/>
          <rect x="249" y="83" width="97" height="28" rx="6" fill="#9b5de5"/>
          <g fill="#7c3aed">
            <ellipse cx="100" cy="164" rx="27" ry="13"/>
            <ellipse cx="200" cy="164" rx="27" ry="13"/>
            <ellipse cx="300" cy="164" rx="27" ry="13"/>
          </g>
          <g fill="#c8b6ff">
            <circle cx="100" cy="155" r="9"/><circle cx="200" cy="155" r="9"/><circle cx="300" cy="155" r="9"/>
          </g>
          <g font-size="17" font-weight="bold" fill="#5b2a9d" text-anchor="middle">
            <text x="100" y="200">？米</text>
            <text x="200" y="200">？米</text>
            <text x="300" y="200">？米</text>
          </g>
          <text x="200" y="230" font-size="16" fill="#5b2a9d" font-weight="bold" text-anchor="middle">🛸 3.6 ÷ 3，每艘飞船分到几米？</text>
        </svg>`,
        paragraphs: [
          "紫晶星球的夜空庆典要开始啦！机械师小萝卜头量出一根亮闪闪的能量彩带：整整 3.6 米，要平均分给 3 艘小飞船做尾巴。",
          "3 米好分，每艘 1 米。可还剩下 0.6 米——这零头怎么分？小萝卜头挠挠头：整数的除法他会，小数的除法还没学过呀！",
          "更要命的是，队长叮嘱：「商里的小数点，千万别点错位置！」<b>小数点到底该点在哪儿呢？</b>"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先动手分分看：这条长条就是 3.6 米的彩带，被切成 36 个 0.1 米的小段。平均分给 3 艘飞船，每艘该得几小段？涂出一艘飞船的份！（提示：36 ÷ 3 = ？）",
        config: { interactive: true, shape: "bar", parts: 36, target: 12 },
        successText: "涂好了！每艘飞船分到 12 个 0.1 米，也就是 1.2 米。3.6 ÷ 3 = 1.2——这就是小数除法！"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "3.6 米里面藏着 36 个 0.1 米。整条长条涂满，就是 36 小段。", state: { shape: "bar", parts: 36, shaded: 36, showLabel: true } },
          { caption: "平均分给 3 艘飞船：36 ÷ 3 = 12，每艘分到 12 个 0.1。", state: { shape: "bar", parts: 36, shaded: 12, showLabel: true } },
          { caption: "12 个 0.1 就是 1.2。所以 3.6 ÷ 3 = 1.2（米）。", state: { shape: "bar", parts: 36, shaded: 12, showLabel: true } },
          { caption: "列竖式时，商的小数点要和被除数的小数点对齐：1.2 的小数点，正好对着 3.6 的小数点，像士兵站队看齐。", state: { shape: "bar", parts: 36, shaded: 12, showLabel: true } },
          { caption: "再挑战 5 ÷ 4：把每 1 米切成 4 个 0.25 米，5 米一共是 20 个 0.25 米。", state: { shape: "bar", parts: 20, shaded: 20, showLabel: true } },
          { caption: "20 ÷ 4 = 5，每人 5 个 0.25，是 1.25。整数除以整数，商也可以是小数！", state: { shape: "bar", parts: 20, shaded: 5, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把分彩带的过程，写成数学的语言：",
          "小数除以整数，跟整数除法几乎一样，只是多了一条「对齐小数点」的规矩。"
        ],
        formula: "3.6 ÷ 3 = 1.2",
        keypoints: [
          "小数除以整数，按整数除法的方法一步一步除",
          "商的小数点要和被除数的小数点对齐——像士兵站队看齐",
          "除到末尾还有余数，就添 0 继续除：5 ÷ 4 = 1.25",
          "算完用乘法验算：1.2 × 3 = 3.6，对得上才放心"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "3.6 ÷ 3 = ？", options: ["12", "1.2", "0.12", "3.2"], answer: 1,
            hint: "把 3.6 想成 36 个 0.1，36 ÷ 3 = ？", explain: "36 个 0.1 ÷ 3 = 12 个 0.1 = 1.2，所以 3.6 ÷ 3 = 1.2。" },
          { type: "fill", level: "基础", q: "4.8 ÷ 4 = □", answer: "1.2",
            hint: "4.8 是 48 个 0.1，48 ÷ 4 = ？", explain: "48 个 0.1 ÷ 4 = 12 个 0.1 = 1.2。验算：1.2 × 4 = 4.8，对了！" },
          { type: "choice", level: "基础", q: "用竖式计算小数除法时，商的小数点要和谁对齐？", options: ["不用对齐，随便点", "被除数的小数点", "除数"], answer: 1,
            hint: "想想动画里的士兵站队", explain: "商的小数点与被除数的小数点对齐，每一位的数位才对得上。" },
          { type: "choice", level: "变式", q: "7.2 ÷ 8 = ？", options: ["9", "0.09", "0.9"], answer: 2,
            hint: "7.2 是 72 个 0.1，72 ÷ 8 = ？被除数比除数小，商会比 1 小", explain: "72 个 0.1 ÷ 8 = 9 个 0.1 = 0.9。整数部分不够除，商的个位写 0 占位。" },
          { type: "judge", level: "变式", q: "整数除以整数，商一定是整数。", answer: false,
            hint: "想想 5 ÷ 4 的结果", explain: "5 ÷ 4 = 1.25。除不尽时添 0 继续除，商可以是小数。" },
          { type: "choice", level: "变式", q: "为什么算 5 ÷ 4 时，可以在余数后面添 0 继续除？", options: ["这是数学家随便定的规矩", "添 0 能让商变得更大", "添 0 是把剩下的 1 换成 10 个 0.1，大小没变，还能继续分"], answer: 2,
            hint: "1 个一，等于几个 0.1？", explain: "余数 1 添 0 变成 10 个 0.1，数的大小没有变，所以可以接着除，商才精确。" },
          { type: "fill", level: "挑战", q: "把 6 米长的缎带平均剪成 4 段，每段长 □ 米。", answer: "1.5",
            hint: "6 ÷ 4，商 1 余 2，添 0 继续除", explain: "6 ÷ 4 = 1.5。验算：1.5 × 4 = 6，正好！" },
          { type: "fill", level: "挑战", q: "8.4 元买 6 支同样的铅笔，每支 □ 元。", answer: "1.4",
            hint: "8.4 ÷ 6：84 个 0.1 ÷ 6 = ？", explain: "84 个 0.1 ÷ 6 = 14 个 0.1 = 1.4，每支 1.4 元。验算：1.4 × 6 = 8.4。" },
          { type: "choice", level: "温故", q: "还记得吗：小数乘法能当「验算官」！验算 3.6 ÷ 3 = 1.2，应该算哪一道？", options: ["1.2 + 3 = 4.2", "3.6 × 3 = 10.8", "1.2 × 3 = 3.6"], answer: 2,
            hint: "除法算得对不对，用商 × 除数倒回去乘一乘", explain: "1.2 × 3 = 3.6，正好等于被除数，说明除法算对了。商 × 除数 = 被除数。" }
        ]
      },
      {
        type: "review",
        question: "3.6 ÷ 3 为什么是 1.2？你能想出几种算法？",
        ways: [
          { name: "换单位", text: "3.6 米 = 36 分米，36 ÷ 3 = 12 分米 = 1.2 米。" },
          { name: "拆一拆", text: "把 3.6 拆成 3 和 0.6：3 ÷ 3 = 1，0.6 ÷ 3 = 0.2，合起来 1 + 0.2 = 1.2。" },
          { name: "验算", text: "商 × 除数 = 被除数：1.2 × 3 = 3.6，说明商就是 1.2。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：5 ÷ 4 为什么等于 1.25？商的小数点为什么要和被除数的小数点对齐？"
      },
      {
        type: "beauty",
        headline: "三千年前的分面包难题",
        paragraphs: [
          "三千多年前的古埃及，要给工人分面包和啤酒：9 个面包分给 10 个人，每人该分多少？",
          "写在《莱茵德纸草书》里的答案是：每人 1/2 + 1/3 + 1/15 个！古埃及人偏爱「几分之一」的单位分数，硬是把除法一口一口算了出去。",
          "今天的小数除法简单多了——可对齐小数点、添 0 继续除的本领，还是那套「平均分」的老智慧。去博物馆看看古埃及人的账单吧！"
        ],
        museum: "his-egypt"
      }
    ]
  },

  /* ================= 单元 5：简易方程 ================= */
  {
    id: "g5u5",
    title: "简易方程",
    subtitle: "魔法天平两边平",
    tag: "推理",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "不许拆开的神秘礼盒",
        shots: [
          {
            art: `<svg viewBox="0 0 400 240" width="400" height="240">
              <rect width="400" height="240" rx="20" fill="#f3edff"/>
              <circle cx="46" cy="40" r="18" fill="#c8b6ff"/>
              <circle cx="40" cy="34" r="5" fill="#b088f9"/>
              <g id="balance">
                <rect x="172" y="196" width="56" height="12" rx="6" fill="#7c3aed"/>
                <rect x="196" y="80" width="8" height="118" fill="#7c3aed"/>
                <rect x="62" y="70" width="276" height="9" rx="4" fill="#9b5de5"/>
                <circle cx="200" cy="74" r="7" fill="#7c3aed"/>
                <g stroke="#7c3aed" stroke-width="2">
                  <line x1="100" y1="79" x2="60" y2="120"/><line x1="100" y1="79" x2="140" y2="120"/>
                  <line x1="300" y1="79" x2="260" y2="120"/><line x1="300" y1="79" x2="340" y2="120"/>
                </g>
                <path d="M60 120 Q100 154 140 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
                <path d="M260 120 Q300 154 340 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
              </g>
              <g fill="#ffc233">
                <circle cx="330" cy="46" r="5"/><circle cx="350" cy="66" r="4"/><circle cx="316" cy="70" r="3.4"/>
              </g>
              <text x="200" y="34" text-anchor="middle" font-size="15" fill="#5b2a9d" font-weight="bold">💎 紫晶水晶市场</text>
            </svg>`,
            callout: { text: "魔法天平，专破难题！", pos: "br" },
            narration: "紫晶星球的水晶市场上，有一架古老的魔法天平。今天，它要帮我们破一桩谜案！",
            ms: 4000
          },
          {
            art: `<svg viewBox="0 0 400 240" width="400" height="240">
              <rect width="400" height="240" rx="20" fill="#f3edff"/>
              <circle cx="46" cy="40" r="18" fill="#c8b6ff"/>
              <circle cx="40" cy="34" r="5" fill="#b088f9"/>
              <g id="balance">
                <rect x="172" y="196" width="56" height="12" rx="6" fill="#7c3aed"/>
                <rect x="196" y="80" width="8" height="118" fill="#7c3aed"/>
                <rect x="62" y="70" width="276" height="9" rx="4" fill="#9b5de5"/>
                <circle cx="200" cy="74" r="7" fill="#7c3aed"/>
                <g stroke="#7c3aed" stroke-width="2">
                  <line x1="100" y1="79" x2="60" y2="120"/><line x1="100" y1="79" x2="140" y2="120"/>
                  <line x1="300" y1="79" x2="260" y2="120"/><line x1="300" y1="79" x2="340" y2="120"/>
                </g>
                <path d="M60 120 Q100 154 140 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
                <path d="M260 120 Q300 154 340 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
              </g>
              <g id="gift">
                <rect x="70" y="92" width="28" height="26" rx="5" fill="#9b5de5"/>
                <line x1="84" y1="92" x2="84" y2="118" stroke="#ffc233" stroke-width="3"/>
                <text x="84" y="110" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">x</text>
              </g>
              <g id="left3" fill="#ffc233">
                <circle cx="112" cy="106" r="6.5"/><circle cx="126" cy="110" r="6.5"/><circle cx="119" cy="94" r="6.5"/>
              </g>
              <g id="right10" fill="#9b5de5">
                <circle cx="272" cy="104" r="4.5"/><circle cx="284" cy="104" r="4.5"/><circle cx="296" cy="104" r="4.5"/><circle cx="308" cy="104" r="4.5"/><circle cx="320" cy="104" r="4.5"/>
                <circle cx="278" cy="115" r="4.5"/><circle cx="290" cy="115" r="4.5"/><circle cx="302" cy="115" r="4.5"/><circle cx="314" cy="115" r="4.5"/><circle cx="326" cy="115" r="4.5"/>
              </g>
            </svg>`,
            zoom: { ox: 50, oy: 52, scale: 1.25 },
            focus: "#balance",
            callout: { text: "礼盒 ＋ 3 颗 ＝ 10 颗，正好平衡！", pos: "tl" },
            narration: "摊主把神秘礼盒和 3 颗水晶放上左盘，右盘放上 10 颗——天平稳稳停住，一点儿不歪！",
            ms: 5000
          },
          {
            art: `<svg viewBox="0 0 400 240" width="400" height="240">
              <rect width="400" height="240" rx="20" fill="#f3edff"/>
              <circle cx="46" cy="40" r="18" fill="#c8b6ff"/>
              <circle cx="40" cy="34" r="5" fill="#b088f9"/>
              <g id="balance">
                <rect x="172" y="196" width="56" height="12" rx="6" fill="#7c3aed"/>
                <rect x="196" y="80" width="8" height="118" fill="#7c3aed"/>
                <rect x="62" y="70" width="276" height="9" rx="4" fill="#9b5de5"/>
                <circle cx="200" cy="74" r="7" fill="#7c3aed"/>
                <g stroke="#7c3aed" stroke-width="2">
                  <line x1="100" y1="79" x2="60" y2="120"/><line x1="100" y1="79" x2="140" y2="120"/>
                  <line x1="300" y1="79" x2="260" y2="120"/><line x1="300" y1="79" x2="340" y2="120"/>
                </g>
                <path d="M60 120 Q100 154 140 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
                <path d="M260 120 Q300 154 340 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
              </g>
              <g id="gift">
                <rect x="70" y="92" width="28" height="26" rx="5" fill="#9b5de5"/>
                <line x1="84" y1="92" x2="84" y2="118" stroke="#ffc233" stroke-width="3"/>
                <text x="84" y="110" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">x</text>
                <text x="84" y="64" text-anchor="middle" font-size="22">❓</text>
              </g>
              <g fill="#ffc233">
                <circle cx="112" cy="106" r="6.5"/><circle cx="126" cy="110" r="6.5"/><circle cx="119" cy="94" r="6.5"/>
              </g>
              <g fill="#9b5de5">
                <circle cx="272" cy="104" r="4.5"/><circle cx="284" cy="104" r="4.5"/><circle cx="296" cy="104" r="4.5"/><circle cx="308" cy="104" r="4.5"/><circle cx="320" cy="104" r="4.5"/>
                <circle cx="278" cy="115" r="4.5"/><circle cx="290" cy="115" r="4.5"/><circle cx="302" cy="115" r="4.5"/><circle cx="314" cy="115" r="4.5"/><circle cx="326" cy="115" r="4.5"/>
              </g>
            </svg>`,
            zoom: { ox: 21, oy: 44, scale: 1.3 },
            focus: "#gift",
            callout: { text: "不许拆开！盒里有几颗？", pos: "tr" },
            narration: "可是，礼盒不许拆开！里面到底藏着几颗水晶？小萝卜头盯着天平，想啊想……",
            ms: 4600
          },
          {
            art: `<svg viewBox="0 0 400 240" width="400" height="240">
              <rect width="400" height="240" rx="20" fill="#f3edff"/>
              <circle cx="46" cy="40" r="18" fill="#c8b6ff"/>
              <circle cx="40" cy="34" r="5" fill="#b088f9"/>
              <g id="balance">
                <rect x="172" y="196" width="56" height="12" rx="6" fill="#7c3aed"/>
                <rect x="196" y="80" width="8" height="118" fill="#7c3aed"/>
                <rect x="62" y="70" width="276" height="9" rx="4" fill="#9b5de5"/>
                <circle cx="200" cy="74" r="7" fill="#7c3aed"/>
                <g stroke="#7c3aed" stroke-width="2">
                  <line x1="100" y1="79" x2="60" y2="120"/><line x1="100" y1="79" x2="140" y2="120"/>
                  <line x1="300" y1="79" x2="260" y2="120"/><line x1="300" y1="79" x2="340" y2="120"/>
                </g>
                <path d="M60 120 Q100 154 140 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
                <path d="M260 120 Q300 154 340 120 Z" fill="#e9dcff" stroke="#9b5de5" stroke-width="3"/>
              </g>
              <g id="gift">
                <rect x="70" y="92" width="28" height="26" rx="5" fill="#9b5de5"/>
                <line x1="84" y1="92" x2="84" y2="118" stroke="#ffc233" stroke-width="3"/>
                <text x="84" y="110" font-size="14" fill="#ffffff" font-weight="bold" text-anchor="middle">x</text>
              </g>
              <g fill="#ffc233" opacity="0.35">
                <circle cx="112" cy="106" r="6.5"/><circle cx="126" cy="110" r="6.5"/><circle cx="119" cy="94" r="6.5"/>
              </g>
              <ellipse cx="119" cy="103" rx="26" ry="18" fill="none" stroke="#e2574c" stroke-width="2.5" stroke-dasharray="5 4"/>
              <g fill="#9b5de5">
                <circle cx="272" cy="104" r="4.5"/><circle cx="284" cy="104" r="4.5"/><circle cx="296" cy="104" r="4.5"/><circle cx="308" cy="104" r="4.5"/><circle cx="320" cy="104" r="4.5"/>
                <circle cx="278" cy="115" r="4.5"/><circle cx="290" cy="115" r="4.5"/>
              </g>
              <g fill="#9b5de5" opacity="0.35">
                <circle cx="302" cy="115" r="4.5"/><circle cx="314" cy="115" r="4.5"/><circle cx="326" cy="115" r="4.5"/>
              </g>
              <ellipse cx="314" cy="115" rx="24" ry="12" fill="none" stroke="#e2574c" stroke-width="2.5" stroke-dasharray="5 4"/>
            </svg>`,
            focus: "#gift",
            callout: { text: "两边同时拿走 3 颗，还平吗？", pos: "tl" },
            narration: "有办法啦！两边同时拿走 3 颗水晶——天平还会平吗？礼盒的秘密，马上揭晓！",
            ms: 4800
          }
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先感受一下什么叫「两边相等」：天平左边已经有 2 × 6 = 12 块水晶。请你摆出 3 行 4 列的方阵放到右边——算算看，两边会平衡吗？",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 3, targetCols: 4 },
        successText: "3 × 4 = 12，和左边 2 × 6 = 12 一模一样多！摆法不同，数量相同——两边相等，就是一个「等式」。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "左盘：神秘礼盒 x 加 3 颗水晶；右盘：10 颗。天平平衡，写成 x + 3 = 10。", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "两边同时拿走 3 颗：左边只剩礼盒，右边剩 7 颗。天平还平！", state: { rows: 1, cols: 7, showTotal: true } },
          { caption: "所以 x = 7。放回去验一验：7 + 3 = 10，对上了！", state: { rows: 1, cols: 7, showTotal: true } },
          { caption: "换一架天平：2 个相同的礼盒共重 12 颗，写成 2x = 12。", state: { rows: 2, cols: 6, showTotal: true } },
          { caption: "两边同时平均分成 2 份：每份 6 颗，所以 x = 6。验一验：2 × 6 = 12。", state: { rows: 1, cols: 6, showTotal: true } },
          { caption: "秘诀一句话：等式两边同时加、减、乘、除以同一个数（除以的数不能是 0），两边仍然相等。", state: { rows: 1, cols: 6, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把天平的把戏，写成数学的语言：",
          "不知道礼盒里有几颗？用字母 x 代替它，天平的样子就成了一道方程。"
        ],
        formula: "x + 3 = 10 → x = 7",
        keypoints: [
          "字母 x 表示还不知道的数，叫未知数",
          "含有未知数的等式，叫做方程",
          "使方程左右两边相等的未知数的值，叫方程的解",
          "等式两边同时加、减、乘、除以同一个数（除以的数不为 0），两边仍然相等"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "下面哪个是方程？", options: ["3 + 4 = 7", "x + 5 = 12", "x + 5"], answer: 1,
            hint: "方程要满足两条：是等式，还含有未知数", explain: "3 + 4 = 7 是等式但没有未知数，x + 5 不是等式。只有 x + 5 = 12 两条都满足。" },
          { type: "fill", level: "基础", q: "x + 3 = 10，x = □", answer: "7",
            hint: "两边同时拿走 3", explain: "两边同时减去 3：x = 10 − 3 = 7。验一验：7 + 3 = 10，平衡！" },
          { type: "fill", level: "基础", q: "2x = 12，x = □", answer: "6",
            hint: "两边同时平均分成 2 份", explain: "两边同时除以 2：x = 12 ÷ 2 = 6。验一验：2 × 6 = 12，平衡！" },
          { type: "choice", level: "变式", q: "x − 4 = 9，x = ？", options: ["5", "13", "36"], answer: 1,
            hint: "减掉的要加回来，天平才平衡", explain: "两边同时加上 4：x = 9 + 4 = 13。验一验：13 − 4 = 9。" },
          { type: "judge", level: "变式", q: "方程两边同时乘 2，左右两边仍然相等。", answer: true,
            hint: "想想天平：两边的东西同时变成 2 倍", explain: "等式两边同时乘同一个数，天平仍然平衡——这是等式的性质。" },
          { type: "choice", level: "变式", q: "为什么解 x + 3 = 10 时，两边要「同时」减去 3？", options: ["因为 3 不好看，减掉了事", "左边减 3 后只剩 x，两边同时减，天平才仍然平衡", "只减左边就行，右边不用动"], answer: 1,
            hint: "只动一边，天平会怎样？", explain: "同时做同样的操作，等式才成立；只动一边，天平就歪了，答案也错了。" },
          { type: "fill", level: "挑战", q: "3x = 18，x = □", answer: "6",
            hint: "两边同时除以 3", explain: "x = 18 ÷ 3 = 6。验一验：3 × 6 = 18，平衡！" },
          { type: "choice", level: "挑战", q: "小星买 4 支同样的荧光笔，一共 20 元。设每支 x 元，哪个方程是对的？", options: ["x + 4 = 20", "x − 4 = 20", "4x = 20"], answer: 2,
            hint: "4 支笔，每支 x 元，总价是几个 x？", explain: "总价是 4 个 x，也就是 4x = 20，解出 x = 5，每支 5 元。" },
          { type: "fill", level: "温故", q: "还记得吗：12 的全部因数是 1、2、3、4、6、12，一共有 □ 个。", answer: "6",
            hint: "因数与倍数那课：成对找，1×12、2×6、3×4", explain: "1、2、3、4、6、12，正好 6 个因数。成对找就不会漏！" }
        ]
      },
      {
        type: "review",
        question: "x + 3 = 10 的解为什么是 7？",
        ways: [
          { name: "天平法", text: "两边同时拿走 3 颗：左边剩 x，右边剩 7，天平仍平衡，所以 x = 7。" },
          { name: "倒推法", text: "想「几加 3 等于 10」：用 10 − 3 倒推回去，得 7。" },
          { name: "代入检验", text: "把 7 放回礼盒：7 + 3 = 10，左右相等，7 真是方程的解。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：解方程时为什么两边要「同时」做一样的操作？只动一边会发生什么？"
      },
      {
        type: "beauty",
        headline: "「方程」这个名字，两千岁啦！",
        paragraphs: [
          "两千年前的中国古书《九章算术》里，就有一章叫「方程」——不过它说的不是 x，而是用一根根小算筹，把数量摆成方方正正的阵。",
          "古人按规矩挪动算筹，「两边同加同减」，就能一次解出好几个未知数——思路和你今天用的天平一模一样！",
          "这套方法比欧洲早了上千年。去博物馆看看算筹，你会发现：你解的每一道方程，都踩着古人的脚印。"
        ],
        museum: "his-suanchou"
      }
    ]
  },

  /* ================= 单元 6：多边形的面积 ================= */
  {
    id: "g5u6",
    title: "多边形的面积",
    subtitle: "剪一剪，拼一拼",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "斜花坛的草皮订单",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <path d="M14 26V206M50 26V206M86 26V206M122 26V206M158 26V206M194 26V206M230 26V206M266 26V206M302 26V206M338 26V206M374 26V206M14 26H374M14 62H374M14 98H374M14 134H374M14 170H374M14 206H374" stroke="#e3d5fa" stroke-width="1" fill="none"/>
          <polygon points="50,170 194,170 158,62 14,62" fill="#c8b6ff" stroke="#9b5de5" stroke-width="3"/>
          <polygon points="14,62 50,62 50,170" fill="#9b5de5"/>
          <line x1="50" y1="62" x2="50" y2="170" stroke="#7c3aed" stroke-width="3" stroke-dasharray="6 5"/>
          <text x="58" y="56" font-size="16">✂️</text>
          <text x="58" y="120" font-size="13" fill="#5b2a9d" font-weight="bold">高 3 米</text>
          <text x="122" y="192" font-size="14" fill="#5b2a9d" font-weight="bold" text-anchor="middle">底 4 米</text>
          <path d="M204 116 h22 m-9 -9 l9 9 -9 9" stroke="#7c3aed" stroke-width="4" fill="none"/>
          <rect x="230" y="62" width="144" height="108" fill="#ffffff" stroke="#9b5de5" stroke-width="3"/>
          <text x="302" y="120" font-size="15" fill="#5b2a9d" font-weight="bold" text-anchor="middle">4 × 3 = 12 格</text>
          <text x="200" y="230" font-size="16" fill="#5b2a9d" font-weight="bold" text-anchor="middle">咔嚓！斜花坛变成长方形啦！</text>
        </svg>`,
        paragraphs: [
          "紫晶星球要修一座新星花坛，设计图却让大家犯了难：花坛是斜斜的平行四边形！底 4 米、高 3 米，该订多少块草皮呢？",
          "长方形花坛好办，长 × 宽一乘就完事。可这斜家伙往方格纸上一放，边边角角全是半个格，根本数不准！",
          "园艺师猫头鹰掏出一把大剪刀：「别急，沿这条高剪一刀，把剪下的三角形搬到右边去……」<b>咔嚓！斜花坛变成了方方正正的长方形！</b>"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先热热身，复习长方形的面积：这块 4 × 3 的方格地是长方形的，每一小格是 1 块草皮。点击格子，把它铺满！",
        config: { interactive: true, rows: 3, cols: 4 },
        successText: "铺满了！12 块草皮，长方形面积 = 长 × 宽 = 4 × 3 = 12。接下来，要把斜斜的图形也变成长方形！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "平行四边形花坛，底 4 格、高 3 格。沿高剪下左边的三角形，平移到右边——正好拼成一个长方形！", state: { rows: 3, cols: 4, filled: 0, showCount: true } },
          { caption: "拼出的长方形，长 = 底，宽 = 高：面积 = 底 × 高 = 4 × 3 = 12 格。", state: { rows: 3, cols: 4, filled: 12, showCount: true } },
          { caption: "三角形怎么算？拿两个完全一样的三角形，转一转拼在一起，也能拼成平行四边形。", state: { rows: 3, cols: 4, filled: 12, showCount: true } },
          { caption: "一个三角形是拼出图形的一半：底 × 高 ÷ 2 = 4 × 3 ÷ 2 = 6 格。", state: { rows: 3, cols: 4, filled: 6, showCount: true } },
          { caption: "梯形也拼：两个完全一样的梯形拼成平行四边形，它的底是「上底 + 下底」= 2 + 4 = 6，高 3，面积 18。", state: { rows: 3, cols: 6, filled: 18, showCount: true } },
          { caption: "一个梯形是一半：(2 + 4) × 3 ÷ 2 = 9。记住共同的小秘密：都变成长方形或平行四边形！", state: { rows: 3, cols: 3, filled: 9, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把剪拼的把戏，写成数学的语言：",
          "S 表示面积，a 表示底，h 表示高——三个公式，全是「变成长方形」变出来的。"
        ],
        formula: "S = ah　S = ah ÷ 2　S = (a + b)h ÷ 2",
        keypoints: [
          "平行四边形剪拼成长方形：S = ah（底 × 高）",
          "两个完全一样的三角形拼成平行四边形：S = ah ÷ 2",
          "两个完全一样的梯形拼成平行四边形：S = (a + b)h ÷ 2",
          "高必须垂直于底；三角形、梯形千万别忘了 ÷ 2"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "平行四边形花坛底 5 米、高 4 米，面积是 □ 平方米。", answer: "20",
            hint: "S = ah，底乘高", explain: "S = ah = 5 × 4 = 20 平方米。" },
          { type: "choice", level: "基础", q: "三角形底 6 厘米、高 4 厘米，面积是多少？", options: ["24 平方厘米", "12 平方厘米", "10 平方厘米"], answer: 1,
            hint: "底 × 高之后，别忘了还有一步", explain: "S = ah ÷ 2 = 6 × 4 ÷ 2 = 12 平方厘米。÷ 2 不能丢！" },
          { type: "choice", level: "基础", q: "梯形上底 3 米、下底 5 米、高 4 米，面积是多少？", options: ["32 平方米", "16 平方米", "60 平方米"], answer: 1,
            hint: "先算上底加下底，再乘高、除以 2", explain: "S = (a + b)h ÷ 2 = (3 + 5) × 4 ÷ 2 = 16 平方米。" },
          { type: "choice", level: "变式", q: "为什么三角形的面积公式里要「÷ 2」？", options: ["因为三角形比四边形少一条边", "是数学家随便约定的", "两个完全一样的三角形才能拼成平行四边形，一个只是它的一半"], answer: 2,
            hint: "想想动画里两个三角形拼图", explain: "拼成的平行四边形面积是 底 × 高，一个三角形正好占一半，所以要 ÷ 2。" },
          { type: "choice", level: "变式", q: "一个平行四边形面积是 24 平方米，底是 6 米，高是多少？", options: ["8 米", "3 米", "4 米"], answer: 2,
            hint: "公式倒着用：高 = 面积 ÷ 底", explain: "24 ÷ 6 = 4 米。知道面积和底，就能倒推出高。" },
          { type: "judge", level: "变式", q: "计算三角形面积，用底 × 高就行了，不用除以 2。", answer: false,
            hint: "底 × 高 算出来的是拼成的平行四边形", explain: "底 × 高 是平行四边形的面积，一个三角形只是它的一半，必须 ÷ 2。" },
          { type: "fill", level: "挑战", q: "一块三角形交通标志牌，底 8 分米、高 5 分米，面积是 □ 平方分米。", answer: "20",
            hint: "8 × 5 之后还要 ÷ 2", explain: "S = 8 × 5 ÷ 2 = 20 平方分米。" },
          { type: "choice", level: "挑战", q: "梯形水渠的横截面：上口宽 4 米、下口宽 2 米、深 3 米，横截面的面积是多少？", options: ["18 平方米", "24 平方米", "9 平方米"], answer: 2,
            hint: "上口就是上底，下口就是下底，深就是高", explain: "S = (4 + 2) × 3 ÷ 2 = 9 平方米。上底下底交换位置，结果一样。" },
          { type: "fill", level: "温故", q: "还记得吗：一个长方体礼物盒长 4 分米、宽 3 分米、高 2 分米，它的体积是 □ 立方分米。", answer: "24",
            hint: "长方体体积 = 长 × 宽 × 高", explain: "4 × 3 × 2 = 24 立方分米。体积是「占多大空间」，今天学的面积是「铺多大面」，别搞混哦！" }
        ]
      },
      {
        type: "review",
        question: "平行四边形的面积为什么是 底 × 高？",
        ways: [
          { name: "剪拼法", text: "沿高剪下一个三角形，平移到右边，变成长方形：长 = 底，宽 = 高，所以面积 = 底 × 高。" },
          { name: "数格子", text: "底 4、高 3 的平行四边形，拼好后在方格纸上正好铺满 12 格：4 × 3 = 12。" },
          { name: "举一反三", text: "三角形和梯形都能用两个拼成平行四边形再 ÷ 2——三个公式，同一个剪拼思路。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么三角形的面积要除以 2？（可以拿两块一样的三角尺拼给他们看）"
      },
      {
        type: "beauty",
        headline: "剪一剪、拼一拼：中国人的面积智慧",
        paragraphs: [
          "三国时期的数学家刘徽，给《九章算术》做注解时提出「出入相补」：把图形剪开移走，多出来的和少掉的一样多，面积就不会变。",
          "后来赵爽画「弦图」证明勾股定理，靠的也是这套剪拼功夫——四个直角三角形围着一个小正方形，一拼一补，真理自己就站出来了。",
          "你今天把平行四边形剪成长方形，用的正是两千年前的老办法。去博物馆看看那幅了不起的弦图，再去实验室玩玩密铺吧！"
        ],
        museum: "prf-gougu",
        lab: "tessellation"
      }
    ]
  }
);
