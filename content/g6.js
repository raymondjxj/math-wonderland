/* ============================================================
   数学奇境 · 六年级课程内容 v2（对齐人教版六年级上册）
   单元：1 分数乘法 / 2 圆的认识 / 3 比和百分数
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};

MW.content[6] = {
  grade: 6,
  name: "六年级 · 玫瑰星球",
  units: [

    /* ================= 单元 1：分数乘法 ================= */
    {
      id: "g6u1",
      title: "分数乘法",
      subtitle: "玫瑰卷里的一半的一半",
      tag: "运算",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "朵朵的玫瑰卷",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#fdeef7"/>
            <circle cx="344" cy="40" r="22" fill="#ffd6ec"/>
            <g transform="translate(52,52)">
              <circle r="16" fill="#f15bb5"/>
              <circle r="9" fill="#ff8ac8"/>
              <circle r="4" fill="#ffd6ec"/>
              <path d="M0 16 Q-4 34 -10 42" stroke="#3a9e6e" stroke-width="4" fill="none" stroke-linecap="round"/>
              <ellipse cx="-13" cy="33" rx="8" ry="4" fill="#3a9e6e" transform="rotate(-30 -13 33)"/>
            </g>
            <text x="82" y="58" font-size="16" fill="#b03a82" font-weight="bold">朵朵的玫瑰卷</text>
            <g stroke="#2b2d42" stroke-width="3">
              <rect x="60" y="100" width="70" height="56" fill="#f15bb5"/>
              <rect x="130" y="100" width="70" height="56" fill="#f15bb5"/>
              <rect x="200" y="100" width="70" height="56" fill="#f15bb5"/>
              <rect x="270" y="100" width="70" height="56" fill="#fff"/>
            </g>
            <text x="200" y="86" font-size="17" fill="#b03a82" font-weight="bold" text-anchor="middle">平均分成 4 份，装走 3 份 = 3/4</text>
            <text x="200" y="196" font-size="15" fill="#5c607a" text-anchor="middle">那「3/4 的一半」又是多少呢？</text>
          </svg>`,
          paragraphs: [
            "玫瑰星球上住着小园丁朵朵。她种的玫瑰会发光，还能做成香喷喷的玫瑰卷。",
            "今天她烤了一条大大的玫瑰卷，先把整条的 <b>3/4</b> 装进礼盒。这时好朋友打来电话：「能把礼盒里的玫瑰卷分我<b>一半</b>吗？」",
            "「3/4 的一半」是多少？朵朵挠挠头：3 份分一半，分不开呀！<b>一定有个好办法……</b>"
          ]
        },
        {
          type: "play",
          widget: "fraction",
          prompt: "先动手试试：朵朵把玫瑰卷重新切成 8 个一样的小扇形，装进小礼盒需要 3 小份。点击蛋糕，涂出 3/8！",
          config: { interactive: true, shape: "circle", parts: 8, target: 3 },
          successText: "涂得又准又美！你涂的 3/8，正好就是「3/4 的 1/2」——待会儿的动画会告诉你为什么。"
        },
        {
          type: "anim",
          widget: "fraction",
          steps: [
            { caption: "一条玫瑰卷，平均分成 4 份。", state: { shape: "bar", parts: 4, shaded: 0, showLabel: true } },
            { caption: "朵朵装进礼盒 3 份——这就是这条玫瑰卷的 3/4。", state: { shape: "bar", parts: 4, shaded: 3, showLabel: true } },
            { caption: "朋友想要礼盒里的一半。「3/4 的 1/2」是多少？3 份直接分一半，分不开呀！", state: { shape: "bar", parts: 4, shaded: 3, showLabel: true } },
            { caption: "换个切法：把每个 1/4 再平分成两半，整条变成 8 小份。这时礼盒里是 6 小份——3/4 = 6/8。", state: { shape: "circle", parts: 8, shaded: 6, showLabel: true } },
            { caption: "6 小份的一半是 3 小份。这 3 小份占整条玫瑰卷的 3/8！", state: { shape: "circle", parts: 8, shaded: 3, showLabel: true } },
            { caption: "算式写出来：3/4 × 1/2 = (3×1)/(4×2) = 3/8。分子乘分子，分母乘分母。", state: { shape: "circle", parts: 8, shaded: 3, showLabel: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把刚才涂的、看的，写成数学的语言：",
            "「求一个数的几分之几」，用乘法。分数乘分数：分子乘分子，分母乘分母。"
          ],
          formula: "3/4 × 1/2 = (3×1)/(4×2) = 3/8",
          keypoints: [
            "3/4 的 1/2，列式就是 3/4 × 1/2",
            "分子 3×1 = 3，分母 4×2 = 8，得 3/8",
            "能约分的先约分，算得更快：3/5 × 5/9 = 1/3"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "「3/4 的 1/2 是多少」，列式是哪个？", options: ["3/4 + 1/2", "3/4 − 1/2", "3/4 × 1/2", "3/4 ÷ 1/2"], answer: 2,
              hint: "求一个数的几分之几，用乘法", explain: "求 3/4 的 1/2，列式就是 3/4 × 1/2。" },
            { type: "choice", level: "基础", q: "2/3 × 3/5 = ？", options: ["2/5", "6/8", "1/5", "5/6"], answer: 0,
              hint: "分子乘分子：2×3；分母乘分母：3×5", explain: "(2×3)/(3×5) = 6/15，约分后是 2/5。" },
            { type: "judge", level: "变式", q: "5/6 × 3/4 的积，比 5/6 小。", answer: true,
              hint: "3/4 比 1 小。乘一个比 1 小的数，会越乘越小", explain: "5/6 × 3/4 = 5/8，确实比 5/6 小。这是分数乘法的重要规律！" },
            { type: "choice", level: "变式", q: "为什么 3/4 × 1/2 的积（3/8）比 3/4 还小？", options: ["因为 1/2 比 1 小，取的是 3/4 的一部分", "因为乘法都会让数变小", "因为分母越大的分数一定越小"], answer: 0,
              hint: "想想玫瑰卷：你只拿走了礼盒里的一半", explain: "乘比 1 小的数，就是取它的一部分，当然比原来小。乘法不一定越乘越大哦！" },
            { type: "choice", level: "挑战", q: "一块地 7/8 公顷，玫瑰地占这块地的 2/7，玫瑰地有多少公顷？", options: ["1/4 公顷", "1/2 公顷", "1/8 公顷", "9/16 公顷"], answer: 0,
              hint: "求 7/8 的 2/7，用乘法：7/8 × 2/7，可以先约分", explain: "7/8 × 2/7 = 14/56 = 1/4，玫瑰地是 1/4 公顷。" },
            { type: "fill", level: "挑战", q: "3/5 × 5/9 = ？（用最简分数回答）", answer: "1/3",
              hint: "先约分：分子的 5 和分母的 5 约掉，3 和 9 再约", explain: "3/5 × 5/9 = 15/45 = 1/3。先约分再乘，又快又准！" },
            { type: "choice", level: "温故", q: "还记得吗：五年级学过约分——6/8 约成最简分数是多少？", options: ["3/4", "2/3", "1/2", "6/10"], answer: 0,
              hint: "分子分母同时除以它们的最大公因数 2", explain: "6÷2 = 3，8÷2 = 4，6/8 = 3/4。约分正是今天分数乘法的好帮手！" }
          ]
        },
        {
          type: "review",
          question: "3/4 × 1/2 为什么是 3/8？你能用几种方法说服别人？",
          ways: [
            { name: "画一画", text: "把整条玫瑰卷平均分成 8 小份：3/4 = 6/8 是 6 小份，6 小份的一半是 3 小份，就是 3/8。" },
            { name: "折一折", text: "拿一张纸先折出 3/4 涂色，再把涂色部分对折——涂色的一半正好占整张纸的 3/8。" },
            { name: "算一算", text: "分子乘分子 3×1 = 3，分母乘分母 4×2 = 8，所以 3/4 × 1/2 = 3/8。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么分数乘分数要「分子乘分子、分母乘分母」？可以拿一张纸边折边讲。"
        },
        {
          type: "beauty",
          headline: "越乘越小的魔法：分形",
          paragraphs: [
            "分数乘法有个奇妙的脾气：乘一个比 1 小的分数，结果会变小。1/2 的 1/2 是 1/4，1/4 的 1/2 是 1/8……可以永远分下去。",
            "大自然把这个魔法用到了极致：大树分叉，每根枝条都是主干的「几分之几」，再分、再分——就长成了<b>分形</b>。",
            "去实验室看看这棵永远分不完的树吧！每缩小一次，就是乘了一次分数。"
          ],
          lab: "fractal-tree"
        }
      ]
    },

    /* ================= 单元 2：圆的认识 ================= */
    {
      id: "g6u2",
      title: "圆的认识",
      subtitle: "滚动与切拼的两个魔法实验",
      tag: "空间",
      minutes: 20,
      scenes: [
        {
          type: "story",
          title: "为什么轮子是圆的",
          shots: [
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#fdeef7"/>
                <circle cx="336" cy="38" r="20" fill="#ffd6ec"/>
                <rect x="0" y="232" width="400" height="8" fill="#f8c9e4"/>
                <g id="wheel">
                  <path d="M185 232 L200 110 L215 232" stroke="#2b2d42" stroke-width="6" fill="none" stroke-linecap="round"/>
                  <g id="spokes" stroke="#f15bb5" stroke-width="4">
                    <line x1="200" y1="110" x2="200" y2="30"/>
                    <line x1="200" y1="110" x2="257" y2="53"/>
                    <line x1="200" y1="110" x2="280" y2="110"/>
                    <line x1="200" y1="110" x2="257" y2="167"/>
                    <line x1="200" y1="110" x2="200" y2="190"/>
                    <line x1="200" y1="110" x2="143" y2="167"/>
                    <line x1="200" y1="110" x2="120" y2="110"/>
                    <line x1="200" y1="110" x2="143" y2="53"/>
                  </g>
                  <circle cx="200" cy="110" r="80" fill="none" stroke="#f15bb5" stroke-width="5"/>
                  <g fill="#ffc233">
                    <circle cx="200" cy="30" r="9"/><circle cx="257" cy="53" r="9"/><circle cx="280" cy="110" r="9"/><circle cx="257" cy="167" r="9"/>
                    <circle cx="200" cy="190" r="9"/><circle cx="143" cy="167" r="9"/><circle cx="120" cy="110" r="9"/><circle cx="143" cy="53" r="9"/>
                  </g>
                  <circle cx="200" cy="110" r="10" fill="#2b2d42"/>
                </g>
                <text x="22" y="222" font-size="14" fill="#b03a82" font-weight="bold">🎡 狂欢节</text>
              </svg>`,
              callout: { text: "狂欢节，去坐摩天轮！", pos: "tl" },
              narration: "玫瑰星球的狂欢节到了！朵朵要去坐全星球最大的摩天轮——转呀转，又稳又圆。",
              ms: 4200
            },
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#fdeef7"/>
                <circle cx="336" cy="38" r="20" fill="#ffd6ec"/>
                <rect x="0" y="232" width="400" height="8" fill="#f8c9e4"/>
                <g id="wheel">
                  <path d="M185 232 L200 110 L215 232" stroke="#2b2d42" stroke-width="6" fill="none" stroke-linecap="round"/>
                  <g id="spokes" stroke="#f15bb5" stroke-width="4">
                    <line x1="200" y1="110" x2="200" y2="30"/>
                    <line x1="200" y1="110" x2="257" y2="53"/>
                    <line x1="200" y1="110" x2="280" y2="110"/>
                    <line x1="200" y1="110" x2="257" y2="167"/>
                    <line x1="200" y1="110" x2="200" y2="190"/>
                    <line x1="200" y1="110" x2="143" y2="167"/>
                    <line x1="200" y1="110" x2="120" y2="110"/>
                    <line x1="200" y1="110" x2="143" y2="53"/>
                  </g>
                  <circle cx="200" cy="110" r="80" fill="none" stroke="#f15bb5" stroke-width="5"/>
                  <g fill="#ffc233">
                    <circle cx="200" cy="30" r="9"/><circle cx="257" cy="53" r="9"/><circle cx="280" cy="110" r="9"/><circle cx="257" cy="167" r="9"/>
                    <circle cx="200" cy="190" r="9"/><circle cx="143" cy="167" r="9"/><circle cx="120" cy="110" r="9"/><circle cx="143" cy="53" r="9"/>
                  </g>
                  <circle cx="200" cy="110" r="10" fill="#2b2d42"/>
                </g>
              </svg>`,
              zoom: { ox: 50, oy: 46, scale: 1.25 },
              focus: "#spokes",
              callout: { text: "圆心到轮边，条条一样长！", pos: "tl" },
              narration: "朵朵发现了秘密：从圆心到轮子边，每条辐条都一样长！圆心稳稳不动，车厢平平稳稳。",
              ms: 4800
            },
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#fdeef7"/>
                <circle cx="336" cy="38" r="20" fill="#ffd6ec"/>
                <rect x="0" y="198" width="400" height="42" fill="#f8c9e4"/>
                <g id="bumpy">
                  <rect x="168" y="134" width="62" height="62" transform="rotate(28 199 165)" fill="#f15bb5" stroke="#b03a82" stroke-width="4"/>
                  <circle cx="199" cy="165" r="7" fill="#2b2d42"/>
                  <g transform="rotate(-8 199 110)">
                    <rect x="161" y="96" width="76" height="28" rx="10" fill="#ffc233" stroke="#e09f3e" stroke-width="3"/>
                    <circle cx="184" cy="110" r="3" fill="#2b2d42"/><circle cx="214" cy="110" r="3" fill="#2b2d42"/>
                  </g>
                  <path d="M140 150 q-8 -6 -14 2" stroke="#b03a82" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <path d="M138 172 q-9 -4 -15 4" stroke="#b03a82" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <path d="M262 138 q9 -5 14 4" stroke="#b03a82" stroke-width="3" fill="none" stroke-linecap="round"/>
                </g>
              </svg>`,
              zoom: { ox: 50, oy: 58, scale: 1.3 },
              focus: "#bumpy",
              callout: { text: "方轮子咯噔咯噔，颠得不行！", pos: "tl" },
              narration: "要是把轮子换成正方形呢？哎呀——车子一蹦一跳，朵朵的辫子都要颠飞啦！",
              ms: 4600
            },
            {
              art: `<svg viewBox="0 0 400 240" width="400" height="240">
                <rect width="400" height="240" rx="20" fill="#fdeef7"/>
                <circle cx="336" cy="38" r="20" fill="#ffd6ec"/>
                <rect x="0" y="232" width="400" height="8" fill="#f8c9e4"/>
                <g id="wheel">
                  <path d="M185 232 L200 110 L215 232" stroke="#2b2d42" stroke-width="6" fill="none" stroke-linecap="round"/>
                  <g id="spokes" stroke="#f15bb5" stroke-width="4">
                    <line x1="200" y1="110" x2="200" y2="30"/>
                    <line x1="200" y1="110" x2="257" y2="53"/>
                    <line x1="200" y1="110" x2="280" y2="110"/>
                    <line x1="200" y1="110" x2="257" y2="167"/>
                    <line x1="200" y1="110" x2="200" y2="190"/>
                    <line x1="200" y1="110" x2="143" y2="167"/>
                    <line x1="200" y1="110" x2="120" y2="110"/>
                    <line x1="200" y1="110" x2="143" y2="53"/>
                  </g>
                  <circle cx="200" cy="110" r="80" fill="none" stroke="#f15bb5" stroke-width="5"/>
                  <g fill="#ffc233">
                    <circle cx="200" cy="30" r="9"/><circle cx="257" cy="53" r="9"/><circle cx="280" cy="110" r="9"/><circle cx="257" cy="167" r="9"/>
                    <circle cx="200" cy="190" r="9"/><circle cx="143" cy="167" r="9"/><circle cx="120" cy="110" r="9"/><circle cx="143" cy="53" r="9"/>
                  </g>
                  <circle cx="200" cy="110" r="10" fill="#2b2d42"/>
                </g>
                <g id="sparkle" fill="#ffc233">
                  <path transform="translate(104,58)" d="M0 -9 L2.6 -2.6 L9 0 L2.6 2.6 L0 9 L-2.6 2.6 L-9 0 L-2.6 -2.6 Z"/>
                  <path transform="translate(304,76)" d="M0 -9 L2.6 -2.6 L9 0 L2.6 2.6 L0 9 L-2.6 2.6 L-9 0 L-2.6 -2.6 Z"/>
                  <path transform="translate(322,164)" d="M0 -7 L2 -2 L7 0 L2 2 L0 7 L-2 2 L-7 0 L-2 -2 Z"/>
                </g>
              </svg>`,
              focus: "#wheel",
              callout: { text: "一圈有多长？里面有多大？", pos: "br" },
              narration: "这个圆还藏着两个大秘密：它一圈有多长？里面有多大？用两个魔法实验来揭开！",
              ms: 5000
            }
          ]
        },
        {
          type: "play",
          widget: "angle",
          prompt: "圆规的半径绕着圆心转呀转，就扫出一个圆。先扫一半试试：拖动滑块把角摆到 180°，扫出一个半圆！",
          config: { interactive: true, deg: 30, target: 180, tolerance: 3, showProtractor: true },
          successText: "完美的半圆！180° 的角叫平角；半径再转半圈凑满 360°，就扫出一个完整的圆。"
        },
        {
          type: "anim",
          widget: "circle",
          steps: [
            { caption: "圆心到圆上的线段叫半径 r；穿过圆心、两端都在圆上的叫直径 d，d = 2 × r。盯紧粉色小点！", state: { mode: "roll", t: 0 } },
            { caption: "让圆贴着地面滚起来——滚过的金色线越来越长。", state: { mode: "roll", t: 0.5 } },
            { caption: "滚满一整周！金色线的长度就是周长 C = π × d，π 约等于 3.14。周长总是直径的 3 倍多一点。", state: { mode: "roll", t: 1 } },
            { caption: "那圆的里面有多大？把圆像切蛋糕一样，平均切成 8 瓣小扇形。", state: { mode: "sectors", t: 0, n: 8 } },
            { caption: "把扇形一上一下、交错拼起来——咦，越来越像一个平行四边形！", state: { mode: "sectors", t: 0.5, n: 8 } },
            { caption: "拼成图形的底 = 圆周的一半 = π × r，高 = r。所以圆的面积 S = π × r × r = πr²！", state: { mode: "sectors", t: 1, n: 8 } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "两个魔法实验，写成数学的语言就是两个公式：",
            "π 是一个固定不变的数，叫圆周率，约等于 3.14。"
          ],
          formula: "C = πd = 2πr　　S = πr²",
          keypoints: [
            "C 是周长：圆滚一周的距离，C = π × d = 2 × π × r",
            "S 是面积：π × r × r，r² 读作「r 的平方」",
            "周长用长度单位（cm），面积用平方单位（cm²）"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "连接圆心和圆上任意一点的线段，叫做什么？", options: ["半径", "直径", "周长"], answer: 0,
              hint: "它只有圆心到圆上那么长，是「半个直径」", explain: "圆心到圆上的线段叫半径；穿过圆心、两端都在圆上的才是直径。" },
            { type: "judge", level: "基础", q: "同一个圆里，直径的长度是半径的 2 倍。", answer: true,
              hint: "直径 = 两段半径手拉手，d = 2 × r", explain: "对！d = 2r，所以半径 5 cm 的圆，直径是 10 cm。" },
            { type: "fill", level: "基础", q: "一个圆的直径是 10 cm，它的周长是多少厘米？（π 取 3.14）", answer: "31.4",
              hint: "C = π × d = 3.14 × 10", explain: "3.14 × 10 = 31.4，周长是 31.4 厘米。" },
            { type: "judge", level: "变式", q: "用圆规画圆，两脚间的距离是 3 cm，画出的圆直径就是 3 cm。", answer: false,
              hint: "圆规两脚间的距离，定的是圆心到圆上的长度", explain: "两脚间的距离是半径 3 cm，所以画出的圆直径是 6 cm。" },
            { type: "choice", level: "变式", q: "为什么任意一个圆，周长 ÷ 直径都得同一个数 π？", options: ["圆无论大小，形状都一模一样：直径放大几倍，周长也放大同样的倍数", "因为只有半径是 1 的圆才是这样", "因为 π 是人们随口约定的数"], answer: 0,
              hint: "把圆放大或缩小，它的形状变了吗？", explain: "所有圆都是「同一个形状」的不同大小：直径和周长按同样倍数变化，比值永远是 π ≈ 3.14。" },
            { type: "choice", level: "挑战", q: "半径 3 cm 的圆，面积约是多少？（π 取 3.14）", options: ["28.26 平方厘米", "18.84 平方厘米", "9.42 平方厘米", "28.26 厘米"], answer: 0,
              hint: "S = π × r²，r² = 3 × 3 = 9；注意面积的单位", explain: "3.14 × 9 = 28.26 平方厘米。18.84 是它的周长，面积单位也不能写成厘米哦！" },
            { type: "fill", level: "挑战", q: "一个圆形花坛的周长是 31.4 米，它的半径是多少米？（π 取 3.14）", answer: "5",
              hint: "先求直径：31.4 ÷ 3.14 = 10；半径是直径的一半", explain: "直径 = 31.4 ÷ 3.14 = 10 米，半径 = 10 ÷ 2 = 5 米。" },
            { type: "choice", level: "温故", q: "还记得吗：五年级学的平行四边形，面积公式是什么？（切拼圆的时候就靠它！）", options: ["底 × 高", "底 × 底", "（底 + 高）× 2"], answer: 0,
              hint: "把平行四边形割补成一个长方形想一想", explain: "平行四边形面积 = 底 × 高。圆切拼成近似的平行四边形后，底是 πr、高是 r，面积就是 πr²！" }
          ]
        },
        {
          type: "review",
          question: "圆的面积为什么是 S = πr²？你能用几种方法说服别人？",
          ways: [
            { name: "切拼法", text: "把圆切成 8 瓣扇形，交错拼成近似的平行四边形：底 = 圆周的一半 = πr，高 = r，面积 = πr × r = πr²。" },
            { name: "越切越细", text: "切成 16 瓣、32 瓣再拼，图形越来越接近真正的平行四边形——这就是数学里「极限」的想法。" },
            { name: "方格估算", text: "把圆铺在方格纸上数一数：它的面积总是 r² 的 3 倍多一点，那「多一点」正是 π ≈ 3.14。" }
          ],
          ask: "给爸爸妈妈表演一次：剪一个圆纸片，分成 8 瓣拼一拼，讲讲圆的面积公式是怎么来的。"
        },
        {
          type: "beauty",
          headline: "祖冲之：领先世界一千年的圆周率",
          paragraphs: [
            "1500 多年前，中国数学家祖冲之用「割圆」的办法：把圆切成越来越多、越来越小的扇形，硬算出 π 在 3.1415926 和 3.1415927 之间。",
            "这个纪录领先世界将近 1000 年！你今天做的切拼实验，正是割圆术的儿童版——古人的超级难题，现在已经成了你能动手玩的游戏。",
            "去博物馆听听祖冲之的故事，再到实验室看看：一段段圆弧手拉手，还能连成向日葵花盘里的黄金螺旋！"
          ],
          museum: "ppl-zu",
          lab: "fibonacci"
        }
      ]
    },

    /* ================= 单元 3：比和百分数 ================= */
    {
      id: "g6u3",
      title: "比和百分数",
      subtitle: "一百格里的公平与比较",
      tag: "数感",
      minutes: 15,
      scenes: [
        {
          type: "story",
          title: "特饮配方与神秘符号",
          art: `<svg viewBox="0 0 400 240" width="400" height="240">
            <rect width="400" height="240" rx="20" fill="#fdeef7"/>
            <line x1="188" y1="26" x2="172" y2="88" stroke="#f15bb5" stroke-width="7" stroke-linecap="round"/>
            <rect x="120" y="70" width="90" height="138" rx="10" fill="#fff" stroke="#2b2d42" stroke-width="3"/>
            <rect x="128" y="88" width="74" height="24" fill="#f15bb5"/>
            <rect x="128" y="112" width="74" height="24" fill="#f15bb5"/>
            <rect x="128" y="136" width="74" height="24" fill="#f15bb5"/>
            <rect x="128" y="160" width="74" height="20" fill="#ffc233"/>
            <rect x="128" y="180" width="74" height="20" fill="#ffc233"/>
            <text x="240" y="120" font-size="16" fill="#b03a82" font-weight="bold">玫瑰露 3 份</text>
            <text x="240" y="190" font-size="16" fill="#b8860b" font-weight="bold">蜂蜜 2 份</text>
            <text x="268" y="152" font-size="34" fill="#2b2d42" font-weight="bold">3 : 2</text>
            <circle cx="336" cy="52" r="30" fill="#fff" stroke="#f15bb5" stroke-width="3"/>
            <text x="336" y="59" font-size="17" fill="#f15bb5" font-weight="bold" text-anchor="middle">45%</text>
            <text x="24" y="228" font-size="15" fill="#5c607a">「3:2」和「45%」都在说什么？</text>
          </svg>`,
          paragraphs: [
            "朵朵在玫瑰星球开了一家特饮小店。招牌饮料的配方写在门口：玫瑰露和蜂蜜按 <b>3 : 2</b> 调配。",
            "「3 : 2」是什么意思？下午她又看到球赛海报：「玫瑰队命中率 <b>45%</b>」——这个带小圆圈的符号又是什么？",
            "它们一个叫<b>比</b>，一个叫<b>百分数</b>，都是表示数量关系的高手。学会它们，你既是调配师，又是数据分析师！"
          ]
        },
        {
          type: "play",
          widget: "grid",
          prompt: "先亲手感受一下：把这张 100 格方格纸全部涂满！边涂边数——涂到第几格，就是百分之几。",
          config: { interactive: true, rows: 10, cols: 10 },
          successText: "100 格全满 = 100%！涂 1 格是 1%，涂 45 格就是 45%——百分数被你彻底摸透啦。"
        },
        {
          type: "anim",
          widget: "grid",
          steps: [
            { caption: "一张 10×10 的方格纸，正好 100 格。每 1 格就是总数的 1%。", state: { rows: 10, cols: 10, filled: 0, showCount: true } },
            { caption: "玫瑰队投篮 100 次，命中 45 次——涂满 45 格看一看。", state: { rows: 10, cols: 10, filled: 45, showCount: true } },
            { caption: "45/100 写成 45%，读作「百分之四十五」。涂色格与空白格的比是 45:55，约简后是 9:11。", state: { rows: 10, cols: 10, filled: 45, showCount: true } },
            { caption: "下半场又进了 30 球！现在 75 格 = 75% = 3/4，涂色与空白的比是 75:25 = 3:1。", state: { rows: 10, cols: 10, filled: 75, showCount: true } },
            { caption: "要是 100 球全部命中，就是 100%！百分数让「谁更准」一眼见分晓。", state: { rows: 10, cols: 10, filled: 100, showCount: true } }
          ]
        },
        {
          type: "symbol",
          paragraphs: [
            "把方格纸上的发现，写成数学的语言：",
            "百分数、分数、小数是一家，可以互相变身。"
          ],
          formula: "45/100 = 45%　　1/2 = 0.5 = 50%",
          keypoints: [
            "% 读作「百分之」，45% 就是 45/100",
            "比 3:2 表示 3 份对 2 份，一共 5 份：玫瑰露占 3/5 = 60%",
            "小数变百分数：小数点向右移两位，添上 %"
          ]
        },
        {
          type: "quiz",
          questions: [
            { type: "choice", level: "基础", q: "45% 表示什么意思？", options: ["每一百份里面占 45 份", "占 45 份里的 1 份", "把东西随便分成 45 份"], answer: 0,
              hint: "% 这个小符号，意思就是「每一百份里」", explain: "45% = 45/100，就是一百份里的 45 份。" },
            { type: "fill", level: "基础", q: "0.75 = ？%", answer: "75",
              hint: "把小数点向右移动两位，再添上 %", explain: "0.75 = 75/100 = 75%。" },
            { type: "judge", level: "基础", q: "1/2 = 50%。", answer: true,
              hint: "1/2 = 50/100", explain: "对！1/2 = 0.5 = 50%，一半就是百分之五十。" },
            { type: "choice", level: "变式", q: "为什么比较两支球队的命中率，用百分数比用分数更方便？", options: ["百分数的分母都是 100，大小一眼就能比出来", "百分数写起来笔画更少", "% 的符号更好看"], answer: 0,
              hint: "23/50 和 11/25，哪个大？换成 46% 和 44% 呢？", explain: "分数分母不同不好比；百分数分母都是 100，只比分子就行，一眼见分晓。" },
            { type: "choice", level: "变式", q: "玫瑰露与蜂蜜按 3:2 混合，玫瑰露占这杯饮料的多少？", options: ["60%", "40%", "50%", "150%"], answer: 0,
              hint: "一共是 3+2 = 5 份，玫瑰露占 3/5", explain: "3/5 = 60/100 = 60%。150% 是 3÷2，比的对象是蜂蜜，不是整杯饮料哦！" },
            { type: "choice", level: "挑战", q: "六年级有 50 人，23 人报名了天文社。报名人数占全年级的多少？", options: ["46%", "23%", "54%", "77%"], answer: 0,
              hint: "23/50，把分母变成 100 试试", explain: "23/50 = 46/100 = 46%。分母变成 100，百分数就现身了。" },
            { type: "fill", level: "挑战", q: "一件太空 T 恤原价 200 元，打八折（按原价的 80% 出售），现价多少元？", answer: "160",
              hint: "八折就是 80%，算一算 200 的 80%", explain: "200 × 80% = 200 × 0.8 = 160 元。会算折扣，逛街不吃亏！" },
            { type: "choice", level: "温故", q: "还记得吗：五年级学过，3 ÷ 4 写成分数是多少？", options: ["3/4", "4/3", "0.34", "3.4"], answer: 0,
              hint: "除法里被除数是分子，除数是分母", explain: "3 ÷ 4 = 3/4。分数与除法是一对好兄弟，今天的比和百分数也都靠它！" }
          ]
        },
        {
          type: "review",
          question: "投篮 100 次命中 45 次，命中率为什么是 45%？你能用几种方法说服别人？",
          ways: [
            { name: "方格纸", text: "100 格方格纸涂 45 格：涂色占 45/100，就是 45%。" },
            { name: "分数变身", text: "45/100 的分母已经是 100，直接写成 45%；要是投 50 次中 23 次，23/50 = 46/100 = 46%。" },
            { name: "比一比", text: "命中次数 : 投篮总次数 = 45 : 100 = 9 : 20，前项 ÷ 后项 = 0.45 = 45%。" }
          ],
          ask: "用你自己的话，给爸爸妈妈讲讲：为什么说百分数是「分母为 100 的分数」？用今天的 45% 举个例子。"
        },
        {
          type: "beauty",
          headline: "100% 都成立，却还差最后一步",
          paragraphs: [
            "1742 年，数学家哥德巴赫猜想说：每个大于 2 的偶数，都是两个质数之和。6 = 3 + 3，8 = 3 + 5，100 = 47 + 53……",
            "计算机已经验证了 4×10<sup>18</sup> 以内所有的偶数——<b>100% 全部成立</b>！但数学家说：没有经过证明，就不能说 100% 确定。",
            "百分数描述「已经发生的事」，证明保证「永远发生的事」。去博物馆看看这个等待了 280 多年的谜题吧！"
          ],
          museum: "mys-goldbach",
          lab: "prime-spiral"
        }
      ]
    }
  ]
};
