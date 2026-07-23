/* ============================================================
   数学奇境 · 四年级扩展单元（第 9~11 课）v2
   单元：9 公顷和平方千米 / 10 四则运算（含括号） / 11 运算定律（一）
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[4] = MW.content[4] || { grade: 4, name: "四年级 · 蔚蓝星球", units: [] };
G.units.push(

  /* ================= 单元 9：公顷和平方千米 ================= */
  {
    id: "g4u9",
    title: "公顷和平方千米",
    subtitle: "给大地量尺寸的新单位",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "新广场有多大？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="346" cy="38" r="19" fill="#ffd166"/>
          <path d="M0 214 Q100 204 200 214 T400 214 V240 H0 Z" fill="#bcd8ff"/>
          <rect x="46" y="52" width="150" height="150" fill="#ffffff" stroke="#1c4b8f" stroke-width="3"/>
          <g stroke="#9db8d9" stroke-width="1.5">
            <line x1="61" y1="52" x2="61" y2="202"/><line x1="76" y1="52" x2="76" y2="202"/><line x1="91" y1="52" x2="91" y2="202"/><line x1="106" y1="52" x2="106" y2="202"/><line x1="121" y1="52" x2="121" y2="202"/><line x1="136" y1="52" x2="136" y2="202"/><line x1="151" y1="52" x2="151" y2="202"/><line x1="166" y1="52" x2="166" y2="202"/><line x1="181" y1="52" x2="181" y2="202"/>
            <line x1="46" y1="67" x2="196" y2="67"/><line x1="46" y1="82" x2="196" y2="82"/><line x1="46" y1="97" x2="196" y2="97"/><line x1="46" y1="112" x2="196" y2="112"/><line x1="46" y1="127" x2="196" y2="127"/><line x1="46" y1="142" x2="196" y2="142"/><line x1="46" y1="157" x2="196" y2="157"/><line x1="46" y1="172" x2="196" y2="172"/><line x1="46" y1="187" x2="196" y2="187"/>
          </g>
          <text x="121" y="44" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">100 米</text>
          <text x="38" y="132" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle" transform="rotate(-90 38 132)">100 米</text>
          <rect x="286" y="140" width="64" height="46" rx="4" fill="#ffffff" stroke="#1c4b8f" stroke-width="2.5"/>
          <path d="M280 142 L318 112 L356 142 Z" fill="#4d96ff" stroke="#1c4b8f" stroke-width="2.5"/>
          <rect x="310" y="160" width="16" height="26" fill="#2f7df0"/>
          <rect x="222" y="52" width="156" height="58" rx="14" fill="#ffffff"/>
          <text x="300" y="76" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">100 × 100</text>
          <text x="300" y="98" font-size="14" fill="#2f7df0" font-weight="bold" text-anchor="middle">= ? 平方米</text>
          <text x="318" y="214" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="middle">🏫 海洋学校新广场</text>
        </svg>`,
        paragraphs: [
          "蔚蓝星球的海洋学校要建一座新珊瑚广场。海龟校长量了量：长 100 米，宽 100 米。文书员小章鱼提笔一算：100 × 100 = 10000 平方米！",
          "「一……万……平方米……」报数报得小章鱼直喘粗气。蓝蓝举起手：「数字这么大，念都念不顺，有没有更大一点的面积单位呀？」",
          "还真有！数学家早就为「量大地」准备好了新单位。听说遥远的故宫和天安门广场，都是用它来说大小的。到底是哪个单位这么厉害？"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "这是一张「大地方格图」：每个小方格是 10 米 × 10 米的小地块，也就是 100 平方米。点击方格，把 10 × 10 的整块大地铺满——铺满后想一想：一共是多少平方米？",
        config: { interactive: true, rows: 10, cols: 10 },
        successText: "铺满啦！100 个方格 × 100 平方米 = 10000 平方米。这块边长 100 米的大地，有个响亮的名字：1 公顷！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "先看 1 小格：10 米 × 10 米 = 100 平方米，大约是两个教室拼起来那么大。", state: { rows: 10, cols: 10, filled: 1, showCount: true } },
          { caption: "铺满 1 行：10 个 100 平方米 = 1000 平方米。", state: { rows: 10, cols: 10, filled: 10, showCount: true } },
          { caption: "铺满一半：50 格，5000 平方米——已经有半个 400 米操场那么大了。", state: { rows: 10, cols: 10, filled: 50, showCount: true } },
          { caption: "全部铺满：100 个 100 平方米 = 10000 平方米！边长 100 米的正方形，面积就是 1 公顷。", state: { rows: 10, cols: 10, filled: 100, showCount: true } },
          { caption: "现在换个镜头：把每 1 小格当成 1 公顷。10 × 10 = 100 公顷，得到更大的单位：1 平方千米！", state: { rows: 10, cols: 10, filled: 100, showCount: true } },
          { caption: "1 平方千米是边长 1000 米（1 千米）的正方形：1 平方千米 = 100 公顷 = 1000000 平方米。量城市、量大海，就用它！", state: { rows: 10, cols: 10, filled: 100, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「给大地量尺寸」写成数学的语言：",
          "公顷和平方千米，是比平方米大得多的面积单位，专门用来测量土地。"
        ],
        formula: "1 公顷 = 10000 平方米　　1 平方千米 = 100 公顷",
        keypoints: [
          "边长 100 米的正方形，面积是 1 公顷：100 × 100 = 10000 平方米",
          "边长 1 千米（1000 米）的正方形，面积是 1 平方千米 = 100 公顷 = 1000000 平方米",
          "找参照：一间教室约 50 平方米，约 200 间教室是 1 公顷",
          "天安门广场约 44 公顷，故宫约 72 公顷；量城市、海洋用平方千米"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "1 公顷 = ＿＿ 平方米", answer: "10000",
            hint: "边长 100 米的正方形：100 × 100 = ?", explain: "100 × 100 = 10000，所以 1 公顷 = 10000 平方米。" },
          { type: "choice", level: "基础", q: "边长 100 米的正方形，面积是多少？", options: ["1 公顷", "100 平方米", "1 平方千米"], answer: 0,
            hint: "100 × 100 = 10000 平方米，它有个新名字", explain: "100 × 100 = 10000 平方米 = 1 公顷。" },
          { type: "choice", level: "变式", q: "一间教室约 50 平方米，大约几间教室合起来是 1 公顷？", options: ["20 间", "200 间", "2000 间"], answer: 1,
            hint: "1 公顷 = 10000 平方米，10000 里面有几个 50？", explain: "10000 ÷ 50 = 200，约 200 间教室是 1 公顷。" },
          { type: "choice", level: "变式", q: "为什么测量操场、广场时，人们爱用「公顷」而不用「平方米」？", options: ["用平方米数字太大，读着写着都麻烦；公顷让数字变小、好说好记", "因为公顷听起来更高级", "平方米量不出大面积"], answer: 0,
            hint: "想想小章鱼报数报到喘粗气……", explain: "10000 平方米说起来费劲，说 1 公顷多利落！大单位是为大面积准备的。平方米照样量得出，只是不方便。" },
          { type: "judge", level: "变式", q: "天安门广场占地约 44 公顷，也就是约 44 万平方米。", answer: true,
            hint: "1 公顷 = 10000 平方米 = 1 万平方米", explain: "44 × 10000 = 440000 平方米 = 44 万平方米，这句话是对的。" },
          { type: "fill", level: "挑战", q: "1 平方千米 = ＿＿ 公顷", answer: "100",
            hint: "回忆动画：把 1 小格当成 1 公顷，10 × 10 铺满是多少格？", explain: "10 × 10 = 100，1 平方千米 = 100 公顷（也等于 1000000 平方米）。" },
          { type: "choice", level: "挑战", q: "故宫占地约 72 公顷，天安门广场约 44 公顷。故宫比天安门广场大约大多少？", options: ["约 28 公顷", "约 28 平方千米", "约 116 公顷"], answer: 0,
            hint: "单位相同，直接相减：72 − 44 = ?", explain: "72 − 44 = 28 公顷。116 是两处加起来的和；单位也不是平方千米。" },
          { type: "choice", level: "温故", q: "还记得吗：边长 1 米的正方形，面积是多少？", options: ["1 平方米", "1 米", "4 平方米"], answer: 0,
            hint: "三年级学的：面积是「面」的大小，不是边线的长短", explain: "边长 1 米的正方形，面积是 1 平方米。4 米是它的周长——别和面积搞混啦。今天的公顷，正是从平方米长大的！" },
          { type: "fill", level: "开放", q: "北京奥林匹克森林公园比天安门广场（约 44 公顷）还大。估一估：它可能是多少公顷？（填一个比 44 大的数）", answer: "680", check: { gt: 44 },
            hint: "比 44 公顷大——可以大胆一点，大公园往往是广场的好几倍", explain: "只要比 44 大都合理。奥林匹克森林公园实际约 680 公顷，相当于 15 个天安门广场！估大数，也是一种数感。" }
        ]
      },
      {
        type: "review",
        question: "1 公顷到底有多大？怎样向别人说明白？",
        ways: [
          { name: "正方形法", text: "边长 100 米的正方形：100 × 100 = 10000 平方米 = 1 公顷。" },
          { name: "格子法", text: "10 × 10 的方格图，每格 100 平方米，铺满 100 格正好是 1 公顷。" },
          { name: "生活参照", text: "一间教室约 50 平方米，约 200 间教室拼起来是 1 公顷；天安门广场约 44 公顷。" }
        ],
        ask: "给爸爸妈妈讲讲：1 公顷和 1 平方千米分别有多大？再一起估一估：咱们住的小区（或学校）大约是几公顷？"
      },
      {
        type: "beauty",
        headline: "泥板上的田地：四千年前的面积课",
        paragraphs: [
          "大约四千年前，两河流域的巴比伦人就要丈量田地、按面积收税。他们把方方正正的田画在泥板上，用芦苇笔刻下长和宽，算出每一块田的大小。",
          "田有大小，人就想出大大小小的面积单位——就像你今天认识的公顷和平方千米，都是「给大地量尺寸」的工具。",
          "去博物馆看看那些古老的泥板吧：原来「量土地」这件事，人类已经认认真真做了几千年！"
        ],
        museum: "his-babylon"
      }
    ]
  },

  /* ================= 单元 10：四则运算（含括号） ================= */
  {
    id: "g4u10",
    title: "四则运算（含括号）",
    subtitle: "括号是算式的优先通行证",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "海洋超市的找零难题",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="350" cy="36" r="18" fill="#ffd166"/>
          <rect x="34" y="76" width="230" height="10" rx="5" fill="#1c4b8f"/>
          <rect x="34" y="150" width="230" height="10" rx="5" fill="#1c4b8f"/>
          <rect x="56" y="30" width="54" height="46" rx="6" fill="#4d96ff" stroke="#1c4b8f" stroke-width="2.5"/>
          <rect x="64" y="20" width="7" height="16" fill="#ffd166"/><rect x="75" y="20" width="7" height="16" fill="#ff6b6b"/><rect x="86" y="20" width="7" height="16" fill="#2ec4b6"/>
          <rect x="56" y="86" width="60" height="26" rx="8" fill="#ffffff" stroke="#d96a00" stroke-width="2.5"/>
          <text x="86" y="104" font-size="14" fill="#d96a00" font-weight="bold" text-anchor="middle">12 元</text>
          <rect x="152" y="34" width="44" height="42" rx="5" fill="#ffffff" stroke="#1c4b8f" stroke-width="2.5"/>
          <line x1="160" y1="46" x2="188" y2="46" stroke="#9db8d9" stroke-width="2.5"/><line x1="160" y1="56" x2="188" y2="56" stroke="#9db8d9" stroke-width="2.5"/><line x1="160" y1="66" x2="188" y2="66" stroke="#9db8d9" stroke-width="2.5"/>
          <rect x="152" y="86" width="60" height="26" rx="8" fill="#ffffff" stroke="#d96a00" stroke-width="2.5"/>
          <text x="182" y="104" font-size="14" fill="#d96a00" font-weight="bold" text-anchor="middle">8 元</text>
          <rect x="54" y="160" width="92" height="46" rx="8" fill="#35c163" stroke="#1c7a3d" stroke-width="2.5"/>
          <text x="100" y="189" font-size="16" fill="#ffffff" font-weight="bold" text-anchor="middle">100 元</text>
          <rect x="162" y="164" width="226" height="38" rx="12" fill="#ffffff"/>
          <text x="275" y="188" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="middle">买 2 套，找回多少元？</text>
          <text x="330" y="60" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="middle">🛒 海洋超市</text>
        </svg>`,
        paragraphs: [
          "周末，蓝蓝揣着一张 100 元，游进了海洋超市：彩笔一盒 12 元，笔记本一本 8 元。蓝蓝要买 2 套「彩笔＋笔记本」，一套送妹妹，一套留给自己。",
          "收银员小章鱼噼里啪啦一算：「2 套一共 40 元，找你 60 元！」蓝蓝挠挠头：一套一套算我也会，可要合成一个算式，该怎么写呢？",
          "蓝蓝试着写：100 − 12 + 8 × 2……等等，这样算下去，找回的钱比付的还多，小章鱼笑得喷出一团墨！看来，算式里缺了一个能指挥运算顺序的「神秘符号」。"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "积木大变身：1 块积木当作 2 元用！每套文具里，彩笔 12 元 = 6 块，笔记本 8 元 = 4 块。现在摆的是 2 套的彩笔钱（2 行 6 列）。点「列 ＋」，把 2 套的笔记本钱也补上（每行补 4 列）——眼睛盯住总数怎么跳！",
        config: { interactive: true, rows: 2, cols: 6, targetRows: 2, targetCols: 10 },
        successText: "每行 6 + 4 = 10 块，2 行一共 20 块 = 40 元。你刚才做的就是 (12 + 8) × 2：先把每一套凑齐（先加），再乘套数（后乘）——这就是括号的意思！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "先摆 2 套彩笔：每套 12 元，2 行 12 列，2 × 12 = 24 元。", state: { rows: 2, cols: 12, showTotal: true } },
          { caption: "每套再添 8 元笔记本：每行变成 12 + 8 = 20 列。现在 2 行 20 列 = 40 元。", state: { rows: 2, cols: 20, showTotal: true } },
          { caption: "写成综合算式：(12 + 8) × 2 = 20 × 2 = 40。括号大声宣布：先算我里面！", state: { rows: 2, cols: 20, showTotal: true } },
          { caption: "要是忘了括号：12 + 8 × 2 = 12 + 16 = 28——只买了 1 盒彩笔加 2 本笔记本，根本不是 2 套！", state: { rows: 2, cols: 20, showTotal: true } },
          { caption: "再加上找零：100 − (12 + 8) × 2 = 100 − 40 = 60 元。先算括号，再算乘除，最后算加减！", state: { rows: 2, cols: 20, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把超市里的发现，写成运算的顺序规则：",
          "算式就像一列小火车，谁先做、谁后做，得有调度员指挥——括号就是最优先的调度员。"
        ],
        formula: "100 − (12 + 8) × 2 = 100 − 40 = 60（元）",
        keypoints: [
          "有括号的算式，先算括号里面的",
          "没有括号：先算乘、除法，再算加、减法",
          "括号像「优先通行证」：想让哪一步先算，就把它括起来",
          "只有加减（或只有乘除）的同级运算：从左往右依次算"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "30 + 6 × 5 = ？", options: ["180", "60", "45", "33"], answer: 1,
            hint: "没有括号，先算乘法 6 × 5", explain: "先算 6 × 5 = 30，再算 30 + 30 = 60。选 180 的小朋友是把 30 + 6 先算了——没有括号可不能这样！" },
          { type: "fill", level: "基础", q: "(12 + 8) × 2 = ＿＿", answer: "40",
            hint: "有括号，先算括号里的 12 + 8", explain: "(12 + 8) × 2 = 20 × 2 = 40。" },
          { type: "judge", level: "变式", q: "计算 100 − (12 + 8) × 2 时，先算 100 − 12 = 88，最后得 176。", answer: false,
            hint: "括号还没算呢，能先算减法吗？", explain: "错！先算括号 12 + 8 = 20，再算乘法 20 × 2 = 40，最后 100 − 40 = 60。" },
          { type: "choice", level: "变式", q: "为什么要给算式发明括号？", options: ["有些步骤必须合在一起先算，括号就是「优先通行证」，让算式说得清、不误会", "为了让算式看起来更长更厉害", "数学家随手画着玩的"], answer: 0,
            hint: "想想 2 套文具：不把 12 + 8 括起来，意思就变了", explain: "没有括号，12 + 8 × 2 只能先乘后加，买 2 套的意思就表达不出来了。括号让算式能准确说出生活的意思。" },
          { type: "choice", level: "变式", q: "想让 36 − 6 ÷ 3 的得数变成 10，括号该怎么加？", options: ["(36 − 6) ÷ 3", "36 − (6 ÷ 3)", "不用加括号"], answer: 0,
            hint: "得数是 10，想想：30 ÷ 3 = 10，30 从哪来？", explain: "(36 − 6) ÷ 3 = 30 ÷ 3 = 10；36 − (6 ÷ 3) = 34；不加括号也是 34。括号一加，顺序全变！" },
          { type: "fill", level: "挑战", q: "100 − (12 + 8) × 2 = ＿＿", answer: "60",
            hint: "分三步：括号 → 乘法 → 减法", explain: "12 + 8 = 20，20 × 2 = 40，100 − 40 = 60。付 100 元买 2 套，找回 60 元。" },
          { type: "choice", level: "挑战", q: "海洋餐厅：一份套餐 25 元，一瓶果汁 5 元。买 4 份套餐和 4 瓶果汁，下面哪个算式不对？", options: ["25 + 5 × 4", "(25 + 5) × 4", "25 × 4 + 5 × 4"], answer: 0,
            hint: "4 份套餐是 25 × 4，4 瓶果汁是 5 × 4，合起来呢？", explain: "25 + 5 × 4 = 45，只买了 1 份套餐和 4 瓶果汁！正确的是 (25 + 5) × 4 = 120 或 25 × 4 + 5 × 4 = 120（还记得分配律吗）。" },
          { type: "choice", level: "温故", q: "还记得吗：只有加减（或只有乘除）的算式，要按什么顺序算？", options: ["从左往右依次算", "从右往左依次算", "先算大数再算小数"], answer: 0,
            hint: "二年级就学过：同级运算排排队", explain: "同级运算从左往右依次算。今天的新规则是：乘除比加减「级别高」，括号比谁都高！" },
          { type: "open", level: "开放", q: "用 2、5、3 三个数（可以用括号），编两道得数不同的算式，算出得数并写下来。",
            reference: "比如：2 × (5 + 3) = 16；(2 + 5) × 3 = 21；2 + 5 × 3 = 17。位置或括号一变，得数就变——你编出了几种？" }
        ]
      },
      {
        type: "review",
        question: "(12 + 8) × 2 为什么不能写成 12 + 8 × 2？",
        ways: [
          { name: "积木阵列", text: "(12 + 8) × 2 是 2 行 20 列共 40 块；12 + 8 × 2 是 12 块加 16 块共 28 块——块数根本不一样！" },
          { name: "购物情境", text: "2 套文具是 (12 + 8) × 2 = 40 元；12 + 8 × 2 只买了 1 盒彩笔加 2 本笔记本，28 元，少了一盒彩笔钱！" },
          { name: "运算顺序", text: "有括号先算括号里的；没有括号先乘除后加减。想改变顺序，就请括号帮忙。" }
        ],
        ask: "给爸爸妈妈讲讲括号的本领，再考考他们：付 100 元买 2 套文具，综合算式怎么列？应该找回多少元？"
      },
      {
        type: "beauty",
        headline: "没有括号的年代：算筹怎么排队？",
        paragraphs: [
          "两千多年前，中国人用一根根小竹棍——算筹——来计算。正数摆红筹，负数摆黑筹，数字全靠小棍摆出来。",
          "算筹没有括号，谁先算、谁后算，要靠摆放的位置和大家约定的口诀。顺序一乱，满盘皆错。",
          "后来，数学家发明了括号：( ) 和［ ］像小旗子一样插进算式，大声宣布「先算我！」去博物馆看看古老的算筹，感受符号的力量。"
        ],
        museum: "his-suanchou"
      }
    ]
  },

  /* ================= 单元 11：运算定律（一） ================= */
  {
    id: "g4u11",
    title: "运算定律（一）",
    subtitle: "交换与结合：换一换，算得更快",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "积木城墙与速算比赛",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
          <circle cx="350" cy="36" r="18" fill="#ffd166"/>
          <rect x="52" y="84" width="110" height="88" fill="#4d96ff" opacity=".75" stroke="#1c4b8f" stroke-width="3"/>
          <g stroke="#eaf4ff" stroke-width="2.5">
            <line x1="74" y1="84" x2="74" y2="172"/><line x1="96" y1="84" x2="96" y2="172"/><line x1="118" y1="84" x2="118" y2="172"/><line x1="140" y1="84" x2="140" y2="172"/>
            <line x1="52" y1="106" x2="162" y2="106"/><line x1="52" y1="128" x2="162" y2="128"/><line x1="52" y1="150" x2="162" y2="150"/>
          </g>
          <text x="107" y="76" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">4 行 5 列</text>
          <path d="M172 122 Q204 96 226 114" fill="none" stroke="#2f7df0" stroke-width="4" stroke-linecap="round"/>
          <path d="M226 114 L214 110 L220 124 Z" fill="#2f7df0"/>
          <rect x="238" y="68" width="88" height="110" fill="#4d96ff" opacity=".75" stroke="#1c4b8f" stroke-width="3"/>
          <g stroke="#eaf4ff" stroke-width="2.5">
            <line x1="260" y1="68" x2="260" y2="178"/><line x1="282" y1="68" x2="282" y2="178"/><line x1="304" y1="68" x2="304" y2="178"/>
            <line x1="238" y1="90" x2="326" y2="90"/><line x1="238" y1="112" x2="326" y2="112"/><line x1="238" y1="134" x2="326" y2="134"/><line x1="238" y1="156" x2="326" y2="156"/>
          </g>
          <text x="282" y="60" font-size="14" fill="#1c4b8f" font-weight="bold" text-anchor="middle">5 行 4 列</text>
          <rect x="92" y="192" width="216" height="34" rx="12" fill="#ffffff"/>
          <text x="200" y="215" font-size="16" fill="#1c4b8f" font-weight="bold" text-anchor="middle">25 × 7 × 4 = ?</text>
        </svg>`,
        paragraphs: [
          "海洋积木大赛开始啦！蓝蓝搭了一面城墙：4 行 5 列。妹妹绕着桌子游了半圈，大叫：「不对，明明是 5 行 4 列！」",
          "兄妹俩争得吐出一串泡泡。海龟爷爷慢悠悠地说：「别吵，你们都对——换个方向看，方块一块没多、一块没少。」",
          "爷爷又出了道速算题：25 × 7 × 4！蓝蓝埋头硬算，妹妹眼珠一转：「先算 25 × 4！」——700！秒答！她到底发现了什么秘密？"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "不添一块、不减一块，只按「行 ＋」「列 −」两个按钮，把 4 行 5 列的城墙转成 5 行 4 列——全程盯住总数：它变了吗？",
        config: { interactive: true, rows: 4, cols: 5, targetRows: 5, targetCols: 4 },
        successText: "转过来啦！4 × 5 = 20，5 × 4 = 20。一块没添、一块没少，只是换了个方向看——这就是乘法交换律！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "海豚妈妈赶早市，先买了 3 条鱼。", state: { rows: 1, cols: 3, showTotal: true } },
          { caption: "下午又买了 5 条：3 + 5 = 8 条。要是倒过来先数下午再数早上：5 + 3 = 8。交换加数，和不变——加法交换律！", state: { rows: 1, cols: 8, showTotal: true } },
          { caption: "再添 2 条：(3 + 5) + 2 = 10；先合后面：3 + (5 + 2) = 10。先加哪两个都行——加法结合律！", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "回到积木城墙：4 行 5 列，4 × 5 = 20 块。", state: { rows: 4, cols: 5, showTotal: true } },
          { caption: "转一转：5 行 4 列，5 × 4 = 20 块。交换乘数，积不变——乘法交换律！", state: { rows: 5, cols: 4, showTotal: true } },
          { caption: "三个数相乘也一样：25 × 7 × 4，让 25 和 4 先拉手：25 × 4 = 100，100 × 7 = 700！先乘哪两个都行——乘法结合律！", state: { rows: 5, cols: 4, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「换一换、抱一抱，结果不变」写成数学的语言：",
          "用字母 a、b、c 表示任何数，四条定律一句话全说清。"
        ],
        formula: "a + b = b + a　(a + b) + c = a + (b + c)　a × b = b × a　(a × b) × c = a × (b × c)",
        keypoints: [
          "交换律：两个数相加（乘），交换位置，和（积）不变",
          "结合律：三个数相加（乘），先把前两个或后两个结合，结果不变",
          "字母表示最省事：a、b、c 换成任何数都成立",
          "巧算秘诀：找能凑整的好朋友先拉手——25 × 7 × 4 = 25 × 4 × 7 = 700"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "25 × 7 × 4 怎样算最简便？", options: ["先算 25 × 4 = 100，再乘 7，得 700", "老老实实从左往右：25 × 7 = 175，再乘 4", "三个数相乘，没有巧办法"], answer: 0,
            hint: "25 和谁是好朋友？25 × 4 = ?", explain: "25 × 4 = 100，100 × 7 = 700，一步口算！从左往右硬算也对，但费劲多啦。" },
          { type: "fill", level: "基础", q: "68 + 72 + 28 = 68 + (72 + 28) = ＿＿", answer: "168",
            hint: "72 和 28 能凑成整百", explain: "72 + 28 = 100，68 + 100 = 168。加法结合律，凑整真好算！" },
          { type: "choice", level: "变式", q: "下面哪个算式用了乘法交换律？", options: ["4 × 5 = 5 × 4", "(2 + 3) + 4 = 2 + (3 + 4)", "25 × (40 + 4) = 25 × 40 + 25 × 4"], answer: 0,
            hint: "交换律管「换位置」，结合律管「换先后」，第三个是分配律", explain: "4 × 5 = 5 × 4 交换了两个乘数的位置；第二个是加法结合律；第三个是乘法分配律——别认错啦。" },
          { type: "choice", level: "变式", q: "为什么 25 × 7 × 4 可以先算 25 × 4？", options: ["交换律让 7 和 4 换位置，结合律让 25 和 4 先乘——积不会变", "因为 4 比 7 小，小数可以先算", "碰巧这道题可以，换了数就不行"], answer: 0,
            hint: "想想城墙转一转，方块一块不少……", explain: "25 × 7 × 4 = 25 × 4 × 7（交换律）= (25 × 4) × 7（结合律）= 700。定律保证：对任何数都成立！" },
          { type: "judge", level: "变式", q: "36 + 58 + 64 = 58 + (36 + 64) = 158，这样算又对又快。", answer: true,
            hint: "36 + 64 能凑成整百吗？", explain: "对！36 + 64 = 100，100 + 58 = 158。交换加数位置再结合，凑整巧算。" },
          { type: "fill", level: "挑战", q: "巧算：25 × 7 × 4 = ＿＿", answer: "700",
            hint: "先让 25 和 4 拉手", explain: "25 × 4 = 100，100 × 7 = 700。" },
          { type: "fill", level: "挑战", q: "巧算：125 × 13 × 8 = ＿＿", answer: "13000",
            hint: "125 的好朋友是 8：125 × 8 = ?", explain: "125 × 8 = 1000，1000 × 13 = 13000。" },
          { type: "choice", level: "温故", q: "还记得吗：乘法分配律 (a + b) × c 等于什么？", options: ["a × c + b × c", "a × b + c", "(a × b) + (a × c)"], answer: 0,
            hint: "第 3 课学的：括号里每个数都要和 c 乘一乘", explain: "(a + b) × c = a × c + b × c。分配律管「拆开与合拢」，交换结合律管「位置与先后」——它们是运算定律一家人！" },
          { type: "open", level: "开放", q: "自己编一道能「凑整」的巧算题（加法或乘法都行），写出巧算过程，再说说用了哪条定律。",
            reference: "比如：25 × 13 × 4 = 25 × 4 × 13 = 1300（交换律、结合律）；或 37 + 45 + 55 = 37 + (45 + 55) = 137（结合律）。秘诀：先找能凑成整十、整百的一对好朋友！" }
        ]
      },
      {
        type: "review",
        question: "25 × 7 × 4 怎样算最快？为什么可以这样算？",
        ways: [
          { name: "硬算", text: "从左往右：25 × 7 = 175，175 × 4 = 700。答案对，但要打草稿。" },
          { name: "巧算", text: "交换位置让 25 和 4 靠在一起：25 × 4 × 7 = 100 × 7 = 700。靠的是乘法交换律和结合律。" },
          { name: "找朋友", text: "记住几对凑整好朋友：25 × 4 = 100，125 × 8 = 1000。算式里见到它们，就先拉手！" }
        ],
        ask: "给爸爸妈妈出一道巧算题：125 × 13 × 8。让他们说说用了哪条定律，你来当小老师评一评。"
      },
      {
        type: "beauty",
        headline: "怎么变都不变：数字的纪律",
        paragraphs: [
          "交换律和结合律告诉我们：位置换来换去、括号移来移去，结果始终不变——数学最爱这种「变化中的不变」。",
          "把 1 到 9 填进九宫格，让每行、每列、每条对角线的和全都相等——这就是流传几千年的「幻方」。传说大禹治水时，神龟背上驮的洛书，就是一个幻方。",
          "去实验室挑战幻方吧！排好数字的方阵，和排好顺序的算式一样，藏着秩序之美。"
        ],
        lab: "magic-square"
      }
    ]
  }
);
