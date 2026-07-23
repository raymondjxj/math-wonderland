/* 数学奇境 · 进度系统：星星 / 徽章 / 安静模式（localStorage） */
window.MW = window.MW || {};

MW.progress = (function () {
  var KEY = "mw_progress_v1";

  function blank() { return { stars: {}, lab: {}, quiet: false, mistakes: [], drills: {} }; }

  function get() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var d = JSON.parse(raw);
      d.stars = d.stars || {}; d.lab = d.lab || {};
      d.mistakes = d.mistakes || []; d.drills = d.drills || {};
      return d;
    } catch (e) { return blank(); }
  }

  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* 隐私模式等 */ }
  }

  function addStar(unitId) {
    var d = get();
    if (!d.stars[unitId]) { d.stars[unitId] = 1; save(d); return true; }
    return false;
  }

  function hasStar(unitId) { return !!get().stars[unitId]; }

  function gradeStars(g) {
    var d = get(), n = 0;
    for (var k in d.stars) if (k.indexOf("g" + g + "u") === 0) n++;
    return n;
  }

  function totalStars() {
    var d = get(), n = 0;
    for (var k in d.stars) n++;
    return n;
  }

  function thinkStars() {
    var d = get(), n = 0;
    for (var k in d.stars) if (k.indexOf("think") === 0) n++;
    return n;
  }

  function visitLab(id) {
    var d = get();
    if (!d.lab[id]) { d.lab[id] = true; save(d); }
  }

  function labCount() {
    var d = get(), n = 0;
    for (var k in d.lab) if (d.lab[k]) n++;
    return n;
  }

  function quiet() { return !!get().quiet; }
  function setQuiet(v) {
    var d = get(); d.quiet = !!v; save(d);
    document.documentElement.classList.toggle("quiet", !!v);
  }

  /**
   * 徽章清单：cond(d) 接收进度数据，返回是否解锁。
   * 供首页徽章墙使用。
   */
  var BADGES = [
    { id: "first",  icon: "🌟", name: "第一颗星",   cond: "完成任意 1 课", test: function (d) { return Object.keys(d.stars).length >= 1; } },
    { id: "g2",     icon: "🍊", name: "二年级达人", cond: "完成二年级 6 课", test: function (d) { return cnt(d, 2) >= 6; } },
    { id: "g3",     icon: "🌿", name: "三年级达人", cond: "完成三年级 6 课", test: function (d) { return cnt(d, 3) >= 6; } },
    { id: "g4",     icon: "💧", name: "四年级达人", cond: "完成四年级 6 课", test: function (d) { return cnt(d, 4) >= 6; } },
    { id: "g5",     icon: "🔮", name: "五年级达人", cond: "完成五年级 6 课", test: function (d) { return cnt(d, 5) >= 6; } },
    { id: "g6",     icon: "🌸", name: "六年级达人", cond: "完成六年级 6 课", test: function (d) { return cnt(d, 6) >= 6; } },
    { id: "lab3",   icon: "🔬", name: "小小实验家", cond: "玩过 3 个数学实验", test: function (d) { var n = 0; for (var k in d.lab) if (d.lab[k]) n++; return n >= 3; } },
    { id: "think6", icon: "🤖", name: "未来思维家", cond: "完成 6 节思维营", test: function (d) { var n = 0; for (var k in d.stars) if (k.indexOf("think") === 0) n++; return n >= 6; } },
    { id: "lab6",   icon: "🧠", name: "美学大师",   cond: "玩遍 6 个数学实验", test: function (d) { var n = 0; for (var k in d.lab) if (d.lab[k]) n++; return n >= 6; } },
    { id: "drill7", icon: "⚡", name: "坚持小火苗", cond: "累计 7 天口算练习", test: function (d) { var n = 0; for (var k in d.drills) n++; return n >= 7; } },
    { id: "all",    icon: "🏆", name: "数学奇境征服者", cond: "集齐全部 40 颗课程星", test: function (d) { var n = 0; for (var k in d.stars) if (k.indexOf("g") === 0) n++; return n >= 40; } }
  ];
  function cnt(d, g) { var n = 0; for (var k in d.stars) if (k.indexOf("g" + g + "u") === 0) n++; return n; }

  function badges() {
    var d = get();
    return BADGES.map(function (b) { return { icon: b.icon, name: b.name, cond: b.cond, got: b.test(d) }; });
  }

  /* ---- 错题本 ---- */
  function addMistake(unitId, q) {
    var d = get();
    for (var i = 0; i < d.mistakes.length; i++) {
      if (d.mistakes[i].q === q.q) return; // 同题不重复收录
    }
    d.mistakes.unshift({
      unitId: unitId, type: q.type, q: q.q, options: q.options || null,
      answer: q.answer, hint: q.hint || "", explain: q.explain || "",
      level: q.level || "", at: Date.now()
    });
    if (d.mistakes.length > 60) d.mistakes.length = 60;
    save(d);
  }
  function removeMistake(qText) {
    var d = get();
    d.mistakes = d.mistakes.filter(function (m) { return m.q !== qText; });
    save(d);
  }
  function mistakes() { return get().mistakes; }

  /* ---- 口算天天练：按日期记录 ---- */
  function markDrill() {
    var d = get();
    var day = new Date().toISOString().slice(0, 10);
    d.drills[day] = (d.drills[day] || 0) + 1;
    save(d);
  }
  function drillToday() {
    return get().drills[new Date().toISOString().slice(0, 10)] || 0;
  }

  return {
    get: get, addStar: addStar, hasStar: hasStar,
    gradeStars: gradeStars, totalStars: totalStars, thinkStars: thinkStars,
    visitLab: visitLab, labCount: labCount,
    addMistake: addMistake, removeMistake: removeMistake, mistakes: mistakes,
    markDrill: markDrill, drillToday: drillToday,
    quiet: quiet, setQuiet: setQuiet, badges: badges
  };
})();

/* 页面加载时恢复安静模式 */
(function () {
  if (MW.progress.quiet()) document.documentElement.classList.add("quiet");
})();
