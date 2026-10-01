/* ePitch Master — ตัวแสดงผลกลางของทุกหน้า
   เนื้อหาอยู่ใน data/*.js (แต่ละหน้าโหลดเฉพาะไฟล์ของตัวเอง) · หน้า HTML สร้างจาก src/ ด้วย /workspace/build.py */
(function () {
  "use strict";
  var D = window.EPM || {};
  var PAGE = document.body.getAttribute("data-page") || "";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  function html(id, s) { var el = document.getElementById(id); if (el) el.innerHTML = s; return el; }
  function has(id) { return !!document.getElementById(id); }

  /* ---------- button tokens → styled keycaps ---------- */
  var KEYS = {
    X: '<i class="k ps-x" title="Cross">✕</i>', O: '<i class="k ps-o" title="Circle">○</i>',
    T: '<i class="k ps-t" title="Triangle">△</i>', S: '<i class="k ps-s" title="Square">□</i>',
    A: '<i class="k xb-a" title="ปุ่ม A">A</i>', B: '<i class="k xb-b" title="ปุ่ม B">B</i>', Y: '<i class="k xb-y" title="ปุ่ม Y">Y</i>', XX: '<i class="k xb-x" title="ปุ่ม X">X</i>',
    LS: stickChip("LS", "LS = Left Stick ก้านอนาล็อกซ้าย (บนจอยไม่มีตัวหนังสือ LS)", false),
    RS: stickChip("RS", "RS = Right Stick ก้านอนาล็อกขวา (บนจอยไม่มีตัวหนังสือ RS)", false),
    L3: stickChip("L3", "L3 = กดก้านอนาล็อกซ้ายลง", true),
    R3: stickChip("R3", "R3 = กดก้านอนาล็อกขวาลง", true)
  };
  function stickChip(label, title, press) {
    var marks = press
      ? '<path class="st-press" d="M12 5.2v4.6M9.9 8l2.1 2.2L14.1 8"/>'
      : '<path class="st-arr" d="M12 .9l1.6 1.9h-3.2zM12 23.1l1.6-1.9h-3.2zM.9 12l1.9-1.6v3.2zM23.1 12l-1.9-1.6v3.2z"/>';
    return '<i class="k stk' + (press ? ' press' : '') + '" title="' + title + '" aria-label="' + title + '">' +
      '<svg class="st-ic" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<circle class="st-base" cx="12" cy="12" r="8.6"/><circle class="st-cap" cx="12" cy="12" r="5.6"/>' +
      '<circle class="st-grip" cx="12" cy="12" r="3.4"/>' + marks + '</svg><b>' + label + '</b></i>';
  }
  /* [X] = ปุ่มจอย · {X} = ปุ่มคีย์บอร์ด */
  function kbd(str) {
    return esc(str).replace(/\[([A-Z0-9]+)\]/g, function (m, t) {
      return KEYS[t] || '<i class="k sh">' + t + "</i>";
    }).replace(/\{([^{}\s]{1,6})\}/g, function (m, t) { return '<i class="k kb">' + t + "</i>"; });
  }
  var XB = { X: "A", O: "B", S: "XX", T: "Y", L1: "LB", R1: "RB", L2: "LT", R2: "RT" };
  function toXb(s) { return String(s || "").replace(/\[([A-Z0-9]+)\]/g, function (m, t) { return "[" + (XB[t] || t) + "]"; }); }
  function fmtDate(iso) {
    var m = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    var p = String(iso).split("-");
    return parseInt(p[2], 10) + " " + m[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function cardHTML(o, cls) {
    return '<div class="glass mini reveal ' + (cls || "") + '"><span class="mini-ic">' + o.icon + "</span><h4>" + esc(o.t) + "</h4><p>" + kbd(o.d) + "</p></div>";
  }

  /* ---------- shared: version ---------- */
  if (D.site) {
    $$("[data-version]").forEach(function (el) { el.textContent = "อ้างอิง eFootball™ " + (D.site.versionShort || D.site.gameVersion); });
    html("footVersion", "อ้างอิง " + esc(D.site.gameVersion) + " · ปุ่มและเมตาอาจเปลี่ยนหลังแพตช์ — ตรวจ Command List ในเกมเสมอ");
  }

  /* ================= PLATFORM PAGES (PS5 / Xbox / PC / มือถือ) ================= */
  var PF = D.platform;
  var pfId = PF ? PF.id : "";
  var isXb = pfId === "xbox" || pfId === "pc";
  var HOW = { ps5: "🎮 PS5", xbox: "🟢 Xbox", pc: "🎮 จอยบน PC", mobile: "📱 มือถือ" };
  if (PF) {
    if (PF.hero) {
      var Hh = PF.hero;
      html("pfQuick", '<div class="hc-head"><span class="hc-title">' + esc(Hh.title) + '</span><span class="hc-pf">' + esc(Hh.tag) + "</span></div>" +
        '<ul class="hc-list">' + Hh.items.map(function (it) { return "<li><span>" + esc(it[0]) + "</span><b>" + kbd(it[1]) + "</b></li>"; }).join("") + "</ul>" +
        (Hh.stickNote ? '<p class="hc-stick">ℹ️ ' + kbd(Hh.stickNote) + "</p>" : ""));
    }
    if (PF.glossary && has("glossRows")) {
      var BG = PF.glossary;
      html("glossTitle", esc(BG.title));
      html("glossIntro", esc(BG.intro));
      html("glossSticks", '<div class="gs-items">' + BG.sticks.map(function (x) {
        return '<div class="gs-item"><span class="gs-ic">' + kbd(x.key) + "</span><span>" + esc(x.text) + "</span></div>";
      }).join("") + '</div><p class="gs-note">⚠️ ' + esc(BG.sticksNote) + '</p><p class="gs-ex">' + kbd(BG.example) + "</p>");
      html("glossRows", '<div class="gl-row gl-th"><span>ปุ่ม</span><span>ชื่อเรียก · อยู่ตรงไหน · ใช้ทำอะไร</span></div>' +
        BG.rows.map(function (r) {
          return '<div class="gl-row"><span class="gl-key">' + kbd(r.key) + '</span><span class="gl-desc"><b>' + esc(r.name) + "</b><small>" + esc(r.where) +
            "</small>" + (r.use ? '<em class="gl-use"><span>ใช้ในเกม:</span> ' + kbd(r.use) + "</em>" : "") + "</span></div>";
        }).join(""));
      html("glossNote", "💡 " + esc(BG.note));
    }
    if (has("pfLegend")) {
      html("pfLegend", (isXb
        ? '<span><i class="k xb-a">A</i> A</span><span><i class="k xb-b">B</i> B</span><span><i class="k xb-x">X</i> X</span><span><i class="k xb-y">Y</i> Y</span>'
        : '<span><i class="k ps-x">✕</i> Cross</span><span><i class="k ps-o">○</i> Circle</span><span><i class="k ps-t">△</i> Triangle</span><span><i class="k ps-s">□</i> Square</span>') +
        '<span class="lg-flag">* = ยังไม่พบยืนยันในเอกสารทางการ</span>');
    }
    if (PF.controls && has("tblAttack")) {
      var ctrlTable = function (rows) {
        var h = "<thead><tr><th>คำสั่ง</th><th>ปุ่ม</th><th>หมายเหตุ</th></tr></thead><tbody>";
        rows.forEach(function (r) {
          h += "<tr" + (r.flag ? " class='flag'" : "") + "><td data-l='คำสั่ง'><b>" + esc(r.action) + (r.flag ? " <sup>*</sup>" : "") + "</b></td>" +
            "<td data-l='ปุ่ม' class='keys'><span class='v'>" + kbd(r["in"]) + "</span></td>" +
            "<td data-l='หมายเหตุ' class='note'><span class='v'>" + kbd(r.note) + "</span></td></tr>";
        });
        return h + "</tbody>";
      };
      html("tblAttack", ctrlTable(PF.controls.attack));
      html("tblDefence", ctrlTable(PF.controls.defence));
      html("tblGK", ctrlTable(PF.controls.gk));
      html("consoleFoot", "ℹ️ " + kbd(PF.controls.footnote));
    }
    if (PF.callouts) html("pfCallouts", PF.callouts.map(function (c, i) {
      return '<div class="callout glass' + (i === 0 ? " neon-edge" : "") + '"><b>' + c.icon + " " + esc(c.t) + "</b><p>" + kbd(c.d) + "</p></div>";
    }).join(""));
    if (PF.keyboard) {
      var K = PF.keyboard;
      html("kbIntro", "<b>⚠️ </b>" + esc(K.intro));
      html("kbTitle", esc(K.title));
      html("tblKeyboard", "<thead><tr><th>คำสั่ง</th><th>ปุ่ม</th><th>หมายเหตุ</th></tr></thead><tbody>" + K.rows.map(function (r) {
        return "<tr class='flag'><td data-l='คำสั่ง'><b>" + esc(r.action) + " <sup>*</sup></b></td><td data-l='ปุ่ม' class='keys'><span class='v'>" + kbd(r.key) +
          "</span></td><td data-l='หมายเหตุ' class='note'><span class='v'>" + esc(r.note || "รายงานจากผู้เล่น") + "</span></td></tr>";
      }).join("") + "</tbody>");
      html("kbRemap", K.remap.map(function (s) { return "<li><span>" + esc(s) + "</span></li>"; }).join(""));
      html("kbRemapNote", "ℹ️ " + esc(K.remapNote));
      html("kbPad", K.pad.map(function (s) { return "<li>" + kbd(s) + "</li>"; }).join(""));
    }
    if (PF.techniques) {
      var tech = function (list, cls) {
        return list.map(function (t) {
          return '<div class="glass tcard reveal ' + cls + '"><div class="t-top"><span class="mini-ic">' + t.icon + "</span><h4>" + esc(t.t) + "</h4></div><p>" + esc(t.d) + "</p>" +
            '<div class="how"><span class="how-l">' + HOW[pfId] + "</span>" + kbd(t.how) + "</div></div>";
        }).join("");
      };
      html("techAttack", tech(PF.techniques.attack, "atk"));
      html("techDefence", tech(PF.techniques.defence, "def"));
    }
    if (PF.classic) {
      var scheme = function (s, cls, icon) {
        return '<div class="glass card scheme reveal ' + cls + '"><div class="scheme-head"><span class="scheme-ic">' + icon + "</span><div><h3>" + esc(s.title) + "</h3><p>" + esc(s.desc) + "</p></div></div>" +
          '<ul class="gestures">' + s.rows.map(function (r) {
            return '<li><span class="g">' + esc(r.g) + '</span><span class="arrow">→</span><span class="a">' + esc(r.a) + "</span></li>";
          }).join("") + "</ul></div>";
      };
      html("mobileSchemes", scheme(PF.classic, "classic", "🕹️") + scheme(PF.flick, "flick", "👆"));
      html("mobileTips", PF.tips.map(function (t) { return cardHTML(t); }).join(""));
      html("mobileFoot", "ℹ️ " + esc(PF.footnote));
    }
    if (PF.remotePlay) {
      var R = PF.remotePlay;
      html("remoteNote", "<b>💡 </b>" + kbd(R.note));
      html("remoteReqs", R.reqs.map(function (r) { return "<div><dt>" + esc(r.k) + "</dt><dd>" + esc(r.v) + "</dd></div>"; }).join(""));
      html("remoteSteps", R.steps.map(function (s) { return "<li><b>" + esc(s.t) + "</b><span>" + esc(s.d) + "</span></li>"; }).join(""));
      html("remoteLatency", R.latency.map(function (t) { return cardHTML(t); }).join(""));
      var cmp = function (o, cls, ic) {
        return '<div class="glass card cmp reveal ' + cls + '"><h3>' + ic + " " + esc(o.title) + '</h3><div class="pc"><ul class="pros">' +
          o.pros.map(function (p) { return "<li>" + kbd(p) + "</li>"; }).join("") + '</ul><ul class="cons">' +
          o.cons.map(function (p) { return "<li>" + kbd(p) + "</li>"; }).join("") + "</ul></div></div>";
      };
      html("remoteCompare", cmp(R.compare.touch, "touch", "👆") + cmp(R.compare.pad, "pad recommended", "🎮"));
    }
  }

  /* ================= SKILLS (catalogue + per-platform lists) ================= */
  var SK = D.skills;
  var SKP = { ps5: { l: "PS5", ic: "🎮" }, xbox: { l: "Xbox", ic: "🟢" }, pc: { l: "PC (จอย)", ic: "⌨️" }, mc: { l: "มือถือ Classic", ic: "🕹️" }, tf: { l: "Touch & Flick", ic: "👆" } };
  function skInput(s, p) {
    if (p === "mc" || p === "tf") return s[p] || "";
    if (!s.con) return "";
    return p === "ps5" ? s.con : toXb(s.con);
  }
  function skLevel(s, p) { return (p === "mc" || p === "tf") ? (s[p] ? s.mlv : "none") : (s.con ? s.lv : "none"); }
  var LVCLS = { off: "lv-off", com: "lv-com", none: "lv-none" };
  function lvBadge(lv) { return '<span class="sk-lv ' + LVCLS[lv] + '">' + esc(SK.levels[lv]) + "</span>"; }
  function catName(c) { for (var i = 0; i < SK.cats.length; i++) if (SK.cats[i][0] === c) return SK.cats[i][1]; return c; }
  function inCell(s, p) {
    var v = skInput(s, p);
    return v ? kbd(v) : '<span class="sk-na">ยังไม่พบข้อมูลยืนยัน</span>';
  }
  if (SK && has("pfSkills") && PF) {
    var pl = pfId === "mobile" ? ["mc", "tf"] : [pfId];
    html("pfSkillNote", "🌀 " + kbd(pfId === "mobile" ? "บนมือถือ เกมเริ่มที่ Feint Command Type แบบ Smart — วิธีกดด้านล่างเป็นข้อมูลชุมชน (GamingonPhone) ตรวจในเกมอีกครั้ง" : (isXb ? toXb(SK.setting) : SK.setting)));
    var cur = "";
    html("pfSkills", SK.skills.filter(function (s) { return s.cat !== "card" && pl.some(function (p) { return skInput(s, p); }); }).map(function (s) {
      var head = s.cat !== cur ? '<h3 class="sk-cat reveal">' + esc(catName(s.cat)) + "</h3>" : ""; cur = s.cat;
      return head + '<div class="sk-row reveal"><div class="sk-n"><b>' + esc(s.name) + "</b><small>" + esc(s.th) + "</small>" +
        (s.card ? '<span class="sk-card">🃏 ' + esc(s.card) + "</span>" : "") + '</div><div class="sk-ins">' +
        pl.map(function (p) {
          return '<div class="sk-in">' + (pl.length > 1 ? '<span class="sk-pl">' + SKP[p].l + "</span>" : "") + inCell(s, p) + lvBadge(skLevel(s, p)) + "</div>";
        }).join("") + "</div></div>";
    }).join(""));
  }
  if (SK && PAGE === "skills" && has("skList")) {
    var st = { p: "ps5", c: "", q: "" };
    try { var sp = localStorage.getItem("epm-skill-pf"); if (SKP[sp]) st.p = sp; } catch (e) {}
    html("skBar",
      '<div class="sk-pick" role="group" aria-label="เลือกแพลตฟอร์ม">' + Object.keys(SKP).map(function (k) {
        return '<button type="button" class="sk-pbtn" data-p="' + k + '"><span aria-hidden="true">' + SKP[k].ic + "</span>" + SKP[k].l + "</button>";
      }).join("") + "</div>" +
      '<div class="sk-tools"><div class="sk-cats" role="group" aria-label="หมวด"><button type="button" class="sk-cbtn" data-c="">ทั้งหมด</button>' +
      SK.cats.map(function (c) { return '<button type="button" class="sk-cbtn" data-c="' + c[0] + '">' + esc(c[1]) + "</button>"; }).join("") + "</div>" +
      '<label class="sk-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg><input type="search" id="skQ" placeholder="ค้นหาท่า เช่น Marseille, กรรไกร" autocomplete="off" aria-label="ค้นหาท่า"></label></div>');
    html("skSources", SK.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a></li>"; }).join("") +
      "<li>" + lvBadge("off") + " " + lvBadge("com") + " " + lvBadge("none") + "</li>");
    var open = {};
    var renderSk = function () {
      $$(".sk-pbtn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-p") === st.p)); });
      $$(".sk-cbtn").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-c") === st.c)); });
      var setting = st.p === "mc" || st.p === "tf" ? "บนมือถือ เกมเริ่มที่ Feint Command Type แบบ Smart — วิธีกดท่าหลอกบนมือถือส่วนใหญ่มาจากแหล่งชุมชน (GamingonPhone)" : (st.p === "ps5" ? SK.setting : toXb(SK.setting));
      html("skSetting", "🌀 " + kbd(setting));
      var q = st.q, list = SK.skills.filter(function (s) {
        if (st.c && s.cat !== st.c) return false;
        if (q && (s.name + " " + s.th + " " + s.what + " " + (s.card || "")).toLowerCase().indexOf(q) < 0) return false;
        return true;
      });
      if (!list.length) { html("skList", '<div class="ls-empty">ไม่พบท่าที่ค้นหา</div>'); return; }
      html("skList", list.map(function (s) {
        var o = !!open[s.id], v = skInput(s, st.p);
        return '<article class="sk-item glass' + (o ? " open" : "") + '" data-id="' + s.id + '"><button type="button" class="sk-head" aria-expanded="' + o + '">' +
          '<span class="sk-n"><b>' + esc(s.name) + "</b><small>" + esc(s.th) + " · " + esc(catName(s.cat)) + "</small></span>" +
          '<span class="sk-prev">' + (v ? kbd(v) : '<span class="sk-na">' + (s.cat === "card" ? "อัตโนมัติ" : "ยังไม่พบข้อมูล") + "</span>") + "</span>" +
          '<span class="ls-chev" aria-hidden="true"></span></button>' +
          (o ? '<div class="sk-body"><p><b>ทำอะไร:</b> ' + esc(s.what) + "</p><p><b>ใช้เมื่อ:</b> " + esc(s.when) + "</p>" +
            (s.card ? '<p><span class="sk-card">🃏 ' + esc(s.card) + "</span></p>" : "") +
            '<div class="sk-in big"><span class="sk-pl">' + SKP[st.p].ic + " " + SKP[st.p].l + "</span>" + inCell(s, st.p) + lvBadge(skLevel(s, st.p)) + "</div>" +
            (s.note ? '<p class="sk-note">ℹ️ ' + kbd(s.note) + "</p>" : "") + "</div>" : "") + "</article>";
      }).join(""));
    };
    $("#skBar").addEventListener("click", function (e) {
      var b = e.target.closest(".sk-pbtn"); if (b) { st.p = b.getAttribute("data-p"); try { localStorage.setItem("epm-skill-pf", st.p); } catch (er) {} renderSk(); return; }
      var c = e.target.closest(".sk-cbtn"); if (c) { st.c = c.getAttribute("data-c"); renderSk(); }
    });
    var qT; $("#skQ").addEventListener("input", function () { var v = this.value; clearTimeout(qT); qT = setTimeout(function () { st.q = v.trim().toLowerCase(); renderSk(); }, 150); });
    $("#skList").addEventListener("click", function (e) { var h = e.target.closest(".sk-head"); if (!h) return; var id = h.parentNode.getAttribute("data-id"); open[id] = !open[id]; renderSk(); });
    var pq = (location.search.match(/[?&]pf=(ps5|xbox|pc|mc|tf)/) || [])[1]; if (pq) st.p = pq;
    renderSk();
  }

  /* ================= TACTICS ================= */
  var pitchN = 0;
  function pitchSVG(pos) {
    var gid = "pg" + (pitchN++);
    var s = '<svg class="fpitch" viewBox="0 0 200 260" role="img" aria-label="ตำแหน่งผู้เล่น">' +
      '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c3b2a"/><stop offset="1" stop-color="#0a2c22"/></linearGradient></defs>' +
      '<rect x="0" y="0" width="200" height="260" rx="12" fill="url(#' + gid + ')"/>';
    for (var i = 0; i < 8; i++) s += '<rect x="6" y="' + (6 + i * 31) + '" width="188" height="15.5" fill="rgba(255,255,255,.025)"/>';
    s += '<g fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.4"><rect x="6" y="6" width="188" height="248" rx="4"/><line x1="6" y1="130" x2="194" y2="130"/><circle cx="100" cy="130" r="22"/>' +
      '<rect x="52" y="6" width="96" height="36"/><rect x="76" y="6" width="48" height="14"/><rect x="52" y="218" width="96" height="36"/><rect x="76" y="240" width="48" height="14"/></g>';
    pos.forEach(function (p, idx) {
      var x = 6 + p[0] / 100 * 188, y = 6 + p[1] / 100 * 248, gk = p[2] === "GK";
      s += '<g class="pl" style="--d:' + (idx * 40) + 'ms"><circle cx="' + x + '" cy="' + y + '" r="9.5" class="' + (gk ? "gkc" : "plc") + '"/>' +
        '<text x="' + x + '" y="' + (y + 19) + '" text-anchor="middle">' + p[2] + "</text></g>";
    });
    return s + "</svg>";
  }
  var TC = D.tactics;
  if (TC && has("formations")) {
    html("tacIntro", "ℹ️ " + esc(TC.intro));
    html("posEdit", "<b>✋ " + esc(TC.positionEdit.t) + "</b><p>" + esc(TC.positionEdit.d) + "</p>");
    html("fluidNote", "<b>🆕 " + esc(TC.fluid.t) + "</b><p>" + esc(TC.fluid.d) + "</p>");
    var styles = TC.playstyles.map(function (p) { return p.name; });
    var fs = { b: "", s: "", t: "" }, fopen = {};
    var chip = function (k, v, l) { return '<button type="button" class="fm-chip" data-k="' + k + '" data-v="' + esc(v) + '">' + esc(l) + "</button>"; };
    html("fmFilters",
      '<div class="fm-row" role="group" aria-label="จำนวนกองหลัง"><span class="fm-l">กองหลัง</span>' + chip("b", "", "ทั้งหมด") + chip("b", "3", "3 ตัว") + chip("b", "4", "4 ตัว") + chip("b", "5", "5 ตัว") + "</div>" +
      '<div class="fm-row" role="group" aria-label="ชนิดแผน"><span class="fm-l">ชนิด</span>' + chip("t", "", "ทั้งหมด") + chip("t", "p", "พรีเซ็ต") + chip("t", "c", "Position Edit") + "</div>" +
      '<div class="fm-row" role="group" aria-label="Team Playstyle"><span class="fm-l">สไตล์</span>' + chip("s", "", "ทั้งหมด") + styles.map(function (n) { return chip("s", n, n); }).join("") + "</div>" +
      '<p class="fm-count" id="fmCount"></p>');
    var renderF = function () {
      $$(".fm-chip").forEach(function (b) { b.setAttribute("aria-pressed", String(fs[b.getAttribute("data-k")] === b.getAttribute("data-v"))); });
      var list = TC.formations.filter(function (f) {
        if (fs.b && String(f.backs) !== fs.b) return false;
        if (fs.t === "p" && !f.preset) return false;
        if (fs.t === "c" && f.preset) return false;
        if (fs.s && f.fit.indexOf(fs.s) < 0) return false;
        return true;
      });
      html("fmCount", "แสดง <b>" + list.length + "</b> จาก " + TC.formations.length + " แผน");
      html("formations", list.length ? list.map(function (f) {
        var o = !!fopen[f.name];
        return '<article class="glass fcard' + (o ? " open" : "") + '" data-f="' + esc(f.name) + '"><div class="f-head"><h3>' + esc(f.name) + "</h3>" +
          '<span class="tag' + (f.preset ? "" : " custom") + '">' + (f.preset ? "พรีเซ็ต" : "Position Edit") + "</span></div>" +
          '<p class="f-tag">' + esc(f.tag) + "</p>" + pitchSVG(f.pos) +
          '<dl class="fdl"><div><dt>✅ จุดแข็ง</dt><dd>' + esc(f.good) + "</dd></div><div><dt>⚠️ จุดอ่อน</dt><dd>" + esc(f.bad) + "</dd></div>" +
          "<div><dt>🧭 เข้ากับ</dt><dd>" + f.fit.map(function (x) { return '<span class="fit">' + esc(x) + "</span>"; }).join("") + "</dd></div></dl>" +
          '<button type="button" class="f-more" aria-expanded="' + o + '">' + (o ? "ซ่อนรายละเอียด" : "บทบาท · คำสั่ง · เคล็ดลับ") + ' <span class="ls-chev" aria-hidden="true"></span></button>' +
          (o ? '<div class="f-detail"><h4>👥 บทบาทแนะนำ (Playing Style)</h4><ul class="f-roles">' + f.roles.map(function (r) { return '<li><span class="pos">' + esc(r[0]) + "</span>" + esc(r[1]) + "</li>"; }).join("") + "</ul>" +
            "<h4>📝 คำสั่งแนะนำ</h4><p>" + esc(f.instr) + "</p>" +
            '<div class="how"><span class="how-l">🎮 คอนโซล</span>' + kbd(f.con) + '</div><div class="how"><span class="how-l">📱 มือถือ</span>' + kbd(f.mob) + "</div>" +
            (f.meta ? '<p class="f-meta">📊 ' + esc(f.meta) + "</p>" : "") + "</div>" : "") + "</article>";
      }).join("") : '<div class="ls-empty">ไม่มีแผนที่ตรงกับตัวกรอง</div>');
    };
    $("#fmFilters").addEventListener("click", function (e) { var b = e.target.closest(".fm-chip"); if (!b) return; fs[b.getAttribute("data-k")] = b.getAttribute("data-v"); renderF(); });
    $("#formations").addEventListener("click", function (e) { var b = e.target.closest(".f-more"); if (!b) return; var n = b.closest(".fcard").getAttribute("data-f"); fopen[n] = !fopen[n]; renderF(); });
    renderF();
    html("playstyles", TC.playstyles.map(function (p) {
      return '<div class="glass ps-card reveal' + (p.isNew ? " is-new" : "") + '"><div class="ps-head"><span class="mini-ic">' + p.icon + "</span><h4>" + esc(p.name) + "</h4>" + (p.isNew ? '<span class="new">ใหม่ v6</span>' : "") + "</div>" +
        '<p><b>ใช้เมื่อ:</b> ' + esc(p.when) + '</p><p><b>ทีมเล่นแบบ:</b> ' + esc(p.how) + '</p><p class="watch"><b>ระวัง:</b> ' + esc(p.watch) + "</p></div>";
    }).join(""));
    html("instructions", TC.instructions.map(function (i) {
      return '<div class="ins"><span class="side ' + (i.side === "รุก" ? "s-atk" : "s-def") + '">' + esc(i.side) + "</span><b>" + esc(i.name) + "</b><p>" + esc(i.d) + "</p></div>";
    }).join(""));
    html("instrNote", "ℹ️ " + esc(TC.instructionsNote));
    html("tacV6", TC.v6.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""));
    html("tacLevels", "<b>🎚️ ปรับระดับเกมรุก/รับ</b><p>" + esc(TC.levels) + "</p>");
    html("tacNotIn", "<b>🚫 ไม่มีในเกมปัจจุบัน</b><p>" + esc(TC.notInGame) + "</p>");
    html("tacSources", TC.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a> <small>" + esc(s.date) + "</small></li>"; }).join(""));
  }

  /* ================= PLAYERS ================= */
  var PG = D.players;
  if (PG && has("progCats")) {
    html("progCats", PG.categories.map(function (c, i) { return '<span class="cat" style="--i:' + i + '">' + esc(c) + "</span>"; }).join(""));
    html("progCatsNote", esc(PG.categoriesNote));
    html("progTable", "<thead><tr><th>ตำแหน่ง</th><th>ลงก่อน (หลัก)</th><th>รอง</th></tr></thead><tbody>" +
      PG.byPosition.map(function (r) { return "<tr><td data-l='ตำแหน่ง'><span class='pos'>" + esc(r.pos) + "</span></td><td data-l='หลัก'><span class='v'><b>" + esc(r.main) + "</b></span></td><td data-l='รอง' class='note'><span class='v'>" + esc(r.sub) + "</span></td></tr>"; }).join("") + "</tbody>");
    html("progTableNote", "ℹ️ " + esc(PG.byPositionNote));
    html("progPrinciples", PG.principles.map(function (t) { return cardHTML(t, "row"); }).join(""));
    html("valueTips", PG.value.map(function (t) { return cardHTML(t); }).join(""));
  }

  /* ================= NEWS ================= */
  if (D.news && has("newsList")) {
    var M = D.meta || {};
    html("updateBadge", '<span class="live-dot"></span> อัปเดตล่าสุด <b>' + fmtDate(M.lastUpdated) + "</b>" + (M.weekLabel ? " · " + esc(M.weekLabel) : "") +
      (M.nextVersion ? '<br><span class="next">ถัดไป: ' + esc(M.nextVersion) + "</span>" : ""));
    html("newsList", D.news.map(function (n) {
      return '<article class="tl-item glass reveal' + (n.hot ? " hot" : "") + '"><div class="tl-date"><b>' + fmtDate(n.date) + '</b><span class="tag">' + esc(n.tag) + "</span></div><h4>" + esc(n.title) + "</h4><p>" + esc(n.body) + '</p><div class="tl-src">' +
        (n.sources || []).map(function (s) { return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">↗ ' + esc(s.name) + "</a>"; }).join("") + "</div></article>";
    }).join(""));
    html("metaNotes", (D.metaNotes || []).map(function (m) {
      return '<div class="meta-it"><span>' + m.icon + "</span><div><b>" + esc(m.title) + "</b><p>" + esc(m.text) + '</p><small>แหล่ง: ' + esc(m.src) + "</small></div></div>";
    }).join(""));
    html("officialLinks", (D.officialLinks || []).map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener"><span>' + l.icon + "</span>" + esc(l.name) + "<em>↗</em></a>";
    }).join(""));
  }

  /* ================= ABOUT ================= */
  var AB = D.about;
  if (AB && has("crossplayList")) {
    html("crossplayList", AB.crossplay.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join(""));
    html("platformChips", AB.platforms.map(function (p) { return '<span class="chip"><em>' + p.icon + "</em>" + esc(p.name) + "</span>"; }).join(""));
    html("modesGrid", AB.modes.map(function (m) {
      return '<div class="glass mini reveal"><span class="mini-ic">' + m.icon + "</span><h4>" + esc(m.name) + "</h4><p>" + esc(m.text) + "</p></div>";
    }).join(""));
    html("sourcesGrid", AB.sources.map(function (g) {
      return '<div class="src-col"><h4>' + g.icon + " " + esc(g.type) + ' <span class="' + (g.used ? "used" : "watch") + '">' + (g.used ? "ใช้อ้างอิง" : "ช่องทางติดตามรายสัปดาห์") + "</span></h4><ul>" +
        g.items.map(function (i) { return '<li><a href="' + esc(i.url) + '" target="_blank" rel="noopener">' + esc(i.name) + "</a></li>"; }).join("") + "</ul></div>";
    }).join(""));
  }

  /* ---------- swipe hints for mobile carousels ---------- */
  $$(".snap").forEach(function (el) {
    if (!el.children.length) return;
    var h = document.createElement("div");
    h.className = "snap-hint";
    h.innerHTML = "ปัดซ้าย–ขวาเพื่อดูทั้งหมด (" + el.children.length + ") <i>→</i>";
    el.parentNode.insertBefore(h, el);
  });

  /* ---------- MENU (hamburger on every page) ---------- */
  var nav = $("#nav"), burger = $("#burger"), menu = $("#navMenu"), backdrop = $("#menuBackdrop");
  function setMenu(open) {
    if (!menu) return;
    nav.classList.toggle("open", open); menu.classList.toggle("open", open); if (backdrop) backdrop.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open)); burger.setAttribute("aria-label", open ? "ปิดเมนู" : "เปิดเมนู");
    if (open) { var c = menu.querySelector(".is-current") || menu.querySelector("a"); if (c) try { c.focus({ preventScroll: true }); } catch (e) {} }
  }
  if (burger && menu) {
    burger.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    if (backdrop) backdrop.addEventListener("click", function () { setMenu(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && menu.classList.contains("open")) { setMenu(false); burger.focus(); } });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }
  window.EPMcloseMenu = function () { setMenu(false); };

  /* ---------- scroll progress / to-top ---------- */
  var prog = $("#scrollProgress"), toTop = $("#toTop");
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    if (prog) prog.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    nav.classList.toggle("scrolled", y > 20);
    if (toTop) toTop.classList.toggle("show", y > 700);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- reveal on scroll ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = $$(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });
    items.forEach(function (el, i) { el.style.setProperty("--rd", (i % 4) * 60 + "ms"); io.observe(el); });
  }
  /* content rendered later (filters, expand) is shown immediately */
  window.EPMreveal = function (root) { $$(".reveal", root).forEach(function (el) { el.classList.add("in"); }); };

  /* ---------- subtle parallax on hero beams ---------- */
  var hero = $(".stadium");
  if (!reduce && hero) {
    window.addEventListener("pointermove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 2, y = (e.clientY / window.innerHeight - 0.5) * 2;
      hero.style.setProperty("--px", x.toFixed(3));
      hero.style.setProperty("--py", y.toFixed(3));
    }, { passive: true });
  }
})();

