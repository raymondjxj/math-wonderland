/* ============================================================
   数学奇境 · 二年级课程内容 v2
   单元：1 乘法的意义 / 2 长度单位 / 3 角的初步认识
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};

MW.content[2] = {
  grade: 2,
  name: "二年级 · 橙光星球",
  units: [

    /* ================= 单元 1：乘法的意义 ================= */
    {
      id: "g2u1",
      title: "乘法的意义",
      subtitle: "方块阵列的秘密",
      tag: "数感",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "太空农场的数数难题",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#fff3e2"/>
            <circle cx="335" cy="42" r="24" fill="#ffc233"/>
            <rect x="55" y="80" width="210" height="110" rx="12" fill="#8bd450"/>
            <g fill="#ff8a3d">
              <circle cx="90" cy="108" r="11"/><circle cx="128" cy="108" r="11"/><circle cx="166" cy="108" r="11"/><circle cx="204" cy="108" r="11"/>
              <circle cx="90" cy="146" r="11"/><circle cx="128" cy="146" r="11"/><circle cx="166" cy="146" r="11"/><circle cx="204" cy="146" r="11"/>
            </g>
            <text x="285" y="215" font-size="17" fill="#b25e14" font-weight="bold">🥕 橙光农场</text>
          </svg>`,
          paragraphs: [
            "橙光星球上，小农夫奇奇的太空胡萝卜大丰收！它们排着整整齐齐的队伍：每行 4 棵，有 2 行。",
            "奇奇一棵一棵数：4 + 4 = 8 棵，数完了，真轻松。",
            "可农场主忽然说：「明天菜地要扩大到 100 行！」奇奇傻了眼：100 个 4 相加，要加到什么时候呀？<b>一定有个更快的办法……</b>"
          ]
        },
        {
          type: "play",
          widget: "blocks",
          prompt: "先别急着学，动手试试看：帮奇奇摆出 2 行 × 5 列 的胡萝卜方阵！",
          config: { interactive: true, rows: 1, cols: 1, targetRows: 2, targetCols: 5 },
          successText: "摆好了！2 行 5 列，一共 10 块。记住你摆的这个方阵，待会儿有大用处。"
        },
        {
          type: "anim",
          widget: "blocks",
          steps: [
            { caption: "一行 4 块：就是 1 个 4。", state: { rows: 1, cols: 4, showTotal: true } },
            { caption: "两行：2 个 4，4 + 4 = 8。", state: { rows: 2, cols: 4, showTotal: true } },
            { caption: "三行：3 个 4，4 + 4 + 4 = 12。每多一行，就多一个 4。", state: { rows: 3, cols: 4, showTotal: true } },
            { caption: "「3 个 4 相加」说起来太啰嗦，数学家给它造了个新符号：3 × 4 = 12。", state: { rows: 3, cols: 4, showTotal: true } },
            { caption: "把方阵转一转：4 行 3 列。总数变了吗？没有！所以 3 × 4 和 4 × 3 一样多。", state: { rows: 4, cols: 3, showTotal: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把刚才摆的、看的，写成数学的语言：",
            "「几个几相加」——每份一样多的加法，都可以改写成乘法。"
          ],
          formula: "4 + 4 + 4 = 3 × 4 = 12",
          keypoints: [
            "「×」读作「乘」，3 × 4 读作「三乘四」",
            "3 × 4 可以表示 3 个 4 相加，也可以表示 4 个 3 相加",
            "100 行胡萝卜？100 × 4 = 400，一行字就写完！"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "3 个 4 相加，写成乘法是哪个？", options: ["3 + 4", "3 × 4", "4 + 3", "4 − 3"], answer: 1,
              hint: "「几个几相加」就可以写成乘法", explain: "3 个 4 相加 = 3 × 4。" },
            { type: "choice", level: "基础", q: "2 × 6 = ？", options: ["8", "10", "12", "26"], answer: 2,
              hint: "2 个 6 相加：6 + 6 = ？", explain: "6 + 6 = 12，所以 2 × 6 = 12。" },
            { type: "judge", level: "变式", q: "5 + 5 + 5 + 3 可以直接写成 5 × 4。", answer: false,
              hint: "乘法要求「每份一样多」，看看最后那个 3", explain: "前三份是 5，最后一份是 3，不一样多，不能直接写乘法。可以写成 5 × 3 + 3。" },
            { type: "choice", level: "变式", q: "为什么 4 × 5 和 5 × 4 的答案一样多？", options: ["因为乘法口诀表上挨在一起", "因为方阵转一转，总数不变", "只是碰巧一样"], answer: 1,
              hint: "想想动画里方阵转了一下……", explain: "4 行 5 列转过来就是 5 行 4 列，方块一块没少，所以一样多。" },
            { type: "choice", level: "挑战", q: "每只小兔子有 4 条腿，3 只小兔子一共有几条腿？", options: ["7 条", "12 条", "9 条", "43 条"], answer: 1,
              hint: "3 个 4 相加，或者 3 × 4", explain: "3 × 4 = 12，一共有 12 条腿。" },
            { type: "fill", level: "挑战", q: "□ × 4 = 20，□ 里藏着几？", answer: "5",
              hint: "几个 4 相加等于 20？数一数：4、8、12、16、20", explain: "5 个 4 是 20，所以 □ = 5。" }
          ]
        },
        {
          type: "review",
          question: "3 × 4 为什么是 12？你能用几种方法说服别人？",
          ways: [
            { name: "加法", text: "3 × 4 表示 3 个 4 相加：4 + 4 + 4 = 12。" },
            { name: "方阵", text: "摆 3 行 4 列的方块，一块一块数，正好 12 块。" },
            { name: "对称", text: "把方阵转一转，4 × 3 也是 12——同一块地，怎么看都是 12。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么 3 × 4 和 4 × 3 的答案一样？（可以拿积木摆给他们看）"
        },
        {
          type: "beauty",
          headline: "从结绳计数到乘法：人类变聪明的故事",
          paragraphs: [
            "几万年前，古人打猎回来要数猎物，只能一根绳子打一个结、一块骨头刻一道痕——这就是最古老的「加法」。",
            "后来人们发现：一样多的一堆一堆，可以用乘法一口算出来。每发明一种更聪明的记数方法，人类就向前跨一大步。",
            "而乘法排出的整齐方阵，就藏在蜂巢、地砖和巧克力里——去博物馆和实验室亲眼看看吧！"
          ],
          museum: "his-jiesheng",
          lab: "tessellation"
        }
      ]
    },

    /* ================= 单元 2：长度单位：厘米和米 ================= */
    {
      id: "g2u2",
      title: "长度单位：厘米和米",
      subtitle: "一把尺子量世界",
      tag: "数感",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "小桥到底有多长？",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#fff3e2"/>
            <circle cx="335" cy="42" r="24" fill="#ffc233"/>
            <rect x="30" y="140" width="340" height="22" rx="8" fill="#b25e14"/>
            <rect x="30" y="136" width="340" height="8" rx="4" fill="#ff8a3d"/>
            <g fill="none" stroke="#ff8a3d" stroke-width="4">
              <rect x="52" y="104" width="30" height="14" rx="7"/>
              <rect x="92" y="104" width="30" height="14" rx="7"/>
              <rect x="132" y="104" width="30" height="14" rx="7"/>
              <rect x="172" y="104" width="30" height="14" rx="7"/>
              <rect x="212" y="104" width="30" height="14" rx="7"/>
            </g>
            <g>
              <rect x="70" y="176" width="64" height="13" rx="5" fill="#ff8a3d"/>
              <path d="M134 176 l13 6.5 -13 6.5 z" fill="#b25e14"/>
              <rect x="180" y="176" width="64" height="13" rx="5" fill="#ffc233"/>
              <path d="M244 176 l13 6.5 -13 6.5 z" fill="#b25e14"/>
            </g>
            <text x="258" y="112" font-size="15" fill="#b25e14" font-weight="bold">10 个回形针？</text>
            <text x="248" y="215" font-size="17" fill="#b25e14" font-weight="bold">📏 桥面有多长？</text>
          </svg>`,
          paragraphs: [
            "橙光星球要修一座小木桥。小兔自告奋勇去量桥面：「量好了！10 个回形针那么长！」",
            "小熊也量了一遍：「不对不对，明明是 4 支蜡笔那么长！」两个小伙伴争得脸红脖子粗。",
            "桥面明明只有一座，怎么量出两个答案？<b>原来，他们用的「尺子」根本不一样……</b>"
          ]
        },
        {
          type: "play",
          widget: "fraction",
          prompt: "先来造一把大家的「公共尺子」：这条能量尺被分成 10 格，每格是 1 厘米。点亮 7 格，帮奇奇量出一块 7 厘米长的木板！",
          config: { interactive: true, shape: "bar", parts: 10, target: 7 },
          successText: "量好了！7 格就是 7 厘米。用同样的格子量，谁量都是 7 厘米——再也不会吵架啦。"
        },
        {
          type: "anim",
          widget: "grid",
          steps: [
            { caption: "约定好：1 小格就是 1 厘米。全世界都用这一样大的格子。", state: { rows: 1, cols: 10, filled: 1, showCount: true } },
            { caption: "1 厘米、2 厘米、3 厘米……有几小格，就是几厘米。", state: { rows: 1, cols: 10, filled: 3, showCount: true } },
            { caption: "量一量这支蜡笔：正好 7 小格，就是 7 厘米。", state: { rows: 1, cols: 10, filled: 7, showCount: true } },
            { caption: "整条尺子排满：10 小格，10 厘米。", state: { rows: 1, cols: 10, filled: 10, showCount: true } },
            { caption: "10 条这样的尺子排成方阵：10 × 10 = 100 个小格，也就是 100 厘米。", state: { rows: 10, cols: 10, filled: 100, showCount: true } },
            { caption: "100 个 1 厘米接起来，得到一个更大的单位：1 米！量教室、量大树，就用米。", state: { rows: 10, cols: 10, filled: 100, showCount: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把「用小格子量长度」写成数学的语言：",
            "厘米和米，是全世界都约定好的长度单位。用它们量，谁的结果都对得上。"
          ],
          formula: "1 米 = 100 厘米",
          keypoints: [
            "厘米写作 cm，量比较短的东西：橡皮、铅笔、书本",
            "米写作 m，量比较长的东西：教室、大树、小桥",
            "量长度：物体一端对准 0 刻度，另一端指到几，就是几厘米",
            "你的食指宽大约 1 厘米——身上就藏着一把小尺子！"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "量一块橡皮的长度，用哪个单位比较合适？", options: ["厘米", "米"], answer: 0,
              hint: "橡皮很短，用小一点的单位", explain: "橡皮只有几厘米长，用厘米合适。米用来量教室、大树这样长的东西。" },
            { type: "fill", level: "基础", q: "1 米 = □ 厘米", answer: "100",
              hint: "想想方格动画：10 × 10 个小格", explain: "100 个 1 厘米接起来正好是 1 米，所以 1 米 = 100 厘米。" },
            { type: "judge", level: "变式", q: "奇奇说：「我的床长 2 厘米。」", answer: false,
              hint: "2 厘米只有两根食指那么宽", explain: "2 厘米连一块橡皮都不到！床比小朋友还长，应该是 2 米。" },
            { type: "choice", level: "变式", q: "为什么全世界的人都要用同样的长度单位？", options: ["因为尺子长得好看", "不然各量各的，结果对不上，没法一起做事", "只是碰巧大家都喜欢"], answer: 1,
              hint: "想想小兔和小熊为什么吵架", explain: "单位不统一，你说 10 我说 4，桥就要盖歪啦。统一的单位，让大家的结果能对得上。" },
            { type: "choice", level: "变式", q: "铅笔一端对准尺子的 0 刻度，另一端对准 6，铅笔长几厘米？", options: ["5 厘米", "6 厘米", "7 厘米"], answer: 1,
              hint: "从 0 走到 6，走了几小格？", explain: "从 0 到 6 是 6 个 1 厘米，所以铅笔长 6 厘米。" },
            { type: "choice", level: "挑战", q: "蜡笔一端对准刻度 2，另一端对准刻度 9，蜡笔长几厘米？", options: ["9 厘米", "7 厘米", "11 厘米"], answer: 1,
              hint: "这次没从 0 开始！数一数中间有几格：9 − 2 = ?", explain: "从 2 到 9 走了 9 − 2 = 7 格，蜡笔长 7 厘米。不着急报看到的数，数格子才靠谱。" },
            { type: "choice", level: "挑战", q: "一根跳绳长 2 米，一根彩带长 150 厘米，哪根更长？", options: ["跳绳", "彩带", "一样长"], answer: 0,
              hint: "先换成一样的单位：2 米 = □ 厘米", explain: "2 米 = 200 厘米，200 比 150 大，所以跳绳更长。比较长短前，先统一单位。" },
            { type: "fill", level: "温故", q: "还记得吗：4 个 5 相加写成乘法是 4 × 5，答案是几？", answer: "20",
              hint: "5 + 5 + 5 + 5 = ?", explain: "4 × 5 = 20。乘法的本领别丢掉，以后天天要用它！" }
          ]
        },
        {
          type: "review",
          question: "1 米为什么是 100 厘米？你能找出几种理由？",
          ways: [
            { name: "数格子", text: "把 1 厘米画成 1 小格：10 条 10 厘米的尺子排成方阵，10 × 10 = 100，正好 100 格。" },
            { name: "接小棒", text: "100 根 1 厘米的小棒头尾相接，连起来的长度正好是 1 米。" },
            { name: "身上找", text: "小朋友伸开两臂大约 1 米，食指宽大约 1 厘米——大约 100 根食指排成排，才有手臂那么长。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么量东西之前，大家要先约定好用哪个单位？（可以讲讲小兔和小熊吵架的故事）"
        },
        {
          type: "beauty",
          headline: "从手拃到优选法：测量让人类走得更远",
          paragraphs: [
            "几千年前，人们用手掌、脚步量长度，可你的「一步」和我的「一步」总不一样。后来大家约定了统一的单位，金字塔、大桥、飞船才造得出来。",
            "我国数学家华罗庚爷爷，年轻时在小杂货铺里边看店边自学数学。后来他跑遍全国的工厂，教大家用「优选法」：精心测量、巧妙安排，就能又快又省地找到最好的方案。",
            "一把小小的尺子，能量出大大的世界。下次量东西时，你也在做和科学家一样的事！"
          ],
          museum: "ppl-hua"
        }
      ]
    },

    /* ================= 单元 3：角的初步认识 ================= */
    {
      id: "g2u3",
      title: "角的初步认识",
      subtitle: "张开的大小有学问",
      tag: "空间",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "谁的角更大？",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#fff3e2"/>
            <circle cx="340" cy="42" r="24" fill="#ffc233"/>
            <g stroke="#ff8a3d" stroke-width="10" stroke-linecap="round">
              <line x1="60" y1="190" x2="205" y2="190"/>
              <line x1="60" y1="190" x2="193" y2="122"/>
            </g>
            <circle cx="60" cy="190" r="9" fill="#b25e14"/>
            <g stroke="#4d96ff" stroke-width="10" stroke-linecap="round">
              <line x1="255" y1="190" x2="345" y2="190"/>
              <line x1="255" y1="190" x2="300" y2="105"/>
            </g>
            <circle cx="255" cy="190" r="9" fill="#2b2d42"/>
            <text x="92" y="62" font-size="15" fill="#b25e14" font-weight="bold">我的边长！</text>
            <text x="248" y="62" font-size="15" fill="#2b5b9e" font-weight="bold">我张得开！</text>
            <text x="140" y="228" font-size="17" fill="#b25e14" font-weight="bold">📐 谁的角更大？</text>
          </svg>`,
          paragraphs: [
            "角王国里，两个居民吵起来了。长长叉着腰说：「瞧我的两条边，画得那么长，我的角肯定最大！」",
            "大大不服气：「我的边虽然短，可我张得开呀！」它俩争了半天，谁也说服不了谁。",
            "裁判猫头鹰把两个角的开口一比——<b>原来角的大小，根本不看边的长短！</b>"
          ]
        },
        {
          type: "play",
          widget: "angle",
          prompt: "动手感受一下：三角尺上有一个最特别的角——直角。拖动滑块，把这个角摆成标准的直角（90°）！",
          config: { interactive: true, deg: 35, target: 90, tolerance: 4 },
          successText: "摆好了！90° 的直角，方方正正——就像桌角、书角、墙角一样。"
        },
        {
          type: "anim",
          widget: "angle",
          steps: [
            { caption: "角有一个尖尖的顶点，还有两条直直的边。", state: { deg: 60, showArc: true, showLabel: true } },
            { caption: "开口小，角就小：这是 30°。", state: { deg: 30, showArc: true, showLabel: true } },
            { caption: "两条边张成 90°：这个方方正正的角，有个专门的名字——直角。", state: { deg: 90, showArc: true, showLabel: true } },
            { caption: "再张开一些，120°。开口越大，角越大。", state: { deg: 120, showArc: true, showLabel: true } },
            { caption: "把边画长一点，开口不变——角一点儿也没变大！", state: { deg: 120, showArc: true, showLabel: true } },
            { caption: "桌角、书角、三角尺上最大的角都是直角。想知道一个角是不是直角，拿三角尺比一比就知道。", state: { deg: 90, showArc: true, showLabel: true, showProtractor: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把角的样子，写成数学的语言：",
            "比直角小的角尖尖的，比直角大的角张得更开。"
          ],
          formula: "1 个角 = 1 个顶点 + 2 条边",
          keypoints: [
            "角有一个顶点和两条直直的边",
            "角的大小看两条边张开的大小，和边的长短没有关系",
            "三角尺上最大的角是直角，可以用它来检查别的角",
            "直角都一般大：你的书角和我的桌角，一样方"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "一个角有几个顶点、几条边？", options: ["1 个顶点，2 条边", "2 个顶点，2 条边", "1 个顶点，1 条边"], answer: 0,
              hint: "尖尖的一点，伸出两条直边", explain: "角 = 1 个顶点 + 2 条边，缺一个都不叫角。" },
            { type: "judge", level: "基础", q: "把一个角的两条边画得更长，这个角就变大了。", answer: false,
              hint: "想想角王国里吵架的长长", explain: "角的大小只看开口。边画得再长，开口没变，角就没变。" },
            { type: "choice", level: "基础", q: "下面哪个角是直角？", options: ["30° 的角", "90° 的角", "120° 的角"], answer: 1,
              hint: "想想你刚才用滑块摆出的那个方方正正的角", explain: "90° 的角是直角，像桌角、书角一样方方正正。" },
            { type: "choice", level: "变式", q: "用放大镜看一个 30° 的角，角会变大吗？", options: ["会，被放大了", "不会，开口没有变", "会变成直角"], answer: 1,
              hint: "放大镜把边放长放粗了，可两条边张开的程度呢？", explain: "放大镜只是让边看起来更长更粗，开口没有变，所以还是 30°。角的大小只看开口。" },
            { type: "fill", level: "变式", q: "红领巾是一个三角形，它上面藏着 □ 个角。", answer: "3",
              hint: "数一数红领巾有几个尖尖角", explain: "三角形有 3 个角，「三角」这个名字就是这么来的。" },
            { type: "choice", level: "挑战", q: "正方形手帕上有几个直角？", options: ["2 个", "3 个", "4 个"], answer: 2,
              hint: "正方形有 4 个角，拿三角尺挨个比一比", explain: "正方形的 4 个角都是直角，所以手帕方方正正。" },
            { type: "choice", level: "挑战", q: "钟面上 3 时整，时针指向 3，分针指向 12，它们组成的是什么角？", options: ["直角", "比直角小的角", "比直角大的角"], answer: 0,
              hint: "在纸上画一画：一根向上，一根向右", explain: "3 时整，时针和分针正好张开 90°，是直角。9 时整也是哦！" },
            { type: "fill", level: "温故", q: "还记得吗：1 米 = □ 厘米", answer: "100",
              hint: "上节课的方格动画：100 个 1 厘米接起来", explain: "1 米 = 100 厘米。长度的本领和角的本领，都装进你的数学背包啦！" }
          ]
        },
        {
          type: "review",
          question: "角的大小到底由什么决定？你能用几种方法说明白？",
          ways: [
            { name: "摆一摆", text: "用两根小棒做活动角：开口张得越大，角越大；开口越小，角越小。" },
            { name: "比一比", text: "把角的边画长一倍，再拿三角尺去比——开口没变，角一点儿也没变大。" },
            { name: "找一找", text: "桌角、书角、墙角都是直角，它们的边有长有短，开口却一样大。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么长长的边不代表大大的角？（可以拿两根铅笔摆给他们看）"
        },
        {
          type: "beauty",
          headline: "万花筒：藏在镜子里的角",
          paragraphs: [
            "万花筒里其实只有三面小镜子和一些碎纸片。镜子围成特定的角度，光一反射，一朵花就变成六朵、十二朵。",
            "轻轻一转，图案千变万化，每一幅都是整整齐齐的对称图形——这是角度和反射一起变出的魔法。",
            "去实验室亲手转一转万花筒，看看角是怎么指挥图案的！"
          ],
          lab: "kaleidoscope"
        }
      ]
    }
  ]
};
