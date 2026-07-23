#!/usr/bin/env node
/* 数学奇境 · 内容文件结构校验（零依赖）
   用法: node tools/validate.js            —— 校验 content/ 下全部 g*.js
         node tools/validate.js content/g3.js  —— 只校验指定文件 */
"use strict";
const fs = require("fs");
const path = require("path");

global.window = global; // 内容文件只做 window.MW 注册

const root = path.join(__dirname, "..");
let files = process.argv.slice(2);
if (!files.length) {
  files = fs.readdirSync(path.join(root, "content"))
    .filter((f) => /^g\d[a-z]?\.js$/.test(f))
    .sort()
    .map((f) => path.join(root, "content", f));
}

const WIDGETS = { blocks: 1, fraction: 1, grid: 1, angle: 1, circle: 1, guess: 1, binary: 1, coins: 1, sort: 1, sketchpad: 1, vertical: 1, shape: 1 };
const SCENE_ORDER = ["story", "play", "anim", "symbol", "quiz", "review", "beauty"];
const SCENE_ORDER_INQUIRY = ["story", "play", "anim", "play", "symbol", "quiz", "review", "beauty"];
const LABS = { "fractal-tree": 1, fibonacci: 1, kaleidoscope: 1, tessellation: 1, "prime-spiral": 1, "magic-square": 1 };
const MUSEUM = {};
["his-jiesheng","his-babylon","his-egypt","his-suanchou","his-zero","his-arabic",
 "ppl-gauss","ppl-archimedes","ppl-zu","ppl-euclid","ppl-hua","ppl-turing",
 "prf-gougu","prf-oddsum","prf-square","prf-triangle",
 "mys-collatz","mys-goldbach","mys-twinprime","mys-perfect"].forEach((id) => { MUSEUM[id] = 1; });
const LEVELS = { "基础": 1, "变式": 1, "挑战": 1, "温故": 1, "开放": 1 };

let errors = 0;
function err(file, msg) { errors++; console.error("✗ " + path.basename(file) + ": " + msg); }

for (const file of files) {
  const code = fs.readFileSync(file, "utf8");
  try { eval(code); } catch (e) { err(file, "执行失败: " + e.message); continue; }
}

