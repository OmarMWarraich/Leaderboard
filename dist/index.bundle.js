(()=>{"use strict";var n,e,r,t,o,a,s,i,c,l,f,u,p,m,d={426:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(81),o=r.n(t),a=r(645),s=r.n(a)()(o());s.push([n.id,'/* ------------------- */\n\n/* Custom properties   */\n\n/* ------------------- */\n\n:root {\n  /* colors */\n  --clr-dark: 230 35% 7%;\n  --clr-light: 231 77% 90%;\n  --clr-white: 0 0% 100%;\n\n  /* font-sizes */\n  --fs-900: 9.375rem;\n  --fs-800: 6.25rem;\n  --fs-700: 3.5rem;\n  --fs-600: 2rem;\n  --fs-500: 1.75rem;\n  --fs-400: 1.125rem;\n  --fs-300: 1rem;\n  --fs-200: 0.875rem;\n\n  /* font-families */\n  --ff-serif: "Bellefair", serif;\n  --ff-sans-cond: "Barlow Condensed", sans-serif;\n  --ff-sans-normal: "Barlow", sans-serif;\n}\n\n/* ------------------- */\n\n/* Reset               */\n\n/* ------------------- */\n\n/* https://piccalil.li/blog/a-modern-css-reset/ */\n\n/* Box sizing */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Reset margins */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\np,\nfigure {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  font-weight: 400;\n}\n\n/* set up the body */\nbody {\n  font-family: var(--ff-sans-normal);\n  font-size: var(--fs-400);\n  color: hsl(var(--clr-dark));\n  background-color: hsl(var(--clr-white));\n  line-height: 1.5;\n  min-height: 100vh;\n}\n\n/* make images easier to work with */\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n/* make form elements easier to work with */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* remove animations for people who\'ve turned them off */\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\nh1 {\n  font-size: var(--fs-800);\n  font-family: var(--ff-serif);\n  letter-spacing: 4.75px;\n  text-transform: uppercase;\n}\n\nh2 {\n  font-size: var(--fs-700);\n  font-family: var(--ff-serif);\n  letter-spacing: 1.75px;\n  margin-left: 4rem;\n}\n\n#refresh {\n  font-size: var(--fs-300);\n  font-family: var(--ff-sans-cond);\n  letter-spacing: 1.75px;\n  text-transform: uppercase;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n#recent-scores {\n  list-style-type: none;\n  margin-left: 2rem;\n  margin-right: 4rem;\n  border: 2px solid hsl(var(--clr-dark));\n}\n\n#recent-scores li {\n  margin-right: 2rem;\n}\n\n#recent-scores li:nth-child(even) {\n  background-color: hsl(var(--clr-light));\n}\n\n.grid-item-1 {\n  display: flex;\n  flex-direction: column;\n  margin: 0 2rem;\n  place-items: center;\n}\n\n#name {\n  margin-top: 1.15rem;\n}\n\n#score,\n#submit {\n  margin-top: 1.15rem;\n}\n',""]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<n.length;l++){var f=[].concat(n[l]);t&&s[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],l=t.base?c[0]+t.base:c[0],f=a[l]||0,u="".concat(l," ").concat(f);a[l]=f+1;var p=r(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var d=o(m,t);t.byIndex=i,e.splice(i,0,{identifier:u,updater:d,references:1})}s.push(u)}return s}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=r(a[s]);e[i].references--}for(var c=t(n,o),l=0;l<a.length;l++){var f=r(a[l]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var r=h[n]={id:n,exports:{}};return d[n](r,r.exports,v),r.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var r in e)v.o(e,r)&&!v.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),r=v(795),t=v.n(r),o=v(569),a=v.n(o),s=v(565),i=v.n(s),c=v(216),l=v.n(c),f=v(589),u=v.n(f),p=v(426),(m={}).styleTagTransform=u(),m.setAttributes=i(),m.insert=a().bind(null,"head"),m.domAPI=t(),m.insertStyleElement=l(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",{method:"POST",body:JSON.stringify({name:"My Game"}),headers:{"Content-type":"application/json; charset=UTF-8"}}),e=await n.json();console.log(e)})(),document.querySelector("#submit"),document.querySelector("#refresh"),document.querySelector("#name"),document.querySelector("#score"),document.querySelector("#recent_scores")})();