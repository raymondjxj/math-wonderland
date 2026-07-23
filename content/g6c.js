/* ============================================================
   数学奇境 · 六年级扩展单元（对齐人教版六年级下册）
   单元：7 比例 / 8 百分数（二）
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[6] = MW.content[6] || { grade: 6, name: "六年级 · 玫瑰星球", units: [] };
G.units.push(

  /* ================= 单元 7：比例 ================= */
  {
    id: "g6u7",
    title: "比例",
    subtitle: "照片放大的不变形密码",
    tag: "推理",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "照相馆的放大难题",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="344" cy="40" r="22" fill="#ffd6ec"/>
          <text x="200" y="36" font-size="17" fill="#b03a82" text-anchor="middle" font-weight="bold">📷 玫瑰照相馆</text>
          <rect x="40" y="58" width="80" height="120" rx="8" fill="#fff" stroke="#f15bb5" stroke-width="5"/>
          <circle cx="80" cy="108" r="20" fill="#f15bb5"/>
          <circle cx="80" cy="108" r="11" fill="#ff8ac8"/>
          <path d="M80 128 Q78 148 72 156" stroke="#3a9e6e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <text x="80" y="202" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">2:3 放大成 4:6 ✓</text>
          <text x="165" y="130" font-size="28" fill="#b03a82" font-weight="bold">?</text>
          <rect x="220" y="88" width="140" height="90" rx="8" fill="#fff" stroke="#f15bb5" stroke-width="5"/>
          <ellipse cx="290" cy="124" rx="34" ry="14" fill="#f15bb5"/>
          <ellipse cx="290" cy="124" rx="18" ry="7" fill="#ff8ac8"/>
          <path d="M290 138 Q288 152 284 160" stroke="#3a9e6e" stroke-width="4" fill="none" stroke-linecap="round"/>
          <text x="290" y="202" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">只拉长 → 玫瑰变油条！</text>
        </svg>`,
        paragraphs: [
          "玫瑰星球上，朵朵的照相馆开张啦。她拍了一张 2 行 3 列的小照片，照片上的玫瑰又圆又精神。",
          "客人说：「帮我放大 2 倍，挂在大厅里！」朵朵把长和宽都乘 2，变成 4 行 6 列。挂上一看：玫瑰还是那朵玫瑰，一点儿没变形！",
          "第二天，浣熊老板也来放大照片，可他只把长乘 3，宽一动不动。结果——圆圆的玫瑰变成了长长的「油条」！<b>同样是放大，为什么一个没变样、一个变了样？</b>"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先别管为什么，动手摆一摆：小照片是 2 行 3 列，用「＋」把它放大 2 倍——摆出 4 行 6 列的大照片！",
        config: { interactive: true, rows: 2, cols: 3, targetRows: 4, targetCols: 6 },
        successText: "摆好了！4 行 6 列，正好是 2 行 3 列的长和宽都乘 2。形状一模一样，只是变大了——这就是「不变形的放大」。"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "把照片看成格子图：小照片 2 行 3 列，长和宽的比是 2:3。", state: { rows: 2, cols: 3, filled: 6, showCount: true } },
          { caption: "长和宽都乘 2：4 行 6 列，比是 4:6。形状变了吗？一点儿没变！", state: { rows: 4, cols: 6, filled: 24, showCount: true } },
          { caption: "再放大：6 行 9 列，比是 6:9。还是同一个形状，只是更大。", state: { rows: 6, cols: 9, filled: 54, showCount: true } },
          { caption: "算算比值：2:3 = 2/3，4:6 = 2/3，6:9 = 2/3。比值相等的两个比，可以写成比例：2:3 = 4:6。", state: { rows: 4, cols: 6, filled: 24, showCount: true } },
          { caption: "浣熊老板只把长乘 3：2 行 6 列，比是 2:6。2/6 = 1/3，和 2/3 不相等——形状变了，玫瑰成了油条！", state: { rows: 2, cols: 6, filled: 12, showCount: true } },
          { caption: "比例里藏着一把钥匙：2:3 = 4:6 中，两端的 2 和 6 叫外项，中间的 3 和 4 叫内项。2×6 = 12，3×4 = 12——外项积等于内项积！", state: { rows: 4, cols: 6, filled: 24, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「放大不变形」的秘密，写成数学的语言：",
          "表示两个比相等的式子，叫做比例。比例里还藏着一条铁律，和两种会「一起变」的数量关系。"
        ],
        formula: "2:3 = 4:6  →  2 × 6 = 3 × 4",
        keypoints: [
          "表示两个比相等的式子叫做比例，如 2:3 = 4:6",
          "比例两端的两个数叫外项，中间的两个数叫内项",
          "比例的基本性质：两个外项的积 = 两个内项的积",
          "速度一定，路程 ÷ 时间 = 速度（不变）→ 路程和时间成正比例",
          "路程一定，速度 × 时间 = 路程（不变）→ 速度和时间成反比例"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "下面哪一组中的两个比能组成比例？", options: ["2:3 和 4:6", "2:3 和 3:2", "1:2 和 2:5", "5:3 和 3:5"], answer: 0,
            hint: "分别算出比值，看哪一组两个比值相等", explain: "2:3 = 2/3，4:6 = 2/3，比值相等，能组成比例。其余三组比值都不相等。" },
          { type: "fill", level: "基础", q: "3:5 = 9:□，□ 里填几？", answer: "15",
            hint: "用基本性质：3 × □ = 5 × 9", explain: "5 × 9 = 45，45 ÷ 3 = 15，所以 □ = 15。外项积等于内项积。" },
          { type: "choice", level: "变式", q: "为什么在 2:3 = 4:6 里，2×6 一定等于 3×4？", options: ["因为两个比相等，交叉相乘后两边必然相同", "因为 2、3、4、6 在乘法口诀里刚好挨着", "只是碰巧，换一组比例就不成立了"], answer: 0,
            hint: "把比写成分数：2/3 = 4/6，两边同时乘 3×6 试试", explain: "2:3 = 4:6 就是 2/3 = 4/6。两边同乘 3×6，左边得到 2×6，右边得到 3×4——所以每组比例都满足外项积 = 内项积，绝不是碰巧。" },
          { type: "judge", level: "变式", q: "朵朵说：「我 6 岁高 120 厘米，12 岁高 150 厘米。年龄乘 2，身高没有乘 2，所以身高和年龄不成正比例。」她说得对吗？", answer: true,
            hint: "成正比例的两个量，比值必须始终不变", explain: "她说得对。120÷6 = 20，150÷12 = 12.5，比值一直在变，所以身高和年龄不成正比例。会一起变大，不代表成正比例！" },
          { type: "choice", level: "变式", q: "汽车速度一定，2 小时行 120 千米。照这样的速度，3 小时行多少千米？", options: ["180 千米", "150 千米", "200 千米", "360 千米"], answer: 0,
            hint: "先求 1 小时行多少：120 ÷ 2 = ?", explain: "速度一定，路程和时间成正比例：120 ÷ 2 = 60（千米/时），60 × 3 = 180（千米）。" },
          { type: "fill", level: "挑战", q: "修一条玫瑰大道，每天修 120 米，12 天修完。如果每天修 160 米，□ 天修完。", answer: "9",
            hint: "路的总长不变：先算总长 120 × 12，再除以 160", explain: "总长 = 120 × 12 = 1440（米），1440 ÷ 160 = 9（天）。每天修的 × 天数 = 总长（一定），成反比例。" },
          { type: "choice", level: "挑战", q: "用 4、6、8、12 这四个数组成比例，下面哪个是对的？", options: ["4:6 = 8:12", "4:6 = 12:8", "6:4 = 8:12", "4:12 = 8:6"], answer: 0,
            hint: "挨个验算外项积和内项积：相等才对", explain: "4:6 = 8:12 中，4 × 12 = 48，6 × 8 = 48，外项积 = 内项积 ✓。其余三组算出来都不相等。" },
          { type: "choice", level: "温故", q: "还记得吗：上册学的比——6:8 化成最简整数比是多少？", options: ["3:4", "4:3", "2:3", "8:6"], answer: 0,
            hint: "前项和后项同时除以它们的最大公因数 2", explain: "6:8 = (6÷2):(8÷2) = 3:4。化简比用的是比的基本性质，今天的比例就是在它上面盖起来的。" }
        ]
      },
      {
        type: "review",
        question: "2:3 = 4:6 里，为什么外项积一定等于内项积？",
        ways: [
          { name: "写成分数", text: "2:3 = 4:6 就是 2/3 = 4/6。两边同时乘 3×6，左边得 2×6，右边得 3×4——外项积自然等于内项积。" },
          { name: "商不变的规律", text: "2÷3 和 4÷6 的商都是 2/3。被除数和除数同乘 2，商不变，所以两个比相等，能组成比例。" },
          { name: "格子图", text: "2 行 3 列放大成 4 行 6 列，格子从 6 变 24，乘了 4 = 2×2。长乘 2、宽也乘 2，谁都没吃亏，形状当然不变。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么浣熊老板只把长放大，玫瑰就变成了「油条」？（可以画 2×3 和 2×6 的格子图给他们看）"
      },
      {
        type: "beauty",
        headline: "0.618：美了几千年的黄金比",
        paragraphs: [
          "两千多年前，古希腊数学家欧几里得在《几何原本》里写下一个神奇的比例：把一条线段分成两段，使「全段 : 长段 = 长段 : 短段」，这个比大约是 1 : 0.618，叫做黄金比。",
          "帕特农神庙的正面、蒙娜丽莎的脸、向日葵种子的螺旋……这些公认的「美」，背后都藏着接近黄金比的比例。",
          "去实验室转一转斐波那契数列：1、1、2、3、5、8、13……相邻两数的比会越来越接近黄金比。比例，原来是大自然的审美！"
        ],
        lab: "fibonacci",
        museum: "ppl-euclid"
      }
    ]
  },

  /* ================= 单元 8：百分数（二） ================= */
  {
    id: "g6u8",
    title: "百分数（二）",
    subtitle: "折扣、成数、税率与利率",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "八折是 8 元吗？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="344" cy="40" r="22" fill="#ffd6ec"/>
          <rect x="86" y="14" width="140" height="34" rx="10" fill="#b03a82"/>
          <text x="156" y="38" font-size="19" fill="#fff" text-anchor="middle" font-weight="bold">全场八折</text>
          <rect x="70" y="86" width="170" height="104" rx="10" fill="#fff" stroke="#2b2d42" stroke-width="3"/>
          <rect x="58" y="58" width="194" height="30" rx="10" fill="#f15bb5"/>
          <g fill="#ffd6ec">
            <rect x="82" y="58" width="16" height="30"/>
            <rect x="130" y="58" width="16" height="30"/>
            <rect x="178" y="58" width="16" height="30"/>
            <rect x="226" y="58" width="16" height="30"/>
          </g>
          <rect x="58" y="58" width="194" height="30" rx="10" fill="none" stroke="#2b2d42" stroke-width="3"/>
          <rect x="96" y="106" width="80" height="22" rx="11" fill="#f15bb5"/>
          <rect x="150" y="106" width="14" height="52" rx="7" fill="#f15bb5"/>
          <circle cx="104" cy="117" r="4" fill="#ffd6ec"/><circle cx="122" cy="117" r="4" fill="#ffd6ec"/><circle cx="140" cy="117" r="4" fill="#ffd6ec"/>
          <rect x="86" y="160" width="70" height="26" rx="8" fill="#fff" stroke="#b03a82" stroke-width="2"/>
          <text x="121" y="178" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">¥100</text>
          <circle cx="312" cy="120" r="26" fill="#ffc233"/>
          <text x="312" y="127" font-size="17" fill="#b25e14" text-anchor="middle" font-weight="bold">8元</text>
          <text x="312" y="168" font-size="15" fill="#b03a82" text-anchor="middle" font-weight="bold">八折 = 8元？</text>
          <text x="200" y="220" font-size="16" fill="#b03a82" text-anchor="middle" font-weight="bold">🏷️ 星星商店丰收节大促</text>
        </svg>`,
        paragraphs: [
          "玫瑰星球的丰收节到了，星星商店挂出大招牌：「全场八折！」",
          "朵朵看中一条 100 元的玫瑰围巾。她掏出 8 元：「八折，就是 8 元吧？」店员浣熊笑得直不起腰：「八折可不是 8 元呀！」",
          "农场伯伯说「今年葡萄比去年多收二成」，银行海报写着「年利率 2%」。<b>八折、二成、税率、利率……这些生活里的暗号，到底是什么意思？</b>"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先动手感受一下：把原价想成 100 个格子，打八折就是只付其中 80 格的钱。点击格子，把这张 8×10 的格子图铺满，看看八折到底有多少！",
        config: { interactive: true, rows: 8, cols: 10 },
        successText: "铺满啦，整整 80 格！100 格里的 80 格 = 80% = 八折。所以 100 元的围巾，八折要付 80 元，可不是 8 元！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "把总量画成 10×10 的百格图：100 格，就是 100%。", state: { rows: 10, cols: 10, filled: 100, showCount: false } },
          { caption: "八折：只付 80 格，就是原价的 80%。100 元 × 80% = 80 元。", state: { rows: 10, cols: 10, filled: 80, showCount: false } },
          { caption: "五折更猛：只付一半，50 格，就是 50%。几折就是十分之几、百分之几十。", state: { rows: 10, cols: 10, filled: 50, showCount: false } },
          { caption: "收成爱说「成数」：二成 = 20% = 20 格。「比去年多收二成」，就是多收 20%。", state: { rows: 10, cols: 10, filled: 20, showCount: false } },
          { caption: "商店挣钱要缴税：税率 5%，就是每 100 元营业额，交出 5 元修路灯、建学校。", state: { rows: 10, cols: 10, filled: 5, showCount: false } },
          { caption: "把钱存进银行，银行付利息：年利率 2%，存 100 元一年得利息 2 元。利息 = 本金 × 利率 × 时间。", state: { rows: 10, cols: 10, filled: 2, showCount: false } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把生活里的这些暗号，全部翻译成数学：",
          "它们都是百分数的应用——求一个数的百分之几，用乘法。"
        ],
        formula: "利息 = 本金 × 利率 × 时间",
        keypoints: [
          "折扣：几折 = 十分之几 = 百分之几十。八折 = 80%，七五折 = 75%",
          "成数：几成 = 十分之几。二成 = 20%，三成五 = 35%",
          "税率：应纳税额 = 营业额 × 税率",
          "利率：利息 = 本金 × 利率 × 时间，取钱时银行多给的那部分就是利息"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "100 元的玫瑰围巾打八折，要付多少元？", options: ["80 元", "8 元", "20 元", "120 元"], answer: 0,
            hint: "八折 = 80%，求 100 的 80% 用乘法", explain: "八折 = 80%，100 × 80% = 80（元）。便宜的那 20 元才是「省下的」。" },
          { type: "choice", level: "基础", q: "「二成」用百分数表示是多少？", options: ["20%", "2%", "200%", "0.2%"], answer: 0,
            hint: "几成就是十分之几：二成 = 2/10", explain: "二成 = 2/10 = 20%。成数和折扣一样，都是十分之几换了个说法。" },
          { type: "fill", level: "变式", q: "一件外套原价 200 元，商场打七五折，现价 □ 元。", answer: "150",
            hint: "七五折 = 75%，200 × 75% = ?", explain: "200 × 75% = 200 × 0.75 = 150（元）。七五折就是按原价的 75% 付款。" },
          { type: "judge", level: "变式", q: "「打九折」就是现价比原价便宜 90%。", answer: false,
            hint: "九折是按原价的 90% 付款，那便宜了多少？", explain: "错。九折 = 付原价的 90%，只便宜了 10%。付的和省的是两回事，别搞反啦。" },
          { type: "choice", level: "变式", q: "为什么打八折要用「100 × 80%」，而不是「100 − 8」？", options: ["因为「折」表示十分之几：八折 = 8/10 = 80%，要按原价的 80% 付款", "因为商店怕算错账，随便定的规矩", "因为 80% 读起来比 8 元好听"], answer: 0,
            hint: "想想百格图：八折是 100 格里的 80 格，还是 8 格？", explain: "「折」是十分之几的意思：八折 = 8/10 = 80%。100 元的 80% 是 80 元，所以用乘法。「减 8 元」是把八折错当成了 8 格。" },
          { type: "fill", level: "挑战", q: "朵朵把 500 元存进银行，年利率 2%，存 2 年，到期利息是 □ 元。", answer: "20",
            hint: "利息 = 本金 × 利率 × 时间：500 × 2% × 2", explain: "500 × 2% = 10（元）是一年的利息，存 2 年：10 × 2 = 20（元）。一步一步乘，就不会错。" },
          { type: "choice", level: "挑战", q: "面包房本月营业额 6000 元，按 5% 的税率缴营业税，应缴税多少元？", options: ["300 元", "30 元", "3000 元", "600 元"], answer: 0,
            hint: "应纳税额 = 营业额 × 税率：6000 × 5%", explain: "6000 × 5% = 6000 × 0.05 = 300（元）。税款用来修路灯、建学校，取之于民用之于民。" },
          { type: "choice", level: "温故", q: "还记得吗：上册学的百分数——3/4 化成百分数是多少？", options: ["75%", "34%", "7.5%", "0.75%"], answer: 0,
            hint: "先化成小数：3 ÷ 4 = 0.75，小数点向右移两位", explain: "3/4 = 0.75 = 75%。分数化百分数的本领，正是今天破解折扣暗号的钥匙。" }
        ]
      },
      {
        type: "review",
        question: "八折、二成、税率、利率，为什么说它们是「一家人」？",
        ways: [
          { name: "都是百分数", text: "八折 = 80%，二成 = 20%，税率 5%，年利率 2%——脱下生活的外衣，里面全是百分数。" },
          { name: "都画百格图", text: "把总量画成 100 格：付 80 格是八折，多收 20 格是二成，交出 5 格是税，多得 2 格是利息。一看格子就明白。" },
          { name: "都用乘法", text: "它们都是「求一个数的百分之几」：100 × 80% = 80，6000 × 5% = 300，500 × 2% × 2 = 20。一个模子！" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：存 1000 元，年利率 2%，一年后利息是多少？（提示：利息 = 本金 × 利率 × 时间）"
      },
      {
        type: "beauty",
        headline: "华罗庚爷爷的 61.8%：百分数也能找最优",
        paragraphs: [
          "上一课我们见过黄金比 0.618，也就是 61.8%。上世纪 70 年代，我国数学家华罗庚爷爷带着它跑遍全国的工厂和田间。",
          "人们想找「最好的方案」：烤箱多少度面包最香？农药兑多少水效果最好？一个个试太慢，华爷爷就教大家「优选法」——每次都在 61.8% 的位置做试验，几下就能逼近最好的答案。",
          "一个百分数，帮全国省下了药材、粮食和时间。数学用对了地方，就是实实在在的生产力！"
        ],
        museum: "ppl-hua"
      }
    ]
  }
);
