/* ============================================================
   数学奇境 · 四年级课程内容 v2
   单元：1 大数的认识 / 2 角的度量 / 3 运算定律·乘法分配律
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};

MW.content[4] = {
  grade: 4,
  name: "四年级 · 蔚蓝星球",
  units: [

    /* ================= 单元 1：大数的认识 ================= */
    {
      id: "g4u1",
      title: "大数的认识",
      subtitle: "爬上数位阶梯，从十数到亿",
      tag: "数感",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "海洋调查队的烦恼",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
            <circle cx="340" cy="42" r="24" fill="#ffd166"/>
            <path d="M0 200 Q50 186 100 200 T200 200 T300 200 T400 200 V240 H0 Z" fill="#bcd8ff"/>
            <path d="M0 214 Q50 201 100 214 T200 214 T300 214 T400 214 V240 H0 Z" fill="#4d96ff" opacity=".55"/>
            <g>
              <rect x="36" y="170" width="56" height="22" rx="6" fill="#bcd8ff"/>
              <rect x="92" y="140" width="56" height="52" rx="6" fill="#93beff"/>
              <rect x="148" y="110" width="56" height="82" rx="6" fill="#6ba3ff"/>
              <rect x="204" y="80" width="56" height="112" rx="6" fill="#4d96ff"/>
              <rect x="260" y="50" width="56" height="142" rx="6" fill="#2f7df0"/>
            </g>
            <g font-size="15" font-weight="bold" text-anchor="middle">
              <text x="64" y="186" fill="#1c4b8f">个</text>
              <text x="120" y="156" fill="#1c4b8f">十</text>
              <text x="176" y="126" fill="#ffffff">百</text>
              <text x="232" y="96" fill="#ffffff">千</text>
              <text x="288" y="66" fill="#ffffff">万</text>
            </g>
            <line x1="288" y1="50" x2="288" y2="18" stroke="#2b2d42" stroke-width="3"/>
            <path d="M288 18 L320 26 L288 34 Z" fill="#ff6b6b"/>
            <text x="332" y="30" font-size="14" fill="#d94f5c" font-weight="bold">亿</text>
            <g fill="#ff8a3d">
              <ellipse cx="56" cy="224" rx="9" ry="5"/><path d="M47 224 L39 219 L39 229 Z"/>
              <ellipse cx="104" cy="228" rx="9" ry="5"/><path d="M95 228 L87 223 L87 233 Z"/>
            </g>
            <text x="150" y="30" font-size="16" fill="#1c4b8f" font-weight="bold" text-anchor="middle">数位阶梯，越爬越高！</text>
          </svg>`,
          paragraphs: [
            "蔚蓝星球的大海深处，住着一支海洋调查队。小海豚蓝蓝今天的任务是：数一数沙丁鱼群一共有多少条！",
            "一小群鱼有 100 条。可鱼群一群连着一群，10 群、100 群……蓝蓝数到 9999 就头晕了：「再多数 1 条，是多少呀？」",
            "别急！数学里有一架<b>数位阶梯</b>：个、十、百、千，再往上是万，还有十万、百万、千万、亿。今天我们一起爬上这架阶梯——再大的数，也吓不倒我们！"
          ]
        },
        {
          type: "play",
          widget: "blocks",
          prompt: "先动手感受一下：蓝蓝已经摆好 5 行 10 列，点「＋」把它加成 10 行 × 10 列，看看「一百」有多大！",
          config: { interactive: true, rows: 5, cols: 10, targetRows: 10, targetCols: 10 },
          successText: "10 × 10 = 100！你亲手摆出了一百块。记住它的样子——待会儿要把它变得更大、更大。"
        },
        {
          type: "anim",
          widget: "blocks",
          steps: [
            { caption: "先摆一行：10 块方块排整齐。10 个一，是「十」。", state: { rows: 1, cols: 10, showTotal: true } },
            { caption: "一行一行叠上去：10 行 10 列的大方阵，10 × 10 = 100！10 个十，是「一百」。", state: { rows: 10, cols: 10, showTotal: true } },
            { caption: "现在闭上眼睛想象：10 个这样的大方阵排成一排——10 个一百，是「一千」！", state: { rows: 10, cols: 10, showTotal: true } },
            { caption: "再想象 10 个一千叠在一起：那是「一万」！数位阶梯爬到这里：个、十、百、千、万。", state: { rows: 10, cols: 10, showTotal: true } },
            { caption: "阶梯还在向上：十万、百万、千万、亿！每 4 个数位分一级：个级、万级、亿级。", state: { rows: 10, cols: 10, showTotal: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把刚才摆的、想象的，写成数学的语言：",
            "每满 10 个，就向上爬一级、换一个更大的计数单位——这叫做「十进制计数法」。"
          ],
          formula: "10 个十 = 一百　10 个一百 = 一千　10 个一千 = 一万",
          keypoints: [
            "数位顺序：个、十、百、千、万、十万、百万、千万、亿",
            "每 4 个数位分一级：个级、万级、亿级",
            "读大数先分级：3004┊0000 读作「三千零四万」"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "10 个一百是多少？", options: ["一百", "一千", "一万", "一亿"], answer: 1,
              hint: "想一想数位阶梯：百的上面一级是什么？", explain: "10 个一百是一千。满 10 个就向上一级。" },
            { type: "fill", level: "基础", q: "从右边起，第 5 位是＿＿位。", answer: "万",
              hint: "伸出手指数一数：个、十、百、千……", explain: "个(1)、十(2)、百(3)、千(4)、万(5)，第 5 位是万位。" },
            { type: "judge", level: "变式", q: "每相邻两个计数单位之间的进率都是 10。", answer: true,
              hint: "10 个一是十，10 个十是百，10 个百是千……", explain: "对！满十就向前进一，这就是「十进制计数法」。" },
            { type: "choice", level: "变式", q: "30040000 读作什么？", options: ["三千零四万", "三千万四千", "三千零四十万", "三亿零四万"], answer: 0,
              hint: "先四位分级：3004┊0000，万级是 3004", explain: "30040000 是 3004 个万，读作三千零四万；个级末尾的 0 都不读。" },
            { type: "fill", level: "变式", q: "10 个一万是＿＿。", answer: ["十万", "100000"],
              hint: "万再往上爬一级，会到哪儿？", explain: "10 个一万是十万，写成数字是 100000。" },
            { type: "choice", level: "挑战", q: "1 亿要写成 1 后面跟着 8 个 0，这是为什么？", options: ["亿位是从个位起第 9 位，最高位写 1，后面 8 个数位都要用 0 占位", "因为 8 是吉利数字，古人定的", "随便写几个 0 都行，记住就可以"], answer: 0,
              hint: "数一数：从个位爬到亿位，一共要爬几级？", explain: "个、十、百、千、万、十万、百万、千万、亿——亿是第 9 位，所以 1 后面有 8 个 0：100000000。" },
            { type: "fill", level: "挑战", q: "比 99999 大 1 的数是＿＿。", answer: "100000",
              hint: "99999 + 1，每一位都满十进一", explain: "99999 + 1 = 100000，它是最小的六位数。" },
            { type: "choice", level: "温故", q: "还记得吗：二年级学的乘法，4 × 3 表示什么？", options: ["4 个 3 相加（也表示 3 个 4 相加）", "4 + 3", "4 − 3"], answer: 0,
              hint: "「几个几相加」就可以写成乘法", explain: "4 × 3 = 3 + 3 + 3 + 3 = 12。今天我们就是靠 10 × 10 这样的乘法爬上数位阶梯的！" }
          ]
        },
        {
          type: "review",
          question: "数位阶梯为什么「满十进一」？一亿到底有多大？",
          ways: [
            { name: "摆方块", text: "10 块一排是十，10 排 10 列是 100：10 × 10 = 100。每满 10 个，就打包换成更大的计数单位。" },
            { name: "爬阶梯", text: "个、十、百、千、万、十万、百万、千万、亿，一级一级往上爬，每一级都是前一级的 10 倍。" },
            { name: "生活尺", text: "一小碗米大约 1 万粒，一辆大卡车能装大约 1 亿粒米；你的头发大约有 10 万根。大数也能「看得见」。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么 10 个一百是一千？再考考他们：10 个一万是多少？"
        },
        {
          type: "beauty",
          headline: "越大的数，花纹越神秘",
          paragraphs: [
            "一万粒米装满一小碗，一亿粒米能装满一辆大卡车！大数并不遥远：头发约 10 万根，天上的星星、沙滩的沙粒，都要用大数来数。",
            "这么大的数能写得下，全靠「0 占位」的发明——博物馆里藏着这段传奇。数学家还把自然数排成螺旋，发现质数悄悄连成斜线，数越大，图案越惊人！"
          ],
          lab: "prime-spiral",
          museum: "his-zero"
        }
      ]
    },

    /* ================= 单元 2：角的度量 ================= */
    {
      id: "g4u2",
      title: "角的度量",
      subtitle: "量角器：半个圆里的 180 格",
      tag: "空间",
      minutes: 15,
      scenes: [
        {
          type: "story",
          title: "灯塔小卫士的命令",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
            <circle cx="58" cy="42" r="18" fill="#ffd166"/>
            <path d="M0 190 Q50 176 100 190 T200 190 T300 190 T400 190 V240 H0 Z" fill="#4d96ff" opacity=".6"/>
            <ellipse cx="110" cy="204" rx="72" ry="18" fill="#8aa7c7"/>
            <path d="M88 196 L97 92 L123 92 L132 196 Z" fill="#ffffff" stroke="#2f7df0" stroke-width="3"/>
            <path d="M93 162 L127 162 L125 146 L95 146 Z" fill="#4d96ff"/>
            <path d="M96 128 L124 128 L122 112 L98 112 Z" fill="#4d96ff"/>
            <rect x="92" y="64" width="36" height="28" rx="6" fill="#2f7df0"/>
            <circle cx="110" cy="78" r="9" fill="#ffd166"/>
            <path d="M88 64 L110 46 L132 64 Z" fill="#ff6b6b"/>
            <path d="M119 78 L198 10 L234 54 Z" fill="#ffd166" opacity=".5"/>
            <path d="M168 78 A58 58 0 0 0 154 41" stroke="#ff8a3d" stroke-width="4" fill="none" stroke-linecap="round"/>
            <text x="182" y="52" font-size="15" fill="#d96a00" font-weight="bold">60°</text>
            <path d="M298 198 L338 198 L330 211 L306 211 Z" fill="#8a5a2b"/>
            <line x1="318" y1="198" x2="318" y2="170" stroke="#8a5a2b" stroke-width="3"/>
            <path d="M318 170 L338 196 L318 196 Z" fill="#ffffff"/>
            <rect x="108" y="214" width="184" height="24" rx="12" fill="#ffffff" opacity=".88"/>
            <text x="200" y="231" font-size="15" fill="#1c4b8f" font-weight="bold" text-anchor="middle">灯塔小卫士，出动！</text>
          </svg>`,
          paragraphs: [
            "蔚蓝星球的夜晚，灯塔小卫士阿浪守在高高的塔上。忽然，对讲机响了：「渔船迷路了！请把探照灯向右转 60 度！」",
            "60 度？「度」是什么呀？阿浪低头一看，塔上挂着一件神奇的工具——半圆形的<b>量角器</b>，上面密密麻麻刻着 180 个小格。",
            "原来，角的大小可以用「度」来量，就像用厘米量长度一样！学会量角器，阿浪就能把灯光准确地转向大海的每一个角落。"
          ]
        },
        {
          type: "play",
          widget: "angle",
          prompt: "小卫士，先试试手感：把探照灯摆到 60°！拖动滑块，看准量角器上的刻度，再点「我摆好了」。",
          config: { interactive: true, deg: 20, target: 60, tolerance: 3, showProtractor: true },
          successText: "精准转向 60°！迷路的渔船看到灯光啦。记住这个手感，下面我们弄清它背后的道理。"
        },
        {
          type: "anim",
          widget: "angle",
          steps: [
            { caption: "这个角到底张开了多大？光用眼睛猜，可说不准。", state: { deg: 40, showArc: true, showLabel: true, showProtractor: false } },
            { caption: "请来量角器！它是半个圆，被平均分成 180 份，每一份就是 1 度，记作 1°。", state: { deg: 40, showArc: true, showLabel: true, showProtractor: true } },
            { caption: "量角第一步：量角器的中心对准角的顶点，0° 刻度线对准角的一条边。", state: { deg: 40, showArc: true, showLabel: true, showProtractor: true } },
            { caption: "再看另一条边指着刻度几：40！这个角就是 40°。", state: { deg: 40, showArc: true, showLabel: true, showProtractor: true } },
            { caption: "换一个胖胖的角再量一次：另一条边指着 120，它就是 120°。", state: { deg: 120, showArc: true, showLabel: true, showProtractor: true } },
            { caption: "张到最开，两条边成一条直线：180°！它有个特别的名字——平角。", state: { deg: 180, showArc: true, showLabel: true, showProtractor: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把量角器上的发现，写成数学的语言：",
            "把半圆平均分成 180 份，每一份所对的角就是 1 度，记作 1°。"
          ],
          formula: "角的单位：度（°）｜直角 = 90°　平角 = 180°",
          keypoints: [
            "量角三步：中心对顶点，0° 线对一边，再看另一边读刻度",
            "角的大小只看两条边张开的大小，和边的长短无关",
            "比直角小的角叫锐角；比直角大、比平角小的角叫钝角"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "量角的大小，要用什么工具？", options: ["直尺", "量角器", "天平"], answer: 1,
              hint: "它的形状是半个圆", explain: "量角器是量角的专用工具。" },
            { type: "fill", level: "基础", q: "直角是＿＿°。", answer: "90",
              hint: "想想墙角、课本角那样方方正正的角", explain: "直角 = 90°。" },
            { type: "choice", level: "变式", q: "用量角器量角时，量角器的中心要对准角的哪里？", options: ["顶点", "一条边的中间", "随便哪里都行"], answer: 0,
              hint: "回忆量角三步：点对点的第一步", explain: "中心对准顶点，0° 刻度线对准一条边，读数才准确。" },
            { type: "judge", level: "变式", q: "把一个 30° 的角放在放大镜下看，角就变成了 60°。", answer: false,
              hint: "放大镜把边变长了，可两条边张开的程度变了吗？", explain: "角的大小只看张口。放大镜改变不了张口，所以还是 30°。" },
            { type: "choice", level: "挑战", q: "为什么角的大小和边的长短没有关系？", options: ["角的大小只看两条边张开的大小；边画得再长，张口不变，角就不变", "因为尺子量不出边的长度", "其实有关系，只是眼睛看不出来"], answer: 0,
              hint: "角是「张开的大小」，不是「边的长度」", explain: "边是射线，可以无限延长；张口不变，角度就不变。" },
            { type: "fill", level: "挑战", q: "1 个平角 = ＿＿ 个直角。", answer: "2",
              hint: "平角 180°，直角 90°，180 里面有几个 90？", explain: "180° ÷ 90° = 2，所以 1 平角 = 2 直角。" },
            { type: "choice", level: "挑战", q: "两个直角拼在一起（顶点重合、共用一条边），拼成的是什么角？", options: ["平角", "直角", "钝角"], answer: 0,
              hint: "90° + 90° = ？", explain: "90° + 90° = 180°，正好是一个平角。" },
            { type: "choice", level: "温故", q: "还记得吗：二年级就认识过它——三角尺上最大的那个角，是什么角？", options: ["直角", "锐角", "钝角"], answer: 0,
              hint: "三角尺上有一个方方正正的角", explain: "三角尺上最大的角是直角。今天我们知道了：直角正好是 90°。" }
          ]
        },
        {
          type: "review",
          question: "怎样用量角器准确量出一个角？",
          ways: [
            { name: "三步量法", text: "① 中心对准顶点；② 0° 刻度线对准一条边；③ 看另一条边指着刻度几，读出度数。" },
            { name: "直角参照", text: "先和 90° 的直角比一比：比直角小是锐角，比直角大是钝角。先估一估，再量一量，读数心里就有底。" },
            { name: "动手摆一摆", text: "用滑块把角摆到 60°，再和量角器上的刻度核对——手感和刻度对上了，才是真学会。" }
          ],
          ask: "给爸爸妈妈表演一下：用手臂张开摆出 30°、90°、180°，再讲讲为什么放大镜不能把角「放大」。"
        },
        {
          type: "beauty",
          headline: "120°：蜜蜂的角度密码",
          paragraphs: [
            "蜂巢的每个小房间都是正六边形，每个角正好 120°。三个六边形拼在一起：120° × 3 = 360°，严丝合缝，一点空隙都不留！",
            "为什么一周是 360°？这要从几千年前巴比伦人的星空观测说起——博物馆里有答案。而用图形把平面铺满的「密铺」，秘密也全藏在角度里，去实验室亲手铺一铺吧！"
          ],
          lab: "tessellation",
          museum: "his-babylon"
        }
      ]
    },

    /* ================= 单元 3：运算定律·乘法分配律 ================= */
    {
      id: "g4u3",
      title: "乘法分配律",
      subtitle: "拆开算和合着算，一样多",
      tag: "运算",
      minutes: 18,
      scenes: [
        {
          type: "story",
          title: "海洋运动会入场式",
          shots: [
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
                <rect x="30" y="30" width="220" height="180" rx="14" fill="#ffffff"/>
                <g id="banner">
                  <rect x="86" y="18" width="228" height="32" rx="16" fill="#4d96ff"/>
                  <text x="200" y="40" text-anchor="middle" font-size="17" fill="#ffffff" font-weight="bold">🌊 海洋运动会</text>
                </g>
                <g id="dolphins" fill="#4d96ff">
                  <g transform="translate(66,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                </g>
                <g fill="#bcd8ff">
                  <circle cx="284" cy="82" r="4"/><circle cx="312" cy="116" r="3"/><circle cx="292" cy="152" r="5"/><circle cx="326" cy="70" r="3.4"/>
                </g>
              </svg>`,
              callout: { text: "运动会开幕啦！", pos: "br" },
              narration: "蔚蓝星球要开海洋运动会啦！听，音乐响了——海豚队最先游进会场！",
              ms: 4200
            },
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
                <rect x="30" y="30" width="220" height="180" rx="14" fill="#ffffff"/>
                <g id="dolphins" fill="#4d96ff">
                  <g transform="translate(66,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                </g>
                <g fill="#bcd8ff">
                  <circle cx="284" cy="82" r="4"/><circle cx="312" cy="116" r="3"/><circle cx="292" cy="152" r="5"/>
                </g>
              </svg>`,
              zoom: { ox: 34, oy: 40, scale: 1.3 },
              focus: "#dolphins",
              callout: { text: "3 行 4 列：3 × 4 = 12 只", pos: "bl" },
              narration: "海豚队排着整齐的队伍：3 行，每行 4 只。3 乘 4，一共 12 只！",
              ms: 4400
            },
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
                <rect x="30" y="30" width="220" height="180" rx="14" fill="#ffffff"/>
                <g id="dolphins" fill="#4d96ff">
                  <g transform="translate(66,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                </g>
                <line x1="44" y1="148" x2="238" y2="148" stroke="#9db8d9" stroke-width="2" stroke-dasharray="6 5"/>
                <g id="starfish" fill="#ff8a3d">
                  <path transform="translate(66,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(114,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(162,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(210,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(66,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(114,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(162,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(210,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                </g>
                <g id="turtle">
                  <ellipse cx="300" cy="190" rx="17" ry="11" fill="#57cc99"/>
                  <circle cx="318" cy="183" r="6" fill="#57cc99"/>
                  <circle cx="320" cy="181" r="1.4" fill="#fff"/>
                  <circle cx="292" cy="148" r="16" fill="#ffffff" stroke="#4d96ff" stroke-width="3"/>
                  <text x="292" y="155" text-anchor="middle" font-size="16">❓</text>
                </g>
              </svg>`,
              zoom: { ox: 40, oy: 75, scale: 1.2 },
              focus: "#starfish",
              callout: { text: "两队一共有多少只？", pos: "tr" },
              narration: "海星队紧跟着入场：2 行，每行也是 4 只！裁判小海龟挠挠头：两队一共有多少只？",
              ms: 4800
            },
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#eaf4ff"/>
                <rect x="30" y="30" width="220" height="180" rx="14" fill="#ffffff"/>
                <g id="dolphins" fill="#4d96ff">
                  <g transform="translate(66,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,62)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,96)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(66,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(114,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(162,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                  <g transform="translate(210,130)"><ellipse rx="13" ry="8"/><path d="M-12 0 L-21 -6 L-21 6 Z"/><circle cx="6" cy="-2" r="1.6" fill="#fff"/></g>
                </g>
                <line x1="44" y1="148" x2="238" y2="148" stroke="#9db8d9" stroke-width="2" stroke-dasharray="6 5"/>
                <g id="starfish" fill="#ff8a3d">
                  <path transform="translate(66,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(114,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(162,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(210,164)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(66,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(114,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(162,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                  <path transform="translate(210,196)" d="M0 -10 L2.9 -3.1 L10 -3.1 L4.5 1.9 L6.8 8.1 L0 4.5 L-6.8 8.1 L-4.5 1.9 L-10 -3.1 L-2.9 -3.1 Z"/>
                </g>
                <g id="turtle">
                  <ellipse cx="300" cy="190" rx="17" ry="11" fill="#57cc99"/>
                  <circle cx="318" cy="183" r="6" fill="#57cc99"/>
                  <circle cx="320" cy="181" r="1.4" fill="#fff"/>
                  <circle cx="292" cy="148" r="16" fill="#ffffff" stroke="#4d96ff" stroke-width="3"/>
                  <text x="292" y="155" text-anchor="middle" font-size="16">❓</text>
                </g>
              </svg>`,
              focus: "#turtle",
              callout: { text: "合着算和分开算，一样多吗？", pos: "tl" },
              narration: "把队伍合起来，是 5 个 4；分开算，是 3 个 4 加 2 个 4。两种算法，会一样多吗？",
              ms: 5200
            }
          ]
        },
        {
          type: "play",
          widget: "blocks",
          prompt: "亲手摆一摆：现在是海豚队的 3 行 4 列，点「＋」补上海星队的 2 行，变成 5 行 × 4 列，盯住总数怎么变！",
          config: { interactive: true, rows: 3, cols: 4, targetRows: 5, targetCols: 4 },
          successText: "摆好了！3 × 4 添上 2 × 4，正好等于 5 × 4 = 20。你亲手摸到了乘法分配律，接下来把它看清楚。"
        },
        {
          type: "anim",
          widget: "blocks",
          steps: [
            { caption: "海豚队入场：3 行 4 列。看，一行一种颜色：橙、青、蓝。3 × 4 = 12 只。", state: { rows: 3, cols: 4, showTotal: true } },
            { caption: "海星队跟上：再添 2 行——紫的、粉的。队伍变成 5 行 4 列。", state: { rows: 5, cols: 4, showTotal: true } },
            { caption: "先合起来算：一个 5 行 4 列的大方阵，(3 + 2) × 4 = 5 × 4 = 20。", state: { rows: 5, cols: 4, showTotal: true } },
            { caption: "再分开算：海豚队 3 行，3 × 4 = 12……", state: { rows: 3, cols: 4, showTotal: true } },
            { caption: "……加上海星队的 2 × 4 = 8，12 + 8 = 20。两种算法，一样多！", state: { rows: 5, cols: 4, showTotal: true } },
            { caption: "这就是乘法分配律：(a + b) × c = a × c + b × c。拆开算，总数不变！", state: { rows: 5, cols: 4, showTotal: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把方阵里的发现，写成运算定律：",
            "两个数的和乘一个数，可以先把它们分别乘这个数，再相加——结果不变。"
          ],
          formula: "(a + b) × c = a × c + b × c",
          keypoints: [
            "括号里的每个数都要和 c 乘一乘，一个都不能漏",
            "例子：(3 + 2) × 4 = 3 × 4 + 2 × 4 = 12 + 8 = 20",
            "正着用：拆开算更顺手；反着用：合并凑整更快捷"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "(3 + 2) × 4 = ？", options: ["9", "14", "20", "24"], answer: 2,
              hint: "先算括号里的 3 + 2", explain: "(3 + 2) × 4 = 5 × 4 = 20。" },
            { type: "judge", level: "基础", q: "(3 + 2) × 4 和 3 × 4 + 2 × 4 的结果一样大。", answer: true,
              hint: "想想刚才的方阵：合着数是 5 行，分开数再加呢？", explain: "一样大！这正是乘法分配律。" },
            { type: "fill", level: "变式", q: "6 × (10 + 4) = 6 × 10 + 6 × □，□ 里是几？", answer: "4",
              hint: "括号里的每一个数，都要和 6 乘一乘", explain: "10 和 4 都要乘 6，所以 □ = 4。" },
            { type: "choice", level: "变式", q: "为什么 (3 + 2) × 4 和 3 × 4 + 2 × 4 一定相等？", options: ["它们数的是同一片方阵：合着数是 5 行，分开数是 3 行加 2 行，一块不多一块不少", "因为计算器算出来一样", "只是碰巧，换两个数就不等了"], answer: 0,
              hint: "回到那片方阵想一想", explain: "合着数、分开数，方块的总数不变——这就是分配律的道理，对任何数都成立。" },
            { type: "fill", level: "挑战", q: "巧算：25 × (40 + 4) = 25 × 40 + 25 × 4 = ＿＿。", answer: "1100",
              hint: "25 × 40 = 1000，25 × 4 = 100", explain: "1000 + 100 = 1100。拆开算，比硬算 25 × 44 快多啦！" },
            { type: "choice", level: "挑战", q: "一张桌子 45 元、一把椅子 25 元，买 4 套桌椅一共多少钱？", options: ["(45 + 25) × 4 = 280 元", "45 × 4 + 25 = 205 元", "45 + 25 × 4 = 145 元"], answer: 0,
              hint: "一套是 (45 + 25) 元，4 套呢？", explain: "(45 + 25) × 4 = 70 × 4 = 280；用分配律验算：45 × 4 + 25 × 4 = 180 + 100 = 280。" },
            { type: "fill", level: "挑战", q: "99 × 12 + 12 = ＿＿ × 12，所以得 1200。", answer: "100",
              hint: "后面的 12 可以看成 1 × 12，合起来是几个 12？", explain: "99 个 12 加 1 个 12 是 100 个 12，100 × 12 = 1200。这是分配律倒着用！" },
            { type: "choice", level: "温故", q: "还记得吗：三年级学的面积——长 5 厘米、宽 4 厘米的长方形，面积是多少？", options: ["20 平方厘米", "9 平方厘米", "18 平方厘米"], answer: 0,
              hint: "长方形面积 = 长 × 宽", explain: "5 × 4 = 20 平方厘米。方阵、面积、分配律，它们其实是同一件事！" }
          ]
        },
        {
          type: "review",
          question: "(3 + 2) × 4 为什么等于 3 × 4 + 2 × 4？",
          ways: [
            { name: "方阵数一数", text: "合着数：5 行 4 列共 20 块；分开数：3 × 4 = 12，2 × 4 = 8，12 + 8 = 20。同一片方阵，怎么数都是 20。" },
            { name: "乘法的意义", text: "(3 + 2) × 4 是 5 个 4；3 × 4 是 3 个 4，2 × 4 是 2 个 4。5 个 4 正好拆成 3 个 4 加 2 个 4。" },
            { name: "面积拼一拼", text: "一个长 (3 + 2)、宽 4 的大长方形，沿虚线剪成两块小长方形：5 × 4 和 3 × 4 + 2 × 4，面积不变。" }
          ],
          ask: "用积木给爸爸妈妈演示一遍分配律，再出一道巧算题考考他们：25 × (40 + 4) 怎样算最快？"
        },
        {
          type: "beauty",
          headline: "数字排队的纪律：幻方",
          paragraphs: [
            "乘法分配律告诉我们：换种方法算，总数不会变。数学里还有许多「怎么变都不变」的奇迹。",
            "把 1 到 9 填进九宫格，让每行、每列、每条对角线的和全都相等——这就是流传了几千年的「幻方」。去实验室挑战一下，感受数字的纪律之美！"
          ],
          lab: "magic-square"
        }
      ]
    }
  ]
};
