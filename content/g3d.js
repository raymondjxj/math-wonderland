/* ============================================================
   数学奇境 · 三年级扩展单元 v2（第 9~11 课）
   单元：9 测量（毫米、分米、千米、吨） / 10 除数是一位数的除法 / 11 长方形和正方形的周长
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[3] = MW.content[3] || { grade: 3, name: "三年级 · 青绿星球", units: [] };
G.units.push(

  /* ================= 单元 9：测量：毫米、分米、千米、吨 ================= */
  {
    id: "g3u9",
    title: "测量：毫米、分米、千米、吨",
    subtitle: "从一颗小螺丝到一条星际铁路",
    tag: "数感",
    minutes: 25,
    scenes: [
      {
        type: "story",
        title: "两张难办的订单",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="46" cy="40" r="20" fill="#ffd166"/>
          <g transform="rotate(-6 95 110)">
            <rect x="30" y="96" width="130" height="26" rx="6" fill="#ffffff" stroke="#159e92" stroke-width="3"/>
            <g stroke="#2ec4b6" stroke-width="2">
              <line x1="42" y1="96" x2="42" y2="106"/><line x1="54" y1="96" x2="54" y2="110"/><line x1="66" y1="96" x2="66" y2="106"/><line x1="78" y1="96" x2="78" y2="110"/><line x1="90" y1="96" x2="90" y2="106"/><line x1="102" y1="96" x2="102" y2="110"/><line x1="114" y1="96" x2="114" y2="106"/><line x1="126" y1="96" x2="126" y2="110"/><line x1="138" y1="96" x2="138" y2="106"/><line x1="150" y1="96" x2="150" y2="110"/>
            </g>
          </g>
          <g>
            <rect x="76" y="148" width="10" height="30" rx="4" fill="#8fa3b8"/>
            <circle cx="81" cy="146" r="8" fill="#8fa3b8"/>
            <line x1="74" y1="146" x2="88" y2="146" stroke="#e3faf7" stroke-width="3"/>
          </g>
          <text x="36" y="206" font-size="13" fill="#0f766e" font-weight="bold">连 1 厘米都不到？</text>
          <g stroke="#159e92" stroke-width="4" stroke-linecap="round">
            <line x1="196" y1="240" x2="252" y2="96"/>
            <line x1="258" y1="240" x2="272" y2="96"/>
          </g>
          <g stroke="#2ec4b6" stroke-width="3" stroke-linecap="round">
            <line x1="208" y1="206" x2="250" y2="206"/>
            <line x1="216" y1="176" x2="252" y2="176"/>
            <line x1="224" y1="148" x2="256" y2="148"/>
            <line x1="232" y1="124" x2="260" y2="124"/>
          </g>
          <text x="196" y="86" font-size="13" fill="#0f766e" font-weight="bold">铁路 800 千米？</text>
          <rect x="300" y="140" width="72" height="40" rx="8" fill="#2ec4b6"/>
          <rect x="300" y="122" width="40" height="22" rx="6" fill="#159e92"/>
          <circle cx="318" cy="186" r="10" fill="#0f766e"/>
          <circle cx="354" cy="186" r="10" fill="#0f766e"/>
          <circle cx="318" cy="186" r="4" fill="#e3faf7"/>
          <circle cx="354" cy="186" r="4" fill="#e3faf7"/>
          <text x="336" y="166" font-size="13" fill="#ffffff" font-weight="bold" text-anchor="middle">4 吨？</text>
          <text x="200" y="230" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">📏 小小的毫米，远远的千米，重重的吨！</text>
        </svg>`,
        paragraphs: [
          "青绿星球工坊一下子接到两张难办的订单。第一张：给手表里的齿轮换一颗小螺丝——它比指甲盖小得多，用厘米量，连 1 厘米都不到，怎么写？",
          "第二张：修一条从青绿城到云朵港的铁路——用米来量，要数到几十万米，数得头晕眼花！货运站还打来电话：「一车厢苹果到货，用千克称，秤都要累坏啦！」",
          "厘米和米不够用了！<b>在「更小」和「更大」的两头，还藏着几个新单位等着我们去认识……</b>"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先来造一把毫米尺：把 1 厘米平均分成 10 小格，每 1 小格就是 1 毫米。点亮 7 小格，量出那颗小螺丝的长度——7 毫米！",
        config: { interactive: true, shape: "bar", parts: 10, target: 7 },
        successText: "量好了！7 小格就是 7 毫米。原来 1 厘米里藏着 10 个 1 毫米——再小的东西也能量得准准的。"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "这是一把毫米尺：1 厘米被平均分成了 10 小格，每 1 小格是 1 毫米。", state: { shape: "bar", parts: 10, shaded: 0, showLabel: false } },
          { caption: "点亮 1 小格：这就是 1 毫米。一枚 1 分硬币的厚度、一张银行卡的厚度，大约都是 1 毫米。", state: { shape: "bar", parts: 10, shaded: 1, showLabel: false } },
          { caption: "量一量小螺丝：正好 7 小格，7 毫米。毫米写作 mm，专管量很小很短的东西。", state: { shape: "bar", parts: 10, shaded: 7, showLabel: false } },
          { caption: "10 小格排满：10 毫米 = 1 厘米！毫米和厘米是邻居。", state: { shape: "bar", parts: 10, shaded: 10, showLabel: false } },
          { caption: "10 把这样的 1 厘米尺子接起来：10 厘米 = 1 分米。你的一拃，大约就是 1 分米长。", state: { shape: "bar", parts: 10, shaded: 10, showLabel: false } },
          { caption: "那 1000 个 1 米接起来呢？操场跑道一圈 400 米，跑两圈半正好是 1000 米 = 1 千米！毫米、厘米、分米、米、千米——长度家族排好队啦。", state: { shape: "bar", parts: 10, shaded: 10, showLabel: false } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把两把新尺子、一个新秤砣，写成数学的语言：",
          "量特别小用毫米，量特别远用千米，称特别重用吨——单位选对了，数才不会吓人。"
        ],
        formula: "1 厘米 = 10 毫米　1 分米 = 10 厘米　1 千米 = 1000 米　1 吨 = 1000 千克",
        keypoints: [
          "毫米 mm、厘米 cm、分米 dm、米 m、千米 km：长度家族从小到大排排队",
          "1 分硬币、银行卡的厚度约 1 毫米；一拃约 1 分米——身上带着小尺子",
          "很远的路程用千米：操场两圈半大约 1 千米",
          "吨 t 用来称很重的东西：大象、货车、一车厢苹果；40 个体重 25 千克的同学合起来约 1 吨"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "量一颗小螺丝的长度，用哪个单位最合适？", options: ["毫米", "千米", "吨"], answer: 0,
            hint: "小螺丝连 1 厘米都不到", explain: "量很小很短的东西用毫米。千米管很远的路，吨是称重的单位。" },
          { type: "fill", level: "基础", q: "1 厘米 = □ 毫米", answer: "10",
            hint: "想想刚才的毫米尺：1 厘米被分成了几小格？", explain: "1 厘米平均分成 10 小格，每小格 1 毫米，所以 1 厘米 = 10 毫米。" },
          { type: "choice", level: "基础", q: "1 千米 = ？米", options: ["10 米", "100 米", "1000 米"], answer: 2,
            hint: "操场一圈 400 米，两圈半正好是 1 千米", explain: "1 千米 = 1000 米。「千」就藏在名字里呢！" },
          { type: "choice", level: "变式", q: "为什么量很远的路要用千米，而不用毫米？", options: ["千米是大单位，写起来简单；用毫米要数到好大好大的数，容易出错", "因为毫米的尺子太短，会断掉", "只是大家习惯了，没有道理"], answer: 0,
            hint: "想想用毫米写「青绿城到云朵港」会有多少个零", explain: "单位是为人服务的：很小的东西用小单位才量得准，很远的路用大单位才写得下。选单位就是看它合不合适。" },
          { type: "choice", level: "变式", q: "下面哪个最接近 1 吨？", options: ["40 个体重 25 千克的同学合起来", "一只小花猫", "一袋 500 克的盐"], answer: 0,
            hint: "1 吨 = 1000 千克，算算 25 × 40 = ？", explain: "25 × 40 = 1000 千克 = 1 吨。小花猫大约几千克，一袋盐才 500 克，都差得远啦。" },
          { type: "fill", level: "挑战", q: "货车运苹果，每箱 100 千克，□ 箱正好是 1 吨。", answer: "10",
            hint: "1 吨 = 1000 千克，几个 100 是 1000？", explain: "10 个 100 是 1000，100 × 10 = 1000 千克 = 1 吨，所以要 10 箱。" },
          { type: "choice", level: "挑战", q: "给句子选单位：一头大象重 4（　），青绿城到云朵港的铁路长 800（　）。", options: ["吨、千米", "千克、米", "吨、毫米"], answer: 0,
            hint: "大象很重很重，铁路很远很远", explain: "称很重的用吨，量很远的用千米。4 千克才一只小猫重，800 米连两座城的一半都不到。" },
          { type: "fill", level: "温故", q: "还记得吗：1 米 = □ 厘米（二年级学的）", answer: "100",
            hint: "100 个 1 厘米接起来是 1 米", explain: "1 米 = 100 厘米。长度家族：10 毫米是 1 厘米，100 厘米是 1 米，1000 米是 1 千米。" },
          { type: "open", level: "开放", q: "找一找：你身边有什么东西大约 1 毫米厚？什么东西大约 1 分米长？各写一个，再说说你是怎么估的。",
            reference: "一种参考想法：银行卡的厚度大约 1 毫米，把 10 张叠起来和 1 厘米的格子比一比就知道；我的一拃大约 1 分米，拿它和 10 厘米的尺子比一比。估一估，再量一量，越估越准！" }
        ]
      },
      {
        type: "review",
        question: "1 千米为什么是 1000 米？1 吨为什么是 1000 千克？",
        ways: [
          { name: "跑道法", text: "操场一圈 400 米：两圈是 800 米，再加半圈 200 米，400 + 400 + 200 = 1000 米，正好 1 千米。" },
          { name: "接力法", text: "10 个 100 米接起来是 1000 米；10 个 100 千克接起来是 1000 千克，也就是 1 吨。" },
          { name: "体重法", text: "每个同学约 25 千克，25 × 40 = 1000 千克——全班 40 人抱成团，大约就是 1 吨。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么要发明毫米和千米这两个单位？（提示：一个管特别小的，一个管特别远的）"
      },
      {
        type: "beauty",
        headline: "差之毫米，谬以千米",
        paragraphs: [
          "造火箭、修大桥，零件常常要精确到毫米——这里差一点，飞出几百千米，就偏得没影了。小小的毫米，管着大大的工程。",
          "我国数学家华罗庚爷爷，年轻时在杂货铺里边看店边自学数学。后来他跑遍全国的工厂，行程成千上万千米，教大家精心测量、巧妙安排——用「优选法」省下的材料，要用吨来计算！",
          "从毫米到千米，从千克到吨——去博物馆认识这位把数学带进工厂的大师吧！"
        ],
        museum: "ppl-hua"
      }
    ]
  },

  /* ================= 单元 10：除数是一位数的除法 ================= */
  {
    id: "g3u10",
    title: "除数是一位数的除法",
    subtitle: "分树苗分出的一堂竖式课",
    tag: "运算",
    minutes: 25,
    scenes: [
      {
        type: "story",
        title: "植树节的分苗大会",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="48" cy="40" r="20" fill="#ffd166"/>
          <path d="M0 206 Q100 196 200 206 T400 206 V240 H0 Z" fill="#b9ece8"/>
          <g stroke="#2ec4b6" stroke-width="4" stroke-linecap="round" fill="#2ec4b6">
            <line x1="60" y1="120" x2="52" y2="88"/><line x1="60" y1="120" x2="60" y2="84"/><line x1="60" y1="120" x2="68" y2="88"/>
            <circle cx="52" cy="86" r="6" stroke="none"/><circle cx="60" cy="82" r="6" stroke="none"/><circle cx="68" cy="86" r="6" stroke="none"/>
            <line x1="112" y1="120" x2="104" y2="88"/><line x1="112" y1="120" x2="112" y2="84"/><line x1="112" y1="120" x2="120" y2="88"/>
            <circle cx="104" cy="86" r="6" stroke="none"/><circle cx="112" cy="82" r="6" stroke="none"/><circle cx="120" cy="86" r="6" stroke="none"/>
            <line x1="164" y1="120" x2="156" y2="88"/><line x1="164" y1="120" x2="164" y2="84"/><line x1="164" y1="120" x2="172" y2="88"/>
            <circle cx="156" cy="86" r="6" stroke="none"/><circle cx="164" cy="82" r="6" stroke="none"/><circle cx="172" cy="86" r="6" stroke="none"/>
            <line x1="60" y1="186" x2="52" y2="154"/><line x1="60" y1="186" x2="60" y2="150"/><line x1="60" y1="186" x2="68" y2="154"/>
            <circle cx="52" cy="152" r="6" stroke="none"/><circle cx="60" cy="148" r="6" stroke="none"/><circle cx="68" cy="152" r="6" stroke="none"/>
            <line x1="112" y1="186" x2="104" y2="154"/><line x1="112" y1="186" x2="112" y2="150"/><line x1="112" y1="186" x2="120" y2="154"/>
            <circle cx="104" cy="152" r="6" stroke="none"/><circle cx="112" cy="148" r="6" stroke="none"/><circle cx="120" cy="152" r="6" stroke="none"/>
            <line x1="164" y1="186" x2="156" y2="154"/><line x1="164" y1="186" x2="164" y2="150"/><line x1="164" y1="186" x2="172" y2="154"/>
            <circle cx="156" cy="152" r="6" stroke="none"/><circle cx="164" cy="148" r="6" stroke="none"/><circle cx="172" cy="152" r="6" stroke="none"/>
          </g>
          <g fill="#ffd166" stroke="none">
            <rect x="50" y="112" width="20" height="8" rx="3"/><rect x="102" y="112" width="20" height="8" rx="3"/><rect x="154" y="112" width="20" height="8" rx="3"/>
            <rect x="50" y="178" width="20" height="8" rx="3"/><rect x="102" y="178" width="20" height="8" rx="3"/><rect x="154" y="178" width="20" height="8" rx="3"/>
          </g>
          <text x="112" y="52" font-size="13" fill="#0f766e" font-weight="bold" text-anchor="middle">60 棵 = 6 捆</text>
          <g>
            <path d="M268 96 L292 74 L316 96 Z" fill="#159e92"/>
            <rect x="274" y="96" width="36" height="30" rx="4" fill="#2ec4b6"/>
            <path d="M268 162 L292 140 L316 162 Z" fill="#159e92"/>
            <rect x="274" y="162" width="36" height="30" rx="4" fill="#2ec4b6"/>
            <path d="M338 130 L362 108 L386 130 Z" fill="#159e92"/>
            <rect x="344" y="130" width="36" height="30" rx="4" fill="#2ec4b6"/>
          </g>
          <g font-size="15" font-weight="bold" fill="#0f766e" text-anchor="middle">
            <text x="292" y="116">？</text><text x="292" y="182">？</text><text x="362" y="150">？</text>
          </g>
          <text x="200" y="230" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">🌱 60 棵 ÷ 3 = ？　42 棵 ÷ 2 = ？</text>
        </svg>`,
        paragraphs: [
          "植树节到啦！青绿星球运来 60 棵树苗，要平均分给 3 个小镇。小刺眼疾手快：「每镇 20 棵！」——他怎么算得这么快？",
          "原来 60 棵树苗 10 棵一捆，正好 6 捆。分捆就行：6 捆 ÷ 3 = 2 捆，2 捆就是 20 棵！",
          "可下午又运来 42 棵小苗，要平均分给 2 个班。4 捆加 2 根，零头怎么分才公平？<b>得请出一件新工具——除法竖式！</b>"
        ]
      },
      {
        type: "play",
        widget: "vertical",
        prompt: "先当一回竖式小老师：点击「下一步」，看 84 ÷ 4 的竖式一步一步走出来。盯住每一步——先分什么、再分什么？",
        config: { interactive: true, op: "div", a: 84, b: 4 },
        successText: "走完啦！84 ÷ 4 = 21：先分 8 个十，每份 2 个十；再把 4 个一落下来分，每份 1 个一。竖式就是「分一分、乘一乘、减一减」。"
      },
      {
        type: "anim",
        widget: "vertical",
        steps: [
          { caption: "69 棵树苗平均分给 3 个班：竖式摆好——69 住进小房子，3 在门外等着分。", state: { op: "div", a: 69, b: 3, step: 0 } },
          { caption: "先分十位：6 个十 ÷ 3 = 2 个十，商 2 写在十位上。3 × 2 = 6，减一减，十位正好分完。", state: { op: "div", a: 69, b: 3, step: 1 } },
          { caption: "再把个位的 9 落下来：9 ÷ 3 = 3，商 3 写在个位上。3 × 3 = 9，又正好分完！", state: { op: "div", a: 69, b: 3, step: 2 } },
          { caption: "余 0，正好除尽！69 ÷ 3 = 23。验算一下：23 × 3 = 69，一棵不多、一棵不少。", state: { op: "div", a: 69, b: 3, step: 3 } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把分树苗的本领，写成数学的语言：",
          "口算有口算的巧：60 是 6 个十，6 个十 ÷ 3 = 2 个十，就是 20。笔算有笔算的序：从高位分起，分一位、商一位、乘一乘、减一减。"
        ],
        formula: "60 ÷ 3 = 20　　42 ÷ 2 = 21　　69 ÷ 3 = 23",
        keypoints: [
          "口算秘诀：把整十数看成「几个十」——60 是 6 个十，6 ÷ 3 = 2，答案就是 2 个十 = 20",
          "竖式四步曲：一除（从最高位除起）、二乘、三减、四落（把下一位落下来接着分）",
          "除法竖式其实就是「分东西」：先分整十的，再分零头",
          "验算靠乘法：商 × 除数 = 被除数，23 × 3 = 69，说明没分错"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "口算：60 ÷ 3 = □", answer: "20",
            hint: "60 是 6 个十，6 ÷ 3 = 2，所以是 2 个十", explain: "6 个十平均分成 3 份，每份 2 个十，就是 20。" },
          { type: "choice", level: "基础", q: "69 ÷ 3 = ？", options: ["21", "23", "32", "13"], answer: 1,
            hint: "先分 6 个十，每份 2 个十；再分 9 个一，每份 3 个一", explain: "60 ÷ 3 = 20，9 ÷ 3 = 3，20 + 3 = 23。验算：23 × 3 = 69 ✓" },
          { type: "choice", level: "基础", q: "42 ÷ 2 = ？", options: ["21", "12", "22", "20"], answer: 0,
            hint: "4 个十 ÷ 2 = 2 个十，2 个一 ÷ 2 = 1 个一", explain: "40 ÷ 2 = 20，2 ÷ 2 = 1，合起来是 21。验算：21 × 2 = 42 ✓" },
          { type: "choice", level: "变式", q: "口算 60 ÷ 3 时，为什么只要想 6 ÷ 3 = 2 就行了？", options: ["60 是 6 个十，6 个十平均分成 3 份，每份 2 个十，就是 20", "因为末尾的 0 不用算，划掉就行", "口诀表上就是这样印的"], answer: 0,
            hint: "60 到底是「6 个什么」？", explain: "关键是「6 个十」这个单位：分的是十，得的也是十。「划掉 0」只是巧合的偷懒说法——换成 600 ÷ 3，想 6 个百 ÷ 3 = 2 个百 = 200，道理是一样的。" },
          { type: "choice", level: "变式", q: "用竖式算 84 ÷ 4，第一步先算什么？", options: ["8 个十 ÷ 4", "4 个一 ÷ 4", "84 一口气 ÷ 4"], answer: 0,
            hint: "竖式要从最高位开始分", explain: "先分整十的：8 个十 ÷ 4 = 2 个十；再把 4 个一落下来：4 ÷ 4 = 1。所以 84 ÷ 4 = 21。" },
          { type: "judge", level: "变式", q: "小刺算 96 ÷ 3 = 31，还验算了：31 × 3 = 93。他算对了吗？", answer: false,
            hint: "验算结果应该等于被除数 96 才对", explain: "31 × 3 = 93 ≠ 96，没算对！正确的是 96 ÷ 3 = 32：90 ÷ 3 = 30，6 ÷ 3 = 2。验算 32 × 3 = 96 ✓" },
          { type: "fill", level: "挑战", q: "植树节运来 96 棵树苗，平均分给 3 个班，每班分 □ 棵。", answer: "32",
            hint: "把 96 分成 90 和 6，分别除以 3", explain: "90 ÷ 3 = 30，6 ÷ 3 = 2，30 + 2 = 32。每班 32 棵，验算 32 × 3 = 96 ✓" },
          { type: "choice", level: "温故", q: "还记得吗：3 × 23 = ？（上学期学的乘法）", options: ["63", "69", "96"], answer: 1,
            hint: "20 × 3 = 60，3 × 3 = 9，合起来呢？", explain: "3 × 23 = 69。乘法正是除法验算的好帮手——69 ÷ 3 = 23 就靠它检查！" },
          { type: "open", level: "开放", q: "出一道用「除数是一位数的除法」解决的生活题，再算出答案。（可以想：把什么平均分给几个人？）",
            reference: "一种参考想法：把 48 块饼干平均分给 4 个好朋友，每人几块？48 ÷ 4 = 12 块——40 ÷ 4 = 10，8 ÷ 4 = 2，合起来 12。验算 12 × 4 = 48 ✓" }
        ]
      },
      {
        type: "review",
        question: "69 ÷ 3 为什么等于 23？",
        ways: [
          { name: "分小棒", text: "6 捆小棒（每捆 10 根）加 9 根：6 捆 ÷ 3 = 2 捆（20 根），9 根 ÷ 3 = 3 根，20 + 3 = 23。" },
          { name: "竖式", text: "一除二乘三减四落：先分十位 6 ÷ 3 = 2，再分个位 9 ÷ 3 = 3，余 0，商是 23。" },
          { name: "想乘法", text: "除法是乘法的逆运算：3 × 23 = 69，所以 69 ÷ 3 = 23。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：除法竖式为什么要从最高的十位开始分？（提示：分东西先分整捆的，再分零头，又快又不容易乱）"
      },
      {
        type: "beauty",
        headline: "算筹：小棍子摆出的大除法",
        paragraphs: [
          "两千多年前的中国，没有纸和笔，人们用一根根小竹棍——算筹——摆出数字，就能做加减乘除。",
          "古人把除法叫「归除」，还编了朗朗上口的口诀。用算筹做除法，同样是从高位分起、一步一步试——和你今天写的竖式一脉相承！",
          "去博物馆看看算筹的本领，想一想：古人没有计算器，怎么把账算得又准又快？"
        ],
        museum: "his-suanchou"
      }
    ]
  },

  /* ================= 单元 11：长方形和正方形的周长 ================= */
  {
    id: "g3u11",
    title: "长方形和正方形的周长",
    subtitle: "围着花园走一圈",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "小蚂蚁的篱笆订单",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="48" cy="40" r="20" fill="#ffd166"/>
          <g stroke="#159e92" stroke-width="2">
            <rect x="110" y="70" width="160" height="120" fill="#b9ece8"/>
            <line x1="150" y1="70" x2="150" y2="190"/><line x1="190" y1="70" x2="190" y2="190"/><line x1="230" y1="70" x2="230" y2="190"/>
            <line x1="110" y1="110" x2="270" y2="110"/><line x1="110" y1="150" x2="270" y2="150"/>
          </g>
          <rect x="96" y="56" width="188" height="148" rx="10" fill="none" stroke="#2ec4b6" stroke-width="5" stroke-dasharray="12 8"/>
          <g fill="#0f766e">
            <circle cx="88" cy="48" r="6"/><circle cx="98" cy="46" r="5"/><circle cx="107" cy="45" r="4"/>
          </g>
          <path d="M126 46 L146 46" stroke="#159e92" stroke-width="3" stroke-linecap="round"/>
          <path d="M146 46 L138 41 L138 51 Z" fill="#159e92"/>
          <text x="190" y="136" font-size="14" fill="#0f766e" font-weight="bold" text-anchor="middle">花园 4 格 × 3 格</text>
          <text x="200" y="228" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">🐜 围一圈篱笆，要多长？</text>
        </svg>`,
        paragraphs: [
          "小蚂蚁当当接到一单生意：给苗苗的长方形花园围一圈篱笆，防止调皮的蚱蜢跳进来踩花。",
          "当当围着花园爬了一圈，边爬边数：一条边、两条边……可是，篱笆到底要买多长呢？",
          "注意喽：这次不问花园的<b>面</b>有多大——那是面积，前面已经学过了。今天只问<b>边线一圈</b>有多长。这「一圈」有个新名字：<b>周长</b>！"
        ]
      },
      {
        type: "play",
        widget: "grid",
        prompt: "先复习老本领：把这块 4 列 × 3 行的花园铺满，数一数一共多少个格子——这是花园的面积。铺完想一想：围篱笆只看最外面的一圈哦！",
        config: { interactive: true, rows: 3, cols: 4 },
        successText: "铺满啦！12 个格子是花园的「面积」。可围篱笆不管里面有多少格，只管最外面一圈的边线——接下来，我们去量量这「一圈」！"
      },
      {
        type: "anim",
        widget: "grid",
        steps: [
          { caption: "花园长 4 格、宽 3 格。面积问「面有多大」，周长问「边线一圈有多长」——今天只研究边线！", state: { rows: 3, cols: 4, filled: 0, showCount: true } },
          { caption: "小蚂蚁从上边出发数小边：每数一条，就点亮一格帮忙计数——上边有 4 条小边。", state: { rows: 3, cols: 4, filled: 4, showCount: true } },
          { caption: "把爬过的边「拉直」排成一队，看得更清楚：上边 4 条先站好。", state: { rows: 1, cols: 14, filled: 4, showCount: true } },
          { caption: "右边 3 条接上来：4 + 3 = 7。", state: { rows: 1, cols: 14, filled: 7, showCount: true } },
          { caption: "下边和上边一样长，又是 4 条：7 + 4 = 11。", state: { rows: 1, cols: 14, filled: 11, showCount: true } },
          { caption: "最后左边 3 条：11 + 3 = 14！一圈拉直正好 14 条小边——周长就是 14。发现了吗：4 + 3 + 4 + 3，正好是（4 + 3）× 2！", state: { rows: 1, cols: 14, filled: 14, showCount: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「围一圈」的发现，写成数学的公式：",
          "长方形有两条长、两条宽：长 + 宽正好是半圈，乘 2 就是一整圈。正方形四条边一样长，更简单！"
        ],
        formula: "长方形的周长 = （长 + 宽）× 2　正方形的周长 = 边长 × 4",
        keypoints: [
          "周长是「边线一圈」的长度，用长度单位：厘米、米",
          "面积是「面的大小」，用面积单位：平方厘米——周长和面积，别搞混！",
          "也可以一条一条加：4 + 3 + 4 + 3 = 14，和（4 + 3）× 2 一模一样",
          "边长 5 厘米的正方形手帕，花边要缝 5 × 4 = 20 厘米"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "长方形长 6 厘米、宽 2 厘米，周长是多少？", options: ["8 厘米", "16 厘米", "12 厘米", "24 厘米"], answer: 1,
            hint: "周长 =（长 + 宽）× 2", explain: "（6 + 2）× 2 = 16 厘米。注意：6 × 2 = 12 那是面积的思路，单位也不是厘米哦。" },
          { type: "fill", level: "基础", q: "边长 5 厘米的正方形，周长是 □ 厘米。", answer: "20",
            hint: "正方形 4 条边一样长：5 × 4 = ？", explain: "5 × 4 = 20，周长是 20 厘米。" },
          { type: "choice", level: "变式", q: "为什么长方形的周长可以用（长 + 宽）× 2 来算？", options: ["长方形有两条长和两条宽，长 + 宽正好是半圈，乘 2 就是一整圈", "因为课本上就是这样印的", "因为长比宽长，所以要乘 2 补偿"], answer: 0,
            hint: "想想小蚂蚁拉直的那条边线队：4 + 3 + 4 + 3", explain: "4 + 3 + 4 + 3 =（4 + 3）× 2：对边相等，长 + 宽出现两次，所以乘 2。公式是从数边线里长出来的。" },
          { type: "choice", level: "变式", q: "给照片镶一圈木框、给桌面铺一块桌布，分别要算什么？", options: ["都算周长", "木框算周长、桌布算面积", "都算面积", "木框算面积、桌布算周长"], answer: 1,
            hint: "木框围着边线转，桌布盖住整个面", explain: "木框管「一圈的边线」——周长；桌布管「面有多大」——面积。周长是线，面积是面！" },
          { type: "judge", level: "变式", q: "小蚂蚁沿边长 3 厘米的正方形爬一圈，一共爬了 9 厘米。", answer: false,
            hint: "爬一圈要走 4 条边：3 × 4 = ？", explain: "周长是 3 × 4 = 12 厘米，不是 9。9 是 3 × 3，那是面积（9 平方厘米）——边线和面别搞混！" },
          { type: "choice", level: "挑战", q: "一根 20 厘米长的铁丝，正好围成一个长 6 厘米的长方形，宽是几厘米？", options: ["4 厘米", "8 厘米", "14 厘米"], answer: 0,
            hint: "半圈是 20 ÷ 2 = 10 厘米，长 + 宽 = 10", explain: "长 + 宽 = 20 ÷ 2 = 10 厘米，宽 = 10 − 6 = 4 厘米。验算：（6 + 4）× 2 = 20 ✓" },
          { type: "choice", level: "温故", q: "还记得吗：长 5 厘米、宽 2 厘米的长方形，面积是多少？（第 3 课学的）", options: ["10 平方厘米", "14 厘米", "10 厘米"], answer: 0,
            hint: "面积 = 长 × 宽，单位是平方厘米", explain: "面积 = 5 × 2 = 10 平方厘米。（5 + 2）× 2 = 14 厘米算的是周长——面积管面，周长管线，单位都不一样！" },
          { type: "open", level: "开放", q: "一根 16 厘米长的绳子，能围成哪些长方形？写出一种长和宽，再说说你是怎么想到的。",
            reference: "一种参考想法：长和宽加起来必须是半圈 16 ÷ 2 = 8 厘米。长 7 宽 1、长 6 宽 2、长 5 宽 3 都行；长 4 宽 4 就围成了正方形——正方形是特殊的长方形！" }
        ]
      },
      {
        type: "review",
        question: "长 4、宽 3 的长方形，周长为什么是 14？",
        ways: [
          { name: "逐边加", text: "四条边一条一条加：4 + 3 + 4 + 3 = 14 条小边。" },
          { name: "半圈乘 2", text: "长 + 宽 = 7 是半圈，对边相等，整圈就是 7 × 2 = 14。" },
          { name: "拉直法", text: "把一圈边线从一个角剪开、拉直成一条线，量一量：正好 14 条小边那么长。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：周长和面积有什么不一样？（可以指指桌子的边线，再摸摸桌面：一个是一圈的线，一个是整个面）"
      },
      {
        type: "beauty",
        headline: "密铺的花边：面与线的合作",
        paragraphs: [
          "正方形、正三角形、正六边形都能严丝合缝地铺满地面——这就是密铺。铺多少块砖，看的是面积；给地面镶一圈花边，看的就是周长啦！",
          "细心的你会发现：同样都是 12 块方砖，拼成胖胖的长方形，花边短；拼成细长的长方形，花边长。面没变，一圈的线却变了！",
          "去实验室亲手铺一铺密铺图案，数一数你作品的周长吧！"
        ],
        lab: "tessellation"
      }
    ]
  }
);
