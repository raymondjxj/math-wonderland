/* ============================================================
   数学奇境 · 二年级扩展单元 v2（g2d：push 模式）
   单元：9 观察物体（一） / 10 认识时间 / 11 克和千克
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   （g2u10 概念密集，用 inquiry 8 幕：story → play → anim → play → symbol → quiz → review → beauty）
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[2] = MW.content[2] || { grade: 2, name: "二年级 · 橙光星球", units: [] };
G.units.push(

  /* ================= 单元 9：观察物体（一） ================= */
  {
    id: "g2u9",
    title: "观察物体（一）",
    subtitle: "换个方向，换副模样",
    tag: "空间",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "谁把小熊画错了？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="342" cy="36" r="20" fill="#ffc233"/>
          <g stroke="#e0a92c" stroke-width="2" stroke-dasharray="5 5" fill="none">
            <line x1="98" y1="129" x2="160" y2="124"/>
            <line x1="302" y1="129" x2="240" y2="124"/>
            <line x1="200" y1="64" x2="200" y2="78"/>
          </g>
          <ellipse cx="200" cy="170" rx="30" ry="24" fill="#ff8a3d"/>
          <circle cx="200" cy="112" r="32" fill="#ff8a3d"/>
          <circle cx="178" cy="86" r="11" fill="#ff8a3d"/>
          <circle cx="222" cy="86" r="11" fill="#ff8a3d"/>
          <circle cx="189" cy="108" r="4.5" fill="#2b2d42"/>
          <circle cx="211" cy="108" r="4.5" fill="#2b2d42"/>
          <ellipse cx="200" cy="122" rx="9" ry="7" fill="#ffd9a8"/>
          <circle cx="200" cy="120" r="3.2" fill="#2b2d42"/>
          <rect x="24" y="92" width="74" height="74" rx="12" fill="#ffffff" stroke="#ff8a3d" stroke-width="3"/>
          <circle cx="61" cy="122" r="19" fill="#ffb26b"/>
          <circle cx="54" cy="119" r="3" fill="#2b2d42"/>
          <circle cx="68" cy="119" r="3" fill="#2b2d42"/>
          <ellipse cx="61" cy="129" rx="6" ry="4.5" fill="#fff3e2"/>
          <text x="61" y="160" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">前面</text>
          <rect x="302" y="92" width="74" height="74" rx="12" fill="#ffffff" stroke="#ff8a3d" stroke-width="3"/>
          <circle cx="339" cy="122" r="19" fill="#ffb26b"/>
          <circle cx="328" cy="109" r="6" fill="#ffb26b"/>
          <circle cx="346" cy="119" r="3" fill="#2b2d42"/>
          <circle cx="356" cy="128" r="4.5" fill="#ffd9a8"/>
          <text x="339" y="160" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">侧面</text>
          <rect x="163" y="8" width="74" height="56" rx="12" fill="#ffffff" stroke="#ff8a3d" stroke-width="3"/>
          <circle cx="200" cy="33" r="13" fill="#ffb26b"/>
          <circle cx="190" cy="24" r="5" fill="#ffb26b"/>
          <circle cx="210" cy="24" r="5" fill="#ffb26b"/>
          <text x="200" y="58" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">上面</text>
          <text x="200" y="226" font-size="17" fill="#b25e14" font-weight="bold" text-anchor="middle">🐻 同一只小熊，三张画像？</text>
        </svg>`,
        paragraphs: [
          "美术课上，奇奇、妙妙和小鹿画同一只玩具小熊。奇奇画了大圆脸和两只黑眼睛；妙妙只画了一只眼睛、一只耳朵，还有一个尖尖的鼻尖；小鹿画的却是一个圆头顶加两只小圆耳。",
          "三个小伙伴你看我、我看你：「你画错啦！」「明明是你画错了！」",
          "老师看了直笑：「你们三个，都没画错！」<b>同一只小熊，怎么会画出三个样子？</b>"
        ]
      },
      {
        type: "play",
        widget: "sketchpad",
        prompt: "玩具小熊坐端正，你从它的正侧面看过去：能看到几只眼睛、几只耳朵？画出你从侧面看到的小熊！画完点「我画好了」。",
        config: { interactive: true },
        successText: "画好了！从侧面看：一只眼睛、一只耳朵、一个鼻尖——和正面看到的完全不一样！为什么会这样？接着往下看。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "用小熊积木来试验：从正面看，2 行 3 列，6 块积木清清楚楚。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "绕到侧面：后面的积木被挡住了，只看到 2 行 1 列——积木没有变少，是藏起来了！", state: { rows: 2, cols: 1, showTotal: true } },
          { caption: "飞到上面低头看：只看到一行「头顶」，1 行 3 列。", state: { rows: 1, cols: 3, showTotal: true } },
          { caption: "三个方向，三副模样。积木还是那 6 块，变的是你站的位置。", state: { rows: 2, cols: 3, showTotal: true } },
          { caption: "所以观察物体前先问自己：我站在哪个方向？看到的会是它的哪一面？", state: { rows: 2, cols: 3, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把刚才的发现，写成数学的语言：",
          "观察同一个物体，站的方向不同，看到的形状可能不一样。"
        ],
        formula: "前面 ≠ 侧面 ≠ 上面（看到的形状可能不同）",
        keypoints: [
          "观察前先想：我站在物体的哪个方向？",
          "从正面看：看到脸和胸前；从侧面看：看到一只耳朵、一个鼻尖；从上面看：看到头顶",
          "看到的形状不一样，不代表物体变了——变的是你站的位置",
          "拍照、画画之前，先选好观察的方向"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "奇奇站在玩具小熊的正前方，他看到的是小熊的什么？", options: ["圆圆的脸和黑眼睛", "后脑勺和后背", "头顶和两只耳朵尖"], answer: 0,
            hint: "正前方，就是和小熊面对面", explain: "面对面看到的是脸；后脑勺要绕到后面看，头顶要从上面低头看。" },
          { type: "choice", level: "基础", q: "一张照片上只有小熊的后脑勺和后背。拍照的人站在小熊的哪个方向？", options: ["前面", "后面", "上面"], answer: 1,
            hint: "后脑勺长在小熊的哪一边？", explain: "看到后脑勺和后背，说明拍照的人站在小熊的后面。" },
          { type: "choice", level: "变式", q: "一只带把手的杯子，从正上方往下看，最可能看到什么？", options: ["一个圆圆的杯口，旁边露出小把手", "杯身上的图案正对着我", "杯底的花纹"], answer: 0,
            hint: "低头往杯口里看……", explain: "从上面看，杯口是一个圆，把手在旁边露出一点；图案要从侧面看，杯底要翻过来才看得到。" },
          { type: "choice", level: "变式", q: "美术课上，为什么三个小朋友画的是同一只小熊，画出来却不一样？", options: ["有两个人画错了", "他们站的方向不同，看到的样子就不同", "小熊会变身"], answer: 1,
            hint: "回忆积木动画：正面、侧面、上面……", explain: "小熊没有变，变的是观察的方向：正面看脸、侧面看鼻尖、上面看头顶，所以三张画都不一样。" },
          { type: "choice", level: "挑战", q: "家里高高的冰箱，从它的侧面看，看到的形状更接近哪个？", options: ["宽宽的长方形", "窄窄的长方形", "圆圆的"], answer: 1,
            hint: "冰箱正面宽，身子薄……", explain: "冰箱正面又宽又高；绕到侧面，看到的是它「薄薄」的一面，是窄窄的长方形。" },
          { type: "fill", level: "温故", q: "还记得吗：把 12 平均分成 3 份，每份是几？12 ÷ 3 = □", answer: "4",
            hint: "想乘法口诀：三四十二", explain: "12 ÷ 3 = 4，每份是 4。除法的本领没丢掉，真棒！" },
          { type: "build", level: "开放", q: "再挑战一次：把你的铅笔盒（或小玩具）放在桌上，从它的正上方低头看——把看到的样子画下来。画完点「我画好了」。",
            widget: "sketchpad", config: { interactive: true },
            reference: "参考想法：从上面看铅笔盒，通常是一个长方形，也许还有一条拉链线；从上面看小熊，是一个圆头顶加两只小耳朵。只要画的是「从正上方低头看到的样子」，就答对啦！" }
        ]
      },
      {
        type: "review",
        question: "为什么从不同的方向看同一只小熊，看到的样子不一样？",
        ways: [
          { name: "转一转", text: "把玩具放在桌上，绕着它走一圈：正面看到脸，侧面看到耳朵和鼻尖，后面看到后脑勺——位置变，看到的样子就变。" },
          { name: "画一画", text: "从三个方向各画一张小画：三张画不一样，可画的都是同一只小熊。" },
          { name: "想一想", text: "小熊自己不会变，变的是你站的位置。观察的方向不同，看到的样子就可能不同。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么三个小朋友都没画错？（可以拿一个小玩具，请他们分别从正面和侧面看一看）"
      },
      {
        type: "beauty",
        headline: "金字塔的三张「画像」",
        paragraphs: [
          "从侧面看，金字塔是一个三角形；从正上方往下看，它却是一个正方形！同一座金字塔，换个方向就换了一副模样。",
          "古埃及人建造金字塔时，要先把各个方向看到的样子都画出来，巨石才能垒得又稳又直。今天的建筑师盖大楼，也要画这样的「三视图」：正面、侧面、上面，一张都不能少。",
          "会换方向观察的人，能把世界看得更完整。去博物馆看看，金字塔里还藏着哪些数学秘密！"
        ],
        museum: "his-egypt"
      }
    ]
  },

  /* ================= 单元 10：认识时间（inquiry 8 幕） ================= */
  {
    id: "g2u10",
    title: "认识时间",
    subtitle: "两根针的约定：1 时 = 60 分",
    tag: "数感",
    minutes: 25,
    inquiry: true,
    scenes: [
      {
        type: "story",
        title: "小熊看错了针",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="46" cy="38" r="20" fill="#ffc233"/>
          <circle cx="150" cy="122" r="76" fill="#ffffff" stroke="#ff8a3d" stroke-width="6"/>
          <g stroke="#ffd9a8" stroke-width="4" stroke-linecap="round">
            <line x1="182" y1="67" x2="187" y2="58"/><line x1="205" y1="90" x2="214" y2="85"/>
            <line x1="205" y1="154" x2="214" y2="159"/><line x1="182" y1="177" x2="187" y2="186"/>
            <line x1="118" y1="177" x2="113" y2="186"/><line x1="95" y1="154" x2="86" y2="159"/>
            <line x1="95" y1="90" x2="86" y2="85"/><line x1="118" y1="67" x2="113" y2="58"/>
          </g>
          <g stroke="#ff8a3d" stroke-width="5" stroke-linecap="round">
            <line x1="150" y1="56" x2="150" y2="68"/><line x1="216" y1="122" x2="204" y2="122"/>
            <line x1="150" y1="188" x2="150" y2="176"/><line x1="84" y1="122" x2="96" y2="122"/>
          </g>
          <line x1="150" y1="122" x2="150" y2="60" stroke="#b25e14" stroke-width="5" stroke-linecap="round"/>
          <line x1="150" y1="122" x2="196" y2="122" stroke="#ff8a3d" stroke-width="7" stroke-linecap="round"/>
          <circle cx="150" cy="122" r="7" fill="#2b2d42"/>
          <circle cx="305" cy="146" r="30" fill="#ff8a3d"/>
          <circle cx="284" cy="122" r="10" fill="#ff8a3d"/>
          <circle cx="326" cy="122" r="10" fill="#ff8a3d"/>
          <circle cx="296" cy="142" r="4" fill="#2b2d42"/>
          <circle cx="316" cy="142" r="4" fill="#2b2d42"/>
          <ellipse cx="306" cy="154" rx="7" ry="5.5" fill="#ffd9a8"/>
          <circle cx="345" cy="86" r="20" fill="#ffffff" stroke="#ff8a3d" stroke-width="3"/>
          <text x="345" y="94" font-size="24" fill="#b25e14" font-weight="bold" text-anchor="middle">?</text>
          <text x="200" y="226" font-size="17" fill="#b25e14" font-weight="bold" text-anchor="middle">⏰ 长针短针，谁管「时」、谁管「分」？</text>
        </svg>`,
        paragraphs: [
          "星期天，奇奇给小熊留了张字条：「长针指 12、短针指 3 的时候，来橙光火箭下集合！」",
          "小熊盯着钟面看了半天：长针、短针……到底哪根管「时」，哪根管「分」呀？他一拍脑袋：「反正都是针，差不多就行！」",
          "结果，小熊在火箭下等了半天，一个人影也没有；回到家，奇奇早就出发去找他了。<b>认错了针，就认错了时间……</b>"
        ]
      },
      {
        type: "play",
        widget: "angle",
        prompt: "先凭你学过的老本领试试：3 时整，分针指 12、时针指 3，两根针张开的角是什么样的？拖动滑块，摆出这个「方方正正」的角！",
        config: { interactive: true, deg: 20, target: 90, tolerance: 6, showProtractor: false },
        successText: "摆好了！90°——3 时整的两根针，正好张开一个直角。你学过的直角，就藏在钟面里！"
      },
      {
        type: "anim",
        widget: "angle",
        steps: [
          { caption: "钟面是一个圆，一圈 360°，平均分成 12 个大格。每个大格：360° ÷ 12 = 30°。", state: { deg: 30, showArc: true, showLabel: true } },
          { caption: "时针 1 小时正好走 1 个大格——30°。走 3 个大格：30° × 3 = 90°。", state: { deg: 90, showArc: true, showLabel: true } },
          { caption: "所以 3 时整，时针和分针张开一个方方正正的直角：90°！和你刚才摆的一样。", state: { deg: 90, showArc: true, showLabel: true, showProtractor: true } },
          { caption: "分针的规矩：走 1 大格是 5 分。分针指向 2，走了 2 大格：5 × 2 = 10 分，转了 60°。", state: { deg: 60, showArc: true, showLabel: true } },
          { caption: "分针指向 6：6 大格，5 × 6 = 30 分，正好转了半圈 180°——所以也叫「半时」。", state: { deg: 180, showArc: true, showLabel: true } },
          { caption: "认时间口诀：时针走过几，就是几时多；分针从 12 起，走了几个 5 分。时针过 4、分针指 3 → 4 时 15 分！", state: { deg: 90, showArc: true, showLabel: true } }
        ]
      },
      {
        type: "play",
        widget: "angle",
        prompt: "动手验证你的发现：5 时整，时针走了 5 个大格。5 × 30° = ？把两针张开的角度摆出来，看看是不是你算的那个数！",
        config: { interactive: true, deg: 90, target: 150, tolerance: 6, showProtractor: false },
        successText: "摆好了！5 × 30° = 150°，完全正确！时针每走 1 大格就转 30°——钟面其实是一把会报时的「角度尺」。"
      },
      {
        type: "symbol",
        paragraphs: [
          "观察、摆放、验证都完成了——现在把钟面上的发现，写成数学的语言：",
          "时针管「时」，分针管「分」，两根针各有各的规矩。"
        ],
        formula: "1 时 = 60 分；钟面 1 大格 = 30° = 5 分",
        keypoints: [
          "钟面一圈 360°，分成 12 个大格，每个大格 30°",
          "分针走 1 大格是 5 分；走一圈（360°）正好是 60 分，就是 1 时",
          "时针走 1 大格（30°）是 1 小时",
          "认时间：先看时针走过几，就是几时多；再看分针从 12 起走了几个 5 分",
          "4 时 5 分写作 4:05——几分不满 10，前面要补 0"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "1 时 = □ 分", answer: "60",
            hint: "分针走一整圈，是多少分？", explain: "分针走一圈 360°，正好是 60 分，所以 1 时 = 60 分。" },
          { type: "choice", level: "基础", q: "分针从 12 走到 3，走了多少分？", options: ["3 分", "15 分", "30 分", "12 分"], answer: 1,
            hint: "1 大格是 5 分，从 12 到 3 走了几个大格？", explain: "走了 3 个大格：5 × 3 = 15 分。" },
          { type: "choice", level: "变式", q: "时针走 1 大格是 30°。从 12 走到 4，走了 4 大格，是多少度？", options: ["40°", "90°", "120°", "160°"], answer: 2,
            hint: "4 个 30° 相加，或者 4 × 30", explain: "4 × 30° = 120°。时针走几大格，就是几个 30°。" },
          { type: "choice", level: "变式", q: "为什么分针指向 6 表示 30 分，而不是 6 分？", options: ["因为分针走 1 大格是 5 分，6 大格是 5 × 6 = 30 分", "因为 6 比 3 大，所以要多算一点", "这是随便规定的，没有道理"], answer: 0,
            hint: "想想分针走 1 大格是几分", explain: "分针 1 大格 = 5 分，从 12 到 6 走了 6 大格：5 × 6 = 30 分，正好半圈 180°。" },
          { type: "choice", level: "挑战", q: "钟面上，时针走过 7，分针指向 11，是几时几分？", options: ["7 时 55 分", "11 时 35 分", "7 时 11 分"], answer: 0,
            hint: "分针指 11：11 个大格，每个大格 5 分", explain: "时针过 7 是 7 时多；分针指 11：5 × 11 = 55 分。所以是 7 时 55 分，再过 5 分就 8 时啦！" },
          { type: "choice", level: "温故", q: "还记得吗：3 时整，时针指向 3、分针指向 12，它们组成的是什么角？", options: ["直角", "比直角小的角", "比直角大的角"], answer: 0,
            hint: "90° 的角有个专门的名字……", explain: "3 时整，两针张开 90°，是直角。学过的角的知识，帮我们读懂了钟面！" },
          { type: "multi", level: "开放", q: "关于钟面，下面哪些说法是对的？（多选，全选对才算对）", options: ["分针走一圈是 60 分", "时针走 1 大格是 5 分", "分针指向 4 表示 20 分", "钟面上 1 大格是 30°"], answer: [0, 2, 3],
            hint: "「时针 1 大格是 5 分」吗？那是谁的规矩？", explain: "时针走 1 大格是 1 小时（30°）；「1 大格 5 分」是分针的规矩，张冠李戴就错啦。其余三条都对。" }
        ]
      },
      {
        type: "review",
        question: "分针指向 6，为什么是 30 分？你能用几种方法说明？",
        ways: [
          { name: "数大格", text: "从 12 到 6 一共 6 个大格，每格 5 分：5 × 6 = 30 分。" },
          { name: "看半圈", text: "分针走一圈是 60 分（360°），走到 6 正好半圈 180°，60 分的一半就是 30 分。" },
          { name: "背口诀", text: "乘法口诀「五六三十」，直接报出 5 × 6 = 30。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：怎么认「7 时 55 分」这样的时刻？先看哪根针，再看哪根针？"
      },
      {
        type: "beauty",
        headline: "为什么是 60 分，不是 100 分？",
        paragraphs: [
          "你有没有觉得奇怪：1 米是 100 厘米，1 千克是 1000 克，为什么 1 小时偏偏是 60 分？",
          "这个约定来自几千年前的古巴比伦人。他们最爱 60 这个数：60 能被 2、3、4、5、6、10、12 整除，平均分东西特别方便。于是他们把圆周分成 360°，把时间分成 60 分——我们今天还在用！",
          "所以每次抬头看钟，你都在和几千年前的数学家「隔空对话」。去博物馆看看巴比伦人的泥板吧！"
        ],
        museum: "his-babylon"
      }
    ]
  },

  /* ================= 单元 11：克和千克 ================= */
  {
    id: "g2u11",
    title: "克和千克",
    subtitle: "掂一掂：1 千克有多重",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "铁和棉花，谁更重？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#fff3e2"/>
          <circle cx="345" cy="36" r="20" fill="#ffc233"/>
          <rect x="196" y="70" width="8" height="112" rx="4" fill="#b25e14"/>
          <rect x="158" y="182" width="84" height="12" rx="6" fill="#b25e14"/>
          <rect x="60" y="62" width="280" height="8" rx="4" fill="#ff8a3d"/>
          <circle cx="200" cy="66" r="8" fill="#ffc233"/>
          <line x1="80" y1="70" x2="80" y2="112" stroke="#b25e14" stroke-width="3"/>
          <path d="M50 112 h60 l-9 22 h-42 z" fill="#ffd9a8" stroke="#e0a92c" stroke-width="2"/>
          <rect x="62" y="86" width="36" height="24" rx="4" fill="#9aa3ad"/>
          <text x="80" y="156" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">1 千克铁</text>
          <line x1="320" y1="70" x2="320" y2="112" stroke="#b25e14" stroke-width="3"/>
          <path d="M290 112 h60 l-9 22 h-42 z" fill="#ffd9a8" stroke="#e0a92c" stroke-width="2"/>
          <circle cx="308" cy="98" r="12" fill="#ffffff" stroke="#ffd9a8" stroke-width="2"/>
          <circle cx="324" cy="92" r="14" fill="#ffffff" stroke="#ffd9a8" stroke-width="2"/>
          <circle cx="338" cy="100" r="11" fill="#ffffff" stroke="#ffd9a8" stroke-width="2"/>
          <text x="320" y="156" font-size="12" fill="#b25e14" font-weight="bold" text-anchor="middle">1000 克棉花</text>
          <text x="200" y="222" font-size="17" fill="#b25e14" font-weight="bold" text-anchor="middle">⚖️ 天平纹丝不动：一样重？！</text>
        </svg>`,
        paragraphs: [
          "太空超市里，奇奇和小兔打赌：「1 千克的铁块和 1000 克的棉花糖，哪个更重？」",
          "小兔喊：「1000 比 1 大多了，棉花糖赢！」奇奇挠头：「不对吧，铁块掂着那么沉，棉花轻飘飘的呀……」",
          "两人把东西往大天平上一放——<b>天平纹丝不动，两边一样平！</b>这到底是怎么回事？"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "点亮这条「数学天平」：10 格，每格代表 100 克。左边放上了 1 千克的苹果，要点亮多少格（多少克）才能让天平平衡？点一点试试看！",
        config: { interactive: true, shape: "bar", parts: 10, target: 10 },
        successText: "10 格全点亮：1000 克！1 千克和 1000 克一样重——它俩本来就是同一份重量的两个名字！"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "这是一条「数学天平」：10 格，每格代表 100 克。", state: { shape: "bar", parts: 10, shaded: 0, showLabel: true } },
          { caption: "一袋小饼干：100 克，点亮 1 格。", state: { shape: "bar", parts: 10, shaded: 1, showLabel: true } },
          { caption: "一袋盐：500 克，点亮 5 格——5 个 100 是 500。", state: { shape: "bar", parts: 10, shaded: 5, showLabel: true } },
          { caption: "再来一袋盐：500 + 500 = 1000 克，10 格全部点亮！", state: { shape: "bar", parts: 10, shaded: 10, showLabel: true } },
          { caption: "1000 克有个新名字：1 千克。1 千克 = 1000 克，名字不同，轻重一样！", state: { shape: "bar", parts: 10, shaded: 10, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把掂出来的感觉，写成数学的语言：",
          "克和千克，是全世界约定好的质量单位。用它们来称，谁的结果都对得上。"
        ],
        formula: "1 千克 = 1000 克",
        keypoints: [
          "「克」量比较轻的东西：一枚硬币约 1 克，一个鸡蛋约 50 克",
          "「千克」量比较重的东西：一个西瓜约 3 千克，小朋友约 25 千克",
          "1000 克和 1 千克一样重——就像 100 厘米和 1 米一样长",
          "比较轻重之前，先把单位换成一样的再比"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "fill", level: "基础", q: "1 千克 = □ 克", answer: "1000",
            hint: "想想天平动画：10 格 × 100 克", explain: "10 个 100 克是 1000 克，正好是 1 千克，所以 1 千克 = 1000 克。" },
          { type: "choice", level: "基础", q: "一个鸡蛋大约重多少？", options: ["50 克", "50 千克", "500 克"], answer: 0,
            hint: "鸡蛋可以放在手心里，很轻", explain: "一个鸡蛋约 50 克。50 千克比小朋友还重，500 克相当于 10 个鸡蛋——都不对。" },
          { type: "choice", level: "变式", q: "1 千克的铁和 1000 克的棉花放在天平两头，哪个更重？", options: ["铁更重", "棉花更重", "一样重"], answer: 2,
            hint: "先换算：1 千克 = □ 克", explain: "1 千克 = 1000 克，两边一样重！铁沉、棉花蓬，那是「感觉」，称出来的重量才是真答案。" },
          { type: "choice", level: "变式", q: "为什么称硬币、药片用「克」，称大米、体重用「千克」？", options: ["因为「克」字笔画少，好写", "轻的东西用克，数字不绕口；重的东西用千克，数字好读好写", "只是习惯，没有什么道理"], answer: 1,
            hint: "如果用克称你的体重，数字会有多长？", explain: "用克称体重得写「25000 克」，太绕口；换成千克就是 25 千克，清爽！单位选得合适，数字才好读。" },
          { type: "choice", level: "挑战", q: "一个西瓜重 2 千克，一个南瓜重 1500 克，哪个更重？", options: ["西瓜", "南瓜", "一样重"], answer: 0,
            hint: "先统一单位：2 千克 = □ 克", explain: "2 千克 = 2000 克，2000 比 1500 大，西瓜更重。比轻重前，先换成一样的单位。" },
          { type: "choice", level: "挑战", q: "你的书包大约有多重？", options: ["3 克", "3 千克", "300 千克"], answer: 1,
            hint: "3 克只有几枚硬币，300 千克比一头小熊还重", explain: "书包大约 3 千克——差不多 3 大瓶矿泉水。3 克太轻，300 千克谁也背不动！" },
          { type: "fill", level: "温故", q: "还记得吗：2 米 = □ 厘米", answer: "200",
            hint: "1 米 = 100 厘米，2 米就是 2 个 100", explain: "2 米 = 200 厘米。长度有进率，质量也有进率：1 千克 = 1000 克，道理是一样的！" },
          { type: "open", level: "开放", q: "回家找一找：什么东西大约重 1 千克？先猜一猜，再用手掂一掂，写下它的名字和你掂起来的感觉。",
            placeholder: "我找到的是……掂起来感觉……",
            reference: "参考想法：一大瓶矿泉水、两袋食盐、四五个苹果，都大约是 1 千克。掂起来有点沉，要用一点力气——记住这个感觉，它就变成了你的「1 千克手感」，以后估重量就靠它啦！" }
        ]
      },
      {
        type: "review",
        question: "1 千克为什么等于 1000 克？你能找出几种理由？",
        ways: [
          { name: "数格子", text: "数学天平每格 100 克，10 格全点亮：10 个 100 是 1000，正好是 1 千克。" },
          { name: "掂一掂", text: "一袋盐 500 克，两袋盐 500 + 500 = 1000 克，正好是 1 千克——去超市亲手掂一掂！" },
          { name: "排一排", text: "1000 枚 1 克的小硬币排起来，和 1 个 1 千克的砝码一样重：1000 个 1，就是 1000。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：1 千克的铁和 1000 克的棉花谁更重？为什么？（可以看看他们会不会上当）"
      },
      {
        type: "beauty",
        headline: "王冠与洗澡水：称出来的真相",
        paragraphs: [
          "两千多年前，国王怀疑金匠在王冠里掺了银子：王冠的重量没错，可里面到底是不是纯金？谁也没法拆开看。",
          "阿基米德躺进澡盆时灵光一闪：同样重量的金子和银子，体积不一样，排开的水也不一样多！他光着身子冲上大街喊「尤里卡（我发现了）！」——王冠的秘密被「称」了出来。",
          "会称、会比、会换算，假的东西就骗不了你。去博物馆听听阿基米德的更多故事吧！"
        ],
        museum: "ppl-archimedes"
      }
    ]
  }
);
