function CR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function PR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F0={exports:{}},kc={},U0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),xR=Symbol.for("react.portal"),DR=Symbol.for("react.fragment"),NR=Symbol.for("react.strict_mode"),OR=Symbol.for("react.profiler"),LR=Symbol.for("react.provider"),bR=Symbol.for("react.context"),MR=Symbol.for("react.forward_ref"),VR=Symbol.for("react.suspense"),FR=Symbol.for("react.memo"),UR=Symbol.for("react.lazy"),Ey=Symbol.iterator;function $R(t){return t===null||typeof t!="object"?null:(t=Ey&&t[Ey]||t["@@iterator"],typeof t=="function"?t:null)}var $0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,B0={};function eo(t,e,n){this.props=t,this.context=e,this.refs=B0,this.updater=n||$0}eo.prototype.isReactComponent={};eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z0(){}z0.prototype=eo.prototype;function Mp(t,e,n){this.props=t,this.context=e,this.refs=B0,this.updater=n||$0}var Vp=Mp.prototype=new z0;Vp.constructor=Mp;j0(Vp,eo.prototype);Vp.isPureReactComponent=!0;var Ty=Array.isArray,H0=Object.prototype.hasOwnProperty,Fp={current:null},W0={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,r)&&!W0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ya,type:t,key:s,ref:o,props:i,_owner:Fp.current}}function jR(t,e){return{$$typeof:Ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Up(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ya}function BR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Iy=/\/+/g;function Bh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BR(""+t.key):e.toString(36)}function su(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ya:case xR:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Bh(o,0):r,Ty(i)?(n="",t!=null&&(n=t.replace(Iy,"$&/")+"/"),su(i,e,n,"",function(u){return u})):i!=null&&(Up(i)&&(i=jR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Iy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ty(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Bh(s,a);o+=su(s,e,n,l,i)}else if(l=$R(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Bh(s,a++),o+=su(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(t,e,n){if(t==null)return t;var r=[],i=0;return su(t,r,"","",function(s){return e.call(n,s,i++)}),r}function zR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},ou={transition:null},HR={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:Fp};ie.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!Up(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=eo;ie.Fragment=DR;ie.Profiler=OR;ie.PureComponent=Mp;ie.StrictMode=NR;ie.Suspense=VR;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HR;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=j0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H0.call(e,l)&&!W0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ya,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:bR,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LR,_context:t},t.Consumer=t};ie.createElement=q0;ie.createFactory=function(t){var e=q0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:MR,render:t}};ie.isValidElement=Up;ie.lazy=function(t){return{$$typeof:UR,_payload:{_status:-1,_result:t},_init:zR}};ie.memo=function(t,e){return{$$typeof:FR,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=ou.transition;ou.transition={};try{t()}finally{ou.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ie.useContext=function(t){return Nt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ie.useId=function(){return Nt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ie.useRef=function(t){return Nt.current.useRef(t)};ie.useState=function(t){return Nt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Nt.current.useTransition()};ie.version="18.2.0";U0.exports=ie;var C=U0.exports;const On=PR(C),WR=CR({__proto__:null,default:On},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qR=C,KR=Symbol.for("react.element"),GR=Symbol.for("react.fragment"),QR=Object.prototype.hasOwnProperty,YR=qR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XR={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)QR.call(e,r)&&!XR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KR,type:t,key:s,ref:o,props:i,_owner:YR.current}}kc.Fragment=GR;kc.jsx=K0;kc.jsxs=K0;F0.exports=kc;var P=F0.exports,qd={},G0={exports:{}},Yt={},Q0={exports:{}},Y0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,$){var z=O.length;O.push($);e:for(;0<z;){var ge=z-1>>>1,Re=O[ge];if(0<i(Re,$))O[ge]=$,O[z]=Re,z=ge;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var $=O[0],z=O.pop();if(z!==$){O[0]=z;e:for(var ge=0,Re=O.length,hn=Re>>>1;ge<hn;){var ae=2*(ge+1)-1,Lt=O[ae],dt=ae+1,bt=O[dt];if(0>i(Lt,z))dt<Re&&0>i(bt,Lt)?(O[ge]=bt,O[dt]=z,ge=dt):(O[ge]=Lt,O[ae]=z,ge=ae);else if(dt<Re&&0>i(bt,z))O[ge]=bt,O[dt]=z,ge=dt;else break e}}return $}function i(O,$){var z=O.sortIndex-$.sortIndex;return z!==0?z:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=O)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function m(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,st(T);else{var $=n(u);$!==null&&qe(m,$.startTime-O)}}function T(O,$){v=!1,_&&(_=!1,g(N),N=-1),p=!0;var z=d;try{for(y($),h=n(l);h!==null&&(!(h.expirationTime>$)||O&&!Ue());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,d=h.priorityLevel;var Re=ge(h.expirationTime<=$);$=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&r(l),y($)}else r(l);h=n(l)}if(h!==null)var hn=!0;else{var ae=n(u);ae!==null&&qe(m,ae.startTime-$),hn=!1}return hn}finally{h=null,d=z,p=!1}}var R=!1,S=null,N=-1,J=5,B=-1;function Ue(){return!(t.unstable_now()-B<J)}function fe(){if(S!==null){var O=t.unstable_now();B=O;var $=!0;try{$=S(!0,O)}finally{$?Jt():(R=!1,S=null)}}else R=!1}var Jt;if(typeof f=="function")Jt=function(){f(fe)};else if(typeof MessageChannel<"u"){var Rn=new MessageChannel,An=Rn.port2;Rn.port1.onmessage=fe,Jt=function(){An.postMessage(null)}}else Jt=function(){w(fe,0)};function st(O){S=O,R||(R=!0,Jt())}function qe(O,$){N=w(function(){O(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,st(T))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var z=d;d=$;try{return O()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=d;d=O;try{return $()}finally{d=z}},t.unstable_scheduleCallback=function(O,$,z){var ge=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ge+z:ge):z=ge,O){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=z+Re,O={id:c++,callback:$,priorityLevel:O,startTime:z,expirationTime:Re,sortIndex:-1},z>ge?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(_?(g(N),N=-1):_=!0,qe(m,z-ge))):(O.sortIndex=Re,e(l,O),v||p||(v=!0,st(T))),O},t.unstable_shouldYield=Ue,t.unstable_wrapCallback=function(O){var $=d;return function(){var z=d;d=$;try{return O.apply(this,arguments)}finally{d=z}}}})(Y0);Q0.exports=Y0;var JR=Q0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=C,Gt=JR;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var J0=new Set,ca={};function ji(t,e){Ns(t,e),Ns(t+"Capture",e)}function Ns(t,e){for(ca[t]=e,t=0;t<e.length;t++)J0.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kd=Object.prototype.hasOwnProperty,ZR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sy={},Ry={};function eA(t){return Kd.call(Ry,t)?!0:Kd.call(Sy,t)?!1:ZR.test(t)?Ry[t]=!0:(Sy[t]=!0,!1)}function tA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nA(t,e,n,r){if(e===null||typeof e>"u"||tA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function jp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($p,jp);ht[e]=new Ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($p,jp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($p,jp);ht[e]=new Ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nA(e,n,i,r)&&(n=null),r||i===null?eA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var gr=X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pl=Symbol.for("react.element"),ns=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Gd=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),ew=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.suspense_list"),Wp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),tw=Symbol.for("react.offscreen"),Ay=Symbol.iterator;function _o(t){return t===null||typeof t!="object"?null:(t=Ay&&t[Ay]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,zh;function bo(t){if(zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zh=e&&e[1]||""}return`
`+zh+t}var Hh=!1;function Wh(t,e){if(!t||Hh)return"";Hh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function rA(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Wh(t.type,!1),t;case 11:return t=Wh(t.type.render,!1),t;case 1:return t=Wh(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case ns:return"Portal";case Gd:return"Profiler";case zp:return"StrictMode";case Qd:return"Suspense";case Yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ew:return(t.displayName||"Context")+".Consumer";case Z0:return(t._context.displayName||"Context")+".Provider";case Hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wp:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function iA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sA(t){var e=nw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xl(t){t._valueTracker||(t._valueTracker=sA(t))}function rw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jd(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ky(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iw(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function Zd(t,e){iw(t,e);var n=Kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&ef(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ef(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mo=Array.isArray;function vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Py(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Mo(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function sw(t,e){var n=Kr(e.value),r=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ow(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ow(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dl,aw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oA=["Webkit","ms","Moz","O"];Object.keys(Ko).forEach(function(t){oA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ko[e]=Ko[t]})});function lw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ko.hasOwnProperty(t)&&Ko[t]?(""+e).trim():e+"px"}function uw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aA=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(t,e){if(e){if(aA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function qp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var af=null,_s=null,ws=null;function Dy(t){if(t=Za(t)){if(typeof af!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Nc(e),af(t.stateNode,t.type,e))}}function cw(t){_s?ws?ws.push(t):ws=[t]:_s=t}function hw(){if(_s){var t=_s,e=ws;if(ws=_s=null,Dy(t),e)for(t=0;t<e.length;t++)Dy(e[t])}}function dw(t,e){return t(e)}function fw(){}var qh=!1;function pw(t,e,n){if(qh)return t(e,n);qh=!0;try{return dw(t,e,n)}finally{qh=!1,(_s!==null||ws!==null)&&(fw(),hw())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var lf=!1;if(ar)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){lf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{lf=!1}function lA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Go=!1,xu=null,Du=!1,uf=null,uA={onError:function(t){Go=!0,xu=t}};function cA(t,e,n,r,i,s,o,a,l){Go=!1,xu=null,lA.apply(uA,arguments)}function hA(t,e,n,r,i,s,o,a,l){if(cA.apply(this,arguments),Go){if(Go){var u=xu;Go=!1,xu=null}else throw Error(x(198));Du||(Du=!0,uf=u)}}function Bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ny(t){if(Bi(t)!==t)throw Error(x(188))}function dA(t){var e=t.alternate;if(!e){if(e=Bi(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ny(i),t;if(s===r)return Ny(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function gw(t){return t=dA(t),t!==null?yw(t):null}function yw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yw(t);if(e!==null)return e;t=t.sibling}return null}var vw=Gt.unstable_scheduleCallback,Oy=Gt.unstable_cancelCallback,fA=Gt.unstable_shouldYield,pA=Gt.unstable_requestPaint,Fe=Gt.unstable_now,mA=Gt.unstable_getCurrentPriorityLevel,Kp=Gt.unstable_ImmediatePriority,_w=Gt.unstable_UserBlockingPriority,Nu=Gt.unstable_NormalPriority,gA=Gt.unstable_LowPriority,ww=Gt.unstable_IdlePriority,Cc=null,Vn=null;function yA(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Cc,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:wA,vA=Math.log,_A=Math.LN2;function wA(t){return t>>>=0,t===0?32:31-(vA(t)/_A|0)|0}var Nl=64,Ol=4194304;function Vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Vo(a):(s&=o,s!==0&&(r=Vo(s)))}else o=n&~i,o!==0?r=Vo(o):s!==0&&(r=Vo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),i=1<<n,r|=t[n],e&=~i;return r}function EA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=EA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ew(){var t=Nl;return Nl<<=1,!(Nl&4194240)&&(Nl=64),t}function Kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function IA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-vn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function Tw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Iw,Qp,Sw,Rw,Aw,hf=!1,Ll=[],Lr=null,br=null,Mr=null,fa=new Map,pa=new Map,Ar=[],SA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ly(t,e){switch(t){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function Eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Za(e),e!==null&&Qp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RA(t,e,n,r,i){switch(e){case"focusin":return Lr=Eo(Lr,t,e,n,r,i),!0;case"dragenter":return br=Eo(br,t,e,n,r,i),!0;case"mouseover":return Mr=Eo(Mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fa.set(s,Eo(fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,pa.set(s,Eo(pa.get(s)||null,t,e,n,r,i)),!0}return!1}function kw(t){var e=hi(t.target);if(e!==null){var n=Bi(e);if(n!==null){if(e=n.tag,e===13){if(e=mw(n),e!==null){t.blockedOn=e,Aw(t.priority,function(){Sw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);of=r,n.target.dispatchEvent(r),of=null}else return e=Za(n),e!==null&&Qp(e),t.blockedOn=n,!1;e.shift()}return!0}function by(t,e,n){au(t)&&n.delete(e)}function AA(){hf=!1,Lr!==null&&au(Lr)&&(Lr=null),br!==null&&au(br)&&(br=null),Mr!==null&&au(Mr)&&(Mr=null),fa.forEach(by),pa.forEach(by)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,AA)))}function ma(t){function e(i){return To(i,t)}if(0<Ll.length){To(Ll[0],t);for(var n=1;n<Ll.length;n++){var r=Ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lr!==null&&To(Lr,t),br!==null&&To(br,t),Mr!==null&&To(Mr,t),fa.forEach(e),pa.forEach(e),n=0;n<Ar.length;n++)r=Ar[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)kw(n),n.blockedOn===null&&Ar.shift()}var Es=gr.ReactCurrentBatchConfig,Lu=!0;function kA(t,e,n,r){var i=he,s=Es.transition;Es.transition=null;try{he=1,Yp(t,e,n,r)}finally{he=i,Es.transition=s}}function CA(t,e,n,r){var i=he,s=Es.transition;Es.transition=null;try{he=4,Yp(t,e,n,r)}finally{he=i,Es.transition=s}}function Yp(t,e,n,r){if(Lu){var i=df(t,e,n,r);if(i===null)rd(t,e,r,bu,n),Ly(t,r);else if(RA(i,t,e,n,r))r.stopPropagation();else if(Ly(t,r),e&4&&-1<SA.indexOf(t)){for(;i!==null;){var s=Za(i);if(s!==null&&Iw(s),s=df(t,e,n,r),s===null&&rd(t,e,r,bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rd(t,e,r,null,n)}}var bu=null;function df(t,e,n,r){if(bu=null,t=qp(r),t=hi(t),t!==null)if(e=Bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bu=t,null}function Cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mA()){case Kp:return 1;case _w:return 4;case Nu:case gA:return 16;case ww:return 536870912;default:return 16}default:return 16}}var Dr=null,Xp=null,lu=null;function Pw(){if(lu)return lu;var t,e=Xp,n=e.length,r,i="value"in Dr?Dr.value:Dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lu=i.slice(t,1<r?1-r:void 0)}function uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bl(){return!0}function My(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bl:My,this.isPropagationStopped=My,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),e}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jp=Xt(to),Ja=xe({},to,{view:0,detail:0}),PA=Xt(Ja),Gh,Qh,Io,Pc=xe({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(Gh=t.screenX-Io.screenX,Qh=t.screenY-Io.screenY):Qh=Gh=0,Io=t),Gh)},movementY:function(t){return"movementY"in t?t.movementY:Qh}}),Vy=Xt(Pc),xA=xe({},Pc,{dataTransfer:0}),DA=Xt(xA),NA=xe({},Ja,{relatedTarget:0}),Yh=Xt(NA),OA=xe({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),LA=Xt(OA),bA=xe({},to,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MA=Xt(bA),VA=xe({},to,{data:0}),Fy=Xt(VA),FA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$A={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$A[t])?!!e[t]:!1}function Zp(){return jA}var BA=xe({},Ja,{key:function(t){if(t.key){var e=FA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zp,charCode:function(t){return t.type==="keypress"?uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zA=Xt(BA),HA=xe({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uy=Xt(HA),WA=xe({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zp}),qA=Xt(WA),KA=xe({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),GA=Xt(KA),QA=xe({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YA=Xt(QA),XA=[9,13,27,32],em=ar&&"CompositionEvent"in window,Qo=null;ar&&"documentMode"in document&&(Qo=document.documentMode);var JA=ar&&"TextEvent"in window&&!Qo,xw=ar&&(!em||Qo&&8<Qo&&11>=Qo),$y=String.fromCharCode(32),jy=!1;function Dw(t,e){switch(t){case"keyup":return XA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function ZA(t,e){switch(t){case"compositionend":return Nw(e);case"keypress":return e.which!==32?null:(jy=!0,$y);case"textInput":return t=e.data,t===$y&&jy?null:t;default:return null}}function ek(t,e){if(is)return t==="compositionend"||!em&&Dw(t,e)?(t=Pw(),lu=Xp=Dr=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xw&&e.locale!=="ko"?null:e.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function By(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tk[t.type]:e==="textarea"}function Ow(t,e,n,r){cw(r),e=Mu(e,"onChange"),0<e.length&&(n=new Jp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yo=null,ga=null;function nk(t){Hw(t,0)}function xc(t){var e=as(t);if(rw(e))return t}function rk(t,e){if(t==="change")return e}var Lw=!1;if(ar){var Xh;if(ar){var Jh="oninput"in document;if(!Jh){var zy=document.createElement("div");zy.setAttribute("oninput","return;"),Jh=typeof zy.oninput=="function"}Xh=Jh}else Xh=!1;Lw=Xh&&(!document.documentMode||9<document.documentMode)}function Hy(){Yo&&(Yo.detachEvent("onpropertychange",bw),ga=Yo=null)}function bw(t){if(t.propertyName==="value"&&xc(ga)){var e=[];Ow(e,ga,t,qp(t)),pw(nk,e)}}function ik(t,e,n){t==="focusin"?(Hy(),Yo=e,ga=n,Yo.attachEvent("onpropertychange",bw)):t==="focusout"&&Hy()}function sk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(ga)}function ok(t,e){if(t==="click")return xc(e)}function ak(t,e){if(t==="input"||t==="change")return xc(e)}function lk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:lk;function ya(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kd.call(e,i)||!Tn(t[i],e[i]))return!1}return!0}function Wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qy(t,e){var n=Wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wy(n)}}function Mw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vw(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=Vw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mw(n.ownerDocument.documentElement,n)){if(r!==null&&tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qy(n,s);var o=qy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ck=ar&&"documentMode"in document&&11>=document.documentMode,ss=null,ff=null,Xo=null,pf=!1;function Ky(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||ss==null||ss!==Pu(r)||(r=ss,"selectionStart"in r&&tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xo&&ya(Xo,r)||(Xo=r,r=Mu(ff,"onSelect"),0<r.length&&(e=new Jp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ss)))}function Ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},Zh={},Fw={};ar&&(Fw=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Dc(t){if(Zh[t])return Zh[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fw)return Zh[t]=e[n];return t}var Uw=Dc("animationend"),$w=Dc("animationiteration"),jw=Dc("animationstart"),Bw=Dc("transitionend"),zw=new Map,Gy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(t,e){zw.set(t,e),ji(e,[t])}for(var ed=0;ed<Gy.length;ed++){var td=Gy[ed],hk=td.toLowerCase(),dk=td[0].toUpperCase()+td.slice(1);Zr(hk,"on"+dk)}Zr(Uw,"onAnimationEnd");Zr($w,"onAnimationIteration");Zr(jw,"onAnimationStart");Zr("dblclick","onDoubleClick");Zr("focusin","onFocus");Zr("focusout","onBlur");Zr(Bw,"onTransitionEnd");Ns("onMouseEnter",["mouseout","mouseover"]);Ns("onMouseLeave",["mouseout","mouseover"]);Ns("onPointerEnter",["pointerout","pointerover"]);Ns("onPointerLeave",["pointerout","pointerover"]);ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Qy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hA(r,e,void 0,t),t.currentTarget=null}function Hw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qy(i,a,u),s=l}}}if(Du)throw t=uf,Du=!1,uf=null,t}function _e(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var r=t+"__bubble";n.has(r)||(Ww(e,t,2,!1),n.add(r))}function nd(t,e,n){var r=0;e&&(r|=4),Ww(n,t,r,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[Vl]){t[Vl]=!0,J0.forEach(function(n){n!=="selectionchange"&&(fk.has(n)||nd(n,!1,t),nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,nd("selectionchange",!1,e))}}function Ww(t,e,n,r){switch(Cw(e)){case 1:var i=kA;break;case 4:i=CA;break;default:i=Yp}n=i.bind(null,e,n,t),i=void 0,!lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pw(function(){var u=s,c=qp(n),h=[];e:{var d=zw.get(t);if(d!==void 0){var p=Jp,v=t;switch(t){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":p=zA;break;case"focusin":v="focus",p=Yh;break;case"focusout":v="blur",p=Yh;break;case"beforeblur":case"afterblur":p=Yh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=DA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=qA;break;case Uw:case $w:case jw:p=LA;break;case Bw:p=GA;break;case"scroll":p=PA;break;case"wheel":p=YA;break;case"copy":case"cut":case"paste":p=MA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uy}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,y;f!==null;){y=f;var m=y.stateNode;if(y.tag===5&&m!==null&&(y=m,g!==null&&(m=da(f,g),m!=null&&_.push(_a(f,m,y)))),w)break;f=f.return}0<_.length&&(d=new p(d,v,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==of&&(v=n.relatedTarget||n.fromElement)&&(hi(v)||v[lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?hi(v):null,v!==null&&(w=Bi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=Vy,m="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Uy,m="onPointerLeave",g="onPointerEnter",f="pointer"),w=p==null?d:as(p),y=v==null?d:as(v),d=new _(m,f+"leave",p,n,c),d.target=w,d.relatedTarget=y,m=null,hi(c)===u&&(_=new _(g,f+"enter",v,n,c),_.target=y,_.relatedTarget=w,m=_),w=m,p&&v)t:{for(_=p,g=v,f=0,y=_;y;y=Yi(y))f++;for(y=0,m=g;m;m=Yi(m))y++;for(;0<f-y;)_=Yi(_),f--;for(;0<y-f;)g=Yi(g),y--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=Yi(_),g=Yi(g)}_=null}else _=null;p!==null&&Yy(h,d,p,_,!1),v!==null&&w!==null&&Yy(h,w,v,_,!0)}}e:{if(d=u?as(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=rk;else if(By(d))if(Lw)T=ak;else{T=sk;var R=ik}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=ok);if(T&&(T=T(t,u))){Ow(h,T,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&ef(d,"number",d.value)}switch(R=u?as(u):window,t){case"focusin":(By(R)||R.contentEditable==="true")&&(ss=R,ff=u,Xo=null);break;case"focusout":Xo=ff=ss=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Ky(h,n,c);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":Ky(h,n,c)}var S;if(em)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else is?Dw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(xw&&n.locale!=="ko"&&(is||N!=="onCompositionStart"?N==="onCompositionEnd"&&is&&(S=Pw()):(Dr=c,Xp="value"in Dr?Dr.value:Dr.textContent,is=!0)),R=Mu(u,N),0<R.length&&(N=new Fy(N,t,null,n,c),h.push({event:N,listeners:R}),S?N.data=S:(S=Nw(n),S!==null&&(N.data=S)))),(S=JA?ZA(t,n):ek(t,n))&&(u=Mu(u,"onBeforeInput"),0<u.length&&(c=new Fy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=S))}Hw(h,e)})}function _a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=da(t,n),s!=null&&r.unshift(_a(t,s,i)),s=da(t,e),s!=null&&r.push(_a(t,s,i))),t=t.return}return r}function Yi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=da(n,s),l!=null&&o.unshift(_a(n,l,a))):i||(l=da(n,s),l!=null&&o.push(_a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function Xy(t){return(typeof t=="string"?t:""+t).replace(pk,`
`).replace(mk,"")}function Fl(t,e,n){if(e=Xy(e),Xy(t)!==e&&n)throw Error(x(425))}function Vu(){}var mf=null,gf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vf=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,Jy=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof Jy<"u"?function(t){return Jy.resolve(null).then(t).catch(vk)}:vf;function vk(t){setTimeout(function(){throw t})}function id(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ma(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ma(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var no=Math.random().toString(36).slice(2),Dn="__reactFiber$"+no,wa="__reactProps$"+no,lr="__reactContainer$"+no,_f="__reactEvents$"+no,_k="__reactListeners$"+no,wk="__reactHandles$"+no;function hi(t){var e=t[Dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zy(t);t!==null;){if(n=t[Dn])return n;t=Zy(t)}return e}t=n,n=t.parentNode}return null}function Za(t){return t=t[Dn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Nc(t){return t[wa]||null}var wf=[],ls=-1;function ei(t){return{current:t}}function Ie(t){0>ls||(t.current=wf[ls],wf[ls]=null,ls--)}function ve(t,e){ls++,wf[ls]=t.current,t.current=e}var Gr={},Rt=ei(Gr),Ut=ei(!1),Ai=Gr;function Os(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Fu(){Ie(Ut),Ie(Rt)}function ev(t,e,n){if(Rt.current!==Gr)throw Error(x(168));ve(Rt,e),ve(Ut,n)}function qw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,iA(t)||"Unknown",i));return xe({},n,r)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Ai=Rt.current,ve(Rt,t),ve(Ut,Ut.current),!0}function tv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=qw(t,e,Ai),r.__reactInternalMemoizedMergedChildContext=t,Ie(Ut),Ie(Rt),ve(Rt,t)):Ie(Ut),ve(Ut,n)}var Xn=null,Oc=!1,sd=!1;function Kw(t){Xn===null?Xn=[t]:Xn.push(t)}function Ek(t){Oc=!0,Kw(t)}function ti(){if(!sd&&Xn!==null){sd=!0;var t=0,e=he;try{var n=Xn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xn=null,Oc=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(t+1)),vw(Kp,ti),i}finally{he=e,sd=!1}}return null}var us=[],cs=0,$u=null,ju=0,tn=[],nn=0,ki=null,er=1,tr="";function li(t,e){us[cs++]=ju,us[cs++]=$u,$u=t,ju=e}function Gw(t,e,n){tn[nn++]=er,tn[nn++]=tr,tn[nn++]=ki,ki=t;var r=er;t=tr;var i=32-vn(r)-1;r&=~(1<<i),n+=1;var s=32-vn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,er=1<<32-vn(e)+i|n<<i|r,tr=s+t}else er=1<<s|n<<i|r,tr=t}function nm(t){t.return!==null&&(li(t,1),Gw(t,1,0))}function rm(t){for(;t===$u;)$u=us[--cs],us[cs]=null,ju=us[--cs],us[cs]=null;for(;t===ki;)ki=tn[--nn],tn[nn]=null,tr=tn[--nn],tn[nn]=null,er=tn[--nn],tn[nn]=null}var Kt=null,Ht=null,ke=!1,yn=null;function Qw(t,e){var n=sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function nv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Kt=t,Ht=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tf(t){if(ke){var e=Ht;if(e){var n=e;if(!nv(t,e)){if(Ef(t))throw Error(x(418));e=Vr(n.nextSibling);var r=Kt;e&&nv(t,e)?Qw(r,n):(t.flags=t.flags&-4097|2,ke=!1,Kt=t)}}else{if(Ef(t))throw Error(x(418));t.flags=t.flags&-4097|2,ke=!1,Kt=t}}}function rv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function Ul(t){if(t!==Kt)return!1;if(!ke)return rv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Ht)){if(Ef(t))throw Yw(),Error(x(418));for(;e;)Qw(t,e),e=Vr(e.nextSibling)}if(rv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Kt?Vr(t.stateNode.nextSibling):null;return!0}function Yw(){for(var t=Ht;t;)t=Vr(t.nextSibling)}function Ls(){Ht=Kt=null,ke=!1}function im(t){yn===null?yn=[t]:yn.push(t)}var Tk=gr.ReactCurrentBatchConfig;function pn(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bu=ei(null),zu=null,hs=null,sm=null;function om(){sm=hs=zu=null}function am(t){var e=Bu.current;Ie(Bu),t._currentValue=e}function If(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){zu=t,sm=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(sm!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(zu===null)throw Error(x(308));hs=t,zu.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var di=null;function lm(t){di===null?di=[t]:di.push(t)}function Xw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,lm(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Rr=!1;function um(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,lm(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function cu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}function iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hu(t,e,n,r){var i=t.updateQueue;Rr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(d=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(p,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,d=typeof v=="function"?v.call(p,h,d):v,d==null)break e;h=xe({},h,d);break e;case 2:Rr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Pi|=o,t.lanes=o,t.memoizedState=h}}function sv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Zw=new X0.Component().refs;function Sf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?Bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=$r(t),s=sr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(_n(e,t,i,r),cu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=$r(t),s=sr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fr(t,s,i),e!==null&&(_n(e,t,i,r),cu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=$r(t),i=sr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fr(t,i,r),e!==null&&(_n(e,t,r,n),cu(e,t,r))}};function ov(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ya(n,r)||!ya(i,s):!0}function eE(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=$t(e)?Ai:Rt.current,r=e.contextTypes,s=(r=r!=null)?Os(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function av(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Zw,um(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=$t(e)?Ai:Rt.current,i.context=Os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Lc.enqueueReplaceState(i,i.state,null),Hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Zw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function $l(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lv(t){var e=t._init;return e(t._payload)}function tE(t){function e(g,f){if(t){var y=g.deletions;y===null?(g.deletions=[f],g.flags|=16):y.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=jr(g,f),g.index=0,g.sibling=null,g}function s(g,f,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<f?(g.flags|=2,f):y):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,y,m){return f===null||f.tag!==6?(f=dd(y,g.mode,m),f.return=g,f):(f=i(f,y),f.return=g,f)}function l(g,f,y,m){var T=y.type;return T===rs?c(g,f,y.props.children,m,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sr&&lv(T)===f.type)?(m=i(f,y.props),m.ref=So(g,f,y),m.return=g,m):(m=gu(y.type,y.key,y.props,null,g.mode,m),m.ref=So(g,f,y),m.return=g,m)}function u(g,f,y,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=fd(y,g.mode,m),f.return=g,f):(f=i(f,y.children||[]),f.return=g,f)}function c(g,f,y,m,T){return f===null||f.tag!==7?(f=Ei(y,g.mode,m,T),f.return=g,f):(f=i(f,y),f.return=g,f)}function h(g,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=dd(""+f,g.mode,y),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Pl:return y=gu(f.type,f.key,f.props,null,g.mode,y),y.ref=So(g,null,f),y.return=g,y;case ns:return f=fd(f,g.mode,y),f.return=g,f;case Sr:var m=f._init;return h(g,m(f._payload),y)}if(Mo(f)||_o(f))return f=Ei(f,g.mode,y,null),f.return=g,f;$l(g,f)}return null}function d(g,f,y,m){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(g,f,""+y,m);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pl:return y.key===T?l(g,f,y,m):null;case ns:return y.key===T?u(g,f,y,m):null;case Sr:return T=y._init,d(g,f,T(y._payload),m)}if(Mo(y)||_o(y))return T!==null?null:c(g,f,y,m,null);$l(g,y)}return null}function p(g,f,y,m,T){if(typeof m=="string"&&m!==""||typeof m=="number")return g=g.get(y)||null,a(f,g,""+m,T);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Pl:return g=g.get(m.key===null?y:m.key)||null,l(f,g,m,T);case ns:return g=g.get(m.key===null?y:m.key)||null,u(f,g,m,T);case Sr:var R=m._init;return p(g,f,y,R(m._payload),T)}if(Mo(m)||_o(m))return g=g.get(y)||null,c(f,g,m,T,null);$l(f,m)}return null}function v(g,f,y,m){for(var T=null,R=null,S=f,N=f=0,J=null;S!==null&&N<y.length;N++){S.index>N?(J=S,S=null):J=S.sibling;var B=d(g,S,y[N],m);if(B===null){S===null&&(S=J);break}t&&S&&B.alternate===null&&e(g,S),f=s(B,f,N),R===null?T=B:R.sibling=B,R=B,S=J}if(N===y.length)return n(g,S),ke&&li(g,N),T;if(S===null){for(;N<y.length;N++)S=h(g,y[N],m),S!==null&&(f=s(S,f,N),R===null?T=S:R.sibling=S,R=S);return ke&&li(g,N),T}for(S=r(g,S);N<y.length;N++)J=p(S,g,N,y[N],m),J!==null&&(t&&J.alternate!==null&&S.delete(J.key===null?N:J.key),f=s(J,f,N),R===null?T=J:R.sibling=J,R=J);return t&&S.forEach(function(Ue){return e(g,Ue)}),ke&&li(g,N),T}function _(g,f,y,m){var T=_o(y);if(typeof T!="function")throw Error(x(150));if(y=T.call(y),y==null)throw Error(x(151));for(var R=T=null,S=f,N=f=0,J=null,B=y.next();S!==null&&!B.done;N++,B=y.next()){S.index>N?(J=S,S=null):J=S.sibling;var Ue=d(g,S,B.value,m);if(Ue===null){S===null&&(S=J);break}t&&S&&Ue.alternate===null&&e(g,S),f=s(Ue,f,N),R===null?T=Ue:R.sibling=Ue,R=Ue,S=J}if(B.done)return n(g,S),ke&&li(g,N),T;if(S===null){for(;!B.done;N++,B=y.next())B=h(g,B.value,m),B!==null&&(f=s(B,f,N),R===null?T=B:R.sibling=B,R=B);return ke&&li(g,N),T}for(S=r(g,S);!B.done;N++,B=y.next())B=p(S,g,N,B.value,m),B!==null&&(t&&B.alternate!==null&&S.delete(B.key===null?N:B.key),f=s(B,f,N),R===null?T=B:R.sibling=B,R=B);return t&&S.forEach(function(fe){return e(g,fe)}),ke&&li(g,N),T}function w(g,f,y,m){if(typeof y=="object"&&y!==null&&y.type===rs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Pl:e:{for(var T=y.key,R=f;R!==null;){if(R.key===T){if(T=y.type,T===rs){if(R.tag===7){n(g,R.sibling),f=i(R,y.props.children),f.return=g,g=f;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Sr&&lv(T)===R.type){n(g,R.sibling),f=i(R,y.props),f.ref=So(g,R,y),f.return=g,g=f;break e}n(g,R);break}else e(g,R);R=R.sibling}y.type===rs?(f=Ei(y.props.children,g.mode,m,y.key),f.return=g,g=f):(m=gu(y.type,y.key,y.props,null,g.mode,m),m.ref=So(g,f,y),m.return=g,g=m)}return o(g);case ns:e:{for(R=y.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(g,f.sibling),f=i(f,y.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=fd(y,g.mode,m),f.return=g,g=f}return o(g);case Sr:return R=y._init,w(g,f,R(y._payload),m)}if(Mo(y))return v(g,f,y,m);if(_o(y))return _(g,f,y,m);$l(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,y),f.return=g,g=f):(n(g,f),f=dd(y,g.mode,m),f.return=g,g=f),o(g)):n(g,f)}return w}var bs=tE(!0),nE=tE(!1),el={},Fn=ei(el),Ea=ei(el),Ta=ei(el);function fi(t){if(t===el)throw Error(x(174));return t}function cm(t,e){switch(ve(Ta,e),ve(Ea,t),ve(Fn,el),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nf(e,t)}Ie(Fn),ve(Fn,e)}function Ms(){Ie(Fn),Ie(Ea),Ie(Ta)}function rE(t){fi(Ta.current);var e=fi(Fn.current),n=nf(e,t.type);e!==n&&(ve(Ea,t),ve(Fn,n))}function hm(t){Ea.current===t&&(Ie(Fn),Ie(Ea))}var Ce=ei(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var od=[];function dm(){for(var t=0;t<od.length;t++)od[t]._workInProgressVersionPrimary=null;od.length=0}var hu=gr.ReactCurrentDispatcher,ad=gr.ReactCurrentBatchConfig,Ci=0,Pe=null,Qe=null,et=null,qu=!1,Jo=!1,Ia=0,Ik=0;function pt(){throw Error(x(321))}function fm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function pm(t,e,n,r,i,s){if(Ci=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?kk:Ck,t=n(r,i),Jo){s=0;do{if(Jo=!1,Ia=0,25<=s)throw Error(x(301));s+=1,et=Qe=null,e.updateQueue=null,hu.current=Pk,t=n(r,i)}while(Jo)}if(hu.current=Ku,e=Qe!==null&&Qe.next!==null,Ci=0,et=Qe=Pe=null,qu=!1,e)throw Error(x(300));return t}function mm(){var t=Ia!==0;return Ia=0,t}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Pe.memoizedState=et=t:et=et.next=t,et}function ln(){if(Qe===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var e=et===null?Pe.memoizedState:et.next;if(e!==null)et=e,Qe=t;else{if(t===null)throw Error(x(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},et===null?Pe.memoizedState=et=t:et=et.next=t}return et}function Sa(t,e){return typeof e=="function"?e(t):e}function ld(t){var e=ln(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ci&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Pe.lanes|=c,Pi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Pi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ud(t){var e=ln(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iE(){}function sE(t,e){var n=Pe,r=ln(),i=e(),s=!Tn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ft=!0),r=r.queue,gm(lE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Ra(9,aE.bind(null,n,r,i,e),void 0,null),nt===null)throw Error(x(349));Ci&30||oE(n,e,i)}return i}function oE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aE(t,e,n,r){e.value=n,e.getSnapshot=r,uE(e)&&cE(t)}function lE(t,e,n){return n(function(){uE(e)&&cE(t)})}function uE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function cE(t){var e=ur(t,1);e!==null&&_n(e,t,1,-1)}function uv(t){var e=Pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=Ak.bind(null,Pe,t),[e.memoizedState,t]}function Ra(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hE(){return ln().memoizedState}function du(t,e,n,r){var i=Pn();Pe.flags|=t,i.memoizedState=Ra(1|e,n,void 0,r===void 0?null:r)}function bc(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var o=Qe.memoizedState;if(s=o.destroy,r!==null&&fm(r,o.deps)){i.memoizedState=Ra(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Ra(1|e,n,s,r)}function cv(t,e){return du(8390656,8,t,e)}function gm(t,e){return bc(2048,8,t,e)}function dE(t,e){return bc(4,2,t,e)}function fE(t,e){return bc(4,4,t,e)}function pE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mE(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,pE.bind(null,e,t),n)}function ym(){}function gE(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yE(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vE(t,e,n){return Ci&21?(Tn(n,e)||(n=Ew(),Pe.lanes|=n,Pi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function Sk(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=ad.transition;ad.transition={};try{t(!1),e()}finally{he=n,ad.transition=r}}function _E(){return ln().memoizedState}function Rk(t,e,n){var r=$r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wE(t))EE(e,n);else if(n=Xw(t,e,n,r),n!==null){var i=Dt();_n(n,t,r,i),TE(n,e,r)}}function Ak(t,e,n){var r=$r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wE(t))EE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(i.next=i,lm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Xw(t,e,i,r),n!==null&&(i=Dt(),_n(n,t,r,i),TE(n,e,r))}}function wE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function EE(t,e){Jo=qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gp(t,n)}}var Ku={readContext:an,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},kk={readContext:an,useCallback:function(t,e){return Pn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:cv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,du(4194308,4,pE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return du(4194308,4,t,e)},useInsertionEffect:function(t,e){return du(4,2,t,e)},useMemo:function(t,e){var n=Pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rk.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Pn();return t={current:t},e.memoizedState=t},useState:uv,useDebugValue:ym,useDeferredValue:function(t){return Pn().memoizedState=t},useTransition:function(){var t=uv(!1),e=t[0];return t=Sk.bind(null,t[1]),Pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Pn();if(ke){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),nt===null)throw Error(x(349));Ci&30||oE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cv(lE.bind(null,r,s,t),[t]),r.flags|=2048,Ra(9,aE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Pn(),e=nt.identifierPrefix;if(ke){var n=tr,r=er;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ik++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ck={readContext:an,useCallback:gE,useContext:an,useEffect:gm,useImperativeHandle:mE,useInsertionEffect:dE,useLayoutEffect:fE,useMemo:yE,useReducer:ld,useRef:hE,useState:function(){return ld(Sa)},useDebugValue:ym,useDeferredValue:function(t){var e=ln();return vE(e,Qe.memoizedState,t)},useTransition:function(){var t=ld(Sa)[0],e=ln().memoizedState;return[t,e]},useMutableSource:iE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1},Pk={readContext:an,useCallback:gE,useContext:an,useEffect:gm,useImperativeHandle:mE,useInsertionEffect:dE,useLayoutEffect:fE,useMemo:yE,useReducer:ud,useRef:hE,useState:function(){return ud(Sa)},useDebugValue:ym,useDeferredValue:function(t){var e=ln();return Qe===null?e.memoizedState=t:vE(e,Qe.memoizedState,t)},useTransition:function(){var t=ud(Sa)[0],e=ln().memoizedState;return[t,e]},useMutableSource:iE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1};function Vs(t,e){try{var n="",r=e;do n+=rA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xk=typeof WeakMap=="function"?WeakMap:Map;function IE(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qu||(Qu=!0,Mf=r),Af(t,e)},n}function SE(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof r!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Hk.bind(null,t,e,n),e.then(t,t))}function dv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Fr(n,e,1))),n.lanes|=1),t)}var Dk=gr.ReactCurrentOwner,Ft=!1;function Pt(t,e,n,r){e.child=t===null?nE(e,null,n,r):bs(e,t.child,n,r)}function pv(t,e,n,r,i){n=n.render;var s=e.ref;return Ts(e,i),r=pm(t,e,n,r,s,i),n=mm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(ke&&n&&nm(e),e.flags|=1,Pt(t,e,r,i),e.child)}function mv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,RE(t,e,s,r,i)):(t=gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,r)&&t.ref===e.ref)return cr(t,e,i)}return e.flags|=1,t=jr(s,r),t.ref=e.ref,t.return=e,e.child=t}function RE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ya(s,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,cr(t,e,i)}return kf(t,e,n,r,i)}function AE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(fs,zt),zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(fs,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(fs,zt),zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(fs,zt),zt|=r;return Pt(t,e,i,n),e.child}function kE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kf(t,e,n,r,i){var s=$t(n)?Ai:Rt.current;return s=Os(e,s),Ts(e,i),n=pm(t,e,n,r,s,i),r=mm(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cr(t,e,i)):(ke&&r&&nm(e),e.flags|=1,Pt(t,e,n,i),e.child)}function gv(t,e,n,r,i){if($t(n)){var s=!0;Uu(e)}else s=!1;if(Ts(e,i),e.stateNode===null)fu(t,e),eE(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=an(u):(u=$t(n)?Ai:Rt.current,u=Os(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&av(e,o,r,u),Rr=!1;var d=e.memoizedState;o.state=d,Hu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ut.current||Rr?(typeof c=="function"&&(Sf(e,n,c,r),l=e.memoizedState),(a=Rr||ov(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:pn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=an(l):(l=$t(n)?Ai:Rt.current,l=Os(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&av(e,o,r,l),Rr=!1,d=e.memoizedState,o.state=d,Hu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ut.current||Rr?(typeof p=="function"&&(Sf(e,n,p,r),v=e.memoizedState),(u=Rr||ov(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Cf(t,e,n,r,s,i)}function Cf(t,e,n,r,i,s){kE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tv(e,n,!1),cr(t,e,s);r=e.stateNode,Dk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,s),e.child=bs(e,null,a,s)):Pt(t,e,a,s),e.memoizedState=r.state,i&&tv(e,n,!0),e.child}function CE(t){var e=t.stateNode;e.pendingContext?ev(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ev(t,e.context,!1),cm(t,e.containerInfo)}function yv(t,e,n,r,i){return Ls(),im(i),e.flags|=256,Pt(t,e,n,r),e.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function PE(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ce,i&1),t===null)return Tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xf(n),e.memoizedState=Pf,t):vm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Nk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=jr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Pf,r}return s=t.child,t=s.sibling,r=jr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vm(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,r){return r!==null&&im(r),bs(e,t.child,null,n),t=vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Nk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cd(Error(x(422))),jl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Fc({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=Pf,s);if(!(e.mode&1))return jl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=cd(s,r,void 0),jl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ft||a){if(r=nt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,ur(t,i),_n(r,t,i,-1))}return Sm(),r=cd(Error(x(421))),jl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Wk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=Vr(i.nextSibling),Kt=e,ke=!0,yn=null,t!==null&&(tn[nn++]=er,tn[nn++]=tr,tn[nn++]=ki,er=t.id,tr=t.overflow,ki=e),e=vm(e,r.children),e.flags|=4096,e)}function vv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),If(t.return,e,n)}function hd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Pt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vv(t,n,e);else if(t.tag===19)vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hd(e,!0,n,null,s);break;case"together":hd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:CE(e),Ls();break;case 5:rE(e);break;case 1:$t(e.type)&&Uu(e);break;case 4:cm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Bu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?PE(t,e,n):(ve(Ce,Ce.current&1),t=cr(t,e,n),t!==null?t.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return cr(t,e,n)}var DE,Df,NE,OE;DE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};NE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Fn.current);var s=null;switch(n){case"input":i=Jd(t,i),r=Jd(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=tf(t,i),r=tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}rf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&_e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};OE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ro(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(rm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return $t(e.type)&&Fu(),mt(e),null;case 3:return r=e.stateNode,Ms(),Ie(Ut),Ie(Rt),dm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Uf(yn),yn=null))),Df(t,e),mt(e),null;case 5:hm(e);var i=fi(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)NE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return mt(e),null}if(t=fi(Fn.current),Ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dn]=e,r[wa]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Fo.length;i++)_e(Fo[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":ky(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":Py(r,s),_e("invalid",r)}rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,a,t),i=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":xl(r),Cy(r,s,!0);break;case"textarea":xl(r),xy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ow(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dn]=e,t[wa]=r,DE(t,e,!1,!1),e.stateNode=t;e:{switch(o=sf(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Fo.length;i++)_e(Fo[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":ky(t,r),i=Jd(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),_e("invalid",t);break;case"textarea":Py(t,r),i=tf(t,r),_e("invalid",t);break;default:i=r}rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&aw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Bp(t,s,l,o))}switch(n){case"input":xl(t),Cy(t,r,!1);break;case"textarea":xl(t),xy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vs(t,!!r.multiple,s,!1):r.defaultValue!=null&&vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)OE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=fi(Ta.current),fi(Fn.current),Ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dn]=e,(s=r.nodeValue!==n)&&(t=Kt,t!==null))switch(t.tag){case 3:Fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&Ht!==null&&e.mode&1&&!(e.flags&128))Yw(),Ls(),e.flags|=98560,s=!1;else if(s=Ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Dn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else yn!==null&&(Uf(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ye===0&&(Ye=3):Sm())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Ms(),Df(t,e),t===null&&va(e.stateNode.containerInfo),mt(e),null;case 10:return am(e.type._context),mt(e),null;case 17:return $t(e.type)&&Fu(),mt(e),null;case 19:if(Ie(Ce),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ro(s,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,Ro(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>Fs&&(e.flags|=128,r=!0,Ro(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ke)return mt(e),null}else 2*Fe()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,r=!0,Ro(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Im(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function bk(t,e){switch(rm(e),e.tag){case 1:return $t(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),Ie(Ut),Ie(Rt),dm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hm(e),null;case 13:if(Ie(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ce),null;case 4:return Ms(),null;case 10:return am(e.type._context),null;case 22:case 23:return Im(),null;case 24:return null;default:return null}}var Bl=!1,vt=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,M=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Nf(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var _v=!1;function Vk(t,e){if(mf=Lu,t=Vw(),tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:t,selectionRange:n},Lu=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:pn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(m){Ne(e,e.return,m)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=_v,_v=!1,v}function Zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nf(e,n,s)}i=i.next}while(i!==r)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function LE(t){var e=t.alternate;e!==null&&(t.alternate=null,LE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dn],delete e[wa],delete e[_f],delete e[_k],delete e[wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bE(t){return t.tag===5||t.tag===3||t.tag===4}function wv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}var ot=null,mn=!1;function Er(t,e,n){for(n=n.child;n!==null;)ME(t,e,n),n=n.sibling}function ME(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Cc,n)}catch{}switch(n.tag){case 5:vt||ds(n,e);case 6:var r=ot,i=mn;ot=null,Er(t,e,n),ot=r,mn=i,ot!==null&&(mn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(mn?(t=ot,n=n.stateNode,t.nodeType===8?id(t.parentNode,n):t.nodeType===1&&id(t,n),ma(t)):id(ot,n.stateNode));break;case 4:r=ot,i=mn,ot=n.stateNode.containerInfo,mn=!0,Er(t,e,n),ot=r,mn=i;break;case 0:case 11:case 14:case 15:if(!vt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nf(n,e,o),i=i.next}while(i!==r)}Er(t,e,n);break;case 1:if(!vt&&(ds(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}Er(t,e,n);break;case 21:Er(t,e,n);break;case 22:n.mode&1?(vt=(r=vt)||n.memoizedState!==null,Er(t,e,n),vt=r):Er(t,e,n);break;default:Er(t,e,n)}}function Ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var i=qk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function fn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,mn=!1;break e;case 3:ot=a.stateNode.containerInfo,mn=!0;break e;case 4:ot=a.stateNode.containerInfo,mn=!0;break e}a=a.return}if(ot===null)throw Error(x(160));ME(s,o,i),ot=null,mn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)VE(e,t),e=e.sibling}function VE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),Cn(t),r&4){try{Zo(3,t,t.return),Mc(3,t)}catch(_){Ne(t,t.return,_)}try{Zo(5,t,t.return)}catch(_){Ne(t,t.return,_)}}break;case 1:fn(e,t),Cn(t),r&512&&n!==null&&ds(n,n.return);break;case 5:if(fn(e,t),Cn(t),r&512&&n!==null&&ds(n,n.return),t.flags&32){var i=t.stateNode;try{ha(i,"")}catch(_){Ne(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iw(i,s),sf(a,o);var u=sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?uw(i,h):c==="dangerouslySetInnerHTML"?aw(i,h):c==="children"?ha(i,h):Bp(i,c,h,u)}switch(a){case"input":Zd(i,s);break;case"textarea":sw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?vs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?vs(i,!!s.multiple,s.defaultValue,!0):vs(i,!!s.multiple,s.multiple?[]:"",!1))}i[wa]=s}catch(_){Ne(t,t.return,_)}}break;case 6:if(fn(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ne(t,t.return,_)}}break;case 3:if(fn(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(_){Ne(t,t.return,_)}break;case 4:fn(e,t),Cn(t);break;case 13:fn(e,t),Cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Em=Fe())),r&4&&Ev(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(vt=(u=vt)||c,fn(e,t),vt=u):fn(e,t),Cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,p=d.child,d.tag){case 0:case 11:case 14:case 15:Zo(4,d,d.return);break;case 1:ds(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Ne(r,n,_)}}break;case 5:ds(d,d.return);break;case 22:if(d.memoizedState!==null){Iv(h);continue}}p!==null?(p.return=d,M=p):Iv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lw("display",o))}catch(_){Ne(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Ne(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fn(e,t),Cn(t),r&4&&Ev(t);break;case 21:break;default:fn(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var s=wv(t);bf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=wv(t);Lf(t,a,o);break;default:throw Error(x(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fk(t,e,n){M=t,FE(t)}function FE(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||vt;a=Bl;var u=vt;if(Bl=o,(vt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Sv(i):l!==null?(l.return=o,M=l):Sv(i);for(;s!==null;)M=s,FE(s),s=s.sibling;M=i,Bl=a,vt=u}Tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Tv(t)}}function Tv(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:vt||Mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!vt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}vt||e.flags&512&&Of(e)}catch(d){Ne(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Iv(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Sv(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Of(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Of(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var Uk=Math.ceil,Gu=gr.ReactCurrentDispatcher,_m=gr.ReactCurrentOwner,on=gr.ReactCurrentBatchConfig,oe=0,nt=null,He=null,ut=0,zt=0,fs=ei(0),Ye=0,Aa=null,Pi=0,Vc=0,wm=0,ea=null,Mt=null,Em=0,Fs=1/0,Qn=null,Qu=!1,Mf=null,Ur=null,zl=!1,Nr=null,Yu=0,ta=0,Vf=null,pu=-1,mu=0;function Dt(){return oe&6?Fe():pu!==-1?pu:pu=Fe()}function $r(t){return t.mode&1?oe&2&&ut!==0?ut&-ut:Tk.transition!==null?(mu===0&&(mu=Ew()),mu):(t=he,t!==0||(t=window.event,t=t===void 0?16:Cw(t.type)),t):1}function _n(t,e,n,r){if(50<ta)throw ta=0,Vf=null,Error(x(185));Xa(t,n,r),(!(oe&2)||t!==nt)&&(t===nt&&(!(oe&2)&&(Vc|=n),Ye===4&&kr(t,ut)),jt(t,r),n===1&&oe===0&&!(e.mode&1)&&(Fs=Fe()+500,Oc&&ti()))}function jt(t,e){var n=t.callbackNode;TA(t,e);var r=Ou(t,t===nt?ut:0);if(r===0)n!==null&&Oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Oy(n),e===1)t.tag===0?Ek(Rv.bind(null,t)):Kw(Rv.bind(null,t)),yk(function(){!(oe&6)&&ti()}),n=null;else{switch(Tw(r)){case 1:n=Kp;break;case 4:n=_w;break;case 16:n=Nu;break;case 536870912:n=ww;break;default:n=Nu}n=qE(n,UE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function UE(t,e){if(pu=-1,mu=0,oe&6)throw Error(x(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var r=Ou(t,t===nt?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xu(t,r);else{e=r;var i=oe;oe|=2;var s=jE();(nt!==t||ut!==e)&&(Qn=null,Fs=Fe()+500,wi(t,e));do try{Bk();break}catch(a){$E(t,a)}while(1);om(),Gu.current=s,oe=i,He!==null?e=0:(nt=null,ut=0,e=Ye)}if(e!==0){if(e===2&&(i=cf(t),i!==0&&(r=i,e=Ff(t,i))),e===1)throw n=Aa,wi(t,0),kr(t,r),jt(t,Fe()),n;if(e===6)kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!$k(i)&&(e=Xu(t,r),e===2&&(s=cf(t),s!==0&&(r=s,e=Ff(t,s))),e===1))throw n=Aa,wi(t,0),kr(t,r),jt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:ui(t,Mt,Qn);break;case 3:if(kr(t,r),(r&130023424)===r&&(e=Em+500-Fe(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vf(ui.bind(null,t,Mt,Qn),e);break}ui(t,Mt,Qn);break;case 4:if(kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-vn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=vf(ui.bind(null,t,Mt,Qn),r);break}ui(t,Mt,Qn);break;case 5:ui(t,Mt,Qn);break;default:throw Error(x(329))}}}return jt(t,Fe()),t.callbackNode===n?UE.bind(null,t):null}function Ff(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(wi(t,e).flags|=256),t=Xu(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Uf(e)),t}function Uf(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function $k(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kr(t,e){for(e&=~wm,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function Rv(t){if(oe&6)throw Error(x(327));Is();var e=Ou(t,0);if(!(e&1))return jt(t,Fe()),null;var n=Xu(t,e);if(t.tag!==0&&n===2){var r=cf(t);r!==0&&(e=r,n=Ff(t,r))}if(n===1)throw n=Aa,wi(t,0),kr(t,e),jt(t,Fe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,Mt,Qn),jt(t,Fe()),null}function Tm(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Fs=Fe()+500,Oc&&ti())}}function xi(t){Nr!==null&&Nr.tag===0&&!(oe&6)&&Is();var e=oe;oe|=1;var n=on.transition,r=he;try{if(on.transition=null,he=1,t)return t()}finally{he=r,on.transition=n,oe=e,!(oe&6)&&ti()}}function Im(){zt=fs.current,Ie(fs)}function wi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gk(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(rm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:Ms(),Ie(Ut),Ie(Rt),dm();break;case 5:hm(r);break;case 4:Ms();break;case 13:Ie(Ce);break;case 19:Ie(Ce);break;case 10:am(r.type._context);break;case 22:case 23:Im()}n=n.return}if(nt=t,He=t=jr(t.current,null),ut=zt=e,Ye=0,Aa=null,wm=Vc=Pi=0,Mt=ea=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function $E(t,e){do{var n=He;try{if(om(),hu.current=Ku,qu){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qu=!1}if(Ci=0,et=Qe=Pe=null,Jo=!1,Ia=0,_m.current=null,n===null||n.return===null){Ye=1,Aa=e,He=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=dv(o);if(p!==null){p.flags&=-257,fv(p,o,a,s,e),p.mode&1&&hv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){hv(s,u,e),Sm();break e}l=Error(x(426))}}else if(ke&&a.mode&1){var w=dv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),fv(w,o,a,s,e),im(Vs(l,a));break e}}s=l=Vs(l,a),Ye!==4&&(Ye=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=IE(s,l,e);iv(s,g);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ur===null||!Ur.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var m=SE(s,a,e);iv(s,m);break e}}s=s.return}while(s!==null)}zE(n)}catch(T){e=T,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function jE(){var t=Gu.current;return Gu.current=Ku,t===null?Ku:t}function Sm(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),nt===null||!(Pi&268435455)&&!(Vc&268435455)||kr(nt,ut)}function Xu(t,e){var n=oe;oe|=2;var r=jE();(nt!==t||ut!==e)&&(Qn=null,wi(t,e));do try{jk();break}catch(i){$E(t,i)}while(1);if(om(),oe=n,Gu.current=r,He!==null)throw Error(x(261));return nt=null,ut=0,Ye}function jk(){for(;He!==null;)BE(He)}function Bk(){for(;He!==null&&!fA();)BE(He)}function BE(t){var e=WE(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?zE(t):He=e,_m.current=null}function zE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bk(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,He=null;return}}else if(n=Lk(n,e,zt),n!==null){He=n;return}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Ye===0&&(Ye=5)}function ui(t,e,n){var r=he,i=on.transition;try{on.transition=null,he=1,zk(t,e,n,r)}finally{on.transition=i,he=r}return null}function zk(t,e,n,r){do Is();while(Nr!==null);if(oe&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IA(t,s),t===nt&&(He=nt=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zl||(zl=!0,qE(Nu,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=he;he=1;var a=oe;oe|=4,_m.current=null,Vk(t,n),VE(n,t),uk(gf),Lu=!!mf,gf=mf=null,t.current=n,Fk(n),pA(),oe=a,he=o,on.transition=s}else t.current=n;if(zl&&(zl=!1,Nr=t,Yu=i),s=t.pendingLanes,s===0&&(Ur=null),yA(n.stateNode),jt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qu)throw Qu=!1,t=Mf,Mf=null,t;return Yu&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Vf?ta++:(ta=0,Vf=t):ta=0,ti(),null}function Is(){if(Nr!==null){var t=Tw(Yu),e=on.transition,n=he;try{if(on.transition=null,he=16>t?16:t,Nr===null)var r=!1;else{if(t=Nr,Nr=null,Yu=0,oe&6)throw Error(x(331));var i=oe;for(oe|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Zo(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,p=c.return;if(LE(c),c===u){M=null;break}if(d!==null){d.return=p,M=d;break}M=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,M=y;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Mc(9,a)}}catch(T){Ne(a,a.return,T)}if(a===o){M=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}if(oe=i,ti(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Cc,t)}catch{}r=!0}return r}finally{he=n,on.transition=e}}return!1}function Av(t,e,n){e=Vs(n,e),e=IE(t,e,1),t=Fr(t,e,1),e=Dt(),t!==null&&(Xa(t,1,e),jt(t,e))}function Ne(t,e,n){if(t.tag===3)Av(t,t,n);else for(;e!==null;){if(e.tag===3){Av(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ur===null||!Ur.has(r))){t=Vs(n,t),t=SE(e,t,1),e=Fr(e,t,1),t=Dt(),e!==null&&(Xa(e,1,t),jt(e,t));break}}e=e.return}}function Hk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ut&n)===n&&(Ye===4||Ye===3&&(ut&130023424)===ut&&500>Fe()-Em?wi(t,0):wm|=n),jt(t,e)}function HE(t,e){e===0&&(t.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var n=Dt();t=ur(t,e),t!==null&&(Xa(t,e,n),jt(t,n))}function Wk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),HE(t,n)}function qk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),HE(t,n)}var WE;WE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ut.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,Ok(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,ke&&e.flags&1048576&&Gw(e,ju,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fu(t,e),t=e.pendingProps;var i=Os(e,Rt.current);Ts(e,n),i=pm(null,e,r,t,i,n);var s=mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Uu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,um(e),i.updater=Lc,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=Cf(null,e,r,!0,s,n)):(e.tag=0,ke&&s&&nm(e),Pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Gk(r),t=pn(r,t),i){case 0:e=kf(null,e,r,t,n);break e;case 1:e=gv(null,e,r,t,n);break e;case 11:e=pv(null,e,r,t,n);break e;case 14:e=mv(null,e,r,pn(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),gv(t,e,r,i,n);case 3:e:{if(CE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Jw(t,e),Hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(x(423)),e),e=yv(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(x(424)),e),e=yv(t,e,r,n,i);break e}else for(Ht=Vr(e.stateNode.containerInfo.firstChild),Kt=e,ke=!0,yn=null,n=nE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),r===i){e=cr(t,e,n);break e}Pt(t,e,r,n)}e=e.child}return e;case 5:return rE(e),t===null&&Tf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yf(r,i)?o=null:s!==null&&yf(r,s)&&(e.flags|=32),kE(t,e),Pt(t,e,o,n),e.child;case 6:return t===null&&Tf(e),null;case 13:return PE(t,e,n);case 4:return cm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):Pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),pv(t,e,r,i,n);case 7:return Pt(t,e,e.pendingProps,n),e.child;case 8:return Pt(t,e,e.pendingProps.children,n),e.child;case 12:return Pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Bu,r._currentValue),r._currentValue=o,s!==null)if(Tn(s.value,o)){if(s.children===i.children&&!Ut.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=sr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),If(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),If(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ts(e,n),i=an(i),r=r(i),e.flags|=1,Pt(t,e,r,n),e.child;case 14:return r=e.type,i=pn(r,e.pendingProps),i=pn(r.type,i),mv(t,e,r,i,n);case 15:return RE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pn(r,i),fu(t,e),e.tag=1,$t(r)?(t=!0,Uu(e)):t=!1,Ts(e,n),eE(e,r,i),Rf(e,r,i,n),Cf(null,e,r,!0,t,n);case 19:return xE(t,e,n);case 22:return AE(t,e,n)}throw Error(x(156,e.tag))};function qE(t,e){return vw(t,e)}function Kk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(t,e,n,r){return new Kk(t,e,n,r)}function Rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gk(t){if(typeof t=="function")return Rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hp)return 11;if(t===Wp)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Ei(n.children,i,s,e);case zp:o=8,i|=8;break;case Gd:return t=sn(12,n,e,i|2),t.elementType=Gd,t.lanes=s,t;case Qd:return t=sn(13,n,e,i),t.elementType=Qd,t.lanes=s,t;case Yd:return t=sn(19,n,e,i),t.elementType=Yd,t.lanes=s,t;case tw:return Fc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z0:o=10;break e;case ew:o=9;break e;case Hp:o=11;break e;case Wp:o=14;break e;case Sr:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=sn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=sn(7,t,r,e),t.lanes=n,t}function Fc(t,e,n,r){return t=sn(22,t,r,e),t.elementType=tw,t.lanes=n,t.stateNode={isHidden:!1},t}function dd(t,e,n){return t=sn(6,t,null,e),t.lanes=n,t}function fd(t,e,n){return e=sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kh(0),this.expirationTimes=Kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Am(t,e,n,r,i,s,o,a,l){return t=new Qk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(s),t}function Yk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KE(t){if(!t)return Gr;t=t._reactInternals;e:{if(Bi(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if($t(n))return qw(t,n,e)}return e}function GE(t,e,n,r,i,s,o,a,l){return t=Am(n,r,!0,t,i,s,o,a,l),t.context=KE(null),n=t.current,r=Dt(),i=$r(n),s=sr(r,i),s.callback=e??null,Fr(n,s,i),t.current.lanes=i,Xa(t,i,r),jt(t,r),t}function Uc(t,e,n,r){var i=e.current,s=Dt(),o=$r(i);return n=KE(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fr(i,e,o),t!==null&&(_n(t,i,o,s),cu(t,i,o)),o}function Ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function km(t,e){kv(t,e),(t=t.alternate)&&kv(t,e)}function Xk(){return null}var QE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}$c.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Uc(t,e,null,null)};$c.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xi(function(){Uc(null,t,null,null)}),e[lr]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&kw(t)}};function Pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cv(){}function Jk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ju(o);s.call(u)}}var o=GE(e,r,t,0,null,!1,!1,"",Cv);return t._reactRootContainer=o,t[lr]=o.current,va(t.nodeType===8?t.parentNode:t),xi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ju(l);a.call(u)}}var l=Am(t,0,!1,null,null,!1,!1,"",Cv);return t._reactRootContainer=l,t[lr]=l.current,va(t.nodeType===8?t.parentNode:t),xi(function(){Uc(e,l,n,r)}),l}function Bc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ju(o);a.call(l)}}Uc(e,o,t,i)}else o=Jk(n,e,t,i,r);return Ju(o)}Iw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vo(e.pendingLanes);n!==0&&(Gp(e,n|1),jt(e,Fe()),!(oe&6)&&(Fs=Fe()+500,ti()))}break;case 13:xi(function(){var r=ur(t,1);if(r!==null){var i=Dt();_n(r,t,1,i)}}),km(t,1)}};Qp=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Dt();_n(e,t,134217728,n)}km(t,134217728)}};Sw=function(t){if(t.tag===13){var e=$r(t),n=ur(t,e);if(n!==null){var r=Dt();_n(n,t,e,r)}km(t,e)}};Rw=function(){return he};Aw=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};af=function(t,e,n){switch(e){case"input":if(Zd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Nc(r);if(!i)throw Error(x(90));rw(r),Zd(r,i)}}}break;case"textarea":sw(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};dw=Tm;fw=xi;var Zk={usingClientEntryPoint:!1,Events:[Za,as,Nc,cw,hw,Tm]},Ao={findFiberByHostInstance:hi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},eC={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||Xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Cc=Hl.inject(eC),Vn=Hl}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pm(e))throw Error(x(200));return Yk(t,e,null,n)};Yt.createRoot=function(t,e){if(!Pm(t))throw Error(x(299));var n=!1,r="",i=QE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Am(t,1,!1,null,null,n,!1,r,i),t[lr]=e.current,va(t.nodeType===8?t.parentNode:t),new Cm(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=gw(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return xi(t)};Yt.hydrate=function(t,e,n){if(!jc(e))throw Error(x(200));return Bc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Pm(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=QE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=GE(e,null,t,1,n??null,i,!1,s,o),t[lr]=e.current,va(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $c(e)};Yt.render=function(t,e,n){if(!jc(e))throw Error(x(200));return Bc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!jc(t))throw Error(x(40));return t._reactRootContainer?(xi(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Tm;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!jc(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Bc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";function YE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YE)}catch(t){console.error(t)}}YE(),G0.exports=Yt;var tC=G0.exports,Pv=tC;qd.createRoot=Pv.createRoot,qd.hydrateRoot=Pv.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ae(){return Ae=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ae.apply(this,arguments)}var je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(je||(je={}));const xv="popstate";function nC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ka("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Di(i)}return iC(e,n,null,t)}function ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Us(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rC(){return Math.random().toString(36).substr(2,8)}function Dv(t,e){return{usr:t.state,key:t.key,idx:e}}function ka(t,e,n,r){return n===void 0&&(n=null),Ae({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yr(e):e,{state:n,key:e&&e.key||r||rC()})}function Di(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function yr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ae({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=je.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function d(w,g){a=je.Push;let f=ka(_.location,w,g);n&&n(f,w),u=c()+1;let y=Dv(f,u),m=_.createHref(f);try{o.pushState(y,"",m)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(m)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=je.Replace;let f=ka(_.location,w,g);n&&n(f,w),u=c();let y=Dv(f,u),m=_.createHref(f);o.replaceState(y,"",m),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof w=="string"?w:Di(w);return ne(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xv,h),l=w,()=>{i.removeEventListener(xv,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return o.go(w)}};return _}var Ge;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ge||(Ge={}));const sC=new Set(["lazy","caseSensitive","path","id","index","children"]);function oC(t){return t.index===!0}function $f(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(ne(i.index!==!0||!i.children,"Cannot specify children on an index route"),ne(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),oC(i)){let l=Ae({},i,e(i),{id:a});return r[a]=l,l}else{let l=Ae({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=$f(i.children,e,o,r)),l}})}function ps(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?yr(e):e,i=ro(r.pathname||"/",n);if(i==null)return null;let s=XE(t);aC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=gC(s[a],_C(i));return o}function XE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=or([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),XE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of JE(s.path))i(s,o,l)}),e}function JE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=JE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function aC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lC=/^:\w+$/,uC=3,cC=2,hC=1,dC=10,fC=-2,Nv=t=>t==="*";function pC(t,e){let n=t.split("/"),r=n.length;return n.some(Nv)&&(r+=fC),e&&(r+=cC),n.filter(i=>!Nv(i)).reduce((i,s)=>i+(lC.test(s)?uC:s===""?hC:dC),r)}function mC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function gC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=yC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:or([i,c.pathname]),pathnameBase:IC(or([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=or([i,c.pathnameBase]))}return s}function yC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=wC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Us(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _C(t){try{return decodeURI(t)}catch(e){return Us(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wC(t,e){try{return decodeURIComponent(t)}catch(n){return Us(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function ro(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function EC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?yr(t):t;return{pathname:n?n.startsWith("/")?n:TC(n,e):e,search:SC(r),hash:RC(i)}}function TC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zc(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=yr(t):(i=Ae({},t),ne(!i.pathname||!i.pathname.includes("?"),pd("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),pd("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),pd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=EC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const or=t=>t.join("/").replace(/\/\/+/g,"/"),IC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),SC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Dm{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ZE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e1=["post","put","patch","delete"],AC=new Set(e1),kC=["get",...e1],CC=new Set(kC),PC=new Set([301,302,303,307,308]),xC=new Set([307,308]),md={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},DC={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ko={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},t1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NC=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function OC(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;ne(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let E=t.detectErrorBoundary;i=I=>({hasErrorBoundary:E(I)})}else i=NC;let s={},o=$f(t.routes,i,void 0,s),a,l=t.basename||"/",u=Ae({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,h=new Set,d=null,p=null,v=null,_=t.hydrationData!=null,w=ps(o,t.history.location,l),g=null;if(w==null){let E=en(404,{pathname:t.history.location.pathname}),{matches:I,route:k}=$v(o);w=I,g={[k.id]:E}}let f=!w.some(E=>E.route.lazy)&&(!w.some(E=>E.route.loader)||t.hydrationData!=null),y,m={historyAction:t.history.action,location:t.history.location,matches:w,initialized:f,navigation:md,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||g,fetchers:new Map,blockers:new Map},T=je.Pop,R=!1,S,N=!1,J=!1,B=[],Ue=[],fe=new Map,Jt=0,Rn=-1,An=new Map,st=new Set,qe=new Map,O=new Map,$=new Map,z=!1;function ge(){return c=t.history.listen(E=>{let{action:I,location:k,delta:V}=E;if(z){z=!1;return}Us($.size===0||V!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=yy({currentLocation:m.location,nextLocation:k,historyAction:I});if(X&&V!=null){z=!0,t.history.go(V*-1),Al(X,{state:"blocked",location:k,proceed(){Al(X,{state:"proceeding",proceed:void 0,reset:void 0,location:k}),t.history.go(V)},reset(){let K=new Map(m.blockers);K.set(X,ko),ae({blockers:K})}});return}return Zt(I,k)}),m.initialized||Zt(je.Pop,m.location),y}function Re(){c&&c(),h.clear(),S&&S.abort(),m.fetchers.forEach((E,I)=>bh(I)),m.blockers.forEach((E,I)=>gy(I))}function hn(E){return h.add(E),()=>h.delete(E)}function ae(E){m=Ae({},m,E),h.forEach(I=>I(m))}function Lt(E,I){var k,V;let X=m.actionData!=null&&m.navigation.formMethod!=null&&gn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((k=E.state)==null?void 0:k._isRedirect)!==!0,K;I.actionData?Object.keys(I.actionData).length>0?K=I.actionData:K=null:X?K=m.actionData:K=null;let Q=I.loaderData?Uv(m.loaderData,I.loaderData,I.matches||[],I.errors):m.loaderData,H=m.blockers;H.size>0&&(H=new Map(H),H.forEach((ye,ft)=>H.set(ft,ko)));let U=R===!0||m.navigation.formMethod!=null&&gn(m.navigation.formMethod)&&((V=E.state)==null?void 0:V._isRedirect)!==!0;a&&(o=a,a=void 0),N||T===je.Pop||(T===je.Push?t.history.push(E,E.state):T===je.Replace&&t.history.replace(E,E.state)),ae(Ae({},I,{actionData:K,loaderData:Q,historyAction:T,location:E,initialized:!0,navigation:md,revalidation:"idle",restoreScrollPosition:_y(E,I.matches||m.matches),preventScrollReset:U,blockers:H})),T=je.Pop,R=!1,N=!1,J=!1,B=[],Ue=[]}async function dt(E,I){if(typeof E=="number"){t.history.go(E);return}let k=jf(m.location,m.matches,l,u.v7_prependBasename,E,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:V,submission:X,error:K}=Ov(u.v7_normalizeFormMethod,!1,k,I),Q=m.location,H=ka(m.location,V,I&&I.state);H=Ae({},H,t.history.encodeLocation(H));let U=I&&I.replace!=null?I.replace:void 0,ye=je.Push;U===!0?ye=je.Replace:U===!1||X!=null&&gn(X.formMethod)&&X.formAction===m.location.pathname+m.location.search&&(ye=je.Replace);let ft=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,pe=yy({currentLocation:Q,nextLocation:H,historyAction:ye});if(pe){Al(pe,{state:"blocked",location:H,proceed(){Al(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),dt(E,I)},reset(){let Ve=new Map(m.blockers);Ve.set(pe,ko),ae({blockers:Ve})}});return}return await Zt(ye,H,{submission:X,pendingError:K,preventScrollReset:ft,replace:I&&I.replace})}function bt(){if(Lh(),ae({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Zt(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Zt(T||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function Zt(E,I,k){S&&S.abort(),S=null,T=E,N=(k&&k.startUninterruptedRevalidation)===!0,RR(m.location,m.matches),R=(k&&k.preventScrollReset)===!0;let V=a||o,X=k&&k.overrideNavigation,K=ps(V,I,l);if(!K){let Ve=en(404,{pathname:I.pathname}),{matches:Je,route:oi}=$v(V);Mh(),Lt(I,{matches:Je,loaderData:{},errors:{[oi.id]:Ve}});return}if(m.initialized&&!J&&FC(m.location,I)&&!(k&&k.submission&&gn(k.submission.formMethod))){Lt(I,{matches:K});return}S=new AbortController;let Q=Po(t.history,I,S.signal,k&&k.submission),H,U;if(k&&k.pendingError)U={[ms(K).route.id]:k.pendingError};else if(k&&k.submission&&gn(k.submission.formMethod)){let Ve=await Qi(Q,I,k.submission,K,{replace:k.replace});if(Ve.shortCircuited)return;H=Ve.pendingActionData,U=Ve.pendingActionError,X=Wl(I,k.submission),Q=new Request(Q.url,{signal:Q.signal})}let{shortCircuited:ye,loaderData:ft,errors:pe}=await kn(Q,I,K,X,k&&k.submission,k&&k.fetcherSubmission,k&&k.replace,H,U);ye||(S=null,Lt(I,Ae({matches:K},H?{actionData:H}:{},{loaderData:ft,errors:pe})))}async function Qi(E,I,k,V,X){X===void 0&&(X={}),Lh();let K=zC(I,k);ae({navigation:K});let Q,H=zf(V,I);if(!H.route.action&&!H.route.lazy)Q={type:Ge.error,error:en(405,{method:E.method,pathname:I.pathname,routeId:H.route.id})};else if(Q=await Co("action",E,H,V,s,i,l),E.signal.aborted)return{shortCircuited:!0};if(Ss(Q)){let U;return X&&X.replace!=null?U=X.replace:U=Q.location===m.location.pathname+m.location.search,await go(m,Q,{submission:k,replace:U}),{shortCircuited:!0}}if(na(Q)){let U=ms(V,H.route.id);return(X&&X.replace)!==!0&&(T=je.Push),{pendingActionData:{},pendingActionError:{[U.route.id]:Q.error}}}if(pi(Q))throw en(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:Q.data}}}async function kn(E,I,k,V,X,K,Q,H,U){let ye=V||Wl(I,X),ft=X||K||zv(ye),pe=a||o,[Ve,Je]=Lv(t.history,m,k,ft,I,J,B,Ue,qe,st,pe,l,H,U);if(Mh(me=>!(k&&k.some(dn=>dn.route.id===me))||Ve&&Ve.some(dn=>dn.route.id===me)),Rn=++Jt,Ve.length===0&&Je.length===0){let me=py();return Lt(I,Ae({matches:k,loaderData:{},errors:U||null},H?{actionData:H}:{},me?{fetchers:new Map(m.fetchers)}:{})),{shortCircuited:!0}}if(!N){Je.forEach(dn=>{let wr=m.fetchers.get(dn.key),jh=xo(void 0,wr?wr.data:void 0);m.fetchers.set(dn.key,jh)});let me=H||m.actionData;ae(Ae({navigation:ye},me?Object.keys(me).length===0?{actionData:null}:{actionData:me}:{},Je.length>0?{fetchers:new Map(m.fetchers)}:{}))}Je.forEach(me=>{fe.has(me.key)&&_r(me.key),me.controller&&fe.set(me.key,me.controller)});let oi=()=>Je.forEach(me=>_r(me.key));S&&S.signal.addEventListener("abort",oi);let{results:ai,loaderResults:yo,fetcherResults:Vh}=await dy(m.matches,k,Ve,Je,E);if(E.signal.aborted)return{shortCircuited:!0};S&&S.signal.removeEventListener("abort",oi),Je.forEach(me=>fe.delete(me.key));let Kn=jv(ai);if(Kn){if(Kn.idx>=Ve.length){let me=Je[Kn.idx-Ve.length].key;st.add(me)}return await go(m,Kn.result,{replace:Q}),{shortCircuited:!0}}let{loaderData:Gn,errors:kl}=Fv(m,k,Ve,yo,U,Je,Vh,O);O.forEach((me,dn)=>{me.subscribe(wr=>{(wr||me.done)&&O.delete(dn)})});let Fh=py(),Uh=my(Rn),$h=Fh||Uh||Je.length>0;return Ae({loaderData:Gn,errors:kl},$h?{fetchers:new Map(m.fetchers)}:{})}function hy(E){return m.fetchers.get(E)||DC}function wR(E,I,k,V){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");fe.has(E)&&_r(E);let X=a||o,K=jf(m.location,m.matches,l,u.v7_prependBasename,k,I,V==null?void 0:V.relative),Q=ps(X,K,l);if(!Q){Rl(E,I,en(404,{pathname:K}));return}let{path:H,submission:U,error:ye}=Ov(u.v7_normalizeFormMethod,!0,K,V);if(ye){Rl(E,I,ye);return}let ft=zf(Q,H);if(R=(V&&V.preventScrollReset)===!0,U&&gn(U.formMethod)){ER(E,I,H,ft,Q,U);return}qe.set(E,{routeId:I,path:H}),TR(E,I,H,ft,Q,U)}async function ER(E,I,k,V,X,K){if(Lh(),qe.delete(E),!V.route.action&&!V.route.lazy){let Ke=en(405,{method:K.formMethod,pathname:k,routeId:I});Rl(E,I,Ke);return}let Q=m.fetchers.get(E),H=HC(K,Q);m.fetchers.set(E,H),ae({fetchers:new Map(m.fetchers)});let U=new AbortController,ye=Po(t.history,k,U.signal,K);fe.set(E,U);let ft=Jt,pe=await Co("action",ye,V,X,s,i,l);if(ye.signal.aborted){fe.get(E)===U&&fe.delete(E);return}if(Ss(pe))if(fe.delete(E),Rn>ft){let Ke=Zi(void 0);m.fetchers.set(E,Ke),ae({fetchers:new Map(m.fetchers)});return}else{st.add(E);let Ke=xo(K);return m.fetchers.set(E,Ke),ae({fetchers:new Map(m.fetchers)}),go(m,pe,{submission:K,isFetchActionRedirect:!0})}if(na(pe)){Rl(E,I,pe.error);return}if(pi(pe))throw en(400,{type:"defer-action"});let Ve=m.navigation.location||m.location,Je=Po(t.history,Ve,U.signal),oi=a||o,ai=m.navigation.state!=="idle"?ps(oi,m.navigation.location,l):m.matches;ne(ai,"Didn't find any matches after fetcher action");let yo=++Jt;An.set(E,yo);let Vh=xo(K,pe.data);m.fetchers.set(E,Vh);let[Kn,Gn]=Lv(t.history,m,ai,K,Ve,J,B,Ue,qe,st,oi,l,{[V.route.id]:pe.data},void 0);Gn.filter(Ke=>Ke.key!==E).forEach(Ke=>{let vo=Ke.key,wy=m.fetchers.get(vo),kR=xo(void 0,wy?wy.data:void 0);m.fetchers.set(vo,kR),fe.has(vo)&&_r(vo),Ke.controller&&fe.set(vo,Ke.controller)}),ae({fetchers:new Map(m.fetchers)});let kl=()=>Gn.forEach(Ke=>_r(Ke.key));U.signal.addEventListener("abort",kl);let{results:Fh,loaderResults:Uh,fetcherResults:$h}=await dy(m.matches,ai,Kn,Gn,Je);if(U.signal.aborted)return;U.signal.removeEventListener("abort",kl),An.delete(E),fe.delete(E),Gn.forEach(Ke=>fe.delete(Ke.key));let me=jv(Fh);if(me){if(me.idx>=Kn.length){let Ke=Gn[me.idx-Kn.length].key;st.add(Ke)}return go(m,me.result)}let{loaderData:dn,errors:wr}=Fv(m,m.matches,Kn,Uh,void 0,Gn,$h,O);if(m.fetchers.has(E)){let Ke=Zi(pe.data);m.fetchers.set(E,Ke)}let jh=my(yo);m.navigation.state==="loading"&&yo>Rn?(ne(T,"Expected pending action"),S&&S.abort(),Lt(m.navigation.location,{matches:ai,loaderData:dn,errors:wr,fetchers:new Map(m.fetchers)})):(ae(Ae({errors:wr,loaderData:Uv(m.loaderData,dn,ai,wr)},jh||Gn.length>0?{fetchers:new Map(m.fetchers)}:{})),J=!1)}async function TR(E,I,k,V,X,K){let Q=m.fetchers.get(E),H=xo(K,Q?Q.data:void 0);m.fetchers.set(E,H),ae({fetchers:new Map(m.fetchers)});let U=new AbortController,ye=Po(t.history,k,U.signal);fe.set(E,U);let ft=Jt,pe=await Co("loader",ye,V,X,s,i,l);if(pi(pe)&&(pe=await i1(pe,ye.signal,!0)||pe),fe.get(E)===U&&fe.delete(E),ye.signal.aborted)return;if(Ss(pe))if(Rn>ft){let Je=Zi(void 0);m.fetchers.set(E,Je),ae({fetchers:new Map(m.fetchers)});return}else{st.add(E),await go(m,pe);return}if(na(pe)){let Je=ms(m.matches,I);m.fetchers.delete(E),ae({fetchers:new Map(m.fetchers),errors:{[Je.route.id]:pe.error}});return}ne(!pi(pe),"Unhandled fetcher deferred data");let Ve=Zi(pe.data);m.fetchers.set(E,Ve),ae({fetchers:new Map(m.fetchers)})}async function go(E,I,k){let{submission:V,replace:X,isFetchActionRedirect:K}=k===void 0?{}:k;I.revalidate&&(J=!0);let Q=ka(E.location,I.location,Ae({_isRedirect:!0},K?{_isFetchActionRedirect:!0}:{}));if(ne(Q,"Expected a location on the redirect navigation"),t1.test(I.location)&&n){let ye=t.history.createURL(I.location),ft=ro(ye.pathname,l)==null;if(e.location.origin!==ye.origin||ft){X?e.location.replace(I.location):e.location.assign(I.location);return}}S=null;let H=X===!0?je.Replace:je.Push,U=V||zv(E.navigation);if(xC.has(I.status)&&U&&gn(U.formMethod))await Zt(H,Q,{submission:Ae({},U,{formAction:I.location}),preventScrollReset:R});else if(K)await Zt(H,Q,{overrideNavigation:Wl(Q),fetcherSubmission:U,preventScrollReset:R});else{let ye=Wl(Q,U);await Zt(H,Q,{overrideNavigation:ye,preventScrollReset:R})}}async function dy(E,I,k,V,X){let K=await Promise.all([...k.map(U=>Co("loader",X,U,I,s,i,l)),...V.map(U=>U.matches&&U.match&&U.controller?Co("loader",Po(t.history,U.path,U.controller.signal),U.match,U.matches,s,i,l):{type:Ge.error,error:en(404,{pathname:U.path})})]),Q=K.slice(0,k.length),H=K.slice(k.length);return await Promise.all([Bv(E,k,Q,Q.map(()=>X.signal),!1,m.loaderData),Bv(E,V.map(U=>U.match),H,V.map(U=>U.controller?U.controller.signal:null),!0)]),{results:K,loaderResults:Q,fetcherResults:H}}function Lh(){J=!0,B.push(...Mh()),qe.forEach((E,I)=>{fe.has(I)&&(Ue.push(I),_r(I))})}function Rl(E,I,k){let V=ms(m.matches,I);bh(E),ae({errors:{[V.route.id]:k},fetchers:new Map(m.fetchers)})}function bh(E){let I=m.fetchers.get(E);fe.has(E)&&!(I&&I.state==="loading"&&An.has(E))&&_r(E),qe.delete(E),An.delete(E),st.delete(E),m.fetchers.delete(E)}function _r(E){let I=fe.get(E);ne(I,"Expected fetch controller: "+E),I.abort(),fe.delete(E)}function fy(E){for(let I of E){let k=hy(I),V=Zi(k.data);m.fetchers.set(I,V)}}function py(){let E=[],I=!1;for(let k of st){let V=m.fetchers.get(k);ne(V,"Expected fetcher: "+k),V.state==="loading"&&(st.delete(k),E.push(k),I=!0)}return fy(E),I}function my(E){let I=[];for(let[k,V]of An)if(V<E){let X=m.fetchers.get(k);ne(X,"Expected fetcher: "+k),X.state==="loading"&&(_r(k),An.delete(k),I.push(k))}return fy(I),I.length>0}function IR(E,I){let k=m.blockers.get(E)||ko;return $.get(E)!==I&&$.set(E,I),k}function gy(E){m.blockers.delete(E),$.delete(E)}function Al(E,I){let k=m.blockers.get(E)||ko;ne(k.state==="unblocked"&&I.state==="blocked"||k.state==="blocked"&&I.state==="blocked"||k.state==="blocked"&&I.state==="proceeding"||k.state==="blocked"&&I.state==="unblocked"||k.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+k.state+" -> "+I.state);let V=new Map(m.blockers);V.set(E,I),ae({blockers:V})}function yy(E){let{currentLocation:I,nextLocation:k,historyAction:V}=E;if($.size===0)return;$.size>1&&Us(!1,"A router only supports one blocker at a time");let X=Array.from($.entries()),[K,Q]=X[X.length-1],H=m.blockers.get(K);if(!(H&&H.state==="proceeding")&&Q({currentLocation:I,nextLocation:k,historyAction:V}))return K}function Mh(E){let I=[];return O.forEach((k,V)=>{(!E||E(V))&&(k.cancel(),I.push(V),O.delete(V))}),I}function SR(E,I,k){if(d=E,v=I,p=k||null,!_&&m.navigation===md){_=!0;let V=_y(m.location,m.matches);V!=null&&ae({restoreScrollPosition:V})}return()=>{d=null,v=null,p=null}}function vy(E,I){return p&&p(E,I.map(V=>BC(V,m.loaderData)))||E.key}function RR(E,I){if(d&&v){let k=vy(E,I);d[k]=v()}}function _y(E,I){if(d){let k=vy(E,I),V=d[k];if(typeof V=="number")return V}return null}function AR(E){s={},a=$f(E,i,void 0,s)}return y={get basename(){return l},get state(){return m},get routes(){return o},initialize:ge,subscribe:hn,enableScrollRestoration:SR,navigate:dt,fetch:wR,revalidate:bt,createHref:E=>t.history.createHref(E),encodeLocation:E=>t.history.encodeLocation(E),getFetcher:hy,deleteFetcher:bh,dispose:Re,getBlocker:IR,deleteBlocker:gy,_internalFetchControllers:fe,_internalActiveDeferreds:O,_internalSetRoutes:AR},y}function LC(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function jf(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=xm(i||".",zc(a).map(c=>c.pathnameBase),ro(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!Nm(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:or([n,u.pathname])),Di(u)}function Ov(t,e,n,r){if(!r||!LC(r))return{path:n};if(r.formMethod&&!jC(r.formMethod))return{path:n,error:en(405,{method:r.formMethod})};let i=()=>({path:n,error:en(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=r1(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!gn(o))return i();let d=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,v)=>{let[_,w]=v;return""+p+_+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:d}}}else if(r.formEncType==="application/json"){if(!gn(o))return i();try{let d=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}ne(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=Bf(r.formData),u=r.formData;else if(r.body instanceof FormData)l=Bf(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Vv(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Vv(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(gn(c.formMethod))return{path:n,submission:c};let h=yr(n);return e&&h.search&&Nm(h.search)&&l.append("index",""),h.search="?"+l,{path:Di(h),submission:c}}function bC(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Lv(t,e,n,r,i,s,o,a,l,u,c,h,d,p){let v=p?Object.values(p)[0]:d?Object.values(d)[0]:void 0,_=t.createURL(e.location),w=t.createURL(i),g=p?Object.keys(p)[0]:void 0,y=bC(n,g).filter((T,R)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(MC(e.loaderData,e.matches[R],T)||o.some(J=>J===T.route.id))return!0;let S=e.matches[R],N=T;return bv(T,Ae({currentUrl:_,currentParams:S.params,nextUrl:w,nextParams:N.params},r,{actionResult:v,defaultShouldRevalidate:s||_.pathname+_.search===w.pathname+w.search||_.search!==w.search||n1(S,N)}))}),m=[];return l.forEach((T,R)=>{if(!n.some(Ue=>Ue.route.id===T.routeId))return;let S=ps(c,T.path,h);if(!S){m.push({key:R,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let N=e.fetchers.get(R),J=zf(S,T.path),B=!1;u.has(R)?B=!1:a.includes(R)?B=!0:N&&N.state!=="idle"&&N.data===void 0?B=s:B=bv(J,Ae({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:v,defaultShouldRevalidate:s})),B&&m.push({key:R,routeId:T.routeId,path:T.path,matches:S,match:J,controller:new AbortController})}),[y,m]}function MC(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function n1(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function bv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function Mv(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];ne(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Us(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!sC.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ae({},e(i),{lazy:void 0}))}async function Co(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,h=v=>{let _,w=new Promise((g,f)=>_=f);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([v({request:e,params:n.params,context:a.requestContext}),w])};try{let v=n.route[t];if(n.route.lazy)if(v)u=(await Promise.all([h(v),Mv(n.route,s,i)]))[0];else if(await Mv(n.route,s,i),v=n.route[t],v)u=await h(v);else if(t==="action"){let _=new URL(e.url),w=_.pathname+_.search;throw en(405,{method:e.method,pathname:w,routeId:n.route.id})}else return{type:Ge.data,data:void 0};else if(v)u=await h(v);else{let _=new URL(e.url),w=_.pathname+_.search;throw en(404,{pathname:w})}ne(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(v){l=Ge.error,u=v}finally{c&&e.signal.removeEventListener("abort",c)}if($C(u)){let v=u.status;if(PC.has(v)){let g=u.headers.get("Location");if(ne(g,"Redirects returned/thrown from loaders/actions must have a Location header"),!t1.test(g))g=jf(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,g);else if(!a.isStaticRequest){let f=new URL(e.url),y=g.startsWith("//")?new URL(f.protocol+g):new URL(g),m=ro(y.pathname,o)!=null;y.origin===f.origin&&m&&(g=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",g),u;return{type:Ge.redirect,status:v,location:g,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||Ge.data,response:u};let _,w=u.headers.get("Content-Type");return w&&/\bapplication\/json\b/.test(w)?_=await u.json():_=await u.text(),l===Ge.error?{type:l,error:new Dm(v,u.statusText,_),headers:u.headers}:{type:Ge.data,data:_,statusCode:u.status,headers:u.headers}}if(l===Ge.error)return{type:l,error:u};if(UC(u)){var d,p;return{type:Ge.deferred,deferredData:u,statusCode:(d=u.init)==null?void 0:d.status,headers:((p=u.init)==null?void 0:p.headers)&&new Headers(u.init.headers)}}return{type:Ge.data,data:u}}function Po(t,e,n,r){let i=t.createURL(r1(e)).toString(),s={signal:n};if(r&&gn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Bf(r.formData):s.body=r.formData}return new Request(i,s)}function Bf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Vv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function VC(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,h)=>{let d=e[h].route.id;if(ne(!Ss(c),"Cannot handle redirect results in processLoaderData"),na(c)){let p=ms(t,d),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[p.route.id]==null&&(o[p.route.id]=v),s[d]=void 0,l||(l=!0,a=ZE(c.error)?c.error.status:500),c.headers&&(u[d]=c.headers)}else pi(c)?(i.set(d,c.deferredData),s[d]=c.deferredData.data):s[d]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[d]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function Fv(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=VC(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:h,match:d,controller:p}=s[c];ne(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let v=o[c];if(!(p&&p.signal.aborted))if(na(v)){let _=ms(t.matches,d==null?void 0:d.route.id);u&&u[_.route.id]||(u=Ae({},u,{[_.route.id]:v.error})),t.fetchers.delete(h)}else if(Ss(v))ne(!1,"Unhandled fetcher revalidation redirect");else if(pi(v))ne(!1,"Unhandled fetcher deferred data");else{let _=Zi(v.data);t.fetchers.set(h,_)}}return{loaderData:l,errors:u}}function Uv(t,e,n,r){let i=Ae({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function ms(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function $v(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function en(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Dm(t||500,o,new Error(a),!0)}function jv(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Ss(n))return{result:n,idx:e}}}function r1(t){let e=typeof t=="string"?yr(t):t;return Di(Ae({},e,{hash:""}))}function FC(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function pi(t){return t.type===Ge.deferred}function na(t){return t.type===Ge.error}function Ss(t){return(t&&t.type)===Ge.redirect}function UC(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function $C(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function jC(t){return CC.has(t.toLowerCase())}function gn(t){return AC.has(t.toLowerCase())}async function Bv(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(h=>h.route.id===l.route.id),c=u!=null&&!n1(u,l)&&(s&&s[l.route.id])!==void 0;if(pi(a)&&(i||c)){let h=r[o];ne(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await i1(a,h,i).then(d=>{d&&(n[o]=d||n[o])})}}}async function i1(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ge.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ge.error,error:i}}return{type:Ge.data,data:t.deferredData.data}}}function Nm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function BC(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function zf(t,e){let n=typeof e=="string"?yr(e).search:e.search;if(t[t.length-1].route.index&&Nm(n||""))return t[t.length-1];let r=zc(t);return r[r.length-1]}function zv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Wl(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function zC(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function xo(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function HC(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Zi(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zu(){return Zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zu.apply(this,arguments)}const Hc=C.createContext(null),s1=C.createContext(null),io=C.createContext(null),Wc=C.createContext(null),ni=C.createContext({outlet:null,matches:[],isDataRoute:!1}),o1=C.createContext(null);function WC(t,e){let{relative:n}=e===void 0?{}:e;tl()||ne(!1);let{basename:r,navigator:i}=C.useContext(io),{hash:s,pathname:o,search:a}=l1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:or([r,o])),i.createHref({pathname:l,search:a,hash:s})}function tl(){return C.useContext(Wc)!=null}function qc(){return tl()||ne(!1),C.useContext(Wc).location}function a1(t){C.useContext(io).static||C.useLayoutEffect(t)}function so(){let{isDataRoute:t}=C.useContext(ni);return t?sP():qC()}function qC(){tl()||ne(!1);let t=C.useContext(Hc),{basename:e,navigator:n}=C.useContext(io),{matches:r}=C.useContext(ni),{pathname:i}=qc(),s=JSON.stringify(zc(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return a1(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=xm(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:or([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const KC=C.createContext(null);function GC(t){let e=C.useContext(ni).outlet;return e&&C.createElement(KC.Provider,{value:t},e)}function l1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(ni),{pathname:i}=qc(),s=JSON.stringify(zc(r).map(o=>o.pathnameBase));return C.useMemo(()=>xm(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function QC(t,e,n){tl()||ne(!1);let{navigator:r}=C.useContext(io),{matches:i}=C.useContext(ni),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qc(),u;if(e){var c;let _=typeof e=="string"?yr(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||ne(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=ps(t,{pathname:d}),v=eP(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:or([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:or([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?C.createElement(Wc.Provider,{value:{location:Zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:je.Pop}},v):v}function YC(){let t=iP(),e=ZE(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const XC=C.createElement(YC,null);class JC extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(ni.Provider,{value:this.props.routeContext},C.createElement(o1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZC(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Hc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(ni.Provider,{value:e},r)}function eP(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ne(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||XC);let d=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=h:l.route.Component?v=C.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,C.createElement(ZC,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(JC,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Hf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Hf||(Hf={}));var Ca;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ca||(Ca={}));function tP(t){let e=C.useContext(Hc);return e||ne(!1),e}function nP(t){let e=C.useContext(s1);return e||ne(!1),e}function rP(t){let e=C.useContext(ni);return e||ne(!1),e}function u1(t){let e=rP(),n=e.matches[e.matches.length-1];return n.route.id||ne(!1),n.route.id}function iP(){var t;let e=C.useContext(o1),n=nP(Ca.UseRouteError),r=u1(Ca.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function sP(){let{router:t}=tP(Hf.UseNavigateStable),e=u1(Ca.UseNavigateStable),n=C.useRef(!1);return a1(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zu({fromRouteId:e},s)))},[t,e])}const oP="startTransition",Hv=WR[oP];function aP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=C.useState(n.state),{v7_startTransition:o}=r||{},a=C.useCallback(h=>{o&&Hv?Hv(()=>s(h)):s(h)},[s,o]);C.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=C.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,d,p)=>n.navigate(h,{state:d,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(h,d,p)=>n.navigate(h,{replace:!0,state:d,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[n]),u=n.basename||"/",c=C.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return C.createElement(C.Fragment,null,C.createElement(Hc.Provider,{value:c},C.createElement(s1.Provider,{value:i},C.createElement(cP,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?C.createElement(lP,{routes:n.routes,state:i}):e))),null)}function lP(t){let{routes:e,state:n}=t;return QC(e,void 0,n)}function uP(t){return GC(t.context)}function cP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=je.Pop,navigator:s,static:o=!1}=t;tl()&&ne(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=yr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,v=C.useMemo(()=>{let _=ro(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:p},navigationType:i}},[a,u,c,h,d,p,i]);return v==null?null:C.createElement(io.Provider,{value:l},C.createElement(Wc.Provider,{children:n,value:v}))}var Wv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Wv||(Wv={}));new Promise(()=>{});function hP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:C.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pa.apply(this,arguments)}function dP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pP(t,e){return t.button===0&&(!e||e==="_self")&&!fP(t)}const mP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function gP(t,e){return OC({basename:e==null?void 0:e.basename,future:Pa({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:nC({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||yP(),routes:t,mapRouteProperties:hP}).initialize()}function yP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Pa({},e,{errors:vP(e.errors)})),e}function vP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Dm(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const _P=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wf=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=dP(e,mP),{basename:d}=C.useContext(io),p,v=!1;if(typeof u=="string"&&wP.test(u)&&(p=u,_P))try{let f=new URL(window.location.href),y=u.startsWith("//")?new URL(f.protocol+u):new URL(u),m=ro(y.pathname,d);y.origin===f.origin&&m!=null?u=m+y.search+y.hash:v=!0}catch{}let _=WC(u,{relative:i}),w=EP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(f){r&&r(f),f.defaultPrevented||w(f)}return C.createElement("a",Pa({},h,{href:p||_,onClick:v||s?r:g,ref:n,target:l}))});var qv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(qv||(qv={}));var Kv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Kv||(Kv={}));function EP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=so(),l=qc(),u=l1(t,{relative:o});return C.useCallback(c=>{if(pP(c,n)){c.preventDefault();let h=r!==void 0?r:Di(l)===Di(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},h1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(c1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new IP;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SP=function(t){const e=c1(t);return h1.encodeByteArray(e,!0)},ec=function(t){return SP(t).replace(/\./g,"")},d1=function(t){try{return h1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=()=>RP().__FIREBASE_DEFAULTS__,kP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&d1(t[1]);return e&&JSON.parse(e)},Kc=()=>{try{return AP()||kP()||CP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},f1=t=>{var e,n;return(n=(e=Kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p1=t=>{const e=f1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},m1=()=>{var t;return(t=Kc())===null||t===void 0?void 0:t.config},g1=t=>{var e;return(e=Kc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ec(JSON.stringify(n)),ec(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function DP(){var t;const e=(t=Kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LP(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bP(){try{return typeof indexedDB=="object"}catch{return!1}}function MP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VP,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wn(i,a,r)}}function FP(t,e){return t.replace(UP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UP=/\{\$([^}]+)}/g;function $P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gv(s)&&Gv(o)){if(!tc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Uo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $o(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jP(t,e){const n=new BP(t,e);return n.subscribe.bind(n)}class BP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gd),i.error===void 0&&(i.error=gd),i.complete===void 0&&(i.complete=gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new PP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qP(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WP(t){return t===ci?void 0:t}function qP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const GP={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},QP=le.INFO,YP={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},XP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Om{constructor(e){this.name=e,this._logLevel=QP,this._logHandler=XP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const JP=(t,e)=>e.some(n=>t instanceof n);let Qv,Yv;function ZP(){return Qv||(Qv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ex(){return Yv||(Yv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const v1=new WeakMap,qf=new WeakMap,_1=new WeakMap,yd=new WeakMap,Lm=new WeakMap;function tx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&v1.set(n,t)}).catch(()=>{}),Lm.set(e,t),e}function nx(t){if(qf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qf.set(t,e)}let Kf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rx(t){Kf=t(Kf)}function ix(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vd(this),e,...n);return _1.set(r,e.sort?e.sort():[e]),Br(r)}:ex().includes(t)?function(...e){return t.apply(vd(this),e),Br(v1.get(this))}:function(...e){return Br(t.apply(vd(this),e))}}function sx(t){return typeof t=="function"?ix(t):(t instanceof IDBTransaction&&nx(t),JP(t,ZP())?new Proxy(t,Kf):t)}function Br(t){if(t instanceof IDBRequest)return tx(t);if(yd.has(t))return yd.get(t);const e=sx(t);return e!==t&&(yd.set(t,e),Lm.set(e,t)),e}const vd=t=>Lm.get(t);function ox(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Br(o.result),l.oldVersion,l.newVersion,Br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ax=["get","getKey","getAll","getAllKeys","count"],lx=["put","add","delete","clear"],_d=new Map;function Xv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ax.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _d.set(e,s),s}rx(t=>({...t,get:(e,n,r)=>Xv(e,n)||t.get(e,n,r),has:(e,n)=>!!Xv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",Jv="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Om("@firebase/app"),hx="@firebase/app-compat",dx="@firebase/analytics-compat",fx="@firebase/analytics",px="@firebase/app-check-compat",mx="@firebase/app-check",gx="@firebase/auth",yx="@firebase/auth-compat",vx="@firebase/database",_x="@firebase/database-compat",wx="@firebase/functions",Ex="@firebase/functions-compat",Tx="@firebase/installations",Ix="@firebase/installations-compat",Sx="@firebase/messaging",Rx="@firebase/messaging-compat",Ax="@firebase/performance",kx="@firebase/performance-compat",Cx="@firebase/remote-config",Px="@firebase/remote-config-compat",xx="@firebase/storage",Dx="@firebase/storage-compat",Nx="@firebase/firestore",Ox="@firebase/firestore-compat",Lx="firebase",bx="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="[DEFAULT]",Mx={[Gf]:"fire-core",[hx]:"fire-core-compat",[fx]:"fire-analytics",[dx]:"fire-analytics-compat",[mx]:"fire-app-check",[px]:"fire-app-check-compat",[gx]:"fire-auth",[yx]:"fire-auth-compat",[vx]:"fire-rtdb",[_x]:"fire-rtdb-compat",[wx]:"fire-fn",[Ex]:"fire-fn-compat",[Tx]:"fire-iid",[Ix]:"fire-iid-compat",[Sx]:"fire-fcm",[Rx]:"fire-fcm-compat",[Ax]:"fire-perf",[kx]:"fire-perf-compat",[Cx]:"fire-rc",[Px]:"fire-rc-compat",[xx]:"fire-gcs",[Dx]:"fire-gcs-compat",[Nx]:"fire-fst",[Ox]:"fire-fst-compat","fire-js":"fire-js",[Lx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new Map,Yf=new Map;function Vx(t,e){try{t.container.addComponent(e)}catch(n){Ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Oi(t){const e=t.name;if(Yf.has(e))return Ni.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,t);for(const n of nc.values())Vx(n,t);return!0}function Gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zr=new nl("app","Firebase",Fx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=bx;function w1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zr.create("bad-app-name",{appName:String(i)});if(n||(n=m1()),!n)throw zr.create("no-options");const s=nc.get(i);if(s){if(tc(n,s.options)&&tc(r,s.config))return s;throw zr.create("duplicate-app",{appName:i})}const o=new KP(i);for(const l of Yf.values())o.addComponent(l);const a=new Ux(n,r,o);return nc.set(i,a),a}function bm(t=Qf){const e=nc.get(t);if(!e&&t===Qf&&m1())return w1();if(!e)throw zr.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let i=(r=Mx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ni.warn(a.join(" "));return}Oi(new Qr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="firebase-heartbeat-database",jx=1,xa="firebase-heartbeat-store";let wd=null;function E1(){return wd||(wd=ox($x,jx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xa)}}}).catch(t=>{throw zr.create("idb-open",{originalErrorMessage:t.message})})),wd}async function Bx(t){try{return await(await E1()).transaction(xa).objectStore(xa).get(T1(t))}catch(e){if(e instanceof Wn)Ni.warn(e.message);else{const n=zr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ni.warn(n.message)}}}async function Zv(t,e){try{const r=(await E1()).transaction(xa,"readwrite");await r.objectStore(xa).put(e,T1(t)),await r.done}catch(n){if(n instanceof Wn)Ni.warn(n.message);else{const r=zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ni.warn(r.message)}}}function T1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=1024,Hx=30*24*60*60*1e3;class Wx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Hx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=e_(),{heartbeatsToSend:n,unsentEntries:r}=qx(this._heartbeatsCache.heartbeats),i=ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e_(){return new Date().toISOString().substring(0,10)}function qx(t,e=zx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),t_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bP()?MP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Bx(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function t_(t){return ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){Oi(new Qr("platform-logger",e=>new ux(e),"PRIVATE")),Oi(new Qr("heartbeat",e=>new Wx(e),"PRIVATE")),Un(Gf,Jv,t),Un(Gf,Jv,"esm2017"),Un("fire-js","")}Gx("");var Qx="firebase",Yx="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(Qx,Yx,"app");var Et=function(){return Et=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Et.apply(this,arguments)};function Mm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Da(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function I1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xx=I1,S1=new nl("auth","Firebase",I1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Om("@firebase/auth");function Jx(t,...e){rc.logLevel<=le.WARN&&rc.warn(`Auth (${zi}): ${t}`,...e)}function yu(t,...e){rc.logLevel<=le.ERROR&&rc.error(`Auth (${zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Vm(t,...e)}function $n(t,...e){return Vm(t,...e)}function R1(t,e,n){const r=Object.assign(Object.assign({},Xx()),{[e]:n});return new nl("auth","Firebase",r).create(e,{appName:t.name})}function Zx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),R1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S1.create(t,...e)}function W(t,e,...n){if(!t)throw Vm(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yu(e),new Error(e)}function hr(t,e){t||nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function e2(){return n_()==="http:"||n_()==="https:"}function n_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e2()||NP()||"connection"in navigator)?navigator.onLine:!0}function n2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=xP()||OP()}get(){return t2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){hr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2=new il(3e4,6e4);function oo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hi(t,e,n,r,i={}){return k1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=rl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),A1.fetch()(C1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function k1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},r2),e);try{const i=new s2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ql(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ql(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ql(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ql(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw R1(t,c,u);un(t,c)}}catch(i){if(i instanceof Wn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function sl(t,e,n,r,i={}){const s=await Hi(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function C1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`}class s2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($n(this.auth,"network-request-failed")),i2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$n(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o2(t,e){return Hi(t,"POST","/v1/accounts:delete",e)}async function a2(t,e){return Hi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l2(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Um(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ra(Ed(i.auth_time)),issuedAtTime:ra(Ed(i.iat)),expirationTime:ra(Ed(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ed(t){return Number(t)*1e3}function Um(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yu("JWT malformed, contained fewer than 3 sections"),null;try{const i=d1(n);return i?JSON.parse(i):(yu("Failed to decode base64 JWT payload"),null)}catch(i){return yu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function u2(t){const e=Um(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&c2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $s(t,a2(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?p2(s.providerUserInfo):[],a=f2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new P1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function d2(t){const e=Oe(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function p2(t){return t.map(e=>{var{providerId:n}=e,r=Mm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e){const n=await k1(t,{},async()=>{const r=rl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=C1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await m2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Na;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Na,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ti{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new P1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l2(this,e)}reload(){return d2(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,o2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:m,isAnonymous:T,providerData:R,stsTokenManager:S}=n;W(y&&S,e,"internal-error");const N=Na.fromJSON(this.name,S);W(typeof y=="string",e,"internal-error"),Tr(h,e.name),Tr(d,e.name),W(typeof m=="boolean",e,"internal-error"),W(typeof T=="boolean",e,"internal-error"),Tr(p,e.name),Tr(v,e.name),Tr(_,e.name),Tr(w,e.name),Tr(g,e.name),Tr(f,e.name);const J=new Ti({uid:y,auth:e,email:d,emailVerified:m,displayName:h,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:N,createdAt:g,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(B=>Object.assign({},B))),w&&(J._redirectEventId=w),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Na;i.updateFromServerResponse(n);const s=new Ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ic(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new Map;function rr(t){hr(t instanceof Function,"Expected a class definition");let e=r_.get(t);return e?(hr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x1.type="NONE";const i_=x1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t,e,n){return`firebase:${t}:${e}:${n}`}class Rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vu(this.userKey,i.apiKey,s),this.fullPersistenceKey=vu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rs(rr(i_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rr(i_);const o=vu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ti._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Rs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(b1(e))return"Blackberry";if(M1(e))return"Webos";if($m(e))return"Safari";if((e.includes("chrome/")||N1(e))&&!e.includes("edge/"))return"Chrome";if(L1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function D1(t=At()){return/firefox\//i.test(t)}function $m(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function N1(t=At()){return/crios\//i.test(t)}function O1(t=At()){return/iemobile/i.test(t)}function L1(t=At()){return/android/i.test(t)}function b1(t=At()){return/blackberry/i.test(t)}function M1(t=At()){return/webos/i.test(t)}function Qc(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g2(t=At()){var e;return Qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function y2(){return LP()&&document.documentMode===10}function V1(t=At()){return Qc(t)||L1(t)||M1(t)||b1(t)||/windows phone/i.test(t)||O1(t)}function v2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t,e=[]){let n;switch(t){case"Browser":n=s_(At());break;case"Worker":n=`${s_(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zi}/${r}`}async function U1(t,e){return Hi(t,"GET","/v2/recaptchaConfig",oo(t,e))}function o_(t){return t!==void 0&&t.enterprise!==void 0}class $1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function j1(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$n("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_2().appendChild(r)})}function w2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const E2="https://www.google.com/recaptcha/enterprise.js?render=",T2="recaptcha-enterprise",I2="NO_RECAPTCHA";class B1{constructor(e){this.type=T2,this.auth=Wi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{U1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new $1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;o_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(I2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&o_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}j1(E2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function sc(t,e,n,r=!1){const i=new B1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.beforeStateQueue=new S2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}async initializeRecaptchaConfig(){const e=await U1(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new $1(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new B1(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Rs.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=F1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Jx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wi(t){return Oe(t)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=jP(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t,e){const n=Gc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tc(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function k2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function C2(t,e,n){const r=Wi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=z1(e),{host:o,port:a}=P2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||x2()}function z1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P2(t){const e=z1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:l_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:l_(o)}}}function l_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function D2(t,e){return Hi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Td(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}async function O2(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends jm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await sc(e,r,"signInWithPassword");return Td(e,i)}else return Td(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await sc(e,r,"signInWithPassword");return Td(e,s)}else return Promise.reject(i)});case"emailLink":return N2(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return D2(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return O2(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="http://localhost";class Li extends jm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Li(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Mm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Li(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,As(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:L2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=rl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M2(t){const e=Uo($o(t)).link,n=e?Uo($o(e)).deep_link_id:null,r=Uo($o(t)).deep_link_id;return(r?Uo($o(r)).link:null)||r||n||e||t}class Bm{constructor(e){var n,r,i,s,o,a;const l=Uo($o(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=b2((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=M2(e);try{return new Bm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.providerId=ao.PROVIDER_ID}static credential(e,n){return Oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bm.parseLink(n);return W(r,"argument-error"),Oa._fromEmailAndCode(e,r.code,r.tenantId)}}ao.PROVIDER_ID="password";ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends zm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ol{constructor(){super("facebook.com")}static credential(e){return Li._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Li._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends ol{constructor(){super("github.com")}static credential(e){return Li._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends ol{constructor(){super("twitter.com")}static credential(e,n){return Li._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(t,e){return sl(t,"POST","/v1/accounts:signUp",oo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ti._fromIdTokenResponse(e,r,i),o=u_(r);return new bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=u_(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function u_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends Wn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oc(e,n,r,i)}}function H1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,s,e,r):s})}async function V2(t,e,n=!1){const r=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $s(t,H1(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=Um(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e,n=!1){const r="signIn",i=await H1(t,r,e),s=await bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function U2(t,e){return W1(Wi(t),e)}async function $2(t,e,n){var r;const i=Wi(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await sc(i,s,"signUpPassword");o=Id(i,u)}else o=Id(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await sc(i,s,"signUpPassword");return Id(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await bi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function j2(t,e,n){return U2(Oe(t),ao.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B2(t,e){return Hi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $s(r,B2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function z2(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function H2(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}const ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(){const t=At();return $m(t)||Qc(t)}const q2=1e3,K2=10;class G1 extends K1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=W2()&&v2(),this.fallbackToPolling=V1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);y2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}G1.type="LOCAL";const G2=G1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1 extends K1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Q1.type="SESSION";const Y1=Q1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Yc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Q2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function X2(t){jn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function J2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eD(){return X1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firebaseLocalStorageDb",tD=1,lc="firebaseLocalStorage",Z1="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xc(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function nD(){const t=indexedDB.deleteDatabase(J1);return new al(t).toPromise()}function Jf(){const t=indexedDB.open(J1,tD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(lc,{keyPath:Z1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(lc)?e(r):(r.close(),await nD(),e(await Jf()))})})}async function c_(t,e,n){const r=Xc(t,!0).put({[Z1]:e,value:n});return new al(r).toPromise()}async function rD(t,e){const n=Xc(t,!1).get(e),r=await new al(n).toPromise();return r===void 0?null:r.value}function h_(t,e){const n=Xc(t,!0).delete(e);return new al(n).toPromise()}const iD=800,sD=3;class eT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return X1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yc._getInstance(eD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await J2(),!this.activeServiceWorker)return;this.sender=new Y2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jf();return await c_(e,ac,"1"),await h_(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>c_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>h_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xc(i,!1).getAll();return new al(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eT.type="LOCAL";const oD=eT;new il(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e){return e?rr(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends jm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aD(t){return W1(t.auth,new Wm(t),t.bypassAuthState)}function lD(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),F2(n,new Wm(t),t.bypassAuthState)}async function uD(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),V2(n,new Wm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aD;case"linkViaPopup":case"linkViaRedirect":return uD;case"reauthViaPopup":case"reauthViaRedirect":return lD;default:un(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=new il(2e3,1e4);async function rT(t,e,n){const r=Wi(t);Zx(t,e,zm);const i=tT(r,n);return new mi(r,"signInViaPopup",e,i).executeNotNull()}class mi extends nT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cD.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="pendingRedirect",_u=new Map;class dD extends nT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const r=await fD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fD(t,e){const n=gD(e),r=mD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pD(t,e){_u.set(t._key(),e)}function mD(t){return rr(t._redirectPersistence)}function gD(t){return vu(hD,t.config.apiKey,t.name)}async function yD(t,e,n=!1){const r=Wi(t),i=tT(r,e),o=await new dD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=10*60*1e3;class _D{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!iT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($n(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vD&&this.cachedEventUids.clear(),this.cachedEventUids.has(d_(e))}saveEventToCache(e){this.cachedEventUids.add(d_(e)),this.lastProcessedEventTime=Date.now()}}function d_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ED(t,e={}){return Hi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ID=/^https?/;async function SD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ED(t);for(const n of e)try{if(RD(n))return}catch{}un(t,"unauthorized-domain")}function RD(t){const e=Xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ID.test(n))return!1;if(TD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new il(3e4,6e4);function f_(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kD(t){return new Promise((e,n)=>{var r,i,s;function o(){f_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f_(),n($n(t,"network-request-failed"))},timeout:AD.get()})}if(!((i=(r=jn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=jn().gapi)===null||s===void 0)&&s.load)o();else{const a=w2("iframefcb");return jn()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},j1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wu=null,e})}let wu=null;function CD(t){return wu=wu||kD(t),wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=new il(5e3,15e3),xD="__/auth/iframe",DD="emulator/auth/iframe",ND={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LD(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,DD):`https://${t.config.authDomain}/${xD}`,r={apiKey:e.apiKey,appName:t.name,v:zi},i=OD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${rl(r).slice(1)}`}async function bD(t){const e=await CD(t),n=jn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:LD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ND,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=jn().setTimeout(()=>{s(o)},PD.get());function l(){jn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VD=500,FD=600,UD="_blank",$D="http://localhost";class p_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jD(t,e,n,r=VD,i=FD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();n&&(a=N1(u)?UD:n),D1(u)&&(e=e||$D,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(g2(u)&&a!=="_self")return BD(e||"",a),new p_(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new p_(h)}function BD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD="__/auth/handler",HD="emulator/auth/handler",WD=encodeURIComponent("fac");async function m_(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zi,eventId:i};if(e instanceof zm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$P(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ol){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${WD}=${encodeURIComponent(l)}`:"";return`${qD(t)}?${rl(a).slice(1)}${u}`}function qD({config:t}){return t.emulator?Fm(t,HD):`https://${t.authDomain}/${zD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="webStorageSupport";class KD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Y1,this._completeRedirectFn=yD,this._overrideRedirectResult=pD}async _openPopup(e,n,r,i){var s;hr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await m_(e,n,r,Xf(),i);return jD(e,o,Hm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await m_(e,n,r,Xf(),i);return X2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(hr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bD(e),r=new _D(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sd,{type:Sd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Sd];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return V1()||$m()||Qc()}}const GD=KD;var g_="@firebase/auth",y_="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XD(t){Oi(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:F1(t)},u=new R2(r,i,s,l);return k2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Oi(new Qr("auth-internal",e=>{const n=Wi(e.getProvider("auth").getImmediate());return(r=>new QD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(g_,y_,YD(t)),Un(g_,y_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=5*60,ZD=g1("authIdTokenMaxAge")||JD;let v_=null;const eN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZD)return;const i=n==null?void 0:n.token;v_!==i&&(v_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tN(t=bm()){const e=Gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A2(t,{popupRedirectResolver:GD,persistence:[oD,G2,Y1]}),r=g1("authTokenSyncURL");if(r){const s=eN(r);H2(n,s,()=>s(n.currentUser)),z2(n,o=>s(o))}const i=f1("auth");return i&&C2(n,`http://${i}`),n}XD("Browser");var nN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,qm=qm||{},G=nN||self;function Jc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ll(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function rN(t){return Object.prototype.hasOwnProperty.call(t,Rd)&&t[Rd]||(t[Rd]=++iN)}var Rd="closure_uid_"+(1e9*Math.random()>>>0),iN=0;function sN(t,e,n){return t.call.apply(t.bind,arguments)}function oN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Tt=sN:Tt=oN,Tt.apply(null,arguments)}function Kl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function it(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ri(){this.s=this.s,this.o=this.o}var aN=0;ri.prototype.s=!1;ri.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),aN!=0)&&rN(this)};ri.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Km(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function __(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var lN=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function La(t){return/^[\s\xa0]*$/.test(t)}function Zc(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Zc().indexOf(t)!=-1}function Gm(t){return Gm[" "](t),t}Gm[" "]=function(){};function uN(t,e){var n=tO;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var cN=Nn("Opera"),js=Nn("Trident")||Nn("MSIE"),oT=Nn("Edge"),Zf=oT||js,aT=Nn("Gecko")&&!(Zc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),hN=Zc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function lT(){var t=G.document;return t?t.documentMode:void 0}var ep;e:{var Ad="",kd=function(){var t=Zc();if(aT)return/rv:([^\);]+)(\)|;)/.exec(t);if(oT)return/Edge\/([\d\.]+)/.exec(t);if(js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hN)return/WebKit\/(\S+)/.exec(t);if(cN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kd&&(Ad=kd?kd[1]:""),js){var Cd=lT();if(Cd!=null&&Cd>parseFloat(Ad)){ep=String(Cd);break e}}ep=Ad}var tp;if(G.document&&js){var w_=lT();tp=w_||parseInt(ep,10)||void 0}else tp=void 0;var dN=tp;function ba(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(aT){e:{try{Gm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:fN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ba.$.h.call(this)}}it(ba,It);var fN={2:"touch",3:"pen",4:"mouse"};ba.prototype.h=function(){ba.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ul="closure_listenable_"+(1e6*Math.random()|0),pN=0;function mN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++pN,this.fa=this.ia=!1}function eh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function uT(t){const e={};for(const n in t)e[n]=t[n];return e}const E_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<E_.length;s++)n=E_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function th(t){this.src=t,this.g={},this.h=0}th.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=rp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new mN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function np(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=sT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(eh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function rp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ym="closure_lm_"+(1e6*Math.random()|0),Pd={};function hT(t,e,n,r,i){if(r&&r.once)return fT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)hT(t,e[s],n,r,i);return null}return n=Zm(n),t&&t[ul]?t.O(e,n,ll(r)?!!r.capture:!!r,i):dT(t,e,n,!1,r,i)}function dT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ll(i)?!!i.capture:!!i,a=Jm(t);if(a||(t[Ym]=a=new th(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(mT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yN(){function t(n){return e.call(t.src,t.listener,n)}const e=vN;return t}function fT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)fT(t,e[s],n,r,i);return null}return n=Zm(n),t&&t[ul]?t.P(e,n,ll(r)?!!r.capture:!!r,i):dT(t,e,n,!0,r,i)}function pT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pT(t,e[s],n,r,i);else r=ll(r)?!!r.capture:!!r,n=Zm(n),t&&t[ul]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=rp(s,n,r,i),-1<n&&(eh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Jm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=rp(e,n,r,i)),(n=-1<t?e[t]:null)&&Xm(n))}function Xm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ul])np(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(mT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Jm(e))?(np(n,t),n.h==0&&(n.src=null,e[Ym]=null)):eh(t)}}}function mT(t){return t in Pd?Pd[t]:Pd[t]="on"+t}function vN(t,e){if(t.fa)t=!0;else{e=new ba(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xm(t),t=n.call(r,e)}return t}function Jm(t){return t=t[Ym],t instanceof th?t:null}var xd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zm(t){return typeof t=="function"?t:(t[xd]||(t[xd]=function(e){return t.handleEvent(e)}),t[xd])}function rt(){ri.call(this),this.i=new th(this),this.S=this,this.J=null}it(rt,ri);rt.prototype[ul]=!0;rt.prototype.removeEventListener=function(t,e,n,r){pT(this,t,e,n,r)};function ct(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(r,t),cT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Gl(o,r,!0,e)&&i}if(o=e.g=t,i=Gl(o,r,!0,e)&&i,i=Gl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Gl(o,r,!1,e)&&i}rt.prototype.N=function(){if(rt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)eh(n[r]);delete t.g[e],t.h--}}this.J=null};rt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};rt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Gl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&np(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var eg=G.JSON.stringify;class _N{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wN(){var t=tg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EN{constructor(){this.h=this.g=null}add(e,n){const r=gT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var gT=new _N(()=>new TN,t=>t.reset());class TN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function SN(t){G.setTimeout(()=>{throw t},0)}let Ma,Va=!1,tg=new EN,yT=()=>{const t=G.Promise.resolve(void 0);Ma=()=>{t.then(RN)}};var RN=()=>{for(var t;t=wN();){try{t.h.call(t.g)}catch(n){SN(n)}var e=gT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Va=!1};function nh(t,e){rt.call(this),this.h=t||1,this.g=e||G,this.j=Tt(this.qb,this),this.l=Date.now()}it(nh,rt);L=nh.prototype;L.ga=!1;L.T=null;L.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ct(this,"tick"),this.ga&&(ng(this),this.start()))}};L.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ng(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}L.N=function(){nh.$.N.call(this),ng(this),delete this.g};function rg(t,e,n){if(typeof t=="function")n&&(t=Tt(t,n));else if(t&&typeof t.handleEvent=="function")t=Tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function vT(t){t.g=rg(()=>{t.g=null,t.i&&(t.i=!1,vT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AN extends ri{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vT(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fa(t){ri.call(this),this.h=t,this.g={}}it(Fa,ri);var T_=[];function _T(t,e,n,r){Array.isArray(n)||(n&&(T_[0]=n.toString()),n=T_);for(var i=0;i<n.length;i++){var s=hT(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function wT(t){Qm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xm(e)},t),t.g={}}Fa.prototype.N=function(){Fa.$.N.call(this),wT(this)};Fa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rh(){this.g=!0}rh.prototype.Ea=function(){this.g=!1};function kN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function CN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function gs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xN(t,n)+(r?" "+r:"")})}function PN(t,e){t.info(function(){return"TIMEOUT: "+e})}rh.prototype.info=function(){};function xN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return eg(n)}catch{return e}}var qi={},I_=null;function ih(){return I_=I_||new rt}qi.Ta="serverreachability";function ET(t){It.call(this,qi.Ta,t)}it(ET,It);function Ua(t){const e=ih();ct(e,new ET(e))}qi.STAT_EVENT="statevent";function TT(t,e){It.call(this,qi.STAT_EVENT,t),this.stat=e}it(TT,It);function xt(t){const e=ih();ct(e,new TT(e,t))}qi.Ua="timingevent";function IT(t,e){It.call(this,qi.Ua,t),this.size=e}it(IT,It);function cl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var sh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ST={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ig(){}ig.prototype.h=null;function S_(t){return t.h||(t.h=t.i())}function RT(){}var hl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function sg(){It.call(this,"d")}it(sg,It);function og(){It.call(this,"c")}it(og,It);var ip;function oh(){}it(oh,ig);oh.prototype.g=function(){return new XMLHttpRequest};oh.prototype.i=function(){return{}};ip=new oh;function dl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Fa(this),this.P=DN,t=Zf?125:void 0,this.V=new nh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new AT}function AT(){this.i=null,this.g="",this.h=!1}var DN=45e3,sp={},uc={};L=dl.prototype;L.setTimeout=function(t){this.P=t};function op(t,e,n){t.L=1,t.v=lh(dr(e)),t.s=n,t.S=!0,kT(t,null)}function kT(t,e){t.G=Date.now(),fl(t),t.A=dr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),bT(n.i,"t",r),t.C=0,n=t.l.J,t.h=new AT,t.g=nI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new AN(Tt(t.Pa,t,t.g),t.O)),_T(t.U,t.g,"readystatechange",t.nb),e=t.I?uT(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Ua(),kN(t.j,t.u,t.A,t.m,t.W,t.s)}L.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};L.Pa=function(t){try{if(t==this.g)e:{const c=Ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Zf||this.g&&(this.h.h||this.g.ja()||C_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Ua(3):Ua(2)),ah(this);var n=this.g.da();this.ca=n;t:if(CT(this)){var r=C_(this.g);t="";var i=r.length,s=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gi(this),ia(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,CN(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!La(a)){var u=a;break t}}u=null}if(n=u)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ap(this,n);else{this.i=!1,this.o=3,xt(12),gi(this),ia(this);break e}}this.S?(PT(this,c,o),Zf&&this.i&&c==3&&(_T(this.U,this.V,"tick",this.mb),this.V.start())):(gs(this.j,this.m,o,null),ap(this,o)),c==4&&gi(this),this.i&&!this.J&&(c==4?JT(this.l,this):(this.i=!1,fl(this)))}else JN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),gi(this),ia(this)}}}catch{}finally{}};function CT(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function PT(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=NN(t,n),i==uc){e==4&&(t.o=4,xt(14),r=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==sp){t.o=4,xt(15),gs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gs(t.j,t.m,i,null),ap(t,i);CT(t)&&i!=uc&&i!=sp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dg(e),e.M=!0,xt(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),gi(t),ia(t))}L.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.C<e.length&&(ah(this),PT(this,t,e),this.i&&t!=4&&fl(this))}};function NN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?uc:(n=Number(e.substring(n,r)),isNaN(n)?sp:(r+=1,r+n>e.length?uc:(e=e.slice(r,r+n),t.C=r+n,e)))}L.cancel=function(){this.J=!0,gi(this)};function fl(t){t.Y=Date.now()+t.P,xT(t,t.P)}function xT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=cl(Tt(t.lb,t),e)}function ah(t){t.B&&(G.clearTimeout(t.B),t.B=null)}L.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(PN(this.j,this.A),this.L!=2&&(Ua(),xt(17)),gi(this),this.o=2,ia(this)):xT(this,this.Y-t)};function ia(t){t.l.H==0||t.J||JT(t.l,t)}function gi(t){ah(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,ng(t.V),wT(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ap(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||lp(n.i,t))){if(!t.K&&lp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)dc(n),hh(n);else break e;hg(n),xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cl(Tt(n.ib,n),6e3));if(1>=FT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else yi(n,11)}else if((t.K||n.g==t)&&dc(n),!La(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ag(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Ee(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=tI(r,r.J?r.pa:null,r.Y),o.K){UT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ah(a),fl(a)),r.g=o}else YT(r);0<n.j.length&&dh(n)}else u[0]!="stop"&&u[0]!="close"||yi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?yi(n,7):cg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ua(4)}catch{}}function ON(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Jc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function LN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Jc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function DT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Jc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=LN(t),r=ON(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var NT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ii(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ii){this.h=t.h,cc(this,t.j),this.s=t.s,this.g=t.g,hc(this,t.m),this.l=t.l;var e=t.i,n=new $a;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),R_(this,n),this.o=t.o}else t&&(e=String(t).match(NT))?(this.h=!1,cc(this,e[1]||"",!0),this.s=jo(e[2]||""),this.g=jo(e[3]||"",!0),hc(this,e[4]),this.l=jo(e[5]||"",!0),R_(this,e[6]||"",!0),this.o=jo(e[7]||"")):(this.h=!1,this.i=new $a(null,this.h))}Ii.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bo(e,A_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Bo(e,A_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Bo(n,n.charAt(0)=="/"?FN:VN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bo(n,$N)),t.join("")};function dr(t){return new Ii(t)}function cc(t,e,n){t.j=n?jo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function R_(t,e,n){e instanceof $a?(t.i=e,jN(t.i,t.h)):(n||(e=Bo(e,UN)),t.i=new $a(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function lh(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var A_=/[#\/\?@]/g,VN=/[#\?:]/g,FN=/[#\?]/g,UN=/[#\?@]/g,$N=/#/g;function $a(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ii(t){t.g||(t.g=new Map,t.h=0,t.i&&bN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=$a.prototype;L.add=function(t,e){ii(this),this.i=null,t=lo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function OT(t,e){ii(t),e=lo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function LT(t,e){return ii(t),e=lo(t,e),t.g.has(e)}L.forEach=function(t,e){ii(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.ta=function(){ii(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.Z=function(t){ii(this);let e=[];if(typeof t=="string")LT(this,t)&&(e=e.concat(this.g.get(lo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return ii(this),this.i=null,t=lo(this,t),LT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function bT(t,e,n){OT(t,e),0<n.length&&(t.i=null,t.g.set(lo(t,e),Km(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function lo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jN(t,e){e&&!t.j&&(ii(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(OT(this,r),bT(this,i,n))},t)),t.j=e}var BN=class{constructor(t,e){this.g=t,this.map=e}};function MT(t){this.l=t||zN,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zN=10;function VT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function FT(t){return t.h?1:t.g?t.g.size:0}function lp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ag(t,e){t.g?t.g.add(e):t.h=e}function UT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}MT.prototype.cancel=function(){if(this.i=$T(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $T(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Km(t.i)}var HN=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function WN(){this.g=new HN}function qN(t,e,n){const r=n||"";try{DT(t,function(i,s){let o=i;ll(i)&&(o=eg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KN(t,e){const n=new rh;if(G.Image){const r=new Image;r.onload=Kl(Ql,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Kl(Ql,n,r,"TestLoadImage: error",!1,e),r.onabort=Kl(Ql,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Kl(Ql,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ql(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function pl(t){this.l=t.fc||null,this.j=t.ob||!1}it(pl,ig);pl.prototype.g=function(){return new uh(this.l,this.j)};pl.prototype.i=function(t){return function(){return t}}({});function uh(t,e){rt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=lg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}it(uh,rt);var lg=0;L=uh.prototype;L.open=function(t,e){if(this.readyState!=lg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ja(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ml(this)),this.readyState=lg};L.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ja(this)),this.g&&(this.readyState=3,ja(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function jT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}L.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ml(this):ja(this),this.readyState==3&&jT(this)}};L.Za=function(t){this.g&&(this.response=this.responseText=t,ml(this))};L.Ya=function(t){this.g&&(this.response=t,ml(this))};L.ka=function(){this.g&&ml(this)};function ml(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ja(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ja(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(uh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GN=G.JSON.parse;function Le(t){rt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=BT,this.L=this.M=!1}it(Le,rt);var BT="",QN=/^https?$/i,YN=["POST","PUT"];L=Le.prototype;L.Oa=function(t){this.M=t};L.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ip.g(),this.C=this.u?S_(this.u):S_(ip),this.g.onreadystatechange=Tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){k_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=sT(YN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{WT(this),0<this.B&&((this.L=XN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tt(this.ua,this)):this.A=rg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){k_(this,s)}};function XN(t){return js&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.ua=function(){typeof qm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function k_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zT(t),ch(t)}function zT(t){t.F||(t.F=!0,ct(t,"complete"),ct(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),ch(this))};L.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ch(this,!0)),Le.$.N.call(this)};L.La=function(){this.s||(this.G||this.v||this.l?HT(this):this.kb())};L.kb=function(){HT(this)};function HT(t){if(t.h&&typeof qm<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)rg(t.La,0,t);else if(ct(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(NT)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!QN.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var s=2<Ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",zT(t)}}finally{ch(t)}}}}function ch(t,e){if(t.g){WT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function WT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}L.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}L.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};L.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GN(e)}};function C_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case BT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function JN(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(La(t[r]))continue;var n=IN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}gN(e,function(r){return r.join(", ")})}L.Ia=function(){return this.m};L.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qT(t){let e="";return Qm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ug(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Do(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function KT(t){this.Ga=0,this.j=[],this.l=new rh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Do("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Do("baseRetryDelayMs",5e3,t),this.hb=Do("retryDelaySeedMs",1e4,t),this.eb=Do("forwardChannelMaxRetries",2,t),this.xa=Do("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new MT(t&&t.concurrentRequestLimit),this.Ja=new WN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}L=KT.prototype;L.ra=8;L.H=1;function cg(t){if(GT(t),t.H==3){var e=t.W++,n=dr(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),gl(t,n),e=new dl(t,t.l,e),e.L=2,e.v=lh(dr(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=nI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fl(e)}eI(t)}function hh(t){t.g&&(dg(t),t.g.cancel(),t.g=null)}function GT(t){hh(t),t.u&&(G.clearTimeout(t.u),t.u=null),dc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function dh(t){if(!VT(t.i)&&!t.m){t.m=!0;var e=t.Na;Ma||yT(),Va||(Ma(),Va=!0),tg.add(e,t),t.C=0}}function ZN(t,e){return FT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=cl(Tt(t.Na,t,e),ZT(t,t.C)),t.C++,!0)}L.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new dl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=uT(s),cT(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=QT(this,i,e),n=dr(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),gl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(qT(s)))+"&"+e:this.o&&ug(n,this.o,s)),ag(this.i,i),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),i.aa=!0,op(i,n,null)):op(i,n,e),this.H=2}}else this.H==3&&(t?P_(this,t):this.j.length==0||VT(this.i)||P_(this))};function P_(t,e){var n;e?n=e.m:n=t.W++;const r=dr(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),gl(t,r),t.o&&t.s&&ug(r,t.o,t.s),n=new dl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=QT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ag(t.i,n),op(n,r,e)}function gl(t,e){t.na&&Qm(t.na,function(n,r){Ee(e,r,n)}),t.h&&DT({},function(n,r){Ee(e,r,n)})}function QT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{qN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function YT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ma||yT(),Va||(Ma(),Va=!0),tg.add(e,t),t.A=0}}function hg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=cl(Tt(t.Ma,t),ZT(t,t.A)),t.A++,!0)}L.Ma=function(){if(this.u=null,XT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=cl(Tt(this.jb,this),t)}};L.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,xt(10),hh(this),XT(this))};function dg(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function XT(t){t.g=new dl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=dr(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),gl(t,e),t.o&&t.s&&ug(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=lh(dr(e)),n.s=null,n.S=!0,kT(n,t)}L.ib=function(){this.v!=null&&(this.v=null,hh(this),hg(this),xt(19))};function dc(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function JT(t,e){var n=null;if(t.g==e){dc(t),dg(t),t.g=null;var r=2}else if(lp(t.i,e))n=e.F,UT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=ih(),ct(r,new IT(r,n)),dh(t)}else YT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&ZN(t,e)||r==2&&hg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:yi(t,5);break;case 4:yi(t,10);break;case 3:yi(t,6);break;default:yi(t,2)}}}function ZT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function yi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Tt(t.pb,t);n||(n=new Ii("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||cc(n,"https"),lh(n)),KN(n.toString(),r)}else xt(2);t.H=0,t.h&&t.h.za(e),eI(t),GT(t)}L.pb=function(t){t?(this.l.info("Successfully pinged google.com"),xt(2)):(this.l.info("Failed to ping google.com"),xt(1))};function eI(t){if(t.H=0,t.ma=[],t.h){const e=$T(t.i);(e.length!=0||t.j.length!=0)&&(__(t.ma,e),__(t.ma,t.j),t.i.i.length=0,Km(t.j),t.j.length=0),t.h.ya()}}function tI(t,e,n){var r=n instanceof Ii?dr(n):new Ii(n);if(r.g!="")e&&(r.g=e+"."+r.g),hc(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ii(null);r&&cc(s,r),e&&(s.g=e),i&&hc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),gl(t,r),r}function nI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new pl({ob:!0})):new Le(t.va),e.Oa(t.J),e}L.isActive=function(){return!!this.h&&this.h.isActive(this)};function rI(){}L=rI.prototype;L.Ba=function(){};L.Aa=function(){};L.za=function(){};L.ya=function(){};L.isActive=function(){return!0};L.Va=function(){};function fc(){if(js&&!(10<=Number(dN)))throw Error("Environmental error: no available transport.")}fc.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){rt.call(this),this.g=new KT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!La(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!La(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new uo(this)}it(Qt,rt);Qt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=tI(t,null,t.Y),dh(t)};Qt.prototype.close=function(){cg(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eg(t),t=n);e.j.push(new BN(e.fb++,t)),e.H==3&&dh(e)};Qt.prototype.N=function(){this.g.h=null,delete this.j,cg(this.g),delete this.g,Qt.$.N.call(this)};function iI(t){sg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}it(iI,sg);function sI(){og.call(this),this.status=1}it(sI,og);function uo(t){this.g=t}it(uo,rI);uo.prototype.Ba=function(){ct(this.g,"a")};uo.prototype.Aa=function(t){ct(this.g,new iI(t))};uo.prototype.za=function(t){ct(this.g,new sI)};uo.prototype.ya=function(){ct(this.g,"b")};function eO(){this.blockSize=-1}function In(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}it(In,eO);In.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Dd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}In.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Dd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Dd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Dd(this,r),i=0;break}}this.h=i,this.i+=e};In.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var tO={};function fg(t){return-128<=t&&128>t?uN(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function bn(t){if(isNaN(t)||!isFinite(t))return ks;if(0>t)return lt(bn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=up;return new de(e,0)}function oI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(oI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=bn(Math.pow(e,8)),r=ks,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=bn(Math.pow(e,s)),r=r.R(s).add(bn(o))):(r=r.R(n),r=r.add(bn(o)))}return r}var up=4294967296,ks=fg(0),cp=fg(1),x_=fg(16777216);L=de.prototype;L.ea=function(){if(rn(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:up+r)*e,e*=up}return t};L.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ir(this))return"0";if(rn(this))return"-"+lt(this).toString(t);for(var e=bn(Math.pow(t,6)),n=this,r="";;){var i=mc(n,e).g;n=pc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ir(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};L.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ir(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function rn(t){return t.h==-1}L.X=function(t){return t=pc(this,t),rn(t)?-1:ir(t)?0:1};function lt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(cp)}L.abs=function(){return rn(this)?lt(this):this};L.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new de(n,n[n.length-1]&-2147483648?-1:0)};function pc(t,e){return t.add(lt(e))}L.R=function(t){if(ir(this)||ir(t))return ks;if(rn(this))return rn(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(rn(t))return lt(this.R(lt(t)));if(0>this.X(x_)&&0>t.X(x_))return bn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Yl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Yl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Yl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Yl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function Yl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function No(t,e){this.g=t,this.h=e}function mc(t,e){if(ir(e))throw Error("division by zero");if(ir(t))return new No(ks,ks);if(rn(t))return e=mc(lt(t),e),new No(lt(e.g),lt(e.h));if(rn(e))return e=mc(t,lt(e)),new No(lt(e.g),e.h);if(30<t.g.length){if(rn(t)||rn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=cp,r=e;0>=r.X(t);)n=D_(n),r=D_(r);var i=Xi(n,1),s=Xi(r,1);for(r=Xi(r,2),n=Xi(n,2);!ir(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Xi(r,1),n=Xi(n,1)}return e=pc(t,i.R(e)),new No(i,e)}for(i=ks;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=bn(n),o=s.R(e);rn(o)||0<o.X(t);)n-=r,s=bn(n),o=s.R(e);ir(s)&&(s=cp),i=i.add(s),t=pc(t,o)}return new No(i,t)}L.gb=function(t){return mc(this,t).h};L.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};L.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};L.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function D_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function Xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new de(i,t.h)}fc.prototype.createWebChannel=fc.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;sh.NO_ERROR=0;sh.TIMEOUT=8;sh.HTTP_ERROR=6;ST.COMPLETE="complete";RT.EventType=hl;hl.OPEN="a";hl.CLOSE="b";hl.ERROR="c";hl.MESSAGE="d";rt.prototype.listen=rt.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;In.prototype.digest=In.prototype.l;In.prototype.reset=In.prototype.reset;In.prototype.update=In.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=bn;de.fromString=oI;var nO=function(){return new fc},rO=function(){return ih()},Nd=sh,iO=ST,sO=qi,N_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},oO=pl,Xl=RT,aO=Le,lO=In,Cs=de;const O_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new Om("@firebase/firestore");function L_(){return Mi.logLevel}function F(t,...e){if(Mi.logLevel<=le.DEBUG){const n=e.map(pg);Mi.debug(`Firestore (${co}): ${t}`,...n)}}function fr(t,...e){if(Mi.logLevel<=le.ERROR){const n=e.map(pg);Mi.error(`Firestore (${co}): ${t}`,...n)}}function Bs(t,...e){if(Mi.logLevel<=le.WARN){const n=e.map(pg);Mi.warn(`Firestore (${co}): ${t}`,...n)}}function pg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${co}) INTERNAL ASSERTION FAILED: `+t;throw fr(e),new Error(e)}function Se(t,e){t||q()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class cO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hO{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new aI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new yt(e)}}class dO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new pO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new b(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Xe(0,0))}static max(){return new Y(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ba.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ba?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ba{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new b(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const yO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Ba{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return yO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new b(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Te.fromString(e))}static fromName(e){return new j(Te.fromString(e).popFirst(5))}static empty(){return new j(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Te(e.slice()))}}function vO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Yr(i,j.empty(),e)}function _O(t){return new Yr(t.readTime,t.key,-1)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(Y.min(),j.empty(),-1)}static max(){return new Yr(Y.max(),j.empty(),-1)}}function wO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==EO)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}mg.ae=-1;function fh(t){return t==null}function gc(t){return t===0&&1/t==-1/0}function IO(t){return typeof t=="number"&&Number.isInteger(t)&&!gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jl(this.root,e,this.comparator,!0)}}class Jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M_(this.data.getIterator())}getIteratorFrom(e){return new M_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new St(this.comparator);return n.data=e,n}}class M_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new St(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cI("Invalid base64 string: "+s):s}}(e);return new kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const SO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=SO.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vi(t){return typeof t=="string"?kt.fromBase64String(t):kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yg(t){const e=t.mapValue.fields.__previous_value__;return gg(e)?yg(e):e}function za(t){const e=Xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ha{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gg(t)?4:AO(t)?9007199254740991:10:q()}function Hn(t,e){if(t===e)return!0;const n=Fi(t);if(n!==Fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return za(t).isEqual(za(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xr(i.timestampValue),a=Xr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vi(i.bytesValue).isEqual(Vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Be(i.geoPointValue.latitude)===Be(s.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Be(i.integerValue)===Be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Be(i.doubleValue),a=Be(s.doubleValue);return o===a?gc(o)===gc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],Hn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(b_(o)!==b_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Hn(o[l],a[l])))return!1;return!0}(t,e);default:return q()}}function Wa(t,e){return(t.values||[]).find(n=>Hn(n,e))!==void 0}function Hs(t,e){if(t===e)return 0;const n=Fi(t),r=Fi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Be(s.integerValue||s.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return V_(t.timestampValue,e.timestampValue);case 4:return V_(za(t),za(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vi(s),l=Vi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ue(a[u],l[u]);if(c!==0)return c}return ue(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ue(Be(s.latitude),Be(o.latitude));return a!==0?a:ue(Be(s.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Hs(a[u],l[u]);if(c)return c}return ue(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Zl.mapValue&&o===Zl.mapValue)return 0;if(s===Zl.mapValue)return 1;if(o===Zl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ue(l[h],c[h]);if(d!==0)return d;const p=Hs(a[l[h]],u[c[h]]);if(p!==0)return p}return ue(l.length,c.length)}(t.mapValue,e.mapValue);default:throw q()}}function V_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Xr(t),r=Xr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function Ws(t){return hp(t)}function hp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=hp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${hp(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function F_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dp(t){return!!t&&"integerValue"in t}function vg(t){return!!t&&"arrayValue"in t}function U_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eu(t){return!!t&&"mapValue"in t}function sa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=sa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=sa(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=sa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Vt(sa(this.value))}}function hI(t){const e=[];return Ki(t.fields,(n,r)=>{const i=new wt([n]);if(Eu(r)){const s=hI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new _t(e,0,Y.min(),Y.min(),Y.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new _t(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new _t(e,2,n,Y.min(),Y.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,Y.min(),Y.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.position=e,this.inclusive=n}}function j_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function B_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n="asc"){this.field=e,this.dir=n}}function kO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{}class We extends dI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PO(e,n,r):n==="array-contains"?new NO(e,r):n==="in"?new OO(e,r):n==="not-in"?new LO(e,r):n==="array-contains-any"?new bO(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xO(e,r):new DO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Hs(n,this.value)):n!==null&&Fi(this.value)===Fi(n)&&this.matchesComparison(Hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Sn extends dI{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Sn(e,n)}matches(e){return fI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fI(t){return t.op==="and"}function pI(t){return CO(t)&&fI(t)}function CO(t){for(const e of t.filters)if(e instanceof Sn)return!1;return!0}function fp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+Ws(t.value);if(pI(t))return t.filters.map(e=>fp(e)).join(",");{const e=t.filters.map(n=>fp(n)).join(",");return`${t.op}(${e})`}}function mI(t,e){return t instanceof We?function(r,i){return i instanceof We&&r.op===i.op&&r.field.isEqual(i.field)&&Hn(r.value,i.value)}(t,e):t instanceof Sn?function(r,i){return i instanceof Sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&mI(o,i.filters[a]),!0):!1}(t,e):void q()}function gI(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${Ws(n.value)}`}(t):t instanceof Sn?function(n){return n.op.toString()+" {"+n.getFilters().map(gI).join(" ,")+"}"}(t):"Filter"}class PO extends We{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class xO extends We{constructor(e,n){super(e,"in",n),this.keys=yI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DO extends We{constructor(e,n){super(e,"not-in",n),this.keys=yI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class NO extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vg(n)&&Wa(n.arrayValue,this.value)}}class OO extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wa(this.value.arrayValue,n)}}class LO extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wa(this.value.arrayValue,n)}}class bO extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function z_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MO(t,e,n,r,i,s,o)}function _g(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>fp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ws(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ws(r)).join(",")),e.he=n}return e.he}function wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!B_(t.startAt,e.startAt)&&B_(t.endAt,e.endAt)}function pp(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function VO(t,e,n,r,i,s,o,a){return new ho(t,e,n,r,i,s,o,a)}function Eg(t){return new ho(t)}function H_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ph(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function vI(t){return t.collectionGroup!==null}function xs(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=ph(e),r=Tg(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Ps(n)),e.Pe.push(new Ps(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Ps(wt.keyField(),s))}}}return e.Pe}function pr(t){const e=Z(t);if(!e.Ie)if(e.limitType==="F")e.Ie=z_(e.path,e.collectionGroup,xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of xs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ps(s.field,o))}const r=e.endAt?new yc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new yc(e.startAt.position,e.startAt.inclusive):null;e.Ie=z_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function mp(t,e){e.getFirstInequalityField(),ph(t);const n=t.filters.concat([e]);return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function vc(t,e,n){return new ho(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mh(t,e){return wg(pr(t),pr(e))&&t.limitType===e.limitType}function _I(t){return`${_g(pr(t))}|lt:${t.limitType}`}function gp(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gI(i)).join(", ")}]`),fh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ws(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ws(i)).join(",")),`Target(${r})`}(pr(t))}; limitType=${t.limitType})`}function gh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=j_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,xs(r),i)||r.endAt&&!function(o,a,l){const u=j_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,xs(r),i))}(t,e)}function FO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wI(t){return(e,n)=>{let r=!1;for(const i of xs(t)){const s=UO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function UO(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Hs(l,u):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=new De(j.comparator);function mr(){return $O}const EI=new De(j.comparator);function zo(...t){let e=EI;for(const n of t)e=e.insert(n.key,n);return e}function TI(t){let e=EI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vi(){return oa()}function II(){return oa()}function oa(){return new fo(t=>t.toString(),(t,e)=>t.isEqual(e))}const jO=new De(j.comparator),BO=new St(j.comparator);function re(...t){let e=BO;for(const n of t)e=e.add(n);return e}const zO=new St(ue);function HO(){return zO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gc(e)?"-0":e}}function RI(t){return{integerValue:""+t}}function WO(t,e){return IO(e)?RI(e):SI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this._=void 0}}function qO(t,e,n){return t instanceof _c?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gg(s)&&(s=yg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof qa?kI(t,e):t instanceof Ka?CI(t,e):function(i,s){const o=AI(i,s),a=W_(o)+W_(i.Te);return dp(o)&&dp(i.Te)?RI(a):SI(i.serializer,a)}(t,e)}function KO(t,e,n){return t instanceof qa?kI(t,e):t instanceof Ka?CI(t,e):n}function AI(t,e){return t instanceof wc?function(r){return dp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _c extends yh{}class qa extends yh{constructor(e){super(),this.elements=e}}function kI(t,e){const n=PI(e);for(const r of t.elements)n.some(i=>Hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ka extends yh{constructor(e){super(),this.elements=e}}function CI(t,e){let n=PI(e);for(const r of t.elements)n=n.filter(i=>!Hn(i,r));return{arrayValue:{values:n}}}class wc extends yh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function W_(t){return Be(t.integerValue||t.doubleValue)}function PI(t){return vg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qa&&i instanceof qa||r instanceof Ka&&i instanceof Ka?zs(r.elements,i.elements,Hn):r instanceof wc&&i instanceof wc?Hn(r.Te,i.Te):r instanceof _c&&i instanceof _c}(t.transform,e.transform)}class QO{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class vh{}function xI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ig(t.key,wn.none()):new _l(t.key,t.data,wn.none());{const n=t.data,r=Vt.empty();let i=new St(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new si(t.key,r,new Wt(i.toArray()),wn.none())}}function YO(t,e,n){t instanceof _l?function(i,s,o){const a=i.value.clone(),l=K_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof si?function(i,s,o){if(!Tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=K_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(DI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function aa(t,e,n,r){return t instanceof _l?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=s.value.clone(),c=G_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof si?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const u=G_(s.fieldTransforms,l,o),c=o.data;return c.setAll(DI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=AI(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function q_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zs(r,i,(s,o)=>GO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _l extends vh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class si extends vh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function K_(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,KO(o,a,n[i]))}return r}function G_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qO(s,o,e))}return r}class Ig extends vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class JO extends vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&YO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=II();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=xI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>q_(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>q_(n,r))}}class Sg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return jO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,se;function nL(t){switch(t){default:return q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function NI(t){if(t===void 0)return fr("GRPC error has no .code"),A.UNKNOWN;switch(t){case $e.OK:return A.OK;case $e.CANCELLED:return A.CANCELLED;case $e.UNKNOWN:return A.UNKNOWN;case $e.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case $e.INTERNAL:return A.INTERNAL;case $e.UNAVAILABLE:return A.UNAVAILABLE;case $e.UNAUTHENTICATED:return A.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case $e.NOT_FOUND:return A.NOT_FOUND;case $e.ALREADY_EXISTS:return A.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return A.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case $e.ABORTED:return A.ABORTED;case $e.OUT_OF_RANGE:return A.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return A.UNIMPLEMENTED;case $e.DATA_LOSS:return A.DATA_LOSS;default:return q()}}(se=$e||($e={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return eu}static getOrCreateInstance(){return eu===null&&(eu=new Rg),eu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let eu=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iL=new Cs([4294967295,4294967295],0);function Q_(t){const e=rL().encode(t),n=new lO;return n.update(e),new Uint8Array(n.digest())}function Y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cs([n,r],0),new Cs([i,s],0)]}class Ag{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(r<0)throw new Ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Cs.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Cs.fromNumber(r)));return i.compare(iL)===1&&(i=new Cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=Q_(e),[r,i]=Y_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ag(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=Q_(e),[r,i]=Y_(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _h(Y.min(),i,new De(ue),mr(),re())}}class wl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wl(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class OI{constructor(e,n){this.targetId=e,this.pe=n}}class LI{constructor(e,n,r=kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class X_{constructor(){this.ye=0,this.we=Z_(),this.Se=kt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=re(),n=re(),r=re();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new wl(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=Z_()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class sL{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=mr(),this.$e=J_(),this.Ue=new De(ue)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(pp(a))if(s===0){const l=new j(a.path);this.ze(i,l,_t.newNoDocument(l,Y.min()))}else Se(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=Rg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,p,v){var _,w,g,f,y,m;const T={localCacheCount:p,existenceFilterCount:v.count},R=v.unchangedNames;return R&&(T.bloomFilter={applied:h===0,hashCount:(_=R==null?void 0:R.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(g=(w=R==null?void 0:R.bits)===null||w===void 0?void 0:w.bitmap)===null||g===void 0?void 0:g.length)!==null&&f!==void 0?f:0,padding:(m=(y=R==null?void 0:R.bits)===null||y===void 0?void 0:y.padding)!==null&&m!==void 0?m:0},d&&(T.bloomFilter.mightContain=d)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Vi(s).toUint8Array()}catch(h){if(h instanceof cI)return Bs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new Ag(l,o,a)}catch(h){return Bs(h instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&pp(a.target)){const l=new j(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,_t.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=re();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new _h(e,n,this.Ue,this.Ke,r);return this.Ke=mr(),this.$e=J_(),this.Ue=new De(ue),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new X_,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new St(ue),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new X_),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function J_(){return new De(j.comparator)}function Z_(){return new De(j.comparator)}const oL=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aL=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),lL=(()=>({and:"AND",or:"OR"}))();class uL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yp(t,e){return t.useProto3Json||fh(e)?e:{value:e}}function Ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function cL(t,e){return Ec(t,e.toTimestamp())}function Bn(t){return Se(!!t),Y.fromTimestamp(function(n){const r=Xr(n);return new Xe(r.seconds,r.nanos)}(t))}function kg(t,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function MI(t){const e=Te.fromString(t);return Se($I(e)),e}function vp(t,e){return kg(t.databaseId,e.path)}function Od(t,e){const n=MI(e);if(n.get(1)!==t.databaseId.projectId)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(VI(n))}function _p(t,e){return kg(t.databaseId,e)}function hL(t){const e=MI(t);return e.length===4?Te.emptyPath():VI(e)}function wp(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VI(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function e0(t,e,n){return{name:vp(t,e),fields:n.value.mapValue.fields}}function dL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Se(c===void 0||typeof c=="string"),kt.fromBase64String(c||"")):(Se(c===void 0||c instanceof Uint8Array),kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:NI(u.code);return new b(c,u.message||"")}(o);n=new LI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Od(t,r.document.name),s=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):Y.min(),a=new Vt({mapValue:{fields:r.document.fields}}),l=_t.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Iu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Od(t,r.document),s=r.readTime?Bn(r.readTime):Y.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Iu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Od(t,r.document),s=r.removedTargetIds||[];n=new Iu([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tL(i,s),a=r.targetId;n=new OI(a,o)}}return n}function fL(t,e){let n;if(e instanceof _l)n={update:e0(t,e.key,e.value)};else if(e instanceof Ig)n={delete:vp(t,e.key)};else if(e instanceof si)n={update:e0(t,e.key,e.data),updateMask:TL(e.fieldMask)};else{if(!(e instanceof JO))return q();n={verify:vp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _c)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ka)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wc)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:cL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function pL(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Bn(i.updateTime):Bn(s);return o.isEqual(Y.min())&&(o=Bn(s)),new QO(o,i.transformResults||[])}(n,e))):[]}function mL(t,e){return{documents:[_p(t,e.path)]}}function gL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_p(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_p(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return UI(Sn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:es(h.field),direction:_L(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=yp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function yL(t){let e=hL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=FI(h);return d instanceof Sn&&pI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ps(ts(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,fh(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new yc(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new yc(p,d)}(n.endAt)),VO(e,i,o,s,a,"F",l,u)}function vL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function FI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ts(n.unaryFilter.field);return We.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ts(n.unaryFilter.field);return We.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sn.create(n.compositeFilter.filters.map(r=>FI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function _L(t){return oL[t]}function wL(t){return aL[t]}function EL(t){return lL[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return wt.fromServerFormat(t.fieldPath)}function UI(t){return t instanceof We?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(U_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(U_(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:wL(n.op),value:n.value}}}(t):t instanceof Sn?function(n){const r=n.getFilters().map(i=>UI(i));return r.length===1?r[0]:{compositeFilter:{op:EL(n.op),filters:r}}}(t):q()}function TL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $I(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.ct=e}}function SL(t){const e=yL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(){this.sn=new AL}addToCollectionParentIndex(e,n){return this.sn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Yr.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class AL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new St(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new St(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new qs(0)}static On(){return new qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(){this.changes=new fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&aa(r.mutation,i,Wt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=zo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=mr();const o=oa(),a=function(){return oa()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof si)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),aa(c.mutation,u,c.mutation.getFieldMask(),Xe.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new CL(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=oa();let i=new De((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=II();c.forEach(d=>{if(!s.has(d)){const p=xI(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(vi());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:TI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=zo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=zo();return this.indexManager.getCollectionParents(e,i).next(o=>D.forEach(o,a=>{const l=function(c,h){return new ho(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,_t.newInvalidDocument(u)))});let o=zo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&aa(u.mutation,l,Wt.empty(),Xe.now()),gh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return D.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Bn(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:SL(i.bundledQuery),readTime:Bn(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(){this.overlays=new De(j.comparator),this.cr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vi();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=vi(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=vi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=vi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eL(n,r));let s=this.cr.get(n);s===void 0&&(s=re(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.lr=new St(Ze.hr),this.Pr=new St(Ze.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new Ze(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new j(new Te([])),r=new Ze(n,e),i=new Ze(n,e+1);let s=re();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ze(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return j.comparator(e.key,n.key)||ue(e.mr,n.mr)}static Ir(e,n){return ue(e.mr,n.mr)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new St(Ze.hr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),i=new Ze(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new St(ue);return n.forEach(i=>{const s=new Ze(i,0),o=new Ze(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),D.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Ze(new j(s),0);let a=new St(ue);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),D.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return D.forEach(n.mutations,i=>{const s=new Ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new Ze(n,0),i=this.pr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e){this.Dr=e,this.docs=function(){return new De(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_t.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=mr();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wO(_O(c),r)<=0||(i.has(c.key)||gh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}vr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LL(this)}getSize(e){return D.resolve(this.size)}}class LL extends kL{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e){this.persistence=e,this.Cr=new fo(n=>_g(n),wg),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Cg,this.targetCount=0,this.Or=qs.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),D.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new qs(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Ln(n),D.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e,n){this.Nr={},this.overlays={},this.Br=new mg(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new bL(this),this.indexManager=new RL,this.remoteDocumentCache=function(i){return new OL(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new IL(n),this.Qr=new xL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new NL(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new VL(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return D.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class VL extends TO{constructor(e){super(),this.currentSequenceNumber=e}}class Pg{constructor(e){this.persistence=e,this.Wr=new Cg,this.Gr=null}static zr(e){return new Pg(e)}get jr(){if(this.Gr)return this.Gr;throw q()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.jr,r=>{const i=j.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return D.or([()=>D.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(H_(n))return D.resolve(null);let r=pr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vc(n,null,"F"),r=pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,vc(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return H_(n)||i.isEqual(Y.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(L_()<=le.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gp(n)),this.ji(e,o,n,vO(i,-1)))})}Gi(e,n){let r=new St(wI(e));return n.forEach((i,s)=>{gh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return L_()<=le.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",gp(n)),this.Ki.getDocumentsMatchingQuery(e,n,Yr.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new De(ue),this.Yi=new fo(s=>_g(s),wg),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PL(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function $L(t,e,n,r){return new UL(t,e,n,r)}async function jI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function jL(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=D.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);Se(w!==null),_.version.compareTo(w)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=re();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function BI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function BL(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(kt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.kr.updateTargetData(s,p))});let l=mr(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zL(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(Y.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function zL(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function HL(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WL(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new Or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Ep(t,e,n){const r=Z(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!vl(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function t0(t,e,n){const r=Z(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=Z(l),d=h.Yi.get(c);return d!==void 0?D.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,pr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(a=>(qL(r,FO(e),a),{documents:a,ss:s})))}function qL(t,e,n){let r=t.Zi.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class n0{constructor(){this.activeTargetIds=HO()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KL{constructor(){this.Hs=new n0,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new n0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=null;function Ld(){return tu===null?tu=function(){return 268435456+Math.round(2147483648*Math.random())}():tu++,"0x"+tu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class XL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Ld(),l=this.mo(n,r);F("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(F("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Bs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+co}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=QL[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=Ld();return new Promise((o,a)=>{const l=new aO;l.setWithCredentials(!0),l.listenOnce(iO.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nd.NO_ERROR:const c=l.getResponseJson();F(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Nd.TIMEOUT:F(gt,`RPC '${e}' ${s} timed out`),a(new b(A.DEADLINE_EXCEEDED,"Request time out"));break;case Nd.HTTP_ERROR:const h=l.getStatus();if(F(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(p.status);a(new b(v,p.message))}else a(new b(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new b(A.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{F(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Ld(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nO(),a=rO(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new oO({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");F(gt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const v=new YL({so:w=>{p?F(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(d||(F(gt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),F(gt,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),_=(w,g,f)=>{w.listen(g,y=>{try{f(y)}catch(m){setTimeout(()=>{throw m},0)}})};return _(h,Xl.EventType.OPEN,()=>{p||F(gt,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Xl.EventType.CLOSE,()=>{p||(p=!0,F(gt,`RPC '${e}' stream ${i} transport closed`),v.Po())}),_(h,Xl.EventType.ERROR,w=>{p||(p=!0,Bs(gt,`RPC '${e}' stream ${i} transport errored:`,w),v.Po(new b(A.UNAVAILABLE,"The operation could not be completed")))}),_(h,Xl.EventType.MESSAGE,w=>{var g;if(!p){const f=w.data[0];Se(!!f);const y=f,m=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(m){F(gt,`RPC '${e}' stream ${i} received error:`,m);const T=m.status;let R=function(J){const B=$e[J];if(B!==void 0)return NI(B)}(T),S=m.message;R===void 0&&(R=A.INTERNAL,S="Unknown error status: "+T+" with message "+m.message),p=!0,v.Po(new b(R,S)),h.close()}else F(gt,`RPC '${e}' stream ${i} received:`,f),v.Io(f)}}),_(a,sO.STAT_EVENT,w=>{w.stat===N_.PROXY?F(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===N_.NOPROXY&&F(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.ho()},0),v}}function bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t){return new uL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new zI(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new b(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JL extends HI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=dL(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Bn(o.readTime):Y.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=wp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=pp(l)?{documents:mL(s,l)}:{query:gL(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bI(s,o.resumeToken);const u=yp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Ec(s,o.snapshotVersion.toTimestamp());const u=yp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=vL(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=wp(this.serializer),n.removeTarget=e,this.Ho(n)}}class ZL extends HI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=pL(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.u_(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=wp(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fL(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(A.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(A.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class tb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(fr(n),this.d_=!1):F("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{Gi(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.y_.add(4),await El(u),u.b_.set("Unknown"),u.y_.delete(4),await Eh(u)}(this))})}),this.b_=new tb(r,i)}}async function Eh(t){if(Gi(t))for(const e of t.w_)await e(!0)}async function El(t){for(const e of t.w_)await e(!1)}function WI(t,e){const n=Z(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),Og(n)?Ng(n):po(n).Uo()&&Dg(n,e))}function qI(t,e){const n=Z(t),r=po(n);n.p_.delete(e),r.Uo()&&KI(n,e),n.p_.size===0&&(r.Uo()?r.zo():Gi(n)&&n.b_.set("Unknown"))}function Dg(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}po(t).i_(e)}function KI(t,e){t.D_.Be(e),po(t).s_(e)}function Ng(t){t.D_=new sL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),po(t).start(),t.b_.A_()}function Og(t){return Gi(t)&&!po(t).$o()&&t.p_.size>0}function Gi(t){return Z(t).y_.size===0}function GI(t){t.D_=void 0}async function rb(t){t.p_.forEach((e,n)=>{Dg(t,e)})}async function ib(t,e){GI(t),Og(t)?(t.b_.m_(e),Ng(t)):t.b_.set("Unknown")}async function sb(t,e,n){if(t.b_.set("Online"),e instanceof LI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tc(t,r)}else if(e instanceof Iu?t.D_.We(e):e instanceof OI?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Y.min()))try{const r=await BI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(kt.EMPTY_BYTE_STRING,c.snapshotVersion)),KI(s,l);const h=new Or(c.target,l,u,c.sequenceNumber);Dg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Tc(t,r)}}async function Tc(t,e,n){if(!vl(e))throw e;t.y_.add(1),await El(t),t.b_.set("Offline"),n||(n=()=>BI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Eh(t)})}function QI(t,e){return e().catch(n=>Tc(t,n,e))}async function Th(t){const e=Z(t),n=Jr(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;ob(e);)try{const i=await HL(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,ab(e,i)}catch(i){await Tc(e,i)}YI(e)&&XI(e)}function ob(t){return Gi(t)&&t.g_.length<10}function ab(t,e){t.g_.push(e);const n=Jr(t);n.Uo()&&n.__&&n.a_(e.mutations)}function YI(t){return Gi(t)&&!Jr(t).$o()&&t.g_.length>0}function XI(t){Jr(t).start()}async function lb(t){Jr(t).l_()}async function ub(t){const e=Jr(t);for(const n of t.g_)e.a_(n.mutations)}async function cb(t,e,n){const r=t.g_.shift(),i=Sg.from(r,e,n);await QI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Th(t)}async function hb(t,e){e&&Jr(t).__&&await async function(r,i){if(function(o){return nL(o)&&o!==A.ABORTED}(i.code)){const s=r.g_.shift();Jr(r).Go(),await QI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Th(r)}}(t,e),YI(t)&&XI(t)}async function i0(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Gi(n);n.y_.add(3),await El(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Eh(n)}async function db(t,e){const n=Z(t);e?(n.y_.delete(2),await Eh(n)):e||(n.y_.add(2),await El(n),n.b_.set("Unknown"))}function po(t){return t.v_||(t.v_=function(n,r,i){const s=Z(n);return s.P_(),new JL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:rb.bind(null,t),uo:ib.bind(null,t),r_:sb.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),Og(t)?Ng(t):t.b_.set("Unknown")):(await t.v_.stop(),GI(t))})),t.v_}function Jr(t){return t.C_||(t.C_=function(n,r,i){const s=Z(n);return s.P_(),new ZL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:lb.bind(null,t),uo:hb.bind(null,t),c_:ub.bind(null,t),u_:cb.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Th(t)):(await t.C_.stop(),t.g_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Lg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bg(t,e){if(fr("AsyncQueue",`${e}: ${t}`),vl(t))return new b(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=zo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.F_=new De(j.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):q():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ks{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ks(e,n,Ds.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(){this.x_=void 0,this.listeners=[]}}class pb{constructor(){this.queries=new fo(e=>_I(e),mh),this.onlineState="Unknown",this.O_=new Set}}async function JI(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new fb),i)try{s.x_=await n.onListen(r)}catch(o){const a=bg(o,`Initialization of query '${gp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Mg(n)}async function ZI(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mb(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&Mg(n)}function gb(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Mg(t){t.O_.forEach(e=>{e.next()})}class eS{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.key=e}}class nS{constructor(e){this.key=e}}class yb{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=re(),this.mutatedKeys=re(),this.na=wI(e),this.ra=new Ds(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new s0,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=gh(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this._a(d,p)||(r.track({type:2,doc:p}),w=!0,(l&&this.na(p,l)>0||u&&this.na(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(d,p){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return v(d)-v(p)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Ks(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new s0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=re(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new nS(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new tS(r))}),n}ha(e){this.X_=e.ss,this.ta=re();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Ks.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class vb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _b{constructor(e){this.key=e,this.Ia=!1}}class wb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new fo(a=>_I(a),mh),this.da=new Map,this.Aa=new Set,this.Ra=new De(j.comparator),this.Va=new Map,this.ma=new Cg,this.fa={},this.ga=new Map,this.pa=qs.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Eb(t,e){const n=Db(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await WL(n.localStore,pr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Tb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&WI(n.remoteStore,o)}return i}async function Tb(t,e,n,r,i){t.wa=(h,d,p)=>async function(_,w,g,f){let y=w.view.sa(g);y.zi&&(y=await t0(_.localStore,w.query,!1).then(({documents:R})=>w.view.sa(R,y)));const m=f&&f.targetChanges.get(w.targetId),T=w.view.applyChanges(y,_.isPrimaryClient,m);return a0(_,w.targetId,T.ca),T.snapshot}(t,h,d,p);const s=await t0(t.localStore,e,!0),o=new yb(e,s.ss),a=o.sa(s.documents),l=wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);a0(t,n,u.ca);const c=new vb(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function Ib(t,e){const n=Z(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!mh(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ep(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qI(n.remoteStore,r.targetId),Tp(n,r.targetId)}).catch(yl)):(Tp(n,r.targetId),await Ep(n.localStore,r.targetId,!0))}async function Sb(t,e,n){const r=Nb(t);try{const i=await function(o,a){const l=Z(o),u=Xe.now(),c=a.reduce((p,v)=>p.add(v.key),re());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=mr(),_=re();return l.Xi.getEntries(p,c).next(w=>{v=w,v.forEach((g,f)=>{f.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const g=[];for(const f of a){const y=XO(f,h.get(f.key).overlayedDocument);y!=null&&g.push(new si(f.key,y,hI(y.value.mapValue),wn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{d=w;const g=w.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:d.batchId,changes:TI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new De(ue)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Tl(r,i.changes),await Th(r.remoteStore)}catch(i){const s=bg(i,"Failed to persist write");n.reject(s)}}async function rS(t,e){const n=Z(t);try{const r=await BL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Se(o.Ia):i.removedDocuments.size>0&&(Se(o.Ia),o.Ia=!1))}),await Tl(n,r,e)}catch(r){await yl(r)}}function o0(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&Mg(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new De(j.comparator);o=o.insert(s,_t.newNoDocument(s,Y.min()));const a=re().add(s),l=new _h(Y.min(),new Map,new De(ue),o,a);await rS(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),Vg(r)}else await Ep(r.localStore,e,!1).then(()=>Tp(r,e,n)).catch(yl)}async function Ab(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await jL(n.localStore,e);sS(n,r,null),iS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tl(n,i)}catch(i){await yl(i)}}async function kb(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(Se(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);sS(r,e,n),iS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Tl(r,i)}catch(i){await yl(i)}}function iS(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function sS(t,e,n){const r=Z(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function Tp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||oS(t,r)})}function oS(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(qI(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Vg(t))}function a0(t,e,n){for(const r of n)r instanceof tS?(t.ma.addReference(r.key,e),Cb(t,r)):r instanceof nS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||oS(t,r.key)):q()}function Cb(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Vg(t))}function Vg(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new j(Te.fromString(e)),r=t.pa.next();t.Va.set(r,new _b(n)),t.Ra=t.Ra.insert(n,r),WI(t.remoteStore,new Or(pr(Eg(n.path)),r,"TargetPurposeLimboResolution",mg.ae))}}async function Tl(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=xg.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>D.forEach(u,d=>D.forEach(d.Li,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>D.forEach(d.ki,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!vl(h))throw h;F("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.Ji.get(d),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.Ji=c.Ji.insert(d,_)}}}(r.localStore,s))}async function Pb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await jI(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new b(A.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Tl(n,r.ts)}}function xb(t,e){const n=Z(t),r=n.Va.get(e);if(r&&r.Ia)return re().add(r.key);{let i=re();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function Db(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rb.bind(null,e),e.Ta.r_=mb.bind(null,e.eventManager),e.Ta.Sa=gb.bind(null,e.eventManager),e}function Nb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kb.bind(null,e),e}class l0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return $L(this.persistence,new FL,e.initialUser,this.serializer)}createPersistence(e){return new ML(Pg.zr,this.serializer)}createSharedClientState(e){return new KL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ob{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>o0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pb.bind(null,this.syncEngine),await db(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pb}()}createDatastore(e){const n=wh(e.databaseInfo.databaseId),r=function(s){return new XL(s)}(e.databaseInfo);return function(s,o,a,l){return new eb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new nb(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>o0(this.syncEngine,n,0),function(){return r0.v()?new r0:new GL}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new wb(i,s,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);F("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await El(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=lI.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=bg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Md(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function u0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Mb(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>i0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>i0(e.remoteStore,s)),t._onlineComponents=e}function bb(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Mb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Md(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!bb(n))throw n;Bs("Error using user provided cache. Falling back to memory cache: "+n),await Md(t,new l0)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Md(t,new l0);return t._offlineComponents}async function lS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await u0(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await u0(t,new Ob))),t._onlineComponents}function Vb(t){return lS(t).then(e=>e.syncEngine)}async function Ip(t){const e=await lS(t),n=e.eventManager;return n.onListen=Eb.bind(null,e.syncEngine),n.onUnlisten=Ib.bind(null,e.syncEngine),n}function Fb(t,e,n={}){const r=new Hr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new aS({next:d=>{o.enqueueAndForget(()=>ZI(s,h)),d.fromCache&&l.source==="server"?u.reject(new b(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new eS(a,c,{includeMetadataChanges:!0,W_:!0});return JI(s,h)}(await Ip(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t,e,n){if(!n)throw new b(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ub(t,e,n,r){if(e===!0&&r===!0)throw new b(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function h0(t){if(!j.isDocumentKey(t))throw new b(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function d0(t){if(j.isDocumentKey(t))throw new b(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ih(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ih(t);throw new b(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function $b(t,e){if(e<=0)throw new b(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new b(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new b(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ub("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new f0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new b(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new f0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uO;switch(r.type){case"firstParty":return new fO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=c0.get(n);r&&(F("ComponentProvider","Removing Datastore"),c0.delete(n),r.terminate())}(this),Promise.resolve()}}function jb(t,e,n,r={}){var i;const s=(t=zn(t,Sh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=yt.MOCK_USER;else{a=y1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new b(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new cO(new aI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vr(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Wr extends vr{constructor(e,n,r){super(e,n,Eg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new j(e))}withConverter(e){return new Wr(this.firestore,e,this._path)}}function Fg(t,e,...n){if(t=Oe(t),cS("collection","path",e),t instanceof Sh){const r=Te.fromString(e,...n);return d0(r),new Wr(t,null,r)}{if(!(t instanceof Bt||t instanceof Wr))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return d0(r),new Wr(t.firestore,null,r)}}function Sp(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=lI.V()),cS("doc","path",e),t instanceof Sh){const r=Te.fromString(e,...n);return h0(r),new Bt(t,null,new j(r))}{if(!(t instanceof Bt||t instanceof Wr))throw new b(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return h0(r),new Bt(t.firestore,t instanceof Wr?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new zI(this,"async_queue_retry"),this.Xa=()=>{const n=bd();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=bd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=bd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Hr;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!vl(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw fr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=Lg.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&q()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}function p0(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ui extends Sh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Bb}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hS(this),this._firestoreClient.terminate()}}function zb(t,e){const n=typeof t=="object"?t:bm(),r=typeof t=="string"?t:e||"(default)",i=Gc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=p1("firestore");s&&jb(i,...s)}return i}function Ug(t){return t._firestoreClient||hS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new RO(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,uS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lb(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(kt.fromBase64String(e))}catch(n){throw new b(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new b(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new b(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new b(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=/^__.*__$/;class Wb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new si(e,this.data,this.fieldMask,n,this.fieldTransforms):new _l(e,this.data,n,this.fieldTransforms)}}class dS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new si(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function fS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Bg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new Bg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return Ic(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(fS(this.uu)&&Hb.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class qb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wh(e)}Ru(e,n,r,i=!1){return new Bg({uu:e,methodName:n,Au:r,path:wt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zg(t){const e=t._freezeSettings(),n=wh(t._databaseId);return new qb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kb(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);Hg("Data must be an object, but it was:",o,r);const a=pS(r,o);let l,u;if(s.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Rp(e,h,n);if(!o.contains(d))throw new b(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gS(c,d)||c.push(d)}l=new Wt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Wb(new Vt(a),l,u)}class Ah extends $g{_toFieldTransform(e){if(e.uu!==2)throw e.uu===1?e.Eu(`${this._methodName}() can only appear at the top level of your update data`):e.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ah}}function Gb(t,e,n,r){const i=t.Ru(1,e,n);Hg("Data must be an object, but it was:",i,r);const s=[],o=Vt.empty();Ki(r,(l,u)=>{const c=Wg(e,l,n);u=Oe(u);const h=i.Iu(c);if(u instanceof Ah)s.push(c);else{const d=Il(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Wt(s);return new dS(o,a,i.fieldTransforms)}function Qb(t,e,n,r,i,s){const o=t.Ru(1,e,n),a=[Rp(e,r,n)],l=[i];if(s.length%2!=0)throw new b(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Rp(e,s[d])),l.push(s[d+1]);const u=[],c=Vt.empty();for(let d=a.length-1;d>=0;--d)if(!gS(u,a[d])){const p=a[d];let v=l[d];v=Oe(v);const _=o.Iu(p);if(v instanceof Ah)u.push(p);else{const w=Il(v,_);w!=null&&(u.push(p),c.set(p,w))}}const h=new Wt(u);return new dS(c,h,o.fieldTransforms)}function Yb(t,e,n,r=!1){return Il(n,t.Ru(r?4:3,e))}function Il(t,e){if(mS(t=Oe(t)))return Hg("Unsupported field value:",e,t),pS(t,e);if(t instanceof $g)return function(r,i){if(!fS(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Il(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(i.serializer,s)}}if(r instanceof jg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gs)return{bytesValue:bI(i.serializer,r._byteString)};if(r instanceof Bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Ih(r)}`)}(t,e)}function pS(t,e){const n={};return uI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ki(t,(r,i)=>{const s=Il(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function mS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof jg||t instanceof Gs||t instanceof Bt||t instanceof $g)}function Hg(t,e,n){if(!mS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ih(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Rp(t,e,n){if((e=Oe(e))instanceof Rh)return e._internalPath;if(typeof e=="string")return Wg(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xb=new RegExp("[~\\*/\\[\\]]");function Wg(t,e,n){if(e.search(Xb)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rh(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new b(A.INVALID_ARGUMENT,a+t+l)}function gS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(kh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jb extends yS{data(){return super.data()}}function kh(t,e){return typeof e=="string"?Wg(t,e):e instanceof Rh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new b(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qg{}class Kg extends qg{}function _S(t,e,...n){let r=[];e instanceof qg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Gg).length,a=s.filter(l=>l instanceof Ch).length;if(o>1||o>0&&a>0)throw new b(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ch extends Kg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ch(e,n,r)}_apply(e){const n=this._parse(e);return TS(e._query,n),new vr(e.firestore,e.converter,mp(e._query,n))}_parse(e){const n=zg(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new b(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){g0(h,c);const p=[];for(const v of h)p.push(m0(l,s,v));d={arrayValue:{values:p}}}else d=m0(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||g0(h,c),d=Yb(a,o,h,c==="in"||c==="not-in");return We.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Zb(t,e,n){const r=e,i=kh("where",t);return Ch._create(i,r,n)}class Gg extends qg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)TS(o,l),o=mp(o,l)}(e._query,n),new vr(e.firestore,e.converter,mp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qg extends Kg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Ps(s,o);return function(u,c){if(Tg(u)===null){const h=ph(u);h!==null&&IS(u,h,c.field)}}(i,a),a}(e._query,this._field,this._direction);return new vr(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new ho(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function wS(t,e="asc"){const n=e,r=kh("orderBy",t);return Qg._create(r,n)}class Yg extends Kg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Yg(e,n,r)}_apply(e){return new vr(e.firestore,e.converter,vc(e._query,this._limit,this._limitType))}}function ES(t){return $b("limit",t),Yg._create("limit",t,"F")}function m0(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new b(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vI(e)&&n.indexOf("/")!==-1)throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!j.isDocumentKey(r))throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return F_(t,new j(r))}if(n instanceof Bt)return F_(t,n._key);throw new b(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ih(n)}.`)}function g0(t,e){if(!Array.isArray(t)||t.length===0)throw new b(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TS(t,e){if(e.isInequality()){const r=ph(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new b(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Tg(t);s!==null&&IS(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new b(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function IS(t,e,n){if(!n.isEqual(e))throw new b(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class eM{convertValue(e,n="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new jg(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);Se($I(r));const i=new Ha(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||fr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SS extends yS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(kh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Su extends SS{data(e={}){return super.data(e)}}class RS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Wo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Su(this._firestore,this._userDataWriter,r.key,r,new Wo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new b(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Su(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Wo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:nM(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class Xg extends eM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function rM(t){t=zn(t,vr);const e=zn(t.firestore,Ui),n=Ug(e),r=new Xg(e);return vS(t._query),Fb(n,t._query).then(i=>new RS(e,r,t,i))}function iM(t,e,n,...r){t=zn(t,Bt);const i=zn(t.firestore,Ui),s=zg(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof Rh?Qb(s,"updateDoc",t._key,e,n,r):Gb(s,"updateDoc",t._key,e),Jg(i,[o.toMutation(t._key,wn.exists(!0))])}function y0(t){return Jg(zn(t.firestore,Ui),[new Ig(t._key,wn.none())])}function sM(t,e){const n=zn(t.firestore,Ui),r=Sp(t),i=tM(t.converter,e);return Jg(n,[Kb(zg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,wn.exists(!1))]).then(()=>r)}function oM(t,...e){var n,r,i;t=Oe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||p0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(p0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Bt)u=zn(t.firestore,Ui),c=Eg(t._key.path),l={next:h=>{e[o]&&e[o](aM(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=zn(t,vr);u=zn(h.firestore,Ui),c=h._query;const d=new Xg(u);l={next:p=>{e[o]&&e[o](new RS(u,d,h,p))},error:e[o+1],complete:e[o+2]},vS(t._query)}return function(d,p,v,_){const w=new aS(_),g=new eS(p,w,v);return d.asyncQueue.enqueueAndForget(async()=>JI(await Ip(d),g)),()=>{w.Ca(),d.asyncQueue.enqueueAndForget(async()=>ZI(await Ip(d),g))}}(Ug(u),c,a,l)}function Jg(t,e){return function(r,i){const s=new Hr;return r.asyncQueue.enqueueAndForget(async()=>Sb(await Vb(r),i,s)),s.promise}(Ug(t),e)}function aM(t,e,n){const r=n.docs.get(e._key),i=new Xg(t);return new SS(t,i,e._key,r,new Wo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){co=i})(zi),Oi(new Qr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ui(new hO(r.getProvider("auth-internal")),new mO(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new b(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Un(O_,"4.1.0",e),Un(O_,"4.1.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebasestorage.googleapis.com",kS="storageBucket",lM=2*60*1e3,uM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Wn{constructor(e,n,r=0){super(Vd(e),`Firebase Storage: ${n} (${Vd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function Vd(t){return"storage/"+t}function Zg(){const t="An unknown error occurred, please check the error payload for server response.";return new Me(be.UNKNOWN,t)}function cM(t){return new Me(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function hM(t){return new Me(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Me(be.UNAUTHENTICATED,t)}function fM(){return new Me(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function pM(t){return new Me(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function mM(){return new Me(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function gM(){return new Me(be.CANCELED,"User canceled the upload/download.")}function yM(t){return new Me(be.INVALID_URL,"Invalid URL '"+t+"'.")}function vM(t){return new Me(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _M(){return new Me(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kS+"' property when initializing the app?")}function wM(){return new Me(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function EM(){return new Me(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TM(t){return new Me(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ap(t){return new Me(be.INVALID_ARGUMENT,t)}function CS(){return new Me(be.APP_DELETED,"The Firebase app was deleted.")}function IM(t){return new Me(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function la(t,e){return new Me(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Oo(t){throw new Me(be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw vM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(m){m.path_=decodeURIComponent(m.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},_=n===AS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let m=0;m<y.length;m++){const T=y[m],R=T.regex.exec(e);if(R){const S=R[T.indices.bucket];let N=R[T.indices.path];N||(N=""),r=new qt(S,N),T.postModify(r);break}}if(r==null)throw yM(e);return r}}class SM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function d(){s&&clearTimeout(s)}function p(w,...g){if(u){d();return}if(w){d(),c.call(null,w,...g);return}if(l()||o){d(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,h(y)}let v=!1;function _(w){v||(v=!0,d(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function AM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kM(t){return t!==void 0}function CM(t){return typeof t=="object"&&!Array.isArray(t)}function ey(t){return typeof t=="string"||t instanceof String}function v0(t){return ty()&&t instanceof Blob}function ty(){return typeof Blob<"u"&&!DP()}function _0(t,e,n,r){if(r<e)throw Ap(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ap(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function PS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Si||(Si={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Si.NO_ERROR,l=s.getStatus();if(!a||PM(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Si.ABORT;r(!1,new nu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new nu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());kM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Zg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?CS():gM();o(l)}else{const l=mM();o(l)}};this.canceled_?n(!1,new nu(!1,null,!0)):this.backoffId_=RM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function DM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bM(t,e,n,r,i,s,o=!0){const a=PS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return OM(u,e),DM(u,n),NM(u,s),LM(u,r),new xM(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VM(...t){const e=MM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ty())return new Blob(t);throw new Me(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function FM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(t){if(typeof atob>"u")throw TM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fd{constructor(e,n){this.data=e,this.contentType=n||null}}function $M(t,e){switch(t){case Mn.RAW:return new Fd(xS(e));case Mn.BASE64:case Mn.BASE64URL:return new Fd(DS(t,e));case Mn.DATA_URL:return new Fd(BM(e),zM(e))}throw Zg()}function xS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jM(t){let e;try{e=decodeURIComponent(t)}catch{throw la(Mn.DATA_URL,"Malformed data URL.")}return xS(e)}function DS(t,e){switch(t){case Mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw la(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw la(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UM(e)}catch(i){throw i.message.includes("polyfill")?i:la(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class NS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw la(Mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=HM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function BM(t){const e=new NS(t);return e.base64?DS(Mn.BASE64,e.rest):jM(e.rest)}function zM(t){return new NS(t).contentType}function HM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){let r=0,i="";v0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(v0(this.data_)){const r=this.data_,i=FM(r,e,n);return i===null?null:new xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xr(r,!0)}}static getBlob(...e){if(ty()){const n=e.map(r=>r instanceof xr?r.data_:r);return new xr(VM.apply(null,n))}else{const n=e.map(o=>ey(o)?$M(Mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new xr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){let e;try{e=JSON.parse(t)}catch{return null}return CM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function LS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t,e){return e}class Ct{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||KM}}let ru=null;function GM(t){return!ey(t)||t.length<2?t:LS(t)}function bS(){if(ru)return ru;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(s,o){return GM(o)}const n=new Ct("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=r,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),ru=t,ru}function QM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function YM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return QM(r,t),r}function MS(t,e,n){const r=OS(e);return r===null?null:YM(t,r,n)}function XM(t,e,n,r){const i=OS(e);if(i===null||!ey(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=ny(d,n,r),v=PS({alt:"media",token:u});return p+v})[0]}function JM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class VS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){if(!t)throw Zg()}function ZM(t,e){function n(r,i){const s=MS(t,i,e);return FS(s!==null),s}return n}function eV(t,e){function n(r,i){const s=MS(t,i,e);return FS(s!==null),XM(s,i,t.host,t._protocol)}return n}function US(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=fM():i=dM():n.getStatus()===402?i=hM(t.bucket):n.getStatus()===403?i=pM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function tV(t){const e=US(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=cM(t.path)),s.serverResponse=i.serverResponse,s}return n}function nV(t,e,n){const r=e.fullServerUrl(),i=ny(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new VS(i,s,eV(t,n),o);return a.errorHandler=tV(e),a}function rV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function iV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=rV(null,e)),r}function sV(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let m=0;m<2;m++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=iV(e,r,i),c=JM(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=xr.getBlob(h,r,d);if(p===null)throw wM();const v={name:u.fullPath},_=ny(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,f=new VS(_,w,ZM(t,n),g);return f.urlParams=v,f.headers=o,f.body=p.uploadData(),f.errorHandler=US(e),f}class oV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Si.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Si.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Si.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Oo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Oo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Oo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Oo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Oo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class aV extends oV{initXhr(){this.xhr_.responseType="text"}}function $S(){return new aV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $i(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LS(this._location.path)}get storage(){return this._service}get parent(){const e=WM(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new $i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IM(e)}}function lV(t,e,n){t._throwIfRoot("uploadBytes");const r=sV(t.storage,t._location,bS(),new xr(e,!0),n);return t.storage.makeRequestWithTokens(r,$S).then(i=>({metadata:i,ref:t}))}function uV(t){t._throwIfRoot("getDownloadURL");const e=nV(t.storage,t._location,bS());return t.storage.makeRequestWithTokens(e,$S).then(n=>{if(n===null)throw EM();return n})}function cV(t,e){const n=qM(t._location.path,e),r=new qt(t._location.bucket,n);return new $i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t){return/^[A-Za-z]+:\/\//.test(t)}function dV(t,e){return new $i(t,e)}function jS(t,e){if(t instanceof ry){const n=t;if(n._bucket==null)throw _M();const r=new $i(n,n._bucket);return e!=null?jS(r,e):r}else return e!==void 0?cV(t,e):t}function fV(t,e){if(e&&hV(e)){if(t instanceof ry)return dV(t,e);throw Ap("To use ref(service, url), the first argument must be a Storage instance.")}else return jS(t,e)}function w0(t,e){const n=e==null?void 0:e[kS];return n==null?null:qt.makeFromBucketSpec(n,t)}function pV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:y1(i,t.app.options.projectId))}class ry{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=AS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=lM,this._maxUploadRetryTime=uM,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=w0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=w0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SM(CS());{const o=bM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const E0="@firebase/storage",T0="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="storage";function zS(t,e,n){return t=Oe(t),lV(t,e,n)}function HS(t){return t=Oe(t),uV(t)}function WS(t,e){return t=Oe(t),fV(t,e)}function mV(t=bm(),e){t=Oe(t);const r=Gc(t,BS).getImmediate({identifier:e}),i=p1("storage");return i&&gV(r,...i),r}function gV(t,e,n,r={}){pV(t,e,n,r)}function yV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ry(n,r,i,e,zi)}function vV(){Oi(new Qr(BS,yV,"PUBLIC").setMultipleInstances(!0)),Un(E0,T0,""),Un(E0,T0,"esm2017")}vV();const _V={apiKey:"AIzaSyAxL0AiGTnM1e_M3P60-7BVAwewpqLGvuY",authDomain:"nwitter-d91ae.firebaseapp.com",projectId:"nwitter-d91ae",storageBucket:"nwitter-d91ae.appspot.com",messagingSenderId:"112349353378",appId:"1:112349353378:web:a0c72e36efdd7548234efb"},wV=w1(_V),qn=tN(wV),Ga=zb(),qS=mV();var we="-ms-",ua="-moz-",ce="-webkit-",KS="comm",Ph="rule",iy="decl",EV="@import",GS="@keyframes",TV="@layer",IV=Math.abs,sy=String.fromCharCode,kp=Object.assign;function SV(t,e){return tt(t,0)^45?(((e<<2^tt(t,0))<<2^tt(t,1))<<2^tt(t,2))<<2^tt(t,3):0}function QS(t){return t.trim()}function Yn(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function Ru(t,e){return t.indexOf(e)}function tt(t,e){return t.charCodeAt(e)|0}function Qs(t,e,n){return t.slice(e,n)}function xn(t){return t.length}function YS(t){return t.length}function qo(t,e){return e.push(t),t}function RV(t,e){return t.map(e).join("")}function I0(t,e){return t.filter(function(n){return!Yn(n,e)})}var xh=1,Ys=1,XS=0,cn=0,ze=0,mo="";function Dh(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:xh,column:Ys,length:o,return:"",siblings:a}}function Ir(t,e){return kp(Dh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ji(t){for(;t.root;)t=Ir(t.root,{children:[t]});qo(t,t.siblings)}function AV(){return ze}function kV(){return ze=cn>0?tt(mo,--cn):0,Ys--,ze===10&&(Ys=1,xh--),ze}function En(){return ze=cn<XS?tt(mo,cn++):0,Ys++,ze===10&&(Ys=1,xh++),ze}function Ri(){return tt(mo,cn)}function Au(){return cn}function Nh(t,e){return Qs(mo,t,e)}function Cp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CV(t){return xh=Ys=1,XS=xn(mo=t),cn=0,[]}function PV(t){return mo="",t}function Ud(t){return QS(Nh(cn-1,Pp(t===91?t+2:t===40?t+1:t)))}function xV(t){for(;(ze=Ri())&&ze<33;)En();return Cp(t)>2||Cp(ze)>3?"":" "}function DV(t,e){for(;--e&&En()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Nh(t,Au()+(e<6&&Ri()==32&&En()==32))}function Pp(t){for(;En();)switch(ze){case t:return cn;case 34:case 39:t!==34&&t!==39&&Pp(ze);break;case 40:t===41&&Pp(t);break;case 92:En();break}return cn}function NV(t,e){for(;En()&&t+ze!==47+10;)if(t+ze===42+42&&Ri()===47)break;return"/*"+Nh(e,cn-1)+"*"+sy(t===47?t:En())}function OV(t){for(;!Cp(Ri());)En();return Nh(t,cn)}function LV(t){return PV(ku("",null,null,null,[""],t=CV(t),0,[0],t))}function ku(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,h=o,d=0,p=0,v=0,_=1,w=1,g=1,f=0,y="",m=i,T=s,R=r,S=y;w;)switch(v=f,f=En()){case 40:if(v!=108&&tt(S,h-1)==58){Ru(S+=te(Ud(f),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:S+=Ud(f);break;case 9:case 10:case 13:case 32:S+=xV(v);break;case 92:S+=DV(Au()-1,7);continue;case 47:switch(Ri()){case 42:case 47:qo(bV(NV(En(),Au()),e,n,l),l);break;default:S+="/"}break;case 123*_:a[u++]=xn(S)*g;case 125*_:case 59:case 0:switch(f){case 0:case 125:w=0;case 59+c:g==-1&&(S=te(S,/\f/g,"")),p>0&&xn(S)-h&&qo(p>32?R0(S+";",r,n,h-1,l):R0(te(S," ","")+";",r,n,h-2,l),l);break;case 59:S+=";";default:if(qo(R=S0(S,e,n,u,c,i,a,y,m=[],T=[],h,s),s),f===123)if(c===0)ku(S,e,R,R,m,s,h,a,T);else switch(d===99&&tt(S,3)===110?100:d){case 100:case 108:case 109:case 115:ku(t,R,R,r&&qo(S0(t,R,R,0,0,i,a,y,i,m=[],h,T),T),i,T,h,a,r?m:T);break;default:ku(S,R,R,R,[""],T,0,a,T)}}u=c=p=0,_=g=1,y=S="",h=o;break;case 58:h=1+xn(S),p=v;default:if(_<1){if(f==123)--_;else if(f==125&&_++==0&&kV()==125)continue}switch(S+=sy(f),f*_){case 38:g=c>0?1:(S+="\f",-1);break;case 44:a[u++]=(xn(S)-1)*g,g=1;break;case 64:Ri()===45&&(S+=Ud(En())),d=Ri(),c=h=xn(y=S+=OV(Au())),f++;break;case 45:v===45&&xn(S)==2&&(_=0)}}return s}function S0(t,e,n,r,i,s,o,a,l,u,c,h){for(var d=i-1,p=i===0?s:[""],v=YS(p),_=0,w=0,g=0;_<r;++_)for(var f=0,y=Qs(t,d+1,d=IV(w=o[_])),m=t;f<v;++f)(m=QS(w>0?p[f]+" "+y:te(y,/&\f/g,p[f])))&&(l[g++]=m);return Dh(t,e,n,i===0?Ph:a,l,u,c,h)}function bV(t,e,n,r){return Dh(t,e,n,KS,sy(AV()),Qs(t,2,-2),0,r)}function R0(t,e,n,r,i){return Dh(t,e,n,iy,Qs(t,0,r),Qs(t,r+1,-1),r,i)}function JS(t,e,n){switch(SV(t,e)){case 5103:return ce+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ce+t+t;case 4789:return ua+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ce+t+ua+t+we+t+t;case 5936:switch(tt(t,e+11)){case 114:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ce+t+we+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ce+t+we+t+t;case 6165:return ce+t+we+"flex-"+t+t;case 5187:return ce+t+te(t,/(\w+).+(:[^]+)/,ce+"box-$1$2"+we+"flex-$1$2")+t;case 5443:return ce+t+we+"flex-item-"+te(t,/flex-|-self/g,"")+(Yn(t,/flex-|baseline/)?"":we+"grid-row-"+te(t,/flex-|-self/g,""))+t;case 4675:return ce+t+we+"flex-line-pack"+te(t,/align-content|flex-|-self/g,"")+t;case 5548:return ce+t+we+te(t,"shrink","negative")+t;case 5292:return ce+t+we+te(t,"basis","preferred-size")+t;case 6060:return ce+"box-"+te(t,"-grow","")+ce+t+we+te(t,"grow","positive")+t;case 4554:return ce+te(t,/([^-])(transform)/g,"$1"+ce+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,ce+"$1"),/(image-set)/,ce+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,ce+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,ce+"box-pack:$3"+we+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ce+t+t;case 4200:if(!Yn(t,/flex-|baseline/))return we+"grid-column-align"+Qs(t,e)+t;break;case 2592:case 3360:return we+te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Yn(r.props,/grid-\w+-end/)})?~Ru(t+(n=n[e].value),"span")?t:we+te(t,"-start","")+t+we+"grid-row-span:"+(~Ru(n,"span")?Yn(n,/\d+/):+Yn(n,/\d+/)-+Yn(t,/\d+/))+";":we+te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Yn(r.props,/grid-\w+-start/)})?t:we+te(te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,ce+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xn(t)-1-e>6)switch(tt(t,e+1)){case 109:if(tt(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+ce+"$2-$3$1"+ua+(tt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ru(t,"stretch")?JS(te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return we+i+":"+s+u+(o?we+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(tt(t,e+6)===121)return te(t,":",":"+ce)+t;break;case 6444:switch(tt(t,tt(t,14)===45?18:11)){case 120:return te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ce+(tt(t,14)===45?"inline-":"")+"box$3$1"+ce+"$2$3$1"+we+"$2box$3")+t;case 100:return te(t,":",":"+we)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(t,"scroll-","scroll-snap-")+t}return t}function Sc(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function MV(t,e,n,r){switch(t.type){case TV:if(t.children.length)break;case EV:case iy:return t.return=t.return||t.value;case KS:return"";case GS:return t.return=t.value+"{"+Sc(t.children,r)+"}";case Ph:if(!xn(t.value=t.props.join(",")))return""}return xn(n=Sc(t.children,r))?t.return=t.value+"{"+n+"}":""}function VV(t){var e=YS(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function FV(t){return function(e){e.root||(e=e.return)&&t(e)}}function UV(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case iy:t.return=JS(t.value,t.length,n);return;case GS:return Sc([Ir(t,{value:te(t.value,"@","@"+ce)})],r);case Ph:if(t.length)return RV(n=t.props,function(i){switch(Yn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ji(Ir(t,{props:[te(i,/:(read-\w+)/,":"+ua+"$1")]})),Ji(Ir(t,{props:[i]})),kp(t,{props:I0(n,r)});break;case"::placeholder":Ji(Ir(t,{props:[te(i,/:(plac\w+)/,":"+ce+"input-$1")]})),Ji(Ir(t,{props:[te(i,/:(plac\w+)/,":"+ua+"$1")]})),Ji(Ir(t,{props:[te(i,/:(plac\w+)/,we+"input-$1")]})),Ji(Ir(t,{props:[i]})),kp(t,{props:I0(n,r)});break}return""})}}var $V={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",oy=typeof window<"u"&&"HTMLElement"in window,jV=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),BV={},Oh=Object.freeze([]),Js=Object.freeze({});function ZS(t,e,n){return n===void 0&&(n=Js),t.theme!==n.theme&&t.theme||e||n.theme}var eR=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zV=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,HV=/(^-|-$)/g;function A0(t){return t.replace(zV,"-").replace(HV,"")}var WV=/(a)(d)/gi,k0=function(t){return String.fromCharCode(t+(t>25?39:97))};function xp(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=k0(e%52)+n;return(k0(e%52)+n).replace(WV,"$1-$2")}var $d,ys=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},tR=function(t){return ys(5381,t)};function nR(t){return xp(tR(t)>>>0)}function qV(t){return t.displayName||t.name||"Component"}function jd(t){return typeof t=="string"&&!0}var rR=typeof Symbol=="function"&&Symbol.for,iR=rR?Symbol.for("react.memo"):60115,KV=rR?Symbol.for("react.forward_ref"):60112,GV={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QV={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sR={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YV=(($d={})[KV]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$d[iR]=sR,$d);function C0(t){return("type"in(e=t)&&e.type.$$typeof)===iR?sR:"$$typeof"in t?YV[t.$$typeof]:GV;var e}var XV=Object.defineProperty,JV=Object.getOwnPropertyNames,P0=Object.getOwnPropertySymbols,ZV=Object.getOwnPropertyDescriptor,e4=Object.getPrototypeOf,x0=Object.prototype;function oR(t,e,n){if(typeof e!="string"){if(x0){var r=e4(e);r&&r!==x0&&oR(t,r,n)}var i=JV(e);P0&&(i=i.concat(P0(e)));for(var s=C0(t),o=C0(e),a=0;a<i.length;++a){var l=i[a];if(!(l in QV||n&&n[l]||o&&l in o||s&&l in s)){var u=ZV(e,l);try{XV(t,l,u)}catch{}}}}return t}function Zs(t){return typeof t=="function"}function ay(t){return typeof t=="object"&&"styledComponentId"in t}function _i(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Dp(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Qa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Np(t,e,n){if(n===void 0&&(n=!1),!n&&!Qa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Np(t[r],e[r]);else if(Qa(e))for(var r in e)t[r]=Np(t[r],e[r]);return t}function ly(t,e){Object.defineProperty(t,"toString",{value:e})}function Sl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var t4=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Sl(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Cu=new Map,Rc=new Map,Bd=1,iu=function(t){if(Cu.has(t))return Cu.get(t);for(;Rc.has(Bd);)Bd++;var e=Bd++;return Cu.set(t,e),Rc.set(e,t),e},n4=function(t,e){Cu.set(t,e),Rc.set(e,t)},r4="style[".concat(Xs,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),i4=new RegExp("^".concat(Xs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),s4=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},o4=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(i4);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(n4(c,u),s4(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function a4(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aR=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Xs,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Xs,"active"),r.setAttribute("data-styled-version","6.0.7");var o=a4();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},l4=function(){function t(e){this.element=aR(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Sl(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),u4=function(){function t(e){this.element=aR(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),c4=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),D0=oy,h4={isServer:!oy,useCSSOMInjection:!jV},Ac=function(){function t(e,n,r){e===void 0&&(e=Js),n===void 0&&(n={});var i=this;this.options=Et(Et({},h4),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&oy&&D0&&(D0=!1,function(s){for(var o=document.querySelectorAll(r4),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Xs)!=="active"&&(o4(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ly(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(h){var d=function(g){return Rc.get(g)}(h);if(d===void 0)return"continue";var p=s.names.get(d),v=o.getGroup(h);if(p===void 0||v.length===0)return"continue";var _="".concat(Xs,".g").concat(h,'[id="').concat(d,'"]'),w="";p!==void 0&&p.forEach(function(g){g.length>0&&(w+="".concat(g,","))}),l+="".concat(v).concat(_,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return iu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Et(Et({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new c4(i):r?new l4(i):new u4(i)}(this.options),new t4(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(iu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(iu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(iu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),d4=/&/g,f4=/^\s*\/\/.*$/gm;function lR(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lR(n.children,e)),n})}function p4(t){var e,n,r,i=t===void 0?Js:t,s=i.options,o=s===void 0?Js:s,a=i.plugins,l=a===void 0?Oh:a,u=function(d,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Ph&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(d4,n).replace(r,u))}),o.prefix&&c.push(UV),c.push(MV);var h=function(d,p,v,_){p===void 0&&(p=""),v===void 0&&(v=""),_===void 0&&(_="&"),e=_,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var w=d.replace(f4,""),g=LV(v||p?"".concat(v," ").concat(p," { ").concat(w," }"):w);o.namespace&&(g=lR(g,o.namespace));var f=[];return Sc(g,VV(c.concat(FV(function(y){return f.push(y)})))),f};return h.hash=l.length?l.reduce(function(d,p){return p.name||Sl(15),ys(d,p.name)},5381).toString():"",h}var m4=new Ac,Op=p4(),uR=On.createContext({shouldForwardProp:void 0,styleSheet:m4,stylis:Op});uR.Consumer;On.createContext(void 0);function Lp(){return C.useContext(uR)}var g4=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Op);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ly(this,function(){throw Sl(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Op),this.name+e.hash},t}(),y4=function(t){return t>="A"&&t<="Z"};function N0(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;y4(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var cR=function(t){return t==null||t===!1||t===""},hR=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!cR(s)&&(Array.isArray(s)&&s.isCss||Zs(s)?r.push("".concat(N0(i),":"),s,";"):Qa(s)?r.push.apply(r,Da(Da(["".concat(i," {")],hR(s),!1),["}"],!1)):r.push("".concat(N0(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in $V||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qr(t,e,n,r){if(cR(t))return[];if(ay(t))return[".".concat(t.styledComponentId)];if(Zs(t)){if(!Zs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return qr(i,e,n,r)}var s;return t instanceof g4?n?(t.inject(n,r),[t.getName(r)]):[t]:Qa(t)?hR(t):Array.isArray(t)?Array.prototype.concat.apply(Oh,t.map(function(o){return qr(o,e,n,r)})):[t.toString()]}function dR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Zs(n)&&!ay(n))return!1}return!0}var v4=tR("6.0.7"),_4=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dR(e),this.componentId=n,this.baseHash=ys(v4,n),this.baseStyle=r,Ac.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_i(i,this.staticRulesId);else{var s=Dp(qr(this.rules,e,n,r)),o=xp(ys(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=_i(i,o),this.staticRulesId=o}else{for(var l=ys(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var h=this.rules[c];if(typeof h=="string")u+=h;else if(h){var d=Dp(qr(h,e,n,r));l=ys(l,d),u+=d}}if(u){var p=xp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=_i(i,p)}}return i},t}(),uy=On.createContext(void 0);uy.Consumer;var zd={};function w4(t,e,n){var r=ay(t),i=t,s=!jd(t),o=e.attrs,a=o===void 0?Oh:o,l=e.componentId,u=l===void 0?function(y,m){var T=typeof y!="string"?"sc":A0(y);zd[T]=(zd[T]||0)+1;var R="".concat(T,"-").concat(nR("6.0.7"+T+zd[T]));return m?"".concat(m,"-").concat(R):R}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(y){return jd(y)?"styled.".concat(y):"Styled(".concat(qV(y),")")}(t);var h=e.displayName&&e.componentId?"".concat(A0(e.displayName),"-").concat(e.componentId):e.componentId||u,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var _=e.shouldForwardProp;p=function(y,m){return v(y,m)&&_(y,m)}}else p=v}var w=new _4(n,h,r?i.componentStyle:void 0);function g(y,m){return function(T,R,S){var N=T.attrs,J=T.componentStyle,B=T.defaultProps,Ue=T.foldedComponentIds,fe=T.styledComponentId,Jt=T.target,Rn=On.useContext(uy),An=Lp(),st=T.shouldForwardProp||An.shouldForwardProp,qe=function(hn,ae,Lt){for(var dt,bt=Et(Et({},ae),{className:void 0,theme:Lt}),Zt=0;Zt<hn.length;Zt+=1){var Qi=Zs(dt=hn[Zt])?dt(bt):dt;for(var kn in Qi)bt[kn]=kn==="className"?_i(bt[kn],Qi[kn]):kn==="style"?Et(Et({},bt[kn]),Qi[kn]):Qi[kn]}return ae.className&&(bt.className=_i(bt.className,ae.className)),bt}(N,R,ZS(R,Rn,B)||Js),O=qe.as||Jt,$={};for(var z in qe)qe[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?$.as=qe.forwardedAs:st&&!st(z,O)||($[z]=qe[z]));var ge=function(hn,ae){var Lt=Lp(),dt=hn.generateAndInjectStyles(ae,Lt.styleSheet,Lt.stylis);return dt}(J,qe),Re=_i(Ue,fe);return ge&&(Re+=" "+ge),qe.className&&(Re+=" "+qe.className),$[jd(O)&&!eR.has(O)?"class":"className"]=Re,$.ref=S,C.createElement(O,$)}(f,y,m)}var f=On.forwardRef(g);return f.attrs=d,f.componentStyle=w,f.shouldForwardProp=p,f.foldedComponentIds=r?_i(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:t,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(m){for(var T=[],R=1;R<arguments.length;R++)T[R-1]=arguments[R];for(var S=0,N=T;S<N.length;S++)Np(m,N[S],!0);return m}({},i.defaultProps,y):y}}),ly(f,function(){return".".concat(f.styledComponentId)}),s&&oR(f,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function O0(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var L0=function(t){return Object.assign(t,{isCss:!0})};function cy(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Zs(t)||Qa(t)){var r=t;return L0(qr(O0(Oh,Da([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?qr(i):L0(qr(O0(i,e)))}function bp(t,e,n){if(n===void 0&&(n=Js),!e)throw Sl(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,cy.apply(void 0,Da([i],s,!1)))};return r.attrs=function(i){return bp(t,e,Et(Et({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return bp(t,e,Et(Et({},n),i))},r}var fR=function(t){return bp(w4,t)},ee=fR;eR.forEach(function(t){ee[t]=fR(t)});var E4=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=dR(e),Ac.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Dp(qr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Ac.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function pR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=cy.apply(void 0,Da([t],e,!1)),i="sc-global-".concat(nR(JSON.stringify(r))),s=new E4(r,i),o=function(l){var u=Lp(),c=On.useContext(uy),h=On.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(h,l,u.styleSheet,c,u.stylis),On.useLayoutEffect(function(){if(!u.styleSheet.server)return a(h,l,u.styleSheet,c,u.stylis),function(){return s.removeStyles(h,u.styleSheet)}},[h,l,u.styleSheet,c,u.stylis]),null};function a(l,u,c,h,d){if(s.isStatic)s.renderStyles(l,BV,c,d);else{var p=Et(Et({},u),{theme:ZS(u,h,o.defaultProps)});s.renderStyles(l,p,c,d)}}return On.memo(o)}const T4=ee.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`,I4=ee.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Hd=ee.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;function S4(){const t=so(),e=async()=>{confirm("Are you sure you want to log out?")&&(await qn.signOut(),t("/login"))};return P.jsxs(T4,{children:[P.jsxs(I4,{children:[P.jsx(Wf,{to:"/",children:P.jsx(Hd,{children:P.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:P.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"})})})}),P.jsx(Wf,{to:"/profile",children:P.jsx(Hd,{children:P.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:P.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),P.jsx(Hd,{onClick:e,className:"log-out",children:P.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[P.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),P.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),P.jsx(uP,{})]})}const R4=ee.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,A4=ee.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
`,k4=ee.label`
  padding: 10px 0px;
  color: #1d9bf0;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #1d9bf0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`,C4=ee.input`
  display: none;
`,P4=ee.input`
  background-color: #1d9bf0;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`,x4=ee.img`
    
    max-width: 400px;
    max-height: 400px;
    margin : 0 auto;
`;function D4(){const[t,e]=C.useState(!1),[n,r]=C.useState(""),[i,s]=C.useState(null),[o,a]=C.useState(null),l=h=>{r(h.target.value)},u=h=>{const{files:d}=h.target;if(d&&d.length===1){s(d[0]);const p=URL.createObjectURL(d[0]);a(p)}},c=async h=>{h.preventDefault();const d=qn.currentUser,p=i==null?void 0:i.size;if(n===""||n.length>180){alert("글자수는 180자 이하로 작성해주세요.");return}if(p&&p>5*1024*1024){alert("파일 사이즈는 5MB 이하로 업로드 가능합니다.");return}try{e(!0);const v=await sM(Fg(Ga,"tweets"),{tweet:n,createdAt:Date.now(),image:"",userId:d==null?void 0:d.uid,username:(d==null?void 0:d.displayName)||"Anonymous"});if(i){const _=WS(qS,`tweets/${d==null?void 0:d.uid}/${v.id}`),w=await zS(_,i),g=await HS(w.ref);await iM(v,{image:g})}r(""),a(null)}catch(v){console.log(v)}finally{e(!1)}};return P.jsxs(R4,{onSubmit:c,children:[P.jsx(A4,{rows:5,maxLength:180,onChange:l,value:n,placeholder:"What is happening?!"}),o&&P.jsx(x4,{src:o}),P.jsx(k4,{htmlFor:"file",children:i?"Photo added ✅":"Add photo"}),P.jsx(C4,{onChange:u,type:"file",id:"file",accept:"image/*"}),P.jsx(P4,{type:"submit",value:t?"Posting...":"Post Tweet"})]})}const N4=ee.button`
    color: red;
    background-color: transparent;
    border: none;
    cursor: pointer;
  width: 40px;
`;function O4(t){const e=async()=>{if(window.confirm("Are you sure you want to delete this tweet?"))try{await y0(Sp(Ga,"tweets",t.tweetId)),t.image&&await y0(Sp(Ga,"tweets",t.image))}catch(r){console.log(r)}finally{console.log("finally")}};return P.jsx(P.Fragment,{children:P.jsx(N4,{onClick:e,children:P.jsx("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:P.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})})}const L4=ee.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`,b0=ee.div``,b4=ee.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
`,M4=ee.span`
  font-weight: 600;
  font-size: 15px;
`,V4=ee.p`
  margin: 10px 0px;
  font-size: 18px;
`,F4=ee.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 20px;
`,U4=ee.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #1d9bf0;
    display: flex;  
    justify-content: center;
`,$4=ee.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 10px;
`;function mR({username:t,image:e,tweet:n,userId:r,tweetId:i}){const s=qn.currentUser;return P.jsxs(L4,{children:[P.jsxs($4,{children:[P.jsx(U4,{src:(s==null?void 0:s.photoURL)||"",alt:"user profile"}),P.jsxs(M4,{children:[t," @ ",r]})]}),P.jsxs(F4,{children:[P.jsx(b0,{children:P.jsx(V4,{children:n})}),e?P.jsx(b0,{children:P.jsx(b4,{src:e})}):null]}),(s==null?void 0:s.uid)===r?P.jsx(O4,{tweetId:i,userId:r,image:e}):null]})}function j4(){const[t,e]=C.useState([]);let n=null;const r=async()=>{try{const i=_S(Fg(Ga,"tweets"),wS("createdAt","desc"),ES(25));n=await oM(i,s=>{const o=s.docs.map(a=>{const{image:l,tweet:u,username:c,createdAt:h,userId:d}=a.data();return{image:l,tweet:u,username:c,createdAt:h,userId:d,tweetId:a.id}});e(o)})}catch(i){console.log(i)}finally{console.log("finally")}};return C.useEffect(()=>(r(),()=>{n&&n()}),[]),P.jsx(P.Fragment,{children:t.map(i=>P.jsx(mR,{...i},i.tweetId))})}const B4=ee.div`
  display: grid;
  gap: 20px;

`;function z4(){return P.jsxs(B4,{children:[P.jsx(D4,{}),P.jsx(j4,{})]})}const H4=ee.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,W4=ee.label`
  width: 80px;
  overflow: hidden;
  height: 80px;
  border-radius: 50%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`,q4=ee.img`
  width: 100%;
`,K4=ee.input`
  display: none;
`,G4=ee.span`
  font-size: 22px;
`,Q4=ee.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;function Y4(){const t=qn.currentUser,[e,n]=C.useState(t==null?void 0:t.photoURL),[r,i]=C.useState([]),s=async a=>{const{files:l}=a.target;if(t&&l&&l.length===1){const u=l[0],c=WS(qS,`avatars/${t==null?void 0:t.uid}`),h=await zS(c,u),d=await HS(h.ref);n(d),await q1(t,{photoURL:d})}},o=async()=>{const a=_S(Fg(Ga,"tweets"),Zb("userId","==",t==null?void 0:t.uid),wS("createdAt","desc"),ES(25)),u=(await rM(a)).docs.map(c=>{const{tweet:h,createdAt:d,userId:p,username:v,image:_}=c.data();return{tweet:h,createdAt:d,userId:p,username:v,image:_,tweetId:c.id}});i(u)};return C.useEffect(()=>{o()},[]),P.jsxs(H4,{children:[P.jsx(W4,{htmlFor:"avatar",children:e?P.jsx(q4,{src:e}):P.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:P.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})}),P.jsx(K4,{onChange:s,id:"avatar",type:"file",accept:"image/*"}),P.jsx(G4,{children:(t==null?void 0:t.displayName)??"Anonymous"}),P.jsx(Q4,{children:r.map(a=>P.jsx(mR,{...a},a.userId))})]})}var gR=globalThis&&globalThis.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},yR=cy(M0||(M0=gR([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));pR(V0||(V0=gR(["",""],["",""])),yR);var M0,V0;const X4=ee.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,J4=ee.span`
  font-size: 24px;
`;function Z4(){return P.jsx(X4,{children:P.jsx(J4,{children:"Loading..."})})}const eF=ee.div`
      height: 100%;
      display: flex;
      flex-direction: column;
        align-items: center;
      width: 420px;
      padding: 50px 0px;
    `,tF=ee.h1`
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    `,nF=ee.form`
        
        margin-top: 50px;
    `,Lo=ee.input`
      padding: 10px 20px;
      margin: 5px 0px;
      border-radius: 10px;
      width: 100%;
      &[type="submit"] {
        cursor : pointer;
        &:hover{
          opacity: 0.8;
        }
      }
    `,rF=ee.button`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,iF=ee.img`
    height: 25px;
`;function vR(){const t=so(),e=async()=>{try{const n=new Zn;await rT(qn,n),t("/")}catch(n){console.log(n)}finally{}};return P.jsx(P.Fragment,{children:P.jsxs(rF,{onClick:e,children:[P.jsx(iF,{src:"/src/img/github-mark.svg"}),"Continue with Github"]})})}const sF=ee.button`
  margin-top: 20px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,oF=ee.img`
    height: 25px;
`;function _R(){const t=so(),e=async()=>{try{const n=new Jn;await rT(qn,n),t("/")}catch(n){console.log(n)}finally{}};return P.jsx(P.Fragment,{children:P.jsxs(sF,{onClick:e,children:[P.jsx(oF,{src:"/src/img/googleLogo.svg"}),"Continue with Google"]})})}function aF(){const[t,e]=C.useState(!0),[n,r]=C.useState(""),[i,s]=C.useState(""),[o,a]=C.useState(""),[l,u]=C.useState(""),[c,h]=C.useState(""),[d,p]=C.useState(!1),v=so(),_=g=>{const{target:{name:f,value:y}}=g;f==="username"?r(y):f==="email"?s(y):f==="password"?a(y):f==="passwordConfirm"&&(p(o===y),u(y))},w=async g=>{if(n===""||i===""||o===""||!d){alert("모든 입력을 확인해주세요");return}h(""),g.preventDefault();try{const f=await $2(qn,i,o);console.log(f.user),await q1(f.user,{displayName:n}),v("/")}catch(f){f.message==="Firebase: Error (auth/email-already-in-use)."?h("동일한 이메일이 존재합니다."):f.message==="Firebase: Error (auth/invalid-email)."?h("이메일 형식이 올바르지 않습니다."):f.message==="Firebase: Password should be at least 6 characters (auth/weak-password)."?h("비밀번호는 6자리 이상이어야 합니다."):f.message==="Firebase: Error (auth/operation-not-allowed)."?h("이메일/비밀번호 계정이 활성화되지 않았습니다."):h("알 수 없는 에러가 발생했습니다."),alert(c)}finally{e(!1)}};return P.jsxs(eF,{children:[P.jsx(tF,{children:"회원가입"}),P.jsxs(nF,{onSubmit:w,children:[P.jsx(Lo,{name:"username",placeholder:"Username",type:"text",required:!0,value:n,onChange:_}),P.jsx(Lo,{name:"email",placeholder:"Email",type:"text",required:!0,value:i,onChange:_}),P.jsx(Lo,{name:"password",placeholder:"Password",type:"password",required:!0,value:o,onChange:_}),P.jsx(Lo,{name:"passwordConfirm",placeholder:"Password Confirm",type:"password",required:!0,value:l,onChange:_}),P.jsx(Lo,{type:"submit",value:t?"Create Account":"Loding..."})]}),d?null:P.jsx("span",{children:"비밀번호가 일치하지 않습니다 다시한번 확인해주세요"}),P.jsx(vR,{}),P.jsx(_R,{})]})}function lF({children:t}){return C.useEffect(()=>{const e=qn.onAuthStateChanged(n=>{n===null&&(window.location.href="/login")});return()=>e()},[]),t}const uF=ee.div`
      height: 100%;
      display: flex;
      flex-direction: column;
        align-items: center;
      width: 420px;
      padding: 50px 0px;
    `,cF=ee.h1`
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    `,hF=ee.form`
        
        margin-top: 50px;
    `,Wd=ee.input`
      padding: 10px 20px;
      margin: 5px 0px;
      border-radius: 10px;
      width: 100%;
      &[type="submit"] {
        cursor : pointer;
        &:hover{
          opacity: 0.8;
        }
      }
    `,dF=ee.div`
      margin-top: 20px;
        a {
            color: #0095f6;
            margin-left: 5px;
            font-weight: 600;
            text-decoration: none;
        }
`;function fF(){const[t,e]=C.useState(!0),[n,r]=C.useState(""),[i,s]=C.useState(""),[o,a]=C.useState(""),l=so(),u=h=>{const{target:{name:d,value:p}}=h;d==="email"?r(p):d==="password"&&s(p)},c=async h=>{if(n===""||i===""){alert("모든 입력을 확인해주세요");return}a(""),h.preventDefault();try{e(!0),await j2(qn,n,i),l("/")}catch(d){a(d.message),alert(o)}finally{e(!1)}};return P.jsxs(uF,{children:[P.jsx(cF,{children:"LOGIN INTO"}),P.jsxs(hF,{onSubmit:c,children:[P.jsx(Wd,{name:"email",placeholder:"Email",type:"text",required:!0,value:n,onChange:u}),P.jsx(Wd,{name:"password",placeholder:"Password",type:"password",required:!0,value:i,onChange:u}),P.jsx(Wd,{type:"submit",value:t?"Log In":"Loding..."})]}),P.jsx(vR,{}),P.jsx(_R,{}),P.jsxs(dF,{children:["Don't have an account?"," ",P.jsx(Wf,{to:"/create-account",children:"Create one →"})]})]})}const pF=gP([{path:"/",element:P.jsxs(lF,{children:[" ",P.jsx(S4,{})," "]}),children:[{path:"",element:P.jsx(z4,{})},{path:"profile",element:P.jsx(Y4,{})}]},{path:"/create-account",element:P.jsx(aF,{})},{path:"login",element:P.jsx(fF,{})}]),mF=pR`
  ${yR};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,gF=ee.div`
    display: flex;
    height: 100vh;
    justify-content: center;
  
  
`;function yF(){const[t,e]=C.useState(!0),n=()=>{qn.authStateReady(),e(!1)};return C.useEffect(()=>{n()},[]),P.jsxs(gF,{children:[P.jsx(mF,{}),t?P.jsx(Z4,{}):P.jsx(aP,{router:pF})]})}qd.createRoot(document.getElementById("root")).render(P.jsx(yF,{}));
