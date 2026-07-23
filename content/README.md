# 数学奇境 · 内容数据格式规范 v2

每个年级一个文件 `content/g{N}.js`，向 `MW.content` 注册数据。**纯数据文件，不写逻辑。**
v2 参考实现：`content/g2.js` 的第一个单元 `g2u1`（七幕完整样板，先读它再动笔）。

## 顶层结构

```js
window.MW = window.MW || {};
MW.content = MW.content || {};
MW.content[3] = { grade: 3, name: "三年级 · 青绿星球", units: [ /* 3 个单元 */ ] };
```

单元字段：`id`（g{N}u{1..3}，全局唯一）、`title`、`subtitle`、`tag`（数感/运算/空间/推理/模式/数据）、`minutes`、`scenes`。

## 七幕结构（顺序固定）

设计依据：布鲁纳三重表征（操作→图像→符号，故 play 在 anim 之前）+ 波利亚回顾 + 比约克间隔复习。

**概念密集型单元（几何概念、数概念）推荐使用 8 幕探究模板**（并在单元上加 `inquiry: true`）：
`story 情境 → play 自由画/自由摆（先产出）→ anim 观察比较 → play 动手验证（剪拼/测量）→ symbol 此时才给结论 → quiz → review → beauty`。
校验器对 7/8 幕分别按标准/探究模板检查。

### 1. story 故事导入
真实情境、制造认知冲突（丹·梅耶三幕式：先让孩子"想知道"）。两种形态：

**A. 图文版**（简单情境）：
```js
{ type:"story", title:"…", paragraphs:["…","…"], art:"<svg…>" }   // art 可选
```

**B. 分镜动画版**（推荐，参考 g2u1）：2~5 个镜头，引擎自动播放（锚点缩放镜头+字幕+可选配音）。
```js
{ type:"story", title:"…",
  shots: [
    { art:"<svg viewBox='0 0 400 240'>…</svg>",              // 本镜头画面（内联 SVG，必给）
      narration:"这一句会被念出来（配音开时）",                 // narration 或 caption 至少一个
      caption:"字幕（缺省用 narration）",
      zoom:{ ox:60, oy:55, scale:1.3 },                     // 可选：锚点缩放（ox/oy=焦点%坐标，scale≤1.4；画面恒铺满不会露白边）
      focus:"#carrots",                                      // 可选：高亮的 SVG 元素选择器
      callout:{ text:"每行 4 棵，有 2 行", pos:"bl" },       // 可选：悬浮文字（不随镜头缩放，永不被裁；pos: tl/tr/bl/br/center）
      ms:4000 }                                              // 镜头停留毫秒（默认 4200）
  ] }
```
分镜写法：第 1 镜全景建立情境 → 中间镜头用 zoom 锚定关键元素并用 focus 高亮（SVG 关键元素必须加 id）→ 冲突镜（放大问题）→ 末镜留悬念。**关键文字一律写进 callout，不要烘焙在 SVG 里**（烘焙文字会被镜头裁掉）。

### 2. play 动手操作（先探索，后讲授）
```js
{ type:"play", widget:"blocks", prompt:"给孩子看的任务", config:{…}, successText:"…" }
```

### 3. anim 动画讲解（图像化）
```js
{ type:"anim", widget:"fraction", steps:[ {caption:"…", state:{…}}, …3~6 步 ] }  // 每步写完整 state
```

### 4. symbol 符号表达（从图到式，斯基林"关系性理解"）
```js
{ type:"symbol", paragraphs:["把刚才的操作写成数学语言："], formula:"3 × 4 = 12",
  keypoints:["× 读作「乘」","3 表示 3 个","4 表示每个 4"], art:"<svg…>" }
```
`formula` 会用大字号卡片突出显示；`paragraphs`、`keypoints` 至少要有内容（formula 或 paragraphs 必填）。

### 5. quiz 分层闯关（6~9 题）
每题加 `level`：`"基础"`（直接运用）→ `"变式"`（换个角度/逆向）→ `"挑战"`（综合/生活应用）；另有 `"温故"` 与 `"开放"`。
**间隔复习（比约克）：除 g2u1 外，每课必须 ≥1 道 `level:"温故"` 的题，考本年级或之前学过的旧知识**（题面注明来源，如「还记得吗：」）。
**开放性（一线教师建议）：每课建议 ≥1 道 `level:"开放"` 的开放题**（校验器会提示缺失）。
题型：
- `choice` 单选：`{ type:"choice", level:"变式", q, options:[…], answer:0, hint, explain }`
- `fill` 填空（唯一解）：answer 为字符串或字符串数组（多写法兼容）
- `fill` 多解填空（规则判分）：`{ type:"fill", level:"开放", q:"写出一个比 0.5 大的小数", check:{gt:0.5}, hint, explain }`，规则键：`gt/lt/gte/lte/between:[a,b]/divisorOf/multipleOf`
- `judge` 判断：answer 为 true/false
- `multi` 多选说理：`{ type:"multi", q, options:[…], answer:[0,2], hint, explain }`（answer 为正确下标数组，全选对才算对）
- `open` 开放表达：`{ type:"open", level:"开放", q, placeholder?, reference:"一种参考想法……" }`（无标准答案，孩子写完后展示参考想法；无需 hint/explain）
- `build` 构造题：`{ type:"build", level:"开放", q, widget:"sketchpad", config:{interactive:true, grid:true}, reference:"参考解法……" }`（孩子用教具做出答案）
每题（除 open/build 外）必须 hint + explain。至少 1 题考"为什么"（关系性理解），不只考"怎么算"。

