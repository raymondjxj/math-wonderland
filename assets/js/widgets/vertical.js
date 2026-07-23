/* 数学奇境 · 教具：竖式动画（vertical）
   加减乘除竖式分步显形：进位/借位/试商高亮。
   anim: { op:"add"|"sub"|"mul"|"div", a, b, step }
   play: { interactive:true, op, a, b } —— 孩子点击「下一步」走完竖式 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.vertical = (function () {
  /* 每个 op 生成 frames：frames[step] = [ {text, hl:[字符下标], pad, cls} ] */
  function pad(s, n) { s = String(s); while (s.length < n) s = " " + s; return s; }
  function row(text, hl, cls) { return { text: text, hl: hl || [], cls: cls || "" }; }
  function line(n) { return { text: new Array(n + 1).join("─"), hl: [], cls: "line" }; }

  function framesAdd(a, b) {
    var W = String(a).length + 2;
    var ra = String(a), rb = String(b), res = String(a + b);
    var frames = [];
    frames.push([row(pad(ra, W)), row(pad("+ " + rb, W), [0]), line(W), row(pad("?", W), [], "ans")]);
    var carry = 0, shown = [];
    var da = ra.split("").reverse(), db = rb.split("").reverse();
    for (var i = 0; i < Math.max(da.length, db.length); i++) {
      var s = (parseInt(da[i] || 0, 10) + parseInt(db[i] || 0, 10) + carry);
      var d = s % 10; carry = Math.floor(s / 10);
      shown.unshift(d);
      frames.push([
        row(pad(ra, W), carry && i + 1 < Math.max(da.length, db.length) ? [W - 2 - i] : []),
        row(pad("+ " + rb, W), [W - 1 - i]),
        line(W),
        row(pad(shown.join(""), W), [W - 1 - i], "ans"),
        carry ? row(pad("进位 +" + carry, W), [], "carry") : null
      ].filter(Boolean));
    }
    frames.push([row(pad(ra, W)), row(pad("+ " + rb, W)), line(W), row(pad(res, W), null, "ans done")]);
    return frames;
  }

  function framesSub(a, b) {
    var W = String(a).length + 2;
    var ra = String(a), rb = String(b), res = String(a - b);
    var frames = [];
    frames.push([row(pad(ra, W)), row(pad("− " + rb, W), [0]), line(W), row(pad("?", W), [], "ans")]);
    var borrow = 0, shown = [];
    var da = ra.split("").reverse(), db = rb.split("").reverse();
    for (var i = 0; i < ra.length; i++) {
      var top = parseInt(da[i], 10) - borrow;
      var bot = parseInt(db[i] || 0, 10);
      if (top < bot) { top += 10; borrow = 1; } else borrow = 0;
      shown.unshift(top - bot);
      frames.push([
        row(pad(ra, W), borrow ? [W - 2 - i] : []),
        row(pad("− " + rb, W), [W - 1 - i]),
        line(W),
        row(pad(shown.join(""), W), [W - 1 - i], "ans"),
        borrow ? row(pad("借位 −1 当 10", W), [], "carry") : null
      ].filter(Boolean));
    }
    frames.push([row(pad(ra, W)), row(pad("− " + rb, W)), line(W), row(pad(res, W), null, "ans done")]);
    return frames;
  }

  function framesMul(a, b) {
    var b1 = b % 10, b2 = Math.floor(b / 10);
    var p1 = a * b1, p2 = a * b2, res = a * b;
    var W = String(res).length + 2;
    var frames = [];
    frames.push([row(pad(a, W)), row(pad("× " + b, W), [0]), line(W), row(pad("?", W), [], "ans")]);
    frames.push([row(pad(a, W)), row(pad("× " + b, W), [W - 1]), line(W),
      row(pad(p1, W), [W - 1], "ans"), row(pad("先算 " + a + " × " + b1, W), [], "carry")]);
    if (b2 > 0) {
      frames.push([row(pad(a, W)), row(pad("× " + b, W), [W - 2]), line(W),
        row(pad(p1, W), [], "ans"),
        row(pad(p2 + " ", W - 1), [W - 2], "ans"),
        row(pad("再算 " + a + " × " + b2 + "（在十位，左移一位）", W), [], "carry")]);
      frames.push([row(pad(a, W)), row(pad("× " + b, W)), line(W),
        row(pad(p1, W), [], "ans"), row(pad(p2 + " ", W - 1), [], "ans"),
        line(W), row(pad(res, W), null, "ans done")]);
    } else {
      frames.push([row(pad(a, W)), row(pad("× " + b, W)), line(W), row(pad(res, W), null, "ans done")]);
    }
    return frames;
  }

  function framesDiv(a, b) {
    var q = Math.floor(a / b), r = a % b;
    var W = String(a).length + 4;
    var head = row(pad("", W - 1) + "", [], "");
    var frames = [];
    frames.push([row(pad("", W - String(q).length) + q, [], ""), row(b + " ）" + a, [], ""), line(W + 2)]);
    var rem = a, qs = String(q).split(""), pos = 0;
    var cur = parseInt(String(a)[0], 10);
    var digits = String(a).split("");
    var consumed = 1;
    if (cur < b && digits.length > 1) { cur = parseInt(digits[0] + digits[1], 10); consumed = 2; }
    var steps = [];
    var used = consumed;
    while (true) {
      var d = Math.floor(cur / b);
      var prod = d * b;
      var next = cur - prod;
      steps.push({ d: d, prod: prod, cur: cur, next: next });
      if (used >= digits.length) break;
      cur = next * 10 + parseInt(digits[used], 10);
      used++;
    }
    // 逐步展示
    var rows2 = [row(pad("", W - String(q).length) + q, [], ""), row(b + " ）" + a, [], ""), line(W + 2)];
    steps.forEach(function (s, i) {
      var f = rows2.slice();
      f.push(row(pad("− " + s.prod, W), [W - 1], ""));
      f.push(line(W));
      f.push(row(pad(s.next, W), [W - 1], "ans"));
      f.push(row(pad("试商 " + s.d + "：" + b + " × " + s.d + " = " + s.prod, W), [], "carry"));
      frames.push(f);
      void i;
    });
    frames.push([row(pad("", W - String(q).length) + q, [], ""), row(b + " ）" + a, [], ""), line(W + 2),
      row(pad(r === 0 ? "余 0，正好除尽！" : "余 " + r, W), null, "ans done")]);
    void head; void rem; void pos;
    return frames;
  }

  var MAKERS = { add: framesAdd, sub: framesSub, mul: framesMul, div: framesDiv };

  function mount(container, cfg) {
    cfg = Object.assign({ op: "mul", a: 12, b: 3, step: 0 }, cfg);
    var frames = MAKERS[cfg.op](cfg.a, cfg.b);
    var step = Math.min(cfg.step, frames.length - 1);

    var box = MW.util.el("div", "vertical-box");
    container.appendChild(box);
    var label = MW.util.el("div", "caption-box");
    label.style.minHeight = "52px";
    container.appendChild(label);

    var NAMES = { add: "加法", sub: "减法", mul: "乘法", div: "除法" };

    function render() {
      box.innerHTML = "";
      frames[step].forEach(function (r) {
        var d = MW.util.el("div", "vrow " + (r.cls || ""));
        r.text.split("").forEach(function (ch, i) {
          var s = document.createElement("span");
          s.textContent = ch;
          if (r.hl && r.hl.indexOf(i) >= 0) s.className = "hl";
          d.appendChild(s);
        });
        box.appendChild(d);
      });
      var last = step >= frames.length - 1;
      label.innerHTML = last
        ? "竖式完成！<b>" + cfg.a + { add: " + ", sub: " − ", mul: " × ", div: " ÷ " }[cfg.op] + cfg.b + " = " + result() + "</b>"
        : NAMES[cfg.op] + "竖式 · 第 " + (step + 1) + " / " + frames.length + " 步";
    }
    function result() {
      return { add: cfg.a + cfg.b, sub: cfg.a - cfg.b, mul: cfg.a * cfg.b, div: Math.floor(cfg.a / cfg.b) + (cfg.a % cfg.b ? " … " + (cfg.a % cfg.b) : "") }[cfg.op];
    }

    var done = false;
    if (cfg.interactive) {
      var ctr = MW.util.el("div", "widget-controls");
      var bPrev = MW.util.el("button", "btn ghost small", "‹ 上一步");
      var bNext = MW.util.el("button", "btn small", "下一步 ›");
      bPrev.onclick = function () { if (step > 0) { step--; MW.feedback.sound("click"); render(); } };
      bNext.onclick = function () {
        if (step < frames.length - 1) {
          step++; MW.feedback.sound("click"); render();
          if (step >= frames.length - 1 && !done) { done = true; if (cfg.onSuccess) cfg.onSuccess(); }
        }
      };
      ctr.appendChild(bPrev); ctr.appendChild(bNext);
      container.appendChild(ctr);
    }

    function update(ns) {
      if (ns.step != null) step = Math.max(0, Math.min(frames.length - 1, ns.step));
      render();
    }

    render();
    return { update: update, destroy: function () {} };
  }

  return { mount: mount };
})();
