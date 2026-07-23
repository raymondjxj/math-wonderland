/* ============================================================
   数学奇境 · 三年级扩展单元 v2（第 7~8 课）
   单元：7 年、月、日 / 8 两位数乘两位数
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[3] = MW.content[3] || { grade: 3, name: "三年级 · 青绿星球", units: [] };
G.units.push(

  /* ================= 单元 7：年、月、日 ================= */
  {
    id: "g3u7",
    title: "年、月、日",
    subtitle: "日历格子里的秘密",
    tag: "数感",
    minutes: 25,
    scenes: [
      {
        type: "story",
        title: "2 月的最后一天是几日？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="46" cy="40" r="22" fill="#ffd166"/>
          <rect x="36" y="64" width="188" height="148" rx="12" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
          <rect x="36" y="64" width="188" height="26" rx="12" fill="#2ec4b6"/>
          <text x="130" y="83" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">2 月</text>
          <g fill="#b9ece8">
            <rect x="48" y="100" width="18" height="18" rx="4"/><rect x="72" y="100" width="18" height="18" rx="4"/><rect x="96" y="100" width="18" height="18" rx="4"/><rect x="120" y="100" width="18" height="18" rx="4"/><rect x="144" y="100" width="18" height="18" rx="4"/><rect x="168" y="100" width="18" height="18" rx="4"/><rect x="192" y="100" width="18" height="18" rx="4"/>
            <rect x="48" y="122" width="18" height="18" rx="4"/><rect x="72" y="122" width="18" height="18" rx="4"/><rect x="96" y="122" width="18" height="18" rx="4"/><rect x="120" y="122" width="18" height="18" rx="4"/><rect x="144" y="122" width="18" height="18" rx="4"/><rect x="168" y="122" width="18" height="18" rx="4"/><rect x="192" y="122" width="18" height="18" rx="4"/>
            <rect x="48" y="144" width="18" height="18" rx="4"/><rect x="72" y="144" width="18" height="18" rx="4"/><rect x="96" y="144" width="18" height="18" rx="4"/><rect x="120" y="144" width="18" height="18" rx="4"/><rect x="144" y="144" width="18" height="18" rx="4"/><rect x="168" y="144" width="18" height="18" rx="4"/><rect x="192" y="144" width="18" height="18" rx="4"/>
            <rect x="48" y="166" width="18" height="18" rx="4"/><rect x="72" y="166" width="18" height="18" rx="4"/><rect x="96" y="166" width="18" height="18" rx="4"/><rect x="120" y="166" width="18" height="18" rx="4"/><rect x="144" y="166" width="18" height="18" rx="4"/><rect x="168" y="166" width="18" height="18" rx="4"/><rect x="192" y="166" width="18" height="18" rx="4"/>
          </g>
          <rect x="48" y="188" width="18" height="18" rx="4" fill="#ffffff" stroke="#159e92" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="57" y="202" font-size="13" fill="#159e92" font-weight="bold" text-anchor="middle">?</text>
          <circle cx="306" cy="116" r="40" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
          <line x1="306" y1="116" x2="306" y2="86" stroke="#159e92" stroke-width="4" stroke-linecap="round"/>
          <line x1="306" y1="116" x2="322" y2="98" stroke="#159e92" stroke-width="4" stroke-linecap="round"/>
          <circle cx="306" cy="116" r="5" fill="#2ec4b6"/>
          <rect x="266" y="170" width="80" height="30" rx="8" fill="#159e92"/>
          <text x="306" y="191" font-size="18" fill="#ffffff" font-weight="bold" text-anchor="middle">14:00</text>
          <text x="200" y="230" font-size="16" fill="#0f766e" font-weight="bold" text-anchor="middle">📅 28 日？29 日？14:00 又是几点？</text>
        </svg>`,
        paragraphs: [
          "青绿星球要举办「星星花大会」，邀请函上写着：3 月 1 日开幕，报到时间是 14:00。",
          "阿绿想提前一天收拾行李。可 3 月 1 日的前一天，是 2 月几日呢？小刺说 28 日，球球说 29 日，果果一拍桌子：「我还看过 2 月 30 日！」",
          "三个答案，到底谁对？还有，钟面上明明只有 12 个数，14:00 又是从哪儿冒出来的？<b>日历和时钟里，藏着一整套秘密……</b>"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先动手铺一张月历：月历上每一行是一个星期，有 7 天。平年的 2 月正好 4 个星期——把这 4 行 7 列的格子铺满吧！",
        config: { interactive: true, rows: 4, cols: 7 },
        successText: "铺好啦！4 行 7 列，4 × 7 = 28 个格子，正好住下平年 2 月的 28 天，一天不多，一天不少。"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "月历上每个格子住一天。一行 7 天，就是一个星期。", state: { rows: 1, cols: 7, filled: 7, showCount: true } },
          { caption: "平年的 2 月正好 4 个星期：4 × 7 = 28 天，排得整整齐齐。", state: { rows: 4, cols: 7, filled: 28, showCount: true } },
          { caption: "小月有 30 天：4 月、6 月、9 月、11 月。第 5 行只住 2 天。", state: { rows: 5, cols: 7, filled: 30, showCount: true } },
          { caption: "大月有 31 天：1、3、5、7、8、10、12 月。第 5 行住了 3 天。", state: { rows: 5, cols: 7, filled: 31, showCount: true } },
          { caption: "2 月最特别：平年 28 天，闰年 29 天。年份是 4 的倍数，一般是闰年，闰年全年 366 天。", state: { rows: 5, cols: 7, filled: 29, showCount: true } },
          { caption: "再看时钟：一天有 24 小时，时针正好走两圈。中午以后接着数：下午 1 时是 13 时，下午 2 时是 14 时，半夜 12 时是 24 时。", state: { rows: 4, cols: 6, filled: 24, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把月历和时钟的秘密，写成数学的语言：",
          "月份分大月、小月，2 月是「特殊月」；一天的时间可以用 24 时计时法一口气数到底。"
        ],
        formula: "1 年 = 12 个月　1 天 = 24 小时",
        keypoints: [
          "大月 31 天：1、3、5、7、8、10、12 月——口诀：一三五七八十腊，三十一天永不差",
          "小月 30 天：4、6、9、11 月；2 月最特别：平年 28 天，闰年 29 天",
          "平年全年 365 天，闰年全年 366 天；公历年份是 4 的倍数，一般是闰年",
          "24 时计时法：中午 12 时以后接着数，下午几时 = 12 + 几，14 时就是下午 2 时"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "下面哪个月份是大月？", options: ["4 月", "7 月", "6 月", "11 月"], answer: 1,
            hint: "背背口诀：一三五七八十腊", explain: "7 月是大月，有 31 天。4、6、11 月都是小月，只有 30 天。" },
          { type: "choice", level: "基础", q: "下午 3 时用 24 时计时法表示是几时？", options: ["3 时", "13 时", "15 时", "18 时"], answer: 2,
            hint: "中午 12 时以后接着数：12 + 3 = ?", explain: "时针已经走完一圈 12 小时，再走 3 小时：12 + 3 = 15，下午 3 时就是 15 时。" },
          { type: "judge", level: "变式", q: "每一年的 2 月都有 28 天。", answer: false,
            hint: "想想故事里球球说的 29 日", explain: "平年 2 月 28 天，闰年 2 月 29 天。比如 2024 年是闰年，2 月就有 29 天。" },
          { type: "choice", level: "变式", q: "为什么下午 2 时可以写成 14 时？", options: ["因为写错了，只能写 2 时", "因为时针已走完一圈 12 小时，接着数 12 + 2 = 14", "因为数字越大越厉害"], answer: 1,
            hint: "一天有 24 小时，时针要走两圈", explain: "第一圈是 1~12 时，第二圈接着数：下午 1 时是 13 时，下午 2 时就是 14 时。这样一天里的每个时刻都有唯一的名字。" },
          { type: "fill", level: "基础", q: "平年全年有 □ 天。", answer: "365",
            hint: "7 个大月、4 个小月，再加 2 月的 28 天", explain: "7 × 31 + 4 × 30 + 28 = 217 + 120 + 28 = 365，平年全年 365 天。" },
          { type: "choice", level: "挑战", q: "3 月 1 日的前一天是几日？", options: ["2 月 28 日", "2 月 29 日", "2 月 30 日", "不一定，要看这一年是平年还是闰年"], answer: 3,
            hint: "2 月的最后一天，平年和闰年一样吗？", explain: "平年 2 月 28 天，前一天是 2 月 28 日；闰年 2 月 29 天，前一天是 2 月 29 日。2 月 30 日根本不存在！" },
          { type: "choice", level: "挑战", q: "星际电影 14:30 开场，放映 90 分钟，几点结束？", options: ["15:60", "16:00", "15:00", "17:00"], answer: 1,
            hint: "90 分钟 = 1 小时 30 分钟", explain: "14:30 过 1 小时是 15:30，再过 30 分钟是 16:00。分钟满 60 要进 1 小时，没有 15:60 这种写法。" },
          { type: "fill", level: "温故", q: "还记得吗：上册学过的时、分、秒——1 时 = □ 分", answer: "60",
            hint: "分针走一整圈，时针才走一大格", explain: "1 时 = 60 分。时、分、秒的本领和 24 时计时法连在一起啦！" }
        ]
      },
      {
        type: "review",
        question: "2 月为什么有时 28 天、有时 29 天？一年又有多少天？",
        ways: [
          { name: "数格子", text: "月历一格住一天：大月铺出 31 格，小月 30 格，平年 2 月正好 4 个星期，28 格。" },
          { name: "拳头记忆法", text: "握紧拳头数指节：凸起的「山峰」是大月 31 天，凹下的「山谷」是小月 30 天，2 月单独记。" },
          { name: "加一加", text: "7 个大月 × 31 天 + 4 个小月 × 30 天 + 2 月 28 天 = 217 + 120 + 28 = 365 天（平年）。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么下午 2 时也可以叫 14 时？再和他们一起数一数，今年的 2 月有几天。"
      },
      {
        type: "beauty",
        headline: "跟着太阳和月亮过日子",
        paragraphs: [
          "几千年前，没有手机也没有钟表。人们抬头看：太阳升起又落下是一天，月亮圆了又缺是一个月，草木枯了又绿是一年。",
          "古巴比伦人最爱观星。他们把星星的运行刻成泥板，定下七天为一个「星期」，还把一天切成 24 小时——你今天用的日历和钟表，都有他们的影子。",
          "可是月亮和太阳的「步子」总对不齐，古人只好给有些年份多塞进一天，这就是闰年。去博物馆看看巴比伦人的星星泥板吧！"
        ],
        museum: "his-babylon"
      }
    ]
  },

  /* ================= 单元 8：两位数乘两位数 ================= */
  {
    id: "g3u8",
    title: "两位数乘两位数",
    subtitle: "拆开算的面积魔法",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "星空地砖有多少块？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="352" cy="42" r="22" fill="#ffd166"/>
          <rect x="52" y="22" width="168" height="182" rx="6" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
          <g stroke="#b9ece8" stroke-width="2">
            <line x1="66" y1="22" x2="66" y2="204"/><line x1="80" y1="22" x2="80" y2="204"/><line x1="94" y1="22" x2="94" y2="204"/><line x1="108" y1="22" x2="108" y2="204"/><line x1="122" y1="22" x2="122" y2="204"/><line x1="136" y1="22" x2="136" y2="204"/><line x1="150" y1="22" x2="150" y2="204"/><line x1="164" y1="22" x2="164" y2="204"/><line x1="178" y1="22" x2="178" y2="204"/><line x1="192" y1="22" x2="192" y2="204"/><line x1="206" y1="22" x2="206" y2="204"/>
            <line x1="52" y1="36" x2="220" y2="36"/><line x1="52" y1="50" x2="220" y2="50"/><line x1="52" y1="64" x2="220" y2="64"/><line x1="52" y1="78" x2="220" y2="78"/><line x1="52" y1="92" x2="220" y2="92"/><line x1="52" y1="106" x2="220" y2="106"/><line x1="52" y1="120" x2="220" y2="120"/><line x1="52" y1="134" x2="220" y2="134"/><line x1="52" y1="148" x2="220" y2="148"/><line x1="52" y1="162" x2="220" y2="162"/><line x1="52" y1="176" x2="220" y2="176"/><line x1="52" y1="190" x2="220" y2="190"/>
          </g>
          <g>
            <line x1="300" y1="118" x2="300" y2="132" stroke="#159e92" stroke-width="4" stroke-linecap="round"/>
            <circle cx="300" cy="114" r="6" fill="#ffd166"/>
            <rect x="270" y="132" width="60" height="46" rx="14" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
            <circle cx="290" cy="152" r="5" fill="#159e92"/><circle cx="310" cy="152" r="5" fill="#159e92"/>
            <path d="M290 164 Q300 172 310 164" stroke="#159e92" stroke-width="3" fill="none" stroke-linecap="round"/>
            <rect x="264" y="182" width="72" height="42" rx="16" fill="#2ec4b6"/>
          </g>
          <text x="298" y="84" font-size="20" fill="#0f766e" font-weight="bold" text-anchor="middle">12 × 13 = ?</text>
          <text x="136" y="226" font-size="16" fill="#0f766e" font-weight="bold" text-anchor="middle">🧱 13 排，每排 12 块</text>
        </svg>`,
        paragraphs: [
          "青绿小学要铺一块「星空地砖」：每排 12 块亮晶晶的星星砖，一共要铺 13 排。",
          "阿绿自告奋勇算总数：12 × 13！可是……乘法口诀表最大才到 9 × 9，两位数乘两位数，还没学过呀。",
          "星星砖已经运到学校门口，一块一块数，要数到什么时候？<b>阿绿盯着这块方方正正的地砖，忽然有了主意……</b>"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "动手铺一铺这块星空地砖：每排 12 块，铺 13 排。铺满以后想一想：这么多格子，有没有聪明的数法？",
        config: { interactive: true, rows: 13, cols: 12 },
        successText: "铺满啦！13 排每排 12 块，一共 156 块。刚才一块一块铺多累呀——接下来学一个拆着算的好办法！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "这块星空地砖有 13 排，每排 12 块。12 × 13，等于多少块？", state: { rows: 13, cols: 12, filled: 156, showCount: false } },
          { caption: "没学过的乘法，就拆开算！把 13 排分成 10 排和 3 排。先算 10 排：12 × 10 = 120 块。", state: { rows: 13, cols: 12, filled: 120, showCount: false } },
          { caption: "再铺剩下的 3 排：12 × 3 = 36 块。合起来：120 + 36 = 156 块！", state: { rows: 13, cols: 12, filled: 156, showCount: false } },
          { caption: "竖式就是把这个过程写下来：先算 12 × 3 = 36，再算 12 × 10 = 120，最后相加得 156。", state: { rows: 13, cols: 12, filled: 156, showCount: false } },
          { caption: "把地砖转一转：12 排每排 13 块，13 × 12 也是 156。同一块地，怎么算都一样。", state: { rows: 12, cols: 13, filled: 156, showCount: false } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「拆开算」的办法，写成数学的语言：",
          "两位数乘两位数，把其中一个乘数拆成整十数和一位数，就变成两道已经会算的乘法。"
        ],
        formula: "12 × 13 = 12 × 10 + 12 × 3 = 120 + 36 = 156",
        keypoints: [
          "拆一拆：把 13 拆成 10 和 3，先乘整十，再乘个位，最后相加",
          "竖式第一步：用 13 个位上的 3 乘 12，得 36",
          "竖式第二步：用十位上的 1 乘 12，得 12 个十，也就是 120，末位要和十位对齐",
          "把两次的积相加：36 + 120 = 156；用估算检查：答案在 120 和 240 之间才合理"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "计算 12 × 13，把 13 拆成 10 和 3，先算 12 × 10 = ？", options: ["12", "120", "102", "1200"], answer: 1,
            hint: "12 × 1 = 12，12 × 10 呢？", explain: "12 × 10 = 120，10 排一共 120 块。" },
          { type: "fill", level: "基础", q: "12 × 13 = □", answer: "156",
            hint: "120 + 36 = ?", explain: "12 × 13 = 12 × 10 + 12 × 3 = 120 + 36 = 156。" },
          { type: "fill", level: "基础", q: "11 × 12 = □", answer: "132",
            hint: "把 12 拆成 10 和 2：11 × 10 + 11 × 2", explain: "11 × 10 = 110，11 × 2 = 22，110 + 22 = 132。" },
          { type: "choice", level: "变式", q: "为什么 12 × 13 可以拆成 12 × 10 + 12 × 3 来算？", options: ["因为 10 + 3 = 13，13 排分成两堆，总块数不变", "因为这样数字更好看", "只是碰巧答案一样"], answer: 0,
            hint: "想想那块星空地砖，切开以后块数变了吗？", explain: "13 排分成 10 排和 3 排，一块砖也没多没少，所以 12 × 10 + 12 × 3 和 12 × 13 一样多。" },
          { type: "judge", level: "变式", q: "两位数乘两位数，积一定是三位数。", answer: false,
            hint: "试试最大的两位数相乘……", explain: "不一定！10 × 10 = 100 是三位数，可 90 × 20 = 1800 就是四位数。" },
          { type: "choice", level: "挑战", q: "学校买来 21 盒粉笔，每盒 12 支，一共买来多少支？", options: ["42 支", "252 支", "242 支", "225 支"], answer: 1,
            hint: "21 × 12 = 21 × 10 + 21 × 2", explain: "21 × 10 = 210，21 × 2 = 42，210 + 42 = 252 支。" },
          { type: "fill", level: "挑战", q: "23 × 12 = □", answer: "276",
            hint: "23 × 10 = 230，23 × 2 = 46，再加起来", explain: "23 × 12 = 23 × 10 + 23 × 2 = 230 + 46 = 276。" },
          { type: "fill", level: "温故", q: "还记得吗：第 1 课学的多位数乘一位数——24 × 3 = □", answer: "72",
            hint: "先算 4 × 3 = 12，写 2 进 1；再算 20 × 3", explain: "24 × 3 = 72。拆开算的本领，从一位数乘法一直用到两位数乘法！" }
        ]
      },
      {
        type: "review",
        question: "12 × 13 怎么算？为什么拆开算，答案不变？",
        ways: [
          { name: "拆数法", text: "12 × 13 = 12 × 10 + 12 × 3 = 120 + 36 = 156。" },
          { name: "方格图", text: "13 排格子每排 12 块：先数 10 排 120 块，再数 3 排 36 块，一块没少，还是 156 块。" },
          { name: "竖式", text: "先算 12 × 3 = 36，再算 12 × 10 = 120，错开一位写，相加得 156。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：竖式第二步算出的「12」，为什么表示 120？（可以画一块方格地砖给他们看）"
      },
      {
        type: "beauty",
        headline: "格子里的乘法，铺在地上的美",
        paragraphs: [
          "把乘法画成方格，古人早就这么干过。中国古代的「铺地锦」，就是在斜线格子里算乘法，算完像一块漂亮的花布。",
          "方方正正的星星砖还能无缝无洞地铺满整个平面，这种本领叫「密铺」——蜜蜂的蜂巢、教堂的花窗，都是密铺的杰作。",
          "去实验室亲手拼一幅密铺图案，再去博物馆看看：一千五百多年前，祖冲之爷爷用惊人的计算，把圆周率算到了小数点后七位！"
        ],
        lab: "tessellation",
        museum: "ppl-zu"
      }
    ]
  }
);
