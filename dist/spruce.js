function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var n=function(t){return null==t},r=function(t){return Object.getPrototypeOf(t)===Object.prototype},s=function(t,e){return Object.entries(t).forEach(function(i){var o=i[0],c=i[1];n(c)||!r(c)&&!Array.isArray(c)||(t[o]=s(c,e))}),new Proxy(t,{set:function(t,i,o){return!n(o)&&r(o)&&(o=s(o,e)),e.set(t,i,t[i]=o),!0}})},i={events:{watchers:{},events:{},on:function(t,e,n){var r=this;return void 0===n&&(n=!1),this.events[t]||(this.events[t]=[]),this.events[t].push({callback:e,once:n}),function(){return r.off(t,e)}},once:function(t,e){this.on(t,e,!0)},off:function(t,e){this.events[t]=this.events[t].filter(function(t){return t.callback!==e&&!0!==t.once})},emit:function(t,e){var n=this;void 0===e&&(e={}),(this.events[t]||[]).forEach(function(r){r.callback(e),r.once&&n.off(t,r)}),window.dispatchEvent(new CustomEvent("spruce:"+t,{detail:e,bubbles:!0}))},watch:function(t,e){this.watchers[t]||(this.watchers[t]=[]),this.watchers[t].push(e)},runWatchers:function(t,e,n,r){var s=this;if(s.watchers[n])return s.watchers[n].forEach(function(t){return t(r)});Object.keys(s.watchers).filter(function(t){return t.includes(".")}).forEach(function(i){var o=i.split(".");n===o[o.length-1]&&o.reduce(function(t,o){return(t[n]===e[n]||Object.is(e,t))&&s.watchers[i].forEach(function(t){return t(r)}),t[o]},t)})}},stores:{},subscribers:[],start:function(){try{var t=this;return Promise.resolve(new Promise(function(t){"loading"==document.readyState?document.addEventListener("DOMContentLoaded",t):t()})).then(function(){t.emit("init"),t.attach(),t.stores=s(t.stores,{set:function(e,n,r){t.events.runWatchers(t.stores,e,n,r),t.updateSubscribers()}})})}catch(t){return Promise.reject(t)}},attach:function(){if(!window.Alpine)throw new Error("[Spruce] You must be using Alpine >= 2.5.0 to use Spruce.");var t=this;window.Alpine.addMagicProperty("store",function(e){return t.subscribe(e),t.stores})},store:function(t,e){return this.stores[t]||(this.stores[t]=e),this.stores[t]},reset:function(t,e){this.stores[t]=e},subscribe:function(t){return this.subscribers.includes(t)||this.subscribers.push(t),this.stores},updateSubscribers:function(){this.subscribers.filter(function(t){return!!t.__x}).forEach(function(t){t.__x.updateElements(t)})},on:function(t,e){return this.events.on(t,e)},once:function(t,e){return this.events.once(t,e)},off:function(t,e){this.events.off(t,e)},emit:function(n,r){void 0===r&&(r={}),this.events.emit(n,function(n){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?e(Object(s),!0).forEach(function(e){t(n,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):e(Object(s)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(s,t))})}return n}({},r,{store:this.stores}))},watch:function(t,e){this.events.watch(t,e)}},o=window.deferLoadingAlpine||function(t){t()};window.deferLoadingAlpine=function(t){window.Spruce=i,window.Spruce.start(),o(t)},module.exports=i;
//# sourceMappingURL=spruce.js.map
