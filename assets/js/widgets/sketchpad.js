/* 数学奇境 · 教具：画板（sketchpad）
   孩子先画一画，再进入验证。支持：自由画笔、方格底纸、直尺模式、颜色、撤销、清空。
   play: { interactive:true, grid:true|false, straightEdge:true|false, prompt?, check? }
   画作缩略图可存入成长档案：handle.getThumbnail() -> dataURL */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.sketchpad = (function () {
  var W = 480, H = 320;
  var COLORS = ["#2b2d42", "#ff6b6b", "#4d96ff", "#35c163", "#ffc233", "#9b5de5"];

  function mount(container, cfg) {
    cfg = Object.assign({ interactive: true, grid: false, straightEdge: false, cell: 32 }, cfg);

    // 底层：方格纸 + 孩子的画（分层，方便撤销）
    var base = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    base.width = W * dpr; base.height = H * dpr;
    base.style.width = W + "px"; base.style.height = H + "px";
    base.style.borderRadius = "16px";
    base.style.background = "#fffdf7";
    base.style.boxShadow = "inset 0 0 0 3px #e8e4da";
    base.style.touchAction = "none";
    base.style.cursor = "crosshair";
    var bctx = base.getContext("2d"); bctx.scale(dpr, dpr);
    container.appendChild(base);

    function drawGrid() {
      bctx.clearRect(0, 0, W, H);
      if (!cfg.grid) return;
      bctx.strokeStyle = "#e8e4da"; bctx.lineWidth = 1;
      for (var x = cfg.cell; x < W; x += cfg.cell) { bctx.beginPath(); bctx.moveTo(x, 0); bctx.lineTo(x, H); bctx.stroke(); }
      for (var y = cfg.cell; y < H; y += cfg.cell) { bctx.beginPath(); bctx.moveTo(0, y); bctx.lineTo(W, y); bctx.stroke(); }
    }
    drawGrid();

    // 绘画层（叠在底纸上，用同一 canvas 太复杂则分层：直接在 base 上画，清空=重画格子）
    var strokes = []; // 每笔 {points:[{x,y}], color, width, edge:bool}
    var drawing = false, cur = null, color = COLORS[0], edgeStart = null;

    function redraw() {
      drawGrid();
      strokes.forEach(function (s) { paintStroke(s); });
    }
    function paintStroke(s) {
      bctx.strokeStyle = s.color; bctx.lineWidth = s.width; bctx.lineCap = "round"; bctx.lineJoin = "round";
      bctx.beginPath();
      s.points.forEach(function (p, i) { if (i === 0) bctx.moveTo(p.x, p.y); else bctx.lineTo(p.x, p.y); });
      bctx.stroke();
      if (s.points.length === 1) {
        bctx.fillStyle = s.color;
        bctx.beginPath(); bctx.arc(s.points[0].x, s.points[0].y, s.width / 2, 0, 2 * Math.PI); bctx.fill();
      }
    }
    function snap(v) { return cfg.grid ? Math.round(v / cfg.cell) * cfg.cell : v; }
    function pos(e) {
      var r = base.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
    }

    base.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      var p = pos(e);
      drawing = true;
      if (cfg.straightEdge) { edgeStart = p; cur = { points: [p, p], color: color, width: 4, edge: true }; }
      else cur = { points: [p], color: color, width: 4, edge: false };
      strokes.push(cur);
      try { base.setPointerCapture(e.pointerId); } catch (err) {}
      redraw();
    });
    base.addEventListener("pointermove", function (e) {
      if (!drawing || !cur) return;
      var p = pos(e);
      if (cur.edge) cur.points[1] = { x: snap(p.x), y: snap(p.y) };
      else cur.points.push(p);
      redraw();
    });
    function up() { drawing = false; cur = null; }
    base.addEventListener("pointerup", up);
    base.addEventListener("pointercancel", up);

    // 工具条
    var ctr = MW.util.el("div", "widget-controls");
    COLORS.forEach(function (c) {
      var b = MW.util.el("button", null, "");
      b.style.cssText = "width:30px;height:30px;border-radius:50%;background:" + c + ";border:3px solid " + (c === color ? "#2b2d42" : "#fff") + ";box-shadow:0 2px 6px rgba(0,0,0,.2)";
      b.onclick = function () {
        color = c; MW.feedback.sound("click");
        ctr.querySelectorAll("button").forEach(function (x) { x.style.borderColor = "#fff"; });
        b.style.borderColor = "#2b2d42";
      };
      ctr.appendChild(b);
    });
    var undo = MW.util.el("button", "btn ghost small", "↩ 撤销");
    undo.onclick = function () { strokes.pop(); redraw(); };
    var clear = MW.util.el("button", "btn ghost small", "🧽 清空");
    clear.onclick = function () { strokes = []; redraw(); };
    ctr.appendChild(undo); ctr.appendChild(clear);
    container.appendChild(ctr);

    // 画板是开放式教具：不判对错，孩子画完点「我画好了」即通过
    if (cfg.interactive) {
      var done = false;
      var ok = MW.util.el("button", "btn", "我画好了 ✋");
      ok.onclick = function () {
        if (strokes.length === 0) {
          MW.feedback.sound("wrong");
          MW.feedback.bubble(container, false, "先在画板上画一画，再点我哦！");
          return;
        }
        if (!done) {
          done = true;
          if (cfg.onSuccess) cfg.onSuccess(getThumbnail());
        }
      };
      var okWrap = MW.util.el("div", "widget-controls");
      okWrap.appendChild(ok);
      container.appendChild(okWrap);
    }

    function getThumbnail() {
      var t = document.createElement("canvas");
      t.width = 240; t.height = 160;
      var tc = t.getContext("2d");
      tc.fillStyle = "#fffdf7"; tc.fillRect(0, 0, 240, 160);
      tc.drawImage(base, 0, 0, base.width, base.height, 0, 0, 240, 160);
      return t.toDataURL("image/png");
    }

    return { update: function () {}, destroy: function () {}, getThumbnail: getThumbnail };
  }

  return { mount: mount };
})();
