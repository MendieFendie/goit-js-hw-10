var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,a=f||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return a.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=i.test(t);return f||r.test(t)?u(t.slice(2),f?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,b=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||b&&t-a>=r}function T(){var t=p();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return b?d(n,r-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=p(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(b)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=y(e)||0,v(n)&&(l=!!n.leading,r=(b="maxWait"in n)?s(y(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},O.flush=function(){return void 0===f?u:w(p())},O};document.querySelector("country-list"),document.querySelector("country-info");document.querySelector("input").addEventListener("input",e((function(t){b=t.target.value,console.log(b),e=b,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flag,languages`).then((t=>t.json())).then(m).catch((t=>console.log(t)));var e}),300));let b="";function m(t){console.dir(t)}
//# sourceMappingURL=index.fe651ad8.js.map
