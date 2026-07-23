#!/usr/bin/env node
/* 扩展单元文件自检（push 模式）
   用法: node tools/check-ext.js content/g2b.js g2u4 g2u5 g2u6
   校验该文件 push 的每个单元：7 幕结构、题目质量、温故题、review 一题多解。*/
"use strict";
const fs = require("fs");
global.window = global;

const file = process.argv[2];
const expectIds = process.argv.slice(3);
if (!file || !expectIds.length) {
  console.error("用法: node tools/check-ext.js <file> <id1> <id2> ...");
  process.exit(2);
}

const WIDGETS = { blocks: 1, fraction: 1, grid: 1, angle: 1, circle: 1, guess: 1, binary: 1, coins: 1, sort: 1 };
const SCENE_ORDER = ["story", "play", "anim", "symbol", "quiz", "review", "beauty"];
const LEVELS = { "基础": 1, "变式": 1, "挑战": 1, "温故": 1 };
const LABS = { "fractal-tree": 1, fibonacci: 1, kaleidoscope: 1, tessellation: 1, "prime-spiral": 1, "magic-square": 1 };
const MUSEUM = {};
["his-jiesheng","his-babylon","his-egypt","his-suanchou","his-zero","his-arabic",
 "ppl-gauss","ppl-archimedes","ppl-zu","ppl-euclid","ppl-hua","ppl-turing",
 "prf-gougu","prf-oddsum","prf-square","prf-triangle",
 "mys-collatz","mys-goldbach","mys-twinprime","mys-perfect"].forEach((id) => { MUSEUM[id] = 1; });

let errors = 0;
const err = (m) => { errors++; console.error("✗ " + m); };

try { eval(fs.readFileSync(file, "utf8")); } catch (e) { err("执行失败: " + e.message); process.exit(1); }

const g = Number(expectIds[0][1]);
const data = global.MW && MW.content && MW.content[g];
if (!data) { err("未注册 MW.content[" + g + "]"); process.exit(1); }
const units = data.units;

if (units.length !== expectIds.length) err("应 push " + expectIds.length + " 个单元，实际 " + units.length);

units.forEach(function (u, i) {
  const uid = u.id || "?";
  if (u.id !== expectIds[i]) err("第 " + (i + 1) + " 个单元 id 应为 " + expectIds[i] + "，实际 " + uid);
  for (const k of ["title", "subtitle", "tag", "minutes"]) if (!u[k]) err(uid + " 缺 " + k);
  if (!Array.isArray(u.scenes) || u.scenes.length !== 7) { err(uid + " 必须恰好 7 幕"); return; }
  u.scenes.forEach(function (s, si) {
    const sid = uid + " 第" + (si + 1) + "幕";
    if (s.type !== SCENE_ORDER[si]) err(sid + " 应为 " + SCENE_ORDER[si] + "，实际 " + s.type);
    if (s.type === "story" && (!s.paragraphs || !s.paragraphs.length)) err(sid + " 缺 paragraphs");
    if (s.type === "anim") {
      if (!WIDGETS[s.widget]) err(sid + " 未知教具 " + s.widget);
      if (!Array.isArray(s.steps) || s.steps.length < 2) err(sid + " 至少 2 步");
      (s.steps || []).forEach(function (st, j) {
        if (!st.caption) err(sid + " 第" + (j + 1) + "步缺 caption");
        if (!st.state) err(sid + " 第" + (j + 1) + "步缺 state");
      });
    }
    if (s.type === "play") {
      if (!WIDGETS[s.widget]) err(sid + " 未知教具 " + s.widget);
      if (s.widget === "circle") err(sid + " circle 不支持交互");
      if (!s.prompt) err(sid + " 缺 prompt");
      if (!s.config) err(sid + " 缺 config");
      if (s.config && s.config.onSuccess) err(sid + " 不应自带 onSuccess");
    }
    if (s.type === "symbol" && !s.formula && (!s.paragraphs || !s.paragraphs.length)) err(sid + " 需 formula 或 paragraphs");
    if (s.type === "quiz") {
      if (!Array.isArray(s.questions) || s.questions.length < 6 || s.questions.length > 9)
        err(sid + " 题目须 6~9，当前 " + (s.questions ? s.questions.length : 0));
      let review = 0, why = 0;
      (s.questions || []).forEach(function (q, j) {
        const qid = sid + " 第" + (j + 1) + "题";
        if (!q.q || !q.hint || !q.explain) err(qid + " 缺 q/hint/explain");
        if (q.level != null && !LEVELS[q.level]) err(qid + " level 非法: " + q.level);
        if (q.level === "温故") review++;
        if (/为什么|为何/.test(q.q)) why++;
        if (q.type === "choice") {
          if (!Array.isArray(q.options) || q.options.length < 2) err(qid + " 缺 options");
          else if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length) err(qid + " answer 越界");
        } else if (q.type === "fill") {
          if (q.answer == null || q.answer === "") err(qid + " 缺 answer");
        } else if (q.type === "judge") {
          if (typeof q.answer !== "boolean") err(qid + " answer 须 true/false");
        } else err(qid + " 未知题型 " + q.type);
      });
      if (review === 0) err(sid + " 缺 level:\"温故\" 题");
      if (why === 0) err(sid + " 缺\"为什么\"题");
    }
    if (s.type === "review") {
      if (!Array.isArray(s.ways) || s.ways.length < 2) err(sid + " 至少 2 种解法");
      if (!s.ask) err(sid + " 缺 ask");
    }
    if (s.type === "beauty") {
      if (!s.headline || !s.paragraphs || !s.paragraphs.length) err(sid + " 缺 headline/paragraphs");
      if (s.lab && !LABS[s.lab]) err(sid + " 未知 lab id " + s.lab);
      if (s.museum && !MUSEUM[s.museum]) err(sid + " 未知 museum id " + s.museum);
    }
  });
});

if (errors) { console.error("\n共 " + errors + " 个问题"); process.exit(1); }
console.log("✓ 扩展单元自检通过：" + file + "（" + expectIds.join(", ") + "）");
