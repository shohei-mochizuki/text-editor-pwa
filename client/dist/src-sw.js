(()=>{var e,t,s,r={895:()=>{"use strict";try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},125:(e,t,s)=>{"use strict";s.d(t,{V:()=>r}),s(913);class r extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}},524:(e,t,s)=>{"use strict";s(125),s(913)},536:(e,t,s)=>{"use strict";s.d(t,{x:()=>n}),s(913);const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),n={updateDetails:e=>{(e=>{for(const t of Object.keys(r))e(t)})((t=>{"string"==typeof e[t]&&(r[t]=e[t])}))},getGoogleAnalyticsName:e=>e||a(r.googleAnalytics),getPrecacheName:e=>e||a(r.precache),getPrefix:()=>r.prefix,getRuntimeName:e=>e||a(r.runtime),getSuffix:()=>r.suffix}},119:(e,t,s)=>{"use strict";s.d(t,{C:()=>r}),s(913);const r=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},120:(e,t,s)=>{"use strict";s.d(t,{k:()=>r}),s(913);const r=null},902:(e,t,s)=>{"use strict";function r(e){return new Promise((t=>setTimeout(t,e)))}s.d(t,{V:()=>r}),s(913)},913:()=>{"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},344:(e,t,s)=>{"use strict";s.r(t),s.d(t,{precacheAndRoute:()=>_});var r=s(917),a=(s(524),s(536)),n=(s(120),s(125));function i(e,t){const s=t();return e.waitUntil(s),s}s(913),s(977);const c="__WB_REVISION__";function o(e){if(!e)throw new n.V("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n.V("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const r=new URL(s,location.href),a=new URL(s,location.href);return r.searchParams.set(c,t),{cacheKey:r.href,url:a.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;s(119);var d=s(951);class f extends d._{constructor(e={}){e.cacheName=a.x.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(f.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const r=t.params||{};if(!this._fallbackToNetwork)throw new n.V("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const a=r.integrity,n=e.integrity,i=!n||n===a;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?n||a:void 0})),a&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n.V("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,r]of this.plugins.entries())r!==f.copyRedirectedCacheableResponsesPlugin&&(r===f.defaultPrecacheCacheabilityPlugin&&(e=s),r.cacheWillUpdate&&t++);0===t?this.plugins.push(f.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}f.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},f.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new n.V("cross-origin-copy-response",{origin:s});const r=e.clone(),a={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=t?t(a):a,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?r.body:await r.blob();return new Response(c,i)}(e):e};class p{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new f({cacheName:a.x.getPrecacheName(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:r}=o(s),a="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(r)&&this._urlsToCacheKeys.get(r)!==e)throw new n.V("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(r),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n.V("add-to-cache-list-conflicting-integrities",{url:r});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(r,e),this._urlsToCacheModes.set(r,a),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return i(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),n=new Request(t,{integrity:r,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:r}=t;return{updatedURLs:s,notUpdatedURLs:r}}))}activate(e){return i(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),r=[];for(const a of t)s.has(a.url)||(await e.delete(a),r.push(a.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n.V("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let g;const w=()=>(g||(g=new p),g);var y=s(188);class m extends y.A{constructor(e,t){super((({request:s})=>{const r=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:r=!0,urlManipulation:a}={}){const n=new URL(e,location.href);n.hash="",yield n.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(n,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:n});for(const t of e)yield t.href}}(s.url,t)){const t=r.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function _(e,t){!function(e){w().precache(e)}(e),function(e){const t=w(),s=new m(t,e);(0,r.X)(s)}(t)}},989:(e,t,s)=>{"use strict";s.d(t,{t:()=>a}),s(524),s(120);var r=s(188);s(80);class a extends r.A{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}},188:(e,t,s)=>{"use strict";s.d(t,{A:()=>n}),s(524);var r=s(505),a=s(179);s(80);class n{constructor(e,t,s=r.g){this.handler=(0,a.M)(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=(0,a.M)(e)}}},491:(e,t,s)=>{"use strict";s.d(t,{F:()=>i}),s(524),s(119);var r=s(505),a=(s(120),s(179)),n=s(125);s(80);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const r=s.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:s});let i=n&&n.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=n&&n.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async r=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(r=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw r}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:r}){const a=this._routes.get(s.method)||[];for(const n of a){let a;const i=n.match({url:e,sameOrigin:t,request:s,event:r});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:n,params:a}}return{}}setDefaultHandler(e,t=r.g){this._defaultHandlerMap.set(t,(0,a.M)(e))}setCatchHandler(e){this._catchHandler=(0,a.M)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new n.V("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new n.V("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},80:()=>{"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},917:(e,t,s)=>{"use strict";s.d(t,{X:()=>c}),s(120);var r=s(125),a=s(188),n=s(989),i=s(486);function c(e,t,s){let c;if("string"==typeof e){const r=new URL(e,location.href),n=({url:e})=>e.href===r.href;c=new a.A(n,t,s)}else if(e instanceof RegExp)c=new n.t(e,t,s);else if("function"==typeof e)c=new a.A(e,t,s);else{if(!(e instanceof a.A))throw new r.V("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}return(0,i.u)().registerRoute(c),c}s(80)},505:(e,t,s)=>{"use strict";s.d(t,{g:()=>r}),s(80);const r="GET"},486:(e,t,s)=>{"use strict";s.d(t,{u:()=>n});var r=s(491);let a;s(80);const n=()=>(a||(a=new r.F,a.addFetchListener(),a.addCacheListener()),a)},179:(e,t,s)=>{"use strict";s.d(t,{M:()=>r}),s(524),s(80);const r=e=>e&&"object"==typeof e?e:{handle:e}},951:(e,t,s)=>{"use strict";s.d(t,{_:()=>i});var r=s(536),a=s(125),n=(s(120),s(119),s(54));s(873);class i{constructor(e={}){this.cacheName=r.x.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,a=new n.G(this,{event:t,request:s,params:r}),i=this._getResponse(a,s,t);return[i,this._awaitComplete(i,a,s,t)]}async _getResponse(e,t,s){let r;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new a.V("no-response",{url:t.url})}catch(a){if(a instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(r=await n({error:a,event:s,request:t}),r)break;if(!r)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))r=await a({event:s,request:t,response:r});return r}async _awaitComplete(e,t,s,r){let a,n;try{a=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(n=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:s,response:a,error:n}),t.destroy(),n)throw n}}},54:(e,t,s)=>{"use strict";function r(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}s.d(t,{G:()=>l}),s(524),s(913);class a{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}s(120);const n=new Set;var i=s(119),c=s(902),o=s(125);function h(e){return"string"==typeof e?new Request(e):e}s(873);class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new a,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=h(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new o.V("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:r,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:r});s=await caches.match(n,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:r,matchOptions:a,cachedResponse:s,request:n,event:this.event})||void 0;return s}async cachePut(e,t){const s=h(e);await(0,c.V)(0);const a=await this.getCacheKey(s,"write");if(!t)throw new o.V("cache-put-with-no-response",{url:(0,i.C)(a.url)});const l=await this._ensureResponseSafeToCache(t);if(!l)return!1;const{cacheName:u,matchOptions:d}=this._strategy,f=await self.caches.open(u),p=this.hasCallback("cacheDidUpdate"),g=p?await async function(e,t,s,a){const n=r(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),c=await e.keys(t,i);for(const t of c)if(n===r(t.url,s))return e.match(t,a)}(f,a.clone(),["__WB_REVISION__"],d):null;try{await f.put(a,p?l.clone():l)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of n)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:l.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=h(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[s]=r}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),r=r=>{const a=Object.assign(Object.assign({},r),{state:s});return t[e](a)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}},873:()=>{"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}},308:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheableResponse:()=>r,CacheableResponsePlugin:()=>a}),s(524),s(125),s(119),s(120),s(895);class r{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}class a{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new r(e)}}},89:(e,t,s)=>{"use strict";s.r(t),s.d(t,{NavigationRoute:()=>a,RegExpRoute:()=>n.t,Route:()=>r.A,Router:()=>c.F,registerRoute:()=>i.X,setCatchHandler:()=>h,setDefaultHandler:()=>l}),s(524),s(120);var r=s(188);s(80);class a extends r.A{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}var n=s(989),i=s(917),c=s(491),o=s(486);function h(e){(0,o.u)().setCatchHandler(e)}function l(e){(0,o.u)().setDefaultHandler(e)}},362:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheFirst:()=>n,CacheOnly:()=>i,NetworkFirst:()=>o,NetworkOnly:()=>l,StaleWhileRevalidate:()=>u,Strategy:()=>a._,StrategyHandler:()=>d.G}),s(524),s(120);var r=s(125),a=s(951);s(119),s(873);class n extends a._{async _handle(e,t){let s,a=await t.cacheMatch(e);if(a);else try{a=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new r.V("no-response",{url:e.url,error:s});return a}}class i extends a._{async _handle(e,t){const s=await t.cacheMatch(e);if(!s)throw new r.V("no-response",{url:e.url});return s}}const c={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class o extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(c),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],a=[];let n;if(this._networkTimeoutSeconds){const{id:r,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});n=r,a.push(i)}const i=this._getNetworkPromise({timeoutId:n,request:e,logs:s,handler:t});a.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(a))||await i)());if(!c)throw new r.V("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let r;return{promise:new Promise((t=>{r=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:r}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:r}){let a,n;try{n=await r.fetchAndCachePut(t)}catch(e){e instanceof Error&&(a=e)}return e&&clearTimeout(e),!a&&n||(n=await r.cacheMatch(t)),n}}var h=s(902);class l extends a._{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{const s=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=(0,h.V)(1e3*this._networkTimeoutSeconds);s.push(e)}if(a=await Promise.race(s),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new r.V("no-response",{url:e.url,error:s});return a}}class u extends a._{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(c)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let a,n=await t.cacheMatch(e);if(n);else try{n=await s}catch(e){e instanceof Error&&(a=e)}if(!n)throw new r.V("no-response",{url:e.url,error:a});return n}}var d=s(54)}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var s=a[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=n(362).StaleWhileRevalidate,t=n(89).registerRoute,s=n(308).CacheableResponsePlugin,(0,n(344).precacheAndRoute)([{'revision':'1bbea954b4ec872a86ccae3ccc0be9c6','url':'editor.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'editor.bundle.js.LICENSE.txt'},{'revision':'dba700cf8436c849570900c17929e9ee','url':'index.html'},{'revision':'1dfa84824b530b3687f70520b9636b1b','url':'install.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'install.bundle.js.LICENSE.txt'},{'revision':'0428cf3da12f2016bff149d3dfbe0580','url':'main.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'main.bundle.js.LICENSE.txt'}]),t((function(e){var t=e.request;return["style","script","worker"].includes(t.destination)}),new e({cacheName:"asset-cache",plugins:[new s({statuses:[0,200]})]}))})();