(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Zf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Et={},io=[],zi=()=>{},Xg=()=>!1,Mc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qf=t=>t.startsWith("onUpdate:"),gn=Object.assign,ed=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zx=Object.prototype.hasOwnProperty,dt=(t,e)=>zx.call(t,e),it=Array.isArray,fa=t=>yc(t)==="[object Map]",Vx=t=>yc(t)==="[object Set]",et=t=>typeof t=="function",on=t=>typeof t=="string",Io=t=>typeof t=="symbol",Wt=t=>t!==null&&typeof t=="object",qg=t=>(Wt(t)||et(t))&&et(t.then)&&et(t.catch),Gx=Object.prototype.toString,yc=t=>Gx.call(t),Hx=t=>yc(t).slice(8,-1),Wx=t=>yc(t)==="[object Object]",td=t=>on(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,da=Zf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Xx=/-\w/g,Gs=bc(t=>t.replace(Xx,e=>e.slice(1).toUpperCase())),qx=/\B([A-Z])/g,wr=bc(t=>t.replace(qx,"-$1").toLowerCase()),Yg=bc(t=>t.charAt(0).toUpperCase()+t.slice(1)),vu=bc(t=>t?`on${Yg(t)}`:""),Os=(t,e)=>!Object.is(t,e),xu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Yx=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let em;const Ec=()=>em||(em=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nd(t){if(it(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=on(i)?Jx(i):nd(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(on(t)||Wt(t))return t}const jx=/;(?![^(]*\))/g,$x=/:([^]+)/,Kx=/\/\*[^]*?\*\//g;function Jx(t){const e={};return t.replace(Kx,"").split(jx).forEach(n=>{if(n){const i=n.split($x);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function id(t){let e="";if(on(t))e=t;else if(it(t))for(let n=0;n<t.length;n++){const i=id(t[n]);i&&(e+=i+" ")}else if(Wt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qx=Zf(Zx);function $g(t){return!!t||t===""}let Dn;class e2{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dn,!e&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dn;try{return Dn=this,e()}finally{Dn=n}}}on(){++this._on===1&&(this.prevScope=Dn,Dn=this)}off(){this._on>0&&--this._on===0&&(Dn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function t2(){return Dn}let wt;const Su=new WeakSet;class Kg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dn&&Dn.active&&Dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Su.has(this)&&(Su.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tm(this),Qg(this);const e=wt,n=vi;wt=this,vi=!0;try{return this.fn()}finally{e_(this),wt=e,vi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)od(e);this.deps=this.depsTail=void 0,tm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Su.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mh(this)&&this.run()}get dirty(){return Mh(this)}}let Jg=0,pa,ma;function Zg(t,e=!1){if(t.flags|=8,e){t.next=ma,ma=t;return}t.next=pa,pa=t}function sd(){Jg++}function rd(){if(--Jg>0)return;if(ma){let e=ma;for(ma=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pa;){let e=pa;for(pa=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Qg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function e_(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),od(i),n2(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Mh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(t_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function t_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ca)||(t.globalVersion=Ca,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Mh(t))))return;t.flags|=2;const e=t.dep,n=wt,i=vi;wt=t,vi=!0;try{Qg(t);const s=t.fn(t._value);(e.version===0||Os(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{wt=n,vi=i,e_(t),t.flags&=-3}}function od(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)od(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function n2(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vi=!0;const n_=[];function ds(){n_.push(vi),vi=!1}function ps(){const t=n_.pop();vi=t===void 0?!0:t}function tm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=wt;wt=void 0;try{e()}finally{wt=n}}}let Ca=0;class i2{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ad{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!wt||!vi||wt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==wt)n=this.activeLink=new i2(wt,this),wt.deps?(n.prevDep=wt.depsTail,wt.depsTail.nextDep=n,wt.depsTail=n):wt.deps=wt.depsTail=n,i_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=wt.depsTail,n.nextDep=void 0,wt.depsTail.nextDep=n,wt.depsTail=n,wt.deps===n&&(wt.deps=i)}return n}trigger(e){this.version++,Ca++,this.notify(e)}notify(e){sd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rd()}}}function i_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)i_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const yh=new WeakMap,Sr=Symbol(""),bh=Symbol(""),Ra=Symbol("");function fn(t,e,n){if(vi&&wt){let i=yh.get(t);i||yh.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new ad),s.map=i,s.key=n),s.track()}}function ss(t,e,n,i,s,r){const o=yh.get(t);if(!o){Ca++;return}const a=l=>{l&&l.trigger()};if(sd(),e==="clear")o.forEach(a);else{const l=it(t),c=l&&td(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Ra||!Io(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ra)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Sr)),fa(t)&&a(o.get(bh)));break;case"delete":l||(a(o.get(Sr)),fa(t)&&a(o.get(bh)));break;case"set":fa(t)&&a(o.get(Sr));break}}rd()}function Ir(t){const e=ft(t);return e===t?e:(fn(e,"iterate",Ra),xi(t)?e:e.map(ms))}function ld(t){return fn(t=ft(t),"iterate",Ra),t}function Cs(t,e){return Hs(t)?so(t)?Pa(ms(e)):Pa(e):ms(e)}const s2={__proto__:null,[Symbol.iterator](){return Mu(this,Symbol.iterator,t=>Cs(this,t))},concat(...t){return Ir(this).concat(...t.map(e=>it(e)?Ir(e):e))},entries(){return Mu(this,"entries",t=>(t[1]=Cs(this,t[1]),t))},every(t,e){return Ki(this,"every",t,e,void 0,arguments)},filter(t,e){return Ki(this,"filter",t,e,n=>n.map(i=>Cs(this,i)),arguments)},find(t,e){return Ki(this,"find",t,e,n=>Cs(this,n),arguments)},findIndex(t,e){return Ki(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ki(this,"findLast",t,e,n=>Cs(this,n),arguments)},findLastIndex(t,e){return Ki(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ki(this,"forEach",t,e,void 0,arguments)},includes(...t){return yu(this,"includes",t)},indexOf(...t){return yu(this,"indexOf",t)},join(t){return Ir(this).join(t)},lastIndexOf(...t){return yu(this,"lastIndexOf",t)},map(t,e){return Ki(this,"map",t,e,void 0,arguments)},pop(){return Yo(this,"pop")},push(...t){return Yo(this,"push",t)},reduce(t,...e){return nm(this,"reduce",t,e)},reduceRight(t,...e){return nm(this,"reduceRight",t,e)},shift(){return Yo(this,"shift")},some(t,e){return Ki(this,"some",t,e,void 0,arguments)},splice(...t){return Yo(this,"splice",t)},toReversed(){return Ir(this).toReversed()},toSorted(t){return Ir(this).toSorted(t)},toSpliced(...t){return Ir(this).toSpliced(...t)},unshift(...t){return Yo(this,"unshift",t)},values(){return Mu(this,"values",t=>Cs(this,t))}};function Mu(t,e,n){const i=ld(t),s=i[e]();return i!==t&&!xi(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const r2=Array.prototype;function Ki(t,e,n,i,s,r){const o=ld(t),a=o!==t&&!xi(t),l=o[e];if(l!==r2[e]){const h=l.apply(t,r);return a?ms(h):h}let c=n;o!==t&&(a?c=function(h,f){return n.call(this,Cs(t,h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function nm(t,e,n,i){const s=ld(t);let r=n;return s!==t&&(xi(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Cs(t,a),l,t)}),s[e](r,...i)}function yu(t,e,n){const i=ft(t);fn(i,"iterate",Ra);const s=i[e](...n);return(s===-1||s===!1)&&hd(n[0])?(n[0]=ft(n[0]),i[e](...n)):s}function Yo(t,e,n=[]){ds(),sd();const i=ft(t)[e].apply(t,n);return rd(),ps(),i}const o2=Zf("__proto__,__v_isRef,__isVue"),s_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Io));function a2(t){Io(t)||(t=String(t));const e=ft(this);return fn(e,"has",t),e.hasOwnProperty(t)}class r_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?_2:c_:r?l_:a_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=it(e);if(!s){let l;if(o&&(l=s2[n]))return l;if(n==="hasOwnProperty")return a2}const a=Reflect.get(e,n,mn(e)?e:i);if((Io(n)?s_.has(n):o2(n))||(s||fn(e,"get",n),r))return a;if(mn(a)){const l=o&&td(n)?a:a.value;return s&&Wt(l)?Th(l):l}return Wt(a)?s?Th(a):Tc(a):a}}class o_ extends r_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=it(e)&&td(n);if(!this._isShallow){const c=Hs(r);if(!xi(i)&&!Hs(i)&&(r=ft(r),i=ft(i)),!o&&mn(r)&&!mn(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:dt(e,n),l=Reflect.set(e,n,i,mn(e)?e:s);return e===ft(s)&&(a?Os(i,r)&&ss(e,"set",n,i):ss(e,"add",n,i)),l}deleteProperty(e,n){const i=dt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&ss(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Io(n)||!s_.has(n))&&fn(e,"has",n),i}ownKeys(e){return fn(e,"iterate",it(e)?"length":Sr),Reflect.ownKeys(e)}}class l2 extends r_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c2=new o_,u2=new l2,h2=new o_(!0);const Eh=t=>t,ll=t=>Reflect.getPrototypeOf(t);function f2(t,e,n){return function(...i){const s=this.__v_raw,r=ft(s),o=fa(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Eh:e?Pa:ms;return!e&&fn(r,"iterate",l?bh:Sr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function cl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function d2(t,e){const n={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);t||(Os(s,a)&&fn(o,"get",s),fn(o,"get",a));const{has:l}=ll(o),c=e?Eh:t?Pa:ms;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&fn(ft(s),"iterate",Sr),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return t||(Os(s,a)&&fn(o,"has",s),fn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Eh:t?Pa:ms;return!t&&fn(l,"iterate",Sr),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return gn(n,t?{add:cl("add"),set:cl("set"),delete:cl("delete"),clear:cl("clear")}:{add(s){!e&&!xi(s)&&!Hs(s)&&(s=ft(s));const r=ft(this);return ll(r).has.call(r,s)||(r.add(s),ss(r,"add",s,s)),this},set(s,r){!e&&!xi(r)&&!Hs(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=ll(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Os(r,u)&&ss(o,"set",s,r):ss(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=ll(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ss(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&ss(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=f2(s,t,e)}),n}function cd(t,e){const n=d2(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(dt(n,s)&&s in i?n:i,s,r)}const p2={get:cd(!1,!1)},m2={get:cd(!1,!0)},g2={get:cd(!0,!1)};const a_=new WeakMap,l_=new WeakMap,c_=new WeakMap,_2=new WeakMap;function v2(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x2(t){return t.__v_skip||!Object.isExtensible(t)?0:v2(Hx(t))}function Tc(t){return Hs(t)?t:ud(t,!1,c2,p2,a_)}function S2(t){return ud(t,!1,h2,m2,l_)}function Th(t){return ud(t,!0,u2,g2,c_)}function ud(t,e,n,i,s){if(!Wt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=x2(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function so(t){return Hs(t)?so(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function xi(t){return!!(t&&t.__v_isShallow)}function hd(t){return t?!!t.__v_raw:!1}function ft(t){const e=t&&t.__v_raw;return e?ft(e):t}function Ah(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&jg(t,"__v_skip",!0),t}const ms=t=>Wt(t)?Tc(t):t,Pa=t=>Wt(t)?Th(t):t;function mn(t){return t?t.__v_isRef===!0:!1}function Ii(t){return M2(t,!1)}function M2(t,e){return mn(t)?t:new y2(t,e)}class y2{constructor(e,n){this.dep=new ad,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ft(e),this._value=n?e:ms(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||xi(e)||Hs(e);e=i?e:ft(e),Os(e,n)&&(this._rawValue=e,this._value=i?e:ms(e),this.dep.trigger())}}function b2(t){return mn(t)?t.value:t}const E2={get:(t,e,n)=>e==="__v_raw"?t:b2(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return mn(s)&&!mn(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function u_(t){return so(t)?t:new Proxy(t,E2)}class T2{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ad(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&wt!==this)return Zg(this,!0),!0}get value(){const e=this.dep.track();return t_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function A2(t,e,n=!1){let i,s;return et(t)?i=t:(i=t.get,s=t.set),new T2(i,s,n)}const ul={},ic=new WeakMap;let hr;function w2(t,e=!1,n=hr){if(n){let i=ic.get(n);i||ic.set(n,i=[]),i.push(t)}}function C2(t,e,n=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=v=>s?v:xi(v)||s===!1||s===0?rs(v,1):rs(v);let u,h,f,d,_=!1,x=!1;if(mn(t)?(h=()=>t.value,_=xi(t)):so(t)?(h=()=>c(t),_=!0):it(t)?(x=!0,_=t.some(v=>so(v)||xi(v)),h=()=>t.map(v=>{if(mn(v))return v.value;if(so(v))return c(v);if(et(v))return l?l(v,2):v()})):et(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){ds();try{f()}finally{ps()}}const v=hr;hr=u;try{return l?l(t,3,[d]):t(d)}finally{hr=v}}:h=zi,e&&s){const v=h,w=s===!0?1/0:s;h=()=>rs(v(),w)}const m=t2(),p=()=>{u.stop(),m&&m.active&&ed(m.effects,u)};if(r&&e){const v=e;e=(...w)=>{v(...w),p()}}let T=x?new Array(t.length).fill(ul):ul;const S=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const w=u.run();if(s||_||(x?w.some((R,P)=>Os(R,T[P])):Os(w,T))){f&&f();const R=hr;hr=u;try{const P=[w,T===ul?void 0:x&&T[0]===ul?[]:T,d];T=w,l?l(e,3,P):e(...P)}finally{hr=R}}}else u.run()};return a&&a(S),u=new Kg(h),u.scheduler=o?()=>o(S,!1):S,d=v=>w2(v,!1,u),f=u.onStop=()=>{const v=ic.get(u);if(v){if(l)l(v,4);else for(const w of v)w();ic.delete(u)}},e?i?S(!0):T=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function rs(t,e=1/0,n){if(e<=0||!Wt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,mn(t))rs(t.value,e,n);else if(it(t))for(let i=0;i<t.length;i++)rs(t[i],e,n);else if(Vx(t)||fa(t))t.forEach(i=>{rs(i,e,n)});else if(Wx(t)){for(const i in t)rs(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&rs(t[i],e,n)}return t}function Ka(t,e,n,i){try{return i?t(...i):t()}catch(s){Ac(s,e,n)}}function Hi(t,e,n,i){if(et(t)){const s=Ka(t,e,n,i);return s&&qg(s)&&s.catch(r=>{Ac(r,e,n)}),s}if(it(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Hi(t[r],e,n,i));return s}}function Ac(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){ds(),Ka(r,null,10,[t,l,c]),ps();return}}R2(t,n,s,i,o)}function R2(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const bn=[];let Di=-1;const ro=[];let Rs=null,Qr=0;const h_=Promise.resolve();let sc=null;function P2(t){const e=sc||h_;return t?e.then(this?t.bind(this):t):e}function L2(t){let e=Di+1,n=bn.length;for(;e<n;){const i=e+n>>>1,s=bn[i],r=La(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function fd(t){if(!(t.flags&1)){const e=La(t),n=bn[bn.length-1];!n||!(t.flags&2)&&e>=La(n)?bn.push(t):bn.splice(L2(e),0,t),t.flags|=1,f_()}}function f_(){sc||(sc=h_.then(p_))}function D2(t){it(t)?ro.push(...t):Rs&&t.id===-1?Rs.splice(Qr+1,0,t):t.flags&1||(ro.push(t),t.flags|=1),f_()}function im(t,e,n=Di+1){for(;n<bn.length;n++){const i=bn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;bn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function d_(t){if(ro.length){const e=[...new Set(ro)].sort((n,i)=>La(n)-La(i));if(ro.length=0,Rs){Rs.push(...e);return}for(Rs=e,Qr=0;Qr<Rs.length;Qr++){const n=Rs[Qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rs=null,Qr=0}}const La=t=>t.id==null?t.flags&2?-1:1/0:t.id;function p_(t){try{for(Di=0;Di<bn.length;Di++){const e=bn[Di];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Di<bn.length;Di++){const e=bn[Di];e&&(e.flags&=-2)}Di=-1,bn.length=0,d_(),sc=null,(bn.length||ro.length)&&p_()}}let oi=null,m_=null;function rc(t){const e=oi;return oi=t,m_=t&&t.type.__scopeId||null,e}function I2(t,e=oi,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&dm(-1);const r=rc(e);let o;try{o=t(...s)}finally{rc(r),i._d&&dm(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function U2(t,e){if(oi===null)return t;const n=Dc(oi),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&(et(r)&&(r={mounted:r,updated:r}),r.deep&&rs(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function tr(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ds(),Hi(l,n,8,[t.el,a,t,e]),ps())}}const N2=Symbol("_vte"),F2=t=>t.__isTeleport,O2=Symbol("_leaveCb");function dd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,dd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ja(t,e){return et(t)?gn({name:t.name},e,{setup:t}):t}function g_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const oc=new WeakMap;function ga(t,e,n,i,s=!1){if(it(t)){t.forEach((_,x)=>ga(_,e&&(it(e)?e[x]:e),n,i,s));return}if(_a(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ga(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Dc(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,h=a.setupState,f=ft(h),d=h===Et?Xg:_=>dt(f,_);if(c!=null&&c!==l){if(sm(e),on(c))u[c]=null,d(c)&&(h[c]=null);else if(mn(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(et(l))Ka(l,a,12,[o,u]);else{const _=on(l),x=mn(l);if(_||x){const m=()=>{if(t.f){const p=_?d(l)?h[l]:u[l]:l.value;if(s)it(p)&&ed(p,r);else if(it(p))p.includes(r)||p.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const T=[r];l.value=T,t.k&&(u[t.k]=T)}}else _?(u[l]=o,d(l)&&(h[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),oc.delete(t)};p.id=-1,oc.set(t,p),Xn(p,n)}else sm(t),m()}}}function sm(t){const e=oc.get(t);e&&(e.flags|=8,oc.delete(t))}Ec().requestIdleCallback;Ec().cancelIdleCallback;const _a=t=>!!t.type.__asyncLoader,__=t=>t.type.__isKeepAlive;function B2(t,e){v_(t,"a",e)}function k2(t,e){v_(t,"da",e)}function v_(t,e,n=En){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)__(s.parent.vnode)&&z2(i,e,n,s),s=s.parent}}function z2(t,e,n,i){const s=wc(e,t,i,!0);Rc(()=>{ed(i[e],s)},n)}function wc(t,e,n=En,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ds();const a=Qa(n),l=Hi(e,n,t,o);return a(),ps(),l});return i?s.unshift(r):s.push(r),r}}const xs=t=>(e,n=En)=>{(!Ia||t==="sp")&&wc(t,(...i)=>e(...i),n)},V2=xs("bm"),Cc=xs("m"),G2=xs("bu"),H2=xs("u"),pd=xs("bum"),Rc=xs("um"),W2=xs("sp"),X2=xs("rtg"),q2=xs("rtc");function Y2(t,e=En){wc("ec",t,e)}const j2=Symbol.for("v-ndc"),wh=t=>t?k_(t)?Dc(t):wh(t.parent):null,va=gn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wh(t.parent),$root:t=>wh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>S_(t),$forceUpdate:t=>t.f||(t.f=()=>{fd(t.update)}),$nextTick:t=>t.n||(t.n=P2.bind(t.proxy)),$watch:t=>o3.bind(t)}),bu=(t,e)=>t!==Et&&!t.__isScriptSetup&&dt(t,e),$2={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(bu(i,e))return o[e]=1,i[e];if(s!==Et&&dt(s,e))return o[e]=2,s[e];if(dt(r,e))return o[e]=3,r[e];if(n!==Et&&dt(n,e))return o[e]=4,n[e];Ch&&(o[e]=0)}}const c=va[e];let u,h;if(c)return e==="$attrs"&&fn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Et&&dt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,dt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return bu(s,e)?(s[e]=n,!0):i!==Et&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Et&&a[0]!=="$"&&dt(t,a)||bu(e,a)||dt(r,a)||dt(i,a)||dt(va,a)||dt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rm(t){return it(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ch=!0;function K2(t){const e=S_(t),n=t.proxy,i=t.ctx;Ch=!1,e.beforeCreate&&om(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:S,unmounted:v,render:w,renderTracked:R,renderTriggered:P,errorCaptured:V,serverPrefetch:y,expose:A,inheritAttrs:N,components:Q,directives:F,filters:H}=e;if(c&&J2(c,i,null),o)for(const U in o){const j=o[U];et(j)&&(i[U]=j.bind(n))}if(s){const U=s.call(n,n);Wt(U)&&(t.data=Tc(U))}if(Ch=!0,r)for(const U in r){const j=r[U],ce=et(j)?j.bind(n,n):et(j.get)?j.get.bind(n,n):zi,he=!et(j)&&et(j.set)?j.set.bind(n):zi,ae=k3({get:ce,set:he});Object.defineProperty(i,U,{enumerable:!0,configurable:!0,get:()=>ae.value,set:Re=>ae.value=Re})}if(a)for(const U in a)x_(a[U],i,n,U);if(l){const U=et(l)?l.call(n):l;Reflect.ownKeys(U).forEach(j=>{i3(j,U[j])})}u&&om(u,t,"c");function k(U,j){it(j)?j.forEach(ce=>U(ce.bind(n))):j&&U(j.bind(n))}if(k(V2,h),k(Cc,f),k(G2,d),k(H2,_),k(B2,x),k(k2,m),k(Y2,V),k(q2,R),k(X2,P),k(pd,T),k(Rc,v),k(W2,y),it(A))if(A.length){const U=t.exposed||(t.exposed={});A.forEach(j=>{Object.defineProperty(U,j,{get:()=>n[j],set:ce=>n[j]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});w&&t.render===zi&&(t.render=w),N!=null&&(t.inheritAttrs=N),Q&&(t.components=Q),F&&(t.directives=F),y&&g_(t)}function J2(t,e,n=zi){it(t)&&(t=Rh(t));for(const i in t){const s=t[i];let r;Wt(s)?"default"in s?r=Gl(s.from||i,s.default,!0):r=Gl(s.from||i):r=Gl(s),mn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function om(t,e,n){Hi(it(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function x_(t,e,n,i){let s=i.includes(".")?b_(n,i):()=>n[i];if(on(t)){const r=e[t];et(r)&&xa(s,r)}else if(et(t))xa(s,t.bind(n));else if(Wt(t))if(it(t))t.forEach(r=>x_(r,e,n,i));else{const r=et(t.handler)?t.handler.bind(n):e[t.handler];et(r)&&xa(s,r,t)}}function S_(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ac(l,c,o,!0)),ac(l,e,o)),Wt(e)&&r.set(e,l),l}function ac(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ac(t,r,n,!0),s&&s.forEach(o=>ac(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Z2[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Z2={data:am,props:lm,emits:lm,methods:oa,computed:oa,beforeCreate:xn,created:xn,beforeMount:xn,mounted:xn,beforeUpdate:xn,updated:xn,beforeDestroy:xn,beforeUnmount:xn,destroyed:xn,unmounted:xn,activated:xn,deactivated:xn,errorCaptured:xn,serverPrefetch:xn,components:oa,directives:oa,watch:e3,provide:am,inject:Q2};function am(t,e){return e?t?function(){return gn(et(t)?t.call(this,this):t,et(e)?e.call(this,this):e)}:e:t}function Q2(t,e){return oa(Rh(t),Rh(e))}function Rh(t){if(it(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xn(t,e){return t?[...new Set([].concat(t,e))]:e}function oa(t,e){return t?gn(Object.create(null),t,e):e}function lm(t,e){return t?it(t)&&it(e)?[...new Set([...t,...e])]:gn(Object.create(null),rm(t),rm(e??{})):e}function e3(t,e){if(!t)return e;if(!e)return t;const n=gn(Object.create(null),t);for(const i in e)n[i]=xn(t[i],e[i]);return n}function M_(){return{app:null,config:{isNativeTag:Xg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t3=0;function n3(t,e){return function(i,s=null){et(i)||(i=gn({},i)),s!=null&&!Wt(s)&&(s=null);const r=M_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:t3++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:z3,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&et(u.install)?(o.add(u),u.install(c,...h)):et(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||li(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Dc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=oo;oo=c;try{return u()}finally{oo=h}}};return c}}let oo=null;function i3(t,e){if(En){let n=En.provides;const i=En.parent&&En.parent.provides;i===n&&(n=En.provides=Object.create(i)),n[t]=e}}function Gl(t,e,n=!1){const i=I3();if(i||oo){let s=oo?oo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&et(e)?e.call(i&&i.proxy):e}}const s3=Symbol.for("v-scx"),r3=()=>Gl(s3);function xa(t,e,n){return y_(t,e,n)}function y_(t,e,n=Et){const{immediate:i,deep:s,flush:r,once:o}=n,a=gn({},n),l=e&&i||!e&&r!=="post";let c;if(Ia){if(r==="sync"){const d=r3();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=zi,d.resume=zi,d.pause=zi,d}}const u=En;a.call=(d,_,x)=>Hi(d,u,_,x);let h=!1;r==="post"?a.scheduler=d=>{Xn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,_)=>{_?d():fd(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=C2(t,e,a);return Ia&&(c?c.push(f):l&&f()),f}function o3(t,e,n){const i=this.proxy,s=on(t)?t.includes(".")?b_(i,t):()=>i[t]:t.bind(i,i);let r;et(e)?r=e:(r=e.handler,n=e);const o=Qa(this),a=y_(s,r.bind(i),n);return o(),a}function b_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const a3=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gs(e)}Modifiers`]||t[`${wr(e)}Modifiers`];function l3(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Et;let s=n;const r=e.startsWith("update:"),o=r&&a3(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>on(u)?u.trim():u)),o.number&&(s=n.map(Yx)));let a,l=i[a=vu(e)]||i[a=vu(Gs(e))];!l&&r&&(l=i[a=vu(wr(e))]),l&&Hi(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hi(c,t,6,s)}}const c3=new WeakMap;function E_(t,e,n=!1){const i=n?c3:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!et(t)){const l=c=>{const u=E_(c,e,!0);u&&(a=!0,gn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Wt(t)&&i.set(t,null),null):(it(r)?r.forEach(l=>o[l]=null):gn(o,r),Wt(t)&&i.set(t,o),o)}function Pc(t,e){return!t||!Mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,wr(e))||dt(t,e))}function cm(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:x}=t,m=rc(t);let p,T;try{if(n.shapeFlag&4){const v=s||i,w=v;p=Ni(c.call(w,v,u,h,d,f,_)),T=a}else{const v=e;p=Ni(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),T=e.props?a:u3(a)}}catch(v){Sa.length=0,Ac(v,t,1),p=li(Ws)}let S=p;if(T&&x!==!1){const v=Object.keys(T),{shapeFlag:w}=S;v.length&&w&7&&(r&&v.some(Qf)&&(T=h3(T,r)),S=fo(S,T,!1,!0))}return n.dirs&&(S=fo(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&dd(S,n.transition),p=S,rc(m),p}const u3=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mc(n))&&((e||(e={}))[n]=t[n]);return e},h3=(t,e)=>{const n={};for(const i in t)(!Qf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function f3(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?um(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Pc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?um(i,o,c):!0:!!o;return!1}function um(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Pc(n,r))return!0}return!1}function d3({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const T_={},A_=()=>Object.create(T_),w_=t=>Object.getPrototypeOf(t)===T_;function p3(t,e,n,i=!1){const s={},r=A_();t.propsDefaults=Object.create(null),C_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:S2(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function m3(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ft(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Pc(t.emitsOptions,f))continue;const d=e[f];if(l)if(dt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=Gs(f);s[_]=Ph(l,a,_,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{C_(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!dt(e,h)&&((u=wr(h))===h||!dt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ph(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!dt(e,h))&&(delete r[h],c=!0)}c&&ss(t.attrs,"set","")}function C_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(da(l))continue;const c=e[l];let u;s&&dt(s,u=Gs(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Pc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(n),c=a||Et;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ph(s,l,h,c[h],t,!dt(c,h))}}return o}function Ph(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&et(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Qa(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===wr(n))&&(i=!0))}return i}const g3=new WeakMap;function R_(t,e,n=!1){const i=n?g3:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!et(t)){const u=h=>{l=!0;const[f,d]=R_(h,e,!0);gn(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Wt(t)&&i.set(t,io),io;if(it(r))for(let u=0;u<r.length;u++){const h=Gs(r[u]);hm(h)&&(o[h]=Et)}else if(r)for(const u in r){const h=Gs(u);if(hm(h)){const f=r[u],d=o[h]=it(f)||et(f)?{type:f}:gn({},f),_=d.type;let x=!1,m=!0;if(it(_))for(let p=0;p<_.length;++p){const T=_[p],S=et(T)&&T.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(m=!1)}else x=et(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||dt(d,"default"))&&a.push(h)}}const c=[o,a];return Wt(t)&&i.set(t,c),c}function hm(t){return t[0]!=="$"&&!da(t)}const md=t=>t==="_"||t==="_ctx"||t==="$stable",gd=t=>it(t)?t.map(Ni):[Ni(t)],_3=(t,e,n)=>{if(e._n)return e;const i=I2((...s)=>gd(e(...s)),n);return i._c=!1,i},P_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(md(s))continue;const r=t[s];if(et(r))e[s]=_3(s,r,i);else if(r!=null){const o=gd(r);e[s]=()=>o}}},L_=(t,e)=>{const n=gd(e);t.slots.default=()=>n},D_=(t,e,n)=>{for(const i in e)(n||!md(i))&&(t[i]=e[i])},v3=(t,e,n)=>{const i=t.slots=A_();if(t.vnode.shapeFlag&32){const s=e._;s?(D_(i,e,n),n&&jg(i,"_",s,!0)):P_(e,i)}else e&&L_(t,e)},x3=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:D_(s,e,n):(r=!e.$stable,P_(e,s)),o=e}else e&&(L_(t,e),o={default:1});if(r)for(const a in s)!md(a)&&o[a]==null&&delete s[a]},Xn=E3;function S3(t){return M3(t)}function M3(t,e){const n=Ec();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=zi,insertStaticContent:_}=t,x=(C,D,L,W=null,O=null,q=null,b=void 0,re=null,J=!!D.dynamicChildren)=>{if(C===D)return;C&&!jo(C,D)&&(W=oe(C),Re(C,O,q,!0),C=null),D.patchFlag===-2&&(J=!1,D.dynamicChildren=null);const{type:Z,ref:se,shapeFlag:M}=D;switch(Z){case Lc:m(C,D,L,W);break;case Ws:p(C,D,L,W);break;case Tu:C==null&&T(D,L,W,b);break;case Ui:Q(C,D,L,W,O,q,b,re,J);break;default:M&1?w(C,D,L,W,O,q,b,re,J):M&6?F(C,D,L,W,O,q,b,re,J):(M&64||M&128)&&Z.process(C,D,L,W,O,q,b,re,J,_e)}se!=null&&O?ga(se,C&&C.ref,q,D||C,!D):se==null&&C&&C.ref!=null&&ga(C.ref,null,q,C,!0)},m=(C,D,L,W)=>{if(C==null)i(D.el=a(D.children),L,W);else{const O=D.el=C.el;D.children!==C.children&&c(O,D.children)}},p=(C,D,L,W)=>{C==null?i(D.el=l(D.children||""),L,W):D.el=C.el},T=(C,D,L,W)=>{[C.el,C.anchor]=_(C.children,D,L,W,C.el,C.anchor)},S=({el:C,anchor:D},L,W)=>{let O;for(;C&&C!==D;)O=f(C),i(C,L,W),C=O;i(D,L,W)},v=({el:C,anchor:D})=>{let L;for(;C&&C!==D;)L=f(C),s(C),C=L;s(D)},w=(C,D,L,W,O,q,b,re,J)=>{if(D.type==="svg"?b="svg":D.type==="math"&&(b="mathml"),C==null)R(D,L,W,O,q,b,re,J);else{const Z=C.el&&C.el._isVueCE?C.el:null;try{Z&&Z._beginPatch(),y(C,D,O,q,b,re,J)}finally{Z&&Z._endPatch()}}},R=(C,D,L,W,O,q,b,re)=>{let J,Z;const{props:se,shapeFlag:M,transition:g,dirs:I}=C;if(J=C.el=o(C.type,q,se&&se.is,se),M&8?u(J,C.children):M&16&&V(C.children,J,null,W,O,Eu(C,q),b,re),I&&tr(C,null,W,"created"),P(J,C,C.scopeId,b,W),se){for(const ie in se)ie!=="value"&&!da(ie)&&r(J,ie,null,se[ie],q,W);"value"in se&&r(J,"value",null,se.value,q),(Z=se.onVnodeBeforeMount)&&wi(Z,W,C)}I&&tr(C,null,W,"beforeMount");const Y=y3(O,g);Y&&g.beforeEnter(J),i(J,D,L),((Z=se&&se.onVnodeMounted)||Y||I)&&Xn(()=>{Z&&wi(Z,W,C),Y&&g.enter(J),I&&tr(C,null,W,"mounted")},O)},P=(C,D,L,W,O)=>{if(L&&d(C,L),W)for(let q=0;q<W.length;q++)d(C,W[q]);if(O){let q=O.subTree;if(D===q||N_(q.type)&&(q.ssContent===D||q.ssFallback===D)){const b=O.vnode;P(C,b,b.scopeId,b.slotScopeIds,O.parent)}}},V=(C,D,L,W,O,q,b,re,J=0)=>{for(let Z=J;Z<C.length;Z++){const se=C[Z]=re?Ps(C[Z]):Ni(C[Z]);x(null,se,D,L,W,O,q,b,re)}},y=(C,D,L,W,O,q,b)=>{const re=D.el=C.el;let{patchFlag:J,dynamicChildren:Z,dirs:se}=D;J|=C.patchFlag&16;const M=C.props||Et,g=D.props||Et;let I;if(L&&nr(L,!1),(I=g.onVnodeBeforeUpdate)&&wi(I,L,D,C),se&&tr(D,C,L,"beforeUpdate"),L&&nr(L,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(re,""),Z?A(C.dynamicChildren,Z,re,L,W,Eu(D,O),q):b||j(C,D,re,null,L,W,Eu(D,O),q,!1),J>0){if(J&16)N(re,M,g,L,O);else if(J&2&&M.class!==g.class&&r(re,"class",null,g.class,O),J&4&&r(re,"style",M.style,g.style,O),J&8){const Y=D.dynamicProps;for(let ie=0;ie<Y.length;ie++){const $=Y[ie],Se=M[$],fe=g[$];(fe!==Se||$==="value")&&r(re,$,Se,fe,O,L)}}J&1&&C.children!==D.children&&u(re,D.children)}else!b&&Z==null&&N(re,M,g,L,O);((I=g.onVnodeUpdated)||se)&&Xn(()=>{I&&wi(I,L,D,C),se&&tr(D,C,L,"updated")},W)},A=(C,D,L,W,O,q,b)=>{for(let re=0;re<D.length;re++){const J=C[re],Z=D[re],se=J.el&&(J.type===Ui||!jo(J,Z)||J.shapeFlag&198)?h(J.el):L;x(J,Z,se,null,W,O,q,b,!0)}},N=(C,D,L,W,O)=>{if(D!==L){if(D!==Et)for(const q in D)!da(q)&&!(q in L)&&r(C,q,D[q],null,O,W);for(const q in L){if(da(q))continue;const b=L[q],re=D[q];b!==re&&q!=="value"&&r(C,q,re,b,O,W)}"value"in L&&r(C,"value",D.value,L.value,O)}},Q=(C,D,L,W,O,q,b,re,J)=>{const Z=D.el=C?C.el:a(""),se=D.anchor=C?C.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:I}=D;I&&(re=re?re.concat(I):I),C==null?(i(Z,L,W),i(se,L,W),V(D.children||[],L,se,O,q,b,re,J)):M>0&&M&64&&g&&C.dynamicChildren?(A(C.dynamicChildren,g,L,O,q,b,re),(D.key!=null||O&&D===O.subTree)&&I_(C,D,!0)):j(C,D,L,se,O,q,b,re,J)},F=(C,D,L,W,O,q,b,re,J)=>{D.slotScopeIds=re,C==null?D.shapeFlag&512?O.ctx.activate(D,L,W,b,J):H(D,L,W,O,q,b,J):z(C,D,J)},H=(C,D,L,W,O,q,b)=>{const re=C.component=D3(C,W,O);if(__(C)&&(re.ctx.renderer=_e),U3(re,!1,b),re.asyncDep){if(O&&O.registerDep(re,k,b),!C.el){const J=re.subTree=li(Ws);p(null,J,D,L),C.placeholder=J.el}}else k(re,C,D,L,O,q,b)},z=(C,D,L)=>{const W=D.component=C.component;if(f3(C,D,L))if(W.asyncDep&&!W.asyncResolved){U(W,D,L);return}else W.next=D,W.update();else D.el=C.el,W.vnode=D},k=(C,D,L,W,O,q,b)=>{const re=()=>{if(C.isMounted){let{next:M,bu:g,u:I,parent:Y,vnode:ie}=C;{const Fe=U_(C);if(Fe){M&&(M.el=ie.el,U(C,M,b)),Fe.asyncDep.then(()=>{C.isUnmounted||re()});return}}let $=M,Se;nr(C,!1),M?(M.el=ie.el,U(C,M,b)):M=ie,g&&xu(g),(Se=M.props&&M.props.onVnodeBeforeUpdate)&&wi(Se,Y,M,ie),nr(C,!0);const fe=cm(C),Te=C.subTree;C.subTree=fe,x(Te,fe,h(Te.el),oe(Te),C,O,q),M.el=fe.el,$===null&&d3(C,fe.el),I&&Xn(I,O),(Se=M.props&&M.props.onVnodeUpdated)&&Xn(()=>wi(Se,Y,M,ie),O)}else{let M;const{el:g,props:I}=D,{bm:Y,m:ie,parent:$,root:Se,type:fe}=C,Te=_a(D);nr(C,!1),Y&&xu(Y),!Te&&(M=I&&I.onVnodeBeforeMount)&&wi(M,$,D),nr(C,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(fe);const Fe=C.subTree=cm(C);x(null,Fe,L,W,C,O,q),D.el=Fe.el}if(ie&&Xn(ie,O),!Te&&(M=I&&I.onVnodeMounted)){const Fe=D;Xn(()=>wi(M,$,Fe),O)}(D.shapeFlag&256||$&&_a($.vnode)&&$.vnode.shapeFlag&256)&&C.a&&Xn(C.a,O),C.isMounted=!0,D=L=W=null}};C.scope.on();const J=C.effect=new Kg(re);C.scope.off();const Z=C.update=J.run.bind(J),se=C.job=J.runIfDirty.bind(J);se.i=C,se.id=C.uid,J.scheduler=()=>fd(se),nr(C,!0),Z()},U=(C,D,L)=>{D.component=C;const W=C.vnode.props;C.vnode=D,C.next=null,m3(C,D.props,W,L),x3(C,D.children,L),ds(),im(C),ps()},j=(C,D,L,W,O,q,b,re,J=!1)=>{const Z=C&&C.children,se=C?C.shapeFlag:0,M=D.children,{patchFlag:g,shapeFlag:I}=D;if(g>0){if(g&128){he(Z,M,L,W,O,q,b,re,J);return}else if(g&256){ce(Z,M,L,W,O,q,b,re,J);return}}I&8?(se&16&&ne(Z,O,q),M!==Z&&u(L,M)):se&16?I&16?he(Z,M,L,W,O,q,b,re,J):ne(Z,O,q,!0):(se&8&&u(L,""),I&16&&V(M,L,W,O,q,b,re,J))},ce=(C,D,L,W,O,q,b,re,J)=>{C=C||io,D=D||io;const Z=C.length,se=D.length,M=Math.min(Z,se);let g;for(g=0;g<M;g++){const I=D[g]=J?Ps(D[g]):Ni(D[g]);x(C[g],I,L,null,O,q,b,re,J)}Z>se?ne(C,O,q,!0,!1,M):V(D,L,W,O,q,b,re,J,M)},he=(C,D,L,W,O,q,b,re,J)=>{let Z=0;const se=D.length;let M=C.length-1,g=se-1;for(;Z<=M&&Z<=g;){const I=C[Z],Y=D[Z]=J?Ps(D[Z]):Ni(D[Z]);if(jo(I,Y))x(I,Y,L,null,O,q,b,re,J);else break;Z++}for(;Z<=M&&Z<=g;){const I=C[M],Y=D[g]=J?Ps(D[g]):Ni(D[g]);if(jo(I,Y))x(I,Y,L,null,O,q,b,re,J);else break;M--,g--}if(Z>M){if(Z<=g){const I=g+1,Y=I<se?D[I].el:W;for(;Z<=g;)x(null,D[Z]=J?Ps(D[Z]):Ni(D[Z]),L,Y,O,q,b,re,J),Z++}}else if(Z>g)for(;Z<=M;)Re(C[Z],O,q,!0),Z++;else{const I=Z,Y=Z,ie=new Map;for(Z=Y;Z<=g;Z++){const Me=D[Z]=J?Ps(D[Z]):Ni(D[Z]);Me.key!=null&&ie.set(Me.key,Z)}let $,Se=0;const fe=g-Y+1;let Te=!1,Fe=0;const ue=new Array(fe);for(Z=0;Z<fe;Z++)ue[Z]=0;for(Z=I;Z<=M;Z++){const Me=C[Z];if(Se>=fe){Re(Me,O,q,!0);continue}let Ce;if(Me.key!=null)Ce=ie.get(Me.key);else for($=Y;$<=g;$++)if(ue[$-Y]===0&&jo(Me,D[$])){Ce=$;break}Ce===void 0?Re(Me,O,q,!0):(ue[Ce-Y]=Z+1,Ce>=Fe?Fe=Ce:Te=!0,x(Me,D[Ce],L,null,O,q,b,re,J),Se++)}const ve=Te?b3(ue):io;for($=ve.length-1,Z=fe-1;Z>=0;Z--){const Me=Y+Z,Ce=D[Me],ge=D[Me+1],Ze=Me+1<se?ge.el||ge.placeholder:W;ue[Z]===0?x(null,Ce,L,Ze,O,q,b,re,J):Te&&($<0||Z!==ve[$]?ae(Ce,L,Ze,2):$--)}}},ae=(C,D,L,W,O=null)=>{const{el:q,type:b,transition:re,children:J,shapeFlag:Z}=C;if(Z&6){ae(C.component.subTree,D,L,W);return}if(Z&128){C.suspense.move(D,L,W);return}if(Z&64){b.move(C,D,L,_e);return}if(b===Ui){i(q,D,L);for(let M=0;M<J.length;M++)ae(J[M],D,L,W);i(C.anchor,D,L);return}if(b===Tu){S(C,D,L);return}if(W!==2&&Z&1&&re)if(W===0)re.beforeEnter(q),i(q,D,L),Xn(()=>re.enter(q),O);else{const{leave:M,delayLeave:g,afterLeave:I}=re,Y=()=>{C.ctx.isUnmounted?s(q):i(q,D,L)},ie=()=>{q._isLeaving&&q[O2](!0),M(q,()=>{Y(),I&&I()})};g?g(q,Y,ie):ie()}else i(q,D,L)},Re=(C,D,L,W=!1,O=!1)=>{const{type:q,props:b,ref:re,children:J,dynamicChildren:Z,shapeFlag:se,patchFlag:M,dirs:g,cacheIndex:I}=C;if(M===-2&&(O=!1),re!=null&&(ds(),ga(re,null,L,C,!0),ps()),I!=null&&(D.renderCache[I]=void 0),se&256){D.ctx.deactivate(C);return}const Y=se&1&&g,ie=!_a(C);let $;if(ie&&($=b&&b.onVnodeBeforeUnmount)&&wi($,D,C),se&6)$e(C.component,L,W);else{if(se&128){C.suspense.unmount(L,W);return}Y&&tr(C,null,D,"beforeUnmount"),se&64?C.type.remove(C,D,L,_e,W):Z&&!Z.hasOnce&&(q!==Ui||M>0&&M&64)?ne(Z,D,L,!1,!0):(q===Ui&&M&384||!O&&se&16)&&ne(J,D,L),W&&Pe(C)}(ie&&($=b&&b.onVnodeUnmounted)||Y)&&Xn(()=>{$&&wi($,D,C),Y&&tr(C,null,D,"unmounted")},L)},Pe=C=>{const{type:D,el:L,anchor:W,transition:O}=C;if(D===Ui){Ye(L,W);return}if(D===Tu){v(C);return}const q=()=>{s(L),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(C.shapeFlag&1&&O&&!O.persisted){const{leave:b,delayLeave:re}=O,J=()=>b(L,q);re?re(C.el,q,J):J()}else q()},Ye=(C,D)=>{let L;for(;C!==D;)L=f(C),s(C),C=L;s(D)},$e=(C,D,L)=>{const{bum:W,scope:O,job:q,subTree:b,um:re,m:J,a:Z}=C;fm(J),fm(Z),W&&xu(W),O.stop(),q&&(q.flags|=8,Re(b,C,D,L)),re&&Xn(re,D),Xn(()=>{C.isUnmounted=!0},D)},ne=(C,D,L,W=!1,O=!1,q=0)=>{for(let b=q;b<C.length;b++)Re(C[b],D,L,W,O)},oe=C=>{if(C.shapeFlag&6)return oe(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const D=f(C.anchor||C.el),L=D&&D[N2];return L?f(L):D};let be=!1;const Ne=(C,D,L)=>{C==null?D._vnode&&Re(D._vnode,null,null,!0):x(D._vnode||null,C,D,null,null,null,L),D._vnode=C,be||(be=!0,im(),d_(),be=!1)},_e={p:x,um:Re,m:ae,r:Pe,mt:H,mc:V,pc:j,pbc:A,n:oe,o:t};return{render:Ne,hydrate:void 0,createApp:n3(Ne)}}function Eu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function nr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function y3(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function I_(t,e,n=!1){const i=t.children,s=e.children;if(it(i)&&it(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ps(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&I_(o,a)),a.type===Lc&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ws&&!a.el&&(a.el=o.el)}}function b3(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function U_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:U_(e)}function fm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const N_=t=>t.__isSuspense;function E3(t,e){e&&e.pendingBranch?it(t)?e.effects.push(...t):e.effects.push(t):D2(t)}const Ui=Symbol.for("v-fgt"),Lc=Symbol.for("v-txt"),Ws=Symbol.for("v-cmt"),Tu=Symbol.for("v-stc"),Sa=[];let Yn=null;function Xs(t=!1){Sa.push(Yn=t?null:[])}function T3(){Sa.pop(),Yn=Sa[Sa.length-1]||null}let Da=1;function dm(t,e=!1){Da+=t,t<0&&Yn&&e&&(Yn.hasOnce=!0)}function F_(t){return t.dynamicChildren=Da>0?Yn||io:null,T3(),Da>0&&Yn&&Yn.push(t),t}function Za(t,e,n,i,s,r){return F_(Jt(t,e,n,i,s,r,!0))}function _d(t,e,n,i,s){return F_(li(t,e,n,i,s,!0))}function O_(t){return t?t.__v_isVNode===!0:!1}function jo(t,e){return t.type===e.type&&t.key===e.key}const B_=({key:t})=>t??null,Hl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?on(t)||mn(t)||et(t)?{i:oi,r:t,k:e,f:!!n}:t:null);function Jt(t,e=null,n=null,i=0,s=null,r=t===Ui?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&B_(e),ref:e&&Hl(e),scopeId:m_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:oi};return a?(vd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=on(n)?8:16),Da>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const li=A3;function A3(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===j2)&&(t=Ws),O_(t)){const a=fo(t,e,!0);return n&&vd(a,n),Da>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(t)]=a:Yn.push(a)),a.patchFlag=-2,a}if(B3(t)&&(t=t.__vccOpts),e){e=w3(e);let{class:a,style:l}=e;a&&!on(a)&&(e.class=id(a)),Wt(l)&&(hd(l)&&!it(l)&&(l=gn({},l)),e.style=nd(l))}const o=on(t)?1:N_(t)?128:F2(t)?64:Wt(t)?4:et(t)?2:0;return Jt(t,e,n,i,s,o,r,!0)}function w3(t){return t?hd(t)||w_(t)?gn({},t):t:null}function fo(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?R3(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&B_(c),ref:e&&e.ref?n&&r?it(r)?r.concat(Hl(e)):[r,Hl(e)]:Hl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ui?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fo(t.ssContent),ssFallback:t.ssFallback&&fo(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&dd(u,l.clone(u)),u}function Lh(t=" ",e=0){return li(Lc,null,t,e)}function C3(t="",e=!1){return e?(Xs(),_d(Ws,null,t)):li(Ws,null,t)}function Ni(t){return t==null||typeof t=="boolean"?li(Ws):it(t)?li(Ui,null,t.slice()):O_(t)?Ps(t):li(Lc,null,String(t))}function Ps(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fo(t)}function vd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(it(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),vd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!w_(e)?e._ctx=oi:s===3&&oi&&(oi.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:oi},n=32):(e=String(e),i&64?(n=16,e=[Lh(e)]):n=8);t.children=e,t.shapeFlag|=n}function R3(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=id([e.class,i.class]));else if(s==="style")e.style=nd([e.style,i.style]);else if(Mc(s)){const r=e[s],o=i[s];o&&r!==o&&!(it(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function wi(t,e,n,i=null){Hi(t,e,7,[n,i])}const P3=M_();let L3=0;function D3(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||P3,r={uid:L3++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new e2(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:R_(i,s),emitsOptions:E_(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=l3.bind(null,r),t.ce&&t.ce(r),r}let En=null;const I3=()=>En||oi;let lc,Dh;{const t=Ec(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};lc=e("__VUE_INSTANCE_SETTERS__",n=>En=n),Dh=e("__VUE_SSR_SETTERS__",n=>Ia=n)}const Qa=t=>{const e=En;return lc(t),t.scope.on(),()=>{t.scope.off(),lc(e)}},pm=()=>{En&&En.scope.off(),lc(null)};function k_(t){return t.vnode.shapeFlag&4}let Ia=!1;function U3(t,e=!1,n=!1){e&&Dh(e);const{props:i,children:s}=t.vnode,r=k_(t);p3(t,i,r,e),v3(t,s,n||e);const o=r?N3(t,e):void 0;return e&&Dh(!1),o}function N3(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$2);const{setup:i}=n;if(i){ds();const s=t.setupContext=i.length>1?O3(t):null,r=Qa(t),o=Ka(i,t,0,[t.props,s]),a=qg(o);if(ps(),r(),(a||t.sp)&&!_a(t)&&g_(t),a){if(o.then(pm,pm),e)return o.then(l=>{mm(t,l)}).catch(l=>{Ac(l,t,0)});t.asyncDep=o}else mm(t,o)}else z_(t)}function mm(t,e,n){et(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Wt(e)&&(t.setupState=u_(e)),z_(t)}function z_(t,e,n){const i=t.type;t.render||(t.render=i.render||zi);{const s=Qa(t);ds();try{K2(t)}finally{ps(),s()}}}const F3={get(t,e){return fn(t,"get",""),t[e]}};function O3(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,F3),slots:t.slots,emit:t.emit,expose:e}}function Dc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(u_(Ah(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in va)return va[n](t)},has(e,n){return n in e||n in va}})):t.proxy}function B3(t){return et(t)&&"__vccOpts"in t}const k3=(t,e)=>A2(t,e,Ia),z3="3.5.25";let Ih;const gm=typeof window<"u"&&window.trustedTypes;if(gm)try{Ih=gm.createPolicy("vue",{createHTML:t=>t})}catch{}const V_=Ih?t=>Ih.createHTML(t):t=>t,V3="http://www.w3.org/2000/svg",G3="http://www.w3.org/1998/Math/MathML",ns=typeof document<"u"?document:null,_m=ns&&ns.createElement("template"),H3={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?ns.createElementNS(V3,t):e==="mathml"?ns.createElementNS(G3,t):n?ns.createElement(t,{is:n}):ns.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>ns.createTextNode(t),createComment:t=>ns.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ns.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{_m.innerHTML=V_(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=_m.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},W3=Symbol("_vtc");function X3(t,e,n){const i=t[W3];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cc=Symbol("_vod"),G_=Symbol("_vsh"),q3={name:"show",beforeMount(t,{value:e},{transition:n}){t[cc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):$o(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),$o(t,!0),i.enter(t)):i.leave(t,()=>{$o(t,!1)}):$o(t,e))},beforeUnmount(t,{value:e}){$o(t,e)}};function $o(t,e){t.style.display=e?t[cc]:"none",t[G_]=!e}const Y3=Symbol(""),j3=/(?:^|;)\s*display\s*:/;function $3(t,e,n){const i=t.style,s=on(n);let r=!1;if(n&&!s){if(e)if(on(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Wl(i,a,"")}else for(const o in e)n[o]==null&&Wl(i,o,"");for(const o in n)o==="display"&&(r=!0),Wl(i,o,n[o])}else if(s){if(e!==n){const o=i[Y3];o&&(n+=";"+o),i.cssText=n,r=j3.test(n)}}else e&&t.removeAttribute("style");cc in t&&(t[cc]=r?i.display:"",t[G_]&&(i.display="none"))}const vm=/\s*!important$/;function Wl(t,e,n){if(it(n))n.forEach(i=>Wl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=K3(t,e);vm.test(n)?t.setProperty(wr(i),n.replace(vm,""),"important"):t[i]=n}}const xm=["Webkit","Moz","ms"],Au={};function K3(t,e){const n=Au[e];if(n)return n;let i=Gs(e);if(i!=="filter"&&i in t)return Au[e]=i;i=Yg(i);for(let s=0;s<xm.length;s++){const r=xm[s]+i;if(r in t)return Au[e]=r}return e}const Sm="http://www.w3.org/1999/xlink";function Mm(t,e,n,i,s,r=Qx(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sm,e.slice(6,e.length)):t.setAttributeNS(Sm,e,n):n==null||r&&!$g(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Io(n)?String(n):n)}function ym(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?V_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$g(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function J3(t,e,n,i){t.addEventListener(e,n,i)}function Z3(t,e,n,i){t.removeEventListener(e,n,i)}const bm=Symbol("_vei");function Q3(t,e,n,i,s=null){const r=t[bm]||(t[bm]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=eS(e);if(i){const c=r[e]=iS(i,s);J3(t,a,c,l)}else o&&(Z3(t,a,o,l),r[e]=void 0)}}const Em=/(?:Once|Passive|Capture)$/;function eS(t){let e;if(Em.test(t)){e={};let i;for(;i=t.match(Em);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wr(t.slice(2)),e]}let wu=0;const tS=Promise.resolve(),nS=()=>wu||(tS.then(()=>wu=0),wu=Date.now());function iS(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Hi(sS(i,n.value),e,5,[i])};return n.value=t,n.attached=nS(),n}function sS(t,e){if(it(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Tm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rS=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?X3(t,i,o):e==="style"?$3(t,n,i):Mc(e)?Qf(e)||Q3(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oS(t,e,i,o))?(ym(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Mm(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!on(i))?ym(t,Gs(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Mm(t,e,i,o))};function oS(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tm(e)&&et(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tm(e)&&on(n)?!1:e in t}const aS=gn({patchProp:rS},H3);let Am;function lS(){return Am||(Am=S3(aS))}const cS=((...t)=>{const e=lS().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=hS(i);if(!s)return;const r=e._component;!et(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,uS(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function uS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hS(t){return on(t)?document.querySelector(t):t}const Ic=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},fS={},dS={class:"loader-container"};function pS(t,e){return Xs(),Za("div",dS,[...e[0]||(e[0]=[Jt("div",{class:"spinner"},null,-1),Jt("div",{class:"loader-text"},"Loading Memories",-1)])])}const mS=Ic(fS,[["render",pS],["__scopeId","data-v-e65857af"]]);const xd="182",gS=0,wm=1,_S=2,Xl=1,vS=2,aa=3,qs=0,Tn=1,Bi=2,Vi=0,ao=1,uc=2,Cm=3,Rm=4,xS=5,dr=100,SS=101,MS=102,yS=103,bS=104,ES=200,TS=201,AS=202,wS=203,Uh=204,Nh=205,CS=206,RS=207,PS=208,LS=209,DS=210,IS=211,US=212,NS=213,FS=214,Fh=0,Oh=1,Bh=2,po=3,kh=4,zh=5,Vh=6,Gh=7,Sd=0,OS=1,BS=2,Gi=0,H_=1,Md=2,W_=3,X_=4,q_=5,Y_=6,j_=7,$_=300,yr=301,mo=302,Hh=303,Wh=304,Uc=306,Ua=1e3,as=1001,Xh=1002,an=1003,kS=1004,hl=1005,dn=1006,Cu=1007,mr=1008,qn=1009,K_=1010,J_=1011,Na=1012,yd=1013,Wi=1014,gi=1015,jn=1016,bd=1017,Ed=1018,Fa=1020,Z_=35902,Q_=35899,e1=1021,t1=1022,_i=1023,gs=1026,gr=1027,Td=1028,Ad=1029,go=1030,wd=1031,Cd=1033,ql=33776,Yl=33777,jl=33778,$l=33779,qh=35840,Yh=35841,jh=35842,$h=35843,Kh=36196,Jh=37492,Zh=37496,Qh=37488,ef=37489,tf=37490,nf=37491,sf=37808,rf=37809,of=37810,af=37811,lf=37812,cf=37813,uf=37814,hf=37815,ff=37816,df=37817,pf=37818,mf=37819,gf=37820,_f=37821,vf=36492,xf=36494,Sf=36495,Mf=36283,yf=36284,bf=36285,Ef=36286,zS=3200,Rd=0,VS=1,Ds="",hn="srgb",_o="srgb-linear",hc="linear",vt="srgb",Ur=7680,Pm=519,GS=512,HS=513,WS=514,Pd=515,XS=516,qS=517,Ld=518,YS=519,Lm=35044,Dm="300 es",ki=2e3,fc=2001;function n1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jS(){const t=Oa("canvas");return t.style.display="block",t}const Im={};function Um(...t){const e="THREE."+t.shift();console.log(e,...t)}function qe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function at(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ba(...t){const e=t.join(" ");e in Im||(Im[e]=!0,qe(...t))}function $S(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nm=1234567;const Ma=Math.PI/180,vo=180/Math.PI;function Cr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function Dd(t,e){return(t%e+e)%e}function KS(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function JS(t,e,n){return t!==e?(n-t)/(e-t):0}function ya(t,e,n){return(1-n)*t+n*e}function ZS(t,e,n,i){return ya(t,e,1-Math.exp(-n*i))}function QS(t,e=1){return e-Math.abs(Dd(t,e*2)-e)}function eM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function tM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function nM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function iM(t,e){return t+Math.random()*(e-t)}function sM(t){return t*(.5-Math.random())}function rM(t){t!==void 0&&(Nm=t);let e=Nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oM(t){return t*Ma}function aM(t){return t*vo}function lM(t){return(t&t-1)===0&&t!==0}function cM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function uM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function hM(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*d,a*c);break;case"YXY":t.set(l*d,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*d,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ir={DEG2RAD:Ma,RAD2DEG:vo,generateUUID:Cr,clamp:nt,euclideanModulo:Dd,mapLinear:KS,inverseLerp:JS,lerp:ya,damp:ZS,pingpong:QS,smoothstep:eM,smootherstep:tM,randInt:nM,randFloat:iM,randFloatSpread:sM,seededRandom:rM,degToRad:oM,radToDeg:aM,isPowerOfTwo:lM,ceilPowerOfTwo:cM,floorPowerOfTwo:uM,setQuaternionFromProperEuler:hM,normalize:Sn,denormalize:eo};class pe{constructor(e=0,n=0){pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class el{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a>=1){e[n+0]=f,e[n+1]=d,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*x;m<0&&(f=-f,d=-d,_=-_,x=-x,m=-m);let p=1-a;if(m<.9995){const T=Math.acos(m),S=Math.sin(T);p=Math.sin(p*T)/S,a=Math.sin(a*T)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+_*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+_*a,h=h*p+x*a;const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+u*h+l*d-c*f,e[n+1]=l*_+u*f+c*h-a*d,e[n+2]=c*_+u*d+a*f-l*h,e[n+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),h=2*(r*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new B,Fm=new el;class Qe{constructor(e,n,i,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],x=s[0],m=s[3],p=s[6],T=s[1],S=s[4],v=s[7],w=s[2],R=s[5],P=s[8];return r[0]=o*x+a*T+l*w,r[3]=o*m+a*S+l*R,r[6]=o*p+a*v+l*P,r[1]=c*x+u*T+h*w,r[4]=c*m+u*S+h*R,r[7]=c*p+u*v+h*P,r[2]=f*x+d*T+_*w,r[5]=f*m+d*S+_*R,r[8]=f*p+d*v+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=n*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=f*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=d*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Pu.makeScale(e,n)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new Qe,Om=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bm=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fM(){const t={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ds?hc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[_o]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),t}const lt=fM();function cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class dM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=Oa("canvas")),Nr.width=e.width,Nr.height=e.height;const s=Nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(cs(n[i]/255)*255):n[i]=cs(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pM=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Lu(s[o].image)):r.push(Lu(s[o]))}else r=Lu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Lu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let mM=0;const Du=new B;class rn extends Uo{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=as,s=as,r=dn,o=mr,a=_i,l=qn,c=rn.DEFAULT_ANISOTROPY,u=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Cr(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case Xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case Xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=$_;rn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,s=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,v=(d+1)/2,w=(p+1)/2,R=(u+f)/4,P=(h+x)/4,V=(_+m)/4;return S>v&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=R/i,r=P/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=V/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=V/r),this.set(i,s,r,n),this}let T=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gM extends Uo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new rn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Id(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends gM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class i1 extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _M extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(fi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(fi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=fi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),dl.subVectors(this.max,Ko),Fr.subVectors(e.a,Ko),Or.subVectors(e.b,Ko),Br.subVectors(e.c,Ko),Ms.subVectors(Or,Fr),ys.subVectors(Br,Or),sr.subVectors(Fr,Br);let n=[0,-Ms.z,Ms.y,0,-ys.z,ys.y,0,-sr.z,sr.y,Ms.z,0,-Ms.x,ys.z,0,-ys.x,sr.z,0,-sr.x,-Ms.y,Ms.x,0,-ys.y,ys.x,0,-sr.y,sr.x,0];return!Iu(n,Fr,Or,Br,dl)||(n=[1,0,0,0,1,0,0,0,1],!Iu(n,Fr,Or,Br,dl))?!1:(pl.crossVectors(Ms,ys),n=[pl.x,pl.y,pl.z],Iu(n,Fr,Or,Br,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ji=[new B,new B,new B,new B,new B,new B,new B,new B],fi=new B,fl=new Rr,Fr=new B,Or=new B,Br=new B,Ms=new B,ys=new B,sr=new B,Ko=new B,dl=new B,pl=new B,rr=new B;function Iu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){rr.fromArray(t,r);const a=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),l=e.dot(rr),c=n.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const vM=new Rr,Jo=new B,Uu=new B;class No{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Jo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Uu)),this.expandByPoint(Jo.copy(e.center).sub(Uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new B,Nu=new B,ml=new B,bs=new B,Fu=new B,gl=new B,Ou=new B;class s1{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,n),Zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Nu.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),bs.copy(this.origin).sub(Nu);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ml),a=bs.dot(this.direction),l=-bs.dot(ml),c=bs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nu).addScaledVector(ml,f),d}intersectSphere(e,n){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),s=Zi.dot(Zi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,n,i,s,r){Fu.subVectors(n,e),gl.subVectors(i,e),Ou.crossVectors(Fu,gl);let o=this.direction.dot(Ou),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bs.subVectors(this.origin,e);const l=a*this.direction.dot(gl.crossVectors(bs,gl));if(l<0)return null;const c=a*this.direction.dot(Fu.cross(bs));if(c<0||l+c>o)return null;const u=-a*bs.dot(Ou);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,s,r,o,a,l,c,u,h,f,d,_,x,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,h,f,d,_,x,m)}set(e,n,i,s,r,o,a,l,c,u,h,f,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/kr.setFromMatrixColumn(e,0).length(),r=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,x=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=d+_*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=_+d*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,x=c*h;n[0]=f+x*a,n[4]=_*a-d,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=d*a-_,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,x=c*h;n[0]=f-x*a,n[4]=-o*h,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,x=a*h;n[0]=l*u,n[4]=_*c-d,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=d*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-f*h,n[8]=_*h+d,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+x,n[5]=o*u,n[9]=d*h-_,n[2]=_*h-d,n[6]=a*u,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,SM)}lookAt(e,n,i){const s=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Es.crossVectors(i,zn),Es.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Es.crossVectors(i,zn)),Es.normalize(),_l.crossVectors(zn,Es),s[0]=Es.x,s[4]=_l.x,s[8]=zn.x,s[1]=Es.y,s[5]=_l.y,s[9]=zn.y,s[2]=Es.z,s[6]=_l.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],T=i[3],S=i[7],v=i[11],w=i[15],R=s[0],P=s[4],V=s[8],y=s[12],A=s[1],N=s[5],Q=s[9],F=s[13],H=s[2],z=s[6],k=s[10],U=s[14],j=s[3],ce=s[7],he=s[11],ae=s[15];return r[0]=o*R+a*A+l*H+c*j,r[4]=o*P+a*N+l*z+c*ce,r[8]=o*V+a*Q+l*k+c*he,r[12]=o*y+a*F+l*U+c*ae,r[1]=u*R+h*A+f*H+d*j,r[5]=u*P+h*N+f*z+d*ce,r[9]=u*V+h*Q+f*k+d*he,r[13]=u*y+h*F+f*U+d*ae,r[2]=_*R+x*A+m*H+p*j,r[6]=_*P+x*N+m*z+p*ce,r[10]=_*V+x*Q+m*k+p*he,r[14]=_*y+x*F+m*U+p*ae,r[3]=T*R+S*A+v*H+w*j,r[7]=T*P+S*N+v*z+w*ce,r[11]=T*V+S*Q+v*k+w*he,r[15]=T*y+S*F+v*U+w*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15],T=l*d-c*f,S=a*d-c*h,v=a*f-l*h,w=o*d-c*u,R=o*f-l*u,P=o*h-a*u;return n*(x*T-m*S+p*v)-i*(_*T-m*w+p*R)+s*(_*S-x*w+p*P)-r*(_*v-x*R+m*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],T=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,v=u*x*c-_*h*c+_*a*d-o*x*d-u*a*p+o*h*p,w=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,R=n*T+i*S+s*v+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return e[0]=T*P,e[1]=(x*f*r-h*m*r-x*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=S*P,e[5]=(u*m*r-_*f*r+_*s*d-n*m*d-u*s*p+n*f*p)*P,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*p-n*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*d+n*l*d)*P,e[8]=v*P,e[9]=(_*h*r-u*x*r-_*i*d+n*x*d+u*i*p-n*h*p)*P,e[10]=(o*x*r-_*a*r+_*i*c-n*x*c-o*i*p+n*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*c+n*h*c+o*i*d-n*a*d)*P,e[12]=w*P,e[13]=(u*x*s-_*h*s+_*i*f-n*x*f-u*i*m+n*h*m)*P,e[14]=(_*a*s-o*x*s-_*i*l+n*x*l+o*i*m-n*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*l-n*h*l-o*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,x=o*u,m=o*h,p=a*h,T=l*c,S=l*u,v=l*h,w=i.x,R=i.y,P=i.z;return s[0]=(1-(x+p))*w,s[1]=(d+v)*w,s[2]=(_-S)*w,s[3]=0,s[4]=(d-v)*R,s[5]=(1-(f+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(_+S)*P,s[9]=(m-T)*P,s[10]=(1-(f+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let r=kr.set(s[0],s[1],s[2]).length();const o=kr.set(s[4],s[5],s[6]).length(),a=kr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),di.copy(this);const c=1/r,u=1/o,h=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=h,di.elements[9]*=h,di.elements[10]*=h,n.setFromRotationMatrix(di),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=ki,l=!1){const c=this.elements,u=2*r/(n-e),h=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===ki)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fc)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=ki,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-s),f=-(n+e)/(n-e),d=-(i+s)/(i-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===ki)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===fc)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new B,di=new Mt,xM=new B(0,0,0),SM=new B(1,1,1),Es=new B,_l=new B,zn=new B,km=new Mt,zm=new el;class Mi{constructor(e=0,n=0,i=0,s=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class r1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MM=0;const Vm=new B,zr=new el,Qi=new Mt,vl=new B,Zo=new B,yM=new B,bM=new el,Gm=new B(1,0,0),Hm=new B(0,1,0),Wm=new B(0,0,1),Xm={type:"added"},EM={type:"removed"},Vr={type:"childadded",child:null},Bu={type:"childremoved",child:null};class $t extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new B,n=new Mi,i=new el,s=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,n){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Zo,vl,this.up):Qi.lookAt(vl,Zo,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(Qi),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,yM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,bM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new B(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new B,es=new B,ku=new B,ts=new B,Gr=new B,Hr=new B,qm=new B,zu=new B,Vu=new B,Gu=new B,Hu=new Vt,Wu=new Vt,Xu=new Vt;class mi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),pi.subVectors(e,n),s.cross(pi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){pi.subVectors(s,n),es.subVectors(i,n),ku.subVectors(e,n);const o=pi.dot(pi),a=pi.dot(es),l=pi.dot(ku),c=es.dot(es),u=es.dot(ku),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Hu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Hu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,i),Xu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hu,r.x),o.addScaledVector(Wu,r.y),o.addScaledVector(Xu,r.z),o}static isFrontFacing(e,n,i,s){return pi.subVectors(i,n),es.subVectors(e,n),pi.cross(es).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),es.subVectors(this.a,this.b),pi.cross(es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return mi.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Gr.subVectors(s,i),Hr.subVectors(r,i),zu.subVectors(e,i);const l=Gr.dot(zu),c=Hr.dot(zu);if(l<=0&&c<=0)return n.copy(i);Vu.subVectors(e,s);const u=Gr.dot(Vu),h=Hr.dot(Vu);if(u>=0&&h<=u)return n.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Gr,o);Gu.subVectors(e,r);const d=Gr.dot(Gu),_=Hr.dot(Gu);if(_>=0&&d<=_)return n.copy(r);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Hr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return qm.subVectors(r,s),a=(h-u)/(h-u+(d-_)),n.copy(s).addScaledVector(qm,a);const p=1/(m+x+f);return o=x*p,a=f*p,n.copy(i).addScaledVector(Gr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},xl={h:0,s:0,l:0};function qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=lt.workingColorSpace){if(e=Dd(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=qu(o,r,e+1/3),this.g=qu(o,r,e),this.b=qu(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,n=hn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=o1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return lt.workingToColorSpace(cn.copy(this),e),Math.round(nt(cn.r*255,0,255))*65536+Math.round(nt(cn.g*255,0,255))*256+Math.round(nt(cn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(cn.copy(this),n);const i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=hn){lt.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,s=cn.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+n,Ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ts),e.getHSL(xl);const i=ya(Ts.h,xl.h,n),s=ya(Ts.s,xl.s,n),r=ya(Ts.l,xl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Je;Je.NAMES=o1;let TM=0;class Pr extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=ao,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Nh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Uh&&(i.blendSrc=this.blendSrc),this.blendDst!==Nh&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ka extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new B,Sl=new pe;let AM=0;class Si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lm,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class a1 extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l1 extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wM=0;const ti=new Mt,Yu=new $t,Wr=new B,Vn=new Rr,Qo=new Rr,tn=new B;class _n extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n1(e)?l1:a1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Vn.min,Qo.min),Vn.expandByPoint(tn),tn.addVectors(Vn.max,Qo.max),Vn.expandByPoint(tn)):(Vn.expandByPoint(Qo.min),Vn.expandByPoint(Qo.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(e,c),tn.add(Wr)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new B,l[V]=new B;const c=new B,u=new B,h=new B,f=new pe,d=new pe,_=new pe,x=new B,m=new B;function p(V,y,A){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,A),f.fromBufferAttribute(r,V),d.fromBufferAttribute(r,y),_.fromBufferAttribute(r,A),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(N),a[V].add(x),a[y].add(x),a[A].add(x),l[V].add(m),l[y].add(m),l[A].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let V=0,y=T.length;V<y;++V){const A=T[V],N=A.start,Q=A.count;for(let F=N,H=N+Q;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new B,v=new B,w=new B,R=new B;function P(V){w.fromBufferAttribute(s,V),R.copy(w);const y=a[V];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(R,y);const N=v.dot(l[V])<0?-1:1;o.setXYZW(V,S.x,S.y,S.z,N)}for(let V=0,y=T.length;V<y;++V){const A=T[V],N=A.start,Q=A.count;for(let F=N,H=N+Q;F<H;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)tn.fromBufferAttribute(e,n),tn.normalize(),e.setXYZ(n,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Si(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new Mt,or=new s1,Ml=new No,jm=new B,yl=new B,bl=new B,El=new B,ju=new B,Tl=new B,$m=new B,Al=new B;class St extends $t{constructor(e=new _n,n=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ju.fromBufferAttribute(h,e),o?Tl.addScaledVector(ju,u):Tl.addScaledVector(ju.sub(n),u))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ml.copy(i.boundingSphere),Ml.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(Ml.containsPoint(or.origin)===!1&&(or.intersectSphere(Ml,jm)===null||or.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Ym.copy(r).invert(),or.copy(e.ray).applyMatrix4(Ym),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=S;v<w;v+=3){const R=a.getX(v),P=a.getX(v+1),V=a.getX(v+2);s=wl(this,p,e,i,c,u,h,R,P,V),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=wl(this,o,e,i,c,u,h,T,S,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,w=S;v<w;v+=3){const R=v,P=v+1,V=v+2;s=wl(this,p,e,i,c,u,h,R,P,V),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const T=m,S=m+1,v=m+2;s=wl(this,o,e,i,c,u,h,T,S,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function CM(t,e,n,i,s,r,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===qs,a),l===null)return null;Al.copy(a),Al.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Al);return c<n.near||c>n.far?null:{distance:c,point:Al.clone(),object:t}}function wl(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,yl),t.getVertexPosition(l,bl),t.getVertexPosition(c,El);const u=CM(t,e,n,i,yl,bl,El,$m);if(u){const h=new B;mi.getBarycoord($m,yl,bl,El,h),s&&(u.uv=mi.getInterpolatedAttribute(s,a,l,c,h,new pe)),r&&(u.uv1=mi.getInterpolatedAttribute(r,a,l,c,h,new pe)),o&&(u.normal=mi.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new B,materialIndex:0};mi.getNormal(yl,bl,El,f.normal),u.face=f,u.barycoord=h}return u}class Ys extends _n{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function _(x,m,p,T,S,v,w,R,P,V,y){const A=v/P,N=w/V,Q=v/2,F=w/2,H=R/2,z=P+1,k=V+1;let U=0,j=0;const ce=new B;for(let he=0;he<k;he++){const ae=he*N-F;for(let Re=0;Re<z;Re++){const Pe=Re*A-Q;ce[x]=Pe*T,ce[m]=ae*S,ce[p]=H,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[p]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Re/P),h.push(1-he/V),U+=1}}for(let he=0;he<V;he++)for(let ae=0;ae<P;ae++){const Re=f+ae+z*he,Pe=f+ae+z*(he+1),Ye=f+(ae+1)+z*(he+1),$e=f+(ae+1)+z*he;l.push(Re,Pe,$e),l.push(Pe,Ye,$e),j+=6}a.addGroup(d,j,y),d+=j,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Mn(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const s in i)e[s]=i[s]}return e}function RM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const dc={clone:xo,merge:Mn};var PM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=RM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class u1 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const As=new B,Km=new pe,Jm=new pe;class In extends u1{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,n){return this.getViewBounds(e,Km,Jm),n.subVectors(Jm,Km)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ma*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,qr=1;class DM extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(Xr,qr,e,n);s.layers=this.layers,this.add(s);const r=new In(Xr,qr,e,n);r.layers=this.layers,this.add(r);const o=new In(Xr,qr,e,n);o.layers=this.layers,this.add(o);const a=new In(Xr,qr,e,n);a.layers=this.layers,this.add(a);const l=new In(Xr,qr,e,n);l.layers=this.layers,this.add(l);const c=new In(Xr,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class h1 extends rn{constructor(e=[],n=yr,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f1 extends Un{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new h1(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ys(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Vi});r.uniforms.tEquirect.value=n;const o=new St(s,r),a=n.minFilter;return n.minFilter===mr&&(n.minFilter=dn),new DM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class _r extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Ud{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=n}clone(){return new Ud(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class d1 extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class p1 extends rn{constructor(e=null,n=1,i=1,s,r,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zm extends Si{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yr=new Mt,Qm=new Mt,Cl=[],e0=new Rr,UM=new Mt,ea=new St,ta=new No;class NM extends St{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Zm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,UM)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Yr),e0.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(e0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new No),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Yr),ta.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(ta)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){const i=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yr),Qm.multiplyMatrices(i,Yr),ea.matrixWorld=Qm,ea.raycast(e,Cl);for(let o=0,a=Cl.length;o<a;o++){const l=Cl[o];l.instanceId=r,l.object=this,n.push(l)}Cl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Zm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new p1(new Float32Array(s*this.count),s,this.count,Td,gi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ku=new B,FM=new B,OM=new Qe;class fr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Ku.subVectors(i,n).cross(FM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ku),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||OM.getNormalMatrix(e),s=this.coplanarPoint(Ku).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new No,BM=new pe(.5,.5),Rl=new B;class Nd{constructor(e=new fr,n=new fr,i=new fr,s=new fr,r=new fr,o=new fr){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],x=r[9],m=r[10],p=r[11],T=r[12],S=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,d-u,p-_,w-T).normalize(),s[1].setComponents(c+o,d+u,p+_,w+T).normalize(),s[2].setComponents(c+a,d+h,p+x,w+S).normalize(),s[3].setComponents(c-a,d-h,p-x,w-S).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,p-m,w-v).normalize();else if(s[4].setComponents(c-l,d-f,p-m,w-v).normalize(),n===ki)s[5].setComponents(c+l,d+f,p+m,w+v).normalize();else if(n===fc)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){ar.center.set(0,0,0);const n=BM.distanceTo(e.center);return ar.radius=.7071067811865476+n,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Rl.x=s.normal.x>0?e.max.x:e.min.x,Rl.y=s.normal.y>0?e.max.y:e.min.y,Rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m1 extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const t0=new Mt,Tf=new s1,Pl=new No,Ll=new B;class kM extends $t{constructor(e=new _n,n=new m1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Pl.radius+=r,e.ray.intersectsSphere(Pl)===!1)return;t0.copy(s).invert(),Tf.copy(e.ray).applyMatrix4(t0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,x=d;_<x;_++){const m=c.getX(_);Ll.fromBufferAttribute(h,m),n0(Ll,m,l,s,e,n,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,x=d;_<x;_++)Ll.fromBufferAttribute(h,_),n0(Ll,_,l,s,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function n0(t,e,n,i,s,r,o){const a=Tf.distanceSqToPoint(t);if(a<n){const l=new B;Tf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class i0 extends rn{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class za extends rn{constructor(e,n,i=Wi,s,r,o,a=an,l=an,c,u=gs,h=1){if(u!==gs&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class zM extends za{constructor(e,n=Wi,i=yr,s,r,o=an,a=an,l,c=gs){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class g1 extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fd extends _n{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new It(r,3)),this.setAttribute("normal",new It(r.slice(),3)),this.setAttribute("uv",new It(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const S=new B,v=new B,w=new B;for(let R=0;R<n.length;R+=3)d(n[R+0],S),d(n[R+1],v),d(n[R+2],w),l(S,v,w,T)}function l(T,S,v,w){const R=w+1,P=[];for(let V=0;V<=R;V++){P[V]=[];const y=T.clone().lerp(v,V/R),A=S.clone().lerp(v,V/R),N=R-V;for(let Q=0;Q<=N;Q++)Q===0&&V===R?P[V][Q]=y:P[V][Q]=y.clone().lerp(A,Q/N)}for(let V=0;V<R;V++)for(let y=0;y<2*(R-V)-1;y++){const A=Math.floor(y/2);y%2===0?(f(P[V][A+1]),f(P[V+1][A]),f(P[V][A])):(f(P[V][A+1]),f(P[V+1][A+1]),f(P[V+1][A]))}}function c(T){const S=new B;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(T),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){const T=new B;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];const v=m(T)/2/Math.PI+.5,w=p(T)/Math.PI+.5;o.push(v,1-w)}_(),h()}function h(){for(let T=0;T<o.length;T+=6){const S=o[T+0],v=o[T+2],w=o[T+4],R=Math.max(S,v,w),P=Math.min(S,v,w);R>.9&&P<.1&&(S<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),w<.2&&(o[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function d(T,S){const v=T*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function _(){const T=new B,S=new B,v=new B,w=new B,R=new pe,P=new pe,V=new pe;for(let y=0,A=0;y<r.length;y+=9,A+=6){T.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),R.set(o[A+0],o[A+1]),P.set(o[A+2],o[A+3]),V.set(o[A+4],o[A+5]),w.copy(T).add(S).add(v).divideScalar(3);const N=m(w);x(R,A+0,T,N),x(P,A+2,S,N),x(V,A+4,v,N)}}function x(T,S,v,w){w<0&&T.x===1&&(o[S]=T.x-1),v.x===0&&v.z===0&&(o[S]=w/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fd(e.vertices,e.indices,e.radius,e.detail)}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new pe:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new B,s=[],r=[],o=[],a=new B,l=new Mt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(nt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(n===!0){let d=Math.acos(nt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Od extends Yi{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new pe){const i=n,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class VM extends Od{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bd(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return t+e*r+n*o+i*a}}}const Dl=new B,Ju=new Bd,Zu=new Bd,Qu=new Bd;class _1 extends Yi{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new B){const i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Dl.subVectors(s[0],s[1]).add(s[0]),c=Dl);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Dl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Ju.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,x,m),Zu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,x,m),Qu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(Ju.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Zu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Qu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Ju.calc(l),Zu.calc(l),Qu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function s0(t,e,n,i,s){const r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function GM(t,e){const n=1-t;return n*n*e}function HM(t,e){return 2*(1-t)*t*e}function WM(t,e){return t*t*e}function ba(t,e,n,i){return GM(t,e)+HM(t,n)+WM(t,i)}function XM(t,e){const n=1-t;return n*n*n*e}function qM(t,e){const n=1-t;return 3*n*n*t*e}function YM(t,e){return 3*(1-t)*t*t*e}function jM(t,e){return t*t*t*e}function Ea(t,e,n,i,s){return XM(t,e)+qM(t,n)+YM(t,i)+jM(t,s)}class v1 extends Yi{constructor(e=new pe,n=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new pe){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $M extends Yi{constructor(e=new B,n=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new B){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y),Ea(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x1 extends Yi{constructor(e=new pe,n=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new pe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new pe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KM extends Yi{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends Yi{constructor(e=new pe,n=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new pe){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends Yi{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y),ba(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new pe){const i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(s0(a,l.x,c.x,u.x,h.x),s0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new pe().fromArray(s))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:VM,CatmullRomCurve3:_1,CubicBezierCurve:v1,CubicBezierCurve3:$M,EllipseCurve:Od,LineCurve:x1,LineCurve3:KM,QuadraticBezierCurve:S1,QuadraticBezierCurve3:M1,SplineCurve:y1});class JM extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(new pc[s.type]().fromJSON(s))}return this}}class r0 extends JM{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new x1(this.currentPoint.clone(),new pe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){const r=new S1(this.currentPoint.clone(),new pe(e,n),new pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){const a=new v1(this.currentPoint.clone(),new pe(e,n),new pe(i,s),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new y1(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){const c=new Od(e,n,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class b1 extends r0{constructor(e){super(e),this.uuid=Cr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(new r0().fromJSON(s))}return this}}function ZM(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let r=E1(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=iy(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let u=a,h=l;for(let f=n;f<s;f+=n){const d=t[f],_=t[f+1];d<a&&(a=d),_<l&&(l=_),d>u&&(u=d),_>h&&(h=_)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Va(r,o,n,a,l,c,0),o}function E1(t,e,n,i,s){let r;if(s===py(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=o0(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=o0(o/i|0,t[o],t[o+1],r);return r&&So(r,r.next)&&(Ha(r),r=r.next),r}function br(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(So(n,n.next)||Nt(n.prev,n,n.next)===0)){if(Ha(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Va(t,e,n,i,s,r,o){if(!t)return;!o&&r&&ly(t,i,s,r);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(r?ey(t,i,s,r):QM(t)){e.push(l.i,t.i,c.i),Ha(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=ty(br(t),e),Va(t,e,n,i,s,r,2)):o===2&&ny(t,e,n,i,s,r):Va(br(t),e,n,i,s,r,1);break}}}function QM(t){const e=t.prev,n=t,i=t.next;if(Nt(e,n,i)>=0)return!1;const s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&la(s,a,r,l,o,c,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ey(t,e,n,i){const s=t.prev,r=t,o=t.next;if(Nt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),_=Math.min(u,h,f),x=Math.max(a,l,c),m=Math.max(u,h,f),p=Af(d,_,e,n,i),T=Af(x,m,e,n,i);let S=t.prevZ,v=t.nextZ;for(;S&&S.z>=p&&v&&v.z<=T;){if(S.x>=d&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&la(a,u,l,h,c,f,S.x,S.y)&&Nt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&la(a,u,l,h,c,f,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&la(a,u,l,h,c,f,S.x,S.y)&&Nt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&la(a,u,l,h,c,f,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ty(t,e){let n=t;do{const i=n.prev,s=n.next.next;!So(i,s)&&A1(i,n,n.next,s)&&Ga(i,s)&&Ga(s,i)&&(e.push(i.i,n.i,s.i),Ha(n),Ha(n.next),n=t=s),n=n.next}while(n!==t);return br(n)}function ny(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hy(o,a)){let l=w1(o,a);o=br(o,o.next),l=br(l,l.next),Va(o,e,n,i,s,r,0),Va(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function iy(t,e,n,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=E1(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(uy(c))}s.sort(sy);for(let r=0;r<s.length;r++)n=ry(s[r],n);return n}function sy(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function ry(t,e){const n=oy(t,e);if(!n)return e;const i=w1(n,t);return br(i,i.next),br(n,n.next)}function oy(t,e){let n=e;const i=t.x,s=t.y;let r=-1/0,o;if(So(t,n))return n;do{if(So(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const h=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>r&&(r=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&T1(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){const h=Math.abs(s-n.y)/(i-n.x);Ga(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&ay(o,n)))&&(o=n,u=h)}n=n.next}while(n!==a);return o}function ay(t,e){return Nt(t.prev,t,e.prev)<0&&Nt(e.next,t,t.next)<0}function ly(t,e,n,i){let s=t;do s.z===0&&(s.z=Af(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,cy(s)}function cy(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function Af(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function uy(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function T1(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function la(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&T1(t,e,n,i,s,r,o,a)}function hy(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!fy(t,e)&&(Ga(t,e)&&Ga(e,t)&&dy(t,e)&&(Nt(t.prev,t,e.prev)||Nt(t,e.prev,e))||So(t,e)&&Nt(t.prev,t,t.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function So(t,e){return t.x===e.x&&t.y===e.y}function A1(t,e,n,i){const s=Ul(Nt(t,e,n)),r=Ul(Nt(t,e,i)),o=Ul(Nt(n,i,t)),a=Ul(Nt(n,i,e));return!!(s!==r&&o!==a||s===0&&Il(t,n,e)||r===0&&Il(t,i,e)||o===0&&Il(n,t,i)||a===0&&Il(n,e,i))}function Il(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Ul(t){return t>0?1:t<0?-1:0}function fy(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&A1(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ga(t,e){return Nt(t.prev,t,t.next)<0?Nt(t,e,t.next)>=0&&Nt(t,t.prev,e)>=0:Nt(t,e,t.prev)<0||Nt(t,t.next,e)<0}function dy(t,e){let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function w1(t,e){const n=wf(t.i,t.x,t.y),i=wf(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function o0(t,e,n,i){const s=wf(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ha(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function wf(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function py(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}class my{static triangulate(e,n,i=2){return ZM(e,n,i)}}class to{static area(e){const n=e.length;let i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return to.area(e)<0}static triangulateShape(e,n){const i=[],s=[],r=[];a0(e),l0(i,e);let o=e.length;n.forEach(a0);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,l0(i,n[l]);const a=my.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function a0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function l0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class kd extends _n{constructor(e=new b1([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new It(s,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:d-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,T=n.UVGenerator!==void 0?n.UVGenerator:gy;let S,v=!1,w,R,P,V;if(p){S=p.getSpacedPoints(u),v=!0,f=!1;const L=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,L),R=new B,P=new B,V=new B}f||(m=0,d=0,_=0,x=0);const y=a.extractPoints(c);let A=y.shape;const N=y.holes;if(!to.isClockWise(A)){A=A.reverse();for(let L=0,W=N.length;L<W;L++){const O=N[L];to.isClockWise(O)&&(N[L]=O.reverse())}}function F(L){const O=10000000000000001e-36;let q=L[0];for(let b=1;b<=L.length;b++){const re=b%L.length,J=L[re],Z=J.x-q.x,se=J.y-q.y,M=Z*Z+se*se,g=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(q.x),Math.abs(q.y)),I=O*g*g;if(M<=I){L.splice(re,1),b--;continue}q=J}}F(A),N.forEach(F);const H=N.length,z=A;for(let L=0;L<H;L++){const W=N[L];A=A.concat(W)}function k(L,W,O){return W||at("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(W,O)}const U=A.length;function j(L,W,O){let q,b,re;const J=L.x-W.x,Z=L.y-W.y,se=O.x-L.x,M=O.y-L.y,g=J*J+Z*Z,I=J*M-Z*se;if(Math.abs(I)>Number.EPSILON){const Y=Math.sqrt(g),ie=Math.sqrt(se*se+M*M),$=W.x-Z/Y,Se=W.y+J/Y,fe=O.x-M/ie,Te=O.y+se/ie,Fe=((fe-$)*M-(Te-Se)*se)/(J*M-Z*se);q=$+J*Fe-L.x,b=Se+Z*Fe-L.y;const ue=q*q+b*b;if(ue<=2)return new pe(q,b);re=Math.sqrt(ue/2)}else{let Y=!1;J>Number.EPSILON?se>Number.EPSILON&&(Y=!0):J<-Number.EPSILON?se<-Number.EPSILON&&(Y=!0):Math.sign(Z)===Math.sign(M)&&(Y=!0),Y?(q=-Z,b=J,re=Math.sqrt(g)):(q=J,b=Z,re=Math.sqrt(g/2))}return new pe(q/re,b/re)}const ce=[];for(let L=0,W=z.length,O=W-1,q=L+1;L<W;L++,O++,q++)O===W&&(O=0),q===W&&(q=0),ce[L]=j(z[L],z[O],z[q]);const he=[];let ae,Re=ce.concat();for(let L=0,W=H;L<W;L++){const O=N[L];ae=[];for(let q=0,b=O.length,re=b-1,J=q+1;q<b;q++,re++,J++)re===b&&(re=0),J===b&&(J=0),ae[q]=j(O[q],O[re],O[J]);he.push(ae),Re=Re.concat(ae)}let Pe;if(m===0)Pe=to.triangulateShape(z,N);else{const L=[],W=[];for(let O=0;O<m;O++){const q=O/m,b=d*Math.cos(q*Math.PI/2),re=_*Math.sin(q*Math.PI/2)+x;for(let J=0,Z=z.length;J<Z;J++){const se=k(z[J],ce[J],re);Ne(se.x,se.y,-b),q===0&&L.push(se)}for(let J=0,Z=H;J<Z;J++){const se=N[J];ae=he[J];const M=[];for(let g=0,I=se.length;g<I;g++){const Y=k(se[g],ae[g],re);Ne(Y.x,Y.y,-b),q===0&&M.push(Y)}q===0&&W.push(M)}}Pe=to.triangulateShape(L,W)}const Ye=Pe.length,$e=_+x;for(let L=0;L<U;L++){const W=f?k(A[L],Re[L],$e):A[L];v?(P.copy(w.normals[0]).multiplyScalar(W.x),R.copy(w.binormals[0]).multiplyScalar(W.y),V.copy(S[0]).add(P).add(R),Ne(V.x,V.y,V.z)):Ne(W.x,W.y,0)}for(let L=1;L<=u;L++)for(let W=0;W<U;W++){const O=f?k(A[W],Re[W],$e):A[W];v?(P.copy(w.normals[L]).multiplyScalar(O.x),R.copy(w.binormals[L]).multiplyScalar(O.y),V.copy(S[L]).add(P).add(R),Ne(V.x,V.y,V.z)):Ne(O.x,O.y,h/u*L)}for(let L=m-1;L>=0;L--){const W=L/m,O=d*Math.cos(W*Math.PI/2),q=_*Math.sin(W*Math.PI/2)+x;for(let b=0,re=z.length;b<re;b++){const J=k(z[b],ce[b],q);Ne(J.x,J.y,h+O)}for(let b=0,re=N.length;b<re;b++){const J=N[b];ae=he[b];for(let Z=0,se=J.length;Z<se;Z++){const M=k(J[Z],ae[Z],q);v?Ne(M.x,M.y+S[u-1].y,S[u-1].x+O):Ne(M.x,M.y,h+O)}}}ne(),oe();function ne(){const L=s.length/3;if(f){let W=0,O=U*W;for(let q=0;q<Ye;q++){const b=Pe[q];_e(b[2]+O,b[1]+O,b[0]+O)}W=u+m*2,O=U*W;for(let q=0;q<Ye;q++){const b=Pe[q];_e(b[0]+O,b[1]+O,b[2]+O)}}else{for(let W=0;W<Ye;W++){const O=Pe[W];_e(O[2],O[1],O[0])}for(let W=0;W<Ye;W++){const O=Pe[W];_e(O[0]+U*u,O[1]+U*u,O[2]+U*u)}}i.addGroup(L,s.length/3-L,0)}function oe(){const L=s.length/3;let W=0;be(z,W),W+=z.length;for(let O=0,q=N.length;O<q;O++){const b=N[O];be(b,W),W+=b.length}i.addGroup(L,s.length/3-L,1)}function be(L,W){let O=L.length;for(;--O>=0;){const q=O;let b=O-1;b<0&&(b=L.length-1);for(let re=0,J=u+m*2;re<J;re++){const Z=U*re,se=U*(re+1),M=W+q+Z,g=W+b+Z,I=W+b+se,Y=W+q+se;Ke(M,g,I,Y)}}}function Ne(L,W,O){l.push(L),l.push(W),l.push(O)}function _e(L,W,O){C(L),C(W),C(O);const q=s.length/3,b=T.generateTopUV(i,s,q-3,q-2,q-1);D(b[0]),D(b[1]),D(b[2])}function Ke(L,W,O,q){C(L),C(W),C(q),C(W),C(O),C(q);const b=s.length/3,re=T.generateSideWallUV(i,s,b-6,b-3,b-2,b-1);D(re[0]),D(re[1]),D(re[3]),D(re[1]),D(re[2]),D(re[3])}function C(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function D(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return _y(n,i,e)}static fromJSON(e,n){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=n[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new pc[s.type]().fromJSON(s)),new kd(i,e.options)}}const gy={generateTopUV:function(t,e,n,i,s){const r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new pe(r,o),new pe(a,l),new pe(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],_=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-h),new pe(f,1-_),new pe(x,1-p)]:[new pe(a,1-l),new pe(u,1-h),new pe(d,1-_),new pe(m,1-p)]}};function _y(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class tl extends _n{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=n/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const T=p*f-o;for(let S=0;S<c;S++){const v=S*h-r;_.push(v,-T,0),x.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,v=T+c*(p+1),w=T+1+c*(p+1),R=T+1+c*p;d.push(S,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class zd extends _n{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new B,f=new B,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const T=[],S=p/i;let v=0;p===0&&o===0?v=.5/n:p===i&&l===Math.PI&&(v=-.5/n);for(let w=0;w<=n;w++){const R=w/n;h.x=-e*Math.cos(s+R*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(R+v,1-S),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<n;T++){const S=u[p][T+1],v=u[p][T],w=u[p+1][T],R=u[p+1][T+1];(p!==0||o>0)&&d.push(S,v,R),(p!==i-1||l<Math.PI)&&d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(x,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vd extends Fd{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Vd(e.radius,e.detail)}}class Gd extends _n{constructor(e=new M1(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new B,l=new B,c=new pe;let u=new B;const h=[],f=[],d=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(d,2));function x(){for(let S=0;S<n;S++)m(S);m(r===!1?n:0),T(),p()}function m(S){u=e.getPointAt(S/n,u);const v=o.normals[S],w=o.binormals[S];for(let R=0;R<=s;R++){const P=R/s*Math.PI*2,V=Math.sin(P),y=-Math.cos(P);l.x=y*v.x+V*w.x,l.y=y*v.y+V*w.y,l.z=y*v.z+V*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=n;S++)for(let v=1;v<=s;v++){const w=(s+1)*(S-1)+(v-1),R=(s+1)*S+(v-1),P=(s+1)*S+v,V=(s+1)*(S-1)+v;_.push(w,R,V),_.push(R,P,V)}}function T(){for(let S=0;S<=n;S++)for(let v=0;v<=s;v++)c.x=S/n,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gd(new pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vy extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Is extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xy extends Is{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sy extends Pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class My extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yy extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class by{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ey=new by;class Hd{constructor(e){this.manager=e!==void 0?e:Ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hd.DEFAULT_MATERIAL_NAME="__DEFAULT";const jr=new WeakMap;class Ty extends Hd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=eh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let h=jr.get(o);h===void 0&&(h=[],jr.set(o,h)),h.push({onLoad:n,onError:s})}return o}const a=Oa("img");function l(){u(),n&&n(this);const h=jr.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}jr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),eh.remove(`image:${e}`);const f=jr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}jr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),eh.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class C1 extends Hd{constructor(e){super(e)}load(e,n,i,s){const r=new rn,o=new Ty(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Nc extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const th=new Mt,c0=new B,u0=new B;class Wd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;c0.setFromMatrixPosition(e.matrixWorld),n.position.copy(c0),u0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(u0),n.updateMatrixWorld(),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ay extends Wd{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class h0 extends Nc{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ay}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class wy extends Wd{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class R1 extends Nc{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Fc extends u1{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Cy extends Wd{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ry extends Nc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Cy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Py extends Nc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ly extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class P1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function f0(t,e,n,i){const s=Dy(i);switch(n){case e1:return t*e;case Td:return t*e/s.components*s.byteLength;case Ad:return t*e/s.components*s.byteLength;case go:return t*e*2/s.components*s.byteLength;case wd:return t*e*2/s.components*s.byteLength;case t1:return t*e*3/s.components*s.byteLength;case _i:return t*e*4/s.components*s.byteLength;case Cd:return t*e*4/s.components*s.byteLength;case ql:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jl:case $l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case qh:case jh:return Math.max(t,8)*Math.max(e,8)/2;case Kh:case Jh:case Qh:case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zh:case tf:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _f:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vf:case xf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Mf:case yf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bf:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dy(t){switch(t){case qn:case K_:return{byteLength:1,components:1};case Na:case J_:case jn:return{byteLength:2,components:1};case bd:case Ed:return{byteLength:2,components:4};case Wi:case yd:case gi:return{byteLength:4,components:1};case Z_:case Q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);function L1(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Iy(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],x=h[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const x=h[d];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ib=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ab=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Db=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ib=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Uy,alphahash_pars_fragment:Ny,alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:By,alphatest_pars_fragment:ky,aomap_fragment:zy,aomap_pars_fragment:Vy,batching_pars_vertex:Gy,batching_vertex:Hy,begin_vertex:Wy,beginnormal_vertex:Xy,bsdfs:qy,iridescence_fragment:Yy,bumpmap_pars_fragment:jy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:Zy,color_fragment:Qy,color_pars_fragment:eb,color_pars_vertex:tb,color_vertex:nb,common:ib,cube_uv_reflection_fragment:sb,defaultnormal_vertex:rb,displacementmap_pars_vertex:ob,displacementmap_vertex:ab,emissivemap_fragment:lb,emissivemap_pars_fragment:cb,colorspace_fragment:ub,colorspace_pars_fragment:hb,envmap_fragment:fb,envmap_common_pars_fragment:db,envmap_pars_fragment:pb,envmap_pars_vertex:mb,envmap_physical_pars_fragment:Ab,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:xb,fog_pars_fragment:Sb,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:yb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:wb,lights_toon_pars_fragment:Cb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Pb,lights_physical_fragment:Lb,lights_physical_pars_fragment:Db,lights_fragment_begin:Ib,lights_fragment_maps:Ub,lights_fragment_end:Nb,logdepthbuf_fragment:Fb,logdepthbuf_pars_fragment:Ob,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:kb,map_fragment:zb,map_pars_fragment:Vb,map_particle_fragment:Gb,map_particle_pars_fragment:Hb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:Xb,morphinstance_vertex:qb,morphcolor_vertex:Yb,morphnormal_vertex:jb,morphtarget_pars_vertex:$b,morphtarget_vertex:Kb,normal_fragment_begin:Jb,normal_fragment_maps:Zb,normal_pars_fragment:Qb,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:hE,dithering_pars_fragment:fE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:SE,skinning_vertex:ME,skinnormal_vertex:yE,specularmap_fragment:bE,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:AE,transmission_fragment:wE,transmission_pars_fragment:CE,uv_pars_fragment:RE,uv_pars_vertex:PE,uv_vertex:LE,worldpos_vertex:DE,background_vert:IE,background_frag:UE,backgroundCube_vert:NE,backgroundCube_frag:FE,cube_vert:OE,cube_frag:BE,depth_vert:kE,depth_frag:zE,distance_vert:VE,distance_frag:GE,equirect_vert:HE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:qE,meshbasic_vert:YE,meshbasic_frag:jE,meshlambert_vert:$E,meshlambert_frag:KE,meshmatcap_vert:JE,meshmatcap_frag:ZE,meshnormal_vert:QE,meshnormal_frag:eT,meshphong_vert:tT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:sT,meshtoon_vert:rT,meshtoon_frag:oT,points_vert:aT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:hT,sprite_frag:fT},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Fi={basic:{uniforms:Mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Mn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Mn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Mn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Mn([Ee.points,Ee.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Mn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Mn([Ee.common,Ee.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Mn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Mn([Ee.sprite,Ee.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Mn([Ee.common,Ee.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Mn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Fi.physical={uniforms:Mn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Nl={r:0,b:0,g:0},lr=new Mi,dT=new Mt;function pT(t,e,n,i,s,r,o){const a=new Je(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?n:e).get(v)),v}function x(S){let v=!1;const w=_(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===Uc)?(u===void 0&&(u=new St(new Ys(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:xo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),lr.copy(v.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dT.makeRotationFromEuler(lr)),u.material.toneMapped=lt.getTransfer(w.colorSpace)!==vt,(h!==w||f!==w.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new St(new tl(2,2),new pn({name:"BackgroundMaterial",uniforms:xo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(w.colorSpace)!==vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Nl,c1(t)),i.buffers.color.setClear(Nl.r,Nl.g,Nl.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:x,addToRenderList:m,dispose:T}}function mT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(A,N,Q,F,H){let z=!1;const k=h(F,Q,N);r!==k&&(r=k,c(r.object)),z=d(A,F,Q,H),z&&_(A,F,Q,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(A,N,Q,F),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function h(A,N,Q){const F=Q.wireframe===!0;let H=i[A.id];H===void 0&&(H={},i[A.id]=H);let z=H[N.id];z===void 0&&(z={},H[N.id]=z);let k=z[F];return k===void 0&&(k=f(l()),z[F]=k),k}function f(A){const N=[],Q=[],F=[];for(let H=0;H<n;H++)N[H]=0,Q[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Q,attributeDivisors:F,object:A,attributes:{},index:null}}function d(A,N,Q,F){const H=r.attributes,z=N.attributes;let k=0;const U=Q.getAttributes();for(const j in U)if(U[j].location>=0){const he=H[j];let ae=z[j];if(ae===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor)),he===void 0||he.attribute!==ae||ae&&he.data!==ae.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function _(A,N,Q,F){const H={},z=N.attributes;let k=0;const U=Q.getAttributes();for(const j in U)if(U[j].location>=0){let he=z[j];he===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(he=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(he=A.instanceColor));const ae={};ae.attribute=he,he&&he.data&&(ae.data=he.data),H[j]=ae,k++}r.attributes=H,r.attributesNum=k,r.index=F}function x(){const A=r.newAttributes;for(let N=0,Q=A.length;N<Q;N++)A[N]=0}function m(A){p(A,0)}function p(A,N){const Q=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;Q[A]=1,F[A]===0&&(t.enableVertexAttribArray(A),F[A]=1),H[A]!==N&&(t.vertexAttribDivisor(A,N),H[A]=N)}function T(){const A=r.newAttributes,N=r.enabledAttributes;for(let Q=0,F=N.length;Q<F;Q++)N[Q]!==A[Q]&&(t.disableVertexAttribArray(Q),N[Q]=0)}function S(A,N,Q,F,H,z,k){k===!0?t.vertexAttribIPointer(A,N,Q,H,z):t.vertexAttribPointer(A,N,Q,F,H,z)}function v(A,N,Q,F){x();const H=F.attributes,z=Q.getAttributes(),k=N.defaultAttributeValues;for(const U in z){const j=z[U];if(j.location>=0){let ce=H[U];if(ce===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const he=ce.normalized,ae=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const Pe=Re.buffer,Ye=Re.type,$e=Re.bytesPerElement,ne=Ye===t.INT||Ye===t.UNSIGNED_INT||ce.gpuType===yd;if(ce.isInterleavedBufferAttribute){const oe=ce.data,be=oe.stride,Ne=ce.offset;if(oe.isInstancedInterleavedBuffer){for(let _e=0;_e<j.locationSize;_e++)p(j.location+_e,oe.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<j.locationSize;_e++)m(j.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let _e=0;_e<j.locationSize;_e++)S(j.location+_e,ae/j.locationSize,Ye,he,be*$e,(Ne+ae/j.locationSize*_e)*$e,ne)}else{if(ce.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)p(j.location+oe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<j.locationSize;oe++)m(j.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let oe=0;oe<j.locationSize;oe++)S(j.location+oe,ae/j.locationSize,Ye,he,ae*$e,ae/j.locationSize*oe*$e,ne)}}else if(k!==void 0){const he=k[U];if(he!==void 0)switch(he.length){case 2:t.vertexAttrib2fv(j.location,he);break;case 3:t.vertexAttrib3fv(j.location,he);break;case 4:t.vertexAttrib4fv(j.location,he);break;default:t.vertexAttrib1fv(j.location,he)}}}}T()}function w(){V();for(const A in i){const N=i[A];for(const Q in N){const F=N[Q];for(const H in F)u(F[H].object),delete F[H];delete N[Q]}delete i[A]}}function R(A){if(i[A.id]===void 0)return;const N=i[A.id];for(const Q in N){const F=N[Q];for(const H in F)u(F[H].object),delete F[H];delete N[Q]}delete i[A.id]}function P(A){for(const N in i){const Q=i[N];if(Q[A.id]===void 0)continue;const F=Q[A.id];for(const H in F)u(F[H].object),delete F[H];delete Q[A.id]}}function V(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function gT(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];n.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _T(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==_i&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const V=P===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gi&&!V)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),T=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,maxSamples:w,samples:R}}function vT(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new fr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const T=r?0:i,S=T*4;let v=p.clippingState||null;l.value=v,v=u(_,f,S,d);for(let w=0;w!==S;++w)v[w]=n[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==x;++S,v+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function xT(t){let e=new WeakMap;function n(o,a){return a===Hh?o.mapping=yr:a===Wh&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hh||a===Wh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new f1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fs=4,d0=[.125,.215,.35,.446,.526,.582],pr=20,ST=256,na=new Fc,p0=new Je;let nh=null,ih=0,sh=0,rh=!1;const MT=new B;class Cf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=MT}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===yr||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:jn,format:_i,colorSpace:_o,depthBuffer:!1},s=m0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yT(r)),this._blurMaterial=ET(r,e,n),this._ggxMaterial=bT(r,e,n)}return s}_compileMaterial(e){const n=new St(new _n,e);this._renderer.compile(n,na)}_sceneToCubeUV(e,n,i,s,r){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(p0),h.toneMapping=Gi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new St(new Ys,new ka({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(p0),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const w=this._cubeSize;$r(s,v*w,S>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=T}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===yr||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,x=this._sizeLods[i],m=3*x*(i>_-Fs?i-_+Fs:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-n,$r(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,$r(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,na)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*pr-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):pr;m>pr&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const p=[];let T=0;for(let P=0;P<pr;++P){const V=P/x,y=Math.exp(-V*V/2);p.push(y),P===0?T+=y:P<m&&(T+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const v=this._sizeLods[s],w=3*v*(s>S-Fs?s-S+Fs:0),R=4*(this._cubeSize-v);$r(n,w,R,3*v,2*v),l.setRenderTarget(n),l.render(h,na)}}function yT(t){const e=[],n=[],i=[];let s=t;const r=t-Fs+1+d0.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Fs?l=d0[o-t+Fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,x=3,m=2,p=1,T=new Float32Array(x*_*d),S=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let R=0;R<d;R++){const P=R%3*2/3-1,V=R>2?0:-1,y=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];T.set(y,x*_*R),S.set(f,m*_*R);const A=[R,R,R,R,R,R];v.set(A,p*_*R)}const w=new _n;w.setAttribute("position",new Si(T,x)),w.setAttribute("uv",new Si(S,m)),w.setAttribute("faceIndex",new Si(v,p)),i.push(new St(w,null)),s>Fs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function m0(t,e,n){const i=new Un(t,e,n);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function bT(t,e,n){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ST,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ET(t,e,n){const i=new Float32Array(pr),s=new B(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function g0(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function _0(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hh||l===Wh,u=l===yr||l===mo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Cf(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(n===null&&(n=new Cf(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Ba("WebGLRenderer: "+i+" extension not supported."),s}}}function wT(t,e,n,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let x=0;if(d!==null){const T=d.array;x=d.version;for(let S=0,v=T.length;S<v;S+=3){const w=T[S+0],R=T[S+1],P=T[S+2];f.push(w,R,R,P,P,w)}}else if(_!==void 0){const T=_.array;x=_.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const w=S+0,R=S+1,P=S+2;f.push(w,R,R,P,P,w)}}else return;const m=new(n1(f)?l1:a1)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function CT(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,_){_!==0&&(t.drawElementsInstanced(i,d,r,f*o,_),n.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];n.update(m,i,1)}function h(f,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,_);let p=0;for(let T=0;T<_;T++)p+=d[T]*x[T];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function RT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function PT(t,e,n){const i=new WeakMap,s=new Vt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let A=function(){V.dispose(),i.delete(a),a.removeEventListener("dispose",A)};var d=A;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,R=1;w>e.maxTextureSize&&(R=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*R*4*h),V=new i1(P,w,R,h);V.type=gi,V.needsUpdate=!0;const y=v*4;for(let N=0;N<h;N++){const Q=p[N],F=T[N],H=S[N],z=w*R*4*N;for(let k=0;k<Q.count;k++){const U=k*y;_===!0&&(s.fromBufferAttribute(Q,k),P[z+U+0]=s.x,P[z+U+1]=s.y,P[z+U+2]=s.z,P[z+U+3]=0),x===!0&&(s.fromBufferAttribute(F,k),P[z+U+4]=s.x,P[z+U+5]=s.y,P[z+U+6]=s.z,P[z+U+7]=0),m===!0&&(s.fromBufferAttribute(H,k),P[z+U+8]=s.x,P[z+U+9]=s.y,P[z+U+10]=s.z,P[z+U+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:V,size:new pe(w,R)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function LT(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const DT={[H_]:"LINEAR_TONE_MAPPING",[Md]:"REINHARD_TONE_MAPPING",[W_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[Y_]:"AGX_TONE_MAPPING",[j_]:"NEUTRAL_TONE_MAPPING",[q_]:"CUSTOM_TONE_MAPPING"};function IT(t,e,n,i,s){const r=new Un(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new Un(e,n,{type:jn,depthBuffer:!1,stencilBuffer:!1}),a=new _n;a.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new It([0,2,0,0,2,0],2));const l=new vy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new St(a,l),u=new Fc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,x=null,m=[],p=!1;this.setSize=function(T,S){r.setSize(T,S),o.setSize(T,S);for(let v=0;v<m.length;v++){const w=m[v];w.setSize&&w.setSize(T,S)}},this.setEffects=function(T){m=T,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,v=r.height;for(let w=0;w<m.length;w++){const R=m[w];R.setSize&&R.setSize(S,v)}},this.begin=function(T,S){if(d||T.toneMapping===Gi&&m.length===0)return!1;if(x=S,S!==null){const v=S.width,w=S.height;(r.width!==v||r.height!==w)&&this.setSize(v,w)}return p===!1&&T.setRenderTarget(r),_=T.toneMapping,T.toneMapping=Gi,!0},this.hasRenderPass=function(){return p},this.end=function(T,S){T.toneMapping=_,d=!0;let v=r,w=o;for(let R=0;R<m.length;R++){const P=m[R];if(P.enabled!==!1&&(P.render(T,w,v,S),P.needsSwap!==!1)){const V=v;v=w,w=V}}if(h!==T.outputColorSpace||f!==T.toneMapping){h=T.outputColorSpace,f=T.toneMapping,l.defines={},lt.getTransfer(h)===vt&&(l.defines.SRGB_TRANSFER="");const R=DT[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(x),T.render(c,u),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const D1=new rn,Rf=new za(1,1),I1=new i1,U1=new _M,N1=new h1,v0=[],x0=[],S0=new Float32Array(16),M0=new Float32Array(9),y0=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=v0[s];if(r===void 0&&(r=new Float32Array(s),v0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function en(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bc(t,e){let n=x0[e];n===void 0&&(n=new Int32Array(e),x0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function UT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2fv(this.addr,e),en(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;t.uniform3fv(this.addr,e),en(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4fv(this.addr,e),en(n,e)}}function BT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Qt(n,i))return;y0.set(i),t.uniformMatrix2fv(this.addr,!1,y0),en(n,i)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Qt(n,i))return;M0.set(i),t.uniformMatrix3fv(this.addr,!1,M0),en(n,i)}}function zT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Qt(n,i))return;S0.set(i),t.uniformMatrix4fv(this.addr,!1,S0),en(n,i)}}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2iv(this.addr,e),en(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3iv(this.addr,e),en(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4iv(this.addr,e),en(n,e)}}function XT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;t.uniform2uiv(this.addr,e),en(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;t.uniform3uiv(this.addr,e),en(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;t.uniform4uiv(this.addr,e),en(n,e)}}function $T(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Rf.compareFunction=n.isReversedDepthBuffer()?Ld:Pd,r=Rf):r=D1,n.setTexture2D(e||r,s)}function KT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||U1,s)}function JT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||N1,s)}function ZT(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||I1,s)}function QT(t){switch(t){case 5126:return UT;case 35664:return NT;case 35665:return FT;case 35666:return OT;case 35674:return BT;case 35675:return kT;case 35676:return zT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return HT;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return qT;case 36295:return YT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return ZT}}function eA(t,e){t.uniform1fv(this.addr,e)}function tA(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function nA(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function iA(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function sA(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rA(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oA(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aA(t,e){t.uniform1iv(this.addr,e)}function lA(t,e){t.uniform2iv(this.addr,e)}function cA(t,e){t.uniform3iv(this.addr,e)}function uA(t,e){t.uniform4iv(this.addr,e)}function hA(t,e){t.uniform1uiv(this.addr,e)}function fA(t,e){t.uniform2uiv(this.addr,e)}function dA(t,e){t.uniform3uiv(this.addr,e)}function pA(t,e){t.uniform4uiv(this.addr,e)}function mA(t,e,n){const i=this.cache,s=e.length,r=Bc(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),en(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Rf:o=D1;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function gA(t,e,n){const i=this.cache,s=e.length,r=Bc(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||U1,r[o])}function _A(t,e,n){const i=this.cache,s=e.length,r=Bc(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||N1,r[o])}function vA(t,e,n){const i=this.cache,s=e.length,r=Bc(n,s);Qt(i,r)||(t.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||I1,r[o])}function xA(t){switch(t){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return sA;case 35675:return rA;case 35676:return oA;case 5124:case 35670:return aA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return hA;case 36294:return fA;case 36295:return dA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return vA}}class SA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=QT(n.type)}}class MA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xA(n.type)}}class yA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function b0(t,e){t.seq.push(e),t.map[e.id]=e}function bA(t,e,n){const i=t.name,s=i.length;for(oh.lastIndex=0;;){const r=oh.exec(i),o=oh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){b0(n,c===void 0?new SA(a,t,e):new MA(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new yA(a),b0(n,h)),n=h}}}class Kl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);bA(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function E0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const EA=37297;let TA=0;function AA(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const T0=new Qe;function wA(t){lt._getMatrix(T0,lt.workingColorSpace,t);const e=`mat3( ${T0.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case hc:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function A0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+AA(t.getShaderSource(e),a)}else return r}function CA(t,e){const n=wA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const RA={[H_]:"Linear",[Md]:"Reinhard",[W_]:"Cineon",[X_]:"ACESFilmic",[Y_]:"AgX",[j_]:"Neutral",[q_]:"Custom"};function PA(t,e){const n=RA[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new B;function LA(){lt.getLuminanceCoefficients(Fl);const t=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function IA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function UA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ca(t){return t!==""}function w0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(NA,OA)}const FA=new Map;function OA(t,e){let n=tt[e];if(n===void 0){const i=FA.get(e);if(i!==void 0)n=tt[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(t){return t.replace(BA,kA)}function kA(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function P0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const zA={[Xl]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function VA(t){return zA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GA={[yr]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function HA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":GA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const WA={[mo]:"ENVMAP_MODE_REFRACTION"};function XA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":WA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qA={[Sd]:"ENVMAP_BLENDING_MULTIPLY",[OS]:"ENVMAP_BLENDING_MIX",[BS]:"ENVMAP_BLENDING_ADD"};function YA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":qA[t.combine]||"ENVMAP_BLENDING_NONE"}function jA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function $A(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=VA(n),c=HA(n),u=XA(n),h=YA(n),f=jA(n),d=DA(n),_=IA(r),x=s.createProgram();let m,p,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[P0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[P0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?tt.tonemapping_pars_fragment:"",n.toneMapping!==Gi?PA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,CA("linearToOutputTexel",n.outputColorSpace),LA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),o=Pf(o),o=w0(o,n),o=C0(o,n),a=Pf(a),a=w0(a,n),a=C0(a,n),o=R0(o),a=R0(a),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,v=T+p+a,w=E0(s,s.VERTEX_SHADER,S),R=E0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,R),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(N){if(t.debug.checkShaderErrors){const Q=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(R)||"",z=Q.trim(),k=F.trim(),U=H.trim();let j=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,w,R);else{const he=A0(s,w,"vertex"),ae=A0(s,R,"fragment");at("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+he+`
`+ae)}else z!==""?qe("WebGLProgram: Program Info Log:",z):(k===""||U==="")&&(ce=!1);ce&&(N.diagnostics={runnable:j,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(w),s.deleteShader(R),V=new Kl(s,x),y=UA(s,x)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,EA)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}let KA=0;class JA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZA(e),n.set(e,i)),i}}class ZA{constructor(e){this.id=KA++,this.code=e,this.usedTimes=0}}function QA(t,e,n,i,s,r,o){const a=new r1,l=new JA,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,A,N,Q,F){const H=Q.fog,z=F.geometry,k=y.isMeshStandardMaterial?Q.environment:null,U=(y.isMeshStandardMaterial?n:e).get(y.envMap||k),j=U&&U.mapping===Uc?U.image.height:null,ce=_[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=he!==void 0?he.length:0;let Re=0;z.morphAttributes.position!==void 0&&(Re=1),z.morphAttributes.normal!==void 0&&(Re=2),z.morphAttributes.color!==void 0&&(Re=3);let Pe,Ye,$e,ne;if(ce){const gt=Fi[ce];Pe=gt.vertexShader,Ye=gt.fragmentShader}else Pe=y.vertexShader,Ye=y.fragmentShader,l.update(y),$e=l.getVertexShaderID(y),ne=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,_e=F.isBatchedMesh===!0,Ke=!!y.map,C=!!y.matcap,D=!!U,L=!!y.aoMap,W=!!y.lightMap,O=!!y.bumpMap,q=!!y.normalMap,b=!!y.displacementMap,re=!!y.emissiveMap,J=!!y.metalnessMap,Z=!!y.roughnessMap,se=y.anisotropy>0,M=y.clearcoat>0,g=y.dispersion>0,I=y.iridescence>0,Y=y.sheen>0,ie=y.transmission>0,$=se&&!!y.anisotropyMap,Se=M&&!!y.clearcoatMap,fe=M&&!!y.clearcoatNormalMap,Te=M&&!!y.clearcoatRoughnessMap,Fe=I&&!!y.iridescenceMap,ue=I&&!!y.iridescenceThicknessMap,ve=Y&&!!y.sheenColorMap,Me=Y&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,ge=!!y.specularColorMap,Ze=!!y.specularIntensityMap,G=ie&&!!y.transmissionMap,we=ie&&!!y.thicknessMap,me=!!y.gradientMap,Le=!!y.alphaMap,de=y.alphaTest>0,le=!!y.alphaHash,xe=!!y.extensions;let je=Gi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(je=t.toneMapping);const Tt={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:Pe,fragmentShader:Ye,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_e,batchingColor:_e&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:_o,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:C,envMap:D,envMapMode:D&&U.mapping,envMapCubeUVHeight:j,aoMap:L,lightMap:W,bumpMap:O,normalMap:q,displacementMap:b,emissiveMap:re,normalMapObjectSpace:q&&y.normalMapType===VS,normalMapTangentSpace:q&&y.normalMapType===Rd,metalnessMap:J,roughnessMap:Z,anisotropy:se,anisotropyMap:$,clearcoat:M,clearcoatMap:Se,clearcoatNormalMap:fe,clearcoatRoughnessMap:Te,dispersion:g,iridescence:I,iridescenceMap:Fe,iridescenceThicknessMap:ue,sheen:Y,sheenColorMap:ve,sheenRoughnessMap:Me,specularMap:Ce,specularColorMap:ge,specularIntensityMap:Ze,transmission:ie,transmissionMap:G,thicknessMap:we,gradientMap:me,opaque:y.transparent===!1&&y.blending===ao&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:de,alphaHash:le,combine:y.combine,mapUv:Ke&&x(y.map.channel),aoMapUv:L&&x(y.aoMap.channel),lightMapUv:W&&x(y.lightMap.channel),bumpMapUv:O&&x(y.bumpMap.channel),normalMapUv:q&&x(y.normalMap.channel),displacementMapUv:b&&x(y.displacementMap.channel),emissiveMapUv:re&&x(y.emissiveMap.channel),metalnessMapUv:J&&x(y.metalnessMap.channel),roughnessMapUv:Z&&x(y.roughnessMap.channel),anisotropyMapUv:$&&x(y.anisotropyMap.channel),clearcoatMapUv:Se&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(y.sheenRoughnessMap.channel),specularMapUv:Ce&&x(y.specularMap.channel),specularColorMapUv:ge&&x(y.specularColorMap.channel),specularIntensityMapUv:Ze&&x(y.specularIntensityMap.channel),transmissionMapUv:G&&x(y.transmissionMap.channel),thicknessMapUv:we&&x(y.thicknessMap.channel),alphaMapUv:Le&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(q||se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ke||Le),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bi,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(T(A,y),S(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function T(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function S(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const A=_[y.type];let N;if(A){const Q=Fi[A];N=dc.clone(Q.uniforms)}else N=y.uniforms;return N}function w(y,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new $A(t,A,y,r),u.push(N),h.set(A,N)),N}function R(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),h.delete(y.cacheKey),y.destroy()}}function P(y){l.remove(y)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:V}}function ew(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function tw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function L0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function D0(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h,f,d,_,x,m){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,_,x,m){const p=o(h,f,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(h,f,d,_,x,m){const p=o(h,f,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(h,f){n.length>1&&n.sort(h||tw),i.length>1&&i.sort(f||L0),s.length>1&&s.sort(f||L0)}function u(){for(let h=e,f=t.length;h<f;h++){const d=t[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function nw(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new D0,t.set(i,[o])):s>=r.length?(o=new D0,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Je};break;case"SpotLight":n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function sw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rw=0;function ow(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aw(t){const e=new iw,n=sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new Mt,o=new Mt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,T=0,S=0,v=0,w=0,R=0,P=0;c.sort(ow);for(let y=0,A=c.length;y<A;y++){const N=c[y],Q=N.color,F=N.intensity,H=N.distance;let z=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===go?z=N.shadow.map.texture:z=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=Q.r*F,h+=Q.g*F,f+=Q.b*F;else if(N.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],F);P++}else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const U=N.shadow,j=n.get(N);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=z,i.directionalShadowMatrix[d]=N.shadow.matrix,T++}i.directional[d]=k,d++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(Q).multiplyScalar(F),k.distance=H,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[x]=k;const U=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,U.updateMatrices(N),N.castShadow&&R++),i.spotLightMatrix[x]=U.matrix,N.castShadow){const j=n.get(N);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,i.spotShadow[x]=j,i.spotShadowMap[x]=z,v++}x++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(Q).multiplyScalar(F),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=k,m++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity),k.distance=N.distance,k.decay=N.decay,N.castShadow){const U=N.shadow,j=n.get(N);j.shadowIntensity=U.intensity,j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=N.shadow.matrix,S++}i.point[_]=k,_++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(F),k.groundColor.copy(N.groundColor).multiplyScalar(F),i.hemi[p]=k,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const V=i.hash;(V.directionalLength!==d||V.pointLength!==_||V.spotLength!==x||V.rectAreaLength!==m||V.hemiLength!==p||V.numDirectionalShadows!==T||V.numPointShadows!==S||V.numSpotShadows!==v||V.numSpotMaps!==w||V.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,V.directionalLength=d,V.pointLength=_,V.spotLength=x,V.rectAreaLength=m,V.hemiLength=p,V.numDirectionalShadows=T,V.numPointShadows=S,V.numSpotShadows=v,V.numSpotMaps=w,V.numLightProbes=P,i.version=rw++)}function l(c,u){let h=0,f=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function I0(t){const e=new aw(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lw(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new I0(t),e.set(s,[a])):r>=o.length?(a=new I0(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],fw=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],U0=new Mt,ia=new B,ah=new B;function dw(t,e,n){let i=new Nd;const s=new pe,r=new pe,o=new Vt,a=new My,l=new yy,c={},u=n.maxTextureSize,h={[qs]:Tn,[Tn]:qs,[Bi]:Bi},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:cw,fragmentShader:uw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new St(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let p=this.type;this.render=function(R,P,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===vS&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Xl);const y=t.getRenderTarget(),A=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(Vi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const F=p!==this.type;F&&P.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(z=>z.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,z=R.length;H<z;H++){const k=R[H],U=k.shadow;if(U===void 0){qe("WebGLShadowMap:",k,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const j=U.getFrameExtents();if(s.multiply(j),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,U.mapSize.y=r.y)),U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===aa){if(k.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Un(s.x,s.y,{format:go,type:jn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),U.map.texture.name=k.name+".shadowMap",U.map.depthTexture=new za(s.x,s.y,gi),U.map.depthTexture.name=k.name+".shadowMapDepth",U.map.depthTexture.format=gs,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an}else{k.isPointLight?(U.map=new f1(s.x),U.map.depthTexture=new zM(s.x,Wi)):(U.map=new Un(s.x,s.y),U.map.depthTexture=new za(s.x,s.y,Wi)),U.map.depthTexture.name=k.name+".shadowMap",U.map.depthTexture.format=gs;const he=t.state.buffers.depth.getReversed();this.type===Xl?(U.map.depthTexture.compareFunction=he?Ld:Pd,U.map.depthTexture.minFilter=dn,U.map.depthTexture.magFilter=dn):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=an,U.map.depthTexture.magFilter=an)}U.camera.updateProjectionMatrix()}const ce=U.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<ce;he++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,he),t.clear();else{he===0&&(t.setRenderTarget(U.map),t.clear());const ae=U.getViewport(he);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),Q.viewport(o)}if(k.isPointLight){const ae=U.camera,Re=U.matrix,Pe=k.distance||ae.far;Pe!==ae.far&&(ae.far=Pe,ae.updateProjectionMatrix()),ia.setFromMatrixPosition(k.matrixWorld),ae.position.copy(ia),ah.copy(ae.position),ah.add(hw[he]),ae.up.copy(fw[he]),ae.lookAt(ah),ae.updateMatrixWorld(),Re.makeTranslation(-ia.x,-ia.y,-ia.z),U0.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),U._frustum.setFromProjectionMatrix(U0,ae.coordinateSystem,ae.reversedDepth)}else U.updateMatrices(k);i=U.getFrustum(),v(P,V,U.camera,k,this.type)}U.isPointLightShadow!==!0&&this.type===aa&&T(U,V),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,A,N)};function T(R,P){const V=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Un(s.x,s.y,{format:go,type:jn})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(P,null,V,f,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(P,null,V,d,x,null)}function S(R,P,V,y){let A=null;const N=V.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)A=N;else if(A=V.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=A.uuid,F=P.uuid;let H=c[Q];H===void 0&&(H={},c[Q]=H);let z=H[F];z===void 0&&(z=A.clone(),H[F]=z,P.addEventListener("dispose",w)),A=z}if(A.visible=P.visible,A.wireframe=P.wireframe,y===aa?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:h[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Q=t.properties.get(A);Q.light=V}return A}function v(R,P,V,y,A){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===aa)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld);const F=e.update(R),H=R.material;if(Array.isArray(H)){const z=F.groups;for(let k=0,U=z.length;k<U;k++){const j=z[k],ce=H[j.materialIndex];if(ce&&ce.visible){const he=S(R,ce,y,A);R.onBeforeShadow(t,R,P,V,F,he,j),t.renderBufferDirect(V,null,F,he,R,j),R.onAfterShadow(t,R,P,V,F,he,j)}}}else if(H.visible){const z=S(R,H,y,A);R.onBeforeShadow(t,R,P,V,F,z,null),t.renderBufferDirect(V,null,F,z,R,null),R.onAfterShadow(t,R,P,V,F,z,null)}}const Q=R.children;for(let F=0,H=Q.length;F<H;F++)v(Q[F],P,V,y,A)}function w(R){R.target.removeEventListener("dispose",w);for(const V in c){const y=c[V],A=R.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}const pw={[Fh]:Oh,[Bh]:Vh,[kh]:Gh,[po]:zh,[Oh]:Fh,[Vh]:Bh,[Gh]:kh,[zh]:po};function mw(t,e){function n(){let G=!1;const we=new Vt;let me=null;const Le=new Vt(0,0,0,0);return{setMask:function(de){me!==de&&!G&&(t.colorMask(de,de,de,de),me=de)},setLocked:function(de){G=de},setClear:function(de,le,xe,je,Tt){Tt===!0&&(de*=je,le*=je,xe*=je),we.set(de,le,xe,je),Le.equals(we)===!1&&(t.clearColor(de,le,xe,je),Le.copy(we))},reset:function(){G=!1,me=null,Le.set(-1,0,0,0)}}}function i(){let G=!1,we=!1,me=null,Le=null,de=null;return{setReversed:function(le){if(we!==le){const xe=e.get("EXT_clip_control");le?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),we=le;const je=de;de=null,this.setClear(je)}},getReversed:function(){return we},setTest:function(le){le?oe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(le){me!==le&&!G&&(t.depthMask(le),me=le)},setFunc:function(le){if(we&&(le=pw[le]),Le!==le){switch(le){case Fh:t.depthFunc(t.NEVER);break;case Oh:t.depthFunc(t.ALWAYS);break;case Bh:t.depthFunc(t.LESS);break;case po:t.depthFunc(t.LEQUAL);break;case kh:t.depthFunc(t.EQUAL);break;case zh:t.depthFunc(t.GEQUAL);break;case Vh:t.depthFunc(t.GREATER);break;case Gh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=le}},setLocked:function(le){G=le},setClear:function(le){de!==le&&(we&&(le=1-le),t.clearDepth(le),de=le)},reset:function(){G=!1,me=null,Le=null,de=null,we=!1}}}function s(){let G=!1,we=null,me=null,Le=null,de=null,le=null,xe=null,je=null,Tt=null;return{setTest:function(gt){G||(gt?oe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(gt){we!==gt&&!G&&(t.stencilMask(gt),we=gt)},setFunc:function(gt,Ai,$i){(me!==gt||Le!==Ai||de!==$i)&&(t.stencilFunc(gt,Ai,$i),me=gt,Le=Ai,de=$i)},setOp:function(gt,Ai,$i){(le!==gt||xe!==Ai||je!==$i)&&(t.stencilOp(gt,Ai,$i),le=gt,xe=Ai,je=$i)},setLocked:function(gt){G=gt},setClear:function(gt){Tt!==gt&&(t.clearStencil(gt),Tt=gt)},reset:function(){G=!1,we=null,me=null,Le=null,de=null,le=null,xe=null,je=null,Tt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,T=null,S=null,v=null,w=null,R=null,P=new Je(0,0,0),V=0,y=!1,A=null,N=null,Q=null,F=null,H=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=U>=2);let ce=null,he={};const ae=t.getParameter(t.SCISSOR_BOX),Re=t.getParameter(t.VIEWPORT),Pe=new Vt().fromArray(ae),Ye=new Vt().fromArray(Re);function $e(G,we,me,Le){const de=new Uint8Array(4),le=t.createTexture();t.bindTexture(G,le),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<me;xe++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(we+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return le}const ne={};ne[t.TEXTURE_2D]=$e(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=$e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=$e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=$e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(po),O(!1),q(wm),oe(t.CULL_FACE),L(Vi);function oe(G){u[G]!==!0&&(t.enable(G),u[G]=!0)}function be(G){u[G]!==!1&&(t.disable(G),u[G]=!1)}function Ne(G,we){return h[G]!==we?(t.bindFramebuffer(G,we),h[G]=we,G===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=we),G===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=we),!0):!1}function _e(G,we){let me=d,Le=!1;if(G){me=f.get(we),me===void 0&&(me=[],f.set(we,me));const de=G.textures;if(me.length!==de.length||me[0]!==t.COLOR_ATTACHMENT0){for(let le=0,xe=de.length;le<xe;le++)me[le]=t.COLOR_ATTACHMENT0+le;me.length=de.length,Le=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,Le=!0);Le&&t.drawBuffers(me)}function Ke(G){return _!==G?(t.useProgram(G),_=G,!0):!1}const C={[dr]:t.FUNC_ADD,[SS]:t.FUNC_SUBTRACT,[MS]:t.FUNC_REVERSE_SUBTRACT};C[yS]=t.MIN,C[bS]=t.MAX;const D={[ES]:t.ZERO,[TS]:t.ONE,[AS]:t.SRC_COLOR,[Uh]:t.SRC_ALPHA,[DS]:t.SRC_ALPHA_SATURATE,[PS]:t.DST_COLOR,[CS]:t.DST_ALPHA,[wS]:t.ONE_MINUS_SRC_COLOR,[Nh]:t.ONE_MINUS_SRC_ALPHA,[LS]:t.ONE_MINUS_DST_COLOR,[RS]:t.ONE_MINUS_DST_ALPHA,[IS]:t.CONSTANT_COLOR,[US]:t.ONE_MINUS_CONSTANT_COLOR,[NS]:t.CONSTANT_ALPHA,[FS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(G,we,me,Le,de,le,xe,je,Tt,gt){if(G===Vi){x===!0&&(be(t.BLEND),x=!1);return}if(x===!1&&(oe(t.BLEND),x=!0),G!==xS){if(G!==m||gt!==y){if((p!==dr||v!==dr)&&(t.blendEquation(t.FUNC_ADD),p=dr,v=dr),gt)switch(G){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uc:t.blendFunc(t.ONE,t.ONE);break;case Cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",G);break}else switch(G){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Cm:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rm:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",G);break}T=null,S=null,w=null,R=null,P.set(0,0,0),V=0,m=G,y=gt}return}de=de||we,le=le||me,xe=xe||Le,(we!==p||de!==v)&&(t.blendEquationSeparate(C[we],C[de]),p=we,v=de),(me!==T||Le!==S||le!==w||xe!==R)&&(t.blendFuncSeparate(D[me],D[Le],D[le],D[xe]),T=me,S=Le,w=le,R=xe),(je.equals(P)===!1||Tt!==V)&&(t.blendColor(je.r,je.g,je.b,Tt),P.copy(je),V=Tt),m=G,y=!1}function W(G,we){G.side===Bi?be(t.CULL_FACE):oe(t.CULL_FACE);let me=G.side===Tn;we&&(me=!me),O(me),G.blending===ao&&G.transparent===!1?L(Vi):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const Le=G.stencilWrite;a.setTest(Le),Le&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),re(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(G){A!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),A=G)}function q(G){G!==gS?(oe(t.CULL_FACE),G!==N&&(G===wm?t.cullFace(t.BACK):G===_S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),N=G}function b(G){G!==Q&&(k&&t.lineWidth(G),Q=G)}function re(G,we,me){G?(oe(t.POLYGON_OFFSET_FILL),(F!==we||H!==me)&&(t.polygonOffset(we,me),F=we,H=me)):be(t.POLYGON_OFFSET_FILL)}function J(G){G?oe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function Z(G){G===void 0&&(G=t.TEXTURE0+z-1),ce!==G&&(t.activeTexture(G),ce=G)}function se(G,we,me){me===void 0&&(ce===null?me=t.TEXTURE0+z-1:me=ce);let Le=he[me];Le===void 0&&(Le={type:void 0,texture:void 0},he[me]=Le),(Le.type!==G||Le.texture!==we)&&(ce!==me&&(t.activeTexture(me),ce=me),t.bindTexture(G,we||ne[G]),Le.type=G,Le.texture=we)}function M(){const G=he[ce];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(G){at("WebGLState:",G)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(G){at("WebGLState:",G)}}function Y(){try{t.texSubImage2D(...arguments)}catch(G){at("WebGLState:",G)}}function ie(){try{t.texSubImage3D(...arguments)}catch(G){at("WebGLState:",G)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(G){at("WebGLState:",G)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(G){at("WebGLState:",G)}}function fe(){try{t.texStorage2D(...arguments)}catch(G){at("WebGLState:",G)}}function Te(){try{t.texStorage3D(...arguments)}catch(G){at("WebGLState:",G)}}function Fe(){try{t.texImage2D(...arguments)}catch(G){at("WebGLState:",G)}}function ue(){try{t.texImage3D(...arguments)}catch(G){at("WebGLState:",G)}}function ve(G){Pe.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function Me(G){Ye.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),Ye.copy(G))}function Ce(G,we){let me=c.get(we);me===void 0&&(me=new WeakMap,c.set(we,me));let Le=me.get(G);Le===void 0&&(Le=t.getUniformBlockIndex(we,G.name),me.set(G,Le))}function ge(G,we){const Le=c.get(we).get(G);l.get(we)!==Le&&(t.uniformBlockBinding(we,Le,G.__bindingPointIndex),l.set(we,Le))}function Ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ce=null,he={},h={},f=new WeakMap,d=[],_=null,x=!1,m=null,p=null,T=null,S=null,v=null,w=null,R=null,P=new Je(0,0,0),V=0,y=!1,A=null,N=null,Q=null,F=null,H=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:be,bindFramebuffer:Ne,drawBuffers:_e,useProgram:Ke,setBlending:L,setMaterial:W,setFlipSided:O,setCullFace:q,setLineWidth:b,setPolygonOffset:re,setScissorTest:J,activeTexture:Z,bindTexture:se,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Fe,texImage3D:ue,updateUBOMapping:Ce,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:ie,compressedTexSubImage2D:$,compressedTexSubImage3D:Se,scissor:ve,viewport:Me,reset:Ze}}function gw(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return d?new OffscreenCanvas(M,g):Oa("canvas")}function x(M,g,I){let Y=1;const ie=se(M);if((ie.width>I||ie.height>I)&&(Y=I/Math.max(ie.width,ie.height)),Y<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(Y*ie.width),Se=Math.floor(Y*ie.height);h===void 0&&(h=_($,Se));const fe=g?_($,Se):h;return fe.width=$,fe.height=Se,fe.getContext("2d").drawImage(M,0,0,$,Se),qe("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+$+"x"+Se+")."),fe}else return"data"in M&&qe("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){t.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,g,I,Y,ie=!1){if(M!==null){if(t[M]!==void 0)return t[M];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=g;if(g===t.RED&&(I===t.FLOAT&&($=t.R32F),I===t.HALF_FLOAT&&($=t.R16F),I===t.UNSIGNED_BYTE&&($=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.R8UI),I===t.UNSIGNED_SHORT&&($=t.R16UI),I===t.UNSIGNED_INT&&($=t.R32UI),I===t.BYTE&&($=t.R8I),I===t.SHORT&&($=t.R16I),I===t.INT&&($=t.R32I)),g===t.RG&&(I===t.FLOAT&&($=t.RG32F),I===t.HALF_FLOAT&&($=t.RG16F),I===t.UNSIGNED_BYTE&&($=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RG8UI),I===t.UNSIGNED_SHORT&&($=t.RG16UI),I===t.UNSIGNED_INT&&($=t.RG32UI),I===t.BYTE&&($=t.RG8I),I===t.SHORT&&($=t.RG16I),I===t.INT&&($=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RGB8UI),I===t.UNSIGNED_SHORT&&($=t.RGB16UI),I===t.UNSIGNED_INT&&($=t.RGB32UI),I===t.BYTE&&($=t.RGB8I),I===t.SHORT&&($=t.RGB16I),I===t.INT&&($=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&($=t.RGBA8UI),I===t.UNSIGNED_SHORT&&($=t.RGBA16UI),I===t.UNSIGNED_INT&&($=t.RGBA32UI),I===t.BYTE&&($=t.RGBA8I),I===t.SHORT&&($=t.RGBA16I),I===t.INT&&($=t.RGBA32I)),g===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),g===t.RGBA){const Se=ie?hc:lt.getTransfer(Y);I===t.FLOAT&&($=t.RGBA32F),I===t.HALF_FLOAT&&($=t.RGBA16F),I===t.UNSIGNED_BYTE&&($=Se===vt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(M,g){let I;return M?g===null||g===Wi||g===Fa?I=t.DEPTH24_STENCIL8:g===gi?I=t.DEPTH32F_STENCIL8:g===Na&&(I=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Wi||g===Fa?I=t.DEPTH_COMPONENT24:g===gi?I=t.DEPTH_COMPONENT32F:g===Na&&(I=t.DEPTH_COMPONENT16),I}function w(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==an&&M.minFilter!==dn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){const g=M.target;g.removeEventListener("dispose",R),V(g),g.isVideoTexture&&u.delete(g)}function P(M){const g=M.target;g.removeEventListener("dispose",P),A(g)}function V(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,Y=f.get(I);if(Y){const ie=Y[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&y(M),Object.keys(Y).length===0&&f.delete(I)}i.remove(M)}function y(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const I=M.source,Y=f.get(I);delete Y[g.__cacheKey],o.memory.textures--}function A(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let ie=0;ie<g.__webglFramebuffer[Y].length;ie++)t.deleteFramebuffer(g.__webglFramebuffer[Y][ie]);else t.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[Y]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=M.textures;for(let Y=0,ie=I.length;Y<ie;Y++){const $=i.get(I[Y]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(I[Y])}i.remove(M)}let N=0;function Q(){N=0}function F(){const M=N;return M>=s.maxTextures&&qe("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),N+=1,M}function H(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function z(M,g){const I=i.get(M);if(M.isVideoTexture&&J(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&I.__version!==M.version){const Y=M.image;if(Y===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,M,g);return}}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function k(M,g){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){ne(I,M,g);return}else M.isExternalTexture&&(I.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function U(M,g){const I=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){ne(I,M,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function j(M,g){const I=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&I.__version!==M.version){oe(I,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const ce={[Ua]:t.REPEAT,[as]:t.CLAMP_TO_EDGE,[Xh]:t.MIRRORED_REPEAT},he={[an]:t.NEAREST,[kS]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Cu]:t.LINEAR_MIPMAP_NEAREST,[mr]:t.LINEAR_MIPMAP_LINEAR},ae={[GS]:t.NEVER,[YS]:t.ALWAYS,[HS]:t.LESS,[Pd]:t.LEQUAL,[WS]:t.EQUAL,[Ld]:t.GEQUAL,[XS]:t.GREATER,[qS]:t.NOTEQUAL};function Re(M,g){if(g.type===gi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===dn||g.magFilter===Cu||g.magFilter===hl||g.magFilter===mr||g.minFilter===dn||g.minFilter===Cu||g.minFilter===hl||g.minFilter===mr)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ce[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ce[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ce[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,he[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===an||g.minFilter!==hl&&g.minFilter!==mr||g.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Pe(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",R));const Y=g.source;let ie=f.get(Y);ie===void 0&&(ie={},f.set(Y,ie));const $=H(g);if($!==M.__cacheKey){ie[$]===void 0&&(ie[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),ie[$].usedTimes++;const Se=ie[M.__cacheKey];Se!==void 0&&(ie[M.__cacheKey].usedTimes--,Se.usedTimes===0&&y(g)),M.__cacheKey=$,M.__webglTexture=ie[$].texture}return I}function Ye(M,g,I){return Math.floor(Math.floor(M/I)/g)}function $e(M,g,I,Y){const $=M.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{$.sort((ue,ve)=>ue.start-ve.start);let Se=0;for(let ue=1;ue<$.length;ue++){const ve=$[Se],Me=$[ue],Ce=ve.start+ve.count,ge=Ye(Me.start,g.width,4),Ze=Ye(ve.start,g.width,4);Me.start<=Ce+1&&ge===Ze&&Ye(Me.start+Me.count-1,g.width,4)===ge?ve.count=Math.max(ve.count,Me.start+Me.count-ve.start):(++Se,$[Se]=Me)}$.length=Se+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Fe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ue=0,ve=$.length;ue<ve;ue++){const Me=$[ue],Ce=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),Ze=Ce%g.width,G=Math.floor(Ce/g.width),we=ge,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,G),n.texSubImage2D(t.TEXTURE_2D,0,Ze,G,we,me,I,Y,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Fe)}}function ne(M,g,I){let Y=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=t.TEXTURE_3D);const ie=Pe(M,g),$=g.source;n.bindTexture(Y,M.__webglTexture,t.TEXTURE0+I);const Se=i.get($);if($.version!==Se.__version||ie===!0){n.activeTexture(t.TEXTURE0+I);const fe=lt.getPrimaries(lt.workingColorSpace),Te=g.colorSpace===Ds?null:lt.getPrimaries(g.colorSpace),Fe=g.colorSpace===Ds||fe===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ue=x(g.image,!1,s.maxTextureSize);ue=Z(g,ue);const ve=r.convert(g.format,g.colorSpace),Me=r.convert(g.type);let Ce=S(g.internalFormat,ve,Me,g.colorSpace,g.isVideoTexture);Re(Y,g);let ge;const Ze=g.mipmaps,G=g.isVideoTexture!==!0,we=Se.__version===void 0||ie===!0,me=$.dataReady,Le=w(g,ue);if(g.isDepthTexture)Ce=v(g.format===gr,g.type),we&&(G?n.texStorage2D(t.TEXTURE_2D,1,Ce,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ue.width,ue.height,0,ve,Me,null));else if(g.isDataTexture)if(Ze.length>0){G&&we&&n.texStorage2D(t.TEXTURE_2D,Le,Ce,Ze[0].width,Ze[0].height);for(let de=0,le=Ze.length;de<le;de++)ge=Ze[de],G?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ge.width,ge.height,ve,Me,ge.data):n.texImage2D(t.TEXTURE_2D,de,Ce,ge.width,ge.height,0,ve,Me,ge.data);g.generateMipmaps=!1}else G?(we&&n.texStorage2D(t.TEXTURE_2D,Le,Ce,ue.width,ue.height),me&&$e(g,ue,ve,Me)):n.texImage2D(t.TEXTURE_2D,0,Ce,ue.width,ue.height,0,ve,Me,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Ce,Ze[0].width,Ze[0].height,ue.depth);for(let de=0,le=Ze.length;de<le;de++)if(ge=Ze[de],g.format!==_i)if(ve!==null)if(G){if(me)if(g.layerUpdates.size>0){const xe=f0(ge.width,ge.height,g.format,g.type);for(const je of g.layerUpdates){const Tt=ge.data.subarray(je*xe/ge.data.BYTES_PER_ELEMENT,(je+1)*xe/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,je,ge.width,ge.height,1,ve,Tt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ge.width,ge.height,ue.depth,ve,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,Ce,ge.width,ge.height,ue.depth,0,ge.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,ge.width,ge.height,ue.depth,ve,Me,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,Ce,ge.width,ge.height,ue.depth,0,ve,Me,ge.data)}else{G&&we&&n.texStorage2D(t.TEXTURE_2D,Le,Ce,Ze[0].width,Ze[0].height);for(let de=0,le=Ze.length;de<le;de++)ge=Ze[de],g.format!==_i?ve!==null?G?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,ge.width,ge.height,ve,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,de,Ce,ge.width,ge.height,0,ge.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ge.width,ge.height,ve,Me,ge.data):n.texImage2D(t.TEXTURE_2D,de,Ce,ge.width,ge.height,0,ve,Me,ge.data)}else if(g.isDataArrayTexture)if(G){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Ce,ue.width,ue.height,ue.depth),me)if(g.layerUpdates.size>0){const de=f0(ue.width,ue.height,g.format,g.type);for(const le of g.layerUpdates){const xe=ue.data.subarray(le*de/ue.data.BYTES_PER_ELEMENT,(le+1)*de/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,ve,Me,xe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Me,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ue.width,ue.height,ue.depth,0,ve,Me,ue.data);else if(g.isData3DTexture)G?(we&&n.texStorage3D(t.TEXTURE_3D,Le,Ce,ue.width,ue.height,ue.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Me,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ue.width,ue.height,ue.depth,0,ve,Me,ue.data);else if(g.isFramebufferTexture){if(we)if(G)n.texStorage2D(t.TEXTURE_2D,Le,Ce,ue.width,ue.height);else{let de=ue.width,le=ue.height;for(let xe=0;xe<Le;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ce,de,le,0,ve,Me,null),de>>=1,le>>=1}}else if(Ze.length>0){if(G&&we){const de=se(Ze[0]);n.texStorage2D(t.TEXTURE_2D,Le,Ce,de.width,de.height)}for(let de=0,le=Ze.length;de<le;de++)ge=Ze[de],G?me&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,ve,Me,ge):n.texImage2D(t.TEXTURE_2D,de,Ce,ve,Me,ge);g.generateMipmaps=!1}else if(G){if(we){const de=se(ue);n.texStorage2D(t.TEXTURE_2D,Le,Ce,de.width,de.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Me,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ce,ve,Me,ue);m(g)&&p(Y),Se.__version=$.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function oe(M,g,I){if(g.image.length!==6)return;const Y=Pe(M,g),ie=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);const $=i.get(ie);if(ie.version!==$.__version||Y===!0){n.activeTexture(t.TEXTURE0+I);const Se=lt.getPrimaries(lt.workingColorSpace),fe=g.colorSpace===Ds?null:lt.getPrimaries(g.colorSpace),Te=g.colorSpace===Ds||Se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!Fe&&!ue?ve[le]=x(g.image[le],!0,s.maxCubemapSize):ve[le]=ue?g.image[le].image:g.image[le],ve[le]=Z(g,ve[le]);const Me=ve[0],Ce=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),Ze=S(g.internalFormat,Ce,ge,g.colorSpace),G=g.isVideoTexture!==!0,we=$.__version===void 0||Y===!0,me=ie.dataReady;let Le=w(g,Me);Re(t.TEXTURE_CUBE_MAP,g);let de;if(Fe){G&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Ze,Me.width,Me.height);for(let le=0;le<6;le++){de=ve[le].mipmaps;for(let xe=0;xe<de.length;xe++){const je=de[xe];g.format!==_i?Ce!==null?G?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,je.width,je.height,Ce,je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,Ze,je.width,je.height,0,je.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,0,0,je.width,je.height,Ce,ge,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe,Ze,je.width,je.height,0,Ce,ge,je.data)}}}else{if(de=g.mipmaps,G&&we){de.length>0&&Le++;const le=se(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Ze,le.width,le.height)}for(let le=0;le<6;le++)if(ue){G?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Ce,ge,ve[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,ve[le].width,ve[le].height,0,Ce,ge,ve[le].data);for(let xe=0;xe<de.length;xe++){const Tt=de[xe].image[le].image;G?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,Tt.width,Tt.height,Ce,ge,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,Ze,Tt.width,Tt.height,0,Ce,ge,Tt.data)}}else{G?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce,ge,ve[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ze,Ce,ge,ve[le]);for(let xe=0;xe<de.length;xe++){const je=de[xe];G?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,0,0,Ce,ge,je.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,xe+1,Ze,Ce,ge,je.image[le])}}}m(g)&&p(t.TEXTURE_CUBE_MAP),$.__version=ie.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function be(M,g,I,Y,ie,$){const Se=r.convert(I.format,I.colorSpace),fe=r.convert(I.type),Te=S(I.internalFormat,Se,fe,I.colorSpace),Fe=i.get(g),ue=i.get(I);if(ue.__renderTarget=g,!Fe.__hasExternalTextures){const ve=Math.max(1,g.width>>$),Me=Math.max(1,g.height>>$);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,$,Te,ve,Me,g.depth,0,Se,fe,null):n.texImage2D(ie,$,Te,ve,Me,0,Se,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),re(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ie,ue.__webglTexture,0,b(g)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ie,ue.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(M,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const Y=g.depthTexture,ie=Y&&Y.isDepthTexture?Y.type:null,$=v(g.stencilBuffer,ie),Se=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;re(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(g),$,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(g),$,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,$,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,M)}else{const Y=g.textures;for(let ie=0;ie<Y.length;ie++){const $=Y[ie],Se=r.convert($.format,$.colorSpace),fe=r.convert($.type),Te=S($.internalFormat,Se,fe,$.colorSpace);re(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(g),Te,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(g),Te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(M,g,I){const Y=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),Re(t.TEXTURE_CUBE_MAP,g.depthTexture);const Fe=r.convert(g.depthTexture.format),ue=r.convert(g.depthTexture.type);let ve;g.depthTexture.format===gs?ve=t.DEPTH_COMPONENT24:g.depthTexture.format===gr&&(ve=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ve,g.width,g.height,0,Fe,ue,null)}}else z(g.depthTexture,0);const $=ie.__webglTexture,Se=b(g),fe=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+I:t.TEXTURE_2D,Te=g.depthTexture.format===gr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===gs)re(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,fe,$,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Te,fe,$,0);else if(g.depthTexture.format===gr)re(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,fe,$,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,Te,fe,$,0);else throw new Error("Unknown depthTexture format")}function Ke(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const Y=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",ie)};Y.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=Y}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)_e(g.__webglFramebuffer[Y],M,Y);else{const Y=M.texture.mipmaps;Y&&Y.length>0?_e(g.__webglFramebuffer[0],M,0):_e(g.__webglFramebuffer,M,0)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ne(g.__webglDepthbuffer[Y],M,!1);else{const ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,$)}}else{const Y=M.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ne(g.__webglDepthbuffer,M,!1);else{const ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function C(M,g,I){const Y=i.get(M);g!==void 0&&be(Y.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ke(M)}function D(M){const g=M.texture,I=i.get(M),Y=i.get(g);M.addEventListener("dispose",P);const ie=M.textures,$=M.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=g.version,o.memory.textures++),$){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let Te=0;Te<g.mipmaps.length;Te++)I.__webglFramebuffer[fe][Te]=t.createFramebuffer()}else I.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)I.__webglFramebuffer[fe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Se)for(let fe=0,Te=ie.length;fe<Te;fe++){const Fe=i.get(ie[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&re(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const Te=ie[fe];I.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const Fe=r.convert(Te.format,Te.colorSpace),ue=r.convert(Te.type),ve=S(Te.internalFormat,Fe,ue,Te.colorSpace,M.isXRRenderTarget===!0),Me=b(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ve,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(I.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Re(t.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)be(I.__webglFramebuffer[fe][Te],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te);else be(I.__webglFramebuffer[fe],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(g)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let fe=0,Te=ie.length;fe<Te;fe++){const Fe=ie[fe],ue=i.get(Fe);let ve=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,ue.__webglTexture),Re(ve,Fe),be(I.__webglFramebuffer,M,Fe,t.COLOR_ATTACHMENT0+fe,ve,0),m(Fe)&&p(ve)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(fe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,Y.__webglTexture),Re(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)be(I.__webglFramebuffer[Te],M,g,t.COLOR_ATTACHMENT0,fe,Te);else be(I.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,fe,0);m(g)&&p(fe),n.unbindTexture()}M.depthBuffer&&Ke(M)}function L(M){const g=M.textures;for(let I=0,Y=g.length;I<Y;I++){const ie=g[I];if(m(ie)){const $=T(M),Se=i.get(ie).__webglTexture;n.bindTexture($,Se),p($),n.unbindTexture()}}}const W=[],O=[];function q(M){if(M.samples>0){if(re(M)===!1){const g=M.textures,I=M.width,Y=M.height;let ie=t.COLOR_BUFFER_BIT;const $=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(M),fe=g.length>1;if(fe)for(let Fe=0;Fe<g.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Fe=0;Fe<g.length;Fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Fe]);const ue=i.get(g[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,I,Y,0,0,I,Y,ie,t.NEAREST),l===!0&&(W.length=0,O.length=0,W.push(t.COLOR_ATTACHMENT0+Fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(W.push($),O.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,W))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Fe=0;Fe<g.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Fe]);const ue=i.get(g[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function b(M){return Math.min(s.maxSamples,M.samples)}function re(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function Z(M,g){const I=M.colorSpace,Y=M.format,ie=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==_o&&I!==Ds&&(lt.getTransfer(I)===vt?(Y!==_i||ie!==qn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",I)),g}function se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=C,this.setupRenderTarget=D,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=be,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function _w(t,e){function n(i,s=Ds){let r;const o=lt.getTransfer(s);if(i===qn)return t.UNSIGNED_BYTE;if(i===bd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ed)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Q_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===K_)return t.BYTE;if(i===J_)return t.SHORT;if(i===Na)return t.UNSIGNED_SHORT;if(i===yd)return t.INT;if(i===Wi)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===jn)return t.HALF_FLOAT;if(i===e1)return t.ALPHA;if(i===t1)return t.RGB;if(i===_i)return t.RGBA;if(i===gs)return t.DEPTH_COMPONENT;if(i===gr)return t.DEPTH_STENCIL;if(i===Td)return t.RED;if(i===Ad)return t.RED_INTEGER;if(i===go)return t.RG;if(i===wd)return t.RG_INTEGER;if(i===Cd)return t.RGBA_INTEGER;if(i===ql||i===Yl||i===jl||i===$l)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ql)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$l)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qh||i===Yh||i===jh||i===$h)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Jh||i===Zh||i===Qh||i===ef||i===tf||i===nf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kh||i===Jh)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qh)return r.COMPRESSED_R11_EAC;if(i===ef)return r.COMPRESSED_SIGNED_R11_EAC;if(i===tf)return r.COMPRESSED_RG11_EAC;if(i===nf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sf||i===rf||i===of||i===af||i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===_f)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===of)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===af)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ff)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===df)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gf)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_f)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vf||i===xf||i===Sf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vf)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mf||i===yf||i===bf||i===Ef)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ef)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new g1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pn({vertexShader:vw,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new St(new tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mw extends Uo{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Sw,p={},T=n.getContextAttributes();let S=null,v=null;const w=[],R=[],P=new pe;let V=null;const y=new In;y.viewport=new Vt;const A=new In;A.viewport=new Vt;const N=[y,A],Q=new Ly;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=w[ne];return oe===void 0&&(oe=new $u,w[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=w[ne];return oe===void 0&&(oe=new $u,w[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=w[ne];return oe===void 0&&(oe=new $u,w[ne]=oe),oe.getHandSpace()};function z(ne){const oe=R.indexOf(ne.inputSource);if(oe===-1)return;const be=w[oe];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||o),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",U);for(let ne=0;ne<w.length;ne++){const oe=R[ne];oe!==null&&(R[ne]=null,w[ne].disconnect(oe))}F=null,H=null,m.reset();for(const ne in p)delete p[ne];e.setRenderTarget(S),d=null,f=null,h=null,s=null,v=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(V),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",U),T.xrCompatible!==!0&&await n.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ne=null,_e=null;T.depth&&(_e=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=T.stencil?gr:gs,Ne=T.stencil?Fa:Wi);const Ke={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Un(f.textureWidth,f.textureHeight,{format:_i,type:qn,depthTexture:new za(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Un(d.framebufferWidth,d.framebufferHeight,{format:_i,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(ne){for(let oe=0;oe<ne.removed.length;oe++){const be=ne.removed[oe],Ne=R.indexOf(be);Ne>=0&&(R[Ne]=null,w[Ne].disconnect(be))}for(let oe=0;oe<ne.added.length;oe++){const be=ne.added[oe];let Ne=R.indexOf(be);if(Ne===-1){for(let Ke=0;Ke<w.length;Ke++)if(Ke>=R.length){R.push(be),Ne=Ke;break}else if(R[Ke]===null){R[Ke]=be,Ne=Ke;break}if(Ne===-1)break}const _e=w[Ne];_e&&_e.connect(be)}}const j=new B,ce=new B;function he(ne,oe,be){j.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(be.matrixWorld);const Ne=j.distanceTo(ce),_e=oe.projectionMatrix.elements,Ke=be.projectionMatrix.elements,C=_e[14]/(_e[10]-1),D=_e[14]/(_e[10]+1),L=(_e[9]+1)/_e[5],W=(_e[9]-1)/_e[5],O=(_e[8]-1)/_e[0],q=(Ke[8]+1)/Ke[0],b=C*O,re=C*q,J=Ne/(-O+q),Z=J*-O;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Z),ne.translateZ(J),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),_e[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const se=C+J,M=D+J,g=b-Z,I=re+(Ne-Z),Y=L*D/M*se,ie=W*D/M*se;ne.projectionMatrix.makePerspective(g,I,Y,ie,se,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ae(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let oe=ne.near,be=ne.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(be=m.depthFar)),Q.near=A.near=y.near=oe,Q.far=A.far=y.far=be,(F!==Q.near||H!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),F=Q.near,H=Q.far),Q.layers.mask=ne.layers.mask|6,y.layers.mask=Q.layers.mask&3,A.layers.mask=Q.layers.mask&5;const Ne=ne.parent,_e=Q.cameras;ae(Q,Ne);for(let Ke=0;Ke<_e.length;Ke++)ae(_e[Ke],Ne);_e.length===2?he(Q,y,A):Q.projectionMatrix.copy(y.projectionMatrix),Re(ne,Q,Ne)};function Re(ne,oe,be){be===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=vo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(ne){return p[ne]};let Pe=null;function Ye(ne,oe){if(u=oe.getViewerPose(c||o),_=oe,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ne=!1;be.length!==Q.cameras.length&&(Q.cameras.length=0,Ne=!0);for(let D=0;D<be.length;D++){const L=be[D];let W=null;if(d!==null)W=d.getViewport(L);else{const q=h.getViewSubImage(f,L);W=q.viewport,D===0&&(e.setRenderTargetTextures(v,q.colorTexture,q.depthStencilTexture),e.setRenderTarget(v))}let O=N[D];O===void 0&&(O=new In,O.layers.enable(D),O.viewport=new Vt,N[D]=O),O.matrix.fromArray(L.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(L.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(W.x,W.y,W.width,W.height),D===0&&(Q.matrix.copy(O.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ne===!0&&Q.cameras.push(O)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const D=h.getDepthInformation(be[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(_e&&_e.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let D=0;D<be.length;D++){const L=be[D].camera;if(L){let W=p[L];W||(W=new g1,p[L]=W);const O=h.getCameraImage(L);W.sourceTexture=O}}}}for(let be=0;be<w.length;be++){const Ne=R[be],_e=w[be];Ne!==null&&_e!==void 0&&_e.update(Ne,oe,c||o)}Pe&&Pe(ne,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const $e=new L1;$e.setAnimationLoop(Ye),this.setAnimationLoop=function(ne){Pe=ne},this.dispose=function(){}}}const cr=new Mi,yw=new Mt;function bw(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,c1(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),S=T.envMap,v=T.envMapRotation;S&&(m.envMap.value=S,cr.copy(v),cr.x*=-1,cr.y*=-1,cr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(yw.makeRotationFromEuler(cr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ew(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const v=S.program;i.uniformBlockBinding(T,v)}function c(T,S){let v=s[T.id];v===void 0&&(_(T),v=u(T),s[T.id]=v,T.addEventListener("dispose",m));const w=S.program;i.updateUBOMapping(T,w);const R=e.render.frame;r[T.id]!==R&&(f(T),r[T.id]=R)}function u(T){const S=h();T.__bindingPointIndex=S;const v=t.createBuffer(),w=T.__size,R=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,w,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],v=T.uniforms,w=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let R=0,P=v.length;R<P;R++){const V=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,A=V.length;y<A;y++){const N=V[y];if(d(N,R,y,w)===!0){const Q=N.__offset,F=Array.isArray(N.value)?N.value:[N.value];let H=0;for(let z=0;z<F.length;z++){const k=F[z],U=x(k);typeof k=="number"||typeof k=="boolean"?(N.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,Q+H,N.__data)):k.isMatrix3?(N.__data[0]=k.elements[0],N.__data[1]=k.elements[1],N.__data[2]=k.elements[2],N.__data[3]=0,N.__data[4]=k.elements[3],N.__data[5]=k.elements[4],N.__data[6]=k.elements[5],N.__data[7]=0,N.__data[8]=k.elements[6],N.__data[9]=k.elements[7],N.__data[10]=k.elements[8],N.__data[11]=0):(k.toArray(N.__data,H),H+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(T,S,v,w){const R=T.value,P=S+"_"+v;if(w[P]===void 0)return typeof R=="number"||typeof R=="boolean"?w[P]=R:w[P]=R.clone(),!0;{const V=w[P];if(typeof R=="number"||typeof R=="boolean"){if(V!==R)return w[P]=R,!0}else if(V.equals(R)===!1)return V.copy(R),!0}return!1}function _(T){const S=T.uniforms;let v=0;const w=16;for(let P=0,V=S.length;P<V;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let A=0,N=y.length;A<N;A++){const Q=y[A],F=Array.isArray(Q.value)?Q.value:[Q.value];for(let H=0,z=F.length;H<z;H++){const k=F[H],U=x(k),j=v%w,ce=j%U.boundary,he=j+ce;v+=ce,he!==0&&w-he<U.storage&&(v+=w-he),Q.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=v,v+=U.storage}}}const R=v%w;return R>0&&(v+=w-R),T.__size=v,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)t.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ci=null;function Aw(){return Ci===null&&(Ci=new p1(Tw,16,16,go,jn),Ci.name="DFG_LUT",Ci.minFilter=dn,Ci.magFilter=dn,Ci.wrapS=as,Ci.wrapT=as,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class ww{constructor(e={}){const{canvas:n=jS(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=qn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=d,m=new Set([Cd,wd,Ad]),p=new Set([qn,Wi,Na,Fa,bd,Ed]),T=new Uint32Array(4),S=new Int32Array(4);let v=null,w=null;const R=[],P=[];let V=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=hn;let N=0,Q=0,F=null,H=-1,z=null;const k=new Vt,U=new Vt;let j=null;const ce=new Je(0);let he=0,ae=n.width,Re=n.height,Pe=1,Ye=null,$e=null;const ne=new Vt(0,0,ae,Re),oe=new Vt(0,0,ae,Re);let be=!1;const Ne=new Nd;let _e=!1,Ke=!1;const C=new Mt,D=new B,L=new Vt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O=!1;function q(){return F===null?Pe:1}let b=i;function re(E,X){return n.getContext(E,X)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xd}`),n.addEventListener("webglcontextlost",je,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",gt,!1),b===null){const X="webgl2";if(b=re(X,E),b===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw at("WebGLRenderer: "+E.message),E}let J,Z,se,M,g,I,Y,ie,$,Se,fe,Te,Fe,ue,ve,Me,Ce,ge,Ze,G,we,me,Le,de;function le(){J=new AT(b),J.init(),me=new _w(b,J),Z=new _T(b,J,e,me),se=new mw(b,J),Z.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),M=new RT(b),g=new ew,I=new gw(b,J,se,g,Z,me,M),Y=new xT(y),ie=new TT(y),$=new Iy(b),Le=new mT(b,$),Se=new wT(b,$,M,Le),fe=new LT(b,Se,$,M),Ze=new PT(b,Z,I),Me=new vT(g),Te=new QA(y,Y,ie,J,Z,Le,Me),Fe=new bw(y,g),ue=new nw,ve=new lw(J),ge=new pT(y,Y,ie,se,fe,_,l),Ce=new dw(y,fe,Z),de=new Ew(b,M,Z,se),G=new gT(b,J,M),we=new CT(b,J,M),M.programs=Te.programs,y.capabilities=Z,y.extensions=J,y.properties=g,y.renderLists=ue,y.shadowMap=Ce,y.state=se,y.info=M}le(),x!==qn&&(V=new IT(x,n.width,n.height,s,r));const xe=new Mw(y,b);this.xr=xe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(E){E!==void 0&&(Pe=E,this.setSize(ae,Re,!1))},this.getSize=function(E){return E.set(ae,Re)},this.setSize=function(E,X,te=!0){if(xe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,Re=X,n.width=Math.floor(E*Pe),n.height=Math.floor(X*Pe),te===!0&&(n.style.width=E+"px",n.style.height=X+"px"),V!==null&&V.setSize(n.width,n.height),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(ae*Pe,Re*Pe).floor()},this.setDrawingBufferSize=function(E,X,te){ae=E,Re=X,Pe=te,n.width=Math.floor(E*te),n.height=Math.floor(X*te),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(x===qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,X,te,ee){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,X,te,ee),se.viewport(k.copy(ne).multiplyScalar(Pe).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,X,te,ee){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,X,te,ee),se.scissor(U.copy(oe).multiplyScalar(Pe).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(E){se.setScissorTest(be=E)},this.setOpaqueSort=function(E){Ye=E},this.setTransparentSort=function(E){$e=E},this.getClearColor=function(E){return E.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,te=!0){let ee=0;if(E){let K=!1;if(F!==null){const ye=F.texture.format;K=m.has(ye)}if(K){const ye=F.texture.type,De=p.has(ye),Ae=ge.getClearColor(),Ue=ge.getClearAlpha(),ke=Ae.r,Xe=Ae.g,He=Ae.b;De?(T[0]=ke,T[1]=Xe,T[2]=He,T[3]=Ue,b.clearBufferuiv(b.COLOR,0,T)):(S[0]=ke,S[1]=Xe,S[2]=He,S[3]=Ue,b.clearBufferiv(b.COLOR,0,S))}else ee|=b.COLOR_BUFFER_BIT}X&&(ee|=b.DEPTH_BUFFER_BIT),te&&(ee|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",je,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),ge.dispose(),ue.dispose(),ve.dispose(),g.dispose(),Y.dispose(),ie.dispose(),fe.dispose(),Le.dispose(),de.dispose(),Te.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Yp),xe.removeEventListener("sessionend",jp),Qs.stop()};function je(E){E.preventDefault(),Um("WebGLRenderer: Context Lost."),A=!0}function Tt(){Um("WebGLRenderer: Context Restored."),A=!1;const E=M.autoReset,X=Ce.enabled,te=Ce.autoUpdate,ee=Ce.needsUpdate,K=Ce.type;le(),M.autoReset=E,Ce.enabled=X,Ce.autoUpdate=te,Ce.needsUpdate=ee,Ce.type=K}function gt(E){at("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ai(E){const X=E.target;X.removeEventListener("dispose",Ai),$i(X)}function $i(E){Dx(E),g.remove(E)}function Dx(E){const X=g.get(E).programs;X!==void 0&&(X.forEach(function(te){Te.releaseProgram(te)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,te,ee,K,ye){X===null&&(X=W);const De=K.isMesh&&K.matrixWorld.determinant()<0,Ae=Ux(E,X,te,ee,K);se.setMaterial(ee,De);let Ue=te.index,ke=1;if(ee.wireframe===!0){if(Ue=Se.getWireframeAttribute(te),Ue===void 0)return;ke=2}const Xe=te.drawRange,He=te.attributes.position;let st=Xe.start*ke,xt=(Xe.start+Xe.count)*ke;ye!==null&&(st=Math.max(st,ye.start*ke),xt=Math.min(xt,(ye.start+ye.count)*ke)),Ue!==null?(st=Math.max(st,0),xt=Math.min(xt,Ue.count)):He!=null&&(st=Math.max(st,0),xt=Math.min(xt,He.count));const Ot=xt-st;if(Ot<0||Ot===1/0)return;Le.setup(K,ee,Ae,te,Ue);let Bt,yt=G;if(Ue!==null&&(Bt=$.get(Ue),yt=we,yt.setIndex(Bt)),K.isMesh)ee.wireframe===!0?(se.setLineWidth(ee.wireframeLinewidth*q()),yt.setMode(b.LINES)):yt.setMode(b.TRIANGLES);else if(K.isLine){let We=ee.linewidth;We===void 0&&(We=1),se.setLineWidth(We*q()),K.isLineSegments?yt.setMode(b.LINES):K.isLineLoop?yt.setMode(b.LINE_LOOP):yt.setMode(b.LINE_STRIP)}else K.isPoints?yt.setMode(b.POINTS):K.isSprite&&yt.setMode(b.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ba("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))yt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const We=K._multiDrawStarts,_t=K._multiDrawCounts,ut=K._multiDrawCount,Bn=Ue?$.get(Ue).bytesPerElement:1,Dr=g.get(ee).currentProgram.getUniforms();for(let kn=0;kn<ut;kn++)Dr.setValue(b,"_gl_DrawID",kn),yt.render(We[kn]/Bn,_t[kn])}else if(K.isInstancedMesh)yt.renderInstances(st,Ot,K.count);else if(te.isInstancedBufferGeometry){const We=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,_t=Math.min(te.instanceCount,We);yt.renderInstances(st,Ot,_t)}else yt.render(st,Ot)};function qp(E,X,te){E.transparent===!0&&E.side===Bi&&E.forceSinglePass===!1?(E.side=Tn,E.needsUpdate=!0,al(E,X,te),E.side=qs,E.needsUpdate=!0,al(E,X,te),E.side=Bi):al(E,X,te)}this.compile=function(E,X,te=null){te===null&&(te=E),w=ve.get(te),w.init(X),P.push(w),te.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),E!==te&&E.traverseVisible(function(K){K.isLight&&K.layers.test(X.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights();const ee=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const ye=K.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const Ae=ye[De];qp(Ae,te,K),ee.add(Ae)}else qp(ye,te,K),ee.add(ye)}),w=P.pop(),ee},this.compileAsync=function(E,X,te=null){const ee=this.compile(E,X,te);return new Promise(K=>{function ye(){if(ee.forEach(function(De){g.get(De).currentProgram.isReady()&&ee.delete(De)}),ee.size===0){K(E);return}setTimeout(ye,10)}J.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let mu=null;function Ix(E){mu&&mu(E)}function Yp(){Qs.stop()}function jp(){Qs.start()}const Qs=new L1;Qs.setAnimationLoop(Ix),typeof self<"u"&&Qs.setContext(self),this.setAnimationLoop=function(E){mu=E,xe.setAnimationLoop(E),E===null?Qs.stop():Qs.start()},xe.addEventListener("sessionstart",Yp),xe.addEventListener("sessionend",jp),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const te=xe.enabled===!0&&xe.isPresenting===!0,ee=V!==null&&(F===null||te)&&V.begin(y,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(X),X=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,X,F),w=ve.get(E,P.length),w.init(X),P.push(w),C.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ne.setFromProjectionMatrix(C,ki,X.reversedDepth),Ke=this.localClippingEnabled,_e=Me.init(this.clippingPlanes,Ke),v=ue.get(E,R.length),v.init(),R.push(v),xe.enabled===!0&&xe.isPresenting===!0){const De=y.xr.getDepthSensingMesh();De!==null&&gu(De,X,-1/0,y.sortObjects)}gu(E,X,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Ye,$e),O=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,O&&ge.addToRenderList(v,E),this.info.render.frame++,_e===!0&&Me.beginShadows();const K=w.state.shadowsArray;if(Ce.render(K,E,X),_e===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&V.hasRenderPass())===!1){const De=v.opaque,Ae=v.transmissive;if(w.setupLights(),X.isArrayCamera){const Ue=X.cameras;if(Ae.length>0)for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const He=Ue[ke];Kp(De,Ae,E,He)}O&&ge.render(E);for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const He=Ue[ke];$p(v,E,He,He.viewport)}}else Ae.length>0&&Kp(De,Ae,E,X),O&&ge.render(E),$p(v,E,X)}F!==null&&Q===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),ee&&V.end(y),E.isScene===!0&&E.onAfterRender(y,E,X),Le.resetDefaultState(),H=-1,z=null,P.pop(),P.length>0?(w=P[P.length-1],_e===!0&&Me.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function gu(E,X,te,ee){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ne.intersectsSprite(E)){ee&&L.setFromMatrixPosition(E.matrixWorld).applyMatrix4(C);const De=fe.update(E),Ae=E.material;Ae.visible&&v.push(E,De,Ae,te,L.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ne.intersectsObject(E))){const De=fe.update(E),Ae=E.material;if(ee&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),L.copy(E.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),L.copy(De.boundingSphere.center)),L.applyMatrix4(E.matrixWorld).applyMatrix4(C)),Array.isArray(Ae)){const Ue=De.groups;for(let ke=0,Xe=Ue.length;ke<Xe;ke++){const He=Ue[ke],st=Ae[He.materialIndex];st&&st.visible&&v.push(E,De,st,te,L.z,He)}}else Ae.visible&&v.push(E,De,Ae,te,L.z,null)}}const ye=E.children;for(let De=0,Ae=ye.length;De<Ae;De++)gu(ye[De],X,te,ee)}function $p(E,X,te,ee){const{opaque:K,transmissive:ye,transparent:De}=E;w.setupLightsView(te),_e===!0&&Me.setGlobalState(y.clippingPlanes,te),ee&&se.viewport(k.copy(ee)),K.length>0&&ol(K,X,te),ye.length>0&&ol(ye,X,te),De.length>0&&ol(De,X,te),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Kp(E,X,te,ee){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ee.id]===void 0){const st=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ee.id]=new Un(1,1,{generateMipmaps:!0,type:st?jn:qn,minFilter:mr,samples:Z.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}const ye=w.state.transmissionRenderTarget[ee.id],De=ee.viewport||k;ye.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);const Ae=y.getRenderTarget(),Ue=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(ce),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),O&&ge.render(te);const Xe=y.toneMapping;y.toneMapping=Gi;const He=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),w.setupLightsView(ee),_e===!0&&Me.setGlobalState(y.clippingPlanes,ee),ol(E,te,ee),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),J.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let xt=0,Ot=X.length;xt<Ot;xt++){const Bt=X[xt],{object:yt,geometry:We,material:_t,group:ut}=Bt;if(_t.side===Bi&&yt.layers.test(ee.layers)){const Bn=_t.side;_t.side=Tn,_t.needsUpdate=!0,Jp(yt,te,ee,We,_t,ut),_t.side=Bn,_t.needsUpdate=!0,st=!0}}st===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ae,Ue,ke),y.setClearColor(ce,he),He!==void 0&&(ee.viewport=He),y.toneMapping=Xe}function ol(E,X,te){const ee=X.isScene===!0?X.overrideMaterial:null;for(let K=0,ye=E.length;K<ye;K++){const De=E[K],{object:Ae,geometry:Ue,group:ke}=De;let Xe=De.material;Xe.allowOverride===!0&&ee!==null&&(Xe=ee),Ae.layers.test(te.layers)&&Jp(Ae,X,te,Ue,Xe,ke)}}function Jp(E,X,te,ee,K,ye){E.onBeforeRender(y,X,te,ee,K,ye),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(y,X,te,ee,E,ye),K.transparent===!0&&K.side===Bi&&K.forceSinglePass===!1?(K.side=Tn,K.needsUpdate=!0,y.renderBufferDirect(te,X,ee,K,E,ye),K.side=qs,K.needsUpdate=!0,y.renderBufferDirect(te,X,ee,K,E,ye),K.side=Bi):y.renderBufferDirect(te,X,ee,K,E,ye),E.onAfterRender(y,X,te,ee,K,ye)}function al(E,X,te){X.isScene!==!0&&(X=W);const ee=g.get(E),K=w.state.lights,ye=w.state.shadowsArray,De=K.state.version,Ae=Te.getParameters(E,K.state,ye,X,te),Ue=Te.getProgramCacheKey(Ae);let ke=ee.programs;ee.environment=E.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(E.isMeshStandardMaterial?ie:Y).get(E.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Ai),ke=new Map,ee.programs=ke);let Xe=ke.get(Ue);if(Xe!==void 0){if(ee.currentProgram===Xe&&ee.lightsStateVersion===De)return Qp(E,Ae),Xe}else Ae.uniforms=Te.getUniforms(E),E.onBeforeCompile(Ae,y),Xe=Te.acquireProgram(Ae,Ue),ke.set(Ue,Xe),ee.uniforms=Ae.uniforms;const He=ee.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=Me.uniform),Qp(E,Ae),ee.needsLights=Fx(E),ee.lightsStateVersion=De,ee.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),ee.currentProgram=Xe,ee.uniformsList=null,Xe}function Zp(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=Kl.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Qp(E,X){const te=g.get(E);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Ux(E,X,te,ee,K){X.isScene!==!0&&(X=W),I.resetTextureUnits();const ye=X.fog,De=ee.isMeshStandardMaterial?X.environment:null,Ae=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:_o,Ue=(ee.isMeshStandardMaterial?ie:Y).get(ee.envMap||De),ke=ee.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Xe=!!te.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!te.morphAttributes.position,st=!!te.morphAttributes.normal,xt=!!te.morphAttributes.color;let Ot=Gi;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ot=y.toneMapping);const Bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=Bt!==void 0?Bt.length:0,We=g.get(ee),_t=w.state.lights;if(_e===!0&&(Ke===!0||E!==z)){const vn=E===z&&ee.id===H;Me.setState(ee,E,vn)}let ut=!1;ee.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_t.state.version||We.outputColorSpace!==Ae||K.isBatchedMesh&&We.batching===!1||!K.isBatchedMesh&&We.batching===!0||K.isBatchedMesh&&We.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&We.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||K.isInstancedMesh&&We.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&We.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&We.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&We.instancingMorph===!1&&K.morphTexture!==null||We.envMap!==Ue||ee.fog===!0&&We.fog!==ye||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Me.numPlanes||We.numIntersection!==Me.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==Xe||We.morphTargets!==He||We.morphNormals!==st||We.morphColors!==xt||We.toneMapping!==Ot||We.morphTargetsCount!==yt)&&(ut=!0):(ut=!0,We.__version=ee.version);let Bn=We.currentProgram;ut===!0&&(Bn=al(ee,X,K));let Dr=!1,kn=!1,qo=!1;const At=Bn.getUniforms(),Rn=We.uniforms;if(se.useProgram(Bn.program)&&(Dr=!0,kn=!0,qo=!0),ee.id!==H&&(H=ee.id,kn=!0),Dr||z!==E){se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),At.setValue(b,"projectionMatrix",E.projectionMatrix),At.setValue(b,"viewMatrix",E.matrixWorldInverse);const Pn=At.map.cameraPosition;Pn!==void 0&&Pn.setValue(b,D.setFromMatrixPosition(E.matrixWorld)),Z.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,kn=!0,qo=!0)}if(We.needsLights&&(_t.state.directionalShadowMap.length>0&&At.setValue(b,"directionalShadowMap",_t.state.directionalShadowMap,I),_t.state.spotShadowMap.length>0&&At.setValue(b,"spotShadowMap",_t.state.spotShadowMap,I),_t.state.pointShadowMap.length>0&&At.setValue(b,"pointShadowMap",_t.state.pointShadowMap,I)),K.isSkinnedMesh){At.setOptional(b,K,"bindMatrix"),At.setOptional(b,K,"bindMatrixInverse");const vn=K.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),At.setValue(b,"boneTexture",vn.boneTexture,I))}K.isBatchedMesh&&(At.setOptional(b,K,"batchingTexture"),At.setValue(b,"batchingTexture",K._matricesTexture,I),At.setOptional(b,K,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",K._indirectTexture,I),At.setOptional(b,K,"batchingColorTexture"),K._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",K._colorsTexture,I));const ei=te.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&Ze.update(K,te,Bn),(kn||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,At.setValue(b,"receiveShadow",K.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Rn.envMap.value=Ue,Rn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&X.environment!==null&&(Rn.envMapIntensity.value=X.environmentIntensity),Rn.dfgLUT!==void 0&&(Rn.dfgLUT.value=Aw()),kn&&(At.setValue(b,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&Nx(Rn,qo),ye&&ee.fog===!0&&Fe.refreshFogUniforms(Rn,ye),Fe.refreshMaterialUniforms(Rn,ee,Pe,Re,w.state.transmissionRenderTarget[E.id]),Kl.upload(b,Zp(We),Rn,I)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Kl.upload(b,Zp(We),Rn,I),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(b,"center",K.center),At.setValue(b,"modelViewMatrix",K.modelViewMatrix),At.setValue(b,"normalMatrix",K.normalMatrix),At.setValue(b,"modelMatrix",K.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let Pn=0,_u=vn.length;Pn<_u;Pn++){const er=vn[Pn];de.update(er,Bn),de.bind(er,Bn)}}return Bn}function Nx(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function Fx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,X,te){const ee=g.get(E);ee.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),g.get(E.texture).__webglTexture=X,g.get(E.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:te,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const te=g.get(E);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const Ox=b.createFramebuffer();this.setRenderTarget=function(E,X=0,te=0){F=E,N=X,Q=te;let ee=null,K=!1,ye=!1;if(E){const Ae=g.get(E);if(Ae.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(b.FRAMEBUFFER,Ae.__webglFramebuffer),k.copy(E.viewport),U.copy(E.scissor),j=E.scissorTest,se.viewport(k),se.scissor(U),se.setScissorTest(j),H=-1;return}else if(Ae.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(Ae.__hasExternalTextures)I.rebindTextures(E,g.get(E.texture).__webglTexture,g.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(Ae.__boundDepthTexture!==Xe){if(Xe!==null&&g.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Ue=E.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ye=!0);const ke=g.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?ee=ke[X][te]:ee=ke[X],K=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?ee=g.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?ee=ke[te]:ee=ke,k.copy(E.viewport),U.copy(E.scissor),j=E.scissorTest}else k.copy(ne).multiplyScalar(Pe).floor(),U.copy(oe).multiplyScalar(Pe).floor(),j=be;if(te!==0&&(ee=Ox),se.bindFramebuffer(b.FRAMEBUFFER,ee)&&se.drawBuffers(E,ee),se.viewport(k),se.scissor(U),se.setScissorTest(j),K){const Ae=g.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ae.__webglTexture,te)}else if(ye){const Ae=X;for(let Ue=0;Ue<E.textures.length;Ue++){const ke=g.get(E.textures[Ue]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,te,Ae)}}else if(E!==null&&te!==0){const Ae=g.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ae.__webglTexture,te)}H=-1},this.readRenderTargetPixels=function(E,X,te,ee,K,ye,De,Ae=0){if(!(E&&E.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){se.bindFramebuffer(b.FRAMEBUFFER,Ue);try{const ke=E.textures[Ae],Xe=ke.format,He=ke.type;if(!Z.textureFormatReadable(Xe)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(He)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-ee&&te>=0&&te<=E.height-K&&(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ae),b.readPixels(X,te,ee,K,me.convert(Xe),me.convert(He),ye))}finally{const ke=F!==null?g.get(F).__webglFramebuffer:null;se.bindFramebuffer(b.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,X,te,ee,K,ye,De,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue)if(X>=0&&X<=E.width-ee&&te>=0&&te<=E.height-K){se.bindFramebuffer(b.FRAMEBUFFER,Ue);const ke=E.textures[Ae],Xe=ke.format,He=ke.type;if(!Z.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,st),b.bufferData(b.PIXEL_PACK_BUFFER,ye.byteLength,b.STREAM_READ),E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ae),b.readPixels(X,te,ee,K,me.convert(Xe),me.convert(He),0);const xt=F!==null?g.get(F).__webglFramebuffer:null;se.bindFramebuffer(b.FRAMEBUFFER,xt);const Ot=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await $S(b,Ot,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,st),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ye),b.deleteBuffer(st),b.deleteSync(Ot),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,te=0){const ee=Math.pow(2,-te),K=Math.floor(E.image.width*ee),ye=Math.floor(E.image.height*ee),De=X!==null?X.x:0,Ae=X!==null?X.y:0;I.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,te,0,0,De,Ae,K,ye),se.unbindTexture()};const Bx=b.createFramebuffer(),kx=b.createFramebuffer();this.copyTextureToTexture=function(E,X,te=null,ee=null,K=0,ye=null){ye===null&&(K!==0?(Ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=K,K=0):ye=0);let De,Ae,Ue,ke,Xe,He,st,xt,Ot;const Bt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(te!==null)De=te.max.x-te.min.x,Ae=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,ke=te.min.x,Xe=te.min.y,He=te.isBox3?te.min.z:0;else{const ei=Math.pow(2,-K);De=Math.floor(Bt.width*ei),Ae=Math.floor(Bt.height*ei),E.isDataArrayTexture?Ue=Bt.depth:E.isData3DTexture?Ue=Math.floor(Bt.depth*ei):Ue=1,ke=0,Xe=0,He=0}ee!==null?(st=ee.x,xt=ee.y,Ot=ee.z):(st=0,xt=0,Ot=0);const yt=me.convert(X.format),We=me.convert(X.type);let _t;X.isData3DTexture?(I.setTexture3D(X,0),_t=b.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),_t=b.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),_t=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,X.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,X.unpackAlignment);const ut=b.getParameter(b.UNPACK_ROW_LENGTH),Bn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Dr=b.getParameter(b.UNPACK_SKIP_PIXELS),kn=b.getParameter(b.UNPACK_SKIP_ROWS),qo=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Bt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Bt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(b.UNPACK_SKIP_ROWS,Xe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,He);const At=E.isDataArrayTexture||E.isData3DTexture,Rn=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const ei=g.get(E),vn=g.get(X),Pn=g.get(ei.__renderTarget),_u=g.get(vn.__renderTarget);se.bindFramebuffer(b.READ_FRAMEBUFFER,Pn.__webglFramebuffer),se.bindFramebuffer(b.DRAW_FRAMEBUFFER,_u.__webglFramebuffer);for(let er=0;er<Ue;er++)At&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(E).__webglTexture,K,He+er),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(X).__webglTexture,ye,Ot+er)),b.blitFramebuffer(ke,Xe,De,Ae,st,xt,De,Ae,b.DEPTH_BUFFER_BIT,b.NEAREST);se.bindFramebuffer(b.READ_FRAMEBUFFER,null),se.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||g.has(E)){const ei=g.get(E),vn=g.get(X);se.bindFramebuffer(b.READ_FRAMEBUFFER,Bx),se.bindFramebuffer(b.DRAW_FRAMEBUFFER,kx);for(let Pn=0;Pn<Ue;Pn++)At?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ei.__webglTexture,K,He+Pn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ei.__webglTexture,K),Rn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,vn.__webglTexture,ye,Ot+Pn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,vn.__webglTexture,ye),K!==0?b.blitFramebuffer(ke,Xe,De,Ae,st,xt,De,Ae,b.COLOR_BUFFER_BIT,b.NEAREST):Rn?b.copyTexSubImage3D(_t,ye,st,xt,Ot+Pn,ke,Xe,De,Ae):b.copyTexSubImage2D(_t,ye,st,xt,ke,Xe,De,Ae);se.bindFramebuffer(b.READ_FRAMEBUFFER,null),se.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Rn?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(_t,ye,st,xt,Ot,De,Ae,Ue,yt,We,Bt.data):X.isCompressedArrayTexture?b.compressedTexSubImage3D(_t,ye,st,xt,Ot,De,Ae,Ue,yt,Bt.data):b.texSubImage3D(_t,ye,st,xt,Ot,De,Ae,Ue,yt,We,Bt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ye,st,xt,De,Ae,yt,We,Bt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ye,st,xt,Bt.width,Bt.height,yt,Bt.data):b.texSubImage2D(b.TEXTURE_2D,ye,st,xt,De,Ae,yt,We,Bt);b.pixelStorei(b.UNPACK_ROW_LENGTH,ut),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Bn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dr),b.pixelStorei(b.UNPACK_SKIP_ROWS,kn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qo),ye===0&&X.generateMipmaps&&b.generateMipmap(_t),se.unbindTexture()},this.initRenderTarget=function(E){g.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),se.unbindTexture()},this.resetState=function(){N=0,Q=0,F=null,se.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}class Cw extends d1{constructor(){super(),this.name="RoomEnvironment";const e=new Ys;e.deleteAttribute("uv");const n=new Is({side:Tn}),i=new Is,s=new R1(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new St(e,n);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new NM(e,i,6),a=new $t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new St(e,Kr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new St(e,Kr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new St(e,Kr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new St(e,Kr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new St(e,Kr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new St(e,Kr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Kr(t){return new Sy({color:0,emissive:16777215,emissiveIntensity:t})}const Jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class nl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rw=new Fc(-1,1,1,-1,0,1);class Pw extends _n{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const Lw=new Pw;class F1{constructor(e){this._mesh=new St(Lw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Dw extends nl{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dc.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new F1(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class N0 extends nl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Iw extends nl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Uw{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new pe);this._width=i.width,this._height=i.height,n=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dw(Jl),this.copyPass.material.blending=Vi,this.clock=new P1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}N0!==void 0&&(o instanceof N0?i=!0:o instanceof Iw&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Nw extends nl{constructor(e,n,i=null,s=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Je}render(e,n,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Fw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Mo extends nl{constructor(e,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Un(r,o,{type:jn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Un(r,o,{type:jn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Fw;this.highPassUniforms=dc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dc.clone(Jl.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,premultipliedAlpha:!0,blending:uc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new ka,this._fsQuad=new F1(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new pe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,n,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let s=0;s<e;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Mo.BlurDirectionX=new pe(1,0);Mo.BlurDirectionY=new pe(0,1);const Ow=Ja({__name:"ChristmasTree",props:{newTexture:{},handTrackingData:{}},emits:["tree-render-completed"],setup(t,{emit:e}){const n=t,i=e,s={colors:{bg:331034,fog:331034,champagneGold:16767334,deepGreen:202762,accentRed:10027008},particles:{count:1500,dustCount:2e3,snowCount:1e3,treeHeight:24,treeRadius:8},camera:{z:50},preload:{scanCount:5,images:["https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600","https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600","https://images.unsplash.com/photo-1480733992048-df39e3947a38?q=80&w=600","https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600"]}},r=Ii(null),o=Ii(void 0);let a=null,l=null,c=[],u=new _r,h=null,f=new P1;const d=Tc({mode:"TREE",focusIndex:-1,focusTarget:null,hand:{detected:!1,x:0,y:0},rotation:{x:0,y:0}});class _{mesh;type;isDust;posTree;posScatter;baseScale;spinSpeed;constructor(H,z,k=!1){this.mesh=H,this.type=z,this.isDust=k,this.posTree=new B,this.posScatter=new B,this.baseScale=H.scale.x;const U=z==="PHOTO"?.3:2;this.spinSpeed=new B((Math.random()-.5)*U,(Math.random()-.5)*U,(Math.random()-.5)*U),this.calculatePositions()}calculatePositions(){if(this.type==="PHOTO"){this.posTree.set(0,0,0);const Ye=8+Math.random()*12,$e=Math.random()*Math.PI*2,ne=Math.acos(2*Math.random()-1);this.posScatter.set(Ye*Math.sin(ne)*Math.cos($e),Ye*Math.sin(ne)*Math.sin($e),Ye*Math.cos(ne));return}const H=s.particles.treeHeight,z=H/2;let k=Math.random();k=Math.pow(k,.8);const U=k*H-z;let j=s.particles.treeRadius*(1-k);j<.5&&(j=.5);const ce=k*50*Math.PI+Math.random()*Math.PI,he=j*(.8+Math.random()*.4);this.posTree.set(Math.cos(ce)*he,U,Math.sin(ce)*he);let ae=this.isDust?12+Math.random()*20:8+Math.random()*12;const Re=Math.random()*Math.PI*2,Pe=Math.acos(2*Math.random()-1);this.posScatter.set(ae*Math.sin(Pe)*Math.cos(Re),ae*Math.sin(Pe)*Math.sin(Re),ae*Math.cos(Pe))}update(H,z,k){if(!a)return;const{mainGroup:U,camera:j}=a;let ce=this.posTree;if(z==="SCATTER")ce=this.posScatter;else if(z==="FOCUS")if(this.mesh===k){const Re=new B(0,2,35),Pe=new Mt().copy(U.matrixWorld).invert();ce=Re.applyMatrix4(Pe)}else ce=this.posScatter;const he=z==="FOCUS"&&this.mesh===k?5:2;this.mesh.position.lerp(ce,he*H),z==="SCATTER"?(this.mesh.rotation.x+=this.spinSpeed.x*H,this.mesh.rotation.y+=this.spinSpeed.y*H,this.mesh.rotation.z+=this.spinSpeed.z*H):z==="TREE"&&(this.type==="PHOTO"?(this.mesh.lookAt(0,this.mesh.position.y,0),this.mesh.rotateY(Math.PI)):(this.mesh.rotation.x=ir.lerp(this.mesh.rotation.x,0,H),this.mesh.rotation.z=ir.lerp(this.mesh.rotation.z,0,H),this.mesh.rotation.y+=.5*H)),z==="FOCUS"&&this.mesh===k&&this.mesh.lookAt(j.position);let ae=this.baseScale;this.isDust?(ae=this.baseScale*(.8+.4*Math.sin(f.elapsedTime*4+this.mesh.id)),z==="TREE"&&(ae=0)):z==="SCATTER"&&this.type==="PHOTO"?ae=this.baseScale*2.5:z==="FOCUS"&&(this.mesh===k?ae=4.5:ae=this.baseScale*.8),this.mesh.scale.lerp(new B(ae,ae,ae),4*H)}}xa(()=>n.newTexture,F=>{F instanceof rn&&A(F)},{deep:!1}),xa(()=>n.handTrackingData,F=>{if(!F)return;if(!F.detected){d.hand.detected=!1,d.focusTarget=null;return}d.hand.detected=F.detected,d.hand.x=F.position.x,d.hand.y=F.position.y;const H=F.ratios.extensionRatio,z=F.ratios.pinchRatio;if(H<1.5)d.mode="TREE",d.focusTarget=null;else if(z<.35){if(d.mode!=="FOCUS"){d.mode="FOCUS";const k=c.filter(U=>U.type==="PHOTO");if(k.length>0){const U=Math.floor(Math.random()*k.length);d.focusTarget=Ah(k[U].mesh)}else d.focusTarget=null}}else H>1.7&&(d.mode="SCATTER",d.focusTarget=null)},{deep:!0});const x=()=>{if(!r.value)return;const F=new d1;F.background=new Je(s.colors.bg),F.fog=new Ud(s.colors.fog,.015);const H=new _r;F.add(H);const z=new In(42,window.innerWidth/window.innerHeight,.1,1e3);z.position.set(0,2,s.camera.z);const k=new ww({antialias:!0,alpha:!0,powerPreference:"high-performance"});k.setSize(window.innerWidth,window.innerHeight),k.setPixelRatio(Math.min(window.devicePixelRatio,2)),k.toneMapping=Md,k.toneMappingExposure=2.2,r.value.innerHTML="",r.value.appendChild(k.domElement),a=Ah({scene:F,mainGroup:H,camera:z,renderer:k})},m=()=>{const F=document.createElement("canvas");F.width=256,F.height=256;const H=F.getContext("2d");H.fillStyle="#ffffff",H.fillRect(0,0,128,128),H.fillStyle="#880000",H.beginPath();const z=64;for(let U=-256;U<512;U+=z)H.moveTo(U,0),H.lineTo(U+z,128),H.lineTo(U+z-z/2,256),H.lineTo(U-z/2,0);H.fill();const k=new i0(F);return k.wrapS=Ua,k.wrapT=Ua,k.repeat.set(5,5),k},p=()=>{if(!a)return;const{mainGroup:F}=a,H=new zd(.5,32,32),z=new Ys(.55,.55,.55),k=new _1([new B(0,-.5,0),new B(0,.3,0),new B(.1,.5,0),new B(.3,.4,0)]),U=new Gd(k,16,.12,8,!1),j=new Is({color:s.colors.champagneGold,metalness:1,roughness:.1,envMapIntensity:2,emissive:4469504,emissiveIntensity:.3}),ce=new Is({color:s.colors.deepGreen,metalness:.2,roughness:.8,emissive:8704,emissiveIntensity:.2}),he=new xy({color:s.colors.accentRed,metalness:.3,roughness:.2,clearcoat:1,emissive:3342336}),ae=m(),Re=new Is({map:ae,roughness:.4});for(let _e=0;_e<s.particles.count;_e++){const Ke=Math.random();let C,D;Ke<.4?(C=new St(z,ce),D="BOX"):Ke<.7?(C=new St(z,j),D="GOLD_BOX"):Ke<.92?(C=new St(H,j),D="GOLD_SPHERE"):Ke<.97?(C=new St(H,he),D="RED"):(C=new St(U,Re),D="CANE");const L=.4+Math.random()*.5;C.scale.set(L,L,L),C.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),F.add(C),c.push(new _(C,D,!1))}const Pe=new b1,Ye=5,$e=1.5,ne=.7;for(let _e=0;_e<Ye*2;_e++){const Ke=_e*Math.PI/Ye+Math.PI/2,C=_e%2===0?$e:ne,D=Math.cos(Ke)*C,L=Math.sin(Ke)*C;_e===0?Pe.moveTo(D,L):Pe.lineTo(D,L)}Pe.closePath();const oe=new kd(Pe,{depth:.4,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:2});oe.center();const be=new Is({color:16768392,emissive:16755200,emissiveIntensity:1,metalness:1,roughness:0}),Ne=new St(oe,be);Ne.position.set(0,s.particles.treeHeight/2+1.2,0),F.add(Ne),F.add(u)},T=()=>{if(!a)return;const{scene:F,renderer:H}=a,z=new Cf(H);F.environment=z.fromScene(new Cw,.04).texture},S=()=>{if(!a)return;const{scene:F,mainGroup:H}=a,z=new Py(16777215,.6);F.add(z);const k=new R1(16755200,2,20);k.position.set(0,5,0),H.add(k),H.add(k);const U=new h0(16764006,1200);U.position.set(30,40,40),U.angle=.5,U.penumbra=.5,F.add(U);const j=new h0(6719743,800);j.position.set(-30,20,-30),F.add(j);const ce=new Ry(16772795,.8);ce.position.set(0,0,50),F.add(ce)},v=()=>{if(!a)return;const{mainGroup:F}=a,H=new Vd(.08,0),z=new ka({color:16772795,transparent:!0,opacity:.8});for(let k=0;k<s.particles.dustCount;k++){const U=new St(H,z);U.scale.setScalar(.5+Math.random()),F.add(U),c.push(new _(U,"DUST",!0))}},w=()=>{const F=new C1;s.preload.images.forEach(H=>{F.load(H,z=>{z.colorSpace=hn,A(z)},void 0,z=>{console.log(`Skipped: ${H}`),console.error(z)})});for(let H=1;H<=s.preload.scanCount;H++){const z=`./images/${H}.jpg`,k=`./images/${H}.png`;F.load(z,U=>{U.colorSpace=hn,A(U)},void 0,()=>{F.load(k,U=>{U.colorSpace=hn,A(U)},void 0,()=>{})})}},R=()=>{if(!a)return;const{scene:F,camera:H,renderer:z}=a,k=new Nw(F,H),U=new Mo(new pe(window.innerWidth,window.innerHeight),1.5,.4,.85);U.threshold=.65,U.strength=.5,U.radius=.4,h=new Uw(z),h.addPass(k),h.addPass(U)},P=()=>{if(!a)return;const{scene:F}=a,H=new _n,z=[],k=[],U=document.createElement("canvas");U.width=32,U.height=32;const j=U.getContext("2d");j.fillStyle="white",j.beginPath(),j.arc(16,16,16,0,Math.PI*2),j.fill();const ce=new i0(U);for(let Re=0;Re<s.particles.snowCount;Re++){const Pe=ir.randFloatSpread(100),Ye=ir.randFloatSpread(60),$e=ir.randFloatSpread(60);z.push(Pe,Ye,$e),k.push(Math.random()*.2+.1,Math.random()*.05)}H.setAttribute("position",new It(z,3)),H.setAttribute("userData",new It(k,2));const he=new m1({color:16777215,size:.4,map:ce,transparent:!0,opacity:.8,blending:uc,depthWrite:!1}),ae=new kM(H,he);F.add(ae),l=ae},V=()=>{if(!l)return;const F=l.geometry.attributes.position,H=l.geometry.attributes.userData;if(!F||!H){console.error("Missing attributes on snowSystem geometry");return}const z=F.array,k=H.array;if(!z||!k){console.error("Missing arrays on snowSystem geometry attributes");return}const U=s.particles.snowCount;if(z.length<U*3||k.length<U*2){console.error("Snow particle arrays are undersized. Check CONFIG and createSnow.");return}for(let j=0;j<s.particles.snowCount;j++){const ce=k[j*2];z[j*3+1]-=ce;const he=k[j*2+1];z[j*3]+=Math.sin(f.elapsedTime*2+j)*he*.1,z[j*3+1]<-30&&(z[j*3+1]=30,z[j*3]=ir.randFloatSpread(100),z[j*3+2]=ir.randFloatSpread(60))}F.needsUpdate=!0};function y(){requestAnimationFrame(y);const F=f.getDelta();if(!(!a||!h)){if(d.mode==="SCATTER"&&d.hand.detected){const H=d.hand.x*Math.PI*.9,z=d.hand.y*Math.PI*.25;d.rotation.y+=(H-d.rotation.y)*3*F,d.rotation.x+=(z-d.rotation.x)*3*F}else d.mode==="TREE"?(d.rotation.y+=.3*F,d.rotation.x+=(0-d.rotation.x)*2*F):d.rotation.y+=.1*F;a.mainGroup.rotation.x=d.rotation.x,a.mainGroup.rotation.y=d.rotation.y,a.mainGroup.updateWorldMatrix(!0,!1),c.forEach(H=>H.update(F,d.mode,d.focusTarget)),V(),h.render()}}const A=F=>{let H=1.2,z=1.2;if(F.image){const be=F.image,Ne=be.width/be.height;Ne>1?z=H/Ne:H=z*Ne}const k=.05,U=.05,j=H+k*2,ce=z+k*2,he=new Ys(j,ce,U),ae=new Is({color:s.colors.champagneGold,metalness:1,roughness:.1}),Re=new St(he,ae),Pe=new tl(H,z),Ye=new ka({map:F,side:Bi}),$e=new St(Pe,Ye);$e.position.z=U/2+.001;const ne=new _r;ne.add(Re),ne.add($e);const oe=.8;ne.scale.set(oe,oe,oe),u.add(ne),c.push(new _(ne,"PHOTO",!1)),N()},N=()=>{const F=c.filter(ce=>ce.type==="PHOTO"),H=F.length;if(H===0)return;const z=s.particles.treeHeight*.9,k=-z/2,U=z/H,j=3;F.forEach((ce,he)=>{const ae=k+U*he+U/2,Re=s.particles.treeHeight,Pe=(ae+Re/2)/Re;let Ye=s.particles.treeRadius*(1-Pe);Ye<1&&(Ye=1);const $e=Ye+3,ne=Pe*Math.PI*2*j+Math.PI/4;ce.posTree.set(Math.cos(ne)*$e,ae,Math.sin(ne)*$e)})},Q=()=>{if(!a||!h)return;const{camera:F,renderer:H}=a;F.aspect=window.innerWidth/window.innerHeight,F.updateProjectionMatrix(),H.setSize(window.innerWidth,window.innerHeight),h.setSize(window.innerWidth,window.innerHeight)};return Cc(()=>{x(),p(),T(),S(),v(),w(),R(),P(),y(),window.addEventListener("resize",Q),i("tree-render-completed")}),pd(()=>{window.removeEventListener("resize",Q)}),Rc(()=>{o.value!==void 0&&cancelAnimationFrame(o.value),a&&(a.renderer.dispose(),a.scene.clear(),a=null)}),(F,H)=>(Xs(),Za("div",{ref_key:"threeContainer",ref:r,class:"three-container"},null,512))}}),Bw=Ic(Ow,[["__scopeId","data-v-a764e6aa"]]),kw=["frameborder","border","marginwidth","marginheight","width","height","src","allow"],zw=Ja({__name:"NeteasePlayer",props:{frameborder:{},border:{},marginwidth:{},marginheight:{},width:{},height:{},src:{},iframeAllow:{}},setup(t){return(e,n)=>(Xs(),Za("iframe",{frameborder:t.frameborder||"no",border:t.border||"0",marginwidth:t.marginwidth||"0",marginheight:t.marginheight||"0",width:t.width||"330",height:t.height||"86",src:t.src||"https://music.163.com/outchain/player?type=2&id=1999170057&auto=1&height=66",allow:t.iframeAllow||"autoplay; encrypted-media;"},null,8,kw))}});var yo=typeof self<"u"?self:{};function ur(){throw Error("Invalid UTF8")}function F0(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Ol,lh;const Vw=typeof TextDecoder<"u";let Gw;const Hw=typeof TextEncoder<"u";function O1(t){if(Hw)t=(Gw||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){const r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var Xd,mc;e:{for(var O0=["CLOSURE_FLAGS"],ch=yo,uh=0;uh<O0.length;uh++)if((ch=ch[O0[uh]])==null){mc=null;break e}mc=ch}var Wa,B0=mc&&mc[610401301];Xd=B0!=null&&B0;const k0=yo.navigator;function Lf(t){return!!Xd&&!!Wa&&Wa.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function ri(t){var e;return(e=yo.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Us(){return!!Xd&&!!Wa&&Wa.brands.length>0}function hh(){return Us()?Lf("Chromium"):(ri("Chrome")||ri("CriOS"))&&!(!Us()&&ri("Edge"))||ri("Silk")}function kc(t){return kc[" "](t),t}Wa=k0&&k0.userAgentData||null,kc[" "]=function(){};var Ww=!Us()&&(ri("Trident")||ri("MSIE"));!ri("Android")||hh(),hh(),ri("Safari")&&(hh()||!Us()&&ri("Coast")||!Us()&&ri("Opera")||!Us()&&ri("Edge")||(Us()?Lf("Microsoft Edge"):ri("Edg/"))||Us()&&Lf("Opera"));var B1={},ua=null;function Xw(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return(function(r,o){function a(c){for(;l<r.length;){const u=r.charAt(l++),h=ua[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}k1();let l=0;for(;;){const c=a(-1),u=a(0),h=a(64),f=a(64);if(f===64&&c===-1)break;o(c<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),f!=64&&o(h<<6&192|f))}})(t,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function k1(){if(!ua){ua={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));B1[n]=i;for(let s=0;s<i.length;s++){const r=i[s];ua[r]===void 0&&(ua[r]=s)}}}}var z1=typeof Uint8Array<"u",V1=!Ww&&typeof btoa=="function";function z0(t){if(!V1){var e;e===void 0&&(e=0),k1(),e=B1[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let l=0,c=0;for(;l<t.length-2;l+=3){var s=t[l],r=t[l+1],o=t[l+2],a=e[s>>2];s=e[(3&s)<<4|r>>4],r=e[(15&r)<<2|o>>6],o=e[63&o],n[c++]=a+s+r+o}switch(a=0,o=i,t.length-l){case 2:o=e[(15&(a=t[l+1]))<<2]||i;case 1:t=t[l],n[c]=e[t>>2]+e[(3&t)<<4|a>>4]+o+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const V0=/[-_.]/g,qw={"-":"+",_:"/",".":"="};function Yw(t){return qw[t]||""}function G1(t){if(!V1)return Xw(t);V0.test(t)&&(t=t.replace(V0,Yw)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Er(t){return z1&&t!=null&&t instanceof Uint8Array}var bo={};function Tr(){return jw||=new us(null,bo)}function qd(t){H1(bo);var e=t.g;return(e=e==null||Er(e)?e:typeof e=="string"?G1(e):null)==null?e:t.g=e}var us=class{h(){return new Uint8Array(qd(this)||0)}constructor(t,e){if(H1(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let jw,$w;function H1(t){if(t!==bo)throw Error("illegal external caller")}function W1(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Df(t){return W1(t=Error(t),"warning"),t}function Yd(t){if(t!=null){var e=$w??={},n=e[t]||0;n>=5||(e[t]=n+1,W1(t=Error(),"incident"),(function(i){yo.setTimeout((()=>{throw i}),0)})(t))}}var zc=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Oo(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var Kw=Oo("jas",void 0,!0),G0=Oo(void 0,"0di"),sa=Oo(void 0,"1oa"),Eo=Oo(void 0,Symbol()),Jw=Oo(void 0,"0actk"),X1=Oo(void 0,"8utk");const Ve=zc?Kw:"Ea",q1={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},Y1=Object.defineProperties;function Vc(t,e){zc||Ve in t||Y1(t,q1),t[Ve]|=e}function Yt(t,e){zc||Ve in t||Y1(t,q1),t[Ve]=e}function Bo(t){return Vc(t,34),t}function Zw(t,e){Yt(e,-15615&(0|t))}function If(t,e){Yt(e,-15581&(34|t))}function Gc(){return typeof BigInt=="function"}function Nn(t){return Array.prototype.slice.call(t)}var jd,il={};function Hc(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function $d(t,e){if(t!=null){if(typeof t=="string")t=t?new us(t,bo):Tr();else if(t.constructor!==us)if(Er(t))t=t.length?new us(new Uint8Array(t),bo):Tr();else{if(!e)throw Error();t=void 0}}return t}const H0=[];function Ks(t){if(2&t)throw Error()}Yt(H0,55),jd=Object.freeze(H0);class W0{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}function Kd(t){return Eo?t[Eo]:void 0}var Qw=Object.freeze({});function Wc(t){return t.Na=!0,t}var e4=Wc((t=>typeof t=="number")),X0=Wc((t=>typeof t=="string")),t4=Wc((t=>typeof t=="boolean")),Xc=typeof yo.BigInt=="function"&&typeof yo.BigInt(0)=="bigint";function Bs(t){var e=t;if(X0(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(e4(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Xc?BigInt(t):t=t4(t)?t?"1":"0":X0(t)?t.trim()||"0":String(t)}var Uf=Wc((t=>Xc?t>=i4&&t<=r4:t[0]==="-"?q0(t,n4):q0(t,s4)));const n4=Number.MIN_SAFE_INTEGER.toString(),i4=Xc?BigInt(Number.MIN_SAFE_INTEGER):void 0,s4=Number.MAX_SAFE_INTEGER.toString(),r4=Xc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function q0(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}const o4=typeof Uint8Array.prototype.slice=="function";let j1,bt=0,zt=0;function Y0(t){const e=t>>>0;bt=e,zt=(t-e)/4294967296>>>0}function Ar(t){if(t<0){Y0(-t);const[e,n]=ep(bt,zt);bt=e>>>0,zt=n>>>0}else Y0(t)}function Jd(t){const e=j1||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),zt=0,bt=e.getUint32(0,!0)}function Zd(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Xa(t,e)}function Qd(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=Zd(t,e))=="number"?n?-t:t:n?"-"+t:t}function Xa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Gc()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+j0(n)+j0(t));return n}function j0(t){return t=String(t),"0000000".slice(t.length)+t}function $1(){var t=bt,e=zt;if(2147483648&e)if(Gc())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=ep(t,e);t="-"+Xa(n,i)}else t=Xa(t,e);return t}function qc(t){if(t.length<16)Ar(Number(t));else if(Gc())t=BigInt(t),bt=Number(t&BigInt(4294967295))>>>0,zt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");zt=bt=0;const n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){const r=Number(t.slice(i,s));zt*=1e6,bt=1e6*bt+r,bt>=4294967296&&(zt+=Math.trunc(bt/4294967296),zt>>>=0,bt>>>=0)}if(e){const[i,s]=ep(bt,zt);bt=i,zt=s}}}function ep(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const qa=typeof BigInt=="function"?BigInt.asIntN:void 0,a4=typeof BigInt=="function"?BigInt.asUintN:void 0,ks=Number.isSafeInteger,Yc=Number.isFinite,To=Math.trunc,l4=Bs(0);function Js(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function K1(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const c4=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ya(t){switch(typeof t){case"bigint":return!0;case"number":return Yc(t);case"string":return c4.test(t);default:return!1}}function ko(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Yc(t)?0|t:void 0}function J1(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Yc(t)?t>>>0:void 0}function $0(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function Z1(t){const e=t.length;return t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337}function Q1(t){return Z1(t)?t:(qc(t),$1())}function tp(t){return t=To(t),ks(t)||(Ar(t),t=Qd(bt,zt)),t}function ev(t){var e=To(Number(t));return ks(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Q1(t))}function K0(t){var e=To(Number(t));return ks(e)?Bs(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Gc()?Bs(qa(64,BigInt(t))):Bs(Q1(t)))}function J0(t){if(ks(t))t=Bs(tp(t));else{if(t=To(t),ks(t))t=String(t);else{const e=String(t);Z1(e)?t=e:(Ar(t),t=$1())}t=Bs(t)}return t}function Nf(t){return t==null?t:typeof t=="bigint"?(Uf(t)?t=Number(t):(t=qa(64,t),t=Uf(t)?Number(t):String(t)),t):Ya(t)?typeof t=="number"?tp(t):ev(t):void 0}function u4(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(a4(64,t));if(Ya(t)){if(e==="string")return e=To(Number(t)),ks(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),$0(t)||(qc(t),t=Xa(bt,zt))),t;if(e==="number")return(t=To(t))>=0&&ks(t)?t:(function(n){if(n<0){Ar(n);var i=Xa(bt,zt);return n=Number(i),ks(n)?n:i}return $0(i=String(n))?i:(Ar(n),Zd(bt,zt))})(t)}}function tv(t){if(typeof t!="string")throw Error();return t}function zo(t){if(t!=null&&typeof t!="string")throw Error();return t}function Ao(t){return t==null||typeof t=="string"?t:void 0}function np(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===il)return t;if(!Array.isArray(t))return n?2&i?((t=e[G0])||(Bo((t=new e).u),t=e[G0]=t),e=t):e=new e:e=void 0,e;let s=n=0|t[Ve];return s===0&&(s|=32&i),s|=2&i,s!==n&&Yt(t,s),new e(t)}function h4(t,e,n){if(e)e:{if(!Ya(e=t))throw Df("int64");switch(typeof e){case"string":e=K0(e);break e;case"bigint":e=Bs(qa(64,e));break e;default:e=J0(e)}}else t=typeof(e=t),e=e==null?e:t==="bigint"?Bs(qa(64,e)):Ya(e)?t==="string"?K0(e):J0(e):void 0;return(t=e)==null?n?l4:void 0:t}function f4(t){return t}const d4={};let p4=(function(){try{return kc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class fh{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const m4=p4?(Object.setPrototypeOf(fh.prototype,Map.prototype),Object.defineProperties(fh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),fh):class extends Map{constructor(){super()}};function Z0(t){return t}function dh(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var Xi=class extends m4{constructor(t,e,n=Z0,i=Z0){super();let s=0|t[Ve];s|=64,Yt(t,s),this.M=s,this.I=e,this.S=n,this.X=this.I?g4:i;for(let r=0;r<t.length;r++){const o=t[r],a=n(o[0],!1,!0);let l=o[1];e?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,s),super.set(a,l)}}La(){var t=M4;if(this.size!==0)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=_4){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){dh(this),super.clear()}delete(t){return dh(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new W0(t,v4,this)}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new W0(t,Xi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,i,s)=>{t.call(e,s.get(i),i,s)})):super.forEach(t,e)}set(t,e){return dh(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?t===void 0?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function g4(t,e,n,i,s,r){return t=np(t,i,n,r),s&&(t=Kc(t)),t}function _4(t){return t}function v4(t){return[t,this.get(t)]}let x4,nv,iv,S4;function Q0(){return x4||=new Xi(Bo([]),void 0,void 0,void 0,d4)}function Ff(t,e,n,i,s){if(t!=null){if(Array.isArray(t)){const r=0|t[Ve];return t.length===0&&1&r?void 0:s&&2&r?t:jc(t,e,n,i!==void 0,s)}return e(t,i)}}function jc(t,e,n,i,s){const r=i||n?0|t[Ve]:0,o=i?!!(32&r):void 0;let a=0;const l=(i=Nn(t)).length;for(let _=0;_<l;_++){var c=i[_];if(_===l-1&&Hc(c)){var u=e,h=n,f=o,d=s;let x;for(let m in c){const p=Ff(c[m],u,h,f,d);p!=null&&((x??={})[m]=p)}c=x}else c=Ff(i[_],e,n,o,s);i[_]=c,c!=null&&(a=_+1)}return a<l&&(i.length=a),n&&((t=Kd(t))&&(i[Eo]=Nn(t)),n(r,i)),i}function M4(t){return Ff(t,ip,void 0,void 0,!1)}function ip(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Uf(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Er(t))return Er(t)&&Yd(X1),z0(t);if(t.W===il)return sv(t);if(t instanceof us){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=z0(e)}return t instanceof Xi?t.La():void 0}return t}function sv(t){var e=t.u;t=jc(e,ip,void 0,void 0,!1);var n=0|e[Ve];if((e=t.length)&&!(512&n)){var i=t[e-1],s=!1;Hc(i)?(e--,s=!0):i=void 0;var r=e-(n=512&n?0:-1),o=(nv??f4)(r,n,t,i);if(i&&(t[e]=void 0),r<o&&i){for(var a in r=!0,i){const l=+a;l<=o?(t[s=l+n]=i[a],e=Math.max(s+1,e),s=!1,delete i[a]):r=!1}r&&(i=void 0)}for(r=e-1;e>0;r=e-1)if((a=t[r])==null)e--,s=!0;else{if(!((r-=n)>=o))break;(i??={})[r]=a,e--,s=!0}s&&(t.length=e),i&&t.push(i)}return t}function zs(t,e,n){return t=rv(t,e[0],e[1],n?1:2),e!==iv&&n&&Vc(t,8192),t}function rv(t,e,n,i){if(t==null){var s=96;n?(t=[n],s|=512):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(8192&(s=0|t[Ve])||!(64&s)||2&s||Yd(Jw),1024&s)throw Error("farr");if(64&s)return t;if(i===1||i===2||(s|=64),n&&(s|=512,n!==t[0]))throw Error("mid");e:{var r=(n=t).length;if(r){var o=r-1;if(Hc(i=n[o])){if((o-=e=512&(s|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var a in i)(r=+a)<o&&(n[r+e]=i[a],delete i[a]);s=-16760833&s|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,r-(512&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return Yt(t,s),t}function Of(t,e,n=If){if(t!=null){if(z1&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[Ve];return 2&i?t:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(Yt(t,34|i),4&i&&Object.freeze(t),t):jc(t,Of,4&i?If:n,!0,!0))}return t.W===il?t=2&(i=0|(n=t.u)[Ve])?t:new t.constructor($c(n,i,!0)):t instanceof Xi&&!(2&t.M)&&(n=Bo(t.da(Of)),t=new Xi(n,t.I,t.S,t.X)),t}}function $c(t,e,n){const i=n||2&e?If:Zw,s=!!(32&e);return t=(function(r,o,a){const l=Nn(r);var c=l.length;const u=256&o?l[c-1]:void 0;for(c+=u?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(u){o=l[o]={};for(const h in u)o[h]=a(u[h])}return(r=Kd(r))&&(l[Eo]=Nn(r)),l})(t,e,(r=>Of(r,s,i))),Vc(t,32|(n?2:0)),t}function Kc(t){const e=t.u,n=0|e[Ve];return 2&n?new t.constructor($c(e,n,!1)):t}function wo(t,e){return Ss(t=t.u,0|t[Ve],e)}function Ss(t,e,n){if(n===-1)return null;const i=n+(512&e?0:-1),s=t.length-1;return i>=s&&256&e?t[s][n]:i<=s?t[i]:void 0}function Ct(t,e,n){const i=t.u;let s=0|i[Ve];return Ks(s),Ft(i,s,e,n),t}function Ft(t,e,n,i){const s=512&e?0:-1,r=n+s;var o=t.length-1;return r>=o&&256&e?(t[o][n]=i,e):r<=o?(t[r]=i,e):(i!==void 0&&(n>=(o=e>>14&1023||536870912)?i!=null&&(t[o+s]={[n]:i},Yt(t,e|=256)):t[r]=i),e)}function Zl(t,e){let n=0|(t=t.u)[Ve];const i=Ss(t,n,e),s=Js(i);return s!=null&&s!==i&&Ft(t,n,e,s),s}function ov(t){let e=0|(t=t.u)[Ve];const n=Ss(t,e,1),i=$d(n,!0);return i!=null&&i!==n&&Ft(t,e,1,i),i}function vr(){return Qw===void 0?2:4}function xr(t,e,n,i,s){const r=t.u,o=2&(t=0|r[Ve])?1:i;s=!!s;let a=0|(i=sp(r,t,e))[Ve];if(!(4&a)){4&a&&(i=Nn(i),a=hs(a,t),t=Ft(r,t,e,i));let l=0,c=0;for(;l<i.length;l++){const u=n(i[l]);u!=null&&(i[c++]=u)}c<l&&(i.length=c),a=rp(a,t),n=-2049&(20|a),a=n&=-4097,Yt(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?ls(a)||(s=a,a|=2,a!==s&&Yt(i,a),Object.freeze(i)):(o===2&&ls(a)&&(i=Nn(i),a=hs(a,t),a=Vs(a,t,s),Yt(i,a),t=Ft(r,t,e,i)),ls(a)||(e=a,a=Vs(a,t,s),a!==e&&Yt(i,a))),i}function sp(t,e,n){return t=Ss(t,e,n),Array.isArray(t)?t:jd}function rp(t,e){return t===0&&(t=hs(t,e)),1|t}function ls(t){return!!(2&t)&&!!(4&t)||!!(1024&t)}function av(t){t=Nn(t);for(let e=0;e<t.length;e++){const n=t[e]=Nn(t[e]);Array.isArray(n[1])&&(n[1]=Bo(n[1]))}return t}function Bf(t,e,n,i){let s=0|(t=t.u)[Ve];Ks(s),Ft(t,s,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Vo(t,e,n,i){Ks(e);let s=sp(t,e,n);const r=s!==jd;if(64&e||!(8192&e)||!r){const o=r?0|s[Ve]:0;let a=o;(!r||2&a||ls(a)||4&a&&!(32&a))&&(s=Nn(s),a=hs(a,e),e=Ft(t,e,n,s)),a=-13&rp(a,e),a=Vs(i?-17&a:16|a,e,!0),a!==o&&Yt(s,a)}return s}function ph(t,e){var n=$v;return ap(op(t=t.u),t,0|t[Ve],n)===e?e:-1}function op(t){if(zc)return t[sa]??(t[sa]=new Map);if(sa in t)return t[sa];const e=new Map;return Object.defineProperty(t,sa,{value:e}),e}function lv(t,e,n,i){const s=op(t),r=ap(s,t,e,n);return r!==i&&(r&&(e=Ft(t,e,r)),s.set(n,i)),e}function ap(t,e,n,i){let s=t.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){const o=i[r];Ss(e,n,o)!=null&&(s!==0&&(n=Ft(e,n,s)),s=o)}return t.set(i,s),s}function lp(t,e,n){let i=0|t[Ve];const s=Ss(t,i,n);let r;if(s!=null&&s.W===il)return(e=Kc(s))!==s&&Ft(t,i,n,e),e.u;if(Array.isArray(s)){const o=0|s[Ve];r=2&o?zs($c(s,o,!1),e,!0):64&o?s:zs(r,e,!0)}else r=zs(void 0,e,!0);return r!==s&&Ft(t,i,n,r),r}function cv(t,e,n){let i=0|(t=t.u)[Ve];const s=Ss(t,i,n);return(e=np(s,e,!1,i))!==s&&e!=null&&Ft(t,i,n,e),e}function ct(t,e,n){if((e=cv(t,e,n))==null)return e;let i=0|(t=t.u)[Ve];if(!(2&i)){const s=Kc(e);s!==e&&Ft(t,i,n,e=s)}return e}function uv(t,e,n,i,s,r,o){t=t.u;var a=!!(2&e);const l=a?1:s;r=!!r,o&&=!a;var c=0|(s=sp(t,e,i))[Ve];if(!(a=!!(4&c))){var u=s,h=e;const f=!!(2&(c=rp(c,e)));f&&(h|=2);let d=!f,_=!0,x=0,m=0;for(;x<u.length;x++){const p=np(u[x],n,!1,h);if(p instanceof n){if(!f){const T=!!(2&(0|p.u[Ve]));d&&=!T,_&&=T}u[m++]=p}}m<x&&(u.length=m),c|=4,c=_?16|c:-17&c,Yt(u,c=d?8|c:-9&c),f&&Object.freeze(u)}if(o&&!(8&c||!s.length&&(l===1||l===4&&32&c))){for(ls(c)&&(s=Nn(s),c=hs(c,e),e=Ft(t,e,i,s)),n=s,o=c,u=0;u<n.length;u++)(c=n[u])!==(h=Kc(c))&&(n[u]=h);o|=8,Yt(n,o=n.length?-17&o:16|o),c=o}return l===1||l===4&&32&c?ls(c)||(e=c,(c|=!s.length||16&c&&(!a||32&c)?2:1024)!==e&&Yt(s,c),Object.freeze(s)):(l===2&&ls(c)&&(Yt(s=Nn(s),c=Vs(c=hs(c,e),e,r)),e=Ft(t,e,i,s)),ls(c)||(i=c,(c=Vs(c,e,r))!==i&&Yt(s,c))),s}function _s(t,e,n){const i=0|t.u[Ve];return uv(t,i,e,n,vr(),!1,!(2&i))}function Ge(t,e,n,i){return i==null&&(i=void 0),Ct(t,n,i)}function Ta(t,e,n,i){i==null&&(i=void 0);e:{let s=0|(t=t.u)[Ve];if(Ks(s),i==null){const r=op(t);if(ap(r,t,s,n)!==e)break e;r.set(n,0)}else s=lv(t,s,n,e);Ft(t,s,e,i)}}function hs(t,e){return-1025&(t=32|(2&e?2|t:-3&t))}function Vs(t,e,n){return 32&e&&n||(t&=-33),t}function Jc(t,e,n){Ks(0|t.u[Ve]),xr(t,e,Ao,2,!0).push(tv(n))}function gc(t,e,n,i){const s=0|t.u[Ve];Ks(s),t=uv(t,s,n,e,2,!0),i=i??new n,t.push(i),t[Ve]=2&(0|i.u[Ve])?-9&t[Ve]:-17&t[Ve]}function ai(t,e){return ko(wo(t,e))}function ci(t,e){return Ao(wo(t,e))}function Ht(t,e){return Zl(t,e)??0}function ja(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);Ct(t,e,n)}function qi(t,e,n){if(n!=null){if(typeof n!="number"||!Yc(n))throw Df("int32");n|=0}Ct(t,e,n)}function Be(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);Ct(t,e,n)}function _c(t,e,n){{const o=t.u;let a=0|o[Ve];if(Ks(a),n==null)Ft(o,a,e);else{var i=t=0|n[Ve],s=ls(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=Nn(n),i=0,t=Vs(t=hs(t,a),a,!0),r=!1),t|=21,s=0;s<n.length;s++){const l=n[s],c=tv(l);Object.is(l,c)||(r&&(n=Nn(n),i=0,t=Vs(t=hs(t,a),a,!0),r=!1),n[s]=c)}t!==i&&(r&&(n=Nn(n),t=Vs(t=hs(t,a),a,!0)),Yt(n,t)),Ft(o,a,e,n)}}}function hv(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function cp(){return Error("Failed to read varint, encoding is invalid.")}function fv(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function up(t){if(typeof t=="string")return{buffer:G1(t),O:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return{buffer:t,O:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),O:!1};if(t.constructor===us)return{buffer:qd(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function hp(t,e){let n,i=0,s=0,r=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Mr(t,a),n<128)return e(i>>>0,s>>>0);throw cp()}function fp(t){let e=0,n=t.g;const i=n+10,s=t.h;for(;n<i;){const r=s[n++];if(e|=r,(128&r)==0)return Mr(t,n),!!(127&e)}throw cp()}function js(t){const e=t.h;let n=t.g,i=e[n++],s=127&i;if(128&i&&(i=e[n++],s|=(127&i)<<7,128&i&&(i=e[n++],s|=(127&i)<<14,128&i&&(i=e[n++],s|=(127&i)<<21,128&i&&(i=e[n++],s|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw cp();return Mr(t,n),s}function vs(t){return js(t)>>>0}function kf(t){var e=t.h;const n=t.g,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],Mr(t,t.g+4),(i<<0|s<<8|r<<16|e<<24)>>>0}function zf(t){var e=kf(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function y4(t){return js(t)}function mh(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=up(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j)}function Mr(t,e){if(t.g=e,e>t.l)throw fv(t.l,e)}function dv(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw fv(e,t.l-n);return t.g=i,n}function pv(t,e){if(e==0)return Tr();var n=dv(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):o4?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Tr():new us(n,bo)}Xi.prototype.toJSON=void 0;var eg=[];function mv(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=vs(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw hv(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Ql(t){switch(t.h){case 0:t.h!=0?Ql(t):fp(t.g);break;case 1:Mr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Ql(t);else{var e=vs(t.g);Mr(t=t.g,t.g+e)}break;case 5:Mr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!mv(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Ql(t)}break;default:throw hv(t.h,t.l)}}function sl(t,e,n){const i=t.g.l,s=vs(t.g),r=t.g.g+s;let o=r-i;if(o<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),o=r-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=r,t.g.l=i,e}function dp(t){var e=vs(t.g),n=dv(t=t.g,e);if(t=t.h,Vw){var i,s=t;(i=lh)||(i=lh=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(a){if(Ol===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ol=!0}catch{Ol=!1}}throw!Ol&&(lh=void 0),a}}else{e=(r=n)+e,n=[];let a,l=null;for(;r<e;){var o=t[r++];o<128?n.push(o):o<224?r>=e?ur():(a=t[r++],o<194||(192&a)!=128?(r--,ur()):n.push((31&o)<<6|63&a)):o<240?r>=e-1?ur():(a=t[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[r++]))!=128?(r--,ur()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=e-2?ur():(a=t[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,ur()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):ur(),n.length>=8192&&(l=F0(l,n),n.length=0)}r=F0(l,n)}return r}function gv(t){const e=vs(t.g);return pv(t.g,e)}function Zc(t,e,n){var i=vs(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Bl=[];function yi(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var Oe=class{constructor(t,e){this.u=rv(t,e)}toJSON(){try{var t=sv(this)}finally{nv=void 0}return t}l(){var t=sC;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor($c(t,0|t[Ve],!1))}O(){return!!(2&(0|this.u[Ve]))}};function tg(t){return t?/^\d+$/.test(t)?(qc(t),new Vf(bt,zt)):null:b4||=new Vf(0,0)}Oe.prototype.W=il,Oe.prototype.toString=function(){return this.u.toString()};var Vf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let b4;function ng(t){return t?/^-?\d+$/.test(t)?(qc(t),new Gf(bt,zt)):null:E4||=new Gf(0,0)}var Gf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let E4;function co(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Go(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function Qc(t,e){if(e>=0)Go(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function $a(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Co(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Jn(t,e,n){Go(t.g,8*e+n)}function pp(t,e){return Jn(t,e,2),e=t.g.end(),Co(t,e),e.push(t.h),e}function mp(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function eu(t,e,n){Jn(t,e,2),Go(t.g,n.length),Co(t,t.g.end()),Co(t,n)}function vc(t,e,n,i){n!=null&&(e=pp(t,e),i(n,t),mp(t,e))}function bi(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var gp=bi(),_v=bi(),_p=bi(),vp=bi(),vv=bi(),xv=bi(),xp=bi(),Sv=bi(),Mv=bi(),Ho=class{constructor(t,e,n){this.g=t,this.h=e,t=gp,this.l=!!t&&n===t||!1}};function tu(t,e){return new Ho(t,e,gp)}function yv(t,e,n,i,s){vc(t,n,Av(e,i),s)}const T4=tu((function(t,e,n,i,s){return t.h===2&&(sl(t,lp(e,i,n),s),!0)}),yv),A4=tu((function(t,e,n,i,s){return t.h===2&&(sl(t,lp(e,i,n),s),!0)}),yv);var nu=Symbol(),Sp=Symbol(),ig=Symbol(),sg=Symbol();let bv,Ev;function Lr(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ma=i,s.T=(function(h){switch(typeof h){case"boolean":return iv||=[0,void 0,!0];case"number":return h>0?void 0:h===0?S4||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++o])=="function"&&(s.la=!0,bv??=r,Ev??=i[o+1],r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let h;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof Ho?h=r:(h=T4,o--),h?.l){r=i[++o],c=i;var u=o;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=i[++o])=="number"&&r<0&&(u-=r,r=i[++o]);l<u;l++){const f=a[l];c?n(s,l,h,c,f):e(s,l,h,f)}}return i[t]=s}function Tv(t){return Array.isArray(t)?t[0]instanceof Ho?t:[A4,t]:[t,void 0]}function Av(t,e){return t instanceof Oe?t.u:Array.isArray(t)?zs(t,e,!1):void 0}function Mp(t,e,n,i){const s=n.g;t[e]=i?(r,o,a)=>s(r,o,a,i):s}function yp(t,e,n,i,s){const r=n.g;let o,a;t[e]=(l,c,u)=>r(l,c,u,a||=Lr(Sp,Mp,yp,i).T,o||=bp(i),s)}function bp(t){let e=t[ig];if(e!=null)return e;const n=Lr(Sp,Mp,yp,t);return e=n.la?(i,s)=>bv(i,s,n):(i,s)=>{const r=0|i[Ve];for(;mv(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var l=n.ga;l&&(l=l[o])&&(l=w4(l))!=null&&(a=n[o]=l)}a!=null&&a(s,i,o)||(o=(a=s).l,Ql(a),a.fa?a=void 0:(l=a.g.g-o,a.g.g=o,a=pv(a.g,l)),o=i,a&&((l=o[Eo])?l.push(a):o[Eo]=[a]))}return 8192&r&&Bo(i),!0},t[ig]=e}function w4(t){const e=(t=Tv(t))[0].g;if(t=t[1]){const n=bp(t),i=Lr(Sp,Mp,yp,t).T;return(s,r,o)=>e(s,r,o,i,n)}return e}function iu(t,e,n){t[e]=n.h}function su(t,e,n,i){let s,r;const o=n.h;t[e]=(a,l,c)=>o(a,l,c,r||=Lr(nu,iu,su,i).T,s||=wv(i))}function wv(t){let e=t[sg];if(!e){const n=Lr(nu,iu,su,t);e=(i,s)=>Cv(i,s,n),t[sg]=e}return e}function Cv(t,e,n){(function(i,s,r){const o=512&s?0:-1,a=i.length,l=a+((s=64&s?256&s:!!a&&Hc(i[a-1]))?-1:0);for(let c=0;c<l;c++)r(c-o,i[c]);if(s){i=i[a-1];for(const c in i)!isNaN(c)&&r(+c,i[c])}})(t,0|t[Ve]|(n.T[1]?512:0),((i,s)=>{if(s!=null){var r=(function(o,a){var l=o[a];if(l)return l;if((l=o.ga)&&(l=l[a])){var c=(l=Tv(l))[0].h;if(l=l[1]){const u=wv(l),h=Lr(nu,iu,su,l).T;l=o.la?Ev(h,u):(f,d,_)=>c(f,d,_,h,u)}else l=c;return o[a]=l}})(n,i);r&&r(e,s,i)}})),(t=Kd(t))&&(function(i,s){Co(i,i.g.end());for(let r=0;r<s.length;r++)Co(i,qd(s[r])||new Uint8Array(0))})(e,t)}function Wo(t,e){if(Array.isArray(e)){var n=0|e[Ve];if(4&n)return e;for(var i=0,s=0;i<e.length;i++){const r=t(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),Yt(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function wn(t,e,n){return new Ho(t,e,n)}function Xo(t,e,n){return new Ho(t,e,n)}function Cn(t,e,n){Ft(t,0|t[Ve],e,n)}var C4=tu((function(t,e,n,i,s){return t.h===2&&(t=sl(t,zs([void 0,void 0],i,!0),s),Ks(i=0|e[Ve]),(s=Ss(e,i,n))instanceof Xi?(2&s.M)!=0?((s=s.da()).push(t),Ft(e,i,n,s)):s.Ja(t):Array.isArray(s)?(2&(0|s[Ve])&&Ft(e,i,n,s=av(s)),s.push(t)):Ft(e,i,n,[t]),!0)}),(function(t,e,n,i,s){if(e instanceof Xi)e.forEach(((r,o)=>{vc(t,n,zs([o,r],i,!1),s)}));else if(Array.isArray(e))for(let r=0;r<e.length;r++){const o=e[r];Array.isArray(o)&&vc(t,n,zs(o,i,!1),s)}}));function Rv(t,e,n){if(e=(function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(qa(64,i));if(Ya(i)){if(s==="string")return ev(i);if(s==="number")return tp(i)}})(e),e!=null&&(typeof e=="string"&&ng(e),e!=null))switch(Jn(t,n,0),typeof e){case"number":t=t.g,Ar(e),co(t,bt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Gf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),co(t.g,n.h,n.g);break;default:n=ng(e),co(t.g,n.h,n.g)}}function Pv(t,e,n){(e=ko(e))!=null&&e!=null&&(Jn(t,n,0),Qc(t.g,e))}function Lv(t,e,n){(e=K1(e))!=null&&(Jn(t,n,0),t.g.g.push(e?1:0))}function Dv(t,e,n){(e=Ao(e))!=null&&eu(t,n,O1(e))}function Iv(t,e,n,i,s){vc(t,n,Av(e,i),s)}function Uv(t,e,n){e==null||typeof e=="string"||e instanceof us||(Er(e)?Er(e)&&Yd(X1):e=void 0),e!=null&&eu(t,n,up(e).buffer)}function Nv(t,e,n){return(t.h===5||t.h===2)&&(e=Vo(e,0|e[Ve],n,!1),t.h==2?Zc(t,zf,e):e.push(zf(t.g)),!0)}var is=wn((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=kf(i);const s=kf(i);i=2*(s>>31)+1;const r=s>>>20&2047;return t=4294967296*(1048575&s)+t,Cn(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=Js(e))!=null&&(Jn(t,n,1),t=t.g,(n=j1||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),bt=n.getUint32(0,!0),zt=n.getUint32(4,!0),$a(t,bt),$a(t,zt))}),bi()),jt=wn((function(t,e,n){return t.h===5&&(Cn(e,n,zf(t.g)),!0)}),(function(t,e,n){(e=Js(e))!=null&&(Jn(t,n,5),t=t.g,Jd(e),$a(t,bt))}),xp),R4=Xo(Nv,(function(t,e,n){if((e=Wo(Js,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(Jn(i,s,5),i=i.g,Jd(r),$a(i,bt))}}),xp),Ep=Xo(Nv,(function(t,e,n){if((e=Wo(Js,e))!=null&&e.length){Jn(t,n,2),Go(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Jd(e[i]),$a(n,bt)}}),xp),$s=wn((function(t,e,n){return t.h===0&&(Cn(e,n,hp(t.g,Qd)),!0)}),Rv,xv),gh=wn((function(t,e,n){return t.h===0&&(Cn(e,n,(t=hp(t.g,Qd))===0?void 0:t),!0)}),Rv,xv),P4=wn((function(t,e,n){return t.h===0&&(Cn(e,n,hp(t.g,Zd)),!0)}),(function(t,e,n){if((e=u4(e))!=null&&(typeof e=="string"&&tg(e),e!=null))switch(Jn(t,n,0),typeof e){case"number":t=t.g,Ar(e),co(t,bt,zt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Vf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),co(t.g,n.h,n.g);break;default:n=tg(e),co(t.g,n.h,n.g)}}),bi()),Gt=wn((function(t,e,n){return t.h===0&&(Cn(e,n,js(t.g)),!0)}),Pv,vp),ru=Xo((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,0|e[Ve],n,!1),t.h==2?Zc(t,js,e):e.push(js(t.g)),!0)}),(function(t,e,n){if((e=Wo(ko,e))!=null&&e.length){n=pp(t,n);for(let i=0;i<e.length;i++)Qc(t.g,e[i]);mp(t,n)}}),vp),no=wn((function(t,e,n){return t.h===0&&(Cn(e,n,(t=js(t.g))===0?void 0:t),!0)}),Pv,vp),Dt=wn((function(t,e,n){return t.h===0&&(Cn(e,n,fp(t.g)),!0)}),Lv,_v),uo=wn((function(t,e,n){return t.h===0&&(Cn(e,n,(t=fp(t.g))===!1?void 0:t),!0)}),Lv,_v),un=Xo((function(t,e,n){return t.h===2&&(t=dp(t),Vo(e,0|e[Ve],n,!1).push(t),!0)}),(function(t,e,n){if((e=Wo(Ao,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&eu(i,s,O1(r))}}),_p),Ns=wn((function(t,e,n){return t.h===2&&(Cn(e,n,(t=dp(t))===""?void 0:t),!0)}),Dv,_p),mt=wn((function(t,e,n){return t.h===2&&(Cn(e,n,dp(t)),!0)}),Dv,_p),Zt=(function(t,e,n=gp){return new Ho(t,e,n)})((function(t,e,n,i,s){return t.h===2&&(i=zs(void 0,i,!0),Vo(e,0|e[Ve],n,!0).push(i),sl(t,i,s),!0)}),(function(t,e,n,i,s){if(Array.isArray(e))for(let r=0;r<e.length;r++)Iv(t,e[r],n,i,s)})),pt=tu((function(t,e,n,i,s,r){return t.h===2&&(lv(e,0|e[Ve],r,n),sl(t,e=lp(e,i,n),s),!0)}),Iv),Fv=wn((function(t,e,n){return t.h===2&&(Cn(e,n,gv(t)),!0)}),Uv,Sv),L4=Xo((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,0|e[Ve],n,!1),t.h==2?Zc(t,vs,e):e.push(vs(t.g)),!0)}),(function(t,e,n){if((e=Wo(J1,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(Jn(i,s,0),Go(i.g,r))}}),vv),D4=wn((function(t,e,n){return t.h===0&&(Cn(e,n,(t=vs(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=J1(e))!=null&&e!=null&&(Jn(t,n,0),Go(t.g,e))}),vv),$n=wn((function(t,e,n){return t.h===0&&(Cn(e,n,js(t.g)),!0)}),(function(t,e,n){(e=ko(e))!=null&&(e=parseInt(e,10),Jn(t,n,0),Qc(t.g,e))}),Mv);class I4{constructor(e,n){this.h=e,this.g=n,this.l=ct,this.m=Ge,this.defaultValue=void 0}register(){kc(this)}}function Ei(t,e){return new I4(t,e)}function Zs(t,e){return(n,i)=>{if(Bl.length){const r=Bl.pop();r.o(i),mh(r.g,n,i),n=r}else n=new class{constructor(r,o){if(eg.length){const a=eg.pop();mh(a,r,o),r=a}else r=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,mh(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:r=!1}={}){this.fa=r}}(n,i);try{const r=new t,o=r.u;bp(e)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,Bl.length<100&&Bl.push(n)}return s}}function ou(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Cv(this.u,e,Lr(nu,iu,su,t)),Co(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];n.set(a,r),r+=a.length}return e.l=[n],n}}var rg=class extends Oe{constructor(t){super(t)}},og=[0,Ns,wn((function(t,e,n){return t.h===2&&(Cn(e,n,(t=gv(t))===Tr()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Oe){const i=e.Oa;return void(i&&(e=i(e),e!=null&&eu(t,n,up(e).buffer)))}if(Array.isArray(e))return}Uv(t,e,n)}),Sv)];let _h,ag=globalThis.trustedTypes;function lg(t){_h===void 0&&(_h=(function(){let n=null;if(!ag)return n;try{const i=s=>s;n=ag.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var e=_h;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function U4(t,...e){if(e.length===0)return lg(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return lg(n)}var Ov=[0,Gt,$n,Dt,-1,ru,$n,-1],N4=class extends Oe{constructor(t){super(t)}},Bv=[0,Dt,mt,Dt,$n,-1,Xo((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,0|e[Ve],n,!1),t.h==2?Zc(t,y4,e):e.push(js(t.g)),!0)}),(function(t,e,n){if((e=Wo(ko,e))!=null&&e.length){n=pp(t,n);for(let i=0;i<e.length;i++)Qc(t.g,e[i]);mp(t,n)}}),Mv),mt,-1,[0,Dt,-1],$n,Dt,-1],kv=[0,mt,-2],cg=class extends Oe{constructor(t){super(t)}},zv=[0],Vv=[0,Gt,Dt,1,Dt,-3],Kn=class extends Oe{constructor(t){super(t,2)}},Kt={};Kt[336783863]=[0,mt,Dt,-1,Gt,[0,[1,2,3,4,5,6,7,8,9],pt,zv,pt,Bv,pt,kv,pt,Vv,pt,Ov,pt,[0,mt,-2],pt,[0,mt,$n],pt,[0,$n,mt,-1],pt,[0,$n,-1]],[0,mt],Dt,[0,[1,3],[2,4],pt,[0,ru],-1,pt,[0,un],-1,Zt,[0,mt,-1]],mt];var ug=[0,gh,-1,uo,-3,gh,ru,Ns,no,gh,-1,uo,no,uo,-2,Ns];function Zn(t,e){Bf(t,2,zo(e),"")}function Rt(t,e){Jc(t,3,e)}function ot(t,e){Jc(t,4,e)}var An=class extends Oe{constructor(t){super(t,500)}o(t){return Ge(this,0,7,t)}},Aa=[-1,{}],hg=[0,mt,1,Aa],fg=[0,mt,un,Aa];function Qn(t,e){gc(t,1,An,e)}function Pt(t,e){Jc(t,10,e)}function ht(t,e){Jc(t,15,e)}var On=class extends Oe{constructor(t){super(t,500)}o(t){return Ge(this,0,1001,t)}},Gv=[-500,Zt,[-500,Ns,-1,un,-3,[-2,Kt,Dt],Zt,og,no,-1,hg,fg,Zt,[0,Ns,uo],Ns,ug,no,un,987,un],4,Zt,[-500,mt,-1,[-1,{}],998,mt],Zt,[-500,mt,un,-1,[-2,{},Dt],997,un,-1],no,Zt,[-500,mt,un,Aa,998,un],un,no,hg,fg,Zt,[0,Ns,-1,Aa],un,-2,ug,Ns,-1,uo,[0,uo,D4],978,Aa,Zt,og];On.prototype.g=ou(Gv);var F4=Zs(On,Gv),O4=class extends Oe{constructor(t){super(t)}},Hv=class extends Oe{constructor(t){super(t)}g(){return _s(this,O4,1)}},Wv=[0,Zt,[0,Gt,jt,mt,-1]],au=Zs(Hv,Wv),B4=class extends Oe{constructor(t){super(t)}},k4=class extends Oe{constructor(t){super(t)}},vh=class extends Oe{constructor(t){super(t)}h(){return ct(this,B4,2)}g(){return _s(this,k4,5)}},Xv=Zs(class extends Oe{constructor(t){super(t)}},[0,un,ru,Ep,[0,$n,[0,Gt,-3],[0,jt,-3],[0,Gt,-1,[0,Zt,[0,Gt,-2]]],Zt,[0,jt,-1,mt,jt]],mt,-1,$s,Zt,[0,Gt,jt],un,$s]),qv=class extends Oe{constructor(t){super(t)}},ho=Zs(class extends Oe{constructor(t){super(t)}},[0,Zt,[0,jt,-4]]),Yv=class extends Oe{constructor(t){super(t)}},rl=Zs(class extends Oe{constructor(t){super(t)}},[0,Zt,[0,jt,-4]]),z4=class extends Oe{constructor(t){super(t)}},V4=[0,Gt,-1,Ep,$n],jv=class extends Oe{constructor(t){super(t)}};jv.prototype.g=ou([0,jt,-4,$s]);var G4=class extends Oe{constructor(t){super(t)}},H4=Zs(class extends Oe{constructor(t){super(t)}},[0,Zt,[0,1,Gt,mt,Wv],$s]),dg=class extends Oe{constructor(t){super(t)}},W4=class extends Oe{constructor(t){super(t)}ma(){const t=ov(this);return t??Tr()}},X4=class extends Oe{constructor(t){super(t)}},$v=[1,2],q4=Zs(class extends Oe{constructor(t){super(t)}},[0,Zt,[0,$v,pt,[0,Ep],pt,[0,Fv],Gt,mt],$s]),Tp=class extends Oe{constructor(t){super(t)}},Kv=[0,mt,Gt,jt,un,-1],pg=class extends Oe{constructor(t){super(t)}},Y4=[0,Dt,-1],mg=class extends Oe{constructor(t){super(t)}},ec=[1,2,3,4,5],xc=class extends Oe{constructor(t){super(t)}g(){return ov(this)!=null}h(){return ci(this,2)!=null}},Ut=class extends Oe{constructor(t){super(t)}g(){return K1(wo(this,2))??!1}},Jv=[0,Fv,mt,[0,Gt,$s,-1],[0,P4,$s]],Xt=[0,Jv,Dt,[0,ec,pt,Vv,pt,Bv,pt,Ov,pt,zv,pt,kv],$n],lu=class extends Oe{constructor(t){super(t)}},Ap=[0,Xt,jt,-1,Gt],j4=Ei(502141897,lu);Kt[502141897]=Ap;var $4=Zs(class extends Oe{constructor(t){super(t)}},[0,[0,$n,-1,R4,L4],V4]),Zv=class extends Oe{constructor(t){super(t)}},Qv=class extends Oe{constructor(t){super(t)}},wp=[0,Xt,jt,[0,Xt],Dt],ex=[0,Xt,Ap,wp,jt,[0,[0,Jv]]],K4=Ei(508968150,Qv);Kt[508968150]=ex,Kt[508968149]=wp;var tx=class extends Oe{constructor(t){super(t)}},J4=Ei(513916220,tx);Kt[513916220]=[0,Xt,ex,Gt];var Jr=class extends Oe{constructor(t){super(t)}h(){return ct(this,Tp,2)}g(){Ct(this,2)}},nx=[0,Xt,Kv];Kt[478825465]=nx;var Z4=class extends Oe{constructor(t){super(t)}},ix=class extends Oe{constructor(t){super(t)}},Cp=class extends Oe{constructor(t){super(t)}},Rp=class extends Oe{constructor(t){super(t)}},sx=class extends Oe{constructor(t){super(t)}},gg=[0,Xt,[0,Xt],nx,-1],rx=[0,Xt,jt,Gt],Pp=[0,Xt,jt],ox=[0,Xt,rx,Pp,jt],Q4=Ei(479097054,sx);Kt[479097054]=[0,Xt,ox,gg],Kt[463370452]=gg,Kt[464864288]=rx;var eC=Ei(462713202,Rp);Kt[462713202]=ox,Kt[474472470]=Pp;var tC=class extends Oe{constructor(t){super(t)}},ax=class extends Oe{constructor(t){super(t)}},lx=class extends Oe{constructor(t){super(t)}},cx=class extends Oe{constructor(t){super(t)}},Lp=[0,Xt,jt,-1,Gt],Hf=[0,Xt,jt,Dt];cx.prototype.g=ou([0,Xt,Pp,[0,Xt],Ap,wp,Lp,Hf]);var ux=class extends Oe{constructor(t){super(t)}},nC=Ei(456383383,ux);Kt[456383383]=[0,Xt,Kv];var hx=class extends Oe{constructor(t){super(t)}},iC=Ei(476348187,hx);Kt[476348187]=[0,Xt,Y4];var fx=class extends Oe{constructor(t){super(t)}},_g=class extends Oe{constructor(t){super(t)}},dx=[0,$n,-1],sC=Ei(458105876,class extends Oe{constructor(t){super(t)}g(){var t=this.u;const e=0|t[Ve],n=2&e;return t=(function(i,s,r){var o=_g;const a=2&s;let l=!1;if(r==null){if(a)return Q0();r=[]}else if(r.constructor===Xi){if((2&r.M)==0||a)return r;r=r.da()}else Array.isArray(r)?l=!!(2&(0|r[Ve])):r=[];if(a){if(!r.length)return Q0();l||(l=!0,Bo(r))}else l&&(l=!1,r=av(r));return l||(64&(0|r[Ve])?r[Ve]&=-33:32&s&&Vc(r,32)),Ft(i,s,2,o=new Xi(r,o,h4,void 0)),o})(t,e,Ss(t,e,2)),!n&&_g&&(t.pa=!0),t}});Kt[458105876]=[0,dx,C4,[!0,$s,[0,mt,-1,un]]];var Dp=class extends Oe{constructor(t){super(t)}},px=Ei(458105758,Dp);Kt[458105758]=[0,Xt,mt,dx];var mx=class extends Oe{constructor(t){super(t)}},rC=Ei(443442058,mx);Kt[443442058]=[0,Xt,mt,Gt,jt,un,-1,Dt,jt],Kt[514774813]=Lp;var gx=class extends Oe{constructor(t){super(t)}},oC=Ei(516587230,gx);function Wf(t,e){return e=e?e.clone():new Tp,t.displayNamesLocale!==void 0?Ct(e,1,zo(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Ct(e,1),t.maxResults!==void 0?qi(e,2,t.maxResults):"maxResults"in t&&Ct(e,2),t.scoreThreshold!==void 0?Be(e,3,t.scoreThreshold):"scoreThreshold"in t&&Ct(e,3),t.categoryAllowlist!==void 0?_c(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Ct(e,4),t.categoryDenylist!==void 0?_c(e,5,t.categoryDenylist):"categoryDenylist"in t&&Ct(e,5),e}function Ip(t,e=-1,n=""){return{categories:t.map((i=>({index:ai(i,1)??0??-1,score:Ht(i,2)??0,categoryName:ci(i,3)??""??"",displayName:ci(i,4)??""??""}))),headIndex:e,headName:n}}function _x(t){var e=xr(t,3,Js,vr()),n=xr(t,2,ko,vr()),i=xr(t,1,Ao,vr()),s=xr(t,9,Ao,vr());const r={categories:[],keypoints:[]};for(let o=0;o<e.length;o++)r.categories.push({score:e[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((e=ct(t,vh,4)?.h())&&(r.boundingBox={originX:ai(e,1)??0,originY:ai(e,2)??0,width:ai(e,3)??0,height:ai(e,4)??0,angle:0}),ct(t,vh,4)?.g().length)for(const o of ct(t,vh,4).g())r.keypoints.push({x:Zl(o,1)??0,y:Zl(o,2)??0,score:Zl(o,4)??0,label:ci(o,3)??""});return r}function cu(t){const e=[];for(const n of _s(t,Yv,1))e.push({x:Ht(n,1)??0,y:Ht(n,2)??0,z:Ht(n,3)??0,visibility:Ht(n,4)??0});return e}function wa(t){const e=[];for(const n of _s(t,qv,1))e.push({x:Ht(n,1)??0,y:Ht(n,2)??0,z:Ht(n,3)??0,visibility:Ht(n,4)??0});return e}function vg(t){return Array.from(t,(e=>e>127?e-256:e))}function xg(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let kl;Kt[516587230]=[0,Xt,Lp,Hf,jt],Kt[518928384]=Hf;const aC=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function vx(){if(kl===void 0)try{await WebAssembly.instantiate(aC),kl=!0}catch{kl=!1}return kl}async function ra(t,e=U4``){const n=await vx()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Ls=class{};function xx(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Sg(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function Sx(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function ze(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function Mg(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=Sx(e);return!t.l||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function yg(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const s of i)t.i._free(s);t.i._free(e)}function Ri(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ws(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Ls.forVisionTasks=function(t){return ra("vision",t)},Ls.forTextTasks=function(t){return ra("text",t)},Ls.forGenAiExperimentalTasks=function(t){return ra("genai_experimental",t)},Ls.forGenAiTasks=function(t){return ra("genai",t)},Ls.forAudioTasks=function(t){return ra("audio",t)},Ls.isSimdSupported=function(){return vx()};async function lC(t,e,n,i){return t=await(async(s,r,o,a,l)=>{if(r&&await Sg(r),!self.ModuleFactory||o&&(await Sg(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await t.o(i),t}function xh(t,e){const n=ct(t.baseOptions,xc,1)||new xc;typeof e=="string"?(Ct(n,2,zo(e)),Ct(n,1)):e instanceof Uint8Array&&(Ct(n,1,$d(e,!1)),Ct(n,2)),Ge(t.baseOptions,0,1,n)}function bg(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((n=>n.message)).join(", "))}finally{t.G=[]}}function Ie(t,e){t.B=Math.max(t.B,e)}function uu(t,e){t.A=new An,Zn(t.A,"PassThroughCalculator"),Rt(t.A,"free_memory"),ot(t.A,"free_memory_unused_out"),Pt(e,"free_memory"),Qn(e,t.A)}function Ro(t,e){Rt(t.A,e),ot(t.A,e+"_unused_out")}function hu(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var Xf=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(ct(this.baseOptions,xc,1)?.g()||ct(this.baseOptions,xc,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=ct(i.baseOptions,mg,3);if(!r){var o=r=new mg,a=new cg;Ta(o,4,ec,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new N4,Ta(s,2,ec,o)):(s=r,o=new cg,Ta(s,4,ec,o))),Ge(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),xh(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)xh(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const s=[];for(var r=0;;){const{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(const o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{xh(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=F4(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,bg(this)}finishProcessing(){this.g.finishProcessing(),bg(this)}close(){this.A=void 0,this.g.closeGraph()}};function fs(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Xf.prototype.close=Xf.prototype.close;class cC{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Eg(t,e,n){const i=t.g;if(n=fs(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Tg(t,e){const n=t.g,i=fs(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=fs(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=fs(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new cC(n,i,s,r)}function Up(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Np(t,e,n,i){return Up(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=Tg(t,!0)),n=t.s):(t.v||(t.v=Tg(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function fu(t,e,n){return Up(t,e),t=fs(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function du(t,e,n){Up(t,e),t.A||(t.A=fs(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Fp(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Op=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=fs(t.createProgram(),"Failed to create WebGL program"),this.Z=Eg(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Y=Eg(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function os(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function qf(t){var e=os(t,1);if(!e){if(e=os(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Po(t);var n=Bp(t);if(du(n,i,Mx(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Mx(t){let e=os(t,2);if(!e){const n=Po(t);e=bx(t);const i=qf(t),s=yx(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),Yf(t)}return e}function Po(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=fs(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function yx(t){if(t=Po(t),!zl)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))zl=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");zl=t.R16F}return zl}function Bp(t){return t.l||(t.l=new Op),t.l}function bx(t){const e=Po(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=os(t,2);return n||(n=fu(Bp(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Yf(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var zl,nn=class{constructor(t,e,n,i,s,r,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Ag===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!os(this,0)}ja(){return!!os(this,1)}R(){return!!os(this,2)}ia(){return(e=os(t=this,0))||(e=qf(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ha(){return qf(this)}N(){return Mx(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Po(this),s=Bp(this);i.activeTexture(i.TEXTURE1),n=fu(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=yx(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),du(s,i,n),Np(s,i,!1,(()=>{bx(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Yf(this)})),Fp(s),Yf(this)}}t.push(n)}return new nn(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Po(this).deleteTexture(os(this,2)),Ag=-1}};nn.prototype.close=nn.prototype.close,nn.prototype.clone=nn.prototype.clone,nn.prototype.getAsWebGLTexture=nn.prototype.N,nn.prototype.getAsFloat32Array=nn.prototype.ha,nn.prototype.getAsUint8Array=nn.prototype.ia,nn.prototype.hasWebGLTexture=nn.prototype.R,nn.prototype.hasFloat32Array=nn.prototype.ja,nn.prototype.hasUint8Array=nn.prototype.Da;var Ag=250;function Oi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Ex(t){var e=Oi(t,0);if(!e){e=Lo(t);const n=pu(t),i=new Uint8Array(t.width*t.height*4);du(n,e,tc(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Fp(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function tc(t){let e=Oi(t,2);if(!e){const n=Lo(t);e=nc(t);const i=Oi(t,1)||Ex(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),ha(t)}return e}function Lo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=fs(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function pu(t){return t.l||(t.l=new Op),t.l}function nc(t){const e=Lo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Oi(t,2);return n||(n=fu(pu(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function ha(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function wg(t){const e=Lo(t);return Np(pu(t),e,!0,(()=>(function(n,i){const s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();const r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var sn=class{constructor(t,e,n,i,s,r,o){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--Cg===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!Oi(this,0)}ka(){return!!Oi(this,1)}R(){return!!Oi(this,2)}Aa(){return Ex(this)}za(){var t=Oi(this,1);return t||(tc(this),nc(this),t=wg(this),ha(this),this.g.push(t),this.j=!0),t}N(){return tc(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Lo(this),s=pu(this);i.activeTexture(i.TEXTURE1),n=fu(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),du(s,i,n),Np(s,i,!1,(()=>{nc(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ha(this)})),Fp(s),ha(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);tc(this),nc(this),n=wg(this),ha(this)}t.push(n)}return new sn(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Oi(this,1).close(),this.m&&Lo(this).deleteTexture(Oi(this,2)),Cg=-1}};sn.prototype.close=sn.prototype.close,sn.prototype.clone=sn.prototype.clone,sn.prototype.getAsWebGLTexture=sn.prototype.N,sn.prototype.getAsImageBitmap=sn.prototype.za,sn.prototype.getAsImageData=sn.prototype.Aa,sn.prototype.hasWebGLTexture=sn.prototype.R,sn.prototype.hasImageBitmap=sn.prototype.ka,sn.prototype.hasImageData=sn.prototype.Ca;var Cg=250;function Ti(...t){return t.map((([e,n])=>({start:e,end:n})))}const uC=(function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService()}}})((Rg=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:xx()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),ze(this,i||"input_audio",(r=>{ze(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Ri(this,"__graph_config__",(e=>{t(e)})),ze(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){const r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),ze(this,i,(o=>{this.i._addAudioToInputStream(this.g,e,n,o,s)}))}addGpuBufferToStream(t,e,n){ze(this,e,(i=>{const[s,r]=Mg(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(t,e,n){ze(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){ze(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){ze(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){ze(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){ze(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){ze(this,e,(i=>{ze(this,t,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(t,e,n){ze(this,e,(i=>{yg(this,Object.keys(t),(s=>{yg(this,Object.values(t),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){ze(this,n,(s=>{ze(this,e,(r=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(t,e){ze(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){ze(this,e,(i=>{const s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(t,e,n){ze(this,e,(i=>{const s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(t,e,n){ze(this,e,(i=>{const s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(t,e,n){ze(this,e,(i=>{const s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(t,e,n){ze(this,e,(i=>{const s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(t,e,n){ze(this,e,(i=>{const s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of t)ze(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){ze(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){ze(this,e,(n=>{ze(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){ze(this,n,(i=>{ze(this,e,(s=>{const r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){ze(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of t)ze(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Ri(this,t,e),ze(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){ws(this,t,e),ze(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Ri(this,t,e),ze(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){ws(this,t,e),ze(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Ri(this,t,e),ze(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){ws(this,t,e),ze(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Ri(this,t,e),ze(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){ws(this,t,e),ze(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Ri(this,t,e),ze(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){ws(this,t,e),ze(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Ri(this,t,e),ze(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){ws(this,t,e),ze(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Ri(this,t,e),ze(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){ws(this,t,e),ze(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ri(this,t,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)})),ze(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Rg{get ea(){return this.i}oa(t,e,n){ze(this,e,(i=>{const[s,r]=Mg(this,t,i);this.ea._addBoundTextureAsImageToStream(i,s,r,n)}))}V(t,e){Ri(this,t,e),ze(this,t,(n=>{this.ea._attachImageListener(n)}))}ba(t,e){ws(this,t,e),ze(this,t,(n=>{this.ea._attachImageVectorListener(n)}))}}));var Rg,ui=class extends uC{};async function rt(t,e,n){return(async function(i,s,r,o){return lC(i,s,r,o)})(t,n.canvas??(xx()?void 0:document.createElement("canvas")),e,n)}function Tx(t,e,n,i){if(t.U){const r=new jv;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Be(r,1,(s.left+s.right)/2),Be(r,2,(s.top+s.bottom)/2),Be(r,4,s.right-s.left),Be(r,3,s.bottom-s.top)}else Be(r,1,.5),Be(r,2,.5),Be(r,4,1),Be(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Be(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[o,a]=Sx(e);n=Ht(r,3)*a/o,s=Ht(r,4)*o/a,Be(r,4,n),Be(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.oa(e,t.Z,i??performance.now()),t.finishProcessing()}function hi(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Tx(t,e,n,t.B+1)}function ji(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Tx(t,e,n,i)}function Do(t,e,n,i){var s=e.data;const r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return t=new nn([s],n,!1,t.g.i.canvas,t.P,r,e),i?t.clone():t}var Fn=class extends Xf{constructor(t,e,n,i){super(t),this.g=t,this.Z=e,this.U=n,this.na=i,this.P=new Op}l(t,e=!0){if("runningMode"in t&&ja(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Fn.prototype.close=Fn.prototype.close;var ni=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ge(t=this.h=new lu,0,1,e=new Ut),Be(this.h,2,.5),Be(this.h,3,.3)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Be(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Be(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},hi(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},ji(this,t,n,e),this.j}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect_in"),ht(t,"detections");const e=new Kn;yi(e,j4,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect_in"),ot(n,"DETECTIONS:detections"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Xv(r),this.j.detections.push(_x(i));Ie(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.detectForVideo=ni.prototype.F,ni.prototype.detect=ni.prototype.D,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=async function(t,e){return rt(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return rt(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return rt(ni,t,e)};var kp=Ti([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),zp=Ti([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Vp=Ti([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Ax=Ti([474,475],[475,476],[476,477],[477,474]),Gp=Ti([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Hp=Ti([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),wx=Ti([469,470],[470,471],[471,472],[472,469]),Wp=Ti([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Cx=[...kp,...zp,...Vp,...Gp,...Hp,...Wp],Rx=Ti([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Pg(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var kt=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ge(t=this.h=new Qv,0,1,e=new Ut),this.v=new Zv,Ge(this.h,0,3,this.v),this.s=new lu,Ge(this.h,0,2,this.s),qi(this.s,4,1),Be(this.s,2,.5),Be(this.v,2,.5),Be(this.h,4,.5)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numFaces"in t&&qi(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Be(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Be(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Be(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return Pg(this),hi(this,t,e),this.j}F(t,e,n){return Pg(this),ji(this,t,n,e),this.j}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect"),ht(t,"face_landmarks");const e=new Kn;yi(e,K4,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=rl(r),this.j.faceLandmarks.push(cu(i));Ie(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Ie(this,i)})),this.outputFaceBlendshapes&&(ht(t,"blendshapes"),ot(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=au(r),this.j.faceBlendshapes.push(Ip(i.g()??[]));Ie(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Ie(this,i)}))),this.outputFacialTransformationMatrixes&&(ht(t,"face_geometry"),ot(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=ct($4(r),z4,2))&&this.j.facialTransformationMatrixes.push({rows:ai(i,1)??0??0,columns:ai(i,2)??0??0,data:xr(i,3,Js,vr()).slice()??[]});Ie(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Ie(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kt.prototype.detectForVideo=kt.prototype.F,kt.prototype.detect=kt.prototype.D,kt.prototype.setOptions=kt.prototype.o,kt.createFromModelPath=function(t,e){return rt(kt,t,{baseOptions:{modelAssetPath:e}})},kt.createFromModelBuffer=function(t,e){return rt(kt,t,{baseOptions:{modelAssetBuffer:e}})},kt.createFromOptions=function(t,e){return rt(kt,t,e)},kt.FACE_LANDMARKS_LIPS=kp,kt.FACE_LANDMARKS_LEFT_EYE=zp,kt.FACE_LANDMARKS_LEFT_EYEBROW=Vp,kt.FACE_LANDMARKS_LEFT_IRIS=Ax,kt.FACE_LANDMARKS_RIGHT_EYE=Gp,kt.FACE_LANDMARKS_RIGHT_EYEBROW=Hp,kt.FACE_LANDMARKS_RIGHT_IRIS=wx,kt.FACE_LANDMARKS_FACE_OVAL=Wp,kt.FACE_LANDMARKS_CONTOURS=Cx,kt.FACE_LANDMARKS_TESSELATION=Rx;var Pi=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!0),Ge(t=this.j=new tx,0,1,e=new Ut)}get baseOptions(){return ct(this.j,Ut,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){return super.l(t)}Ka(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,hi(this,t,i??{}),!this.h)return this.s}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect"),ht(t,"stylized_image");const e=new Kn;yi(e,J4,this.j);const n=new An;Zn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Qn(t,n),this.g.V("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let u=0;u<l;++u)c[4*u]=o[3*u],c[4*u+1]=o[3*u+1],c[4*u+2]=o[3*u+2],c[4*u+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new sn([o],!1,!1,this.g.i.canvas,this.P,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),Ie(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pi.prototype.stylize=Pi.prototype.Ka,Pi.prototype.setOptions=Pi.prototype.o,Pi.createFromModelPath=function(t,e){return rt(Pi,t,{baseOptions:{modelAssetPath:e}})},Pi.createFromModelBuffer=function(t,e){return rt(Pi,t,{baseOptions:{modelAssetBuffer:e}})},Pi.createFromOptions=function(t,e){return rt(Pi,t,e)};var Xp=Ti([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Lg(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Dg(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Ig(t,e=!0){const n=[];for(const s of t){var i=au(s);t=[];for(const r of i.g())i=e&&ai(r,1)!=null?ai(r,1)??0:-1,t.push({score:Ht(r,2)??0,index:i,categoryName:ci(r,3)??""??"",displayName:ci(r,4)??""??""});n.push(t)}return n}var Gn=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ge(t=this.j=new sx,0,1,e=new Ut),this.s=new Rp,Ge(this.j,0,2,this.s),this.C=new Cp,Ge(this.s,0,3,this.C),this.v=new ix,Ge(this.s,0,2,this.v),this.h=new Z4,Ge(this.j,0,3,this.h),Be(this.v,2,.5),Be(this.s,4,.5),Be(this.C,2,.5)}get baseOptions(){return ct(this.j,Ut,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){if(qi(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&Be(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Be(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Be(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Jr,n=e,i=Wf(t.cannedGesturesClassifierOptions,ct(this.h,Jr,3)?.h());Ge(n,0,2,i),Ge(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&ct(this.h,Jr,3)?.g();return t.customGesturesClassifierOptions?(Ge(n=e=new Jr,0,2,i=Wf(t.customGesturesClassifierOptions,ct(this.h,Jr,4)?.h())),Ge(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&ct(this.h,Jr,4)?.g(),this.l(t)}Fa(t,e){return Lg(this),hi(this,t,e),Dg(this)}Ga(t,e,n){return Lg(this),ji(this,t,n,e),Dg(this)}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect"),ht(t,"hand_gestures"),ht(t,"hand_landmarks"),ht(t,"world_hand_landmarks"),ht(t,"handedness");const e=new Kn;yi(e,Q4,this.j);const n=new An;Zn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"HAND_GESTURES:hand_gestures"),ot(n,"LANDMARKS:hand_landmarks"),ot(n,"WORLD_LANDMARKS:world_hand_landmarks"),ot(n,"HANDEDNESS:handedness"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=rl(r);const o=[];for(const a of _s(i,Yv,1))o.push({x:Ht(a,1)??0,y:Ht(a,2)??0,z:Ht(a,3)??0,visibility:Ht(a,4)??0});this.landmarks.push(o)}Ie(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=ho(r);const o=[];for(const a of _s(i,qv,1))o.push({x:Ht(a,1)??0,y:Ht(a,2)??0,z:Ht(a,3)??0,visibility:Ht(a,4)??0});this.worldLandmarks.push(o)}Ie(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Ig(i,!1)),Ie(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Ig(i)),Ie(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Ug(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Gn.prototype.recognizeForVideo=Gn.prototype.Ga,Gn.prototype.recognize=Gn.prototype.Fa,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=function(t,e){return rt(Gn,t,{baseOptions:{modelAssetPath:e}})},Gn.createFromModelBuffer=function(t,e){return rt(Gn,t,{baseOptions:{modelAssetBuffer:e}})},Gn.createFromOptions=function(t,e){return rt(Gn,t,e)},Gn.HAND_CONNECTIONS=Xp;var yn=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ge(t=this.h=new Rp,0,1,e=new Ut),this.s=new Cp,Ge(this.h,0,3,this.s),this.j=new ix,Ge(this.h,0,2,this.j),qi(this.j,3,1),Be(this.j,2,.5),Be(this.s,2,.5),Be(this.h,4,.5)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numHands"in t&&qi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Be(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Be(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Be(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],hi(this,t,e),Ug(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ji(this,t,n,e),Ug(this)}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect"),ht(t,"hand_landmarks"),ht(t,"world_hand_landmarks"),ht(t,"handedness");const e=new Kn;yi(e,eC,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"LANDMARKS:hand_landmarks"),ot(n,"WORLD_LANDMARKS:world_hand_landmarks"),ot(n,"HANDEDNESS:handedness"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=rl(r),this.landmarks.push(cu(i));Ie(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=ho(r),this.worldLandmarks.push(wa(i));Ie(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Ie(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const l of i){i=au(l);const c=[];for(const u of i.g())c.push({score:Ht(u,2)??0,index:ai(u,1)??0??-1,categoryName:ci(u,3)??""??"",displayName:ci(u,4)??""??""});a.push(c)}o.call(r,...a),Ie(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.prototype.detectForVideo=yn.prototype.F,yn.prototype.detect=yn.prototype.D,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(t,e){return rt(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return rt(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return rt(yn,t,e)},yn.HAND_CONNECTIONS=Xp;var Px=Ti([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Ng(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Fg(t){try{if(!t.C)return t.h;t.C(t.h)}finally{hu(t)}}function Vl(t,e){t=rl(t),e.push(cu(t))}var Lt=class extends Fn{constructor(t,e){super(new ui(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ge(t=this.j=new cx,0,1,e=new Ut),this.K=new Cp,Ge(this.j,0,2,this.K),this.Y=new tC,Ge(this.j,0,3,this.Y),this.s=new lu,Ge(this.j,0,4,this.s),this.H=new Zv,Ge(this.j,0,5,this.H),this.v=new ax,Ge(this.j,0,6,this.v),this.L=new lx,Ge(this.j,0,7,this.L),Be(this.s,2,.5),Be(this.s,3,.3),Be(this.H,2,.5),Be(this.v,2,.5),Be(this.v,3,.3),Be(this.L,2,.5),Be(this.K,2,.5)}get baseOptions(){return ct(this.j,Ut,1)}set baseOptions(t){Ge(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Be(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Be(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Be(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Be(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Be(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Be(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Be(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,Ng(this),hi(this,t,i),Fg(this)}F(t,e,n,i){const s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,Ng(this),ji(this,t,s,e),Fg(this)}m(){var t=new On;Pt(t,"input_frames_image"),ht(t,"pose_landmarks"),ht(t,"pose_world_landmarks"),ht(t,"face_landmarks"),ht(t,"left_hand_landmarks"),ht(t,"left_hand_world_landmarks"),ht(t,"right_hand_landmarks"),ht(t,"right_hand_world_landmarks");const e=new Kn,n=new rg;Bf(n,1,zo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))Ct(s,2,jc(r,ip,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof us||Er(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Bf(s,2,$d(r,!1),Tr())}})(n,this.j.g());const i=new An;Zn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),gc(i,8,rg,n),Rt(i,"IMAGE:input_frames_image"),ot(i,"POSE_LANDMARKS:pose_landmarks"),ot(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ot(i,"FACE_LANDMARKS:face_landmarks"),ot(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ot(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ot(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ot(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Qn(t,i),uu(this,t),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Vl(s,this.h.poseLandmarks),Ie(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{Ie(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=ho(s),o.push(wa(s)),Ie(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{Ie(this,s)})),this.outputPoseSegmentationMasks&&(ot(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ro(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Do(this,s,!0,!this.C)],Ie(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],Ie(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Vl(s,this.h.faceLandmarks),Ie(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{Ie(this,s)})),this.outputFaceBlendshapes&&(ht(t,"extra_blendshapes"),ot(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=au(s),o.push(Ip(s.g()??[]))),Ie(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{Ie(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Vl(s,this.h.leftHandLandmarks),Ie(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{Ie(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=ho(s),o.push(wa(s)),Ie(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{Ie(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Vl(s,this.h.rightHandLandmarks),Ie(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{Ie(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=ho(s),o.push(wa(s)),Ie(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{Ie(this,s)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Lt.prototype.detectForVideo=Lt.prototype.F,Lt.prototype.detect=Lt.prototype.D,Lt.prototype.setOptions=Lt.prototype.o,Lt.createFromModelPath=function(t,e){return rt(Lt,t,{baseOptions:{modelAssetPath:e}})},Lt.createFromModelBuffer=function(t,e){return rt(Lt,t,{baseOptions:{modelAssetBuffer:e}})},Lt.createFromOptions=function(t,e){return rt(Lt,t,e)},Lt.HAND_CONNECTIONS=Xp,Lt.POSE_CONNECTIONS=Px,Lt.FACE_LANDMARKS_LIPS=kp,Lt.FACE_LANDMARKS_LEFT_EYE=zp,Lt.FACE_LANDMARKS_LEFT_EYEBROW=Vp,Lt.FACE_LANDMARKS_LEFT_IRIS=Ax,Lt.FACE_LANDMARKS_RIGHT_EYE=Gp,Lt.FACE_LANDMARKS_RIGHT_EYEBROW=Hp,Lt.FACE_LANDMARKS_RIGHT_IRIS=wx,Lt.FACE_LANDMARKS_FACE_OVAL=Wp,Lt.FACE_LANDMARKS_CONTOURS=Cx,Lt.FACE_LANDMARKS_TESSELATION=Rx;var ii=class extends Fn{constructor(t,e){super(new ui(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ge(t=this.h=new ux,0,1,e=new Ut)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return Ge(this.h,0,2,Wf(t,ct(this.h,Tp,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},hi(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},ji(this,t,n,e),this.j}m(){var t=new On;Pt(t,"input_image"),Pt(t,"norm_rect"),ht(t,"classifications");const e=new Kn;yi(e,nC,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Rt(n,"IMAGE:input_image"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"CLASSIFICATIONS:classifications"),n.o(e),Qn(t,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){const o={classifications:_s(r,G4,1).map((a=>Ip(ct(a,Hv,4)?.g()??[],ai(a,2)??0,ci(a,3)??"")))};return Nf(wo(r,2))!=null&&(o.timestampMs=Nf(wo(r,2))??0),o})(H4(i)),Ie(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ii.prototype.classifyForVideo=ii.prototype.ra,ii.prototype.classify=ii.prototype.qa,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(t,e){return rt(ii,t,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(t,e){return rt(ii,t,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(t,e){return rt(ii,t,e)};var Hn=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!0),this.h=new hx,this.embeddings={embeddings:[]},Ge(t=this.h,0,1,e=new Ut)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){var e=this.h,n=ct(this.h,pg,2);return n=n?n.clone():new pg,t.l2Normalize!==void 0?ja(n,1,t.l2Normalize):"l2Normalize"in t&&Ct(n,1),t.quantize!==void 0?ja(n,2,t.quantize):"quantize"in t&&Ct(n,2),Ge(e,0,2,n),this.l(t)}xa(t,e){return hi(this,t,e),this.embeddings}ya(t,e,n){return ji(this,t,n,e),this.embeddings}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect"),ht(t,"embeddings_out");const e=new Kn;yi(e,iC,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"EMBEDDINGS:embeddings_out"),n.o(e),Qn(t,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=q4(i),this.embeddings=(function(r){return{embeddings:_s(r,X4,1).map((o=>{const a={headIndex:ai(o,3)??0??-1,headName:ci(o,4)??""??""};if(cv(o,dg,ph(o,1))!==void 0)o=xr(o=ct(o,dg,ph(o,1)),1,Js,vr()),a.floatEmbedding=o.slice();else{const l=new Uint8Array(0);a.quantizedEmbedding=ct(o,W4,ph(o,2))?.ma()?.h()??l}return a})),timestampMs:Nf(wo(r,2))??0}})(i),Ie(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Hn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=xg(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=xg(vg(t.quantizedEmbedding),vg(e.quantizedEmbedding))}return t},Hn.prototype.embedForVideo=Hn.prototype.ya,Hn.prototype.embed=Hn.prototype.xa,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=function(t,e){return rt(Hn,t,{baseOptions:{modelAssetPath:e}})},Hn.createFromModelBuffer=function(t,e){return rt(Hn,t,{baseOptions:{modelAssetBuffer:e}})},Hn.createFromOptions=function(t,e){return rt(Hn,t,e)};var jf=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function Og(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Bg(t){try{const e=new jf(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{hu(t)}}jf.prototype.close=jf.prototype.close;var Ln=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Dp,this.v=new fx,Ge(this.h,0,3,this.v),Ge(t=this.h,0,1,e=new Ut)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Ct(this.h,2,zo(t.displayNamesLocale)):"displayNamesLocale"in t&&Ct(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){(function(t){const e=_s(t.ca(),An,1).filter((n=>(ci(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(ct(e[0],Kn,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.s[Number(i)]=ci(n,1)??""}))})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Og(this),hi(this,t,i),Bg(this)}Ia(t,e,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Og(this),ji(this,t,s,e),Bg(this)}Ba(){return this.s}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect");const e=new Kn;yi(e,px,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),n.o(e),Qn(t,n),uu(this,t),this.outputConfidenceMasks&&(ht(t,"confidence_masks"),ot(n,"CONFIDENCE_MASKS:confidence_masks"),Ro(this,"confidence_masks"),this.g.ba("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Do(this,r,!0,!this.j))),Ie(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ie(this,i)}))),this.outputCategoryMask&&(ht(t,"category_mask"),ot(n,"CATEGORY_MASK:category_mask"),Ro(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=Do(this,i,!1,!this.j),Ie(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ie(this,i)}))),ht(t,"quality_scores"),ot(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Ie(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ln.prototype.getLabels=Ln.prototype.Ba,Ln.prototype.segmentForVideo=Ln.prototype.Ia,Ln.prototype.segment=Ln.prototype.segment,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(t,e){return rt(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return rt(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return rt(Ln,t,e)};var $f=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};$f.prototype.close=$f.prototype.close;var hC=class extends Oe{constructor(t){super(t)}},Zr=[0,Gt,-2],Sc=[0,is,-3,Dt,is,-1],kg=[0,Sc],zg=[0,Sc,Gt,-1],Sh=class extends Oe{constructor(t){super(t)}},Vg=[0,is,-1,Dt],fC=class extends Oe{constructor(t){super(t)}},Gg=class extends Oe{constructor(t){super(t)}},Kf=[1,2,3,4,5,6,7,8,9,10,14,15],Lx=class extends Oe{constructor(t){super(t)}};Lx.prototype.g=ou([0,Zt,[0,Kf,pt,Sc,pt,[0,Sc,Zr],pt,kg,pt,[0,kg,Zr],pt,Vg,pt,[0,is,-3,Dt,$n],pt,[0,is,-3,Dt],pt,[0,mt,is,-2,Dt,Gt,Dt,-1,2,is,Zr],pt,zg,pt,[0,zg,Zr],is,Zr,mt,pt,[0,is,-3,Dt,Zr,-1],pt,[0,Zt,Vg]],mt,[0,mt,Gt,-1,Dt]]);var Li=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Dp,this.s=new fx,Ge(this.h,0,3,this.s),Ge(t=this.h,0,1,e=new Ut)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Lx;const r=new Gg;var o=new hC;if(qi(o,1,255),Ge(r,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new Sh;ja(a,3,!0),Be(a,1,e.keypoint.x),Be(a,2,e.keypoint.y),Ta(r,5,Kf,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new fC,e.scribble))ja(e=new Sh,3,!0),Be(e,1,a.x),Be(e,2,a.y),gc(o,1,Sh,e);Ta(r,15,Kf,o)}gc(i,1,Gg,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),hi(this,t,s);e:{try{const c=new $f(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{hu(this)}l=void 0}return l}m(){var t=new On;Pt(t,"image_in"),Pt(t,"roi_in"),Pt(t,"norm_rect_in");const e=new Kn;yi(e,px,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"ROI:roi_in"),Rt(n,"NORM_RECT:norm_rect_in"),n.o(e),Qn(t,n),uu(this,t),this.outputConfidenceMasks&&(ht(t,"confidence_masks"),ot(n,"CONFIDENCE_MASKS:confidence_masks"),Ro(this,"confidence_masks"),this.g.ba("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Do(this,r,!0,!this.j))),Ie(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Ie(this,i)}))),this.outputCategoryMask&&(ht(t,"category_mask"),ot(n,"CATEGORY_MASK:category_mask"),Ro(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=Do(this,i,!1,!this.j),Ie(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Ie(this,i)}))),ht(t,"quality_scores"),ot(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Ie(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Li.prototype.segment=Li.prototype.segment,Li.prototype.setOptions=Li.prototype.o,Li.createFromModelPath=function(t,e){return rt(Li,t,{baseOptions:{modelAssetPath:e}})},Li.createFromModelBuffer=function(t,e){return rt(Li,t,{baseOptions:{modelAssetBuffer:e}})},Li.createFromOptions=function(t,e){return rt(Li,t,e)};var si=class extends Fn{constructor(t,e){super(new ui(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ge(t=this.h=new mx,0,1,e=new Ut)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Ct(this.h,2,zo(t.displayNamesLocale)):"displayNamesLocale"in t&&Ct(this.h,2),t.maxResults!==void 0?qi(this.h,3,t.maxResults):"maxResults"in t&&Ct(this.h,3),t.scoreThreshold!==void 0?Be(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&Ct(this.h,4),t.categoryAllowlist!==void 0?_c(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&Ct(this.h,5),t.categoryDenylist!==void 0?_c(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&Ct(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},hi(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},ji(this,t,n,e),this.j}m(){var t=new On;Pt(t,"input_frame_gpu"),Pt(t,"norm_rect"),ht(t,"detections");const e=new Kn;yi(e,rC,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Rt(n,"IMAGE:input_frame_gpu"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"DETECTIONS:detections"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Xv(r),this.j.detections.push(_x(i));Ie(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Ie(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};si.prototype.detectForVideo=si.prototype.F,si.prototype.detect=si.prototype.D,si.prototype.setOptions=si.prototype.o,si.createFromModelPath=async function(t,e){return rt(si,t,{baseOptions:{modelAssetPath:e}})},si.createFromModelBuffer=function(t,e){return rt(si,t,{baseOptions:{modelAssetBuffer:e}})},si.createFromOptions=function(t,e){return rt(si,t,e)};var Jf=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Hg(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Wg(t){try{const e=new Jf(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{hu(t)}}Jf.prototype.close=Jf.prototype.close;var Wn=class extends Fn{constructor(t,e){super(new ui(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ge(t=this.h=new gx,0,1,e=new Ut),this.v=new lx,Ge(this.h,0,3,this.v),this.j=new ax,Ge(this.h,0,2,this.j),qi(this.j,4,1),Be(this.j,2,.5),Be(this.v,2,.5),Be(this.h,4,.5)}get baseOptions(){return ct(this.h,Ut,1)}set baseOptions(t){Ge(this.h,0,1,t)}o(t){return"numPoses"in t&&qi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Be(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Be(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Be(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,Hg(this),hi(this,t,i),Wg(this)}F(t,e,n,i){const s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Hg(this),ji(this,t,s,e),Wg(this)}m(){var t=new On;Pt(t,"image_in"),Pt(t,"norm_rect"),ht(t,"normalized_landmarks"),ht(t,"world_landmarks"),ht(t,"segmentation_masks");const e=new Kn;yi(e,oC,this.h);const n=new An;Zn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Rt(n,"IMAGE:image_in"),Rt(n,"NORM_RECT:norm_rect"),ot(n,"NORM_LANDMARKS:normalized_landmarks"),ot(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Qn(t,n),uu(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=rl(r),this.landmarks.push(cu(i));Ie(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Ie(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=ho(r),this.worldLandmarks.push(wa(i));Ie(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Ie(this,i)})),this.outputSegmentationMasks&&(ot(n,"SEGMENTATION_MASK:segmentation_masks"),Ro(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Do(this,r,!0,!this.s))),Ie(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Ie(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wn.prototype.detectForVideo=Wn.prototype.F,Wn.prototype.detect=Wn.prototype.D,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(t,e){return rt(Wn,t,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(t,e){return rt(Wn,t,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(t,e){return rt(Wn,t,e)},Wn.POSE_CONNECTIONS=Px;const dC=Ja({__name:"WebcamHandTracker",props:{debugMode:{type:Boolean,default:!0},delegate:{default:"GPU"},numHands:{default:1}},emits:["tracking-data","error","ready"],setup(t,{emit:e}){const n=t,i=e,s=Ii(null),r=Ii(null);let o=null,a=-1,l=null;async function c(){const f=s.value;if(!f)return;r.value&&(r.value.innerText="Loading MediaPipe models...");const d="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",_="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",x="/christmas-tree/",m=`${x}mediapipe/wasm`,p=`${x}mediapipe/models/hand_landmarker.task`,T={video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:30}}};try{let S=!1;try{r.value&&(r.value.innerText="Attempting to load models from CDN. Wait a minute...");const v=await Ls.forVisionTasks(d);o=await yn.createFromOptions(v,{baseOptions:{modelAssetPath:_,delegate:n.delegate},runningMode:"VIDEO",numHands:n.numHands}),S=!0,console.log("MediaPipe models loaded successfully from CDN.")}catch(v){console.warn("CDN model loading failed, falling back to local files.",v),r.value&&(r.value.innerText="CDN failed. Attempting local models. Wait a minute...");const w=await Ls.forVisionTasks(m);o=await yn.createFromOptions(w,{baseOptions:{modelAssetPath:p,delegate:n.delegate},runningMode:"VIDEO",numHands:n.numHands}),S=!0,console.log("MediaPipe models loaded successfully from local files.")}if(S){const v=await navigator.mediaDevices.getUserMedia(T);f.srcObject=v,f.addEventListener("loadeddata",()=>{f.play(),i("ready"),u()}),r.value&&(r.value.innerText="Webcam active. Show hand.")}}catch(S){const v=S;console.error("MediaPipe/Webcam Init Error:",v);const w=`Camera Error: ${v.message}`;r.value&&(r.value.innerText=w),i("error",w)}}async function u(){const f=s.value;if(!f||!o){l=requestAnimationFrame(u);return}if(f.currentTime!==a){a=f.currentTime;const d=o.detectForVideo(f,performance.now());h(d)}l=requestAnimationFrame(u)}function h(f){if(f.landmarks&&f.landmarks.length>0){const d=f.landmarks[0],_=d[4],x=d[8],m=d[0],p=d[9],T={x:(p.x-.5)*2,y:(p.y-.5)*2},S=Math.hypot(p.x-m.x,p.y-m.y);if(S<.02){i("tracking-data",{detected:!1,position:T,ratios:{extensionRatio:0,pinchRatio:0,handSize:0}});return}const v=[d[8],d[12],d[16],d[20]];let w=0;v.forEach(V=>w+=Math.hypot(V.x-m.x,V.y-m.y)),w/=4;const R=Math.hypot(_.x-x.x,_.y-x.y),P={handSize:S,extensionRatio:w/S,pinchRatio:R/S};i("tracking-data",{detected:!0,position:T,ratios:P}),n.debugMode&&r.value&&(r.value.innerText=`Detected | Ext: ${P.extensionRatio.toFixed(2)} | Pinch: ${P.pinchRatio.toFixed(2)} | Pos: (${T.x.toFixed(2)}, ${T.y.toFixed(2)})`)}else i("tracking-data",{detected:!1,position:{x:0,y:0},ratios:{extensionRatio:0,pinchRatio:0,handSize:0}}),n.debugMode&&r.value&&(r.value.innerText="No hand detected")}return Cc(()=>{typeof navigator.mediaDevices?.getUserMedia=="function"?c():r.value&&(r.value.innerText="Error: Webcam/WebRTC API not supported by this browser.")}),Rc(()=>{l!==null&&cancelAnimationFrame(l),o&&(o.close(),o=null),s.value?.srcObject&&s.value.srcObject.getTracks().forEach(f=>f.stop())}),(f,d)=>(Xs(),Za("div",null,[Jt("video",{ref_key:"webcamVideo",ref:s,class:"webcam-feed",autoplay:"",playsinline:""},null,512),U2(Jt("div",{ref_key:"debugInfo",ref:r,class:"debug-overlay"}," Awaiting MediaPipe initialization... ",512),[[q3,t.debugMode]])]))}}),pC=Ic(dC,[["__scopeId","data-v-a5d129f5"]]),mC={id:"ui-layer"},gC={class:"btn-group"},_C={class:"upload-btn"},vC={class:"upload-btn"},xC=Ja({__name:"HomePage",setup(t){const e=Ii(null),n=Ii(null),i=Ii(null),s=Ii(null),r=Ii({detected:!1,position:{x:0,y:0},ratios:{extensionRatio:0,pinchRatio:0,handSize:0}}),o=Ii(!0),a=d=>{d.key.toLowerCase()==="h"&&(n.value&&n.value.classList.toggle("ui-hidden"),i.value&&i.value.classList.toggle("ui-hidden"),s.value&&s.value.classList.toggle("ui-hidden"))},l=d=>{const _=d.target;if(!_||!_.files)return;const x=_.files;x.length!==0&&Array.from(x).forEach(m=>{if(!m.type.startsWith("image/"))return;const p=new FileReader;p.onload=T=>{const S=T.target?.result;typeof S=="string"&&new C1().load(S,v=>{v.colorSpace=hn,e.value=v,_.value=""})},p.readAsDataURL(m)})};function c(d){r.value=d}function u(d){console.error("Webcam Tracker Component Error:",d)}function h(){console.log("Webcam Tracker Component Ready !")}const f=()=>{setTimeout(()=>o.value=!1,800)};return Cc(()=>{window.addEventListener("keydown",a)}),pd(()=>{window.removeEventListener("keydown",a)}),(d,_)=>(Xs(),Za(Ui,null,[o.value?(Xs(),_d(mS,{key:0})):C3("",!0),li(Bw,{"new-texture":e.value,"hand-tracking-data":r.value,onTreeRenderCompleted:f},null,8,["new-texture","hand-tracking-data"]),Jt("div",mC,[_[5]||(_[5]=Jt("h1",null,"Merry Christmas",-1)),Jt("div",{ref_key:"controlsWrapperRef",ref:n,class:"controls-wrapper"},[Jt("div",gC,[Jt("label",_C,[_[0]||(_[0]=Lh(" Select Folder ",-1)),Jt("input",{type:"file",webkitdirectory:"",directory:"",multiple:"",onChange:l},null,32)]),Jt("label",vC,[_[1]||(_[1]=Lh(" Select Files ",-1)),Jt("input",{type:"file",multiple:"",accept:"image/*",onChange:l},null,32)])]),_[2]||(_[2]=Jt("div",{class:"hint-text"},' Use "Select Folder" to load all photos at once ',-1)),_[3]||(_[3]=Jt("div",{class:"hint-text",style:{opacity:"0.7","font-size":"8px"}},' Or put photos in "./images/" (1.jpg - 30.jpg) ',-1)),_[4]||(_[4]=Jt("div",{class:"hint-text"},'Press "H" to hide all the UIs',-1))],512)]),Jt("div",{ref_key:"MusicPlayerWrapperRef",ref:s,class:"music-player-wrapper"},[li(zw)],512),Jt("div",{ref_key:"webcamWrapperRef",ref:i,class:"webcam-wrapper"},[li(pC,{"debug-mode":!0,delegate:"GPU",onTrackingData:c,onError:u,onReady:h})],512)],64))}}),SC=Ic(xC,[["__scopeId","data-v-39e8727c"]]),MC=Ja({__name:"App",setup(t){return(e,n)=>(Xs(),_d(SC))}});cS(MC).mount("#app");
