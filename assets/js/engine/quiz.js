/* 数学奇境 · 习题引擎：选择 / 填空 / 判断，即时反馈 + 提示 + 无惩罚 */
window.MW = window.MW || {};

MW.quiz = (function () {
  /**
   * MW.quiz.run(container, questions, onDone)
   * 题目格式：
   *   { type:"choice", q, options:[..], answer:序号, hint, explain }
   *   { type:"fill",   q, answer:"答案"(可数组接受多解), hint, explain, prefix?, suffix? }
   *   { type:"judge",  q, answer:true|false, hint, explain }
   * 规则：答错 → 提示 → 再试一次；再错 → 讲解并跳过。无扣分、无倒计时。
   */
  function run(container, questions, onDone, opts) {
    opts = opts || {};
    var i = 0, tried = 0;

    function renderQ() {
      var q = questions[i];
      tried = 0;
      container.innerHTML = "";

      var prog = MW.util.el("div", "quiz-progress", "第 " + (i + 1) + " / " + questions.length + " 题");
      var qEl = MW.util.el("div", "quiz-q");
      var tag = q.level || "闯一闯";
      qEl.innerHTML = '<span class="qtag lv-' + (q.level || "std") + '">' + tag + "</span>" + q.q;
      container.appendChild(prog);
      container.appendChild(qEl);

      var body = MW.util.el("div");
      container.appendChild(body);

      if (q.type === "choice") renderChoice(body, q);
      else if (q.type === "fill") renderFill(body, q);
      else if (q.type === "judge") renderJudge(body, q);
    }

    function renderChoice(body, q) {
      var grid = MW.util.el("div", "quiz-options" + (q.options.length <= 2 ? " single" : ""));
      q.options.forEach(function (text, idx) {
        var b = MW.util.el("button", "opt", text);
        b.onclick = function () {
          if (idx === q.answer) {
            b.classList.add("right");
            right(grid);
          } else {
            b.classList.add("wrongpick");
            b.disabled = true;
            wrong(body, q);
          }
        };
        grid.appendChild(b);
      });
      body.appendChild(grid);
    }

    function renderFill(body, q) {
      var row = MW.util.el("div", "quiz-fill");
      if (q.prefix) row.appendChild(MW.util.el("span", null, q.prefix));
      var input = document.createElement("input");
      input.type = "text"; input.inputMode = "decimal"; input.placeholder = "?";
      row.appendChild(input);
      if (q.suffix) row.appendChild(MW.util.el("span", null, q.suffix));
      var ok = MW.util.el("button", "btn small", "确定");
      row.appendChild(ok);
      body.appendChild(row);
      input.focus();

      function check() {
        var v = input.value.trim().replace(/[，。]/g, "");
        var answers = Array.isArray(q.answer) ? q.answer.map(String) : [String(q.answer)];
        var good = answers.some(function (a) { return v === a || (parseFloat(v) === parseFloat(a) && v !== ""); });
        if (good) right(row);
        else {
          wrong(body, q);
          input.value = ""; input.focus();
        }
      }
      ok.onclick = check;
      input.onkeydown = function (e) { if (e.key === "Enter") check(); };
    }

    function renderJudge(body, q) {
      var row = MW.util.el("div", "judge-row");
      [["✔ 对", true], ["✘ 错", false]].forEach(function (pair) {
        var b = MW.util.el("button", "opt", pair[0]);
        b.onclick = function () {
          if (pair[1] === q.answer) { b.classList.add("right"); right(row); }
          else { b.classList.add("wrongpick"); b.disabled = true; wrong(body, q); }
        };
        row.appendChild(b);
      });
      body.appendChild(row);
    }

    function right(area) {
      MW.feedback.sound("right");
      MW.feedback.praise(container);
      setTimeout(next, 1400);
      lockAll(area);
    }

    function wrong(bodyEl, q) {
      tried++;
      MW.feedback.sound("wrong");
      if (opts.unitId && MW.progress.addMistake) MW.progress.addMistake(opts.unitId, q);
      if (tried >= 2) {
        // 第二次错：讲解并温和地进入下一题
        MW.feedback.bubble(container, false,
          "<b>小提示：</b>" + (q.explain || q.hint || "回头看看上面的动画，答案藏在那里。") + "<br>没关系，我们下一题继续！");
        setTimeout(next, 3200);
        lockAll(bodyEl);
      } else {
        MW.feedback.hint(container, q.hint ? "<b>提示：</b>" + q.hint : "");
      }
    }

    function lockAll(scope) {
      (scope || container).querySelectorAll("button, input").forEach(function (b) { b.disabled = true; });
    }

    function next() {
      i++;
      if (i < questions.length) renderQ();
      else {
        container.innerHTML =
          '<div class="quiz-done"><div class="big">🎉</div><h3>闯关成功！</h3>' +
          "<p>" + MW.feedback.say("complete") + "</p></div>";
        MW.feedback.sound("star");
        MW.feedback.confetti();
        if (onDone) onDone();
      }
    }

    renderQ();
  }

  return { run: run };
})();
