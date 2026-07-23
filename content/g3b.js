/* ============================================================
   数学奇境 · 三年级扩展单元 v2（g3b：push 模式）
   单元：4 时、分、秒 / 5 万以内的加法和减法 / 6 倍的认识
   v2 七幕：story → play → anim → symbol → quiz → review → beauty
   ============================================================ */
window.MW = window.MW || {};
MW.content = MW.content || {};
var G = MW.content[3] = MW.content[3] || { grade: 3, name: "三年级 · 青绿星球", units: [] };
G.units.push(

  /* ================= 单元 4：时、分、秒 ================= */
  {
    id: "g3u4",
    title: "时、分、秒",
    subtitle: "钟面里藏着的 60",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "阿绿的迟到风波",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="52" cy="42" r="22" fill="#ffd166"/>
          <circle cx="200" cy="126" r="76" fill="#ffffff" stroke="#2ec4b6" stroke-width="6"/>
          <g stroke="#159e92" stroke-width="4" stroke-linecap="round">
            <line x1="200" y1="60" x2="200" y2="74"/>
            <line x1="200" y1="178" x2="200" y2="192"/>
            <line x1="134" y1="126" x2="148" y2="126"/>
            <line x1="252" y1="126" x2="266" y2="126"/>
          </g>
          <g font-size="16" fill="#0f766e" font-weight="bold" text-anchor="middle">
            <text x="200" y="52">12</text>
            <text x="200" y="214">6</text>
            <text x="122" y="132">9</text>
            <text x="282" y="132">3</text>
          </g>
          <line x1="200" y1="126" x2="200" y2="70" stroke="#159e92" stroke-width="6" stroke-linecap="round"/>
          <line x1="200" y1="126" x2="166" y2="146" stroke="#2ec4b6" stroke-width="9" stroke-linecap="round"/>
          <circle cx="200" cy="126" r="8" fill="#0f766e"/>
          <path d="M318 30 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5 z" fill="#ffd166"/>
          <text x="312" y="92" font-size="17" fill="#0f766e" font-weight="bold">1 时 = 100 分？</text>
          <text x="300" y="216" font-size="15" fill="#0f766e" font-weight="bold">☄ 流星雨几点开始？</text>
        </svg>`,
        paragraphs: [
          "今晚 8 时，青绿星球上空有百年一遇的流星雨！阿绿早早吃完饭，一看钟：才 7 时。他掰着手指算：「1 米 = 100 厘米，那 1 时肯定 = 100 分，还有 100 分钟呢，不着急！」",
          "阿绿慢悠悠搭积木，搭着搭着，天边忽然「唰——」地亮起一道光：流星雨开始了！他冲上观景台，大钟的时针正好指着 8。",
          "咦，100 分钟怎么这么快就用完了？<b>原来，钟面上的时间根本不按 100 算！</b>1 时到底是多少分？这堂课，就把钟面的秘密看个明白。"
        ]
      },
      {
        type: "play",
        widget: "angle",
        prompt: "先动手感受一下钟面：3 时整，分针指向 12、时针指向 3，两根指针的夹角正好是 90°。拖动滑块，把这个角摆到 90°！",
        config: { interactive: true, deg: 30, target: 90, tolerance: 5, showProtractor: true },
        successText: "摆得真准，90°！这就是 3 时整两根指针张开的样子。钟面一圈 360°，12 个数字把它平分，每大格就是 30°。"
      },
      {
        type: "anim",
        widget: "angle",
        steps: [
          { caption: "钟面是一个圆，一圈正好 360°。", state: { deg: 360, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "12 个数字把圆平均分成 12 大格：360 ÷ 12 = 30，每大格 30°。", state: { deg: 30, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "分针走 1 大格是 5 分。走到 3，走了 3 大格：3 × 30° = 90°，就是 15 分。", state: { deg: 90, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "走到 6：正好半圈 180°，是 30 分，也叫「半小时」。", state: { deg: 180, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "分针跑一整圈 360°，是 60 分；同一时间里，时针才慢悠悠走 1 大格 30°，是 1 时。所以 1 时 = 60 分！", state: { deg: 360, showArc: true, showLabel: true, showProtractor: false } },
          { caption: "那 1 分呢？秒针「嗒」地走 1 小格是 1 秒，走满一圈 60 小格，分针正好走 1 小格——1 分 = 60 秒。", state: { deg: 360, showArc: true, showLabel: true, showProtractor: false } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把钟面上的发现，写成数学的语言：",
          "时间单位不按十进制，它们按 60 一级一级换算。算经过时间，可以数格子，也可以用减法。"
        ],
        formula: "1 时 = 60 分，1 分 = 60 秒",
        keypoints: [
          "钟面有 12 大格、60 小格：分针走 1 小格是 1 分，走 1 大格是 5 分",
          "时针走 1 大格是 1 时；分针走一圈，时针正好走 1 大格",
          "秒针走 1 小格是 1 秒，走一圈是 60 秒，正好是 1 分",
          "经过时间 = 结束时刻 − 开始时刻，比如 8:05 − 7:40 = 25 分"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "钟面上，分针走 1 大格是几分？", options: ["1 分", "5 分", "10 分", "60 分"], answer: 1,
            hint: "1 大格里有 5 小格，分针走 1 小格是 1 分", explain: "1 大格 = 5 小格 = 5 分。所以走到 3 是 15 分，走到 6 是 30 分。" },
          { type: "fill", level: "基础", q: "1 时 = □ 分", answer: "60",
            hint: "分针走一圈是多少小格？", explain: "分针走一圈 60 小格，时针正好走 1 大格，所以 1 时 = 60 分。" },
          { type: "choice", level: "基础", q: "秒针走一圈，分针走几小格？", options: ["1 小格", "5 小格", "10 小格", "走满一整圈"], answer: 0,
            hint: "1 分 = 60 秒，秒针走一圈正好是 1 分", explain: "秒针走一圈是 60 秒 = 1 分，分针这时正好走 1 小格。" },
          { type: "choice", level: "变式", q: "为什么 1 时等于 60 分，而不是 100 分？", options: ["因为分针走一圈正好 60 小格，同一时间里时针正好走 1 大格", "因为 60 写起来比 100 短", "只是随便约定，没有什么道理"], answer: 0,
            hint: "想想动画：分针跑一圈时，时针走了多远？", explain: "时针走 1 大格（1 时）的时间里，分针正好跑完一圈 60 小格（60 分），所以 1 时 = 60 分。这是钟面自己「转」出来的约定。" },
          { type: "fill", level: "变式", q: "2 时 = □ 分", answer: "120",
            hint: "1 时 = 60 分，2 时就是 2 个 60 分", explain: "60 + 60 = 120，所以 2 时 = 120 分。" },
          { type: "choice", level: "变式", q: "分针从 12 走到 4，走了几分？", options: ["4 分", "15 分", "20 分", "40 分"], answer: 2,
            hint: "走了几大格？每大格 5 分", explain: "从 12 到 4 是 4 大格，4 × 5 = 20 分。数大格，不是数数字。" },
          { type: "choice", level: "挑战", q: "阿绿 7:40 出门，8:05 到达观景台，路上用了多长时间？", options: ["25 分", "35 分", "45 分", "65 分"], answer: 0,
            hint: "分两段：7:40 → 8:00 是多久？8:00 → 8:05 呢？", explain: "7:40 到 8:00 是 20 分，8:00 到 8:05 是 5 分，20 + 5 = 25 分。" },
          { type: "fill", level: "温故", q: "还记得吗：1 米 = □ 厘米（二年级 · 长度单位）", answer: "100",
            hint: "想想方格动画：10 × 10 个小格", explain: "1 米 = 100 厘米。长度按 100 换算，时间却按 60 换算——这就是阿绿迟到的原因！" }
        ]
      },
      {
        type: "review",
        question: "从 7:40 到 8:05，到底经过了多长时间？",
        ways: [
          { name: "数格子", text: "分针从指着 8 走到指着 1，走了 5 大格：5 × 5 = 25 分。" },
          { name: "分段算", text: "7:40 → 8:00 是 20 分，8:00 → 8:05 是 5 分，20 + 5 = 25 分。" },
          { name: "竖式减", text: "8 时 05 分 − 7 时 40 分：5 分不够减 40 分，从 8 时退 1 当 60 分，65 − 40 = 25 分。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：为什么 1 时是 60 分，而不是像 1 米 = 100 厘米那样的 100 分？"
      },
      {
        type: "beauty",
        headline: "为什么一小时是 60 分？谢谢四千年前的巴比伦人",
        paragraphs: [
          "我们数数用十进制，多半是因为人有 10 根手指。可古巴比伦人偏偏看中了 60，用 60 进制记数、划分时间。",
          "60 的本事在于「好分」：它能被 2、3、4、5、6、10、12 整整齐齐地平分。一小时想分两半、三份、四份、五份，都不剩零头！",
          "于是 1 时 = 60 分、1 分 = 60 秒的约定一直用到今天，连圆周的 360° 都带着巴比伦的影子。去博物馆看看这段历史吧！"
        ],
        museum: "his-babylon"
      }
    ]
  },

  /* ================= 单元 5：万以内的加法和减法 ================= */
  {
    id: "g3u5",
    title: "万以内的加法和减法",
    subtitle: "满十进一的大本领",
    tag: "运算",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "图书馆的格子危机",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="352" cy="40" r="22" fill="#ffd166"/>
          <rect x="66" y="22" width="188" height="36" rx="18" fill="#ffffff" stroke="#2ec4b6" stroke-width="3"/>
          <text x="160" y="46" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">个位 8 + 5 = 13，写不下！</text>
          <g fill="#2ec4b6" stroke="#159e92" stroke-width="2">
            <rect x="66" y="104" width="15" height="46" rx="3"/><rect x="86" y="104" width="15" height="46" rx="3"/><rect x="106" y="104" width="15" height="46" rx="3"/><rect x="126" y="104" width="15" height="46" rx="3"/><rect x="146" y="104" width="15" height="46" rx="3"/>
            <rect x="236" y="104" width="15" height="46" rx="3"/><rect x="256" y="104" width="15" height="46" rx="3"/><rect x="276" y="104" width="15" height="46" rx="3"/><rect x="296" y="104" width="15" height="46" rx="3"/>
          </g>
          <rect x="56" y="150" width="120" height="12" rx="6" fill="#159e92"/>
          <rect x="226" y="150" width="120" height="12" rx="6" fill="#159e92"/>
          <text x="201" y="136" font-size="34" fill="#0f766e" font-weight="bold" text-anchor="middle">+</text>
          <text x="116" y="192" font-size="17" fill="#0f766e" font-weight="bold" text-anchor="middle">278 本</text>
          <text x="286" y="192" font-size="17" fill="#0f766e" font-weight="bold" text-anchor="middle">165 本</text>
          <text x="200" y="224" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">📚 星空图书馆大清点</text>
        </svg>`,
        paragraphs: [
          "青绿星球的星空图书馆要清点藏书。馆长报出两个数：上层 278 本，下层 165 本——「一共多少本？」",
          "阿绿摆开竖式：个位 8 + 5 = 13。他提笔要写，却愣住了：个位的格子只有一格，13 有两个数字，<b>塞不下呀！</b>",
          "多出来的那个「1」该去哪儿？扔掉吗？当然不能！它藏着一个所有大数加减法都要遵守的约定：<b>满十进一</b>。学会它，再大的数也算得又快又准。"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "先动手体会「打包」：帮阿绿把散落的能量块摆成 2 行 10 列。摆好后想一想：每摆满 10 块，会发生什么？",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 2, targetCols: 10 },
        successText: "摆好了！2 行 10 列，一共 20 块 = 2 个十。记住：每满 10 个一，就打包成 1 个十——这就是竖式里「进一」的秘密！"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "先看个位：8 + 5。摆出 8 块。", state: { rows: 1, cols: 8, showTotal: true } },
          { caption: "添上 5 块里的 2 块，先凑满 10！8 + 2 = 10。", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "5 里用掉 2，还剩 3。所以 8 + 5 = 13。", state: { rows: 1, cols: 3, showTotal: true } },
          { caption: "10 个一装满一条，就「打包」成 1 个十，送到十位去——竖式个位右下角小小的进位「1」，就是它！", state: { rows: 1, cols: 10, showTotal: true } },
          { caption: "十位要是也满 10 条呢？10 个十 = 1 个百，再向百位进一。满十进一，一级一级往上送！", state: { rows: 10, cols: 10, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把方块「打包」的过程，写成竖式的语言：",
          "万以内的加减法和百以内一样算，只是位数更多——规则一条没变。"
        ],
        formula: "278 + 165 = 443，536 − 278 = 258",
        keypoints: [
          "相同数位对齐，从个位算起",
          "加法：哪一位满十，就向前一位进 1（小小的进位 1 别忘写、别忘加）",
          "减法：哪一位不够减，就从前一位退 1 当 10，再接着减",
          "算完验算：加法用和减一个加数，减法用差加减数，对得上才算对"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "364 + 52 = ？", options: ["416", "884", "406", "426"], answer: 0,
            hint: "数位对齐：52 的 5 对着十位，2 对着个位", explain: "个位 4+2=6，十位 6+5=11 写 1 进 1，百位 3+1=4，得 416。" },
          { type: "fill", level: "基础", q: "278 + 165 = □", answer: "443",
            hint: "个位 8+5=13，写 3 进 1，别忘记十位要加上进位的 1", explain: "个位写 3 进 1；十位 7+6+1=14 写 4 进 1；百位 2+1+1=4。得 443。" },
          { type: "choice", level: "基础", q: "竖式里「满十进一」的「1」，进到哪里去？", options: ["前一位", "后一位（右边）", "留在心里，不用写"], answer: 0,
            hint: "10 个一打包成 1 个十，「十」住在个位的哪边？", explain: "10 个一 = 1 个十，要送到十位去；十位在个位的前一位。进位的 1 要写小一点，提醒自己待会儿加上。" },
          { type: "choice", level: "变式", q: "为什么个位满十要向十位进一？", options: ["因为 10 个一就是 1 个十，打包送上前去，总数一点没变", "因为格子太小写不下两位数，只好这样", "老师规定的，没有原因"], answer: 0,
            hint: "想想方块动画：10 块散积木打包成一条，块数变了吗？", explain: "10 个一和 1 个十一样多，打包只是换个摆法，总数不变。所以进位既不多数也不少数。" },
          { type: "fill", level: "变式", q: "536 − 278 = □", answer: "258",
            hint: "个位 6 减 8 不够，向十位退 1 当 10：16 − 8 = ?", explain: "个位 16−8=8；十位 3 退走 1 剩 2，2 减 7 不够再退 1：12−7=5；百位 5 退走 1 剩 4，4−2=2。得 258。" },
          { type: "judge", level: "变式", q: "奇奇算 305 − 178 = 237，算得对吗？", answer: false,
            hint: "个位 5 减 8 不够，十位是 0，要再往百位退", explain: "不对！305 − 178 = 127。十位是 0 时，要先把百位的 1 退成 10 个十，再从十位退 1 给个位。验算：127 + 178 = 305 ✓。" },
          { type: "choice", level: "挑战", q: "图书室有 425 本书，借出 168 本，又买来 95 本，现在有多少本？", options: ["352 本", "257 本", "342 本", "688 本"], answer: 0,
            hint: "先算借出：425 − 168 = ? 再加上买来的 95", explain: "425 − 168 = 257，257 + 95 = 352。两步计算，一步一步来。" },
          { type: "choice", level: "温故", q: "还记得吗：23 × 3 = ？（第 1 课 · 多位数乘一位数）", options: ["69", "66", "96", "29"], answer: 0,
            hint: "拆数魔法：20 × 3 = 60，3 × 3 = 9", explain: "60 + 9 = 69。乘法里的「进位」和加法一样，都是满十进一！" }
        ]
      },
      {
        type: "review",
        question: "278 + 165 为什么等于 443？你能用几种方法说服别人？",
        ways: [
          { name: "竖式法", text: "个位 8+5=13，写 3 进 1；十位 7+6+1=14，写 4 进 1；百位 2+1+1=4，得 443。" },
          { name: "拆数法", text: "把 165 拆成 100+60+5：278+100=378，378+60=438，438+5=443。" },
          { name: "凑整法", text: "278 差 2 就满 280：278+2=280，165−2=163，280+163=443。" }
        ],
        ask: "给爸爸妈妈讲讲：竖式里小小的进位「1」是怎么来的？退位减时「退 1 当 10」又是什么道理？（可以拿 10 根小棒捆成一捆演示给他们看）"
      },
      {
        type: "beauty",
        headline: "满十进一：全世界最聪明的记数约定",
        paragraphs: [
          "古罗马人用 I、V、X 记数，写个大数又慢又容易错。而在「满十进一」的位值制里，数字站的位置不同，身价就不同——3 站在百位就是 300。",
          "这套记数法最早在印度成熟，经阿拉伯传遍世界，所以今天的 0~9 也叫「阿拉伯数字」。有了它，再大的数也能用竖式算得明明白白。",
          "会进位、会退位，你就接过了人类两千年的智慧接力棒。去博物馆看看数字的旅行吧！"
        ],
        museum: "his-arabic"
      }
    ]
  },

  /* ================= 单元 6：倍的认识 ================= */
  {
    id: "g3u6",
    title: "倍的认识",
    subtitle: "比出来的「倍」，不是加出来的",
    tag: "数感",
    minutes: 20,
    scenes: [
      {
        type: "story",
        title: "胡萝卜到底有几根？",
        art: `<svg viewBox="0 0 400 240" width="400" height="240">
          <rect width="400" height="240" rx="20" fill="#e3faf7"/>
          <circle cx="52" cy="42" r="22" fill="#ffd166"/>
          <g fill="#2ec4b6" stroke="#159e92" stroke-width="3">
            <circle cx="86" cy="96" r="17"/><circle cx="126" cy="96" r="17"/>
          </g>
          <text x="106" y="148" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">小灰兔：2 根（1 份）</text>
          <g fill="none" stroke="#2ec4b6" stroke-width="2">
            <rect x="212" y="52" width="92" height="36" rx="18"/>
            <rect x="212" y="102" width="92" height="36" rx="18"/>
            <rect x="212" y="152" width="92" height="36" rx="18"/>
          </g>
          <g fill="#2ec4b6" stroke="#159e92" stroke-width="3">
            <circle cx="240" cy="70" r="12"/><circle cx="276" cy="70" r="12"/>
            <circle cx="240" cy="120" r="12"/><circle cx="276" cy="120" r="12"/>
            <circle cx="240" cy="170" r="12"/><circle cx="276" cy="170" r="12"/>
          </g>
          <text x="258" y="212" font-size="15" fill="#0f766e" font-weight="bold" text-anchor="middle">小狐狸：3 个 2（3 倍）</text>
          <text x="186" y="34" font-size="17" fill="#0f766e" font-weight="bold">5 根？还是 6 根？</text>
        </svg>`,
        paragraphs: [
          "青绿农场上，小灰兔收了 2 根胡萝卜。小狐狸拍拍胸脯：「我收的是你的 3 倍！」",
          "小灰兔挠挠头：「3 倍？那就是 2 + 3 = 5 根呗！」小狐狸却推来一小车——整整 6 根！",
          "咦，怎么是 6 不是 5？<b>原来「倍」不是加法，而是「比」出来的</b>：把 2 根看成 1 份，3 倍就是 3 个这样的 1 份。摆一摆，就清楚了。"
        ]
      },
      {
        type: "play",
        widget: "blocks",
        prompt: "动手摆一摆：小灰兔有 2 根胡萝卜（1 份），小狐狸是它的 3 倍——也就是 3 个 2。请摆出 3 行 2 列，看看小狐狸到底有几根！",
        config: { interactive: true, rows: 1, cols: 1, targetRows: 3, targetCols: 2 },
        successText: "摆对了！3 个 2 是 6，所以 2 的 3 倍是 6。注意：不是 2 + 3 = 5 哦——「倍」是比出来的，不是加出来的。"
      },
      {
        type: "anim",
        widget: "blocks",
        steps: [
          { caption: "小灰兔有 2 根胡萝卜。先把 2 根看成 1 份。", state: { rows: 1, cols: 2, showTotal: true } },
          { caption: "小狐狸有 2 个 2 根，就是 2 份——是小灰兔的 2 倍。2 × 2 = 4。", state: { rows: 2, cols: 2, showTotal: true } },
          { caption: "3 个 2 根：3 倍！2 × 3 = 6。原来 3 倍是 6 根，不是 5 根。", state: { rows: 3, cols: 2, showTotal: true } },
          { caption: "4 个 2 根就是 4 倍：2 × 4 = 8。有几个 2，就是几倍。", state: { rows: 4, cols: 2, showTotal: true } },
          { caption: "反过来问：6 是 2 的几倍？数一数 6 里面有几个 2——6 ÷ 2 = 3，所以 6 是 2 的 3 倍。", state: { rows: 3, cols: 2, showTotal: true } }
        ]
      },
      {
        type: "symbol",
        paragraphs: [
          "把摆方块的发现，写成数学的语言：",
          "「倍」表示两个数量的关系：一个数里面有几个另一个数，就是它的几倍。"
        ],
        formula: "2 的 3 倍 = 3 个 2 = 2 × 3 = 6",
        keypoints: [
          "先把「1 份」定下来：有几个 1 份，就是几倍",
          "求一个数的几倍是多少 → 用乘法：2 × 3 = 6",
          "求一个数是另一个数的几倍 → 用除法：6 ÷ 2 = 3",
          "「倍」不是单位名称：答句写「6 根」，不写「6 倍根」"
        ]
      },
      {
        type: "quiz",
        questions: [
          { type: "choice", level: "基础", q: "2 的 3 倍是多少？", options: ["5", "6", "8", "1"], answer: 1,
            hint: "3 倍就是 3 个 2：2 + 2 + 2 = ?", explain: "2 的 3 倍 = 3 个 2 = 2 × 3 = 6。不是 2 + 3！" },
          { type: "fill", level: "基础", q: "4 的 5 倍 = □", answer: "20",
            hint: "5 个 4 相加，或者 4 × 5", explain: "4 的 5 倍 = 4 × 5 = 20。" },
          { type: "choice", level: "基础", q: "第一行摆 3 块积木，第二行摆了 3 个 3 块。第二行是第一行的几倍？", options: ["3 倍", "6 倍", "9 倍", "1 倍"], answer: 0,
            hint: "把 3 块看成 1 份，第二行有这样的几份？", explain: "3 个 3 块就是 3 份，所以是 3 倍。9 是第二行的块数，不是倍数。" },
          { type: "choice", level: "变式", q: "为什么说「倍」不是加法？", options: ["因为「2 的 3 倍」是把 2 看成 1 份、比出 3 个这样的 1 份，是 3 个 2，不是 2 + 3", "因为加法算得慢，乘法算得快", "没有原因，记住就行"], answer: 0,
            hint: "想想小狐狸的胡萝卜：3 倍为什么是 6 不是 5？", explain: "「倍」是把两个数量作比较：定好 1 份，看有几个 1 份。2 的 3 倍 = 3 个 2 = 6；而 2 + 3 = 5 只是合并，不是比较。" },
          { type: "choice", level: "变式", q: "12 是 4 的几倍？", options: ["3 倍", "8 倍", "48 倍", "16 倍"], answer: 0,
            hint: "数一数 12 里面有几个 4：12 ÷ 4 = ?", explain: "12 ÷ 4 = 3，12 里有 3 个 4，所以 12 是 4 的 3 倍。" },
          { type: "judge", level: "变式", q: "奇奇说：「3 的 4 倍就是 3 + 4 = 7。」", answer: false,
            hint: "4 倍是 4 个 3，不是一个 3 加一个 4", explain: "错！3 的 4 倍 = 4 个 3 = 3 × 4 = 12。把「倍」当加法，就会闹出小灰兔那样的笑话。" },
          { type: "choice", level: "挑战", q: "果园里有 6 棵苹果树，梨树的棵数是苹果树的 4 倍。梨树有多少棵？", options: ["10 棵", "24 棵", "18 棵", "30 棵"], answer: 1,
            hint: "4 倍就是 4 个 6：6 × 4 = ?", explain: "6 × 4 = 24，梨树有 24 棵。求「几倍是多少」用乘法。" },
          { type: "choice", level: "温故", q: "还记得吗：把一个圆平均分成 4 份，每份是它的几分之一？（第 2 课 · 分数的初步认识）", options: ["二分之一", "四分之一", "四分之四", "三分之一"], answer: 1,
            hint: "平均分成的份数写在分数线下面", explain: "平均分成 4 份，每份是 1/4，读作四分之一。" }
        ]
      },
      {
        type: "review",
        question: "2 的 3 倍为什么是 6，而不是 5？",
        ways: [
          { name: "摆方块", text: "把 2 看成 1 份，摆 3 行 2 列，一块一块数，正好 6 块。" },
          { name: "连加法", text: "3 个 2 相加：2 + 2 + 2 = 6。" },
          { name: "乘法", text: "求 2 的 3 倍是多少用乘法：2 × 3 = 6。" }
        ],
        ask: "用你自己的话，给爸爸妈妈讲讲：「倍」和「加法」有什么不一样？（拿 2 块积木和 6 块积木摆给他们看）"
      },
      {
        type: "beauty",
        headline: "大自然的「倍」：藏在花草里的比例",
        paragraphs: [
          "向日葵花盘里的种子排成螺旋，往两个方向数一数，常常是 34 条和 55 条。松果、菠萝也藏着这样的数：1、1、2、3、5、8、13……后一个数大约是前一个的 1.6 倍。",
          "古希腊人最爱研究这种「比一比」的关系：欧几里得的《几何原本》专门用一整卷讨论「比」，建筑、雕塑里都藏着它的影子。",
          "从胡萝卜的 3 倍，到向日葵的 1.6 倍——学会「比一比」的眼光，你就能看见世界藏起来的秩序。"
        ],
        lab: "fibonacci",
        museum: "ppl-euclid"
      }
    ]
  }
);
