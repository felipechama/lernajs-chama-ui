var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,n,o){return t[1]?e({},e(n.$$scope.ctx,t[1](o?o(n):{}))):n.$$scope.ctx}function u(t){return document.createElement(t)}let i;function $(t){i=t}const a=[],f=Promise.resolve();let d=!1;const p=[],h=[],m=[];function g(t){h.push(t)}function y(){const t=new Set;do{for(;a.length;){const t=a.shift();$(t),v(t.$$)}for(;p.length;)p.shift()();for(;h.length;){const e=h.pop();t.has(e)||(e(),t.add(e))}}while(a.length);for(;m.length;)m.pop()();d=!1}function v(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(g))}function b(t,e){t.$$.dirty||(a.push(t),d||(d=!0,f.then(y)),t.$$.dirty=o()),t.$$.dirty[e]=!0}function x(e,s,l,u,a,f){const d=i;$(e);const p=s.props||{},h=e.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:null};let m=!1;var v;h.ctx=l?l(e,p,(t,n)=>{h.ctx&&a(h.ctx[t],h.ctx[t]=n)&&(h.bound[t]&&h.bound[t](n),m&&b(e,t))}):p,h.update(),m=!0,r(h.before_render),h.fragment=u(h.ctx),s.target&&(s.hydrate?h.fragment.l((v=s.target,Array.from(v.childNodes))):h.fragment.c(),s.intro&&e.$$.fragment.i&&e.$$.fragment.i(),function(t,e,o){const{fragment:s,on_mount:l,on_destroy:u,after_render:i}=t.$$;s.m(e,o),g(()=>{const e=l.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(g)}(e,s.target,s.anchor),y()),$(d)}class _{$destroy(){var e,n;n=!0,(e=this).$$&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function E(t){var n,o,r;const c=t.$$slots.default,s=function(t,e,n){if(t){const o=l(t,e,n);return t[0](o)}}(c,t,null);return{c(){var e,o,c,l;n=u("button"),s&&s.c(),n.className="svelte-lirzq5",e=n,o="click",c=t.handleClick,e.addEventListener(o,c,l),r=(()=>e.removeEventListener(o,c,l))},l(t){s&&s.l(button_nodes)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),s&&s.m(n,null),o=!0},p(t,n){s&&s.p&&t.$$scope&&s.p(function(t,n,o,r){return t[1]?e({},e(n.$$scope.changed||{},t[1](r?r(o):{}))):n.$$scope.changed||{}}(c,n,t,null),l(c,n,null))},i(t){o||(s&&s.i&&s.i(t),o=!0)},o(t){s&&s.o&&s.o(t),o=!1},d(t){var e;t&&(e=n).parentNode.removeChild(e),s&&s.d(t),r()}}}function k(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$set=(t=>{"$$scope"in t&&n("$$scope",r=t.$$scope)}),{handleClick:()=>{alert("new button version")},$$slots:o,$$scope:r}}var q;return(q=Object.freeze({default:class extends _{constructor(t){var e,n,o;super(),document.getElementById("svelte-lirzq5-style")||((o=u("style")).id="svelte-lirzq5-style",o.textContent="button.svelte-lirzq5{border:1px solid red}",e=document.head,n=o,e.appendChild(n)),x(this,t,k,E,s,[])}}}))&&q.default||q}();
