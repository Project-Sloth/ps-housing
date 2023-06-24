const au=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};au();function St(){}function ho(r,e){for(const t in e)r[t]=e[t];return r}function sc(r){return r()}function Vo(){return Object.create(null)}function qt(r){r.forEach(sc)}function gs(r){return typeof r=="function"}function ft(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function lu(r){return Object.keys(r).length===0}function Co(r,...e){if(r==null)return St;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Po(r){let e;return Co(r,t=>e=t)(),e}function Ee(r,e,t){r.$$.on_destroy.push(Co(e,t))}function xn(r,e,t,n){if(r){const i=oc(r,e,t,n);return r[0](i)}}function oc(r,e,t,n){return r[1]&&n?ho(t.ctx.slice(),r[1](n(e))):t.ctx}function Mn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function bn(r,e,t,n,i,s){if(i){const o=oc(e,t,n,s);r.p(o,i)}}function Sn(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function cu(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function Wo(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function Ie(r,e,t){return r.set(t),e}function ac(r){return r&&gs(r.destroy)?r.destroy:St}function I(r,e){r.appendChild(e)}function Fe(r,e,t){r.insertBefore(e,t||null)}function Ne(r){r.parentNode&&r.parentNode.removeChild(r)}function rr(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function K(r){return document.createElement(r)}function rt(r){return document.createTextNode(r)}function ce(){return rt(" ")}function ri(){return rt("")}function Le(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function V(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function cs(r){return r===""?null:+r}function uu(r){return Array.from(r.childNodes)}function At(r,e){e=""+e,r.data!==e&&(r.data=e)}function Tn(r,e){r.value=e==null?"":e}function jo(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ps(r,e,t){r.classList[t?"add":"remove"](e)}function fu(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let Pr;function wr(r){Pr=r}function sr(){if(!Pr)throw new Error("Function called outside component initialization");return Pr}function or(r){sr().$$.on_mount.push(r)}function ut(r){sr().$$.on_destroy.push(r)}function _s(){const r=sr();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=fu(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function pn(r,e){return sr().$$.context.set(r,e),e}function In(r){return sr().$$.context.get(r)}function $i(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Hi=[],Vn=[];let Yi=[];const po=[],lc=Promise.resolve();let mo=!1;function cc(){mo||(mo=!0,lc.then(uc))}function Lr(){return cc(),lc}function go(r){Yi.push(r)}function vs(r){po.push(r)}const Is=new Set;let wi=0;function uc(){if(wi!==0)return;const r=Pr;do{try{for(;wi<Hi.length;){const e=Hi[wi];wi++,wr(e),hu(e.$$)}}catch(e){throw Hi.length=0,wi=0,e}for(wr(null),Hi.length=0,wi=0;Vn.length;)Vn.pop()();for(let e=0;e<Yi.length;e+=1){const t=Yi[e];Is.has(t)||(Is.add(t),t())}Yi.length=0}while(Hi.length);for(;po.length;)po.pop()();mo=!1,Is.clear(),wr(r)}function hu(r){if(r.fragment!==null){r.update(),qt(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(go)}}function du(r){const e=[],t=[];Yi.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Yi=e}const us=new Set;let vi;function Wn(){vi={r:0,c:[],p:vi}}function jn(){vi.r||qt(vi.c),vi=vi.p}function _e(r,e){r&&r.i&&(us.delete(r),r.i(e))}function Se(r,e,t,n){if(r&&r.o){if(us.has(r))return;us.add(r),vi.c.push(()=>{us.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function xs(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function nt(r){r&&r.c()}function $e(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||go(()=>{const o=r.$$.on_mount.map(sc).filter(gs);r.$$.on_destroy?r.$$.on_destroy.push(...o):qt(o),r.$$.on_mount=[]}),s.forEach(go)}function et(r,e){const t=r.$$;t.fragment!==null&&(du(t.after_update),qt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function pu(r,e){r.$$.dirty[0]===-1&&(Hi.push(r),cc(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function mt(r,e,t,n,i,s,o,a=[-1]){const l=Pr;wr(r);const c=r.$$={fragment:null,ctx:[],props:s,update:St,not_equal:i,bound:Vo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Vo(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(f,h,...p)=>{const g=p.length?p[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&pu(r,f)),h}):[],c.update(),u=!0,qt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=uu(e.target);c.fragment&&c.fragment.l(f),f.forEach(Ne)}else c.fragment&&c.fragment.c();e.intro&&_e(r.$$.fragment),$e(r,e.target,e.anchor,e.customElement),uc()}wr(l)}class gt{$destroy(){et(this,1),this.$destroy=St}$on(e,t){if(!gs(t))return St;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!lu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function an(r,e){const t=n=>{const{action:i,data:s}=n.data;i===r&&e(s)};or(()=>window.addEventListener("message",t)),ut(()=>window.removeEventListener("message",t))}const Ei=[];function fc(r,e){return{subscribe:Ye(r,e).subscribe}}function Ye(r,e=St){let t;const n=new Set;function i(a){if(ft(r,a)&&(r=a,t)){const l=!Ei.length;for(const c of n)c[1](),Ei.push(c,r);if(l){for(let c=0;c<Ei.length;c+=2)Ei[c][0](Ei[c+1]);Ei.length=0}}}function s(a){i(a(r))}function o(a,l=St){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||St),a(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function mu(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return fc(t,o=>{let a=!1;const l=[];let c=0,u=St;const f=()=>{if(c)return;u();const p=e(n?l[0]:l,o);s?o(p):u=gs(p)?p:St},h=i.map((p,g)=>Co(p,v=>{l[g]=v,c&=~(1<<g),a&&f()},()=>{c|=1<<g}));return a=!0,f(),function(){qt(h),u(),a=!1}})}const ji=Ye(!1),Ms=Ye(!1),_o=Ye(""),ms=Ye(null),$n=Ye(null),Ln=Ye(null),zt=Ye(!1),Er=Ye(!1),Tr=Ye(!1),Zi=Ye([]),mn=Ye([]);let hc=!1;Ms.subscribe(r=>{hc=r});let dc="";_o.subscribe(r=>{dc=r});async function at(r,e={},t){if(hc==!0&&t)return Promise.resolve(t||{});const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},i=window.GetParentResourceName?window.GetParentResourceName():dc;return await(await fetch(`https://${i}/${r}`,n)).json()}function Vi(r){return{x:r.x,y:r.z,z:-r.y}}function fs(r){return{x:r.x,y:-r.z,z:r.y}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="151",gu=0,Xo=1,_u=2,pc=1,mc=2,xr=3,ti=0,Jt=1,Cn=2,ei=0,Qi=1,qo=2,Yo=3,Zo=4,vu=5,Wi=100,xu=101,Mu=102,Qo=103,Ko=104,bu=200,Su=201,yu=202,wu=203,gc=204,_c=205,Eu=206,Tu=207,Au=208,Cu=209,Pu=210,Lu=0,Ru=1,Du=2,vo=3,Iu=4,Uu=5,Nu=6,Ou=7,vc=0,Fu=1,zu=2,Rn=0,ku=1,Bu=2,Gu=3,xc=4,Hu=5,Mc=300,er=301,tr=302,xo=303,Mo=304,bs=306,bo=1e3,gn=1001,So=1002,Vt=1003,Jo=1004,Us=1005,ln=1006,Vu=1007,Rr=1008,Si=1009,Wu=1010,ju=1011,bc=1012,Xu=1013,xi=1014,Mi=1015,Dr=1016,qu=1017,Yu=1018,Ki=1020,Zu=1021,_n=1023,Qu=1024,Ku=1025,bi=1026,nr=1027,Ju=1028,$u=1029,ef=1030,tf=1031,nf=1033,Ns=33776,Os=33777,Fs=33778,zs=33779,$o=35840,ea=35841,ta=35842,na=35843,rf=36196,ia=37492,ra=37496,sa=37808,oa=37809,aa=37810,la=37811,ca=37812,ua=37813,fa=37814,ha=37815,da=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,ks=36492,sf=36283,xa=36284,Ma=36285,ba=36286,ni=3e3,ot=3001,of=3200,af=3201,Sc=0,lf=1,En="srgb",Ir="srgb-linear",yc="display-p3",Bs=7680,cf=519,Sa=35044,ya="300 es",yo=1035;class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const Ar=Math.PI/180,Ur=180/Math.PI;function lr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function jt(r,e,t){return Math.max(e,Math.min(t,r))}function Ro(r,e){return(r%e+e)%e}function uf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ff(r,e,t){return r!==e?(t-r)/(e-r):0}function Cr(r,e,t){return(1-t)*r+t*e}function hf(r,e,t,n){return Cr(r,e,1-Math.exp(-t*n))}function df(r,e=1){return e-Math.abs(Ro(r,e*2)-e)}function pf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function mf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function gf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _f(r,e){return r+Math.random()*(e-r)}function vf(r){return r*(.5-Math.random())}function xf(r){r!==void 0&&(wa=r);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mf(r){return r*Ar}function bf(r){return r*Ur}function wo(r){return(r&r-1)===0&&r!==0}function Sf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yf(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Kt={DEG2RAD:Ar,RAD2DEG:Ur,generateUUID:lr,clamp:jt,euclideanModulo:Ro,mapLinear:uf,inverseLerp:ff,lerp:Cr,damp:hf,pingpong:df,smoothstep:pf,smootherstep:mf,randInt:gf,randFloat:_f,randFloatSpread:vf,seededRandom:xf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:wo,ceilPowerOfTwo:Sf,floorPowerOfTwo:wc,setQuaternionFromProperEuler:yf,normalize:Zt,denormalize:Mr};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],v=i[0],m=i[3],d=i[6],_=i[1],x=i[4],M=i[7],y=i[2],E=i[5],P=i[8];return s[0]=o*v+a*_+l*y,s[3]=o*m+a*x+l*E,s[6]=o*d+a*M+l*P,s[1]=c*v+u*_+f*y,s[4]=c*m+u*x+f*E,s[7]=c*d+u*M+f*P,s[2]=h*v+p*_+g*y,s[5]=h*m+p*x+g*E,s[8]=h*d+p*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new We;function Ec(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const wf=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ef=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Tf(r){return r.convertSRGBToLinear().applyMatrix3(Ef)}function Af(r){return r.applyMatrix3(wf).convertLinearToSRGB()}const Cf={[Ir]:r=>r,[En]:r=>r.convertSRGBToLinear(),[yc]:Tf},Pf={[Ir]:r=>r,[En]:r=>r.convertLinearToSRGB(),[yc]:Af},tn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Ir},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Cf[e],i=Pf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ti;class Tc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Nr("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ji(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ac{constructor(e=null){this.isSource=!0,this.uuid=lr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Vs(i[o].image)):s.push(Vs(i[o]))}else s=Vs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Tc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;class $t extends ar{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=gn,i=gn,s=ln,o=Rr,a=_n,l=Si,c=$t.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=lr(),this.name="",this.source=new Ac(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Mc;$t.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(p+1)/2,y=(d+1)/2,E=(u+h)/4,P=(f+v)/4,T=(g+m)/4;return x>M&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=P/n):M>y?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=T/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=P/s,i=T/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends ar{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ac(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cc extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rf extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*v,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const y=Math.sqrt(x),E=Math.atan2(y,d*_);m=Math.sin(m*E)/y,a=Math.sin(a*E)/y}const M=a*_;if(l=l*m+h*M,c=c*m+p*M,u=u*m+g*M,f=f*m+v*M,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ea.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new D,Ea=new Wt;class Or{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)zn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(zn)}else i.boundingBox===null&&i.computeBoundingBox(),Ai.copy(i.boundingBox),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),zr.subVectors(this.max,dr),Ci.subVectors(e.a,dr),Pi.subVectors(e.b,dr),Li.subVectors(e.c,dr),qn.subVectors(Pi,Ci),Yn.subVectors(Li,Pi),ci.subVectors(Ci,Li);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ci.z,ci.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ci.z,0,-ci.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ci.y,ci.x,0];return!js(t,Ci,Pi,Li,zr)||(t=[1,0,0,0,1,0,0,0,1],!js(t,Ci,Pi,Li,zr))?!1:(kr.crossVectors(qn,Yn),t=[kr.x,kr.y,kr.z],js(t,Ci,Pi,Li,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,Ai=new Or,Ci=new D,Pi=new D,Li=new D,qn=new D,Yn=new D,ci=new D,dr=new D,zr=new D,kr=new D,ui=new D;function js(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ui.fromArray(r,s);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Df=new Or,pr=new D,Xs=new D;class Ss{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Xs)),this.expandByPoint(pr.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new D,qs=new D,Br=new D,Zn=new D,Ys=new D,Gr=new D,Zs=new D;class Do{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qs.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(qs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=Zn.dot(this.direction),l=-Zn.dot(Br),c=Zn.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(qs).addScaledVector(Br,h),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,s){Ys.subVectors(t,e),Gr.subVectors(n,e),Zs.crossVectors(Ys,Gr);let o=this.direction.dot(Zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,e);const l=a*this.direction.dot(Gr.crossVectors(Zn,Gr));if(l<0)return null;const c=a*this.direction.dot(Ys.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(Zs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Uf)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Qn.crossVectors(n,nn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Qn.crossVectors(n,nn)),Qn.normalize(),Hr.crossVectors(nn,Qn),i[0]=Qn.x,i[4]=Hr.x,i[8]=nn.x,i[1]=Qn.y,i[5]=Hr.y,i[9]=nn.y,i[2]=Qn.z,i[6]=Hr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],_=n[3],x=n[7],M=n[11],y=n[15],E=i[0],P=i[4],T=i[8],S=i[12],b=i[1],F=i[5],k=i[9],L=i[13],O=i[2],B=i[6],J=i[10],R=i[14],H=i[3],Z=i[7],Q=i[11],ve=i[15];return s[0]=o*E+a*b+l*O+c*H,s[4]=o*P+a*F+l*B+c*Z,s[8]=o*T+a*k+l*J+c*Q,s[12]=o*S+a*L+l*R+c*ve,s[1]=u*E+f*b+h*O+p*H,s[5]=u*P+f*F+h*B+p*Z,s[9]=u*T+f*k+h*J+p*Q,s[13]=u*S+f*L+h*R+p*ve,s[2]=g*E+v*b+m*O+d*H,s[6]=g*P+v*F+m*B+d*Z,s[10]=g*T+v*k+m*J+d*Q,s[14]=g*S+v*L+m*R+d*ve,s[3]=_*E+x*b+M*O+y*H,s[7]=_*P+x*F+M*B+y*Z,s[11]=_*T+x*k+M*J+y*Q,s[15]=_*S+x*L+M*R+y*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*p-n*l*p)+v*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+d*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,M=u*v*c-g*f*c+g*a*p-o*v*p-u*a*d+o*f*d,y=g*f*l-u*v*l-g*a*h+o*v*h+u*a*m-o*f*m,E=t*_+n*x+i*M+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=_*P,e[1]=(v*h*s-f*m*s-v*i*p+n*m*p+f*i*d-n*h*d)*P,e[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*d+n*l*d)*P,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*p-n*l*p)*P,e[4]=x*P,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*d+t*h*d)*P,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*d-t*l*d)*P,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*P,e[8]=M*P,e[9]=(g*f*s-u*v*s-g*n*p+t*v*p+u*n*d-t*f*d)*P,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*P,e[12]=y*P,e[13]=(u*v*i-g*f*i+g*n*h-t*v*h-u*n*m+t*f*m)*P,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*m-t*a*m)*P,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,v=o*u,m=o*f,d=a*f,_=l*c,x=l*u,M=l*f,y=n.x,E=n.y,P=n.z;return i[0]=(1-(v+d))*y,i[1]=(p+M)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(p-M)*E,i[5]=(1-(h+d))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+x)*P,i[9]=(m-_)*P,i[10]=(1-(h+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new D,un=new vt,If=new D(0,0,0),Uf=new D(1,1,1),Qn=new D,Hr=new D,nn=new D,Ta=new vt,Aa=new Wt;class yi{constructor(e=0,t=0,n=0,i=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Aa.setFromEuler(this),this.setFromQuaternion(Aa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class Io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nf=0;const Ca=new D,Di=new Wt,Bn=new vt,Vr=new D,mr=new D,Of=new D,Ff=new Wt,Pa=new D(1,0,0),La=new D(0,1,0),Ra=new D(0,0,1),zf={type:"added"},Da={type:"removed"};class Et extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new D,t=new yi,n=new Wt,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new We}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Pa,e)}rotateY(e){return this.rotateOnAxis(La,e)}rotateZ(e){return this.rotateOnAxis(Ra,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pa,e)}translateY(e){return this.translateOnAxis(La,e)}translateZ(e){return this.translateOnAxis(Ra,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(mr,Vr,this.up):Bn.lookAt(Vr,mr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Bn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Da)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Da)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new D(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new D,Gn=new D,Qs=new D,Hn=new D,Ii=new D,Ui=new D,Ia=new D,Ks=new D,Js=new D,$s=new D;let Wr=!1;class dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fn.subVectors(i,t),Gn.subVectors(n,t),Qs.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Gn),l=fn.dot(Qs),c=Gn.dot(Gn),u=Gn.dot(Qs),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,n,i,s,o,a,l){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Hn),l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),Gn.subVectors(e,t),fn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),fn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wr=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ii.subVectors(i,n),Ui.subVectors(s,n),Ks.subVectors(e,n);const l=Ii.dot(Ks),c=Ui.dot(Ks);if(l<=0&&c<=0)return t.copy(n);Js.subVectors(e,i);const u=Ii.dot(Js),f=Ui.dot(Js);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);$s.subVectors(e,s);const p=Ii.dot($s),g=Ui.dot($s);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ui,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ia.subVectors(s,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(Ia,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kf=0;class cr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=Qi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function eo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=Ro(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=eo(o,s,e+1/3),this.g=eo(o,s,e),this.b=eo(o,s,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,tn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,tn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Pc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return tn.fromWorkingColorSpace(Ot.copy(this),e),jt(Ot.r*255,0,255)<<16^jt(Ot.g*255,0,255)<<8^jt(Ot.b*255,0,255)<<0}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=En){tn.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(jr);const n=Cr(hn.h,jr.h,t),i=Cr(hn.s,jr.s,t),s=Cr(hn.l,jr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=Pc;class ys extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new D,Xr=new Qe;class Dn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lc extends Dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Rc extends Dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Dn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bf=0;const on=new vt,to=new Et,Ni=new D,rn=new Or,gr=new Or,Dt=new D;class Xt extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?Rc:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return to.lookAt(e),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(rn.min,gr.min),rn.expandByPoint(Dt),Dt.addVectors(rn.max,gr.max),rn.expandByPoint(Dt)):(rn.expandByPoint(gr.min),rn.expandByPoint(gr.max))}rn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(e,c),Dt.add(Ni)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new D,u[b]=new D;const f=new D,h=new D,p=new D,g=new Qe,v=new Qe,m=new Qe,d=new D,_=new D;function x(b,F,k){f.fromArray(i,b*3),h.fromArray(i,F*3),p.fromArray(i,k*3),g.fromArray(o,b*2),v.fromArray(o,F*2),m.fromArray(o,k*2),h.sub(f),p.sub(f),v.sub(g),m.sub(g);const L=1/(v.x*m.y-m.x*v.y);!isFinite(L)||(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(L),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(L),c[b].add(d),c[F].add(d),c[k].add(d),u[b].add(_),u[F].add(_),u[k].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let b=0,F=M.length;b<F;++b){const k=M[b],L=k.start,O=k.count;for(let B=L,J=L+O;B<J;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new D,E=new D,P=new D,T=new D;function S(b){P.fromArray(s,b*3),T.copy(P);const F=c[b];y.copy(F),y.sub(P.multiplyScalar(P.dot(F))).normalize(),E.crossVectors(T,F);const L=E.dot(u[b])<0?-1:1;l[b*4]=y.x,l[b*4+1]=y.y,l[b*4+2]=y.z,l[b*4+3]=L}for(let b=0,F=M.length;b<F;++b){const k=M[b],L=k.start,O=k.count;for(let B=L,J=L+O;B<J;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Dn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new vt,yn=new Do,qr=new Ss,Na=new D,Oi=new D,Fi=new D,zi=new D,no=new D,Yr=new D,Zr=new Qe,Qr=new Qe,Kr=new Qe,Oa=new D,Fa=new D,za=new D,Jr=new D,$r=new D;class pe extends Et{constructor(e=new Xt,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(no.fromBufferAttribute(f,e),o?Yr.addScaledVector(no,u):Yr.addScaledVector(no.sub(t),u))}t.add(Yr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),yn.copy(e.ray).recast(e.near),qr.containsPoint(yn.origin)===!1&&(yn.intersectSphere(qr,Na)===null||yn.origin.distanceToSquared(Na)>(e.far-e.near)**2))||(Ua.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Ua),n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,h=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=i[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,y=x;M<y;M+=3){const E=a.getX(M),P=a.getX(M+1),T=a.getX(M+2);o=es(this,d,e,yn,c,u,f,E,P,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);o=es(this,i,e,yn,c,u,f,_,x,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,v=h.length;g<v;g++){const m=h[g],d=i[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,y=x;M<y;M+=3){const E=M,P=M+1,T=M+2;o=es(this,d,e,yn,c,u,f,E,P,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,M=m+2;o=es(this,i,e,yn,c,u,f,_,x,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Gf(r,e,t,n,i,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ti,a),l===null)return null;$r.copy(a),$r.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:r}}function es(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Oi),r.getVertexPosition(l,Fi),r.getVertexPosition(c,zi);const u=Gf(r,e,t,n,Oi,Fi,zi,Jr);if(u){i&&(Zr.fromBufferAttribute(i,a),Qr.fromBufferAttribute(i,l),Kr.fromBufferAttribute(i,c),u.uv=dn.getInterpolation(Jr,Oi,Fi,zi,Zr,Qr,Kr,new Qe)),s&&(Zr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,l),Kr.fromBufferAttribute(s,c),u.uv2=dn.getInterpolation(Jr,Oi,Fi,zi,Zr,Qr,Kr,new Qe)),o&&(Oa.fromBufferAttribute(o,a),Fa.fromBufferAttribute(o,l),za.fromBufferAttribute(o,c),u.normal=dn.getInterpolation(Jr,Oi,Fi,zi,Oa,Fa,za,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};dn.getNormal(Oi,Fi,zi,f.normal),u.face=f}return u}class bt extends Xt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function g(v,m,d,_,x,M,y,E,P,T,S){const b=M/P,F=y/T,k=M/2,L=y/2,O=E/2,B=P+1,J=T+1;let R=0,H=0;const Z=new D;for(let Q=0;Q<J;Q++){const ve=Q*F-L;for(let se=0;se<B;se++){const j=se*b-k;Z[v]=j*_,Z[m]=ve*x,Z[d]=O,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[d]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(se/P),f.push(1-Q/T),R+=1}}for(let Q=0;Q<T;Q++)for(let ve=0;ve<P;ve++){const se=h+ve+B*Q,j=h+ve+B*(Q+1),ee=h+(ve+1)+B*(Q+1),te=h+(ve+1)+B*Q;l.push(se,j,te),l.push(j,ee,te),H+=6}a.addGroup(p,H,S),p+=H,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=ir(r[t]);for(const i in n)e[i]=n[i]}return e}function Hf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Dc(r){return r.getRenderTarget()===null&&r.outputEncoding===ot?En:Ir}const Ic={clone:ir,merge:Ht};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Uc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Bi=1;class jf extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new sn(ki,Bi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new sn(ki,Bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new sn(ki,Bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new sn(ki,Bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new sn(ki,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new sn(ki,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Nc extends $t{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xf extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bt(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ei});s.uniforms.tEquirect.value=t;const o=new pe(i,s),a=t.minFilter;return t.minFilter===Rr&&(t.minFilter=ln),new jf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const io=new D,qf=new D,Yf=new We;class di{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=io.subVectors(n,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yf.getNormalMatrix(e),i=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Ss,ts=new D;class Uo{constructor(e=new di,t=new di,n=new di,i=new di,s=new di,o=new di){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],v=n[11],m=n[12],d=n[13],_=n[14],x=n[15];return t[0].setComponents(a-i,f-l,v-h,x-m).normalize(),t[1].setComponents(a+i,f+l,v+h,x+m).normalize(),t[2].setComponents(a+s,f+c,v+p,x+d).normalize(),t[3].setComponents(a-s,f-c,v-p,x-d).normalize(),t[4].setComponents(a-o,f-u,v-g,x-_).normalize(),t[5].setComponents(a+o,f+u,v+g,x+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ts.x=i.normal.x>0?e.max.x:e.min.x,ts.y=i.normal.y>0?e.max.y:e.min.y,ts.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ws extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let x=0;x<c;x++){const M=x*f-s;g.push(M,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const x=_+c*d,M=_+c*(d+1),y=_+1+c*(d+1),E=_+1+c*d;p.push(x,M,E),p.push(M,y,E)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh="vec3 transformed = vec3( position );",ih=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sh=`#ifdef USE_IRIDESCENCE
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
#endif`,oh=`#ifdef USE_BUMPMAP
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
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mh=`#define PI 3.141592653589793
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
} // validated`,gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_h=`vec3 transformedNormal = objectNormal;
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
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",yh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ih=`#ifdef USE_GRADIENTMAP
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
}`,Uh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
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
#endif`,kh=`#if defined( USE_ENVMAP )
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
#endif`,Bh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wh=`PhysicalMaterial material;
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
#endif`,jh=`struct PhysicalMaterial {
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
}`,Xh=`
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
#endif`,qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nd=`#if defined( USE_POINTS_UV )
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
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
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
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Rd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Od=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#ifdef USE_UV
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
#endif`,Hd=`#ifdef USE_UV
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
#endif`,Vd=`#ifdef USE_UV
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xd=`uniform sampler2D t2D;
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
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`#include <common>
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
}`,Jd=`#if DEPTH_PACKING == 3200
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
}`,$d=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`uniform float scale;
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
}`,rp=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,op=`uniform vec3 diffuse;
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
}`,ap=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,fp=`#define NORMAL
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
}`,hp=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,_p=`#define TOON
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
}`,vp=`#define TOON
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
}`,xp=`uniform float size;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,bp=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,yp=`uniform float rotation;
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
}`,wp=`uniform vec3 diffuse;
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
}`,ke={alphamap_fragment:Qf,alphamap_pars_fragment:Kf,alphatest_fragment:Jf,alphatest_pars_fragment:$f,aomap_fragment:eh,aomap_pars_fragment:th,begin_vertex:nh,beginnormal_vertex:ih,bsdfs:rh,iridescence_fragment:sh,bumpmap_pars_fragment:oh,clipping_planes_fragment:ah,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:ch,clipping_planes_vertex:uh,color_fragment:fh,color_pars_fragment:hh,color_pars_vertex:dh,color_vertex:ph,common:mh,cube_uv_reflection_fragment:gh,defaultnormal_vertex:_h,displacementmap_pars_vertex:vh,displacementmap_vertex:xh,emissivemap_fragment:Mh,emissivemap_pars_fragment:bh,encodings_fragment:Sh,encodings_pars_fragment:yh,envmap_fragment:wh,envmap_common_pars_fragment:Eh,envmap_pars_fragment:Th,envmap_pars_vertex:Ah,envmap_physical_pars_fragment:kh,envmap_vertex:Ch,fog_vertex:Ph,fog_pars_vertex:Lh,fog_fragment:Rh,fog_pars_fragment:Dh,gradientmap_pars_fragment:Ih,lightmap_fragment:Uh,lightmap_pars_fragment:Nh,lights_lambert_fragment:Oh,lights_lambert_pars_fragment:Fh,lights_pars_begin:zh,lights_toon_fragment:Bh,lights_toon_pars_fragment:Gh,lights_phong_fragment:Hh,lights_phong_pars_fragment:Vh,lights_physical_fragment:Wh,lights_physical_pars_fragment:jh,lights_fragment_begin:Xh,lights_fragment_maps:qh,lights_fragment_end:Yh,logdepthbuf_fragment:Zh,logdepthbuf_pars_fragment:Qh,logdepthbuf_pars_vertex:Kh,logdepthbuf_vertex:Jh,map_fragment:$h,map_pars_fragment:ed,map_particle_fragment:td,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:rd,morphcolor_vertex:sd,morphnormal_vertex:od,morphtarget_pars_vertex:ad,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:fd,normal_pars_vertex:hd,normal_vertex:dd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:vd,output_fragment:xd,packing:Md,premultiplied_alpha_fragment:bd,project_vertex:Sd,dithering_fragment:yd,dithering_pars_fragment:wd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:Ad,shadowmap_pars_vertex:Cd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Rd,skinning_pars_vertex:Dd,skinning_vertex:Id,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Od,tonemapping_fragment:Fd,tonemapping_pars_fragment:zd,transmission_fragment:kd,transmission_pars_fragment:Bd,uv_pars_fragment:Gd,uv_pars_vertex:Hd,uv_vertex:Vd,worldpos_vertex:Wd,background_vert:jd,background_frag:Xd,backgroundCube_vert:qd,backgroundCube_frag:Yd,cube_vert:Zd,cube_frag:Qd,depth_vert:Kd,depth_frag:Jd,distanceRGBA_vert:$d,distanceRGBA_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:rp,meshbasic_vert:sp,meshbasic_frag:op,meshlambert_vert:ap,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:up,meshnormal_vert:fp,meshnormal_frag:hp,meshphong_vert:dp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:_p,meshtoon_frag:vp,points_vert:xp,points_frag:Mp,shadow_vert:bp,shadow_frag:Sp,sprite_vert:yp,sprite_frag:wp},le={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},An={basic:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ht([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ht([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ht([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ht([le.points,le.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ht([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ht([le.common,le.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ht([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ht([le.sprite,le.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ht([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ht([le.lights,le.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};An.physical={uniforms:Ht([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ns={r:0,b:0,g:0};function Ep(r,e,t,n,i,s,o){const a=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x));const M=r.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?v(a,l):x&&x.isColor&&(v(x,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===bs)?(u===void 0&&(u=new pe(new bt(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ir(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.encoding!==ot,(f!==x||h!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new pe(new ws(2,2),new Xn({name:"BackgroundMaterial",uniforms:ir(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.encoding!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(ns,Dc(r)),n.buffers.color.setClear(ns.r,ns.g,ns.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function Tp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(O,B,J,R,H){let Z=!1;if(o){const Q=v(R,J,B);c!==Q&&(c=Q,p(c.object)),Z=d(O,R,J,H),Z&&_(O,R,J,H)}else{const Q=B.wireframe===!0;(c.geometry!==R.id||c.program!==J.id||c.wireframe!==Q)&&(c.geometry=R.id,c.program=J.id,c.wireframe=Q,Z=!0)}H!==null&&t.update(H,34963),(Z||u)&&(u=!1,T(O,B,J,R),H!==null&&r.bindBuffer(34963,t.get(H).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,B,J){const R=J.wireframe===!0;let H=a[O.id];H===void 0&&(H={},a[O.id]=H);let Z=H[B.id];Z===void 0&&(Z={},H[B.id]=Z);let Q=Z[R];return Q===void 0&&(Q=m(h()),Z[R]=Q),Q}function m(O){const B=[],J=[],R=[];for(let H=0;H<i;H++)B[H]=0,J[H]=0,R[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:R,object:O,attributes:{},index:null}}function d(O,B,J,R){const H=c.attributes,Z=B.attributes;let Q=0;const ve=J.getAttributes();for(const se in ve)if(ve[se].location>=0){const ee=H[se];let te=Z[se];if(te===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;Q++}return c.attributesNum!==Q||c.index!==R}function _(O,B,J,R){const H={},Z=B.attributes;let Q=0;const ve=J.getAttributes();for(const se in ve)if(ve[se].location>=0){let ee=Z[se];ee===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),H[se]=te,Q++}c.attributes=H,c.attributesNum=Q,c.index=R}function x(){const O=c.newAttributes;for(let B=0,J=O.length;B<J;B++)O[B]=0}function M(O){y(O,0)}function y(O,B){const J=c.newAttributes,R=c.enabledAttributes,H=c.attributeDivisors;J[O]=1,R[O]===0&&(r.enableVertexAttribArray(O),R[O]=1),H[O]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),H[O]=B)}function E(){const O=c.newAttributes,B=c.enabledAttributes;for(let J=0,R=B.length;J<R;J++)B[J]!==O[J]&&(r.disableVertexAttribArray(J),B[J]=0)}function P(O,B,J,R,H,Z){n.isWebGL2===!0&&(J===5124||J===5125)?r.vertexAttribIPointer(O,B,J,H,Z):r.vertexAttribPointer(O,B,J,R,H,Z)}function T(O,B,J,R){if(n.isWebGL2===!1&&(O.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=R.attributes,Z=J.getAttributes(),Q=B.defaultAttributeValues;for(const ve in Z){const se=Z[ve];if(se.location>=0){let j=H[ve];if(j===void 0&&(ve==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ve==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const ee=j.normalized,te=j.itemSize,ue=t.get(j);if(ue===void 0)continue;const N=ue.buffer,Re=ue.type,Ce=ue.bytesPerElement;if(j.isInterleavedBufferAttribute){const oe=j.data,Te=oe.stride,je=j.offset;if(oe.isInstancedInterleavedBuffer){for(let ye=0;ye<se.locationSize;ye++)y(se.location+ye,oe.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<se.locationSize;ye++)M(se.location+ye);r.bindBuffer(34962,N);for(let ye=0;ye<se.locationSize;ye++)P(se.location+ye,te/se.locationSize,Re,ee,Te*Ce,(je+te/se.locationSize*ye)*Ce)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<se.locationSize;oe++)y(se.location+oe,j.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<se.locationSize;oe++)M(se.location+oe);r.bindBuffer(34962,N);for(let oe=0;oe<se.locationSize;oe++)P(se.location+oe,te/se.locationSize,Re,ee,te*Ce,te/se.locationSize*oe*Ce)}}else if(Q!==void 0){const ee=Q[ve];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(se.location,ee);break;case 3:r.vertexAttrib3fv(se.location,ee);break;case 4:r.vertexAttrib4fv(se.location,ee);break;default:r.vertexAttrib1fv(se.location,ee)}}}}E()}function S(){k();for(const O in a){const B=a[O];for(const J in B){const R=B[J];for(const H in R)g(R[H].object),delete R[H];delete B[J]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;const B=a[O.id];for(const J in B){const R=B[J];for(const H in R)g(R[H].object),delete R[H];delete B[J]}delete a[O.id]}function F(O){for(const B in a){const J=a[B];if(J[O.id]===void 0)continue;const R=J[O.id];for(const H in R)g(R[H].object),delete R[H];delete J[O.id]}}function k(){L(),u=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function Ap(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Cp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),m=r.getParameter(36347),d=r.getParameter(36348),_=r.getParameter(36349),x=h>0,M=o||e.has("OES_texture_float"),y=x&&M,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function Pp(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new di,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,x=_*4;let M=d.clippingState||null;l.value=M,M=u(g,h,x,p);for(let y=0;y!==x;++y)M[y]=t[y];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(f[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Lp(r){let e=new WeakMap;function t(o,a){return a===xo?o.mapping=er:a===Mo&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===xo||a===Mo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xf(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fc extends Uc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,ka=[.125,.215,.35,.446,.526,.582],gi=20,ro=new Fc,Ba=new Je;let so=null;const pi=(1+Math.sqrt(5))/2,Gi=1/pi,Ga=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,pi,Gi),new D(0,pi,-Gi),new D(Gi,0,pi),new D(-Gi,0,pi),new D(pi,Gi,0),new D(-pi,Gi,0)];class Ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){so=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(so),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Dr,format:_n,encoding:ni,depthBuffer:!1},i=Va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(s)),this._blurMaterial=Dp(s,e,t)}return i}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,ro)}_sceneToCubeUV(e,t,n,i){const a=new sn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ba),u.toneMapping=Rn,u.autoClear=!1;const p=new ys({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new pe(new bt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Ba),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;is(i,_*x,d>2?x:0,x,x),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ro)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ga[(i-1)%Ga.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pe(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let _=0;for(let P=0;P<gi;++P){const T=P/v,S=Math.exp(-T*T/2);d.push(S),P===0?_+=S:P<m&&(_+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const M=this._sizeLods[i],y=3*M*(i>x-Xi?i-x+Xi:0),E=4*(this._cubeSize-M);is(t,y,E,3*M,2*M),l.setRenderTarget(t),l.render(f,ro)}}function Rp(r){const e=[],t=[],n=[];let i=r;const s=r-Xi+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Xi?l=ka[o-r+Xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let E=0;E<p;E++){const P=E%3*2/3-1,T=E>2?0:-1,S=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];_.set(S,v*g*E),x.set(h,m*g*E);const b=[E,E,E,E,E,E];M.set(b,d*g*E)}const y=new Xt;y.setAttribute("position",new Dn(_,v)),y.setAttribute("uv",new Dn(x,m)),y.setAttribute("faceIndex",new Dn(M,d)),e.push(y),i>Xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Va(r,e,t){const n=new ii(r,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Dp(r,e,t){const n=new Float32Array(gi),i=new D(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:No(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Wa(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ja(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function No(){return`

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
	`}function Ip(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xo||l===Mo,u=l===er||l===tr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ha(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Ha(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Up(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Np(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,M=_.length;x<M;x+=3){const y=_[x+0],E=_[x+1],P=_[x+2];h.push(y,E,E,P,P,y)}}else{const _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const y=x+0,E=x+1,P=x+2;h.push(y,E,E,P,P,y)}}const m=new(Ec(h)?Rc:Lc)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Op(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Fp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zp(r,e){return r[0]-e[0]}function kp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Bp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ut,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let B=function(){L.dispose(),s.delete(u),u.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),y===!0&&(S=3);let b=u.attributes.position.count*S,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*F*4*v),L=new Cc(k,b,F,v);L.type=Mi,L.needsUpdate=!0;const O=S*4;for(let J=0;J<v;J++){const R=E[J],H=P[J],Z=T[J],Q=b*F*4*J;for(let ve=0;ve<R.count;ve++){const se=ve*O;x===!0&&(o.fromBufferAttribute(R,ve),k[Q+se+0]=o.x,k[Q+se+1]=o.y,k[Q+se+2]=o.z,k[Q+se+3]=0),M===!0&&(o.fromBufferAttribute(H,ve),k[Q+se+4]=o.x,k[Q+se+5]=o.y,k[Q+se+6]=o.z,k[Q+se+7]=0),y===!0&&(o.fromBufferAttribute(Z,ve),k[Q+se+8]=o.x,k[Q+se+9]=o.y,k[Q+se+10]=o.z,k[Q+se+11]=Z.itemSize===4?o.w:1)}}m={count:v,texture:L,size:new Qe(b,F)},s.set(u,m),u.addEventListener("dispose",B)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let M=0;M<g;M++)v[M]=[M,0];n[u.id]=v}for(let M=0;M<g;M++){const y=v[M];y[0]=M,y[1]=h[M]}v.sort(kp);for(let M=0;M<8;M++)M<g&&v[M][1]?(a[M][0]=v[M][0],a[M][1]=v[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(zp);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const y=a[M],E=y[0],P=y[1];E!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+M)!==m[E]&&u.setAttribute("morphTarget"+M,m[E]),d&&u.getAttribute("morphNormal"+M)!==d[E]&&u.setAttribute("morphNormal"+M,d[E]),i[M]=P,_+=P):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(r,"morphTargetBaseInfluence",x),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Gp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const zc=new $t,kc=new Cc,Bc=new Rf,Gc=new Nc,Xa=[],qa=[],Ya=new Float32Array(16),Za=new Float32Array(9),Qa=new Float32Array(4);function ur(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xa[i];if(s===void 0&&(s=new Float32Array(i),Xa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Es(r,e){let t=qa[e];t===void 0&&(t=new Int32Array(e),qa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function Xp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Qa.set(n),r.uniformMatrix2fv(this.addr,!1,Qa),Pt(t,n)}}function qp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Za.set(n),r.uniformMatrix3fv(this.addr,!1,Za),Pt(t,n)}}function Yp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ya.set(n),r.uniformMatrix4fv(this.addr,!1,Ya),Pt(t,n)}}function Zp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function $p(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||zc,i)}function rm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bc,i)}function sm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gc,i)}function om(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kc,i)}function am(r){switch(r){case 5126:return Hp;case 35664:return Vp;case 35665:return Wp;case 35666:return jp;case 35674:return Xp;case 35675:return qp;case 35676:return Yp;case 5124:case 35670:return Zp;case 35667:case 35671:return Qp;case 35668:case 35672:return Kp;case 35669:case 35673:return Jp;case 5125:return $p;case 36294:return em;case 36295:return tm;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return om}}function lm(r,e){r.uniform1fv(this.addr,e)}function cm(r,e){const t=ur(e,this.size,2);r.uniform2fv(this.addr,t)}function um(r,e){const t=ur(e,this.size,3);r.uniform3fv(this.addr,t)}function fm(r,e){const t=ur(e,this.size,4);r.uniform4fv(this.addr,t)}function hm(r,e){const t=ur(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dm(r,e){const t=ur(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pm(r,e){const t=ur(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mm(r,e){r.uniform1iv(this.addr,e)}function gm(r,e){r.uniform2iv(this.addr,e)}function _m(r,e){r.uniform3iv(this.addr,e)}function vm(r,e){r.uniform4iv(this.addr,e)}function xm(r,e){r.uniform1uiv(this.addr,e)}function Mm(r,e){r.uniform2uiv(this.addr,e)}function bm(r,e){r.uniform3uiv(this.addr,e)}function Sm(r,e){r.uniform4uiv(this.addr,e)}function ym(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||zc,s[o])}function wm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bc,s[o])}function Em(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Gc,s[o])}function Tm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||kc,s[o])}function Am(r){switch(r){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return fm;case 35674:return hm;case 35675:return dm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return Mm;case 36295:return bm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Tm}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=am(t.type)}}class Pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Am(t.type)}}class Lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const oo=/(\w+)(\])?(\[|\.)?/g;function Ka(r,e){r.seq.push(e),r.map[e.id]=e}function Rm(r,e,t){const n=r.name,i=n.length;for(oo.lastIndex=0;;){const s=oo.exec(n),o=oo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ka(t,c===void 0?new Cm(a,r,e):new Pm(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Lm(a),Ka(t,f)),t=f}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Rm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ja(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Dm=0;function Im(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Um(r){switch(r){case ni:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function $a(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Im(r.getShaderSource(e),o)}else return i}function Nm(r,e){const t=Um(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Om(r,e){let t;switch(e){case ku:t="Linear";break;case Bu:t="Reinhard";break;case Gu:t="OptimizedCineon";break;case xc:t="ACESFilmic";break;case Hu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function zm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function km(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function br(r){return r!==""}function el(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(r){return r.replace(Bm,Gm)}function Gm(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Eo(t)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(r){return r.replace(Hm,Vm)}function Vm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function il(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===xr&&(e="SHADOWMAP_TYPE_VSM"),e}function jm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function qm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fu:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function Ym(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zm(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Wm(t),c=jm(t),u=Xm(t),f=qm(t),h=Ym(t),p=t.isWebGL2?"":Fm(t),g=zm(s),v=i.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(br).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(br).join(`
`),d.length>0&&(d+=`
`)):(m=[il(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),d=[p,il(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,Nm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Eo(o),o=el(o,t),o=tl(o,t),a=Eo(a),a=el(a,t),a=tl(a,t),o=nl(o),a=nl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+o,M=_+d+a,y=Ja(i,35633,x),E=Ja(i,35632,M);if(i.attachShader(v,y),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(v).trim(),b=i.getShaderInfoLog(y).trim(),F=i.getShaderInfoLog(E).trim();let k=!0,L=!0;if(i.getProgramParameter(v,35714)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,y,E);else{const O=$a(i,y,"vertex"),B=$a(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+S+`
`+O+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(b===""||F==="")&&(L=!1);L&&(this.diagnostics={runnable:k,programLog:S,vertexShader:{log:b,prefix:m},fragmentShader:{log:F,prefix:d}})}i.deleteShader(y),i.deleteShader(E);let P;this.getUniforms=function(){return P===void 0&&(P=new hs(i,v)),P};let T;return this.getAttributes=function(){return T===void 0&&(T=km(i,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Dm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}let Qm=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jm(e),t.set(e,n)),n}}class Jm{constructor(e){this.id=Qm++,this.code=e,this.usedTimes=0}}function $m(r,e,t,n,i,s,o){const a=new Io,l=new Km,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===1?"uv2":"uv"}function m(S,b,F,k,L){const O=k.fog,B=L.geometry,J=S.isMeshStandardMaterial?k.environment:null,R=(S.isMeshStandardMaterial?t:e).get(S.envMap||J),H=!!R&&R.mapping===bs?R.image.height:null,Z=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ve=Q!==void 0?Q.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let j,ee,te,ue;if(Z){const he=An[Z];j=he.vertexShader,ee=he.fragmentShader}else j=S.vertexShader,ee=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ue=l.getFragmentShaderID(S);const N=r.getRenderTarget(),Re=L.isInstancedMesh===!0,Ce=!!S.map,oe=!!S.matcap,Te=!!R,je=!!S.aoMap,ye=!!S.lightMap,Ue=!!S.bumpMap,lt=!!S.normalMap,xt=!!S.displacementMap,Mt=!!S.emissiveMap,_t=!!S.metalnessMap,Xe=!!S.roughnessMap,st=S.clearcoat>0,It=S.iridescence>0,C=S.sheen>0,w=S.transmission>0,q=st&&!!S.clearcoatMap,ne=st&&!!S.clearcoatNormalMap,re=st&&!!S.clearcoatRoughnessMap,fe=It&&!!S.iridescenceMap,Pe=It&&!!S.iridescenceThicknessMap,de=C&&!!S.sheenColorMap,$=C&&!!S.sheenRoughnessMap,xe=!!S.specularMap,we=!!S.specularColorMap,Ae=!!S.specularIntensityMap,ge=w&&!!S.transmissionMap,Me=w&&!!S.thicknessMap,Oe=!!S.gradientMap,Ze=!!S.alphaMap,ct=S.alphaTest>0,U=!!S.extensions,W=!!B.attributes.uv2;return{isWebGL2:u,shaderID:Z,shaderName:S.type,vertexShader:j,fragmentShader:ee,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ue,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Re,instancingColor:Re&&L.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?r.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:ni,map:Ce,matcap:oe,envMap:Te,envMapMode:Te&&R.mapping,envMapCubeUVHeight:H,aoMap:je,lightMap:ye,bumpMap:Ue,normalMap:lt,displacementMap:h&&xt,emissiveMap:Mt,normalMapObjectSpace:lt&&S.normalMapType===lf,normalMapTangentSpace:lt&&S.normalMapType===Sc,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&S.map.encoding===ot,metalnessMap:_t,roughnessMap:Xe,clearcoat:st,clearcoatMap:q,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,iridescence:It,iridescenceMap:fe,iridescenceThicknessMap:Pe,sheen:C,sheenColorMap:de,sheenRoughnessMap:$,specularMap:xe,specularColorMap:we,specularIntensityMap:Ae,transmission:w,transmissionMap:ge,thicknessMap:Me,gradientMap:Oe,opaque:S.transparent===!1&&S.blending===Qi,alphaMap:Ze,alphaTest:ct,combine:S.combine,mapUv:Ce&&v(S.map.channel),aoMapUv:je&&v(S.aoMap.channel),lightMapUv:ye&&v(S.lightMap.channel),bumpMapUv:Ue&&v(S.bumpMap.channel),normalMapUv:lt&&v(S.normalMap.channel),displacementMapUv:xt&&v(S.displacementMap.channel),emissiveMapUv:Mt&&v(S.emissiveMap.channel),metalnessMapUv:_t&&v(S.metalnessMap.channel),roughnessMapUv:Xe&&v(S.roughnessMap.channel),clearcoatMapUv:q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:$&&v(S.sheenRoughnessMap.channel),specularMapUv:xe&&v(S.specularMap.channel),specularColorMapUv:we&&v(S.specularColorMap.channel),specularIntensityMapUv:Ae&&v(S.specularIntensityMap.channel),transmissionMapUv:ge&&v(S.transmissionMap.channel),thicknessMapUv:Me&&v(S.thicknessMap.channel),alphaMapUv:Ze&&v(S.alphaMap.channel),vertexTangents:lt&&!!B.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:W,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ce||Ze),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:Rn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:U&&S.extensions.derivatives===!0,extensionFragDepth:U&&S.extensions.fragDepth===!0,extensionDrawBuffers:U&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)b.push(F),b.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(_(b,S),x(b,S),b.push(r.outputEncoding)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputEncoding),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUvs2&&a.enable(13),b.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.decodeVideoTexture&&a.enable(17),b.opaque&&a.enable(18),b.pointsUvs&&a.enable(19),S.push(a.mask)}function M(S){const b=g[S.type];let F;if(b){const k=An[b];F=Ic.clone(k.uniforms)}else F=S.uniforms;return F}function y(S,b){let F;for(let k=0,L=c.length;k<L;k++){const O=c[k];if(O.cacheKey===b){F=O,++F.usedTimes;break}}return F===void 0&&(F=new Zm(r,b,S,s),c.push(F)),F}function E(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function P(S){l.remove(S)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:y,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:T}}function eg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function tg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,g,v,m){let d=r[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},r[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(f,h,p,g,v,m){const d=o(f,h,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||tg),n.length>1&&n.sort(h||rl),i.length>1&&i.sort(h||rl)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function ng(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new sl,r.set(n,[o])):i>=s.length?(o=new sl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ig(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function rg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let sg=0;function og(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ag(r,e){const t=new ig,n=rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new D);const s=new D,o=new vt,a=new vt;function l(u,f){let h=0,p=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let v=0,m=0,d=0,_=0,x=0,M=0,y=0,E=0,P=0,T=0;u.sort(og);const S=f===!0?Math.PI:1;for(let F=0,k=u.length;F<k;F++){const L=u[F],O=L.color,B=L.intensity,J=L.distance,R=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B*S,p+=O.g*B*S,g+=O.b*B*S;else if(L.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],B);else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const Z=L.shadow,Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=R,i.directionalShadowMatrix[v]=L.shadow.matrix,M++}i.directional[v]=H,v++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(B*S),H.distance=J,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[d]=H;const Z=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,Z.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[d]=Z.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=R,E++}d++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=H,_++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Z=L.shadow,Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=R,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=H,m++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(B*S),H.groundColor.copy(L.groundColor).multiplyScalar(B*S),i.hemi[x]=H,x++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==v||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==_||b.hemiLength!==x||b.numDirectionalShadows!==M||b.numPointShadows!==y||b.numSpotShadows!==E||b.numSpotMaps!==P)&&(i.directional.length=v,i.spot.length=d,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,b.directionalLength=v,b.pointLength=m,b.spotLength=d,b.rectAreaLength=_,b.hemiLength=x,b.numDirectionalShadows=M,b.numPointShadows=y,b.numSpotShadows=E,b.numSpotMaps=P,i.version=sg++)}function c(u,f){let h=0,p=0,g=0,v=0,m=0;const d=f.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){const M=u[_];if(M.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),h++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),a.identity(),o.copy(M.matrixWorld),o.premultiply(d),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function ol(r,e){const t=new ag(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ol(r,e),t.set(s,[l])):o>=a.length?(l=new ol(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class cg extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ug extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`;function dg(r,e,t){let n=new Uo;const i=new Qe,s=new Qe,o=new Ut,a=new cg({depthPacking:af}),l=new ug,c={},u=t.maxTextureSize,f={[ti]:Jt,[Jt]:ti,[Cn]:Cn},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:fg,fragmentShader:hg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc,this.render=function(M,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const P=r.getRenderTarget(),T=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),b=r.state;b.setBlending(ei),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let F=0,k=M.length;F<k;F++){const L=M[F],O=L.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const B=O.getFrameExtents();if(i.multiply(B),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/B.x),i.x=s.x*B.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/B.y),i.y=s.y*B.y,O.mapSize.y=s.y)),O.map===null){const R=this.type!==xr?{minFilter:Vt,magFilter:Vt}:{};O.map=new ii(i.x,i.y,R),O.map.texture.name=L.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const J=O.getViewportCount();for(let R=0;R<J;R++){const H=O.getViewport(R);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),b.viewport(o),O.updateMatrices(L,R),n=O.getFrustum(),x(y,E,O.camera,L,this.type)}O.isPointLightShadow!==!0&&this.type===xr&&d(O,E),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(P,T,S)};function d(M,y){const E=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ii(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(y,null,E,h,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(y,null,E,p,v,null)}function _(M,y,E,P){let T=null;const S=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(S!==void 0)T=S;else if(T=E.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const b=T.uuid,F=y.uuid;let k=c[b];k===void 0&&(k={},c[b]=k);let L=k[F];L===void 0&&(L=T.clone(),k[F]=L),T=L}if(T.visible=y.visible,T.wireframe=y.wireframe,P===xr?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:f[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,E.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const b=r.properties.get(T);b.light=E}return T}function x(M,y,E,P,T){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&T===xr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const F=e.update(M),k=M.material;if(Array.isArray(k)){const L=F.groups;for(let O=0,B=L.length;O<B;O++){const J=L[O],R=k[J.materialIndex];if(R&&R.visible){const H=_(M,R,P,T);r.renderBufferDirect(E,null,F,H,M,J)}}}else if(k.visible){const L=_(M,k,P,T);r.renderBufferDirect(E,null,F,L,M,null)}}const b=M.children;for(let F=0,k=b.length;F<k;F++)x(b[F],y,E,P,T)}}function pg(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const W=new Ut;let ie=null;const he=new Ut(0,0,0,0);return{setMask:function(be){ie!==be&&!U&&(r.colorMask(be,be,be,be),ie=be)},setLocked:function(be){U=be},setClear:function(be,Ke,He,Tt,Yt){Yt===!0&&(be*=Tt,Ke*=Tt,He*=Tt),W.set(be,Ke,He,Tt),he.equals(W)===!1&&(r.clearColor(be,Ke,He,Tt),he.copy(W))},reset:function(){U=!1,ie=null,he.set(-1,0,0,0)}}}function s(){let U=!1,W=null,ie=null,he=null;return{setTest:function(be){be?N(2929):Re(2929)},setMask:function(be){W!==be&&!U&&(r.depthMask(be),W=be)},setFunc:function(be){if(ie!==be){switch(be){case Lu:r.depthFunc(512);break;case Ru:r.depthFunc(519);break;case Du:r.depthFunc(513);break;case vo:r.depthFunc(515);break;case Iu:r.depthFunc(514);break;case Uu:r.depthFunc(518);break;case Nu:r.depthFunc(516);break;case Ou:r.depthFunc(517);break;default:r.depthFunc(515)}ie=be}},setLocked:function(be){U=be},setClear:function(be){he!==be&&(r.clearDepth(be),he=be)},reset:function(){U=!1,W=null,ie=null,he=null}}}function o(){let U=!1,W=null,ie=null,he=null,be=null,Ke=null,He=null,Tt=null,Yt=null;return{setTest:function(ht){U||(ht?N(2960):Re(2960))},setMask:function(ht){W!==ht&&!U&&(r.stencilMask(ht),W=ht)},setFunc:function(ht,Lt,kt){(ie!==ht||he!==Lt||be!==kt)&&(r.stencilFunc(ht,Lt,kt),ie=ht,he=Lt,be=kt)},setOp:function(ht,Lt,kt){(Ke!==ht||He!==Lt||Tt!==kt)&&(r.stencilOp(ht,Lt,kt),Ke=ht,He=Lt,Tt=kt)},setLocked:function(ht){U=ht},setClear:function(ht){Yt!==ht&&(r.clearStencil(ht),Yt=ht)},reset:function(){U=!1,W=null,ie=null,he=null,be=null,Ke=null,He=null,Tt=null,Yt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,d=!1,_=null,x=null,M=null,y=null,E=null,P=null,T=null,S=!1,b=null,F=null,k=null,L=null,O=null;const B=r.getParameter(35661);let J=!1,R=0;const H=r.getParameter(7938);H.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=R>=1):H.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=R>=2);let Z=null,Q={};const ve=r.getParameter(3088),se=r.getParameter(2978),j=new Ut().fromArray(ve),ee=new Ut().fromArray(se);function te(U,W,ie){const he=new Uint8Array(4),be=r.createTexture();r.bindTexture(U,be),r.texParameteri(U,10241,9728),r.texParameteri(U,10240,9728);for(let Ke=0;Ke<ie;Ke++)r.texImage2D(W+Ke,0,6408,1,1,0,6408,5121,he);return be}const ue={};ue[3553]=te(3553,3553,1),ue[34067]=te(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(vo),xt(!1),Mt(Xo),N(2884),Ue(ei);function N(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Re(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ce(U,W){return p[U]!==W?(r.bindFramebuffer(U,W),p[U]=W,n&&(U===36009&&(p[36160]=W),U===36160&&(p[36009]=W)),!0):!1}function oe(U,W){let ie=v,he=!1;if(U)if(ie=g.get(W),ie===void 0&&(ie=[],g.set(W,ie)),U.isWebGLMultipleRenderTargets){const be=U.texture;if(ie.length!==be.length||ie[0]!==36064){for(let Ke=0,He=be.length;Ke<He;Ke++)ie[Ke]=36064+Ke;ie.length=be.length,he=!0}}else ie[0]!==36064&&(ie[0]=36064,he=!0);else ie[0]!==1029&&(ie[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Te(U){return m!==U?(r.useProgram(U),m=U,!0):!1}const je={[Wi]:32774,[xu]:32778,[Mu]:32779};if(n)je[Qo]=32775,je[Ko]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(je[Qo]=U.MIN_EXT,je[Ko]=U.MAX_EXT)}const ye={[bu]:0,[Su]:1,[yu]:768,[gc]:770,[Pu]:776,[Au]:774,[Eu]:772,[wu]:769,[_c]:771,[Cu]:775,[Tu]:773};function Ue(U,W,ie,he,be,Ke,He,Tt){if(U===ei){d===!0&&(Re(3042),d=!1);return}if(d===!1&&(N(3042),d=!0),U!==vu){if(U!==_||Tt!==S){if((x!==Wi||E!==Wi)&&(r.blendEquation(32774),x=Wi,E=Wi),Tt)switch(U){case Qi:r.blendFuncSeparate(1,771,1,771);break;case qo:r.blendFunc(1,1);break;case Yo:r.blendFuncSeparate(0,769,0,1);break;case Zo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Qi:r.blendFuncSeparate(770,771,1,771);break;case qo:r.blendFunc(770,1);break;case Yo:r.blendFuncSeparate(0,769,0,1);break;case Zo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,y=null,P=null,T=null,_=U,S=Tt}return}be=be||W,Ke=Ke||ie,He=He||he,(W!==x||be!==E)&&(r.blendEquationSeparate(je[W],je[be]),x=W,E=be),(ie!==M||he!==y||Ke!==P||He!==T)&&(r.blendFuncSeparate(ye[ie],ye[he],ye[Ke],ye[He]),M=ie,y=he,P=Ke,T=He),_=U,S=!1}function lt(U,W){U.side===Cn?Re(2884):N(2884);let ie=U.side===Jt;W&&(ie=!ie),xt(ie),U.blending===Qi&&U.transparent===!1?Ue(ei):Ue(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const he=U.stencilWrite;c.setTest(he),he&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(32926):Re(32926)}function xt(U){b!==U&&(U?r.frontFace(2304):r.frontFace(2305),b=U)}function Mt(U){U!==gu?(N(2884),U!==F&&(U===Xo?r.cullFace(1029):U===_u?r.cullFace(1028):r.cullFace(1032))):Re(2884),F=U}function _t(U){U!==k&&(J&&r.lineWidth(U),k=U)}function Xe(U,W,ie){U?(N(32823),(L!==W||O!==ie)&&(r.polygonOffset(W,ie),L=W,O=ie)):Re(32823)}function st(U){U?N(3089):Re(3089)}function It(U){U===void 0&&(U=33984+B-1),Z!==U&&(r.activeTexture(U),Z=U)}function C(U,W,ie){ie===void 0&&(Z===null?ie=33984+B-1:ie=Z);let he=Q[ie];he===void 0&&(he={type:void 0,texture:void 0},Q[ie]=he),(he.type!==U||he.texture!==W)&&(Z!==ie&&(r.activeTexture(ie),Z=ie),r.bindTexture(U,W||ue[U]),he.type=U,he.texture=W)}function w(){const U=Q[Z];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){j.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function Me(U){ee.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ee.copy(U))}function Oe(U,W){let ie=f.get(W);ie===void 0&&(ie=new WeakMap,f.set(W,ie));let he=ie.get(U);he===void 0&&(he=r.getUniformBlockIndex(W,U.name),ie.set(U,he))}function Ze(U,W){const he=f.get(W).get(U);u.get(W)!==he&&(r.uniformBlockBinding(W,he,U.__bindingPointIndex),u.set(W,he))}function ct(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,Q={},p={},g=new WeakMap,v=[],m=null,d=!1,_=null,x=null,M=null,y=null,E=null,P=null,T=null,S=!1,b=null,F=null,k=null,L=null,O=null,j.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:Re,bindFramebuffer:Ce,drawBuffers:oe,useProgram:Te,setBlending:Ue,setMaterial:lt,setFlipSided:xt,setCullFace:Mt,setLineWidth:_t,setPolygonOffset:Xe,setScissorTest:st,activeTexture:It,bindTexture:C,unbindTexture:w,compressedTexImage2D:q,compressedTexImage3D:ne,texImage2D:we,texImage3D:Ae,updateUBOMapping:Oe,uniformBlockBinding:Ze,texStorage2D:$,texStorage3D:xe,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:de,scissor:ge,viewport:Me,reset:ct}}function mg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return d?new OffscreenCanvas(C,w):Nr("canvas")}function x(C,w,q,ne){let re=1;if((C.width>ne||C.height>ne)&&(re=ne/Math.max(C.width,C.height)),re<1||w===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const fe=w?wc:Math.floor,Pe=fe(re*C.width),de=fe(re*C.height);v===void 0&&(v=_(Pe,de));const $=q?_(Pe,de):v;return $.width=Pe,$.height=de,$.getContext("2d").drawImage(C,0,0,Pe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Pe+"x"+de+")."),$}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return wo(C.width)&&wo(C.height)}function y(C){return a?!1:C.wrapS!==gn||C.wrapT!==gn||C.minFilter!==Vt&&C.minFilter!==ln}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==Vt&&C.minFilter!==ln}function P(C){r.generateMipmap(C)}function T(C,w,q,ne,re=!1){if(a===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=w;return w===6403&&(q===5126&&(fe=33326),q===5131&&(fe=33325),q===5121&&(fe=33321)),w===33319&&(q===5126&&(fe=33328),q===5131&&(fe=33327),q===5121&&(fe=33323)),w===6408&&(q===5126&&(fe=34836),q===5131&&(fe=34842),q===5121&&(fe=ne===ot&&re===!1?35907:32856),q===32819&&(fe=32854),q===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function S(C,w,q){return E(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===Vt||C===Jo||C===Us?9728:9729}function F(C){const w=C.target;w.removeEventListener("dispose",F),L(w),w.isVideoTexture&&g.delete(w)}function k(C){const w=C.target;w.removeEventListener("dispose",k),B(w)}function L(C){const w=n.get(C);if(w.__webglInit===void 0)return;const q=C.source,ne=m.get(q);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(C),Object.keys(ne).length===0&&m.delete(q)}n.remove(C)}function O(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const q=C.source,ne=m.get(q);delete ne[w.__cacheKey],o.memory.textures--}function B(C){const w=C.texture,q=n.get(C),ne=n.get(w);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(q.__webglFramebuffer[re]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,fe=w.length;re<fe;re++){const Pe=n.get(w[re]);Pe.__webglTexture&&(r.deleteTexture(Pe.__webglTexture),o.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(C)}let J=0;function R(){J=0}function H(){const C=J;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),J+=1,C}function Z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function Q(C,w){const q=n.get(C);if(C.isVideoTexture&&st(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(q,C,w);return}}t.bindTexture(3553,q.__webglTexture,33984+w)}function ve(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Re(q,C,w);return}t.bindTexture(35866,q.__webglTexture,33984+w)}function se(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Re(q,C,w);return}t.bindTexture(32879,q.__webglTexture,33984+w)}function j(C,w){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Ce(q,C,w);return}t.bindTexture(34067,q.__webglTexture,33984+w)}const ee={[bo]:10497,[gn]:33071,[So]:33648},te={[Vt]:9728,[Jo]:9984,[Us]:9986,[ln]:9729,[Vu]:9985,[Rr]:9987};function ue(C,w,q){if(q?(r.texParameteri(C,10242,ee[w.wrapS]),r.texParameteri(C,10243,ee[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ee[w.wrapR]),r.texParameteri(C,10240,te[w.magFilter]),r.texParameteri(C,10241,te[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==gn||w.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,b(w.magFilter)),r.texParameteri(C,10241,b(w.minFilter)),w.minFilter!==Vt&&w.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Vt||w.minFilter!==Us&&w.minFilter!==Rr||w.type===Mi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Dr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function N(C,w){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",F));const ne=w.source;let re=m.get(ne);re===void 0&&(re={},m.set(ne,re));const fe=Z(w);if(fe!==C.__cacheKey){re[fe]===void 0&&(re[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[fe].usedTimes++;const Pe=re[C.__cacheKey];Pe!==void 0&&(re[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&O(w)),C.__cacheKey=fe,C.__webglTexture=re[fe].texture}return q}function Re(C,w,q){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=N(C,w),fe=w.source;t.bindTexture(ne,C.__webglTexture,33984+q);const Pe=n.get(fe);if(fe.version!==Pe.__version||re===!0){t.activeTexture(33984+q),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const de=y(w)&&M(w.image)===!1;let $=x(w.image,de,!1,u);$=It(w,$);const xe=M($)||a,we=s.convert(w.format,w.encoding);let Ae=s.convert(w.type),ge=T(w.internalFormat,we,Ae,w.encoding,w.isVideoTexture);ue(ne,w,xe);let Me;const Oe=w.mipmaps,Ze=a&&w.isVideoTexture!==!0,ct=Pe.__version===void 0||re===!0,U=S(w,$,xe);if(w.isDepthTexture)ge=6402,a?w.type===Mi?ge=36012:w.type===xi?ge=33190:w.type===Ki?ge=35056:ge=33189:w.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===bi&&ge===6402&&w.type!==bc&&w.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=xi,Ae=s.convert(w.type)),w.format===nr&&ge===6402&&(ge=34041,w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ki,Ae=s.convert(w.type))),ct&&(Ze?t.texStorage2D(3553,1,ge,$.width,$.height):t.texImage2D(3553,0,ge,$.width,$.height,0,we,Ae,null));else if(w.isDataTexture)if(Oe.length>0&&xe){Ze&&ct&&t.texStorage2D(3553,U,ge,Oe[0].width,Oe[0].height);for(let W=0,ie=Oe.length;W<ie;W++)Me=Oe[W],Ze?t.texSubImage2D(3553,W,0,0,Me.width,Me.height,we,Ae,Me.data):t.texImage2D(3553,W,ge,Me.width,Me.height,0,we,Ae,Me.data);w.generateMipmaps=!1}else Ze?(ct&&t.texStorage2D(3553,U,ge,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,we,Ae,$.data)):t.texImage2D(3553,0,ge,$.width,$.height,0,we,Ae,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&ct&&t.texStorage3D(35866,U,ge,Oe[0].width,Oe[0].height,$.depth);for(let W=0,ie=Oe.length;W<ie;W++)Me=Oe[W],w.format!==_n?we!==null?Ze?t.compressedTexSubImage3D(35866,W,0,0,0,Me.width,Me.height,$.depth,we,Me.data,0,0):t.compressedTexImage3D(35866,W,ge,Me.width,Me.height,$.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(35866,W,0,0,0,Me.width,Me.height,$.depth,we,Ae,Me.data):t.texImage3D(35866,W,ge,Me.width,Me.height,$.depth,0,we,Ae,Me.data)}else{Ze&&ct&&t.texStorage2D(3553,U,ge,Oe[0].width,Oe[0].height);for(let W=0,ie=Oe.length;W<ie;W++)Me=Oe[W],w.format!==_n?we!==null?Ze?t.compressedTexSubImage2D(3553,W,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(3553,W,ge,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,W,0,0,Me.width,Me.height,we,Ae,Me.data):t.texImage2D(3553,W,ge,Me.width,Me.height,0,we,Ae,Me.data)}else if(w.isDataArrayTexture)Ze?(ct&&t.texStorage3D(35866,U,ge,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,we,Ae,$.data)):t.texImage3D(35866,0,ge,$.width,$.height,$.depth,0,we,Ae,$.data);else if(w.isData3DTexture)Ze?(ct&&t.texStorage3D(32879,U,ge,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,we,Ae,$.data)):t.texImage3D(32879,0,ge,$.width,$.height,$.depth,0,we,Ae,$.data);else if(w.isFramebufferTexture){if(ct)if(Ze)t.texStorage2D(3553,U,ge,$.width,$.height);else{let W=$.width,ie=$.height;for(let he=0;he<U;he++)t.texImage2D(3553,he,ge,W,ie,0,we,Ae,null),W>>=1,ie>>=1}}else if(Oe.length>0&&xe){Ze&&ct&&t.texStorage2D(3553,U,ge,Oe[0].width,Oe[0].height);for(let W=0,ie=Oe.length;W<ie;W++)Me=Oe[W],Ze?t.texSubImage2D(3553,W,0,0,we,Ae,Me):t.texImage2D(3553,W,ge,we,Ae,Me);w.generateMipmaps=!1}else Ze?(ct&&t.texStorage2D(3553,U,ge,$.width,$.height),t.texSubImage2D(3553,0,0,0,we,Ae,$)):t.texImage2D(3553,0,ge,we,Ae,$);E(w,xe)&&P(ne),Pe.__version=fe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Ce(C,w,q){if(w.image.length!==6)return;const ne=N(C,w),re=w.source;t.bindTexture(34067,C.__webglTexture,33984+q);const fe=n.get(re);if(re.version!==fe.__version||ne===!0){t.activeTexture(33984+q),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,$=[];for(let W=0;W<6;W++)!Pe&&!de?$[W]=x(w.image[W],!1,!0,c):$[W]=de?w.image[W].image:w.image[W],$[W]=It(w,$[W]);const xe=$[0],we=M(xe)||a,Ae=s.convert(w.format,w.encoding),ge=s.convert(w.type),Me=T(w.internalFormat,Ae,ge,w.encoding),Oe=a&&w.isVideoTexture!==!0,Ze=fe.__version===void 0||ne===!0;let ct=S(w,xe,we);ue(34067,w,we);let U;if(Pe){Oe&&Ze&&t.texStorage2D(34067,ct,Me,xe.width,xe.height);for(let W=0;W<6;W++){U=$[W].mipmaps;for(let ie=0;ie<U.length;ie++){const he=U[ie];w.format!==_n?Ae!==null?Oe?t.compressedTexSubImage2D(34069+W,ie,0,0,he.width,he.height,Ae,he.data):t.compressedTexImage2D(34069+W,ie,Me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+W,ie,0,0,he.width,he.height,Ae,ge,he.data):t.texImage2D(34069+W,ie,Me,he.width,he.height,0,Ae,ge,he.data)}}}else{U=w.mipmaps,Oe&&Ze&&(U.length>0&&ct++,t.texStorage2D(34067,ct,Me,$[0].width,$[0].height));for(let W=0;W<6;W++)if(de){Oe?t.texSubImage2D(34069+W,0,0,0,$[W].width,$[W].height,Ae,ge,$[W].data):t.texImage2D(34069+W,0,Me,$[W].width,$[W].height,0,Ae,ge,$[W].data);for(let ie=0;ie<U.length;ie++){const be=U[ie].image[W].image;Oe?t.texSubImage2D(34069+W,ie+1,0,0,be.width,be.height,Ae,ge,be.data):t.texImage2D(34069+W,ie+1,Me,be.width,be.height,0,Ae,ge,be.data)}}else{Oe?t.texSubImage2D(34069+W,0,0,0,Ae,ge,$[W]):t.texImage2D(34069+W,0,Me,Ae,ge,$[W]);for(let ie=0;ie<U.length;ie++){const he=U[ie];Oe?t.texSubImage2D(34069+W,ie+1,0,0,Ae,ge,he.image[W]):t.texImage2D(34069+W,ie+1,Me,Ae,ge,he.image[W])}}}E(w,we)&&P(34067),fe.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function oe(C,w,q,ne,re){const fe=s.convert(q.format,q.encoding),Pe=s.convert(q.type),de=T(q.internalFormat,fe,Pe,q.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,de,w.width,w.height,w.depth,0,fe,Pe,null):t.texImage2D(re,0,de,w.width,w.height,0,fe,Pe,null)),t.bindFramebuffer(36160,C),Xe(w)?h.framebufferTexture2DMultisampleEXT(36160,ne,re,n.get(q).__webglTexture,0,_t(w)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ne,re,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(C,w,q){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(q||Xe(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Mi?ne=36012:re.type===xi&&(ne=33190));const fe=_t(w);Xe(w)?h.renderbufferStorageMultisampleEXT(36161,fe,ne,w.width,w.height):r.renderbufferStorageMultisample(36161,fe,ne,w.width,w.height)}else r.renderbufferStorage(36161,ne,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ne=_t(w);q&&Xe(w)===!1?r.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Xe(w)?h.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const fe=ne[re],Pe=s.convert(fe.format,fe.encoding),de=s.convert(fe.type),$=T(fe.internalFormat,Pe,de,fe.encoding),xe=_t(w);q&&Xe(w)===!1?r.renderbufferStorageMultisample(36161,xe,$,w.width,w.height):Xe(w)?h.renderbufferStorageMultisampleEXT(36161,xe,$,w.width,w.height):r.renderbufferStorage(36161,$,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function je(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,re=_t(w);if(w.depthTexture.format===bi)Xe(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===nr)Xe(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function ye(C){const w=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");je(w.__webglFramebuffer,C)}else if(q){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=r.createRenderbuffer(),Te(w.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Te(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ue(C,w,q){const ne=n.get(C);w!==void 0&&oe(ne.__webglFramebuffer,C,C.texture,36064,3553),q!==void 0&&ye(C)}function lt(C){const w=C.texture,q=n.get(C),ne=n.get(w);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=w.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,Pe=M(C)||a;if(re){q.__webglFramebuffer=[];for(let de=0;de<6;de++)q.__webglFramebuffer[de]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const de=C.texture;for(let $=0,xe=de.length;$<xe;$++){const we=n.get(de[$]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Xe(C)===!1){const de=fe?w:[w];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let $=0;$<de.length;$++){const xe=de[$];q.__webglColorRenderbuffer[$]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[$]);const we=s.convert(xe.format,xe.encoding),Ae=s.convert(xe.type),ge=T(xe.internalFormat,we,Ae,xe.encoding,C.isXRRenderTarget===!0),Me=_t(C);r.renderbufferStorageMultisample(36161,Me,ge,C.width,C.height),r.framebufferRenderbuffer(36160,36064+$,36161,q.__webglColorRenderbuffer[$])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),ue(34067,w,Pe);for(let de=0;de<6;de++)oe(q.__webglFramebuffer[de],C,w,36064,34069+de);E(w,Pe)&&P(34067),t.unbindTexture()}else if(fe){const de=C.texture;for(let $=0,xe=de.length;$<xe;$++){const we=de[$],Ae=n.get(we);t.bindTexture(3553,Ae.__webglTexture),ue(3553,we,Pe),oe(q.__webglFramebuffer,C,we,36064+$,3553),E(we,Pe)&&P(3553)}t.unbindTexture()}else{let de=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?de=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ne.__webglTexture),ue(de,w,Pe),oe(q.__webglFramebuffer,C,w,36064,de),E(w,Pe)&&P(de),t.unbindTexture()}C.depthBuffer&&ye(C)}function xt(C){const w=M(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,re=q.length;ne<re;ne++){const fe=q[ne];if(E(fe,w)){const Pe=C.isWebGLCubeRenderTarget?34067:3553,de=n.get(fe).__webglTexture;t.bindTexture(Pe,de),P(Pe),t.unbindTexture()}}}function Mt(C){if(a&&C.samples>0&&Xe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ne=C.height;let re=16384;const fe=[],Pe=C.stencilBuffer?33306:36096,de=n.get(C),$=C.isWebGLMultipleRenderTargets===!0;if($)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){fe.push(36064+xe),C.depthBuffer&&fe.push(Pe);const we=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),$&&r.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[xe]),we===!0&&(r.invalidateFramebuffer(36008,[Pe]),r.invalidateFramebuffer(36009,[Pe])),$){const Ae=n.get(w[xe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ae,0)}r.blitFramebuffer(0,0,q,ne,0,0,q,ne,re,9728),p&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+xe,36161,de.__webglColorRenderbuffer[xe]);const we=n.get(w[xe]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+xe,3553,we,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function _t(C){return Math.min(f,C.samples)}function Xe(C){const w=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function st(C){const w=o.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function It(C,w){const q=C.encoding,ne=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===yo||q!==ni&&(q===ot?a===!1?e.has("EXT_sRGB")===!0&&ne===_n?(C.format=yo,C.minFilter=ln,C.generateMipmaps=!1):w=Tc.sRGBToLinear(w):(ne!==_n||re!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=Q,this.setTexture2DArray=ve,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Xe}function gg(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Si)return 5121;if(s===qu)return 32819;if(s===Yu)return 32820;if(s===Wu)return 5120;if(s===ju)return 5122;if(s===bc)return 5123;if(s===Xu)return 5124;if(s===xi)return 5125;if(s===Mi)return 5126;if(s===Dr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zu)return 6406;if(s===_n)return 6408;if(s===Qu)return 6409;if(s===Ku)return 6410;if(s===bi)return 6402;if(s===nr)return 34041;if(s===yo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ju)return 6403;if(s===$u)return 36244;if(s===ef)return 33319;if(s===tf)return 33320;if(s===nf)return 36249;if(s===Ns||s===Os||s===Fs||s===zs)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ns)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ns)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$o||s===ea||s===ta||s===na)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$o)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ea)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ta)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===na)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ia||s===ra)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ia)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ra)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sa||s===oa||s===aa||s===la||s===ca||s===ua||s===fa||s===ha||s===da||s===pa||s===ma||s===ga||s===_a||s===va)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===oa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===aa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===la)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ca)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ua)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ha)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===da)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pa)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ma)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ga)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_a)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===va)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ks)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ks)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===sf||s===xa||s===Ma||s===ba)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ks)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ba)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ki?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class _g extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rs extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xg extends $t{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:bi,u!==bi&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bi&&(n=xi),n===void 0&&u===nr&&(n=Ki),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1}}class Mg extends ar{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const v=t.getContextAttributes();let m=null,d=null;const _=[],x=[],M=new Set,y=new Map,E=new sn;E.layers.enable(1),E.viewport=new Ut;const P=new sn;P.layers.enable(2),P.viewport=new Ut;const T=[E,P],S=new _g;S.layers.enable(1),S.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=_[j];return ee===void 0&&(ee=new ao,_[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=_[j];return ee===void 0&&(ee=new ao,_[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=_[j];return ee===void 0&&(ee=new ao,_[j]=ee),ee.getHandSpace()};function k(j){const ee=x.indexOf(j.inputSource);if(ee===-1)return;const te=_[ee];te!==void 0&&te.dispatchEvent({type:j.type,data:j.inputSource})}function L(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",O);for(let j=0;j<_.length;j++){const ee=x[j];ee!==null&&(x[j]=null,_[j].disconnect(ee))}b=null,F=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",L),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),d=new ii(p.framebufferWidth,p.framebufferHeight,{format:_n,type:Si,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let ee=null,te=null,ue=null;v.depth&&(ue=v.stencil?35056:33190,ee=v.stencil?nr:bi,te=v.stencil?Ki:xi);const N={colorFormat:32856,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(N),i.updateRenderState({layers:[h]}),d=new ii(h.textureWidth,h.textureHeight,{format:_n,type:Si,depthTexture:new xg(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(j){for(let ee=0;ee<j.removed.length;ee++){const te=j.removed[ee],ue=x.indexOf(te);ue>=0&&(x[ue]=null,_[ue].disconnect(te))}for(let ee=0;ee<j.added.length;ee++){const te=j.added[ee];let ue=x.indexOf(te);if(ue===-1){for(let Re=0;Re<_.length;Re++)if(Re>=x.length){x.push(te),ue=Re;break}else if(x[Re]===null){x[Re]=te,ue=Re;break}if(ue===-1)break}const N=_[ue];N&&N.connect(te)}}const B=new D,J=new D;function R(j,ee,te){B.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const ue=B.distanceTo(J),N=ee.projectionMatrix.elements,Re=te.projectionMatrix.elements,Ce=N[14]/(N[10]-1),oe=N[14]/(N[10]+1),Te=(N[9]+1)/N[5],je=(N[9]-1)/N[5],ye=(N[8]-1)/N[0],Ue=(Re[8]+1)/Re[0],lt=Ce*ye,xt=Ce*Ue,Mt=ue/(-ye+Ue),_t=Mt*-ye;ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(Mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const Xe=Ce+Mt,st=oe+Mt,It=lt-_t,C=xt+(ue-_t),w=Te*oe/st*Xe,q=je*oe/st*Xe;j.projectionMatrix.makePerspective(It,C,w,q,Xe,st),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function H(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;S.near=P.near=E.near=j.near,S.far=P.far=E.far=j.far,(b!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,F=S.far);const ee=j.parent,te=S.cameras;H(S,ee);for(let ue=0;ue<te.length;ue++)H(te[ue],ee);te.length===2?R(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),Z(j,S,ee)};function Z(j,ee,te){te===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(te.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0);const ue=j.children;for(let N=0,Re=ue.length;N<Re;N++)ue[N].updateMatrixWorld(!0);j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ur*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.getPlanes=function(){return M};let Q=null;function ve(j,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){const te=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ue=!1;te.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let N=0;N<te.length;N++){const Re=te[N];let Ce=null;if(p!==null)Ce=p.getViewport(Re);else{const Te=f.getViewSubImage(h,Re);Ce=Te.viewport,N===0&&(e.setRenderTargetTextures(d,Te.colorTexture,h.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(d))}let oe=T[N];oe===void 0&&(oe=new sn,oe.layers.enable(N),oe.viewport=new Ut,T[N]=oe),oe.matrix.fromArray(Re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),N===0&&(S.matrix.copy(oe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(oe)}}for(let te=0;te<_.length;te++){const ue=x[te],N=_[te];ue!==null&&N!==void 0&&N.update(ue,ee,c||o)}if(Q&&Q(j,ee),ee.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ee.detectedPlanes});let te=null;for(const ue of M)ee.detectedPlanes.has(ue)||(te===null&&(te=[]),te.push(ue));if(te!==null)for(const ue of te)M.delete(ue),y.delete(ue),n.dispatchEvent({type:"planeremoved",data:ue});for(const ue of ee.detectedPlanes)if(!M.has(ue))M.add(ue),y.set(ue,ee.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ue});else{const N=y.get(ue);ue.lastChangedTime>N&&(y.set(ue,ue.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ue}))}}g=null}const se=new Oc;se.setAnimationLoop(ve),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}}function bg(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Dc(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sg(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(_,x){const M=x.program;n.uniformBlockBinding(_,M)}function c(_,x){let M=i[_.id];M===void 0&&(g(_),M=u(_),i[_.id]=M,_.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(_,y);const E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function u(_){const x=f();_.__bindingPointIndex=x;const M=r.createBuffer(),y=_.__size,E=_.usage;return r.bindBuffer(35345,M),r.bufferData(35345,y,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=i[_.id],M=_.uniforms,y=_.__cache;r.bindBuffer(35345,x);for(let E=0,P=M.length;E<P;E++){const T=M[E];if(p(T,E,y)===!0){const S=T.__offset,b=Array.isArray(T.value)?T.value:[T.value];let F=0;for(let k=0;k<b.length;k++){const L=b[k],O=v(L);typeof L=="number"?(T.__data[0]=L,r.bufferSubData(35345,S+F,T.__data)):L.isMatrix3?(T.__data[0]=L.elements[0],T.__data[1]=L.elements[1],T.__data[2]=L.elements[2],T.__data[3]=L.elements[0],T.__data[4]=L.elements[3],T.__data[5]=L.elements[4],T.__data[6]=L.elements[5],T.__data[7]=L.elements[0],T.__data[8]=L.elements[6],T.__data[9]=L.elements[7],T.__data[10]=L.elements[8],T.__data[11]=L.elements[0]):(L.toArray(T.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,T.__data)}}r.bindBuffer(35345,null)}function p(_,x,M){const y=_.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const E=Array.isArray(y)?y:[y],P=[];for(let T=0;T<E.length;T++)P.push(E[T].clone());M[x]=P}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const E=Array.isArray(M[x])?M[x]:[M[x]],P=Array.isArray(y)?y:[y];for(let T=0;T<E.length;T++){const S=E[T];if(S.equals(P[T])===!1)return S.copy(P[T]),!0}}return!1}function g(_){const x=_.uniforms;let M=0;const y=16;let E=0;for(let P=0,T=x.length;P<T;P++){const S=x[P],b={boundary:0,storage:0},F=Array.isArray(S.value)?S.value:[S.value];for(let k=0,L=F.length;k<L;k++){const O=F[k],B=v(O);b.boundary+=B.boundary,b.storage+=B.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,P>0){E=M%y;const k=y-E;E!==0&&k-b.boundary<0&&(M+=y-E,S.__offset=M)}M+=b.storage}return E=M%y,E>0&&(M+=y-E),_.__size=M,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}function yg(){const r=Nr("canvas");return r.style.display="block",r}class Hc{constructor(e={}){const{canvas:t=yg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let p=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ni,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const d=this;let _=!1,x=0,M=0,y=null,E=-1,P=null;const T=new Ut,S=new Ut;let b=null,F=t.width,k=t.height,L=1,O=null,B=null;const J=new Ut(0,0,F,k),R=new Ut(0,0,F,k);let H=!1;const Z=new Uo;let Q=!1,ve=!1,se=null;const j=new vt,ee=new D,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return y===null?L:1}let N=n;function Re(A,z){for(let Y=0;Y<A.length;Y++){const G=A[Y],X=t.getContext(G,z);if(X!==null)return X}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),N===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),N=Re(z,A),N===null)throw Re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ce,oe,Te,je,ye,Ue,lt,xt,Mt,_t,Xe,st,It,C,w,q,ne,re,fe,Pe,de,$,xe,we;function Ae(){Ce=new Up(N),oe=new Cp(N,Ce,e),Ce.init(oe),$=new gg(N,Ce,oe),Te=new pg(N,Ce,oe),je=new Fp,ye=new eg,Ue=new mg(N,Ce,Te,ye,oe,$,je),lt=new Lp(d),xt=new Ip(d),Mt=new Zf(N,oe),xe=new Tp(N,Ce,Mt,oe),_t=new Np(N,Mt,je,xe),Xe=new Gp(N,_t,Mt,je),fe=new Bp(N,oe,Ue),q=new Pp(ye),st=new $m(d,lt,xt,Ce,oe,xe,q),It=new bg(d,ye),C=new ng,w=new lg(Ce,oe),re=new Ep(d,lt,xt,Te,Xe,h,l),ne=new dg(d,Xe,oe),we=new Sg(N,je,oe,Te),Pe=new Ap(N,Ce,je,oe),de=new Op(N,Ce,je,oe),je.programs=st.programs,d.capabilities=oe,d.extensions=Ce,d.properties=ye,d.renderLists=C,d.shadowMap=ne,d.state=Te,d.info=je}Ae();const ge=new Mg(d,N);this.xr=ge,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(F,k,!1))},this.getSize=function(A){return A.set(F,k)},this.setSize=function(A,z,Y=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,k=z,t.width=Math.floor(A*L),t.height=Math.floor(z*L),Y===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(F*L,k*L).floor()},this.setDrawingBufferSize=function(A,z,Y){F=A,k=z,L=Y,t.width=Math.floor(A*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,z,Y,G){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,Y,G),Te.viewport(T.copy(J).multiplyScalar(L).floor())},this.getScissor=function(A){return A.copy(R)},this.setScissor=function(A,z,Y,G){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,z,Y,G),Te.scissor(S.copy(R).multiplyScalar(L).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(A){Te.setScissorTest(H=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,z=!0,Y=!0){let G=0;A&&(G|=16384),z&&(G|=256),Y&&(G|=1024),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),C.dispose(),w.dispose(),ye.dispose(),lt.dispose(),xt.dispose(),Xe.dispose(),xe.dispose(),we.dispose(),st.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",be),ge.removeEventListener("sessionend",Ke),se&&(se.dispose(),se=null),He.stop()};function Me(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=je.autoReset,z=ne.enabled,Y=ne.autoUpdate,G=ne.needsUpdate,X=ne.type;Ae(),je.autoReset=A,ne.enabled=z,ne.autoUpdate=Y,ne.needsUpdate=G,ne.type=X}function Ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){const z=A.target;z.removeEventListener("dispose",ct),U(z)}function U(A){W(A),ye.remove(A)}function W(A){const z=ye.get(A).programs;z!==void 0&&(z.forEach(function(Y){st.releaseProgram(Y)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Y,G,X,ae){z===null&&(z=te);const me=X.isMesh&&X.matrixWorld.determinant()<0,De=Fr(A,z,Y,G,X);Te.setMaterial(G,me);let ze=Y.index,Be=1;G.wireframe===!0&&(ze=_t.getWireframeAttribute(Y),Be=2);const Ge=Y.drawRange,Ve=Y.attributes.position;let tt=Ge.start*Be,Bt=(Ge.start+Ge.count)*Be;ae!==null&&(tt=Math.max(tt,ae.start*Be),Bt=Math.min(Bt,(ae.start+ae.count)*Be)),ze!==null?(tt=Math.max(tt,0),Bt=Math.min(Bt,ze.count)):Ve!=null&&(tt=Math.max(tt,0),Bt=Math.min(Bt,Ve.count));const cn=Bt-tt;if(cn<0||cn===1/0)return;xe.setup(X,G,De,Y,ze);let oi,yt=Pe;if(ze!==null&&(oi=Mt.get(ze),yt=de,yt.setIndex(oi)),X.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*ue()),yt.setMode(1)):yt.setMode(4);else if(X.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),Te.setLineWidth(qe*ue()),X.isLineSegments?yt.setMode(1):X.isLineLoop?yt.setMode(2):yt.setMode(3)}else X.isPoints?yt.setMode(0):X.isSprite&&yt.setMode(4);if(X.isInstancedMesh)yt.renderInstances(tt,cn,X.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ps=Math.min(Y.instanceCount,qe);yt.renderInstances(tt,cn,Ps)}else yt.render(tt,cn)},this.compile=function(A,z){function Y(G,X,ae){G.transparent===!0&&G.side===Cn&&G.forceSinglePass===!1?(G.side=Jt,G.needsUpdate=!0,Nn(G,X,ae),G.side=ti,G.needsUpdate=!0,Nn(G,X,ae),G.side=Cn):Nn(G,X,ae)}g=w.get(A),g.init(),m.push(g),A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(d.useLegacyLights),A.traverse(function(G){const X=G.material;if(X)if(Array.isArray(X))for(let ae=0;ae<X.length;ae++){const me=X[ae];Y(me,A,G)}else Y(X,A,G)}),m.pop(),g=null};let ie=null;function he(A){ie&&ie(A)}function be(){He.stop()}function Ke(){He.start()}const He=new Oc;He.setAnimationLoop(he),typeof self!="undefined"&&He.setContext(self),this.setAnimationLoop=function(A){ie=A,ge.setAnimationLoop(A),A===null?He.stop():He.start()},ge.addEventListener("sessionstart",be),ge.addEventListener("sessionend",Ke),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(z),z=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,z,y),g=w.get(A,m.length),g.init(),m.push(g),j.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(j),ve=this.localClippingEnabled,Q=q.init(this.clippingPlanes,ve),p=C.get(A,v.length),p.init(),v.push(p),Tt(A,z,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(O,B),Q===!0&&q.beginShadows();const Y=g.state.shadowsArray;if(ne.render(Y,A,z),Q===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),g.setupLights(d.useLegacyLights),z.isArrayCamera){const G=z.cameras;for(let X=0,ae=G.length;X<ae;X++){const me=G[X];Yt(p,A,me,me.viewport)}}else Yt(p,A,z);y!==null&&(Ue.updateMultisampleRenderTarget(y),Ue.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(d,A,z),xe.resetDefaultState(),E=-1,P=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Tt(A,z,Y,G){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const me=Xe.update(A),De=A.material;De.visible&&p.push(A,me,De,Y,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==je.render.frame&&(A.skeleton.update(),A.skeleton.frame=je.render.frame),!A.frustumCulled||Z.intersectsObject(A))){G&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const me=Xe.update(A),De=A.material;if(Array.isArray(De)){const ze=me.groups;for(let Be=0,Ge=ze.length;Be<Ge;Be++){const Ve=ze[Be],tt=De[Ve.materialIndex];tt&&tt.visible&&p.push(A,me,tt,Y,ee.z,Ve)}}else De.visible&&p.push(A,me,De,Y,ee.z,null)}}const ae=A.children;for(let me=0,De=ae.length;me<De;me++)Tt(ae[me],z,Y,G)}function Yt(A,z,Y,G){const X=A.opaque,ae=A.transmissive,me=A.transparent;g.setupLightsView(Y),Q===!0&&q.setGlobalState(d.clippingPlanes,Y),ae.length>0&&ht(X,ae,z,Y),G&&Te.viewport(T.copy(G)),X.length>0&&Lt(X,z,Y),ae.length>0&&Lt(ae,z,Y),me.length>0&&Lt(me,z,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ht(A,z,Y,G){if(se===null){const De=oe.isWebGL2;se=new ii(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?Dr:Si,minFilter:Rr,samples:De&&a===!0?4:0})}const X=d.getRenderTarget();d.setRenderTarget(se),d.clear();const ae=d.toneMapping;d.toneMapping=Rn,Lt(A,Y,G),Ue.updateMultisampleRenderTarget(se),Ue.updateRenderTargetMipmap(se);let me=!1;for(let De=0,ze=z.length;De<ze;De++){const Be=z[De],Ge=Be.object,Ve=Be.geometry,tt=Be.material,Bt=Be.group;if(tt.side===Cn&&Ge.layers.test(G.layers)){const cn=tt.side;tt.side=Jt,tt.needsUpdate=!0,kt(Ge,Y,G,Ve,tt,Bt),tt.side=cn,tt.needsUpdate=!0,me=!0}}me===!0&&(Ue.updateMultisampleRenderTarget(se),Ue.updateRenderTargetMipmap(se)),d.setRenderTarget(X),d.toneMapping=ae}function Lt(A,z,Y){const G=z.isScene===!0?z.overrideMaterial:null;for(let X=0,ae=A.length;X<ae;X++){const me=A[X],De=me.object,ze=me.geometry,Be=G===null?me.material:G,Ge=me.group;De.layers.test(Y.layers)&&kt(De,z,Y,ze,Be,Ge)}}function kt(A,z,Y,G,X,ae){A.onBeforeRender(d,z,Y,G,X,ae),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(d,z,Y,G,A,ae),X.transparent===!0&&X.side===Cn&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,d.renderBufferDirect(Y,z,G,X,A,ae),X.side=ti,X.needsUpdate=!0,d.renderBufferDirect(Y,z,G,X,A,ae),X.side=Cn):d.renderBufferDirect(Y,z,G,X,A,ae),A.onAfterRender(d,z,Y,G,X,ae)}function Nn(A,z,Y){z.isScene!==!0&&(z=te);const G=ye.get(A),X=g.state.lights,ae=g.state.shadowsArray,me=X.state.version,De=st.getParameters(A,X.state,ae,z,Y),ze=st.getProgramCacheKey(De);let Be=G.programs;G.environment=A.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(A.isMeshStandardMaterial?xt:lt).get(A.envMap||G.environment),Be===void 0&&(A.addEventListener("dispose",ct),Be=new Map,G.programs=Be);let Ge=Be.get(ze);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===me)return si(A,De),Ge}else De.uniforms=st.getUniforms(A),A.onBuild(Y,De,d),A.onBeforeCompile(De,d),Ge=st.acquireProgram(De,ze),Be.set(ze,Ge),G.uniforms=De.uniforms;const Ve=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=q.uniform),si(A,De),G.needsLights=On(A),G.lightsStateVersion=me,G.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix);const tt=Ge.getUniforms(),Bt=hs.seqWithValue(tt.seq,Ve);return G.currentProgram=Ge,G.uniformsList=Bt,Ge}function si(A,z){const Y=ye.get(A);Y.outputEncoding=z.outputEncoding,Y.instancing=z.instancing,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Fr(A,z,Y,G,X){z.isScene!==!0&&(z=te),Ue.resetTextureUnits();const ae=z.fog,me=G.isMeshStandardMaterial?z.environment:null,De=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ni,ze=(G.isMeshStandardMaterial?xt:lt).get(G.envMap||me),Be=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!G.normalMap&&!!Y.attributes.tangent,Ve=!!Y.morphAttributes.position,tt=!!Y.morphAttributes.normal,Bt=!!Y.morphAttributes.color,cn=G.toneMapped?d.toneMapping:Rn,oi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yt=oi!==void 0?oi.length:0,qe=ye.get(G),Ps=g.state.lights;if(Q===!0&&(ve===!0||A!==P)){const en=A===P&&G.id===E;q.setState(G,A,en)}let Rt=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ps.state.version||qe.outputEncoding!==De||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==ze||G.fog===!0&&qe.fog!==ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==q.numPlanes||qe.numIntersection!==q.numIntersection)||qe.vertexAlphas!==Be||qe.vertexTangents!==Ge||qe.morphTargets!==Ve||qe.morphNormals!==tt||qe.morphColors!==Bt||qe.toneMapping!==cn||oe.isWebGL2===!0&&qe.morphTargetsCount!==yt)&&(Rt=!0):(Rt=!0,qe.__version=G.version);let ai=qe.currentProgram;Rt===!0&&(ai=Nn(G,z,X));let Go=!1,hr=!1,Ls=!1;const Gt=ai.getUniforms(),li=qe.uniforms;if(Te.useProgram(ai.program)&&(Go=!0,hr=!0,Ls=!0),G.id!==E&&(E=G.id,hr=!0),Go||P!==A){if(Gt.setValue(N,"projectionMatrix",A.projectionMatrix),oe.logarithmicDepthBuffer&&Gt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),P!==A&&(P=A,hr=!0,Ls=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const en=Gt.map.cameraPosition;en!==void 0&&en.setValue(N,ee.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Gt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||X.isSkinnedMesh)&&Gt.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(X.isSkinnedMesh){Gt.setOptional(N,X,"bindMatrix"),Gt.setOptional(N,X,"bindMatrixInverse");const en=X.skeleton;en&&(oe.floatVertexTextures?(en.boneTexture===null&&en.computeBoneTexture(),Gt.setValue(N,"boneTexture",en.boneTexture,Ue),Gt.setValue(N,"boneTextureSize",en.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=Y.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&oe.isWebGL2===!0)&&fe.update(X,Y,ai),(hr||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,Gt.setValue(N,"receiveShadow",X.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(li.envMap.value=ze,li.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),hr&&(Gt.setValue(N,"toneMappingExposure",d.toneMappingExposure),qe.needsLights&&fr(li,Ls),ae&&G.fog===!0&&It.refreshFogUniforms(li,ae),It.refreshMaterialUniforms(li,G,L,k,se),hs.upload(N,qe.uniformsList,li,Ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(hs.upload(N,qe.uniformsList,li,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Gt.setValue(N,"center",X.center),Gt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Gt.setValue(N,"normalMatrix",X.normalMatrix),Gt.setValue(N,"modelMatrix",X.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const en=G.uniformsGroups;for(let Ds=0,ou=en.length;Ds<ou;Ds++)if(oe.isWebGL2){const Ho=en[Ds];we.update(Ho,ai),we.bind(Ho,ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ai}function fr(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function On(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,z,Y){ye.get(A.texture).__webglTexture=z,ye.get(A.depthTexture).__webglTexture=Y;const G=ye.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Y===void 0,G.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const Y=ye.get(A);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Y=0){y=A,x=z,M=Y;let G=!0,X=null,ae=!1,me=!1;if(A){const ze=ye.get(A);ze.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(36160,null),G=!1):ze.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):ze.__hasExternalTextures&&Ue.rebindTextures(A,ye.get(A.texture).__webglTexture,ye.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const Ge=ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(X=Ge[z],ae=!0):oe.isWebGL2&&A.samples>0&&Ue.useMultisampledRTT(A)===!1?X=ye.get(A).__webglMultisampledFramebuffer:X=Ge,T.copy(A.viewport),S.copy(A.scissor),b=A.scissorTest}else T.copy(J).multiplyScalar(L).floor(),S.copy(R).multiplyScalar(L).floor(),b=H;if(Te.bindFramebuffer(36160,X)&&oe.drawBuffers&&G&&Te.drawBuffers(A,X),Te.viewport(T),Te.scissor(S),Te.setScissorTest(b),ae){const ze=ye.get(A.texture);N.framebufferTexture2D(36160,36064,34069+z,ze.__webglTexture,Y)}else if(me){const ze=ye.get(A.texture),Be=z||0;N.framebufferTextureLayer(36160,36064,ze.__webglTexture,Y||0,Be)}E=-1},this.readRenderTargetPixels=function(A,z,Y,G,X,ae,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(De=De[me]),De){Te.bindFramebuffer(36160,De);try{const ze=A.texture,Be=ze.format,Ge=ze.type;if(Be!==_n&&$.convert(Be)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Dr&&(Ce.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(Ge!==Si&&$.convert(Ge)!==N.getParameter(35738)&&!(Ge===Mi&&(oe.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-G&&Y>=0&&Y<=A.height-X&&N.readPixels(z,Y,G,X,$.convert(Be),$.convert(Ge),ae)}finally{const ze=y!==null?ye.get(y).__webglFramebuffer:null;Te.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(A,z,Y=0){const G=Math.pow(2,-Y),X=Math.floor(z.image.width*G),ae=Math.floor(z.image.height*G);Ue.setTexture2D(z,0),N.copyTexSubImage2D(3553,Y,0,0,A.x,A.y,X,ae),Te.unbindTexture()},this.copyTextureToTexture=function(A,z,Y,G=0){const X=z.image.width,ae=z.image.height,me=$.convert(Y.format),De=$.convert(Y.type);Ue.setTexture2D(Y,0),N.pixelStorei(37440,Y.flipY),N.pixelStorei(37441,Y.premultiplyAlpha),N.pixelStorei(3317,Y.unpackAlignment),z.isDataTexture?N.texSubImage2D(3553,G,A.x,A.y,X,ae,me,De,z.image.data):z.isCompressedTexture?N.compressedTexSubImage2D(3553,G,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,me,z.mipmaps[0].data):N.texSubImage2D(3553,G,A.x,A.y,me,De,z.image),G===0&&Y.generateMipmaps&&N.generateMipmap(3553),Te.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Y,G,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=A.max.x-A.min.x+1,me=A.max.y-A.min.y+1,De=A.max.z-A.min.z+1,ze=$.convert(G.format),Be=$.convert(G.type);let Ge;if(G.isData3DTexture)Ue.setTexture3D(G,0),Ge=32879;else if(G.isDataArrayTexture)Ue.setTexture2DArray(G,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment);const Ve=N.getParameter(3314),tt=N.getParameter(32878),Bt=N.getParameter(3316),cn=N.getParameter(3315),oi=N.getParameter(32877),yt=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;N.pixelStorei(3314,yt.width),N.pixelStorei(32878,yt.height),N.pixelStorei(3316,A.min.x),N.pixelStorei(3315,A.min.y),N.pixelStorei(32877,A.min.z),Y.isDataTexture||Y.isData3DTexture?N.texSubImage3D(Ge,X,z.x,z.y,z.z,ae,me,De,ze,Be,yt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ge,X,z.x,z.y,z.z,ae,me,De,ze,yt.data)):N.texSubImage3D(Ge,X,z.x,z.y,z.z,ae,me,De,ze,Be,yt),N.pixelStorei(3314,Ve),N.pixelStorei(32878,tt),N.pixelStorei(3316,Bt),N.pixelStorei(3315,cn),N.pixelStorei(32877,oi),X===0&&G.generateMipmaps&&N.generateMipmap(Ge),Te.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){x=0,M=0,y=null,Te.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class wg extends Hc{}wg.prototype.isWebGL1Renderer=!0;class Eg extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vc extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const al=new D,ll=new D,cl=new vt,lo=new Do,ss=new Ss;class Kn extends Et{constructor(e=new Xt,t=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)al.fromBufferAttribute(t,i-1),ll.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=al.distanceTo(ll);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(i),ss.radius+=s,e.ray.intersectsSphere(ss)===!1)return;cl.copy(i).invert(),lo.copy(e.ray).applyMatrix4(cl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,f=new D,h=new D,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=d,M=_-1;x<M;x+=p){const y=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,E),lo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=d,M=_-1;x<M;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),lo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Ft extends Xt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const v=[],m=n/2;let d=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function _(){const M=new D,y=new D;let E=0;const P=(t-e)/n;for(let T=0;T<=s;T++){const S=[],b=T/s,F=b*(t-e)+e;for(let k=0;k<=i;k++){const L=k/i,O=L*l+a,B=Math.sin(O),J=Math.cos(O);y.x=F*B,y.y=-b*n+m,y.z=F*J,f.push(y.x,y.y,y.z),M.set(B,P,J).normalize(),h.push(M.x,M.y,M.z),p.push(L,1-b),S.push(g++)}v.push(S)}for(let T=0;T<i;T++)for(let S=0;S<s;S++){const b=v[S][T],F=v[S+1][T],k=v[S+1][T+1],L=v[S][T+1];u.push(b,F,L),u.push(F,k,L),E+=6}c.addGroup(d,E,0),d+=E}function x(M){const y=g,E=new Qe,P=new D;let T=0;const S=M===!0?e:t,b=M===!0?1:-1;for(let k=1;k<=i;k++)f.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),g++;const F=g;for(let k=0;k<=i;k++){const O=k/i*l+a,B=Math.cos(O),J=Math.sin(O);P.x=S*J,P.y=m*b,P.z=S*B,f.push(P.x,P.y,P.z),h.push(0,b,0),E.x=B*.5+.5,E.y=J*.5*b+.5,p.push(E.x,E.y),g++}for(let k=0;k<i;k++){const L=y+k,O=F+k;M===!0?u.push(O,O+1,L):u.push(O+1,O,L),T+=3}c.addGroup(d,T,M===!0?1:2),d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends Xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new D,M=new D,y=new D;for(let E=0;E<t.length;E+=3)p(t[E+0],x),p(t[E+1],M),p(t[E+2],y),l(x,M,y,_)}function l(_,x,M,y){const E=y+1,P=[];for(let T=0;T<=E;T++){P[T]=[];const S=_.clone().lerp(M,T/E),b=x.clone().lerp(M,T/E),F=E-T;for(let k=0;k<=F;k++)k===0&&T===E?P[T][k]=S:P[T][k]=S.clone().lerp(b,k/F)}for(let T=0;T<E;T++)for(let S=0;S<2*(E-T)-1;S++){const b=Math.floor(S/2);S%2===0?(h(P[T][b+1]),h(P[T+1][b]),h(P[T][b])):(h(P[T][b+1]),h(P[T+1][b+1]),h(P[T+1][b]))}}function c(_){const x=new D;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(_),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const _=new D;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const M=m(_)/2/Math.PI+.5,y=d(_)/Math.PI+.5;o.push(M,1-y)}g(),f()}function f(){for(let _=0;_<o.length;_+=6){const x=o[_+0],M=o[_+2],y=o[_+4],E=Math.max(x,M,y),P=Math.min(x,M,y);E>.9&&P<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),y<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,x){const M=_*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){const _=new D,x=new D,M=new D,y=new D,E=new Qe,P=new Qe,T=new Qe;for(let S=0,b=0;S<s.length;S+=9,b+=6){_.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),E.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),T.set(o[b+4],o[b+5]),y.copy(_).add(x).add(M).divideScalar(3);const F=m(y);v(E,b+0,_,F),v(P,b+2,x,F),v(T,b+4,M,F)}}function v(_,x,M,y){y<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=y/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.vertices,e.indices,e.radius,e.details)}}class qi extends Oo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qi(e.radius,e.detail)}}class Fo extends Xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new D,h=new D,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const _=[],x=d/n;let M=0;d===0&&o===0?M=.5/t:d===n&&l===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const E=y/t;f.x=-e*Math.cos(i+E*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+E*s)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(E+M,1-x),_.push(c++)}u.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){const x=u[d][_+1],M=u[d][_],y=u[d+1][_],E=u[d+1][_+1];(d!==0||o>0)&&p.push(x,M,E),(d!==n-1||l<Math.PI)&&p.push(M,y,E)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _i extends Xt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new D,f=new D,h=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*s,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,_=(i+1)*p+g;o.push(v,m,_),o.push(m,d,_)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Tg extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ul={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ag{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Wc=new Ag;class jc{constructor(e){this.manager=e!==void 0?e:Wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Cg extends jc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ul.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Nr("img");function l(){u(),ul.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class fl extends jc{constructor(e){super(e)}load(e,t,n,i){const s=new $t,o=new Cg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Xc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hl(){return(typeof performance=="undefined"?Date:performance).now()}class qc{constructor(e,t,n=0,i=1/0){this.ray=new Do(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(dl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)To(e[i],this,n,t);return n.sort(dl),n}}function dl(r,e){return r.distance-e.distance}function To(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)To(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);const Pg=()=>{const r={show:Ye(!1),cameraPosition:Ye({x:0,y:0,z:1}),cameraLookAt:Ye({x:0,y:0,z:10}),objectPosition:Ye({x:0,y:0,z:10}),objectEuler:Ye(new yi(0,0,0,"ZXY")),entity:Ye(0)};return{...r,...{setupModel(t){r.cameraPosition.set(Vi(t.cameraPosition)),r.cameraLookAt.set(Vi(t.cameraLookAt)),r.objectPosition.set(Vi(t.objectPosition)),r.objectEuler.set(new yi(Kt.degToRad(t.objectRotation.x),Kt.degToRad(t.objectRotation.z),Kt.degToRad(t.objectRotation.y),"YZX")),r.show.set(!0),r.entity.set(t.entity)},updateCamera(t){r.cameraPosition.set(Vi(t.cameraPosition)),r.cameraLookAt.set(Vi(t.cameraLookAt))},updateCameraPosition(t){r.cameraPosition.set(t.cameraPosition)},updateCameraLookAt(t){r.cameraLookAt.set(t.cameraLookAt)},sendMovementUpdate(t){at("moveObject",t)},sendRotationUpdate(t){const n=fs(t);at("rotateObject",{x:Kt.radToDeg(n.x).toFixed(2),y:Kt.radToDeg(n.y).toFixed(2),z:Kt.radToDeg(n.z).toFixed(2)})}}}};var vn=Pg();function Lg(r){let e,t,n,i;const s=r[1].default,o=xn(s,r,r[0],null);return{c(){e=K("div"),o&&o.c(),V(e,"class","absolute")},m(a,l){Fe(a,e,l),o&&o.m(e,null),t=!0,n||(i=ac(Rg.call(null,e,{to:"body"})),n=!0)},p(a,[l]){o&&o.p&&(!t||l&1)&&bn(o,s,a,a[0],t?Mn(s,a[0],l,null):Sn(a[0]),null)},i(a){t||(_e(o,a),t=!0)},o(a){Se(o,a),t=!1},d(a){a&&Ne(e),o&&o.d(a),n=!1,i()}}}function Rg(r,{to:e}){const t=document.querySelector(e);return t&&t.appendChild(r),{}}function Dg(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Yc extends gt{constructor(e){super(),mt(this,e,Dg,Lg,ft,{})}}function pl(r){let e,t;const n=r[3].default,i=xn(n,r,r[6],null);return{c(){e=K("main"),i&&i.c(),V(e,"class","svelte-1fnr7mh")},m(s,o){Fe(s,e,o),i&&i.m(e,null),t=!0},p(s,o){i&&i.p&&(!t||o&64)&&bn(i,n,s,s[6],t?Mn(n,s[6],o,null):Sn(s[6]),null)},i(s){t||(_e(i,s),t=!0)},o(s){Se(i,s),t=!1},d(s){s&&Ne(e),i&&i.d(s)}}}function ml(r){let e,t;return e=new Yc({props:{$$slots:{default:[Ig]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&70&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function Ig(r){let e,t,n,i,s,o,a,l,c,u;return{c(){e=K("div"),t=K("div"),n=K("p"),n.textContent="Are you sure you want to exit? You have items in your cart.",i=ce(),s=K("div"),o=K("button"),o.textContent="No",a=ce(),l=K("button"),l.textContent="Yes",V(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),V(o,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(l,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(s,"class","flex flex-row justify-between w-full gap-[2vw]"),V(t,"class","bg-[color:var(--color-secondary)] absolute w-[50rem] h-[fit] p-[1vw] flex flex-col gap-[1vw] justify-center items-center"),V(e,"class","z-[100] bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 grid place-items-center")},m(f,h){Fe(f,e,h),I(e,t),I(t,n),I(t,i),I(t,s),I(s,o),I(s,a),I(s,l),c||(u=[Le(o,"click",r[4]),Le(l,"click",r[5])],c=!0)},p:St,d(f){f&&Ne(e),c=!1,qt(u)}}}function Ug(r){let e,t,n,i=r[0]&&pl(r),s=r[1]&&r[0]&&ml(r);return{c(){i&&i.c(),e=ce(),s&&s.c(),t=ri()},m(o,a){i&&i.m(o,a),Fe(o,e,a),s&&s.m(o,a),Fe(o,t,a),n=!0},p(o,[a]){o[0]?i?(i.p(o,a),a&1&&_e(i,1)):(i=pl(o),i.c(),_e(i,1),i.m(e.parentNode,e)):i&&(Wn(),Se(i,1,1,()=>{i=null}),jn()),o[1]&&o[0]?s?(s.p(o,a),a&3&&_e(s,1)):(s=ml(o),s.c(),_e(s,1),s.m(t.parentNode,t)):s&&(Wn(),Se(s,1,1,()=>{s=null}),jn())},i(o){n||(_e(i),_e(s),n=!0)},o(o){Se(i),Se(s),n=!1},d(o){i&&i.d(o),o&&Ne(e),s&&s.d(o),o&&Ne(t)}}}function Ng(r,e,t){let n,i;Ee(r,mn,f=>t(2,n=f)),Ee(r,zt,f=>t(7,i=f));let{$$slots:s={},$$scope:o}=e,a;ji.subscribe(f=>{t(0,a=f)}),an("setVisible",f=>{ji.set(f),f&&Ie(zt,i=!1,i)});let l=!1;or(()=>{const f=h=>{a&&["Escape"].includes(h.code)&&(n.length>0?t(1,l=!0):(at("hoverOut"),at("hideUI"),t(1,l=!1),ji.set(!1),vn.show.set(!1),Ln.set(null)))};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)});const c=()=>{t(1,l=!1),Ie(mn,n=[],n)},u=()=>{at("hideUI"),t(1,l=!1),ji.set(!1),vn.show.set(!1)};return r.$$set=f=>{"$$scope"in f&&t(6,o=f.$$scope)},[a,l,n,s,c,u,o]}class Og extends gt{constructor(e){super(),mt(this,e,Ng,Ug,ft,{})}}const Fg=()=>!window.invokeNative,Ao=(r,e=0)=>{if(Fg())for(const t of r)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:t.action,data:t.data}}))},e)};function gl(r,e,t){const n=r.slice();return n[6]=e[t],n}function _l(r,e,t){const n=r.slice();return n[9]=e[t],n}function vl(r){let e,t=r[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=Ml(gl(r,t,i));return{c(){e=K("div");for(let i=0;i<n.length;i+=1)n[i].c();V(e,"class","w-fit h-fit bg-gray-600 p-2 ")},m(i,s){Fe(i,e,s);for(let o=0;o<n.length;o+=1)n[o]&&n[o].m(e,null)},p(i,s){if(s&2){t=i[1];let o;for(o=0;o<t.length;o+=1){const a=gl(i,t,o);n[o]?n[o].p(a,s):(n[o]=Ml(a),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(i){i&&Ne(e),rr(n,i)}}}function xl(r){let e,t=r[9].name+"",n,i,s;function o(){return r[3](r[9])}return{c(){e=K("button"),n=rt(t),V(e,"class","bg-blue-500 text-white p-2")},m(a,l){Fe(a,e,l),I(e,n),i||(s=Le(e,"click",o),i=!0)},p(a,l){r=a},d(a){a&&Ne(e),i=!1,s()}}}function Ml(r){let e,t,n=r[6].component+"",i,s,o,a=r[6].actions,l=[];for(let c=0;c<a.length;c+=1)l[c]=xl(_l(r,a,c));return{c(){e=K("div"),t=K("p"),i=rt(n),s=ce();for(let c=0;c<l.length;c+=1)l[c].c();o=ce(),V(t,"class","text-white"),V(e,"class","flex flex-row gap-2 items-center m-1")},m(c,u){Fe(c,e,u),I(e,t),I(t,i),I(e,s);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null);I(e,o)},p(c,u){if(u&2){a=c[6].actions;let f;for(f=0;f<a.length;f+=1){const h=_l(c,a,f);l[f]?l[f].p(h,u):(l[f]=xl(h),l[f].c(),l[f].m(e,o))}for(;f<l.length;f+=1)l[f].d(1);l.length=a.length}},d(c){c&&Ne(e),rr(l,c)}}}function zg(r){let e,t,n,i,s,o=r[0]&&vl(r);return{c(){e=K("div"),t=K("button"),t.textContent="Show",n=ce(),o&&o.c(),V(t,"class","bg-red-500 text-white p-2"),V(e,"class","absolute top-0 left-1/2 z-[1000]")},m(a,l){Fe(a,e,l),I(e,t),I(e,n),o&&o.m(e,null),i||(s=Le(t,"click",r[2]),i=!0)},p(a,[l]){a[0]?o?o.p(a,l):(o=vl(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null)},i:St,o:St,d(a){a&&Ne(e),o&&o.d(),i=!1,s()}}}function kg(r,e,t){let n=!1,i=[{label:"Item 1",object:"v_res_d_coffeetable",price:100},{label:"Item 2",object:"v_res_d_coffeetable",price:100},{label:"Item 3",object:"v_res_d_coffeetable",price:100},{label:"Item 4",object:"v_res_d_coffeetable",price:100},{label:"Item 5",object:"v_res_d_coffeetable",price:100}];return[n,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"Furniture",actions:[{name:"Set Furniture Data",action:"setFurnituresData",data:[{category:"Category 1",items:i},{category:"Category 2",items:i},{category:"Category 3",items:i},{category:"Category 4",items:i},{category:"Category 5",items:i}]}]}],()=>{t(0,n=!n)},c=>{if(c.custom==!0){c.customFunction();return}Ao([{action:c.action,data:c.data}])}]}class Bg extends gt{constructor(e){super(),mt(this,e,kg,zg,ft,{})}}function bl(r,e,t){const n=r.slice();return n[15]=e[t],n[17]=t,n}function Sl(r){let e,t,n,i=r[15].label+"",s,o,a,l,c=r[15].price+"",u,f,h,p,g,v;function m(){return r[8](r[15])}function d(){return r[10](r[15])}return{c(){e=K("button"),t=K("div"),n=K("p"),s=rt(i),o=ce(),a=K("p"),l=rt("$"),u=rt(c),f=ce(),h=K("div"),h.innerHTML='<i class="fas fa-eye text-[color:var(--color-text)] text-[2.5rem]"></i>',p=ce(),V(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),V(a,"class","text-[color:var(--color-text)] text-[2rem]"),V(t,"class","w-full h-full flex flex-col justify-center items-start"),V(h,"class","bg-[color:var(--color-tertiary)] aspect-square h-[5rem] grid place-items-center justify-center items-center"),V(e,"class","h-full w-[30rem] bg-[color:var(--color-secondary)] flex flex-row items-center px-[1.5rem] py-[0.5rem] hover:cursor-pointer")},m(_,x){Fe(_,e,x),I(e,t),I(t,n),I(n,s),I(t,o),I(t,a),I(a,l),I(a,u),I(e,f),I(e,h),I(e,p),g||(v=[Le(h,"mouseenter",m),Le(h,"mouseleave",r[9]),Le(e,"click",d),Le(e,"mouseleave",r[11])],g=!0)},p(_,x){r=_,x&8&&i!==(i=r[15].label+"")&&At(s,i),x&8&&c!==(c=r[15].price+"")&&At(u,c)},d(_){_&&Ne(e),g=!1,qt(v)}}}function yl(r){let e,t;return e=new Yc({props:{$$slots:{default:[Gg]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&262246&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function Gg(r){let e,t,n,i,s,o,a,l,c,u;return{c(){e=K("div"),t=K("div"),n=K("p"),n.textContent=`Are you sure you want to stop placing this current\r
					furniture?`,i=ce(),s=K("div"),o=K("button"),o.textContent="No",a=ce(),l=K("button"),l.textContent="Yes",V(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),V(o,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(l,"class","bg-[color:var(--color-tertiary)] text-[color:var(--color-text)] text-[2rem] px-[1rem] py-[0.5rem] w-full hover:cursor-pointer"),V(s,"class","flex flex-row justify-between w-full gap-[2vw]"),V(t,"class","bg-[color:var(--color-secondary)] absolute w-[50rem] h-[fit] p-[1vw] flex flex-col gap-[1vw] justify-center items-center"),V(e,"class","z-[100] bg-black bg-opacity-50 w-screen h-screen absolute top-0 left-0 grid place-items-center")},m(f,h){Fe(f,e,h),I(e,t),I(t,n),I(t,i),I(t,s),I(s,o),I(s,a),I(s,l),c||(u=[Le(o,"click",r[13]),Le(l,"click",r[14])],c=!0)},p:St,d(f){f&&Ne(e),c=!1,qt(u)}}}function Hg(r){let e,t,n,i,s,o,a,l=r[3].items,c=[];for(let f=0;f<l.length;f+=1)c[f]=Sl(bl(r,l,f));let u=r[1]&&yl(r);return{c(){e=K("div"),t=K("div");for(let f=0;f<c.length;f+=1)c[f].c();n=ce(),u&&u.c(),i=ri(),V(t,"class","grid grid-rows-2 grid-flow-col-dense gap-[1rem] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style scroll-style-horizontal"),V(e,"class","w-full h-[24rem] bg-[color:var(--color-primary)] p-[1rem]")},m(f,h){Fe(f,e,h),I(e,t);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(t,null);r[12](t),Fe(f,n,h),u&&u.m(f,h),Fe(f,i,h),s=!0,o||(a=Le(t,"wheel",r[7]),o=!0)},p(f,[h]){if(h&126){l=f[3].items;let p;for(p=0;p<l.length;p+=1){const g=bl(f,l,p);c[p]?c[p].p(g,h):(c[p]=Sl(g),c[p].c(),c[p].m(t,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}f[1]?u?(u.p(f,h),h&2&&_e(u,1)):(u=yl(f),u.c(),_e(u,1),u.m(i.parentNode,i)):u&&(Wn(),Se(u,1,1,()=>{u=null}),jn())},i(f){s||(_e(u),s=!0)},o(f){Se(u),s=!1},d(f){f&&Ne(e),rr(c,f),r[12](null),f&&Ne(n),u&&u.d(f),f&&Ne(i),o=!1,a()}}}function Vg(r,e,t){let n,i,s,o;Ee(r,$n,_=>t(3,n=_)),Ee(r,Zi,_=>t(4,i=_)),Ee(r,Ln,_=>t(5,s=_)),Ee(r,zt,_=>t(6,o=_));let a;function l(_){_=window.event||_;var x=Math.max(-1,Math.min(1,_.wheelDelta||-_.detail));t(0,a.scrollLeft-=x*50,a),_.preventDefault()}let c=!1,u=null;const f=_=>{at("hoverIn",_)},h=()=>{at("hoverOut")},p=_=>{if(at("hoverOut"),_.type==="clothing"||_.type==="storage"){const x=i.find(M=>M.type===_.type);if(x){at("selectOwnedItem",x);return}}s!=null?(t(1,c=!0),t(2,u=_)):(at("previewFurniture",_),Ie(Ln,s=_,s),Ie(zt,o=!0,o))},g=()=>{at("hoverOut")};function v(_){Vn[_?"unshift":"push"](()=>{a=_,t(0,a)})}return[a,c,u,n,i,s,o,l,f,h,p,g,v,()=>{t(1,c=!1),t(2,u=null)},()=>{at("previewFurniture",u),Ie(Ln,s=u,s),Ie(zt,o=!0,o),t(1,c=!1),t(2,u=null)}]}class Wg extends gt{constructor(e){super(),mt(this,e,Vg,Hg,ft,{})}}function jg(r,e,t){let n,i,s,o,a,l;Ee(r,Zi,u=>t(0,n=u)),Ee(r,mn,u=>t(1,i=u)),Ee(r,Ln,u=>t(2,s=u)),Ee(r,zt,u=>t(3,o=u)),Ee(r,ms,u=>t(4,a=u)),Ee(r,ji,u=>t(5,l=u)),Ao([{action:"setVisible",data:!0}]),Ao([{action:"setBrowserMode",data:!0}]);function c(u){u.key==="="&&Ie(ji,l=!0,l)}return an("setBrowserMode",u=>{Ms.set(u),console.log("browser mode enabled"),u?window.addEventListener("keydown",c):window.removeEventListener("keydown",c)}),an("setupModel",u=>{vn.show.set(!0),vn.setupModel(u)}),an("updateCamera",u=>{vn.updateCamera(u)}),an("setFurnituresData",u=>{ms.set(u),$n.set(a[0])}),an("addToCart",u=>{Ie(mn,i=[...i,u],i),vn.show.set(!1),Ie(zt,o=!1,o)}),an("removeFromCart",u=>{Ie(mn,i=i.filter(f=>f.entity!=u.entity),i),Ie(mn,i=[...i],i),Ie(Ln,s=null,s),vn.show.set(!1)}),an("clearCart",()=>{Ie(mn,i=[],i)}),an("setOwnedItems",u=>{Ie(Zi,n=u,n)}),an("removeOwnedItem",u=>{console.log("removeOwnedItem",u);let f=n.filter(h=>h.entity!=u.entity);Ie(Zi,n=[...f],n),console.log("removeOwnedItem",n)}),[]}class Xg extends gt{constructor(e){super(),mt(this,e,jg,null,ft,{})}}function wl(r,e,t){const n=r.slice();return n[20]=e[t],n[22]=t,n}function El(r){let e,t,n;return{c(){e=K("input"),e.autofocus=!0,V(e,"class","min-w-[10rem] h-[4.5rem] px-[1rem] text-[2rem] bg-[color:var(--color-tertiary)]"),V(e,"type","text"),V(e,"placeholder","Search")},m(i,s){Fe(i,e,s),Tn(e,r[1]),e.focus(),t||(n=Le(e,"input",r[13]),t=!0)},p(i,s){s&2&&e.value!==i[1]&&Tn(e,i[1])},d(i){i&&Ne(e),t=!1,n()}}}function Tl(r){let e,t=r[20].category+"",n,i,s;function o(){return r[15](r[22])}return{c(){e=K("button"),n=rt(t),V(e,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),ps(e,"selected",r[0]===r[22])},m(a,l){Fe(a,e,l),I(e,n),i||(s=Le(e,"click",o),i=!0)},p(a,l){r=a,l&4&&t!==(t=r[20].category+"")&&At(n,t),l&1&&ps(e,"selected",r[0]===r[22])},d(a){a&&Ne(e),i=!1,s()}}}function qg(r){let e,t,n,i,s,o,a,l,c,u,f,h,p,g,v,m=r[9].length+"",d,_,x,M,y,E,P=r[10].length+"",T,S,b,F,k,L,O,B=r[4]&&El(r),J=r[2],R=[];for(let H=0;H<J.length;H+=1)R[H]=Tl(wl(r,J,H));return{c(){e=K("div"),t=K("button"),n=K("button"),n.innerHTML='<i class="fas fa-magnifying-glass text-[2rem]"></i>',i=ce(),B&&B.c(),o=ce(),a=K("div"),l=K("button"),l.textContent="Show All",c=ce();for(let H=0;H<R.length;H+=1)R[H].c();u=ce(),f=K("div"),h=K("button"),p=K("p"),p.textContent="Owned Furniture",g=ce(),v=K("span"),d=rt(m),_=ce(),x=K("button"),M=K("i"),y=ce(),E=K("span"),T=rt(P),S=ce(),b=K("button"),F=K("i"),V(n,"class","h-[4.5rem] w-[5rem] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"),V(t,"class",s="h-[4.5rem] "+(r[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"),V(l,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),ps(l,"selected",r[0]===-1),V(a,"class","w-full h-[5rem] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories svelte-vkl3yg"),V(p,"class","w-fit whitespace-nowrap"),V(v,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),V(h,"class","w-fit px-[2rem] items-center justify-center break h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"),V(M,"class","fas fa-shopping-cart"),V(E,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),V(x,"class","h-[4.5rem] w-fit px-[2rem] text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),V(F,"class",k="fas fa-chevron-"+(r[6]?"up":"down")),V(b,"class","h-[4.5rem] w-fit aspect-square text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),V(f,"class","overflow-y-visible flex flex-row gap-2 ml-auto"),V(e,"class","w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap")},m(H,Z){Fe(H,e,Z),I(e,t),I(t,n),I(t,i),B&&B.m(t,null),I(e,o),I(e,a),I(a,l),I(a,c);for(let Q=0;Q<R.length;Q+=1)R[Q]&&R[Q].m(a,null);r[16](a),I(e,u),I(e,f),I(f,h),I(h,p),I(h,g),I(h,v),I(v,d),I(f,_),I(f,x),I(x,M),I(x,y),I(x,E),I(E,T),I(f,S),I(f,b),I(b,F),L||(O=[Le(n,"click",r[12]),Le(l,"click",r[14]),Le(a,"wheel",r[11]),Le(h,"click",r[17]),Le(x,"click",r[18]),Le(b,"click",r[19])],L=!0)},p(H,[Z]){if(H[4]?B?B.p(H,Z):(B=El(H),B.c(),B.m(t,null)):B&&(B.d(1),B=null),Z&16&&s!==(s="h-[4.5rem] "+(H[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center")&&V(t,"class",s),Z&1&&ps(l,"selected",H[0]===-1),Z&101){J=H[2];let Q;for(Q=0;Q<J.length;Q+=1){const ve=wl(H,J,Q);R[Q]?R[Q].p(ve,Z):(R[Q]=Tl(ve),R[Q].c(),R[Q].m(a,null))}for(;Q<R.length;Q+=1)R[Q].d(1);R.length=J.length}Z&512&&m!==(m=H[9].length+"")&&At(d,m),Z&1024&&P!==(P=H[10].length+"")&&At(T,P),Z&64&&k!==(k="fas fa-chevron-"+(H[6]?"up":"down"))&&V(F,"class",k)},i:St,o:St,d(H){H&&Ne(e),B&&B.d(),rr(R,H),r[16](null),L=!1,qt(O)}}}function Yg(r,e,t){let n,i,s,o,a,l,c;Ee(r,ms,P=>t(2,n=P)),Ee(r,$n,P=>t(5,i=P)),Ee(r,zt,P=>t(6,s=P)),Ee(r,Er,P=>t(7,o=P)),Ee(r,Tr,P=>t(8,a=P)),Ee(r,Zi,P=>t(9,l=P)),Ee(r,mn,P=>t(10,c=P));let u=-1,f;function h(P){P=window.event||P;var T=Math.max(-1,Math.min(1,P.wheelDelta||-P.detail));t(3,f.scrollLeft-=T*50,f),P.preventDefault()}let p=!1,g="";const v=()=>{t(4,p=!p),s&&Ie(zt,s=!1,s)};function m(){g=this.value,t(1,g)}const d=()=>{t(0,u=-1);const P=n.flatMap(T=>T.items);Ie($n,i={category:"Show All",items:P},i),s&&Ie(zt,s=!1,s)},_=P=>{t(0,u=P),Ie($n,i=n[P],i),s&&Ie(zt,s=!1,s)};function x(P){Vn[P?"unshift":"push"](()=>{f=P,t(3,f)})}const M=()=>{Ie(Er,o=!1,o),Ie(Tr,a=!a,a)},y=()=>{Ie(Tr,a=!1,a),Ie(Er,o=!o,o)},E=()=>{Ie(zt,s=!s,s)};return r.$$.update=()=>{if(r.$$.dirty&7)if(g.length>0){let P=null;u==-1?P=n.flatMap(S=>S.items):P=n[u].items;const T=P.filter(S=>S.label.toLowerCase().includes(g.toLowerCase()));Ie($n,i={category:"Search Results",items:T},i)}else if(u===-1){const P=n.flatMap(T=>T.items);Ie($n,i={category:"Show All",items:P},i)}else Ie($n,i=n[u],i)},[u,g,n,f,p,i,s,o,a,l,c,h,v,m,d,_,x,M,y,E]}class Zg extends gt{constructor(e){super(),mt(this,e,Yg,qg,ft,{})}}function Al(r,e,t){const n=r.slice();return n[7]=e[t],n[9]=t,n}function Cl(r){let e,t,n,i,s,o,a,l,c,u,f,h=r[1].reduce(Ll,0)+"",p,g,v,m,d,_=r[1],x=[];for(let M=0;M<_.length;M+=1)x[M]=Pl(Al(r,_,M));return{c(){e=K("div"),t=K("div"),n=K("h1"),n.textContent="Cart",i=ce(),s=K("button"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',o=ce(),a=K("div");for(let M=0;M<x.length;M+=1)x[M].c();l=ce(),c=K("div"),u=K("h1"),f=rt("Total: $"),p=rt(h),g=ce(),v=K("button"),v.innerHTML=`<p>Buy</p> 
				<i class="fa-solid fa-check"></i>`,V(n,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"),V(s,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"),V(t,"class","flex flex-row gap-2"),V(a,"class","flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"),V(u,"class","bg-[color:var(--color-secondary)] text-[2rem] w-full h-full flex items-center px-4"),V(v,"class","bg-[color:var(--color-secondary)] text-[2rem] h-full gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"),V(c,"class","flex flex-row gap-2 items-center justify-center h-[5rem]"),V(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]")},m(M,y){Fe(M,e,y),I(e,t),I(t,n),I(t,i),I(t,s),I(e,o),I(e,a);for(let E=0;E<x.length;E+=1)x[E]&&x[E].m(a,null);I(e,l),I(e,c),I(c,u),I(u,f),I(u,p),I(c,g),I(c,v),m||(d=[Le(s,"click",r[3]),Le(v,"click",r[6])],m=!0)},p(M,y){if(y&2){_=M[1];let E;for(E=0;E<_.length;E+=1){const P=Al(M,_,E);x[E]?x[E].p(P,y):(x[E]=Pl(P),x[E].c(),x[E].m(a,null))}for(;E<x.length;E+=1)x[E].d(1);x.length=_.length}y&2&&h!==(h=M[1].reduce(Ll,0)+"")&&At(p,h)},d(M){M&&Ne(e),rr(x,M),m=!1,qt(d)}}}function Pl(r){let e,t,n,i,s,o=r[7].label+"",a,l,c,u,f=r[7].price+"",h,p,g,v,m,d;function _(){return r[4](r[7])}function x(){return r[5](r[7])}return{c(){e=K("div"),t=K("button"),t.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',n=ce(),i=K("div"),s=K("h1"),a=rt(o),l=ce(),c=K("h1"),u=rt("$"),h=rt(f),p=ce(),g=K("button"),g.innerHTML='<i class="fa-solid fa-xmark"></i>',v=ce(),V(t,"class","bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"),V(s,"class","text-[2rem]"),V(c,"class","text-[1.5rem]"),V(i,"class","flex flex-col gap-2 w-full"),V(g,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"),V(e,"class","flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center")},m(M,y){Fe(M,e,y),I(e,t),I(e,n),I(e,i),I(i,s),I(s,a),I(i,l),I(i,c),I(c,u),I(c,h),I(e,p),I(e,g),I(e,v),m||(d=[Le(t,"click",_),Le(g,"click",x)],m=!0)},p(M,y){r=M,y&2&&o!==(o=r[7].label+"")&&At(a,o),y&2&&f!==(f=r[7].price+"")&&At(h,f)},d(M){M&&Ne(e),m=!1,qt(d)}}}function Qg(r){let e,t=r[0]&&Cl(r);return{c(){t&&t.c(),e=ri()},m(n,i){t&&t.m(n,i),Fe(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=Cl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:St,o:St,d(n){t&&t.d(n),n&&Ne(e)}}}const Ll=(r,e)=>r+e.price;function Kg(r,e,t){let n,i,s;return Ee(r,Er,u=>t(0,n=u)),Ee(r,mn,u=>t(1,i=u)),Ee(r,Ln,u=>t(2,s=u)),[n,i,s,()=>Ie(Er,n=!1,n),u=>{at("selectCartItem",u)},u=>{at("removeCartItem",u)},()=>{Ie(Ln,s=null,s),at("buyCartItems")}]}class Jg extends gt{constructor(e){super(),mt(this,e,Kg,Qg,ft,{})}}function Rl(r,e,t){const n=r.slice();return n[5]=e[t],n[7]=t,n}function Dl(r){let e,t,n,i,s,o,a,l,c,u=r[1],f=[];for(let h=0;h<u.length;h+=1)f[h]=Ul(Rl(r,u,h));return{c(){e=K("div"),t=K("div"),n=K("h1"),n.textContent="Owned Items",i=ce(),s=K("button"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',o=ce(),a=K("div");for(let h=0;h<f.length;h+=1)f[h].c();V(n,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"),V(s,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"),V(t,"class","flex flex-row gap-2"),V(a,"class","flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"),V(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]")},m(h,p){Fe(h,e,p),I(e,t),I(t,n),I(t,i),I(t,s),I(e,o),I(e,a);for(let g=0;g<f.length;g+=1)f[g]&&f[g].m(a,null);l||(c=Le(s,"click",r[2]),l=!0)},p(h,p){if(p&2){u=h[1];let g;for(g=0;g<u.length;g+=1){const v=Rl(h,u,g);f[g]?f[g].p(v,p):(f[g]=Ul(v),f[g].c(),f[g].m(a,null))}for(;g<f.length;g+=1)f[g].d(1);f.length=u.length}},d(h){h&&Ne(e),rr(f,h),l=!1,c()}}}function Il(r){let e,t,n;function i(){return r[4](r[5])}return{c(){e=K("button"),e.innerHTML='<i class="fa-solid fa-xmark"></i>',V(e,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square")},m(s,o){Fe(s,e,o),t||(n=Le(e,"click",i),t=!0)},p(s,o){r=s},d(s){s&&Ne(e),t=!1,n()}}}function Ul(r){let e,t,n,i,s,o=r[5].label+"",a,l,c,u,f;function h(){return r[3](r[5])}let p=!r[5].type&&Il(r);return{c(){e=K("div"),t=K("button"),t.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',n=ce(),i=K("div"),s=K("h1"),a=rt(o),l=ce(),p&&p.c(),c=ce(),V(t,"class","bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"),V(s,"class","text-[2rem]"),V(i,"class","flex flex-col gap-2 w-full"),V(e,"class","flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center")},m(g,v){Fe(g,e,v),I(e,t),I(e,n),I(e,i),I(i,s),I(s,a),I(e,l),p&&p.m(e,null),I(e,c),u||(f=Le(t,"click",h),u=!0)},p(g,v){r=g,v&2&&o!==(o=r[5].label+"")&&At(a,o),r[5].type?p&&(p.d(1),p=null):p?p.p(r,v):(p=Il(r),p.c(),p.m(e,c))},d(g){g&&Ne(e),p&&p.d(),u=!1,f()}}}function $g(r){let e,t=r[0]&&Dl(r);return{c(){t&&t.c(),e=ri()},m(n,i){t&&t.m(n,i),Fe(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=Dl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:St,o:St,d(n){t&&t.d(n),n&&Ne(e)}}}function e_(r,e,t){let n,i;return Ee(r,Tr,l=>t(0,n=l)),Ee(r,Zi,l=>t(1,i=l)),[n,i,()=>Ie(Tr,n=!1,n),l=>{at("selectOwnedItem",l)},l=>{at("removeOwnedItem",l)}]}class t_ extends gt{constructor(e){super(),mt(this,e,e_,$g,ft,{})}}function n_(r){let e,t,n,i,s,o,a,l,c,u,f,h,p,g,v,m,d,_,x=r[1].toFixed(1)+"",M,y,E,P,T,S,b;return t=new Zg({}),i=new Wg({}),o=new Jg({}),l=new t_({}),{c(){e=K("div"),nt(t.$$.fragment),n=ce(),nt(i.$$.fragment),s=ce(),nt(o.$$.fragment),a=ce(),nt(l.$$.fragment),c=ce(),u=K("div"),f=K("i"),h=ce(),p=K("p"),p.textContent="C",g=ce(),v=K("div"),m=K("i"),d=ce(),_=K("p"),M=rt(x),y=ce(),E=K("input"),V(f,"class","fa-solid fa-video text-[white]"),V(p,"class","font-semibold"),jo(u,"border-color",r[0]?"white":"var(--color-tertiary)"),V(u,"class","absolute -top-[5rem] text-[2rem] right-0 w-[8rem] border-[0.3rem] h-[4rem] bg-[color:var(--color-primary)] flex flex-row gap-[1rem] items-center justify-center"),V(m,"class","fa-solid fa-eye text-[white]"),V(_,"class","font-semibold text-center w-[4rem]"),V(E,"id","slider"),V(E,"type","range"),V(E,"min","1.0"),V(E,"max","12.5"),V(E,"step","0.5"),V(E,"class","w-full"),V(v,"class","flex flex-row gap-[1rem] items-center absolute left-0 -top-[5rem] w-[30rem] h-fit p-4 bg-[color:var(--color-primary)]"),V(e,"class",P="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(r[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1]")},m(F,k){Fe(F,e,k),$e(t,e,null),I(e,n),$e(i,e,null),I(e,s),$e(o,e,null),I(e,a),$e(l,e,null),I(e,c),I(e,u),I(u,f),I(u,h),I(u,p),I(e,g),I(e,v),I(v,m),I(v,d),I(v,_),I(_,M),I(v,y),I(v,E),Tn(E,r[1]),T=!0,S||(b=[Le(E,"change",r[3]),Le(E,"input",r[3]),Le(E,"change",r[4])],S=!0)},p(F,[k]){(!T||k&1)&&jo(u,"border-color",F[0]?"white":"var(--color-tertiary)"),(!T||k&2)&&x!==(x=F[1].toFixed(1)+"")&&At(M,x),k&2&&Tn(E,F[1]),(!T||k&4&&P!==(P="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(F[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1]"))&&V(e,"class",P)},i(F){T||(_e(t.$$.fragment,F),_e(i.$$.fragment,F),_e(o.$$.fragment,F),_e(l.$$.fragment,F),T=!0)},o(F){Se(t.$$.fragment,F),Se(i.$$.fragment,F),Se(o.$$.fragment,F),Se(l.$$.fragment,F),T=!1},d(F){F&&Ne(e),et(t),et(i),et(o),et(l),S=!1,qt(b)}}}function i_(r,e,t){let n;Ee(r,zt,c=>t(2,n=c));let i=!1,s=5;function o(c){c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement||c.key==="c"&&(at("freecamMode",!0),Ie(zt,n=!0,n),t(0,i=!0))}an("freecamMode",c=>{c==!1&&(Ie(zt,n=!1,n),t(0,i=!1))}),or(()=>{window.addEventListener("keypress",o),at("freecamMode",!1),at("setHoverDistance",s),Ie(zt,n=!1,n),t(0,i=!1)});function a(){s=cs(this.value),t(1,s)}return[i,s,n,a,()=>{at("setHoverDistance",s)}]}class r_ extends gt{constructor(e){super(),mt(this,e,i_,n_,ft,{})}}const s_={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const o_=new Fc(-1,1,1,-1,0,1),zo=new Xt;zo.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3));zo.setAttribute("uv",new pt([0,2,0,0,2,0],2));class a_{constructor(e){this._mesh=new pe(zo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class l_ extends Ts{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ic.clone(e.uniforms),this.material=new Xn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new a_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nl extends Ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class c_ extends Ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Qe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new l_(s_),this.clock=new Xc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nl!==void 0&&(o instanceof Nl?n=!0:o instanceof c_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zc extends Ts{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const f_=(r,e,t)=>{r.renderer=new Hc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new u_(r.renderer),r.composer.addPass(new Zc(r.scene,Po(r.camera)))},Ol=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=ni:r.renderer.outputEncoding=ot,t?r.renderer.toneMapping=Rn:r.renderer.toneMapping=xc)},Fl=(r,e,t)=>{var n,i,s,o,a,l,c,u;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(s=r.renderer).setPixelRatio)==null||o.call(s,t),(l=(a=r.composer).setSize)==null||l.call(a,e.width,e.height),(u=(c=r.composer).setPixelRatio)==null||u.call(c,t))},zl=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},Pn=r=>r.userData,h_=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Qc=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),d_=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,p_=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);ut(i);let s;const o=r.pointer.subscribe(c=>s=c);ut(o);let a;const l=c=>{var h,p;c.preventDefault();const u=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,h_(r,c);const f=m_(e,s,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!g_(f,a)){a=null;return}a=null}!f||(p=(h=Pn(f.object)).eventDispatcher)==null||p.call(h,u,{...f,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function m_(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Qc(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function g_(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const __=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);ut(n);let i;const s=r.camera.subscribe(c=>i=c);ut(s);let o;const a=r.pointer.subscribe(c=>o=c);return ut(a),{raycast:()=>{var f,h,p,g,v,m,d,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Qc(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&d_(e.lastIntersection,u)&&((m=(v=Pn(e.lastIntersection.object)).eventDispatcher)==null||m.call(v,"pointerleave",e.lastIntersection),(_=(d=Pn(u.object)).eventDispatcher)==null||_.call(d,"pointerenter",u)):(g=(p=Pn(u.object)).eventDispatcher)==null||g.call(p,"pointerenter",u):e.lastIntersection&&((h=(f=Pn(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},As=typeof window!="undefined",v_=r=>{if(!As)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),ut(()=>{!e||cancelAnimationFrame(e)})},x_=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var o,a;return((o=i.order)!=null?o:0)>((a=s.order)!=null?a:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},M_=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},b_=(r,e,t,n)=>{let i=Po(r.camera);const s=r.camera.subscribe(a=>i=a);ut(s);const{raycast:o}=__(r,e);v_(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!i||!r.composer||!r.renderer||(x_(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),M_(t),t.frameInvalidated=!1,t.advance=!1))})},S_=()=>{const r=new sn(75,0,.1,1e3);return Pn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},y_=r=>{const e=r.size.subscribe(t=>{Pn(Po(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});ut(e)},w_=(r,e,t,n,i,s,o)=>{const a={audioListeners:new Map,addAudioListener:(d,_)=>{if(_=_!=null?_:"default",a.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}a.audioListeners.set(_,d)},removeAudioListener:d=>{if(d=d!=null?d:"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}a.audioListeners.delete(d)},getAudioListener:d=>{if(d=d!=null?d:"default",!a.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}return a.audioListeners.get(d)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:mu([n,i],([d,_])=>d||_),pointer:Ye(new Qe),pointerOverCanvas:Ye(!1),clock:new Xc,camera:Ye(S_()),scene:new Eg,renderer:void 0,composer:void 0,invalidate:d=>{l.frameInvalidated=!0,l.debugFrameloop&&d&&(l.invalidations[d]=l.invalidations[d]?l.invalidations[d]+1:1)},advance:()=>{l.advance=!0}},u={flat:Ye(e),linear:Ye(r),dpr:Ye(t),setCamera:d=>{c.camera.set(d),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof Zc&&(_.camera=d)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new qc,lastIntersection:null,addRaycastableObject:d=>{u.raycastableObjects.add(d)},removeRaycastableObject:d=>{u.raycastableObjects.delete(d)},addInteractiveObject:d=>{u.interactiveObjects.add(d)},removeInteractiveObject:d=>{u.interactiveObjects.delete(d)},addPass:d=>{!c.composer||(c.composer.addPass(d),c.invalidate("Canvas: adding pass"))},removePass:d=>{!c.composer||(c.composer.removePass(d),c.invalidate("Canvas: removing pass"))}},f={dispose:async(d=!1)=>{await Lr(),!(!f.shouldDispose&&!d)&&(f.disposableObjects.forEach((_,x)=>{var M;(_===0||d)&&((M=x==null?void 0:x.dispose)==null||M.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(d,_)=>{const x=_!=null?_:[];return d&&((d==null?void 0:d.dispose)&&typeof d.dispose=="function"&&d.type!=="Scene"&&x.push(d),Object.entries(d).forEach(([M,y])=>{if(M==="parent"||M==="children"||typeof y!="object")return;const E=y;E!=null&&E.dispose&&f.collectDisposableObjects(E,x)})),x},addDisposableObjects:d=>{d.forEach(_=>{const x=f.disposableObjects.get(_);x?f.disposableObjects.set(_,x+1):f.disposableObjects.set(_,1)})},removeDisposableObjects:d=>{d.length!==0&&(d.forEach(_=>{const x=f.disposableObjects.get(_);x&&x>0&&f.disposableObjects.set(_,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return pn("threlte",c),pn("threlte-root",u),pn("threlte-render-context",l),pn("threlte-audio-context",a),pn("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function Cs(r,e){const t=Ye(r);let n=r;const i=t.subscribe(a=>n=a);return ut(i),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Un=()=>In("threlte");function E_(r){let e;const t=r[8].default,n=xn(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&bn(n,t,i,i[7],e?Mn(t,i[7],s,null):Sn(i[7]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}const T_=()=>({onChildMount:In("threlte-hierarchical-object-on-mount"),onChildDestroy:In("threlte-hierarchical-object-on-destroy")}),Kc=()=>In("threlte-hierarchical-parent-context");function A_(r,e,t){var d;let n,{$$slots:i={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{a.push(_),t(1,a),l==null||l(_)};let{onChildDestroy:u=void 0}=e;const f=_=>{const x=a.findIndex(M=>M.uuid===_.uuid);x!==-1&&a.splice(x,1),t(1,a),u==null||u(_)},{invalidate:h}=Un(),p=Kc();Ee(r,p,_=>t(6,n=_));let{parent:g=n}=e;const v=T_();o&&((d=v.onChildMount)==null||d.call(v,o),h("HierarchicalObject: object added"));const m=Cs(o,(_,x)=>{var M,y;x&&((M=v.onChildDestroy)==null||M.call(v,x),h("HierarchicalObject: object added")),_&&((y=v.onChildMount)==null||y.call(v,_),h("HierarchicalObject: object removed"))});return ut(()=>{var _;o&&((_=v.onChildDestroy)==null||_.call(v,o),h("HierarchicalObject: object removed"))}),pn("threlte-hierarchical-object-on-mount",c),pn("threlte-hierarchical-object-on-destroy",f),pn("threlte-hierarchical-parent-context",m),r.$$set=_=>{"object"in _&&t(3,o=_.object),"children"in _&&t(1,a=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,u=_.onChildDestroy),"parent"in _&&t(2,g=_.parent),"$$scope"in _&&t(7,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&m.set(o)},[p,a,g,o,l,u,n,s,i]}class C_ extends gt{constructor(e){super(),mt(this,e,A_,E_,ft,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function P_(r){let e;const t=r[1].default,n=xn(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&bn(n,t,i,i[4],e?Mn(t,i[4],s,null):Sn(i[4]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function L_(r){let e,t;return e=new C_({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[P_]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function R_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,o,a,i]}class ko extends gt{constructor(e){super(),mt(this,e,R_,L_,ft,{object:0})}}const D_=()=>{const r=Ye({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(o=>e=o);ut(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&r.set({width:a,height:l})},s=o=>{n=o,i(),window.addEventListener("resize",i)};return As?(ut(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function kl(r){let e,t;return e=new ko({props:{object:r[0].scene,$$slots:{default:[I_]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function I_(r){let e;const t=r[29].default,n=xn(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&bn(n,t,i,i[33],e?Mn(t,i[33],s,null):Sn(i[33]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function U_(r){let e,t,n,i,s=r[2]&&kl(r);return{c(){e=K("canvas"),s&&s.c(),V(e,"class","svelte-o3oskp")},m(o,a){Fe(o,e,a),s&&s.m(e,null),r[30](e),t=!0,n||(i=[ac(r[3].call(null,e)),Le(e,"click",r[9]),Le(e,"contextmenu",r[10]),Le(e,"pointerup",r[13]),Le(e,"pointerdown",r[11]),Le(e,"pointermove",r[12]),Le(e,"pointerenter",r[31]),Le(e,"pointerleave",r[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&_e(s,1)):(s=kl(o),s.c(),_e(s,1),s.m(e,null)):s&&(Wn(),Se(s,1,1,()=>{s=null}),jn())},i(o){t||(_e(s),t=!0)},o(o){Se(s),t=!1},d(o){o&&Ne(e),s&&s.d(),r[30](null),n=!1,qt(i)}}}const Bl=new Set;function N_(r,e,t){let n,i,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=As?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:v=mc}=e,{size:m=void 0}=e,{rendererParameters:d=void 0}=e,_,x=!1;const M=Ye(m),{parentSize:y,parentSizeAction:E}=D_(),P=w_(f,u,c,M,y,p,h),{getCtx:T,renderCtx:S,disposalCtx:b}=P,{ctx:F,rootCtx:k,audioCtx:L}=P;y_(F),Bl.add(F.invalidate),ut(()=>{Bl.delete(F.invalidate)});const{size:O,scene:B}=F;Ee(r,O,N=>t(26,i=N));const{flat:J,linear:R,dpr:H}=k;Ee(r,J,N=>t(27,s=N)),Ee(r,R,N=>t(28,o=N)),Ee(r,H,N=>t(25,n=N)),pn("threlte-parent",Ye(B)),or(()=>{!_||(f_(F,_,d),Ol(F,o,s),Fl(F,i,n),zl(F,g,v),t(2,x=!0))}),b_(F,k,S,b);const{onClick:Z,onContextMenu:Q,onPointerDown:ve,onPointerMove:se,onPointerUp:j}=p_(F,k,S);ut(()=>{b.dispose(!0)});function ee(N){Vn[N?"unshift":"push"](()=>{_=N,t(1,_)})}const te=()=>T().pointerOverCanvas.set(!0),ue=()=>T().pointerOverCanvas.set(!1);return r.$$set=N=>{"dpr"in N&&t(14,c=N.dpr),"flat"in N&&t(15,u=N.flat),"linear"in N&&t(16,f=N.linear),"frameloop"in N&&t(17,h=N.frameloop),"debugFrameloop"in N&&t(18,p=N.debugFrameloop),"shadows"in N&&t(19,g=N.shadows),"shadowMapType"in N&&t(20,v=N.shadowMapType),"size"in N&&t(21,m=N.size),"rendererParameters"in N&&t(22,d=N.rendererParameters),"$$scope"in N&&t(33,l=N.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&M.set(m),r.$$.dirty[0]&65536&&Ie(R,o=f,o),r.$$.dirty[0]&32768&&Ie(J,s=u,s),r.$$.dirty[0]&16384&&Ie(H,n=c,n),r.$$.dirty[0]&402653184&&Ol(T(),o,s),r.$$.dirty[0]&100663296&&Fl(T(),i,n),r.$$.dirty[0]&1572864&&zl(T(),g,v)},[F,_,x,E,T,O,J,R,H,Z,Q,ve,se,j,c,u,f,h,p,g,v,m,d,k,L,n,i,s,o,a,ee,te,ue,l]}class O_ extends gt{constructor(e){super(),mt(this,e,N_,U_,ft,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Jc=()=>In("threlte-root"),F_=()=>In("threlte-disposal-context");function z_(r){let e;const t=r[9].default,n=xn(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&bn(n,t,i,i[8],e?Mn(t,i[8],s,null):Sn(i[8]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}const Gl="threlte-disposable-object-context";function k_(r,e,t){var m;let n,i,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=F_();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const p=In(Gl);Ee(r,p,d=>t(7,i=d));const g=Ye((m=h!=null?h:i)!=null?m:!0);Ee(r,g,d=>t(6,n=d)),pn(Gl,g);let v=n?a(u):[];return l(v),ut(()=>{c(v)}),r.$$set=d=>{"object"in d&&t(2,u=d.object),"dispose"in d&&t(3,h=d.dispose),"$$scope"in d&&t(8,o=d.$$scope)},r.$$.update=()=>{var d;r.$$.dirty&136&&g.set((d=h!=null?h:i)!=null?d:!0),r.$$.dirty&116&&u!==f&&(c(v),t(5,v=n?a(u):[]),l(v),t(4,f=u))},[p,g,u,h,f,v,n,i,o,s]}class Bo extends gt{constructor(e){super(),mt(this,e,k_,z_,ft,{object:2,dispose:3})}}function B_(r,e,t){let n,i,{object:s}=e;const o=Cs(s);Ee(r,o,c=>t(4,i=c));const a=In("threlte-layers");Ee(r,a,c=>t(3,n=c));const{invalidate:l}=Un();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&o.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,a,s,n,i]}class $c extends gt{constructor(e){super(),mt(this,e,B_,null,ft,{object:2})}}const eu=(r,e)=>{var a;if(!As)return{start:()=>{},stop:()=>{},started:fc(!1)};const t=In("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Ye(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),ut(()=>{s()}),{start:o,stop:s,started:{subscribe:i.subscribe}}},tu=()=>{const r=Ye(!1);return(async()=>{await Lr(),r.set(!0)})(),r};function G_(r,e,t){let n,i,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new D,f=_s(),{invalidate:h}=Un(),p=tu();Ee(r,p,x=>t(8,i=x));const g=async()=>{i||await Lr(),f("transform")},v=async()=>{h("TransformableObject: transformed"),await g()};Pn(s).onTransform=v;const{start:m,stop:d}=eu(async()=>{c&&!l&&c instanceof Et&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=Cs(s);return Ee(r,_,x=>t(7,n=x)),r.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},r.$$.update=()=>{var x,M,y,E,P,T,S,b,F,k,L,O,B;r.$$.dirty&4&&_.set(s),r.$$.dirty&232&&(o&&(n.position.set((x=o.x)!=null?x:0,(M=o.y)!=null?M:0,(y=o.z)!=null?y:0),v()),c&&!l&&(c instanceof Et?m():(d(),n.lookAt((E=c.x)!=null?E:0,(P=c.y)!=null?P:0,(T=c.z)!=null?T:0),v())),c||d()),r.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((S=a.x)!=null?S:1,(b=a.y)!=null?b:1,(F=a.z)!=null?F:1),v()),r.$$.dirty&160&&l&&(n.rotation.set((k=l.x)!=null?k:0,(L=l.y)!=null?L:0,(O=l.z)!=null?O:0,(B=l.order)!=null?B:"XYZ"),v())},[p,_,s,o,a,l,c,n]}class H_ extends gt{constructor(e){super(),mt(this,e,G_,null,ft,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function V_(r,e,t){let n,i,s,{object:o}=e,{viewportAware:a=!1}=e;const l=_s(),{camera:c,invalidate:u}=Un();Ee(r,c,E=>t(8,s=E));const f=new Uo,h=new vt,p=E=>E.type==="Mesh",g=new D,v=()=>s?(h.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(h),p(o)?f.intersectsObject(o):(o.getWorldPosition(g),f.containsPoint(g))):!0,m=tu();Ee(r,m,E=>t(7,i=E));let{inViewport:d=v()}=e;const _=async E=>{E?(i||await Lr(),l("viewportenter",o)):(i||await Lr(),l("viewportleave",o))},{start:x,stop:M,started:y}=eu(()=>{const E=v();d===void 0?(t(3,d=v()),_(d)):E!==d&&(_(E),t(3,d=E))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Ee(r,y,E=>t(6,n=E)),u("ViewportAwareObject"),r.$$set=E=>{"object"in E&&t(4,o=E.object),"viewportAware"in E&&t(5,a=E.viewportAware),"inViewport"in E&&t(3,d=E.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(a&&!n?x():!a&&n&&M())},[c,m,y,d,o,a,n]}class W_ extends gt{constructor(e){super(),mt(this,e,V_,null,ft,{object:4,viewportAware:5,inViewport:3})}}function j_(r){let e;const t=r[14].default,n=xn(t,r,r[18],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&bn(n,t,i,i[18],e?Mn(t,i[18],s,null):Sn(i[18]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function X_(r){let e,t;return e=new ko({props:{object:r[1],$$slots:{default:[j_]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function q_(r){let e,t,n,i,s,o,a,l,c;e=new $c({props:{object:r[1]}}),n=new H_({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new Bo({props:{object:r[1],dispose:r[7],$$slots:{default:[X_]},$$scope:{ctx:r}}});function u(h){r[15](h)}let f={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(f.inViewport=r[0]),a=new W_({props:f}),Vn.push(()=>xs(a,"inViewport",u)),a.$on("viewportenter",r[16]),a.$on("viewportleave",r[17]),{c(){nt(e.$$.fragment),t=ce(),nt(n.$$.fragment),i=ce(),nt(s.$$.fragment),o=ce(),nt(a.$$.fragment)},m(h,p){$e(e,h,p),Fe(h,t,p),$e(n,h,p),Fe(h,i,p),$e(s,h,p),Fe(h,o,p),$e(a,h,p),c=!0},p(h,[p]){const g={};p&2&&(g.object=h[1]),e.$set(g);const v={};p&2&&(v.object=h[1]),p&4&&(v.position=h[2]),p&16&&(v.rotation=h[4]),p&8&&(v.scale=h[3]),p&32&&(v.lookAt=h[5]),n.$set(v);const m={};p&2&&(m.object=h[1]),p&128&&(m.dispose=h[7]),p&262146&&(m.$$scope={dirty:p,ctx:h}),s.$set(m);const d={};p&2&&(d.object=h[1]),p&64&&(d.viewportAware=h[6]),!l&&p&1&&(l=!0,d.inViewport=h[0],vs(()=>l=!1)),a.$set(d)},i(h){c||(_e(e.$$.fragment,h),_e(n.$$.fragment,h),_e(s.$$.fragment,h),_e(a.$$.fragment,h),c=!0)},o(h){Se(e.$$.fragment,h),Se(n.$$.fragment,h),Se(s.$$.fragment,h),Se(a.$$.fragment,h),c=!1},d(h){et(e,h),h&&Ne(t),et(n,h),h&&Ne(i),et(s,h),h&&Ne(o),et(a,h)}}}function Y_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:v=void 0}=e,{visible:m=void 0}=e,{dispose:d=void 0}=e,{userData:_=void 0}=e;const{invalidate:x}=Un(),M=()=>s;function y(T){f=T,t(0,f)}function E(T){$i.call(this,r,T)}function P(T){$i.call(this,r,T)}return r.$$set=T=>{"object"in T&&t(1,s=T.object),"position"in T&&t(2,o=T.position),"scale"in T&&t(3,a=T.scale),"rotation"in T&&t(4,l=T.rotation),"lookAt"in T&&t(5,c=T.lookAt),"viewportAware"in T&&t(6,u=T.viewportAware),"inViewport"in T&&t(0,f=T.inViewport),"castShadow"in T&&t(8,h=T.castShadow),"receiveShadow"in T&&t(9,p=T.receiveShadow),"frustumCulled"in T&&t(10,g=T.frustumCulled),"renderOrder"in T&&t(11,v=T.renderOrder),"visible"in T&&t(12,m=T.visible),"dispose"in T&&t(7,d=T.dispose),"userData"in T&&t(13,_=T.userData),"$$scope"in T&&t(18,i=T.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(m!==void 0&&(M().visible=m),h!==void 0&&(M().castShadow=h),p!==void 0&&(M().receiveShadow=p),g!==void 0&&(M().frustumCulled=g),v!==void 0&&(M().renderOrder=v),_!==void 0&&(M().userData={...M().userData,..._}),x("Object3DInstance: props changed"))},[f,s,o,a,l,c,u,d,h,p,g,v,m,_,n,y,E,P,i]}class Z_ extends gt{constructor(e){super(),mt(this,e,Y_,q_,ft,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function Q_(r){let e;const t=r[17].default,n=xn(t,r,r[21],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&bn(n,t,i,i[21],e?Mn(t,i[21],s,null):Sn(i[21]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function K_(r){let e,t,n;function i(o){r[18](o)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[Q_]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new Z_({props:s}),Vn.push(()=>xs(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){nt(e.$$.fragment)},m(o,a){$e(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],vs(()=>t=!1)),e.$set(l)},i(o){n||(_e(e.$$.fragment,o),n=!0)},o(o){Se(e.$$.fragment,o),n=!1},d(o){et(e,o)}}}function J_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{userData:_=void 0}=e,{dispose:x=void 0}=e,{useCamera:M=!1}=e;const y=Cs(o);Ee(r,y,b=>t(16,n=b));const{setCamera:E}=Jc();function P(b){h=b,t(0,h)}function T(b){$i.call(this,r,b)}function S(b){$i.call(this,r,b)}return r.$$set=b=>{"camera"in b&&t(1,o=b.camera),"position"in b&&t(2,a=b.position),"scale"in b&&t(3,l=b.scale),"rotation"in b&&t(4,c=b.rotation),"lookAt"in b&&t(5,u=b.lookAt),"viewportAware"in b&&t(6,f=b.viewportAware),"inViewport"in b&&t(0,h=b.inViewport),"castShadow"in b&&t(7,p=b.castShadow),"receiveShadow"in b&&t(8,g=b.receiveShadow),"frustumCulled"in b&&t(9,v=b.frustumCulled),"renderOrder"in b&&t(10,m=b.renderOrder),"visible"in b&&t(11,d=b.visible),"userData"in b&&t(12,_=b.userData),"dispose"in b&&t(13,x=b.dispose),"useCamera"in b&&t(15,M=b.useCamera),"$$scope"in b&&t(21,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&y.set(o),r.$$.dirty&98304&&M&&E(n)},[h,o,a,l,c,u,f,p,g,v,m,d,_,x,y,M,n,i,P,T,S,s]}class $_ extends gt{constructor(e){super(),mt(this,e,J_,K_,ft,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function e0(r){let e;const t=r[20].default,n=xn(t,r,r[24],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&bn(n,t,i,i[24],e?Mn(t,i[24],s,null):Sn(i[24]),null)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function t0(r){let e,t,n;function i(o){r[21](o)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[e0]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new $_({props:s}),Vn.push(()=>xs(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){nt(e.$$.fragment)},m(o,a){$e(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],vs(()=>t=!1)),e.$set(l)},i(o){n||(_e(e.$$.fragment,o),n=!0)},o(o){Se(e.$$.fragment,o),n=!1},d(o){et(e,o)}}}function n0(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{userData:v=void 0}=e,{dispose:m=void 0}=e,{viewportAware:d=!1}=e,{inViewport:_=!1}=e,{useCamera:x=!0}=e,{near:M=void 0}=e,{far:y=void 0}=e,{fov:E=void 0}=e;const{size:P,invalidate:T}=Un();Ee(r,P,L=>t(19,n=L));const S=new sn(E,n.width/n.height,M,y);function b(L){_=L,t(1,_)}function F(L){$i.call(this,r,L)}function k(L){$i.call(this,r,L)}return r.$$set=L=>{"position"in L&&t(2,o=L.position),"scale"in L&&t(3,a=L.scale),"rotation"in L&&t(4,l=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"castShadow"in L&&t(6,u=L.castShadow),"receiveShadow"in L&&t(7,f=L.receiveShadow),"frustumCulled"in L&&t(8,h=L.frustumCulled),"renderOrder"in L&&t(9,p=L.renderOrder),"visible"in L&&t(10,g=L.visible),"userData"in L&&t(11,v=L.userData),"dispose"in L&&t(12,m=L.dispose),"viewportAware"in L&&t(13,d=L.viewportAware),"inViewport"in L&&t(1,_=L.inViewport),"useCamera"in L&&t(14,x=L.useCamera),"near"in L&&t(16,M=L.near),"far"in L&&t(17,y=L.far),"fov"in L&&t(18,E=L.fov),"$$scope"in L&&t(24,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,S.aspect=n.width/n.height,S),S.updateProjectionMatrix(),T("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(M!==void 0&&t(0,S.near=M,S),y!==void 0&&t(0,S.far=y,S),E!==void 0&&t(0,S.fov=E,S),S.updateProjectionMatrix(),T("PerspectiveCamera: props changed"))},[S,_,o,a,l,c,u,f,h,p,g,v,m,d,x,P,M,y,E,n,i,b,F,k,s]}class i0 extends gt{constructor(e){super(),mt(this,e,n0,t0,ft,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Hl=[],r0=(r,e)=>{const t=Hl.find(i=>i instanceof r);if(t)return t;const n=e();return Hl.push(n),n},hi=new qc,Qt=new D,Jn=new D,dt=new Wt,Vl={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},co={type:"change"},Wl={type:"mouseDown"},jl={type:"mouseUp",mode:null},Xl={type:"objectChange"};class s0 extends Et{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new f0;this._gizmo=n,this.add(n);const i=new h0;this._plane=i,this.add(i);const s=this;function o(_,x){let M=x;Object.defineProperty(s,_,{get:function(){return M!==void 0?M:x},set:function(y){M!==y&&(M=y,i[_]=y,n[_]=y,s.dispatchEvent({type:_+"-changed",value:y}),s.dispatchEvent(co))}}),s[_]=x,i[_]=x,n[_]=x}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new D,l=new D,c=new Wt,u=new Wt,f=new D,h=new Wt,p=new D,g=new D,v=new D,m=0,d=new D;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",u),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",p),o("pointEnd",g),o("rotationAxis",v),o("rotationAngle",m),o("eye",d),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Wt,this._parentQuaternionInv=new Wt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Wt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Wt,this._scaleStart=new D,this._getPointer=o0.bind(this),this._onPointerDown=l0.bind(this),this._onPointerHover=a0.bind(this),this._onPointerMove=c0.bind(this),this._onPointerUp=u0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;hi.setFromCamera(e,this.camera);const t=uo(this._gizmo.picker[this.mode],hi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){hi.setFromCamera(e,this.camera);const t=uo(this._plane,hi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Wl.mode=this.mode,this.dispatchEvent(Wl)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;hi.setFromCamera(e,this.camera);const o=uo(this._plane,hi,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(dt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Qt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Qt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Jn.set(a,a,a)}else Qt.copy(this.pointStart),Jn.copy(this.pointEnd),Qt.applyQuaternion(this._worldQuaternionInv),Jn.applyQuaternion(this._worldQuaternionInv),Jn.divide(Qt),t.search("X")===-1&&(Jn.x=1),t.search("Y")===-1&&(Jn.y=1),t.search("Z")===-1&&(Jn.z=1);i.scale.copy(this._scaleStart).multiply(Jn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Qt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Qt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Vl[t]),Qt.copy(Vl[t]),s==="local"&&Qt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Qt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(dt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(dt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(co),this.dispatchEvent(Xl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(jl.mode=this.mode,this.dispatchEvent(jl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(co),this.dispatchEvent(Xl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function o0(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function a0(r){if(!!this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function l0(r){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function c0(r){!this.enabled||this.pointerMove(this._getPointer(r))}function u0(r){!this.enabled||(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function uo(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const os=new yi,it=new D(0,1,0),ql=new D(0,0,0),Yl=new vt,as=new Wt,ds=new Wt,wn=new D,Zl=new vt,Sr=new D(1,0,0),mi=new D(0,1,0),yr=new D(0,0,1),ls=new D,_r=new D,vr=new D;class f0 extends Et{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ys({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Vc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const f=e.clone();f.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const v=new Ft(0,.04,.1,12);v.translate(0,.05,0);const m=new bt(.08,.08,.08);m.translate(0,.04,0);const d=new Xt;d.setAttribute("position",new pt([0,0,0,1,0,0],3));const _=new Ft(.0075,.0075,.5,3);_.translate(0,.25,0);function x(B,J){const R=new _i(B,.0075,3,64,J*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function M(){const B=new Xt;return B.setAttribute("position",new pt([0,0,0,1,1,1],3)),B}const y={X:[[new pe(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new pe(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new pe(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(v,o),[0,.5,0]],[new pe(v,o),[0,-.5,0],[Math.PI,0,0]],[new pe(_,o)]],Z:[[new pe(v,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new qi(.1,0),f.clone()),[0,0,0]]],XY:[[new pe(new bt(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new pe(new bt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new bt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new pe(new Ft(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Ft(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Ft(.2,0,.6,4),n),[0,.3,0]],[new pe(new Ft(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Ft(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Ft(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new qi(.2,0),n)]],XY:[[new pe(new bt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new bt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new bt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new pe(new qi(.01,2),i),null,null,null,"helper"]],END:[[new pe(new qi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Kn(M(),i),null,null,null,"helper"]],X:[[new Kn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kn(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kn(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},T={XYZE:[[new pe(x(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new pe(x(.5,.5),s)]],Y:[[new pe(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new pe(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new pe(x(.75,1),h),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Kn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new pe(new Fo(.25,10,8),n)]],X:[[new pe(new _i(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new _i(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new _i(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new _i(.75,.1,2,24),n)]]},F={X:[[new pe(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new pe(_,s),[0,0,0],[0,0,-Math.PI/2]],[new pe(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(m,o),[0,.5,0]],[new pe(_,o)],[new pe(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(m,a),[0,0,.5],[Math.PI/2,0,0]],[new pe(_,a),[0,0,0],[Math.PI/2,0,0]],[new pe(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new bt(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new pe(new bt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new bt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new bt(.1,.1,.1),f.clone())]]},k={X:[[new pe(new Ft(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Ft(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Ft(.2,0,.6,4),n),[0,.3,0]],[new pe(new Ft(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Ft(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Ft(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new bt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new bt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new bt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new bt(.2,.2,.2),n),[0,0,0]]]},L={X:[[new Kn(d,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Kn(d,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Kn(d,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(B){const J=new Et;for(const R in B)for(let H=B[R].length;H--;){const Z=B[R][H][0].clone(),Q=B[R][H][1],ve=B[R][H][2],se=B[R][H][3],j=B[R][H][4];Z.name=R,Z.tag=j,Q&&Z.position.set(Q[0],Q[1],Q[2]),ve&&Z.rotation.set(ve[0],ve[1],ve[2]),se&&Z.scale.set(se[0],se[1],se[2]),Z.updateMatrix();const ee=Z.geometry.clone();ee.applyMatrix4(Z.matrix),Z.geometry=ee,Z.renderOrder=1/0,Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1),J.add(Z)}return J}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(y)),this.add(this.gizmo.rotate=O(T)),this.add(this.gizmo.scale=O(F)),this.add(this.picker.translate=O(E)),this.add(this.picker.rotate=O(b)),this.add(this.picker.scale=O(k)),this.add(this.helper.translate=O(P)),this.add(this.helper.rotate=O(S)),this.add(this.helper.scale=O(L)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ds;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const o=i[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(dt.setFromEuler(os.set(0,0,0)),o.quaternion.copy(n).multiply(dt),Math.abs(it.copy(Sr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(dt.setFromEuler(os.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(dt),Math.abs(it.copy(mi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(dt.setFromEuler(os.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(dt),Math.abs(it.copy(yr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(dt.setFromEuler(os.set(0,Math.PI/2,0)),it.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Yl.lookAt(ql,it,mi)),o.quaternion.multiply(dt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Qt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Qt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Qt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(it.copy(Sr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(it.copy(mi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(it.copy(yr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(it.copy(yr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(it.copy(Sr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(it.copy(mi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(as.copy(n),it.copy(this.eye).applyQuaternion(dt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Yl.lookAt(this.eye,ql,mi)),o.name==="X"&&(dt.setFromAxisAngle(Sr,Math.atan2(-it.y,it.z)),dt.multiplyQuaternions(as,dt),o.quaternion.copy(dt)),o.name==="Y"&&(dt.setFromAxisAngle(mi,Math.atan2(it.x,it.z)),dt.multiplyQuaternions(as,dt),o.quaternion.copy(dt)),o.name==="Z"&&(dt.setFromAxisAngle(yr,Math.atan2(it.y,it.x)),dt.multiplyQuaternions(as,dt),o.quaternion.copy(dt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class h0 extends pe{constructor(){super(new ws(1e5,1e5,2,2),new ys({visible:!1,wireframe:!0,side:Cn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ls.copy(Sr).applyQuaternion(t==="local"?this.worldQuaternion:ds),_r.copy(mi).applyQuaternion(t==="local"?this.worldQuaternion:ds),vr.copy(yr).applyQuaternion(t==="local"?this.worldQuaternion:ds),it.copy(_r),this.mode){case"translate":case"scale":switch(this.axis){case"X":it.copy(this.eye).cross(ls),wn.copy(ls).cross(it);break;case"Y":it.copy(this.eye).cross(_r),wn.copy(_r).cross(it);break;case"Z":it.copy(this.eye).cross(vr),wn.copy(vr).cross(it);break;case"XY":wn.copy(vr);break;case"YZ":wn.copy(ls);break;case"XZ":it.copy(vr),wn.copy(_r);break;case"XYZ":case"E":wn.set(0,0,0);break}break;case"rotate":default:wn.set(0,0,0)}wn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Zl.lookAt(Qt.set(0,0,0),wn,it),this.quaternion.setFromRotationMatrix(Zl)),super.updateMatrixWorld(e)}}function d0(r){let e,t,n,i;return e=new Bo({props:{dispose:r[0],object:r[1]}}),n=new $c({props:{object:r[1]}}),{c(){nt(e.$$.fragment),t=ce(),nt(n.$$.fragment)},m(s,o){$e(e,s,o),Fe(s,t,o),$e(n,s,o),i=!0},p(s,[o]){const a={};o&1&&(a.dispose=s[0]),o&2&&(a.object=s[1]),e.$set(a);const l={};o&2&&(l.object=s[1]),n.$set(l)},i(s){i||(_e(e.$$.fragment,s),_e(n.$$.fragment,s),i=!0)},o(s){Se(e.$$.fragment,s),Se(n.$$.fragment,s),i=!1},d(s){et(e,s),s&&Ne(t),et(n,s)}}}function p0(r,e,t){let n,i,{autoPauseOrbitControls:s=!0}=e,{mode:o=void 0}=e,{axis:a=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:u=void 0}=e,{scaleSnap:f=void 0}=e,{rotationSnap:h=void 0}=e,{showX:p=void 0}=e,{showY:g=void 0}=e,{showZ:v=void 0}=e,{size:m=void 0}=e,{space:d=void 0}=e,{dispose:_=void 0}=e;const{camera:x,renderer:M,invalidate:y,scene:E}=Un();Ee(r,x,R=>t(20,i=R));const P=Kc();if(Ee(r,P,R=>t(19,n=R)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const T=_s(),S=()=>{if(!!i)return Pn(i).orbitControls};let b;const F=()=>{if(b!==void 0){const R=S();R&&(R.enabled=b),b=void 0}};ut(F);const k={change:R=>{var H,Z;n&&((Z=(H=Pn(n)).onTransform)==null||Z.call(H)),y("TransformControls: change event"),T("change",R)},"camera-changed":R=>T("camera-changed",R),"object-changed":R=>T("object-changed",R),"enabled-changed":R=>T("enabled-changed",R),"axis-changed":R=>{t(4,a=R.value),T("axis-changed",R)},"mode-changed":R=>T("mode-changed",R),"translationSnap-changed":R=>T("translationSnap-changed",R),"rotationSnap-changed":R=>T("rotationSnap-changed",R),"scaleSnap-changed":R=>T("scaleSnap-changed",R),"space-changed":R=>T("space-changed",R),"size-changed":R=>T("size-changed",R),"dragging-changed":R=>{t(5,l=R.value);e:if(s){const H=S();if(!H)break e;const Z=!R.value;if(H.enabled===Z)break e;R.value&&(b=H.enabled),H.enabled=Z}T("dragging-changed",R)},"showX-changed":R=>T("showX-changed",R),"showY-changed":R=>T("showY-changed",R),"showZ-changed":R=>T("showZ-changed",R),"worldPosition-changed":R=>T("worldPosition-changed",R),"worldPositionStart-changed":R=>T("worldPositionStart-changed",R),"worldQuaternion-changed":R=>T("worldQuaternion-changed",R),"worldQuaternionStart-changed":R=>T("worldQuaternionStart-changed",R),"cameraPosition-changed":R=>T("cameraPosition-changed",R),"cameraQuaternion-changed":R=>T("cameraQuaternion-changed",R),"pointStart-changed":R=>T("pointStart-changed",R),"pointEnd-changed":R=>T("pointEnd-changed",R),"rotationAxis-changed":R=>T("rotationAxis-changed",R),"rotationAngle-changed":R=>T("rotationAngle-changed",R),"eye-changed":R=>T("eye-changed",R),mouseDown:()=>T("mouseDown"),mouseUp:()=>T("mouseUp"),objectChange:()=>T("objectChange")};if(!M)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const L=new s0(i,M.domElement),O=()=>L.reset();L.attach(n);const B=()=>{Object.entries(k).forEach(([R,H])=>{L.addEventListener(R,H)})},J=()=>{Object.entries(k).forEach(([R,H])=>{L.removeEventListener(R,H)})};return B(),E.add(L),ut(()=>{L.detach(),E.remove(L),J()}),r.$$set=R=>{"autoPauseOrbitControls"in R&&t(6,s=R.autoPauseOrbitControls),"mode"in R&&t(7,o=R.mode),"axis"in R&&t(4,a=R.axis),"dragging"in R&&t(5,l=R.dragging),"enabled"in R&&t(8,c=R.enabled),"translationSnap"in R&&t(9,u=R.translationSnap),"scaleSnap"in R&&t(10,f=R.scaleSnap),"rotationSnap"in R&&t(11,h=R.rotationSnap),"showX"in R&&t(12,p=R.showX),"showY"in R&&t(13,g=R.showY),"showZ"in R&&t(14,v=R.showZ),"size"in R&&t(15,m=R.size),"space"in R&&t(16,d=R.space),"dispose"in R&&t(0,_=R.dispose)},r.$$.update=()=>{r.$$.dirty&64&&(s||F()),r.$$.dirty&256&&c!==void 0&&t(1,L.enabled=c,L),r.$$.dirty&4096&&p!==void 0&&t(1,L.showX=p,L),r.$$.dirty&8192&&g!==void 0&&t(1,L.showY=g,L),r.$$.dirty&16384&&v!==void 0&&t(1,L.showZ=v,L),r.$$.dirty&130&&o!==void 0&&L.setMode(o),r.$$.dirty&514&&u!==void 0&&L.setTranslationSnap(u),r.$$.dirty&1026&&f!==void 0&&L.setScaleSnap(f),r.$$.dirty&2050&&h!==void 0&&L.setRotationSnap(h),r.$$.dirty&32770&&m!==void 0&&L.setSize(m),r.$$.dirty&65538&&d!==void 0&&L.setSpace(d)},[_,L,x,P,a,l,s,o,c,u,f,h,p,g,v,m,d,O]}class m0 extends gt{constructor(e){super(),mt(this,e,p0,d0,ft,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const nu=new Et;nu.scale.set(0,0,0);nu.matrix;new vt().fromArray(new Array(16).fill(0));new Je(16777215);const iu=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},fo=Symbol("initialValueBeforeAttach"),g0=()=>{const{invalidate:r}=Un();let e=!1,t=fo,n,i,s;const o=(l,c,u)=>{if(a(),!u){const f=l;((f==null?void 0:f.isMaterial)||!1)&&(u="material"),((f==null?void 0:f.isBufferGeometry)||(f==null?void 0:f.isGeometry)||!1)&&(u="geometry")}if(!!u){if(typeof u=="function")n=u(c,l);else{const{target:f,key:h}=iu(c,u);t=f[h],f[h]=l,i=f,s=h}e=!0,r()}},a=()=>{!e||(n?(n(),n=void 0):i&&s&&t!==fo&&(i[s]=t,t=fo,i=void 0,s=void 0),e=!1,r())};return ut(()=>{a()}),{update:o}},_0=r=>r&&r.isCamera,ru=r=>r&&r.isOrthographicCamera,su=r=>r&&r.isPerspectiveCamera,v0=r=>su(r)||ru(r),x0=()=>{const{invalidate:r,size:e}=Un(),{setCamera:t}=Jc();let n,i;ut(()=>{i==null||i()});const s=l=>{!n||(ru(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):su(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!v0(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!_0(l)||!c||(t(l),r())}}},Ql=r=>!!(r!=null&&r.addEventListener),M0=()=>{const r=_s(),e=sr(),t=h=>{h!=null&&h.type&&r(h.type,h)},n=(h,p)=>{Ql(h)&&p.forEach(g=>{h.removeEventListener(g,t)})},i=(h,p)=>{Ql(h)&&p.forEach(g=>{h.addEventListener(g,t)})};let s=[],o;const a=Ye([]),l=a.subscribe(h=>{n(o,s),i(o,h),s=h});ut(l);const c=Ye(),u=c.subscribe(h=>{n(o,s),i(h,s),o=h});return ut(u),ut(()=>{n(o,s)}),or(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:h=>{c.set(h)}}},b0=["$$scope","$$slots","type","args","attach","instance"],S0=["fov","aspect","near","far","left","right","top","bottom","zoom"],y0=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r=="undefined"||r===null,w0=()=>{const{invalidate:r}=Un(),e=new Map,t=(i,s,o,a)=>{var u,f;if(y0(o)){const h=e.get(s);if(h&&h.instance===i&&h.value===o)return;e.set(s,{instance:i,value:o})}const{key:l,target:c}=iu(i,s);if(!Array.isArray(o)&&typeof o=="number"&&typeof((u=c[l])==null?void 0:u.setScalar)=="function")c[l].setScalar(o);else if(typeof((f=c[l])==null?void 0:f.set)=="function")Array.isArray(o)?c[l].set(...o):c[l].set(o);else{if(c[l]=o,a.manualCamera)return;S0.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,o)=>{for(const a in s)b0.includes(a)||t(i,a,s[a],o),r()}}},E0=r=>({ref:r&1}),Kl=r=>({ref:r[0]}),T0=r=>({ref:r&1}),Jl=r=>({ref:r[0]});function $l(r){let e,t;return e=new Bo({props:{object:r[0],dispose:r[1]}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function A0(r){let e;const t=r[12].default,n=xn(t,r,r[13],Kl);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&bn(n,t,i,i[13],e?Mn(t,i[13],s,E0):Sn(i[13]),Kl)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function C0(r){let e,t;return e=new ko({props:{object:r[0],$$slots:{default:[P0]},$$scope:{ctx:r}}}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function P0(r){let e;const t=r[12].default,n=xn(t,r,r[13],Jl);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&bn(n,t,i,i[13],e?Mn(t,i[13],s,T0):Sn(i[13]),Jl)},i(i){e||(_e(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function L0(r){let e=r[4](r[0]),t,n,i,s,o,a,l=e&&$l(r);const c=[C0,A0],u=[];function f(h,p){return p&1&&(n=null),n==null&&(n=!!h[3](h[0])),n?0:1}return i=f(r,-1),s=u[i]=c[i](r),{c(){l&&l.c(),t=ce(),s.c(),o=ri()},m(h,p){l&&l.m(h,p),Fe(h,t,p),u[i].m(h,p),Fe(h,o,p),a=!0},p(h,[p]){p&1&&(e=h[4](h[0])),e?l?(l.p(h,p),p&1&&_e(l,1)):(l=$l(h),l.c(),_e(l,1),l.m(t.parentNode,t)):l&&(Wn(),Se(l,1,1,()=>{l=null}),jn());let g=i;i=f(h,p),i===g?u[i].p(h,p):(Wn(),Se(u[g],1,1,()=>{u[g]=null}),jn(),s=u[i],s?s.p(h,p):(s=u[i]=c[i](h),s.c()),_e(s,1),s.m(o.parentNode,o))},i(h){a||(_e(l),_e(s),a=!0)},o(h){Se(l),Se(s),a=!1},d(h){l&&l.d(h),h&&Ne(t),u[i].d(h),h&&Ne(o)}}}function R0(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Wo(e,n),s,{$$slots:o={},$$scope:a}=e,{type:l}=e,{args:c=void 0}=e,{attach:u=void 0}=e,{manual:f=void 0}=e,{makeDefault:h=void 0}=e,{dispose:p=void 0}=e;const g=In("threlte-hierarchical-parent-context");Ee(r,g,b=>t(11,s=b));const v=b=>typeof b=="function"&&/^\s*class\s+/.test(b.toString()),m=b=>Array.isArray(b);let{ref:d=v(l)&&m(c)?new l(...c):v(l)?new l:l}=e,_=!1;const x=Ye(d);pn("threlte-hierarchical-parent-context",x);const M=w0(),y=x0(),E=g0(),P=M0(),T=b=>!!b.isObject3D,S=b=>b.dispose!==void 0;return r.$$set=b=>{e=ho(ho({},e),cu(b)),t(21,i=Wo(e,n)),"type"in b&&t(5,l=b.type),"args"in b&&t(6,c=b.args),"attach"in b&&t(7,u=b.attach),"manual"in b&&t(8,f=b.manual),"makeDefault"in b&&t(9,h=b.makeDefault),"dispose"in b&&t(1,p=b.dispose),"ref"in b&&t(0,d=b.ref),"$$scope"in b&&t(13,a=b.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(_?t(0,d=v(l)&&m(c)?new l(...c):v(l)?new l:l):t(10,_=!0)),r.$$.dirty&1&&x.set(d),M.updateProps(d,i,{manualCamera:f}),r.$$.dirty&257&&y.update(d,f),r.$$.dirty&513&&y.makeDefaultCamera(d,h),r.$$.dirty&2177&&E.update(d,s,u),r.$$.dirty&1&&P.updateRef(d)},[d,p,g,T,S,l,c,u,f,h,_,s,o,a]}class D0 extends gt{constructor(e){super(),mt(this,e,R0,L0,ft,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function I0(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class ec extends gt{constructor(e){super(),mt(this,e,I0,null,ft,{})}}new Proxy(ec,{get(r,e){return r[e]||ec}});r0(fl,()=>new fl(Wc));function tc(r){let e,t,n,i,s,o=r[4]=="translate"?"rotate":"translate",a,l,c,u,f,h,p,g,v,m,d,_,x,M,y,E=r[2].x.toFixed(2)+"",P,T,S,b,F,k,L=-r[2].z.toFixed(2)+"",O,B,J,R,H,Z,Q=r[2].y.toFixed(2)+"",ve,se,j,ee,te,ue,N,Re,Ce,oe,Te,je,ye,Ue,lt,xt,Mt,_t,Xe=Kt.radToDeg(r[3].x).toFixed(2)+"",st,It,C,w,q,ne,re=Kt.radToDeg(r[3].y).toFixed(2)+"",fe,Pe,de,$,xe,we,Ae=Kt.radToDeg(r[3].z).toFixed(2)+"",ge,Me,Oe,Ze,ct,U,W,ie,he,be,Ke,He,Tt,Yt,ht,Lt,kt,Nn,si,Fr,fr,On,A,z,Y,G,X=r[12]==null&&nc(r);return On=new O_({props:{$$slots:{default:[N0]},$$scope:{ctx:r}}}),{c(){e=K("div"),t=K("div"),n=K("div"),i=K("button"),s=rt("Change to "),a=rt(o),l=ce(),c=K("div"),u=K("button"),u.textContent="Reset Rotation",f=ce(),h=K("button"),h.textContent="Reset Position",p=ce(),g=K("div"),v=K("p"),v.textContent="Translation Snap",m=ce(),d=K("div"),_=K("div"),x=K("p"),x.textContent="x",M=ce(),y=K("p"),P=rt(E),T=ce(),S=K("div"),b=K("p"),b.textContent="y",F=ce(),k=K("p"),O=rt(L),B=ce(),J=K("div"),R=K("p"),R.textContent="z",H=ce(),Z=K("p"),ve=rt(Q),se=ce(),j=K("div"),ee=K("div"),te=rt(r[5]),ue=ce(),N=K("input"),Re=ce(),Ce=K("button"),Ce.textContent="Place On Ground",oe=ce(),Te=K("div"),je=K("p"),je.textContent="Rotation Snap",ye=ce(),Ue=K("div"),lt=K("div"),xt=K("p"),xt.textContent="x",Mt=ce(),_t=K("p"),st=rt(Xe),It=ce(),C=K("div"),w=K("p"),w.textContent="y",q=ce(),ne=K("p"),fe=rt(re),Pe=ce(),de=K("div"),$=K("p"),$.textContent="z",xe=ce(),we=K("p"),ge=rt(Ae),Me=ce(),Oe=K("div"),Ze=K("div"),ct=rt(r[6]),U=ce(),W=K("input"),ie=ce(),he=K("p"),he.textContent="Object Alpha",be=ce(),Ke=K("div"),He=K("input"),Tt=ce(),Yt=K("button"),Yt.textContent="Stop Placement",ht=ce(),Lt=K("button"),kt=K("i"),Fr=ce(),X&&X.c(),fr=ce(),nt(On.$$.fragment),V(i,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(u,"class","bg-[color:var(--color-secondary)] text-white p-[0.5rem] w-full whitespace-nowrap"),V(h,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(c,"class","flex flex-row gap-[1rem]"),V(v,"class","h-fit"),V(_,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(S,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(J,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(d,"class","flex flex-row gap-[1rem] text-center"),V(g,"class","flex flex-col items-center"),V(ee,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),V(N,"id","slider"),V(N,"type","range"),V(N,"min","0.01"),V(N,"max","1"),V(N,"step","0.01"),V(N,"class","w-full"),V(j,"class","flex flex-row gap-[1rem] items-center"),V(Ce,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(je,"class","h-fit"),V(lt,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(C,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(de,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),V(Ue,"class","flex flex-row gap-[1rem] text-center"),V(Te,"class","flex flex-col items-center "),V(Ze,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),V(W,"id","slider"),V(W,"type","range"),V(W,"min","1"),V(W,"max","90"),V(W,"step","1"),V(W,"class","w-full"),V(Oe,"class","flex flex-row gap-[1rem] items-center"),V(he,"class",""),V(He,"id","slider"),V(He,"type","range"),V(He,"min","1"),V(He,"max","255"),V(He,"step","10"),V(He,"class","w-full"),V(Ke,"class","flex flex-row gap-[1rem] items-center"),V(Yt,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),V(n,"class","flex flex-col gap-[1rem] p-[2rem]"),V(kt,"class",Nn="fas text-[2rem] fa-chevron-"+(r[7]?"left":"right")),V(Lt,"class","h-full absolute -right-[4rem] w-[4rem] grid place-items-center bg-[color:var(--color-secondary)]"),V(t,"class",si="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(r[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"),V(e,"class",A="modeler z-[0] absolute h-screen w-screen "+(r[9]?"bg-gray-800":""))},m(ae,me){Fe(ae,e,me),I(e,t),I(t,n),I(n,i),I(i,s),I(i,a),I(n,l),I(n,c),I(c,u),I(c,f),I(c,h),I(n,p),I(n,g),I(g,v),I(g,m),I(g,d),I(d,_),I(_,x),I(_,M),I(_,y),I(y,P),I(d,T),I(d,S),I(S,b),I(S,F),I(S,k),I(k,O),I(d,B),I(d,J),I(J,R),I(J,H),I(J,Z),I(Z,ve),I(n,se),I(n,j),I(j,ee),I(ee,te),I(j,ue),I(j,N),Tn(N,r[5]),I(n,Re),I(n,Ce),I(n,oe),I(n,Te),I(Te,je),I(Te,ye),I(Te,Ue),I(Ue,lt),I(lt,xt),I(lt,Mt),I(lt,_t),I(_t,st),I(Ue,It),I(Ue,C),I(C,w),I(C,q),I(C,ne),I(ne,fe),I(Ue,Pe),I(Ue,de),I(de,$),I(de,xe),I(de,we),I(we,ge),I(n,Me),I(n,Oe),I(Oe,Ze),I(Ze,ct),I(Oe,U),I(Oe,W),Tn(W,r[6]),I(n,ie),I(n,he),I(n,be),I(n,Ke),I(Ke,He),Tn(He,r[1]),I(n,Tt),I(n,Yt),I(t,ht),I(t,Lt),I(Lt,kt),I(e,Fr),X&&X.m(e,null),I(e,fr),$e(On,e,null),z=!0,Y||(G=[Le(i,"click",r[22]),Le(u,"click",r[23]),Le(h,"click",r[24]),Le(N,"change",r[25]),Le(N,"input",r[25]),Le(Ce,"click",r[26]),Le(W,"change",r[27]),Le(W,"input",r[27]),Le(He,"change",r[28]),Le(He,"input",r[28]),Le(Yt,"click",r[29]),Le(Lt,"click",r[30])],Y=!0)},p(ae,me){(!z||me[0]&16)&&o!==(o=ae[4]=="translate"?"rotate":"translate")&&At(a,o),(!z||me[0]&4)&&E!==(E=ae[2].x.toFixed(2)+"")&&At(P,E),(!z||me[0]&4)&&L!==(L=-ae[2].z.toFixed(2)+"")&&At(O,L),(!z||me[0]&4)&&Q!==(Q=ae[2].y.toFixed(2)+"")&&At(ve,Q),(!z||me[0]&32)&&At(te,ae[5]),me[0]&32&&Tn(N,ae[5]),(!z||me[0]&8)&&Xe!==(Xe=Kt.radToDeg(ae[3].x).toFixed(2)+"")&&At(st,Xe),(!z||me[0]&8)&&re!==(re=Kt.radToDeg(ae[3].y).toFixed(2)+"")&&At(fe,re),(!z||me[0]&8)&&Ae!==(Ae=Kt.radToDeg(ae[3].z).toFixed(2)+"")&&At(ge,Ae),(!z||me[0]&64)&&At(ct,ae[6]),me[0]&64&&Tn(W,ae[6]),me[0]&2&&Tn(He,ae[1]),(!z||me[0]&128&&Nn!==(Nn="fas text-[2rem] fa-chevron-"+(ae[7]?"left":"right")))&&V(kt,"class",Nn),(!z||me[0]&128&&si!==(si="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(ae[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"))&&V(t,"class",si),ae[12]==null?X?X.p(ae,me):(X=nc(ae),X.c(),X.m(e,fr)):X&&(X.d(1),X=null);const De={};me[0]&29821|me[1]&128&&(De.$$scope={dirty:me,ctx:ae}),On.$set(De),(!z||me[0]&512&&A!==(A="modeler z-[0] absolute h-screen w-screen "+(ae[9]?"bg-gray-800":"")))&&V(e,"class",A)},i(ae){z||(_e(On.$$.fragment,ae),z=!0)},o(ae){Se(On.$$.fragment,ae),z=!1},d(ae){ae&&Ne(e),X&&X.d(),et(On),Y=!1,qt(G)}}}function nc(r){let e,t,n;return{c(){e=K("button"),e.innerHTML=`<i class="fa-solid fa-shopping-cart text-[white]"></i> 
        	<p class="font-semibold">Add To Cart</p>`,V(e,"class","absolute text-[2rem] hover:brightness-110 top-1/2 -translate-y-1/2 right-[1rem] w-fit gap-[1rem] px-8 py-4 h-fit bg-[color:var(--color-secondary)] flex flex-row items-center justify-between")},m(i,s){Fe(i,e,s),t||(n=Le(e,"click",r[31]),t=!0)},p:St,d(i){i&&Ne(e),t=!1,n()}}}function U0(r){let e,t;return e=new m0({props:{mode:r[4],translationSnap:r[5],rotationSnap:Kt.degToRad(r[6]),size:.5,space:"local"}}),e.$on("objectChange",r[32]),e.$on("dragging-changed",r[33]),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},p(n,i){const s={};i[0]&16&&(s.mode=n[4]),i[0]&32&&(s.translationSnap=n[5]),i[0]&64&&(s.rotationSnap=Kt.degToRad(n[6])),e.$set(s)},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function N0(r){let e,t,n,i,s;e=new i0({props:{position:r[13],lookAt:r[10],fov:45}});function o(l){r[34](l)}let a={type:pe,"position.x":r[2].x,"position.y":r[2].y,"position.z":r[2].z,quaternion:5,geometry:new bt(0,0,0),material:new Tg,"rotation.x":r[3].x,"rotation.y":r[3].y,"rotation.z":r[3].z,$$slots:{default:[U0]},$$scope:{ctx:r}};return r[0]!==void 0&&(a.ref=r[0]),n=new D0({props:a}),Vn.push(()=>xs(n,"ref",o)),{c(){nt(e.$$.fragment),t=ce(),nt(n.$$.fragment)},m(l,c){$e(e,l,c),Fe(l,t,c),$e(n,l,c),s=!0},p(l,c){const u={};c[0]&8192&&(u.position=l[13]),c[0]&1024&&(u.lookAt=l[10]),e.$set(u);const f={};c[0]&4&&(f["position.x"]=l[2].x),c[0]&4&&(f["position.y"]=l[2].y),c[0]&4&&(f["position.z"]=l[2].z),c[0]&8&&(f["rotation.x"]=l[3].x),c[0]&8&&(f["rotation.y"]=l[3].y),c[0]&8&&(f["rotation.z"]=l[3].z),c[0]&20604|c[1]&128&&(f.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,f.ref=l[0],vs(()=>i=!1)),n.$set(f)},i(l){s||(_e(e.$$.fragment,l),_e(n.$$.fragment,l),s=!0)},o(l){Se(e.$$.fragment,l),Se(n.$$.fragment,l),s=!1},d(l){et(e,l),l&&Ne(t),et(n,l)}}}function O0(r){let e,t,n=r[8]&&tc(r);return{c(){n&&n.c(),e=ri()},m(i,s){n&&n.m(i,s),Fe(i,e,s),t=!0},p(i,s){i[8]?n?(n.p(i,s),s[0]&256&&_e(n,1)):(n=tc(i),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Wn(),Se(n,1,1,()=>{n=null}),jn())},i(i){t||(_e(n),t=!0)},o(i){Se(n),t=!1},d(i){n&&n.d(i),i&&Ne(e)}}}function F0(r,e,t){let n,i,s,o,a,l,c,u,f;Ee(r,Ms,te=>t(9,o=te)),Ee(r,Ln,te=>t(11,l=te)),Ee(r,mn,te=>t(14,f=te));const{show:h,cameraPosition:p,cameraLookAt:g,objectPosition:v,objectEuler:m,entity:d}=vn;Ee(r,h,te=>t(8,s=te)),Ee(r,p,te=>t(13,u=te)),Ee(r,g,te=>t(10,a=te)),Ee(r,v,te=>t(2,n=te)),Ee(r,m,te=>t(3,i=te)),Ee(r,d,te=>t(12,c=te));let _,x="translate",M=.01,y=1,E=!1,P=200;an("setObjectAlpha",te=>{t(1,P=te)});function T(te){te.button==2&&(x=="translate"?t(4,x="rotate"):t(4,x="translate"))}or(()=>{document.addEventListener("contextmenu",T)}),ut(()=>{document.removeEventListener("contextmenu",T)});function S(te){return te.x!=n.x||te.y!=n.y||te.z!=n.z}function b(te){return te.x!=i.x||te.y!=i.y||te.z!=i.z}function F(){_&&(S(_.position)&&(Ie(v,n.x=_.position.x,n),Ie(v,n.y=_.position.y,n),Ie(v,n.z=_.position.z,n),vn.sendMovementUpdate(fs(n))),b(_.rotation)&&(Ie(m,i.x=_.rotation.x,i),Ie(m,i.y=_.rotation.y,i),Ie(m,i.z=_.rotation.z,i),vn.sendRotationUpdate(i)))}const k=()=>{x=="translate"?t(4,x="rotate"):t(4,x="translate")},L=()=>{_.rotation.set(0,0,0,i.order),F()},O=()=>{_.position.set(a.x,a.y,a.z),F()};function B(){M=cs(this.value),t(5,M)}const J=()=>{at("placeOnGround").then(te=>{const ue=Vi(te);_.position.set(ue.x,ue.y,ue.z),F()})};function R(){y=cs(this.value),t(6,y)}function H(){P=cs(this.value),t(1,P)}const Z=()=>{at("stopPlacement"),vn.show.set(!1),Ie(Ln,l=null,l)},Q=()=>{t(7,E=!E)},ve=()=>{at("addToCart",l)},se=te=>{F()},j=te=>{if(!te.detail.value&&c!=null){const N=f.find(oe=>oe.entity===c);if(N===void 0)return;const Re=fs(n);N.position=Re;const Ce=fs(i);N.rotation=Ce,Ie(mn,f=[...f],f),at("updateCartItem",N)}};function ee(te){_=te,t(0,_)}return r.$$.update=()=>{r.$$.dirty[0]&2&&at("setObjectAlpha",{alpha:P}),r.$$.dirty[0]&13&&_&&(_.rotation.set(i.x,i.y,i.z,i.order),_.position.set(n.x,n.y,n.z))},[_,P,n,i,x,M,y,E,s,o,a,l,c,u,f,h,p,g,v,m,d,F,k,L,O,B,J,R,H,Z,Q,ve,se,j,ee]}class z0 extends gt{constructor(e){super(),mt(this,e,F0,O0,ft,{},null,[-1,-1])}}function ic(r){let e,t,n,i;return e=new r_({}),n=new z0({}),{c(){nt(e.$$.fragment),t=ce(),nt(n.$$.fragment)},m(s,o){$e(e,s,o),Fe(s,t,o),$e(n,s,o),i=!0},i(s){i||(_e(e.$$.fragment,s),_e(n.$$.fragment,s),i=!0)},o(s){Se(e.$$.fragment,s),Se(n.$$.fragment,s),i=!1},d(s){et(e,s),s&&Ne(t),et(n,s)}}}function k0(r){let e,t,n=r[0]&&ic();return{c(){n&&n.c(),e=ri()},m(i,s){n&&n.m(i,s),Fe(i,e,s),t=!0},p(i,s){i[0]?n?s&1&&_e(n,1):(n=ic(),n.c(),_e(n,1),n.m(e.parentNode,e)):n&&(Wn(),Se(n,1,1,()=>{n=null}),jn())},i(i){t||(_e(n),t=!0)},o(i){Se(n),t=!1},d(i){n&&n.d(i),i&&Ne(e)}}}function rc(r){let e,t;return e=new Bg({}),{c(){nt(e.$$.fragment)},m(n,i){$e(e,n,i),t=!0},i(n){t||(_e(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){et(e,n)}}}function B0(r){let e,t,n,i,s,o;e=new Og({props:{$$slots:{default:[k0]},$$scope:{ctx:r}}}),n=new Xg({});let a=r[1]&&rc();return{c(){nt(e.$$.fragment),t=ce(),nt(n.$$.fragment),i=ce(),a&&a.c(),s=ri()},m(l,c){$e(e,l,c),Fe(l,t,c),$e(n,l,c),Fe(l,i,c),a&&a.m(l,c),Fe(l,s,c),o=!0},p(l,[c]){const u={};c&17&&(u.$$scope={dirty:c,ctx:l}),e.$set(u),l[1]?a?c&2&&_e(a,1):(a=rc(),a.c(),_e(a,1),a.m(s.parentNode,s)):a&&(Wn(),Se(a,1,1,()=>{a=null}),jn())},i(l){o||(_e(e.$$.fragment,l),_e(n.$$.fragment,l),_e(a),o=!0)},o(l){Se(e.$$.fragment,l),Se(n.$$.fragment,l),Se(a),o=!1},d(l){et(e,l),l&&Ne(t),et(n,l),l&&Ne(i),a&&a.d(l),l&&Ne(s)}}}function G0(r,e,t){let n,i,s;return Ee(r,_o,o=>t(2,n=o)),Ee(r,ms,o=>t(0,i=o)),Ee(r,Ms,o=>t(1,s=o)),Ie(_o,n="ps-housing",n),[i,s]}class H0 extends gt{constructor(e){super(),mt(this,e,G0,B0,ft,{})}}new H0({target:document.getElementById("app")});
