!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.spruce=t()}(this,function(){var e=function(e){return null==e},t=function(e){return Object.getPrototypeOf(e)===Object.prototype},r=function(n,i){return Object.entries(n).forEach(function(s){var o=s[0],u=s[1];e(u)||!t(u)&&!Array.isArray(u)||(n[o]=r(u,i))}),new Proxy(n,{set:function(n,s,o){return!e(o)&&t(o)&&(o=r(o,i)),i.set(n,s,n[s]=o),!0}})},n={stores:{},persisted:[],subscribers:[],disableReactivity:!1,start:function(){try{var e=this;return Promise.resolve(new Promise(function(e){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e):e()})).then(function(){e.attach(),e.stores=r(e.stores,{set:function(){e.disableReactivity||(e.updateSubscribers(),e.disableReactivity=!0,e.persisted.forEach(e.updateLocalStorage.bind(e)),e.disableReactivity=!1)}})})}catch(e){return Promise.reject(e)}},attach:function(){if(!window.Alpine)throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");var e=this;window.Alpine.addMagicProperty("store",function(t){return e.subscribe(t),e.stores})},store:function(e,t,r){var n;return void 0===r&&(r=!1),r&&(this.stores[e]=this.retrieveFromLocalStorage(e,(n={},Object.entries(t).filter(function(e){return"function"==typeof e[1]}).forEach(function(e){return n[e[0]]=e[1]}),n)),this.persisted.includes(e)||this.persisted.push(e)),this.stores[e]||(this.stores[e]=t),this.stores[e]},reset:function(e,t){this.stores[e]=t},subscribe:function(e){return this.subscribers.includes(e)||this.subscribers.push(e),this.stores},updateSubscribers:function(){this.subscribers.filter(function(e){return!!e.__x}).forEach(function(e){e.__x.updateElements(e)})},retrieveFromLocalStorage:function(e,t){void 0===t&&(t={});var r=JSON.parse(window.localStorage.getItem("__spruce:"+e));return r?Object.assign(t,r):null},updateLocalStorage:function(e){window.localStorage.setItem("__spruce:"+e,JSON.stringify(this.store(e)))}},i=window.deferLoadingAlpine||function(e){e()};return window.deferLoadingAlpine=function(e){window.Spruce=n,window.Spruce.start(),i(e)},n});
//# sourceMappingURL=spruce.umd.js.map