### 6. review 波利亚回顾（一题多解 + 讲给别人听）
```js
{ type:"review", question:"本课核心问题，如：3×4 为什么是 12？",
  ways:[ {name:"数一数", text:"4+4+4=12"}, {name:"阵列", text:"3 行 4 列共 12 块"} ],
  ask:"用你自己的话，给爸爸妈妈讲讲：为什么 3×4 和 4×3 一样多？" }
```
至少 2 种解法；`ask` 是让孩子复述的费曼练习。

### 7. beauty 数学之美
```js
{ type:"beauty", headline:"…", paragraphs:["…"], lab:"tessellation", museum:"his-jiesheng", art:"<svg…>" }
```
`lab`（实验室 id）与 `museum`（博物馆 id）二选一或都写，须与本课内容相关。

## 教具一览

| 教具 | anim state | play config |
|---|---|---|
| `blocks` 方块阵列 | `{rows, cols, showTotal}` | `{interactive:true, targetRows, targetCols}`（行列上限 10） |
| `fraction` 分数 | `{shape:"circle"\|"bar", parts, shaded, showLabel}` | `{interactive:true, shape, parts, target}` |
| `grid` 方格纸 | `{rows, cols, filled, showCount}` | `{interactive:true, rows, cols}`（铺满成功） |
| `angle` 角 | `{deg, showArc, showLabel, showProtractor}` | `{interactive:true, deg, target, tolerance, showProtractor}` |
| `circle` 圆（仅动画） | `{mode:"roll"\|"sectors", t:0~1, n:8}` | — |
| `sketchpad` 画板（仅交互） | — | `{interactive:true, grid:true, straightEdge:false}` 先画一画再验证（无标准答案） |
| `vertical` 竖式动画 | `{op:"add"\|"sub"\|"mul"\|"div", a, b, step}` | `{interactive:true, op, a, b}` 点「下一步」走完竖式 |
| `shape` 图形剪拼 | `{mode:"parallelogram"\|"triangle"\|"trapezoid", step:0~2}` | `{interactive:true, mode}` 剪拼发现面积公式 |
| `chart` 数据图表 | `{mode:"bar"\|"line"\|"pie", data:[{label,value}], title, highlight, showValues}` | `{interactive:true, mode:"bar", data, targets:[…], targetsText}` 对照表格调条形高度 |
| `guess` 二分猜数 | `{interactive:false, min, max, lo, hi, guess, steps, info}`（数轴演示） | `{interactive:true, min:1, max:100}` 机器人二分猜孩子想的数 |
| `binary` 二进制卡牌 | `{cards:5, bits:[0,1,1,0,1], showValues:true}` | `{interactive:true, cards:5, target:19}` 翻牌凑目标数 |
| `coins` 抛硬币（仅交互） | — | `{interactive:true, goal:100}` 按钮抛 1/10/100 次，画频率曲线 |
| `sort` 冒泡排序 | `{values:[5,2,7,1], step:0}`（step=已执行的比较步数） | `{interactive:true, values:[…]}` 逐步比较交换 |

play 的 config 不写 `onSuccess`（播放器注入）。anim 的 caption 是纯文本（无 HTML）。

## 实验室 id / 博物馆 id

- lab：`fractal-tree` `fibonacci` `kaleidoscope` `tessellation` `prime-spiral` `magic-square`
- museum：史 `his-jiesheng` `his-babylon` `his-egypt` `his-suanchou` `his-zero` `his-arabic`；
  人 `ppl-gauss` `ppl-archimedes` `ppl-zu` `ppl-euclid` `ppl-hua` `ppl-turing`；
  证 `prf-gougu` `prf-oddsum` `prf-square` `prf-triangle`；
  谜 `mys-collatz` `mys-goldbach` `mys-twinprime` `mys-perfect`

## 写作风格

- 面向对应年级：短句、有画面感、像讲故事；先探索后答案；夸过程不夸聪明。
- 数学必须准确（对齐人教版），quiz 答案逐一验算，干扰项不能撞等值答案。
- SVG 插图：简洁可爱，viewBox `0 0 400 240` 左右，用色跟随年级主题。
- 完成必做：`node --check content/g{N}.js` 与 `node tools/validate.js content/g{N}.js` 全绿。