/* ===================== REPORT ISSUE / FEEDBACK ===================== */
(function () {
  "use strict";
  var ENDPOINT = "https://formsubmit.co/ajax/sonicgame2024@gmail.com";
  var SUBJECT = "ePitch Master: แจ้งปัญหา/ข้อเสนอแนะ";
  var STORE = "epm-reports";
  var MAX = 2000;
  function $(s) { return document.querySelector(s); }
  var fab = $("#rpFab"), panel = $("#rpPanel"), backdrop = $("#rpBackdrop"), closeBtn = $("#rpClose");
  if (!fab || !panel) return;
  var form = $("#rpForm"), msg = $("#rpMsg"), contact = $("#rpContact"), honey = $("#rpHoney");
  var count = $("#rpCount"), send = $("#rpSend"), list = $("#rpList"), toastEl = $("#rpToast");
  var tabsWrap = panel.querySelector(".rp-tabs"), tabs = panel.querySelectorAll(".rp-tab");
  var type = "ปัญหา", sending = false, toastTimer = null, lastFocus = null;
  var PH = { "ปัญหา": "เล่าปัญหาที่เจอ เช่น กดอะไรแล้วเกิดอะไรขึ้น", "ข้อเสนอแนะ": "อยากให้เพิ่มหรือปรับอะไร บอกเราได้เลย" };

  function load() { try { var a = JSON.parse(localStorage.getItem(STORE) || "[]"); return Array.isArray(a) ? a : []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(STORE, JSON.stringify(a.slice(0, 50))); } catch (e) {} }
  function fmt(ts) {
    try { return new Date(ts).toLocaleString("th-TH", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }); }
    catch (e) { return new Date(ts).toLocaleString(); }
  }
  function render() {
    var items = load();
    list.innerHTML = "";
    if (!items.length) {
      var li = document.createElement("li"); li.className = "rp-empty"; li.textContent = "ยังไม่มีข้อความที่ส่งจากเครื่องนี้"; list.appendChild(li); return;
    }
    items.forEach(function (it) {
      var li = document.createElement("li"); li.className = "rp-item";
      var top = document.createElement("div"); top.className = "rp-item-top";
      var b = document.createElement("span"); b.className = "rp-badge" + (it.type === "ข้อเสนอแนะ" ? " sug" : ""); b.textContent = it.type;
      var t = document.createElement("time"); t.dateTime = new Date(it.ts).toISOString(); t.textContent = fmt(it.ts);
      top.appendChild(b); top.appendChild(t);
      var p = document.createElement("p"); p.className = "rp-item-msg"; p.textContent = it.message;
      li.appendChild(top); li.appendChild(p);
      if (it.contact) { var c = document.createElement("div"); c.className = "rp-item-top"; c.style.margin = "4px 0 0"; c.textContent = "ติดต่อ: " + it.contact; li.appendChild(c); }
      var st = document.createElement("div"); st.className = "rp-item-st" + (it.ok ? "" : " fail");
      st.textContent = it.ok ? "✓ ส่งถึงผู้ดูแลแล้ว" : "⚠ ส่งไม่สำเร็จ";
      li.appendChild(st);
      list.appendChild(li);
    });
  }
  function toast(text, isErr) {
    toastEl.textContent = text;
    toastEl.classList.toggle("err", !!isErr);
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 4200);
  }
  function updateCount() {
    var n = msg.value.length;
    count.textContent = n + "/" + MAX;
    count.classList.toggle("warn", n >= MAX * 0.9 && n < MAX);
    count.classList.toggle("max", n >= MAX);
  }
  function setType(t) {
    type = t;
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute("data-rp-type") === t;
      tabs[i].setAttribute("aria-selected", String(on));
      if (on) tabsWrap.setAttribute("data-active", String(i));
    }
    msg.placeholder = PH[t] || PH["ปัญหา"];
  }
  function open() {
    lastFocus = document.activeElement;
    if (window.EPMcloseMenu) window.EPMcloseMenu();
    panel.hidden = false; backdrop.hidden = false;
    document.body.classList.add("rp-open");
    fab.setAttribute("aria-expanded", "true");
    render();
    setTimeout(function () { try { msg.focus({ preventScroll: true }); } catch (e) { msg.focus(); } }, 60);
  }
  function close() {
    panel.hidden = true; backdrop.hidden = true;
    document.body.classList.remove("rp-open");
    fab.setAttribute("aria-expanded", "false");
    if (lastFocus && lastFocus.focus) lastFocus.focus(); else fab.focus();
  }
  function submit() {
    if (sending) return;
    var text = msg.value.trim();
    if (!text) { toast("กรุณาพิมพ์ข้อความก่อนส่ง", true); msg.focus(); return; }
    if (text.length > MAX) text = text.slice(0, MAX);
    if (honey.value) { msg.value = ""; updateCount(); toast("ส่งข้อความเรียบร้อย ขอบคุณครับ 🙏"); return; }
    sending = true; send.disabled = true; send.querySelector(".rp-send-txt").textContent = "กำลังส่ง…";
    var who = contact.value.trim().slice(0, 200);
    var ts = Date.now();
    var payload = {
      _subject: SUBJECT, _template: "table", _captcha: "false",
      type: type, message: text, contact: who || "-",
      page: location.href, sent_at: new Date(ts).toISOString(), user_agent: navigator.userAgent
    };
    var ctrl = ("AbortController" in window) ? new AbortController() : null;
    var to = setTimeout(function () { if (ctrl) ctrl.abort(); }, 20000);
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl ? ctrl.signal : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; });
    }).then(function (res) {
      var ok = res.ok && (res.j.success === true || res.j.success === "true");
      var items = load();
      items.unshift({ type: type, message: text, contact: who, ts: ts, ok: ok });
      save(items); render();
      if (ok) {
        msg.value = ""; updateCount();
        toast("ส่งข้อความเรียบร้อย ขอบคุณที่ช่วยเราพัฒนาเว็บ 🙏");
      } else {
        toast("ส่งไม่สำเร็จ ลองใหม่อีกครั้งภายหลัง" + (res.j && res.j.message ? " (" + String(res.j.message).slice(0, 80) + ")" : ""), true);
      }
    }).catch(function () {
      toast("ส่งไม่สำเร็จ ตรวจสอบอินเทอร์เน็ตแล้วลองใหม่", true);
    }).then(function () {
      clearTimeout(to);
      sending = false; send.disabled = false; send.querySelector(".rp-send-txt").textContent = "ส่งข้อความ";
    });
  }

  fab.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) close(); });
  for (var i = 0; i < tabs.length; i++) tabs[i].addEventListener("click", function () { setType(this.getAttribute("data-rp-type")); });
  msg.addEventListener("input", updateCount);
  msg.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing && e.keyCode !== 229) { e.preventDefault(); submit(); }
  });
  form.addEventListener("submit", function (e) { e.preventDefault(); submit(); });
  setType("ปัญหา"); updateCount(); render();
  if (/[?#&]report\b/.test(location.search + location.hash)) open();
})();
