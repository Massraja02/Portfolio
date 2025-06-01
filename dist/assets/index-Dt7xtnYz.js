(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))s(z);new MutationObserver(z=>{for(const N of z)if(N.type==="childList")for(const Q of N.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&s(Q)}).observe(document,{childList:!0,subtree:!0});function b(z){const N={};return z.integrity&&(N.integrity=z.integrity),z.referrerPolicy&&(N.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?N.credentials="include":z.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function s(z){if(z.ep)return;z.ep=!0;const N=b(z);fetch(z.href,N)}})();function Bu(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Du={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Op(){if(Hd)return Ll;Hd=1;var u=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function b(s,z,N){var Q=null;if(N!==void 0&&(Q=""+N),z.key!==void 0&&(Q=""+z.key),"key"in z){N={};for(var d in z)d!=="key"&&(N[d]=z[d])}else N=z;return z=N.ref,{$$typeof:u,type:s,key:Q,ref:z!==void 0?z:null,props:N}}return Ll.Fragment=m,Ll.jsx=b,Ll.jsxs=b,Ll}var Ud;function _p(){return Ud||(Ud=1,Du.exports=Op()),Du.exports}var f=_p(),wu={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function jp(){if(qd)return vt;qd=1;var u=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),r=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),x=Symbol.iterator;function S(v){return v===null||typeof v!="object"?null:(v=x&&v[x]||v["@@iterator"],typeof v=="function"?v:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function H(v,R,B){this.props=v,this.context=R,this.refs=_,this.updater=B||y}H.prototype.isReactComponent={},H.prototype.setState=function(v,R){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,R,"setState")},H.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function W(){}W.prototype=H.prototype;function $(v,R,B){this.props=v,this.context=R,this.refs=_,this.updater=B||y}var V=$.prototype=new W;V.constructor=$,T(V,H.prototype),V.isPureReactComponent=!0;var ot=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},Z=Object.prototype.hasOwnProperty;function I(v,R,B,K,j,mt){return B=mt.ref,{$$typeof:u,type:v,key:R,ref:B!==void 0?B:null,props:mt}}function J(v,R){return I(v.type,R,void 0,void 0,void 0,v.props)}function tt(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function at(v){var R={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(B){return R[B]})}var Y=/\/+/g;function q(v,R){return typeof v=="object"&&v!==null&&v.key!=null?at(""+v.key):R.toString(36)}function lt(){}function F(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(lt,lt):(v.status="pending",v.then(function(R){v.status==="pending"&&(v.status="fulfilled",v.value=R)},function(R){v.status==="pending"&&(v.status="rejected",v.reason=R)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function ft(v,R,B,K,j){var mt=typeof v;(mt==="undefined"||mt==="boolean")&&(v=null);var G=!1;if(v===null)G=!0;else switch(mt){case"bigint":case"string":case"number":G=!0;break;case"object":switch(v.$$typeof){case u:case m:G=!0;break;case h:return G=v._init,ft(G(v._payload),R,B,K,j)}}if(G)return j=j(v),G=K===""?"."+q(v,0):K,ot(j)?(B="",G!=null&&(B=G.replace(Y,"$&/")+"/"),ft(j,R,B,"",function(bt){return bt})):j!=null&&(tt(j)&&(j=J(j,B+(j.key==null||v&&v.key===j.key?"":(""+j.key).replace(Y,"$&/")+"/")+G)),R.push(j)),1;G=0;var ut=K===""?".":K+":";if(ot(v))for(var rt=0;rt<v.length;rt++)K=v[rt],mt=ut+q(K,rt),G+=ft(K,R,B,mt,j);else if(rt=S(v),typeof rt=="function")for(v=rt.call(v),rt=0;!(K=v.next()).done;)K=K.value,mt=ut+q(K,rt++),G+=ft(K,R,B,mt,j);else if(mt==="object"){if(typeof v.then=="function")return ft(F(v),R,B,K,j);throw R=String(v),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}return G}function E(v,R,B){if(v==null)return v;var K=[],j=0;return ft(v,K,"","",function(mt){return R.call(B,mt,j++)}),K}function P(v){if(v._status===-1){var R=v._result;R=R(),R.then(function(B){(v._status===0||v._status===-1)&&(v._status=1,v._result=B)},function(B){(v._status===0||v._status===-1)&&(v._status=2,v._result=B)}),v._status===-1&&(v._status=0,v._result=R)}if(v._status===1)return v._result.default;throw v._result}var et=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var R=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(R))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function nt(){}return vt.Children={map:E,forEach:function(v,R,B){E(v,function(){R.apply(this,arguments)},B)},count:function(v){var R=0;return E(v,function(){R++}),R},toArray:function(v){return E(v,function(R){return R})||[]},only:function(v){if(!tt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},vt.Component=H,vt.Fragment=b,vt.Profiler=z,vt.PureComponent=$,vt.StrictMode=s,vt.Suspense=p,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,vt.__COMPILER_RUNTIME={__proto__:null,c:function(v){return L.H.useMemoCache(v)}},vt.cache=function(v){return function(){return v.apply(null,arguments)}},vt.cloneElement=function(v,R,B){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var K=T({},v.props),j=v.key,mt=void 0;if(R!=null)for(G in R.ref!==void 0&&(mt=void 0),R.key!==void 0&&(j=""+R.key),R)!Z.call(R,G)||G==="key"||G==="__self"||G==="__source"||G==="ref"&&R.ref===void 0||(K[G]=R[G]);var G=arguments.length-2;if(G===1)K.children=B;else if(1<G){for(var ut=Array(G),rt=0;rt<G;rt++)ut[rt]=arguments[rt+2];K.children=ut}return I(v.type,j,void 0,void 0,mt,K)},vt.createContext=function(v){return v={$$typeof:Q,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:N,_context:v},v},vt.createElement=function(v,R,B){var K,j={},mt=null;if(R!=null)for(K in R.key!==void 0&&(mt=""+R.key),R)Z.call(R,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(j[K]=R[K]);var G=arguments.length-2;if(G===1)j.children=B;else if(1<G){for(var ut=Array(G),rt=0;rt<G;rt++)ut[rt]=arguments[rt+2];j.children=ut}if(v&&v.defaultProps)for(K in G=v.defaultProps,G)j[K]===void 0&&(j[K]=G[K]);return I(v,mt,void 0,void 0,null,j)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(v){return{$$typeof:d,render:v}},vt.isValidElement=tt,vt.lazy=function(v){return{$$typeof:h,_payload:{_status:-1,_result:v},_init:P}},vt.memo=function(v,R){return{$$typeof:r,type:v,compare:R===void 0?null:R}},vt.startTransition=function(v){var R=L.T,B={};L.T=B;try{var K=v(),j=L.S;j!==null&&j(B,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(nt,et)}catch(mt){et(mt)}finally{L.T=R}},vt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},vt.use=function(v){return L.H.use(v)},vt.useActionState=function(v,R,B){return L.H.useActionState(v,R,B)},vt.useCallback=function(v,R){return L.H.useCallback(v,R)},vt.useContext=function(v){return L.H.useContext(v)},vt.useDebugValue=function(){},vt.useDeferredValue=function(v,R){return L.H.useDeferredValue(v,R)},vt.useEffect=function(v,R,B){var K=L.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return K.useEffect(v,R)},vt.useId=function(){return L.H.useId()},vt.useImperativeHandle=function(v,R,B){return L.H.useImperativeHandle(v,R,B)},vt.useInsertionEffect=function(v,R){return L.H.useInsertionEffect(v,R)},vt.useLayoutEffect=function(v,R){return L.H.useLayoutEffect(v,R)},vt.useMemo=function(v,R){return L.H.useMemo(v,R)},vt.useOptimistic=function(v,R){return L.H.useOptimistic(v,R)},vt.useReducer=function(v,R,B){return L.H.useReducer(v,R,B)},vt.useRef=function(v){return L.H.useRef(v)},vt.useState=function(v){return L.H.useState(v)},vt.useSyncExternalStore=function(v,R,B){return L.H.useSyncExternalStore(v,R,B)},vt.useTransition=function(){return L.H.useTransition()},vt.version="19.1.0",vt}var Cd;function mr(){return Cd||(Cd=1,wu.exports=jp()),wu.exports}var bn=mr();const An=Bu(bn);var ku={exports:{}},Zl={},Ru={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function Tp(){return Bd||(Bd=1,function(u){function m(E,P){var et=E.length;E.push(P);t:for(;0<et;){var nt=et-1>>>1,v=E[nt];if(0<z(v,P))E[nt]=P,E[et]=v,et=nt;else break t}}function b(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var P=E[0],et=E.pop();if(et!==P){E[0]=et;t:for(var nt=0,v=E.length,R=v>>>1;nt<R;){var B=2*(nt+1)-1,K=E[B],j=B+1,mt=E[j];if(0>z(K,et))j<v&&0>z(mt,K)?(E[nt]=mt,E[j]=et,nt=j):(E[nt]=K,E[B]=et,nt=B);else if(j<v&&0>z(mt,et))E[nt]=mt,E[j]=et,nt=j;else break t}}return P}function z(E,P){var et=E.sortIndex-P.sortIndex;return et!==0?et:E.id-P.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;u.unstable_now=function(){return N.now()}}else{var Q=Date,d=Q.now();u.unstable_now=function(){return Q.now()-d}}var p=[],r=[],h=1,x=null,S=3,y=!1,T=!1,_=!1,H=!1,W=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function ot(E){for(var P=b(r);P!==null;){if(P.callback===null)s(r);else if(P.startTime<=E)s(r),P.sortIndex=P.expirationTime,m(p,P);else break;P=b(r)}}function L(E){if(_=!1,ot(E),!T)if(b(p)!==null)T=!0,Z||(Z=!0,q());else{var P=b(r);P!==null&&ft(L,P.startTime-E)}}var Z=!1,I=-1,J=5,tt=-1;function at(){return H?!0:!(u.unstable_now()-tt<J)}function Y(){if(H=!1,Z){var E=u.unstable_now();tt=E;var P=!0;try{t:{T=!1,_&&(_=!1,$(I),I=-1),y=!0;var et=S;try{n:{for(ot(E),x=b(p);x!==null&&!(x.expirationTime>E&&at());){var nt=x.callback;if(typeof nt=="function"){x.callback=null,S=x.priorityLevel;var v=nt(x.expirationTime<=E);if(E=u.unstable_now(),typeof v=="function"){x.callback=v,ot(E),P=!0;break n}x===b(p)&&s(p),ot(E)}else s(p);x=b(p)}if(x!==null)P=!0;else{var R=b(r);R!==null&&ft(L,R.startTime-E),P=!1}}break t}finally{x=null,S=et,y=!1}P=void 0}}finally{P?q():Z=!1}}}var q;if(typeof V=="function")q=function(){V(Y)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,F=lt.port2;lt.port1.onmessage=Y,q=function(){F.postMessage(null)}}else q=function(){W(Y,0)};function ft(E,P){I=W(function(){E(u.unstable_now())},P)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(E){E.callback=null},u.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<E?Math.floor(1e3/E):5},u.unstable_getCurrentPriorityLevel=function(){return S},u.unstable_next=function(E){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var et=S;S=P;try{return E()}finally{S=et}},u.unstable_requestPaint=function(){H=!0},u.unstable_runWithPriority=function(E,P){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var et=S;S=E;try{return P()}finally{S=et}},u.unstable_scheduleCallback=function(E,P,et){var nt=u.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?nt+et:nt):et=nt,E){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=et+v,E={id:h++,callback:P,priorityLevel:E,startTime:et,expirationTime:v,sortIndex:-1},et>nt?(E.sortIndex=et,m(r,E),b(p)===null&&E===b(r)&&(_?($(I),I=-1):_=!0,ft(L,et-nt))):(E.sortIndex=v,m(p,E),T||y||(T=!0,Z||(Z=!0,q()))),E},u.unstable_shouldYield=at,u.unstable_wrapCallback=function(E){var P=S;return function(){var et=S;S=P;try{return E.apply(this,arguments)}finally{S=et}}}}(Hu)),Hu}var Yd;function Ap(){return Yd||(Yd=1,Ru.exports=Tp()),Ru.exports}var Uu={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd;function Ep(){if(Xd)return un;Xd=1;var u=mr();function m(p){var r="https://react.dev/errors/"+p;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)r+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+p+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(){}var s={d:{f:b,r:function(){throw Error(m(522))},D:b,C:b,L:b,m:b,X:b,S:b,M:b},p:0,findDOMNode:null},z=Symbol.for("react.portal");function N(p,r,h){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:x==null?null:""+x,children:p,containerInfo:r,implementation:h}}var Q=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,r){if(p==="font")return"";if(typeof r=="string")return r==="use-credentials"?r:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(p,r){var h=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)throw Error(m(299));return N(p,r,null,h)},un.flushSync=function(p){var r=Q.T,h=s.p;try{if(Q.T=null,s.p=2,p)return p()}finally{Q.T=r,s.p=h,s.d.f()}},un.preconnect=function(p,r){typeof p=="string"&&(r?(r=r.crossOrigin,r=typeof r=="string"?r==="use-credentials"?r:"":void 0):r=null,s.d.C(p,r))},un.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},un.preinit=function(p,r){if(typeof p=="string"&&r&&typeof r.as=="string"){var h=r.as,x=d(h,r.crossOrigin),S=typeof r.integrity=="string"?r.integrity:void 0,y=typeof r.fetchPriority=="string"?r.fetchPriority:void 0;h==="style"?s.d.S(p,typeof r.precedence=="string"?r.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:y}):h==="script"&&s.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:y,nonce:typeof r.nonce=="string"?r.nonce:void 0})}},un.preinitModule=function(p,r){if(typeof p=="string")if(typeof r=="object"&&r!==null){if(r.as==null||r.as==="script"){var h=d(r.as,r.crossOrigin);s.d.M(p,{crossOrigin:h,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0})}}else r==null&&s.d.M(p)},un.preload=function(p,r){if(typeof p=="string"&&typeof r=="object"&&r!==null&&typeof r.as=="string"){var h=r.as,x=d(h,r.crossOrigin);s.d.L(p,h,{crossOrigin:x,integrity:typeof r.integrity=="string"?r.integrity:void 0,nonce:typeof r.nonce=="string"?r.nonce:void 0,type:typeof r.type=="string"?r.type:void 0,fetchPriority:typeof r.fetchPriority=="string"?r.fetchPriority:void 0,referrerPolicy:typeof r.referrerPolicy=="string"?r.referrerPolicy:void 0,imageSrcSet:typeof r.imageSrcSet=="string"?r.imageSrcSet:void 0,imageSizes:typeof r.imageSizes=="string"?r.imageSizes:void 0,media:typeof r.media=="string"?r.media:void 0})}},un.preloadModule=function(p,r){if(typeof p=="string")if(r){var h=d(r.as,r.crossOrigin);s.d.m(p,{as:typeof r.as=="string"&&r.as!=="script"?r.as:void 0,crossOrigin:h,integrity:typeof r.integrity=="string"?r.integrity:void 0})}else s.d.m(p)},un.requestFormReset=function(p){s.d.r(p)},un.unstable_batchedUpdates=function(p,r){return p(r)},un.useFormState=function(p,r,h){return Q.H.useFormState(p,r,h)},un.useFormStatus=function(){return Q.H.useHostTransitionStatus()},un.version="19.1.0",un}var Gd;function zp(){if(Gd)return Uu.exports;Gd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),Uu.exports=Ep(),Uu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd;function Mp(){if(Qd)return Zl;Qd=1;var u=Ap(),m=mr(),b=zp();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function N(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Q(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(N(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=N(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,e=n;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(e=l.return,e!==null){a=e;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return d(l),t;if(i===e)return d(l),n;i=i.sibling}throw Error(s(188))}if(a.return!==e.return)a=l,e=i;else{for(var o=!1,c=l.child;c;){if(c===a){o=!0,a=l,e=i;break}if(c===e){o=!0,e=l,a=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===a){o=!0,a=i,e=l;break}if(c===e){o=!0,e=i,a=l;break}c=c.sibling}if(!o)throw Error(s(189))}}if(a.alternate!==e)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function r(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=r(t),n!==null)return n;t=t.sibling}return null}var h=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),V=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),tt=Symbol.for("react.activity"),at=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function F(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case H:return"Profiler";case _:return"StrictMode";case L:return"Suspense";case Z:return"SuspenseList";case tt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case V:return(t.displayName||"Context")+".Provider";case $:return(t._context.displayName||"Context")+".Consumer";case ot:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:F(t.type)||"Memo";case J:n=t._payload,t=t._init;try{return F(t(n))}catch{}}return null}var ft=Array.isArray,E=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},nt=[],v=-1;function R(t){return{current:t}}function B(t){0>v||(t.current=nt[v],nt[v]=null,v--)}function K(t,n){v++,nt[v]=t.current,t.current=n}var j=R(null),mt=R(null),G=R(null),ut=R(null);function rt(t,n){switch(K(G,n),K(mt,t),K(j,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?cd(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=cd(n),t=sd(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}B(j),K(j,t)}function bt(){B(j),B(mt),B(G)}function St(t){t.memoizedState!==null&&K(ut,t);var n=j.current,a=sd(n,t.type);n!==a&&(K(mt,t),K(j,a))}function Rt(t){mt.current===t&&(B(j),B(mt)),ut.current===t&&(B(ut),Bl._currentValue=et)}var Qt=Object.prototype.hasOwnProperty,Tt=u.unstable_scheduleCallback,yt=u.unstable_cancelCallback,Vt=u.unstable_shouldYield,en=u.unstable_requestPaint,cn=u.unstable_now,Kl=u.unstable_getCurrentPriorityLevel,Jl=u.unstable_ImmediatePriority,Pl=u.unstable_UserBlockingPriority,Ua=u.unstable_NormalPriority,Ze=u.unstable_LowPriority,ne=u.unstable_IdlePriority,br=u.log,Ve=u.unstable_setDisableYieldValue,Xn=null,ln=null;function Gn(t){if(typeof br=="function"&&Ve(t),ln&&typeof ln.setStrictMode=="function")try{ln.setStrictMode(Xn,t)}catch{}}var sn=Math.clz32?Math.clz32:ae,Ke=Math.log,gr=Math.LN2;function ae(t){return t>>>=0,t===0?32:31-(Ke(t)/gr|0)|0}var ee=256,Wl=4194304;function qa(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $l(t,n,a){var e=t.pendingLanes;if(e===0)return 0;var l=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~i,e!==0?l=qa(e):(o&=c,o!==0?l=qa(o):a||(a=c&~t,a!==0&&(l=qa(a))))):(c=e&~i,c!==0?l=qa(c):o!==0?l=qa(o):a||(a=e&~t,a!==0&&(l=qa(a)))),l===0?0:n!==0&&n!==l&&(n&i)===0&&(i=l&-l,a=n&-n,i>=a||i===32&&(a&4194048)!==0)?n:l}function Je(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function c0(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zu(){var t=ee;return ee<<=1,(ee&4194048)===0&&(ee=256),t}function Vu(){var t=Wl;return Wl<<=1,(Wl&62914560)===0&&(Wl=4194304),t}function yr(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Pe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function s0(t,n,a,e,l,i){var o=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,g=t.expirationTimes,D=t.hiddenUpdates;for(a=o&~a;0<a;){var U=31-sn(a),X=1<<U;c[U]=0,g[U]=-1;var w=D[U];if(w!==null)for(D[U]=null,U=0;U<w.length;U++){var k=w[U];k!==null&&(k.lane&=-536870913)}a&=~X}e!==0&&Ku(t,e,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~n))}function Ku(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var e=31-sn(n);t.entangledLanes|=n,t.entanglements[e]=t.entanglements[e]|1073741824|a&4194090}function Ju(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var e=31-sn(a),l=1<<e;l&n|t[e]&n&&(t[e]|=n),a&=~l}}function xr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Sr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Pu(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:Md(t.type))}function f0(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var da=Math.random().toString(36).slice(2),rn="__reactFiber$"+da,dn="__reactProps$"+da,le="__reactContainer$"+da,Or="__reactEvents$"+da,d0="__reactListeners$"+da,h0="__reactHandles$"+da,Wu="__reactResources$"+da,We="__reactMarker$"+da;function _r(t){delete t[rn],delete t[dn],delete t[Or],delete t[d0],delete t[h0]}function ie(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[le]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=pd(t);t!==null;){if(a=t[rn])return a;t=pd(t)}return n}t=a,a=t.parentNode}return null}function re(t){if(t=t[rn]||t[le]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function $e(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function oe(t){var n=t[Wu];return n||(n=t[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Wt(t){t[We]=!0}var $u=new Set,Fu={};function Ca(t,n){ue(t,n),ue(t+"Capture",n)}function ue(t,n){for(Fu[t]=n,t=0;t<n.length;t++)$u.add(n[t])}var p0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Iu={},tc={};function m0(t){return Qt.call(tc,t)?!0:Qt.call(Iu,t)?!1:p0.test(t)?tc[t]=!0:(Iu[t]=!0,!1)}function Fl(t,n,a){if(m0(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var e=n.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Il(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Wn(t,n,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+e)}}var jr,nc;function ce(t){if(jr===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jr=n&&n[1]||"",nc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jr+t+nc}var Tr=!1;function Ar(t,n){if(!t||Tr)return"";Tr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(n){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(k){var w=k}Reflect.construct(t,[],X)}else{try{X.call()}catch(k){w=k}t.call(X.prototype)}}else{try{throw Error()}catch(k){w=k}(X=t())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(k){if(k&&w&&typeof k.stack=="string")return[k.stack,w.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var g=o.split(`
`),D=c.split(`
`);for(l=e=0;e<g.length&&!g[e].includes("DetermineComponentFrameRoot");)e++;for(;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;if(e===g.length||l===D.length)for(e=g.length-1,l=D.length-1;1<=e&&0<=l&&g[e]!==D[l];)l--;for(;1<=e&&0<=l;e--,l--)if(g[e]!==D[l]){if(e!==1||l!==1)do if(e--,l--,0>l||g[e]!==D[l]){var U=`
`+g[e].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=e&&0<=l);break}}}finally{Tr=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ce(a):""}function v0(t){switch(t.tag){case 26:case 27:case 5:return ce(t.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return Ar(t.type,!1);case 11:return Ar(t.type.render,!1);case 1:return Ar(t.type,!0);case 31:return ce("Activity");default:return""}}function ac(t){try{var n="";do n+=v0(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function En(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ec(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function b0(t){var n=ec(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),e=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){e=""+o,i.call(this,o)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(o){e=""+o},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ti(t){t._valueTracker||(t._valueTracker=b0(t))}function lc(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),e="";return t&&(e=ec(t)?t.checked?"true":"false":t.value),t=e,t!==a?(n.setValue(t),!0):!1}function ni(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var g0=/[\n"\\]/g;function zn(t){return t.replace(g0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Er(t,n,a,e,l,i,o,c){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),n!=null?o==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+En(n)):t.value!==""+En(n)&&(t.value=""+En(n)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),n!=null?zr(t,o,En(n)):a!=null?zr(t,o,En(a)):e!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+En(c):t.removeAttribute("name")}function ic(t,n,a,e,l,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;a=a!=null?""+En(a):"",n=n!=null?""+En(n):a,c||n===t.value||(t.value=n),t.defaultValue=n}e=e??l,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o)}function zr(t,n,a){n==="number"&&ni(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function se(t,n,a,e){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&e&&(t[a].defaultSelected=!0)}else{for(a=""+En(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,e&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function rc(t,n,a){if(n!=null&&(n=""+En(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+En(a):""}function oc(t,n,a,e){if(n==null){if(e!=null){if(a!=null)throw Error(s(92));if(ft(e)){if(1<e.length)throw Error(s(93));e=e[0]}a=e}a==null&&(a=""),n=a}a=En(n),t.defaultValue=a,e=t.textContent,e===a&&e!==""&&e!==null&&(t.value=e)}function fe(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var y0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uc(t,n,a){var e=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":e?t.setProperty(n,a):typeof a!="number"||a===0||y0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function cc(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||n!=null&&n.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var l in n)e=n[l],n.hasOwnProperty(l)&&a[l]!==e&&uc(t,l,e)}else for(var i in n)n.hasOwnProperty(i)&&uc(t,i,n[i])}function Mr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),S0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ai(t){return S0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Nr=null;function Dr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var de=null,he=null;function sc(t){var n=re(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Er(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var e=a[n];if(e!==t&&e.form===t.form){var l=e[dn]||null;if(!l)throw Error(s(90));Er(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)e=a[n],e.form===t.form&&lc(e)}break t;case"textarea":rc(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&se(t,!!a.multiple,n,!1)}}}var wr=!1;function fc(t,n,a){if(wr)return t(n,a);wr=!0;try{var e=t(n);return e}finally{if(wr=!1,(de!==null||he!==null)&&(Xi(),de&&(n=de,t=he,he=de=null,sc(n),t)))for(n=0;n<t.length;n++)sc(t[n])}}function Fe(t,n){var a=t.stateNode;if(a===null)return null;var e=a[dn]||null;if(e===null)return null;a=e[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kr=!1;if($n)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){kr=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch{kr=!1}var ha=null,Rr=null,ei=null;function dc(){if(ei)return ei;var t,n=Rr,a=n.length,e,l="value"in ha?ha.value:ha.textContent,i=l.length;for(t=0;t<a&&n[t]===l[t];t++);var o=a-t;for(e=1;e<=o&&n[a-e]===l[i-e];e++);return ei=l.slice(t,1<e?1-e:void 0)}function li(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ii(){return!0}function hc(){return!1}function hn(t){function n(a,e,l,i,o){this._reactName=a,this._targetInst=l,this.type=e,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ii:hc,this.isPropagationStopped=hc,this}return h(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ii)},persist:function(){},isPersistent:ii}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=hn(Ba),tl=h({},Ba,{view:0,detail:0}),O0=hn(tl),Hr,Ur,nl,oi=h({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nl&&(nl&&t.type==="mousemove"?(Hr=t.screenX-nl.screenX,Ur=t.screenY-nl.screenY):Ur=Hr=0,nl=t),Hr)},movementY:function(t){return"movementY"in t?t.movementY:Ur}}),pc=hn(oi),_0=h({},oi,{dataTransfer:0}),j0=hn(_0),T0=h({},tl,{relatedTarget:0}),qr=hn(T0),A0=h({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=hn(A0),z0=h({},Ba,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M0=hn(z0),N0=h({},Ba,{data:0}),mc=hn(N0),D0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=k0[t])?!!n[t]:!1}function Cr(){return R0}var H0=h({},tl,{key:function(t){if(t.key){var n=D0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cr,charCode:function(t){return t.type==="keypress"?li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),U0=hn(H0),q0=h({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=hn(q0),C0=h({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cr}),B0=hn(C0),Y0=h({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=hn(Y0),G0=h({},oi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=hn(G0),L0=h({},Ba,{newState:0,oldState:0}),Z0=hn(L0),V0=[9,13,27,32],Br=$n&&"CompositionEvent"in window,al=null;$n&&"documentMode"in document&&(al=document.documentMode);var K0=$n&&"TextEvent"in window&&!al,bc=$n&&(!Br||al&&8<al&&11>=al),gc=" ",yc=!1;function xc(t,n){switch(t){case"keyup":return V0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pe=!1;function J0(t,n){switch(t){case"compositionend":return Sc(n);case"keypress":return n.which!==32?null:(yc=!0,gc);case"textInput":return t=n.data,t===gc&&yc?null:t;default:return null}}function P0(t,n){if(pe)return t==="compositionend"||!Br&&xc(t,n)?(t=dc(),ei=Rr=ha=null,pe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bc&&n.locale!=="ko"?null:n.data;default:return null}}var W0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!W0[t.type]:n==="textarea"}function _c(t,n,a,e){de?he?he.push(e):he=[e]:de=e,n=Ki(n,"onChange"),0<n.length&&(a=new ri("onChange","change",null,a,e),t.push({event:a,listeners:n}))}var el=null,ll=null;function $0(t){ld(t,0)}function ui(t){var n=$e(t);if(lc(n))return t}function jc(t,n){if(t==="change")return n}var Tc=!1;if($n){var Yr;if($n){var Xr="oninput"in document;if(!Xr){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),Xr=typeof Ac.oninput=="function"}Yr=Xr}else Yr=!1;Tc=Yr&&(!document.documentMode||9<document.documentMode)}function Ec(){el&&(el.detachEvent("onpropertychange",zc),ll=el=null)}function zc(t){if(t.propertyName==="value"&&ui(ll)){var n=[];_c(n,ll,t,Dr(t)),fc($0,n)}}function F0(t,n,a){t==="focusin"?(Ec(),el=n,ll=a,el.attachEvent("onpropertychange",zc)):t==="focusout"&&Ec()}function I0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ui(ll)}function th(t,n){if(t==="click")return ui(n)}function nh(t,n){if(t==="input"||t==="change")return ui(n)}function ah(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var gn=typeof Object.is=="function"?Object.is:ah;function il(t,n){if(gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),e=Object.keys(n);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var l=a[e];if(!Qt.call(n,l)||!gn(t[l],n[l]))return!1}return!0}function Mc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nc(t,n){var a=Mc(t);t=0;for(var e;a;){if(a.nodeType===3){if(e=t+a.textContent.length,t<=n&&e>=n)return{node:a,offset:n-t};t=e}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mc(a)}}function Dc(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dc(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function wc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ni(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ni(t.document)}return n}function Gr(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var eh=$n&&"documentMode"in document&&11>=document.documentMode,me=null,Qr=null,rl=null,Lr=!1;function kc(t,n,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lr||me==null||me!==ni(e)||(e=me,"selectionStart"in e&&Gr(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),rl&&il(rl,e)||(rl=e,e=Ki(Qr,"onSelect"),0<e.length&&(n=new ri("onSelect","select",null,n,a),t.push({event:n,listeners:e}),n.target=me)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ve={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Zr={},Rc={};$n&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete ve.animationend.animation,delete ve.animationiteration.animation,delete ve.animationstart.animation),"TransitionEvent"in window||delete ve.transitionend.transition);function Xa(t){if(Zr[t])return Zr[t];if(!ve[t])return t;var n=ve[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rc)return Zr[t]=n[a];return t}var Hc=Xa("animationend"),Uc=Xa("animationiteration"),qc=Xa("animationstart"),lh=Xa("transitionrun"),ih=Xa("transitionstart"),rh=Xa("transitioncancel"),Cc=Xa("transitionend"),Bc=new Map,Vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vr.push("scrollEnd");function Un(t,n){Bc.set(t,n),Ca(n,[t])}var Yc=new WeakMap;function Mn(t,n){if(typeof t=="object"&&t!==null){var a=Yc.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ac(n)},Yc.set(t,n),n)}return{value:t,source:n,stack:ac(n)}}var Nn=[],be=0,Kr=0;function ci(){for(var t=be,n=Kr=be=0;n<t;){var a=Nn[n];Nn[n++]=null;var e=Nn[n];Nn[n++]=null;var l=Nn[n];Nn[n++]=null;var i=Nn[n];if(Nn[n++]=null,e!==null&&l!==null){var o=e.pending;o===null?l.next=l:(l.next=o.next,o.next=l),e.pending=l}i!==0&&Xc(a,l,i)}}function si(t,n,a,e){Nn[be++]=t,Nn[be++]=n,Nn[be++]=a,Nn[be++]=e,Kr|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function Jr(t,n,a,e){return si(t,n,a,e),fi(t)}function ge(t,n){return si(t,null,null,n),fi(t)}function Xc(t,n,a){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a);for(var l=!1,i=t.return;i!==null;)i.childLanes|=a,e=i.alternate,e!==null&&(e.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,l&&n!==null&&(l=31-sn(a),t=i.hiddenUpdates,e=t[l],e===null?t[l]=[n]:e.push(n),n.lane=a|536870912),i):null}function fi(t){if(50<Dl)throw Dl=0,nu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ye={};function oh(t,n,a,e){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,n,a,e){return new oh(t,n,a,e)}function Pr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fn(t,n){var a=t.alternate;return a===null?(a=yn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Gc(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function di(t,n,a,e,l,i){var o=0;if(e=t,typeof t=="function")Pr(t)&&(o=1);else if(typeof t=="string")o=cp(t,a,j.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case tt:return t=yn(31,a,n,l),t.elementType=tt,t.lanes=i,t;case T:return Ga(a.children,l,i,n);case _:o=8,l|=24;break;case H:return t=yn(12,a,n,l|2),t.elementType=H,t.lanes=i,t;case L:return t=yn(13,a,n,l),t.elementType=L,t.lanes=i,t;case Z:return t=yn(19,a,n,l),t.elementType=Z,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case V:o=10;break t;case $:o=9;break t;case ot:o=11;break t;case I:o=14;break t;case J:o=16,e=null;break t}o=29,a=Error(s(130,t===null?"null":typeof t,"")),e=null}return n=yn(o,a,n,l),n.elementType=t,n.type=e,n.lanes=i,n}function Ga(t,n,a,e){return t=yn(7,t,e,n),t.lanes=a,t}function Wr(t,n,a){return t=yn(6,t,null,n),t.lanes=a,t}function $r(t,n,a){return n=yn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xe=[],Se=0,hi=null,pi=0,Dn=[],wn=0,Qa=null,In=1,ta="";function La(t,n){xe[Se++]=pi,xe[Se++]=hi,hi=t,pi=n}function Qc(t,n,a){Dn[wn++]=In,Dn[wn++]=ta,Dn[wn++]=Qa,Qa=t;var e=In;t=ta;var l=32-sn(e)-1;e&=~(1<<l),a+=1;var i=32-sn(n)+l;if(30<i){var o=l-l%5;i=(e&(1<<o)-1).toString(32),e>>=o,l-=o,In=1<<32-sn(n)+l|a<<l|e,ta=i+t}else In=1<<i|a<<l|e,ta=t}function Fr(t){t.return!==null&&(La(t,1),Qc(t,1,0))}function Ir(t){for(;t===hi;)hi=xe[--Se],xe[Se]=null,pi=xe[--Se],xe[Se]=null;for(;t===Qa;)Qa=Dn[--wn],Dn[wn]=null,ta=Dn[--wn],Dn[wn]=null,In=Dn[--wn],Dn[wn]=null}var fn=null,Bt=null,Et=!1,Za=null,Qn=!1,to=Error(s(519));function Va(t){var n=Error(s(418,""));throw cl(Mn(n,t)),to}function Lc(t){var n=t.stateNode,a=t.type,e=t.memoizedProps;switch(n[rn]=t,n[dn]=e,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<kl.length;a++)_t(kl[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),ic(n,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0),ti(n);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),oc(n,e.value,e.defaultValue,e.children),ti(n)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||e.suppressHydrationWarning===!0||ud(n.textContent,a)?(e.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),e.onScroll!=null&&_t("scroll",n),e.onScrollEnd!=null&&_t("scrollend",n),e.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Va(t)}function Zc(t){for(fn=t.return;fn;)switch(fn.tag){case 5:case 13:Qn=!1;return;case 27:case 3:Qn=!0;return;default:fn=fn.return}}function ol(t){if(t!==fn)return!1;if(!Et)return Zc(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bu(t.type,t.memoizedProps)),a=!a),a&&Bt&&Va(t),Zc(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Bt=Cn(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Bt=null}}else n===27?(n=Bt,Ma(t.type)?(t=Su,Su=null,Bt=t):Bt=n):Bt=fn?Cn(t.stateNode.nextSibling):null;return!0}function ul(){Bt=fn=null,Et=!1}function Vc(){var t=Za;return t!==null&&(vn===null?vn=t:vn.push.apply(vn,t),Za=null),t}function cl(t){Za===null?Za=[t]:Za.push(t)}var no=R(null),Ka=null,na=null;function pa(t,n,a){K(no,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=no.current,B(no)}function ao(t,n,a){for(;t!==null;){var e=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,e!==null&&(e.childLanes|=n)):e!==null&&(e.childLanes&n)!==n&&(e.childLanes|=n),t===a)break;t=t.return}}function eo(t,n,a,e){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var o=l.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=l;for(var g=0;g<n.length;g++)if(c.context===n[g]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),ao(i.return,a,t),e||(o=null);break t}i=c.next}}else if(l.tag===18){if(o=l.return,o===null)throw Error(s(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),ao(o,a,t),o=null}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}}function sl(t,n,a,e){t=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var o=l.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=l.type;gn(l.pendingProps.value,o.value)||(t!==null?t.push(c):t=[c])}}else if(l===ut.current){if(o=l.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Bl):t=[Bl])}l=l.return}t!==null&&eo(n,t,a,e),n.flags|=262144}function mi(t){for(t=t.firstContext;t!==null;){if(!gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ja(t){Ka=t,na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function on(t){return Kc(Ka,t)}function vi(t,n){return Ka===null&&Ja(t),Kc(t,n)}function Kc(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},na===null){if(t===null)throw Error(s(308));na=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else na=na.next=n;return a}var uh=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,e){t.push(e)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ch=u.unstable_scheduleCallback,sh=u.unstable_NormalPriority,Kt={$$typeof:V,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lo(){return{controller:new uh,data:new Map,refCount:0}}function fl(t){t.refCount--,t.refCount===0&&ch(sh,function(){t.controller.abort()})}var dl=null,io=0,Oe=0,_e=null;function fh(t,n){if(dl===null){var a=dl=[];io=0,Oe=uu(),_e={status:"pending",value:void 0,then:function(e){a.push(e)}}}return io++,n.then(Jc,Jc),n}function Jc(){if(--io===0&&dl!==null){_e!==null&&(_e.status="fulfilled");var t=dl;dl=null,Oe=0,_e=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dh(t,n){var a=[],e={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){e.status="fulfilled",e.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(e.status="rejected",e.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),e}var Pc=E.S;E.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&fh(t,n),Pc!==null&&Pc(t,n)};var Pa=R(null);function ro(){var t=Pa.current;return t!==null?t:Ht.pooledCache}function bi(t,n){n===null?K(Pa,Pa.current):K(Pa,n.pool)}function Wc(){var t=ro();return t===null?null:{parent:Kt._currentValue,pool:t}}var hl=Error(s(460)),$c=Error(s(474)),gi=Error(s(542)),oo={then:function(){}};function Fc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yi(){}function Ic(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(yi,yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ns(t),t;default:if(typeof n.status=="string")n.then(yi,yi);else{if(t=Ht,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(e){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=e}},function(e){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=e}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,ns(t),t}throw pl=n,hl}}var pl=null;function ts(){if(pl===null)throw Error(s(459));var t=pl;return pl=null,t}function ns(t){if(t===hl||t===gi)throw Error(s(483))}var ma=!1;function uo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function co(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(zt&2)!==0){var l=e.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n,n=fi(t),Xc(t,null,a),n}return si(t,e,n,a),fi(t)}function ml(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var e=n.lanes;e&=t.pendingLanes,a|=e,n.lanes=a,Ju(t,a)}}function so(t,n){var a=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?l=i=n:i=i.next=n}else l=i=n;a={baseState:e.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fo=!1;function vl(){if(fo){var t=_e;if(t!==null)throw t}}function bl(t,n,a,e){fo=!1;var l=t.updateQueue;ma=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var g=c,D=g.next;g.next=null,o===null?i=D:o.next=D,o=g;var U=t.alternate;U!==null&&(U=U.updateQueue,c=U.lastBaseUpdate,c!==o&&(c===null?U.firstBaseUpdate=D:c.next=D,U.lastBaseUpdate=g))}if(i!==null){var X=l.baseState;o=0,U=D=g=null,c=i;do{var w=c.lane&-536870913,k=w!==c.lane;if(k?(jt&w)===w:(e&w)===w){w!==0&&w===Oe&&(fo=!0),U!==null&&(U=U.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var pt=t,dt=c;w=n;var wt=a;switch(dt.tag){case 1:if(pt=dt.payload,typeof pt=="function"){X=pt.call(wt,X,w);break t}X=pt;break t;case 3:pt.flags=pt.flags&-65537|128;case 0:if(pt=dt.payload,w=typeof pt=="function"?pt.call(wt,X,w):pt,w==null)break t;X=h({},X,w);break t;case 2:ma=!0}}w=c.callback,w!==null&&(t.flags|=64,k&&(t.flags|=8192),k=l.callbacks,k===null?l.callbacks=[w]:k.push(w))}else k={lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},U===null?(D=U=k,g=X):U=U.next=k,o|=w;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;k=c,c=k.next,k.next=null,l.lastBaseUpdate=k,l.shared.pending=null}}while(!0);U===null&&(g=X),l.baseState=g,l.firstBaseUpdate=D,l.lastBaseUpdate=U,i===null&&(l.shared.lanes=0),Ta|=o,t.lanes=o,t.memoizedState=X}}function as(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function es(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)as(a[t],n)}var je=R(null),xi=R(0);function ls(t,n){t=ca,K(xi,t),K(je,n),ca=t|n.baseLanes}function ho(){K(xi,ca),K(je,je.current)}function po(){ca=xi.current,B(je),B(xi)}var ga=0,gt=null,Nt=null,Lt=null,Si=!1,Te=!1,Wa=!1,Oi=0,gl=0,Ae=null,hh=0;function Xt(){throw Error(s(321))}function mo(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!gn(t[a],n[a]))return!1;return!0}function vo(t,n,a,e,l,i){return ga=i,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,E.H=t===null||t.memoizedState===null?Xs:Gs,Wa=!1,i=a(e,l),Wa=!1,Te&&(i=rs(n,a,e,l)),is(t),i}function is(t){E.H=zi;var n=Nt!==null&&Nt.next!==null;if(ga=0,Lt=Nt=gt=null,Si=!1,gl=0,Ae=null,n)throw Error(s(300));t===null||$t||(t=t.dependencies,t!==null&&mi(t)&&($t=!0))}function rs(t,n,a,e){gt=t;var l=0;do{if(Te&&(Ae=null),gl=0,Te=!1,25<=l)throw Error(s(301));if(l+=1,Lt=Nt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}E.H=xh,i=n(a,e)}while(Te);return i}function ph(){var t=E.H,n=t.useState()[0];return n=typeof n.then=="function"?yl(n):n,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(gt.flags|=1024),n}function bo(){var t=Oi!==0;return Oi=0,t}function go(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yo(t){if(Si){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Si=!1}ga=0,Lt=Nt=gt=null,Te=!1,gl=Oi=0,Ae=null}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Zt(){if(Nt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var n=Lt===null?gt.memoizedState:Lt.next;if(n!==null)Lt=n,Nt=t;else{if(t===null)throw gt.alternate===null?Error(s(467)):Error(s(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(t){var n=gl;return gl+=1,Ae===null&&(Ae=[]),t=Ic(Ae,t,n),n=gt,(Lt===null?n.memoizedState:Lt.next)===null&&(n=n.alternate,E.H=n===null||n.memoizedState===null?Xs:Gs),t}function _i(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yl(t);if(t.$$typeof===V)return on(t)}throw Error(s(438,String(t)))}function So(t){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var e=gt.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(n={data:e.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xo(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),e=0;e<t;e++)a[e]=at;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function ji(t){var n=Zt();return Oo(n,Nt,t)}function Oo(t,n,a){var e=t.queue;if(e===null)throw Error(s(311));e.lastRenderedReducer=a;var l=t.baseQueue,i=e.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}n.baseQueue=l=i,e.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{n=l.next;var c=o=null,g=null,D=n,U=!1;do{var X=D.lane&-536870913;if(X!==D.lane?(jt&X)===X:(ga&X)===X){var w=D.revertLane;if(w===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),X===Oe&&(U=!0);else if((ga&w)===w){D=D.next,w===Oe&&(U=!0);continue}else X={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(c=g=X,o=i):g=g.next=X,gt.lanes|=w,Ta|=w;X=D.action,Wa&&a(i,X),i=D.hasEagerState?D.eagerState:a(i,X)}else w={lane:X,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},g===null?(c=g=w,o=i):g=g.next=w,gt.lanes|=X,Ta|=X;D=D.next}while(D!==null&&D!==n);if(g===null?o=i:g.next=c,!gn(i,t.memoizedState)&&($t=!0,U&&(a=_e,a!==null)))throw a;t.memoizedState=i,t.baseState=o,t.baseQueue=g,e.lastRenderedState=i}return l===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function _o(t){var n=Zt(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var e=a.dispatch,l=a.pending,i=n.memoizedState;if(l!==null){a.pending=null;var o=l=l.next;do i=t(i,o.action),o=o.next;while(o!==l);gn(i,n.memoizedState)||($t=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),a.lastRenderedState=i}return[i,e]}function os(t,n,a){var e=gt,l=Zt(),i=Et;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=n();var o=!gn((Nt||l).memoizedState,a);o&&(l.memoizedState=a,$t=!0),l=l.queue;var c=ss.bind(null,e,l,t);if(xl(2048,8,c,[t]),l.getSnapshot!==n||o||Lt!==null&&Lt.memoizedState.tag&1){if(e.flags|=2048,Ee(9,Ti(),cs.bind(null,e,l,a,n),null),Ht===null)throw Error(s(349));i||(ga&124)!==0||us(e,n,a)}return a}function us(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=xo(),gt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function cs(t,n,a,e){n.value=a,n.getSnapshot=e,fs(n)&&ds(t)}function ss(t,n,a){return a(function(){fs(n)&&ds(t)})}function fs(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!gn(t,a)}catch{return!0}}function ds(t){var n=ge(t,2);n!==null&&jn(n,t,2)}function jo(t){var n=pn();if(typeof t=="function"){var a=t;if(t=a(),Wa){Gn(!0);try{a()}finally{Gn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function hs(t,n,a,e){return t.baseState=a,Oo(t,Nt,typeof e=="function"?e:ea)}function mh(t,n,a,e,l){if(Ei(t))throw Error(s(485));if(t=n.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};E.T!==null?a(!0):i.isTransition=!1,e(i),a=n.pending,a===null?(i.next=n.pending=i,ps(n,i)):(i.next=a.next,n.pending=a.next=i)}}function ps(t,n){var a=n.action,e=n.payload,l=t.state;if(n.isTransition){var i=E.T,o={};E.T=o;try{var c=a(l,e),g=E.S;g!==null&&g(o,c),ms(t,n,c)}catch(D){To(t,n,D)}finally{E.T=i}}else try{i=a(l,e),ms(t,n,i)}catch(D){To(t,n,D)}}function ms(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){vs(t,n,e)},function(e){return To(t,n,e)}):vs(t,n,a)}function vs(t,n,a){n.status="fulfilled",n.value=a,bs(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,ps(t,a)))}function To(t,n,a){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do n.status="rejected",n.reason=a,bs(n),n=n.next;while(n!==e)}t.action=null}function bs(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function gs(t,n){return n}function ys(t,n){if(Et){var a=Ht.formState;if(a!==null){t:{var e=gt;if(Et){if(Bt){n:{for(var l=Bt,i=Qn;l.nodeType!==8;){if(!i){l=null;break n}if(l=Cn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Bt=Cn(l.nextSibling),e=l.data==="F!";break t}}Va(e)}e=!1}e&&(n=a[0])}}return a=pn(),a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gs,lastRenderedState:n},a.queue=e,a=Cs.bind(null,gt,e),e.dispatch=a,e=jo(!1),i=No.bind(null,gt,!1,e.queue),e=pn(),l={state:n,dispatch:null,action:t,pending:null},e.queue=l,a=mh.bind(null,gt,l,i,a),l.dispatch=a,e.memoizedState=t,[n,a,!1]}function xs(t){var n=Zt();return Ss(n,Nt,t)}function Ss(t,n,a){if(n=Oo(t,n,gs)[0],t=ji(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var e=yl(n)}catch(o){throw o===hl?gi:o}else e=n;n=Zt();var l=n.queue,i=l.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,Ee(9,Ti(),vh.bind(null,l,a),null)),[e,i,t]}function vh(t,n){t.action=n}function Os(t){var n=Zt(),a=Nt;if(a!==null)return Ss(n,a,t);Zt(),n=n.memoizedState,a=Zt();var e=a.queue.dispatch;return a.memoizedState=t,[n,e,!1]}function Ee(t,n,a,e){return t={tag:t,create:a,deps:e,inst:n,next:null},n=gt.updateQueue,n===null&&(n=xo(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(e=a.next,a.next=t,t.next=e,n.lastEffect=t),t}function Ti(){return{destroy:void 0,resource:void 0}}function _s(){return Zt().memoizedState}function Ai(t,n,a,e){var l=pn();e=e===void 0?null:e,gt.flags|=t,l.memoizedState=Ee(1|n,Ti(),a,e)}function xl(t,n,a,e){var l=Zt();e=e===void 0?null:e;var i=l.memoizedState.inst;Nt!==null&&e!==null&&mo(e,Nt.memoizedState.deps)?l.memoizedState=Ee(n,i,a,e):(gt.flags|=t,l.memoizedState=Ee(1|n,i,a,e))}function js(t,n){Ai(8390656,8,t,n)}function Ts(t,n){xl(2048,8,t,n)}function As(t,n){return xl(4,2,t,n)}function Es(t,n){return xl(4,4,t,n)}function zs(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Ms(t,n,a){a=a!=null?a.concat([t]):null,xl(4,4,zs.bind(null,n,t),a)}function Ao(){}function Ns(t,n){var a=Zt();n=n===void 0?null:n;var e=a.memoizedState;return n!==null&&mo(n,e[1])?e[0]:(a.memoizedState=[t,n],t)}function Ds(t,n){var a=Zt();n=n===void 0?null:n;var e=a.memoizedState;if(n!==null&&mo(n,e[1]))return e[0];if(e=t(),Wa){Gn(!0);try{t()}finally{Gn(!1)}}return a.memoizedState=[e,n],e}function Eo(t,n,a){return a===void 0||(ga&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Hf(),gt.lanes|=t,Ta|=t,a)}function ws(t,n,a,e){return gn(a,n)?a:je.current!==null?(t=Eo(t,a,e),gn(t,n)||($t=!0),t):(ga&42)===0?($t=!0,t.memoizedState=a):(t=Hf(),gt.lanes|=t,Ta|=t,n)}function ks(t,n,a,e,l){var i=P.p;P.p=i!==0&&8>i?i:8;var o=E.T,c={};E.T=c,No(t,!1,n,a);try{var g=l(),D=E.S;if(D!==null&&D(c,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var U=dh(g,e);Sl(t,n,U,_n(t))}else Sl(t,n,e,_n(t))}catch(X){Sl(t,n,{then:function(){},status:"rejected",reason:X},_n())}finally{P.p=i,E.T=o}}function bh(){}function zo(t,n,a,e){if(t.tag!==5)throw Error(s(476));var l=Rs(t).queue;ks(t,l,n,et,a===null?bh:function(){return Hs(t),a(e)})}function Rs(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hs(t){var n=Rs(t).next.queue;Sl(t,n,{},_n())}function Mo(){return on(Bl)}function Us(){return Zt().memoizedState}function qs(){return Zt().memoizedState}function gh(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=_n();t=va(a);var e=ba(n,t,a);e!==null&&(jn(e,n,a),ml(e,n,a)),n={cache:lo()},t.payload=n;return}n=n.return}}function yh(t,n,a){var e=_n();a={lane:e,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ei(t)?Bs(n,a):(a=Jr(t,n,a,e),a!==null&&(jn(a,t,e),Ys(a,n,e)))}function Cs(t,n,a){var e=_n();Sl(t,n,a,e)}function Sl(t,n,a,e){var l={lane:e,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ei(t))Bs(n,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,c=i(o,a);if(l.hasEagerState=!0,l.eagerState=c,gn(c,o))return si(t,n,l,0),Ht===null&&ci(),!1}catch{}finally{}if(a=Jr(t,n,l,e),a!==null)return jn(a,t,e),Ys(a,n,e),!0}return!1}function No(t,n,a,e){if(e={lane:2,revertLane:uu(),action:e,hasEagerState:!1,eagerState:null,next:null},Ei(t)){if(n)throw Error(s(479))}else n=Jr(t,a,e,2),n!==null&&jn(n,t,2)}function Ei(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function Bs(t,n){Te=Si=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Ys(t,n,a){if((a&4194048)!==0){var e=n.lanes;e&=t.pendingLanes,a|=e,n.lanes=a,Ju(t,a)}}var zi={readContext:on,use:_i,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useLayoutEffect:Xt,useInsertionEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useSyncExternalStore:Xt,useId:Xt,useHostTransitionStatus:Xt,useFormState:Xt,useActionState:Xt,useOptimistic:Xt,useMemoCache:Xt,useCacheRefresh:Xt},Xs={readContext:on,use:_i,useCallback:function(t,n){return pn().memoizedState=[t,n===void 0?null:n],t},useContext:on,useEffect:js,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ai(4194308,4,zs.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ai(4194308,4,t,n)},useInsertionEffect:function(t,n){Ai(4,2,t,n)},useMemo:function(t,n){var a=pn();n=n===void 0?null:n;var e=t();if(Wa){Gn(!0);try{t()}finally{Gn(!1)}}return a.memoizedState=[e,n],e},useReducer:function(t,n,a){var e=pn();if(a!==void 0){var l=a(n);if(Wa){Gn(!0);try{a(n)}finally{Gn(!1)}}}else l=n;return e.memoizedState=e.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},e.queue=t,t=t.dispatch=yh.bind(null,gt,t),[e.memoizedState,t]},useRef:function(t){var n=pn();return t={current:t},n.memoizedState=t},useState:function(t){t=jo(t);var n=t.queue,a=Cs.bind(null,gt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ao,useDeferredValue:function(t,n){var a=pn();return Eo(a,t,n)},useTransition:function(){var t=jo(!1);return t=ks.bind(null,gt,t.queue,!0,!1),pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var e=gt,l=pn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ht===null)throw Error(s(349));(jt&124)!==0||us(e,n,a)}l.memoizedState=a;var i={value:a,getSnapshot:n};return l.queue=i,js(ss.bind(null,e,i,t),[t]),e.flags|=2048,Ee(9,Ti(),cs.bind(null,e,i,a,n),null),a},useId:function(){var t=pn(),n=Ht.identifierPrefix;if(Et){var a=ta,e=In;a=(e&~(1<<32-sn(e)-1)).toString(32)+a,n="«"+n+"R"+a,a=Oi++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=hh++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Mo,useFormState:ys,useActionState:ys,useOptimistic:function(t){var n=pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=No.bind(null,gt,!0,a),a.dispatch=n,[t,n]},useMemoCache:So,useCacheRefresh:function(){return pn().memoizedState=gh.bind(null,gt)}},Gs={readContext:on,use:_i,useCallback:Ns,useContext:on,useEffect:Ts,useImperativeHandle:Ms,useInsertionEffect:As,useLayoutEffect:Es,useMemo:Ds,useReducer:ji,useRef:_s,useState:function(){return ji(ea)},useDebugValue:Ao,useDeferredValue:function(t,n){var a=Zt();return ws(a,Nt.memoizedState,t,n)},useTransition:function(){var t=ji(ea)[0],n=Zt().memoizedState;return[typeof t=="boolean"?t:yl(t),n]},useSyncExternalStore:os,useId:Us,useHostTransitionStatus:Mo,useFormState:xs,useActionState:xs,useOptimistic:function(t,n){var a=Zt();return hs(a,Nt,t,n)},useMemoCache:So,useCacheRefresh:qs},xh={readContext:on,use:_i,useCallback:Ns,useContext:on,useEffect:Ts,useImperativeHandle:Ms,useInsertionEffect:As,useLayoutEffect:Es,useMemo:Ds,useReducer:_o,useRef:_s,useState:function(){return _o(ea)},useDebugValue:Ao,useDeferredValue:function(t,n){var a=Zt();return Nt===null?Eo(a,t,n):ws(a,Nt.memoizedState,t,n)},useTransition:function(){var t=_o(ea)[0],n=Zt().memoizedState;return[typeof t=="boolean"?t:yl(t),n]},useSyncExternalStore:os,useId:Us,useHostTransitionStatus:Mo,useFormState:Os,useActionState:Os,useOptimistic:function(t,n){var a=Zt();return Nt!==null?hs(a,Nt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:So,useCacheRefresh:qs},ze=null,Ol=0;function Mi(t){var n=Ol;return Ol+=1,ze===null&&(ze=[]),Ic(ze,t,n)}function _l(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ni(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Qs(t){var n=t._init;return n(t._payload)}function Ls(t){function n(A,O){if(t){var M=A.deletions;M===null?(A.deletions=[O],A.flags|=16):M.push(O)}}function a(A,O){if(!t)return null;for(;O!==null;)n(A,O),O=O.sibling;return null}function e(A){for(var O=new Map;A!==null;)A.key!==null?O.set(A.key,A):O.set(A.index,A),A=A.sibling;return O}function l(A,O){return A=Fn(A,O),A.index=0,A.sibling=null,A}function i(A,O,M){return A.index=M,t?(M=A.alternate,M!==null?(M=M.index,M<O?(A.flags|=67108866,O):M):(A.flags|=67108866,O)):(A.flags|=1048576,O)}function o(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function c(A,O,M,C){return O===null||O.tag!==6?(O=Wr(M,A.mode,C),O.return=A,O):(O=l(O,M),O.return=A,O)}function g(A,O,M,C){var it=M.type;return it===T?U(A,O,M.props.children,C,M.key):O!==null&&(O.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===J&&Qs(it)===O.type)?(O=l(O,M.props),_l(O,M),O.return=A,O):(O=di(M.type,M.key,M.props,null,A.mode,C),_l(O,M),O.return=A,O)}function D(A,O,M,C){return O===null||O.tag!==4||O.stateNode.containerInfo!==M.containerInfo||O.stateNode.implementation!==M.implementation?(O=$r(M,A.mode,C),O.return=A,O):(O=l(O,M.children||[]),O.return=A,O)}function U(A,O,M,C,it){return O===null||O.tag!==7?(O=Ga(M,A.mode,C,it),O.return=A,O):(O=l(O,M),O.return=A,O)}function X(A,O,M){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Wr(""+O,A.mode,M),O.return=A,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return M=di(O.type,O.key,O.props,null,A.mode,M),_l(M,O),M.return=A,M;case y:return O=$r(O,A.mode,M),O.return=A,O;case J:var C=O._init;return O=C(O._payload),X(A,O,M)}if(ft(O)||q(O))return O=Ga(O,A.mode,M,null),O.return=A,O;if(typeof O.then=="function")return X(A,Mi(O),M);if(O.$$typeof===V)return X(A,vi(A,O),M);Ni(A,O)}return null}function w(A,O,M,C){var it=O!==null?O.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return it!==null?null:c(A,O,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return M.key===it?g(A,O,M,C):null;case y:return M.key===it?D(A,O,M,C):null;case J:return it=M._init,M=it(M._payload),w(A,O,M,C)}if(ft(M)||q(M))return it!==null?null:U(A,O,M,C,null);if(typeof M.then=="function")return w(A,O,Mi(M),C);if(M.$$typeof===V)return w(A,O,vi(A,M),C);Ni(A,M)}return null}function k(A,O,M,C,it){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return A=A.get(M)||null,c(O,A,""+C,it);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case S:return A=A.get(C.key===null?M:C.key)||null,g(O,A,C,it);case y:return A=A.get(C.key===null?M:C.key)||null,D(O,A,C,it);case J:var xt=C._init;return C=xt(C._payload),k(A,O,M,C,it)}if(ft(C)||q(C))return A=A.get(M)||null,U(O,A,C,it,null);if(typeof C.then=="function")return k(A,O,M,Mi(C),it);if(C.$$typeof===V)return k(A,O,M,vi(O,C),it);Ni(O,C)}return null}function pt(A,O,M,C){for(var it=null,xt=null,ct=O,ht=O=0,It=null;ct!==null&&ht<M.length;ht++){ct.index>ht?(It=ct,ct=null):It=ct.sibling;var At=w(A,ct,M[ht],C);if(At===null){ct===null&&(ct=It);break}t&&ct&&At.alternate===null&&n(A,ct),O=i(At,O,ht),xt===null?it=At:xt.sibling=At,xt=At,ct=It}if(ht===M.length)return a(A,ct),Et&&La(A,ht),it;if(ct===null){for(;ht<M.length;ht++)ct=X(A,M[ht],C),ct!==null&&(O=i(ct,O,ht),xt===null?it=ct:xt.sibling=ct,xt=ct);return Et&&La(A,ht),it}for(ct=e(ct);ht<M.length;ht++)It=k(ct,A,ht,M[ht],C),It!==null&&(t&&It.alternate!==null&&ct.delete(It.key===null?ht:It.key),O=i(It,O,ht),xt===null?it=It:xt.sibling=It,xt=It);return t&&ct.forEach(function(Ra){return n(A,Ra)}),Et&&La(A,ht),it}function dt(A,O,M,C){if(M==null)throw Error(s(151));for(var it=null,xt=null,ct=O,ht=O=0,It=null,At=M.next();ct!==null&&!At.done;ht++,At=M.next()){ct.index>ht?(It=ct,ct=null):It=ct.sibling;var Ra=w(A,ct,At.value,C);if(Ra===null){ct===null&&(ct=It);break}t&&ct&&Ra.alternate===null&&n(A,ct),O=i(Ra,O,ht),xt===null?it=Ra:xt.sibling=Ra,xt=Ra,ct=It}if(At.done)return a(A,ct),Et&&La(A,ht),it;if(ct===null){for(;!At.done;ht++,At=M.next())At=X(A,At.value,C),At!==null&&(O=i(At,O,ht),xt===null?it=At:xt.sibling=At,xt=At);return Et&&La(A,ht),it}for(ct=e(ct);!At.done;ht++,At=M.next())At=k(ct,A,ht,At.value,C),At!==null&&(t&&At.alternate!==null&&ct.delete(At.key===null?ht:At.key),O=i(At,O,ht),xt===null?it=At:xt.sibling=At,xt=At);return t&&ct.forEach(function(Sp){return n(A,Sp)}),Et&&La(A,ht),it}function wt(A,O,M,C){if(typeof M=="object"&&M!==null&&M.type===T&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case S:t:{for(var it=M.key;O!==null;){if(O.key===it){if(it=M.type,it===T){if(O.tag===7){a(A,O.sibling),C=l(O,M.props.children),C.return=A,A=C;break t}}else if(O.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===J&&Qs(it)===O.type){a(A,O.sibling),C=l(O,M.props),_l(C,M),C.return=A,A=C;break t}a(A,O);break}else n(A,O);O=O.sibling}M.type===T?(C=Ga(M.props.children,A.mode,C,M.key),C.return=A,A=C):(C=di(M.type,M.key,M.props,null,A.mode,C),_l(C,M),C.return=A,A=C)}return o(A);case y:t:{for(it=M.key;O!==null;){if(O.key===it)if(O.tag===4&&O.stateNode.containerInfo===M.containerInfo&&O.stateNode.implementation===M.implementation){a(A,O.sibling),C=l(O,M.children||[]),C.return=A,A=C;break t}else{a(A,O);break}else n(A,O);O=O.sibling}C=$r(M,A.mode,C),C.return=A,A=C}return o(A);case J:return it=M._init,M=it(M._payload),wt(A,O,M,C)}if(ft(M))return pt(A,O,M,C);if(q(M)){if(it=q(M),typeof it!="function")throw Error(s(150));return M=it.call(M),dt(A,O,M,C)}if(typeof M.then=="function")return wt(A,O,Mi(M),C);if(M.$$typeof===V)return wt(A,O,vi(A,M),C);Ni(A,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,O!==null&&O.tag===6?(a(A,O.sibling),C=l(O,M),C.return=A,A=C):(a(A,O),C=Wr(M,A.mode,C),C.return=A,A=C),o(A)):a(A,O)}return function(A,O,M,C){try{Ol=0;var it=wt(A,O,M,C);return ze=null,it}catch(ct){if(ct===hl||ct===gi)throw ct;var xt=yn(29,ct,null,A.mode);return xt.lanes=C,xt.return=A,xt}finally{}}}var Me=Ls(!0),Zs=Ls(!1),kn=R(null),Ln=null;function ya(t){var n=t.alternate;K(Jt,Jt.current&1),K(kn,t),Ln===null&&(n===null||je.current!==null||n.memoizedState!==null)&&(Ln=t)}function Vs(t){if(t.tag===22){if(K(Jt,Jt.current),K(kn,t),Ln===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ln=t)}}else xa()}function xa(){K(Jt,Jt.current),K(kn,kn.current)}function la(t){B(kn),Ln===t&&(Ln=null),B(Jt)}var Jt=R(0);function Di(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||xu(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Do(t,n,a,e){n=t.memoizedState,a=a(e,n),a=a==null?n:h({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wo={enqueueSetState:function(t,n,a){t=t._reactInternals;var e=_n(),l=va(e);l.payload=n,a!=null&&(l.callback=a),n=ba(t,l,e),n!==null&&(jn(n,t,e),ml(n,t,e))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var e=_n(),l=va(e);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=ba(t,l,e),n!==null&&(jn(n,t,e),ml(n,t,e))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=_n(),e=va(a);e.tag=2,n!=null&&(e.callback=n),n=ba(t,e,a),n!==null&&(jn(n,t,a),ml(n,t,a))}};function Ks(t,n,a,e,l,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,i,o):n.prototype&&n.prototype.isPureReactComponent?!il(a,e)||!il(l,i):!0}function Js(t,n,a,e){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,e),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,e),n.state!==t&&wo.enqueueReplaceState(n,n.state,null)}function $a(t,n){var a=n;if("ref"in n){a={};for(var e in n)e!=="ref"&&(a[e]=n[e])}if(t=t.defaultProps){a===n&&(a=h({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}var wi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ps(t){wi(t)}function Ws(t){console.error(t)}function $s(t){wi(t)}function ki(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(e){setTimeout(function(){throw e})}}function Fs(t,n,a){try{var e=t.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ko(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){ki(t,n)},a}function Is(t){return t=va(t),t.tag=3,t}function tf(t,n,a,e){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=e.value;t.payload=function(){return l(i)},t.callback=function(){Fs(n,a,e)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Fs(n,a,e),typeof l!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function Sh(t,n,a,e,l){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(n=a.alternate,n!==null&&sl(n,a,l,!0),a=kn.current,a!==null){switch(a.tag){case 13:return Ln===null?eu():a.alternate===null&&Yt===0&&(Yt=3),a.flags&=-257,a.flags|=65536,a.lanes=l,e===oo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([e]):n.add(e),iu(t,e,l)),!1;case 22:return a.flags|=65536,e===oo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([e]):a.add(e)),iu(t,e,l)),!1}throw Error(s(435,a.tag))}return iu(t,e,l),eu(),!1}if(Et)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,e!==to&&(t=Error(s(422),{cause:e}),cl(Mn(t,a)))):(e!==to&&(n=Error(s(423),{cause:e}),cl(Mn(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,e=Mn(e,a),l=ko(t.stateNode,e,l),so(t,l),Yt!==4&&(Yt=2)),!1;var i=Error(s(520),{cause:e});if(i=Mn(i,a),Nl===null?Nl=[i]:Nl.push(i),Yt!==4&&(Yt=2),n===null)return!0;e=Mn(e,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=ko(a.stateNode,e,t),so(a,t),!1;case 1:if(n=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Aa===null||!Aa.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Is(l),tf(l,t,a,e),so(a,l),!1}a=a.return}while(a!==null);return!1}var nf=Error(s(461)),$t=!1;function tn(t,n,a,e){n.child=t===null?Zs(n,null,a,e):Me(n,t.child,a,e)}function af(t,n,a,e,l){a=a.render;var i=n.ref;if("ref"in e){var o={};for(var c in e)c!=="ref"&&(o[c]=e[c])}else o=e;return Ja(n),e=vo(t,n,a,o,i,l),c=bo(),t!==null&&!$t?(go(t,n,l),ia(t,n,l)):(Et&&c&&Fr(n),n.flags|=1,tn(t,n,e,l),n.child)}function ef(t,n,a,e,l){if(t===null){var i=a.type;return typeof i=="function"&&!Pr(i)&&i.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=i,lf(t,n,i,e,l)):(t=di(a.type,null,e,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!Xo(t,l)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:il,a(o,e)&&t.ref===n.ref)return ia(t,n,l)}return n.flags|=1,t=Fn(i,e),t.ref=n.ref,t.return=n,n.child=t}function lf(t,n,a,e,l){if(t!==null){var i=t.memoizedProps;if(il(i,e)&&t.ref===n.ref)if($t=!1,n.pendingProps=e=i,Xo(t,l))(t.flags&131072)!==0&&($t=!0);else return n.lanes=t.lanes,ia(t,n,l)}return Ro(t,n,a,e,l)}function rf(t,n,a){var e=n.pendingProps,l=e.children,i=t!==null?t.memoizedState:null;if(e.mode==="hidden"){if((n.flags&128)!==0){if(e=i!==null?i.baseLanes|a:a,t!==null){for(l=n.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;n.childLanes=i&~e}else n.childLanes=0,n.child=null;return of(t,n,e,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&bi(n,i!==null?i.cachePool:null),i!==null?ls(n,i):ho(),Vs(n);else return n.lanes=n.childLanes=536870912,of(t,n,i!==null?i.baseLanes|a:a,a)}else i!==null?(bi(n,i.cachePool),ls(n,i),xa(),n.memoizedState=null):(t!==null&&bi(n,null),ho(),xa());return tn(t,n,l,a),n.child}function of(t,n,a,e){var l=ro();return l=l===null?null:{parent:Kt._currentValue,pool:l},n.memoizedState={baseLanes:a,cachePool:l},t!==null&&bi(n,null),ho(),Vs(n),t!==null&&sl(t,n,e,!0),null}function Ri(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ro(t,n,a,e,l){return Ja(n),a=vo(t,n,a,e,void 0,l),e=bo(),t!==null&&!$t?(go(t,n,l),ia(t,n,l)):(Et&&e&&Fr(n),n.flags|=1,tn(t,n,a,l),n.child)}function uf(t,n,a,e,l,i){return Ja(n),n.updateQueue=null,a=rs(n,e,a,l),is(t),e=bo(),t!==null&&!$t?(go(t,n,i),ia(t,n,i)):(Et&&e&&Fr(n),n.flags|=1,tn(t,n,a,i),n.child)}function cf(t,n,a,e,l){if(Ja(n),n.stateNode===null){var i=ye,o=a.contextType;typeof o=="object"&&o!==null&&(i=on(o)),i=new a(e,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wo,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=e,i.state=n.memoizedState,i.refs={},uo(n),o=a.contextType,i.context=typeof o=="object"&&o!==null?on(o):ye,i.state=n.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Do(n,a,o,e),i.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&wo.enqueueReplaceState(i,i.state,null),bl(n,e,i,l),vl(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),e=!0}else if(t===null){i=n.stateNode;var c=n.memoizedProps,g=$a(a,c);i.props=g;var D=i.context,U=a.contextType;o=ye,typeof U=="object"&&U!==null&&(o=on(U));var X=a.getDerivedStateFromProps;U=typeof X=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,U||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||D!==o)&&Js(n,i,e,o),ma=!1;var w=n.memoizedState;i.state=w,bl(n,e,i,l),vl(),D=n.memoizedState,c||w!==D||ma?(typeof X=="function"&&(Do(n,a,X,e),D=n.memoizedState),(g=ma||Ks(n,a,g,e,w,D,o))?(U||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=e,n.memoizedState=D),i.props=e,i.state=D,i.context=o,e=g):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),e=!1)}else{i=n.stateNode,co(t,n),o=n.memoizedProps,U=$a(a,o),i.props=U,X=n.pendingProps,w=i.context,D=a.contextType,g=ye,typeof D=="object"&&D!==null&&(g=on(D)),c=a.getDerivedStateFromProps,(D=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==X||w!==g)&&Js(n,i,e,g),ma=!1,w=n.memoizedState,i.state=w,bl(n,e,i,l),vl();var k=n.memoizedState;o!==X||w!==k||ma||t!==null&&t.dependencies!==null&&mi(t.dependencies)?(typeof c=="function"&&(Do(n,a,c,e),k=n.memoizedState),(U=ma||Ks(n,a,U,e,w,k,g)||t!==null&&t.dependencies!==null&&mi(t.dependencies))?(D||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,k,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,k,g)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(n.flags|=1024),n.memoizedProps=e,n.memoizedState=k),i.props=e,i.state=k,i.context=g,e=U):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&w===t.memoizedState||(n.flags|=1024),e=!1)}return i=e,Ri(t,n),e=(n.flags&128)!==0,i||e?(i=n.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&e?(n.child=Me(n,t.child,null,l),n.child=Me(n,null,a,l)):tn(t,n,a,l),n.memoizedState=i.state,t=n.child):t=ia(t,n,l),t}function sf(t,n,a,e){return ul(),n.flags|=256,tn(t,n,a,e),n.child}var Ho={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(t){return{baseLanes:t,cachePool:Wc()}}function qo(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Rn),t}function ff(t,n,a){var e=n.pendingProps,l=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(Jt.current&2)!==0),o&&(l=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(l?ya(n):xa(),Et){var c=Bt,g;if(g=c){t:{for(g=c,c=Qn;g.nodeType!==8;){if(!c){c=null;break t}if(g=Cn(g.nextSibling),g===null){c=null;break t}}c=g}c!==null?(n.memoizedState={dehydrated:c,treeContext:Qa!==null?{id:In,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},g=yn(18,null,null,0),g.stateNode=c,g.return=n,n.child=g,fn=n,Bt=null,g=!0):g=!1}g||Va(n)}if(c=n.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return xu(c)?n.lanes=32:n.lanes=536870912,null;la(n)}return c=e.children,e=e.fallback,l?(xa(),l=n.mode,c=Hi({mode:"hidden",children:c},l),e=Ga(e,l,a,null),c.return=n,e.return=n,c.sibling=e,n.child=c,l=n.child,l.memoizedState=Uo(a),l.childLanes=qo(t,o,a),n.memoizedState=Ho,e):(ya(n),Co(n,c))}if(g=t.memoizedState,g!==null&&(c=g.dehydrated,c!==null)){if(i)n.flags&256?(ya(n),n.flags&=-257,n=Bo(t,n,a)):n.memoizedState!==null?(xa(),n.child=t.child,n.flags|=128,n=null):(xa(),l=e.fallback,c=n.mode,e=Hi({mode:"visible",children:e.children},c),l=Ga(l,c,a,null),l.flags|=2,e.return=n,l.return=n,e.sibling=l,n.child=e,Me(n,t.child,null,a),e=n.child,e.memoizedState=Uo(a),e.childLanes=qo(t,o,a),n.memoizedState=Ho,n=l);else if(ya(n),xu(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var D=o.dgst;o=D,e=Error(s(419)),e.stack="",e.digest=o,cl({value:e,source:null,stack:null}),n=Bo(t,n,a)}else if($t||sl(t,n,a,!1),o=(a&t.childLanes)!==0,$t||o){if(o=Ht,o!==null&&(e=a&-a,e=(e&42)!==0?1:xr(e),e=(e&(o.suspendedLanes|a))!==0?0:e,e!==0&&e!==g.retryLane))throw g.retryLane=e,ge(t,e),jn(o,t,e),nf;c.data==="$?"||eu(),n=Bo(t,n,a)}else c.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=g.treeContext,Bt=Cn(c.nextSibling),fn=n,Et=!0,Za=null,Qn=!1,t!==null&&(Dn[wn++]=In,Dn[wn++]=ta,Dn[wn++]=Qa,In=t.id,ta=t.overflow,Qa=n),n=Co(n,e.children),n.flags|=4096);return n}return l?(xa(),l=e.fallback,c=n.mode,g=t.child,D=g.sibling,e=Fn(g,{mode:"hidden",children:e.children}),e.subtreeFlags=g.subtreeFlags&65011712,D!==null?l=Fn(D,l):(l=Ga(l,c,a,null),l.flags|=2),l.return=n,e.return=n,e.sibling=l,n.child=e,e=l,l=n.child,c=t.child.memoizedState,c===null?c=Uo(a):(g=c.cachePool,g!==null?(D=Kt._currentValue,g=g.parent!==D?{parent:D,pool:D}:g):g=Wc(),c={baseLanes:c.baseLanes|a,cachePool:g}),l.memoizedState=c,l.childLanes=qo(t,o,a),n.memoizedState=Ho,e):(ya(n),a=t.child,t=a.sibling,a=Fn(a,{mode:"visible",children:e.children}),a.return=n,a.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=a,n.memoizedState=null,a)}function Co(t,n){return n=Hi({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hi(t,n){return t=yn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Bo(t,n,a){return Me(n,t.child,null,a),t=Co(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function df(t,n,a){t.lanes|=n;var e=t.alternate;e!==null&&(e.lanes|=n),ao(t.return,n,a)}function Yo(t,n,a,e,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=l)}function hf(t,n,a){var e=n.pendingProps,l=e.revealOrder,i=e.tail;if(tn(t,n,e.children,a),e=Jt.current,(e&2)!==0)e=e&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&df(t,a,n);else if(t.tag===19)df(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}e&=1}switch(K(Jt,e),l){case"forwards":for(a=n.child,l=null;a!==null;)t=a.alternate,t!==null&&Di(t)===null&&(l=a),a=a.sibling;a=l,a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),Yo(n,!1,l,a,i);break;case"backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Di(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Yo(n,!0,a,null,i);break;case"together":Yo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sl(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Fn(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fn(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Xo(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&mi(t)))}function Oh(t,n,a){switch(n.tag){case 3:rt(n,n.stateNode.containerInfo),pa(n,Kt,t.memoizedState.cache),ul();break;case 27:case 5:St(n);break;case 4:rt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var e=n.memoizedState;if(e!==null)return e.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ff(t,n,a):(ya(n),t=ia(t,n,a),t!==null?t.sibling:null);ya(n);break;case 19:var l=(t.flags&128)!==0;if(e=(a&n.childLanes)!==0,e||(sl(t,n,a,!1),e=(a&n.childLanes)!==0),l){if(e)return hf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),K(Jt,Jt.current),e)break;return null;case 22:case 23:return n.lanes=0,rf(t,n,a);case 24:pa(n,Kt,t.memoizedState.cache)}return ia(t,n,a)}function pf(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)$t=!0;else{if(!Xo(t,a)&&(n.flags&128)===0)return $t=!1,Oh(t,n,a);$t=(t.flags&131072)!==0}else $t=!1,Et&&(n.flags&1048576)!==0&&Qc(n,pi,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var e=n.elementType,l=e._init;if(e=l(e._payload),n.type=e,typeof e=="function")Pr(e)?(t=$a(e,t),n.tag=1,n=cf(null,n,e,t,a)):(n.tag=0,n=Ro(null,n,e,t,a));else{if(e!=null){if(l=e.$$typeof,l===ot){n.tag=11,n=af(null,n,e,t,a);break t}else if(l===I){n.tag=14,n=ef(null,n,e,t,a);break t}}throw n=F(e)||e,Error(s(306,n,""))}}return n;case 0:return Ro(t,n,n.type,n.pendingProps,a);case 1:return e=n.type,l=$a(e,n.pendingProps),cf(t,n,e,l,a);case 3:t:{if(rt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));e=n.pendingProps;var i=n.memoizedState;l=i.element,co(t,n),bl(n,e,null,a);var o=n.memoizedState;if(e=o.cache,pa(n,Kt,e),e!==i.cache&&eo(n,[Kt],a,!0),vl(),e=o.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=sf(t,n,e,a);break t}else if(e!==l){l=Mn(Error(s(424)),n),cl(l),n=sf(t,n,e,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Bt=Cn(t.firstChild),fn=n,Et=!0,Za=null,Qn=!0,a=Zs(n,null,e,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ul(),e===l){n=ia(t,n,a);break t}tn(t,n,e,a)}n=n.child}return n;case 26:return Ri(t,n),t===null?(a=gd(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,e=Pi(G.current).createElement(a),e[rn]=n,e[dn]=t,an(e,a,t),Wt(e),n.stateNode=e):n.memoizedState=gd(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return St(n),t===null&&Et&&(e=n.stateNode=md(n.type,n.pendingProps,G.current),fn=n,Qn=!0,l=Bt,Ma(n.type)?(Su=l,Bt=Cn(e.firstChild)):Bt=l),tn(t,n,n.pendingProps.children,a),Ri(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((l=e=Bt)&&(e=Wh(e,n.type,n.pendingProps,Qn),e!==null?(n.stateNode=e,fn=n,Bt=Cn(e.firstChild),Qn=!1,l=!0):l=!1),l||Va(n)),St(n),l=n.type,i=n.pendingProps,o=t!==null?t.memoizedProps:null,e=i.children,bu(l,i)?e=null:o!==null&&bu(l,o)&&(n.flags|=32),n.memoizedState!==null&&(l=vo(t,n,ph,null,null,a),Bl._currentValue=l),Ri(t,n),tn(t,n,e,a),n.child;case 6:return t===null&&Et&&((t=a=Bt)&&(a=$h(a,n.pendingProps,Qn),a!==null?(n.stateNode=a,fn=n,Bt=null,t=!0):t=!1),t||Va(n)),null;case 13:return ff(t,n,a);case 4:return rt(n,n.stateNode.containerInfo),e=n.pendingProps,t===null?n.child=Me(n,null,e,a):tn(t,n,e,a),n.child;case 11:return af(t,n,n.type,n.pendingProps,a);case 7:return tn(t,n,n.pendingProps,a),n.child;case 8:return tn(t,n,n.pendingProps.children,a),n.child;case 12:return tn(t,n,n.pendingProps.children,a),n.child;case 10:return e=n.pendingProps,pa(n,n.type,e.value),tn(t,n,e.children,a),n.child;case 9:return l=n.type._context,e=n.pendingProps.children,Ja(n),l=on(l),e=e(l),n.flags|=1,tn(t,n,e,a),n.child;case 14:return ef(t,n,n.type,n.pendingProps,a);case 15:return lf(t,n,n.type,n.pendingProps,a);case 19:return hf(t,n,a);case 31:return e=n.pendingProps,a=n.mode,e={mode:e.mode,children:e.children},t===null?(a=Hi(e,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Fn(t.child,e),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return rf(t,n,a);case 24:return Ja(n),e=on(Kt),t===null?(l=ro(),l===null&&(l=Ht,i=lo(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),n.memoizedState={parent:e,cache:l},uo(n),pa(n,Kt,l)):((t.lanes&a)!==0&&(co(t,n),bl(n,null,null,a),vl()),l=t.memoizedState,i=n.memoizedState,l.parent!==e?(l={parent:e,cache:e},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),pa(n,Kt,e)):(e=i.cache,pa(n,Kt,e),e!==l.cache&&eo(n,[Kt],a,!0))),tn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function mf(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_d(n)){if(n=kn.current,n!==null&&((jt&4194048)===jt?Ln!==null:(jt&62914560)!==jt&&(jt&536870912)===0||n!==Ln))throw pl=oo,$c;t.flags|=8192}}function Ui(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Vu():536870912,t.lanes|=n,ke|=n)}function jl(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function Ct(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,e=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,e|=l.subtreeFlags&65011712,e|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,e|=l.subtreeFlags,e|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=e,t.childLanes=a,n}function _h(t,n,a){var e=n.pendingProps;switch(Ir(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(n),null;case 1:return Ct(n),null;case 3:return a=n.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),aa(Kt),bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ol(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vc())),Ct(n),null;case 26:return a=n.memoizedState,t===null?(ra(n),a!==null?(Ct(n),mf(n,a)):(Ct(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ra(n),Ct(n),mf(n,a)):(Ct(n),n.flags&=-16777217):(t.memoizedProps!==e&&ra(n),Ct(n),n.flags&=-16777217),null;case 27:Rt(n),a=G.current;var l=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==e&&ra(n);else{if(!e){if(n.stateNode===null)throw Error(s(166));return Ct(n),null}t=j.current,ol(n)?Lc(n):(t=md(l,e,a),n.stateNode=t,ra(n))}return Ct(n),null;case 5:if(Rt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==e&&ra(n);else{if(!e){if(n.stateNode===null)throw Error(s(166));return Ct(n),null}if(t=j.current,ol(n))Lc(n);else{switch(l=Pi(G.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof e.is=="string"?l.createElement("select",{is:e.is}):l.createElement("select"),e.multiple?t.multiple=!0:e.size&&(t.size=e.size);break;default:t=typeof e.is=="string"?l.createElement(a,{is:e.is}):l.createElement(a)}}t[rn]=n,t[dn]=e;t:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break t;for(;l.sibling===null;){if(l.return===null||l.return===n)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=t;t:switch(an(t,a,e),a){case"button":case"input":case"select":case"textarea":t=!!e.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ra(n)}}return Ct(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==e&&ra(n);else{if(typeof e!="string"&&n.stateNode===null)throw Error(s(166));if(t=G.current,ol(n)){if(t=n.stateNode,a=n.memoizedProps,e=null,l=fn,l!==null)switch(l.tag){case 27:case 5:e=l.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||ud(t.nodeValue,a)),t||Va(n)}else t=Pi(t).createTextNode(e),t[rn]=n,n.stateNode=t}return Ct(n),null;case 13:if(e=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ol(n),e!==null&&e.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[rn]=n}else ul(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ct(n),l=!1}else l=Vc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(la(n),n):(la(n),null)}if(la(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=e!==null,t=t!==null&&t.memoizedState!==null,a){e=n.child,l=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(l=e.alternate.memoizedState.cachePool.pool);var i=null;e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==l&&(e.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Ui(n,n.updateQueue),Ct(n),null;case 4:return bt(),t===null&&du(n.stateNode.containerInfo),Ct(n),null;case 10:return aa(n.type),Ct(n),null;case 19:if(B(Jt),l=n.memoizedState,l===null)return Ct(n),null;if(e=(n.flags&128)!==0,i=l.rendering,i===null)if(e)jl(l,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=Di(t),i!==null){for(n.flags|=128,jl(l,!1),t=i.updateQueue,n.updateQueue=t,Ui(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Gc(a,t),a=a.sibling;return K(Jt,Jt.current&1|2),n.child}t=t.sibling}l.tail!==null&&cn()>Bi&&(n.flags|=128,e=!0,jl(l,!1),n.lanes=4194304)}else{if(!e)if(t=Di(i),t!==null){if(n.flags|=128,e=!0,t=t.updateQueue,n.updateQueue=t,Ui(n,t),jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Et)return Ct(n),null}else 2*cn()-l.renderingStartTime>Bi&&a!==536870912&&(n.flags|=128,e=!0,jl(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=cn(),n.sibling=null,t=Jt.current,K(Jt,e?t&1|2:t&1),n):(Ct(n),null);case 22:case 23:return la(n),po(),e=n.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(n.flags|=8192):e&&(n.flags|=8192),e?(a&536870912)!==0&&(n.flags&128)===0&&(Ct(n),n.subtreeFlags&6&&(n.flags|=8192)):Ct(n),a=n.updateQueue,a!==null&&Ui(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(n.flags|=2048),t!==null&&B(Pa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(Kt),Ct(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function jh(t,n){switch(Ir(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(Kt),bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Rt(n),null;case 13:if(la(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ul()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return B(Jt),null;case 4:return bt(),null;case 10:return aa(n.type),null;case 22:case 23:return la(n),po(),t!==null&&B(Pa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(Kt),null;case 25:return null;default:return null}}function vf(t,n){switch(Ir(n),n.tag){case 3:aa(Kt),bt();break;case 26:case 27:case 5:Rt(n);break;case 4:bt();break;case 13:la(n);break;case 19:B(Jt);break;case 10:aa(n.type);break;case 22:case 23:la(n),po(),t!==null&&B(Pa);break;case 24:aa(Kt)}}function Tl(t,n){try{var a=n.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var l=e.next;a=l;do{if((a.tag&t)===t){e=void 0;var i=a.create,o=a.inst;e=i(),o.destroy=e}a=a.next}while(a!==l)}}catch(c){kt(n,n.return,c)}}function Sa(t,n,a){try{var e=n.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var i=l.next;e=i;do{if((e.tag&t)===t){var o=e.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,l=n;var g=a,D=c;try{D()}catch(U){kt(l,g,U)}}}e=e.next}while(e!==i)}}catch(U){kt(n,n.return,U)}}function bf(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{es(n,a)}catch(e){kt(t,t.return,e)}}}function gf(t,n,a){a.props=$a(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(e){kt(t,n,e)}}function Al(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof a=="function"?t.refCleanup=a(e):a.current=e}}catch(l){kt(t,n,l)}}function Zn(t,n){var a=t.ref,e=t.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(l){kt(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){kt(t,n,l)}else a.current=null}function yf(t){var n=t.type,a=t.memoizedProps,e=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break t;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(l){kt(t,t.return,l)}}function Go(t,n,a){try{var e=t.stateNode;Zh(e,t.type,a,n),e[dn]=n}catch(l){kt(t,t.return,l)}}function xf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ma(t.type)||t.tag===4}function Qo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||xf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ma(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lo(t,n,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji));else if(e!==4&&(e===27&&Ma(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Lo(t,n,a),t=t.sibling;t!==null;)Lo(t,n,a),t=t.sibling}function qi(t,n,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(e!==4&&(e===27&&Ma(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(qi(t,n,a),t=t.sibling;t!==null;)qi(t,n,a),t=t.sibling}function Sf(t){var n=t.stateNode,a=t.memoizedProps;try{for(var e=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);an(n,e,a),n[rn]=t,n[dn]=a}catch(i){kt(t,t.return,i)}}var oa=!1,Gt=!1,Zo=!1,Of=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function Th(t,n){if(t=t.containerInfo,mu=nr,t=wc(t),Gr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var l=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var o=0,c=-1,g=-1,D=0,U=0,X=t,w=null;n:for(;;){for(var k;X!==a||l!==0&&X.nodeType!==3||(c=o+l),X!==i||e!==0&&X.nodeType!==3||(g=o+e),X.nodeType===3&&(o+=X.nodeValue.length),(k=X.firstChild)!==null;)w=X,X=k;for(;;){if(X===t)break n;if(w===a&&++D===l&&(c=o),w===i&&++U===e&&(g=o),(k=X.nextSibling)!==null)break;X=w,w=X.parentNode}X=k}a=c===-1||g===-1?null:{start:c,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;for(vu={focusedElem:t,selectionRange:a},nr=!1,Ft=n;Ft!==null;)if(n=Ft,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Ft=t;else for(;Ft!==null;){switch(n=Ft,i=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=n,l=i.memoizedProps,i=i.memoizedState,e=a.stateNode;try{var pt=$a(a.type,l,a.elementType===a.type);t=e.getSnapshotBeforeUpdate(pt,i),e.__reactInternalSnapshotBeforeUpdate=t}catch(dt){kt(a,a.return,dt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)yu(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Ft=t;break}Ft=n.return}}function _f(t,n,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Oa(t,a),e&4&&Tl(5,a);break;case 1:if(Oa(t,a),e&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(o){kt(a,a.return,o)}else{var l=$a(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(o){kt(a,a.return,o)}}e&64&&bf(a),e&512&&Al(a,a.return);break;case 3:if(Oa(t,a),e&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{es(t,n)}catch(o){kt(a,a.return,o)}}break;case 27:n===null&&e&4&&Sf(a);case 26:case 5:Oa(t,a),n===null&&e&4&&yf(a),e&512&&Al(a,a.return);break;case 12:Oa(t,a);break;case 13:Oa(t,a),e&4&&Af(t,a),e&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Rh.bind(null,a),Fh(t,a))));break;case 22:if(e=a.memoizedState!==null||oa,!e){n=n!==null&&n.memoizedState!==null||Gt,l=oa;var i=Gt;oa=e,(Gt=n)&&!i?_a(t,a,(a.subtreeFlags&8772)!==0):Oa(t,a),oa=l,Gt=i}break;case 30:break;default:Oa(t,a)}}function jf(t){var n=t.alternate;n!==null&&(t.alternate=null,jf(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&_r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,mn=!1;function ua(t,n,a){for(a=a.child;a!==null;)Tf(t,n,a),a=a.sibling}function Tf(t,n,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Xn,a)}catch{}switch(a.tag){case 26:Gt||Zn(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Gt||Zn(a,n);var e=Ut,l=mn;Ma(a.type)&&(Ut=a.stateNode,mn=!1),ua(t,n,a),Hl(a.stateNode),Ut=e,mn=l;break;case 5:Gt||Zn(a,n);case 6:if(e=Ut,l=mn,Ut=null,ua(t,n,a),Ut=e,mn=l,Ut!==null)if(mn)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(a.stateNode)}catch(i){kt(a,n,i)}else try{Ut.removeChild(a.stateNode)}catch(i){kt(a,n,i)}break;case 18:Ut!==null&&(mn?(t=Ut,hd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ql(t)):hd(Ut,a.stateNode));break;case 4:e=Ut,l=mn,Ut=a.stateNode.containerInfo,mn=!0,ua(t,n,a),Ut=e,mn=l;break;case 0:case 11:case 14:case 15:Gt||Sa(2,a,n),Gt||Sa(4,a,n),ua(t,n,a);break;case 1:Gt||(Zn(a,n),e=a.stateNode,typeof e.componentWillUnmount=="function"&&gf(a,n,e)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:Gt=(e=Gt)||a.memoizedState!==null,ua(t,n,a),Gt=e;break;default:ua(t,n,a)}}function Af(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ql(t)}catch(a){kt(n,n.return,a)}}function Ah(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Of),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Of),n;default:throw Error(s(435,t.tag))}}function Vo(t,n){var a=Ah(t);n.forEach(function(e){var l=Hh.bind(null,t,e);a.has(e)||(a.add(e),e.then(l,l))})}function xn(t,n){var a=n.deletions;if(a!==null)for(var e=0;e<a.length;e++){var l=a[e],i=t,o=n,c=o;t:for(;c!==null;){switch(c.tag){case 27:if(Ma(c.type)){Ut=c.stateNode,mn=!1;break t}break;case 5:Ut=c.stateNode,mn=!1;break t;case 3:case 4:Ut=c.stateNode.containerInfo,mn=!0;break t}c=c.return}if(Ut===null)throw Error(s(160));Tf(i,o,l),Ut=null,mn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Ef(n,t),n=n.sibling}var qn=null;function Ef(t,n){var a=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xn(n,t),Sn(t),e&4&&(Sa(3,t,t.return),Tl(3,t),Sa(5,t,t.return));break;case 1:xn(n,t),Sn(t),e&512&&(Gt||a===null||Zn(a,a.return)),e&64&&oa&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var l=qn;if(xn(n,t),Sn(t),e&512&&(Gt||a===null||Zn(a,a.return)),e&4){var i=a!==null?a.memoizedState:null;if(e=t.memoizedState,a===null)if(e===null)if(t.stateNode===null){t:{e=t.type,a=t.memoizedProps,l=l.ownerDocument||l;n:switch(e){case"title":i=l.getElementsByTagName("title")[0],(!i||i[We]||i[rn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(e),l.head.insertBefore(i,l.querySelector("head > title"))),an(i,e,a),i[rn]=t,Wt(i),e=i;break t;case"link":var o=Sd("link","href",l).get(e+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break n}}i=l.createElement(e),an(i,e,a),l.head.appendChild(i);break;case"meta":if(o=Sd("meta","content",l).get(e+(a.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break n}}i=l.createElement(e),an(i,e,a),l.head.appendChild(i);break;default:throw Error(s(468,e))}i[rn]=t,Wt(i),e=i}t.stateNode=e}else Od(l,t.type,t.stateNode);else t.stateNode=xd(l,e,t.memoizedProps);else i!==e?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,e===null?Od(l,t.type,t.stateNode):xd(l,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Go(t,t.memoizedProps,a.memoizedProps)}break;case 27:xn(n,t),Sn(t),e&512&&(Gt||a===null||Zn(a,a.return)),a!==null&&e&4&&Go(t,t.memoizedProps,a.memoizedProps);break;case 5:if(xn(n,t),Sn(t),e&512&&(Gt||a===null||Zn(a,a.return)),t.flags&32){l=t.stateNode;try{fe(l,"")}catch(k){kt(t,t.return,k)}}e&4&&t.stateNode!=null&&(l=t.memoizedProps,Go(t,l,a!==null?a.memoizedProps:l)),e&1024&&(Zo=!0);break;case 6:if(xn(n,t),Sn(t),e&4){if(t.stateNode===null)throw Error(s(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e}catch(k){kt(t,t.return,k)}}break;case 3:if(Fi=null,l=qn,qn=Wi(n.containerInfo),xn(n,t),qn=l,Sn(t),e&4&&a!==null&&a.memoizedState.isDehydrated)try{Ql(n.containerInfo)}catch(k){kt(t,t.return,k)}Zo&&(Zo=!1,zf(t));break;case 4:e=qn,qn=Wi(t.stateNode.containerInfo),xn(n,t),Sn(t),qn=e;break;case 12:xn(n,t),Sn(t);break;case 13:xn(n,t),Sn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fo=cn()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Vo(t,e)));break;case 22:l=t.memoizedState!==null;var g=a!==null&&a.memoizedState!==null,D=oa,U=Gt;if(oa=D||l,Gt=U||g,xn(n,t),Gt=U,oa=D,Sn(t),e&8192)t:for(n=t.stateNode,n._visibility=l?n._visibility&-2:n._visibility|1,l&&(a===null||g||oa||Gt||Fa(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){g=a=n;try{if(i=g.stateNode,l)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=g.stateNode;var X=g.memoizedProps.style,w=X!=null&&X.hasOwnProperty("display")?X.display:null;c.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(k){kt(g,g.return,k)}}}else if(n.tag===6){if(a===null){g=n;try{g.stateNode.nodeValue=l?"":g.memoizedProps}catch(k){kt(g,g.return,k)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}e&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Vo(t,a))));break;case 19:xn(n,t),Sn(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Vo(t,e)));break;case 30:break;case 21:break;default:xn(n,t),Sn(t)}}function Sn(t){var n=t.flags;if(n&2){try{for(var a,e=t.return;e!==null;){if(xf(e)){a=e;break}e=e.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,i=Qo(t);qi(t,i,l);break;case 5:var o=a.stateNode;a.flags&32&&(fe(o,""),a.flags&=-33);var c=Qo(t);qi(t,c,o);break;case 3:case 4:var g=a.stateNode.containerInfo,D=Qo(t);Lo(t,D,g);break;default:throw Error(s(161))}}catch(U){kt(t,t.return,U)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function zf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;zf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_f(t,n.alternate,n),n=n.sibling}function Fa(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Fa(n);break;case 1:Zn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&gf(n,n.return,a),Fa(n);break;case 27:Hl(n.stateNode);case 26:case 5:Zn(n,n.return),Fa(n);break;case 22:n.memoizedState===null&&Fa(n);break;case 30:Fa(n);break;default:Fa(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var e=n.alternate,l=t,i=n,o=i.flags;switch(i.tag){case 0:case 11:case 15:_a(l,i,a),Tl(4,i);break;case 1:if(_a(l,i,a),e=i,l=e.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(D){kt(e,e.return,D)}if(e=i,l=e.updateQueue,l!==null){var c=e.stateNode;try{var g=l.shared.hiddenCallbacks;if(g!==null)for(l.shared.hiddenCallbacks=null,l=0;l<g.length;l++)as(g[l],c)}catch(D){kt(e,e.return,D)}}a&&o&64&&bf(i),Al(i,i.return);break;case 27:Sf(i);case 26:case 5:_a(l,i,a),a&&e===null&&o&4&&yf(i),Al(i,i.return);break;case 12:_a(l,i,a);break;case 13:_a(l,i,a),a&&o&4&&Af(l,i);break;case 22:i.memoizedState===null&&_a(l,i,a),Al(i,i.return);break;case 30:break;default:_a(l,i,a)}n=n.sibling}}function Ko(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fl(a))}function Jo(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fl(t))}function Vn(t,n,a,e){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mf(t,n,a,e),n=n.sibling}function Mf(t,n,a,e){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Vn(t,n,a,e),l&2048&&Tl(9,n);break;case 1:Vn(t,n,a,e);break;case 3:Vn(t,n,a,e),l&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fl(t)));break;case 12:if(l&2048){Vn(t,n,a,e),t=n.stateNode;try{var i=n.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(g){kt(n,n.return,g)}}else Vn(t,n,a,e);break;case 13:Vn(t,n,a,e);break;case 23:break;case 22:i=n.stateNode,o=n.alternate,n.memoizedState!==null?i._visibility&2?Vn(t,n,a,e):El(t,n):i._visibility&2?Vn(t,n,a,e):(i._visibility|=2,Ne(t,n,a,e,(n.subtreeFlags&10256)!==0)),l&2048&&Ko(o,n);break;case 24:Vn(t,n,a,e),l&2048&&Jo(n.alternate,n);break;default:Vn(t,n,a,e)}}function Ne(t,n,a,e,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=t,o=n,c=a,g=e,D=o.flags;switch(o.tag){case 0:case 11:case 15:Ne(i,o,c,g,l),Tl(8,o);break;case 23:break;case 22:var U=o.stateNode;o.memoizedState!==null?U._visibility&2?Ne(i,o,c,g,l):El(i,o):(U._visibility|=2,Ne(i,o,c,g,l)),l&&D&2048&&Ko(o.alternate,o);break;case 24:Ne(i,o,c,g,l),l&&D&2048&&Jo(o.alternate,o);break;default:Ne(i,o,c,g,l)}n=n.sibling}}function El(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,e=n,l=e.flags;switch(e.tag){case 22:El(a,e),l&2048&&Ko(e.alternate,e);break;case 24:El(a,e),l&2048&&Jo(e.alternate,e);break;default:El(a,e)}n=n.sibling}}var zl=8192;function De(t){if(t.subtreeFlags&zl)for(t=t.child;t!==null;)Nf(t),t=t.sibling}function Nf(t){switch(t.tag){case 26:De(t),t.flags&zl&&t.memoizedState!==null&&fp(qn,t.memoizedState,t.memoizedProps);break;case 5:De(t);break;case 3:case 4:var n=qn;qn=Wi(t.stateNode.containerInfo),De(t),qn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=zl,zl=16777216,De(t),zl=n):De(t));break;default:De(t)}}function Df(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var e=n[a];Ft=e,kf(e,t)}Df(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wf(t),t=t.sibling}function wf(t){switch(t.tag){case 0:case 11:case 15:Ml(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:Ml(t);break;case 12:Ml(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ci(t)):Ml(t);break;default:Ml(t)}}function Ci(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var e=n[a];Ft=e,kf(e,t)}Df(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Ci(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ci(n));break;default:Ci(n)}t=t.sibling}}function kf(t,n){for(;Ft!==null;){var a=Ft;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:fl(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Ft=e;else t:for(a=t;Ft!==null;){e=Ft;var l=e.sibling,i=e.return;if(jf(e),e===a){Ft=null;break t}if(l!==null){l.return=i,Ft=l;break t}Ft=i}}}var Eh={getCacheForType:function(t){var n=on(Kt),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},zh=typeof WeakMap=="function"?WeakMap:Map,zt=0,Ht=null,Ot=null,jt=0,Mt=0,On=null,ja=!1,we=!1,Po=!1,ca=0,Yt=0,Ta=0,Ia=0,Wo=0,Rn=0,ke=0,Nl=null,vn=null,$o=!1,Fo=0,Bi=1/0,Yi=null,Aa=null,nn=0,Ea=null,Re=null,He=0,Io=0,tu=null,Rf=null,Dl=0,nu=null;function _n(){if((zt&2)!==0&&jt!==0)return jt&-jt;if(E.T!==null){var t=Oe;return t!==0?t:uu()}return Pu()}function Hf(){Rn===0&&(Rn=(jt&536870912)===0||Et?Zu():536870912);var t=kn.current;return t!==null&&(t.flags|=32),Rn}function jn(t,n,a){(t===Ht&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(Ue(t,0),za(t,jt,Rn,!1)),Pe(t,a),((zt&2)===0||t!==Ht)&&(t===Ht&&((zt&2)===0&&(Ia|=a),Yt===4&&za(t,jt,Rn,!1)),Kn(t))}function Uf(t,n,a){if((zt&6)!==0)throw Error(s(327));var e=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Je(t,n),l=e?Dh(t,n):lu(t,n,!0),i=e;do{if(l===0){we&&!e&&za(t,n,0,!1);break}else{if(a=t.current.alternate,i&&!Mh(a)){l=lu(t,n,!1),i=!1;continue}if(l===2){if(i=n,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;t:{var c=t;l=Nl;var g=c.current.memoizedState.isDehydrated;if(g&&(Ue(c,o).flags|=256),o=lu(c,o,!1),o!==2){if(Po&&!g){c.errorRecoveryDisabledLanes|=i,Ia|=i,l=4;break t}i=vn,vn=l,i!==null&&(vn===null?vn=i:vn.push.apply(vn,i))}l=o}if(i=!1,l!==2)continue}}if(l===1){Ue(t,0),za(t,n,0,!0);break}t:{switch(e=t,i=l,i){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:za(e,n,Rn,!ja);break t;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Fo+300-cn(),10<l)){if(za(e,n,Rn,!ja),$l(e,0,!0)!==0)break t;e.timeoutHandle=fd(qf.bind(null,e,a,vn,Yi,$o,n,Rn,Ia,ke,ja,i,2,-0,0),l);break t}qf(e,a,vn,Yi,$o,n,Rn,Ia,ke,ja,i,0,-0,0)}}break}while(!0);Kn(t)}function qf(t,n,a,e,l,i,o,c,g,D,U,X,w,k){if(t.timeoutHandle=-1,X=n.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(Cl={stylesheets:null,count:0,unsuspend:sp},Nf(n),X=dp(),X!==null)){t.cancelPendingCommit=X(Lf.bind(null,t,n,i,a,e,l,o,c,g,U,1,w,k)),za(t,i,o,!D);return}Lf(t,n,i,a,e,l,o,c,g)}function Mh(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var l=a[e],i=l.getSnapshot;l=l.value;try{if(!gn(i(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,a,e){n&=~Wo,n&=~Ia,t.suspendedLanes|=n,t.pingedLanes&=~n,e&&(t.warmLanes|=n),e=t.expirationTimes;for(var l=n;0<l;){var i=31-sn(l),o=1<<i;e[i]=-1,l&=~o}a!==0&&Ku(t,a,n)}function Xi(){return(zt&6)===0?(wl(0),!1):!0}function au(){if(Ot!==null){if(Mt===0)var t=Ot.return;else t=Ot,na=Ka=null,yo(t),ze=null,Ol=0,t=Ot;for(;t!==null;)vf(t.alternate,t),t=t.return;Ot=null}}function Ue(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Kh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),au(),Ht=t,Ot=a=Fn(t.current,null),jt=n,Mt=0,On=null,ja=!1,we=Je(t,n),Po=!1,ke=Rn=Wo=Ia=Ta=Yt=0,vn=Nl=null,$o=!1,(n&8)!==0&&(n|=n&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=n;0<e;){var l=31-sn(e),i=1<<l;n|=t[l],e&=~i}return ca=n,ci(),a}function Cf(t,n){gt=null,E.H=zi,n===hl||n===gi?(n=ts(),Mt=3):n===$c?(n=ts(),Mt=4):Mt=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,On=n,Ot===null&&(Yt=1,ki(t,Mn(n,t.current)))}function Bf(){var t=E.H;return E.H=zi,t===null?zi:t}function Yf(){var t=E.A;return E.A=Eh,t}function eu(){Yt=4,ja||(jt&4194048)!==jt&&kn.current!==null||(we=!0),(Ta&134217727)===0&&(Ia&134217727)===0||Ht===null||za(Ht,jt,Rn,!1)}function lu(t,n,a){var e=zt;zt|=2;var l=Bf(),i=Yf();(Ht!==t||jt!==n)&&(Yi=null,Ue(t,n)),n=!1;var o=Yt;t:do try{if(Mt!==0&&Ot!==null){var c=Ot,g=On;switch(Mt){case 8:au(),o=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var D=Mt;if(Mt=0,On=null,qe(t,c,g,D),a&&we){o=0;break t}break;default:D=Mt,Mt=0,On=null,qe(t,c,g,D)}}Nh(),o=Yt;break}catch(U){Cf(t,U)}while(!0);return n&&t.shellSuspendCounter++,na=Ka=null,zt=e,E.H=l,E.A=i,Ot===null&&(Ht=null,jt=0,ci()),o}function Nh(){for(;Ot!==null;)Xf(Ot)}function Dh(t,n){var a=zt;zt|=2;var e=Bf(),l=Yf();Ht!==t||jt!==n?(Yi=null,Bi=cn()+500,Ue(t,n)):we=Je(t,n);t:do try{if(Mt!==0&&Ot!==null){n=Ot;var i=On;n:switch(Mt){case 1:Mt=0,On=null,qe(t,n,i,1);break;case 2:case 9:if(Fc(i)){Mt=0,On=null,Gf(n);break}n=function(){Mt!==2&&Mt!==9||Ht!==t||(Mt=7),Kn(t)},i.then(n,n);break t;case 3:Mt=7;break t;case 4:Mt=5;break t;case 7:Fc(i)?(Mt=0,On=null,Gf(n)):(Mt=0,On=null,qe(t,n,i,7));break;case 5:var o=null;switch(Ot.tag){case 26:o=Ot.memoizedState;case 5:case 27:var c=Ot;if(!o||_d(o)){Mt=0,On=null;var g=c.sibling;if(g!==null)Ot=g;else{var D=c.return;D!==null?(Ot=D,Gi(D)):Ot=null}break n}}Mt=0,On=null,qe(t,n,i,5);break;case 6:Mt=0,On=null,qe(t,n,i,6);break;case 8:au(),Yt=6;break t;default:throw Error(s(462))}}wh();break}catch(U){Cf(t,U)}while(!0);return na=Ka=null,E.H=e,E.A=l,zt=a,Ot!==null?0:(Ht=null,jt=0,ci(),Yt)}function wh(){for(;Ot!==null&&!Vt();)Xf(Ot)}function Xf(t){var n=pf(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Gi(t):Ot=n}function Gf(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=uf(a,n,n.pendingProps,n.type,void 0,jt);break;case 11:n=uf(a,n,n.pendingProps,n.type.render,n.ref,jt);break;case 5:yo(n);default:vf(a,n),n=Ot=Gc(n,ca),n=pf(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Gi(t):Ot=n}function qe(t,n,a,e){na=Ka=null,yo(n),ze=null,Ol=0;var l=n.return;try{if(Sh(t,l,n,a,jt)){Yt=1,ki(t,Mn(a,t.current)),Ot=null;return}}catch(i){if(l!==null)throw Ot=l,i;Yt=1,ki(t,Mn(a,t.current)),Ot=null;return}n.flags&32768?(Et||e===1?t=!0:we||(jt&536870912)!==0?t=!1:(ja=t=!0,(e===2||e===9||e===3||e===6)&&(e=kn.current,e!==null&&e.tag===13&&(e.flags|=16384))),Qf(n,t)):Gi(n)}function Gi(t){var n=t;do{if((n.flags&32768)!==0){Qf(n,ja);return}t=n.return;var a=_h(n.alternate,n,ca);if(a!==null){Ot=a;return}if(n=n.sibling,n!==null){Ot=n;return}Ot=n=t}while(n!==null);Yt===0&&(Yt=5)}function Qf(t,n){do{var a=jh(t.alternate,t);if(a!==null){a.flags&=32767,Ot=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ot=t;return}Ot=t=a}while(t!==null);Yt=6,Ot=null}function Lf(t,n,a,e,l,i,o,c,g){t.cancelPendingCommit=null;do Qi();while(nn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(i=n.lanes|n.childLanes,i|=Kr,s0(t,a,i,o,c,g),t===Ht&&(Ot=Ht=null,jt=0),Re=n,Ea=t,He=a,Io=i,tu=l,Rf=e,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Uh(Ua,function(){return Pf(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||e){e=E.T,E.T=null,l=P.p,P.p=2,o=zt,zt|=4;try{Th(t,n,a)}finally{zt=o,P.p=l,E.T=e}}nn=1,Zf(),Vf(),Kf()}}function Zf(){if(nn===1){nn=0;var t=Ea,n=Re,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var e=P.p;P.p=2;var l=zt;zt|=4;try{Ef(n,t);var i=vu,o=wc(t.containerInfo),c=i.focusedElem,g=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&Dc(c.ownerDocument.documentElement,c)){if(g!==null&&Gr(c)){var D=g.start,U=g.end;if(U===void 0&&(U=D),"selectionStart"in c)c.selectionStart=D,c.selectionEnd=Math.min(U,c.value.length);else{var X=c.ownerDocument||document,w=X&&X.defaultView||window;if(w.getSelection){var k=w.getSelection(),pt=c.textContent.length,dt=Math.min(g.start,pt),wt=g.end===void 0?dt:Math.min(g.end,pt);!k.extend&&dt>wt&&(o=wt,wt=dt,dt=o);var A=Nc(c,dt),O=Nc(c,wt);if(A&&O&&(k.rangeCount!==1||k.anchorNode!==A.node||k.anchorOffset!==A.offset||k.focusNode!==O.node||k.focusOffset!==O.offset)){var M=X.createRange();M.setStart(A.node,A.offset),k.removeAllRanges(),dt>wt?(k.addRange(M),k.extend(O.node,O.offset)):(M.setEnd(O.node,O.offset),k.addRange(M))}}}}for(X=[],k=c;k=k.parentNode;)k.nodeType===1&&X.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<X.length;c++){var C=X[c];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}nr=!!mu,vu=mu=null}finally{zt=l,P.p=e,E.T=a}}t.current=n,nn=2}}function Vf(){if(nn===2){nn=0;var t=Ea,n=Re,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var e=P.p;P.p=2;var l=zt;zt|=4;try{_f(t,n.alternate,n)}finally{zt=l,P.p=e,E.T=a}}nn=3}}function Kf(){if(nn===4||nn===3){nn=0,en();var t=Ea,n=Re,a=He,e=Rf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?nn=5:(nn=0,Re=Ea=null,Jf(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(Aa=null),Sr(a),n=n.stateNode,ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Xn,n,void 0,(n.current.flags&128)===128)}catch{}if(e!==null){n=E.T,l=P.p,P.p=2,E.T=null;try{for(var i=t.onRecoverableError,o=0;o<e.length;o++){var c=e[o];i(c.value,{componentStack:c.stack})}}finally{E.T=n,P.p=l}}(He&3)!==0&&Qi(),Kn(t),l=t.pendingLanes,(a&4194090)!==0&&(l&42)!==0?t===nu?Dl++:(Dl=0,nu=t):Dl=0,wl(0)}}function Jf(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fl(n)))}function Qi(t){return Zf(),Vf(),Kf(),Pf()}function Pf(){if(nn!==5)return!1;var t=Ea,n=Io;Io=0;var a=Sr(He),e=E.T,l=P.p;try{P.p=32>a?32:a,E.T=null,a=tu,tu=null;var i=Ea,o=He;if(nn=0,Re=Ea=null,He=0,(zt&6)!==0)throw Error(s(331));var c=zt;if(zt|=4,wf(i.current),Mf(i,i.current,o,a),zt=c,wl(0,!1),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Xn,i)}catch{}return!0}finally{P.p=l,E.T=e,Jf(t,n)}}function Wf(t,n,a){n=Mn(a,n),n=ko(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(Pe(t,2),Kn(t))}function kt(t,n,a){if(t.tag===3)Wf(t,t,a);else for(;n!==null;){if(n.tag===3){Wf(n,t,a);break}else if(n.tag===1){var e=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Aa===null||!Aa.has(e))){t=Mn(a,t),a=Is(2),e=ba(n,a,2),e!==null&&(tf(a,e,n,t),Pe(e,2),Kn(e));break}}n=n.return}}function iu(t,n,a){var e=t.pingCache;if(e===null){e=t.pingCache=new zh;var l=new Set;e.set(n,l)}else l=e.get(n),l===void 0&&(l=new Set,e.set(n,l));l.has(a)||(Po=!0,l.add(a),t=kh.bind(null,t,n,a),n.then(t,t))}function kh(t,n,a){var e=t.pingCache;e!==null&&e.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ht===t&&(jt&a)===a&&(Yt===4||Yt===3&&(jt&62914560)===jt&&300>cn()-Fo?(zt&2)===0&&Ue(t,0):Wo|=a,ke===jt&&(ke=0)),Kn(t)}function $f(t,n){n===0&&(n=Vu()),t=ge(t,n),t!==null&&(Pe(t,n),Kn(t))}function Rh(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$f(t,a)}function Hh(t,n){var a=0;switch(t.tag){case 13:var e=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(s(314))}e!==null&&e.delete(n),$f(t,a)}function Uh(t,n){return Tt(t,n)}var Li=null,Ce=null,ru=!1,Zi=!1,ou=!1,te=0;function Kn(t){t!==Ce&&t.next===null&&(Ce===null?Li=Ce=t:Ce=Ce.next=t),Zi=!0,ru||(ru=!0,Ch())}function wl(t,n){if(!ou&&Zi){ou=!0;do for(var a=!1,e=Li;e!==null;){if(t!==0){var l=e.pendingLanes;if(l===0)var i=0;else{var o=e.suspendedLanes,c=e.pingedLanes;i=(1<<31-sn(42|t)+1)-1,i&=l&~(o&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,nd(e,i))}else i=jt,i=$l(e,e===Ht?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||Je(e,i)||(a=!0,nd(e,i));e=e.next}while(a);ou=!1}}function qh(){Ff()}function Ff(){Zi=ru=!1;var t=0;te!==0&&(Vh()&&(t=te),te=0);for(var n=cn(),a=null,e=Li;e!==null;){var l=e.next,i=If(e,n);i===0?(e.next=null,a===null?Li=l:a.next=l,l===null&&(Ce=a)):(a=e,(t!==0||(i&3)!==0)&&(Zi=!0)),e=l}wl(t)}function If(t,n){for(var a=t.suspendedLanes,e=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-sn(i),c=1<<o,g=l[o];g===-1?((c&a)===0||(c&e)!==0)&&(l[o]=c0(c,n)):g<=n&&(t.expiredLanes|=c),i&=~c}if(n=Ht,a=jt,a=$l(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,a===0||t===n&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&yt(e),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Je(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(e!==null&&yt(e),Sr(a)){case 2:case 8:a=Pl;break;case 32:a=Ua;break;case 268435456:a=ne;break;default:a=Ua}return e=td.bind(null,t),a=Tt(a,e),t.callbackPriority=n,t.callbackNode=a,n}return e!==null&&e!==null&&yt(e),t.callbackPriority=2,t.callbackNode=null,2}function td(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Qi()&&t.callbackNode!==a)return null;var e=jt;return e=$l(t,t===Ht?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Uf(t,e,n),If(t,cn()),t.callbackNode!=null&&t.callbackNode===a?td.bind(null,t):null)}function nd(t,n){if(Qi())return null;Uf(t,n,!0)}function Ch(){Jh(function(){(zt&6)!==0?Tt(Jl,qh):Ff()})}function uu(){return te===0&&(te=Zu()),te}function ad(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ai(""+t)}function ed(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Bh(t,n,a,e,l){if(n==="submit"&&a&&a.stateNode===l){var i=ad((l[dn]||null).action),o=e.submitter;o&&(n=(n=o[dn]||null)?ad(n.formAction):o.getAttribute("formAction"),n!==null&&(i=n,o=null));var c=new ri("action","action",null,e,l);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(te!==0){var g=o?ed(l,o):new FormData(l);zo(a,{pending:!0,data:g,method:l.method,action:i},null,g)}}else typeof i=="function"&&(c.preventDefault(),g=o?ed(l,o):new FormData(l),zo(a,{pending:!0,data:g,method:l.method,action:i},i,g))},currentTarget:l}]})}}for(var cu=0;cu<Vr.length;cu++){var su=Vr[cu],Yh=su.toLowerCase(),Xh=su[0].toUpperCase()+su.slice(1);Un(Yh,"on"+Xh)}Un(Hc,"onAnimationEnd"),Un(Uc,"onAnimationIteration"),Un(qc,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(lh,"onTransitionRun"),Un(ih,"onTransitionStart"),Un(rh,"onTransitionCancel"),Un(Cc,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function ld(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var e=t[a],l=e.event;e=e.listeners;t:{var i=void 0;if(n)for(var o=e.length-1;0<=o;o--){var c=e[o],g=c.instance,D=c.currentTarget;if(c=c.listener,g!==i&&l.isPropagationStopped())break t;i=c,l.currentTarget=D;try{i(l)}catch(U){wi(U)}l.currentTarget=null,i=g}else for(o=0;o<e.length;o++){if(c=e[o],g=c.instance,D=c.currentTarget,c=c.listener,g!==i&&l.isPropagationStopped())break t;i=c,l.currentTarget=D;try{i(l)}catch(U){wi(U)}l.currentTarget=null,i=g}}}}function _t(t,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var e=t+"__bubble";a.has(e)||(id(n,t,2,!1),a.add(e))}function fu(t,n,a){var e=0;n&&(e|=4),id(a,t,e,n)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function du(t){if(!t[Vi]){t[Vi]=!0,$u.forEach(function(a){a!=="selectionchange"&&(Gh.has(a)||fu(a,!1,t),fu(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Vi]||(n[Vi]=!0,fu("selectionchange",!1,n))}}function id(t,n,a,e){switch(Md(n)){case 2:var l=mp;break;case 8:l=vp;break;default:l=Au}a=l.bind(null,n,a,t),l=void 0,!kr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),e?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function hu(t,n,a,e,l){var i=e;if((n&1)===0&&(n&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var c=e.stateNode.containerInfo;if(c===l)break;if(o===4)for(o=e.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===l)return;o=o.return}for(;c!==null;){if(o=ie(c),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){e=i=o;continue t}c=c.parentNode}}e=e.return}fc(function(){var D=i,U=Dr(a),X=[];t:{var w=Bc.get(t);if(w!==void 0){var k=ri,pt=t;switch(t){case"keypress":if(li(a)===0)break t;case"keydown":case"keyup":k=U0;break;case"focusin":pt="focus",k=qr;break;case"focusout":pt="blur",k=qr;break;case"beforeblur":case"afterblur":k=qr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=B0;break;case Hc:case Uc:case qc:k=E0;break;case Cc:k=X0;break;case"scroll":case"scrollend":k=O0;break;case"wheel":k=Q0;break;case"copy":case"cut":case"paste":k=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=vc;break;case"toggle":case"beforetoggle":k=Z0}var dt=(n&4)!==0,wt=!dt&&(t==="scroll"||t==="scrollend"),A=dt?w!==null?w+"Capture":null:w;dt=[];for(var O=D,M;O!==null;){var C=O;if(M=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||M===null||A===null||(C=Fe(O,A),C!=null&&dt.push(Rl(O,C,M))),wt)break;O=O.return}0<dt.length&&(w=new k(w,pt,null,a,U),X.push({event:w,listeners:dt}))}}if((n&7)===0){t:{if(w=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",w&&a!==Nr&&(pt=a.relatedTarget||a.fromElement)&&(ie(pt)||pt[le]))break t;if((k||w)&&(w=U.window===U?U:(w=U.ownerDocument)?w.defaultView||w.parentWindow:window,k?(pt=a.relatedTarget||a.toElement,k=D,pt=pt?ie(pt):null,pt!==null&&(wt=N(pt),dt=pt.tag,pt!==wt||dt!==5&&dt!==27&&dt!==6)&&(pt=null)):(k=null,pt=D),k!==pt)){if(dt=pc,C="onMouseLeave",A="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(dt=vc,C="onPointerLeave",A="onPointerEnter",O="pointer"),wt=k==null?w:$e(k),M=pt==null?w:$e(pt),w=new dt(C,O+"leave",k,a,U),w.target=wt,w.relatedTarget=M,C=null,ie(U)===D&&(dt=new dt(A,O+"enter",pt,a,U),dt.target=M,dt.relatedTarget=wt,C=dt),wt=C,k&&pt)n:{for(dt=k,A=pt,O=0,M=dt;M;M=Be(M))O++;for(M=0,C=A;C;C=Be(C))M++;for(;0<O-M;)dt=Be(dt),O--;for(;0<M-O;)A=Be(A),M--;for(;O--;){if(dt===A||A!==null&&dt===A.alternate)break n;dt=Be(dt),A=Be(A)}dt=null}else dt=null;k!==null&&rd(X,w,k,dt,!1),pt!==null&&wt!==null&&rd(X,wt,pt,dt,!0)}}t:{if(w=D?$e(D):window,k=w.nodeName&&w.nodeName.toLowerCase(),k==="select"||k==="input"&&w.type==="file")var it=jc;else if(Oc(w))if(Tc)it=nh;else{it=I0;var xt=F0}else k=w.nodeName,!k||k.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?D&&Mr(D.elementType)&&(it=jc):it=th;if(it&&(it=it(t,D))){_c(X,it,a,U);break t}xt&&xt(t,w,D),t==="focusout"&&D&&w.type==="number"&&D.memoizedProps.value!=null&&zr(w,"number",w.value)}switch(xt=D?$e(D):window,t){case"focusin":(Oc(xt)||xt.contentEditable==="true")&&(me=xt,Qr=D,rl=null);break;case"focusout":rl=Qr=me=null;break;case"mousedown":Lr=!0;break;case"contextmenu":case"mouseup":case"dragend":Lr=!1,kc(X,a,U);break;case"selectionchange":if(eh)break;case"keydown":case"keyup":kc(X,a,U)}var ct;if(Br)t:{switch(t){case"compositionstart":var ht="onCompositionStart";break t;case"compositionend":ht="onCompositionEnd";break t;case"compositionupdate":ht="onCompositionUpdate";break t}ht=void 0}else pe?xc(t,a)&&(ht="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(bc&&a.locale!=="ko"&&(pe||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&pe&&(ct=dc()):(ha=U,Rr="value"in ha?ha.value:ha.textContent,pe=!0)),xt=Ki(D,ht),0<xt.length&&(ht=new mc(ht,t,null,a,U),X.push({event:ht,listeners:xt}),ct?ht.data=ct:(ct=Sc(a),ct!==null&&(ht.data=ct)))),(ct=K0?J0(t,a):P0(t,a))&&(ht=Ki(D,"onBeforeInput"),0<ht.length&&(xt=new mc("onBeforeInput","beforeinput",null,a,U),X.push({event:xt,listeners:ht}),xt.data=ct)),Bh(X,t,D,a,U)}ld(X,n)})}function Rl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ki(t,n){for(var a=n+"Capture",e=[];t!==null;){var l=t,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Fe(t,a),l!=null&&e.unshift(Rl(t,l,i)),l=Fe(t,n),l!=null&&e.push(Rl(t,l,i))),t.tag===3)return e;t=t.return}return[]}function Be(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function rd(t,n,a,e,l){for(var i=n._reactName,o=[];a!==null&&a!==e;){var c=a,g=c.alternate,D=c.stateNode;if(c=c.tag,g!==null&&g===e)break;c!==5&&c!==26&&c!==27||D===null||(g=D,l?(D=Fe(a,i),D!=null&&o.unshift(Rl(a,D,g))):l||(D=Fe(a,i),D!=null&&o.push(Rl(a,D,g)))),a=a.return}o.length!==0&&t.push({event:n,listeners:o})}var Qh=/\r\n?/g,Lh=/\u0000|\uFFFD/g;function od(t){return(typeof t=="string"?t:""+t).replace(Qh,`
`).replace(Lh,"")}function ud(t,n){return n=od(n),od(t)===n}function Ji(){}function Dt(t,n,a,e,l,i){switch(a){case"children":typeof e=="string"?n==="body"||n==="textarea"&&e===""||fe(t,e):(typeof e=="number"||typeof e=="bigint")&&n!=="body"&&fe(t,""+e);break;case"className":Il(t,"class",e);break;case"tabIndex":Il(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Il(t,a,e);break;case"style":cc(t,e,i);break;case"data":if(n!=="object"){Il(t,"data",e);break}case"src":case"href":if(e===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=ai(""+e),t.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(n!=="input"&&Dt(t,n,"name",l.name,l,null),Dt(t,n,"formEncType",l.formEncType,l,null),Dt(t,n,"formMethod",l.formMethod,l,null),Dt(t,n,"formTarget",l.formTarget,l,null)):(Dt(t,n,"encType",l.encType,l,null),Dt(t,n,"method",l.method,l,null),Dt(t,n,"target",l.target,l,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=ai(""+e),t.setAttribute(a,e);break;case"onClick":e!=null&&(t.onclick=Ji);break;case"onScroll":e!=null&&_t("scroll",t);break;case"onScrollEnd":e!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(s(61));if(a=e.__html,a!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}a=ai(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""+e):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":e===!0?t.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,e):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(a,e):t.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(a):t.setAttribute(a,e);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Fl(t,"popover",e);break;case"xlinkActuate":Wn(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Wn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Wn(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Wn(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Wn(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Wn(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Wn(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Wn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Wn(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Fl(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=x0.get(a)||a,Fl(t,a,e))}}function pu(t,n,a,e,l,i){switch(a){case"style":cc(t,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(s(61));if(a=e.__html,a!=null){if(l.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof e=="string"?fe(t,e):(typeof e=="number"||typeof e=="bigint")&&fe(t,""+e);break;case"onScroll":e!=null&&_t("scroll",t);break;case"onScrollEnd":e!=null&&_t("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fu.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),n=a.slice(2,l?a.length-7:void 0),i=t[dn]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(n,i,l),typeof e=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,e,l);break t}a in t?t[a]=e:e===!0?t.setAttribute(a,""):Fl(t,a,e)}}}function an(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var e=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":e=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(t,n,i,o,a,null)}}l&&Dt(t,n,"srcSet",a.srcSet,a,null),e&&Dt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var c=i=o=l=null,g=null,D=null;for(e in a)if(a.hasOwnProperty(e)){var U=a[e];if(U!=null)switch(e){case"name":l=U;break;case"type":o=U;break;case"checked":g=U;break;case"defaultChecked":D=U;break;case"value":i=U;break;case"defaultValue":c=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,n));break;default:Dt(t,n,e,U,a,null)}}ic(t,i,c,g,D,o,l,!1),ti(t);return;case"select":_t("invalid",t),e=o=i=null;for(l in a)if(a.hasOwnProperty(l)&&(c=a[l],c!=null))switch(l){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":e=c;default:Dt(t,n,l,c,a,null)}n=i,a=o,t.multiple=!!e,n!=null?se(t,!!e,n,!1):a!=null&&se(t,!!e,a,!0);return;case"textarea":_t("invalid",t),i=l=e=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":e=c;break;case"defaultValue":l=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:Dt(t,n,o,c,a,null)}oc(t,e,l,i),ti(t);return;case"option":for(g in a)if(a.hasOwnProperty(g)&&(e=a[g],e!=null))switch(g){case"selected":t.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:Dt(t,n,g,e,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(e=0;e<kl.length;e++)_t(kl[e],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in a)if(a.hasOwnProperty(D)&&(e=a[D],e!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Dt(t,n,D,e,a,null)}return;default:if(Mr(n)){for(U in a)a.hasOwnProperty(U)&&(e=a[U],e!==void 0&&pu(t,n,U,e,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(e=a[c],e!=null&&Dt(t,n,c,e,a,null))}function Zh(t,n,a,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,o=null,c=null,g=null,D=null,U=null;for(k in a){var X=a[k];if(a.hasOwnProperty(k)&&X!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":g=X;default:e.hasOwnProperty(k)||Dt(t,n,k,null,e,X)}}for(var w in e){var k=e[w];if(X=a[w],e.hasOwnProperty(w)&&(k!=null||X!=null))switch(w){case"type":i=k;break;case"name":l=k;break;case"checked":D=k;break;case"defaultChecked":U=k;break;case"value":o=k;break;case"defaultValue":c=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,n));break;default:k!==X&&Dt(t,n,w,k,e,X)}}Er(t,o,c,g,D,U,i,l);return;case"select":k=o=c=w=null;for(i in a)if(g=a[i],a.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":k=g;default:e.hasOwnProperty(i)||Dt(t,n,i,null,e,g)}for(l in e)if(i=e[l],g=a[l],e.hasOwnProperty(l)&&(i!=null||g!=null))switch(l){case"value":w=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==g&&Dt(t,n,l,i,e,g)}n=c,a=o,e=k,w!=null?se(t,!!a,w,!1):!!e!=!!a&&(n!=null?se(t,!!a,n,!0):se(t,!!a,a?[]:"",!1));return;case"textarea":k=w=null;for(c in a)if(l=a[c],a.hasOwnProperty(c)&&l!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Dt(t,n,c,null,e,l)}for(o in e)if(l=e[o],i=a[o],e.hasOwnProperty(o)&&(l!=null||i!=null))switch(o){case"value":w=l;break;case"defaultValue":k=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==i&&Dt(t,n,o,l,e,i)}rc(t,w,k);return;case"option":for(var pt in a)if(w=a[pt],a.hasOwnProperty(pt)&&w!=null&&!e.hasOwnProperty(pt))switch(pt){case"selected":t.selected=!1;break;default:Dt(t,n,pt,null,e,w)}for(g in e)if(w=e[g],k=a[g],e.hasOwnProperty(g)&&w!==k&&(w!=null||k!=null))switch(g){case"selected":t.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Dt(t,n,g,w,e,k)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)w=a[dt],a.hasOwnProperty(dt)&&w!=null&&!e.hasOwnProperty(dt)&&Dt(t,n,dt,null,e,w);for(D in e)if(w=e[D],k=a[D],e.hasOwnProperty(D)&&w!==k&&(w!=null||k!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(137,n));break;default:Dt(t,n,D,w,e,k)}return;default:if(Mr(n)){for(var wt in a)w=a[wt],a.hasOwnProperty(wt)&&w!==void 0&&!e.hasOwnProperty(wt)&&pu(t,n,wt,void 0,e,w);for(U in e)w=e[U],k=a[U],!e.hasOwnProperty(U)||w===k||w===void 0&&k===void 0||pu(t,n,U,w,e,k);return}}for(var A in a)w=a[A],a.hasOwnProperty(A)&&w!=null&&!e.hasOwnProperty(A)&&Dt(t,n,A,null,e,w);for(X in e)w=e[X],k=a[X],!e.hasOwnProperty(X)||w===k||w==null&&k==null||Dt(t,n,X,w,e,k)}var mu=null,vu=null;function Pi(t){return t.nodeType===9?t:t.ownerDocument}function cd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sd(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function bu(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gu=null;function Vh(){var t=window.event;return t&&t.type==="popstate"?t===gu?!1:(gu=t,!0):(gu=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,Kh=typeof clearTimeout=="function"?clearTimeout:void 0,dd=typeof Promise=="function"?Promise:void 0,Jh=typeof queueMicrotask=="function"?queueMicrotask:typeof dd<"u"?function(t){return dd.resolve(null).then(t).catch(Ph)}:fd;function Ph(t){setTimeout(function(){throw t})}function Ma(t){return t==="head"}function hd(t,n){var a=n,e=0,l=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<e&&8>e){a=e;var o=t.ownerDocument;if(a&1&&Hl(o.documentElement),a&2&&Hl(o.body),a&4)for(a=o.head,Hl(a),o=a.firstChild;o;){var c=o.nextSibling,g=o.nodeName;o[We]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=c}}if(l===0){t.removeChild(i),Ql(n);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:e=a.charCodeAt(0)-48;else e=0;a=i}while(a);Ql(n)}function yu(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yu(a),_r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Wh(t,n,a,e){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[We])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Cn(t.nextSibling),t===null)break}return null}function $h(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Cn(t.nextSibling),t===null))return null;return t}function xu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Fh(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var e=function(){n(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Cn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Su=null;function pd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function md(t,n,a){switch(n=Pi(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Hl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);_r(t)}var Hn=new Map,vd=new Set;function Wi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sa=P.d;P.d={f:Ih,r:tp,D:np,C:ap,L:ep,m:lp,X:rp,S:ip,M:op};function Ih(){var t=sa.f(),n=Xi();return t||n}function tp(t){var n=re(t);n!==null&&n.tag===5&&n.type==="form"?Hs(n):sa.r(t)}var Ye=typeof document>"u"?null:document;function bd(t,n,a){var e=Ye;if(e&&typeof n=="string"&&n){var l=zn(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),vd.has(l)||(vd.add(l),t={rel:t,crossOrigin:a,href:n},e.querySelector(l)===null&&(n=e.createElement("link"),an(n,"link",t),Wt(n),e.head.appendChild(n)))}}function np(t){sa.D(t),bd("dns-prefetch",t,null)}function ap(t,n){sa.C(t,n),bd("preconnect",t,n)}function ep(t,n,a){sa.L(t,n,a);var e=Ye;if(e&&t&&n){var l='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+zn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+zn(a.imageSizes)+'"]')):l+='[href="'+zn(t)+'"]';var i=l;switch(n){case"style":i=Xe(t);break;case"script":i=Ge(t)}Hn.has(i)||(t=h({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Hn.set(i,t),e.querySelector(l)!==null||n==="style"&&e.querySelector(Ul(i))||n==="script"&&e.querySelector(ql(i))||(n=e.createElement("link"),an(n,"link",t),Wt(n),e.head.appendChild(n)))}}function lp(t,n){sa.m(t,n);var a=Ye;if(a&&t){var e=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+zn(e)+'"][href="'+zn(t)+'"]',i=l;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ge(t)}if(!Hn.has(i)&&(t=h({rel:"modulepreload",href:t},n),Hn.set(i,t),a.querySelector(l)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ql(i)))return}e=a.createElement("link"),an(e,"link",t),Wt(e),a.head.appendChild(e)}}}function ip(t,n,a){sa.S(t,n,a);var e=Ye;if(e&&t){var l=oe(e).hoistableStyles,i=Xe(t);n=n||"default";var o=l.get(i);if(!o){var c={loading:0,preload:null};if(o=e.querySelector(Ul(i)))c.loading=5;else{t=h({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Hn.get(i))&&Ou(t,a);var g=o=e.createElement("link");Wt(g),an(g,"link",t),g._p=new Promise(function(D,U){g.onload=D,g.onerror=U}),g.addEventListener("load",function(){c.loading|=1}),g.addEventListener("error",function(){c.loading|=2}),c.loading|=4,$i(o,n,e)}o={type:"stylesheet",instance:o,count:1,state:c},l.set(i,o)}}}function rp(t,n){sa.X(t,n);var a=Ye;if(a&&t){var e=oe(a).hoistableScripts,l=Ge(t),i=e.get(l);i||(i=a.querySelector(ql(l)),i||(t=h({src:t,async:!0},n),(n=Hn.get(l))&&_u(t,n),i=a.createElement("script"),Wt(i),an(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(l,i))}}function op(t,n){sa.M(t,n);var a=Ye;if(a&&t){var e=oe(a).hoistableScripts,l=Ge(t),i=e.get(l);i||(i=a.querySelector(ql(l)),i||(t=h({src:t,async:!0,type:"module"},n),(n=Hn.get(l))&&_u(t,n),i=a.createElement("script"),Wt(i),an(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(l,i))}}function gd(t,n,a,e){var l=(l=G.current)?Wi(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Xe(a.href),a=oe(l).hoistableStyles,e=a.get(n),e||(e={type:"style",instance:null,count:0,state:null},a.set(n,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Xe(a.href);var i=oe(l).hoistableStyles,o=i.get(t);if(o||(l=l.ownerDocument||l,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=l.querySelector(Ul(t)))&&!i._p&&(o.instance=i,o.state.loading=5),Hn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hn.set(t,a),i||up(l,t,a,o.state))),n&&e===null)throw Error(s(528,""));return o}if(n&&e!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ge(a),a=oe(l).hoistableScripts,e=a.get(n),e||(e={type:"script",instance:null,count:0,state:null},a.set(n,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Xe(t){return'href="'+zn(t)+'"'}function Ul(t){return'link[rel="stylesheet"]['+t+"]"}function yd(t){return h({},t,{"data-precedence":t.precedence,precedence:null})}function up(t,n,a,e){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?e.loading=1:(n=t.createElement("link"),e.preload=n,n.addEventListener("load",function(){return e.loading|=1}),n.addEventListener("error",function(){return e.loading|=2}),an(n,"link",a),Wt(n),t.head.appendChild(n))}function Ge(t){return'[src="'+zn(t)+'"]'}function ql(t){return"script[async]"+t}function xd(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var e=t.querySelector('style[data-href~="'+zn(a.href)+'"]');if(e)return n.instance=e,Wt(e),e;var l=h({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Wt(e),an(e,"style",l),$i(e,a.precedence,t),n.instance=e;case"stylesheet":l=Xe(a.href);var i=t.querySelector(Ul(l));if(i)return n.state.loading|=4,n.instance=i,Wt(i),i;e=yd(a),(l=Hn.get(l))&&Ou(e,l),i=(t.ownerDocument||t).createElement("link"),Wt(i);var o=i;return o._p=new Promise(function(c,g){o.onload=c,o.onerror=g}),an(i,"link",e),n.state.loading|=4,$i(i,a.precedence,t),n.instance=i;case"script":return i=Ge(a.src),(l=t.querySelector(ql(i)))?(n.instance=l,Wt(l),l):(e=a,(l=Hn.get(i))&&(e=h({},a),_u(e,l)),t=t.ownerDocument||t,l=t.createElement("script"),Wt(l),an(l,"link",e),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(e=n.instance,n.state.loading|=4,$i(e,a.precedence,t));return n.instance}function $i(t,n,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=e.length?e[e.length-1]:null,i=l,o=0;o<e.length;o++){var c=e[o];if(c.dataset.precedence===n)i=c;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ou(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _u(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Fi=null;function Sd(t,n,a){if(Fi===null){var e=new Map,l=Fi=new Map;l.set(a,e)}else l=Fi,e=l.get(a),e||(e=new Map,l.set(a,e));if(e.has(t))return e;for(e.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var i=a[l];if(!(i[We]||i[rn]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(n)||"";o=t+o;var c=e.get(o);c?c.push(i):e.set(o,[i])}}return e}function Od(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function cp(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _d(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Cl=null;function sp(){}function fp(t,n,a){if(Cl===null)throw Error(s(475));var e=Cl;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Xe(a.href),i=t.querySelector(Ul(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ii.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Wt(i);return}i=t.ownerDocument||t,a=yd(a),(l=Hn.get(l))&&Ou(a,l),i=i.createElement("link"),Wt(i);var o=i;o._p=new Promise(function(c,g){o.onload=c,o.onerror=g}),an(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ii.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}function dp(){if(Cl===null)throw Error(s(475));var t=Cl;return t.stylesheets&&t.count===0&&ju(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ju(t,t.stylesheets),t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ii(){if(this.count--,this.count===0){if(this.stylesheets)ju(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tr=null;function ju(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tr=new Map,n.forEach(hp,t),tr=null,Ii.call(t))}function hp(t,n){if(!(n.state.loading&4)){var a=tr.get(t);if(a)var e=a.get(null);else{a=new Map,tr.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var o=l[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),e=o)}e&&a.set(null,e)}l=n.instance,o=l.getAttribute("data-precedence"),i=a.get(o)||e,i===e&&a.set(null,l),a.set(o,l),this.count++,e=Ii.bind(this),l.addEventListener("load",e),l.addEventListener("error",e),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Bl={$$typeof:V,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function pp(t,n,a,e,l,i,o,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yr(0),this.hiddenUpdates=yr(null),this.identifierPrefix=e,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function jd(t,n,a,e,l,i,o,c,g,D,U,X){return t=new pp(t,n,a,o,c,g,D,X),n=1,i===!0&&(n|=24),i=yn(3,null,null,n),t.current=i,i.stateNode=t,n=lo(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:e,isDehydrated:a,cache:n},uo(i),t}function Td(t){return t?(t=ye,t):ye}function Ad(t,n,a,e,l,i){l=Td(l),e.context===null?e.context=l:e.pendingContext=l,e=va(n),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=ba(t,e,n),a!==null&&(jn(a,t,n),ml(a,t,n))}function Ed(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Tu(t,n){Ed(t,n),(t=t.alternate)&&Ed(t,n)}function zd(t){if(t.tag===13){var n=ge(t,67108864);n!==null&&jn(n,t,67108864),Tu(t,67108864)}}var nr=!0;function mp(t,n,a,e){var l=E.T;E.T=null;var i=P.p;try{P.p=2,Au(t,n,a,e)}finally{P.p=i,E.T=l}}function vp(t,n,a,e){var l=E.T;E.T=null;var i=P.p;try{P.p=8,Au(t,n,a,e)}finally{P.p=i,E.T=l}}function Au(t,n,a,e){if(nr){var l=Eu(e);if(l===null)hu(t,n,e,ar,a),Nd(t,e);else if(gp(l,t,n,a,e))e.stopPropagation();else if(Nd(t,e),n&4&&-1<bp.indexOf(t)){for(;l!==null;){var i=re(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=qa(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var g=1<<31-sn(o);c.entanglements[1]|=g,o&=~g}Kn(i),(zt&6)===0&&(Bi=cn()+500,wl(0))}}break;case 13:c=ge(i,2),c!==null&&jn(c,i,2),Xi(),Tu(i,2)}if(i=Eu(e),i===null&&hu(t,n,e,ar,a),i===l)break;l=i}l!==null&&e.stopPropagation()}else hu(t,n,e,null,a)}}function Eu(t){return t=Dr(t),zu(t)}var ar=null;function zu(t){if(ar=null,t=ie(t),t!==null){var n=N(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=Q(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ar=t,null}function Md(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kl()){case Jl:return 2;case Pl:return 8;case Ua:case Ze:return 32;case ne:return 268435456;default:return 32}default:return 32}}var Mu=!1,Na=null,Da=null,wa=null,Yl=new Map,Xl=new Map,ka=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nd(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(n.pointerId)}}function Gl(t,n,a,e,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:a,eventSystemFlags:e,nativeEvent:i,targetContainers:[l]},n!==null&&(n=re(n),n!==null&&zd(n)),t):(t.eventSystemFlags|=e,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function gp(t,n,a,e,l){switch(n){case"focusin":return Na=Gl(Na,t,n,a,e,l),!0;case"dragenter":return Da=Gl(Da,t,n,a,e,l),!0;case"mouseover":return wa=Gl(wa,t,n,a,e,l),!0;case"pointerover":var i=l.pointerId;return Yl.set(i,Gl(Yl.get(i)||null,t,n,a,e,l)),!0;case"gotpointercapture":return i=l.pointerId,Xl.set(i,Gl(Xl.get(i)||null,t,n,a,e,l)),!0}return!1}function Dd(t){var n=ie(t.target);if(n!==null){var a=N(n);if(a!==null){if(n=a.tag,n===13){if(n=Q(a),n!==null){t.blockedOn=n,f0(t.priority,function(){if(a.tag===13){var e=_n();e=xr(e);var l=ge(a,e);l!==null&&jn(l,a,e),Tu(a,e)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function er(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Eu(t.nativeEvent);if(a===null){a=t.nativeEvent;var e=new a.constructor(a.type,a);Nr=e,a.target.dispatchEvent(e),Nr=null}else return n=re(a),n!==null&&zd(n),t.blockedOn=a,!1;n.shift()}return!0}function wd(t,n,a){er(t)&&a.delete(n)}function yp(){Mu=!1,Na!==null&&er(Na)&&(Na=null),Da!==null&&er(Da)&&(Da=null),wa!==null&&er(wa)&&(wa=null),Yl.forEach(wd),Xl.forEach(wd)}function lr(t,n){t.blockedOn===n&&(t.blockedOn=null,Mu||(Mu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,yp)))}var ir=null;function kd(t){ir!==t&&(ir=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ir===t&&(ir=null);for(var n=0;n<t.length;n+=3){var a=t[n],e=t[n+1],l=t[n+2];if(typeof e!="function"){if(zu(e||a)===null)continue;break}var i=re(a);i!==null&&(t.splice(n,3),n-=3,zo(i,{pending:!0,data:l,method:a.method,action:e},e,l))}}))}function Ql(t){function n(g){return lr(g,t)}Na!==null&&lr(Na,t),Da!==null&&lr(Da,t),wa!==null&&lr(wa,t),Yl.forEach(n),Xl.forEach(n);for(var a=0;a<ka.length;a++){var e=ka[a];e.blockedOn===t&&(e.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)Dd(a),a.blockedOn===null&&ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var l=a[e],i=a[e+1],o=l[dn]||null;if(typeof i=="function")o||kd(a);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(l=i,o=i[dn]||null)c=o.formAction;else if(zu(l)!==null)continue}else c=o.action;typeof c=="function"?a[e+1]=c:(a.splice(e,3),e-=3),kd(a)}}}function Nu(t){this._internalRoot=t}rr.prototype.render=Nu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,e=_n();Ad(a,e,t,n,null,null)},rr.prototype.unmount=Nu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ad(t.current,2,null,t,null,null),Xi(),n[le]=null}};function rr(t){this._internalRoot=t}rr.prototype.unstable_scheduleHydration=function(t){if(t){var n=Pu();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,t),a===0&&Dd(t)}};var Rd=m.version;if(Rd!=="19.1.0")throw Error(s(527,Rd,"19.1.0"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?r(t):null,t=t===null?null:t.stateNode,t};var xp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!or.isDisabled&&or.supportsFiber)try{Xn=or.inject(xp),ln=or}catch{}}return Zl.createRoot=function(t,n){if(!z(t))throw Error(s(299));var a=!1,e="",l=Ps,i=Ws,o=$s,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(e=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(c=n.unstable_transitionCallbacks)),n=jd(t,1,!1,null,null,a,e,l,i,o,c,null),t[le]=n.current,du(t),new Nu(n)},Zl.hydrateRoot=function(t,n,a){if(!z(t))throw Error(s(299));var e=!1,l="",i=Ps,o=Ws,c=$s,g=null,D=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(g=a.unstable_transitionCallbacks),a.formState!==void 0&&(D=a.formState)),n=jd(t,1,!0,n,a??null,e,l,i,o,c,g,D),n.context=Td(null),a=n.current,e=_n(),e=xr(e),l=va(e),l.callback=null,ba(a,l,e),a=e,n.current.lanes=a,Pe(n,a),Kn(n),t[le]=n.current,du(t),new rr(n)},Zl.version="19.1.0",Zl}var Ld;function Np(){if(Ld)return ku.exports;Ld=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(m){console.error(m)}}return u(),ku.exports=Mp(),ku.exports}var Dp=Np(),n0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Zd=An.createContext&&An.createContext(n0),wp=["attr","size","title"];function kp(u,m){if(u==null)return{};var b=Rp(u,m),s,z;if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(u);for(z=0;z<N.length;z++)s=N[z],!(m.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(u,s)&&(b[s]=u[s])}return b}function Rp(u,m){if(u==null)return{};var b={};for(var s in u)if(Object.prototype.hasOwnProperty.call(u,s)){if(m.indexOf(s)>=0)continue;b[s]=u[s]}return b}function dr(){return dr=Object.assign?Object.assign.bind():function(u){for(var m=1;m<arguments.length;m++){var b=arguments[m];for(var s in b)Object.prototype.hasOwnProperty.call(b,s)&&(u[s]=b[s])}return u},dr.apply(this,arguments)}function Vd(u,m){var b=Object.keys(u);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(u);m&&(s=s.filter(function(z){return Object.getOwnPropertyDescriptor(u,z).enumerable})),b.push.apply(b,s)}return b}function hr(u){for(var m=1;m<arguments.length;m++){var b=arguments[m]!=null?arguments[m]:{};m%2?Vd(Object(b),!0).forEach(function(s){Hp(u,s,b[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(b)):Vd(Object(b)).forEach(function(s){Object.defineProperty(u,s,Object.getOwnPropertyDescriptor(b,s))})}return u}function Hp(u,m,b){return m=Up(m),m in u?Object.defineProperty(u,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):u[m]=b,u}function Up(u){var m=qp(u,"string");return typeof m=="symbol"?m:m+""}function qp(u,m){if(typeof u!="object"||!u)return u;var b=u[Symbol.toPrimitive];if(b!==void 0){var s=b.call(u,m);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(m==="string"?String:Number)(u)}function a0(u){return u&&u.map((m,b)=>An.createElement(m.tag,hr({key:b},m.attr),a0(m.child)))}function Pn(u){return m=>An.createElement(Cp,dr({attr:hr({},u.attr)},m),a0(u.child))}function Cp(u){var m=b=>{var{attr:s,size:z,title:N}=u,Q=kp(u,wp),d=z||b.size||"1em",p;return b.className&&(p=b.className),u.className&&(p=(p?p+" ":"")+u.className),An.createElement("svg",dr({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,s,Q,{className:p,style:hr(hr({color:u.color||b.color},b.style),u.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),N&&An.createElement("title",null,N),u.children)};return Zd!==void 0?An.createElement(Zd.Consumer,null,b=>m(b)):m(n0)}function Yu(u){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(u)}function Xu(u){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(u)}function Bp(u){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},child:[]}]})(u)}function Gu(u){return Pn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(u)}function Qu(u){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"},child:[]}]})(u)}function Lu(u){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"},child:[]}]})(u)}function Yp(u){return Pn({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"},child:[]}]})(u)}var sr={exports:{}},Xp=sr.exports,Kd;function Gp(){return Kd||(Kd=1,function(u,m){(function(b,s){u.exports=s()})(Xp,function(){return function(b){function s(N){if(z[N])return z[N].exports;var Q=z[N]={exports:{},id:N,loaded:!1};return b[N].call(Q.exports,Q,Q.exports,s),Q.loaded=!0,Q.exports}var z={};return s.m=b,s.c=z,s.p="dist/",s(0)}([function(b,s,z){function N(F){return F&&F.__esModule?F:{default:F}}var Q=Object.assign||function(F){for(var ft=1;ft<arguments.length;ft++){var E=arguments[ft];for(var P in E)Object.prototype.hasOwnProperty.call(E,P)&&(F[P]=E[P])}return F},d=z(1),p=(N(d),z(6)),r=N(p),h=z(7),x=N(h),S=z(8),y=N(S),T=z(9),_=N(T),H=z(10),W=N(H),$=z(11),V=N($),ot=z(14),L=N(ot),Z=[],I=!1,J={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},tt=function(){var F=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(F&&(I=!0),I)return Z=(0,V.default)(Z,J),(0,W.default)(Z,J.once),Z},at=function(){Z=(0,L.default)(),tt()},Y=function(){Z.forEach(function(F,ft){F.node.removeAttribute("data-aos"),F.node.removeAttribute("data-aos-easing"),F.node.removeAttribute("data-aos-duration"),F.node.removeAttribute("data-aos-delay")})},q=function(F){return F===!0||F==="mobile"&&_.default.mobile()||F==="phone"&&_.default.phone()||F==="tablet"&&_.default.tablet()||typeof F=="function"&&F()===!0},lt=function(F){J=Q(J,F),Z=(0,L.default)();var ft=document.all&&!window.atob;return q(J.disable)||ft?Y():(J.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),J.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",J.easing),document.querySelector("body").setAttribute("data-aos-duration",J.duration),document.querySelector("body").setAttribute("data-aos-delay",J.delay),J.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?tt(!0):J.startEvent==="load"?window.addEventListener(J.startEvent,function(){tt(!0)}):document.addEventListener(J.startEvent,function(){tt(!0)}),window.addEventListener("resize",(0,x.default)(tt,J.debounceDelay,!0)),window.addEventListener("orientationchange",(0,x.default)(tt,J.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,W.default)(Z,J.once)},J.throttleDelay)),J.disableMutationObserver||y.default.ready("[data-aos]",at),Z)};b.exports={init:lt,refresh:tt,refreshHard:at}},function(b,s){},,,,,function(b,s){(function(z){function N(q,lt,F){function ft(yt){var Vt=j,en=mt;return j=mt=void 0,St=yt,ut=q.apply(en,Vt)}function E(yt){return St=yt,rt=setTimeout(nt,lt),Rt?ft(yt):ut}function P(yt){var Vt=yt-bt,en=yt-St,cn=lt-Vt;return Qt?at(cn,G-en):cn}function et(yt){var Vt=yt-bt,en=yt-St;return bt===void 0||Vt>=lt||Vt<0||Qt&&en>=G}function nt(){var yt=Y();return et(yt)?v(yt):void(rt=setTimeout(nt,P(yt)))}function v(yt){return rt=void 0,Tt&&j?ft(yt):(j=mt=void 0,ut)}function R(){rt!==void 0&&clearTimeout(rt),St=0,j=bt=mt=rt=void 0}function B(){return rt===void 0?ut:v(Y())}function K(){var yt=Y(),Vt=et(yt);if(j=arguments,mt=this,bt=yt,Vt){if(rt===void 0)return E(bt);if(Qt)return rt=setTimeout(nt,lt),ft(bt)}return rt===void 0&&(rt=setTimeout(nt,lt)),ut}var j,mt,G,ut,rt,bt,St=0,Rt=!1,Qt=!1,Tt=!0;if(typeof q!="function")throw new TypeError(S);return lt=h(lt)||0,d(F)&&(Rt=!!F.leading,Qt="maxWait"in F,G=Qt?tt(h(F.maxWait)||0,lt):G,Tt="trailing"in F?!!F.trailing:Tt),K.cancel=R,K.flush=B,K}function Q(q,lt,F){var ft=!0,E=!0;if(typeof q!="function")throw new TypeError(S);return d(F)&&(ft="leading"in F?!!F.leading:ft,E="trailing"in F?!!F.trailing:E),N(q,lt,{leading:ft,maxWait:lt,trailing:E})}function d(q){var lt=typeof q>"u"?"undefined":x(q);return!!q&&(lt=="object"||lt=="function")}function p(q){return!!q&&(typeof q>"u"?"undefined":x(q))=="object"}function r(q){return(typeof q>"u"?"undefined":x(q))=="symbol"||p(q)&&J.call(q)==T}function h(q){if(typeof q=="number")return q;if(r(q))return y;if(d(q)){var lt=typeof q.valueOf=="function"?q.valueOf():q;q=d(lt)?lt+"":lt}if(typeof q!="string")return q===0?q:+q;q=q.replace(_,"");var F=W.test(q);return F||$.test(q)?V(q.slice(2),F?2:8):H.test(q)?y:+q}var x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(q){return typeof q}:function(q){return q&&typeof Symbol=="function"&&q.constructor===Symbol&&q!==Symbol.prototype?"symbol":typeof q},S="Expected a function",y=NaN,T="[object Symbol]",_=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,$=/^0o[0-7]+$/i,V=parseInt,ot=(typeof z>"u"?"undefined":x(z))=="object"&&z&&z.Object===Object&&z,L=(typeof self>"u"?"undefined":x(self))=="object"&&self&&self.Object===Object&&self,Z=ot||L||Function("return this")(),I=Object.prototype,J=I.toString,tt=Math.max,at=Math.min,Y=function(){return Z.Date.now()};b.exports=Q}).call(s,function(){return this}())},function(b,s){(function(z){function N(Y,q,lt){function F(Tt){var yt=K,Vt=j;return K=j=void 0,bt=Tt,G=Y.apply(Vt,yt)}function ft(Tt){return bt=Tt,ut=setTimeout(et,q),St?F(Tt):G}function E(Tt){var yt=Tt-rt,Vt=Tt-bt,en=q-yt;return Rt?tt(en,mt-Vt):en}function P(Tt){var yt=Tt-rt,Vt=Tt-bt;return rt===void 0||yt>=q||yt<0||Rt&&Vt>=mt}function et(){var Tt=at();return P(Tt)?nt(Tt):void(ut=setTimeout(et,E(Tt)))}function nt(Tt){return ut=void 0,Qt&&K?F(Tt):(K=j=void 0,G)}function v(){ut!==void 0&&clearTimeout(ut),bt=0,K=rt=j=ut=void 0}function R(){return ut===void 0?G:nt(at())}function B(){var Tt=at(),yt=P(Tt);if(K=arguments,j=this,rt=Tt,yt){if(ut===void 0)return ft(rt);if(Rt)return ut=setTimeout(et,q),F(rt)}return ut===void 0&&(ut=setTimeout(et,q)),G}var K,j,mt,G,ut,rt,bt=0,St=!1,Rt=!1,Qt=!0;if(typeof Y!="function")throw new TypeError(x);return q=r(q)||0,Q(lt)&&(St=!!lt.leading,Rt="maxWait"in lt,mt=Rt?J(r(lt.maxWait)||0,q):mt,Qt="trailing"in lt?!!lt.trailing:Qt),B.cancel=v,B.flush=R,B}function Q(Y){var q=typeof Y>"u"?"undefined":h(Y);return!!Y&&(q=="object"||q=="function")}function d(Y){return!!Y&&(typeof Y>"u"?"undefined":h(Y))=="object"}function p(Y){return(typeof Y>"u"?"undefined":h(Y))=="symbol"||d(Y)&&I.call(Y)==y}function r(Y){if(typeof Y=="number")return Y;if(p(Y))return S;if(Q(Y)){var q=typeof Y.valueOf=="function"?Y.valueOf():Y;Y=Q(q)?q+"":q}if(typeof Y!="string")return Y===0?Y:+Y;Y=Y.replace(T,"");var lt=H.test(Y);return lt||W.test(Y)?$(Y.slice(2),lt?2:8):_.test(Y)?S:+Y}var h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Y){return typeof Y}:function(Y){return Y&&typeof Symbol=="function"&&Y.constructor===Symbol&&Y!==Symbol.prototype?"symbol":typeof Y},x="Expected a function",S=NaN,y="[object Symbol]",T=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,W=/^0o[0-7]+$/i,$=parseInt,V=(typeof z>"u"?"undefined":h(z))=="object"&&z&&z.Object===Object&&z,ot=(typeof self>"u"?"undefined":h(self))=="object"&&self&&self.Object===Object&&self,L=V||ot||Function("return this")(),Z=Object.prototype,I=Z.toString,J=Math.max,tt=Math.min,at=function(){return L.Date.now()};b.exports=N}).call(s,function(){return this}())},function(b,s){function z(h){var x=void 0,S=void 0;for(x=0;x<h.length;x+=1)if(S=h[x],S.dataset&&S.dataset.aos||S.children&&z(S.children))return!0;return!1}function N(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function Q(){return!!N()}function d(h,x){var S=window.document,y=N(),T=new y(p);r=x,T.observe(S.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(h){h&&h.forEach(function(x){var S=Array.prototype.slice.call(x.addedNodes),y=Array.prototype.slice.call(x.removedNodes),T=S.concat(y);if(z(T))return r()})}Object.defineProperty(s,"__esModule",{value:!0});var r=function(){};s.default={isSupported:Q,ready:d}},function(b,s){function z(S,y){if(!(S instanceof y))throw new TypeError("Cannot call a class as a function")}function N(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var Q=function(){function S(y,T){for(var _=0;_<T.length;_++){var H=T[_];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(y,H.key,H)}}return function(y,T,_){return T&&S(y.prototype,T),_&&S(y,_),y}}(),d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,h=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,x=function(){function S(){z(this,S)}return Q(S,[{key:"phone",value:function(){var y=N();return!(!d.test(y)&&!p.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=N();return!(!r.test(y)&&!h.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),S}();s.default=new x},function(b,s){Object.defineProperty(s,"__esModule",{value:!0});var z=function(Q,d,p){var r=Q.node.getAttribute("data-aos-once");d>Q.position?Q.node.classList.add("aos-animate"):typeof r<"u"&&(r==="false"||!p&&r!=="true")&&Q.node.classList.remove("aos-animate")},N=function(Q,d){var p=window.pageYOffset,r=window.innerHeight;Q.forEach(function(h,x){z(h,r+p,d)})};s.default=N},function(b,s,z){function N(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(s,"__esModule",{value:!0});var Q=z(12),d=N(Q),p=function(r,h){return r.forEach(function(x,S){x.node.classList.add("aos-init"),x.position=(0,d.default)(x.node,h.offset)}),r};s.default=p},function(b,s,z){function N(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(s,"__esModule",{value:!0});var Q=z(13),d=N(Q),p=function(r,h){var x=0,S=0,y=window.innerHeight,T={offset:r.getAttribute("data-aos-offset"),anchor:r.getAttribute("data-aos-anchor"),anchorPlacement:r.getAttribute("data-aos-anchor-placement")};switch(T.offset&&!isNaN(T.offset)&&(S=parseInt(T.offset)),T.anchor&&document.querySelectorAll(T.anchor)&&(r=document.querySelectorAll(T.anchor)[0]),x=(0,d.default)(r).top,T.anchorPlacement){case"top-bottom":break;case"center-bottom":x+=r.offsetHeight/2;break;case"bottom-bottom":x+=r.offsetHeight;break;case"top-center":x+=y/2;break;case"bottom-center":x+=y/2+r.offsetHeight;break;case"center-center":x+=y/2+r.offsetHeight/2;break;case"top-top":x+=y;break;case"bottom-top":x+=r.offsetHeight+y;break;case"center-top":x+=r.offsetHeight/2+y}return T.anchorPlacement||T.offset||isNaN(h)||(S=h),x+S};s.default=p},function(b,s){Object.defineProperty(s,"__esModule",{value:!0});var z=function(N){for(var Q=0,d=0;N&&!isNaN(N.offsetLeft)&&!isNaN(N.offsetTop);)Q+=N.offsetLeft-(N.tagName!="BODY"?N.scrollLeft:0),d+=N.offsetTop-(N.tagName!="BODY"?N.scrollTop:0),N=N.offsetParent;return{top:d,left:Q}};s.default=z},function(b,s){Object.defineProperty(s,"__esModule",{value:!0});var z=function(N){return N=N||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(N,function(Q){return{node:Q}})};s.default=z}])})}(sr)),sr.exports}var Qp=Gp();const Le=Bu(Qp);function Lp(){bn.useEffect(()=>{Le.init()},[]);const[u,m]=bn.useState(1);function b(s){m(s)}return f.jsx("div",{className:"container aboutcontainer",id:"About",children:f.jsxs("div",{className:"row",children:[f.jsx("div",{"data-aos":"zoom-in",className:"col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutimgcol",children:f.jsx("div",{className:"aboutimgdiv",children:f.jsx("img",{src:"src\\assets\\me\\aboutimg22.jpg",className:"img-fluid",alt:""})})}),f.jsxs("div",{"data-aos":"zoom-in-up",className:"col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutcontentcol",children:[f.jsx("h1",{className:"mb-5",children:"About Me"}),f.jsxs("ul",{className:"mb-5",children:[f.jsx("li",{onClick:()=>b(1),children:"INFO"}),f.jsx("li",{onClick:()=>b(2),children:"College"}),f.jsx("li",{onClick:()=>b(3),children:"School"})]}),f.jsxs("div",{className:u===1?"abouttabsdiv":"hidetabs",children:[f.jsx("p",{className:"mb-0",children:"Raja B"}),f.jsx("p",{children:"Web Developer"}),f.jsx("p",{className:"",children:"Hi, I am Raja, I'm 22-year-old, I am pursuing a Master of Computer Applications (MCA) degree at RGCET. I have a strong interest in the IT field and am dedicated to enhancing my coding skills and knowledge. Through developing various projects, I continuously strive to improve my technical expertise and practical experience"}),f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://wa.me/9342086309",className:"whatsapp",children:f.jsx(Gu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.instagram.com/_._._call_me_raja_._._?igsh=MnRhM2ZnemtmZHp1",className:"instagram",children:f.jsx(Yu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/share/16gTXQ9Q7i/",className:"facebook",children:f.jsx(Qu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://x.com/RAJA25722264924?t=yKjXrtL0EfusNJW32BJEfA&s=09",className:"twitter",children:f.jsx(Lu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",className:"linkin",children:f.jsx(Xu,{})})})]})]}),f.jsxs("div",{className:u===2?"abouttabsdiv":"hidetabs",children:[f.jsx("p",{className:"mb-1",children:"PG"}),f.jsx("p",{className:"mb-0",children:"Master Of Computer Applications"}),f.jsx("p",{className:"mb-0",children:"Rajiv Gandhi College of Engineering and Technology"}),f.jsx("p",{children:"2023 - 2025"}),f.jsx("p",{className:"mb-1",children:"UG"}),f.jsx("p",{className:"mb-0",children:"Bachlor Of Computer Applications"}),f.jsx("p",{className:"mb-0",children:"Rajiv Gandhi Arts and Science College "}),f.jsx("p",{children:"2020 - 2023"})]}),f.jsxs("div",{className:u===3?"abouttabsdiv":"hidetabs",children:[f.jsx("p",{className:"mb-1",children:"HSC"}),f.jsx("p",{className:"mb-0",children:"12th Standard"}),f.jsx("p",{className:"mb-0",children:"Jeevanandam Govt. Boys Higher Secondary School"}),f.jsx("p",{children:"2019 - 2020"}),f.jsx("p",{className:"mb-1",children:"SLC"}),f.jsx("p",{className:"mb-0",children:"10th Standard"}),f.jsx("p",{className:"mb-0",children:"Thillaiyadi Valliammai Govt. High School "}),f.jsx("p",{children:"2017 - 2018"})]})]})]})})}var fr={exports:{}},Zp=fr.exports,Jd;function Vp(){return Jd||(Jd=1,function(u,m){(function(b,s){u.exports=s(mr())})(typeof self<"u"?self:Zp,b=>(()=>{var s={2:(d,p,r)=>{var h=r(2199),x=r(4664),S=r(5950);d.exports=function(y){return h(y,S,x)}},79:(d,p,r)=>{var h=r(3702),x=r(80),S=r(4739),y=r(8655),T=r(1175);function _(H){var W=-1,$=H==null?0:H.length;for(this.clear();++W<$;){var V=H[W];this.set(V[0],V[1])}}_.prototype.clear=h,_.prototype.delete=x,_.prototype.get=S,_.prototype.has=y,_.prototype.set=T,d.exports=_},80:(d,p,r)=>{var h=r(6025),x=Array.prototype.splice;d.exports=function(S){var y=this.__data__,T=h(y,S);return!(T<0||(T==y.length-1?y.pop():x.call(y,T,1),--this.size,0))}},270:(d,p,r)=>{var h=r(7068),x=r(346);d.exports=function S(y,T,_,H,W){return y===T||(y==null||T==null||!x(y)&&!x(T)?y!=y&&T!=T:h(y,T,_,H,S,W))}},289:(d,p,r)=>{var h=r(2651);d.exports=function(x){return h(this,x).get(x)}},294:d=>{d.exports=function(p){return typeof p=="number"&&p>-1&&p%1==0&&p<=9007199254740991}},317:d=>{d.exports=function(p){var r=-1,h=Array(p.size);return p.forEach(function(x,S){h[++r]=[S,x]}),h}},346:d=>{d.exports=function(p){return p!=null&&typeof p=="object"}},361:d=>{var p=/^(?:0|[1-9]\d*)$/;d.exports=function(r,h){var x=typeof r;return!!(h=h??9007199254740991)&&(x=="number"||x!="symbol"&&p.test(r))&&r>-1&&r%1==0&&r<h}},392:d=>{d.exports=function(p,r){return p==null?void 0:p[r]}},659:(d,p,r)=>{var h=r(1873),x=Object.prototype,S=x.hasOwnProperty,y=x.toString,T=h?h.toStringTag:void 0;d.exports=function(_){var H=S.call(_,T),W=_[T];try{_[T]=void 0;var $=!0}catch{}var V=y.call(_);return $&&(H?_[T]=W:delete _[T]),V}},689:(d,p,r)=>{var h=r(2),x=Object.prototype.hasOwnProperty;d.exports=function(S,y,T,_,H,W){var $=1&T,V=h(S),ot=V.length;if(ot!=h(y).length&&!$)return!1;for(var L=ot;L--;){var Z=V[L];if(!($?Z in y:x.call(y,Z)))return!1}var I=W.get(S),J=W.get(y);if(I&&J)return I==y&&J==S;var tt=!0;W.set(S,y),W.set(y,S);for(var at=$;++L<ot;){var Y=S[Z=V[L]],q=y[Z];if(_)var lt=$?_(q,Y,Z,y,S,W):_(Y,q,Z,S,y,W);if(!(lt===void 0?Y===q||H(Y,q,T,_,W):lt)){tt=!1;break}at||(at=Z=="constructor")}if(tt&&!at){var F=S.constructor,ft=y.constructor;F==ft||!("constructor"in S)||!("constructor"in y)||typeof F=="function"&&F instanceof F&&typeof ft=="function"&&ft instanceof ft||(tt=!1)}return W.delete(S),W.delete(y),tt}},695:(d,p,r)=>{var h=r(8096),x=r(2428),S=r(6449),y=r(3656),T=r(361),_=r(7167),H=Object.prototype.hasOwnProperty;d.exports=function(W,$){var V=S(W),ot=!V&&x(W),L=!V&&!ot&&y(W),Z=!V&&!ot&&!L&&_(W),I=V||ot||L||Z,J=I?h(W.length,String):[],tt=J.length;for(var at in W)!$&&!H.call(W,at)||I&&(at=="length"||L&&(at=="offset"||at=="parent")||Z&&(at=="buffer"||at=="byteLength"||at=="byteOffset")||T(at,tt))||J.push(at);return J}},938:d=>{d.exports=function(p){var r=this.__data__,h=r.delete(p);return this.size=r.size,h}},945:(d,p,r)=>{var h=r(79),x=r(8223),S=r(3661);d.exports=function(y,T){var _=this.__data__;if(_ instanceof h){var H=_.__data__;if(!x||H.length<199)return H.push([y,T]),this.size=++_.size,this;_=this.__data__=new S(H)}return _.set(y,T),this.size=_.size,this}},1042:(d,p,r)=>{var h=r(6110)(Object,"create");d.exports=h},1175:(d,p,r)=>{var h=r(6025);d.exports=function(x,S){var y=this.__data__,T=h(y,x);return T<0?(++this.size,y.push([x,S])):y[T][1]=S,this}},1380:d=>{d.exports=function(p){return this.__data__.set(p,"__lodash_hash_undefined__"),this}},1420:(d,p,r)=>{var h=r(79);d.exports=function(){this.__data__=new h,this.size=0}},1459:d=>{d.exports=function(p){return this.__data__.has(p)}},1549:(d,p,r)=>{var h=r(2032),x=r(3862),S=r(6721),y=r(2749),T=r(5749);function _(H){var W=-1,$=H==null?0:H.length;for(this.clear();++W<$;){var V=H[W];this.set(V[0],V[1])}}_.prototype.clear=h,_.prototype.delete=x,_.prototype.get=S,_.prototype.has=y,_.prototype.set=T,d.exports=_},1873:(d,p,r)=>{var h=r(9325).Symbol;d.exports=h},1882:(d,p,r)=>{var h=r(2552),x=r(3805);d.exports=function(S){if(!x(S))return!1;var y=h(S);return y=="[object Function]"||y=="[object GeneratorFunction]"||y=="[object AsyncFunction]"||y=="[object Proxy]"}},1986:(d,p,r)=>{var h=r(1873),x=r(7828),S=r(5288),y=r(5911),T=r(317),_=r(4247),H=h?h.prototype:void 0,W=H?H.valueOf:void 0;d.exports=function($,V,ot,L,Z,I,J){switch(ot){case"[object DataView]":if($.byteLength!=V.byteLength||$.byteOffset!=V.byteOffset)return!1;$=$.buffer,V=V.buffer;case"[object ArrayBuffer]":return!($.byteLength!=V.byteLength||!I(new x($),new x(V)));case"[object Boolean]":case"[object Date]":case"[object Number]":return S(+$,+V);case"[object Error]":return $.name==V.name&&$.message==V.message;case"[object RegExp]":case"[object String]":return $==V+"";case"[object Map]":var tt=T;case"[object Set]":var at=1&L;if(tt||(tt=_),$.size!=V.size&&!at)return!1;var Y=J.get($);if(Y)return Y==V;L|=2,J.set($,V);var q=y(tt($),tt(V),L,Z,I,J);return J.delete($),q;case"[object Symbol]":if(W)return W.call($)==W.call(V)}return!1}},2032:(d,p,r)=>{var h=r(1042);d.exports=function(){this.__data__=h?h(null):{},this.size=0}},2199:(d,p,r)=>{var h=r(4528),x=r(6449);d.exports=function(S,y,T){var _=y(S);return x(S)?_:h(_,T(S))}},2404:(d,p,r)=>{var h=r(270);d.exports=function(x,S){return h(x,S)}},2428:(d,p,r)=>{var h=r(7534),x=r(346),S=Object.prototype,y=S.hasOwnProperty,T=S.propertyIsEnumerable,_=h(function(){return arguments}())?h:function(H){return x(H)&&y.call(H,"callee")&&!T.call(H,"callee")};d.exports=_},2552:(d,p,r)=>{var h=r(1873),x=r(659),S=r(9350),y=h?h.toStringTag:void 0;d.exports=function(T){return T==null?T===void 0?"[object Undefined]":"[object Null]":y&&y in Object(T)?x(T):S(T)}},2651:(d,p,r)=>{var h=r(4218);d.exports=function(x,S){var y=x.__data__;return h(S)?y[typeof S=="string"?"string":"hash"]:y.map}},2749:(d,p,r)=>{var h=r(1042),x=Object.prototype.hasOwnProperty;d.exports=function(S){var y=this.__data__;return h?y[S]!==void 0:x.call(y,S)}},2804:(d,p,r)=>{var h=r(6110)(r(9325),"Promise");d.exports=h},2949:(d,p,r)=>{var h=r(2651);d.exports=function(x,S){var y=h(this,x),T=y.size;return y.set(x,S),this.size+=y.size==T?0:1,this}},3040:(d,p,r)=>{var h=r(1549),x=r(79),S=r(8223);d.exports=function(){this.size=0,this.__data__={hash:new h,map:new(S||x),string:new h}}},3146:(d,p,r)=>{for(var h=r(3491),x=typeof window>"u"?r.g:window,S=["moz","webkit"],y="AnimationFrame",T=x["request"+y],_=x["cancel"+y]||x["cancelRequest"+y],H=0;!T&&H<S.length;H++)T=x[S[H]+"Request"+y],_=x[S[H]+"Cancel"+y]||x[S[H]+"CancelRequest"+y];if(!T||!_){var W=0,$=0,V=[],ot=1e3/60;T=function(L){if(V.length===0){var Z=h(),I=Math.max(0,ot-(Z-W));W=I+Z,setTimeout(function(){var J=V.slice(0);V.length=0;for(var tt=0;tt<J.length;tt++)if(!J[tt].cancelled)try{J[tt].callback(W)}catch(at){setTimeout(function(){throw at},0)}},Math.round(I))}return V.push({handle:++$,callback:L,cancelled:!1}),$},_=function(L){for(var Z=0;Z<V.length;Z++)V[Z].handle===L&&(V[Z].cancelled=!0)}}d.exports=function(L){return T.call(x,L)},d.exports.cancel=function(){_.apply(x,arguments)},d.exports.polyfill=function(L){L||(L=x),L.requestAnimationFrame=T,L.cancelAnimationFrame=_}},3345:d=>{d.exports=function(){return[]}},3491:function(d){(function(){var p,r,h,x,S,y;typeof performance<"u"&&performance!==null&&performance.now?d.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(d.exports=function(){return(p()-S)/1e6},r=process.hrtime,x=(p=function(){var T;return 1e9*(T=r())[0]+T[1]})(),y=1e9*process.uptime(),S=x-y):Date.now?(d.exports=function(){return Date.now()-h},h=Date.now()):(d.exports=function(){return new Date().getTime()-h},h=new Date().getTime())}).call(this)},3605:d=>{d.exports=function(p){return this.__data__.get(p)}},3650:(d,p,r)=>{var h=r(4335)(Object.keys,Object);d.exports=h},3656:(d,p,r)=>{d=r.nmd(d);var h=r(9325),x=r(9935),S=p&&!p.nodeType&&p,y=S&&d&&!d.nodeType&&d,T=y&&y.exports===S?h.Buffer:void 0,_=(T?T.isBuffer:void 0)||x;d.exports=_},3661:(d,p,r)=>{var h=r(3040),x=r(7670),S=r(289),y=r(4509),T=r(2949);function _(H){var W=-1,$=H==null?0:H.length;for(this.clear();++W<$;){var V=H[W];this.set(V[0],V[1])}}_.prototype.clear=h,_.prototype.delete=x,_.prototype.get=S,_.prototype.has=y,_.prototype.set=T,d.exports=_},3702:d=>{d.exports=function(){this.__data__=[],this.size=0}},3805:d=>{d.exports=function(p){var r=typeof p;return p!=null&&(r=="object"||r=="function")}},3862:d=>{d.exports=function(p){var r=this.has(p)&&delete this.__data__[p];return this.size-=r?1:0,r}},4218:d=>{d.exports=function(p){var r=typeof p;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?p!=="__proto__":p===null}},4247:d=>{d.exports=function(p){var r=-1,h=Array(p.size);return p.forEach(function(x){h[++r]=x}),h}},4248:d=>{d.exports=function(p,r){for(var h=-1,x=p==null?0:p.length;++h<x;)if(r(p[h],h,p))return!0;return!1}},4335:d=>{d.exports=function(p,r){return function(h){return p(r(h))}}},4509:(d,p,r)=>{var h=r(2651);d.exports=function(x){return h(this,x).has(x)}},4528:d=>{d.exports=function(p,r){for(var h=-1,x=r.length,S=p.length;++h<x;)p[S+h]=r[h];return p}},4664:(d,p,r)=>{var h=r(9770),x=r(3345),S=Object.prototype.propertyIsEnumerable,y=Object.getOwnPropertySymbols,T=y?function(_){return _==null?[]:(_=Object(_),h(y(_),function(H){return S.call(_,H)}))}:x;d.exports=T},4739:(d,p,r)=>{var h=r(6025);d.exports=function(x){var S=this.__data__,y=h(S,x);return y<0?void 0:S[y][1]}},4840:(d,p,r)=>{var h=typeof r.g=="object"&&r.g&&r.g.Object===Object&&r.g;d.exports=h},4894:(d,p,r)=>{var h=r(1882),x=r(294);d.exports=function(S){return S!=null&&x(S.length)&&!h(S)}},4901:(d,p,r)=>{var h=r(2552),x=r(294),S=r(346),y={};y["[object Float32Array]"]=y["[object Float64Array]"]=y["[object Int8Array]"]=y["[object Int16Array]"]=y["[object Int32Array]"]=y["[object Uint8Array]"]=y["[object Uint8ClampedArray]"]=y["[object Uint16Array]"]=y["[object Uint32Array]"]=!0,y["[object Arguments]"]=y["[object Array]"]=y["[object ArrayBuffer]"]=y["[object Boolean]"]=y["[object DataView]"]=y["[object Date]"]=y["[object Error]"]=y["[object Function]"]=y["[object Map]"]=y["[object Number]"]=y["[object Object]"]=y["[object RegExp]"]=y["[object Set]"]=y["[object String]"]=y["[object WeakMap]"]=!1,d.exports=function(T){return S(T)&&x(T.length)&&!!y[h(T)]}},5083:(d,p,r)=>{var h=r(1882),x=r(7296),S=r(3805),y=r(7473),T=/^\[object .+?Constructor\]$/,_=Function.prototype,H=Object.prototype,W=_.toString,$=H.hasOwnProperty,V=RegExp("^"+W.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");d.exports=function(ot){return!(!S(ot)||x(ot))&&(h(ot)?V:T).test(y(ot))}},5288:d=>{d.exports=function(p,r){return p===r||p!=p&&r!=r}},5481:(d,p,r)=>{var h=r(9325)["__core-js_shared__"];d.exports=h},5527:d=>{var p=Object.prototype;d.exports=function(r){var h=r&&r.constructor;return r===(typeof h=="function"&&h.prototype||p)}},5580:(d,p,r)=>{var h=r(6110)(r(9325),"DataView");d.exports=h},5749:(d,p,r)=>{var h=r(1042);d.exports=function(x,S){var y=this.__data__;return this.size+=this.has(x)?0:1,y[x]=h&&S===void 0?"__lodash_hash_undefined__":S,this}},5861:(d,p,r)=>{var h=r(5580),x=r(8223),S=r(2804),y=r(6545),T=r(8303),_=r(2552),H=r(7473),W="[object Map]",$="[object Promise]",V="[object Set]",ot="[object WeakMap]",L="[object DataView]",Z=H(h),I=H(x),J=H(S),tt=H(y),at=H(T),Y=_;(h&&Y(new h(new ArrayBuffer(1)))!=L||x&&Y(new x)!=W||S&&Y(S.resolve())!=$||y&&Y(new y)!=V||T&&Y(new T)!=ot)&&(Y=function(q){var lt=_(q),F=lt=="[object Object]"?q.constructor:void 0,ft=F?H(F):"";if(ft)switch(ft){case Z:return L;case I:return W;case J:return $;case tt:return V;case at:return ot}return lt}),d.exports=Y},5911:(d,p,r)=>{var h=r(8859),x=r(4248),S=r(9219);d.exports=function(y,T,_,H,W,$){var V=1&_,ot=y.length,L=T.length;if(ot!=L&&!(V&&L>ot))return!1;var Z=$.get(y),I=$.get(T);if(Z&&I)return Z==T&&I==y;var J=-1,tt=!0,at=2&_?new h:void 0;for($.set(y,T),$.set(T,y);++J<ot;){var Y=y[J],q=T[J];if(H)var lt=V?H(q,Y,J,T,y,$):H(Y,q,J,y,T,$);if(lt!==void 0){if(lt)continue;tt=!1;break}if(at){if(!x(T,function(F,ft){if(!S(at,ft)&&(Y===F||W(Y,F,_,H,$)))return at.push(ft)})){tt=!1;break}}else if(Y!==q&&!W(Y,q,_,H,$)){tt=!1;break}}return $.delete(y),$.delete(T),tt}},5950:(d,p,r)=>{var h=r(695),x=r(8984),S=r(4894);d.exports=function(y){return S(y)?h(y):x(y)}},6009:(d,p,r)=>{d=r.nmd(d);var h=r(4840),x=p&&!p.nodeType&&p,S=x&&d&&!d.nodeType&&d,y=S&&S.exports===x&&h.process,T=function(){try{return S&&S.require&&S.require("util").types||y&&y.binding&&y.binding("util")}catch{}}();d.exports=T},6025:(d,p,r)=>{var h=r(5288);d.exports=function(x,S){for(var y=x.length;y--;)if(h(x[y][0],S))return y;return-1}},6110:(d,p,r)=>{var h=r(5083),x=r(392);d.exports=function(S,y){var T=x(S,y);return h(T)?T:void 0}},6449:d=>{var p=Array.isArray;d.exports=p},6545:(d,p,r)=>{var h=r(6110)(r(9325),"Set");d.exports=h},6721:(d,p,r)=>{var h=r(1042),x=Object.prototype.hasOwnProperty;d.exports=function(S){var y=this.__data__;if(h){var T=y[S];return T==="__lodash_hash_undefined__"?void 0:T}return x.call(y,S)?y[S]:void 0}},7068:(d,p,r)=>{var h=r(7217),x=r(5911),S=r(1986),y=r(689),T=r(5861),_=r(6449),H=r(3656),W=r(7167),$="[object Arguments]",V="[object Array]",ot="[object Object]",L=Object.prototype.hasOwnProperty;d.exports=function(Z,I,J,tt,at,Y){var q=_(Z),lt=_(I),F=q?V:T(Z),ft=lt?V:T(I),E=(F=F==$?ot:F)==ot,P=(ft=ft==$?ot:ft)==ot,et=F==ft;if(et&&H(Z)){if(!H(I))return!1;q=!0,E=!1}if(et&&!E)return Y||(Y=new h),q||W(Z)?x(Z,I,J,tt,at,Y):S(Z,I,F,J,tt,at,Y);if(!(1&J)){var nt=E&&L.call(Z,"__wrapped__"),v=P&&L.call(I,"__wrapped__");if(nt||v){var R=nt?Z.value():Z,B=v?I.value():I;return Y||(Y=new h),at(R,B,J,tt,Y)}}return!!et&&(Y||(Y=new h),y(Z,I,J,tt,at,Y))}},7167:(d,p,r)=>{var h=r(4901),x=r(7301),S=r(6009),y=S&&S.isTypedArray,T=y?x(y):h;d.exports=T},7217:(d,p,r)=>{var h=r(79),x=r(1420),S=r(938),y=r(3605),T=r(9817),_=r(945);function H(W){var $=this.__data__=new h(W);this.size=$.size}H.prototype.clear=x,H.prototype.delete=S,H.prototype.get=y,H.prototype.has=T,H.prototype.set=_,d.exports=H},7296:(d,p,r)=>{var h,x=r(5481),S=(h=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+h:"";d.exports=function(y){return!!S&&S in y}},7301:d=>{d.exports=function(p){return function(r){return p(r)}}},7473:d=>{var p=Function.prototype.toString;d.exports=function(r){if(r!=null){try{return p.call(r)}catch{}try{return r+""}catch{}}return""}},7534:(d,p,r)=>{var h=r(2552),x=r(346);d.exports=function(S){return x(S)&&h(S)=="[object Arguments]"}},7670:(d,p,r)=>{var h=r(2651);d.exports=function(x){var S=h(this,x).delete(x);return this.size-=S?1:0,S}},7828:(d,p,r)=>{var h=r(9325).Uint8Array;d.exports=h},8096:d=>{d.exports=function(p,r){for(var h=-1,x=Array(p);++h<p;)x[h]=r(h);return x}},8223:(d,p,r)=>{var h=r(6110)(r(9325),"Map");d.exports=h},8303:(d,p,r)=>{var h=r(6110)(r(9325),"WeakMap");d.exports=h},8655:(d,p,r)=>{var h=r(6025);d.exports=function(x){return h(this.__data__,x)>-1}},8859:(d,p,r)=>{var h=r(3661),x=r(1380),S=r(1459);function y(T){var _=-1,H=T==null?0:T.length;for(this.__data__=new h;++_<H;)this.add(T[_])}y.prototype.add=y.prototype.push=x,y.prototype.has=S,d.exports=y},8984:(d,p,r)=>{var h=r(5527),x=r(3650),S=Object.prototype.hasOwnProperty;d.exports=function(y){if(!h(y))return x(y);var T=[];for(var _ in Object(y))S.call(y,_)&&_!="constructor"&&T.push(_);return T}},9155:d=>{d.exports=b},9219:d=>{d.exports=function(p,r){return p.has(r)}},9325:(d,p,r)=>{var h=r(4840),x=typeof self=="object"&&self&&self.Object===Object&&self,S=h||x||Function("return this")();d.exports=S},9350:d=>{var p=Object.prototype.toString;d.exports=function(r){return p.call(r)}},9770:d=>{d.exports=function(p,r){for(var h=-1,x=p==null?0:p.length,S=0,y=[];++h<x;){var T=p[h];r(T,h,p)&&(y[S++]=T)}return y}},9817:d=>{d.exports=function(p){return this.__data__.has(p)}},9905:(d,p,r)=>{r.d(p,{default:()=>et});var h=r(3146),x=r.n(h);const S=function(nt){return new RegExp(/<[a-z][\s\S]*>/i).test(nt)},y=function(nt,v){return Math.floor(Math.random()*(v-nt+1))+nt};var T="TYPE_CHARACTER",_="REMOVE_CHARACTER",H="REMOVE_ALL",W="REMOVE_LAST_VISIBLE_NODE",$="PAUSE_FOR",V="CALL_FUNCTION",ot="ADD_HTML_TAG_ELEMENT",L="CHANGE_DELETE_SPEED",Z="CHANGE_DELAY",I="CHANGE_CURSOR",J="PASTE_STRING",tt="HTML_TAG";function at(nt){return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(v){return typeof v}:function(v){return v&&typeof Symbol=="function"&&v.constructor===Symbol&&v!==Symbol.prototype?"symbol":typeof v},at(nt)}function Y(nt,v){var R=Object.keys(nt);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(nt);v&&(B=B.filter(function(K){return Object.getOwnPropertyDescriptor(nt,K).enumerable})),R.push.apply(R,B)}return R}function q(nt){for(var v=1;v<arguments.length;v++){var R=arguments[v]!=null?arguments[v]:{};v%2?Y(Object(R),!0).forEach(function(B){E(nt,B,R[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(nt,Object.getOwnPropertyDescriptors(R)):Y(Object(R)).forEach(function(B){Object.defineProperty(nt,B,Object.getOwnPropertyDescriptor(R,B))})}return nt}function lt(nt){return function(v){if(Array.isArray(v))return F(v)}(nt)||function(v){if(typeof Symbol<"u"&&v[Symbol.iterator]!=null||v["@@iterator"]!=null)return Array.from(v)}(nt)||function(v,R){if(v){if(typeof v=="string")return F(v,R);var B={}.toString.call(v).slice(8,-1);return B==="Object"&&v.constructor&&(B=v.constructor.name),B==="Map"||B==="Set"?Array.from(v):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?F(v,R):void 0}}(nt)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function F(nt,v){(v==null||v>nt.length)&&(v=nt.length);for(var R=0,B=Array(v);R<v;R++)B[R]=nt[R];return B}function ft(nt,v){for(var R=0;R<v.length;R++){var B=v[R];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(nt,P(B.key),B)}}function E(nt,v,R){return(v=P(v))in nt?Object.defineProperty(nt,v,{value:R,enumerable:!0,configurable:!0,writable:!0}):nt[v]=R,nt}function P(nt){var v=function(R){if(at(R)!="object"||!R)return R;var B=R[Symbol.toPrimitive];if(B!==void 0){var K=B.call(R,"string");if(at(K)!="object")return K;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(R)}(nt);return at(v)=="symbol"?v:v+""}const et=function(){function nt(B,K){var j=this;if(function(G,ut){if(!(G instanceof ut))throw new TypeError("Cannot call a class as a function")}(this,nt),E(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),E(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),E(this,"setupWrapperElement",function(){j.state.elements.container&&(j.state.elements.wrapper.className=j.options.wrapperClassName,j.state.elements.cursor.className=j.options.cursorClassName,j.state.elements.cursor.innerHTML=j.options.cursor,j.state.elements.container.innerHTML="",j.state.elements.container.appendChild(j.state.elements.wrapper),j.state.elements.container.appendChild(j.state.elements.cursor))}),E(this,"start",function(){return j.state.eventLoopPaused=!1,j.runEventLoop(),j}),E(this,"pause",function(){return j.state.eventLoopPaused=!0,j}),E(this,"stop",function(){return j.state.eventLoop&&((0,h.cancel)(j.state.eventLoop),j.state.eventLoop=null),j}),E(this,"pauseFor",function(G){return j.addEventToQueue($,{ms:G}),j}),E(this,"typeOutAllStrings",function(){return typeof j.options.strings=="string"?(j.typeString(j.options.strings).pauseFor(j.options.pauseFor),j):(j.options.strings.forEach(function(G){j.typeString(G).pauseFor(j.options.pauseFor).deleteAll(j.options.deleteSpeed)}),j)}),E(this,"typeString",function(G){var ut=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(S(G))return j.typeOutHTMLString(G,ut);if(G){var rt=(j.options||{}).stringSplitter,bt=typeof rt=="function"?rt(G):G.split("");j.typeCharacters(bt,ut)}return j}),E(this,"pasteString",function(G){var ut=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return S(G)?j.typeOutHTMLString(G,ut,!0):(G&&j.addEventToQueue(J,{character:G,node:ut}),j)}),E(this,"typeOutHTMLString",function(G){var ut=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,rt=arguments.length>2?arguments[2]:void 0,bt=function(Tt){var yt=document.createElement("div");return yt.innerHTML=Tt,yt.childNodes}(G);if(bt.length>0)for(var St=0;St<bt.length;St++){var Rt=bt[St],Qt=Rt.innerHTML;Rt&&Rt.nodeType!==3?(Rt.innerHTML="",j.addEventToQueue(ot,{node:Rt,parentNode:ut}),rt?j.pasteString(Qt,Rt):j.typeString(Qt,Rt)):Rt.textContent&&(rt?j.pasteString(Rt.textContent,ut):j.typeString(Rt.textContent,ut))}return j}),E(this,"deleteAll",function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return j.addEventToQueue(H,{speed:G}),j}),E(this,"changeDeleteSpeed",function(G){if(!G)throw new Error("Must provide new delete speed");return j.addEventToQueue(L,{speed:G}),j}),E(this,"changeDelay",function(G){if(!G)throw new Error("Must provide new delay");return j.addEventToQueue(Z,{delay:G}),j}),E(this,"changeCursor",function(G){if(!G)throw new Error("Must provide new cursor");return j.addEventToQueue(I,{cursor:G}),j}),E(this,"deleteChars",function(G){if(!G)throw new Error("Must provide amount of characters to delete");for(var ut=0;ut<G;ut++)j.addEventToQueue(_);return j}),E(this,"callFunction",function(G,ut){if(!G||typeof G!="function")throw new Error("Callback must be a function");return j.addEventToQueue(V,{cb:G,thisArg:ut}),j}),E(this,"typeCharacters",function(G){var ut=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G||!Array.isArray(G))throw new Error("Characters must be an array");return G.forEach(function(rt){j.addEventToQueue(T,{character:rt,node:ut})}),j}),E(this,"removeCharacters",function(G){if(!G||!Array.isArray(G))throw new Error("Characters must be an array");return G.forEach(function(){j.addEventToQueue(_)}),j}),E(this,"addEventToQueue",function(G,ut){var rt=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return j.addEventToStateProperty(G,ut,rt,"eventQueue")}),E(this,"addReverseCalledEvent",function(G,ut){var rt=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return j.options.loop?j.addEventToStateProperty(G,ut,rt,"reverseCalledEvents"):j}),E(this,"addEventToStateProperty",function(G,ut){var rt=arguments.length>2&&arguments[2]!==void 0&&arguments[2],bt=arguments.length>3?arguments[3]:void 0,St={eventName:G,eventArgs:ut||{}};return j.state[bt]=rt?[St].concat(lt(j.state[bt])):[].concat(lt(j.state[bt]),[St]),j}),E(this,"runEventLoop",function(){j.state.lastFrameTime||(j.state.lastFrameTime=Date.now());var G=Date.now(),ut=G-j.state.lastFrameTime;if(!j.state.eventQueue.length){if(!j.options.loop)return;j.state.eventQueue=lt(j.state.calledEvents),j.state.calledEvents=[],j.options=q({},j.state.initialOptions)}if(j.state.eventLoop=x()(j.runEventLoop),!j.state.eventLoopPaused){if(j.state.pauseUntil){if(G<j.state.pauseUntil)return;j.state.pauseUntil=null}var rt,bt=lt(j.state.eventQueue),St=bt.shift();if(!(ut<=(rt=St.eventName===W||St.eventName===_?j.options.deleteSpeed==="natural"?y(40,80):j.options.deleteSpeed:j.options.delay==="natural"?y(120,160):j.options.delay))){var Rt=St.eventName,Qt=St.eventArgs;switch(j.logInDevMode({currentEvent:St,state:j.state,delay:rt}),Rt){case J:case T:var Tt=Qt.character,yt=Qt.node,Vt=document.createTextNode(Tt),en=Vt;j.options.onCreateTextNode&&typeof j.options.onCreateTextNode=="function"&&(en=j.options.onCreateTextNode(Tt,Vt)),en&&(yt?yt.appendChild(en):j.state.elements.wrapper.appendChild(en)),j.state.visibleNodes=[].concat(lt(j.state.visibleNodes),[{type:"TEXT_NODE",character:Tt,node:en}]);break;case _:bt.unshift({eventName:W,eventArgs:{removingCharacterNode:!0}});break;case $:var cn=St.eventArgs.ms;j.state.pauseUntil=Date.now()+parseInt(cn);break;case V:var Kl=St.eventArgs,Jl=Kl.cb,Pl=Kl.thisArg;Jl.call(Pl,{elements:j.state.elements});break;case ot:var Ua=St.eventArgs,Ze=Ua.node,ne=Ua.parentNode;ne?ne.appendChild(Ze):j.state.elements.wrapper.appendChild(Ze),j.state.visibleNodes=[].concat(lt(j.state.visibleNodes),[{type:tt,node:Ze,parentNode:ne||j.state.elements.wrapper}]);break;case H:var br=j.state.visibleNodes,Ve=Qt.speed,Xn=[];Ve&&Xn.push({eventName:L,eventArgs:{speed:Ve,temp:!0}});for(var ln=0,Gn=br.length;ln<Gn;ln++)Xn.push({eventName:W,eventArgs:{removingCharacterNode:!1}});Ve&&Xn.push({eventName:L,eventArgs:{speed:j.options.deleteSpeed,temp:!0}}),bt.unshift.apply(bt,Xn);break;case W:var sn=St.eventArgs.removingCharacterNode;if(j.state.visibleNodes.length){var Ke=j.state.visibleNodes.pop(),gr=Ke.type,ae=Ke.node,ee=Ke.character;j.options.onRemoveNode&&typeof j.options.onRemoveNode=="function"&&j.options.onRemoveNode({node:ae,character:ee}),ae&&ae.parentNode.removeChild(ae),gr===tt&&sn&&bt.unshift({eventName:W,eventArgs:{}})}break;case L:j.options.deleteSpeed=St.eventArgs.speed;break;case Z:j.options.delay=St.eventArgs.delay;break;case I:j.options.cursor=St.eventArgs.cursor,j.state.elements.cursor.innerHTML=St.eventArgs.cursor}j.options.loop&&(St.eventName===W||St.eventArgs&&St.eventArgs.temp||(j.state.calledEvents=[].concat(lt(j.state.calledEvents),[St]))),j.state.eventQueue=bt,j.state.lastFrameTime=G}}}),B)if(typeof B=="string"){var mt=document.querySelector(B);if(!mt)throw new Error("Could not find container element");this.state.elements.container=mt}else this.state.elements.container=B;K&&(this.options=q(q({},this.options),K)),this.state.initialOptions=q({},this.options),this.init()}var v,R;return v=nt,(R=[{key:"init",value:function(){var B,K;this.setupWrapperElement(),this.addEventToQueue(I,{cursor:this.options.cursor},!0),this.addEventToQueue(H,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(B=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(K=document.createElement("style")).appendChild(document.createTextNode(B)),document.head.appendChild(K),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(B){this.options.devMode&&console.log(B)}}])&&ft(v.prototype,R),Object.defineProperty(v,"prototype",{writable:!1}),nt}()},9935:d=>{d.exports=function(){return!1}}},z={};function N(d){var p=z[d];if(p!==void 0)return p.exports;var r=z[d]={id:d,loaded:!1,exports:{}};return s[d].call(r.exports,r,r.exports,N),r.loaded=!0,r.exports}N.n=d=>{var p=d&&d.__esModule?()=>d.default:()=>d;return N.d(p,{a:p}),p},N.d=(d,p)=>{for(var r in p)N.o(p,r)&&!N.o(d,r)&&Object.defineProperty(d,r,{enumerable:!0,get:p[r]})},N.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),N.o=(d,p)=>Object.prototype.hasOwnProperty.call(d,p),N.nmd=d=>(d.paths=[],d.children||(d.children=[]),d);var Q={};return(()=>{N.d(Q,{default:()=>ot});var d=N(9155),p=N.n(d),r=N(9905),h=N(2404),x=N.n(h);function S(L){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Z){return typeof Z}:function(Z){return Z&&typeof Symbol=="function"&&Z.constructor===Symbol&&Z!==Symbol.prototype?"symbol":typeof Z},S(L)}function y(L,Z){for(var I=0;I<Z.length;I++){var J=Z[I];J.enumerable=J.enumerable||!1,J.configurable=!0,"value"in J&&(J.writable=!0),Object.defineProperty(L,$(J.key),J)}}function T(L,Z){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(I,J){return I.__proto__=J,I},T(L,Z)}function _(L){if(L===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L}function H(){try{var L=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H=function(){return!!L})()}function W(L){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(Z){return Z.__proto__||Object.getPrototypeOf(Z)},W(L)}function $(L){var Z=function(I){if(S(I)!="object"||!I)return I;var J=I[Symbol.toPrimitive];if(J!==void 0){var tt=J.call(I,"string");if(S(tt)!="object")return tt;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(I)}(L);return S(Z)=="symbol"?Z:Z+""}var V=function(L){(function(at,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function");at.prototype=Object.create(Y&&Y.prototype,{constructor:{value:at,writable:!0,configurable:!0}}),Object.defineProperty(at,"prototype",{writable:!1}),Y&&T(at,Y)})(tt,L);var Z,I,J=function(at){var Y=H();return function(){var q,lt=W(at);if(Y){var F=W(this).constructor;q=Reflect.construct(lt,arguments,F)}else q=lt.apply(this,arguments);return function(ft,E){if(E&&(S(E)=="object"||typeof E=="function"))return E;if(E!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _(ft)}(this,q)}}(tt);function tt(){var at,Y,q,lt;(function(P,et){if(!(P instanceof et))throw new TypeError("Cannot call a class as a function")})(this,tt);for(var F=arguments.length,ft=new Array(F),E=0;E<F;E++)ft[E]=arguments[E];return Y=_(at=J.call.apply(J,[this].concat(ft))),lt={instance:null},(q=$(q="state"))in Y?Object.defineProperty(Y,q,{value:lt,enumerable:!0,configurable:!0,writable:!0}):Y[q]=lt,at}return Z=tt,(I=[{key:"componentDidMount",value:function(){var at=this,Y=new r.default(this.typewriter,this.props.options);this.setState({instance:Y},function(){var q=at.props.onInit;q&&q(Y)})}},{key:"componentDidUpdate",value:function(at){x()(this.props.options,at.options)||this.setState({instance:new r.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var at=this,Y=this.props.component;return p().createElement(Y,{ref:function(q){return at.typewriter=q},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&y(Z.prototype,I),Object.defineProperty(Z,"prototype",{writable:!1}),tt}(d.Component);V.defaultProps={component:"div"};const ot=V})(),Q.default})())}(fr)),fr.exports}var Kp=Vp();const Jp=Bu(Kp);function Pp(){const[u,m]=bn.useState(!1);bn.useEffect(()=>{const z=()=>{window.scrollY>500?m(!0):m(!1)};return window.addEventListener("scroll",z),()=>{window.removeEventListener("scroll",z)}},[]);function b(){window.scrollTo(0,0)}bn.useEffect(()=>{Le.init()},[]);const s=f.jsx(Jp,{options:{strings:["Software Developer","Web Developer","App Developer"],autoStart:!0,loop:!0,delay:70,deleteSpeed:70}});return f.jsxs("div",{className:"container-fluid d-flex justify-content-center align-items-center homecontainer",id:"Home",children:[f.jsxs("div",{className:"row d-flex justify-content-center align-items-center ",children:[f.jsxs("div",{"data-aos":"fade-right",className:"col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 homecontentcol",children:[f.jsx("h1",{className:"hello",children:"Hello,"}),f.jsx("h1",{className:"iamraja",children:"I'm Raja"}),f.jsxs("h1",{className:"typewritecontent",children:["I Am ",s]}),f.jsx("p",{children:"I am a full-stack developer proficient in React, Node.js, and Python, dedicated to building dynamic and responsive web applications. My passion lies in creating seamless user experiences and efficient back-end solutions."}),f.jsx("button",{className:"btn",children:"Hire Me"})]}),f.jsx("div",{"data-aos":"zoom-in",className:"col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 homeimgcol",children:f.jsxs("div",{className:"homeimgdiv",children:[f.jsx("img",{src:"src\\assets\\me\\homeimg.png",alt:""}),f.jsx("img",{src:"src\\assets\\svg\\react-svgrepo-com.svg",alt:""}),f.jsx("img",{src:"src\\assets\\svg\\node-js-svgrepo-com.svg",alt:""}),f.jsx("img",{src:"src\\assets\\svg\\python-svgrepo-com.svg",alt:""}),f.jsx("img",{src:"src\\assets\\svg\\angular-svgrepo-com.svg",alt:""})]})})]}),u?f.jsx("div",{className:"clicktopbox",children:f.jsx("span",{children:f.jsx(Yp,{onClick:b})})}):""]})}function e0(u){return Pn({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"},child:[]}]})(u)}function l0(u){return Pn({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"},child:[]}]})(u)}function i0(u){return Pn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"},child:[]},{tag:"path",attr:{d:"M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"},child:[]}]})(u)}function Wp(){return bn.useEffect(()=>{Le.init()},[]),f.jsx("div",{className:"container mt-3 p-sm-5 contactcontainer",id:"Contact",children:f.jsxs("div",{className:"row contactmaprow",children:[f.jsx("div",{"data-aos":"fade-up","data-aos-duration":"3000",className:"col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6",children:f.jsx("div",{className:"contactmapdiv",children:f.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.383579119971!2d79.78761717505955!3d11.947922888281207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU2JzUyLjUiTiA3OcKwNDcnMjQuNyJF!5e0!3m2!1sen!2sin!4v1748534034069!5m2!1sen!2sin",loading:"lazy"})})}),f.jsx("div",{"data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"1500",className:"col-12 col-md-6  col-lg-6 col-xl-6 col-xxl-6 ",children:f.jsxs("div",{className:"row contactinforow",children:[f.jsxs("div",{"data-aos":"flip-left","data-aos-delay":"100",className:"col-12 contactaddressdiv",children:[f.jsx("span",{children:f.jsx(e0,{})}),f.jsxs("div",{children:[f.jsx("h1",{children:"Address : "}),f.jsx("h4",{children:"No : 22 Murugan Koil Street, priyadarshini nagar, Shanmugapuram, Puducherry 605009"})]})]}),f.jsxs("div",{"data-aos":"flip-right","data-aos-delay":"100",className:"col-12 contactmobilediv",children:[f.jsx("span",{children:f.jsx(l0,{})}),f.jsxs("div",{children:[f.jsx("h1",{children:"Mobile : "}),f.jsx("h4",{children:"+91 9342086309"})]})]}),f.jsxs("div",{"data-aos":"zoom-in","data-aos-delay":"100",className:"col-12 contactgmaildiv",children:[f.jsx("span",{children:f.jsx(i0,{})}),f.jsxs("div",{children:[f.jsx("h1",{children:"Gmail : "}),f.jsx("h4",{children:"massraja625@gmail.com"})]})]}),f.jsxs("div",{"data-aos":"fade-up","data-aos-delay":"100",className:"col-12 contacttelegramdiv",children:[f.jsx("span",{children:f.jsx(Bp,{})}),f.jsxs("div",{children:[f.jsx("h1",{children:"Telegram"}),f.jsx("h4",{children:"+91 9342086309"})]})]}),f.jsx("div",{"data-aos":"fade-zoom-in","data-aos-easing":"ease-in-back","data-aos-delay":"300","data-aos-offset":"0",className:"col-12 my-4 contactsocialmediadiv",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://wa.me/9342086309",className:"whatsapp",children:f.jsx(Gu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.instagram.com/_._._call_me_raja_._._?igsh=MnRhM2ZnemtmZHp1",className:"instagram",children:f.jsx(Yu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/share/16gTXQ9Q7i/",className:"facebook",children:f.jsx(Qu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://x.com/RAJA25722264924?t=yKjXrtL0EfusNJW32BJEfA&s=09",className:"twitter",children:f.jsx(Lu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",className:"linkin",children:f.jsx(Xu,{})})})]})})]})})]})})}function $p(){return f.jsxs("div",{className:"container-fluied container-xxl footercontainer",children:[f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 footermee",children:[f.jsxs("span",{children:[f.jsx("img",{src:"src\\assets\\me\\homeimg.png",alt:""}),f.jsx("h1",{children:"Raja.."})]}),f.jsx("p",{children:"Thank you for visiting my portfolio. I appreciate your time and interest!. If you have any questions or would like to collaborate, feel free to reach out."})]}),f.jsxs("div",{className:"col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 footerabout",children:[f.jsx("h3",{children:"About"}),f.jsxs("h5",{children:[f.jsx("span",{children:f.jsx(e0,{style:{color:"aqua"}})}),f.jsx("p",{className:"footeraddressptag",children:"No : 22 Murugan Koil Street, priyadarshini nagar, Shanmugapuram, Puducherry 605009"})]}),f.jsxs("h5",{children:[f.jsx("span",{children:f.jsx(l0,{style:{color:"lightgreen"}})}),f.jsx("p",{children:"+91 9342086309"})]}),f.jsxs("h5",{children:[f.jsx("span",{children:f.jsx(i0,{style:{color:"#F7374F"}})}),f.jsx("p",{children:"massraja625@gmail.com"})]})]}),f.jsxs("div",{className:"col footernavlinks",children:[f.jsx("h3",{children:"NavLinks"}),f.jsx("p",{children:"Home"}),f.jsx("p",{children:"About"}),f.jsx("p",{children:"Skill"}),f.jsx("p",{children:"Project"}),f.jsx("p",{children:"Contact"})]}),f.jsxs("div",{className:"col footerhelp",children:[f.jsx("h3",{children:"Help"}),f.jsx("p",{children:"FAQ"}),f.jsx("p",{children:"Support"}),f.jsx("p",{children:"Maintenance"}),f.jsx("p",{children:"Quality"}),f.jsx("p",{children:"24/7"})]})]}),f.jsxs("div",{className:"row",children:[f.jsxs("div",{className:"col-12 col-md-6 footerprivacydiv",children:[f.jsx("p",{children:"Privacy Policy"}),f.jsx("p",{children:"Terms & Conditions"})]}),f.jsx("div",{className:"col-12 col-md-6 footersocialmediadiv ",children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx("a",{href:"https://wa.me/9342086309",className:"whatsapp",children:f.jsx(Gu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.instagram.com/_._._call_me_raja_._._?igsh=MnRhM2ZnemtmZHp1",className:"instagram",children:f.jsx(Yu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://www.facebook.com/share/16gTXQ9Q7i/",className:"facebook",children:f.jsx(Qu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"https://x.com/RAJA25722264924?t=yKjXrtL0EfusNJW32BJEfA&s=09",className:"twitter",children:f.jsx(Lu,{})})}),f.jsx("li",{children:f.jsx("a",{href:"#",className:"linkin",children:f.jsx(Xu,{})})})]})})]}),f.jsx("div",{className:"row",children:f.jsx("div",{className:"col footercopyright",children:f.jsx("p",{children:"Copyright © 2025 Raja.. All Rights are Reserved"})})})]})}function Fp(){return bn.useEffect(()=>{Le.init()},[]),f.jsx("div",{className:"container py-4 gettouchcontainer",children:f.jsx("div",{className:"row",children:f.jsxs("div",{"data-aos":"zoom-in-up",className:"col-12  gettouchdiv",children:[f.jsx("h1",{children:"Get in Touch"}),f.jsxs("form",{action:"",children:[f.jsx("label",{htmlFor:"",className:"mb-2",children:"Name"}),f.jsx("input",{type:"text",className:"mb-3",placeholder:"Enter Your Name",required:!0}),f.jsx("label",{htmlFor:"",className:"mb-2",children:"Email"}),f.jsx("input",{type:"email",className:"mb-3",placeholder:"Enter Your Email",required:!0}),f.jsx("label",{htmlFor:"",className:"mb-2",children:"Message"}),f.jsx("textarea",{name:"",className:"mb-3",id:"",required:!0}),f.jsx("button",{children:"Submit"})]})]})})})}function Ip(){const[u,m]=bn.useState(!0);function b(s){m(s)}return f.jsx(f.Fragment,{children:f.jsxs("div",{className:"container-fluied navbarcontainer",children:[f.jsxs("div",{className:"row containerrow ",children:[f.jsx("div",{className:"col-2 col-sm-2 col-md-2 toggleicondiv",children:u?f.jsx("span",{onClick:()=>{b(!1)},children:f.jsx("i",{className:"bi bi-list"})}):f.jsx("span",{onClick:()=>{b(!0)},children:f.jsx("i",{className:"bi bi-x-lg"})})}),f.jsxs("div",{className:"col-7 col-sm-8 col-md-8 col-lg-2  logobox ",children:[f.jsxs("a",{href:"#",children:[f.jsx("img",{src:"src\\assets\\me\\homeimg.png",alt:""})," "]}),f.jsxs("a",{href:"#",children:[" ",f.jsx("h1",{children:"Raja"})," "]})]}),f.jsx("div",{className:" col-lg-8  navbardiv ",children:f.jsxs("ul",{className:"",children:[f.jsx("li",{children:f.jsx("a",{href:"#Home",children:"Home"})}),f.jsx("li",{children:f.jsx("a",{href:"#About",children:"About"})}),f.jsx("li",{children:f.jsx("a",{href:"#Services",children:"Services"})}),f.jsx("li",{children:f.jsx("a",{href:"#Contact",children:"Contact"})})]})}),f.jsx("div",{className:"col-3 col-sm-2 col-md-2 col-lg-2  resumebtndiv",children:f.jsxs("a",{href:"src\\assets\\Raja resume.pdf",download:"Resume",children:["  ",f.jsx("button",{className:"resumebtn",children:" Resume "}),"   "]})})]}),f.jsx("div",{className:u===!1?"shownavbar":"hidenavbar",children:f.jsxs("ul",{className:"",children:[f.jsx("li",{children:f.jsx("a",{href:"#Home",children:"Home"})}),f.jsx("li",{children:f.jsx("a",{href:"#About",children:"About"})}),f.jsx("li",{children:f.jsx("a",{href:"#Services",children:"Services"})}),f.jsx("li",{children:f.jsx("a",{href:"#Contact",children:"Contact"})})]})})]})})}function tm(){return bn.useEffect(()=>{Le.init()},[]),f.jsxs("div",{className:"container skillbuildcontainer",id:"Services",children:[f.jsx("h1",{className:"mb-5 pt-5",children:"Services"}),f.jsxs("div",{className:"row skillbuildrow",children:[f.jsx("div",{"data-aos":"zoom-out-right",className:"col-12 col-md-6 col-lg-4 mb-5",children:f.jsxs("div",{className:"skillbuilddiv",children:[f.jsx("img",{src:"src\\assets\\web.png",alt:"",className:"skillbuildwebimg"}),f.jsx("h1",{children:"Web Developer"}),f.jsx("p",{children:"Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, like HTML, CSS, and JavaScript, to develop websites and web applications"})]})}),f.jsx("div",{"data-aos":"zoom-in-up",className:"col-12 col-md-6 col-lg-4 mb-5",children:f.jsxs("div",{className:"skillbuilddiv",children:[f.jsx("img",{src:"src\\assets\\software.png",alt:"",className:"skillbuildsoftimg"}),f.jsx("h1",{children:"Software Developer"}),f.jsx("p",{children:"Software development is the process of designing, building, testing, and maintaining computer programs and applications. It involves creating software solutions that meet specific user needs, from simple mobile apps to complex enterprise systems"})]})}),f.jsx("div",{"data-aos":"fade-down",className:"col-12 col-md-6 col-lg-4 mb-5",children:f.jsxs("div",{className:"skillbuilddiv",children:[f.jsx("img",{src:"src\\assets\\app.png",alt:"",className:"skillbuildsoftimg"}),f.jsx("h1",{children:"App Developer"}),f.jsx("p",{children:"A mobile app developer uses programming languages and development skills to create, test, and develop applications on mobile devices. They work in popular operating system environments like iOS and Android"})]})})]}),f.jsxs("div",{className:"row  qmprow",children:[f.jsx("div",{"data-aos":"zoom-in-right",className:"col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5 mx-5 qmpcol ",children:f.jsxs("div",{className:"skillbuildqualitydiv skillbuilddivss",children:[f.jsx("img",{src:"src\\assets\\quality.png",alt:""}),f.jsx("h1",{children:"Quality"}),f.jsx("p",{children:"It involves key factors like portability, usability, correctness, and efficiency, A product is reliable, maintainable, and user-friendly"})]})}),f.jsx("div",{"data-aos":"fade-down",className:"col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5 mx-5 qmpcol",children:f.jsxs("div",{className:"skillbuildmaintendiv skillbuilddivss",children:[f.jsx("img",{src:"src\\assets\\maintenance.png",alt:""}),f.jsx("h1",{children:"Maintenance"}),f.jsx("p",{children:"Maintenance involves modifying and updating software after its initial deployment to correct errors and adapt to new environments"})]})}),f.jsx("div",{"data-aos":"fade-up",className:"col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5  mx-5 qmpcol",children:f.jsxs("div",{className:"skillbuildperformdiv skillbuilddivss",children:[f.jsx("img",{src:"src\\assets\\performance.png",alt:""}),f.jsx("h1",{children:"Performance"}),f.jsx("p",{children:"Software that focuses on ensuring the system's efficiency, responsiveness, optimization,stability, performance and user experience"})]})})]})]})}function nm(){return bn.useEffect(()=>{Le.init()},[]),f.jsx("div",{className:"container mt-5 mb-4",children:f.jsxs("div",{className:"row",children:[f.jsx("div",{"data-aos":"fade-up",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\react-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"React"})]})}),f.jsx("div",{"data-aos":"fade-down",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\angular-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"Angular"})]})}),f.jsx("div",{"data-aos":"fade-right",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\node-js-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"Node.js"})]})}),f.jsx("div",{"data-aos":"flip-left",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\php-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"PHP"})]})}),f.jsx("div",{"data-aos":"flip-right",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\sql-database-sql-azure-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"SQL"})]})}),f.jsx("div",{"data-aos":"fade-up","data-aos-anchor-placement":"center-bottom",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\java-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"Java"})]})}),f.jsx("div",{"data-aos":"zoom-in",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv react",children:[f.jsx("img",{src:"src\\assets\\svg\\python-svgrepo-com.svg",alt:""}),f.jsx("h1",{children:"Python"})]})}),f.jsx("div",{"data-aos":"fade-up","data-aos-duration":"3000",className:"col-6 col-md-3 col-lg-3",children:f.jsxs("div",{className:"skilldiv bootstrap",children:[f.jsx("img",{src:"src\\assets\\svg\\bootstrap-fill-svgrepo-com.svg"}),f.jsx("h1",{children:"Bootstrap"})]})})]})})}function Pt(u,m){m===void 0&&(m={});var b=m.insertAt;if(u&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],z=document.createElement("style");z.type="text/css",b==="top"&&s.firstChild?s.insertBefore(z,s.firstChild):s.appendChild(z),z.styleSheet?z.styleSheet.cssText=u:z.appendChild(document.createTextNode(u))}}Pt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Jn=function(){return Jn=Object.assign||function(u){for(var m,b=1,s=arguments.length;b<s;b++)for(var z in m=arguments[b])Object.prototype.hasOwnProperty.call(m,z)&&(u[z]=m[z]);return u},Jn.apply(this,arguments)};function pr(u){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},pr(u)}var am=/^\s+/,em=/\s+$/;function st(u,m){if(m=m||{},(u=u||"")instanceof st)return u;if(!(this instanceof st))return new st(u,m);var b=function(s){var z={r:0,g:0,b:0},N=1,Q=null,d=null,p=null,r=!1,h=!1;typeof s=="string"&&(s=function(T){T=T.replace(am,"").replace(em,"").toLowerCase();var _,H=!1;if(Cu[T])T=Cu[T],H=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=Bn.rgb.exec(T))?{r:_[1],g:_[2],b:_[3]}:(_=Bn.rgba.exec(T))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=Bn.hsl.exec(T))?{h:_[1],s:_[2],l:_[3]}:(_=Bn.hsla.exec(T))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=Bn.hsv.exec(T))?{h:_[1],s:_[2],v:_[3]}:(_=Bn.hsva.exec(T))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=Bn.hex8.exec(T))?{r:Tn(_[1]),g:Tn(_[2]),b:Tn(_[3]),a:t0(_[4]),format:H?"name":"hex8"}:(_=Bn.hex6.exec(T))?{r:Tn(_[1]),g:Tn(_[2]),b:Tn(_[3]),format:H?"name":"hex"}:(_=Bn.hex4.exec(T))?{r:Tn(_[1]+""+_[1]),g:Tn(_[2]+""+_[2]),b:Tn(_[3]+""+_[3]),a:t0(_[4]+""+_[4]),format:H?"name":"hex8"}:(_=Bn.hex3.exec(T))?{r:Tn(_[1]+""+_[1]),g:Tn(_[2]+""+_[2]),b:Tn(_[3]+""+_[3]),format:H?"name":"hex"}:!1}(s)),pr(s)=="object"&&(fa(s.r)&&fa(s.g)&&fa(s.b)?(x=s.r,S=s.g,y=s.b,z={r:255*qt(x,255),g:255*qt(S,255),b:255*qt(y,255)},r=!0,h=String(s.r).substr(-1)==="%"?"prgb":"rgb"):fa(s.h)&&fa(s.s)&&fa(s.v)?(Q=Vl(s.s),d=Vl(s.v),z=function(T,_,H){T=6*qt(T,360),_=qt(_,100),H=qt(H,100);var W=Math.floor(T),$=T-W,V=H*(1-_),ot=H*(1-$*_),L=H*(1-(1-$)*_),Z=W%6,I=[H,ot,V,V,L,H][Z],J=[L,H,H,ot,V,V][Z],tt=[V,V,L,H,H,ot][Z];return{r:255*I,g:255*J,b:255*tt}}(s.h,Q,d),r=!0,h="hsv"):fa(s.h)&&fa(s.s)&&fa(s.l)&&(Q=Vl(s.s),p=Vl(s.l),z=function(T,_,H){var W,$,V;function ot(I,J,tt){return tt<0&&(tt+=1),tt>1&&(tt-=1),tt<1/6?I+6*(J-I)*tt:tt<.5?J:tt<2/3?I+(J-I)*(2/3-tt)*6:I}if(T=qt(T,360),_=qt(_,100),H=qt(H,100),_===0)W=$=V=H;else{var L=H<.5?H*(1+_):H+_-H*_,Z=2*H-L;W=ot(Z,L,T+1/3),$=ot(Z,L,T),V=ot(Z,L,T-1/3)}return{r:255*W,g:255*$,b:255*V}}(s.h,Q,p),r=!0,h="hsl"),s.hasOwnProperty("a")&&(N=s.a));var x,S,y;return N=r0(N),{ok:r,format:s.format||h,r:Math.min(255,Math.max(z.r,0)),g:Math.min(255,Math.max(z.g,0)),b:Math.min(255,Math.max(z.b,0)),a:N}}(u);this._originalInput=u,this._r=b.r,this._g=b.g,this._b=b.b,this._a=b.a,this._roundA=Math.round(100*this._a)/100,this._format=m.format||b.format,this._gradientType=m.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=b.ok}function Pd(u,m,b){u=qt(u,255),m=qt(m,255),b=qt(b,255);var s,z,N=Math.max(u,m,b),Q=Math.min(u,m,b),d=(N+Q)/2;if(N==Q)s=z=0;else{var p=N-Q;switch(z=d>.5?p/(2-N-Q):p/(N+Q),N){case u:s=(m-b)/p+(m<b?6:0);break;case m:s=(b-u)/p+2;break;case b:s=(u-m)/p+4}s/=6}return{h:s,s:z,l:d}}function Wd(u,m,b){u=qt(u,255),m=qt(m,255),b=qt(b,255);var s,z,N=Math.max(u,m,b),Q=Math.min(u,m,b),d=N,p=N-Q;if(z=N===0?0:p/N,N==Q)s=0;else{switch(N){case u:s=(m-b)/p+(m<b?6:0);break;case m:s=(b-u)/p+2;break;case b:s=(u-m)/p+4}s/=6}return{h:s,s:z,v:d}}function $d(u,m,b,s){var z=[Yn(Math.round(u).toString(16)),Yn(Math.round(m).toString(16)),Yn(Math.round(b).toString(16))];return s&&z[0].charAt(0)==z[0].charAt(1)&&z[1].charAt(0)==z[1].charAt(1)&&z[2].charAt(0)==z[2].charAt(1)?z[0].charAt(0)+z[1].charAt(0)+z[2].charAt(0):z.join("")}function Fd(u,m,b,s){return[Yn(o0(s)),Yn(Math.round(u).toString(16)),Yn(Math.round(m).toString(16)),Yn(Math.round(b).toString(16))].join("")}function lm(u,m){m=m===0?0:m||10;var b=st(u).toHsl();return b.s-=m/100,b.s=vr(b.s),st(b)}function im(u,m){m=m===0?0:m||10;var b=st(u).toHsl();return b.s+=m/100,b.s=vr(b.s),st(b)}function rm(u){return st(u).desaturate(100)}function om(u,m){m=m===0?0:m||10;var b=st(u).toHsl();return b.l+=m/100,b.l=vr(b.l),st(b)}function um(u,m){m=m===0?0:m||10;var b=st(u).toRgb();return b.r=Math.max(0,Math.min(255,b.r-Math.round(-m/100*255))),b.g=Math.max(0,Math.min(255,b.g-Math.round(-m/100*255))),b.b=Math.max(0,Math.min(255,b.b-Math.round(-m/100*255))),st(b)}function cm(u,m){m=m===0?0:m||10;var b=st(u).toHsl();return b.l-=m/100,b.l=vr(b.l),st(b)}function sm(u,m){var b=st(u).toHsl(),s=(b.h+m)%360;return b.h=s<0?360+s:s,st(b)}function fm(u){var m=st(u).toHsl();return m.h=(m.h+180)%360,st(m)}function Id(u,m){if(isNaN(m)||m<=0)throw new Error("Argument to polyad must be a positive number");for(var b=st(u).toHsl(),s=[st(u)],z=360/m,N=1;N<m;N++)s.push(st({h:(b.h+N*z)%360,s:b.s,l:b.l}));return s}function dm(u){var m=st(u).toHsl(),b=m.h;return[st(u),st({h:(b+72)%360,s:m.s,l:m.l}),st({h:(b+216)%360,s:m.s,l:m.l})]}function hm(u,m,b){m=m||6,b=b||30;var s=st(u).toHsl(),z=360/b,N=[st(u)];for(s.h=(s.h-(z*m>>1)+720)%360;--m;)s.h=(s.h+z)%360,N.push(st(s));return N}function pm(u,m){m=m||6;for(var b=st(u).toHsv(),s=b.h,z=b.s,N=b.v,Q=[],d=1/m;m--;)Q.push(st({h:s,s:z,v:N})),N=(N+d)%1;return Q}st.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var u=this.toRgb();return(299*u.r+587*u.g+114*u.b)/1e3},getLuminance:function(){var u,m,b,s=this.toRgb();return u=s.r/255,m=s.g/255,b=s.b/255,.2126*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))+.7152*(m<=.03928?m/12.92:Math.pow((m+.055)/1.055,2.4))+.0722*(b<=.03928?b/12.92:Math.pow((b+.055)/1.055,2.4))},setAlpha:function(u){return this._a=r0(u),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var u=Wd(this._r,this._g,this._b);return{h:360*u.h,s:u.s,v:u.v,a:this._a}},toHsvString:function(){var u=Wd(this._r,this._g,this._b),m=Math.round(360*u.h),b=Math.round(100*u.s),s=Math.round(100*u.v);return this._a==1?"hsv("+m+", "+b+"%, "+s+"%)":"hsva("+m+", "+b+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var u=Pd(this._r,this._g,this._b);return{h:360*u.h,s:u.s,l:u.l,a:this._a}},toHslString:function(){var u=Pd(this._r,this._g,this._b),m=Math.round(360*u.h),b=Math.round(100*u.s),s=Math.round(100*u.l);return this._a==1?"hsl("+m+", "+b+"%, "+s+"%)":"hsla("+m+", "+b+"%, "+s+"%, "+this._roundA+")"},toHex:function(u){return $d(this._r,this._g,this._b,u)},toHexString:function(u){return"#"+this.toHex(u)},toHex8:function(u){return function(m,b,s,z,N){var Q=[Yn(Math.round(m).toString(16)),Yn(Math.round(b).toString(16)),Yn(Math.round(s).toString(16)),Yn(o0(z))];return N&&Q[0].charAt(0)==Q[0].charAt(1)&&Q[1].charAt(0)==Q[1].charAt(1)&&Q[2].charAt(0)==Q[2].charAt(1)&&Q[3].charAt(0)==Q[3].charAt(1)?Q[0].charAt(0)+Q[1].charAt(0)+Q[2].charAt(0)+Q[3].charAt(0):Q.join("")}(this._r,this._g,this._b,this._a,u)},toHex8String:function(u){return"#"+this.toHex8(u)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*qt(this._r,255))+"%",g:Math.round(100*qt(this._g,255))+"%",b:Math.round(100*qt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*qt(this._r,255))+"%, "+Math.round(100*qt(this._g,255))+"%, "+Math.round(100*qt(this._b,255))+"%)":"rgba("+Math.round(100*qt(this._r,255))+"%, "+Math.round(100*qt(this._g,255))+"%, "+Math.round(100*qt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(mm[$d(this._r,this._g,this._b,!0)]||!1)},toFilter:function(u){var m="#"+Fd(this._r,this._g,this._b,this._a),b=m,s=this._gradientType?"GradientType = 1, ":"";if(u){var z=st(u);b="#"+Fd(z._r,z._g,z._b,z._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+m+",endColorstr="+b+")"},toString:function(u){var m=!!u;u=u||this._format;var b=!1,s=this._a<1&&this._a>=0;return m||!s||u!=="hex"&&u!=="hex6"&&u!=="hex3"&&u!=="hex4"&&u!=="hex8"&&u!=="name"?(u==="rgb"&&(b=this.toRgbString()),u==="prgb"&&(b=this.toPercentageRgbString()),u!=="hex"&&u!=="hex6"||(b=this.toHexString()),u==="hex3"&&(b=this.toHexString(!0)),u==="hex4"&&(b=this.toHex8String(!0)),u==="hex8"&&(b=this.toHex8String()),u==="name"&&(b=this.toName()),u==="hsl"&&(b=this.toHslString()),u==="hsv"&&(b=this.toHsvString()),b||this.toHexString()):u==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return st(this.toString())},_applyModification:function(u,m){var b=u.apply(null,[this].concat([].slice.call(m)));return this._r=b._r,this._g=b._g,this._b=b._b,this.setAlpha(b._a),this},lighten:function(){return this._applyModification(om,arguments)},brighten:function(){return this._applyModification(um,arguments)},darken:function(){return this._applyModification(cm,arguments)},desaturate:function(){return this._applyModification(lm,arguments)},saturate:function(){return this._applyModification(im,arguments)},greyscale:function(){return this._applyModification(rm,arguments)},spin:function(){return this._applyModification(sm,arguments)},_applyCombination:function(u,m){return u.apply(null,[this].concat([].slice.call(m)))},analogous:function(){return this._applyCombination(hm,arguments)},complement:function(){return this._applyCombination(fm,arguments)},monochromatic:function(){return this._applyCombination(pm,arguments)},splitcomplement:function(){return this._applyCombination(dm,arguments)},triad:function(){return this._applyCombination(Id,[3])},tetrad:function(){return this._applyCombination(Id,[4])}},st.fromRatio=function(u,m){if(pr(u)=="object"){var b={};for(var s in u)u.hasOwnProperty(s)&&(b[s]=s==="a"?u[s]:Vl(u[s]));u=b}return st(u,m)},st.equals=function(u,m){return!(!u||!m)&&st(u).toRgbString()==st(m).toRgbString()},st.random=function(){return st.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},st.mix=function(u,m,b){b=b===0?0:b||50;var s=st(u).toRgb(),z=st(m).toRgb(),N=b/100;return st({r:(z.r-s.r)*N+s.r,g:(z.g-s.g)*N+s.g,b:(z.b-s.b)*N+s.b,a:(z.a-s.a)*N+s.a})},st.readability=function(u,m){var b=st(u),s=st(m);return(Math.max(b.getLuminance(),s.getLuminance())+.05)/(Math.min(b.getLuminance(),s.getLuminance())+.05)},st.isReadable=function(u,m,b){var s,z,N=st.readability(u,m);switch(z=!1,(s=function(Q){var d,p;return d=((Q=Q||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(Q.size||"small").toLowerCase(),d!=="AA"&&d!=="AAA"&&(d="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:d,size:p}}(b)).level+s.size){case"AAsmall":case"AAAlarge":z=N>=4.5;break;case"AAlarge":z=N>=3;break;case"AAAsmall":z=N>=7}return z},st.mostReadable=function(u,m,b){var s,z,N,Q,d=null,p=0;z=(b=b||{}).includeFallbackColors,N=b.level,Q=b.size;for(var r=0;r<m.length;r++)(s=st.readability(u,m[r]))>p&&(p=s,d=st(m[r]));return st.isReadable(u,d,{level:N,size:Q})||!z?d:(b.includeFallbackColors=!1,st.mostReadable(u,["#fff","#000"],b))};var Cu=st.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},mm=st.hexNames=function(u){var m={};for(var b in u)u.hasOwnProperty(b)&&(m[u[b]]=b);return m}(Cu);function r0(u){return u=parseFloat(u),(isNaN(u)||u<0||u>1)&&(u=1),u}function qt(u,m){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(u)&&(u="100%");var b=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(u);return u=Math.min(m,Math.max(0,parseFloat(u))),b&&(u=parseInt(u*m,10)/100),Math.abs(u-m)<1e-6?1:u%m/parseFloat(m)}function vr(u){return Math.min(1,Math.max(0,u))}function Tn(u){return parseInt(u,16)}function Yn(u){return u.length==1?"0"+u:""+u}function Vl(u){return u<=1&&(u=100*u+"%"),u}function o0(u){return Math.round(255*parseFloat(u)).toString(16)}function t0(u){return Tn(u)/255}var Ha,ur,cr,Bn=(ur="[\\s|\\(]+("+(Ha="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ha+")[,|\\s]+("+Ha+")\\s*\\)?",cr="[\\s|\\(]+("+Ha+")[,|\\s]+("+Ha+")[,|\\s]+("+Ha+")[,|\\s]+("+Ha+")\\s*\\)?",{CSS_UNIT:new RegExp(Ha),rgb:new RegExp("rgb"+ur),rgba:new RegExp("rgba"+cr),hsl:new RegExp("hsl"+ur),hsla:new RegExp("hsla"+cr),hsv:new RegExp("hsv"+ur),hsva:new RegExp("hsva"+cr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function fa(u){return!!Bn.CSS_UNIT.exec(u)}var vm=function(u,m){var b=(typeof u=="string"?parseInt(u):u)||0;if(b>=-5&&b<=5){var s=b,z=parseFloat(m),N=z+s*(z/5)*-1;return(N==0||N<=Number.EPSILON)&&(N=.1),{animationPeriod:N+"s"}}return{animationPeriod:m}},bm=function(u,m){var b=u||{},s="";switch(m){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var z={};if(b.fontSize){var N=b.fontSize;z=function(Q,d){var p={};for(var r in Q)Object.prototype.hasOwnProperty.call(Q,r)&&d.indexOf(r)<0&&(p[r]=Q[r]);if(Q!=null&&typeof Object.getOwnPropertySymbols=="function"){var h=0;for(r=Object.getOwnPropertySymbols(Q);h<r.length;h++)d.indexOf(r[h])<0&&Object.prototype.propertyIsEnumerable.call(Q,r[h])&&(p[r[h]]=Q[r[h]])}return p}(b,["fontSize"]),s=N}return{fontSize:s,styles:z}},gm={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},ym=function(u){var m=u.className,b=u.text,s=u.textColor,z=u.staticText,N=u.style;return b?An.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(m||"").trim(),style:Jn(Jn(Jn({},z&&gm),s&&{color:s,mixBlendMode:"unset"}),N&&N)},typeof b=="string"&&b.length?b:"loading"):null},u0="rgb(50, 205, 50)";function xm(u,m){if(m===void 0&&(m=0),u.length===0)throw new Error("Input array cannot be empty!");var b=[];return function s(z,N){return N===void 0&&(N=0),b.push.apply(b,z),b.length<N&&s(b,N),b.slice(0,N)}(u,m)}Pt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);st(u0).toRgb();Array.from({length:4},function(u,m){return"--atom-phase".concat(m+1,"-rgb")});Pt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--commet-phase".concat(m+1,"-color")});Pt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--OP-annulus-phase".concat(m+1,"-color")});function qu(u){return u&&u.Math===Math&&u}Pt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);qu(typeof window=="object"&&window)||qu(typeof self=="object"&&self)||qu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(u,m){return"--OP-dotted-phase".concat(m+1,"-color")});Pt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--OP-spokes-phase".concat(m+1,"-color")});Pt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(u,m){return"--OP-annulus-dual-sectors-phase".concat(m+1,"-color")});Pt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return["--OP-annulus-track-phase".concat(m+1,"-color"),"--OP-annulus-sector-phase".concat(m+1,"-color")]});Pt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--four-square-phase".concat(m+1,"-color")});Pt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--mosaic-phase".concat(m+1,"-color")});Pt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);var Qe=Array.from({length:4},function(u,m){return"--riple-phase".concat(m+1,"-color")}),Sm=function(u){var m,b=bm(u==null?void 0:u.style,u==null?void 0:u.size),s=b.styles,z=b.fontSize,N=u==null?void 0:u.easing,Q=vm(u==null?void 0:u.speedPlus,"1s").animationPeriod,d=function(p){var r={};if(p instanceof Array){for(var h=xm(p,Qe.length),x=0;x<h.length&&!(x>=4);x++)r[Qe[x]]=h[x];return r}try{if(typeof p!="string")throw new Error("Color String expected");for(var S=0;S<Qe.length;S++)r[Qe[S]]=p}catch(y){for(y instanceof Error?console.warn("[".concat(y.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <Riple /> indicator cannot be processed. Using default instead!")),S=0;S<Qe.length;S++)r[Qe[S]]=u0}return r}((m=u==null?void 0:u.color)!==null&&m!==void 0?m:"");return An.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:Jn(Jn(Jn(Jn(Jn({},z&&{fontSize:z}),Q&&{"--rli-animation-duration":Q}),N&&{"--rli-animation-function":N}),d),s),role:"status","aria-live":"polite","aria-label":"Loading"},An.createElement("span",{className:"rli-d-i-b riple-indicator"},An.createElement("span",{className:"rli-d-i-b riple"}),An.createElement("span",{className:"rli-d-i-b riple"}),An.createElement(ym,{className:"riple-text",text:u==null?void 0:u.text,textColor:u==null?void 0:u.textColor})))};Pt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--TD-pulsate-phase".concat(m+1,"-color")});Pt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--TD-brick-stack-phase".concat(m+1,"-color")});Pt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--TD-bob-phase".concat(m+1,"-color")});Pt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--TD-bounce-phase".concat(m+1,"-color")});Pt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--shape-phase".concat(m+1,"-color")});Pt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--trophySpin-phase".concat(m+1,"-color")});Pt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--slab-phase".concat(m+1,"-color")});Pt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(u,m){return"--life-line-phase".concat(m+1,"-color")});function Om(){return f.jsxs("div",{className:"loaderdiv",children:[f.jsx(Sm,{color:"#32cd32",size:"large",text:"",textColor:""}),f.jsx("img",{src:"src\\assets\\me\\homeimg.png",alt:"",className:"loaderimg"})]})}function _m(){const[u,m]=bn.useState(!1);return bn.useEffect(()=>{m(!0),setTimeout(()=>{m(!1)},2e3)},[]),f.jsx(f.Fragment,{children:u?f.jsx(Om,{}):f.jsxs(f.Fragment,{children:[f.jsx(Ip,{}),f.jsx(Pp,{}),f.jsx(Lp,{}),f.jsx(nm,{}),f.jsx(tm,{}),f.jsx(Wp,{}),f.jsx(Fp,{}),f.jsx($p,{})]})})}Dp.createRoot(document.getElementById("root")).render(f.jsx(bn.StrictMode,{children:f.jsx(_m,{})}));
