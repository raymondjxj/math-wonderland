/* 数学奇境 · 思维教具：二进制卡牌（信息编码）
   anim:  { cards:5, bits:[0,1,1,0,1], showValues:true }
   play:  { interactive:true, cards:5, target:19 } 翻牌凑目标数 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.binary = (function () {
  function mount(container, cfg) {
    cfg = Object.assign({ cards: 5, bits: null, showValues: true }, cfg);
    var n = cfg.cards;
    var values = [];
    for (var i = 0; i < n; i++) values.unshift(1 << i); // [16,8,4,2,1]
    var bits = (cfg.bits && cfg.bits.length === n) ? cfg.bits.slice() : values.map(function () { return 0; });

    var stage = MW.util.el("div", "widget-controls");
    stage.style.gap = "10px";
    container.appendChild(stage);
    var label = MW.util.el("div", "caption-box");
    label.style.minHeight = "56px";
    container.appendChild(label);

    var cardEls = [];
    values.forEach(function (v, i) {
      var c = MW.util.el("button", "opt");
      c.style.cssText = "width:76px;padding:14px 6px;font-size:1.25rem;border-radius:18px;";
      c.dataset.i = i;
      stage.appendChild(c);
      cardEls.push(c);
      if (cfg.interactive) {
        c.onclick = function () {
          MW.feedback.sound("click");
          updateBits(i, bits[i] ? 0 : 1);
        };
      } else {
        c.disabled = true;
        c.style.cursor = "default";
      }
    });

    var done = false;
    function sum() {
      return bits.reduce(function (s, b, i) { return s + b * values[i]; }, 0);
    }

    function draw() {
      var total = sum();
      cardEls.forEach(function (c, i) {
        var on = !!bits[i];
        c.innerHTML = (cfg.showValues ? "<b>" + values[i] + "</b><br>" : "") +
          '<span style="font-size:.85rem">' + (on ? "开 1" : "关 0") + "</span>";
        c.style.background = on ? "#c8f7c5" : "#f4f4fb";
        c.style.borderColor = on ? "#35c163" : "transparent";
      });
      var binStr = bits.join(" ");
      if (cfg.interactive) {
        label.innerHTML = "现在是 <b>" + binStr + "</b> = <b>" + total + "</b>　🎯 目标：拼出 <b>" + cfg.target + "</b>";
      } else {
        label.innerHTML = "<b>" + binStr + "</b>　＝　<b>" + total + "</b>";
      }
      if (cfg.interactive) {
        var ok = total === cfg.target;
        if (ok && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
        if (!ok) done = false;
      }
    }

    function updateBits(i, v) {
      bits[i] = v;
      draw();
    }

    function update(ns) {
      if (ns.bits && ns.bits.length === n) { bits = ns.bits.slice(); }
      if (ns.showValues != null) cfg.showValues = ns.showValues;
      draw();
    }

    draw();
    return { update: update, destroy: function () {} };
  }

  return { mount: mount };
})();
