(()=>{var t={283:(t,e,n)=>{var o={"./en_US.json":466,"./zh_TW.json":549};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=s,t.exports=r,r.id=283},930:(t,e,n)=>{var o={"./en_US.json":46,"./zh_TW.json":337};function r(t){var e=s(t);return n(e)}function s(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=s,t.exports=r,r.id=930},466:t=>{"use strict";t.exports=JSON.parse('{"locale.name":"English (US)","footer.chooseLang":"Choose Language","footer.source":"Source code & this page is hosted on <a href=\\"https://github.com/Dogeon188/chuni-tools\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\">GitHub</a>"}')},549:t=>{"use strict";t.exports=JSON.parse('{"locale.name":"繁體中文","footer.chooseLang":"選擇語言","footer.source":"本網站透過GitHub Pages架設，原始碼可以在<a href=\\"https://github.com/Dogeon188/chuni-tools\\" target=\\"_blank\\" rel=\\"noreferrer noopener\\">GitHub</a>找到。"}')},46:t=>{"use strict";t.exports=JSON.parse('{"main.title":"CHUNITHM Score Viewer Manual"}')},337:t=>{"use strict";t.exports=JSON.parse('{"main.title":"CHUNITHM 查分器使用說明"}')}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}new Set;let u,f=!1;function d(t,e){t.appendChild(e)}function h(t,e,n){const o=function(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}(t);if(!o.getElementById(e)){const t=g("style");t.id=e,t.textContent=n,function(t,e){d(t.head||t,e),e.sheet}(o,t)}}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function w(t){u=t}new Map;const x=[],k=[],S=[],N=[],O=Promise.resolve();let T=!1;function E(t){S.push(t)}const U=new Set;let j=0;function L(){if(0!==j)return;const t=u;do{try{for(;j<x.length;){const t=x[j];j++,w(t),M(t.$$)}}catch(t){throw x.length=0,j=0,t}for(w(null),x.length=0,j=0;k.length;)k.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];U.has(e)||(U.add(e),e())}S.length=0}while(x.length);for(;N.length;)N.pop()();T=!1,U.clear(),w(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const z=new Set;let C;function H(t,e){t&&t.i&&(z.delete(t),t.i(e))}function W(t,n,o,c){const{fragment:i,after_update:a}=t.$$;i&&i.m(n,o),c||E((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(E)}function I(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,n,s,c,i,a,l,d=[-1]){const h=u;w(e);const p=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:n.target||h.$$.root};l&&l(p.root);let g=!1;if(p.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),T||(T=!0,O.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),g=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){f=!0;const t=($=n.target,Array.from($.childNodes));p.fragment&&p.fragment.l(t),t.forEach(m)}else p.fragment&&p.fragment.c();n.intro&&H(e.$$.fragment),W(e,n.target,n.anchor,n.customElement),f=!1,L()}var $;w(h)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){I(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class A{$destroy(){I(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const P=[];function q(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!P.length;for(const t of r)t[1](),P.push(t,e);if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return r.add(a),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}var J;function R(t,e,n,o=(()=>{})){let r=localStorage.getItem(t);null!==r&&n.includes(r)||(r=e,localStorage.setItem(t,r));const{subscribe:s,set:c,update:i}=q(r);return{subscribe:s,set(e){c(e),localStorage.setItem(t,e),o(e)},update:i,reset(){this.set(e)},accepts:n}}!function(t){t.en_US="en_US",t.zh_TW="zh_TW"}(J||(J={}));const F=R("theme","dark",["dark","purple"]),G=R("language",function(){const t=new URLSearchParams(location.search);if(t.get("lang"))return t.get("lang").startsWith("zh")?J.zh_TW:J.en_US;return function(){switch(localStorage.getItem("language")){case J.en_US:return J.en_US;case J.zh_TW:return J.zh_TW}return null}()||(navigator.language.startsWith("zh")?J.zh_TW:J.en_US)}(),Object.values(J));function B(t){h(t,"svelte-ga09rl","footer.svelte-ga09rl{max-width:600px;margin:auto;padding:2em;gap:0.5em;display:flex;flex-direction:column}select.svelte-ga09rl{background:var(--theme-bg);color:inherit}")}function V(t,e,n){const o=t.slice();return o[5]=e[n],o}function K(t){let e,n,o,r=t[1].get(t[5])+"";return{c(){e=g("option"),n=$(r),e.__value=o=t[5],e.value=e.__value},m(t,o){p(t,e,o),d(e,n)},p(t,e){2&e&&r!==(r=t[1].get(t[5])+"")&&y(n,r)},d(t){t&&m(e)}}}function Q(e){let n,o,r,s,c,i,a,l,u,f,h=e[2]("footer.chooseLang")+"",w=e[2]("footer.source")+"",x=G.accepts,k=[];for(let t=0;t<x.length;t+=1)k[t]=K(V(e,x,t));return{c(){n=g("footer"),o=g("div"),r=g("label"),s=$(h),c=b(),i=g("select");for(let t=0;t<k.length;t+=1)k[t].c();a=b(),l=g("div"),_(i,"class","svelte-ga09rl"),void 0===e[3]&&E((()=>e[4].call(i))),_(n,"class","svelte-ga09rl")},m(t,h){p(t,n,h),d(n,o),d(o,r),d(r,s),d(r,c),d(r,i);for(let t=0;t<k.length;t+=1)k[t].m(i,null);var m,g,$,b;v(i,e[3]),d(n,a),d(n,l),l.innerHTML=w,u||(m=i,g="change",$=e[4],m.addEventListener(g,$,b),f=()=>m.removeEventListener(g,$,b),u=!0)},p(t,[e]){if(4&e&&h!==(h=t[2]("footer.chooseLang")+"")&&y(s,h),2&e){let n;for(x=G.accepts,n=0;n<x.length;n+=1){const o=V(t,x,n);k[n]?k[n].p(o,e):(k[n]=K(o),k[n].c(),k[n].m(i,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=x.length}8&e&&v(i,t[3]),4&e&&w!==(w=t[2]("footer.source")+"")&&(l.innerHTML=w)},i:t,o:t,d(t){t&&m(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(k,t),u=!1,f()}}}function X(e,n,o){let r,s,c=t,i=()=>(c(),c=a(u,(t=>o(2,r=t))),u);l(e,G,(t=>o(3,s=t))),e.$$.on_destroy.push((()=>c()));let{t:u}=n;i();let{translationNames:f}=n;return e.$$set=t=>{"t"in t&&i(o(0,u=t.t)),"translationNames"in t&&o(1,f=t.translationNames)},[u,f,r,s,function(){s=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),G.set(s)}]}const Y=class extends A{constructor(t){super(),D(this,t,X,Q,c,{t:0,translationNames:1},B)}},Z=new Map,tt=new Map;for(let t of G.accepts){const e=Object.entries(n(283)(`./${t}.json`)),o=Object.entries(n(930)(`./${t}.json`));Z.set(t,new Map(e.concat(o))),tt.set(t,Z.get(t)?.get("locale.name")||"Undefined locale name")}const et=function(e,n){return function(e,n,o){const c=!Array.isArray(e),i=c?[e]:e,l=n.length<2;return{subscribe:q(o,(e=>{let o=!1;const u=[];let f=0,d=t;const h=()=>{if(f)return;d();const o=n(c?u[0]:u,e);l?e(o):d=s(o)?o:t},p=i.map(((t,e)=>a(t,(t=>{u[e]=t,f&=~(1<<e),o&&h()}),(()=>{f|=1<<e}))));return o=!0,h(),function(){r(p),d()}})).subscribe}}(n,(t=>(n,o={})=>function(t,n,o){if(!n)throw new Error("No key specified");let r=e.get(t)?.get(n);return void 0===r?(console.error(`No translation found for ${t}.${n}`),n):(Object.keys(o).map((t=>{const e=new RegExp(`{{${t}}}`,"g");r=r?.replace(e,o[t])})),r)}(t,n,o)))}(Z,G);function nt(t){h(t,"svelte-1l1u2mb","img{max-width:100%;max-height:50vh;display:block;margin:1em auto;border-radius:1em}main.svelte-1l1u2mb{padding:2em;max-width:600px;margin:auto}")}function ot(t){let e,n,o,r,s,c,i,a,l;return document.title=r=t[1]("main.title"),a=new Y({props:{t:et,translationNames:tt}}),{c(){var r;e=g("link"),n=g("link"),s=b(),c=g("main"),c.innerHTML="<h1>WIP</h1>",i=b(),(r=a.$$.fragment)&&r.c(),_(e,"rel","stylesheet"),_(e,"href","../../common/styles/common.css"),_(n,"rel","stylesheet"),_(n,"href",o="../../common/styles/theme-"+t[0]+".css"),_(c,"class","svelte-1l1u2mb")},m(t,o){d(document.head,e),d(document.head,n),p(t,s,o),p(t,c,o),p(t,i,o),W(a,t,o),l=!0},p(t,[e]){(!l||1&e&&o!==(o="../../common/styles/theme-"+t[0]+".css"))&&_(n,"href",o),(!l||2&e)&&r!==(r=t[1]("main.title"))&&(document.title=r)},i(t){l||(H(a.$$.fragment,t),l=!0)},o(t){(function(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),(void 0).c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()})(a.$$.fragment,t),l=!1},d(t){m(e),m(n),t&&m(s),t&&m(c),t&&m(i),I(a,t)}}}function rt(t,e,n){let o,r,s;var c;return l(t,G,(t=>n(2,o=t))),l(t,F,(t=>n(0,r=t))),l(t,et,(t=>n(1,s=t))),c=()=>{var t;t=o,localStorage.setItem("language",t)},function(){if(!u)throw new Error("Function called outside component initialization");return u}().$$.on_mount.push(c),[r,s]}new class extends A{constructor(t){super(),D(this,t,rt,ot,c,{},nt)}}({target:document.body})})()})();