/* 数学奇境 · 教具：圆（周长滚动实验 / 面积切拼推导）
   状态: { mode:"roll"|"sectors", t:0..1, n?:扇形数 }
   t 驱动动画进度，update 时自动补间。 */
window.MW = window.MW || {}; MW.widgets = MW.widgets || {};

MW.widgets.circle = (function () {
  var W = 480, H = 320;

  function mount(container, cfg) {
    cfg = Object.assign({ mode: "roll", t: 0, n: 8 }, cfg);
    var cur = { t: cfg.t };

    var cv = document.createElement("canvas");
    var dpr = window.devicePixelRatio || 1;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px"; cv.style.height = H + "px";
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);
    container.appendChild(cv);

    /* ---------- 模式一：滚动圆，发现周长 = π × d ---------- */
    var R = 55, CX0 = 100, GROUND = 220, C = 2 * Math.PI * R;

    function drawRoll(t) {
      ctx.clearRect(0, 0, W, H);
      var cx = CX0 + t * C, cy = GROUND - R;
      var rot = t * 2 * Math.PI;

      // 地面
      ctx.strokeStyle = "#c9c9e0"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(30, GROUND); ctx.lineTo(W - 20, GROUND); ctx.stroke();

      // 已滚出的金色周长线
      ctx.strokeStyle = "#ffc233"; ctx.lineWidth = 7; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(CX0, GROUND - 2); ctx.lineTo(cx, GROUND - 2); ctx.stroke();

      // 圆
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI);
      ctx.fillStyle = "#dbe9ff"; ctx.fill();
      ctx.strokeStyle = "#4d96ff"; ctx.lineWidth = 4; ctx.stroke();
      // 直径（开始时提示）
      if (t < 0.25) {
        ctx.strokeStyle = "#9b5de5"; ctx.lineWidth = 3;
        ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#9b5de5";
        ctx.font = "900 18px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("直径 d", cx, cy - 8);
      }
      // 半径小旗（随圆转动，标记接触点）
      var ax = cx + Math.sin(rot) * 0 - Math.sin(rot) * 0; // 接触点起始在正下方
      var px = cx - Math.sin(rot + Math.PI) * R * 0; // 保持简单：用旋转角
      var dx = cx + Math.cos(rot + Math.PI / 2) * R * 0;
      var mx = cx + Math.sin(rot) * 0 + Math.cos(rot + Math.PI / 2) * 0;
      var dotAng = rot + Math.PI / 2; // t=0 时指向正下方
      var dotX = cx + Math.cos(dotAng) * R, dotY = cy + Math.sin(dotAng) * R;
      ctx.strokeStyle = "#f15bb5"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(dotX, dotY); ctx.stroke();
      ctx.beginPath(); ctx.arc(dotX, dotY, 6, 0, 2 * Math.PI);
      ctx.fillStyle = "#f15bb5"; ctx.fill();

      // 完成标注
      if (t > 0.96) {
        ctx.fillStyle = "#2b2d42";
        ctx.font = "900 19px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("滚一周的距离 = 周长 C ≈ 3.14 × d", W / 2, 52);
        ctx.fillStyle = "#e0a91f";
        ctx.fillText("C = π × d（π 约等于 3.14）", W / 2, 80);
      } else {
        ctx.fillStyle = "#5c607a";
        ctx.font = "800 16px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("让圆沿着地面滚一整圈……", W / 2, 52);
      }
      void ax; void px; void dx; void mx;
    }

    /* ---------- 模式二：切拼扇形，推导面积 = πr² ---------- */
    var SR = 92, SCX = 150, SCY = 150;

    function drawSectors(t, n) {
      ctx.clearRect(0, 0, W, H);
      var alpha = (2 * Math.PI) / n;
      var bandY = 96;               // 拼成带形的顶部
      var slotW = (Math.PI * SR) / (n / 2); // 每个槽位宽 = 弧长
      var bandX = W / 2 - (Math.PI * SR) / 2;
      var colors = ["#2ec4b6", "#4d96ff"];

      for (var i = 0; i < n; i++) {
        var bis = i * alpha + alpha / 2; // 圆内角平分线方向
        var down = i % 2 === 0;
        // 目标：down 的扇形尖朝上、弧朝下；up 的相反
        var slot = Math.floor(i / 2);
        var tx = down
          ? bandX + slot * slotW + slotW / 2
          : bandX + slot * slotW + slotW;
        var ty = down ? bandY : bandY + SR;
        var tRot = down ? Math.PI / 2 : -Math.PI / 2; // 开口方向（从尖指向弧）
        // 插值
        var e = t;
        var px = SCX + (tx - SCX) * e;
        var py = SCY + (ty - SCY) * e;
        var rot = bis + (tRot - bis) * e;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(SR * Math.cos(-alpha / 2), SR * Math.sin(-alpha / 2));
        ctx.arc(0, 0, SR, -alpha / 2, alpha / 2);
        ctx.closePath();
        ctx.fillStyle = colors[i % 2];
        ctx.globalAlpha = 0.92;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      if (t > 0.96) {
        ctx.fillStyle = "#2b2d42";
        ctx.font = "900 17px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("底 = 圆周的一半 = π × r", W / 2, bandY + SR + 34);
        ctx.save();
        ctx.translate(bandX - 18, bandY + SR / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText("高 = r", 0, 0);
        ctx.restore();
        ctx.fillStyle = "#e0a91f";
        ctx.font = "900 20px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.fillText("圆面积 = π × r × r = π × r²", W / 2, 52);
      } else {
        ctx.fillStyle = "#5c607a";
        ctx.font = "800 16px 'Chalkboard SE','PingFang SC',sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("把圆切成 " + n + " 瓣，交错拼一拼……", W / 2, 52);
      }
    }

    function draw() {
      if (cfg.mode === "roll") drawRoll(cur.t);
      else drawSectors(cur.t, cfg.n || 8);
    }

    var cancel = null;
    function update(ns) {
      Object.assign(cfg, ns);
      if (cancel) cancel();
      cancel = MW.util.tween(cur, { t: cfg.t }, 900, function (v) {
        cur = v; draw();
      });
    }

    draw();
    return { update: update, destroy: function () { if (cancel) cancel(); } };
  }

  return { mount: mount };
})();
