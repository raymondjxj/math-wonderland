/* ============================================================
   数学奇境 · 未来思维营课程（B 辑：第 5~8 课）
   第 5 课 逻辑与排除法 ／ 第 6 课 鸡兔同笼（一题多解）
   第 7 课 华罗庚统筹法 ／ 第 8 课 密码与质数
   课程结构同年级单元：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.think = MW.think || [];

/* ============ 第 5 课：逻辑与排除法 ============ */
MW.think.push({
  id: "think5",
  title: "谁是推理小侦探",
  subtitle: "逻辑与排除法——假设 → 验证 → 排除",
  band: "3~6 年级",
  tag: "逻辑思维",
  minutes: 15,
  scenes: [
    {
      type: "story",
      title: "侦探社的第一桩大案",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <ellipse cx="140" cy="188" rx="88" ry="12" fill="#bdeaf6"/>
        <path d="M75 188 L75 132 Q140 108 205 132 L205 188 Z" fill="#ffd166"/>
        <path d="M75 132 Q140 108 205 132 L205 148 Q140 124 75 148 Z" fill="#ff8a65"/>
        <circle cx="207" cy="140" r="16" fill="#d3f2fa"/>
        <circle cx="194" cy="160" r="10" fill="#d3f2fa"/>
        <circle cx="300" cy="105" r="40" fill="rgba(255,255,255,.55)" stroke="#00b4d8" stroke-width="8"/>
        <line x1="330" y1="138" x2="364" y2="176" stroke="#00b4d8" stroke-width="12" stroke-linecap="round"/>
        <g fill="#0a6d84">
          <circle cx="252" cy="206" r="6"/><circle cx="264" cy="196" r="4"/><circle cx="250" cy="193" r="4"/>
        </g>
        <text x="200" y="42" text-anchor="middle" font-size="19" fill="#0a6d84" font-weight="bold">谁偷吃了蛋糕？</text>
      </svg>`,
      paragraphs: [
        "数学侦探社开张第一天，小奇就急匆匆跑来报案：「妈妈做的草莓蛋糕被偷吃了一大口！嫌疑人有三个——小猫、小狗、小兔。」",
        "三个小家伙各说了一句话。小猫：「是小狗吃的！」小狗：「不是我吃的！」小兔：「不是我吃的！」",
        "已知三句话里<b>只有一句是真的</b>。不许问第二遍，也不许看监控——你能只用推理找出偷吃鬼吗？"
      ]
    },
    {
      type: "play",
      widget: "grid",
      prompt: "这是侦探的排除记录板：3 行是 3 种假设（第 1 行 = 假设小猫吃的，第 2 行 = 小狗，第 3 行 = 小兔），3 列对应三句话。每验证一句「这个假设下这句话是真是假」，就点亮一格做记号。把 9 格全部验证完！",
      config: { interactive: true, rows: 3, cols: 3 },
      successText: "全部验证完会发现：只有第 3 行（假设小兔）不矛盾——一句真话、两句假话，完全符合条件！"
    },
    {
      type: "anim",
      widget: "grid",
      steps: [
        { caption: "三种假设排成三行，每一行都要接受三句话的考验。", state: { rows: 3, cols: 3, filled: 0 } },
        { caption: "假设①小猫吃的：小狗说「不是我」是真话，小兔说「不是我」也是真话——两句真话，矛盾！第一行排除。", state: { rows: 3, cols: 3, filled: 3 } },
        { caption: "假设②小狗吃的：小猫说对了，小兔也说对了——又是两句真话，矛盾！第二行也排除。", state: { rows: 3, cols: 3, filled: 6 } },
        { caption: "假设③小兔吃的：小猫说错、小狗说对、小兔说错——只有一句真话，全部符合！", state: { rows: 3, cols: 3, filled: 9 } },
        { caption: "三行全部验证完，只有第三行站得住。偷吃蛋糕的是小兔！这就是排除法。", state: { rows: 3, cols: 3, filled: 9 } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "把侦探的推理写成数学语言，就是一张「假设—验证」流程图。",
        "每发现一次矛盾，就排除掉一整种可能；排除到最后，剩下的就是唯一的真相。"
      ],
      formula: "假设 → 验证 → 矛盾？→ 排除 → 真相",
      keypoints: [
        "先大胆假设一种可能",
        "用题目的条件逐条验证",
        "推出矛盾 = 这个假设不成立",
        "全部排除完，剩下的就是答案"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "蛋糕谜案里，三句话只有一句是真的。偷吃蛋糕的是谁？", options: ["小猫", "小狗", "小兔", "无法判断"], answer: 2,
          hint: "逐个假设：假设是小猫吃的，数一数会有几句真话", explain: "假设小兔偷吃：小猫说错、小狗说对、小兔说错——正好只有一句真话。假设小猫或小狗，都会有两句真话，矛盾。" },
        { type: "choice", level: "基础", q: "用排除法破案，第一步应该做什么？", options: ["直接猜一个答案", "先假设一种可能，再逐句验证", "把三句话都当成假话", "掷骰子决定"], answer: 1,
          hint: "侦探不瞎猜，先试一种假设", explain: "排除法的流程是：假设 → 验证 → 发现矛盾 → 排除。第一步就是大胆假设。" },
        { type: "choice", level: "变式", q: "图书角的书不见了。甲说「是丙拿的」，乙说「是甲拿的」，丙说「我没拿」。三句话只有一句是假的，书是谁拿的？", options: ["甲", "乙", "丙", "无法确定"], answer: 0,
          hint: "分别假设甲、乙、丙拿书，数一数各有几句假话", explain: "假设甲拿：甲说错、乙说对、丙说对——只有一句假话，成立！假设乙或丙拿，都会有两句假话，矛盾。" },
        { type: "choice", level: "变式", q: "为什么推理时一旦发现「矛盾」，就能把这个假设排除掉？", options: ["因为推出的结果和题目条件打架了，说明这个假设不成立", "因为矛盾听起来不顺耳", "因为每个假设都是错的", "因为老师说的"], answer: 0,
          hint: "假设成立的话，推出的一切都不能违背题目条件", explain: "如果假设成立，推出的结论必须和条件一致。推出矛盾，就证明这个假设错了——这叫「反证」的思想。" },
        { type: "choice", level: "挑战", q: "小 A、小 B、小 C 三人排队。小 A 不在最前面，小 B 不在最后面，小 C 站在正中间。谁站在最前面？", options: ["小 A", "小 B", "小 C", "都有可能"], answer: 1,
          hint: "先确定小 C 的位置，再排除小 A", explain: "小 C 在中间；小 A 不在最前，只能在最后；所以最前面是小 B。" },
        { type: "fill", level: "挑战", q: "一个 0~9 的一位数密码，排除了 0、1、2、3、5、6、7、8、9，这个密码是？", answer: "4",
          hint: "0~9 一共 10 个数字，已经排除了 9 个", explain: "10 个数字排除 9 个，只剩下 4。排除到最后，剩下的就是答案。" },
        { type: "fill", level: "温故", q: "还记得吗：7 × 8 = ？", answer: "56",
          hint: "乘法口诀：七八多少？", explain: "7 × 8 = 56。" },
        { type: "judge", level: "温故", q: "还记得吗：0 除以任何不是 0 的数，都得 0。", answer: true,
          hint: "0 ÷ 5 等于几？", explain: "对！0 ÷ 5 = 0。0 除以任何非 0 的数都是 0（注意：0 不能做除数）。" }
      ]
    },
    {
      type: "review",
      question: "三句话只有一句真话，侦探是怎么破案的？",
      ways: [
        { name: "假设法", text: "假设小猫吃 → 两句真话，矛盾；假设小狗吃 → 两句真话，矛盾；假设小兔吃 → 只有一句真话，成立！" },
        { name: "列表排除", text: "画一张 3×3 表格：三种假设 × 三句话，逐格验证打勾打叉，有矛盾的行整行排除。" },
        { name: "倒推法", text: "只有一句真话 = 两句假话。哪两句能同时是假话？小猫说错（不是小狗）、小兔说错（就是小兔）——正好不打架，剩下小狗说的就是真话。" }
      ],
      ask: "用你自己的话给爸爸妈妈讲讲：为什么「找到矛盾」就能排除一种假设？再出一道类似的题考考他们！"
    },
    {
      type: "beauty",
      headline: "从侦探小说到人工智能",
      paragraphs: [
        "排除法不只是侦探的武器：医生看病要排除不可能的病因，科学家做实验要排除错误的猜想，修电脑的工程师也要排除一个个故障。",
        "计算机下棋时，也在飞快地排除「这步会输」的走法——它一秒钟能排除几百万种可能！",
        "大侦探福尔摩斯说：排除掉所有不可能，剩下的无论多么不可思议，都是真相。两千多年前，欧几里得爷爷就在《几何原本》里用同样的逻辑建造了数学大厦。"
      ],
      museum: "ppl-euclid"
    }
  ]
});

/* ============ 第 6 课：鸡兔同笼（一题多解的建模课） ============ */
MW.think.push({
  id: "think6",
  title: "鸡兔同笼",
  subtitle: "一道题的三种解法——假设、列表与抬腿",
  band: "4~6 年级",
  tag: "建模思维",
  minutes: 18,
  scenes: [
    {
      type: "story",
      title: "农场里的神秘笼子",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <g>
          <circle cx="160" cy="146" r="20" fill="#fff"/>
          <path d="M152 128 q8 -12 16 0" fill="#ff6b6b"/>
          <circle cx="154" cy="144" r="3" fill="#2b2d42"/>
          <path d="M158 152 l11 3 -11 4 z" fill="#ff8a3d"/>
          <ellipse cx="238" cy="116" rx="6" ry="17" fill="#fff"/>
          <ellipse cx="252" cy="116" rx="6" ry="17" fill="#fff"/>
          <circle cx="245" cy="150" r="20" fill="#fff"/>
          <circle cx="239" cy="147" r="3" fill="#2b2d42"/>
          <circle cx="251" cy="147" r="3" fill="#2b2d42"/>
        </g>
        <g stroke="#00b4d8" stroke-width="6" stroke-linecap="round">
          <line x1="60" y1="66" x2="340" y2="66"/>
          <line x1="60" y1="202" x2="340" y2="202"/>
          <line x1="70" y1="66" x2="70" y2="202"/>
          <line x1="130" y1="66" x2="130" y2="202"/>
          <line x1="190" y1="66" x2="190" y2="202"/>
          <line x1="250" y1="66" x2="250" y2="202"/>
          <line x1="310" y1="66" x2="310" y2="202"/>
        </g>
        <text x="105" y="152" font-size="30" font-weight="bold" fill="#0a6d84">?</text>
        <text x="290" y="162" font-size="30" font-weight="bold" fill="#0a6d84">?</text>
        <text x="200" y="40" text-anchor="middle" font-size="18" fill="#0a6d84" font-weight="bold">8 个头，26 条腿，各几只？</text>
      </svg>`,
      paragraphs: [
        "周末去农场，小奇发现一个盖着布的笼子。农场伯伯笑着说：「里面是鸡和兔，一共 <b>8 个头、26 条腿</b>。猜出各几只，才能揭开布！」",
        "鸡有 2 条腿，兔有 4 条腿。可是 8 只动物里到底几只鸡、几只兔？布还盖着，没法一只一只数腿。",
        "别急，这是一道 1500 岁的名题。今天的课，我们一口气学会它的<b>三种解法</b>！"
      ]
    },
    {
      type: "play",
      widget: "blocks",
      prompt: "先大胆假设「笼子里全是鸡」：把方阵调成 2 行 8 列——每只动物 2 条腿、共 8 只动物，看看你摆出了几条腿？",
      config: { interactive: true, targetRows: 2, targetCols: 8 },
      successText: "2 × 8 = 16 条腿。可是题目说有 26 条！少的 10 条去哪了？——因为我们把兔子也当成鸡了！"
    },
    {
      type: "anim",
      widget: "fraction",
      steps: [
        { caption: "这条带子有 26 格，代表笼子里的 26 条腿。我们要把它们一条一条解释清楚。", state: { shape: "bar", parts: 26, shaded: 0 } },
        { caption: "假设全是鸡：2 × 8 = 16 条腿，先涂上 16 格。", state: { shape: "bar", parts: 26, shaded: 16 } },
        { caption: "咦，还剩 10 格没着落！因为兔子被错当成了鸡，每只少算了 2 条腿。", state: { shape: "bar", parts: 26, shaded: 16 } },
        { caption: "把鸡换回兔子：每换 1 只多 2 条腿。换 3 只：16 + 6 = 22，还不够。", state: { shape: "bar", parts: 26, shaded: 22 } },
        { caption: "换 5 只：16 + 10 = 26，正好涂满！答案：5 只兔、3 只鸡。", state: { shape: "bar", parts: 26, shaded: 26 } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "把「假设全是鸡」的推理写成算式：",
        "少的腿 ÷ 每只少的腿 = 兔子的只数。"
      ],
      formula: "兔 =（26 − 2 × 8）÷ 2 = 5（只）　鸡 = 8 − 5 = 3（只）",
      keypoints: [
        "假设全鸡：2 × 8 = 16 条腿",
        "少了 26 − 16 = 10 条",
        "每只兔比鸡多 2 条腿",
        "10 ÷ 2 = 5 只兔，剩下 3 只是鸡"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "鸡兔同笼，共 6 个头、20 条腿。先假设笼子里全是鸡，这时腿有多少条？", options: ["6 条", "12 条", "20 条", "24 条"], answer: 1,
          hint: "每只鸡 2 条腿，6 只鸡呢？", explain: "假设全是鸡：2 × 6 = 12 条腿。" },
        { type: "fill", level: "基础", q: "（接上题）实际有 20 条腿，比假设多出 8 条。每只兔子比鸡多 2 条腿，兔子有几只？", answer: "4",
          hint: "8 ÷ 2 = ？", explain: "8 ÷ 2 = 4 只兔，鸡就是 6 − 4 = 2 只。验算：2×2 + 4×4 = 4 + 16 = 20 ✓" },
        { type: "choice", level: "变式", q: "3 只鸡和 5 只兔关在一起，一共有多少条腿？", options: ["16 条", "26 条", "32 条", "21 条"], answer: 1,
          hint: "鸡腿、兔腿分开算，再相加", explain: "3×2 + 5×4 = 6 + 20 = 26 条。" },
        { type: "choice", level: "变式", q: "为什么把 1 只鸡换成 1 只兔，总腿数一定增加 2 条？", options: ["因为头数不变，而每只兔比每只鸡多 2 条腿", "因为兔子个头大", "因为动物变多了", "因为兔子会跳"], answer: 0,
          hint: "换的过程中，头数变了吗？腿数呢？", explain: "总头数不变，只是把 2 条腿换成了 4 条腿，所以每换一次恰好多 2 条。" },
        { type: "choice", level: "挑战", q: "停车场有三轮车和小汽车共 7 辆，轮子共 25 个。小汽车有几辆？", options: ["2 辆", "3 辆", "4 辆", "5 辆"], answer: 2,
          hint: "假设全是三轮车：3 × 7 = 21 个轮子，少了几个？", explain: "假设全三轮：21 个轮子，少 4 个；每辆小汽车多 1 个轮子，4 ÷ 1 = 4 辆小汽车（三轮车 3 辆）。验算：4×4 + 3×3 = 25 ✓" },
        { type: "judge", level: "挑战", q: "鸡兔共 10 只、腿共 28 条。如果反过来假设「全是兔」，会算出 40 条腿，比实际多，这时要把兔子换成鸡。", answer: true,
          hint: "10 × 4 = ？", explain: "对！10×4 = 40 > 28，多了 12 条；每把 1 只兔换成鸡少 2 条腿，12 ÷ 2 = 6 只鸡、4 只兔。两个方向都能解！" },
        { type: "fill", level: "温故", q: "还记得吗：4 × 6 + 3 = ？", answer: "27",
          hint: "先算乘法，再算加法", explain: "先乘后加：4 × 6 = 24，24 + 3 = 27。" },
        { type: "judge", level: "温故", q: "还记得吗：在有余数的除法里，余数必须比除数小。", answer: true,
          hint: "比如 10 ÷ 3 = 3 …… 1，余数 1 比除数 3 小", explain: "对！余数如果 ≥ 除数，说明还能继续分，必须分到不够分为止。" }
      ]
    },
    {
      type: "review",
      question: "8 个头、26 条腿，鸡和兔各几只？",
      ways: [
        { name: "假设法", text: "假设全是鸡：2 × 8 = 16 条腿，少了 10 条；每只兔多 2 条，10 ÷ 2 = 5 只兔、3 只鸡。" },
        { name: "列表法", text: "8鸡0兔→16 条；7鸡1兔→18；6鸡2兔→20；5鸡3兔→22；4鸡4兔→24；3鸡5兔→26，对上了！" },
        { name: "抬腿法", text: "哨子一响，每只动物抬起 2 条腿：8 × 2 = 16 条腿离地，地上还剩 10 条全是兔腿；每只兔还站着 2 条，10 ÷ 2 = 5 只兔。" }
      ],
      ask: "给爸爸妈妈表演「抬腿法」：为什么让所有动物都抬起 2 条腿之后，地上剩下的腿就全是兔子的？"
    },
    {
      type: "beauty",
      headline: "一道 1500 岁的数学题",
      paragraphs: [
        "鸡兔同笼出自中国古代的《孙子算经》，已经 1500 多岁了，至今还在全世界的小学堂里代代相传。",
        "它真正的宝藏不是答案，而是「假设法」：先大胆假设，再看差多少，最后修正。科学家提出假说、工程师调试火箭，用的都是这个思想。",
        "去博物馆看看：古人没有纸笔时，是怎样用一根根算筹摆出这道题的。"
      ],
      museum: "his-suanchou"
    }
  ]
});

