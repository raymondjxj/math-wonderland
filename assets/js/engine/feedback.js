/* 数学奇境 · 反馈系统：成长型思维鼓励语、礼花、轻音效 */
window.MW = window.MW || {};

MW.feedback = (function () {
  var audioCtx = null;

  function say(kind) {
    var bank = (MW.encouragement && MW.encouragement[kind]) || ["继续加油！"];
    return MW.util.pick(bank);
  }

  /* 答对/答错气泡。parent 为容器。 */
  function bubble(parent, good, text) {
    var old = parent.querySelector(".speech");
    if (old) old.remove();
    var b = MW.util.el("div", "speech" + (good ? " good" : ""));
    b.setAttribute("role", "status");
    b.setAttribute("aria-live", "polite");
    b.innerHTML = '<span class="who">' + (good ? "太棒了" : "别急，想一想") + "</span>" + text;
    parent.appendChild(b);
    return b;
  }

  function praise(parent) { return bubble(parent, true, say("correct")); }
  function hint(parent, hintText) {
    return bubble(parent, false, (hintText ? hintText + "<br>" : "") + "<b>" + say("retry") + "</b>");
  }

  /* ---- 轻音效（Web Audio 合成，尊重安静模式） ---- */
  function tone(freq, dur, type, when) {
    if (MW.progress.quiet()) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = type || "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime + when);
      g.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + when + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + when + dur);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(audioCtx.currentTime + when); o.stop(audioCtx.currentTime + when + dur + 0.05);
    } catch (e) { /* 无音频环境 */ }
  }
  function sound(kind) {
    if (kind === "right") { tone(523, .18, "sine", 0); tone(784, .22, "sine", .1); }
    else if (kind === "wrong") { tone(220, .25, "triangle", 0); }
    else if (kind === "star") { tone(523, .15, "sine", 0); tone(659, .15, "sine", .12); tone(784, .15, "sine", .24); tone(1047, .3, "sine", .36); }
    else if (kind === "click") { tone(660, .06, "square", 0); }
  }

  /* ---- 礼花 ---- */
  function confetti() {
    if (MW.progress.quiet()) return;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var cv = MW.util.el("canvas");
    cv.id = "confetti-canvas";
    cv.width = innerWidth; cv.height = innerHeight;
    document.body.appendChild(cv);
    var ctx = cv.getContext("2d");
    var colors = ["#ffc233", "#ff8a3d", "#2ec4b6", "#4d96ff", "#9b5de5", "#f15bb5"];
    var parts = [];
    for (var i = 0; i < 130; i++) {
      parts.push({
        x: innerWidth / 2 + (Math.random() - .5) * 220,
        y: innerHeight * .38,
        vx: (Math.random() - .5) * 13,
        vy: -Math.random() * 13 - 4,
        s: Math.random() * 8 + 4,
        c: colors[i % colors.length],
        r: Math.random() * Math.PI,
        vr: (Math.random() - .5) * .3
      });
    }
    var frames = 0;
    (function loop() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      parts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy; p.vy += .32; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .62);
        ctx.restore();
      });
      if (++frames < 110) requestAnimationFrame(loop);
      else cv.remove();
    })();
  }

  return { say: say, praise: praise, hint: hint, bubble: bubble, sound: sound, confetti: confetti };
})();
