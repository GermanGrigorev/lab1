(this.webpackJsonplab1_react=this.webpackJsonplab1_react||[]).push([[0],[function(t,e,r){t.exports=r(5)},function(t,e,r){t.exports=r(6)},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(k){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),c=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===l)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function c(){return new e((function(n,c){!function n(o,a,c,i){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,i)}),(function(t){n("throw",t,c,i)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,i)}))}i(u.arg)}(o,a,n,c)}))}return n=n?n.then(c,c):c()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=m.constructor=p,p.constructor=h,h.displayName=i(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[a]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),i(m,c,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(i&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4);var n=r(0),o=r.n(n);function a(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function i(t){a(c,n,o,i,u,"next",t)}function u(t){a(c,n,o,i,u,"throw",t)}i(void 0)}))}}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u="current",s="saved";function l(t){return"https://openweathermap.org/img/wn/".concat(t,"@2x.png")}var f,h=(i(f={},u,"Current"),i(f,s,"SavedCity"),f),p=function(t){var e=t.weather,r=t.type,n=void 0===r?s:r,o=t.onButtonClick,a=h[n],c=document.getElementById("".concat(a,"Template")),i=document.importNode(c.content,!0),f=i.querySelector(".".concat(a,"-Title")),p=i.querySelector(".".concat(a,"-WeatherIcon")),d=i.querySelector(".".concat(a,"-Temperature"));f.textContent=e.name,p.setAttribute("src",l(e.weather[0].icon)),p.setAttribute("alt",l(e.weather[0].main)),d.textContent="".concat(e.main.temp," \xb0C");var v=i.querySelector(".".concat(a,"-Button"));return v&&v.addEventListener("click",(function(){o(e.name)})),i.querySelector(".".concat(a)).append(function(t){var e=t.weather,r=t.className,n="WeatherDetailsTemplate",o=document.getElementById("".concat(n)),a=document.importNode(o.content,!0),c=a.querySelector(".".concat(n,"-Wind")),i=a.querySelector(".".concat(n,"-Clouds")),u=a.querySelector(".".concat(n,"-Pressure")),s=a.querySelector(".".concat(n,"-Humidity")),l=a.querySelector(".".concat(n,"-Coordinates"));return c.textContent="".concat(e.wind.speed," m/s"),i.textContent="".concat(e.clouds.all," %"),u.textContent="".concat(e.main.pressure," hpa"),s.textContent="".concat(e.main.humidity," %"),l.textContent="[".concat(e.coord.lat,", ").concat(e.coord.lon,"]"),a.querySelector(".WeatherDetails").classList.add(r),a}({weather:e,className:u&&"Current-Details"})),i},d=0,v=function(t){var e=document.getElementById("loader");t?d++:d=d&&d-1,0===d&&e.classList.add("Loader_hidden"),1===d&&e.classList.remove("Loader_hidden")};function y(t){return"".concat("http://api.openweathermap.org/data/2.5/").concat(t,"&appid=").concat("4f9daa6adb52684f45d6a42b2a313564","&units=metric&lang=ru")}var m=function(t){return c(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y("weather?q=".concat(t)));case 2:return r=e.sent,e.abrupt("return",r.json());case 4:case"end":return e.stop()}}),e)})))()},g=function(t){return c(o.a.mark((function e(){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.latitude,n=t.longitude,e.next=3,fetch(y("weather?lat=".concat(r,"&lon=").concat(n)));case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})))()},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Something went wrong",e=document.getElementById("error");e.textContent=t,e.classList.remove("Error_hidden"),setTimeout((function(){return e.classList.add("Error_hidden")}),3e3)},x=function(){var t=c(o.a.mark((function t(){var e,r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m("Venice");case 2:e=t.sent,r=p({weather:e,type:u}),n=document.getElementById("container"),(a=n.querySelector(".Current"))&&a.remove(),n.prepend(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=c(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,v(!0),!navigator.geolocation){t.next=7;break}return t.next=5,navigator.geolocation.getCurrentPosition(function(){var t=c(o.a.mark((function t(e){var r,n,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e.coords);case 2:r=t.sent,n=p({weather:r,type:u}),a=document.getElementById("container"),(c=a.querySelector(".Current"))&&c.remove(),a.prepend(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x);case 5:t.next=9;break;case 7:return t.next=9,x();case 9:setTimeout((function(){return v(!1)}),1e3),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),v(!1),w();case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}(),b=function(t){localStorage.setItem("LOCAL_STORAGE_SELECTED_CITIES_KEY",JSON.stringify(t))},L=function(){return JSON.parse(localStorage.getItem("LOCAL_STORAGE_SELECTED_CITIES_KEY"))},S=function(){var t=c(o.a.mark((function t(e){var r,n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(r=L()||[]).includes(e)&&(b(r.filter((function(t){return t!==e}))),n=document.getElementById("SelectedList"),a=n.querySelectorAll(".SavedCity"),console.log(a.values()),Object.values(a).find((function(t){return t.querySelector(".SavedCity-Title").textContent===e})).remove());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=c(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),e=L()||[],(r=document.getElementById("SelectedList")).querySelectorAll(".SavedCity").forEach((function(t){return t.remove()})),t.next=7,e.forEach(function(){var t=c(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(e);case 2:n=t.sent,r.append(p({weather:n,onButtonClick:S}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 7:v(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),v(!1),w();case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(){var t=c(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((r=L()||[]).includes(e)){t.next=6;break}return t.next=4,m(e);case 4:(n=t.sent).name&&!r.includes(n.name)&&(b([].concat(_(r),[n.name])),document.getElementById("SelectedList").append(p({weather:n,onButtonClick:S})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e;t.preventDefault(),(null===t||void 0===t||null===(e=t.target[0])||void 0===e?void 0:e.value)&&(I(t.target[0].value),t.target[0].value="")},j=function(){var t=c(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:return t.next=4,C();case 4:document.getElementById("changeLocationButton").addEventListener("click",E),document.getElementById("addNewCityForm").addEventListener("submit",O);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();window.addEventListener("load",j)}],[[1,1]]]);
//# sourceMappingURL=main.0414d86e.chunk.js.map