(() => {
  var e = {
          283: (e, t, r) => {
              var n = {
                  "./en_US.json": 466,
                  "./zh_TW.json": 549
              };

              function o(e) {
                  var t = s(e);
                  return r(t)
              }

              function s(e) {
                  if (!r.o(n, e)) {
                      var t = new Error("Cannot find module '" + e + "'");
                      throw t.code = "MODULE_NOT_FOUND", t
                  }
                  return n[e]
              }
              o.keys = function() {
                  return Object.keys(n)
              }, o.resolve = s, e.exports = o, o.id = 283
          },
          692: (e, t, r) => {
              var n = {
                  "./en_US.json": 903,
                  "./zh_TW.json": 141
              };

              function o(e) {
                  var t = s(e);
                  return r(t)
              }

              function s(e) {
                  if (!r.o(n, e)) {
                      var t = new Error("Cannot find module '" + e + "'");
                      throw t.code = "MODULE_NOT_FOUND", t
                  }
                  return n[e]
              }
              o.keys = function() {
                  return Object.keys(n)
              }, o.resolve = s, e.exports = o, o.id = 692
          },
          466: e => {
              "use strict";
              e.exports = JSON.parse('{"locale.name":"English (US)","footer.chooseLang":"Choose Language","footer.source":"Source code & this page is hosted on <a href=\\"https://github.com/Dogeon188/chuni-tools\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\">GitHub</a>"}')
          },
          549: e => {
              "use strict";
              e.exports = JSON.parse('{"locale.name":"繁體中文","footer.chooseLang":"選擇語言","footer.source":"本網站透過GitHub Pages架設，原始碼可以在<a href=\\"https://github.com/Dogeon188/chuni-tools\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\">GitHub</a>找到。"}')
          },
          903: e => {
              "use strict";
              e.exports = JSON.parse('{"main.title":"CHUNITHM Record Viewer","loading.constData":"Used song constant data: {{name}}","loading.error.serviceDown":"CHUNITHM-NET service is currently unavailable.<br/>Please come back later.","loading.error.rejected":"Oops! It seems that your CHUNITHM-NET just went dead.<br/>It\'s probably because you opened it somewhere else.<br/><em>Reload the page</em>, <em>re-login <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em><br/>or <em>re-run the bookmarklet</em> might help...","loading.error.timeout":"Oh no! Looks like we\'ve lost connection with Houston.<br/>You probably have accidentally navigated the original CHUNITHM-NET page to somewhere else.<br/>Please <em>re-open <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> and <em>run the bookmarklet again</em>.<br/>Remember not to throw away the original page again!","loading.error.noopener":"Looks like you are at the wrong place!<br/>To use the record viewer, please properly<br/><em>open <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em> and <em>run the bookmarklet</em>.<br/>Last but not least, <em>make sure you clicked the button</em>,<br/>rather than opening a new tab via mid-click, etc.<br/><br/>If you\'ve actually just <em>accidentally closed</em> the original CHUNITHM-NET page, rather than going the wrong way,<br/>please close this page, and then try it all over again.<br/><em>Don\'t close it</em> again this time!","loading.error.unknown":"Ughhh... We got some happy accident.<br/>Please <em>screenshot or copy the error message</em> to the author,<br/>and hopefully he will figure it out.","header.title.dl":"Save or share B40 as image","header.title.constData":"Change song constant data (Current: {{name}})","header.title.settings":"Open settings","settings.main.title":"Settings","settings.main.reset":"Reset Settings","settings.filter.title":"Filter","settings.filter.const":"By Chart Constant","settings.filter.diff":"By Difficulty","settings.filter.diff.warn":"*should select at least one","settings.filter.diff.notify":"*Filtering difficulties might cause the \\"Best 30\\" data to be inaccurate.","settings.filter.genre":"By Genre","settings.filter.genre.all":"Toggle ALL","settings.data.title":"Game Data","settings.data.constData":"Chart Constant Data to Use","settings.data.constData.newplus":"NEW+","settings.data.constData.sun":"SUN","settings.data.constData.sunplus":"International Ver. (SUN+)","settings.data.constData.luminous":"Japanese Ver. (LUMINOUS)","settings.data.playcount":"Show Play Count","settings.data.playcount.notify":"*You can click the dark box beside a song to view its play count","settings.data.showScoreDiff":"Show Score Difference <span style=\\"color:var(--theme-text-dim)\\">(since last updated)</span>","settings.data.diffUpdate":"Score Diff Basis Update Interval <span style=\\"color:var(--theme-text-dim)\\">Last updated: {{date}}</span>","settings.data.diffUpdate.1d":"Auto-update after 1 day","settings.data.diffUpdate.3d":"Auto-update after 3 days","settings.data.diffUpdate.7d":"Auto-update after 1 week","settings.data.diffUpdate.14d":"Auto-update after 2 weeks","settings.data.diffUpdate.30d":"Auto-update after 1 month","settings.data.diffUpdate.manual":"Manually update","settings.data.diffUpdate.update":"Update Score Diff Basis","settings.data.diffUpdate.reload":"Reload Page to Update","settings.data.diffUpdate.notify":"*If set to auto-update, when it has been more than the specified duration from the last time updated, the program will automatically update it.","settings.data.overpower":"Show Over Power","settings.data.overpower.hide":"Hide (Show Rank)","settings.data.overpower.value":"Show (Over Power Value)","settings.data.overpower.percentage":"Show (Over Power Achievement%)","settings.data.overpower.notify":"*It will also show unplayed song when toggled to \\"Show Over Power\\".<br/>*Total over power might differ from the official one, if some of the songs are not unlocked yet.","settings.ui.title":"User Interface","settings.ui.locale":"Language","settings.ui.theme":"Theme","player.generic.generatedAt":"Generated At","player.best.playCount":"Play Count","player.best.best30":"Best 30","player.best.maxPossible":"Max Possible","player.recent.best10":"Recent 10","player.recent.history10":"History 10","player.recent.history30":"History 30","record.head.playOrder":"Played Time","record.head.order":"#","record.head.title":"Title","record.head.const":"Const","record.head.overpower":"OP","record.head.overpowerPercent":"OP%","record.head.rank":"Rank","record.head.score":"Score","record.head.scoreDiff":"Score Diff","record.head.rating":"Rating","record.head.ajfc":"AJ","record.head.playcount":"Plays","record.fetch.fetching":"Fetching record for <span style=\\"color:var(--theme-song-{{diff}});\\">{{diffStr}}</span> difficulty...","record.fetch.diff.ult":"ULTIMA","record.fetch.diff.mas":"MASTER","record.fetch.diff.exp":"EXPERT","record.fetch.diff.adv":"ADVANCED","record.fetch.diff.bas":"BASIC","record.fetch.unknown":"Found unknown song(s):\\n\\n{{songs}}\\n\\nPlease contact the author via Twitter or Discord.","record.fetch.error":"<span style=\\"color:red;\\">Some error occured when fetching best record!<br/>You probably need to reload the page now.</span>","playcount.fetch.button":"Fetch","playcount.fetch.progress":"Fetching play count... ({{progress}}/{{all}})","playcount.fetch.error":"<span style=\\"color:red;\\">Some error occured when fetching play count!<br/>You probably need to reload the page now.</span>","share.error":"Something went wrong when converting your scores to PNG. Please screenshot the error message to the author.\\n\\n{{error}}"}')
          },
          141: e => {
              "use strict";
              e.exports = JSON.parse('{"main.title":"CHUNITHM 查分器","loading.constData":"使用來自 {{name}} 版本的定數資料","loading.error.serviceDown":"CHUNITHM-NET 目前正在停服維修。<br/>請在其可以使用的時段執行本程式。","loading.error.rejected":"哇，看來你的春藥網死掉了，<br/>這可能是因為您在別處也開啟了CHUNITHM-NET。<br/>可以考慮 <em>重新整理</em>、<em>重新登入 <a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em><br/>或者是 <em>重新執行一次書籤小工具</em> 再試試。","loading.error.timeout":"糟了，我們和休士頓失去了聯繫！<br/>這可能是因為您將原本CHUNITHM-NET的分頁重新整理，或跳轉至其他頁面所導致的。<br/>請<em>重新開啟<a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em>並<em>重新執行本程式</em>。<br/>這次別把原本的分頁弄走了啊！","loading.error.noopener":"看來您走錯路了！<br/>要使用本查分器，請<em>開啟<a href=\\"https://chunithm-net-eng.com/mobile/\\">CHUNITHM-NET</a></em>並<em>執行書籤小工具</em>，<br/>然後<em>確實地點下按鈕</em>，而非使用滑鼠中鍵等方式另開新分頁。<br/><br/>若是您其實是不慎<em>關閉了原本CHUNITHM-NET的分頁</em>，<br/>請關閉此分頁後，再於CHUNITHM-NET重新執行一次書籤小工具，並且<em>保持原本的分頁開啟</em>。","loading.error.unknown":"哇，看來我們這裡出了一點小意外，<br/>請<em>將以下的錯誤訊息截圖或複製</em>給本查分器的作者，<br/>希望他能夠幫到你。","header.title.dl":"將B40記錄儲存為照片","header.title.constData":"切換歌曲定數資料 (目前：{{name}})","header.title.settings":"設定","settings.main.title":"設定","settings.main.reset":"重置設定","settings.filter.title":"歌曲篩選","settings.filter.const":"依 譜面定數","settings.filter.diff":"依 譜面難度","settings.filter.diff.warn":"*至少選一個吧","settings.filter.diff.notify":"*依照難度篩選，可能會使得B30的記錄變得不準確","settings.filter.genre":"依 歌曲類別","settings.filter.genre.all":"全部開啟/關閉","settings.data.title":"遊戲數據","settings.data.constData":"使用的定數資料","settings.data.constData.newplus":"NEW+","settings.data.constData.sun":"SUN","settings.data.constData.sunplus":"國際版 (SUN+)","settings.data.constData.luminous":"日版 (LUMINOUS)","settings.data.playcount":"顯示個別歌曲遊玩次數","settings.data.playcount.notify":"*點擊歌曲條目旁的深色方塊也可以查看單曲遊玩次數","settings.data.showScoreDiff":"顯示推分數據","settings.data.diffUpdate":"推分基準更新週期 <span style=\\"color:var(--theme-text-dim)\\">上次更新：{{date}}</span>","settings.data.diffUpdate.1d":"一天 後自動更新","settings.data.diffUpdate.3d":"三天 後自動更新","settings.data.diffUpdate.7d":"一週 後自動更新","settings.data.diffUpdate.14d":"兩週 後自動更新","settings.data.diffUpdate.30d":"一個月 後自動更新","settings.data.diffUpdate.manual":"手動更新","settings.data.diffUpdate.update":"更新推分基準","settings.data.diffUpdate.reload":"請重新載入頁面方可更新","settings.data.diffUpdate.notify":"*若設定為自動更新，每當距離「上一次記錄推分基準」超過指定時間，就會自動更新推分的計算基準","settings.data.overpower":"顯示OVER POWER","settings.data.overpower.hide":"隱藏 (顯示成績等級)","settings.data.overpower.value":"顯示 (OVER POWER數值)","settings.data.overpower.percentage":"顯示 (OVER POWER達成率)","settings.data.overpower.notify":"*設定為「顯示」時，未遊玩的歌曲也會一併顯示<br/>*若是有尚未解鎖的歌曲，OVER POWER的數據可能會與官方記錄有差別","settings.ui.title":"使用者介面","settings.ui.locale":"語言","settings.ui.theme":"佈景主題","player.generic.generatedAt":"生成日期","player.best.playCount":"遊玩道數","player.best.best30":"BEST 30","player.best.maxPossible":"不推分可達到","player.recent.best10":"RECENT 10","player.recent.history10":"遊玩記錄前10","player.recent.history30":"遊玩記錄前30","record.head.playOrder":"遊玩時間","record.head.order":"#","record.head.title":"曲名","record.head.const":"定數","record.head.overpower":"OP","record.head.overpowerPercent":"OP%","record.head.rank":"等級","record.head.score":"成績","record.head.scoreDiff":"成績變動","record.head.rating":"評分","record.head.ajfc":"AJ","record.head.playcount":"次數","record.fetch.fetching":"正在載入 <span style=\\"color:var(--theme-song-{{diff}});\\">{{diffStr}}</span> 資料……","record.fetch.diff.ult":"黑譜 (ULTIMA)","record.fetch.diff.mas":"紫譜 (MASTER)","record.fetch.diff.exp":"紅譜 (EXPERT)","record.fetch.diff.adv":"黃譜 (ADVANCED)","record.fetch.diff.bas":"綠譜 (BASIC)","record.fetch.unknown":"以下是我們沒辦法找到定數資料的歌曲：\\n{{songs}}\\n請投過推特、Discord等方式聯繫本查分器的製作者。","record.fetch.error":"<span style=\\"color:red;\\">在取得歌曲遊玩記錄時出現問題，<br/>您可能需要重新整理頁面後再試一次。</span>","playcount.fetch.button":"取得","playcount.fetch.progress":"正在取得歌曲遊玩次數…… ({{progress}}/{{all}})","playcount.fetch.error":"<span style=\\"color:red;\\">在取得歌曲遊玩次數時出現問題，<br/>您可能需要重新整理頁面後再試一次。</span>","share.error":"在嘗試將您的成績轉換為圖檔時出現錯誤，請將以下的錯誤訊息截圖傳給作者處理。\\n\\n{{error}}"}')
          }
      },
      t = {};

  function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var s = t[n] = {
          exports: {}
      };
      return e[n](s, s.exports, r), s.exports
  }
  r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
      "use strict";

      function e() {}
      const t = e => e;

      function n(e) {
          return e()
      }

      function o() {
          return Object.create(null)
      }

      function s(e) {
          e.forEach(n)
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

      function c(t, ...r) {
          if (null == t) return e;
          const n = t.subscribe(...r);
          return n.unsubscribe ? () => n.unsubscribe() : n
      }

      function d(e) {
          let t;
          return c(e, (e => t = e))(), t
      }

      function u(e, t, r) {
          e.$$.on_destroy.push(c(t, r))
      }

      function f(e, t, r, n) {
          return e[1] && n ? function(e, t) {
              for (const r in t) e[r] = t[r];
              return e
          }(r.ctx.slice(), e[1](n(t))) : r.ctx
      }

      function p(e, t, r) {
          return e.set(r), t
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
                  for (const r of e) $.entries.set(r.target, r), null === (t = this._listeners.get(r.target)) || void 0 === t || t(r)
              }))
          }
      }
      $.entries = "WeakMap" in w ? new WeakMap : void 0;
      let x = !1;

      function k(e, t) {
          e.appendChild(t)
      }

      function j(e, t, r) {
          const n = S(e);
          if (!n.getElementById(t)) {
              const e = H("style");
              e.id = t, e.textContent = r, C(n, e)
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

      function M(e, t, r) {
          e.insertBefore(t, r || null)
      }

      function E(e) {
          e.parentNode && e.parentNode.removeChild(e)
      }

      function N(e, t) {
          for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t)
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

      function L() {
          return A(" ")
      }

      function P() {
          return A("")
      }

      function O(e, t, r, n) {
          return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
      }

      function D(e, t, r) {
          null == r ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r)
      }

      function I(e) {
          return "" === e ? null : +e
      }

      function _(e, t) {
          t = "" + t, e.data !== t && (e.data = t)
      }

      function R(e, t) {
          e.value = null == t ? "" : t
      }

      function z(e, t, r, n) {
          null == r ? e.style.removeProperty(t) : e.style.setProperty(t, r, n ? "important" : "")
      }

      function F(e, t, r) {
          for (let r = 0; r < e.options.length; r += 1) {
              const n = e.options[r];
              if (n.__value === t) return void(n.selected = !0)
          }
          r && void 0 === t || (e.selectedIndex = -1)
      }

      function B(e, t, r) {
          e.classList[r ? "add" : "remove"](t)
      }
      class V {
          constructor(e = !1) {
              this.is_svg = !1, this.is_svg = e, this.e = this.n = null
          }
          c(e) {
              this.h(e)
          }
          m(e, t, r = null) {
              this.e || (this.is_svg ? this.e = U(t.nodeName) : this.e = H(11 === t.nodeType ? "TEMPLATE" : t.nodeName), this.t = "TEMPLATE" !== t.tagName ? t : t.content, this.c(e)), this.i(r)
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

      function X(e, t, r, n, o, s, a, i = 0) {
          const l = 16.666 / n;
          let c = "{\n";
          for (let e = 0; e <= 1; e += l) {
              const n = t + (r - t) * s(e);
              c += 100 * e + `%{${a(n,1-n)}}\n`
          }
          const d = c + `100% {${a(r,1-r)}}\n}`,
              u = `__svelte_${function(e){let t=5381,r=e.length;for(;r--;)t=(t<<5)-t^e.charCodeAt(r);return t>>>0}(d)}_${i}`,
              f = S(e),
              {
                  stylesheet: p,
                  rules: h
              } = q.get(f) || function(e, t) {
                  const r = {
                      stylesheet: T(t),
                      rules: {}
                  };
                  return q.set(e, r), r
              }(f, e);
          h[u] || (h[u] = !0, p.insertRule(`@keyframes ${u} ${d}`, p.cssRules.length));
          const g = e.style.animation || "";
          return e.style.animation = `${g?`${g}, `:""}${u} ${n}ms linear ${o}ms 1 both`, J += 1, u
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
      let re = !1;

      function ne(e) {
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
          re = !1, se.clear(), G(e)
      }

      function ce(e) {
          if (null !== e.fragment) {
              e.update(), s(e.before_update);
              const t = e.dirty;
              e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ne)
          }
      }

      function de(e, t, r) {
          e.dispatchEvent(function(e, t, {
              bubbles: r = !1,
              cancelable: n = !1
          } = {}) {
              const o = document.createEvent("CustomEvent");
              return o.initCustomEvent(e, r, n, t), o
          }(`${t?"intro":"outro"}${r}`))
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

      function me(e, t, r, n) {
          if (e && e.o) {
              if (ue.has(e)) return;
              ue.add(e), fe.c.push((() => {
                  ue.delete(e), n && (r && e.d(1), n())
              })), e.o(t)
          } else n && n()
      }
      const ve = {
          duration: 0
      };

      function be(r, n, o, i) {
          const l = {
              direction: "both"
          };
          let c = n(r, o, l),
              d = i ? 0 : 1,
              u = null,
              f = null,
              p = null;

          function h() {
              p && function(e, t) {
                  const r = (e.style.animation || "").split(", "),
                      n = r.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
                      o = r.length - n.length;
                  o && (e.style.animation = n.join(", "), J -= o, J || v((() => {
                      J || (q.forEach((e => {
                          const {
                              ownerNode: t
                          } = e.stylesheet;
                          t && E(t)
                      })), q.clear())
                  })))
              }(r, p)
          }

          function g(e, t) {
              const r = e.b - d;
              return t *= Math.abs(r), {
                  a: d,
                  b: e.b,
                  d: r,
                  duration: t,
                  start: e.start,
                  end: e.start + t,
                  group: e.group
              }
          }

          function w(n) {
              const {
                  delay: o = 0,
                  duration: a = 300,
                  easing: i = t,
                  tick: l = e,
                  css: w
              } = c || ve, $ = {
                  start: m() + o,
                  b: n
              };
              n || ($.group = fe, fe.r += 1), u || f ? f = $ : (w && (h(), p = X(r, d, n, a, o, i, w)), n && l(0, 1), u = g($, a), ne((() => de(r, n, "start"))), function(e) {
                  let t;
                  0 === b.size && v(y), new Promise((r => {
                      b.add(t = {
                          c: e,
                          f: r
                      })
                  }))
              }((e => {
                  if (f && e > f.start && (u = g(f, a), f = null, de(r, u.b, "start"), w && (h(), p = X(r, d, u.b, u.duration, 0, i, c.css))), u)
                      if (e >= u.end) l(d = u.b, 1 - d), de(r, u.b, "end"), f || (u.b ? h() : --u.group.r || s(u.group.c)), u = null;
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

      function we(e, t, r) {
          const n = e.$$.props[t];
          void 0 !== n && (e.$$.bound[n] = r, r(e.$$.ctx[n]))
      }

      function $e(e) {
          e && e.c()
      }

      function xe(e, t, r, o) {
          const {
              fragment: i,
              after_update: l
          } = e.$$;
          i && i.m(t, r), o || ne((() => {
              const t = e.$$.on_mount.map(n).filter(a);
              e.$$.on_destroy ? e.$$.on_destroy.push(...t) : s(t), e.$$.on_mount = []
          })), l.forEach(ne)
      }

      function ke(e, t) {
          const r = e.$$;
          null !== r.fragment && (function(e) {
              const t = [],
                  r = [];
              K.forEach((n => -1 === e.indexOf(n) ? t.push(n) : r.push(n))), r.forEach((e => e())), K = t
          }(r.after_update), s(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = [])
      }

      function je(t, r, n, a, i, l, c, d = [-1]) {
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
              context: new Map(r.context || (u ? u.$$.context : [])),
              callbacks: o(),
              dirty: d,
              skip_bound: !1,
              root: r.target || u.$$.root
          };
          c && c(f.root);
          let p = !1;
          if (f.ctx = n ? n(t, r.props || {}, ((e, r, ...n) => {
                  const o = n.length ? n[0] : r;
                  return f.ctx && i(f.ctx[e], f.ctx[e] = o) && (!f.skip_bound && f.bound[e] && f.bound[e](o), p && function(e, t) {
                      -1 === e.$$.dirty[0] && (Z.push(e), re || (re = !0, te.then(le)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
                  }(t, e)), r
              })) : [], f.update(), p = !0, s(f.before_update), f.fragment = !!a && a(f.ctx), r.target) {
              if (r.hydrate) {
                  x = !0;
                  const e = (h = r.target, Array.from(h.childNodes));
                  f.fragment && f.fragment.l(e), e.forEach(E)
              } else f.fragment && f.fragment.c();
              r.intro && ge(t.$$.fragment), xe(t, r.target, r.anchor, r.customElement), x = !1, le()
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
              this.$$.on_disconnect = e.map(n).filter(a);
              for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
          }
          attributeChangedCallback(e, t, r) {
              this[e] = r
          }
          disconnectedCallback() {
              s(this.$$.on_disconnect)
          }
          $destroy() {
              ke(this, 1), this.$destroy = e
          }
          $on(t, r) {
              if (!a(r)) return e;
              const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
              return n.push(r), () => {
                  const e = n.indexOf(r); - 1 !== e && n.splice(e, 1)
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
          $on(t, r) {
              if (!a(r)) return e;
              const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
              return n.push(r), () => {
                  const e = n.indexOf(r); - 1 !== e && n.splice(e, 1)
              }
          }
          $set(e) {
              this.$$set && !l(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
          }
      }
      const Te = [];

      function Ce(t, r = e) {
          let n;
          const o = new Set;

          function s(e) {
              if (i(t, e) && (t = e, n)) {
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
                  return o.add(l), 1 === o.size && (n = r(s) || e), a(t), () => {
                      o.delete(l), 0 === o.size && n && (n(), n = null)
                  }
              }
          }
      }

      function Me(t, r, n) {
          const o = !Array.isArray(t),
              i = o ? [t] : t,
              l = r.length < 2;
          return {
              subscribe: Ce(n, (t => {
                  let n = !1;
                  const d = [];
                  let u = 0,
                      f = e;
                  const p = () => {
                          if (u) return;
                          f();
                          const n = r(o ? d[0] : d, t);
                          l ? t(n) : f = a(n) ? n : e
                      },
                      h = i.map(((e, t) => c(e, (e => {
                          d[t] = e, u &= ~(1 << t), n && p()
                      }), (() => {
                          u |= 1 << t
                      }))));
                  return n = !0, p(),
                      function() {
                          s(h), f(), n = !1
                      }
              })).subscribe
          }
      }
      var Ee;

      function Ne(e, t, r, n = (() => {})) {
          let o = localStorage.getItem(e);
          null !== o && r.includes(o) || (o = t, localStorage.setItem(e, o));
          const {
              subscribe: s,
              set: a,
              update: i
          } = Ce(o);
          return {
              subscribe: s,
              set(t) {
                  a(t), localStorage.setItem(e, t), n(t)
              },
              update: i,
              reset() {
                  this.set(t)
              },
              accepts: r
          }
      }

      function He(e, t, r, n, o = (() => {})) {
          let s = localStorage.getItem(e),
              a = parseFloat(s ?? "NaN");
          (null === s || a > n || a < r) && (a = t, localStorage.setItem(e, a.toString()));
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

      function Ue(e, t, r = (() => {})) {
          let n = localStorage.getItem(e);
          null === n && (n = JSON.stringify(t), localStorage.setItem(e, n));
          let o = JSON.parse(n),
              s = Object.keys(t);
          Object.keys(o).every((e => s.includes(e) && "boolean" == typeof o[e])) || (n = JSON.stringify(t), localStorage.setItem(e, n), o = JSON.parse(n));
          const {
              subscribe: a,
              set: i,
              update: l
          } = Ce(o);
          return {
              subscribe: a,
              set(t) {
                  i(t), localStorage.setItem(e, JSON.stringify(t)), r(t)
              },
              update: l,
              reset() {
                  this.set(t)
              }
          }
      }! function(e) {
          e.en_US = "en_US", e.zh_TW = "zh_TW"
      }(Ee || (Ee = {}));
      const Ae = Ne("theme", "dark", ["dark", "purple"]),
          Le = Ne("language", function() {
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
          Pe = "https://chunithm-net-eng.com";
      var Oe;
      ! function(e) {
          e.basic = "BAS", e.advanced = "ADV", e.expert = "EXP", e.master = "MAS", e.ultima = "ULT"
      }(Oe || (Oe = {}));
      const De = Object.values(Oe);
      var Ie;
      ! function(e) {
          e["P & A"] = "0", e.niconico = "2", e["東方Project"] = "3", e.ORIGINAL = "5", e.VARIETY = "6", e["イロドリ"] = "7", e["ゲキマイ"] = "9"
      }(Ie || (Ie = {}));
      const _e = Object.keys(Ie);

      function Re(e, t) {
          if (!e) throw new Error("Target window does not exist");
          return (r, n, o) => {
              const s = {
                  action: r,
                  payload: n
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
          return ze.some(((r, n) => (t = n, e >= r[0]))), ze[t][1]
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
          title: (e, t) => e.title < t.title ? -1 : e.title > t.title ? 1 : De.indexOf(t.difficulty) - De.indexOf(e.difficulty),
          const: (e, t) => t.const-e.const || e.order - t.order,
          op: (e, t) => t.op - e.op || e.order - t.order,
          opp: (e, t) => t.op / t.opMax - e.op / e.opMax || e.order - t.order,
          score: (e, t) => t.score - e.score || e.order - t.order,
          scoreDiff: (e, t) => t.scoreDiff - e.scoreDiff || e.order - t.order,
          rating: (e, t) => e.order - t.order,
          aj: (e, t) => {
              if (e.clear == t.clear) return e.order - t.order;
              const r = ["", "FC", "AJ"];
              return r.indexOf(t.clear) - r.indexOf(e.clear)
          },
          playcount: (e, t) => null == e.playCount ? 100 : null == t.playCount ? -100 : e.playCount == t.playCount ? e.order - t.order : t.playCount - e.playCount
      };

      function Xe(e) {
          return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'")
      }

      function Ge(e, t, r) {
          const n = e,
              o = t,
              s = [];
          if (n.map((e => {
                  if ("WE" === e.difficulty) return e.title = Xe(e.title), e.const = -1, e.rating = 0, e.op = -1, e.opMax = -1, e.opPercent = -1, void(e.rank = Fe(e.score));
                  void 0 === o[e.title] && (e.title = Xe(e.title));
                  let t = o[e.title];
                  void 0 === t ? (s.push(e), e.const = -1, e.rating = 0) : (e.const = t[e.difficulty], t.uncertain?.includes(e.difficulty) && (e.constUncertain = !0), e.rawRating = function(e) {
                      let t, r = Math.floor(1e4 * e.const);
                      if (e.score >= 9e5) {
                          let t = Be.find((t => e.score >= t.score));
                          return Math.max(0, r + t.base + t.ratio * (e.score - t.score))
                      }
                      if (e.score >= 8e5) t = (r - 5e4) / 2 + (r - 5e4) / 2 * (e.score - 8e5) / 1e5;
                      else {
                          if (!(e.score >= 5e5)) return 0;
                          t = (r - 5e4) / 2 * (e.score - 5e5) / 3e5
                      }
                      return Math.max(0, t)
                  }(e), e.genre = `${t.genre}`, e.rating = Math.floor(e.rawRating / 100)), e.op = function(e) {
                      if (e.score >= 101e4) return Ve(e);
                      let t = {
                              AJ: 2e3,
                              FC: 1e3,
                              "": 0
                          } [e.clear],
                          r = Math.floor(1e4 * e.const),
                          n = e.score < 1007500 ? e.rawRating : r + 2e4 + 3 * (e.score - 1007500);
                      return n = e.score >= 975e3 ? 10 * Math.floor(n / 10) : 100 * Math.floor(n / 100), 5 * (n + t)
                  }(e), e.opMax = Ve(e), e.opPercent = 100 * e.op / e.opMax, e.rank = Fe(e.score)
              })), r && s.length) {
              const e = {};
              s.forEach((t => {
                  var r;
                  e[r = t.title] ?? (e[r] = []), e[t.title].push(t.difficulty)
              })), console.log(e), alert(r.replace("{{songs}}", Object.entries(e).map((([e, t]) => `    ${e} ${t.join(",")}`)).join("\n")))
          }
          return n.sort(Je.default), n.map(((e, t) => {
              e.order = t + 1
          })), n
      }
      c(Le, (() => {
          try {
              Re(window.opener, Pe)("saveConfig", {
                  data: {
                      lang: d(Le)
                  }
              })
          } catch (e) {
              console.error(e)
          }
      }));
      const Ye = He("filterConstMin", 1, 1, 15.4),
          Ze = He("filterConstMax", 15.4, 1, 15.4),
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
      for (let e of _e) Ke[e] = !0;
      const et = Ue("filterGenre", Ke),
          tt = Ne("usedConstData", "luminousplus", ["luminousplus", "luminousplus"], (() => {
              Nt.updateConstData(), Ht.updateConstData(), At.updateConstData()
          })),
          rt = Ne("showOverPower", "hide", ["hide", "value", "percentage"]),
          nt = function(e, t, r = (() => {})) {
              let n = localStorage.getItem(e);
              (null === n || "true" !== n && "false" !== n) && (n = JSON.stringify(t), localStorage.setItem(e, n));
              let o = JSON.parse(n);
              const {
                  subscribe: s,
                  set: a,
                  update: i
              } = Ce(o);
              return {
                  subscribe: s,
                  set(t) {
                      a(t), localStorage.setItem(e, JSON.stringify(t)), r(t)
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
          at = [Ae, Le, Ze, Ye, Qe, et, tt, rt, nt, st],
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
      const ft = function(e, t, r) {
          if (it.randomUUID && !t && !e) return it.randomUUID();
          const n = (e = e || {}).random || (e.rng || dt)();
          if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
              r = r || 0;
              for (let e = 0; e < 16; ++e) t[r + e] = n[e];
              return t
          }
          return function(e, t = 0) {
              return ut[e[t + 0]] + ut[e[t + 1]] + ut[e[t + 2]] + ut[e[t + 3]] + "-" + ut[e[t + 4]] + ut[e[t + 5]] + "-" + ut[e[t + 6]] + ut[e[t + 7]] + "-" + ut[e[t + 8]] + ut[e[t + 9]] + "-" + ut[e[t + 10]] + ut[e[t + 11]] + ut[e[t + 12]] + ut[e[t + 13]] + ut[e[t + 14]] + ut[e[t + 15]]
          }(n)
      };
      class pt {
          constructor(e) {
              this.resolve = () => {}, this.reject = () => {}, this.handled = !1, this.retryTime = 0, this.uuid = ft(), this.payload = e;
              let t = this;
              this.promise = new Promise(((e, r) => {
                  t.resolve = e, t.reject = r
              }));
              try {
                  const t = Re(window.opener, Pe),
                      r = () => {
                          this.handled || (this.retryTime < 3 ? (this.retryTime += 1, t("request", e), this.timeout = setTimeout(r, 2e3)) : this.reject(new Error("Request timed out: 6000 ms")))
                      };
                  this.timeout = setTimeout(r, 2e3), t("request", e, this.uuid)
              } catch (e) {
                  this.reject(e)
              }
          }
      }
      const ht = new Map;
      async function gt(e, t, r) {
          const n = new pt({
              target: e,
              data: {
                  difficulty: t,
                  idx: r
              }
          });
          return ht.set(n.uuid, n), n.promise
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
              set: r,
              update: n
          } = Ce(e);
          return {
              subscribe: t,
              set: r,
              update: n,
              toggle() {
                  n((e => !e))
              }
          }
      }
      window.addEventListener("message", (function(e) {
          const {
              action: t,
              payload: r,
              uuid: n
          } = e.data;
          "ping" === t && (ht.has(n) || console.error("Unexpected response: " + n), ht.get(n).handled = !0, clearTimeout(ht.get(n)?.timeout)), "respond" === t && (ht.has(n) || console.error("Unexpected response: " + n), r.error ? (console.error("Error on handling request: " + r.target + "\n", r.error), ht.get(n)?.reject(r.error)) : ht.get(n)?.resolve(r.data), ht.delete(n))
      }), !1);
      const bt = new Map,
          yt = new Map;
      for (let e of Le.accepts) {
          const t = Object.entries(r(283)(`./${e}.json`)),
              n = Object.entries(r(692)(`./${e}.json`));
          bt.set(e, new Map(t.concat(n))), yt.set(e, bt.get(e)?.get("locale.name") || "Undefined locale name")
      }
      const wt = function(e, t) {
              return Me(t, (t => (r, n = {}) => function(t, r, n) {
                  if (!r) throw new Error("No key specified");
                  let o = e.get(t)?.get(r);
                  return void 0 === o ? (console.error(`No translation found for ${t}.${r}`), r) : (Object.keys(n).map((e => {
                      const t = new RegExp(`{{${e}}}`, "g");
                      o = o?.replace(t, n[e])
                  })), o)
              }(t, r, n)))
          }(bt, Le),
          $t = Ce("best"),
          xt = vt(!1),
          kt = Ce(""),
          jt = vt(!1),
          St = vt(!1),
          Tt = vt(!1),
          Ct = {};
      for (let e of tt.accepts) Ct[e] = void 0;
      const Mt = Me(tt, (async e => (Ct[e] || (Ct[e] = await fetch(`../data/song-const/${e}.json`).then((async e => await e.json()))), Ct[e])));

      function Et(e) {
          const {
              subscribe: t,
              set: r
          } = Ce([]);
          let n = !1,
              o = [];
          return {
              set: r,
              subscribe: t,
              async init() {
                  o = await gt(e), r(Ge(o, await d(Mt))), n = !0
              },
              async updateConstData() {
                  n && r(Ge(o, await d(Mt)))
              }
          }
      }
      const Nt = Et("recentRecord"),
          Ht = Et("playHistory"),
          Ut = (() => {
              const {
                  subscribe: e,
                  set: t
              } = Ce({});
              let r = !1;
              return {
                  set: t,
                  subscribe: e,
                  async init() {
                      r || (t(await gt("playerStats")), r = !0)
                  }
              }
          })(),
          At = (() => {
              const {
                  subscribe: e,
                  set: t
              } = Ce([]);
              let r = !1,
                  n = {},
                  o = [];
              return {
                  set: t,
                  subscribe: e,
                  async init() {
                      const e = Date.now(),
                          s = Number(localStorage.getItem("prevUpdateTime") ?? Number.NEGATIVE_INFINITY),
                          a = s == Number.NEGATIVE_INFINITY || e - s > ot[d(st)];
                      if (r) return;
                      const i = JSON.parse(JSON.stringify(d(Qe)));
                      for (let e of De)(a || i[e]) && (kt.set(d(wt)("record.fetch.fetching", {
                          diff: e.toLowerCase(),
                          diffStr: d(wt)("record.fetch.diff." + e.toLowerCase())
                      })), Array.prototype.push.apply(o, await gt("bestRecord", e)), n[e] = !0);
                      const l = Ge(o, await d(Mt), d(wt)("record.fetch.unknown"));
                      a && function(e) {
                          const t = {};
                          e.forEach((e => {
                              var r;
                              e.score < 0 || (t[r = e.idx] ?? (t[r] = {}), t[e.idx][e.difficulty] = e.score)
                          })), localStorage.setItem("prevPlayRecord", JSON.stringify(t)), localStorage.setItem("prevUpdateTime", Date.now().toString()), console.log("Saved record history at " + localStorage.getItem("prevUpdateTime"))
                      }(l), mt(l), t(l), r = !0
                  },
                  async updateConstData() {
                      r && t(Ge(o, await d(Mt), d(wt)("record.fetch.unknown")))
                  },
                  async updateDiffFilter() {
                      if (!r) return;
                      St.set(!0), jt.set(!0);
                      let e = !1;
                      try {
                          for (let t of De) !n[t] && d(Qe)[t] && (n[t] = !0, kt.set(d(wt)("record.fetch.fetching", {
                              diff: t.toLowerCase(),
                              diffStr: d(wt)("record.fetch.diff." + t.toLowerCase())
                          })), Array.prototype.push.apply(o, await gt("bestRecord", t)), e = !0);
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
          Lt = (() => {
              let e = 0;
              return () => (e += 1, `u${`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4)}${e}`)
          })();

      function Pt(e) {
          const t = [];
          for (let r = 0, n = e.length; r < n; r++) t.push(e[r]);
          return t
      }

      function Ot(e, t) {
          const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
          return r ? parseFloat(r.replace("px", "")) : 0
      }

      function Dt(e, t = {}) {
          return {
              width: t.width || function(e) {
                  const t = Ot(e, "border-left-width"),
                      r = Ot(e, "border-right-width");
                  return e.clientWidth + t + r
              }(e),
              height: t.height || function(e) {
                  const t = Ot(e, "border-top-width"),
                      r = Ot(e, "border-bottom-width");
                  return e.clientHeight + t + r
              }(e)
          }
      }
      const It = 16384;

      function _t(e) {
          return new Promise(((t, r) => {
              const n = new Image;
              n.decode = () => t(n), n.onload = () => t(n), n.onerror = r, n.crossOrigin = "anonymous", n.decoding = "async", n.src = e
          }))
      }
      const Rt = (e, t) => {
          if (e instanceof t) return !0;
          const r = Object.getPrototypeOf(e);
          return null !== r && (r.constructor.name === t.name || Rt(r, t))
      };

      function zt(e, t, r) {
          const n = window.getComputedStyle(e, r),
              o = n.getPropertyValue("content");
          if ("" === o || "none" === o) return;
          const s = Lt();
          try {
              t.className = `${t.className} ${s}`
          } catch (e) {
              return
          }
          const a = document.createElement("style");
          a.appendChild(function(e, t, r) {
              const n = `.${e}:${t}`,
                  o = r.cssText ? function(e) {
                      const t = e.getPropertyValue("content");
                      return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
                  }(r) : function(e) {
                      return Pt(e).map((t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")
                  }(r);
              return document.createTextNode(`${n}{${o}}`)
          }(s, r, n)), t.appendChild(a)
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
      async function Xt(e, t, r) {
          const n = await fetch(e, t);
          if (404 === n.status) throw new Error(`Resource "${n.url}" not found`);
          const o = await n.blob();
          return new Promise(((e, t) => {
              const s = new FileReader;
              s.onerror = t, s.onloadend = () => {
                  try {
                      e(r({
                          res: n,
                          result: s.result
                      }))
                  } catch (e) {
                      t(e)
                  }
              }, s.readAsDataURL(o)
          }))
      }
      const Gt = {};
      async function Yt(e, t, r) {
          const n = function(e, t, r) {
              let n = e.replace(/\?.*/, "");
              return r && (n = e), /ttf|otf|eot|woff2?/i.test(n) && (n = n.replace(/.*\//, "")), t ? `[${t}]${n}` : n
          }(e, t, r.includeQueryParams);
          if (null != Gt[n]) return Gt[n];
          let o;
          r.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
          try {
              const n = await Xt(e, r.fetchRequestInit, (({
                  res: e,
                  result: r
              }) => (t || (t = e.headers.get("Content-Type") || ""), function(e) {
                  return e.split(/,/)[1]
              }(r))));
              o = Jt(n, t)
          } catch (t) {
              o = r.imagePlaceholder || "";
              let n = `Failed to fetch resource: ${e}`;
              t && (n = "string" == typeof t ? t : t.message), n && console.warn(n)
          }
          return Gt[n] = o, o
      }
      const Zt = e => null != e.tagName && "SLOT" === e.tagName.toUpperCase();
      async function Qt(e, t, r) {
          return r || !t.filter || t.filter(e) ? Promise.resolve(e).then((e => async function(e, t) {
              return Rt(e, HTMLCanvasElement) ? async function(e) {
                  const t = e.toDataURL();
                  return "data:," === t ? e.cloneNode(!1) : _t(t)
              }(e): Rt(e, HTMLVideoElement) ? async function(e, t) {
                  if (e.currentSrc) {
                      const t = document.createElement("canvas"),
                          r = t.getContext("2d");
                      return t.width = e.clientWidth, t.height = e.clientHeight, null == r || r.drawImage(e, 0, 0, t.width, t.height), _t(t.toDataURL())
                  }
                  const r = e.poster,
                      n = qt(r);
                  return _t(await Yt(r, n, t))
              }(e, t): Rt(e, HTMLIFrameElement) ? async function(e) {
                  var t;
                  try {
                      if (null === (t = null == e ? void 0 : e.contentDocument) || void 0 === t ? void 0 : t.body) return await Qt(e.contentDocument.body, {}, !0)
                  } catch (e) {}
                  return e.cloneNode(!1)
              }(e): e.cloneNode(!1)
          }(e, t))).then((r => async function(e, t, r) {
              var n, o;
              let s = [];
              return s = Zt(e) && e.assignedNodes ? Pt(e.assignedNodes()) : Rt(e, HTMLIFrameElement) && (null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body) ? Pt(e.contentDocument.body.childNodes) : Pt((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes), 0 === s.length || Rt(e, HTMLVideoElement) || await s.reduce(((e, n) => e.then((() => Qt(n, r))).then((e => {
                  e && t.appendChild(e)
              }))), Promise.resolve()), t
          }(e, r, t))).then((t => function(e, t) {
              return Rt(t, Element) && (function(e, t) {
                  const r = t.style;
                  if (!r) return;
                  const n = window.getComputedStyle(e);
                  n.cssText ? (r.cssText = n.cssText, r.transformOrigin = n.transformOrigin) : Pt(n).forEach((o => {
                      let s = n.getPropertyValue(o);
                      if ("font-size" === o && s.endsWith("px")) {
                          const e = Math.floor(parseFloat(s.substring(0, s.length - 2))) - .1;
                          s = `${e}px`
                      }
                      Rt(e, HTMLIFrameElement) && "display" === o && "inline" === s && (s = "block"), "d" === o && t.getAttribute("d") && (s = `path(${t.getAttribute("d")})`), r.setProperty(o, s, n.getPropertyPriority(o))
                  }))
              }(e, t), function(e, t) {
                  zt(e, t, ":before"), zt(e, t, ":after")
              }(e, t), function(e, t) {
                  Rt(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Rt(e, HTMLInputElement) && t.setAttribute("value", e.value)
              }(e, t), function(e, t) {
                  if (Rt(e, HTMLSelectElement)) {
                      const r = t,
                          n = Array.from(r.children).find((t => e.value === t.getAttribute("value")));
                      n && n.setAttribute("selected", "")
                  }
              }(e, t)), t
          }(e, t))).then((e => async function(e, t) {
              const r = e.querySelectorAll ? e.querySelectorAll("use") : [];
              if (0 === r.length) return e;
              const n = {};
              for (let o = 0; o < r.length; o++) {
                  const s = r[o].getAttribute("xlink:href");
                  if (s) {
                      const r = e.querySelector(s),
                          o = document.querySelector(s);
                      r || !o || n[s] || (n[s] = await Qt(o, t, !0))
                  }
              }
              const o = Object.values(n);
              if (o.length) {
                  const t = "http://www.w3.org/1999/xhtml",
                      r = document.createElementNS(t, "svg");
                  r.setAttribute("xmlns", t), r.style.position = "absolute", r.style.width = "0", r.style.height = "0", r.style.overflow = "hidden", r.style.display = "none";
                  const n = document.createElementNS(t, "defs");
                  r.appendChild(n);
                  for (let e = 0; e < o.length; e++) n.appendChild(o[e]);
                  e.appendChild(r)
              }
              return e
          }(e, t))) : null
      }
      const Kt = /url\((['"]?)([^'"]+?)\1\)/g,
          er = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
          tr = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

      function rr(e) {
          return -1 !== e.search(Kt)
      }
      async function nr(e, t, r) {
          if (!rr(e)) return e;
          const n = function(e, {
                  preferredFontFormat: t
              }) {
                  return t ? e.replace(tr, (e => {
                      for (;;) {
                          const [r, , n] = er.exec(e) || [];
                          if (!n) return "";
                          if (n === t) return `src: ${r};`
                      }
                  })) : e
              }(e, r),
              o = function(e) {
                  const t = [];
                  return e.replace(Kt, ((e, r, n) => (t.push(n), e))), t.filter((e => !Wt(e)))
              }(n);
          return o.reduce(((e, n) => e.then((e => async function(e, t, r, n, o) {
              try {
                  const s = r ? function(e, t) {
                          if (e.match(/^[a-z]+:\/\//i)) return e;
                          if (e.match(/^\/\//)) return window.location.protocol + e;
                          if (e.match(/^[a-z]+:/i)) return e;
                          const r = document.implementation.createHTMLDocument(),
                              n = r.createElement("base"),
                              o = r.createElement("a");
                          return r.head.appendChild(n), r.body.appendChild(o), t && (n.href = t), o.href = e, o.href
                      }(t, r) : t,
                      a = qt(t);
                  let i;
                  return i = o ? Jt(await o(s), a) : await Yt(s, a, n), e.replace(function(e) {
                      const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                      return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
                  }(t), `$1${i}$3`)
              } catch (e) {}
              return e
          }(e, n, t, r)))), Promise.resolve(n))
      }
      async function or(e, t, r) {
          var n;
          const o = null === (n = t.style) || void 0 === n ? void 0 : n.getPropertyValue(e);
          if (o) {
              const n = await nr(o, null, r);
              return t.style.setProperty(e, n, t.style.getPropertyPriority(e)), !0
          }
          return !1
      }
      async function sr(e, t) {
          Rt(e, Element) && (await async function(e, t) {
              await or("background", e, t) || await or("background-image", e, t), await or("mask", e, t) || await or("mask-image", e, t)
          }(e, t), await async function(e, t) {
              const r = Rt(e, HTMLImageElement);
              if ((!r || Wt(e.src)) && (!Rt(e, SVGImageElement) || Wt(e.href.baseVal))) return;
              const n = r ? e.src : e.href.baseVal,
                  o = await Yt(n, qt(n), t);
              await new Promise(((t, n) => {
                  e.onload = t, e.onerror = n;
                  const s = e;
                  s.decode && (s.decode = t), "lazy" === s.loading && (s.loading = "eager"), r ? (e.srcset = "", e.src = o) : e.href.baseVal = o
              }))
          }(e, t), await async function(e, t) {
              const r = Pt(e.childNodes).map((e => sr(e, t)));
              await Promise.all(r).then((() => e))
          }(e, t))
      }
      const ar = {};
      async function ir(e) {
          let t = ar[e];
          if (null != t) return t;
          const r = await fetch(e);
          return t = {
              url: e,
              cssText: await r.text()
          }, ar[e] = t, t
      }
      async function lr(e, t) {
          let r = e.cssText;
          const n = /url\(["']?([^"')]+)["']?\)/g,
              o = (r.match(/url\([^)]+\)/g) || []).map((async o => {
                  let s = o.replace(n, "$1");
                  return s.startsWith("https://") || (s = new URL(s, e.url).href), Xt(s, t.fetchRequestInit, (({
                      result: e
                  }) => (r = r.replace(o, `url(${e})`), [o, e])))
              }));
          return Promise.all(o).then((() => r))
      }

      function cr(e) {
          if (null == e) return [];
          const t = [];
          let r = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
          const n = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
          for (;;) {
              const e = n.exec(r);
              if (null === e) break;
              t.push(e[0])
          }
          r = r.replace(n, "");
          const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
              s = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
          for (;;) {
              let e = o.exec(r);
              if (null === e) {
                  if (e = s.exec(r), null === e) break;
                  o.lastIndex = s.lastIndex
              } else s.lastIndex = o.lastIndex;
              t.push(e[0])
          }
          return t
      }
      async function dr(e, t) {
          const r = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await async function(e, t) {
              const r = await async function(e, t) {
                  if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
                  const r = Pt(e.ownerDocument.styleSheets),
                      n = await async function(e, t) {
                          const r = [],
                              n = [];
                          return e.forEach((r => {
                              if ("cssRules" in r) try {
                                  Pt(r.cssRules || []).forEach(((e, o) => {
                                      if (e.type === CSSRule.IMPORT_RULE) {
                                          let s = o + 1;
                                          const a = ir(e.href).then((e => lr(e, t))).then((e => cr(e).forEach((e => {
                                              try {
                                                  r.insertRule(e, e.startsWith("@import") ? s += 1 : r.cssRules.length)
                                              } catch (t) {
                                                  console.error("Error inserting rule from remote css", {
                                                      rule: e,
                                                      error: t
                                                  })
                                              }
                                          })))).catch((e => {
                                              console.error("Error loading remote css", e.toString())
                                          }));
                                          n.push(a)
                                      }
                                  }))
                              } catch (o) {
                                  const s = e.find((e => null == e.href)) || document.styleSheets[0];
                                  null != r.href && n.push(ir(r.href).then((e => lr(e, t))).then((e => cr(e).forEach((e => {
                                      s.insertRule(e, r.cssRules.length)
                                  })))).catch((e => {
                                      console.error("Error loading remote stylesheet", e)
                                  }))), console.error("Error inlining remote css file", o)
                              }
                          })), Promise.all(n).then((() => (e.forEach((e => {
                              if ("cssRules" in e) try {
                                  Pt(e.cssRules || []).forEach((e => {
                                      r.push(e)
                                  }))
                              } catch (t) {
                                  console.error(`Error while reading CSS rules from ${e.href}`, t)
                              }
                          })), r)))
                      }(r, t);
                  return function(e) {
                      return e.filter((e => e.type === CSSRule.FONT_FACE_RULE)).filter((e => rr(e.style.getPropertyValue("src"))))
                  }(n)
              }(e, t);
              return (await Promise.all(r.map((e => {
                  const r = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                  return nr(e.cssText, r, t)
              })))).join("\n")
          }(e, t);
          if (r) {
              const t = document.createElement("style"),
                  n = document.createTextNode(r);
              t.appendChild(n), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
          }
      }
      async function ur(e, t = {}) {
          const {
              width: r,
              height: n
          } = Dt(e, t), o = await Qt(e, t, !0);
          return await dr(o, t), await sr(o, t),
              function(e, t) {
                  const {
                      style: r
                  } = e;
                  t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.width && (r.width = `${t.width}px`), t.height && (r.height = `${t.height}px`);
                  const n = t.style;
                  null != n && Object.keys(n).forEach((e => {
                      r[e] = n[e]
                  }))
              }(o, t), await async function(e, t, r) {
                  const n = "http://www.w3.org/2000/svg",
                      o = document.createElementNS(n, "svg"),
                      s = document.createElementNS(n, "foreignObject");
                  return o.setAttribute("width", `${t}`), o.setAttribute("height", `${r}`), o.setAttribute("viewBox", `0 0 ${t} ${r}`), s.setAttribute("width", "100%"), s.setAttribute("height", "100%"), s.setAttribute("x", "0"), s.setAttribute("y", "0"), s.setAttribute("externalResourcesRequired", "true"), o.appendChild(s), s.appendChild(e), async function(e) {
                      return Promise.resolve().then((() => (new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e => `data:image/svg+xml;charset=utf-8,${e}`))
                  }(o)
              }(o, r, n)
      }
      async function fr(e, t = {}) {
          const r = await async function(e, t = {}) {
              const {
                  width: r,
                  height: n
              } = Dt(e, t), o = await ur(e, t), s = await _t(o), a = document.createElement("canvas"), i = a.getContext("2d"), l = t.pixelRatio || function() {
                  let e, t;
                  try {
                      t = process
                  } catch (e) {}
                  const r = t && t.env ? t.env.devicePixelRatio : null;
                  return r && (e = parseInt(r, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1
              }(), c = t.canvasWidth || r, d = t.canvasHeight || n;
              return a.width = c * l, a.height = d * l, t.skipAutoScale || function(e) {
                  (e.width > It || e.height > It) && (e.width > It && e.height > It ? e.width > e.height ? (e.height *= It / e.width, e.width = It) : (e.width *= It / e.height, e.height = It) : e.width > It ? (e.height *= It / e.width, e.width = It) : (e.width *= It / e.height, e.height = It))
              }(a), a.style.width = `${c}`, a.style.height = `${d}`, t.backgroundColor && (i.fillStyle = t.backgroundColor, i.fillRect(0, 0, a.width, a.height)), i.drawImage(s, 0, 0, a.width, a.height), a
          }(e, t), n = await
          function(e, t = {}) {
              return e.toBlob ? new Promise((r => {
                  e.toBlob(r, t.type ? t.type : "image/png", t.quality ? t.quality : 1)
              })) : new Promise((r => {
                  const n = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]),
                      o = n.length,
                      s = new Uint8Array(o);
                  for (let e = 0; e < o; e += 1) s[e] = n.charCodeAt(e);
                  r(new Blob([s], {
                      type: t.type ? t.type : "image/png"
                  }))
              }))
          }(r);
          return n
      }
      const pr = "chunithm_b40.png";
      async function hr() {
          const e = document.querySelector("main");
          if (null == e) return alert(d(wt)("share.error", {
              error: "resultNode is null"
          }));
          let t = e?.cloneNode(!0);
          t.id = "copied-main", t.querySelectorAll("tbody tr:nth-child(n+41)").forEach((e => {
              e.remove()
          })), e?.parentElement?.appendChild(t), fr(t, {
              backgroundColor: window.getComputedStyle(document.body).backgroundColor
          }).then((async e => {
              if (t.remove(), null != e)
                  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                      const t = new File([e], pr, {
                          type: e.type
                      });
                      navigator?.canShare({
                          files: [t]
                      }) && navigator.share({
                          files: [t]
                      }).catch(console.log)
                  } else {
                      const t = document.createElement("a");
                      t.href = window.URL.createObjectURL(e), t.download = pr, t.click()
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

      function gr(e) {
          j(e, "svelte-iy49t2", ".wrapper.svelte-iy49t2{display:flex;-ms-flex-direction:row;flex-direction:row;justify-content:space-between;align-items:center;gap:1em;position:fixed;right:1rem;top:0.6rem}button.svelte-iy49t2{width:2rem;height:2rem;background:var(--theme-border);opacity:0.8;border-radius:40%;font-weight:bold}svg.svelte-iy49t2{overflow:visible}")
      }

      function mr(t) {
          let r, n, o, a, i, l, c, d, u, f, p, h, g;
          return {
              c() {
                  r = H("div"), n = H("button"), o = U("svg"), a = U("path"), l = L(), c = L(), d = H("button"), u = U("svg"), f = U("path"), D(a, "d", "M7 2H11V8H15L9 14 3 8H7V2ZM3 14H15V16H3V14Z"), D(a, "fill", "var(--theme-text)"), D(o, "width", "18"), D(o, "height", "18"), D(o, "class", "svelte-iy49t2"), D(n, "type", "button"), D(n, "title", i = t[0]("header.title.dl")), D(n, "class", "svelte-iy49t2"), D(f, "d", "M2 4H16V6H2V4ZM2 8H16V10H2V8ZM2 12H16V14H2V12Z"), D(f, "fill", "var(--theme-text)"), D(u, "width", "18"), D(u, "height", "18"), D(u, "class", "svelte-iy49t2"), D(d, "type", "button"), D(d, "title", p = t[0]("header.title.settings")), D(d, "class", "svelte-iy49t2"), D(r, "class", "wrapper svelte-iy49t2")
              },
              m(e, t) {
                  M(e, r, t), k(r, n), k(n, o), k(o, a), k(r, l), k(r, c), k(r, d), k(d, u), k(u, f), h || (g = [O(n, "click", hr), O(d, "click", xt.toggle)], h = !0)
              },
              p(e, [t]) {
                  1 & t && i !== (i = e[0]("header.title.dl")) && D(n, "title", i), 1 & t && p !== (p = e[0]("header.title.settings")) && D(d, "title", p)
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), h = !1, s(g)
              }
          }
      }

      function vr(e, t, r) {
          let n, o;
          return u(e, wt, (e => r(0, n = e))), u(e, tt, (e => r(1, o = e))), [n, o, () => {
              p(tt, o = tt.accepts[(tt.accepts.indexOf(o) + 1) % tt.accepts.length], o)
          }]
      }
      const br = class extends Se {
          constructor(e) {
              super(), je(this, e, vr, mr, i, {}, gr)
          }
      };

      function yr(e) {
          j(e, "svelte-1aafgfe", ".wrapper.svelte-1aafgfe.svelte-1aafgfe{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:0.5rem}.indicators.svelte-1aafgfe.svelte-1aafgfe{height:0.8rem;position:relative}.indicators.svelte-1aafgfe div.svelte-1aafgfe{background-color:var(--theme-bg-sub);height:1.6rem;width:1.6rem;border-radius:40%;display:flex;justify-content:center;align-items:center;position:absolute;border:var(--theme-border) 0.2rem solid}.indicators.svelte-1aafgfe div.low.svelte-1aafgfe{border-bottom-right-radius:0;transform:translateX(-0.4rem)}.indicators.svelte-1aafgfe div.high.svelte-1aafgfe{border-bottom-left-radius:0;transform:translateX(1.6rem)}.slider.svelte-1aafgfe.svelte-1aafgfe{display:flex;-ms-flex-direction:column;flex-direction:column;justify-content:center;width:100%;height:3.5rem;position:relative}.slider-bg.svelte-1aafgfe.svelte-1aafgfe{height:0.4rem;width:calc(100% - 2.6rem);margin-left:1.4rem;background-color:var(--theme-border);position:absolute;border-radius:0.2rem}input[type=number].svelte-1aafgfe.svelte-1aafgfe{background-color:transparent;border:none;color:inherit;font-family:inherit;max-width:150%;text-align:center;-moz-appearance:textfield;appearance:textfield}input.svelte-1aafgfe.svelte-1aafgfe::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=range].svelte-1aafgfe.svelte-1aafgfe{-webkit-appearance:none;appearance:none;height:0;width:calc(100% - 1.5rem);position:absolute;border-radius:0.2rem;pointer-events:none}input[type=range].low.svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb{border-radius:50% 0 0 50%}input[type=range].low.svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb{border-radius:50% 0 0 50%}input[type=range].high.svelte-1aafgfe.svelte-1aafgfe{margin-left:1.6rem}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb{z-index:1;-webkit-appearance:none;pointer-events:all;width:1.5rem;height:2rem;background-color:var(--theme-text-dim);border-radius:0 50% 50% 0;cursor:pointer;transition:0.2s}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb:hover{background-color:var(--theme-text)}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-webkit-slider-thumb:active{-webkit-box-shadow:0 0 0.5rem var(--theme-text-dim);box-shadow:0 0 0.5rem var(--theme-text-dim)}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb{z-index:1;-webkit-appearance:none;pointer-events:all;width:1.5rem;height:2rem;background-color:var(--theme-text-dim);border-radius:0 50% 50% 0;cursor:pointer;transition:0.2s}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb:hover{background-color:var(--theme-text)}input[type=range].svelte-1aafgfe.svelte-1aafgfe::-moz-range-thumb:active{-webkit-box-shadow:0 0 0.5rem var(--theme-text-dim);box-shadow:0 0 0.5rem var(--theme-text-dim)}input[type=range].svelte-1aafgfe.svelte-1aafgfe:focus-visible{outline:none}input[type=range].svelte-1aafgfe.svelte-1aafgfe:focus-visible::-webkit-slider-thumb{outline:var(--theme-border) auto 1px}input[type=range].svelte-1aafgfe.svelte-1aafgfe:focus-visible::-moz-range-thumb{outline:var(--theme-border) auto 1px}")
      }

      function wr(t) {
          let r, n, o, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w;
          return {
              c() {
                  r = H("div"), n = H("span"), o = L(), a = H("div"), i = H("div"), l = H("input"), c = L(), d = H("div"), u = H("input"), f = L(), p = H("div"), h = H("div"), g = L(), m = H("input"), v = L(), b = H("input"), l.value = t[6], D(l, "type", "number"), D(l, "min", t[3]), D(l, "max", t[4]), D(l, "step", t[5]), D(l, "inputmode", "decimal"), D(l, "class", "svelte-1aafgfe"), D(i, "class", "low svelte-1aafgfe"), z(i, "left", "calc((100% - 3rem) * " + t[9] + " / 100)"), u.value = t[7], D(u, "type", "number"), D(u, "min", t[3]), D(u, "max", t[4]), D(u, "step", t[5]), D(u, "inputmode", "decimal"), D(u, "class", "svelte-1aafgfe"), D(d, "class", "high svelte-1aafgfe"), z(d, "left", "calc((100% - 3rem) * " + t[8] + " / 100)"), D(a, "class", "indicators svelte-1aafgfe"), D(h, "class", "slider-bg svelte-1aafgfe"), z(h, "background", "linear-gradient( to right, var(--theme-border) 0%, var(--theme-border) " + (t[9] - 1) + "%, var(--theme-control) " + (t[9] - 1) + "%, var(--theme-control) " + (t[8] + 1) + "%, var(--theme-border) " + (t[8] + 1) + "%, var(--theme-border) 100% )"), D(m, "class", "low svelte-1aafgfe"), D(m, "type", "range"), D(m, "min", t[3]), D(m, "max", t[4]), D(m, "step", t[5]), D(b, "class", "high svelte-1aafgfe"), D(b, "type", "range"), D(b, "min", t[3]), D(b, "max", t[4]), D(b, "step", t[5]), D(p, "class", "slider svelte-1aafgfe"), D(r, "class", "wrapper svelte-1aafgfe")
              },
              m(e, s) {
                  M(e, r, s), k(r, n), n.innerHTML = t[2], k(r, o), k(r, a), k(a, i), k(i, l), k(a, c), k(a, d), k(d, u), k(r, f), k(r, p), k(p, h), k(p, g), k(p, m), R(m, t[6]), k(p, v), k(p, b), R(b, t[7]), y || (w = [O(l, "change", t[10]), O(u, "change", t[11]), O(m, "change", t[12]), O(m, "input", t[12]), O(m, "change", t[13]), O(m, "input", t[14]), O(b, "change", t[15]), O(b, "input", t[15]), O(b, "change", t[16]), O(b, "input", t[17])], y = !0)
              },
              p(e, [t]) {
                  4 & t && (n.innerHTML = e[2]), 64 & t && l.value !== e[6] && (l.value = e[6]), 8 & t && D(l, "min", e[3]), 16 & t && D(l, "max", e[4]), 32 & t && D(l, "step", e[5]), 512 & t && z(i, "left", "calc((100% - 3rem) * " + e[9] + " / 100)"), 128 & t && u.value !== e[7] && (u.value = e[7]), 8 & t && D(u, "min", e[3]), 16 & t && D(u, "max", e[4]), 32 & t && D(u, "step", e[5]), 256 & t && z(d, "left", "calc((100% - 3rem) * " + e[8] + " / 100)"), 768 & t && z(h, "background", "linear-gradient( to right, var(--theme-border) 0%, var(--theme-border) " + (e[9] - 1) + "%, var(--theme-control) " + (e[9] - 1) + "%, var(--theme-control) " + (e[8] + 1) + "%, var(--theme-border) " + (e[8] + 1) + "%, var(--theme-border) 100% )"), 8 & t && D(m, "min", e[3]), 16 & t && D(m, "max", e[4]), 32 & t && D(m, "step", e[5]), 64 & t && R(m, e[6]), 8 & t && D(b, "min", e[3]), 16 & t && D(b, "max", e[4]), 32 & t && D(b, "step", e[5]), 128 & t && R(b, e[7])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), y = !1, s(w)
              }
          }
      }

      function $r(e, t, r) {
          let n, o, {
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
              "label" in e && r(2, s = e.label), "min" in e && r(3, a = e.min), "max" in e && r(4, i = e.max), "step" in e && r(5, l = e.step), "low" in e && r(0, c = e.low), "high" in e && r(1, d = e.high)
          }, e.$$.update = () => {
              72 & e.$$.dirty && r(9, n = (f - a) / u * 100), 136 & e.$$.dirty && r(8, o = (p - a) / u * 100)
          }, [c, d, s, a, i, l, f, p, o, n, e => {
              r(6, f = parseFloat(e.currentTarget.value) || f), r(6, f = Math.min(i, Math.max(a, f))), f > p && r(7, p = f), e.currentTarget.value = f.toString(), r(0, c = f), r(1, d = p)
          }, e => {
              r(7, p = parseFloat(e.currentTarget.value) || p), r(7, p = Math.min(i, Math.max(a, p))), p < f && r(6, f = p), e.currentTarget.value = p.toString(), r(0, c = f), r(1, d = p)
          }, function() {
              f = I(this.value), r(6, f)
          }, () => {
              r(0, c = f), r(1, d = p)
          }, () => {
              f > p && r(7, p = f)
          }, function() {
              p = I(this.value), r(7, p)
          }, () => {
              r(0, c = f), r(1, d = p)
          }, () => {
              p < f && r(6, f = p)
          }]
      }
      const xr = class extends Se {
          constructor(e) {
              super(), je(this, e, $r, wr, i, {
                  label: 2,
                  min: 3,
                  max: 4,
                  step: 5,
                  low: 0,
                  high: 1
              }, yr)
          }
      };

      function kr(e) {
          j(e, "svelte-y51pcd", "label.svelte-y51pcd{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:0.5rem}select.svelte-y51pcd{width:100%;height:3rem;padding-left:1rem;padding-right:2.5rem;font-size:1em;font-weight:bold;background:var(--theme-bg-main);border:var(--theme-border) 2px solid;border-radius:1rem;color:inherit;cursor:pointer;appearance:none;background-image:linear-gradient(45deg, transparent 50%, currentColor 0), linear-gradient(135deg, currentColor 50%, transparent 0);background-position:calc(100% - 20px) calc(1px + 50%), calc(100% - 16.02px) calc(1px + 50%);background-size:4px 4px, 4px 4px;background-repeat:no-repeat}")
      }

      function jr(e) {
          let t, r, n, o, s, a, i;
          const l = e[3].default,
              c = function(e, t, r, n) {
                  if (e) {
                      const n = f(e, t, r, null);
                      return e[0](n)
                  }
              }(l, e, e[2]);
          return {
              c() {
                  t = H("label"), r = H("span"), n = L(), o = H("select"), c && c.c(), D(o, "class", "svelte-y51pcd"), void 0 === e[0] && ne((() => e[4].call(o))), D(t, "class", "svelte-y51pcd")
              },
              m(l, d) {
                  M(l, t, d), k(t, r), r.innerHTML = e[1], k(t, n), k(t, o), c && c.m(o, null), F(o, e[0], !0), s = !0, a || (i = O(o, "change", e[4]), a = !0)
              },
              p(e, [t]) {
                  (!s || 2 & t) && (r.innerHTML = e[1]), c && c.p && (!s || 4 & t) && function(e, t, r, n, o, s) {
                      if (o) {
                          const a = f(t, r, n, s);
                          e.p(a, o)
                      }
                  }(c, l, e, e[2], s ? function(e, t, r, n) {
                      if (e[2] && n) {
                          const o = e[2](n(r));
                          if (void 0 === t.dirty) return o;
                          if ("object" == typeof o) {
                              const e = [],
                                  r = Math.max(t.dirty.length, o.length);
                              for (let n = 0; n < r; n += 1) e[n] = t.dirty[n] | o[n];
                              return e
                          }
                          return t.dirty | o
                      }
                      return t.dirty
                  }(l, e[2], t, null) : function(e) {
                      if (e.ctx.length > 32) {
                          const t = [],
                              r = e.ctx.length / 32;
                          for (let e = 0; e < r; e++) t[e] = -1;
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

      function Sr(e, t, r) {
          let {
              $$slots: n = {},
              $$scope: o
          } = t, {
              value: s
          } = t, {
              label: a
          } = t;
          return e.$$set = e => {
              "value" in e && r(0, s = e.value), "label" in e && r(1, a = e.label), "$$scope" in e && r(2, o = e.$$scope)
          }, [s, a, o, n, function() {
              s = function(e) {
                  const t = e.querySelector(":checked");
                  return t && t.__value
              }(this), r(0, s)
          }]
      }
      const Tr = class extends Se {
          constructor(e) {
              super(), je(this, e, Sr, jr, i, {
                  value: 0,
                  label: 1
              }, kr)
          }
      };

      function Cr(e) {
          j(e, "svelte-9ola9o", 'label.svelte-9ola9o.svelte-9ola9o{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:0.5rem}.wrapper.svelte-9ola9o.svelte-9ola9o{position:relative;width:4.5rem;height:2rem;display:inline-block}input.svelte-9ola9o.svelte-9ola9o{width:0;height:0;opacity:0;position:absolute}input:focus-visible+.wrapper.svelte-9ola9o .slider.svelte-9ola9o{outline:var(--theme-border) auto 1px}input:checked+.wrapper.svelte-9ola9o .slider.svelte-9ola9o{background-color:var(--theme-control)}input:checked+.wrapper.svelte-9ola9o .slider.svelte-9ola9o:before{transform:translateX(2.5rem)}input:checked+.wrapper.svelte-9ola9o .slider.svelte-9ola9o:after{content:"ON";left:0.6rem;right:initial}.slider.svelte-9ola9o.svelte-9ola9o{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--theme-bg-sub);transition:0.2s;border-radius:0.8rem}.slider.svelte-9ola9o.svelte-9ola9o:after{color:var(--theme-text-control);position:absolute;content:"OFF";display:flex;align-items:center;height:100%;right:0.6rem;font-weight:bold}.slider.svelte-9ola9o.svelte-9ola9o:before{position:absolute;content:"";height:1.6rem;width:1.6rem;left:0.2rem;bottom:0.2rem;background-color:var(--theme-text-control);transition:0.2s;border-radius:40%}')
      }

      function Mr(t) {
          let r, n, o, s, a, i, l, c;
          return {
              c() {
                  r = H("label"), n = H("span"), o = L(), s = H("input"), a = L(), i = H("div"), i.innerHTML = '<span class="slider svelte-9ola9o"></span>', D(s, "type", "checkbox"), D(s, "class", "svelte-9ola9o"), D(i, "class", "wrapper svelte-9ola9o"), D(r, "class", "svelte-9ola9o")
              },
              m(e, d) {
                  M(e, r, d), k(r, n), n.innerHTML = t[1], k(r, o), k(r, s), s.checked = t[0], k(r, a), k(r, i), l || (c = O(s, "change", t[2]), l = !0)
              },
              p(e, [t]) {
                  2 & t && (n.innerHTML = e[1]), 1 & t && (s.checked = e[0])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), l = !1, c()
              }
          }
      }

      function Er(e, t, r) {
          let {
              checked: n = !1
          } = t, {
              label: o
          } = t;
          return e.$$set = e => {
              "checked" in e && r(0, n = e.checked), "label" in e && r(1, o = e.label)
          }, [n, o, function() {
              n = this.checked, r(0, n)
          }]
      }
      const Nr = class extends Se {
          constructor(e) {
              super(), je(this, e, Er, Mr, i, {
                  checked: 0,
                  label: 1
              }, Cr)
          }
      };

      function Hr(e) {
          const t = e - 1;
          return t * t * t + 1
      }

      function Ur(e, {
          delay: r = 0,
          duration: n = 400,
          easing: o = t
      } = {}) {
          const s = +getComputedStyle(e).opacity;
          return {
              delay: r,
              duration: n,
              easing: o,
              css: e => "opacity: " + e * s
          }
      }

      function Ar(e, {
          delay: t = 0,
          duration: r = 400,
          easing: n = Hr,
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
              duration: r,
              easing: n,
              css: (e, t) => `\n\t\t\ttransform: ${c} translate(${(1-e)*u}${f}, ${(1-e)*p}${g});\n\t\t\topacity: ${l-d*t}`
          }
      }

      function Lr(e) {
          j(e, "svelte-1lhvhf8", ".wrapper.svelte-1lhvhf8{padding:0.5rem;display:flex;gap:0.5rem;align-items:center}input[type=number].svelte-1lhvhf8{background-color:var(--theme-bg-sub);color:var(--theme-text-control);border:none;border-radius:0.2rem;width:4rem;padding:0.5rem;-moz-appearance:textfield;appearance:textfield;flex-grow:1}input[type=number].svelte-1lhvhf8::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.btn.svelte-1lhvhf8{width:-moz-fit-content;width:fit-content;padding:0.5rem 1.5rem;border-radius:0.8rem;background-color:var(--theme-control);color:var(--theme-text-control)}.btn[disabled].svelte-1lhvhf8{background-color:var(--theme-border);cursor:no-drop}")
      }

      function Pr(t) {
          let r, n, o, a, i, l, c, d, u, f, p, h = t[3]("playcount.fetch.button") + "";
          return {
              c() {
                  r = H("div"), n = H("button"), a = L(), i = H("input"), l = L(), c = H("span"), c.textContent = "～", d = L(), u = H("input"), D(n, "type", "button"), D(n, "class", "btn svelte-1lhvhf8"), n.disabled = o = t[2] || Or(t[0], t[1]), D(i, "type", "number"), D(i, "min", "1"), D(i, "placeholder", "from"), D(i, "inputmode", "numeric"), D(i, "class", "svelte-1lhvhf8"), D(u, "type", "number"), D(u, "min", "1"), D(u, "placeholder", "to"), D(u, "inputmode", "numeric"), D(u, "class", "svelte-1lhvhf8"), D(r, "class", "wrapper svelte-1lhvhf8")
              },
              m(e, o) {
                  M(e, r, o), k(r, n), n.innerHTML = h, k(r, a), k(r, i), R(i, t[0]), k(r, l), k(r, c), k(r, d), k(r, u), R(u, t[1]), f || (p = [O(n, "click", t[5]), O(i, "input", t[6]), O(u, "input", t[7])], f = !0)
              },
              p(e, [t]) {
                  8 & t && h !== (h = e[3]("playcount.fetch.button") + "") && (n.innerHTML = h), 7 & t && o !== (o = e[2] || Or(e[0], e[1])) && (n.disabled = o), 1 & t && I(i.value) !== e[0] && R(i, e[0]), 2 & t && I(u.value) !== e[1] && R(u, e[1])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), f = !1, s(p)
              }
          }
      }

      function Or(e, t) {
          return isNaN(e) || isNaN(t) || null == e || null == t || t < e
      }

      function Dr(e, t, r) {
          let n, o, s, a, i, l;
          u(e, jt, (e => r(2, n = e))), u(e, wt, (e => r(3, o = e))), u(e, kt, (e => r(8, s = e))), u(e, St, (e => r(9, a = e))), u(e, At, (e => r(10, i = e))), u(e, xt, (e => r(11, l = e)));
          let c = 1,
              d = 40;
          async function f(e, t) {
              if (!Or(e, t)) {
                  p(St, a = !0, a), p(jt, n = !0, n), p(xt, l = !1, l);
                  try {
                      const r = i.slice(e - 1, t).length;
                      for (const [n, s] of i.slice(e - 1, t).entries()) kt.set(o("playcount.fetch.progress", {
                          progress: `${n}`,
                          all: `${r}`
                      })), null == s.playCount && (s.playCount = await gt("songPlayCount", s.difficulty, s.idx), At.set(i));
                      p(jt, n = !1, n), p(St, a = !1, a)
                  } catch {
                      p(St, a = !1, a), p(kt, s = o("playcount.fetch.error"), s), setTimeout((() => {
                          p(jt, n = !1, n)
                      }), 6e3)
                  }
              }
          }
          return [c, d, n, o, f, () => f(c, d), function() {
              c = I(this.value), r(0, c)
          }, function() {
              d = I(this.value), r(1, d)
          }]
      }
      const Ir = class extends Se {
          constructor(e) {
              super(), je(this, e, Dr, Pr, i, {}, Lr)
          }
      };

      function _r(e) {
          j(e, "svelte-1dczp1w", ".wrapper.svelte-1dczp1w{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5em;gap:1rem}.btns.svelte-1dczp1w{display:flex;-ms-flex-direction:row;flex-direction:row;gap:0.5em}button.svelte-1dczp1w{width:100%;padding:0.5em;border-radius:0.5em;background-color:var(--theme-bg-sub);border:3px solid var(--theme-control);filter:brightness(0.5)}button[disabled].svelte-1dczp1w{cursor:no-drop;border:3px solid var(--theme-bg-sub)}button.svelte-1dczp1w:hover{filter:brightness(0.8)}button.activated.svelte-1dczp1w{filter:brightness(1)}button[data-diff=ULT].svelte-1dczp1w{color:var(--theme-song-ult)}button[data-diff=MAS].svelte-1dczp1w{color:var(--theme-song-mas)}button[data-diff=EXP].svelte-1dczp1w{color:var(--theme-song-exp)}button[data-diff=ADV].svelte-1dczp1w{color:var(--theme-song-adv)}button[data-diff=BAS].svelte-1dczp1w{color:var(--theme-song-bas)}")
      }

      function Rr(e, t, r) {
          const n = e.slice();
          return n[4] = t[r], n
      }

      function zr(e) {
          let t, r = e[0]("settings.filter.diff.warn") + "";
          return {
              c() {
                  t = H("span"), z(t, "color", "var(--theme-text-dim)")
              },
              m(e, n) {
                  M(e, t, n), t.innerHTML = r
              },
              p(e, n) {
                  1 & n && r !== (r = e[0]("settings.filter.diff.warn") + "") && (t.innerHTML = r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Fr(e) {
          let t, r, n, o, s, a = e[4] + "";

          function i() {
              return e[3](e[4])
          }
          return {
              c() {
                  t = H("button"), r = A(a), D(t, "type", "button"), t.disabled = e[2], D(t, "data-diff", n = e[4]), D(t, "class", "svelte-1dczp1w"), B(t, "activated", e[1][e[4]])
              },
              m(e, n) {
                  M(e, t, n), k(t, r), o || (s = O(t, "click", i), o = !0)
              },
              p(r, n) {
                  e = r, 4 & n && (t.disabled = e[2]), 2 & n && B(t, "activated", e[1][e[4]])
              },
              d(e) {
                  e && E(t), o = !1, s()
              }
          }
      }

      function Br(t) {
          let r, n, o, s, a, i, l, c, d = t[0]("settings.filter.diff") + "",
              u = Object.values(t[1]).every(Vr),
              f = t[0]("settings.filter.diff.notify") + "",
              p = u && zr(t),
              h = De,
              g = [];
          for (let e = 0; e < h.length; e += 1) g[e] = Fr(Rr(t, h, e));
          return {
              c() {
                  r = H("div"), n = H("span"), o = new V(!1), s = L(), p && p.c(), a = L(), i = H("div");
                  for (let e = 0; e < g.length; e += 1) g[e].c();
                  l = L(), c = H("span"), o.a = s, D(i, "class", "btns svelte-1dczp1w"), z(c, "color", "var(--theme-text-dim)"), D(r, "class", "wrapper svelte-1dczp1w")
              },
              m(e, t) {
                  M(e, r, t), k(r, n), o.m(d, n), k(n, s), p && p.m(n, null), k(r, a), k(r, i);
                  for (let e = 0; e < g.length; e += 1) g[e] && g[e].m(i, null);
                  k(r, l), k(r, c), c.innerHTML = f
              },
              p(e, [t]) {
                  if (1 & t && d !== (d = e[0]("settings.filter.diff") + "") && o.p(d), 2 & t && (u = Object.values(e[1]).every(Vr)), u ? p ? p.p(e, t) : (p = zr(e), p.c(), p.m(n, null)) : p && (p.d(1), p = null), 6 & t) {
                      let r;
                      for (h = De, r = 0; r < h.length; r += 1) {
                          const n = Rr(e, h, r);
                          g[r] ? g[r].p(n, t) : (g[r] = Fr(n), g[r].c(), g[r].m(i, null))
                      }
                      for (; r < g.length; r += 1) g[r].d(1);
                      g.length = h.length
                  }
                  1 & t && f !== (f = e[0]("settings.filter.diff.notify") + "") && (c.innerHTML = f)
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), p && p.d(), N(g, e)
              }
          }
      }
      const Vr = e => 0 == e;

      function qr(e, t, r) {
          let n, o, s;
          return u(e, wt, (e => r(0, n = e))), u(e, Qe, (e => r(1, o = e))), u(e, jt, (e => r(2, s = e))), [n, o, s, e => {
              p(Qe, o[e] = !o[e], o)
          }]
      }
      const Wr = class extends Se {
          constructor(e) {
              super(), je(this, e, qr, Br, i, {}, _r)
          }
      };

      function Jr(e) {
          j(e, "svelte-by0uiq", '.wrapper.svelte-by0uiq{display:flex;-ms-flex-direction:column;flex-direction:column;padding:0.5rem;gap:1rem}.btns.svelte-by0uiq{display:-ms-grid;display:grid;grid-template-areas:"... ... ...";gap:0.5rem;flex-wrap:wrap}button.svelte-by0uiq{width:100%;padding:0.5rem;border-radius:0.5rem;background-color:var(--theme-bg-sub);border:3px solid var(--theme-control);color:var(--theme-text-control);filter:brightness(0.5)}button.svelte-by0uiq:hover{filter:brightness(0.8)}button.activated.svelte-by0uiq{filter:brightness(1)}.btn-all.svelte-by0uiq{grid-column:2/4;border-color:var(--theme-control-altr)}')
      }

      function Xr(e, t, r) {
          const n = e.slice();
          return n[5] = t[r], n
      }

      function Gr(e) {
          let t, r, n, o, s = e[5] + "";

          function a() {
              return e[3](e[5])
          }
          return {
              c() {
                  t = H("button"), r = A(s), D(t, "type", "button"), D(t, "class", "svelte-by0uiq"), B(t, "activated", e[1][e[5]])
              },
              m(e, s) {
                  M(e, t, s), k(t, r), n || (o = O(t, "click", a), n = !0)
              },
              p(r, n) {
                  e = r, 2 & n && B(t, "activated", e[1][e[5]])
              },
              d(e) {
                  e && E(t), n = !1, o()
              }
          }
      }

      function Yr(t) {
          let r, n, o, s, a, i, l, c, d, u = t[2]("settings.filter.genre") + "",
              f = t[2]("settings.filter.genre.all") + "",
              p = _e,
              h = [];
          for (let e = 0; e < p.length; e += 1) h[e] = Gr(Xr(t, p, e));
          return {
              c() {
                  r = H("div"), n = H("span"), o = L(), s = H("div");
                  for (let e = 0; e < h.length; e += 1) h[e].c();
                  a = L(), i = H("button"), l = A(f), D(i, "type", "button"), D(i, "class", "btn-all svelte-by0uiq"), B(i, "activated", t[0]), D(s, "class", "btns svelte-by0uiq"), D(r, "class", "wrapper svelte-by0uiq")
              },
              m(e, f) {
                  M(e, r, f), k(r, n), n.innerHTML = u, k(r, o), k(r, s);
                  for (let e = 0; e < h.length; e += 1) h[e] && h[e].m(s, null);
                  k(s, a), k(s, i), k(i, l), c || (d = O(i, "click", t[4]), c = !0)
              },
              p(e, [t]) {
                  if (4 & t && u !== (u = e[2]("settings.filter.genre") + "") && (n.innerHTML = u), 3 & t) {
                      let r;
                      for (p = _e, r = 0; r < p.length; r += 1) {
                          const n = Xr(e, p, r);
                          h[r] ? h[r].p(n, t) : (h[r] = Gr(n), h[r].c(), h[r].m(s, a))
                      }
                      for (; r < h.length; r += 1) h[r].d(1);
                      h.length = p.length
                  }
                  4 & t && f !== (f = e[2]("settings.filter.genre.all") + "") && _(l, f), 1 & t && B(i, "activated", e[0])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), N(h, e), c = !1, d()
              }
          }
      }

      function Zr(e, t, r) {
          let n, o;
          u(e, et, (e => r(1, n = e))), u(e, wt, (e => r(2, o = e)));
          let s = _e.every((e => n[e]));
          return [s, n, o, e => {
              p(et, n[e] = !n[e], n), r(0, s = _e.every((e => n[e])))
          }, () => {
              r(0, s = !s);
              for (let e of _e) p(et, n[e] = s, n)
          }]
      }
      const Qr = class extends Se {
          constructor(e) {
              super(), je(this, e, Zr, Yr, i, {}, Jr)
          }
      };

      function Kr(e) {
          j(e, "svelte-11jgb29", ".update-scorediff-btn.svelte-11jgb29{background-color:var(--theme-control);padding:0.5rem 1.5rem;margin:0.5rem 0.5rem;border-radius:0.8rem;float:right}.update-scorediff-btn.svelte-11jgb29:disabled{background-color:var(--theme-bg-sub);cursor:no-drop}")
      }

      function en(e, t, r) {
          const n = e.slice();
          return n[5] = t[r], n
      }

      function tn(e) {
          let t, r, n, o = e[0]("settings.data.diffUpdate." + e[5]) + "";
          return {
              c() {
                  t = H("option"), r = A(o), t.__value = n = e[5], t.value = t.__value
              },
              m(e, n) {
                  M(e, t, n), k(t, r)
              },
              p(e, t) {
                  1 & t && o !== (o = e[0]("settings.data.diffUpdate." + e[5]) + "") && _(r, o)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function rn(e) {
          let t, r = st.accepts,
              n = [];
          for (let t = 0; t < r.length; t += 1) n[t] = tn(en(e, r, t));
          return {
              c() {
                  for (let e = 0; e < n.length; e += 1) n[e].c();
                  t = P()
              },
              m(e, r) {
                  for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, r);
                  M(e, t, r)
              },
              p(e, o) {
                  if (1 & o) {
                      let s;
                      for (r = st.accepts, s = 0; s < r.length; s += 1) {
                          const a = en(e, r, s);
                          n[s] ? n[s].p(a, o) : (n[s] = tn(a), n[s].c(), n[s].m(t.parentNode, t))
                      }
                      for (; s < n.length; s += 1) n[s].d(1);
                      n.length = r.length
                  }
              },
              d(e) {
                  N(n, e), e && E(t)
              }
          }
      }

      function nn(e) {
          let t, r, n, o, s = e[0]("settings.data.diffUpdate." + (e[2] ? "reload" : "update")) + "";
          return {
              c() {
                  t = H("button"), r = A(s), D(t, "type", "button"), D(t, "class", "update-scorediff-btn svelte-11jgb29"), t.disabled = e[2]
              },
              m(s, a) {
                  M(s, t, a), k(t, r), n || (o = O(t, "click", e[4]), n = !0)
              },
              p(e, n) {
                  5 & n && s !== (s = e[0]("settings.data.diffUpdate." + (e[2] ? "reload" : "update")) + "") && _(r, s), 4 & n && (t.disabled = e[2])
              },
              d(e) {
                  e && E(t), n = !1, o()
              }
          }
      }

      function on(e) {
          let t, r, n, o, s, a, i = e[0]("settings.data.diffUpdate.notify") + "";

          function l(t) {
              e[3](t)
          }
          let c = {
              label: e[0]("settings.data.diffUpdate", {
                  date: new Date(Number(localStorage.getItem("prevUpdateTime"))).toLocaleDateString()
              }),
              $$slots: {
                  default: [rn]
              },
              $$scope: {
                  ctx: e
              }
          };
          void 0 !== e[1] && (c.value = e[1]), t = new Tr({
              props: c
          }), Q.push((() => we(t, "value", l)));
          let d = "manual" === e[1] && nn(e);
          return {
              c() {
                  $e(t.$$.fragment), n = L(), d && d.c(), o = L(), s = H("div"), z(s, "color", "var(--theme-text-dim)"), z(s, "margin", ".5em auto")
              },
              m(e, r) {
                  xe(t, e, r), M(e, n, r), d && d.m(e, r), M(e, o, r), M(e, s, r), s.innerHTML = i, a = !0
              },
              p(e, [n]) {
                  const l = {};
                  1 & n && (l.label = e[0]("settings.data.diffUpdate", {
                      date: new Date(Number(localStorage.getItem("prevUpdateTime"))).toLocaleDateString()
                  })), 257 & n && (l.$$scope = {
                      dirty: n,
                      ctx: e
                  }), !r && 2 & n && (r = !0, l.value = e[1], oe((() => r = !1))), t.$set(l), "manual" === e[1] ? d ? d.p(e, n) : (d = nn(e), d.c(), d.m(o.parentNode, o)) : d && (d.d(1), d = null), (!a || 1 & n) && i !== (i = e[0]("settings.data.diffUpdate.notify") + "") && (s.innerHTML = i)
              },
              i(e) {
                  a || (ge(t.$$.fragment, e), a = !0)
              },
              o(e) {
                  me(t.$$.fragment, e), a = !1
              },
              d(e) {
                  ke(t, e), e && E(n), d && d.d(e), e && E(o), e && E(s)
              }
          }
      }
      let sn = Ce(!1);

      function an(e, t, r) {
          let n, o, s;
          return u(e, wt, (e => r(0, n = e))), u(e, st, (e => r(1, o = e))), u(e, sn, (e => r(2, s = e))), [n, o, s, function(e) {
              o = e, st.set(o)
          }, () => {
              localStorage.removeItem("prevPlayRecord"), localStorage.removeItem("prevUpdateTime"), p(sn, s = !0, s)
          }]
      }
      const ln = class extends Se {
          constructor(e) {
              super(), je(this, e, an, on, i, {}, Kr)
          }
      };

      function cn(e) {
          j(e, "svelte-iga5r4", ".wrapper.svelte-iga5r4{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center}.modal-bg.svelte-iga5r4{position:fixed;background:rgba(0, 0, 0, 0.4);top:0;left:0;width:100%;height:100%}.modal.svelte-iga5r4{background:var(--theme-bg-main);width:70%;max-width:32rem;max-height:80%;overflow-y:auto;margin:auto;padding:2em;position:relative;box-shadow:2rem 2rem 10px rgba(0, 0, 0, 0.5333333333);border-radius:1rem;text-align:left}.close-btn.svelte-iga5r4{position:absolute;top:0.5rem;right:0.5rem;width:2rem;height:2rem;background-color:var(--theme-border);border-radius:40%}.reset-btn.svelte-iga5r4{display:block;margin-left:auto;background-color:var(--theme-reset);width:-moz-fit-content;width:fit-content;padding:0.5rem 1.5rem;border-radius:0.8rem}h4.svelte-iga5r4{margin:0.5rem 0;color:var(--theme-text-dim)}hr.svelte-iga5r4{border:none;border-top:var(--theme-border) 0.1rem solid;margin:2rem auto}")
      }

      function dn(e, t, r) {
          const n = e.slice();
          return n[18] = t[r], n
      }

      function un(e, t, r) {
          const n = e.slice();
          return n[21] = t[r], n
      }

      function fn(e, t, r) {
          const n = e.slice();
          return n[24] = t[r], n
      }

      function pn(e) {
          let t, r, n, o = e[0]("settings.data.overpower." + e[24]) + "";
          return {
              c() {
                  t = H("option"), r = A(o), t.__value = n = e[24], t.value = t.__value
              },
              m(e, n) {
                  M(e, t, n), k(t, r)
              },
              p(e, t) {
                  1 & t && o !== (o = e[0]("settings.data.overpower." + e[24]) + "") && _(r, o)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function hn(e) {
          let t, r = rt.accepts,
              n = [];
          for (let t = 0; t < r.length; t += 1) n[t] = pn(fn(e, r, t));
          return {
              c() {
                  for (let e = 0; e < n.length; e += 1) n[e].c();
                  t = P()
              },
              m(e, r) {
                  for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, r);
                  M(e, t, r)
              },
              p(e, o) {
                  if (1 & o) {
                      let s;
                      for (r = rt.accepts, s = 0; s < r.length; s += 1) {
                          const a = fn(e, r, s);
                          n[s] ? n[s].p(a, o) : (n[s] = pn(a), n[s].c(), n[s].m(t.parentNode, t))
                      }
                      for (; s < n.length; s += 1) n[s].d(1);
                      n.length = r.length
                  }
              },
              d(e) {
                  N(n, e), e && E(t)
              }
          }
      }

      function gn(e) {
          let t, r, n, o, s = e[0]("settings.data.playcount.notify") + "";
          return t = new Ir({}), {
              c() {
                  $e(t.$$.fragment), r = L(), n = H("div"), z(n, "color", "var(--theme-text-dim)"), z(n, "margin", ".5em auto")
              },
              m(e, a) {
                  xe(t, e, a), M(e, r, a), M(e, n, a), n.innerHTML = s, o = !0
              },
              p(e, t) {
                  (!o || 1 & t) && s !== (s = e[0]("settings.data.playcount.notify") + "") && (n.innerHTML = s)
              },
              i(e) {
                  o || (ge(t.$$.fragment, e), o = !0)
              },
              o(e) {
                  me(t.$$.fragment, e), o = !1
              },
              d(e) {
                  ke(t, e), e && E(r), e && E(n)
              }
          }
      }

      function mn(t) {
          let r, n, o, s = yt.get(t[21]) + "";
          return {
              c() {
                  r = H("option"), n = A(s), r.__value = o = t[21], r.value = r.__value
              },
              m(e, t) {
                  M(e, r, t), k(r, n)
              },
              p: e,
              d(e) {
                  e && E(r)
              }
          }
      }

      function vn(e) {
          let t, r = Le.accepts,
              n = [];
          for (let t = 0; t < r.length; t += 1) n[t] = mn(un(e, r, t));
          return {
              c() {
                  for (let e = 0; e < n.length; e += 1) n[e].c();
                  t = P()
              },
              m(e, r) {
                  for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, r);
                  M(e, t, r)
              },
              p(e, o) {
                  if (0 & o) {
                      let s;
                      for (r = Le.accepts, s = 0; s < r.length; s += 1) {
                          const a = un(e, r, s);
                          n[s] ? n[s].p(a, o) : (n[s] = mn(a), n[s].c(), n[s].m(t.parentNode, t))
                      }
                      for (; s < n.length; s += 1) n[s].d(1);
                      n.length = r.length
                  }
              },
              d(e) {
                  N(n, e), e && E(t)
              }
          }
      }

      function bn(t) {
          let r, n, o, s = t[18].charAt(0).toUpperCase() + t[18].slice(1) + "";
          return {
              c() {
                  r = H("option"), n = A(s), r.__value = o = t[18], r.value = r.__value
              },
              m(e, t) {
                  M(e, r, t), k(r, n)
              },
              p: e,
              d(e) {
                  e && E(r)
              }
          }
      }

      function yn(e) {
          let t, r = Ae.accepts,
              n = [];
          for (let t = 0; t < r.length; t += 1) n[t] = bn(dn(e, r, t));
          return {
              c() {
                  for (let e = 0; e < n.length; e += 1) n[e].c();
                  t = P()
              },
              m(e, r) {
                  for (let t = 0; t < n.length; t += 1) n[t] && n[t].m(e, r);
                  M(e, t, r)
              },
              p(e, o) {
                  if (0 & o) {
                      let s;
                      for (r = Ae.accepts, s = 0; s < r.length; s += 1) {
                          const a = dn(e, r, s);
                          n[s] ? n[s].p(a, o) : (n[s] = bn(a), n[s].c(), n[s].m(t.parentNode, t))
                      }
                      for (; s < n.length; s += 1) n[s].d(1);
                      n.length = r.length
                  }
              },
              d(e) {
                  N(n, e), e && E(t)
              }
          }
      }

      function wn(e) {
          let t, r, n, o, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w, $, x, j, S, T, C, N, U, A, P, I, _, R, F, B, V, q, W, J, X, G, Y, Z, K, ee, te, re, se, ae, ie, le, ce, de, ue, fe, ve = e[0]("settings.main.title") + "",
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
              max: 15.4,
              min: 1,
              step: .1
          };
          void 0 !== e[1] && (Ne.high = e[1]), void 0 !== e[2] && (Ne.low = e[2]), f = new xr({
              props: Ne
          }), Q.push((() => we(f, "high", Me))), Q.push((() => we(f, "low", Ee))), m = new Wr({}), b = new Qr({});
          let He = !1;

          function Ue(t) {
              e[12](t)
          }
          let Ae = {
              label: e[0]("settings.data.overpower"),
              $$slots: {
                  default: [hn]
              },
              $$scope: {
                  ctx: e
              }
          };

          function Le(t) {
              e[13](t)
          }
          void 0 !== e[4] && (Ae.value = e[4]), T = new Tr({
              props: Ae
          }), Q.push((() => we(T, "value", Ue)));
          let Pe = {
              label: e[0]("settings.data.playcount")
          };
          void 0 !== e[5] && (Pe.checked = e[5]), P = new Nr({
              props: Pe
          }), Q.push((() => we(P, "checked", Le)));
          let Oe = e[5] && gn(e);

          function De(t) {
              e[14](t)
          }
          let Ie = {
              label: e[0]("settings.data.showScoreDiff")
          };

          function _e(t) {
              e[15](t)
          }
          void 0 !== e[6] && (Ie.checked = e[6]), F = new Nr({
              props: Ie
          }), Q.push((() => we(F, "checked", De))), q = new ln({});
          let Re = {
              label: e[0]("settings.ui.locale"),
              $$slots: {
                  default: [vn]
              },
              $$scope: {
                  ctx: e
              }
          };

          function ze(t) {
              e[16](t)
          }
          void 0 !== e[7] && (Re.value = e[7]), Z = new Tr({
              props: Re
          }), Q.push((() => we(Z, "value", _e)));
          let Fe = {
              label: e[0]("settings.ui.theme"),
              $$slots: {
                  default: [yn]
              },
              $$scope: {
                  ctx: e
              }
          };
          return void 0 !== e[8] && (Fe.value = e[8]), te = new Tr({
              props: Fe
          }), Q.push((() => we(te, "value", ze))), {
              c() {
                  t = H("div"), r = H("div"), n = L(), o = H("div"), a = H("button"), a.textContent = "✕", i = L(), l = H("h3"), c = L(), d = H("h4"), u = L(), $e(f.$$.fragment), g = L(), $e(m.$$.fragment), v = L(), $e(b.$$.fragment), y = L(), w = H("hr"), $ = L(), x = H("h4"), j = L(), S = L(), $e(T.$$.fragment), N = L(), U = H("div"), A = L(), $e(P.$$.fragment), _ = L(), Oe && Oe.c(), R = L(), $e(F.$$.fragment), V = L(), $e(q.$$.fragment), W = L(), J = H("hr"), X = L(), G = H("h4"), Y = L(), $e(Z.$$.fragment), ee = L(), $e(te.$$.fragment), se = L(), ae = H("hr"), ie = L(), le = H("button"), D(r, "class", "modal-bg svelte-iga5r4"), D(a, "type", "button"), D(a, "class", "close-btn svelte-iga5r4"), z(l, "margin", "0"), D(d, "class", "svelte-iga5r4"), D(w, "class", "svelte-iga5r4"), D(x, "class", "svelte-iga5r4"), z(U, "color", "var(--theme-text-dim)"), z(U, "margin", ".5em auto"), D(J, "class", "svelte-iga5r4"), D(G, "class", "svelte-iga5r4"), D(ae, "class", "svelte-iga5r4"), D(le, "type", "button"), D(le, "class", "reset-btn svelte-iga5r4"), D(o, "class", "modal svelte-iga5r4"), D(t, "class", "wrapper svelte-iga5r4")
              },
              m(s, p) {
                  M(s, t, p), k(t, r), k(t, n), k(t, o), k(o, a), k(o, i), k(o, l), l.innerHTML = ve, k(o, c), k(o, d), d.innerHTML = ye, k(o, u), xe(f, o, null), k(o, g), xe(m, o, null), k(o, v), xe(b, o, null), k(o, y), k(o, w), k(o, $), k(o, x), x.innerHTML = je, k(o, j), k(o, S), xe(T, o, null), k(o, N), k(o, U), U.innerHTML = Se, k(o, A), xe(P, o, null), k(o, _), Oe && Oe.m(o, null), k(o, R), xe(F, o, null), k(o, V), xe(q, o, null), k(o, W), k(o, J), k(o, X), k(o, G), G.innerHTML = Te, k(o, Y), xe(Z, o, null), k(o, ee), xe(te, o, null), k(o, se), k(o, ae), k(o, ie), k(o, le), le.innerHTML = Ce, de = !0, ue || (fe = [O(r, "click", xt.toggle), O(a, "click", xt.toggle), O(le, "click", e[17])], ue = !0)
              },
              p(e, [t]) {
                  (!de || 1 & t) && ve !== (ve = e[0]("settings.main.title") + "") && (l.innerHTML = ve), (!de || 1 & t) && ye !== (ye = e[0]("settings.filter.title") + "") && (d.innerHTML = ye);
                  const r = {};
                  1 & t && (r.label = e[0]("settings.filter.const")), !p && 2 & t && (p = !0, r.high = e[1], oe((() => p = !1))), !h && 4 & t && (h = !0, r.low = e[2], oe((() => h = !1))), f.$set(r), (!de || 1 & t) && je !== (je = e[0]("settings.data.title") + "") && (x.innerHTML = je);
                  const n = {};
                  1 & t && (n.label = e[0]("settings.data.overpower")), 536870913 & t && (n.$$scope = {
                      dirty: t,
                      ctx: e
                  }), !C && 16 & t && (C = !0, n.value = e[4], oe((() => C = !1))), T.$set(n), (!de || 1 & t) && Se !== (Se = e[0]("settings.data.overpower.notify") + "") && (U.innerHTML = Se);
                  const s = {};
                  1 & t && (s.label = e[0]("settings.data.playcount")), !I && 32 & t && (I = !0, s.checked = e[5], oe((() => I = !1))), P.$set(s), e[5] ? Oe ? (Oe.p(e, t), 32 & t && ge(Oe, 1)) : (Oe = gn(e), Oe.c(), ge(Oe, 1), Oe.m(o, R)) : Oe && (pe(), me(Oe, 1, 1, (() => {
                      Oe = null
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
                  }), !re && 256 & t && (re = !0, c.value = e[8], oe((() => re = !1))), te.$set(c), (!de || 1 & t) && Ce !== (Ce = e[0]("settings.main.reset") + "") && (le.innerHTML = Ce)
              },
              i(e) {
                  de || (ge(f.$$.fragment, e), ge(m.$$.fragment, e), ge(b.$$.fragment, e), ge(He), ge(T.$$.fragment, e), ge(P.$$.fragment, e), ge(Oe), ge(F.$$.fragment, e), ge(q.$$.fragment, e), ge(Z.$$.fragment, e), ge(te.$$.fragment, e), ne((() => {
                      de && (ce || (ce = be(t, Ur, {
                          duration: 100
                      }, !0)), ce.run(1))
                  })), de = !0)
              },
              o(e) {
                  me(f.$$.fragment, e), me(m.$$.fragment, e), me(b.$$.fragment, e), me(He), me(T.$$.fragment, e), me(P.$$.fragment, e), me(Oe), me(F.$$.fragment, e), me(q.$$.fragment, e), me(Z.$$.fragment, e), me(te.$$.fragment, e), ce || (ce = be(t, Ur, {
                      duration: 100
                  }, !1)), ce.run(0), de = !1
              },
              d(e) {
                  e && E(t), ke(f), ke(m), ke(b), ke(T), ke(P), Oe && Oe.d(), ke(F), ke(q), ke(Z), ke(te), e && ce && ce.end(), ue = !1, s(fe)
              }
          }
      }

      function $n(e, t, r) {
          let n, o, s, a, i, l, c, d, f;
          return u(e, wt, (e => r(0, n = e))), u(e, Ze, (e => r(1, o = e))), u(e, Ye, (e => r(2, s = e))), u(e, tt, (e => r(3, a = e))), u(e, rt, (e => r(4, i = e))), u(e, nt, (e => r(5, l = e))), u(e, Tt, (e => r(6, c = e))), u(e, Le, (e => r(7, d = e))), u(e, Ae, (e => r(8, f = e))), [n, o, s, a, i, l, c, d, f, function(e) {
              o = e, Ze.set(o)
          }, function(e) {
              s = e, Ye.set(s)
          }, function(e) {
              a = e, tt.set(a)
          }, function(e) {
              i = e, rt.set(i)
          }, function(e) {
              l = e, nt.set(l)
          }, function(e) {
              c = e, Tt.set(c)
          }, function(e) {
              d = e, Le.set(d)
          }, function(e) {
              f = e, Ae.set(f)
          }, () => {
              for (const e of at) e.reset();
              Tt.set(!1)
          }]
      }
      const xn = class extends Se {
              constructor(e) {
                  super(), je(this, e, $n, wn, i, {}, cn)
              }
          },
          kn = [1, 10, 100, 1e3, 1e4];

      function jn(e, t) {
          const r = kn[t];
          return (Math.floor(e * r) / r).toFixed(t)
      }

      function Sn(e) {
          j(e, "svelte-11shtsn", "span.svelte-11shtsn{line-height:1em;margin:0.4em 0}.title.svelte-11shtsn{color:var(--theme-label);text-align:right;white-space:nowrap}.content.svelte-11shtsn{white-space:nowrap}")
      }

      function Tn(t) {
          let r, n, o, s, a;
          return {
              c() {
                  r = H("span"), n = A(t[0]), o = L(), s = H("span"), a = A(t[1]), D(r, "class", "title svelte-11shtsn"), D(s, "class", "content svelte-11shtsn")
              },
              m(e, t) {
                  M(e, r, t), k(r, n), M(e, o, t), M(e, s, t), k(s, a)
              },
              p(e, [t]) {
                  1 & t && _(n, e[0]), 2 & t && _(a, e[1])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), e && E(o), e && E(s)
              }
          }
      }

      function Cn(e, t, r) {
          let {
              title: n
          } = t, {
              content: o
          } = t;
          return e.$$set = e => {
              "title" in e && r(0, n = e.title), "content" in e && r(1, o = e.content)
          }, [n, o]
      }
      const Mn = class extends Se {
          constructor(e) {
              super(), je(this, e, Cn, Tn, i, {
                  title: 0,
                  content: 1
              }, Sn)
          }
      };

      function En(e) {
          j(e, "svelte-1rv2o5c", '.wrapper.svelte-1rv2o5c.svelte-1rv2o5c{border:var(--theme-border) 3px solid;border-radius:0.5rem;background-color:var(--theme-bg-sub);box-sizing:border-box;width:100%;max-width:600px;padding:0.5rem;margin:0.5rem;display:-ms-grid;display:grid;align-items:center;justify-items:center;overflow-x:scroll}.wrapper.svelte-1rv2o5c.svelte-1rv2o5c::-webkit-scrollbar{display:none}.stats-name.svelte-1rv2o5c.svelte-1rv2o5c{grid-column:1;width:auto;white-space:nowrap}.stats-rating.svelte-1rv2o5c.svelte-1rv2o5c{grid-column:2;display:flex;-ms-flex-direction:column;flex-direction:column}.stats-rating.svelte-1rv2o5c h2.svelte-1rv2o5c{margin:auto}.stats-rating.svelte-1rv2o5c span.svelte-1rv2o5c{color:var(--theme-text-dim)}.stats-honor.svelte-1rv2o5c.svelte-1rv2o5c{grid-area:2/1/3/3;color:var(--theme-honor-normal);font-weight:bold;background:var(--theme-bg-main);border-radius:3px;padding:5px 2rem;margin:0 20px;width:-webkit-fill-available;text-align:center}.stats-honor[data-honor=normal].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-normal)}.stats-honor[data-honor=bronze].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-bronze)}.stats-honor[data-honor=silver].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-silver)}.stats-honor[data-honor=gold].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-gold)}.stats-honor[data-honor=platina].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-platina)}.stats-honor[data-honor=rainbow].svelte-1rv2o5c.svelte-1rv2o5c{color:var(--theme-honor-rainbow)}.stats-items.svelte-1rv2o5c.svelte-1rv2o5c{width:-moz-fit-content;width:fit-content;display:-ms-grid;display:grid;grid-template-areas:"... ...";grid-area:1/3/3/4;gap:5px;padding:5px}@media only screen and (max-width: 544px){.stats-name.svelte-1rv2o5c.svelte-1rv2o5c{margin:auto}.stats-rating.svelte-1rv2o5c.svelte-1rv2o5c{grid-column:1}.stats-items.svelte-1rv2o5c.svelte-1rv2o5c{grid-area:1/2/3/3;max-width:-moz-fit-content;max-width:fit-content}.stats-honor.svelte-1rv2o5c.svelte-1rv2o5c{grid-area:3/1/4/3}}')
      }

      function Nn(e) {
          let t, r, n, o, s, a;
          return t = new Mn({
              props: {
                  title: e[4]("player.recent.best10"),
                  content: jn(qe(e[1], 10) / 100, 4)
              }
          }), n = new Mn({
              props: {
                  title: e[4]("player.recent.history10"),
                  content: jn(qe(e[0], 10) / 100, 4)
              }
          }), s = new Mn({
              props: {
                  title: e[4]("player.recent.history30"),
                  content: jn(qe(e[0], 30) / 100, 4)
              }
          }), {
              c() {
                  $e(t.$$.fragment), r = L(), $e(n.$$.fragment), o = L(), $e(s.$$.fragment)
              },
              m(e, i) {
                  xe(t, e, i), M(e, r, i), xe(n, e, i), M(e, o, i), xe(s, e, i), a = !0
              },
              p(e, r) {
                  const o = {};
                  16 & r && (o.title = e[4]("player.recent.best10")), 2 & r && (o.content = jn(qe(e[1], 10) / 100, 4)), t.$set(o);
                  const a = {};
                  16 & r && (a.title = e[4]("player.recent.history10")), 1 & r && (a.content = jn(qe(e[0], 10) / 100, 4)), n.$set(a);
                  const i = {};
                  16 & r && (i.title = e[4]("player.recent.history30")), 1 & r && (i.content = jn(qe(e[0], 30) / 100, 4)), s.$set(i)
              },
              i(e) {
                  a || (ge(t.$$.fragment, e), ge(n.$$.fragment, e), ge(s.$$.fragment, e), a = !0)
              },
              o(e) {
                  me(t.$$.fragment, e), me(n.$$.fragment, e), me(s.$$.fragment, e), a = !1
              },
              d(e) {
                  ke(t, e), e && E(r), ke(n, e), e && E(o), ke(s, e)
              }
          }
      }

      function Hn(e) {
          let t, r, n, o, s, a;
          return t = new Mn({
              props: {
                  title: e[4]("player.best.best30"),
                  content: jn(qe(e[2], 30) / 100, 4)
              }
          }), n = new Mn({
              props: {
                  title: e[4]("player.best.maxPossible"),
                  content: jn(We(e[2]) / 100, 2)
              }
          }), s = new Mn({
              props: {
                  title: e[4]("player.best.playCount"),
                  content: e[3].playCount
              }
          }), {
              c() {
                  $e(t.$$.fragment), r = L(), $e(n.$$.fragment), o = L(), $e(s.$$.fragment)
              },
              m(e, i) {
                  xe(t, e, i), M(e, r, i), xe(n, e, i), M(e, o, i), xe(s, e, i), a = !0
              },
              p(e, r) {
                  const o = {};
                  16 & r && (o.title = e[4]("player.best.best30")), 4 & r && (o.content = jn(qe(e[2], 30) / 100, 4)), t.$set(o);
                  const a = {};
                  16 & r && (a.title = e[4]("player.best.maxPossible")), 4 & r && (a.content = jn(We(e[2]) / 100, 2)), n.$set(a);
                  const i = {};
                  16 & r && (i.title = e[4]("player.best.playCount")), 8 & r && (i.content = e[3].playCount), s.$set(i)
              },
              i(e) {
                  a || (ge(t.$$.fragment, e), ge(n.$$.fragment, e), ge(s.$$.fragment, e), a = !0)
              },
              o(e) {
                  me(t.$$.fragment, e), me(n.$$.fragment, e), me(s.$$.fragment, e), a = !1
              },
              d(e) {
                  ke(t, e), e && E(r), ke(n, e), e && E(o), ke(s, e)
              }
          }
      }

      function Un(e) {
          let t, r, n, o, s, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w, $, x, j, S = e[3].name + "",
              T = e[3].rating + "",
              C = e[3].ratingMax + "",
              N = e[3].honor.text + "";
          y = new Mn({
              props: {
                  title: e[4]("player.generic.generatedAt"),
                  content: (new Date).toLocaleDateString()
              }
          });
          const U = [Hn, Nn],
              P = [];

          function O(e, t) {
              return "best" === e[5] ? 0 : "recent" === e[5] || "history" === e[5] ? 1 : -1
          }
          return ~($ = O(e)) && (x = P[$] = U[$](e)), {
              c() {
                  t = H("div"), r = H("h2"), n = A(S), o = L(), s = H("div"), a = H("h2"), i = A(T), l = L(), c = H("span"), d = A("MAX "), u = A(C), f = L(), p = H("div"), h = H("span"), g = A(N), v = L(), b = H("div"), $e(y.$$.fragment), w = L(), x && x.c(), D(r, "class", "stats-name svelte-1rv2o5c"), D(a, "class", "svelte-1rv2o5c"), D(c, "class", "svelte-1rv2o5c"), D(s, "class", "stats-rating svelte-1rv2o5c"), D(p, "class", "stats-honor svelte-1rv2o5c"), D(p, "data-honor", m = e[3].honor.color), B(p, "marquee", !0), D(b, "class", "stats-items svelte-1rv2o5c"), D(t, "class", "wrapper svelte-1rv2o5c")
              },
              m(e, m) {
                  M(e, t, m), k(t, r), k(r, n), k(t, o), k(t, s), k(s, a), k(a, i), k(s, l), k(s, c), k(c, d), k(c, u), k(t, f), k(t, p), k(p, h), k(h, g), k(t, v), k(t, b), xe(y, b, null), k(b, w), ~$ && P[$].m(b, null), j = !0
              },
              p(e, [t]) {
                  (!j || 8 & t) && S !== (S = e[3].name + "") && _(n, S), (!j || 8 & t) && T !== (T = e[3].rating + "") && _(i, T), (!j || 8 & t) && C !== (C = e[3].ratingMax + "") && _(u, C), (!j || 8 & t) && N !== (N = e[3].honor.text + "") && _(g, N), (!j || 8 & t && m !== (m = e[3].honor.color)) && D(p, "data-honor", m);
                  const r = {};
                  16 & t && (r.title = e[4]("player.generic.generatedAt")), y.$set(r);
                  let o = $;
                  $ = O(e), $ === o ? ~$ && P[$].p(e, t) : (x && (pe(), me(P[o], 1, 1, (() => {
                      P[o] = null
                  })), he()), ~$ ? (x = P[$], x ? x.p(e, t) : (x = P[$] = U[$](e), x.c()), ge(x, 1), x.m(b, null)) : x = null)
              },
              i(e) {
                  j || (ge(y.$$.fragment, e), ge(x), j = !0)
              },
              o(e) {
                  me(y.$$.fragment, e), me(x), j = !1
              },
              d(e) {
                  e && E(t), ke(y), ~$ && P[$].d()
              }
          }
      }

      function An(e, t, r) {
          let n, o, s, a, i, l, c, d, f;
          return u(e, Ht, (e => r(6, a = e))), u(e, Nt, (e => r(7, i = e))), u(e, At, (e => r(8, l = e))), u(e, Ut, (e => r(3, c = e))), u(e, wt, (e => r(4, d = e))), u(e, $t, (e => r(5, f = e))), e.$$.update = () => {
              256 & e.$$.dirty && r(2, n = l.slice(0, 30).map((e => e.rating))), 128 & e.$$.dirty && r(1, o = i.map((e => e.rating))), 64 & e.$$.dirty && r(0, s = a.map((e => e.rating)))
          }, [s, o, n, c, d, f, a, i, l]
      }
      const Ln = class extends Se {
          constructor(e) {
              super(), je(this, e, An, Un, i, {}, En)
          }
      };

      function Pn(e) {
          j(e, "svelte-1gjhsjp", 'tr.best30.svelte-1gjhsjp td.song-order.svelte-1gjhsjp{color:var(--theme-rank-b30)}tr.best40.svelte-1gjhsjp td.song-order.svelte-1gjhsjp{font-weight:bold}tr.svelte-1gjhsjp:not(.best40) td.song-order.svelte-1gjhsjp{color:var(--theme-text-dim)}tr.ajc.svelte-1gjhsjp td[data-rank].svelte-1gjhsjp,tr.ajc.svelte-1gjhsjp td.song-score.svelte-1gjhsjp,tr.ajc.svelte-1gjhsjp td[data-clear].svelte-1gjhsjp{text-shadow:0 0 10px var(--theme-clear-aj)}td.svelte-1gjhsjp.svelte-1gjhsjp{padding:0.5em;border-top:var(--theme-border) 1.5px solid;text-align:center}td[data-diff].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold;text-align:left;max-width:30em}td[data-diff][data-diff=WE].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-we)}td[data-diff][data-diff=ULT].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-ult)}td[data-diff][data-diff=MAS].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-mas)}td[data-diff][data-diff=EXP].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-exp)}td[data-diff][data-diff=ADV].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-adv)}td[data-diff][data-diff=BAS].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-song-bas)}@media only screen and (max-width: 544px){td.svelte-1gjhsjp.svelte-1gjhsjp{padding:0.5em 0.1em}td[data-diff].svelte-1gjhsjp.svelte-1gjhsjp{max-width:20em}}td[data-rank].svelte-1gjhsjp.svelte-1gjhsjp{white-space:nowrap}td[data-rank][data-rank=MAX].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-clear-aj);text-shadow:0 0 10px var(--theme-clear-aj)}td[data-rank][data-rank="SSS+"].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffcc11}td[data-rank][data-rank=SSS].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffd744}td[data-rank][data-rank="SS+"].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffe277}td[data-rank][data-rank=SS].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffedaa}td[data-rank][data-rank="S+"].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffd744}td[data-rank][data-rank=S].svelte-1gjhsjp.svelte-1gjhsjp{color:#ffe277}td[data-rank][data-rank=AAA].svelte-1gjhsjp.svelte-1gjhsjp{color:#cceeff}td[data-rank][data-rank=AA].svelte-1gjhsjp.svelte-1gjhsjp{color:#a6e1ff}td[data-rank][data-rank=A].svelte-1gjhsjp.svelte-1gjhsjp{color:#80d5ff}td[data-rank][data-rank=BBB].svelte-1gjhsjp.svelte-1gjhsjp{color:#59c8ff}td[data-rank][data-rank=BB].svelte-1gjhsjp.svelte-1gjhsjp{color:#33bbff}td[data-rank][data-rank=B].svelte-1gjhsjp.svelte-1gjhsjp{color:#0daeff}td[data-rank][data-rank=MAX].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank="SSS+"].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank=SSS].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank="SS+"].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank=SS].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-rank][data-rank=C].svelte-1gjhsjp.svelte-1gjhsjp{color:#888}td[data-rank][data-rank=D].svelte-1gjhsjp.svelte-1gjhsjp{color:#666}td[data-clear].svelte-1gjhsjp.svelte-1gjhsjp{font-weight:bold}td[data-clear][data-clear=FC].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-clear-fc)}td[data-clear][data-clear=AJ].svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-clear-aj)}td.song-op.svelte-1gjhsjp.svelte-1gjhsjp{white-space:nowrap}td.clickable.svelte-1gjhsjp.svelte-1gjhsjp{cursor:pointer}td.clickable.svelte-1gjhsjp.svelte-1gjhsjp:hover{text-shadow:0 0 10px var(--theme-text)}.opmx.svelte-1gjhsjp.svelte-1gjhsjp{color:var(--theme-text-dim);font-size:0.8em}.pc-hidden.svelte-1gjhsjp.svelte-1gjhsjp{cursor:pointer}.pc-hidden.svelte-1gjhsjp span.svelte-1gjhsjp{border-radius:0.2em;background-color:var(--theme-bg-sub);color:var(--theme-bg-sub)}.pc-hidden.disabled.svelte-1gjhsjp.svelte-1gjhsjp{cursor:no-drop}.pc-hidden.disabled.svelte-1gjhsjp span.svelte-1gjhsjp{filter:brightness(0.8)}')
      }

      function On(e) {
          let t;
          return {
              c() {
                  t = H("span"), t.textContent = "?", z(t, "color", "var(--theme-text-dim)")
              },
              m(e, r) {
                  M(e, t, r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Dn(e) {
          let t, r, n, o = e[0].rank + "";
          return {
              c() {
                  t = H("td"), r = A(o), D(t, "data-rank", n = e[0].rank), D(t, "class", "svelte-1gjhsjp")
              },
              m(e, n) {
                  M(e, t, n), k(t, r)
              },
              p(e, s) {
                  1 & s && o !== (o = e[0].rank + "") && _(r, o), 1 & s && n !== (n = e[0].rank) && D(t, "data-rank", n)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function In(e) {
          let t, r, n;

          function o(e, t) {
              return "percentage" == e[1] ? Rn : _n
          }
          let s = o(e),
              a = s(e);
          return {
              c() {
                  t = H("td"), a.c(), D(t, "class", "song-op svelte-1gjhsjp"), B(t, "clickable", "best" == e[2])
              },
              m(o, s) {
                  M(o, t, s), a.m(t, null), r || (n = O(t, "click", e[7]), r = !0)
              },
              p(e, r) {
                  s === (s = o(e)) && a ? a.p(e, r) : (a.d(1), a = s(e), a && (a.c(), a.m(t, null))), 4 & r && B(t, "clickable", "best" == e[2])
              },
              d(e) {
                  e && E(t), a.d(), r = !1, n()
              }
          }
      }

      function _n(e) {
          let t, r, n, o, s = (e[0].const < 0 ? "-" : (e[0].op / 1e4).toFixed(2)) + "",
              a = (e[0].const < 0 ? "-" : (e[0].opMax / 1e4).toFixed(1)) + "";
          return {
              c() {
                  t = A(s), r = H("span"), n = A("／"), o = A(a), D(r, "class", "opmx svelte-1gjhsjp")
              },
              m(e, s) {
                  M(e, t, s), M(e, r, s), k(r, n), k(r, o)
              },
              p(e, r) {
                  1 & r && s !== (s = (e[0].const < 0 ? "-" : (e[0].op / 1e4).toFixed(2)) + "") && _(t, s), 1 & r && a !== (a = (e[0].const < 0 ? "-" : (e[0].opMax / 1e4).toFixed(1)) + "") && _(o, a)
              },
              d(e) {
                  e && E(t), e && E(r)
              }
          }
      }

      function Rn(e) {
          let t, r, n = (e[0].const < 0 ? "-" : e[0].opPercent.toPrecision(5)) + "";
          return {
              c() {
                  t = A(n), r = H("span"), r.textContent = "%", D(r, "class", "opmx svelte-1gjhsjp")
              },
              m(e, n) {
                  M(e, t, n), M(e, r, n)
              },
              p(e, r) {
                  1 & r && n !== (n = (e[0].const < 0 ? "-" : e[0].opPercent.toPrecision(5)) + "") && _(t, n)
              },
              d(e) {
                  e && E(t), e && E(r)
              }
          }
      }

      function zn(e) {
          let t, r = (-1 == e[0].score ? "-" : e[0].score) + "";
          return {
              c() {
                  t = A(r)
              },
              m(e, r) {
                  M(e, t, r)
              },
              p(e, n) {
                  1 & n && r !== (r = (-1 == e[0].score ? "-" : e[0].score) + "") && _(t, r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Fn(e) {
          let t, r = -1 == e[0].score ? "-" : (e[0].scoreDiff <= 0 ? "" : "+") + e[0].scoreDiff;
          return {
              c() {
                  t = A(r)
              },
              m(e, r) {
                  M(e, t, r)
              },
              p(e, n) {
                  1 & n && r !== (r = -1 == e[0].score ? "-" : (e[0].scoreDiff <= 0 ? "" : "+") + e[0].scoreDiff) && _(t, r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Bn(e) {
          let t, r, n, o = e[0].clear + "";
          return {
              c() {
                  t = H("td"), r = A(o), D(t, "data-clear", n = e[0].clear), D(t, "class", "svelte-1gjhsjp")
              },
              m(e, n) {
                  M(e, t, n), k(t, r)
              },
              p(e, s) {
                  1 & s && o !== (o = e[0].clear + "") && _(r, o), 1 & s && n !== (n = e[0].clear) && D(t, "data-clear", n)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Vn(e) {
          let t;

          function r(e, t) {
              return void 0 === e[0].playCount ? Wn : qn
          }
          let n = r(e),
              o = n(e);
          return {
              c() {
                  o.c(), t = P()
              },
              m(e, r) {
                  o.m(e, r), M(e, t, r)
              },
              p(e, s) {
                  n === (n = r(e)) && o ? o.p(e, s) : (o.d(1), o = n(e), o && (o.c(), o.m(t.parentNode, t)))
              },
              d(e) {
                  o.d(e), e && E(t)
              }
          }
      }

      function qn(e) {
          let t, r, n = (e[0].playCount ?? "?") + "";
          return {
              c() {
                  t = H("td"), r = A(n), D(t, "class", "svelte-1gjhsjp")
              },
              m(e, n) {
                  M(e, t, n), k(t, r)
              },
              p(e, t) {
                  1 & t && n !== (n = (e[0].playCount ?? "?") + "") && _(r, n)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Wn(e) {
          let t, r, n;
          return {
              c() {
                  t = H("td"), t.innerHTML = '<span class="svelte-1gjhsjp">  </span>', D(t, "class", "pc-hidden svelte-1gjhsjp"), B(t, "disabled", e[5])
              },
              m(o, s) {
                  M(o, t, s), r || (n = O(t, "click", e[8]), r = !0)
              },
              p(e, r) {
                  32 & r && B(t, "disabled", e[5])
              },
              d(e) {
                  e && E(t), r = !1, n()
              }
          }
      }

      function Jn(t) {
          let r, n, o, s, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w, $, x, j = t[0].order + "",
              S = t[0].title + "",
              T = (t[0].const < 0 ? "-" : t[0].const?.toFixed(1) ?? "??.?") + "",
              C = (t[0].const < 0 || -1 == t[0].score ? "-" : null == t[0].rating ? "??.??" : (t[0].rating / 100).toFixed(2)) + "",
              N = t[0].constUncertain && On();

          function U(e, t) {
              return "hide" != e[1] ? In : Dn
          }
          let P = U(t),
              I = P(t);

          function R(e, t) {
              return e[3] ? Fn : zn
          }
          let z = R(t),
              F = z(t),
              V = ("history" === t[2] || "best" === t[2]) && Bn(t),
              q = t[4] && "best" === t[2] && Vn(t);
          return {
              c() {
                  r = H("tr"), n = H("td"), o = A(j), s = L(), a = H("td"), i = A(S), d = L(), u = H("td"), f = A(T), N && N.c(), p = L(), I.c(), h = L(), g = H("td"), F.c(), m = L(), v = H("td"), b = A(C), y = L(), V && V.c(), w = L(), q && q.c(), D(n, "class", "song-order svelte-1gjhsjp"), D(a, "data-diff", l = t[0].difficulty), D(a, "colspan", c = "history" === t[2] ? 2 : 1), D(a, "class", "svelte-1gjhsjp"), D(u, "class", "svelte-1gjhsjp"), D(g, "class", "song-score svelte-1gjhsjp"), B(g, "clickable", "best" === t[2]), D(v, "class", "svelte-1gjhsjp"), D(r, "class", "svelte-1gjhsjp"), B(r, "best30", t[0].order <= ("recent" === t[2] || "history" === t[2] ? 10 : 30)), B(r, "best40", t[0].order <= ("recent" === t[2] ? 10 : "history" === t[2] ? 30 : 40)), B(r, "ajc", 101e4 == t[0].score)
              },
              m(e, l) {
                  M(e, r, l), k(r, n), k(n, o), k(r, s), k(r, a), k(a, i), k(r, d), k(r, u), k(u, f), N && N.m(u, null), k(r, p), I.m(r, null), k(r, h), k(r, g), F.m(g, null), k(r, m), k(r, v), k(v, b), k(r, y), V && V.m(r, null), k(r, w), q && q.m(r, null), $ || (x = O(g, "click", t[6]), $ = !0)
              },
              p(e, [t]) {
                  1 & t && j !== (j = e[0].order + "") && _(o, j), 1 & t && S !== (S = e[0].title + "") && _(i, S), 1 & t && l !== (l = e[0].difficulty) && D(a, "data-diff", l), 4 & t && c !== (c = "history" === e[2] ? 2 : 1) && D(a, "colspan", c), 1 & t && T !== (T = (e[0].const < 0 ? "-" : e[0].const?.toFixed(1) ?? "??.?") + "") && _(f, T), e[0].constUncertain ? N || (N = On(), N.c(), N.m(u, null)) : N && (N.d(1), N = null), P === (P = U(e)) && I ? I.p(e, t) : (I.d(1), I = P(e), I && (I.c(), I.m(r, h))), z === (z = R(e)) && F ? F.p(e, t) : (F.d(1), F = z(e), F && (F.c(), F.m(g, null))), 4 & t && B(g, "clickable", "best" === e[2]), 1 & t && C !== (C = (e[0].const < 0 || -1 == e[0].score ? "-" : null == e[0].rating ? "??.??" : (e[0].rating / 100).toFixed(2)) + "") && _(b, C), "history" === e[2] || "best" === e[2] ? V ? V.p(e, t) : (V = Bn(e), V.c(), V.m(r, w)) : V && (V.d(1), V = null), e[4] && "best" === e[2] ? q ? q.p(e, t) : (q = Vn(e), q.c(), q.m(r, null)) : q && (q.d(1), q = null), 5 & t && B(r, "best30", e[0].order <= ("recent" === e[2] || "history" === e[2] ? 10 : 30)), 5 & t && B(r, "best40", e[0].order <= ("recent" === e[2] ? 10 : "history" === e[2] ? 30 : 40)), 1 & t && B(r, "ajc", 101e4 == e[0].score)
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), N && N.d(), I.d(), F.d(), V && V.d(), q && q.d(), $ = !1, x()
              }
          }
      }

      function Xn(e, t, r) {
          let n, o, s, a, i;
          u(e, rt, (e => r(1, n = e))), u(e, $t, (e => r(2, o = e))), u(e, Tt, (e => r(3, s = e))), u(e, nt, (e => r(4, a = e))), u(e, jt, (e => r(5, i = e)));
          let {
              song: l
          } = t;
          return e.$$set = e => {
              "song" in e && r(0, l = e.song)
          }, [l, n, o, s, a, i, function() {
              "best" === o && Tt.toggle()
          }, function() {
              "best" == o && p(rt, n = "percentage" == n ? "value" : "percentage", n)
          }, () => {
              i || gt("songPlayCount", l.difficulty, l.idx).then((e => {
                  r(0, l.playCount = e, l)
              })).catch((() => {
                  r(0, l.playCount = null, l)
              }))
          }]
      }
      const Gn = class extends Se {
          constructor(e) {
              super(), je(this, e, Xn, Jn, i, {
                  song: 0
              }, Pn)
          }
      };

      function Yn(e) {
          j(e, "svelte-1w9e0iv", '@charset "UTF-8";table.svelte-1w9e0iv.svelte-1w9e0iv{border-spacing:0;width:100%;padding-bottom:0.5rem;max-width:max-content;margin:auto}th.svelte-1w9e0iv.svelte-1w9e0iv{padding:0.5rem;color:var(--theme-text-dim);cursor:pointer;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}th.svelte-1w9e0iv.svelte-1w9e0iv:not(.cur-sort):hover{color:inherit;filter:brightness(0.9)}th.cur-sort.svelte-1w9e0iv.svelte-1w9e0iv{filter:brightness(1);color:inherit}th.cur-sort.svelte-1w9e0iv.svelte-1w9e0iv::before{color:var(--theme-text-dim);content:"▼"}.reversed.svelte-1w9e0iv th.cur-sort.svelte-1w9e0iv::before{content:"▲"}')
      }

      function Zn(e, t, r) {
          const n = e.slice();
          return n[13] = t[r], n
      }

      function Qn(e, t, r) {
          const n = e.slice();
          return n[16] = t[r], n
      }

      function Kn(e) {
          let t, r, n, o, a, i = e[5]("record.head." + e[16].display) + "";

          function l() {
              return e[11](e[16])
          }

          function c(...t) {
              return e[12](e[16], ...t)
          }
          return {
              c() {
                  t = H("th"), r = new V(!1), n = L(), r.a = n, D(t, "tabindex", "0"), D(t, "class", "svelte-1w9e0iv"), B(t, "cur-sort", !e[16].nocur && e[16].sort == e[1])
              },
              m(e, s) {
                  M(e, t, s), r.m(i, t), k(t, n), o || (a = [O(t, "click", l), O(t, "keypress", c)], o = !0)
              },
              p(n, o) {
                  e = n, 40 & o && i !== (i = e[5]("record.head." + e[16].display) + "") && r.p(i), 10 & o && B(t, "cur-sort", !e[16].nocur && e[16].sort == e[1])
              },
              d(e) {
                  e && E(t), o = !1, s(a)
              }
          }
      }

      function eo(e) {
          let t, r = (e[16].condition ?? !0) && Kn(e);
          return {
              c() {
                  r && r.c(), t = P()
              },
              m(e, n) {
                  r && r.m(e, n), M(e, t, n)
              },
              p(e, n) {
                  e[16].condition ?? 1 ? r ? r.p(e, n) : (r = Kn(e), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null)
              },
              d(e) {
                  r && r.d(e), e && E(t)
              }
          }
      }

      function to(e) {
          let t, r;
          return t = new Gn({
              props: {
                  song: e[13]
              }
          }), {
              c() {
                  $e(t.$$.fragment)
              },
              m(e, n) {
                  xe(t, e, n), r = !0
              },
              p(e, r) {
                  const n = {};
                  16 & r && (n.song = e[13]), t.$set(n)
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
      }

      function ro(e) {
          let t, r, n, o, s, a, i, l, c = e[3],
              d = [];
          for (let t = 0; t < c.length; t += 1) d[t] = eo(Qn(e, c, t));
          let u = e[4],
              f = [];
          for (let t = 0; t < u.length; t += 1) f[t] = to(Zn(e, u, t));
          const p = e => me(f[e], 1, 1, (() => {
              f[e] = null
          }));
          return {
              c() {
                  t = H("div"), r = H("table"), n = H("thead"), o = H("tr");
                  for (let e = 0; e < d.length; e += 1) d[e].c();
                  s = L(), a = H("tbody");
                  for (let e = 0; e < f.length; e += 1) f[e].c();
                  D(o, "class", "svelte-1w9e0iv"), B(o, "reversed", e[2]), D(r, "class", "svelte-1w9e0iv"), D(t, "class", "wrapper"), t.hidden = i = !e[0]
              },
              m(e, i) {
                  M(e, t, i), k(t, r), k(r, n), k(n, o);
                  for (let e = 0; e < d.length; e += 1) d[e] && d[e].m(o, null);
                  k(r, s), k(r, a);
                  for (let e = 0; e < f.length; e += 1) f[e] && f[e].m(a, null);
                  l = !0
              },
              p(e, [r]) {
                  if (46 & r) {
                      let t;
                      for (c = e[3], t = 0; t < c.length; t += 1) {
                          const n = Qn(e, c, t);
                          d[t] ? d[t].p(n, r) : (d[t] = eo(n), d[t].c(), d[t].m(o, null))
                      }
                      for (; t < d.length; t += 1) d[t].d(1);
                      d.length = c.length
                  }
                  if ((!l || 4 & r) && B(o, "reversed", e[2]), 16 & r) {
                      let t;
                      for (u = e[4], t = 0; t < u.length; t += 1) {
                          const n = Zn(e, u, t);
                          f[t] ? (f[t].p(n, r), ge(f[t], 1)) : (f[t] = to(n), f[t].c(), ge(f[t], 1), f[t].m(a, null))
                      }
                      for (pe(), t = u.length; t < f.length; t += 1) p(t);
                      he()
                  }(!l || 1 & r && i !== (i = !e[0])) && (t.hidden = i)
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

      function no(e, t, r) {
          let n, o, s, a, i, l, c;
          u(e, $t, (e => r(7, s = e))), u(e, nt, (e => r(8, a = e))), u(e, Tt, (e => r(9, i = e))), u(e, rt, (e => r(10, l = e))), u(e, wt, (e => r(5, c = e)));
          let {
              playRecord: d
          } = t, {
              shown: f = !1
          } = t, p = "rating", h = !1;
          return e.$$set = e => {
              "playRecord" in e && r(6, d = e.playRecord), "shown" in e && r(0, f = e.shown)
          }, e.$$.update = () => {
              70 & e.$$.dirty && r(4, n = d.sort(h ? (e, t) => -Je[p](e, t) : Je[p])), 1920 & e.$$.dirty && r(3, o = [{
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
                  condition: "percentage" == l
              }, {
                  display: "overpower",
                  sort: "op",
                  condition: "value" == l
              }, {
                  display: "rank",
                  sort: "score",
                  condition: "hide" == l,
                  nocur: !i
              }, {
                  display: i ? "scoreDiff" : "score",
                  sort: i ? "scoreDiff" : "score"
              }, {
                  display: "rating",
                  sort: "rating"
              }, {
                  display: "ajfc",
                  sort: "aj",
                  condition: "history" === s || "best" === s
              }, {
                  display: "playcount",
                  sort: "playcount",
                  condition: a && "best" === s
              }])
          }, [f, p, h, o, n, c, d, s, a, i, l, e => {
              p === e.sort ? r(2, h = !h) : (r(1, p = e.sort), r(2, h = !1))
          }, (e, t) => {
              "Enter" !== t.code && "Space" !== t.code || (p === e.sort ? r(2, h = !h) : (r(1, p = e.sort), r(2, h = !1)))
          }]
      }
      const oo = class extends Se {
          constructor(e) {
              super(), je(this, e, no, ro, i, {
                  playRecord: 6,
                  shown: 0
              }, Yn)
          }
      };

      function so(e) {
          j(e, "svelte-75klku", ".modal-wrapper.svelte-75klku{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center}.modal-bg.svelte-75klku{position:fixed;background:rgba(0, 0, 0, 0.4);top:0;left:0;width:100vw;height:100vh}.modal.svelte-75klku{background:var(--theme-bg-main);width:70%;max-width:32rem;margin:auto;padding:2rem;position:relative;box-shadow:2rem 2rem 10px rgba(0, 0, 0, 0.5333333333);border-radius:1rem;text-align:center}.app-version.svelte-75klku{color:var(--theme-text-dim);font-weight:normal;font-size:small}.spinner.svelte-75klku{margin:2rem auto;border:0.5rem solid var(--theme-bg-sub);border-top-color:var(--theme-label);border-radius:50%;width:4rem;height:4rem;animation:svelte-75klku-spin 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite}.error.svelte-75klku{margin:4rem auto;height:4rem;line-height:4rem;font-size:5em;color:var(--theme-label)}.error-text.svelte-75klku{color:#ff0000;white-space:pre-line;font-size:0.8em;text-align:left;background-color:var(--theme-bg-sub);border-radius:0.5em;max-height:15em;overflow-y:scroll;padding:1em}.dim.svelte-75klku{color:var(--theme-text-dim)}@keyframes svelte-75klku-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
      }

      function ao(e) {
          let t, r, n, o, s;
          return {
              c() {
                  t = H("div"), r = L(), n = H("p"), o = L(), s = P(), D(t, "class", "spinner svelte-75klku")
              },
              m(a, i) {
                  M(a, t, i), M(a, r, i), M(a, n, i), n.innerHTML = e[2], M(a, o, i), M(a, s, i)
              },
              p(e, t) {
                  4 & t && (n.innerHTML = e[2])
              },
              d(e) {
                  e && E(t), e && E(r), e && E(n), e && E(o), e && E(s)
              }
          }
      }

      function io(e) {
          let t, r, n, o, s, a, i;

          function l(e, t) {
              return 1 & t && (n = null), 1 & t && (o = null), 1 & t && (s = null), 1 & t && (a = null), null == n && (n = !(-1 == e[0].message.indexOf("Service temporarily unavailable"))), n ? po : (null == o && (o = !(-1 == e[0].message.indexOf("Request failed: rejected by server") && -1 == e[0].message.indexOf("Failed to fetch"))), o ? fo : (null == s && (s = !(-1 === e[0].message.indexOf("Request timed out"))), s ? uo : (null == a && (a = !(-1 === e[0].message.indexOf("Target window does not exist"))), a ? co : lo)))
          }
          let c = l(e, -1),
              d = c(e);
          return {
              c() {
                  t = H("div"), t.textContent = ":(", r = L(), d.c(), i = P(), D(t, "class", "error svelte-75klku")
              },
              m(e, n) {
                  M(e, t, n), M(e, r, n), d.m(e, n), M(e, i, n)
              },
              p(e, t) {
                  c === (c = l(e, t)) && d ? d.p(e, t) : (d.d(1), d = c(e), d && (d.c(), d.m(i.parentNode, i)))
              },
              d(e) {
                  e && E(t), e && E(r), d.d(e), e && E(i)
              }
          }
      }

      function lo(e) {
          let t, r, n, o, s = e[1]("loading.error.unknown") + "",
              a = e[0].stack + "";
          return {
              c() {
                  t = H("p"), r = L(), n = H("pre"), o = A(a), D(n, "class", "error-text svelte-75klku")
              },
              m(e, a) {
                  M(e, t, a), t.innerHTML = s, M(e, r, a), M(e, n, a), k(n, o)
              },
              p(e, r) {
                  2 & r && s !== (s = e[1]("loading.error.unknown") + "") && (t.innerHTML = s), 1 & r && a !== (a = e[0].stack + "") && _(o, a)
              },
              d(e) {
                  e && E(t), e && E(r), e && E(n)
              }
          }
      }

      function co(e) {
          let t, r = e[1]("loading.error.noopener") + "";
          return {
              c() {
                  t = H("p")
              },
              m(e, n) {
                  M(e, t, n), t.innerHTML = r
              },
              p(e, n) {
                  2 & n && r !== (r = e[1]("loading.error.noopener") + "") && (t.innerHTML = r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function uo(e) {
          let t, r = e[1]("loading.error.timeout") + "";
          return {
              c() {
                  t = H("p")
              },
              m(e, n) {
                  M(e, t, n), t.innerHTML = r
              },
              p(e, n) {
                  2 & n && r !== (r = e[1]("loading.error.timeout") + "") && (t.innerHTML = r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function fo(e) {
          let t, r = e[1]("loading.error.rejected") + "";
          return {
              c() {
                  t = H("p")
              },
              m(e, n) {
                  M(e, t, n), t.innerHTML = r
              },
              p(e, n) {
                  2 & n && r !== (r = e[1]("loading.error.rejected") + "") && (t.innerHTML = r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function po(e) {
          let t, r = e[1]("loading.error.serviceDown") + "";
          return {
              c() {
                  t = H("p")
              },
              m(e, n) {
                  M(e, t, n), t.innerHTML = r
              },
              p(e, n) {
                  2 & n && r !== (r = e[1]("loading.error.serviceDown") + "") && (t.innerHTML = r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function ho(t) {
          let r, n, o, s, a, i, l, c, d, u = t[1]("main.title") + "";

          function f(e, t) {
              return e[0] ? io : ao
          }
          let p = f(t),
              h = p(t);
          return {
              c() {
                  r = H("div"), n = H("div"), o = L(), s = H("div"), a = H("h3"), i = new V(!1), l = L(), c = H("span"), c.textContent = "@1.1.7", d = L(), h.c(), D(n, "class", "modal-bg svelte-75klku"), i.a = l, D(c, "class", "app-version svelte-75klku"), D(s, "class", "modal svelte-75klku"), D(r, "class", "modal-wrapper svelte-75klku")
              },
              m(e, t) {
                  M(e, r, t), k(r, n), k(r, o), k(r, s), k(s, a), i.m(u, a), k(a, l), k(a, c), k(s, d), h.m(s, null)
              },
              p(e, [t]) {
                  2 & t && u !== (u = e[1]("main.title") + "") && i.p(u), p === (p = f(e)) && h ? h.p(e, t) : (h.d(1), h = p(e), h && (h.c(), h.m(s, null)))
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), h.d()
              }
          }
      }

      function go(e, t, r) {
          let n, o, s;
          u(e, wt, (e => r(1, n = e))), u(e, kt, (e => r(2, o = e))), u(e, tt, (e => r(3, s = e)));
          let {
              error: a
          } = t;
          return e.$$set = e => {
              "error" in e && r(0, a = e.error)
          }, [a, n, o, s]
      }
      const mo = class extends Se {
          constructor(e) {
              super(), je(this, e, go, ho, i, {
                  error: 0
              }, so)
          }
      };

      function vo(e) {
          j(e, "svelte-1jd1sr0", ".wrapper.svelte-1jd1sr0{position:fixed;bottom:0.5rem;left:0.5rem;padding:0.5rem;border-radius:0.5rem;background-color:rgba(0, 0, 0, 0.5333333333);backdrop-filter:blur(2px)}.spinner.svelte-1jd1sr0{border:0.2rem solid var(--theme-bg-sub);border-top-color:var(--theme-label);display:inline-block;box-sizing:border-box;border-radius:50%;width:1em;height:1em;animation:svelte-1jd1sr0-spin 1s cubic-bezier(0.5, 0.2, 0.5, 0.8) infinite}.text.svelte-1jd1sr0{color:var(--theme-text-dim);font-size:0.8em}@keyframes svelte-1jd1sr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")
      }

      function bo(e) {
          let t;
          return {
              c() {
                  t = H("span"), D(t, "class", "spinner svelte-1jd1sr0")
              },
              m(e, r) {
                  M(e, t, r)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function yo(e) {
          let t, r, n, o, s, a = e[0] && bo();
          return {
              c() {
                  t = H("div"), a && a.c(), r = L(), n = H("span"), D(n, "class", "text svelte-1jd1sr0"), D(t, "class", "wrapper svelte-1jd1sr0")
              },
              m(o, i) {
                  M(o, t, i), a && a.m(t, null), k(t, r), k(t, n), n.innerHTML = e[1], s = !0
              },
              p(e, [o]) {
                  e[0] ? a || (a = bo(), a.c(), a.m(t, r)) : a && (a.d(1), a = null), (!s || 2 & o) && (n.innerHTML = e[1])
              },
              i(e) {
                  s || (ne((() => {
                      s && (o || (o = be(t, Ar, {
                          y: 200,
                          duration: 1e3
                      }, !0)), o.run(1))
                  })), s = !0)
              },
              o(e) {
                  o || (o = be(t, Ar, {
                      y: 200,
                      duration: 1e3
                  }, !1)), o.run(0), s = !1
              },
              d(e) {
                  e && E(t), a && a.d(), e && o && o.end()
              }
          }
      }

      function wo(e, t, r) {
          let n, o;
          return u(e, St, (e => r(0, n = e))), u(e, kt, (e => r(1, o = e))), [n, o]
      }
      const $o = class extends Se {
          constructor(e) {
              super(), je(this, e, wo, yo, i, {}, vo)
          }
      };

      function xo(e) {
          j(e, "svelte-ufw7k", "header.svelte-ufw7k.svelte-ufw7k{display:flex;gap:0.5rem;padding:0 1rem}a.svelte-ufw7k.svelte-ufw7k{padding:1rem 3%;cursor:pointer}a.svelte-ufw7k.svelte-ufw7k:hover{text-decoration-color:var(--theme-text-dim)}a.svelte-ufw7k h3.svelte-ufw7k{margin:0;color:var(--theme-text-dim)}a.svelte-ufw7k h3.selected.svelte-ufw7k{color:var(--theme-text)}")
      }

      function ko(t) {
          let r, n, o, s, a, i, l, c, d;
          return {
              c() {
                  r = H("header"), n = H("a"), o = H("h3"), o.textContent = "BEST", s = L(), a = H("a"), i = H("h3"), i.textContent = "RECENT", l = L(), c = H("a"), d = H("h3"), d.textContent = "HISTORY", D(o, "class", "svelte-ufw7k"), B(o, "selected", "best" == t[0]), D(n, "href", "#best"), D(n, "class", "svelte-ufw7k"), D(i, "class", "svelte-ufw7k"), B(i, "selected", "recent" == t[0]), D(a, "href", "#recent"), D(a, "class", "svelte-ufw7k"), D(d, "class", "svelte-ufw7k"), B(d, "selected", "history" == t[0]), D(c, "href", "#history"), D(c, "class", "svelte-ufw7k"), D(r, "class", "svelte-ufw7k")
              },
              m(e, t) {
                  M(e, r, t), k(r, n), k(n, o), k(r, s), k(r, a), k(a, i), k(r, l), k(r, c), k(c, d)
              },
              p(e, [t]) {
                  1 & t && B(o, "selected", "best" == e[0]), 1 & t && B(i, "selected", "recent" == e[0]), 1 & t && B(d, "selected", "history" == e[0])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r)
              }
          }
      }

      function jo(e, t, r) {
          let n;
          return u(e, $t, (e => r(0, n = e))), [n]
      }
      const So = class extends Se {
          constructor(e) {
              super(), je(this, e, jo, ko, i, {}, xo)
          }
      };

      function To(e) {
          j(e, "svelte-1cp0kbr", ".wrapper.svelte-1cp0kbr.svelte-1cp0kbr{border:var(--theme-border) 3px solid;border-radius:0.5rem;background-color:var(--theme-bg-sub);box-sizing:border-box;width:100%;max-width:600px;padding:0.5rem;margin:0.5rem;display:flex;justify-content:space-evenly;text-align:center;gap:0.8em;overflow-x:scroll}.wrapper.svelte-1cp0kbr.svelte-1cp0kbr::-webkit-scrollbar{display:none}.item.svelte-1cp0kbr.svelte-1cp0kbr{display:flex;-ms-flex-direction:column;flex-direction:column}.item.svelte-1cp0kbr div.svelte-1cp0kbr:nth-child(1){color:var(--theme-label)}.item.svelte-1cp0kbr div.svelte-1cp0kbr:nth-child(2){font-size:1.2em;font-weight:bold}.item.fc.svelte-1cp0kbr div.svelte-1cp0kbr:nth-child(1){color:var(--theme-clear-fc)}.item.aj.svelte-1cp0kbr div.svelte-1cp0kbr:nth-child(1){color:var(--theme-clear-aj)}.item.mx.svelte-1cp0kbr:not(.zero) div.svelte-1cp0kbr:nth-child(2),.item.full.svelte-1cp0kbr div.svelte-1cp0kbr:nth-child(2){color:var(--theme-clear-aj);text-shadow:0 0 10px var(--theme-clear-aj)}.item.zero.svelte-1cp0kbr div.svelte-1cp0kbr:nth-child(2){color:var(--theme-text-dim)}.total.svelte-1cp0kbr.svelte-1cp0kbr{color:var(--theme-text-dim);font-size:0.8rem;display:flex;align-items:end}")
      }

      function Co(e, t, r) {
          const n = e.slice();
          return n[4] = t[r], n
      }

      function Mo(e) {
          let t, r, n, o, s, a, i = (e[0][e[4]] ?? 0) + "";
          return {
              c() {
                  t = H("div"), r = H("div"), n = A(e[4]), o = L(), s = H("div"), a = A(i), D(r, "class", "svelte-1cp0kbr"), D(s, "class", "svelte-1cp0kbr"), D(t, "class", "item svelte-1cp0kbr"), B(t, "zero", !(e[0][e[4]] > 0)), B(t, "full", e[0][e[4]] == e[3])
              },
              m(e, i) {
                  M(e, t, i), k(t, r), k(r, n), k(t, o), k(t, s), k(s, a)
              },
              p(e, r) {
                  1 & r && i !== (i = (e[0][e[4]] ?? 0) + "") && _(a, i), 1 & r && B(t, "zero", !(e[0][e[4]] > 0)), 9 & r && B(t, "full", e[0][e[4]] == e[3])
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function Eo(e) {
          let t, r, n, o, s, a = (e[0].MAX ?? 0) + "";
          return {
              c() {
                  t = H("div"), r = H("div"), r.textContent = "MAX", n = L(), o = H("div"), s = A(a), D(r, "class", "svelte-1cp0kbr"), D(o, "class", "svelte-1cp0kbr"), D(t, "class", "item mx svelte-1cp0kbr")
              },
              m(e, a) {
                  M(e, t, a), k(t, r), k(t, n), k(t, o), k(o, s)
              },
              p(e, t) {
                  1 & t && a !== (a = (e[0].MAX ?? 0) + "") && _(s, a)
              },
              d(e) {
                  e && E(t)
              }
          }
      }

      function No(t) {
          let r, n, o, s, a, i, l, c, d, u, f, p, h, g, m, v, b, y, w = ["S", "S+", "SS", "SS+", "SSS", "SSS+"],
              $ = [];
          for (let e = 0; e < 6; e += 1) $[e] = Mo(Co(t, w, e));
          let x = t[0].MAX > 0 && Eo(t);
          return {
              c() {
                  r = H("div");
                  for (let e = 0; e < 6; e += 1) $[e].c();
                  n = L(), x && x.c(), o = L(), s = H("div"), a = H("div"), a.textContent = "FC", i = L(), l = H("div"), c = A(t[1]), d = L(), u = H("div"), f = H("div"), f.textContent = "AJ", p = L(), h = H("div"), g = A(t[2]), m = L(), v = H("div"), b = A("/"), y = A(t[3]), D(a, "class", "svelte-1cp0kbr"), D(l, "class", "svelte-1cp0kbr"), D(s, "class", "item fc svelte-1cp0kbr"), B(s, "zero", 0 == t[1]), B(s, "full", t[1] == t[3]), D(f, "class", "svelte-1cp0kbr"), D(h, "class", "svelte-1cp0kbr"), D(u, "class", "item aj svelte-1cp0kbr"), B(u, "zero", 0 == t[2]), B(u, "full", t[2] == t[3]), D(v, "class", "total svelte-1cp0kbr"), D(r, "class", "wrapper svelte-1cp0kbr")
              },
              m(e, t) {
                  M(e, r, t);
                  for (let e = 0; e < 6; e += 1) $[e] && $[e].m(r, null);
                  k(r, n), x && x.m(r, null), k(r, o), k(r, s), k(s, a), k(s, i), k(s, l), k(l, c), k(r, d), k(r, u), k(u, f), k(u, p), k(u, h), k(h, g), k(r, m), k(r, v), k(v, b), k(v, y)
              },
              p(e, [t]) {
                  if (9 & t) {
                      let o;
                      for (w = ["S", "S+", "SS", "SS+", "SSS", "SSS+"], o = 0; o < 6; o += 1) {
                          const s = Co(e, w, o);
                          $[o] ? $[o].p(s, t) : ($[o] = Mo(s), $[o].c(), $[o].m(r, n))
                      }
                      for (; o < 6; o += 1) $[o].d(1)
                  }
                  e[0].MAX > 0 ? x ? x.p(e, t) : (x = Eo(e), x.c(), x.m(r, o)) : x && (x.d(1), x = null), 2 & t && _(c, e[1]), 2 & t && B(s, "zero", 0 == e[1]), 10 & t && B(s, "full", e[1] == e[3]), 4 & t && _(g, e[2]), 4 & t && B(u, "zero", 0 == e[2]), 12 & t && B(u, "full", e[2] == e[3]), 8 & t && _(y, e[3])
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r), N($, e), x && x.d()
              }
          }
      }

      function Ho(e, t, r) {
          let {
              rankCounts: n
          } = t, {
              fcCount: o
          } = t, {
              ajCount: s
          } = t, {
              total: a
          } = t;
          return e.$$set = e => {
              "rankCounts" in e && r(0, n = e.rankCounts), "fcCount" in e && r(1, o = e.fcCount), "ajCount" in e && r(2, s = e.ajCount), "total" in e && r(3, a = e.total)
          }, [n, o, s, a]
      }
      const Uo = class extends Se {
          constructor(e) {
              super(), je(this, e, Ho, No, i, {
                  rankCounts: 0,
                  fcCount: 1,
                  ajCount: 2,
                  total: 3
              }, To)
          }
      };

      function Ao(e) {
          j(e, "svelte-cshvda", ".wrapper.svelte-cshvda.svelte-cshvda{border:var(--theme-border) 3px solid;border-radius:0.5rem;background-color:var(--theme-bg-sub);box-sizing:border-box;width:100%;max-width:600px;padding:0.5rem 2rem;margin:0.5rem;display:flex;justify-content:space-evenly;align-items:center;text-align:center;gap:1rem;overflow-x:scroll;white-space:nowrap}.wrapper.svelte-cshvda.svelte-cshvda::-webkit-scrollbar{display:none}.wrapper.aj.svelte-cshvda .progress.svelte-cshvda,.wrapper.aj.svelte-cshvda .op-total.svelte-cshvda{color:var(--theme-clear-aj);text-shadow:0 0 10px var(--theme-clear-aj)}.op-total.svelte-cshvda.svelte-cshvda{font-size:1.5em;font-weight:bold}.op-max.svelte-cshvda.svelte-cshvda{font-size:0.8em;color:var(--theme-text-dim)}.progress.svelte-cshvda.svelte-cshvda{width:100%;border-radius:1em;background-color:var(--theme-bg-main)}.progress.svelte-cshvda div.svelte-cshvda{border-radius:1em;background-color:var(--theme-control);font-weight:bold}")
      }

      function Lo(t) {
          let r, n, o, s, a, i, l, c, d, u, f, p, h, g = jn(t[1] / 1e4, 2) + "",
              m = (t[0] / 1e4).toFixed(1) + "",
              v = (isNaN(t[2]) ? "--" : jn(t[2], 3)) + "";
          return {
              c() {
                  r = H("div"), n = H("div"), o = H("div"), s = A(g), a = L(), i = H("div"), l = A("／"), c = A(m), d = L(), u = H("div"), f = H("div"), p = A(v), h = A("%"), D(o, "class", "op-total svelte-cshvda"), D(i, "class", "op-max svelte-cshvda"), z(f, "width", t[2] + "%"), D(f, "class", "svelte-cshvda"), D(u, "class", "progress svelte-cshvda"), D(r, "class", "wrapper svelte-cshvda"), B(r, "aj", t[0] && t[1].toFixed() === t[0].toFixed())
              },
              m(e, t) {
                  M(e, r, t), k(r, n), k(n, o), k(o, s), k(n, a), k(n, i), k(i, l), k(i, c), k(r, d), k(r, u), k(u, f), k(f, p), k(f, h)
              },
              p(e, [t]) {
                  2 & t && g !== (g = jn(e[1] / 1e4, 2) + "") && _(s, g), 1 & t && m !== (m = (e[0] / 1e4).toFixed(1) + "") && _(c, m), 4 & t && v !== (v = (isNaN(e[2]) ? "--" : jn(e[2], 3)) + "") && _(p, v), 4 & t && z(f, "width", e[2] + "%"), 3 & t && B(r, "aj", e[0] && e[1].toFixed() === e[0].toFixed())
              },
              i: e,
              o: e,
              d(e) {
                  e && E(r)
              }
          }
      }

      function Po(e, t, r) {
          let n, o, s, {
              records: a
          } = t;
          return e.$$set = e => {
              "records" in e && r(3, a = e.records)
          }, e.$$.update = () => {
              8 & e.$$.dirty && r(1, n = a.reduce(((e, t) => e + t.op), 0)), 8 & e.$$.dirty && r(0, o = a.reduce(((e, t) => e + t.opMax), 0)), 3 & e.$$.dirty && r(2, s = n / o * 100)
          }, [o, n, s, a]
      }
      const Oo = class extends Se {
              constructor(e) {
                  super(), je(this, e, Po, Lo, i, {
                      records: 3
                  }, Ao)
              }
          },
          {
              window: Do
          } = w;

      function Io(e) {
          j(e, "svelte-19r2scc", "main.svelte-19r2scc{width:fit-content;display:flex;margin:auto;-ms-flex-direction:column;flex-direction:column;align-items:center}#copied-main{width:600px;margin:initial}#copied-main .wrapper{overflow:hidden;max-width:100%}#copied-main tbody td[data-diff]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block;width:230px}#copied-main .pc-hidden span{display:none}")
      }

      function _o(t) {
          let r, n;
          return r = new mo({
              props: {
                  error: t[21]
              }
          }), {
              c() {
                  $e(r.$$.fragment)
              },
              m(e, t) {
                  xe(r, e, t), n = !0
              },
              p: e,
              i(e) {
                  n || (ge(r.$$.fragment, e), n = !0)
              },
              o(e) {
                  me(r.$$.fragment, e), n = !1
              },
              d(e) {
                  ke(r, e)
              }
          }
      }

      function Ro(e) {
          let t, r, n, o, s, a, i, l, c, d, u, f, p, h, g;
          t = new So({}), n = new br({}), a = new Ln({});
          let m = "best" === e[5] && zo(e);
          c = new oo({
              props: {
                  playRecord: e[0],
                  shown: "best" === e[5]
              }
          }), u = new oo({
              props: {
                  playRecord: e[8],
                  shown: "recent" === e[5]
              }
          }), p = new oo({
              props: {
                  playRecord: e[9],
                  shown: "history" === e[5]
              }
          });
          let v = e[10] && Bo();
          return {
              c() {
                  $e(t.$$.fragment), r = L(), $e(n.$$.fragment), o = L(), s = H("main"), $e(a.$$.fragment), i = L(), m && m.c(), l = L(), $e(c.$$.fragment), d = L(), $e(u.$$.fragment), f = L(), $e(p.$$.fragment), h = L(), v && v.c(), D(s, "class", "svelte-19r2scc")
              },
              m(e, b) {
                  xe(t, e, b), M(e, r, b), xe(n, e, b), M(e, o, b), M(e, s, b), xe(a, s, null), k(s, i), m && m.m(s, null), k(s, l), xe(c, s, null), k(s, d), xe(u, s, null), k(s, f), xe(p, s, null), k(s, h), v && v.m(s, null), g = !0
              },
              p(e, t) {
                  "best" === e[5] ? m ? (m.p(e, t), 32 & t && ge(m, 1)) : (m = zo(e), m.c(), ge(m, 1), m.m(s, l)) : m && (pe(), me(m, 1, 1, (() => {
                      m = null
                  })), he());
                  const r = {};
                  1 & t && (r.playRecord = e[0]), 32 & t && (r.shown = "best" === e[5]), c.$set(r);
                  const n = {};
                  256 & t && (n.playRecord = e[8]), 32 & t && (n.shown = "recent" === e[5]), u.$set(n);
                  const o = {};
                  512 & t && (o.playRecord = e[9]), 32 & t && (o.shown = "history" === e[5]), p.$set(o), e[10] ? v ? 1024 & t && ge(v, 1) : (v = Bo(), v.c(), ge(v, 1), v.m(s, null)) : v && (pe(), me(v, 1, 1, (() => {
                      v = null
                  })), he())
              },
              i(e) {
                  g || (ge(t.$$.fragment, e), ge(n.$$.fragment, e), ge(a.$$.fragment, e), ge(m), ge(c.$$.fragment, e), ge(u.$$.fragment, e), ge(p.$$.fragment, e), ge(v), g = !0)
              },
              o(e) {
                  me(t.$$.fragment, e), me(n.$$.fragment, e), me(a.$$.fragment, e), me(m), me(c.$$.fragment, e), me(u.$$.fragment, e), me(p.$$.fragment, e), me(v), g = !1
              },
              d(e) {
                  ke(t, e), e && E(r), ke(n, e), e && E(o), e && E(s), ke(a), m && m.d(), ke(c), ke(u), ke(p), v && v.d()
              }
          }
      }

      function zo(e) {
          let t, r, n, o;
          t = new Uo({
              props: {
                  ajCount: e[1],
                  fcCount: e[3],
                  rankCounts: e[4],
                  total: e[0].length
              }
          });
          let s = "hide" != e[2] && Fo(e);
          return {
              c() {
                  $e(t.$$.fragment), r = L(), s && s.c(), n = P()
              },
              m(e, a) {
                  xe(t, e, a), M(e, r, a), s && s.m(e, a), M(e, n, a), o = !0
              },
              p(e, r) {
                  const o = {};
                  2 & r && (o.ajCount = e[1]), 8 & r && (o.fcCount = e[3]), 16 & r && (o.rankCounts = e[4]), 1 & r && (o.total = e[0].length), t.$set(o), "hide" != e[2] ? s ? (s.p(e, r), 4 & r && ge(s, 1)) : (s = Fo(e), s.c(), ge(s, 1), s.m(n.parentNode, n)) : s && (pe(), me(s, 1, 1, (() => {
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
                  ke(t, e), e && E(r), s && s.d(e), e && E(n)
              }
          }
      }

      function Fo(e) {
          let t, r;
          return t = new Oo({
              props: {
                  records: e[0]
              }
          }), {
              c() {
                  $e(t.$$.fragment)
              },
              m(e, n) {
                  xe(t, e, n), r = !0
              },
              p(e, r) {
                  const n = {};
                  1 & r && (n.records = e[0]), t.$set(n)
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
      }

      function Bo(e) {
          let t, r;
          return t = new $o({}), {
              c() {
                  $e(t.$$.fragment)
              },
              m(e, n) {
                  xe(t, e, n), r = !0
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
      }

      function Vo(t) {
          let r, n;
          return r = new mo({}), {
              c() {
                  $e(r.$$.fragment)
              },
              m(e, t) {
                  xe(r, e, t), n = !0
              },
              p: e,
              i(e) {
                  n || (ge(r.$$.fragment, e), n = !0)
              },
              o(e) {
                  me(r.$$.fragment, e), n = !1
              },
              d(e) {
                  ke(r, e)
              }
          }
      }

      function qo(e) {
          let t, r;
          return t = new xn({}), {
              c() {
                  $e(t.$$.fragment)
              },
              m(e, n) {
                  xe(t, e, n), r = !0
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
      }

      function Wo(e) {
          let t, r, n, o, s, a, i, l, c, d, u;
          document.title = o = e[7]("main.title");
          let f = {
              ctx: e,
              current: null,
              token: null,
              hasCatch: !0,
              pending: Vo,
              then: Ro,
              catch: _o,
              error: 21,
              blocks: [, , , ]
          };
          ! function(e, t) {
              const r = t.token = {};

              function n(e, n, o, s) {
                  if (t.token !== r) return;
                  t.resolved = s;
                  let a = t.ctx;
                  void 0 !== o && (a = a.slice(), a[o] = s);
                  const i = e && (t.current = e)(a);
                  let l = !1;
                  t.block && (t.blocks ? t.blocks.forEach(((e, r) => {
                      r !== n && e && (pe(), me(e, 1, 1, (() => {
                          t.blocks[r] === e && (t.blocks[r] = null)
                      })), he())
                  })) : t.block.d(1), i.c(), ge(i, 1), i.m(t.mount(), t.anchor), l = !0), t.block = i, t.blocks && (t.blocks[n] = i), l && le()
              }
              if (!(o = e) || "object" != typeof o && "function" != typeof o || "function" != typeof o.then) {
                  if (t.current !== t.then) return n(t.then, 1, t.value, e), !0;
                  t.resolved = e
              } else {
                  const r = Y();
                  if (e.then((e => {
                          G(r), n(t.then, 1, t.value, e), G(null)
                      }), (e => {
                          if (G(r), n(t.catch, 2, t.error, e), G(null), !t.hasCatch) throw e
                      })), t.current !== t.pending) return n(t.pending, 0), !0
              }
              var o
          }(a = Promise.all([Ut.init(), Nt.init(), Ht.init(), At.init(), e[13]()]), f);
          let p = e[11] && qo();
          return {
              c() {
                  t = H("link"), r = H("link"), s = L(), f.block.c(), i = L(), p && p.c(), l = P(), D(t, "rel", "stylesheet"), D(t, "href", "../common/styles/common.css"), D(r, "rel", "stylesheet"), D(r, "href", n = "../common/styles/theme-" + e[6] + ".css")
              },
              m(n, o) {
                  k(document.head, t), k(document.head, r), M(n, s, o), f.block.m(n, f.anchor = o), f.mount = () => i.parentNode, f.anchor = i, M(n, i, o), p && p.m(n, o), M(n, l, o), c = !0, d || (u = O(Do, "hashchange", e[12]), d = !0)
              },
              p(t, [s]) {
                  e = t, (!c || 64 & s && n !== (n = "../common/styles/theme-" + e[6] + ".css")) && D(r, "href", n), (!c || 128 & s) && o !== (o = e[7]("main.title")) && (document.title = o),
                      function(e, t, r) {
                          const n = t.slice(),
                              {
                                  resolved: o
                              } = e;
                          e.current === e.then && (n[e.value] = o), e.current === e.catch && (n[e.error] = o), e.block.p(n, r)
                      }(f, e, s), e[11] ? p ? 2048 & s && ge(p, 1) : (p = qo(), p.c(), ge(p, 1), p.m(l.parentNode, l)) : p && (pe(), me(p, 1, 1, (() => {
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
                  E(t), E(r), e && E(s), f.block.d(e), f.token = null, f = null, e && E(i), p && p.d(e), e && E(l), d = !1, u()
              }
          }
      }

      function Jo(e, t, r) {
          let n, o, s, a, i, l, c, d, f, h, g, m, v, b, y, w, $, x, k;
          return u(e, Ye, (e => r(14, i = e))), u(e, Ze, (e => r(15, l = e))), u(e, et, (e => r(16, c = e))), u(e, Qe, (e => r(17, d = e))), u(e, rt, (e => r(2, f = e))), u(e, At, (e => r(18, h = e))), u(e, Le, (e => r(19, g = e))), u(e, Tt, (e => r(20, m = e))), u(e, $t, (e => r(5, v = e))), u(e, Ae, (e => r(6, b = e))), u(e, wt, (e => r(7, y = e))), u(e, Nt, (e => r(8, w = e))), u(e, Ht, (e => r(9, $ = e))), u(e, jt, (e => r(10, x = e))), u(e, xt, (e => r(11, k = e))), p($t, v = window.location.hash.slice(1), v), e.$$.update = () => {
              507908 & e.$$.dirty && r(0, n = h.filter((e => ("hide" != f || e.score >= 0) && d[e.difficulty] && c[_e.find((t => Ie[t] == e.genre))] && l >= e.const && e.const >= i))), 1 & e.$$.dirty && r(4, o = (() => {
                  let e = {};
                  ["MAX", "SSS+", "SSS", "SS+", "SS", "S+", "S"].forEach((t => e[t] = 0)), ["AAA", "AA", "A", "BBB", "BB", "B", "C", "D"].forEach((t => e[t] = 0));
                  for (const t of n) e[t.rank]++;
                  return Object.keys(e).reduce(((t, r) => (e[r] += e[t], r))), e
              })()), 1 & e.$$.dirty && r(1, s = n.filter((e => "AJ" == e.clear)).length), 3 & e.$$.dirty && r(3, a = s + n.filter((e => "FC" == e.clear)).length)
          }, [n, s, f, a, o, v, b, y, w, $, x, k, function() {
              p($t, v = window.location.hash.slice(1), v), "best" !== v && p(Tt, m = !1, m)
          }, async function() {
              Re(window.opener, Pe)("saveConfig", {
                  data: {
                      lang: g
                  }
              })
          }, i, l, c, d, h]
      }
      new class extends Se {
          constructor(e) {
              super(), je(this, e, Jo, Wo, i, {}, Io)
          }
      }({
          target: document.body
      })
  })()
})();