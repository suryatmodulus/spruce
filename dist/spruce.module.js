var t=function(t){return null==t},e=function(t){return Object.getPrototypeOf(t)===Object.prototype},r=function(n,i){return Object.entries(n).forEach(function(o){var s=o[0],u=o[1];t(u)||!e(u)&&!Array.isArray(u)||(n[s]=r(u,i))}),new Proxy(n,{set:function(n,o,s){return!t(s)&&e(s)&&(s=r(s,i)),i.set(n,o,n[o]=s),!0}})};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n,i=(function(t,e){t.exports=function(){var t=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function e(t){var e,r=t.replace(/^v/,"").replace(/\+.*$/,""),n=-1===(e=r).indexOf("-")?e.length:e.indexOf("-"),i=r.substring(0,n).split(".");return i.push(r.substring(n+1)),i}function r(t){return isNaN(Number(t))?t:Number(t)}function n(e){if("string"!=typeof e)throw new TypeError("Invalid argument expected string");if(!t.test(e))throw new Error("Invalid argument not valid semver ('"+e+"' received)")}function i(t,i){[t,i].forEach(n);for(var o=e(t),s=e(i),u=0;u<Math.max(o.length-1,s.length-1);u++){var a=parseInt(o[u]||0,10),c=parseInt(s[u]||0,10);if(a>c)return 1;if(c>a)return-1}var f=o[o.length-1],d=s[s.length-1];if(f&&d){var p=f.split(".").map(r),h=d.split(".").map(r);for(u=0;u<Math.max(p.length,h.length);u++){if(void 0===p[u]||"string"==typeof h[u]&&"number"==typeof p[u])return-1;if(void 0===h[u]||"string"==typeof p[u]&&"number"==typeof h[u])return 1;if(p[u]>h[u])return 1;if(h[u]>p[u])return-1}}else if(f||d)return f?-1:1;return 0}var o=[">",">=","=","<","<="],s={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1]};return i.validate=function(e){return"string"==typeof e&&t.test(e)},i.compare=function(t,e,r){!function(t){if("string"!=typeof t)throw new TypeError("Invalid operator type, expected string but got "+typeof t);if(-1===o.indexOf(t))throw new TypeError("Invalid operator, expected one of "+o.join("|"))}(r);var n=i(t,e);return s[r].indexOf(n)>-1},i}()}(n={exports:{}}),n.exports),o={stores:{},persisted:[],subscribers:[],watchers:{},disableReactivity:!1,start:function(){try{var t=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){t.attach(),t.stores=r(t.stores,{set:function(e,r,n){if(!t.disableReactivity){t.updateSubscribers(),t.runWatchers(t.stores,e,r,n),t.disableReactivity=!0;try{t.persisted.forEach(t.updateLocalStorage.bind(t))}catch(t){}t.disableReactivity=!1}}})})}catch(t){return Promise.reject(t)}},attach:function(){if(!window.Alpine||!i.compare(window.Alpine.version,"2.7.0",">="))throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");var t=this;window.Alpine.addMagicProperty("store",function(e){return t.subscribe(e),t.stores})},store:function(t,e,r){if(void 0===r&&(r=!1),r)try{this.stores[t]=this.retrieveFromLocalStorage(t,(n={},Object.entries(e).filter(function(t){return"function"==typeof t[1]}).forEach(function(t){return n[t[0]]=t[1]}),n)),this.persisted.includes(t)||this.persisted.push(t)}catch(t){}var n;return this.stores[t]||(this.stores[t]=e),this.stores[t]},reset:function(t,e){this.stores[t]=e},subscribe:function(t){return this.subscribers.includes(t)||this.subscribers.push(t),this.stores},updateSubscribers:function(){this.subscribers.filter(function(t){return!!t.__x}).forEach(function(t){t.__x.updateElements(t)})},retrieveFromLocalStorage:function(t,e){void 0===e&&(e={});var r=JSON.parse(window.localStorage.getItem("__spruce:"+t));return r?Object.assign(e,r):null},updateLocalStorage:function(t){window.localStorage.setItem("__spruce:"+t,JSON.stringify(this.store(t)))},watch:function(t,e){this.watchers[t]||(this.watchers[t]=[]),this.watchers[t].push(e)},runWatchers:function(t,e,r,n){var i=this;if(i.watchers[r])return i.watchers[r].forEach(function(t){return t(n)});Object.keys(i.watchers).filter(function(t){return t.includes(".")}).forEach(function(o){var s=o.split(".");r===s[s.length-1]&&s.reduce(function(t,s){return(t[r]===e[r]||Object.is(e,t))&&i.watchers[o].forEach(function(t){return t(n)}),t[s]},t)})}},s=window.deferLoadingAlpine||function(t){t()};window.deferLoadingAlpine=function(t){window.Spruce=o,window.Spruce.start(),s(t)};export default o;
//# sourceMappingURL=spruce.module.js.map