const content = global.MW && MW.content ? MW.content : {};
for (const file of files) {
  const m = path.basename(file).match(/^g(\d)[a-z]?\.js$/);
  if (!m) continue;
  const g = Number(m[1]);
  const data = content[g];
  if (!data) { err(file, "未注册 MW.content[" + g + "]"); continue; }
  if (typeof data.name !== "string" || !data.name) err(file, "缺少 name");
  if (!Array.isArray(data.units) || data.units.length !== 8) err(file, "units 必须恰好 8 个（v3），当前 " + (data.units ? data.units.length : 0));
  (data.units || []).forEach(function (u, ui) {
    const uid = "单元" + (ui + 1) + "(" + (u.id || "?") + ")";
    if (u.id !== "g" + g + "u" + (ui + 1)) err(file, uid + " id 应为 g" + g + "u" + (ui + 1));
    for (const k of ["title", "subtitle", "tag"]) if (!u[k]) err(file, uid + " 缺少 " + k);
    if (!u.minutes) err(file, uid + " 缺少 minutes");
    if (!Array.isArray(u.scenes) || (u.scenes.length !== 7 && u.scenes.length !== 8)) {
      err(file, uid + " scenes 须为 7 幕（标准课）或 8 幕（探究课），当前 " + (u.scenes ? u.scenes.length : 0)); return;
    }
    const ORDER = u.scenes.length === 8 ? SCENE_ORDER_INQUIRY : SCENE_ORDER;
    if (u.scenes.length === 8 && !u.inquiry) console.warn("  ⚠ " + uid + " 为 8 幕探究课，建议标注 inquiry:true");
    u.scenes.forEach(function (s, si) {
      const sid = uid + " 第" + (si + 1) + "幕";
      if (s.type !== ORDER[si]) err(file, sid + " 类型应为 " + ORDER[si] + "，实际 " + s.type);
      if (s.type === "story" && (!Array.isArray(s.paragraphs) || !s.paragraphs.length)) err(file, sid + " story 缺 paragraphs");
      if (s.type === "anim") {
        if (!WIDGETS[s.widget]) err(file, sid + " 未知教具 " + s.widget);
        if (!Array.isArray(s.steps) || s.steps.length < 2) err(file, sid + " anim 至少 2 步");
        (s.steps || []).forEach(function (st, i) {
          if (!st.caption) err(file, sid + " 第" + (i + 1) + "步缺 caption");
          if (!st.state || typeof st.state !== "object") err(file, sid + " 第" + (i + 1) + "步缺 state");
        });
      }
      if (s.type === "play") {
        if (!WIDGETS[s.widget]) err(file, sid + " 未知教具 " + s.widget);
        if (s.widget === "circle") err(file, sid + " circle 教具不支持交互");
        if (!s.prompt) err(file, sid + " play 缺 prompt");
        if (!s.config || typeof s.config !== "object") err(file, sid + " play 缺 config");
        if (s.config && s.config.onSuccess) err(file, sid + " config 不应自带 onSuccess（播放器注入）");
      }
      if (s.type === "symbol") {
        if (!s.formula && (!Array.isArray(s.paragraphs) || !s.paragraphs.length)) err(file, sid + " symbol 至少需要 formula 或 paragraphs");
        if (s.keypoints && !Array.isArray(s.keypoints)) err(file, sid + " keypoints 必须是数组");
      }
      if (s.type === "quiz") {
        if (!Array.isArray(s.questions) || s.questions.length < 6 || s.questions.length > 9)
          err(file, sid + " quiz 题目数须 6~9，当前 " + (s.questions ? s.questions.length : 0));
        let review = 0, open = 0;
        (s.questions || []).forEach(function (q, i) {
          const qid = sid + " 第" + (i + 1) + "题";
          if (!q.q) err(file, qid + " 缺 q");
          if (q.type !== "open" && q.type !== "build" && !q.hint) err(file, qid + " 缺 hint");
          if (q.type !== "open" && q.type !== "build" && !q.explain) err(file, qid + " 缺 explain");
          if (q.level != null) {
            if (!LEVELS[q.level]) err(file, qid + " level 只能是 基础/变式/挑战/温故/开放，实际 " + q.level);
            if (q.level === "温故") review++;
            if (q.level === "开放") open++;
          }
          if (q.type === "choice") {
            if (!Array.isArray(q.options) || q.options.length < 2) err(file, qid + " choice 缺 options");
            else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length)
              err(file, qid + " choice answer 下标越界");
          } else if (q.type === "fill") {
            if (!q.check && (q.answer == null || q.answer === "")) err(file, qid + " fill 缺 answer 或 check 规则");
          } else if (q.type === "judge") {
            if (typeof q.answer !== "boolean") err(file, qid + " judge answer 须为 true/false");
          } else if (q.type === "multi") {
            if (!Array.isArray(q.options) || q.options.length < 2) err(file, qid + " multi 缺 options");
            if (!Array.isArray(q.answer) || !q.answer.length) err(file, qid + " multi answer 须为下标数组");
            else q.answer.forEach(function (x) {
              if (typeof x !== "number" || x < 0 || x >= q.options.length) err(file, qid + " multi answer 下标越界");
            });
          } else if (q.type === "open") {
            if (!q.reference) err(file, qid + " open 建议给 reference（参考想法）");
          } else if (q.type === "build") {
            if (!WIDGETS[q.widget]) err(file, qid + " build 未知教具 " + q.widget);
            if (!q.config) err(file, qid + " build 缺 config");
          } else err(file, qid + " 未知题型 " + q.type);
        });
        // 间隔复习：除二年级第一课外，每课至少 1 道「温故」题
        if (!(g === 2 && ui === 0) && review === 0) err(file, sid + " 至少需要 1 道 level:\"温故\" 的间隔复习题");
        // 开放性：新写课程建议每课至少 1 道开放题（暂不强制，只提示）
        if (open === 0) console.warn("  ⚠ " + sid + " 暂无 level:\"开放\" 的开放题（老师建议每课 ≥1 道）");
      }
      if (s.type === "review") {
        if (!Array.isArray(s.ways) || s.ways.length < 2) err(file, sid + " review 至少给 2 种解法（一题多解）");
        (s.ways || []).forEach(function (w, i) {
          if (!w.text) err(file, sid + " 解法" + (i + 1) + " 缺 text");
        });
        if (!s.ask) err(file, sid + " review 缺 ask（讲给家长听）");
      }
      if (s.type === "beauty") {
        if (!s.headline) err(file, sid + " beauty 缺 headline");
        if (!Array.isArray(s.paragraphs) || !s.paragraphs.length) err(file, sid + " beauty 缺 paragraphs");
        if (s.lab && !LABS[s.lab]) err(file, sid + " beauty 引用了未知实验室 id " + s.lab);
        if (s.museum && !MUSEUM[s.museum]) err(file, sid + " beauty 引用了未知博物馆 id " + s.museum);
      }
    });
  });
}

if (errors) { console.error("\n共 " + errors + " 个问题"); process.exit(1); }
console.log("✓ 内容校验通过：" + files.map((f) => path.basename(f)).join(", "));
