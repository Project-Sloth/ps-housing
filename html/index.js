var uu=Object.defineProperty,fu=Object.defineProperties;var hu=Object.getOwnPropertyDescriptors;var jo=Object.getOwnPropertySymbols;var du=Object.prototype.hasOwnProperty,pu=Object.prototype.propertyIsEnumerable;var Xo=(r,e,t)=>e in r?uu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,qn=(r,e)=>{for(var t in e||(e={}))du.call(e,t)&&Xo(r,t,e[t]);if(jo)for(var t of jo(e))pu.call(e,t)&&Xo(r,t,e[t]);return r},Is=(r,e)=>fu(r,hu(e));const mu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};mu();function St(){}function po(r,e){for(const t in e)r[t]=e[t];return r}function lc(r){return r()}function qo(){return Object.create(null)}function kt(r){r.forEach(lc)}function Po(r){return typeof r=="function"}function ft(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function gu(r){return Object.keys(r).length===0}function Lo(r,...e){if(r==null)return St;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ro(r){let e;return Lo(r,t=>e=t)(),e}function Ee(r,e,t){r.$$.on_destroy.push(Lo(e,t))}function xn(r,e,t,n){if(r){const i=cc(r,e,t,n);return r[0](i)}}function cc(r,e,t,n){return r[1]&&n?po(t.ctx.slice(),r[1](n(e))):t.ctx}function bn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function Mn(r,e,t,n,i,s){if(i){const o=cc(e,t,n,s);r.p(o,i)}}function wn(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function _u(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function Yo(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function Ie(r,e,t){return r.set(t),e}function uc(r){return r&&Po(r.destroy)?r.destroy:St}function D(r,e){r.appendChild(e)}function Oe(r,e,t){r.insertBefore(e,t||null)}function Ne(r){r.parentNode.removeChild(r)}function nr(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function q(r){return document.createElement(r)}function rt(r){return document.createTextNode(r)}function le(){return rt(" ")}function si(){return rt("")}function Le(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function V(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function cs(r){return r===""?null:+r}function vu(r){return Array.from(r.childNodes)}function At(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Tn(r,e){r.value=e==null?"":e}function Zo(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ms(r,e,t){r.classList[t?"add":"remove"](e)}function xu(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let Cr;function yr(r){Cr=r}function ir(){if(!Cr)throw new Error("Function called outside component initialization");return Cr}function rr(r){ir().$$.on_mount.push(r)}function ut(r){ir().$$.on_destroy.push(r)}function _s(){const r=ir();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=xu(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function pn(r,e){return ir().$$.context.set(r,e),e}function In(r){return ir().$$.context.get(r)}function Ki(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const _r=[],Vn=[],us=[],mo=[],fc=Promise.resolve();let go=!1;function hc(){go||(go=!0,fc.then(dc))}function Pr(){return hc(),fc}function _o(r){us.push(r)}function vs(r){mo.push(r)}const Us=new Set;let zr=0;function dc(){const r=Cr;do{for(;zr<_r.length;){const e=_r[zr];zr++,yr(e),bu(e.$$)}for(yr(null),_r.length=0,zr=0;Vn.length;)Vn.pop()();for(let e=0;e<us.length;e+=1){const t=us[e];Us.has(t)||(Us.add(t),t())}us.length=0}while(_r.length);for(;mo.length;)mo.pop()();go=!1,Us.clear(),yr(r)}function bu(r){if(r.fragment!==null){r.update(),kt(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(_o)}}const fs=new Set;let xi;function Wn(){xi={r:0,c:[],p:xi}}function jn(){xi.r||kt(xi.c),xi=xi.p}function _e(r,e){r&&r.i&&(fs.delete(r),r.i(e))}function we(r,e,t,n){if(r&&r.o){if(fs.has(r))return;fs.add(r),xi.c.push(()=>{fs.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}}function xs(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function nt(r){r&&r.c()}function $e(r,e,t,n){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=r.$$;i&&i.m(e,t),n||_o(()=>{const l=s.map(lc).filter(Po);o?o.push(...l):kt(l),r.$$.on_mount=[]}),a.forEach(_o)}function et(r,e){const t=r.$$;t.fragment!==null&&(kt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Mu(r,e){r.$$.dirty[0]===-1&&(_r.push(r),hc(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function mt(r,e,t,n,i,s,o,a=[-1]){const l=Cr;yr(r);const c=r.$$={fragment:null,ctx:null,props:s,update:St,not_equal:i,bound:qo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:qo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(f,h,...p)=>{const _=p.length?p[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=_)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](_),u&&Mu(r,f)),h}):[],c.update(),u=!0,kt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=vu(e.target);c.fragment&&c.fragment.l(f),f.forEach(Ne)}else c.fragment&&c.fragment.c();e.intro&&_e(r.$$.fragment),$e(r,e.target,e.anchor,e.customElement),dc()}yr(l)}class gt{$destroy(){et(this,1),this.$destroy=St}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!gu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function an(r,e){const t=n=>{const{action:i,data:s}=n.data;i===r&&e(s)};rr(()=>window.addEventListener("message",t)),ut(()=>window.removeEventListener("message",t))}const Ei=[];function pc(r,e){return{subscribe:Ye(r,e).subscribe}}function Ye(r,e=St){let t;const n=new Set;function i(a){if(ft(r,a)&&(r=a,t)){const l=!Ei.length;for(const c of n)c[1](),Ei.push(c,r);if(l){for(let c=0;c<Ei.length;c+=2)Ei[c][0](Ei[c+1]);Ei.length=0}}}function s(a){i(a(r))}function o(a,l=St){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||St),a(r),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function wu(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return pc(t,o=>{let a=!1;const l=[];let c=0,u=St;const f=()=>{if(c)return;u();const p=e(n?l[0]:l,o);s?o(p):u=Po(p)?p:St},h=i.map((p,_)=>Lo(p,v=>{l[_]=v,c&=~(1<<_),a&&f()},()=>{c|=1<<_}));return a=!0,f(),function(){kt(h),u()}})}const Wi=Ye(!1),bs=Ye(!1),vo=Ye(""),gs=Ye(null),ei=Ye(null),vn=Ye(null),Ft=Ye(!1),Sr=Ye(!1),Er=Ye(!1),qi=Ye([]),Cn=Ye([]);let mc=!1;bs.subscribe(r=>{mc=r});let gc="";vo.subscribe(r=>{gc=r});async function at(r,e={},t){if(mc==!0&&t)return Promise.resolve(t||{});const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},i=window.GetParentResourceName?window.GetParentResourceName():gc;return await(await fetch(`https://${i}/${r}`,n)).json()}function Hi(r){return{x:r.x,y:r.z,z:-r.y}}function hs(r){return{x:r.x,y:-r.z,z:r.y}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="151",yu=0,Qo=1,Su=2,_c=1,vc=2,vr=3,ni=0,Jt=1,Pn=2,ti=0,Yi=1,Ko=2,Jo=3,$o=4,Eu=5,Vi=100,Tu=101,Au=102,ea=103,ta=104,Cu=200,Pu=201,Lu=202,Ru=203,xc=204,bc=205,Du=206,Iu=207,Uu=208,Nu=209,Ou=210,zu=0,Fu=1,ku=2,xo=3,Bu=4,Gu=5,Hu=6,Vu=7,Mc=0,Wu=1,ju=2,Rn=0,Xu=1,qu=2,Yu=3,wc=4,Zu=5,yc=300,Ji=301,$i=302,bo=303,Mo=304,Ms=306,wo=1e3,mn=1001,yo=1002,Wt=1003,na=1004,Ns=1005,ln=1006,Qu=1007,Lr=1008,yi=1009,Ku=1010,Ju=1011,Sc=1012,$u=1013,bi=1014,Mi=1015,Rr=1016,ef=1017,tf=1018,Zi=1020,nf=1021,gn=1023,rf=1024,sf=1025,wi=1026,er=1027,of=1028,af=1029,lf=1030,cf=1031,uf=1033,Os=33776,zs=33777,Fs=33778,ks=33779,ia=35840,ra=35841,sa=35842,oa=35843,ff=36196,aa=37492,la=37496,ca=37808,ua=37809,fa=37810,ha=37811,da=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,ba=37819,Ma=37820,wa=37821,Bs=36492,hf=36283,ya=36284,Sa=36285,Ea=36286,ii=3e3,ot=3001,df=3200,pf=3201,Ec=0,mf=1,En="srgb",Dr="srgb-linear",Tc="display-p3",Gs=7680,gf=519,Ta=35044,Aa="300 es",So=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const Tr=Math.PI/180,Ir=180/Math.PI;function or(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Xt(r,e,t){return Math.max(e,Math.min(t,r))}function Io(r,e){return(r%e+e)%e}function _f(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function vf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ar(r,e,t){return(1-t)*r+t*e}function xf(r,e,t,n){return Ar(r,e,1-Math.exp(-t*n))}function bf(r,e=1){return e-Math.abs(Io(r,e*2)-e)}function Mf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function yf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Sf(r,e){return r+Math.random()*(e-r)}function Ef(r){return r*(.5-Math.random())}function Tf(r){r!==void 0&&(Ca=r);let e=Ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Af(r){return r*Tr}function Cf(r){return r*Ir}function Eo(r){return(r&r-1)===0&&r!==0}function Pf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ac(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Kt={DEG2RAD:Tr,RAD2DEG:Ir,generateUUID:or,clamp:Xt,euclideanModulo:Io,mapLinear:_f,inverseLerp:vf,lerp:Ar,damp:xf,pingpong:bf,smoothstep:Mf,smootherstep:wf,randInt:yf,randFloat:Sf,randFloatSpread:Ef,seededRandom:Tf,degToRad:Af,radToDeg:Cf,isPowerOfTwo:Eo,ceilPowerOfTwo:Pf,floorPowerOfTwo:Ac,setQuaternionFromProperEuler:Lf,normalize:Zt,denormalize:xr};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],v=i[0],m=i[3],d=i[6],g=i[1],x=i[4],b=i[7],y=i[2],S=i[5],C=i[8];return s[0]=o*v+a*g+l*y,s[3]=o*m+a*x+l*S,s[6]=o*d+a*b+l*C,s[1]=c*v+u*g+f*y,s[4]=c*m+u*x+f*S,s[7]=c*d+u*b+f*C,s[2]=h*v+p*g+_*y,s[5]=h*m+p*x+_*S,s[8]=h*d+p*b+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new We;function Cc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Rf=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Df=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function If(r){return r.convertSRGBToLinear().applyMatrix3(Df)}function Uf(r){return r.applyMatrix3(Rf).convertLinearToSRGB()}const Nf={[Dr]:r=>r,[En]:r=>r.convertSRGBToLinear(),[Tc]:If},Of={[Dr]:r=>r,[En]:r=>r.convertLinearToSRGB(),[Tc]:Uf},tn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Dr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Nf[e],i=Of[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ti;class Pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Ur("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Lc{constructor(e=null){this.isSource=!0,this.uuid=or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ws(i[o].image)):s.push(Ws(i[o]))}else s=Ws(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ws(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Pc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zf=0;class $t extends sr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=mn,i=mn,s=ln,o=Lr,a=gn,l=yi,c=$t.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=or(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wo:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wo:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=yc;$t.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(p+1)/2,y=(d+1)/2,S=(u+h)/4,C=(f+v)/4,T=(_+m)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=C/n):b>y?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=S/i,s=T/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=C/s,i=T/s),this.set(n,i,s,t),this}let g=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(f-v)/g,this.z=(h-u)/g,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ri extends sr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rc extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ff extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,g=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const y=Math.sqrt(x),S=Math.atan2(y,d*g);m=Math.sin(m*S)/y,a=Math.sin(a*S)/y}const b=a*g;if(l=l*m+h*b,c=c*m+p*b,u=u*m+_*b,f=f*m+v*b,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const js=new I,Pa=new jt;class Nr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Fn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else i.boundingBox===null&&i.computeBoundingBox(),Ai.copy(i.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Fr.subVectors(this.max,fr),Ci.subVectors(e.a,fr),Pi.subVectors(e.b,fr),Li.subVectors(e.c,fr),Yn.subVectors(Pi,Ci),Zn.subVectors(Li,Pi),ui.subVectors(Ci,Li);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-ui.z,ui.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,ui.z,0,-ui.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-ui.y,ui.x,0];return!Xs(t,Ci,Pi,Li,Fr)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,Ci,Pi,Li,Fr))?!1:(kr.crossVectors(Yn,Zn),t=[kr.x,kr.y,kr.z],Xs(t,Ci,Pi,Li,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,Ai=new Nr,Ci=new I,Pi=new I,Li=new I,Yn=new I,Zn=new I,ui=new I,fr=new I,Fr=new I,kr=new I,fi=new I;function Xs(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){fi.fromArray(r,s);const a=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kf=new Nr,hr=new I,qs=new I;class ws{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(qs)),this.expandByPoint(hr.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new I,Ys=new I,Br=new I,Qn=new I,Zs=new I,Gr=new I,Qs=new I;class Uo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ys.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Ys);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=Qn.dot(this.direction),l=-Qn.dot(Br),c=Qn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ys).addScaledVector(Br,h),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){Zs.subVectors(t,e),Gr.subVectors(n,e),Qs.crossVectors(Zs,Gr);let o=this.direction.dot(Qs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const l=a*this.direction.dot(Gr.crossVectors(Qn,Gr));if(l<0)return null;const c=a*this.direction.dot(Zs.cross(Qn));if(c<0||l+c>o)return null;const u=-a*Qn.dot(Qs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bf,e,Gf)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Kn.crossVectors(n,nn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Kn.crossVectors(n,nn)),Kn.normalize(),Hr.crossVectors(nn,Kn),i[0]=Kn.x,i[4]=Hr.x,i[8]=nn.x,i[1]=Kn.y,i[5]=Hr.y,i[9]=nn.y,i[2]=Kn.z,i[6]=Hr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],v=n[6],m=n[10],d=n[14],g=n[3],x=n[7],b=n[11],y=n[15],S=i[0],C=i[4],T=i[8],M=i[12],w=i[1],z=i[5],k=i[9],L=i[13],O=i[2],B=i[6],J=i[10],R=i[14],H=i[3],Q=i[7],K=i[11],ve=i[15];return s[0]=o*S+a*w+l*O+c*H,s[4]=o*C+a*z+l*B+c*Q,s[8]=o*T+a*k+l*J+c*K,s[12]=o*M+a*L+l*R+c*ve,s[1]=u*S+f*w+h*O+p*H,s[5]=u*C+f*z+h*B+p*Q,s[9]=u*T+f*k+h*J+p*K,s[13]=u*M+f*L+h*R+p*ve,s[2]=_*S+v*w+m*O+d*H,s[6]=_*C+v*z+m*B+d*Q,s[10]=_*T+v*k+m*J+d*K,s[14]=_*M+v*L+m*R+d*ve,s[3]=g*S+x*w+b*O+y*H,s[7]=g*C+x*z+b*B+y*Q,s[11]=g*T+x*k+b*J+y*K,s[15]=g*M+x*L+b*R+y*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*p-n*l*p)+v*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+d*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],g=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,x=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,b=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,y=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,S=t*g+n*x+i*b+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/S;return e[0]=g*C,e[1]=(v*h*s-f*m*s-v*i*p+n*m*p+f*i*d-n*h*d)*C,e[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*d+n*l*d)*C,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*p-n*l*p)*C,e[4]=x*C,e[5]=(u*m*s-_*h*s+_*i*p-t*m*p-u*i*d+t*h*d)*C,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*C,e[8]=b*C,e[9]=(_*f*s-u*v*s-_*n*p+t*v*p+u*n*d-t*f*d)*C,e[10]=(o*v*s-_*a*s+_*n*c-t*v*c-o*n*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*C,e[12]=y*C,e[13]=(u*v*i-_*f*i+_*n*h-t*v*h-u*n*m+t*f*m)*C,e[14]=(_*a*i-o*v*i-_*n*l+t*v*l+o*n*m-t*a*m)*C,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,v=o*u,m=o*f,d=a*f,g=l*c,x=l*u,b=l*f,y=n.x,S=n.y,C=n.z;return i[0]=(1-(v+d))*y,i[1]=(p+b)*y,i[2]=(_-x)*y,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(h+d))*S,i[6]=(m+g)*S,i[7]=0,i[8]=(_+x)*C,i[9]=(m-g)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new I,un=new vt,Bf=new I(0,0,0),Gf=new I(1,1,1),Kn=new I,Hr=new I,nn=new I,La=new vt,Ra=new jt;class Si{constructor(e=0,t=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return La.makeRotationFromQuaternion(e),this.setFromRotationMatrix(La,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class No{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hf=0;const Da=new I,Di=new jt,Bn=new vt,Vr=new I,dr=new I,Vf=new I,Wf=new jt,Ia=new I(1,0,0),Ua=new I(0,1,0),Na=new I(0,0,1),jf={type:"added"},Oa={type:"removed"};class Et extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new I,t=new Si,n=new jt,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new We}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new No,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(Na,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(Na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(dr,Vr,this.up):Bn.lookAt(Vr,dr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Bn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Oa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Wf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new I,Gn=new I,Ks=new I,Hn=new I,Ii=new I,Ui=new I,za=new I,Js=new I,$s=new I,eo=new I;let Wr=!1;class dn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fn.subVectors(i,t),Gn.subVectors(n,t),Ks.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Gn),l=fn.dot(Ks),c=Gn.dot(Gn),u=Gn.dot(Ks),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,n,i,s,o,a,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Hn),l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Gn.subVectors(e,t),fn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ii.subVectors(i,n),Ui.subVectors(s,n),Js.subVectors(e,n);const l=Ii.dot(Js),c=Ui.dot(Js);if(l<=0&&c<=0)return t.copy(n);$s.subVectors(e,i);const u=Ii.dot($s),f=Ui.dot($s);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);eo.subVectors(e,s);const p=Ii.dot(eo),_=Ui.dot(eo);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ui,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return za.subVectors(s,i),a=(f-u)/(f-u+(p-_)),t.copy(i).addScaledVector(za,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xf=0;class ar extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Yi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=xc,this.blendDst=bc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function to(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=Io(e,1),t=Xt(t,0,1),n=Xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=to(o,s,e+1/3),this.g=to(o,s,e),this.b=to(o,s,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,tn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,tn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return tn.fromWorkingColorSpace(Ot.copy(this),e),Xt(Ot.r*255,0,255)<<16^Xt(Ot.g*255,0,255)<<8^Xt(Ot.b*255,0,255)<<0}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=En){tn.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(jr);const n=Ar(hn.h,jr.h,t),i=Ar(hn.s,jr.s,t),s=Ar(hn.l,jr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=Dc;class ys extends ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new I,Xr=new Qe;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ic extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uc extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let qf=0;const on=new vt,no=new Et,Ni=new I,rn=new Nr,pr=new Nr,Dt=new I;class qt extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cc(e)?Uc:Ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(rn.min,pr.min),rn.expandByPoint(Dt),Dt.addVectors(rn.max,pr.max),rn.expandByPoint(Dt)):(rn.expandByPoint(pr.min),rn.expandByPoint(pr.max))}rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),Dt.add(Ni)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new I,u[w]=new I;const f=new I,h=new I,p=new I,_=new Qe,v=new Qe,m=new Qe,d=new I,g=new I;function x(w,z,k){f.fromArray(i,w*3),h.fromArray(i,z*3),p.fromArray(i,k*3),_.fromArray(o,w*2),v.fromArray(o,z*2),m.fromArray(o,k*2),h.sub(f),p.sub(f),v.sub(_),m.sub(_);const L=1/(v.x*m.y-m.x*v.y);!isFinite(L)||(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(L),g.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(L),c[w].add(d),c[z].add(d),c[k].add(d),u[w].add(g),u[z].add(g),u[k].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,z=b.length;w<z;++w){const k=b[w],L=k.start,O=k.count;for(let B=L,J=L+O;B<J;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new I,S=new I,C=new I,T=new I;function M(w){C.fromArray(s,w*3),T.copy(C);const z=c[w];y.copy(z),y.sub(C.multiplyScalar(C.dot(z))).normalize(),S.crossVectors(T,z);const L=S.dot(u[w])<0?-1:1;l[w*4]=y.x,l[w*4+1]=y.y,l[w*4+2]=y.z,l[w*4+3]=L}for(let w=0,z=b.length;w<z;++w){const k=b[w],L=k.start,O=k.count;for(let B=L,J=L+O;B<J;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new vt,yn=new Uo,qr=new ws,ka=new I,Oi=new I,zi=new I,Fi=new I,io=new I,Yr=new I,Zr=new Qe,Qr=new Qe,Kr=new Qe,Ba=new I,Ga=new I,Ha=new I,Jr=new I,$r=new I;class pe extends Et{constructor(e=new qt,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(io.fromBufferAttribute(f,e),o?Yr.addScaledVector(io,u):Yr.addScaledVector(io.sub(t),u))}t.add(Yr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),yn.copy(e.ray).recast(e.near),qr.containsPoint(yn.origin)===!1&&(yn.intersectSphere(qr,ka)===null||yn.origin.distanceToSquared(ka)>(e.far-e.near)**2))||(Fa.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Fa),n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,h=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=i[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=g,y=x;b<y;b+=3){const S=a.getX(b),C=a.getX(b+1),T=a.getX(b+2);o=es(this,d,e,yn,c,u,f,S,C,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const g=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);o=es(this,i,e,yn,c,u,f,g,x,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=i[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=g,y=x;b<y;b+=3){const S=b,C=b+1,T=b+2;o=es(this,d,e,yn,c,u,f,S,C,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const g=m,x=m+1,b=m+2;o=es(this,i,e,yn,c,u,f,g,x,b),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Yf(r,e,t,n,i,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ni,a),l===null)return null;$r.copy(a),$r.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:r}}function es(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Oi),r.getVertexPosition(l,zi),r.getVertexPosition(c,Fi);const u=Yf(r,e,t,n,Oi,zi,Fi,Jr);if(u){i&&(Zr.fromBufferAttribute(i,a),Qr.fromBufferAttribute(i,l),Kr.fromBufferAttribute(i,c),u.uv=dn.getInterpolation(Jr,Oi,zi,Fi,Zr,Qr,Kr,new Qe)),s&&(Zr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),u.uv2=dn.getInterpolation(Jr,Oi,zi,Fi,Zr,Qr,Kr,new Qe)),o&&(Ba.fromBufferAttribute(o,a),Ga.fromBufferAttribute(o,l),Ha.fromBufferAttribute(o,c),u.normal=dn.getInterpolation(Jr,Oi,zi,Fi,Ba,Ga,Ha,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};dn.getNormal(Oi,zi,Fi,f.normal),u.face=f}return u}class Mt extends qt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function _(v,m,d,g,x,b,y,S,C,T,M){const w=b/C,z=y/T,k=b/2,L=y/2,O=S/2,B=C+1,J=T+1;let R=0,H=0;const Q=new I;for(let K=0;K<J;K++){const ve=K*z-L;for(let se=0;se<B;se++){const j=se*w-k;Q[v]=j*g,Q[m]=ve*x,Q[d]=O,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[m]=0,Q[d]=S>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(se/C),f.push(1-K/T),R+=1}}for(let K=0;K<T;K++)for(let ve=0;ve<C;ve++){const se=h+ve+B*K,j=h+ve+B*(K+1),ee=h+(ve+1)+B*(K+1),te=h+(ve+1)+B*K;l.push(se,j,te),l.push(j,ee,te),H+=6}a.addGroup(p,H,M),p+=H,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(r){const e={};for(let t=0;t<r.length;t++){const n=tr(r[t]);for(const i in n)e[i]=n[i]}return e}function Zf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Nc(r){return r.getRenderTarget()===null&&r.outputEncoding===ot?En:Dr}const Oc={clone:tr,merge:Vt};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=Kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends zc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Bi=1;class Jf extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new sn(ki,Bi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new sn(ki,Bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new sn(ki,Bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new sn(ki,Bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new sn(ki,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(ki,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Fc extends $t{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $f extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mt(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ti});s.uniforms.tEquirect.value=t;const o=new pe(i,s),a=t.minFilter;return t.minFilter===Lr&&(t.minFilter=ln),new Jf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const ro=new I,eh=new I,th=new We;class pi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ro.subVectors(n,t).cross(eh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||th.getNormalMatrix(e),i=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new ws,ts=new I;class Oo{constructor(e=new pi,t=new pi,n=new pi,i=new pi,s=new pi,o=new pi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],_=n[10],v=n[11],m=n[12],d=n[13],g=n[14],x=n[15];return t[0].setComponents(a-i,f-l,v-h,x-m).normalize(),t[1].setComponents(a+i,f+l,v+h,x+m).normalize(),t[2].setComponents(a+s,f+c,v+p,x+d).normalize(),t[3].setComponents(a-s,f-c,v-p,x-d).normalize(),t[4].setComponents(a-o,f-u,v-_,x-g).normalize(),t[5].setComponents(a+o,f+u,v+_,x+g).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ts.x=i.normal.x>0?e.max.x:e.min.x,ts.y=i.normal.y>0?e.max.y:e.min.y,ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function nh(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Ss extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const g=d*h-o;for(let x=0;x<c;x++){const b=x*f-s;_.push(b,-g,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const x=g+c*d,b=g+c*(d+1),y=g+1+c*(d+1),S=g+1+c*d;p.push(x,b,S),p.push(b,y,S)}this.setIndex(p),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}var ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch="vec3 transformed = vec3( position );",uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,dh=`#ifdef USE_BUMPMAP
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wh=`#define PI 3.141592653589793
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
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
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
#endif`,Xh=`#if defined( USE_ENVMAP )
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
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
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
#endif`,Jh=`struct PhysicalMaterial {
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
}`,$h=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,md=`#ifdef USE_MORPHTARGETS
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
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
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
#endif`,wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,Fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kd=`#ifdef USE_SKINNING
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
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,qd=`#ifdef USE_TRANSMISSION
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
#endif`,Yd=`#ifdef USE_UV
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
#endif`,Zd=`#ifdef USE_UV
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
#endif`,Qd=`#ifdef USE_UV
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
#endif`,Kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rp=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,op=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`uniform float scale;
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
}`,fp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define LAMBERT
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
}`,gp=`#define MATCAP
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
}`,_p=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,Mp=`#define PHONG
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
}`,wp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,Sp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 color;
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
}`,Lp=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:ih,alphamap_pars_fragment:rh,alphatest_fragment:sh,alphatest_pars_fragment:oh,aomap_fragment:ah,aomap_pars_fragment:lh,begin_vertex:ch,beginnormal_vertex:uh,bsdfs:fh,iridescence_fragment:hh,bumpmap_pars_fragment:dh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:gh,clipping_planes_vertex:_h,color_fragment:vh,color_pars_fragment:xh,color_pars_vertex:bh,color_vertex:Mh,common:wh,cube_uv_reflection_fragment:yh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Eh,displacementmap_vertex:Th,emissivemap_fragment:Ah,emissivemap_pars_fragment:Ch,encodings_fragment:Ph,encodings_pars_fragment:Lh,envmap_fragment:Rh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Ih,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Xh,envmap_vertex:Nh,fog_vertex:Oh,fog_pars_vertex:zh,fog_fragment:Fh,fog_pars_fragment:kh,gradientmap_pars_fragment:Bh,lightmap_fragment:Gh,lightmap_pars_fragment:Hh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Wh,lights_pars_begin:jh,lights_toon_fragment:qh,lights_toon_pars_fragment:Yh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Qh,lights_physical_fragment:Kh,lights_physical_pars_fragment:Jh,lights_fragment_begin:$h,lights_fragment_maps:ed,lights_fragment_end:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:sd,map_fragment:od,map_pars_fragment:ad,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:fd,morphcolor_vertex:hd,morphnormal_vertex:dd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:vd,normal_pars_vertex:xd,normal_vertex:bd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:wd,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:Ed,output_fragment:Td,packing:Ad,premultiplied_alpha_fragment:Cd,project_vertex:Pd,dithering_fragment:Ld,dithering_pars_fragment:Rd,roughnessmap_fragment:Dd,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Nd,shadowmap_vertex:Od,shadowmask_pars_fragment:zd,skinbase_vertex:Fd,skinning_pars_vertex:kd,skinning_vertex:Bd,skinnormal_vertex:Gd,specularmap_fragment:Hd,specularmap_pars_fragment:Vd,tonemapping_fragment:Wd,tonemapping_pars_fragment:jd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:Zd,uv_vertex:Qd,worldpos_vertex:Kd,background_vert:Jd,background_frag:$d,backgroundCube_vert:ep,backgroundCube_frag:tp,cube_vert:np,cube_frag:ip,depth_vert:rp,depth_frag:sp,distanceRGBA_vert:op,distanceRGBA_frag:ap,equirect_vert:lp,equirect_frag:cp,linedashed_vert:up,linedashed_frag:fp,meshbasic_vert:hp,meshbasic_frag:dp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:xp,meshphong_vert:bp,meshphong_frag:Mp,meshphysical_vert:wp,meshphysical_frag:yp,meshtoon_vert:Sp,meshtoon_frag:Ep,points_vert:Tp,points_frag:Ap,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Rp},ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},An={basic:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Vt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Vt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Vt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Vt([ce.points,ce.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Vt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Vt([ce.common,ce.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Vt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Vt([ce.sprite,ce.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Vt([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Vt([ce.lights,ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};An.physical={uniforms:Vt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ns={r:0,b:0,g:0};function Dp(r,e,t,n,i,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(m,d){let g=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x));const b=r.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?v(a,l):x&&x.isColor&&(v(x,1),g=!0),(r.autoClear||g)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ms)?(u===void 0&&(u=new pe(new Mt(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:tr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.encoding!==ot,(f!==x||h!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pe(new Ss(2,2),new Xn({name:"BackgroundMaterial",uniforms:tr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.encoding!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(ns,Nc(r)),n.buffers.color.setClear(ns.r,ns.g,ns.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:_}}function Ip(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(O,B,J,R,H){let Q=!1;if(o){const K=v(R,J,B);c!==K&&(c=K,p(c.object)),Q=d(O,R,J,H),Q&&g(O,R,J,H)}else{const K=B.wireframe===!0;(c.geometry!==R.id||c.program!==J.id||c.wireframe!==K)&&(c.geometry=R.id,c.program=J.id,c.wireframe=K,Q=!0)}H!==null&&t.update(H,34963),(Q||u)&&(u=!1,T(O,B,J,R),H!==null&&r.bindBuffer(34963,t.get(H).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,B,J){const R=J.wireframe===!0;let H=a[O.id];H===void 0&&(H={},a[O.id]=H);let Q=H[B.id];Q===void 0&&(Q={},H[B.id]=Q);let K=Q[R];return K===void 0&&(K=m(h()),Q[R]=K),K}function m(O){const B=[],J=[],R=[];for(let H=0;H<i;H++)B[H]=0,J[H]=0,R[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:R,object:O,attributes:{},index:null}}function d(O,B,J,R){const H=c.attributes,Q=B.attributes;let K=0;const ve=J.getAttributes();for(const se in ve)if(ve[se].location>=0){const ee=H[se];let te=Q[se];if(te===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;K++}return c.attributesNum!==K||c.index!==R}function g(O,B,J,R){const H={},Q=B.attributes;let K=0;const ve=J.getAttributes();for(const se in ve)if(ve[se].location>=0){let ee=Q[se];ee===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),H[se]=te,K++}c.attributes=H,c.attributesNum=K,c.index=R}function x(){const O=c.newAttributes;for(let B=0,J=O.length;B<J;B++)O[B]=0}function b(O){y(O,0)}function y(O,B){const J=c.newAttributes,R=c.enabledAttributes,H=c.attributeDivisors;J[O]=1,R[O]===0&&(r.enableVertexAttribArray(O),R[O]=1),H[O]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),H[O]=B)}function S(){const O=c.newAttributes,B=c.enabledAttributes;for(let J=0,R=B.length;J<R;J++)B[J]!==O[J]&&(r.disableVertexAttribArray(J),B[J]=0)}function C(O,B,J,R,H,Q){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(O,B,J,H,Q):r.vertexAttribPointer(O,B,J,R,H,Q)}function T(O,B,J,R){if(n.isWebGL2===!1&&(O.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=R.attributes,Q=J.getAttributes(),K=B.defaultAttributeValues;for(const ve in Q){const se=Q[ve];if(se.location>=0){let j=H[ve];if(j===void 0&&(ve==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ve==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const ee=j.normalized,te=j.itemSize,ue=t.get(j);if(ue===void 0)continue;const N=ue.buffer,Re=ue.type,Ce=ue.bytesPerElement;if(j.isInterleavedBufferAttribute){const oe=j.data,Te=oe.stride,je=j.offset;if(oe.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)y(se.location+ye,oe.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<se.locationSize;ye++)b(se.location+ye);r.bindBuffer(34962,N);for(let ye=0;ye<se.locationSize;ye++)C(se.location+ye,te/se.locationSize,Re,ee,Te*Ce,(je+te/se.locationSize*ye)*Ce)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<se.locationSize;oe++)y(se.location+oe,j.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<se.locationSize;oe++)b(se.location+oe);r.bindBuffer(34962,N);for(let oe=0;oe<se.locationSize;oe++)C(se.location+oe,te/se.locationSize,Re,ee,te*Ce,te/se.locationSize*oe*Ce)}}else if(K!==void 0){const ee=K[ve];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(se.location,ee);break;case 3:r.vertexAttrib3fv(se.location,ee);break;case 4:r.vertexAttrib4fv(se.location,ee);break;default:r.vertexAttrib1fv(se.location,ee)}}}}S()}function M(){k();for(const O in a){const B=a[O];for(const J in B){const R=B[J];for(const H in R)_(R[H].object),delete R[H];delete B[J]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;const B=a[O.id];for(const J in B){const R=B[J];for(const H in R)_(R[H].object),delete R[H];delete B[J]}delete a[O.id]}function z(O){for(const B in a){const J=a[B];if(J[O.id]===void 0)continue;const R=J[O.id];for(const H in R)_(R[H].object),delete R[H];delete J[O.id]}}function k(){L(),u=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:b,disableUnusedAttributes:S}}function Up(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Np(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),_=r.getParameter(34076),v=r.getParameter(34921),m=r.getParameter(36347),d=r.getParameter(36348),g=r.getParameter(36349),x=h>0,b=o||e.has("OES_texture_float"),y=x&&b,S=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:y,maxSamples:S}}function Op(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const g=s?0:n,x=g*4;let b=d.clippingState||null;l.value=b,b=u(_,h,x,p);for(let y=0;y!==x;++y)b[y]=t[y];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,b=p;x!==v;++x,b+=4)o.copy(f[x]).applyMatrix4(g,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function zp(r){let e=new WeakMap;function t(o,a){return a===bo?o.mapping=Ji:a===Mo&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===bo||a===Mo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $f(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bc extends zc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,Va=[.125,.215,.35,.446,.526,.582],_i=20,so=new Bc,Wa=new Je;let oo=null;const mi=(1+Math.sqrt(5))/2,Gi=1/mi,ja=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,mi,Gi),new I(0,mi,-Gi),new I(Gi,0,mi),new I(-Gi,0,mi),new I(mi,Gi,0),new I(-mi,Gi,0)];class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Za(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oo),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Rr,format:gn,encoding:ii,depthBuffer:!1},i=qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(s)),this._blurMaterial=kp(s,e,t)}return i}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,i){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Wa),u.toneMapping=Rn,u.autoClear=!1;const p=new ys({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new pe(new Mt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Wa),v=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;is(i,g*x,d>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ji||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Za()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ja[(i-1)%ja.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pe(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_i-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):_i;m>_i&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const d=[];let g=0;for(let C=0;C<_i;++C){const T=C/v,M=Math.exp(-T*T/2);d.push(M),C===0?g+=M:C<m&&(g+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-n;const b=this._sizeLods[i],y=3*b*(i>x-ji?i-x+ji:0),S=4*(this._cubeSize-b);is(t,y,S,3*b,2*b),l.setRenderTarget(t),l.render(f,so)}}function Fp(r){const e=[],t=[],n=[];let i=r;const s=r-ji+1+Va.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ji?l=Va[o-r+ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,g=new Float32Array(v*_*p),x=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let S=0;S<p;S++){const C=S%3*2/3-1,T=S>2?0:-1,M=[C,T,0,C+2/3,T,0,C+2/3,T+1,0,C,T,0,C+2/3,T+1,0,C,T+1,0];g.set(M,v*_*S),x.set(h,m*_*S);const w=[S,S,S,S,S,S];b.set(w,d*_*S)}const y=new qt;y.setAttribute("position",new Dn(g,v)),y.setAttribute("uv",new Dn(x,m)),y.setAttribute("faceIndex",new Dn(b,d)),e.push(y),i>ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function qa(r,e,t){const n=new ri(r,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function kp(r,e,t){const n=new Float32Array(_i),i=new I(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ya(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Za(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Bp(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bo||l===Mo,u=l===Ji||l===$i;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Xa(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Xa(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hp(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const p=f.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,d=v.length;m<d;m++)e.update(v[m],34962)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let x=0,b=g.length;x<b;x+=3){const y=g[x+0],S=g[x+1],C=g[x+2];h.push(y,S,S,C,C,y)}}else{const g=_.array;v=_.version;for(let x=0,b=g.length/3-1;x<b;x+=3){const y=x+0,S=x+1,C=x+2;h.push(y,S,S,C,C,y)}}const m=new(Cc(h)?Uc:Ic)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Vp(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,_){if(_===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Wp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jp(r,e){return r[0]-e[0]}function Xp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function qp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let B=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),b===!0&&(M=2),y===!0&&(M=3);let w=u.attributes.position.count*M,z=1;w>e.maxTextureSize&&(z=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const k=new Float32Array(w*z*4*v),L=new Rc(k,w,z,v);L.type=Mi,L.needsUpdate=!0;const O=M*4;for(let J=0;J<v;J++){const R=S[J],H=C[J],Q=T[J],K=w*z*4*J;for(let ve=0;ve<R.count;ve++){const se=ve*O;x===!0&&(o.fromBufferAttribute(R,ve),k[K+se+0]=o.x,k[K+se+1]=o.y,k[K+se+2]=o.z,k[K+se+3]=0),b===!0&&(o.fromBufferAttribute(H,ve),k[K+se+4]=o.x,k[K+se+5]=o.y,k[K+se+6]=o.z,k[K+se+7]=0),y===!0&&(o.fromBufferAttribute(Q,ve),k[K+se+8]=o.x,k[K+se+9]=o.y,k[K+se+10]=o.z,k[K+se+11]=Q.itemSize===4?o.w:1)}}m={count:v,texture:L,size:new Qe(w,z)},s.set(u,m),u.addEventListener("dispose",B)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const g=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(r,"morphTargetBaseInfluence",g),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let v=n[u.id];if(v===void 0||v.length!==_){v=[];for(let b=0;b<_;b++)v[b]=[b,0];n[u.id]=v}for(let b=0;b<_;b++){const y=v[b];y[0]=b,y[1]=h[b]}v.sort(Xp);for(let b=0;b<8;b++)b<_&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(jp);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let g=0;for(let b=0;b<8;b++){const y=a[b],S=y[0],C=y[1];S!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+b)!==m[S]&&u.setAttribute("morphTarget"+b,m[S]),d&&u.getAttribute("morphNormal"+b)!==d[S]&&u.setAttribute("morphNormal"+b,d[S]),i[b]=C,g+=C):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const x=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Yp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Gc=new $t,Hc=new Rc,Vc=new Ff,Wc=new Fc,Qa=[],Ka=[],Ja=new Float32Array(16),$a=new Float32Array(9),el=new Float32Array(4);function lr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Qa[i];if(s===void 0&&(s=new Float32Array(i),Qa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Es(r,e){let t=Ka[e];t===void 0&&(t=new Int32Array(e),Ka[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Zp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function $p(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;el.set(n),r.uniformMatrix2fv(this.addr,!1,el),Pt(t,n)}}function em(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;$a.set(n),r.uniformMatrix3fv(this.addr,!1,$a),Pt(t,n)}}function tm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ja.set(n),r.uniformMatrix4fv(this.addr,!1,Ja),Pt(t,n)}}function nm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function om(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function um(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Gc,i)}function fm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vc,i)}function hm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wc,i)}function dm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hc,i)}function pm(r){switch(r){case 5126:return Zp;case 35664:return Qp;case 35665:return Kp;case 35666:return Jp;case 35674:return $p;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return dm}}function mm(r,e){r.uniform1fv(this.addr,e)}function gm(r,e){const t=lr(e,this.size,2);r.uniform2fv(this.addr,t)}function _m(r,e){const t=lr(e,this.size,3);r.uniform3fv(this.addr,t)}function vm(r,e){const t=lr(e,this.size,4);r.uniform4fv(this.addr,t)}function xm(r,e){const t=lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bm(r,e){const t=lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Mm(r,e){const t=lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wm(r,e){r.uniform1iv(this.addr,e)}function ym(r,e){r.uniform2iv(this.addr,e)}function Sm(r,e){r.uniform3iv(this.addr,e)}function Em(r,e){r.uniform4iv(this.addr,e)}function Tm(r,e){r.uniform1uiv(this.addr,e)}function Am(r,e){r.uniform2uiv(this.addr,e)}function Cm(r,e){r.uniform3uiv(this.addr,e)}function Pm(r,e){r.uniform4uiv(this.addr,e)}function Lm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gc,s[o])}function Rm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Vc,s[o])}function Dm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wc,s[o])}function Im(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Hc,s[o])}function Um(r){switch(r){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return vm;case 35674:return xm;case 35675:return bm;case 35676:return Mm;case 5124:case 35670:return wm;case 35667:case 35671:return ym;case 35668:case 35672:return Sm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Am;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Um(t.type)}}class zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function tl(r,e){r.seq.push(e),r.map[e.id]=e}function Fm(r,e,t){const n=r.name,i=n.length;for(ao.lastIndex=0;;){const s=ao.exec(n),o=ao.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){tl(t,c===void 0?new Nm(a,r,e):new Om(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new zm(a),tl(t,f)),t=f}}}class ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Fm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function nl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let km=0;function Bm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Gm(r){switch(r){case ii:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function il(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Bm(r.getShaderSource(e),o)}else return i}function Hm(r,e){const t=Gm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Vm(r,e){let t;switch(e){case Xu:t="Linear";break;case qu:t="Reinhard";break;case Yu:t="OptimizedCineon";break;case wc:t="ACESFilmic";break;case Zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function jm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function br(r){return r!==""}function rl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(r){return r.replace(qm,Ym)}function Ym(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return To(t)}const Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(r){return r.replace(Zm,Qm)}function Qm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function al(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Km(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vr&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ji:case $i:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $m(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Wu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function tg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ng(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Km(t),c=Jm(t),u=$m(t),f=eg(t),h=tg(t),p=t.isWebGL2?"":Wm(t),_=jm(s),v=i.createProgram();let m,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(br).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(br).join(`
`),d.length>0&&(d+=`
`)):(m=[al(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[p,al(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,Hm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=To(o),o=rl(o,t),o=sl(o,t),a=To(a),a=rl(a,t),a=sl(a,t),o=ol(o),a=ol(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=g+m+o,b=g+d+a,y=nl(i,35633,x),S=nl(i,35632,b);if(i.attachShader(v,y),i.attachShader(v,S),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(v).trim(),w=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(S).trim();let k=!0,L=!0;if(i.getProgramParameter(v,35714)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,y,S);else{const O=il(i,y,"vertex"),B=il(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+M+`
`+O+`
`+B)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(w===""||z==="")&&(L=!1);L&&(this.diagnostics={runnable:k,programLog:M,vertexShader:{log:w,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(y),i.deleteShader(S);let C;this.getUniforms=function(){return C===void 0&&(C=new ds(i,v)),C};let T;return this.getAttributes=function(){return T===void 0&&(T=Xm(i,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=S,this}let ig=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sg(e),t.set(e,n)),n}}class sg{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}}function og(r,e,t,n,i,s,o){const a=new No,l=new rg,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===1?"uv2":"uv"}function m(M,w,z,k,L){const O=k.fog,B=L.geometry,J=M.isMeshStandardMaterial?k.environment:null,R=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),H=!!R&&R.mapping===Ms?R.image.height:null,Q=_[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=K!==void 0?K.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let j,ee,te,ue;if(Q){const he=An[Q];j=he.vertexShader,ee=he.fragmentShader}else j=M.vertexShader,ee=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const N=r.getRenderTarget(),Re=L.isInstancedMesh===!0,Ce=!!M.map,oe=!!M.matcap,Te=!!R,je=!!M.aoMap,ye=!!M.lightMap,Ue=!!M.bumpMap,lt=!!M.normalMap,xt=!!M.displacementMap,bt=!!M.emissiveMap,_t=!!M.metalnessMap,Xe=!!M.roughnessMap,st=M.clearcoat>0,It=M.iridescence>0,P=M.sheen>0,E=M.transmission>0,Y=st&&!!M.clearcoatMap,ne=st&&!!M.clearcoatNormalMap,re=st&&!!M.clearcoatRoughnessMap,fe=It&&!!M.iridescenceMap,Pe=It&&!!M.iridescenceThicknessMap,de=P&&!!M.sheenColorMap,$=P&&!!M.sheenRoughnessMap,xe=!!M.specularMap,Se=!!M.specularColorMap,Ae=!!M.specularIntensityMap,ge=E&&!!M.transmissionMap,be=E&&!!M.thicknessMap,ze=!!M.gradientMap,Ze=!!M.alphaMap,ct=M.alphaTest>0,U=!!M.extensions,W=!!B.attributes.uv2;return{isWebGL2:u,shaderID:Q,shaderName:M.type,vertexShader:j,fragmentShader:ee,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Re,instancingColor:Re&&L.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?r.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:ii,map:Ce,matcap:oe,envMap:Te,envMapMode:Te&&R.mapping,envMapCubeUVHeight:H,aoMap:je,lightMap:ye,bumpMap:Ue,normalMap:lt,displacementMap:h&&xt,emissiveMap:bt,normalMapObjectSpace:lt&&M.normalMapType===mf,normalMapTangentSpace:lt&&M.normalMapType===Ec,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&M.map.encoding===ot,metalnessMap:_t,roughnessMap:Xe,clearcoat:st,clearcoatMap:Y,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,iridescence:It,iridescenceMap:fe,iridescenceThicknessMap:Pe,sheen:P,sheenColorMap:de,sheenRoughnessMap:$,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ae,transmission:E,transmissionMap:ge,thicknessMap:be,gradientMap:ze,opaque:M.transparent===!1&&M.blending===Yi,alphaMap:Ze,alphaTest:ct,combine:M.combine,mapUv:Ce&&v(M.map.channel),aoMapUv:je&&v(M.aoMap.channel),lightMapUv:ye&&v(M.lightMap.channel),bumpMapUv:Ue&&v(M.bumpMap.channel),normalMapUv:lt&&v(M.normalMap.channel),displacementMapUv:xt&&v(M.displacementMap.channel),emissiveMapUv:bt&&v(M.emissiveMap.channel),metalnessMapUv:_t&&v(M.metalnessMap.channel),roughnessMapUv:Xe&&v(M.roughnessMap.channel),clearcoatMapUv:Y&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:$&&v(M.sheenRoughnessMap.channel),specularMapUv:xe&&v(M.specularMap.channel),specularColorMapUv:Se&&v(M.specularColorMap.channel),specularIntensityMapUv:Ae&&v(M.specularIntensityMap.channel),transmissionMapUv:ge&&v(M.transmissionMap.channel),thicknessMapUv:be&&v(M.thicknessMap.channel),alphaMapUv:Ze&&v(M.alphaMap.channel),vertexTangents:lt&&!!B.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:W,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ce||Ze),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:Rn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:U&&M.extensions.derivatives===!0,extensionFragDepth:U&&M.extensions.fragDepth===!0,extensionDrawBuffers:U&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)w.push(z),w.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(g(w,M),x(w,M),w.push(r.outputEncoding)),w.push(M.customProgramCacheKey),w.join()}function g(M,w){M.push(w.precision),M.push(w.outputEncoding),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUvs2&&a.enable(13),w.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.decodeVideoTexture&&a.enable(17),w.opaque&&a.enable(18),w.pointsUvs&&a.enable(19),M.push(a.mask)}function b(M){const w=_[M.type];let z;if(w){const k=An[w];z=Oc.clone(k.uniforms)}else z=M.uniforms;return z}function y(M,w){let z;for(let k=0,L=c.length;k<L;k++){const O=c[k];if(O.cacheKey===w){z=O,++z.usedTimes;break}}return z===void 0&&(z=new ng(r,w,M,s),c.push(z)),z}function S(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:T}}function ag(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ll(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,_,v,m){let d=r[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},r[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||lg),n.length>1&&n.sort(h||ll),i.length>1&&i.sort(h||ll)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function cg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new cl,r.set(n,[o])):i>=s.length?(o=new cl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ug(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Je};break;case"SpotLight":t={position:new I,direction:new I,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function fg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hg=0;function dg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pg(r,e){const t=new ug,n=fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new vt,a=new vt;function l(u,f){let h=0,p=0,_=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let v=0,m=0,d=0,g=0,x=0,b=0,y=0,S=0,C=0,T=0;u.sort(dg);const M=f===!0?Math.PI:1;for(let z=0,k=u.length;z<k;z++){const L=u[z],O=L.color,B=L.intensity,J=L.distance,R=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B*M,p+=O.g*B*M,_+=O.b*B*M;else if(L.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],B);else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const Q=L.shadow,K=n.get(L);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=R,i.directionalShadowMatrix[v]=L.shadow.matrix,b++}i.directional[v]=H,v++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(B*M),H.distance=J,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[d]=H;const Q=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,Q.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[d]=Q.matrix,L.castShadow){const K=n.get(L);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[d]=K,i.spotShadowMap[d]=R,S++}d++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=H,g++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*M),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Q=L.shadow,K=n.get(L);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=R,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=H,m++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(B*M),H.groundColor.copy(L.groundColor).multiplyScalar(B*M),i.hemi[x]=H,x++}}g>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const w=i.hash;(w.directionalLength!==v||w.pointLength!==m||w.spotLength!==d||w.rectAreaLength!==g||w.hemiLength!==x||w.numDirectionalShadows!==b||w.numPointShadows!==y||w.numSpotShadows!==S||w.numSpotMaps!==C)&&(i.directional.length=v,i.spot.length=d,i.rectArea.length=g,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,w.directionalLength=v,w.pointLength=m,w.spotLength=d,w.rectAreaLength=g,w.hemiLength=x,w.numDirectionalShadows=b,w.numPointShadows=y,w.numSpotShadows=S,w.numSpotMaps=C,i.version=hg++)}function c(u,f){let h=0,p=0,_=0,v=0,m=0;const d=f.matrixWorldInverse;for(let g=0,x=u.length;g<x;g++){const b=u[g];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),h++}else if(b.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),_++}else if(b.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),a.identity(),o.copy(b.matrixWorld),o.premultiply(d),a.extractRotation(o),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function ul(r,e){const t=new pg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function mg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ul(r,e),t.set(s,[l])):o>=a.length?(l=new ul(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class gg extends ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _g extends ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function bg(r,e,t){let n=new Oo;const i=new Qe,s=new Qe,o=new Ut,a=new gg({depthPacking:pf}),l=new _g,c={},u=t.maxTextureSize,f={[ni]:Jt,[Jt]:ni,[Pn]:Pn},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:vg,fragmentShader:xg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c,this.render=function(b,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),w=r.state;w.setBlending(ti),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);for(let z=0,k=b.length;z<k;z++){const L=b[z],O=L.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const B=O.getFrameExtents();if(i.multiply(B),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/B.x),i.x=s.x*B.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/B.y),i.y=s.y*B.y,O.mapSize.y=s.y)),O.map===null){const R=this.type!==vr?{minFilter:Wt,magFilter:Wt}:{};O.map=new ri(i.x,i.y,R),O.map.texture.name=L.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const J=O.getViewportCount();for(let R=0;R<J;R++){const H=O.getViewport(R);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),w.viewport(o),O.updateMatrices(L,R),n=O.getFrustum(),x(y,S,O.camera,L,this.type)}O.isPointLightShadow!==!0&&this.type===vr&&d(O,S),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(C,T,M)};function d(b,y){const S=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ri(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(y,null,S,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(y,null,S,p,v,null)}function g(b,y,S,C){let T=null;const M=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(M!==void 0)T=M;else if(T=S.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const w=T.uuid,z=y.uuid;let k=c[w];k===void 0&&(k={},c[w]=k);let L=k[z];L===void 0&&(L=T.clone(),k[z]=L),T=L}if(T.visible=y.visible,T.wireframe=y.wireframe,C===vr?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:f[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const w=r.properties.get(T);w.light=S}return T}function x(b,y,S,C,T){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===vr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const z=e.update(b),k=b.material;if(Array.isArray(k)){const L=z.groups;for(let O=0,B=L.length;O<B;O++){const J=L[O],R=k[J.materialIndex];if(R&&R.visible){const H=g(b,R,C,T);r.renderBufferDirect(S,null,z,H,b,J)}}}else if(k.visible){const L=g(b,k,C,T);r.renderBufferDirect(S,null,z,L,b,null)}}const w=b.children;for(let z=0,k=w.length;z<k;z++)x(w[z],y,S,C,T)}}function Mg(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const W=new Ut;let ie=null;const he=new Ut(0,0,0,0);return{setMask:function(Me){ie!==Me&&!U&&(r.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){U=Me},setClear:function(Me,Ke,He,Tt,Yt){Yt===!0&&(Me*=Tt,Ke*=Tt,He*=Tt),W.set(Me,Ke,He,Tt),he.equals(W)===!1&&(r.clearColor(Me,Ke,He,Tt),he.copy(W))},reset:function(){U=!1,ie=null,he.set(-1,0,0,0)}}}function s(){let U=!1,W=null,ie=null,he=null;return{setTest:function(Me){Me?N(2929):Re(2929)},setMask:function(Me){W!==Me&&!U&&(r.depthMask(Me),W=Me)},setFunc:function(Me){if(ie!==Me){switch(Me){case zu:r.depthFunc(512);break;case Fu:r.depthFunc(519);break;case ku:r.depthFunc(513);break;case xo:r.depthFunc(515);break;case Bu:r.depthFunc(514);break;case Gu:r.depthFunc(518);break;case Hu:r.depthFunc(516);break;case Vu:r.depthFunc(517);break;default:r.depthFunc(515)}ie=Me}},setLocked:function(Me){U=Me},setClear:function(Me){he!==Me&&(r.clearDepth(Me),he=Me)},reset:function(){U=!1,W=null,ie=null,he=null}}}function o(){let U=!1,W=null,ie=null,he=null,Me=null,Ke=null,He=null,Tt=null,Yt=null;return{setTest:function(ht){U||(ht?N(2960):Re(2960))},setMask:function(ht){W!==ht&&!U&&(r.stencilMask(ht),W=ht)},setFunc:function(ht,Lt,Bt){(ie!==ht||he!==Lt||Me!==Bt)&&(r.stencilFunc(ht,Lt,Bt),ie=ht,he=Lt,Me=Bt)},setOp:function(ht,Lt,Bt){(Ke!==ht||He!==Lt||Tt!==Bt)&&(r.stencilOp(ht,Lt,Bt),Ke=ht,He=Lt,Tt=Bt)},setLocked:function(ht){U=ht},setClear:function(ht){Yt!==ht&&(r.clearStencil(ht),Yt=ht)},reset:function(){U=!1,W=null,ie=null,he=null,Me=null,Ke=null,He=null,Tt=null,Yt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,v=[],m=null,d=!1,g=null,x=null,b=null,y=null,S=null,C=null,T=null,M=!1,w=null,z=null,k=null,L=null,O=null;const B=r.getParameter(35661);let J=!1,R=0;const H=r.getParameter(7938);H.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=R>=1):H.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=R>=2);let Q=null,K={};const ve=r.getParameter(3088),se=r.getParameter(2978),j=new Ut().fromArray(ve),ee=new Ut().fromArray(se);function te(U,W,ie){const he=new Uint8Array(4),Me=r.createTexture();r.bindTexture(U,Me),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let Ke=0;Ke<ie;Ke++)r.texImage2D(W+Ke,0,6408,1,1,0,6408,5121,he);return Me}const ue={};ue[3553]=te(3553,3553,1),ue[34067]=te(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(xo),xt(!1),bt(Qo),N(2884),Ue(ti);function N(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Re(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ce(U,W){return p[U]!==W?(r.bindFramebuffer(U,W),p[U]=W,n&&(U===36009&&(p[36160]=W),U===36160&&(p[36009]=W)),!0):!1}function oe(U,W){let ie=v,he=!1;if(U)if(ie=_.get(W),ie===void 0&&(ie=[],_.set(W,ie)),U.isWebGLMultipleRenderTargets){const Me=U.texture;if(ie.length!==Me.length||ie[0]!==36064){for(let Ke=0,He=Me.length;Ke<He;Ke++)ie[Ke]=36064+Ke;ie.length=Me.length,he=!0}}else ie[0]!==36064&&(ie[0]=36064,he=!0);else ie[0]!==1029&&(ie[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Te(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const je={[Vi]:32774,[Tu]:32778,[Au]:32779};if(n)je[ea]=32775,je[ta]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(je[ea]=U.MIN_EXT,je[ta]=U.MAX_EXT)}const ye={[Cu]:0,[Pu]:1,[Lu]:768,[xc]:770,[Ou]:776,[Uu]:774,[Du]:772,[Ru]:769,[bc]:771,[Nu]:775,[Iu]:773};function Ue(U,W,ie,he,Me,Ke,He,Tt){if(U===ti){d===!0&&(Re(3042),d=!1);return}if(d===!1&&(N(3042),d=!0),U!==Eu){if(U!==g||Tt!==M){if((x!==Vi||S!==Vi)&&(r.blendEquation(32774),x=Vi,S=Vi),Tt)switch(U){case Yi:r.blendFuncSeparate(1,771,1,771);break;case Ko:r.blendFunc(1,1);break;case Jo:r.blendFuncSeparate(0,769,0,1);break;case $o:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Yi:r.blendFuncSeparate(770,771,1,771);break;case Ko:r.blendFunc(770,1);break;case Jo:r.blendFuncSeparate(0,769,0,1);break;case $o:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,y=null,C=null,T=null,g=U,M=Tt}return}Me=Me||W,Ke=Ke||ie,He=He||he,(W!==x||Me!==S)&&(r.blendEquationSeparate(je[W],je[Me]),x=W,S=Me),(ie!==b||he!==y||Ke!==C||He!==T)&&(r.blendFuncSeparate(ye[ie],ye[he],ye[Ke],ye[He]),b=ie,y=he,C=Ke,T=He),g=U,M=!1}function lt(U,W){U.side===Pn?Re(2884):N(2884);let ie=U.side===Jt;W&&(ie=!ie),xt(ie),U.blending===Yi&&U.transparent===!1?Ue(ti):Ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const he=U.stencilWrite;c.setTest(he),he&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(32926):Re(32926)}function xt(U){w!==U&&(U?r.frontFace(2304):r.frontFace(2305),w=U)}function bt(U){U!==yu?(N(2884),U!==z&&(U===Qo?r.cullFace(1029):U===Su?r.cullFace(1028):r.cullFace(1032))):Re(2884),z=U}function _t(U){U!==k&&(J&&r.lineWidth(U),k=U)}function Xe(U,W,ie){U?(N(32823),(L!==W||O!==ie)&&(r.polygonOffset(W,ie),L=W,O=ie)):Re(32823)}function st(U){U?N(3089):Re(3089)}function It(U){U===void 0&&(U=33984+B-1),Q!==U&&(r.activeTexture(U),Q=U)}function P(U,W,ie){ie===void 0&&(Q===null?ie=33984+B-1:ie=Q);let he=K[ie];he===void 0&&(he={type:void 0,texture:void 0},K[ie]=he),(he.type!==U||he.texture!==W)&&(Q!==ie&&(r.activeTexture(ie),Q=ie),r.bindTexture(U,W||ue[U]),he.type=U,he.texture=W)}function E(){const U=K[Q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){j.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function be(U){ee.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function ze(U,W){let ie=f.get(W);ie===void 0&&(ie=new WeakMap,f.set(W,ie));let he=ie.get(U);he===void 0&&(he=r.getUniformBlockIndex(W,U.name),ie.set(U,he))}function Ze(U,W){const he=f.get(W).get(U);u.get(W)!==he&&(r.uniformBlockBinding(W,he,U.__bindingPointIndex),u.set(W,he))}function ct(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,K={},p={},_=new WeakMap,v=[],m=null,d=!1,g=null,x=null,b=null,y=null,S=null,C=null,T=null,M=!1,w=null,z=null,k=null,L=null,O=null,j.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:Re,bindFramebuffer:Ce,drawBuffers:oe,useProgram:Te,setBlending:Ue,setMaterial:lt,setFlipSided:xt,setCullFace:bt,setLineWidth:_t,setPolygonOffset:Xe,setScissorTest:st,activeTexture:It,bindTexture:P,unbindTexture:E,compressedTexImage2D:Y,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Ae,updateUBOMapping:ze,uniformBlockBinding:Ze,texStorage2D:$,texStorage3D:xe,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:de,scissor:ge,viewport:be,reset:ct}}function wg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return d?new OffscreenCanvas(P,E):Ur("canvas")}function x(P,E,Y,ne){let re=1;if((P.width>ne||P.height>ne)&&(re=ne/Math.max(P.width,P.height)),re<1||E===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){const fe=E?Ac:Math.floor,Pe=fe(re*P.width),de=fe(re*P.height);v===void 0&&(v=g(Pe,de));const $=Y?g(Pe,de):v;return $.width=Pe,$.height=de,$.getContext("2d").drawImage(P,0,0,Pe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Pe+"x"+de+")."),$}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return Eo(P.width)&&Eo(P.height)}function y(P){return a?!1:P.wrapS!==mn||P.wrapT!==mn||P.minFilter!==Wt&&P.minFilter!==ln}function S(P,E){return P.generateMipmaps&&E&&P.minFilter!==Wt&&P.minFilter!==ln}function C(P){r.generateMipmap(P)}function T(P,E,Y,ne,re=!1){if(a===!1)return E;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=E;return E===6403&&(Y===5126&&(fe=33326),Y===5131&&(fe=33325),Y===5121&&(fe=33321)),E===33319&&(Y===5126&&(fe=33328),Y===5131&&(fe=33327),Y===5121&&(fe=33323)),E===6408&&(Y===5126&&(fe=34836),Y===5131&&(fe=34842),Y===5121&&(fe=ne===ot&&re===!1?35907:32856),Y===32819&&(fe=32854),Y===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function M(P,E,Y){return S(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function w(P){return P===Wt||P===na||P===Ns?9728:9729}function z(P){const E=P.target;E.removeEventListener("dispose",z),L(E),E.isVideoTexture&&_.delete(E)}function k(P){const E=P.target;E.removeEventListener("dispose",k),B(E)}function L(P){const E=n.get(P);if(E.__webglInit===void 0)return;const Y=P.source,ne=m.get(Y);if(ne){const re=ne[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(P),Object.keys(ne).length===0&&m.delete(Y)}n.remove(P)}function O(P){const E=n.get(P);r.deleteTexture(E.__webglTexture);const Y=P.source,ne=m.get(Y);delete ne[E.__cacheKey],o.memory.textures--}function B(P){const E=P.texture,Y=n.get(P),ne=n.get(E);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(Y.__webglFramebuffer[re]),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&r.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let re=0;re<Y.__webglColorRenderbuffer.length;re++)Y.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(Y.__webglColorRenderbuffer[re]);Y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,fe=E.length;re<fe;re++){const Pe=n.get(E[re]);Pe.__webglTexture&&(r.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(P)}let J=0;function R(){J=0}function H(){const P=J;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),J+=1,P}function Q(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.encoding),E.join()}function K(P,E){const Y=n.get(P);if(P.isVideoTexture&&st(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,P,E);return}}t.bindTexture(3553,Y.__webglTexture,33984+E)}function ve(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Re(Y,P,E);return}t.bindTexture(35866,Y.__webglTexture,33984+E)}function se(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Re(Y,P,E);return}t.bindTexture(32879,Y.__webglTexture,33984+E)}function j(P,E){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){Ce(Y,P,E);return}t.bindTexture(34067,Y.__webglTexture,33984+E)}const ee={[wo]:10497,[mn]:33071,[yo]:33648},te={[Wt]:9728,[na]:9984,[Ns]:9986,[ln]:9729,[Qu]:9985,[Lr]:9987};function ue(P,E,Y){if(Y?(r.texParameteri(P,10242,ee[E.wrapS]),r.texParameteri(P,10243,ee[E.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,ee[E.wrapR]),r.texParameteri(P,10240,te[E.magFilter]),r.texParameteri(P,10241,te[E.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(E.wrapS!==mn||E.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,w(E.magFilter)),r.texParameteri(P,10241,w(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Wt||E.minFilter!==Ns&&E.minFilter!==Lr||E.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Rr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function N(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const ne=E.source;let re=m.get(ne);re===void 0&&(re={},m.set(ne,re));const fe=Q(E);if(fe!==P.__cacheKey){re[fe]===void 0&&(re[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),re[fe].usedTimes++;const Pe=re[P.__cacheKey];Pe!==void 0&&(re[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&O(E)),P.__cacheKey=fe,P.__webglTexture=re[fe].texture}return Y}function Re(P,E,Y){let ne=3553;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=35866),E.isData3DTexture&&(ne=32879);const re=N(P,E),fe=E.source;t.bindTexture(ne,P.__webglTexture,33984+Y);const Pe=n.get(fe);if(fe.version!==Pe.__version||re===!0){t.activeTexture(33984+Y),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const de=y(E)&&b(E.image)===!1;let $=x(E.image,de,!1,u);$=It(E,$);const xe=b($)||a,Se=s.convert(E.format,E.encoding);let Ae=s.convert(E.type),ge=T(E.internalFormat,Se,Ae,E.encoding,E.isVideoTexture);ue(ne,E,xe);let be;const ze=E.mipmaps,Ze=a&&E.isVideoTexture!==!0,ct=Pe.__version===void 0||re===!0,U=M(E,$,xe);if(E.isDepthTexture)ge=6402,a?E.type===Mi?ge=36012:E.type===bi?ge=33190:E.type===Zi?ge=35056:ge=33189:E.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===wi&&ge===6402&&E.type!==Sc&&E.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=bi,Ae=s.convert(E.type)),E.format===er&&ge===6402&&(ge=34041,E.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zi,Ae=s.convert(E.type))),ct&&(Ze?t.texStorage2D(3553,1,ge,$.width,$.height):t.texImage2D(3553,0,ge,$.width,$.height,0,Se,Ae,null));else if(E.isDataTexture)if(ze.length>0&&xe){Ze&&ct&&t.texStorage2D(3553,U,ge,ze[0].width,ze[0].height);for(let W=0,ie=ze.length;W<ie;W++)be=ze[W],Ze?t.texSubImage2D(3553,W,0,0,be.width,be.height,Se,Ae,be.data):t.texImage2D(3553,W,ge,be.width,be.height,0,Se,Ae,be.data);E.generateMipmaps=!1}else Ze?(ct&&t.texStorage2D(3553,U,ge,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,Se,Ae,$.data)):t.texImage2D(3553,0,ge,$.width,$.height,0,Se,Ae,$.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ze&&ct&&t.texStorage3D(35866,U,ge,ze[0].width,ze[0].height,$.depth);for(let W=0,ie=ze.length;W<ie;W++)be=ze[W],E.format!==gn?Se!==null?Ze?t.compressedTexSubImage3D(35866,W,0,0,0,be.width,be.height,$.depth,Se,be.data,0,0):t.compressedTexImage3D(35866,W,ge,be.width,be.height,$.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(35866,W,0,0,0,be.width,be.height,$.depth,Se,Ae,be.data):t.texImage3D(35866,W,ge,be.width,be.height,$.depth,0,Se,Ae,be.data)}else{Ze&&ct&&t.texStorage2D(3553,U,ge,ze[0].width,ze[0].height);for(let W=0,ie=ze.length;W<ie;W++)be=ze[W],E.format!==gn?Se!==null?Ze?t.compressedTexSubImage2D(3553,W,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(3553,W,ge,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,W,0,0,be.width,be.height,Se,Ae,be.data):t.texImage2D(3553,W,ge,be.width,be.height,0,Se,Ae,be.data)}else if(E.isDataArrayTexture)Ze?(ct&&t.texStorage3D(35866,U,ge,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,Se,Ae,$.data)):t.texImage3D(35866,0,ge,$.width,$.height,$.depth,0,Se,Ae,$.data);else if(E.isData3DTexture)Ze?(ct&&t.texStorage3D(32879,U,ge,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,Se,Ae,$.data)):t.texImage3D(32879,0,ge,$.width,$.height,$.depth,0,Se,Ae,$.data);else if(E.isFramebufferTexture){if(ct)if(Ze)t.texStorage2D(3553,U,ge,$.width,$.height);else{let W=$.width,ie=$.height;for(let he=0;he<U;he++)t.texImage2D(3553,he,ge,W,ie,0,Se,Ae,null),W>>=1,ie>>=1}}else if(ze.length>0&&xe){Ze&&ct&&t.texStorage2D(3553,U,ge,ze[0].width,ze[0].height);for(let W=0,ie=ze.length;W<ie;W++)be=ze[W],Ze?t.texSubImage2D(3553,W,0,0,Se,Ae,be):t.texImage2D(3553,W,ge,Se,Ae,be);E.generateMipmaps=!1}else Ze?(ct&&t.texStorage2D(3553,U,ge,$.width,$.height),t.texSubImage2D(3553,0,0,0,Se,Ae,$)):t.texImage2D(3553,0,ge,Se,Ae,$);S(E,xe)&&C(ne),Pe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ce(P,E,Y){if(E.image.length!==6)return;const ne=N(P,E),re=E.source;t.bindTexture(34067,P.__webglTexture,33984+Y);const fe=n.get(re);if(re.version!==fe.__version||ne===!0){t.activeTexture(33984+Y),r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,$=[];for(let W=0;W<6;W++)!Pe&&!de?$[W]=x(E.image[W],!1,!0,c):$[W]=de?E.image[W].image:E.image[W],$[W]=It(E,$[W]);const xe=$[0],Se=b(xe)||a,Ae=s.convert(E.format,E.encoding),ge=s.convert(E.type),be=T(E.internalFormat,Ae,ge,E.encoding),ze=a&&E.isVideoTexture!==!0,Ze=fe.__version===void 0||ne===!0;let ct=M(E,xe,Se);ue(34067,E,Se);let U;if(Pe){ze&&Ze&&t.texStorage2D(34067,ct,be,xe.width,xe.height);for(let W=0;W<6;W++){U=$[W].mipmaps;for(let ie=0;ie<U.length;ie++){const he=U[ie];E.format!==gn?Ae!==null?ze?t.compressedTexSubImage2D(34069+W,ie,0,0,he.width,he.height,Ae,he.data):t.compressedTexImage2D(34069+W,ie,be,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?t.texSubImage2D(34069+W,ie,0,0,he.width,he.height,Ae,ge,he.data):t.texImage2D(34069+W,ie,be,he.width,he.height,0,Ae,ge,he.data)}}}else{U=E.mipmaps,ze&&Ze&&(U.length>0&&ct++,t.texStorage2D(34067,ct,be,$[0].width,$[0].height));for(let W=0;W<6;W++)if(de){ze?t.texSubImage2D(34069+W,0,0,0,$[W].width,$[W].height,Ae,ge,$[W].data):t.texImage2D(34069+W,0,be,$[W].width,$[W].height,0,Ae,ge,$[W].data);for(let ie=0;ie<U.length;ie++){const Me=U[ie].image[W].image;ze?t.texSubImage2D(34069+W,ie+1,0,0,Me.width,Me.height,Ae,ge,Me.data):t.texImage2D(34069+W,ie+1,be,Me.width,Me.height,0,Ae,ge,Me.data)}}else{ze?t.texSubImage2D(34069+W,0,0,0,Ae,ge,$[W]):t.texImage2D(34069+W,0,be,Ae,ge,$[W]);for(let ie=0;ie<U.length;ie++){const he=U[ie];ze?t.texSubImage2D(34069+W,ie+1,0,0,Ae,ge,he.image[W]):t.texImage2D(34069+W,ie+1,be,Ae,ge,he.image[W])}}}S(E,Se)&&C(34067),fe.__version=re.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,Y,ne,re){const fe=s.convert(Y.format,Y.encoding),Pe=s.convert(Y.type),de=T(Y.internalFormat,fe,Pe,Y.encoding);n.get(E).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,de,E.width,E.height,E.depth,0,fe,Pe,null):t.texImage2D(re,0,de,E.width,E.height,0,fe,Pe,null)),t.bindFramebuffer(36160,P),Xe(E)?h.framebufferTexture2DMultisampleEXT(36160,ne,re,n.get(Y).__webglTexture,0,_t(E)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ne,re,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(P,E,Y){if(r.bindRenderbuffer(36161,P),E.depthBuffer&&!E.stencilBuffer){let ne=33189;if(Y||Xe(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Mi?ne=36012:re.type===bi&&(ne=33190));const fe=_t(E);Xe(E)?h.renderbufferStorageMultisampleEXT(36161,fe,ne,E.width,E.height):r.renderbufferStorageMultisample(36161,fe,ne,E.width,E.height)}else r.renderbufferStorage(36161,ne,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(E.depthBuffer&&E.stencilBuffer){const ne=_t(E);Y&&Xe(E)===!1?r.renderbufferStorageMultisample(36161,ne,35056,E.width,E.height):Xe(E)?h.renderbufferStorageMultisampleEXT(36161,ne,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{const ne=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<ne.length;re++){const fe=ne[re],Pe=s.convert(fe.format,fe.encoding),de=s.convert(fe.type),$=T(fe.internalFormat,Pe,de,fe.encoding),xe=_t(E);Y&&Xe(E)===!1?r.renderbufferStorageMultisample(36161,xe,$,E.width,E.height):Xe(E)?h.renderbufferStorageMultisampleEXT(36161,xe,$,E.width,E.height):r.renderbufferStorage(36161,$,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function je(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const ne=n.get(E.depthTexture).__webglTexture,re=_t(E);if(E.depthTexture.format===wi)Xe(E)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(E.depthTexture.format===er)Xe(E)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function ye(P){const E=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");je(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]=r.createRenderbuffer(),Te(E.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Te(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Ue(P,E,Y){const ne=n.get(P);E!==void 0&&oe(ne.__webglFramebuffer,P,P.texture,36064,3553),Y!==void 0&&ye(P)}function lt(P){const E=P.texture,Y=n.get(P),ne=n.get(E);P.addEventListener("dispose",k),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=E.version,o.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,fe=P.isWebGLMultipleRenderTargets===!0,Pe=b(P)||a;if(re){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)Y.__webglFramebuffer[de]=r.createFramebuffer()}else{if(Y.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const de=P.texture;for(let $=0,xe=de.length;$<xe;$++){const Se=n.get(de[$]);Se.__webglTexture===void 0&&(Se.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Xe(P)===!1){const de=fe?E:[E];Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let $=0;$<de.length;$++){const xe=de[$];Y.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[$]);const Se=s.convert(xe.format,xe.encoding),Ae=s.convert(xe.type),ge=T(xe.internalFormat,Se,Ae,xe.encoding,P.isXRRenderTarget===!0),be=_t(P);r.renderbufferStorageMultisample(36161,be,ge,P.width,P.height),r.framebufferRenderbuffer(36160,36064+$,36161,Y.__webglColorRenderbuffer[$])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),ue(34067,E,Pe);for(let de=0;de<6;de++)oe(Y.__webglFramebuffer[de],P,E,36064,34069+de);S(E,Pe)&&C(34067),t.unbindTexture()}else if(fe){const de=P.texture;for(let $=0,xe=de.length;$<xe;$++){const Se=de[$],Ae=n.get(Se);t.bindTexture(3553,Ae.__webglTexture),ue(3553,Se,Pe),oe(Y.__webglFramebuffer,P,Se,36064+$,3553),S(Se,Pe)&&C(3553)}t.unbindTexture()}else{let de=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?de=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ne.__webglTexture),ue(de,E,Pe),oe(Y.__webglFramebuffer,P,E,36064,de),S(E,Pe)&&C(de),t.unbindTexture()}P.depthBuffer&&ye(P)}function xt(P){const E=b(P)||a,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,re=Y.length;ne<re;ne++){const fe=Y[ne];if(S(fe,E)){const Pe=P.isWebGLCubeRenderTarget?34067:3553,de=n.get(fe).__webglTexture;t.bindTexture(Pe,de),C(Pe),t.unbindTexture()}}}function bt(P){if(a&&P.samples>0&&Xe(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,ne=P.height;let re=16384;const fe=[],Pe=P.stencilBuffer?33306:36096,de=n.get(P),$=P.isWebGLMultipleRenderTargets===!0;if($)for(let xe=0;xe<E.length;xe++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let xe=0;xe<E.length;xe++){fe.push(36064+xe),P.depthBuffer&&fe.push(Pe);const Se=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Se===!1&&(P.depthBuffer&&(re|=256),P.stencilBuffer&&(re|=1024)),$&&r.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[xe]),Se===!0&&(r.invalidateFramebuffer(36008,[Pe]),r.invalidateFramebuffer(36009,[Pe])),$){const Ae=n.get(E[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ae,0)}r.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,re,9728),p&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let xe=0;xe<E.length;xe++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,de.__webglColorRenderbuffer[xe]);const Se=n.get(E[xe]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,Se,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function _t(P){return Math.min(f,P.samples)}function Xe(P){const E=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function st(P){const E=o.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function It(P,E){const Y=P.encoding,ne=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===So||Y!==ii&&(Y===ot?a===!1?e.has("EXT_sRGB")===!0&&ne===gn?(P.format=So,P.minFilter=ln,P.generateMipmaps=!1):E=Pc.sRGBToLinear(E):(ne!==gn||re!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),E}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=K,this.setTexture2DArray=ve,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Xe}function yg(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===yi)return 5121;if(s===ef)return 32819;if(s===tf)return 32820;if(s===Ku)return 5120;if(s===Ju)return 5122;if(s===Sc)return 5123;if(s===$u)return 5124;if(s===bi)return 5125;if(s===Mi)return 5126;if(s===Rr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nf)return 6406;if(s===gn)return 6408;if(s===rf)return 6409;if(s===sf)return 6410;if(s===wi)return 6402;if(s===er)return 34041;if(s===So)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===of)return 6403;if(s===af)return 36244;if(s===lf)return 33319;if(s===cf)return 33320;if(s===uf)return 36249;if(s===Os||s===zs||s===Fs||s===ks)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Os)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Os)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ia||s===ra||s===sa||s===oa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ia)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ra)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ff)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===aa||s===la)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===aa)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===la)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ca||s===ua||s===fa||s===ha||s===da||s===pa||s===ma||s===ga||s===_a||s===va||s===xa||s===ba||s===Ma||s===wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ca)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ua)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ha)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===da)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===pa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ma)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ga)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_a)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===va)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ba)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ma)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Bs)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===hf||s===ya||s===Sa||s===Ea)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Bs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ya)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ea)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Sg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eg={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tg extends $t{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:wi,u!==wi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=bi),n===void 0&&u===er&&(n=Zi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1}}class Ag extends sr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=t.getContextAttributes();let m=null,d=null;const g=[],x=[],b=new Set,y=new Map,S=new sn;S.layers.enable(1),S.viewport=new Ut;const C=new sn;C.layers.enable(2),C.viewport=new Ut;const T=[S,C],M=new Sg;M.layers.enable(1),M.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=g[j];return ee===void 0&&(ee=new lo,g[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=g[j];return ee===void 0&&(ee=new lo,g[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=g[j];return ee===void 0&&(ee=new lo,g[j]=ee),ee.getHandSpace()};function k(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const te=g[ee];te!==void 0&&te.dispatchEvent({type:j.type,data:j.inputSource})}function L(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",O);for(let j=0;j<g.length;j++){const ee=x[j];ee!==null&&(x[j]=null,g[j].disconnect(ee))}w=null,z=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",L),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),d=new ri(p.framebufferWidth,p.framebufferHeight,{format:gn,type:yi,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let ee=null,te=null,ue=null;v.depth&&(ue=v.stencil?35056:33190,ee=v.stencil?er:wi,te=v.stencil?Zi:bi);const N={colorFormat:32856,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(N),i.updateRenderState({layers:[h]}),d=new ri(h.textureWidth,h.textureHeight,{format:gn,type:yi,depthTexture:new Tg(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(j){for(let ee=0;ee<j.removed.length;ee++){const te=j.removed[ee],ue=x.indexOf(te);ue>=0&&(x[ue]=null,g[ue].disconnect(te))}for(let ee=0;ee<j.added.length;ee++){const te=j.added[ee];let ue=x.indexOf(te);if(ue===-1){for(let Re=0;Re<g.length;Re++)if(Re>=x.length){x.push(te),ue=Re;break}else if(x[Re]===null){x[Re]=te,ue=Re;break}if(ue===-1)break}const N=g[ue];N&&N.connect(te)}}const B=new I,J=new I;function R(j,ee,te){B.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const ue=B.distanceTo(J),N=ee.projectionMatrix.elements,Re=te.projectionMatrix.elements,Ce=N[14]/(N[10]-1),oe=N[14]/(N[10]+1),Te=(N[9]+1)/N[5],je=(N[9]-1)/N[5],ye=(N[8]-1)/N[0],Ue=(Re[8]+1)/Re[0],lt=Ce*ye,xt=Ce*Ue,bt=ue/(-ye+Ue),_t=bt*-ye;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Xe=Ce+bt,st=oe+bt,It=lt-_t,P=xt+(ue-_t),E=Te*oe/st*Xe,Y=je*oe/st*Xe;j.projectionMatrix.makePerspective(It,P,E,Y,Xe,st),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;M.near=C.near=S.near=j.near,M.far=C.far=S.far=j.far,(w!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,z=M.far);const ee=j.parent,te=M.cameras;H(M,ee);for(let ue=0;ue<te.length;ue++)H(te[ue],ee);te.length===2?R(M,S,C):M.projectionMatrix.copy(S.projectionMatrix),Q(j,M,ee)};function Q(j,ee,te){te===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ue=j.children;for(let N=0,Re=ue.length;N<Re;N++)ue[N].updateMatrixWorld(!0);j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ir*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return b};let K=null;function ve(j,ee){if(u=ee.getViewerPose(c||o),_=ee,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ue=!1;te.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let N=0;N<te.length;N++){const Re=te[N];let Ce=null;if(p!==null)Ce=p.getViewport(Re);else{const Te=f.getViewSubImage(h,Re);Ce=Te.viewport,N===0&&(e.setRenderTargetTextures(d,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(d))}let oe=T[N];oe===void 0&&(oe=new sn,oe.layers.enable(N),oe.viewport=new Ut,T[N]=oe),oe.matrix.fromArray(Re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),N===0&&(M.matrix.copy(oe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(oe)}}for(let te=0;te<g.length;te++){const ue=x[te],N=g[te];ue!==null&&N!==void 0&&N.update(ue,ee,c||o)}if(K&&K(j,ee),ee.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ee.detectedPlanes});let te=null;for(const ue of b)ee.detectedPlanes.has(ue)||(te===null&&(te=[]),te.push(ue));if(te!==null)for(const ue of te)b.delete(ue),y.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of ee.detectedPlanes)if(!b.has(ue))b.add(ue),y.set(ue,ee.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const N=y.get(ue);ue.lastChangedTime>N&&(y.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}_=null}const se=new kc;se.setAnimationLoop(ve),this.setAnimationLoop=function(j){K=j},this.dispose=function(){}}}function Cg(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Nc(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,g,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pg(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(g,x){const b=x.program;n.uniformBlockBinding(g,b)}function c(g,x){let b=i[g.id];b===void 0&&(_(g),b=u(g),i[g.id]=b,g.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(g,y);const S=e.render.frame;s[g.id]!==S&&(h(g),s[g.id]=S)}function u(g){const x=f();g.__bindingPointIndex=x;const b=r.createBuffer(),y=g.__size,S=g.usage;return r.bindBuffer(35345,b),r.bufferData(35345,y,S),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,b),b}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=i[g.id],b=g.uniforms,y=g.__cache;r.bindBuffer(35345,x);for(let S=0,C=b.length;S<C;S++){const T=b[S];if(p(T,S,y)===!0){const M=T.__offset,w=Array.isArray(T.value)?T.value:[T.value];let z=0;for(let k=0;k<w.length;k++){const L=w[k],O=v(L);typeof L=="number"?(T.__data[0]=L,r.bufferSubData(35345,M+z,T.__data)):L.isMatrix3?(T.__data[0]=L.elements[0],T.__data[1]=L.elements[1],T.__data[2]=L.elements[2],T.__data[3]=L.elements[0],T.__data[4]=L.elements[3],T.__data[5]=L.elements[4],T.__data[6]=L.elements[5],T.__data[7]=L.elements[0],T.__data[8]=L.elements[6],T.__data[9]=L.elements[7],T.__data[10]=L.elements[8],T.__data[11]=L.elements[0]):(L.toArray(T.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,T.__data)}}r.bindBuffer(35345,null)}function p(g,x,b){const y=g.value;if(b[x]===void 0){if(typeof y=="number")b[x]=y;else{const S=Array.isArray(y)?y:[y],C=[];for(let T=0;T<S.length;T++)C.push(S[T].clone());b[x]=C}return!0}else if(typeof y=="number"){if(b[x]!==y)return b[x]=y,!0}else{const S=Array.isArray(b[x])?b[x]:[b[x]],C=Array.isArray(y)?y:[y];for(let T=0;T<S.length;T++){const M=S[T];if(M.equals(C[T])===!1)return M.copy(C[T]),!0}}return!1}function _(g){const x=g.uniforms;let b=0;const y=16;let S=0;for(let C=0,T=x.length;C<T;C++){const M=x[C],w={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let k=0,L=z.length;k<L;k++){const O=z[k],B=v(O);w.boundary+=B.boundary,w.storage+=B.storage}if(M.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=b,C>0){S=b%y;const k=y-S;S!==0&&k-w.boundary<0&&(b+=y-S,M.__offset=b)}b+=w.storage}return S=b%y,S>0&&(b+=y-S),g.__size=b,g.__cache={},this}function v(g){const x={boundary:0,storage:0};return typeof g=="number"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const g in i)r.deleteBuffer(i[g]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}function Lg(){const r=Ur("canvas");return r.style.display="block",r}class jc{constructor(e={}){const{canvas:t=Lg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let p=null,_=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ii,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const d=this;let g=!1,x=0,b=0,y=null,S=-1,C=null;const T=new Ut,M=new Ut;let w=null,z=t.width,k=t.height,L=1,O=null,B=null;const J=new Ut(0,0,z,k),R=new Ut(0,0,z,k);let H=!1;const Q=new Oo;let K=!1,ve=!1,se=null;const j=new vt,ee=new I,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return y===null?L:1}let N=n;function Re(A,F){for(let Z=0;Z<A.length;Z++){const G=A[Z],X=t.getContext(G,F);if(X!==null)return X}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Do}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),N===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),N=Re(F,A),N===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,oe,Te,je,ye,Ue,lt,xt,bt,_t,Xe,st,It,P,E,Y,ne,re,fe,Pe,de,$,xe,Se;function Ae(){Ce=new Gp(N),oe=new Np(N,Ce,e),Ce.init(oe),$=new yg(N,Ce,oe),Te=new Mg(N,Ce,oe),je=new Wp,ye=new ag,Ue=new wg(N,Ce,Te,ye,oe,$,je),lt=new zp(d),xt=new Bp(d),bt=new nh(N,oe),xe=new Ip(N,Ce,bt,oe),_t=new Hp(N,bt,je,xe),Xe=new Yp(N,_t,bt,je),fe=new qp(N,oe,Ue),Y=new Op(ye),st=new og(d,lt,xt,Ce,oe,xe,Y),It=new Cg(d,ye),P=new cg,E=new mg(Ce,oe),re=new Dp(d,lt,xt,Te,Xe,h,l),ne=new bg(d,Xe,oe),Se=new Pg(N,je,oe,Te),Pe=new Up(N,Ce,je,oe),de=new Vp(N,Ce,je,oe),je.programs=st.programs,d.capabilities=oe,d.extensions=Ce,d.properties=ye,d.renderLists=P,d.shadowMap=ne,d.state=Te,d.info=je}Ae();const ge=new Ag(d,N);this.xr=ge,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(z,k,!1))},this.getSize=function(A){return A.set(z,k)},this.setSize=function(A,F,Z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,k=F,t.width=Math.floor(A*L),t.height=Math.floor(F*L),Z===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(z*L,k*L).floor()},this.setDrawingBufferSize=function(A,F,Z){z=A,k=F,L=Z,t.width=Math.floor(A*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,F,Z,G){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,F,Z,G),Te.viewport(T.copy(J).multiplyScalar(L).floor())},this.getScissor=function(A){return A.copy(R)},this.setScissor=function(A,F,Z,G){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,F,Z,G),Te.scissor(M.copy(R).multiplyScalar(L).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(A){Te.setScissorTest(H=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,F=!0,Z=!0){let G=0;A&&(G|=16384),F&&(G|=256),Z&&(G|=1024),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),P.dispose(),E.dispose(),ye.dispose(),lt.dispose(),xt.dispose(),Xe.dispose(),xe.dispose(),Se.dispose(),st.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Me),ge.removeEventListener("sessionend",Ke),se&&(se.dispose(),se=null),He.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const A=je.autoReset,F=ne.enabled,Z=ne.autoUpdate,G=ne.needsUpdate,X=ne.type;Ae(),je.autoReset=A,ne.enabled=F,ne.autoUpdate=Z,ne.needsUpdate=G,ne.type=X}function Ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const F=A.target;F.removeEventListener("dispose",ct),U(F)}function U(A){W(A),ye.remove(A)}function W(A){const F=ye.get(A).programs;F!==void 0&&(F.forEach(function(Z){st.releaseProgram(Z)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Z,G,X,ae){F===null&&(F=te);const me=X.isMesh&&X.matrixWorld.determinant()<0,De=Or(A,F,Z,G,X);Te.setMaterial(G,me);let Fe=Z.index,Be=1;G.wireframe===!0&&(Fe=_t.getWireframeAttribute(Z),Be=2);const Ge=Z.drawRange,Ve=Z.attributes.position;let tt=Ge.start*Be,Gt=(Ge.start+Ge.count)*Be;ae!==null&&(tt=Math.max(tt,ae.start*Be),Gt=Math.min(Gt,(ae.start+ae.count)*Be)),Fe!==null?(tt=Math.max(tt,0),Gt=Math.min(Gt,Fe.count)):Ve!=null&&(tt=Math.max(tt,0),Gt=Math.min(Gt,Ve.count));const cn=Gt-tt;if(cn<0||cn===1/0)return;xe.setup(X,G,De,Z,Fe);let ai,wt=Pe;if(Fe!==null&&(ai=bt.get(Fe),wt=de,wt.setIndex(ai)),X.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*ue()),wt.setMode(1)):wt.setMode(4);else if(X.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),Te.setLineWidth(qe*ue()),X.isLineSegments?wt.setMode(1):X.isLineLoop?wt.setMode(2):wt.setMode(3)}else X.isPoints?wt.setMode(0):X.isSprite&&wt.setMode(4);if(X.isInstancedMesh)wt.renderInstances(tt,cn,X.count);else if(Z.isInstancedBufferGeometry){const qe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ps=Math.min(Z.instanceCount,qe);wt.renderInstances(tt,cn,Ps)}else wt.render(tt,cn)},this.compile=function(A,F){function Z(G,X,ae){G.transparent===!0&&G.side===Pn&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,Nn(G,X,ae),G.side=ni,G.needsUpdate=!0,Nn(G,X,ae),G.side=Pn):Nn(G,X,ae)}_=E.get(A),_.init(),m.push(_),A.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights(d.useLegacyLights),A.traverse(function(G){const X=G.material;if(X)if(Array.isArray(X))for(let ae=0;ae<X.length;ae++){const me=X[ae];Z(me,A,G)}else Z(X,A,G)}),m.pop(),_=null};let ie=null;function he(A){ie&&ie(A)}function Me(){He.stop()}function Ke(){He.start()}const He=new kc;He.setAnimationLoop(he),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(A){ie=A,ge.setAnimationLoop(A),A===null?He.stop():He.start()},ge.addEventListener("sessionstart",Me),ge.addEventListener("sessionend",Ke),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(F),F=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,F,y),_=E.get(A,m.length),_.init(),m.push(_),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(j),ve=this.localClippingEnabled,K=Y.init(this.clippingPlanes,ve),p=P.get(A,v.length),p.init(),v.push(p),Tt(A,F,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,B),K===!0&&Y.beginShadows();const Z=_.state.shadowsArray;if(ne.render(Z,A,F),K===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),_.setupLights(d.useLegacyLights),F.isArrayCamera){const G=F.cameras;for(let X=0,ae=G.length;X<ae;X++){const me=G[X];Yt(p,A,me,me.viewport)}}else Yt(p,A,F);y!==null&&(Ue.updateMultisampleRenderTarget(y),Ue.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(d,A,F),xe.resetDefaultState(),S=-1,C=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Tt(A,F,Z,G){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const me=Xe.update(A),De=A.material;De.visible&&p.push(A,me,De,Z,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==je.render.frame&&(A.skeleton.update(),A.skeleton.frame=je.render.frame),!A.frustumCulled||Q.intersectsObject(A))){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const me=Xe.update(A),De=A.material;if(Array.isArray(De)){const Fe=me.groups;for(let Be=0,Ge=Fe.length;Be<Ge;Be++){const Ve=Fe[Be],tt=De[Ve.materialIndex];tt&&tt.visible&&p.push(A,me,tt,Z,ee.z,Ve)}}else De.visible&&p.push(A,me,De,Z,ee.z,null)}}const ae=A.children;for(let me=0,De=ae.length;me<De;me++)Tt(ae[me],F,Z,G)}function Yt(A,F,Z,G){const X=A.opaque,ae=A.transmissive,me=A.transparent;_.setupLightsView(Z),K===!0&&Y.setGlobalState(d.clippingPlanes,Z),ae.length>0&&ht(X,ae,F,Z),G&&Te.viewport(T.copy(G)),X.length>0&&Lt(X,F,Z),ae.length>0&&Lt(ae,F,Z),me.length>0&&Lt(me,F,Z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ht(A,F,Z,G){if(se===null){const De=oe.isWebGL2;se=new ri(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Rr:yi,minFilter:Lr,samples:De&&a===!0?4:0})}const X=d.getRenderTarget();d.setRenderTarget(se),d.clear();const ae=d.toneMapping;d.toneMapping=Rn,Lt(A,Z,G),Ue.updateMultisampleRenderTarget(se),Ue.updateRenderTargetMipmap(se);let me=!1;for(let De=0,Fe=F.length;De<Fe;De++){const Be=F[De],Ge=Be.object,Ve=Be.geometry,tt=Be.material,Gt=Be.group;if(tt.side===Pn&&Ge.layers.test(G.layers)){const cn=tt.side;tt.side=Jt,tt.needsUpdate=!0,Bt(Ge,Z,G,Ve,tt,Gt),tt.side=cn,tt.needsUpdate=!0,me=!0}}me===!0&&(Ue.updateMultisampleRenderTarget(se),Ue.updateRenderTargetMipmap(se)),d.setRenderTarget(X),d.toneMapping=ae}function Lt(A,F,Z){const G=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ae=A.length;X<ae;X++){const me=A[X],De=me.object,Fe=me.geometry,Be=G===null?me.material:G,Ge=me.group;De.layers.test(Z.layers)&&Bt(De,F,Z,Fe,Be,Ge)}}function Bt(A,F,Z,G,X,ae){A.onBeforeRender(d,F,Z,G,X,ae),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(d,F,Z,G,A,ae),X.transparent===!0&&X.side===Pn&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,d.renderBufferDirect(Z,F,G,X,A,ae),X.side=ni,X.needsUpdate=!0,d.renderBufferDirect(Z,F,G,X,A,ae),X.side=Pn):d.renderBufferDirect(Z,F,G,X,A,ae),A.onAfterRender(d,F,Z,G,X,ae)}function Nn(A,F,Z){F.isScene!==!0&&(F=te);const G=ye.get(A),X=_.state.lights,ae=_.state.shadowsArray,me=X.state.version,De=st.getParameters(A,X.state,ae,F,Z),Fe=st.getProgramCacheKey(De);let Be=G.programs;G.environment=A.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(A.isMeshStandardMaterial?xt:lt).get(A.envMap||G.environment),Be===void 0&&(A.addEventListener("dispose",ct),Be=new Map,G.programs=Be);let Ge=Be.get(Fe);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===me)return oi(A,De),Ge}else De.uniforms=st.getUniforms(A),A.onBuild(Z,De,d),A.onBeforeCompile(De,d),Ge=st.acquireProgram(De,Fe),Be.set(Fe,Ge),G.uniforms=De.uniforms;const Ve=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=Y.uniform),oi(A,De),G.needsLights=On(A),G.lightsStateVersion=me,G.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix);const tt=Ge.getUniforms(),Gt=ds.seqWithValue(tt.seq,Ve);return G.currentProgram=Ge,G.uniformsList=Gt,Ge}function oi(A,F){const Z=ye.get(A);Z.outputEncoding=F.outputEncoding,Z.instancing=F.instancing,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Or(A,F,Z,G,X){F.isScene!==!0&&(F=te),Ue.resetTextureUnits();const ae=F.fog,me=G.isMeshStandardMaterial?F.environment:null,De=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ii,Fe=(G.isMeshStandardMaterial?xt:lt).get(G.envMap||me),Be=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ge=!!G.normalMap&&!!Z.attributes.tangent,Ve=!!Z.morphAttributes.position,tt=!!Z.morphAttributes.normal,Gt=!!Z.morphAttributes.color,cn=G.toneMapped?d.toneMapping:Rn,ai=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wt=ai!==void 0?ai.length:0,qe=ye.get(G),Ps=_.state.lights;if(K===!0&&(ve===!0||A!==C)){const en=A===C&&G.id===S;Y.setState(G,A,en)}let Rt=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ps.state.version||qe.outputEncoding!==De||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Fe||G.fog===!0&&qe.fog!==ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Y.numPlanes||qe.numIntersection!==Y.numIntersection)||qe.vertexAlphas!==Be||qe.vertexTangents!==Ge||qe.morphTargets!==Ve||qe.morphNormals!==tt||qe.morphColors!==Gt||qe.toneMapping!==cn||oe.isWebGL2===!0&&qe.morphTargetsCount!==wt)&&(Rt=!0):(Rt=!0,qe.__version=G.version);let li=qe.currentProgram;Rt===!0&&(li=Nn(G,F,X));let Vo=!1,ur=!1,Ls=!1;const Ht=li.getUniforms(),ci=qe.uniforms;if(Te.useProgram(li.program)&&(Vo=!0,ur=!0,Ls=!0),G.id!==S&&(S=G.id,ur=!0),Vo||C!==A){if(Ht.setValue(N,"projectionMatrix",A.projectionMatrix),oe.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),C!==A&&(C=A,ur=!0,Ls=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const en=Ht.map.cameraPosition;en!==void 0&&en.setValue(N,ee.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||X.isSkinnedMesh)&&Ht.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(X.isSkinnedMesh){Ht.setOptional(N,X,"bindMatrix"),Ht.setOptional(N,X,"bindMatrixInverse");const en=X.skeleton;en&&(oe.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Ht.setValue(N,"boneTexture",en.boneTexture,Ue),Ht.setValue(N,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=Z.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&oe.isWebGL2===!0)&&fe.update(X,Z,li),(ur||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Ht.setValue(N,"receiveShadow",X.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ci.envMap.value=Fe,ci.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ur&&(Ht.setValue(N,"toneMappingExposure",d.toneMappingExposure),qe.needsLights&&cr(ci,Ls),ae&&G.fog===!0&&It.refreshFogUniforms(ci,ae),It.refreshMaterialUniforms(ci,G,L,k,se),ds.upload(N,qe.uniformsList,ci,Ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ds.upload(N,qe.uniformsList,ci,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ht.setValue(N,"center",X.center),Ht.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(N,"normalMatrix",X.normalMatrix),Ht.setValue(N,"modelMatrix",X.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const en=G.uniformsGroups;for(let Ds=0,cu=en.length;Ds<cu;Ds++)if(oe.isWebGL2){const Wo=en[Ds];Se.update(Wo,li),Se.bind(Wo,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function cr(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function On(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,F,Z){ye.get(A.texture).__webglTexture=F,ye.get(A.depthTexture).__webglTexture=Z;const G=ye.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const Z=ye.get(A);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Z=0){y=A,x=F,b=Z;let G=!0,X=null,ae=!1,me=!1;if(A){const Fe=ye.get(A);Fe.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(36160,null),G=!1):Fe.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):Fe.__hasExternalTextures&&Ue.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Ge=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(X=Ge[F],ae=!0):oe.isWebGL2&&A.samples>0&&Ue.useMultisampledRTT(A)===!1?X=ye.get(A).__webglMultisampledFramebuffer:X=Ge,T.copy(A.viewport),M.copy(A.scissor),w=A.scissorTest}else T.copy(J).multiplyScalar(L).floor(),M.copy(R).multiplyScalar(L).floor(),w=H;if(Te.bindFramebuffer(36160,X)&&oe.drawBuffers&&G&&Te.drawBuffers(A,X),Te.viewport(T),Te.scissor(M),Te.setScissorTest(w),ae){const Fe=ye.get(A.texture);N.framebufferTexture2D(36160,36064,34069+F,Fe.__webglTexture,Z)}else if(me){const Fe=ye.get(A.texture),Be=F||0;N.framebufferTextureLayer(36160,36064,Fe.__webglTexture,Z||0,Be)}S=-1},this.readRenderTargetPixels=function(A,F,Z,G,X,ae,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(De=De[me]),De){Te.bindFramebuffer(36160,De);try{const Fe=A.texture,Be=Fe.format,Ge=Fe.type;if(Be!==gn&&$.convert(Be)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Rr&&(Ce.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ge!==yi&&$.convert(Ge)!==N.getParameter(35738)&&!(Ge===Mi&&(oe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-G&&Z>=0&&Z<=A.height-X&&N.readPixels(F,Z,G,X,$.convert(Be),$.convert(Ge),ae)}finally{const Fe=y!==null?ye.get(y).__webglFramebuffer:null;Te.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(A,F,Z=0){const G=Math.pow(2,-Z),X=Math.floor(F.image.width*G),ae=Math.floor(F.image.height*G);Ue.setTexture2D(F,0),N.copyTexSubImage2D(3553,Z,0,0,A.x,A.y,X,ae),Te.unbindTexture()},this.copyTextureToTexture=function(A,F,Z,G=0){const X=F.image.width,ae=F.image.height,me=$.convert(Z.format),De=$.convert(Z.type);Ue.setTexture2D(Z,0),N.pixelStorei(37440,Z.flipY),N.pixelStorei(37441,Z.premultiplyAlpha),N.pixelStorei(3317,Z.unpackAlignment),F.isDataTexture?N.texSubImage2D(3553,G,A.x,A.y,X,ae,me,De,F.image.data):F.isCompressedTexture?N.compressedTexSubImage2D(3553,G,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,me,F.mipmaps[0].data):N.texSubImage2D(3553,G,A.x,A.y,me,De,F.image),G===0&&Z.generateMipmaps&&N.generateMipmap(3553),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Z,G,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=A.max.x-A.min.x+1,me=A.max.y-A.min.y+1,De=A.max.z-A.min.z+1,Fe=$.convert(G.format),Be=$.convert(G.type);let Ge;if(G.isData3DTexture)Ue.setTexture3D(G,0),Ge=32879;else if(G.isDataArrayTexture)Ue.setTexture2DArray(G,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment);const Ve=N.getParameter(3314),tt=N.getParameter(32878),Gt=N.getParameter(3316),cn=N.getParameter(3315),ai=N.getParameter(32877),wt=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;N.pixelStorei(3314,wt.width),N.pixelStorei(32878,wt.height),N.pixelStorei(3316,A.min.x),N.pixelStorei(3315,A.min.y),N.pixelStorei(32877,A.min.z),Z.isDataTexture||Z.isData3DTexture?N.texSubImage3D(Ge,X,F.x,F.y,F.z,ae,me,De,Fe,Be,wt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ge,X,F.x,F.y,F.z,ae,me,De,Fe,wt.data)):N.texSubImage3D(Ge,X,F.x,F.y,F.z,ae,me,De,Fe,Be,wt),N.pixelStorei(3314,Ve),N.pixelStorei(32878,tt),N.pixelStorei(3316,Gt),N.pixelStorei(3315,cn),N.pixelStorei(32877,ai),X===0&&G.generateMipmaps&&N.generateMipmap(Ge),Te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){x=0,b=0,y=null,Te.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Rg extends jc{}Rg.prototype.isWebGL1Renderer=!0;class Dg extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Xc extends ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fl=new I,hl=new I,dl=new vt,co=new Uo,ss=new ws;class Jn extends Et{constructor(e=new qt,t=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fl.fromBufferAttribute(t,i-1),hl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fl.distanceTo(hl);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(i),ss.radius+=s,e.ray.intersectsSphere(ss)===!1)return;dl.copy(i).invert(),co.copy(e.ray).applyMatrix4(dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,f=new I,h=new I,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,o.start),g=Math.min(_.count,o.start+o.count);for(let x=d,b=g-1;x<b;x+=p){const y=_.getX(x),S=_.getX(x+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,S),co.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let x=d,b=g-1;x<b;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),co.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class zt extends qt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const v=[],m=n/2;let d=0;g(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function g(){const b=new I,y=new I;let S=0;const C=(t-e)/n;for(let T=0;T<=s;T++){const M=[],w=T/s,z=w*(t-e)+e;for(let k=0;k<=i;k++){const L=k/i,O=L*l+a,B=Math.sin(O),J=Math.cos(O);y.x=z*B,y.y=-w*n+m,y.z=z*J,f.push(y.x,y.y,y.z),b.set(B,C,J).normalize(),h.push(b.x,b.y,b.z),p.push(L,1-w),M.push(_++)}v.push(M)}for(let T=0;T<i;T++)for(let M=0;M<s;M++){const w=v[M][T],z=v[M+1][T],k=v[M+1][T+1],L=v[M][T+1];u.push(w,z,L),u.push(z,k,L),S+=6}c.addGroup(d,S,0),d+=S}function x(b){const y=_,S=new Qe,C=new I;let T=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),_++;const z=_;for(let k=0;k<=i;k++){const O=k/i*l+a,B=Math.cos(O),J=Math.sin(O);C.x=M*J,C.y=m*w,C.z=M*B,f.push(C.x,C.y,C.z),h.push(0,w,0),S.x=B*.5+.5,S.y=J*.5*w+.5,p.push(S.x,S.y),_++}for(let k=0;k<i;k++){const L=y+k,O=z+k;b===!0?u.push(O,O+1,L):u.push(O+1,O,L),T+=3}c.addGroup(d,T,b===!0?1:2),d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fo extends qt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new I,b=new I,y=new I;for(let S=0;S<t.length;S+=3)p(t[S+0],x),p(t[S+1],b),p(t[S+2],y),l(x,b,y,g)}function l(g,x,b,y){const S=y+1,C=[];for(let T=0;T<=S;T++){C[T]=[];const M=g.clone().lerp(b,T/S),w=x.clone().lerp(b,T/S),z=S-T;for(let k=0;k<=z;k++)k===0&&T===S?C[T][k]=M:C[T][k]=M.clone().lerp(w,k/z)}for(let T=0;T<S;T++)for(let M=0;M<2*(S-T)-1;M++){const w=Math.floor(M/2);M%2===0?(h(C[T][w+1]),h(C[T+1][w]),h(C[T][w])):(h(C[T][w+1]),h(C[T+1][w+1]),h(C[T+1][w]))}}function c(g){const x=new I;for(let b=0;b<s.length;b+=3)x.x=s[b+0],x.y=s[b+1],x.z=s[b+2],x.normalize().multiplyScalar(g),s[b+0]=x.x,s[b+1]=x.y,s[b+2]=x.z}function u(){const g=new I;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const b=m(g)/2/Math.PI+.5,y=d(g)/Math.PI+.5;o.push(b,1-y)}_(),f()}function f(){for(let g=0;g<o.length;g+=6){const x=o[g+0],b=o[g+2],y=o[g+4],S=Math.max(x,b,y),C=Math.min(x,b,y);S>.9&&C<.1&&(x<.2&&(o[g+0]+=1),b<.2&&(o[g+2]+=1),y<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,x){const b=g*3;x.x=e[b+0],x.y=e[b+1],x.z=e[b+2]}function _(){const g=new I,x=new I,b=new I,y=new I,S=new Qe,C=new Qe,T=new Qe;for(let M=0,w=0;M<s.length;M+=9,w+=6){g.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),b.set(s[M+6],s[M+7],s[M+8]),S.set(o[w+0],o[w+1]),C.set(o[w+2],o[w+3]),T.set(o[w+4],o[w+5]),y.copy(g).add(x).add(b).divideScalar(3);const z=m(y);v(S,w+0,g,z),v(C,w+2,x,z),v(T,w+4,b,z)}}function v(g,x,b,y){y<0&&g.x===1&&(o[x]=g.x-1),b.x===0&&b.z===0&&(o[x]=y/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.vertices,e.indices,e.radius,e.details)}}class Xi extends Fo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xi(e.radius,e.detail)}}class ko extends qt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new I,h=new I,p=[],_=[],v=[],m=[];for(let d=0;d<=n;d++){const g=[],x=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let y=0;y<=t;y++){const S=y/t;f.x=-e*Math.cos(i+S*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+S*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(S+b,1-x),g.push(c++)}u.push(g)}for(let d=0;d<n;d++)for(let g=0;g<t;g++){const x=u[d][g+1],b=u[d][g],y=u[d+1][g],S=u[d+1][g+1];(d!==0||o>0)&&p.push(x,b,S),(d!==n-1||l<Math.PI)&&p.push(b,y,S)}this.setIndex(p),this.setAttribute("position",new pt(_,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vi extends qt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new I,f=new I,h=new I;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const v=_/i*s,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const v=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,d=(i+1)*(p-1)+_,g=(i+1)*p+_;o.push(v,m,g),o.push(m,d,g)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ig extends ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const pl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ug{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const qc=new Ug;class Yc{constructor(e){this.manager=e!==void 0?e:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Ng extends Yc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ur("img");function l(){u(),pl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ml extends Yc{constructor(e){super(e)}load(e,t,n,i){const s=new $t,o=new Ng(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gl(){return(typeof performance=="undefined"?Date:performance).now()}class Qc{constructor(e,t,n=0,i=1/0){this.ray=new Uo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new No,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ao(e,this,n,t),n.sort(_l),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ao(e[i],this,n,t);return n.sort(_l),n}}function _l(r,e){return r.distance-e.distance}function Ao(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Ao(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const Og=()=>{const r={show:Ye(!1),cameraPosition:Ye({x:0,y:0,z:1}),cameraLookAt:Ye({x:0,y:0,z:10}),objectPosition:Ye({x:0,y:0,z:10}),objectEuler:Ye(new Si(0,0,0,"ZXY")),entity:Ye(0)},e={setupModel(t){r.cameraPosition.set(Hi(t.cameraPosition)),r.cameraLookAt.set(Hi(t.cameraLookAt)),r.objectPosition.set(Hi(t.objectPosition)),r.objectEuler.set(new Si(Kt.degToRad(t.objectRotation.x),Kt.degToRad(t.objectRotation.z),Kt.degToRad(t.objectRotation.y),"YZX")),r.show.set(!0),r.entity.set(t.entity)},updateCamera(t){r.cameraPosition.set(Hi(t.cameraPosition)),r.cameraLookAt.set(Hi(t.cameraLookAt))},updateCameraPosition(t){r.cameraPosition.set(t.cameraPosition)},updateCameraLookAt(t){r.cameraLookAt.set(t.cameraLookAt)},sendMovementUpdate(t){at("moveObject",t)},sendRotationUpdate(t){const n=hs(t);at("rotateObject",{x:Kt.radToDeg(n.x).toFixed(2),y:Kt.radToDeg(n.y).toFixed(2),z:Kt.radToDeg(n.z).toFixed(2)})}};return qn(qn({},r),e)};var _n=Og();function zg(r){let e,t,n,i;const s=r[1].default,o=xn(s,r,r[0],null);return{c(){e=q("div"),o&&o.c(),V(e,"class","absolute")},m(a,l){Oe(a,e,l),o&&o.m(e,null),t=!0,n||(i=uc(Fg.call(null,e,{to:"body"})),n=!0)},p(a,[l]){o&&o.p&&(!t||l&1)&&Mn(o,s,a,a[0],t?bn(s,a[0],l,null):wn(a[0]),null)},i(a){t||(_e(o,a),t=!0)},o(a){we(o,a),t=!1},d(a){a&&Ne(e),o&&o.d(a),n=!1,i()}}}function Fg(r,{to:e}){const t=document.querySelector(e);return t&&t.appendChild(r),{}}function kg(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Kc extends gt{constructor(e){super(),mt(this,e,kg,zg,ft,{})}}function vl(r){let e,t;const n=r[2].default,i=xn(n,r,r[5],null);return{c(){e=q("main"),i&&i.c(),V(e,"class","svelte-1fnr7mh")},m(s,o){Oe(s,e,o),i&&i.m(e,null),t=!0},p(s,o){i&&i.p&&(!t||o&32)&&Mn(i,n,s,s[5],t?bn(n,s[5],o,null):wn(s[5]),null)},i(s){t||(_e(i,s),t=!0)},o(s){we(i,s),t=!1},d(s){s&&Ne(e),i&&i.d(s)}}}function xl(r){let e,t;return e=new Kc({props:{$$slots:{default:[Bg]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&34&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function Bg(r){let e,t,n,i,s,o,a,l,c,u;return{c(){e=q("div"),t=q("div"),n=q("p"),n.textContent="Are you sure you want to exit? You have items in your cart.",i=le(),s=q("div"),o=q("button"),o.textContent="No",a=le(),l=q("button"),l.textContent="Yes",V(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),V(o,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(l,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(s,"class","flex flex-row justify-between w-full gap-[2vw]"),V(t,"class","bg-[color:var(--color-secondary)] absolute w-[50rem] h-[fit] p-[1vw] flex flex-col gap-[1vw] justify-center items-center"),V(e,"class","z-[100] bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 grid place-items-center")},m(f,h){Oe(f,e,h),D(e,t),D(t,n),D(t,i),D(t,s),D(s,o),D(s,a),D(s,l),c||(u=[Le(o,"click",r[3]),Le(l,"click",r[4])],c=!0)},p:St,d(f){f&&Ne(e),c=!1,kt(u)}}}function Gg(r){let e,t,n,i=r[0]&&vl(r),s=r[1]&&r[0]&&xl(r);return{c(){i&&i.c(),e=le(),s&&s.c(),t=si()},m(o,a){i&&i.m(o,a),Oe(o,e,a),s&&s.m(o,a),Oe(o,t,a),n=!0},p(o,[a]){o[0]?i?(i.p(o,a),a&1&&_e(i,1)):(i=vl(o),i.c(),_e(i,1),i.m(e.parentNode,e)):i&&(Wn(),we(i,1,1,()=>{i=null}),jn()),o[1]&&o[0]?s?(s.p(o,a),a&3&&_e(s,1)):(s=xl(o),s.c(),_e(s,1),s.m(t.parentNode,t)):s&&(Wn(),we(s,1,1,()=>{s=null}),jn())},i(o){n||(_e(i),_e(s),n=!0)},o(o){we(i),we(s),n=!1},d(o){i&&i.d(o),o&&Ne(e),s&&s.d(o),o&&Ne(t)}}}function Hg(r,e,t){let n,i;Ee(r,Cn,f=>t(6,n=f)),Ee(r,Ft,f=>t(7,i=f));let{$$slots:s={},$$scope:o}=e,a;Wi.subscribe(f=>{t(0,a=f)}),an("setVisible",f=>{Wi.set(f),f&&Ie(Ft,i=!1,i)});let l=!1;rr(()=>{const f=h=>{a&&["Escape"].includes(h.code)&&(n.length>0?t(1,l=!0):(at("hoverOut"),at("hideUI"),t(1,l=!1),Wi.set(!1),_n.show.set(!1),vn.set(null)))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)});const c=()=>{t(1,l=!1)},u=()=>{at("hideUI"),t(1,l=!1),Wi.set(!1),_n.show.set(!1)};return r.$$set=f=>{"$$scope"in f&&t(5,o=f.$$scope)},[a,l,s,c,u,o]}class Vg extends gt{constructor(e){super(),mt(this,e,Hg,Gg,ft,{})}}const Wg=()=>!window.invokeNative,Co=(r,e=0)=>{if(Wg())for(const t of r)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:t.action,data:t.data}}))},e)};function bl(r,e,t){const n=r.slice();return n[6]=e[t],n}function Ml(r,e,t){const n=r.slice();return n[9]=e[t],n}function wl(r){let e,t=r[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=Sl(bl(r,t,i));return{c(){e=q("div");for(let i=0;i<n.length;i+=1)n[i].c();V(e,"class","w-fit h-fit bg-gray-600 p-2 ")},m(i,s){Oe(i,e,s);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(i,s){if(s&2){t=i[1];let o;for(o=0;o<t.length;o+=1){const a=bl(i,t,o);n[o]?n[o].p(a,s):(n[o]=Sl(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(i){i&&Ne(e),nr(n,i)}}}function yl(r){let e,t=r[9].name+"",n,i,s;function o(){return r[3](r[9])}return{c(){e=q("button"),n=rt(t),V(e,"class","bg-blue-500 text-white p-2")},m(a,l){Oe(a,e,l),D(e,n),i||(s=Le(e,"click",o),i=!0)},p(a,l){r=a},d(a){a&&Ne(e),i=!1,s()}}}function Sl(r){let e,t,n=r[6].component+"",i,s,o,a=r[6].actions,l=[];for(let c=0;c<a.length;c+=1)l[c]=yl(Ml(r,a,c));return{c(){e=q("div"),t=q("p"),i=rt(n),s=le();for(let c=0;c<l.length;c+=1)l[c].c();o=le(),V(t,"class","text-white"),V(e,"class","flex flex-row gap-2 items-center m-1")},m(c,u){Oe(c,e,u),D(e,t),D(t,i),D(e,s);for(let f=0;f<l.length;f+=1)l[f].m(e,null);D(e,o)},p(c,u){if(u&2){a=c[6].actions;let f;for(f=0;f<a.length;f+=1){const h=Ml(c,a,f);l[f]?l[f].p(h,u):(l[f]=yl(h),l[f].c(),l[f].m(e,o))}for(;f<l.length;f+=1)l[f].d(1);l.length=a.length}},d(c){c&&Ne(e),nr(l,c)}}}function jg(r){let e,t,n,i,s,o=r[0]&&wl(r);return{c(){e=q("div"),t=q("button"),t.textContent="Show",n=le(),o&&o.c(),V(t,"class","bg-red-500 text-white p-2"),V(e,"class","absolute top-0 left-1/2 z-[1000]")},m(a,l){Oe(a,e,l),D(e,t),D(e,n),o&&o.m(e,null),i||(s=Le(t,"click",r[2]),i=!0)},p(a,[l]){a[0]?o?o.p(a,l):(o=wl(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:St,o:St,d(a){a&&Ne(e),o&&o.d(),i=!1,s()}}}function Xg(r,e,t){let n=!1,i=[{label:"Item 1",object:"v_res_d_coffeetable",price:100},{label:"Item 2",object:"v_res_d_coffeetable",price:100},{label:"Item 3",object:"v_res_d_coffeetable",price:100},{label:"Item 4",object:"v_res_d_coffeetable",price:100},{label:"Item 5",object:"v_res_d_coffeetable",price:100}];return[n,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"Furniture",actions:[{name:"Set Furniture Data",action:"setFurnituresData",data:[{category:"Category 1",items:i},{category:"Category 2",items:i},{category:"Category 3",items:i},{category:"Category 4",items:i},{category:"Category 5",items:i}]}]}],()=>{t(0,n=!n)},c=>{if(c.custom==!0){c.customFunction();return}Co([{action:c.action,data:c.data}])}]}class qg extends gt{constructor(e){super(),mt(this,e,Xg,jg,ft,{})}}function El(r,e,t){const n=r.slice();return n[15]=e[t],n[17]=t,n}function Tl(r){let e,t,n,i=r[15].label+"",s,o,a,l,c,u,f,h=r[15].price+"",p,_,v,m,d,g;function x(){return r[8](r[15])}function b(){return r[10](r[15])}return{c(){e=q("button"),t=q("div"),n=q("p"),s=rt(i),o=le(),a=q("div"),l=q("p"),l.textContent="Price:",c=le(),u=q("p"),f=rt("$"),p=rt(h),_=le(),v=q("div"),v.innerHTML='<i class="fas fa-eye text-[color:var(--color-text)] text-[2.5rem]"></i>',m=le(),V(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),V(l,"class","text-[color:var(--color-text)] text-[1.2rem]"),V(u,"class","text-[color:var(--color-accent)] ml-2 font-bold text-[1.2rem]"),V(a,"class","flex"),V(t,"class","w-full h-full flex flex-col justify-center items-start ml-10"),V(v,"class","bg-[color:var(--color-tertiary)] aspect-square h-full grid place-items-center justify-center items-center"),V(e,"class","h-full w-[30rem] bg-[color:var(--color-secondary)] flex flex-row items-center hover:cursor-pointer")},m(y,S){Oe(y,e,S),D(e,t),D(t,n),D(n,s),D(t,o),D(t,a),D(a,l),D(a,c),D(a,u),D(u,f),D(u,p),D(e,_),D(e,v),D(e,m),d||(g=[Le(v,"mouseenter",x),Le(v,"mouseleave",r[9]),Le(e,"click",b),Le(e,"mouseleave",r[11])],d=!0)},p(y,S){r=y,S&8&&i!==(i=r[15].label+"")&&At(s,i),S&8&&h!==(h=r[15].price+"")&&At(p,h)},d(y){y&&Ne(e),d=!1,kt(g)}}}function Al(r){let e,t;return e=new Kc({props:{$$slots:{default:[Yg]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&262246&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function Yg(r){let e,t,n,i,s,o,a,l,c,u;return{c(){e=q("div"),t=q("div"),n=q("p"),n.textContent=`Are you sure you want to stop placing this current\r
					furniture?`,i=le(),s=q("div"),o=q("button"),o.textContent="No",a=le(),l=q("button"),l.textContent="Yes",V(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),V(o,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(l,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(s,"class","flex flex-row justify-between w-full gap-[2vw]"),V(t,"class","bg-[color:var(--color-secondary)] absolute w-[50rem] h-[fit] p-[1vw] flex flex-col gap-[1vw] justify-center items-center"),V(e,"class","z-[100] bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 grid place-items-center")},m(f,h){Oe(f,e,h),D(e,t),D(t,n),D(t,i),D(t,s),D(s,o),D(s,a),D(s,l),c||(u=[Le(o,"click",r[13]),Le(l,"click",r[14])],c=!0)},p:St,d(f){f&&Ne(e),c=!1,kt(u)}}}function Zg(r){let e,t,n,i,s,o,a,l=r[3].items,c=[];for(let f=0;f<l.length;f+=1)c[f]=Tl(El(r,l,f));let u=r[1]&&Al(r);return{c(){e=q("div"),t=q("div");for(let f=0;f<c.length;f+=1)c[f].c();n=le(),u&&u.c(),i=si(),V(t,"class","grid grid-rows-2 grid-flow-col-dense gap-[2rem] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style scroll-style-horizontal"),V(e,"class","w-full h-[24rem] bg-[color:var(--color-primary)] p-[2rem] ")},m(f,h){Oe(f,e,h),D(e,t);for(let p=0;p<c.length;p+=1)c[p].m(t,null);r[12](t),Oe(f,n,h),u&&u.m(f,h),Oe(f,i,h),s=!0,o||(a=Le(t,"wheel",r[7]),o=!0)},p(f,[h]){if(h&126){l=f[3].items;let p;for(p=0;p<l.length;p+=1){const _=El(f,l,p);c[p]?c[p].p(_,h):(c[p]=Tl(_),c[p].c(),c[p].m(t,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}f[1]?u?(u.p(f,h),h&2&&_e(u,1)):(u=Al(f),u.c(),_e(u,1),u.m(i.parentNode,i)):u&&(Wn(),we(u,1,1,()=>{u=null}),jn())},i(f){s||(_e(u),s=!0)},o(f){we(u),s=!1},d(f){f&&Ne(e),nr(c,f),r[12](null),f&&Ne(n),u&&u.d(f),f&&Ne(i),o=!1,a()}}}function Qg(r,e,t){let n,i,s,o;Ee(r,ei,g=>t(3,n=g)),Ee(r,qi,g=>t(4,i=g)),Ee(r,vn,g=>t(5,s=g)),Ee(r,Ft,g=>t(6,o=g));let a;function l(g){g=window.event||g;var x=Math.max(-1,Math.min(1,g.wheelDelta||-g.detail));t(0,a.scrollLeft-=x*50,a),g.preventDefault()}let c=!1,u=null;const f=g=>{at("hoverIn",g)},h=()=>{at("hoverOut")},p=g=>{if(at("hoverOut"),g.type){const x=i.filter(y=>y.type===g.type);let b=g.max;if(g.max&&x.length>=b){at("showNotification",{type:"error",message:`You can only have ${b} of this item!`});return}}s!=null?(t(1,c=!0),t(2,u=g)):(at("previewFurniture",g),Ie(vn,s=g,s),Ie(Ft,o=!0,o))},_=()=>{at("hoverOut")};function v(g){Vn[g?"unshift":"push"](()=>{a=g,t(0,a)})}return[a,c,u,n,i,s,o,l,f,h,p,_,v,()=>{t(1,c=!1),t(2,u=null)},()=>{at("previewFurniture",u),Ie(vn,s=u,s),Ie(Ft,o=!0,o),t(1,c=!1),t(2,u=null)}]}class Kg extends gt{constructor(e){super(),mt(this,e,Qg,Zg,ft,{})}}function Jg(r,e,t){let n,i,s,o,a,l;Ee(r,qi,u=>t(0,n=u)),Ee(r,Cn,u=>t(1,i=u)),Ee(r,vn,u=>t(2,s=u)),Ee(r,Ft,u=>t(3,o=u)),Ee(r,gs,u=>t(4,a=u)),Ee(r,Wi,u=>t(5,l=u)),Co([{action:"setVisible",data:!0}]),Co([{action:"setBrowserMode",data:!0}]);function c(u){u.key==="="&&Ie(Wi,l=!0,l)}return an("setBrowserMode",u=>{bs.set(u),console.log("browser mode enabled"),u?window.addEventListener("keydown",c):window.removeEventListener("keydown",c)}),an("setupModel",u=>{_n.show.set(!0),_n.setupModel(u)}),an("updateCamera",u=>{_n.updateCamera(u)}),an("setFurnituresData",u=>{gs.set(u),ei.set(a[0])}),an("addToCart",u=>{Ie(Cn,i=[...i,u],i),_n.show.set(!1),Ie(Ft,o=!1,o)}),an("removeFromCart",u=>{Ie(Cn,i=i.filter(f=>f.entity!=u.entity),i),Ie(Cn,i=[...i],i),Ie(vn,s=null,s),_n.show.set(!1)}),an("clearCart",()=>{Ie(Cn,i=[],i)}),an("setOwnedItems",u=>{Ie(qi,n=u,n)}),an("removeOwnedItem",u=>{let f=n.filter(h=>h.id!=u.id);Ie(qi,n=[...f],n)}),[]}class $g extends gt{constructor(e){super(),mt(this,e,Jg,null,ft,{})}}function Cl(r,e,t){const n=r.slice();return n[20]=e[t],n[22]=t,n}function Pl(r){let e,t,n;return{c(){e=q("input"),e.autofocus=!0,V(e,"class","min-w-[10rem] h-[4.5rem] px-[1rem] text-[1.6rem] bg-[color:var(--color-tertiary)]"),V(e,"type","text"),V(e,"placeholder","Search")},m(i,s){Oe(i,e,s),Tn(e,r[1]),e.focus(),t||(n=Le(e,"input",r[13]),t=!0)},p(i,s){s&2&&e.value!==i[1]&&Tn(e,i[1])},d(i){i&&Ne(e),t=!1,n()}}}function Ll(r){let e,t=r[20].category+"",n,i,s;function o(){return r[15](r[22])}return{c(){e=q("button"),n=rt(t),V(e,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[1.6rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),ms(e,"selected",r[0]===r[22])},m(a,l){Oe(a,e,l),D(e,n),i||(s=Le(e,"click",o),i=!0)},p(a,l){r=a,l&4&&t!==(t=r[20].category+"")&&At(n,t),l&1&&ms(e,"selected",r[0]===r[22])},d(a){a&&Ne(e),i=!1,s()}}}function e_(r){let e,t,n,i,s,o,a,l,c,u,f,h,p,_,v,m=r[9].length+"",d,g,x,b,y,S,C=r[10].length+"",T,M,w,z,k,L,O,B=r[4]&&Pl(r),J=r[2],R=[];for(let H=0;H<J.length;H+=1)R[H]=Ll(Cl(r,J,H));return{c(){e=q("div"),t=q("button"),n=q("button"),n.innerHTML='<i class="fas fa-magnifying-glass text-[1.6rem]"></i>',i=le(),B&&B.c(),o=le(),a=q("div"),l=q("button"),l.textContent="All Objects",c=le();for(let H=0;H<R.length;H+=1)R[H].c();u=le(),f=q("div"),h=q("button"),p=q("p"),p.textContent="Owned Furniture",_=le(),v=q("span"),d=rt(m),g=le(),x=q("button"),b=q("i"),y=le(),S=q("span"),T=rt(C),M=le(),w=q("button"),z=q("i"),V(n,"class","h-[4.5rem] w-[4.5rem] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"),V(t,"class",s="h-[4.5rem] "+(r[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"),V(l,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[1.6rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),ms(l,"selected",r[0]===-1),V(a,"class","w-full h-[5rem] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories svelte-vkl3yg"),V(p,"class","w-fit whitespace-nowrap"),V(v,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),V(h,"class","w-fit px-[2rem] items-center justify-center break h-[4.5rem] text-[1.6rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"),V(b,"class","fas fa-shopping-cart"),V(S,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),V(x,"class","h-[4.5rem] w-fit px-[2rem] text-[1.6rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),V(z,"class",k="fas fa-chevron-"+(r[6]?"up":"down")),V(w,"class","h-[4.5rem] w-fit aspect-square text-[1.6rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),V(f,"class","overflow-y-visible flex flex-row gap-2 ml-auto"),V(e,"class","w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap")},m(H,Q){Oe(H,e,Q),D(e,t),D(t,n),D(t,i),B&&B.m(t,null),D(e,o),D(e,a),D(a,l),D(a,c);for(let K=0;K<R.length;K+=1)R[K].m(a,null);r[16](a),D(e,u),D(e,f),D(f,h),D(h,p),D(h,_),D(h,v),D(v,d),D(f,g),D(f,x),D(x,b),D(x,y),D(x,S),D(S,T),D(f,M),D(f,w),D(w,z),L||(O=[Le(n,"click",r[12]),Le(l,"click",r[14]),Le(a,"wheel",r[11]),Le(h,"click",r[17]),Le(x,"click",r[18]),Le(w,"click",r[19])],L=!0)},p(H,[Q]){if(H[4]?B?B.p(H,Q):(B=Pl(H),B.c(),B.m(t,null)):B&&(B.d(1),B=null),Q&16&&s!==(s="h-[4.5rem] "+(H[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center")&&V(t,"class",s),Q&1&&ms(l,"selected",H[0]===-1),Q&101){J=H[2];let K;for(K=0;K<J.length;K+=1){const ve=Cl(H,J,K);R[K]?R[K].p(ve,Q):(R[K]=Ll(ve),R[K].c(),R[K].m(a,null))}for(;K<R.length;K+=1)R[K].d(1);R.length=J.length}Q&512&&m!==(m=H[9].length+"")&&At(d,m),Q&1024&&C!==(C=H[10].length+"")&&At(T,C),Q&64&&k!==(k="fas fa-chevron-"+(H[6]?"up":"down"))&&V(z,"class",k)},i:St,o:St,d(H){H&&Ne(e),B&&B.d(),nr(R,H),r[16](null),L=!1,kt(O)}}}function t_(r,e,t){let n,i,s,o,a,l,c;Ee(r,gs,C=>t(2,n=C)),Ee(r,ei,C=>t(5,i=C)),Ee(r,Ft,C=>t(6,s=C)),Ee(r,Sr,C=>t(7,o=C)),Ee(r,Er,C=>t(8,a=C)),Ee(r,qi,C=>t(9,l=C)),Ee(r,Cn,C=>t(10,c=C));let u=-1,f;function h(C){C=window.event||C;var T=Math.max(-1,Math.min(1,C.wheelDelta||-C.detail));t(3,f.scrollLeft-=T*50,f),C.preventDefault()}let p=!1,_="";const v=()=>{t(4,p=!p),s&&Ie(Ft,s=!1,s)};function m(){_=this.value,t(1,_)}const d=()=>{t(0,u=-1);const C=n.flatMap(T=>T.items);Ie(ei,i={category:"All Objects",items:C},i),s&&Ie(Ft,s=!1,s)},g=C=>{t(0,u=C),Ie(ei,i=n[C],i),s&&Ie(Ft,s=!1,s)};function x(C){Vn[C?"unshift":"push"](()=>{f=C,t(3,f)})}const b=()=>{Ie(Sr,o=!1,o),Ie(Er,a=!a,a)},y=()=>{Ie(Er,a=!1,a),Ie(Sr,o=!o,o)},S=()=>{Ie(Ft,s=!s,s)};return r.$$.update=()=>{if(r.$$.dirty&7)if(_.length>0){let C=null;u==-1?C=n.flatMap(M=>M.items):C=n[u].items;const T=C.filter(M=>M.label.toLowerCase().includes(_.toLowerCase()));Ie(ei,i={category:"Search Results",items:T},i)}else if(u===-1){const C=n.flatMap(T=>T.items);Ie(ei,i={category:"All Objects",items:C},i)}else Ie(ei,i=n[u],i)},[u,_,n,f,p,i,s,o,a,l,c,h,v,m,d,g,x,b,y,S]}class n_ extends gt{constructor(e){super(),mt(this,e,t_,e_,ft,{})}}function Rl(r,e,t){const n=r.slice();return n[7]=e[t],n[9]=t,n}function Dl(r){let e,t,n,i,s,o,a,l,c,u,f,h=r[1].reduce(Ul,0)+"",p,_,v,m,d,g,x,b,y=r[1],S=[];for(let C=0;C<y.length;C+=1)S[C]=Il(Rl(r,y,C));return{c(){e=q("div"),t=q("div"),t.innerHTML="<p>YOUR SHOPPING CART</p>",n=le(),i=q("div");for(let C=0;C<S.length;C+=1)S[C].c();s=le(),o=q("div"),a=q("div"),l=q("h1"),l.textContent="SUBTOTAL:",c=le(),u=q("h1"),f=rt("$"),p=rt(h),_=le(),v=q("div"),m=q("button"),m.innerHTML='<i class="fa-solid fa-xmark"></i>',d=le(),g=q("button"),g.innerHTML="<p>Purchase</p>",V(t,"class","font-medium"),V(i,"class","flex flex-col gap-2 overflow-scroll h-[73%] scroll-style scroll-style-vertical"),V(a,"class","text-[1.6rem] w-full h-full flex items-center justify-between"),V(m,"class","bg-[color:var(--color-secondary)] mt-2 font-medium h-full w-[20%] py-14 gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"),V(g,"class","bg-[color:var(--color-accent)] text-[2rem] mt-2 font-medium h-full w-[79%] py-14 gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"),V(v,"class","flex w-full h-full justify-between"),V(o,"class","flex flex-col gap-2 items-center justify-center h-[5rem] mt-10"),V(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem] p-12")},m(C,T){Oe(C,e,T),D(e,t),D(e,n),D(e,i);for(let M=0;M<S.length;M+=1)S[M].m(i,null);D(e,s),D(e,o),D(o,a),D(a,l),D(a,c),D(a,u),D(u,f),D(u,p),D(o,_),D(o,v),D(v,m),D(v,d),D(v,g),x||(b=[Le(m,"click",r[5]),Le(g,"click",r[6])],x=!0)},p(C,T){if(T&2){y=C[1];let M;for(M=0;M<y.length;M+=1){const w=Rl(C,y,M);S[M]?S[M].p(w,T):(S[M]=Il(w),S[M].c(),S[M].m(i,null))}for(;M<S.length;M+=1)S[M].d(1);S.length=y.length}T&2&&h!==(h=C[1].reduce(Ul,0)+"")&&At(p,h)},d(C){C&&Ne(e),nr(S,C),x=!1,kt(b)}}}function Il(r){let e,t,n,i=r[7].label+"",s,o,a,l,c,u,f,h=r[7].price+"",p,_,v,m,d,g;function x(){return r[3](r[7])}function b(){return r[4](r[7])}return{c(){e=q("button"),t=q("div"),n=q("h1"),s=rt(i),o=le(),a=q("div"),l=q("h1"),l.textContent="Price:",c=le(),u=q("h1"),f=rt("$"),p=rt(h),_=le(),v=q("button"),v.innerHTML='<i class="fa-solid fa-trash"></i>',m=le(),V(n,"class","text-[2rem]"),V(u,"class","text-[color:var(--color-accent)] font-bold ml-2"),V(a,"class","flex text-[1.5rem]"),V(t,"class","flex flex-col gap-2 w-full text-start ml-10"),V(v,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"),V(e,"class","flex flex-row gap-2 w-full min-h-[8rem] justify-between bg-[color:var(--color-secondary)] items-center")},m(y,S){Oe(y,e,S),D(e,t),D(t,n),D(n,s),D(t,o),D(t,a),D(a,l),D(a,c),D(a,u),D(u,f),D(u,p),D(e,_),D(e,v),D(e,m),d||(g=[Le(v,"click",x),Le(e,"click",b)],d=!0)},p(y,S){r=y,S&2&&i!==(i=r[7].label+"")&&At(s,i),S&2&&h!==(h=r[7].price+"")&&At(p,h)},d(y){y&&Ne(e),d=!1,kt(g)}}}function i_(r){let e,t=r[0]&&Dl(r);return{c(){t&&t.c(),e=si()},m(n,i){t&&t.m(n,i),Oe(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=Dl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:St,o:St,d(n){t&&t.d(n),n&&Ne(e)}}}const Ul=(r,e)=>r+e.price;function r_(r,e,t){let n,i,s;return Ee(r,Sr,u=>t(0,n=u)),Ee(r,Cn,u=>t(1,i=u)),Ee(r,vn,u=>t(2,s=u)),[n,i,s,u=>{at("removeCartItem",u)},u=>{at("selectCartItem",u)},()=>Ie(Sr,n=!1,n),()=>{Ie(vn,s=null,s),at("buyCartItems")}]}class s_ extends gt{constructor(e){super(),mt(this,e,r_,i_,ft,{})}}function Nl(r,e,t){const n=r.slice();return n[5]=e[t],n[7]=t,n}function Ol(r){let e,t,n,i,s,o,a,l,c,u=r[1],f=[];for(let h=0;h<u.length;h+=1)f[h]=zl(Nl(r,u,h));return{c(){e=q("div"),t=q("div"),n=q("h1"),n.textContent="Owned Items",i=le(),s=q("button"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',o=le(),a=q("div");for(let h=0;h<f.length;h+=1)f[h].c();V(n,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"),V(s,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"),V(t,"class","flex flex-row gap-2"),V(a,"class","flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"),V(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]")},m(h,p){Oe(h,e,p),D(e,t),D(t,n),D(t,i),D(t,s),D(e,o),D(e,a);for(let _=0;_<f.length;_+=1)f[_].m(a,null);l||(c=Le(s,"click",r[2]),l=!0)},p(h,p){if(p&2){u=h[1];let _;for(_=0;_<u.length;_+=1){const v=Nl(h,u,_);f[_]?f[_].p(v,p):(f[_]=zl(v),f[_].c(),f[_].m(a,null))}for(;_<f.length;_+=1)f[_].d(1);f.length=u.length}},d(h){h&&Ne(e),nr(f,h),l=!1,c()}}}function zl(r){let e,t,n,i,s,o=r[5].label+"",a,l,c,u,f,h;function p(){return r[3](r[5])}function _(){return r[4](r[5])}return{c(){e=q("div"),t=q("button"),t.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',n=le(),i=q("div"),s=q("h1"),a=rt(o),l=le(),c=q("button"),c.innerHTML='<i class="fa-solid fa-xmark"></i>',u=le(),V(t,"class","bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"),V(s,"class","text-[2rem]"),V(i,"class","flex flex-col gap-2 w-full"),V(c,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"),V(e,"class","flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center")},m(v,m){Oe(v,e,m),D(e,t),D(e,n),D(e,i),D(i,s),D(s,a),D(e,l),D(e,c),D(e,u),f||(h=[Le(t,"click",p),Le(c,"click",_)],f=!0)},p(v,m){r=v,m&2&&o!==(o=r[5].label+"")&&At(a,o)},d(v){v&&Ne(e),f=!1,kt(h)}}}function o_(r){let e,t=r[0]&&Ol(r);return{c(){t&&t.c(),e=si()},m(n,i){t&&t.m(n,i),Oe(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=Ol(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:St,o:St,d(n){t&&t.d(n),n&&Ne(e)}}}function a_(r,e,t){let n,i;return Ee(r,Er,l=>t(0,n=l)),Ee(r,qi,l=>t(1,i=l)),[n,i,()=>Ie(Er,n=!1,n),l=>{at("selectOwnedItem",l)},l=>{at("removeOwnedItem",l)}]}class l_ extends gt{constructor(e){super(),mt(this,e,a_,o_,ft,{})}}function c_(r){let e,t,n,i,s,o,a,l,c,u,f,h,p,_,v,m,d,g,x=r[1].toFixed(1)+"",b,y,S,C,T,M,w;return t=new n_({}),i=new Kg({}),o=new s_({}),l=new l_({}),{c(){e=q("div"),nt(t.$$.fragment),n=le(),nt(i.$$.fragment),s=le(),nt(o.$$.fragment),a=le(),nt(l.$$.fragment),c=le(),u=q("div"),f=q("i"),h=le(),p=q("p"),p.textContent="C",_=le(),v=q("div"),m=q("i"),d=le(),g=q("p"),b=rt(x),y=le(),S=q("input"),V(f,"class","fa-solid fa-video text-[white]"),V(p,"class","font-semibold"),Zo(u,"border-color",r[0]?"white":"var(--color-tertiary)"),V(u,"class","absolute -top-[5rem] text-[2rem] right-0 w-[8rem] border-[0.3rem] h-[4rem] bg-[color:var(--color-primary)] flex flex-row gap-[1rem] items-center justify-center"),V(m,"class","fa-solid fa-eye text-[white]"),V(g,"class","font-semibold text-center w-[4rem]"),V(S,"id","slider"),V(S,"type","range"),V(S,"min","1.0"),V(S,"max","12.5"),V(S,"step","0.5"),V(S,"class","w-full"),V(v,"class","flex flex-row gap-[1rem] items-center absolute left-0 -top-[5rem] w-[30rem] h-fit p-4 bg-[color:var(--color-primary)]"),V(e,"class",C="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(r[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1] transition-all")},m(z,k){Oe(z,e,k),$e(t,e,null),D(e,n),$e(i,e,null),D(e,s),$e(o,e,null),D(e,a),$e(l,e,null),D(e,c),D(e,u),D(u,f),D(u,h),D(u,p),D(e,_),D(e,v),D(v,m),D(v,d),D(v,g),D(g,b),D(v,y),D(v,S),Tn(S,r[1]),T=!0,M||(w=[Le(S,"change",r[3]),Le(S,"input",r[3]),Le(S,"change",r[4])],M=!0)},p(z,[k]){(!T||k&1)&&Zo(u,"border-color",z[0]?"white":"var(--color-tertiary)"),(!T||k&2)&&x!==(x=z[1].toFixed(1)+"")&&At(b,x),k&2&&Tn(S,z[1]),(!T||k&4&&C!==(C="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(z[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1] transition-all"))&&V(e,"class",C)},i(z){T||(_e(t.$$.fragment,z),_e(i.$$.fragment,z),_e(o.$$.fragment,z),_e(l.$$.fragment,z),T=!0)},o(z){we(t.$$.fragment,z),we(i.$$.fragment,z),we(o.$$.fragment,z),we(l.$$.fragment,z),T=!1},d(z){z&&Ne(e),et(t),et(i),et(o),et(l),M=!1,kt(w)}}}function u_(r,e,t){let n;Ee(r,Ft,c=>t(2,n=c));let i=!1,s=5;function o(c){c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement||c.key==="c"&&(at("freecamMode",!0),Ie(Ft,n=!0,n),t(0,i=!0))}an("freecamMode",c=>{c==!1&&(Ie(Ft,n=!1,n),t(0,i=!1))}),rr(()=>{window.addEventListener("keypress",o),at("freecamMode",!1),at("setHoverDistance",s),Ie(Ft,n=!1,n),t(0,i=!1)});function a(){s=cs(this.value),t(1,s)}return[i,s,n,a,()=>{at("setHoverDistance",s)}]}class f_ extends gt{constructor(e){super(),mt(this,e,u_,c_,ft,{})}}const h_={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const d_=new Bc(-1,1,1,-1,0,1),Bo=new qt;Bo.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));Bo.setAttribute("uv",new pt([0,2,0,0,2,0],2));class p_{constructor(e){this._mesh=new pe(Bo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class m_ extends Ts{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oc.clone(e.uniforms),this.material=new Xn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new p_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fl extends Ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class g_ extends Ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class __{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Qe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new m_(h_),this.clock=new Zc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fl!==void 0&&(o instanceof Fl?n=!0:o instanceof g_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jc extends Ts{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const v_=(r,e,t)=>{r.renderer=new jc(qn({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0},t)),r.composer=new __(r.renderer),r.composer.addPass(new Jc(r.scene,Ro(r.camera)))},kl=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=ii:r.renderer.outputEncoding=ot,t?r.renderer.toneMapping=Rn:r.renderer.toneMapping=wc)},Bl=(r,e,t)=>{var n,i,s,o,a,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},Gl=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Ln=r=>r.userData,x_=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},$c=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),b_=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,M_=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);ut(i);let s;const o=r.pointer.subscribe(c=>s=c);ut(o);let a;const l=c=>{var h,p;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,x_(r,c);const f=w_(e,s,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!y_(f,a)){a=null;return}a=null}!f||(p=(h=Ln(f.object)).eventDispatcher)==null||p.call(h,u,Is(qn({},f),{event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function w_(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=$c(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function y_(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const S_=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);ut(n);let i;const s=r.camera.subscribe(c=>i=c);ut(s);let o;const a=r.pointer.subscribe(c=>o=c);return ut(a),{raycast:()=>{var f,h,p,_,v,m,d,g;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?$c(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&b_(e.lastIntersection,u)&&((m=(v=Ln(e.lastIntersection.object)).eventDispatcher)==null||m.call(v,"pointerleave",e.lastIntersection),(g=(d=Ln(u.object)).eventDispatcher)==null||g.call(d,"pointerenter",u)):(_=(p=Ln(u.object)).eventDispatcher)==null||_.call(p,"pointerenter",u):e.lastIntersection&&((h=(f=Ln(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},As=typeof window!="undefined",E_=r=>{if(!As)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),ut(()=>{!e||cancelAnimationFrame(e)})},T_=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var o,a;return((o=i.order)!=null?o:0)>((a=s.order)!=null?a:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},A_=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},C_=(r,e,t,n)=>{let i=Ro(r.camera);const s=r.camera.subscribe(a=>i=a);ut(s);const{raycast:o}=S_(r,e);E_(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(T_(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),A_(t),t.frameInvalidated=!1,t.advance=!1))})},P_=()=>{const r=new sn(75,0,.1,1e3);return Ln(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},L_=r=>{const e=r.size.subscribe(t=>{Ln(Ro(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});ut(e)},R_=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(d,g)=>{if(g=g!=null?g:"default",a.audioListeners.has(g)){console.warn(`An AudioListener with the id "${g}" has already been added, aborting.`);return}a.audioListeners.set(g,d)},removeAudioListener:d=>{if(d=d!=null?d:"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}a.audioListeners.delete(d)},getAudioListener:d=>{if(d=d!=null?d:"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}return a.audioListeners.get(d)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:wu([n,i],([d,g])=>d||g),pointer:Ye(new Qe),pointerOverCanvas:Ye(!1),clock:new Zc,camera:Ye(P_()),scene:new Dg,renderer:void 0,composer:void 0,invalidate:d=>{l.frameInvalidated=!0,l.debugFrameloop&&d&&(l.invalidations[d]=l.invalidations[d]?l.invalidations[d]+1:1)},advance:()=>{l.advance=!0}},u={flat:Ye(e),linear:Ye(r),dpr:Ye(t),setCamera:d=>{c.camera.set(d),c.composer&&(c.composer.passes.forEach(g=>{g instanceof Jc&&(g.camera=d)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Qc,lastIntersection:null,addRaycastableObject:d=>{u.raycastableObjects.add(d)},removeRaycastableObject:d=>{u.raycastableObjects.delete(d)},addInteractiveObject:d=>{u.interactiveObjects.add(d)},removeInteractiveObject:d=>{u.interactiveObjects.delete(d)},addPass:d=>{!c.composer||(c.composer.addPass(d),c.invalidate("Canvas: adding pass"))},removePass:d=>{!c.composer||(c.composer.removePass(d),c.invalidate("Canvas: removing pass"))}},f={dispose:async(d=!1)=>{await Pr(),!(!f.shouldDispose&&!d)&&(f.disposableObjects.forEach((g,x)=>{var b;(g===0||d)&&((b=x==null?void 0:x.dispose)==null||b.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(d,g)=>{const x=g!=null?g:[];return d&&((d==null?void 0:d.dispose)&&typeof d.dispose=="function"&&d.type!=="Scene"&&x.push(d),Object.entries(d).forEach(([b,y])=>{if(b==="parent"||b==="children"||typeof y!="object")return;const S=y;S!=null&&S.dispose&&f.collectDisposableObjects(S,x)})),x},addDisposableObjects:d=>{d.forEach(g=>{const x=f.disposableObjects.get(g);x?f.disposableObjects.set(g,x+1):f.disposableObjects.set(g,1)})},removeDisposableObjects:d=>{d.length!==0&&(d.forEach(g=>{const x=f.disposableObjects.get(g);x&&x>0&&f.disposableObjects.set(g,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return pn("threlte",c),pn("threlte-root",u),pn("threlte-render-context",l),pn("threlte-audio-context",a),pn("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function Cs(r,e){const t=Ye(r);let n=r;const i=t.subscribe(a=>n=a);ut(i);const s=a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},o=a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)};return Is(qn({},t),{set:s,update:o})}const Un=()=>In("threlte");function D_(r){let e;const t=r[8].default,n=xn(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Mn(n,t,i,i[7],e?bn(t,i[7],s,null):wn(i[7]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}const I_=()=>({onChildMount:In("threlte-hierarchical-object-on-mount"),onChildDestroy:In("threlte-hierarchical-object-on-destroy")}),eu=()=>In("threlte-hierarchical-parent-context");function U_(r,e,t){var d;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=g=>{a.push(g),t(1,a),l==null||l(g)};let{onChildDestroy:u=void 0}=e;const f=g=>{const x=a.findIndex(b=>b.uuid===g.uuid);x!==-1&&a.splice(x,1),t(1,a),u==null||u(g)},{invalidate:h}=Un(),p=eu();Ee(r,p,g=>t(6,n=g));let{parent:_=n}=e;const v=I_();o&&((d=v.onChildMount)==null||d.call(v,o),h("HierarchicalObject: object added"));const m=Cs(o,(g,x)=>{var b,y;x&&((b=v.onChildDestroy)==null||b.call(v,x),h("HierarchicalObject: object added")),g&&((y=v.onChildMount)==null||y.call(v,g),h("HierarchicalObject: object removed"))});return ut(()=>{var g;o&&((g=v.onChildDestroy)==null||g.call(v,o),h("HierarchicalObject: object removed"))}),pn("threlte-hierarchical-object-on-mount",c),pn("threlte-hierarchical-object-on-destroy",f),pn("threlte-hierarchical-parent-context",m),r.$$set=g=>{"object"in g&&t(3,o=g.object),"children"in g&&t(1,a=g.children),"onChildMount"in g&&t(4,l=g.onChildMount),"onChildDestroy"in g&&t(5,u=g.onChildDestroy),"parent"in g&&t(2,_=g.parent),"$$scope"in g&&t(7,s=g.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,_=n),r.$$.dirty&8&&m.set(o)},[p,a,_,o,l,u,n,s,i]}class N_ extends gt{constructor(e){super(),mt(this,e,U_,D_,ft,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function O_(r){let e;const t=r[1].default,n=xn(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Mn(n,t,i,i[4],e?bn(t,i[4],s,null):wn(i[4]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function z_(r){let e,t;return e=new N_({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[O_]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function F_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class Go extends gt{constructor(e){super(),mt(this,e,F_,z_,ft,{object:0})}}const k_=()=>{const r=Ye({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);ut(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return As?(ut(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Hl(r){let e,t;return e=new Go({props:{object:r[0].scene,$$slots:{default:[B_]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function B_(r){let e;const t=r[29].default,n=xn(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Mn(n,t,i,i[33],e?bn(t,i[33],s,null):wn(i[33]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function G_(r){let e,t,n,i,s=r[2]&&Hl(r);return{c(){e=q("canvas"),s&&s.c(),V(e,"class","svelte-o3oskp")},m(o,a){Oe(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[uc(r[3].call(null,e)),Le(e,"click",r[9]),Le(e,"contextmenu",r[10]),Le(e,"pointerup",r[13]),Le(e,"pointerdown",r[11]),Le(e,"pointermove",r[12]),Le(e,"pointerenter",r[31]),Le(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&_e(s,1)):(s=Hl(o),s.c(),_e(s,1),s.m(e,null)):s&&(Wn(),we(s,1,1,()=>{s=null}),jn())},i(o){t||(_e(s),t=!0)},o(o){we(s),t=!1},d(o){o&&Ne(e),s&&s.d(),r[30](null),n=!1,kt(i)}}}const Vl=new Set;function H_(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=As?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:_=!0}=e,{shadowMapType:v=vc}=e,{size:m=void 0}=e,{rendererParameters:d=void 0}=e,g,x=!1;const b=Ye(m),{parentSize:y,parentSizeAction:S}=k_(),C=R_(f,u,c,b,y,p,h),{getCtx:T,renderCtx:M,disposalCtx:w}=C,{ctx:z,rootCtx:k,audioCtx:L}=C;L_(z),Vl.add(z.invalidate),ut(()=>{Vl.delete(z.invalidate)});const{size:O,scene:B}=z;Ee(r,O,N=>t(26,i=N));const{flat:J,linear:R,dpr:H}=k;Ee(r,J,N=>t(27,s=N)),Ee(r,R,N=>t(28,o=N)),Ee(r,H,N=>t(25,n=N)),pn("threlte-parent",Ye(B)),rr(()=>{!g||(v_(z,g,d),kl(z,o,s),Bl(z,i,n),Gl(z,_,v),t(2,x=!0))}),C_(z,k,M,w);const{onClick:Q,onContextMenu:K,onPointerDown:ve,onPointerMove:se,onPointerUp:j}=M_(z,k,M);ut(()=>{w.dispose(!0)});function ee(N){Vn[N?"unshift":"push"](()=>{g=N,t(1,g)})}const te=()=>T().pointerOverCanvas.set(!0),ue=()=>T().pointerOverCanvas.set(!1);return r.$$set=N=>{"dpr"in N&&t(14,c=N.dpr),"flat"in N&&t(15,u=N.flat),"linear"in N&&t(16,f=N.linear),"frameloop"in N&&t(17,h=N.frameloop),"debugFrameloop"in N&&t(18,p=N.debugFrameloop),"shadows"in N&&t(19,_=N.shadows),"shadowMapType"in N&&t(20,v=N.shadowMapType),"size"in N&&t(21,m=N.size),"rendererParameters"in N&&t(22,d=N.rendererParameters),"$$scope"in N&&t(33,l=N.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&b.set(m),r.$$.dirty[0]&65536&&Ie(R,o=f,o),r.$$.dirty[0]&32768&&Ie(J,s=u,s),r.$$.dirty[0]&16384&&Ie(H,n=c,n),r.$$.dirty[0]&402653184&&kl(T(),o,s),r.$$.dirty[0]&100663296&&Bl(T(),i,n),r.$$.dirty[0]&1572864&&Gl(T(),_,v)},[z,g,x,S,T,O,J,R,H,Q,K,ve,se,j,c,u,f,h,p,_,v,m,d,k,L,n,i,s,o,a,ee,te,ue,l]}class V_ extends gt{constructor(e){super(),mt(this,e,H_,G_,ft,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const tu=()=>In("threlte-root"),W_=()=>In("threlte-disposal-context");function j_(r){let e;const t=r[9].default,n=xn(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Mn(n,t,i,i[8],e?bn(t,i[8],s,null):wn(i[8]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}const Wl="threlte-disposable-object-context";function X_(r,e,t){var m;let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=W_();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const p=In(Wl);Ee(r,p,d=>t(7,i=d));const _=Ye((m=h!=null?h:i)!=null?m:!0);Ee(r,_,d=>t(6,n=d)),pn(Wl,_);let v=n?a(u):[];return l(v),ut(()=>{c(v)}),r.$$set=d=>{"object"in d&&t(2,u=d.object),"dispose"in d&&t(3,h=d.dispose),"$$scope"in d&&t(8,o=d.$$scope)},r.$$.update=()=>{var d;r.$$.dirty&136&&_.set((d=h!=null?h:i)!=null?d:!0),r.$$.dirty&116&&u!==f&&(c(v),t(5,v=n?a(u):[]),l(v),t(4,f=u))},[p,_,u,h,f,v,n,i,o,s]}class Ho extends gt{constructor(e){super(),mt(this,e,X_,j_,ft,{object:2,dispose:3})}}function q_(r,e,t){let n,i,{object:s}=e;const o=Cs(s);Ee(r,o,c=>t(4,i=c));const a=In("threlte-layers");Ee(r,a,c=>t(3,n=c));const{invalidate:l}=Un();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&o.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,s,n,i]}class nu extends gt{constructor(e){super(),mt(this,e,q_,null,ft,{object:2})}}const iu=(r,e)=>{var a;if(!As)return{start:()=>{},stop:()=>{},started:pc(!1)};const t=In("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Ye(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),ut(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},ru=()=>{const r=Ye(!1);return(async()=>{await Pr(),r.set(!0)})(),r};function Y_(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new I,f=_s(),{invalidate:h}=Un(),p=ru();Ee(r,p,x=>t(8,i=x));const _=async()=>{i||await Pr(),f("transform")},v=async()=>{h("TransformableObject: transformed"),await _()};Ln(s).onTransform=v;const{start:m,stop:d}=iu(async()=>{c&&!l&&c instanceof Et&&(c.getWorldPosition(u),s.lookAt(u),await _())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),g=Cs(s);return Ee(r,g,x=>t(7,n=x)),r.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},r.$$.update=()=>{var x,b,y,S,C,T,M,w,z,k,L,O,B;r.$$.dirty&4&&g.set(s),r.$$.dirty&232&&(o&&(n.position.set((x=o.x)!=null?x:0,(b=o.y)!=null?b:0,(y=o.z)!=null?y:0),v()),c&&!l&&(c instanceof Et?m():(d(),n.lookAt((S=c.x)!=null?S:0,(C=c.y)!=null?C:0,(T=c.z)!=null?T:0),v())),c||d()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((M=a.x)!=null?M:1,(w=a.y)!=null?w:1,(z=a.z)!=null?z:1),v()),r.$$.dirty&160&&l&&(n.rotation.set((k=l.x)!=null?k:0,(L=l.y)!=null?L:0,(O=l.z)!=null?O:0,(B=l.order)!=null?B:"XYZ"),v())},[p,g,s,o,a,l,c,n]}class Z_ extends gt{constructor(e){super(),mt(this,e,Y_,null,ft,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function Q_(r,e,t){let n,i,s,{object:o}=e,{viewportAware:a=!1}=e;const l=_s(),{camera:c,invalidate:u}=Un();Ee(r,c,S=>t(8,s=S));const f=new Oo,h=new vt,p=S=>S.type==="Mesh",_=new I,v=()=>s?(h.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(h),p(o)?f.intersectsObject(o):(o.getWorldPosition(_),f.containsPoint(_))):!0,m=ru();Ee(r,m,S=>t(7,i=S));let{inViewport:d=v()}=e;const g=async S=>{S?(i||await Pr(),l("viewportenter",o)):(i||await Pr(),l("viewportleave",o))},{start:x,stop:b,started:y}=iu(()=>{const S=v();d===void 0?(t(3,d=v()),g(d)):S!==d&&(g(S),t(3,d=S))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Ee(r,y,S=>t(6,n=S)),u("ViewportAwareObject"),r.$$set=S=>{"object"in S&&t(4,o=S.object),"viewportAware"in S&&t(5,a=S.viewportAware),"inViewport"in S&&t(3,d=S.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(a&&!n?x():!a&&n&&b())},[c,m,y,d,o,a,n]}class K_ extends gt{constructor(e){super(),mt(this,e,Q_,null,ft,{object:4,viewportAware:5,inViewport:3})}}function J_(r){let e;const t=r[14].default,n=xn(t,r,r[18],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Mn(n,t,i,i[18],e?bn(t,i[18],s,null):wn(i[18]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function $_(r){let e,t;return e=new Go({props:{object:r[1],$$slots:{default:[J_]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function e0(r){let e,t,n,i,s,o,a,l,c;e=new nu({props:{object:r[1]}}),n=new Z_({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new Ho({props:{object:r[1],dispose:r[7],$$slots:{default:[$_]},$$scope:{ctx:r}}});function u(h){r[15](h)}let f={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(f.inViewport=r[0]),a=new K_({props:f}),Vn.push(()=>xs(a,"inViewport",u)),a.$on("viewportenter",r[16]),a.$on("viewportleave",r[17]),{c(){nt(e.$$.fragment),t=le(),nt(n.$$.fragment),i=le(),nt(s.$$.fragment),o=le(),nt(a.$$.fragment)},m(h,p){$e(e,h,p),Oe(h,t,p),$e(n,h,p),Oe(h,i,p),$e(s,h,p),Oe(h,o,p),$e(a,h,p),c=!0},p(h,[p]){const _={};p&2&&(_.object=h[1]),e.$set(_);const v={};p&2&&(v.object=h[1]),p&4&&(v.position=h[2]),p&16&&(v.rotation=h[4]),p&8&&(v.scale=h[3]),p&32&&(v.lookAt=h[5]),n.$set(v);const m={};p&2&&(m.object=h[1]),p&128&&(m.dispose=h[7]),p&262146&&(m.$$scope={dirty:p,ctx:h}),s.$set(m);const d={};p&2&&(d.object=h[1]),p&64&&(d.viewportAware=h[6]),!l&&p&1&&(l=!0,d.inViewport=h[0],vs(()=>l=!1)),a.$set(d)},i(h){c||(_e(e.$$.fragment,h),_e(n.$$.fragment,h),_e(s.$$.fragment,h),_e(a.$$.fragment,h),c=!0)},o(h){we(e.$$.fragment,h),we(n.$$.fragment,h),we(s.$$.fragment,h),we(a.$$.fragment,h),c=!1},d(h){et(e,h),h&&Ne(t),et(n,h),h&&Ne(i),et(s,h),h&&Ne(o),et(a,h)}}}function t0(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:_=void 0}=e,{renderOrder:v=void 0}=e,{visible:m=void 0}=e,{dispose:d=void 0}=e,{userData:g=void 0}=e;const{invalidate:x}=Un(),b=()=>s;function y(T){f=T,t(0,f)}function S(T){Ki.call(this,r,T)}function C(T){Ki.call(this,r,T)}return r.$$set=T=>{"object"in T&&t(1,s=T.object),"position"in T&&t(2,o=T.position),"scale"in T&&t(3,a=T.scale),"rotation"in T&&t(4,l=T.rotation),"lookAt"in T&&t(5,c=T.lookAt),"viewportAware"in T&&t(6,u=T.viewportAware),"inViewport"in T&&t(0,f=T.inViewport),"castShadow"in T&&t(8,h=T.castShadow),"receiveShadow"in T&&t(9,p=T.receiveShadow),"frustumCulled"in T&&t(10,_=T.frustumCulled),"renderOrder"in T&&t(11,v=T.renderOrder),"visible"in T&&t(12,m=T.visible),"dispose"in T&&t(7,d=T.dispose),"userData"in T&&t(13,g=T.userData),"$$scope"in T&&t(18,i=T.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(m!==void 0&&(b().visible=m),h!==void 0&&(b().castShadow=h),p!==void 0&&(b().receiveShadow=p),_!==void 0&&(b().frustumCulled=_),v!==void 0&&(b().renderOrder=v),g!==void 0&&(b().userData=qn(qn({},b().userData),g)),x("Object3DInstance: props changed"))},[f,s,o,a,l,c,u,d,h,p,_,v,m,g,n,y,S,C,i]}class n0 extends gt{constructor(e){super(),mt(this,e,t0,e0,ft,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function i0(r){let e;const t=r[17].default,n=xn(t,r,r[21],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&Mn(n,t,i,i[21],e?bn(t,i[21],s,null):wn(i[21]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function r0(r){let e,t,n;function i(o){r[18](o)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[i0]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new n0({props:s}),Vn.push(()=>xs(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){nt(e.$$.fragment)},m(o,a){$e(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],vs(()=>t=!1)),e.$set(l)},i(o){n||(_e(e.$$.fragment,o),n=!0)},o(o){we(e.$$.fragment,o),n=!1},d(o){et(e,o)}}}function s0(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:_=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{userData:g=void 0}=e,{dispose:x=void 0}=e,{useCamera:b=!1}=e;const y=Cs(o);Ee(r,y,w=>t(16,n=w));const{setCamera:S}=tu();function C(w){h=w,t(0,h)}function T(w){Ki.call(this,r,w)}function M(w){Ki.call(this,r,w)}return r.$$set=w=>{"camera"in w&&t(1,o=w.camera),"position"in w&&t(2,a=w.position),"scale"in w&&t(3,l=w.scale),"rotation"in w&&t(4,c=w.rotation),"lookAt"in w&&t(5,u=w.lookAt),"viewportAware"in w&&t(6,f=w.viewportAware),"inViewport"in w&&t(0,h=w.inViewport),"castShadow"in w&&t(7,p=w.castShadow),"receiveShadow"in w&&t(8,_=w.receiveShadow),"frustumCulled"in w&&t(9,v=w.frustumCulled),"renderOrder"in w&&t(10,m=w.renderOrder),"visible"in w&&t(11,d=w.visible),"userData"in w&&t(12,g=w.userData),"dispose"in w&&t(13,x=w.dispose),"useCamera"in w&&t(15,b=w.useCamera),"$$scope"in w&&t(21,s=w.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&y.set(o),r.$$.dirty&98304&&b&&S(n)},[h,o,a,l,c,u,f,p,_,v,m,d,g,x,y,b,n,i,C,T,M,s]}class o0 extends gt{constructor(e){super(),mt(this,e,s0,r0,ft,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function a0(r){let e;const t=r[20].default,n=xn(t,r,r[24],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&Mn(n,t,i,i[24],e?bn(t,i[24],s,null):wn(i[24]),null)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function l0(r){let e,t,n;function i(o){r[21](o)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[a0]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new o0({props:s}),Vn.push(()=>xs(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){nt(e.$$.fragment)},m(o,a){$e(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],vs(()=>t=!1)),e.$set(l)},i(o){n||(_e(e.$$.fragment,o),n=!0)},o(o){we(e.$$.fragment,o),n=!1},d(o){et(e,o)}}}function c0(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:_=void 0}=e,{userData:v=void 0}=e,{dispose:m=void 0}=e,{viewportAware:d=!1}=e,{inViewport:g=!1}=e,{useCamera:x=!0}=e,{near:b=void 0}=e,{far:y=void 0}=e,{fov:S=void 0}=e;const{size:C,invalidate:T}=Un();Ee(r,C,L=>t(19,n=L));const M=new sn(S,n.width/n.height,b,y);function w(L){g=L,t(1,g)}function z(L){Ki.call(this,r,L)}function k(L){Ki.call(this,r,L)}return r.$$set=L=>{"position"in L&&t(2,o=L.position),"scale"in L&&t(3,a=L.scale),"rotation"in L&&t(4,l=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"castShadow"in L&&t(6,u=L.castShadow),"receiveShadow"in L&&t(7,f=L.receiveShadow),"frustumCulled"in L&&t(8,h=L.frustumCulled),"renderOrder"in L&&t(9,p=L.renderOrder),"visible"in L&&t(10,_=L.visible),"userData"in L&&t(11,v=L.userData),"dispose"in L&&t(12,m=L.dispose),"viewportAware"in L&&t(13,d=L.viewportAware),"inViewport"in L&&t(1,g=L.inViewport),"useCamera"in L&&t(14,x=L.useCamera),"near"in L&&t(16,b=L.near),"far"in L&&t(17,y=L.far),"fov"in L&&t(18,S=L.fov),"$$scope"in L&&t(24,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,M.aspect=n.width/n.height,M),M.updateProjectionMatrix(),T("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(b!==void 0&&t(0,M.near=b,M),y!==void 0&&t(0,M.far=y,M),S!==void 0&&t(0,M.fov=S,M),M.updateProjectionMatrix(),T("PerspectiveCamera: props changed"))},[M,g,o,a,l,c,u,f,h,p,_,v,m,d,x,C,b,y,S,n,i,w,z,k,s]}class u0 extends gt{constructor(e){super(),mt(this,e,c0,l0,ft,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const jl=[],f0=(r,e)=>{const t=jl.find(i=>i instanceof r);if(t)return t;const n=e();return jl.push(n),n},di=new Qc,Qt=new I,$n=new I,dt=new jt,Xl={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},uo={type:"change"},ql={type:"mouseDown"},Yl={type:"mouseUp",mode:null},Zl={type:"objectChange"};class h0 extends Et{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new v0;this._gizmo=n,this.add(n);const i=new x0;this._plane=i,this.add(i);const s=this;function o(g,x){let b=x;Object.defineProperty(s,g,{get:function(){return b!==void 0?b:x},set:function(y){b!==y&&(b=y,i[g]=y,n[g]=y,s.dispatchEvent({type:g+"-changed",value:y}),s.dispatchEvent(uo))}}),s[g]=x,i[g]=x,n[g]=x}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new I,l=new I,c=new jt,u=new jt,f=new I,h=new jt,p=new I,_=new I,v=new I,m=0,d=new I;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",p),o("pointEnd",_),o("rotationAxis",v),o("rotationAngle",m),o("eye",d),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new jt,this._parentQuaternionInv=new jt,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new jt,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new jt,this._scaleStart=new I,this._getPointer=d0.bind(this),this._onPointerDown=m0.bind(this),this._onPointerHover=p0.bind(this),this._onPointerMove=g0.bind(this),this._onPointerUp=_0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;di.setFromCamera(e,this.camera);const t=fo(this._gizmo.picker[this.mode],di);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){di.setFromCamera(e,this.camera);const t=fo(this._plane,di,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,ql.mode=this.mode,this.dispatchEvent(ql)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;di.setFromCamera(e,this.camera);const o=fo(this._plane,di,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(dt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Qt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Qt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),$n.set(a,a,a)}else Qt.copy(this.pointStart),$n.copy(this.pointEnd),Qt.applyQuaternion(this._worldQuaternionInv),$n.applyQuaternion(this._worldQuaternionInv),$n.divide(Qt),t.search("X")===-1&&($n.x=1),t.search("Y")===-1&&($n.y=1),t.search("Z")===-1&&($n.z=1);i.scale.copy(this._scaleStart).multiply($n),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Qt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Qt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Xl[t]),Qt.copy(Xl[t]),s==="local"&&Qt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Qt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(dt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(dt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(uo),this.dispatchEvent(Zl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Yl.mode=this.mode,this.dispatchEvent(Yl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(uo),this.dispatchEvent(Zl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return di}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function d0(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function p0(r){if(!!this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function m0(r){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function g0(r){!this.enabled||this.pointerMove(this._getPointer(r))}function _0(r){!this.enabled||(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function fo(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const os=new Si,it=new I(0,1,0),Ql=new I(0,0,0),Kl=new vt,as=new jt,ps=new jt,Sn=new I,Jl=new vt,Mr=new I(1,0,0),gi=new I(0,1,0),wr=new I(0,0,1),ls=new I,mr=new I,gr=new I;class v0 extends Et{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ys({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Xc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const f=e.clone();f.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const v=new zt(0,.04,.1,12);v.translate(0,.05,0);const m=new Mt(.08,.08,.08);m.translate(0,.04,0);const d=new qt;d.setAttribute("position",new pt([0,0,0,1,0,0],3));const g=new zt(.0075,.0075,.5,3);g.translate(0,.25,0);function x(B,J){const R=new vi(B,.0075,3,64,J*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function b(){const B=new qt;return B.setAttribute("position",new pt([0,0,0,1,1,1],3)),B}const y={X:[[new pe(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new pe(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new pe(g,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(v,o),[0,.5,0]],[new pe(v,o),[0,-.5,0],[Math.PI,0,0]],[new pe(g,o)]],Z:[[new pe(v,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(g,a),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new Xi(.1,0),f.clone()),[0,0,0]]],XY:[[new pe(new Mt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new pe(new Mt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},S={X:[[new pe(new zt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new zt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new zt(.2,0,.6,4),n),[0,.3,0]],[new pe(new zt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new zt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new zt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Xi(.2,0),n)]],XY:[[new pe(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new pe(new Xi(.01,2),i),null,null,null,"helper"]],END:[[new pe(new Xi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Jn(b(),i),null,null,null,"helper"]],X:[[new Jn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Jn(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Jn(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},T={XYZE:[[new pe(x(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new pe(x(.5,.5),s)]],Y:[[new pe(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pe(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pe(x(.75,1),h),null,[0,Math.PI/2,0]]]},M={AXIS:[[new Jn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},w={XYZE:[[new pe(new ko(.25,10,8),n)]],X:[[new pe(new vi(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new vi(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new vi(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new vi(.75,.1,2,24),n)]]},z={X:[[new pe(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new pe(g,s),[0,0,0],[0,0,-Math.PI/2]],[new pe(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(m,o),[0,.5,0]],[new pe(g,o)],[new pe(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(m,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(g,a),[0,0,0],[Math.PI/2,0,0]],[new pe(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new Mt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pe(new Mt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Mt(.1,.1,.1),f.clone())]]},k={X:[[new pe(new zt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new zt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new zt(.2,0,.6,4),n),[0,.3,0]],[new pe(new zt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new zt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new zt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Mt(.2,.2,.2),n),[0,0,0]]]},L={X:[[new Jn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Jn(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Jn(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(B){const J=new Et;for(const R in B)for(let H=B[R].length;H--;){const Q=B[R][H][0].clone(),K=B[R][H][1],ve=B[R][H][2],se=B[R][H][3],j=B[R][H][4];Q.name=R,Q.tag=j,K&&Q.position.set(K[0],K[1],K[2]),ve&&Q.rotation.set(ve[0],ve[1],ve[2]),se&&Q.scale.set(se[0],se[1],se[2]),Q.updateMatrix();const ee=Q.geometry.clone();ee.applyMatrix4(Q.matrix),Q.geometry=ee,Q.renderOrder=1/0,Q.position.set(0,0,0),Q.rotation.set(0,0,0),Q.scale.set(1,1,1),J.add(Q)}return J}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(y)),this.add(this.gizmo.rotate=O(T)),this.add(this.gizmo.scale=O(z)),this.add(this.picker.translate=O(S)),this.add(this.picker.rotate=O(w)),this.add(this.picker.scale=O(k)),this.add(this.helper.translate=O(C)),this.add(this.helper.rotate=O(M)),this.add(this.helper.scale=O(L)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ps;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const o=i[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(dt.setFromEuler(os.set(0,0,0)),o.quaternion.copy(n).multiply(dt),Math.abs(it.copy(Mr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(dt.setFromEuler(os.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(dt),Math.abs(it.copy(gi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(dt.setFromEuler(os.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(dt),Math.abs(it.copy(wr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(dt.setFromEuler(os.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Kl.lookAt(Ql,it,gi)),o.quaternion.multiply(dt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Qt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Qt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Qt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(Mr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(gi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(wr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(wr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(Mr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(gi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(as.copy(n),it.copy(this.eye).applyQuaternion(dt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Kl.lookAt(this.eye,Ql,gi)),o.name==="X"&&(dt.setFromAxisAngle(Mr,Math.atan2(-it.y,it.z)),dt.multiplyQuaternions(as,dt),o.quaternion.copy(dt)),o.name==="Y"&&(dt.setFromAxisAngle(gi,Math.atan2(it.x,it.z)),dt.multiplyQuaternions(as,dt),o.quaternion.copy(dt)),o.name==="Z"&&(dt.setFromAxisAngle(wr,Math.atan2(it.y,it.x)),dt.multiplyQuaternions(as,dt),o.quaternion.copy(dt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class x0 extends pe{constructor(){super(new Ss(1e5,1e5,2,2),new ys({visible:!1,wireframe:!0,side:Pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ls.copy(Mr).applyQuaternion(t==="local"?this.worldQuaternion:ps),mr.copy(gi).applyQuaternion(t==="local"?this.worldQuaternion:ps),gr.copy(wr).applyQuaternion(t==="local"?this.worldQuaternion:ps),it.copy(mr),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(ls),Sn.copy(ls).cross(it);break;case"Y":it.copy(this.eye).cross(mr),Sn.copy(mr).cross(it);break;case"Z":it.copy(this.eye).cross(gr),Sn.copy(gr).cross(it);break;case"XY":Sn.copy(gr);break;case"YZ":Sn.copy(ls);break;case"XZ":it.copy(gr),Sn.copy(mr);break;case"XYZ":case"E":Sn.set(0,0,0);break}break;case"rotate":default:Sn.set(0,0,0)}Sn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Jl.lookAt(Qt.set(0,0,0),Sn,it),this.quaternion.setFromRotationMatrix(Jl)),super.updateMatrixWorld(e)}}function b0(r){let e,t,n,i;return e=new Ho({props:{dispose:r[0],object:r[1]}}),n=new nu({props:{object:r[1]}}),{c(){nt(e.$$.fragment),t=le(),nt(n.$$.fragment)},m(s,o){$e(e,s,o),Oe(s,t,o),$e(n,s,o),i=!0},p(s,[o]){const a={};o&1&&(a.dispose=s[0]),o&2&&(a.object=s[1]),e.$set(a);const l={};o&2&&(l.object=s[1]),n.$set(l)},i(s){i||(_e(e.$$.fragment,s),_e(n.$$.fragment,s),i=!0)},o(s){we(e.$$.fragment,s),we(n.$$.fragment,s),i=!1},d(s){et(e,s),s&&Ne(t),et(n,s)}}}function M0(r,e,t){let n,i,{autoPauseOrbitControls:s=!0}=e,{mode:o=void 0}=e,{axis:a=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:u=void 0}=e,{scaleSnap:f=void 0}=e,{rotationSnap:h=void 0}=e,{showX:p=void 0}=e,{showY:_=void 0}=e,{showZ:v=void 0}=e,{size:m=void 0}=e,{space:d=void 0}=e,{dispose:g=void 0}=e;const{camera:x,renderer:b,invalidate:y,scene:S}=Un();Ee(r,x,R=>t(20,i=R));const C=eu();if(Ee(r,C,R=>t(19,n=R)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const T=_s(),M=()=>{if(!!i)return Ln(i).orbitControls};let w;const z=()=>{if(w!==void 0){const R=M();R&&(R.enabled=w),w=void 0}};ut(z);const k={change:R=>{var H,Q;n&&((Q=(H=Ln(n)).onTransform)==null||Q.call(H)),y("TransformControls: change event"),T("change",R)},"camera-changed":R=>T("camera-changed",R),"object-changed":R=>T("object-changed",R),"enabled-changed":R=>T("enabled-changed",R),"axis-changed":R=>{t(4,a=R.value),T("axis-changed",R)},"mode-changed":R=>T("mode-changed",R),"translationSnap-changed":R=>T("translationSnap-changed",R),"rotationSnap-changed":R=>T("rotationSnap-changed",R),"scaleSnap-changed":R=>T("scaleSnap-changed",R),"space-changed":R=>T("space-changed",R),"size-changed":R=>T("size-changed",R),"dragging-changed":R=>{t(5,l=R.value);e:if(s){const H=M();if(!H)break e;const Q=!R.value;if(H.enabled===Q)break e;R.value&&(w=H.enabled),H.enabled=Q}T("dragging-changed",R)},"showX-changed":R=>T("showX-changed",R),"showY-changed":R=>T("showY-changed",R),"showZ-changed":R=>T("showZ-changed",R),"worldPosition-changed":R=>T("worldPosition-changed",R),"worldPositionStart-changed":R=>T("worldPositionStart-changed",R),"worldQuaternion-changed":R=>T("worldQuaternion-changed",R),"worldQuaternionStart-changed":R=>T("worldQuaternionStart-changed",R),"cameraPosition-changed":R=>T("cameraPosition-changed",R),"cameraQuaternion-changed":R=>T("cameraQuaternion-changed",R),"pointStart-changed":R=>T("pointStart-changed",R),"pointEnd-changed":R=>T("pointEnd-changed",R),"rotationAxis-changed":R=>T("rotationAxis-changed",R),"rotationAngle-changed":R=>T("rotationAngle-changed",R),"eye-changed":R=>T("eye-changed",R),mouseDown:()=>T("mouseDown"),mouseUp:()=>T("mouseUp"),objectChange:()=>T("objectChange")};if(!b)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const L=new h0(i,b.domElement),O=()=>L.reset();L.attach(n);const B=()=>{Object.entries(k).forEach(([R,H])=>{L.addEventListener(R,H)})},J=()=>{Object.entries(k).forEach(([R,H])=>{L.removeEventListener(R,H)})};return B(),S.add(L),ut(()=>{L.detach(),S.remove(L),J()}),r.$$set=R=>{"autoPauseOrbitControls"in R&&t(6,s=R.autoPauseOrbitControls),"mode"in R&&t(7,o=R.mode),"axis"in R&&t(4,a=R.axis),"dragging"in R&&t(5,l=R.dragging),"enabled"in R&&t(8,c=R.enabled),"translationSnap"in R&&t(9,u=R.translationSnap),"scaleSnap"in R&&t(10,f=R.scaleSnap),"rotationSnap"in R&&t(11,h=R.rotationSnap),"showX"in R&&t(12,p=R.showX),"showY"in R&&t(13,_=R.showY),"showZ"in R&&t(14,v=R.showZ),"size"in R&&t(15,m=R.size),"space"in R&&t(16,d=R.space),"dispose"in R&&t(0,g=R.dispose)},r.$$.update=()=>{r.$$.dirty&64&&(s||z()),r.$$.dirty&256&&c!==void 0&&t(1,L.enabled=c,L),r.$$.dirty&4096&&p!==void 0&&t(1,L.showX=p,L),r.$$.dirty&8192&&_!==void 0&&t(1,L.showY=_,L),r.$$.dirty&16384&&v!==void 0&&t(1,L.showZ=v,L),r.$$.dirty&130&&o!==void 0&&L.setMode(o),r.$$.dirty&514&&u!==void 0&&L.setTranslationSnap(u),r.$$.dirty&1026&&f!==void 0&&L.setScaleSnap(f),r.$$.dirty&2050&&h!==void 0&&L.setRotationSnap(h),r.$$.dirty&32770&&m!==void 0&&L.setSize(m),r.$$.dirty&65538&&d!==void 0&&L.setSpace(d)},[g,L,x,C,a,l,s,o,c,u,f,h,p,_,v,m,d,O]}class w0 extends gt{constructor(e){super(),mt(this,e,M0,b0,ft,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const su=new Et;su.scale.set(0,0,0);su.matrix;new vt().fromArray(new Array(16).fill(0));new Je(16777215);const ou=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},ho=Symbol("initialValueBeforeAttach"),y0=()=>{const{invalidate:r}=Un();let e=!1,t=ho,n,i,s;const o=(l,c,u)=>{if(a(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(!!u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:h}=ou(c,u);t=f[h],f[h]=l,i=f,s=h}e=!0,r()}},a=()=>{!e||(n?(n(),n=void 0):i&&s&&t!==ho&&(i[s]=t,t=ho,i=void 0,s=void 0),e=!1,r())};return ut(()=>{a()}),{update:o}},S0=r=>r&&r.isCamera,au=r=>r&&r.isOrthographicCamera,lu=r=>r&&r.isPerspectiveCamera,E0=r=>lu(r)||au(r),T0=()=>{const{invalidate:r,size:e}=Un(),{setCamera:t}=tu();let n,i;ut(()=>{i==null||i()});const s=l=>{!n||(au(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):lu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!E0(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!S0(l)||!c||(t(l),r())}}},$l=r=>!!(r!=null&&r.addEventListener),A0=()=>{const r=_s(),e=ir(),t=h=>{h!=null&&h.type&&r(h.type,h)},n=(h,p)=>{$l(h)&&p.forEach(_=>{h.removeEventListener(_,t)})},i=(h,p)=>{$l(h)&&p.forEach(_=>{h.addEventListener(_,t)})};let s=[],o;const a=Ye([]),l=a.subscribe(h=>{n(o,s),i(o,h),s=h});ut(l);const c=Ye(),u=c.subscribe(h=>{n(o,s),i(h,s),o=h});return ut(u),ut(()=>{n(o,s)}),rr(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:h=>{c.set(h)}}},C0=["$$scope","$$slots","type","args","attach","instance"],P0=["fov","aspect","near","far","left","right","top","bottom","zoom"],L0=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r=="undefined"||r===null,R0=()=>{const{invalidate:r}=Un(),e=new Map,t=(i,s,o,a)=>{var u,f;if(L0(o)){const h=e.get(s);if(h&&h.instance===i&&h.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=ou(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(o);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;P0.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)C0.includes(a)||t(i,a,s[a],o),r()}}},D0=r=>({ref:r&1}),ec=r=>({ref:r[0]}),I0=r=>({ref:r&1}),tc=r=>({ref:r[0]});function nc(r){let e,t;return e=new Ho({props:{object:r[0],dispose:r[1]}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function U0(r){let e;const t=r[12].default,n=xn(t,r,r[13],ec);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Mn(n,t,i,i[13],e?bn(t,i[13],s,D0):wn(i[13]),ec)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function N0(r){let e,t;return e=new Go({props:{object:r[0],$$slots:{default:[O0]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function O0(r){let e;const t=r[12].default,n=xn(t,r,r[13],tc);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Mn(n,t,i,i[13],e?bn(t,i[13],s,I0):wn(i[13]),tc)},i(i){e||(_e(n,i),e=!0)},o(i){we(n,i),e=!1},d(i){n&&n.d(i)}}}function z0(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&nc(r);const c=[N0,U0],u=[];function f(h,p){return p&1&&(n=null),n==null&&(n=!!h[3](h[0])),n?0:1}return i=f(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=le(),s.c(),o=si()},m(h,p){l&&l.m(h,p),Oe(h,t,p),u[i].m(h,p),Oe(h,o,p),a=!0},p(h,[p]){p&1&&(e=h[4](h[0])),e?l?(l.p(h,p),p&1&&_e(l,1)):(l=nc(h),l.c(),_e(l,1),l.m(t.parentNode,t)):l&&(Wn(),we(l,1,1,()=>{l=null}),jn());let _=i;i=f(h,p),i===_?u[i].p(h,p):(Wn(),we(u[_],1,1,()=>{u[_]=null}),jn(),s=u[i],s?s.p(h,p):(s=u[i]=c[i](h),s.c()),_e(s,1),s.m(o.parentNode,o))},i(h){a||(_e(l),_e(s),a=!0)},o(h){we(l),we(s),a=!1},d(h){l&&l.d(h),h&&Ne(t),u[i].d(h),h&&Ne(o)}}}function F0(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Yo(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:h=void 0}=e,{dispose:p=void 0}=e;const _=In("threlte-hierarchical-parent-context");Ee(r,_,w=>t(11,s=w));const v=w=>typeof w=="function"&&/^\s*class\s+/.test(w.toString()),m=w=>Array.isArray(w);let{ref:d=v(l)&&m(c)?new l(...c):v(l)?new l:l}=e,g=!1;const x=Ye(d);pn("threlte-hierarchical-parent-context",x);const b=R0(),y=T0(),S=y0(),C=A0(),T=w=>!!w.isObject3D,M=w=>w.dispose!==void 0;return r.$$set=w=>{e=po(po({},e),_u(w)),t(21,i=Yo(e,n)),"type"in w&&t(5,l=w.type),"args"in w&&t(6,c=w.args),"attach"in w&&t(7,u=w.attach),"manual"in w&&t(8,f=w.manual),"makeDefault"in w&&t(9,h=w.makeDefault),"dispose"in w&&t(1,p=w.dispose),"ref"in w&&t(0,d=w.ref),"$$scope"in w&&t(13,a=w.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(g?t(0,d=v(l)&&m(c)?new l(...c):v(l)?new l:l):t(10,g=!0)),r.$$.dirty&1&&x.set(d),b.updateProps(d,i,{manualCamera:f}),r.$$.dirty&257&&y.update(d,f),r.$$.dirty&513&&y.makeDefaultCamera(d,h),r.$$.dirty&2177&&S.update(d,s,u),r.$$.dirty&1&&C.updateRef(d)},[d,p,_,T,M,l,c,u,f,h,g,s,o,a]}class k0 extends gt{constructor(e){super(),mt(this,e,F0,z0,ft,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function B0(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class ic extends gt{constructor(e){super(),mt(this,e,B0,null,ft,{})}}new Proxy(ic,{get(r,e){return r[e]||ic}});f0(ml,()=>new ml(qc));function rc(r){let e,t,n,i,s,o=r[4]=="translate"?"rotate":"translate",a,l,c,u,f,h,p,_,v,m,d,g,x,b,y,S=r[2].x.toFixed(2)+"",C,T,M,w,z,k,L=-r[2].z.toFixed(2)+"",O,B,J,R,H,Q,K=r[2].y.toFixed(2)+"",ve,se,j,ee,te,ue,N,Re,Ce,oe,Te,je,ye,Ue,lt,xt,bt,_t,Xe=Kt.radToDeg(r[3].x).toFixed(2)+"",st,It,P,E,Y,ne,re=Kt.radToDeg(r[3].y).toFixed(2)+"",fe,Pe,de,$,xe,Se,Ae=Kt.radToDeg(r[3].z).toFixed(2)+"",ge,be,ze,Ze,ct,U,W,ie,he,Me,Ke,He,Tt,Yt,ht,Lt,Bt,Nn,oi,Or,cr,On,A,F,Z,G,X=r[12]==null&&sc(r);return On=new V_({props:{$$slots:{default:[H0]},$$scope:{ctx:r}}}),{c(){e=q("div"),t=q("div"),n=q("div"),i=q("button"),s=rt("Change to "),a=rt(o),l=le(),c=q("div"),u=q("button"),u.textContent="Reset Rotation",f=le(),h=q("button"),h.textContent="Reset Position",p=le(),_=q("div"),v=q("p"),v.textContent="Translation Snap",m=le(),d=q("div"),g=q("div"),x=q("p"),x.textContent="x",b=le(),y=q("p"),C=rt(S),T=le(),M=q("div"),w=q("p"),w.textContent="y",z=le(),k=q("p"),O=rt(L),B=le(),J=q("div"),R=q("p"),R.textContent="z",H=le(),Q=q("p"),ve=rt(K),se=le(),j=q("div"),ee=q("div"),te=rt(r[5]),ue=le(),N=q("input"),Re=le(),Ce=q("button"),Ce.textContent="Place On Ground",oe=le(),Te=q("div"),je=q("p"),je.textContent="Rotation Snap",ye=le(),Ue=q("div"),lt=q("div"),xt=q("p"),xt.textContent="x",bt=le(),_t=q("p"),st=rt(Xe),It=le(),P=q("div"),E=q("p"),E.textContent="y",Y=le(),ne=q("p"),fe=rt(re),Pe=le(),de=q("div"),$=q("p"),$.textContent="z",xe=le(),Se=q("p"),ge=rt(Ae),be=le(),ze=q("div"),Ze=q("div"),ct=rt(r[6]),U=le(),W=q("input"),ie=le(),he=q("p"),he.textContent="Object Alpha",Me=le(),Ke=q("div"),He=q("input"),Tt=le(),Yt=q("button"),Yt.textContent="Stop Placement",ht=le(),Lt=q("button"),Bt=q("i"),Or=le(),X&&X.c(),cr=le(),nt(On.$$.fragment),V(i,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(u,"class","bg-[color:var(--color-secondary)] text-white p-[0.5rem] w-full whitespace-nowrap"),V(h,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(c,"class","flex flex-row gap-[1rem]"),V(v,"class","h-fit"),V(g,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(M,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(J,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(d,"class","flex flex-row gap-[1rem] text-center"),V(_,"class","flex flex-col items-center"),V(ee,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),V(N,"id","slider"),V(N,"type","range"),V(N,"min","0.01"),V(N,"max","1"),V(N,"step","0.01"),V(N,"class","w-full"),V(j,"class","flex flex-row gap-[1rem] items-center"),V(Ce,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(je,"class","h-fit"),V(lt,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(P,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(de,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(Ue,"class","flex flex-row gap-[1rem] text-center"),V(Te,"class","flex flex-col items-center "),V(Ze,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),V(W,"id","slider"),V(W,"type","range"),V(W,"min","1"),V(W,"max","90"),V(W,"step","1"),V(W,"class","w-full"),V(ze,"class","flex flex-row gap-[1rem] items-center"),V(he,"class",""),V(He,"id","slider"),V(He,"type","range"),V(He,"min","1"),V(He,"max","255"),V(He,"step","10"),V(He,"class","w-full"),V(Ke,"class","flex flex-row gap-[1rem] items-center"),V(Yt,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(n,"class","flex flex-col gap-[1rem] p-[2rem]"),V(Bt,"class",Nn="fas text-[2rem] fa-chevron-"+(r[7]?"left":"right")),V(Lt,"class","h-full absolute -right-[4rem] w-[4rem] grid place-items-center bg-[color:var(--color-secondary)]"),V(t,"class",oi="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(r[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"),V(e,"class",A="modeler z-[0] absolute h-screen w-screen "+(r[9]?"bg-gray-800":""))},m(ae,me){Oe(ae,e,me),D(e,t),D(t,n),D(n,i),D(i,s),D(i,a),D(n,l),D(n,c),D(c,u),D(c,f),D(c,h),D(n,p),D(n,_),D(_,v),D(_,m),D(_,d),D(d,g),D(g,x),D(g,b),D(g,y),D(y,C),D(d,T),D(d,M),D(M,w),D(M,z),D(M,k),D(k,O),D(d,B),D(d,J),D(J,R),D(J,H),D(J,Q),D(Q,ve),D(n,se),D(n,j),D(j,ee),D(ee,te),D(j,ue),D(j,N),Tn(N,r[5]),D(n,Re),D(n,Ce),D(n,oe),D(n,Te),D(Te,je),D(Te,ye),D(Te,Ue),D(Ue,lt),D(lt,xt),D(lt,bt),D(lt,_t),D(_t,st),D(Ue,It),D(Ue,P),D(P,E),D(P,Y),D(P,ne),D(ne,fe),D(Ue,Pe),D(Ue,de),D(de,$),D(de,xe),D(de,Se),D(Se,ge),D(n,be),D(n,ze),D(ze,Ze),D(Ze,ct),D(ze,U),D(ze,W),Tn(W,r[6]),D(n,ie),D(n,he),D(n,Me),D(n,Ke),D(Ke,He),Tn(He,r[1]),D(n,Tt),D(n,Yt),D(t,ht),D(t,Lt),D(Lt,Bt),D(e,Or),X&&X.m(e,null),D(e,cr),$e(On,e,null),F=!0,Z||(G=[Le(i,"click",r[22]),Le(u,"click",r[23]),Le(h,"click",r[24]),Le(N,"change",r[25]),Le(N,"input",r[25]),Le(Ce,"click",r[26]),Le(W,"change",r[27]),Le(W,"input",r[27]),Le(He,"change",r[28]),Le(He,"input",r[28]),Le(Yt,"click",r[29]),Le(Lt,"click",r[30])],Z=!0)},p(ae,me){(!F||me[0]&16)&&o!==(o=ae[4]=="translate"?"rotate":"translate")&&At(a,o),(!F||me[0]&4)&&S!==(S=ae[2].x.toFixed(2)+"")&&At(C,S),(!F||me[0]&4)&&L!==(L=-ae[2].z.toFixed(2)+"")&&At(O,L),(!F||me[0]&4)&&K!==(K=ae[2].y.toFixed(2)+"")&&At(ve,K),(!F||me[0]&32)&&At(te,ae[5]),me[0]&32&&Tn(N,ae[5]),(!F||me[0]&8)&&Xe!==(Xe=Kt.radToDeg(ae[3].x).toFixed(2)+"")&&At(st,Xe),(!F||me[0]&8)&&re!==(re=Kt.radToDeg(ae[3].y).toFixed(2)+"")&&At(fe,re),(!F||me[0]&8)&&Ae!==(Ae=Kt.radToDeg(ae[3].z).toFixed(2)+"")&&At(ge,Ae),(!F||me[0]&64)&&At(ct,ae[6]),me[0]&64&&Tn(W,ae[6]),me[0]&2&&Tn(He,ae[1]),(!F||me[0]&128&&Nn!==(Nn="fas text-[2rem] fa-chevron-"+(ae[7]?"left":"right")))&&V(Bt,"class",Nn),(!F||me[0]&128&&oi!==(oi="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(ae[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"))&&V(t,"class",oi),ae[12]==null?X?X.p(ae,me):(X=sc(ae),X.c(),X.m(e,cr)):X&&(X.d(1),X=null);const De={};me[0]&29821|me[1]&128&&(De.$$scope={dirty:me,ctx:ae}),On.$set(De),(!F||me[0]&512&&A!==(A="modeler z-[0] absolute h-screen w-screen "+(ae[9]?"bg-gray-800":"")))&&V(e,"class",A)},i(ae){F||(_e(On.$$.fragment,ae),F=!0)},o(ae){we(On.$$.fragment,ae),F=!1},d(ae){ae&&Ne(e),X&&X.d(),et(On),Z=!1,kt(G)}}}function sc(r){let e,t,n;return{c(){e=q("button"),e.innerHTML=`<i class="fa-solid fa-shopping-cart text-[white]"></i> 
        	<p class="font-semibold">Add To Cart</p>`,V(e,"class","absolute text-[2rem] hover:brightness-110 top-1/2 -translate-y-1/2 right-[1rem] w-fit gap-[1rem] px-8 py-4 h-fit bg-[color:var(--color-secondary)] flex flex-row items-center justify-between")},m(i,s){Oe(i,e,s),t||(n=Le(e,"click",r[31]),t=!0)},p:St,d(i){i&&Ne(e),t=!1,n()}}}function G0(r){let e,t;return e=new w0({props:{mode:r[4],translationSnap:r[5],rotationSnap:Kt.degToRad(r[6]),size:.5,space:"local"}}),e.$on("objectChange",r[32]),e.$on("dragging-changed",r[33]),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i[0]&16&&(s.mode=n[4]),i[0]&32&&(s.translationSnap=n[5]),i[0]&64&&(s.rotationSnap=Kt.degToRad(n[6])),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){we(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function H0(r){let e,t,n,i,s;e=new u0({props:{position:r[13],lookAt:r[10],fov:45}});function o(l){r[34](l)}let a={type:pe,"position.x":r[2].x,"position.y":r[2].y,"position.z":r[2].z,quaternion:5,geometry:new Mt(0,0,0),material:new Ig,"rotation.x":r[3].x,"rotation.y":r[3].y,"rotation.z":r[3].z,$$slots:{default:[G0]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.ref=r[0]),n=new k0({props:a}),Vn.push(()=>xs(n,"ref",o)),{c(){nt(e.$$.fragment),t=le(),nt(n.$$.fragment)},m(l,c){$e(e,l,c),Oe(l,t,c),$e(n,l,c),s=!0},p(l,c){const u={};c[0]&8192&&(u.position=l[13]),c[0]&1024&&(u.lookAt=l[10]),e.$set(u);const f={};c[0]&4&&(f["position.x"]=l[2].x),c[0]&4&&(f["position.y"]=l[2].y),c[0]&4&&(f["position.z"]=l[2].z),c[0]&8&&(f["rotation.x"]=l[3].x),c[0]&8&&(f["rotation.y"]=l[3].y),c[0]&8&&(f["rotation.z"]=l[3].z),c[0]&20604|c[1]&128&&(f.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,f.ref=l[0],vs(()=>i=!1)),n.$set(f)},i(l){s||(_e(e.$$.fragment,l),_e(n.$$.fragment,l),s=!0)},o(l){we(e.$$.fragment,l),we(n.$$.fragment,l),s=!1},d(l){et(e,l),l&&Ne(t),et(n,l)}}}function V0(r){let e,t,n=r[8]&&rc(r);return{c(){n&&n.c(),e=si()},m(i,s){n&&n.m(i,s),Oe(i,e,s),t=!0},p(i,s){i[8]?n?(n.p(i,s),s[0]&256&&_e(n,1)):(n=rc(i),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Wn(),we(n,1,1,()=>{n=null}),jn())},i(i){t||(_e(n),t=!0)},o(i){we(n),t=!1},d(i){n&&n.d(i),i&&Ne(e)}}}function W0(r,e,t){let n,i,s,o,a,l,c,u,f;Ee(r,bs,te=>t(9,o=te)),Ee(r,vn,te=>t(11,l=te)),Ee(r,Cn,te=>t(14,f=te));const{show:h,cameraPosition:p,cameraLookAt:_,objectPosition:v,objectEuler:m,entity:d}=_n;Ee(r,h,te=>t(8,s=te)),Ee(r,p,te=>t(13,u=te)),Ee(r,_,te=>t(10,a=te)),Ee(r,v,te=>t(2,n=te)),Ee(r,m,te=>t(3,i=te)),Ee(r,d,te=>t(12,c=te));let g,x="translate",b=.01,y=1,S=!1,C=200;an("setObjectAlpha",te=>{t(1,C=te)});function T(te){te.button==2&&(x=="translate"?t(4,x="rotate"):t(4,x="translate"))}rr(()=>{document.addEventListener("contextmenu",T)}),ut(()=>{document.removeEventListener("contextmenu",T)});function M(te){return te.x!=n.x||te.y!=n.y||te.z!=n.z}function w(te){return te.x!=i.x||te.y!=i.y||te.z!=i.z}function z(){g&&(M(g.position)&&(Ie(v,n.x=g.position.x,n),Ie(v,n.y=g.position.y,n),Ie(v,n.z=g.position.z,n),_n.sendMovementUpdate(hs(n))),w(g.rotation)&&(Ie(m,i.x=g.rotation.x,i),Ie(m,i.y=g.rotation.y,i),Ie(m,i.z=g.rotation.z,i),_n.sendRotationUpdate(i)))}const k=()=>{x=="translate"?t(4,x="rotate"):t(4,x="translate")},L=()=>{g.rotation.set(0,0,0,i.order),z()},O=()=>{g.position.set(a.x,a.y,a.z),z()};function B(){b=cs(this.value),t(5,b)}const J=()=>{at("placeOnGround").then(te=>{const ue=Hi(te);g.position.set(ue.x,ue.y,ue.z),z()})};function R(){y=cs(this.value),t(6,y)}function H(){C=cs(this.value),t(1,C)}const Q=()=>{at("stopPlacement"),_n.show.set(!1),Ie(vn,l=null,l)},K=()=>{t(7,S=!S)},ve=()=>{at("addToCart",l),Ie(vn,l=null,l)},se=te=>{z()},j=te=>{if(!te.detail.value&&c!=null){const N=f.find(oe=>oe.entity===c);if(N===void 0)return;const Re=hs(n);N.position=Re;const Ce=hs(i);N.rotation=Ce,Ie(Cn,f=[...f],f),at("updateCartItem",N)}};function ee(te){g=te,t(0,g)}return r.$$.update=()=>{r.$$.dirty[0]&2&&at("setObjectAlpha",{alpha:C}),r.$$.dirty[0]&13&&g&&(g.rotation.set(i.x,i.y,i.z,i.order),g.position.set(n.x,n.y,n.z))},[g,C,n,i,x,b,y,S,s,o,a,l,c,u,f,h,p,_,v,m,d,z,k,L,O,B,J,R,H,Q,K,ve,se,j,ee]}class j0 extends gt{constructor(e){super(),mt(this,e,W0,V0,ft,{},null,[-1,-1])}}function oc(r){let e,t,n,i;return e=new f_({}),n=new j0({}),{c(){nt(e.$$.fragment),t=le(),nt(n.$$.fragment)},m(s,o){$e(e,s,o),Oe(s,t,o),$e(n,s,o),i=!0},i(s){i||(_e(e.$$.fragment,s),_e(n.$$.fragment,s),i=!0)},o(s){we(e.$$.fragment,s),we(n.$$.fragment,s),i=!1},d(s){et(e,s),s&&Ne(t),et(n,s)}}}function X0(r){let e,t,n=r[0]&&oc();return{c(){n&&n.c(),e=si()},m(i,s){n&&n.m(i,s),Oe(i,e,s),t=!0},p(i,s){i[0]?n?s&1&&_e(n,1):(n=oc(),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Wn(),we(n,1,1,()=>{n=null}),jn())},i(i){t||(_e(n),t=!0)},o(i){we(n),t=!1},d(i){n&&n.d(i),i&&Ne(e)}}}function ac(r){let e,t,n,i;return e=new qg({}),{c(){nt(e.$$.fragment),t=le(),n=q("body"),V(n,"class","bg-neutral-700")},m(s,o){$e(e,s,o),Oe(s,t,o),Oe(s,n,o),i=!0},i(s){i||(_e(e.$$.fragment,s),i=!0)},o(s){we(e.$$.fragment,s),i=!1},d(s){et(e,s),s&&Ne(t),s&&Ne(n)}}}function q0(r){let e,t,n,i,s,o;e=new Vg({props:{$$slots:{default:[X0]},$$scope:{ctx:r}}}),n=new $g({});let a=r[1]&&ac();return{c(){nt(e.$$.fragment),t=le(),nt(n.$$.fragment),i=le(),a&&a.c(),s=si()},m(l,c){$e(e,l,c),Oe(l,t,c),$e(n,l,c),Oe(l,i,c),a&&a.m(l,c),Oe(l,s,c),o=!0},p(l,[c]){const u={};c&17&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),l[1]?a?c&2&&_e(a,1):(a=ac(),a.c(),_e(a,1),a.m(s.parentNode,s)):a&&(Wn(),we(a,1,1,()=>{a=null}),jn())},i(l){o||(_e(e.$$.fragment,l),_e(n.$$.fragment,l),_e(a),o=!0)},o(l){we(e.$$.fragment,l),we(n.$$.fragment,l),we(a),o=!1},d(l){et(e,l),l&&Ne(t),et(n,l),l&&Ne(i),a&&a.d(l),l&&Ne(s)}}}function Y0(r,e,t){let n,i,s;return Ee(r,vo,o=>t(2,n=o)),Ee(r,gs,o=>t(0,i=o)),Ee(r,bs,o=>t(1,s=o)),Ie(vo,n="ps-housing",n),[i,s]}class Z0 extends gt{constructor(e){super(),mt(this,e,Y0,q0,ft,{})}}new Z0({target:document.getElementById("app")});
