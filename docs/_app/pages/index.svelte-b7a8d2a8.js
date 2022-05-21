var nt=Object.defineProperty;var Ee=Object.getOwnPropertySymbols;var rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var Se=(r,t,e)=>t in r?nt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,ke=(r,t)=>{for(var e in t||(t={}))rt.call(t,e)&&Se(r,e,t[e]);if(Ee)for(var e of Ee(t))it.call(t,e)&&Se(r,e,t[e]);return r};import{S as Q,i as Z,s as ee,e as C,c as L,a as P,d as w,b as $,g as O,E as H,M as Ue,v as te,N as ot,L as F,O as st,P as lt,F as fe,k as j,m as M,G as A,I as he,J as de,K as pe,q as I,o as N,w as ne,x as re,y as ie,B as oe,Q as Re,R as ze,l as Ae,t as J,h as K,H as $e,T as at,n as qe,p as Ye,j as Je}from"../chunks/index-e0ffeeb0.js";import{_ as ut}from"../chunks/preload-helper-bf8d5124.js";import{T as ct}from"../chunks/theme-1653d4cb.js";import"../chunks/index-6c347e89.js";function ft(){return new Worker("/grammar-well-editor/_app/assets/compiler.7a863987.js",{type:"module"})}var ve=function(r,t){return ve=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])},ve(r,t)};function D(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ve(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function ge(r){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function V(r,t){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(s)throw s.error}}return o}function U(r,t,e){if(e||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return r.concat(o||Array.prototype.slice.call(t))}function W(r){return typeof r=="function"}function Ke(r){var t=function(n){Error.call(n),n.stack=new Error().stack},e=r(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var _e=Ke(function(r){return function(e){r(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function G(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var R=function(){function r(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var t,e,n,i,o;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=ge(s),u=a.next();!u.done;u=a.next()){var c=u.value;c.remove(this)}}catch(m){t={error:m}}finally{try{u&&!u.done&&(e=a.return)&&e.call(a)}finally{if(t)throw t.error}}else s.remove(this);var p=this.initialTeardown;if(W(p))try{p()}catch(m){o=m instanceof _e?m.errors:[m]}var x=this._finalizers;if(x){this._finalizers=null;try{for(var _=ge(x),b=_.next();!b.done;b=_.next()){var y=b.value;try{Pe(y)}catch(m){o=o!=null?o:[],m instanceof _e?o=U(U([],V(o)),V(m.errors)):o.push(m)}}}catch(m){n={error:m}}finally{try{b&&!b.done&&(i=_.return)&&i.call(_)}finally{if(n)throw n.error}}}if(o)throw new _e(o)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)Pe(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},r.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},r.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},r.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&G(e,t)},r.prototype.remove=function(t){var e=this._finalizers;e&&G(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=function(){var t=new r;return t.closed=!0,t}(),r}(),Ge=R.EMPTY;function Xe(r){return r instanceof R||r&&"closed"in r&&W(r.remove)&&W(r.add)&&W(r.unsubscribe)}function Pe(r){W(r)?r():r.unsubscribe()}var we={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},be={setTimeout:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var i=be.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,U([r,t],V(e))):setTimeout.apply(void 0,U([r,t],V(e)))},clearTimeout:function(r){var t=be.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function ht(r){be.setTimeout(function(){throw r})}function Ce(){}var z=null;function Y(r){if(we.useDeprecatedSynchronousErrorHandling){var t=!z;if(t&&(z={errorThrown:!1,error:null}),r(),t){var e=z,n=e.errorThrown,i=e.error;if(z=null,n)throw i}}else r()}var Te=function(r){D(t,r);function t(e){var n=r.call(this)||this;return n.isStopped=!1,e?(n.destination=e,Xe(e)&&e.add(n)):n.destination=mt,n}return t.create=function(e,n,i){return new ye(e,n,i)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(R),dt=Function.prototype.bind;function me(r,t){return dt.call(r,t)}var pt=function(){function r(t){this.partialObserver=t}return r.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(n){q(n)}},r.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(n){q(n)}else q(t)},r.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){q(e)}},r}(),ye=function(r){D(t,r);function t(e,n,i){var o=r.call(this)||this,s;if(W(e)||!e)s={next:e!=null?e:void 0,error:n!=null?n:void 0,complete:i!=null?i:void 0};else{var a;o&&we.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=function(){return o.unsubscribe()},s={next:e.next&&me(e.next,a),error:e.error&&me(e.error,a),complete:e.complete&&me(e.complete,a)}):s=e}return o.destination=new pt(s),o}return t}(Te);function q(r){ht(r)}function _t(r){throw r}var mt={closed:!0,next:Ce,error:_t,complete:Ce},vt=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function gt(r){return r}function bt(r){return r.length===0?gt:r.length===1?r[0]:function(e){return r.reduce(function(n,i){return i(n)},e)}}var Le=function(){function r(t){t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,n){var i=this,o=xt(t)?t:new ye(t,e,n);return Y(function(){var s=i,a=s.operator,u=s.source;o.add(a?a.call(o,u):u?i._subscribe(o):i._trySubscribe(o))}),o},r.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},r.prototype.forEach=function(t,e){var n=this;return e=Ie(e),new e(function(i,o){var s=new ye({next:function(a){try{t(a)}catch(u){o(u),s.unsubscribe()}},error:o,complete:i});n.subscribe(s)})},r.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},r.prototype[vt]=function(){return this},r.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return bt(t)(this)},r.prototype.toPromise=function(t){var e=this;return t=Ie(t),new t(function(n,i){var o;e.subscribe(function(s){return o=s},function(s){return i(s)},function(){return n(o)})})},r.create=function(t){return new r(t)},r}();function Ie(r){var t;return(t=r!=null?r:we.Promise)!==null&&t!==void 0?t:Promise}function yt(r){return r&&W(r.next)&&W(r.error)&&W(r.complete)}function xt(r){return r&&r instanceof Te||yt(r)&&Xe(r)}function wt(r){return W(r==null?void 0:r.lift)}function Tt(r){return function(t){if(wt(t))return t.lift(function(e){try{return r(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Et(r,t,e,n,i){return new St(r,t,e,n,i)}var St=function(r){D(t,r);function t(e,n,i,o,s,a){var u=r.call(this,e)||this;return u.onFinalize=s,u.shouldUnsubscribe=a,u._next=n?function(c){try{n(c)}catch(p){e.error(p)}}:r.prototype._next,u._error=o?function(c){try{o(c)}catch(p){e.error(p)}finally{this.unsubscribe()}}:r.prototype._error,u._complete=i?function(){try{i()}catch(c){e.error(c)}finally{this.unsubscribe()}}:r.prototype._complete,u}return t.prototype.unsubscribe=function(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;r.prototype.unsubscribe.call(this),!n&&((e=this.onFinalize)===null||e===void 0||e.call(this))}},t}(Te),kt=Ke(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Qe=function(r){D(t,r);function t(){var e=r.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var n=new Be(this,this);return n.operator=e,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new kt},t.prototype.next=function(e){var n=this;Y(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var s=ge(n.currentObservers),a=s.next();!a.done;a=s.next()){var u=a.value;u.next(e)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(i)throw i.error}}}})},t.prototype.error=function(e){var n=this;Y(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=e;for(var i=n.observers;i.length;)i.shift().error(e)}})},t.prototype.complete=function(){var e=this;Y(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var n=e.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var n=this,i=this,o=i.hasError,s=i.isStopped,a=i.observers;return o||s?Ge:(this.currentObservers=null,a.push(e),new R(function(){n.currentObservers=null,G(a,e)}))},t.prototype._checkFinalizedStatuses=function(e){var n=this,i=n.hasError,o=n.thrownError,s=n.isStopped;i?e.error(o):s&&e.complete()},t.prototype.asObservable=function(){var e=new Le;return e.source=this,e},t.create=function(e,n){return new Be(e,n)},t}(Le),Be=function(r){D(t,r);function t(e,n){var i=r.call(this)||this;return i.destination=e,i.source=n,i}return t.prototype.next=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,e)},t.prototype.error=function(e){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,e)},t.prototype.complete=function(){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||n===void 0||n.call(e)},t.prototype._subscribe=function(e){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(e))!==null&&i!==void 0?i:Ge},t}(Qe),Ze={now:function(){return(Ze.delegate||Date).now()},delegate:void 0},At=function(r){D(t,r);function t(e,n){return r.call(this)||this}return t.prototype.schedule=function(e,n){return this},t}(R),X={setInterval:function(r,t){for(var e=[],n=2;n<arguments.length;n++)e[n-2]=arguments[n];var i=X.delegate;return i!=null&&i.setInterval?i.setInterval.apply(i,U([r,t],V(e))):setInterval.apply(void 0,U([r,t],V(e)))},clearInterval:function(r){var t=X.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(r)},delegate:void 0},$t=function(r){D(t,r);function t(e,n){var i=r.call(this,e,n)||this;return i.scheduler=e,i.work=n,i.pending=!1,i}return t.prototype.schedule=function(e,n){if(n===void 0&&(n=0),this.closed)return this;this.state=e;var i=this.id,o=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(o,i,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(o,this.id,n),this},t.prototype.requestAsyncId=function(e,n,i){return i===void 0&&(i=0),X.setInterval(e.flush.bind(e,this),i)},t.prototype.recycleAsyncId=function(e,n,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return n;X.clearInterval(n)},t.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(e,n);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,n){var i=!1,o;try{this.work(e)}catch(s){i=!0,o=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o},t.prototype.unsubscribe=function(){if(!this.closed){var e=this,n=e.id,i=e.scheduler,o=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,G(o,this),n!=null&&(this.id=this.recycleAsyncId(i,n,null)),this.delay=null,r.prototype.unsubscribe.call(this)}},t}(At),Oe=function(){function r(t,e){e===void 0&&(e=r.now),this.schedulerActionCtor=t,this.now=e}return r.prototype.schedule=function(t,e,n){return e===void 0&&(e=0),new this.schedulerActionCtor(this,t).schedule(n,e)},r.now=Ze.now,r}(),Pt=function(r){D(t,r);function t(e,n){n===void 0&&(n=Oe.now);var i=r.call(this,e,n)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return t.prototype.flush=function(e){var n=this.actions;if(this._active){n.push(e);return}var i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=n.shift());if(this._active=!1,i){for(;e=n.shift();)e.unsubscribe();throw i}},t}(Oe),Ct=new Pt($t);function Lt(r,t){return t===void 0&&(t=Ct),Tt(function(e,n){var i=null,o=null,s=null,a=function(){if(i){i.unsubscribe(),i=null;var c=o;o=null,n.next(c)}};function u(){var c=s+r,p=t.now();if(p<c){i=this.schedule(void 0,c-p),n.add(i);return}a()}e.subscribe(Et(n,function(c){o=c,s=t.now(),i||(i=t.schedule(u,r),n.add(i))},function(){a(),n.complete()},void 0,function(){o=i=null}))})}function It(){return new Worker("/grammar-well-editor/_app/assets/ts.worker.ed6ddcea.js",{type:"module"})}function Bt(){return new Worker("/grammar-well-editor/_app/assets/html.worker.bc173ccb.js",{type:"module"})}function Ot(){return new Worker("/grammar-well-editor/_app/assets/css.worker.91d41de9.js",{type:"module"})}function Ft(){return new Worker("/grammar-well-editor/_app/assets/json.worker.3cda63d9.js",{type:"module"})}function Nt(){return new Worker("/grammar-well-editor/_app/assets/editor.worker.80af4d20.js",{type:"module"})}function Wt(r){let t;return{c(){t=C("div"),this.h()},l(e){t=L(e,"DIV",{class:!0}),P(t).forEach(w),this.h()},h(){$(t,"class","editor svelte-1ljxy4j")},m(e,n){O(e,t,n),r[13](t)},p:H,i:H,o:H,d(e){e&&w(t),r[13](null)}}}function jt(r,t,e){let{value:n=""}=t,{language:i="json"}=t,{minHeight:o=200}=t,{maxHeight:s=0}=t,{minWidth:a=600}=t,{maxWidth:u=0}=t,{theme:c="vs-dark"}=t,{width:p="fill"}=t,{height:x="fill"}=t,{settings:_={}}=t,b=null;const y=Ue();let m,v;ct.subscribe(l=>e(2,c=l=="light"?"vs-light":"vs-dark")),te(async()=>{e(12,v=await ut(()=>import("../chunks/editor.main-fd9f532c.js").then(function(d){return d.e}),["chunks/editor.main-fd9f532c.js","assets/editor.main-cdf3c9f2.css","chunks/preload-helper-bf8d5124.js"]));const l={nearley:{tokensProvider:{brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],symbols:/->|\||\:\+|\:\*/,operators:["|","->",":*",":+"],escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/\{\%/,{token:"tag ",next:"@scriptEnd",nextEmbedded:"text/javascript"}],[/\$\{/,{token:"tag ",next:"@interpolateEnd",nextEmbedded:"text/javascript"}],[/@\{\%/,{token:"tag ",next:"@scriptEnd",nextEmbedded:"text/javascript"}],[/@symbols/,{cases:{"@operators":"keyword","@default":"symbols"}}],[/\[/,"regexp","@regex"],[/"/,"string","@string"],[/[\(\)\[\]]/,"@brackets"]],scriptEnd:[[/\%\}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^%]+/,""]],interpolateEnd:[[/\}/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^%]+/,""]],whitespace:[[/[ \t\r\n]+/,"white"],[/\#.*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/(")([i]?)/,[{token:"string",next:"@pop"},{token:"keyword.other"}]]],regex:[[/[^\\\]]+/,"regexp"],[/@escapes/,"regexp.escape"],[/\\./,"regexp.escape.invalid"],[/]/,"regexp","@pop"]]}}},mySpecialLanguage:{tokensProvider:{tokenizer:{root:[{include:"@whitespace"},[/[\{\}\(\)\[\]]/,"@brackets"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\/\/.*$/,"comment"]]}},completionItemProvider:{provideCompletionItems:(d,g,T,k)=>{const f=d.getWordUntilPosition(g),B={startLineNumber:g.lineNumber,endLineNumber:g.lineNumber,startColumn:f.startColumn,endColumn:f.endColumn};return{suggestions:[{label:"simpleText",kind:v.languages.CompletionItemKind.Text,insertText:"simpleText",range:B},{label:"testing",kind:v.languages.CompletionItemKind.Keyword,insertText:"testing(${1:condition})",insertTextRules:v.languages.CompletionItemInsertTextRule.InsertAsSnippet,range:B},{label:"ifelse",kind:v.languages.CompletionItemKind.Snippet,insertText:["if (${1:condition}) {","	$0","} else {","	","}"].join(`
`),insertTextRules:v.languages.CompletionItemInsertTextRule.InsertAsSnippet,documentation:"If-Else Statement",range:B}]}}}}},h={myTHemes:{base:"vs",inherit:!1,rules:[{token:"custom-info",foreground:"808080"},{token:"custom-error",foreground:"ff0000",fontStyle:"bold"},{token:"custom-notice",foreground:"FFA500"},{token:"custom-date",foreground:"008800"}],colors:{"editor.foreground":"#000000"}}};for(const d in l){const{tokensProvider:g,completionItemProvider:T}=l[d];v.languages.register({id:d}),g&&v.languages.setMonarchTokensProvider(d,g),T&&v.languages.registerCompletionItemProvider(d,T)}for(const d in h)v.editor.defineTheme(d,h[d]);window.MonacoEnvironment={getWorker(d,g){return g==="json"?new Ft:g==="css"||g==="scss"||g==="less"?new Ot:g==="html"||g==="handlebars"||g==="razor"?new Bt:g==="typescript"||g==="javascript"?new It:new Nt}},e(11,m=v.editor.create(b,ke({value:n,language:i,theme:c,scrollBeyondLastLine:!1,automaticLayout:!0},_))),S(),m.getModel().onDidChangeContent(()=>{e(1,n=m.getValue()),S(),y("edit",n)}),y("load",{resize:S})}),ot(()=>{if(m){m.dispose();const l=m.getModel();l&&l.dispose()}});function S(){e(0,b.style.display="block",b),e(0,b.style.width="100%",b),e(0,b.style.height="100%",b);let l=b.offsetWidth,h=b.offsetHeight;p=="auto"&&(l=m.getContentWidth()),x=="auto"&&(h=m.getContentHeight());const d=Math.max(a,Math.min(u||l,l)),g=Math.max(o,Math.min(s||h,h));m.layout({width:d,height:g}),e(0,b.style.height=`${g}px`,b),e(0,b.style.width=`${d}px`,b)}function E(l){F[l?"unshift":"push"](()=>{b=l,e(0,b)})}return r.$$set=l=>{"value"in l&&e(1,n=l.value),"language"in l&&e(3,i=l.language),"minHeight"in l&&e(4,o=l.minHeight),"maxHeight"in l&&e(5,s=l.maxHeight),"minWidth"in l&&e(6,a=l.minWidth),"maxWidth"in l&&e(7,u=l.maxWidth),"theme"in l&&e(2,c=l.theme),"width"in l&&e(8,p=l.width),"height"in l&&e(9,x=l.height),"settings"in l&&e(10,_=l.settings)},r.$$.update=()=>{r.$$.dirty&6150&&(m&&n!=m.getValue()&&(m.setValue(n),S()),m&&v.editor.setTheme(c))},[b,n,c,i,o,s,a,u,p,x,_,m,v,E]}class et extends Q{constructor(t){super(),Z(this,t,jt,Wt,ee,{value:1,language:3,minHeight:4,maxHeight:5,minWidth:6,maxWidth:7,theme:2,width:8,height:9,settings:10})}}class Mt{constructor(t){this.element=t,this.textBoxes=[],this.lines=[],this.paths=[]}addText(t,e,n,i){const o=new Dt(this.element,t,e,n,i);return this.textBoxes.push(o),o}addLine(t,e,n,i){const o=new Ht(this.element,t,e,n,i);return this.lines.push(o),o}addPath(t,e,n,i,o){const s=new Vt(this.element,t,e,n,i,o);return this.paths.push(s),s}}class Dt{constructor(t,e,n=0,i=0,o=0){this.svg=t,this.label=e,this.yOffset=0,this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.rect.setAttribute("rx","2"),this.svg.appendChild(this.rect),this.textElement=document.createElementNS("http://www.w3.org/2000/svg","text"),this.textElement.innerHTML=e.replace(/\s/g,"\xA0"),this.svg.appendChild(this.textElement);const{y:s,width:a,height:u}=this.textElement.getBBox();this.width=a+n*2,this.height=u+n*2,this.yOffset=0-s,this.x=i,this.y=o}get x(){return this.rect.getBBox().x}get y(){return this.rect.getBBox().y}get width(){return this.rect.getBBox().width}get height(){return this.rect.getBBox().height}set x(t){this.rect.setAttribute("x",t.toString());const{width:e}=this.rect.getBBox(),{width:n}=this.textElement.getBBox();this.textElement.setAttribute("x",((e-n)/2+t).toString())}set y(t){this.rect.setAttribute("y",t.toString());const{height:e}=this.rect.getBBox(),{height:n}=this.textElement.getBBox();this.textElement.setAttribute("y",((e-n)/2+t+this.yOffset).toString())}set width(t){this.rect.setAttribute("width",t.toString()),this.x=this.x}set height(t){this.rect.setAttribute("height",t.toString()),this.y=this.y}get text(){return this.textElement.innerHTML.toString()}}class Ht{constructor(t,e=0,n=0,i=0,o=0){this.svg=t,this.line=document.createElementNS("http://www.w3.org/2000/svg","line"),this.svg.appendChild(this.line),this.line.setAttribute("x1",e.toString()),this.line.setAttribute("x2",i.toString()),this.line.setAttribute("y1",n.toString()),this.line.setAttribute("y2",o.toString())}}class Vt{constructor(t,e=0,n=0,i=0,o=0,s=0){this.svg=t,this.path=document.createElementNS("http://www.w3.org/2000/svg","path"),this.svg.appendChild(this.path),this.path.setAttribute("fill","none"),this.path.setAttribute("d",`M ${e},${n} v ${s} H ${i} V ${o}`)}}function Ut(r){let t;return{c(){t=st("svg")},l(e){t=lt(e,"svg",{}),P(t).forEach(w)},m(e,n){O(e,t,n),r[2](t)},p:H,i:H,o:H,d(e){e&&w(t),r[2](null)}}}function Rt(r,t,e){let n=0,i=0,o=6,s=12,a=0,u=0,c=0,p,x,{tree:_}=t;te(()=>{x=new Mt(p),b()});function b(){n=0,i=0,o=6,s=12,a=0,u=0,c=0;try{p&&(e(0,p.innerHTML="",p),_&&y(JSON.parse(JSON.stringify(_))),p.setAttribute("width",`${u}px`),p.setAttribute("height",`${c}px`),p.setAttribute("viewbox",`0 0 ${u} ${c}`))}catch(l){console.error(l)}}function y(l,h={rows:[[]],symMap:{}}){l.row=l.row||0,l.textbox=x.addText(l.name,o,n,i),a=a||l.textbox.height*2,l.data.length||l.data.push({value:""});for(const f of l.data)if("data"in f)y(f,h),l.row=l.row<f.row?f.row:l.row;else if("value"in f){const B=h.rows[0][h.rows[0].length-1]||{x:0,width:0};f.textbox=x.addText(f.value,o,n,i),f.textbox.x=B.x+B.width+s,u=Math.max(u,f.textbox.x+f.textbox.width+s),f.row=0,h.rows[0].push(f.textbox)}l.row++,h.rows[l.row]=h.rows[l.row]||[],l.textbox.y=l.row*a,c=Math.max(c,l.textbox.y+l.textbox.height+s);const d=l.data[0].textbox,g=l.data[l.data.length-1].textbox;l.textbox.x=d.x+(g.x+g.width-d.x)/2-l.textbox.width/2;const T=h.rows[l.row],k=T[T.length-1];if(k){const f=k.x+k.width+s-l.textbox.x;f>0&&v(l,f,0)}return m(l.textbox,d,g),h.rows[l.row].push(l.textbox),l.row=l.row,h}function m(l,h,d){x.addPath(l.x+l.width/2,l.y,h.x+h.width/2,h.y+h.height,a/-4),h!=d&&x.addPath(l.x+l.width/2,l.y,d.x+d.width/2,d.y+d.height,a/-4)}function v(l,h,d){S(l.textbox,h,d);for(const g of l.data)"data"in g?v(g,h,d):"value"in g&&S(g.textbox,h,d)}function S(l,h,d){h&&(l.x=l.x+h),d&&(l.y=l.y+d),u=Math.max(u,l.x+l.width+s),c=Math.max(c,l.y+l.height+s)}function E(l){F[l?"unshift":"push"](()=>{p=l,e(0,p)})}return r.$$set=l=>{"tree"in l&&e(1,_=l.tree)},r.$$.update=()=>{r.$$.dirty&2&&_&&b()},[p,_,E]}class zt extends Q{constructor(t){super(),Z(this,t,Rt,Ut,ee,{tree:1})}}var qt=`## Hack to trigger Grammar Well postprocess signature 
@{%  function Tree(data) { return data; }%}
## {% %} Syntax uses Nearley's postprocess signature
## \${ }  Syntax uses Grammar Well's

Chunk -> _ Block _ \${ Tree }
 
Block -> _Block \${ Tree }
	| _Block __ ReturnStat \${ Tree }
 
ReturnStat -> "return" __ ExpList \${ Tree }
	| "return" __ ExpList _ ";" \${ Tree }
 
_Block -> Statement \${ Tree }
	| _Block _ ";" _ Statement \${ Tree }
	| _Block __ Statement \${ Tree }
 
Statement ->
	VarList _ "=" _ ExpList \${ Tree }
	| FunctionCall \${ Tree }
	| Label \${ Tree }
	| "break" \${ Tree }
	| "goto" __ Name \${ Tree }
	| "do" __ Block __ "end" \${ Tree }
	| "while" __ Exp __ "do" __ Block __ "end" \${ Tree }
	| "repeat" __ Block __ "until" __ Exp \${ Tree }
	| "if" __ Exp __ "then" __ Block __ Else \${ Tree }
	| "for" __ NameList __ "in" __ ExpList __ "do" __ Block __ "end" \${ Tree }
	| "function" __ FunctionName _ FunctionBody \${ Tree }
	| "local" __ "function" __ Name __ FunctionBody \${ Tree }
	| "local" __ NameList \${ Tree }
	| "local" __ NameList _ "=" _ ExpList \${ Tree }
 
Else -> "end" \${ Tree }
	| _Else __ "end" \${ Tree }
	| _Else __ "else" __ Block __ "end" \${ Tree }
 
_Else ->       "elseif" __ Exp __ "then" __ Block \${ Tree }
	| _Else __ "elseif" __ Exp __ "then" __ Block \${ Tree }
 
Label -> "::" _ Name _ "::" \${ Tree }
 
# Names 
# See Section 2.1 
Name -> _name \${ Tree }
 
_name -> [a-zA-Z_] \${ Tree }
	| _name [\\w_] \${ Tree }
 
NameList -> Name \${ Tree }
	| NameList _ "," _ Name \${ Tree }
 
Var -> Name \${ Tree }
	| PrefixExp _ "[" _ Exp _ "]" \${ Tree }
	| PrefixExp _ "." _ Name \${ Tree }
 
VarList -> Var \${ Tree }
	| VarList _ "," _ Var \${ Tree }
 
ExpList -> Exp \${ Tree }
	| ExpList _ "," _ Exp \${ Tree }
 
PrefixExp -> Var \${ Tree }
	| FunctionCall \${ Tree }
	| Parenthesized \${ Tree }
 
FunctionCall ->
	PrefixExp _ Args \${ Tree }
	| PrefixExp _ ":" _ Name _ Args \${ Tree }
 
Args ->
	"(" _ ")" \${ Tree }
	| "(" _ ExpList _ ")" \${ Tree }
	| String \${ Tree }
 
FunctionName -> _functionname \${ Tree }
	| _functionname ":" Name \${ Tree }
 
_functionname -> Name \${ Tree }
	| FunctionName _ "." _ FunctionName \${ Tree }
 
FunctionDef -> "function" __ FunctionBody \${ Tree }
 
FunctionBody -> "(" _ ParamList _ ")" __ Block __ "end" \${ Tree }
	| "(" _ ")" __ Block __ "end" \${ Tree }
 
ParamList -> NameList \${ Tree }
	| NameList _ "," _ "..." \${ Tree }
	| "..." \${ Tree }
 
# Tables
 
TableConstructor -> "{" _ FieldList _ "}" \${ Tree }
	| "{" _ "}" \${ Tree }
 
FieldList -> _FieldList \${ Tree }
	| _FieldList _ FieldSep \${ Tree }
 
_FieldList -> Field \${ Tree }
	| _FieldList _ FieldSep _ Field \${ Tree }
 
Field -> "[" _ Exp _ "]" _ "=" _ Exp \${ Tree }
	| Name _ "=" _ Exp \${ Tree }
	| Exp \${ Tree }
 
FieldSep -> "," \${ Tree }
	| ";" \${ Tree }
 
# Expressions
Exp -> Binop \${ Tree }
 
Binop -> ExpOr \${ Tree }
 
Parenthesized -> "(" Exp ")" \${ Tree }
 
 
ExpOr -> ExpOr __ "or" __ ExpAnd \${ Tree }
	| ExpAnd \${ Tree }
 
ExpAnd -> ExpAnd __ "and" __ ExpComparison \${ Tree }
	| ExpComparison \${ Tree }
 
ExpComparison ->
	  ExpComparison _ "<"  _ ExpConcatenation \${ Tree }
	| ExpComparison _ ">"  _ ExpConcatenation \${ Tree }
	| ExpComparison _ "<=" _ ExpConcatenation \${ Tree }
	| ExpComparison _ ">=" _ ExpConcatenation \${ Tree }
	| ExpComparison _ "~=" _ ExpConcatenation \${ Tree }
	| ExpComparison _ "==" _ ExpConcatenation \${ Tree }
	| ExpConcatenation \${ Tree }
 
ExpConcatenation ->
	  ExpSum _ ".." _ ExpConcatenation \${ Tree }
	| ExpSum \${ Tree }
 
ExpSum ->
	  ExpSum _ "+" _ ExpProduct \${ Tree }
	| ExpSum _ "-" _ ExpProduct \${ Tree }
	| ExpProduct \${ Tree }
 
ExpProduct ->
	  ExpProduct _ "*" _ ExpUnary \${ Tree }
	| ExpProduct _ "/" _ ExpUnary \${ Tree }
	| ExpProduct _ "%" _ ExpUnary \${ Tree }
	| ExpUnary \${ Tree }
 
ExpUnary ->
	  "not" __ ExpPow \${ Tree }
	| "#" _ ExpPow \${ Tree }
	| "-" _ ExpPow \${ Tree }
	| ExpPow \${ Tree }
 
ExpPow ->
	  Atom \${ Tree }
	| Atom _ "^" _ ExpPow \${ Tree }
 
Atom -> Number \${ Tree }
	| String \${ Tree }
	| PrefixExp \${ Tree }
	| "nil" \${ Tree }
	| "false" \${ Tree }
	| "true" \${ Tree }
	| Parenthesized \${ Tree }
	| FunctionDef \${ Tree }
	| TableConstructor \${ Tree }
 
 
 
 
 
# Primitives
# ==========
 
# Numbers
 
Number -> _number \${ Tree }
 
_posint ->
	[0-9] \${ Tree }
	| _posint [0-9] \${ Tree }
 
_int ->
	"-" _posint \${ Tree }
	| _posint \${ Tree }
 
_float ->
	_int \${ Tree }
	| _int "." _posint \${ Tree }
 
_number ->
	_float \${ Tree }
	| _float "e" _int \${ Tree }
 
 
#Strings
String -> "\\"" _string "\\"" \${ Tree }
 
_string ->
	null \${ Tree }
	| _string _stringchar \${ Tree }
 
_stringchar ->
	[^\\\\"] \${ Tree }
	| "\\\\" [^] \${ Tree }
 
# Whitespace
_ -> null \${ Tree }
	| _ [\\s] \${ Tree }
__ -> [\\s] \${ Tree }
	| __ [\\s] \${ Tree }`;const Yt=r=>({}),Fe=r=>({}),Jt=r=>({}),Ne=r=>({}),Kt=r=>({}),We=r=>({});function Gt(r){let t,e,n,i,o,s,a,u,c,p,x,_;const b=r[7].left,y=fe(b,r,r[6],We),m=r[7].right,v=fe(m,r,r[6],Ne),S=r[7].bottom,E=fe(S,r,r[6],Fe);return{c(){t=C("div"),e=C("div"),n=C("div"),y&&y.c(),i=j(),o=C("div"),s=j(),a=C("div"),v&&v.c(),u=j(),c=C("div"),p=j(),x=C("div"),E&&E.c(),this.h()},l(l){t=L(l,"DIV",{class:!0});var h=P(t);e=L(h,"DIV",{class:!0});var d=P(e);n=L(d,"DIV",{class:!0});var g=P(n);y&&y.l(g),g.forEach(w),i=M(d),o=L(d,"DIV",{class:!0,"data-axis":!0}),P(o).forEach(w),s=M(d),a=L(d,"DIV",{class:!0});var T=P(a);v&&v.l(T),T.forEach(w),d.forEach(w),u=M(h),c=L(h,"DIV",{class:!0,"data-axis":!0}),P(c).forEach(w),p=M(h),x=L(h,"DIV",{class:!0});var k=P(x);E&&E.l(k),k.forEach(w),h.forEach(w),this.h()},h(){$(n,"class","item svelte-2bwo3g"),$(o,"class","vr-div"),$(o,"data-axis","X"),$(a,"class","item svelte-2bwo3g"),$(e,"class","row svelte-2bwo3g"),$(c,"class","hr-div"),$(c,"data-axis","Y"),$(x,"class","item svelte-2bwo3g"),$(t,"class","stack svelte-2bwo3g")},m(l,h){O(l,t,h),A(t,e),A(e,n),y&&y.m(n,null),r[8](n),A(e,i),A(e,o),r[9](o),A(e,s),A(e,a),v&&v.m(a,null),r[10](a),r[11](e),A(t,u),A(t,c),r[12](c),A(t,p),A(t,x),E&&E.m(x,null),r[13](x),_=!0},p(l,[h]){y&&y.p&&(!_||h&64)&&he(y,b,l,l[6],_?pe(b,l[6],h,Kt):de(l[6]),We),v&&v.p&&(!_||h&64)&&he(v,m,l,l[6],_?pe(m,l[6],h,Jt):de(l[6]),Ne),E&&E.p&&(!_||h&64)&&he(E,S,l,l[6],_?pe(S,l[6],h,Yt):de(l[6]),Fe)},i(l){_||(I(y,l),I(v,l),I(E,l),_=!0)},o(l){N(y,l),N(v,l),N(E,l),_=!1},d(l){l&&w(t),y&&y.d(l),r[8](null),r[9](null),v&&v.d(l),r[10](null),r[11](null),r[12](null),E&&E.d(l),r[13](null)}}}function Xt(r,t,e,n){if(n<0){const i=Math.round(parseInt(getComputedStyle(r)[e])+n);r.style.flex=`0 ${i<10?0:i}px`,t.style.flex="1 0"}if(n>0){const i=Math.round(parseInt(getComputedStyle(t)[e])-n);t.style.flex=`0 ${i<10?0:i}px`,r.style.flex="1 0"}}function Qt(r,t,e){let{$$slots:n={},$$scope:i}=t,o,s,a,u,c,p,x={x:0,y:0},_;const b=Ue();te(()=>{c.addEventListener("mousedown",S),c.addEventListener("touchstart",m),p.addEventListener("mousedown",S),p.addEventListener("touchstart",m)});function y(f){f.preventDefault();const B=_.getAttribute("data-axis"),se=`client${B}`,le=f.type=="mousemove"?f[se]:f.touches[0][se];let ae,ue,ce;B=="X"?(ae=s,ue=a,ce="width"):(ae=o,ue=u,ce="height");const tt=le-(x[B]||le);x[B]=le,Xt(ae,ue,ce,tt),b("resize",B)}function m(f){_=f.target,f.preventDefault(),_.addEventListener("touchmove",y),_.addEventListener("touchend",v)}function v(f){f.preventDefault(),_.removeEventListener("touchmove",y),_.removeEventListener("touchend",v)}function S(f){f.preventDefault(),_=f.target,document.addEventListener("mousemove",y),document.addEventListener("mouseup",E)}function E(f){f.preventDefault(),document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",E)}function l(f){F[f?"unshift":"push"](()=>{s=f,e(1,s)})}function h(f){F[f?"unshift":"push"](()=>{c=f,e(4,c)})}function d(f){F[f?"unshift":"push"](()=>{a=f,e(2,a)})}function g(f){F[f?"unshift":"push"](()=>{o=f,e(0,o)})}function T(f){F[f?"unshift":"push"](()=>{p=f,e(5,p)})}function k(f){F[f?"unshift":"push"](()=>{u=f,e(3,u)})}return r.$$set=f=>{"$$scope"in f&&e(6,i=f.$$scope)},[o,s,a,u,c,p,i,n,l,h,d,g,T,k]}class Zt extends Q{constructor(t){super(),Z(this,t,Qt,Gt,ee,{})}}function en(r){let t,e,n;function i(s){r[15](s)}let o={slot:"left",language:"nearley",width:"fill",height:"fill"};return r[0]!==void 0&&(o.value=r[0]),t=new et({props:o}),F.push(()=>Re(t,"value",i)),t.$on("edit",r[7]),t.$on("load",r[8]),{c(){ne(t.$$.fragment)},l(s){re(t.$$.fragment,s)},m(s,a){ie(t,s,a),n=!0},p(s,a){const u={};!e&&a&1&&(e=!0,u.value=s[0],ze(()=>e=!1)),t.$set(u)},i(s){n||(I(t.$$.fragment,s),n=!0)},o(s){N(t.$$.fragment,s),n=!1},d(s){oe(t,s)}}}function tn(r){let t,e,n;function i(s){r[14](s)}let o={slot:"right",language:"nearley",width:"fill",height:"fill"};return r[2]!==void 0&&(o.value=r[2]),t=new et({props:o}),F.push(()=>Re(t,"value",i)),t.$on("edit",r[7]),t.$on("load",r[9]),{c(){ne(t.$$.fragment)},l(s){re(t.$$.fragment,s)},m(s,a){ie(t,s,a),n=!0},p(s,a){const u={};!e&&a&4&&(e=!0,u.value=s[2],ze(()=>e=!1)),t.$set(u)},i(s){n||(I(t.$$.fragment,s),n=!0)},o(s){N(t.$$.fragment,s),n=!1},d(s){oe(t,s)}}}function je(r){let t,e,n,i,o=r[6]&&Me(r),s=r[6]&&r[5]&&De(r),a=(!r[6]||!r[5])&&He(r);return{c(){o&&o.c(),t=j(),s&&s.c(),e=j(),a&&a.c(),n=Ae()},l(u){o&&o.l(u),t=M(u),s&&s.l(u),e=M(u),a&&a.l(u),n=Ae()},m(u,c){o&&o.m(u,c),O(u,t,c),s&&s.m(u,c),O(u,e,c),a&&a.m(u,c),O(u,n,c),i=!0},p(u,c){u[6]?o?o.p(u,c):(o=Me(u),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),u[6]&&u[5]?s?(s.p(u,c),c&96&&I(s,1)):(s=De(u),s.c(),I(s,1),s.m(e.parentNode,e)):s&&(qe(),N(s,1,1,()=>{s=null}),Ye()),!u[6]||!u[5]?a?a.p(u,c):(a=He(u),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},i(u){i||(I(s),i=!0)},o(u){N(s),i=!1},d(u){o&&o.d(u),u&&w(t),s&&s.d(u),u&&w(e),a&&a.d(u),u&&w(n)}}}function Me(r){let t,e,n,i,o,s,a;return{c(){t=C("button"),e=J("data_object"),n=j(),i=C("button"),o=J("account_tree"),this.h()},l(u){t=L(u,"BUTTON",{class:!0});var c=P(t);e=K(c,"data_object"),c.forEach(w),n=M(u),i=L(u,"BUTTON",{class:!0});var p=P(i);o=K(p,"account_tree"),p.forEach(w),this.h()},h(){$(t,"class","material-icons text secondary"),$(i,"class","material-icons text secondary")},m(u,c){O(u,t,c),A(t,e),O(u,n,c),O(u,i,c),A(i,o),s||(a=[$e(t,"click",r[11]),$e(i,"click",r[12])],s=!0)},p:H,d(u){u&&w(t),u&&w(n),u&&w(i),s=!1,at(a)}}}function De(r){let t,e;return t=new zt({props:{tree:r[6]}}),{c(){ne(t.$$.fragment)},l(n){re(t.$$.fragment,n)},m(n,i){ie(t,n,i),e=!0},p(n,i){const o={};i&64&&(o.tree=n[6]),t.$set(o)},i(n){e||(I(t.$$.fragment,n),e=!0)},o(n){N(t.$$.fragment,n),e=!1},d(n){oe(t,n)}}}function He(r){let t,e=JSON.stringify(r[3],null,2)+"",n;return{c(){t=C("pre"),n=J(e)},l(i){t=L(i,"PRE",{});var o=P(t);n=K(o,e),o.forEach(w)},m(i,o){O(i,t,o),A(t,n)},p(i,o){o&8&&e!==(e=JSON.stringify(i[3],null,2)+"")&&Je(n,e)},d(i){i&&w(t)}}}function Ve(r){let t,e;return{c(){t=C("pre"),e=J(r[1]),this.h()},l(n){t=L(n,"PRE",{class:!0});var i=P(t);e=K(i,r[1]),i.forEach(w),this.h()},h(){$(t,"class","errors svelte-tkqx7g")},m(n,i){O(n,t,i),A(t,e)},p(n,i){i&2&&Je(e,n[1])},d(n){n&&w(t)}}}function nn(r){let t,e,n,i=!r[1]&&je(r),o=r[1]&&Ve(r);return{c(){t=C("div"),i&&i.c(),e=j(),o&&o.c(),this.h()},l(s){t=L(s,"DIV",{slot:!0,class:!0});var a=P(t);i&&i.l(a),e=M(a),o&&o.l(a),a.forEach(w),this.h()},h(){$(t,"slot","bottom"),$(t,"class","viewport svelte-tkqx7g")},m(s,a){O(s,t,a),i&&i.m(t,null),A(t,e),o&&o.m(t,null),r[13](t),n=!0},p(s,a){s[1]?i&&(qe(),N(i,1,1,()=>{i=null}),Ye()):i?(i.p(s,a),a&2&&I(i,1)):(i=je(s),i.c(),I(i,1),i.m(t,e)),s[1]?o?o.p(s,a):(o=Ve(s),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},i(s){n||(I(i),n=!0)},o(s){N(i),n=!1},d(s){s&&w(t),i&&i.d(),o&&o.d(),r[13](null)}}}function rn(r){let t,e;return t=new Zt({props:{$$slots:{bottom:[nn],right:[tn],left:[en]},$$scope:{ctx:r}}}),t.$on("resize",r[10]),{c(){ne(t.$$.fragment)},l(n){re(t.$$.fragment,n)},m(n,i){ie(t,n,i),e=!0},p(n,[i]){const o={};i&1048703&&(o.$$scope={dirty:i,ctx:n}),t.$set(o)},i(n){e||(I(t.$$.fragment,n),e=!0)},o(n){N(t.$$.fragment,n),e=!1},d(n){oe(t,n)}}}function xe({name:r,data:t}){const e={name:r,data:[]};if(typeof r!="string"||!Array.isArray(t))throw"Is Not Tree";for(let n=0;n<t.length;n++){const i=t[n];typeof i=="string"?e.data.push({value:i}):Array.isArray(i)?e.data.push(...xe({data:i,name:""}).data.map((o,s)=>(o.name=`${o.name} #${s}`,o))):e.data.push(xe(i))}return e}function on(r,t,e){let n=qt,i="",o=`require("INC_Class.lua")

cAnimal=setclass("Animal")

function cAnimal.methods:init(action, cutename) 
	self.superaction = action
	self.supercutename = cutename
end`,s,a,u,c,p,x=!1,_;const b=new Qe;function y(){a==null||a.classList.add("pending"),b.next()}te(()=>{p=p||new ft,p.addEventListener("message",T=>{a==null||a.classList.remove("pending");const{data:k}=T;if(e(1,i=""),e(3,s=""),k.error&&(console.log(k.error),e(1,i="Error: "+JSON.stringify(k.error))),k.result){e(3,s=k.result);try{e(6,_=xe(k.result))}catch{e(6,_=null)}}}),b.pipe(Lt(2e3)).subscribe(()=>p.postMessage({grammar:n,input:o})),y()});function m(T){u=T.detail.resize}function v(T){console.log(T),c=T.detail.resize}function S(){c(),u()}const E=()=>e(5,x=!1),l=()=>e(5,x=!0);function h(T){F[T?"unshift":"push"](()=>{a=T,e(4,a)})}function d(T){o=T,e(2,o)}function g(T){n=T,e(0,n)}return[n,i,o,s,a,x,_,y,m,v,S,E,l,h,d,g]}class fn extends Q{constructor(t){super(),Z(this,t,on,rn,ee,{})}}export{fn as default};
