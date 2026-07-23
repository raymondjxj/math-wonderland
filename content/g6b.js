/* ============================================================
   数学奇境 · 六年级扩展单元 v2（对齐人教版六年级）
   单元：4 分数除法 / 5 负数 / 6 圆柱与圆锥
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[6] = MW.content[6] || { grade: 6, name: "六年级 · 玫瑰星球", units: [] };
G.units.push(

  /* ================= 单元 4：分数除法 ================= */
  {
    id: "g6u4",
    title: "分数除法",
    subtitle: "倒数的变身魔法",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "一壶玫瑰露怎么分？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="348" cy="38" r="20" fill="#ffd6ec"/>
          <rect x="42" y="66" width="86" height="126" rx="12" fill="#fff" stroke="#2b2d42" stroke-width="3"/>
          <rect x="48" y="92" width="74" height="94" rx="8" fill="#f15bb5"/>
          <path d="M128 84 Q158 84 156 112" stroke="#2b2d42" stroke-width="4" fill="none" stroke-linecap="round"/>
          <text x="85" y="215" font-size="15" fill="#b03a82" font-weight="bold" text-anchor="middle">4/5 升</text>
          <g stroke="#2b2d42" stroke-width="3">
            <path d="M190 100 h44 l-6 60 h-32 z" fill="#fff"/>
            <path d="M262 100 h44 l-6 60 h-32 z" fill="#fff"/>
          </g>
          <path d="M193 126 h38 l-4 34 h-30 z" fill="#ff8ac8"/>
          <path d="M265 126 h38 l-4 34 h-30 z" fill="#ff8ac8"/>
          <text x="212" y="186" font-size="14" fill="#5c607a" text-anchor="middle">每杯多少升？</text>
          <g stroke="#2b2d42" stroke-width="2.5">
            <rect x="172" y="196" width="12" height="26" rx="4" fill="#f15bb5"/>
            <rect x="190" y="196" width="12" height="26" rx="4" fill="#f15bb5"/>
            <rect x="208" y="196" width="12" height="26" rx="4" fill="#f15bb5"/>
            <rect x="226" y="196" width="12" height="26" rx="4" fill="#f15bb5"/>
            <rect x="244" y="196" width="12" height="26" rx="4" fill="#f15bb5"/>
            <rect x="262" y="196" width="12" height="26" rx="4" fill="#f15bb5"/>
            <rect x="280" y="196" width="12" height="26" rx="4" fill="#fff"/>
            <rect x="298" y="196" width="12" height="26" rx="4" fill="#fff"/>
          </g>
          <text x="330" y="214" font-size="13" fill="#b03a82" font-weight="bold">装满 6 瓶！</text>
          <text x="30" y="42" font-size="16" fill="#b03a82" font-weight="bold">3/4 升 ÷ 1/8 升小瓶 = ？</text>
        </svg>`,
        paragraphs: [
          "玫瑰星球的大丰收节到了！朵朵榨了满满一壶玫瑰露，正好 <b>4/5 升</b>。她想平均倒进 2 个水晶杯，每杯该倒多少升呢？",
          "「4/5 ÷ 2……分数也能做除法吗？」朵朵盯着水壶发愣。下午又有新任务：把 <b>3/4 升</b>玫瑰露装进 <b>1/8 升</b>的小瓶子，能装满几瓶？",
          "其实，分数除法藏着一个漂亮的「变身魔法」——学会它，这两个问题都能一口答出来！"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先动手感受：点击长条，涂出这壶玫瑰露的 4/5。涂好后想一想——把涂色部分平分成两半，每一半是几格？",
        config: { interactive: true, shape: "bar", parts: 5, target: 4 },
        successText: "涂好了！4 格就是 4/5。把 4 格平分成 2 份，每份 2 格——2/5！这就是 4/5 ÷ 2 的秘密，动画里见分晓。"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "一壶玫瑰露是 4/5 升：长条平均分成 5 格，涂满 4 格。", state: { shape: "bar", parts: 5, shaded: 4, showLabel: true } },
          { caption: "平均倒进 2 个杯子：4 格平分成 2 份，每份 2 格——每杯 2/5 升。4/5 ÷ 2 = 2/5！", state: { shape: "bar", parts: 5, shaded: 2, showLabel: true } },
          { caption: "换个看法：「平分成 2 份取 1 份」就是「取它的 1/2」。4/5 = 8/10，一半是 4/10 = 2/5，和 4/5 × 1/2 一模一样！", state: { shape: "bar", parts: 10, shaded: 4, showLabel: true } },
          { caption: "整数也来玩：1 升里有几个 1/4 升？长条分 4 格全涂满——4 个！1 ÷ 1/4 = 4。", state: { shape: "bar", parts: 4, shaded: 4, showLabel: true } },
          { caption: "小瓶问题：3/4 = 6/8，涂 6 格。每格 1/8 升装 1 瓶，数一数：正好 6 瓶！3/4 ÷ 1/8 = 6。", state: { shape: "bar", parts: 8, shaded: 6, showLabel: true } },
          { caption: "神奇的巧合？不是！6 = 3/4 × 8，8 正是 1/8 的倒数——「除以一个数」变身成「乘它的倒数」。", state: { shape: "bar", parts: 8, shaded: 6, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把刚才的切一切、数一数，写成数学的语言：",
          "除以一个不为 0 的数，等于乘这个数的倒数。乘积是 1 的两个数互为倒数：2 和 1/2，1/8 和 8。"
        ],
        formula: "4/5 ÷ 2 = 4/5 × 1/2 = 2/5　　3/4 ÷ 1/8 = 3/4 × 8 = 6",
        keypoints: [
          "「÷ 2」变身「× 1/2」，「÷ 1/8」变身「× 8」",
          "1 ÷ 1/4 = 4：1 里面正好有 4 个 1/4",
          "整数也有倒数：5 的倒数是 1/5",
          "0 没有倒数——除数也不能是 0"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "4/5 ÷ 2 = ？", options: ["2/5", "8/5", "5/2", "4/7"], answer: 0,
            hint: "把 4 格平分成 2 份；或者用变身魔法：4/5 × 1/2", explain: "4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5。" },
          { type: "fill", level: "基础", q: "1 ÷ 1/4 = ？", answer: "4",
            hint: "1 里面有几个 1/4？把长条切成 4 格数一数", explain: "1 里面有 4 个 1/4，所以 1 ÷ 1/4 = 4 = 1 × 4。" },
          { type: "judge", level: "基础", q: "6 的倒数是 1/6。", answer: true,
            hint: "互为倒数的两个数，乘积要等于 1：6 × 1/6 = ？", explain: "6 × 1/6 = 1，乘积是 1，所以 6 和 1/6 互为倒数。" },
          { type: "choice", level: "变式", q: "为什么说「除以一个数，等于乘它的倒数」？", options: ["「平均分几份取一份」和「乘几分之一」是同一件事，数格子也对得上", "数学家喜欢这样规定", "所有除法都比乘法难，所以要变身"], answer: 0,
            hint: "想想 4/5 ÷ 2：平分成 2 份取 1 份，就是取它的 1/2", explain: "÷2 是平分成 2 份取 1 份，×1/2 也是取一半——同一件事的两种写法，所以相等。" },
          { type: "judge", level: "变式", q: "3/4 ÷ 1/8 的商，比 3/4 大。", answer: true,
            hint: "除以比 1 小的数，是在数「有几个小份」", explain: "3/4 ÷ 1/8 = 6，6 比 3/4 大得多！除以比 1 小的数，商会变大。" },
          { type: "choice", level: "挑战", q: "3/4 ÷ 1/8 = ？", options: ["6", "3/32", "2/3", "3/8"], answer: 0,
            hint: "变身：÷ 1/8 变成 × 8", explain: "3/4 ÷ 1/8 = 3/4 × 8 = 24/4 = 6。" },
          { type: "choice", level: "挑战", q: "一根 4/5 米长的彩带，平均剪成 2 段，每段长多少米？", options: ["2/5 米", "8/5 米", "5/2 米", "7/5 米"], answer: 0,
            hint: "4/5 ÷ 2，变身成 4/5 × 1/2", explain: "4/5 × 1/2 = 4/10 = 2/5，每段长 2/5 米。" },
          { type: "choice", level: "温故", q: "还记得吗：第 1 课学的分数乘法——3/4 × 1/2 = ？", options: ["3/8", "4/6", "1/2", "3/4"], answer: 0,
            hint: "分子乘分子，分母乘分母", explain: "3/4 × 1/2 = (3×1)/(4×2) = 3/8。除法变身成乘法之后，全靠这位老朋友！" }
        ]
      },
      {
        type: "review",
        question: "4/5 ÷ 2 为什么是 2/5？「除以一个数 = 乘它的倒数」又是什么道理？",
        ways: [
          { name: "数格子", text: "长条分 5 格涂 4 格，平分成 2 份，每份 2 格——就是 2/5。" },
          { name: "变倒数", text: "「平分成 2 份取 1 份」就是「取它的 1/2」：4/5 ÷ 2 = 4/5 × 1/2 = 4/10 = 2/5。" },
          { name: "包含除", text: "3/4 ÷ 1/8 是问「3/4 里有几个 1/8」：3/4 = 6/8，数出 6 个，正好等于 3/4 × 8。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 3/4 ÷ 1/8 可以变成 3/4 × 8？（画一条分成 8 格的长条，边指边讲）"
      },
      {
        type: "beauty",
        headline: "三千年前的分数除法：古埃及人的单位分数",
        paragraphs: [
          "3600 多年前，古埃及人在纸草书上做分数题。他们只认「分子是 1」的单位分数，别的分数都要拆开写。",
          "「9 个面包平均分给 10 个人」是他们的名题：每人分到 2/3 + 1/5 + 1/30，加起来正好是 9/10！拆开分、再合起来验——这就是一场古老的分数除法。",
          "今天你用「倒数变身」一秒算完，古埃及人要翻一整张对照表。去博物馆看看：数学越发展，办法越轻巧！"
        ],
        museum: "his-egypt"
      }
    ]
  },

  /* ================= 单元 5：负数 ================= */
  {
    id: "g6u5",
    title: "负数",
    subtitle: "0 的另一边",
    tag: "数感",
    minutes: 15,
    scenes: [
      {
        type: "story",
        title: "温度计掉到了 0 下面",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <path d="M0 176 L90 84 L160 176 Z" fill="#ffd6ec"/>
          <path d="M90 84 L112 108 L68 108 Z" fill="#fff"/>
          <path d="M120 176 L230 58 L330 176 Z" fill="#f0eef8"/>
          <path d="M230 58 L262 94 L198 94 Z" fill="#fff"/>
          <rect x="0" y="176" width="400" height="64" fill="#e8f7ff"/>
          <g>
            <rect x="330" y="52" width="20" height="120" rx="10" fill="#fff" stroke="#2b2d42" stroke-width="3"/>
            <circle cx="340" cy="186" r="16" fill="#f15bb5" stroke="#2b2d42" stroke-width="3"/>
            <rect x="336" y="118" width="8" height="62" fill="#f15bb5"/>
            <line x1="322" y1="86" x2="336" y2="86" stroke="#2b2d42" stroke-width="2"/>
            <line x1="322" y1="102" x2="336" y2="102" stroke="#2b2d42" stroke-width="2"/>
            <line x1="322" y1="118" x2="336" y2="118" stroke="#2b2d42" stroke-width="2"/>
            <line x1="322" y1="134" x2="336" y2="134" stroke="#2b2d42" stroke-width="2"/>
            <text x="306" y="90" font-size="14" fill="#2b2d42" font-weight="bold">0</text>
            <text x="296" y="122" font-size="14" fill="#b03a82" font-weight="bold">-8</text>
          </g>
          <text x="26" y="52" font-size="17" fill="#b03a82" font-weight="bold">冰晶山谷：零下 8℃</text>
          <text x="26" y="214" font-size="15" fill="#5c607a">0 的下面，还藏着数吗？</text>
        </svg>`,
        paragraphs: [
          "玫瑰星球北边有一座冰晶山谷。朵朵乘飞船去探险，一进山谷，温度计「唰」地降到 0℃——还在往下掉，停在了 0 下面第 8 格！",
          "「0 下面还有数吗？」朵朵揉揉眼睛。播报员说：「现在气温零下 8 度，写作 <b>-8℃</b>。」原来，比 0 还小的数真的存在！",
          "更神奇的还在后头：山谷的湖底在海平面<b>以下</b> 200 米，又该怎么记？今天，我们就去 0 的另一边看一看！"
        ]
      },
      {
        type: "play",
        widget: "guess",
        prompt: "在这条 −10 到 10 的数轴上，心里想一个数（0 左边的负数也可以！），让机器人来猜。注意看它每次怎么把范围「砍一半」。",
        config: { interactive: true, min: -10, max: 10 },
        successText: "猜中啦！不管正数、0 还是负数，都在同一条数轴上排好了队——0 的左边是负数，右边是正数。"
      },
      {
        type: "anim",
        widget: "guess",
        steps: [
          { caption: "这是一条数轴，0 站在正中间。它右边是你熟悉的正数：1、2、3……越往右越大。", state: { interactive: false, min: -10, max: 10, lo: -10, hi: 10, guess: 3, steps: 0, info: "0 的右边是正数：1、2、3……越往右越大" } },
          { caption: "0 的左边呢？那里住着负数！零下 8℃ 写作 −8，站在 0 左边第 8 格。", state: { interactive: false, min: -10, max: 10, lo: -10, hi: 10, guess: -8, steps: 0, info: "0 的左边是负数：−1、−2、−3……零下 8℃ 住在 −8" } },
          { caption: "负号「−」是负数的名牌：−3 读作「负三」。0 站在正中间，既不是正数也不是负数。", state: { interactive: false, min: -10, max: 10, lo: -10, hi: 10, guess: -3, steps: 0, info: "−3 读作「负三」。0 既不是正数也不是负数" } },
          { caption: "−5 和 +5 到 0 的距离一样远：零上 5℃ 和零下 5℃ 正好相反——正负数能表示相反意义的量。", state: { interactive: false, min: -10, max: 10, lo: -10, hi: 10, guess: -5, steps: 0, info: "−5 和 +5 到 0 的距离都是 5 格，是「相反意义的量」" } },
          { caption: "比一比：−8 在 −3 的左边，所以 −8 < −3。数轴上越往左越小，越往右越大！", state: { interactive: false, min: -10, max: 10, lo: -10, hi: 10, guess: -8, steps: 0, info: "−8 在 −3 的左边：−8 < −3。越往左越小" } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把温度计和数轴上的发现，写成数学的语言：",
          "像 +3、5 这样大于 0 的数是正数；像 −3、−8 这样小于 0 的数是负数。0 是分界线，既不是正数也不是负数。"
        ],
        formula: "−3 读作「负三」　　−8 < −3 < 0 < +5",
        keypoints: [
          "数轴：0 在中间，左边是负数，右边是正数",
          "越往右越大，越往左越小：−8 比 −3 小",
          "正负数表示相反意义的量：零上/零下、海平面以上/以下、收入/支出",
          "正数前面的「+」可以省略，负号「−」不能省"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "零下 8℃ 写作哪个？", options: ["−8℃", "8℃", "0℃", "−0.8℃"], answer: 0,
            hint: "零下，就是比 0 还小，用负数", explain: "零下 8℃ 写作 −8℃；8℃ 是零上 8 度，意思正相反。" },
          { type: "judge", level: "基础", q: "0 是最小的数。", answer: false,
            hint: "想想冰晶山谷：温度计掉到 0 下面还在走", explain: "负数都比 0 小！−1、−8、−100……都比 0 小，而且没有「最小」的数。" },
          { type: "choice", level: "基础", q: "数轴上，−5 在 0 的哪一边？", options: ["左边", "右边", "正好在 0 上"], answer: 0,
            hint: "负数住在 0 的哪边？想想 −8℃ 站在哪", explain: "负数都在 0 的左边，正数都在右边，0 在中间站岗。" },
          { type: "choice", level: "变式", q: "为什么 −8 比 −3 小？8 明明比 3 大呀！", options: ["数轴上 −8 在 −3 的左边，越往左越小；零下 8℃ 也比零下 3℃ 更冷", "因为 −8 写起来更长", "负数不能比大小"], answer: 0,
            hint: "把它们想成温度：零下 8℃ 和零下 3℃，哪个更冷？", explain: "零下 8℃ 更冷，所以 −8 < −3。负数比大小要看数轴上的位置，不能只看数字 8 和 3。" },
          { type: "judge", level: "变式", q: "−1 比 −100 大。", answer: true,
            hint: "−1 紧挨着 0，−100 在很远很远的左边", explain: "−1 在 −100 的右边，所以 −1 > −100。离 0 越近的负数越大！" },
          { type: "choice", level: "挑战", q: "把海平面记作 0 米，冰晶山谷的湖底在海平面以下 200 米，记作多少？", options: ["−200 米", "200 米", "0 米", "+200 米"], answer: 0,
            hint: "「以下」和「以上」是相反意义的量", explain: "海平面以下 200 米记作 −200 米；+200 米是海平面以上 200 米，正好相反。" },
          { type: "fill", level: "挑战", q: "冰晶山谷早晨 −5℃，中午上升了 8℃，中午是多少℃？", answer: ["3", "+3"],
            hint: "从 −5 出发往右走 8 格：先到 0 走 5 格，还要再走几格？", explain: "先升 5℃ 回到 0℃，再升 3℃，中午是 3℃。" },
          { type: "choice", level: "温故", q: "还记得吗：第 3 课学的百分数——1/2 等于百分之多少？", options: ["50%", "25%", "12%", "5%"], answer: 0,
            hint: "1/2 = ？/100", explain: "1/2 = 50/100 = 50%。旧本领没丢，给你点赞！" }
        ]
      },
      {
        type: "review",
        question: "比 0 还小的数真的存在吗？它躲在哪里？",
        ways: [
          { name: "温度计", text: "冰晶山谷的温度计掉到 0 下面：零下 8℃ 就是 −8℃。天气预报里，负数天天见。" },
          { name: "海拔", text: "海平面记作 0，湖底在海平面以下 200 米，记作 −200 米。" },
          { name: "数轴", text: "把数轴画出来：0 的左边还有一长串位置，−1、−2、−3……整整齐齐排着队。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 −8 比 −3 小？（可以拿家里的温度计，或者地下停车场的楼层举例）"
      },
      {
        type: "beauty",
        headline: "「0」的诞生：一个改变世界的数字",
        paragraphs: [
          "很久以前，人们只有 1、2、3……连「0」都没有！记账时遇到「什么都没有」只好空着，常常引起误会。",
          "一千多年前，印度数学家第一次给 0 起了名字、立下运算规则。有了 0 这条分界线，负数才正式登上舞台：欠下的钱、零下的温度，都有了写法。",
          "中国古人更早用算筹表示负数：红筹表示正数，黑筹表示负数，红黑分明——那是负数最早的舞台。去博物馆听听 0 的冒险故事吧！"
        ],
        museum: "his-zero"
      }
    ]
  },

  /* ================= 单元 6：圆柱与圆锥 ================= */
  {
    id: "g6u6",
    title: "圆柱与圆锥",
    subtitle: "罐头盒与甜筒的体积秘密",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "罐头盒与冰淇淋甜筒",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fdeef7"/>
          <circle cx="352" cy="36" r="18" fill="#ffd6ec"/>
          <g>
            <path d="M70 84 L70 176 A50 16 0 0 0 170 176 L170 84" fill="#f15bb5" stroke="#2b2d42" stroke-width="3"/>
            <ellipse cx="120" cy="84" rx="50" ry="16" fill="#ff8ac8" stroke="#2b2d42" stroke-width="3"/>
            <ellipse cx="120" cy="84" rx="34" ry="9" fill="none" stroke="#fff" stroke-width="2"/>
          </g>
          <text x="120" y="216" font-size="15" fill="#b03a82" font-weight="bold" text-anchor="middle">圆柱罐头盒</text>
          <g>
            <path d="M250 176 L300 70 L350 176 A50 14 0 0 1 250 176 Z" fill="#ffc233" stroke="#2b2d42" stroke-width="3"/>
            <ellipse cx="300" cy="66" rx="26" ry="12" fill="#f15bb5" stroke="#2b2d42" stroke-width="3"/>
          </g>
          <text x="300" y="216" font-size="15" fill="#b8860b" font-weight="bold" text-anchor="middle">圆锥甜筒</text>
          <path d="M196 96 q8 10 0 18 q-8 -8 0 -18" fill="#7ec8ff"/>
          <path d="M206 122 q6 8 0 14 q-6 -6 0 -14" fill="#7ec8ff"/>
          <text x="178" y="70" font-size="15" fill="#5c607a">倒 3 次才满？</text>
        </svg>`,
        paragraphs: [
          "丰收节的压轴任务来了：朵朵要把玫瑰酱装进罐头。罐头盒是个神奇的立体图形——上下两个圆圆的面，侧面滑溜溜的，它叫<b>圆柱</b>。",
          "做一个罐头盒要多少铁皮？能装多少玫瑰酱？朵朵又发现：旁边的冰淇淋甜筒是个<b>圆锥</b>，和圆柱杯底面一样大、一样高——可甜筒装满玫瑰露倒进圆柱杯，倒了 3 次才把圆柱杯倒满！",
          "会「变身」的侧面、叠圆片一样的身体，还有 1/3 的甜蜜秘密——今天就把圆柱和圆锥拆开看个明白！"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "把罐头盒的侧面沿一条高剪开，「哗」地摊平——你猜是什么形状？一张长方形！把这张 8 列 × 4 行的方格纸涂满，亲手摸摸这个长方形。",
        config: { interactive: true, rows: 4, cols: 8 },
        successText: "涂满啦！这个长方形就是圆柱的侧面：它的长 = 底面圆的周长，宽 = 圆柱的高。侧面积 = 底面周长 × 高！"
      },
      {
        type: "anim",
        widget: "circle",
        steps: [
          { caption: "圆柱的上、下两个底面，是两个一模一样的圆。盯紧这个底面圆！", state: { mode: "roll", t: 0 } },
          { caption: "底面圆滚一周，金色线的长度 = 周长 2πr。它正好等于侧面展开长方形的长！", state: { mode: "roll", t: 1 } },
          { caption: "底面有多大？把圆像切蛋糕一样，平均切成 8 瓣小扇形……", state: { mode: "sectors", t: 0, n: 8 } },
          { caption: "一上一下交错拼起来：越来越像平行四边形，底是 πr，高是 r。", state: { mode: "sectors", t: 0.5, n: 8 } },
          { caption: "底面积 = πr²！圆柱像一叠圆片：每层面积都是 πr²，叠了 h 层——体积 = 底面积 × 高，V = Sh。", state: { mode: "sectors", t: 1, n: 8 } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把罐头盒拆开量一量，写成数学的语言：",
          "表面积要算「侧面 + 两个底面」；体积像叠圆片，底面积乘高。等底等高的圆锥，3 次才能倒满圆柱——它的体积是圆柱的 1/3。"
        ],
        formula: "V柱 = Sh = πr²h　　V锥 = Sh ÷ 3",
        keypoints: [
          "侧面积 = 底面周长 × 高 = 2πr × h",
          "表面积 = 侧面积 + 2 个底面积 = 2πrh + 2πr²",
          "圆柱体积：V = Sh（底面积 × 高）",
          "圆锥体积：V = Sh ÷ 3（等底等高时，是圆柱的 1/3）"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "把圆柱的侧面沿高剪开摊平，得到什么图形？", options: ["长方形", "圆形", "三角形"], answer: 0,
            hint: "想想你刚才涂满的那张方格纸", explain: "侧面展开是长方形：长 = 底面周长，宽 = 圆柱的高。" },
          { type: "choice", level: "基础", q: "圆柱的底面是什么样的？", options: ["上下两个一模一样的圆", "只有一个圆", "两个大小不同的圆"], answer: 0,
            hint: "看看罐头盒的盖子和底", explain: "圆柱有两个底面，是完全相同的两个圆；中间弯弯的是侧面。" },
          { type: "fill", level: "基础", q: "一个圆柱的底面积是 12 平方厘米，高是 5 厘米，体积是多少立方厘米？", answer: "60",
            hint: "V = Sh = 底面积 × 高", explain: "12 × 5 = 60 立方厘米。像叠圆片一样，底面积 × 高就是体积！" },
          { type: "choice", level: "变式", q: "为什么等底等高的圆锥，体积正好是圆柱的 1/3？", options: ["倒水实验：圆锥装满水往圆柱里倒，3 次正好倒满", "圆锥看起来瘦一点", "数学家随口约定的"], answer: 0,
            hint: "朵朵的甜筒实验：倒一次、两次、三次……", explain: "等底等高时，3 个圆锥的水正好装满 1 个圆柱，所以 V锥 = V柱 ÷ 3。实验和严格的数学证明，结论一致！" },
          { type: "judge", level: "变式", q: "算一算做罐头盒需要多少铁皮，是在求圆柱的体积。", answer: false,
            hint: "铁皮包住的是罐头的「表面」", explain: "要多少铁皮，求的是表面积（侧面 + 两个底面）；能装多少东西，才是求体积。" },
          { type: "fill", level: "挑战", q: "圆柱和圆锥等底等高，圆柱的体积是 36 立方厘米，圆锥的体积是多少立方厘米？", answer: "12",
            hint: "V锥 = V柱 ÷ 3", explain: "36 ÷ 3 = 12 立方厘米。等底等高，圆锥就是圆柱的 1/3。" },
          { type: "choice", level: "挑战", q: "圆柱的底面半径是 1 分米，高是 2 分米。它的底面积是多少？（π 取 3.14）", options: ["3.14 平方分米", "6.28 平方分米", "12.56 平方分米", "2 平方分米"], answer: 0,
            hint: "底面积 = πr²，r = 1", explain: "3.14 × 1² = 3.14 平方分米。6.28 是底面周长，12.56 是侧面积——别认错哦！" },
          { type: "choice", level: "温故", q: "还记得吗：第 2 课学的圆——半径 2 厘米的圆，面积是多少？（π 取 3.14）", options: ["12.56 平方厘米", "6.28 平方厘米", "25.12 平方厘米", "4 平方厘米"], answer: 0,
            hint: "S = πr² = 3.14 × 2 × 2", explain: "3.14 × 4 = 12.56 平方厘米。底面积算得又快又准，圆柱体积就不在话下！" }
        ]
      },
      {
        type: "review",
        question: "圆柱体积为什么是「底面积 × 高」？等底等高的圆锥为什么只要 ÷ 3？",
        ways: [
          { name: "叠圆片", text: "把圆柱想成一叠一样大的圆片：每层面积都是底面积 S，叠了 h 层，体积就是 S × h。" },
          { name: "倒水实验", text: "拿等底等高的圆锥和圆柱容器：圆锥装满水倒进圆柱，3 次正好倒满，所以 V锥 = Sh ÷ 3。" },
          { name: "拆开算", text: "表面积也能拆：侧面摊开是长方形（底面周长 × 高），再加上、下两个圆底面。" }
        ],
        ask: "回家做个实验：用圆锥形的小漏斗往圆柱形水杯里倒水，数一数要几次才能倒满，再给爸爸妈妈讲讲 1/3 的秘密。"
      },
      {
        type: "beauty",
        headline: "阿基米德的墓碑上，刻着一个圆柱",
        paragraphs: [
          "2000 多年前，阿基米德算出：把球塞进一个正好合身的圆柱里，球的体积不多不少，正好是圆柱的 2/3！他把这看作一生最得意的发现。",
          "他去世后，墓碑上不刻名字，只刻一幅图：一个圆柱里装着一个球。懂数学的人路过，一眼就知道这里安息着谁。",
          "从圆锥的 1/3 到球的 2/3，简简单单的分数，把立体图形的世界安排得明明白白。去博物馆见见这位了不起的爷爷吧！"
        ],
        museum: "ppl-archimedes"
      }
    ]
  }
);
