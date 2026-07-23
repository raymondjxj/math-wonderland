/* ============================================================
   数学奇境 · 五年级扩展课程 v2（push 模式，接 g5.js / g5b.js）
   单元：7 分数的意义和性质 / 8 分数的加法和减法
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[5] = MW.content[5] || { grade: 5, name: "五年级 · 紫晶星球", units: [] };
G.units.push(

  /* ================= 单元 7：分数的意义和性质 ================= */
  {
    id: "g5u7",
    title: "分数的意义和性质",
    subtitle: "单位「1」与变与不变的秘密",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "烘焙大赛的分派难题",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <text x="200" y="32" font-size="17" fill="#5b2a9d" font-weight="bold" text-anchor="middle">🏆 紫晶烘焙大赛</text>
          <circle cx="108" cy="120" r="60" fill="#c8b6ff" stroke="#5b2a9d" stroke-width="4"/>
          <path d="M108 120 L108 60 A60 60 0 0 1 168 120 Z" fill="#9b5de5"/>
          <path d="M108 60 L108 180 M48 120 L168 120" stroke="#5b2a9d" stroke-width="4" fill="none"/>
          <rect x="238" y="68" width="126" height="104" rx="14" fill="#ffffff" stroke="#9b5de5" stroke-width="4"/>
          <g fill="#c8b6ff" stroke="#5b2a9d" stroke-width="3">
            <circle cx="264" cy="98" r="11"/><circle cx="290" cy="98" r="11"/><circle cx="316" cy="98" r="11"/><circle cx="342" cy="98" r="11"/>
            <circle cx="264" cy="140" r="11"/><circle cx="290" cy="140" r="11"/><circle cx="316" cy="140" r="11"/><circle cx="342" cy="140" r="11"/>
          </g>
          <text x="108" y="214" font-size="15" fill="#5b2a9d" font-weight="bold" text-anchor="middle">1 个派 ÷ 4 位评委</text>
          <text x="301" y="214" font-size="15" fill="#5b2a9d" font-weight="bold" text-anchor="middle">1 盒派，也 ÷ 4！</text>
        </svg>`,
        paragraphs: [
          "紫晶星球一年一度的烘焙大赛开始啦！朵朵烤了一个圆圆的大派，要平均分给 4 位评委。每位评委分到多少？—— 1/4 个，这可难不倒你。",
          "这时，镇长推来一整盒小派：「这次不分一个，要分一整盒！8 个小派，也平均分给 4 位评委。」朵朵愣住了：<b>一盒派，也能当作「一个整体」来分吗？</b>",
          "更妙的是，评委猫头鹰眯着眼说：「我那份 1/4，和盒子里那 2/8，明明一样大呀！」分数里，藏着一个「变与不变」的秘密……"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先动手感受一下：把圆桌大派平均分成 4 份，涂出其中的 3 份——也就是这个派的 3/4！",
        config: { interactive: true, shape: "circle", parts: 4, target: 3 },
        successText: "涂好了！3 个 1/4 就是 3/4。记住：整个派是一个整体，每 1 份都是它的 1/4。"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "一个圆圆的大派，就是一个整体——数学家叫它单位「1」。一盒派、一篮星星，也都能当单位「1」。", state: { shape: "circle", parts: 1, shaded: 1, showLabel: true } },
          { caption: "把单位「1」平均分成 4 份，每份是 1/4。表示其中一份的 1/4，叫做这个分数的分数单位。", state: { shape: "circle", parts: 4, shaded: 1, showLabel: true } },
          { caption: "涂 3 份：3 个 1/4 是 3/4。分子比分母小，这样的分数叫真分数——真分数比 1 小。", state: { shape: "circle", parts: 4, shaded: 3, showLabel: true } },
          { caption: "涂满 4 份，4/4 正好等于 1。还想涂第 5 份？一个派装不下啦！", state: { shape: "circle", parts: 4, shaded: 4, showLabel: true } },
          { caption: "第 5 个 1/4 得再开一个派：5/4 比 1 大！分子大于或等于分母的分数叫假分数，5/4 还能写成 1 又 1/4，叫带分数。", state: { shape: "circle", parts: 4, shaded: 4, showLabel: true } },
          { caption: "回头看 3/4：把每份再平均分成 2 小份，3/4 变成 6/8——涂色的大小一点儿没变！分子分母同乘 2，分数大小不变。", state: { shape: "circle", parts: 8, shaded: 6, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把刚才的涂涂画画，写成数学的语言：",
          "分子和分母同时乘或除以相同的数（0 除外），分数的大小不变。这就是分数的基本性质——约分，和以后要学的通分，都靠它！"
        ],
        formula: "3/4 = (3×2)/(4×2) = 6/8 = (6÷2)/(8÷2) = 3/4",
        keypoints: [
          "把单位「1」平均分成若干份，表示其中 1 份的数叫分数单位：3/4 的分数单位是 1/4，它有 3 个这样的单位",
          "分子 < 分母 → 真分数（比 1 小）；分子 ≥ 分母 → 假分数（等于或大于 1）；假分数能写成带分数，如 5/4 = 1 又 1/4",
          "分数的基本性质：分子、分母同乘或同除以相同的数（0 除外），大小不变",
          "用基本性质把分子、分母变小，化到不能再化，叫约分：12/18 = 2/3"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "把一盒 8 个小派平均分给 4 位评委，每位评委分到这盒派的几分之几？", options: ["1/4", "1/8", "1/3", "8/4"], answer: 0,
            hint: "把一整盒看作单位「1」，平均分成了 4 份", explain: "单位「1」是一整盒派，平均分成 4 份，每人得 1 份，就是 1/4（也就是 2 个小派）。" },
          { type: "fill", level: "基础", q: "3/7 里面有 □ 个 1/7。", answer: "3",
            hint: "3/7 的分数单位是 1/7，有几个呢？", explain: "3/7 就是 3 个 1/7 拼起来的，所以里面有 3 个 1/7。" },
          { type: "judge", level: "基础", q: "真分数小于 1，假分数大于 1。", answer: false,
            hint: "4/4 是假分数，它等于几？", explain: "假分数也可能等于 1，比如 4/4 = 1。分子大于或等于分母的分数都是假分数。" },
          { type: "judge", level: "变式", q: "1 又 1/4 和 5/4 一样大。", answer: true,
            hint: "把整数 1 想成 4/4", explain: "1 = 4/4，4/4 再加 1/4 就是 5/4，所以带分数 1 又 1/4 = 假分数 5/4。" },
          { type: "choice", level: "变式", q: "把 3/5 的分子和分母同时乘 4，得到哪个分数？", options: ["12/20", "3/20", "12/5", "7/9"], answer: 0,
            hint: "分子分母要一起乘，一个都不能落下", explain: "3×4 = 12，5×4 = 20，得到 12/20。大小和 3/5 完全一样。" },
          { type: "choice", level: "变式", q: "为什么 3/4 和 6/8 一样大？", options: ["因为 6 比 3 大，8 比 4 大", "因为分子分母同乘 2，只是把每份切得更细，涂色大小没变", "只是碰巧相等"], answer: 1,
            hint: "想想动画里那个被越切越细的圆", explain: "3/4 的每份再平分成 2 小份，就成了 6/8。份数变多、每份变小，总量不变——这就是分数的基本性质。" },
          { type: "choice", level: "挑战", q: "把 12/18 约成最简分数，是哪个？", options: ["2/3", "3/2", "1/2", "5/6"], answer: 0,
            hint: "12 和 18 可以同时除以几？试试它们的最大公因数 6", explain: "12÷6 = 2，18÷6 = 3，12/18 = 2/3。一次除以最大公因数，约分最快。" },
          { type: "choice", level: "挑战", q: "一盒 24 颗紫晶糖，豆豆送出 16 颗。送出的占这盒糖的几分之几？（用最简分数回答）", options: ["2/3", "3/4", "5/8", "1/2"], answer: 0,
            hint: "先写出 16/24，再约分", explain: "16/24 的分子分母同除以 8，得 2/3。送出的占这盒糖的 2/3。" },
          { type: "choice", level: "温故", q: "还记得吗：（第 2 课《因数与倍数》）12 和 18 的最大公因数是几？", options: ["6", "3", "9", "12"], answer: 0,
            hint: "分别列出 12 和 18 的因数，找公共的、最大的那个", explain: "12 的因数：1、2、3、4、6、12；18 的因数：1、2、3、6、9、18。最大公因数是 6——刚才约分 12/18 时，除以它一步就到位！" }
        ]
      },
      {
        type: "review",
        question: "3/4 为什么等于 6/8？你能用几种方法说服别人？",
        ways: [
          { name: "涂一涂", text: "把圆平均分成 4 份涂 3 份；再把每份平分成 2 小份，变成 8 小份涂 6 小份——涂色的大小没变。" },
          { name: "算一算", text: "分子分母同时乘 2：3/4 = (3×2)/(4×2) = 6/8；同时除以 2，又能变回去。" },
          { name: "分一派", text: "3 块 1/4 大小的派，和 6 块 1/8 大小的派，装进盘子里是一样多的。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么约分之后，分数一点儿也没有「变小」？（可以拿一张纸折给他们看）"
      },
      {
        type: "beauty",
        headline: "古埃及人的分数密码",
        paragraphs: [
          "三千多年前，古埃及人分面包、记收成，只用分子是 1 的分数。想表示 2/3？他们写成 1/2 + 1/6——像拼积木一样拼出来！",
          "著名的《莱茵德纸草书》里，记着一张「单位分数拼图表」。为了把 9 个面包平分给 10 个人，祭司们要翻着表查上半天。",
          "而今天，你用分数的基本性质轻轻一约，就解开了古埃及祭司眼中的难题。去博物馆看看那张古老的纸草书吧！"
        ],
        museum: "his-egypt"
      }
    ]
  },

  /* ================= 单元 8：分数的加法和减法 ================= */
  {
    id: "g5u8",
    title: "分数的加法和减法",
    subtitle: "先统一尺子，再相加减",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "特饮店的配方风波",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#f3edff"/>
          <text x="200" y="30" font-size="17" fill="#5b2a9d" font-weight="bold" text-anchor="middle">🍹 晨光特饮店</text>
          <rect x="30" y="66" width="66" height="104" rx="10" fill="#ffffff" stroke="#5b2a9d" stroke-width="4"/>
          <rect x="37" y="121" width="52" height="42" rx="6" fill="#9b5de5"/>
          <text x="63" y="194" font-size="14" fill="#5b2a9d" font-weight="bold" text-anchor="middle">1/2 杯</text>
          <text x="114" y="130" font-size="30" fill="#9b5de5" font-weight="bold" text-anchor="middle">+</text>
          <rect x="136" y="66" width="66" height="104" rx="10" fill="#ffffff" stroke="#5b2a9d" stroke-width="4"/>
          <rect x="143" y="134" width="52" height="29" rx="6" fill="#c8b6ff"/>
          <text x="169" y="194" font-size="14" fill="#5b2a9d" font-weight="bold" text-anchor="middle">1/3 杯</text>
          <text x="220" y="130" font-size="30" fill="#9b5de5" font-weight="bold" text-anchor="middle">=</text>
          <rect x="242" y="54" width="84" height="116" rx="12" fill="#ffffff" stroke="#9b5de5" stroke-width="5"/>
          <text x="284" y="132" font-size="46" fill="#9b5de5" font-weight="bold" text-anchor="middle">?</text>
          <text x="284" y="194" font-size="14" fill="#5b2a9d" font-weight="bold" text-anchor="middle">一共多少？</text>
          <circle cx="352" cy="60" r="22" fill="#ffc233"/>
          <text x="352" y="67" font-size="15" fill="#7a4d00" font-weight="bold" text-anchor="middle">2/5？</text>
          <text x="200" y="226" font-size="15" fill="#5b2a9d" font-weight="bold" text-anchor="middle">豆豆的算法，对吗？</text>
        </svg>`,
        paragraphs: [
          "紫晶星球的「晨光特饮店」推出新品：先倒 1/2 杯紫晶汁，再倒 1/3 杯星光露。摇一摇，香飘整条街！",
          "小助手豆豆抢着报数：「半杯加三分之一杯？分子加分子，分母加分母——一共是 2/5 杯！」",
          "镇长把两杯汁倒进同一个量杯一看：液面明明超过了半杯！可 2/5 连半杯都不到呀。<b>豆豆的算法，到底错在哪儿？</b>"
        ]
      },
      {
        type: "play",
        widget: "fraction",
        prompt: "先玩个简单的：一张薄饼平均切成 8 块，豆豆吃了 3 块，妹妹吃了 1 块。在长条上涂出他们一共吃了多少！",
        config: { interactive: true, shape: "bar", parts: 8, target: 4 },
        successText: "涂好了！3/8 + 1/8 = 4/8：分母相同，分子直接相加。4/8 约一约，正好就是 1/2。"
      },
      {
        type: "anim",
        widget: "fraction",
        steps: [
          { caption: "同分母先来：一张饼平均切 8 块，涂出豆豆吃的 3 块——3/8。", state: { shape: "bar", parts: 8, shaded: 3, showLabel: true } },
          { caption: "再涂妹妹的 1 块：3 个 1/8 加 1 个 1/8 = 4 个 1/8，就是 4/8。分母不变，分子相加！", state: { shape: "bar", parts: 8, shaded: 4, showLabel: true } },
          { caption: "轮到特饮难题了：长条杯里先倒 1/2 杯紫晶汁。", state: { shape: "bar", parts: 2, shaded: 1, showLabel: true } },
          { caption: "再倒 1/3 杯星光露。可 1/2 的「格子」和 1/3 的「格子」大小不一，没法直接数！", state: { shape: "bar", parts: 3, shaded: 1, showLabel: true } },
          { caption: "请分数的基本性质帮忙：1/2 = 3/6。格子变细了，果汁一点儿没多！", state: { shape: "bar", parts: 6, shaded: 3, showLabel: true } },
          { caption: "1/3 = 2/6，倒进来：3/6 + 2/6 = 5/6！先通分成同分母，再相加——这杯特饮一共 5/6 杯。", state: { shape: "bar", parts: 6, shaded: 5, showLabel: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把刚才的涂格子，写成一个算式：",
          "分母不同，就是分数单位不同。单位不同，不能直接相加——就像 3 米 + 5 厘米，要先换成一样的单位！把异分母分数化成同分母分数，叫通分。"
        ],
        formula: "1/2 + 1/3 = 3/6 + 2/6 = 5/6",
        keypoints: [
          "同分母分数相加减：分母不变，只把分子相加减，如 3/8 + 1/8 = 4/8",
          "异分母分数相加减：先用分数的基本性质通分，化成同分母，再相加减",
          "通分常用分母的最小公倍数：2 和 3 的最小公倍数是 6，所以都化成分母是 6 的分数",
          "算完要约分：4/8 = 1/2，结果写成最简分数才算完工"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "2/7 + 3/7 = ？", options: ["5/7", "5/14", "6/7", "1"], answer: 0,
            hint: "分母相同，只把分子相加", explain: "2 个 1/7 加 3 个 1/7 = 5 个 1/7，就是 5/7。分母可不能跟着相加！" },
          { type: "choice", level: "基础", q: "7/9 − 2/9 = ？", options: ["5/9", "9/7", "5/18", "4/9"], answer: 0,
            hint: "7 个 1/9 拿走 2 个 1/9，还剩几个？", explain: "7 个 1/9 减去 2 个 1/9，剩 5 个 1/9，是 5/9。" },
          { type: "judge", level: "基础", q: "1/2 + 1/3 = 2/5。", answer: false,
            hint: "这是豆豆在故事里的算法，镇长为什么摇头？", explain: "分母不同，不能分子分母分别相加！通分后 3/6 + 2/6 = 5/6，不是 2/5。" },
          { type: "choice", level: "变式", q: "为什么 1/2 + 1/3 不能把分子、分母分别相加？", options: ["因为分母不同，分数单位不一样，要先通分成同分母才能加", "因为加法交换律不允许", "其实可以，只是课本不让"], answer: 0,
            hint: "想想 3 米 + 5 厘米，能直接写成 8 吗？", explain: "1/2 的单位是 1/2，1/3 的单位是 1/3，单位不同没法直接合并。通分后都变成 1/6 的单位：3/6 + 2/6 = 5/6。" },
          { type: "choice", level: "变式", q: "1/4 + 3/8 = ？", options: ["5/8", "4/12", "7/8", "1/2"], answer: 0,
            hint: "把 1/4 通分成分母是 8 的分数", explain: "1/4 = 2/8，2/8 + 3/8 = 5/8。" },
          { type: "fill", level: "变式", q: "2/3 + 1/6 = □/6，□ 里填几？", answer: "5",
            hint: "先把 2/3 通分成分母是 6 的分数", explain: "2/3 = 4/6，4/6 + 1/6 = 5/6，所以 □ = 5。" },
          { type: "choice", level: "挑战", q: "1 − 3/8 = ？", options: ["5/8", "3/8", "11/8", "1/2"], answer: 0,
            hint: "把 1 化成分母是 8 的分数：8/8", explain: "1 = 8/8，8/8 − 3/8 = 5/8。整数也能变身成分数来帮忙！" },
          { type: "choice", level: "挑战", q: "花匠上午浇了花圃的 1/4，下午浇了 1/2。这一天一共浇了花圃的几分之几？", options: ["3/4", "2/6", "1/6", "5/4"], answer: 0,
            hint: "1/2 可以写成 2/4", explain: "1/2 = 2/4，1/4 + 2/4 = 3/4。注意：2/6 是把分子分母分别相加的典型错误哦！" },
          { type: "choice", level: "温故", q: "还记得吗：（第 2 课《因数与倍数》）6 和 8 的最小公倍数是几？", options: ["24", "48", "14", "2"], answer: 0,
            hint: "分别列出 6 和 8 的倍数，找第一个相同的", explain: "6 的倍数：6、12、18、24……；8 的倍数：8、16、24……。最小公倍数是 24——分母 6 和 8 通分时，24 正好当共同分母！" }
        ]
      },
      {
        type: "review",
        question: "1/2 + 1/3 为什么等于 5/6？你能用几种方法讲明白？",
        ways: [
          { name: "涂格子", text: "长条的一半涂开是 3/6，三分之一涂开是 2/6，合起来正好 5/6——格子一样大，才能一起数。" },
          { name: "通分算", text: "用分数的基本性质：1/2 = 3/6，1/3 = 2/6，3/6 + 2/6 = 5/6。" },
          { name: "换单位", text: "3 米 + 5 厘米不能直接写成 8，要先统一单位。分数也一样：先通分成相同的分数单位，再相加。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：分数相加之前，为什么有时要先「通分」？（可以拿 3 米 + 5 厘米打比方）"
      },
      {
        type: "beauty",
        headline: "两千年前的「合分术」",
        paragraphs: [
          "早在两千多年前，中国的《九章算术》就写下了分数加法的完整方法——「合分术」：分母交叉乘分子，加起来做分子；分母相乘做分母。这正是我们今天学的通分！",
          "古人没有纸笔，就用一根根小竹棍——算筹，摆出分数。挪一挪、算一算，再大的分数加法也不慌。",
          "同一套方法，从竹筹一路用到今天的课本。去博物馆看看神奇的算筹，和两千年前的数学家击个掌吧！"
        ],
        museum: "his-suanchou"
      }
    ]
  }
);
