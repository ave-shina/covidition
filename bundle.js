!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=7)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([i]).join("\n")}var a,c,u;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&i[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),e.push(u))}},e}},function(n,e,t){var r=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);n.exports=i.locals||{}},function(n,e,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function u(n,e){for(var t={},r=[],i=0;i<n.length;i++){var o=n[i],u=e.base?o[0]+e.base:o[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=c(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:y(p,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=f(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function d(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,v=0;function y(n,e){var t,r,i;if(e.singleton){var o=v++;t=h||(h=s(e)),r=p.bind(null,t,o,!1),i=p.bind(null,t,o,!0)}else t=s(e),r=d.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=c(t[r]);a[i].references--}for(var o=u(n,e),s=0;s<t.length;s++){var l=c(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=o}}}},function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r)()(!1);i.push([n.i,"body {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  margin: 0;\r\n}\r\nheader {\r\n  height: auto;\r\n  width: 80%;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  flex-direction: column;\r\n}\r\nnavbar-container {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\nnav {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-title {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.navbar-title > h1 {\r\n  margin-left: 1vh;\r\n  font-size: 4vh;\r\n}\r\n\r\n.header-logo {\r\n  height: 4vh;\r\n  width: 4vh;\r\n}\r\n.header-logo > img {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.navbar-date {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.navbar-date > p {\r\n  font-size: 2.5vh;\r\n}\r\nheader > hr {\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .navbar-date > p {\r\n    font-size: 2vh;\r\n  }\r\n}\r\n\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n\r\nmain {\r\n  width: 80%;\r\n}\r\n.header-container {\r\n  height: auto;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  margin: 3vh 0 5vh 0;\r\n}\r\n\r\n.covid-explain {\r\n  height: 100%;\r\n  width: 30%;\r\n}\r\n.covid-explain-image {\r\n  display: none;\r\n}\r\n\r\n.covid-explain > h1 {\r\n  font-size: 4vh;\r\n  margin: 1vh 0;\r\n}\r\n.covid-explain > p {\r\n  font-size: 2.5vh;\r\n  line-height: 1.5;\r\n}\r\n.button-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n.button-container > a {\r\n  cursor: pointer;\r\n  font-size: 2vh;\r\n  border-radius: 5vh;\r\n  padding: 1vh 2vh;\r\n  background: transparent;\r\n  border: solid 0.2vh;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n.button-container > a:hover {\r\n  background: black;\r\n  color: white;\r\n}\r\n.covid-frame-image {\r\n  width: 30%;\r\n  height: 100%;\r\n}\r\n.covid-image-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  border: solid black 0.1vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.covid-image {\r\n  margin: 4vh 0;\r\n  width: 85%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.covid-image > img {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.covid-box-container {\r\n  margin-bottom: 4vh;\r\n  width: 85%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.box-ornament {\r\n  width: 25%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.box {\r\n  background-color: black;\r\n  height: 1vw;\r\n  width: 1vw;\r\n}\r\n.suggestion-container {\r\n  height: 100%;\r\n  width: 30%;\r\n}\r\n.suggestion-container > h1 {\r\n  font-size: 4vh;\r\n  margin: 1vh 0;\r\n}\r\n.suggestion-point {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding-top: 3vh;\r\n}\r\n.suggestion-icon {\r\n  height: auto;\r\n  width: 20%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-right: 3vh;\r\n}\r\n.suggestion-icon > img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.suggestion-point > h3 {\r\n  width: 80%;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n  .header-container {\r\n    flex-direction: column;\r\n  }\r\n  .covid-explain {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  .covid-explain-image {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    margin: 3vh 0;\r\n  }\r\n  .covid-explain > p {\r\n    font-size: 2.5vh;\r\n    line-height: 2;\r\n  }\r\n  .covid-frame-image {\r\n    display: none;\r\n  }\r\n  .box {\r\n    background-color: black;\r\n    height: 2vw;\r\n    width: 2vw;\r\n  }\r\n  .suggestion-container {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin-top: 5vh;\r\n  }\r\n}\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n\r\n.live-report-container {\r\n  height: auto;\r\n  width: 100%;\r\n  margin-top: 5vh;\r\n}\r\n.live-report-title {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n.live-report-circle {\r\n  border-radius: 5vh;\r\n  height: 2.5vh;\r\n  width: 2.5vh;\r\n  background-color: red;\r\n  margin-right: 2vh;\r\n  animation-name: pulse;\r\n  animation-duration: 1.5s;\r\n  animation-iteration-count: infinite;\r\n  animation-timing-function: linear;\r\n}\r\n@keyframes pulse {\r\n  0% {\r\n    box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.082);\r\n  }\r\n  65% {\r\n    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.109);\r\n  }\r\n  90% {\r\n    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);\r\n  }\r\n}\r\n\r\n.live-report-title > h1 {\r\n  font-size: 4vh;\r\n  margin: 1vh 0;\r\n}\r\n\r\n.report-result-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 4vh 0;\r\n}\r\n\r\n.report-result {\r\n  width: 30%;\r\n  height: 30vh;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  border: solid black 0.1vh;\r\n}\r\n.meninggal-sign,\r\n.dirawat-sign,\r\n.sembuh-sign {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.meninggal-sign > span {\r\n  background-color: red;\r\n  margin: 2vh 0 0 2vh;\r\n  width: 2vh;\r\n  height: 2vh;\r\n}\r\n.dirawat-sign > span {\r\n  background-color: orange;\r\n  margin: 2vh 0 0 2vh;\r\n  width: 2vh;\r\n  height: 2vh;\r\n}\r\n.sembuh-sign > span {\r\n  background-color: green;\r\n  margin: 2vh 0 0 2vh;\r\n  width: 2vh;\r\n  height: 2vh;\r\n}\r\n.report-result > h1 {\r\n  font-size: 5vh;\r\n  margin: 5vh 0 2vh 0;\r\n}\r\n\r\n.report-result > p {\r\n  font-size: 3vh;\r\n}\r\n.quote-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.quote-container > p {\r\n  width: 70%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 2.5vh;\r\n  line-height: 2;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .live-report-circle {\r\n    border-radius: 3vh;\r\n    height: 2vh;\r\n    width: 2vh;\r\n  }\r\n  .live-report-title > h1 {\r\n    font-size: 3vh;\r\n  }\r\n  .report-result-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin: 4vh 0;\r\n  }\r\n  .report-result {\r\n    width: 100%;\r\n    height: 30vh;\r\n    margin: 2vh 0;\r\n  }\r\n  .quote-container > p {\r\n    width: 80%;\r\n\r\n    align-items: center;\r\n  }\r\n}\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\n/*  */\r\nfooter-container {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\nfooter {\r\n  height: auto;\r\n  width: 100%;\r\n  background-color: black;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-content {\r\n  height: 7vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.footer-content > p {\r\n  color: white;\r\n  font-size: 2.5vh;\r\n}\r\n",""]),e.default=i},function(n,e){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function a(n){var e="function"==typeof Map?new Map:void 0;return(a=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,n)})(n)}function c(n,e,t){return(c=u()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(n,r));return t&&s(i,t.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function s(n,e){return(s=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&s(n,e)}(d,n);var e,t,a,c,f,p=(e=d,t=u(),function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function d(){return r(this,d),p.apply(this,arguments)}return a=d,(c=[{key:"connectedCallback",value:function(){this.region=this.getAttribute("region"),this.render()}},{key:"indonesiaItem",set:function(n){this._indonesiaItem=n,this.render()}},{key:"render",value:function(){this.innerHTML='\n     <div class="live-report-container">\n            <div class="live-report-title">\n                <div class="live-report-circle"></div>\n                <h1>Live Report (Indonesia)</h1>\n            </div>\n\n            <hr>\n            <div class="report-result-container">\n                <div class="report-result">\n                    <div class="dirawat-sign">\n                        <span></span>\n                    </div>\n                    <h1>'.concat(this._indonesiaItem.confirmed.value,'</h1>\n                    <p>Terkonfirmasi</p>\n                </div>\n                <div class="report-result">\n                    <div class="sembuh-sign">\n                        <span></span>\n                    </div>\n                    <h1>').concat(this._indonesiaItem.recovered.value,'</h1>\n                    <p>Sembuh</p>\n                </div>\n                      <div class="report-result">\n                    <div class="meninggal-sign">\n                        <span></span>\n                    </div>\n                    <h1>').concat(this._indonesiaItem.deaths.value,'</h1>\n                    <p>Meninggal</p>\n                </div>\n                \x3c!--  --\x3e\n            </div>\n            <hr>\n            <div class="quote-container">\n                <p>Pada akhirnya masing-masing dari kita mengetahui tentang hal-hal yang seringkali luput kita berikan dedikasi dan apresiasi, \n                    hargai selagi ada, nikmati selagi bisa, setiap momen untuk cerita perjalanan kita.\n                </p>\n            </div>\n        </div>\n        <hr>')}}])&&i(a.prototype,c),f&&i(a,f),d}(a(HTMLElement));customElements.define("indonesia-report",f)},function(n,e){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function a(n){var e="function"==typeof Map?new Map:void 0;return(a=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,n)})(n)}function c(n,e,t){return(c=u()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(n,r));return t&&s(i,t.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function s(n,e){return(s=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&s(n,e)}(d,n);var e,t,a,c,f,p=(e=d,t=u(),function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function d(){return r(this,d),p.apply(this,arguments)}return a=d,(c=[{key:"connectedCallback",value:function(){this.region=this.getAttribute("region"),this.render()}},{key:"globalItem",set:function(n){this._globalItem=n,this.render()}},{key:"render",value:function(){this.innerHTML='\n     <div class="live-report-container">\n            <div class="live-report-title">\n                <div class="live-report-circle"></div>\n                <h1>Live Report (Global)</h1>\n            </div>\n\n            <hr>\n            <div class="report-result-container">\n                <div class="report-result">\n                    <div class="dirawat-sign">\n                        <span></span>\n                    </div>\n                    <h1>'.concat(this._globalItem.confirmed.value,'</h1>\n                    <p>Terkonfirmasi</p>\n                </div>\n                <div class="report-result">\n                    <div class="sembuh-sign">\n                        <span></span>\n                    </div>\n                    <h1>').concat(this._globalItem.recovered.value,'</h1>\n                    <p>Sembuh</p>\n                </div>\n                      <div class="report-result">\n                    <div class="meninggal-sign">\n                        <span></span>\n                    </div>\n                    <h1>').concat(this._globalItem.deaths.value,"</h1>\n                    <p>Meninggal</p>\n                </div>\n                \x3c!--  --\x3e\n            </div>\n        \n         \n        </div>\n        <hr>")}}])&&i(a.prototype,c),f&&i(a,f),d}(a(HTMLElement));customElements.define("global-report",f)},function(n,e){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function i(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e){return!e||"object"!==t(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function a(n){var e="function"==typeof Map?new Map:void 0;return(a=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,n)})(n)}function c(n,e,t){return(c=u()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(n,r));return t&&s(i,t.prototype),i}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function s(n,e){return(s=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&s(n,e)}(d,n);var e,t,a,c,f,p=(e=d,t=u(),function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function d(){return r(this,d),p.apply(this,arguments)}return a=d,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n          <footer>\n        <div class="footer-content">\n            <p>&copy; 2021. Made by Muara Terma</p>\n        </div>\n    </footer>\n    '}}])&&i(a.prototype,c),f&&i(a,f),d}(a(HTMLElement));customElements.define("footer-container",f)},function(n,e,t){"use strict";t.r(e);t(1);var r=t.p+"image/covid.png",i=t.p+"image/jaga-jarak.png",o=t.p+"image/masker.png",a=t.p+"image/cuci-tangan.png";function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function l(n,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function f(n){var e="function"==typeof Map?new Map:void 0;return(f=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return p(n,arguments,v(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),h(r,n)})(n)}function p(n,e,t){return(p=d()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(n,r));return t&&h(i,t.prototype),i}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function h(n,e){return(h=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function v(n){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var y=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&h(n,e)}(g,n);var e,t,c,f,p,y=(e=g,t=d(),function(){var n,r=v(e);if(t){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)});function g(){return u(this,g),y.apply(this,arguments)}return c=g,(f=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n          <div class="header-container">\n            <div class="covid-explain">\n                <h1>\n                    Covid-19\n                </h1>\n\n                <hr>\n                <div class="covid-explain-image">\n                    <div class="covid-image-container">\n                        <div class="covid-image">\n                            <img src="'.concat(r,'" alt="">\n                        </div>\n                        <div class="covid-box-container">\n                            <div class="box-ornament">\n                                <div class="box"></div>\n                                <div class="box"></div>\n                                <div class="box"></div>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n\n                <p>\n                    COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Virus\n                    baru\n                    dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan\n                    Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh\n                    dunia.\n                </p>\n                <div class="button-container">\n                    <a href="https://covid19.go.id/tanya-jawab?page=4" target="_blank">\n                        selengkapnya\n                    </a>\n                </div>\n\n            </div>\n            <div class="covid-frame-image">\n                <div class="covid-image-container">\n                    <div class="covid-image">\n                        <img src="./image/covid.png" alt="">\n                    </div>\n                    <div class="covid-box-container">\n                        <div class="box-ornament">\n                            <div class="box"></div>\n                            <div class="box"></div>\n                            <div class="box"></div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class="suggestion-container">\n                <h1>Disiplin 3M</h1>\n                <hr>\n                <div class="suggestion-point">\n                    <div class="suggestion-icon">\n                        <img src="').concat(o,'" alt="">\n                    </div>\n                    <h3>Memakai Masker</h3>\n                </div>\n                <div class="suggestion-point">\n                    <div class="suggestion-icon">\n                        <img src="').concat(a,'" alt="">\n                    </div>\n                    <h3>Mencuci Tangan\n                        dengan sabun</h3>\n                </div>\n                <div class="suggestion-point">\n                    <div class="suggestion-icon">\n                        <img src="').concat(i,'" alt="">\n                    </div>\n                    <h3>Menjaga Jarak dan\n                        Menghindari Kerumunan</h3>\n                </div>\n            </div>\n        </div>\n\n        <hr>\n    ')}}])&&s(c.prototype,f),p&&s(c,p),g}(f(HTMLElement));customElements.define("header-container",y);var g=t.p+"image/logo.png";function b(n){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function m(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function w(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function x(n,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function j(n){var e="function"==typeof Map?new Map:void 0;return(j=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return O(n,arguments,_(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),S(r,n)})(n)}function O(n,e,t){return(O=k()?Reflect.construct:function(n,e,t){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(n,r));return t&&S(i,t.prototype),i}).apply(null,arguments)}function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function S(n,e){return(S=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function _(n){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var M=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&S(n,e)}(c,n);var e,t,r,i,o,a=(e=c,t=k(),function(){var n,r=_(e);if(t){var i=_(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return x(this,n)});function c(){return m(this,c),a.apply(this,arguments)}return r=c,(i=[{key:"indonesiaItem",set:function(n){this._indonesiaItem=n,this.render()}},{key:"render",value:function(){var n=new Date(this._indonesiaItem.lastUpdate);this.innerHTML='\n   <nav>\n            <div class="navbar-title">\n                <div class="header-logo">\n                    <img src="'.concat(g,'" class="logo-image">\n                </div>\n                <h1 class="header-title">Covidition</h1>\n\n            </div>\n            <div class="navbar-date">\n                <p> ').concat(n.getDate()," ").concat(["Januari","Februari","Maret","Aprl","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][n.getMonth()]," ").concat(n.getFullYear(),".</p>\n            </div>\n        </nav>\n        <hr>\n")}}])&&w(r.prototype,i),o&&w(r,o),c}(j(HTMLElement));customElements.define("navbar-container",M);t(4),t(5),t(6);(function(){var n="https://covid19.mathdro.id/api/countries/Indonesia/",e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Periksa Koneksi anda kembali";alert(n)};fetch(n).then((function(n){return n.json()})).then((function(n){document.querySelector("indonesia-report").indonesiaItem=n})).catch((function(){return e()})),fetch(n).then((function(n){return n.json()})).then((function(n){document.querySelector("navbar-container").indonesiaItem=n})).catch((function(){return e()})),fetch("https://covid19.mathdro.id/api").then((function(n){return n.json()})).then((function(n){document.querySelector("global-report").globalItem=n})).catch((function(){return e()}))})()}]);