/* ============================================================
   数学奇境 · 三年级课程内容 v2
   单元：1 多位数乘一位数 / 2 分数的初步认识 / 3 长方形和正方形的面积
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};

MW.content[3] = {
  grade: 3,
  name: "三年级 · 青绿星球",
  units: [

    /* ================= 单元 1：多位数乘一位数 ================= */
    {
      id: "g3u1",
      title: "多位数乘一位数",
      subtitle: "积木阵里的拆数魔法",
      tag: "运算",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "阿绿的彩虹积木墙",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#e3faf7"/>
            <circle cx="52" cy="44" r="24" fill="#ffd166"/>
            <g>
              <line x1="86" y1="104" x2="86" y2="118" stroke="#159e92" stroke-width="4" stroke-linecap="round"/>
              <circle cx="86" cy="100" r="6" fill="#ffd166"/>
              <rect x="56" y="118" width="60" height="46" rx="14" fill="#ffffff" stroke="#2ec4b6" stroke-width="4"/>
              <circle cx="76" cy="138" r="5" fill="#159e92"/><circle cx="96" cy="138" r="5" fill="#159e92"/>
              <path d="M76 150 Q86 158 96 150" stroke="#159e92" stroke-width="3" fill="none" stroke-linecap="round"/>
              <rect x="50" y="168" width="72" height="42" rx="16" fill="#2ec4b6"/>
            </g>
            <g fill="#2ec4b6" stroke="#159e92" stroke-width="2">
              <rect x="176" y="108" width="27" height="22" rx="5"/><rect x="208" y="108" width="27" height="22" rx="5"/><rect x="240" y="108" width="27" height="22" rx="5"/><rect x="272" y="108" width="27" height="22" rx="5"/><rect x="304" y="108" width="27" height="22" rx="5"/><rect x="336" y="108" width="27" height="22" rx="5"/>
              <rect x="176" y="134" width="27" height="22" rx="5"/><rect x="208" y="134" width="27" height="22" rx="5"/><rect x="240" y="134" width="27" height="22" rx="5"/><rect x="272" y="134" width="27" height="22" rx="5"/><rect x="304" y="134" width="27" height="22" rx="5"/><rect x="336" y="134" width="27" height="22" rx="5"/>
              <rect x="176" y="160" width="27" height="22" rx="5"/><rect x="208" y="160" width="27" height="22" rx="5"/><rect x="240" y="160" width="27" height="22" rx="5"/><rect x="272" y="160" width="27" height="22" rx="5"/><rect x="304" y="160" width="27" height="22" rx="5"/><rect x="336" y="160" width="27" height="22" rx="5"/>
            </g>
            <text x="284" y="216" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">每行 12 块，3 行一共多少块？</text>
          </svg>`,
          paragraphs: [
            "欢迎来到青绿星球！小工程师阿绿正在盖积木城，今天的任务：砌一面彩虹墙——每行 12 块积木，一共 3 行。",
            "阿绿一块一块数：1、2、3……忽然一只小鸟飞过，哎呀，数到几来着？全乱啦！",
            "别灰心！12 × 3 看着大，其实藏着一招<b>拆数魔法</b>：把大数拆成小块，口算就能搞定。学会它，再大的乘法也不怕——记住，方法比答案更厉害！"
          ]
        },
        {
          type: "play",
          widget: "blocks",
          prompt: "先别急着算，动手搭一搭：帮阿绿摆出 3 行 × 10 列 的积木墙！",
          config: { interactive: true, rows: 1, cols: 1, targetRows: 3, targetCols: 10 },
          successText: "摆得又整齐又牢固！3 行 10 列，3 × 10 = 30 块。整十数乘一位数，根本难不倒你！"
        },
        {
          type: "anim",
          widget: "blocks",
          steps: [
            { caption: "看，这就是阿绿的墙：3 行，每行 12 块。一共多少块？就是 12 × 3。", state: { rows: 3, cols: 12, showTotal: true } },
            { caption: "可以连加：12 + 12 + 12 = 36。可是加三遍好慢，数大点更慢。", state: { rows: 3, cols: 12, showTotal: true } },
            { caption: "拆数魔法来了！把每行的 12 拆成 10 和 2。先算整十的部分：10 × 3 = 30。", state: { rows: 3, cols: 10, showTotal: true } },
            { caption: "再算零头：2 × 3 = 6。", state: { rows: 3, cols: 2, showTotal: true } },
            { caption: "合起来：30 + 6 = 36。一块积木都没少，所以 12 × 3 = 36！", state: { rows: 3, cols: 12, showTotal: true } },
            { caption: "写成一行：12 × 3 = 10 × 3 + 2 × 3 = 36。列竖式也是这个理：先乘个位，再乘十位。", state: { rows: 3, cols: 12, showTotal: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把刚才摆的、拆的，写成数学的语言：",
            "两位数乘一位数，先把两位数拆成「整十数」和「一位数」，分别乘，再把两个积相加。"
          ],
          formula: "12 × 3 = 10 × 3 + 2 × 3 = 36",
          keypoints: [
            "拆：12 = 10 + 2，整十和零头分开算",
            "乘：10 × 3 = 30，2 × 3 = 6，每一部分都要乘",
            "合：30 + 6 = 36；竖式也一样——相同数位对齐，从个位乘起"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "12 × 3 = ？", options: ["15", "36", "32", "63"], answer: 1,
              hint: "把 12 拆成 10 和 2：10×3 = ？2×3 = ？", explain: "10×3=30，2×3=6，30+6=36，所以 12×3=36。" },
            { type: "choice", level: "基础", q: "20 × 4 = ？", options: ["24", "80", "8", "84"], answer: 1,
              hint: "2 个十乘 4，是几个十？", explain: "2 个十乘 4 是 8 个十，就是 80。" },
            { type: "fill", level: "基础", q: "21 × 4 = □", answer: "84",
              hint: "先算 20×4=80，再算 1×4=4", explain: "80+4=84，所以 21×4=84。" },
            { type: "judge", level: "变式", q: "26 × 3 = 20 × 3 + 6 = 66，这样算对吗？", answer: false,
              hint: "6 是 26 的一部分，它乘 3 了吗？", explain: "漏算了！26 = 20 + 6，两部分都要乘 3：20×3=60，6×3=18，60+18=78。" },
            { type: "choice", level: "变式", q: "为什么 14 × 2 可以拆成 10 × 2 + 4 × 2 来算？", options: ["因为 14 = 10 + 4，拆开后每一部分都乘 2，积木一块没少，总数不变", "因为 10 和 4 比较小，虽然答案会变，但好算", "只是碰巧答案一样"], answer: 0,
              hint: "想想积木阵：拆开后块数变了吗？", explain: "14 块积木分成 10 块和 4 块，一块没少；分别乘 2 再合起来，总数当然不变。这就是拆数魔法的根据。" },
            { type: "choice", level: "挑战", q: "每盒彩笔有 24 支，3 盒一共有多少支？", options: ["27 支", "72 支", "62 支", "92 支"], answer: 1,
              hint: "把 24 拆成 20 和 4：20×3=60，4×3=12", explain: "60+12=72，一共有 72 支。个位满十，要向十位进一。" },
            { type: "fill", level: "挑战", q: "□ × 3 = 63，□ 里藏着几？", answer: "21",
              hint: "想：20 个 3 是 60，再加 1 个 3 正好是 63", explain: "21 个 3 是 63，所以 □ = 21。用拆数倒着想，也能找到答案！" },
            { type: "choice", level: "温故", q: "还记得吗：4 个 6 相加，写成乘法算式是哪个？", options: ["4 + 6", "4 × 6", "6 + 4", "6 − 4"], answer: 1,
              hint: "二年级学过：「几个几相加」就能写成乘法", explain: "4 个 6 相加 = 4 × 6 = 24。乘法就是加法的快捷键！" }
          ]
        },
        {
          type: "review",
          question: "12 × 3 为什么等于 36？你能用几种方法说服别人？",
          ways: [
            { name: "连加法", text: "12 × 3 就是 3 个 12 相加：12 + 12 + 12 = 36。" },
            { name: "摆方块", text: "摆 3 行 12 列的积木阵，一块一块数，正好 36 块。" },
            { name: "拆数法", text: "把 12 拆成 10 和 2：10 × 3 = 30，2 × 3 = 6，30 + 6 = 36。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么 23 × 2 可以拆成 20 × 2 + 3 × 2？（可以拿积木或硬币摆给他们看）"
        },
        {
          type: "beauty",
          headline: "小棍摆出的乘法：中国人的算筹",
          paragraphs: [
            "两千多年前，中国人没有计算器，只有一把小棍——<b>算筹</b>。纵横交错地一摆，再大的乘法也能算出来，乘法口诀「九九歌」就是从那时唱到今天的。",
            "古人还发现一个数字奇迹：把 1~9 填进九宫格，每行、每列、每条对角线加起来都是 15！它叫<b>幻方</b>，传说刻在神龟的背上。",
            "破解幻方靠的正是你今天练的本领：把数拆开、再合起来，多试几种摆法。敢不敢去实验室挑战一下？"
          ],
          museum: "his-suanchou",
          lab: "magic-square"
        }
      ]
    },

    /* ================= 单元 2：分数的初步认识 ================= */
    {
      id: "g3u2",
      title: "分数的初步认识",
      subtitle: "平均分出来的新朋友",
      tag: "数感",
      minutes: 18,
      scenes: [
        {
          type: "story",
          title: "一个月饼怎么分",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#e3faf7"/>
            <circle cx="334" cy="44" r="22" fill="#ffd166"/>
            <circle cx="180" cy="116" r="64" fill="#fff3d6" stroke="#d9a05b" stroke-width="4"/>
            <path d="M180 116 L180 52 A64 64 0 0 1 244 116 Z" fill="#2ec4b6" opacity="0.9"/>
            <line x1="180" y1="52" x2="180" y2="180" stroke="#d9a05b" stroke-width="3"/>
            <line x1="116" y1="116" x2="244" y2="116" stroke="#d9a05b" stroke-width="3"/>
            <g fill="#2ec4b6">
              <circle cx="300" cy="150" r="5"/><circle cx="316" cy="130" r="4"/><circle cx="288" cy="120" r="3"/>
            </g>
            <text x="200" y="218" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">4 个小伙伴分 1 个月饼，每人拿多少？</text>
          </svg>`,
          paragraphs: [
            "青绿星球的中秋节到了！小狐狸分分得到一个圆圆的大月饼，想和好伙伴球球一人一半。",
            "怎么分才公平？一刀下去，两半必须<b>一模一样大</b>。这样的一份是月饼的一半，可是 1、2、3……这些学过的数，谁也写不出「一半」！",
            "咚咚咚，又来了两位朋友！4 个小伙伴分 1 个月饼，每人该拿多少？数不够用了——别急，今天我们一起认识一位新朋友：<b>分数</b>。"
          ]
        },
        {
          type: "play",
          widget: "fraction",
          prompt: "月饼平均切成 4 块啦！点击圆饼涂色，涂出它的 3/4！",
          config: { interactive: true, shape: "circle", parts: 4, target: 3 },
          successText: "涂得又准又漂亮！3/4 就是 3 个 1/4，你已经是分数小达人了。"
        },
        {
          type: "anim",
          widget: "fraction",
          steps: [
            { caption: "把一个月饼平均分成 4 份。注意「平均分」：每份必须一样大。", state: { shape: "circle", parts: 4, shaded: 0, showLabel: true } },
            { caption: "涂其中 1 份：这一份就是月饼的四分之一，写作 1/4。", state: { shape: "circle", parts: 4, shaded: 1, showLabel: true } },
            { caption: "涂 2 份：2 个 1/4，就是 2/4。", state: { shape: "circle", parts: 4, shaded: 2, showLabel: true } },
            { caption: "涂 3 份：3 个 1/4，就是 3/4。", state: { shape: "circle", parts: 4, shaded: 3, showLabel: true } },
            { caption: "4 份全涂上：4/4，正好是整个月饼，也就是 1！", state: { shape: "circle", parts: 4, shaded: 4, showLabel: true } },
            { caption: "不光圆饼能分。一张长纸条平均分成 4 段，涂 3 段，也是 3/4。", state: { shape: "bar", parts: 4, shaded: 3, showLabel: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把涂色的样子写成数学的语言：",
            "分数线下面的数表示「平均分成几份」，上面的数表示「取了其中几份」。"
          ],
          formula: "1/4 + 1/4 + 1/4 = 3/4",
          keypoints: [
            "3/4 读作「四分之三」",
            "下面的 4 叫分母：平均分成了 4 份",
            "上面的 3 叫分子：取了其中的 3 份",
            "前提永远是「平均分」，不平均分就没有分数"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "把一个苹果平均分给 2 个小朋友，每人得到这个苹果的几分之几？", options: ["1/2", "1/4", "2/1", "1/3"], answer: 0,
              hint: "平均分成 2 份，每人拿 1 份", explain: "2 份中的 1 份，写作 1/2。" },
            { type: "choice", level: "基础", q: "3/4 读作什么？", options: ["三分之四", "四分之三", "三四分"], answer: 1,
              hint: "读分数时，先读分母，再读分子", explain: "3/4 读作「四分之三」：先读下面的 4，再读上面的 3。" },
            { type: "fill", level: "基础", q: "一张彩纸平均分成 5 份，涂了 2 份，涂色部分是 2/□，□ 里填几？", answer: "5",
              hint: "分数线下面的数，表示平均分成了几份", explain: "5 份中的 2 份写作 2/5，分母是 5。" },
            { type: "judge", level: "变式", q: "把一个蛋糕分成 4 份，每份就是它的 1/4。", answer: false,
              hint: "这句话少了两个很重要的字……", explain: "少了「平均」！随便分成 4 份，有大有小，不能叫 1/4；只有平均分成 4 份，每份才是 1/4。" },
            { type: "choice", level: "变式", q: "为什么用分数表示涂色部分时，一定要先「平均分」？", options: ["不平均分，每份不一样大，「几份中的 1 份」就说不清是多大", "因为课本这样规定，不用问为什么", "不平均分也行，分数随便怎么用"], answer: 0,
              hint: "如果两块一大一小，「1 份」指的是哪一块？", explain: "分数的家就是「平均分」：每份一样大，才能说清楚「几份中的几份」到底是多少。" },
            { type: "choice", level: "变式", q: "同一个西瓜，它的 1/4 和 1/8 相比，哪一块更大？", options: ["1/4 大", "1/8 大", "一样大"], answer: 0,
              hint: "分的份数越多，每一份反而越……", explain: "平均分成 8 份，每份更小，所以 1/4 > 1/8。分母越大，每一份越小。" },
            { type: "choice", level: "挑战", q: "一根彩带平均剪成 8 段，做手工用掉 3 段，用掉了这根彩带的几分之几？", options: ["3/8", "5/8", "8/3", "3/5"], answer: 0,
              hint: "一共 8 段做分母，用掉的 3 段做分子", explain: "8 段中的 3 段，写作 3/8。" },
            { type: "choice", level: "温故", q: "还记得吗：1 米 = (  ) 厘米？", options: ["10 厘米", "100 厘米", "1000 厘米"], answer: 1,
              hint: "二年级量长度：米尺上排着 100 个 1 厘米的小格", explain: "1 米 = 100 厘米。你的身高 1 米 30 厘米，就是 130 厘米。" }
          ]
        },
        {
          type: "review",
          question: "3/4 到底表示什么？你能用几种方法讲清楚？",
          ways: [
            { name: "分月饼", text: "把 1 个月饼平均分成 4 份，取其中 3 份，就是 3/4。" },
            { name: "数一数", text: "3/4 是 3 个 1/4：1/4 + 1/4 + 1/4 = 3/4。" },
            { name: "涂纸条", text: "把一张长纸条平均分成 4 段，涂 3 段，涂色部分也是 3/4。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么写分数时，「平均分」这三个字一个都不能少？（可以拿一张纸折给他们看）"
        },
        {
          type: "beauty",
          headline: "一半的一半，和一只神秘的眼睛",
          paragraphs: [
            "一棵大树分出 2 根大树枝，每根树枝又分出 2 根小树枝……每一根，差不多都是上一根的 1/2。这样「一半的一半」一直分下去，竟能画出整片森林——数学家叫它<b>分形</b>。",
            "三千多年前的古埃及人写分数更特别：他们只用分子是 1 的分数，还画一只「荷鲁斯之眼」，眼睛的每一部分都代表一个分数。",
            "想亲手分一分、看一看吗？实验室里的分形树等着你，博物馆里还有古老分数的秘密。"
          ],
          museum: "his-egypt",
          lab: "fractal-tree"
        }
      ]
    },

    /* ================= 单元 3：长方形和正方形的面积 ================= */
    {
      id: "g3u3",
      title: "长方形和正方形的面积",
      subtitle: "铺方格铺出的大发现",
      tag: "空间",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "小园丁的铺砖难题",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#e3faf7"/>
            <circle cx="54" cy="44" r="22" fill="#ffd166"/>
            <g stroke="#159e92" stroke-width="2">
              <rect x="80" y="58" width="40" height="40" fill="#2ec4b6"/><rect x="120" y="58" width="40" height="40" fill="#2ec4b6"/><rect x="160" y="58" width="40" height="40" fill="#2ec4b6"/><rect x="200" y="58" width="40" height="40" fill="#2ec4b6"/><rect x="240" y="58" width="40" height="40" fill="#2ec4b6"/><rect x="280" y="58" width="40" height="40" fill="#2ec4b6"/>
              <rect x="80" y="98" width="40" height="40" fill="#2ec4b6"/><rect x="120" y="98" width="40" height="40" fill="#2ec4b6"/><rect x="160" y="98" width="40" height="40" fill="#ffffff"/><rect x="200" y="98" width="40" height="40" fill="#ffffff"/><rect x="240" y="98" width="40" height="40" fill="#ffffff"/><rect x="280" y="98" width="40" height="40" fill="#ffffff"/>
              <rect x="80" y="138" width="40" height="40" fill="#ffffff"/><rect x="120" y="138" width="40" height="40" fill="#ffffff"/><rect x="160" y="138" width="40" height="40" fill="#ffffff"/><rect x="200" y="138" width="40" height="40" fill="#ffffff"/><rect x="240" y="138" width="40" height="40" fill="#ffffff"/><rect x="280" y="138" width="40" height="40" fill="#ffffff"/>
            </g>
            <text x="200" y="216" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">一格一格铺一铺，面积藏不住啦！</text>
          </svg>`,
          paragraphs: [
            "青绿星球要建新花园啦！小园丁苗苗负责给一块长方形草地铺草皮，一块草皮正好盖住一个小方格。",
            "苗苗铺一块、数一块：1、2、3……太阳快下山了，还有一大片没铺完。要是能一下子算出需要多少块，该多好呀！",
            "其实，秘密就藏在方格的排列里。今天我们一起动手铺一铺，亲手找出<b>面积</b>的公式——靠自己发现的公式，才记得最牢！"
          ]
        },
        {
          type: "play",
          widget: "grid",
          prompt: "帮苗苗铺草皮：点击格子，把这块 长 4 格 × 宽 3 格 的长方形铺满！",
          config: { interactive: true, rows: 3, cols: 4 },
          successText: "铺满啦！一共 12 个方格：4 × 3 = 12。你用双手摸到了面积公式的大门！"
        },
        {
          type: "anim",
          widget: "grid",
          steps: [
            { caption: "这是一块长方形草地：长 4 格，宽 3 格。它地面的大小，就叫「面积」。", state: { rows: 3, cols: 4, filled: 0, showCount: true } },
            { caption: "用 1 格的小方砖来量一量：先铺第一行，4 块。", state: { rows: 3, cols: 4, filled: 4, showCount: true } },
            { caption: "再铺第二行，又是 4 块。现在一共 8 块。", state: { rows: 3, cols: 4, filled: 8, showCount: true } },
            { caption: "铺满第三行！一共 12 块——这块草地的面积就是 12 个方格。", state: { rows: 3, cols: 4, filled: 12, showCount: true } },
            { caption: "想一想：每行 4 块，有 3 行，4 × 3 = 12。长 × 宽，一下就算出面积！", state: { rows: 3, cols: 4, filled: 12, showCount: true } },
            { caption: "正方形的长和宽一样长，都叫「边长」。边长 3 格：3 × 3 = 9 个方格。", state: { rows: 3, cols: 3, filled: 9, showCount: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把铺方格的发现，写成数学的公式：",
            "不用一块一块数——知道长和宽，用乘法就能算出面积。"
          ],
          formula: "长方形的面积 = 长 × 宽　（4 × 3 = 12）",
          keypoints: [
            "正方形的面积 = 边长 × 边长",
            "面积要用「面积单位」：平方厘米、平方分米、平方米",
            "边长 1 厘米的小正方形，面积是 1 平方厘米，大约一个指甲盖大",
            "公式不是背出来的，是你铺方格铺出来的！"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "长方形长 5 厘米、宽 2 厘米，它的面积是多少？", options: ["7 平方厘米", "10 平方厘米", "14 平方厘米", "25 平方厘米"], answer: 1,
              hint: "面积 = 长 × 宽", explain: "5 × 2 = 10，面积是 10 平方厘米。（5+2=7 和 (5+2)×2=14 算的都是边线，不是面哦！）" },
            { type: "fill", level: "基础", q: "边长 4 厘米的正方形，面积是 □ 平方厘米。", answer: "16",
              hint: "正方形面积 = 边长 × 边长", explain: "4 × 4 = 16，面积是 16 平方厘米。" },
            { type: "choice", level: "基础", q: "量课桌面的大小，用哪个单位最合适？", options: ["厘米", "米", "平方厘米"], answer: 2,
              hint: "量的是「面」的大小，不是「线」的长短", explain: "厘米和米量长度；量面积要用面积单位，课桌面用平方厘米（或平方分米）来量。" },
            { type: "judge", level: "变式", q: "边长 1 厘米的正方形，它的面积就是 1 平方厘米。", answer: true,
              hint: "1 × 1 = ？", explain: "对！1 × 1 = 1。这正是「平方厘米」这个面积单位的由来。" },
            { type: "choice", level: "变式", q: "为什么长方形的面积可以用「长 × 宽」来算？", options: ["每行能铺「长」那么多个小方格，正好铺「宽」那么多行，乘法一下数完所有格子", "因为公式表上就是这样印的", "因为长和宽加起来太简单，不像公式"], answer: 0,
              hint: "回忆你铺草皮：每行几块？铺了几行？", explain: "铺 4 格一行、共 3 行，4 × 3 = 12 个格子。面积公式就是从数格子里长出来的。" },
            { type: "choice", level: "变式", q: "一个长方形的面积是 12 平方厘米，长是 4 厘米，宽是多少？", options: ["8 厘米", "3 厘米", "48 厘米"], answer: 1,
              hint: "想：几乘 4 等于 12？", explain: "3 × 4 = 12，所以宽是 3 厘米。知道了面积和长，倒着也能找出宽！" },
            { type: "choice", level: "挑战", q: "用 12 个 1 平方厘米的小正方形拼长方形，不管拼成什么形状，面积是多少？", options: ["12 平方厘米", "形状不同，面积也不同", "拼得越细长，面积越大"], answer: 0,
              hint: "12 块小方格，一块没多、一块没少", explain: "怎么拼都是那 12 块方格，面积永远是 12 平方厘米。变的只是形状和周长！" },
            { type: "choice", level: "温故", q: "还记得吗：一块三角板上有几个直角？", options: ["1 个", "2 个", "3 个"], answer: 0,
              hint: "二年级学过角：拿出三角板，用直角比一比每个角", explain: "三角板上有 3 个角，其中只有 1 个是直角。它还能当「直角探测器」用呢！" }
          ]
        },
        {
          type: "review",
          question: "长 4 格、宽 3 格的长方形，面积为什么是 12 个方格？",
          ways: [
            { name: "数一数", text: "一格一格铺满，1、2、3……正好 12 格。" },
            { name: "乘一乘", text: "每行 4 格，有 3 行：4 × 3 = 12，乘法一秒数完。" },
            { name: "分一分", text: "横着切成上下两块，每块 2 行 4 列：6 + 6 = 12。怎么分，总数都不变。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么量面积要用「平方厘米」，而不是「厘米」？（可以在方格纸上画给他们看）"
        },
        {
          type: "beauty",
          headline: "密铺：不留一条缝的魔法",
          paragraphs: [
            "正方形、正三角形、正六边形，都能严丝合缝地铺满整个平面——不留缝，也不重叠。这种本领叫<b>密铺</b>，蜜蜂的蜂巢、浴室的地砖，都是密铺的杰作。",
            "面积的想法还能走得更远：一千五百多年前，祖冲之用正多边形一点一点「铺满」圆，把圆周率算到了小数点后 7 位，领先世界近千年！",
            "一格一格铺下去，能铺出公式，也能铺出奇迹。去实验室亲手铺出你的图案吧！"
          ],
          museum: "ppl-zu",
          lab: "tessellation"
        }
      ]
    }
  ]
};
