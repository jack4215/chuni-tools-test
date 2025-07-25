(() => {
  var e = {
      283: (e, t, n) => {
        var r = {
          "./en_US.json": 466,
          "./zh_TW.json": 549
        };

        function o(e) {
          var t = s(e);
          return n(t)
        }

        function s(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          }
          return r[e]
        }
        o.keys = function() {
          return Object.keys(r)
        }, o.resolve = s, e.exports = o, o.id = 283
      },
      692: (e, t, n) => {
        var r = {
          "./en_US.json": 903,
          "./zh_TW.json": 141
        };

        function o(e) {
          var t = s(e);
          return n(t)
        }

        function s(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
          }
          return r[e]
        }
        o.keys = function() {
          return Object.keys(r)
        }, o.resolve = s, e.exports = o, o.id = 692
      },
      466: e => {
        "use strict";
        e.exports = JSON.parse('{"locale.name":"English (US)","footer.chooseLang":"Select Language","footer.source":"Source code & this page is hosted on <a href=\\"https://github.com/jack4215/chuni-tools\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\">GitHub</a><br/><br/>Developed and maintained by TSAIBEE"}')
      },
      549: e => {
        "use strict";
        e.exports = JSON.parse('{"locale.name":"繁體中文","footer.chooseLang":"選擇語言","footer.source":"本網站透過 GitHub Pages 架設，可至 <a href=\\"https://github.com/jack4215/chuni-tools\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\">GitHub</a> 查看原始碼。<br/><br/>Developed and maintained by TSAIBEE"}')
      },
      903: e => {
        "use strict";
        e.exports = JSON.parse('{"main.title":"CHUNITHM Record Viewer","loading.constData":"Used song constant data: {{name}}","loading.error.serviceDown":"CHUNITHM-NET service is currently unavailable.<br/>Please come back later.","loading.error.rejected":"An error occurred while processing your request.<br/>Please <em>re-open <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> and <em>run the bookmarklet again</em>.","loading.error.timeout":"An error occurred while processing your request.<br/>Please <em>re-open <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> and <em>run the bookmarklet again</em>.","loading.error.noopener":"An error occurred while processing your request.<br/>Please <em>re-open <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> and <em>run the bookmarklet again</em>.","loading.error.unknown":"Please <em>screenshot or copy the error message</em> to the author.","header.title.dl":"Save or share B40 as image","header.title.constData":"Change song constant data (Current: {{name}})","header.title.settings":"Open settings","settings.main.title":"Settings","settings.main.reset":"Reset Settings","settings.filter.title":"Filter","settings.filter.const":"By Chart Constant","settings.filter.diff":"By Difficulty","settings.filter.diff.warn":"*Should select at least one","settings.filter.diff.notify":"*Filtering difficulties or more than two hidden songs that are not displayed on CHUNITHM-NET may cause the data to be inaccurate.","settings.filter.genre":"By Genre","settings.filter.genre.all":"Toggle ALL","settings.filter.release":"By Version","settings.filter.release.all":"Toggle ALL","settings.filter.rank":"By Rank","settings.filter.rank.all":"Tog","settings.data.title":"Game Data","settings.data.constData":"Chart Constant Data（Version : JP 20250716v9）","settings.data.constData.crossverse":"Japanese Ver. (X-VERSE)","settings.data.constData.sun":"SUN","settings.data.constData.sunplus":"SUN+","settings.data.constData.luminous":"LUMINOUS","settings.data.constData.luminousplus":"LUMINOUS PLUS","settings.data.constData.verse":"Intl. Ver. (VERSE)","settings.data.playcount":"Show Play Count / World Ranking","settings.data.playcount.notify":"*You can click the dark box beside a song to view.","settings.data.showScoreDiff":"Show Diff.erence <span style=\\"color:var(--theme-text-dim)\\">(since last updated)</span>","settings.data.diffUpdate":"Diff. Basis Update Interval <span style=\\"color:var(--theme-text-dim)\\">Last updated: {{date}}</span>","settings.data.diffUpdate.1d":"Auto-update after 1 day","settings.data.diffUpdate.3d":"Auto-update after 3 days","settings.data.diffUpdate.7d":"Auto-update after 1 week","settings.data.diffUpdate.14d":"Auto-update after 2 weeks","settings.data.diffUpdate.30d":"Auto-update after 1 month","settings.data.diffUpdate.manual":"Manually update","settings.data.diffUpdate.update":"Update Diff. Basis","settings.data.diffUpdate.reload":"Reload Page to Update","settings.data.diffUpdate.notify":"*If set to auto-update when it has been more than the specified duration from the last time updated, the program will automatically update it.<br><br>◆ For more information please refer to <a href=\\"https://chuni.tsaibee.org\\" target=\\"_blank\\">Home Page</a>.<br><br>◆ To report issues please mail to <a href=\\"mailto:admin@tsaibee.org\\" target=\\"_blank\\">admin@tsaibee.org</a>.","settings.data.overpower":"Show OVER POWER","settings.data.overpower.hide":"Hide (Show Rank)","settings.data.overpower.clr":"Hide (Show Clear Mark)","settings.data.overpower.value":"Show (OVER POWER Value)","settings.data.overpower.percentage":"Show (OVER POWER Achievement%)","settings.data.overpower.dgvalue":"Show (Designate OVER POWER Value)","settings.data.overpower.dgpercentage":"Show (Designate OVER POWER Achievement%)","settings.data.overpower.eudgvalue":"Show (Designate OVER POWER Value except unscored)","settings.data.overpower.eudgpercentage":"Show (Designate OVER POWER Achievement% except unscored)","settings.data.overpower.notify":"*It will also show unplayed song when toggled to \\"Show OVER POWER\\".<br/>*Total over power might differ from the official one, if some of the songs are not unlocked yet.<br/>*When set to \\"(Designate OVER POWER)\\", only the chart with the highest OP value and the highest difficulty for each song will be displayed.","settings.ui.title":"User Interface","settings.ui.locale":"Language","settings.ui.theme":"Theme","player.generic.generatedAt":"Generated At","player.best.playCount":"Play Count","player.best.best30":"BEST 30","player.best.maxPossible":"Max Possible","player.best.all30":"ALL 30","player.best.curr20":"CURRENT 20","player.recent.average":"Rating","record.head.playOrder":"Played Time","record.head.order":"#","record.head.title":"Title","record.head.const":"Ct","record.head.overpower":"OP","record.head.overpowerPercent":"OP%","record.head.rank":"Rank","record.head.clr":"CLR","record.head.score":"Score","record.head.scoreDiff":"Diff.","record.head.rating":"Rat.","record.head.ajfc":"AJ","record.head.playcount":"PC","record.head.worldrank":"WR","record.fetch.fetching":"Fetching record for <span style=\\"color:var(--theme-song-{{diff}});\\">{{diffStr}}</span> difficulty...","record.fetch.diff.ult":"ULTIMA","record.fetch.diff.mas":"MASTER","record.fetch.diff.exp":"EXPERT","record.fetch.diff.adv":"ADVANCED","record.fetch.diff.bas":"BASIC","record.fetch.unknown":"Found unknown song(s):\\n\\n{{songs}}\\n\\nPlease contact the author via Email (admin@tsaibee.org).","record.fetch.error":"<span style=\\"color:red;\\">Some error occured when fetching best record!<br/>You probably need to reload the page now.</span>","playcount.fetch.button":"Fetch PC","worldrank.fetch.button":"Fetch WR","playcount.fetch.progress":"Fetching ... ({{progress}}/{{all}})","playcount.fetch.error":"<span style=\\"color:red;\\">Some error occured when fetching!<br/>You probably need to reload the page now.</span>","share.error":"Something went wrong when converting your scores to PNG. Please screenshot the error message to the author.\\n\\n{{error}}"}')
      },
      141: e => {
        "use strict";
        e.exports = JSON.parse('{"main.title":"CHUNITHM 查分器","loading.constData":"使用 {{name}} 版本的定數資料","loading.error.serviceDown":"CHUNITHM-NET 目前正在停服維護。<br/>請在其可以使用的時段執行本程式。","loading.error.rejected":"無法正常執行！<br/>請 <em>重新整理</em>、<em>重新登入 <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> 後，再執行查分器。","loading.error.timeout":"無法正常執行！<br/>請 <em>重新整理</em>、<em>重新登入 <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> 後，再執行查分器。","loading.error.noopener":"無法正常執行！<br/>請 <em>重新整理</em>、<em>重新登入 <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> 後，再執行查分器。","loading.error.unknown":"無法正常執行！<br/>請截圖以下錯誤資訊並回報作者協助處理。","header.title.dl":"將B40記錄儲存為照片","header.title.constData":"切換歌曲定數資料 (目前：{{name}})","header.title.settings":"設定","settings.main.title":"設定","settings.main.reset":"重置設定","settings.filter.title":"歌曲篩選","settings.filter.const":"依 譜面定數","settings.filter.diff":"依 譜面難度","settings.filter.diff.warn":"*至少選一個吧","settings.filter.diff.notify":"*依照難度篩選或有 2 首以上未於 CHUNITHM-NET 顯示的隱藏曲，可能會使得記錄變得不準確","settings.filter.genre":"依 歌曲類別","settings.filter.genre.all":"全部開啟/關閉","settings.filter.release":"依 歌曲版本","settings.filter.release.all":"全開/關","settings.filter.rank":"依 評級分數","settings.filter.rank.all":"全選","settings.data.title":"遊戲數據","settings.data.constData":"使用的定數資料（版本：JP 20250716v9）","settings.data.constData.crossverse":"日版 (X-VERSE)","settings.data.constData.sun":"SUN","settings.data.constData.sunplus":"SUN+","settings.data.constData.luminous":"LUMINOUS","settings.data.constData.luminousplus":"LUMINOUS PLUS","settings.data.constData.verse":"國際版 (VERSE)","settings.data.playcount":"顯示個別歌曲遊玩次數 / 世界排名","settings.data.playcount.notify":"*點擊歌曲條目旁的深色方塊也可以查看","settings.data.showScoreDiff":"顯示推分數據","settings.data.diffUpdate":"推分基準更新週期 <span style=\\"color:var(--theme-text-dim)\\">上次更新：{{date}}</span>","settings.data.diffUpdate.1d":"一天 後自動更新","settings.data.diffUpdate.3d":"三天 後自動更新","settings.data.diffUpdate.7d":"一週 後自動更新","settings.data.diffUpdate.14d":"兩週 後自動更新","settings.data.diffUpdate.30d":"一個月 後自動更新","settings.data.diffUpdate.manual":"手動更新","settings.data.diffUpdate.update":"更新推分基準","settings.data.diffUpdate.reload":"請重新載入頁面以更新紀錄","settings.data.diffUpdate.notify":"*若設定為自動更新，每當距離「上一次記錄推分基準」超過指定時間，就會自動更新推分的計算基準<br><br>◆ 關於書籤工具說明，請見<a href=\\"https://chuni.tsaibee.org\\" target=\\"_blank\\">本服務首頁</a><br><br>◆ 問題回報請寄信至 <a href=\\"mailto:admin@tsaibee.org\\" target=\\"_blank\\">admin@tsaibee.org</a>","settings.data.overpower":"顯示 OVER POWER","settings.data.overpower.hide":"隱藏 (顯示成績評級)","settings.data.overpower.clr":"隱藏 (顯示 CLEAR 標記)","settings.data.overpower.value":"顯示 (OVER POWER 數值)","settings.data.overpower.percentage":"顯示 (OVER POWER 達成率)","settings.data.overpower.dgvalue":"顯示 (OVER POWER 對象數值)","settings.data.overpower.dgpercentage":"顯示 (OVER POWER 對象達成率)","settings.data.overpower.eudgvalue":"顯示 (OVER POWER 對象數值 - 排除無分數)","settings.data.overpower.eudgpercentage":"顯示 (OVER POWER 對象達成率 - 排除無分數)","settings.data.overpower.notify":"*設定為「顯示」時，未遊玩的歌曲也會一併顯示<br/>*若有尚未解鎖的歌曲，OVER POWER 的數據可能會與官方記錄有差別<br/>*設定為「(OVER POWER 對象)」時，僅會顯示單曲所有譜面取得最大 OP 數值難度及最高難度","settings.ui.title":"使用者介面","settings.ui.locale":"語言","settings.ui.theme":"佈景主題","player.generic.generatedAt":"生成日期","player.best.playCount":"遊玩道數","player.best.best30":"BEST 30","player.best.maxPossible":"不推分可至","player.best.all30":"ALL 30","player.best.curr20":"CURRENT 20","player.recent.average":"Rating","record.head.playOrder":"遊玩時間","record.head.order":"#","record.head.title":"曲名","record.head.const":"定數","record.head.overpower":"OP","record.head.overpowerPercent":"OP%","record.head.rank":"評級","record.head.clr":"CLR","record.head.score":"成績","record.head.scoreDiff":"推分","record.head.rating":"評分","record.head.ajfc":"AJ","record.head.playcount":"次數","record.head.worldrank":"世排","record.fetch.fetching":"正在載入 <span style=\\"color:var(--theme-song-{{diff}});\\">{{diffStr}}</span> 資料……","record.fetch.diff.ult":"黑譜 (ULTIMA)","record.fetch.diff.mas":"紫譜 (MASTER)","record.fetch.diff.exp":"紅譜 (EXPERT)","record.fetch.diff.adv":"黃譜 (ADVANCED)","record.fetch.diff.bas":"綠譜 (BASIC)","record.fetch.unknown":"資料庫尚未有以下歌曲：\\n{{songs}}\\n請寄信至 admin@tsaibee.org 反映。","record.fetch.error":"<span style=\\"color:red;\\">取得遊玩記錄時發生問題，<br/>請重新整理頁面後再試一次。</span>","playcount.fetch.button":"取得次數","worldrank.fetch.button":"取得世排","playcount.fetch.progress":"正在取得…… ({{progress}}/{{all}})","playcount.fetch.error":"<span style=\\"color:red;\\">執行時出現問題，<br/>請重新整理頁面後再試一次。</span>","share.error":"轉換圖檔時出現錯誤，請將以下的錯誤訊息截圖傳給作者處理。\\n\\n{{error}}"}')
      }
    },
    t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = t[r] = {
      exports: {}
    };
    return e[r](s, s.exports, n), s.exports
  }
  n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    "use strict";

    function e() {}
    const t = e => e;
    let sFS = [];

    function r(e) {
      return e()
    }

    function o() {
      return Object.create(null)
    }

    function s(e) {
      e.forEach(r)
    }

    function a(e) {
      return "function" == typeof e
    }

    function i(e, t) {
      return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }

    function l(e) {
      return 0 === Object.keys(e).length
    }

    function c(t, ...n) {
      if (null == t) return e;
      const r = t.subscribe(...n);
      return r.unsubscribe ? () => r.unsubscribe() : r
    }

    function d(e) {
      let t;
      return c(e, (e => t = e))(), t
    }

    function u(e, t, n) {
      e.$$.on_destroy.push(c(t, n))
    }

    function f(e, t, n, r) {
      return e[1] && r ? function(e, t) {
        for (const n in t) e[n] = t[n];
        return e
      }(n.ctx.slice(), e[1](r(t))) : n.ctx
    }

    function p(e, t, n) {
      return e.set(n), t
    }

    function h(e) {
      const t = "string" == typeof e && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
      return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
    }
    const g = "undefined" != typeof window;
    let m = g ? () => window.performance.now() : () => Date.now(),
      v = g ? e => requestAnimationFrame(e) : e;
    const b = new Set;

    function y(e) {
      b.forEach((t => {
        t.c(e) || (b.delete(t), t.f())
      })), 0 !== b.size && v(y)
    }
    const w = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;
    class $ {
      constructor(e) {
        this.options = e, this._listeners = "WeakMap" in w ? new WeakMap : void 0
      }
      observe(e, t) {
        return this._listeners.set(e, t), this._getObserver().observe(e, this.options), () => {
          this._listeners.delete(e), this._observer.unobserve(e)
        }
      }
      _getObserver() {
        var e;
        return null !== (e = this._observer) && void 0 !== e ? e : this._observer = new ResizeObserver((e => {
          var t;
          for (const n of e) $.entries.set(n.target, n), null === (t = this._listeners.get(n.target)) || void 0 === t || t(n)
        }))
      }
    }
    $.entries = "WeakMap" in w ? new WeakMap : void 0;
    let x = !1;

    function k(e, t) {
      e.appendChild(t)
    }

    function j(e, t, n) {
      const r = S(e);
      if (!r.getElementById(t)) {
        const e = H("style");
        e.id = t, e.textContent = n, C(r, e)
      }
    }

    function S(e) {
      if (!e) return document;
      const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
      return t && t.host ? t : e.ownerDocument
    }

    function T(e) {
      const t = H("style");
      return C(S(e), t), t.sheet
    }

    function C(e, t) {
      return k(e.head || e, t), t.sheet
    }

    function M(e, t, n) {
      e.insertBefore(t, n || null)
    }

    function E(e) {
      e.parentNode && e.parentNode.removeChild(e)
    }

    function N(e, t) {
      for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function H(e) {
      return document.createElement(e)
    }

    function U(e) {
      return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function A(e) {
      return document.createTextNode(e)
    }

    function D() {
      return A(" ")
    }

    function L() {
      return A("")
    }

    function P(e, t, n, r) {
      return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
    }

    function O(e, t, n) {
      null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function _(e) {
      return "" === e ? null : +e
    }

    function I(e, t) {
      t = "" + t, e.data !== t && (e.data = t)
    }

    function R(e, t) {
      e.value = null == t ? "" : t
    }

    function z(e, t, n, r) {
      null == n ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
    }

    function F(e, t, n) {
      for (let n = 0; n < e.options.length; n += 1) {
        const r = e.options[n];
        if (r.__value === t) return void(r.selected = !0)
      }
      n && void 0 === t || (e.selectedIndex = -1)
    }

    function B(e, t, n) {
      e.classList[n ? "add" : "remove"](t)
    }
    class V {
      constructor(e = !1) {
        this.is_svg = !1, this.is_svg = e, this.e = this.n = null
      }
      c(e) {
        this.h(e)
      }
      m(e, t, n = null) {
        this.e || (this.is_svg ? this.e = U(t.nodeName) : this.e = H(11 === t.nodeType ? "TEMPLATE" : t.nodeName), this.t = "TEMPLATE" !== t.tagName ? t : t.content, this.c(e)), this.i(n)
      }
      h(e) {
        this.e.innerHTML = e, this.n = Array.from("TEMPLATE" === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes)
      }
      i(e) {
        for (let t = 0; t < this.n.length; t += 1) M(this.t, this.n[t], e)
      }
      p(e) {
        this.d(), this.h(e), this.i(this.a)
      }
      d() {
        this.n.forEach(E)
      }
    }
    const q = new Map;
    let W, J = 0;

    function X(e, t, n, r, o, s, a, i = 0) {
      const l = 16.666 / r;
      let c = "{\n";
      for (let e = 0; e <= 1; e += l) {
        const r = t + (n - t) * s(e);
        c += 100 * e + `%{${a(r,1-r)}}\n`
      }
      const d = c + `100% {${a(n,1-n)}}\n}`,
        u = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${i}`,
        f = S(e),
        {
          stylesheet: p,
          rules: h
        } = q.get(f) || function(e, t) {
          const n = {
            stylesheet: T(t),
            rules: {}
          };
          return q.set(e, n), n
        }(f, e);
      h[u] || (h[u] = !0, p.insertRule(`@keyframes ${u} ${d}`, p.cssRules.length));
      const g = e.style.animation || "";
      return e.style.animation = `${g?`${g}, `:""}${u} ${r}ms linear ${o}ms 1 both`, J += 1, u
    }

    function G(e) {
      W = e
    }

    function Y() {
      if (!W) throw new Error("Function called outside component initialization");
      return W
    }
    const Z = [],
      Q = [];
    let K = [];
    const ee = [],
      te = Promise.resolve();
    let ne = !1;

    function re(e) {
      K.push(e)
    }

    function oe(e) {
      ee.push(e)
    }
    const se = new Set;
    let ae, ie = 0;

    function le() {
      if (0 !== ie) return;
      const e = W;
      do {
        try {
          for (; ie < Z.length;) {
            const e = Z[ie];
            ie++, G(e), ce(e.$$)
          }
        } catch (e) {
          throw Z.length = 0, ie = 0, e
        }
        for (G(null), Z.length = 0, ie = 0; Q.length;) Q.pop()();
        for (let e = 0; e < K.length; e += 1) {
          const t = K[e];
          se.has(t) || (se.add(t), t())
        }
        K.length = 0
      } while (Z.length);
      for (; ee.length;) ee.pop()();
      ne = !1, se.clear(), G(e)
    }

    function ce(e) {
      if (null !== e.fragment) {
        e.update(), s(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(re)
      }
    }

    function de(e, t, n) {
      e.dispatchEvent(function(e, t, {
        bubbles: n = !1,
        cancelable: r = !1
      } = {}) {
        const o = document.createEvent("CustomEvent");
        return o.initCustomEvent(e, n, r, t), o
      }(`${t?"intro":"outro"}${n}`))
    }
    const ue = new Set;
    let fe;

    function pe() {
      fe = {
        r: 0,
        c: [],
        p: fe
      }
    }

    function he() {
      fe.r || s(fe.c), fe = fe.p
    }

    function ge(e, t) {
      e && e.i && (ue.delete(e), e.i(t))
    }

    function me(e, t, n, r) {
      if (e && e.o) {
        if (ue.has(e)) return;
        ue.add(e), fe.c.push((() => {
          ue.delete(e), r && (n && e.d(1), r())
        })), e.o(t)
      } else r && r()
    }
    const ve = {
      duration: 0
    };

    function be(n, r, o, i) {
      const l = {
        direction: "both"
      };
      let c = r(n, o, l),
        d = i ? 0 : 1,
        u = null,
        f = null,
        p = null;

      function h() {
        p && function(e, t) {
          const n = (e.style.animation || "").split(", "),
            r = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
            o = n.length - r.length;
          o && (e.style.animation = r.join(", "), J -= o, J || v((() => {
            J || (q.forEach((e => {
              const {
                ownerNode: t
              } = e.stylesheet;
              t && E(t)
            })), q.clear())
          })))
        }(n, p)
      }

      function g(e, t) {
        const n = e.b - d;
        return t *= Math.abs(n), {
          a: d,
          b: e.b,
          d: n,
          duration: t,
          start: e.start,
          end: e.start + t,
          group: e.group
        }
      }

      function w(r) {
        const {
          delay: o = 0,
          duration: a = 300,
          easing: i = t,
          tick: l = e,
          css: w
        } = c || ve, $ = {
          start: m() + o,
          b: r
        };
        r || ($.group = fe, fe.r += 1), u || f ? f = $ : (w && (h(), p = X(n, d, r, a, o, i, w)), r && l(0, 1), u = g($, a), re((() => de(n, r, "start"))), function(e) {
          let t;
          0 === b.size && v(y), new Promise((n => {
            b.add(t = {
              c: e,
              f: n
            })
          }))
        }((e => {
          if (f && e > f.start && (u = g(f, a), f = null, de(n, u.b, "start"), w && (h(), p = X(n, d, u.b, u.duration, 0, i, c.css))), u)
            if (e >= u.end) l(d = u.b, 1 - d), de(n, u.b, "end"), f || (u.b ? h() : --u.group.r || s(u.group.c)), u = null;
            else if (e >= u.start) {
            const t = e - u.start;
            d = u.a + u.d * i(t / u.duration), l(d, 1 - d)
          }
          return !(!u && !f)
        })))
      }
      return {
        run(e) {
          a(c) ? (ae || (ae = Promise.resolve(), ae.then((() => {
            ae = null
          }))), ae).then((() => {
            c = c(l), w(e)
          })) : w(e)
        },
        end() {
          h(), u = f = null
        }
      }
    }
    let ye;

    function we(e, t, n) {
      const r = e.$$.props[t];
      void 0 !== r && (e.$$.bound[r] = n, n(e.$$.ctx[r]))
    }

    function $e(e) {
      e && e.c()
    }

    function xe(e, t, n, o) {
      const {
        fragment: i,
        after_update: l
      } = e.$$;
      i && i.m(t, n), o || re((() => {
        const t = e.$$.on_mount.map(r).filter(a);
        e.$$.on_destroy ? e.$$.on_destroy.push(...t) : s(t), e.$$.on_mount = []
      })), l.forEach(re)
    }

    function ke(e, t) {
      const n = e.$$;
      null !== n.fragment && (function(e) {
        const t = [],
          n = [];
        K.forEach((r => -1 === e.indexOf(r) ? t.push(r) : n.push(r))), n.forEach((e => e())), K = t
      }(n.after_update), s(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function je(t, n, r, a, i, l, c, d = [-1]) {
      const u = W;
      G(t);
      const f = t.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: e,
        not_equal: i,
        bound: o(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(n.context || (u ? u.$$.context : [])),
        callbacks: o(),
        dirty: d,
        skip_bound: !1,
        root: n.target || u.$$.root
      };
      c && c(f.root);
      let p = !1;
      if (f.ctx = r ? r(t, n.props || {}, ((e, n, ...r) => {
          const o = r.length ? r[0] : n;
          return f.ctx && i(f.ctx[e], f.ctx[e] = o) && (!f.skip_bound && f.bound[e] && f.bound[e](o), p && function(e, t) {
            -1 === e.$$.dirty[0] && (Z.push(e), ne || (ne = !0, te.then(le)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
          }(t, e)), n
        })) : [], f.update(), p = !0, s(f.before_update), f.fragment = !!a && a(f.ctx), n.target) {
        if (n.hydrate) {
          x = !0;
          const e = (h = n.target, Array.from(h.childNodes));
          f.fragment && f.fragment.l(e), e.forEach(E)
        } else f.fragment && f.fragment.c();
        n.intro && ge(t.$$.fragment), xe(t, n.target, n.anchor, n.customElement), x = !1, le()
      }
      var h;
      G(u)
    }
    new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]), "function" == typeof HTMLElement && (ye = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({
          mode: "open"
        })
      }
      connectedCallback() {
        const {
          on_mount: e
        } = this.$$;
        this.$$.on_disconnect = e.map(r).filter(a);
        for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
      }
      attributeChangedCallback(e, t, n) {
        this[e] = n
      }
      disconnectedCallback() {
        s(this.$$.on_disconnect)
      }
      $destroy() {
        ke(this, 1), this.$destroy = e
      }
      $on(t, n) {
        if (!a(n)) return e;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n), () => {
          const e = r.indexOf(n); - 1 !== e && r.splice(e, 1)
        }
      }
      $set(e) {
        this.$$set && !l(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
      }
    });
    class Se {
      $destroy() {
        ke(this, 1), this.$destroy = e
      }
      $on(t, n) {
        if (!a(n)) return e;
        const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return r.push(n), () => {
          const e = r.indexOf(n); - 1 !== e && r.splice(e, 1)
        }
      }
      $set(e) {
        this.$$set && !l(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
      }
    }
    const Te = [];

    function Ce(t, n = e) {
      let r;
      const o = new Set;

      function s(e) {
        if (i(t, e) && (t = e, r)) {
          const e = !Te.length;
          for (const e of o) e[1](), Te.push(e, t);
          if (e) {
            for (let e = 0; e < Te.length; e += 2) Te[e][0](Te[e + 1]);
            Te.length = 0
          }
        }
      }
      return {
        set: s,
        update: function(e) {
          s(e(t))
        },
        subscribe: function(a, i = e) {
          const l = [a, i];
          return o.add(l), 1 === o.size && (r = n(s) || e), a(t), () => {
            o.delete(l), 0 === o.size && r && (r(), r = null)
          }
        }
      }
    }

    function Me(t, n, r) {
      const o = !Array.isArray(t),
        i = o ? [t] : t,
        l = n.length < 2;
      return {
        subscribe: Ce(r, (t => {
          let r = !1;
          const d = [];
          let u = 0,
            f = e;
          const p = () => {
              if (u) return;
              f();
              const r = n(o ? d[0] : d, t);
              l ? t(r) : f = a(r) ? r : e
            },
            h = i.map(((e, t) => c(e, (e => {
              d[t] = e, u &= ~(1 << t), r && p()
            }), (() => {
              u |= 1 << t
            }))));
          return r = !0, p(),
            function() {
              s(h), f(), r = !1
            }
        })).subscribe
      }
    }
    var Ee;

    function Ne(e, t, n, r = (() => {})) {
      let o = localStorage.getItem(e);
      null !== o && n.includes(o) || (o = t, localStorage.setItem(e, o));
      const {
        subscribe: s,
        set: a,
        update: i
      } = Ce(o);
      return {
        subscribe: s,
        set(t) {
          a(t), localStorage.setItem(e, t), r(t)
        },
        update: i,
        reset() {
          this.set(t)
        },
        accepts: n
      }
    }

    function He(e, t, n, r, o = (() => {})) {
      let s = localStorage.getItem(e),
        a = parseFloat(s ?? "NaN");
      (null === s || a > r || a < n) && (a = t, localStorage.setItem(e, a.toString()));
      const {
        subscribe: i,
        set: l,
        update: c
      } = Ce(a);
      return {
        subscribe: i,
        set(t) {
          l(t), localStorage.setItem(e, t.toString()), o(t)
        },
        update: c,
        reset() {
          this.set(t)
        }
      }
    }

    function Ue(e, t, n = (() => {})) {
      let r = localStorage.getItem(e);
      null === r && (r = JSON.stringify(t), localStorage.setItem(e, r));
      let o = JSON.parse(r),
        s = Object.keys(t);
      Object.keys(o).every((e => s.includes(e) && "boolean" == typeof o[e])) || (r = JSON.stringify(t), localStorage.setItem(e, r), o = JSON.parse(r));
      const {
        subscribe: a,
        set: i,
        update: l
      } = Ce(o);
      return {
        subscribe: a,
        set(t) {
          i(t), localStorage.setItem(e, JSON.stringify(t)), n(t)
        },
        update: l,
        reset() {
          this.set(t)
        }
      }
    }! function(e) {
      e.en_US = "en_US", e.zh_TW = "zh_TW"
    }(Ee || (Ee = {}));
    const Ae = Ne("theme", "dark", ["dark", "purple", "black"]),
      De = Ne("language", function() {
        const e = new URLSearchParams(location.search);
        if (e.get("lang")) return e.get("lang").startsWith("zh") ? Ee.zh_TW : Ee.en_US;
        return function() {
          switch (localStorage.getItem("language")) {
            case Ee.en_US:
              return Ee.en_US;
            case Ee.zh_TW:
              return Ee.zh_TW
          }
          return null
        }() || (navigator.language.startsWith("zh") ? Ee.zh_TW : Ee.en_US)
      }(), Object.values(Ee)),
      Le = "https://chunithm-net-eng.com";
    var Pe;
    ! function(e) {
      e.basic = "BAS", e.advanced = "ADV", e.expert = "EXP", e.master = "MAS", e.ultima = "ULT"
    }(Pe || (Pe = {}));
    const Oe = Object.values(Pe);
    var _e;
    ! function(e) {
      e["P & A"] = "0", e.niconico = "2", e["東方Project"] = "3", e.ORIGINAL = "5", e.VARIETY = "6", e["イロドリ"] = "7", e["ゲキマイ"] = "9"
    }(_e || (_e = {}));
    const Ie = Object.keys(_e);
    var _s;
    ! function(e) {
      e["ORI"] = "1", e["ORI+"] = "2", e["AIR"] = "3", e["AIR+"] = "4", e["STR"] = "5", e["STR+"] = "6", e["AMZ"] = "7", e["AMZ+"] = "8",
      e["CRS"] = "9", e["CRS+"] = "10", e["PAR"] = "11", e["PAR×"] = "12", e["NEW"] = "13", e["NEW+"] = "14", e["SUN"] = "15", e["SUN+"] = "16",
      e["LMN"] = "17", e["LMN+"] = "18", e["VRS"] = "19", e["X-VR"] = "20"
    }(_s || (_s = {}));
    const Rl = Object.keys(_s);
    var _k;
    ! function(e) {
      e["D~S"] = ["S", "AAA", "AA", "A", "BBB", "BB", "B", "C", "D"], e["S+"] = "S+", e["SS"] = "SS", e["SS+"] = "SS+", e["SSS"] = "SSS", e["SSS+"] = "SSS+", e["MAX"] = "MAX"
    }(_k || (_k = {}));
    const Rk = Object.keys(_k);

    function Re(e, t) {
      if (!e) throw new Error("Target window does not exist");
      return (n, r, o) => {
        const s = {
          action: n,
          payload: r
        };
        o && (s.uuid = o), e.postMessage(s, t)
      }
    }
    const ze = [
      [101e4, "MAX"],
      [1009e3, "SSS+"],
      [1007500, "SSS"],
      [1005e3, "SS+"],
      [1e6, "SS"],
      [99e4, "S+"],
      [975e3, "S"],
      [95e4, "AAA"],
      [925e3, "AA"],
      [9e5, "A"],
      [8e5, "BBB"],
      [7e5, "BB"],
      [6e5, "B"],
      [5e5, "C"],
      [0, "D"]
    ];

    function Fe(e) {
      let t = 0;
      return ze.some(((n, r) => (t = r, e >= n[0]))), ze[t][1]
    }
    const Be = [{
      score: 1009e3,
      base: 21500,
      ratio: 0
    }, {
      score: 1007500,
      base: 2e4,
      ratio: 1
    }, {
      score: 1005e3,
      base: 15e3,
      ratio: 2
    }, {
      score: 1e6,
      base: 1e4,
      ratio: 1
    }, {
      score: 975e3,
      base: 0,
      ratio: .4
    }, {
      score: 9e5,
      base: -5e4,
      ratio: 2 / 3
    }];

    function Ve(e) {
      return 5 * (e.const+3) * 1e4
    }

    function qe(e, t) {
      return e.slice(0, t).reduce(((e, t) => e + t), 0) / t
    }

    function We(e) {
      return (e.slice(0, 30).reduce(((e, t) => e + t), 0) + 10 * e[0]) / 40
    }
    const Je = {
      default: (e, t) => e.score < 0 ? 1 : t.score < 0 ? -1 : t.rating - e.rating || t.const-e.const || e.score - t.score,
      playOrder: (e, t) => t.timestamp - e.timestamp,
      title: (e, t) => e.title < t.title ? -1 : e.title > t.title ? 1 : Oe.indexOf(t.difficulty) - Oe.indexOf(e.difficulty),
      const: (e, t) => t.const-e.const || e.order - t.order,
      op: (e, t) => t.op - e.op || e.order - t.order,
      opp: (e, t) => t.op / t.opMax - e.op / e.opMax || e.order - t.order,
      score: (e, t) => t.score - e.score || e.order - t.order,
      scoreDiff: (e, t) => t.scoreDiff - e.scoreDiff || e.order - t.order,
      rating: (e, t) => e.order - t.order,
      aj: (e, t) => {
        if (e.clear == t.clear) return e.order - t.order;
        const n = ["", "FC", "AJ"];
        return n.indexOf(t.clear) - n.indexOf(e.clear)
      },
      clr: (e, t) => {
        if (e.clear2 == t.clear2) return e.order - t.order;
        const nn = ["", "CLR", "HRD", "BRV", "ABS", "CTS"];
        return nn.indexOf(t.clear2) - nn.indexOf(e.clear2)
      },
      playcount: (e, t) => null == e.playCount ? 100 : null == t.playCount ? -100 : e.playCount == t.playCount ? e.order - t.order : t.playCount - e.playCount,
      worldrank: (e, t) => (e.worldRank === "-" ? 9999999 : e.worldRank) === (t.worldRank === "-" ? 9999999 : t.worldRank) ? e.order - t.order : (e.worldRank === "-" ? 9999999 : e.worldRank) - (t.worldRank === "-" ? 9999999 : t.worldRank)
    };

    function Xe(e) {
      return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    }

    function Ge(e, t, n) {
      const r = e, o = t, s = [];  
      r.map(e => {
          let songData = t.songs ? t.songs.find(song => song.title === e.title) : t[e.title];
          if (songData && songData.newV !== undefined) {
              e.newV = songData.newV;
          } else {
              e.newV = 0;
          }
          if ("WE" === e.difficulty) {
              e.title = Xe(e.title);
              e.const = -1;
              e.rating = 0;
              e.op = -1;
              e.opMax = -1;
              e.opPercent = -1;
              e.rank = Fe(e.score);
              return;
          }
          if (o[e.title] === undefined) {
              e.title = Xe(e.title);
          }
          songData = o[e.title]; 
          if (songData === undefined) {
              s.push(e);
              e.const = -1;
              e.rating = 0;
          } else {
              e.const = songData[e.difficulty];
              if (songData.uncertain?.includes(e.difficulty)) {
                  e.constUncertain = true;
              }
              e.rawRating = function(e) {
                  let rating, baseConst = Math.floor(1e4 * e.const);
                  if (e.score >= 9e5) {
                      let scoreData = Be.find(data => e.score >= data.score);
                      return Math.max(0, baseConst + scoreData.base + scoreData.ratio * (e.score - scoreData.score));
                  }
                  if (e.score >= 8e5) {
                      rating = (baseConst - 5e4) / 2 + (baseConst - 5e4) / 2 * (e.score - 8e5) / 1e5;
                  } else {
                      if (!(e.score >= 5e5)) return 0;
                      rating = (baseConst - 5e4) / 2 * (e.score - 5e5) / 3e5;
                  }
                  return Math.max(0, rating);
              }(e);
              e.genre = `${songData.genre}`;
              e.release = `${songData.release}`;
              e.rating = Math.floor(e.rawRating / 100);
          }
          e.op = function(e) {
              if (e.score >= 101e4) return Ve(e);
  
              let bonus = { AJ: 2000, FC: 1000, "": 0 }[e.clear],
                  baseConst = Math.floor(1e4 * e.const),
                  opRating = e.score < 1007500 
                      ? e.rawRating 
                      : baseConst + 20000 + 3 * (e.score - 1007500);
              opRating = e.score >= 975e3 
                  ? 10 * Math.floor(opRating / 10) 
                  : 100 * Math.floor(opRating / 100);
              return 5 * (opRating + bonus);
          }(e);
          e.opMax = Ve(e);
          e.opPercent = (100 * e.op) / e.opMax;
          e.rank = Fe(e.score);
      });
      const titleMap = new Map();
      r.forEach(song => {
          if (!titleMap.has(song.title)) {
              titleMap.set(song.title, { maxOp: song.op, maxOpMax: song.opMax });
          } else {
              const current = titleMap.get(song.title);
              titleMap.set(song.title, {
                  maxOp: Math.max(current.maxOp, song.op),
                  maxOpMax: Math.max(current.maxOpMax, song.opMax)
              });
          }
      });
      r.forEach(song => {
          const { maxOp, maxOpMax } = titleMap.get(song.title);
          if (song.op === maxOp) {
              song.dg = 1;
          } else if (song.opMax === maxOpMax) {
              song.dg = 2;
          } else {
              song.dg = 0;
          }
      });
      if (n && s.length) {
          const e = {};
          s.forEach((t => {
              var n;
              e[n = t.title] ?? (e[n] = []), e[t.title].push(t.difficulty);
          }));
          alert(n.replace("{{songs}}", Object.entries(e)
              .map(([e, t]) => `    ${e} ${t.join(",")}`)
              .join("\n"))
          );
      }
      r.sort(Je.default);
      r.map((e, index) => {
          e.order = index + 1;
      });
      return r;
    }
  
    c(De, (() => {
      try {
        Re(window.opener, Le)("saveConfig", {
          data: {
            lang: d(De)
          }
        })
      } catch (e) {
        console.error(e)
      }
    }));
    const Ye = He("filterConstMin", 1, 1, 15.7),
      Ze = He("filterConstMax", 15.7, 1, 15.7),
      Qe = Ue("filterDiff", {
        BAS: !0,
        ADV: !0,
        EXP: !0,
        MAS: !0,
        ULT: !0
      }, (() => {
        At.updateDiffFilter()
      }));
    let Ke = {};
    for (let e of Ie) Ke[e] = !0;
    let Kee = {};
    for (let e of Rl) Kee[e] = !0;
    let Keee = {};
    for (let e of Rk) Keee[e] = !0;
    const et = Ue("filterGenre", Ke), eet = Ue("filterRelease", Kee), eeet = Ue("filterRank", Keee),
      tt = Ne("usedConstData", "verse", ["verse","crossverse"], (() => {
        At.updateConstData(), Ht.updateConstData()
      })),
      nt = Ne("showOverPower", "hide", ["hide", "clr", "value", "percentage", "dgvalue", "dgpercentage", "eudgvalue", "eudgpercentage"]),
      rt = function(e, t, n = (() => {})) {
        let r = localStorage.getItem(e);
        (null === r || "true" !== r && "false" !== r) && (r = JSON.stringify(t), localStorage.setItem(e, r));
        let o = JSON.parse(r);
        const {
          subscribe: s,
          set: a,
          update: i
        } = Ce(o);
        return {
          subscribe: s,
          set(t) {
            a(t), localStorage.setItem(e, JSON.stringify(t)), n(t)
          },
          update: i,
          reset() {
            this.set(t)
          },
          toggle() {
            this.update((e => !e))
          }
        }
      }("showPlaycount", !1),
      ot = {
        "1d": 864e5,
        "3d": 2592e5,
        "7d": 6048e5,
        "14d": 12096e5,
        "30d": 2592e6,
        manual: Number.POSITIVE_INFINITY
      },
      st = Ne("diffUpdateInterval", "manual", Object.keys(ot)),
      at = [Ae, De, Ze, Ye, Qe, et, eet, eeet, tt, nt, rt],
      it = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
    let lt;
    const ct = new Uint8Array(16);

    function dt() {
      if (!lt && (lt = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !lt)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return lt(ct)
    }
    const ut = [];
    for (let e = 0; e < 256; ++e) ut.push((e + 256).toString(16).slice(1));
    const ft = function(e, t, n) {
      if (it.randomUUID && !t && !e) return it.randomUUID();
      const r = (e = e || {}).random || (e.rng || dt)();
      if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = r[e];
        return t
      }
      return function(e, t = 0) {
        return ut[e[t + 0]] + ut[e[t + 1]] + ut[e[t + 2]] + ut[e[t + 3]] + "-" + ut[e[t + 4]] + ut[e[t + 5]] + "-" + ut[e[t + 6]] + ut[e[t + 7]] + "-" + ut[e[t + 8]] + ut[e[t + 9]] + "-" + ut[e[t + 10]] + ut[e[t + 11]] + ut[e[t + 12]] + ut[e[t + 13]] + ut[e[t + 14]] + ut[e[t + 15]]
      }(r)
    };
    class pt {
      constructor(e) {
        this.resolve = () => {}, this.reject = () => {}, this.handled = !1, this.retryTime = 0, this.uuid = ft(), this.payload = e;
        let t = this;
        this.promise = new Promise(((e, n) => {
          t.resolve = e, t.reject = n
        }));
        try {
          const t = Re(window.opener, Le),
            n = () => {
              this.handled || (this.retryTime < 3 ? (this.retryTime += 1, t("request", e), this.timeout = setTimeout(n, 2e3)) : this.reject(new Error("Request timed out: 6000 ms")))
            };
          this.timeout = setTimeout(n, 2e3), t("request", e, this.uuid)
        } catch (e) {
          this.reject(e)
        }
      }
    }
    const ht = new Map;
    async function gt(e, t, n) {
      const r = new pt({
        target: e,
        data: {
          difficulty: t,
          idx: n
        }
      });
      return ht.set(r.uuid, r), r.promise
    }

    function mt(e) {
      const t = JSON.parse(localStorage.getItem("prevPlayRecord") ?? "{}");
      return e.forEach((e => {
        void 0 === e.scoreDiff && (void 0 !== t[e.idx]?.[e.difficulty] ? e.scoreDiff = e.score - t[e.idx][e.difficulty] : e.scoreDiff = e.score)
      })), e
    }

    function vt(e = !1) {
      const {
        subscribe: t,
        set: n,
        update: r
      } = Ce(e);
      return {
        subscribe: t,
        set: n,
        update: r,
        toggle() {
          r((e => !e))
        }
      }
    }
    window.addEventListener("message", (function(e) {
      const {
        action: t,
        payload: n,
        uuid: r
      } = e.data;
      "ping" === t && (ht.has(r) || console.error("Unexpected response: " + r), ht.get(r).handled = !0, clearTimeout(ht.get(r)?.timeout)), "respond" === t && (ht.has(r) || console.error("Unexpected response: " + r), n.error ? (console.error("Error on handling request: " + n.target + "\n", n.error), ht.get(r)?.reject(n.error)) : ht.get(r)?.resolve(n.data), ht.delete(r))
    }), !1);
    const bt = new Map,
      yt = new Map;
    for (let e of De.accepts) {
      const t = Object.entries(n(283)(`./${e}.json`)),
        r = Object.entries(n(692)(`./${e}.json`));
      bt.set(e, new Map(t.concat(r))), yt.set(e, bt.get(e)?.get("locale.name") || "Undefined locale name")
    }
    const wt = function(e, t) {
        return Me(t, (t => (n, r = {}) => function(t, n, r) {
          if (!n) throw new Error("No key specified");
          let o = e.get(t)?.get(n);
          return void 0 === o ? (console.error(`No translation found for ${t}.${n}`), n) : (Object.keys(r).map((e => {
            const t = new RegExp(`{{${e}}}`, "g");
            o = o?.replace(t, r[e])
          })), o)
        }(t, n, r)))
      }(bt, De),
      $t = Ce("all"),
      xt = vt(!1),
      kt = Ce(""),
      jt = vt(!1),
      St = vt(!1),
      Tt = vt(!1),
      Ct = {};
    for (let e of tt.accepts) Ct[e] = void 0;
    const Mt = Me(tt, (async e => (Ct[e] || (Ct[e] = await fetch(`../data/song-const/${e}.json?t=${Date.now()}`).then((async e => await e.json()))), Ct[e])));

    function Et(e) {
      const {
        subscribe: t,
        set: n
      } = Ce([]);
      let r = !1,
        o = [];
      return {
        set: n,
        subscribe: t,
        async init() {
          o = await gt(e), n(Ge(o, await d(Mt))), r = !0
        },
        async updateConstData() {
          r && n(Ge(o, await d(Mt)))
        }
      }
    }
    const Ht = Et("playHistory"),
      Ut = (() => {
        const {
          subscribe: e,
          set: t
        } = Ce({});
        let n = !1;
        return {
          set: t,
          subscribe: e,
          async init() {
            n || (t(await gt("playerStats")), n = !0)
          }
        }
      })(),
      At = (() => {
        const {
          subscribe: e,
          set: t
        } = Ce([]);
        let n = !1,
          r = {},
          o = [];
        return {
          set: t,
          subscribe: e,
          async init() {
            const e = Date.now(),
              s = Number(localStorage.getItem("prevUpdateTime") ?? Number.NEGATIVE_INFINITY),
              a = s == Number.NEGATIVE_INFINITY || e - s > ot[d(st)];
            if (n) return;
            const i = JSON.parse(JSON.stringify(d(Qe)));
            for (let e of Oe)(a || i[e]) && (kt.set(d(wt)("record.fetch.fetching", {
              diff: e.toLowerCase(),
              diffStr: d(wt)("record.fetch.diff." + e.toLowerCase())
            })), Array.prototype.push.apply(o, await gt("allRecord", e)), r[e] = !0);
            const l = Ge(o, await d(Mt), d(wt)("record.fetch.unknown"));
            a && function(e) {
              const t = {};
              e.forEach((e => {
                var n;
                e.score < 0 || (t[n = e.idx] ?? (t[n] = {}), t[e.idx][e.difficulty] = e.score)
              })), localStorage.setItem("prevPlayRecord", JSON.stringify(t)), localStorage.setItem("prevUpdateTime", Date.now().toString()), console.log("Saved record history at " + localStorage.getItem("prevUpdateTime"))
            }(l), mt(l), t(l), n = !0
          },
          async updateConstData() {
            n && t(Ge(o, await d(Mt), d(wt)("record.fetch.unknown")))
          },
          async updateDiffFilter() {
            if (!n) return;
            St.set(!0), jt.set(!0);
            let e = !1;
            try {
              for (let t of Oe) !r[t] && d(Qe)[t] && (r[t] = !0, kt.set(d(wt)("record.fetch.fetching", {
                diff: t.toLowerCase(),
                diffStr: d(wt)("record.fetch.diff." + t.toLowerCase())
              })), Array.prototype.push.apply(o, await gt("allRecord", t)), e = !0);
              if (e) {
                const e = Ge(o, await d(Mt), d(wt)("record.fetch.unknown"));
                t(e), mt(e)
              }
              jt.set(!1), St.set(!1)
            } catch {
              St.set(!1), kt.set(d(wt)("record.fetch.error")), setTimeout((() => {
                jt.set(!1)
              }), 6e3)
            }
          }
        }
      })(),
      Dt = (() => {
        let e = 0;
        return () => (e += 1, `u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${e}`)
      })();

    function Lt(e) {
      const t = [];
      for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
      return t
    }

    function Pt(e, t) {
      const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
      return n ? parseFloat(n.replace("px", "")) : 0
    }

    function Ot(e, t = {}) {
      return {
        width: t.width || function(e) {
          const t = Pt(e, "border-left-width"),
            n = Pt(e, "border-right-width");
          return e.clientWidth + t + n
        }(e),
        height: t.height || function(e) {
          const t = Pt(e, "border-top-width"),
            n = Pt(e, "border-bottom-width");
          return e.clientHeight + t + n
        }(e)
      }
    }
    const _t = 16384;

    function It(e) {
      return new Promise(((t, n) => {
        const r = new Image;
        r.decode = () => t(r), r.onload = () => t(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e
      }))
    }
    const Rt = (e, t) => {
      if (e instanceof t) return !0;
      const n = Object.getPrototypeOf(e);
      return null !== n && (n.constructor.name === t.name || Rt(n, t))
    };

    function zt(e, t, n) {
      const r = window.getComputedStyle(e, n),
        o = r.getPropertyValue("content");
      if ("" === o || "none" === o) return;
      const s = Dt();
      try {
        t.className = `${t.className} ${s}`
      } catch (e) {
        return
      }
      const a = document.createElement("style");
      a.appendChild(function(e, t, n) {
        const r = `.${e}:${t}`,
          o = n.cssText ? function(e) {
            const t = e.getPropertyValue("content");
            return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
          }(n) : function(e) {
            return Lt(e).map((t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")
          }(n);
        return document.createTextNode(`${r}{${o}}`)
      }(s, n, r)), t.appendChild(a)
    }
    const Ft = "application/font-woff",
      Bt = "image/jpeg",
      Vt = {
        woff: Ft,
        woff2: Ft,
        ttf: "application/font-truetype",
        eot: "application/vnd.ms-fontobject",
        png: "image/png",
        jpg: Bt,
        jpeg: Bt,
        gif: "image/gif",
        tiff: "image/tiff",
        svg: "image/svg+xml",
        webp: "image/webp"
      };

    function qt(e) {
      const t = function(e) {
        const t = /\.([^./]*?)$/g.exec(e);
        return t ? t[1] : ""
      }(e).toLowerCase();
      return Vt[t] || ""
    }

    function Wt(e) {
      return -1 !== e.search(/^(data:)/)
    }

    function Jt(e, t) {
      return `data:${t};base64,${e}`
    }
    async function Xt(e, t, n) {
      const r = await fetch(e, t);
      if (404 === r.status) throw new Error(`Resource "${r.url}" not found`);
      const o = await r.blob();
      return new Promise(((e, t) => {
        const s = new FileReader;
        s.onerror = t, s.onloadend = () => {
          try {
            e(n({
              res: r,
              result: s.result
            }))
          } catch (e) {
            t(e)
          }
        }, s.readAsDataURL(o)
      }))
    }
    const Gt = {};
    async function Yt(e, t, n) {
      const r = function(e, t, n) {
        let r = e.replace(/\?.*/, "");
        return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r
      }(e, t, n.includeQueryParams);
      if (null != Gt[r]) return Gt[r];
      let o;
      n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
      try {
        const r = await Xt(e, n.fetchRequestInit, (({
          res: e,
          result: n
        }) => (t || (t = e.headers.get("Content-Type") || ""), function(e) {
          return e.split(/,/)[1]
        }(n))));
        o = Jt(r, t)
      } catch (t) {
        o = n.imagePlaceholder || "";
        let r = `Failed to fetch resource: ${e}`;
        t && (r = "string" == typeof t ? t : t.message), r && console.warn(r)
      }
      return Gt[r] = o, o
    }
    const Zt = e => null != e.tagName && "SLOT" === e.tagName.toUpperCase();
    async function Qt(e, t, n) {
      return n || !t.filter || t.filter(e) ? Promise.resolve(e).then((e => async function(e, t) {
        return Rt(e, HTMLCanvasElement) ? async function(e) {
          const t = e.toDataURL();
          return "data:," === t ? e.cloneNode(!1) : It(t)
        }(e): Rt(e, HTMLVideoElement) ? async function(e, t) {
          if (e.currentSrc) {
            const t = document.createElement("canvas"),
              n = t.getContext("2d");
            return t.width = e.clientWidth, t.height = e.clientHeight, null == n || n.drawImage(e, 0, 0, t.width, t.height), It(t.toDataURL())
          }
          const n = e.poster,
            r = qt(n);
          return It(await Yt(n, r, t))
        }(e, t): Rt(e, HTMLIFrameElement) ? async function(e) {
          var t;
          try {
            if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body) return await Qt(e.contentDocument.body, {}, !0)
          } catch (e) {}
          return e.cloneNode(!1)
        }(e): e.cloneNode(!1)
      }(e, t))).then((n => async function(e, t, n) {
        var r, o;
        let s = [];
        return s = Zt(e) && e.assignedNodes ? Lt(e.assignedNodes()) : Rt(e, HTMLIFrameElement) && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body) ? Lt(e.contentDocument.body.childNodes) : Lt((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes), 0 === s.length || Rt(e, HTMLVideoElement) || await s.reduce(((e, r) => e.then((() => Qt(r, n))).then((e => {
          e && t.appendChild(e)
        }))), Promise.resolve()), t
      }(e, n, t))).then((t => function(e, t) {
        return Rt(t, Element) && (function(e, t) {
          const n = t.style;
          if (!n) return;
          const r = window.getComputedStyle(e);
          r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Lt(r).forEach((o => {
            let s = r.getPropertyValue(o);
            if ("font-size" === o && s.endsWith("px")) {
              const e = Math.floor(parseFloat(s.substring(0, s.length - 2))) - .1;
              s = `${e}px`
            }
            Rt(e, HTMLIFrameElement) && "display" === o && "inline" === s && (s = "block"), "d" === o && t.getAttribute("d") && (s = `path(${t.getAttribute("d")})`), n.setProperty(o, s, r.getPropertyPriority(o))
          }))
        }(e, t), function(e, t) {
          zt(e, t, ":before"), zt(e, t, ":after")
        }(e, t), function(e, t) {
          Rt(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Rt(e, HTMLInputElement) && t.setAttribute("value", e.value)
        }(e, t), function(e, t) {
          if (Rt(e, HTMLSelectElement)) {
            const n = t,
              r = Array.from(n.children).find((t => e.value === t.getAttribute("value")));
            r && r.setAttribute("selected", "")
          }
        }(e, t)), t
      }(e, t))).then((e => async function(e, t) {
        const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
        if (0 === n.length) return e;
        const r = {};
        for (let o = 0; o < n.length; o++) {
          const s = n[o].getAttribute("xlink:href");
          if (s) {
            const n = e.querySelector(s),
              o = document.querySelector(s);
            n || !o || r[s] || (r[s] = await Qt(o, t, !0))
          }
        }
        const o = Object.values(r);
        if (o.length) {
          const t = "http://www.w3.org/1999/xhtml",
            n = document.createElementNS(t, "svg");
          n.setAttribute("xmlns", t), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.overflow = "hidden", n.style.display = "none";
          const r = document.createElementNS(t, "defs");
          n.appendChild(r);
          for (let e = 0; e < o.length; e++) r.appendChild(o[e]);
          e.appendChild(n)
        }
        return e
      }(e, t))) : null
    }
    const Kt = /url\((['"]?)([^'"]+?)\1\)/g,
      en = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
      tn = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

    function nn(e) {
      return -1 !== e.search(Kt)
    }
    async function rn(e, t, n) {
      if (!nn(e)) return e;
      const r = function(e, {
          preferredFontFormat: t
        }) {
          return t ? e.replace(tn, (e => {
            for (;;) {
              const [n, , r] = en.exec(e) || [];
              if (!r) return "";
              if (r === t) return `src: ${n};`
            }
          })) : e
        }(e, n),
        o = function(e) {
          const t = [];
          return e.replace(Kt, ((e, n, r) => (t.push(r), e))), t.filter((e => !Wt(e)))
        }(r);
      return o.reduce(((e, r) => e.then((e => async function(e, t, n, r, o) {
        try {
          const s = n ? function(e, t) {
              if (e.match(/^[a-z]+:\/\//i)) return e;
              if (e.match(/^\/\//)) return window.location.protocol + e;
              if (e.match(/^[a-z]+:/i)) return e;
              const n = document.implementation.createHTMLDocument(),
                r = n.createElement("base"),
                o = n.createElement("a");
              return n.head.appendChild(r), n.body.appendChild(o), t && (r.href = t), o.href = e, o.href
            }(t, n) : t,
            a = qt(t);
          let i;
          return i = o ? Jt(await o(s), a) : await Yt(s, a, r), e.replace(function(e) {
            const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
            return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
          }(t), `$1${i}$3`)
        } catch (e) {}
        return e
      }(e, r, t, n)))), Promise.resolve(r))
    }
    async function on(e, t, n) {
      var r;
      const o = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e);
      if (o) {
        const r = await rn(o, null, n);
        return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0
      }
      return !1
    }
    async function sn(e, t) {
      Rt(e, Element) && (await async function(e, t) {
        await on("background", e, t) || await on("background-image", e, t), await on("mask", e, t) || await on("mask-image", e, t)
      }(e, t), await async function(e, t) {
        const n = Rt(e, HTMLImageElement);
        if ((!n || Wt(e.src)) && (!Rt(e, SVGImageElement) || Wt(e.href.baseVal))) return;
        const r = n ? e.src : e.href.baseVal,
          o = await Yt(r, qt(r), t);
        await new Promise(((t, r) => {
          e.onload = t, e.onerror = r;
          const s = e;
          s.decode && (s.decode = t), "lazy" === s.loading && (s.loading = "eager"), n ? (e.srcset = "", e.src = o) : e.href.baseVal = o
        }))
      }(e, t), await async function(e, t) {
        const n = Lt(e.childNodes).map((e => sn(e, t)));
        await Promise.all(n).then((() => e))
      }(e, t))
    }
    const an = {};
    async function ln(e) {
      let t = an[e];
      if (null != t) return t;
      const n = await fetch(e);
      return t = {
        url: e,
        cssText: await n.text()
      }, an[e] = t, t
    }
    async function cn(e, t) {
      let n = e.cssText;
      const r = /url\(["']?([^"')]+)["']?\)/g,
        o = (n.match(/url\([^)]+\)/g) || []).map((async o => {
          let s = o.replace(r, "$1");
          return s.startsWith("https://") || (s = new URL(s, e.url).href), Xt(s, t.fetchRequestInit, (({
            result: e
          }) => (n = n.replace(o, `url(${e})`), [o, e])))
        }));
      return Promise.all(o).then((() => n))
    }

    function dn(e) {
      if (null == e) return [];
      const t = [];
      let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
      const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
      for (;;) {
        const e = r.exec(n);
        if (null === e) break;
        t.push(e[0])
      }
      n = n.replace(r, "");
      const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
        s = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
      for (;;) {
        let e = o.exec(n);
        if (null === e) {
          if (e = s.exec(n), null === e) break;
          o.lastIndex = s.lastIndex
        } else s.lastIndex = o.lastIndex;
        t.push(e[0])
      }
      return t
    }
    async function un(e, t) {
      const n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await async function(e, t) {
        const n = await async function(e, t) {
          if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
          const n = Lt(e.ownerDocument.styleSheets),
            r = await async function(e, t) {
              const n = [],
                r = [];
              return e.forEach((n => {
                if ("cssRules" in n) try {
                  Lt(n.cssRules || []).forEach(((e, o) => {
                    if (e.type === CSSRule.IMPORT_RULE) {
                      let s = o + 1;
                      const a = ln(e.href).then((e => cn(e, t))).then((e => dn(e).forEach((e => {
                        try {
                          n.insertRule(e, e.startsWith("@import") ? s += 1 : n.cssRules.length)
                        } catch (t) {
                          console.error("Error inserting rule from remote css", {
                            rule: e,
                            error: t
                          })
                        }
                      })))).catch((e => {
                        console.error("Error loading remote css", e.toString())
                      }));
                      r.push(a)
                    }
                  }))
                } catch (o) {
                  const s = e.find((e => null == e.href)) || document.styleSheets[0];
                  null != n.href && r.push(ln(n.href).then((e => cn(e, t))).then((e => dn(e).forEach((e => {
                    s.insertRule(e, n.cssRules.length)
                  })))).catch((e => {
                    console.error("Error loading remote stylesheet", e)
                  }))), console.error("Error inlining remote css file", o)
                }
              })), Promise.all(r).then((() => (e.forEach((e => {
                if ("cssRules" in e) try {
                  Lt(e.cssRules || []).forEach((e => {
                    n.push(e)
                  }))
                } catch (t) {
                  console.error(`Error while reading CSS rules from ${e.href}`, t)
                }
              })), n)))
            }(n, t);
          return function(e) {
            return e.filter((e => e.type === CSSRule.FONT_FACE_RULE)).filter((e => nn(e.style.getPropertyValue("src"))))
          }(r)
        }(e, t);
        return (await Promise.all(n.map((e => {
          const n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
          return rn(e.cssText, n, t)
        })))).join("\n")
      }(e, t);
      if (n) {
        const t = document.createElement("style"),
          r = document.createTextNode(n);
        t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
      }
    }
    async function fn(e, t = {}) {
      const {
        width: n,
        height: r
      } = Ot(e, t), o = await Qt(e, t, !0);
      return await un(o, t), await sn(o, t),
        function(e, t) {
          const {
            style: n
          } = e;
          t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
          const r = t.style;
          null != r && Object.keys(r).forEach((e => {
            n[e] = r[e]
          }))
        }(o, t), await async function(e, t, n) {
          const r = "http://www.w3.org/2000/svg",
            o = document.createElementNS(r, "svg"),
            s = document.createElementNS(r, "foreignObject");
          return o.setAttribute("width", `${t}`), o.setAttribute("height", `${n}`), o.setAttribute("viewBox", `0 0 ${t} ${n}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), o.appendChild(s), s.appendChild(e), async function(e) {
            return Promise.resolve().then((() => (new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e => `data:image/svg+xml;charset=utf-8,${e}`))
          }(o)
        }(o, n, r)
    }
    async function pn(e, t = {}) {
      const n = await async function(e, t = {}) {
        const {
          width: n,
          height: r
        } = Ot(e, t), o = await fn(e, t), s = await It(o), a = document.createElement("canvas"), i = a.getContext("2d"), l = t.pixelRatio || function() {
          let e, t;
          try {
            t = process
          } catch (e) {}
          const n = t && t.env ? t.env.devicePixelRatio : null;
          return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1
        }(), c = t.canvasWidth || n, d = t.canvasHeight || r;
        return a.width = c * l, a.height = d * l, t.skipAutoScale || function(e) {
          (e.width > _t || e.height > _t) && (e.width > _t && e.height > _t ? e.width > e.height ? (e.height *= _t / e.width, e.width = _t) : (e.width *= _t / e.height, e.height = _t) : e.width > _t ? (e.height *= _t / e.width, e.width = _t) : (e.width *= _t / e.height, e.height = _t))
        }(a), a.style.width = `${c}`, a.style.height = `${d}`, t.backgroundColor && (i.fillStyle = t.backgroundColor, i.fillRect(0, 0, a.width, a.height)), i.drawImage(s, 0, 0, a.width, a.height), a
      }(e, t), r = await

      function(e, t = {}) {
        return e.toBlob ? new Promise((n => {
          e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1)
        })) : new Promise((n => {
          const r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]),
            o = r.length,
            s = new Uint8Array(o);
          for (let e = 0; e < o; e += 1) s[e] = r.charCodeAt(e);
          n(new Blob([s], {
            type: t.type ? t.type : "image/png"
          }))
        }))
      }(n);
      return r
    }
    const hn = "chunithm_b40.png";
    async function gn() {
      const e = document.querySelector("main");
      if (null == e) return alert(d(wt)("share.error", {
        error: "resultNode is null"
      }));
      let t = e?.cloneNode(!0);
      t.id = "copied-main", t.querySelectorAll("tbody tr:nth-child(n+41)").forEach((e => {
        e.remove()
      })), e?.parentElement?.appendChild(t), pn(t, {
        backgroundColor: window.getComputedStyle(document.body).backgroundColor
      }).then((async e => {
        if (t.remove(), null != e)
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            const t = new File([e], hn, {
              type: e.type
            });
            navigator?.canShare({
              files: [t]
            }) && navigator.share({
              files: [t]
            }).catch(console.log)
          } else {
            const t = document.createElement("a");
            t.href = window.URL.createObjectURL(e), t.download = hn, t.click()
          }
        else alert(d(wt)("share.error", {
          error: "result blob is null"
        }))
      })).catch((e => {
        alert(d(wt)("share.error", {
          error: e
        }))
      }))
    }

    function mn(e) {
      j(e, "svelte-iy49t2", ".wrapper.svelte-iy49t2{display:flex;-ms-flex-direction:row;z-index:2;flex-direction:row;justify-content:space-between;align-items:center;gap:1em;position:fixed;right:1rem;top:0.6rem}button.svelte-iy49t2{width:2rem;height:2rem;background:var(--theme-border);opacity:0.8;border-radius:40%;font-weight:bold}svg.svelte-iy49t2{overflow:visible}")
    }

    function vn(t) {
      let n, r, o, a, i, l, c, d, u, f, p, h, g, m = function(e) {
        let t, n, r, o, s, a = "verse" === e[1] ? "🌐" : "🗾";
        return {
          c() {
            t = H("button"), n = A(a), O(t, "type", "button"), O(t, "title", r = e[0]("header.title.constData", {
              name: e[0]("settings.data.constData." + e[1])
            })), O(t, "class", "svelte-iy49t2")
          },
          m(r, a) {
            M(r, t, a), k(t, n), o || (s = P(t, "click", e[2]), o = !0)
          },
          p(e, o) {
            2 & o && a !== (a = "verse" === e[1] ? "🌐" : "🗾") && I(n, a), 3 & o && r !== (r = e[0]("header.title.constData", {
              name: e[0]("settings.data.constData." + e[1])
            })) && O(t, "title", r)
          },
          d(e) {
            e && E(t), o = !1, s()
          }
        }
      }(t);
      return {
        c() {
          n = H("div"), r = H("button"), o = U("svg"), a = U("path"), l = D(), m && m.c(), c = D(), d = H("button"), u = U("svg"), f = U("path"), O(a, "d", "M7 2H11V8H15L9 14 3 8H7V2ZM3 14H15V16H3V14Z"), O(a, "fill", "var(--theme-text)"), O(o, "width", "18"), O(o, "height", "18"), O(o, "class", "svelte-iy49t2"), O(r, "type", "button"), O(r, "title", i = t[0]("header.title.dl")), O(r, "class", "svelte-iy49t2"), O(f, "d", "M2 4H16V6H2V4ZM2 8H16V10H2V8ZM2 12H16V14H2V12Z"), O(f, "fill", "var(--theme-text)"), O(u, "width", "18"), O(u, "height", "18"), O(u, "class", "svelte-iy49t2"), O(d, "type", "button"), O(d, "title", p = t[0]("header.title.settings")), O(d, "class", "svelte-iy49t2"), O(n, "class", "wrapper svelte-iy49t2")
        },
        m(e, t) {
          M(e, n, t), k(n, r), k(r, o), k(o, a), k(n, l), m && m.m(n, null), k(n, c), k(n, d), k(d, u), k(u, f), h || (g = [P(r, "click", gn), P(d, "click", xt.toggle)], h = !0)
        },
        p(e, [t]) {
          1 & t && i !== (i = e[0]("header.title.dl")) && O(r, "title", i), m.p(e, t), 1 & t && p !== (p = e[0]("header.title.settings")) && O(d, "title", p)
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), m && m.d(), h = !1, s(g)
        }
      }
    }

    function bn(e, t, n) {
      let r, o;
      return u(e, wt, (e => n(0, r = e))), u(e, tt, (e => n(1, o = e))), [r, o, () => {
        p(tt, o = tt.accepts[(tt.accepts.indexOf(o) + 1) % tt.accepts.length], o)
      }]
    }
    const yn = class extends Se {
      constructor(e) {
        super(), je(this, e, bn, vn, i, {}, mn)
      }
    };

    function wn(e) {
      const t = e - 1;
      return t * t * t + 1
    }

    function $n(e, {
      delay: n = 0,
      duration: r = 400,
      easing: o = t
    } = {}) {
      const s = +getComputedStyle(e).opacity;
      return {
        delay: n,
        duration: r,
        easing: o,
        css: e => "opacity: " + e * s
      }
    }

    function xn(e, {
      delay: t = 0,
      duration: n = 400,
      easing: r = wn,
      x: o = 0,
      y: s = 0,
      opacity: a = 0
    } = {}) {
      const i = getComputedStyle(e),
        l = +i.opacity,
        c = "none" === i.transform ? "" : i.transform,
        d = l * (1 - a),
        [u, f] = h(o),
        [p, g] = h(s);
      return {
        delay: t,
        duration: n,
        easing: r,
        css: (e, t) => `\n\t\t\ttransform: ${c} translate(${(1-e)*u}${f}, ${(1-e)*p}${g});\n\t\t\topacity: ${l-d*t}`
      }
    }

    function kn(e) {
      j(e, "svelte-y51pcd", "label.svelte-y51pcd{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:0.5rem}select.svelte-y51pcd{width:100%;height:3rem;padding-left:1rem;padding-right:2.5rem;font-size:1em;font-weight:bold;background:var(--theme-bg-main);border:var(--theme-border) 2px solid;border-radius:1rem;color:inherit;cursor:pointer;appearance:none;background-image:linear-gradient(45deg, transparent 50%, currentColor 0), linear-gradient(135deg, currentColor 50%, transparent 0);background-position:calc(100% - 20px) calc(1px + 50%), calc(100% - 16.02px) calc(1px + 50%);background-size:4px 4px, 4px 4px;background-repeat:no-repeat}")
    }

    function jn(e) {
      let t, n, r, o, s, a, i;
      const l = e[3].default,
        c = function(e, t, n, r) {
          if (e) {
            const r = f(e, t, n, null);
            return e[0](r)
          }
        }(l, e, e[2]);
      return {
        c() {
          t = H("label"), n = H("span"), r = D(), o = H("select"), c && c.c(), O(o, "class", "svelte-y51pcd"), void 0 === e[0] && re((() => e[4].call(o))), O(t, "class", "svelte-y51pcd")
        },
        m(l, d) {
          M(l, t, d), k(t, n), n.innerHTML = e[1], k(t, r), k(t, o), c && c.m(o, null), F(o, e[0], !0), s = !0, a || (i = P(o, "change", e[4]), a = !0)
        },
        p(e, [t]) {
          (!s || 2 & t) && (n.innerHTML = e[1]), c && c.p && (!s || 4 & t) && function(e, t, n, r, o, s) {
            if (o) {
              const a = f(t, n, r, s);
              e.p(a, o)
            }
          }(c, l, e, e[2], s ? function(e, t, n, r) {
            if (e[2] && r) {
              const o = e[2](r(n));
              if (void 0 === t.dirty) return o;
              if ("object" == typeof o) {
                const e = [],
                  n = Math.max(t.dirty.length, o.length);
                for (let r = 0; r < n; r += 1) e[r] = t.dirty[r] | o[r];
                return e
              }
              return t.dirty | o
            }
            return t.dirty
          }(l, e[2], t, null) : function(e) {
            if (e.ctx.length > 32) {
              const t = [],
                n = e.ctx.length / 32;
              for (let e = 0; e < n; e++) t[e] = -1;
              return t
            }
            return -1
          }(e[2]), null), 1 & t && F(o, e[0])
        },
        i(e) {
          s || (ge(c, e), s = !0)
        },
        o(e) {
          me(c, e), s = !1
        },
        d(e) {
          e && E(t), c && c.d(e), a = !1, i()
        }
      }
    }

    function Sn(e, t, n) {
      let {
        $$slots: r = {},
        $$scope: o
      } = t, {
        value: s
      } = t, {
        label: a
      } = t;
      return e.$$set = e => {
        "value" in e && n(0, s = e.value), "label" in e && n(1, a = e.label), "$$scope" in e && n(2, o = e.$$scope)
      }, [s, a, o, r, function() {
        s = function(e) {
          const t = e.querySelector(":checked");
          return t && t.__value
        }(this), n(0, s)
      }]
    }
    const Tn = class extends Se {
      constructor(e) {
        super(), je(this, e, Sn, jn, i, {
          value: 0,
          label: 1
        }, kn)
      }
    };

    function Cn(e) {
      j(e, "svelte-9ola9o", 'label.svelte-9ola9o.svelte-9ola9o{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:0.5rem}.wrapper.svelte-9ola9o.svelte-9ola9o{position:relative;width:4.5rem;height:2rem;display:inline-block}input.svelte-9ola9o.svelte-9ola9o{width:0;height:0;opacity:0;position:absolute}input:focus-visible+.wrapper.svelte-9ola9o .slider.svelte-9ola9o{outline:var(--theme-border) auto 1px}input:checked+.wrapper.svelte-9ola9o .slider.svelte-9ola9o{background-color:var(--theme-control)}input:checked+.wrapper.svelte-9ola9o .slider.svelte-9ola9o:before{transform:translateX(2.5rem)}input:checked+.wrapper.svelte-9ola9o .slider.svelte-9ola9o:after{content:"ON";left:0.6rem;right:initial}.slider.svelte-9ola9o.svelte-9ola9o{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--theme-bg-sub);transition:0.2s;border-radius:0.8rem}.slider.svelte-9ola9o.svelte-9ola9o:after{color:var(--theme-text-control);position:absolute;content:"OFF";display:flex;align-items:center;height:100%;right:0.6rem;font-weight:bold}.slider.svelte-9ola9o.svelte-9ola9o:before{position:absolute;content:"";height:1.6rem;width:1.6rem;left:0.2rem;bottom:0.2rem;background-color:var(--theme-text-control);transition:0.2s;border-radius:40%}')
    }

    function Mn(t) {
      let n, r, o, s, a, i, l, c;
      return {
        c() {
          n = H("label"), r = H("span"), o = D(), s = H("input"), a = D(), i = H("div"), i.innerHTML = '<span class="slider svelte-9ola9o"></span>', O(s, "type", "checkbox"), O(s, "class", "svelte-9ola9o"), O(i, "class", "wrapper svelte-9ola9o"), O(n, "class", "svelte-9ola9o")
        },
        m(e, d) {
          M(e, n, d), k(n, r), r.innerHTML = t[1], k(n, o), k(n, s), s.checked = t[0], k(n, a), k(n, i), l || (c = P(s, "change", t[2]), l = !0)
        },
        p(e, [t]) {
          2 & t && (r.innerHTML = e[1]), 1 & t && (s.checked = e[0])
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), l = !1, c()
        }
      }
    }

    function En(e, t, n) {
      let {
        checked: r = !1
      } = t, {
        label: o
      } = t;
      return e.$$set = e => {
        "checked" in e && n(0, r = e.checked), "label" in e && n(1, o = e.label)
      }, [r, o, function() {
        r = this.checked, n(0, r)
      }]
    }
    const Nn = class extends Se {
      constructor(e) {
        super(), je(this, e, En, Mn, i, {
          checked: 0,
          label: 1
        }, Cn)
      }
    };

    function Hn(e) {
      j(e, "svelte-1aafgfe", ".wrapper.svelte-1aafgfe.svelte-1aafgfe{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:0.5rem}.indicators.svelte-1aafgfe.svelte-1aafgfe{height:0.8rem;position:relative}.indicators.svelte-1aafgfe div.svelte-1aafgfe{background-color:var(--theme-bg-sub);height:1.6rem;width:1.6rem;border-radius:40%;display:flex;justify-content:center;align-items:center;position:absolute;border:var(--theme-border) 0.2rem solid}.indicators.svelte-1aafgfe div.low.svelte-1aafgfe{border-bottom-right-radius:0;transform:translateX(-0.4rem)}.indicators.svelte-1aafgfe div.high.svelte-1aafgfe{border-bottom-left-radius:0;transform:translateX(1.6rem)}.slider.svelte-1aafgfe.svelte-1aafgfe{display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;width:100%;height:3.5rem;position:relative}.slider-bg.svelte-1aafgfe.svelte-1aafgfe{height:0.4rem;width:calc(100% - 2.6rem);margin-left:1.4rem;background-color:var(--theme-border);position:absolute;border-radius:0.2rem}input[type=number].svelte-1aafgfe.svelte-1aafgfe{background-color:transparent;border:none;color:inherit;font-family:inherit;max-width:150%;text-align:center;-moz-appearance:textfield;appearance:textfield}input.svelte-1aafgfe.svelte-1aafgfe::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=range].svelte-1aafgfe.svelte-1aafgfe{-webkit-appearance:none;appearance:none;height:0;width:calc(100% - 1.5rem);position:absolute;border-radius:0.2rem;pointer-events:none}input[type=range].low.svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb{border-radius:50% 0 0 50%}input[type=range].low.svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb{border-radius:50% 0 0 50%}input[type=range].high.svelte-1aafgfe.svelte-1aafgfe{margin-left:1.6rem}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb{z-index:1;-webkit-appearance:none;pointer-events:all;width:1.5rem;height:2rem;background-color:var(--theme-text-dim);border-radius:0 50% 50% 0;cursor:pointer;transition:0.2s}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb:hover{background-color:var(--theme-text)}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb:active{-webkit-box-shadow:0 0 0.5rem var(--theme-text-dim);box-shadow:0 0 0.5rem var(--theme-text-dim)}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb{z-index:1;-webkit-appearance:none;pointer-events:all;width:1.5rem;height:2rem;background-color:var(--theme-text-dim);border-radius:0 50% 50% 0;cursor:pointer;transition:0.2s}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb:hover{background-color:var(--theme-text)}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb:active{-webkit-box-shadow:0 0 0.5rem var(--theme-text-dim);box-shadow:0 0 0.5rem var(--theme-text-dim)}input[type=range].svelte-1aafgfe.svelte-1aafgfe:focus-visible{outline:none}input[type=range].svelte-1aafgfe.svelte-1aafgfe:focus-visible::-webkit-slider-thumb{outline:var(--theme-border) auto 1px}input[type=range].svelte-1aafgfe.svelte-1aafgfe:focus-visible::-moz-range-thumb{outline:var(--theme-border) auto 1px}")
    }

    function Un(t) {
      let n, r, o, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w;
      return {
        c() {
          n = H("div"), r = H("span"), o = D(), a = H("div"), i = H("div"), l = H("input"), c = D(), d = H("div"), u = H("input"), f = D(), p = H("div"), h = H("div"), g = D(), m = H("input"), v = D(), b = H("input"), l.value = t[6], O(l, "type", "number"), O(l, "min", t[3]), O(l, "max", t[4]), O(l, "step", t[5]), O(l, "inputmode", "decimal"), O(l, "class", "svelte-1aafgfe"), O(i, "class", "low svelte-1aafgfe"), z(i, "left", "calc((100% - 3rem) * " + t[9] + " / 100)"), u.value = t[7], O(u, "type", "number"), O(u, "min", t[3]), O(u, "max", t[4]), O(u, "step", t[5]), O(u, "inputmode", "decimal"), O(u, "class", "svelte-1aafgfe"), O(d, "class", "high svelte-1aafgfe"), z(d, "left", "calc((100% - 3rem) * " + t[8] + " / 100)"), O(a, "class", "indicators svelte-1aafgfe"), O(h, "class", "slider-bg svelte-1aafgfe"), z(h, "background", "linear-gradient( to right, var(--theme-border) 0%, var(--theme-border) " + (t[9] - 1) + "%, var(--theme-control) " + (t[9] - 1) + "%, var(--theme-control) " + (t[8] + 1) + "%, var(--theme-border) " + (t[8] + 1) + "%, var(--theme-border) 100% )"), O(m, "class", "low svelte-1aafgfe"), O(m, "type", "range"), O(m, "min", t[3]), O(m, "max", t[4]), O(m, "step", t[5]), O(b, "class", "high svelte-1aafgfe"), O(b, "type", "range"), O(b, "min", t[3]), O(b, "max", t[4]), O(b, "step", t[5]), O(p, "class", "slider svelte-1aafgfe"), O(n, "class", "wrapper svelte-1aafgfe")
        },
        m(e, s) {
          M(e, n, s), k(n, r), r.innerHTML = t[2], k(n, o), k(n, a), k(a, i), k(i, l), k(a, c), k(a, d), k(d, u), k(n, f), k(n, p), k(p, h), k(p, g), k(p, m), R(m, t[6]), k(p, v), k(p, b), R(b, t[7]), y || (w = [P(l, "change", t[10]), P(u, "change", t[11]), P(m, "change", t[12]), P(m, "input", t[12]), P(m, "change", t[13]), P(m, "input", t[14]), P(b, "change", t[15]), P(b, "input", t[15]), P(b, "change", t[16]), P(b, "input", t[17])], y = !0)
        },
        p(e, [t]) {
          4 & t && (r.innerHTML = e[2]), 64 & t && l.value !== e[6] && (l.value = e[6]), 8 & t && O(l, "min", e[3]), 16 & t && O(l, "max", e[4]), 32 & t && O(l, "step", e[5]), 512 & t && z(i, "left", "calc((100% - 3rem) * " + e[9] + " / 100)"), 128 & t && u.value !== e[7] && (u.value = e[7]), 8 & t && O(u, "min", e[3]), 16 & t && O(u, "max", e[4]), 32 & t && O(u, "step", e[5]), 256 & t && z(d, "left", "calc((100% - 3rem) * " + e[8] + " / 100)"), 768 & t && z(h, "background", "linear-gradient( to right, var(--theme-border) 0%, var(--theme-border) " + (e[9] - 1) + "%, var(--theme-control) " + (e[9] - 1) + "%, var(--theme-control) " + (e[8] + 1) + "%, var(--theme-border) " + (e[8] + 1) + "%, var(--theme-border) 100% )"), 8 & t && O(m, "min", e[3]), 16 & t && O(m, "max", e[4]), 32 & t && O(m, "step", e[5]), 64 & t && R(m, e[6]), 8 & t && O(b, "min", e[3]), 16 & t && O(b, "max", e[4]), 32 & t && O(b, "step", e[5]), 128 & t && R(b, e[7])
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), y = !1, s(w)
        }
      }
    }

    function An(e, t, n) {
      let r, o, {
          label: s
        } = t,
        {
          min: a
        } = t,
        {
          max: i
        } = t,
        {
          step: l
        } = t,
        {
          low: c
        } = t,
        {
          high: d
        } = t,
        u = i - a,
        f = c,
        p = d;
      return e.$$set = e => {
        "label" in e && n(2, s = e.label), "min" in e && n(3, a = e.min), "max" in e && n(4, i = e.max), "step" in e && n(5, l = e.step), "low" in e && n(0, c = e.low), "high" in e && n(1, d = e.high)
      }, e.$$.update = () => {
        72 & e.$$.dirty && n(9, r = (f - a) / u * 100), 136 & e.$$.dirty && n(8, o = (p - a) / u * 100)
      }, [c, d, s, a, i, l, f, p, o, r, e => {
        n(6, f = parseFloat(e.currentTarget.value) || f), n(6, f = Math.min(i, Math.max(a, f))), f > p && n(7, p = f), e.currentTarget.value = f.toString(), n(0, c = f), n(1, d = p)
      }, e => {
        n(7, p = parseFloat(e.currentTarget.value) || p), n(7, p = Math.min(i, Math.max(a, p))), p < f && n(6, f = p), e.currentTarget.value = p.toString(), n(0, c = f), n(1, d = p)
      }, function() {
        f = _(this.value), n(6, f)
      }, () => {
        n(0, c = f), n(1, d = p)
      }, () => {
        f > p && n(7, p = f)
      }, function() {
        p = _(this.value), n(7, p)
      }, () => {
        n(0, c = f), n(1, d = p)
      }, () => {
        p < f && n(6, f = p)
      }]
    }
    const Dn = class extends Se {
      constructor(e) {
        super(), je(this, e, An, Un, i, {
          label: 2,
          min: 3,
          max: 4,
          step: 5,
          low: 0,
          high: 1
        }, Hn)
      }
    };

    function Ln(e) {
      j(e, "svelte-1dczp1w", ".wrapper.svelte-1dczp1w{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5em;gap:1rem}.btns.svelte-1dczp1w{display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.5em}button.svelte-1dczp1w{width:100%;padding:0.5em;border-radius:0.5em;background-color:var(--theme-bg-sub);border:3px solid var(--theme-control);filter:brightness(0.5)}button[disabled].svelte-1dczp1w{cursor:no-drop;border:3px solid var(--theme-bg-sub)}button.svelte-1dczp1w:hover{filter:brightness(0.8)}button.activated.svelte-1dczp1w{filter:brightness(1)}button[data-diff=ULT].svelte-1dczp1w{color:var(--theme-song-ult)}button[data-diff=MAS].svelte-1dczp1w{color:var(--theme-song-mas)}button[data-diff=EXP].svelte-1dczp1w{color:var(--theme-song-exp)}button[data-diff=ADV].svelte-1dczp1w{color:var(--theme-song-adv)}button[data-diff=BAS].svelte-1dczp1w{color:var(--theme-song-bas)}")
    }

    function Pn(e, t, n) {
      const r = e.slice();
      return r[4] = t[n], r
    }

    function On(e) {
      let t, n = e[0]("settings.filter.diff.warn") + "";
      return {
        c() {
          t = H("span"), z(t, "color", "var(--theme-text-dim)")
        },
        m(e, r) {
          M(e, t, r), t.innerHTML = n
        },
        p(e, r) {
          1 & r && n !== (n = e[0]("settings.filter.diff.warn") + "") && (t.innerHTML = n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function _n(e) {
      let t, n, r, o, s, a = e[4] + "";

      function i() {
        return e[3](e[4])
      }
      return {
        c() {
          t = H("button"), n = A(a), O(t, "type", "button"), t.disabled = e[2], O(t, "data-diff", r = e[4]), O(t, "class", "svelte-1dczp1w"), B(t, "activated", e[1][e[4]])
        },
        m(e, r) {
          M(e, t, r), k(t, n), o || (s = P(t, "click", i), o = !0)
        },
        p(n, r) {
          e = n, 4 & r && (t.disabled = e[2]), 2 & r && B(t, "activated", e[1][e[4]])
        },
        d(e) {
          e && E(t), o = !1, s()
        }
      }
    }

    function In(t) {
      let n, r, o, s, a, i, l, c, d = t[0]("settings.filter.diff") + "",
        u = Object.values(t[1]).every(Rn),
        f = t[0]("settings.filter.diff.notify") + "",
        p = u && On(t),
        h = Oe,
        g = [];
      for (let e = 0; e < h.length; e += 1) g[e] = _n(Pn(t, h, e));
      return {
        c() {
          n = H("div"), r = H("span"), o = new V(!1), s = D(), p && p.c(), a = D(), i = H("div");
          for (let e = 0; e < g.length; e += 1) g[e].c();
          l = D(), c = H("span"), o.a = s, O(i, "class", "btns svelte-1dczp1w"), z(c, "color", "var(--theme-text-dim)"), O(n, "class", "wrapper svelte-1dczp1w")
        },
        m(e, t) {
          M(e, n, t), k(n, r), o.m(d, r), k(r, s), p && p.m(r, null), k(n, a), k(n, i);
          for (let e = 0; e < g.length; e += 1) g[e] && g[e].m(i, null);
          k(n, l), k(n, c), c.innerHTML = f
        },
        p(e, [t]) {
          if (1 & t && d !== (d = e[0]("settings.filter.diff") + "") && o.p(d), 2 & t && (u = Object.values(e[1]).every(Rn)), u ? p ? p.p(e, t) : (p = On(e), p.c(), p.m(r, null)) : p && (p.d(1), p = null), 6 & t) {
            let n;
            for (h = Oe, n = 0; n < h.length; n += 1) {
              const r = Pn(e, h, n);
              g[n] ? g[n].p(r, t) : (g[n] = _n(r), g[n].c(), g[n].m(i, null))
            }
            for (; n < g.length; n += 1) g[n].d(1);
            g.length = h.length
          }
          1 & t && f !== (f = e[0]("settings.filter.diff.notify") + "") && (c.innerHTML = f)
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), p && p.d(), N(g, e)
        }
      }
    }
    const Rn = e => 0 == e;

    function zn(e, t, n) {
      let r, o, s;
      return u(e, wt, (e => n(0, r = e))), u(e, Qe, (e => n(1, o = e))), u(e, jt, (e => n(2, s = e))), [r, o, s, e => {
        p(Qe, o[e] = !o[e], o)
      }]
    }
    const Fn = class extends Se {
      constructor(e) {
        super(), je(this, e, zn, In, i, {}, Ln)
      }
    };

    function Bn(e) {
      j(e, "svelte-by0uiq", '.wrapper.svelte-by0uiq{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:1rem}.btns.svelte-by0uiq{display:-ms-grid;display:grid;grid-template-areas:"... ... ...";gap:0.5rem;flex-wrap:wrap}button.svelte-by0uiq{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:var(--theme-bg-sub);border:3px solid var(--theme-control);color:var(--theme-text-control);filter:brightness(0.5)}button.svelte-by0uiq:hover{filter:brightness(0.8)}button.activated.svelte-by0uiq{filter:brightness(1)}.btn-all.svelte-by0uiq{grid-column:2/4;border-color:var(--theme-control-altr)}button[disabled].svelte-by0uiq{cursor:no-drop;border:3px solid var(--theme-bg-sub)}')
    }

    function Vn(e, t, n) {
      const r = e.slice();
      return r[6] = t[n], r
    }

    function qn(e) {
      let t, n, r, o, s = e[6] + "";
      function a() {
        return e[3](e[6])
      }
      return {
        c() {
          t = H("button"), n = A(s), O(t, "type", "button"), t.disabled = e[5], O(t, "class", "svelte-by0uiq"), B(t, "activated", e[1][e[6]])
        },
        m(e, s) {
          M(e, t, s), k(t, n), r || (o = P(t, "click", a), r = !0)
        },
        p(n, r) {
          e = n, 32 & r && (t.disabled = e[5]), 2 & r && B(t, "activated", e[1][e[6]])
        },
        d(e) {
          e && E(t), r = !1, o()
        }
      }
    }

    function Wn(t) {
      let n, r, o, s, a, i, l, c, d, u = t[2]("settings.filter.genre") + "",
        f = t[2]("settings.filter.genre.all") + "",
        p = Ie,
        h = [];
      for (let e = 0; e < p.length; e += 1) h[e] = qn(Vn(t, p, e));
      return {
        c() {
          n = H("div"), r = H("span"), o = D(), s = H("div");
          for (let e = 0; e < h.length; e += 1) h[e].c();
          a = D(), i = H("button"), l = A(f), O(i, "type", "button"), O(i, "class", "btn-all svelte-by0uiq"), B(i, "activated", t[0]), i.disabled = t[5], O(s, "class", "btns svelte-by0uiq"), O(n, "class", "wrapper svelte-by0uiq")
        },
        m(e, f) {
          M(e, n, f), k(n, r), r.innerHTML = u, k(n, o), k(n, s);
          for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(s, null);
          k(s, a), k(s, i), k(i, l), c || (d = P(i, "click", t[4]), c = !0)
        },
        p(e, [t]) {
          if (4 & t && u !== (u = e[2]("settings.filter.genre") + "") && (r.innerHTML = u), 3 & t) {
            let n;
            for (p = Ie, n = 0; n < p.length; n += 1) {
              const r = Vn(e, p, n);
              h[n] ? h[n].p(r, t) : (h[n] = qn(r), h[n].c(), h[n].m(s, a))
            }
            for (; n < h.length; n += 1) h[n].d(1);
            h.length = p.length
          }
          4 & t && f !== (f = e[2]("settings.filter.genre.all") + "") && I(l, f), 1 & t && B(i, "activated", e[0])/*, 32 & t && (i.disabled = e[5])*/
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), N(h, e), c = !1, d()
        }
      }
    }

    function Jn(e, t, n) {
      let r, o, v;
      u(e, et, (e => n(1, r = e))), u(e, wt, (e => n(2, o = e))), u(e, jt, (e => n(5, v = e)));
      let s = Ie.every((e => r[e]));
      return [s, r, o, e => {
        p(et, r[e] = !r[e], r), n(0, s = Ie.every((e => r[e])))
      }, () => {
        n(0, s = !s);
        for (let e of Ie) p(et, r[e] = s, r)
      }, v]
    }
    const Xn = class extends Se {
      constructor(e) {
        super(), je(this, e, Jn, Wn, i, {}, Bn)
      }
    };

    function Bnn(e) {
      j(e, "svelte-by0uoq", '.wrapper.svelte-by0uoq{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:1rem}.btns.svelte-by0uoq{display:-ms-grid;display:grid;grid-template-columns: repeat(4, 1fr);grid-template-areas:".... .... ....";gap:0.5rem;flex-wrap:wrap}button.svelte-by0uoq{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:var(--theme-bg-sub);border:3px solid var(--theme-control);color:var(--theme-text-control);filter:brightness(0.5)}button.svelte-by0uoq:hover{filter:brightness(0.8)}button.activated.svelte-by0uoq{filter:brightness(1)}.btn-all.svelte-by0uoq{grid-column:2/4;border-color:var(--theme-control-altr)}button[disabled].svelte-by0uoq{cursor:no-drop;border:3px solid var(--theme-bg-sub)}')
    }

    function Vnn(e, t, n) {
      const r = e.slice();
      return r[6] = t[n], r
      
    }

    function qnn(e) {
      let t, n, r, o, s = e[6] + "";
      function a() {
        return e[3](e[6])
      }
      return {
        c() {
          t = H("button"), n = A(s), O(t, "type", "button"), t.disabled = e[5], O(t, "class", "svelte-by0uoq"), B(t, "activated", e[1][e[6]])
        },
        m(e, s) {
          M(e, t, s), k(t, n), r || (o = P(t, "click", a), r = !0)
        },
        p(n, r) {
          e = n, 32 & r && (t.disabled = e[5]), 2 & r && B(t, "activated", e[1][e[6]])
        },
        d(e) {
          e && E(t), r = !1, o()
        }
      }
    }

    function Wnn(t) {
      let n, r, o, s, a, i, l, c, d, u = t[2]("settings.filter.release") + "",
        f = t[2]("settings.filter.release.all") + "",
        p = Rl,
        h = [];
      for (let e = 0; e < p.length; e += 1) h[e] = qnn(Vnn(t, p, e));
      return {
        c() {
          n = H("div"), r = H("span"), o = D(), s = H("div");
          for (let e = 0; e < h.length; e += 1) h[e].c();
          a = D(), i = H("button"), l = A(f), O(i, "type", "button"), O(i, "class", "btn-all svelte-by0uoq"), B(i, "activated", t[0]), i.disabled = t[5], O(s, "class", "btns svelte-by0uoq"), O(n, "class", "wrapper svelte-by0uoq")
        },
        m(e, f) {
          M(e, n, f), k(n, r), r.innerHTML = u, k(n, o), k(n, s);
          for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(s, null);
          k(s, a), k(s, i), k(i, l), c || (d = P(i, "click", t[4]), c = !0)
        },
        p(e, [t]) {
          if (4 & t && u !== (u = e[2]("settings.filter.release") + "") && (r.innerHTML = u), 3 & t) {
            let n;
            for (p = Rl, n = 0; n < p.length; n += 1) {
              const r = Vnn(e, p, n);
              h[n] ? h[n].p(r, t) : (h[n] = qnn(r), h[n].c(), h[n].m(s, a))
            }
            for (; n < h.length; n += 1) h[n].d(1);
            h.length = p.length
          }
          4 & t && f !== (f = e[2]("settings.filter.release.all") + "") && I(l, f), 1 & t && B(i, "activated", e[0])/*, 32 & t && (i.disabled = e[5])*/
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), N(h, e), c = !1, d()
        }
      }
    }
    
    function Jnn(e, t, n) {
      let r, o, v;
      u(e, eet, (e => n(1, r = e))), u(e, wt, (e => n(2, o = e))), u(e, jt, (e => n(5, v = e)));
      let s = Rl.every((e => r[e]));
      return [s, r, o, e => {
        p(eet, r[e] = !r[e], r), n(0, s = Rl.every((e => r[e])))
      }, () => {
        n(0, s = !s);
        for (let e of Rl) p(eet, r[e] = s, r)
      }, v]
    }
    const Xnn = class extends Se {
      constructor(e) {
        super(), je(this, e, Jnn, Wnn, i, {}, Bnn)
      }
    }

    function Bun(e) {
      j(e, "svelte-by0upq", '.wrapper.svelte-by0upq{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:1rem}.btns.svelte-by0upq{display:-ms-grid;display:grid;grid-template-columns: repeat(4, 1fr);grid-template-areas:".... .... ....";gap:0.5rem;flex-wrap:wrap}button.svelte-by0upq{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:var(--theme-bg-sub);border:3px solid var(--theme-control);color:var(--theme-text-control);filter:brightness(0.5)}button.svelte-by0upq:hover{filter:brightness(0.8)}button.activated.svelte-by0upq{filter:brightness(1)}.btn-all.svelte-by0upq{border-color:var(--theme-control-altr)}button[disabled].svelte-by0upq{cursor:no-drop;border:3px solid var(--theme-bg-sub)}')
    }

    function Vun(e, t, n) {
      const r = e.slice();
      return r[6] = t[n], r
      
    }

    function qun(e) {
      let t, n, r, o, s = e[6] + "";
      function a() {
        return e[3](e[6])
      }
      return {
        c() {
          t = H("button"), n = A(s), O(t, "type", "button"), t.disabled = e[5], O(t, "class", "svelte-by0upq"), B(t, "activated", e[1][e[6]])
        },
        m(e, s) {
          M(e, t, s), k(t, n), r || (o = P(t, "click", a), r = !0)
        },
        p(n, r) {
          e = n, 32 & r && (t.disabled = e[5]), 2 & r && B(t, "activated", e[1][e[6]])
        },
        d(e) {
          e && E(t), r = !1, o()
        }
      }
    }

    function Wun(t) {
      let n, r, o, s, a, i, l, c, d, u = t[2]("settings.filter.rank") + "",
        f = t[2]("settings.filter.rank.all") + "",
        p = Rk,
        h = [];
      for (let e = 0; e < p.length; e += 1) h[e] = qun(Vun(t, p, e));
      return {
        c() {
          n = H("div"), r = H("span"), o = D(), s = H("div");
          for (let e = 0; e < h.length; e += 1) h[e].c();
          a = D(), i = H("button"), l = A(f), O(i, "type", "button"), O(i, "class", "btn-all svelte-by0upq"), B(i, "activated", t[0]), i.disabled = t[5], O(s, "class", "btns svelte-by0upq"), O(n, "class", "wrapper svelte-by0upq")
        },
        m(e, f) {
          M(e, n, f), k(n, r), r.innerHTML = u, k(n, o), k(n, s);
          for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(s, null);
          k(s, a), k(s, i), k(i, l), c || (d = P(i, "click", t[4]), c = !0)
        },
        p(e, [t]) {
          if (4 & t && u !== (u = e[2]("settings.filter.rank") + "") && (r.innerHTML = u), 3 & t) {
            let n;
            for (p = Rk, n = 0; n < p.length; n += 1) {
              const r = Vun(e, p, n);
              h[n] ? h[n].p(r, t) : (h[n] = qun(r), h[n].c(), h[n].m(s, a))
            }
            for (; n < h.length; n += 1) h[n].d(1);
            h.length = p.length
          }
          4 & t && f !== (f = e[2]("settings.filter.rank.all") + "") && I(l, f), 1 & t && B(i, "activated", e[0])/*, 32 & t && (i.disabled = e[5])*/
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), N(h, e), c = !1, d()
        }
      }
    }
    
    function Jun(e, t, n) {
      let r, o, v;
      u(e, eeet, (e => n(1, r = e))), u(e, wt, (e => n(2, o = e))), u(e, jt, (e => n(5, v = e)));
      let s = Rk.every((e => r[e]));
      return [s, r, o, e => {
        p(eeet, r[e] = !r[e], r), n(0, s = Rk.every((e => r[e])))
      }, () => {
        n(0, s = !s);
        for (let e of Rk) p(eeet, r[e] = s, r)
      }, v]
    }
    const Xun = class extends Se {
      constructor(e) {
        super(), je(this, e, Jun, Wun, i, {}, Bun)
      }
    }

    function Gn(e) {
      j(e, "svelte-1lhvhf8", ".wrapper.svelte-1lhvhf8{padding:0.5rem;display:flex;gap:0.5rem;align-items:center}input[type=number].svelte-1lhvhf8{background-color:var(--theme-bg-sub);color:var(--theme-text-control);border:none;border-radius:0.2rem;width:4rem;padding:0.5rem;-moz-appearance:textfield;appearance:textfield;flex-grow:1}input[type=number].svelte-1lhvhf8::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.btn.svelte-1lhvhf8{width:-moz-fit-content;width:fit-content;padding:0.5rem 1.5rem;border-radius:0.8rem;background-color:var(--theme-control);color:var(--theme-text-control)}.btn[disabled].svelte-1lhvhf8{background-color:var(--theme-border);cursor:no-drop}")
    }

    function Yn(t) {
      let n1, r, r2, n2, i, c, u, f, p,
          h = t[3]("playcount.fetch.button") + "",
          h2 = t[3]("worldrank.fetch.button") + "";

      return {
        c() {
          n1 = H("div"), r = H("button"), r2 = H("button"),
          n2 = H("div"), i = H("input"), c = H("span"), c.textContent = "～", u = H("input"),
          O(r, "type", "button"), O(r, "class", "btn svelte-1lhvhf8"), r.disabled = t[2] || Zn(t[0], t[1]),
          O(r2, "type", "button"), O(r2, "class", "btn svelte-1lhvhf8"), r2.disabled = t[2] || Zn(t[0], t[1]),
          O(i, "type", "number"), O(i, "min", "1"), O(i, "placeholder", "from"), O(i, "inputmode", "numeric"), O(i, "class", "svelte-1lhvhf8"),
          O(u, "type", "number"), O(u, "min", "1"), O(u, "placeholder", "to"), O(u, "inputmode", "numeric"), O(u, "class", "svelte-1lhvhf8"),
          O(n1, "class", "wrapper svelte-1lhvhf8"), O(n2, "class", "wrapper svelte-1lhvhf8")
        },
        m(e, o) {
          M(e, n1, o), k(n1, r), r.innerHTML = h, k(n1, r2), r2.innerHTML = h2,
          M(e, n2, o), k(n2, i), R(i, t[0]), k(n2, c), k(n2, u), R(u, t[1]),
          f || (p = [P(r, "click", t[5]), P(i, "input", t[6]), P(u, "input", t[7]), P(r2, "click", t[8])], f = !0)
        },
        p(e, s) {
          (8 & s && h !== (h = e[3]("playcount.fetch.button") + "")) && (r.innerHTML = h),
          (7 & s) && (r.disabled = e[2] || Zn(e[0], e[1]), r2.disabled = e[2] || Zn(e[0], e[1])),
          (1 & s && _(i.value) !== e[0]) && R(i, e[0]),
          (2 & s && _(u.value) !== e[1]) && R(u, e[1]),
          (8 & s && h2 !== (h2 = e[3]("worldrank.fetch.button") + "")) && (r2.innerHTML = h2)
        },
        i: e,
        o: e,
        d(e) { e && (E(n1), E(n2)), f = !1, s(p) }
      }
    }

    function Zn(e, t) {
      return isNaN(e) || isNaN(t) || null == e || null == t || t < e
    }

    function Qn(e, t, n) {
      let r, o, s, a, i, l;
      u(e, jt, (e => n(2, r = e))), u(e, wt, (e => n(3, o = e))), u(e, kt, (e => n(8, s = e))), u(e, St, (e => n(9, a = e))), u(e, At, (e => n(10, i = e))), u(e, xt, (e => n(11, l = e)));

      let c = 1, d = 40;

      async function f(e, t) {
        if (!Zn(e, t)) {
          p(St, a = !0, a), p(jt, r = !0, r), p(xt, l = !1, l);
          try {
            const n = sFS.slice(e - 1, t).length;
            for (const [r, s] of sFS.slice(e - 1, t).entries())
              kt.set(o("playcount.fetch.progress", { progress: `${r}`, all: `${n}` })),
              null == s.playCount && (s.playCount = await gt("songPlayCount", s.difficulty, s.idx), At.set(i));
            p(jt, r = !1, r), p(St, a = !1, a)
          } catch {
            p(St, a = !1, a), p(kt, s = o("playcount.fetch.error"), s), setTimeout(() => { p(jt, r = !1, r) }, 6e3)
          }
        }
      }

      async function f2(e, t) {
        if (!Zn(e, t)) {
          p(St, a = !0, a), p(jt, r = !0, r), p(xt, l = !1, l);
          try {
            const n = sFS.slice(e - 1, t).length;
            for (const [r, s] of sFS.slice(e - 1, t).entries())
              kt.set(o("playcount.fetch.progress", { progress: `${r}`, all: `${n}` })),
              null == s.worldRank && (s.worldRank = await gt("songWorldRank", s.difficulty, s.idx), At.set(i));
            p(jt, r = !1, r), p(St, a = !1, a)
          } catch {
            p(St, a = !1, a), p(kt, s = o("playcount.fetch.error"), s), setTimeout(() => { p(jt, r = !1, r) }, 6e3)
          }
        }
      }
      return [
        c, d, r, o,
        f,  () => f(c, d),  function(){ c = _(this.value), n(0, c) }, function(){ d = _(this.value), n(1, d) },
        () => f2(c, d)
      ]
    }
    const Kn = class extends Se {
      constructor(e) {
        super(), je(this, e, Qn, Yn, i, {}, Gn)
      }
    };

    function er(e) {
      j(e, "svelte-11jgb29", ".update-scorediff-btn.svelte-11jgb29{background-color:var(--theme-control);padding:0.5rem 1.5rem;margin:0.5rem 0.5rem;border-radius:0.8rem;float:right}.update-scorediff-btn.svelte-11jgb29:disabled{background-color:var(--theme-bg-sub);cursor:no-drop}")
    }

    function tr(e, t, n) {
      const r = e.slice();
      return r[5] = t[n], r
    }

    function nr(e) {
      let t, n, r, o = e[0]("settings.data.diffUpdate." + e[5]) + "";
      return {
        c() {
          t = H("option"), n = A(o), t.__value = r = e[5], t.value = t.__value
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, t) {
          1 & t && o !== (o = e[0]("settings.data.diffUpdate." + e[5]) + "") && I(n, o)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function rr(e) {
      let t, n = st.accepts,
        r = [];
      for (let t = 0; t < n.length; t += 1) r[t] = nr(tr(e, n, t));
      return {
        c() {
          for (let e = 0; e < r.length; e += 1) r[e].c();
          t = L()
        },
        m(e, n) {
          for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, n);
          M(e, t, n)
        },
        p(e, o) {
          if (1 & o) {
            let s;
            for (n = st.accepts, s = 0; s < n.length; s += 1) {
              const a = tr(e, n, s);
              r[s] ? r[s].p(a, o) : (r[s] = nr(a), r[s].c(), r[s].m(t.parentNode, t))
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = n.length
          }
        },
        d(e) {
          N(r, e), e && E(t)
        }
      }
    }

    function or(e) {
      let t, n, r, o, s = e[0]("settings.data.diffUpdate." + (e[2] ? "reload" : "update")) + "";
      return {
        c() {
          t = H("button"), n = A(s), O(t, "type", "button"), O(t, "class", "update-scorediff-btn svelte-11jgb29"), t.disabled = e[2]
        },
        m(s, a) {
          M(s, t, a), k(t, n), r || (o = P(t, "click", e[4]), r = !0)
        },
        p(e, r) {
          5 & r && s !== (s = e[0]("settings.data.diffUpdate." + (e[2] ? "reload" : "update")) + "") && I(n, s), 4 & r && (t.disabled = e[2])
        },
        d(e) {
          e && E(t), r = !1, o()
        }
      }
    }

    function sr(e) {
      let t, n, r, o, s, a, i = e[0]("settings.data.diffUpdate.notify") + "";

      function l(t) {
        e[3](t)
      }
      let c = {
        label: e[0]("settings.data.diffUpdate", {
          date: new Date(Number(localStorage.getItem("prevUpdateTime"))).toLocaleDateString()
        }),
        $$slots: {
          default: [rr]
        },
        $$scope: {
          ctx: e
        }
      };
      void 0 !== e[1] && (c.value = e[1]), t = new Tn({
        props: c
      }), Q.push((() => we(t, "value", l)));
      let d = "manual" === e[1] && or(e);
      return {
        c() {
          $e(t.$$.fragment), r = D(), d && d.c(), o = D(), s = H("div"), z(s, "color", "var(--theme-text-dim)"), z(s, "margin", ".5em auto")
        },
        m(e, n) {
          xe(t, e, n), M(e, r, n), d && d.m(e, n), M(e, o, n), M(e, s, n), s.innerHTML = i, a = !0
        },
        p(e, [r]) {
          const l = {};
          1 & r && (l.label = e[0]("settings.data.diffUpdate", {
            date: new Date(Number(localStorage.getItem("prevUpdateTime"))).toLocaleDateString()
          })), 257 & r && (l.$$scope = {
            dirty: r,
            ctx: e
          }), !n && 2 & r && (n = !0, l.value = e[1], oe((() => n = !1))), t.$set(l), "manual" === e[1] ? d ? d.p(e, r) : (d = or(e), d.c(), d.m(o.parentNode, o)) : d && (d.d(1), d = null), (!a || 1 & r) && i !== (i = e[0]("settings.data.diffUpdate.notify") + "") && (s.innerHTML = i)
        },
        i(e) {
          a || (ge(t.$$.fragment, e), a = !0)
        },
        o(e) {
          me(t.$$.fragment, e), a = !1
        },
        d(e) {
          ke(t, e), e && E(r), d && d.d(e), e && E(o), e && E(s)
        }
      }
    }
    let ar = Ce(!1);

    function ir(e, t, n) {
      let r, o, s;
      return u(e, wt, (e => n(0, r = e))), u(e, st, (e => n(1, o = e))), u(e, ar, (e => n(2, s = e))), [r, o, s, function(e) {
        o = e, st.set(o)
      }, () => {
        localStorage.removeItem("prevPlayRecord"), localStorage.removeItem("prevUpdateTime"), p(ar, s = !0, s)
      }]
    }
    const lr = class extends Se {
      constructor(e) {
        super(), je(this, e, ir, sr, i, {}, er)
      }
    };

    function cr(e) {
      j(e, "svelte-iga5r4", ".wrapper.svelte-iga5r4{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;z-index:2}.modal-bg.svelte-iga5r4{position:fixed;background:rgba(0, 0, 0, 0.4);top:0;left:0;width:100%;height:100%}.modal.svelte-iga5r4{background:var(--theme-bg-main);width:70%;max-width:32rem;max-height:80%;overflow-y:auto;margin:auto;padding:2em;position:relative;box-shadow:2rem 2rem 10px rgba(0, 0, 0, 0.5333333333);border-radius:1rem;text-align:left}.close-btn.svelte-iga5r4{position:absolute;top:0.5rem;right:0.5rem;width:2rem;height:2rem;background-color:var(--theme-border);border-radius:40%}.reset-btn.svelte-iga5r4{display:block;margin-left:auto;background-color:var(--theme-reset);width:-moz-fit-content;width:fit-content;padding:0.5rem 1.5rem;border-radius:0.8rem}h4.svelte-iga5r4{margin:0.5rem 0;color:var(--theme-text-dim)}hr.svelte-iga5r4{border:none;border-top:var(--theme-border) 0.1rem solid;margin:2rem auto}")
    }

    function dr(e, t, n) {
      const r = e.slice();
      return r[18] = t[n], r
    }

    function ur(e, t, n) {
      const r = e.slice();
      return r[21] = t[n], r
    }

    function fr(e, t, n) {
      const r = e.slice();
      return r[24] = t[n], r
    }

    function pr(e, t, n) {
      const r = e.slice();
      return r[24] = t[n], r
    }

    function hr(e) {
      let t, n, r, o = e[0]("settings.data.constData." + e[24]) + "";
      return {
        c() {
          t = H("option"), n = A(o), t.__value = r = e[24], t.value = t.__value
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, t) {
          1 & t && o !== (o = e[0]("settings.data.constData." + e[24]) + "") && I(n, o)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function gr(e) {
      let t, n = tt.accepts,
        r = [];
      for (let t = 0; t < n.length; t += 1) r[t] = hr(pr(e, n, t));
      return {
        c() {
          for (let e = 0; e < r.length; e += 1) r[e].c();
          t = L()
        },
        m(e, n) {
          for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, n);
          M(e, t, n)
        },
        p(e, o) {
          if (1 & o) {
            let s;
            for (n = tt.accepts, s = 0; s < n.length; s += 1) {
              const a = pr(e, n, s);
              r[s] ? r[s].p(a, o) : (r[s] = hr(a), r[s].c(), r[s].m(t.parentNode, t))
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = n.length
          }
        },
        d(e) {
          N(r, e), e && E(t)
        }
      }
    }

    function mr(e) {
      let t, n, r, o = e[0]("settings.data.overpower." + e[24]) + "";
      return {
        c() {
          t = H("option"), n = A(o), t.__value = r = e[24], t.value = t.__value
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, t) {
          1 & t && o !== (o = e[0]("settings.data.overpower." + e[24]) + "") && I(n, o)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function vr(e) {
      let t, n = nt.accepts,
        r = [];
      for (let t = 0; t < n.length; t += 1) r[t] = mr(fr(e, n, t));
      return {
        c() {
          for (let e = 0; e < r.length; e += 1) r[e].c();
          t = L()
        },
        m(e, n) {
          for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, n);
          M(e, t, n)
        },
        p(e, o) {
          if (1 & o) {
            let s;
            for (n = nt.accepts, s = 0; s < n.length; s += 1) {
              const a = fr(e, n, s);
              r[s] ? r[s].p(a, o) : (r[s] = mr(a), r[s].c(), r[s].m(t.parentNode, t))
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = n.length
          }
        },
        d(e) {
          N(r, e), e && E(t)
        }
      }
    }

    function br(e) {
      let t, n, r, o, s = e[0]("settings.data.playcount.notify") + "";
      return t = new Kn({}), {
        c() {
          $e(t.$$.fragment), n = D(), r = H("div"), z(r, "color", "var(--theme-text-dim)"), z(r, "margin", ".5em auto")
        },
        m(e, a) {
          xe(t, e, a), M(e, n, a), M(e, r, a), r.innerHTML = s, o = !0
        },
        p(e, t) {
          (!o || 1 & t) && s !== (s = e[0]("settings.data.playcount.notify") + "") && (r.innerHTML = s)
        },
        i(e) {
          o || (ge(t.$$.fragment, e), o = !0)
        },
        o(e) {
          me(t.$$.fragment, e), o = !1
        },
        d(e) {
          ke(t, e), e && E(n), e && E(r)
        }
      }
    }

    function yr(t) {
      let n, r, o, s = yt.get(t[21]) + "";
      return {
        c() {
          n = H("option"), r = A(s), n.__value = o = t[21], n.value = n.__value
        },
        m(e, t) {
          M(e, n, t), k(n, r)
        },
        p: e,
        d(e) {
          e && E(n)
        }
      }
    }

    function wr(e) {
      let t, n = De.accepts,
        r = [];
      for (let t = 0; t < n.length; t += 1) r[t] = yr(ur(e, n, t));
      return {
        c() {
          for (let e = 0; e < r.length; e += 1) r[e].c();
          t = L()
        },
        m(e, n) {
          for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, n);
          M(e, t, n)
        },
        p(e, o) {
          if (0 & o) {
            let s;
            for (n = De.accepts, s = 0; s < n.length; s += 1) {
              const a = ur(e, n, s);
              r[s] ? r[s].p(a, o) : (r[s] = yr(a), r[s].c(), r[s].m(t.parentNode, t))
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = n.length
          }
        },
        d(e) {
          N(r, e), e && E(t)
        }
      }
    }

    function $r(t) {
      let n, r, o, s = t[18].charAt(0).toUpperCase() + t[18].slice(1) + "";
      return {
        c() {
          n = H("option"), r = A(s), n.__value = o = t[18], n.value = n.__value
        },
        m(e, t) {
          M(e, n, t), k(n, r)
        },
        p: e,
        d(e) {
          e && E(n)
        }
      }
    }

    function xr(e) {
      let t, n = Ae.accepts,
        r = [];
      for (let t = 0; t < n.length; t += 1) r[t] = $r(dr(e, n, t));
      return {
        c() {
          for (let e = 0; e < r.length; e += 1) r[e].c();
          t = L()
        },
        m(e, n) {
          for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, n);
          M(e, t, n)
        },
        p(e, o) {
          if (0 & o) {
            let s;
            for (n = Ae.accepts, s = 0; s < n.length; s += 1) {
              const a = dr(e, n, s);
              r[s] ? r[s].p(a, o) : (r[s] = $r(a), r[s].c(), r[s].m(t.parentNode, t))
            }
            for (; s < r.length; s += 1) r[s].d(1);
            r.length = n.length
          }
        },
        d(e) {
          N(r, e), e && E(t)
        }
      }
    }

    function kr(e) {
      let t, n, r, o, a, i, l, c, d, u, f, p, h, g, m, v, b, bb, bbb, y, yy, yyy, w, $, x, j, S, T, C, N, U, A, L, _, I, R, F, B, V, q, W, J, X, G, Y, Z, K, ee, te, ne, se, ae, ie, le, ce, de, ue, fe, ve = e[0]("settings.main.title") + "",
        ye = e[0]("settings.filter.title") + "",
        je = e[0]("settings.data.title") + "",
        Se = e[0]("settings.data.overpower.notify") + "",
        Te = e[0]("settings.ui.title") + "",
        Ce = e[0]("settings.main.reset") + "";

      function Me(t) {
        e[9](t)
      }

      function Ee(t) {
        e[10](t)
      }
      let Ne = {
        label: e[0]("settings.filter.const"),
        max: 15.7,
        min: 1,
        step: .1
      };
      function updateNe() {
        const filterDiff = JSON.parse(localStorage.getItem("filterDiff"));
        if (filterDiff) {
          if (!filterDiff.BAS && !filterDiff.ADV && !filterDiff.EXP) {
            Ne.min = 10;
          } else if (!filterDiff.BAS && !filterDiff.ADV) {
            Ne.min = 7; 
          } else if (!filterDiff.BAS) {
            Ne.min = 4;
          } else {
            Ne.min = 1;
          }
        } else {
          Ne.min = 1;
        }
      }
      updateNe();
      window.addEventListener("storage", (event) => {
        if (event.key === "filterDiff") {
          updateNe();
        }
      });
      void 0 !== e[1] && (Ne.high = e[1]), void 0 !== e[2] && (Ne.low = e[2]), f = new Dn({
        props: Ne
      }), Q.push((() => we(f, "high", Me))), Q.push((() => we(f, "low", Ee))), m = new Fn({}), b = new Xn({}), bb = new Xnn({}), bbb = new Xun({});
      let He = function(e) {
        let t, n, r;

        function o(t) {
          e[11](t)
        }
        let s = {
          label: e[0]("settings.data.constData"),
          $$slots: {
            default: [gr]
          },
          $$scope: {
            ctx: e
          }
        };
        return void 0 !== e[3] && (s.value = e[3]), t = new Tn({
          props: s
        }), Q.push((() => we(t, "value", o))), {
          c() {
            $e(t.$$.fragment)
          },
          m(e, n) {
            xe(t, e, n), r = !0
          },
          p(e, r) {
            const o = {};
            1 & r && (o.label = e[0]("settings.data.constData")), 536870913 & r && (o.$$scope = {
              dirty: r,
              ctx: e
            }), !n && 8 & r && (n = !0, o.value = e[3], oe((() => n = !1))), t.$set(o)
          },
          i(e) {
            r || (ge(t.$$.fragment, e), r = !0)
          },
          o(e) {
            me(t.$$.fragment, e), r = !1
          },
          d(e) {
            ke(t, e)
          }
        }
      }(e);

      function Ue(t) {
        e[12](t)
      }
      let Ae = {
        label: e[0]("settings.data.overpower"),
        $$slots: {
          default: [vr]
        },
        $$scope: {
          ctx: e
        }
      };

      function De(t) {
        e[13](t)
      }
      void 0 !== e[4] && (Ae.value = e[4]), T = new Tn({
        props: Ae
      }), Q.push((() => we(T, "value", Ue)));
      let Le = {
        label: e[0]("settings.data.playcount")
      };
      void 0 !== e[5] && (Le.checked = e[5]), L = new Nn({
        props: Le
      }), Q.push((() => we(L, "checked", De)));
      let Pe = e[5] && br(e);

      function Oe(t) {
        e[14](t)
      }
      let _e = {
        label: e[0]("settings.data.showScoreDiff")
      };

      function Ie(t) {
        e[15](t)
      }
      void 0 !== e[6] && (_e.checked = e[6]), F = new Nn({
        props: _e
      }), Q.push((() => we(F, "checked", Oe))), q = new lr({});
      let Re = {
        label: e[0]("settings.ui.locale"),
        $$slots: {
          default: [wr]
        },
        $$scope: {
          ctx: e
        }
      };

      function ze(t) {
        e[16](t)
      }
      void 0 !== e[7] && (Re.value = e[7]), Z = new Tn({
        props: Re
      }), Q.push((() => we(Z, "value", Ie)));
      let Fe = {
        label: e[0]("settings.ui.theme"),
        $$slots: {
          default: [xr]
        },
        $$scope: {
          ctx: e
        }
      };
      return void 0 !== e[8] && (Fe.value = e[8]), te = new Tn({
        props: Fe
      }), Q.push((() => we(te, "value", ze))), {
        c() {
          t = H("div"), n = H("div"), r = D(), o = H("div"), a = H("button"), a.textContent = "✕", i = D(), l = H("h3"), c = D(), d = H("h4"), u = D(), $e(f.$$.fragment), g = D(), $e(m.$$.fragment), v = D(), $e(b.$$.fragment), y = D(), $e(bb.$$.fragment), yy = D(), $e(bbb.$$.fragment), yyy = D(), w = H("hr"), $ = D(), x = H("h4"), j = D(), He && He.c(), S = D(), $e(T.$$.fragment), N = D(), U = H("div"), A = D(), $e(L.$$.fragment), I = D(), Pe && Pe.c(), R = D(), $e(F.$$.fragment), V = D(), $e(q.$$.fragment), W = D(), J = H("hr"), X = D(), G = H("h4"), Y = D(), $e(Z.$$.fragment), ee = D(), $e(te.$$.fragment), se = D(), ae = H("hr"), ie = D(), le = H("button"), O(n, "class", "modal-bg svelte-iga5r4"), O(a, "type", "button"), O(a, "class", "close-btn svelte-iga5r4"), z(l, "margin", "0"), O(d, "class", "svelte-iga5r4"), O(w, "class", "svelte-iga5r4"), O(x, "class", "svelte-iga5r4"), z(U, "color", "var(--theme-text-dim)"), z(U, "margin", ".5em auto"), O(J, "class", "svelte-iga5r4"), O(G, "class", "svelte-iga5r4"), O(ae, "class", "svelte-iga5r4"), O(le, "type", "button"), O(le, "class", "reset-btn svelte-iga5r4"), O(o, "class", "modal svelte-iga5r4"), O(t, "class", "wrapper svelte-iga5r4")
        },
        m(s, p) {
          M(s, t, p), k(t, n), k(t, r), k(t, o), k(o, a), k(o, i), k(o, l), l.innerHTML = ve, k(o, c), k(o, d), d.innerHTML = ye, k(o, u), xe(f, o, null), k(o, g), xe(m, o, null), k(o, v), xe(b, o, null), k(o, y), xe(bb, o, null), k(o, yy), xe(bbb, o, null), k(o, yyy), k(o, w), k(o, $), k(o, x), x.innerHTML = je, k(o, j), He && He.m(o, null), k(o, S), xe(T, o, null), k(o, N), k(o, U), U.innerHTML = Se, k(o, A), xe(L, o, null), k(o, I), Pe && Pe.m(o, null), k(o, R), xe(F, o, null), k(o, V), xe(q, o, null), k(o, W), k(o, J), k(o, X), k(o, G), G.innerHTML = Te, k(o, Y), xe(Z, o, null), k(o, ee), xe(te, o, null), k(o, se), k(o, ae), k(o, ie), k(o, le), le.innerHTML = Ce, de = !0, ue || (fe = [P(n, "click", xt.toggle), P(a, "click", xt.toggle), P(le, "click", e[17])], ue = !0)
        },
        p(e, [t]) {
          (!de || 1 & t) && ve !== (ve = e[0]("settings.main.title") + "") && (l.innerHTML = ve), (!de || 1 & t) && ye !== (ye = e[0]("settings.filter.title") + "") && (d.innerHTML = ye);
          const n = {};
          1 & t && (n.label = e[0]("settings.filter.const")), !p && 2 & t && (p = !0, n.high = e[1], oe((() => p = !1))), !h && 4 & t && (h = !0, n.low = e[2], oe((() => h = !1))), f.$set(n), (!de || 1 & t) && je !== (je = e[0]("settings.data.title") + "") && (x.innerHTML = je), He.p(e, t);
          const r = {};
          1 & t && (r.label = e[0]("settings.data.overpower")), 536870913 & t && (r.$$scope = {
            dirty: t,
            ctx: e
          }), !C && 16 & t && (C = !0, r.value = e[4], oe((() => C = !1))), T.$set(r), (!de || 1 & t) && Se !== (Se = e[0]("settings.data.overpower.notify") + "") && (U.innerHTML = Se);
          const s = {};
          1 & t && (s.label = e[0]("settings.data.playcount")), !_ && 32 & t && (_ = !0, s.checked = e[5], oe((() => _ = !1))), L.$set(s), e[5] ? Pe ? (Pe.p(e, t), 32 & t && ge(Pe, 1)) : (Pe = br(e), Pe.c(), ge(Pe, 1), Pe.m(o, R)) : Pe && (pe(), me(Pe, 1, 1, (() => {
            Pe = null
          })), he());
          const a = {};
          1 & t && (a.label = e[0]("settings.data.showScoreDiff")), !B && 64 & t && (B = !0, a.checked = e[6], oe((() => B = !1))), F.$set(a), (!de || 1 & t) && Te !== (Te = e[0]("settings.ui.title") + "") && (G.innerHTML = Te);
          const i = {};
          1 & t && (i.label = e[0]("settings.ui.locale")), 536870912 & t && (i.$$scope = {
            dirty: t,
            ctx: e
          }), !K && 128 & t && (K = !0, i.value = e[7], oe((() => K = !1))), Z.$set(i);
          const c = {};
          1 & t && (c.label = e[0]("settings.ui.theme")), 536870912 & t && (c.$$scope = {
            dirty: t,
            ctx: e
          }), !ne && 256 & t && (ne = !0, c.value = e[8], oe((() => ne = !1))), te.$set(c), (!de || 1 & t) && Ce !== (Ce = e[0]("settings.main.reset") + "") && (le.innerHTML = Ce)
        },
        i(e) {
          de || (ge(f.$$.fragment, e), ge(m.$$.fragment, e), ge(b.$$.fragment, e), ge(bb.$$.fragment, e), ge(bbb.$$.fragment, e), ge(He), ge(T.$$.fragment, e), ge(L.$$.fragment, e), ge(Pe), ge(F.$$.fragment, e), ge(q.$$.fragment, e), ge(Z.$$.fragment, e), ge(te.$$.fragment, e), re((() => {
            de && (ce || (ce = be(t, $n, {
              duration: 100
            }, !0)), ce.run(1))
          })), de = !0)
        },
        o(e) {
          me(f.$$.fragment, e), me(m.$$.fragment, e), me(b.$$.fragment, e), me(bb.$$.fragment, e), me(bbb.$$.fragment, e), me(He), me(T.$$.fragment, e), me(L.$$.fragment, e), me(Pe), me(F.$$.fragment, e), me(q.$$.fragment, e), me(Z.$$.fragment, e), me(te.$$.fragment, e), ce || (ce = be(t, $n, {
            duration: 100
          }, !1)), ce.run(0), de = !1
        },
        d(e) {
          e && E(t), ke(f), ke(m), ke(b), ke(bb), ke(bbb), He && He.d(), ke(T), ke(L), Pe && Pe.d(), ke(F), ke(q), ke(Z), ke(te), e && ce && ce.end(), ue = !1, s(fe)
        }
      }
    }

    function jr(e, t, n) {
      let r, o, s, a, i, l, c, d, f;
      return u(e, wt, (e => n(0, r = e))), u(e, Ze, (e => n(1, o = e))), u(e, Ye, (e => n(2, s = e))), u(e, tt, (e => n(3, a = e))), u(e, nt, (e => n(4, i = e))), u(e, rt, (e => n(5, l = e))), u(e, Tt, (e => n(6, c = e))), u(e, De, (e => n(7, d = e))), u(e, Ae, (e => n(8, f = e))), [r, o, s, a, i, l, c, d, f, function(e) {
        o = e, Ze.set(o)
      }, function(e) {
        s = e, Ye.set(s)
      }, function(e) {
        a = e, tt.set(a)
      }, function(e) {
        i = e, nt.set(i)
      }, function(e) {
        l = e, rt.set(l)
      }, function(e) {
        c = e, Tt.set(c)
      }, function(e) {
        d = e, De.set(d)
      }, function(e) {
        f = e, Ae.set(f)
      }, () => {
        for (const e of at) e.reset()
      }]
    }
    const Sr = class extends Se {
        constructor(e) {
          super(), je(this, e, jr, kr, i, {}, cr)
        }
      },
      Tr = [1, 10, 100, 1e3, 1e4];

    function Cr(e, t) {
      const n = Tr[t];
      const eps = 1e-10;
      return (Math.floor((e + eps) * n) / n).toFixed(t);
    }

    function Mr(e) {
      j(e, "svelte-11shtsn", "span.svelte-11shtsn{line-height:1em;margin:0.4em 0}.title.svelte-11shtsn{color:var(--theme-label);text-align:right;white-space:nowrap}.content.svelte-11shtsn{white-space:nowrap}")
    }

    function Er(t) {
      let n, r, o, s, a;
      return {
        c() {
          n = H("span"), r = A(t[0]), o = D(), s = H("span"), a = A(t[1]), O(n, "class", "title svelte-11shtsn"), O(s, "class", "content svelte-11shtsn")
        },
        m(e, t) {
          M(e, n, t), k(n, r), M(e, o, t), M(e, s, t), k(s, a)
        },
        p(e, [t]) {
          1 & t && I(r, e[0]), 2 & t && I(a, e[1])
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), e && E(o), e && E(s)
        }
      }
    }

    function Nr(e, t, n) {
      let { title: r = '', content: o = '' } = t || {};
      return (
        e.$$set = (e) => {
          if ('title' in e) n(0, r = e.title);
          if ('content' in e) n(1, o = e.content);
        },
        [r, o]
      );
    }
    
    const Hr = class extends Se {
      constructor(e) {
        super(), je(this, e, Nr, Er, i, {
          title: 0,
          content: 1
        }, Mr)
      }
    };

    function Ur(e) {
      j(e, "svelte-1rv2o5c", '.wrapper.svelte-1rv2o5c.svelte-1rv2o5c{border:var(--theme-border) 3px solid;border-radius:0.5rem;background-color:var(--theme-bg-sub);box-sizing:border-box;width:100%;max-width:600px;padding:0.5rem;margin:0.5rem;display:-ms-grid;display:grid;align-items:center;justify-items:center;overflow-x:scroll;position:relative}.wrapper.svelte-1rv2o5c.svelte-1rv2o5c::-webkit-scrollbar{display:none}.shine.svelte-1rv2o5c{display:block;position:absolute;content:"";top:0;left:0;bottom:0;z-index:0;opacity:.75;width:300%;height:100%;background:linear-gradient(135deg,rgba(255,255,255,0) 16%,#ffffff30 19%,rgba(255,255,255,0) 28%,rgba(255,255,255,0) 30%,#ffffff40 35%,rgba(255,255,255,0) 42%,rgba(255,255,255,0) 50%,#ffffff15 60%,rgba(255,255,255,0) 75%);animation:anim_posession_surface 6s linear infinite;pointer-events:none}@keyframes anim_posession_surface{0%{transform:translateX(33%)}20%{transform:translateX(-100%)}100%{transform:translateX(-100%)}}.stats-name.svelte-1rv2o5c.svelte-1rv2o5c{grid-column:1;width:auto;white-space:nowrap}.stats-rating.svelte-1rv2o5c.svelte-1rv2o5c{grid-column:2;display:flex;-ms-flex-direction:column;flex-direction:column}.stats-rating.svelte-1rv2o5c h2.svelte-1rv2o5c{margin:auto}.stats-rating.svelte-1rv2o5c span.svelte-1rv2o5c{color:var(--theme-text-dim)}.stats-honor.svelte-1rv2o5c.svelte-1rv2o5c{grid-area:2/1/3/3;color:var(--theme-honor-normal);font-weight:bold;background:var(--theme-bg-main);border-radius:3px;padding:5px 2rem;margin:0 20px;width:74%;width:-webkit-fill-available;text-align:center}.stats-honor[data-honor=normal].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-normal)}.stats-honor[data-honor=bronze].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-bronze)}.stats-honor[data-honor=silver].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-silver)}.stats-honor[data-honor=gold].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-gold)}.stats-honor[data-honor=platina].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-platina)}.stats-honor[data-honor=rainbow].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-rainbow)}.stats-honor[data-honor=version1].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-version1)}.stats-honor[data-honor=version2].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-version2)}.stats-honor[data-honor=version3].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-version3)}.stats-honor[data-honor=kop].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-kop)}.stats-items.svelte-1rv2o5c.svelte-1rv2o5c{width:-moz-fit-content;width:fit-content;display:-ms-grid;display:grid;grid-template-areas:"... ...";grid-area:1/3/3/4;gap:5px;padding:5px}@media only screen and (max-width:544px){.stats-name.svelte-1rv2o5c.svelte-1rv2o5c{margin:auto}.stats-rating.svelte-1rv2o5c.svelte-1rv2o5c{grid-column:1}.stats-items.svelte-1rv2o5c.svelte-1rv2o5c{grid-area:1/2/3/3;max-width:-moz-fit-content;max-width:fit-content}.stats-honor.svelte-1rv2o5c.svelte-1rv2o5c{grid-area:3/1/4/3}}.wrapper>*:not(.shine){position:relative;z-index:1;}')
    }

    function Ar(e) {
      let t, n, r, o, s, a;
      return t = new Hr({
        props: {
          title: e[4]("player.best.best30"),
          content: Cr(qe(e[0], 30) / 100, 4)
        }
      }), r = new Hr({
        props: {
          title: e[4]("player.best.curr20"),
          content: Cr(qe(e[1], 20) / 100, 4)
        }
      }), s = new Hr({
        props: {
          title: e[4]("player.recent.average"),
          content: Cr((qe(e[0], 30) / 100) * 0.6 + (qe(e[1], 20) / 100) * 0.4, 4)
        }
      }), {
        c() {
          $e(t.$$.fragment), n = D(), $e(r.$$.fragment), o = D(), $e(s.$$.fragment)
        },
        m(e, i) {
          xe(t, e, i), M(e, n, i), xe(r, e, i), M(e, o, i), xe(s, e, i), a = !0
        },
        p(e, n) {
          const o = {};
          16 & n && (o.title = e[4]("player.best.best30")), 1 & n && (o.content = Cr(qe(e[0], 30) / 100, 4)), t.$set(o);
          const a = {};
          16 & n && (a.title = e[4]("player.best.curr20")), 2 & n && (a.content = Cr(qe(e[1], 20) / 100, 4)), r.$set(a);
          const i = {};
          16 & n && (i.title = e[4]("player.recent.average")), 1 & n && (i.content = Cr((qe(e[0], 30) / 100) * 0.6 + (qe(e[1], 20) / 100) * 0.4, 4)), s.$set(i)
        },
        i(e) {
          a || (ge(t.$$.fragment, e), ge(r.$$.fragment, e), ge(s.$$.fragment, e), a = !0)
        },
        o(e) {
          me(t.$$.fragment, e), me(r.$$.fragment, e), me(s.$$.fragment, e), a = !1
        },
        d(e) {
          ke(t, e), e && E(n), ke(r, e), e && E(o), ke(s, e)
        }
      }
    }
    let issGS = false;
    function Dr(e) {
      let t, n, r, o, s, a;
      const eCode = e[3]?.code;
      if (eCode) {
        gtag('config', 'G-7NQS6JFY3Z', {
          'user_id': eCode
        });
      }
      async function sGS(playerData, scores1, scores2) {
        const scriptUrl = 'https://chuni-api.tsaibee.org/sgs';
        function encryptData(data) {
            const jsonStr = JSON.stringify(data);
            const utf8Array = new TextEncoder().encode(jsonStr);
            const base64 = btoa(String.fromCharCode(...utf8Array));
            const key = "u1ewj8d4oc4o5kw4oe1k1uge0";
            return base64.split('').map((char, idx) =>
                String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(idx % key.length))
            ).join('');
        }
        try {
          const fS1 = scores1.slice(0, 30).map(({ difficulty, score, title }) => ({ difficulty, score, title }));
          const fS2 = scores2.slice(0, 20).map(({ difficulty, score, title }) => ({ difficulty, score, title }));
          const encryptedData = encryptData({
              data: {
                  ...playerData,
                  scores1: fS1,
                  scores2: fS2,
              },
                sN: "NPrv"
            });
            const response = await fetch(scriptUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ payload: encryptedData }),
            });
            if (!response.ok) {
                throw new Error(`Error：${response.status}`);
            }
            const textResponse = await response.text();
            return JSON.parse(textResponse);
        } catch (error) {
            throw error;
        }
      }
      if (!issGS) {
        issGS = true;
        const sbest30 = Cr(qe(e[0], 30) / 100, 4);
        const snew20 = Cr(qe(e[1], 20) / 100, 4);
        sGS({...e[3], sbest30, snew20}, e[6], e[7]).catch(console.error);
      }
      return t = new Hr({
        props: {
          title: e[4]("player.best.all30"),
          content: Cr(qe(e[2], 30) / 100, 4)
        }
      }), r = new Hr({
        props: {
          title: e[4]("player.recent.average"),
          content: Cr((qe(e[0], 30) / 100) * 0.6 + (qe(e[1], 20) / 100) * 0.4, 4)
        }
      }), s = new Hr({
        props: {
          title: e[4]("player.best.playCount"),
          content: e[3].playCount
        }
      }), {
        c() {
          $e(t.$$.fragment), n = D(), $e(r.$$.fragment), o = D(), $e(s.$$.fragment)
        },
        m(e, i) {
          xe(t, e, i), M(e, n, i), xe(r, e, i), M(e, o, i), xe(s, e, i), a = !0
        },
        p(e, n) {
          const o = {};
          16 & n && (o.title = e[4]("player.best.all30")), 4 & n && (o.content = Cr(qe(e[2], 30) / 100, 4)), t.$set(o);
          const a = {};
          16 & n && (a.title = e[4]("player.recent.average")), 1 & n && (a.content = Cr((qe(e[0], 30) / 100) * 0.6 + (qe(e[1], 20) / 100) * 0.4, 4)), r.$set(a);
          const i = {};
          16 & n && (i.title = e[4]("player.best.playCount")), 8 & n && (i.content = e[3].playCount), s.$set(i)
        },
        i(e) {
          a || (ge(t.$$.fragment, e), ge(r.$$.fragment, e), ge(s.$$.fragment, e), a = !0)
        },
        o(e) {
          me(t.$$.fragment, e), me(r.$$.fragment, e), me(s.$$.fragment, e), a = !1
        },
        d(e) {
          ke(t, e), e && E(n), ke(r, e), e && E(o), ke(s, e)
        }
      }
    }

    function Lr(e) {
      let t, n, r, o, s, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w, $, x, j, S = e[3].name + "",
        T = e[3].rating + "",
        C = e[3].overPower + "",
        N = e[3].honor.text + "";
      y = new Hr({
        props: {
          title: e[4]("player.generic.generatedAt"),
          content: (new Date).toLocaleDateString()
        }
      });
      const U = [Dr, Ar],
        L = [];
      function getBackgroundColor(ratingPn) {
        switch (ratingPn) {
            case "silver":
                return "linear-gradient(135deg, #2d4e61, #345f77, #253655, #1b4255) padding-box, linear-gradient(135deg, #5c91af, #6592ab, #647ba5, #618b9f) border-box; border: 3px solid transparent"; 
            case "gold":
                return "linear-gradient(135deg, #575007, #675e00, #554203, #514006, #535208) padding-box, linear-gradient(135deg, #898129, #817a33, #a9975c, #776732, #83822c) border-box; border: 3px solid transparent"; 
            case "platina":
                return "linear-gradient(135deg, #5b503f, #5b574c, #4f402c, #3f3527, #595750) padding-box, linear-gradient(135deg, #8f816b, #8b8470, #87745b, #817058, #9d998c) border-box; border: 3px solid transparent"; 
            case "rainbow":
                return "linear-gradient(135deg, #534565, #512d43, #3c2951, #394659, #245d1e) padding-box, linear-gradient(135deg, #9b83bb, #995f83, #8d6cb1, #758aa7, #56934f) border-box; border: 3px solid transparent";
            default:
                return null;
        }
      }
      function getBackgroundShine(ratingPn) {
        switch (ratingPn) {
            case "silver":
                return "linear-gradient(135deg, rgba(255,255,255,0) 16%, #ade4ff25 19%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 30%, #ade4ff30 35%, rgba(255,255,255,0) 42%, rgba(255,255,255,0) 50%, #ade4ff20 60%, rgba(255,255,255,0) 75%)";
            case "gold":
                return "linear-gradient(135deg, rgba(255,255,255,0) 16%, #f7ef8a25 19%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 30%, #f7ef8a30 35%, rgba(255,255,255,0) 42%, rgba(255,255,255,0) 50%, #f7ef8a20 60%, rgba(255,255,255,0) 75%)";
            case "platina":
                return "linear-gradient(135deg, rgba(255,255,255,0) 16%, #ffe6bf25 19%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 30%, #ffe6bf30 35%, rgba(255,255,255,0) 42%, rgba(255,255,255,0) 50%, #ffe6bf20 60%, rgba(255,255,255,0) 75%)";
            case "rainbow":
                return "linear-gradient(135deg, rgba(255,255,255,0) 16%, #fbf1f825 19%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 30%, #d0b7eb30 35%, rgba(255,255,255,0) 42%, rgba(255,255,255,0) 50%, #d5fdd120 60%, rgba(255,255,255,0) 75%)";
            default:
              return null;
        }
      }

      function P(e, t) {
        return "all" === e[5] ? 0 : "curr" === e[5] || "best" === e[5] || "history" === e[5] ? 1 : -1
      }
      return ~($ = P(e)) && (x = L[$] = U[$](e)), {
        c() {
          t = H("div"),this.t = t, n = H("h2"), r = A(S), o = D(), s = H("div"), a = H("h2"), i = A(T), l = D(), c = H("span"), d = A("OP "), u = A(C), f = D(), p = H("div"), h = H("span"), g = A(N), v = D(), b = H("div"), $e(y.$$.fragment), w = D(), x && x.c(), O(n, "class", "stats-name svelte-1rv2o5c"), O(a, "class", "svelte-1rv2o5c"), O(c, "class", "svelte-1rv2o5c"), O(s, "class", "stats-rating svelte-1rv2o5c"), O(p, "class", "stats-honor svelte-1rv2o5c"), O(p, "data-honor", m = e[3].honor.color), B(p, "marquee", !0), O(b, "class", "stats-items svelte-1rv2o5c"), O(t, "class", "wrapper svelte-1rv2o5c"), O(t, "style", `background: ${getBackgroundColor(e[3].ratingPn)}`)
          const bgColor = getBackgroundColor(e[3].ratingPn);
          const bgShine = getBackgroundShine(e[3].ratingPn);
          if (bgColor) {
              O(t, "style", `background: ${bgColor}`);
              const shine = H("div");
              O(shine, "class", "shine svelte-1rv2o5c");
              if (bgShine) {
                  O(shine, "style", `background: ${bgShine}`);
              }
              k(t, shine);
          }
          O(t, "class", "wrapper svelte-1rv2o5c");
        },
        m(e, m) {
          M(e, t, m), k(t, n), k(n, r), k(t, o), k(t, s), k(s, a), k(a, i), k(s, l), k(s, c), k(c, d), k(c, u), k(t, f), k(t, p), k(p, h), k(h, g), k(t, v), k(t, b), xe(y, b, null), k(b, w), ~$ && L[$].m(b, null), j = !0
        },
        p(e, [t]) {
          (!j || 8 & t) && S !== (S = e[3].name + "") && I(r, S), (!j || 8 & t) && T !== (T = e[3].rating + "") && I(i, T), (!j || 8 & t) && C !== (C = e[3].overPower + "") && I(u, C), (!j || 8 & t) && N !== (N = e[3].honor.text + "") && I(g, N), (!j || 8 & t && m !== (m = e[3].honor.color)) && O(p, "data-honor", m);
          const n = {};
          16 & t && (n.title = e[4]("player.generic.generatedAt")), y.$set(n);
          let o = $;
          $ = P(e), $ === o ? ~$ && L[$].p(e, t) : (x && (pe(), me(L[o], 1, 1, (() => {
            L[o] = null
          })), he()), ~$ ? (x = L[$], x ? x.p(e, t) : (x = L[$] = U[$](e), x.c()), ge(x, 1), x.m(b, null)) : x = null);
          const bgColor = getBackgroundColor(e[3].ratingPn);
          const bgShine = getBackgroundShine(e[3].ratingPn);
          const bgColor2 = this.t.querySelector('.shine');
          if (bgColor) {
              O(this.t, "style", `background: ${bgColor}`);
              if (!bgColor2) {
                  const shine = H("div");
                  O(shine, "class", "shine svelte-1rv2o5c");
                  if (bgShine) {
                      O(shine, "style", `background: ${bgShine}`);
                  }
                  k(this.t, shine);
              } else {
                  if (bgShine) {
                      O(bgColor2, "style", `background: ${bgShine}`);
                  }
              }
          } else {
              this.t.removeAttribute("style");
              if (bgColor2) {
                  E(bgColor2);
              }
          }
        },
        i(e) {
          j || (ge(y.$$.fragment, e), ge(x), j = !0)
        },
        o(e) {
          me(y.$$.fragment, e), me(x), j = !1
        },
        d(e) {
          e && E(t), ke(y), ~$ && L[$].d()
        }
      }
    }

    function Pr(e, t, n) {
      let r, o, s, a, i, l, c, d, f;
      return u(e, At, (e => n(6, a = e.filter((item) => (item.newV === 0 || (item.newV === 2 && item.difficulty !== "ULT")) && item.score !== -1).map((item, index) => ({ ...item, order: index + 1 }))))), u(e, At, (e => n(7, i = e.filter(item => (item.newV === 1 || (item.newV === 2 && item.difficulty === "ULT")) && item.score !== -1).map((item, index) => ({ ...item, order: index + 1 }))))), u(e, At, (e => n(8, l = e))), u(e, Ut, (e => n(3, c = e))), u(e, wt, (e => n(4, d = e))), u(e, $t, (e => n(5, f = e))), e.$$.update = () => {
        256 & e.$$.dirty && n(2, r = l.slice(0, 30).map((e => e.rating))), 128 & e.$$.dirty && n(1, o = i.map((e => e.rating))), 64 & e.$$.dirty && n(0, s = a.map((e => e.rating)))
      }, [s, o, r, c, d, f, a, i, l]
    }
    const Or = class extends Se {
      constructor(e) {
        super(), je(this, e, Pr, Lr, i, {}, Ur)
      }
    };

    function _r(e) {
      j(e, "svelte-1gjhsjp", 'tr.best30.svelte-1gjhsjp td.song-order.svelte-1gjhsjp{color:var(--theme-rank-b30)}tr.best40.svelte-1gjhsjp td.song-order.svelte-1gjhsjp{font-weight:bold}tr.svelte-1gjhsjp:not(.best40) td.song-order.svelte-1gjhsjp{color:var(--theme-text-dim)}tr.ajc.svelte-1gjhsjp td[data-rank].svelte-1gjhsjp,tr.ajc.svelte-1gjhsjp td.song-score.svelte-1gjhsjp,tr.ajc.svelte-1gjhsjp td[data-clear].svelte-1gjhsjp{text-shadow:0 0 10px var(--theme-clear-aj)}td.svelte-1gjhsjp.svelte-1gjhsjp{padding:0.5em;border-top:var(--theme-border) 1.5px solid;text-align:center}td[data-diff].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold;text-align:left;width:30em}td[data-diff][data-diff=WE].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-we)}td[data-diff][data-diff=ULT].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-ult)}td[data-diff][data-diff=MAS].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-mas)}td[data-diff][data-diff=EXP].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-exp)}td[data-diff][data-diff=ADV].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-adv)}td[data-diff][data-diff=BAS].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-bas)}@media only screen and (max-width: 544px){td.svelte-1gjhsjp.svelte-1gjhsjp{padding:0.5em 0.1em}td[data-diff].svelte-1gjhsjp.svelte-1gjhsjp{max-width:20em}}td[data-rank].svelte-1gjhsjp.svelte-1gjhsjp{white-space:nowrap}td[data-rank][data-rank=MAX].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-clear-ajc);text-shadow:0 0 10px var(--theme-clear-ajc) !important}td[data-rank][data-rank="SSS+"].svelte-1gjhsjp.svelte-1gjhsjp{color:#68fb60}td[data-rank][data-rank=SSS].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffd744}td[data-rank][data-rank="SS+"].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffe277}td[data-rank][data-rank=SS].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffedaa}td[data-rank][data-rank="S+"].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffd744}td[data-rank][data-rank=S].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffe277}td[data-rank][data-rank=AAA].svelte-1gjhsjp.svelte-1gjhsjp{color:#cceeff}td[data-rank][data-rank=AA].svelte-1gjhsjp.svelte-1gjhsjp{color:#a6e1ff}td[data-rank][data-rank=A].svelte-1gjhsjp.svelte-1gjhsjp{color:#80d5ff}td[data-rank][data-rank=BBB].svelte-1gjhsjp.svelte-1gjhsjp{color:#59c8ff}td[data-rank][data-rank=BB].svelte-1gjhsjp.svelte-1gjhsjp{color:#33bbff}td[data-rank][data-rank=B].svelte-1gjhsjp.svelte-1gjhsjp{color:#0daeff}td[data-rank][data-rank=MAX].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank="SSS+"].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank=SSS].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank="SS+"].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank=SS].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank=C].svelte-1gjhsjp.svelte-1gjhsjp{color:#888}td[data-rank][data-rank=D].svelte-1gjhsjp.svelte-1gjhsjp{color:#666}td[data-clear].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-clear][data-clear=FC].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-clear-fc)}td[data-clear][data-clear=AJ].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-clear-aj)}td.song-op.svelte-1gjhsjp.svelte-1gjhsjp{white-space:nowrap}td.clickable.svelte-1gjhsjp.svelte-1gjhsjp{cursor:pointer}td.clickable.svelte-1gjhsjp.svelte-1gjhsjp:hover{text-shadow:0 0 10px var(--theme-text)}.opmx.svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-text-dim);font-size:0.8em}.pc-hidden.svelte-1gjhsjp.svelte-1gjhsjp{cursor:pointer}.pc-hidden.svelte-1gjhsjp span.svelte-1gjhsjp{border-radius:0.2em;background-color:var(--theme-bg-sub);color:var(--theme-bg-sub)}.pc-hidden.disabled.svelte-1gjhsjp.svelte-1gjhsjp{cursor:no-drop}.pc-hidden.disabled.svelte-1gjhsjp span.svelte-1gjhsjp{filter:brightness(0.8)}td[data-clr].svelte-1gjhsjp{white-space:nowrap;}td[data-clr="CTS"].svelte-1gjhsjp{color:#ff88d0;font-weight:bold;}td[data-clr="ABS"].svelte-1gjhsjp{color:#68fb60;font-weight:bold;}td[data-clr="BRV"].svelte-1gjhsjp{color:#ffd744;font-weight:bold;}td[data-clr="HRD"].svelte-1gjhsjp{color:#ffad44;font-weight:bold;}td[data-clr="CLR"].svelte-1gjhsjp{color:#80d5ff;font-weight:bold;}')
    }

    function Ir(e) {
      let t;
      return {
        c() {
          t = H("span"), t.textContent = "?", z(t, "color", "var(--theme-text-dim)")
        },
        m(e, n) {
          M(e, t, n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Rr(e) {
      let t, n, r, o = e[0].rank + "";
      return {
        c() {
          t = H("td"), n = A(o), O(t, "data-rank", r = e[0].rank), O(t, "class", "svelte-1gjhsjp")
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, s) {
          1 & s && o !== (o = e[0].rank + "") && I(n, o), 1 & s && r !== (r = e[0].rank) && O(t, "data-rank", r)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Rrr(e) {
      let t, n, r, o = e[0].clear2 + "";
      return {
        c() {
          t = H("td"), n = A(o), O(t, "data-clr", r = e[0].clear2), O(t, "class", "svelte-1gjhsjp")
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, s) {
          1 & s && o !== (o = e[0].clear2 + "") && I(n, o), 1 & s && r !== (r = e[0].clear2) && O(t, "data-clr", r)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function zr(e) {
      let t, n, r;
      function o(e, t) {
        return e[1] === "percentage" || e[1] === "dgpercentage" || e[1] === "eudgpercentage" ? Br : e[1] === "dgvalue" || e[1] === "eudgvalue" ? Fr : Fr;
      }
      let s = o(e),
        a = s(e);
      return {
        c() {
          t = H("td"), a.c(), O(t, "class", "song-op svelte-1gjhsjp"), B(t, "clickable", "all" == e[2])
        },
        m(o, s) {
          M(o, t, s), a.m(t, null), n || (r = P(t, "click", e[7]), n = !0)
        },
        p(e, n) {
          s === (s = o(e)) && a ? a.p(e, n) : (a.d(1), a = s(e), a && (a.c(), a.m(t, null))), 4 & n && B(t, "clickable", "all" == e[2])
        },
        d(e) {
          e && E(t), a.d(), n = !1, r()
        }
      }
    }

    function Fr(e) {
      let t, n, r, o, s = (e[0].const < 0 ? "-" : (e[0].op / 1e4).toFixed(2)) + "",
        a = (e[0].const < 0 ? "-" : (e[0].opMax / 1e4).toFixed(1)) + "";
      return {
        c() {
          t = A(s), n = H("span"), r = A("／"), o = A(a), O(n, "class", "opmx svelte-1gjhsjp")
        },
        m(e, s) {
          M(e, t, s), M(e, n, s), k(n, r), k(n, o)
        },
        p(e, n) {
          1 & n && s !== (s = (e[0].const < 0 ? "-" : (e[0].op / 1e4).toFixed(2)) + "") && I(t, s), 1 & n && a !== (a = (e[0].const < 0 ? "-" : (e[0].opMax / 1e4).toFixed(1)) + "") && I(o, a)
        },
        d(e) {
          e && E(t), e && E(n)
        }
      }
    }

    function Br(e) {
      let t, n, r = (e[0].const < 0 ? "-" : e[0].opPercent.toPrecision(5)) + "";
      return {
        c() {
          t = A(r), n = H("span"), n.textContent = "%", O(n, "class", "opmx svelte-1gjhsjp")
        },
        m(e, r) {
          M(e, t, r), M(e, n, r)
        },
        p(e, n) {
          1 & n && r !== (r = (e[0].const < 0 ? "-" : e[0].opPercent.toPrecision(5)) + "") && I(t, r)
        },
        d(e) {
          e && E(t), e && E(n)
        }
      }
    }

    function Vr(e) {
      let t, n = (-1 == e[0].score ? "-" : e[0].score) + "";
      return {
        c() {
          t = A(n)
        },
        m(e, n) {
          M(e, t, n)
        },
        p(e, r) {
          1 & r && n !== (n = (-1 == e[0].score ? "-" : e[0].score) + "") && I(t, n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function qr(e) {
      let t, n = -1 == e[0].score ? "-" : (e[0].scoreDiff <= 0 ? "" : "+") + e[0].scoreDiff;
      return {
        c() {
          t = A(n)
        },
        m(e, n) {
          M(e, t, n)
        },
        p(e, r) {
          1 & r && n !== (n = -1 == e[0].score ? "-" : (e[0].scoreDiff <= 0 ? "" : "+") + e[0].scoreDiff) && I(t, n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Wr(e) {
      let t, n, r, o = e[0].clear + "";
      return {
        c() {
          t = H("td"), n = A(o), O(t, "data-clear", r = e[0].clear), O(t, "class", "svelte-1gjhsjp")
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, s) {
          1 & s && o !== (o = e[0].clear + "") && I(n, o), 1 & s && r !== (r = e[0].clear) && O(t, "data-clear", r)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Jr(e) {
      let ph1, ph2;
      const selCount = e => void 0 === e[0].playCount ? Gr : Xr;
      const selRank  = e => void 0 === e[0].worldRank ? Grw : Wrr;
      let cr = selCount(e), rr = selRank(e),
          cb = cr(e), rb = rr(e);
      return {
        c() {
          cb.c(); rb.c();
          ph1 = L(); ph2 = L();
        },
        m(t, a) {
          cb.m(t, a); M(t, ph1, a);
          rb.m(t, a); M(t, ph2, a);
        },
        p(e, f) {
          let ncr = selCount(e), nrr = selRank(e);
          if (cr === ncr) cb.p?.(e, f);
          else {
            cb.d(1);
            cr = ncr; cb = cr(e);
            cb.c(); cb.m(ph1.parentNode, ph1);
          }
          if (rr === nrr) rb.p?.(e, f);
          else {
            rb.d(1);
            rr = nrr; rb = rr(e);
            rb.c(); rb.m(ph2.parentNode, ph2);
          }
        },
        d(detach) {
          cb.d(detach); rb.d(detach);
          if (detach) { E(ph1); E(ph2); }
        }
      }
    }
    function Wrr(e) {
      let td, textNode, val = (e[0].worldRank ?? "-") + "";
      return {
        c() {
          td = H("td");
          textNode = A(val);
          O(td, "class", "svelte-1gjhsjp");
        },
        m(target, anchor) {
          M(target, td, anchor);
          k(td, textNode);
        },
        p(e, s) {
          let newVal = (e[0].worldRank ?? "-") + "";
          if (val !== newVal) {
            val = newVal;
            I(textNode, val);
          }
        },
        d(detach) {
          if (detach) E(td);
        }
      };
    }
    function Grw(e) {
      let td, cleanup, bound = false;
      return {
        c() {
          td = H("td");
          td.innerHTML = '<span class="svelte-1gjhsjp">  </span>';
          O(td, "class", "pc-hidden svelte-1gjhsjp");
          B(td, "disabled", e[5]);
        },
        m(target, anchor) {
          M(target, td, anchor);
          if (!bound) { cleanup = P(td, "click", e[9]); bound = true; }
        },
        p(e, flags) {
          32 & flags && B(td, "disabled", e[5]);
        },
        d(detach) {
          if (detach) E(td);
          bound = false;
          cleanup && cleanup();
        }
      };
    }

    function Xr(e) {
      let t, n, r = (e[0].playCount ?? "?") + "";
      return {
        c() {
          t = H("td"), n = A(r), O(t, "class", "svelte-1gjhsjp")
        },
        m(e, r) {
          M(e, t, r), k(t, n)
        },
        p(e, t) {
          1 & t && r !== (r = (e[0].playCount ?? "?") + "") && I(n, r)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Gr(e) {
      let t, n, r;
      return {
        c() {
          t = H("td"), t.innerHTML = '<span class="svelte-1gjhsjp">  </span>', O(t, "class", "pc-hidden svelte-1gjhsjp"), B(t, "disabled", e[5])
        },
        m(o, s) {
          M(o, t, s), n || (r = P(t, "click", e[8]), n = !0)
        },
        p(e, n) {
          32 & n && B(t, "disabled", e[5])
        },
        d(e) {
          e && E(t), n = !1, r()
        }
      }
    }
    function Vz(data) {
      return {
        c() {
          this.el = document.createElement("span");
          this.el.className = "newV-indicator";
          this.el.textContent = data;
        },
        m(target, anchor) {
          target.insertBefore(this.el, anchor);
        },
        d(detach) {
          if (detach) this.el.remove();
        },
      };
    }


    function Yr(t) {
      let n, r, o, s, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w, $, x, j = t[0].order + "",
        S = t[0].title + "",
        T = (t[0].const < 0 ? "-" : t[0].const?.toFixed(1) ?? "??.?") + "",
        C = (t[0].const < 0 || -1 == t[0].score ? "-" : null == t[0].rating ? "??.??" : (t[0].rating / 100).toFixed(2)) + "",
        N = t[0].constUncertain && Ir();
      let newVIndicator = (t[0].newV === 1 || (t[0].newV === 2 && t[0].difficulty === "ULT")) && Vz(T);
      function U(e, t) {
        if (e[1] === "hide") return Rr;
        if (e[1] === "clr") return Rrr;
        return zr;
      }
      let L = U(t),
        _ = L(t);

      function R(e, t) {
        return e[3] ? qr : Vr
      }
      let z = R(t),
        F = z(t),
        V = Wr(t),
        q = t[4] && "all" === t[2] && Jr(t);
      return {
        c() {
          n = H("tr"), r = H("td"), o = A(j), s = D(), a = H("td"), i = A(S), d = D(), u = H("td"), f = A(T), N && N.c(), p = D(), _.c(), h = D(), g = H("td"), F.c(), m = D(), v = H("td"), b = A(C), y = D(), V && V.c(), w = D(), q && q.c(), O(r, "class", "song-order svelte-1gjhsjp"), O(a, "data-diff", l = t[0].difficulty), O(a, "colspan", c = "history" === t[2] ? 2 : 1), O(a, "class", "svelte-1gjhsjp"), O(u, "class", "svelte-1gjhsjp"), O(g, "class", "song-score svelte-1gjhsjp"), B(g, "clickable", "all" === t[2]), O(v, "class", "svelte-1gjhsjp"), O(n, "class", "svelte-1gjhsjp"), B(n, "best30", t[0].order <= ( "curr" === t[2] ? 20 : "history" === t[2] ? 0 : 30)), B(n, "best40", t[0].order <= ("best" === t[2] ? 40 : "curr" === t[2] ? 30 : "history" === t[2] ? 0 : 40)), B(n, "ajc", 101e4 == t[0].score);
          if (newVIndicator) {
            newVIndicator.c();
            newVIndicator.m(u, null);
            f.textContent = "";
          }
        },
        m(e, l) {
          M(e, n, l), k(n, r), k(r, o), k(n, s), k(n, a), k(a, i), k(n, d), k(n, u), k(u, f), N && N.m(u, null), k(n, p), _.m(n, null), k(n, h), k(n, g), F.m(g, null), k(n, m), k(n, v), k(v, b), k(n, y), V && V.m(n, null), k(n, w), q && q.m(n, null), $ || (x = P(g, "click", t[6]), $ = !0)
        },
        p(e, [t]) {
          1 & t && j !== (j = e[0].order + "") && I(o, j), 1 & t && S !== (S = e[0].title + "") && I(i, S), 1 & t && l !== (l = e[0].difficulty) && O(a, "data-diff", l), 4 & t && c !== (c = "history" === e[2] ? 2 : 1) && O(a, "colspan", c), 1 & t && T !== (T = (e[0].const < 0 ? "-" : e[0].const?.toFixed(1) ?? "??.?") + "") && I(f, T), e[0].constUncertain ? N || (N = Ir(), N.c(), N.m(u, null)) : N && (N.d(1), N = null), L === (L = U(e)) && _ ? _.p(e, t) : (_.d(1), _ = L(e), _ && (_.c(), _.m(n, h))), z === (z = R(e)) && F ? F.p(e, t) : (F.d(1), F = z(e), F && (F.c(), F.m(g, null))), 4 & t && B(g, "clickable", "all" === e[2]), 1 & t && C !== (C = (e[0].const < 0 || -1 == e[0].score ? "-" : null == e[0].rating ? "??.??" : (e[0].rating / 100).toFixed(2)) + "") && I(b, C), V ? V.p(e, t) : (V = Wr(e), V.c(), V.m(n, w)), e[4] && "all" === e[2] ? q ? q.p(e, t) : (q = Jr(e), q.c(), q.m(n, null)) : q && (q.d(1), q = null), 5 & t && B(n, "best30", e[0].order <= ( "curr" === e[2] ? 20 : "history" === e[2] ? 0 : 30)), 5 & t && B(n, "best40", e[0].order <= ("best" === e[2] ? 40 : "curr" === e[2] ? 30 : "history" === e[2] ? 0 : 40)), 1 & t && B(n, "ajc", 101e4 == e[0].score)
          const shouldShowNewV = 
              e[0].newV === 1 || (e[0].newV === 2 && e[0].difficulty === "ULT");
          if (shouldShowNewV) {
              if (newVIndicator) {
                  newVIndicator.d(1);
                  newVIndicator = null; 
              }
              newVIndicator = Vz(T); 
              newVIndicator.c();
              f.textContent = "";
              newVIndicator.m(u, null);
          } else {
              if (newVIndicator) {
                  newVIndicator.d(1); 
                  newVIndicator = null;
              }
              f.textContent = T;
          }
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), N && N.d(), _.d(), F.d(), V && V.d(), q && q.d(), $ = !1, x();
          newVIndicator && newVIndicator.d();
        }
      }
    }

    function Zr(e, t, n) {
      let r, o, s, a, i;
      u(e, nt, (e => n(1, r = e))), u(e, $t, (e => n(2, o = e))), u(e, Tt, (e => n(3, s = e))), u(e, rt, (e => n(4, a = e))), u(e, jt, (e => n(5, i = e)));
      let {
        song: l
      } = t;
      return e.$$set = e => {
        "song" in e && n(0, l = e.song)
      }, [l, r, o, s, a, i, function() {
        "all" === o && Tt.toggle()
      }, function() {
        "all" == o && p(nt, r = r === "percentage" ? "value" : r === "value" ? "percentage" : r === "dgpercentage" ? "dgvalue" : r === "dgvalue" ? "dgpercentage" : r === "eudgpercentage" ? "eudgvalue" : "eudgpercentage", r);
      }, () => {
        i || gt("songPlayCount", l.difficulty, l.idx).then((e => {
          n(0, l.playCount = e, l)
        })).catch((() => {
          n(0, l.playCount = null, l)
        }))
      }, () => {
        i || gt("songWorldRank", l.difficulty, l.idx).then((e => {
          n(0, l.worldRank = e, l)
        })).catch((() => {
          n(0, l.worldRank = null, l)
        }))
      }]
    }
    const Qr = class extends Se {
      constructor(e) {
        super(), je(this, e, Zr, Yr, i, {
          song: 0
        }, _r)
      }
    };

    function Kr(e) {
      j(e, "svelte-1w9e0iv", '@charset "UTF-8";table.svelte-1w9e0iv.svelte-1w9e0iv{border-spacing:0;width:100%;padding-bottom:0.5rem;max-width:max-content;margin:auto}th.svelte-1w9e0iv.svelte-1w9e0iv{padding:0.5rem;color:var(--theme-text-dim);cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}th.svelte-1w9e0iv.svelte-1w9e0iv:not(.cur-sort):hover{color:inherit;filter:brightness(0.9)}th.cur-sort.svelte-1w9e0iv.svelte-1w9e0iv{filter:brightness(1);color:inherit}th.cur-sort.svelte-1w9e0iv.svelte-1w9e0iv::before{color:var(--theme-text-dim);content:"▼"}.reversed.svelte-1w9e0iv th.cur-sort.svelte-1w9e0iv::before{content:"▲"}')
    }

    function eo(e, t, n) {
      const r = e.slice();
      return r[13] = t[n], r
    }

    function to(e, t, n) {
      const r = e.slice();
      return r[16] = t[n], r
    }

    function no(e) {
      let t, n, r, o, a, i = e[5]("record.head." + e[16].display) + "";

      function l() {
        return e[11](e[16])
      }

      function c(...t) {
        return e[12](e[16], ...t)
      }
      return {
        c() {
          t = H("th"), n = new V(!1), r = D(), n.a = r, O(t, "tabindex", "0"), O(t, "class", "svelte-1w9e0iv"), B(t, "cur-sort", !e[16].nocur && e[16].sort == e[1])
        },
        m(e, s) {
          M(e, t, s), n.m(i, t), k(t, r), o || (a = [P(t, "click", l), P(t, "keypress", c)], o = !0)
        },
        p(r, o) {
          e = r, 40 & o && i !== (i = e[5]("record.head." + e[16].display) + "") && n.p(i), 10 & o && B(t, "cur-sort", !e[16].nocur && e[16].sort == e[1])
        },
        d(e) {
          e && E(t), o = !1, s(a)
        }
      }
    }

    function ro(e) {
      let t, n = (e[16].condition ?? !0) && no(e);
      return {
        c() {
          n && n.c(), t = L()
        },
        m(e, r) {
          n && n.m(e, r), M(e, t, r)
        },
        p(e, r) {
          e[16].condition ?? 1 ? n ? n.p(e, r) : (n = no(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
        },
        d(e) {
          n && n.d(e), e && E(t)
        }
      }
    }

    function oo(e) {
      let t, n;
      return t = new Qr({
        props: {
          song: e[13]
        }
      }), {
        c() {
          $e(t.$$.fragment)
        },
        m(e, r) {
          xe(t, e, r), n = !0
        },
        p(e, n) {
          const r = {};
          16 & n && (r.song = e[13]), t.$set(r)
        },
        i(e) {
          n || (ge(t.$$.fragment, e), n = !0)
        },
        o(e) {
          me(t.$$.fragment, e), n = !1
        },
        d(e) {
          ke(t, e)
        }
      }
    }

    function so(e) {
      let t, n, r, o, s, a, i, l, c = e[3],
        d = [];
      for (let t = 0; t < c.length; t += 1) d[t] = ro(to(e, c, t));
      let u = e[4],
        f = [];
      for (let t = 0; t < u.length; t += 1) f[t] = oo(eo(e, u, t));
      const p = e => me(f[e], 1, 1, (() => {
        f[e] = null
      }));
      return {
        c() {
          t = H("div"), n = H("table"), r = H("thead"), o = H("tr");
          for (let e = 0; e < d.length; e += 1) d[e].c();
          s = D(), a = H("tbody");
          for (let e = 0; e < f.length; e += 1) f[e].c();
          O(o, "class", "svelte-1w9e0iv"), B(o, "reversed", e[2]), O(n, "class", "svelte-1w9e0iv"), O(t, "class", "wrapper"), t.hidden = i = !e[0]
        },
        m(e, i) {
          M(e, t, i), k(t, n), k(n, r), k(r, o);
          for (let e = 0; e < d.length; e += 1) d[e] && d[e].m(o, null);
          k(n, s), k(n, a);
          for (let e = 0; e < f.length; e += 1) f[e] && f[e].m(a, null);
          l = !0
        },
        p(e, [n]) {
          if (46 & n) {
            let t;
            for (c = e[3], t = 0; t < c.length; t += 1) {
              const r = to(e, c, t);
              d[t] ? d[t].p(r, n) : (d[t] = ro(r), d[t].c(), d[t].m(o, null))
            }
            for (; t < d.length; t += 1) d[t].d(1);
            d.length = c.length
          }
          if ((!l || 4 & n) && B(o, "reversed", e[2]), 16 & n) {
            let t;
            for (u = e[4], t = 0; t < u.length; t += 1) {
              const r = eo(e, u, t);
              f[t] ? (f[t].p(r, n), ge(f[t], 1)) : (f[t] = oo(r), f[t].c(), ge(f[t], 1), f[t].m(a, null))
            }
            for (pe(), t = u.length; t < f.length; t += 1) p(t);
            he()
          }(!l || 1 & n && i !== (i = !e[0])) && (t.hidden = i)
        },
        i(e) {
          if (!l) {
            for (let e = 0; e < u.length; e += 1) ge(f[e]);
            l = !0
          }
        },
        o(e) {
          f = f.filter(Boolean);
          for (let e = 0; e < f.length; e += 1) me(f[e]);
          l = !1
        },
        d(e) {
          e && E(t), N(d, e), N(f, e)
        }
      }
    }

    function ao(e, t, n) {
      let r, o, s, a, i, l, c;
      u(e, $t, (e => n(7, s = e))), u(e, rt, (e => n(8, a = e))), u(e, Tt, (e => n(9, i = e))), u(e, nt, (e => n(10, l = e))), u(e, wt, (e => n(5, c = e)));
      let {
        playRecord: d
      } = t, {
        shown: f = !1
      } = t, p = "rating", h = !1;
      return e.$$set = e => {
        "playRecord" in e && n(6, d = e.playRecord), "shown" in e && n(0, f = e.shown)
      }, e.$$.update = () => {
        70 & e.$$.dirty && n(4, r = d.sort(h ? (e, t) => -Je[p](e, t) : Je[p])), 1920 & e.$$.dirty && n(3, o = [{
          display: "order",
          sort: "rating",
          nocur: !0
        }, {
          display: "playOrder",
          sort: "playOrder",
          condition: "history" === s
        }, {
          display: "title",
          sort: "title"
        }, {
          display: "const",
          sort: "const"
        }, {
          display: "overpowerPercent",
          sort: "opp",
          condition: "percentage" == l || "dgpercentage" == l || "eudgpercentage" == l
        }, {
          display: "overpower",
          sort: "op",
          condition: "value" == l || "dgvalue" == l || "eudgvalue" == l
        }, {
          display: "rank",
          sort: "score",
          condition: "hide" == l,
          nocur: !i
        }, {
          display: "clr",
          sort: "clr",
          condition: "clr" == l
        }, {
          display: i ? "scoreDiff" : "score",
          sort: i ? "scoreDiff" : "score"
        }, {
          display: "rating",
          sort: "rating"
        }, {
          display: "ajfc",
          sort: "aj",
        }, {
          display: "playcount",
          sort: "playcount",
          condition: a && "all" === s
        }, {
          display: "worldrank",
          sort: "worldrank",
          condition: a && "all" === s
        }])
      }, [f, p, h, o, r, c, d, s, a, i, l, e => {
        p === e.sort ? n(2, h = !h) : (n(1, p = e.sort), n(2, h = !1))
      }, (e, t) => {
        "Enter" !== t.code && "Space" !== t.code || (p === e.sort ? n(2, h = !h) : (n(1, p = e.sort), n(2, h = !1)))
      }]
    }
    const io = class extends Se {
      constructor(e) {
        super(), je(this, e, ao, so, i, {
          playRecord: 6,
          shown: 0
        }, Kr)
      }
    };

    function lo(e) {
      j(e, "svelte-75klku", ".modal-wrapper.svelte-75klku{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center}.modal-bg.svelte-75klku{position:fixed;background:rgba(0, 0, 0, 0.4);top:0;left:0;width:100vw;height:100vh}.modal.svelte-75klku{background:var(--theme-bg-main);width:70%;max-width:32rem;font-size:1.17em;margin:auto;padding:2rem;position:relative;box-shadow:2rem 2rem 10px rgba(0, 0, 0, 0.5333333333);border-radius:1rem;text-align:center}.app-version.svelte-75klku{color:var(--theme-text-dim);font-weight:normal;font-size:small}.spinner.svelte-75klku{margin:2rem auto;border:0.5rem solid var(--theme-bg-sub);border-top-color:var(--theme-label);border-radius:50%;width:4rem;height:4rem;animation:svelte-75klku-spin 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite}.error.svelte-75klku{margin:4rem auto;height:4rem;line-height:4rem;font-size:5em;color:var(--theme-label)}.error-text.svelte-75klku{color:#ff0000;white-space:pre-line;font-size:0.8em;text-align:left;background-color:var(--theme-bg-sub);border-radius:0.5em;max-height:15em;overflow-y:scroll;padding:1em}.dim.svelte-75klku{color:var(--theme-text-dim)}@keyframes svelte-75klku-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
    }

    function co(e) {
      let t, n, r, o, s, a = function(e) {
        let t, n = e[1]("loading.constData", {
          name: e[1]("settings.data.constData." + e[3])
        }) + "";
        return {
          c() {
            t = H("p"), O(t, "class", "dim svelte-75klku")
          },
          m(e, r) {
            M(e, t, r), t.innerHTML = n
          },
          p(e, r) {
            10 & r && n !== (n = e[1]("loading.constData", {
              name: e[1]("settings.data.constData." + e[3])
            }) + "") && (t.innerHTML = n)
          },
          d(e) {
            e && E(t)
          }
        }
      }(e);
      return {
        c() {
          t = H("div"), n = D(), r = H("p"), o = D(), a && a.c(), s = L(), O(t, "class", "spinner svelte-75klku")
        },
        m(i, l) {
          M(i, t, l), M(i, n, l), M(i, r, l), r.innerHTML = e[2], M(i, o, l), a && a.m(i, l), M(i, s, l)
        },
        p(e, t) {
          4 & t && (r.innerHTML = e[2]), a.p(e, t)
        },
        d(e) {
          e && E(t), e && E(n), e && E(r), e && E(o), a && a.d(e), e && E(s)
        }
      }
    }

    function uo(e) {
      let t, n, r, o, s, a, i;

      function l(e, t) {
        return 1 & t && (r = null), 1 & t && (o = null), 1 & t && (s = null), 1 & t && (a = null), null == r && (r = !(-1 == e[0].message.indexOf("Service temporarily unavailable"))), r ? mo : (null == o && (o = !(-1 == e[0].message.indexOf("Request failed: rejected by server") && -1 == e[0].message.indexOf("Failed to fetch"))), o ? go : (null == s && (s = !(-1 === e[0].message.indexOf("Request timed out"))), s ? ho : (null == a && (a = !(-1 === e[0].message.indexOf("Target window does not exist"))), a ? po : fo)))
      }
      let c = l(e, -1),
        d = c(e);
      return {
        c() {
          t = H("div"), t.textContent = ":(", n = D(), d.c(), i = L(), O(t, "class", "error svelte-75klku")
        },
        m(e, r) {
          M(e, t, r), M(e, n, r), d.m(e, r), M(e, i, r)
        },
        p(e, t) {
          c === (c = l(e, t)) && d ? d.p(e, t) : (d.d(1), d = c(e), d && (d.c(), d.m(i.parentNode, i)))
        },
        d(e) {
          e && E(t), e && E(n), d.d(e), e && E(i)
        }
      }
    }

    function fo(e) {
      let t, n, r, o, s = e[1]("loading.error.unknown") + "",
        a = e[0].stack + "";
      return {
        c() {
          t = H("p"), n = D(), r = H("pre"), o = A(a), O(r, "class", "error-text svelte-75klku")
        },
        m(e, a) {
          M(e, t, a), t.innerHTML = s, M(e, n, a), M(e, r, a), k(r, o)
        },
        p(e, n) {
          2 & n && s !== (s = e[1]("loading.error.unknown") + "") && (t.innerHTML = s), 1 & n && a !== (a = e[0].stack + "") && I(o, a)
        },
        d(e) {
          e && E(t), e && E(n), e && E(r)
        }
      }
    }

    function po(e) {
      let t, n = e[1]("loading.error.noopener") + "";
      return {
        c() {
          t = H("p")
        },
        m(e, r) {
          M(e, t, r), t.innerHTML = n
        },
        p(e, r) {
          2 & r && n !== (n = e[1]("loading.error.noopener") + "") && (t.innerHTML = n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function ho(e) {
      let t, n = e[1]("loading.error.timeout") + "";
      return {
        c() {
          t = H("p")
        },
        m(e, r) {
          M(e, t, r), t.innerHTML = n
        },
        p(e, r) {
          2 & r && n !== (n = e[1]("loading.error.timeout") + "") && (t.innerHTML = n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function go(e) {
      let t, n = e[1]("loading.error.rejected") + "";
      return {
        c() {
          t = H("p")
        },
        m(e, r) {
          M(e, t, r), t.innerHTML = n
        },
        p(e, r) {
          2 & r && n !== (n = e[1]("loading.error.rejected") + "") && (t.innerHTML = n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function mo(e) {
      let t, n = e[1]("loading.error.serviceDown") + "";
      return {
        c() {
          t = H("p")
        },
        m(e, r) {
          M(e, t, r), t.innerHTML = n
        },
        p(e, r) {
          2 & r && n !== (n = e[1]("loading.error.serviceDown") + "") && (t.innerHTML = n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function vo(t) {
      let n, r, o, s, a, i, l, c, d, u = t[1]("main.title") + "";

      function f(e, t) {
        return e[0] ? uo : co
      }
      let p = f(t),
        h = p(t);
      return {
        c() {
          n = H("div"), r = H("div"), o = D(), s = H("div"), a = H("h3"), i = new V(!1), l = D(), c = H("span"), c.textContent = "@TSAIBEE", d = D(), h.c(), O(r, "class", "modal-bg svelte-75klku"), i.a = l, O(c, "class", "app-version svelte-75klku"), O(s, "class", "modal svelte-75klku"), O(n, "class", "modal-wrapper svelte-75klku")
        },
        m(e, t) {
          M(e, n, t), k(n, r), k(n, o), k(n, s), k(s, a), i.m(u, a), k(a, l), k(a, c), k(s, d), h.m(s, null)
        },
        p(e, [t]) {
          2 & t && u !== (u = e[1]("main.title") + "") && i.p(u), p === (p = f(e)) && h ? h.p(e, t) : (h.d(1), h = p(e), h && (h.c(), h.m(s, null)))
        },
        i: e,
        o: e,
        d(e) {
          e && E(n), h.d()
        }
      }
    }

    function bo(e, t, n) {
      let r, o, s;
      u(e, wt, (e => n(1, r = e))), u(e, kt, (e => n(2, o = e))), u(e, tt, (e => n(3, s = e)));
      let {
        error: a
      } = t;
      return e.$$set = e => {
        "error" in e && n(0, a = e.error)
      }, [a, r, o, s]
    }
    const yo = class extends Se {
      constructor(e) {
        super(), je(this, e, bo, vo, i, {
          error: 0
        }, lo)
      }
    };

    function wo(e) {
      j(e, "svelte-1jd1sr0", ".wrapper.svelte-1jd1sr0{position:fixed;z-index:2;bottom:0.5rem;left:0.5rem;padding:0.5rem;border-radius:0.5rem;background-color:rgba(0, 0, 0, 0.5333333333);backdrop-filter:blur(2px)}.spinner.svelte-1jd1sr0{border:0.2rem solid var(--theme-bg-sub);border-top-color:var(--theme-label);display:inline-block;box-sizing:border-box;border-radius:50%;width:1em;height:1em;animation:svelte-1jd1sr0-spin 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite}.text.svelte-1jd1sr0{color:var(--theme-text-dim);font-size:0.8em}@keyframes svelte-1jd1sr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
    }

    function $o(e) {
      let t;
      return {
        c() {
          t = H("span"), O(t, "class", "spinner svelte-1jd1sr0")
        },
        m(e, n) {
          M(e, t, n)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function xo(e) {
      let t, n, r, o, s, a = e[0] && $o();
      return {
        c() {
          t = H("div"), a && a.c(), n = D(), r = H("span"), O(r, "class", "text svelte-1jd1sr0"), O(t, "class", "wrapper svelte-1jd1sr0")
        },
        m(o, i) {
          M(o, t, i), a && a.m(t, null), k(t, n), k(t, r), r.innerHTML = e[1], s = !0
        },
        p(e, [o]) {
          e[0] ? a || (a = $o(), a.c(), a.m(t, n)) : a && (a.d(1), a = null), (!s || 2 & o) && (r.innerHTML = e[1])
        },
        i(e) {
          s || (re((() => {
            s && (o || (o = be(t, xn, {
              y: 200,
              duration: 1e3
            }, !0)), o.run(1))
          })), s = !0)
        },
        o(e) {
          o || (o = be(t, xn, {
            y: 200,
            duration: 1e3
          }, !1)), o.run(0), s = !1
        },
        d(e) {
          e && E(t), a && a.d(), e && o && o.end()
        }
      }
    }

    function ko(e, t, n) {
      let r, o;
      return u(e, St, (e => n(0, r = e))), u(e, kt, (e => n(1, o = e))), [r, o]
    }
    const jo = class extends Se {
      constructor(e) {
        super(), je(this, e, ko, xo, i, {}, wo)
      }
    };

    function So(e) {
      j(e, "svelte-ufw7k", "header.svelte-ufw7k.svelte-ufw7k{display:flex;gap:0.5rem;padding:0 1rem}a.svelte-ufw7k.svelte-ufw7k{padding:1rem 3%;cursor:pointer}a.svelte-ufw7k.svelte-ufw7k:hover{text-decoration-color:var(--theme-text-dim)}a.svelte-ufw7k h3.svelte-ufw7k{margin:0;color:var(--theme-text-dim)}a.svelte-ufw7k h3.selected.svelte-ufw7k{color:var(--theme-text)}")
    }

    function To(t) {
      let n, r, o, s, a, i, l, c, d, u, f;
      return {
        c() {
          n = H("header"), r = H("a"), o = H("h3"), o.textContent = "ALL", s = D(), a = H("a"), i = H("h3"), i.textContent = "BEST", l = D(), c = H("a"), d = H("h3"), d.textContent = "CURR", O(o, "class", "svelte-ufw7k"), B(o, "selected", "all" == t[0]), O(r, "href", "#all"), O(r, "class", "svelte-ufw7k"), O(i, "class", "svelte-ufw7k"), B(i, "selected", "best" == t[0]), O(a, "href", "#best"), O(a, "class", "svelte-ufw7k"), O(d, "class", "svelte-ufw7k"), B(d, "selected", "curr" == t[0]), O(c, "href", "#curr"), O(c, "class", "svelte-ufw7k"), l = D(), u = H("a"), f = H("h3"), f.textContent = "HIST", O(f, "class", "svelte-ufw7k"), B(f, "selected", "history" == t[0]), O(u, "href", "#history"),  O(u, "class", "svelte-ufw7k"), O(n, "class", "svelte-ufw7k")
        },
        m(e, t) {
          M(e, n, t), k(n, r), k(r, o), k(n, s), k(n, a), k(a, i), k(n, l), k(n, c), k(c, d), k(n, l), k(n, u), k(u, f)
        },
        p(e, [t]) {
          1 & t && B(o, "selected", "all" == e[0]), 1 & t && B(i, "selected", "best" == e[0]), 1 & t && B(d, "selected", "curr" == e[0]), 1 & t && B(f, "selected", "history" == e[0])
        },
        i: e,
        o: e,
        d(e) {
          e && E(n)
        }
      }
    }

    function Co(e, t, n) {
      let r;
      return u(e, $t, (e => n(0, r = e))), [r]
    }
    const Mo = class extends Se {
      constructor(e) {
        super(), je(this, e, Co, To, i, {}, So)
      }
    };

    function Eo(e) {
      j( e, "svelte-1cp0kbr", `.wrapper.svelte-1cp0kbr{border:var(--theme-border) 3px solid;border-radius:0.5rem;background-color:var(--theme-bg-sub);box-sizing:border-box;width:100%;max-width:600px;padding:0.5rem;margin:0.5rem;display:flex;justify-content:space-evenly;text-align:center;gap:0.8em;overflow-x:scroll}.wrapper.svelte-1cp0kbr::-webkit-scrollbar{display:none} .item.svelte-1cp0kbr{display:flex;flex-direction:column} .item.svelte-1cp0kbr div:nth-child(1){color:var(--theme-label)} .item.svelte-1cp0kbr div:nth-child(2){font-size:1.2em;font-weight:bold} .item.fc.svelte-1cp0kbr div:nth-child(1){color:var(--theme-clear-fc)} .item.aj.svelte-1cp0kbr div:nth-child(1){color:var(--theme-clear-aj)} .item.mx.svelte-1cp0kbr:not(.zero) div:nth-child(2), .item.full.svelte-1cp0kbr div:nth-child(2){color:var(--theme-clear-aj);text-shadow:0 0 10px var(--theme-clear-aj)} .item.zero.svelte-1cp0kbr div:nth-child(2){color:var(--theme-text-dim);text-shadow:none} .total.svelte-1cp0kbr{color:var(--theme-text-dim);font-size:0.8rem;display:flex;align-items:end}` );
    }

    function No(e, t, n) {
      const r = e.slice();
      return r[4] = t[n], r
    }

    function Ho(e) {
      let t, n, r, o, s, a, i = (e[0][e[4]] ?? 0) + "";
      return {
        c() {
          t = H("div"), n = H("div"), r = A(e[4]), o = D(), s = H("div"), a = A(i), O(n, "class", "svelte-1cp0kbr"), O(s, "class", "svelte-1cp0kbr"), O(t, "class", "item svelte-1cp0kbr"), B(t, "zero", !(e[0][e[4]] > 0)), B(t, "full", e[0][e[4]] == e[3])
        },
        m(e, i) {
          M(e, t, i), k(t, n), k(n, r), k(t, o), k(t, s), k(s, a)
        },
        p(e, n) {
          1 & n && i !== (i = (e[0][e[4]] ?? 0) + "") && I(a, i), 1 & n && B(t, "zero", !(e[0][e[4]] > 0)), 9 & n && B(t, "full", e[0][e[4]] == e[3])
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Uo(e) {
      let t, n, r, o, s, a = (e[0].MAX ?? 0) + "";
      return {
        c() {
          t = H("div"), n = H("div"), n.textContent = "MAX", r = D(), o = H("div"), s = A(a), O(n, "class", "svelte-1cp0kbr"), O(o, "class", "svelte-1cp0kbr"), O(t, "class", "item mx svelte-1cp0kbr")
        },
        m(e, a) {
          M(e, t, a), k(t, n), k(t, r), k(t, o), k(o, s)
        },
        p(e, t) {
          1 & t && a !== (a = (e[0].MAX ?? 0) + "") && I(s, a)
        },
        d(e) {
          e && E(t)
        }
      }
    }

    function Ao(t) {
      let n, r, o, s, a, i, l, c, d, u, f, p, h, g, m, v, b, y, S1 = ["S", "S+", "SS", "SS+", "SSS", "SSS+"], S2 = ["CLR", "HRD", "BRV", "ABS", "CTS"], z1 = [], z2 = [];
      for (let e = 0; e < 6; e++) z1[e] = Ho(No(t, S1, e));
      for (let e = 0; e < 5; e++) z2[e] = Ho(No(t, S2, e));
      let Mx = t[0].MAX > 0 && Uo(t);
      return {
        c() {
          n = H("div"), z1.forEach(e => e.c()), r = D(), Mx && Mx.c(), o = D(), s = H("div"), a = A("/" + t[3]),
          O(n, "class", "wrapper svelte-1cp0kbr"), O(s, "class", "total svelte-1cp0kbr"), i = H("div"),
          z2.forEach(e => e.c()), l = D(),
          c = H("div"), d = H("div"), d.textContent = "FC", u = D(), f = H("div"), p = A(t[1]),
          O(d, "class", "svelte-1cp0kbr"), O(f, "class", "svelte-1cp0kbr"), O(c, "class", "item fc svelte-1cp0kbr"),
          B(c, "zero", 0 == t[1]), B(c, "full", t[1] == t[3]),
          h = H("div"), g = H("div"), g.textContent = "AJ", m = D(), v = H("div"), b = A(t[2]),
          O(g, "class", "svelte-1cp0kbr"), O(v, "class", "svelte-1cp0kbr"), O(h, "class", "item aj svelte-1cp0kbr"),
          B(h, "zero", 0 == t[2]), B(h, "full", t[2] == t[3]), O(i, "class", "wrapper svelte-1cp0kbr")
        },
        m(e, t) {
          M(e, n, t), z1.forEach(el => el.m(n, null)), k(n, r), Mx && Mx.m(n, null), k(n, o), k(n, s), k(s, a),M(e, i, t), z2.forEach(el => el.m(i, null)), k(i, l),k(i, c), k(c, d), k(c, u), k(c, f), k(f, p),k(i, h), k(h, g), k(h, m), k(h, v), k(v, b)
        },
        p(e, [t]) {
          if (1 & t) {
            for (let r = 0; r < 6; r++) {
              const o = No(e, S1, r);
              z1[r] ? z1[r].p(o, t) : (z1[r] = Ho(o), z1[r].c(), z1[r].m(n, null));
            }
            for (let r = 0; r < 5; r++) {
              const o = No(e, S2, r);
              z2[r] ? z2[r].p(o, t) : (z2[r] = Ho(o), z2[r].c(), z2[r].m(i, null));
            }
          }
          e[0].MAX > 0 ? (Mx ? Mx.p(e, t) : (Mx = Uo(e), Mx.c(), Mx.m(n, o))) : Mx && (Mx.d(1), Mx = null),
          8 & t && I(a, "/" + e[3]), 2 & t && (I(p, e[1]), B(c, "zero", 0 == e[1])), 10 & t && B(c, "full", e[1] == e[3]),
          4 & t && (I(b, e[2]), B(h, "zero", 0 == e[2])), 12 & t && B(h, "full", e[2] == e[3])
        },
        d(e) {
          e && E(n), N(z1, e), Mx && Mx.d(e), e && E(i), N(z2, e), e && E(c), e && E(h)
        }
      }
    }

    function Do(e, t, n) {
      let {
        rankCounts: r
      } = t, {
        fcCount: o
      } = t, {
        ajCount: s
      } = t, {
        total: a
      } = t;
      return e.$$set = e => {
        "rankCounts" in e && n(0, r = e.rankCounts), "fcCount" in e && n(1, o = e.fcCount), "ajCount" in e && n(2, s = e.ajCount), "total" in e && n(3, a = e.total)
      }, [r, o, s, a]
    }
    const Lo = class extends Se {
      constructor(e) {
        super(), je(this, e, Do, Ao, i, {
          rankCounts: 0,
          fcCount: 1,
          ajCount: 2,
          total: 3
        }, Eo)
      }
    };

    function Po(e) {
      j(e, "svelte-cshvda", ".wrapper.svelte-cshvda.svelte-cshvda{border:var(--theme-border) 3px solid;border-radius:0.5rem;background-color:var(--theme-bg-sub);box-sizing:border-box;width:100%;max-width:600px;padding:0.5rem 2rem;margin:0.5rem;display:flex;justify-content:space-evenly;align-items:center;text-align:center;gap:1rem;overflow-x:scroll;white-space:nowrap}.wrapper.svelte-cshvda.svelte-cshvda::-webkit-scrollbar{display:none}.wrapper.aj.svelte-cshvda .progress.svelte-cshvda,.wrapper.aj.svelte-cshvda .op-total.svelte-cshvda{color:var(--theme-clear-aj);text-shadow:0 0 10px var(--theme-clear-aj)}.op-total.svelte-cshvda.svelte-cshvda{font-size:1.5em;font-weight:bold}.op-max.svelte-cshvda.svelte-cshvda{font-size:0.8em;color:var(--theme-text-dim)}.progress.svelte-cshvda.svelte-cshvda{width:100%;border-radius:1em;background-color:var(--theme-bg-main)}.progress.svelte-cshvda div.svelte-cshvda{border-radius:1em;background-color:var(--theme-control);font-weight:bold}")
    }

    function Oo(t) {
      let n, r, o, s, a, i, l, c, d, u, f, p, h, g = Cr(t[1] / 1e4, 2) + "",
        m = (t[0] / 1e4).toFixed(1) + "",
        v = (isNaN(t[2]) ? "--" : Cr(t[2], 4)) + "";
      return {
        c() {
          n = H("div"), r = H("div"), o = H("div"), s = A(g), a = D(), i = H("div"), l = A("／"), c = A(m), d = D(), u = H("div"), f = H("div"), p = A(v), h = A("%"), O(o, "class", "op-total svelte-cshvda"), O(i, "class", "op-max svelte-cshvda"), z(f, "width", t[2] + "%"), O(f, "class", "svelte-cshvda"), O(u, "class", "progress svelte-cshvda"), O(n, "class", "wrapper svelte-cshvda"), B(n, "aj", t[0] && t[1].toFixed() === t[0].toFixed())
        },
        m(e, t) {
          M(e, n, t), k(n, r), k(r, o), k(o, s), k(r, a), k(r, i), k(i, l), k(i, c), k(n, d), k(n, u), k(u, f), k(f, p), k(f, h)
        },
        p(e, [t]) {
          2 & t && g !== (g = Cr(e[1] / 1e4, 2) + "") && I(s, g), 1 & t && m !== (m = (e[0] / 1e4).toFixed(1) + "") && I(c, m), 4 & t && v !== (v = (isNaN(e[2]) ? "--" : Cr(e[2], 4)) + "") && I(p, v), 4 & t && z(f, "width", e[2] + "%"), 3 & t && B(n, "aj", e[0] && e[1].toFixed() === e[0].toFixed())
        },
        i: e,
        o: e,
        d(e) {
          e && E(n)
        }
      }
    }
    
    function _o(e, t, n) {
      let r, o, s; 
      let a = t.records; 
      const groupByTitle = (records) => {
          const map = new Map();
          records.forEach((song) => {
              const { title, op, opMax } = song;
              if (!map.has(title)) {
                  map.set(title, { op, opMax });
              } else {
                  const current = map.get(title);
                  map.set(title, {
                      op: Math.max(current.op, op),
                      opMax: Math.max(current.opMax, opMax)
                  });
              }
          });
          return Array.from(map.values());
      };
      e.$$set = (newData) => {
          if ("records" in newData) {
              a = newData.records; 
              n(3, a);
          }
      };
      e.$$.update = () => {
          const groupedRecords = groupByTitle(a);  
          if (8 & e.$$.dirty) n(1, r = groupedRecords.reduce((sum, song) => sum + song.op, 0));
          if (8 & e.$$.dirty) n(0, o = groupedRecords.reduce((sum, song) => sum + song.opMax, 0));
          if (3 & e.$$.dirty) n(2, s = (r / o) * 100);  
      };
  
      return [o, r, s, a]; 
    }
    const Io = class extends Se {
        constructor(e) {
          super(), je(this, e, _o, Oo, i, {
            records: 3
          }, Po)
        }
      },
      {
        window: Ro
      } = w;

    function zo(e) {
      j(e, "svelte-19r2scc", "main.svelte-19r2scc{width:fit-content;display:flex;margin:auto;-ms-flex-direction:column;flex-direction:column;align-items:center}#copied-main{width:600px;margin:initial}#copied-main .wrapper{overflow:hidden;max-width:100%}#copied-main tbody td[data-diff]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;width:230px}#copied-main .pc-hidden span{display:none}")
    }

    function Fo(t) {
      let n, r;
      return n = new yo({
        props: {
          error: t[21]
        }
      }), {
        c() {
          $e(n.$$.fragment)
        },
        m(e, t) {
          xe(n, e, t), r = !0
        },
        p: e,
        i(e) {
          r || (ge(n.$$.fragment, e), r = !0)
        },
        o(e) {
          me(n.$$.fragment, e), r = !1
        },
        d(e) {
          ke(n, e)
        }
      }
    }

    function Bo(e) {
      let t, n, r, o, s, a, i, l, c, d, u, f, p, h, pp, hh, g;
      t = new Mo({}), r = new yn({}), a = new Or({});
      let m = "all" === e[5] && Vo(e);
      c = new io({
        props: {
          playRecord: e[0],
          shown: "all" === e[5]
        }
      }), u = new io({
        props: {
          playRecord: e[8],
          shown: "best" === e[5]
        }
      }), p = new io({
        props: {
          playRecord: e[9],
          shown: "curr" === e[5]
        }
      }), pp = new io({
        props: {
          playRecord: e[13],
          shown: "history" === e[5]
        }
      });
      let v = e[10] && Wo();
      return {
        c() {
          $e(t.$$.fragment), n = D(), $e(r.$$.fragment), o = D(), s = H("main"), $e(a.$$.fragment), i = D(), m && m.c(), l = D(), $e(c.$$.fragment), d = D(), $e(u.$$.fragment), f = D(), $e(p.$$.fragment), h = D(), $e(pp.$$.fragment), hh = D(), v && v.c(), O(s, "class", "svelte-19r2scc")
        },
        m(e, b) {
          xe(t, e, b), M(e, n, b), xe(r, e, b), M(e, o, b), M(e, s, b), xe(a, s, null), k(s, i), m && m.m(s, null), k(s, l), xe(c, s, null), k(s, d), xe(u, s, null), k(s, f), xe(p, s, null), k(s, h), xe(pp, s, null), k(s, hh), v && v.m(s, null), g = !0
        },
        p(e, t) {
          "all" === e[5] ? m ? (m.p(e, t), 32 & t && ge(m, 1)) : (m = Vo(e), m.c(), ge(m, 1), m.m(s, l)) : m && (pe(), me(m, 1, 1, (() => {
            m = null
          })), he());
          const n = {};
          1 & t && (n.playRecord = e[0]), 32 & t && (n.shown = "all" === e[5]), c.$set(n);
          const r = {};
          256 & t && (r.playRecord = e[8]), 32 & t && (r.shown = "best" === e[5]), u.$set(r);
          const o = {};
          512 & t && (o.playRecord = e[9]), 32 & t && (o.shown = "curr" === e[5]), p.$set(o);
          const oo = {};
          8192 & t && (oo.playRecord = e[13]), 32 & t && (oo.shown = "history" === e[5]), pp.$set(oo), e[10] ? v ? 1024 & t && ge(v, 1) : (v = Wo(), v.c(), ge(v, 1), v.m(s, null)) : v && (pe(), me(v, 1, 1, (() => {
            v = null
          })), he())
        },
        i(e) {
          g || (ge(t.$$.fragment, e), ge(r.$$.fragment, e), ge(a.$$.fragment, e), ge(m), ge(c.$$.fragment, e), ge(u.$$.fragment, e), ge(p.$$.fragment, e), ge(pp.$$.fragment, e), ge(v), g = !0)
        },
        o(e) {
          me(t.$$.fragment, e), me(r.$$.fragment, e), me(a.$$.fragment, e), me(m), me(c.$$.fragment, e), me(u.$$.fragment, e), me(p.$$.fragment, e), me(pp.$$.fragment, e), me(v), g = !1
        },
        d(e) {
          ke(t, e), e && E(n), ke(r, e), e && E(o), e && E(s), ke(a), m && m.d(), ke(c), ke(u), ke(p), ke(pp), v && v.d()
        }
      }
    }

    function Vo(e) {
      let t, n, r, o;
      t = new Lo({
        props: {
          ajCount: e[1],
          fcCount: e[3],
          rankCounts: e[4],
          total: e[0].length
        }
      });
      let s = e[2] != "hide" && e[2] != "clr" && qo(e);
      return {
        c() {
          $e(t.$$.fragment), n = D(), s && s.c(), r = L()
        },
        m(e, a) {
          xe(t, e, a), M(e, n, a), s && s.m(e, a), M(e, r, a), o = !0
        },
        p(e, n) {
          const o = {};
          2 & n && (o.ajCount = e[1]), 8 & n && (o.fcCount = e[3]), 16 & n && (o.rankCounts = e[4]), 1 & n && (o.total = e[0].length), t.$set(o), e[2] != "hide" && e[2] != "clr" ? s ? (s.p(e, n), 4 & n && ge(s, 1)) : (s = qo(e), s.c(), ge(s, 1), s.m(r.parentNode, r)) : s && (pe(), me(s, 1, 1, (() => {
            s = null
          })), he())
        },
        i(e) {
          o || (ge(t.$$.fragment, e), ge(s), o = !0)
        },
        o(e) {
          me(t.$$.fragment, e), me(s), o = !1
        },
        d(e) {
          ke(t, e), e && E(n), s && s.d(e), e && E(r)
        }
      }
    }

    function qo(e) {
      let t, n;
      return t = new Io({
        props: {
          records: e[0]
        }
      }), {
        c() {
          $e(t.$$.fragment)
        },
        m(e, r) {
          xe(t, e, r), n = !0
        },
        p(e, n) {
          const r = {};
          1 & n && (r.records = e[0]), t.$set(r)
        },
        i(e) {
          n || (ge(t.$$.fragment, e), n = !0)
        },
        o(e) {
          me(t.$$.fragment, e), n = !1
        },
        d(e) {
          ke(t, e)
        }
      }
    }

    function Wo(e) {
      let t, n;
      return t = new jo({}), {
        c() {
          $e(t.$$.fragment)
        },
        m(e, r) {
          xe(t, e, r), n = !0
        },
        i(e) {
          n || (ge(t.$$.fragment, e), n = !0)
        },
        o(e) {
          me(t.$$.fragment, e), n = !1
        },
        d(e) {
          ke(t, e)
        }
      }
    }

    function Jo(t) {
      let n, r;
      return n = new yo({}), {
        c() {
          $e(n.$$.fragment)
        },
        m(e, t) {
          xe(n, e, t), r = !0
        },
        p: e,
        i(e) {
          r || (ge(n.$$.fragment, e), r = !0)
        },
        o(e) {
          me(n.$$.fragment, e), r = !1
        },
        d(e) {
          ke(n, e)
        }
      }
    }

    function Xo(e) {
      let t, n;
      return t = new Sr({}), {
        c() {
          $e(t.$$.fragment)
        },
        m(e, r) {
          xe(t, e, r), n = !0
        },
        i(e) {
          n || (ge(t.$$.fragment, e), n = !0)
        },
        o(e) {
          me(t.$$.fragment, e), n = !1
        },
        d(e) {
          ke(t, e)
        }
      }
    }

    function Go(e) {
      let t, n, r, o, s, a, i, l, c, d, u;
      document.title = o = e[7]("main.title");
      let f = {
        ctx: e,
        current: null,
        token: null,
        hasCatch: !0,
        pending: Jo,
        then: Bo,
        catch: Fo,
        error: 21,
        blocks: [, , , ]
      };
      ! function(e, t) {
        const n = t.token = {};

        function r(e, r, o, s) {
          if (t.token !== n) return;
          t.resolved = s;
          let a = t.ctx;
          void 0 !== o && (a = a.slice(), a[o] = s);
          const i = e && (t.current = e)(a);
          let l = !1;
          t.block && (t.blocks ? t.blocks.forEach(((e, n) => {
            n !== r && e && (pe(), me(e, 1, 1, (() => {
              t.blocks[n] === e && (t.blocks[n] = null)
            })), he())
          })) : t.block.d(1), i.c(), ge(i, 1), i.m(t.mount(), t.anchor), l = !0), t.block = i, t.blocks && (t.blocks[r] = i), l && le()
        }
        if (!(o = e) || "object" != typeof o && "function" != typeof o || "function" != typeof o.then) {
          if (t.current !== t.then) return r(t.then, 1, t.value, e), !0;
          t.resolved = e
        } else {
          const n = Y();
          if (e.then((e => {
              G(n), r(t.then, 1, t.value, e), G(null)
            }), (e => {
              if (G(n), r(t.catch, 2, t.error, e), G(null), !t.hasCatch) throw e
            })), t.current !== t.pending) return r(t.pending, 0), !0
        }
        var o
      }(a = Promise.all([Ut.init(), Ht.init(), At.init(), e[13]()]), f);
      let p = e[11] && Xo();
      return {
        c() {
          t = H("link"), n = H("link"), s = D(), f.block.c(), i = D(), p && p.c(), l = L(), O(t, "rel", "stylesheet"), O(t, "href", "../common/styles/common.css"), O(n, "rel", "stylesheet"), O(n, "href", r = "../common/styles/theme-" + e[6] + ".css")
        },
        m(r, o) {
          k(document.head, t), k(document.head, n), M(r, s, o), f.block.m(r, f.anchor = o), f.mount = () => i.parentNode, f.anchor = i, M(r, i, o), p && p.m(r, o), M(r, l, o), c = !0, d || (u = P(Ro, "hashchange", e[12]), d = !0)
        },
        p(t, [s]) {
          e = t, (!c || 64 & s && r !== (r = "../common/styles/theme-" + e[6] + ".css")) && O(n, "href", r), (!c || 128 & s) && o !== (o = e[7]("main.title")) && (document.title = o),
            function(e, t, n) {
              const r = t.slice(),
                {
                  resolved: o
                } = e;
              e.current === e.then && (r[e.value] = o), e.current === e.catch && (r[e.error] = o), e.block.p(r, n)
            }(f, e, s), e[11] ? p ? 2048 & s && ge(p, 1) : (p = Xo(), p.c(), ge(p, 1), p.m(l.parentNode, l)) : p && (pe(), me(p, 1, 1, (() => {
              p = null
            })), he())
        },
        i(e) {
          c || (ge(f.block), ge(p), c = !0)
        },
        o(e) {
          for (let e = 0; e < 3; e += 1) me(f.blocks[e]);
          me(p), c = !1
        },
        d(e) {
          E(t), E(n), e && E(s), f.block.d(e), f.token = null, f = null, e && E(i), p && p.d(e), e && E(l), d = !1, u()
        }
      }
    }

    function Yo(e, t, n) {
      let r, o, s, a, i, l, c, d, f, h, g, m, v, b, y, w, $, x, k, j, jk, z;
      return u(e, Ht, (e => n(13, z = e))), u(e, Ye, (e => n(14, i = e))), u(e, Ze, (e => n(15, l = e))), u(e, At, (e => n(16, h = e))), u(e, et, (e => n(17, c = e))), u(e, eet, (e => n(17, j = e))), u(e, eeet, (e => n(17, jk = e))), u(e, Qe, (e => n(18, d = e))), u(e, nt, (e => n(2, f = e))), u(e, De, (e => n(19, g = e))), u(e, Tt, (e => n(20, m = e))), u(e, $t, (e => n(5, v = e))), u(e, Ae, (e => n(6, b = e))), u(e, wt, (e => n(7, y = e))), u(e, At, (e => n(8, w = e.filter((item) => (item.newV === 0 || (item.newV === 2 && item.difficulty !== "ULT")) && item.score !== -1).map((item, index) => ({ ...item, order: index + 1 }))))), u(e, At, (e => n(9, $ = e.filter(item => (item.newV === 1 || (item.newV === 2 && item.difficulty === "ULT")) && item.score !== -1).map((item, index) => ({ ...item, order: index + 1 }))))), u(e, jt, (e => n(10, x = e))), u(e, xt, (e => n(11, k = e))), p($t, v = window.location.hash.slice(1), v), 
      e.$$.update = () => {
        507908 & e.$$.dirty && n(0, r = h.filter((e => ("hide" != f || e.score >= 0) && ("clr" != f || e.score >= 0) && (!(f === "dgvalue" || f === "dgpercentage") || (e.dg === 1 || e.dg === 2)) && (!(f === "eudgvalue" || f === "eudgpercentage") || ((e.dg === 1 || e.dg === 2) && e.score >= 0)) && d[e.difficulty] && c[Ie.find((t => _e[t] == e.genre))] && j[Rl.find((t => _s[t] == e.release))] && jk[Rk.find(t => { const val = _k[t]; return Array.isArray(val) ? val.includes(e.rank) : val === e.rank; })] && l >= e.const && e.const >= i))), sFS = r, 1 & e.$$.dirty && n(4, o = (() => {
          let e = {};
          const rankOrder = ["MAX", "SSS+", "SSS", "SS+", "SS", "S+", "S", "AAA", "AA", "A", "BBB", "BB", "B", "C", "D"];
          rankOrder.forEach(t => e[t] = 0);
          const clear2Order = ["CTS", "ABS", "BRV", "HRD", "CLR"];
          clear2Order.forEach(t => e[t] = 0);
          for (const t of r) {
            if (t.rank in e) e[t.rank]++;
            if (t.clear2 in e) e[t.clear2]++;
          }
          rankOrder.reduce((prev, curr) => (e[curr] += e[prev] || 0, curr));
          clear2Order.reduce((prev, curr) => (e[curr] += e[prev] || 0, curr));
          return e;
        })()), 1 & e.$$.dirty && n(1, s = r.filter((e => "AJ" == e.clear)).length), 3 & e.$$.dirty && n(3, a = s + r.filter((e => "FC" == e.clear)).length)
      },[r, s, f, a, o, v, b, y, w, $, x, k, function() {
        p($t, v = window.location.hash.slice(1), v), "all" !== v && p(Tt, m = !1, m)
      }, async function() {
        Re(window.opener, Le)("saveConfig", {
          data: {
            lang: g
          }
        })
      }, z, i, l, h, c, j, jk, d] 
    }
    new class extends Se {
      constructor(e) {
        super(), je(this, e, Yo, Go, i, {}, zo)
      }
    }({
      target: document.body
    })
  })()
})();