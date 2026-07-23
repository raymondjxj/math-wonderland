/* 数学奇境 · 课程播放器 v2
   幕型：story 故事 / play 动手操作 / anim 动画讲解 / symbol 符号表达 /
        quiz 分层闯关 / review 波利亚回顾 / beauty 数学之美 */
window.MW = window.MW || {};

MW.player = (function () {
  var KICKERS = {
    story: "故事导入", play: "动手操作", anim: "动画讲解", symbol: "符号表达",
    quiz: "分层闯关", review: "回顾·举一反三", beauty: "数学之美"
  };

  /**
   * MW.player.start(stage, unit, opts)
   * unit.scenes 为有序幕数组；opts = { onExit }
   * 支持 ?scene=N 直接跳到第 N 幕（调试用）。
   */
  function start(stage, unit, opts) {
    opts = opts || {};
    var scenes = unit.scenes;
    var idx = 0;
    var quizPassed = false;
    var widgetHandle = null;

    var startAt = parseInt(MW.util.param("scene", "0"), 10);
    if (startAt > 0 && startAt < scenes.length) idx = startAt;

    /* ---- 顶部幕进度点 ---- */
    var dots = MW.util.el("div", "scene-progress");
    scenes.forEach(function (s, i) {
      var d = MW.util.el("div", "scene-dot");
      d.title = KICKERS[s.type] || "";
      dots.appendChild(d);
    });
    stage.appendChild(dots);

    var card = MW.util.el("div", "scene-card rise");
    stage.appendChild(card);

    var nav = MW.util.el("div", "scene-nav");
    var prevBtn = MW.util.el("button", "btn ghost small", "‹ 上一步");
    var pos = MW.util.el("span", "pos");
    var nextBtn = MW.util.el("button", "btn small", "下一步 ›");
    nav.appendChild(prevBtn); nav.appendChild(pos); nav.appendChild(nextBtn);
    stage.appendChild(nav);

    prevBtn.onclick = function () { if (idx > 0) { idx--; render(); } };
    nextBtn.onclick = function () {
      var s = scenes[idx];
      if (s.type === "quiz" && !quizPassed) return; // 闯关未完成不可跳过
      if (idx < scenes.length - 1) { idx++; render(); }
      else finish();
    };

    /* 键盘导航：← 上一幕，→ 下一幕（输入框聚焦时不抢按键） */
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      if (e.key === "ArrowLeft" && !prevBtn.disabled) prevBtn.click();
      else if (e.key === "ArrowRight" && !nextBtn.disabled) nextBtn.click();
    });

    function render() {
      var s = scenes[idx];
      quizPassed = s.type !== "quiz";
      if (widgetHandle && widgetHandle.destroy) widgetHandle.destroy();
      widgetHandle = null;
      if (comicStop) { comicStop(); comicStop = null; }
      card.innerHTML = "";
      card.classList.remove("rise"); void card.offsetWidth; card.classList.add("rise");

      card.appendChild(MW.util.el("div", "scene-kicker", KICKERS[s.type] || ""));
      if (s.title) card.appendChild(MW.util.el("h2", null, s.title));

      ({
        story: renderStory,
        anim: renderAnim,
        play: renderPlay,
        quiz: renderQuiz,
        beauty: renderBeauty,
        symbol: renderSymbol,
        review: renderReview
      })[s.type](s);

      // 进度点与导航状态
      Array.prototype.forEach.call(dots.children, function (d, i) {
        d.className = "scene-dot" + (i === idx ? " on" : i < idx ? " past" : "");
      });
      pos.textContent = "第 " + (idx + 1) + " / " + scenes.length + " 幕";
      prevBtn.disabled = idx === 0;
      if (s.type === "quiz") { nextBtn.disabled = true; nextBtn.textContent = "先完成闯关"; }
      else if (idx === scenes.length - 1) { nextBtn.disabled = false; nextBtn.textContent = "完成课程 ⭐"; }
      else { nextBtn.disabled = false; nextBtn.textContent = "下一步 ›"; }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    /* ---- 各幕渲染 ---- */
    function renderStory(s) {
      if (s.shots && s.shots.length) return renderComic(s);
      var body = MW.util.el("div", "scene-body");
      (s.paragraphs || []).forEach(function (p) { body.appendChild(MW.util.el("p", null, p)); });
      if (s.art) {
        var art = MW.util.el("div", "scene-art");
        art.innerHTML = s.art;
        card.appendChild(art);
      }
      card.appendChild(body);
    }

    /* ---- 分镜动画（motion comic）：镜头推拉 + 字幕 + 可选配音 ---- */
    var comicStop = null;

    function renderComic(s) {
      var viewport = MW.util.el("div", "comic-viewport");
      var inner = MW.util.el("div", "comic-inner");
      viewport.appendChild(inner);
      card.appendChild(viewport);
      var subtitle = MW.util.el("div", "comic-subtitle");
      card.appendChild(subtitle);

      var idx = 0, timer = null, playing = false;
      var voiceOn = false;
      try { voiceOn = localStorage.getItem("mw_voice") === "1"; } catch (e) {}
      var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

      function speak(text) {
        if (!voiceOn || !window.speechSynthesis) return;
        try {
          speechSynthesis.cancel();
          var u = new SpeechSynthesisUtterance(text);
          u.lang = "zh-CN"; u.rate = 0.95; u.pitch = 1.05;
          speechSynthesis.speak(u);
        } catch (e) {}
      }

      function show(i) {
        idx = Math.max(0, Math.min(s.shots.length - 1, i));
        var shot = s.shots[idx];
        inner.classList.remove("comic-move");
        inner.innerHTML = shot.art;
        if (!reduced && shot.pan) {
          void inner.offsetWidth;
          inner.classList.add("comic-move");
          var p = shot.pan;
          inner.style.transform =
            "translate(" + (p.x || 0) + "%," + (p.y || 0) + "%) scale(" + (p.scale || 1) + ")";
        } else {
          inner.style.transform = "none";
        }
        // 高亮元素
        if (shot.focus) {
          try {
            var el = inner.querySelector(shot.focus);
            if (el) el.classList.add("comic-focus");
          } catch (e) {}
        }
        subtitle.classList.remove("fade"); void subtitle.offsetWidth; subtitle.classList.add("fade");
        subtitle.textContent = shot.caption || shot.narration || "";
        speak(shot.narration || "");
        dots.forEach(function (d, di) { d.className = "comic-dot" + (di === idx ? " on" : ""); });
        clearTimeout(timer);
        if (playing && idx < s.shots.length - 1) {
          timer = setTimeout(function () { show(idx + 1); }, shot.ms || 4200);
        } else if (playing && idx === s.shots.length - 1) {
          playing = false;
          playBtn.textContent = "▶ 再播一次";
        }
      }

      // 控制条
      var ctr = MW.util.el("div", "comic-controls");
      var dots = s.shots.map(function (_, di) {
        var d = MW.util.el("button", "comic-dot");
        d.onclick = function () { playing = false; playBtn.textContent = "▶ 播放"; show(di); };
        return d;
      });
      var dotWrap = MW.util.el("div", "comic-dots");
      dots.forEach(function (d) { dotWrap.appendChild(d); });

      var playBtn = MW.util.el("button", "btn small", "▶ 播放");
      playBtn.onclick = function () {
        playing = !playing;
        if (playing) {
          playBtn.textContent = "⏸ 暂停";
          if (idx >= s.shots.length - 1) show(0);
          else show(idx);
        } else {
          playBtn.textContent = "▶ 播放";
          clearTimeout(timer);
          if (window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) {}
        }
      };
      var prevB = MW.util.el("button", "btn ghost small", "‹");
      var nextB = MW.util.el("button", "btn ghost small", "›");
      prevB.onclick = function () { playing = false; playBtn.textContent = "▶ 播放"; show(idx - 1); };
      nextB.onclick = function () { playing = false; playBtn.textContent = "▶ 播放"; show(idx + 1); };
      var voiceBtn = MW.util.el("button", "btn ghost small", voiceOn ? "🔊 配音开" : "🔇 配音关");
      voiceBtn.onclick = function () {
        voiceOn = !voiceOn;
        try { localStorage.setItem("mw_voice", voiceOn ? "1" : "0"); } catch (e) {}
        voiceBtn.textContent = voiceOn ? "🔊 配音开" : "🔇 配音关";
        if (!voiceOn && window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) {}
        else if (voiceOn) speak(s.shots[idx].narration || "");
      };
      ctr.appendChild(prevB); ctr.appendChild(dotWrap); ctr.appendChild(nextB);
      ctr.appendChild(playBtn); ctr.appendChild(voiceBtn);
      card.appendChild(ctr);

      comicStop = function () {
        clearTimeout(timer);
        if (window.speechSynthesis) try { speechSynthesis.cancel(); } catch (e) {}
      };

      show(0);
      // 默认自动播放一次（减少动画偏好用户除外）
      if (!reduced) { playing = true; playBtn.textContent = "⏸ 暂停"; show(0); }
    }

    function renderAnim(s) {
      var cap = MW.util.el("div", "caption-box");
      var box = MW.util.el("div", "widget-box");
      card.appendChild(cap);
      card.appendChild(box);

      var step = 0;
      var steps = s.steps;
      function show(n, first) {
        step = Math.max(0, Math.min(steps.length - 1, n));
        var st = steps[step];
        cap.classList.remove("fade"); void cap.offsetWidth; cap.classList.add("fade");
        cap.textContent = st.caption;
        if (first) widgetHandle = MW.widgets[s.widget].mount(box, st.state);
        else if (widgetHandle && widgetHandle.update) widgetHandle.update(st.state);
        ctr.querySelector(".cur").textContent = (step + 1) + " / " + steps.length;
      }
      var ctr = MW.util.el("div", "widget-controls");
      var bPrev = MW.util.el("button", "btn ghost small", "‹");
      var cur = MW.util.el("span", "cur", "");
      var bNext = MW.util.el("button", "btn ghost small", "›");
      ctr.classList.add("stepper");
      bPrev.onclick = function () { MW.feedback.sound("click"); show(step - 1); };
      bNext.onclick = function () { MW.feedback.sound("click"); show(step + 1); };
      ctr.appendChild(bPrev);
      ctr.appendChild(cur); ctr.appendChild(bNext);
      card.appendChild(ctr);
      show(0, true);
    }

    function renderPlay(s) {
      if (s.prompt) card.appendChild(MW.util.el("div", "caption-box", s.prompt));
      var box = MW.util.el("div", "widget-box");
      card.appendChild(box);
      var config = Object.assign({}, s.config, {
        onSuccess: function () {
          MW.feedback.sound("right");
          MW.feedback.praise(card);
          if (s.successText) MW.feedback.bubble(card, true, s.successText);
        }
      });
      widgetHandle = MW.widgets[s.widget].mount(box, config);
    }

    function renderQuiz(s) {
      var box = MW.util.el("div");
      card.appendChild(box);
      MW.quiz.run(box, s.questions, function () {
        quizPassed = true;
        nextBtn.disabled = false;
        nextBtn.textContent = idx === scenes.length - 1 ? "完成课程 ⭐" : "下一步 ›";
      }, { unitId: unit.id });
    }

    function renderBeauty(s) {
      var bc = MW.util.el("div", "beauty-card");
      bc.appendChild(MW.util.el("h3", null, s.headline || "数学之美"));
      (s.paragraphs || []).forEach(function (p) { bc.appendChild(MW.util.el("p", null, p)); });
      if (s.lab) {
        var go = MW.util.el("a", "btn small", "去实验室亲手试试 ✨");
        go.href = "lab.html#" + s.lab;
        bc.appendChild(go);
      }
      if (s.museum) {
        var go2 = MW.util.el("a", "btn small", "去博物馆看看 🏛️");
        go2.href = "museum.html#" + s.museum;
        go2.style.marginLeft = "10px";
        bc.appendChild(go2);
      }
      if (s.art) { var art = MW.util.el("div", "scene-art"); art.innerHTML = s.art; bc.appendChild(art); }
      card.appendChild(bc);
    }

    /* 符号表达幕：把刚才的操作与图画，抽象成数学符号语言（布鲁纳：symbolic） */
    function renderSymbol(s) {
      var body = MW.util.el("div", "scene-body");
      (s.paragraphs || []).forEach(function (p) { body.appendChild(MW.util.el("p", null, p)); });
      card.appendChild(body);
      if (s.formula) {
        var f = MW.util.el("div", "formula-card");
        f.innerHTML = s.formula;
        card.appendChild(f);
      }
      if (s.keypoints && s.keypoints.length) {
        var ul = MW.util.el("ul", "keypoints");
        s.keypoints.forEach(function (k) { ul.appendChild(MW.util.el("li", null, k)); });
        card.appendChild(ul);
      }
      if (s.art) { var art = MW.util.el("div", "scene-art"); art.innerHTML = s.art; card.appendChild(art); }
    }

    /* 波利亚回顾幕：一题多解 + 讲给别人听（费曼技巧） */
    function renderReview(s) {
      if (s.question) card.appendChild(MW.util.el("div", "caption-box", "🤔 " + s.question));
      if (s.ways && s.ways.length) {
        s.ways.forEach(function (w, i) {
          var wc = MW.util.el("div", "way-card");
          wc.innerHTML = '<div class="way-tag">解法 ' + (i + 1) + (w.name ? " · " + w.name : "") + "</div><p>" + w.text + "</p>";
          card.appendChild(wc);
        });
      }
      if (s.ask) {
        var ac = MW.util.el("div", "ask-card");
        ac.innerHTML = '<div class="ask-title">🗣️ 讲给爸爸妈妈听</div><p>' + s.ask + "</p>";
        card.appendChild(ac);
      }
    }

    /* ---- 完成课程 ---- */
    function finish() {
      var isNew = MW.progress.addStar(unit.id);
      MW.feedback.sound("star");
      MW.feedback.confetti();
      var isThink = MW.util.param("t", null) !== null;
      var backHref = isThink ? "think.html" : "grade.html?g=" + MW.util.param("g", "2");
      var backText = isThink ? "回到思维营" : "回到星球";
      /* 承上启下卡：从知识图谱推荐下一站 */
      var nextHtml = "";
      if (MW.graph) {
        var ups = MW.graph.next(unit.id).filter(function (n) { return !MW.progress.hasStar(n.id); }).slice(0, 2);
        if (ups.length) {
          nextHtml = '<div class="next-up">' + ups.map(function (n) {
            return '<a class="next-link" href="' + MW.graph.href(n) + '">下一站 · ' + n.t + " ›</a>";
          }).join("") + "</div>";
        }
      }
      card.innerHTML =
        '<div class="quiz-done"><div class="big">' + (isNew ? "⭐" : "🌟") + "</div>" +
        "<h3>" + (isNew ? "恭喜！获得一颗智慧星！" : "复习完成，依然闪亮！") + "</h3>" +
        "<p>" + MW.feedback.say("complete") + "</p>" +
        nextHtml +
        '<div style="margin-top:22px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap">' +
        '<a class="btn" href="' + backHref + '">' + backText + '</a>' +
        '<a class="btn ghost" href="map.html">🗺️ 知识地图</a>' +
        "</div></div>";
      nextBtn.disabled = true; prevBtn.disabled = true;
      Array.prototype.forEach.call(dots.children, function (d) { d.className = "scene-dot past"; });
    }

    render();
  }

  return { start: start };
})();
