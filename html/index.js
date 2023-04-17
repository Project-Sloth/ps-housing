const Gc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Gc();function Ft(){}function aa(r,e){for(const t in e)r[t]=e[t];return r}function Gl(r){return r()}function Oa(){return Object.create(null)}function kn(r){r.forEach(Gl)}function ls(r){return typeof r=="function"}function pt(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Hc(r){return Object.keys(r).length===0}function Sa(r,...e){if(r==null)return Ft;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ba(r){let e;return Sa(r,t=>e=t)(),e}function ze(r,e,t){r.$$.on_destroy.push(Sa(e,t))}function En(r,e,t,n){if(r){const i=Hl(r,e,t,n);return r[0](i)}}function Hl(r,e,t,n){return r[1]&&n?aa(t.ctx.slice(),r[1](n(e))):t.ctx}function Tn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function An(r,e,t,n,i,s){if(i){const a=Hl(e,t,n,s);r.p(a,i)}}function Cn(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Vc(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function Fa(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function ht(r,e,t){return r.set(t),e}function Wc(r){return r&&ls(r.destroy)?r.destroy:Ft}function Q(r,e){r.appendChild(e)}function tt(r,e,t){r.insertBefore(e,t||null)}function $e(r){r.parentNode&&r.parentNode.removeChild(r)}function cs(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function ue(r){return document.createElement(r)}function Lt(r){return document.createTextNode(r)}function Ae(){return Lt(" ")}function Pr(){return Lt("")}function Je(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function ie(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Ts(r){return r===""?null:+r}function jc(r){return Array.from(r.childNodes)}function rn(r,e){e=""+e,r.data!==e&&(r.data=e)}function Xn(r,e){r.value=e==null?"":e}function as(r,e,t){r.classList[t?"add":"remove"](e)}function Xc(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let br;function vr(r){br=r}function er(){if(!br)throw new Error("Function called outside component initialization");return br}function Lr(r){er().$$.on_mount.push(r)}function at(r){er().$$.on_destroy.push(r)}function us(){const r=er();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=Xc(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function fn(r,e){return er().$$.context.set(r,e),e}function wn(r){return er().$$.context.get(r)}function Yi(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Bi=[],Fn=[];let Wi=[];const oa=[],Vl=Promise.resolve();let la=!1;function Wl(){la||(la=!0,Vl.then(jl))}function yr(){return Wl(),Vl}function ca(r){Wi.push(r)}function fs(r){oa.push(r)}const As=new Set;let Si=0;function jl(){if(Si!==0)return;const r=br;do{try{for(;Si<Bi.length;){const e=Bi[Si];Si++,vr(e),qc(e.$$)}}catch(e){throw Bi.length=0,Si=0,e}for(vr(null),Bi.length=0,Si=0;Fn.length;)Fn.pop()();for(let e=0;e<Wi.length;e+=1){const t=Wi[e];As.has(t)||(As.add(t),t())}Wi.length=0}while(Bi.length);for(;oa.length;)oa.pop()();la=!1,As.clear(),vr(r)}function qc(r){if(r.fragment!==null){r.update(),kn(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ca)}}function Yc(r){const e=[],t=[];Wi.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Wi=e}const is=new Set;let hi;function gi(){hi={r:0,c:[],p:hi}}function _i(){hi.r||kn(hi.c),hi=hi.p}function Me(r,e){r&&r.i&&(is.delete(r),r.i(e))}function Te(r,e,t,n){if(r&&r.o){if(is.has(r))return;is.add(r),hi.c.push(()=>{is.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function hs(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function lt(r){r&&r.c()}function rt(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||ca(()=>{const a=r.$$.on_mount.map(Gl).filter(ls);r.$$.on_destroy?r.$$.on_destroy.push(...a):kn(a),r.$$.on_mount=[]}),s.forEach(ca)}function st(r,e){const t=r.$$;t.fragment!==null&&(Yc(t.after_update),kn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Zc(r,e){r.$$.dirty[0]===-1&&(Bi.push(r),Wl(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function vt(r,e,t,n,i,s,a,o=[-1]){const l=br;vr(r);const c=r.$$={fragment:null,ctx:[],props:s,update:Ft,not_equal:i,bound:Oa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Oa(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let f=!1;if(c.ctx=t?t(r,e.props||{},(d,h,...p)=>{const g=p.length?p[0]:h;return c.ctx&&i(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),f&&Zc(r,d)),h}):[],c.update(),f=!0,kn(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=jc(e.target);c.fragment&&c.fragment.l(d),d.forEach($e)}else c.fragment&&c.fragment.c();e.intro&&Me(r.$$.fragment),rt(r,e.target,e.anchor,e.customElement),jl()}vr(l)}class xt{$destroy(){st(this,1),this.$destroy=Ft}$on(e,t){if(!ls(t))return Ft;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Hc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function qn(r,e){const t=n=>{const{action:i,data:s}=n.data;i===r&&e(s)};Lr(()=>window.addEventListener("message",t)),at(()=>window.removeEventListener("message",t))}const bi=[];function Xl(r,e){return{subscribe:Ye(r,e).subscribe}}function Ye(r,e=Ft){let t;const n=new Set;function i(o){if(pt(r,o)&&(r=o,t)){const l=!bi.length;for(const c of n)c[1](),bi.push(c,r);if(l){for(let c=0;c<bi.length;c+=2)bi[c][0](bi[c+1]);bi.length=0}}}function s(o){i(o(r))}function a(o,l=Ft){const c=[o,l];return n.add(c),n.size===1&&(t=e(i)||Ft),o(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function Qc(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return Xl(t,a=>{let o=!1;const l=[];let c=0,f=Ft;const d=()=>{if(c)return;f();const p=e(n?l[0]:l,a);s?a(p):f=ls(p)?p:Ft},h=i.map((p,g)=>Sa(p,v=>{l[g]=v,c&=~(1<<g),o&&d()},()=>{c|=1<<g}));return o=!0,d(),function(){kn(h),f(),o=!1}})}const xr=Ye(!1),ds=Ye(!1),ua=Ye(""),os=Ye(null),Yn=Ye(null),xn=Ye(!1);let ql=!1;ds.subscribe(r=>{ql=r});let Yl="";ua.subscribe(r=>{Yl=r});async function Zi(r,e={},t){if(ql==!0&&t)return Promise.resolve(t||{});const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},i=window.GetParentResourceName?window.GetParentResourceName():Yl;return await(await fetch(`https://${i}/${r}`,n)).json()}function yi(r){return{x:r.x,y:r.z,z:-r.y}}function Kc(r){return{x:r.x,y:-r.z,z:r.y}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="151",Jc=0,za=1,$c=2,Zl=1,Ql=2,dr=3,Qn=0,Zt=1,Mn=2,Zn=0,ji=1,ka=2,Ba=3,Ga=4,eu=5,Gi=100,tu=101,nu=102,Ha=103,Va=104,iu=200,ru=201,su=202,au=203,Kl=204,Jl=205,ou=206,lu=207,cu=208,uu=209,fu=210,hu=0,du=1,pu=2,fa=3,mu=4,gu=5,_u=6,vu=7,$l=0,xu=1,Mu=2,bn=0,Su=1,bu=2,yu=3,ec=4,wu=5,tc=300,Qi=301,Ki=302,ha=303,da=304,ps=306,pa=1e3,hn=1001,ma=1002,Ht=1003,Wa=1004,Cs=1005,sn=1006,Eu=1007,wr=1008,vi=1009,Tu=1010,Au=1011,nc=1012,Cu=1013,di=1014,pi=1015,Er=1016,Pu=1017,Lu=1018,Xi=1020,Ru=1021,dn=1023,Du=1024,Iu=1025,mi=1026,Ji=1027,Uu=1028,Nu=1029,Ou=1030,Fu=1031,zu=1033,Ps=33776,Ls=33777,Rs=33778,Ds=33779,ja=35840,Xa=35841,qa=35842,Ya=35843,ku=36196,Za=37492,Qa=37496,Ka=37808,Ja=37809,$a=37810,eo=37811,to=37812,no=37813,io=37814,ro=37815,so=37816,ao=37817,oo=37818,lo=37819,co=37820,uo=37821,Is=36492,Bu=36283,fo=36284,ho=36285,po=36286,Kn=3e3,it=3001,Gu=3200,Hu=3201,ic=0,Vu=1,_n="srgb",Tr="srgb-linear",rc="display-p3",Us=7680,Wu=519,mo=35044,go="300 es",ga=1035;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const Mr=Math.PI/180,Ar=180/Math.PI;function nr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[r&255]+Ut[r>>8&255]+Ut[r>>16&255]+Ut[r>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Vt(r,e,t){return Math.max(e,Math.min(t,r))}function wa(r,e){return(r%e+e)%e}function ju(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Xu(r,e,t){return r!==e?(t-r)/(e-r):0}function Sr(r,e,t){return(1-t)*r+t*e}function qu(r,e,t,n){return Sr(r,e,1-Math.exp(-t*n))}function Yu(r,e=1){return e-Math.abs(wa(r,e*2)-e)}function Zu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Qu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ku(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ju(r,e){return r+Math.random()*(e-r)}function $u(r){return r*(.5-Math.random())}function ef(r){r!==void 0&&(_o=r);let e=_o+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tf(r){return r*Mr}function nf(r){return r*Ar}function _a(r){return(r&r-1)===0&&r!==0}function rf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function sc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),f=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*f,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*f,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*f,o*c);break;case"XZX":r.set(o*f,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*f,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Mr,RAD2DEG:Ar,generateUUID:nr,clamp:Vt,euclideanModulo:wa,mapLinear:ju,inverseLerp:Xu,lerp:Sr,damp:qu,pingpong:Yu,smoothstep:Zu,smootherstep:Qu,randInt:Ku,randFloat:Ju,randFloatSpread:$u,seededRandom:ef,degToRad:tf,radToDeg:nf,isPowerOfTwo:_a,ceilPowerOfTwo:rf,floorPowerOfTwo:sc,setQuaternionFromProperEuler:sf,normalize:Xt,denormalize:pr};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],h=n[2],p=n[5],g=n[8],v=i[0],m=i[3],u=i[6],_=i[1],M=i[4],x=i[7],y=i[2],A=i[5],L=i[8];return s[0]=a*v+o*_+l*y,s[3]=a*m+o*M+l*A,s[6]=a*u+o*x+l*L,s[1]=c*v+f*_+d*y,s[4]=c*m+f*M+d*A,s[7]=c*u+f*x+d*L,s[2]=h*v+p*_+g*y,s[5]=h*m+p*M+g*A,s[8]=h*u+p*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*s,p=c*s-a*l,g=t*d+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-f*n)*v,e[2]=(o*n-i*a)*v,e[3]=h*v,e[4]=(f*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Be;function ac(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Cr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const af=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),of=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function lf(r){return r.convertSRGBToLinear().applyMatrix3(of)}function cf(r){return r.applyMatrix3(af).convertLinearToSRGB()}const uf={[Tr]:r=>r,[_n]:r=>r.convertSRGBToLinear(),[rc]:lf},ff={[Tr]:r=>r,[_n]:r=>r.convertLinearToSRGB(),[rc]:cf},Jt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Tr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=uf[e],i=ff[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let wi;class oc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Cr("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=qi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class lc{constructor(e=null){this.isSource=!0,this.uuid=nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Fs(i[a].image)):s.push(Fs(i[a]))}else s=Fs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class Qt extends tr{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=hn,i=hn,s=sn,a=wr,o=dn,l=vi,c=Qt.DEFAULT_ANISOTROPY,f=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=nr(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=tc;Qt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(p+1)/2,y=(u+1)/2,A=(f+h)/4,L=(d+v)/4,E=(g+m)/4;return M>x&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=L/n):x>y?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=E/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=L/s,i=E/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-f)/_,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jn extends tr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cc extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class df extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],f=n[i+2],d=n[i+3];const h=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==p||f!==g){let m=1-o;const u=l*h+c*p+f*g+d*v,_=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const y=Math.sqrt(M),A=Math.atan2(y,u*_);m=Math.sin(m*A)/y,o=Math.sin(o*A)/y}const x=o*_;if(l=l*m+h*x,c=c*m+p*x,f=f*m+g*x,d=d*m+v*x,m===1-o){const y=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=y,c*=y,f*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],f=n[i+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+f*d+l*p-c*h,e[t+1]=l*g+f*h+c*d-o*p,e[t+2]=c*g+f*p+o*h-l*d,e[t+3]=f*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(i/2),d=o(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"YZX":this._x=h*f*d+c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d-h*p*g;break;case"XZY":this._x=h*f*d-c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+i*c-s*l,this._y=i*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-i*o,this._w=a*f-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=a*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,f=l*n+o*t-s*i,d=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+f*-o-d*-a,this.y=f*l+h*-a+d*-s-c*-o,this.z=d*l+h*-o+c*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new D,vo=new Dt;class Rr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Rn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else i.boundingBox===null&&i.computeBoundingBox(),Ei.copy(i.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Dr.subVectors(this.max,or),Ti.subVectors(e.a,or),Ai.subVectors(e.b,or),Ci.subVectors(e.c,or),Bn.subVectors(Ai,Ti),Gn.subVectors(Ci,Ai),ii.subVectors(Ti,Ci);let t=[0,-Bn.z,Bn.y,0,-Gn.z,Gn.y,0,-ii.z,ii.y,Bn.z,0,-Bn.x,Gn.z,0,-Gn.x,ii.z,0,-ii.x,-Bn.y,Bn.x,0,-Gn.y,Gn.x,0,-ii.y,ii.x,0];return!ks(t,Ti,Ai,Ci,Dr)||(t=[1,0,0,0,1,0,0,0,1],!ks(t,Ti,Ai,Ci,Dr))?!1:(Ir.crossVectors(Bn,Gn),t=[Ir.x,Ir.y,Ir.z],ks(t,Ti,Ai,Ci,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,Ei=new Rr,Ti=new D,Ai=new D,Ci=new D,Bn=new D,Gn=new D,ii=new D,or=new D,Dr=new D,Ir=new D,ri=new D;function ks(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ri.fromArray(r,s);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),l=e.dot(ri),c=t.dot(ri),f=n.dot(ri);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const pf=new Rr,lr=new D,Bs=new D;class ms{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);const t=lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(Bs)),this.expandByPoint(lr.copy(e.center).sub(Bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new D,Gs=new D,Ur=new D,Hn=new D,Hs=new D,Nr=new D,Vs=new D;class Ea{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gs.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Gs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Hn.dot(this.direction),l=-Hn.dot(Ur),c=Hn.lengthSq(),f=Math.abs(1-a*a);let d,h,p,g;if(f>0)if(d=a*l-o,h=a*o-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const v=1/f;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Gs).addScaledVector(Ur,h),p}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){Hs.subVectors(t,e),Nr.subVectors(n,e),Vs.crossVectors(Hs,Nr);let a=this.direction.dot(Vs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const l=o*this.direction.dot(Nr.crossVectors(Hn,Nr));if(l<0)return null;const c=o*this.direction.dot(Hs.cross(Hn));if(c<0||l+c>a)return null;const f=-o*Hn.dot(Vs);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,f,d,h,p,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*d,g=o*f,v=o*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,g=c*f,v=c*d;t[0]=h+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=p*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,g=c*f,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*f,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*f,p=a*d,g=o*f,v=o*d;t[0]=l*f,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=h*d+v,t[5]=a*f,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*f,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Vn.crossVectors(n,$t),Vn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Vn.crossVectors(n,$t)),Vn.normalize(),Or.crossVectors($t,Vn),i[0]=Vn.x,i[4]=Or.x,i[8]=$t.x,i[1]=Vn.y,i[5]=Or.y,i[9]=$t.y,i[2]=Vn.z,i[6]=Or.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],h=n[9],p=n[13],g=n[2],v=n[6],m=n[10],u=n[14],_=n[3],M=n[7],x=n[11],y=n[15],A=i[0],L=i[4],E=i[8],b=i[12],S=i[1],H=i[5],k=i[9],P=i[13],O=i[2],B=i[6],Y=i[10],R=i[14],z=i[3],K=i[7],J=i[11],xe=i[15];return s[0]=a*A+o*S+l*O+c*z,s[4]=a*L+o*H+l*B+c*K,s[8]=a*E+o*k+l*Y+c*J,s[12]=a*b+o*P+l*R+c*xe,s[1]=f*A+d*S+h*O+p*z,s[5]=f*L+d*H+h*B+p*K,s[9]=f*E+d*k+h*Y+p*J,s[13]=f*b+d*P+h*R+p*xe,s[2]=g*A+v*S+m*O+u*z,s[6]=g*L+v*H+m*B+u*K,s[10]=g*E+v*k+m*Y+u*J,s[14]=g*b+v*P+m*R+u*xe,s[3]=_*A+M*S+x*O+y*z,s[7]=_*L+M*H+x*B+y*K,s[11]=_*E+M*k+x*Y+y*J,s[15]=_*b+M*P+x*R+y*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*p-n*l*p)+v*(+t*l*p-t*c*h+s*a*h-i*a*p+i*c*f-s*l*f)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*f-n*c*f)+u*(-i*o*f-t*l*d+t*o*h+i*a*d-n*a*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],u=e[15],_=d*m*c-v*h*c+v*l*p-o*m*p-d*l*u+o*h*u,M=g*h*c-f*m*c-g*l*p+a*m*p+f*l*u-a*h*u,x=f*v*c-g*d*c+g*o*p-a*v*p-f*o*u+a*d*u,y=g*d*l-f*v*l-g*o*h+a*v*h+f*o*m-a*d*m,A=t*_+n*M+i*x+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=_*L,e[1]=(v*h*s-d*m*s-v*i*p+n*m*p+d*i*u-n*h*u)*L,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*u+n*l*u)*L,e[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*p-n*l*p)*L,e[4]=M*L,e[5]=(f*m*s-g*h*s+g*i*p-t*m*p-f*i*u+t*h*u)*L,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*u-t*l*u)*L,e[7]=(a*h*s-f*l*s+f*i*c-t*h*c-a*i*p+t*l*p)*L,e[8]=x*L,e[9]=(g*d*s-f*v*s-g*n*p+t*v*p+f*n*u-t*d*u)*L,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*u+t*o*u)*L,e[11]=(f*o*s-a*d*s-f*n*c+t*d*c+a*n*p-t*o*p)*L,e[12]=y*L,e[13]=(f*v*i-g*d*i+g*n*h-t*v*h-f*n*m+t*d*m)*L,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*L,e[15]=(a*d*i-f*o*i+f*n*l-t*d*l-a*n*h+t*o*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,f*o+n,f*l-i*a,0,c*l-i*o,f*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,d=o+o,h=s*c,p=s*f,g=s*d,v=a*f,m=a*d,u=o*d,_=l*c,M=l*f,x=l*d,y=n.x,A=n.y,L=n.z;return i[0]=(1-(v+u))*y,i[1]=(p+x)*y,i[2]=(g-M)*y,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(h+u))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+M)*L,i[9]=(m-_)*L,i[10]=(1-(h+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/s,f=1/a,d=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),h=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),f=1/(a-s),d=(t+e)*l,h=(n+i)*c,p=(a+s)*f;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*f,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new D,on=new dt,mf=new D(0,0,0),gf=new D(1,1,1),Vn=new D,Or=new D,$t=new D,xo=new dt,Mo=new Dt;class xi{constructor(e=0,t=0,n=0,i=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],f=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const So=new D,Li=new Dt,In=new dt,Fr=new D,cr=new D,vf=new D,xf=new Dt,bo=new D(1,0,0),yo=new D(0,1,0),wo=new D(0,0,1),Mf={type:"added"},Eo={type:"removed"};class bt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new D,t=new xi,n=new Dt,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new Be}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(bo,e)}rotateY(e){return this.rotateOnAxis(yo,e)}rotateZ(e){return this.rotateOnAxis(wo,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bo,e)}translateY(e){return this.translateOnAxis(yo,e)}translateZ(e){return this.translateOnAxis(wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(cr,Fr,this.up):In.lookAt(Fr,cr,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(In),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Eo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new D(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new D,Un=new D,Ws=new D,Nn=new D,Ri=new D,Di=new D,To=new D,js=new D,Xs=new D,qs=new D;let zr=!1;class un{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Un.subVectors(n,t),Ws.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Un),l=ln.dot(Ws),c=Un.dot(Un),f=Un.dot(Ws),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-o*f)*h,g=(a*f-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,n,i,s,a,o,l){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Nn),l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Un.subVectors(e,t),ln.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),ln.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zr=!0),un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ri.subVectors(i,n),Di.subVectors(s,n),js.subVectors(e,n);const l=Ri.dot(js),c=Di.dot(js);if(l<=0&&c<=0)return t.copy(n);Xs.subVectors(e,i);const f=Ri.dot(Xs),d=Di.dot(Xs);if(f>=0&&d<=f)return t.copy(i);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Ri,a);qs.subVectors(e,s);const p=Ri.dot(qs),g=Di.dot(qs);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Di,o);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return To.subVectors(s,i),o=(d-f)/(d-f+(p-g)),t.copy(i).addScaledVector(To,o);const u=1/(m+v+h);return a=v*u,o=h*u,t.copy(n).addScaledVector(Ri,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Sf=0;class ir extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=ji,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kl,this.blendDst=Jl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Ys(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Jt.workingColorSpace){if(e=wa(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ys(a,s,e+1/3),this.g=Ys(a,s,e),this.b=Ys(a,s,e-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(e,t=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Jt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Jt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,f,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const n=uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Jt.fromWorkingColorSpace(Nt.copy(this),e),Vt(Nt.r*255,0,255)<<16^Vt(Nt.g*255,0,255)<<8^Vt(Nt.b*255,0,255)<<0}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,i=Nt.g,s=Nt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=_n){Jt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,i=Nt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(kr);const n=Sr(cn.h,kr.h,t),i=Sr(cn.s,kr.s,t),s=Sr(cn.l,kr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ze;Ze.NAMES=uc;class gs extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new D,Br=new Ve;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class fc extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hc extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bf=0;const nn=new dt,Zs=new bt,Ii=new D,en=new Rr,ur=new Rr,Pt=new D;class Wt extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ac(e)?hc:fc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(en.min,ur.min),en.expandByPoint(Pt),Pt.addVectors(en.max,ur.max),en.expandByPoint(Pt)):(en.expandByPoint(ur.min),en.expandByPoint(ur.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Pt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Pt.add(Ii)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let S=0;S<o;S++)c[S]=new D,f[S]=new D;const d=new D,h=new D,p=new D,g=new Ve,v=new Ve,m=new Ve,u=new D,_=new D;function M(S,H,k){d.fromArray(i,S*3),h.fromArray(i,H*3),p.fromArray(i,k*3),g.fromArray(a,S*2),v.fromArray(a,H*2),m.fromArray(a,k*2),h.sub(d),p.sub(d),v.sub(g),m.sub(g);const P=1/(v.x*m.y-m.x*v.y);!isFinite(P)||(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(P),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(P),c[S].add(u),c[H].add(u),c[k].add(u),f[S].add(_),f[H].add(_),f[k].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,H=x.length;S<H;++S){const k=x[S],P=k.start,O=k.count;for(let B=P,Y=P+O;B<Y;B+=3)M(n[B+0],n[B+1],n[B+2])}const y=new D,A=new D,L=new D,E=new D;function b(S){L.fromArray(s,S*3),E.copy(L);const H=c[S];y.copy(H),y.sub(L.multiplyScalar(L.dot(H))).normalize(),A.crossVectors(E,H);const P=A.dot(f[S])<0?-1:1;l[S*4]=y.x,l[S*4+1]=y.y,l[S*4+2]=y.z,l[S*4+3]=P}for(let S=0,H=x.length;S<H;++S){const k=x[S],P=k.start,O=k.count;for(let B=P,Y=P+O;B<Y;B+=3)b(n[B+0]),b(n[B+1]),b(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,d=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*f;for(let u=0;u<f;u++)h[g++]=c[p++]}return new yn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ao=new dt,mn=new Ea,Gr=new ms,Co=new D,Ui=new D,Ni=new D,Oi=new D,Qs=new D,Hr=new D,Vr=new Ve,Wr=new Ve,jr=new Ve,Po=new D,Lo=new D,Ro=new D,Xr=new D,qr=new D;class he extends bt{constructor(e=new Wt,t=new gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(Qs.fromBufferAttribute(d,e),a?Hr.addScaledVector(Qs,f):Hr.addScaledVector(Qs.sub(t),f))}t.add(Hr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),mn.copy(e.ray).recast(e.near),Gr.containsPoint(mn.origin)===!1&&(mn.intersectSphere(Gr,Co)===null||mn.origin.distanceToSquared(Co)>(e.far-e.near)**2))||(Ao.copy(s).invert(),mn.copy(e.ray).applyMatrix4(Ao),n.boundingBox!==null&&mn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,f=n.attributes.uv2,d=n.attributes.normal,h=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=h.length;g<v;g++){const m=h[g],u=i[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,y=M;x<y;x+=3){const A=o.getX(x),L=o.getX(x+1),E=o.getX(x+2);a=Yr(this,u,e,mn,c,f,d,A,L,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);a=Yr(this,i,e,mn,c,f,d,_,M,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,v=h.length;g<v;g++){const m=h[g],u=i[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,y=M;x<y;x+=3){const A=x,L=x+1,E=x+2;a=Yr(this,u,e,mn,c,f,d,A,L,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,u=v;m<u;m+=3){const _=m,M=m+1,x=m+2;a=Yr(this,i,e,mn,c,f,d,_,M,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function yf(r,e,t,n,i,s,a,o){let l;if(e.side===Zt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Qn,o),l===null)return null;qr.copy(o),qr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:r}}function Yr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ui),r.getVertexPosition(l,Ni),r.getVertexPosition(c,Oi);const f=yf(r,e,t,n,Ui,Ni,Oi,Xr);if(f){i&&(Vr.fromBufferAttribute(i,o),Wr.fromBufferAttribute(i,l),jr.fromBufferAttribute(i,c),f.uv=un.getInterpolation(Xr,Ui,Ni,Oi,Vr,Wr,jr,new Ve)),s&&(Vr.fromBufferAttribute(s,o),Wr.fromBufferAttribute(s,l),jr.fromBufferAttribute(s,c),f.uv2=un.getInterpolation(Xr,Ui,Ni,Oi,Vr,Wr,jr,new Ve)),a&&(Po.fromBufferAttribute(a,o),Lo.fromBufferAttribute(a,l),Ro.fromBufferAttribute(a,c),f.normal=un.getInterpolation(Xr,Ui,Ni,Oi,Po,Lo,Ro,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};un.getNormal(Ui,Ni,Oi,d.normal),f.face=d}return f}class _t extends Wt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function g(v,m,u,_,M,x,y,A,L,E,b){const S=x/L,H=y/E,k=x/2,P=y/2,O=A/2,B=L+1,Y=E+1;let R=0,z=0;const K=new D;for(let J=0;J<Y;J++){const xe=J*H-P;for(let ne=0;ne<B;ne++){const V=ne*S-k;K[v]=V*_,K[m]=xe*M,K[u]=O,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[u]=A>0?1:-1,f.push(K.x,K.y,K.z),d.push(ne/L),d.push(1-J/E),R+=1}}for(let J=0;J<E;J++)for(let xe=0;xe<L;xe++){const ne=h+xe+B*J,V=h+xe+B*(J+1),Z=h+(xe+1)+B*(J+1),se=h+(xe+1)+B*J;l.push(ne,V,se),l.push(V,Z,se),z+=6}o.addGroup(p,z,b),p+=z,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=$i(r[t]);for(const i in n)e[i]=n[i]}return e}function wf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dc(r){return r.getRenderTarget()===null&&r.outputEncoding===it?_n:Tr}const pc={clone:$i,merge:Gt};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mc extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends mc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,zi=1;class Af extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new tn(Fi,zi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new tn(Fi,zi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new tn(Fi,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new tn(Fi,zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new tn(Fi,zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new tn(Fi,zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,f=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class gc extends Qt{constructor(e,t,n,i,s,a,o,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cf extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _t(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Zn});s.uniforms.tEquirect.value=t;const a=new he(i,s),o=t.minFilter;return t.minFilter===wr&&(t.minFilter=sn),new Af(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Ks=new D,Pf=new D,Lf=new Be;class oi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ks.subVectors(n,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ks),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lf.getNormalMatrix(e),i=this.coplanarPoint(Ks).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new ms,Zr=new D;class Aa{constructor(e=new oi,t=new oi,n=new oi,i=new oi,s=new oi,a=new oi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],f=n[6],d=n[7],h=n[8],p=n[9],g=n[10],v=n[11],m=n[12],u=n[13],_=n[14],M=n[15];return t[0].setComponents(o-i,d-l,v-h,M-m).normalize(),t[1].setComponents(o+i,d+l,v+h,M+m).normalize(),t[2].setComponents(o+s,d+c,v+p,M+u).normalize(),t[3].setComponents(o-s,d-c,v-p,M-u).normalize(),t[4].setComponents(o-a,d-f,v-g,M-_).normalize(),t[5].setComponents(o+a,d+f,v+g,M+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Zr.x=i.normal.x>0?e.max.x:e.min.x,Zr.y=i.normal.y>0?e.max.y:e.min.y,Zr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Rf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,f){const d=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(f,p),r.bufferData(f,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,d){const h=f.array,p=f.updateRange;r.bindBuffer(d,c),p.count===-1?r.bufferSubData(d,0,h):(t?r.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(r.deleteBuffer(f.buffer),n.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,f)):d.version<c.version&&(s(d.buffer,c,f),d.version=c.version)}return{get:a,remove:o,update:l}}class _s extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,f=l+1,d=e/o,h=t/l,p=[],g=[],v=[],m=[];for(let u=0;u<f;u++){const _=u*h-a;for(let M=0;M<c;M++){const x=M*d-s;g.push(x,-_,0),v.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const M=_+c*u,x=_+c*(u+1),y=_+1+c*(u+1),A=_+1+c*u;p.push(M,x,A),p.push(x,y,A)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf="vec3 transformed = vec3( position );",kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Hf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ah=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
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
}`,gh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Sh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	vec3 f0 = material.specularColor;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ch=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zh=`#if defined( USE_POINTS_UV )
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
#endif`,kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$h=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,bd=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yd=`#ifdef USE_UV
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
#endif`,wd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,Ed=`#ifdef USE_UV
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
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Id=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Od=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Hd=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Wd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Xd=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Jd=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
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
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:Df,alphamap_pars_fragment:If,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Of,aomap_pars_fragment:Ff,begin_vertex:zf,beginnormal_vertex:kf,bsdfs:Bf,iridescence_fragment:Gf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Vf,clipping_planes_pars_fragment:Wf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:Zf,color_vertex:Qf,common:Kf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:$f,displacementmap_pars_vertex:eh,displacementmap_vertex:th,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,encodings_fragment:rh,encodings_pars_fragment:sh,envmap_fragment:ah,envmap_common_pars_fragment:oh,envmap_pars_fragment:lh,envmap_pars_vertex:ch,envmap_physical_pars_fragment:Sh,envmap_vertex:uh,fog_vertex:fh,fog_pars_vertex:hh,fog_fragment:dh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_fragment:gh,lightmap_pars_fragment:_h,lights_lambert_fragment:vh,lights_lambert_pars_fragment:xh,lights_pars_begin:Mh,lights_toon_fragment:bh,lights_toon_pars_fragment:yh,lights_phong_fragment:wh,lights_phong_pars_fragment:Eh,lights_physical_fragment:Th,lights_physical_pars_fragment:Ah,lights_fragment_begin:Ch,lights_fragment_maps:Ph,lights_fragment_end:Lh,logdepthbuf_fragment:Rh,logdepthbuf_pars_fragment:Dh,logdepthbuf_pars_vertex:Ih,logdepthbuf_vertex:Uh,map_fragment:Nh,map_pars_fragment:Oh,map_particle_fragment:Fh,map_particle_pars_fragment:zh,metalnessmap_fragment:kh,metalnessmap_pars_fragment:Bh,morphcolor_vertex:Gh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Vh,morphtarget_vertex:Wh,normal_fragment_begin:jh,normal_fragment_maps:Xh,normal_pars_fragment:qh,normal_pars_vertex:Yh,normal_vertex:Zh,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:$h,iridescence_pars_fragment:ed,output_fragment:td,packing:nd,premultiplied_alpha_fragment:id,project_vertex:rd,dithering_fragment:sd,dithering_pars_fragment:ad,roughnessmap_fragment:od,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ud,shadowmap_vertex:fd,shadowmask_pars_fragment:hd,skinbase_vertex:dd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:xd,tonemapping_pars_fragment:Md,transmission_fragment:Sd,transmission_pars_fragment:bd,uv_pars_fragment:yd,uv_pars_vertex:wd,uv_vertex:Ed,worldpos_vertex:Td,background_vert:Ad,background_frag:Cd,backgroundCube_vert:Pd,backgroundCube_frag:Ld,cube_vert:Rd,cube_frag:Dd,depth_vert:Id,depth_frag:Ud,distanceRGBA_vert:Nd,distanceRGBA_frag:Od,equirect_vert:Fd,equirect_frag:zd,linedashed_vert:kd,linedashed_frag:Bd,meshbasic_vert:Gd,meshbasic_frag:Hd,meshlambert_vert:Vd,meshlambert_frag:Wd,meshmatcap_vert:jd,meshmatcap_frag:Xd,meshnormal_vert:qd,meshnormal_frag:Yd,meshphong_vert:Zd,meshphong_frag:Qd,meshphysical_vert:Kd,meshphysical_frag:Jd,meshtoon_vert:$d,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:rp,sprite_vert:sp,sprite_frag:ap},oe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaTest:{value:0}}},vn={basic:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Gt([oe.points,oe.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Gt([oe.common,oe.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Gt([oe.sprite,oe.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Gt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Gt([oe.lights,oe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};vn.physical={uniforms:Gt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Qr={r:0,b:0,g:0};function op(r,e,t,n,i,s,a){const o=new Ze(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function g(m,u){let _=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M));const x=r.xr,y=x.getSession&&x.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?v(o,l):M&&M.isColor&&(v(M,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ps)?(f===void 0&&(f=new he(new _t(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:$i(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,L,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=M.encoding!==it,(d!==M||h!==M.version||p!==r.toneMapping)&&(f.material.needsUpdate=!0,d=M,h=M.version,p=r.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new he(new _s(2,2),new zn({name:"BackgroundMaterial",uniforms:$i(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=M.encoding!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,u){m.getRGB(Qr,dc(r)),n.buffers.color.setClear(Qr.r,Qr.g,Qr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function lp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,f=!1;function d(O,B,Y,R,z){let K=!1;if(a){const J=v(R,Y,B);c!==J&&(c=J,p(c.object)),K=u(O,R,Y,z),K&&_(O,R,Y,z)}else{const J=B.wireframe===!0;(c.geometry!==R.id||c.program!==Y.id||c.wireframe!==J)&&(c.geometry=R.id,c.program=Y.id,c.wireframe=J,K=!0)}z!==null&&t.update(z,34963),(K||f)&&(f=!1,E(O,B,Y,R),z!==null&&r.bindBuffer(34963,t.get(z).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,B,Y){const R=Y.wireframe===!0;let z=o[O.id];z===void 0&&(z={},o[O.id]=z);let K=z[B.id];K===void 0&&(K={},z[B.id]=K);let J=K[R];return J===void 0&&(J=m(h()),K[R]=J),J}function m(O){const B=[],Y=[],R=[];for(let z=0;z<i;z++)B[z]=0,Y[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:R,object:O,attributes:{},index:null}}function u(O,B,Y,R){const z=c.attributes,K=B.attributes;let J=0;const xe=Y.getAttributes();for(const ne in xe)if(xe[ne].location>=0){const Z=z[ne];let se=K[ne];if(se===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;J++}return c.attributesNum!==J||c.index!==R}function _(O,B,Y,R){const z={},K=B.attributes;let J=0;const xe=Y.getAttributes();for(const ne in xe)if(xe[ne].location>=0){let Z=K[ne];Z===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),z[ne]=se,J++}c.attributes=z,c.attributesNum=J,c.index=R}function M(){const O=c.newAttributes;for(let B=0,Y=O.length;B<Y;B++)O[B]=0}function x(O){y(O,0)}function y(O,B){const Y=c.newAttributes,R=c.enabledAttributes,z=c.attributeDivisors;Y[O]=1,R[O]===0&&(r.enableVertexAttribArray(O),R[O]=1),z[O]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),z[O]=B)}function A(){const O=c.newAttributes,B=c.enabledAttributes;for(let Y=0,R=B.length;Y<R;Y++)B[Y]!==O[Y]&&(r.disableVertexAttribArray(Y),B[Y]=0)}function L(O,B,Y,R,z,K){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(O,B,Y,z,K):r.vertexAttribPointer(O,B,Y,R,z,K)}function E(O,B,Y,R){if(n.isWebGL2===!1&&(O.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const z=R.attributes,K=Y.getAttributes(),J=B.defaultAttributeValues;for(const xe in K){const ne=K[xe];if(ne.location>=0){let V=z[xe];if(V===void 0&&(xe==="instanceMatrix"&&O.instanceMatrix&&(V=O.instanceMatrix),xe==="instanceColor"&&O.instanceColor&&(V=O.instanceColor)),V!==void 0){const Z=V.normalized,se=V.itemSize,ce=t.get(V);if(ce===void 0)continue;const U=ce.buffer,Pe=ce.type,Se=ce.bytesPerElement;if(V.isInterleavedBufferAttribute){const re=V.data,we=re.stride,Ue=V.offset;if(re.isInstancedInterleavedBuffer){for(let me=0;me<ne.locationSize;me++)y(ne.location+me,re.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<ne.locationSize;me++)x(ne.location+me);r.bindBuffer(34962,U);for(let me=0;me<ne.locationSize;me++)L(ne.location+me,se/ne.locationSize,Pe,Z,we*Se,(Ue+se/ne.locationSize*me)*Se)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<ne.locationSize;re++)y(ne.location+re,V.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<ne.locationSize;re++)x(ne.location+re);r.bindBuffer(34962,U);for(let re=0;re<ne.locationSize;re++)L(ne.location+re,se/ne.locationSize,Pe,Z,se*Se,se/ne.locationSize*re*Se)}}else if(J!==void 0){const Z=J[xe];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(ne.location,Z);break;case 3:r.vertexAttrib3fv(ne.location,Z);break;case 4:r.vertexAttrib4fv(ne.location,Z);break;default:r.vertexAttrib1fv(ne.location,Z)}}}}A()}function b(){k();for(const O in o){const B=o[O];for(const Y in B){const R=B[Y];for(const z in R)g(R[z].object),delete R[z];delete B[Y]}delete o[O]}}function S(O){if(o[O.id]===void 0)return;const B=o[O.id];for(const Y in B){const R=B[Y];for(const z in R)g(R[z].object),delete R[z];delete B[Y]}delete o[O.id]}function H(O){for(const B in o){const Y=o[B];if(Y[O.id]===void 0)continue;const R=Y[O.id];for(const z in R)g(R[z].object),delete R[z];delete Y[O.id]}}function k(){P(),f=!0,c!==l&&(c=l,p(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:H,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function cp(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,f){r.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,f,d),t.update(f,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function up(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),m=r.getParameter(36347),u=r.getParameter(36348),_=r.getParameter(36349),M=h>0,x=a||e.has("OES_texture_float"),y=M&&x,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:A}}function fp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new oi,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?f(null):c();else{const _=s?0:n,M=_*4;let x=u.clippingState||null;l.value=x,x=f(g,h,M,p);for(let y=0;y!==M;++y)x[y]=t[y];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=p+v*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,x=p;M!==v;++M,x+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function hp(r){let e=new WeakMap;function t(a,o){return o===ha?a.mapping=Qi:o===da&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ha||o===da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cf(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class vc extends mc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hi=4,Do=[.125,.215,.35,.446,.526,.582],ui=20,Js=new vc,Io=new Ze;let $s=null;const li=(1+Math.sqrt(5))/2,ki=1/li,Uo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,li,ki),new D(0,li,-ki),new D(ki,0,li),new D(-ki,0,li),new D(li,ki,0),new D(-li,ki,0)];class No{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$s=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($s),e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$s=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Er,format:dn,encoding:Kn,depthBuffer:!1},i=Oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(s)),this._blurMaterial=pp(s,e,t)}return i}_compileMaterial(e){const t=new he(this._lodPlanes[0],e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,n,i){const o=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Io),f.toneMapping=bn,f.autoClear=!1;const p=new gs({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new he(new _t,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Io),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const M=this._cubeSize;Kr(i,_*M,u>2?M:0,M,M),f.setRenderTarget(i),v&&f.render(g,o),f.render(e,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new he(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Uo[(i-1)%Uo.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new he(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ui-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const u=[];let _=0;for(let L=0;L<ui;++L){const E=L/v,b=Math.exp(-E*E/2);u.push(b),L===0?_+=b:L<m&&(_+=2*b)}for(let L=0;L<u.length;L++)u[L]=u[L]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;const x=this._sizeLods[i],y=3*x*(i>M-Hi?i-M+Hi:0),A=4*(this._cubeSize-x);Kr(t,y,A,3*x,2*x),l.setRenderTarget(t),l.render(d,Js)}}function dp(r){const e=[],t=[],n=[];let i=r;const s=r-Hi+1+Do.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Hi?l=Do[a-r+Hi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,v=3,m=2,u=1,_=new Float32Array(v*g*p),M=new Float32Array(m*g*p),x=new Float32Array(u*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,E=A>2?0:-1,b=[L,E,0,L+2/3,E,0,L+2/3,E+1,0,L,E,0,L+2/3,E+1,0,L,E+1,0];_.set(b,v*g*A),M.set(h,m*g*A);const S=[A,A,A,A,A,A];x.set(S,u*g*A)}const y=new Wt;y.setAttribute("position",new yn(_,v)),y.setAttribute("uv",new yn(M,m)),y.setAttribute("faceIndex",new yn(x,u)),e.push(y),i>Hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oo(r,e,t){const n=new Jn(r,e,t);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pp(r,e,t){const n=new Float32Array(ui),i=new D(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fo(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function zo(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function mp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ha||l===da,f=l===Qi||l===Ki;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new No(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&i(d)){t===null&&(t=new No(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _p(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,u=v.length;m<u;m++)e.update(v[m],34962)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let M=0,x=_.length;M<x;M+=3){const y=_[M+0],A=_[M+1],L=_[M+2];h.push(y,A,A,L,L,y)}}else{const _=g.array;v=g.version;for(let M=0,x=_.length/3-1;M<x;M+=3){const y=M+0,A=M+1,L=M+2;h.push(y,A,A,L,L,y)}}const m=new(ac(h)?hc:fc)(h,1);m.version=v;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function vp(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function f(h,p){r.drawElements(s,p,o,h*l),t.update(p,s,1)}function d(h,p,g){if(g===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,o,h*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=d}function xp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mp(r,e){return r[0]-e[0]}function Sp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new It,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(f);if(m===void 0||m.count!==v){let B=function(){P.dispose(),s.delete(f),f.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],E=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),x===!0&&(b=2),y===!0&&(b=3);let S=f.attributes.position.count*b,H=1;S>e.maxTextureSize&&(H=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const k=new Float32Array(S*H*4*v),P=new cc(k,S,H,v);P.type=pi,P.needsUpdate=!0;const O=b*4;for(let Y=0;Y<v;Y++){const R=A[Y],z=L[Y],K=E[Y],J=S*H*4*Y;for(let xe=0;xe<R.count;xe++){const ne=xe*O;M===!0&&(a.fromBufferAttribute(R,xe),k[J+ne+0]=a.x,k[J+ne+1]=a.y,k[J+ne+2]=a.z,k[J+ne+3]=0),x===!0&&(a.fromBufferAttribute(z,xe),k[J+ne+4]=a.x,k[J+ne+5]=a.y,k[J+ne+6]=a.z,k[J+ne+7]=0),y===!0&&(a.fromBufferAttribute(K,xe),k[J+ne+8]=a.x,k[J+ne+9]=a.y,k[J+ne+10]=a.z,k[J+ne+11]=K.itemSize===4?a.w:1)}}m={count:v,texture:P,size:new Ve(S,H)},s.set(f,m),f.addEventListener("dispose",B)}let u=0;for(let M=0;M<h.length;M++)u+=h[M];const _=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",h),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=n[f.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[f.id]=v}for(let x=0;x<g;x++){const y=v[x];y[0]=x,y[1]=h[x]}v.sort(Sp);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Mp);const m=f.morphAttributes.position,u=f.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const y=o[x],A=y[0],L=y[1];A!==Number.MAX_SAFE_INTEGER&&L?(m&&f.getAttribute("morphTarget"+x)!==m[A]&&f.setAttribute("morphTarget"+x,m[A]),u&&f.getAttribute("morphNormal"+x)!==u[A]&&f.setAttribute("morphNormal"+x,u[A]),i[x]=L,_+=L):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),u&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),i[x]=0)}const M=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function yp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,d=e.get(l,f);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const xc=new Qt,Mc=new cc,Sc=new df,bc=new gc,ko=[],Bo=[],Go=new Float32Array(16),Ho=new Float32Array(9),Vo=new Float32Array(4);function rr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ko[i];if(s===void 0&&(s=new Float32Array(i),ko[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vs(r,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ep(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function Tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function Ap(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function Cp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Vo.set(n),r.uniformMatrix2fv(this.addr,!1,Vo),Et(t,n)}}function Pp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Ho.set(n),r.uniformMatrix3fv(this.addr,!1,Ho),Et(t,n)}}function Lp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Go.set(n),r.uniformMatrix4fv(this.addr,!1,Go),Et(t,n)}}function Rp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function Ip(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function Up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function Np(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function Fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function kp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||xc,i)}function Bp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sc,i)}function Gp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||bc,i)}function Hp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Mc,i)}function Vp(r){switch(r){case 5126:return wp;case 35664:return Ep;case 35665:return Tp;case 35666:return Ap;case 35674:return Cp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Rp;case 35667:case 35671:return Dp;case 35668:case 35672:return Ip;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Op;case 36295:return Fp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Wp(r,e){r.uniform1fv(this.addr,e)}function jp(r,e){const t=rr(e,this.size,2);r.uniform2fv(this.addr,t)}function Xp(r,e){const t=rr(e,this.size,3);r.uniform3fv(this.addr,t)}function qp(r,e){const t=rr(e,this.size,4);r.uniform4fv(this.addr,t)}function Yp(r,e){const t=rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Zp(r,e){const t=rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qp(r,e){const t=rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kp(r,e){r.uniform1iv(this.addr,e)}function Jp(r,e){r.uniform2iv(this.addr,e)}function $p(r,e){r.uniform3iv(this.addr,e)}function em(r,e){r.uniform4iv(this.addr,e)}function tm(r,e){r.uniform1uiv(this.addr,e)}function nm(r,e){r.uniform2uiv(this.addr,e)}function im(r,e){r.uniform3uiv(this.addr,e)}function rm(r,e){r.uniform4uiv(this.addr,e)}function sm(r,e,t){const n=this.cache,i=e.length,s=vs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||xc,s[a])}function am(r,e,t){const n=this.cache,i=e.length,s=vs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sc,s[a])}function om(r,e,t){const n=this.cache,i=e.length,s=vs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||bc,s[a])}function lm(r,e,t){const n=this.cache,i=e.length,s=vs(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Mc,s[a])}function cm(r){switch(r){case 5126:return Wp;case 35664:return jp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Zp;case 35676:return Qp;case 5124:case 35670:return Kp;case 35667:case 35671:return Jp;case 35668:case 35672:return $p;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}class um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Vp(t.type)}}class fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cm(t.type)}}class hm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ea=/(\w+)(\])?(\[|\.)?/g;function Wo(r,e){r.seq.push(e),r.map[e.id]=e}function dm(r,e,t){const n=r.name,i=n.length;for(ea.lastIndex=0;;){const s=ea.exec(n),a=ea.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Wo(t,c===void 0?new um(o,r,e):new fm(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new hm(o),Wo(t,d)),t=d}}}class rs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);dm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function jo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let pm=0;function mm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gm(r){switch(r){case Kn:return["Linear","( value )"];case it:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Xo(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mm(r.getShaderSource(e),a)}else return i}function _m(r,e){const t=gm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vm(r,e){let t;switch(e){case Su:t="Linear";break;case bu:t="Reinhard";break;case yu:t="OptimizedCineon";break;case ec:t="ACESFilmic";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function Mm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Sm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function mr(r){return r!==""}function qo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(r){return r.replace(bm,ym)}function ym(r,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return va(t)}const wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zo(r){return r.replace(wm,Em)}function Em(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qo(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===dr&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case Ki:e="ENVMAP_TYPE_CUBE";break;case ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function Pm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tm(t),c=Am(t),f=Cm(t),d=Pm(t),h=Lm(t),p=t.isWebGL2?"":xm(t),g=Mm(s),v=i.createProgram();let m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(mr).join(`
`),m.length>0&&(m+=`
`),u=[p,g].filter(mr).join(`
`),u.length>0&&(u+=`
`)):(m=[Qo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),u=[p,Qo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==bn?vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,_m("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=va(a),a=qo(a,t),a=Yo(a,t),o=va(o),o=qo(o,t),o=Yo(o,t),a=Zo(a),o=Zo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=_+m+a,x=_+u+o,y=jo(i,35633,M),A=jo(i,35632,x);if(i.attachShader(v,y),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const b=i.getProgramInfoLog(v).trim(),S=i.getShaderInfoLog(y).trim(),H=i.getShaderInfoLog(A).trim();let k=!0,P=!0;if(i.getProgramParameter(v,35714)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,y,A);else{const O=Xo(i,y,"vertex"),B=Xo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+b+`
`+O+`
`+B)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(S===""||H==="")&&(P=!1);P&&(this.diagnostics={runnable:k,programLog:b,vertexShader:{log:S,prefix:m},fragmentShader:{log:H,prefix:u}})}i.deleteShader(y),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new rs(i,v)),L};let E;return this.getAttributes=function(){return E===void 0&&(E=Sm(i,v)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=pm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=A,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Um(e),t.set(e,n)),n}}class Um{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function Nm(r,e,t,n,i,s,a){const o=new Ta,l=new Im,c=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===1?"uv2":"uv"}function m(b,S,H,k,P){const O=k.fog,B=P.geometry,Y=b.isMeshStandardMaterial?k.environment:null,R=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),z=!!R&&R.mapping===ps?R.image.height:null,K=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,xe=J!==void 0?J.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let V,Z,se,ce;if(K){const le=vn[K];V=le.vertexShader,Z=le.fragmentShader}else V=b.vertexShader,Z=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const U=r.getRenderTarget(),Pe=P.isInstancedMesh===!0,Se=!!b.map,re=!!b.matcap,we=!!R,Ue=!!b.aoMap,me=!!b.lightMap,Re=!!b.bumpMap,mt=!!b.normalMap,gt=!!b.displacementMap,ut=!!b.emissiveMap,ft=!!b.metalnessMap,We=!!b.roughnessMap,Xe=b.clearcoat>0,Tt=b.iridescence>0,C=b.sheen>0,w=b.transmission>0,W=Xe&&!!b.clearcoatMap,$=Xe&&!!b.clearcoatNormalMap,te=Xe&&!!b.clearcoatRoughnessMap,ae=Tt&&!!b.iridescenceMap,Ee=Tt&&!!b.iridescenceThicknessMap,pe=C&&!!b.sheenColorMap,X=C&&!!b.sheenRoughnessMap,ge=!!b.specularMap,ve=!!b.specularColorMap,be=!!b.specularIntensityMap,fe=w&&!!b.transmissionMap,_e=w&&!!b.thicknessMap,Ne=!!b.gradientMap,je=!!b.alphaMap,Ge=b.alphaTest>0,I=!!b.extensions,j=!!B.attributes.uv2;return{isWebGL2:f,shaderID:K,shaderName:b.type,vertexShader:V,fragmentShader:Z,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&P.instanceColor!==null,supportsVertexTextures:h,outputEncoding:U===null?r.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Kn,map:Se,matcap:re,envMap:we,envMapMode:we&&R.mapping,envMapCubeUVHeight:z,aoMap:Ue,lightMap:me,bumpMap:Re,normalMap:mt,displacementMap:h&&gt,emissiveMap:ut,normalMapObjectSpace:mt&&b.normalMapType===Vu,normalMapTangentSpace:mt&&b.normalMapType===ic,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&b.map.encoding===it,metalnessMap:ft,roughnessMap:We,clearcoat:Xe,clearcoatMap:W,clearcoatNormalMap:$,clearcoatRoughnessMap:te,iridescence:Tt,iridescenceMap:ae,iridescenceThicknessMap:Ee,sheen:C,sheenColorMap:pe,sheenRoughnessMap:X,specularMap:ge,specularColorMap:ve,specularIntensityMap:be,transmission:w,transmissionMap:fe,thicknessMap:_e,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===ji,alphaMap:je,alphaTest:Ge,combine:b.combine,mapUv:Se&&v(b.map.channel),aoMapUv:Ue&&v(b.aoMap.channel),lightMapUv:me&&v(b.lightMap.channel),bumpMapUv:Re&&v(b.bumpMap.channel),normalMapUv:mt&&v(b.normalMap.channel),displacementMapUv:gt&&v(b.displacementMap.channel),emissiveMapUv:ut&&v(b.emissiveMap.channel),metalnessMapUv:ft&&v(b.metalnessMap.channel),roughnessMapUv:We&&v(b.roughnessMap.channel),clearcoatMapUv:W&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:$&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:X&&v(b.sheenRoughnessMap.channel),specularMapUv:ge&&v(b.specularMap.channel),specularColorMapUv:ve&&v(b.specularColorMap.channel),specularIntensityMapUv:be&&v(b.specularIntensityMap.channel),transmissionMapUv:fe&&v(b.transmissionMap.channel),thicknessMapUv:_e&&v(b.thicknessMap.channel),alphaMapUv:je&&v(b.alphaMap.channel),vertexTangents:mt&&!!B.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:j,pointsUvs:P.isPoints===!0&&!!B.attributes.uv&&(Se||je),fog:!!O,useFog:b.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:bn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mn,flipSided:b.side===Zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:I&&b.extensions.derivatives===!0,extensionFragDepth:I&&b.extensions.fragDepth===!0,extensionDrawBuffers:I&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)S.push(H),S.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(r.outputEncoding)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputEncoding),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUvs2&&o.enable(13),S.vertexTangents&&o.enable(14),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.decodeVideoTexture&&o.enable(17),S.opaque&&o.enable(18),S.pointsUvs&&o.enable(19),b.push(o.mask)}function x(b){const S=g[b.type];let H;if(S){const k=vn[S];H=pc.clone(k.uniforms)}else H=b.uniforms;return H}function y(b,S){let H;for(let k=0,P=c.length;k<P;k++){const O=c[k];if(O.cacheKey===S){H=O,++H.usedTimes;break}}return H===void 0&&(H=new Rm(r,S,b,s),c.push(H)),H}function A(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:y,releaseProgram:A,releaseShaderCache:L,programs:c,dispose:E}}function Om(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Fm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ko(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,p,g,v,m){let u=r[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function o(d,h,p,g,v,m){const u=a(d,h,p,g,v,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(d,h,p,g,v,m){const u=a(d,h,p,g,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,h){t.length>1&&t.sort(d||Fm),n.length>1&&n.sort(h||Ko),i.length>1&&i.sort(h||Ko)}function f(){for(let d=e,h=r.length;d<h;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:f,sort:c}}function zm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Jo,r.set(n,[a])):i>=s.length?(a=new Jo,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function km(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ze};break;case"SpotLight":t={position:new D,direction:new D,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Bm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gm=0;function Hm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vm(r,e){const t=new km,n=Bm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new D);const s=new D,a=new dt,o=new dt;function l(f,d){let h=0,p=0,g=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let v=0,m=0,u=0,_=0,M=0,x=0,y=0,A=0,L=0,E=0;f.sort(Hm);const b=d===!0?Math.PI:1;for(let H=0,k=f.length;H<k;H++){const P=f[H],O=P.color,B=P.intensity,Y=P.distance,R=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*B*b,p+=O.g*B*b,g+=O.b*B*b;else if(P.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(P.sh.coefficients[z],B);else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*b),P.castShadow){const K=P.shadow,J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[v]=J,i.directionalShadowMap[v]=R,i.directionalShadowMatrix[v]=P.shadow.matrix,x++}i.directional[v]=z,v++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(O).multiplyScalar(B*b),z.distance=Y,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,i.spot[u]=z;const K=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,K.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[u]=K.matrix,P.castShadow){const J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[u]=J,i.spotShadowMap[u]=R,A++}u++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(O).multiplyScalar(B),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=z,_++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity*b),z.distance=P.distance,z.decay=P.decay,P.castShadow){const K=P.shadow,J=n.get(P);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=R,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=z,m++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(B*b),z.groundColor.copy(P.groundColor).multiplyScalar(B*b),i.hemi[M]=z,M++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const S=i.hash;(S.directionalLength!==v||S.pointLength!==m||S.spotLength!==u||S.rectAreaLength!==_||S.hemiLength!==M||S.numDirectionalShadows!==x||S.numPointShadows!==y||S.numSpotShadows!==A||S.numSpotMaps!==L)&&(i.directional.length=v,i.spot.length=u,i.rectArea.length=_,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,S.directionalLength=v,S.pointLength=m,S.spotLength=u,S.rectAreaLength=_,S.hemiLength=M,S.numDirectionalShadows=x,S.numPointShadows=y,S.numSpotShadows=A,S.numSpotMaps=L,i.version=Gm++)}function c(f,d){let h=0,p=0,g=0,v=0,m=0;const u=d.matrixWorldInverse;for(let _=0,M=f.length;_<M;_++){const x=f[_];if(x.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),h++}else if(x.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),g++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(u),o.identity(),a.copy(x.matrixWorld),a.premultiply(u),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:i}}function $o(r,e){const t=new Vm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wm(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new $o(r,e),t.set(s,[l])):a>=o.length?(l=new $o(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class jm extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xm extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ym=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zm(r,e,t){let n=new Aa;const i=new Ve,s=new Ve,a=new It,o=new jm({depthPacking:Hu}),l=new Xm,c={},f=t.maxTextureSize,d={[Qn]:Zt,[Zt]:Qn,[Mn]:Mn},h=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:qm,fragmentShader:Ym}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new he(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl,this.render=function(x,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const L=r.getRenderTarget(),E=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),S=r.state;S.setBlending(Zn),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let H=0,k=x.length;H<k;H++){const P=x[H],O=P.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const B=O.getFrameExtents();if(i.multiply(B),s.copy(O.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/B.x),i.x=s.x*B.x,O.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/B.y),i.y=s.y*B.y,O.mapSize.y=s.y)),O.map===null){const R=this.type!==dr?{minFilter:Ht,magFilter:Ht}:{};O.map=new Jn(i.x,i.y,R),O.map.texture.name=P.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const Y=O.getViewportCount();for(let R=0;R<Y;R++){const z=O.getViewport(R);a.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),S.viewport(a),O.updateMatrices(P,R),n=O.getFrustum(),M(y,A,O.camera,P,this.type)}O.isPointLightShadow!==!0&&this.type===dr&&u(O,A),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(L,E,b)};function u(x,y){const A=e.update(v);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Jn(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(y,null,A,h,v,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(y,null,A,p,v,null)}function _(x,y,A,L){let E=null;const b=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0)E=b;else if(E=A.isPointLight===!0?l:o,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const S=E.uuid,H=y.uuid;let k=c[S];k===void 0&&(k={},c[S]=k);let P=k[H];P===void 0&&(P=E.clone(),k[H]=P),E=P}if(E.visible=y.visible,E.wireframe=y.wireframe,L===dr?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:d[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const S=r.properties.get(E);S.light=A}return E}function M(x,y,A,L,E){if(x.visible===!1)return;if(x.layers.test(y.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&E===dr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const H=e.update(x),k=x.material;if(Array.isArray(k)){const P=H.groups;for(let O=0,B=P.length;O<B;O++){const Y=P[O],R=k[Y.materialIndex];if(R&&R.visible){const z=_(x,R,L,E);r.renderBufferDirect(A,null,H,z,x,Y)}}}else if(k.visible){const P=_(x,k,L,E);r.renderBufferDirect(A,null,H,P,x,null)}}const S=x.children;for(let H=0,k=S.length;H<k;H++)M(S[H],y,A,L,E)}}function Qm(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const j=new It;let ee=null;const le=new It(0,0,0,0);return{setMask:function(de){ee!==de&&!I&&(r.colorMask(de,de,de,de),ee=de)},setLocked:function(de){I=de},setClear:function(de,Qe,qe,yt,jt){jt===!0&&(de*=yt,Qe*=yt,qe*=yt),j.set(de,Qe,qe,yt),le.equals(j)===!1&&(r.clearColor(de,Qe,qe,yt),le.copy(j))},reset:function(){I=!1,ee=null,le.set(-1,0,0,0)}}}function s(){let I=!1,j=null,ee=null,le=null;return{setTest:function(de){de?U(2929):Pe(2929)},setMask:function(de){j!==de&&!I&&(r.depthMask(de),j=de)},setFunc:function(de){if(ee!==de){switch(de){case hu:r.depthFunc(512);break;case du:r.depthFunc(519);break;case pu:r.depthFunc(513);break;case fa:r.depthFunc(515);break;case mu:r.depthFunc(514);break;case gu:r.depthFunc(518);break;case _u:r.depthFunc(516);break;case vu:r.depthFunc(517);break;default:r.depthFunc(515)}ee=de}},setLocked:function(de){I=de},setClear:function(de){le!==de&&(r.clearDepth(de),le=de)},reset:function(){I=!1,j=null,ee=null,le=null}}}function a(){let I=!1,j=null,ee=null,le=null,de=null,Qe=null,qe=null,yt=null,jt=null;return{setTest:function(nt){I||(nt?U(2960):Pe(2960))},setMask:function(nt){j!==nt&&!I&&(r.stencilMask(nt),j=nt)},setFunc:function(nt,Rt,zt){(ee!==nt||le!==Rt||de!==zt)&&(r.stencilFunc(nt,Rt,zt),ee=nt,le=Rt,de=zt)},setOp:function(nt,Rt,zt){(Qe!==nt||qe!==Rt||yt!==zt)&&(r.stencilOp(nt,Rt,zt),Qe=nt,qe=Rt,yt=zt)},setLocked:function(nt){I=nt},setClear:function(nt){jt!==nt&&(r.clearStencil(nt),jt=nt)},reset:function(){I=!1,j=null,ee=null,le=null,de=null,Qe=null,qe=null,yt=null,jt=null}}}const o=new i,l=new s,c=new a,f=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,u=!1,_=null,M=null,x=null,y=null,A=null,L=null,E=null,b=!1,S=null,H=null,k=null,P=null,O=null;const B=r.getParameter(35661);let Y=!1,R=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=R>=1):z.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=R>=2);let K=null,J={};const xe=r.getParameter(3088),ne=r.getParameter(2978),V=new It().fromArray(xe),Z=new It().fromArray(ne);function se(I,j,ee){const le=new Uint8Array(4),de=r.createTexture();r.bindTexture(I,de),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Qe=0;Qe<ee;Qe++)r.texImage2D(j+Qe,0,6408,1,1,0,6408,5121,le);return de}const ce={};ce[3553]=se(3553,3553,1),ce[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(2929),l.setFunc(fa),gt(!1),ut(za),U(2884),Re(Zn);function U(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function Pe(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Se(I,j){return p[I]!==j?(r.bindFramebuffer(I,j),p[I]=j,n&&(I===36009&&(p[36160]=j),I===36160&&(p[36009]=j)),!0):!1}function re(I,j){let ee=v,le=!1;if(I)if(ee=g.get(j),ee===void 0&&(ee=[],g.set(j,ee)),I.isWebGLMultipleRenderTargets){const de=I.texture;if(ee.length!==de.length||ee[0]!==36064){for(let Qe=0,qe=de.length;Qe<qe;Qe++)ee[Qe]=36064+Qe;ee.length=de.length,le=!0}}else ee[0]!==36064&&(ee[0]=36064,le=!0);else ee[0]!==1029&&(ee[0]=1029,le=!0);le&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function we(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const Ue={[Gi]:32774,[tu]:32778,[nu]:32779};if(n)Ue[Ha]=32775,Ue[Va]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ue[Ha]=I.MIN_EXT,Ue[Va]=I.MAX_EXT)}const me={[iu]:0,[ru]:1,[su]:768,[Kl]:770,[fu]:776,[cu]:774,[ou]:772,[au]:769,[Jl]:771,[uu]:775,[lu]:773};function Re(I,j,ee,le,de,Qe,qe,yt){if(I===Zn){u===!0&&(Pe(3042),u=!1);return}if(u===!1&&(U(3042),u=!0),I!==eu){if(I!==_||yt!==b){if((M!==Gi||A!==Gi)&&(r.blendEquation(32774),M=Gi,A=Gi),yt)switch(I){case ji:r.blendFuncSeparate(1,771,1,771);break;case ka:r.blendFunc(1,1);break;case Ba:r.blendFuncSeparate(0,769,0,1);break;case Ga:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ji:r.blendFuncSeparate(770,771,1,771);break;case ka:r.blendFunc(770,1);break;case Ba:r.blendFuncSeparate(0,769,0,1);break;case Ga:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,L=null,E=null,_=I,b=yt}return}de=de||j,Qe=Qe||ee,qe=qe||le,(j!==M||de!==A)&&(r.blendEquationSeparate(Ue[j],Ue[de]),M=j,A=de),(ee!==x||le!==y||Qe!==L||qe!==E)&&(r.blendFuncSeparate(me[ee],me[le],me[Qe],me[qe]),x=ee,y=le,L=Qe,E=qe),_=I,b=!1}function mt(I,j){I.side===Mn?Pe(2884):U(2884);let ee=I.side===Zt;j&&(ee=!ee),gt(ee),I.blending===ji&&I.transparent===!1?Re(Zn):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const le=I.stencilWrite;c.setTest(le),le&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),We(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(32926):Pe(32926)}function gt(I){S!==I&&(I?r.frontFace(2304):r.frontFace(2305),S=I)}function ut(I){I!==Jc?(U(2884),I!==H&&(I===za?r.cullFace(1029):I===$c?r.cullFace(1028):r.cullFace(1032))):Pe(2884),H=I}function ft(I){I!==k&&(Y&&r.lineWidth(I),k=I)}function We(I,j,ee){I?(U(32823),(P!==j||O!==ee)&&(r.polygonOffset(j,ee),P=j,O=ee)):Pe(32823)}function Xe(I){I?U(3089):Pe(3089)}function Tt(I){I===void 0&&(I=33984+B-1),K!==I&&(r.activeTexture(I),K=I)}function C(I,j,ee){ee===void 0&&(K===null?ee=33984+B-1:ee=K);let le=J[ee];le===void 0&&(le={type:void 0,texture:void 0},J[ee]=le),(le.type!==I||le.texture!==j)&&(K!==ee&&(r.activeTexture(ee),K=ee),r.bindTexture(I,j||ce[I]),le.type=I,le.texture=j)}function w(){const I=J[K];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(I){V.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),V.copy(I))}function _e(I){Z.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Ne(I,j){let ee=d.get(j);ee===void 0&&(ee=new WeakMap,d.set(j,ee));let le=ee.get(I);le===void 0&&(le=r.getUniformBlockIndex(j,I.name),ee.set(I,le))}function je(I,j){const le=d.get(j).get(I);f.get(j)!==le&&(r.uniformBlockBinding(j,le,I.__bindingPointIndex),f.set(j,le))}function Ge(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,J={},p={},g=new WeakMap,v=[],m=null,u=!1,_=null,M=null,x=null,y=null,A=null,L=null,E=null,b=!1,S=null,H=null,k=null,P=null,O=null,V.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:U,disable:Pe,bindFramebuffer:Se,drawBuffers:re,useProgram:we,setBlending:Re,setMaterial:mt,setFlipSided:gt,setCullFace:ut,setLineWidth:ft,setPolygonOffset:We,setScissorTest:Xe,activeTexture:Tt,bindTexture:C,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:$,texImage2D:ve,texImage3D:be,updateUBOMapping:Ne,uniformBlockBinding:je,texStorage2D:X,texStorage3D:ge,texSubImage2D:te,texSubImage3D:ae,compressedTexSubImage2D:Ee,compressedTexSubImage3D:pe,scissor:fe,viewport:_e,reset:Ge}}function Km(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return u?new OffscreenCanvas(C,w):Cr("canvas")}function M(C,w,W,$){let te=1;if((C.width>$||C.height>$)&&(te=$/Math.max(C.width,C.height)),te<1||w===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const ae=w?sc:Math.floor,Ee=ae(te*C.width),pe=ae(te*C.height);v===void 0&&(v=_(Ee,pe));const X=W?_(Ee,pe):v;return X.width=Ee,X.height=pe,X.getContext("2d").drawImage(C,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ee+"x"+pe+")."),X}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return _a(C.width)&&_a(C.height)}function y(C){return o?!1:C.wrapS!==hn||C.wrapT!==hn||C.minFilter!==Ht&&C.minFilter!==sn}function A(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ht&&C.minFilter!==sn}function L(C){r.generateMipmap(C)}function E(C,w,W,$,te=!1){if(o===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=w;return w===6403&&(W===5126&&(ae=33326),W===5131&&(ae=33325),W===5121&&(ae=33321)),w===33319&&(W===5126&&(ae=33328),W===5131&&(ae=33327),W===5121&&(ae=33323)),w===6408&&(W===5126&&(ae=34836),W===5131&&(ae=34842),W===5121&&(ae=$===it&&te===!1?35907:32856),W===32819&&(ae=32854),W===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function b(C,w,W){return A(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==sn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function S(C){return C===Ht||C===Wa||C===Cs?9728:9729}function H(C){const w=C.target;w.removeEventListener("dispose",H),P(w),w.isVideoTexture&&g.delete(w)}function k(C){const w=C.target;w.removeEventListener("dispose",k),B(w)}function P(C){const w=n.get(C);if(w.__webglInit===void 0)return;const W=C.source,$=m.get(W);if($){const te=$[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&O(C),Object.keys($).length===0&&m.delete(W)}n.remove(C)}function O(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const W=C.source,$=m.get(W);delete $[w.__cacheKey],a.memory.textures--}function B(C){const w=C.texture,W=n.get(C),$=n.get(w);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)r.deleteFramebuffer(W.__webglFramebuffer[te]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[te]);else{if(r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let te=0;te<W.__webglColorRenderbuffer.length;te++)W.__webglColorRenderbuffer[te]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[te]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ae=w.length;te<ae;te++){const Ee=n.get(w[te]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(w[te])}n.remove(w),n.remove(C)}let Y=0;function R(){Y=0}function z(){const C=Y;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Y+=1,C}function K(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function J(C,w){const W=n.get(C);if(C.isVideoTexture&&Xe(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(W,C,w);return}}t.bindTexture(3553,W.__webglTexture,33984+w)}function xe(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Pe(W,C,w);return}t.bindTexture(35866,W.__webglTexture,33984+w)}function ne(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Pe(W,C,w);return}t.bindTexture(32879,W.__webglTexture,33984+w)}function V(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Se(W,C,w);return}t.bindTexture(34067,W.__webglTexture,33984+w)}const Z={[pa]:10497,[hn]:33071,[ma]:33648},se={[Ht]:9728,[Wa]:9984,[Cs]:9986,[sn]:9729,[Eu]:9985,[wr]:9987};function ce(C,w,W){if(W?(r.texParameteri(C,10242,Z[w.wrapS]),r.texParameteri(C,10243,Z[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,Z[w.wrapR]),r.texParameteri(C,10240,se[w.magFilter]),r.texParameteri(C,10241,se[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==hn||w.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,S(w.magFilter)),r.texParameteri(C,10241,S(w.minFilter)),w.minFilter!==Ht&&w.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ht||w.minFilter!==Cs&&w.minFilter!==wr||w.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Er&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function U(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",H));const $=w.source;let te=m.get($);te===void 0&&(te={},m.set($,te));const ae=K(w);if(ae!==C.__cacheKey){te[ae]===void 0&&(te[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),te[ae].usedTimes++;const Ee=te[C.__cacheKey];Ee!==void 0&&(te[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&O(w)),C.__cacheKey=ae,C.__webglTexture=te[ae].texture}return W}function Pe(C,w,W){let $=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=35866),w.isData3DTexture&&($=32879);const te=U(C,w),ae=w.source;t.bindTexture($,C.__webglTexture,33984+W);const Ee=n.get(ae);if(ae.version!==Ee.__version||te===!0){t.activeTexture(33984+W),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const pe=y(w)&&x(w.image)===!1;let X=M(w.image,pe,!1,f);X=Tt(w,X);const ge=x(X)||o,ve=s.convert(w.format,w.encoding);let be=s.convert(w.type),fe=E(w.internalFormat,ve,be,w.encoding,w.isVideoTexture);ce($,w,ge);let _e;const Ne=w.mipmaps,je=o&&w.isVideoTexture!==!0,Ge=Ee.__version===void 0||te===!0,I=b(w,X,ge);if(w.isDepthTexture)fe=6402,o?w.type===pi?fe=36012:w.type===di?fe=33190:w.type===Xi?fe=35056:fe=33189:w.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===mi&&fe===6402&&w.type!==nc&&w.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=di,be=s.convert(w.type)),w.format===Ji&&fe===6402&&(fe=34041,w.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Xi,be=s.convert(w.type))),Ge&&(je?t.texStorage2D(3553,1,fe,X.width,X.height):t.texImage2D(3553,0,fe,X.width,X.height,0,ve,be,null));else if(w.isDataTexture)if(Ne.length>0&&ge){je&&Ge&&t.texStorage2D(3553,I,fe,Ne[0].width,Ne[0].height);for(let j=0,ee=Ne.length;j<ee;j++)_e=Ne[j],je?t.texSubImage2D(3553,j,0,0,_e.width,_e.height,ve,be,_e.data):t.texImage2D(3553,j,fe,_e.width,_e.height,0,ve,be,_e.data);w.generateMipmaps=!1}else je?(Ge&&t.texStorage2D(3553,I,fe,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,ve,be,X.data)):t.texImage2D(3553,0,fe,X.width,X.height,0,ve,be,X.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){je&&Ge&&t.texStorage3D(35866,I,fe,Ne[0].width,Ne[0].height,X.depth);for(let j=0,ee=Ne.length;j<ee;j++)_e=Ne[j],w.format!==dn?ve!==null?je?t.compressedTexSubImage3D(35866,j,0,0,0,_e.width,_e.height,X.depth,ve,_e.data,0,0):t.compressedTexImage3D(35866,j,fe,_e.width,_e.height,X.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(35866,j,0,0,0,_e.width,_e.height,X.depth,ve,be,_e.data):t.texImage3D(35866,j,fe,_e.width,_e.height,X.depth,0,ve,be,_e.data)}else{je&&Ge&&t.texStorage2D(3553,I,fe,Ne[0].width,Ne[0].height);for(let j=0,ee=Ne.length;j<ee;j++)_e=Ne[j],w.format!==dn?ve!==null?je?t.compressedTexSubImage2D(3553,j,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(3553,j,fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(3553,j,0,0,_e.width,_e.height,ve,be,_e.data):t.texImage2D(3553,j,fe,_e.width,_e.height,0,ve,be,_e.data)}else if(w.isDataArrayTexture)je?(Ge&&t.texStorage3D(35866,I,fe,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,ve,be,X.data)):t.texImage3D(35866,0,fe,X.width,X.height,X.depth,0,ve,be,X.data);else if(w.isData3DTexture)je?(Ge&&t.texStorage3D(32879,I,fe,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,ve,be,X.data)):t.texImage3D(32879,0,fe,X.width,X.height,X.depth,0,ve,be,X.data);else if(w.isFramebufferTexture){if(Ge)if(je)t.texStorage2D(3553,I,fe,X.width,X.height);else{let j=X.width,ee=X.height;for(let le=0;le<I;le++)t.texImage2D(3553,le,fe,j,ee,0,ve,be,null),j>>=1,ee>>=1}}else if(Ne.length>0&&ge){je&&Ge&&t.texStorage2D(3553,I,fe,Ne[0].width,Ne[0].height);for(let j=0,ee=Ne.length;j<ee;j++)_e=Ne[j],je?t.texSubImage2D(3553,j,0,0,ve,be,_e):t.texImage2D(3553,j,fe,ve,be,_e);w.generateMipmaps=!1}else je?(Ge&&t.texStorage2D(3553,I,fe,X.width,X.height),t.texSubImage2D(3553,0,0,0,ve,be,X)):t.texImage2D(3553,0,fe,ve,be,X);A(w,ge)&&L($),Ee.__version=ae.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Se(C,w,W){if(w.image.length!==6)return;const $=U(C,w),te=w.source;t.bindTexture(34067,C.__webglTexture,33984+W);const ae=n.get(te);if(te.version!==ae.__version||$===!0){t.activeTexture(33984+W),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,pe=w.image[0]&&w.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!Ee&&!pe?X[j]=M(w.image[j],!1,!0,c):X[j]=pe?w.image[j].image:w.image[j],X[j]=Tt(w,X[j]);const ge=X[0],ve=x(ge)||o,be=s.convert(w.format,w.encoding),fe=s.convert(w.type),_e=E(w.internalFormat,be,fe,w.encoding),Ne=o&&w.isVideoTexture!==!0,je=ae.__version===void 0||$===!0;let Ge=b(w,ge,ve);ce(34067,w,ve);let I;if(Ee){Ne&&je&&t.texStorage2D(34067,Ge,_e,ge.width,ge.height);for(let j=0;j<6;j++){I=X[j].mipmaps;for(let ee=0;ee<I.length;ee++){const le=I[ee];w.format!==dn?be!==null?Ne?t.compressedTexSubImage2D(34069+j,ee,0,0,le.width,le.height,be,le.data):t.compressedTexImage2D(34069+j,ee,_e,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+j,ee,0,0,le.width,le.height,be,fe,le.data):t.texImage2D(34069+j,ee,_e,le.width,le.height,0,be,fe,le.data)}}}else{I=w.mipmaps,Ne&&je&&(I.length>0&&Ge++,t.texStorage2D(34067,Ge,_e,X[0].width,X[0].height));for(let j=0;j<6;j++)if(pe){Ne?t.texSubImage2D(34069+j,0,0,0,X[j].width,X[j].height,be,fe,X[j].data):t.texImage2D(34069+j,0,_e,X[j].width,X[j].height,0,be,fe,X[j].data);for(let ee=0;ee<I.length;ee++){const de=I[ee].image[j].image;Ne?t.texSubImage2D(34069+j,ee+1,0,0,de.width,de.height,be,fe,de.data):t.texImage2D(34069+j,ee+1,_e,de.width,de.height,0,be,fe,de.data)}}else{Ne?t.texSubImage2D(34069+j,0,0,0,be,fe,X[j]):t.texImage2D(34069+j,0,_e,be,fe,X[j]);for(let ee=0;ee<I.length;ee++){const le=I[ee];Ne?t.texSubImage2D(34069+j,ee+1,0,0,be,fe,le.image[j]):t.texImage2D(34069+j,ee+1,_e,be,fe,le.image[j])}}}A(w,ve)&&L(34067),ae.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function re(C,w,W,$,te){const ae=s.convert(W.format,W.encoding),Ee=s.convert(W.type),pe=E(W.internalFormat,ae,Ee,W.encoding);n.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,pe,w.width,w.height,w.depth,0,ae,Ee,null):t.texImage2D(te,0,pe,w.width,w.height,0,ae,Ee,null)),t.bindFramebuffer(36160,C),We(w)?h.framebufferTexture2DMultisampleEXT(36160,$,te,n.get(W).__webglTexture,0,ft(w)):(te===3553||te>=34069&&te<=34074)&&r.framebufferTexture2D(36160,$,te,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(C,w,W){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let $=33189;if(W||We(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===pi?$=36012:te.type===di&&($=33190));const ae=ft(w);We(w)?h.renderbufferStorageMultisampleEXT(36161,ae,$,w.width,w.height):r.renderbufferStorageMultisample(36161,ae,$,w.width,w.height)}else r.renderbufferStorage(36161,$,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const $=ft(w);W&&We(w)===!1?r.renderbufferStorageMultisample(36161,$,35056,w.width,w.height):We(w)?h.renderbufferStorageMultisampleEXT(36161,$,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const $=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<$.length;te++){const ae=$[te],Ee=s.convert(ae.format,ae.encoding),pe=s.convert(ae.type),X=E(ae.internalFormat,Ee,pe,ae.encoding),ge=ft(w);W&&We(w)===!1?r.renderbufferStorageMultisample(36161,ge,X,w.width,w.height):We(w)?h.renderbufferStorageMultisampleEXT(36161,ge,X,w.width,w.height):r.renderbufferStorage(36161,X,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function Ue(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const $=n.get(w.depthTexture).__webglTexture,te=ft(w);if(w.depthTexture.format===mi)We(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,te):r.framebufferTexture2D(36160,36096,3553,$,0);else if(w.depthTexture.format===Ji)We(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,te):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function me(C){const w=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ue(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=r.createRenderbuffer(),we(w.__webglDepthbuffer[$],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Re(C,w,W){const $=n.get(C);w!==void 0&&re($.__webglFramebuffer,C,C.texture,36064,3553),W!==void 0&&me(C)}function mt(C){const w=C.texture,W=n.get(C),$=n.get(w);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=w.version,a.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,Ee=x(C)||o;if(te){W.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)W.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(W.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const pe=C.texture;for(let X=0,ge=pe.length;X<ge;X++){const ve=n.get(pe[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&We(C)===!1){const pe=ae?w:[w];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let X=0;X<pe.length;X++){const ge=pe[X];W.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(36161,W.__webglColorRenderbuffer[X]);const ve=s.convert(ge.format,ge.encoding),be=s.convert(ge.type),fe=E(ge.internalFormat,ve,be,ge.encoding,C.isXRRenderTarget===!0),_e=ft(C);r.renderbufferStorageMultisample(36161,_e,fe,C.width,C.height),r.framebufferRenderbuffer(36160,36064+X,36161,W.__webglColorRenderbuffer[X])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),we(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,$.__webglTexture),ce(34067,w,Ee);for(let pe=0;pe<6;pe++)re(W.__webglFramebuffer[pe],C,w,36064,34069+pe);A(w,Ee)&&L(34067),t.unbindTexture()}else if(ae){const pe=C.texture;for(let X=0,ge=pe.length;X<ge;X++){const ve=pe[X],be=n.get(ve);t.bindTexture(3553,be.__webglTexture),ce(3553,ve,Ee),re(W.__webglFramebuffer,C,ve,36064+X,3553),A(ve,Ee)&&L(3553)}t.unbindTexture()}else{let pe=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?pe=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,$.__webglTexture),ce(pe,w,Ee),re(W.__webglFramebuffer,C,w,36064,pe),A(w,Ee)&&L(pe),t.unbindTexture()}C.depthBuffer&&me(C)}function gt(C){const w=x(C)||o,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let $=0,te=W.length;$<te;$++){const ae=W[$];if(A(ae,w)){const Ee=C.isWebGLCubeRenderTarget?34067:3553,pe=n.get(ae).__webglTexture;t.bindTexture(Ee,pe),L(Ee),t.unbindTexture()}}}function ut(C){if(o&&C.samples>0&&We(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,$=C.height;let te=16384;const ae=[],Ee=C.stencilBuffer?33306:36096,pe=n.get(C),X=C.isWebGLMultipleRenderTargets===!0;if(X)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ge,36161,null),t.bindFramebuffer(36160,pe.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ge,3553,null,0);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){ae.push(36064+ge),C.depthBuffer&&ae.push(Ee);const ve=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(ve===!1&&(C.depthBuffer&&(te|=256),C.stencilBuffer&&(te|=1024)),X&&r.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[ge]),ve===!0&&(r.invalidateFramebuffer(36008,[Ee]),r.invalidateFramebuffer(36009,[Ee])),X){const be=n.get(w[ge]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,be,0)}r.blitFramebuffer(0,0,W,$,0,0,W,$,te,9728),p&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),X)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ge,36161,pe.__webglColorRenderbuffer[ge]);const ve=n.get(w[ge]).__webglTexture;t.bindFramebuffer(36160,pe.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ge,3553,ve,0)}t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function ft(C){return Math.min(d,C.samples)}function We(C){const w=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(C){const w=a.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function Tt(C,w){const W=C.encoding,$=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ga||W!==Kn&&(W===it?o===!1?e.has("EXT_sRGB")===!0&&$===dn?(C.format=ga,C.minFilter=sn,C.generateMipmaps=!1):w=oc.sRGBToLinear(w):($!==dn||te!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=J,this.setTexture2DArray=xe,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=Re,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=re,this.useMultisampledRTT=We}function Jm(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===vi)return 5121;if(s===Pu)return 32819;if(s===Lu)return 32820;if(s===Tu)return 5120;if(s===Au)return 5122;if(s===nc)return 5123;if(s===Cu)return 5124;if(s===di)return 5125;if(s===pi)return 5126;if(s===Er)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ru)return 6406;if(s===dn)return 6408;if(s===Du)return 6409;if(s===Iu)return 6410;if(s===mi)return 6402;if(s===Ji)return 34041;if(s===ga)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Uu)return 6403;if(s===Nu)return 36244;if(s===Ou)return 33319;if(s===Fu)return 33320;if(s===zu)return 36249;if(s===Ps||s===Ls||s===Rs||s===Ds)if(a===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ds)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ja||s===Xa||s===qa||s===Ya)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ya)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ku)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Za||s===Qa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Za)return a===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Qa)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ka||s===Ja||s===$a||s===eo||s===to||s===no||s===io||s===ro||s===so||s===ao||s===oo||s===lo||s===co||s===uo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Ka)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ja)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$a)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===eo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===to)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===no)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===io)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ro)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===so)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ao)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===co)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===uo)return a===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Is)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Is)return a===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Bu||s===fo||s===ho||s===po)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Is)return o.COMPRESSED_RED_RGTC1_EXT;if(s===fo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ho)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===po)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class $m extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tg extends Qt{constructor(e,t,n,i,s,a,o,l,c,f){if(f=f!==void 0?f:mi,f!==mi&&f!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===mi&&(n=di),n===void 0&&f===Ji&&(n=Xi),super(null,i,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class ng extends tr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,g=null;const v=t.getContextAttributes();let m=null,u=null;const _=[],M=[],x=new Set,y=new Map,A=new tn;A.layers.enable(1),A.viewport=new It;const L=new tn;L.layers.enable(2),L.viewport=new It;const E=[A,L],b=new $m;b.layers.enable(1),b.layers.enable(2);let S=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=_[V];return Z===void 0&&(Z=new ta,_[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=_[V];return Z===void 0&&(Z=new ta,_[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=_[V];return Z===void 0&&(Z=new ta,_[V]=Z),Z.getHandSpace()};function k(V){const Z=M.indexOf(V.inputSource);if(Z===-1)return;const se=_[Z];se!==void 0&&se.dispatchEvent({type:V.type,data:V.inputSource})}function P(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",O);for(let V=0;V<_.length;V++){const Z=M[V];Z!==null&&(M[V]=null,_[V].disconnect(Z))}S=null,H=null,e.setRenderTarget(m),p=null,h=null,d=null,i=null,u=null,ne.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",P),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),u=new Jn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:vi,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let Z=null,se=null,ce=null;v.depth&&(ce=v.stencil?35056:33190,Z=v.stencil?Ji:mi,se=v.stencil?Xi:di);const U={colorFormat:32856,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(i,t),h=d.createProjectionLayer(U),i.updateRenderState({layers:[h]}),u=new Jn(h.textureWidth,h.textureHeight,{format:dn,type:vi,depthTexture:new tg(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let Z=0;Z<V.removed.length;Z++){const se=V.removed[Z],ce=M.indexOf(se);ce>=0&&(M[ce]=null,_[ce].disconnect(se))}for(let Z=0;Z<V.added.length;Z++){const se=V.added[Z];let ce=M.indexOf(se);if(ce===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=M.length){M.push(se),ce=Pe;break}else if(M[Pe]===null){M[Pe]=se,ce=Pe;break}if(ce===-1)break}const U=_[ce];U&&U.connect(se)}}const B=new D,Y=new D;function R(V,Z,se){B.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(se.matrixWorld);const ce=B.distanceTo(Y),U=Z.projectionMatrix.elements,Pe=se.projectionMatrix.elements,Se=U[14]/(U[10]-1),re=U[14]/(U[10]+1),we=(U[9]+1)/U[5],Ue=(U[9]-1)/U[5],me=(U[8]-1)/U[0],Re=(Pe[8]+1)/Pe[0],mt=Se*me,gt=Se*Re,ut=ce/(-me+Re),ft=ut*-me;Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ft),V.translateZ(ut),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const We=Se+ut,Xe=re+ut,Tt=mt-ft,C=gt+(ce-ft),w=we*re/Xe*We,W=Ue*re/Xe*We;V.projectionMatrix.makePerspective(Tt,C,w,W,We,Xe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function z(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;b.near=L.near=A.near=V.near,b.far=L.far=A.far=V.far,(S!==b.near||H!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,H=b.far);const Z=V.parent,se=b.cameras;z(b,Z);for(let ce=0;ce<se.length;ce++)z(se[ce],Z);se.length===2?R(b,A,L):b.projectionMatrix.copy(A.projectionMatrix),K(V,b,Z)};function K(V,Z,se){se===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(se.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ce=V.children;for(let U=0,Pe=ce.length;U<Pe;U++)ce[U].updateMatrixWorld(!0);V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ar*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return x};let J=null;function xe(V,Z){if(f=Z.getViewerPose(c||a),g=Z,f!==null){const se=f.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ce=!1;se.length!==b.cameras.length&&(b.cameras.length=0,ce=!0);for(let U=0;U<se.length;U++){const Pe=se[U];let Se=null;if(p!==null)Se=p.getViewport(Pe);else{const we=d.getViewSubImage(h,Pe);Se=we.viewport,U===0&&(e.setRenderTargetTextures(u,we.colorTexture,h.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(u))}let re=E[U];re===void 0&&(re=new tn,re.layers.enable(U),re.viewport=new It,E[U]=re),re.matrix.fromArray(Pe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Pe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Se.x,Se.y,Se.width,Se.height),U===0&&(b.matrix.copy(re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ce===!0&&b.cameras.push(re)}}for(let se=0;se<_.length;se++){const ce=M[se],U=_[se];ce!==null&&U!==void 0&&U.update(ce,Z,c||a)}if(J&&J(V,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let se=null;for(const ce of x)Z.detectedPlanes.has(ce)||(se===null&&(se=[]),se.push(ce));if(se!==null)for(const ce of se)x.delete(ce),y.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of Z.detectedPlanes)if(!x.has(ce))x.add(ce),y.set(ce,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const U=y.get(ce);ce.lastChangedTime>U&&(y.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}g=null}const ne=new _c;ne.setAnimationLoop(xe),this.setAnimationLoop=function(V){J=V},this.dispose=function(){}}}function ig(r,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,dc(r)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,_,M,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Zt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Zt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const M=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(_,M){const x=M.program;n.uniformBlockBinding(_,x)}function c(_,M){let x=i[_.id];x===void 0&&(g(_),x=f(_),i[_.id]=x,_.addEventListener("dispose",m));const y=M.program;n.updateUBOMapping(_,y);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function f(_){const M=d();_.__bindingPointIndex=M;const x=r.createBuffer(),y=_.__size,A=_.usage;return r.bindBuffer(35345,x),r.bufferData(35345,y,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,x),x}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const M=i[_.id],x=_.uniforms,y=_.__cache;r.bindBuffer(35345,M);for(let A=0,L=x.length;A<L;A++){const E=x[A];if(p(E,A,y)===!0){const b=E.__offset,S=Array.isArray(E.value)?E.value:[E.value];let H=0;for(let k=0;k<S.length;k++){const P=S[k],O=v(P);typeof P=="number"?(E.__data[0]=P,r.bufferSubData(35345,b+H,E.__data)):P.isMatrix3?(E.__data[0]=P.elements[0],E.__data[1]=P.elements[1],E.__data[2]=P.elements[2],E.__data[3]=P.elements[0],E.__data[4]=P.elements[3],E.__data[5]=P.elements[4],E.__data[6]=P.elements[5],E.__data[7]=P.elements[0],E.__data[8]=P.elements[6],E.__data[9]=P.elements[7],E.__data[10]=P.elements[8],E.__data[11]=P.elements[0]):(P.toArray(E.__data,H),H+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,b,E.__data)}}r.bindBuffer(35345,null)}function p(_,M,x){const y=_.value;if(x[M]===void 0){if(typeof y=="number")x[M]=y;else{const A=Array.isArray(y)?y:[y],L=[];for(let E=0;E<A.length;E++)L.push(A[E].clone());x[M]=L}return!0}else if(typeof y=="number"){if(x[M]!==y)return x[M]=y,!0}else{const A=Array.isArray(x[M])?x[M]:[x[M]],L=Array.isArray(y)?y:[y];for(let E=0;E<A.length;E++){const b=A[E];if(b.equals(L[E])===!1)return b.copy(L[E]),!0}}return!1}function g(_){const M=_.uniforms;let x=0;const y=16;let A=0;for(let L=0,E=M.length;L<E;L++){const b=M[L],S={boundary:0,storage:0},H=Array.isArray(b.value)?b.value:[b.value];for(let k=0,P=H.length;k<P;k++){const O=H[k],B=v(O);S.boundary+=B.boundary,S.storage+=B.storage}if(b.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,L>0){A=x%y;const k=y-A;A!==0&&k-S.boundary<0&&(x+=y-A,b.__offset=x)}x+=S.storage}return A=x%y,A>0&&(x+=y-A),_.__size=x,_.__cache={},this}function v(_){const M={boundary:0,storage:0};return typeof _=="number"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function u(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:u}}function sg(){const r=Cr("canvas");return r.style.display="block",r}class yc{constructor(e={}){const{canvas:t=sg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;let p=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Kn,this.useLegacyLights=!0,this.toneMapping=bn,this.toneMappingExposure=1;const u=this;let _=!1,M=0,x=0,y=null,A=-1,L=null;const E=new It,b=new It;let S=null,H=t.width,k=t.height,P=1,O=null,B=null;const Y=new It(0,0,H,k),R=new It(0,0,H,k);let z=!1;const K=new Aa;let J=!1,xe=!1,ne=null;const V=new dt,Z=new D,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return y===null?P:1}let U=n;function Pe(T,N){for(let G=0;G<T.length;G++){const F=T[G],q=t.getContext(F,N);if(q!==null)return q}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",je,!1),U===null){const N=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&N.shift(),U=Pe(N,T),U===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,re,we,Ue,me,Re,mt,gt,ut,ft,We,Xe,Tt,C,w,W,$,te,ae,Ee,pe,X,ge,ve;function be(){Se=new gp(U),re=new up(U,Se,e),Se.init(re),X=new Jm(U,Se,re),we=new Qm(U,Se,re),Ue=new xp,me=new Om,Re=new Km(U,Se,we,me,re,X,Ue),mt=new hp(u),gt=new mp(u),ut=new Rf(U,re),ge=new lp(U,Se,ut,re),ft=new _p(U,ut,Ue,ge),We=new yp(U,ft,ut,Ue),ae=new bp(U,re,Re),W=new fp(me),Xe=new Nm(u,mt,gt,Se,re,ge,W),Tt=new ig(u,me),C=new zm,w=new Wm(Se,re),te=new op(u,mt,gt,we,We,h,l),$=new Zm(u,We,re),ve=new rg(U,Ue,re,we),Ee=new cp(U,Se,Ue,re),pe=new vp(U,Se,Ue,re),Ue.programs=Xe.programs,u.capabilities=re,u.extensions=Se,u.properties=me,u.renderLists=C,u.shadowMap=$,u.state=we,u.info=Ue}be();const fe=new ng(u,U);this.xr=fe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(H,k,!1))},this.getSize=function(T){return T.set(H,k)},this.setSize=function(T,N,G=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,k=N,t.width=Math.floor(T*P),t.height=Math.floor(N*P),G===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(H*P,k*P).floor()},this.setDrawingBufferSize=function(T,N,G){H=T,k=N,P=G,t.width=Math.floor(T*G),t.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(Y)},this.setViewport=function(T,N,G,F){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,N,G,F),we.viewport(E.copy(Y).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(R)},this.setScissor=function(T,N,G,F){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,N,G,F),we.scissor(b.copy(R).multiplyScalar(P).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){we.setScissorTest(z=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,N=!0,G=!0){let F=0;T&&(F|=16384),N&&(F|=256),G&&(F|=1024),U.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",je,!1),C.dispose(),w.dispose(),me.dispose(),mt.dispose(),gt.dispose(),We.dispose(),ge.dispose(),ve.dispose(),Xe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",de),fe.removeEventListener("sessionend",Qe),ne&&(ne.dispose(),ne=null),qe.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=Ue.autoReset,N=$.enabled,G=$.autoUpdate,F=$.needsUpdate,q=$.type;be(),Ue.autoReset=T,$.enabled=N,$.autoUpdate=G,$.needsUpdate=F,$.type=q}function je(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const N=T.target;N.removeEventListener("dispose",Ge),I(N)}function I(T){j(T),me.remove(T)}function j(T){const N=me.get(T).programs;N!==void 0&&(N.forEach(function(G){Xe.releaseProgram(G)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,F,q,ye){N===null&&(N=se);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Le=Mi(T,N,G,F,q);we.setMaterial(F,Ce);let De=G.index,Oe=1;F.wireframe===!0&&(De=ft.getWireframeAttribute(G),Oe=2);const Fe=G.drawRange,ke=G.attributes.position;let Ke=Fe.start*Oe,kt=(Fe.start+Fe.count)*Oe;ye!==null&&(Ke=Math.max(Ke,ye.start*Oe),kt=Math.min(kt,(ye.start+ye.count)*Oe)),De!==null?(Ke=Math.max(Ke,0),kt=Math.min(kt,De.count)):ke!=null&&(Ke=Math.max(Ke,0),kt=Math.min(kt,ke.count));const an=kt-Ke;if(an<0||an===1/0)return;ge.setup(q,F,Le,G,De);let ei,Mt=Ee;if(De!==null&&(ei=ut.get(De),Mt=pe,Mt.setIndex(ei)),q.isMesh)F.wireframe===!0?(we.setLineWidth(F.wireframeLinewidth*ce()),Mt.setMode(1)):Mt.setMode(4);else if(q.isLine){let He=F.linewidth;He===void 0&&(He=1),we.setLineWidth(He*ce()),q.isLineSegments?Mt.setMode(1):q.isLineLoop?Mt.setMode(2):Mt.setMode(3)}else q.isPoints?Mt.setMode(0):q.isSprite&&Mt.setMode(4);if(q.isInstancedMesh)Mt.renderInstances(Ke,an,q.count);else if(G.isInstancedBufferGeometry){const He=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bs=Math.min(G.instanceCount,He);Mt.renderInstances(Ke,an,bs)}else Mt.render(Ke,an)},this.compile=function(T,N){function G(F,q,ye){F.transparent===!0&&F.side===Mn&&F.forceSinglePass===!1?(F.side=Zt,F.needsUpdate=!0,$n(F,q,ye),F.side=Qn,F.needsUpdate=!0,$n(F,q,ye),F.side=Mn):$n(F,q,ye)}g=w.get(T),g.init(),m.push(g),T.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(u.useLegacyLights),T.traverse(function(F){const q=F.material;if(q)if(Array.isArray(q))for(let ye=0;ye<q.length;ye++){const Ce=q[ye];G(Ce,T,F)}else G(q,T,F)}),m.pop(),g=null};let ee=null;function le(T){ee&&ee(T)}function de(){qe.stop()}function Qe(){qe.start()}const qe=new _c;qe.setAnimationLoop(le),typeof self!="undefined"&&qe.setContext(self),this.setAnimationLoop=function(T){ee=T,fe.setAnimationLoop(T),T===null?qe.stop():qe.start()},fe.addEventListener("sessionstart",de),fe.addEventListener("sessionend",Qe),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(u,T,N,y),g=w.get(T,m.length),g.init(),m.push(g),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(V),xe=this.localClippingEnabled,J=W.init(this.clippingPlanes,xe),p=C.get(T,v.length),p.init(),v.push(p),yt(T,N,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(O,B),J===!0&&W.beginShadows();const G=g.state.shadowsArray;if($.render(G,T,N),J===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,T),g.setupLights(u.useLegacyLights),N.isArrayCamera){const F=N.cameras;for(let q=0,ye=F.length;q<ye;q++){const Ce=F[q];jt(p,T,Ce,Ce.viewport)}}else jt(p,T,N);y!==null&&(Re.updateMultisampleRenderTarget(y),Re.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(u,T,N),ge.resetDefaultState(),A=-1,L=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function yt(T,N,G,F){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||K.intersectsSprite(T)){F&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ce=We.update(T),Le=T.material;Le.visible&&p.push(T,Ce,Le,G,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ue.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ue.render.frame),!T.frustumCulled||K.intersectsObject(T))){F&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Ce=We.update(T),Le=T.material;if(Array.isArray(Le)){const De=Ce.groups;for(let Oe=0,Fe=De.length;Oe<Fe;Oe++){const ke=De[Oe],Ke=Le[ke.materialIndex];Ke&&Ke.visible&&p.push(T,Ce,Ke,G,Z.z,ke)}}else Le.visible&&p.push(T,Ce,Le,G,Z.z,null)}}const ye=T.children;for(let Ce=0,Le=ye.length;Ce<Le;Ce++)yt(ye[Ce],N,G,F)}function jt(T,N,G,F){const q=T.opaque,ye=T.transmissive,Ce=T.transparent;g.setupLightsView(G),J===!0&&W.setGlobalState(u.clippingPlanes,G),ye.length>0&&nt(q,ye,N,G),F&&we.viewport(E.copy(F)),q.length>0&&Rt(q,N,G),ye.length>0&&Rt(ye,N,G),Ce.length>0&&Rt(Ce,N,G),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function nt(T,N,G,F){if(ne===null){const Le=re.isWebGL2;ne=new Jn(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?Er:vi,minFilter:wr,samples:Le&&o===!0?4:0})}const q=u.getRenderTarget();u.setRenderTarget(ne),u.clear();const ye=u.toneMapping;u.toneMapping=bn,Rt(T,G,F),Re.updateMultisampleRenderTarget(ne),Re.updateRenderTargetMipmap(ne);let Ce=!1;for(let Le=0,De=N.length;Le<De;Le++){const Oe=N[Le],Fe=Oe.object,ke=Oe.geometry,Ke=Oe.material,kt=Oe.group;if(Ke.side===Mn&&Fe.layers.test(F.layers)){const an=Ke.side;Ke.side=Zt,Ke.needsUpdate=!0,zt(Fe,G,F,ke,Ke,kt),Ke.side=an,Ke.needsUpdate=!0,Ce=!0}}Ce===!0&&(Re.updateMultisampleRenderTarget(ne),Re.updateRenderTargetMipmap(ne)),u.setRenderTarget(q),u.toneMapping=ye}function Rt(T,N,G){const F=N.isScene===!0?N.overrideMaterial:null;for(let q=0,ye=T.length;q<ye;q++){const Ce=T[q],Le=Ce.object,De=Ce.geometry,Oe=F===null?Ce.material:F,Fe=Ce.group;Le.layers.test(G.layers)&&zt(Le,N,G,De,Oe,Fe)}}function zt(T,N,G,F,q,ye){T.onBeforeRender(u,N,G,F,q,ye),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(u,N,G,F,T,ye),q.transparent===!0&&q.side===Mn&&q.forceSinglePass===!1?(q.side=Zt,q.needsUpdate=!0,u.renderBufferDirect(G,N,F,q,T,ye),q.side=Qn,q.needsUpdate=!0,u.renderBufferDirect(G,N,F,q,T,ye),q.side=Mn):u.renderBufferDirect(G,N,F,q,T,ye),T.onAfterRender(u,N,G,F,q,ye)}function $n(T,N,G){N.isScene!==!0&&(N=se);const F=me.get(T),q=g.state.lights,ye=g.state.shadowsArray,Ce=q.state.version,Le=Xe.getParameters(T,q.state,ye,N,G),De=Xe.getProgramCacheKey(Le);let Oe=F.programs;F.environment=T.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(T.isMeshStandardMaterial?gt:mt).get(T.envMap||F.environment),Oe===void 0&&(T.addEventListener("dispose",Ge),Oe=new Map,F.programs=Oe);let Fe=Oe.get(De);if(Fe!==void 0){if(F.currentProgram===Fe&&F.lightsStateVersion===Ce)return pn(T,Le),Fe}else Le.uniforms=Xe.getUniforms(T),T.onBuild(G,Le,u),T.onBeforeCompile(Le,u),Fe=Xe.acquireProgram(Le,De),Oe.set(De,Fe),F.uniforms=Le.uniforms;const ke=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=W.uniform),pn(T,Le),F.needsLights=sr(T),F.lightsStateVersion=Ce,F.needsLights&&(ke.ambientLightColor.value=q.state.ambient,ke.lightProbe.value=q.state.probe,ke.directionalLights.value=q.state.directional,ke.directionalLightShadows.value=q.state.directionalShadow,ke.spotLights.value=q.state.spot,ke.spotLightShadows.value=q.state.spotShadow,ke.rectAreaLights.value=q.state.rectArea,ke.ltc_1.value=q.state.rectAreaLTC1,ke.ltc_2.value=q.state.rectAreaLTC2,ke.pointLights.value=q.state.point,ke.pointLightShadows.value=q.state.pointShadow,ke.hemisphereLights.value=q.state.hemi,ke.directionalShadowMap.value=q.state.directionalShadowMap,ke.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ke.spotShadowMap.value=q.state.spotShadowMap,ke.spotLightMatrix.value=q.state.spotLightMatrix,ke.spotLightMap.value=q.state.spotLightMap,ke.pointShadowMap.value=q.state.pointShadowMap,ke.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ke=Fe.getUniforms(),kt=rs.seqWithValue(Ke.seq,ke);return F.currentProgram=Fe,F.uniformsList=kt,Fe}function pn(T,N){const G=me.get(T);G.outputEncoding=N.outputEncoding,G.instancing=N.instancing,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Mi(T,N,G,F,q){N.isScene!==!0&&(N=se),Re.resetTextureUnits();const ye=N.fog,Ce=F.isMeshStandardMaterial?N.environment:null,Le=y===null?u.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Kn,De=(F.isMeshStandardMaterial?gt:mt).get(F.envMap||Ce),Oe=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!F.normalMap&&!!G.attributes.tangent,ke=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,kt=!!G.morphAttributes.color,an=F.toneMapped?u.toneMapping:bn,ei=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Mt=ei!==void 0?ei.length:0,He=me.get(F),bs=g.state.lights;if(J===!0&&(xe===!0||T!==L)){const Kt=T===L&&F.id===A;W.setState(F,T,Kt)}let Ct=!1;F.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bs.state.version||He.outputEncoding!==Le||q.isInstancedMesh&&He.instancing===!1||!q.isInstancedMesh&&He.instancing===!0||q.isSkinnedMesh&&He.skinning===!1||!q.isSkinnedMesh&&He.skinning===!0||He.envMap!==De||F.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==W.numPlanes||He.numIntersection!==W.numIntersection)||He.vertexAlphas!==Oe||He.vertexTangents!==Fe||He.morphTargets!==ke||He.morphNormals!==Ke||He.morphColors!==kt||He.toneMapping!==an||re.isWebGL2===!0&&He.morphTargetsCount!==Mt)&&(Ct=!0):(Ct=!0,He.__version=F.version);let ti=He.currentProgram;Ct===!0&&(ti=$n(F,N,q));let Ua=!1,ar=!1,ys=!1;const Bt=ti.getUniforms(),ni=He.uniforms;if(we.useProgram(ti.program)&&(Ua=!0,ar=!0,ys=!0),F.id!==A&&(A=F.id,ar=!0),Ua||L!==T){if(Bt.setValue(U,"projectionMatrix",T.projectionMatrix),re.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),L!==T&&(L=T,ar=!0,ys=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Kt=Bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(U,Z.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||q.isSkinnedMesh)&&Bt.setValue(U,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Bt.setOptional(U,q,"bindMatrix"),Bt.setOptional(U,q,"bindMatrixInverse");const Kt=q.skeleton;Kt&&(re.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Bt.setValue(U,"boneTexture",Kt.boneTexture,Re),Bt.setValue(U,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ws=G.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&re.isWebGL2===!0)&&ae.update(q,G,ti),(ar||He.receiveShadow!==q.receiveShadow)&&(He.receiveShadow=q.receiveShadow,Bt.setValue(U,"receiveShadow",q.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ni.envMap.value=De,ni.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ar&&(Bt.setValue(U,"toneMappingExposure",u.toneMappingExposure),He.needsLights&&At(ni,ys),ye&&F.fog===!0&&Tt.refreshFogUniforms(ni,ye),Tt.refreshMaterialUniforms(ni,F,P,k,ne),rs.upload(U,He.uniformsList,ni,Re)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(rs.upload(U,He.uniformsList,ni,Re),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Bt.setValue(U,"center",q.center),Bt.setValue(U,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(U,"normalMatrix",q.normalMatrix),Bt.setValue(U,"modelMatrix",q.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Kt=F.uniformsGroups;for(let Es=0,Bc=Kt.length;Es<Bc;Es++)if(re.isWebGL2){const Na=Kt[Es];ve.update(Na,ti),ve.bind(Na,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function At(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function sr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,N,G){me.get(T.texture).__webglTexture=N,me.get(T.depthTexture).__webglTexture=G;const F=me.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=G===void 0,F.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){const G=me.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){y=T,M=N,x=G;let F=!0,q=null,ye=!1,Ce=!1;if(T){const De=me.get(T);De.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),F=!1):De.__webglFramebuffer===void 0?Re.setupRenderTarget(T):De.__hasExternalTextures&&Re.rebindTextures(T,me.get(T.texture).__webglTexture,me.get(T.depthTexture).__webglTexture);const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);const Fe=me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Fe[N],ye=!0):re.isWebGL2&&T.samples>0&&Re.useMultisampledRTT(T)===!1?q=me.get(T).__webglMultisampledFramebuffer:q=Fe,E.copy(T.viewport),b.copy(T.scissor),S=T.scissorTest}else E.copy(Y).multiplyScalar(P).floor(),b.copy(R).multiplyScalar(P).floor(),S=z;if(we.bindFramebuffer(36160,q)&&re.drawBuffers&&F&&we.drawBuffers(T,q),we.viewport(E),we.scissor(b),we.setScissorTest(S),ye){const De=me.get(T.texture);U.framebufferTexture2D(36160,36064,34069+N,De.__webglTexture,G)}else if(Ce){const De=me.get(T.texture),Oe=N||0;U.framebufferTextureLayer(36160,36064,De.__webglTexture,G||0,Oe)}A=-1},this.readRenderTargetPixels=function(T,N,G,F,q,ye,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){we.bindFramebuffer(36160,Le);try{const De=T.texture,Oe=De.format,Fe=De.type;if(Oe!==dn&&X.convert(Oe)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Er&&(Se.has("EXT_color_buffer_half_float")||re.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Fe!==vi&&X.convert(Fe)!==U.getParameter(35738)&&!(Fe===pi&&(re.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-F&&G>=0&&G<=T.height-q&&U.readPixels(N,G,F,q,X.convert(Oe),X.convert(Fe),ye)}finally{const De=y!==null?me.get(y).__webglFramebuffer:null;we.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(T,N,G=0){const F=Math.pow(2,-G),q=Math.floor(N.image.width*F),ye=Math.floor(N.image.height*F);Re.setTexture2D(N,0),U.copyTexSubImage2D(3553,G,0,0,T.x,T.y,q,ye),we.unbindTexture()},this.copyTextureToTexture=function(T,N,G,F=0){const q=N.image.width,ye=N.image.height,Ce=X.convert(G.format),Le=X.convert(G.type);Re.setTexture2D(G,0),U.pixelStorei(37440,G.flipY),U.pixelStorei(37441,G.premultiplyAlpha),U.pixelStorei(3317,G.unpackAlignment),N.isDataTexture?U.texSubImage2D(3553,F,T.x,T.y,q,ye,Ce,Le,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(3553,F,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,Ce,N.mipmaps[0].data):U.texSubImage2D(3553,F,T.x,T.y,Ce,Le,N.image),F===0&&G.generateMipmaps&&U.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G,F,q=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,De=X.convert(F.format),Oe=X.convert(F.type);let Fe;if(F.isData3DTexture)Re.setTexture3D(F,0),Fe=32879;else if(F.isDataArrayTexture)Re.setTexture2DArray(F,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,F.flipY),U.pixelStorei(37441,F.premultiplyAlpha),U.pixelStorei(3317,F.unpackAlignment);const ke=U.getParameter(3314),Ke=U.getParameter(32878),kt=U.getParameter(3316),an=U.getParameter(3315),ei=U.getParameter(32877),Mt=G.isCompressedTexture?G.mipmaps[0]:G.image;U.pixelStorei(3314,Mt.width),U.pixelStorei(32878,Mt.height),U.pixelStorei(3316,T.min.x),U.pixelStorei(3315,T.min.y),U.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?U.texSubImage3D(Fe,q,N.x,N.y,N.z,ye,Ce,Le,De,Oe,Mt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,q,N.x,N.y,N.z,ye,Ce,Le,De,Mt.data)):U.texSubImage3D(Fe,q,N.x,N.y,N.z,ye,Ce,Le,De,Oe,Mt),U.pixelStorei(3314,ke),U.pixelStorei(32878,Ke),U.pixelStorei(3316,kt),U.pixelStorei(3315,an),U.pixelStorei(32877,ei),q===0&&F.generateMipmaps&&U.generateMipmap(Fe),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){M=0,x=0,y=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class ag extends yc{}ag.prototype.isWebGL1Renderer=!0;class og extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class wc extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new D,tl=new D,nl=new dt,na=new Ea,$r=new ms;class Wn extends bt{constructor(e=new Wt,t=new wc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)el.fromBufferAttribute(t,i-1),tl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=el.distanceTo(tl);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;nl.copy(i).invert(),na.copy(e.ray).applyMatrix4(nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,f=new D,d=new D,h=new D,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const u=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let M=u,x=_-1;M<x;M+=p){const y=g.getX(M),A=g.getX(M+1);if(c.fromBufferAttribute(m,y),f.fromBufferAttribute(m,A),na.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let M=u,x=_-1;M<x;M+=p){if(c.fromBufferAttribute(m,M),f.fromBufferAttribute(m,M+1),na.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Ot extends Wt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const f=[],d=[],h=[],p=[];let g=0;const v=[],m=n/2;let u=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function _(){const x=new D,y=new D;let A=0;const L=(t-e)/n;for(let E=0;E<=s;E++){const b=[],S=E/s,H=S*(t-e)+e;for(let k=0;k<=i;k++){const P=k/i,O=P*l+o,B=Math.sin(O),Y=Math.cos(O);y.x=H*B,y.y=-S*n+m,y.z=H*Y,d.push(y.x,y.y,y.z),x.set(B,L,Y).normalize(),h.push(x.x,x.y,x.z),p.push(P,1-S),b.push(g++)}v.push(b)}for(let E=0;E<i;E++)for(let b=0;b<s;b++){const S=v[b][E],H=v[b+1][E],k=v[b+1][E+1],P=v[b][E+1];f.push(S,H,P),f.push(H,k,P),A+=6}c.addGroup(u,A,0),u+=A}function M(x){const y=g,A=new Ve,L=new D;let E=0;const b=x===!0?e:t,S=x===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*S,0),h.push(0,S,0),p.push(.5,.5),g++;const H=g;for(let k=0;k<=i;k++){const O=k/i*l+o,B=Math.cos(O),Y=Math.sin(O);L.x=b*Y,L.y=m*S,L.z=b*B,d.push(L.x,L.y,L.z),h.push(0,S,0),A.x=B*.5+.5,A.y=Y*.5*S+.5,p.push(A.x,A.y),g++}for(let k=0;k<i;k++){const P=y+k,O=H+k;x===!0?f.push(O,O+1,P):f.push(O+1,O,P),E+=3}c.addGroup(u,E,x===!0?1:2),u+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends Wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),f(),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(s.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new D,x=new D,y=new D;for(let A=0;A<t.length;A+=3)p(t[A+0],M),p(t[A+1],x),p(t[A+2],y),l(M,x,y,_)}function l(_,M,x,y){const A=y+1,L=[];for(let E=0;E<=A;E++){L[E]=[];const b=_.clone().lerp(x,E/A),S=M.clone().lerp(x,E/A),H=A-E;for(let k=0;k<=H;k++)k===0&&E===A?L[E][k]=b:L[E][k]=b.clone().lerp(S,k/H)}for(let E=0;E<A;E++)for(let b=0;b<2*(A-E)-1;b++){const S=Math.floor(b/2);b%2===0?(h(L[E][S+1]),h(L[E+1][S]),h(L[E][S])):(h(L[E][S+1]),h(L[E+1][S+1]),h(L[E+1][S]))}}function c(_){const M=new D;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(_),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function f(){const _=new D;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];const x=m(_)/2/Math.PI+.5,y=u(_)/Math.PI+.5;a.push(x,1-y)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const M=a[_+0],x=a[_+2],y=a[_+4],A=Math.max(M,x,y),L=Math.min(M,x,y);A>.9&&L<.1&&(M<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),y<.2&&(a[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,M){const x=_*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const _=new D,M=new D,x=new D,y=new D,A=new Ve,L=new Ve,E=new Ve;for(let b=0,S=0;b<s.length;b+=9,S+=6){_.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),A.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),E.set(a[S+4],a[S+5]),y.copy(_).add(M).add(x).divideScalar(3);const H=m(y);v(A,S+0,_,H),v(L,S+2,M,H),v(E,S+4,x,H)}}function v(_,M,x,y){y<0&&_.x===1&&(a[M]=_.x-1),x.x===0&&x.z===0&&(a[M]=y/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.vertices,e.indices,e.radius,e.details)}}class Vi extends Pa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vi(e.radius,e.detail)}}class La extends Wt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new D,h=new D,p=[],g=[],v=[],m=[];for(let u=0;u<=n;u++){const _=[],M=u/n;let x=0;u===0&&a===0?x=.5/t:u===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const A=y/t;d.x=-e*Math.cos(i+A*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(i+A*s)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(A+x,1-M),_.push(c++)}f.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){const M=f[u][_+1],x=f[u][_],y=f[u+1][_],A=f[u+1][_+1];(u!==0||a>0)&&p.push(M,x,A),(u!==n-1||l<Math.PI)&&p.push(x,y,A)}this.setIndex(p),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fi extends Wt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],f=new D,d=new D,h=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,u=(i+1)*(p-1)+g,_=(i+1)*p+g;a.push(v,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lg extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const il={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class cg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null}}}const Ec=new cg;class Tc{constructor(e){this.manager=e!==void 0?e:Ec,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ug extends Tc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=il.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Cr("img");function l(){f(),il.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){f(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class rl extends Tc{constructor(e){super(e)}load(e,t,n,i){const s=new Qt,a=new ug(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ac{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sl(){return(typeof performance=="undefined"?Date:performance).now()}class Cc{constructor(e,t,n=0,i=1/0){this.ray=new Ea(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xa(e,this,n,t),n.sort(al),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)xa(e[i],this,n,t);return n.sort(al),n}}function al(r,e){return r.distance-e.distance}function xa(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)xa(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const fg=()=>{const r={show:Ye(!1),cameraPosition:Ye({x:0,y:0,z:1}),cameraLookAt:Ye({x:0,y:0,z:10}),objectPosition:Ye({x:0,y:0,z:10}),objectQuaternion:Ye(new Dt(0,0,0,1)),objectEuler:Ye(new xi(0,0,0,"ZXY"))};return{...r,...{setupModel(t){r.cameraPosition.set(yi(t.cameraPosition)),r.cameraLookAt.set(yi(t.cameraLookAt)),r.objectPosition.set(yi(t.objectPosition)),r.objectQuaternion.set(t.objectQuaternion),r.objectEuler.set(new xi(Yt.degToRad(t.objectRotation.x),Yt.degToRad(t.objectRotation.z),Yt.degToRad(t.objectRotation.y),"YZX")),r.show.set(!0)},updateCamera(t){r.cameraPosition.set(yi(t.cameraPosition)),r.cameraLookAt.set(yi(t.cameraLookAt)),r.objectPosition.set(yi(t.objectPosition)),r.objectQuaternion.set(new Dt(t.objectQuaternion.x,t.objectQuaternion.y,t.objectQuaternion.z,t.objectQuaternion.w))},updateCameraPosition(t){r.cameraPosition.set(t.cameraPosition)},updateCameraLookAt(t){r.cameraLookAt.set(t.cameraLookAt)},sendMovementUpdate(t){Zi("moveObject",t)},sendRotationUpdate(t){Zi("rotateObject",{x:Yt.radToDeg(t.x).toFixed(2),y:-Yt.radToDeg(t.z).toFixed(2),z:Yt.radToDeg(t.y).toFixed(2)})}}}};var On=fg();function ol(r){let e,t;const n=r[2].default,i=En(n,r,r[1],null);return{c(){e=ue("main"),i&&i.c(),ie(e,"class","svelte-1fnr7mh")},m(s,a){tt(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&2)&&An(i,n,s,s[1],t?Tn(n,s[1],a,null):Cn(s[1]),null)},i(s){t||(Me(i,s),t=!0)},o(s){Te(i,s),t=!1},d(s){s&&$e(e),i&&i.d(s)}}}function hg(r){let e,t,n=r[0]&&ol(r);return{c(){n&&n.c(),e=Pr()},m(i,s){n&&n.m(i,s),tt(i,e,s),t=!0},p(i,[s]){i[0]?n?(n.p(i,s),s&1&&Me(n,1)):(n=ol(i),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(gi(),Te(n,1,1,()=>{n=null}),_i())},i(i){t||(Me(n),t=!0)},o(i){Te(n),t=!1},d(i){n&&n.d(i),i&&$e(e)}}}function dg(r,e,t){let n;ze(r,xn,o=>t(3,n=o));let{$$slots:i={},$$scope:s}=e,a;return xr.subscribe(o=>{t(0,a=o)}),qn("setVisible",o=>{xr.set(o),o&&ht(xn,n=!1,n)}),Lr(()=>{const o=l=>{a&&["Escape"].includes(l.code)&&(Zi("hideUI"),xr.set(!1),On.show.set(!1))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}),r.$$set=o=>{"$$scope"in o&&t(1,s=o.$$scope)},[a,s,i]}class pg extends xt{constructor(e){super(),vt(this,e,dg,hg,pt,{})}}const mg=()=>!window.invokeNative,Ma=(r,e=0)=>{if(mg())for(const t of r)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:t.action,data:t.data}}))},e)};function ll(r,e,t){const n=r.slice();return n[6]=e[t],n}function cl(r,e,t){const n=r.slice();return n[9]=e[t],n}function ul(r){let e,t=r[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=hl(ll(r,t,i));return{c(){e=ue("div");for(let i=0;i<n.length;i+=1)n[i].c();ie(e,"class","w-fit h-fit bg-gray-600 p-2 ")},m(i,s){tt(i,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(i,s){if(s&2){t=i[1];let a;for(a=0;a<t.length;a+=1){const o=ll(i,t,a);n[a]?n[a].p(o,s):(n[a]=hl(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&$e(e),cs(n,i)}}}function fl(r){let e,t=r[9].name+"",n,i,s;function a(){return r[3](r[9])}return{c(){e=ue("button"),n=Lt(t),ie(e,"class","bg-blue-500 text-white p-2")},m(o,l){tt(o,e,l),Q(e,n),i||(s=Je(e,"click",a),i=!0)},p(o,l){r=o},d(o){o&&$e(e),i=!1,s()}}}function hl(r){let e,t,n=r[6].component+"",i,s,a,o=r[6].actions,l=[];for(let c=0;c<o.length;c+=1)l[c]=fl(cl(r,o,c));return{c(){e=ue("div"),t=ue("p"),i=Lt(n),s=Ae();for(let c=0;c<l.length;c+=1)l[c].c();a=Ae(),ie(t,"class","text-white"),ie(e,"class","flex flex-row gap-2 items-center m-1")},m(c,f){tt(c,e,f),Q(e,t),Q(t,i),Q(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);Q(e,a)},p(c,f){if(f&2){o=c[6].actions;let d;for(d=0;d<o.length;d+=1){const h=cl(c,o,d);l[d]?l[d].p(h,f):(l[d]=fl(h),l[d].c(),l[d].m(e,a))}for(;d<l.length;d+=1)l[d].d(1);l.length=o.length}},d(c){c&&$e(e),cs(l,c)}}}function gg(r){let e,t,n,i,s,a=r[0]&&ul(r);return{c(){e=ue("div"),t=ue("button"),t.textContent="Show",n=Ae(),a&&a.c(),ie(t,"class","bg-red-500 text-white p-2"),ie(e,"class","absolute top-0 left-1/2 z-[1000]")},m(o,l){tt(o,e,l),Q(e,t),Q(e,n),a&&a.m(e,null),i||(s=Je(t,"click",r[2]),i=!0)},p(o,[l]){o[0]?a?a.p(o,l):(a=ul(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:Ft,o:Ft,d(o){o&&$e(e),a&&a.d(),i=!1,s()}}}function _g(r,e,t){let n=!1,i=[{label:"Item 1",object:"v_res_d_coffeetable",price:100},{label:"Item 2",object:"v_res_d_coffeetable",price:100},{label:"Item 3",object:"v_res_d_coffeetable",price:100},{label:"Item 4",object:"v_res_d_coffeetable",price:100},{label:"Item 5",object:"v_res_d_coffeetable",price:100}];return[n,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"Furniture",actions:[{name:"Set Furniture Data",action:"setFurnituresData",data:[{category:"Category 1",items:i},{category:"Category 2",items:i},{category:"Category 3",items:i},{category:"Category 4",items:i},{category:"Category 5",items:i}]}]}],()=>{t(0,n=!n)},c=>{if(c.custom==!0){c.customFunction();return}Ma([{action:c.action,data:c.data}])}]}class vg extends xt{constructor(e){super(),vt(this,e,_g,gg,pt,{})}}function xg(r,e,t){let n,i;ze(r,os,a=>t(0,n=a)),ze(r,xr,a=>t(1,i=a)),Ma([{action:"setVisible",data:!0}]),Ma([{action:"setBrowserMode",data:!0}]);function s(a){a.key==="="&&ht(xr,i=!0,i)}return qn("setBrowserMode",a=>{ds.set(a),console.log("browser mode enabled"),a?window.addEventListener("keydown",s):window.removeEventListener("keydown",s)}),qn("setupModel",a=>{On.show.set(!0),On.setupModel(a)}),qn("updateCamera",a=>{On.updateCamera(a)}),qn("updateCameraPosition",a=>{On.updateCameraPosition(a)}),qn("updateCameraLookAt",a=>{On.updateCameraLookAt(a)}),qn("setFurnituresData",a=>{os.set(a),Yn.set(n[0])}),[]}class Mg extends xt{constructor(e){super(),vt(this,e,xg,null,pt,{})}}function dl(r,e,t){const n=r.slice();return n[14]=e[t],n[16]=t,n}function pl(r){let e,t,n;return{c(){e=ue("input"),e.autofocus=!0,ie(e,"class","min-w-[10vw] h-[5vh] px-[1vw] text-[1vw] bg-[color:var(--color-tertiary)]"),ie(e,"type","text"),ie(e,"placeholder","Search")},m(i,s){tt(i,e,s),Xn(e,r[1]),e.focus(),t||(n=Je(e,"input",r[9]),t=!0)},p(i,s){s&2&&e.value!==i[1]&&Xn(e,i[1])},d(i){i&&$e(e),t=!1,n()}}}function ml(r){let e,t=r[14].category+"",n,i,s;function a(){return r[11](r[16])}return{c(){e=ue("button"),n=Lt(t),ie(e,"class","min-w-[8vw] h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-19i3qs8"),as(e,"selected",r[0]===r[16])},m(o,l){tt(o,e,l),Q(e,n),i||(s=Je(e,"click",a),i=!0)},p(o,l){r=o,l&4&&t!==(t=r[14].category+"")&&rn(n,t),l&1&&as(e,"selected",r[0]===r[16])},d(o){o&&$e(e),i=!1,s()}}}function Sg(r){let e,t,n,i,s,a,o,l,c,f,d,h,p,g,v,m,u,_,M,x,y=r[4]&&pl(r),A=r[2],L=[];for(let E=0;E<A.length;E+=1)L[E]=ml(dl(r,A,E));return{c(){e=ue("div"),t=ue("button"),n=ue("button"),n.innerHTML='<i class="fas fa-magnifying-glass text-[1vw]"></i>',i=Ae(),y&&y.c(),a=Ae(),o=ue("div"),l=ue("button"),l.textContent="Show All",c=Ae();for(let E=0;E<L.length;E+=1)L[E].c();f=Ae(),d=ue("div"),h=ue("button"),h.innerHTML=`<p class="w-fit whitespace-nowrap">Owned Furniture</p> 
			<span class="py-[0.1vw] px-[0.5vw] bg-[color:var(--color-tertiary)]">0</span>`,p=Ae(),g=ue("button"),g.innerHTML=`<i class="fas fa-shopping-cart"></i> 
			<span class="py-[0.1vw] px-[0.5vw] bg-[color:var(--color-tertiary)]">0</span>`,v=Ae(),m=ue("button"),u=ue("i"),ie(n,"class","h-[5vh] w-[5vh] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"),ie(t,"class",s="h-[5vh] "+(r[4]?"w-fit":"w-[5vh] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"),ie(l,"class","min-w-[8vw] h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-19i3qs8"),as(l,"selected",r[0]===-1),ie(o,"class","w-full h-[6vh] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories svelte-19i3qs8"),ie(h,"class","w-fit px-[1vw] items-center justify-center break h-[5vh] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"),ie(g,"class","h-[5vh] w-fit px-[1vw] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),ie(u,"class",_="fas fa-chevron-"+(r[6]?"up":"down")),ie(m,"class","h-[5vh] w-fit px-[1vw] text-[1vw] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),ie(d,"class","overflow-y-visible flex flex-row gap-2 ml-auto"),ie(e,"class","w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap")},m(E,b){tt(E,e,b),Q(e,t),Q(t,n),Q(t,i),y&&y.m(t,null),Q(e,a),Q(e,o),Q(o,l),Q(o,c);for(let S=0;S<L.length;S+=1)L[S]&&L[S].m(o,null);r[12](o),Q(e,f),Q(e,d),Q(d,h),Q(d,p),Q(d,g),Q(d,v),Q(d,m),Q(m,u),M||(x=[Je(n,"click",r[8]),Je(l,"click",r[10]),Je(o,"wheel",r[7]),Je(m,"click",r[13])],M=!0)},p(E,[b]){if(E[4]?y?y.p(E,b):(y=pl(E),y.c(),y.m(t,null)):y&&(y.d(1),y=null),b&16&&s!==(s="h-[5vh] "+(E[4]?"w-fit":"w-[5vh] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center")&&ie(t,"class",s),b&1&&as(l,"selected",E[0]===-1),b&101){A=E[2];let S;for(S=0;S<A.length;S+=1){const H=dl(E,A,S);L[S]?L[S].p(H,b):(L[S]=ml(H),L[S].c(),L[S].m(o,null))}for(;S<L.length;S+=1)L[S].d(1);L.length=A.length}b&64&&_!==(_="fas fa-chevron-"+(E[6]?"up":"down"))&&ie(u,"class",_)},i:Ft,o:Ft,d(E){E&&$e(e),y&&y.d(),cs(L,E),r[12](null),M=!1,kn(x)}}}function bg(r,e,t){let n,i,s;ze(r,os,u=>t(2,n=u)),ze(r,Yn,u=>t(5,i=u)),ze(r,xn,u=>t(6,s=u));let a=0,o;function l(u){u=window.event||u;var _=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail));t(3,o.scrollLeft-=_*50,o),u.preventDefault()}let c=!1,f="";const d=()=>{t(4,c=!c),s&&ht(xn,s=!1,s)};function h(){f=this.value,t(1,f)}const p=()=>{t(0,a=-1);const u=n.flatMap(_=>_.items);ht(Yn,i={category:"Show All",items:u},i),s&&ht(xn,s=!1,s)},g=u=>{t(0,a=u),ht(Yn,i=n[u],i),s&&ht(xn,s=!1,s)};function v(u){Fn[u?"unshift":"push"](()=>{o=u,t(3,o)})}const m=()=>{ht(xn,s=!s,s)};return r.$$.update=()=>{if(r.$$.dirty&7)if(f.length>0){let u=null;a==-1?u=n.flatMap(M=>M.items):u=n[a].items;const _=u.filter(M=>M.label.toLowerCase().includes(f.toLowerCase()));ht(Yn,i={category:"Search Results",items:_},i)}else if(a===-1){const u=n.flatMap(_=>_.items);ht(Yn,i={category:"Show All",items:u},i)}else ht(Yn,i=n[a],i)},[a,f,n,o,c,i,s,l,d,h,p,g,v,m]}class yg extends xt{constructor(e){super(),vt(this,e,bg,Sg,pt,{})}}function gl(r,e,t){const n=r.slice();return n[6]=e[t],n[8]=t,n}function _l(r){let e,t,n,i=r[6].label+"",s,a,o,l,c=r[6].price+"",f,d,h,p,g,v;function m(){return r[4](r[6])}return{c(){e=ue("div"),t=ue("div"),n=ue("p"),s=Lt(i),a=Ae(),o=ue("p"),l=Lt("$"),f=Lt(c),d=Ae(),h=ue("button"),h.innerHTML='<i class="fas fa-eye text-[color:var(--color-text)] text-[1.5vw]"></i>',p=Ae(),ie(n,"class","text-[color:var(--color-text)] text-[1vw] font-bold"),ie(o,"class","text-[color:var(--color-text)] text-[1vw]"),ie(t,"class","w-full h-full flex flex-col justify-center items-start p-[1vw]"),ie(h,"class","bg-[color:var(--color-tertiary)] aspect-square h-full grid place-items-center justify-center items-center"),ie(e,"class","h-full w-[15vw] bg-[color:var(--color-secondary)] flex flex-row")},m(u,_){tt(u,e,_),Q(e,t),Q(t,n),Q(n,s),Q(t,a),Q(t,o),Q(o,l),Q(o,f),Q(e,d),Q(e,h),Q(e,p),g||(v=Je(h,"click",m),g=!0)},p(u,_){r=u,_&2&&i!==(i=r[6].label+"")&&rn(s,i),_&2&&c!==(c=r[6].price+"")&&rn(f,c)},d(u){u&&$e(e),g=!1,v()}}}function wg(r){let e,t,n,i,s=r[1].items,a=[];for(let o=0;o<s.length;o+=1)a[o]=_l(gl(r,s,o));return{c(){e=ue("div"),t=ue("div");for(let o=0;o<a.length;o+=1)a[o].c();ie(t,"class","grid grid-rows-2 grid-flow-col-dense gap-[1vw] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style svelte-1y3ejah"),ie(e,"class","w-full h-[24vh] bg-[color:var(--color-primary)] p-[1vw]")},m(o,l){tt(o,e,l),Q(e,t);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);r[5](t),n||(i=Je(t,"wheel",r[3]),n=!0)},p(o,[l]){if(l&6){s=o[1].items;let c;for(c=0;c<s.length;c+=1){const f=gl(o,s,c);a[c]?a[c].p(f,l):(a[c]=_l(f),a[c].c(),a[c].m(t,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:Ft,o:Ft,d(o){o&&$e(e),cs(a,o),r[5](null),n=!1,i()}}}function Eg(r,e,t){let n,i;ze(r,Yn,c=>t(1,n=c)),ze(r,xn,c=>t(2,i=c));let s;function a(c){c=window.event||c;var f=Math.max(-1,Math.min(1,c.wheelDelta||-c.detail));t(0,s.scrollLeft-=f*50,s),c.preventDefault()}const o=c=>{Zi("previewFurniture",c),ht(xn,i=!0,i)};function l(c){Fn[c?"unshift":"push"](()=>{s=c,t(0,s)})}return[s,n,i,a,o,l]}class Tg extends xt{constructor(e){super(),vt(this,e,Eg,wg,pt,{})}}function Ag(r){let e,t,n,i,s,a;return t=new yg({}),i=new Tg({}),{c(){e=ue("div"),lt(t.$$.fragment),n=Ae(),lt(i.$$.fragment),ie(e,"class",s="w-[97vw] h-fit flex flex-col absolute left-1/2 -translate-x-1/2 "+(r[0]?"-bottom-[24vh]":"bottom-[3vh]")+" z-[1]")},m(o,l){tt(o,e,l),rt(t,e,null),Q(e,n),rt(i,e,null),a=!0},p(o,[l]){(!a||l&1&&s!==(s="w-[97vw] h-fit flex flex-col absolute left-1/2 -translate-x-1/2 "+(o[0]?"-bottom-[24vh]":"bottom-[3vh]")+" z-[1]"))&&ie(e,"class",s)},i(o){a||(Me(t.$$.fragment,o),Me(i.$$.fragment,o),a=!0)},o(o){Te(t.$$.fragment,o),Te(i.$$.fragment,o),a=!1},d(o){o&&$e(e),st(t),st(i)}}}function Cg(r,e,t){let n;return ze(r,xn,i=>t(0,n=i)),[n]}class Pg extends xt{constructor(e){super(),vt(this,e,Cg,Ag,pt,{})}}const Lg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rg=new vc(-1,1,1,-1,0,1),Ra=new Wt;Ra.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3));Ra.setAttribute("uv",new ct([0,2,0,0,2,0],2));class Dg{constructor(e){this._mesh=new he(Ra,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ig extends xs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pc.clone(e.uniforms),this.material=new zn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Dg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vl extends xs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Ug extends xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ng{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ve);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ig(Lg),this.clock=new Ac}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}vl!==void 0&&(a instanceof vl?n=!0:a instanceof Ug&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Pc extends xs{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Og=(r,e,t)=>{r.renderer=new yc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new Ng(r.renderer),r.composer.addPass(new Pc(r.scene,ba(r.camera)))},xl=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=Kn:r.renderer.outputEncoding=it,t?r.renderer.toneMapping=bn:r.renderer.toneMapping=ec)},Ml=(r,e,t)=>{var n,i,s,a,o,l,c,f;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(a=(s=r.renderer).setPixelRatio)==null||a.call(s,t),(l=(o=r.composer).setSize)==null||l.call(o,e.width,e.height),(f=(c=r.composer).setPixelRatio)==null||f.call(c,t))},Sl=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Sn=r=>r.userData,Fg=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Lc=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),zg=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,kg=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);at(i);let s;const a=r.pointer.subscribe(c=>s=c);at(a);let o;const l=c=>{var h,p;c.preventDefault();const f=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Fg(r,c);const d=Bg(e,s,n);if(f==="pointerdown"&&(o=d?{object:d.object,instanceId:d.instanceId}:null),f==="click"){if(!Gg(d,o)){o=null;return}o=null}!d||(p=(h=Sn(d.object)).eventDispatcher)==null||p.call(h,f,{...d,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Bg(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Lc(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function Gg(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const Hg=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);at(n);let i;const s=r.camera.subscribe(c=>i=c);at(s);let a;const o=r.pointer.subscribe(c=>a=c);return at(o),{raycast:()=>{var d,h,p,g,v,m,u,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Lc(e,a,i,Array.from(e.raycastableObjects)):[],f=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;f?e.lastIntersection?e.lastIntersection&&zg(e.lastIntersection,f)&&((m=(v=Sn(e.lastIntersection.object)).eventDispatcher)==null||m.call(v,"pointerleave",e.lastIntersection),(_=(u=Sn(f.object)).eventDispatcher)==null||_.call(u,"pointerenter",f)):(g=(p=Sn(f.object)).eventDispatcher)==null||g.call(p,"pointerenter",f):e.lastIntersection&&((h=(d=Sn(e.lastIntersection.object)).eventDispatcher)==null||h.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=f}}},Ms=typeof window!="undefined",Vg=r=>{if(!Ms)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),at(()=>{!e||cancelAnimationFrame(e)})},Wg=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var a,o;return((a=i.order)!=null?a:0)>((o=s.order)!=null?o:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},jg=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},Xg=(r,e,t,n)=>{let i=ba(r.camera);const s=r.camera.subscribe(o=>i=o);at(s);const{raycast:a}=Hg(r,e);Vg(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!r.composer||!r.renderer||(Wg(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),jg(t),t.frameInvalidated=!1,t.advance=!1))})},qg=()=>{const r=new tn(75,0,.1,1e3);return Sn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},Yg=r=>{const e=r.size.subscribe(t=>{Sn(ba(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});at(e)},Zg=(r,e,t,n,i,s,a)=>{const o={audioListeners:new Map,addAudioListener:(u,_)=>{if(_=_!=null?_:"default",o.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}o.audioListeners.set(_,u)},removeAudioListener:u=>{if(u=u!=null?u:"default",!o.audioListeners.has(u)){console.warn(`No AudioListener with the id "${u}" found, aborting.`);return}o.audioListeners.delete(u)},getAudioListener:u=>{if(u=u!=null?u:"default",!o.audioListeners.has(u)){console.warn(`No AudioListener with the id "${u}" found, aborting.`);return}return o.audioListeners.get(u)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Qc([n,i],([u,_])=>u||_),pointer:Ye(new Ve),pointerOverCanvas:Ye(!1),clock:new Ac,camera:Ye(qg()),scene:new og,renderer:void 0,composer:void 0,invalidate:u=>{l.frameInvalidated=!0,l.debugFrameloop&&u&&(l.invalidations[u]=l.invalidations[u]?l.invalidations[u]+1:1)},advance:()=>{l.advance=!0}},f={flat:Ye(e),linear:Ye(r),dpr:Ye(t),setCamera:u=>{c.camera.set(u),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof Pc&&(_.camera=u)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Cc,lastIntersection:null,addRaycastableObject:u=>{f.raycastableObjects.add(u)},removeRaycastableObject:u=>{f.raycastableObjects.delete(u)},addInteractiveObject:u=>{f.interactiveObjects.add(u)},removeInteractiveObject:u=>{f.interactiveObjects.delete(u)},addPass:u=>{!c.composer||(c.composer.addPass(u),c.invalidate("Canvas: adding pass"))},removePass:u=>{!c.composer||(c.composer.removePass(u),c.invalidate("Canvas: removing pass"))}},d={dispose:async(u=!1)=>{await yr(),!(!d.shouldDispose&&!u)&&(d.disposableObjects.forEach((_,M)=>{var x;(_===0||u)&&((x=M==null?void 0:M.dispose)==null||x.call(M),d.disposableObjects.delete(M))}),d.shouldDispose=!1)},collectDisposableObjects:(u,_)=>{const M=_!=null?_:[];return u&&((u==null?void 0:u.dispose)&&typeof u.dispose=="function"&&u.type!=="Scene"&&M.push(u),Object.entries(u).forEach(([x,y])=>{if(x==="parent"||x==="children"||typeof y!="object")return;const A=y;A!=null&&A.dispose&&d.collectDisposableObjects(A,M)})),M},addDisposableObjects:u=>{u.forEach(_=>{const M=d.disposableObjects.get(_);M?d.disposableObjects.set(_,M+1):d.disposableObjects.set(_,1)})},removeDisposableObjects:u=>{u.length!==0&&(u.forEach(_=>{const M=d.disposableObjects.get(_);M&&M>0&&d.disposableObjects.set(_,M-1)}),d.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return fn("threlte",c),fn("threlte-root",f),fn("threlte-render-context",l),fn("threlte-audio-context",o),fn("threlte-disposal-context",d),{ctx:c,rootCtx:f,renderCtx:l,audioCtx:o,disposalCtx:d,getCtx:()=>c,getRootCtx:()=>f,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>d}};function Ss(r,e){const t=Ye(r);let n=r;const i=t.subscribe(o=>n=o);return at(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Pn=()=>wn("threlte");function Qg(r){let e;const t=r[8].default,n=En(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&An(n,t,i,i[7],e?Tn(t,i[7],s,null):Cn(i[7]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}const Kg=()=>({onChildMount:wn("threlte-hierarchical-object-on-mount"),onChildDestroy:wn("threlte-hierarchical-object-on-destroy")}),Rc=()=>wn("threlte-hierarchical-parent-context");function Jg(r,e,t){var u;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{o.push(_),t(1,o),l==null||l(_)};let{onChildDestroy:f=void 0}=e;const d=_=>{const M=o.findIndex(x=>x.uuid===_.uuid);M!==-1&&o.splice(M,1),t(1,o),f==null||f(_)},{invalidate:h}=Pn(),p=Rc();ze(r,p,_=>t(6,n=_));let{parent:g=n}=e;const v=Kg();a&&((u=v.onChildMount)==null||u.call(v,a),h("HierarchicalObject: object added"));const m=Ss(a,(_,M)=>{var x,y;M&&((x=v.onChildDestroy)==null||x.call(v,M),h("HierarchicalObject: object added")),_&&((y=v.onChildMount)==null||y.call(v,_),h("HierarchicalObject: object removed"))});return at(()=>{var _;a&&((_=v.onChildDestroy)==null||_.call(v,a),h("HierarchicalObject: object removed"))}),fn("threlte-hierarchical-object-on-mount",c),fn("threlte-hierarchical-object-on-destroy",d),fn("threlte-hierarchical-parent-context",m),r.$$set=_=>{"object"in _&&t(3,a=_.object),"children"in _&&t(1,o=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,f=_.onChildDestroy),"parent"in _&&t(2,g=_.parent),"$$scope"in _&&t(7,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&m.set(a)},[p,o,g,a,l,f,n,s,i]}class $g extends xt{constructor(e){super(),vt(this,e,Jg,Qg,pt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function e_(r){let e;const t=r[1].default,n=En(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&An(n,t,i,i[4],e?Tn(t,i[4],s,null):Cn(i[4]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function t_(r){let e,t;return e=new $g({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[e_]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function n_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class Da extends xt{constructor(e){super(),vt(this,e,n_,t_,pt,{object:0})}}const i_=()=>{const r=Ye({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(a=>e=a);at(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&r.set({width:o,height:l})},s=a=>{n=a,i(),window.addEventListener("resize",i)};return Ms?(at(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function bl(r){let e,t;return e=new Da({props:{object:r[0].scene,$$slots:{default:[r_]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function r_(r){let e;const t=r[29].default,n=En(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&An(n,t,i,i[33],e?Tn(t,i[33],s,null):Cn(i[33]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function s_(r){let e,t,n,i,s=r[2]&&bl(r);return{c(){e=ue("canvas"),s&&s.c(),ie(e,"class","svelte-o3oskp")},m(a,o){tt(a,e,o),s&&s.m(e,null),r[30](e),t=!0,n||(i=[Wc(r[3].call(null,e)),Je(e,"click",r[9]),Je(e,"contextmenu",r[10]),Je(e,"pointerup",r[13]),Je(e,"pointerdown",r[11]),Je(e,"pointermove",r[12]),Je(e,"pointerenter",r[31]),Je(e,"pointerleave",r[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&Me(s,1)):(s=bl(a),s.c(),Me(s,1),s.m(e,null)):s&&(gi(),Te(s,1,1,()=>{s=null}),_i())},i(a){t||(Me(s),t=!0)},o(a){Te(s),t=!1},d(a){a&&$e(e),s&&s.d(),r[30](null),n=!1,kn(i)}}}const yl=new Set;function a_(r,e,t){let n,i,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Ms?window.devicePixelRatio:1}=e,{flat:f=!1}=e,{linear:d=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:v=Ql}=e,{size:m=void 0}=e,{rendererParameters:u=void 0}=e,_,M=!1;const x=Ye(m),{parentSize:y,parentSizeAction:A}=i_(),L=Zg(d,f,c,x,y,p,h),{getCtx:E,renderCtx:b,disposalCtx:S}=L,{ctx:H,rootCtx:k,audioCtx:P}=L;Yg(H),yl.add(H.invalidate),at(()=>{yl.delete(H.invalidate)});const{size:O,scene:B}=H;ze(r,O,U=>t(26,i=U));const{flat:Y,linear:R,dpr:z}=k;ze(r,Y,U=>t(27,s=U)),ze(r,R,U=>t(28,a=U)),ze(r,z,U=>t(25,n=U)),fn("threlte-parent",Ye(B)),Lr(()=>{!_||(Og(H,_,u),xl(H,a,s),Ml(H,i,n),Sl(H,g,v),t(2,M=!0))}),Xg(H,k,b,S);const{onClick:K,onContextMenu:J,onPointerDown:xe,onPointerMove:ne,onPointerUp:V}=kg(H,k,b);at(()=>{S.dispose(!0)});function Z(U){Fn[U?"unshift":"push"](()=>{_=U,t(1,_)})}const se=()=>E().pointerOverCanvas.set(!0),ce=()=>E().pointerOverCanvas.set(!1);return r.$$set=U=>{"dpr"in U&&t(14,c=U.dpr),"flat"in U&&t(15,f=U.flat),"linear"in U&&t(16,d=U.linear),"frameloop"in U&&t(17,h=U.frameloop),"debugFrameloop"in U&&t(18,p=U.debugFrameloop),"shadows"in U&&t(19,g=U.shadows),"shadowMapType"in U&&t(20,v=U.shadowMapType),"size"in U&&t(21,m=U.size),"rendererParameters"in U&&t(22,u=U.rendererParameters),"$$scope"in U&&t(33,l=U.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&x.set(m),r.$$.dirty[0]&65536&&ht(R,a=d,a),r.$$.dirty[0]&32768&&ht(Y,s=f,s),r.$$.dirty[0]&16384&&ht(z,n=c,n),r.$$.dirty[0]&402653184&&xl(E(),a,s),r.$$.dirty[0]&100663296&&Ml(E(),i,n),r.$$.dirty[0]&1572864&&Sl(E(),g,v)},[H,_,M,A,E,O,Y,R,z,K,J,xe,ne,V,c,f,d,h,p,g,v,m,u,k,P,n,i,s,a,o,Z,se,ce,l]}class o_ extends xt{constructor(e){super(),vt(this,e,a_,s_,pt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Dc=()=>wn("threlte-root"),l_=()=>wn("threlte-disposal-context");function c_(r){let e;const t=r[9].default,n=En(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&An(n,t,i,i[8],e?Tn(t,i[8],s,null):Cn(i[8]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}const wl="threlte-disposable-object-context";function u_(r,e,t){var m;let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=l_();let{object:f=void 0}=e,d=f,{dispose:h=void 0}=e;const p=wn(wl);ze(r,p,u=>t(7,i=u));const g=Ye((m=h!=null?h:i)!=null?m:!0);ze(r,g,u=>t(6,n=u)),fn(wl,g);let v=n?o(f):[];return l(v),at(()=>{c(v)}),r.$$set=u=>{"object"in u&&t(2,f=u.object),"dispose"in u&&t(3,h=u.dispose),"$$scope"in u&&t(8,a=u.$$scope)},r.$$.update=()=>{var u;r.$$.dirty&136&&g.set((u=h!=null?h:i)!=null?u:!0),r.$$.dirty&116&&f!==d&&(c(v),t(5,v=n?o(f):[]),l(v),t(4,d=f))},[p,g,f,h,d,v,n,i,a,s]}class Ia extends xt{constructor(e){super(),vt(this,e,u_,c_,pt,{object:2,dispose:3})}}function f_(r,e,t){let n,i,{object:s}=e;const a=Ss(s);ze(r,a,c=>t(4,i=c));const o=wn("threlte-layers");ze(r,o,c=>t(3,n=c));const{invalidate:l}=Pn();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&a.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const f=c;n.includes(f)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[a,o,s,n,i]}class Ic extends xt{constructor(e){super(),vt(this,e,f_,null,pt,{object:2})}}const Uc=(r,e)=>{var o;if(!Ms)return{start:()=>{},stop:()=>{},started:Xl(!1)};const t=wn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Ye(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((o=e==null?void 0:e.autostart)==null||o)&&a(),at(()=>{s()}),{start:a,stop:s,started:{subscribe:i.subscribe}}},Nc=()=>{const r=Ye(!1);return(async()=>{await yr(),r.set(!0)})(),r};function h_(r,e,t){let n,i,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const f=new D,d=us(),{invalidate:h}=Pn(),p=Nc();ze(r,p,M=>t(8,i=M));const g=async()=>{i||await yr(),d("transform")},v=async()=>{h("TransformableObject: transformed"),await g()};Sn(s).onTransform=v;const{start:m,stop:u}=Uc(async()=>{c&&!l&&c instanceof bt&&(c.getWorldPosition(f),s.lookAt(f),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=Ss(s);return ze(r,_,M=>t(7,n=M)),r.$$set=M=>{"object"in M&&t(2,s=M.object),"position"in M&&t(3,a=M.position),"scale"in M&&t(4,o=M.scale),"rotation"in M&&t(5,l=M.rotation),"lookAt"in M&&t(6,c=M.lookAt)},r.$$.update=()=>{var M,x,y,A,L,E,b,S,H,k,P,O,B;r.$$.dirty&4&&_.set(s),r.$$.dirty&232&&(a&&(n.position.set((M=a.x)!=null?M:0,(x=a.y)!=null?x:0,(y=a.z)!=null?y:0),v()),c&&!l&&(c instanceof bt?m():(u(),n.lookAt((A=c.x)!=null?A:0,(L=c.y)!=null?L:0,(E=c.z)!=null?E:0),v())),c||u()),r.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set((b=o.x)!=null?b:1,(S=o.y)!=null?S:1,(H=o.z)!=null?H:1),v()),r.$$.dirty&160&&l&&(n.rotation.set((k=l.x)!=null?k:0,(P=l.y)!=null?P:0,(O=l.z)!=null?O:0,(B=l.order)!=null?B:"XYZ"),v())},[p,_,s,a,o,l,c,n]}class d_ extends xt{constructor(e){super(),vt(this,e,h_,null,pt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function p_(r,e,t){let n,i,s,{object:a}=e,{viewportAware:o=!1}=e;const l=us(),{camera:c,invalidate:f}=Pn();ze(r,c,A=>t(8,s=A));const d=new Aa,h=new dt,p=A=>A.type==="Mesh",g=new D,v=()=>s?(h.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),d.setFromProjectionMatrix(h),p(a)?d.intersectsObject(a):(a.getWorldPosition(g),d.containsPoint(g))):!0,m=Nc();ze(r,m,A=>t(7,i=A));let{inViewport:u=v()}=e;const _=async A=>{A?(i||await yr(),l("viewportenter",a)):(i||await yr(),l("viewportleave",a))},{start:M,stop:x,started:y}=Uc(()=>{const A=v();u===void 0?(t(3,u=v()),_(u)):A!==u&&(_(A),t(3,u=A))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return ze(r,y,A=>t(6,n=A)),f("ViewportAwareObject"),r.$$set=A=>{"object"in A&&t(4,a=A.object),"viewportAware"in A&&t(5,o=A.viewportAware),"inViewport"in A&&t(3,u=A.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(o&&!n?M():!o&&n&&x())},[c,m,y,u,a,o,n]}class m_ extends xt{constructor(e){super(),vt(this,e,p_,null,pt,{object:4,viewportAware:5,inViewport:3})}}function g_(r){let e;const t=r[14].default,n=En(t,r,r[18],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&An(n,t,i,i[18],e?Tn(t,i[18],s,null):Cn(i[18]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function __(r){let e,t;return e=new Da({props:{object:r[1],$$slots:{default:[g_]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function v_(r){let e,t,n,i,s,a,o,l,c;e=new Ic({props:{object:r[1]}}),n=new d_({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new Ia({props:{object:r[1],dispose:r[7],$$slots:{default:[__]},$$scope:{ctx:r}}});function f(h){r[15](h)}let d={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(d.inViewport=r[0]),o=new m_({props:d}),Fn.push(()=>hs(o,"inViewport",f)),o.$on("viewportenter",r[16]),o.$on("viewportleave",r[17]),{c(){lt(e.$$.fragment),t=Ae(),lt(n.$$.fragment),i=Ae(),lt(s.$$.fragment),a=Ae(),lt(o.$$.fragment)},m(h,p){rt(e,h,p),tt(h,t,p),rt(n,h,p),tt(h,i,p),rt(s,h,p),tt(h,a,p),rt(o,h,p),c=!0},p(h,[p]){const g={};p&2&&(g.object=h[1]),e.$set(g);const v={};p&2&&(v.object=h[1]),p&4&&(v.position=h[2]),p&16&&(v.rotation=h[4]),p&8&&(v.scale=h[3]),p&32&&(v.lookAt=h[5]),n.$set(v);const m={};p&2&&(m.object=h[1]),p&128&&(m.dispose=h[7]),p&262146&&(m.$$scope={dirty:p,ctx:h}),s.$set(m);const u={};p&2&&(u.object=h[1]),p&64&&(u.viewportAware=h[6]),!l&&p&1&&(l=!0,u.inViewport=h[0],fs(()=>l=!1)),o.$set(u)},i(h){c||(Me(e.$$.fragment,h),Me(n.$$.fragment,h),Me(s.$$.fragment,h),Me(o.$$.fragment,h),c=!0)},o(h){Te(e.$$.fragment,h),Te(n.$$.fragment,h),Te(s.$$.fragment,h),Te(o.$$.fragment,h),c=!1},d(h){st(e,h),h&&$e(t),st(n,h),h&&$e(i),st(s,h),h&&$e(a),st(o,h)}}}function x_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:v=void 0}=e,{visible:m=void 0}=e,{dispose:u=void 0}=e,{userData:_=void 0}=e;const{invalidate:M}=Pn(),x=()=>s;function y(E){d=E,t(0,d)}function A(E){Yi.call(this,r,E)}function L(E){Yi.call(this,r,E)}return r.$$set=E=>{"object"in E&&t(1,s=E.object),"position"in E&&t(2,a=E.position),"scale"in E&&t(3,o=E.scale),"rotation"in E&&t(4,l=E.rotation),"lookAt"in E&&t(5,c=E.lookAt),"viewportAware"in E&&t(6,f=E.viewportAware),"inViewport"in E&&t(0,d=E.inViewport),"castShadow"in E&&t(8,h=E.castShadow),"receiveShadow"in E&&t(9,p=E.receiveShadow),"frustumCulled"in E&&t(10,g=E.frustumCulled),"renderOrder"in E&&t(11,v=E.renderOrder),"visible"in E&&t(12,m=E.visible),"dispose"in E&&t(7,u=E.dispose),"userData"in E&&t(13,_=E.userData),"$$scope"in E&&t(18,i=E.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(m!==void 0&&(x().visible=m),h!==void 0&&(x().castShadow=h),p!==void 0&&(x().receiveShadow=p),g!==void 0&&(x().frustumCulled=g),v!==void 0&&(x().renderOrder=v),_!==void 0&&(x().userData={...x().userData,..._}),M("Object3DInstance: props changed"))},[d,s,a,o,l,c,f,u,h,p,g,v,m,_,n,y,A,L,i]}class M_ extends xt{constructor(e){super(),vt(this,e,x_,v_,pt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function S_(r){let e;const t=r[17].default,n=En(t,r,r[21],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&An(n,t,i,i[21],e?Tn(t,i[21],s,null):Cn(i[21]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function b_(r){let e,t,n;function i(a){r[18](a)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[S_]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new M_({props:s}),Fn.push(()=>hs(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){lt(e.$$.fragment)},m(a,o){rt(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],fs(()=>t=!1)),e.$set(l)},i(a){n||(Me(e.$$.fragment,a),n=!0)},o(a){Te(e.$$.fragment,a),n=!1},d(a){st(e,a)}}}function y_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:u=void 0}=e,{userData:_=void 0}=e,{dispose:M=void 0}=e,{useCamera:x=!1}=e;const y=Ss(a);ze(r,y,S=>t(16,n=S));const{setCamera:A}=Dc();function L(S){h=S,t(0,h)}function E(S){Yi.call(this,r,S)}function b(S){Yi.call(this,r,S)}return r.$$set=S=>{"camera"in S&&t(1,a=S.camera),"position"in S&&t(2,o=S.position),"scale"in S&&t(3,l=S.scale),"rotation"in S&&t(4,c=S.rotation),"lookAt"in S&&t(5,f=S.lookAt),"viewportAware"in S&&t(6,d=S.viewportAware),"inViewport"in S&&t(0,h=S.inViewport),"castShadow"in S&&t(7,p=S.castShadow),"receiveShadow"in S&&t(8,g=S.receiveShadow),"frustumCulled"in S&&t(9,v=S.frustumCulled),"renderOrder"in S&&t(10,m=S.renderOrder),"visible"in S&&t(11,u=S.visible),"userData"in S&&t(12,_=S.userData),"dispose"in S&&t(13,M=S.dispose),"useCamera"in S&&t(15,x=S.useCamera),"$$scope"in S&&t(21,s=S.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&y.set(a),r.$$.dirty&98304&&x&&A(n)},[h,a,o,l,c,f,d,p,g,v,m,u,_,M,y,x,n,i,L,E,b,s]}class w_ extends xt{constructor(e){super(),vt(this,e,y_,b_,pt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function E_(r){let e;const t=r[20].default,n=En(t,r,r[24],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&An(n,t,i,i[24],e?Tn(t,i[24],s,null):Cn(i[24]),null)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function T_(r){let e,t,n;function i(a){r[21](a)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[E_]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new w_({props:s}),Fn.push(()=>hs(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){lt(e.$$.fragment)},m(a,o){rt(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&8192&&(l.viewportAware=a[13]),o&32&&(l.lookAt=a[5]),o&16384&&(l.useCamera=a[14]),o&16777216&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],fs(()=>t=!1)),e.$set(l)},i(a){n||(Me(e.$$.fragment,a),n=!0)},o(a){Te(e.$$.fragment,a),n=!1},d(a){st(e,a)}}}function A_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{userData:v=void 0}=e,{dispose:m=void 0}=e,{viewportAware:u=!1}=e,{inViewport:_=!1}=e,{useCamera:M=!0}=e,{near:x=void 0}=e,{far:y=void 0}=e,{fov:A=void 0}=e;const{size:L,invalidate:E}=Pn();ze(r,L,P=>t(19,n=P));const b=new tn(A,n.width/n.height,x,y);function S(P){_=P,t(1,_)}function H(P){Yi.call(this,r,P)}function k(P){Yi.call(this,r,P)}return r.$$set=P=>{"position"in P&&t(2,a=P.position),"scale"in P&&t(3,o=P.scale),"rotation"in P&&t(4,l=P.rotation),"lookAt"in P&&t(5,c=P.lookAt),"castShadow"in P&&t(6,f=P.castShadow),"receiveShadow"in P&&t(7,d=P.receiveShadow),"frustumCulled"in P&&t(8,h=P.frustumCulled),"renderOrder"in P&&t(9,p=P.renderOrder),"visible"in P&&t(10,g=P.visible),"userData"in P&&t(11,v=P.userData),"dispose"in P&&t(12,m=P.dispose),"viewportAware"in P&&t(13,u=P.viewportAware),"inViewport"in P&&t(1,_=P.inViewport),"useCamera"in P&&t(14,M=P.useCamera),"near"in P&&t(16,x=P.near),"far"in P&&t(17,y=P.far),"fov"in P&&t(18,A=P.fov),"$$scope"in P&&t(24,s=P.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,b.aspect=n.width/n.height,b),b.updateProjectionMatrix(),E("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(x!==void 0&&t(0,b.near=x,b),y!==void 0&&t(0,b.far=y,b),A!==void 0&&t(0,b.fov=A,b),b.updateProjectionMatrix(),E("PerspectiveCamera: props changed"))},[b,_,a,o,l,c,f,d,h,p,g,v,m,u,M,L,x,y,A,n,i,S,H,k,s]}class C_ extends xt{constructor(e){super(),vt(this,e,A_,T_,pt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const El=[],P_=(r,e)=>{const t=El.find(i=>i instanceof r);if(t)return t;const n=e();return El.push(n),n},ai=new Cc,qt=new D,jn=new D,ot=new Dt,Tl={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},ia={type:"change"},Al={type:"mouseDown"},Cl={type:"mouseUp",mode:null},Pl={type:"objectChange"};class L_ extends bt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new O_;this._gizmo=n,this.add(n);const i=new F_;this._plane=i,this.add(i);const s=this;function a(_,M){let x=M;Object.defineProperty(s,_,{get:function(){return x!==void 0?x:M},set:function(y){x!==y&&(x=y,i[_]=y,n[_]=y,s.dispatchEvent({type:_+"-changed",value:y}),s.dispatchEvent(ia))}}),s[_]=M,i[_]=M,n[_]=M}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new D,l=new D,c=new Dt,f=new Dt,d=new D,h=new Dt,p=new D,g=new D,v=new D,m=0,u=new D;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",f),a("cameraPosition",d),a("cameraQuaternion",h),a("pointStart",p),a("pointEnd",g),a("rotationAxis",v),a("rotationAngle",m),a("eye",u),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Dt,this._parentQuaternionInv=new Dt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Dt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Dt,this._scaleStart=new D,this._getPointer=R_.bind(this),this._onPointerDown=I_.bind(this),this._onPointerHover=D_.bind(this),this._onPointerMove=U_.bind(this),this._onPointerUp=N_.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;ai.setFromCamera(e,this.camera);const t=ra(this._gizmo.picker[this.mode],ai);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){ai.setFromCamera(e,this.camera);const t=ra(this._plane,ai,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Al.mode=this.mode,this.dispatchEvent(Al)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;ai.setFromCamera(e,this.camera);const a=ra(this._plane,ai,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(ot.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(qt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(qt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),jn.set(o,o,o)}else qt.copy(this.pointStart),jn.copy(this.pointEnd),qt.applyQuaternion(this._worldQuaternionInv),jn.applyQuaternion(this._worldQuaternionInv),jn.divide(qt),t.search("X")===-1&&(jn.x=1),t.search("Y")===-1&&(jn.y=1),t.search("Z")===-1&&(jn.z=1);i.scale.copy(this._scaleStart).multiply(jn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(qt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(qt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Tl[t]),qt.copy(Tl[t]),s==="local"&&qt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(qt.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ia),this.dispatchEvent(Pl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Cl.mode=this.mode,this.dispatchEvent(Cl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ia),this.dispatchEvent(Pl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ai}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function R_(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function D_(r){if(!!this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function I_(r){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function U_(r){!this.enabled||this.pointerMove(this._getPointer(r))}function N_(r){!this.enabled||(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function ra(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const es=new xi,et=new D(0,1,0),Ll=new D(0,0,0),Rl=new dt,ts=new Dt,ss=new Dt,gn=new D,Dl=new dt,gr=new D(1,0,0),ci=new D(0,1,0),_r=new D(0,0,1),ns=new D,fr=new D,hr=new D;class O_ extends bt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new gs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new wc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const f=e.clone();f.color.setHex(255),f.opacity=.5;const d=e.clone();d.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const v=new Ot(0,.04,.1,12);v.translate(0,.05,0);const m=new _t(.08,.08,.08);m.translate(0,.04,0);const u=new Wt;u.setAttribute("position",new ct([0,0,0,1,0,0],3));const _=new Ot(.0075,.0075,.5,3);_.translate(0,.25,0);function M(B,Y){const R=new fi(B,.0075,3,64,Y*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function x(){const B=new Wt;return B.setAttribute("position",new ct([0,0,0,1,1,1],3)),B}const y={X:[[new he(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new he(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new he(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new he(v,a),[0,.5,0]],[new he(v,a),[0,-.5,0],[Math.PI,0,0]],[new he(_,a)]],Z:[[new he(v,o),[0,0,.5],[Math.PI/2,0,0]],[new he(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new he(_,o),null,[Math.PI/2,0,0]]],XYZ:[[new he(new Vi(.1,0),d.clone()),[0,0,0]]],XY:[[new he(new _t(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new he(new _t(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new he(new _t(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new he(new Ot(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new he(new Ot(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new he(new Ot(.2,0,.6,4),n),[0,.3,0]],[new he(new Ot(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new he(new Ot(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new he(new Ot(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new he(new Vi(.2,0),n)]],XY:[[new he(new _t(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new he(new _t(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new he(new _t(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new he(new Vi(.01,2),i),null,null,null,"helper"]],END:[[new he(new Vi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Wn(x(),i),null,null,null,"helper"]],X:[[new Wn(u,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Wn(u,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Wn(u,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},E={XYZE:[[new he(M(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new he(M(.5,.5),s)]],Y:[[new he(M(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new he(M(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new he(M(.75,1),h),null,[0,Math.PI/2,0]]]},b={AXIS:[[new Wn(u,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new he(new La(.25,10,8),n)]],X:[[new he(new fi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new he(new fi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new he(new fi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new he(new fi(.75,.1,2,24),n)]]},H={X:[[new he(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new he(_,s),[0,0,0],[0,0,-Math.PI/2]],[new he(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new he(m,a),[0,.5,0]],[new he(_,a)],[new he(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new he(m,o),[0,0,.5],[Math.PI/2,0,0]],[new he(_,o),[0,0,0],[Math.PI/2,0,0]],[new he(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new he(new _t(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new he(new _t(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new he(new _t(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new he(new _t(.1,.1,.1),d.clone())]]},k={X:[[new he(new Ot(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new he(new Ot(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new he(new Ot(.2,0,.6,4),n),[0,.3,0]],[new he(new Ot(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new he(new Ot(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new he(new Ot(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new he(new _t(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new he(new _t(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new he(new _t(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new he(new _t(.2,.2,.2),n),[0,0,0]]]},P={X:[[new Wn(u,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Wn(u,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Wn(u,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(B){const Y=new bt;for(const R in B)for(let z=B[R].length;z--;){const K=B[R][z][0].clone(),J=B[R][z][1],xe=B[R][z][2],ne=B[R][z][3],V=B[R][z][4];K.name=R,K.tag=V,J&&K.position.set(J[0],J[1],J[2]),xe&&K.rotation.set(xe[0],xe[1],xe[2]),ne&&K.scale.set(ne[0],ne[1],ne[2]),K.updateMatrix();const Z=K.geometry.clone();Z.applyMatrix4(K.matrix),K.geometry=Z,K.renderOrder=1/0,K.position.set(0,0,0),K.rotation.set(0,0,0),K.scale.set(1,1,1),Y.add(K)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(y)),this.add(this.gizmo.rotate=O(E)),this.add(this.gizmo.scale=O(H)),this.add(this.picker.translate=O(A)),this.add(this.picker.rotate=O(S)),this.add(this.picker.scale=O(k)),this.add(this.helper.translate=O(L)),this.add(this.helper.rotate=O(b)),this.add(this.helper.scale=O(P)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ss;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const a=i[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(ot.setFromEuler(es.set(0,0,0)),a.quaternion.copy(n).multiply(ot),Math.abs(et.copy(gr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(ot.setFromEuler(es.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(ot),Math.abs(et.copy(ci).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(ot.setFromEuler(es.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(ot),Math.abs(et.copy(_r).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(ot.setFromEuler(es.set(0,Math.PI/2,0)),et.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Rl.lookAt(Ll,et,ci)),a.quaternion.multiply(ot),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),qt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),qt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(qt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(et.copy(gr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(et.copy(ci).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(et.copy(_r).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(et.copy(_r).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(et.copy(gr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(et.copy(ci).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(ts.copy(n),et.copy(this.eye).applyQuaternion(ot.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Rl.lookAt(this.eye,Ll,ci)),a.name==="X"&&(ot.setFromAxisAngle(gr,Math.atan2(-et.y,et.z)),ot.multiplyQuaternions(ts,ot),a.quaternion.copy(ot)),a.name==="Y"&&(ot.setFromAxisAngle(ci,Math.atan2(et.x,et.z)),ot.multiplyQuaternions(ts,ot),a.quaternion.copy(ot)),a.name==="Z"&&(ot.setFromAxisAngle(_r,Math.atan2(et.y,et.x)),ot.multiplyQuaternions(ts,ot),a.quaternion.copy(ot))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class F_ extends he{constructor(){super(new _s(1e5,1e5,2,2),new gs({visible:!1,wireframe:!0,side:Mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ns.copy(gr).applyQuaternion(t==="local"?this.worldQuaternion:ss),fr.copy(ci).applyQuaternion(t==="local"?this.worldQuaternion:ss),hr.copy(_r).applyQuaternion(t==="local"?this.worldQuaternion:ss),et.copy(fr),this.mode){case"translate":case"scale":switch(this.axis){case"X":et.copy(this.eye).cross(ns),gn.copy(ns).cross(et);break;case"Y":et.copy(this.eye).cross(fr),gn.copy(fr).cross(et);break;case"Z":et.copy(this.eye).cross(hr),gn.copy(hr).cross(et);break;case"XY":gn.copy(hr);break;case"YZ":gn.copy(ns);break;case"XZ":et.copy(hr),gn.copy(fr);break;case"XYZ":case"E":gn.set(0,0,0);break}break;case"rotate":default:gn.set(0,0,0)}gn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Dl.lookAt(qt.set(0,0,0),gn,et),this.quaternion.setFromRotationMatrix(Dl)),super.updateMatrixWorld(e)}}function z_(r){let e,t,n,i;return e=new Ia({props:{dispose:r[0],object:r[1]}}),n=new Ic({props:{object:r[1]}}),{c(){lt(e.$$.fragment),t=Ae(),lt(n.$$.fragment)},m(s,a){rt(e,s,a),tt(s,t,a),rt(n,s,a),i=!0},p(s,[a]){const o={};a&1&&(o.dispose=s[0]),a&2&&(o.object=s[1]),e.$set(o);const l={};a&2&&(l.object=s[1]),n.$set(l)},i(s){i||(Me(e.$$.fragment,s),Me(n.$$.fragment,s),i=!0)},o(s){Te(e.$$.fragment,s),Te(n.$$.fragment,s),i=!1},d(s){st(e,s),s&&$e(t),st(n,s)}}}function k_(r,e,t){let n,i,{autoPauseOrbitControls:s=!0}=e,{mode:a=void 0}=e,{axis:o=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:f=void 0}=e,{scaleSnap:d=void 0}=e,{rotationSnap:h=void 0}=e,{showX:p=void 0}=e,{showY:g=void 0}=e,{showZ:v=void 0}=e,{size:m=void 0}=e,{space:u=void 0}=e,{dispose:_=void 0}=e;const{camera:M,renderer:x,invalidate:y,scene:A}=Pn();ze(r,M,R=>t(20,i=R));const L=Rc();if(ze(r,L,R=>t(19,n=R)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const E=us(),b=()=>{if(!!i)return Sn(i).orbitControls};let S;const H=()=>{if(S!==void 0){const R=b();R&&(R.enabled=S),S=void 0}};at(H);const k={change:R=>{var z,K;n&&((K=(z=Sn(n)).onTransform)==null||K.call(z)),y("TransformControls: change event"),E("change",R)},"camera-changed":R=>E("camera-changed",R),"object-changed":R=>E("object-changed",R),"enabled-changed":R=>E("enabled-changed",R),"axis-changed":R=>{t(4,o=R.value),E("axis-changed",R)},"mode-changed":R=>E("mode-changed",R),"translationSnap-changed":R=>E("translationSnap-changed",R),"rotationSnap-changed":R=>E("rotationSnap-changed",R),"scaleSnap-changed":R=>E("scaleSnap-changed",R),"space-changed":R=>E("space-changed",R),"size-changed":R=>E("size-changed",R),"dragging-changed":R=>{t(5,l=R.value);e:if(s){const z=b();if(!z)break e;const K=!R.value;if(z.enabled===K)break e;R.value&&(S=z.enabled),z.enabled=K}E("dragging-changed",R)},"showX-changed":R=>E("showX-changed",R),"showY-changed":R=>E("showY-changed",R),"showZ-changed":R=>E("showZ-changed",R),"worldPosition-changed":R=>E("worldPosition-changed",R),"worldPositionStart-changed":R=>E("worldPositionStart-changed",R),"worldQuaternion-changed":R=>E("worldQuaternion-changed",R),"worldQuaternionStart-changed":R=>E("worldQuaternionStart-changed",R),"cameraPosition-changed":R=>E("cameraPosition-changed",R),"cameraQuaternion-changed":R=>E("cameraQuaternion-changed",R),"pointStart-changed":R=>E("pointStart-changed",R),"pointEnd-changed":R=>E("pointEnd-changed",R),"rotationAxis-changed":R=>E("rotationAxis-changed",R),"rotationAngle-changed":R=>E("rotationAngle-changed",R),"eye-changed":R=>E("eye-changed",R),mouseDown:()=>E("mouseDown"),mouseUp:()=>E("mouseUp"),objectChange:()=>E("objectChange")};if(!x)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const P=new L_(i,x.domElement),O=()=>P.reset();P.attach(n);const B=()=>{Object.entries(k).forEach(([R,z])=>{P.addEventListener(R,z)})},Y=()=>{Object.entries(k).forEach(([R,z])=>{P.removeEventListener(R,z)})};return B(),A.add(P),at(()=>{P.detach(),A.remove(P),Y()}),r.$$set=R=>{"autoPauseOrbitControls"in R&&t(6,s=R.autoPauseOrbitControls),"mode"in R&&t(7,a=R.mode),"axis"in R&&t(4,o=R.axis),"dragging"in R&&t(5,l=R.dragging),"enabled"in R&&t(8,c=R.enabled),"translationSnap"in R&&t(9,f=R.translationSnap),"scaleSnap"in R&&t(10,d=R.scaleSnap),"rotationSnap"in R&&t(11,h=R.rotationSnap),"showX"in R&&t(12,p=R.showX),"showY"in R&&t(13,g=R.showY),"showZ"in R&&t(14,v=R.showZ),"size"in R&&t(15,m=R.size),"space"in R&&t(16,u=R.space),"dispose"in R&&t(0,_=R.dispose)},r.$$.update=()=>{r.$$.dirty&64&&(s||H()),r.$$.dirty&256&&c!==void 0&&t(1,P.enabled=c,P),r.$$.dirty&4096&&p!==void 0&&t(1,P.showX=p,P),r.$$.dirty&8192&&g!==void 0&&t(1,P.showY=g,P),r.$$.dirty&16384&&v!==void 0&&t(1,P.showZ=v,P),r.$$.dirty&130&&a!==void 0&&P.setMode(a),r.$$.dirty&514&&f!==void 0&&P.setTranslationSnap(f),r.$$.dirty&1026&&d!==void 0&&P.setScaleSnap(d),r.$$.dirty&2050&&h!==void 0&&P.setRotationSnap(h),r.$$.dirty&32770&&m!==void 0&&P.setSize(m),r.$$.dirty&65538&&u!==void 0&&P.setSpace(u)},[_,P,M,L,o,l,s,a,c,f,d,h,p,g,v,m,u,O]}class B_ extends xt{constructor(e){super(),vt(this,e,k_,z_,pt,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const Oc=new bt;Oc.scale.set(0,0,0);Oc.matrix;new dt().fromArray(new Array(16).fill(0));new Ze(16777215);const Fc=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},sa=Symbol("initialValueBeforeAttach"),G_=()=>{const{invalidate:r}=Pn();let e=!1,t=sa,n,i,s;const a=(l,c,f)=>{if(o(),!f){const d=l;((d==null?void 0:d.isMaterial)||!1)&&(f="material"),((d==null?void 0:d.isBufferGeometry)||(d==null?void 0:d.isGeometry)||!1)&&(f="geometry")}if(!!f){if(typeof f=="function")n=f(c,l);else{const{target:d,key:h}=Fc(c,f);t=d[h],d[h]=l,i=d,s=h}e=!0,r()}},o=()=>{!e||(n?(n(),n=void 0):i&&s&&t!==sa&&(i[s]=t,t=sa,i=void 0,s=void 0),e=!1,r())};return at(()=>{o()}),{update:a}},H_=r=>r&&r.isCamera,zc=r=>r&&r.isOrthographicCamera,kc=r=>r&&r.isPerspectiveCamera,V_=r=>kc(r)||zc(r),W_=()=>{const{invalidate:r,size:e}=Pn(),{setCamera:t}=Dc();let n,i;at(()=>{i==null||i()});const s=l=>{!n||(zc(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):kc(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!V_(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!H_(l)||!c||(t(l),r())}}},Il=r=>!!(r!=null&&r.addEventListener),j_=()=>{const r=us(),e=er(),t=h=>{h!=null&&h.type&&r(h.type,h)},n=(h,p)=>{Il(h)&&p.forEach(g=>{h.removeEventListener(g,t)})},i=(h,p)=>{Il(h)&&p.forEach(g=>{h.addEventListener(g,t)})};let s=[],a;const o=Ye([]),l=o.subscribe(h=>{n(a,s),i(a,h),s=h});at(l);const c=Ye(),f=c.subscribe(h=>{n(a,s),i(h,s),a=h});return at(f),at(()=>{n(a,s)}),Lr(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:h=>{c.set(h)}}},X_=["$$scope","$$slots","type","args","attach","instance"],q_=["fov","aspect","near","far","left","right","top","bottom","zoom"],Y_=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r=="undefined"||r===null,Z_=()=>{const{invalidate:r}=Pn(),e=new Map,t=(i,s,a,o)=>{var f,d;if(Y_(a)){const h=e.get(s);if(h&&h.instance===i&&h.value===a)return;e.set(s,{instance:i,value:a})}const{key:l,target:c}=Fc(i,s);if(!Array.isArray(a)&&typeof a=="number"&&typeof((f=c[l])==null?void 0:f.setScalar)=="function")c[l].setScalar(a);else if(typeof((d=c[l])==null?void 0:d.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;q_.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,a)=>{for(const o in s)X_.includes(o)||t(i,o,s[o],a),r()}}},Q_=r=>({ref:r&1}),Ul=r=>({ref:r[0]}),K_=r=>({ref:r&1}),Nl=r=>({ref:r[0]});function Ol(r){let e,t;return e=new Ia({props:{object:r[0],dispose:r[1]}}),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function J_(r){let e;const t=r[12].default,n=En(t,r,r[13],Ul);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&An(n,t,i,i[13],e?Tn(t,i[13],s,Q_):Cn(i[13]),Ul)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function $_(r){let e,t;return e=new Da({props:{object:r[0],$$slots:{default:[e0]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function e0(r){let e;const t=r[12].default,n=En(t,r,r[13],Nl);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&An(n,t,i,i[13],e?Tn(t,i[13],s,K_):Cn(i[13]),Nl)},i(i){e||(Me(n,i),e=!0)},o(i){Te(n,i),e=!1},d(i){n&&n.d(i)}}}function t0(r){let e=r[4](r[0]),t,n,i,s,a,o,l=e&&Ol(r);const c=[$_,J_],f=[];function d(h,p){return p&1&&(n=null),n==null&&(n=!!h[3](h[0])),n?0:1}return i=d(r,-1),s=f[i]=c[i](r),{c(){l&&l.c(),t=Ae(),s.c(),a=Pr()},m(h,p){l&&l.m(h,p),tt(h,t,p),f[i].m(h,p),tt(h,a,p),o=!0},p(h,[p]){p&1&&(e=h[4](h[0])),e?l?(l.p(h,p),p&1&&Me(l,1)):(l=Ol(h),l.c(),Me(l,1),l.m(t.parentNode,t)):l&&(gi(),Te(l,1,1,()=>{l=null}),_i());let g=i;i=d(h,p),i===g?f[i].p(h,p):(gi(),Te(f[g],1,1,()=>{f[g]=null}),_i(),s=f[i],s?s.p(h,p):(s=f[i]=c[i](h),s.c()),Me(s,1),s.m(a.parentNode,a))},i(h){o||(Me(l),Me(s),o=!0)},o(h){Te(l),Te(s),o=!1},d(h){l&&l.d(h),h&&$e(t),f[i].d(h),h&&$e(a)}}}function n0(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Fa(e,n),s,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:f=void 0}=e,{manual:d=void 0}=e,{makeDefault:h=void 0}=e,{dispose:p=void 0}=e;const g=wn("threlte-hierarchical-parent-context");ze(r,g,S=>t(11,s=S));const v=S=>typeof S=="function"&&/^\s*class\s+/.test(S.toString()),m=S=>Array.isArray(S);let{ref:u=v(l)&&m(c)?new l(...c):v(l)?new l:l}=e,_=!1;const M=Ye(u);fn("threlte-hierarchical-parent-context",M);const x=Z_(),y=W_(),A=G_(),L=j_(),E=S=>!!S.isObject3D,b=S=>S.dispose!==void 0;return r.$$set=S=>{e=aa(aa({},e),Vc(S)),t(21,i=Fa(e,n)),"type"in S&&t(5,l=S.type),"args"in S&&t(6,c=S.args),"attach"in S&&t(7,f=S.attach),"manual"in S&&t(8,d=S.manual),"makeDefault"in S&&t(9,h=S.makeDefault),"dispose"in S&&t(1,p=S.dispose),"ref"in S&&t(0,u=S.ref),"$$scope"in S&&t(13,o=S.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(_?t(0,u=v(l)&&m(c)?new l(...c):v(l)?new l:l):t(10,_=!0)),r.$$.dirty&1&&M.set(u),x.updateProps(u,i,{manualCamera:d}),r.$$.dirty&257&&y.update(u,d),r.$$.dirty&513&&y.makeDefaultCamera(u,h),r.$$.dirty&2177&&A.update(u,s,f),r.$$.dirty&1&&L.updateRef(u)},[u,p,g,E,b,l,c,f,d,h,_,s,a,o]}class i0 extends xt{constructor(e){super(),vt(this,e,n0,t0,pt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function r0(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Fl extends xt{constructor(e){super(),vt(this,e,r0,null,pt,{})}}new Proxy(Fl,{get(r,e){return r[e]||Fl}});P_(rl,()=>new rl(Ec));function zl(r){let e,t,n,i,s,a=r[4]=="translate"?"rotate":"translate",o,l,c,f,d,h,p,g,v,m,u,_,M,x,y,A=r[2].x.toFixed(2)+"",L,E,b,S,H,k,P=-r[2].z.toFixed(2)+"",O,B,Y,R,z,K,J=r[2].y.toFixed(2)+"",xe,ne,V,Z,se,ce,U,Pe,Se,re,we,Ue,me,Re,mt,gt,ut=Yt.radToDeg(r[3].x).toFixed(2)+"",ft,We,Xe,Tt,C,w,W=Yt.radToDeg(r[3].y).toFixed(2)+"",$,te,ae,Ee,pe,X,ge=Yt.radToDeg(r[3].z).toFixed(2)+"",ve,be,fe,_e,Ne,je,Ge,I,j,ee,le,de,Qe,qe,yt,jt,nt,Rt,zt,$n,pn,Mi,At,sr,T;return pn=new o_({props:{$$slots:{default:[a0]},$$scope:{ctx:r}}}),{c(){e=ue("div"),t=ue("div"),n=ue("div"),i=ue("button"),s=Lt("Change to "),o=Lt(a),l=Ae(),c=ue("div"),f=ue("button"),f.textContent="Reset Rotation",d=Ae(),h=ue("button"),h.textContent="Reset Position",p=Ae(),g=ue("div"),v=ue("p"),v.textContent="Translation Snap",m=Ae(),u=ue("div"),_=ue("div"),M=ue("p"),M.textContent="x",x=Ae(),y=ue("p"),L=Lt(A),E=Ae(),b=ue("div"),S=ue("p"),S.textContent="y",H=Ae(),k=ue("p"),O=Lt(P),B=Ae(),Y=ue("div"),R=ue("p"),R.textContent="z",z=Ae(),K=ue("p"),xe=Lt(J),ne=Ae(),V=ue("div"),Z=ue("div"),se=Lt(r[5]),ce=Ae(),U=ue("input"),Pe=Ae(),Se=ue("div"),re=ue("p"),re.textContent="Rotation Snap",we=Ae(),Ue=ue("div"),me=ue("div"),Re=ue("p"),Re.textContent="x",mt=Ae(),gt=ue("p"),ft=Lt(ut),We=Ae(),Xe=ue("div"),Tt=ue("p"),Tt.textContent="y",C=Ae(),w=ue("p"),$=Lt(W),te=Ae(),ae=ue("div"),Ee=ue("p"),Ee.textContent="z",pe=Ae(),X=ue("p"),ve=Lt(ge),be=Ae(),fe=ue("div"),_e=ue("div"),Ne=Lt(r[6]),je=Ae(),Ge=ue("input"),I=Ae(),j=ue("p"),j.textContent="Object Alpha",ee=Ae(),le=ue("div"),de=ue("input"),Qe=Ae(),qe=ue("button"),qe.textContent="Cancel Placement",yt=Ae(),jt=ue("button"),nt=ue("i"),$n=Ae(),lt(pn.$$.fragment),ie(i,"class","bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"),ie(f,"class","bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full whitespace-nowrap"),ie(h,"class","bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"),ie(c,"class","flex flex-row gap-[1vw]"),ie(v,"class","text-[0.8vw] h-[1.7vw]"),ie(_,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"),ie(b,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"),ie(Y,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"),ie(u,"class","flex flex-row gap-[0.5vw] text-center"),ie(g,"class","flex flex-col items-center text-[0.8vw]"),ie(Z,"class","w-[4vw] h-[1.7vw] text-[0.8vw] items-center flex justify-center bg-[color:var(--color-secondary)]"),ie(U,"id","slider"),ie(U,"type","range"),ie(U,"min","0.01"),ie(U,"max","1"),ie(U,"step","0.01"),ie(U,"class","w-full svelte-1fbm7ho"),ie(V,"class","flex flex-row gap-[1vw] items-center"),ie(re,"class","text-[0.8vw] h-[1.7vw]"),ie(me,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"),ie(Xe,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"),ie(ae,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[4.2vw] px-[0.1vw]"),ie(Ue,"class","flex flex-row gap-[0.5vw] text-center"),ie(Se,"class","flex flex-col items-center text-[0.8vw]"),ie(_e,"class","w-[4vw] h-[1.7vw] items-center flex justify-center bg-[color:var(--color-secondary)]"),ie(Ge,"id","slider"),ie(Ge,"type","range"),ie(Ge,"min","1"),ie(Ge,"max","90"),ie(Ge,"step","1"),ie(Ge,"class","w-full svelte-1fbm7ho"),ie(fe,"class","flex flex-row gap-[1vw] items-center"),ie(j,"class","text-[0.8vw]"),ie(de,"id","slider"),ie(de,"type","range"),ie(de,"min","1"),ie(de,"max","255"),ie(de,"step","10"),ie(de,"class","w-full svelte-1fbm7ho"),ie(le,"class","flex flex-row gap-[1vw] items-center"),ie(qe,"class","bg-[color:var(--color-secondary)] text-[0.8vw] text-white p-[0.5vw] w-full"),ie(n,"class","flex flex-col gap-[0.5vw] p-[1vw]"),ie(nt,"class",Rt="fas text-[1vw] fa-chevron-"+(r[7]?"left":"right")),ie(jt,"class","h-full absolute -right-[2vw] w-[2vw] grid place-items-center bg-[color:var(--color-secondary)]"),ie(t,"class",zt="w-[15vw] bg-[color:var(--color-primary)] top-1/2 -translate-y-1/2 absolute "+(r[7]?"left-[1.5vw]":"-left-[15vw]")+" flex flex-row gap-[1vw] items-center justify-between"),ie(e,"class",Mi="modeler z-[0] absolute h-screen w-screen "+(r[9]?"bg-gray-800":""))},m(N,G){tt(N,e,G),Q(e,t),Q(t,n),Q(n,i),Q(i,s),Q(i,o),Q(n,l),Q(n,c),Q(c,f),Q(c,d),Q(c,h),Q(n,p),Q(n,g),Q(g,v),Q(g,m),Q(g,u),Q(u,_),Q(_,M),Q(_,x),Q(_,y),Q(y,L),Q(u,E),Q(u,b),Q(b,S),Q(b,H),Q(b,k),Q(k,O),Q(u,B),Q(u,Y),Q(Y,R),Q(Y,z),Q(Y,K),Q(K,xe),Q(n,ne),Q(n,V),Q(V,Z),Q(Z,se),Q(V,ce),Q(V,U),Xn(U,r[5]),Q(n,Pe),Q(n,Se),Q(Se,re),Q(Se,we),Q(Se,Ue),Q(Ue,me),Q(me,Re),Q(me,mt),Q(me,gt),Q(gt,ft),Q(Ue,We),Q(Ue,Xe),Q(Xe,Tt),Q(Xe,C),Q(Xe,w),Q(w,$),Q(Ue,te),Q(Ue,ae),Q(ae,Ee),Q(ae,pe),Q(ae,X),Q(X,ve),Q(n,be),Q(n,fe),Q(fe,_e),Q(_e,Ne),Q(fe,je),Q(fe,Ge),Xn(Ge,r[6]),Q(n,I),Q(n,j),Q(n,ee),Q(n,le),Q(le,de),Xn(de,r[1]),Q(n,Qe),Q(n,qe),Q(t,yt),Q(t,jt),Q(jt,nt),Q(e,$n),rt(pn,e,null),At=!0,sr||(T=[Je(i,"click",r[18]),Je(f,"click",r[19]),Je(h,"click",r[20]),Je(U,"change",r[21]),Je(U,"input",r[21]),Je(Ge,"change",r[22]),Je(Ge,"input",r[22]),Je(de,"change",r[23]),Je(de,"input",r[23]),Je(qe,"click",r[24]),Je(jt,"click",r[25])],sr=!0)},p(N,G){(!At||G[0]&16)&&a!==(a=N[4]=="translate"?"rotate":"translate")&&rn(o,a),(!At||G[0]&4)&&A!==(A=N[2].x.toFixed(2)+"")&&rn(L,A),(!At||G[0]&4)&&P!==(P=-N[2].z.toFixed(2)+"")&&rn(O,P),(!At||G[0]&4)&&J!==(J=N[2].y.toFixed(2)+"")&&rn(xe,J),(!At||G[0]&32)&&rn(se,N[5]),G[0]&32&&Xn(U,N[5]),(!At||G[0]&8)&&ut!==(ut=Yt.radToDeg(N[3].x).toFixed(2)+"")&&rn(ft,ut),(!At||G[0]&8)&&W!==(W=Yt.radToDeg(N[3].y).toFixed(2)+"")&&rn($,W),(!At||G[0]&8)&&ge!==(ge=Yt.radToDeg(N[3].z).toFixed(2)+"")&&rn(ve,ge),(!At||G[0]&64)&&rn(Ne,N[6]),G[0]&64&&Xn(Ge,N[6]),G[0]&2&&Xn(de,N[1]),(!At||G[0]&128&&Rt!==(Rt="fas text-[1vw] fa-chevron-"+(N[7]?"left":"right")))&&ie(nt,"class",Rt),(!At||G[0]&128&&zt!==(zt="w-[15vw] bg-[color:var(--color-primary)] top-1/2 -translate-y-1/2 absolute "+(N[7]?"left-[1.5vw]":"-left-[15vw]")+" flex flex-row gap-[1vw] items-center justify-between"))&&ie(t,"class",zt);const F={};G[0]&3197|G[1]&1&&(F.$$scope={dirty:G,ctx:N}),pn.$set(F),(!At||G[0]&512&&Mi!==(Mi="modeler z-[0] absolute h-screen w-screen "+(N[9]?"bg-gray-800":"")))&&ie(e,"class",Mi)},i(N){At||(Me(pn.$$.fragment,N),At=!0)},o(N){Te(pn.$$.fragment,N),At=!1},d(N){N&&$e(e),st(pn),sr=!1,kn(T)}}}function s0(r){let e,t;return e=new B_({props:{mode:r[4],translationSnap:r[5],rotationSnap:Yt.degToRad(r[6]),size:.5,space:"local"}}),e.$on("objectChange",r[26]),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},p(n,i){const s={};i[0]&16&&(s.mode=n[4]),i[0]&32&&(s.translationSnap=n[5]),i[0]&64&&(s.rotationSnap=Yt.degToRad(n[6])),e.$set(s)},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function a0(r){let e,t,n,i,s;e=new C_({props:{position:r[11],lookAt:r[10]}});function a(l){r[27](l)}let o={type:he,"position.x":r[2].x,"position.y":r[2].y,"position.z":r[2].z,quaternion:5,geometry:new _t(0,0,0),material:new lg,"rotation.x":r[3].x,"rotation.y":r[3].y,"rotation.z":r[3].z,$$slots:{default:[s0]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.ref=r[0]),n=new i0({props:o}),Fn.push(()=>hs(n,"ref",a)),{c(){lt(e.$$.fragment),t=Ae(),lt(n.$$.fragment)},m(l,c){rt(e,l,c),tt(l,t,c),rt(n,l,c),s=!0},p(l,c){const f={};c[0]&2048&&(f.position=l[11]),c[0]&1024&&(f.lookAt=l[10]),e.$set(f);const d={};c[0]&4&&(d["position.x"]=l[2].x),c[0]&4&&(d["position.y"]=l[2].y),c[0]&4&&(d["position.z"]=l[2].z),c[0]&8&&(d["rotation.x"]=l[3].x),c[0]&8&&(d["rotation.y"]=l[3].y),c[0]&8&&(d["rotation.z"]=l[3].z),c[0]&112|c[1]&1&&(d.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,d.ref=l[0],fs(()=>i=!1)),n.$set(d)},i(l){s||(Me(e.$$.fragment,l),Me(n.$$.fragment,l),s=!0)},o(l){Te(e.$$.fragment,l),Te(n.$$.fragment,l),s=!1},d(l){st(e,l),l&&$e(t),st(n,l)}}}function o0(r){let e,t,n=r[8]&&zl(r);return{c(){n&&n.c(),e=Pr()},m(i,s){n&&n.m(i,s),tt(i,e,s),t=!0},p(i,s){i[8]?n?(n.p(i,s),s[0]&256&&Me(n,1)):(n=zl(i),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(gi(),Te(n,1,1,()=>{n=null}),_i())},i(i){t||(Me(n),t=!0)},o(i){Te(n),t=!1},d(i){n&&n.d(i),i&&$e(e)}}}function l0(r,e,t){let n,i,s,a,o,l;ze(r,ds,z=>t(9,a=z));const{show:c,cameraPosition:f,cameraLookAt:d,objectPosition:h,objectEuler:p}=On;ze(r,c,z=>t(8,s=z)),ze(r,f,z=>t(11,l=z)),ze(r,d,z=>t(10,o=z)),ze(r,h,z=>t(2,n=z)),ze(r,p,z=>t(3,i=z));let g,v="translate",m=.01,u=1,_=!1,M=200;qn("setObjectAlpha",z=>{t(1,M=z)});function x(z){z.button==2&&(v=="translate"?t(4,v="rotate"):t(4,v="translate"))}Lr(()=>{document.addEventListener("contextmenu",x)}),at(()=>{document.removeEventListener("contextmenu",x)});function y(z){return z.x!=n.x||z.y!=n.y||z.z!=n.z}function A(z){return z.x!=i.x||z.y!=i.y||z.z!=i.z}function L(){g&&(y(g.position)&&(ht(h,n.x=g.position.x,n),ht(h,n.y=g.position.y,n),ht(h,n.z=g.position.z,n),On.sendMovementUpdate(Kc(n))),A(g.rotation)&&(ht(p,i.x=g.rotation.x,i),ht(p,i.y=g.rotation.y,i),ht(p,i.z=g.rotation.z,i),On.sendRotationUpdate(i)))}const E=()=>{v=="translate"?t(4,v="rotate"):t(4,v="translate")},b=()=>{g.rotation.set(0,0,0,i.order),L()},S=()=>{g.position.set(o.x,o.y,o.z),L()};function H(){m=Ts(this.value),t(5,m)}function k(){u=Ts(this.value),t(6,u)}function P(){M=Ts(this.value),t(1,M)}const O=()=>{Zi("cancelPlacement")},B=()=>{t(7,_=!_)},Y=z=>{L()};function R(z){g=z,t(0,g)}return r.$$.update=()=>{r.$$.dirty[0]&2&&Zi("setObjectAlpha",{alpha:M}),r.$$.dirty[0]&13&&g&&(g.rotation.set(i.x,i.y,i.z,i.order),g.position.set(n.x,n.y,n.z))},[g,M,n,i,v,m,u,_,s,a,o,l,c,f,d,h,p,L,E,b,S,H,k,P,O,B,Y,R]}class c0 extends xt{constructor(e){super(),vt(this,e,l0,o0,pt,{},null,[-1,-1])}}function kl(r){let e,t,n,i;return e=new Pg({}),n=new c0({}),{c(){lt(e.$$.fragment),t=Ae(),lt(n.$$.fragment)},m(s,a){rt(e,s,a),tt(s,t,a),rt(n,s,a),i=!0},i(s){i||(Me(e.$$.fragment,s),Me(n.$$.fragment,s),i=!0)},o(s){Te(e.$$.fragment,s),Te(n.$$.fragment,s),i=!1},d(s){st(e,s),s&&$e(t),st(n,s)}}}function u0(r){let e,t,n=r[0]&&kl();return{c(){n&&n.c(),e=Pr()},m(i,s){n&&n.m(i,s),tt(i,e,s),t=!0},p(i,s){i[0]?n?s&1&&Me(n,1):(n=kl(),n.c(),Me(n,1),n.m(e.parentNode,e)):n&&(gi(),Te(n,1,1,()=>{n=null}),_i())},i(i){t||(Me(n),t=!0)},o(i){Te(n),t=!1},d(i){n&&n.d(i),i&&$e(e)}}}function Bl(r){let e,t;return e=new vg({}),{c(){lt(e.$$.fragment)},m(n,i){rt(e,n,i),t=!0},i(n){t||(Me(e.$$.fragment,n),t=!0)},o(n){Te(e.$$.fragment,n),t=!1},d(n){st(e,n)}}}function f0(r){let e,t,n,i,s,a;e=new pg({props:{$$slots:{default:[u0]},$$scope:{ctx:r}}}),n=new Mg({});let o=r[1]&&Bl();return{c(){lt(e.$$.fragment),t=Ae(),lt(n.$$.fragment),i=Ae(),o&&o.c(),s=Pr()},m(l,c){rt(e,l,c),tt(l,t,c),rt(n,l,c),tt(l,i,c),o&&o.m(l,c),tt(l,s,c),a=!0},p(l,[c]){const f={};c&17&&(f.$$scope={dirty:c,ctx:l}),e.$set(f),l[1]?o?c&2&&Me(o,1):(o=Bl(),o.c(),Me(o,1),o.m(s.parentNode,s)):o&&(gi(),Te(o,1,1,()=>{o=null}),_i())},i(l){a||(Me(e.$$.fragment,l),Me(n.$$.fragment,l),Me(o),a=!0)},o(l){Te(e.$$.fragment,l),Te(n.$$.fragment,l),Te(o),a=!1},d(l){st(e,l),l&&$e(t),st(n,l),l&&$e(i),o&&o.d(l),l&&$e(s)}}}function h0(r,e,t){let n,i,s;return ze(r,ua,a=>t(2,n=a)),ze(r,os,a=>t(0,i=a)),ze(r,ds,a=>t(1,s=a)),ht(ua,n="ps-housing",n),[i,s]}class d0 extends xt{constructor(e){super(),vt(this,e,h0,f0,pt,{})}}new d0({target:document.getElementById("app")});
