/* ============================================================
   数学奇境 · 二年级扩展单元 v2（g2b：push 模式）
   单元：4 100以内的加法和减法 / 5 表内除法 / 6 混合运算
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[2] = MW.content[2] || { grade: 2, name: "二年级 · 橙光星球", units: [] };
G.units.push(

  /* ================= 单元 4：100 以内的加法和减法 ================= */
  {
    id: "g2u4",
    title: "100 以内的加法和减法",
    subtitle: "竖式：满十进一，退一当十",
    tag: "运算",
    minutes: 25,
    scenes: [
      {
        type: "story",
        title: "快递站的包裹山",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="340" cy="40" r="24" fill="#ffc233"/>
          <text x="40" y="52" font-size="24" fill="#b25e14" font-weight="bold">36 + 27 = ?</text>
          <rect x="52" y="140" width="52" height="52" rx="8" fill="#ff8a3d"/>
          <rect x="75" y="140" width="6" height="52" fill="#d9680a"/>
          <rect x="112" y="140" width="52" height="52" rx="8" fill="#ffc233"/>
          <rect x="135" y="140" width="6" height="52" fill="#e0a92c"/>
          <rect x="82" y="90" width="52" height="52" rx="8" fill="#ff8a3d"/>
          <rect x="105" y="90" width="6" height="52" fill="#d9680a"/>
          <rect x="205" y="122" width="112" height="62" rx="10" fill="#ff8a3d"/>
          <rect x="312" y="140" width="48" height="44" rx="8" fill="#b25e14"/>
          <rect x="320" y="148" width="24" height="16" rx="4" fill="#fff3e2"/>
          <circle cx="240" cy="190" r="13" fill="#b25e14"/>
          <circle cx="330" cy="190" r="13" fill="#b25e14"/>
          <circle cx="240" cy="190" r="5" fill="#fff3e2"/>
          <circle cx="330" cy="190" r="5" fill="#fff3e2"/>
          <text x="205" y="228" font-size="16" fill="#b25e14" font-weight="bold">📦 一共送出多少件？</text>
        </svg>`,
        paragraphs: [
          "橙光星球的快递站开张啦！奇奇当上小小快递员：上午送出 36 件包裹，下午又送出 27 件。",
          "站长问：「今天一共送出多少件？」奇奇从 36 开始，一件一件往后数 27 件……数到一半，全乱套了！",
          "把 36 和 27 上下叠起来算（这叫竖式），就清楚多了。可个位 6 + 7 = 13，个位写不下两个数字呀！<b>多出来的那个「十」，该送到哪里去？</b>"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先把「十」装进心里：摆一个 1 行 × 10 列 的方阵，数数看 10 个一有多整齐！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 1, targetCols: 10 },
        successText: "摆好了！10 个一，正好合成 1 个十。待会儿竖式里的「进 1」，进的就是它！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "竖式里藏着一个小机关。先看 9 个一：再添上 1 个一，会怎么样？", state: { rows: 1, cols: 9, showTotal: true } },
          { caption: "10 个一啦！满十就捆成 1 个十——这就是「满十进一」：竖式里个位满十，向十位进 1。", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "36 + 27：个位 6 + 7 = 13，满十！把 1 个十进给十位，个位写 3。", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "十位 3 + 2 = 5，别忘加进上来的 1：6 个十。和个位的 3 合起来——36 + 27 = 63。", state: { rows: 6, cols: 10, showTotal: true } },
          { caption: "减法反过来：42 − 27，个位 2 减 7 不够。从十位退 1 个十，换回 10 个一：12 − 7 = 5。", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "十位 4 退走 1 剩 3，3 − 2 = 1：1 个十加 5 个一，42 − 27 = 15。退位的地方，记得点上小圆点！", state: { rows: 1, cols: 10, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把排队进位的过程，写成数学的语言——竖式：",
          "竖式要像排队一样：个位对个位，十位对十位，从个位算起。"
        ],
        formula: "36 + 27 = 63　　42 − 27 = 15",
        keypoints: [
          "相同数位对齐：个位对个位，十位对十位",
          "从个位算起：个位满十，向十位进 1；个位不够减，向十位退 1 当十",
          "进位的 1 写小一点，退位的地方点上小圆点——做了记号不忘记",
          "算完验算一下：63 − 27 = 36，对上了！"
        ],
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="350" cy="40" r="22" fill="#ffc233"/>
          <g font-weight="bold">
            <text x="98" y="80" font-size="34" fill="#2b2d42">3</text>
            <text x="140" y="80" font-size="34" fill="#2b2d42">6</text>
            <text x="54" y="126" font-size="34" fill="#ff8a3d">+</text>
            <text x="98" y="126" font-size="34" fill="#2b2d42">2</text>
            <text x="140" y="126" font-size="34" fill="#2b2d42">7</text>
            <text x="98" y="196" font-size="34" fill="#ff8a3d">6</text>
            <text x="140" y="196" font-size="34" fill="#ff8a3d">3</text>
            <text x="118" y="162" font-size="18" fill="#e05a00">1</text>
            <text x="258" y="80" font-size="34" fill="#2b2d42">4</text>
            <text x="300" y="80" font-size="34" fill="#2b2d42">2</text>
            <text x="214" y="126" font-size="34" fill="#ff8a3d">−</text>
            <text x="258" y="126" font-size="34" fill="#2b2d42">2</text>
            <text x="300" y="126" font-size="34" fill="#2b2d42">7</text>
            <text x="258" y="196" font-size="34" fill="#ff8a3d">1</text>
            <text x="300" y="196" font-size="34" fill="#ff8a3d">5</text>
          </g>
          <line x1="46" y1="144" x2="172" y2="144" stroke="#b25e14" stroke-width="4" stroke-linecap="round"/>
          <line x1="206" y1="144" x2="332" y2="144" stroke="#b25e14" stroke-width="4" stroke-linecap="round"/>
          <circle cx="267" cy="47" r="4.5" fill="#e05a00"/>
          <text x="60" y="228" font-size="15" fill="#b25e14" font-weight="bold">满十进一</text>
          <text x="222" y="228" font-size="15" fill="#b25e14" font-weight="bold">退一当十</text>
        </svg>`
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "28 + 34 = □", answer: "62",
            hint: "个位 8 + 4 = 12，满十要进 1 哦", explain: "个位 8 + 4 = 12，个位写 2 进 1；十位 2 + 3 + 1 = 6。28 + 34 = 62。" },
          { type: "choice", level: "基础", q: "51 − 26 = ？", options: ["25", "35", "23", "27"], answer: 0,
            hint: "个位 1 减 6 不够，向十位退 1 当十", explain: "退位后 11 − 6 = 5；十位 5 退 1 剩 4，4 − 2 = 2。51 − 26 = 25。" },
          { type: "judge", level: "基础", q: "做竖式 46 + 27 时，个位 6 + 7 = 13，就在个位写上 13。", answer: false,
            hint: "个位只住得下一个数字……", explain: "个位满十要向十位进 1：个位只写 3，把 1 个十进给十位，46 + 27 = 73。" },
          { type: "choice", level: "变式", q: "为什么个位满十要向十位进 1？", options: ["因为这样写比较好看", "因为 10 个一就是 1 个十，送到十位去，一个数也不丢", "因为十位比较厉害"], answer: 1,
            hint: "想想方块动画：10 个一捆成了什么？", explain: "13 是 1 个十和 3 个一。把 1 个十送到十位，两边一个数也不差——进位不是魔法，是打包。" },
          { type: "fill", level: "变式", q: "□ + 19 = 45，□ 里藏着几？", answer: "26",
            hint: "倒过来算：45 − 19 = ?", explain: "45 − 19 = 26：个位退位后 15 − 9 = 6，十位 4 退 1 剩 3，3 − 1 = 2。验算：26 + 19 = 45，对！" },
          { type: "choice", level: "变式", q: "竖式 70 − 36，个位 0 减 6 不够减，怎么办？", options: ["向十位退 1 个十，10 − 6 = 4", "0 减 6 就等于 6", "这道题不做了"], answer: 0,
            hint: "退一当十：十位借 1 个十，换成 10 个一", explain: "退位后 10 − 6 = 4；十位 7 退 1 剩 6，6 − 3 = 3。70 − 36 = 34。" },
          { type: "choice", level: "挑战", q: "停车场原来有 45 辆车，开走 18 辆，又开来 27 辆，现在有几辆？", options: ["54 辆", "44 辆", "90 辆", "36 辆"], answer: 0,
            hint: "分两步：先 45 − 18，再往上加 27", explain: "45 − 18 = 27，27 + 27 = 54。现在有 54 辆。一步一步来，稳稳的。" },
          { type: "fill", level: "挑战", q: "树上原来有 63 只小鸟，飞走一些后还剩 28 只，飞走了几只？", answer: "35",
            hint: "飞走的 = 原来的 − 剩下的", explain: "63 − 28 = 35：个位退位后 13 − 8 = 5，十位 6 退 1 剩 5，5 − 2 = 3。飞走了 35 只。" },
          { type: "choice", level: "温故", q: "还记得吗：量一支铅笔的长度，用哪个单位比较合适？", options: ["厘米", "米"], answer: 0,
            hint: "铅笔很短，用小一点的单位", explain: "铅笔大约十几厘米，用厘米合适；米用来量教室、大树这样长的东西。长度单位的本领还在，真棒！" }
        ]
      },
      {
        type: "review",
        question: "36 + 27 = 63，竖式里的「进 1」到底进了什么？",
        ways: [
          { name: "摆方块", text: "个位 6 + 7 = 13 个一，其中 10 个一捆成 1 个十送到十位，个位只剩 3。" },
          { name: "拆开算", text: "36 + 27 = 30 + 20 + 6 + 7 = 50 + 13 = 63，13 里的那个十，正是进位的 1。" },
          { name: "验算", text: "倒过来算 63 − 27 = 36，和原来一样，说明没进错。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：竖式里为什么要「满十进一」？（可以伸出 10 根手指当道具）"
      },
      {
        type: "beauty",
        headline: "为什么满十进一？答案藏在你的手上",
        paragraphs: [
          "几千年前，古人数数全靠两只手：数到 10，手指用完了，就捆一根小棒、刻一个记号——「满十进一」就这样诞生了。",
          "可不是所有民族都满十进一：古巴比伦人满六十才进一！今天钟面上的 60 秒 = 1 分钟、60 分 = 1 小时，就是他们留下的礼物。",
          "下次在竖式里写下那个小小的进位 1，你其实是在重复几千年前人类的发明——去博物馆看看巴比伦人的泥板吧！"
        ],
        museum: "his-babylon"
      }
    ]
  },

  /* ================= 单元 5：表内除法 ================= */
  {
    id: "g2u5",
    title: "表内除法",
    subtitle: "平均分的本领",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "三只小熊分饼干",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="345" cy="38" r="22" fill="#ffc233"/>
          <g fill="#b25e14">
            <circle cx="60" cy="93" r="11"/><circle cx="100" cy="93" r="11"/>
            <circle cx="180" cy="93" r="11"/><circle cx="220" cy="93" r="11"/>
            <circle cx="300" cy="93" r="11"/><circle cx="340" cy="93" r="11"/>
          </g>
          <g fill="#d98a3d">
            <circle cx="80" cy="118" r="30"/><circle cx="200" cy="118" r="30"/><circle cx="320" cy="118" r="30"/>
          </g>
          <g fill="#ffe1c2">
            <ellipse cx="80" cy="128" rx="12" ry="9"/><ellipse cx="200" cy="128" rx="12" ry="9"/><ellipse cx="320" cy="128" rx="12" ry="9"/>
          </g>
          <g fill="#2b2d42">
            <circle cx="69" cy="112" r="3.2"/><circle cx="91" cy="112" r="3.2"/>
            <circle cx="189" cy="112" r="3.2"/><circle cx="211" cy="112" r="3.2"/>
            <circle cx="309" cy="112" r="3.2"/><circle cx="331" cy="112" r="3.2"/>
            <circle cx="80" cy="124" r="3.5"/><circle cx="200" cy="124" r="3.5"/><circle cx="320" cy="124" r="3.5"/>
          </g>
          <circle cx="336" cy="124" r="3.2" fill="#4d96ff"/>
          <circle cx="339" cy="132" r="2.4" fill="#4d96ff"/>
          <g fill="#ffe1c2">
            <ellipse cx="80" cy="197" rx="44" ry="10"/><ellipse cx="200" cy="197" rx="44" ry="10"/><ellipse cx="320" cy="197" rx="44" ry="10"/>
          </g>
          <g fill="#ff8a3d">
            <circle cx="57" cy="189" r="6.5"/><circle cx="71" cy="186" r="6.5"/><circle cx="85" cy="189" r="6.5"/><circle cx="99" cy="186" r="6.5"/>
            <circle cx="64" cy="196" r="6.5"/><circle cx="78" cy="194" r="6.5"/><circle cx="92" cy="196" r="6.5"/>
            <circle cx="178" cy="191" r="6.5"/><circle cx="192" cy="188" r="6.5"/><circle cx="206" cy="191" r="6.5"/><circle cx="220" cy="188" r="6.5"/>
            <circle cx="320" cy="191" r="6.5"/>
          </g>
          <text x="232" y="230" font-size="16" fill="#b25e14" font-weight="bold">🍪 怎样分才公平？</text>
        </svg>`,
        paragraphs: [
          "熊妈妈烤了 12 块香喷喷的饼干，要分给 3 只小熊。",
          "熊大抢先抓走 7 块，熊二抓走 4 块，轮到熊三，只剩 1 块了！熊三哇地哭出来：「不公平！」",
          "怎样分，才能让每只小熊一样多？<b>「平均分」里，藏着除法的秘密……</b>"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "帮小熊公平分饼干：摆出 3 行 × 4 列 的方阵——12 块饼干，平均分成 3 行！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 3, targetCols: 4 },
        successText: "分好了！3 行，每行 4 块，每只小熊一样多——这就是平均分！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "12 块饼干，要平均分给 3 只小熊——每只都要一样多！", state: { rows: 2, cols: 6, showTotal: true } },
          { caption: "一人一块，先分一轮：分出去 3 块。", state: { rows: 3, cols: 1, showTotal: true } },
          { caption: "再分一轮：每只小熊 2 块，分出去 6 块。", state: { rows: 3, cols: 2, showTotal: true } },
          { caption: "第三轮：每只 3 块，分出去 9 块。", state: { rows: 3, cols: 3, showTotal: true } },
          { caption: "第四轮，正好分完！12 ÷ 3 = 4，每只小熊 4 块，一样多！", state: { rows: 3, cols: 4, showTotal: true } },
          { caption: "验算一下：3 只 × 每只 4 块 = 12 块。除法的答案，用乘法就能检查！", state: { rows: 3, cols: 4, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把「平均分」写成数学的语言：",
          "每份一样多，就可以用除法一口算出来。"
        ],
        formula: "12 ÷ 3 = 4",
        keypoints: [
          "「÷」读作「除」，12 ÷ 3 读作「十二除以三」",
          "12 是要分的总数，3 是分成的 3 份，4 是每份的个数",
          "想乘法口诀算除法：三（四）十二，所以 12 ÷ 3 = 4",
          "除法和乘法是一对好兄弟：3 × 4 = 12，12 ÷ 3 = 4"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "把 12 块饼干平均分给 3 只小熊，每只分到几块？", options: ["3 块", "4 块", "6 块", "12 块"], answer: 1,
            hint: "想：3 × □ = 12", explain: "12 ÷ 3 = 4，每只小熊 4 块，一样多才公平。" },
          { type: "fill", level: "基础", q: "15 ÷ 3 = □", answer: "5",
            hint: "想乘法口诀：三（ ）十五", explain: "三五十五，所以 15 ÷ 3 = 5。" },
          { type: "judge", level: "基础", q: "把 8 个苹果分给 2 个小朋友，一个分 5 个、一个分 3 个，这是平均分。", answer: false,
            hint: "平均分要「每份一样多」", explain: "5 个和 3 个不一样多，不是平均分。8 ÷ 2 = 4，每人 4 个才公平。" },
          { type: "choice", level: "变式", q: "为什么「平均分」要用除法来算？", options: ["因为除号写起来好看", "因为除法就是「每份一样多」的分法，能直接算出每份几个", "只是碰巧规定成这样"], answer: 1,
            hint: "想想分饼干：轮着分，每轮每人都一样多", explain: "平均分的意思就是每份一样多，除法天生就是干这个的：12 ÷ 3 = 4，每份 4 块。" },
          { type: "fill", level: "变式", q: "□ ÷ 4 = 5，□ 里藏着几？", answer: "20",
            hint: "倒过来想：4 × 5 = ?", explain: "总数 = 每份 × 份数：5 × 4 = 20，所以 □ = 20。" },
          { type: "choice", level: "挑战", q: "20 块糖，每个小朋友分 4 块，可以分给几个小朋友？", options: ["4 个", "5 个", "6 个", "24 个"], answer: 1,
            hint: "想：4 × □ = 20", explain: "20 ÷ 4 = 5，可以分给 5 个小朋友。这次求的是「几份」，除法一样管用。" },
          { type: "choice", level: "挑战", q: "18 个橙子，每 3 个装一袋，能装满几袋？", options: ["3 袋", "6 袋", "9 袋", "15 袋"], answer: 1,
            hint: "18 里面有几个 3？数一数：3、6、9、12……", explain: "18 ÷ 3 = 6，能装满 6 袋。装袋问题也是平均分！" },
          { type: "fill", level: "温故", q: "还记得吗：3 × 6 = ？", answer: "18",
            hint: "3 个 6 相加：6 + 6 + 6 = ?", explain: "3 × 6 = 18。悄悄告诉你：除法 18 ÷ 3 = 6 用的也是这句口诀！" }
        ]
      },
      {
        type: "review",
        question: "12 ÷ 3 = 4，这个 4 是怎么分出来的？",
        ways: [
          { name: "轮着分", text: "12 块饼干一只分一块，分完 4 轮正好分光，每只小熊 4 块。" },
          { name: "连减", text: "12 − 3 − 3 − 3 − 3 = 0，减了 4 次，每份就是 4。" },
          { name: "想乘法", text: "三（四）十二，3 × 4 = 12，所以 12 ÷ 3 = 4。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么算除法可以「想乘法」？（拿 12 ÷ 3 举例，摆摆积木更好）"
      },
      {
        type: "beauty",
        headline: "每行都一样多：幻方里的平均分",
        paragraphs: [
          "把 1~9 填进九宫格，让每行、每列、每条对角线的和都相等——这就是流传了几千年的幻方。每行都是 15，谁也不多、谁也不少，像高级版的平均分！",
          "其实 1~9 加起来是 45，平均分成 3 行：45 ÷ 3 = 15——用今天学的除法，你也能算出幻方每行的目标！",
          "中国古代传说里，幻方最早写在神龟的背上，叫「洛书」。去实验室亲手摆一摆，感受这份古老的公平！"
        ],
        lab: "magic-square"
      }
    ]
  },

  /* ================= 单元 6：混合运算 ================= */
  {
    id: "g2u6",
    title: "混合运算",
    subtitle: "先乘除，后加减",
    tag: "运算",
    minutes: 25,
    scenes: [
      {
        type: "story",
        title: "42 元的天价橡皮",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="345" cy="38" r="22" fill="#ffc233"/>
          <rect x="40" y="168" width="320" height="14" rx="7" fill="#b25e14"/>
          <rect x="62" y="136" width="50" height="30" rx="8" fill="#ffc233"/>
          <rect x="86" y="136" width="12" height="30" fill="#ff8a3d"/>
          <g>
            <rect x="160" y="108" width="6" height="22" fill="#ffc233"/><rect x="178" y="108" width="6" height="22" fill="#b25e14"/><rect x="196" y="108" width="6" height="22" fill="#ffc233"/>
            <rect x="234" y="108" width="6" height="22" fill="#b25e14"/><rect x="252" y="108" width="6" height="22" fill="#ffc233"/><rect x="270" y="108" width="6" height="22" fill="#b25e14"/>
            <rect x="308" y="108" width="6" height="22" fill="#ffc233"/><rect x="326" y="108" width="6" height="22" fill="#b25e14"/><rect x="344" y="108" width="6" height="22" fill="#ffc233"/>
          </g>
          <g>
            <rect x="150" y="130" width="58" height="36" rx="8" fill="#ff8a3d"/><rect x="150" y="130" width="58" height="9" rx="4" fill="#d9680a"/>
            <rect x="224" y="130" width="58" height="36" rx="8" fill="#ff8a3d"/><rect x="224" y="130" width="58" height="9" rx="4" fill="#d9680a"/>
            <rect x="298" y="130" width="58" height="36" rx="8" fill="#ff8a3d"/><rect x="298" y="130" width="58" height="9" rx="4" fill="#d9680a"/>
          </g>
          <text x="48" y="204" font-size="15" fill="#b25e14" font-weight="bold">橡皮 4 元</text>
          <text x="196" y="204" font-size="15" fill="#b25e14" font-weight="bold">彩笔每盒 6 元，共 3 盒</text>
          <text x="215" y="231" font-size="16" fill="#b25e14" font-weight="bold">🛒 一共要付多少元？</text>
        </svg>`,
        paragraphs: [
          "开学前，奇奇去橙光文具店：买 1 块橡皮 4 元，再买 3 盒彩笔，每盒 6 元。",
          "收银机打出算式：4 + 3 × 6。小熊店员抢着算：「4 加 3 得 7，7 乘 6——42 元！」奇奇吓了一跳：「我只带了 30 元呀！」",
          "同一道算式，先加和先乘，答案竟然不一样！<b>到底该先算哪一步？</b>"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先帮奇奇算算彩笔多少钱：摆出 3 行 × 6 列 的方阵，看看 3 盒彩笔一共多少元！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 3, targetCols: 6 },
        successText: "3 盒彩笔是 3 × 6 = 18 元，再加橡皮 4 元：4 + 18 = 22 元。先算乘法，账就对啦！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "1 块橡皮 4 元：4 个小方块，是「散装」的。", state: { rows: 1, cols: 4, showTotal: true } },
          { caption: "3 盒彩笔，每盒 6 元：乘法把相同的几份打包好——3 × 6 = 18 元。", state: { rows: 3, cols: 6, showTotal: true } },
          { caption: "如果先算 4 + 3 = 7 再乘 6，就变成 7 × 6 = 42！橡皮被白白乘了 6 次，当然不对。", state: { rows: 6, cols: 7, showTotal: true } },
          { caption: "所以数学家约定：乘法这种「打包好的」要先拆包算清，再算加减：4 + 18 = 22 元。", state: { rows: 3, cols: 6, showTotal: true } },
          { caption: "除法也是打包——把 12 平均分成 3 份，每份 4。20 − 12 ÷ 3，先算除法：12 ÷ 3 = 4。", state: { rows: 3, cols: 4, showTotal: true } },
          { caption: "再算减法：20 − 4 = 16。先乘除、后加减——全世界的约定，算式再也不吵架！", state: { rows: 2, cols: 8, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把购物的账，写成一道算式：",
          "一道算式里有乘除又有加减，要约定好先算谁。"
        ],
        formula: "4 + 3 × 6 = 4 + 18 = 22",
        keypoints: [
          "先乘除，后加减：乘除是「打包好的数」，先拆包算清，账才不会乱",
          "只有加减（或只有乘除）时，从左往右挨着算",
          "先算哪一步，就在那一步下面画一条线，一步算完再算下一步",
          "遇到小括号，先算括号里面的——括号是「请先算我」的小牌子"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "4 + 3 × 6，应该先算哪一步？", options: ["4 + 3", "3 × 6", "从左往右挨着算"], answer: 1,
            hint: "乘法除法是「打包好的」，先拆包", explain: "先算 3 × 6 = 18，再算 4 + 18 = 22。先乘除，后加减。" },
          { type: "fill", level: "基础", q: "30 − 4 × 5 = □", answer: "10",
            hint: "先算 4 × 5 = 20", explain: "30 − 20 = 10。先乘后减，别从左往右抢跑。" },
          { type: "judge", level: "变式", q: "8 + 12 ÷ 4 = 20 ÷ 4 = 5。", answer: false,
            hint: "先算除法，还是先算加法？", explain: "先算除法：12 ÷ 4 = 3，再算 8 + 3 = 11。从左往右抢跑就算错啦。" },
          { type: "choice", level: "变式", q: "为什么要先算乘除、后算加减？", options: ["因为乘除比加减高级", "因为乘除是打包好的几份，先拆包算清，再加上散装的，账才对", "没有理由，只能死记硬背"], answer: 1,
            hint: "想想橡皮和彩笔的故事", explain: "3 盒彩笔是打包好的一份，得先算 3 × 6 = 18，再和 4 元橡皮合起来：22 元。规则是从生活里长出来的！" },
          { type: "fill", level: "变式", q: "5 × 4 + 6 = □", answer: "26",
            hint: "先算 5 × 4 = 20", explain: "20 + 6 = 26。乘法在前也要先算它。" },
          { type: "choice", level: "挑战", q: "奇奇买 2 块橡皮，每块 4 元，付给店员 10 元，应找回几元？", options: ["2 元", "4 元", "6 元", "8 元"], answer: 0,
            hint: "先算 2 块橡皮多少钱：2 × 4 = ?", explain: "2 × 4 = 8 元，10 − 8 = 2 元。应找回 2 元。" },
          { type: "choice", level: "挑战", q: "下面哪道算式的得数最大？", options: ["6 + 4 × 2", "(6 + 4) × 2", "6 × 4 − 2"], answer: 2,
            hint: "三道都算算看，注意每道先算哪一步", explain: "6 + 4 × 2 = 14，(6 + 4) × 2 = 20，6 × 4 − 2 = 22。最大的是 22。" },
          { type: "choice", level: "温故", q: "还记得吗：三角尺上最大的那个角，是什么角？", options: ["直角", "比直角小的角", "比直角大的角"], answer: 0,
            hint: "它方方正正，像桌角、书角一样", explain: "三角尺上最大的角是直角。角的本领也没丢，你的数学背包越来越沉啦！" }
        ]
      },
      {
        type: "review",
        question: "4 + 3 × 6 为什么是 22，而不是 42？",
        ways: [
          { name: "讲故事", text: "1 块橡皮 4 元，加 3 盒彩笔各 6 元：彩笔 3 × 6 = 18 元先打包算好，4 + 18 = 22 元。橡皮只有 1 块，不能被乘 6 次。" },
          { name: "摆方块", text: "3 行 6 列是 18 块「彩笔」，旁边再摆 4 块「橡皮」，一共 22 块——块块对得上。" },
          { name: "拆乘法", text: "3 × 6 就是 6 + 6 + 6，算式其实是 4 + 6 + 6 + 6 = 22，怎么加都是 22。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么「先乘除、后加减」不是死规定，而是有道理？（就讲买橡皮和彩笔的故事）"
      },
      {
        type: "beauty",
        headline: "一条小规则，难倒全世界",
        paragraphs: [
          "随便挑一个数：是偶数就除以 2，是奇数就乘 3 再加 1。照这条规则一直算下去——比如 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1——最后总会掉进 1 的小漩涡。",
          "这就是著名的「考拉兹猜想」：规则只用了乘、除、加，简单得你都能算，可全世界的数学家至今没能证明「所有数都会掉进漩涡」。",
          "运算规则里藏着想不到的奥秘。去博物馆亲手点一点，看看你的幸运数字要走几步才掉进漩涡！"
        ],
        museum: "mys-collatz"
      }
    ]
  }
);
