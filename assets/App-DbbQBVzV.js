import{m as Ug,d as Ra,r as fi,w as Ng,o as Oh,a as Bp,b as kp,c as Bo,e as Rs,n as Fg,t as Og,f as Wt,g as Bg,v as kg,h as xc,i as zg,L as Vg,j as Sf,k as yf,F as Gg}from"./index-CuarQLnQ.js";const Bh="182",Hg=0,Ef=1,Wg=2,po=1,Xg=2,ta=3,rs=0,cn=1,Jn=2,gi=0,lr=1,Mc=2,bf=3,Tf=4,qg=5,Es=100,Yg=101,jg=102,Kg=103,Jg=104,$g=200,Zg=201,Qg=202,e_=203,Sc=204,yc=205,t_=206,n_=207,i_=208,s_=209,r_=210,a_=211,o_=212,l_=213,c_=214,Ec=0,bc=1,Tc=2,dr=3,Ac=4,wc=5,Cc=6,Rc=7,kh=0,h_=1,u_=2,_i=0,zp=1,zh=2,Vp=3,Gp=4,Hp=5,Wp=6,Xp=7,qp=300,Ls=301,pr=302,Pc=303,Lc=304,ko=306,da=1e3,Li=1001,Dc=1002,$t=1003,f_=1004,Ba=1005,nn=1006,Tl=1007,Ts=1008,Pn=1009,Yp=1010,jp=1011,pa=1012,Vh=1013,vi=1014,Qn=1015,Ln=1016,Gh=1017,Hh=1018,ma=1020,Kp=35902,Jp=35899,$p=1021,Zp=1022,ei=1023,Bi=1026,As=1027,Wh=1028,Xh=1029,mr=1030,qh=1031,Yh=1033,mo=33776,go=33777,_o=33778,vo=33779,Ic=35840,Uc=35841,Nc=35842,Fc=35843,Oc=36196,Bc=37492,kc=37496,zc=37488,Vc=37489,Gc=37490,Hc=37491,Wc=37808,Xc=37809,qc=37810,Yc=37811,jc=37812,Kc=37813,Jc=37814,$c=37815,Zc=37816,Qc=37817,eh=37818,th=37819,nh=37820,ih=37821,sh=36492,rh=36494,ah=36495,oh=36283,lh=36284,ch=36285,hh=36286,d_=3200,jh=0,p_=1,Ki="",_n="srgb",gr="srgb-linear",Ao="linear",ft="srgb",Vs=7680,Af=519,m_=512,g_=513,__=514,Kh=515,v_=516,x_=517,Jh=518,M_=519,wf=35044,S_=35048,Cf="300 es",mi=2e3,wo=2001;function Qp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function y_(){const t=ga("canvas");return t.style.display="block",t}const Rf={};function Pf(...t){const e="THREE."+t.shift();console.log(e,...t)}function He(...t){const e="THREE."+t.shift();console.warn(e,...t)}function nt(...t){const e="THREE."+t.shift();console.error(e,...t)}function _a(...t){const e=t.join(" ");e in Rf||(Rf[e]=!0,He(...t))}function E_(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Dr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lf=1234567;const aa=Math.PI/180,_r=180/Math.PI;function Os(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function $h(t,e){return(t%e+e)%e}function b_(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function T_(t,e,n){return t!==e?(n-t)/(e-t):0}function oa(t,e,n){return(1-n)*t+n*e}function A_(t,e,n,i){return oa(t,e,1-Math.exp(-n*i))}function w_(t,e=1){return e-Math.abs($h(t,e*2)-e)}function C_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function R_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function P_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function L_(t,e){return t+Math.random()*(e-t)}function D_(t){return t*(.5-Math.random())}function I_(t){t!==void 0&&(Lf=t);let e=Lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function U_(t){return t*aa}function N_(t){return t*_r}function F_(t){return(t&t-1)===0&&t!==0}function O_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function B_(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function k_(t,e,n,i,s){const r=Math.cos,a=Math.sin,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*u,l*f,o*c);break;case"YZY":t.set(l*f,o*h,l*u,o*c);break;case"ZXZ":t.set(l*u,l*f,o*h,o*c);break;case"XZX":t.set(o*h,l*g,l*p,o*c);break;case"YXY":t.set(l*p,o*h,l*g,o*c);break;case"ZYZ":t.set(l*g,l*p,o*h,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ar(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Co={DEG2RAD:aa,RAD2DEG:_r,generateUUID:Os,clamp:$e,euclideanModulo:$h,mapLinear:b_,inverseLerp:T_,lerp:oa,damp:A_,pingpong:w_,smoothstep:C_,smootherstep:R_,randInt:P_,randFloat:L_,randFloatSpread:D_,seededRandom:I_,degToRad:U_,radToDeg:N_,isPowerOfTwo:F_,ceilPowerOfTwo:O_,floorPowerOfTwo:B_,setQuaternionFromProperEuler:k_,normalize:on,denormalize:ar};class te{constructor(e=0,n=0){te.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ds{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],M=r[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u;return}if(o>=1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=M;return}if(u!==M||l!==f||c!==p||h!==g){let m=l*f+c*p+h*g+u*M;m<0&&(f=-f,p=-p,g=-g,M=-M,m=-m);let d=1-o;if(m<.9995){const b=Math.acos(m),x=Math.sin(b);d=Math.sin(d*b)/x,o=Math.sin(o*b)/x,l=l*d+f*o,c=c*d+p*o,h=h*d+g*o,u=u*d+M*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+g*o,u=u*d+M*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[n]=o*g+h*u+l*p-c*f,e[n+1]=l*g+h*f+c*u-o*p,e[n+2]=c*g+h*p+o*f-l*u,e[n+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],u=n[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Df.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new P,Df=new Ds;class je{constructor(e,n,i,s,r,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],M=s[0],m=s[3],d=s[6],b=s[1],x=s[4],S=s[7],w=s[2],C=s[5],R=s[8];return r[0]=a*M+o*b+l*w,r[3]=a*m+o*x+l*C,r[6]=a*d+o*S+l*R,r[1]=c*M+h*b+u*w,r[4]=c*m+h*x+u*C,r[7]=c*d+h*S+u*R,r[2]=f*M+p*b+g*w,r[5]=f*m+p*x+g*C,r[8]=f*d+p*S+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=n*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=u*M,e[1]=(s*c-h*i)*M,e[2]=(o*i-s*a)*M,e[3]=f*M,e[4]=(h*n-s*l)*M,e[5]=(s*r-o*n)*M,e[6]=p*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*r)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wl.makeScale(e,n)),this}rotate(e){return this.premultiply(wl.makeRotation(-e)),this}translate(e,n){return this.premultiply(wl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wl=new je,If=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){const t={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return _a("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return _a("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gr]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:If,fromXYZ:Uf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:If,fromXYZ:Uf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const it=z_();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gs;class V_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=ga("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ga("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ui(n[i]/255)*255):n[i]=Ui(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G_=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cl(s[a].image)):r.push(Cl(s[a]))}else r=Cl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Cl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?V_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let H_=0;const Rl=new P;class Zt extends Dr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=Li,s=Li,r=nn,a=Ts,o=ei,l=Pn,c=Zt.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Os(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=qp;Zt.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],M=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,w=(d+1)/2,C=(h+f)/4,R=(u+M)/4,D=(g+m)/4;return x>S&&x>w?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=R/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=C/s,r=D/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=D/r),this.set(i,s,r,n),this}let b=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-M)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends Dr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Zt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Zh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends W_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class em extends Zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends Zt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),za.subVectors(this.max,Xr),Hs.subVectors(e.a,Xr),Ws.subVectors(e.b,Xr),Xs.subVectors(e.c,Xr),Gi.subVectors(Ws,Hs),Hi.subVectors(Xs,Ws),ps.subVectors(Hs,Xs);let n=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-ps.z,ps.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,ps.z,0,-ps.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-ps.y,ps.x,0];return!Pl(n,Hs,Ws,Xs,za)||(n=[1,0,0,0,1,0,0,0,1],!Pl(n,Hs,Ws,Xs,za))?!1:(Va.crossVectors(Gi,Hi),n=[Va.x,Va.y,Va.z],Pl(n,Hs,Ws,Xs,za))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new P,new P,new P,new P,new P,new P,new P,new P],Yn=new P,ka=new Bs,Hs=new P,Ws=new P,Xs=new P,Gi=new P,Hi=new P,ps=new P,Xr=new P,za=new P,Va=new P,ms=new P;function Pl(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ms.fromArray(t,r);const o=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=n.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const q_=new Bs,qr=new P,Ll=new P;class Pa{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):q_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);const n=qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ll.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(Ll)),this.expandByPoint(qr.copy(e.center).sub(Ll))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new P,Dl=new P,Ga=new P,Wi=new P,Il=new P,Ha=new P,Ul=new P;class Y_{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Dl.copy(e).add(n).multiplyScalar(.5),Ga.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(Dl);const r=e.distanceTo(n)*.5,a=-this.direction.dot(Ga),o=Wi.dot(this.direction),l=-Wi.dot(Ga),c=Wi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const M=1/h;u*=M,f*=M,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Dl).addScaledVector(Ga,f),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,s,r){Il.subVectors(n,e),Ha.subVectors(i,e),Ul.crossVectors(Il,Ha);let a=this.direction.dot(Ul),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Ha.crossVectors(Wi,Ha));if(l<0)return null;const c=o*this.direction.dot(Il.cross(Wi));if(c<0||l+c>a)return null;const h=-o*Wi.dot(Ul);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,s,r,a,o,l,c,h,u,f,p,g,M,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,u,f,p,g,M,m)}set(e,n,i,s,r,a,o,l,c,h,u,f,p,g,M,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,M=o*u;n[0]=l*h,n[4]=-l*u,n[8]=c,n[1]=p+g*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=g+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,M=c*u;n[0]=f+M*o,n[4]=g*o-p,n[8]=a*c,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=p*o-g,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,M=c*u;n[0]=f-M*o,n[4]=-a*u,n[8]=g+p*o,n[1]=p+g*o,n[5]=a*h,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,M=o*u;n[0]=l*h,n[4]=g*c-p,n[8]=f*c+M,n[1]=l*u,n[5]=M*c+f,n[9]=p*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,M=o*c;n[0]=l*h,n[4]=M-f*u,n[8]=g*u+p,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*u+g,n[10]=f-M*u}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,M=o*c;n[0]=l*h,n[4]=-u,n[8]=c*h,n[1]=f*u+M,n[5]=a*h,n[9]=p*u-g,n[2]=g*u-p,n[6]=o*h,n[10]=M*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(j_,e,K_)}lookAt(e,n,i){const s=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Xi.crossVectors(i,Tn),Xi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Xi.crossVectors(i,Tn)),Xi.normalize(),Wa.crossVectors(Tn,Xi),s[0]=Xi.x,s[4]=Wa.x,s[8]=Tn.x,s[1]=Xi.y,s[5]=Wa.y,s[9]=Tn.y,s[2]=Xi.z,s[6]=Wa.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],M=i[6],m=i[10],d=i[14],b=i[3],x=i[7],S=i[11],w=i[15],C=s[0],R=s[4],D=s[8],v=s[12],E=s[1],L=s[5],O=s[9],B=s[13],H=s[2],q=s[6],z=s[10],G=s[14],Z=s[3],de=s[7],oe=s[11],he=s[15];return r[0]=a*C+o*E+l*H+c*Z,r[4]=a*R+o*L+l*q+c*de,r[8]=a*D+o*O+l*z+c*oe,r[12]=a*v+o*B+l*G+c*he,r[1]=h*C+u*E+f*H+p*Z,r[5]=h*R+u*L+f*q+p*de,r[9]=h*D+u*O+f*z+p*oe,r[13]=h*v+u*B+f*G+p*he,r[2]=g*C+M*E+m*H+d*Z,r[6]=g*R+M*L+m*q+d*de,r[10]=g*D+M*O+m*z+d*oe,r[14]=g*v+M*B+m*G+d*he,r[3]=b*C+x*E+S*H+w*Z,r[7]=b*R+x*L+S*q+w*de,r[11]=b*D+x*O+S*z+w*oe,r[15]=b*v+x*B+S*G+w*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],M=e[7],m=e[11],d=e[15],b=l*p-c*f,x=o*p-c*u,S=o*f-l*u,w=a*p-c*h,C=a*f-l*h,R=a*u-o*h;return n*(M*b-m*x+d*S)-i*(g*b-m*w+d*C)+s*(g*x-M*w+d*R)-r*(g*S-M*C+m*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],M=e[13],m=e[14],d=e[15],b=u*m*c-M*f*c+M*l*p-o*m*p-u*l*d+o*f*d,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,S=h*M*c-g*u*c+g*o*p-a*M*p-h*o*d+a*u*d,w=g*u*l-h*M*l-g*o*f+a*M*f+h*o*m-a*u*m,C=n*b+i*x+s*S+r*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=b*R,e[1]=(M*f*r-u*m*r-M*s*p+i*m*p+u*s*d-i*f*d)*R,e[2]=(o*m*r-M*l*r+M*s*c-i*m*c-o*s*d+i*l*d)*R,e[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*p-i*l*p)*R,e[4]=x*R,e[5]=(h*m*r-g*f*r+g*s*p-n*m*p-h*s*d+n*f*d)*R,e[6]=(g*l*r-a*m*r-g*s*c+n*m*c+a*s*d-n*l*d)*R,e[7]=(a*f*r-h*l*r+h*s*c-n*f*c-a*s*p+n*l*p)*R,e[8]=S*R,e[9]=(g*u*r-h*M*r-g*i*p+n*M*p+h*i*d-n*u*d)*R,e[10]=(a*M*r-g*o*r+g*i*c-n*M*c-a*i*d+n*o*d)*R,e[11]=(h*o*r-a*u*r-h*i*c+n*u*c+a*i*p-n*o*p)*R,e[12]=w*R,e[13]=(h*M*s-g*u*s+g*i*f-n*M*f-h*i*m+n*u*m)*R,e[14]=(g*o*s-a*M*s-g*i*l+n*M*l+a*i*m-n*o*m)*R,e[15]=(a*u*s-h*o*s+h*i*l-n*u*l-a*i*f+n*o*f)*R,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,M=a*h,m=a*u,d=o*u,b=l*c,x=l*h,S=l*u,w=i.x,C=i.y,R=i.z;return s[0]=(1-(M+d))*w,s[1]=(p+S)*w,s[2]=(g-x)*w,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(f+d))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(g+x)*R,s[9]=(m-b)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let r=qs.set(s[0],s[1],s[2]).length();const a=qs.set(s[4],s[5],s[6]).length(),o=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),jn.copy(this);const c=1/r,h=1/a,u=1/o;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,n.setFromRotationMatrix(jn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=mi,l=!1){const c=this.elements,h=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),p=(i+s)/(i-s);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===mi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===wo)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=mi,l=!1){const c=this.elements,h=2/(n-e),u=2/(i-s),f=-(n+e)/(n-e),p=-(i+s)/(i-s);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===mi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===wo)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const qs=new P,jn=new Et,j_=new P(0,0,0),K_=new P(1,1,1),Xi=new P,Wa=new P,Tn=new P,Nf=new Et,Ff=new Ds;class ni{constructor(e=0,n=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class tm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J_=0;const Of=new P,Ys=new Ds,Ai=new Et,Xa=new P,Yr=new P,$_=new P,Z_=new Ds,Bf=new P(1,0,0),kf=new P(0,1,0),zf=new P(0,0,1),Vf={type:"added"},Q_={type:"removed"},js={type:"childadded",child:null},Nl={type:"childremoved",child:null};class Gt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new P,n=new ni,i=new Ds,s=new P(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,n){return Ys.setFromAxisAngle(e,n),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(kf,e)}rotateZ(e){return this.rotateOnAxis(zf,e)}translateOnAxis(e,n){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(kf,e)}translateZ(e){return this.translateOnAxis(zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xa.copy(e):Xa.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Yr,Xa,this.up):Ai.lookAt(Xa,Yr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ai),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vf),js.child=e,this.dispatchEvent(js),js.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Q_),Nl.child=e,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vf),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new P(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new P,wi=new P,Fl=new P,Ci=new P,Ks=new P,Js=new P,Gf=new P,Ol=new P,Bl=new P,kl=new P,zl=new Nt,Vl=new Nt,Gl=new Nt;class $n{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Kn.subVectors(e,n),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Kn.subVectors(s,n),wi.subVectors(i,n),Fl.subVectors(e,n);const a=Kn.dot(Kn),o=Kn.dot(wi),l=Kn.dot(Fl),c=wi.dot(wi),h=wi.dot(Fl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return zl.setScalar(0),Vl.setScalar(0),Gl.setScalar(0),zl.fromBufferAttribute(e,n),Vl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(zl,r.x),a.addScaledVector(Vl,r.y),a.addScaledVector(Gl,r.z),a}static isFrontFacing(e,n,i,s){return Kn.subVectors(i,n),wi.subVectors(e,n),Kn.cross(wi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Kn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let a,o;Ks.subVectors(s,i),Js.subVectors(r,i),Ol.subVectors(e,i);const l=Ks.dot(Ol),c=Js.dot(Ol);if(l<=0&&c<=0)return n.copy(i);Bl.subVectors(e,s);const h=Ks.dot(Bl),u=Js.dot(Bl);if(h>=0&&u<=h)return n.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Ks,a);kl.subVectors(e,r);const p=Ks.dot(kl),g=Js.dot(kl);if(g>=0&&p<=g)return n.copy(r);const M=p*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Js,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Gf.subVectors(r,s),o=(u-h)/(u-h+(p-g)),n.copy(s).addScaledVector(Gf,o);const d=1/(m+M+f);return a=M*d,o=f*d,n.copy(i).addScaledVector(Ks,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Hl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=it.workingColorSpace){if(e=$h(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Hl(a,r,e+1/3),this.g=Hl(a,r,e),this.b=Hl(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,n=_n){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=nm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return it.workingToColorSpace(en.copy(this),e),Math.round($e(en.r*255,0,255))*65536+Math.round($e(en.g*255,0,255))*256+Math.round($e(en.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(en.copy(this),n);const i=en.r,s=en.g,r=en.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=_n){it.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(qa);const i=oa(qi.h,qa.h,n),s=oa(qi.s,qa.s,n),r=oa(qi.l,qa.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ye;Ye.NAMES=nm;let e1=0;class Ir extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=lr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=yc,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(i.blending=this.blending),this.side!==rs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sc&&(i.blendSrc=this.blendSrc),this.blendDst!==yc&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(n){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class va extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new P,Ya=new te;let t1=0;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wf,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ar(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ar(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ar(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ar(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wf&&(e.usage=this.usage),e}}class im extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class sm extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _t extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let n1=0;const Bn=new Et,Wl=new Gt,$s=new P,An=new Bs,jr=new Bs,jt=new P;class rn extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?sm:im)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return Wl.lookAt(e),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(An.min,jr.min),An.expandByPoint(jt),jt.addVectors(An.max,jr.max),An.expandByPoint(jt)):(An.expandByPoint(jr.min),An.expandByPoint(jr.max))}An.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),jt.add($s)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new P,l[D]=new P;const c=new P,h=new P,u=new P,f=new te,p=new te,g=new te,M=new P,m=new P;function d(D,v,E){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,v),u.fromBufferAttribute(i,E),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,E),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[D].add(M),o[v].add(M),o[E].add(M),l[D].add(m),l[v].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,v=b.length;D<v;++D){const E=b[D],L=E.start,O=E.count;for(let B=L,H=L+O;B<H;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new P,S=new P,w=new P,C=new P;function R(D){w.fromBufferAttribute(s,D),C.copy(w);const v=o[D];x.copy(v),x.sub(w.multiplyScalar(w.dot(v))).normalize(),S.crossVectors(C,v);const L=S.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,L)}for(let D=0,v=b.length;D<v;++D){const E=b[D],L=E.start,O=E.count;for(let B=L,H=L+O;B<H;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,M),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new ti(f,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hf=new Et,gs=new Y_,ja=new Pa,Wf=new P,Ka=new P,Ja=new P,$a=new P,Xl=new P,Za=new P,Xf=new P,Qa=new P;class ot extends Gt{constructor(e=new rn,n=new va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Xl.fromBufferAttribute(u,e),a?Za.addScaledVector(Xl,h):Za.addScaledVector(Xl.sub(n),h))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(ja.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ja,Wf)===null||gs.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Hf.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Hf),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,w=x;S<w;S+=3){const C=o.getX(S),R=o.getX(S+1),D=o.getX(S+2);s=eo(this,d,e,i,c,h,u,C,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const b=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);s=eo(this,a,e,i,c,h,u,b,x,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=f.length;g<M;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,w=x;S<w;S+=3){const C=S,R=S+1,D=S+2;s=eo(this,d,e,i,c,h,u,C,R,D),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=g,d=M;m<d;m+=3){const b=m,x=m+1,S=m+2;s=eo(this,a,e,i,c,h,u,b,x,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function i1(t,e,n,i,s,r,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===rs,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function eo(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Ka),t.getVertexPosition(l,Ja),t.getVertexPosition(c,$a);const h=i1(t,e,n,i,Ka,Ja,$a,Xf);if(h){const u=new P;$n.getBarycoord(Xf,Ka,Ja,$a,u),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,u,new te)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,u,new te)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new P,materialIndex:0};$n.getNormal(Ka,Ja,$a,f.normal),h.face=f,h.barycoord=u}return h}class ls extends rn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(u,2));function g(M,m,d,b,x,S,w,C,R,D,v){const E=S/R,L=w/D,O=S/2,B=w/2,H=C/2,q=R+1,z=D+1;let G=0,Z=0;const de=new P;for(let oe=0;oe<z;oe++){const he=oe*L-B;for(let Xe=0;Xe<q;Xe++){const Ge=Xe*E-O;de[M]=Ge*b,de[m]=he*x,de[d]=H,c.push(de.x,de.y,de.z),de[M]=0,de[m]=0,de[d]=C>0?1:-1,h.push(de.x,de.y,de.z),u.push(Xe/R),u.push(1-oe/D),G+=1}}for(let oe=0;oe<D;oe++)for(let he=0;he<R;he++){const Xe=f+he+q*oe,Ge=f+he+q*(oe+1),dt=f+(he+1)+q*(oe+1),pt=f+(he+1)+q*oe;l.push(Xe,Ge,pt),l.push(Ge,dt,pt),Z+=6}o.addGroup(p,Z,v),p+=Z,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=vr(t[n]);for(const s in i)e[s]=i[s]}return e}function s1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ro={clone:vr,merge:ln};var r1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=s1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class am extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new P,qf=new te,Yf=new te;class vn extends am{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,qf,Yf),n.subVectors(Yf,qf)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(aa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zs=-90,Qs=1;class o1 extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(Zs,Qs,e,n);s.layers=this.layers,this.add(s);const r=new vn(Zs,Qs,e,n);r.layers=this.layers,this.add(r);const a=new vn(Zs,Qs,e,n);a.layers=this.layers,this.add(a);const o=new vn(Zs,Qs,e,n);o.layers=this.layers,this.add(o);const l=new vn(Zs,Qs,e,n);l.layers=this.layers,this.add(l);const c=new vn(Zs,Qs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class om extends Zt{constructor(e=[],n=Ls,i,s,r,a,o,l,c,h){super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lm extends xn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new om(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ls(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:gi});r.uniforms.tEquirect.value=n;const a=new ot(s,r),o=n.minFilter;return n.minFilter===Ts&&(n.minFilter=nn),new o1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}}class Zi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=n.getJointPose(M,i),d=this._getHandJoint(c,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Qh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=n}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cm extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hm extends Zt{constructor(e=null,n=1,i=1,s,r,a,o,l,c=$t,h=$t,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jf extends ti{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const er=new Et,Kf=new Et,to=[],Jf=new Bs,c1=new Et,Kr=new ot,Jr=new Pa;class um extends ot{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new jf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,c1)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,er),Jf.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(Jf)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,er),Jr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Jr)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,n){const i=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(i),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Kf.multiplyMatrices(i,er),Kr.matrixWorld=Kf,Kr.raycast(e,to);for(let a=0,o=to.length;a<o;a++){const l=to[a];l.instanceId=r,l.object=this,n.push(l)}to.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new hm(new Float32Array(s*this.count),s,this.count,Wh,Qn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yl=new P,h1=new P,u1=new je;class Ss{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=Yl.subVectors(i,n).cross(h1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||u1.getNormalMatrix(e),s=this.coplanarPoint(Yl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Pa,f1=new te(.5,.5),no=new P;class eu{constructor(e=new Ss,n=new Ss,i=new Ss,s=new Ss,r=new Ss,a=new Ss){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],M=r[9],m=r[10],d=r[11],b=r[12],x=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,d-g,w-b).normalize(),s[1].setComponents(c+a,p+h,d+g,w+b).normalize(),s[2].setComponents(c+o,p+u,d+M,w+x).normalize(),s[3].setComponents(c-o,p-u,d-M,w-x).normalize(),i)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,p-f,d-m,w-S).normalize();else if(s[4].setComponents(c-l,p-f,d-m,w-S).normalize(),n===mi)s[5].setComponents(c+l,p+f,d+m,w+S).normalize();else if(n===wo)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const n=f1.distanceTo(e.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(no.x=s.normal.x>0?e.max.x:e.min.x,no.y=s.normal.y>0?e.max.y:e.min.y,no.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d1 extends Zt{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xa extends Zt{constructor(e,n,i=vi,s,r,a,o=$t,l=$t,c,h=Bi,u=1){if(h!==Bi&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class p1 extends xa{constructor(e,n=vi,i=Ls,s,r,a=$t,o=$t,l,c=Bi){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,n,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fm extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zo extends rn{constructor(e=1,n=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const M=[],m=i/2;let d=0;b(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2));function b(){const S=new P,w=new P;let C=0;const R=(n-e)/i;for(let D=0;D<=r;D++){const v=[],E=D/r,L=E*(n-e)+e;for(let O=0;O<=s;O++){const B=O/s,H=B*l+o,q=Math.sin(H),z=Math.cos(H);w.x=L*q,w.y=-E*i+m,w.z=L*z,u.push(w.x,w.y,w.z),S.set(q,R,z).normalize(),f.push(S.x,S.y,S.z),p.push(B,1-E),v.push(g++)}M.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){const E=M[v][D],L=M[v+1][D],O=M[v+1][D+1],B=M[v][D+1];(e>0||v!==0)&&(h.push(E,L,B),C+=3),(n>0||v!==r-1)&&(h.push(L,O,B),C+=3)}c.addGroup(d,C,0),d+=C}function x(S){const w=g,C=new te,R=new P;let D=0;const v=S===!0?e:n,E=S===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const L=g;for(let O=0;O<=s;O++){const H=O/s*l+o,q=Math.cos(H),z=Math.sin(H);R.x=v*z,R.y=m*E,R.z=v*q,u.push(R.x,R.y,R.z),f.push(0,E,0),C.x=q*.5+.5,C.y=z*.5*E+.5,p.push(C.x,C.y),g++}for(let O=0;O<s;O++){const B=w+O,H=L+O;S===!0?h.push(H,H+1,B):h.push(H+1,H,B),D+=3}c.addGroup(d,D,S===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tu extends zo{constructor(e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new tu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nu extends rn{constructor(e=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new P,S=new P,w=new P;for(let C=0;C<n.length;C+=3)p(n[C+0],x),p(n[C+1],S),p(n[C+2],w),l(x,S,w,b)}function l(b,x,S,w){const C=w+1,R=[];for(let D=0;D<=C;D++){R[D]=[];const v=b.clone().lerp(S,D/C),E=x.clone().lerp(S,D/C),L=C-D;for(let O=0;O<=L;O++)O===0&&D===C?R[D][O]=v:R[D][O]=v.clone().lerp(E,O/L)}for(let D=0;D<C;D++)for(let v=0;v<2*(C-D)-1;v++){const E=Math.floor(v/2);v%2===0?(f(R[D][E+1]),f(R[D+1][E]),f(R[D][E])):(f(R[D][E+1]),f(R[D+1][E+1]),f(R[D+1][E]))}}function c(b){const x=new P;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(b),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function h(){const b=new P;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const S=m(b)/2/Math.PI+.5,w=d(b)/Math.PI+.5;a.push(S,1-w)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const x=a[b+0],S=a[b+2],w=a[b+4],C=Math.max(x,S,w),R=Math.min(x,S,w);C>.9&&R<.1&&(x<.2&&(a[b+0]+=1),S<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,x){const S=b*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const b=new P,x=new P,S=new P,w=new P,C=new te,R=new te,D=new te;for(let v=0,E=0;v<r.length;v+=9,E+=6){b.set(r[v+0],r[v+1],r[v+2]),x.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),C.set(a[E+0],a[E+1]),R.set(a[E+2],a[E+3]),D.set(a[E+4],a[E+5]),w.copy(b).add(x).add(S).divideScalar(3);const L=m(w);M(C,E+0,b,L),M(R,E+2,x,L),M(D,E+4,S,L)}}function M(b,x,S,w){w<0&&b.x===1&&(a[x]=b.x-1),S.x===0&&S.z===0&&(a[x]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.vertices,e.indices,e.radius,e.detail)}}class Si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let a;n?a=n:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],f=i[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=n||(a.isVector2?new te:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new P,s=[],r=[],a=[],o=new P,l=new Et;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos($e(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class iu extends Si{constructor(e=0,n=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new te){const i=n,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m1 extends iu{constructor(e,n,i,s,r,a){super(e,n,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function su(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return t+e*r+n*a+i*o}}}const io=new P,jl=new su,Kl=new su,Jl=new su;class dm extends Si{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new P){const i=n,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(io.subVectors(s[0],s[1]).add(s[0]),c=io);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(io.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=io),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),M=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),jl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,M,m),Kl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,M,m),Jl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Kl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Jl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(jl.calc(l),Kl.calc(l),Jl.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $f(t,e,n,i,s){const r=(i-e)*.5,a=(s-n)*.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function g1(t,e){const n=1-t;return n*n*e}function _1(t,e){return 2*(1-t)*t*e}function v1(t,e){return t*t*e}function la(t,e,n,i){return g1(t,e)+_1(t,n)+v1(t,i)}function x1(t,e){const n=1-t;return n*n*n*e}function M1(t,e){const n=1-t;return 3*n*n*t*e}function S1(t,e){return 3*(1-t)*t*t*e}function y1(t,e){return t*t*t*e}function ca(t,e,n,i,s){return x1(t,e)+M1(t,n)+S1(t,i)+y1(t,s)}class pm extends Si{constructor(e=new te,n=new te,i=new te,s=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new te){const i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ca(e,s.x,r.x,a.x,o.x),ca(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E1 extends Si{constructor(e=new P,n=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new P){const i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ca(e,s.x,r.x,a.x,o.x),ca(e,s.y,r.y,a.y,o.y),ca(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mm extends Si{constructor(e=new te,n=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new te){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new te){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b1 extends Si{constructor(e=new P,n=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new P){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new P){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gm extends Si{constructor(e=new te,n=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new te){const i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(la(e,s.x,r.x,a.x),la(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _m extends Si{constructor(e=new P,n=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new P){const i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(la(e,s.x,r.x,a.x),la(e,s.y,r.y,a.y),la(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vm extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new te){const i=n,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set($f(o,l.x,c.x,h.x,u.x),$f(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new te().fromArray(s))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:m1,CatmullRomCurve3:dm,CubicBezierCurve:pm,CubicBezierCurve3:E1,EllipseCurve:iu,LineCurve:mm,LineCurve3:b1,QuadraticBezierCurve:gm,QuadraticBezierCurve3:_m,SplineCurve:vm});class T1 extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,n)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(new Po[s.type]().fromJSON(s))}return this}}class Zf extends T1{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new mm(this.currentPoint.clone(),new te(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){const r=new gm(this.currentPoint.clone(),new te(e,n),new te(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,a){const o=new pm(this.currentPoint.clone(),new te(e,n),new te(i,s),new te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new vm(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,s,r,a),this}absarc(e,n,i,s,r,a){return this.absellipse(e,n,i,i,s,r,a),this}ellipse(e,n,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,a,o,l),this}absellipse(e,n,i,s,r,a,o,l){const c=new iu(e,n,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Vo extends Zf{constructor(e){super(e),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(new Zf().fromJSON(s))}return this}}function A1(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let r=xm(t,0,s,n,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=L1(t,e,r,n)),t.length>80*n){o=t[0],l=t[1];let h=o,u=l;for(let f=n;f<s;f+=n){const p=t[f],g=t[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ma(r,a,n,o,l,c,0),a}function xm(t,e,n,i,s){let r;if(s===G1(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Qf(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Qf(a/i|0,t[a],t[a+1],r);return r&&xr(r,r.next)&&(ya(r),r=r.next),r}function Is(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(xr(n,n.next)||Rt(n.prev,n,n.next)===0)){if(ya(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ma(t,e,n,i,s,r,a){if(!t)return;!a&&r&&F1(t,i,s,r);let o=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(r?C1(t,i,s,r):w1(t)){e.push(l.i,t.i,c.i),ya(t),t=c.next,o=c.next;continue}if(t=c,t===o){a?a===1?(t=R1(Is(t),e),Ma(t,e,n,i,s,r,2)):a===2&&P1(t,e,n,i,s,r):Ma(Is(t),e,n,i,s,r,1);break}}}function w1(t){const e=t.prev,n=t,i=t.next;if(Rt(e,n,i)>=0)return!1;const s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&na(s,o,r,l,a,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function C1(t,e,n,i){const s=t.prev,r=t,a=t.next;if(Rt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,u,f),M=Math.max(o,l,c),m=Math.max(h,u,f),d=uh(p,g,e,n,i),b=uh(M,m,e,n,i);let x=t.prevZ,S=t.nextZ;for(;x&&x.z>=d&&S&&S.z<=b;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&na(o,h,l,u,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&na(o,h,l,u,c,f,S.x,S.y)&&Rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&na(o,h,l,u,c,f,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=b;){if(S.x>=p&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&na(o,h,l,u,c,f,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function R1(t,e){let n=t;do{const i=n.prev,s=n.next.next;!xr(i,s)&&Sm(i,n,n.next,s)&&Sa(i,s)&&Sa(s,i)&&(e.push(i.i,n.i,s.i),ya(n),ya(n.next),n=t=s),n=n.next}while(n!==t);return Is(n)}function P1(t,e,n,i,s,r){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&k1(a,o)){let l=ym(a,o);a=Is(a,a.next),l=Is(l,l.next),Ma(a,e,n,i,s,r,0),Ma(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function L1(t,e,n,i){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=xm(t,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(B1(c))}s.sort(D1);for(let r=0;r<s.length;r++)n=I1(s[r],n);return n}function D1(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function I1(t,e){const n=U1(t,e);if(!n)return e;const i=ym(n,t);return Is(i,i.next),Is(n,n.next)}function U1(t,e){let n=e;const i=t.x,s=t.y;let r=-1/0,a;if(xr(t,n))return n;do{if(xr(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const u=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(u<=i&&u>r&&(r=u,a=n.x<n.next.x?n:n.next,u===i))return a}n=n.next}while(n!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Mm(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){const u=Math.abs(s-n.y)/(i-n.x);Sa(n,t)&&(u<h||u===h&&(n.x>a.x||n.x===a.x&&N1(a,n)))&&(a=n,h=u)}n=n.next}while(n!==o);return a}function N1(t,e){return Rt(t.prev,t,e.prev)<0&&Rt(e.next,t,t.next)<0}function F1(t,e,n,i){let s=t;do s.z===0&&(s.z=uh(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,O1(s)}function O1(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<n&&(o++,a=a.nextZ,!!a);c++);let l=n;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=a}r.nextZ=null,n*=2}while(e>1);return t}function uh(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function B1(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Mm(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function na(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&Mm(t,e,n,i,s,r,a,o)}function k1(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!z1(t,e)&&(Sa(t,e)&&Sa(e,t)&&V1(t,e)&&(Rt(t.prev,t,e.prev)||Rt(t,e.prev,e))||xr(t,e)&&Rt(t.prev,t,t.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function xr(t,e){return t.x===e.x&&t.y===e.y}function Sm(t,e,n,i){const s=ro(Rt(t,e,n)),r=ro(Rt(t,e,i)),a=ro(Rt(n,i,t)),o=ro(Rt(n,i,e));return!!(s!==r&&a!==o||s===0&&so(t,n,e)||r===0&&so(t,i,e)||a===0&&so(n,t,i)||o===0&&so(n,e,i))}function so(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ro(t){return t>0?1:t<0?-1:0}function z1(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Sm(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Sa(t,e){return Rt(t.prev,t,t.next)<0?Rt(t,e,t.next)>=0&&Rt(t,t.prev,e)>=0:Rt(t,e,t.prev)<0||Rt(t,t.next,e)<0}function V1(t,e){let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function ym(t,e){const n=fh(t.i,t.x,t.y),i=fh(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Qf(t,e,n,i){const s=fh(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ya(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function fh(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G1(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class H1{static triangulate(e,n,i=2){return A1(e,n,i)}}class Di{static area(e){const n=e.length;let i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Di.area(e)<0}static triangulateShape(e,n){const i=[],s=[],r=[];ed(e),td(i,e);let a=e.length;n.forEach(ed);for(let l=0;l<n.length;l++)s.push(a),a+=n[l].length,td(i,n[l]);const o=H1.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ed(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function td(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class ru extends rn{constructor(e=new Vo([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,u=n.depth!==void 0?n.depth:1;let f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,M=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,b=n.UVGenerator!==void 0?n.UVGenerator:W1;let x,S=!1,w,C,R,D;if(d){x=d.getSpacedPoints(h),S=!0,f=!1;const J=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(h,J),C=new P,R=new P,D=new P}f||(m=0,p=0,g=0,M=0);const v=o.extractPoints(c);let E=v.shape;const L=v.holes;if(!Di.isClockWise(E)){E=E.reverse();for(let J=0,ne=L.length;J<ne;J++){const $=L[J];Di.isClockWise($)&&(L[J]=$.reverse())}}function B(J){const $=10000000000000001e-36;let me=J[0];for(let A=1;A<=J.length;A++){const Ne=A%J.length,ve=J[Ne],ke=ve.x-me.x,re=ve.y-me.y,T=ke*ke+re*re,_=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(me.x),Math.abs(me.y)),U=$*_*_;if(T<=U){J.splice(Ne,1),A--;continue}me=ve}}B(E),L.forEach(B);const H=L.length,q=E;for(let J=0;J<H;J++){const ne=L[J];E=E.concat(ne)}function z(J,ne,$){return ne||nt("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(ne,$)}const G=E.length;function Z(J,ne,$){let me,A,Ne;const ve=J.x-ne.x,ke=J.y-ne.y,re=$.x-J.x,T=$.y-J.y,_=ve*ve+ke*ke,U=ve*T-ke*re;if(Math.abs(U)>Number.EPSILON){const W=Math.sqrt(_),j=Math.sqrt(re*re+T*T),X=ne.x-ke/W,we=ne.y+ve/W,ae=$.x-T/j,Te=$.y+re/j,ze=((ae-X)*T-(Te-we)*re)/(ve*T-ke*re);me=X+ve*ze-J.x,A=we+ke*ze-J.y;const ee=me*me+A*A;if(ee<=2)return new te(me,A);Ne=Math.sqrt(ee/2)}else{let W=!1;ve>Number.EPSILON?re>Number.EPSILON&&(W=!0):ve<-Number.EPSILON?re<-Number.EPSILON&&(W=!0):Math.sign(ke)===Math.sign(T)&&(W=!0),W?(me=-ke,A=ve,Ne=Math.sqrt(_)):(me=ve,A=ke,Ne=Math.sqrt(_/2))}return new te(me/Ne,A/Ne)}const de=[];for(let J=0,ne=q.length,$=ne-1,me=J+1;J<ne;J++,$++,me++)$===ne&&($=0),me===ne&&(me=0),de[J]=Z(q[J],q[$],q[me]);const oe=[];let he,Xe=de.concat();for(let J=0,ne=H;J<ne;J++){const $=L[J];he=[];for(let me=0,A=$.length,Ne=A-1,ve=me+1;me<A;me++,Ne++,ve++)Ne===A&&(Ne=0),ve===A&&(ve=0),he[me]=Z($[me],$[Ne],$[ve]);oe.push(he),Xe=Xe.concat(he)}let Ge;if(m===0)Ge=Di.triangulateShape(q,L);else{const J=[],ne=[];for(let $=0;$<m;$++){const me=$/m,A=p*Math.cos(me*Math.PI/2),Ne=g*Math.sin(me*Math.PI/2)+M;for(let ve=0,ke=q.length;ve<ke;ve++){const re=z(q[ve],de[ve],Ne);Be(re.x,re.y,-A),me===0&&J.push(re)}for(let ve=0,ke=H;ve<ke;ve++){const re=L[ve];he=oe[ve];const T=[];for(let _=0,U=re.length;_<U;_++){const W=z(re[_],he[_],Ne);Be(W.x,W.y,-A),me===0&&T.push(W)}me===0&&ne.push(T)}}Ge=Di.triangulateShape(J,ne)}const dt=Ge.length,pt=g+M;for(let J=0;J<G;J++){const ne=f?z(E[J],Xe[J],pt):E[J];S?(R.copy(w.normals[0]).multiplyScalar(ne.x),C.copy(w.binormals[0]).multiplyScalar(ne.y),D.copy(x[0]).add(R).add(C),Be(D.x,D.y,D.z)):Be(ne.x,ne.y,0)}for(let J=1;J<=h;J++)for(let ne=0;ne<G;ne++){const $=f?z(E[ne],Xe[ne],pt):E[ne];S?(R.copy(w.normals[J]).multiplyScalar($.x),C.copy(w.binormals[J]).multiplyScalar($.y),D.copy(x[J]).add(R).add(C),Be(D.x,D.y,D.z)):Be($.x,$.y,u/h*J)}for(let J=m-1;J>=0;J--){const ne=J/m,$=p*Math.cos(ne*Math.PI/2),me=g*Math.sin(ne*Math.PI/2)+M;for(let A=0,Ne=q.length;A<Ne;A++){const ve=z(q[A],de[A],me);Be(ve.x,ve.y,u+$)}for(let A=0,Ne=L.length;A<Ne;A++){const ve=L[A];he=oe[A];for(let ke=0,re=ve.length;ke<re;ke++){const T=z(ve[ke],he[ke],me);S?Be(T.x,T.y+x[h-1].y,x[h-1].x+$):Be(T.x,T.y,u+$)}}}Y(),Q();function Y(){const J=s.length/3;if(f){let ne=0,$=G*ne;for(let me=0;me<dt;me++){const A=Ge[me];Ee(A[2]+$,A[1]+$,A[0]+$)}ne=h+m*2,$=G*ne;for(let me=0;me<dt;me++){const A=Ge[me];Ee(A[0]+$,A[1]+$,A[2]+$)}}else{for(let ne=0;ne<dt;ne++){const $=Ge[ne];Ee($[2],$[1],$[0])}for(let ne=0;ne<dt;ne++){const $=Ge[ne];Ee($[0]+G*h,$[1]+G*h,$[2]+G*h)}}i.addGroup(J,s.length/3-J,0)}function Q(){const J=s.length/3;let ne=0;Me(q,ne),ne+=q.length;for(let $=0,me=L.length;$<me;$++){const A=L[$];Me(A,ne),ne+=A.length}i.addGroup(J,s.length/3-J,1)}function Me(J,ne){let $=J.length;for(;--$>=0;){const me=$;let A=$-1;A<0&&(A=J.length-1);for(let Ne=0,ve=h+m*2;Ne<ve;Ne++){const ke=G*Ne,re=G*(Ne+1),T=ne+me+ke,_=ne+A+ke,U=ne+A+re,W=ne+me+re;tt(T,_,U,W)}}}function Be(J,ne,$){l.push(J),l.push(ne),l.push($)}function Ee(J,ne,$){mt(J),mt(ne),mt($);const me=s.length/3,A=b.generateTopUV(i,s,me-3,me-2,me-1);qe(A[0]),qe(A[1]),qe(A[2])}function tt(J,ne,$,me){mt(J),mt(ne),mt(me),mt(ne),mt($),mt(me);const A=s.length/3,Ne=b.generateSideWallUV(i,s,A-6,A-3,A-2,A-1);qe(Ne[0]),qe(Ne[1]),qe(Ne[3]),qe(Ne[1]),qe(Ne[2]),qe(Ne[3])}function mt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function qe(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return X1(n,i,e)}static fromJSON(e,n){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=n[e.shapes[r]];i.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Po[s.type]().fromJSON(s)),new ru(i,e.options)}}const W1={generateTopUV:function(t,e,n,i,s){const r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new te(r,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){const a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[s*3],p=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-u),new te(f,1-g),new te(M,1-d)]:[new te(o,1-l),new te(h,1-u),new te(p,1-g),new te(m,1-d)]}};function X1(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){const r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class La extends rn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=n/l,p=[],g=[],M=[],m=[];for(let d=0;d<h;d++){const b=d*f-a;for(let x=0;x<c;x++){const S=x*u-r;g.push(S,-b,0),M.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const x=b+c*d,S=b+c*(d+1),w=b+1+c*(d+1),C=b+1+c*d;p.push(x,S,C),p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}class au extends rn{constructor(e=new Vo([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(a,2));function c(h){const u=s.length/3,f=h.extractPoints(n);let p=f.shape;const g=f.holes;Di.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const b=g[m];Di.isClockWise(b)===!0&&(g[m]=b.reverse())}const M=Di.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const b=g[m];p=p.concat(b)}for(let m=0,d=p.length;m<d;m++){const b=p[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,d=M.length;m<d;m++){const b=M[m],x=b[0]+u,S=b[1]+u,w=b[2]+u;i.push(x,S,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return q1(n,e)}static fromJSON(e,n){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=n[e.shapes[s]];i.push(a)}return new au(i,e.curveSegments)}}function q1(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class Lo extends rn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,f=new P,p=[],g=[],M=[],m=[];for(let d=0;d<=i;d++){const b=[],x=d/i;let S=0;d===0&&a===0?S=.5/n:d===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const C=w/n;u.x=-e*Math.cos(s+C*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(C+S,1-x),b.push(c++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<n;b++){const x=h[d][b+1],S=h[d][b],w=h[d+1][b],C=h[d+1][b+1];(d!==0||a>0)&&p.push(x,S,C),(d!==i-1||l<Math.PI)&&p.push(S,w,C)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ou extends nu{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ou(e.radius,e.detail)}}class lu extends rn{constructor(e=new _m(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};const a=e.computeFrenetFrames(n,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new te;let h=new P;const u=[],f=[],p=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(p,2));function M(){for(let x=0;x<n;x++)m(x);m(r===!1?n:0),b(),d()}function m(x){h=e.getPointAt(x/n,h);const S=a.normals[x],w=a.binormals[x];for(let C=0;C<=s;C++){const R=C/s*Math.PI*2,D=Math.sin(R),v=-Math.cos(R);l.x=v*S.x+D*w.x,l.y=v*S.y+D*w.y,l.z=v*S.z+D*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function d(){for(let x=1;x<=n;x++)for(let S=1;S<=s;S++){const w=(s+1)*(x-1)+(S-1),C=(s+1)*x+(S-1),R=(s+1)*x+S,D=(s+1)*(x-1)+S;g.push(w,C,D),g.push(C,R,D)}}function b(){for(let x=0;x<=n;x++)for(let S=0;S<=s;S++)c.x=x/n,c.y=S/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new lu(new Po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Y1 extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zn extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j1 extends Zn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class K1 extends Ir{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J1 extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $1 extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $l={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Z1{constructor(e,n,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Q1=new Z1;class cu{constructor(e){this.manager=e!==void 0?e:Q1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cu.DEFAULT_MATERIAL_NAME="__DEFAULT";const tr=new WeakMap;class ev extends cu{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$l.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);else{let u=tr.get(a);u===void 0&&(u=[],tr.set(a,u)),u.push({onLoad:n,onError:s})}return a}const o=ga("img");function l(){h(),n&&n(this);const u=tr.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}tr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),$l.remove(`image:${e}`);const f=tr.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(u)}tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$l.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class tv extends cu{constructor(e){super(e)}load(e,n,i,s){const r=new Zt,a=new ev(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Go extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Zl=new Et,nd=new P,id=new P;class hu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eu,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;nd.setFromMatrixPosition(e.matrixWorld),n.position.copy(nd),id.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(id),n.updateMatrixWorld(),Zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nv extends hu{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sd extends Go{constructor(e,n,i=0,s=Math.PI/3,r=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class iv extends hu{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Em extends Go{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new iv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ho extends am{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sv extends hu{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rv extends Go{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new sv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class av extends Go{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class ov extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function rd(t,e,n,i){const s=lv(i);switch(n){case $p:return t*e;case Wh:return t*e/s.components*s.byteLength;case Xh:return t*e/s.components*s.byteLength;case mr:return t*e*2/s.components*s.byteLength;case qh:return t*e*2/s.components*s.byteLength;case Zp:return t*e*3/s.components*s.byteLength;case ei:return t*e*4/s.components*s.byteLength;case Yh:return t*e*4/s.components*s.byteLength;case mo:case go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(t,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(t,8)*Math.max(e,8)/2;case Oc:case Bc:case zc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kc:case Gc:case Hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case sh:case rh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case oh:case lh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ch:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lv(t){switch(t){case Pn:case Yp:return{byteLength:1,components:1};case pa:case jp:case Ln:return{byteLength:2,components:1};case Gh:case Hh:return{byteLength:2,components:4};case vi:case Vh:case Qn:return{byteLength:4,components:1};case Kp:case Jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function Tm(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function cv(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(t.bindBuffer(c,o),u.length===0)t.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],M=u[p];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++f,u[f]=M)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const M=u[p];t.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
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
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
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
#endif`,xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ev=`#ifdef USE_IRIDESCENCE
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
#endif`,bv=`#ifdef USE_BUMPMAP
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iv=`#define PI 3.141592653589793
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
} // validated`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nv=`vec3 transformedNormal = objectNormal;
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
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$v=`#ifdef USE_GRADIENTMAP
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
}`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,lx=`uniform sampler2D dfgLUT;
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
}`,cx=`
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
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
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i2=`#ifdef USE_TRANSMISSION
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
#endif`,s2=`#ifdef USE_TRANSMISSION
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
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h2=`uniform sampler2D t2D;
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
}`,u2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`#include <common>
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
}`,g2=`#if DEPTH_PACKING == 3200
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
}`,_2=`#define DISTANCE
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
}`,v2=`#define DISTANCE
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`uniform float scale;
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
}`,y2=`uniform vec3 diffuse;
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
}`,E2=`#include <common>
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
}`,b2=`uniform vec3 diffuse;
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
}`,T2=`#define LAMBERT
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
}`,A2=`#define LAMBERT
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
}`,w2=`#define MATCAP
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
}`,C2=`#define MATCAP
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
}`,R2=`#define NORMAL
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
}`,P2=`#define NORMAL
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
}`,L2=`#define PHONG
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
}`,D2=`#define PHONG
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
}`,I2=`#define STANDARD
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
}`,U2=`#define STANDARD
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
}`,N2=`#define TOON
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
}`,F2=`#define TOON
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
}`,O2=`uniform float size;
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
}`,B2=`uniform vec3 diffuse;
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
}`,k2=`#include <common>
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
}`,z2=`uniform vec3 color;
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
}`,V2=`uniform float rotation;
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
}`,G2=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:hv,alphahash_pars_fragment:uv,alphamap_fragment:fv,alphamap_pars_fragment:dv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:gv,aomap_pars_fragment:_v,batching_pars_vertex:vv,batching_vertex:xv,begin_vertex:Mv,beginnormal_vertex:Sv,bsdfs:yv,iridescence_fragment:Ev,bumpmap_pars_fragment:bv,clipping_planes_fragment:Tv,clipping_planes_pars_fragment:Av,clipping_planes_pars_vertex:wv,clipping_planes_vertex:Cv,color_fragment:Rv,color_pars_fragment:Pv,color_pars_vertex:Lv,color_vertex:Dv,common:Iv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Fv,displacementmap_vertex:Ov,emissivemap_fragment:Bv,emissivemap_pars_fragment:kv,colorspace_fragment:zv,colorspace_pars_fragment:Vv,envmap_fragment:Gv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Wv,envmap_pars_vertex:Xv,envmap_physical_pars_fragment:nx,envmap_vertex:qv,fog_vertex:Yv,fog_pars_vertex:jv,fog_fragment:Kv,fog_pars_fragment:Jv,gradientmap_pars_fragment:$v,lightmap_pars_fragment:Zv,lights_lambert_fragment:Qv,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ax,lights_physical_fragment:ox,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:hx,lights_fragment_end:ux,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:_x,map_particle_fragment:vx,map_particle_pars_fragment:xx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:yx,morphcolor_vertex:Ex,morphnormal_vertex:bx,morphtarget_pars_vertex:Tx,morphtarget_vertex:Ax,normal_fragment_begin:wx,normal_fragment_maps:Cx,normal_pars_fragment:Rx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:Bx,premultiplied_alpha_fragment:kx,project_vertex:zx,dithering_fragment:Vx,dithering_pars_fragment:Gx,roughnessmap_fragment:Hx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:jx,skinbase_vertex:Kx,skinning_pars_vertex:Jx,skinning_vertex:$x,skinnormal_vertex:Zx,specularmap_fragment:Qx,specularmap_pars_fragment:e2,tonemapping_fragment:t2,tonemapping_pars_fragment:n2,transmission_fragment:i2,transmission_pars_fragment:s2,uv_pars_fragment:r2,uv_pars_vertex:a2,uv_vertex:o2,worldpos_vertex:l2,background_vert:c2,background_frag:h2,backgroundCube_vert:u2,backgroundCube_frag:f2,cube_vert:d2,cube_frag:p2,depth_vert:m2,depth_frag:g2,distance_vert:_2,distance_frag:v2,equirect_vert:x2,equirect_frag:M2,linedashed_vert:S2,linedashed_frag:y2,meshbasic_vert:E2,meshbasic_frag:b2,meshlambert_vert:T2,meshlambert_frag:A2,meshmatcap_vert:w2,meshmatcap_frag:C2,meshnormal_vert:R2,meshnormal_frag:P2,meshphong_vert:L2,meshphong_frag:D2,meshphysical_vert:I2,meshphysical_frag:U2,meshtoon_vert:N2,meshtoon_frag:F2,points_vert:O2,points_frag:B2,shadow_vert:k2,shadow_frag:z2,sprite_vert:V2,sprite_frag:G2},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},di={basic:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};di.physical={uniforms:ln([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ao={r:0,b:0,g:0},vs=new ni,H2=new Et;function W2(t,e,n,i,s,r,a){const o=new Ye(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function M(x){let S=!1;const w=g(x);w===null?d(o,l):w&&w.isColor&&(d(w,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===ko)?(h===void 0&&(h=new ot(new ls(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:vr(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(S.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H2.makeRotationFromEuler(vs)),h.material.toneMapped=it.getTransfer(w.colorSpace)!==ft,(u!==w||f!==w.version||p!==t.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,p=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ot(new La(2,2),new sn({name:"BackgroundMaterial",uniforms:vr(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function d(x,S){x.getRGB(ao,rm(t)),i.buffers.color.setClear(ao.r,ao.g,ao.b,S,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:M,addToRenderList:m,dispose:b}}function X2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(E,L,O,B,H){let q=!1;const z=u(B,O,L);r!==z&&(r=z,c(r.object)),q=p(E,B,O,H),q&&g(E,B,O,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(E,L,O,B),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function h(E){return t.deleteVertexArray(E)}function u(E,L,O){const B=O.wireframe===!0;let H=i[E.id];H===void 0&&(H={},i[E.id]=H);let q=H[L.id];q===void 0&&(q={},H[L.id]=q);let z=q[B];return z===void 0&&(z=f(l()),q[B]=z),z}function f(E){const L=[],O=[],B=[];for(let H=0;H<n;H++)L[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,L,O,B){const H=r.attributes,q=L.attributes;let z=0;const G=O.getAttributes();for(const Z in G)if(G[Z].location>=0){const oe=H[Z];let he=q[Z];if(he===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),oe===void 0||oe.attribute!==he||he&&oe.data!==he.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function g(E,L,O,B){const H={},q=L.attributes;let z=0;const G=O.getAttributes();for(const Z in G)if(G[Z].location>=0){let oe=q[Z];oe===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor));const he={};he.attribute=oe,oe&&oe.data&&(he.data=oe.data),H[Z]=he,z++}r.attributes=H,r.attributesNum=z,r.index=B}function M(){const E=r.newAttributes;for(let L=0,O=E.length;L<O;L++)E[L]=0}function m(E){d(E,0)}function d(E,L){const O=r.newAttributes,B=r.enabledAttributes,H=r.attributeDivisors;O[E]=1,B[E]===0&&(t.enableVertexAttribArray(E),B[E]=1),H[E]!==L&&(t.vertexAttribDivisor(E,L),H[E]=L)}function b(){const E=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==E[O]&&(t.disableVertexAttribArray(O),L[O]=0)}function x(E,L,O,B,H,q,z){z===!0?t.vertexAttribIPointer(E,L,O,H,q):t.vertexAttribPointer(E,L,O,B,H,q)}function S(E,L,O,B){M();const H=B.attributes,q=O.getAttributes(),z=L.defaultAttributeValues;for(const G in q){const Z=q[G];if(Z.location>=0){let de=H[G];if(de===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const oe=de.normalized,he=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const Ge=Xe.buffer,dt=Xe.type,pt=Xe.bytesPerElement,Y=dt===t.INT||dt===t.UNSIGNED_INT||de.gpuType===Vh;if(de.isInterleavedBufferAttribute){const Q=de.data,Me=Q.stride,Be=de.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Z.locationSize;Ee++)d(Z.location+Ee,Q.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)m(Z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ee=0;Ee<Z.locationSize;Ee++)x(Z.location+Ee,he/Z.locationSize,dt,oe,Me*pt,(Be+he/Z.locationSize*Ee)*pt,Y)}else{if(de.isInstancedBufferAttribute){for(let Q=0;Q<Z.locationSize;Q++)d(Z.location+Q,de.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Q=0;Q<Z.locationSize;Q++)m(Z.location+Q);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Q=0;Q<Z.locationSize;Q++)x(Z.location+Q,he/Z.locationSize,dt,oe,he*pt,he/Z.locationSize*Q*pt,Y)}}else if(z!==void 0){const oe=z[G];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(Z.location,oe);break;case 3:t.vertexAttrib3fv(Z.location,oe);break;case 4:t.vertexAttrib4fv(Z.location,oe);break;default:t.vertexAttrib1fv(Z.location,oe)}}}}b()}function w(){D();for(const E in i){const L=i[E];for(const O in L){const B=L[O];for(const H in B)h(B[H].object),delete B[H];delete L[O]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const O in L){const B=L[O];for(const H in B)h(B[H].object),delete B[H];delete L[O]}delete i[E.id]}function R(E){for(const L in i){const O=i[L];if(O[E.id]===void 0)continue;const B=O[E.id];for(const H in B)h(B[H].object),delete B[H];delete O[E.id]}}function D(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function q2(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,u){u!==0&&(t.drawArraysInstanced(i,c,h,u),n.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];n.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*f[M];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Y2(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ei&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Pn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Qn&&!D)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:S,maxSamples:w,samples:C}}function j2(t){const e=this;let n=null,i=0,s=!1,r=!1;const a=new Ss,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:i,x=b*4;let S=d.clippingState||null;l.value=S,S=h(g,f,x,p);for(let w=0;w!==x;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const d=p+M*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==M;++x,S+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function K2(t){let e=new WeakMap;function n(a,o){return o===Pc?a.mapping=Ls:o===Lc&&(a.mapping=pr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pc||o===Lc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new lm(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Qi=4,ad=[.125,.215,.35,.446,.526,.582],bs=20,J2=256,$r=new Ho,od=new Ye;let Ql=null,ec=0,tc=0,nc=!1;const $2=new P;class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=$2}=r;Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ln,format:ei,colorSpace:gr,depthBuffer:!1},s=ld(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z2(r)),this._blurMaterial=e3(r,e,n),this._ggxMaterial=Q2(r,e,n)}return s}_compileMaterial(e){const n=new ot(new rn,e);this._renderer.compile(n,$r)}_sceneToCubeUV(e,n,i,s,r){const l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(od),u.toneMapping=_i,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new ls,new va({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let d=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,d=!0):(m.color.copy(od),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):S===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const w=this._cubeSize;nr(s,S*w,x>2?w:0,w,w),u.setRenderTarget(s),d&&u.render(M,l),u.render(e,l)}u.toneMapping=p,u.autoClear=f,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===Ls||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;nr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,$r)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,p=u*f,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-Qi?i-g+Qi:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,nr(r,m,d,3*M,2*M),s.setRenderTarget(r),s.render(o,$r),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,nr(e,m,d,3*M,2*M),s.setRenderTarget(e),s.render(o,$r)}_blur(e,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bs-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):bs;m>bs&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bs}`);const d=[];let b=0;for(let R=0;R<bs;++R){const D=R/M,v=Math.exp(-D*D/2);d.push(v),R===0?b+=v:R<m&&(b+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[s],w=3*S*(s>x-Qi?s-x+Qi:0),C=4*(this._cubeSize-S);nr(n,w,C,3*S,2*S),l.setRenderTarget(n),l.render(u,$r)}}function Z2(t){const e=[],n=[],i=[];let s=t;const r=t-Qi+1+ad.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>t-Qi?l=ad[a-t+Qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,M=3,m=2,d=1,b=new Float32Array(M*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,D=C>2?0:-1,v=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(v,M*g*C),x.set(f,m*g*C);const E=[C,C,C,C,C,C];S.set(E,d*g*C)}const w=new rn;w.setAttribute("position",new ti(b,M)),w.setAttribute("uv",new ti(x,m)),w.setAttribute("faceIndex",new ti(S,d)),i.push(new ot(w,null)),s>Qi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ld(t,e,n){const i=new xn(t,e,n);return i.texture.mapping=ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nr(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Q2(t,e,n){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function e3(t,e,n){const i=new Float32Array(bs),s=new P(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function cd(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function hd(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function t3(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pc||l===Lc,h=l===Ls||l===pr;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new dh(t)),u=c?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new dh(t)),u=c?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function n3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&_a("WebGLRenderer: "+i+" extension not supported."),s}}}function i3(t,e,n,i){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let M=0;if(p!==null){const b=p.array;M=p.version;for(let x=0,S=b.length;x<S;x+=3){const w=b[x+0],C=b[x+1],R=b[x+2];f.push(w,C,C,R,R,w)}}else if(g!==void 0){const b=g.array;M=g.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const w=x+0,C=x+1,R=x+2;f.push(w,C,C,R,R,w)}}else return;const m=new(Qp(f)?sm:im)(f,1);m.version=M;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function s3(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,r,f*a),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,r,f*a,g),n.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function u(f,p,g,M){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],M[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,M,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*M[b];n.update(d,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:nt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function a3(t,e,n){const i=new WeakMap,s=new Nt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let v=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",v)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),M===!0&&(x=3);let S=o.attributes.position.count*x,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*w*4*u),R=new em(C,S,w,u);R.type=Qn,R.needsUpdate=!0;const D=x*4;for(let E=0;E<u;E++){const L=m[E],O=d[E],B=b[E],H=S*w*4*E;for(let q=0;q<L.count;q++){const z=q*D;p===!0&&(s.fromBufferAttribute(L,q),C[H+z+0]=s.x,C[H+z+1]=s.y,C[H+z+2]=s.z,C[H+z+3]=0),g===!0&&(s.fromBufferAttribute(O,q),C[H+z+4]=s.x,C[H+z+5]=s.y,C[H+z+6]=s.z,C[H+z+7]=0),M===!0&&(s.fromBufferAttribute(B,q),C[H+z+8]=s.x,C[H+z+9]=s.y,C[H+z+10]=s.z,C[H+z+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new te(S,w)},i.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function o3(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}const l3={[zp]:"LINEAR_TONE_MAPPING",[zh]:"REINHARD_TONE_MAPPING",[Vp]:"CINEON_TONE_MAPPING",[Gp]:"ACES_FILMIC_TONE_MAPPING",[Wp]:"AGX_TONE_MAPPING",[Xp]:"NEUTRAL_TONE_MAPPING",[Hp]:"CUSTOM_TONE_MAPPING"};function c3(t,e,n,i,s){const r=new xn(e,n,{type:t,depthBuffer:i,stencilBuffer:s}),a=new xn(e,n,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),o=new rn;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));const l=new Y1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ot(o,l),h=new Ho(-1,1,1,-1,0,1);let u=null,f=null,p=!1,g,M=null,m=[],d=!1;this.setSize=function(b,x){r.setSize(b,x),a.setSize(b,x);for(let S=0;S<m.length;S++){const w=m[S];w.setSize&&w.setSize(b,x)}},this.setEffects=function(b){m=b,d=m.length>0&&m[0].isRenderPass===!0;const x=r.width,S=r.height;for(let w=0;w<m.length;w++){const C=m[w];C.setSize&&C.setSize(x,S)}},this.begin=function(b,x){if(p||b.toneMapping===_i&&m.length===0)return!1;if(M=x,x!==null){const S=x.width,w=x.height;(r.width!==S||r.height!==w)&&this.setSize(S,w)}return d===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=_i,!0},this.hasRenderPass=function(){return d},this.end=function(b,x){b.toneMapping=g,p=!0;let S=r,w=a;for(let C=0;C<m.length;C++){const R=m[C];if(R.enabled!==!1&&(R.render(b,w,S,x),R.needsSwap!==!1)){const D=S;S=w,w=D}}if(u!==b.outputColorSpace||f!==b.toneMapping){u=b.outputColorSpace,f=b.toneMapping,l.defines={},it.getTransfer(u)===ft&&(l.defines.SRGB_TRANSFER="");const C=l3[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(M),b.render(c,h),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Am=new Zt,ph=new xa(1,1),wm=new em,Cm=new X_,Rm=new om,ud=[],fd=[],dd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Ur(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xo(t,e){let n=fd[e];n===void 0&&(n=new Int32Array(e),fd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function h3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function f3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function d3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function p3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;md.set(i),t.uniformMatrix2fv(this.addr,!1,md),Yt(n,i)}}function m3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;pd.set(i),t.uniformMatrix3fv(this.addr,!1,pd),Yt(n,i)}}function g3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(qt(n,i))return;dd.set(i),t.uniformMatrix4fv(this.addr,!1,dd),Yt(n,i)}}function _3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function v3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function S3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function y3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function E3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function b3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function T3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(ph.compareFunction=n.isReversedDepthBuffer()?Jh:Kh,r=ph):r=Am,n.setTexture2D(e||r,s)}function A3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Cm,s)}function w3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Rm,s)}function C3(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||wm,s)}function R3(t){switch(t){case 5126:return h3;case 35664:return u3;case 35665:return f3;case 35666:return d3;case 35674:return p3;case 35675:return m3;case 35676:return g3;case 5124:case 35670:return _3;case 35667:case 35671:return v3;case 35668:case 35672:return x3;case 35669:case 35673:return M3;case 5125:return S3;case 36294:return y3;case 36295:return E3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return T3;case 35679:case 36299:case 36307:return A3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return C3}}function P3(t,e){t.uniform1fv(this.addr,e)}function L3(t,e){const n=Ur(e,this.size,2);t.uniform2fv(this.addr,n)}function D3(t,e){const n=Ur(e,this.size,3);t.uniform3fv(this.addr,n)}function I3(t,e){const n=Ur(e,this.size,4);t.uniform4fv(this.addr,n)}function U3(t,e){const n=Ur(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function N3(t,e){const n=Ur(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function F3(t,e){const n=Ur(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function O3(t,e){t.uniform1iv(this.addr,e)}function B3(t,e){t.uniform2iv(this.addr,e)}function k3(t,e){t.uniform3iv(this.addr,e)}function z3(t,e){t.uniform4iv(this.addr,e)}function V3(t,e){t.uniform1uiv(this.addr,e)}function G3(t,e){t.uniform2uiv(this.addr,e)}function H3(t,e){t.uniform3uiv(this.addr,e)}function W3(t,e){t.uniform4uiv(this.addr,e)}function X3(t,e,n){const i=this.cache,s=e.length,r=Xo(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=ph:a=Am;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function q3(t,e,n){const i=this.cache,s=e.length,r=Xo(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Cm,r[a])}function Y3(t,e,n){const i=this.cache,s=e.length,r=Xo(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Rm,r[a])}function j3(t,e,n){const i=this.cache,s=e.length,r=Xo(n,s);qt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||wm,r[a])}function K3(t){switch(t){case 5126:return P3;case 35664:return L3;case 35665:return D3;case 35666:return I3;case 35674:return U3;case 35675:return N3;case 35676:return F3;case 5124:case 35670:return O3;case 35667:case 35671:return B3;case 35668:case 35672:return k3;case 35669:case 35673:return z3;case 5125:return V3;case 36294:return G3;case 36295:return H3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return Y3;case 36289:case 36303:case 36311:case 36292:return j3}}class J3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=R3(n.type)}}class $3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=K3(n.type)}}class Z3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,n[o.id],i)}}}const ic=/(\w+)(\])?(\[|\.)?/g;function gd(t,e){t.seq.push(e),t.map[e.id]=e}function Q3(t,e,n){const i=t.name,s=i.length;for(ic.lastIndex=0;;){const r=ic.exec(i),a=ic.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gd(n,c===void 0?new J3(o,t,e):new $3(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new Z3(o),gd(n,u)),n=u}}}class xo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Q3(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in n&&i.push(a)}return i}}function _d(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eM=37297;let tM=0;function nM(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const vd=new je;function iM(t){it._getMatrix(vd,it.workingColorSpace,t);const e=`mat3( ${vd.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Ao:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+nM(t.getShaderSource(e),o)}else return r}function sM(t,e){const n=iM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const rM={[zp]:"Linear",[zh]:"Reinhard",[Vp]:"Cineon",[Gp]:"ACESFilmic",[Wp]:"AgX",[Xp]:"Neutral",[Hp]:"Custom"};function aM(t,e){const n=rM[e];return n===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oo=new P;function oM(){it.getLuminanceCoefficients(oo);const t=oo.x.toFixed(4),e=oo.y.toFixed(4),n=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function cM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),a=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ia(t){return t!==""}function Md(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(t){return t.replace(uM,dM)}const fM=new Map;function dM(t,e){let n=Ke[e];if(n===void 0){const i=fM.get(e);if(i!==void 0)n=Ke[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mh(n)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(t){return t.replace(pM,mM)}function mM(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ed(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const gM={[po]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function _M(t){return gM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vM={[Ls]:"ENVMAP_TYPE_CUBE",[pr]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE_UV"};function xM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":vM[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const MM={[pr]:"ENVMAP_MODE_REFRACTION"};function SM(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yM={[kh]:"ENVMAP_BLENDING_MULTIPLY",[h_]:"ENVMAP_BLENDING_MIX",[u_]:"ENVMAP_BLENDING_ADD"};function EM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":yM[t.combine]||"ENVMAP_BLENDING_NONE"}function bM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function TM(t,e,n,i){const s=t.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=_M(n),c=xM(n),h=SM(n),u=EM(n),f=bM(n),p=lM(n),g=cM(r),M=s.createProgram();let m,d,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[Ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[Ed(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?Ke.tonemapping_pars_fragment:"",n.toneMapping!==_i?aM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,sM("linearToOutputTexel",n.outputColorSpace),oM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),a=mh(a),a=Md(a,n),a=Sd(a,n),o=mh(o),o=Md(o,n),o=Sd(o,n),a=yd(a),o=yd(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=b+m+a,S=b+d+o,w=_d(s,s.VERTEX_SHADER,x),C=_d(s,s.FRAGMENT_SHADER,S);s.attachShader(M,w),s.attachShader(M,C),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(L){if(t.debug.checkShaderErrors){const O=s.getProgramInfoLog(M)||"",B=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(C)||"",q=O.trim(),z=B.trim(),G=H.trim();let Z=!0,de=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,M,w,C);else{const oe=xd(s,w,"vertex"),he=xd(s,C,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+oe+`
`+he)}else q!==""?He("WebGLProgram: Program Info Log:",q):(z===""||G==="")&&(de=!1);de&&(L.diagnostics={runnable:Z,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(w),s.deleteShader(C),D=new xo(s,M),v=hM(s,M)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(M,eM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=C,this}let AM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new CM(e),n.set(e,i)),i}}class CM{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}}function RM(t,e,n,i,s,r,a){const o=new tm,l=new wM,c=new Set,h=[],u=new Map,f=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,L,O,B){const H=O.fog,q=B.geometry,z=v.isMeshStandardMaterial?O.environment:null,G=(v.isMeshStandardMaterial?n:e).get(v.envMap||z),Z=G&&G.mapping===ko?G.image.height:null,de=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=oe!==void 0?oe.length:0;let Xe=0;q.morphAttributes.position!==void 0&&(Xe=1),q.morphAttributes.normal!==void 0&&(Xe=2),q.morphAttributes.color!==void 0&&(Xe=3);let Ge,dt,pt,Y;if(de){const ht=di[de];Ge=ht.vertexShader,dt=ht.fragmentShader}else Ge=v.vertexShader,dt=v.fragmentShader,l.update(v),pt=l.getVertexShaderID(v),Y=l.getFragmentShaderID(v);const Q=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,Ee=B.isBatchedMesh===!0,tt=!!v.map,mt=!!v.matcap,qe=!!G,J=!!v.aoMap,ne=!!v.lightMap,$=!!v.bumpMap,me=!!v.normalMap,A=!!v.displacementMap,Ne=!!v.emissiveMap,ve=!!v.metalnessMap,ke=!!v.roughnessMap,re=v.anisotropy>0,T=v.clearcoat>0,_=v.dispersion>0,U=v.iridescence>0,W=v.sheen>0,j=v.transmission>0,X=re&&!!v.anisotropyMap,we=T&&!!v.clearcoatMap,ae=T&&!!v.clearcoatNormalMap,Te=T&&!!v.clearcoatRoughnessMap,ze=U&&!!v.iridescenceMap,ee=U&&!!v.iridescenceThicknessMap,ue=W&&!!v.sheenColorMap,Ae=W&&!!v.sheenRoughnessMap,Re=!!v.specularMap,ce=!!v.specularColorMap,Je=!!v.specularIntensityMap,I=j&&!!v.transmissionMap,_e=j&&!!v.thicknessMap,se=!!v.gradientMap,xe=!!v.alphaMap,ie=v.alphaTest>0,K=!!v.alphaHash,le=!!v.extensions;let We=_i;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(We=t.toneMapping);const Mt={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:Ge,fragmentShader:dt,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:gr,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:mt,envMap:qe,envMapMode:qe&&G.mapping,envMapCubeUVHeight:Z,aoMap:J,lightMap:ne,bumpMap:$,normalMap:me,displacementMap:A,emissiveMap:Ne,normalMapObjectSpace:me&&v.normalMapType===p_,normalMapTangentSpace:me&&v.normalMapType===jh,metalnessMap:ve,roughnessMap:ke,anisotropy:re,anisotropyMap:X,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:_,iridescence:U,iridescenceMap:ze,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:Re,specularColorMap:ce,specularIntensityMap:Je,transmission:j,transmissionMap:I,thicknessMap:_e,gradientMap:se,opaque:v.transparent===!1&&v.blending===lr&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:K,combine:v.combine,mapUv:tt&&M(v.map.channel),aoMapUv:J&&M(v.aoMap.channel),lightMapUv:ne&&M(v.lightMap.channel),bumpMapUv:$&&M(v.bumpMap.channel),normalMapUv:me&&M(v.normalMap.channel),displacementMapUv:A&&M(v.displacementMap.channel),emissiveMapUv:Ne&&M(v.emissiveMap.channel),metalnessMapUv:ve&&M(v.metalnessMap.channel),roughnessMapUv:ke&&M(v.roughnessMap.channel),anisotropyMapUv:X&&M(v.anisotropyMap.channel),clearcoatMapUv:we&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&M(v.sheenRoughnessMap.channel),specularMapUv:Re&&M(v.specularMap.channel),specularColorMapUv:ce&&M(v.specularColorMap.channel),specularIntensityMapUv:Je&&M(v.specularIntensityMap.channel),transmissionMapUv:I&&M(v.transmissionMap.channel),thicknessMapUv:_e&&M(v.thicknessMap.channel),alphaMapUv:xe&&M(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(me||re),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(tt||xe),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:Ne&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Jn,flipSided:v.side===cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)E.push(L),E.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(b(E,v),x(E,v),E.push(t.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function b(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){const E=g[v.type];let L;if(E){const O=di[E];L=Ro.clone(O.uniforms)}else L=v.uniforms;return L}function w(v,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new TM(t,E,v,r),h.push(L),u.set(E,L)),L}function C(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:w,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:D}}function PM(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function LM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Td(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u,f,p,g,M,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=M,d.group=m),e++,d}function o(u,f,p,g,M,m){const d=a(u,f,p,g,M,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):n.push(d)}function l(u,f,p,g,M,m){const d=a(u,f,p,g,M,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):n.unshift(d)}function c(u,f){n.length>1&&n.sort(u||LM),i.length>1&&i.sort(f||bd),s.length>1&&s.sort(f||bd)}function h(){for(let u=e,f=t.length;u<f;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function DM(){let t=new WeakMap;function e(i,s){const r=t.get(i);let a;return r===void 0?(a=new Td,t.set(i,[a])):s>=r.length?(a=new Td,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function IM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Ye};break;case"SpotLight":n={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function UM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let NM=0;function FM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OM(t){const e=new IM,n=UM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const s=new P,r=new Et,a=new Et;function o(c){let h=0,u=0,f=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let p=0,g=0,M=0,m=0,d=0,b=0,x=0,S=0,w=0,C=0,R=0;c.sort(FM);for(let v=0,E=c.length;v<E;v++){const L=c[v],O=L.color,B=L.intensity,H=L.distance;let q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===mr?q=L.shadow.map.texture:q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(L.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(L.sh.coefficients[z],B);R++}else if(L.isDirectionalLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,Z=n.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[p]=Z,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=z,p++}else if(L.isSpotLight){const z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(O).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,i.spot[M]=z;const G=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,G.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[M]=G.matrix,L.castShadow){const Z=n.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[M]=Z,i.spotShadowMap[M]=q,S++}M++}else if(L.isRectAreaLight){const z=e.get(L);z.color.copy(O).multiplyScalar(B),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=z,m++}else if(L.isPointLight){const z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){const G=L.shadow,Z=n.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=z,g++}else if(L.isHemisphereLight){const z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(B),z.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=z,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==b||D.numPointShadows!==x||D.numSpotShadows!==S||D.numSpotMaps!==w||D.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=M,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=b,D.numPointShadows=x,D.numSpotShadows=S,D.numSpotMaps=w,D.numLightProbes=R,i.version=NM++)}function l(c,h){let u=0,f=0,p=0,g=0,M=0;const m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const x=c[d];if(x.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Ad(t){const e=new OM(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function BM(t){let e=new WeakMap;function n(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ad(t),e.set(s,[o])):r>=a.length?(o=new Ad(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
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
}`,VM=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],GM=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],wd=new Et,Zr=new P,sc=new P;function HM(t,e,n){let i=new eu;const s=new te,r=new te,a=new Nt,o=new J1,l=new $1,c={},h=n.maxTextureSize,u={[rs]:cn,[cn]:rs,[Jn]:Jn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:kM,fragmentShader:zM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let d=this.type;this.render=function(C,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===Xg&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=po);const v=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),O=t.state;O.setBlending(gi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==this.type;B&&R.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(q=>q.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,q=C.length;H<q;H++){const z=C[H],G=z.shadow;if(G===void 0){He("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Z=G.getFrameExtents();if(s.multiply(Z),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,G.mapSize.y=r.y)),G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ta){if(z.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new xn(s.x,s.y,{format:mr,type:Ln,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new xa(s.x,s.y,Qn),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Bi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t}else{z.isPointLight?(G.map=new lm(s.x),G.map.depthTexture=new p1(s.x,vi)):(G.map=new xn(s.x,s.y),G.map.depthTexture=new xa(s.x,s.y,vi)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Bi;const oe=t.state.buffers.depth.getReversed();this.type===po?(G.map.depthTexture.compareFunction=oe?Jh:Kh,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=$t,G.map.depthTexture.magFilter=$t)}G.camera.updateProjectionMatrix()}const de=G.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<de;oe++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(G.map),t.clear());const he=G.getViewport(oe);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),O.viewport(a)}if(z.isPointLight){const he=G.camera,Xe=G.matrix,Ge=z.distance||he.far;Ge!==he.far&&(he.far=Ge,he.updateProjectionMatrix()),Zr.setFromMatrixPosition(z.matrixWorld),he.position.copy(Zr),sc.copy(he.position),sc.add(VM[oe]),he.up.copy(GM[oe]),he.lookAt(sc),he.updateMatrixWorld(),Xe.makeTranslation(-Zr.x,-Zr.y,-Zr.z),wd.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),G._frustum.setFromProjectionMatrix(wd,he.coordinateSystem,he.reversedDepth)}else G.updateMatrices(z);i=G.getFrustum(),S(R,D,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===ta&&b(G,D),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(v,E,L)};function b(C,R){const D=e.update(M);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new xn(s.x,s.y,{format:mr,type:Ln})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,D,f,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,D,p,M,null)}function x(C,R,D,v){let E=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)E=L;else if(E=D.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=E.uuid,B=R.uuid;let H=c[O];H===void 0&&(H={},c[O]=H);let q=H[B];q===void 0&&(q=E.clone(),H[B]=q,R.addEventListener("dispose",w)),E=q}if(E.visible=R.visible,E.wireframe=R.wireframe,v===ta?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=t.properties.get(E);O.light=D}return E}function S(C,R,D,v,E){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===ta)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const B=e.update(C),H=C.material;if(Array.isArray(H)){const q=B.groups;for(let z=0,G=q.length;z<G;z++){const Z=q[z],de=H[Z.materialIndex];if(de&&de.visible){const oe=x(C,de,v,E);C.onBeforeShadow(t,C,R,D,B,oe,Z),t.renderBufferDirect(D,null,B,oe,C,Z),C.onAfterShadow(t,C,R,D,B,oe,Z)}}}else if(H.visible){const q=x(C,H,v,E);C.onBeforeShadow(t,C,R,D,B,q,null),t.renderBufferDirect(D,null,B,q,C,null),C.onAfterShadow(t,C,R,D,B,q,null)}}const O=C.children;for(let B=0,H=O.length;B<H;B++)S(O[B],R,D,v,E)}function w(C){C.target.removeEventListener("dispose",w);for(const D in c){const v=c[D],E=C.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const WM={[Ec]:bc,[Tc]:Cc,[Ac]:Rc,[dr]:wc,[bc]:Ec,[Cc]:Tc,[Rc]:Ac,[wc]:dr};function XM(t,e){function n(){let I=!1;const _e=new Nt;let se=null;const xe=new Nt(0,0,0,0);return{setMask:function(ie){se!==ie&&!I&&(t.colorMask(ie,ie,ie,ie),se=ie)},setLocked:function(ie){I=ie},setClear:function(ie,K,le,We,Mt){Mt===!0&&(ie*=We,K*=We,le*=We),_e.set(ie,K,le,We),xe.equals(_e)===!1&&(t.clearColor(ie,K,le,We),xe.copy(_e))},reset:function(){I=!1,se=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,_e=!1,se=null,xe=null,ie=null;return{setReversed:function(K){if(_e!==K){const le=e.get("EXT_clip_control");K?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),_e=K;const We=ie;ie=null,this.setClear(We)}},getReversed:function(){return _e},setTest:function(K){K?Q(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(t.depthMask(K),se=K)},setFunc:function(K){if(_e&&(K=WM[K]),xe!==K){switch(K){case Ec:t.depthFunc(t.NEVER);break;case bc:t.depthFunc(t.ALWAYS);break;case Tc:t.depthFunc(t.LESS);break;case dr:t.depthFunc(t.LEQUAL);break;case Ac:t.depthFunc(t.EQUAL);break;case wc:t.depthFunc(t.GEQUAL);break;case Cc:t.depthFunc(t.GREATER);break;case Rc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=K}},setLocked:function(K){I=K},setClear:function(K){ie!==K&&(_e&&(K=1-K),t.clearDepth(K),ie=K)},reset:function(){I=!1,se=null,xe=null,ie=null,_e=!1}}}function s(){let I=!1,_e=null,se=null,xe=null,ie=null,K=null,le=null,We=null,Mt=null;return{setTest:function(ht){I||(ht?Q(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(ht){_e!==ht&&!I&&(t.stencilMask(ht),_e=ht)},setFunc:function(ht,oi,Ei){(se!==ht||xe!==oi||ie!==Ei)&&(t.stencilFunc(ht,oi,Ei),se=ht,xe=oi,ie=Ei)},setOp:function(ht,oi,Ei){(K!==ht||le!==oi||We!==Ei)&&(t.stencilOp(ht,oi,Ei),K=ht,le=oi,We=Ei)},setLocked:function(ht){I=ht},setClear:function(ht){Mt!==ht&&(t.clearStencil(ht),Mt=ht)},reset:function(){I=!1,_e=null,se=null,xe=null,ie=null,K=null,le=null,We=null,Mt=null}}}const r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,M=!1,m=null,d=null,b=null,x=null,S=null,w=null,C=null,R=new Ye(0,0,0),D=0,v=!1,E=null,L=null,O=null,B=null,H=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=G>=2);let de=null,oe={};const he=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),Ge=new Nt().fromArray(he),dt=new Nt().fromArray(Xe);function pt(I,_e,se,xe){const ie=new Uint8Array(4),K=t.createTexture();t.bindTexture(I,K),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let le=0;le<se;le++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(_e+le,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return K}const Y={};Y[t.TEXTURE_2D]=pt(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=pt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=pt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=pt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(t.DEPTH_TEST),a.setFunc(dr),$(!1),me(Ef),Q(t.CULL_FACE),J(gi);function Q(I){h[I]!==!0&&(t.enable(I),h[I]=!0)}function Me(I){h[I]!==!1&&(t.disable(I),h[I]=!1)}function Be(I,_e){return u[I]!==_e?(t.bindFramebuffer(I,_e),u[I]=_e,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=_e),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ee(I,_e){let se=p,xe=!1;if(I){se=f.get(_e),se===void 0&&(se=[],f.set(_e,se));const ie=I.textures;if(se.length!==ie.length||se[0]!==t.COLOR_ATTACHMENT0){for(let K=0,le=ie.length;K<le;K++)se[K]=t.COLOR_ATTACHMENT0+K;se.length=ie.length,xe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,xe=!0);xe&&t.drawBuffers(se)}function tt(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const mt={[Es]:t.FUNC_ADD,[Yg]:t.FUNC_SUBTRACT,[jg]:t.FUNC_REVERSE_SUBTRACT};mt[Kg]=t.MIN,mt[Jg]=t.MAX;const qe={[$g]:t.ZERO,[Zg]:t.ONE,[Qg]:t.SRC_COLOR,[Sc]:t.SRC_ALPHA,[r_]:t.SRC_ALPHA_SATURATE,[i_]:t.DST_COLOR,[t_]:t.DST_ALPHA,[e_]:t.ONE_MINUS_SRC_COLOR,[yc]:t.ONE_MINUS_SRC_ALPHA,[s_]:t.ONE_MINUS_DST_COLOR,[n_]:t.ONE_MINUS_DST_ALPHA,[a_]:t.CONSTANT_COLOR,[o_]:t.ONE_MINUS_CONSTANT_COLOR,[l_]:t.CONSTANT_ALPHA,[c_]:t.ONE_MINUS_CONSTANT_ALPHA};function J(I,_e,se,xe,ie,K,le,We,Mt,ht){if(I===gi){M===!0&&(Me(t.BLEND),M=!1);return}if(M===!1&&(Q(t.BLEND),M=!0),I!==qg){if(I!==m||ht!==v){if((d!==Es||S!==Es)&&(t.blendEquation(t.FUNC_ADD),d=Es,S=Es),ht)switch(I){case lr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFunc(t.ONE,t.ONE);break;case bf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:nt("WebGLState: Invalid blending: ",I);break}else switch(I){case lr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mc:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case bf:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tf:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",I);break}b=null,x=null,w=null,C=null,R.set(0,0,0),D=0,m=I,v=ht}return}ie=ie||_e,K=K||se,le=le||xe,(_e!==d||ie!==S)&&(t.blendEquationSeparate(mt[_e],mt[ie]),d=_e,S=ie),(se!==b||xe!==x||K!==w||le!==C)&&(t.blendFuncSeparate(qe[se],qe[xe],qe[K],qe[le]),b=se,x=xe,w=K,C=le),(We.equals(R)===!1||Mt!==D)&&(t.blendColor(We.r,We.g,We.b,Mt),R.copy(We),D=Mt),m=I,v=!1}function ne(I,_e){I.side===Jn?Me(t.CULL_FACE):Q(t.CULL_FACE);let se=I.side===cn;_e&&(se=!se),$(se),I.blending===lr&&I.transparent===!1?J(gi):J(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const xe=I.stencilWrite;o.setTest(xe),xe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function $(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function me(I){I!==Hg?(Q(t.CULL_FACE),I!==L&&(I===Ef?t.cullFace(t.BACK):I===Wg?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),L=I}function A(I){I!==O&&(z&&t.lineWidth(I),O=I)}function Ne(I,_e,se){I?(Q(t.POLYGON_OFFSET_FILL),(B!==_e||H!==se)&&(t.polygonOffset(_e,se),B=_e,H=se)):Me(t.POLYGON_OFFSET_FILL)}function ve(I){I?Q(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function ke(I){I===void 0&&(I=t.TEXTURE0+q-1),de!==I&&(t.activeTexture(I),de=I)}function re(I,_e,se){se===void 0&&(de===null?se=t.TEXTURE0+q-1:se=de);let xe=oe[se];xe===void 0&&(xe={type:void 0,texture:void 0},oe[se]=xe),(xe.type!==I||xe.texture!==_e)&&(de!==se&&(t.activeTexture(se),de=se),t.bindTexture(I,_e||Y[I]),xe.type=I,xe.texture=_e)}function T(){const I=oe[de];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function W(){try{t.texSubImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function j(){try{t.texSubImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function ae(){try{t.texStorage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function Te(){try{t.texStorage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function ze(){try{t.texImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function ee(){try{t.texImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function ue(I){Ge.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ge.copy(I))}function Ae(I){dt.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),dt.copy(I))}function Re(I,_e){let se=c.get(_e);se===void 0&&(se=new WeakMap,c.set(_e,se));let xe=se.get(I);xe===void 0&&(xe=t.getUniformBlockIndex(_e,I.name),se.set(I,xe))}function ce(I,_e){const xe=c.get(_e).get(I);l.get(_e)!==xe&&(t.uniformBlockBinding(_e,xe,I.__bindingPointIndex),l.set(_e,xe))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},de=null,oe={},u={},f=new WeakMap,p=[],g=null,M=!1,m=null,d=null,b=null,x=null,S=null,w=null,C=null,R=new Ye(0,0,0),D=0,v=!1,E=null,L=null,O=null,B=null,H=null,Ge.set(0,0,t.canvas.width,t.canvas.height),dt.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:Me,bindFramebuffer:Be,drawBuffers:Ee,useProgram:tt,setBlending:J,setMaterial:ne,setFlipSided:$,setCullFace:me,setLineWidth:A,setPolygonOffset:Ne,setScissorTest:ve,activeTexture:ke,bindTexture:re,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:ze,texImage3D:ee,updateUBOMapping:Re,uniformBlockBinding:ce,texStorage2D:ae,texStorage3D:Te,texSubImage2D:W,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:we,scissor:ue,viewport:Ae,reset:Je}}function qM(t,e,n,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):ga("canvas")}function M(T,_,U){let W=1;const j=re(T);if((j.width>U||j.height>U)&&(W=U/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(W*j.width),we=Math.floor(W*j.height);u===void 0&&(u=g(X,we));const ae=_?g(X,we):u;return ae.width=X,ae.height=we,ae.getContext("2d").drawImage(T,0,0,X,we),He("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+we+")."),ae}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){t.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(T,_,U,W,j=!1){if(T!==null){if(t[T]!==void 0)return t[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=_;if(_===t.RED&&(U===t.FLOAT&&(X=t.R32F),U===t.HALF_FLOAT&&(X=t.R16F),U===t.UNSIGNED_BYTE&&(X=t.R8)),_===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(X=t.R8UI),U===t.UNSIGNED_SHORT&&(X=t.R16UI),U===t.UNSIGNED_INT&&(X=t.R32UI),U===t.BYTE&&(X=t.R8I),U===t.SHORT&&(X=t.R16I),U===t.INT&&(X=t.R32I)),_===t.RG&&(U===t.FLOAT&&(X=t.RG32F),U===t.HALF_FLOAT&&(X=t.RG16F),U===t.UNSIGNED_BYTE&&(X=t.RG8)),_===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(X=t.RG8UI),U===t.UNSIGNED_SHORT&&(X=t.RG16UI),U===t.UNSIGNED_INT&&(X=t.RG32UI),U===t.BYTE&&(X=t.RG8I),U===t.SHORT&&(X=t.RG16I),U===t.INT&&(X=t.RG32I)),_===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(X=t.RGB8UI),U===t.UNSIGNED_SHORT&&(X=t.RGB16UI),U===t.UNSIGNED_INT&&(X=t.RGB32UI),U===t.BYTE&&(X=t.RGB8I),U===t.SHORT&&(X=t.RGB16I),U===t.INT&&(X=t.RGB32I)),_===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),U===t.UNSIGNED_INT&&(X=t.RGBA32UI),U===t.BYTE&&(X=t.RGBA8I),U===t.SHORT&&(X=t.RGBA16I),U===t.INT&&(X=t.RGBA32I)),_===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),_===t.RGBA){const we=j?Ao:it.getTransfer(W);U===t.FLOAT&&(X=t.RGBA32F),U===t.HALF_FLOAT&&(X=t.RGBA16F),U===t.UNSIGNED_BYTE&&(X=we===ft?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(T,_){let U;return T?_===null||_===vi||_===ma?U=t.DEPTH24_STENCIL8:_===Qn?U=t.DEPTH32F_STENCIL8:_===pa&&(U=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===ma?U=t.DEPTH_COMPONENT24:_===Qn?U=t.DEPTH_COMPONENT32F:_===pa&&(U=t.DEPTH_COMPONENT16),U}function w(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==nn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){const _=T.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&h.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),E(_)}function D(T){const _=i.get(T);if(_.__webglInit===void 0)return;const U=T.source,W=f.get(U);if(W){const j=W[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(T),Object.keys(W).length===0&&f.delete(U)}i.remove(T)}function v(T){const _=i.get(T);t.deleteTexture(_.__webglTexture);const U=T.source,W=f.get(U);delete W[_.__cacheKey],a.memory.textures--}function E(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let j=0;j<_.__webglFramebuffer[W].length;j++)t.deleteFramebuffer(_.__webglFramebuffer[W][j]);else t.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)t.deleteFramebuffer(_.__webglFramebuffer[W]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=T.textures;for(let W=0,j=U.length;W<j;W++){const X=i.get(U[W]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(U[W])}i.remove(T)}let L=0;function O(){L=0}function B(){const T=L;return T>=s.maxTextures&&He("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function H(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function q(T,_){const U=i.get(T);if(T.isVideoTexture&&ve(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const W=T.image;if(W===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,T,_);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+_)}function z(T,_){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Y(U,T,_);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+_)}function G(T,_){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){Y(U,T,_);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+_)}function Z(T,_){const U=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){Q(U,T,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+_)}const de={[da]:t.REPEAT,[Li]:t.CLAMP_TO_EDGE,[Dc]:t.MIRRORED_REPEAT},oe={[$t]:t.NEAREST,[f_]:t.NEAREST_MIPMAP_NEAREST,[Ba]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Tl]:t.LINEAR_MIPMAP_NEAREST,[Ts]:t.LINEAR_MIPMAP_LINEAR},he={[m_]:t.NEVER,[M_]:t.ALWAYS,[g_]:t.LESS,[Kh]:t.LEQUAL,[__]:t.EQUAL,[Jh]:t.GEQUAL,[v_]:t.GREATER,[x_]:t.NOTEQUAL};function Xe(T,_){if(_.type===Qn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===nn||_.magFilter===Tl||_.magFilter===Ba||_.magFilter===Ts||_.minFilter===nn||_.minFilter===Tl||_.minFilter===Ba||_.minFilter===Ts)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,de[_.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,de[_.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,de[_.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,oe[_.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$t||_.minFilter!==Ba&&_.minFilter!==Ts||_.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ge(T,_){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));const W=_.source;let j=f.get(W);j===void 0&&(j={},f.set(W,j));const X=H(_);if(X!==T.__cacheKey){j[X]===void 0&&(j[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),j[X].usedTimes++;const we=j[T.__cacheKey];we!==void 0&&(j[T.__cacheKey].usedTimes--,we.usedTimes===0&&v(_)),T.__cacheKey=X,T.__webglTexture=j[X].texture}return U}function dt(T,_,U){return Math.floor(Math.floor(T/U)/_)}function pt(T,_,U,W){const X=T.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,U,W,_.data);else{X.sort((ee,ue)=>ee.start-ue.start);let we=0;for(let ee=1;ee<X.length;ee++){const ue=X[we],Ae=X[ee],Re=ue.start+ue.count,ce=dt(Ae.start,_.width,4),Je=dt(ue.start,_.width,4);Ae.start<=Re+1&&ce===Je&&dt(Ae.start+Ae.count-1,_.width,4)===ce?ue.count=Math.max(ue.count,Ae.start+Ae.count-ue.start):(++we,X[we]=Ae)}X.length=we+1;const ae=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),ze=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ue=X.length;ee<ue;ee++){const Ae=X[ee],Re=Math.floor(Ae.start/4),ce=Math.ceil(Ae.count/4),Je=Re%_.width,I=Math.floor(Re/_.width),_e=ce,se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Je,I,_e,se,U,W,_.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,ze)}}function Y(T,_,U){let W=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=t.TEXTURE_3D);const j=Ge(T,_),X=_.source;n.bindTexture(W,T.__webglTexture,t.TEXTURE0+U);const we=i.get(X);if(X.version!==we.__version||j===!0){n.activeTexture(t.TEXTURE0+U);const ae=it.getPrimaries(it.workingColorSpace),Te=_.colorSpace===Ki?null:it.getPrimaries(_.colorSpace),ze=_.colorSpace===Ki||ae===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ee=M(_.image,!1,s.maxTextureSize);ee=ke(_,ee);const ue=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let Re=x(_.internalFormat,ue,Ae,_.colorSpace,_.isVideoTexture);Xe(W,_);let ce;const Je=_.mipmaps,I=_.isVideoTexture!==!0,_e=we.__version===void 0||j===!0,se=X.dataReady,xe=w(_,ee);if(_.isDepthTexture)Re=S(_.format===As,_.type),_e&&(I?n.texStorage2D(t.TEXTURE_2D,1,Re,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Re,ee.width,ee.height,0,ue,Ae,null));else if(_.isDataTexture)if(Je.length>0){I&&_e&&n.texStorage2D(t.TEXTURE_2D,xe,Re,Je[0].width,Je[0].height);for(let ie=0,K=Je.length;ie<K;ie++)ce=Je[ie],I?se&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,Ae,ce.data):n.texImage2D(t.TEXTURE_2D,ie,Re,ce.width,ce.height,0,ue,Ae,ce.data);_.generateMipmaps=!1}else I?(_e&&n.texStorage2D(t.TEXTURE_2D,xe,Re,ee.width,ee.height),se&&pt(_,ee,ue,Ae)):n.texImage2D(t.TEXTURE_2D,0,Re,ee.width,ee.height,0,ue,Ae,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Re,Je[0].width,Je[0].height,ee.depth);for(let ie=0,K=Je.length;ie<K;ie++)if(ce=Je[ie],_.format!==ei)if(ue!==null)if(I){if(se)if(_.layerUpdates.size>0){const le=rd(ce.width,ce.height,_.format,_.type);for(const We of _.layerUpdates){const Mt=ce.data.subarray(We*le/ce.data.BYTES_PER_ELEMENT,(We+1)*le/ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,We,ce.width,ce.height,1,ue,Mt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,ee.depth,ue,ce.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Re,ce.width,ce.height,ee.depth,0,ce.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ce.width,ce.height,ee.depth,ue,Ae,ce.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Re,ce.width,ce.height,ee.depth,0,ue,Ae,ce.data)}else{I&&_e&&n.texStorage2D(t.TEXTURE_2D,xe,Re,Je[0].width,Je[0].height);for(let ie=0,K=Je.length;ie<K;ie++)ce=Je[ie],_.format!==ei?ue!==null?I?se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,ce.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Re,ce.width,ce.height,0,ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce.width,ce.height,ue,Ae,ce.data):n.texImage2D(t.TEXTURE_2D,ie,Re,ce.width,ce.height,0,ue,Ae,ce.data)}else if(_.isDataArrayTexture)if(I){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Re,ee.width,ee.height,ee.depth),se)if(_.layerUpdates.size>0){const ie=rd(ee.width,ee.height,_.format,_.type);for(const K of _.layerUpdates){const le=ee.data.subarray(K*ie/ee.data.BYTES_PER_ELEMENT,(K+1)*ie/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ue,Ae,le)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ae,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,ue,Ae,ee.data);else if(_.isData3DTexture)I?(_e&&n.texStorage3D(t.TEXTURE_3D,xe,Re,ee.width,ee.height,ee.depth),se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,ue,Ae,ee.data);else if(_.isFramebufferTexture){if(_e)if(I)n.texStorage2D(t.TEXTURE_2D,xe,Re,ee.width,ee.height);else{let ie=ee.width,K=ee.height;for(let le=0;le<xe;le++)n.texImage2D(t.TEXTURE_2D,le,Re,ie,K,0,ue,Ae,null),ie>>=1,K>>=1}}else if(Je.length>0){if(I&&_e){const ie=re(Je[0]);n.texStorage2D(t.TEXTURE_2D,xe,Re,ie.width,ie.height)}for(let ie=0,K=Je.length;ie<K;ie++)ce=Je[ie],I?se&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ue,Ae,ce):n.texImage2D(t.TEXTURE_2D,ie,Re,ue,Ae,ce);_.generateMipmaps=!1}else if(I){if(_e){const ie=re(ee);n.texStorage2D(t.TEXTURE_2D,xe,Re,ie.width,ie.height)}se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ae,ee)}else n.texImage2D(t.TEXTURE_2D,0,Re,ue,Ae,ee);m(_)&&d(W),we.__version=X.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Q(T,_,U){if(_.image.length!==6)return;const W=Ge(T,_),j=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);const X=i.get(j);if(j.version!==X.__version||W===!0){n.activeTexture(t.TEXTURE0+U);const we=it.getPrimaries(it.workingColorSpace),ae=_.colorSpace===Ki?null:it.getPrimaries(_.colorSpace),Te=_.colorSpace===Ki||we===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ze=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ue=[];for(let K=0;K<6;K++)!ze&&!ee?ue[K]=M(_.image[K],!0,s.maxCubemapSize):ue[K]=ee?_.image[K].image:_.image[K],ue[K]=ke(_,ue[K]);const Ae=ue[0],Re=r.convert(_.format,_.colorSpace),ce=r.convert(_.type),Je=x(_.internalFormat,Re,ce,_.colorSpace),I=_.isVideoTexture!==!0,_e=X.__version===void 0||W===!0,se=j.dataReady;let xe=w(_,Ae);Xe(t.TEXTURE_CUBE_MAP,_);let ie;if(ze){I&&_e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,Ae.width,Ae.height);for(let K=0;K<6;K++){ie=ue[K].mipmaps;for(let le=0;le<ie.length;le++){const We=ie[le];_.format!==ei?Re!==null?I?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,We.width,We.height,Re,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Je,We.width,We.height,0,We.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,We.width,We.height,Re,ce,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Je,We.width,We.height,0,Re,ce,We.data)}}}else{if(ie=_.mipmaps,I&&_e){ie.length>0&&xe++;const K=re(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Je,K.width,K.height)}for(let K=0;K<6;K++)if(ee){I?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ue[K].width,ue[K].height,Re,ce,ue[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Je,ue[K].width,ue[K].height,0,Re,ce,ue[K].data);for(let le=0;le<ie.length;le++){const Mt=ie[le].image[K].image;I?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Mt.width,Mt.height,Re,ce,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Je,Mt.width,Mt.height,0,Re,ce,Mt.data)}}else{I?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,ce,ue[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Je,Re,ce,ue[K]);for(let le=0;le<ie.length;le++){const We=ie[le];I?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Re,ce,We.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Je,Re,ce,We.image[K])}}}m(_)&&d(t.TEXTURE_CUBE_MAP),X.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Me(T,_,U,W,j,X){const we=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),Te=x(U.internalFormat,we,ae,U.colorSpace),ze=i.get(_),ee=i.get(U);if(ee.__renderTarget=_,!ze.__hasExternalTextures){const ue=Math.max(1,_.width>>X),Ae=Math.max(1,_.height>>X);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,X,Te,ue,Ae,_.depth,0,we,ae,null):n.texImage2D(j,X,Te,ue,Ae,0,we,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Ne(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,j,ee.__webglTexture,0,A(_)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,j,ee.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(T,_,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),_.depthBuffer){const W=_.depthTexture,j=W&&W.isDepthTexture?W.type:null,X=S(_.stencilBuffer,j),we=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ne(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(_),X,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(_),X,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,X,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,T)}else{const W=_.textures;for(let j=0;j<W.length;j++){const X=W[j],we=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),Te=x(X.internalFormat,we,ae,X.colorSpace);Ne(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,A(_),Te,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,A(_),Te,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Te,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(T,_,U){const W=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,_.depthTexture);const ze=r.convert(_.depthTexture.format),ee=r.convert(_.depthTexture.type);let ue;_.depthTexture.format===Bi?ue=t.DEPTH_COMPONENT24:_.depthTexture.format===As&&(ue=t.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ue,_.width,_.height,0,ze,ee,null)}}else q(_.depthTexture,0);const X=j.__webglTexture,we=A(_),ae=W?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Te=_.depthTexture.format===As?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Bi)Ne(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,ae,X,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Te,ae,X,0);else if(_.depthTexture.format===As)Ne(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,ae,X,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,Te,ae,X,0);else throw new Error("Unknown depthTexture format")}function tt(T){const _=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=W}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(U)for(let W=0;W<6;W++)Ee(_.__webglFramebuffer[W],T,W);else{const W=T.texture.mipmaps;W&&W.length>0?Ee(_.__webglFramebuffer[0],T,0):Ee(_.__webglFramebuffer,T,0)}else if(U){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=t.createRenderbuffer(),Be(_.__webglDepthbuffer[W],T,!1);else{const j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Be(_.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function mt(T,_,U){const W=i.get(T);_!==void 0&&Me(W.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&tt(T)}function qe(T){const _=T.texture,U=i.get(T),W=i.get(_);T.addEventListener("dispose",R);const j=T.textures,X=T.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=_.version,a.memory.textures++),X){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let Te=0;Te<_.mipmaps.length;Te++)U.__webglFramebuffer[ae][Te]=t.createFramebuffer()}else U.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)U.__webglFramebuffer[ae]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(we)for(let ae=0,Te=j.length;ae<Te;ae++){const ze=i.get(j[ae]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&Ne(T)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const Te=j[ae];U.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const ze=r.convert(Te.format,Te.colorSpace),ee=r.convert(Te.type),ue=x(Te.internalFormat,ze,ee,Te.colorSpace,T.isXRRenderTarget===!0),Ae=A(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ue,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(t.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Me(U.__webglFramebuffer[ae][Te],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else Me(U.__webglFramebuffer[ae],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ae=0,Te=j.length;ae<Te;ae++){const ze=j[ae],ee=i.get(ze);let ue=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ee.__webglTexture),Xe(ue,ze),Me(U.__webglFramebuffer,T,ze,t.COLOR_ATTACHMENT0+ae,ue,0),m(ze)&&d(ue)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,W.__webglTexture),Xe(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Me(U.__webglFramebuffer[Te],T,_,t.COLOR_ATTACHMENT0,ae,Te);else Me(U.__webglFramebuffer,T,_,t.COLOR_ATTACHMENT0,ae,0);m(_)&&d(ae),n.unbindTexture()}T.depthBuffer&&tt(T)}function J(T){const _=T.textures;for(let U=0,W=_.length;U<W;U++){const j=_[U];if(m(j)){const X=b(T),we=i.get(j).__webglTexture;n.bindTexture(X,we),d(X),n.unbindTexture()}}}const ne=[],$=[];function me(T){if(T.samples>0){if(Ne(T)===!1){const _=T.textures,U=T.width,W=T.height;let j=t.COLOR_BUFFER_BIT;const X=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(T),ae=_.length>1;if(ae)for(let ze=0;ze<_.length;ze++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ze=0;ze<_.length;ze++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ee=i.get(_[ze]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,U,W,0,0,U,W,j,t.NEAREST),l===!0&&(ne.length=0,$.length=0,ne.push(t.COLOR_ATTACHMENT0+ze),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ne.push(X),$.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,$)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let ze=0;ze<_.length;ze++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.RENDERBUFFER,we.__webglColorRenderbuffer[ze]);const ee=i.get(_[ze]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ze,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function A(T){return Math.min(s.maxSamples,T.samples)}function Ne(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ve(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ke(T,_){const U=T.colorSpace,W=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==gr&&U!==Ki&&(it.getTransfer(U)===ft?(W!==ei||j!==Pn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",U)),_}function re(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=mt,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function YM(t,e){function n(i,s=Ki){let r;const a=it.getTransfer(s);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Gh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Jp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yp)return t.BYTE;if(i===jp)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===Vh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===Qn)return t.FLOAT;if(i===Ln)return t.HALF_FLOAT;if(i===$p)return t.ALPHA;if(i===Zp)return t.RGB;if(i===ei)return t.RGBA;if(i===Bi)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===Wh)return t.RED;if(i===Xh)return t.RED_INTEGER;if(i===mr)return t.RG;if(i===qh)return t.RG_INTEGER;if(i===Yh)return t.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===vo)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Uc||i===Nc||i===Fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ic)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===Bc||i===kc||i===zc||i===Vc||i===Gc||i===Hc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Oc||i===Bc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zc)return r.COMPRESSED_R11_EAC;if(i===Vc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gc)return r.COMPRESSED_RG11_EAC;if(i===Hc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wc||i===Xc||i===qc||i===Yc||i===jc||i===Kc||i===Jc||i===$c||i===Zc||i===Qc||i===eh||i===th||i===nh||i===ih)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===eh)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===th)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nh)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sh||i===rh||i===ah)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===sh)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oh||i===lh||i===ch||i===hh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===oh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ma?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new fm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sn({vertexShader:jM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ot(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $M extends Dr{constructor(e,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const M=typeof XRWebGLBinding<"u",m=new JM,d={},b=n.getContextAttributes();let x=null,S=null;const w=[],C=[],R=new te;let D=null;const v=new vn;v.viewport=new Nt;const E=new vn;E.viewport=new Nt;const L=[v,E],O=new ov;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new ql,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new ql,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new ql,w[Y]=Q),Q.getHandSpace()};function q(Y){const Q=C.indexOf(Y.inputSource);if(Q===-1)return;const Me=w[Q];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||a),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<w.length;Y++){const Q=C[Y];Q!==null&&(C[Y]=null,w[Y].disconnect(Q))}B=null,H=null,m.reset();for(const Y in d)delete d[Y];e.setRenderTarget(x),p=null,f=null,u=null,s=null,S=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,n)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Be=null,Ee=null;b.depth&&(Ee=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=b.stencil?As:Bi,Be=b.stencil?ma:vi);const tt={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new xn(f.textureWidth,f.textureHeight,{format:ei,type:Pn,depthTexture:new xa(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new xn(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let Q=0;Q<Y.removed.length;Q++){const Me=Y.removed[Q],Be=C.indexOf(Me);Be>=0&&(C[Be]=null,w[Be].disconnect(Me))}for(let Q=0;Q<Y.added.length;Q++){const Me=Y.added[Q];let Be=C.indexOf(Me);if(Be===-1){for(let tt=0;tt<w.length;tt++)if(tt>=C.length){C.push(Me),Be=tt;break}else if(C[tt]===null){C[tt]=Me,Be=tt;break}if(Be===-1)break}const Ee=w[Be];Ee&&Ee.connect(Me)}}const Z=new P,de=new P;function oe(Y,Q,Me){Z.setFromMatrixPosition(Q.matrixWorld),de.setFromMatrixPosition(Me.matrixWorld);const Be=Z.distanceTo(de),Ee=Q.projectionMatrix.elements,tt=Me.projectionMatrix.elements,mt=Ee[14]/(Ee[10]-1),qe=Ee[14]/(Ee[10]+1),J=(Ee[9]+1)/Ee[5],ne=(Ee[9]-1)/Ee[5],$=(Ee[8]-1)/Ee[0],me=(tt[8]+1)/tt[0],A=mt*$,Ne=mt*me,ve=Be/(-$+me),ke=ve*-$;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const re=mt+ve,T=qe+ve,_=A-ke,U=Ne+(Be-ke),W=J*qe/T*re,j=ne*qe/T*re;Y.projectionMatrix.makePerspective(_,U,W,j,re,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,Me=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),O.near=E.near=v.near=Q,O.far=E.far=v.far=Me,(B!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,H=O.far),O.layers.mask=Y.layers.mask|6,v.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Be=Y.parent,Ee=O.cameras;he(O,Be);for(let tt=0;tt<Ee.length;tt++)he(Ee[tt],Be);Ee.length===2?oe(O,v,E):O.projectionMatrix.copy(v.projectionMatrix),Xe(Y,O,Be)};function Xe(Y,Q,Me){Me===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_r*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return d[Y]};let Ge=null;function dt(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Be=!1;Me.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let qe=0;qe<Me.length;qe++){const J=Me[qe];let ne=null;if(p!==null)ne=p.getViewport(J);else{const me=u.getViewSubImage(f,J);ne=me.viewport,qe===0&&(e.setRenderTargetTextures(S,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(S))}let $=L[qe];$===void 0&&($=new vn,$.layers.enable(qe),$.viewport=new Nt,L[qe]=$),$.matrix.fromArray(J.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(J.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ne.x,ne.y,ne.width,ne.height),qe===0&&(O.matrix.copy($.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push($)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=i.getBinding();const qe=u.getDepthInformation(Me[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(Ee&&Ee.includes("camera-access")&&M){e.state.unbindTexture(),u=i.getBinding();for(let qe=0;qe<Me.length;qe++){const J=Me[qe].camera;if(J){let ne=d[J];ne||(ne=new fm,d[J]=ne);const $=u.getCameraImage(J);ne.sourceTexture=$}}}}for(let Me=0;Me<w.length;Me++){const Be=C[Me],Ee=w[Me];Be!==null&&Ee!==void 0&&Ee.update(Be,Q,c||a)}Ge&&Ge(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const pt=new Tm;pt.setAnimationLoop(dt),this.setAnimationLoop=function(Y){Ge=Y},this.dispose=function(){}}}const xs=new ni,ZM=new Et;function QM(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,rm(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),x=b.envMap,S=b.envMapRotation;x&&(m.envMap.value=x,xs.copy(S),xs.x*=-1,xs.y*=-1,xs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(xs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eS(t,e,n,i){let s={},r={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const S=x.program;i.uniformBlockBinding(b,S)}function c(b,x){let S=s[b.id];S===void 0&&(g(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(b,w);const C=e.render.frame;r[b.id]!==C&&(f(b),r[b.id]=C)}function h(b){const x=u();b.__bindingPointIndex=x;const S=t.createBuffer(),w=b.__size,C=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=s[b.id],S=b.uniforms,w=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,R=S.length;C<R;C++){const D=Array.isArray(S[C])?S[C]:[S[C]];for(let v=0,E=D.length;v<E;v++){const L=D[v];if(p(L,C,v,w)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let q=0;q<B.length;q++){const z=B[q],G=M(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,O+H,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(b,x,S,w){const C=b.value,R=x+"_"+S;if(w[R]===void 0)return typeof C=="number"||typeof C=="boolean"?w[R]=C:w[R]=C.clone(),!0;{const D=w[R];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return w[R]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(b){const x=b.uniforms;let S=0;const w=16;for(let R=0,D=x.length;R<D;R++){const v=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,L=v.length;E<L;E++){const O=v[E],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=B.length;H<q;H++){const z=B[H],G=M(z),Z=S%w,de=Z%G.boundary,oe=Z+de;S+=de,oe!==0&&w-oe<G.storage&&(S+=w-oe),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=G.storage}}}const C=S%w;return C>0&&(S+=w-C),b.__size=S,b.__cache={},this}function M(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const b in s)t.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}const tS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let li=null;function nS(){return li===null&&(li=new hm(tS,16,16,mr,Ln),li.name="DFG_LUT",li.minFilter=nn,li.magFilter=nn,li.wrapS=Li,li.wrapT=Li,li.generateMipmaps=!1,li.needsUpdate=!0),li}class iS{constructor(e={}){const{canvas:n=y_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const M=p,m=new Set([Yh,qh,Xh]),d=new Set([Pn,vi,pa,ma,Gh,Hh]),b=new Uint32Array(4),x=new Int32Array(4);let S=null,w=null;const C=[],R=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=_n;let L=0,O=0,B=null,H=-1,q=null;const z=new Nt,G=new Nt;let Z=null;const de=new Ye(0);let oe=0,he=n.width,Xe=n.height,Ge=1,dt=null,pt=null;const Y=new Nt(0,0,he,Xe),Q=new Nt(0,0,he,Xe);let Me=!1;const Be=new eu;let Ee=!1,tt=!1;const mt=new Et,qe=new P,J=new Nt,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function me(){return B===null?Ge:1}let A=i;function Ne(y,N){return n.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bh}`),n.addEventListener("webglcontextlost",We,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",ht,!1),A===null){const N="webgl2";if(A=Ne(N,y),A===null)throw Ne(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw nt("WebGLRenderer: "+y.message),y}let ve,ke,re,T,_,U,W,j,X,we,ae,Te,ze,ee,ue,Ae,Re,ce,Je,I,_e,se,xe,ie;function K(){ve=new n3(A),ve.init(),se=new YM(A,ve),ke=new Y2(A,ve,e,se),re=new XM(A,ve),ke.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),T=new r3(A),_=new PM,U=new qM(A,ve,re,_,ke,se,T),W=new K2(v),j=new t3(v),X=new cv(A),xe=new X2(A,X),we=new i3(A,X,T,xe),ae=new o3(A,we,X,T),Je=new a3(A,ke,U),Ae=new j2(_),Te=new RM(v,W,j,ve,ke,xe,Ae),ze=new QM(v,_),ee=new DM,ue=new BM(ve),ce=new W2(v,W,j,re,ae,g,l),Re=new HM(v,ae,ke),ie=new eS(A,T,ke,re),I=new q2(A,ve,T),_e=new s3(A,ve,T),T.programs=Te.programs,v.capabilities=ke,v.extensions=ve,v.properties=_,v.renderLists=ee,v.shadowMap=Re,v.state=re,v.info=T}K(),M!==Pn&&(D=new c3(M,n.width,n.height,s,r));const le=new $M(v,A);this.xr=le,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const y=ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(y){y!==void 0&&(Ge=y,this.setSize(he,Xe,!1))},this.getSize=function(y){return y.set(he,Xe)},this.setSize=function(y,N,V=!0){if(le.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}he=y,Xe=N,n.width=Math.floor(y*Ge),n.height=Math.floor(N*Ge),V===!0&&(n.style.width=y+"px",n.style.height=N+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(he*Ge,Xe*Ge).floor()},this.setDrawingBufferSize=function(y,N,V){he=y,Xe=N,Ge=V,n.width=Math.floor(y*V),n.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(M===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(z)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,N,V,k){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,V,k),re.viewport(z.copy(Y).multiplyScalar(Ge).round())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,N,V,k){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,N,V,k),re.scissor(G.copy(Q).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(y){re.setScissorTest(Me=y)},this.setOpaqueSort=function(y){dt=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,V=!0){let k=0;if(y){let F=!1;if(B!==null){const fe=B.texture.format;F=m.has(fe)}if(F){const fe=B.texture.type,Se=d.has(fe),ge=ce.getClearColor(),be=ce.getClearAlpha(),Le=ge.r,Ve=ge.g,Fe=ge.b;Se?(b[0]=Le,b[1]=Ve,b[2]=Fe,b[3]=be,A.clearBufferuiv(A.COLOR,0,b)):(x[0]=Le,x[1]=Ve,x[2]=Fe,x[3]=be,A.clearBufferiv(A.COLOR,0,x))}else k|=A.COLOR_BUFFER_BIT}N&&(k|=A.DEPTH_BUFFER_BIT),V&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",We,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",ht,!1),ce.dispose(),ee.dispose(),ue.dispose(),_.dispose(),W.dispose(),j.dispose(),ae.dispose(),xe.dispose(),ie.dispose(),Te.dispose(),le.dispose(),le.removeEventListener("sessionstart",pf),le.removeEventListener("sessionend",mf),fs.stop()};function We(y){y.preventDefault(),Pf("WebGLRenderer: Context Lost."),E=!0}function Mt(){Pf("WebGLRenderer: Context Restored."),E=!1;const y=T.autoReset,N=Re.enabled,V=Re.autoUpdate,k=Re.needsUpdate,F=Re.type;K(),T.autoReset=y,Re.enabled=N,Re.autoUpdate=V,Re.needsUpdate=k,Re.type=F}function ht(y){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function oi(y){const N=y.target;N.removeEventListener("dispose",oi),Ei(N)}function Ei(y){Ag(y),_.remove(y)}function Ag(y){const N=_.get(y).programs;N!==void 0&&(N.forEach(function(V){Te.releaseProgram(V)}),y.isShaderMaterial&&Te.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,k,F,fe){N===null&&(N=ne);const Se=F.isMesh&&F.matrixWorld.determinant()<0,ge=Cg(y,N,V,k,F);re.setMaterial(k,Se);let be=V.index,Le=1;if(k.wireframe===!0){if(be=we.getWireframeAttribute(V),be===void 0)return;Le=2}const Ve=V.drawRange,Fe=V.attributes.position;let Ze=Ve.start*Le,gt=(Ve.start+Ve.count)*Le;fe!==null&&(Ze=Math.max(Ze,fe.start*Le),gt=Math.min(gt,(fe.start+fe.count)*Le)),be!==null?(Ze=Math.max(Ze,0),gt=Math.min(gt,be.count)):Fe!=null&&(Ze=Math.max(Ze,0),gt=Math.min(gt,Fe.count));const Lt=gt-Ze;if(Lt<0||Lt===1/0)return;xe.setup(F,k,ge,V,be);let Dt,vt=I;if(be!==null&&(Dt=X.get(be),vt=_e,vt.setIndex(Dt)),F.isMesh)k.wireframe===!0?(re.setLineWidth(k.wireframeLinewidth*me()),vt.setMode(A.LINES)):vt.setMode(A.TRIANGLES);else if(F.isLine){let Oe=k.linewidth;Oe===void 0&&(Oe=1),re.setLineWidth(Oe*me()),F.isLineSegments?vt.setMode(A.LINES):F.isLineLoop?vt.setMode(A.LINE_LOOP):vt.setMode(A.LINE_STRIP)}else F.isPoints?vt.setMode(A.POINTS):F.isSprite&&vt.setMode(A.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)_a("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ve.get("WEBGL_multi_draw"))vt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Oe=F._multiDrawStarts,ut=F._multiDrawCounts,rt=F._multiDrawCount,En=be?X.get(be).bytesPerElement:1,zs=_.get(k).currentProgram.getUniforms();for(let bn=0;bn<rt;bn++)zs.setValue(A,"_gl_DrawID",bn),vt.render(Oe[bn]/En,ut[bn])}else if(F.isInstancedMesh)vt.renderInstances(Ze,Lt,F.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ut=Math.min(V.instanceCount,Oe);vt.renderInstances(Ze,Lt,ut)}else vt.render(Ze,Lt)};function df(y,N,V){y.transparent===!0&&y.side===Jn&&y.forceSinglePass===!1?(y.side=cn,y.needsUpdate=!0,Oa(y,N,V),y.side=rs,y.needsUpdate=!0,Oa(y,N,V),y.side=Jn):Oa(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),w=ue.get(V),w.init(N),R.push(w),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),y!==V&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();const k=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const fe=F.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const ge=fe[Se];df(ge,V,F),k.add(ge)}else df(fe,V,F),k.add(fe)}),w=R.pop(),k},this.compileAsync=function(y,N,V=null){const k=this.compile(y,N,V);return new Promise(F=>{function fe(){if(k.forEach(function(Se){_.get(Se).currentProgram.isReady()&&k.delete(Se)}),k.size===0){F(y);return}setTimeout(fe,10)}ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let yl=null;function wg(y){yl&&yl(y)}function pf(){fs.stop()}function mf(){fs.start()}const fs=new Tm;fs.setAnimationLoop(wg),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(y){yl=y,le.setAnimationLoop(y),y===null?fs.stop():fs.start()},le.addEventListener("sessionstart",pf),le.addEventListener("sessionend",mf),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const V=le.enabled===!0&&le.isPresenting===!0,k=D!==null&&(B===null||V)&&D.begin(v,B);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,B),w=ue.get(y,R.length),w.init(N),R.push(w),mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Be.setFromProjectionMatrix(mt,mi,N.reversedDepth),tt=this.localClippingEnabled,Ee=Ae.init(this.clippingPlanes,tt),S=ee.get(y,C.length),S.init(),C.push(S),le.enabled===!0&&le.isPresenting===!0){const Se=v.xr.getDepthSensingMesh();Se!==null&&El(Se,N,-1/0,v.sortObjects)}El(y,N,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(dt,pt),$=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,$&&ce.addToRenderList(S,y),this.info.render.frame++,Ee===!0&&Ae.beginShadows();const F=w.state.shadowsArray;if(Re.render(F,y,N),Ee===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&D.hasRenderPass())===!1){const Se=S.opaque,ge=S.transmissive;if(w.setupLights(),N.isArrayCamera){const be=N.cameras;if(ge.length>0)for(let Le=0,Ve=be.length;Le<Ve;Le++){const Fe=be[Le];_f(Se,ge,y,Fe)}$&&ce.render(y);for(let Le=0,Ve=be.length;Le<Ve;Le++){const Fe=be[Le];gf(S,y,Fe,Fe.viewport)}}else ge.length>0&&_f(Se,ge,y,N),$&&ce.render(y),gf(S,y,N)}B!==null&&O===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),k&&D.end(v),y.isScene===!0&&y.onAfterRender(v,y,N),xe.resetDefaultState(),H=-1,q=null,R.pop(),R.length>0?(w=R[R.length-1],Ee===!0&&Ae.setGlobalState(v.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?S=C[C.length-1]:S=null};function El(y,N,V,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){k&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(mt);const Se=ae.update(y),ge=y.material;ge.visible&&S.push(y,Se,ge,V,J.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){const Se=ae.update(y),ge=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),J.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),J.copy(Se.boundingSphere.center)),J.applyMatrix4(y.matrixWorld).applyMatrix4(mt)),Array.isArray(ge)){const be=Se.groups;for(let Le=0,Ve=be.length;Le<Ve;Le++){const Fe=be[Le],Ze=ge[Fe.materialIndex];Ze&&Ze.visible&&S.push(y,Se,Ze,V,J.z,Fe)}}else ge.visible&&S.push(y,Se,ge,V,J.z,null)}}const fe=y.children;for(let Se=0,ge=fe.length;Se<ge;Se++)El(fe[Se],N,V,k)}function gf(y,N,V,k){const{opaque:F,transmissive:fe,transparent:Se}=y;w.setupLightsView(V),Ee===!0&&Ae.setGlobalState(v.clippingPlanes,V),k&&re.viewport(z.copy(k)),F.length>0&&Fa(F,N,V),fe.length>0&&Fa(fe,N,V),Se.length>0&&Fa(Se,N,V),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function _f(y,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const Ze=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new xn(1,1,{generateMipmaps:!0,type:Ze?Ln:Pn,minFilter:Ts,samples:ke.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const fe=w.state.transmissionRenderTarget[k.id],Se=k.viewport||z;fe.setSize(Se.z*v.transmissionResolutionScale,Se.w*v.transmissionResolutionScale);const ge=v.getRenderTarget(),be=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(fe),v.getClearColor(de),oe=v.getClearAlpha(),oe<1&&v.setClearColor(16777215,.5),v.clear(),$&&ce.render(V);const Ve=v.toneMapping;v.toneMapping=_i;const Fe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),Ee===!0&&Ae.setGlobalState(v.clippingPlanes,k),Fa(y,V,k),U.updateMultisampleRenderTarget(fe),U.updateRenderTargetMipmap(fe),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let gt=0,Lt=N.length;gt<Lt;gt++){const Dt=N[gt],{object:vt,geometry:Oe,material:ut,group:rt}=Dt;if(ut.side===Jn&&vt.layers.test(k.layers)){const En=ut.side;ut.side=cn,ut.needsUpdate=!0,vf(vt,V,k,Oe,ut,rt),ut.side=En,ut.needsUpdate=!0,Ze=!0}}Ze===!0&&(U.updateMultisampleRenderTarget(fe),U.updateRenderTargetMipmap(fe))}v.setRenderTarget(ge,be,Le),v.setClearColor(de,oe),Fe!==void 0&&(k.viewport=Fe),v.toneMapping=Ve}function Fa(y,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let F=0,fe=y.length;F<fe;F++){const Se=y[F],{object:ge,geometry:be,group:Le}=Se;let Ve=Se.material;Ve.allowOverride===!0&&k!==null&&(Ve=k),ge.layers.test(V.layers)&&vf(ge,N,V,be,Ve,Le)}}function vf(y,N,V,k,F,fe){y.onBeforeRender(v,N,V,k,F,fe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,N,V,k,y,fe),F.transparent===!0&&F.side===Jn&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,v.renderBufferDirect(V,N,k,F,y,fe),F.side=rs,F.needsUpdate=!0,v.renderBufferDirect(V,N,k,F,y,fe),F.side=Jn):v.renderBufferDirect(V,N,k,F,y,fe),y.onAfterRender(v,N,V,k,F,fe)}function Oa(y,N,V){N.isScene!==!0&&(N=ne);const k=_.get(y),F=w.state.lights,fe=w.state.shadowsArray,Se=F.state.version,ge=Te.getParameters(y,F.state,fe,N,V),be=Te.getProgramCacheKey(ge);let Le=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?j:W).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Le===void 0&&(y.addEventListener("dispose",oi),Le=new Map,k.programs=Le);let Ve=Le.get(be);if(Ve!==void 0){if(k.currentProgram===Ve&&k.lightsStateVersion===Se)return Mf(y,ge),Ve}else ge.uniforms=Te.getUniforms(y),y.onBeforeCompile(ge,v),Ve=Te.acquireProgram(ge,be),Le.set(be,Ve),k.uniforms=ge.uniforms;const Fe=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Fe.clippingPlanes=Ae.uniform),Mf(y,ge),k.needsLights=Pg(y),k.lightsStateVersion=Se,k.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ve,k.uniformsList=null,Ve}function xf(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=xo.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Mf(y,N){const V=_.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Cg(y,N,V,k,F){N.isScene!==!0&&(N=ne),U.resetTextureUnits();const fe=N.fog,Se=k.isMeshStandardMaterial?N.environment:null,ge=B===null?v.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:gr,be=(k.isMeshStandardMaterial?j:W).get(k.envMap||Se),Le=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Fe=!!V.morphAttributes.position,Ze=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let Lt=_i;k.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const Dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=Dt!==void 0?Dt.length:0,Oe=_.get(k),ut=w.state.lights;if(Ee===!0&&(tt===!0||y!==q)){const an=y===q&&k.id===H;Ae.setState(k,y,an)}let rt=!1;k.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ut.state.version||Oe.outputColorSpace!==ge||F.isBatchedMesh&&Oe.batching===!1||!F.isBatchedMesh&&Oe.batching===!0||F.isBatchedMesh&&Oe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Oe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Oe.instancing===!1||!F.isInstancedMesh&&Oe.instancing===!0||F.isSkinnedMesh&&Oe.skinning===!1||!F.isSkinnedMesh&&Oe.skinning===!0||F.isInstancedMesh&&Oe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Oe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Oe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Oe.instancingMorph===!1&&F.morphTexture!==null||Oe.envMap!==be||k.fog===!0&&Oe.fog!==fe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Ae.numPlanes||Oe.numIntersection!==Ae.numIntersection)||Oe.vertexAlphas!==Le||Oe.vertexTangents!==Ve||Oe.morphTargets!==Fe||Oe.morphNormals!==Ze||Oe.morphColors!==gt||Oe.toneMapping!==Lt||Oe.morphTargetsCount!==vt)&&(rt=!0):(rt=!0,Oe.__version=k.version);let En=Oe.currentProgram;rt===!0&&(En=Oa(k,N,F));let zs=!1,bn=!1,Wr=!1;const St=En.getUniforms(),dn=Oe.uniforms;if(re.useProgram(En.program)&&(zs=!0,bn=!0,Wr=!0),k.id!==H&&(H=k.id,bn=!0),zs||q!==y){re.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),St.setValue(A,"projectionMatrix",y.projectionMatrix),St.setValue(A,"viewMatrix",y.matrixWorldInverse);const pn=St.map.cameraPosition;pn!==void 0&&pn.setValue(A,qe.setFromMatrixPosition(y.matrixWorld)),ke.logarithmicDepthBuffer&&St.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),q!==y&&(q=y,bn=!0,Wr=!0)}if(Oe.needsLights&&(ut.state.directionalShadowMap.length>0&&St.setValue(A,"directionalShadowMap",ut.state.directionalShadowMap,U),ut.state.spotShadowMap.length>0&&St.setValue(A,"spotShadowMap",ut.state.spotShadowMap,U),ut.state.pointShadowMap.length>0&&St.setValue(A,"pointShadowMap",ut.state.pointShadowMap,U)),F.isSkinnedMesh){St.setOptional(A,F,"bindMatrix"),St.setOptional(A,F,"bindMatrixInverse");const an=F.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),St.setValue(A,"boneTexture",an.boneTexture,U))}F.isBatchedMesh&&(St.setOptional(A,F,"batchingTexture"),St.setValue(A,"batchingTexture",F._matricesTexture,U),St.setOptional(A,F,"batchingIdTexture"),St.setValue(A,"batchingIdTexture",F._indirectTexture,U),St.setOptional(A,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(A,"batchingColorTexture",F._colorsTexture,U));const On=V.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Je.update(F,V,En),(bn||Oe.receiveShadow!==F.receiveShadow)&&(Oe.receiveShadow=F.receiveShadow,St.setValue(A,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(dn.envMap.value=be,dn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(dn.envMapIntensity.value=N.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=nS()),bn&&(St.setValue(A,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Rg(dn,Wr),fe&&k.fog===!0&&ze.refreshFogUniforms(dn,fe),ze.refreshMaterialUniforms(dn,k,Ge,Xe,w.state.transmissionRenderTarget[y.id]),xo.upload(A,xf(Oe),dn,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xo.upload(A,xf(Oe),dn,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(A,"center",F.center),St.setValue(A,"modelViewMatrix",F.modelViewMatrix),St.setValue(A,"normalMatrix",F.normalMatrix),St.setValue(A,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const an=k.uniformsGroups;for(let pn=0,bl=an.length;pn<bl;pn++){const ds=an[pn];ie.update(ds,En),ie.bind(ds,En)}}return En}function Rg(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Pg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(y,N,V){const k=_.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_.get(y.texture).__webglTexture=N,_.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const V=_.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Lg=A.createFramebuffer();this.setRenderTarget=function(y,N=0,V=0){B=y,L=N,O=V;let k=null,F=!1,fe=!1;if(y){const ge=_.get(y);if(ge.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(A.FRAMEBUFFER,ge.__webglFramebuffer),z.copy(y.viewport),G.copy(y.scissor),Z=y.scissorTest,re.viewport(z),re.scissor(G),re.setScissorTest(Z),H=-1;return}else if(ge.__webglFramebuffer===void 0)U.setupRenderTarget(y);else if(ge.__hasExternalTextures)U.rebindTextures(y,_.get(y.texture).__webglTexture,_.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ve=y.depthTexture;if(ge.__boundDepthTexture!==Ve){if(Ve!==null&&_.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(y)}}const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(fe=!0);const Le=_.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?k=Le[N][V]:k=Le[N],F=!0):y.samples>0&&U.useMultisampledRTT(y)===!1?k=_.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?k=Le[V]:k=Le,z.copy(y.viewport),G.copy(y.scissor),Z=y.scissorTest}else z.copy(Y).multiplyScalar(Ge).floor(),G.copy(Q).multiplyScalar(Ge).floor(),Z=Me;if(V!==0&&(k=Lg),re.bindFramebuffer(A.FRAMEBUFFER,k)&&re.drawBuffers(y,k),re.viewport(z),re.scissor(G),re.setScissorTest(Z),F){const ge=_.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,V)}else if(fe){const ge=N;for(let be=0;be<y.textures.length;be++){const Le=_.get(y.textures[be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+be,Le.__webglTexture,V,ge)}}else if(y!==null&&V!==0){const ge=_.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ge.__webglTexture,V)}H=-1},this.readRenderTargetPixels=function(y,N,V,k,F,fe,Se,ge=0){if(!(y&&y.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){re.bindFramebuffer(A.FRAMEBUFFER,be);try{const Le=y.textures[ge],Ve=Le.format,Fe=Le.type;if(!ke.textureFormatReadable(Ve)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Fe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&V>=0&&V<=y.height-F&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ge),A.readPixels(N,V,k,F,se.convert(Ve),se.convert(Fe),fe))}finally{const Le=B!==null?_.get(B).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,k,F,fe,Se,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=_.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(N>=0&&N<=y.width-k&&V>=0&&V<=y.height-F){re.bindFramebuffer(A.FRAMEBUFFER,be);const Le=y.textures[ge],Ve=Le.format,Fe=Le.type;if(!ke.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ze),A.bufferData(A.PIXEL_PACK_BUFFER,fe.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ge),A.readPixels(N,V,k,F,se.convert(Ve),se.convert(Fe),0);const gt=B!==null?_.get(B).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,gt);const Lt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await E_(A,Lt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,fe),A.deleteBuffer(Ze),A.deleteSync(Lt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,V=0){const k=Math.pow(2,-V),F=Math.floor(y.image.width*k),fe=Math.floor(y.image.height*k),Se=N!==null?N.x:0,ge=N!==null?N.y:0;U.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,V,0,0,Se,ge,F,fe),re.unbindTexture()};const Dg=A.createFramebuffer(),Ig=A.createFramebuffer();this.copyTextureToTexture=function(y,N,V=null,k=null,F=0,fe=null){fe===null&&(F!==0?(_a("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=F,F=0):fe=0);let Se,ge,be,Le,Ve,Fe,Ze,gt,Lt;const Dt=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(V!==null)Se=V.max.x-V.min.x,ge=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,Ve=V.min.y,Fe=V.isBox3?V.min.z:0;else{const On=Math.pow(2,-F);Se=Math.floor(Dt.width*On),ge=Math.floor(Dt.height*On),y.isDataArrayTexture?be=Dt.depth:y.isData3DTexture?be=Math.floor(Dt.depth*On):be=1,Le=0,Ve=0,Fe=0}k!==null?(Ze=k.x,gt=k.y,Lt=k.z):(Ze=0,gt=0,Lt=0);const vt=se.convert(N.format),Oe=se.convert(N.type);let ut;N.isData3DTexture?(U.setTexture3D(N,0),ut=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),ut=A.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),ut=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const rt=A.getParameter(A.UNPACK_ROW_LENGTH),En=A.getParameter(A.UNPACK_IMAGE_HEIGHT),zs=A.getParameter(A.UNPACK_SKIP_PIXELS),bn=A.getParameter(A.UNPACK_SKIP_ROWS),Wr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Dt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Dt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Le),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ve),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Fe);const St=y.isDataArrayTexture||y.isData3DTexture,dn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const On=_.get(y),an=_.get(N),pn=_.get(On.__renderTarget),bl=_.get(an.__renderTarget);re.bindFramebuffer(A.READ_FRAMEBUFFER,pn.__webglFramebuffer),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,bl.__webglFramebuffer);for(let ds=0;ds<be;ds++)St&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(y).__webglTexture,F,Fe+ds),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(N).__webglTexture,fe,Lt+ds)),A.blitFramebuffer(Le,Ve,Se,ge,Ze,gt,Se,ge,A.DEPTH_BUFFER_BIT,A.NEAREST);re.bindFramebuffer(A.READ_FRAMEBUFFER,null),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||_.has(y)){const On=_.get(y),an=_.get(N);re.bindFramebuffer(A.READ_FRAMEBUFFER,Dg),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ig);for(let pn=0;pn<be;pn++)St?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,On.__webglTexture,F,Fe+pn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,On.__webglTexture,F),dn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,an.__webglTexture,fe,Lt+pn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,an.__webglTexture,fe),F!==0?A.blitFramebuffer(Le,Ve,Se,ge,Ze,gt,Se,ge,A.COLOR_BUFFER_BIT,A.NEAREST):dn?A.copyTexSubImage3D(ut,fe,Ze,gt,Lt+pn,Le,Ve,Se,ge):A.copyTexSubImage2D(ut,fe,Ze,gt,Le,Ve,Se,ge);re.bindFramebuffer(A.READ_FRAMEBUFFER,null),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else dn?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(ut,fe,Ze,gt,Lt,Se,ge,be,vt,Oe,Dt.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(ut,fe,Ze,gt,Lt,Se,ge,be,vt,Dt.data):A.texSubImage3D(ut,fe,Ze,gt,Lt,Se,ge,be,vt,Oe,Dt):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,fe,Ze,gt,Se,ge,vt,Oe,Dt.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,fe,Ze,gt,Dt.width,Dt.height,vt,Dt.data):A.texSubImage2D(A.TEXTURE_2D,fe,Ze,gt,Se,ge,vt,Oe,Dt);A.pixelStorei(A.UNPACK_ROW_LENGTH,rt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,En),A.pixelStorei(A.UNPACK_SKIP_PIXELS,zs),A.pixelStorei(A.UNPACK_SKIP_ROWS,bn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Wr),fe===0&&N.generateMipmaps&&A.generateMipmap(ut),re.unbindTexture()},this.initRenderTarget=function(y){_.get(y).__webglFramebuffer===void 0&&U.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?U.setTextureCube(y,0):y.isData3DTexture?U.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?U.setTexture2DArray(y,0):U.setTexture2D(y,0),re.unbindTexture()},this.resetState=function(){L=0,O=0,B=null,re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const es={colors:{bg:331034,fog:331034,champagneGold:16767334,deepGreen:202762,accentRed:10027008},particles:{count:1500,dustCount:2e3,snowCount:1e3,treeHeight:24,treeRadius:8},performance:{responsiveParticles:!0,smallDeviceWidth:768,particleScale:{ornaments:.6,dust:.5,snow:.7}},camera:{z:50},preload:{autoScanLocal:!0,scanCount:5,images:["https://images.unsplash.com/photo-1545048702-79362596cdc9?q=80&w=600","https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=600","https://images.unsplash.com/photo-1480733992048-df39e3947a38?q=80&w=600","https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600"]}};class sS{_core;constructor(){this._core=null}init(e){const n=new cm;n.background=new Ye(es.colors.bg),n.fog=new Qh(es.colors.fog,.015);const i=new Zi;n.add(i);const s=new vn(42,window.innerWidth/window.innerHeight,.1,1e3);s.position.set(0,2,es.camera.z);const r=new iS({antialias:!0,alpha:!0,powerPreference:"high-performance"});return r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.toneMapping=zh,r.toneMappingExposure=2.2,e.innerHTML="",e.appendChild(r.domElement),this._core=Ug({scene:n,mainGroup:i,camera:s,renderer:r}),this._core}get core(){if(!this._core)throw new Error("Scene has not been initialized");return this._core}resize(){if(!this._core)return;const{camera:e,renderer:n}=this._core;e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}dispose(){this._core&&(this._core.renderer.dispose(),this._core.scene.clear(),this._core=null)}}class rS extends cm{constructor(){super(),this.name="RoomEnvironment";const e=new ls;e.deleteAttribute("uv");const n=new Zn({side:cn}),i=new Zn,s=new Em(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ot(e,n);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new um(e,i,6),o=new Gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ot(e,ir(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ot(e,ir(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ot(e,ir(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new ot(e,ir(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new ot(e,ir(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new ot(e,ir(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function ir(t){return new K1({color:0,emissive:16777215,emissiveIntensity:t})}class aS{pmremGenerator;core;constructor(e){this.core=e,this.pmremGenerator=null}applyEnvironment(){this.pmremGenerator=new dh(this.core.renderer),this.core.scene.environment=this.pmremGenerator.fromScene(new rS,.04).texture}setupLights(){const{scene:e,mainGroup:n}=this.core,i=new av(16777215,.6);e.add(i);const s=new Em(16755200,2,20);s.position.set(0,5,0),n.add(s),n.add(s.clone());const r=new sd(16764006,1200);r.position.set(30,40,40),r.angle=.5,r.penumbra=.5,e.add(r);const a=new sd(6719743,800);a.position.set(-30,20,-30),e.add(a);const o=new rv(16772795,.8);o.position.set(0,0,50),e.add(o)}dispose(){this.pmremGenerator?.dispose(),this.pmremGenerator=null}}class rc{mesh;type;isDust;posTree;posScatter;baseScale;spinSpeed;constructor(e,n,i,s){this.mesh=e,this.type=n,this.isDust=!!s?.isDust,this.posTree=new P,this.posScatter=new P,this.baseScale=e.scale.x;const r=n==="PHOTO"?.3:2;this.spinSpeed=new P((Math.random()-.5)*r,(Math.random()-.5)*r,(Math.random()-.5)*r),this.calculatePositions(i)}setTreePosition(e,n,i){this.posTree.set(e,n,i)}update(e,n){const{mode:i,focusTarget:s,clock:r,core:a}=e;let o=this.posTree;i==="SCATTER"||i==="FOCUS"?o=this.posScatter:o=this.posTree;const l=i==="TREE"?3:2;this.mesh.position.lerp(o,l*n),i==="SCATTER"||i==="FOCUS"&&this.mesh!==s?(this.mesh.rotation.x+=this.spinSpeed.x*n,this.mesh.rotation.y+=this.spinSpeed.y*n,this.mesh.rotation.z+=this.spinSpeed.z*n):(i==="TREE"||i==="FOCUS")&&(this.type==="PHOTO"?(this.mesh.lookAt(0,this.mesh.position.y,0),this.mesh.rotateY(Math.PI)):(this.mesh.rotation.x=Co.lerp(this.mesh.rotation.x,0,n),this.mesh.rotation.z=Co.lerp(this.mesh.rotation.z,0,n),this.mesh.rotation.y+=.5*n)),i==="FOCUS"&&this.mesh===s&&this.mesh.lookAt(a.camera.position);let c=this.baseScale;this.isDust?(c=this.baseScale*(.8+.4*Math.sin(r.elapsedTime*4+this.mesh.id)),i==="TREE"&&(c=0)):i!=="TREE"&&this.type==="PHOTO"&&(c=this.baseScale*2.5),this.mesh.scale.lerp(new P(c,c,c),4*n)}calculatePositions(e){if(this.type==="PHOTO"){this.posTree.set(0,0,0);const f=8+Math.random()*12,p=Math.random()*Math.PI*2,g=Math.acos(2*Math.random()-1);this.posScatter.set(f*Math.sin(g)*Math.cos(p),f*Math.sin(g)*Math.sin(p),f*Math.cos(g));return}const n=e.particles.treeHeight,i=n/2;let s=Math.random();s=Math.pow(s,.8);const r=s*n-i;let a=e.particles.treeRadius*(1-s);a<.5&&(a=.5);const o=s*50*Math.PI+Math.random()*Math.PI,l=a*(.8+Math.random()*.4);this.posTree.set(Math.cos(o)*l,r,Math.sin(o)*l);const c=this.isDust?12+Math.random()*20:8+Math.random()*12,h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1);this.posScatter.set(c*Math.sin(u)*Math.cos(h),c*Math.sin(u)*Math.sin(h),c*Math.cos(u))}}class oS{builders;config;constructor(e){this.config=e,this.builders=new Map,this.registerDefaults()}create(e){const n=this.builders.get(e);if(!n)throw new Error("Missing ornament builder for type: "+e);return n()}registerDefaults(){const e=new Lo(.5,32,32),n=new ls(.55,.55,.55),i=this.createCandyCaneGeometry(),s=new Zn({color:this.config.colors.champagneGold,metalness:1,roughness:.1,envMapIntensity:2,emissive:4469504,emissiveIntensity:.3}),r=new Zn({color:this.config.colors.deepGreen,metalness:.2,roughness:.8,emissive:8704,emissiveIntensity:.2}),a=new j1({color:this.config.colors.accentRed,metalness:.3,roughness:.2,clearcoat:1,emissive:3342336}),o=new Zn({map:this.createCandyCaneTexture(),roughness:.4}),l=new Zn({color:this.config.colors.accentRed,roughness:.4,metalness:.1}),c=new Zn({color:16777215,roughness:.9,metalness:0});this.builders.set("GIFT_GREEN",()=>new ot(n,r)),this.builders.set("GIFT_GOLD",()=>new ot(n,s)),this.builders.set("GOLDEN_BALL",()=>new ot(e,s)),this.builders.set("RED_BALL",()=>new ot(e,a)),this.builders.set("CANDY_CANE",()=>new ot(i,o)),this.builders.set("SANTA_HAT",()=>this.createSantaHatMesh(l,c))}createCandyCaneTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,128,128),n.fillStyle="#880000",n.beginPath();const i=64;for(let r=-256;r<512;r+=i)n.moveTo(r,0),n.lineTo(r+i,128),n.lineTo(r+i-i/2,256),n.lineTo(r-i/2,0);n.fill();const s=new d1(e);return s.wrapS=da,s.wrapT=da,s.repeat.set(5,5),s}createCandyCaneGeometry(){const e=new dm([new P(0,-.5,0),new P(0,.3,0),new P(.1,.5,0),new P(.3,.4,0)]);return new lu(e,16,.12,8,!1)}createSantaHatMesh(e,n){const i=new Zi,s=new ot(new tu(.35,.9,24),e);s.position.y=.35,i.add(s);const r=new ot(new zo(.45,.45,.15,24),n);r.position.y=-.05,i.add(r);const a=new ot(new Lo(.15,16,16),n);return a.position.set(.05,.8,.05),i.add(a),i}}class lS{ornaments;photoGroup;factory;core;clock;config;constructor(e,n,i=es){this.core=e,this.clock=n,this.config=i,this.ornaments=[],this.photoGroup=new Zi,this.factory=new oS(i),this.core.mainGroup.add(this.photoGroup)}populateBaseDecorations(){const e=this.getResponsiveParticleCount(this.config.particles.count,"ornaments");for(let n=0;n<e;n++){const i=this.pickRandomType(),s=this.factory.create(i),r=.4+Math.random()*.5;s.scale.set(r,r,r),s.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),this.core.mainGroup.add(s),this.ornaments.push(new rc(s,i,this.config))}this.createStar(),this.createDust()}addPhoto(e){e.colorSpace=_n;let n=1.2,i=1.2;if(e.image){const m=e.image,d=m.width/m.height;d>1?i=n/d:n=i*d}const s=.05,r=.05,a=n+s*2,o=i+s*2,l=new ls(a,o,r),c=new Zn({color:this.config.colors.champagneGold,metalness:1,roughness:.1}),h=new ot(l,c),u=new La(n,i),f=new va({map:e,side:Jn}),p=new ot(u,f);p.position.z=r/2+.001;const g=new Zi;g.add(h),g.add(p);const M=.8;g.scale.set(M,M,M),this.photoGroup.add(g),this.ornaments.push(new rc(g,"PHOTO",this.config)),this.updatePhotoLayout()}update(e,n){this.ornaments.length&&this.ornaments.forEach(i=>i.update({mode:e.mode,focusTarget:e.focusTarget,clock:this.clock,core:this.core},n))}getRandomPhotoMesh(){const e=this.ornaments.filter(i=>i.type==="PHOTO");if(!e.length)return null;const n=Math.floor(Math.random()*e.length);return e[n].mesh}dispose(){this.photoGroup.clear(),this.ornaments.splice(0,this.ornaments.length)}pickRandomType(){const e=Math.random();return e<.35?"GIFT_GREEN":e<.65?"GIFT_GOLD":e<.88?"GOLDEN_BALL":e<.93?"RED_BALL":e<.98?"SANTA_HAT":"CANDY_CANE"}createStar(){const e=new Vo,n=5,i=1.5,s=.7;for(let l=0;l<n*2;l++){const c=l*Math.PI/n+Math.PI/2,h=l%2===0?i:s,u=Math.cos(c)*h,f=Math.sin(c)*h;l===0?e.moveTo(u,f):e.lineTo(u,f)}e.closePath();const r=new ru(e,{depth:.4,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:2});r.center();const a=new Zn({color:16768392,emissive:16755200,emissiveIntensity:1,metalness:1,roughness:0}),o=new ot(r,a);o.position.set(0,this.config.particles.treeHeight/2+1.2,0),this.core.mainGroup.add(o)}createDust(){const e=new ou(.08,0),n=new va({color:16772795,transparent:!0,opacity:.8}),i=this.getResponsiveParticleCount(this.config.particles.dustCount,"dust");for(let s=0;s<i;s++){const r=new ot(e,n);r.scale.setScalar(.5+Math.random()),this.core.mainGroup.add(r),this.ornaments.push(new rc(r,"DUST",this.config,{isDust:!0}))}}updatePhotoLayout(){const e=this.ornaments.filter(o=>o.type==="PHOTO"),n=e.length;if(!n)return;const i=this.config.particles.treeHeight*.9,s=-i/2,r=i/n,a=3;e.forEach((o,l)=>{const c=s+r*l+r/2,h=this.config.particles.treeHeight,u=(c+h/2)/h;let f=this.config.particles.treeRadius*(1-u);f<1&&(f=1);const p=f+3,g=u*Math.PI*2*a+Math.PI/4;o.setTreePosition(Math.cos(g)*p,c,Math.sin(g)*p)})}getResponsiveParticleCount(e,n){const i=this.config.performance;if(!i?.responsiveParticles||typeof window>"u"||window.innerWidth>=i.smallDeviceWidth)return e;const s=i.particleScale?.[n]??1;return Math.max(1,Math.floor(e*s))}}class cS{snow;scene;config;flakes;dummy;constructor(e,n=es){this.scene=e,this.config=n,this.snow=null,this.flakes=[],this.dummy=new Gt}create(){const e=this.getResponsiveParticleCount(this.config.particles.snowCount),n=this.createSnowflakeGeometry(),i=new Zn({color:16777215,side:Jn,roughness:.95,metalness:.05});this.snow=new um(n,i,e),this.snow.instanceMatrix.setUsage(S_),this.scene.add(this.snow),this.flakes.length=0;for(let s=0;s<e;s++){const r={position:this.randomSpawnPosition(),fallSpeed:Math.random()*.2+.05,swaySpeed:Math.random()*.5+.1,swayOffset:Math.random()*Math.PI*2,tiltAxis:new P(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),tiltAngle:Math.random()*Math.PI*2,spinAngle:Math.random()*Math.PI*2,spinSpeed:Math.random()*2+.5,scale:Math.random()*.7+.4};this.flakes.push(r),this.writeMatrix(s,r)}}update(e){if(!this.snow)return;const n=e.getDelta();for(let i=0;i<this.flakes.length;i++){const s=this.flakes[i];s.position.y-=s.fallSpeed,s.position.x+=Math.sin(e.elapsedTime*1.5+s.swayOffset)*s.swaySpeed*.02,s.position.z+=Math.cos(e.elapsedTime*1.2+s.swayOffset)*s.swaySpeed*.015,s.spinAngle+=s.spinSpeed*n,s.position.y<-40&&(s.position.copy(this.randomSpawnPosition(!0)),s.tiltAxis=new P(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1).normalize(),s.tiltAngle=Math.random()*Math.PI*2,s.spinAngle=Math.random()*Math.PI*2,s.spinSpeed=Math.random()*2+.5,s.scale=Math.random()*.7+.4),this.writeMatrix(i,s)}this.snow.instanceMatrix.needsUpdate=!0}dispose(){this.snow&&(this.scene.remove(this.snow),this.snow.geometry.dispose(),this.snow.material.dispose(),this.snow.dispose(),this.snow=null,this.flakes.length=0)}writeMatrix(e,n){if(!this.snow)return;const i=new Ds().setFromAxisAngle(n.tiltAxis,n.tiltAngle),s=new P(0,0,1).applyQuaternion(i),r=new Ds().setFromAxisAngle(s,n.spinAngle);this.dummy.position.copy(n.position),this.dummy.quaternion.copy(i.multiply(r)),this.dummy.scale.setScalar(n.scale),this.dummy.updateMatrix(),this.snow.setMatrixAt(e,this.dummy.matrix)}createSnowflakeGeometry(){const e=new Vo,n=360;for(let i=0;i<=n;i++){const s=i/n*Math.PI*2,r=this.computeSnowflakePoint(s);i===0?e.moveTo(r.x,r.y):e.lineTo(r.x,r.y)}return new au(e)}computeSnowflakePoint(e){let n={x:e,y:.25};return n=this.fieldA(this.fieldB(n,5)),new te(n.y*Math.cos(n.x),n.y*Math.sin(n.x))}fieldA(e){return e.y+=.02*Math.floor(Math.cos(e.x*6)*5),e.y+=.01*Math.floor(10*Math.cos(e.x*30)),e.y+=.5*Math.cos(e.y*10),e}fieldB(e,n){return e.y+=.1*Math.cos(e.y*100+10),e.y+=.1*Math.cos(e.y*20+n),e.y+=.04*Math.cos(e.y*10+10),e}randomSpawnPosition(e=!1){const r=e?30:-20,a=e?50:40;return new P(Co.randFloatSpread(120),Co.randFloat(r,a),-(25+Math.random()*45))}getResponsiveParticleCount(e){const n=this.config.performance;if(!n?.responsiveParticles||typeof window>"u"||window.innerWidth>=n.smallDeviceWidth)return e;const i=n.particleScale?.snow??1;return Math.max(1,Math.floor(e*i))}}class hS{loader;options;constructor(e){this.options=e,this.loader=new tv}loadPreconfigured(){if(es.preload.images.forEach(e=>{this.loader.load(e,n=>this.handleTexture(n),void 0,n=>console.error("Texture load error",n))}),es.preload.autoScanLocal)for(let e=1;e<=es.preload.scanCount;e++){const n="./images/"+e+".jpg",i="./images/"+e+".png";this.loader.load(n,s=>this.handleTexture(s),void 0,()=>{this.loader.load(i,s=>this.handleTexture(s))})}}load(e){if(e&&e.length>0){e.forEach(n=>{this.loader.load(n,i=>this.handleTexture(i),void 0,i=>console.error("Texture load error",i))});return}this.loadPreconfigured()}handleTexture(e){e.colorSpace=_n,this.options.onTexture(e)}}const Mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Da{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uS=new Ho(-1,1,1,-1,0,1);class fS extends rn{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}}const dS=new fS;class Pm{constructor(e){this._mesh=new ot(dS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pS extends Da{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ro.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pm(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cd extends Da{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class mS extends Da{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gS{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new te);this._width=i.width,this._height=i.height,n=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pS(Mo),this.copyPass.material.blending=gi,this.clock=new bm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cd!==void 0&&(a instanceof Cd?i=!0:a instanceof mS&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _S extends Da{constructor(e,n,i=null,s=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,n,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const vS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Mr extends Da{constructor(e,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,a,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new xn(r,a,{type:Ln});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new xn(r,a,{type:Ln});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=vS;this.highPassUniforms=Ro.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new te(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ro.clone(Mo.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,premultipliedAlpha:!0,blending:Mc,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new va,this._fsQuad=new Pm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new te(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,n,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const n=[],i=e/3;for(let s=0;s<e;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Mr.BlurDirectionX=new te(1,0);Mr.BlurDirectionY=new te(0,1);class xS{core;constructor(e){this.core=e}createComposer(){const{scene:e,camera:n,renderer:i}=this.core,s=new _S(e,n),r=new Mr(new te(window.innerWidth,window.innerHeight),1.5,.4,.85);r.threshold=.65,r.strength=.5,r.radius=.4;const a=new gS(i);return a.addPass(s),a.addPass(r),a}}class MS{sceneManager;environmentManager;ornamentSystem;snowSystem;composer;baseCameraPos;baseLookAt;focusTargetWorld;focusDirection;focusCameraPos;clock;animationId;resizeHandler;state;container;constructor(e){this.container=e,this.sceneManager=new sS,this.environmentManager=null,this.ornamentSystem=null,this.snowSystem=null,this.composer=null,this.baseCameraPos=null,this.baseLookAt=new P(0,0,0),this.focusTargetWorld=new P,this.focusDirection=new P,this.focusCameraPos=new P,this.clock=new bm,this.animationId=null,this.resizeHandler=()=>this.handleResize(),this.state={mode:"TREE",focusIndex:-1,focusTarget:null,hand:{detected:!1,x:0,y:0},rotation:{x:0,y:0}}}mount(e){const n=this.sceneManager.init(this.container);this.baseCameraPos=n.camera.position.clone(),this.environmentManager=new aS(n),this.environmentManager.applyEnvironment(),this.environmentManager.setupLights(),this.ornamentSystem=new lS(n,this.clock),this.ornamentSystem.populateBaseDecorations(),new hS({onTexture:r=>this.ornamentSystem?.addPhoto(r)}).load(e),this.snowSystem=new cS(n.scene),this.snowSystem.create();const s=new xS(n);this.composer=s.createComposer(),window.addEventListener("resize",this.resizeHandler),this.animate()}setHandTrackingData(e){if(!e){this.state.hand.detected=!1,this.state.focusTarget=null;return}if(!e.detected){this.state.hand.detected=!1,this.state.focusTarget=null;return}this.state.hand.detected=!0,this.state.hand.x=e.position.x,this.state.hand.y=e.position.y;const{extensionRatio:n,pinchRatio:i}=e.ratios;n<1.5?(this.state.mode==="FOCUS"?this.state.mode="SCATTER":this.state.mode="TREE",this.state.focusTarget=null):i<.35?this.state.mode==="SCATTER"&&(this.state.mode="FOCUS",this.state.focusTarget=this.ornamentSystem?.getRandomPhotoMesh()??null):n>1.7&&(this.state.mode="SCATTER",this.state.focusTarget=null)}addPhotoTexture(e){this.ornamentSystem?.addPhoto(e)}destroy(){this.animationId!==null&&(cancelAnimationFrame(this.animationId),this.animationId=null),window.removeEventListener("resize",this.resizeHandler),this.environmentManager?.dispose(),this.environmentManager=null,this.snowSystem?.dispose(),this.snowSystem=null,this.ornamentSystem?.dispose(),this.ornamentSystem=null,this.sceneManager.dispose()}animate=()=>{this.animationId=requestAnimationFrame(this.animate);const e=this.getCore();if(!this.composer||!this.ornamentSystem)return;const n=this.clock.getDelta();this.updateRotation(n),this.updateCameraFocus(n),e.mainGroup.updateWorldMatrix(!0,!1),this.ornamentSystem.update(this.state,n),this.snowSystem?.update(this.clock),this.composer.render()};updateRotation(e){if(this.state.mode==="SCATTER"&&this.state.hand.detected){const i=this.state.hand.x*Math.PI*.9,s=this.state.hand.y*Math.PI*.25;this.state.rotation.y+=(i-this.state.rotation.y)*3*e,this.state.rotation.x+=(s-this.state.rotation.x)*3*e}else this.state.mode==="TREE"?(this.state.rotation.y+=.3*e,this.state.rotation.x+=(0-this.state.rotation.x)*2*e):this.state.rotation.y+=.1*e;const n=this.getCore();n.mainGroup.rotation.x=this.state.rotation.x,n.mainGroup.rotation.y=this.state.rotation.y}updateCameraFocus(e){const n=this.getCore();if(this.baseCameraPos){if(this.state.mode==="FOCUS"&&this.state.focusTarget){this.state.focusTarget.getWorldPosition(this.focusTargetWorld),this.focusDirection.subVectors(n.camera.position,this.focusTargetWorld).normalize(),this.focusDirection.lengthSq()<1e-6&&this.focusDirection.set(0,0,1),this.focusCameraPos.copy(this.focusTargetWorld).addScaledVector(this.focusDirection,6),n.camera.position.lerp(this.focusCameraPos,3*e),n.camera.lookAt(this.focusTargetWorld);return}n.camera.position.lerp(this.baseCameraPos,2*e),n.camera.lookAt(this.baseLookAt)}}handleResize(){this.sceneManager.resize(),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight)}getCore(){return this.sceneManager.core}}const SS=Ra({__name:"ChristmasTree",props:{handTrackingData:{},preloadImages:{}},emits:["tree-render-completed"],setup(t,{emit:e}){const n=t,i=e,s=fi(null);let r=null;Ng(()=>n.handTrackingData,l=>{r?.setHandTrackingData(l??null)},{deep:!0});const a=()=>{s.value&&(r=new MS(s.value),r.mount(n.preloadImages??void 0),n.handTrackingData&&r.setHandTrackingData(n.handTrackingData),i("tree-render-completed"))},o=()=>{r?.destroy(),r=null};return Oh(a),Bp(o),kp(o),(l,c)=>(Rs(),Bo("div",{ref_key:"threeContainer",ref:s,class:"absolute top-0 left-0 z-[1] block h-screen w-full overflow-hidden bg-[#282c34]"},null,512))}}),yS=["frameborder","border","marginwidth","marginheight","width","height","src","allow"],ES=Ra({__name:"NeteasePlayer",props:{frameborder:{},border:{},marginwidth:{},marginheight:{},width:{},height:{},src:{},iframeAllow:{}},setup(t){return(e,n)=>(Rs(),Bo("iframe",{frameborder:t.frameborder||"no",border:t.border||"0",marginwidth:t.marginwidth||"0",marginheight:t.marginheight||"0",width:t.width||"330",height:t.height||"86",src:t.src||"https://music.163.com/outchain/player?type=2&id=1999170057&auto=1&height=66",allow:t.iframeAllow||"autoplay; encrypted-media;"},null,8,yS))}});var Sr=typeof self<"u"?self:{};function Ms(){throw Error("Invalid UTF8")}function Rd(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let lo,ac;const bS=typeof TextDecoder<"u";let TS;const AS=typeof TextEncoder<"u";function Lm(t){if(AS)t=(TS||=new TextEncoder).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){const r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var uu,Do;e:{for(var Pd=["CLOSURE_FLAGS"],oc=Sr,lc=0;lc<Pd.length;lc++)if((oc=oc[Pd[lc]])==null){Do=null;break e}Do=oc}var Ea,Ld=Do&&Do[610401301];uu=Ld!=null&&Ld;const Dd=Sr.navigator;function gh(t){return!!uu&&!!Ea&&Ea.brands.some((({brand:e})=>e&&e.indexOf(t)!=-1))}function Gn(t){var e;return(e=Sr.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Ji(){return!!uu&&!!Ea&&Ea.brands.length>0}function cc(){return Ji()?gh("Chromium"):(Gn("Chrome")||Gn("CriOS"))&&!(!Ji()&&Gn("Edge"))||Gn("Silk")}function qo(t){return qo[" "](t),t}Ea=Dd&&Dd.userAgentData||null,qo[" "]=function(){};var wS=!Ji()&&(Gn("Trident")||Gn("MSIE"));!Gn("Android")||cc(),cc(),Gn("Safari")&&(cc()||!Ji()&&Gn("Coast")||!Ji()&&Gn("Opera")||!Ji()&&Gn("Edge")||(Ji()?gh("Microsoft Edge"):Gn("Edg/"))||Ji()&&gh("Opera"));var Dm={},sa=null;function CS(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return(function(r,a){function o(c){for(;l<r.length;){const h=r.charAt(l++),u=sa[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}Im();let l=0;for(;;){const c=o(-1),h=o(0),u=o(64),f=o(64);if(f===64&&c===-1)break;a(c<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),f!=64&&a(u<<6&192|f))}})(t,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function Im(){if(!sa){sa={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));Dm[n]=i;for(let s=0;s<i.length;s++){const r=i[s];sa[r]===void 0&&(sa[r]=s)}}}}var Um=typeof Uint8Array<"u",Nm=!wS&&typeof btoa=="function";function Id(t){if(!Nm){var e;e===void 0&&(e=0),Im(),e=Dm[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let l=0,c=0;for(;l<t.length-2;l+=3){var s=t[l],r=t[l+1],a=t[l+2],o=e[s>>2];s=e[(3&s)<<4|r>>4],r=e[(15&r)<<2|a>>6],a=e[63&a],n[c++]=o+s+r+a}switch(o=0,a=i,t.length-l){case 2:a=e[(15&(o=t[l+1]))<<2]||i;case 1:t=t[l],n[c]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const Ud=/[-_.]/g,RS={"-":"+",_:"/",".":"="};function PS(t){return RS[t]||""}function Fm(t){if(!Nm)return CS(t);Ud.test(t)&&(t=t.replace(Ud,PS)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Us(t){return Um&&t!=null&&t instanceof Uint8Array}var yr={};function Ns(){return LS||=new Ni(null,yr)}function fu(t){Om(yr);var e=t.g;return(e=e==null||Us(e)?e:typeof e=="string"?Fm(e):null)==null?e:t.g=e}var Ni=class{h(){return new Uint8Array(fu(this)||0)}constructor(t,e){if(Om(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let LS,DS;function Om(t){if(t!==yr)throw Error("illegal external caller")}function Bm(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function _h(t){return Bm(t=Error(t),"warning"),t}function du(t){if(t!=null){var e=DS??={},n=e[t]||0;n>=5||(e[t]=n+1,Bm(t=Error(),"incident"),(function(i){Sr.setTimeout((()=>{throw i}),0)})(t))}}var Yo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Nr(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}var IS=Nr("jas",void 0,!0),Nd=Nr(void 0,"0di"),Qr=Nr(void 0,"1oa"),Er=Nr(void 0,Symbol()),US=Nr(void 0,"0actk"),km=Nr(void 0,"8utk");const Ie=Yo?IS:"Ea",zm={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},Vm=Object.defineProperties;function jo(t,e){Yo||Ie in t||Vm(t,zm),t[Ie]|=e}function zt(t,e){Yo||Ie in t||Vm(t,zm),t[Ie]=e}function Fr(t){return jo(t,34),t}function NS(t,e){zt(e,-15615&(0|t))}function vh(t,e){zt(e,-15581&(34|t))}function Ko(){return typeof BigInt=="function"}function Mn(t){return Array.prototype.slice.call(t)}var pu,Ia={};function Jo(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function mu(t,e){if(t!=null){if(typeof t=="string")t=t?new Ni(t,yr):Ns();else if(t.constructor!==Ni)if(Us(t))t=t.length?new Ni(new Uint8Array(t),yr):Ns();else{if(!e)throw Error();t=void 0}}return t}const Fd=[];function cs(t){if(2&t)throw Error()}zt(Fd,55),pu=Object.freeze(Fd);class Od{constructor(e,n,i){this.g=e,this.h=n,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}function gu(t){return Er?t[Er]:void 0}var FS=Object.freeze({});function $o(t){return t.Na=!0,t}var OS=$o((t=>typeof t=="number")),Bd=$o((t=>typeof t=="string")),BS=$o((t=>typeof t=="boolean")),Zo=typeof Sr.BigInt=="function"&&typeof Sr.BigInt(0)=="bigint";function ts(t){var e=t;if(Bd(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(OS(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Zo?BigInt(t):t=BS(t)?t?"1":"0":Bd(t)?t.trim()||"0":String(t)}var xh=$o((t=>Zo?t>=zS&&t<=GS:t[0]==="-"?kd(t,kS):kd(t,VS)));const kS=Number.MIN_SAFE_INTEGER.toString(),zS=Zo?BigInt(Number.MIN_SAFE_INTEGER):void 0,VS=Number.MAX_SAFE_INTEGER.toString(),GS=Zo?BigInt(Number.MAX_SAFE_INTEGER):void 0;function kd(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}const HS=typeof Uint8Array.prototype.slice=="function";let Gm,xt=0,Ut=0;function zd(t){const e=t>>>0;xt=e,Ut=(t-e)/4294967296>>>0}function Fs(t){if(t<0){zd(-t);const[e,n]=Mu(xt,Ut);xt=e>>>0,Ut=n>>>0}else zd(t)}function _u(t){const e=Gm||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Ut=0,xt=e.getUint32(0,!0)}function vu(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:ba(t,e)}function xu(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=vu(t,e))=="number"?n?-t:t:n?"-"+t:t}function ba(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Ko()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Vd(n)+Vd(t));return n}function Vd(t){return t=String(t),"0000000".slice(t.length)+t}function Hm(){var t=xt,e=Ut;if(2147483648&e)if(Ko())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=Mu(t,e);t="-"+ba(n,i)}else t=ba(t,e);return t}function Qo(t){if(t.length<16)Fs(Number(t));else if(Ko())t=BigInt(t),xt=Number(t&BigInt(4294967295))>>>0,Ut=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");Ut=xt=0;const n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){const r=Number(t.slice(i,s));Ut*=1e6,xt=1e6*xt+r,xt>=4294967296&&(Ut+=Math.trunc(xt/4294967296),Ut>>>=0,xt>>>=0)}if(e){const[i,s]=Mu(xt,Ut);xt=i,Ut=s}}}function Mu(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const Ta=typeof BigInt=="function"?BigInt.asIntN:void 0,WS=typeof BigInt=="function"?BigInt.asUintN:void 0,ns=Number.isSafeInteger,el=Number.isFinite,br=Math.trunc,XS=ts(0);function hs(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Wm(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const qS=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Aa(t){switch(typeof t){case"bigint":return!0;case"number":return el(t);case"string":return qS.test(t);default:return!1}}function Or(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return el(t)?0|t:void 0}function Xm(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return el(t)?t>>>0:void 0}function Gd(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function qm(t){const e=t.length;return t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337}function Ym(t){return qm(t)?t:(Qo(t),Hm())}function Su(t){return t=br(t),ns(t)||(Fs(t),t=xu(xt,Ut)),t}function jm(t){var e=br(Number(t));return ns(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Ym(t))}function Hd(t){var e=br(Number(t));return ns(e)?ts(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Ko()?ts(Ta(64,BigInt(t))):ts(Ym(t)))}function Wd(t){if(ns(t))t=ts(Su(t));else{if(t=br(t),ns(t))t=String(t);else{const e=String(t);qm(e)?t=e:(Fs(t),t=Hm())}t=ts(t)}return t}function Mh(t){return t==null?t:typeof t=="bigint"?(xh(t)?t=Number(t):(t=Ta(64,t),t=xh(t)?Number(t):String(t)),t):Aa(t)?typeof t=="number"?Su(t):jm(t):void 0}function YS(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(WS(64,t));if(Aa(t)){if(e==="string")return e=br(Number(t)),ns(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Gd(t)||(Qo(t),t=ba(xt,Ut))),t;if(e==="number")return(t=br(t))>=0&&ns(t)?t:(function(n){if(n<0){Fs(n);var i=ba(xt,Ut);return n=Number(i),ns(n)?n:i}return Gd(i=String(n))?i:(Fs(n),vu(xt,Ut))})(t)}}function Km(t){if(typeof t!="string")throw Error();return t}function Br(t){if(t!=null&&typeof t!="string")throw Error();return t}function Tr(t){return t==null||typeof t=="string"?t:void 0}function yu(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===Ia)return t;if(!Array.isArray(t))return n?2&i?((t=e[Nd])||(Fr((t=new e).u),t=e[Nd]=t),e=t):e=new e:e=void 0,e;let s=n=0|t[Ie];return s===0&&(s|=32&i),s|=2&i,s!==n&&zt(t,s),new e(t)}function jS(t,e,n){if(e)e:{if(!Aa(e=t))throw _h("int64");switch(typeof e){case"string":e=Hd(e);break e;case"bigint":e=ts(Ta(64,e));break e;default:e=Wd(e)}}else t=typeof(e=t),e=e==null?e:t==="bigint"?ts(Ta(64,e)):Aa(e)?t==="string"?Hd(e):Wd(e):void 0;return(t=e)==null?n?XS:void 0:t}function KS(t){return t}const JS={};let $S=(function(){try{return qo(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class hc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const ZS=$S?(Object.setPrototypeOf(hc.prototype,Map.prototype),Object.defineProperties(hc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),hc):class extends Map{constructor(){super()}};function Xd(t){return t}function uc(t){if(2&t.M)throw Error("Cannot mutate an immutable Map")}var xi=class extends ZS{constructor(t,e,n=Xd,i=Xd){super();let s=0|t[Ie];s|=64,zt(t,s),this.M=s,this.I=e,this.S=n,this.X=this.I?QS:i;for(let r=0;r<t.length;r++){const a=t[r],o=n(a[0],!1,!0);let l=a[1];e?l===void 0&&(l=null):l=i(a[1],!1,!0,void 0,void 0,s),super.set(o,l)}}La(){var t=sy;if(this.size!==0)return Array.from(super.entries(),(e=>(e[0]=t(e[0]),e[1]=t(e[1]),e)))}da(t=ey){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){uc(this),super.clear()}delete(t){return uc(this),super.delete(this.S(t,!0,!1))}entries(){if(this.I){var t=super.keys();t=new Od(t,ty,this)}else t=super.entries();return t}values(){if(this.I){var t=super.keys();t=new Od(t,xi.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.I?super.forEach(((n,i,s)=>{t.call(e,s.get(i),i,s)})):super.forEach(t,e)}set(t,e){return uc(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.X(e,!0,!0,this.I,!1,this.M))}Ja(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.I?t===void 0?null:t:this.X(t,!1,!0,void 0,!1,this.M),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.I;return n?((n=this.X(e,!1,!0,n,this.pa,this.M))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};function QS(t,e,n,i,s,r){return t=yu(t,i,n,r),s&&(t=il(t)),t}function ey(t){return t}function ty(t){return[t,this.get(t)]}let ny,Jm,$m,iy;function qd(){return ny||=new xi(Fr([]),void 0,void 0,void 0,JS)}function Sh(t,e,n,i,s){if(t!=null){if(Array.isArray(t)){const r=0|t[Ie];return t.length===0&&1&r?void 0:s&&2&r?t:tl(t,e,n,i!==void 0,s)}return e(t,i)}}function tl(t,e,n,i,s){const r=i||n?0|t[Ie]:0,a=i?!!(32&r):void 0;let o=0;const l=(i=Mn(t)).length;for(let g=0;g<l;g++){var c=i[g];if(g===l-1&&Jo(c)){var h=e,u=n,f=a,p=s;let M;for(let m in c){const d=Sh(c[m],h,u,f,p);d!=null&&((M??={})[m]=d)}c=M}else c=Sh(i[g],e,n,a,s);i[g]=c,c!=null&&(o=g+1)}return o<l&&(i.length=o),n&&((t=gu(t))&&(i[Er]=Mn(t)),n(r,i)),i}function sy(t){return Sh(t,Eu,void 0,void 0,!1)}function Eu(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return xh(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Us(t))return Us(t)&&du(km),Id(t);if(t.W===Ia)return Zm(t);if(t instanceof Ni){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=Id(e)}return t instanceof xi?t.La():void 0}return t}function Zm(t){var e=t.u;t=tl(e,Eu,void 0,void 0,!1);var n=0|e[Ie];if((e=t.length)&&!(512&n)){var i=t[e-1],s=!1;Jo(i)?(e--,s=!0):i=void 0;var r=e-(n=512&n?0:-1),a=(Jm??KS)(r,n,t,i);if(i&&(t[e]=void 0),r<a&&i){for(var o in r=!0,i){const l=+o;l<=a?(t[s=l+n]=i[o],e=Math.max(s+1,e),s=!1,delete i[o]):r=!1}r&&(i=void 0)}for(r=e-1;e>0;r=e-1)if((o=t[r])==null)e--,s=!0;else{if(!((r-=n)>=a))break;(i??={})[r]=o,e--,s=!0}s&&(t.length=e),i&&t.push(i)}return t}function is(t,e,n){return t=Qm(t,e[0],e[1],n?1:2),e!==$m&&n&&jo(t,8192),t}function Qm(t,e,n,i){if(t==null){var s=96;n?(t=[n],s|=512):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(8192&(s=0|t[Ie])||!(64&s)||2&s||du(US),1024&s)throw Error("farr");if(64&s)return t;if(i===1||i===2||(s|=64),n&&(s|=512,n!==t[0]))throw Error("mid");e:{var r=(n=t).length;if(r){var a=r-1;if(Jo(i=n[a])){if((a-=e=512&(s|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var o in i)(r=+o)<a&&(n[r+e]=i[o],delete i[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(512&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return zt(t,s),t}function yh(t,e,n=vh){if(t!=null){if(Um&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[Ie];return 2&i?t:(e&&=i===0||!!(32&i)&&!(64&i||!(16&i)),e?(zt(t,34|i),4&i&&Object.freeze(t),t):tl(t,yh,4&i?vh:n,!0,!0))}return t.W===Ia?t=2&(i=0|(n=t.u)[Ie])?t:new t.constructor(nl(n,i,!0)):t instanceof xi&&!(2&t.M)&&(n=Fr(t.da(yh)),t=new xi(n,t.I,t.S,t.X)),t}}function nl(t,e,n){const i=n||2&e?vh:NS,s=!!(32&e);return t=(function(r,a,o){const l=Mn(r);var c=l.length;const h=256&a?l[c-1]:void 0;for(c+=h?-1:0,a=512&a?1:0;a<c;a++)l[a]=o(l[a]);if(h){a=l[a]={};for(const u in h)a[u]=o(h[u])}return(r=gu(r))&&(l[Er]=Mn(r)),l})(t,e,(r=>yh(r,s,i))),jo(t,32|(n?2:0)),t}function il(t){const e=t.u,n=0|e[Ie];return 2&n?new t.constructor(nl(e,n,!1)):t}function Ar(t,e){return Vi(t=t.u,0|t[Ie],e)}function Vi(t,e,n){if(n===-1)return null;const i=n+(512&e?0:-1),s=t.length-1;return i>=s&&256&e?t[s][n]:i<=s?t[i]:void 0}function yt(t,e,n){const i=t.u;let s=0|i[Ie];return cs(s),Pt(i,s,e,n),t}function Pt(t,e,n,i){const s=512&e?0:-1,r=n+s;var a=t.length-1;return r>=a&&256&e?(t[a][n]=i,e):r<=a?(t[r]=i,e):(i!==void 0&&(n>=(a=e>>14&1023||536870912)?i!=null&&(t[a+s]={[n]:i},zt(t,e|=256)):t[r]=i),e)}function So(t,e){let n=0|(t=t.u)[Ie];const i=Vi(t,n,e),s=hs(i);return s!=null&&s!==i&&Pt(t,n,e,s),s}function e0(t){let e=0|(t=t.u)[Ie];const n=Vi(t,e,1),i=mu(n,!0);return i!=null&&i!==n&&Pt(t,e,1,i),i}function ws(){return FS===void 0?2:4}function Cs(t,e,n,i,s){const r=t.u,a=2&(t=0|r[Ie])?1:i;s=!!s;let o=0|(i=bu(r,t,e))[Ie];if(!(4&o)){4&o&&(i=Mn(i),o=Fi(o,t),t=Pt(r,t,e,i));let l=0,c=0;for(;l<i.length;l++){const h=n(i[l]);h!=null&&(i[c++]=h)}c<l&&(i.length=c),o=Tu(o,t),n=-2049&(20|o),o=n&=-4097,zt(i,o),2&o&&Object.freeze(i)}return a===1||a===4&&32&o?Ii(o)||(s=o,o|=2,o!==s&&zt(i,o),Object.freeze(i)):(a===2&&Ii(o)&&(i=Mn(i),o=Fi(o,t),o=ss(o,t,s),zt(i,o),t=Pt(r,t,e,i)),Ii(o)||(e=o,o=ss(o,t,s),o!==e&&zt(i,o))),i}function bu(t,e,n){return t=Vi(t,e,n),Array.isArray(t)?t:pu}function Tu(t,e){return t===0&&(t=Fi(t,e)),1|t}function Ii(t){return!!(2&t)&&!!(4&t)||!!(1024&t)}function t0(t){t=Mn(t);for(let e=0;e<t.length;e++){const n=t[e]=Mn(t[e]);Array.isArray(n[1])&&(n[1]=Fr(n[1]))}return t}function Eh(t,e,n,i){let s=0|(t=t.u)[Ie];cs(s),Pt(t,s,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function kr(t,e,n,i){cs(e);let s=bu(t,e,n);const r=s!==pu;if(64&e||!(8192&e)||!r){const a=r?0|s[Ie]:0;let o=a;(!r||2&o||Ii(o)||4&o&&!(32&o))&&(s=Mn(s),o=Fi(o,e),e=Pt(t,e,n,s)),o=-13&Tu(o,e),o=ss(i?-17&o:16|o,e,!0),o!==a&&zt(s,o)}return s}function fc(t,e){var n=H0;return wu(Au(t=t.u),t,0|t[Ie],n)===e?e:-1}function Au(t){if(Yo)return t[Qr]??(t[Qr]=new Map);if(Qr in t)return t[Qr];const e=new Map;return Object.defineProperty(t,Qr,{value:e}),e}function n0(t,e,n,i){const s=Au(t),r=wu(s,t,e,n);return r!==i&&(r&&(e=Pt(t,e,r)),s.set(n,i)),e}function wu(t,e,n,i){let s=t.get(i);if(s!=null)return s;s=0;for(let r=0;r<i.length;r++){const a=i[r];Vi(e,n,a)!=null&&(s!==0&&(n=Pt(e,n,s)),s=a)}return t.set(i,s),s}function Cu(t,e,n){let i=0|t[Ie];const s=Vi(t,i,n);let r;if(s!=null&&s.W===Ia)return(e=il(s))!==s&&Pt(t,i,n,e),e.u;if(Array.isArray(s)){const a=0|s[Ie];r=2&a?is(nl(s,a,!1),e,!0):64&a?s:is(r,e,!0)}else r=is(void 0,e,!0);return r!==s&&Pt(t,i,n,r),r}function i0(t,e,n){let i=0|(t=t.u)[Ie];const s=Vi(t,i,n);return(e=yu(s,e,!1,i))!==s&&e!=null&&Pt(t,i,n,e),e}function st(t,e,n){if((e=i0(t,e,n))==null)return e;let i=0|(t=t.u)[Ie];if(!(2&i)){const s=il(e);s!==e&&Pt(t,i,n,e=s)}return e}function s0(t,e,n,i,s,r,a){t=t.u;var o=!!(2&e);const l=o?1:s;r=!!r,a&&=!o;var c=0|(s=bu(t,e,i))[Ie];if(!(o=!!(4&c))){var h=s,u=e;const f=!!(2&(c=Tu(c,e)));f&&(u|=2);let p=!f,g=!0,M=0,m=0;for(;M<h.length;M++){const d=yu(h[M],n,!1,u);if(d instanceof n){if(!f){const b=!!(2&(0|d.u[Ie]));p&&=!b,g&&=b}h[m++]=d}}m<M&&(h.length=m),c|=4,c=g?16|c:-17&c,zt(h,c=p?8|c:-9&c),f&&Object.freeze(h)}if(a&&!(8&c||!s.length&&(l===1||l===4&&32&c))){for(Ii(c)&&(s=Mn(s),c=Fi(c,e),e=Pt(t,e,i,s)),n=s,a=c,h=0;h<n.length;h++)(c=n[h])!==(u=il(c))&&(n[h]=u);a|=8,zt(n,a=n.length?-17&a:16|a),c=a}return l===1||l===4&&32&c?Ii(c)||(e=c,(c|=!s.length||16&c&&(!o||32&c)?2:1024)!==e&&zt(s,c),Object.freeze(s)):(l===2&&Ii(c)&&(zt(s=Mn(s),c=ss(c=Fi(c,e),e,r)),e=Pt(t,e,i,s)),Ii(c)||(i=c,(c=ss(c,e,r))!==i&&zt(s,c))),s}function ki(t,e,n){const i=0|t.u[Ie];return s0(t,i,e,n,ws(),!1,!(2&i))}function Ue(t,e,n,i){return i==null&&(i=void 0),yt(t,n,i)}function ha(t,e,n,i){i==null&&(i=void 0);e:{let s=0|(t=t.u)[Ie];if(cs(s),i==null){const r=Au(t);if(wu(r,t,s,n)!==e)break e;r.set(n,0)}else s=n0(t,s,n,e);Pt(t,s,e,i)}}function Fi(t,e){return-1025&(t=32|(2&e?2|t:-3&t))}function ss(t,e,n){return 32&e&&n||(t&=-33),t}function sl(t,e,n){cs(0|t.u[Ie]),Cs(t,e,Tr,2,!0).push(Km(n))}function Io(t,e,n,i){const s=0|t.u[Ie];cs(s),t=s0(t,s,n,e,2,!0),i=i??new n,t.push(i),t[Ie]=2&(0|i.u[Ie])?-9&t[Ie]:-17&t[Ie]}function Hn(t,e){return Or(Ar(t,e))}function Wn(t,e){return Tr(Ar(t,e))}function Ot(t,e){return So(t,e)??0}function wa(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);yt(t,e,n)}function Mi(t,e,n){if(n!=null){if(typeof n!="number"||!el(n))throw _h("int32");n|=0}yt(t,e,n)}function Pe(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);yt(t,e,n)}function Uo(t,e,n){{const a=t.u;let o=0|a[Ie];if(cs(o),n==null)Pt(a,o,e);else{var i=t=0|n[Ie],s=Ii(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=Mn(n),i=0,t=ss(t=Fi(t,o),o,!0),r=!1),t|=21,s=0;s<n.length;s++){const l=n[s],c=Km(l);Object.is(l,c)||(r&&(n=Mn(n),i=0,t=ss(t=Fi(t,o),o,!0),r=!1),n[s]=c)}t!==i&&(r&&(n=Mn(n),t=ss(t=Fi(t,o),o,!0)),zt(n,t)),Pt(a,o,e,n)}}}function r0(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function Ru(){return Error("Failed to read varint, encoding is invalid.")}function a0(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Pu(t){if(typeof t=="string")return{buffer:Fm(t),O:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Uint8Array)return{buffer:t,O:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),O:!1};if(t.constructor===Ni)return{buffer:fu(t)||new Uint8Array(0),O:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Lu(t,e){let n,i=0,s=0,r=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);for(r>32&&(s|=(127&n)>>4),r=3;r<32&&128&n;r+=7)n=a[o++],s|=(127&n)<<r;if(Ps(t,o),n<128)return e(i>>>0,s>>>0);throw Ru()}function Du(t){let e=0,n=t.g;const i=n+10,s=t.h;for(;n<i;){const r=s[n++];if(e|=r,(128&r)==0)return Ps(t,n),!!(127&e)}throw Ru()}function as(t){const e=t.h;let n=t.g,i=e[n++],s=127&i;if(128&i&&(i=e[n++],s|=(127&i)<<7,128&i&&(i=e[n++],s|=(127&i)<<14,128&i&&(i=e[n++],s|=(127&i)<<21,128&i&&(i=e[n++],s|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Ru();return Ps(t,n),s}function zi(t){return as(t)>>>0}function bh(t){var e=t.h;const n=t.g,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],Ps(t,t.g+4),(i<<0|s<<8|r<<16|e<<24)>>>0}function Th(t){var e=bh(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function ry(t){return as(t)}function dc(t,e,{aa:n=!1}={}){t.aa=n,e&&(e=Pu(e),t.h=e.buffer,t.m=e.O,t.j=0,t.l=t.h.length,t.g=t.j)}function Ps(t,e){if(t.g=e,e>t.l)throw a0(t.l,e)}function o0(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw a0(e,t.l-n);return t.g=i,n}function l0(t,e){if(e==0)return Ns();var n=o0(t,e);return t.aa&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):HS?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?Ns():new Ni(n,yr)}xi.prototype.toJSON=void 0;var Yd=[];function c0(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=zi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw r0(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function yo(t){switch(t.h){case 0:t.h!=0?yo(t):Du(t.g);break;case 1:Ps(t=t.g,t.g+8);break;case 2:if(t.h!=2)yo(t);else{var e=zi(t.g);Ps(t=t.g,t.g+e)}break;case 5:Ps(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!c0(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}yo(t)}break;default:throw r0(t.h,t.l)}}function Ua(t,e,n){const i=t.g.l,s=zi(t.g),r=t.g.g+s;let a=r-i;if(a<=0&&(t.g.l=r,n(e,t,void 0,void 0,void 0),a=r-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=r,t.g.l=i,e}function Iu(t){var e=zi(t.g),n=o0(t=t.g,e);if(t=t.h,bS){var i,s=t;(i=ac)||(i=ac=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(o){if(lo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),lo=!0}catch{lo=!1}}throw!lo&&(ac=void 0),o}}else{e=(r=n)+e,n=[];let o,l=null;for(;r<e;){var a=t[r++];a<128?n.push(a):a<224?r>=e?Ms():(o=t[r++],a<194||(192&o)!=128?(r--,Ms()):n.push((31&a)<<6|63&o)):a<240?r>=e-1?Ms():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[r++]))!=128?(r--,Ms()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?Ms():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,Ms()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Ms(),n.length>=8192&&(l=Rd(l,n),n.length=0)}r=Rd(l,n)}return r}function h0(t){const e=zi(t.g);return l0(t.g,e)}function rl(t,e,n){var i=zi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var co=[];function ii(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var Ce=class{constructor(t,e){this.u=Qm(t,e)}toJSON(){try{var t=Zm(this)}finally{Jm=void 0}return t}l(){var t=Vy;return t.g?t.l(this,t.g,t.h):t.l(this,t.h,t.defaultValue)}clone(){const t=this.u;return new this.constructor(nl(t,0|t[Ie],!1))}O(){return!!(2&(0|this.u[Ie]))}};function jd(t){return t?/^\d+$/.test(t)?(Qo(t),new Ah(xt,Ut)):null:ay||=new Ah(0,0)}Ce.prototype.W=Ia,Ce.prototype.toString=function(){return this.u.toString()};var Ah=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let ay;function Kd(t){return t?/^-?\d+$/.test(t)?(Qo(t),new wh(xt,Ut)):null:oy||=new wh(0,0)}var wh=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let oy;function hr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function zr(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function al(t,e){if(e>=0)zr(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Ca(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function wr(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Un(t,e,n){zr(t.g,8*e+n)}function Uu(t,e){return Un(t,e,2),e=t.g.end(),wr(t,e),e.push(t.h),e}function Nu(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function ol(t,e,n){Un(t,e,2),zr(t.g,n.length),wr(t,t.g.end()),wr(t,n)}function No(t,e,n,i){n!=null&&(e=Uu(t,e),i(n,t),Nu(t,e))}function si(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Fu=si(),u0=si(),Ou=si(),Bu=si(),f0=si(),d0=si(),ku=si(),p0=si(),m0=si(),Vr=class{constructor(t,e,n){this.g=t,this.h=e,t=Fu,this.l=!!t&&n===t||!1}};function ll(t,e){return new Vr(t,e,Fu)}function g0(t,e,n,i,s){No(t,n,M0(e,i),s)}const ly=ll((function(t,e,n,i,s){return t.h===2&&(Ua(t,Cu(e,i,n),s),!0)}),g0),cy=ll((function(t,e,n,i,s){return t.h===2&&(Ua(t,Cu(e,i,n),s),!0)}),g0);var cl=Symbol(),zu=Symbol(),Jd=Symbol(),$d=Symbol();let _0,v0;function ks(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ma=i,s.T=(function(u){switch(typeof u){case"boolean":return $m||=[0,void 0,!0];case"number":return u>0?void 0:u===0?iy||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1];let a=1;r&&r.constructor===Object&&(s.ga=r,typeof(r=i[++a])=="function"&&(s.la=!0,_0??=r,v0??=i[a+1],r=i[a+=2]));const o={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)o[r[l]]=r;r=i[++a]}for(l=1;r!==void 0;){let u;typeof r=="number"&&(l+=r,r=i[++a]);var c=void 0;if(r instanceof Vr?u=r:(u=ly,a--),u?.l){r=i[++a],c=i;var h=a;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);l<h;l++){const f=o[l];c?n(s,l,u,c,f):e(s,l,u,f)}}return i[t]=s}function x0(t){return Array.isArray(t)?t[0]instanceof Vr?t:[cy,t]:[t,void 0]}function M0(t,e){return t instanceof Ce?t.u:Array.isArray(t)?is(t,e,!1):void 0}function Vu(t,e,n,i){const s=n.g;t[e]=i?(r,a,o)=>s(r,a,o,i):s}function Gu(t,e,n,i,s){const r=n.g;let a,o;t[e]=(l,c,h)=>r(l,c,h,o||=ks(zu,Vu,Gu,i).T,a||=Hu(i),s)}function Hu(t){let e=t[Jd];if(e!=null)return e;const n=ks(zu,Vu,Gu,t);return e=n.la?(i,s)=>_0(i,s,n):(i,s)=>{const r=0|i[Ie];for(;c0(s)&&s.h!=4;){var a=s.m,o=n[a];if(o==null){var l=n.ga;l&&(l=l[a])&&(l=hy(l))!=null&&(o=n[a]=l)}o!=null&&o(s,i,a)||(a=(o=s).l,yo(o),o.fa?o=void 0:(l=o.g.g-a,o.g.g=a,o=l0(o.g,l)),a=i,o&&((l=a[Er])?l.push(o):a[Er]=[o]))}return 8192&r&&Fr(i),!0},t[Jd]=e}function hy(t){const e=(t=x0(t))[0].g;if(t=t[1]){const n=Hu(t),i=ks(zu,Vu,Gu,t).T;return(s,r,a)=>e(s,r,a,i,n)}return e}function hl(t,e,n){t[e]=n.h}function ul(t,e,n,i){let s,r;const a=n.h;t[e]=(o,l,c)=>a(o,l,c,r||=ks(cl,hl,ul,i).T,s||=S0(i))}function S0(t){let e=t[$d];if(!e){const n=ks(cl,hl,ul,t);e=(i,s)=>y0(i,s,n),t[$d]=e}return e}function y0(t,e,n){(function(i,s,r){const a=512&s?0:-1,o=i.length,l=o+((s=64&s?256&s:!!o&&Jo(i[o-1]))?-1:0);for(let c=0;c<l;c++)r(c-a,i[c]);if(s){i=i[o-1];for(const c in i)!isNaN(c)&&r(+c,i[c])}})(t,0|t[Ie]|(n.T[1]?512:0),((i,s)=>{if(s!=null){var r=(function(a,o){var l=a[o];if(l)return l;if((l=a.ga)&&(l=l[o])){var c=(l=x0(l))[0].h;if(l=l[1]){const h=S0(l),u=ks(cl,hl,ul,l).T;l=a.la?v0(u,h):(f,p,g)=>c(f,p,g,u,h)}else l=c;return a[o]=l}})(n,i);r&&r(e,s,i)}})),(t=gu(t))&&(function(i,s){wr(i,i.g.end());for(let r=0;r<s.length;r++)wr(i,fu(s[r])||new Uint8Array(0))})(e,t)}function Gr(t,e){if(Array.isArray(e)){var n=0|e[Ie];if(4&n)return e;for(var i=0,s=0;i<e.length;i++){const r=t(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),zt(e,-6145&(5|n)),2&n&&Object.freeze(e),e}}function un(t,e,n){return new Vr(t,e,n)}function Hr(t,e,n){return new Vr(t,e,n)}function fn(t,e,n){Pt(t,0|t[Ie],e,n)}var uy=ll((function(t,e,n,i,s){return t.h===2&&(t=Ua(t,is([void 0,void 0],i,!0),s),cs(i=0|e[Ie]),(s=Vi(e,i,n))instanceof xi?(2&s.M)!=0?((s=s.da()).push(t),Pt(e,i,n,s)):s.Ja(t):Array.isArray(s)?(2&(0|s[Ie])&&Pt(e,i,n,s=t0(s)),s.push(t)):Pt(e,i,n,[t]),!0)}),(function(t,e,n,i,s){if(e instanceof xi)e.forEach(((r,a)=>{No(t,n,is([a,r],i,!1),s)}));else if(Array.isArray(e))for(let r=0;r<e.length;r++){const a=e[r];Array.isArray(a)&&No(t,n,is(a,i,!1),s)}}));function E0(t,e,n){if(e=(function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(Ta(64,i));if(Aa(i)){if(s==="string")return jm(i);if(s==="number")return Su(i)}})(e),e!=null&&(typeof e=="string"&&Kd(e),e!=null))switch(Un(t,n,0),typeof e){case"number":t=t.g,Fs(e),hr(t,xt,Ut);break;case"bigint":n=BigInt.asUintN(64,e),n=new wh(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),hr(t.g,n.h,n.g);break;default:n=Kd(e),hr(t.g,n.h,n.g)}}function b0(t,e,n){(e=Or(e))!=null&&e!=null&&(Un(t,n,0),al(t.g,e))}function T0(t,e,n){(e=Wm(e))!=null&&(Un(t,n,0),t.g.g.push(e?1:0))}function A0(t,e,n){(e=Tr(e))!=null&&ol(t,n,Lm(e))}function w0(t,e,n,i,s){No(t,n,M0(e,i),s)}function C0(t,e,n){e==null||typeof e=="string"||e instanceof Ni||(Us(e)?Us(e)&&du(km):e=void 0),e!=null&&ol(t,n,Pu(e).buffer)}function R0(t,e,n){return(t.h===5||t.h===2)&&(e=kr(e,0|e[Ie],n,!1),t.h==2?rl(t,Th,e):e.push(Th(t.g)),!0)}var Ri=un((function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=bh(i);const s=bh(i);i=2*(s>>31)+1;const r=s>>>20&2047;return t=4294967296*(1048575&s)+t,fn(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0}),(function(t,e,n){(e=hs(e))!=null&&(Un(t,n,1),t=t.g,(n=Gm||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),xt=n.getUint32(0,!0),Ut=n.getUint32(4,!0),Ca(t,xt),Ca(t,Ut))}),si()),Vt=un((function(t,e,n){return t.h===5&&(fn(e,n,Th(t.g)),!0)}),(function(t,e,n){(e=hs(e))!=null&&(Un(t,n,5),t=t.g,_u(e),Ca(t,xt))}),ku),fy=Hr(R0,(function(t,e,n){if((e=Gr(hs,e))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Un(i,s,5),i=i.g,_u(r),Ca(i,xt))}}),ku),Wu=Hr(R0,(function(t,e,n){if((e=Gr(hs,e))!=null&&e.length){Un(t,n,2),zr(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,_u(e[i]),Ca(n,xt)}}),ku),os=un((function(t,e,n){return t.h===0&&(fn(e,n,Lu(t.g,xu)),!0)}),E0,d0),pc=un((function(t,e,n){return t.h===0&&(fn(e,n,(t=Lu(t.g,xu))===0?void 0:t),!0)}),E0,d0),dy=un((function(t,e,n){return t.h===0&&(fn(e,n,Lu(t.g,vu)),!0)}),(function(t,e,n){if((e=YS(e))!=null&&(typeof e=="string"&&jd(e),e!=null))switch(Un(t,n,0),typeof e){case"number":t=t.g,Fs(e),hr(t,xt,Ut);break;case"bigint":n=BigInt.asUintN(64,e),n=new Ah(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),hr(t.g,n.h,n.g);break;default:n=jd(e),hr(t.g,n.h,n.g)}}),si()),Ft=un((function(t,e,n){return t.h===0&&(fn(e,n,as(t.g)),!0)}),b0,Bu),fl=Hr((function(t,e,n){return(t.h===0||t.h===2)&&(e=kr(e,0|e[Ie],n,!1),t.h==2?rl(t,as,e):e.push(as(t.g)),!0)}),(function(t,e,n){if((e=Gr(Or,e))!=null&&e.length){n=Uu(t,n);for(let i=0;i<e.length;i++)al(t.g,e[i]);Nu(t,n)}}),Bu),or=un((function(t,e,n){return t.h===0&&(fn(e,n,(t=as(t.g))===0?void 0:t),!0)}),b0,Bu),wt=un((function(t,e,n){return t.h===0&&(fn(e,n,Du(t.g)),!0)}),T0,u0),ur=un((function(t,e,n){return t.h===0&&(fn(e,n,(t=Du(t.g))===!1?void 0:t),!0)}),T0,u0),tn=Hr((function(t,e,n){return t.h===2&&(t=Iu(t),kr(e,0|e[Ie],n,!1).push(t),!0)}),(function(t,e,n){if((e=Gr(Tr,e))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&ol(i,s,Lm(r))}}),Ou),$i=un((function(t,e,n){return t.h===2&&(fn(e,n,(t=Iu(t))===""?void 0:t),!0)}),A0,Ou),ct=un((function(t,e,n){return t.h===2&&(fn(e,n,Iu(t)),!0)}),A0,Ou),Xt=(function(t,e,n=Fu){return new Vr(t,e,n)})((function(t,e,n,i,s){return t.h===2&&(i=is(void 0,i,!0),kr(e,0|e[Ie],n,!0).push(i),Ua(t,i,s),!0)}),(function(t,e,n,i,s){if(Array.isArray(e))for(let r=0;r<e.length;r++)w0(t,e[r],n,i,s)})),lt=ll((function(t,e,n,i,s,r){return t.h===2&&(n0(e,0|e[Ie],r,n),Ua(t,e=Cu(e,i,n),s),!0)}),w0),P0=un((function(t,e,n){return t.h===2&&(fn(e,n,h0(t)),!0)}),C0,p0),py=Hr((function(t,e,n){return(t.h===0||t.h===2)&&(e=kr(e,0|e[Ie],n,!1),t.h==2?rl(t,zi,e):e.push(zi(t.g)),!0)}),(function(t,e,n){if((e=Gr(Xm,e))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Un(i,s,0),zr(i.g,r))}}),f0),my=un((function(t,e,n){return t.h===0&&(fn(e,n,(t=zi(t.g))===0?void 0:t),!0)}),(function(t,e,n){(e=Xm(e))!=null&&e!=null&&(Un(t,n,0),zr(t.g,e))}),f0),Dn=un((function(t,e,n){return t.h===0&&(fn(e,n,as(t.g)),!0)}),(function(t,e,n){(e=Or(e))!=null&&(e=parseInt(e,10),Un(t,n,0),al(t.g,e))}),m0);class gy{constructor(e,n){this.h=e,this.g=n,this.l=st,this.m=Ue,this.defaultValue=void 0}register(){qo(this)}}function ri(t,e){return new gy(t,e)}function us(t,e){return(n,i)=>{if(co.length){const r=co.pop();r.o(i),dc(r.g,n,i),n=r}else n=new class{constructor(r,a){if(Yd.length){const o=Yd.pop();dc(o,r,a),r=o}else r=new class{constructor(o,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,dc(this,o,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(r,a);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:r=!1}={}){this.fa=r}}(n,i);try{const r=new t,a=r.u;Hu(e)(a,n);var s=r}finally{n.g.clear(),n.m=-1,n.h=-1,co.length<100&&co.push(n)}return s}}function dl(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};y0(this.u,e,ks(cl,hl,ul,t)),wr(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,s=i.length;let r=0;for(let a=0;a<s;a++){const o=i[a];n.set(o,r),r+=o.length}return e.l=[n],n}}var Zd=class extends Ce{constructor(t){super(t)}},Qd=[0,$i,un((function(t,e,n){return t.h===2&&(fn(e,n,(t=h0(t))===Ns()?void 0:t),!0)}),(function(t,e,n){if(e!=null){if(e instanceof Ce){const i=e.Oa;return void(i&&(e=i(e),e!=null&&ol(t,n,Pu(e).buffer)))}if(Array.isArray(e))return}C0(t,e,n)}),p0)];let mc,ep=globalThis.trustedTypes;function tp(t){mc===void 0&&(mc=(function(){let n=null;if(!ep)return n;try{const i=s=>s;n=ep.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})());var e=mc;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function _y(t,...e){if(e.length===0)return tp(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return tp(n)}var L0=[0,Ft,Dn,wt,-1,fl,Dn,-1],vy=class extends Ce{constructor(t){super(t)}},D0=[0,wt,ct,wt,Dn,-1,Hr((function(t,e,n){return(t.h===0||t.h===2)&&(e=kr(e,0|e[Ie],n,!1),t.h==2?rl(t,ry,e):e.push(as(t.g)),!0)}),(function(t,e,n){if((e=Gr(Or,e))!=null&&e.length){n=Uu(t,n);for(let i=0;i<e.length;i++)al(t.g,e[i]);Nu(t,n)}}),m0),ct,-1,[0,wt,-1],Dn,wt,-1],I0=[0,ct,-2],np=class extends Ce{constructor(t){super(t)}},U0=[0],N0=[0,Ft,wt,1,wt,-3],In=class extends Ce{constructor(t){super(t,2)}},Ht={};Ht[336783863]=[0,ct,wt,-1,Ft,[0,[1,2,3,4,5,6,7,8,9],lt,U0,lt,D0,lt,I0,lt,N0,lt,L0,lt,[0,ct,-2],lt,[0,ct,Dn],lt,[0,Dn,ct,-1],lt,[0,Dn,-1]],[0,ct],wt,[0,[1,3],[2,4],lt,[0,fl],-1,lt,[0,tn],-1,Xt,[0,ct,-1]],ct];var ip=[0,pc,-1,ur,-3,pc,fl,$i,or,pc,-1,ur,or,ur,-2,$i];function Nn(t,e){Eh(t,2,Br(e),"")}function bt(t,e){sl(t,3,e)}function et(t,e){sl(t,4,e)}var hn=class extends Ce{constructor(t){super(t,500)}o(t){return Ue(this,0,7,t)}},ua=[-1,{}],sp=[0,ct,1,ua],rp=[0,ct,tn,ua];function Fn(t,e){Io(t,1,hn,e)}function Tt(t,e){sl(t,10,e)}function at(t,e){sl(t,15,e)}var yn=class extends Ce{constructor(t){super(t,500)}o(t){return Ue(this,0,1001,t)}},F0=[-500,Xt,[-500,$i,-1,tn,-3,[-2,Ht,wt],Xt,Qd,or,-1,sp,rp,Xt,[0,$i,ur],$i,ip,or,tn,987,tn],4,Xt,[-500,ct,-1,[-1,{}],998,ct],Xt,[-500,ct,tn,-1,[-2,{},wt],997,tn,-1],or,Xt,[-500,ct,tn,ua,998,tn],tn,or,sp,rp,Xt,[0,$i,-1,ua],tn,-2,ip,$i,-1,ur,[0,ur,my],978,ua,Xt,Qd];yn.prototype.g=dl(F0);var xy=us(yn,F0),My=class extends Ce{constructor(t){super(t)}},O0=class extends Ce{constructor(t){super(t)}g(){return ki(this,My,1)}},B0=[0,Xt,[0,Ft,Vt,ct,-1]],pl=us(O0,B0),Sy=class extends Ce{constructor(t){super(t)}},yy=class extends Ce{constructor(t){super(t)}},gc=class extends Ce{constructor(t){super(t)}h(){return st(this,Sy,2)}g(){return ki(this,yy,5)}},k0=us(class extends Ce{constructor(t){super(t)}},[0,tn,fl,Wu,[0,Dn,[0,Ft,-3],[0,Vt,-3],[0,Ft,-1,[0,Xt,[0,Ft,-2]]],Xt,[0,Vt,-1,ct,Vt]],ct,-1,os,Xt,[0,Ft,Vt],tn,os]),z0=class extends Ce{constructor(t){super(t)}},fr=us(class extends Ce{constructor(t){super(t)}},[0,Xt,[0,Vt,-4]]),V0=class extends Ce{constructor(t){super(t)}},Na=us(class extends Ce{constructor(t){super(t)}},[0,Xt,[0,Vt,-4]]),Ey=class extends Ce{constructor(t){super(t)}},by=[0,Ft,-1,Wu,Dn],G0=class extends Ce{constructor(t){super(t)}};G0.prototype.g=dl([0,Vt,-4,os]);var Ty=class extends Ce{constructor(t){super(t)}},Ay=us(class extends Ce{constructor(t){super(t)}},[0,Xt,[0,1,Ft,ct,B0],os]),ap=class extends Ce{constructor(t){super(t)}},wy=class extends Ce{constructor(t){super(t)}ma(){const t=e0(this);return t??Ns()}},Cy=class extends Ce{constructor(t){super(t)}},H0=[1,2],Ry=us(class extends Ce{constructor(t){super(t)}},[0,Xt,[0,H0,lt,[0,Wu],lt,[0,P0],Ft,ct],os]),Xu=class extends Ce{constructor(t){super(t)}},W0=[0,ct,Ft,Vt,tn,-1],op=class extends Ce{constructor(t){super(t)}},Py=[0,wt,-1],lp=class extends Ce{constructor(t){super(t)}},Eo=[1,2,3,4,5],Fo=class extends Ce{constructor(t){super(t)}g(){return e0(this)!=null}h(){return Wn(this,2)!=null}},Ct=class extends Ce{constructor(t){super(t)}g(){return Wm(Ar(this,2))??!1}},X0=[0,P0,ct,[0,Ft,os,-1],[0,dy,os]],Bt=[0,X0,wt,[0,Eo,lt,N0,lt,D0,lt,L0,lt,U0,lt,I0],Dn],ml=class extends Ce{constructor(t){super(t)}},qu=[0,Bt,Vt,-1,Ft],Ly=ri(502141897,ml);Ht[502141897]=qu;var Dy=us(class extends Ce{constructor(t){super(t)}},[0,[0,Dn,-1,fy,py],by]),q0=class extends Ce{constructor(t){super(t)}},Y0=class extends Ce{constructor(t){super(t)}},Yu=[0,Bt,Vt,[0,Bt],wt],j0=[0,Bt,qu,Yu,Vt,[0,[0,X0]]],Iy=ri(508968150,Y0);Ht[508968150]=j0,Ht[508968149]=Yu;var K0=class extends Ce{constructor(t){super(t)}},Uy=ri(513916220,K0);Ht[513916220]=[0,Bt,j0,Ft];var sr=class extends Ce{constructor(t){super(t)}h(){return st(this,Xu,2)}g(){yt(this,2)}},J0=[0,Bt,W0];Ht[478825465]=J0;var Ny=class extends Ce{constructor(t){super(t)}},$0=class extends Ce{constructor(t){super(t)}},ju=class extends Ce{constructor(t){super(t)}},Ku=class extends Ce{constructor(t){super(t)}},Z0=class extends Ce{constructor(t){super(t)}},cp=[0,Bt,[0,Bt],J0,-1],Q0=[0,Bt,Vt,Ft],Ju=[0,Bt,Vt],eg=[0,Bt,Q0,Ju,Vt],Fy=ri(479097054,Z0);Ht[479097054]=[0,Bt,eg,cp],Ht[463370452]=cp,Ht[464864288]=Q0;var Oy=ri(462713202,Ku);Ht[462713202]=eg,Ht[474472470]=Ju;var By=class extends Ce{constructor(t){super(t)}},tg=class extends Ce{constructor(t){super(t)}},ng=class extends Ce{constructor(t){super(t)}},ig=class extends Ce{constructor(t){super(t)}},$u=[0,Bt,Vt,-1,Ft],Ch=[0,Bt,Vt,wt];ig.prototype.g=dl([0,Bt,Ju,[0,Bt],qu,Yu,$u,Ch]);var sg=class extends Ce{constructor(t){super(t)}},ky=ri(456383383,sg);Ht[456383383]=[0,Bt,W0];var rg=class extends Ce{constructor(t){super(t)}},zy=ri(476348187,rg);Ht[476348187]=[0,Bt,Py];var ag=class extends Ce{constructor(t){super(t)}},hp=class extends Ce{constructor(t){super(t)}},og=[0,Dn,-1],Vy=ri(458105876,class extends Ce{constructor(t){super(t)}g(){var t=this.u;const e=0|t[Ie],n=2&e;return t=(function(i,s,r){var a=hp;const o=2&s;let l=!1;if(r==null){if(o)return qd();r=[]}else if(r.constructor===xi){if((2&r.M)==0||o)return r;r=r.da()}else Array.isArray(r)?l=!!(2&(0|r[Ie])):r=[];if(o){if(!r.length)return qd();l||(l=!0,Fr(r))}else l&&(l=!1,r=t0(r));return l||(64&(0|r[Ie])?r[Ie]&=-33:32&s&&jo(r,32)),Pt(i,s,2,a=new xi(r,a,jS,void 0)),a})(t,e,Vi(t,e,2)),!n&&hp&&(t.pa=!0),t}});Ht[458105876]=[0,og,uy,[!0,os,[0,ct,-1,tn]]];var Zu=class extends Ce{constructor(t){super(t)}},lg=ri(458105758,Zu);Ht[458105758]=[0,Bt,ct,og];var cg=class extends Ce{constructor(t){super(t)}},Gy=ri(443442058,cg);Ht[443442058]=[0,Bt,ct,Ft,Vt,tn,-1,wt,Vt],Ht[514774813]=$u;var hg=class extends Ce{constructor(t){super(t)}},Hy=ri(516587230,hg);function Rh(t,e){return e=e?e.clone():new Xu,t.displayNamesLocale!==void 0?yt(e,1,Br(t.displayNamesLocale)):t.displayNamesLocale===void 0&&yt(e,1),t.maxResults!==void 0?Mi(e,2,t.maxResults):"maxResults"in t&&yt(e,2),t.scoreThreshold!==void 0?Pe(e,3,t.scoreThreshold):"scoreThreshold"in t&&yt(e,3),t.categoryAllowlist!==void 0?Uo(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&yt(e,4),t.categoryDenylist!==void 0?Uo(e,5,t.categoryDenylist):"categoryDenylist"in t&&yt(e,5),e}function Qu(t,e=-1,n=""){return{categories:t.map((i=>({index:Hn(i,1)??0??-1,score:Ot(i,2)??0,categoryName:Wn(i,3)??""??"",displayName:Wn(i,4)??""??""}))),headIndex:e,headName:n}}function ug(t){var e=Cs(t,3,hs,ws()),n=Cs(t,2,Or,ws()),i=Cs(t,1,Tr,ws()),s=Cs(t,9,Tr,ws());const r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=st(t,gc,4)?.h())&&(r.boundingBox={originX:Hn(e,1)??0,originY:Hn(e,2)??0,width:Hn(e,3)??0,height:Hn(e,4)??0,angle:0}),st(t,gc,4)?.g().length)for(const a of st(t,gc,4).g())r.keypoints.push({x:So(a,1)??0,y:So(a,2)??0,score:So(a,4)??0,label:Wn(a,3)??""});return r}function gl(t){const e=[];for(const n of ki(t,V0,1))e.push({x:Ot(n,1)??0,y:Ot(n,2)??0,z:Ot(n,3)??0,visibility:Ot(n,4)??0});return e}function fa(t){const e=[];for(const n of ki(t,z0,1))e.push({x:Ot(n,1)??0,y:Ot(n,2)??0,z:Ot(n,3)??0,visibility:Ot(n,4)??0});return e}function up(t){return Array.from(t,(e=>e>127?e-256:e))}function fp(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let ho;Ht[516587230]=[0,Bt,$u,Ch,Vt],Ht[518928384]=Ch;const Wy=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function fg(){if(ho===void 0)try{await WebAssembly.instantiate(Wy),ho=!0}catch{ho=!1}return ho}async function ea(t,e=_y``){const n=await fg()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var ys=class{};function dg(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function dp(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise(((n,i)=>{e.addEventListener("load",(()=>{n()}),!1),e.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(e)}))}importScripts(t.toString())}function pg(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function De(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function pp(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=pg(e);return!t.l||i===t.i.canvas.width&&s===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=s),[i,s]}function mp(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.i.stringToNewUTF8(e[s]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const s of i)t.i._free(s);t.i._free(e)}function ci(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function ji(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}ys.forVisionTasks=function(t){return ea("vision",t)},ys.forTextTasks=function(t){return ea("text",t)},ys.forGenAiExperimentalTasks=function(t){return ea("genai_experimental",t)},ys.forGenAiTasks=function(t){return ea("genai",t)},ys.forAudioTasks=function(t){return ea("audio",t)},ys.isSimdSupported=function(){return fg()};async function Xy(t,e,n,i){return t=await(async(s,r,a,o,l)=>{if(r&&await dp(r),!self.ModuleFactory||a&&(await dp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await t.o(i),t}function _c(t,e){const n=st(t.baseOptions,Fo,1)||new Fo;typeof e=="string"?(yt(n,2,Br(e)),yt(n,1)):e instanceof Uint8Array&&(yt(n,1,mu(e,!1)),yt(n,2)),Ue(t.baseOptions,0,1,n)}function gp(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map((n=>n.message)).join(", "))}finally{t.G=[]}}function ye(t,e){t.B=Math.max(t.B,e)}function _l(t,e){t.A=new hn,Nn(t.A,"PassThroughCalculator"),bt(t.A,"free_memory"),et(t.A,"free_memory_unused_out"),Tt(e,"free_memory"),Fn(e,t.A)}function Cr(t,e){bt(t.A,e),et(t.A,e+"_unused_out")}function vl(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var Ph=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){if(e){const n=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(st(this.baseOptions,Fo,1)?.g()||st(this.baseOptions,Fo,1)?.h()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=st(i.baseOptions,lp,3);if(!r){var a=r=new lp,o=new np;ha(a,4,Eo,o)}"delegate"in s&&(s.delegate==="GPU"?(s=r,a=new vy,ha(s,2,Eo,a)):(s=r,a=new np,ha(s,4,Eo,a))),Ue(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),_c(this,"/model.dat"),this.m(),this.J()}));if(n.modelAssetBuffer instanceof Uint8Array)_c(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const s=[];for(var r=0;;){const{done:a,value:o}=await i.read();if(a)break;s.push(o),r+=o.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(const a of s)i.set(a,r),r+=a.length;return i})(n.modelAssetBuffer).then((i=>{_c(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let t;if(this.g.ca((e=>{t=xy(e)})),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener(((n,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(t,e),this.A=void 0,gp(this)}finishProcessing(){this.g.finishProcessing(),gp(this)}close(){this.A=void 0,this.g.closeGraph()}};function Oi(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ph.prototype.close=Ph.prototype.close;class qy{constructor(e,n,i,s){this.g=e,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function _p(t,e,n){const i=t.g;if(n=Oi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function vp(t,e){const n=t.g,i=Oi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=Oi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.P),n.vertexAttribPointer(t.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=Oi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new qy(n,i,s,r)}function ef(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function tf(t,e,n,i){return ef(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=vp(t,!0)),n=t.s):(t.v||(t.v=vp(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function xl(t,e,n){return ef(t,e),t=Oi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Ml(t,e,n){ef(t,e),t.A||(t.A=Oi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function nf(t){t.g?.bindFramebuffer(t.g.FRAMEBUFFER,null)}var sf=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=Oi(t.createProgram(),"Failed to create WebGL program"),this.Z=_p(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Y=_p(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.P=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.Z),t.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function Pi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof Uint8Array));case 1:return t.g.find((n=>n instanceof Float32Array));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function Lh(t){var e=Pi(t,1);if(!e){if(e=Pi(t,0))e=new Float32Array(e).map((i=>i/255));else{e=new Float32Array(t.width*t.height);const i=Rr(t);var n=rf(t);if(Ml(n,i,mg(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function mg(t){let e=Pi(t,2);if(!e){const n=Rr(t);e=_g(t);const i=Lh(t),s=gg(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),Dh(t)}return e}function Rr(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Oi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function gg(t){if(t=Rr(t),!uo)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))uo=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");uo=t.R16F}return uo}function rf(t){return t.l||(t.l=new sf),t.l}function _g(t){const e=Rr(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Pi(t,2);return n||(n=xl(rf(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Dh(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var uo,Kt=class{constructor(t,e,n,i,s,r,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.j&&--xp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!Pi(this,0)}ja(){return!!Pi(this,1)}R(){return!!Pi(this,2)}ia(){return(e=Pi(t=this,0))||(e=Lh(t),e=new Uint8Array(e.map((n=>255*n))),t.g.push(e)),e;var t,e}ha(){return Lh(this)}N(){return mg(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=Rr(this),s=rf(this);i.activeTexture(i.TEXTURE1),n=xl(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=gg(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Ml(s,i,n),tf(s,i,!1,(()=>{_g(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Dh(this)})),nf(s),Dh(this)}}t.push(n)}return new Kt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Rr(this).deleteTexture(Pi(this,2)),xp=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.N,Kt.prototype.getAsFloat32Array=Kt.prototype.ha,Kt.prototype.getAsUint8Array=Kt.prototype.ia,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasFloat32Array=Kt.prototype.ja,Kt.prototype.hasUint8Array=Kt.prototype.Da;var xp=250;function pi(t,e){switch(e){case 0:return t.g.find((n=>n instanceof ImageData));case 1:return t.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return t.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${e}`)}}function vg(t){var e=pi(t,0);if(!e){e=Pr(t);const n=Sl(t),i=new Uint8Array(t.width*t.height*4);Ml(n,e,bo(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),nf(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function bo(t){let e=pi(t,2);if(!e){const n=Pr(t);e=To(t);const i=pi(t,1)||vg(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),ra(t)}return e}function Pr(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=Oi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Sl(t){return t.l||(t.l=new sf),t.l}function To(t){const e=Pr(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=pi(t,2);return n||(n=xl(Sl(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function ra(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Mp(t){const e=Pr(t);return tf(Sl(t),e,!0,(()=>(function(n,i){const s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();const r=s.width,a=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=a,n})(t,(()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))))}var Jt=class{constructor(t,e,n,i,s,r,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=s,this.width=r,this.height=a,(this.j||this.m)&&--Sp===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!pi(this,0)}ka(){return!!pi(this,1)}R(){return!!pi(this,2)}Aa(){return vg(this)}za(){var t=pi(this,1);return t||(bo(this),To(this),t=Mp(this),ra(this),this.g.push(t),this.j=!0),t}N(){return bo(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Pr(this),s=Sl(this);i.activeTexture(i.TEXTURE1),n=xl(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Ml(s,i,n),tf(s,i,!1,(()=>{To(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ra(this)})),nf(s),ra(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);bo(this),To(this),n=Mp(this),ra(this)}t.push(n)}return new Jt(t,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&pi(this,1).close(),this.m&&Pr(this).deleteTexture(pi(this,2)),Sp=-1}};Jt.prototype.close=Jt.prototype.close,Jt.prototype.clone=Jt.prototype.clone,Jt.prototype.getAsWebGLTexture=Jt.prototype.N,Jt.prototype.getAsImageBitmap=Jt.prototype.za,Jt.prototype.getAsImageData=Jt.prototype.Aa,Jt.prototype.hasWebGLTexture=Jt.prototype.R,Jt.prototype.hasImageBitmap=Jt.prototype.ka,Jt.prototype.hasImageData=Jt.prototype.Ca;var Sp=250;function ai(...t){return t.map((([e,n])=>({start:e,end:n})))}const Yy=(function(t){return class extends t{Ha(){this.i._registerModelResourcesGraphService()}}})((yp=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:dg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),De(this,i||"input_audio",(r=>{De(this,s=s||"audio_header",(a=>{this.i._configureAudio(r,a,t,e??0,n)}))}))}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}ca(t){ci(this,"__graph_config__",(e=>{t(e)})),De(this,"__graph_config__",(e=>{this.i._getGraphConfig(e,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){const r=4*t.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(t,this.g/4),De(this,i,(a=>{this.i._addAudioToInputStream(this.g,e,n,a,s)}))}addGpuBufferToStream(t,e,n){De(this,e,(i=>{const[s,r]=pp(this,t,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(t,e,n){De(this,e,(i=>{this.i._addBoolToInputStream(t,i,n)}))}addDoubleToStream(t,e,n){De(this,e,(i=>{this.i._addDoubleToInputStream(t,i,n)}))}addFloatToStream(t,e,n){De(this,e,(i=>{this.i._addFloatToInputStream(t,i,n)}))}addIntToStream(t,e,n){De(this,e,(i=>{this.i._addIntToInputStream(t,i,n)}))}addUintToStream(t,e,n){De(this,e,(i=>{this.i._addUintToInputStream(t,i,n)}))}addStringToStream(t,e,n){De(this,e,(i=>{De(this,t,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(t,e,n){De(this,e,(i=>{mp(this,Object.keys(t),(s=>{mp(this,Object.values(t),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)}))}))}))}addProtoToStream(t,e,n,i){De(this,n,(s=>{De(this,e,(r=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,r,s,i),this.i._free(a)}))}))}addEmptyPacketToStream(t,e){De(this,t,(n=>{this.i._addEmptyPacketToInputStream(n,e)}))}addBoolVectorToStream(t,e,n){De(this,e,(i=>{const s=this.i._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(t,e,n){De(this,e,(i=>{const s=this.i._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(t,e,n){De(this,e,(i=>{const s=this.i._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(t,e,n){De(this,e,(i=>{const s=this.i._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(t,e,n){De(this,e,(i=>{const s=this.i._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(t,e,n){De(this,e,(i=>{const s=this.i._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of t)De(this,r,(a=>{this.i._addStringVectorEntry(s,a)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(t,e){De(this,e,(n=>{this.i._addBoolToInputSidePacket(t,n)}))}addDoubleToInputSidePacket(t,e){De(this,e,(n=>{this.i._addDoubleToInputSidePacket(t,n)}))}addFloatToInputSidePacket(t,e){De(this,e,(n=>{this.i._addFloatToInputSidePacket(t,n)}))}addIntToInputSidePacket(t,e){De(this,e,(n=>{this.i._addIntToInputSidePacket(t,n)}))}addUintToInputSidePacket(t,e){De(this,e,(n=>{this.i._addUintToInputSidePacket(t,n)}))}addStringToInputSidePacket(t,e){De(this,e,(n=>{De(this,t,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(t,e,n){De(this,n,(i=>{De(this,e,(s=>{const r=this.i._malloc(t.length);this.i.HEAPU8.set(t,r),this.i._addProtoToInputSidePacket(r,t.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(t,e){De(this,e,(n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of t)De(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(t,e){ci(this,t,e),De(this,t,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(t,e){ji(this,t,e),De(this,t,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(t,e){ci(this,t,e),De(this,t,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(t,e){ji(this,t,e),De(this,t,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(t,e){ci(this,t,e),De(this,t,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(t,e){ji(this,t,e),De(this,t,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(t,e){ci(this,t,e),De(this,t,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(t,e){ji(this,t,e),De(this,t,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(t,e){ci(this,t,e),De(this,t,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(t,e){ji(this,t,e),De(this,t,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(t,e){ci(this,t,e),De(this,t,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(t,e){ji(this,t,e),De(this,t,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(t,e,n){ci(this,t,e),De(this,t,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(t,e,n){ji(this,t,e),De(this,t,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ci(this,t,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)})),De(this,t,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends yp{get ea(){return this.i}oa(t,e,n){De(this,e,(i=>{const[s,r]=pp(this,t,i);this.ea._addBoundTextureAsImageToStream(i,s,r,n)}))}V(t,e){ci(this,t,e),De(this,t,(n=>{this.ea._attachImageListener(n)}))}ba(t,e){ji(this,t,e),De(this,t,(n=>{this.ea._attachImageVectorListener(n)}))}}));var yp,Xn=class extends Yy{};async function Qe(t,e,n){return(async function(i,s,r,a){return Xy(i,s,r,a)})(t,n.canvas??(dg()?void 0:document.createElement("canvas")),e,n)}function xg(t,e,n,i){if(t.U){const r=new G0;if(n?.regionOfInterest){if(!t.na)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Pe(r,1,(s.left+s.right)/2),Pe(r,2,(s.top+s.bottom)/2),Pe(r,4,s.right-s.left),Pe(r,3,s.bottom-s.top)}else Pe(r,1,.5),Pe(r,2,.5),Pe(r,4,1),Pe(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Pe(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=pg(e);n=Ot(r,3)*o/a,s=Ot(r,4)*a/o,Pe(r,4,n),Pe(r,3,s)}}t.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",t.U,i)}t.g.oa(e,t.Z,i??performance.now()),t.finishProcessing()}function qn(t,e,n){if(t.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");xg(t,e,n,t.B+1)}function yi(t,e,n,i){if(!t.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");xg(t,e,n,i)}function Lr(t,e,n,i){var s=e.data;const r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new Kt([s],n,!1,t.g.i.canvas,t.P,r,e),i?t.clone():t}var Sn=class extends Ph{constructor(t,e,n,i){super(t),this.g=t,this.Z=e,this.U=n,this.na=i,this.P=new sf}l(t,e=!0){if("runningMode"in t&&wa(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.P.close(),super.close()}};Sn.prototype.close=Sn.prototype.close;var kn=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Ue(t=this.h=new ml,0,1,e=new Ct),Pe(this.h,2,.5),Pe(this.h,3,.3)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Pe(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Pe(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},qn(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},yi(this,t,n,e),this.j}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect_in"),at(t,"detections");const e=new In;ii(e,Ly,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect_in"),et(n,"DETECTIONS:detections"),n.o(e),Fn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=k0(r),this.j.detections.push(ug(i));ye(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};kn.prototype.detectForVideo=kn.prototype.F,kn.prototype.detect=kn.prototype.D,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=async function(t,e){return Qe(kn,t,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(t,e){return Qe(kn,t,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(t,e){return Qe(kn,t,e)};var af=ai([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),of=ai([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),lf=ai([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Mg=ai([474,475],[475,476],[476,477],[477,474]),cf=ai([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),hf=ai([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Sg=ai([469,470],[470,471],[471,472],[472,469]),uf=ai([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),yg=[...af,...of,...lf,...cf,...hf,...uf],Eg=ai([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Ep(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var It=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ue(t=this.h=new Y0,0,1,e=new Ct),this.v=new q0,Ue(this.h,0,3,this.v),this.s=new ml,Ue(this.h,0,2,this.s),Mi(this.s,4,1),Pe(this.s,2,.5),Pe(this.v,2,.5),Pe(this.h,4,.5)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numFaces"in t&&Mi(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Pe(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Pe(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return Ep(this),qn(this,t,e),this.j}F(t,e,n){return Ep(this),yi(this,t,n,e),this.j}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect"),at(t,"face_landmarks");const e=new In;ii(e,Iy,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),et(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Fn(t,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=Na(r),this.j.faceLandmarks.push(gl(i));ye(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ye(this,i)})),this.outputFaceBlendshapes&&(at(t,"blendshapes"),et(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=pl(r),this.j.faceBlendshapes.push(Qu(i.g()??[]));ye(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ye(this,i)}))),this.outputFacialTransformationMatrixes&&(at(t,"face_geometry"),et(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=st(Dy(r),Ey,2))&&this.j.facialTransformationMatrixes.push({rows:Hn(i,1)??0??0,columns:Hn(i,2)??0??0,data:Cs(i,3,hs,ws()).slice()??[]});ye(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ye(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};It.prototype.detectForVideo=It.prototype.F,It.prototype.detect=It.prototype.D,It.prototype.setOptions=It.prototype.o,It.createFromModelPath=function(t,e){return Qe(It,t,{baseOptions:{modelAssetPath:e}})},It.createFromModelBuffer=function(t,e){return Qe(It,t,{baseOptions:{modelAssetBuffer:e}})},It.createFromOptions=function(t,e){return Qe(It,t,e)},It.FACE_LANDMARKS_LIPS=af,It.FACE_LANDMARKS_LEFT_EYE=of,It.FACE_LANDMARKS_LEFT_EYEBROW=lf,It.FACE_LANDMARKS_LEFT_IRIS=Mg,It.FACE_LANDMARKS_RIGHT_EYE=cf,It.FACE_LANDMARKS_RIGHT_EYEBROW=hf,It.FACE_LANDMARKS_RIGHT_IRIS=Sg,It.FACE_LANDMARKS_FACE_OVAL=uf,It.FACE_LANDMARKS_CONTOURS=yg,It.FACE_LANDMARKS_TESSELATION=Eg;var hi=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!0),Ue(t=this.j=new K0,0,1,e=new Ct)}get baseOptions(){return st(this.j,Ct,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){return super.l(t)}Ka(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,qn(this,t,i??{}),!this.h)return this.s}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect"),at(t,"stylized_image");const e=new In;ii(e,Uy,this.j);const n=new hn;Nn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),et(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Fn(t,n),this.g.V("stylized_image",((i,s)=>{var r=!this.h,a=i.data,o=i.width;const l=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*l){const c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=a[3*h],c[4*h+1]=a[3*h+1],c[4*h+2]=a[3*h+2],c[4*h+3]=255;a=new ImageData(c,o,i)}else{if(a.length!==4*l)throw Error("Unsupported channel count: "+a.length/l);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new Jt([a],!1,!1,this.g.i.canvas,this.P,o,i),this.s=r=r?o.clone():o,this.h&&this.h(r),ye(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};hi.prototype.stylize=hi.prototype.Ka,hi.prototype.setOptions=hi.prototype.o,hi.createFromModelPath=function(t,e){return Qe(hi,t,{baseOptions:{modelAssetPath:e}})},hi.createFromModelBuffer=function(t,e){return Qe(hi,t,{baseOptions:{modelAssetBuffer:e}})},hi.createFromOptions=function(t,e){return Qe(hi,t,e)};var ff=ai([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function bp(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Tp(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Ap(t,e=!0){const n=[];for(const s of t){var i=pl(s);t=[];for(const r of i.g())i=e&&Hn(r,1)!=null?Hn(r,1)??0:-1,t.push({score:Ot(r,2)??0,index:i,categoryName:Wn(r,3)??""??"",displayName:Wn(r,4)??""??""});n.push(t)}return n}var wn=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(t=this.j=new Z0,0,1,e=new Ct),this.s=new Ku,Ue(this.j,0,2,this.s),this.C=new ju,Ue(this.s,0,3,this.C),this.v=new $0,Ue(this.s,0,2,this.v),this.h=new Ny,Ue(this.j,0,3,this.h),Pe(this.v,2,.5),Pe(this.s,4,.5),Pe(this.C,2,.5)}get baseOptions(){return st(this.j,Ct,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){if(Mi(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new sr,n=e,i=Rh(t.cannedGesturesClassifierOptions,st(this.h,sr,3)?.h());Ue(n,0,2,i),Ue(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&st(this.h,sr,3)?.g();return t.customGesturesClassifierOptions?(Ue(n=e=new sr,0,2,i=Rh(t.customGesturesClassifierOptions,st(this.h,sr,4)?.h())),Ue(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&st(this.h,sr,4)?.g(),this.l(t)}Fa(t,e){return bp(this),qn(this,t,e),Tp(this)}Ga(t,e,n){return bp(this),yi(this,t,n,e),Tp(this)}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect"),at(t,"hand_gestures"),at(t,"hand_landmarks"),at(t,"world_hand_landmarks"),at(t,"handedness");const e=new In;ii(e,Fy,this.j);const n=new hn;Nn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),et(n,"HAND_GESTURES:hand_gestures"),et(n,"LANDMARKS:hand_landmarks"),et(n,"WORLD_LANDMARKS:world_hand_landmarks"),et(n,"HANDEDNESS:handedness"),n.o(e),Fn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=Na(r);const a=[];for(const o of ki(i,V0,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.landmarks.push(a)}ye(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=fr(r);const a=[];for(const o of ki(i,z0,1))a.push({x:Ot(o,1)??0,y:Ot(o,2)??0,z:Ot(o,3)??0,visibility:Ot(o,4)??0});this.worldLandmarks.push(a)}ye(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Ap(i,!1)),ye(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Ap(i)),ye(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function wp(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}wn.prototype.recognizeForVideo=wn.prototype.Ga,wn.prototype.recognize=wn.prototype.Fa,wn.prototype.setOptions=wn.prototype.o,wn.createFromModelPath=function(t,e){return Qe(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return Qe(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return Qe(wn,t,e)},wn.HAND_CONNECTIONS=ff;var gn=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ue(t=this.h=new Ku,0,1,e=new Ct),this.s=new ju,Ue(this.h,0,3,this.s),this.j=new $0,Ue(this.h,0,2,this.j),Mi(this.j,3,1),Pe(this.j,2,.5),Pe(this.s,2,.5),Pe(this.h,4,.5)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numHands"in t&&Mi(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&Pe(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Pe(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qn(this,t,e),wp(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],yi(this,t,n,e),wp(this)}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect"),at(t,"hand_landmarks"),at(t,"world_hand_landmarks"),at(t,"handedness");const e=new In;ii(e,Oy,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),et(n,"LANDMARKS:hand_landmarks"),et(n,"WORLD_LANDMARKS:world_hand_landmarks"),et(n,"HANDEDNESS:handedness"),n.o(e),Fn(t,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=Na(r),this.landmarks.push(gl(i));ye(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=fr(r),this.worldLandmarks.push(fa(i));ye(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ye(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,a=r.push;const o=[];for(const l of i){i=pl(l);const c=[];for(const h of i.g())c.push({score:Ot(h,2)??0,index:Hn(h,1)??0??-1,categoryName:Wn(h,3)??""??"",displayName:Wn(h,4)??""??""});o.push(c)}a.call(r,...o),ye(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};gn.prototype.detectForVideo=gn.prototype.F,gn.prototype.detect=gn.prototype.D,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(t,e){return Qe(gn,t,{baseOptions:{modelAssetPath:e}})},gn.createFromModelBuffer=function(t,e){return Qe(gn,t,{baseOptions:{modelAssetBuffer:e}})},gn.createFromOptions=function(t,e){return Qe(gn,t,e)},gn.HAND_CONNECTIONS=ff;var bg=ai([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Cp(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Rp(t){try{if(!t.C)return t.h;t.C(t.h)}finally{vl(t)}}function fo(t,e){t=Na(t),e.push(gl(t))}var At=class extends Sn{constructor(t,e){super(new Xn(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ue(t=this.j=new ig,0,1,e=new Ct),this.K=new ju,Ue(this.j,0,2,this.K),this.Y=new By,Ue(this.j,0,3,this.Y),this.s=new ml,Ue(this.j,0,4,this.s),this.H=new q0,Ue(this.j,0,5,this.H),this.v=new tg,Ue(this.j,0,6,this.v),this.L=new ng,Ue(this.j,0,7,this.L),Pe(this.s,2,.5),Pe(this.s,3,.3),Pe(this.H,2,.5),Pe(this.v,2,.5),Pe(this.v,3,.3),Pe(this.L,2,.5),Pe(this.K,2,.5)}get baseOptions(){return st(this.j,Ct,1)}set baseOptions(t){Ue(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Pe(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Pe(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Pe(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Pe(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Pe(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Pe(this.L,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Pe(this.K,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,Cp(this),qn(this,t,i),Rp(this)}F(t,e,n,i){const s=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,Cp(this),yi(this,t,s,e),Rp(this)}m(){var t=new yn;Tt(t,"input_frames_image"),at(t,"pose_landmarks"),at(t,"pose_world_landmarks"),at(t,"face_landmarks"),at(t,"left_hand_landmarks"),at(t,"left_hand_world_landmarks"),at(t,"right_hand_landmarks"),at(t,"right_hand_world_landmarks");const e=new In,n=new Zd;Eh(n,1,Br("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))yt(s,2,tl(r,Eu,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof Ni||Us(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Eh(s,2,mu(r,!1),Ns())}})(n,this.j.g());const i=new hn;Nn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Io(i,8,Zd,n),bt(i,"IMAGE:input_frames_image"),et(i,"POSE_LANDMARKS:pose_landmarks"),et(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),et(i,"FACE_LANDMARKS:face_landmarks"),et(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),et(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),et(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),et(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Fn(t,i),_l(this,t),this.g.attachProtoListener("pose_landmarks",((s,r)=>{fo(s,this.h.poseLandmarks),ye(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{ye(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var a=this.h.poseWorldLandmarks;s=fr(s),a.push(fa(s)),ye(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{ye(this,s)})),this.outputPoseSegmentationMasks&&(et(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Cr(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Lr(this,s,!0,!this.C)],ye(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],ye(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{fo(s,this.h.faceLandmarks),ye(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{ye(this,s)})),this.outputFaceBlendshapes&&(at(t,"extra_blendshapes"),et(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=pl(s),a.push(Qu(s.g()??[]))),ye(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{ye(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{fo(s,this.h.leftHandLandmarks),ye(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{ye(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var a=this.h.leftHandWorldLandmarks;s=fr(s),a.push(fa(s)),ye(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{ye(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{fo(s,this.h.rightHandLandmarks),ye(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{ye(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var a=this.h.rightHandWorldLandmarks;s=fr(s),a.push(fa(s)),ye(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{ye(this,s)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};At.prototype.detectForVideo=At.prototype.F,At.prototype.detect=At.prototype.D,At.prototype.setOptions=At.prototype.o,At.createFromModelPath=function(t,e){return Qe(At,t,{baseOptions:{modelAssetPath:e}})},At.createFromModelBuffer=function(t,e){return Qe(At,t,{baseOptions:{modelAssetBuffer:e}})},At.createFromOptions=function(t,e){return Qe(At,t,e)},At.HAND_CONNECTIONS=ff,At.POSE_CONNECTIONS=bg,At.FACE_LANDMARKS_LIPS=af,At.FACE_LANDMARKS_LEFT_EYE=of,At.FACE_LANDMARKS_LEFT_EYEBROW=lf,At.FACE_LANDMARKS_LEFT_IRIS=Mg,At.FACE_LANDMARKS_RIGHT_EYE=cf,At.FACE_LANDMARKS_RIGHT_EYEBROW=hf,At.FACE_LANDMARKS_RIGHT_IRIS=Sg,At.FACE_LANDMARKS_FACE_OVAL=uf,At.FACE_LANDMARKS_CONTOURS=yg,At.FACE_LANDMARKS_TESSELATION=Eg;var zn=class extends Sn{constructor(t,e){super(new Xn(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Ue(t=this.h=new sg,0,1,e=new Ct)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return Ue(this.h,0,2,Rh(t,st(this.h,Xu,2))),this.l(t)}qa(t,e){return this.j={classifications:[]},qn(this,t,e),this.j}ra(t,e,n){return this.j={classifications:[]},yi(this,t,n,e),this.j}m(){var t=new yn;Tt(t,"input_image"),Tt(t,"norm_rect"),at(t,"classifications");const e=new In;ii(e,ky,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),bt(n,"IMAGE:input_image"),bt(n,"NORM_RECT:norm_rect"),et(n,"CLASSIFICATIONS:classifications"),n.o(e),Fn(t,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){const a={classifications:ki(r,Ty,1).map((o=>Qu(st(o,O0,4)?.g()??[],Hn(o,2)??0,Wn(o,3)??"")))};return Mh(Ar(r,2))!=null&&(a.timestampMs=Mh(Ar(r,2))??0),a})(Ay(i)),ye(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};zn.prototype.classifyForVideo=zn.prototype.ra,zn.prototype.classify=zn.prototype.qa,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=function(t,e){return Qe(zn,t,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(t,e){return Qe(zn,t,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(t,e){return Qe(zn,t,e)};var Cn=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!0),this.h=new rg,this.embeddings={embeddings:[]},Ue(t=this.h,0,1,e=new Ct)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){var e=this.h,n=st(this.h,op,2);return n=n?n.clone():new op,t.l2Normalize!==void 0?wa(n,1,t.l2Normalize):"l2Normalize"in t&&yt(n,1),t.quantize!==void 0?wa(n,2,t.quantize):"quantize"in t&&yt(n,2),Ue(e,0,2,n),this.l(t)}xa(t,e){return qn(this,t,e),this.embeddings}ya(t,e,n){return yi(this,t,n,e),this.embeddings}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect"),at(t,"embeddings_out");const e=new In;ii(e,zy,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),et(n,"EMBEDDINGS:embeddings_out"),n.o(e),Fn(t,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=Ry(i),this.embeddings=(function(r){return{embeddings:ki(r,Cy,1).map((a=>{const o={headIndex:Hn(a,3)??0??-1,headName:Wn(a,4)??""??""};if(i0(a,ap,fc(a,1))!==void 0)a=Cs(a=st(a,ap,fc(a,1)),1,hs,ws()),o.floatEmbedding=a.slice();else{const l=new Uint8Array(0);o.quantizedEmbedding=st(a,wy,fc(a,2))?.ma()?.h()??l}return o})),timestampMs:Mh(Ar(r,2))??0}})(i),ye(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Cn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=fp(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=fp(up(t.quantizedEmbedding),up(e.quantizedEmbedding))}return t},Cn.prototype.embedForVideo=Cn.prototype.ya,Cn.prototype.embed=Cn.prototype.xa,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(t,e){return Qe(Cn,t,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(t,e){return Qe(Cn,t,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(t,e){return Qe(Cn,t,e)};var Ih=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};function Pp(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Lp(t){try{const e=new Ih(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{vl(t)}}Ih.prototype.close=Ih.prototype.close;var mn=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Zu,this.v=new ag,Ue(this.h,0,3,this.v),Ue(t=this.h,0,1,e=new Ct)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?yt(this.h,2,Br(t.displayNamesLocale)):"displayNamesLocale"in t&&yt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}J(){(function(t){const e=ki(t.ca(),hn,1).filter((n=>(Wn(n,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(st(e[0],In,7)?.l()?.g()??new Map).forEach(((n,i)=>{t.s[Number(i)]=Wn(n,1)??""}))})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Pp(this),qn(this,t,i),Lp(this)}Ia(t,e,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Pp(this),yi(this,t,s,e),Lp(this)}Ba(){return this.s}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect");const e=new In;ii(e,lg,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),n.o(e),Fn(t,n),_l(this,t),this.outputConfidenceMasks&&(at(t,"confidence_masks"),et(n,"CONFIDENCE_MASKS:confidence_masks"),Cr(this,"confidence_masks"),this.g.ba("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Lr(this,r,!0,!this.j))),ye(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ye(this,i)}))),this.outputCategoryMask&&(at(t,"category_mask"),et(n,"CATEGORY_MASK:category_mask"),Cr(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=Lr(this,i,!1,!this.j),ye(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ye(this,i)}))),at(t,"quality_scores"),et(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,ye(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};mn.prototype.getLabels=mn.prototype.Ba,mn.prototype.segmentForVideo=mn.prototype.Ia,mn.prototype.segment=mn.prototype.segment,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(t,e){return Qe(mn,t,{baseOptions:{modelAssetPath:e}})},mn.createFromModelBuffer=function(t,e){return Qe(mn,t,{baseOptions:{modelAssetBuffer:e}})},mn.createFromOptions=function(t,e){return Qe(mn,t,e)};var Uh=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach((t=>{t.close()})),this.categoryMask?.close()}};Uh.prototype.close=Uh.prototype.close;var jy=class extends Ce{constructor(t){super(t)}},rr=[0,Ft,-2],Oo=[0,Ri,-3,wt,Ri,-1],Dp=[0,Oo],Ip=[0,Oo,Ft,-1],vc=class extends Ce{constructor(t){super(t)}},Up=[0,Ri,-1,wt],Ky=class extends Ce{constructor(t){super(t)}},Np=class extends Ce{constructor(t){super(t)}},Nh=[1,2,3,4,5,6,7,8,9,10,14,15],Tg=class extends Ce{constructor(t){super(t)}};Tg.prototype.g=dl([0,Xt,[0,Nh,lt,Oo,lt,[0,Oo,rr],lt,Dp,lt,[0,Dp,rr],lt,Up,lt,[0,Ri,-3,wt,Dn],lt,[0,Ri,-3,wt],lt,[0,ct,Ri,-2,wt,Ft,wt,-1,2,Ri,rr],lt,Ip,lt,[0,Ip,rr],Ri,rr,ct,lt,[0,Ri,-3,wt,rr,-1],lt,[0,Xt,Up]],ct,[0,ct,Ft,-1,wt]]);var ui=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Zu,this.s=new ag,Ue(this.h,0,3,this.s),Ue(t=this.h,0,1,e=new Ct)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const s=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Tg;const r=new Np;var a=new jy;if(Mi(a,1,255),Ue(r,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new vc;wa(o,3,!0),Pe(o,1,e.keypoint.x),Pe(o,2,e.keypoint.y),ha(r,5,Nh,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new Ky,e.scribble))wa(e=new vc,3,!0),Pe(e,1,o.x),Pe(e,2,o.y),Io(a,1,vc,e);ha(r,15,Nh,a)}Io(i,1,Np,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),qn(this,t,s);e:{try{const c=new Uh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break e}this.j(c)}finally{vl(this)}l=void 0}return l}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"roi_in"),Tt(t,"norm_rect_in");const e=new In;ii(e,lg,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),bt(n,"IMAGE:image_in"),bt(n,"ROI:roi_in"),bt(n,"NORM_RECT:norm_rect_in"),n.o(e),Fn(t,n),_l(this,t),this.outputConfidenceMasks&&(at(t,"confidence_masks"),et(n,"CONFIDENCE_MASKS:confidence_masks"),Cr(this,"confidence_masks"),this.g.ba("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Lr(this,r,!0,!this.j))),ye(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ye(this,i)}))),this.outputCategoryMask&&(at(t,"category_mask"),et(n,"CATEGORY_MASK:category_mask"),Cr(this,"category_mask"),this.g.V("category_mask",((i,s)=>{this.categoryMask=Lr(this,i,!1,!this.j),ye(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ye(this,i)}))),at(t,"quality_scores"),et(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,ye(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ui.prototype.segment=ui.prototype.segment,ui.prototype.setOptions=ui.prototype.o,ui.createFromModelPath=function(t,e){return Qe(ui,t,{baseOptions:{modelAssetPath:e}})},ui.createFromModelBuffer=function(t,e){return Qe(ui,t,{baseOptions:{modelAssetBuffer:e}})},ui.createFromOptions=function(t,e){return Qe(ui,t,e)};var Vn=class extends Sn{constructor(t,e){super(new Xn(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ue(t=this.h=new cg,0,1,e=new Ct)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?yt(this.h,2,Br(t.displayNamesLocale)):"displayNamesLocale"in t&&yt(this.h,2),t.maxResults!==void 0?Mi(this.h,3,t.maxResults):"maxResults"in t&&yt(this.h,3),t.scoreThreshold!==void 0?Pe(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&yt(this.h,4),t.categoryAllowlist!==void 0?Uo(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&yt(this.h,5),t.categoryDenylist!==void 0?Uo(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&yt(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},qn(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},yi(this,t,n,e),this.j}m(){var t=new yn;Tt(t,"input_frame_gpu"),Tt(t,"norm_rect"),at(t,"detections");const e=new In;ii(e,Gy,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),bt(n,"IMAGE:input_frame_gpu"),bt(n,"NORM_RECT:norm_rect"),et(n,"DETECTIONS:detections"),n.o(e),Fn(t,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=k0(r),this.j.detections.push(ug(i));ye(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Vn.prototype.detectForVideo=Vn.prototype.F,Vn.prototype.detect=Vn.prototype.D,Vn.prototype.setOptions=Vn.prototype.o,Vn.createFromModelPath=async function(t,e){return Qe(Vn,t,{baseOptions:{modelAssetPath:e}})},Vn.createFromModelBuffer=function(t,e){return Qe(Vn,t,{baseOptions:{modelAssetBuffer:e}})},Vn.createFromOptions=function(t,e){return Qe(Vn,t,e)};var Fh=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((t=>{t.close()}))}};function Fp(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Op(t){try{const e=new Fh(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{vl(t)}}Fh.prototype.close=Fh.prototype.close;var Rn=class extends Sn{constructor(t,e){super(new Xn(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ue(t=this.h=new hg,0,1,e=new Ct),this.v=new ng,Ue(this.h,0,3,this.v),this.j=new tg,Ue(this.h,0,2,this.j),Mi(this.j,4,1),Pe(this.j,2,.5),Pe(this.v,2,.5),Pe(this.h,4,.5)}get baseOptions(){return st(this.h,Ct,1)}set baseOptions(t){Ue(this.h,0,1,t)}o(t){return"numPoses"in t&&Mi(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Pe(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Pe(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Pe(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,Fp(this),qn(this,t,i),Op(this)}F(t,e,n,i){const s=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Fp(this),yi(this,t,s,e),Op(this)}m(){var t=new yn;Tt(t,"image_in"),Tt(t,"norm_rect"),at(t,"normalized_landmarks"),at(t,"world_landmarks"),at(t,"segmentation_masks");const e=new In;ii(e,Hy,this.h);const n=new hn;Nn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),bt(n,"IMAGE:image_in"),bt(n,"NORM_RECT:norm_rect"),et(n,"NORM_LANDMARKS:normalized_landmarks"),et(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Fn(t,n),_l(this,t),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=Na(r),this.landmarks.push(gl(i));ye(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ye(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=fr(r),this.worldLandmarks.push(fa(i));ye(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ye(this,i)})),this.outputSegmentationMasks&&(et(n,"SEGMENTATION_MASK:segmentation_masks"),Cr(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Lr(this,r,!0,!this.s))),ye(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ye(this,i)}))),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rn.prototype.detectForVideo=Rn.prototype.F,Rn.prototype.detect=Rn.prototype.D,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(t,e){return Qe(Rn,t,{baseOptions:{modelAssetPath:e}})},Rn.createFromModelBuffer=function(t,e){return Qe(Rn,t,{baseOptions:{modelAssetBuffer:e}})},Rn.createFromOptions=function(t,e){return Qe(Rn,t,e)},Rn.POSE_CONNECTIONS=bg;const Jy="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm",$y="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Zy={video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:30}}};class Qy{handLandmarker;lastVideoTime;animationFrameId;video;options;callbacks;constructor(e,n,i){this.video=e,this.options=n,this.callbacks=i,this.handLandmarker=null,this.lastVideoTime=-1,this.animationFrameId=null}async init(){if(this.video){this.updateDebug("Loading MediaPipe models...");try{if(!await this.tryLoadModels())throw new Error("Unable to load MediaPipe models.");const n=await navigator.mediaDevices.getUserMedia(Zy);this.video.srcObject=n,this.video.addEventListener("loadeddata",()=>{this.video.play(),this.callbacks.onReady(),this.predict()}),this.updateDebug("Webcam active. Show hand.")}catch(e){const n=e instanceof Error?e.message:String(e);this.updateDebug(`Camera Error: ${n}`),this.callbacks.onError(n)}}}dispose(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.handLandmarker&&(this.handLandmarker.close(),this.handLandmarker=null),this.video.srcObject&&(this.video.srcObject.getTracks().forEach(e=>e.stop()),this.video.srcObject=null)}async tryLoadModels(){try{return await this.loadFrom(Jy,$y),this.updateDebug("Loaded MediaPipe models from CDN."),!0}catch(e){console.warn("CDN model loading failed, falling back to local files.",e);const n="/christmas-tree/";try{return await this.loadFrom(`${n}mediapipe/wasm`,`${n}mediapipe/models/hand_landmarker.task`),this.updateDebug("Loaded MediaPipe models from local assets."),!0}catch(i){return console.error("MediaPipe model loading failed",i),!1}}}async loadFrom(e,n){const i=await ys.forVisionTasks(e);this.handLandmarker=await gn.createFromOptions(i,{baseOptions:{modelAssetPath:n,delegate:this.options.delegate},runningMode:"VIDEO",numHands:this.options.numHands})}predict(){if(!this.handLandmarker){this.animationFrameId=requestAnimationFrame(()=>this.predict());return}if(this.video.currentTime!==this.lastVideoTime){this.lastVideoTime=this.video.currentTime;const e=this.handLandmarker.detectForVideo(this.video,performance.now()),n=this.processGestures(e);this.callbacks.onData(n)}this.animationFrameId=requestAnimationFrame(()=>this.predict())}processGestures(e){if(e.landmarks&&e.landmarks.length>0){const n=e.landmarks[0],i=n[4],s=n[8],r=n[0],a=n[9],o={x:(a.x-.5)*2,y:(a.y-.5)*2},l=Math.hypot(a.x-r.x,a.y-r.y);if(l<.02)return{detected:!1,position:o,ratios:{extensionRatio:0,pinchRatio:0,handSize:0}};const c=[n[8],n[12],n[16],n[20]];let h=0;c.forEach(p=>{h+=Math.hypot(p.x-r.x,p.y-r.y)}),h/=4;const u=Math.hypot(i.x-s.x,i.y-s.y),f={handSize:l,extensionRatio:h/l,pinchRatio:u/l};return this.options.debugMode&&this.options.debugElement&&(this.options.debugElement.innerText=`Detected | Ext: ${f.extensionRatio.toFixed(2)} | Pinch: ${f.pinchRatio.toFixed(2)} | Pos: (${o.x.toFixed(2)}, ${o.y.toFixed(2)})`),{detected:!0,position:o,ratios:f}}return this.updateDebug("No hand detected"),{detected:!1,position:{x:0,y:0},ratios:{extensionRatio:0,pinchRatio:0,handSize:0}}}updateDebug(e){this.options.debugMode&&this.options.debugElement&&(this.options.debugElement.innerText=e)}}function eE(t){let e=null;const n=async()=>{await Fg();const s=t.getVideoElement();s&&(e=new Qy(s,{delegate:t.delegate,numHands:t.numHands,debugElement:t.getDebugElement(),debugMode:t.debugMode},{onData:r=>t.emitters.onTrackingData(r),onReady:t.emitters.onReady,onError:t.emitters.onError}),e.init())},i=()=>{e?.dispose(),e=null};return Oh(n),kp(i),{start:n,stop:i}}const tE=Ra({__name:"WebcamHandTracker",props:{debugMode:{type:Boolean,default:!0},delegate:{default:"GPU"},numHands:{default:1}},emits:["tracking-data","error","ready"],setup(t,{emit:e}){const n=t,i=Og(n,"debugMode"),s=e,r=fi(null),a=fi(null);return eE({getVideoElement:()=>r.value,getDebugElement:()=>a.value,delegate:n.delegate,numHands:n.numHands,debugMode:i.value,emitters:{onTrackingData:o=>s("tracking-data",o),onReady:()=>s("ready"),onError:o=>s("error",o)}}),(o,l)=>(Rs(),Bo("div",null,[Wt("video",{ref_key:"webcamVideo",ref:r,class:"h-full w-full -scale-x-100 object-cover",autoplay:"",playsinline:""},null,512),Bg(Wt("div",{ref_key:"debugInfo",ref:a,class:"pointer-events-none absolute bottom-1 left-1 right-1 bg-[rgba(0,0,0,0.5)] px-1.5 py-1 font-mono text-[10px] text-[rgba(212,175,55,0.8)]"}," Awaiting MediaPipe initialization... ",512),[[kg,i.value]])]))}}),nE={id:"ui-layer",class:"pointer-events-none absolute inset-0 z-10 flex flex-col items-center pt-10 transition-opacity duration-500 ease-out"},iE={class:"flex gap-2.5"},sE={class:"group flex h-[38px] min-w-[120px] cursor-pointer items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.6)] px-5 text-[10px] uppercase tracking-[2px] text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] backdrop-blur-sm"},rE={class:"group flex h-[38px] min-w-[120px] cursor-pointer items-center justify-center border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.6)] px-5 text-[10px] uppercase tracking-[2px] text-[#d4af37] transition duration-300 hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] backdrop-blur-sm"},aE={class:"lg:hidden fixed bottom-4 right-4 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(20,20,20,0.75)] text-[#d4af37] shadow-lg backdrop-blur","aria-label":"Upload Images"},oE=Ra({__name:"HomePage",setup(t){const e=fi(null),n=fi(null),i=fi(null),s=fi({detected:!1,position:{x:0,y:0},ratios:{extensionRatio:0,pinchRatio:0,handSize:0}}),r=fi(!0),a=fi(null),o=fi(0),l=(m,d=!0)=>{m&&(m.classList.toggle("opacity-0"),d&&(m.classList.toggle("pointer-events-none"),m.classList.toggle("pointer-events-auto")))},c=m=>{m.key.toLowerCase()==="h"&&(l(e.value,!0),l(n.value,!1),l(i.value,!0))},h=m=>new Promise((d,b)=>{const x=new FileReader;x.onload=()=>{typeof x.result=="string"?d(x.result):b(new Error("Invalid file result"))},x.onerror=()=>b(x.error??new Error("Read error")),x.readAsDataURL(m)}),u=async m=>{const d=m.target;if(!d||!d.files)return;const b=Array.from(d.files).filter(x=>x.type.startsWith("image/"));if(b.length!=0){r.value=!0;try{const x=await Promise.all(b.map(h));a.value=x,o.value+=1}catch(x){console.error("Upload image error:",x)}finally{d.value=""}}};function f(m){s.value=m}function p(m){console.error("Webcam Tracker Component Error:",m)}function g(){console.log("Webcam Tracker Component Ready !")}const M=()=>{setTimeout(()=>r.value=!1,800)};return Oh(()=>{window.addEventListener("keydown",c)}),Bp(()=>{window.removeEventListener("keydown",c)}),(m,d)=>(Rs(),Bo(Gg,null,[r.value?(Rs(),xc(Vg,{key:0})):zg("",!0),(Rs(),xc(SS,{"hand-tracking-data":s.value,"preload-images":a.value,key:o.value,onTreeRenderCompleted:M},null,8,["hand-tracking-data","preload-images"])),Wt("div",nE,[d[5]||(d[5]=Wt("h1",{class:"text-center"},"Merry Christmas",-1)),Wt("div",{ref_key:"controlsWrapperRef",ref:e,class:"pointer-events-auto absolute right-8 top-8 z-20 hidden flex-col items-end gap-2.5 transition-opacity duration-500 ease-out lg:flex"},[Wt("div",iE,[Wt("label",sE,[d[0]||(d[0]=Sf(" Select Folder ",-1)),Wt("input",{type:"file",class:"hidden",webkitdirectory:"",directory:"",multiple:"",onChange:u},null,32)]),Wt("label",rE,[d[1]||(d[1]=Sf(" Select Files ",-1)),Wt("input",{type:"file",class:"hidden",multiple:"",accept:"image/*",onChange:u},null,32)])]),d[2]||(d[2]=Wt("div",{class:"mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"},' Use "Select Folder" to load all photos at once ',-1)),d[3]||(d[3]=Wt("div",{class:"mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"},' Or put photos in "./images/" Folder (Naming by 1.jpg - 30.jpg) ',-1)),d[4]||(d[4]=Wt("div",{class:"mt-1.5 text-right text-[9px] uppercase tracking-[1px] text-[rgba(212,175,55,0.5)]"},' Press "H" to hide all the UIs ',-1))],512)]),Wt("div",{ref_key:"MusicPlayerWrapperRef",ref:i,class:"pointer-events-auto absolute bottom-8 right-8 z-20 hidden transition-opacity duration-500 ease-out lg:block"},[yf(ES)],512),Wt("div",{ref_key:"webcamWrapperRef",ref:n,class:"pointer-events-none absolute bottom-8 left-8 z-50 hidden h-[210px] w-[280px] overflow-hidden rounded border border-[rgba(212,175,55,0.5)] bg-black shadow-[0_0_20px_rgba(0,0,0,0.9)] transition-opacity duration-500 ease-out lg:block"},[yf(tE,{"debug-mode":!0,delegate:"GPU",onTrackingData:f,onError:p,onReady:g})],512),Wt("label",aE,[d[6]||(d[6]=Wt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-6 w-6 fill-current"},[Wt("path",{d:"M12 3l4 4h-3v6h-2V7H8l4-4zm-7 15h14v2H5v-2z"})],-1)),Wt("input",{type:"file",class:"hidden",multiple:"",accept:"image/*",onChange:u},null,32)])],64))}}),cE=Ra({__name:"App",setup(t){return(e,n)=>(Rs(),xc(oE))}});export{cE as default};