/* ============ 第 7 课：华罗庚的统筹法 ============ */
MW.think.push({
  id: "think7",
  title: "烧水泡茶的学问",
  subtitle: "华罗庚的统筹法——哪些事可以同时做？",
  band: "3~6 年级",
  tag: "统筹思维",
  minutes: 15,
  scenes: [
    {
      type: "story",
      title: "怎样最快喝上茶？",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <circle cx="315" cy="72" r="36" fill="#fff" stroke="#00b4d8" stroke-width="6"/>
        <line x1="315" y1="72" x2="315" y2="48" stroke="#0a6d84" stroke-width="5" stroke-linecap="round"/>
        <line x1="315" y1="72" x2="333" y2="80" stroke="#0a6d84" stroke-width="5" stroke-linecap="round"/>
        <path d="M150 206 q-16 -22 0 -40 q4 12 12 16 q10 -10 8 -22 q18 18 4 46 q-10 12 -24 0 z" fill="#ff8a3d"/>
        <rect x="105" y="108" width="96" height="60" rx="12" fill="#00b4d8"/>
        <path d="M201 120 l28 -12 -6 22 z" fill="#00b4d8"/>
        <path d="M120 108 q33 -26 66 0" fill="none" stroke="#0a6d84" stroke-width="6"/>
        <path d="M240 96 q6 -10 0 -18 q-6 -8 0 -16" stroke="#8fd8ec" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M56 182 h44 v20 a10 10 0 0 1 -10 10 h-24 a10 10 0 0 1 -10 -10 z" fill="#fff" stroke="#00b4d8" stroke-width="5"/>
        <text x="200" y="40" text-anchor="middle" font-size="18" fill="#0a6d84" font-weight="bold">怎样最快喝上茶？</text>
      </svg>`,
      paragraphs: [
        "客人突然来访，妈妈让小奇泡茶。要做的事有：洗水壶 1 分钟、烧开水 15 分钟、洗茶壶茶杯 3 分钟、拿茶叶 2 分钟、泡茶 1 分钟。",
        "小奇掰着手指一算：1 + 15 + 3 + 2 + 1 = <b>22 分钟</b>。客人等得及吗？",
        "数学家华罗庚爷爷却摆摆手说：「17 分钟就够了！」他没让水烧得更快，也没少做任何一件事——他到底施了什么魔法？"
      ]
    },
    {
      type: "play",
      widget: "grid",
      prompt: "这是一条「时间轴」：每个格子代表 1 分钟。一件事接一件事地做（这叫「串行」），点满这条时间轴，看看要多少分钟才能喝上茶！",
      config: { interactive: true, rows: 1, cols: 22 },
      successText: "整整 22 分钟！注意：烧水的 15 分钟里，你的手一直闲着——这段时间能不能利用起来？"
    },
    {
      type: "anim",
      widget: "grid",
      steps: [
        { caption: "换一条新的时间轴。这次用华罗庚爷爷的办法，只要 17 格！", state: { rows: 1, cols: 17, filled: 0 } },
        { caption: "第 1 分钟：洗水壶。它是开头，必须先做。", state: { rows: 1, cols: 17, filled: 1 } },
        { caption: "第 2~16 分钟：烧开水（15 分钟）。壶在火上，手空出来了——洗茶壶茶杯（3 分钟）、拿茶叶（2 分钟）同时完成，藏进了这 15 分钟里！", state: { rows: 1, cols: 17, filled: 16 } },
        { caption: "第 17 分钟：水开了，泡茶！总共 17 分钟，比串行的 22 分钟省下 5 分钟。", state: { rows: 1, cols: 17, filled: 17 } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "把两种安排写成算式，比一比：",
        "省时间的秘密不是每件事做得更快，而是让「等待的时间」同时干活。"
      ],
      formula: "串行 1+15+3+2+1 = 22 分　并行 1+15+1 = 17 分",
      keypoints: [
        "先找依赖：泡茶必须等水开",
        "再找并行：烧水时洗杯、拿茶",
        "短任务（5 分）藏进长任务（15 分）",
        "这就是华罗庚爷爷的「统筹法」"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "烧水泡茶的几件事里，哪一件必须等水烧开之后才能做？", options: ["洗茶壶茶杯", "拿茶叶", "泡茶", "洗水壶"], answer: 2,
          hint: "没有开水，能泡茶吗？", explain: "泡茶必须有开水，所以它排在「烧开水」之后；洗杯子、拿茶叶跟水开不开没关系。" },
        { type: "choice", level: "基础", q: "用统筹法安排：洗水壶 1 分钟、烧开水 15 分钟、洗茶壶茶杯 3 分钟、拿茶叶 2 分钟、泡茶 1 分钟，最少几分钟能喝上茶？", options: ["22 分钟", "20 分钟", "17 分钟", "15 分钟"], answer: 2,
          hint: "烧水的 15 分钟里，手是空着的", explain: "洗水壶 1 → 烧水 15（同时洗杯 3 + 拿茶 2）→ 泡茶 1，共 17 分钟。" },
        { type: "fill", level: "变式", q: "烤面包要 10 分钟；煎蛋 3 分钟、切水果 2 分钟都可以在烤面包时同时做。串行做要 15 分钟，并行最少要几分钟？", answer: "10",
          hint: "面包烤好的时候，别的事早就做完了", explain: "10 分钟里顺手做完 3 + 2 = 5 分钟的事，总共还是 10 分钟，省下 5 分钟。" },
        { type: "choice", level: "变式", q: "为什么「并行」能省时间？", options: ["因为有些事可以借「等待的时间」同时完成", "因为并行时做事会变快", "因为并行可以少做几件事", "因为时钟走得慢了"], answer: 0,
          hint: "烧水的那 15 分钟，你在干什么？", explain: "省时间不是做得更快，而是不让等待白白流走——机器干活时，人去做别的事。" },
        { type: "choice", level: "挑战", q: "早晨：听英语 15 分钟、洗漱 10 分钟、吃早饭 10 分钟。怎样安排最省时间？", options: ["边洗漱、吃早饭边听英语，共 20 分钟", "全部一件一件做，共 35 分钟", "不吃早饭，共 25 分钟", "先听完英语再洗漱，共 35 分钟"], answer: 0,
          hint: "听英语用耳朵，洗漱吃饭用手和嘴", explain: "洗漱 + 吃饭共 20 分钟，这期间耳朵闲着，可以同时听完 15 分钟英语：最少 20 分钟。" },
        { type: "judge", level: "挑战", q: "任何事情都能同时做，只要想并行就能并行。", answer: false,
          hint: "没烧开水能泡茶吗？没洗水壶能烧水吗？", explain: "错！有依赖关系的事必须排队：水开了才能泡茶、壶洗了才能烧水。统筹法第一步就是找出「谁先谁后」。" },
        { type: "fill", level: "温故", q: "还记得吗：1 小时 = ？分钟", answer: "60",
          hint: "分针走一整圈", explain: "1 小时 = 60 分钟。" },
        { type: "judge", level: "温故", q: "还记得吗：计算 20 − 5 × 2 时，要先算乘法，再算减法。", answer: true,
          hint: "运算顺序：先乘除，后加减", explain: "对！先算 5 × 2 = 10，再算 20 − 10 = 10。" }
      ]
    },
    {
      type: "review",
      question: "烧水泡茶，怎样安排最省时间？",
      ways: [
        { name: "找依赖", text: "只有「泡茶」必须等水开；洗茶杯、拿茶叶跟谁都不冲突，可以塞进烧水的 15 分钟里。" },
        { name: "画时间轴", text: "1 格洗壶 + 15 格烧水（里面藏着 5 格杂事）+ 1 格泡茶 = 17 格，比串行的 22 格短 5 格。" },
        { name: "算一算", text: "串行 1+15+3+2+1 = 22 分钟；并行 1+15+1 = 17 分钟；22 − 17 = 5，省出 5 分钟。" }
      ],
      ask: "设计你的「最省时间早晨」：列出明早要做的事，找出哪些可以并行，把方案讲给爸爸妈妈听！"
    },
    {
      type: "beauty",
      headline: "一杯茶里的大学问",
      paragraphs: [
        "1965 年，华罗庚爷爷把「烧水泡茶」写成了一本《统筹方法》小册子，用一杯茶教会全中国的工人、农民合理安排时间。",
        "今天的世界处处有统筹：高铁排班、快递分拣、火箭发射、你手机里的芯片……都在计算「谁先谁后、谁能并行」。",
        "华罗庚爷爷只有初中文凭，却靠自学成为大数学家。他说：聪明在于勤奋，天才在于积累。去博物馆听听他的故事吧！"
      ],
      museum: "ppl-hua"
    }
  ]
});

/* ============ 第 8 课：密码与质数 ============ */
MW.think.push({
  id: "think8",
  title: "密码与质数",
  subtitle: "信息时代的守门员——分解容易合成难",
  band: "4~6 年级",
  tag: "数论思维",
  minutes: 18,
  scenes: [
    {
      type: "story",
      title: "一张谁也看不懂的纸条",
      art: `<svg viewBox="0 0 400 240" width="400" height="240">
        <rect width="400" height="240" rx="20" fill="#d3f2fa"/>
        <path d="M165 108 v-22 a35 35 0 0 1 70 0 v22" fill="none" stroke="#00b4d8" stroke-width="10"/>
        <rect x="145" y="108" width="110" height="80" rx="14" fill="#00b4d8"/>
        <circle cx="200" cy="142" r="11" fill="#d3f2fa"/>
        <rect x="196" y="148" width="8" height="18" rx="4" fill="#d3f2fa"/>
        <g transform="rotate(8 322 150)">
          <rect x="278" y="124" width="88" height="52" rx="8" fill="#fff" stroke="#8fd8ec" stroke-width="3"/>
          <text x="322" y="158" text-anchor="middle" font-size="20" font-weight="bold" fill="#0a6d84">KHOOR</text>
        </g>
        <g font-size="15" font-weight="bold" fill="#fff" text-anchor="middle">
          <circle cx="58" cy="72" r="17" fill="#00b4d8"/><text x="58" y="77">2</text>
          <circle cx="104" cy="52" r="17" fill="#00b4d8"/><text x="104" y="57">3</text>
          <circle cx="60" cy="122" r="17" fill="#00b4d8"/><text x="60" y="127">5</text>
          <circle cx="110" cy="102" r="17" fill="#00b4d8"/><text x="110" y="107">7</text>
          <circle cx="84" cy="162" r="19" fill="#00b4d8"/><text x="84" y="167">13</text>
        </g>
        <text x="200" y="36" text-anchor="middle" font-size="18" fill="#0a6d84" font-weight="bold">质数守护的秘密</text>
      </svg>`,
      paragraphs: [
        "课间，同桌塞给小奇一张纸条：「KHOOR」。小奇满头雾水，同桌眨眨眼：「每个字母都往后移了 3 格，倒回去读！」",
        "K 往前 3 格是 H，H 往前 3 格是 E……原来写的是「HELLO」！两千年前，凯撒大帝就用这招传递军令，敌人捡到也看不懂。",
        "可这套密码太容易破了：一共只有 25 种移法，挨个试一遍就露馅。今天的银行、手机支付却敢把「锁」公开给全世界——它们靠的是一群特别的数：<b>质数</b>。"
      ]
    },
    {
      type: "play",
      widget: "binary",
      prompt: "密码机的第一步：把字母变成数字。字母 S 排在字母表的第 19 位——翻动二进制卡牌，拼出数字 19！",
      config: { interactive: true, cards: 5, target: 19 },
      successText: "16 + 2 + 1 = 19！计算机正是用这样的 0 和 1，记住所有字母和密码的。"
    },
    {
      type: "anim",
      widget: "fraction",
      steps: [
        { caption: "字母表是一条 26 格的带子，A 住在第 1 格。", state: { shape: "bar", parts: 26, shaded: 1 } },
        { caption: "凯撒密码：往后移 3 格，A 就住进第 4 格，变成 D。", state: { shape: "bar", parts: 26, shaded: 4 } },
        { caption: "H 住第 8 格 → 第 11 格 K。这样 HELLO 就变成了 KHOOR。", state: { shape: "bar", parts: 26, shaded: 11 } },
        { caption: "收信人只要往前移 3 格：K（第 11 格）回到 H（第 8 格），密文还原！", state: { shape: "bar", parts: 26, shaded: 8 } },
        { caption: "可钥匙只有 25 种移法，敌人挨个试就能破。看第 13 格——13 就是一个质数，它谁也拆不动。质数登场！", state: { shape: "bar", parts: 26, shaded: 13 } }
      ]
    },
    {
      type: "symbol",
      paragraphs: [
        "现代密码的数学核心，是一场「不对称」的比赛：",
        "把质数乘起来很容易；把乘积拆回质数，却非常难。"
      ],
      formula: "易：17 × 23 = 391　难：391 = ？ × ？",
      keypoints: [
        "质数：只有 1 和它自己两个因数",
        "合成（乘法）容易，分解（找因数）难",
        "数字越大分解越慢——几百位的数要算上亿年",
        "RSA 密码：公开乘积当「锁」，私藏质数当「钥匙」"
      ]
    },
    {
      type: "quiz",
      questions: [
        { type: "choice", level: "基础", q: "凯撒密码把每个字母往后移 3 格（A→D）。字母 B 会变成什么？", options: ["C", "D", "E", "F"], answer: 2,
          hint: "从 B 往后数 3 格：C、D、？", explain: "B → C → D → E，往后移 3 格是 E。" },
        { type: "choice", level: "基础", q: "收到密文 KHOOR，规则是「往后移 3 格」。把它往前移 3 格还原，写的是什么？", options: ["HELLO", "APPLE", "WORLD", "HAPPY"], answer: 0,
          hint: "K 往前 3 格是 H，O 往前 3 格是 L", explain: "K→H、H→E、O→L、O→L、R→O，密文 KHOOR 原来是 HELLO！" },
        { type: "choice", level: "变式", q: "下面哪个数是质数？", options: ["9", "15", "13", "21"], answer: 2,
          hint: "质数只有 1 和它自己两个因数", explain: "9 = 3×3、15 = 3×5、21 = 3×7，都能再拆；13 只能写成 1×13，是质数。" },
        { type: "fill", level: "变式", q: "把 15 拆成质数相乘：15 = 3 × ？", answer: "5",
          hint: "3 乘几等于 15？", explain: "15 = 3 × 5，3 和 5 都是质数，拆到底啦。" },
        { type: "choice", level: "挑战", q: "为什么银行敢把「两个大质数的乘积」公开当锁，却不怕秘密泄露？", options: ["因为把巨大的乘积分解回两个质数极其困难，超级计算机也要算很多年", "因为乘积的数字太多，没人愿意看", "因为别人不懂乘法", "因为质数会变魔术"], answer: 0,
          hint: "17 × 23 好算；从 391 找回 17 和 23 呢？", explain: "乘法合成容易、分解困难——数字大到几百位时，连最快的计算机也要算上成千上万年。这就是 RSA 密码的底气。" },
        { type: "judge", level: "变式", q: "2 是质数，而且是所有质数里唯一的偶数。", answer: true,
          hint: "比 2 大的偶数，都能被谁整除？", explain: "对！大于 2 的偶数都有因数 2，都是合数；只有 2 自己是例外。" },
        { type: "fill", level: "温故", q: "还记得吗：一个数最大的因数是它本身。18 最大的因数是？", answer: "18",
          hint: "18 能被 18 整除吗？", explain: "18 的因数有 1、2、3、6、9、18，最大的是 18 本身。" },
        { type: "judge", level: "温故", q: "还记得吗：1 既不是质数，也不是合数。", answer: true,
          hint: "质数要有恰好 2 个因数，1 有几个因数？", explain: "对！1 只有 1 个因数，不够格当质数，也不是合数。" }
      ]
    },
    {
      type: "review",
      question: "小小的质数，凭什么能守护互联网上的秘密？",
      ways: [
        { name: "搭与拆", text: "合成：17 × 23 一秒钟算出 391；分解：从 391 找回 17 和 23，得从 2、3、5、7……一个一个试，慢得多。" },
        { name: "锁与钥匙", text: "把乘积公开当「锁」，谁都能用它加密；两个质数自己藏好当「钥匙」，只有你打得开。" },
        { name: "凯撒对比", text: "凯撒密码只有 25 种移法，一试就破；质数锁的钥匙藏在几百位的数字里，试到宇宙尽头也试不完。" }
      ],
      ask: "和爸爸妈妈玩个游戏：让他们用计算器算 29 × 31（= 899），再比赛把 899 拆回两个质数。哪个更快？"
    },
    {
      type: "beauty",
      headline: "质数：看着最乱，却最有秩序",
      paragraphs: [
        "把自然数排成螺旋，再圈出质数——它们竟会连成一条条神秘的斜线！数学家至今还在研究这是为什么。",
        "哥德巴赫猜想：每个大于 2 的偶数都能写成两个质数之和（8 = 3 + 5，20 = 7 + 13）。快三百年了，没人能证明它，也没人找到反例。",
        "去实验室转一转质数螺旋，去博物馆看看这个「人人都懂、却没人能证」的大猜想！"
      ],
      lab: "prime-spiral",
      museum: "mys-goldbach"
    }
  ]
});
