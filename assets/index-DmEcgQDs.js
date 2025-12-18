(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Qf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Et={},io=[],Vi=()=>{},Hg=()=>!1,yc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ed=t=>t.startsWith("onUpdate:"),mn=Object.assign,td=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kx=Object.prototype.hasOwnProperty,pt=(t,e)=>kx.call(t,e),Qe=Array.isArray,fa=t=>Sc(t)==="[object Map]",zx=t=>Sc(t)==="[object Set]",Ke=t=>typeof t=="function",on=t=>typeof t=="string",Io=t=>typeof t=="symbol",Wt=t=>t!==null&&typeof t=="object",Wg=t=>(Wt(t)||Ke(t))&&Ke(t.then)&&Ke(t.catch),Vx=Object.prototype.toString,Sc=t=>Vx.call(t),Gx=t=>Sc(t).slice(8,-1),Hx=t=>Sc(t)==="[object Object]",bc=t=>on(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,da=Qf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Wx=/-\w/g,Ws=Ec(t=>t.replace(Wx,e=>e.slice(1).toUpperCase())),Xx=/\B([A-Z])/g,Rr=Ec(t=>t.replace(Xx,"-$1").toLowerCase()),Xg=Ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mu=Ec(t=>t?`on${Xg(t)}`:""),Bs=(t,e)=>!Object.is(t,e),yu=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},qx=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tm;const Tc=()=>tm||(tm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nd(t){if(Qe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=on(i)?$x(i):nd(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(on(t)||Wt(t))return t}const Yx=/;(?![^(]*\))/g,jx=/:([^]+)/,Kx=/\/\*[^]*?\*\//g;function $x(t){const e={};return t.replace(Kx,"").split(Yx).forEach(n=>{if(n){const i=n.split(jx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function id(t){let e="";if(on(t))e=t;else if(Qe(t))for(let n=0;n<t.length;n++){const i=id(t[n]);i&&(e+=i+" ")}else if(Wt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zx=Qf(Jx);function Yg(t){return!!t||t===""}let Dn;class Qx{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dn,!e&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dn;try{return Dn=this,e()}finally{Dn=n}}}on(){++this._on===1&&(this.prevScope=Dn,Dn=this)}off(){this._on>0&&--this._on===0&&(Dn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function e2(){return Dn}let Ct;const Su=new WeakSet;class jg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dn&&Dn.active&&Dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Su.has(this)&&(Su.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$g(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nm(this),Jg(this);const e=Ct,n=yi;Ct=this,yi=!0;try{return this.fn()}finally{Zg(this),Ct=e,yi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)od(e);this.deps=this.depsTail=void 0,nm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Su.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Eh(this)&&this.run()}get dirty(){return Eh(this)}}let Kg=0,pa,ma;function $g(t,e=!1){if(t.flags|=8,e){t.next=ma,ma=t;return}t.next=pa,pa=t}function sd(){Kg++}function rd(){if(--Kg>0)return;if(ma){let e=ma;for(ma=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pa;){let e=pa;for(pa=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Jg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zg(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),od(i),t2(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Eh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ca)||(t.globalVersion=Ca,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Eh(t))))return;t.flags|=2;const e=t.dep,n=Ct,i=yi;Ct=t,yi=!0;try{Jg(t);const s=t.fn(t._value);(e.version===0||Bs(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ct=n,yi=i,Zg(t),t.flags&=-3}}function od(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)od(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function t2(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yi=!0;const e_=[];function ms(){e_.push(yi),yi=!1}function gs(){const t=e_.pop();yi=t===void 0?!0:t}function nm(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ct;Ct=void 0;try{e()}finally{Ct=n}}}let Ca=0;class n2{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ad{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!yi||Ct===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ct)n=this.activeLink=new n2(Ct,this),Ct.deps?(n.prevDep=Ct.depsTail,Ct.depsTail.nextDep=n,Ct.depsTail=n):Ct.deps=Ct.depsTail=n,t_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ct.depsTail,n.nextDep=void 0,Ct.depsTail.nextDep=n,Ct.depsTail=n,Ct.deps===n&&(Ct.deps=i)}return n}trigger(e){this.version++,Ca++,this.notify(e)}notify(e){sd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{rd()}}}function t_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)t_(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tc=new WeakMap,yr=Symbol(""),Th=Symbol(""),Ra=Symbol("");function fn(t,e,n){if(yi&&Ct){let i=tc.get(t);i||tc.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new ad),s.map=i,s.key=n),s.track()}}function rs(t,e,n,i,s,r){const o=tc.get(t);if(!o){Ca++;return}const a=l=>{l&&l.trigger()};if(sd(),e==="clear")o.forEach(a);else{const l=Qe(t),c=l&&bc(n);if(l&&n==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Ra||!Io(f)&&f>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ra)),e){case"add":l?c&&a(o.get("length")):(a(o.get(yr)),fa(t)&&a(o.get(Th)));break;case"delete":l||(a(o.get(yr)),fa(t)&&a(o.get(Th)));break;case"set":fa(t)&&a(o.get(yr));break}}rd()}function i2(t,e){const n=tc.get(t);return n&&n.get(e)}function Ur(t){const e=ut(t);return e===t?e:(fn(e,"iterate",Ra),li(t)?e:e.map(_s))}function ld(t){return fn(t=ut(t),"iterate",Ra),t}function Ps(t,e){return Xs(t)?so(t)?Pa(_s(e)):Pa(e):_s(e)}const s2={__proto__:null,[Symbol.iterator](){return bu(this,Symbol.iterator,t=>Ps(this,t))},concat(...t){return Ur(this).concat(...t.map(e=>Qe(e)?Ur(e):e))},entries(){return bu(this,"entries",t=>(t[1]=Ps(this,t[1]),t))},every(t,e){return Ji(this,"every",t,e,void 0,arguments)},filter(t,e){return Ji(this,"filter",t,e,n=>n.map(i=>Ps(this,i)),arguments)},find(t,e){return Ji(this,"find",t,e,n=>Ps(this,n),arguments)},findIndex(t,e){return Ji(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ji(this,"findLast",t,e,n=>Ps(this,n),arguments)},findLastIndex(t,e){return Ji(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ji(this,"forEach",t,e,void 0,arguments)},includes(...t){return Eu(this,"includes",t)},indexOf(...t){return Eu(this,"indexOf",t)},join(t){return Ur(this).join(t)},lastIndexOf(...t){return Eu(this,"lastIndexOf",t)},map(t,e){return Ji(this,"map",t,e,void 0,arguments)},pop(){return Yo(this,"pop")},push(...t){return Yo(this,"push",t)},reduce(t,...e){return im(this,"reduce",t,e)},reduceRight(t,...e){return im(this,"reduceRight",t,e)},shift(){return Yo(this,"shift")},some(t,e){return Ji(this,"some",t,e,void 0,arguments)},splice(...t){return Yo(this,"splice",t)},toReversed(){return Ur(this).toReversed()},toSorted(t){return Ur(this).toSorted(t)},toSpliced(...t){return Ur(this).toSpliced(...t)},unshift(...t){return Yo(this,"unshift",t)},values(){return bu(this,"values",t=>Ps(this,t))}};function bu(t,e,n){const i=ld(t),s=i[e]();return i!==t&&!li(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const r2=Array.prototype;function Ji(t,e,n,i,s,r){const o=ld(t),a=o!==t&&!li(t),l=o[e];if(l!==r2[e]){const h=l.apply(t,r);return a?_s(h):h}let c=n;o!==t&&(a?c=function(h,f){return n.call(this,Ps(t,h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function im(t,e,n,i){const s=ld(t);let r=n;return s!==t&&(li(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ps(t,a),l,t)}),s[e](r,...i)}function Eu(t,e,n){const i=ut(t);fn(i,"iterate",Ra);const s=i[e](...n);return(s===-1||s===!1)&&wc(n[0])?(n[0]=ut(n[0]),i[e](...n)):s}function Yo(t,e,n=[]){ms(),sd();const i=ut(t)[e].apply(t,n);return rd(),gs(),i}const o2=Qf("__proto__,__v_isRef,__isVue"),n_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Io));function a2(t){Io(t)||(t=String(t));const e=ut(this);return fn(e,"has",t),e.hasOwnProperty(t)}class i_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?_2:a_:r?o_:r_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Qe(e);if(!s){let l;if(o&&(l=s2[n]))return l;if(n==="hasOwnProperty")return a2}const a=Reflect.get(e,n,Qt(e)?e:i);if((Io(n)?n_.has(n):o2(n))||(s||fn(e,"get",n),r))return a;if(Qt(a)){const l=o&&bc(n)?a:a.value;return s&&Wt(l)?Ah(l):l}return Wt(a)?s?Ah(a):ud(a):a}}class s_ extends i_{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=Qe(e)&&bc(n);if(!this._isShallow){const c=Xs(r);if(!li(i)&&!Xs(i)&&(r=ut(r),i=ut(i)),!o&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:pt(e,n),l=Reflect.set(e,n,i,Qt(e)?e:s);return e===ut(s)&&(a?Bs(i,r)&&rs(e,"set",n,i):rs(e,"add",n,i)),l}deleteProperty(e,n){const i=pt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&rs(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Io(n)||!n_.has(n))&&fn(e,"has",n),i}ownKeys(e){return fn(e,"iterate",Qe(e)?"length":yr),Reflect.ownKeys(e)}}class l2 extends i_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c2=new s_,u2=new l2,h2=new s_(!0);const wh=t=>t,ll=t=>Reflect.getPrototypeOf(t);function f2(t,e,n){return function(...i){const s=this.__v_raw,r=ut(s),o=fa(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?wh:e?Pa:_s;return!e&&fn(r,"iterate",l?Th:yr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function cl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function d2(t,e){const n={get(s){const r=this.__v_raw,o=ut(r),a=ut(s);t||(Bs(s,a)&&fn(o,"get",s),fn(o,"get",a));const{has:l}=ll(o),c=e?wh:t?Pa:_s;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&fn(ut(s),"iterate",yr),s.size},has(s){const r=this.__v_raw,o=ut(r),a=ut(s);return t||(Bs(s,a)&&fn(o,"has",s),fn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ut(a),c=e?wh:t?Pa:_s;return!t&&fn(l,"iterate",yr),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return mn(n,t?{add:cl("add"),set:cl("set"),delete:cl("delete"),clear:cl("clear")}:{add(s){!e&&!li(s)&&!Xs(s)&&(s=ut(s));const r=ut(this);return ll(r).has.call(r,s)||(r.add(s),rs(r,"add",s,s)),this},set(s,r){!e&&!li(r)&&!Xs(r)&&(r=ut(r));const o=ut(this),{has:a,get:l}=ll(o);let c=a.call(o,s);c||(s=ut(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Bs(r,u)&&rs(o,"set",s,r):rs(o,"add",s,r),this},delete(s){const r=ut(this),{has:o,get:a}=ll(r);let l=o.call(r,s);l||(s=ut(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&rs(r,"delete",s,void 0),c},clear(){const s=ut(this),r=s.size!==0,o=s.clear();return r&&rs(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=f2(s,t,e)}),n}function cd(t,e){const n=d2(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(pt(n,s)&&s in i?n:i,s,r)}const p2={get:cd(!1,!1)},m2={get:cd(!1,!0)},g2={get:cd(!0,!1)};const r_=new WeakMap,o_=new WeakMap,a_=new WeakMap,_2=new WeakMap;function v2(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x2(t){return t.__v_skip||!Object.isExtensible(t)?0:v2(Gx(t))}function ud(t){return Xs(t)?t:hd(t,!1,c2,p2,r_)}function M2(t){return hd(t,!1,h2,m2,o_)}function Ah(t){return hd(t,!0,u2,g2,a_)}function hd(t,e,n,i,s){if(!Wt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=x2(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function so(t){return Xs(t)?so(t.__v_raw):!!(t&&t.__v_isReactive)}function Xs(t){return!!(t&&t.__v_isReadonly)}function li(t){return!!(t&&t.__v_isShallow)}function wc(t){return t?!!t.__v_raw:!1}function ut(t){const e=t&&t.__v_raw;return e?ut(e):t}function l_(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&qg(t,"__v_skip",!0),t}const _s=t=>Wt(t)?ud(t):t,Pa=t=>Wt(t)?Ah(t):t;function Qt(t){return t?t.__v_isRef===!0:!1}function Ni(t){return y2(t,!1)}function y2(t,e){return Qt(t)?t:new S2(t,e)}class S2{constructor(e,n){this.dep=new ad,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ut(e),this._value=n?e:_s(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||li(e)||Xs(e);e=i?e:ut(e),Bs(e,n)&&(this._rawValue=e,this._value=i?e:_s(e),this.dep.trigger())}}function c_(t){return Qt(t)?t.value:t}const b2={get:(t,e,n)=>e==="__v_raw"?t:c_(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Qt(s)&&!Qt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function u_(t){return so(t)?t:new Proxy(t,b2)}class E2{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ut(e);let s=!0,r=e;if(!Qe(e)||!bc(String(n)))do s=!wc(r)||li(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=c_(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Qt(this._raw[this._key])){const n=this._object[this._key];if(Qt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return i2(this._raw,this._key)}}class T2{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function w2(t,e,n){return Qt(t)?t:Ke(t)?new T2(t):Wt(t)&&arguments.length>1?A2(t,e,n):Ni(t)}function A2(t,e,n){return new E2(t,e,n)}class C2{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ad(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return $g(this,!0),!0}get value(){const e=this.dep.track();return Qg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function R2(t,e,n=!1){let i,s;return Ke(t)?i=t:(i=t.get,s=t.set),new C2(i,s,n)}const ul={},nc=new WeakMap;let fr;function P2(t,e=!1,n=fr){if(n){let i=nc.get(n);i||nc.set(n,i=[]),i.push(t)}}function L2(t,e,n=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:li(x)||s===!1||s===0?os(x,1):os(x);let u,h,f,d,_=!1,v=!1;if(Qt(t)?(h=()=>t.value,_=li(t)):so(t)?(h=()=>c(t),_=!0):Qe(t)?(v=!0,_=t.some(x=>so(x)||li(x)),h=()=>t.map(x=>{if(Qt(x))return x.value;if(so(x))return c(x);if(Ke(x))return l?l(x,2):x()})):Ke(t)?e?h=l?()=>l(t,2):t:h=()=>{if(f){ms();try{f()}finally{gs()}}const x=fr;fr=u;try{return l?l(t,3,[d]):t(d)}finally{fr=x}}:h=Vi,e&&s){const x=h,A=s===!0?1/0:s;h=()=>os(x(),A)}const m=e2(),p=()=>{u.stop(),m&&m.active&&td(m.effects,u)};if(r&&e){const x=e;e=(...A)=>{x(...A),p()}}let E=v?new Array(t.length).fill(ul):ul;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const A=u.run();if(s||_||(v?A.some((C,P)=>Bs(C,E[P])):Bs(A,E))){f&&f();const C=fr;fr=u;try{const P=[A,E===ul?void 0:v&&E[0]===ul?[]:E,d];E=A,l?l(e,3,P):e(...P)}finally{fr=C}}}else u.run()};return a&&a(S),u=new jg(h),u.scheduler=o?()=>o(S,!1):S,d=x=>P2(x,!1,u),f=u.onStop=()=>{const x=nc.get(u);if(x){if(l)l(x,4);else for(const A of x)A();nc.delete(u)}},e?i?S(!0):E=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function os(t,e=1/0,n){if(e<=0||!Wt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Qt(t))os(t.value,e,n);else if(Qe(t))for(let i=0;i<t.length;i++)os(t[i],e,n);else if(zx(t)||fa(t))t.forEach(i=>{os(i,e,n)});else if(Hx(t)){for(const i in t)os(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&os(t[i],e,n)}return t}function $a(t,e,n,i){try{return i?t(...i):t()}catch(s){Ac(s,e,n)}}function Wi(t,e,n,i){if(Ke(t)){const s=$a(t,e,n,i);return s&&Wg(s)&&s.catch(r=>{Ac(r,e,n)}),s}if(Qe(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Wi(t[r],e,n,i));return s}}function Ac(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){ms(),$a(r,null,10,[t,l,c]),gs();return}}D2(t,n,s,i,o)}function D2(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const Sn=[];let Ui=-1;const ro=[];let Ls=null,eo=0;const h_=Promise.resolve();let ic=null;function f_(t){const e=ic||h_;return t?e.then(this?t.bind(this):t):e}function I2(t){let e=Ui+1,n=Sn.length;for(;e<n;){const i=e+n>>>1,s=Sn[i],r=La(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function fd(t){if(!(t.flags&1)){const e=La(t),n=Sn[Sn.length-1];!n||!(t.flags&2)&&e>=La(n)?Sn.push(t):Sn.splice(I2(e),0,t),t.flags|=1,d_()}}function d_(){ic||(ic=h_.then(m_))}function U2(t){Qe(t)?ro.push(...t):Ls&&t.id===-1?Ls.splice(eo+1,0,t):t.flags&1||(ro.push(t),t.flags|=1),d_()}function sm(t,e,n=Ui+1){for(;n<Sn.length;n++){const i=Sn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Sn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function p_(t){if(ro.length){const e=[...new Set(ro)].sort((n,i)=>La(n)-La(i));if(ro.length=0,Ls){Ls.push(...e);return}for(Ls=e,eo=0;eo<Ls.length;eo++){const n=Ls[eo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ls=null,eo=0}}const La=t=>t.id==null?t.flags&2?-1:1/0:t.id;function m_(t){try{for(Ui=0;Ui<Sn.length;Ui++){const e=Sn[Ui];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$a(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ui<Sn.length;Ui++){const e=Sn[Ui];e&&(e.flags&=-2)}Ui=-1,Sn.length=0,p_(),ic=null,(Sn.length||ro.length)&&m_()}}let oi=null,g_=null;function sc(t){const e=oi;return oi=t,g_=t&&t.type.__scopeId||null,e}function N2(t,e=oi,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&pm(-1);const r=sc(e);let o;try{o=t(...s)}finally{sc(r),i._d&&pm(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function F2(t,e){if(oi===null)return t;const n=Ic(oi),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&os(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ir(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ms(),Wi(l,n,8,[t.el,a,t,e]),gs())}}const O2=Symbol("_vte"),B2=t=>t.__isTeleport,k2=Symbol("_leaveCb");function dd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,dd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ja(t,e){return Ke(t)?mn({name:t.name},e,{setup:t}):t}function __(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const rc=new WeakMap;function ga(t,e,n,i,s=!1){if(Qe(t)){t.forEach((_,v)=>ga(_,e&&(Qe(e)?e[v]:e),n,i,s));return}if(_a(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ga(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Ic(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,h=a.setupState,f=ut(h),d=h===Et?Hg:_=>pt(f,_);if(c!=null&&c!==l){if(rm(e),on(c))u[c]=null,d(c)&&(h[c]=null);else if(Qt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Ke(l))$a(l,a,12,[o,u]);else{const _=on(l),v=Qt(l);if(_||v){const m=()=>{if(t.f){const p=_?d(l)?h[l]:u[l]:l.value;if(s)Qe(p)&&td(p,r);else if(Qe(p))p.includes(r)||p.push(r);else if(_)u[l]=[r],d(l)&&(h[l]=u[l]);else{const E=[r];l.value=E,t.k&&(u[t.k]=E)}}else _?(u[l]=o,d(l)&&(h[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),rc.delete(t)};p.id=-1,rc.set(t,p),Xn(p,n)}else rm(t),m()}}}function rm(t){const e=rc.get(t);e&&(e.flags|=8,rc.delete(t))}Tc().requestIdleCallback;Tc().cancelIdleCallback;const _a=t=>!!t.type.__asyncLoader,v_=t=>t.type.__isKeepAlive;function z2(t,e){x_(t,"a",e)}function V2(t,e){x_(t,"da",e)}function x_(t,e,n=bn){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Cc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)v_(s.parent.vnode)&&G2(i,e,n,s),s=s.parent}}function G2(t,e,n,i){const s=Cc(e,t,i,!0);Pc(()=>{td(i[e],s)},n)}function Cc(t,e,n=bn,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ms();const a=Qa(n),l=Wi(e,n,t,o);return a(),gs(),l});return i?s.unshift(r):s.push(r),r}}const ys=t=>(e,n=bn)=>{(!Ia||t==="sp")&&Cc(t,(...i)=>e(...i),n)},H2=ys("bm"),Rc=ys("m"),W2=ys("bu"),X2=ys("u"),pd=ys("bum"),Pc=ys("um"),q2=ys("sp"),Y2=ys("rtg"),j2=ys("rtc");function K2(t,e=bn){Cc("ec",t,e)}const $2=Symbol.for("v-ndc"),Ch=t=>t?z_(t)?Ic(t):Ch(t.parent):null,va=mn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ch(t.parent),$root:t=>Ch(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>y_(t),$forceUpdate:t=>t.f||(t.f=()=>{fd(t.update)}),$nextTick:t=>t.n||(t.n=f_.bind(t.proxy)),$watch:t=>l3.bind(t)}),Tu=(t,e)=>t!==Et&&!t.__isScriptSetup&&pt(t,e),J2={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Tu(i,e))return o[e]=1,i[e];if(s!==Et&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(n!==Et&&pt(n,e))return o[e]=4,n[e];Rh&&(o[e]=0)}}const c=va[e];let u,h;if(c)return e==="$attrs"&&fn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Et&&pt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,pt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Tu(s,e)?(s[e]=n,!0):i!==Et&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Et&&a[0]!=="$"&&pt(t,a)||Tu(e,a)||pt(r,a)||pt(i,a)||pt(va,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function om(t){return Qe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rh=!0;function Z2(t){const e=y_(t),n=t.proxy,i=t.ctx;Rh=!1,e.beforeCreate&&am(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:S,unmounted:x,render:A,renderTracked:C,renderTriggered:P,errorCaptured:F,serverPrefetch:M,expose:w,inheritAttrs:U,components:W,directives:Y,filters:se}=e;if(c&&Q2(c,i,null),o)for(const V in o){const ie=o[V];Ke(ie)&&(i[V]=ie.bind(n))}if(s){const V=s.call(n,n);Wt(V)&&(t.data=ud(V))}if(Rh=!0,r)for(const V in r){const ie=r[V],me=Ke(ie)?ie.bind(n,n):Ke(ie.get)?ie.get.bind(n,n):Vi,pe=!Ke(ie)&&Ke(ie.set)?ie.set.bind(n):Vi,de=V3({get:me,set:pe});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>de.value,set:ke=>de.value=ke})}if(a)for(const V in a)M_(a[V],i,n,V);if(l){const V=Ke(l)?l.call(n):l;Reflect.ownKeys(V).forEach(ie=>{r3(ie,V[ie])})}u&&am(u,t,"c");function K(V,ie){Qe(ie)?ie.forEach(me=>V(me.bind(n))):ie&&V(ie.bind(n))}if(K(H2,h),K(Rc,f),K(W2,d),K(X2,_),K(z2,v),K(V2,m),K(K2,F),K(j2,C),K(Y2,P),K(pd,E),K(Pc,x),K(q2,M),Qe(w))if(w.length){const V=t.exposed||(t.exposed={});w.forEach(ie=>{Object.defineProperty(V,ie,{get:()=>n[ie],set:me=>n[ie]=me,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===Vi&&(t.render=A),U!=null&&(t.inheritAttrs=U),W&&(t.components=W),Y&&(t.directives=Y),M&&__(t)}function Q2(t,e,n=Vi){Qe(t)&&(t=Ph(t));for(const i in t){const s=t[i];let r;Wt(s)?"default"in s?r=zl(s.from||i,s.default,!0):r=zl(s.from||i):r=zl(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function am(t,e,n){Wi(Qe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function M_(t,e,n,i){let s=i.includes(".")?E_(n,i):()=>n[i];if(on(t)){const r=e[t];Ke(r)&&xa(s,r)}else if(Ke(t))xa(s,t.bind(n));else if(Wt(t))if(Qe(t))t.forEach(r=>M_(r,e,n,i));else{const r=Ke(t.handler)?t.handler.bind(n):e[t.handler];Ke(r)&&xa(s,r,t)}}function y_(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>oc(l,c,o,!0)),oc(l,e,o)),Wt(e)&&r.set(e,l),l}function oc(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&oc(t,r,n,!0),s&&s.forEach(o=>oc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=e3[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const e3={data:lm,props:cm,emits:cm,methods:oa,computed:oa,beforeCreate:vn,created:vn,beforeMount:vn,mounted:vn,beforeUpdate:vn,updated:vn,beforeDestroy:vn,beforeUnmount:vn,destroyed:vn,unmounted:vn,activated:vn,deactivated:vn,errorCaptured:vn,serverPrefetch:vn,components:oa,directives:oa,watch:n3,provide:lm,inject:t3};function lm(t,e){return e?t?function(){return mn(Ke(t)?t.call(this,this):t,Ke(e)?e.call(this,this):e)}:e:t}function t3(t,e){return oa(Ph(t),Ph(e))}function Ph(t){if(Qe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vn(t,e){return t?[...new Set([].concat(t,e))]:e}function oa(t,e){return t?mn(Object.create(null),t,e):e}function cm(t,e){return t?Qe(t)&&Qe(e)?[...new Set([...t,...e])]:mn(Object.create(null),om(t),om(e??{})):e}function n3(t,e){if(!t)return e;if(!e)return t;const n=mn(Object.create(null),t);for(const i in e)n[i]=vn(t[i],e[i]);return n}function S_(){return{app:null,config:{isNativeTag:Hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i3=0;function s3(t,e){return function(i,s=null){Ke(i)||(i=mn({},i)),s!=null&&!Wt(s)&&(s=null);const r=S_(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:i3++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:G3,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ke(u.install)?(o.add(u),u.install(c,...h)):Ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||ci(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ic(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Wi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=oo;oo=c;try{return u()}finally{oo=h}}};return c}}let oo=null;function r3(t,e){if(bn){let n=bn.provides;const i=bn.parent&&bn.parent.provides;i===n&&(n=bn.provides=Object.create(i)),n[t]=e}}function zl(t,e,n=!1){const i=N3();if(i||oo){let s=oo?oo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ke(e)?e.call(i&&i.proxy):e}}const o3=Symbol.for("v-scx"),a3=()=>zl(o3);function xa(t,e,n){return b_(t,e,n)}function b_(t,e,n=Et){const{immediate:i,deep:s,flush:r,once:o}=n,a=mn({},n),l=e&&i||!e&&r!=="post";let c;if(Ia){if(r==="sync"){const d=a3();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Vi,d.resume=Vi,d.pause=Vi,d}}const u=bn;a.call=(d,_,v)=>Wi(d,u,_,v);let h=!1;r==="post"?a.scheduler=d=>{Xn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,_)=>{_?d():fd(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=L2(t,e,a);return Ia&&(c?c.push(f):l&&f()),f}function l3(t,e,n){const i=this.proxy,s=on(t)?t.includes(".")?E_(i,t):()=>i[t]:t.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,n=e);const o=Qa(this),a=b_(s,r.bind(i),n);return o(),a}function E_(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const c3=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ws(e)}Modifiers`]||t[`${Rr(e)}Modifiers`];function u3(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Et;let s=n;const r=e.startsWith("update:"),o=r&&c3(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>on(u)?u.trim():u)),o.number&&(s=n.map(qx)));let a,l=i[a=Mu(e)]||i[a=Mu(Ws(e))];!l&&r&&(l=i[a=Mu(Rr(e))]),l&&Wi(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Wi(c,t,6,s)}}const h3=new WeakMap;function T_(t,e,n=!1){const i=n?h3:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ke(t)){const l=c=>{const u=T_(c,e,!0);u&&(a=!0,mn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Wt(t)&&i.set(t,null),null):(Qe(r)?r.forEach(l=>o[l]=null):mn(o,r),Wt(t)&&i.set(t,o),o)}function Lc(t,e){return!t||!yc(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,Rr(e))||pt(t,e))}function um(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:v}=t,m=sc(t);let p,E;try{if(n.shapeFlag&4){const x=s||i,A=x;p=Oi(c.call(A,x,u,h,d,f,_)),E=a}else{const x=e;p=Oi(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),E=e.props?a:f3(a)}}catch(x){Ma.length=0,Ac(x,t,1),p=ci(qs)}let S=p;if(E&&v!==!1){const x=Object.keys(E),{shapeFlag:A}=S;x.length&&A&7&&(r&&x.some(ed)&&(E=d3(E,r)),S=fo(S,E,!1,!0))}return n.dirs&&(S=fo(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&dd(S,n.transition),p=S,sc(m),p}const f3=t=>{let e;for(const n in t)(n==="class"||n==="style"||yc(n))&&((e||(e={}))[n]=t[n]);return e},d3=(t,e)=>{const n={};for(const i in t)(!ed(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function p3(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?hm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Lc(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hm(i,o,c):!0:!!o;return!1}function hm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Lc(n,r))return!0}return!1}function m3({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const w_={},A_=()=>Object.create(w_),C_=t=>Object.getPrototypeOf(t)===w_;function g3(t,e,n,i=!1){const s={},r=A_();t.propsDefaults=Object.create(null),R_(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:M2(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function _3(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ut(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lc(t.emitsOptions,f))continue;const d=e[f];if(l)if(pt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const _=Ws(f);s[_]=Lh(l,a,_,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{R_(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!pt(e,h)&&((u=Rr(h))===h||!pt(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Lh(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!pt(e,h))&&(delete r[h],c=!0)}c&&rs(t.attrs,"set","")}function R_(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(da(l))continue;const c=e[l];let u;s&&pt(s,u=Ws(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ut(n),c=a||Et;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Lh(s,l,h,c[h],t,!pt(c,h))}}return o}function Lh(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Qa(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Rr(n))&&(i=!0))}return i}const v3=new WeakMap;function P_(t,e,n=!1){const i=n?v3:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ke(t)){const u=h=>{l=!0;const[f,d]=P_(h,e,!0);mn(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Wt(t)&&i.set(t,io),io;if(Qe(r))for(let u=0;u<r.length;u++){const h=Ws(r[u]);fm(h)&&(o[h]=Et)}else if(r)for(const u in r){const h=Ws(u);if(fm(h)){const f=r[u],d=o[h]=Qe(f)||Ke(f)?{type:f}:mn({},f),_=d.type;let v=!1,m=!0;if(Qe(_))for(let p=0;p<_.length;++p){const E=_[p],S=Ke(E)&&E.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=Ke(_)&&_.name==="Boolean";d[0]=v,d[1]=m,(v||pt(d,"default"))&&a.push(h)}}const c=[o,a];return Wt(t)&&i.set(t,c),c}function fm(t){return t[0]!=="$"&&!da(t)}const md=t=>t==="_"||t==="_ctx"||t==="$stable",gd=t=>Qe(t)?t.map(Oi):[Oi(t)],x3=(t,e,n)=>{if(e._n)return e;const i=N2((...s)=>gd(e(...s)),n);return i._c=!1,i},L_=(t,e,n)=>{const i=t._ctx;for(const s in t){if(md(s))continue;const r=t[s];if(Ke(r))e[s]=x3(s,r,i);else if(r!=null){const o=gd(r);e[s]=()=>o}}},D_=(t,e)=>{const n=gd(e);t.slots.default=()=>n},I_=(t,e,n)=>{for(const i in e)(n||!md(i))&&(t[i]=e[i])},M3=(t,e,n)=>{const i=t.slots=A_();if(t.vnode.shapeFlag&32){const s=e._;s?(I_(i,e,n),n&&qg(i,"_",s,!0)):L_(e,i)}else e&&D_(t,e)},y3=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:I_(s,e,n):(r=!e.$stable,L_(e,s)),o=e}else e&&(D_(t,e),o={default:1});if(r)for(const a in s)!md(a)&&o[a]==null&&delete s[a]},Xn=w3;function S3(t){return b3(t)}function b3(t,e){const n=Tc();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Vi,insertStaticContent:_}=t,v=(R,I,D,k=null,O=null,G=null,b=void 0,ne=null,j=!!I.dynamicChildren)=>{if(R===I)return;R&&!jo(R,I)&&(k=ae(R),ke(R,O,G,!0),R=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:$,ref:te,shapeFlag:y}=I;switch($){case Dc:m(R,I,D,k);break;case qs:p(R,I,D,k);break;case Au:R==null&&E(I,D,k,b);break;case Fi:W(R,I,D,k,O,G,b,ne,j);break;default:y&1?A(R,I,D,k,O,G,b,ne,j):y&6?Y(R,I,D,k,O,G,b,ne,j):(y&64||y&128)&&$.process(R,I,D,k,O,G,b,ne,j,we)}te!=null&&O?ga(te,R&&R.ref,G,I||R,!I):te==null&&R&&R.ref!=null&&ga(R.ref,null,G,R,!0)},m=(R,I,D,k)=>{if(R==null)i(I.el=a(I.children),D,k);else{const O=I.el=R.el;I.children!==R.children&&c(O,I.children)}},p=(R,I,D,k)=>{R==null?i(I.el=l(I.children||""),D,k):I.el=R.el},E=(R,I,D,k)=>{[R.el,R.anchor]=_(R.children,I,D,k,R.el,R.anchor)},S=({el:R,anchor:I},D,k)=>{let O;for(;R&&R!==I;)O=f(R),i(R,D,k),R=O;i(I,D,k)},x=({el:R,anchor:I})=>{let D;for(;R&&R!==I;)D=f(R),s(R),R=D;s(I)},A=(R,I,D,k,O,G,b,ne,j)=>{if(I.type==="svg"?b="svg":I.type==="math"&&(b="mathml"),R==null)C(I,D,k,O,G,b,ne,j);else{const $=R.el&&R.el._isVueCE?R.el:null;try{$&&$._beginPatch(),M(R,I,O,G,b,ne,j)}finally{$&&$._endPatch()}}},C=(R,I,D,k,O,G,b,ne)=>{let j,$;const{props:te,shapeFlag:y,transition:g,dirs:L}=R;if(j=R.el=o(R.type,G,te&&te.is,te),y&8?u(j,R.children):y&16&&F(R.children,j,null,k,O,wu(R,G),b,ne),L&&ir(R,null,k,"created"),P(j,R,R.scopeId,b,k),te){for(const ee in te)ee!=="value"&&!da(ee)&&r(j,ee,null,te[ee],G,k);"value"in te&&r(j,"value",null,te.value,G),($=te.onVnodeBeforeMount)&&Ri($,k,R)}L&&ir(R,null,k,"beforeMount");const H=E3(O,g);H&&g.beforeEnter(j),i(j,I,D),(($=te&&te.onVnodeMounted)||H||L)&&Xn(()=>{$&&Ri($,k,R),H&&g.enter(j),L&&ir(R,null,k,"mounted")},O)},P=(R,I,D,k,O)=>{if(D&&d(R,D),k)for(let G=0;G<k.length;G++)d(R,k[G]);if(O){let G=O.subTree;if(I===G||F_(G.type)&&(G.ssContent===I||G.ssFallback===I)){const b=O.vnode;P(R,b,b.scopeId,b.slotScopeIds,O.parent)}}},F=(R,I,D,k,O,G,b,ne,j=0)=>{for(let $=j;$<R.length;$++){const te=R[$]=ne?Ds(R[$]):Oi(R[$]);v(null,te,I,D,k,O,G,b,ne)}},M=(R,I,D,k,O,G,b)=>{const ne=I.el=R.el;let{patchFlag:j,dynamicChildren:$,dirs:te}=I;j|=R.patchFlag&16;const y=R.props||Et,g=I.props||Et;let L;if(D&&sr(D,!1),(L=g.onVnodeBeforeUpdate)&&Ri(L,D,I,R),te&&ir(I,R,D,"beforeUpdate"),D&&sr(D,!0),(y.innerHTML&&g.innerHTML==null||y.textContent&&g.textContent==null)&&u(ne,""),$?w(R.dynamicChildren,$,ne,D,k,wu(I,O),G):b||ie(R,I,ne,null,D,k,wu(I,O),G,!1),j>0){if(j&16)U(ne,y,g,D,O);else if(j&2&&y.class!==g.class&&r(ne,"class",null,g.class,O),j&4&&r(ne,"style",y.style,g.style,O),j&8){const H=I.dynamicProps;for(let ee=0;ee<H.length;ee++){const X=H[ee],xe=y[X],ce=g[X];(ce!==xe||X==="value")&&r(ne,X,xe,ce,O,D)}}j&1&&R.children!==I.children&&u(ne,I.children)}else!b&&$==null&&U(ne,y,g,D,O);((L=g.onVnodeUpdated)||te)&&Xn(()=>{L&&Ri(L,D,I,R),te&&ir(I,R,D,"updated")},k)},w=(R,I,D,k,O,G,b)=>{for(let ne=0;ne<I.length;ne++){const j=R[ne],$=I[ne],te=j.el&&(j.type===Fi||!jo(j,$)||j.shapeFlag&198)?h(j.el):D;v(j,$,te,null,k,O,G,b,!0)}},U=(R,I,D,k,O)=>{if(I!==D){if(I!==Et)for(const G in I)!da(G)&&!(G in D)&&r(R,G,I[G],null,O,k);for(const G in D){if(da(G))continue;const b=D[G],ne=I[G];b!==ne&&G!=="value"&&r(R,G,ne,b,O,k)}"value"in D&&r(R,"value",I.value,D.value,O)}},W=(R,I,D,k,O,G,b,ne,j)=>{const $=I.el=R?R.el:a(""),te=I.anchor=R?R.anchor:a("");let{patchFlag:y,dynamicChildren:g,slotScopeIds:L}=I;L&&(ne=ne?ne.concat(L):L),R==null?(i($,D,k),i(te,D,k),F(I.children||[],D,te,O,G,b,ne,j)):y>0&&y&64&&g&&R.dynamicChildren?(w(R.dynamicChildren,g,D,O,G,b,ne),(I.key!=null||O&&I===O.subTree)&&U_(R,I,!0)):ie(R,I,D,te,O,G,b,ne,j)},Y=(R,I,D,k,O,G,b,ne,j)=>{I.slotScopeIds=ne,R==null?I.shapeFlag&512?O.ctx.activate(I,D,k,b,j):se(I,D,k,O,G,b,j):Q(R,I,j)},se=(R,I,D,k,O,G,b)=>{const ne=R.component=U3(R,k,O);if(v_(R)&&(ne.ctx.renderer=we),F3(ne,!1,b),ne.asyncDep){if(O&&O.registerDep(ne,K,b),!R.el){const j=ne.subTree=ci(qs);p(null,j,I,D),R.placeholder=j.el}}else K(ne,R,I,D,O,G,b)},Q=(R,I,D)=>{const k=I.component=R.component;if(p3(R,I,D))if(k.asyncDep&&!k.asyncResolved){V(k,I,D);return}else k.next=I,k.update();else I.el=R.el,k.vnode=I},K=(R,I,D,k,O,G,b)=>{const ne=()=>{if(R.isMounted){let{next:y,bu:g,u:L,parent:H,vnode:ee}=R;{const Ie=N_(R);if(Ie){y&&(y.el=ee.el,V(R,y,b)),Ie.asyncDep.then(()=>{R.isUnmounted||ne()});return}}let X=y,xe;sr(R,!1),y?(y.el=ee.el,V(R,y,b)):y=ee,g&&yu(g),(xe=y.props&&y.props.onVnodeBeforeUpdate)&&Ri(xe,H,y,ee),sr(R,!0);const ce=um(R),be=R.subTree;R.subTree=ce,v(be,ce,h(be.el),ae(be),R,O,G),y.el=ce.el,X===null&&m3(R,ce.el),L&&Xn(L,O),(xe=y.props&&y.props.onVnodeUpdated)&&Xn(()=>Ri(xe,H,y,ee),O)}else{let y;const{el:g,props:L}=I,{bm:H,m:ee,parent:X,root:xe,type:ce}=R,be=_a(I);sr(R,!1),H&&yu(H),!be&&(y=L&&L.onVnodeBeforeMount)&&Ri(y,X,I),sr(R,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(ce);const Ie=R.subTree=um(R);v(null,Ie,D,k,R,O,G),I.el=Ie.el}if(ee&&Xn(ee,O),!be&&(y=L&&L.onVnodeMounted)){const Ie=I;Xn(()=>Ri(y,X,Ie),O)}(I.shapeFlag&256||X&&_a(X.vnode)&&X.vnode.shapeFlag&256)&&R.a&&Xn(R.a,O),R.isMounted=!0,I=D=k=null}};R.scope.on();const j=R.effect=new jg(ne);R.scope.off();const $=R.update=j.run.bind(j),te=R.job=j.runIfDirty.bind(j);te.i=R,te.id=R.uid,j.scheduler=()=>fd(te),sr(R,!0),$()},V=(R,I,D)=>{I.component=R;const k=R.vnode.props;R.vnode=I,R.next=null,_3(R,I.props,k,D),y3(R,I.children,D),ms(),sm(R),gs()},ie=(R,I,D,k,O,G,b,ne,j=!1)=>{const $=R&&R.children,te=R?R.shapeFlag:0,y=I.children,{patchFlag:g,shapeFlag:L}=I;if(g>0){if(g&128){pe($,y,D,k,O,G,b,ne,j);return}else if(g&256){me($,y,D,k,O,G,b,ne,j);return}}L&8?(te&16&&re($,O,G),y!==$&&u(D,y)):te&16?L&16?pe($,y,D,k,O,G,b,ne,j):re($,O,G,!0):(te&8&&u(D,""),L&16&&F(y,D,k,O,G,b,ne,j))},me=(R,I,D,k,O,G,b,ne,j)=>{R=R||io,I=I||io;const $=R.length,te=I.length,y=Math.min($,te);let g;for(g=0;g<y;g++){const L=I[g]=j?Ds(I[g]):Oi(I[g]);v(R[g],L,D,null,O,G,b,ne,j)}$>te?re(R,O,G,!0,!1,y):F(I,D,k,O,G,b,ne,j,y)},pe=(R,I,D,k,O,G,b,ne,j)=>{let $=0;const te=I.length;let y=R.length-1,g=te-1;for(;$<=y&&$<=g;){const L=R[$],H=I[$]=j?Ds(I[$]):Oi(I[$]);if(jo(L,H))v(L,H,D,null,O,G,b,ne,j);else break;$++}for(;$<=y&&$<=g;){const L=R[y],H=I[g]=j?Ds(I[g]):Oi(I[g]);if(jo(L,H))v(L,H,D,null,O,G,b,ne,j);else break;y--,g--}if($>y){if($<=g){const L=g+1,H=L<te?I[L].el:k;for(;$<=g;)v(null,I[$]=j?Ds(I[$]):Oi(I[$]),D,H,O,G,b,ne,j),$++}}else if($>g)for(;$<=y;)ke(R[$],O,G,!0),$++;else{const L=$,H=$,ee=new Map;for($=H;$<=g;$++){const Me=I[$]=j?Ds(I[$]):Oi(I[$]);Me.key!=null&&ee.set(Me.key,$)}let X,xe=0;const ce=g-H+1;let be=!1,Ie=0;const le=new Array(ce);for($=0;$<ce;$++)le[$]=0;for($=L;$<=y;$++){const Me=R[$];if(xe>=ce){ke(Me,O,G,!0);continue}let Ce;if(Me.key!=null)Ce=ee.get(Me.key);else for(X=H;X<=g;X++)if(le[X-H]===0&&jo(Me,I[X])){Ce=X;break}Ce===void 0?ke(Me,O,G,!0):(le[Ce-H]=$+1,Ce>=Ie?Ie=Ce:be=!0,v(Me,I[Ce],D,null,O,G,b,ne,j),xe++)}const _e=be?T3(le):io;for(X=_e.length-1,$=ce-1;$>=0;$--){const Me=H+$,Ce=I[Me],ge=I[Me+1],je=Me+1<te?ge.el||ge.placeholder:k;le[$]===0?v(null,Ce,D,je,O,G,b,ne,j):be&&(X<0||$!==_e[X]?de(Ce,D,je,2):X--)}}},de=(R,I,D,k,O=null)=>{const{el:G,type:b,transition:ne,children:j,shapeFlag:$}=R;if($&6){de(R.component.subTree,I,D,k);return}if($&128){R.suspense.move(I,D,k);return}if($&64){b.move(R,I,D,we);return}if(b===Fi){i(G,I,D);for(let y=0;y<j.length;y++)de(j[y],I,D,k);i(R.anchor,I,D);return}if(b===Au){S(R,I,D);return}if(k!==2&&$&1&&ne)if(k===0)ne.beforeEnter(G),i(G,I,D),Xn(()=>ne.enter(G),O);else{const{leave:y,delayLeave:g,afterLeave:L}=ne,H=()=>{R.ctx.isUnmounted?s(G):i(G,I,D)},ee=()=>{G._isLeaving&&G[k2](!0),y(G,()=>{H(),L&&L()})};g?g(G,H,ee):ee()}else i(G,I,D)},ke=(R,I,D,k=!1,O=!1)=>{const{type:G,props:b,ref:ne,children:j,dynamicChildren:$,shapeFlag:te,patchFlag:y,dirs:g,cacheIndex:L}=R;if(y===-2&&(O=!1),ne!=null&&(ms(),ga(ne,null,D,R,!0),gs()),L!=null&&(I.renderCache[L]=void 0),te&256){I.ctx.deactivate(R);return}const H=te&1&&g,ee=!_a(R);let X;if(ee&&(X=b&&b.onVnodeBeforeUnmount)&&Ri(X,I,R),te&6)dt(R.component,D,k);else{if(te&128){R.suspense.unmount(D,k);return}H&&ir(R,null,I,"beforeUnmount"),te&64?R.type.remove(R,I,D,we,k):$&&!$.hasOnce&&(G!==Fi||y>0&&y&64)?re($,I,D,!1,!0):(G===Fi&&y&384||!O&&te&16)&&re(j,I,D),k&&We(R)}(ee&&(X=b&&b.onVnodeUnmounted)||H)&&Xn(()=>{X&&Ri(X,I,R),H&&ir(R,null,I,"unmounted")},D)},We=R=>{const{type:I,el:D,anchor:k,transition:O}=R;if(I===Fi){ft(D,k);return}if(I===Au){x(R);return}const G=()=>{s(D),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(R.shapeFlag&1&&O&&!O.persisted){const{leave:b,delayLeave:ne}=O,j=()=>b(D,G);ne?ne(R.el,G,j):j()}else G()},ft=(R,I)=>{let D;for(;R!==I;)D=f(R),s(R),R=D;s(I)},dt=(R,I,D)=>{const{bum:k,scope:O,job:G,subTree:b,um:ne,m:j,a:$}=R;dm(j),dm($),k&&yu(k),O.stop(),G&&(G.flags|=8,ke(b,R,I,D)),ne&&Xn(ne,I),Xn(()=>{R.isUnmounted=!0},I)},re=(R,I,D,k=!1,O=!1,G=0)=>{for(let b=G;b<R.length;b++)ke(R[b],I,D,k,O)},ae=R=>{if(R.shapeFlag&6)return ae(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=f(R.anchor||R.el),D=I&&I[O2];return D?f(D):I};let Ae=!1;const ze=(R,I,D)=>{R==null?I._vnode&&ke(I._vnode,null,null,!0):v(I._vnode||null,R,I,null,null,null,D),I._vnode=R,Ae||(Ae=!0,sm(),p_(),Ae=!1)},we={p:v,um:ke,m:de,r:We,mt:se,mc:F,pc:ie,pbc:w,n:ae,o:t};return{render:ze,hydrate:void 0,createApp:s3(ze)}}function wu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function E3(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function U_(t,e,n=!1){const i=t.children,s=e.children;if(Qe(i)&&Qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ds(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&U_(o,a)),a.type===Dc&&a.patchFlag!==-1&&(a.el=o.el),a.type===qs&&!a.el&&(a.el=o.el)}}function T3(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function N_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:N_(e)}function dm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const F_=t=>t.__isSuspense;function w3(t,e){e&&e.pendingBranch?Qe(t)?e.effects.push(...t):e.effects.push(t):U2(t)}const Fi=Symbol.for("v-fgt"),Dc=Symbol.for("v-txt"),qs=Symbol.for("v-cmt"),Au=Symbol.for("v-stc"),Ma=[];let Yn=null;function Ys(t=!1){Ma.push(Yn=t?null:[])}function A3(){Ma.pop(),Yn=Ma[Ma.length-1]||null}let Da=1;function pm(t,e=!1){Da+=t,t<0&&Yn&&e&&(Yn.hasOnce=!0)}function O_(t){return t.dynamicChildren=Da>0?Yn||io:null,A3(),Da>0&&Yn&&Yn.push(t),t}function Za(t,e,n,i,s,r){return O_(Nt(t,e,n,i,s,r,!0))}function _d(t,e,n,i,s){return O_(ci(t,e,n,i,s,!0))}function B_(t){return t?t.__v_isVNode===!0:!1}function jo(t,e){return t.type===e.type&&t.key===e.key}const k_=({key:t})=>t??null,Vl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?on(t)||Qt(t)||Ke(t)?{i:oi,r:t,k:e,f:!!n}:t:null);function Nt(t,e=null,n=null,i=0,s=null,r=t===Fi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&k_(e),ref:e&&Vl(e),scopeId:g_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:oi};return a?(vd(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=on(n)?8:16),Da>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const ci=C3;function C3(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===$2)&&(t=qs),B_(t)){const a=fo(t,e,!0);return n&&vd(a,n),Da>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(t)]=a:Yn.push(a)),a.patchFlag=-2,a}if(z3(t)&&(t=t.__vccOpts),e){e=R3(e);let{class:a,style:l}=e;a&&!on(a)&&(e.class=id(a)),Wt(l)&&(wc(l)&&!Qe(l)&&(l=mn({},l)),e.style=nd(l))}const o=on(t)?1:F_(t)?128:B2(t)?64:Wt(t)?4:Ke(t)?2:0;return Nt(t,e,n,i,s,o,r,!0)}function R3(t){return t?wc(t)||C_(t)?mn({},t):t:null}function fo(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?L3(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&k_(c),ref:e&&e.ref?n&&r?Qe(r)?r.concat(Vl(e)):[r,Vl(e)]:Vl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fi?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fo(t.ssContent),ssFallback:t.ssFallback&&fo(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&dd(u,l.clone(u)),u}function Dh(t=" ",e=0){return ci(Dc,null,t,e)}function P3(t="",e=!1){return e?(Ys(),_d(qs,null,t)):ci(qs,null,t)}function Oi(t){return t==null||typeof t=="boolean"?ci(qs):Qe(t)?ci(Fi,null,t.slice()):B_(t)?Ds(t):ci(Dc,null,String(t))}function Ds(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fo(t)}function vd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Qe(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),vd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!C_(e)?e._ctx=oi:s===3&&oi&&(oi.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:oi},n=32):(e=String(e),i&64?(n=16,e=[Dh(e)]):n=8);t.children=e,t.shapeFlag|=n}function L3(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=id([e.class,i.class]));else if(s==="style")e.style=nd([e.style,i.style]);else if(yc(s)){const r=e[s],o=i[s];o&&r!==o&&!(Qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Ri(t,e,n,i=null){Wi(t,e,7,[n,i])}const D3=S_();let I3=0;function U3(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||D3,r={uid:I3++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P_(i,s),emitsOptions:T_(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=u3.bind(null,r),t.ce&&t.ce(r),r}let bn=null;const N3=()=>bn||oi;let ac,Ih;{const t=Tc(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ac=e("__VUE_INSTANCE_SETTERS__",n=>bn=n),Ih=e("__VUE_SSR_SETTERS__",n=>Ia=n)}const Qa=t=>{const e=bn;return ac(t),t.scope.on(),()=>{t.scope.off(),ac(e)}},mm=()=>{bn&&bn.scope.off(),ac(null)};function z_(t){return t.vnode.shapeFlag&4}let Ia=!1;function F3(t,e=!1,n=!1){e&&Ih(e);const{props:i,children:s}=t.vnode,r=z_(t);g3(t,i,r,e),M3(t,s,n||e);const o=r?O3(t,e):void 0;return e&&Ih(!1),o}function O3(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,J2);const{setup:i}=n;if(i){ms();const s=t.setupContext=i.length>1?k3(t):null,r=Qa(t),o=$a(i,t,0,[t.props,s]),a=Wg(o);if(gs(),r(),(a||t.sp)&&!_a(t)&&__(t),a){if(o.then(mm,mm),e)return o.then(l=>{gm(t,l)}).catch(l=>{Ac(l,t,0)});t.asyncDep=o}else gm(t,o)}else V_(t)}function gm(t,e,n){Ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Wt(e)&&(t.setupState=u_(e)),V_(t)}function V_(t,e,n){const i=t.type;t.render||(t.render=i.render||Vi);{const s=Qa(t);ms();try{Z2(t)}finally{gs(),s()}}}const B3={get(t,e){return fn(t,"get",""),t[e]}};function k3(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,B3),slots:t.slots,emit:t.emit,expose:e}}function Ic(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(u_(l_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in va)return va[n](t)},has(e,n){return n in e||n in va}})):t.proxy}function z3(t){return Ke(t)&&"__vccOpts"in t}const V3=(t,e)=>R2(t,e,Ia),G3="3.5.25";let Uh;const _m=typeof window<"u"&&window.trustedTypes;if(_m)try{Uh=_m.createPolicy("vue",{createHTML:t=>t})}catch{}const G_=Uh?t=>Uh.createHTML(t):t=>t,H3="http://www.w3.org/2000/svg",W3="http://www.w3.org/1998/Math/MathML",is=typeof document<"u"?document:null,vm=is&&is.createElement("template"),X3={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?is.createElementNS(H3,t):e==="mathml"?is.createElementNS(W3,t):n?is.createElement(t,{is:n}):is.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>is.createTextNode(t),createComment:t=>is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{vm.innerHTML=G_(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=vm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},q3=Symbol("_vtc");function Y3(t,e,n){const i=t[q3];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lc=Symbol("_vod"),H_=Symbol("_vsh"),j3={name:"show",beforeMount(t,{value:e},{transition:n}){t[lc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ko(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Ko(t,!0),i.enter(t)):i.leave(t,()=>{Ko(t,!1)}):Ko(t,e))},beforeUnmount(t,{value:e}){Ko(t,e)}};function Ko(t,e){t.style.display=e?t[lc]:"none",t[H_]=!e}const K3=Symbol(""),$3=/(?:^|;)\s*display\s*:/;function J3(t,e,n){const i=t.style,s=on(n);let r=!1;if(n&&!s){if(e)if(on(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Gl(i,a,"")}else for(const o in e)n[o]==null&&Gl(i,o,"");for(const o in n)o==="display"&&(r=!0),Gl(i,o,n[o])}else if(s){if(e!==n){const o=i[K3];o&&(n+=";"+o),i.cssText=n,r=$3.test(n)}}else e&&t.removeAttribute("style");lc in t&&(t[lc]=r?i.display:"",t[H_]&&(i.display="none"))}const xm=/\s*!important$/;function Gl(t,e,n){if(Qe(n))n.forEach(i=>Gl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Z3(t,e);xm.test(n)?t.setProperty(Rr(i),n.replace(xm,""),"important"):t[i]=n}}const Mm=["Webkit","Moz","ms"],Cu={};function Z3(t,e){const n=Cu[e];if(n)return n;let i=Ws(e);if(i!=="filter"&&i in t)return Cu[e]=i;i=Xg(i);for(let s=0;s<Mm.length;s++){const r=Mm[s]+i;if(r in t)return Cu[e]=r}return e}const ym="http://www.w3.org/1999/xlink";function Sm(t,e,n,i,s,r=Zx(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ym,e.slice(6,e.length)):t.setAttributeNS(ym,e,n):n==null||r&&!Yg(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Io(n)?String(n):n)}function bm(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?G_(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Yg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Q3(t,e,n,i){t.addEventListener(e,n,i)}function eM(t,e,n,i){t.removeEventListener(e,n,i)}const Em=Symbol("_vei");function tM(t,e,n,i,s=null){const r=t[Em]||(t[Em]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=nM(e);if(i){const c=r[e]=rM(i,s);Q3(t,a,c,l)}else o&&(eM(t,a,o,l),r[e]=void 0)}}const Tm=/(?:Once|Passive|Capture)$/;function nM(t){let e;if(Tm.test(t)){e={};let i;for(;i=t.match(Tm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rr(t.slice(2)),e]}let Ru=0;const iM=Promise.resolve(),sM=()=>Ru||(iM.then(()=>Ru=0),Ru=Date.now());function rM(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Wi(oM(i,n.value),e,5,[i])};return n.value=t,n.attached=sM(),n}function oM(t,e){if(Qe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const wm=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aM=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Y3(t,i,o):e==="style"?J3(t,n,i):yc(e)?ed(e)||tM(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lM(t,e,i,o))?(bm(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sm(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!on(i))?bm(t,Ws(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Sm(t,e,i,o))};function lM(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&wm(e)&&Ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wm(e)&&on(n)?!1:e in t}const cM=mn({patchProp:aM},X3);let Am;function uM(){return Am||(Am=S3(cM))}const hM=((...t)=>{const e=uM().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=dM(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,fM(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function fM(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function dM(t){return on(t)?document.querySelector(t):t}const pM=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},mM={},gM={class:"absolute inset-0 z-[100] flex h-full w-full flex-col items-center justify-center bg-[#050d1a] transition-opacity duration-700 ease-out"};function _M(t,e){return Ys(),Za("div",gM,[...e[0]||(e[0]=[Nt("div",{class:"h-10 w-10 rounded-full border border-[rgba(212,175,55,0.2)] border-t-[#d4af37] animate-spin"},null,-1),Nt("div",{class:"mt-5 text-[14px] font-thin uppercase tracking-[4px] text-[#d4af37]"}," Loading Memories ",-1)])])}const vM=pM(mM,[["render",_M]]);const xd="182",xM=0,Cm=1,MM=2,Hl=1,yM=2,aa=3,js=0,En=1,gi=2,Gi=0,ao=1,Nh=2,Rm=3,Pm=4,SM=5,mr=100,bM=101,EM=102,TM=103,wM=104,AM=200,CM=201,RM=202,PM=203,Fh=204,Oh=205,LM=206,DM=207,IM=208,UM=209,NM=210,FM=211,OM=212,BM=213,kM=214,Bh=0,kh=1,zh=2,po=3,Vh=4,Gh=5,Hh=6,Wh=7,Md=0,zM=1,VM=2,Hi=0,W_=1,yd=2,X_=3,q_=4,Y_=5,j_=6,K_=7,$_=300,br=301,mo=302,Xh=303,qh=304,Uc=306,Ua=1e3,ls=1001,Yh=1002,an=1003,GM=1004,hl=1005,dn=1006,Pu=1007,_r=1008,qn=1009,J_=1010,Z_=1011,Na=1012,Sd=1013,Xi=1014,xi=1015,jn=1016,bd=1017,Ed=1018,Fa=1020,Q_=35902,e1=35899,t1=1021,n1=1022,Mi=1023,vs=1026,vr=1027,Td=1028,wd=1029,go=1030,Ad=1031,Cd=1033,Wl=33776,Xl=33777,ql=33778,Yl=33779,jh=35840,Kh=35841,$h=35842,Jh=35843,Zh=36196,Qh=37492,ef=37496,tf=37488,nf=37489,sf=37490,rf=37491,of=37808,af=37809,lf=37810,cf=37811,uf=37812,hf=37813,ff=37814,df=37815,pf=37816,mf=37817,gf=37818,_f=37819,vf=37820,xf=37821,Mf=36492,yf=36494,Sf=36495,bf=36283,Ef=36284,Tf=36285,wf=36286,HM=3200,Rd=0,WM=1,Is="",yn="srgb",_o="srgb-linear",cc="linear",xt="srgb",Nr=7680,Lm=519,XM=512,qM=513,YM=514,Pd=515,jM=516,KM=517,Ld=518,$M=519,Dm=35044,JM=35048,Im="300 es",zi=2e3,uc=2001;function i1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZM(){const t=Oa("canvas");return t.style.display="block",t}const Um={};function Nm(...t){const e="THREE."+t.shift();console.log(e,...t)}function qe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function rt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ba(...t){const e=t.join(" ");e in Um||(Um[e]=!0,qe(...t))}function QM(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Uo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fm=1234567;const ya=Math.PI/180,vo=180/Math.PI;function Pr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Dd(t,e){return(t%e+e)%e}function ey(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function ty(t,e,n){return t!==e?(n-t)/(e-t):0}function Sa(t,e,n){return(1-n)*t+n*e}function ny(t,e,n,i){return Sa(t,e,1-Math.exp(-n*i))}function iy(t,e=1){return e-Math.abs(Dd(t,e*2)-e)}function sy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ry(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function oy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ay(t,e){return t+Math.random()*(e-t)}function ly(t){return t*(.5-Math.random())}function cy(t){t!==void 0&&(Fm=t);let e=Fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uy(t){return t*ya}function hy(t){return t*vo}function fy(t){return(t&t-1)===0&&t!==0}function dy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function py(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function my(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*h,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*d,a*c);break;case"YXY":t.set(l*d,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*d,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function to(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hc={DEG2RAD:ya,RAD2DEG:vo,generateUUID:Pr,clamp:et,euclideanModulo:Dd,mapLinear:ey,inverseLerp:ty,lerp:Sa,damp:ny,pingpong:iy,smoothstep:sy,smootherstep:ry,randInt:oy,randFloat:ay,randFloatSpread:ly,seededRandom:cy,degToRad:uy,radToDeg:hy,isPowerOfTwo:fy,ceilPowerOfTwo:dy,floorPowerOfTwo:py,setQuaternionFromProperEuler:my,normalize:xn,denormalize:to};class ue{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Er{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a>=1){e[n+0]=f,e[n+1]=d,e[n+2]=_,e[n+3]=v;return}if(h!==v||l!==f||c!==d||u!==_){let m=l*f+c*d+u*_+h*v;m<0&&(f=-f,d=-d,_=-_,v=-v,m=-m);let p=1-a;if(m<.9995){const E=Math.acos(m),S=Math.sin(E);p=Math.sin(p*E)/S,a=Math.sin(a*E)/S,l=l*p+f*a,c=c*p+d*a,u=u*p+_*a,h=h*p+v*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+_*a,h=h*p+v*a;const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[n]=a*_+u*h+l*d-c*f,e[n+1]=l*_+u*f+c*h-a*d,e[n+2]=c*_+u*d+a*f-l*h,e[n+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),h=2*(r*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new N,Om=new Er;class Je{constructor(e,n,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],v=s[0],m=s[3],p=s[6],E=s[1],S=s[4],x=s[7],A=s[2],C=s[5],P=s[8];return r[0]=o*v+a*E+l*A,r[3]=o*m+a*S+l*C,r[6]=o*p+a*x+l*P,r[1]=c*v+u*E+h*A,r[4]=c*m+u*S+h*C,r[7]=c*p+u*x+h*P,r[2]=f*v+d*E+_*A,r[5]=f*m+d*S+_*C,r[8]=f*p+d*x+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=n*h+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=d*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Du.makeScale(e,n)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,n){return this.premultiply(Du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new Je,Bm=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gy(){const t={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=lo(s.r),s.g=lo(s.g),s.b=lo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Is?cc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[_o]:{primaries:e,whitePoint:i,transfer:cc,toXYZ:Bm,fromXYZ:km,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Bm,fromXYZ:km,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),t}const ot=gy();function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class _y{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fr===void 0&&(Fr=Oa("canvas")),Fr.width=e.width,Fr.height=e.height;const s=Fr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vy=0;class Id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Iu(s[o].image)):r.push(Iu(s[o]))}else r=Iu(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_y.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let xy=0;const Uu=new N;class ln extends Uo{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=ls,s=ls,r=dn,o=_r,a=Mi,l=qn,c=ln.DEFAULT_ANISOTROPY,u=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Pr(),this.name="",this.source=new Id(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ua:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ua:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=$_;ln.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,i=0,s=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,x=(d+1)/2,A=(p+1)/2,C=(u+f)/4,P=(h+v)/4,F=(_+m)/4;return S>x&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=C/i,r=P/i):x>A?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=C/s,r=F/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=F/r),this.set(i,s,r,n),this}let E=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends Uo{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new ln(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Id(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends My{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class s1 extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yy extends ln{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),dl.subVectors(this.max,$o),Or.subVectors(e.a,$o),Br.subVectors(e.b,$o),kr.subVectors(e.c,$o),bs.subVectors(Br,Or),Es.subVectors(kr,Br),rr.subVectors(Or,kr);let n=[0,-bs.z,bs.y,0,-Es.z,Es.y,0,-rr.z,rr.y,bs.z,0,-bs.x,Es.z,0,-Es.x,rr.z,0,-rr.x,-bs.y,bs.x,0,-Es.y,Es.x,0,-rr.y,rr.x,0];return!Nu(n,Or,Br,kr,dl)||(n=[1,0,0,0,1,0,0,0,1],!Nu(n,Or,Br,kr,dl))?!1:(pl.crossVectors(bs,Es),n=[pl.x,pl.y,pl.z],Nu(n,Or,Br,kr,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new N,new N,new N,new N,new N,new N,new N,new N],di=new N,fl=new Lr,Or=new N,Br=new N,kr=new N,bs=new N,Es=new N,rr=new N,$o=new N,dl=new N,pl=new N,or=new N;function Nu(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){or.fromArray(t,r);const a=s.x*Math.abs(or.x)+s.y*Math.abs(or.y)+s.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sy=new Lr,Jo=new N,Fu=new N;class el{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sy.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const n=Jo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Jo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(Fu)),this.expandByPoint(Jo.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qi=new N,Ou=new N,ml=new N,Ts=new N,Bu=new N,gl=new N,ku=new N;class by{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Ou.copy(e).add(n).multiplyScalar(.5),ml.copy(n).sub(e).normalize(),Ts.copy(this.origin).sub(Ou);const r=e.distanceTo(n)*.5,o=-this.direction.dot(ml),a=Ts.dot(this.direction),l=-Ts.dot(ml),c=Ts.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ou).addScaledVector(ml,f),d}intersectSphere(e,n){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),s=Qi.dot(Qi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,i,s,r){Bu.subVectors(n,e),gl.subVectors(i,e),ku.crossVectors(Bu,gl);let o=this.direction.dot(ku),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,e);const l=a*this.direction.dot(gl.crossVectors(Ts,gl));if(l<0)return null;const c=a*this.direction.dot(Bu.cross(Ts));if(c<0||l+c>o)return null;const u=-a*Ts.dot(ku);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,s,r,o,a,l,c,u,h,f,d,_,v,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,h,f,d,_,v,m)}set(e,n,i,s,r,o,a,l,c,u,h,f,d,_,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,v=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=d+_*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=_+d*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,v=c*h;n[0]=f+v*a,n[4]=_*a-d,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=d*a-_,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=_+d*a,n[1]=d+_*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,v=a*h;n[0]=l*u,n[4]=_*c-d,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=d*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-f*h,n[8]=_*h+d,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=d*h+_,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=f*h+v,n[5]=o*u,n[9]=d*h-_,n[2]=_*h-d,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ey,e,Ty)}lookAt(e,n,i){const s=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),ws.crossVectors(i,zn),ws.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),ws.crossVectors(i,zn)),ws.normalize(),_l.crossVectors(zn,ws),s[0]=ws.x,s[4]=_l.x,s[8]=zn.x,s[1]=ws.y,s[5]=_l.y,s[9]=zn.y,s[2]=ws.z,s[6]=_l.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],E=i[3],S=i[7],x=i[11],A=i[15],C=s[0],P=s[4],F=s[8],M=s[12],w=s[1],U=s[5],W=s[9],Y=s[13],se=s[2],Q=s[6],K=s[10],V=s[14],ie=s[3],me=s[7],pe=s[11],de=s[15];return r[0]=o*C+a*w+l*se+c*ie,r[4]=o*P+a*U+l*Q+c*me,r[8]=o*F+a*W+l*K+c*pe,r[12]=o*M+a*Y+l*V+c*de,r[1]=u*C+h*w+f*se+d*ie,r[5]=u*P+h*U+f*Q+d*me,r[9]=u*F+h*W+f*K+d*pe,r[13]=u*M+h*Y+f*V+d*de,r[2]=_*C+v*w+m*se+p*ie,r[6]=_*P+v*U+m*Q+p*me,r[10]=_*F+v*W+m*K+p*pe,r[14]=_*M+v*Y+m*V+p*de,r[3]=E*C+S*w+x*se+A*ie,r[7]=E*P+S*U+x*Q+A*me,r[11]=E*F+S*W+x*K+A*pe,r[15]=E*M+S*Y+x*V+A*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],v=e[7],m=e[11],p=e[15],E=l*d-c*f,S=a*d-c*h,x=a*f-l*h,A=o*d-c*u,C=o*f-l*u,P=o*h-a*u;return n*(v*E-m*S+p*x)-i*(_*E-m*A+p*C)+s*(_*S-v*A+p*P)-r*(_*x-v*C+m*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],v=e[13],m=e[14],p=e[15],E=h*m*c-v*f*c+v*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*v*c-_*h*c+_*a*d-o*v*d-u*a*p+o*h*p,A=_*h*l-u*v*l-_*a*f+o*v*f+u*a*m-o*h*m,C=n*E+i*S+s*x+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=E*P,e[1]=(v*f*r-h*m*r-v*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=S*P,e[5]=(u*m*r-_*f*r+_*s*d-n*m*d-u*s*p+n*f*p)*P,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*p-n*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-n*f*c-o*s*d+n*l*d)*P,e[8]=x*P,e[9]=(_*h*r-u*v*r-_*i*d+n*v*d+u*i*p-n*h*p)*P,e[10]=(o*v*r-_*a*r+_*i*c-n*v*c-o*i*p+n*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*c+n*h*c+o*i*d-n*a*d)*P,e[12]=A*P,e[13]=(u*v*s-_*h*s+_*i*f-n*v*f-u*i*m+n*h*m)*P,e[14]=(_*a*s-o*v*s-_*i*l+n*v*l+o*i*m-n*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*l-n*h*l-o*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,v=o*u,m=o*h,p=a*h,E=l*c,S=l*u,x=l*h,A=i.x,C=i.y,P=i.z;return s[0]=(1-(v+p))*A,s[1]=(d+x)*A,s[2]=(_-S)*A,s[3]=0,s[4]=(d-x)*C,s[5]=(1-(f+p))*C,s[6]=(m+E)*C,s[7]=0,s[8]=(_+S)*P,s[9]=(m-E)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let r=zr.set(s[0],s[1],s[2]).length();const o=zr.set(s[4],s[5],s[6]).length(),a=zr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),pi.copy(this);const c=1/r,u=1/o,h=1/a;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,n.setFromRotationMatrix(pi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=zi,l=!1){const c=this.elements,u=2*r/(n-e),h=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===zi)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===uc)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=zi,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-s),f=-(n+e)/(n-e),d=-(i+s)/(i-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===zi)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===uc)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new N,pi=new Tt,Ey=new N(0,0,0),Ty=new N(1,1,1),ws=new N,_l=new N,zn=new N,zm=new Tt,Vm=new Er;class bi{constructor(e=0,n=0,i=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vm.setFromEuler(this),this.setFromQuaternion(Vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class r1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wy=0;const Gm=new N,Vr=new Er,es=new Tt,vl=new N,Zo=new N,Ay=new N,Cy=new Er,Hm=new N(1,0,0),Wm=new N(0,1,0),Xm=new N(0,0,1),qm={type:"added"},Ry={type:"removed"},Gr={type:"childadded",child:null},zu={type:"childremoved",child:null};class $t extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new N,n=new bi,i=new Er,s=new N(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Hm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,n){return Gm.copy(e).applyQuaternion(this.quaternion),this.position.add(Gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vl.copy(e):vl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Zo,vl,this.up):es.lookAt(vl,Zo,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),Vr.setFromRotationMatrix(es),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ry),zu.child=e,this.dispatchEvent(zu),zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,Ay),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new N(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new N,ts=new N,Vu=new N,ns=new N,Hr=new N,Wr=new N,Ym=new N,Gu=new N,Hu=new N,Wu=new N,Xu=new Gt,qu=new Gt,Yu=new Gt;class _i{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),mi.subVectors(e,n),s.cross(mi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){mi.subVectors(s,n),ts.subVectors(i,n),Vu.subVectors(e,n);const o=mi.dot(mi),a=mi.dot(ts),l=mi.dot(Vu),c=ts.dot(ts),u=ts.dot(Vu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(o,ns.y),l.addScaledVector(a,ns.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Xu.setScalar(0),qu.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xu,r.x),o.addScaledVector(qu,r.y),o.addScaledVector(Yu,r.z),o}static isFrontFacing(e,n,i,s){return mi.subVectors(i,n),ts.subVectors(e,n),mi.cross(ts).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),mi.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _i.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return _i.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Hr.subVectors(s,i),Wr.subVectors(r,i),Gu.subVectors(e,i);const l=Hr.dot(Gu),c=Wr.dot(Gu);if(l<=0&&c<=0)return n.copy(i);Hu.subVectors(e,s);const u=Hr.dot(Hu),h=Wr.dot(Hu);if(u>=0&&h<=u)return n.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Hr,o);Wu.subVectors(e,r);const d=Hr.dot(Wu),_=Wr.dot(Wu);if(_>=0&&d<=_)return n.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Wr,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Ym.subVectors(r,s),a=(h-u)/(h-u+(d-_)),n.copy(s).addScaledVector(Ym,a);const p=1/(m+v+f);return o=v*p,a=f*p,n.copy(i).addScaledVector(Hr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const o1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},xl={h:0,s:0,l:0};function ju(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ot.workingColorSpace){if(e=Dd(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ju(o,r,e+1/3),this.g=ju(o,r,e),this.b=ju(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,n=yn){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=o1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return ot.workingToColorSpace(un.copy(this),e),Math.round(et(un.r*255,0,255))*65536+Math.round(et(un.g*255,0,255))*256+Math.round(et(un.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(un.copy(this),n);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=yn){ot.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,s=un.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(As),this.setHSL(As.h+e,As.s+n,As.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(As),e.getHSL(xl);const i=Sa(As.h,xl.h,n),s=Sa(As.s,xl.s,n),r=Sa(As.l,xl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new $e;$e.NAMES=o1;let Py=0;class No extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=ao,this.side=js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==js&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fh&&(i.blendSrc=this.blendSrc),this.blendDst!==Oh&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ka extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new N,Ml=new ue;let Ly=0;class Si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ly++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dm,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=to(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=to(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=to(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=to(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=to(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),s=xn(s,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dm&&(e.usage=this.usage),e}}class a1 extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class l1 extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yt extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Dy=0;const ti=new Tt,Ku=new $t,Xr=new N,Vn=new Lr,Qo=new Lr,nn=new N;class gn extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i1(e)?l1:a1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,n,i){return ti.makeTranslation(e,n,i),this.applyMatrix4(ti),this}scale(e,n,i){return ti.makeScale(e,n,i),this.applyMatrix4(ti),this}lookAt(e){return Ku.lookAt(e),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Vn.min,Qo.min),Vn.expandByPoint(nn),nn.addVectors(Vn.max,Qo.max),Vn.expandByPoint(nn)):(Vn.expandByPoint(Qo.min),Vn.expandByPoint(Qo.max))}Vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)nn.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),nn.add(Xr)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new N,l[F]=new N;const c=new N,u=new N,h=new N,f=new ue,d=new ue,_=new ue,v=new N,m=new N;function p(F,M,w){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,w),f.fromBufferAttribute(r,F),d.fromBufferAttribute(r,M),_.fromBufferAttribute(r,w),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const U=1/(d.x*_.y-_.x*d.y);isFinite(U)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(U),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(U),a[F].add(v),a[M].add(v),a[w].add(v),l[F].add(m),l[M].add(m),l[w].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,M=E.length;F<M;++F){const w=E[F],U=w.start,W=w.count;for(let Y=U,se=U+W;Y<se;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const S=new N,x=new N,A=new N,C=new N;function P(F){A.fromBufferAttribute(s,F),C.copy(A);const M=a[F];S.copy(M),S.sub(A.multiplyScalar(A.dot(M))).normalize(),x.crossVectors(C,M);const U=x.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,U)}for(let F=0,M=E.length;F<M;++F){const w=E[F],U=w.start,W=w.count;for(let Y=U,se=U+W;Y<se;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Si(f,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new Tt,ar=new by,yl=new el,Km=new N,Sl=new N,bl=new N,El=new N,$u=new N,Tl=new N,$m=new N,wl=new N;class ht extends $t{constructor(e=new gn,n=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&($u.fromBufferAttribute(h,e),o?Tl.addScaledVector($u,u):Tl.addScaledVector($u.sub(n),u))}n.add(Tl)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(r),ar.copy(e.ray).recast(e.near),!(yl.containsPoint(ar.origin)===!1&&(ar.intersectSphere(yl,Km)===null||ar.origin.distanceToSquared(Km)>(e.far-e.near)**2))&&(jm.copy(r).invert(),ar.copy(e.ray).applyMatrix4(jm),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,A=S;x<A;x+=3){const C=a.getX(x),P=a.getX(x+1),F=a.getX(x+2);s=Al(this,p,e,i,c,u,h,C,P,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const E=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Al(this,o,e,i,c,u,h,E,S,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=E,A=S;x<A;x+=3){const C=x,P=x+1,F=x+2;s=Al(this,p,e,i,c,u,h,C,P,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const E=m,S=m+1,x=m+2;s=Al(this,o,e,i,c,u,h,E,S,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Iy(t,e,n,i,s,r,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===js,a),l===null)return null;wl.copy(a),wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wl);return c<n.near||c>n.far?null:{distance:c,point:wl.clone(),object:t}}function Al(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,Sl),t.getVertexPosition(l,bl),t.getVertexPosition(c,El);const u=Iy(t,e,n,i,Sl,bl,El,$m);if(u){const h=new N;_i.getBarycoord($m,Sl,bl,El,h),s&&(u.uv=_i.getInterpolatedAttribute(s,a,l,c,h,new ue)),r&&(u.uv1=_i.getInterpolatedAttribute(r,a,l,c,h,new ue)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};_i.getNormal(Sl,bl,El,f.normal),u.face=f,u.barycoord=h}return u}class Js extends gn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(h,2));function _(v,m,p,E,S,x,A,C,P,F,M){const w=x/P,U=A/F,W=x/2,Y=A/2,se=C/2,Q=P+1,K=F+1;let V=0,ie=0;const me=new N;for(let pe=0;pe<K;pe++){const de=pe*U-Y;for(let ke=0;ke<Q;ke++){const We=ke*w-W;me[v]=We*E,me[m]=de*S,me[p]=se,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[p]=C>0?1:-1,u.push(me.x,me.y,me.z),h.push(ke/P),h.push(1-pe/F),V+=1}}for(let pe=0;pe<F;pe++)for(let de=0;de<P;de++){const ke=f+de+Q*pe,We=f+de+Q*(pe+1),ft=f+(de+1)+Q*(pe+1),dt=f+(de+1)+Q*pe;l.push(ke,We,dt),l.push(We,ft,dt),ie+=6}a.addGroup(d,ie,M),d+=ie,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function Mn(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const s in i)e[s]=i[s]}return e}function Uy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const fc={clone:xo,merge:Mn};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class u1 extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new N,Jm=new ue,Zm=new ue;class In extends u1{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,n){return this.getViewBounds(e,Jm,Zm),n.subVectors(Zm,Jm)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ya*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,Yr=1;class Oy extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(qr,Yr,e,n);s.layers=this.layers,this.add(s);const r=new In(qr,Yr,e,n);r.layers=this.layers,this.add(r);const o=new In(qr,Yr,e,n);o.layers=this.layers,this.add(o);const a=new In(qr,Yr,e,n);a.layers=this.layers,this.add(a);const l=new In(qr,Yr,e,n);l.layers=this.layers,this.add(l);const c=new In(qr,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class h1 extends ln{constructor(e=[],n=br,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f1 extends Un{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new h1(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Js(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Gi});r.uniforms.tEquirect.value=n;const o=new ht(s,r),a=n.minFilter;return n.minFilter===_r&&(n.minFilter=dn),new Oy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Fs extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class Ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Ud{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=n}clone(){return new Ud(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class d1 extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class p1 extends ln{constructor(e=null,n=1,i=1,s,r,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qm extends Si{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const jr=new Tt,e0=new Tt,Cl=[],t0=new Lr,ky=new Tt,ea=new ht,ta=new el;class m1 extends ht{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Qm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ky)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jr),t0.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(t0)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new el),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jr),ta.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(ta)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){const i=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,jr),e0.multiplyMatrices(i,jr),ea.matrixWorld=e0,ea.raycast(e,Cl);for(let o=0,a=Cl.length;o<a;o++){const l=Cl[o];l.instanceId=r,l.object=this,n.push(l)}Cl.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Qm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new p1(new Float32Array(s*this.count),s,this.count,Td,xi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zu=new N,zy=new N,Vy=new Je;class dr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Zu.subVectors(i,n).cross(zy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Vy.getNormalMatrix(e),s=this.coplanarPoint(Zu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new el,Gy=new ue(.5,.5),Rl=new N;class Nd{constructor(e=new dr,n=new dr,i=new dr,s=new dr,r=new dr,o=new dr){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],_=r[8],v=r[9],m=r[10],p=r[11],E=r[12],S=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-o,d-u,p-_,A-E).normalize(),s[1].setComponents(c+o,d+u,p+_,A+E).normalize(),s[2].setComponents(c+a,d+h,p+v,A+S).normalize(),s[3].setComponents(c-a,d-h,p-v,A-S).normalize(),i)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,d-f,p-m,A-x).normalize();else if(s[4].setComponents(c-l,d-f,p-m,A-x).normalize(),n===zi)s[5].setComponents(c+l,d+f,p+m,A+x).normalize();else if(n===uc)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);const n=Gy.distanceTo(e.center);return lr.radius=.7071067811865476+n,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Rl.x=s.normal.x>0?e.max.x:e.min.x,Rl.y=s.normal.y>0?e.max.y:e.min.y,Rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hy extends ln{constructor(e,n,i,s,r,o,a,l,c){super(e,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class za extends ln{constructor(e,n,i=Xi,s,r,o,a=an,l=an,c,u=vs,h=1){if(u!==vs&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Wy extends za{constructor(e,n=Xi,i=br,s,r,o=an,a=an,l,c=vs){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class g1 extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nc extends gn{constructor(e=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const v=[],m=i/2;let p=0;E(),o===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function E(){const x=new N,A=new N;let C=0;const P=(n-e)/i;for(let F=0;F<=r;F++){const M=[],w=F/r,U=w*(n-e)+e;for(let W=0;W<=s;W++){const Y=W/s,se=Y*l+a,Q=Math.sin(se),K=Math.cos(se);A.x=U*Q,A.y=-w*i+m,A.z=U*K,h.push(A.x,A.y,A.z),x.set(Q,P,K).normalize(),f.push(x.x,x.y,x.z),d.push(Y,1-w),M.push(_++)}v.push(M)}for(let F=0;F<s;F++)for(let M=0;M<r;M++){const w=v[M][F],U=v[M+1][F],W=v[M+1][F+1],Y=v[M][F+1];(e>0||M!==0)&&(u.push(w,U,Y),C+=3),(n>0||M!==r-1)&&(u.push(U,W,Y),C+=3)}c.addGroup(p,C,0),p+=C}function S(x){const A=_,C=new ue,P=new N;let F=0;const M=x===!0?e:n,w=x===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),_++;const U=_;for(let W=0;W<=s;W++){const se=W/s*l+a,Q=Math.cos(se),K=Math.sin(se);P.x=M*K,P.y=m*w,P.z=M*Q,h.push(P.x,P.y,P.z),f.push(0,w,0),C.x=Q*.5+.5,C.y=K*.5*w+.5,d.push(C.x,C.y),_++}for(let W=0;W<s;W++){const Y=A+W,se=U+W;x===!0?u.push(se,se+1,Y):u.push(se+1,se,Y),F+=3}c.addGroup(p,F,x===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fd extends Nc{constructor(e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Fd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Od extends gn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new N,x=new N,A=new N;for(let C=0;C<n.length;C+=3)d(n[C+0],S),d(n[C+1],x),d(n[C+2],A),l(S,x,A,E)}function l(E,S,x,A){const C=A+1,P=[];for(let F=0;F<=C;F++){P[F]=[];const M=E.clone().lerp(x,F/C),w=S.clone().lerp(x,F/C),U=C-F;for(let W=0;W<=U;W++)W===0&&F===C?P[F][W]=M:P[F][W]=M.clone().lerp(w,W/U)}for(let F=0;F<C;F++)for(let M=0;M<2*(C-F)-1;M++){const w=Math.floor(M/2);M%2===0?(f(P[F][w+1]),f(P[F+1][w]),f(P[F][w])):(f(P[F][w+1]),f(P[F+1][w+1]),f(P[F+1][w]))}}function c(E){const S=new N;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(E),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function u(){const E=new N;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const x=m(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;o.push(x,1-A)}_(),h()}function h(){for(let E=0;E<o.length;E+=6){const S=o[E+0],x=o[E+2],A=o[E+4],C=Math.max(S,x,A),P=Math.min(S,x,A);C>.9&&P<.1&&(S<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,S){const x=E*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function _(){const E=new N,S=new N,x=new N,A=new N,C=new ue,P=new ue,F=new ue;for(let M=0,w=0;M<r.length;M+=9,w+=6){E.set(r[M+0],r[M+1],r[M+2]),S.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),C.set(o[w+0],o[w+1]),P.set(o[w+2],o[w+3]),F.set(o[w+4],o[w+5]),A.copy(E).add(S).add(x).divideScalar(3);const U=m(A);v(C,w+0,E,U),v(P,w+2,S,U),v(F,w+4,x,U)}}function v(E,S,x,A){A<0&&E.x===1&&(o[S]=E.x-1),x.x===0&&x.z===0&&(o[S]=A/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.vertices,e.indices,e.radius,e.detail)}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new ue:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new N,s=[],r=[],o=[],a=new N,l=new Tt;for(let d=0;d<=e;d++){const _=d/e;s[d]=this.getTangentAt(_,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,_))}o[d].crossVectors(s[d],r[d])}if(n===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bd extends ji{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ue){const i=n,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Xy extends Bd{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kd(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return t+e*r+n*o+i*a}}}const Pl=new N,Qu=new kd,eh=new kd,th=new kd;class _1 extends ji{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new N){const i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Pl.subVectors(s[0],s[1]).add(s[0]),c=Pl);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Pl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Qu.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,m),eh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,m),th.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(Qu.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),eh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),th.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Qu.calc(l),eh.calc(l),th.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function n0(t,e,n,i,s){const r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function qy(t,e){const n=1-t;return n*n*e}function Yy(t,e){return 2*(1-t)*t*e}function jy(t,e){return t*t*e}function ba(t,e,n,i){return qy(t,e)+Yy(t,n)+jy(t,i)}function Ky(t,e){const n=1-t;return n*n*n*e}function $y(t,e){const n=1-t;return 3*n*n*t*e}function Jy(t,e){return 3*(1-t)*t*t*e}function Zy(t,e){return t*t*t*e}function Ea(t,e,n,i,s){return Ky(t,e)+$y(t,n)+Jy(t,i)+Zy(t,s)}class v1 extends ji{constructor(e=new ue,n=new ue,i=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new ue){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qy extends ji{constructor(e=new N,n=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new N){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y),Ea(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x1 extends ji{constructor(e=new ue,n=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ue){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eS extends ji{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M1 extends ji{constructor(e=new ue,n=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ue){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class y1 extends ji{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ba(e,s.x,r.x,o.x),ba(e,s.y,r.y,o.y),ba(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends ji{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ue){const i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(n0(a,l.x,c.x,u.x,h.x),n0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new ue().fromArray(s))}return this}}var dc=Object.freeze({__proto__:null,ArcCurve:Xy,CatmullRomCurve3:_1,CubicBezierCurve:v1,CubicBezierCurve3:Qy,EllipseCurve:Bd,LineCurve:x1,LineCurve3:eS,QuadraticBezierCurve:M1,QuadraticBezierCurve3:y1,SplineCurve:S1});class tS extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dc[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(new dc[s.type]().fromJSON(s))}return this}}class i0 extends tS{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new x1(this.currentPoint.clone(),new ue(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){const r=new M1(this.currentPoint.clone(),new ue(e,n),new ue(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){const a=new v1(this.currentPoint.clone(),new ue(e,n),new ue(i,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new S1(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){const c=new Bd(e,n,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fc extends i0{constructor(e){super(e),this.uuid=Pr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(new i0().fromJSON(s))}return this}}function nS(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let r=b1(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=aS(t,e,r,n)),t.length>80*n){a=t[0],l=t[1];let u=a,h=l;for(let f=n;f<s;f+=n){const d=t[f],_=t[f+1];d<a&&(a=d),_<l&&(l=_),d>u&&(u=d),_>h&&(h=_)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Va(r,o,n,a,l,c,0),o}function b1(t,e,n,i,s){let r;if(s===vS(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=s0(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=s0(o/i|0,t[o],t[o+1],r);return r&&Mo(r,r.next)&&(Ha(r),r=r.next),r}function Tr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Mo(n,n.next)||Ft(n.prev,n,n.next)===0)){if(Ha(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Va(t,e,n,i,s,r,o){if(!t)return;!o&&r&&fS(t,i,s,r);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(r?sS(t,i,s,r):iS(t)){e.push(l.i,t.i,c.i),Ha(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=rS(Tr(t),e),Va(t,e,n,i,s,r,2)):o===2&&oS(t,e,n,i,s,r):Va(Tr(t),e,n,i,s,r,1);break}}}function iS(t){const e=t.prev,n=t,i=t.next;if(Ft(e,n,i)>=0)return!1;const s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=d&&la(s,a,r,l,o,c,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function sS(t,e,n,i){const s=t.prev,r=t,o=t.next;if(Ft(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),_=Math.min(u,h,f),v=Math.max(a,l,c),m=Math.max(u,h,f),p=Af(d,_,e,n,i),E=Af(v,m,e,n,i);let S=t.prevZ,x=t.nextZ;for(;S&&S.z>=p&&x&&x.z<=E;){if(S.x>=d&&S.x<=v&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&la(a,u,l,h,c,f,S.x,S.y)&&Ft(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&la(a,u,l,h,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=v&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&la(a,u,l,h,c,f,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=E;){if(x.x>=d&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&la(a,u,l,h,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function rS(t,e){let n=t;do{const i=n.prev,s=n.next.next;!Mo(i,s)&&T1(i,n,n.next,s)&&Ga(i,s)&&Ga(s,i)&&(e.push(i.i,n.i,s.i),Ha(n),Ha(n.next),n=t=s),n=n.next}while(n!==t);return Tr(n)}function oS(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mS(o,a)){let l=w1(o,a);o=Tr(o,o.next),l=Tr(l,l.next),Va(o,e,n,i,s,r,0),Va(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function aS(t,e,n,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=b1(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(pS(c))}s.sort(lS);for(let r=0;r<s.length;r++)n=cS(s[r],n);return n}function lS(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function cS(t,e){const n=uS(t,e);if(!n)return e;const i=w1(n,t);return Tr(i,i.next),Tr(n,n.next)}function uS(t,e){let n=e;const i=t.x,s=t.y;let r=-1/0,o;if(Mo(t,n))return n;do{if(Mo(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const h=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=i&&h>r&&(r=h,o=n.x<n.next.x?n:n.next,h===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&E1(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){const h=Math.abs(s-n.y)/(i-n.x);Ga(n,t)&&(h<u||h===u&&(n.x>o.x||n.x===o.x&&hS(o,n)))&&(o=n,u=h)}n=n.next}while(n!==a);return o}function hS(t,e){return Ft(t.prev,t,e.prev)<0&&Ft(e.next,t,t.next)<0}function fS(t,e,n,i){let s=t;do s.z===0&&(s.z=Af(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,dS(s)}function dS(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function Af(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function pS(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function E1(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function la(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&E1(t,e,n,i,s,r,o,a)}function mS(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!gS(t,e)&&(Ga(t,e)&&Ga(e,t)&&_S(t,e)&&(Ft(t.prev,t,e.prev)||Ft(t,e.prev,e))||Mo(t,e)&&Ft(t.prev,t,t.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Mo(t,e){return t.x===e.x&&t.y===e.y}function T1(t,e,n,i){const s=Dl(Ft(t,e,n)),r=Dl(Ft(t,e,i)),o=Dl(Ft(n,i,t)),a=Dl(Ft(n,i,e));return!!(s!==r&&o!==a||s===0&&Ll(t,n,e)||r===0&&Ll(t,i,e)||o===0&&Ll(n,t,i)||a===0&&Ll(n,e,i))}function Ll(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Dl(t){return t>0?1:t<0?-1:0}function gS(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&T1(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ga(t,e){return Ft(t.prev,t,t.next)<0?Ft(t,e,t.next)>=0&&Ft(t,t.prev,e)>=0:Ft(t,e,t.prev)<0||Ft(t,t.next,e)<0}function _S(t,e){let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function w1(t,e){const n=Cf(t.i,t.x,t.y),i=Cf(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function s0(t,e,n,i){const s=Cf(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ha(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Cf(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vS(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}class xS{static triangulate(e,n,i=2){return nS(e,n,i)}}class cs{static area(e){const n=e.length;let i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return cs.area(e)<0}static triangulateShape(e,n){const i=[],s=[],r=[];r0(e),o0(i,e);let o=e.length;n.forEach(r0);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,o0(i,n[l]);const a=xS.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function r0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function o0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class zd extends gn{constructor(e=new Fc([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,d=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:d-.1,v=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const p=n.extrudePath,E=n.UVGenerator!==void 0?n.UVGenerator:MS;let S,x=!1,A,C,P,F;if(p){S=p.getSpacedPoints(u),x=!0,f=!1;const D=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,D),C=new N,P=new N,F=new N}f||(m=0,d=0,_=0,v=0);const M=a.extractPoints(c);let w=M.shape;const U=M.holes;if(!cs.isClockWise(w)){w=w.reverse();for(let D=0,k=U.length;D<k;D++){const O=U[D];cs.isClockWise(O)&&(U[D]=O.reverse())}}function Y(D){const O=10000000000000001e-36;let G=D[0];for(let b=1;b<=D.length;b++){const ne=b%D.length,j=D[ne],$=j.x-G.x,te=j.y-G.y,y=$*$+te*te,g=Math.max(Math.abs(j.x),Math.abs(j.y),Math.abs(G.x),Math.abs(G.y)),L=O*g*g;if(y<=L){D.splice(ne,1),b--;continue}G=j}}Y(w),U.forEach(Y);const se=U.length,Q=w;for(let D=0;D<se;D++){const k=U[D];w=w.concat(k)}function K(D,k,O){return k||rt("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(k,O)}const V=w.length;function ie(D,k,O){let G,b,ne;const j=D.x-k.x,$=D.y-k.y,te=O.x-D.x,y=O.y-D.y,g=j*j+$*$,L=j*y-$*te;if(Math.abs(L)>Number.EPSILON){const H=Math.sqrt(g),ee=Math.sqrt(te*te+y*y),X=k.x-$/H,xe=k.y+j/H,ce=O.x-y/ee,be=O.y+te/ee,Ie=((ce-X)*y-(be-xe)*te)/(j*y-$*te);G=X+j*Ie-D.x,b=xe+$*Ie-D.y;const le=G*G+b*b;if(le<=2)return new ue(G,b);ne=Math.sqrt(le/2)}else{let H=!1;j>Number.EPSILON?te>Number.EPSILON&&(H=!0):j<-Number.EPSILON?te<-Number.EPSILON&&(H=!0):Math.sign($)===Math.sign(y)&&(H=!0),H?(G=-$,b=j,ne=Math.sqrt(g)):(G=j,b=$,ne=Math.sqrt(g/2))}return new ue(G/ne,b/ne)}const me=[];for(let D=0,k=Q.length,O=k-1,G=D+1;D<k;D++,O++,G++)O===k&&(O=0),G===k&&(G=0),me[D]=ie(Q[D],Q[O],Q[G]);const pe=[];let de,ke=me.concat();for(let D=0,k=se;D<k;D++){const O=U[D];de=[];for(let G=0,b=O.length,ne=b-1,j=G+1;G<b;G++,ne++,j++)ne===b&&(ne=0),j===b&&(j=0),de[G]=ie(O[G],O[ne],O[j]);pe.push(de),ke=ke.concat(de)}let We;if(m===0)We=cs.triangulateShape(Q,U);else{const D=[],k=[];for(let O=0;O<m;O++){const G=O/m,b=d*Math.cos(G*Math.PI/2),ne=_*Math.sin(G*Math.PI/2)+v;for(let j=0,$=Q.length;j<$;j++){const te=K(Q[j],me[j],ne);ze(te.x,te.y,-b),G===0&&D.push(te)}for(let j=0,$=se;j<$;j++){const te=U[j];de=pe[j];const y=[];for(let g=0,L=te.length;g<L;g++){const H=K(te[g],de[g],ne);ze(H.x,H.y,-b),G===0&&y.push(H)}G===0&&k.push(y)}}We=cs.triangulateShape(D,k)}const ft=We.length,dt=_+v;for(let D=0;D<V;D++){const k=f?K(w[D],ke[D],dt):w[D];x?(P.copy(A.normals[0]).multiplyScalar(k.x),C.copy(A.binormals[0]).multiplyScalar(k.y),F.copy(S[0]).add(P).add(C),ze(F.x,F.y,F.z)):ze(k.x,k.y,0)}for(let D=1;D<=u;D++)for(let k=0;k<V;k++){const O=f?K(w[k],ke[k],dt):w[k];x?(P.copy(A.normals[D]).multiplyScalar(O.x),C.copy(A.binormals[D]).multiplyScalar(O.y),F.copy(S[D]).add(P).add(C),ze(F.x,F.y,F.z)):ze(O.x,O.y,h/u*D)}for(let D=m-1;D>=0;D--){const k=D/m,O=d*Math.cos(k*Math.PI/2),G=_*Math.sin(k*Math.PI/2)+v;for(let b=0,ne=Q.length;b<ne;b++){const j=K(Q[b],me[b],G);ze(j.x,j.y,h+O)}for(let b=0,ne=U.length;b<ne;b++){const j=U[b];de=pe[b];for(let $=0,te=j.length;$<te;$++){const y=K(j[$],de[$],G);x?ze(y.x,y.y+S[u-1].y,S[u-1].x+O):ze(y.x,y.y,h+O)}}}re(),ae();function re(){const D=s.length/3;if(f){let k=0,O=V*k;for(let G=0;G<ft;G++){const b=We[G];we(b[2]+O,b[1]+O,b[0]+O)}k=u+m*2,O=V*k;for(let G=0;G<ft;G++){const b=We[G];we(b[0]+O,b[1]+O,b[2]+O)}}else{for(let k=0;k<ft;k++){const O=We[k];we(O[2],O[1],O[0])}for(let k=0;k<ft;k++){const O=We[k];we(O[0]+V*u,O[1]+V*u,O[2]+V*u)}}i.addGroup(D,s.length/3-D,0)}function ae(){const D=s.length/3;let k=0;Ae(Q,k),k+=Q.length;for(let O=0,G=U.length;O<G;O++){const b=U[O];Ae(b,k),k+=b.length}i.addGroup(D,s.length/3-D,1)}function Ae(D,k){let O=D.length;for(;--O>=0;){const G=O;let b=O-1;b<0&&(b=D.length-1);for(let ne=0,j=u+m*2;ne<j;ne++){const $=V*ne,te=V*(ne+1),y=k+G+$,g=k+b+$,L=k+b+te,H=k+G+te;it(y,g,L,H)}}}function ze(D,k,O){l.push(D),l.push(k),l.push(O)}function we(D,k,O){R(D),R(k),R(O);const G=s.length/3,b=E.generateTopUV(i,s,G-3,G-2,G-1);I(b[0]),I(b[1]),I(b[2])}function it(D,k,O,G){R(D),R(k),R(G),R(k),R(O),R(G);const b=s.length/3,ne=E.generateSideWallUV(i,s,b-6,b-3,b-2,b-1);I(ne[0]),I(ne[1]),I(ne[3]),I(ne[1]),I(ne[2]),I(ne[3])}function R(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function I(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return yS(n,i,e)}static fromJSON(e,n){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=n[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dc[s.type]().fromJSON(s)),new zd(i,e.options)}}const MS={generateTopUV:function(t,e,n,i,s){const r=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new ue(r,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],h=e[i*3+2],f=e[s*3],d=e[s*3+1],_=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(f,1-_),new ue(v,1-p)]:[new ue(a,1-l),new ue(u,1-h),new ue(d,1-_),new ue(m,1-p)]}};function yS(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class tl extends gn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=n/l,d=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*f-o;for(let S=0;S<c;S++){const x=S*h-r;_.push(x,-E,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const S=E+c*p,x=E+c*(p+1),A=E+1+c*(p+1),C=E+1+c*p;d.push(S,x,C),d.push(x,A,C)}this.setIndex(d),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vd extends gn{constructor(e=new Fc([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(o,2));function c(u){const h=s.length/3,f=u.extractPoints(n);let d=f.shape;const _=f.holes;cs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const E=_[m];cs.isClockWise(E)===!0&&(_[m]=E.reverse())}const v=cs.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const E=_[m];d=d.concat(E)}for(let m=0,p=d.length;m<p;m++){const E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,p=v.length;m<p;m++){const E=v[m],S=E[0]+h,x=E[1]+h,A=E[2]+h;i.push(S,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return SS(n,e)}static fromJSON(e,n){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=n[e.shapes[s]];i.push(o)}return new Vd(i,e.curveSegments)}}function SS(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class pc extends gn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const E=[],S=p/i;let x=0;p===0&&o===0?x=.5/n:p===i&&l===Math.PI&&(x=-.5/n);for(let A=0;A<=n;A++){const C=A/n;h.x=-e*Math.cos(s+C*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(C+x,1-S),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<n;E++){const S=u[p][E+1],x=u[p][E],A=u[p+1][E],C=u[p+1][E+1];(p!==0||o>0)&&d.push(S,x,C),(p!==i-1||l<Math.PI)&&d.push(x,A,C)}this.setIndex(d),this.setAttribute("position",new yt(_,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gd extends Od{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Gd(e.radius,e.detail)}}class Hd extends gn{constructor(e=new y1(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};const o=e.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new ue;let u=new N;const h=[],f=[],d=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(d,2));function v(){for(let S=0;S<n;S++)m(S);m(r===!1?n:0),E(),p()}function m(S){u=e.getPointAt(S/n,u);const x=o.normals[S],A=o.binormals[S];for(let C=0;C<=s;C++){const P=C/s*Math.PI*2,F=Math.sin(P),M=-Math.cos(P);l.x=M*x.x+F*A.x,l.y=M*x.y+F*A.y,l.z=M*x.z+F*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){const A=(s+1)*(S-1)+(x-1),C=(s+1)*S+(x-1),P=(s+1)*S+x,F=(s+1)*(S-1)+x;_.push(A,C,F),_.push(C,P,F)}}function E(){for(let S=0;S<=n;S++)for(let x=0;x<=s;x++)c.x=S/n,c.y=x/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Hd(new dc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class bS extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vi extends No{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ES extends vi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class TS extends No{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wS extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AS extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class CS{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const RS=new CS;class Wd{constructor(e){this.manager=e!==void 0?e:RS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kr=new WeakMap;class PS extends Wd{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=nh.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0);else{let h=Kr.get(o);h===void 0&&(h=[],Kr.set(o,h)),h.push({onLoad:n,onError:s})}return o}const a=Oa("img");function l(){u(),n&&n(this);const h=Kr.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Kr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),nh.remove(`image:${e}`);const f=Kr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(h)}Kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),nh.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class A1 extends Wd{constructor(e){super(e)}load(e,n,i,s){const r=new ln,o=new PS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Oc extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ih=new Tt,a0=new N,l0=new N;class Xd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;a0.setFromMatrixPosition(e.matrixWorld),n.position.copy(a0),l0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(l0),n.updateMatrixWorld(),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LS extends Xd{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class c0 extends Oc{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new LS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class DS extends Xd{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class C1 extends Oc{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new DS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Bc extends u1{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IS extends Xd{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class US extends Oc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new IS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class NS extends Oc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class FS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class R1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function u0(t,e,n,i){const s=OS(i);switch(n){case t1:return t*e;case Td:return t*e/s.components*s.byteLength;case wd:return t*e/s.components*s.byteLength;case go:return t*e*2/s.components*s.byteLength;case Ad:return t*e*2/s.components*s.byteLength;case n1:return t*e*3/s.components*s.byteLength;case Mi:return t*e*4/s.components*s.byteLength;case Cd:return t*e*4/s.components*s.byteLength;case Wl:case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ql:case Yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kh:case Jh:return Math.max(t,16)*Math.max(e,8)/4;case jh:case $h:return Math.max(t,8)*Math.max(e,8)/2;case Zh:case Qh:case tf:case nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ef:case sf:case rf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mf:case yf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bf:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tf:case wf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OS(t){switch(t){case qn:case J_:return{byteLength:1,components:1};case Na:case Z_:case jn:return{byteLength:2,components:1};case bd:case Ed:return{byteLength:2,components:4};case Xi:case Sd:case xi:return{byteLength:4,components:1};case Q_:case e1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xd}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xd);function P1(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function BS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=t.SHORT;else if(c instanceof Uint32Array)d=t.UNSIGNED_INT;else if(c instanceof Int32Array)d=t.INT;else if(c instanceof Int8Array)d=t.BYTE;else if(c instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],v=h[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const v=h[d];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,VS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
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
#endif`,jS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZS=`#ifdef USE_IRIDESCENCE
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
#endif`,QS=`#ifdef USE_BUMPMAP
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
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lb=`#define PI 3.141592653589793
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
} // validated`,cb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ub=`vec3 transformedNormal = objectNormal;
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
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,db=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",gb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_b=`#ifdef USE_ENVMAP
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
#endif`,vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
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
}`,Ab=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pb=`uniform bool receiveShadow;
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
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ub=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fb=`PhysicalMaterial material;
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
#endif`,Ob=`uniform sampler2D dfgLUT;
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
}`,Bb=`
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
#endif`,kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jb=`#if defined( USE_POINTS_UV )
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
#endif`,Kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
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
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bE=`float getShadowMask() {
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
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
}`,XE=`#if DEPTH_PACKING == 3200
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
}`,qE=`#define DISTANCE
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
}`,YE=`#define DISTANCE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
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
}`,JE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,sT=`#define NORMAL
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
}`,rT=`#define NORMAL
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
}`,oT=`#define PHONG
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
}`,aT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,hT=`#define TOON
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
}`,fT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:kS,alphahash_pars_fragment:zS,alphamap_fragment:VS,alphamap_pars_fragment:GS,alphatest_fragment:HS,alphatest_pars_fragment:WS,aomap_fragment:XS,aomap_pars_fragment:qS,batching_pars_vertex:YS,batching_vertex:jS,begin_vertex:KS,beginnormal_vertex:$S,bsdfs:JS,iridescence_fragment:ZS,bumpmap_pars_fragment:QS,clipping_planes_fragment:eb,clipping_planes_pars_fragment:tb,clipping_planes_pars_vertex:nb,clipping_planes_vertex:ib,color_fragment:sb,color_pars_fragment:rb,color_pars_vertex:ob,color_vertex:ab,common:lb,cube_uv_reflection_fragment:cb,defaultnormal_vertex:ub,displacementmap_pars_vertex:hb,displacementmap_vertex:fb,emissivemap_fragment:db,emissivemap_pars_fragment:pb,colorspace_fragment:mb,colorspace_pars_fragment:gb,envmap_fragment:_b,envmap_common_pars_fragment:vb,envmap_pars_fragment:xb,envmap_pars_vertex:Mb,envmap_physical_pars_fragment:Lb,envmap_vertex:yb,fog_vertex:Sb,fog_pars_vertex:bb,fog_fragment:Eb,fog_pars_fragment:Tb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Ab,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:Rb,lights_pars_begin:Pb,lights_toon_fragment:Db,lights_toon_pars_fragment:Ib,lights_phong_fragment:Ub,lights_phong_pars_fragment:Nb,lights_physical_fragment:Fb,lights_physical_pars_fragment:Ob,lights_fragment_begin:Bb,lights_fragment_maps:kb,lights_fragment_end:zb,logdepthbuf_fragment:Vb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Hb,logdepthbuf_vertex:Wb,map_fragment:Xb,map_pars_fragment:qb,map_particle_fragment:Yb,map_particle_pars_fragment:jb,metalnessmap_fragment:Kb,metalnessmap_pars_fragment:$b,morphinstance_vertex:Jb,morphcolor_vertex:Zb,morphnormal_vertex:Qb,morphtarget_pars_vertex:eE,morphtarget_vertex:tE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:sE,normal_pars_vertex:rE,normal_vertex:oE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:hE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:bE,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:wE,skinnormal_vertex:AE,specularmap_fragment:CE,specularmap_pars_fragment:RE,tonemapping_fragment:PE,tonemapping_pars_fragment:LE,transmission_fragment:DE,transmission_pars_fragment:IE,uv_pars_fragment:UE,uv_pars_vertex:NE,uv_vertex:FE,worldpos_vertex:OE,background_vert:BE,background_frag:kE,backgroundCube_vert:zE,backgroundCube_frag:VE,cube_vert:GE,cube_frag:HE,depth_vert:WE,depth_frag:XE,distance_vert:qE,distance_frag:YE,equirect_vert:jE,equirect_frag:KE,linedashed_vert:$E,linedashed_frag:JE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:sT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:aT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:hT,points_vert:fT,points_frag:dT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Bi={basic:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Mn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Mn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Mn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Mn([Se.points,Se.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Mn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Mn([Se.common,Se.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Mn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Mn([Se.sprite,Se.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Mn([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Mn([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Bi.physical={uniforms:Mn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Il={r:0,b:0,g:0},cr=new bi,vT=new Tt;function xT(t,e,n,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?n:e).get(x)),x}function v(S){let x=!1;const A=_(S);A===null?p(a,l):A&&A.isColor&&(p(A,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===Uc)?(u===void 0&&(u=new ht(new Js(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:xo(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(cr)),u.material.toneMapped=ot.getTransfer(A.colorSpace)!==xt,(h!==A||f!==A.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,d=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ht(new tl(2,2),new pn({name:"BackgroundMaterial",uniforms:xo(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:js,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(A.colorSpace)!==xt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Il,c1(t)),i.buffers.color.setClear(Il.r,Il.g,Il.b,x,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:v,addToRenderList:m,dispose:E}}function MT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,U,W,Y,se){let Q=!1;const K=h(Y,W,U);r!==K&&(r=K,c(r.object)),Q=d(w,Y,W,se),Q&&_(w,Y,W,se),se!==null&&e.update(se,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(w,U,W,Y),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function h(w,U,W){const Y=W.wireframe===!0;let se=i[w.id];se===void 0&&(se={},i[w.id]=se);let Q=se[U.id];Q===void 0&&(Q={},se[U.id]=Q);let K=Q[Y];return K===void 0&&(K=f(l()),Q[Y]=K),K}function f(w){const U=[],W=[],Y=[];for(let se=0;se<n;se++)U[se]=0,W[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:Y,object:w,attributes:{},index:null}}function d(w,U,W,Y){const se=r.attributes,Q=U.attributes;let K=0;const V=W.getAttributes();for(const ie in V)if(V[ie].location>=0){const pe=se[ie];let de=Q[ie];if(de===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),pe===void 0||pe.attribute!==de||de&&pe.data!==de.data)return!0;K++}return r.attributesNum!==K||r.index!==Y}function _(w,U,W,Y){const se={},Q=U.attributes;let K=0;const V=W.getAttributes();for(const ie in V)if(V[ie].location>=0){let pe=Q[ie];pe===void 0&&(ie==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),ie==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const de={};de.attribute=pe,pe&&pe.data&&(de.data=pe.data),se[ie]=de,K++}r.attributes=se,r.attributesNum=K,r.index=Y}function v(){const w=r.newAttributes;for(let U=0,W=w.length;U<W;U++)w[U]=0}function m(w){p(w,0)}function p(w,U){const W=r.newAttributes,Y=r.enabledAttributes,se=r.attributeDivisors;W[w]=1,Y[w]===0&&(t.enableVertexAttribArray(w),Y[w]=1),se[w]!==U&&(t.vertexAttribDivisor(w,U),se[w]=U)}function E(){const w=r.newAttributes,U=r.enabledAttributes;for(let W=0,Y=U.length;W<Y;W++)U[W]!==w[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function S(w,U,W,Y,se,Q,K){K===!0?t.vertexAttribIPointer(w,U,W,se,Q):t.vertexAttribPointer(w,U,W,Y,se,Q)}function x(w,U,W,Y){v();const se=Y.attributes,Q=W.getAttributes(),K=U.defaultAttributeValues;for(const V in Q){const ie=Q[V];if(ie.location>=0){let me=se[V];if(me===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),me!==void 0){const pe=me.normalized,de=me.itemSize,ke=e.get(me);if(ke===void 0)continue;const We=ke.buffer,ft=ke.type,dt=ke.bytesPerElement,re=ft===t.INT||ft===t.UNSIGNED_INT||me.gpuType===Sd;if(me.isInterleavedBufferAttribute){const ae=me.data,Ae=ae.stride,ze=me.offset;if(ae.isInstancedInterleavedBuffer){for(let we=0;we<ie.locationSize;we++)p(ie.location+we,ae.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let we=0;we<ie.locationSize;we++)m(ie.location+we);t.bindBuffer(t.ARRAY_BUFFER,We);for(let we=0;we<ie.locationSize;we++)S(ie.location+we,de/ie.locationSize,ft,pe,Ae*dt,(ze+de/ie.locationSize*we)*dt,re)}else{if(me.isInstancedBufferAttribute){for(let ae=0;ae<ie.locationSize;ae++)p(ie.location+ae,me.meshPerAttribute);w.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ae=0;ae<ie.locationSize;ae++)m(ie.location+ae);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ae=0;ae<ie.locationSize;ae++)S(ie.location+ae,de/ie.locationSize,ft,pe,de*dt,de/ie.locationSize*ae*dt,re)}}else if(K!==void 0){const pe=K[V];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(ie.location,pe);break;case 3:t.vertexAttrib3fv(ie.location,pe);break;case 4:t.vertexAttrib4fv(ie.location,pe);break;default:t.vertexAttrib1fv(ie.location,pe)}}}}E()}function A(){F();for(const w in i){const U=i[w];for(const W in U){const Y=U[W];for(const se in Y)u(Y[se].object),delete Y[se];delete U[W]}delete i[w]}}function C(w){if(i[w.id]===void 0)return;const U=i[w.id];for(const W in U){const Y=U[W];for(const se in Y)u(Y[se].object),delete Y[se];delete U[W]}delete i[w.id]}function P(w){for(const U in i){const W=i[U];if(W[w.id]===void 0)continue;const Y=W[w.id];for(const se in Y)u(Y[se].object),delete Y[se];delete W[w.id]}}function F(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function yT(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];n.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ST(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Mi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xi&&!F)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,maxSamples:A,samples:C}}function bT(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new dr,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const E=r?0:i,S=E*4;let x=p.clippingState||null;l.value=x,x=u(_,f,S,d);for(let A=0;A!==S;++A)x[A]=n[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=d+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==v;++S,x+=4)o.copy(h[S]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ET(t){let e=new WeakMap;function n(o,a){return a===Xh?o.mapping=br:a===qh&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xh||a===qh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new f1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Os=4,h0=[.125,.215,.35,.446,.526,.582],gr=20,TT=256,na=new Bc,f0=new $e;let sh=null,rh=0,oh=0,ah=!1;const wT=new N;class Rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=wT}=r;sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sh,rh,oh),this._renderer.xr.enabled=ah,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===br||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sh=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),oh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:jn,format:Mi,colorSpace:_o,depthBuffer:!1},s=d0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=d0(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AT(r)),this._blurMaterial=RT(r,e,n),this._ggxMaterial=CT(r,e,n)}return s}_compileMaterial(e){const n=new ht(new gn,e);this._renderer.compile(n,na)}_sceneToCubeUV(e,n,i,s,r){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(f0),h.toneMapping=Hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Js,new ka({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(f0),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const A=this._cubeSize;$r(s,x*A,S>2?A:0,A,A),h.setRenderTarget(s),p&&h.render(v,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===br||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,na)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Os?i-_+Os:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-n,$r(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,na),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,$r(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,na)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gr-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):gr;m>gr&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const p=[];let E=0;for(let P=0;P<gr;++P){const F=P/v,M=Math.exp(-F*F/2);p.push(M),P===0?E+=M:P<m&&(E+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-i;const x=this._sizeLods[s],A=3*x*(s>S-Os?s-S+Os:0),C=4*(this._cubeSize-x);$r(n,A,C,3*x,2*x),l.setRenderTarget(n),l.render(h,na)}}function AT(t){const e=[],n=[],i=[];let s=t;const r=t-Os+1+h0.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-Os?l=h0[o-t+Os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,v=3,m=2,p=1,E=new Float32Array(v*_*d),S=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,F=C>2?0:-1,M=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];E.set(M,v*_*C),S.set(f,m*_*C);const w=[C,C,C,C,C,C];x.set(w,p*_*C)}const A=new gn;A.setAttribute("position",new Si(E,v)),A.setAttribute("uv",new Si(S,m)),A.setAttribute("faceIndex",new Si(x,p)),i.push(new ht(A,null)),s>Os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function d0(t,e,n){const i=new Un(t,e,n);return i.texture.mapping=Uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function CT(t,e,n){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function RT(t,e,n){const i=new Float32Array(gr),s=new N(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function p0(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function m0(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function PT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xh||l===qh,u=l===br||l===mo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Rf(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(n===null&&(n=new Rf(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Ba("WebGLRenderer: "+i+" extension not supported."),s}}}function DT(t,e,n,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],t.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let S=0,x=E.length;S<x;S+=3){const A=E[S+0],C=E[S+1],P=E[S+2];f.push(A,C,C,P,P,A)}}else if(_!==void 0){const E=_.array;v=_.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const A=S+0,C=S+1,P=S+2;f.push(A,C,C,P,P,A)}}else return;const m=new(i1(f)?l1:a1)(f,1);m.version=v;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function IT(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,_){_!==0&&(t.drawElementsInstanced(i,d,r,f*o,_),n.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];n.update(m,i,1)}function h(f,d,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,_);let p=0;for(let E=0;E<_;E++)p+=d[E]*v[E];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function UT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function NT(t,e,n){const i=new WeakMap,s=new Gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let w=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var d=w;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const P=new Float32Array(A*C*4*h),F=new s1(P,A,C,h);F.type=xi,F.needsUpdate=!0;const M=x*4;for(let U=0;U<h;U++){const W=p[U],Y=E[U],se=S[U],Q=A*C*4*U;for(let K=0;K<W.count;K++){const V=K*M;_===!0&&(s.fromBufferAttribute(W,K),P[Q+V+0]=s.x,P[Q+V+1]=s.y,P[Q+V+2]=s.z,P[Q+V+3]=0),v===!0&&(s.fromBufferAttribute(Y,K),P[Q+V+4]=s.x,P[Q+V+5]=s.y,P[Q+V+6]=s.z,P[Q+V+7]=0),m===!0&&(s.fromBufferAttribute(se,K),P[Q+V+8]=s.x,P[Q+V+9]=s.y,P[Q+V+10]=s.z,P[Q+V+11]=se.itemSize===4?s.w:1)}}f={count:h,texture:F,size:new ue(A,C)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function FT(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const OT={[W_]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[X_]:"CINEON_TONE_MAPPING",[q_]:"ACES_FILMIC_TONE_MAPPING",[j_]:"AGX_TONE_MAPPING",[K_]:"NEUTRAL_TONE_MAPPING",[Y_]:"CUSTOM_TONE_MAPPING"};function BT(t,e,n,i,s){const r=new Un(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),o=new Un(e,n,{type:jn,depthBuffer:!1,stencilBuffer:!1}),a=new gn;a.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new yt([0,2,0,0,2,0],2));const l=new bS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ht(a,l),u=new Bc(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,v=null,m=[],p=!1;this.setSize=function(E,S){r.setSize(E,S),o.setSize(E,S);for(let x=0;x<m.length;x++){const A=m[x];A.setSize&&A.setSize(E,S)}},this.setEffects=function(E){m=E,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,x=r.height;for(let A=0;A<m.length;A++){const C=m[A];C.setSize&&C.setSize(S,x)}},this.begin=function(E,S){if(d||E.toneMapping===Hi&&m.length===0)return!1;if(v=S,S!==null){const x=S.width,A=S.height;(r.width!==x||r.height!==A)&&this.setSize(x,A)}return p===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=Hi,!0},this.hasRenderPass=function(){return p},this.end=function(E,S){E.toneMapping=_,d=!0;let x=r,A=o;for(let C=0;C<m.length;C++){const P=m[C];if(P.enabled!==!1&&(P.render(E,A,x,S),P.needsSwap!==!1)){const F=x;x=A,A=F}}if(h!==E.outputColorSpace||f!==E.toneMapping){h=E.outputColorSpace,f=E.toneMapping,l.defines={},ot.getTransfer(h)===xt&&(l.defines.SRGB_TRANSFER="");const C=OT[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(v),E.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const L1=new ln,Pf=new za(1,1),D1=new s1,I1=new yy,U1=new h1,g0=[],_0=[],v0=new Float32Array(16),x0=new Float32Array(9),M0=new Float32Array(4);function Fo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=g0[s];if(r===void 0&&(r=new Float32Array(s),g0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zc(t,e){let n=_0[e];n===void 0&&(n=new Int32Array(e),_0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function HT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;M0.set(i),t.uniformMatrix2fv(this.addr,!1,M0),tn(n,i)}}function WT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;x0.set(i),t.uniformMatrix3fv(this.addr,!1,x0),tn(n,i)}}function XT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;v0.set(i),t.uniformMatrix4fv(this.addr,!1,v0),tn(n,i)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function $T(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function ew(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Pf.compareFunction=n.isReversedDepthBuffer()?Ld:Pd,r=Pf):r=L1,n.setTexture2D(e||r,s)}function tw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||I1,s)}function nw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||U1,s)}function iw(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||D1,s)}function sw(t){switch(t){case 5126:return kT;case 35664:return zT;case 35665:return VT;case 35666:return GT;case 35674:return HT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return jT;case 35669:case 35673:return KT;case 5125:return $T;case 36294:return JT;case 36295:return ZT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}function rw(t,e){t.uniform1fv(this.addr,e)}function ow(t,e){const n=Fo(e,this.size,2);t.uniform2fv(this.addr,n)}function aw(t,e){const n=Fo(e,this.size,3);t.uniform3fv(this.addr,n)}function lw(t,e){const n=Fo(e,this.size,4);t.uniform4fv(this.addr,n)}function cw(t,e){const n=Fo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uw(t,e){const n=Fo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hw(t,e){const n=Fo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fw(t,e){t.uniform1iv(this.addr,e)}function dw(t,e){t.uniform2iv(this.addr,e)}function pw(t,e){t.uniform3iv(this.addr,e)}function mw(t,e){t.uniform4iv(this.addr,e)}function gw(t,e){t.uniform1uiv(this.addr,e)}function _w(t,e){t.uniform2uiv(this.addr,e)}function vw(t,e){t.uniform3uiv(this.addr,e)}function xw(t,e){t.uniform4uiv(this.addr,e)}function Mw(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Pf:o=L1;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function yw(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||I1,r[o])}function Sw(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||U1,r[o])}function bw(t,e,n){const i=this.cache,s=e.length,r=zc(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||D1,r[o])}function Ew(t){switch(t){case 5126:return rw;case 35664:return ow;case 35665:return aw;case 35666:return lw;case 35674:return cw;case 35675:return uw;case 35676:return hw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return pw;case 35669:case 35673:return mw;case 5125:return gw;case 36294:return _w;case 36295:return vw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return bw}}class Tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sw(n.type)}}class ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ew(n.type)}}class Aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function y0(t,e){t.seq.push(e),t.map[e.id]=e}function Cw(t,e,n){const i=t.name,s=i.length;for(lh.lastIndex=0;;){const r=lh.exec(i),o=lh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){y0(n,c===void 0?new Tw(a,t,e):new ww(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Aw(a),y0(n,h)),n=h}}}class jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Cw(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function S0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Rw=37297;let Pw=0;function Lw(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const b0=new Je;function Dw(t){ot._getMatrix(b0,ot.workingColorSpace,t);const e=`mat3( ${b0.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case cc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function E0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Lw(t.getShaderSource(e),a)}else return r}function Iw(t,e){const n=Dw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Uw={[W_]:"Linear",[yd]:"Reinhard",[X_]:"Cineon",[q_]:"ACESFilmic",[j_]:"AgX",[K_]:"Neutral",[Y_]:"Custom"};function Nw(t,e){const n=Uw[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new N;function Fw(){ot.getLuminanceCoefficients(Ul);const t=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ow(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Bw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ca(t){return t!==""}function T0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(t){return t.replace(zw,Gw)}const Vw=new Map;function Gw(t,e){let n=Ze[e];if(n===void 0){const i=Vw.get(e);if(i!==void 0)n=Ze[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lf(n)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(t){return t.replace(Hw,Ww)}function Ww(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function C0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Xw={[Hl]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function qw(t){return Xw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yw={[br]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[Uc]:"ENVMAP_TYPE_CUBE_UV"};function jw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Yw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kw={[mo]:"ENVMAP_MODE_REFRACTION"};function $w(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Kw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jw={[Md]:"ENVMAP_BLENDING_MULTIPLY",[zM]:"ENVMAP_BLENDING_MIX",[VM]:"ENVMAP_BLENDING_ADD"};function Zw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[t.combine]||"ENVMAP_BLENDING_NONE"}function Qw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function eA(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=qw(n),c=jw(n),u=$w(n),h=Zw(n),f=Qw(n),d=Ow(n),_=Bw(r),v=s.createProgram();let m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(m=[C0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[C0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Hi?Nw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Iw("linearToOutputTexel",n.outputColorSpace),Fw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),o=Lf(o),o=T0(o,n),o=w0(o,n),a=Lf(a),a=T0(a,n),a=w0(a,n),o=A0(o),a=A0(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+o,x=E+p+a,A=S0(s,s.VERTEX_SHADER,S),C=S0(s,s.FRAGMENT_SHADER,x);s.attachShader(v,A),s.attachShader(v,C),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(U){if(t.debug.checkShaderErrors){const W=s.getProgramInfoLog(v)||"",Y=s.getShaderInfoLog(A)||"",se=s.getShaderInfoLog(C)||"",Q=W.trim(),K=Y.trim(),V=se.trim();let ie=!0,me=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,A,C);else{const pe=E0(s,A,"vertex"),de=E0(s,C,"fragment");rt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+pe+`
`+de)}else Q!==""?qe("WebGLProgram: Program Info Log:",Q):(K===""||V==="")&&(me=!1);me&&(U.diagnostics={runnable:ie,programLog:Q,vertexShader:{log:K,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(A),s.deleteShader(C),F=new jl(s,v),M=kw(s,v)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,Rw)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=C,this}let tA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iA(e),n.set(e,i)),i}}class iA{constructor(e){this.id=tA++,this.code=e,this.usedTimes=0}}function sA(t,e,n,i,s,r,o){const a=new r1,l=new nA,c=new Set,u=[],h=new Map,f=s.logarithmicDepthBuffer;let d=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,w,U,W,Y){const se=W.fog,Q=Y.geometry,K=M.isMeshStandardMaterial?W.environment:null,V=(M.isMeshStandardMaterial?n:e).get(M.envMap||K),ie=V&&V.mapping===Uc?V.image.height:null,me=_[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&qe("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,de=pe!==void 0?pe.length:0;let ke=0;Q.morphAttributes.position!==void 0&&(ke=1),Q.morphAttributes.normal!==void 0&&(ke=2),Q.morphAttributes.color!==void 0&&(ke=3);let We,ft,dt,re;if(me){const _t=Bi[me];We=_t.vertexShader,ft=_t.fragmentShader}else We=M.vertexShader,ft=M.fragmentShader,l.update(M),dt=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);const ae=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),ze=Y.isInstancedMesh===!0,we=Y.isBatchedMesh===!0,it=!!M.map,R=!!M.matcap,I=!!V,D=!!M.aoMap,k=!!M.lightMap,O=!!M.bumpMap,G=!!M.normalMap,b=!!M.displacementMap,ne=!!M.emissiveMap,j=!!M.metalnessMap,$=!!M.roughnessMap,te=M.anisotropy>0,y=M.clearcoat>0,g=M.dispersion>0,L=M.iridescence>0,H=M.sheen>0,ee=M.transmission>0,X=te&&!!M.anisotropyMap,xe=y&&!!M.clearcoatMap,ce=y&&!!M.clearcoatNormalMap,be=y&&!!M.clearcoatRoughnessMap,Ie=L&&!!M.iridescenceMap,le=L&&!!M.iridescenceThicknessMap,_e=H&&!!M.sheenColorMap,Me=H&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,ge=!!M.specularColorMap,je=!!M.specularIntensityMap,B=ee&&!!M.transmissionMap,Te=ee&&!!M.thicknessMap,fe=!!M.gradientMap,Re=!!M.alphaMap,he=M.alphaTest>0,oe=!!M.alphaHash,ve=!!M.extensions;let Ye=Hi;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ye=t.toneMapping);const wt={shaderID:me,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:ft,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:we,batchingColor:we&&Y._colorsTexture!==null,instancing:ze,instancingColor:ze&&Y.instanceColor!==null,instancingMorph:ze&&Y.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:_o,alphaToCoverage:!!M.alphaToCoverage,map:it,matcap:R,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:ie,aoMap:D,lightMap:k,bumpMap:O,normalMap:G,displacementMap:b,emissiveMap:ne,normalMapObjectSpace:G&&M.normalMapType===WM,normalMapTangentSpace:G&&M.normalMapType===Rd,metalnessMap:j,roughnessMap:$,anisotropy:te,anisotropyMap:X,clearcoat:y,clearcoatMap:xe,clearcoatNormalMap:ce,clearcoatRoughnessMap:be,dispersion:g,iridescence:L,iridescenceMap:Ie,iridescenceThicknessMap:le,sheen:H,sheenColorMap:_e,sheenRoughnessMap:Me,specularMap:Ce,specularColorMap:ge,specularIntensityMap:je,transmission:ee,transmissionMap:B,thicknessMap:Te,gradientMap:fe,opaque:M.transparent===!1&&M.blending===ao&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:he,alphaHash:oe,combine:M.combine,mapUv:it&&v(M.map.channel),aoMapUv:D&&v(M.aoMap.channel),lightMapUv:k&&v(M.lightMap.channel),bumpMapUv:O&&v(M.bumpMap.channel),normalMapUv:G&&v(M.normalMap.channel),displacementMapUv:b&&v(M.displacementMap.channel),emissiveMapUv:ne&&v(M.emissiveMap.channel),metalnessMapUv:j&&v(M.metalnessMap.channel),roughnessMapUv:$&&v(M.roughnessMap.channel),anisotropyMapUv:X&&v(M.anisotropyMap.channel),clearcoatMapUv:xe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(M.sheenRoughnessMap.channel),specularMapUv:Ce&&v(M.specularMap.channel),specularColorMapUv:ge&&v(M.specularColorMap.channel),specularIntensityMapUv:je&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:Te&&v(M.thicknessMap.channel),alphaMapUv:Re&&v(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(G||te),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Q.attributes.uv&&(it||Re),fog:!!se,useFog:M.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ae,skinning:Y.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,decodeVideoTexture:it&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)w.push(U),w.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(E(w,M),S(w,M),w.push(t.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function E(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function S(M,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const w=_[M.type];let U;if(w){const W=Bi[w];U=fc.clone(W.uniforms)}else U=M.uniforms;return U}function A(M,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new eA(t,w,M,r),u.push(U),h.set(w,U)),U}function C(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),h.delete(M.cacheKey),M.destroy()}}function P(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:F}}function rA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function oA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function R0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function P0(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(h,f,d,_,v,m){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,f,d,_,v,m){const p=o(h,f,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function l(h,f,d,_,v,m){const p=o(h,f,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function c(h,f){n.length>1&&n.sort(h||oA),i.length>1&&i.sort(f||R0),s.length>1&&s.sort(f||R0)}function u(){for(let h=e,f=t.length;h<f;h++){const d=t[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function aA(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new P0,t.set(i,[o])):s>=r.length?(o=new P0,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new $e};break;case"SpotLight":n={position:new N,direction:new N,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function cA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uA=0;function hA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fA(t){const e=new lA,n=cA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new Tt,o=new Tt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,_=0,v=0,m=0,p=0,E=0,S=0,x=0,A=0,C=0,P=0;c.sort(hA);for(let M=0,w=c.length;M<w;M++){const U=c[M],W=U.color,Y=U.intensity,se=U.distance;let Q=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===go?Q=U.shadow.map.texture:Q=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=W.r*Y,h+=W.g*Y,f+=W.b*Y;else if(U.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(U.sh.coefficients[K],Y);P++}else if(U.isDirectionalLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,ie=n.get(U);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,i.directionalShadow[d]=ie,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=U.shadow.matrix,E++}i.directional[d]=K,d++}else if(U.isSpotLight){const K=e.get(U);K.position.setFromMatrixPosition(U.matrixWorld),K.color.copy(W).multiplyScalar(Y),K.distance=se,K.coneCos=Math.cos(U.angle),K.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),K.decay=U.decay,i.spot[v]=K;const V=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,V.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[v]=V.matrix,U.castShadow){const ie=n.get(U);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=Q,x++}v++}else if(U.isRectAreaLight){const K=e.get(U);K.color.copy(W).multiplyScalar(Y),K.halfWidth.set(U.width*.5,0,0),K.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=K,m++}else if(U.isPointLight){const K=e.get(U);if(K.color.copy(U.color).multiplyScalar(U.intensity),K.distance=U.distance,K.decay=U.decay,U.castShadow){const V=U.shadow,ie=n.get(U);ie.shadowIntensity=V.intensity,ie.shadowBias=V.bias,ie.shadowNormalBias=V.normalBias,ie.shadowRadius=V.radius,ie.shadowMapSize=V.mapSize,ie.shadowCameraNear=V.camera.near,ie.shadowCameraFar=V.camera.far,i.pointShadow[_]=ie,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=U.shadow.matrix,S++}i.point[_]=K,_++}else if(U.isHemisphereLight){const K=e.get(U);K.skyColor.copy(U.color).multiplyScalar(Y),K.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[p]=K,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==d||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==S||F.numSpotShadows!==x||F.numSpotMaps!==A||F.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,F.directionalLength=d,F.pointLength=_,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=S,F.numSpotShadows=x,F.numSpotMaps=A,F.numLightProbes=P,i.version=uA++)}function l(c,u){let h=0,f=0,d=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function L0(t){const e=new fA(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dA(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new L0(t),e.set(s,[a])):r>=o.length?(a=new L0(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
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
}`,gA=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],_A=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],D0=new Tt,ia=new N,ch=new N;function vA(t,e,n){let i=new Nd;const s=new ue,r=new ue,o=new Gt,a=new wS,l=new AS,c={},u=n.maxTextureSize,h={[js]:En,[En]:js,[gi]:gi},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ht(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let p=this.type;this.render=function(C,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===yM&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Hl);const M=t.getRenderTarget(),w=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Gi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Y=p!==this.type;Y&&P.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Q=>Q.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Q=C.length;se<Q;se++){const K=C[se],V=K.shadow;if(V===void 0){qe("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===aa){if(K.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Un(s.x,s.y,{format:go,type:jn,minFilter:dn,magFilter:dn,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new za(s.x,s.y,xi),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=vs,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=an,V.map.depthTexture.magFilter=an}else{K.isPointLight?(V.map=new f1(s.x),V.map.depthTexture=new Wy(s.x,Xi)):(V.map=new Un(s.x,s.y),V.map.depthTexture=new za(s.x,s.y,Xi)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=vs;const pe=t.state.buffers.depth.getReversed();this.type===Hl?(V.map.depthTexture.compareFunction=pe?Ld:Pd,V.map.depthTexture.minFilter=dn,V.map.depthTexture.magFilter=dn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=an,V.map.depthTexture.magFilter=an)}V.camera.updateProjectionMatrix()}const me=V.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<me;pe++){if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,pe),t.clear();else{pe===0&&(t.setRenderTarget(V.map),t.clear());const de=V.getViewport(pe);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),W.viewport(o)}if(K.isPointLight){const de=V.camera,ke=V.matrix,We=K.distance||de.far;We!==de.far&&(de.far=We,de.updateProjectionMatrix()),ia.setFromMatrixPosition(K.matrixWorld),de.position.copy(ia),ch.copy(de.position),ch.add(gA[pe]),de.up.copy(_A[pe]),de.lookAt(ch),de.updateMatrixWorld(),ke.makeTranslation(-ia.x,-ia.y,-ia.z),D0.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),V._frustum.setFromProjectionMatrix(D0,de.coordinateSystem,de.reversedDepth)}else V.updateMatrices(K);i=V.getFrustum(),x(P,F,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===aa&&E(V,F),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,w,U)};function E(C,P){const F=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Un(s.x,s.y,{format:go,type:jn})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,F,f,v,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,F,d,v,null)}function S(C,P,F,M){let w=null;const U=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)w=U;else if(w=F.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=w.uuid,Y=P.uuid;let se=c[W];se===void 0&&(se={},c[W]=se);let Q=se[Y];Q===void 0&&(Q=w.clone(),se[Y]=Q,P.addEventListener("dispose",A)),w=Q}if(w.visible=P.visible,w.wireframe=P.wireframe,M===aa?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:h[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,F.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=t.properties.get(w);W.light=F}return w}function x(C,P,F,M,w){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&w===aa)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const Y=e.update(C),se=C.material;if(Array.isArray(se)){const Q=Y.groups;for(let K=0,V=Q.length;K<V;K++){const ie=Q[K],me=se[ie.materialIndex];if(me&&me.visible){const pe=S(C,me,M,w);C.onBeforeShadow(t,C,P,F,Y,pe,ie),t.renderBufferDirect(F,null,Y,pe,C,ie),C.onAfterShadow(t,C,P,F,Y,pe,ie)}}}else if(se.visible){const Q=S(C,se,M,w);C.onBeforeShadow(t,C,P,F,Y,Q,null),t.renderBufferDirect(F,null,Y,Q,C,null),C.onAfterShadow(t,C,P,F,Y,Q,null)}}const W=C.children;for(let Y=0,se=W.length;Y<se;Y++)x(W[Y],P,F,M,w)}function A(C){C.target.removeEventListener("dispose",A);for(const F in c){const M=c[F],w=C.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}const xA={[Bh]:kh,[zh]:Hh,[Vh]:Wh,[po]:Gh,[kh]:Bh,[Hh]:zh,[Wh]:Vh,[Gh]:po};function MA(t,e){function n(){let B=!1;const Te=new Gt;let fe=null;const Re=new Gt(0,0,0,0);return{setMask:function(he){fe!==he&&!B&&(t.colorMask(he,he,he,he),fe=he)},setLocked:function(he){B=he},setClear:function(he,oe,ve,Ye,wt){wt===!0&&(he*=Ye,oe*=Ye,ve*=Ye),Te.set(he,oe,ve,Ye),Re.equals(Te)===!1&&(t.clearColor(he,oe,ve,Ye),Re.copy(Te))},reset:function(){B=!1,fe=null,Re.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,fe=null,Re=null,he=null;return{setReversed:function(oe){if(Te!==oe){const ve=e.get("EXT_clip_control");oe?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),Te=oe;const Ye=he;he=null,this.setClear(Ye)}},getReversed:function(){return Te},setTest:function(oe){oe?ae(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!B&&(t.depthMask(oe),fe=oe)},setFunc:function(oe){if(Te&&(oe=xA[oe]),Re!==oe){switch(oe){case Bh:t.depthFunc(t.NEVER);break;case kh:t.depthFunc(t.ALWAYS);break;case zh:t.depthFunc(t.LESS);break;case po:t.depthFunc(t.LEQUAL);break;case Vh:t.depthFunc(t.EQUAL);break;case Gh:t.depthFunc(t.GEQUAL);break;case Hh:t.depthFunc(t.GREATER);break;case Wh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Re=oe}},setLocked:function(oe){B=oe},setClear:function(oe){he!==oe&&(Te&&(oe=1-oe),t.clearDepth(oe),he=oe)},reset:function(){B=!1,fe=null,Re=null,he=null,Te=!1}}}function s(){let B=!1,Te=null,fe=null,Re=null,he=null,oe=null,ve=null,Ye=null,wt=null;return{setTest:function(_t){B||(_t?ae(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(_t){Te!==_t&&!B&&(t.stencilMask(_t),Te=_t)},setFunc:function(_t,Ci,$i){(fe!==_t||Re!==Ci||he!==$i)&&(t.stencilFunc(_t,Ci,$i),fe=_t,Re=Ci,he=$i)},setOp:function(_t,Ci,$i){(oe!==_t||ve!==Ci||Ye!==$i)&&(t.stencilOp(_t,Ci,$i),oe=_t,ve=Ci,Ye=$i)},setLocked:function(_t){B=_t},setClear:function(_t){wt!==_t&&(t.clearStencil(_t),wt=_t)},reset:function(){B=!1,Te=null,fe=null,Re=null,he=null,oe=null,ve=null,Ye=null,wt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,E=null,S=null,x=null,A=null,C=null,P=new $e(0,0,0),F=0,M=!1,w=null,U=null,W=null,Y=null,se=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=V>=1):ie.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=V>=2);let me=null,pe={};const de=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),We=new Gt().fromArray(de),ft=new Gt().fromArray(ke);function dt(B,Te,fe,Re){const he=new Uint8Array(4),oe=t.createTexture();t.bindTexture(B,oe),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ve=0;ve<fe;ve++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(Te+ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return oe}const re={};re[t.TEXTURE_2D]=dt(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=dt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=dt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=dt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(t.DEPTH_TEST),o.setFunc(po),O(!1),G(Cm),ae(t.CULL_FACE),D(Gi);function ae(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function Ae(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function ze(B,Te){return h[B]!==Te?(t.bindFramebuffer(B,Te),h[B]=Te,B===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Te),B===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Te),!0):!1}function we(B,Te){let fe=d,Re=!1;if(B){fe=f.get(Te),fe===void 0&&(fe=[],f.set(Te,fe));const he=B.textures;if(fe.length!==he.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,ve=he.length;oe<ve;oe++)fe[oe]=t.COLOR_ATTACHMENT0+oe;fe.length=he.length,Re=!0}}else fe[0]!==t.BACK&&(fe[0]=t.BACK,Re=!0);Re&&t.drawBuffers(fe)}function it(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const R={[mr]:t.FUNC_ADD,[bM]:t.FUNC_SUBTRACT,[EM]:t.FUNC_REVERSE_SUBTRACT};R[TM]=t.MIN,R[wM]=t.MAX;const I={[AM]:t.ZERO,[CM]:t.ONE,[RM]:t.SRC_COLOR,[Fh]:t.SRC_ALPHA,[NM]:t.SRC_ALPHA_SATURATE,[IM]:t.DST_COLOR,[LM]:t.DST_ALPHA,[PM]:t.ONE_MINUS_SRC_COLOR,[Oh]:t.ONE_MINUS_SRC_ALPHA,[UM]:t.ONE_MINUS_DST_COLOR,[DM]:t.ONE_MINUS_DST_ALPHA,[FM]:t.CONSTANT_COLOR,[OM]:t.ONE_MINUS_CONSTANT_COLOR,[BM]:t.CONSTANT_ALPHA,[kM]:t.ONE_MINUS_CONSTANT_ALPHA};function D(B,Te,fe,Re,he,oe,ve,Ye,wt,_t){if(B===Gi){v===!0&&(Ae(t.BLEND),v=!1);return}if(v===!1&&(ae(t.BLEND),v=!0),B!==SM){if(B!==m||_t!==M){if((p!==mr||x!==mr)&&(t.blendEquation(t.FUNC_ADD),p=mr,x=mr),_t)switch(B){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.ONE,t.ONE);break;case Rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",B);break}else switch(B){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rm:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pm:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",B);break}E=null,S=null,A=null,C=null,P.set(0,0,0),F=0,m=B,M=_t}return}he=he||Te,oe=oe||fe,ve=ve||Re,(Te!==p||he!==x)&&(t.blendEquationSeparate(R[Te],R[he]),p=Te,x=he),(fe!==E||Re!==S||oe!==A||ve!==C)&&(t.blendFuncSeparate(I[fe],I[Re],I[oe],I[ve]),E=fe,S=Re,A=oe,C=ve),(Ye.equals(P)===!1||wt!==F)&&(t.blendColor(Ye.r,Ye.g,Ye.b,wt),P.copy(Ye),F=wt),m=B,M=!1}function k(B,Te){B.side===gi?Ae(t.CULL_FACE):ae(t.CULL_FACE);let fe=B.side===En;Te&&(fe=!fe),O(fe),B.blending===ao&&B.transparent===!1?D(Gi):D(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Re=B.stencilWrite;a.setTest(Re),Re&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ne(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(B){w!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),w=B)}function G(B){B!==xM?(ae(t.CULL_FACE),B!==U&&(B===Cm?t.cullFace(t.BACK):B===MM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),U=B}function b(B){B!==W&&(K&&t.lineWidth(B),W=B)}function ne(B,Te,fe){B?(ae(t.POLYGON_OFFSET_FILL),(Y!==Te||se!==fe)&&(t.polygonOffset(Te,fe),Y=Te,se=fe)):Ae(t.POLYGON_OFFSET_FILL)}function j(B){B?ae(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function $(B){B===void 0&&(B=t.TEXTURE0+Q-1),me!==B&&(t.activeTexture(B),me=B)}function te(B,Te,fe){fe===void 0&&(me===null?fe=t.TEXTURE0+Q-1:fe=me);let Re=pe[fe];Re===void 0&&(Re={type:void 0,texture:void 0},pe[fe]=Re),(Re.type!==B||Re.texture!==Te)&&(me!==fe&&(t.activeTexture(fe),me=fe),t.bindTexture(B,Te||re[B]),Re.type=B,Re.texture=Te)}function y(){const B=pe[me];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function H(){try{t.texSubImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function ee(){try{t.texSubImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function xe(){try{t.compressedTexSubImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function ce(){try{t.texStorage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function be(){try{t.texStorage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function Ie(){try{t.texImage2D(...arguments)}catch(B){rt("WebGLState:",B)}}function le(){try{t.texImage3D(...arguments)}catch(B){rt("WebGLState:",B)}}function _e(B){We.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),We.copy(B))}function Me(B){ft.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),ft.copy(B))}function Ce(B,Te){let fe=c.get(Te);fe===void 0&&(fe=new WeakMap,c.set(Te,fe));let Re=fe.get(B);Re===void 0&&(Re=t.getUniformBlockIndex(Te,B.name),fe.set(B,Re))}function ge(B,Te){const Re=c.get(Te).get(B);l.get(Te)!==Re&&(t.uniformBlockBinding(Te,Re,B.__bindingPointIndex),l.set(Te,Re))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},me=null,pe={},h={},f=new WeakMap,d=[],_=null,v=!1,m=null,p=null,E=null,S=null,x=null,A=null,C=null,P=new $e(0,0,0),F=0,M=!1,w=null,U=null,W=null,Y=null,se=null,We.set(0,0,t.canvas.width,t.canvas.height),ft.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ae,bindFramebuffer:ze,drawBuffers:we,useProgram:it,setBlending:D,setMaterial:k,setFlipSided:O,setCullFace:G,setLineWidth:b,setPolygonOffset:ne,setScissorTest:j,activeTexture:$,bindTexture:te,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ie,texImage3D:le,updateUBOMapping:Ce,uniformBlockBinding:ge,texStorage2D:ce,texStorage3D:be,texSubImage2D:H,texSubImage3D:ee,compressedTexSubImage2D:X,compressedTexSubImage3D:xe,scissor:_e,viewport:Me,reset:je}}function yA(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return d?new OffscreenCanvas(y,g):Oa("canvas")}function v(y,g,L){let H=1;const ee=te(y);if((ee.width>L||ee.height>L)&&(H=L/Math.max(ee.width,ee.height)),H<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(H*ee.width),xe=Math.floor(H*ee.height);h===void 0&&(h=_(X,xe));const ce=g?_(X,xe):h;return ce.width=X,ce.height=xe,ce.getContext("2d").drawImage(y,0,0,X,xe),qe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+xe+")."),ce}else return"data"in y&&qe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){t.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(y,g,L,H,ee=!1){if(y!==null){if(t[y]!==void 0)return t[y];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=g;if(g===t.RED&&(L===t.FLOAT&&(X=t.R32F),L===t.HALF_FLOAT&&(X=t.R16F),L===t.UNSIGNED_BYTE&&(X=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(X=t.R8UI),L===t.UNSIGNED_SHORT&&(X=t.R16UI),L===t.UNSIGNED_INT&&(X=t.R32UI),L===t.BYTE&&(X=t.R8I),L===t.SHORT&&(X=t.R16I),L===t.INT&&(X=t.R32I)),g===t.RG&&(L===t.FLOAT&&(X=t.RG32F),L===t.HALF_FLOAT&&(X=t.RG16F),L===t.UNSIGNED_BYTE&&(X=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(X=t.RG8UI),L===t.UNSIGNED_SHORT&&(X=t.RG16UI),L===t.UNSIGNED_INT&&(X=t.RG32UI),L===t.BYTE&&(X=t.RG8I),L===t.SHORT&&(X=t.RG16I),L===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&(X=t.RGB8UI),L===t.UNSIGNED_SHORT&&(X=t.RGB16UI),L===t.UNSIGNED_INT&&(X=t.RGB32UI),L===t.BYTE&&(X=t.RGB8I),L===t.SHORT&&(X=t.RGB16I),L===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),L===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),L===t.UNSIGNED_INT&&(X=t.RGBA32UI),L===t.BYTE&&(X=t.RGBA8I),L===t.SHORT&&(X=t.RGBA16I),L===t.INT&&(X=t.RGBA32I)),g===t.RGB&&(L===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),L===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),g===t.RGBA){const xe=ee?cc:ot.getTransfer(H);L===t.FLOAT&&(X=t.RGBA32F),L===t.HALF_FLOAT&&(X=t.RGBA16F),L===t.UNSIGNED_BYTE&&(X=xe===xt?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(y,g){let L;return y?g===null||g===Xi||g===Fa?L=t.DEPTH24_STENCIL8:g===xi?L=t.DEPTH32F_STENCIL8:g===Na&&(L=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Xi||g===Fa?L=t.DEPTH_COMPONENT24:g===xi?L=t.DEPTH_COMPONENT32F:g===Na&&(L=t.DEPTH_COMPONENT16),L}function A(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==an&&y.minFilter!==dn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function C(y){const g=y.target;g.removeEventListener("dispose",C),F(g),g.isVideoTexture&&u.delete(g)}function P(y){const g=y.target;g.removeEventListener("dispose",P),w(g)}function F(y){const g=i.get(y);if(g.__webglInit===void 0)return;const L=y.source,H=f.get(L);if(H){const ee=H[g.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(y),Object.keys(H).length===0&&f.delete(L)}i.remove(y)}function M(y){const g=i.get(y);t.deleteTexture(g.__webglTexture);const L=y.source,H=f.get(L);delete H[g.__cacheKey],o.memory.textures--}function w(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let ee=0;ee<g.__webglFramebuffer[H].length;ee++)t.deleteFramebuffer(g.__webglFramebuffer[H][ee]);else t.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)t.deleteFramebuffer(g.__webglFramebuffer[H]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=y.textures;for(let H=0,ee=L.length;H<ee;H++){const X=i.get(L[H]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(L[H])}i.remove(y)}let U=0;function W(){U=0}function Y(){const y=U;return y>=s.maxTextures&&qe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),U+=1,y}function se(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Q(y,g){const L=i.get(y);if(y.isVideoTexture&&j(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const H=y.image;if(H===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{re(L,y,g);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function K(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){re(L,y,g);return}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function V(y,g){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){re(L,y,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function ie(y,g){const L=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&L.__version!==y.version){ae(L,y,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const me={[Ua]:t.REPEAT,[ls]:t.CLAMP_TO_EDGE,[Yh]:t.MIRRORED_REPEAT},pe={[an]:t.NEAREST,[GM]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[Pu]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},de={[XM]:t.NEVER,[$M]:t.ALWAYS,[qM]:t.LESS,[Pd]:t.LEQUAL,[YM]:t.EQUAL,[Ld]:t.GEQUAL,[jM]:t.GREATER,[KM]:t.NOTEQUAL};function ke(y,g){if(g.type===xi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===dn||g.magFilter===Pu||g.magFilter===hl||g.magFilter===_r||g.minFilter===dn||g.minFilter===Pu||g.minFilter===hl||g.minFilter===_r)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,me[g.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,me[g.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,me[g.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,pe[g.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===an||g.minFilter!==hl&&g.minFilter!==_r||g.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function We(y,g){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",C));const H=g.source;let ee=f.get(H);ee===void 0&&(ee={},f.set(H,ee));const X=se(g);if(X!==y.__cacheKey){ee[X]===void 0&&(ee[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),ee[X].usedTimes++;const xe=ee[y.__cacheKey];xe!==void 0&&(ee[y.__cacheKey].usedTimes--,xe.usedTimes===0&&M(g)),y.__cacheKey=X,y.__webglTexture=ee[X].texture}return L}function ft(y,g,L){return Math.floor(Math.floor(y/L)/g)}function dt(y,g,L,H){const X=y.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,H,g.data);else{X.sort((le,_e)=>le.start-_e.start);let xe=0;for(let le=1;le<X.length;le++){const _e=X[xe],Me=X[le],Ce=_e.start+_e.count,ge=ft(Me.start,g.width,4),je=ft(_e.start,g.width,4);Me.start<=Ce+1&&ge===je&&ft(Me.start+Me.count-1,g.width,4)===ge?_e.count=Math.max(_e.count,Me.start+Me.count-_e.start):(++xe,X[xe]=Me)}X.length=xe+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),be=t.getParameter(t.UNPACK_SKIP_PIXELS),Ie=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let le=0,_e=X.length;le<_e;le++){const Me=X[le],Ce=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),je=Ce%g.width,B=Math.floor(Ce/g.width),Te=ge,fe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,je,B,Te,fe,L,H,g.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,be),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ie)}}function re(y,g,L){let H=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=t.TEXTURE_3D);const ee=We(y,g),X=g.source;n.bindTexture(H,y.__webglTexture,t.TEXTURE0+L);const xe=i.get(X);if(X.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+L);const ce=ot.getPrimaries(ot.workingColorSpace),be=g.colorSpace===Is?null:ot.getPrimaries(g.colorSpace),Ie=g.colorSpace===Is||ce===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let le=v(g.image,!1,s.maxTextureSize);le=$(g,le);const _e=r.convert(g.format,g.colorSpace),Me=r.convert(g.type);let Ce=S(g.internalFormat,_e,Me,g.colorSpace,g.isVideoTexture);ke(H,g);let ge;const je=g.mipmaps,B=g.isVideoTexture!==!0,Te=xe.__version===void 0||ee===!0,fe=X.dataReady,Re=A(g,le);if(g.isDepthTexture)Ce=x(g.format===vr,g.type),Te&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ce,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ce,le.width,le.height,0,_e,Me,null));else if(g.isDataTexture)if(je.length>0){B&&Te&&n.texStorage2D(t.TEXTURE_2D,Re,Ce,je[0].width,je[0].height);for(let he=0,oe=je.length;he<oe;he++)ge=je[he],B?fe&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ge.width,ge.height,_e,Me,ge.data):n.texImage2D(t.TEXTURE_2D,he,Ce,ge.width,ge.height,0,_e,Me,ge.data);g.generateMipmaps=!1}else B?(Te&&n.texStorage2D(t.TEXTURE_2D,Re,Ce,le.width,le.height),fe&&dt(g,le,_e,Me)):n.texImage2D(t.TEXTURE_2D,0,Ce,le.width,le.height,0,_e,Me,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){B&&Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,Ce,je[0].width,je[0].height,le.depth);for(let he=0,oe=je.length;he<oe;he++)if(ge=je[he],g.format!==Mi)if(_e!==null)if(B){if(fe)if(g.layerUpdates.size>0){const ve=u0(ge.width,ge.height,g.format,g.type);for(const Ye of g.layerUpdates){const wt=ge.data.subarray(Ye*ve/ge.data.BYTES_PER_ELEMENT,(Ye+1)*ve/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,Ye,ge.width,ge.height,1,_e,wt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,le.depth,_e,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Ce,ge.width,ge.height,le.depth,0,ge.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,ge.width,ge.height,le.depth,_e,Me,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Ce,ge.width,ge.height,le.depth,0,_e,Me,ge.data)}else{B&&Te&&n.texStorage2D(t.TEXTURE_2D,Re,Ce,je[0].width,je[0].height);for(let he=0,oe=je.length;he<oe;he++)ge=je[he],g.format!==Mi?_e!==null?B?fe&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Ce,ge.width,ge.height,0,ge.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?fe&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,ge.width,ge.height,_e,Me,ge.data):n.texImage2D(t.TEXTURE_2D,he,Ce,ge.width,ge.height,0,_e,Me,ge.data)}else if(g.isDataArrayTexture)if(B){if(Te&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Re,Ce,le.width,le.height,le.depth),fe)if(g.layerUpdates.size>0){const he=u0(le.width,le.height,g.format,g.type);for(const oe of g.layerUpdates){const ve=le.data.subarray(oe*he/le.data.BYTES_PER_ELEMENT,(oe+1)*he/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,le.width,le.height,1,_e,Me,ve)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,_e,Me,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,_e,Me,le.data);else if(g.isData3DTexture)B?(Te&&n.texStorage3D(t.TEXTURE_3D,Re,Ce,le.width,le.height,le.depth),fe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,_e,Me,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,_e,Me,le.data);else if(g.isFramebufferTexture){if(Te)if(B)n.texStorage2D(t.TEXTURE_2D,Re,Ce,le.width,le.height);else{let he=le.width,oe=le.height;for(let ve=0;ve<Re;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ce,he,oe,0,_e,Me,null),he>>=1,oe>>=1}}else if(je.length>0){if(B&&Te){const he=te(je[0]);n.texStorage2D(t.TEXTURE_2D,Re,Ce,he.width,he.height)}for(let he=0,oe=je.length;he<oe;he++)ge=je[he],B?fe&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,_e,Me,ge):n.texImage2D(t.TEXTURE_2D,he,Ce,_e,Me,ge);g.generateMipmaps=!1}else if(B){if(Te){const he=te(le);n.texStorage2D(t.TEXTURE_2D,Re,Ce,he.width,he.height)}fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Me,le)}else n.texImage2D(t.TEXTURE_2D,0,Ce,_e,Me,le);m(g)&&p(H),xe.__version=X.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ae(y,g,L){if(g.image.length!==6)return;const H=We(y,g),ee=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+L);const X=i.get(ee);if(ee.version!==X.__version||H===!0){n.activeTexture(t.TEXTURE0+L);const xe=ot.getPrimaries(ot.workingColorSpace),ce=g.colorSpace===Is?null:ot.getPrimaries(g.colorSpace),be=g.colorSpace===Is||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ie=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!Ie&&!le?_e[oe]=v(g.image[oe],!0,s.maxCubemapSize):_e[oe]=le?g.image[oe].image:g.image[oe],_e[oe]=$(g,_e[oe]);const Me=_e[0],Ce=r.convert(g.format,g.colorSpace),ge=r.convert(g.type),je=S(g.internalFormat,Ce,ge,g.colorSpace),B=g.isVideoTexture!==!0,Te=X.__version===void 0||H===!0,fe=ee.dataReady;let Re=A(g,Me);ke(t.TEXTURE_CUBE_MAP,g);let he;if(Ie){B&&Te&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,je,Me.width,Me.height);for(let oe=0;oe<6;oe++){he=_e[oe].mipmaps;for(let ve=0;ve<he.length;ve++){const Ye=he[ve];g.format!==Mi?Ce!==null?B?fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,0,0,Ye.width,Ye.height,Ce,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,je,Ye.width,Ye.height,0,Ye.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,0,0,Ye.width,Ye.height,Ce,ge,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve,je,Ye.width,Ye.height,0,Ce,ge,Ye.data)}}}else{if(he=g.mipmaps,B&&Te){he.length>0&&Re++;const oe=te(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Re,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(le){B?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,Ce,ge,_e[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,_e[oe].width,_e[oe].height,0,Ce,ge,_e[oe].data);for(let ve=0;ve<he.length;ve++){const wt=he[ve].image[oe].image;B?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,0,0,wt.width,wt.height,Ce,ge,wt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,je,wt.width,wt.height,0,Ce,ge,wt.data)}}else{B?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce,ge,_e[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Ce,ge,_e[oe]);for(let ve=0;ve<he.length;ve++){const Ye=he[ve];B?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,0,0,Ce,ge,Ye.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ve+1,je,Ce,ge,Ye.image[oe])}}}m(g)&&p(t.TEXTURE_CUBE_MAP),X.__version=ee.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ae(y,g,L,H,ee,X){const xe=r.convert(L.format,L.colorSpace),ce=r.convert(L.type),be=S(L.internalFormat,xe,ce,L.colorSpace),Ie=i.get(g),le=i.get(L);if(le.__renderTarget=g,!Ie.__hasExternalTextures){const _e=Math.max(1,g.width>>X),Me=Math.max(1,g.height>>X);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,X,be,_e,Me,g.depth,0,xe,ce,null):n.texImage2D(ee,X,be,_e,Me,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ne(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,ee,le.__webglTexture,0,b(g)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,ee,le.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(y,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,y),g.depthBuffer){const H=g.depthTexture,ee=H&&H.isDepthTexture?H.type:null,X=x(g.stencilBuffer,ee),xe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ne(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(g),X,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(g),X,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,X,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,y)}else{const H=g.textures;for(let ee=0;ee<H.length;ee++){const X=H[ee],xe=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),be=S(X.internalFormat,xe,ce,X.colorSpace);ne(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(g),be,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(g),be,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,be,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(y,g,L){const H=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(g.depthTexture);if(ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ke(t.TEXTURE_CUBE_MAP,g.depthTexture);const Ie=r.convert(g.depthTexture.format),le=r.convert(g.depthTexture.type);let _e;g.depthTexture.format===vs?_e=t.DEPTH_COMPONENT24:g.depthTexture.format===vr&&(_e=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_e,g.width,g.height,0,Ie,le,null)}}else Q(g.depthTexture,0);const X=ee.__webglTexture,xe=b(g),ce=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,be=g.depthTexture.format===vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===vs)ne(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,ce,X,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,be,ce,X,0);else if(g.depthTexture.format===vr)ne(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,be,ce,X,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,be,ce,X,0);else throw new Error("Unknown depthTexture format")}function it(y){const g=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const H=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const ee=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",ee)};H.addEventListener("dispose",ee),g.__depthDisposeCallback=ee}g.__boundDepthTexture=H}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let H=0;H<6;H++)we(g.__webglFramebuffer[H],y,H);else{const H=y.texture.mipmaps;H&&H.length>0?we(g.__webglFramebuffer[0],y,0):we(g.__webglFramebuffer,y,0)}else if(L){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=t.createRenderbuffer(),ze(g.__webglDepthbuffer[H],y,!1);else{const ee=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}else{const H=y.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ze(g.__webglDepthbuffer,y,!1);else{const ee=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(y,g,L){const H=i.get(y);g!==void 0&&Ae(H.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&it(y)}function I(y){const g=y.texture,L=i.get(y),H=i.get(g);y.addEventListener("dispose",P);const ee=y.textures,X=y.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=g.version,o.memory.textures++),X){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let be=0;be<g.mipmaps.length;be++)L.__webglFramebuffer[ce][be]=t.createFramebuffer()}else L.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)L.__webglFramebuffer[ce]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ce=0,be=ee.length;ce<be;ce++){const Ie=i.get(ee[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&ne(y)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<ee.length;ce++){const be=ee[ce];L.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Ie=r.convert(be.format,be.colorSpace),le=r.convert(be.type),_e=S(be.internalFormat,Ie,le,be.colorSpace,y.isXRRenderTarget===!0),Me=b(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,_e,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(L.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ke(t.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)Ae(L.__webglFramebuffer[ce][be],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else Ae(L.__webglFramebuffer[ce],y,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ce=0,be=ee.length;ce<be;ce++){const Ie=ee[ce],le=i.get(Ie);let _e=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(_e=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,le.__webglTexture),ke(_e,Ie),Ae(L.__webglFramebuffer,y,Ie,t.COLOR_ATTACHMENT0+ce,_e,0),m(Ie)&&p(_e)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,H.__webglTexture),ke(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let be=0;be<g.mipmaps.length;be++)Ae(L.__webglFramebuffer[be],y,g,t.COLOR_ATTACHMENT0,ce,be);else Ae(L.__webglFramebuffer,y,g,t.COLOR_ATTACHMENT0,ce,0);m(g)&&p(ce),n.unbindTexture()}y.depthBuffer&&it(y)}function D(y){const g=y.textures;for(let L=0,H=g.length;L<H;L++){const ee=g[L];if(m(ee)){const X=E(y),xe=i.get(ee).__webglTexture;n.bindTexture(X,xe),p(X),n.unbindTexture()}}}const k=[],O=[];function G(y){if(y.samples>0){if(ne(y)===!1){const g=y.textures,L=y.width,H=y.height;let ee=t.COLOR_BUFFER_BIT;const X=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(y),ce=g.length>1;if(ce)for(let Ie=0;Ie<g.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const be=y.texture.mipmaps;be&&be.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ie=0;Ie<g.length;Ie++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);const le=i.get(g[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,L,H,0,0,L,H,ee,t.NEAREST),l===!0&&(k.length=0,O.length=0,k.push(t.COLOR_ATTACHMENT0+Ie),y.depthBuffer&&y.resolveDepthBuffer===!1&&(k.push(X),O.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<g.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);const le=i.get(g[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function b(y){return Math.min(s.maxSamples,y.samples)}function ne(y){const g=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function $(y,g){const L=y.colorSpace,H=y.format,ee=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==_o&&L!==Is&&(ot.getTransfer(L)===xt?(H!==Mi||ee!==qn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",L)),g}function te(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=W,this.setTexture2D=Q,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=R,this.setupRenderTarget=I,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function SA(t,e){function n(i,s=Is){let r;const o=ot.getTransfer(s);if(i===qn)return t.UNSIGNED_BYTE;if(i===bd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ed)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Q_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===J_)return t.BYTE;if(i===Z_)return t.SHORT;if(i===Na)return t.UNSIGNED_SHORT;if(i===Sd)return t.INT;if(i===Xi)return t.UNSIGNED_INT;if(i===xi)return t.FLOAT;if(i===jn)return t.HALF_FLOAT;if(i===t1)return t.ALPHA;if(i===n1)return t.RGB;if(i===Mi)return t.RGBA;if(i===vs)return t.DEPTH_COMPONENT;if(i===vr)return t.DEPTH_STENCIL;if(i===Td)return t.RED;if(i===wd)return t.RED_INTEGER;if(i===go)return t.RG;if(i===Ad)return t.RG_INTEGER;if(i===Cd)return t.RGBA_INTEGER;if(i===Wl||i===Xl||i===ql||i===Yl)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jh||i===Kh||i===$h||i===Jh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$h)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zh||i===Qh||i===ef||i===tf||i===nf||i===sf||i===rf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zh||i===Qh)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ef)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tf)return r.COMPRESSED_R11_EAC;if(i===nf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sf)return r.COMPRESSED_RG11_EAC;if(i===rf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===of||i===af||i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===_f||i===vf||i===xf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===of)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===af)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ff)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===df)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_f)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xf)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mf||i===yf||i===Sf)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mf)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sf)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bf||i===Ef||i===Tf||i===wf)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===bf)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ef)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tf)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EA=`
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

}`;class TA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new g1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new pn({vertexShader:bA,fragmentShader:EA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ht(new tl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wA extends Uo{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const v=typeof XRWebGLBinding<"u",m=new TA,p={},E=n.getContextAttributes();let S=null,x=null;const A=[],C=[],P=new ue;let F=null;const M=new In;M.viewport=new Gt;const w=new In;w.viewport=new Gt;const U=[M,w],W=new FS;let Y=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ae=A[re];return ae===void 0&&(ae=new Ju,A[re]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(re){let ae=A[re];return ae===void 0&&(ae=new Ju,A[re]=ae),ae.getGripSpace()},this.getHand=function(re){let ae=A[re];return ae===void 0&&(ae=new Ju,A[re]=ae),ae.getHandSpace()};function Q(re){const ae=C.indexOf(re.inputSource);if(ae===-1)return;const Ae=A[ae];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,c||o),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function K(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",V);for(let re=0;re<A.length;re++){const ae=C[re];ae!==null&&(C[re]=null,A[re].disconnect(ae))}Y=null,se=null,m.reset();for(const re in p)delete p[re];e.setRenderTarget(S),d=null,f=null,h=null,s=null,x=null,dt.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",V),E.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ze=null,we=null;E.depth&&(we=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=E.stencil?vr:vs,ze=E.stencil?Fa:Xi);const it={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(it),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Un(f.textureWidth,f.textureHeight,{format:Mi,type:qn,depthTexture:new za(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,Ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Un(d.framebufferWidth,d.framebufferHeight,{format:Mi,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),dt.setContext(s),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(re){for(let ae=0;ae<re.removed.length;ae++){const Ae=re.removed[ae],ze=C.indexOf(Ae);ze>=0&&(C[ze]=null,A[ze].disconnect(Ae))}for(let ae=0;ae<re.added.length;ae++){const Ae=re.added[ae];let ze=C.indexOf(Ae);if(ze===-1){for(let it=0;it<A.length;it++)if(it>=C.length){C.push(Ae),ze=it;break}else if(C[it]===null){C[it]=Ae,ze=it;break}if(ze===-1)break}const we=A[ze];we&&we.connect(Ae)}}const ie=new N,me=new N;function pe(re,ae,Ae){ie.setFromMatrixPosition(ae.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const ze=ie.distanceTo(me),we=ae.projectionMatrix.elements,it=Ae.projectionMatrix.elements,R=we[14]/(we[10]-1),I=we[14]/(we[10]+1),D=(we[9]+1)/we[5],k=(we[9]-1)/we[5],O=(we[8]-1)/we[0],G=(it[8]+1)/it[0],b=R*O,ne=R*G,j=ze/(-O+G),$=j*-O;if(ae.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX($),re.translateZ(j),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),we[10]===-1)re.projectionMatrix.copy(ae.projectionMatrix),re.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const te=R+j,y=I+j,g=b-$,L=ne+(ze-$),H=D*I/y*te,ee=k*I/y*te;re.projectionMatrix.makePerspective(g,L,H,ee,te,y),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function de(re,ae){ae===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ae.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let ae=re.near,Ae=re.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),W.near=w.near=M.near=ae,W.far=w.far=M.far=Ae,(Y!==W.near||se!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),Y=W.near,se=W.far),W.layers.mask=re.layers.mask|6,M.layers.mask=W.layers.mask&3,w.layers.mask=W.layers.mask&5;const ze=re.parent,we=W.cameras;de(W,ze);for(let it=0;it<we.length;it++)de(we[it],ze);we.length===2?pe(W,M,w):W.projectionMatrix.copy(M.projectionMatrix),ke(re,W,ze)};function ke(re,ae,Ae){Ae===null?re.matrix.copy(ae.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(ae.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ae.projectionMatrix),re.projectionMatrixInverse.copy(ae.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=vo*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(re){l=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(re){return p[re]};let We=null;function ft(re,ae){if(u=ae.getViewerPose(c||o),_=ae,u!==null){const Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ze=!1;Ae.length!==W.cameras.length&&(W.cameras.length=0,ze=!0);for(let I=0;I<Ae.length;I++){const D=Ae[I];let k=null;if(d!==null)k=d.getViewport(D);else{const G=h.getViewSubImage(f,D);k=G.viewport,I===0&&(e.setRenderTargetTextures(x,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(x))}let O=U[I];O===void 0&&(O=new In,O.layers.enable(I),O.viewport=new Gt,U[I]=O),O.matrix.fromArray(D.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(D.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(k.x,k.y,k.width,k.height),I===0&&(W.matrix.copy(O.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ze===!0&&W.cameras.push(O)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const I=h.getDepthInformation(Ae[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let I=0;I<Ae.length;I++){const D=Ae[I].camera;if(D){let k=p[D];k||(k=new g1,p[D]=k);const O=h.getCameraImage(D);k.sourceTexture=O}}}}for(let Ae=0;Ae<A.length;Ae++){const ze=C[Ae],we=A[Ae];ze!==null&&we!==void 0&&we.update(ze,ae,c||o)}We&&We(re,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),_=null}const dt=new P1;dt.setAnimationLoop(ft),this.setAnimationLoop=function(re){We=re},this.dispose=function(){}}}const ur=new bi,AA=new Tt;function CA(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,c1(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,x=E.envMapRotation;S&&(m.envMap.value=S,ur.copy(x),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(AA.makeRotationFromEuler(ur)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RA(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const x=S.program;i.uniformBlockBinding(E,x)}function c(E,S){let x=s[E.id];x===void 0&&(_(E),x=u(E),s[E.id]=x,E.addEventListener("dispose",m));const A=S.program;i.updateUBOMapping(E,A);const C=e.render.frame;r[E.id]!==C&&(f(E),r[E.id]=C)}function u(E){const S=h();E.__bindingPointIndex=S;const x=t.createBuffer(),A=E.__size,C=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,A,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,x),x}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],x=E.uniforms,A=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let C=0,P=x.length;C<P;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,w=F.length;M<w;M++){const U=F[M];if(d(U,C,M,A)===!0){const W=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let Q=0;Q<Y.length;Q++){const K=Y[Q],V=v(K);typeof K=="number"||typeof K=="boolean"?(U.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,W+se,U.__data)):K.isMatrix3?(U.__data[0]=K.elements[0],U.__data[1]=K.elements[1],U.__data[2]=K.elements[2],U.__data[3]=0,U.__data[4]=K.elements[3],U.__data[5]=K.elements[4],U.__data[6]=K.elements[5],U.__data[7]=0,U.__data[8]=K.elements[6],U.__data[9]=K.elements[7],U.__data[10]=K.elements[8],U.__data[11]=0):(K.toArray(U.__data,se),se+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(E,S,x,A){const C=E.value,P=S+"_"+x;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const F=A[P];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return A[P]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function _(E){const S=E.uniforms;let x=0;const A=16;for(let P=0,F=S.length;P<F;P++){const M=Array.isArray(S[P])?S[P]:[S[P]];for(let w=0,U=M.length;w<U;w++){const W=M[w],Y=Array.isArray(W.value)?W.value:[W.value];for(let se=0,Q=Y.length;se<Q;se++){const K=Y[se],V=v(K),ie=x%A,me=ie%V.boundary,pe=ie+me;x+=me,pe!==0&&A-pe<V.storage&&(x+=A-pe),W.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=V.storage}}}const C=x%A;return C>0&&(x+=A-C),E.__size=x,E.__cache={},this}function v(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const E in s)t.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const PA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function LA(){return Pi===null&&(Pi=new p1(PA,16,16,go,jn),Pi.name="DFG_LUT",Pi.minFilter=dn,Pi.magFilter=dn,Pi.wrapS=ls,Pi.wrapT=ls,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class DA{constructor(e={}){const{canvas:n=ZM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=qn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const v=d,m=new Set([Cd,Ad,wd]),p=new Set([qn,Xi,Na,Fa,bd,Ed]),E=new Uint32Array(4),S=new Int32Array(4);let x=null,A=null;const C=[],P=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=yn;let U=0,W=0,Y=null,se=-1,Q=null;const K=new Gt,V=new Gt;let ie=null;const me=new $e(0);let pe=0,de=n.width,ke=n.height,We=1,ft=null,dt=null;const re=new Gt(0,0,de,ke),ae=new Gt(0,0,de,ke);let Ae=!1;const ze=new Nd;let we=!1,it=!1;const R=new Tt,I=new N,D=new Gt,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O=!1;function G(){return Y===null?We:1}let b=i;function ne(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xd}`),n.addEventListener("webglcontextlost",Ye,!1),n.addEventListener("webglcontextrestored",wt,!1),n.addEventListener("webglcontextcreationerror",_t,!1),b===null){const z="webgl2";if(b=ne(z,T),b===null)throw ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw rt("WebGLRenderer: "+T.message),T}let j,$,te,y,g,L,H,ee,X,xe,ce,be,Ie,le,_e,Me,Ce,ge,je,B,Te,fe,Re,he;function oe(){j=new LT(b),j.init(),fe=new SA(b,j),$=new ST(b,j,e,fe),te=new MA(b,j),$.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),y=new UT(b),g=new rA,L=new yA(b,j,te,g,$,fe,y),H=new ET(M),ee=new PT(M),X=new BS(b),Re=new MT(b,X),xe=new DT(b,X,y,Re),ce=new FT(b,xe,X,y),je=new NT(b,$,L),Me=new bT(g),be=new sA(M,H,ee,j,$,Re,Me),Ie=new CA(M,g),le=new aA,_e=new dA(j),ge=new xT(M,H,ee,te,ce,_,l),Ce=new vA(M,ce,$),he=new RA(b,y,$,te),B=new yT(b,j,y),Te=new IT(b,j,y),y.programs=be.programs,M.capabilities=$,M.extensions=j,M.properties=g,M.renderLists=le,M.shadowMap=Ce,M.state=te,M.info=y}oe(),v!==qn&&(F=new BT(v,n.width,n.height,s,r));const ve=new wA(M,b);this.xr=ve,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return We},this.setPixelRatio=function(T){T!==void 0&&(We=T,this.setSize(de,ke,!1))},this.getSize=function(T){return T.set(de,ke)},this.setSize=function(T,z,Z=!0){if(ve.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}de=T,ke=z,n.width=Math.floor(T*We),n.height=Math.floor(z*We),Z===!0&&(n.style.width=T+"px",n.style.height=z+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(de*We,ke*We).floor()},this.setDrawingBufferSize=function(T,z,Z){de=T,ke=z,We=Z,n.width=Math.floor(T*Z),n.height=Math.floor(z*Z),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(v===qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,z,Z,J){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,z,Z,J),te.viewport(K.copy(re).multiplyScalar(We).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,z,Z,J){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,z,Z,J),te.scissor(V.copy(ae).multiplyScalar(We).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){te.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){ft=T},this.setTransparentSort=function(T){dt=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Z=!0){let J=0;if(T){let q=!1;if(Y!==null){const ye=Y.texture.format;q=m.has(ye)}if(q){const ye=Y.texture.type,Pe=p.has(ye),Ee=ge.getClearColor(),De=ge.getClearAlpha(),Fe=Ee.r,Xe=Ee.g,Ge=Ee.b;Pe?(E[0]=Fe,E[1]=Xe,E[2]=Ge,E[3]=De,b.clearBufferuiv(b.COLOR,0,E)):(S[0]=Fe,S[1]=Xe,S[2]=Ge,S[3]=De,b.clearBufferiv(b.COLOR,0,S))}else J|=b.COLOR_BUFFER_BIT}z&&(J|=b.DEPTH_BUFFER_BIT),Z&&(J|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ye,!1),n.removeEventListener("webglcontextrestored",wt,!1),n.removeEventListener("webglcontextcreationerror",_t,!1),ge.dispose(),le.dispose(),_e.dispose(),g.dispose(),H.dispose(),ee.dispose(),ce.dispose(),Re.dispose(),he.dispose(),be.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",jp),ve.removeEventListener("sessionend",Kp),tr.stop()};function Ye(T){T.preventDefault(),Nm("WebGLRenderer: Context Lost."),w=!0}function wt(){Nm("WebGLRenderer: Context Restored."),w=!1;const T=y.autoReset,z=Ce.enabled,Z=Ce.autoUpdate,J=Ce.needsUpdate,q=Ce.type;oe(),y.autoReset=T,Ce.enabled=z,Ce.autoUpdate=Z,Ce.needsUpdate=J,Ce.type=q}function _t(T){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ci(T){const z=T.target;z.removeEventListener("dispose",Ci),$i(z)}function $i(T){Lx(T),g.remove(T)}function Lx(T){const z=g.get(T).programs;z!==void 0&&(z.forEach(function(Z){be.releaseProgram(Z)}),T.isShaderMaterial&&be.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Z,J,q,ye){z===null&&(z=k);const Pe=q.isMesh&&q.matrixWorld.determinant()<0,Ee=Ix(T,z,Z,J,q);te.setMaterial(J,Pe);let De=Z.index,Fe=1;if(J.wireframe===!0){if(De=xe.getWireframeAttribute(Z),De===void 0)return;Fe=2}const Xe=Z.drawRange,Ge=Z.attributes.position;let tt=Xe.start*Fe,Mt=(Xe.start+Xe.count)*Fe;ye!==null&&(tt=Math.max(tt,ye.start*Fe),Mt=Math.min(Mt,(ye.start+ye.count)*Fe)),De!==null?(tt=Math.max(tt,0),Mt=Math.min(Mt,De.count)):Ge!=null&&(tt=Math.max(tt,0),Mt=Math.min(Mt,Ge.count));const Bt=Mt-tt;if(Bt<0||Bt===1/0)return;Re.setup(q,J,Ee,Z,De);let kt,St=B;if(De!==null&&(kt=X.get(De),St=Te,St.setIndex(kt)),q.isMesh)J.wireframe===!0?(te.setLineWidth(J.wireframeLinewidth*G()),St.setMode(b.LINES)):St.setMode(b.TRIANGLES);else if(q.isLine){let He=J.linewidth;He===void 0&&(He=1),te.setLineWidth(He*G()),q.isLineSegments?St.setMode(b.LINES):q.isLineLoop?St.setMode(b.LINE_LOOP):St.setMode(b.LINE_STRIP)}else q.isPoints?St.setMode(b.POINTS):q.isSprite&&St.setMode(b.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Ba("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))St.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const He=q._multiDrawStarts,vt=q._multiDrawCounts,lt=q._multiDrawCount,Bn=De?X.get(De).bytesPerElement:1,Ir=g.get(J).currentProgram.getUniforms();for(let kn=0;kn<lt;kn++)Ir.setValue(b,"_gl_DrawID",kn),St.render(He[kn]/Bn,vt[kn])}else if(q.isInstancedMesh)St.renderInstances(tt,Bt,q.count);else if(Z.isInstancedBufferGeometry){const He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vt=Math.min(Z.instanceCount,He);St.renderInstances(tt,Bt,vt)}else St.render(tt,Bt)};function Yp(T,z,Z){T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,al(T,z,Z),T.side=js,T.needsUpdate=!0,al(T,z,Z),T.side=gi):al(T,z,Z)}this.compile=function(T,z,Z=null){Z===null&&(Z=T),A=_e.get(Z),A.init(z),P.push(A),Z.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),T!==Z&&T.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),A.setupLights();const J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ye=q.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Ee=ye[Pe];Yp(Ee,Z,q),J.add(Ee)}else Yp(ye,Z,q),J.add(ye)}),A=P.pop(),J},this.compileAsync=function(T,z,Z=null){const J=this.compile(T,z,Z);return new Promise(q=>{function ye(){if(J.forEach(function(Pe){g.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){q(T);return}setTimeout(ye,10)}j.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let _u=null;function Dx(T){_u&&_u(T)}function jp(){tr.stop()}function Kp(){tr.start()}const tr=new P1;tr.setAnimationLoop(Dx),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(T){_u=T,ve.setAnimationLoop(T),T===null?tr.stop():tr.start()},ve.addEventListener("sessionstart",jp),ve.addEventListener("sessionend",Kp),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const Z=ve.enabled===!0&&ve.isPresenting===!0,J=F!==null&&(Y===null||Z)&&F.begin(M,Y);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,z,Y),A=_e.get(T,P.length),A.init(z),P.push(A),R.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ze.setFromProjectionMatrix(R,zi,z.reversedDepth),it=this.localClippingEnabled,we=Me.init(this.clippingPlanes,it),x=le.get(T,C.length),x.init(),C.push(x),ve.enabled===!0&&ve.isPresenting===!0){const Pe=M.xr.getDepthSensingMesh();Pe!==null&&vu(Pe,z,-1/0,M.sortObjects)}vu(T,z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(ft,dt),O=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,O&&ge.addToRenderList(x,T),this.info.render.frame++,we===!0&&Me.beginShadows();const q=A.state.shadowsArray;if(Ce.render(q,T,z),we===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&F.hasRenderPass())===!1){const Pe=x.opaque,Ee=x.transmissive;if(A.setupLights(),z.isArrayCamera){const De=z.cameras;if(Ee.length>0)for(let Fe=0,Xe=De.length;Fe<Xe;Fe++){const Ge=De[Fe];Jp(Pe,Ee,T,Ge)}O&&ge.render(T);for(let Fe=0,Xe=De.length;Fe<Xe;Fe++){const Ge=De[Fe];$p(x,T,Ge,Ge.viewport)}}else Ee.length>0&&Jp(Pe,Ee,T,z),O&&ge.render(T),$p(x,T,z)}Y!==null&&W===0&&(L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y)),J&&F.end(M),T.isScene===!0&&T.onAfterRender(M,T,z),Re.resetDefaultState(),se=-1,Q=null,P.pop(),P.length>0?(A=P[P.length-1],we===!0&&Me.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?x=C[C.length-1]:x=null};function vu(T,z,Z,J){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){J&&D.setFromMatrixPosition(T.matrixWorld).applyMatrix4(R);const Pe=ce.update(T),Ee=T.material;Ee.visible&&x.push(T,Pe,Ee,Z,D.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const Pe=ce.update(T),Ee=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),D.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),D.copy(Pe.boundingSphere.center)),D.applyMatrix4(T.matrixWorld).applyMatrix4(R)),Array.isArray(Ee)){const De=Pe.groups;for(let Fe=0,Xe=De.length;Fe<Xe;Fe++){const Ge=De[Fe],tt=Ee[Ge.materialIndex];tt&&tt.visible&&x.push(T,Pe,tt,Z,D.z,Ge)}}else Ee.visible&&x.push(T,Pe,Ee,Z,D.z,null)}}const ye=T.children;for(let Pe=0,Ee=ye.length;Pe<Ee;Pe++)vu(ye[Pe],z,Z,J)}function $p(T,z,Z,J){const{opaque:q,transmissive:ye,transparent:Pe}=T;A.setupLightsView(Z),we===!0&&Me.setGlobalState(M.clippingPlanes,Z),J&&te.viewport(K.copy(J)),q.length>0&&ol(q,z,Z),ye.length>0&&ol(ye,z,Z),Pe.length>0&&ol(Pe,z,Z),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Jp(T,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[J.id]===void 0){const tt=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[J.id]=new Un(1,1,{generateMipmaps:!0,type:tt?jn:qn,minFilter:_r,samples:$.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const ye=A.state.transmissionRenderTarget[J.id],Pe=J.viewport||K;ye.setSize(Pe.z*M.transmissionResolutionScale,Pe.w*M.transmissionResolutionScale);const Ee=M.getRenderTarget(),De=M.getActiveCubeFace(),Fe=M.getActiveMipmapLevel();M.setRenderTarget(ye),M.getClearColor(me),pe=M.getClearAlpha(),pe<1&&M.setClearColor(16777215,.5),M.clear(),O&&ge.render(Z);const Xe=M.toneMapping;M.toneMapping=Hi;const Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),A.setupLightsView(J),we===!0&&Me.setGlobalState(M.clippingPlanes,J),ol(T,Z,J),L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye),j.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Mt=0,Bt=z.length;Mt<Bt;Mt++){const kt=z[Mt],{object:St,geometry:He,material:vt,group:lt}=kt;if(vt.side===gi&&St.layers.test(J.layers)){const Bn=vt.side;vt.side=En,vt.needsUpdate=!0,Zp(St,Z,J,He,vt,lt),vt.side=Bn,vt.needsUpdate=!0,tt=!0}}tt===!0&&(L.updateMultisampleRenderTarget(ye),L.updateRenderTargetMipmap(ye))}M.setRenderTarget(Ee,De,Fe),M.setClearColor(me,pe),Ge!==void 0&&(J.viewport=Ge),M.toneMapping=Xe}function ol(T,z,Z){const J=z.isScene===!0?z.overrideMaterial:null;for(let q=0,ye=T.length;q<ye;q++){const Pe=T[q],{object:Ee,geometry:De,group:Fe}=Pe;let Xe=Pe.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Ee.layers.test(Z.layers)&&Zp(Ee,z,Z,De,Xe,Fe)}}function Zp(T,z,Z,J,q,ye){T.onBeforeRender(M,z,Z,J,q,ye),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(M,z,Z,J,T,ye),q.transparent===!0&&q.side===gi&&q.forceSinglePass===!1?(q.side=En,q.needsUpdate=!0,M.renderBufferDirect(Z,z,J,q,T,ye),q.side=js,q.needsUpdate=!0,M.renderBufferDirect(Z,z,J,q,T,ye),q.side=gi):M.renderBufferDirect(Z,z,J,q,T,ye),T.onAfterRender(M,z,Z,J,q,ye)}function al(T,z,Z){z.isScene!==!0&&(z=k);const J=g.get(T),q=A.state.lights,ye=A.state.shadowsArray,Pe=q.state.version,Ee=be.getParameters(T,q.state,ye,z,Z),De=be.getProgramCacheKey(Ee);let Fe=J.programs;J.environment=T.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(T.isMeshStandardMaterial?ee:H).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",Ci),Fe=new Map,J.programs=Fe);let Xe=Fe.get(De);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===Pe)return em(T,Ee),Xe}else Ee.uniforms=be.getUniforms(T),T.onBeforeCompile(Ee,M),Xe=be.acquireProgram(Ee,De),Fe.set(De,Xe),J.uniforms=Ee.uniforms;const Ge=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),em(T,Ee),J.needsLights=Nx(T),J.lightsStateVersion=Pe,J.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function Qp(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=jl.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function em(T,z){const Z=g.get(T);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Ix(T,z,Z,J,q){z.isScene!==!0&&(z=k),L.resetTextureUnits();const ye=z.fog,Pe=J.isMeshStandardMaterial?z.environment:null,Ee=Y===null?M.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:_o,De=(J.isMeshStandardMaterial?ee:H).get(J.envMap||Pe),Fe=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xe=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!Z.morphAttributes.position,tt=!!Z.morphAttributes.normal,Mt=!!Z.morphAttributes.color;let Bt=Hi;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Bt=M.toneMapping);const kt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=kt!==void 0?kt.length:0,He=g.get(J),vt=A.state.lights;if(we===!0&&(it===!0||T!==Q)){const _n=T===Q&&J.id===se;Me.setState(J,T,_n)}let lt=!1;J.version===He.__version?(He.needsLights&&He.lightsStateVersion!==vt.state.version||He.outputColorSpace!==Ee||q.isBatchedMesh&&He.batching===!1||!q.isBatchedMesh&&He.batching===!0||q.isBatchedMesh&&He.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&He.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||q.isInstancedMesh&&He.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&He.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&He.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&He.instancingMorph===!1&&q.morphTexture!==null||He.envMap!==De||J.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Me.numPlanes||He.numIntersection!==Me.numIntersection)||He.vertexAlphas!==Fe||He.vertexTangents!==Xe||He.morphTargets!==Ge||He.morphNormals!==tt||He.morphColors!==Mt||He.toneMapping!==Bt||He.morphTargetsCount!==St)&&(lt=!0):(lt=!0,He.__version=J.version);let Bn=He.currentProgram;lt===!0&&(Bn=al(J,z,q));let Ir=!1,kn=!1,qo=!1;const At=Bn.getUniforms(),Cn=He.uniforms;if(te.useProgram(Bn.program)&&(Ir=!0,kn=!0,qo=!0),J.id!==se&&(se=J.id,kn=!0),Ir||Q!==T){te.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),At.setValue(b,"projectionMatrix",T.projectionMatrix),At.setValue(b,"viewMatrix",T.matrixWorldInverse);const Rn=At.map.cameraPosition;Rn!==void 0&&Rn.setValue(b,I.setFromMatrixPosition(T.matrixWorld)),$.logarithmicDepthBuffer&&At.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&At.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,kn=!0,qo=!0)}if(He.needsLights&&(vt.state.directionalShadowMap.length>0&&At.setValue(b,"directionalShadowMap",vt.state.directionalShadowMap,L),vt.state.spotShadowMap.length>0&&At.setValue(b,"spotShadowMap",vt.state.spotShadowMap,L),vt.state.pointShadowMap.length>0&&At.setValue(b,"pointShadowMap",vt.state.pointShadowMap,L)),q.isSkinnedMesh){At.setOptional(b,q,"bindMatrix"),At.setOptional(b,q,"bindMatrixInverse");const _n=q.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),At.setValue(b,"boneTexture",_n.boneTexture,L))}q.isBatchedMesh&&(At.setOptional(b,q,"batchingTexture"),At.setValue(b,"batchingTexture",q._matricesTexture,L),At.setOptional(b,q,"batchingIdTexture"),At.setValue(b,"batchingIdTexture",q._indirectTexture,L),At.setOptional(b,q,"batchingColorTexture"),q._colorsTexture!==null&&At.setValue(b,"batchingColorTexture",q._colorsTexture,L));const ei=Z.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&je.update(q,Z,Bn),(kn||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,At.setValue(b,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Cn.envMap.value=De,Cn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(Cn.envMapIntensity.value=z.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=LA()),kn&&(At.setValue(b,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&Ux(Cn,qo),ye&&J.fog===!0&&Ie.refreshFogUniforms(Cn,ye),Ie.refreshMaterialUniforms(Cn,J,We,ke,A.state.transmissionRenderTarget[T.id]),jl.upload(b,Qp(He),Cn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(jl.upload(b,Qp(He),Cn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&At.setValue(b,"center",q.center),At.setValue(b,"modelViewMatrix",q.modelViewMatrix),At.setValue(b,"normalMatrix",q.normalMatrix),At.setValue(b,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const _n=J.uniformsGroups;for(let Rn=0,xu=_n.length;Rn<xu;Rn++){const nr=_n[Rn];he.update(nr,Bn),he.bind(nr,Bn)}}return Bn}function Ux(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Nx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,z,Z){const J=g.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),g.get(T.texture).__webglTexture=z,g.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const Z=g.get(T);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Fx=b.createFramebuffer();this.setRenderTarget=function(T,z=0,Z=0){Y=T,U=z,W=Z;let J=null,q=!1,ye=!1;if(T){const Ee=g.get(T);if(Ee.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(b.FRAMEBUFFER,Ee.__webglFramebuffer),K.copy(T.viewport),V.copy(T.scissor),ie=T.scissorTest,te.viewport(K),te.scissor(V),te.setScissorTest(ie),se=-1;return}else if(Ee.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(Ee.__hasExternalTextures)L.rebindTextures(T,g.get(T.texture).__webglTexture,g.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Xe=T.depthTexture;if(Ee.__boundDepthTexture!==Xe){if(Xe!==null&&g.has(Xe)&&(T.width!==Xe.image.width||T.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ye=!0);const Fe=g.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?J=Fe[z][Z]:J=Fe[z],q=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?J=g.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?J=Fe[Z]:J=Fe,K.copy(T.viewport),V.copy(T.scissor),ie=T.scissorTest}else K.copy(re).multiplyScalar(We).floor(),V.copy(ae).multiplyScalar(We).floor(),ie=Ae;if(Z!==0&&(J=Fx),te.bindFramebuffer(b.FRAMEBUFFER,J)&&te.drawBuffers(T,J),te.viewport(K),te.scissor(V),te.setScissorTest(ie),q){const Ee=g.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ee.__webglTexture,Z)}else if(ye){const Ee=z;for(let De=0;De<T.textures.length;De++){const Fe=g.get(T.textures[De]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+De,Fe.__webglTexture,Z,Ee)}}else if(T!==null&&Z!==0){const Ee=g.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ee.__webglTexture,Z)}se=-1},this.readRenderTargetPixels=function(T,z,Z,J,q,ye,Pe,Ee=0){if(!(T&&T.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=g.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De){te.bindFramebuffer(b.FRAMEBUFFER,De);try{const Fe=T.textures[Ee],Xe=Fe.format,Ge=Fe.type;if(!$.textureFormatReadable(Xe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ge)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-J&&Z>=0&&Z<=T.height-q&&(T.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ee),b.readPixels(z,Z,J,q,fe.convert(Xe),fe.convert(Ge),ye))}finally{const Fe=Y!==null?g.get(Y).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,z,Z,J,q,ye,Pe,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=g.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(De=De[Pe]),De)if(z>=0&&z<=T.width-J&&Z>=0&&Z<=T.height-q){te.bindFramebuffer(b.FRAMEBUFFER,De);const Fe=T.textures[Ee],Xe=Fe.format,Ge=Fe.type;if(!$.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.bufferData(b.PIXEL_PACK_BUFFER,ye.byteLength,b.STREAM_READ),T.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ee),b.readPixels(z,Z,J,q,fe.convert(Xe),fe.convert(Ge),0);const Mt=Y!==null?g.get(Y).__webglFramebuffer:null;te.bindFramebuffer(b.FRAMEBUFFER,Mt);const Bt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await QM(b,Bt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ye),b.deleteBuffer(tt),b.deleteSync(Bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Z=0){const J=Math.pow(2,-Z),q=Math.floor(T.image.width*J),ye=Math.floor(T.image.height*J),Pe=z!==null?z.x:0,Ee=z!==null?z.y:0;L.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,Z,0,0,Pe,Ee,q,ye),te.unbindTexture()};const Ox=b.createFramebuffer(),Bx=b.createFramebuffer();this.copyTextureToTexture=function(T,z,Z=null,J=null,q=0,ye=null){ye===null&&(q!==0?(Ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=q,q=0):ye=0);let Pe,Ee,De,Fe,Xe,Ge,tt,Mt,Bt;const kt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Ee=Z.max.y-Z.min.y,De=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,Xe=Z.min.y,Ge=Z.isBox3?Z.min.z:0;else{const ei=Math.pow(2,-q);Pe=Math.floor(kt.width*ei),Ee=Math.floor(kt.height*ei),T.isDataArrayTexture?De=kt.depth:T.isData3DTexture?De=Math.floor(kt.depth*ei):De=1,Fe=0,Xe=0,Ge=0}J!==null?(tt=J.x,Mt=J.y,Bt=J.z):(tt=0,Mt=0,Bt=0);const St=fe.convert(z.format),He=fe.convert(z.type);let vt;z.isData3DTexture?(L.setTexture3D(z,0),vt=b.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(L.setTexture2DArray(z,0),vt=b.TEXTURE_2D_ARRAY):(L.setTexture2D(z,0),vt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,z.unpackAlignment);const lt=b.getParameter(b.UNPACK_ROW_LENGTH),Bn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ir=b.getParameter(b.UNPACK_SKIP_PIXELS),kn=b.getParameter(b.UNPACK_SKIP_ROWS),qo=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,kt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,kt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Xe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ge);const At=T.isDataArrayTexture||T.isData3DTexture,Cn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const ei=g.get(T),_n=g.get(z),Rn=g.get(ei.__renderTarget),xu=g.get(_n.__renderTarget);te.bindFramebuffer(b.READ_FRAMEBUFFER,Rn.__webglFramebuffer),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,xu.__webglFramebuffer);for(let nr=0;nr<De;nr++)At&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(T).__webglTexture,q,Ge+nr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,g.get(z).__webglTexture,ye,Bt+nr)),b.blitFramebuffer(Fe,Xe,Pe,Ee,tt,Mt,Pe,Ee,b.DEPTH_BUFFER_BIT,b.NEAREST);te.bindFramebuffer(b.READ_FRAMEBUFFER,null),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||g.has(T)){const ei=g.get(T),_n=g.get(z);te.bindFramebuffer(b.READ_FRAMEBUFFER,Ox),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,Bx);for(let Rn=0;Rn<De;Rn++)At?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ei.__webglTexture,q,Ge+Rn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ei.__webglTexture,q),Cn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,_n.__webglTexture,ye,Bt+Rn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,_n.__webglTexture,ye),q!==0?b.blitFramebuffer(Fe,Xe,Pe,Ee,tt,Mt,Pe,Ee,b.COLOR_BUFFER_BIT,b.NEAREST):Cn?b.copyTexSubImage3D(vt,ye,tt,Mt,Bt+Rn,Fe,Xe,Pe,Ee):b.copyTexSubImage2D(vt,ye,tt,Mt,Fe,Xe,Pe,Ee);te.bindFramebuffer(b.READ_FRAMEBUFFER,null),te.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Cn?T.isDataTexture||T.isData3DTexture?b.texSubImage3D(vt,ye,tt,Mt,Bt,Pe,Ee,De,St,He,kt.data):z.isCompressedArrayTexture?b.compressedTexSubImage3D(vt,ye,tt,Mt,Bt,Pe,Ee,De,St,kt.data):b.texSubImage3D(vt,ye,tt,Mt,Bt,Pe,Ee,De,St,He,kt):T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ye,tt,Mt,Pe,Ee,St,He,kt.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ye,tt,Mt,kt.width,kt.height,St,kt.data):b.texSubImage2D(b.TEXTURE_2D,ye,tt,Mt,Pe,Ee,St,He,kt);b.pixelStorei(b.UNPACK_ROW_LENGTH,lt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Bn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ir),b.pixelStorei(b.UNPACK_SKIP_ROWS,kn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qo),ye===0&&z.generateMipmaps&&b.generateMipmap(vt),te.unbindTexture()},this.initRenderTarget=function(T){g.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){U=0,W=0,Y=null,te.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const ks={colors:{bg:331034,fog:331034,champagneGold:16767334,deepGreen:202762,accentRed:10027008},particles:{count:1500,dustCount:2e3,snowCount:1e3,treeHeight:24,treeRadius:8},camera:{z:50},preload:{autoScanLocal:!0,scanCount:5,images:["https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600","https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600","https://images.unsplash.com/photo-1480733992048-df39e3947a38?q=80&w=600","https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600"]}};class IA{_core;constructor(){this._core=null}init(e){const n=new d1;n.background=new $e(ks.colors.bg),n.fog=new Ud(ks.colors.fog,.015);const i=new Fs;n.add(i);const s=new In(42,window.innerWidth/window.innerHeight,.1,1e3);s.position.set(0,2,ks.camera.z);const r=new DA({antialias:!0,alpha:!0,powerPreference:"high-performance"});return r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.toneMapping=yd,r.toneMappingExposure=2.2,e.innerHTML="",e.appendChild(r.domElement),this._core=l_({scene:n,mainGroup:i,camera:s,renderer:r}),this._core}get core(){if(!this._core)throw new Error("Scene has not been initialized");return this._core}resize(){if(!this._core)return;const{camera:e,renderer:n}=this._core;e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}dispose(){this._core&&(this._core.renderer.dispose(),this._core.scene.clear(),this._core=null)}}class UA extends d1{constructor(){super(),this.name="RoomEnvironment";const e=new Js;e.deleteAttribute("uv");const n=new vi({side:En}),i=new vi,s=new C1(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ht(e,n);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new m1(e,i,6),a=new $t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new ht(e,Jr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ht(e,Jr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new ht(e,Jr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new ht(e,Jr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const f=new ht(e,Jr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new ht(e,Jr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Jr(t){return new TS({color:0,emissive:16777215,emissiveIntensity:t})}class NA{pmremGenerator;core;constructor(e){this.core=e,this.pmremGenerator=null}applyEnvironment(){this.pmremGenerator=new Rf(this.core.renderer),this.core.scene.environment=this.pmremGenerator.fromScene(new UA,.04).texture}setupLights(){const{scene:e,mainGroup:n}=this.core,i=new NS(16777215,.6);e.add(i);const s=new C1(16755200,2,20);s.position.set(0,5,0),n.add(s),n.add(s.clone());const r=new c0(16764006,1200);r.position.set(30,40,40),r.angle=.5,r.penumbra=.5,e.add(r);const o=new c0(6719743,800);o.position.set(-30,20,-30),e.add(o);const a=new US(16772795,.8);a.position.set(0,0,50),e.add(a)}dispose(){this.pmremGenerator?.dispose(),this.pmremGenerator=null}}class uh{mesh;type;isDust;posTree;posScatter;baseScale;spinSpeed;constructor(e,n,i,s){this.mesh=e,this.type=n,this.isDust=!!s?.isDust,this.posTree=new N,this.posScatter=new N,this.baseScale=e.scale.x;const r=n==="PHOTO"?.3:2;this.spinSpeed=new N((Math.random()-.5)*r,(Math.random()-.5)*r,(Math.random()-.5)*r),this.calculatePositions(i)}setTreePosition(e,n,i){this.posTree.set(e,n,i)}update(e,n){const{mode:i,focusTarget:s,clock:r,core:o}=e;let a=this.posTree;if(i==="SCATTER")a=this.posScatter;else if(i==="FOCUS")if(this.mesh===s){const u=new N(0,2,35),h=new Tt().copy(o.mainGroup.matrixWorld).invert();a=u.applyMatrix4(h)}else a=this.posScatter;const l=i==="FOCUS"&&this.mesh===s?5:2;this.mesh.position.lerp(a,l*n),i==="SCATTER"?(this.mesh.rotation.x+=this.spinSpeed.x*n,this.mesh.rotation.y+=this.spinSpeed.y*n,this.mesh.rotation.z+=this.spinSpeed.z*n):i==="TREE"&&(this.type==="PHOTO"?(this.mesh.lookAt(0,this.mesh.position.y,0),this.mesh.rotateY(Math.PI)):(this.mesh.rotation.x=hc.lerp(this.mesh.rotation.x,0,n),this.mesh.rotation.z=hc.lerp(this.mesh.rotation.z,0,n),this.mesh.rotation.y+=.5*n)),i==="FOCUS"&&this.mesh===s&&this.mesh.lookAt(o.camera.position);let c=this.baseScale;this.isDust?(c=this.baseScale*(.8+.4*Math.sin(r.elapsedTime*4+this.mesh.id)),i==="TREE"&&(c=0)):i==="SCATTER"&&this.type==="PHOTO"?c=this.baseScale*2.5:i==="FOCUS"&&(c=this.mesh===s?this.baseScale*4.5:this.baseScale*.8),this.mesh.scale.lerp(new N(c,c,c),4*n)}calculatePositions(e){if(this.type==="PHOTO"){this.posTree.set(0,0,0);const f=8+Math.random()*12,d=Math.random()*Math.PI*2,_=Math.acos(2*Math.random()-1);this.posScatter.set(f*Math.sin(_)*Math.cos(d),f*Math.sin(_)*Math.sin(d),f*Math.cos(_));return}const n=e.particles.treeHeight,i=n/2;let s=Math.random();s=Math.pow(s,.8);const r=s*n-i;let o=e.particles.treeRadius*(1-s);o<.5&&(o=.5);const a=s*50*Math.PI+Math.random()*Math.PI,l=o*(.8+Math.random()*.4);this.posTree.set(Math.cos(a)*l,r,Math.sin(a)*l);const c=this.isDust?12+Math.random()*20:8+Math.random()*12,u=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);this.posScatter.set(c*Math.sin(h)*Math.cos(u),c*Math.sin(h)*Math.sin(u),c*Math.cos(h))}}class FA{builders;config;constructor(e){this.config=e,this.builders=new Map,this.registerDefaults()}create(e){const n=this.builders.get(e);if(!n)throw new Error("Missing ornament builder for type: "+e);return n()}registerDefaults(){const e=new pc(.5,32,32),n=new Js(.55,.55,.55),i=this.createCandyCaneGeometry(),s=new vi({color:this.config.colors.champagneGold,metalness:1,roughness:.1,envMapIntensity:2,emissive:4469504,emissiveIntensity:.3}),r=new vi({color:this.config.colors.deepGreen,metalness:.2,roughness:.8,emissive:8704,emissiveIntensity:.2}),o=new ES({color:this.config.colors.accentRed,metalness:.3,roughness:.2,clearcoat:1,emissive:3342336}),a=new vi({map:this.createCandyCaneTexture(),roughness:.4}),l=new vi({color:this.config.colors.accentRed,roughness:.4,metalness:.1}),c=new vi({color:16777215,roughness:.9,metalness:0});this.builders.set("GIFT_GREEN",()=>new ht(n,r)),this.builders.set("GIFT_GOLD",()=>new ht(n,s)),this.builders.set("GOLDEN_BALL",()=>new ht(e,s)),this.builders.set("RED_BALL",()=>new ht(e,o)),this.builders.set("CANDY_CANE",()=>new ht(i,a)),this.builders.set("SANTA_HAT",()=>this.createSantaHatMesh(l,c))}createCandyCaneTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,128,128),n.fillStyle="#880000",n.beginPath();const i=64;for(let r=-256;r<512;r+=i)n.moveTo(r,0),n.lineTo(r+i,128),n.lineTo(r+i-i/2,256),n.lineTo(r-i/2,0);n.fill();const s=new Hy(e);return s.wrapS=Ua,s.wrapT=Ua,s.repeat.set(5,5),s}createCandyCaneGeometry(){const e=new _1([new N(0,-.5,0),new N(0,.3,0),new N(.1,.5,0),new N(.3,.4,0)]);return new Hd(e,16,.12,8,!1)}createSantaHatMesh(e,n){const i=new Fs,s=new ht(new Fd(.35,.9,24),e);s.position.y=.35,i.add(s);const r=new ht(new Nc(.45,.45,.15,24),n);r.position.y=-.05,i.add(r);const o=new ht(new pc(.15,16,16),n);return o.position.set(.05,.8,.05),i.add(o),i}}class OA{ornaments;photoGroup;factory;core;clock;config;constructor(e,n,i=ks){this.core=e,this.clock=n,this.config=i,this.ornaments=[],this.photoGroup=new Fs,this.factory=new FA(i),this.core.mainGroup.add(this.photoGroup)}populateBaseDecorations(){const e=this.config.particles.count;for(let n=0;n<e;n++){const i=this.pickRandomType(),s=this.factory.create(i),r=.4+Math.random()*.5;s.scale.set(r,r,r),s.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.core.mainGroup.add(s),this.ornaments.push(new uh(s,i,this.config))}this.createStar(),this.createDust()}addPhoto(e){e.colorSpace=yn;let n=1.2,i=1.2;if(e.image){const m=e.image,p=m.width/m.height;p>1?i=n/p:n=i*p}const s=.05,r=.05,o=n+s*2,a=i+s*2,l=new Js(o,a,r),c=new vi({color:this.config.colors.champagneGold,metalness:1,roughness:.1}),u=new ht(l,c),h=new tl(n,i),f=new ka({map:e,side:gi}),d=new ht(h,f);d.position.z=r/2+.001;const _=new Fs;_.add(u),_.add(d);const v=.8;_.scale.set(v,v,v),this.photoGroup.add(_),this.ornaments.push(new uh(_,"PHOTO",this.config)),this.updatePhotoLayout()}update(e,n){this.ornaments.length&&this.ornaments.forEach(i=>i.update({mode:e.mode,focusTarget:e.focusTarget,clock:this.clock,core:this.core},n))}getRandomPhotoMesh(){const e=this.ornaments.filter(i=>i.type==="PHOTO");if(!e.length)return null;const n=Math.floor(Math.random()*e.length);return e[n].mesh}dispose(){this.photoGroup.clear(),this.ornaments.splice(0,this.ornaments.length)}pickRandomType(){const e=Math.random();return e<.35?"GIFT_GREEN":e<.65?"GIFT_GOLD":e<.88?"GOLDEN_BALL":e<.93?"RED_BALL":e<.98?"SANTA_HAT":"CANDY_CANE"}createStar(){const e=new Fc,n=5,i=1.5,s=.7;for(let l=0;l<n*2;l++){const c=l*Math.PI/n+Math.PI/2,u=l%2===0?i:s,h=Math.cos(c)*u,f=Math.sin(c)*u;l===0?e.moveTo(h,f):e.lineTo(h,f)}e.closePath();const r=new zd(e,{depth:.4,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:2});r.center();const o=new vi({color:16768392,emissive:16755200,emissiveIntensity:1,metalness:1,roughness:0}),a=new ht(r,o);a.position.set(0,this.config.particles.treeHeight/2+1.2,0),this.core.mainGroup.add(a)}createDust(){const e=new Gd(.08,0),n=new ka({color:16772795,transparent:!0,opacity:.8});for(let i=0;i<this.config.particles.dustCount;i++){const s=new ht(e,n);s.scale.setScalar(.5+Math.random()),this.core.mainGroup.add(s),this.ornaments.push(new uh(s,"DUST",this.config,{isDust:!0}))}}updatePhotoLayout(){const e=this.ornaments.filter(a=>a.type==="PHOTO"),n=e.length;if(!n)return;const i=this.config.particles.treeHeight*.9,s=-i/2,r=i/n,o=3;e.forEach((a,l)=>{const c=s+r*l+r/2,u=this.config.particles.treeHeight,h=(c+u/2)/u;let f=this.config.particles.treeRadius*(1-h);f<1&&(f=1);const d=f+3,_=h*Math.PI*2*o+Math.PI/4;a.setTreePosition(Math.cos(_)*d,c,Math.sin(_)*d)})}}class BA{snow;scene;config;flakes;dummy;constructor(e,n=ks){this.scene=e,this.config=n,this.snow=null,this.flakes=[],this.dummy=new $t}create(){const e=this.config.particles.snowCount,n=this.createSnowflakeGeometry(),i=new vi({color:16777215,side:gi,roughness:.95,metalness:.05});this.snow=new m1(n,i,e),this.snow.instanceMatrix.setUsage(JM),this.scene.add(this.snow),this.flakes.length=0;for(let s=0;s<e;s++){const r={position:this.randomSpawnPosition(),fallSpeed:Math.random()*.2+.05,swaySpeed:Math.random()*.5+.1,swayOffset:Math.random()*Math.PI*2,tiltAxis:new N(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),tiltAngle:Math.random()*Math.PI*2,spinAngle:Math.random()*Math.PI*2,spinSpeed:Math.random()*2+.5,scale:Math.random()*.7+.4};this.flakes.push(r),this.writeMatrix(s,r)}}update(e){if(!this.snow)return;const n=e.getDelta();for(let i=0;i<this.flakes.length;i++){const s=this.flakes[i];s.position.y-=s.fallSpeed,s.position.x+=Math.sin(e.elapsedTime*1.5+s.swayOffset)*s.swaySpeed*.02,s.position.z+=Math.cos(e.elapsedTime*1.2+s.swayOffset)*s.swaySpeed*.015,s.spinAngle+=s.spinSpeed*n,s.position.y<-40&&(s.position.copy(this.randomSpawnPosition(!0)),s.tiltAxis=new N(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),s.tiltAngle=Math.random()*Math.PI*2,s.spinAngle=Math.random()*Math.PI*2,s.spinSpeed=Math.random()*2+.5,s.scale=Math.random()*.7+.4),this.writeMatrix(i,s)}this.snow.instanceMatrix.needsUpdate=!0}dispose(){this.snow&&(this.scene.remove(this.snow),this.snow.geometry.dispose(),this.snow.material.dispose(),this.snow.dispose(),this.snow=null,this.flakes.length=0)}writeMatrix(e,n){if(!this.snow)return;const i=new Er().setFromAxisAngle(n.tiltAxis,n.tiltAngle),s=new N(0,0,1).applyQuaternion(i),r=new Er().setFromAxisAngle(s,n.spinAngle);this.dummy.position.copy(n.position),this.dummy.quaternion.copy(i.multiply(r)),this.dummy.scale.setScalar(n.scale),this.dummy.updateMatrix(),this.snow.setMatrixAt(e,this.dummy.matrix)}createSnowflakeGeometry(){const e=new Fc,n=360;for(let i=0;i<=n;i++){const s=i/n*Math.PI*2,r=this.computeSnowflakePoint(s);i===0?e.moveTo(r.x,r.y):e.lineTo(r.x,r.y)}return new Vd(e)}computeSnowflakePoint(e){let n={x:e,y:.25};return n=this.fieldA(this.fieldB(n,5)),new ue(n.y*Math.cos(n.x),n.y*Math.sin(n.x))}fieldA(e){return e.y+=.02*Math.floor(Math.cos(e.x*6)*5),e.y+=.01*Math.floor(10*Math.cos(e.x*30)),e.y+=.5*Math.cos(e.y*10),e}fieldB(e,n){return e.y+=.1*Math.cos(e.y*100+10),e.y+=.1*Math.cos(e.y*20+n),e.y+=.04*Math.cos(e.y*10+10),e}randomSpawnPosition(e=!1){const r=e?30:-20,o=e?50:40;return new N(hc.randFloatSpread(120),hc.randFloat(r,o),-(25+Math.random()*45))}}class kA{loader;options;constructor(e){this.options=e,this.loader=new A1}loadPreconfigured(){if(ks.preload.images.forEach(e=>{this.loader.load(e,n=>this.handleTexture(n),void 0,n=>console.error("Texture load error",n))}),ks.preload.autoScanLocal)for(let e=1;e<=ks.preload.scanCount;e++){const n="./images/"+e+".jpg",i="./images/"+e+".png";this.loader.load(n,s=>this.handleTexture(s),void 0,()=>{this.loader.load(i,s=>this.handleTexture(s))})}}handleTexture(e){e.colorSpace=yn,this.options.onTexture(e)}}const Kl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zA=new Bc(-1,1,1,-1,0,1);class VA extends gn{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}}const GA=new VA;class N1{constructor(e){this._mesh=new ht(GA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class HA extends nl{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fc.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new N1(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class I0 extends nl{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class WA extends nl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class XA{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new ue);this._width=i.width,this._height=i.height,n=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new HA(Kl),this.copyPass.material.blending=Gi,this.clock=new R1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}I0!==void 0&&(o instanceof I0?i=!0:o instanceof WA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qA extends nl{constructor(e,n,i=null,s=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,n,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const YA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class yo extends nl{constructor(e,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Un(r,o,{type:jn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Un(r,o,{type:jn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=YA;this.highPassUniforms=fc.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fc.clone(Kl.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:Kl.vertexShader,fragmentShader:Kl.fragmentShader,premultipliedAlpha:!0,blending:Nh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new ka,this._fsQuad=new N1(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ue(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,n,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=yo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let s=0;s<e;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}}yo.BlurDirectionX=new ue(1,0);yo.BlurDirectionY=new ue(0,1);class jA{core;constructor(e){this.core=e}createComposer(){const{scene:e,camera:n,renderer:i}=this.core,s=new qA(e,n),r=new yo(new ue(window.innerWidth,window.innerHeight),1.5,.4,.85);r.threshold=.65,r.strength=.5,r.radius=.4;const o=new XA(i);return o.addPass(s),o.addPass(r),o}}class KA{sceneManager;environmentManager;ornamentSystem;snowSystem;composer;clock;animationId;resizeHandler;state;container;constructor(e){this.container=e,this.sceneManager=new IA,this.environmentManager=null,this.ornamentSystem=null,this.snowSystem=null,this.composer=null,this.clock=new R1,this.animationId=null,this.resizeHandler=()=>this.handleResize(),this.state={mode:"TREE",focusIndex:-1,focusTarget:null,hand:{detected:!1,x:0,y:0},rotation:{x:0,y:0}}}mount(){const e=this.sceneManager.init(this.container);this.environmentManager=new NA(e),this.environmentManager.applyEnvironment(),this.environmentManager.setupLights(),this.ornamentSystem=new OA(e,this.clock),this.ornamentSystem.populateBaseDecorations(),new kA({onTexture:s=>this.ornamentSystem?.addPhoto(s)}).loadPreconfigured(),this.snowSystem=new BA(e.scene),this.snowSystem.create();const i=new jA(e);this.composer=i.createComposer(),window.addEventListener("resize",this.resizeHandler),this.animate()}setHandTrackingData(e){if(!e){this.state.hand.detected=!1,this.state.focusTarget=null;return}if(!e.detected){this.state.hand.detected=!1,this.state.focusTarget=null;return}this.state.hand.detected=!0,this.state.hand.x=e.position.x,this.state.hand.y=e.position.y;const{extensionRatio:n,pinchRatio:i}=e.ratios;n<1.5?(this.state.mode="TREE",this.state.focusTarget=null):i<.35?this.state.mode!=="FOCUS"&&(this.state.mode="FOCUS",this.state.focusTarget=this.ornamentSystem?.getRandomPhotoMesh()??null):n>1.7&&(this.state.mode="SCATTER",this.state.focusTarget=null)}addPhotoTexture(e){this.ornamentSystem?.addPhoto(e)}destroy(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),window.removeEventListener("resize",this.resizeHandler),this.environmentManager?.dispose(),this.environmentManager=null,this.snowSystem?.dispose(),this.snowSystem=null,this.ornamentSystem?.dispose(),this.ornamentSystem=null,this.sceneManager.dispose()}animate=()=>{this.animationId=requestAnimationFrame(this.animate);const e=this.getCore();if(!this.composer||!this.ornamentSystem)return;const n=this.clock.getDelta();this.updateRotation(n),e.mainGroup.updateWorldMatrix(!0,!1),this.ornamentSystem.update(this.state,n),this.snowSystem?.update(this.clock),this.composer.render()};updateRotation(e){if(this.state.mode==="SCATTER"&&this.state.hand.detected){const i=this.state.hand.x*Math.PI*.9,s=this.state.hand.y*Math.PI*.25;this.state.rotation.y+=(i-this.state.rotation.y)*3*e,this.state.rotation.x+=(s-this.state.rotation.x)*3*e}else this.state.mode==="TREE"?(this.state.rotation.y+=.3*e,this.state.rotation.x+=(0-this.state.rotation.x)*2*e):this.state.rotation.y+=.1*e;const n=this.getCore();n.mainGroup.rotation.x=this.state.rotation.x,n.mainGroup.rotation.y=this.state.rotation.y}handleResize(){this.sceneManager.resize(),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}getCore(){return this.sceneManager.core}}const $A=Ja({__name:"ChristmasTree",props:{newTexture:{},handTrackingData:{}},emits:["tree-render-completed"],setup(t,{emit:e}){const n=t,i=e,s=Ni(null);let r=null;xa(()=>n.newTexture,l=>{l&&r&&r.addPhotoTexture(l)}),xa(()=>n.handTrackingData,l=>{r?.setHandTrackingData(l??null)},{deep:!0});const o=()=>{s.value&&(r=new KA(s.value),r.mount(),n.handTrackingData&&r.setHandTrackingData(n.handTrackingData),i("tree-render-completed"))},a=()=>{r?.destroy(),r=null};return Rc(o),pd(a),Pc(a),(l,c)=>(Ys(),Za("div",{ref_key:"threeContainer",ref:s,class:"absolute top-0 left-0 z-[1] block h-screen w-full overflow-hidden bg-[#282c34]"},null,512))}}),JA=["frameborder","border","marginwidth","marginheight","width","height","src","allow"],ZA=Ja({__name:"NeteasePlayer",props:{frameborder:{},border:{},marginwidth:{},marginheight:{},width:{},height:{},src:{},iframeAllow:{}},setup(t){return(e,n)=>(Ys(),Za("iframe",{frameborder:t.frameborder||"no",border:t.border||"0",marginwidth:t.marginwidth||"0",marginheight:t.marginheight||"0",width:t.width||"330",height:t.height||"86",src:t.src||"https://music.163.com/outchain/player?type=2&id=1999170057&auto=1&height=66",allow:t.iframeAllow||"autoplay; encrypted-media;"},null,8,JA))}});var So=typeof self<"u"?self:{};function hr(){throw Error("Invalid UTF8")}function U0(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let Nl,hh;const QA=typeof TextDecoder<"u";let e4;const t4=typeof TextEncoder<"u";function F1(t){if(t4)t=(e4||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){const r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var qd,mc;e:{for(var N0=["CLOSURE_FLAGS"],fh=So,dh=0;dh<N0.length;dh++)if((fh=fh[N0[dh]])==null){mc=null;break e}mc=fh}var Wa,F0=mc&&mc[610401301];qd=F0!=null&&F0;const O0=So.navigator;function Df(t){return!!qd&&!!Wa&&Wa.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function ri(t){var e;return(e=So.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Us(){return!!qd&&!!Wa&&Wa.brands.length>0}function ph(){return Us()?Df("Chromium"):(ri("Chrome")||ri("CriOS"))&&!(!Us()&&ri("Edge"))||ri("Silk")}function Vc(t){return Vc[" "](t),t}Wa=O0&&O0.userAgentData||null,Vc[" "]=function(){};var n4=!Us()&&(ri("Trident")||ri("MSIE"));!ri("Android")||ph(),ph(),ri("Safari")&&(ph()||!Us()&&ri("Coast")||!Us()&&ri("Opera")||!Us()&&ri("Edge")||(Us()?Df("Microsoft Edge"):ri("Edg/"))||Us()&&Df("Opera"));var O1={},ua=null;function i4(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return(function(r,o){function a(c){for(;l<r.length;){const u=r.charAt(l++),h=ua[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}B1();let l=0;for(;;){const c=a(-1),u=a(0),h=a(64),f=a(64);if(f===64&&c===-1)break;o(c<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),f!=64&&o(h<<6&192|f))}})(t,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function B1(){if(!ua){ua={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));O1[n]=i;for(let s=0;s<i.length;s++){const r=i[s];ua[r]===void 0&&(ua[r]=s)}}}}var k1=typeof Uint8Array<"u",z1=!n4&&typeof btoa=="function";function B0(t){if(!z1){var e;e===void 0&&(e=0),B1(),e=O1[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let l=0,c=0;for(;l<t.length-2;l+=3){var s=t[l],r=t[l+1],o=t[l+2],a=e[s>>2];s=e[(3&s)<<4|r>>4],r=e[(15&r)<<2|o>>6],o=e[63&o],n[c++]=a+s+r+o}switch(a=0,o=i,t.length-l){case 2:o=e[(15&(a=t[l+1]))<<2]||i;case 1:t=t[l],n[c]=e[t>>2]+e[(3&t)<<4|a>>4]+o+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const k0=/[-_.]/g,s4={"-":"+",_:"/",".":"="};function r4(t){return s4[t]||""}function V1(t){if(!z1)return i4(t);k0.test(t)&&(t=t.replace(k0,r4)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function wr(t){return k1&&t!=null&&t instanceof Uint8Array}var bo={};function Ar(){return o4||=new fs(null,bo)}function Yd(t){G1(bo);var e=t.g;return(e=e==null||wr(e)?e:typeof e=="string"?V1(e):null)==null?e:t.g=e}var fs=class{h(){return new Uint8Array(Yd(this)||0)}constructor(t,e){if(G1(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let o4,a4;function G1(t){if(t!==bo)throw Error("illegal external caller")}function H1(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function If(t){return H1(t=Error(t),"warning"),t}function jd(t){if(t!=null){var e=a4??={},n=e[t]||0;n>=5||(e[t]=n+1,H1(t=Error(),"incident"),(function(i){So.setTimeout((()=>{throw i}),0)})(t))}}var Gc=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Oo(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var l4=Oo("jas",void 0,!0),z0=Oo(void 0,"0di"),sa=Oo(void 0,"1oa"),Eo=Oo(void 0,Symbol()),c4=Oo(void 0,"0actk"),W1=Oo(void 0,"8utk");const Be=Gc?l4:"Ea",X1={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},q1=Object.defineProperties;function Hc(t,e){Gc||Be in t||q1(t,X1),t[Be]|=e}function jt(t,e){Gc||Be in t||q1(t,X1),t[Be]=e}function Bo(t){return Hc(t,34),t}function u4(t,e){jt(e,-15615&(0|t))}function Uf(t,e){jt(e,-15581&(34|t))}function Wc(){return typeof BigInt=="function"}function Nn(t){return Array.prototype.slice.call(t)}var Kd,il={};function Xc(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function $d(t,e){if(t!=null){if(typeof t=="string")t=t?new fs(t,bo):Ar();else if(t.constructor!==fs)if(wr(t))t=t.length?new fs(new Uint8Array(t),bo):Ar();else{if(!e)throw Error();t=void 0}}return t}const V0=[];function Zs(t){if(2&t)throw Error()}jt(V0,55),Kd=Object.freeze(V0);class G0{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}function Jd(t){return Eo?t[Eo]:void 0}var h4=Object.freeze({});function qc(t){return t.Na=!0,t}var f4=qc((t=>typeof t=="number")),H0=qc((t=>typeof t=="string")),d4=qc((t=>typeof t=="boolean")),Yc=typeof So.BigInt=="function"&&typeof So.BigInt(0)=="bigint";function zs(t){var e=t;if(H0(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(f4(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Yc?BigInt(t):t=d4(t)?t?"1":"0":H0(t)?t.trim()||"0":String(t)}var Nf=qc((t=>Yc?t>=m4&&t<=_4:t[0]==="-"?W0(t,p4):W0(t,g4)));const p4=Number.MIN_SAFE_INTEGER.toString(),m4=Yc?BigInt(Number.MIN_SAFE_INTEGER):void 0,g4=Number.MAX_SAFE_INTEGER.toString(),_4=Yc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function W0(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}const v4=typeof Uint8Array.prototype.slice=="function";let Y1,bt=0,Vt=0;function X0(t){const e=t>>>0;bt=e,Vt=(t-e)/4294967296>>>0}function Cr(t){if(t<0){X0(-t);const[e,n]=tp(bt,Vt);bt=e>>>0,Vt=n>>>0}else X0(t)}function Zd(t){const e=Y1||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Vt=0,bt=e.getUint32(0,!0)}function Qd(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Xa(t,e)}function ep(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=Qd(t,e))=="number"?n?-t:t:n?"-"+t:t}function Xa(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Wc()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+q0(n)+q0(t));return n}function q0(t){return t=String(t),"0000000".slice(t.length)+t}function j1(){var t=bt,e=Vt;if(2147483648&e)if(Wc())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=tp(t,e);t="-"+Xa(n,i)}else t=Xa(t,e);return t}function jc(t){if(t.length<16)Cr(Number(t));else if(Wc())t=BigInt(t),bt=Number(t&BigInt(4294967295))>>>0,Vt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Vt=bt=0;const n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){const r=Number(t.slice(i,s));Vt*=1e6,bt=1e6*bt+r,bt>=4294967296&&(Vt+=Math.trunc(bt/4294967296),Vt>>>=0,bt>>>=0)}if(e){const[i,s]=tp(bt,Vt);bt=i,Vt=s}}}function tp(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const qa=typeof BigInt=="function"?BigInt.asIntN:void 0,x4=typeof BigInt=="function"?BigInt.asUintN:void 0,Vs=Number.isSafeInteger,Kc=Number.isFinite,To=Math.trunc,M4=zs(0);function Qs(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function K1(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const y4=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ya(t){switch(typeof t){case"bigint":return!0;case"number":return Kc(t);case"string":return y4.test(t);default:return!1}}function ko(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Kc(t)?0|t:void 0}function $1(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Kc(t)?t>>>0:void 0}function Y0(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function J1(t){const e=t.length;return t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337}function Z1(t){return J1(t)?t:(jc(t),j1())}function np(t){return t=To(t),Vs(t)||(Cr(t),t=ep(bt,Vt)),t}function Q1(t){var e=To(Number(t));return Vs(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Z1(t))}function j0(t){var e=To(Number(t));return Vs(e)?zs(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Wc()?zs(qa(64,BigInt(t))):zs(Z1(t)))}function K0(t){if(Vs(t))t=zs(np(t));else{if(t=To(t),Vs(t))t=String(t);else{const e=String(t);J1(e)?t=e:(Cr(t),t=j1())}t=zs(t)}return t}function Ff(t){return t==null?t:typeof t=="bigint"?(Nf(t)?t=Number(t):(t=qa(64,t),t=Nf(t)?Number(t):String(t)),t):Ya(t)?typeof t=="number"?np(t):Q1(t):void 0}function S4(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(x4(64,t));if(Ya(t)){if(e==="string")return e=To(Number(t)),Vs(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Y0(t)||(jc(t),t=Xa(bt,Vt))),t;if(e==="number")return(t=To(t))>=0&&Vs(t)?t:(function(n){if(n<0){Cr(n);var i=Xa(bt,Vt);return n=Number(i),Vs(n)?n:i}return Y0(i=String(n))?i:(Cr(n),Qd(bt,Vt))})(t)}}function ev(t){if(typeof t!="string")throw Error();return t}function zo(t){if(t!=null&&typeof t!="string")throw Error();return t}function wo(t){return t==null||typeof t=="string"?t:void 0}function ip(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===il)return t;if(!Array.isArray(t))return n?2&i?((t=e[z0])||(Bo((t=new e).u),t=e[z0]=t),e=t):e=new e:e=void 0,e;let s=n=0|t[Be];return s===0&&(s|=32&i),s|=2&i,s!==n&&jt(t,s),new e(t)}function b4(t,e,n){if(e)e:{if(!Ya(e=t))throw If("int64");switch(typeof e){case"string":e=j0(e);break e;case"bigint":e=zs(qa(64,e));break e;default:e=K0(e)}}else t=typeof(e=t),e=e==null?e:t==="bigint"?zs(qa(64,e)):Ya(e)?t==="string"?j0(e):K0(e):void 0;return(t=e)==null?n?M4:void 0:t}function E4(t){return t}const T4={};let w4=(function(){try{return Vc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class mh{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const A4=w4?(Object.setPrototypeOf(mh.prototype,Map.prototype),Object.defineProperties(mh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),mh):class extends Map{constructor(){super()}};function $0(t){return t}function gh(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var qi=class extends A4{constructor(t,e,n=$0,i=$0){super();let s=0|t[Be];s|=64,jt(t,s),this.M=s,this.I=e,this.S=n,this.X=this.I?C4:i;for(let r=0;r<t.length;r++){const o=t[r],a=n(o[0],!1,!0);let l=o[1];e?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,s),super.set(a,l)}}La(){var t=I4;if(this.size!==0)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=R4){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){gh(this),super.clear()}delete(t){return gh(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new G0(t,P4,this)}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new G0(t,qi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,i,s)=>{t.call(e,s.get(i),i,s)})):super.forEach(t,e)}set(t,e){return gh(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?t===void 0?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function C4(t,e,n,i,s,r){return t=ip(t,i,n,r),s&&(t=Zc(t)),t}function R4(t){return t}function P4(t){return[t,this.get(t)]}let L4,tv,nv,D4;function J0(){return L4||=new qi(Bo([]),void 0,void 0,void 0,T4)}function Of(t,e,n,i,s){if(t!=null){if(Array.isArray(t)){const r=0|t[Be];return t.length===0&&1&r?void 0:s&&2&r?t:$c(t,e,n,i!==void 0,s)}return e(t,i)}}function $c(t,e,n,i,s){const r=i||n?0|t[Be]:0,o=i?!!(32&r):void 0;let a=0;const l=(i=Nn(t)).length;for(let _=0;_<l;_++){var c=i[_];if(_===l-1&&Xc(c)){var u=e,h=n,f=o,d=s;let v;for(let m in c){const p=Of(c[m],u,h,f,d);p!=null&&((v??={})[m]=p)}c=v}else c=Of(i[_],e,n,o,s);i[_]=c,c!=null&&(a=_+1)}return a<l&&(i.length=a),n&&((t=Jd(t))&&(i[Eo]=Nn(t)),n(r,i)),i}function I4(t){return Of(t,sp,void 0,void 0,!1)}function sp(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return Nf(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(wr(t))return wr(t)&&jd(W1),B0(t);if(t.W===il)return iv(t);if(t instanceof fs){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=B0(e)}return t instanceof qi?t.La():void 0}return t}function iv(t){var e=t.u;t=$c(e,sp,void 0,void 0,!1);var n=0|e[Be];if((e=t.length)&&!(512&n)){var i=t[e-1],s=!1;Xc(i)?(e--,s=!0):i=void 0;var r=e-(n=512&n?0:-1),o=(tv??E4)(r,n,t,i);if(i&&(t[e]=void 0),r<o&&i){for(var a in r=!0,i){const l=+a;l<=o?(t[s=l+n]=i[a],e=Math.max(s+1,e),s=!1,delete i[a]):r=!1}r&&(i=void 0)}for(r=e-1;e>0;r=e-1)if((a=t[r])==null)e--,s=!0;else{if(!((r-=n)>=o))break;(i??={})[r]=a,e--,s=!0}s&&(t.length=e),i&&t.push(i)}return t}function Gs(t,e,n){return t=sv(t,e[0],e[1],n?1:2),e!==nv&&n&&Hc(t,8192),t}function sv(t,e,n,i){if(t==null){var s=96;n?(t=[n],s|=512):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(8192&(s=0|t[Be])||!(64&s)||2&s||jd(c4),1024&s)throw Error("farr");if(64&s)return t;if(i===1||i===2||(s|=64),n&&(s|=512,n!==t[0]))throw Error("mid");e:{var r=(n=t).length;if(r){var o=r-1;if(Xc(i=n[o])){if((o-=e=512&(s|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var a in i)(r=+a)<o&&(n[r+e]=i[a],delete i[a]);s=-16760833&s|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,r-(512&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return jt(t,s),t}function Bf(t,e,n=Uf){if(t!=null){if(k1&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[Be];return 2&i?t:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(jt(t,34|i),4&i&&Object.freeze(t),t):$c(t,Bf,4&i?Uf:n,!0,!0))}return t.W===il?t=2&(i=0|(n=t.u)[Be])?t:new t.constructor(Jc(n,i,!0)):t instanceof qi&&!(2&t.M)&&(n=Bo(t.da(Bf)),t=new qi(n,t.I,t.S,t.X)),t}}function Jc(t,e,n){const i=n||2&e?Uf:u4,s=!!(32&e);return t=(function(r,o,a){const l=Nn(r);var c=l.length;const u=256&o?l[c-1]:void 0;for(c+=u?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(u){o=l[o]={};for(const h in u)o[h]=a(u[h])}return(r=Jd(r))&&(l[Eo]=Nn(r)),l})(t,e,(r=>Bf(r,s,i))),Hc(t,32|(n?2:0)),t}function Zc(t){const e=t.u,n=0|e[Be];return 2&n?new t.constructor(Jc(e,n,!1)):t}function Ao(t,e){return Ss(t=t.u,0|t[Be],e)}function Ss(t,e,n){if(n===-1)return null;const i=n+(512&e?0:-1),s=t.length-1;return i>=s&&256&e?t[s][n]:i<=s?t[i]:void 0}function Rt(t,e,n){const i=t.u;let s=0|i[Be];return Zs(s),Ot(i,s,e,n),t}function Ot(t,e,n,i){const s=512&e?0:-1,r=n+s;var o=t.length-1;return r>=o&&256&e?(t[o][n]=i,e):r<=o?(t[r]=i,e):(i!==void 0&&(n>=(o=e>>14&1023||536870912)?i!=null&&(t[o+s]={[n]:i},jt(t,e|=256)):t[r]=i),e)}function $l(t,e){let n=0|(t=t.u)[Be];const i=Ss(t,n,e),s=Qs(i);return s!=null&&s!==i&&Ot(t,n,e,s),s}function rv(t){let e=0|(t=t.u)[Be];const n=Ss(t,e,1),i=$d(n,!0);return i!=null&&i!==n&&Ot(t,e,1,i),i}function xr(){return h4===void 0?2:4}function Mr(t,e,n,i,s){const r=t.u,o=2&(t=0|r[Be])?1:i;s=!!s;let a=0|(i=rp(r,t,e))[Be];if(!(4&a)){4&a&&(i=Nn(i),a=ds(a,t),t=Ot(r,t,e,i));let l=0,c=0;for(;l<i.length;l++){const u=n(i[l]);u!=null&&(i[c++]=u)}c<l&&(i.length=c),a=op(a,t),n=-2049&(20|a),a=n&=-4097,jt(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?us(a)||(s=a,a|=2,a!==s&&jt(i,a),Object.freeze(i)):(o===2&&us(a)&&(i=Nn(i),a=ds(a,t),a=Hs(a,t,s),jt(i,a),t=Ot(r,t,e,i)),us(a)||(e=a,a=Hs(a,t,s),a!==e&&jt(i,a))),i}function rp(t,e,n){return t=Ss(t,e,n),Array.isArray(t)?t:Kd}function op(t,e){return t===0&&(t=ds(t,e)),1|t}function us(t){return!!(2&t)&&!!(4&t)||!!(1024&t)}function ov(t){t=Nn(t);for(let e=0;e<t.length;e++){const n=t[e]=Nn(t[e]);Array.isArray(n[1])&&(n[1]=Bo(n[1]))}return t}function kf(t,e,n,i){let s=0|(t=t.u)[Be];Zs(s),Ot(t,s,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Vo(t,e,n,i){Zs(e);let s=rp(t,e,n);const r=s!==Kd;if(64&e||!(8192&e)||!r){const o=r?0|s[Be]:0;let a=o;(!r||2&a||us(a)||4&a&&!(32&a))&&(s=Nn(s),a=ds(a,e),e=Ot(t,e,n,s)),a=-13&op(a,e),a=Hs(i?-17&a:16|a,e,!0),a!==o&&jt(s,a)}return s}function _h(t,e){var n=jv;return lp(ap(t=t.u),t,0|t[Be],n)===e?e:-1}function ap(t){if(Gc)return t[sa]??(t[sa]=new Map);if(sa in t)return t[sa];const e=new Map;return Object.defineProperty(t,sa,{value:e}),e}function av(t,e,n,i){const s=ap(t),r=lp(s,t,e,n);return r!==i&&(r&&(e=Ot(t,e,r)),s.set(n,i)),e}function lp(t,e,n,i){let s=t.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){const o=i[r];Ss(e,n,o)!=null&&(s!==0&&(n=Ot(e,n,s)),s=o)}return t.set(i,s),s}function cp(t,e,n){let i=0|t[Be];const s=Ss(t,i,n);let r;if(s!=null&&s.W===il)return(e=Zc(s))!==s&&Ot(t,i,n,e),e.u;if(Array.isArray(s)){const o=0|s[Be];r=2&o?Gs(Jc(s,o,!1),e,!0):64&o?s:Gs(r,e,!0)}else r=Gs(void 0,e,!0);return r!==s&&Ot(t,i,n,r),r}function lv(t,e,n){let i=0|(t=t.u)[Be];const s=Ss(t,i,n);return(e=ip(s,e,!1,i))!==s&&e!=null&&Ot(t,i,n,e),e}function at(t,e,n){if((e=lv(t,e,n))==null)return e;let i=0|(t=t.u)[Be];if(!(2&i)){const s=Zc(e);s!==e&&Ot(t,i,n,e=s)}return e}function cv(t,e,n,i,s,r,o){t=t.u;var a=!!(2&e);const l=a?1:s;r=!!r,o&&=!a;var c=0|(s=rp(t,e,i))[Be];if(!(a=!!(4&c))){var u=s,h=e;const f=!!(2&(c=op(c,e)));f&&(h|=2);let d=!f,_=!0,v=0,m=0;for(;v<u.length;v++){const p=ip(u[v],n,!1,h);if(p instanceof n){if(!f){const E=!!(2&(0|p.u[Be]));d&&=!E,_&&=E}u[m++]=p}}m<v&&(u.length=m),c|=4,c=_?16|c:-17&c,jt(u,c=d?8|c:-9&c),f&&Object.freeze(u)}if(o&&!(8&c||!s.length&&(l===1||l===4&&32&c))){for(us(c)&&(s=Nn(s),c=ds(c,e),e=Ot(t,e,i,s)),n=s,o=c,u=0;u<n.length;u++)(c=n[u])!==(h=Zc(c))&&(n[u]=h);o|=8,jt(n,o=n.length?-17&o:16|o),c=o}return l===1||l===4&&32&c?us(c)||(e=c,(c|=!s.length||16&c&&(!a||32&c)?2:1024)!==e&&jt(s,c),Object.freeze(s)):(l===2&&us(c)&&(jt(s=Nn(s),c=Hs(c=ds(c,e),e,r)),e=Ot(t,e,i,s)),us(c)||(i=c,(c=Hs(c,e,r))!==i&&jt(s,c))),s}function xs(t,e,n){const i=0|t.u[Be];return cv(t,i,e,n,xr(),!1,!(2&i))}function Ve(t,e,n,i){return i==null&&(i=void 0),Rt(t,n,i)}function Ta(t,e,n,i){i==null&&(i=void 0);e:{let s=0|(t=t.u)[Be];if(Zs(s),i==null){const r=ap(t);if(lp(r,t,s,n)!==e)break e;r.set(n,0)}else s=av(t,s,n,e);Ot(t,s,e,i)}}function ds(t,e){return-1025&(t=32|(2&e?2|t:-3&t))}function Hs(t,e,n){return 32&e&&n||(t&=-33),t}function Qc(t,e,n){Zs(0|t.u[Be]),Mr(t,e,wo,2,!0).push(ev(n))}function gc(t,e,n,i){const s=0|t.u[Be];Zs(s),t=cv(t,s,n,e,2,!0),i=i??new n,t.push(i),t[Be]=2&(0|i.u[Be])?-9&t[Be]:-17&t[Be]}function ai(t,e){return ko(Ao(t,e))}function ui(t,e){return wo(Ao(t,e))}function Xt(t,e){return $l(t,e)??0}function ja(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);Rt(t,e,n)}function Yi(t,e,n){if(n!=null){if(typeof n!="number"||!Kc(n))throw If("int32");n|=0}Rt(t,e,n)}function Ne(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);Rt(t,e,n)}function _c(t,e,n){{const o=t.u;let a=0|o[Be];if(Zs(a),n==null)Ot(o,a,e);else{var i=t=0|n[Be],s=us(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=Nn(n),i=0,t=Hs(t=ds(t,a),a,!0),r=!1),t|=21,s=0;s<n.length;s++){const l=n[s],c=ev(l);Object.is(l,c)||(r&&(n=Nn(n),i=0,t=Hs(t=ds(t,a),a,!0),r=!1),n[s]=c)}t!==i&&(r&&(n=Nn(n),t=Hs(t=ds(t,a),a,!0)),jt(n,t)),Ot(o,a,e,n)}}}function uv(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function up(){return Error("Failed to read varint, encoding is invalid.")}function hv(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function hp(t){if(typeof t=="string")return{buffer:V1(t),O:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return{buffer:t,O:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),O:!1};if(t.constructor===fs)return{buffer:Yd(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function fp(t,e){let n,i=0,s=0,r=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Sr(t,a),n<128)return e(i>>>0,s>>>0);throw up()}function dp(t){let e=0,n=t.g;const i=n+10,s=t.h;for(;n<i;){const r=s[n++];if(e|=r,(128&r)==0)return Sr(t,n),!!(127&e)}throw up()}function Ks(t){const e=t.h;let n=t.g,i=e[n++],s=127&i;if(128&i&&(i=e[n++],s|=(127&i)<<7,128&i&&(i=e[n++],s|=(127&i)<<14,128&i&&(i=e[n++],s|=(127&i)<<21,128&i&&(i=e[n++],s|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw up();return Sr(t,n),s}function Ms(t){return Ks(t)>>>0}function zf(t){var e=t.h;const n=t.g,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],Sr(t,t.g+4),(i<<0|s<<8|r<<16|e<<24)>>>0}function Vf(t){var e=zf(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function U4(t){return Ks(t)}function vh(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=hp(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j)}function Sr(t,e){if(t.g=e,e>t.l)throw hv(t.l,e)}function fv(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw hv(e,t.l-n);return t.g=i,n}function dv(t,e){if(e==0)return Ar();var n=fv(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):v4?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ar():new fs(n,bo)}qi.prototype.toJSON=void 0;var Z0=[];function pv(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=Ms(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw uv(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Jl(t){switch(t.h){case 0:t.h!=0?Jl(t):dp(t.g);break;case 1:Sr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Jl(t);else{var e=Ms(t.g);Sr(t=t.g,t.g+e)}break;case 5:Sr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!pv(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Jl(t)}break;default:throw uv(t.h,t.l)}}function sl(t,e,n){const i=t.g.l,s=Ms(t.g),r=t.g.g+s;let o=r-i;if(o<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),o=r-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=r,t.g.l=i,e}function pp(t){var e=Ms(t.g),n=fv(t=t.g,e);if(t=t.h,QA){var i,s=t;(i=hh)||(i=hh=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(a){if(Nl===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Nl=!0}catch{Nl=!1}}throw!Nl&&(hh=void 0),a}}else{e=(r=n)+e,n=[];let a,l=null;for(;r<e;){var o=t[r++];o<128?n.push(o):o<224?r>=e?hr():(a=t[r++],o<194||(192&a)!=128?(r--,hr()):n.push((31&o)<<6|63&a)):o<240?r>=e-1?hr():(a=t[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=t[r++]))!=128?(r--,hr()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=e-2?hr():(a=t[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,hr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):hr(),n.length>=8192&&(l=U0(l,n),n.length=0)}r=U0(l,n)}return r}function mv(t){const e=Ms(t.g);return dv(t.g,e)}function eu(t,e,n){var i=Ms(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var Fl=[];function Ei(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var Ue=class{constructor(t,e){this.u=sv(t,e)}toJSON(){try{var t=iv(this)}finally{tv=void 0}return t}l(){var t=gC;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor(Jc(t,0|t[Be],!1))}O(){return!!(2&(0|this.u[Be]))}};function Q0(t){return t?/^\d+$/.test(t)?(jc(t),new Gf(bt,Vt)):null:N4||=new Gf(0,0)}Ue.prototype.W=il,Ue.prototype.toString=function(){return this.u.toString()};var Gf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let N4;function eg(t){return t?/^-?\d+$/.test(t)?(jc(t),new Hf(bt,Vt)):null:F4||=new Hf(0,0)}var Hf=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let F4;function co(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Go(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function tu(t,e){if(e>=0)Go(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Ka(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function Co(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Jn(t,e,n){Go(t.g,8*e+n)}function mp(t,e){return Jn(t,e,2),e=t.g.end(),Co(t,e),e.push(t.h),e}function gp(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function nu(t,e,n){Jn(t,e,2),Go(t.g,n.length),Co(t,t.g.end()),Co(t,n)}function vc(t,e,n,i){n!=null&&(e=mp(t,e),i(n,t),gp(t,e))}function Ti(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var _p=Ti(),gv=Ti(),vp=Ti(),xp=Ti(),_v=Ti(),vv=Ti(),Mp=Ti(),xv=Ti(),Mv=Ti(),Ho=class{constructor(t,e,n){this.g=t,this.h=e,t=_p,this.l=!!t&&n===t||!1}};function iu(t,e){return new Ho(t,e,_p)}function yv(t,e,n,i,s){vc(t,n,Tv(e,i),s)}const O4=iu((function(t,e,n,i,s){return t.h===2&&(sl(t,cp(e,i,n),s),!0)}),yv),B4=iu((function(t,e,n,i,s){return t.h===2&&(sl(t,cp(e,i,n),s),!0)}),yv);var su=Symbol(),yp=Symbol(),tg=Symbol(),ng=Symbol();let Sv,bv;function Dr(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ma=i,s.T=(function(h){switch(typeof h){case"boolean":return nv||=[0,void 0,!0];case"number":return h>0?void 0:h===0?D4||=[0,void 0]:[-h,void 0];case"string":return[0,h];case"object":return h}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++o])=="function"&&(s.la=!0,Sv??=r,bv??=i[o+1],r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let h;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof Ho?h=r:(h=O4,o--),h?.l){r=i[++o],c=i;var u=o;typeof r=="function"&&(r=r(),c[u]=r),c=r}for(u=l+1,typeof(r=i[++o])=="number"&&r<0&&(u-=r,r=i[++o]);l<u;l++){const f=a[l];c?n(s,l,h,c,f):e(s,l,h,f)}}return i[t]=s}function Ev(t){return Array.isArray(t)?t[0]instanceof Ho?t:[B4,t]:[t,void 0]}function Tv(t,e){return t instanceof Ue?t.u:Array.isArray(t)?Gs(t,e,!1):void 0}function Sp(t,e,n,i){const s=n.g;t[e]=i?(r,o,a)=>s(r,o,a,i):s}function bp(t,e,n,i,s){const r=n.g;let o,a;t[e]=(l,c,u)=>r(l,c,u,a||=Dr(yp,Sp,bp,i).T,o||=Ep(i),s)}function Ep(t){let e=t[tg];if(e!=null)return e;const n=Dr(yp,Sp,bp,t);return e=n.la?(i,s)=>Sv(i,s,n):(i,s)=>{const r=0|i[Be];for(;pv(s)&&s.h!=4;){var o=s.m,a=n[o];if(a==null){var l=n.ga;l&&(l=l[o])&&(l=k4(l))!=null&&(a=n[o]=l)}a!=null&&a(s,i,o)||(o=(a=s).l,Jl(a),a.fa?a=void 0:(l=a.g.g-o,a.g.g=o,a=dv(a.g,l)),o=i,a&&((l=o[Eo])?l.push(a):o[Eo]=[a]))}return 8192&r&&Bo(i),!0},t[tg]=e}function k4(t){const e=(t=Ev(t))[0].g;if(t=t[1]){const n=Ep(t),i=Dr(yp,Sp,bp,t).T;return(s,r,o)=>e(s,r,o,i,n)}return e}function ru(t,e,n){t[e]=n.h}function ou(t,e,n,i){let s,r;const o=n.h;t[e]=(a,l,c)=>o(a,l,c,r||=Dr(su,ru,ou,i).T,s||=wv(i))}function wv(t){let e=t[ng];if(!e){const n=Dr(su,ru,ou,t);e=(i,s)=>Av(i,s,n),t[ng]=e}return e}function Av(t,e,n){(function(i,s,r){const o=512&s?0:-1,a=i.length,l=a+((s=64&s?256&s:!!a&&Xc(i[a-1]))?-1:0);for(let c=0;c<l;c++)r(c-o,i[c]);if(s){i=i[a-1];for(const c in i)!isNaN(c)&&r(+c,i[c])}})(t,0|t[Be]|(n.T[1]?512:0),((i,s)=>{if(s!=null){var r=(function(o,a){var l=o[a];if(l)return l;if((l=o.ga)&&(l=l[a])){var c=(l=Ev(l))[0].h;if(l=l[1]){const u=wv(l),h=Dr(su,ru,ou,l).T;l=o.la?bv(h,u):(f,d,_)=>c(f,d,_,h,u)}else l=c;return o[a]=l}})(n,i);r&&r(e,s,i)}})),(t=Jd(t))&&(function(i,s){Co(i,i.g.end());for(let r=0;r<s.length;r++)Co(i,Yd(s[r])||new Uint8Array(0))})(e,t)}function Wo(t,e){if(Array.isArray(e)){var n=0|e[Be];if(4&n)return e;for(var i=0,s=0;i<e.length;i++){const r=t(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),jt(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function wn(t,e,n){return new Ho(t,e,n)}function Xo(t,e,n){return new Ho(t,e,n)}function An(t,e,n){Ot(t,0|t[Be],e,n)}var z4=iu((function(t,e,n,i,s){return t.h===2&&(t=sl(t,Gs([void 0,void 0],i,!0),s),Zs(i=0|e[Be]),(s=Ss(e,i,n))instanceof qi?(2&s.M)!=0?((s=s.da()).push(t),Ot(e,i,n,s)):s.Ja(t):Array.isArray(s)?(2&(0|s[Be])&&Ot(e,i,n,s=ov(s)),s.push(t)):Ot(e,i,n,[t]),!0)}),(function(t,e,n,i,s){if(e instanceof qi)e.forEach(((r,o)=>{vc(t,n,Gs([o,r],i,!1),s)}));else if(Array.isArray(e))for(let r=0;r<e.length;r++){const o=e[r];Array.isArray(o)&&vc(t,n,Gs(o,i,!1),s)}}));function Cv(t,e,n){if(e=(function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(qa(64,i));if(Ya(i)){if(s==="string")return Q1(i);if(s==="number")return np(i)}})(e),e!=null&&(typeof e=="string"&&eg(e),e!=null))switch(Jn(t,n,0),typeof e){case"number":t=t.g,Cr(e),co(t,bt,Vt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Hf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),co(t.g,n.h,n.g);break;default:n=eg(e),co(t.g,n.h,n.g)}}function Rv(t,e,n){(e=ko(e))!=null&&e!=null&&(Jn(t,n,0),tu(t.g,e))}function Pv(t,e,n){(e=K1(e))!=null&&(Jn(t,n,0),t.g.g.push(e?1:0))}function Lv(t,e,n){(e=wo(e))!=null&&nu(t,n,F1(e))}function Dv(t,e,n,i,s){vc(t,n,Tv(e,i),s)}function Iv(t,e,n){e==null||typeof e=="string"||e instanceof fs||(wr(e)?wr(e)&&jd(W1):e=void 0),e!=null&&nu(t,n,hp(e).buffer)}function Uv(t,e,n){return(t.h===5||t.h===2)&&(e=Vo(e,0|e[Be],n,!1),t.h==2?eu(t,Vf,e):e.push(Vf(t.g)),!0)}var ss=wn((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=zf(i);const s=zf(i);i=2*(s>>31)+1;const r=s>>>20&2047;return t=4294967296*(1048575&s)+t,An(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=Qs(e))!=null&&(Jn(t,n,1),t=t.g,(n=Y1||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),bt=n.getUint32(0,!0),Vt=n.getUint32(4,!0),Ka(t,bt),Ka(t,Vt))}),Ti()),Kt=wn((function(t,e,n){return t.h===5&&(An(e,n,Vf(t.g)),!0)}),(function(t,e,n){(e=Qs(e))!=null&&(Jn(t,n,5),t=t.g,Zd(e),Ka(t,bt))}),Mp),V4=Xo(Uv,(function(t,e,n){if((e=Wo(Qs,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(Jn(i,s,5),i=i.g,Zd(r),Ka(i,bt))}}),Mp),Tp=Xo(Uv,(function(t,e,n){if((e=Wo(Qs,e))!=null&&e.length){Jn(t,n,2),Go(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Zd(e[i]),Ka(n,bt)}}),Mp),$s=wn((function(t,e,n){return t.h===0&&(An(e,n,fp(t.g,ep)),!0)}),Cv,vv),xh=wn((function(t,e,n){return t.h===0&&(An(e,n,(t=fp(t.g,ep))===0?void 0:t),!0)}),Cv,vv),G4=wn((function(t,e,n){return t.h===0&&(An(e,n,fp(t.g,Qd)),!0)}),(function(t,e,n){if((e=S4(e))!=null&&(typeof e=="string"&&Q0(e),e!=null))switch(Jn(t,n,0),typeof e){case"number":t=t.g,Cr(e),co(t,bt,Vt);break;case"bigint":n=BigInt.asUintN(64,e),n=new Gf(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),co(t.g,n.h,n.g);break;default:n=Q0(e),co(t.g,n.h,n.g)}}),Ti()),Ht=wn((function(t,e,n){return t.h===0&&(An(e,n,Ks(t.g)),!0)}),Rv,xp),au=Xo((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,0|e[Be],n,!1),t.h==2?eu(t,Ks,e):e.push(Ks(t.g)),!0)}),(function(t,e,n){if((e=Wo(ko,e))!=null&&e.length){n=mp(t,n);for(let i=0;i<e.length;i++)tu(t.g,e[i]);gp(t,n)}}),xp),no=wn((function(t,e,n){return t.h===0&&(An(e,n,(t=Ks(t.g))===0?void 0:t),!0)}),Rv,xp),It=wn((function(t,e,n){return t.h===0&&(An(e,n,dp(t.g)),!0)}),Pv,gv),uo=wn((function(t,e,n){return t.h===0&&(An(e,n,(t=dp(t.g))===!1?void 0:t),!0)}),Pv,gv),hn=Xo((function(t,e,n){return t.h===2&&(t=pp(t),Vo(e,0|e[Be],n,!1).push(t),!0)}),(function(t,e,n){if((e=Wo(wo,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&nu(i,s,F1(r))}}),vp),Ns=wn((function(t,e,n){return t.h===2&&(An(e,n,(t=pp(t))===""?void 0:t),!0)}),Lv,vp),gt=wn((function(t,e,n){return t.h===2&&(An(e,n,pp(t)),!0)}),Lv,vp),Zt=(function(t,e,n=_p){return new Ho(t,e,n)})((function(t,e,n,i,s){return t.h===2&&(i=Gs(void 0,i,!0),Vo(e,0|e[Be],n,!0).push(i),sl(t,i,s),!0)}),(function(t,e,n,i,s){if(Array.isArray(e))for(let r=0;r<e.length;r++)Dv(t,e[r],n,i,s)})),mt=iu((function(t,e,n,i,s,r){return t.h===2&&(av(e,0|e[Be],r,n),sl(t,e=cp(e,i,n),s),!0)}),Dv),Nv=wn((function(t,e,n){return t.h===2&&(An(e,n,mv(t)),!0)}),Iv,xv),H4=Xo((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,0|e[Be],n,!1),t.h==2?eu(t,Ms,e):e.push(Ms(t.g)),!0)}),(function(t,e,n){if((e=Wo($1,e))!=null)for(let o=0;o<e.length;o++){var i=t,s=n,r=e[o];r!=null&&(Jn(i,s,0),Go(i.g,r))}}),_v),W4=wn((function(t,e,n){return t.h===0&&(An(e,n,(t=Ms(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=$1(e))!=null&&e!=null&&(Jn(t,n,0),Go(t.g,e))}),_v),Kn=wn((function(t,e,n){return t.h===0&&(An(e,n,Ks(t.g)),!0)}),(function(t,e,n){(e=ko(e))!=null&&(e=parseInt(e,10),Jn(t,n,0),tu(t.g,e))}),Mv);class X4{constructor(e,n){this.h=e,this.g=n,this.l=at,this.m=Ve,this.defaultValue=void 0}register(){Vc(this)}}function wi(t,e){return new X4(t,e)}function er(t,e){return(n,i)=>{if(Fl.length){const r=Fl.pop();r.o(i),vh(r.g,n,i),n=r}else n=new class{constructor(r,o){if(Z0.length){const a=Z0.pop();vh(a,r,o),r=a}else r=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,vh(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:r=!1}={}){this.fa=r}}(n,i);try{const r=new t,o=r.u;Ep(e)(o,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,Fl.length<100&&Fl.push(n)}return s}}function lu(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};Av(this.u,e,Dr(su,ru,ou,t)),Co(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];n.set(a,r),r+=a.length}return e.l=[n],n}}var ig=class extends Ue{constructor(t){super(t)}},sg=[0,Ns,wn((function(t,e,n){return t.h===2&&(An(e,n,(t=mv(t))===Ar()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Ue){const i=e.Oa;return void(i&&(e=i(e),e!=null&&nu(t,n,hp(e).buffer)))}if(Array.isArray(e))return}Iv(t,e,n)}),xv)];let Mh,rg=globalThis.trustedTypes;function og(t){Mh===void 0&&(Mh=(function(){let n=null;if(!rg)return n;try{const i=s=>s;n=rg.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var e=Mh;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function q4(t,...e){if(e.length===0)return og(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return og(n)}var Fv=[0,Ht,Kn,It,-1,au,Kn,-1],Y4=class extends Ue{constructor(t){super(t)}},Ov=[0,It,gt,It,Kn,-1,Xo((function(t,e,n){return(t.h===0||t.h===2)&&(e=Vo(e,0|e[Be],n,!1),t.h==2?eu(t,U4,e):e.push(Ks(t.g)),!0)}),(function(t,e,n){if((e=Wo(ko,e))!=null&&e.length){n=mp(t,n);for(let i=0;i<e.length;i++)tu(t.g,e[i]);gp(t,n)}}),Mv),gt,-1,[0,It,-1],Kn,It,-1],Bv=[0,gt,-2],ag=class extends Ue{constructor(t){super(t)}},kv=[0],zv=[0,Ht,It,1,It,-3],$n=class extends Ue{constructor(t){super(t,2)}},Jt={};Jt[336783863]=[0,gt,It,-1,Ht,[0,[1,2,3,4,5,6,7,8,9],mt,kv,mt,Ov,mt,Bv,mt,zv,mt,Fv,mt,[0,gt,-2],mt,[0,gt,Kn],mt,[0,Kn,gt,-1],mt,[0,Kn,-1]],[0,gt],It,[0,[1,3],[2,4],mt,[0,au],-1,mt,[0,hn],-1,Zt,[0,gt,-1]],gt];var lg=[0,xh,-1,uo,-3,xh,au,Ns,no,xh,-1,uo,no,uo,-2,Ns];function Zn(t,e){kf(t,2,zo(e),"")}function Pt(t,e){Qc(t,3,e)}function st(t,e){Qc(t,4,e)}var Tn=class extends Ue{constructor(t){super(t,500)}o(t){return Ve(this,0,7,t)}},wa=[-1,{}],cg=[0,gt,1,wa],ug=[0,gt,hn,wa];function Qn(t,e){gc(t,1,Tn,e)}function Lt(t,e){Qc(t,10,e)}function ct(t,e){Qc(t,15,e)}var On=class extends Ue{constructor(t){super(t,500)}o(t){return Ve(this,0,1001,t)}},Vv=[-500,Zt,[-500,Ns,-1,hn,-3,[-2,Jt,It],Zt,sg,no,-1,cg,ug,Zt,[0,Ns,uo],Ns,lg,no,hn,987,hn],4,Zt,[-500,gt,-1,[-1,{}],998,gt],Zt,[-500,gt,hn,-1,[-2,{},It],997,hn,-1],no,Zt,[-500,gt,hn,wa,998,hn],hn,no,cg,ug,Zt,[0,Ns,-1,wa],hn,-2,lg,Ns,-1,uo,[0,uo,W4],978,wa,Zt,sg];On.prototype.g=lu(Vv);var j4=er(On,Vv),K4=class extends Ue{constructor(t){super(t)}},Gv=class extends Ue{constructor(t){super(t)}g(){return xs(this,K4,1)}},Hv=[0,Zt,[0,Ht,Kt,gt,-1]],cu=er(Gv,Hv),$4=class extends Ue{constructor(t){super(t)}},J4=class extends Ue{constructor(t){super(t)}},yh=class extends Ue{constructor(t){super(t)}h(){return at(this,$4,2)}g(){return xs(this,J4,5)}},Wv=er(class extends Ue{constructor(t){super(t)}},[0,hn,au,Tp,[0,Kn,[0,Ht,-3],[0,Kt,-3],[0,Ht,-1,[0,Zt,[0,Ht,-2]]],Zt,[0,Kt,-1,gt,Kt]],gt,-1,$s,Zt,[0,Ht,Kt],hn,$s]),Xv=class extends Ue{constructor(t){super(t)}},ho=er(class extends Ue{constructor(t){super(t)}},[0,Zt,[0,Kt,-4]]),qv=class extends Ue{constructor(t){super(t)}},rl=er(class extends Ue{constructor(t){super(t)}},[0,Zt,[0,Kt,-4]]),Z4=class extends Ue{constructor(t){super(t)}},Q4=[0,Ht,-1,Tp,Kn],Yv=class extends Ue{constructor(t){super(t)}};Yv.prototype.g=lu([0,Kt,-4,$s]);var eC=class extends Ue{constructor(t){super(t)}},tC=er(class extends Ue{constructor(t){super(t)}},[0,Zt,[0,1,Ht,gt,Hv],$s]),hg=class extends Ue{constructor(t){super(t)}},nC=class extends Ue{constructor(t){super(t)}ma(){const t=rv(this);return t??Ar()}},iC=class extends Ue{constructor(t){super(t)}},jv=[1,2],sC=er(class extends Ue{constructor(t){super(t)}},[0,Zt,[0,jv,mt,[0,Tp],mt,[0,Nv],Ht,gt],$s]),wp=class extends Ue{constructor(t){super(t)}},Kv=[0,gt,Ht,Kt,hn,-1],fg=class extends Ue{constructor(t){super(t)}},rC=[0,It,-1],dg=class extends Ue{constructor(t){super(t)}},Zl=[1,2,3,4,5],xc=class extends Ue{constructor(t){super(t)}g(){return rv(this)!=null}h(){return ui(this,2)!=null}},Ut=class extends Ue{constructor(t){super(t)}g(){return K1(Ao(this,2))??!1}},$v=[0,Nv,gt,[0,Ht,$s,-1],[0,G4,$s]],qt=[0,$v,It,[0,Zl,mt,zv,mt,Ov,mt,Fv,mt,kv,mt,Bv],Kn],uu=class extends Ue{constructor(t){super(t)}},Ap=[0,qt,Kt,-1,Ht],oC=wi(502141897,uu);Jt[502141897]=Ap;var aC=er(class extends Ue{constructor(t){super(t)}},[0,[0,Kn,-1,V4,H4],Q4]),Jv=class extends Ue{constructor(t){super(t)}},Zv=class extends Ue{constructor(t){super(t)}},Cp=[0,qt,Kt,[0,qt],It],Qv=[0,qt,Ap,Cp,Kt,[0,[0,$v]]],lC=wi(508968150,Zv);Jt[508968150]=Qv,Jt[508968149]=Cp;var ex=class extends Ue{constructor(t){super(t)}},cC=wi(513916220,ex);Jt[513916220]=[0,qt,Qv,Ht];var Zr=class extends Ue{constructor(t){super(t)}h(){return at(this,wp,2)}g(){Rt(this,2)}},tx=[0,qt,Kv];Jt[478825465]=tx;var uC=class extends Ue{constructor(t){super(t)}},nx=class extends Ue{constructor(t){super(t)}},Rp=class extends Ue{constructor(t){super(t)}},Pp=class extends Ue{constructor(t){super(t)}},ix=class extends Ue{constructor(t){super(t)}},pg=[0,qt,[0,qt],tx,-1],sx=[0,qt,Kt,Ht],Lp=[0,qt,Kt],rx=[0,qt,sx,Lp,Kt],hC=wi(479097054,ix);Jt[479097054]=[0,qt,rx,pg],Jt[463370452]=pg,Jt[464864288]=sx;var fC=wi(462713202,Pp);Jt[462713202]=rx,Jt[474472470]=Lp;var dC=class extends Ue{constructor(t){super(t)}},ox=class extends Ue{constructor(t){super(t)}},ax=class extends Ue{constructor(t){super(t)}},lx=class extends Ue{constructor(t){super(t)}},Dp=[0,qt,Kt,-1,Ht],Wf=[0,qt,Kt,It];lx.prototype.g=lu([0,qt,Lp,[0,qt],Ap,Cp,Dp,Wf]);var cx=class extends Ue{constructor(t){super(t)}},pC=wi(456383383,cx);Jt[456383383]=[0,qt,Kv];var ux=class extends Ue{constructor(t){super(t)}},mC=wi(476348187,ux);Jt[476348187]=[0,qt,rC];var hx=class extends Ue{constructor(t){super(t)}},mg=class extends Ue{constructor(t){super(t)}},fx=[0,Kn,-1],gC=wi(458105876,class extends Ue{constructor(t){super(t)}g(){var t=this.u;const e=0|t[Be],n=2&e;return t=(function(i,s,r){var o=mg;const a=2&s;let l=!1;if(r==null){if(a)return J0();r=[]}else if(r.constructor===qi){if((2&r.M)==0||a)return r;r=r.da()}else Array.isArray(r)?l=!!(2&(0|r[Be])):r=[];if(a){if(!r.length)return J0();l||(l=!0,Bo(r))}else l&&(l=!1,r=ov(r));return l||(64&(0|r[Be])?r[Be]&=-33:32&s&&Hc(r,32)),Ot(i,s,2,o=new qi(r,o,b4,void 0)),o})(t,e,Ss(t,e,2)),!n&&mg&&(t.pa=!0),t}});Jt[458105876]=[0,fx,z4,[!0,$s,[0,gt,-1,hn]]];var Ip=class extends Ue{constructor(t){super(t)}},dx=wi(458105758,Ip);Jt[458105758]=[0,qt,gt,fx];var px=class extends Ue{constructor(t){super(t)}},_C=wi(443442058,px);Jt[443442058]=[0,qt,gt,Ht,Kt,hn,-1,It,Kt],Jt[514774813]=Dp;var mx=class extends Ue{constructor(t){super(t)}},vC=wi(516587230,mx);function Xf(t,e){return e=e?e.clone():new wp,t.displayNamesLocale!==void 0?Rt(e,1,zo(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Rt(e,1),t.maxResults!==void 0?Yi(e,2,t.maxResults):"maxResults"in t&&Rt(e,2),t.scoreThreshold!==void 0?Ne(e,3,t.scoreThreshold):"scoreThreshold"in t&&Rt(e,3),t.categoryAllowlist!==void 0?_c(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Rt(e,4),t.categoryDenylist!==void 0?_c(e,5,t.categoryDenylist):"categoryDenylist"in t&&Rt(e,5),e}function Up(t,e=-1,n=""){return{categories:t.map((i=>({index:ai(i,1)??0??-1,score:Xt(i,2)??0,categoryName:ui(i,3)??""??"",displayName:ui(i,4)??""??""}))),headIndex:e,headName:n}}function gx(t){var e=Mr(t,3,Qs,xr()),n=Mr(t,2,ko,xr()),i=Mr(t,1,wo,xr()),s=Mr(t,9,wo,xr());const r={categories:[],keypoints:[]};for(let o=0;o<e.length;o++)r.categories.push({score:e[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((e=at(t,yh,4)?.h())&&(r.boundingBox={originX:ai(e,1)??0,originY:ai(e,2)??0,width:ai(e,3)??0,height:ai(e,4)??0,angle:0}),at(t,yh,4)?.g().length)for(const o of at(t,yh,4).g())r.keypoints.push({x:$l(o,1)??0,y:$l(o,2)??0,score:$l(o,4)??0,label:ui(o,3)??""});return r}function hu(t){const e=[];for(const n of xs(t,qv,1))e.push({x:Xt(n,1)??0,y:Xt(n,2)??0,z:Xt(n,3)??0,visibility:Xt(n,4)??0});return e}function Aa(t){const e=[];for(const n of xs(t,Xv,1))e.push({x:Xt(n,1)??0,y:Xt(n,2)??0,z:Xt(n,3)??0,visibility:Xt(n,4)??0});return e}function gg(t){return Array.from(t,(e=>e>127?e-256:e))}function _g(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let Ol;Jt[516587230]=[0,qt,Dp,Wf,Kt],Jt[518928384]=Wf;const xC=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function _x(){if(Ol===void 0)try{await WebAssembly.instantiate(xC),Ol=!0}catch{Ol=!1}return Ol}async function ra(t,e=q4``){const n=await _x()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var pr=class{};function vx(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function vg(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function xx(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Oe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function xg(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=xx(e);return!t.l||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function Mg(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const s of i)t.i._free(s);t.i._free(e)}function Li(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function Rs(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}pr.forVisionTasks=function(t){return ra("vision",t)},pr.forTextTasks=function(t){return ra("text",t)},pr.forGenAiExperimentalTasks=function(t){return ra("genai_experimental",t)},pr.forGenAiTasks=function(t){return ra("genai",t)},pr.forAudioTasks=function(t){return ra("audio",t)},pr.isSimdSupported=function(){return _x()};async function MC(t,e,n,i){return t=await(async(s,r,o,a,l)=>{if(r&&await vg(r),!self.ModuleFactory||o&&(await vg(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await t.o(i),t}function Sh(t,e){const n=at(t.baseOptions,xc,1)||new xc;typeof e=="string"?(Rt(n,2,zo(e)),Rt(n,1)):e instanceof Uint8Array&&(Rt(n,1,$d(e,!1)),Rt(n,2)),Ve(t.baseOptions,0,1,n)}function yg(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((n=>n.message)).join(", "))}finally{t.G=[]}}function Le(t,e){t.B=Math.max(t.B,e)}function fu(t,e){t.A=new Tn,Zn(t.A,"PassThroughCalculator"),Pt(t.A,"free_memory"),st(t.A,"free_memory_unused_out"),Lt(e,"free_memory"),Qn(e,t.A)}function Ro(t,e){Pt(t.A,e),st(t.A,e+"_unused_out")}function du(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var qf=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(at(this.baseOptions,xc,1)?.g()||at(this.baseOptions,xc,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=at(i.baseOptions,dg,3);if(!r){var o=r=new dg,a=new ag;Ta(o,4,Zl,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new Y4,Ta(s,2,Zl,o)):(s=r,o=new ag,Ta(s,4,Zl,o))),Ve(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Sh(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)Sh(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const s=[];for(var r=0;;){const{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(const o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{Sh(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=j4(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,yg(this)}finishProcessing(){this.g.finishProcessing(),yg(this)}close(){this.A=void 0,this.g.closeGraph()}};function ps(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}qf.prototype.close=qf.prototype.close;class yC{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Sg(t,e,n){const i=t.g;if(n=ps(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function bg(t,e){const n=t.g,i=ps(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=ps(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=ps(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new yC(n,i,s,r)}function Np(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Fp(t,e,n,i){return Np(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=bg(t,!0)),n=t.s):(t.v||(t.v=bg(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function pu(t,e,n){return Np(t,e),t=ps(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function mu(t,e,n){Np(t,e),t.A||(t.A=ps(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Op(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var Bp=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=ps(t.createProgram(),"Failed to create WebGL program"),this.Z=Sg(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Y=Sg(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function as(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Yf(t){var e=as(t,1);if(!e){if(e=as(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Po(t);var n=kp(t);if(mu(n,i,Mx(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Mx(t){let e=as(t,2);if(!e){const n=Po(t);e=Sx(t);const i=Yf(t),s=yx(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),jf(t)}return e}function Po(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=ps(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function yx(t){if(t=Po(t),!Bl)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Bl=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Bl=t.R16F}return Bl}function kp(t){return t.l||(t.l=new Bp),t.l}function Sx(t){const e=Po(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=as(t,2);return n||(n=pu(kp(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function jf(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Bl,sn=class{constructor(t,e,n,i,s,r,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Eg===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!as(this,0)}ja(){return!!as(this,1)}R(){return!!as(this,2)}ia(){return(e=as(t=this,0))||(e=Yf(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ha(){return Yf(this)}N(){return Mx(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Po(this),s=kp(this);i.activeTexture(i.TEXTURE1),n=pu(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=yx(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),mu(s,i,n),Fp(s,i,!1,(()=>{Sx(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),jf(this)})),Op(s),jf(this)}}t.push(n)}return new sn(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Po(this).deleteTexture(as(this,2)),Eg=-1}};sn.prototype.close=sn.prototype.close,sn.prototype.clone=sn.prototype.clone,sn.prototype.getAsWebGLTexture=sn.prototype.N,sn.prototype.getAsFloat32Array=sn.prototype.ha,sn.prototype.getAsUint8Array=sn.prototype.ia,sn.prototype.hasWebGLTexture=sn.prototype.R,sn.prototype.hasFloat32Array=sn.prototype.ja,sn.prototype.hasUint8Array=sn.prototype.Da;var Eg=250;function ki(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function bx(t){var e=ki(t,0);if(!e){e=Lo(t);const n=gu(t),i=new Uint8Array(t.width*t.height*4);mu(n,e,Ql(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Op(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function Ql(t){let e=ki(t,2);if(!e){const n=Lo(t);e=ec(t);const i=ki(t,1)||bx(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),ha(t)}return e}function Lo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=ps(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function gu(t){return t.l||(t.l=new Bp),t.l}function ec(t){const e=Lo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=ki(t,2);return n||(n=pu(gu(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function ha(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Tg(t){const e=Lo(t);return Fp(gu(t),e,!0,(()=>(function(n,i){const s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();const r=s.width,o=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=o,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var rn=class{constructor(t,e,n,i,s,r,o){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--wg===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!ki(this,0)}ka(){return!!ki(this,1)}R(){return!!ki(this,2)}Aa(){return bx(this)}za(){var t=ki(this,1);return t||(Ql(this),ec(this),t=Tg(this),ha(this),this.g.push(t),this.j=!0),t}N(){return Ql(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Lo(this),s=gu(this);i.activeTexture(i.TEXTURE1),n=pu(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),mu(s,i,n),Fp(s,i,!1,(()=>{ec(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ha(this)})),Op(s),ha(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Ql(this),ec(this),n=Tg(this),ha(this)}t.push(n)}return new rn(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ki(this,1).close(),this.m&&Lo(this).deleteTexture(ki(this,2)),wg=-1}};rn.prototype.close=rn.prototype.close,rn.prototype.clone=rn.prototype.clone,rn.prototype.getAsWebGLTexture=rn.prototype.N,rn.prototype.getAsImageBitmap=rn.prototype.za,rn.prototype.getAsImageData=rn.prototype.Aa,rn.prototype.hasWebGLTexture=rn.prototype.R,rn.prototype.hasImageBitmap=rn.prototype.ka,rn.prototype.hasImageData=rn.prototype.Ca;var wg=250;function Ai(...t){return t.map((([e,n])=>({start:e,end:n})))}const SC=(function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService()}}})((Ag=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:vx()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Oe(this,i||"input_audio",(r=>{Oe(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){Li(this,"__graph_config__",(e=>{t(e)})),Oe(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){const r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),Oe(this,i,(o=>{this.i._addAudioToInputStream(this.g,e,n,o,s)}))}addGpuBufferToStream(t,e,n){Oe(this,e,(i=>{const[s,r]=xg(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(t,e,n){Oe(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){Oe(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){Oe(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){Oe(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){Oe(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){Oe(this,e,(i=>{Oe(this,t,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(t,e,n){Oe(this,e,(i=>{Mg(this,Object.keys(t),(s=>{Mg(this,Object.values(t),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){Oe(this,n,(s=>{Oe(this,e,(r=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(t,e){Oe(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){Oe(this,e,(i=>{const s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(t,e,n){Oe(this,e,(i=>{const s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(t,e,n){Oe(this,e,(i=>{const s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(t,e,n){Oe(this,e,(i=>{const s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(t,e,n){Oe(this,e,(i=>{const s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(t,e,n){Oe(this,e,(i=>{const s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Oe(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(t,e){Oe(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){Oe(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){Oe(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){Oe(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){Oe(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){Oe(this,e,(n=>{Oe(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){Oe(this,n,(i=>{Oe(this,e,(s=>{const r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(t,e){Oe(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){Oe(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){Oe(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){Oe(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){Oe(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){Oe(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Oe(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){Li(this,t,e),Oe(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){Li(this,t,e),Oe(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){Li(this,t,e),Oe(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){Li(this,t,e),Oe(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){Li(this,t,e),Oe(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){Li(this,t,e),Oe(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){Li(this,t,e),Oe(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){Rs(this,t,e),Oe(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Li(this,t,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)})),Oe(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Ag{get ea(){return this.i}oa(t,e,n){Oe(this,e,(i=>{const[s,r]=xg(this,t,i);this.ea._addBoundTextureAsImageToStream(i,s,r,n)}))}V(t,e){Li(this,t,e),Oe(this,t,(n=>{this.ea._attachImageListener(n)}))}ba(t,e){Rs(this,t,e),Oe(this,t,(n=>{this.ea._attachImageVectorListener(n)}))}}));var Ag,hi=class extends SC{};async function nt(t,e,n){return(async function(i,s,r,o){return MC(i,s,r,o)})(t,n.canvas??(vx()?void 0:document.createElement("canvas")),e,n)}function Ex(t,e,n,i){if(t.U){const r=new Yv;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ne(r,1,(s.left+s.right)/2),Ne(r,2,(s.top+s.bottom)/2),Ne(r,4,s.right-s.left),Ne(r,3,s.bottom-s.top)}else Ne(r,1,.5),Ne(r,2,.5),Ne(r,4,1),Ne(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ne(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[o,a]=xx(e);n=Xt(r,3)*a/o,s=Xt(r,4)*o/a,Ne(r,4,n),Ne(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.oa(e,t.Z,i??performance.now()),t.finishProcessing()}function fi(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Ex(t,e,n,t.B+1)}function Ki(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Ex(t,e,n,i)}function Do(t,e,n,i){var s=e.data;const r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return t=new sn([s],n,!1,t.g.i.canvas,t.P,r,e),i?t.clone():t}var Fn=class extends qf{constructor(t,e,n,i){super(t),this.g=t,this.Z=e,this.U=n,this.na=i,this.P=new Bp}l(t,e=!0){if("runningMode"in t&&ja(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Fn.prototype.close=Fn.prototype.close;var ni=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ve(t=this.h=new uu,0,1,e=new Ut),Ne(this.h,2,.5),Ne(this.h,3,.3)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Ne(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ne(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},fi(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},Ki(this,t,n,e),this.j}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect_in"),ct(t,"detections");const e=new $n;Ei(e,oC,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect_in"),st(n,"DETECTIONS:detections"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Wv(r),this.j.detections.push(gx(i));Le(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.detectForVideo=ni.prototype.F,ni.prototype.detect=ni.prototype.D,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=async function(t,e){return nt(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return nt(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return nt(ni,t,e)};var zp=Ai([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Vp=Ai([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Gp=Ai([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Tx=Ai([474,475],[475,476],[476,477],[477,474]),Hp=Ai([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Wp=Ai([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),wx=Ai([469,470],[470,471],[471,472],[472,469]),Xp=Ai([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Ax=[...zp,...Vp,...Gp,...Hp,...Wp,...Xp],Cx=Ai([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Cg(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var zt=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ve(t=this.h=new Zv,0,1,e=new Ut),this.v=new Jv,Ve(this.h,0,3,this.v),this.s=new uu,Ve(this.h,0,2,this.s),Yi(this.s,4,1),Ne(this.s,2,.5),Ne(this.v,2,.5),Ne(this.h,4,.5)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return"numFaces"in t&&Yi(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ne(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ne(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return Cg(this),fi(this,t,e),this.j}F(t,e,n){return Cg(this),Ki(this,t,n,e),this.j}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect"),ct(t,"face_landmarks");const e=new $n;Ei(e,lC,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=rl(r),this.j.faceLandmarks.push(hu(i));Le(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{Le(this,i)})),this.outputFaceBlendshapes&&(ct(t,"blendshapes"),st(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=cu(r),this.j.faceBlendshapes.push(Up(i.g()??[]));Le(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{Le(this,i)}))),this.outputFacialTransformationMatrixes&&(ct(t,"face_geometry"),st(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=at(aC(r),Z4,2))&&this.j.facialTransformationMatrixes.push({rows:ai(i,1)??0??0,columns:ai(i,2)??0??0,data:Mr(i,3,Qs,xr()).slice()??[]});Le(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{Le(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zt.prototype.detectForVideo=zt.prototype.F,zt.prototype.detect=zt.prototype.D,zt.prototype.setOptions=zt.prototype.o,zt.createFromModelPath=function(t,e){return nt(zt,t,{baseOptions:{modelAssetPath:e}})},zt.createFromModelBuffer=function(t,e){return nt(zt,t,{baseOptions:{modelAssetBuffer:e}})},zt.createFromOptions=function(t,e){return nt(zt,t,e)},zt.FACE_LANDMARKS_LIPS=zp,zt.FACE_LANDMARKS_LEFT_EYE=Vp,zt.FACE_LANDMARKS_LEFT_EYEBROW=Gp,zt.FACE_LANDMARKS_LEFT_IRIS=Tx,zt.FACE_LANDMARKS_RIGHT_EYE=Hp,zt.FACE_LANDMARKS_RIGHT_EYEBROW=Wp,zt.FACE_LANDMARKS_RIGHT_IRIS=wx,zt.FACE_LANDMARKS_FACE_OVAL=Xp,zt.FACE_LANDMARKS_CONTOURS=Ax,zt.FACE_LANDMARKS_TESSELATION=Cx;var Di=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!0),Ve(t=this.j=new ex,0,1,e=new Ut)}get baseOptions(){return at(this.j,Ut,1)}set baseOptions(t){Ve(this.j,0,1,t)}o(t){return super.l(t)}Ka(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,fi(this,t,i??{}),!this.h)return this.s}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect"),ct(t,"stylized_image");const e=new $n;Ei(e,cC,this.j);const n=new Tn;Zn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Qn(t,n),this.g.V("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let u=0;u<l;++u)c[4*u]=o[3*u],c[4*u+1]=o[3*u+1],c[4*u+2]=o[3*u+2],c[4*u+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new rn([o],!1,!1,this.g.i.canvas,this.P,a,i),this.s=r=r?a.clone():a,this.h&&this.h(r),Le(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Di.prototype.stylize=Di.prototype.Ka,Di.prototype.setOptions=Di.prototype.o,Di.createFromModelPath=function(t,e){return nt(Di,t,{baseOptions:{modelAssetPath:e}})},Di.createFromModelBuffer=function(t,e){return nt(Di,t,{baseOptions:{modelAssetBuffer:e}})},Di.createFromOptions=function(t,e){return nt(Di,t,e)};var qp=Ai([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Rg(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Pg(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Lg(t,e=!0){const n=[];for(const s of t){var i=cu(s);t=[];for(const r of i.g())i=e&&ai(r,1)!=null?ai(r,1)??0:-1,t.push({score:Xt(r,2)??0,index:i,categoryName:ui(r,3)??""??"",displayName:ui(r,4)??""??""});n.push(t)}return n}var Gn=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ve(t=this.j=new ix,0,1,e=new Ut),this.s=new Pp,Ve(this.j,0,2,this.s),this.C=new Rp,Ve(this.s,0,3,this.C),this.v=new nx,Ve(this.s,0,2,this.v),this.h=new uC,Ve(this.j,0,3,this.h),Ne(this.v,2,.5),Ne(this.s,4,.5),Ne(this.C,2,.5)}get baseOptions(){return at(this.j,Ut,1)}set baseOptions(t){Ve(this.j,0,1,t)}o(t){if(Yi(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ne(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ne(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Zr,n=e,i=Xf(t.cannedGesturesClassifierOptions,at(this.h,Zr,3)?.h());Ve(n,0,2,i),Ve(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&at(this.h,Zr,3)?.g();return t.customGesturesClassifierOptions?(Ve(n=e=new Zr,0,2,i=Xf(t.customGesturesClassifierOptions,at(this.h,Zr,4)?.h())),Ve(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&at(this.h,Zr,4)?.g(),this.l(t)}Fa(t,e){return Rg(this),fi(this,t,e),Pg(this)}Ga(t,e,n){return Rg(this),Ki(this,t,n,e),Pg(this)}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect"),ct(t,"hand_gestures"),ct(t,"hand_landmarks"),ct(t,"world_hand_landmarks"),ct(t,"handedness");const e=new $n;Ei(e,hC,this.j);const n=new Tn;Zn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"HAND_GESTURES:hand_gestures"),st(n,"LANDMARKS:hand_landmarks"),st(n,"WORLD_LANDMARKS:world_hand_landmarks"),st(n,"HANDEDNESS:handedness"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=rl(r);const o=[];for(const a of xs(i,qv,1))o.push({x:Xt(a,1)??0,y:Xt(a,2)??0,z:Xt(a,3)??0,visibility:Xt(a,4)??0});this.landmarks.push(o)}Le(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Le(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=ho(r);const o=[];for(const a of xs(i,Xv,1))o.push({x:Xt(a,1)??0,y:Xt(a,2)??0,z:Xt(a,3)??0,visibility:Xt(a,4)??0});this.worldLandmarks.push(o)}Le(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Le(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Lg(i,!1)),Le(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{Le(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Lg(i)),Le(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function Dg(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Gn.prototype.recognizeForVideo=Gn.prototype.Ga,Gn.prototype.recognize=Gn.prototype.Fa,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=function(t,e){return nt(Gn,t,{baseOptions:{modelAssetPath:e}})},Gn.createFromModelBuffer=function(t,e){return nt(Gn,t,{baseOptions:{modelAssetBuffer:e}})},Gn.createFromOptions=function(t,e){return nt(Gn,t,e)},Gn.HAND_CONNECTIONS=qp;var Ln=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ve(t=this.h=new Pp,0,1,e=new Ut),this.s=new Rp,Ve(this.h,0,3,this.s),this.j=new nx,Ve(this.h,0,2,this.j),Yi(this.j,3,1),Ne(this.j,2,.5),Ne(this.s,2,.5),Ne(this.h,4,.5)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return"numHands"in t&&Yi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ne(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ne(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],fi(this,t,e),Dg(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ki(this,t,n,e),Dg(this)}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect"),ct(t,"hand_landmarks"),ct(t,"world_hand_landmarks"),ct(t,"handedness");const e=new $n;Ei(e,fC,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"LANDMARKS:hand_landmarks"),st(n,"WORLD_LANDMARKS:world_hand_landmarks"),st(n,"HANDEDNESS:handedness"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=rl(r),this.landmarks.push(hu(i));Le(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{Le(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=ho(r),this.worldLandmarks.push(Aa(i));Le(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{Le(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const l of i){i=cu(l);const c=[];for(const u of i.g())c.push({score:Xt(u,2)??0,index:ai(u,1)??0??-1,categoryName:ui(u,3)??""??"",displayName:ui(u,4)??""??""});a.push(c)}o.call(r,...a),Le(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ln.prototype.detectForVideo=Ln.prototype.F,Ln.prototype.detect=Ln.prototype.D,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(t,e){return nt(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return nt(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return nt(Ln,t,e)},Ln.HAND_CONNECTIONS=qp;var Rx=Ai([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Ig(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Ug(t){try{if(!t.C)return t.h;t.C(t.h)}finally{du(t)}}function kl(t,e){t=rl(t),e.push(hu(t))}var Dt=class extends Fn{constructor(t,e){super(new hi(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ve(t=this.j=new lx,0,1,e=new Ut),this.K=new Rp,Ve(this.j,0,2,this.K),this.Y=new dC,Ve(this.j,0,3,this.Y),this.s=new uu,Ve(this.j,0,4,this.s),this.H=new Jv,Ve(this.j,0,5,this.H),this.v=new ox,Ve(this.j,0,6,this.v),this.L=new ax,Ve(this.j,0,7,this.L),Ne(this.s,2,.5),Ne(this.s,3,.3),Ne(this.H,2,.5),Ne(this.v,2,.5),Ne(this.v,3,.3),Ne(this.L,2,.5),Ne(this.K,2,.5)}get baseOptions(){return at(this.j,Ut,1)}set baseOptions(t){Ve(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Ne(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ne(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ne(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ne(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ne(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ne(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ne(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,Ig(this),fi(this,t,i),Ug(this)}F(t,e,n,i){const s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,Ig(this),Ki(this,t,s,e),Ug(this)}m(){var t=new On;Lt(t,"input_frames_image"),ct(t,"pose_landmarks"),ct(t,"pose_world_landmarks"),ct(t,"face_landmarks"),ct(t,"left_hand_landmarks"),ct(t,"left_hand_world_landmarks"),ct(t,"right_hand_landmarks"),ct(t,"right_hand_world_landmarks");const e=new $n,n=new ig;kf(n,1,zo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))Rt(s,2,$c(r,sp,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof fs||wr(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");kf(s,2,$d(r,!1),Ar())}})(n,this.j.g());const i=new Tn;Zn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),gc(i,8,ig,n),Pt(i,"IMAGE:input_frames_image"),st(i,"POSE_LANDMARKS:pose_landmarks"),st(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),st(i,"FACE_LANDMARKS:face_landmarks"),st(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),st(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),st(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),st(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Qn(t,i),fu(this,t),this.g.attachProtoListener("pose_landmarks",((s,r)=>{kl(s,this.h.poseLandmarks),Le(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{Le(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=ho(s),o.push(Aa(s)),Le(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{Le(this,s)})),this.outputPoseSegmentationMasks&&(st(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ro(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Do(this,s,!0,!this.C)],Le(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],Le(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{kl(s,this.h.faceLandmarks),Le(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{Le(this,s)})),this.outputFaceBlendshapes&&(ct(t,"extra_blendshapes"),st(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=cu(s),o.push(Up(s.g()??[]))),Le(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{Le(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{kl(s,this.h.leftHandLandmarks),Le(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{Le(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=ho(s),o.push(Aa(s)),Le(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{Le(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{kl(s,this.h.rightHandLandmarks),Le(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{Le(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=ho(s),o.push(Aa(s)),Le(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{Le(this,s)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Dt.prototype.detectForVideo=Dt.prototype.F,Dt.prototype.detect=Dt.prototype.D,Dt.prototype.setOptions=Dt.prototype.o,Dt.createFromModelPath=function(t,e){return nt(Dt,t,{baseOptions:{modelAssetPath:e}})},Dt.createFromModelBuffer=function(t,e){return nt(Dt,t,{baseOptions:{modelAssetBuffer:e}})},Dt.createFromOptions=function(t,e){return nt(Dt,t,e)},Dt.HAND_CONNECTIONS=qp,Dt.POSE_CONNECTIONS=Rx,Dt.FACE_LANDMARKS_LIPS=zp,Dt.FACE_LANDMARKS_LEFT_EYE=Vp,Dt.FACE_LANDMARKS_LEFT_EYEBROW=Gp,Dt.FACE_LANDMARKS_LEFT_IRIS=Tx,Dt.FACE_LANDMARKS_RIGHT_EYE=Hp,Dt.FACE_LANDMARKS_RIGHT_EYEBROW=Wp,Dt.FACE_LANDMARKS_RIGHT_IRIS=wx,Dt.FACE_LANDMARKS_FACE_OVAL=Xp,Dt.FACE_LANDMARKS_CONTOURS=Ax,Dt.FACE_LANDMARKS_TESSELATION=Cx;var ii=class extends Fn{constructor(t,e){super(new hi(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ve(t=this.h=new cx,0,1,e=new Ut)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return Ve(this.h,0,2,Xf(t,at(this.h,wp,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},fi(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},Ki(this,t,n,e),this.j}m(){var t=new On;Lt(t,"input_image"),Lt(t,"norm_rect"),ct(t,"classifications");const e=new $n;Ei(e,pC,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Pt(n,"IMAGE:input_image"),Pt(n,"NORM_RECT:norm_rect"),st(n,"CLASSIFICATIONS:classifications"),n.o(e),Qn(t,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){const o={classifications:xs(r,eC,1).map((a=>Up(at(a,Gv,4)?.g()??[],ai(a,2)??0,ui(a,3)??"")))};return Ff(Ao(r,2))!=null&&(o.timestampMs=Ff(Ao(r,2))??0),o})(tC(i)),Le(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ii.prototype.classifyForVideo=ii.prototype.ra,ii.prototype.classify=ii.prototype.qa,ii.prototype.setOptions=ii.prototype.o,ii.createFromModelPath=function(t,e){return nt(ii,t,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(t,e){return nt(ii,t,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(t,e){return nt(ii,t,e)};var Hn=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!0),this.h=new ux,this.embeddings={embeddings:[]},Ve(t=this.h,0,1,e=new Ut)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){var e=this.h,n=at(this.h,fg,2);return n=n?n.clone():new fg,t.l2Normalize!==void 0?ja(n,1,t.l2Normalize):"l2Normalize"in t&&Rt(n,1),t.quantize!==void 0?ja(n,2,t.quantize):"quantize"in t&&Rt(n,2),Ve(e,0,2,n),this.l(t)}xa(t,e){return fi(this,t,e),this.embeddings}ya(t,e,n){return Ki(this,t,n,e),this.embeddings}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect"),ct(t,"embeddings_out");const e=new $n;Ei(e,mC,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"EMBEDDINGS:embeddings_out"),n.o(e),Qn(t,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=sC(i),this.embeddings=(function(r){return{embeddings:xs(r,iC,1).map((o=>{const a={headIndex:ai(o,3)??0??-1,headName:ui(o,4)??""??""};if(lv(o,hg,_h(o,1))!==void 0)o=Mr(o=at(o,hg,_h(o,1)),1,Qs,xr()),a.floatEmbedding=o.slice();else{const l=new Uint8Array(0);a.quantizedEmbedding=at(o,nC,_h(o,2))?.ma()?.h()??l}return a})),timestampMs:Ff(Ao(r,2))??0}})(i),Le(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Hn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=_g(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=_g(gg(t.quantizedEmbedding),gg(e.quantizedEmbedding))}return t},Hn.prototype.embedForVideo=Hn.prototype.ya,Hn.prototype.embed=Hn.prototype.xa,Hn.prototype.setOptions=Hn.prototype.o,Hn.createFromModelPath=function(t,e){return nt(Hn,t,{baseOptions:{modelAssetPath:e}})},Hn.createFromModelBuffer=function(t,e){return nt(Hn,t,{baseOptions:{modelAssetBuffer:e}})},Hn.createFromOptions=function(t,e){return nt(Hn,t,e)};var Kf=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function Ng(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Fg(t){try{const e=new Kf(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{du(t)}}Kf.prototype.close=Kf.prototype.close;var Pn=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Ip,this.v=new hx,Ve(this.h,0,3,this.v),Ve(t=this.h,0,1,e=new Ut)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Rt(this.h,2,zo(t.displayNamesLocale)):"displayNamesLocale"in t&&Rt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){(function(t){const e=xs(t.ca(),Tn,1).filter((n=>(ui(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(at(e[0],$n,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.s[Number(i)]=ui(n,1)??""}))})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Ng(this),fi(this,t,i),Fg(this)}Ia(t,e,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Ng(this),Ki(this,t,s,e),Fg(this)}Ba(){return this.s}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect");const e=new $n;Ei(e,dx,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),n.o(e),Qn(t,n),fu(this,t),this.outputConfidenceMasks&&(ct(t,"confidence_masks"),st(n,"CONFIDENCE_MASKS:confidence_masks"),Ro(this,"confidence_masks"),this.g.ba("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Do(this,r,!0,!this.j))),Le(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Le(this,i)}))),this.outputCategoryMask&&(ct(t,"category_mask"),st(n,"CATEGORY_MASK:category_mask"),Ro(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=Do(this,i,!1,!this.j),Le(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Le(this,i)}))),ct(t,"quality_scores"),st(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Le(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.getLabels=Pn.prototype.Ba,Pn.prototype.segmentForVideo=Pn.prototype.Ia,Pn.prototype.segment=Pn.prototype.segment,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(t,e){return nt(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return nt(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return nt(Pn,t,e)};var $f=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};$f.prototype.close=$f.prototype.close;var bC=class extends Ue{constructor(t){super(t)}},Qr=[0,Ht,-2],Mc=[0,ss,-3,It,ss,-1],Og=[0,Mc],Bg=[0,Mc,Ht,-1],bh=class extends Ue{constructor(t){super(t)}},kg=[0,ss,-1,It],EC=class extends Ue{constructor(t){super(t)}},zg=class extends Ue{constructor(t){super(t)}},Jf=[1,2,3,4,5,6,7,8,9,10,14,15],Px=class extends Ue{constructor(t){super(t)}};Px.prototype.g=lu([0,Zt,[0,Jf,mt,Mc,mt,[0,Mc,Qr],mt,Og,mt,[0,Og,Qr],mt,kg,mt,[0,ss,-3,It,Kn],mt,[0,ss,-3,It],mt,[0,gt,ss,-2,It,Ht,It,-1,2,ss,Qr],mt,Bg,mt,[0,Bg,Qr],ss,Qr,gt,mt,[0,ss,-3,It,Qr,-1],mt,[0,Zt,kg]],gt,[0,gt,Ht,-1,It]]);var Ii=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Ip,this.s=new hx,Ve(this.h,0,3,this.s),Ve(t=this.h,0,1,e=new Ut)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Px;const r=new zg;var o=new bC;if(Yi(o,1,255),Ve(r,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new bh;ja(a,3,!0),Ne(a,1,e.keypoint.x),Ne(a,2,e.keypoint.y),Ta(r,5,Jf,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new EC,e.scribble))ja(e=new bh,3,!0),Ne(e,1,a.x),Ne(e,2,a.y),gc(o,1,bh,e);Ta(r,15,Jf,o)}gc(i,1,zg,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),fi(this,t,s);e:{try{const c=new $f(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{du(this)}l=void 0}return l}m(){var t=new On;Lt(t,"image_in"),Lt(t,"roi_in"),Lt(t,"norm_rect_in");const e=new $n;Ei(e,dx,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"ROI:roi_in"),Pt(n,"NORM_RECT:norm_rect_in"),n.o(e),Qn(t,n),fu(this,t),this.outputConfidenceMasks&&(ct(t,"confidence_masks"),st(n,"CONFIDENCE_MASKS:confidence_masks"),Ro(this,"confidence_masks"),this.g.ba("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Do(this,r,!0,!this.j))),Le(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],Le(this,i)}))),this.outputCategoryMask&&(ct(t,"category_mask"),st(n,"CATEGORY_MASK:category_mask"),Ro(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=Do(this,i,!1,!this.j),Le(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,Le(this,i)}))),ct(t,"quality_scores"),st(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,Le(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Ii.prototype.segment=Ii.prototype.segment,Ii.prototype.setOptions=Ii.prototype.o,Ii.createFromModelPath=function(t,e){return nt(Ii,t,{baseOptions:{modelAssetPath:e}})},Ii.createFromModelBuffer=function(t,e){return nt(Ii,t,{baseOptions:{modelAssetBuffer:e}})},Ii.createFromOptions=function(t,e){return nt(Ii,t,e)};var si=class extends Fn{constructor(t,e){super(new hi(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ve(t=this.h=new px,0,1,e=new Ut)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?Rt(this.h,2,zo(t.displayNamesLocale)):"displayNamesLocale"in t&&Rt(this.h,2),t.maxResults!==void 0?Yi(this.h,3,t.maxResults):"maxResults"in t&&Rt(this.h,3),t.scoreThreshold!==void 0?Ne(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&Rt(this.h,4),t.categoryAllowlist!==void 0?_c(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&Rt(this.h,5),t.categoryDenylist!==void 0?_c(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&Rt(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},fi(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},Ki(this,t,n,e),this.j}m(){var t=new On;Lt(t,"input_frame_gpu"),Lt(t,"norm_rect"),ct(t,"detections");const e=new $n;Ei(e,_C,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),Pt(n,"IMAGE:input_frame_gpu"),Pt(n,"NORM_RECT:norm_rect"),st(n,"DETECTIONS:detections"),n.o(e),Qn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Wv(r),this.j.detections.push(gx(i));Le(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{Le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};si.prototype.detectForVideo=si.prototype.F,si.prototype.detect=si.prototype.D,si.prototype.setOptions=si.prototype.o,si.createFromModelPath=async function(t,e){return nt(si,t,{baseOptions:{modelAssetPath:e}})},si.createFromModelBuffer=function(t,e){return nt(si,t,{baseOptions:{modelAssetBuffer:e}})},si.createFromOptions=function(t,e){return nt(si,t,e)};var Zf=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Vg(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Gg(t){try{const e=new Zf(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{du(t)}}Zf.prototype.close=Zf.prototype.close;var Wn=class extends Fn{constructor(t,e){super(new hi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ve(t=this.h=new mx,0,1,e=new Ut),this.v=new ax,Ve(this.h,0,3,this.v),this.j=new ox,Ve(this.h,0,2,this.j),Yi(this.j,4,1),Ne(this.j,2,.5),Ne(this.v,2,.5),Ne(this.h,4,.5)}get baseOptions(){return at(this.h,Ut,1)}set baseOptions(t){Ve(this.h,0,1,t)}o(t){return"numPoses"in t&&Yi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ne(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ne(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,Vg(this),fi(this,t,i),Gg(this)}F(t,e,n,i){const s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Vg(this),Ki(this,t,s,e),Gg(this)}m(){var t=new On;Lt(t,"image_in"),Lt(t,"norm_rect"),ct(t,"normalized_landmarks"),ct(t,"world_landmarks"),ct(t,"segmentation_masks");const e=new $n;Ei(e,vC,this.h);const n=new Tn;Zn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Pt(n,"IMAGE:image_in"),Pt(n,"NORM_RECT:norm_rect"),st(n,"NORM_LANDMARKS:normalized_landmarks"),st(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Qn(t,n),fu(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=rl(r),this.landmarks.push(hu(i));Le(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],Le(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=ho(r),this.worldLandmarks.push(Aa(i));Le(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],Le(this,i)})),this.outputSegmentationMasks&&(st(n,"SEGMENTATION_MASK:segmentation_masks"),Ro(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Do(this,r,!0,!this.s))),Le(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],Le(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wn.prototype.detectForVideo=Wn.prototype.F,Wn.prototype.detect=Wn.prototype.D,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(t,e){return nt(Wn,t,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(t,e){return nt(Wn,t,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(t,e){return nt(Wn,t,e)},Wn.POSE_CONNECTIONS=Rx;const TC="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm",wC="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",AC={video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:30}}};class CC{handLandmarker;lastVideoTime;animationFrameId;video;options;callbacks;constructor(e,n,i){this.video=e,this.options=n,this.callbacks=i,this.handLandmarker=null,this.lastVideoTime=-1,this.animationFrameId=null}async init(){if(this.video){this.updateDebug("Loading MediaPipe models...");try{if(!await this.tryLoadModels())throw new Error("Unable to load MediaPipe models.");const n=await navigator.mediaDevices.getUserMedia(AC);this.video.srcObject=n,this.video.addEventListener("loadeddata",()=>{this.video.play(),this.callbacks.onReady(),this.predict()}),this.updateDebug("Webcam active. Show hand.")}catch(e){const n=e instanceof Error?e.message:String(e);this.updateDebug(`Camera Error: ${n}`),this.callbacks.onError(n)}}}dispose(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.handLandmarker&&(this.handLandmarker.close(),this.handLandmarker=null),this.video.srcObject&&(this.video.srcObject.getTracks().forEach(e=>e.stop()),this.video.srcObject=null)}async tryLoadModels(){try{return await this.loadFrom(TC,wC),this.updateDebug("Loaded MediaPipe models from CDN."),!0}catch(e){console.warn("CDN model loading failed, falling back to local files.",e);const n="/christmas-tree/";try{return await this.loadFrom(`${n}mediapipe/wasm`,`${n}mediapipe/models/hand_landmarker.task`),this.updateDebug("Loaded MediaPipe models from local assets."),!0}catch(i){return console.error("MediaPipe model loading failed",i),!1}}}async loadFrom(e,n){const i=await pr.forVisionTasks(e);this.handLandmarker=await Ln.createFromOptions(i,{baseOptions:{modelAssetPath:n,delegate:this.options.delegate},runningMode:"VIDEO",numHands:this.options.numHands})}predict(){if(!this.handLandmarker){this.animationFrameId=requestAnimationFrame(()=>this.predict());return}if(this.video.currentTime!==this.lastVideoTime){this.lastVideoTime=this.video.currentTime;const e=this.handLandmarker.detectForVideo(this.video,performance.now()),n=this.processGestures(e);this.callbacks.onData(n)}this.animationFrameId=requestAnimationFrame(()=>this.predict())}processGestures(e){if(e.landmarks&&e.landmarks.length>0){const n=e.landmarks[0],i=n[4],s=n[8],r=n[0],o=n[9],a={x:(o.x-.5)*2,y:(o.y-.5)*2},l=Math.hypot(o.x-r.x,o.y-r.y);if(l<.02)return{detected:!1,position:a,ratios:{extensionRatio:0,pinchRatio:0,handSize:0}};const c=[n[8],n[12],n[16],n[20]];let u=0;c.forEach(d=>{u+=Math.hypot(d.x-r.x,d.y-r.y)}),u/=4;const h=Math.hypot(i.x-s.x,i.y-s.y),f={handSize:l,extensionRatio:u/l,pinchRatio:h/l};return this.options.debugMode&&this.options.debugElement&&(this.options.debugElement.innerText=`Detected | Ext: ${f.extensionRatio.toFixed(2)} | Pinch: ${f.pinchRatio.toFixed(2)} | Pos: (${a.x.toFixed(2)}, ${a.y.toFixed(2)})`),{detected:!0,position:a,ratios:f}}return this.updateDebug("No hand detected"),{detected:!1,position:{x:0,y:0},ratios:{extensionRatio:0,pinchRatio:0,handSize:0}}}updateDebug(e){this.options.debugMode&&this.options.debugElement&&(this.options.debugElement.innerText=e)}}function RC(t){let e=null;const n=async()=>{await f_();const s=t.getVideoElement();s&&(e=new CC(s,{delegate:t.delegate,numHands:t.numHands,debugElement:t.getDebugElement(),debugMode:t.debugMode},{onData:r=>t.emitters.onTrackingData(r),onReady:t.emitters.onReady,onError:t.emitters.onError}),e.init())},i=()=>{e?.dispose(),e=null};return Rc(n),Pc(i),{start:n,stop:i}}const PC=Ja({__name:"WebcamHandTracker",props:{debugMode:{type:Boolean,default:!0},delegate:{default:"GPU"},numHands:{default:1}},emits:["tracking-data","error","ready"],setup(t,{emit:e}){const n=t,i=w2(n,"debugMode"),s=e,r=Ni(null),o=Ni(null);return RC({getVideoElement:()=>r.value,getDebugElement:()=>o.value,delegate:n.delegate,numHands:n.numHands,debugMode:i.value,emitters:{onTrackingData:a=>s("tracking-data",a),onReady:()=>s("ready"),onError:a=>s("error",a)}}),(a,l)=>(Ys(),Za("div",null,[Nt("video",{ref_key:"webcamVideo",ref:r,class:"h-full w-full -scale-x-100 object-cover",autoplay:"",playsinline:""},null,512),F2(Nt("div",{ref_key:"debugInfo",ref:o,class:"pointer-events-none absolute bottom-1 left-1 right-1 bg-[rgba(0,0,0,0.5)] px-1.5 py-1 font-mono text-[10px] text-[rgba(212,175,55,0.8)]"}," Awaiting MediaPipe initialization... ",512),[[j3,i.value]])]))}}),LC={id:"ui-layer",class:"pointer-events-none absolute inset-0 z-10 flex flex-col items-center pt-10 transition-opacity duration-500 ease-out"},DC={class:"flex gap-2.5"},IC={class:"group flex h-[38px] min-w-[120px] cursor-pointer items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.6)] px-5 text-[10px] uppercase tracking-[2px] text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] backdrop-blur-sm"},UC={class:"group flex h-[38px] min-w-[120px] cursor-pointer items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.6)] px-5 text-[10px] uppercase tracking-[2px] text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] backdrop-blur-sm"},NC={class:"lg:hidden fixed bottom-4 right-4 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.75)] text-[#d4af37] shadow-lg backdrop-blur","aria-label":"Upload Images"},FC=Ja({__name:"HomePage",setup(t){const e=Ni(null),n=Ni(null),i=Ni(null),s=Ni(null),r=Ni({detected:!1,position:{x:0,y:0},ratios:{extensionRatio:0,pinchRatio:0,handSize:0}}),o=Ni(!0),a=(_,v=!0)=>{_&&(_.classList.toggle("opacity-0"),v&&(_.classList.toggle("pointer-events-none"),_.classList.toggle("pointer-events-auto")))},l=_=>{_.key.toLowerCase()==="h"&&(a(n.value,!0),a(i.value,!1),a(s.value,!0))},c=_=>{const v=_.target;if(!v||!v.files)return;const m=v.files;m.length!==0&&Array.from(m).forEach(p=>{if(!p.type.startsWith("image/"))return;const E=new FileReader;E.onload=S=>{const x=S.target?.result;typeof x=="string"&&new A1().load(x,A=>{A.colorSpace=yn,e.value=A,v.value=""})},E.readAsDataURL(p)})};function u(_){r.value=_}function h(_){console.error("Webcam Tracker Component Error:",_)}function f(){console.log("Webcam Tracker Component Ready !")}const d=()=>{setTimeout(()=>o.value=!1,800)};return Rc(()=>{window.addEventListener("keydown",l)}),pd(()=>{window.removeEventListener("keydown",l)}),(_,v)=>(Ys(),Za(Fi,null,[o.value?(Ys(),_d(vM,{key:0})):P3("",!0),ci($A,{"new-texture":e.value,"hand-tracking-data":r.value,onTreeRenderCompleted:d},null,8,["new-texture","hand-tracking-data"]),Nt("div",LC,[v[5]||(v[5]=Nt("h1",{class:"text-center"},"Merry Christmas",-1)),Nt("div",{ref_key:"controlsWrapperRef",ref:n,class:"pointer-events-auto absolute right-8 top-8 z-20 hidden flex-col items-end gap-2.5 transition-opacity duration-500 ease-out lg:flex"},[Nt("div",DC,[Nt("label",IC,[v[0]||(v[0]=Dh(" Select Folder ",-1)),Nt("input",{type:"file",class:"hidden",webkitdirectory:"",directory:"",multiple:"",onChange:c},null,32)]),Nt("label",UC,[v[1]||(v[1]=Dh(" Select Files ",-1)),Nt("input",{type:"file",class:"hidden",multiple:"",accept:"image/*",onChange:c},null,32)])]),v[2]||(v[2]=Nt("div",{class:"mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"},' Use "Select Folder" to load all photos at once ',-1)),v[3]||(v[3]=Nt("div",{class:"mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"},' Or put photos in "./images/" Folder (Naming by 1.jpg - 30.jpg) ',-1)),v[4]||(v[4]=Nt("div",{class:"mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"},' Press "H" to hide all the UIs ',-1))],512)]),Nt("div",{ref_key:"MusicPlayerWrapperRef",ref:s,class:"pointer-events-auto absolute bottom-8 right-8 z-20 hidden transition-opacity duration-500 ease-out lg:block"},[ci(ZA)],512),Nt("div",{ref_key:"webcamWrapperRef",ref:i,class:"pointer-events-none absolute bottom-8 left-8 z-50 hidden h-[210px] w-[280px] overflow-hidden rounded border border-[rgba(212,175,55,0.5)] bg-black shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-opacity duration-500 ease-out lg:block"},[ci(PC,{"debug-mode":!0,delegate:"GPU",onTrackingData:u,onError:h,onReady:f})],512),Nt("label",NC,[v[6]||(v[6]=Nt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-6 w-6 fill-current"},[Nt("path",{d:"M12 3l4 4h-3v6h-2V7H8l4-4zm-7 15h14v2H5v-2z"})],-1)),Nt("input",{type:"file",class:"hidden",multiple:"",accept:"image/*",onChange:c},null,32)])],64))}}),OC=Ja({__name:"App",setup(t){return(e,n)=>(Ys(),_d(FC))}});hM(OC).mount("#app");
