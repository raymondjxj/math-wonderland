/* ============================================================
   数学奇境 · 四年级扩展单元 v2（第 4~6 课，push 模式）
   单元：4 三位数乘两位数 / 5 除数是两位数的除法 / 6 平行四边形和梯形
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[4] = MW.content[4] || { grade: 4, name: "四年级 · 蔚蓝星球", units: [] };
G.units.push(

  /* ================= 单元 4：三位数乘两位数 ================= */
  {
    id: "g4u4",
    title: "三位数乘两位数",
    subtitle: "拆一拆，大数乘法变小题",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "蓝鲸号的补给难题",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="342" cy="40" r="22" fill="#ffd166"/>
          <path d="M0 196 Q50 183 100 196 T200 196 T300 196 T400 196 V240 H0 Z" fill="#bcd8ff"/>
          <path d="M0 212 Q50 200 100 212 T200 212 T300 212 T400 212 V240 H0 Z" fill="#4d96ff" opacity=".55"/>
          <path d="M316 196 L323 122 L339 122 L346 196 Z" fill="#ffffff" stroke="#2f7df0" stroke-width="3"/>
          <rect x="320" y="100" width="22" height="22" rx="4" fill="#2f7df0"/>
          <circle cx="331" cy="111" r="6" fill="#ffd166"/>
          <path d="M318 100 L331 86 L344 100 Z" fill="#ff6b6b"/>
          <path d="M56 196 L236 196 L216 226 L78 226 Z" fill="#2f7df0"/>
          <rect x="90" y="180" width="112" height="18" rx="6" fill="#1c4b8f"/>
          <g fill="#4d96ff" stroke="#1c4b8f" stroke-width="2">
            <rect x="96" y="158" width="22" height="22" rx="4"/><rect x="124" y="158" width="22" height="22" rx="4"/><rect x="152" y="158" width="22" height="22" rx="4"/><rect x="180" y="158" width="22" height="22" rx="4"/>
            <rect x="96" y="132" width="22" height="22" rx="4"/><rect x="124" y="132" width="22" height="22" rx="4"/><rect x="152" y="132" width="22" height="22" rx="4"/><rect x="180" y="132" width="22" height="22" rx="4"/>
            <rect x="96" y="106" width="22" height="22" rx="4"/><rect x="124" y="106" width="22" height="22" rx="4"/><rect x="152" y="106" width="22" height="22" rx="4"/><rect x="180" y="106" width="22" height="22" rx="4"/>
          </g>
          <rect x="88" y="52" width="148" height="34" rx="17" fill="#ffffff"/>
          <path d="M120 86 L112 100 L132 88 Z" fill="#ffffff"/>
          <text x="162" y="75" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="middle">每箱 124 块！</text>
          <text x="300" y="40" font-size="16" fill="#1c4b8f" font-weight="bold">12 箱 = ?</text>
          <text x="146" y="234" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">蓝鲸号补给船</text>
        </svg>`,
        paragraphs: [
          "蔚蓝星球有 12 座灯塔。每到冬天，补给船「蓝鲸号」就要出发，给每座灯塔送去一箱能量饼干。",
          "每箱装 124 块。船长阿浪挠挠头：12 箱一共多少块？124 × 12……乘法口诀表里可没有 124 的口诀呀！",
          "大副笑眯眯地说：「别怕，把 12 拆成 10 和 2，难题立刻变小题。」真的吗？今天一起揭开<b>三位数乘两位数</b>的秘密。"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先热热身：点击格子，把这块 12 行 × 10 列 的甲板铺满。边铺边想：先铺 10 行是多少格？再铺 2 行呢？",
        config: { interactive: true, rows: 12, cols: 10 },
        successText: "铺满啦！10 行是 10 × 10 = 100 格，2 行是 2 × 10 = 20 格，合起来 12 × 10 = 120。把 12 拆成 10 + 2，就是你的秘密武器！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "一箱 124 块，12 箱一共多少？把每箱画成 1 个大格：12 个 124，就是 124 × 12。", state: { rows: 2, cols: 6, filled: 0, showCount: true } },
          { caption: "先算整十的部分：10 箱是 124 × 10 = 1240 块。乘整十数，最好算！", state: { rows: 2, cols: 6, filled: 10, showCount: true } },
          { caption: "再算剩下的 2 箱：124 × 2 = 248 块。", state: { rows: 2, cols: 6, filled: 12, showCount: true } },
          { caption: "合起来：1240 + 248 = 1488。124 × 12 = 124 × 10 + 124 × 2，拆开算，总数不变！", state: { rows: 2, cols: 6, filled: 12, showCount: true } },
          { caption: "竖式就是把这两步竖着写：124 × 2 = 248 写第一行；124 × 10 = 1240 写第二行。", state: { rows: 2, cols: 6, filled: 12, showCount: true } },
          { caption: "对位口诀：用哪一位去乘，得数的末位就对着哪一位。最后 248 + 1240 = 1488！", state: { rows: 2, cols: 6, filled: 12, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「拆开算」的办法写成数学的语言：",
          "三位数乘两位数，把两位数拆成整十数和一位数，分别和三位数相乘，再把两次的积相加。"
        ],
        formula: "124 × 12 = 124 × 10 + 124 × 2 = 1240 + 248 = 1488",
        keypoints: [
          "竖式第一步：用个位上的 2 乘 124，得 248，末位对齐个位",
          "竖式第二步：用十位上的 1 乘 124，得 124 个十（1240），末位对齐十位",
          "最后把两次的积相加：248 + 1240 = 1488",
          "对位口诀：用哪一位去乘，得数的末位就对着哪一位"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "124 × 12 = ？", options: ["1488", "1238", "248", "372"], answer: 0,
            hint: "拆成 124 × 10 + 124 × 2 试试", explain: "124 × 10 = 1240，124 × 2 = 248，1240 + 248 = 1488。" },
          { type: "fill", level: "基础", q: "124 × 10 = ＿＿", answer: "1240",
            hint: "乘 10，就在末尾添 1 个 0", explain: "124 × 10 = 1240。整十部分是拆开算的好帮手。" },
          { type: "choice", level: "变式", q: "竖式计算 124 × 12 时，第二步的 124 为什么要向左错一位写？", options: ["因为十位上的 1 表示 1 个十，乘得的是 124 个十", "因为这样写更整齐好看", "写错了，应该对齐个位"], answer: 0,
            hint: "12 里的 1 在十位上，它表示多少？", explain: "十位的 1 是 1 个十，124 × 10 = 1240，末位对齐十位——错开一位正是 1240 省略末尾 0 的写法。" },
          { type: "judge", level: "变式", q: "计算 124 × 12：先算 124 × 2 = 248，再算 124 × 1 = 124，最后 248 + 124 = 372。", answer: false,
            hint: "12 里的 1 是 1 个十还是 1 个一？", explain: "错！第二个因数十位上的 1 表示 10，应算 124 × 10 = 1240，248 + 1240 = 1488。" },
          { type: "fill", level: "变式", q: "213 × 32 = 213 × 30 + 213 × 2 = ＿＿", answer: "6816",
            hint: "213 × 30 = 6390，213 × 2 = 426，加起来", explain: "6390 + 426 = 6816。拆一拆，大数乘法也不难。" },
          { type: "choice", level: "挑战", q: "学校图书室买 25 套《海洋百科》，每套 136 元，一共多少元？", options: ["3400 元", "3300 元", "3450 元", "680 元"], answer: 0,
            hint: "136 × 25 = 136 × 20 + 136 × 5", explain: "136 × 20 = 2720，136 × 5 = 680，2720 + 680 = 3400 元。" },
          { type: "fill", level: "挑战", q: "304 × 21 = 304 × 20 + 304 × 1 = ＿＿", answer: "6384",
            hint: "304 × 20 = 6080，再加 304", explain: "6080 + 304 = 6384。因数中间有 0，拆开算更不容易错。" },
          { type: "choice", level: "温故", q: "还记得吗：(100 + 24) × 12 = 100 × 12 + 24 × 12，用的是哪条运算定律？", options: ["乘法分配律", "乘法交换律", "加法结合律"], answer: 0,
            hint: "上一课刚学过：拆开算和合着算，一样多", explain: "这是乘法分配律。本课把 12 拆成 10 + 2 来乘，靠的也是它！" }
        ]
      },
      {
        type: "review",
        question: "124 × 12 可以怎样算？为什么可以拆开算？",
        ways: [
          { name: "拆开算", text: "把 12 拆成 10 + 2：124 × 10 = 1240，124 × 2 = 248，1240 + 248 = 1488。" },
          { name: "竖式算", text: "先用 2 乘 124 得 248；再用十位上的 1 乘 124 得 1240（错一位写）；相加得 1488。" },
          { name: "格子图", text: "12 个大格每格 124：10 格是 1240，2 格是 248，合起来 1488——格子总数不变。" }
        ],
        ask: "给爸爸妈妈讲讲：竖式里第二个 124 为什么要错开一位写？再请他们出一道 213 × 22 考考你！"
      },
      {
        type: "beauty",
        headline: "幻方：数字排队的纪律之美",
        paragraphs: [
          "学会乘法，大数计算就变成了几行小算式。数学里还有一种更神奇的「排列」：把 1 到 9 填进九宫格，让每行、每列、每条对角线的和全都相等——这就是幻方。",
          "传说大禹治水时，洛水里浮出一只神龟，龟背上的斑点正好排成幻方的样子，所以它又叫「洛书」。",
          "去实验室亲手摆一摆幻方，感受乘法与加法合作变出的魔法！"
        ],
        lab: "magic-square"
      }
    ]
  },

  /* ================= 单元 5：除数是两位数的除法 ================= */
  {
    id: "g4u5",
    title: "除数是两位数的除法",
    subtitle: "试商法宝：看作整十来试",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "小丑鱼分班记",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="46" cy="40" r="20" fill="#ffd166"/>
          <path d="M0 214 Q50 202 100 214 T200 214 T300 214 T400 214 V240 H0 Z" fill="#bcd8ff"/>
          <g fill="#ffffff" stroke="#4d96ff" stroke-width="3">
            <rect x="24" y="120" width="76" height="86" rx="16"/>
            <rect x="118" y="120" width="76" height="86" rx="16"/>
            <rect x="212" y="120" width="76" height="86" rx="16"/>
            <rect x="306" y="120" width="76" height="86" rx="16"/>
          </g>
          <g fill="#4d96ff" opacity=".35">
            <rect x="28" y="150" width="68" height="52" rx="12"/>
            <rect x="122" y="150" width="68" height="52" rx="12"/>
            <rect x="216" y="150" width="68" height="52" rx="12"/>
            <rect x="310" y="150" width="68" height="52" rx="12"/>
          </g>
          <g fill="#ff8a3d">
            <g transform="translate(50,168)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(74,186)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(144,168)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(168,186)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(238,168)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(262,186)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(332,168)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
            <g transform="translate(356,186)"><ellipse rx="10" ry="6"/><path d="M-9 0 L-17 -5 L-17 5 Z"/></g>
          </g>
          <rect x="96" y="30" width="208" height="36" rx="18" fill="#ffffff"/>
          <text x="200" y="54" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="middle">92 条小鱼，每缸 23 条，分几缸？</text>
          <text x="200" y="104" font-size="16" fill="#2f7df0" font-weight="bold" text-anchor="middle">92 ÷ 23 = ?</text>
        </svg>`,
        paragraphs: [
          "海洋幼儿园来了 92 条小丑鱼，要分缸啦！每个鱼缸住 23 条，园长问：要准备几个鱼缸？",
          "小海豚蓝蓝列出算式：92 ÷ 23。可是 23 不是整十数，口诀表里也没有「23 的口诀」……这可怎么算？",
          "老海龟推推眼镜：「除数是两位数，我有个法宝——把 23 看作 20 来<b>试商</b>！」试商是什么神奇本领？一起去学！"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "动手分一分：把方块摆成 4 行 × 5 列。想象 20 条小鱼平均分进 4 个鱼缸，每缸几条？",
        config: { interactive: true, rows: 2, cols: 3, targetRows: 4, targetCols: 5 },
        successText: "摆好了！20 条鱼平均分进 4 缸，每缸 5 条：20 ÷ 4 = 5。「平均分」用除法——今天把除数升级成两位数！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "先看清一份是多少：每个鱼缸住 23 条鱼。", state: { rows: 1, cols: 23, showTotal: true } },
          { caption: "92 条鱼，每 23 条一缸：1 缸、2 缸、3 缸、4 缸——正好装满 4 缸，92 ÷ 23 = 4。", state: { rows: 4, cols: 23, showTotal: true } },
          { caption: "可每次都摆方块太慢！试商法宝：23 接近整十数 20，先把 23 看作 20 来想。", state: { rows: 4, cols: 23, showTotal: true } },
          { caption: "92 里面有几个 20？4 个 20 是 80，5 个 20 是 100 超了——先试商 4。", state: { rows: 4, cols: 20, showTotal: true } },
          { caption: "乘回去检验：23 × 4 = 92，一条不多一条不少。商 4 完全正确！", state: { rows: 4, cols: 23, showTotal: true } },
          { caption: "要是乘积比 92 大，说明商大了要调小；要是余下的比 23 还多，说明商小了要调大。", state: { rows: 4, cols: 23, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把分鱼的过程写成数学的语言：",
          "除数是两位数，先把它「看作」接近的整十数来试商，再乘回去检验，不合适就调一调。"
        ],
        formula: "92 ÷ 23 = 4（把 23 看作 20 试商，23 × 4 = 92 正好）",
        keypoints: [
          "试商三步：看作整十 → 试商 → 乘回去检验",
          "「四舍」试商（如 23→20）：除数看小了，商容易偏大，要调小",
          "「五入」试商（如 28→30）：除数看大了，商容易偏小，要调大",
          "每次除完看一看：余数必须比除数小"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "92 ÷ 23 = ＿＿", answer: "4",
            hint: "想：23 × 几 = 92？", explain: "23 × 4 = 92，所以 92 ÷ 23 = 4。" },
          { type: "choice", level: "基础", q: "计算 84 ÷ 21 时，把 21 看作几来试商比较合适？", options: ["20", "25", "30"], answer: 0,
            hint: "21 最接近哪个整十数？", explain: "21 最接近 20。把除数看作接近的整十数，试商又快又准。" },
          { type: "fill", level: "基础", q: "84 ÷ 21 = ＿＿", answer: "4",
            hint: "把 21 看作 20 试商 4，再乘回去检验：21 × 4 = ?", explain: "21 × 4 = 84，正好，所以 84 ÷ 21 = 4。" },
          { type: "choice", level: "变式", q: "为什么试商之后，一定要乘回去检验？", options: ["除数是「看作」整十数试的，试出的商可能偏大或偏小，要验证才知道对不对", "这是老师规定的，没有原因", "多算一遍只是显得更认真"], answer: 0,
            hint: "23 真的是 20 吗？「看作」会带来什么偏差？", explain: "把 23 看作 20，除数看小了，商可能偏大；把 28 看作 30，除数看大了，商可能偏小。检验才能确保正确。" },
          { type: "judge", level: "变式", q: "196 ÷ 28：把 28 看作 30 试商 6，28 × 6 = 168，余下 28，正好还能再分 1 个，所以商要调大成 7。", answer: true,
            hint: "余数和除数一样大了，说明什么？", explain: "对！余数等于除数，说明商小了。调成 7：28 × 7 = 196，正好分完。" },
          { type: "choice", level: "挑战", q: "178 块饼干，每盒装 32 块，最多能装满几盒？", options: ["5 盒，还剩 18 块", "6 盒正好装满", "4 盒，还剩 50 块"], answer: 0,
            hint: "32 × 5 = 160，32 × 6 = 192，哪个不超过 178？", explain: "32 × 5 = 160，178 − 160 = 18；32 × 6 = 192 超了。所以装满 5 盒，剩 18 块。" },
          { type: "fill", level: "挑战", q: "245 ÷ 49 = ＿＿（把 49 看作 50 试商，小心要调商哦！）", answer: "5",
            hint: "先试 4：49 × 4 = 196，245 − 196 = 49，余数和除数一样大了……", explain: "初商 4 余 49，余数等于除数，商小了！调成 5：49 × 5 = 245，正好。" },
          { type: "choice", level: "温故", q: "还记得吗：角的大小由什么决定？", options: ["两条边张开的大小", "两条边的长短", "两条边的粗细"], answer: 0,
            hint: "放大镜能把角放大吗？", explain: "角的大小只看两条边张开的大小，和边的长短、粗细都没关系。" }
        ]
      },
      {
        type: "review",
        question: "92 ÷ 23 怎样算？为什么可以把 23 看作 20？",
        ways: [
          { name: "摆方块", text: "92 块方块，每 23 块装一缸：1 缸、2 缸、3 缸、4 缸，正好 4 缸，所以 92 ÷ 23 = 4。" },
          { name: "试商", text: "23 接近 20：92 里大约有 4 个 20，先试商 4；检验 23 × 4 = 92，正好！" },
          { name: "想乘法", text: "除法是乘法的逆运算：想 23 × 几 = 92，这个「几」就是商。" }
        ],
        ask: "给爸爸妈妈讲讲：什么情况下试的商会偏大、要调小？什么情况下偏小、要调大？各举一道题。"
      },
      {
        type: "beauty",
        headline: "算筹：小棍子摆出的大计算",
        paragraphs: [
          "两千多年前的中国，没有纸和笔，人们用一根根小竹棍——算筹——摆出数字，就能做加减乘除。",
          "古人把除法叫「归除」，还编了朗朗上口的口诀。用算筹做除法，也要先试一试、再调一调，和今天的试商一脉相承！",
          "去博物馆看看算筹的本领，想一想：古人没有计算器，怎么把账算得又准又快？"
        ],
        museum: "his-suanchou"
      }
    ]
  },

  /* ================= 单元 6：平行四边形和梯形 ================= */
  {
    id: "g4u6",
    title: "平行四边形和梯形",
    subtitle: "剪一刀，拼出面积公式",
    tag: "空间",
    minutes: 18,
    scenes: [
      {
        type: "story",
        title: "海底建筑队的新任务",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="348" cy="38" r="20" fill="#ffd166"/>
          <path d="M0 210 Q50 198 100 210 T200 210 T300 210 T400 210 V240 H0 Z" fill="#bcd8ff"/>
          <path d="M0 224 Q50 213 100 224 T200 224 T300 224 T400 224 V240 H0 Z" fill="#4d96ff" opacity=".5"/>
          <path d="M100 84 L236 84 L196 186 L60 186 Z" fill="#4d96ff" opacity=".75" stroke="#1c4b8f" stroke-width="3"/>
          <line x1="150" y1="84" x2="150" y2="186" stroke="#ffffff" stroke-width="3" stroke-dasharray="7 6"/>
          <path d="M150 178 L158 178 L158 186" fill="none" stroke="#ffffff" stroke-width="2.5"/>
          <text x="128" y="202" font-size="14" fill="#1c4b8f" font-weight="bold">底 6 米</text>
          <text x="158" y="140" font-size="14" fill="#ffffff" font-weight="bold">高 4 米</text>
          <path d="M262 150 L366 150 L386 206 L242 206 Z" fill="#8aa7c7" stroke="#1c4b8f" stroke-width="3"/>
          <text x="314" y="184" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">梯形堤坝</text>
          <text x="160" y="52" font-size="16" fill="#1c4b8f" font-weight="bold" text-anchor="middle">平行四边形花坛，草皮买多少？</text>
        </svg>`,
        paragraphs: [
          "海底建筑队接到新任务：修一座平行四边形的珊瑚花坛，还要在旁边筑一道梯形的小堤坝。",
          "章鱼队长量了量花坛：底 6 米、高 4 米。小海马抢答：「草皮面积？6 × 4 = 24 平方米！」「等等，」章鱼队长笑了，「平行四边形又不是长方形，也能用 底 × 高 吗？」",
          "剪刀咔嚓一声——沿高剪开，拼一拼，奇迹出现了……"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先摸摸底：点击格子，把这块 6 × 4 的长方形草皮铺满，数一数一共多少格？",
        config: { interactive: true, rows: 4, cols: 6 },
        successText: "铺满啦！6 × 4 = 24 格，长方形面积 = 长 × 宽。记住这 24 格，待会儿平行四边形要和它比一比！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "平行四边形花坛：底 6 格，高 4 格。边是斜的，面积怎么算？", state: { rows: 4, cols: 6, filled: 0, showCount: true } },
          { caption: "沿高剪一刀，把剪下的三角形平移到右边——咔！拼成一个 6 × 4 的长方形。", state: { rows: 4, cols: 6, filled: 24, showCount: true } },
          { caption: "剪拼前后面积不变：平行四边形面积 = 长方形面积 = 底 × 高 = 6 × 4 = 24 格。", state: { rows: 4, cols: 6, filled: 24, showCount: true } },
          { caption: "再试一个：底 6 格、高 2 格，剪拼后是 6 × 2 = 12 格。还是 底 × 高！", state: { rows: 2, cols: 6, filled: 12, showCount: true } },
          { caption: "长方形和平行四边形都有两组对边分别平行。那只有一组对边平行的四边形呢？", state: { rows: 2, cols: 8, filled: 16, showCount: true } },
          { caption: "把一条横边剪短成 4 格：两条横边一长一短、仍然平行，另外两边斜了——这叫梯形，平行的两边叫上底和下底。", state: { rows: 2, cols: 8, filled: 12, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把剪拼的发现写成数学的语言：",
          "沿高剪开、平移、拼合——平行四边形变成长方形，面积一点儿没变。"
        ],
        formula: "平行四边形的面积 = 底 × 高",
        keypoints: [
          "两组对边分别平行的四边形叫平行四边形；长方形、正方形是特殊的平行四边形",
          "沿高剪开拼成长方形：底变成长，高变成宽，面积 = 底 × 高",
          "只有一组对边平行的四边形叫梯形；平行的两边叫上底和下底",
          "平行四边形容易变形——伸缩门、升降架都利用了这一点"
        ],
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <path d="M78 34 L186 34 L150 118 L42 118 Z" fill="#4d96ff" opacity=".7" stroke="#1c4b8f" stroke-width="3"/>
          <line x1="78" y1="34" x2="78" y2="118" stroke="#ff6b6b" stroke-width="3" stroke-dasharray="6 5"/>
          <path d="M78 110 L86 110 L86 118" fill="none" stroke="#ff6b6b" stroke-width="2.5"/>
          <path d="M78 34 L42 118 L78 118 Z" fill="#ffd166" stroke="#d96a00" stroke-width="2.5"/>
          <text x="104" y="136" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">沿高剪开</text>
          <path d="M196 76 L226 76" stroke="#2f7df0" stroke-width="4" stroke-linecap="round"/>
          <path d="M226 76 L214 68 L214 84 Z" fill="#2f7df0"/>
          <rect x="236" y="34" width="108" height="84" fill="#bcd8ff" stroke="#1c4b8f" stroke-width="3"/>
          <path d="M344 34 L308 118 L344 118 Z" fill="#ffd166" stroke="#d96a00" stroke-width="2.5"/>
          <line x1="236" y1="34" x2="236" y2="118" stroke="#ff6b6b" stroke-width="3" stroke-dasharray="6 5"/>
          <text x="290" y="136" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">平移拼成长方形</text>
          <path d="M150 176 L250 176 L286 218 L114 218 Z" fill="#4d96ff" opacity=".55" stroke="#1c4b8f" stroke-width="3"/>
          <text x="200" y="170" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">上底</text>
          <text x="200" y="234" font-size="13" fill="#1c4b8f" font-weight="bold" text-anchor="middle">下底（只有这一组对边平行：梯形）</text>
        </svg>`
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "平行四边形的面积 = ？", options: ["底 × 高", "底 × 斜边", "底 + 高"], answer: 0,
            hint: "剪拼成长方形后，长方形的长和宽分别是什么？", explain: "剪拼成长方形：长 = 底，宽 = 高，所以面积 = 底 × 高。" },
          { type: "fill", level: "基础", q: "底 8 厘米、高 5 厘米的平行四边形，面积是 ＿＿ 平方厘米。", answer: "40",
            hint: "面积 = 底 × 高", explain: "8 × 5 = 40 平方厘米。" },
          { type: "choice", level: "基础", q: "下面哪种图形只有一组对边平行？", options: ["梯形", "长方形", "平行四边形"], answer: 0,
            hint: "长方形和平行四边形都有两组", explain: "只有一组对边平行的四边形叫梯形。" },
          { type: "choice", level: "变式", q: "为什么平行四边形的面积可以用「底 × 高」来计算？", options: ["沿高剪开能拼成长方形，面积不变，长方形面积 = 长 × 宽", "数学书规定的，记住就行", "因为底和高看起来最长"], answer: 0,
            hint: "想想方格纸上的剪拼动画", explain: "沿高剪下的三角形平移到另一边，正好拼成长方形。面积没变：底变成长、高变成宽，所以 底 × 高。" },
          { type: "judge", level: "变式", q: "把平行四边形沿任意一条斜边剪开，都能拼成长方形。", answer: false,
            hint: "要沿什么线剪，剪出的角才是直角？", explain: "必须沿「高」剪——也就是垂直于底的线，剪出的才是直角，才拼得出长方形。" },
          { type: "choice", level: "变式", q: "一个平行四边形面积 36 平方厘米，底 9 厘米，高是多少？", options: ["4 厘米", "6 厘米", "27 厘米"], answer: 0,
            hint: "底 × 高 = 36，9 × 几 = 36？", explain: "36 ÷ 9 = 4 厘米。知道面积和底，用除法求高。" },
          { type: "choice", level: "挑战", q: "把长方形木框拉成平行四边形，什么变了、什么没变？", options: ["周长不变，面积变小", "面积不变，周长变小", "周长和面积都不变"], answer: 0,
            hint: "四条边的长度变了吗？高变了吗？", explain: "边长没变，所以周长不变；但拉斜后高变矮了，底 × 高变小，面积也变小了。" },
          { type: "fill", level: "挑战", q: "平行四边形花园面积 48 平方米，高 6 米，底是 ＿＿ 米。", answer: "8",
            hint: "底 × 6 = 48", explain: "48 ÷ 6 = 8 米。面积 ÷ 高 = 底。" },
          { type: "choice", level: "温故", q: "还记得吗：长方形相邻的两条边组成的是什么角？是多少度？", options: ["直角，90°", "锐角，45°", "平角，180°"], answer: 0,
            hint: "用书角、桌角想一想", explain: "长方形的 4 个角都是直角，90°。方方正正的长方形，正是特殊的平行四边形。" }
        ]
      },
      {
        type: "review",
        question: "平行四边形的面积为什么是 底 × 高？",
        ways: [
          { name: "剪拼法", text: "沿高剪下三角形，平移到右边拼成长方形：长 = 底、宽 = 高，面积不变。" },
          { name: "数格子", text: "底 6 高 4 的平行四边形，剪拼成 6 × 4 的长方形，方格纸上一数正好 24 格。" },
          { name: "拉一拉", text: "长方形框拉斜成平行四边形：高变矮、面积变小——说明面积看「高」，不看斜边。" }
        ],
        ask: "用四根吸管做一个长方形框，拉成平行四边形，给爸爸妈妈讲讲：什么没变、什么变了、为什么。"
      },
      {
        type: "beauty",
        headline: "出入相补：中国古代的剪拼智慧",
        paragraphs: [
          "把图形剪开、移过去、拼起来，面积不变——三国时期的数学家刘徽把这个本领叫做「出入相补原理」。",
          "用它，刘徽证明了著名的勾股定理：直角三角形两条直角边上的正方形，剪一剪、拼一拼，正好等于斜边上的正方形。",
          "平行四边形变长方形、两个梯形拼成平行四边形……全是出入相补的魔法。去博物馆看看古人怎样用「剪刀」证明数学！"
        ],
        museum: "prf-gougu"
      }
    ]
  }
);
