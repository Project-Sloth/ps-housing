const Kc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};Kc();function Et(){}function ua(r,e){for(const t in e)r[t]=e[t];return r}function Kl(r){return r()}function Ba(){return Object.create(null)}function sn(r){r.forEach(Kl)}function ps(r){return typeof r=="function"}function pt(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Jc(r){return Object.keys(r).length===0}function Ea(r,...e){if(r==null)return Et;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ta(r){let e;return Ea(r,t=>e=t)(),e}function Re(r,e,t){r.$$.on_destroy.push(Ea(e,t))}function An(r,e,t,n){if(r){const i=Jl(r,e,t,n);return r[0](i)}}function Jl(r,e,t,n){return r[1]&&n?ua(t.ctx.slice(),r[1](n(e))):t.ctx}function Cn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function Pn(r,e,t,n,i,s){if(i){const a=Jl(e,t,n,s);r.p(a,i)}}function Ln(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function $c(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function Ga(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function He(r,e,t){return r.set(t),e}function eu(r){return r&&ps(r.destroy)?r.destroy:Et}function B(r,e){r.appendChild(e)}function Qe(r,e,t){r.insertBefore(e,t||null)}function Ze(r){r.parentNode&&r.parentNode.removeChild(r)}function Rr(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function ie(r){return document.createElement(r)}function ot(r){return document.createTextNode(r)}function ge(){return ot(" ")}function er(){return ot("")}function Ue(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function J(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function ss(r){return r===""?null:+r}function tu(r){return Array.from(r.childNodes)}function It(r,e){e=""+e,r.data!==e&&(r.data=e)}function Mn(r,e){r.value=e==null?"":e}function Ha(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function us(r,e,t){r.classList[t?"add":"remove"](e)}function nu(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let wr;function Mr(r){wr=r}function tr(){if(!wr)throw new Error("Function called outside component initialization");return wr}function nr(r){tr().$$.on_mount.push(r)}function ct(r){tr().$$.on_destroy.push(r)}function ms(){const r=tr();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=nu(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function dn(r,e){return tr().$$.context.set(r,e),e}function Tn(r){return tr().$$.context.get(r)}function Zi(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Bi=[],Hn=[];let ji=[];const fa=[],$l=Promise.resolve();let ha=!1;function ec(){ha||(ha=!0,$l.then(tc))}function Er(){return ec(),$l}function da(r){ji.push(r)}function gs(r){fa.push(r)}const Rs=new Set;let bi=0;function tc(){if(bi!==0)return;const r=wr;do{try{for(;bi<Bi.length;){const e=Bi[bi];bi++,Mr(e),iu(e.$$)}}catch(e){throw Bi.length=0,bi=0,e}for(Mr(null),Bi.length=0,bi=0;Hn.length;)Hn.pop()();for(let e=0;e<ji.length;e+=1){const t=ji[e];Rs.has(t)||(Rs.add(t),t())}ji.length=0}while(Bi.length);for(;fa.length;)fa.pop()();ha=!1,Rs.clear(),Mr(r)}function iu(r){if(r.fragment!==null){r.update(),sn(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(da)}}function ru(r){const e=[],t=[];ji.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),ji=e}const as=new Set;let pi;function vi(){pi={r:0,c:[],p:pi}}function xi(){pi.r||sn(pi.c),pi=pi.p}function ye(r,e){r&&r.i&&(as.delete(r),r.i(e))}function Ce(r,e,t,n){if(r&&r.o){if(as.has(r))return;as.add(r),pi.c.push(()=>{as.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function _s(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function lt(r){r&&r.c()}function it(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||da(()=>{const a=r.$$.on_mount.map(Kl).filter(ps);r.$$.on_destroy?r.$$.on_destroy.push(...a):sn(a),r.$$.on_mount=[]}),s.forEach(da)}function rt(r,e){const t=r.$$;t.fragment!==null&&(ru(t.after_update),sn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function su(r,e){r.$$.dirty[0]===-1&&(Bi.push(r),ec(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function gt(r,e,t,n,i,s,a,o=[-1]){const l=wr;Mr(r);const c=r.$$={fragment:null,ctx:[],props:s,update:Et,not_equal:i,bound:Ba(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ba(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let h=!1;if(c.ctx=t?t(r,e.props||{},(d,f,...p)=>{const v=p.length?p[0]:f;return c.ctx&&i(c.ctx[d],c.ctx[d]=v)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](v),h&&su(r,d)),f}):[],c.update(),h=!0,sn(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=tu(e.target);c.fragment&&c.fragment.l(d),d.forEach(Ze)}else c.fragment&&c.fragment.c();e.intro&&ye(r.$$.fragment),it(r,e.target,e.anchor,e.customElement),tc()}Mr(l)}class _t{$destroy(){rt(this,1),this.$destroy=Et}$on(e,t){if(!ps(t))return Et;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Jc(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function vn(r,e){const t=n=>{const{action:i,data:s}=n.data;i===r&&e(s)};nr(()=>window.addEventListener("message",t)),ct(()=>window.removeEventListener("message",t))}const yi=[];function nc(r,e){return{subscribe:Ye(r,e).subscribe}}function Ye(r,e=Et){let t;const n=new Set;function i(o){if(pt(r,o)&&(r=o,t)){const l=!yi.length;for(const c of n)c[1](),yi.push(c,r);if(l){for(let c=0;c<yi.length;c+=2)yi[c][0](yi[c+1]);yi.length=0}}}function s(o){i(o(r))}function a(o,l=Et){const c=[o,l];return n.add(c),n.size===1&&(t=e(i)||Et),o(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function au(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return nc(t,a=>{let o=!1;const l=[];let c=0,h=Et;const d=()=>{if(c)return;h();const p=e(n?l[0]:l,a);s?a(p):h=ps(p)?p:Et},f=i.map((p,v)=>Ea(p,x=>{l[v]=x,c&=~(1<<v),o&&d()},()=>{c|=1<<v}));return o=!0,d(),function(){sn(f),h(),o=!1}})}const Sr=Ye(!1),vs=Ye(!1),pa=Ye(""),fs=Ye(null),Qn=Ye(null),hs=Ye(null),jt=Ye(!1),ds=Ye(!1),Bn=Ye([]);let ic=!1;vs.subscribe(r=>{ic=r});let rc="";pa.subscribe(r=>{rc=r});async function Rt(r,e={},t){if(ic==!0&&t)return Promise.resolve(t||{});const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},i=window.GetParentResourceName?window.GetParentResourceName():rc;return await(await fetch(`https://${i}/${r}`,n)).json()}function Gi(r){return{x:r.x,y:r.z,z:-r.y}}function os(r){return{x:r.x,y:-r.z,z:r.y}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="151",ou=0,Va=1,lu=2,sc=1,ac=2,mr=3,Jn=0,Kt=1,bn=2,Kn=0,Xi=1,Wa=2,ja=3,Xa=4,cu=5,Hi=100,uu=101,fu=102,qa=103,Ya=104,hu=200,du=201,pu=202,mu=203,oc=204,lc=205,gu=206,_u=207,vu=208,xu=209,Mu=210,Su=0,bu=1,yu=2,ma=3,wu=4,Eu=5,Tu=6,Au=7,cc=0,Cu=1,Pu=2,wn=0,Lu=1,Ru=2,Du=3,uc=4,Iu=5,fc=300,Qi=301,Ki=302,ga=303,_a=304,xs=306,va=1e3,pn=1001,xa=1002,Ht=1003,Za=1004,Ds=1005,on=1006,Uu=1007,Tr=1008,Mi=1009,Nu=1010,Ou=1011,hc=1012,Fu=1013,mi=1014,gi=1015,Ar=1016,zu=1017,ku=1018,qi=1020,Bu=1021,mn=1023,Gu=1024,Hu=1025,_i=1026,Ji=1027,Vu=1028,Wu=1029,ju=1030,Xu=1031,qu=1033,Is=33776,Us=33777,Ns=33778,Os=33779,Qa=35840,Ka=35841,Ja=35842,$a=35843,Yu=36196,eo=37492,to=37496,no=37808,io=37809,ro=37810,so=37811,ao=37812,oo=37813,lo=37814,co=37815,uo=37816,fo=37817,ho=37818,po=37819,mo=37820,go=37821,Fs=36492,Zu=36283,_o=36284,vo=36285,xo=36286,$n=3e3,nt=3001,Qu=3200,Ku=3201,dc=0,Ju=1,xn="srgb",Cr="srgb-linear",pc="display-p3",zs=7680,$u=519,Mo=35044,So="300 es",Ma=1035;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bo=1234567;const br=Math.PI/180,Pr=180/Math.PI;function rr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Wt(r,e,t){return Math.max(e,Math.min(t,r))}function Ca(r,e){return(r%e+e)%e}function ef(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tf(r,e,t){return r!==e?(t-r)/(e-r):0}function yr(r,e,t){return(1-t)*r+t*e}function nf(r,e,t,n){return yr(r,e,1-Math.exp(-t*n))}function rf(r,e=1){return e-Math.abs(Ca(r,e*2)-e)}function sf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function af(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function of(r,e){return r+Math.floor(Math.random()*(e-r+1))}function lf(r,e){return r+Math.random()*(e-r)}function cf(r){return r*(.5-Math.random())}function uf(r){r!==void 0&&(bo=r);let e=bo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ff(r){return r*br}function hf(r){return r*Pr}function Sa(r){return(r&r-1)===0&&r!==0}function df(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function mc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function pf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),v=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*v,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*v,o*c);break;case"ZYZ":r.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:br,RAD2DEG:Pr,generateUUID:rr,clamp:Wt,euclideanModulo:Ca,mapLinear:ef,inverseLerp:tf,lerp:yr,damp:nf,pingpong:rf,smoothstep:sf,smootherstep:af,randInt:of,randFloat:lf,randFloatSpread:cf,seededRandom:uf,degToRad:ff,radToDeg:hf,isPowerOfTwo:Sa,ceilPowerOfTwo:df,floorPowerOfTwo:mc,setQuaternionFromProperEuler:pf,normalize:Yt,denormalize:gr};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],v=n[8],x=i[0],m=i[3],u=i[6],_=i[1],M=i[4],g=i[7],y=i[2],E=i[5],L=i[8];return s[0]=a*x+o*_+l*y,s[3]=a*m+o*M+l*E,s[6]=a*u+o*g+l*L,s[1]=c*x+h*_+d*y,s[4]=c*m+h*M+d*E,s[7]=c*u+h*g+d*L,s[2]=f*x+p*_+v*y,s[5]=f*m+p*M+v*E,s[8]=f*u+p*g+v*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*s,p=c*s-a*l,v=t*d+n*f+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new Ge;function gc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const mf=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gf=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function _f(r){return r.convertSRGBToLinear().applyMatrix3(gf)}function vf(r){return r.applyMatrix3(mf).convertLinearToSRGB()}const xf={[Cr]:r=>r,[xn]:r=>r.convertSRGBToLinear(),[pc]:_f},Mf={[Cr]:r=>r,[xn]:r=>r.convertLinearToSRGB(),[pc]:vf},en={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Cr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=xf[e],i=Mf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let wi;class _c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Lr("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vc{constructor(e=null){this.isSource=!0,this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Gs(i[a].image)):s.push(Gs(i[a]))}else s=Gs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Gs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?_c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class Jt extends ir{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=pn,i=pn,s=on,a=Tr,o=mn,l=Mi,c=Jt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=rr(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=fc;Jt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,g=(p+1)/2,y=(u+1)/2,E=(h+f)/4,L=(d+x)/4,A=(v+m)/4;return M>g&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=L/n):g>y?g<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(g),n=E/i,s=A/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=L/s,i=A/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends ir{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:on,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xc extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bf extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=s[a+0],p=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(d!==x||l!==f||c!==p||h!==v){let m=1-o;const u=l*f+c*p+h*v+d*x,_=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const y=Math.sqrt(M),E=Math.atan2(y,u*_);m=Math.sin(m*E)/y,o=Math.sin(o*E)/y}const g=o*_;if(l=l*m+f*g,c=c*m+p*g,h=h*m+v*g,d=d*m+x*g,m===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+h*d+l*p-c*f,e[t+1]=l*v+h*f+c*d-o*p,e[t+2]=c*v+h*p+o*f-l*d,e[t+3]=h*v-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),f=l(n/2),p=l(i/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,h=l*n+o*t-s*i,d=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+h*-o-d*-a,this.y=h*l+f*-a+d*-s-c*-o,this.z=d*l+f*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new D,yo=new Vt;class Dr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ei.copy(e.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Nn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else i.boundingBox===null&&i.computeBoundingBox(),Ei.copy(i.boundingBox),Ei.applyMatrix4(e.matrixWorld),this.union(Ei)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Ur.subVectors(this.max,cr),Ti.subVectors(e.a,cr),Ai.subVectors(e.b,cr),Ci.subVectors(e.c,cr),Wn.subVectors(Ai,Ti),jn.subVectors(Ci,Ai),si.subVectors(Ti,Ci);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-si.y,si.x,0];return!Vs(t,Ti,Ai,Ci,Ur)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,Ti,Ai,Ci,Ur))?!1:(Nr.crossVectors(Wn,jn),t=[Nr.x,Nr.y,Nr.z],Vs(t,Ti,Ai,Ci,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],Nn=new D,Ei=new Dr,Ti=new D,Ai=new D,Ci=new D,Wn=new D,jn=new D,si=new D,cr=new D,Ur=new D,Nr=new D,ai=new D;function Vs(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ai.fromArray(r,s);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yf=new Dr,ur=new D,Ws=new D;class Ms{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ws)),this.expandByPoint(ur.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new D,js=new D,Or=new D,Xn=new D,Xs=new D,Fr=new D,qs=new D;class Pa{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){js.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(js);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Or),o=Xn.dot(this.direction),l=-Xn.dot(Or),c=Xn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,v;if(h>0)if(d=a*l-o,f=a*o-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(js).addScaledVector(Or,f),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,s){Xs.subVectors(t,e),Fr.subVectors(n,e),qs.crossVectors(Xs,Fr);let a=this.direction.dot(qs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Fr.crossVectors(Xn,Fr));if(l<0)return null;const c=o*this.direction.dot(Xs.cross(Xn));if(c<0||l+c>a)return null;const h=-o*Xn.dot(qs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,h,d,f,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*h,p=a*d,v=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+v*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,v=c*h,x=c*d;t[0]=f+x*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-v,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,v=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*d,v=o*h,x=o*d;t[0]=l*h,t[4]=v*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=v*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+v,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=p*d-v,t[2]=v*d-p,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wf,e,Ef)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),qn.crossVectors(n,tn),qn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),qn.crossVectors(n,tn)),qn.normalize(),zr.crossVectors(tn,qn),i[0]=qn.x,i[4]=zr.x,i[8]=tn.x,i[1]=qn.y,i[5]=zr.y,i[9]=tn.y,i[2]=qn.z,i[6]=zr.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],v=n[2],x=n[6],m=n[10],u=n[14],_=n[3],M=n[7],g=n[11],y=n[15],E=i[0],L=i[4],A=i[8],b=i[12],S=i[1],G=i[5],O=i[9],C=i[13],N=i[2],z=i[6],Z=i[10],R=i[14],W=i[3],$=i[7],ee=i[11],Me=i[15];return s[0]=a*E+o*S+l*N+c*W,s[4]=a*L+o*G+l*z+c*$,s[8]=a*A+o*O+l*Z+c*ee,s[12]=a*b+o*C+l*R+c*Me,s[1]=h*E+d*S+f*N+p*W,s[5]=h*L+d*G+f*z+p*$,s[9]=h*A+d*O+f*Z+p*ee,s[13]=h*b+d*C+f*R+p*Me,s[2]=v*E+x*S+m*N+u*W,s[6]=v*L+x*G+m*z+u*$,s[10]=v*A+x*O+m*Z+u*ee,s[14]=v*b+x*C+m*R+u*Me,s[3]=_*E+M*S+g*N+y*W,s[7]=_*L+M*G+g*z+y*$,s[11]=_*A+M*O+g*Z+y*ee,s[15]=_*b+M*C+g*R+y*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*d-i*c*d-s*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+s*a*f-i*a*p+i*c*h-s*l*h)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+u*(-i*o*h-t*l*d+t*o*f+i*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],_=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,M=v*f*c-h*m*c-v*l*p+a*m*p+h*l*u-a*f*u,g=h*x*c-v*d*c+v*o*p-a*x*p-h*o*u+a*d*u,y=v*d*l-h*x*l-v*o*f+a*x*f+h*o*m-a*d*m,E=t*_+n*M+i*g+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=_*L,e[1]=(x*f*s-d*m*s-x*i*p+n*m*p+d*i*u-n*f*u)*L,e[2]=(o*m*s-x*l*s+x*i*c-n*m*c-o*i*u+n*l*u)*L,e[3]=(d*l*s-o*f*s-d*i*c+n*f*c+o*i*p-n*l*p)*L,e[4]=M*L,e[5]=(h*m*s-v*f*s+v*i*p-t*m*p-h*i*u+t*f*u)*L,e[6]=(v*l*s-a*m*s-v*i*c+t*m*c+a*i*u-t*l*u)*L,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*p+t*l*p)*L,e[8]=g*L,e[9]=(v*d*s-h*x*s-v*n*p+t*x*p+h*n*u-t*d*u)*L,e[10]=(a*x*s-v*o*s+v*n*c-t*x*c-a*n*u+t*o*u)*L,e[11]=(h*o*s-a*d*s-h*n*c+t*d*c+a*n*p-t*o*p)*L,e[12]=y*L,e[13]=(h*x*i-v*d*i+v*n*f-t*x*f-h*n*m+t*d*m)*L,e[14]=(v*o*i-a*x*i-v*n*l+t*x*l+a*n*m-t*o*m)*L,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*f+t*o*f)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,f=s*c,p=s*h,v=s*d,x=a*h,m=a*d,u=o*d,_=l*c,M=l*h,g=l*d,y=n.x,E=n.y,L=n.z;return i[0]=(1-(x+u))*y,i[1]=(p+g)*y,i[2]=(v-M)*y,i[3]=0,i[4]=(p-g)*E,i[5]=(1-(f+u))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(v+M)*L,i[9]=(m-_)*L,i[10]=(1-(f+x))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);const c=1/s,h=1/a,d=1/o;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(a-s),d=(t+e)*l,f=(n+i)*c,p=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new D,cn=new mt,wf=new D(0,0,0),Ef=new D(1,1,1),qn=new D,zr=new D,tn=new D,wo=new mt,Eo=new Vt;class Si{constructor(e=0,t=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eo.setFromEuler(this),this.setFromQuaternion(Eo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class La{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tf=0;const To=new D,Li=new Vt,Fn=new mt,kr=new D,fr=new D,Af=new D,Cf=new Vt,Ao=new D(1,0,0),Co=new D(0,1,0),Po=new D(0,0,1),Pf={type:"added"},Lo={type:"removed"};class yt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new Si,n=new Vt,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new La,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Ao,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ao,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(fr,kr,this.up):Fn.lookAt(kr,fr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Fn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Lo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new D,zn=new D,Ys=new D,kn=new D,Ri=new D,Di=new D,Ro=new D,Zs=new D,Qs=new D,Ks=new D;let Br=!1;class hn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),zn.subVectors(n,t),Ys.subVectors(e,t);const a=un.dot(un),o=un.dot(zn),l=un.dot(Ys),c=zn.dot(zn),h=zn.dot(Ys),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,n,i,s,a,o,l){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,kn),l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),zn.subVectors(e,t),un.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),un.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ri.subVectors(i,n),Di.subVectors(s,n),Zs.subVectors(e,n);const l=Ri.dot(Zs),c=Di.dot(Zs);if(l<=0&&c<=0)return t.copy(n);Qs.subVectors(e,i);const h=Ri.dot(Qs),d=Di.dot(Qs);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ri,a);Ks.subVectors(e,s);const p=Ri.dot(Ks),v=Di.dot(Ks);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Di,o);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Ro.subVectors(s,i),o=(d-h)/(d-h+(p-v)),t.copy(i).addScaledVector(Ro,o);const u=1/(m+x+f);return a=x*u,o=f*u,t.copy(n).addScaledVector(Ri,a).addScaledVector(Di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lf=0;class sr extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Xi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Js(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=en.workingColorSpace){if(e=Ca(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Js(a,s,e+1/3),this.g=Js(a,s,e),this.b=Js(a,s,e-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,en.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,en.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return en.fromWorkingColorSpace(Ot.copy(this),e),Wt(Ot.r*255,0,255)<<16^Wt(Ot.g*255,0,255)<<8^Wt(Ot.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=xn){en.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(fn),fn.h+=e,fn.s+=t,fn.l+=n,this.setHSL(fn.h,fn.s,fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Gr);const n=yr(fn.h,Gr.h,t),i=yr(fn.s,Gr.s,t),s=yr(fn.l,Gr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=Mc;class Ss extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,Hr=new qe;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Sc extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bc extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rf=0;const an=new mt,$s=new yt,Ii=new D,nn=new Dr,hr=new Dr,Lt=new D;class Xt extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?bc:Sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return $s.lookAt(e),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];hr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,hr.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,hr.max),nn.expandByPoint(Lt)):(nn.expandByPoint(hr.min),nn.expandByPoint(hr.max))}nn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(Ii.fromBufferAttribute(e,c),Lt.add(Ii)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new D,h[S]=new D;const d=new D,f=new D,p=new D,v=new qe,x=new qe,m=new qe,u=new D,_=new D;function M(S,G,O){d.fromArray(i,S*3),f.fromArray(i,G*3),p.fromArray(i,O*3),v.fromArray(a,S*2),x.fromArray(a,G*2),m.fromArray(a,O*2),f.sub(d),p.sub(d),x.sub(v),m.sub(v);const C=1/(x.x*m.y-m.x*x.y);!isFinite(C)||(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(C),_.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(C),c[S].add(u),c[G].add(u),c[O].add(u),h[S].add(_),h[G].add(_),h[O].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:n.length}]);for(let S=0,G=g.length;S<G;++S){const O=g[S],C=O.start,N=O.count;for(let z=C,Z=C+N;z<Z;z+=3)M(n[z+0],n[z+1],n[z+2])}const y=new D,E=new D,L=new D,A=new D;function b(S){L.fromArray(s,S*3),A.copy(L);const G=c[S];y.copy(G),y.sub(L.multiplyScalar(L.dot(G))).normalize(),E.crossVectors(A,G);const C=E.dot(h[S])<0?-1:1;l[S*4]=y.x,l[S*4+1]=y.y,l[S*4+2]=y.z,l[S*4+3]=C}for(let S=0,G=g.length;S<G;++S){const O=g[S],C=O.start,N=O.count;for(let z=C,Z=C+N;z<Z;z+=3)b(n[z+0]),b(n[z+1]),b(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new En(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new mt,gn=new Pa,Vr=new Ms,Io=new D,Ui=new D,Ni=new D,Oi=new D,ea=new D,Wr=new D,jr=new qe,Xr=new qe,qr=new qe,Uo=new D,No=new D,Oo=new D,Yr=new D,Zr=new D;class de extends yt{constructor(e=new Xt,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(ea.fromBufferAttribute(d,e),a?Wr.addScaledVector(ea,h):Wr.addScaledVector(ea.sub(t),h))}t.add(Wr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),gn.copy(e.ray).recast(e.near),Vr.containsPoint(gn.origin)===!1&&(gn.intersectSphere(Vr,Io)===null||gn.origin.distanceToSquared(Io)>(e.far-e.near)**2))||(Do.copy(s).invert(),gn.copy(e.ray).applyMatrix4(Do),n.boundingBox!==null&&gn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,f=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=i[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=_,y=M;g<y;g+=3){const E=o.getX(g),L=o.getX(g+1),A=o.getX(g+2);a=Qr(this,u,e,gn,c,h,d,E,L,A),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=o.getX(m),M=o.getX(m+1),g=o.getX(m+2);a=Qr(this,i,e,gn,c,h,d,_,M,g),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let v=0,x=f.length;v<x;v++){const m=f[v],u=i[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=_,y=M;g<y;g+=3){const E=g,L=g+1,A=g+2;a=Qr(this,u,e,gn,c,h,d,E,L,A),a&&(a.faceIndex=Math.floor(g/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,M=m+1,g=m+2;a=Qr(this,i,e,gn,c,h,d,_,M,g),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Df(r,e,t,n,i,s,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Jn,o),l===null)return null;Zr.copy(o),Zr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:r}}function Qr(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ui),r.getVertexPosition(l,Ni),r.getVertexPosition(c,Oi);const h=Df(r,e,t,n,Ui,Ni,Oi,Yr);if(h){i&&(jr.fromBufferAttribute(i,o),Xr.fromBufferAttribute(i,l),qr.fromBufferAttribute(i,c),h.uv=hn.getInterpolation(Yr,Ui,Ni,Oi,jr,Xr,qr,new qe)),s&&(jr.fromBufferAttribute(s,o),Xr.fromBufferAttribute(s,l),qr.fromBufferAttribute(s,c),h.uv2=hn.getInterpolation(Yr,Ui,Ni,Oi,jr,Xr,qr,new qe)),a&&(Uo.fromBufferAttribute(a,o),No.fromBufferAttribute(a,l),Oo.fromBufferAttribute(a,c),h.normal=hn.getInterpolation(Yr,Ui,Ni,Oi,Uo,No,Oo,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Ui,Ni,Oi,d.normal),h.face=d}return h}class Mt extends Xt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,i,a,2),v("x","z","y",1,-1,e,n,-t,i,a,3),v("x","y","z",1,-1,e,t,n,i,s,4),v("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2));function v(x,m,u,_,M,g,y,E,L,A,b){const S=g/L,G=y/A,O=g/2,C=y/2,N=E/2,z=L+1,Z=A+1;let R=0,W=0;const $=new D;for(let ee=0;ee<Z;ee++){const Me=ee*G-C;for(let se=0;se<z;se++){const V=se*S-O;$[x]=V*_,$[m]=Me*M,$[u]=N,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[u]=E>0?1:-1,h.push($.x,$.y,$.z),d.push(se/L),d.push(1-ee/A),R+=1}}for(let ee=0;ee<A;ee++)for(let Me=0;Me<L;Me++){const se=f+Me+z*ee,V=f+Me+z*(ee+1),Q=f+(Me+1)+z*(ee+1),K=f+(Me+1)+z*ee;l.push(se,V,K),l.push(V,Q,K),W+=6}o.addGroup(p,W,b),p+=W,f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=$i(r[t]);for(const i in n)e[i]=n[i]}return e}function If(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yc(r){return r.getRenderTarget()===null&&r.outputEncoding===nt?xn:Cr}const wc={clone:$i,merge:Gt};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=If(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ec extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends Ec{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,zi=1;class Of extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new rn(Fi,zi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new rn(Fi,zi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new rn(Fi,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new rn(Fi,zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new rn(Fi,zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new rn(Fi,zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Tc extends Jt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ff extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mt(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Kn});s.uniforms.tEquirect.value=t;const a=new de(i,s),o=t.minFilter;return t.minFilter===Tr&&(t.minFilter=on),new Of(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ta=new D,zf=new D,kf=new Ge;class ci{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ta.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kf.getNormalMatrix(e),i=this.coplanarPoint(ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ms,Kr=new D;class Ra{constructor(e=new ci,t=new ci,n=new ci,i=new ci,s=new ci,a=new ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],f=n[8],p=n[9],v=n[10],x=n[11],m=n[12],u=n[13],_=n[14],M=n[15];return t[0].setComponents(o-i,d-l,x-f,M-m).normalize(),t[1].setComponents(o+i,d+l,x+f,M+m).normalize(),t[2].setComponents(o+s,d+c,x+p,M+u).normalize(),t[3].setComponents(o-s,d-c,x-p,M-u).normalize(),t[4].setComponents(o-a,d-h,x-v,M-_).normalize(),t[5].setComponents(o+a,d+h,x+v,M+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(d instanceof Int16Array)v=5122;else if(d instanceof Uint32Array)v=5125;else if(d instanceof Int32Array)v=5124;else if(d instanceof Int8Array)v=5120;else if(d instanceof Uint8Array)v=5121;else if(d instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,p=h.updateRange;r.bindBuffer(d,c),p.count===-1?r.bufferSubData(d,0,f):(t?r.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:o,update:l}}class bs extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,p=[],v=[],x=[],m=[];for(let u=0;u<h;u++){const _=u*f-a;for(let M=0;M<c;M++){const g=M*d-s;v.push(g,-_,0),x.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const M=_+c*u,g=_+c*(u+1),y=_+1+c*(u+1),E=_+1+c*u;p.push(M,g,E),p.push(g,y,E)}this.setIndex(p),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qf="vec3 transformed = vec3( position );",Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,Kf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ah=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ph=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wh=`#ifdef USE_GRADIENTMAP
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
}`,Eh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#endif`,Lh=`#if defined( USE_ENVMAP )
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
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nh=`PhysicalMaterial material;
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
#endif`,Oh=`struct PhysicalMaterial {
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
}`,Fh=`
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
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
#endif`,Jh=`#ifdef USE_MORPHTARGETS
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
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,ad=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
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
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Td=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_UV
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
#endif`,Id=`#ifdef USE_UV
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
#endif`,Ud=`#ifdef USE_UV
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
#endif`,Nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`#include <common>
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
}`,Vd=`#if DEPTH_PACKING == 3200
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
}`,Wd=`#define DISTANCE
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
}`,jd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`uniform float scale;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,Kd=`uniform vec3 diffuse;
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
}`,Jd=`#define LAMBERT
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
}`,$d=`#define LAMBERT
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
}`,ep=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,np=`#define NORMAL
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
}`,ip=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,lp=`#define TOON
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
}`,cp=`#define TOON
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
}`,up=`uniform float size;
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
}`,fp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,dp=`uniform vec3 color;
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
}`,pp=`uniform float rotation;
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
}`,mp=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Gf,alphamap_pars_fragment:Hf,alphatest_fragment:Vf,alphatest_pars_fragment:Wf,aomap_fragment:jf,aomap_pars_fragment:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:Zf,iridescence_fragment:Qf,bumpmap_pars_fragment:Kf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:eh,clipping_planes_vertex:th,color_fragment:nh,color_pars_fragment:ih,color_pars_vertex:rh,color_vertex:sh,common:ah,cube_uv_reflection_fragment:oh,defaultnormal_vertex:lh,displacementmap_pars_vertex:ch,displacementmap_vertex:uh,emissivemap_fragment:fh,emissivemap_pars_fragment:hh,encodings_fragment:dh,encodings_pars_fragment:ph,envmap_fragment:mh,envmap_common_pars_fragment:gh,envmap_pars_fragment:_h,envmap_pars_vertex:vh,envmap_physical_pars_fragment:Lh,envmap_vertex:xh,fog_vertex:Mh,fog_pars_vertex:Sh,fog_fragment:bh,fog_pars_fragment:yh,gradientmap_pars_fragment:wh,lightmap_fragment:Eh,lightmap_pars_fragment:Th,lights_lambert_fragment:Ah,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Rh,lights_toon_pars_fragment:Dh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Uh,lights_physical_fragment:Nh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Fh,lights_fragment_maps:zh,lights_fragment_end:kh,logdepthbuf_fragment:Bh,logdepthbuf_pars_fragment:Gh,logdepthbuf_pars_vertex:Hh,logdepthbuf_vertex:Vh,map_fragment:Wh,map_pars_fragment:jh,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:Zh,morphcolor_vertex:Qh,morphnormal_vertex:Kh,morphtarget_pars_vertex:Jh,morphtarget_vertex:$h,normal_fragment_begin:ed,normal_fragment_maps:td,normal_pars_fragment:nd,normal_pars_vertex:id,normal_vertex:rd,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:ad,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ld,iridescence_pars_fragment:cd,output_fragment:ud,packing:fd,premultiplied_alpha_fragment:hd,project_vertex:dd,dithering_fragment:pd,dithering_pars_fragment:md,roughnessmap_fragment:gd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:vd,shadowmap_pars_vertex:xd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:bd,skinning_pars_vertex:yd,skinning_vertex:wd,skinnormal_vertex:Ed,specularmap_fragment:Td,specularmap_pars_fragment:Ad,tonemapping_fragment:Cd,tonemapping_pars_fragment:Pd,transmission_fragment:Ld,transmission_pars_fragment:Rd,uv_pars_fragment:Dd,uv_pars_vertex:Id,uv_vertex:Ud,worldpos_vertex:Nd,background_vert:Od,background_frag:Fd,backgroundCube_vert:zd,backgroundCube_frag:kd,cube_vert:Bd,cube_frag:Gd,depth_vert:Hd,depth_frag:Vd,distanceRGBA_vert:Wd,distanceRGBA_frag:jd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:Zd,meshbasic_vert:Qd,meshbasic_frag:Kd,meshlambert_vert:Jd,meshlambert_frag:$d,meshmatcap_vert:ep,meshmatcap_frag:tp,meshnormal_vert:np,meshnormal_frag:ip,meshphong_vert:rp,meshphong_frag:sp,meshphysical_vert:ap,meshphysical_frag:op,meshtoon_vert:lp,meshtoon_frag:cp,points_vert:up,points_frag:fp,shadow_vert:hp,shadow_frag:dp,sprite_vert:pp,sprite_frag:mp},le={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},Sn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Sn.physical={uniforms:Gt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Jr={r:0,b:0,g:0};function gp(r,e,t,n,i,s,a){const o=new Je(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function v(m,u){let _=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M));const g=r.xr,y=g.getSession&&g.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?x(o,l):M&&M.isColor&&(x(M,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===xs)?(h===void 0&&(h=new de(new Mt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:$i(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=M.encoding!==nt,(d!==M||f!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new de(new bs(2,2),new Vn({name:"BackgroundMaterial",uniforms:$i(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=M.encoding!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(Jr,yc(r)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(o,l)},render:v}}function _p(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,h=!1;function d(N,z,Z,R,W){let $=!1;if(a){const ee=x(R,Z,z);c!==ee&&(c=ee,p(c.object)),$=u(N,R,Z,W),$&&_(N,R,Z,W)}else{const ee=z.wireframe===!0;(c.geometry!==R.id||c.program!==Z.id||c.wireframe!==ee)&&(c.geometry=R.id,c.program=Z.id,c.wireframe=ee,$=!0)}W!==null&&t.update(W,34963),($||h)&&(h=!1,A(N,z,Z,R),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?r.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?r.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,z,Z){const R=Z.wireframe===!0;let W=o[N.id];W===void 0&&(W={},o[N.id]=W);let $=W[z.id];$===void 0&&($={},W[z.id]=$);let ee=$[R];return ee===void 0&&(ee=m(f()),$[R]=ee),ee}function m(N){const z=[],Z=[],R=[];for(let W=0;W<i;W++)z[W]=0,Z[W]=0,R[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:R,object:N,attributes:{},index:null}}function u(N,z,Z,R){const W=c.attributes,$=z.attributes;let ee=0;const Me=Z.getAttributes();for(const se in Me)if(Me[se].location>=0){const Q=W[se];let K=$[se];if(K===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),Q===void 0||Q.attribute!==K||K&&Q.data!==K.data)return!0;ee++}return c.attributesNum!==ee||c.index!==R}function _(N,z,Z,R){const W={},$=z.attributes;let ee=0;const Me=Z.getAttributes();for(const se in Me)if(Me[se].location>=0){let Q=$[se];Q===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));const K={};K.attribute=Q,Q&&Q.data&&(K.data=Q.data),W[se]=K,ee++}c.attributes=W,c.attributesNum=ee,c.index=R}function M(){const N=c.newAttributes;for(let z=0,Z=N.length;z<Z;z++)N[z]=0}function g(N){y(N,0)}function y(N,z){const Z=c.newAttributes,R=c.enabledAttributes,W=c.attributeDivisors;Z[N]=1,R[N]===0&&(r.enableVertexAttribArray(N),R[N]=1),W[N]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),W[N]=z)}function E(){const N=c.newAttributes,z=c.enabledAttributes;for(let Z=0,R=z.length;Z<R;Z++)z[Z]!==N[Z]&&(r.disableVertexAttribArray(Z),z[Z]=0)}function L(N,z,Z,R,W,$){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(N,z,Z,W,$):r.vertexAttribPointer(N,z,Z,R,W,$)}function A(N,z,Z,R){if(n.isWebGL2===!1&&(N.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=R.attributes,$=Z.getAttributes(),ee=z.defaultAttributeValues;for(const Me in $){const se=$[Me];if(se.location>=0){let V=W[Me];if(V===void 0&&(Me==="instanceMatrix"&&N.instanceMatrix&&(V=N.instanceMatrix),Me==="instanceColor"&&N.instanceColor&&(V=N.instanceColor)),V!==void 0){const Q=V.normalized,K=V.itemSize,ce=t.get(V);if(ce===void 0)continue;const U=ce.buffer,Pe=ce.type,Te=ce.bytesPerElement;if(V.isInterleavedBufferAttribute){const ae=V.data,we=ae.stride,Ve=V.offset;if(ae.isInstancedInterleavedBuffer){for(let Se=0;Se<se.locationSize;Se++)y(se.location+Se,ae.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<se.locationSize;Se++)g(se.location+Se);r.bindBuffer(34962,U);for(let Se=0;Se<se.locationSize;Se++)L(se.location+Se,K/se.locationSize,Pe,Q,we*Te,(Ve+K/se.locationSize*Se)*Te)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)y(se.location+ae,V.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<se.locationSize;ae++)g(se.location+ae);r.bindBuffer(34962,U);for(let ae=0;ae<se.locationSize;ae++)L(se.location+ae,K/se.locationSize,Pe,Q,K*Te,K/se.locationSize*ae*Te)}}else if(ee!==void 0){const Q=ee[Me];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(se.location,Q);break;case 3:r.vertexAttrib3fv(se.location,Q);break;case 4:r.vertexAttrib4fv(se.location,Q);break;default:r.vertexAttrib1fv(se.location,Q)}}}}E()}function b(){O();for(const N in o){const z=o[N];for(const Z in z){const R=z[Z];for(const W in R)v(R[W].object),delete R[W];delete z[Z]}delete o[N]}}function S(N){if(o[N.id]===void 0)return;const z=o[N.id];for(const Z in z){const R=z[Z];for(const W in R)v(R[W].object),delete R[W];delete z[Z]}delete o[N.id]}function G(N){for(const z in o){const Z=o[z];if(Z[N.id]===void 0)continue;const R=Z[N.id];for(const W in R)v(R[W].object),delete R[W];delete Z[N.id]}}function O(){C(),h=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:G,initAttributes:M,enableAttribute:g,disableUnusedAttributes:E}}function vp(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,h,d),t.update(h,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function xp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),f=r.getParameter(35660),p=r.getParameter(3379),v=r.getParameter(34076),x=r.getParameter(34921),m=r.getParameter(36347),u=r.getParameter(36348),_=r.getParameter(36349),M=f>0,g=a||e.has("OES_texture_float"),y=M&&g,E=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:g,floatVertexTextures:y,maxSamples:E}}function Mp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ci,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=r.get(d);if(!i||v===null||v.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,M=_*4;let g=u.clippingState||null;l.value=g,g=h(v,f,M,p);for(let y=0;y!==M;++y)g[y]=t[y];u.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,g=p;M!==x;++M,g+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Sp(r){let e=new WeakMap;function t(a,o){return o===ga?a.mapping=Qi:o===_a&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ga||o===_a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ff(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cc extends Ec{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vi=4,Fo=[.125,.215,.35,.446,.526,.582],hi=20,na=new Cc,zo=new Je;let ia=null;const ui=(1+Math.sqrt(5))/2,ki=1/ui,ko=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ui,ki),new D(0,ui,-ki),new D(ki,0,ui),new D(-ki,0,ui),new D(ui,ki,0),new D(-ui,ki,0)];class Bo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ia=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ho(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Ar,format:mn,encoding:$n,depthBuffer:!1},i=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(s)),this._blurMaterial=yp(s,e,t)}return i}_compileMaterial(e){const t=new de(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,i){const o=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(zo),h.toneMapping=wn,h.autoClear=!1;const p=new Ss({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new de(new Mt,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(zo),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):_===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const M=this._cubeSize;$r(i,_*M,u>2?M:0,M,M),h.setRenderTarget(i),x&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qi||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ho());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ko[(i-1)%ko.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new de(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),x=s/v,m=isFinite(s)?1+Math.floor(h*x):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const u=[];let _=0;for(let L=0;L<hi;++L){const A=L/x,b=Math.exp(-A*A/2);u.push(b),L===0?_+=b:L<m&&(_+=2*b)}for(let L=0;L<u.length;L++)u[L]=u[L]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const g=this._sizeLods[i],y=3*g*(i>M-Vi?i-M+Vi:0),E=4*(this._cubeSize-g);$r(t,y,E,3*g,2*g),l.setRenderTarget(t),l.render(d,na)}}function bp(r){const e=[],t=[],n=[];let i=r;const s=r-Vi+1+Fo.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Vi?l=Fo[a-r+Vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),M=new Float32Array(m*v*p),g=new Float32Array(u*v*p);for(let E=0;E<p;E++){const L=E%3*2/3-1,A=E>2?0:-1,b=[L,A,0,L+2/3,A,0,L+2/3,A+1,0,L,A,0,L+2/3,A+1,0,L,A+1,0];_.set(b,x*v*E),M.set(f,m*v*E);const S=[E,E,E,E,E,E];g.set(S,u*v*E)}const y=new Xt;y.setAttribute("position",new En(_,x)),y.setAttribute("uv",new En(M,m)),y.setAttribute("faceIndex",new En(g,u)),e.push(y),i>Vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Go(r,e,t){const n=new ei(r,e,t);return n.texture.mapping=xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yp(r,e,t){const n=new Float32Array(hi),i=new D(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ho(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Da(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Vo(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Da(){return`

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
	`}function wp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ga||l===_a,h=l===Qi||l===Ki;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Bo(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Bo(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ep(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tp(r,e,t,n){const i={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],34962);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],34962)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let M=0,g=_.length;M<g;M+=3){const y=_[M+0],E=_[M+1],L=_[M+2];f.push(y,E,E,L,L,y)}}else{const _=v.array;x=v.version;for(let M=0,g=_.length/3-1;M<g;M+=3){const y=M+0,E=M+1,L=M+2;f.push(y,E,E,L,L,y)}}const m=new(gc(f)?bc:Sc)(f,1);m.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ap(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,p){r.drawElements(s,p,o,f*l),t.update(p,s,1)}function d(f,p,v){if(v===0)return;let x,m;if(i)x=r,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](s,p,o,f*l,v),t.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function Cp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pp(r,e){return r[0]-e[0]}function Lp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Rp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(h);if(m===void 0||m.count!==x){let z=function(){C.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,g=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let b=0;M===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let S=h.attributes.position.count*b,G=1;S>e.maxTextureSize&&(G=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*G*4*x),C=new xc(O,S,G,x);C.type=gi,C.needsUpdate=!0;const N=b*4;for(let Z=0;Z<x;Z++){const R=E[Z],W=L[Z],$=A[Z],ee=S*G*4*Z;for(let Me=0;Me<R.count;Me++){const se=Me*N;M===!0&&(a.fromBufferAttribute(R,Me),O[ee+se+0]=a.x,O[ee+se+1]=a.y,O[ee+se+2]=a.z,O[ee+se+3]=0),g===!0&&(a.fromBufferAttribute(W,Me),O[ee+se+4]=a.x,O[ee+se+5]=a.y,O[ee+se+6]=a.z,O[ee+se+7]=0),y===!0&&(a.fromBufferAttribute($,Me),O[ee+se+8]=a.x,O[ee+se+9]=a.y,O[ee+se+10]=a.z,O[ee+se+11]=$.itemSize===4?a.w:1)}}m={count:x,texture:C,size:new qe(S,G)},s.set(h,m),h.addEventListener("dispose",z)}let u=0;for(let M=0;M<f.length;M++)u+=f[M];const _=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let x=n[h.id];if(x===void 0||x.length!==v){x=[];for(let g=0;g<v;g++)x[g]=[g,0];n[h.id]=x}for(let g=0;g<v;g++){const y=x[g];y[0]=g,y[1]=f[g]}x.sort(Lp);for(let g=0;g<8;g++)g<v&&x[g][1]?(o[g][0]=x[g][0],o[g][1]=x[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Pp);const m=h.morphAttributes.position,u=h.morphAttributes.normal;let _=0;for(let g=0;g<8;g++){const y=o[g],E=y[0],L=y[1];E!==Number.MAX_SAFE_INTEGER&&L?(m&&h.getAttribute("morphTarget"+g)!==m[E]&&h.setAttribute("morphTarget"+g,m[E]),u&&h.getAttribute("morphNormal"+g)!==u[E]&&h.setAttribute("morphNormal"+g,u[E]),i[g]=L,_+=L):(m&&h.hasAttribute("morphTarget"+g)===!0&&h.deleteAttribute("morphTarget"+g),u&&h.hasAttribute("morphNormal"+g)===!0&&h.deleteAttribute("morphNormal"+g),i[g]=0)}const M=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Pc=new Jt,Lc=new xc,Rc=new bf,Dc=new Tc,Wo=[],jo=[],Xo=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function ar(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wo[i];if(s===void 0&&(s=new Float32Array(i),Wo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ys(r,e){let t=jo[e];t===void 0&&(t=new Int32Array(e),jo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ip(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function Np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Op(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function Fp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Yo.set(n),r.uniformMatrix2fv(this.addr,!1,Yo),At(t,n)}}function zp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;qo.set(n),r.uniformMatrix3fv(this.addr,!1,qo),At(t,n)}}function kp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Xo.set(n),r.uniformMatrix4fv(this.addr,!1,Xo),At(t,n)}}function Bp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function Wp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function Xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function Yp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Pc,i)}function Zp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rc,i)}function Qp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dc,i)}function Kp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lc,i)}function Jp(r){switch(r){case 5126:return Ip;case 35664:return Up;case 35665:return Np;case 35666:return Op;case 35674:return Fp;case 35675:return zp;case 35676:return kp;case 5124:case 35670:return Bp;case 35667:case 35671:return Gp;case 35668:case 35672:return Hp;case 35669:case 35673:return Vp;case 5125:return Wp;case 36294:return jp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Zp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return Kp}}function $p(r,e){r.uniform1fv(this.addr,e)}function em(r,e){const t=ar(e,this.size,2);r.uniform2fv(this.addr,t)}function tm(r,e){const t=ar(e,this.size,3);r.uniform3fv(this.addr,t)}function nm(r,e){const t=ar(e,this.size,4);r.uniform4fv(this.addr,t)}function im(r,e){const t=ar(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rm(r,e){const t=ar(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function sm(r,e){const t=ar(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function am(r,e){r.uniform1iv(this.addr,e)}function om(r,e){r.uniform2iv(this.addr,e)}function lm(r,e){r.uniform3iv(this.addr,e)}function cm(r,e){r.uniform4iv(this.addr,e)}function um(r,e){r.uniform1uiv(this.addr,e)}function fm(r,e){r.uniform2uiv(this.addr,e)}function hm(r,e){r.uniform3uiv(this.addr,e)}function dm(r,e){r.uniform4uiv(this.addr,e)}function pm(r,e,t){const n=this.cache,i=e.length,s=ys(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Pc,s[a])}function mm(r,e,t){const n=this.cache,i=e.length,s=ys(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rc,s[a])}function gm(r,e,t){const n=this.cache,i=e.length,s=ys(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Dc,s[a])}function _m(r,e,t){const n=this.cache,i=e.length,s=ys(t,i);Tt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Lc,s[a])}function vm(r){switch(r){case 5126:return $p;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return fm;case 36295:return hm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}class xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Jp(t.type)}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=vm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Zo(r,e){r.seq.push(e),r.map[e.id]=e}function bm(r,e,t){const n=r.name,i=n.length;for(ra.lastIndex=0;;){const s=ra.exec(n),a=ra.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zo(t,c===void 0?new xm(o,r,e):new Mm(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Sm(o),Zo(t,d)),t=d}}}class ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);bm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Qo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ym=0;function wm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Em(r){switch(r){case $n:return["Linear","( value )"];case nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ko(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+wm(r.getShaderSource(e),a)}else return i}function Tm(r,e){const t=Em(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Am(r,e){let t;switch(e){case Lu:t="Linear";break;case Ru:t="Reinhard";break;case Du:t="OptimizedCineon";break;case uc:t="ACESFilmic";break;case Iu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cm(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Pm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function _r(r){return r!==""}function Jo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(r){return r.replace(Rm,Dm)}function Dm(r,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ba(t)}const Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function el(r){return r.replace(Im,Um)}function Um(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function tl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function Om(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case Ki:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function zm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Cu:e="ENVMAP_BLENDING_MIX";break;case Pu:e="ENVMAP_BLENDING_ADD";break}return e}function km(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Nm(t),c=Om(t),h=Fm(t),d=zm(t),f=km(t),p=t.isWebGL2?"":Cm(t),v=Pm(s),x=i.createProgram();let m,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(_r).join(`
`),m.length>0&&(m+=`
`),u=[p,v].filter(_r).join(`
`),u.length>0&&(u+=`
`)):(m=[tl(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),u=[p,tl(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Tm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=ba(a),a=Jo(a,t),a=$o(a,t),o=ba(o),o=Jo(o,t),o=$o(o,t),a=el(a),o=el(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const M=_+m+a,g=_+u+o,y=Qo(i,35633,M),E=Qo(i,35632,g);if(i.attachShader(x,y),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),r.debug.checkShaderErrors){const b=i.getProgramInfoLog(x).trim(),S=i.getShaderInfoLog(y).trim(),G=i.getShaderInfoLog(E).trim();let O=!0,C=!0;if(i.getProgramParameter(x,35714)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,y,E);else{const N=Ko(i,y,"vertex"),z=Ko(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,35715)+`

Program Info Log: `+b+`
`+N+`
`+z)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(S===""||G==="")&&(C=!1);C&&(this.diagnostics={runnable:O,programLog:b,vertexShader:{log:S,prefix:m},fragmentShader:{log:G,prefix:u}})}i.deleteShader(y),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new ls(i,x)),L};let A;return this.getAttributes=function(){return A===void 0&&(A=Lm(i,x)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=ym++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=E,this}let Gm=0;class Hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vm(e),t.set(e,n)),n}}class Vm{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}}function Wm(r,e,t,n,i,s,a){const o=new La,l=new Hm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===1?"uv2":"uv"}function m(b,S,G,O,C){const N=O.fog,z=C.geometry,Z=b.isMeshStandardMaterial?O.environment:null,R=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),W=!!R&&R.mapping===xs?R.image.height:null,$=v[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=ee!==void 0?ee.length:0;let se=0;z.morphAttributes.position!==void 0&&(se=1),z.morphAttributes.normal!==void 0&&(se=2),z.morphAttributes.color!==void 0&&(se=3);let V,Q,K,ce;if($){const fe=Sn[$];V=fe.vertexShader,Q=fe.fragmentShader}else V=b.vertexShader,Q=b.fragmentShader,l.update(b),K=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const U=r.getRenderTarget(),Pe=C.isInstancedMesh===!0,Te=!!b.map,ae=!!b.matcap,we=!!R,Ve=!!b.aoMap,Se=!!b.lightMap,De=!!b.bumpMap,st=!!b.normalMap,vt=!!b.displacementMap,xt=!!b.emissiveMap,dt=!!b.metalnessMap,We=!!b.roughnessMap,tt=b.clearcoat>0,Dt=b.iridescence>0,P=b.sheen>0,w=b.transmission>0,X=tt&&!!b.clearcoatMap,te=tt&&!!b.clearcoatNormalMap,re=tt&&!!b.clearcoatRoughnessMap,ue=Dt&&!!b.iridescenceMap,Ae=Dt&&!!b.iridescenceThicknessMap,he=P&&!!b.sheenColorMap,Y=P&&!!b.sheenRoughnessMap,_e=!!b.specularMap,be=!!b.specularColorMap,Ee=!!b.specularIntensityMap,me=w&&!!b.transmissionMap,ve=w&&!!b.thicknessMap,Ie=!!b.gradientMap,Xe=!!b.alphaMap,at=b.alphaTest>0,I=!!b.extensions,H=!!z.attributes.uv2;return{isWebGL2:h,shaderID:$,shaderName:b.type,vertexShader:V,fragmentShader:Q,defines:b.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&C.instanceColor!==null,supportsVertexTextures:f,outputEncoding:U===null?r.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:$n,map:Te,matcap:ae,envMap:we,envMapMode:we&&R.mapping,envMapCubeUVHeight:W,aoMap:Ve,lightMap:Se,bumpMap:De,normalMap:st,displacementMap:f&&vt,emissiveMap:xt,normalMapObjectSpace:st&&b.normalMapType===Ju,normalMapTangentSpace:st&&b.normalMapType===dc,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&b.map.encoding===nt,metalnessMap:dt,roughnessMap:We,clearcoat:tt,clearcoatMap:X,clearcoatNormalMap:te,clearcoatRoughnessMap:re,iridescence:Dt,iridescenceMap:ue,iridescenceThicknessMap:Ae,sheen:P,sheenColorMap:he,sheenRoughnessMap:Y,specularMap:_e,specularColorMap:be,specularIntensityMap:Ee,transmission:w,transmissionMap:me,thicknessMap:ve,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===Xi,alphaMap:Xe,alphaTest:at,combine:b.combine,mapUv:Te&&x(b.map.channel),aoMapUv:Ve&&x(b.aoMap.channel),lightMapUv:Se&&x(b.lightMap.channel),bumpMapUv:De&&x(b.bumpMap.channel),normalMapUv:st&&x(b.normalMap.channel),displacementMapUv:vt&&x(b.displacementMap.channel),emissiveMapUv:xt&&x(b.emissiveMap.channel),metalnessMapUv:dt&&x(b.metalnessMap.channel),roughnessMapUv:We&&x(b.roughnessMap.channel),clearcoatMapUv:X&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Y&&x(b.sheenRoughnessMap.channel),specularMapUv:_e&&x(b.specularMap.channel),specularColorMapUv:be&&x(b.specularColorMap.channel),specularIntensityMapUv:Ee&&x(b.specularIntensityMap.channel),transmissionMapUv:me&&x(b.transmissionMap.channel),thicknessMapUv:ve&&x(b.thicknessMap.channel),alphaMapUv:Xe&&x(b.alphaMap.channel),vertexTangents:st&&!!z.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:H,pointsUvs:C.isPoints===!0&&!!z.attributes.uv&&(Te||Xe),fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:wn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:I&&b.extensions.derivatives===!0,extensionFragDepth:I&&b.extensions.fragDepth===!0,extensionDrawBuffers:I&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function u(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)S.push(G),S.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(_(S,b),M(S,b),S.push(r.outputEncoding)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputEncoding),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function M(b,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUvs2&&o.enable(13),S.vertexTangents&&o.enable(14),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.decodeVideoTexture&&o.enable(17),S.opaque&&o.enable(18),S.pointsUvs&&o.enable(19),b.push(o.mask)}function g(b){const S=v[b.type];let G;if(S){const O=Sn[S];G=wc.clone(O.uniforms)}else G=b.uniforms;return G}function y(b,S){let G;for(let O=0,C=c.length;O<C;O++){const N=c[O];if(N.cacheKey===S){G=N,++G.usedTimes;break}}return G===void 0&&(G=new Bm(r,S,b,s),c.push(G)),G}function E(b){if(--b.usedTimes===0){const S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:g,acquireProgram:y,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:A}}function jm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Xm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function il(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,v,x,m){let u=r[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},r[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,f,p,v,x,m){const u=a(d,f,p,v,x,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(d,f,p,v,x,m){const u=a(d,f,p,v,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Xm),n.length>1&&n.sort(f||nl),i.length>1&&i.sort(f||nl)}function h(){for(let d=e,f=r.length;d<f;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function qm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new il,r.set(n,[a])):i>=s.length?(a=new il,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ym(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Je};break;case"SpotLight":t={position:new D,direction:new D,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Zm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qm=0;function Km(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jm(r,e){const t=new Ym,n=Zm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new D);const s=new D,a=new mt,o=new mt;function l(h,d){let f=0,p=0,v=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let x=0,m=0,u=0,_=0,M=0,g=0,y=0,E=0,L=0,A=0;h.sort(Km);const b=d===!0?Math.PI:1;for(let G=0,O=h.length;G<O;G++){const C=h[G],N=C.color,z=C.intensity,Z=C.distance,R=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=N.r*z*b,p+=N.g*z*b,v+=N.b*z*b;else if(C.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],z);else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*b),C.castShadow){const $=C.shadow,ee=n.get(C);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.directionalShadow[x]=ee,i.directionalShadowMap[x]=R,i.directionalShadowMatrix[x]=C.shadow.matrix,g++}i.directional[x]=W,x++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(N).multiplyScalar(z*b),W.distance=Z,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[u]=W;const $=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,$.updateMatrices(C),C.castShadow&&A++),i.spotLightMatrix[u]=$.matrix,C.castShadow){const ee=n.get(C);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,i.spotShadow[u]=ee,i.spotShadowMap[u]=R,E++}u++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(N).multiplyScalar(z),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=W,_++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*b),W.distance=C.distance,W.decay=C.decay,C.castShadow){const $=C.shadow,ee=n.get(C);ee.shadowBias=$.bias,ee.shadowNormalBias=$.normalBias,ee.shadowRadius=$.radius,ee.shadowMapSize=$.mapSize,ee.shadowCameraNear=$.camera.near,ee.shadowCameraFar=$.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=R,i.pointShadowMatrix[m]=C.shadow.matrix,y++}i.point[m]=W,m++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(z*b),W.groundColor.copy(C.groundColor).multiplyScalar(z*b),i.hemi[M]=W,M++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=v;const S=i.hash;(S.directionalLength!==x||S.pointLength!==m||S.spotLength!==u||S.rectAreaLength!==_||S.hemiLength!==M||S.numDirectionalShadows!==g||S.numPointShadows!==y||S.numSpotShadows!==E||S.numSpotMaps!==L)&&(i.directional.length=x,i.spot.length=u,i.rectArea.length=_,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,S.directionalLength=x,S.pointLength=m,S.spotLength=u,S.rectAreaLength=_,S.hemiLength=M,S.numDirectionalShadows=g,S.numPointShadows=y,S.numSpotShadows=E,S.numSpotMaps=L,i.version=Qm++)}function c(h,d){let f=0,p=0,v=0,x=0,m=0;const u=d.matrixWorldInverse;for(let _=0,M=h.length;_<M;_++){const g=h[_];if(g.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),f++}else if(g.isSpotLight){const y=i.spot[v];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),v++}else if(g.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(u),o.identity(),a.copy(g.matrixWorld),a.premultiply(u),o.extractRotation(a),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(u),p++}else if(g.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:i}}function rl(r,e){const t=new Jm(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $m(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new rl(r,e),t.set(s,[l])):a>=o.length?(l=new rl(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class eg extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tg extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function rg(r,e,t){let n=new Ra;const i=new qe,s=new qe,a=new Ut,o=new eg({depthPacking:Ku}),l=new tg,c={},h=t.maxTextureSize,d={[Jn]:Kt,[Kt]:Jn,[bn]:bn},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new de(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc,this.render=function(g,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||g.length===0)return;const L=r.getRenderTarget(),A=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),S=r.state;S.setBlending(Kn),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let G=0,O=g.length;G<O;G++){const C=g[G],N=C.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const z=N.getFrameExtents();if(i.multiply(z),s.copy(N.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,N.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,N.mapSize.y=s.y)),N.map===null){const R=this.type!==mr?{minFilter:Ht,magFilter:Ht}:{};N.map=new ei(i.x,i.y,R),N.map.texture.name=C.name+".shadowMap",N.camera.updateProjectionMatrix()}r.setRenderTarget(N.map),r.clear();const Z=N.getViewportCount();for(let R=0;R<Z;R++){const W=N.getViewport(R);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),S.viewport(a),N.updateMatrices(C,R),n=N.getFrustum(),M(y,E,N.camera,C,this.type)}N.isPointLightShadow!==!0&&this.type===mr&&u(N,E),N.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(L,A,b)};function u(g,y){const E=e.update(x);f.defines.VSM_SAMPLES!==g.blurSamples&&(f.defines.VSM_SAMPLES=g.blurSamples,p.defines.VSM_SAMPLES=g.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),g.mapPass===null&&(g.mapPass=new ei(i.x,i.y)),f.uniforms.shadow_pass.value=g.map.texture,f.uniforms.resolution.value=g.mapSize,f.uniforms.radius.value=g.radius,r.setRenderTarget(g.mapPass),r.clear(),r.renderBufferDirect(y,null,E,f,x,null),p.uniforms.shadow_pass.value=g.mapPass.texture,p.uniforms.resolution.value=g.mapSize,p.uniforms.radius.value=g.radius,r.setRenderTarget(g.map),r.clear(),r.renderBufferDirect(y,null,E,p,x,null)}function _(g,y,E,L){let A=null;const b=E.isPointLight===!0?g.customDistanceMaterial:g.customDepthMaterial;if(b!==void 0)A=b;else if(A=E.isPointLight===!0?l:o,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const S=A.uuid,G=y.uuid;let O=c[S];O===void 0&&(O={},c[S]=O);let C=O[G];C===void 0&&(C=A.clone(),O[G]=C),A=C}if(A.visible=y.visible,A.wireframe=y.wireframe,L===mr?A.side=y.shadowSide!==null?y.shadowSide:y.side:A.side=y.shadowSide!==null?y.shadowSide:d[y.side],A.alphaMap=y.alphaMap,A.alphaTest=y.alphaTest,A.map=y.map,A.clipShadows=y.clipShadows,A.clippingPlanes=y.clippingPlanes,A.clipIntersection=y.clipIntersection,A.displacementMap=y.displacementMap,A.displacementScale=y.displacementScale,A.displacementBias=y.displacementBias,A.wireframeLinewidth=y.wireframeLinewidth,A.linewidth=y.linewidth,E.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const S=r.properties.get(A);S.light=E}return A}function M(g,y,E,L,A){if(g.visible===!1)return;if(g.layers.test(y.layers)&&(g.isMesh||g.isLine||g.isPoints)&&(g.castShadow||g.receiveShadow&&A===mr)&&(!g.frustumCulled||n.intersectsObject(g))){g.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,g.matrixWorld);const G=e.update(g),O=g.material;if(Array.isArray(O)){const C=G.groups;for(let N=0,z=C.length;N<z;N++){const Z=C[N],R=O[Z.materialIndex];if(R&&R.visible){const W=_(g,R,L,A);r.renderBufferDirect(E,null,G,W,g,Z)}}}else if(O.visible){const C=_(g,O,L,A);r.renderBufferDirect(E,null,G,C,g,null)}}const S=g.children;for(let G=0,O=S.length;G<O;G++)M(S[G],y,E,L,A)}}function sg(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const H=new Ut;let ne=null;const fe=new Ut(0,0,0,0);return{setMask:function(xe){ne!==xe&&!I&&(r.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){I=xe},setClear:function(xe,Ke,ke,wt,qt){qt===!0&&(xe*=wt,Ke*=wt,ke*=wt),H.set(xe,Ke,ke,wt),fe.equals(H)===!1&&(r.clearColor(xe,Ke,ke,wt),fe.copy(H))},reset:function(){I=!1,ne=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,H=null,ne=null,fe=null;return{setTest:function(xe){xe?U(2929):Pe(2929)},setMask:function(xe){H!==xe&&!I&&(r.depthMask(xe),H=xe)},setFunc:function(xe){if(ne!==xe){switch(xe){case Su:r.depthFunc(512);break;case bu:r.depthFunc(519);break;case yu:r.depthFunc(513);break;case ma:r.depthFunc(515);break;case wu:r.depthFunc(514);break;case Eu:r.depthFunc(518);break;case Tu:r.depthFunc(516);break;case Au:r.depthFunc(517);break;default:r.depthFunc(515)}ne=xe}},setLocked:function(xe){I=xe},setClear:function(xe){fe!==xe&&(r.clearDepth(xe),fe=xe)},reset:function(){I=!1,H=null,ne=null,fe=null}}}function a(){let I=!1,H=null,ne=null,fe=null,xe=null,Ke=null,ke=null,wt=null,qt=null;return{setTest:function(ut){I||(ut?U(2960):Pe(2960))},setMask:function(ut){H!==ut&&!I&&(r.stencilMask(ut),H=ut)},setFunc:function(ut,Ct,zt){(ne!==ut||fe!==Ct||xe!==zt)&&(r.stencilFunc(ut,Ct,zt),ne=ut,fe=Ct,xe=zt)},setOp:function(ut,Ct,zt){(Ke!==ut||ke!==Ct||wt!==zt)&&(r.stencilOp(ut,Ct,zt),Ke=ut,ke=Ct,wt=zt)},setLocked:function(ut){I=ut},setClear:function(ut){qt!==ut&&(r.clearStencil(ut),qt=ut)},reset:function(){I=!1,H=null,ne=null,fe=null,xe=null,Ke=null,ke=null,wt=null,qt=null}}}const o=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap;let f={},p={},v=new WeakMap,x=[],m=null,u=!1,_=null,M=null,g=null,y=null,E=null,L=null,A=null,b=!1,S=null,G=null,O=null,C=null,N=null;const z=r.getParameter(35661);let Z=!1,R=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=R>=1):W.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=R>=2);let $=null,ee={};const Me=r.getParameter(3088),se=r.getParameter(2978),V=new Ut().fromArray(Me),Q=new Ut().fromArray(se);function K(I,H,ne){const fe=new Uint8Array(4),xe=r.createTexture();r.bindTexture(I,xe),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Ke=0;Ke<ne;Ke++)r.texImage2D(H+Ke,0,6408,1,1,0,6408,5121,fe);return xe}const ce={};ce[3553]=K(3553,3553,1),ce[34067]=K(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),U(2929),l.setFunc(ma),vt(!1),xt(Va),U(2884),De(Kn);function U(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Pe(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function Te(I,H){return p[I]!==H?(r.bindFramebuffer(I,H),p[I]=H,n&&(I===36009&&(p[36160]=H),I===36160&&(p[36009]=H)),!0):!1}function ae(I,H){let ne=x,fe=!1;if(I)if(ne=v.get(H),ne===void 0&&(ne=[],v.set(H,ne)),I.isWebGLMultipleRenderTargets){const xe=I.texture;if(ne.length!==xe.length||ne[0]!==36064){for(let Ke=0,ke=xe.length;Ke<ke;Ke++)ne[Ke]=36064+Ke;ne.length=xe.length,fe=!0}}else ne[0]!==36064&&(ne[0]=36064,fe=!0);else ne[0]!==1029&&(ne[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function we(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const Ve={[Hi]:32774,[uu]:32778,[fu]:32779};if(n)Ve[qa]=32775,Ve[Ya]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ve[qa]=I.MIN_EXT,Ve[Ya]=I.MAX_EXT)}const Se={[hu]:0,[du]:1,[pu]:768,[oc]:770,[Mu]:776,[vu]:774,[gu]:772,[mu]:769,[lc]:771,[xu]:775,[_u]:773};function De(I,H,ne,fe,xe,Ke,ke,wt){if(I===Kn){u===!0&&(Pe(3042),u=!1);return}if(u===!1&&(U(3042),u=!0),I!==cu){if(I!==_||wt!==b){if((M!==Hi||E!==Hi)&&(r.blendEquation(32774),M=Hi,E=Hi),wt)switch(I){case Xi:r.blendFuncSeparate(1,771,1,771);break;case Wa:r.blendFunc(1,1);break;case ja:r.blendFuncSeparate(0,769,0,1);break;case Xa:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Xi:r.blendFuncSeparate(770,771,1,771);break;case Wa:r.blendFunc(770,1);break;case ja:r.blendFuncSeparate(0,769,0,1);break;case Xa:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,y=null,L=null,A=null,_=I,b=wt}return}xe=xe||H,Ke=Ke||ne,ke=ke||fe,(H!==M||xe!==E)&&(r.blendEquationSeparate(Ve[H],Ve[xe]),M=H,E=xe),(ne!==g||fe!==y||Ke!==L||ke!==A)&&(r.blendFuncSeparate(Se[ne],Se[fe],Se[Ke],Se[ke]),g=ne,y=fe,L=Ke,A=ke),_=I,b=!1}function st(I,H){I.side===bn?Pe(2884):U(2884);let ne=I.side===Kt;H&&(ne=!ne),vt(ne),I.blending===Xi&&I.transparent===!1?De(Kn):De(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const fe=I.stencilWrite;c.setTest(fe),fe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),We(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(32926):Pe(32926)}function vt(I){S!==I&&(I?r.frontFace(2304):r.frontFace(2305),S=I)}function xt(I){I!==ou?(U(2884),I!==G&&(I===Va?r.cullFace(1029):I===lu?r.cullFace(1028):r.cullFace(1032))):Pe(2884),G=I}function dt(I){I!==O&&(Z&&r.lineWidth(I),O=I)}function We(I,H,ne){I?(U(32823),(C!==H||N!==ne)&&(r.polygonOffset(H,ne),C=H,N=ne)):Pe(32823)}function tt(I){I?U(3089):Pe(3089)}function Dt(I){I===void 0&&(I=33984+z-1),$!==I&&(r.activeTexture(I),$=I)}function P(I,H,ne){ne===void 0&&($===null?ne=33984+z-1:ne=$);let fe=ee[ne];fe===void 0&&(fe={type:void 0,texture:void 0},ee[ne]=fe),(fe.type!==I||fe.texture!==H)&&($!==ne&&(r.activeTexture(ne),$=ne),r.bindTexture(I,H||ce[I]),fe.type=I,fe.texture=H)}function w(){const I=ee[$];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(I){V.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),V.copy(I))}function ve(I){Q.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function Ie(I,H){let ne=d.get(H);ne===void 0&&(ne=new WeakMap,d.set(H,ne));let fe=ne.get(I);fe===void 0&&(fe=r.getUniformBlockIndex(H,I.name),ne.set(I,fe))}function Xe(I,H){const fe=d.get(H).get(I);h.get(H)!==fe&&(r.uniformBlockBinding(H,fe,I.__bindingPointIndex),h.set(H,fe))}function at(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},$=null,ee={},p={},v=new WeakMap,x=[],m=null,u=!1,_=null,M=null,g=null,y=null,E=null,L=null,A=null,b=!1,S=null,G=null,O=null,C=null,N=null,V.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:U,disable:Pe,bindFramebuffer:Te,drawBuffers:ae,useProgram:we,setBlending:De,setMaterial:st,setFlipSided:vt,setCullFace:xt,setLineWidth:dt,setPolygonOffset:We,setScissorTest:tt,activeTexture:Dt,bindTexture:P,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:te,texImage2D:be,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:Xe,texStorage2D:Y,texStorage3D:_e,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:Ae,compressedTexSubImage3D:he,scissor:me,viewport:ve,reset:at}}function ag(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return u?new OffscreenCanvas(P,w):Lr("canvas")}function M(P,w,X,te){let re=1;if((P.width>te||P.height>te)&&(re=te/Math.max(P.width,P.height)),re<1||w===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){const ue=w?mc:Math.floor,Ae=ue(re*P.width),he=ue(re*P.height);x===void 0&&(x=_(Ae,he));const Y=X?_(Ae,he):x;return Y.width=Ae,Y.height=he,Y.getContext("2d").drawImage(P,0,0,Ae,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ae+"x"+he+")."),Y}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function g(P){return Sa(P.width)&&Sa(P.height)}function y(P){return o?!1:P.wrapS!==pn||P.wrapT!==pn||P.minFilter!==Ht&&P.minFilter!==on}function E(P,w){return P.generateMipmaps&&w&&P.minFilter!==Ht&&P.minFilter!==on}function L(P){r.generateMipmap(P)}function A(P,w,X,te,re=!1){if(o===!1)return w;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=w;return w===6403&&(X===5126&&(ue=33326),X===5131&&(ue=33325),X===5121&&(ue=33321)),w===33319&&(X===5126&&(ue=33328),X===5131&&(ue=33327),X===5121&&(ue=33323)),w===6408&&(X===5126&&(ue=34836),X===5131&&(ue=34842),X===5121&&(ue=te===nt&&re===!1?35907:32856),X===32819&&(ue=32854),X===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function b(P,w,X){return E(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==Ht&&P.minFilter!==on?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function S(P){return P===Ht||P===Za||P===Ds?9728:9729}function G(P){const w=P.target;w.removeEventListener("dispose",G),C(w),w.isVideoTexture&&v.delete(w)}function O(P){const w=P.target;w.removeEventListener("dispose",O),z(w)}function C(P){const w=n.get(P);if(w.__webglInit===void 0)return;const X=P.source,te=m.get(X);if(te){const re=te[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(P),Object.keys(te).length===0&&m.delete(X)}n.remove(P)}function N(P){const w=n.get(P);r.deleteTexture(w.__webglTexture);const X=P.source,te=m.get(X);delete te[w.__cacheKey],a.memory.textures--}function z(P){const w=P.texture,X=n.get(P),te=n.get(w);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let re=0,ue=w.length;re<ue;re++){const Ae=n.get(w[re]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(P)}let Z=0;function R(){Z=0}function W(){const P=Z;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),Z+=1,P}function $(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function ee(P,w){const X=n.get(P);if(P.isVideoTexture&&tt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(X,P,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function Me(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Pe(X,P,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function se(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Pe(X,P,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function V(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Te(X,P,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const Q={[va]:10497,[pn]:33071,[xa]:33648},K={[Ht]:9728,[Za]:9984,[Ds]:9986,[on]:9729,[Uu]:9985,[Tr]:9987};function ce(P,w,X){if(X?(r.texParameteri(P,10242,Q[w.wrapS]),r.texParameteri(P,10243,Q[w.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,Q[w.wrapR]),r.texParameteri(P,10240,K[w.magFilter]),r.texParameteri(P,10241,K[w.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(w.wrapS!==pn||w.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,S(w.magFilter)),r.texParameteri(P,10241,S(w.minFilter)),w.minFilter!==Ht&&w.minFilter!==on&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ht||w.minFilter!==Ds&&w.minFilter!==Tr||w.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(P,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function U(P,w){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",G));const te=w.source;let re=m.get(te);re===void 0&&(re={},m.set(te,re));const ue=$(w);if(ue!==P.__cacheKey){re[ue]===void 0&&(re[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[ue].usedTimes++;const Ae=re[P.__cacheKey];Ae!==void 0&&(re[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&N(w)),P.__cacheKey=ue,P.__webglTexture=re[ue].texture}return X}function Pe(P,w,X){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const re=U(P,w),ue=w.source;t.bindTexture(te,P.__webglTexture,33984+X);const Ae=n.get(ue);if(ue.version!==Ae.__version||re===!0){t.activeTexture(33984+X),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const he=y(w)&&g(w.image)===!1;let Y=M(w.image,he,!1,h);Y=Dt(w,Y);const _e=g(Y)||o,be=s.convert(w.format,w.encoding);let Ee=s.convert(w.type),me=A(w.internalFormat,be,Ee,w.encoding,w.isVideoTexture);ce(te,w,_e);let ve;const Ie=w.mipmaps,Xe=o&&w.isVideoTexture!==!0,at=Ae.__version===void 0||re===!0,I=b(w,Y,_e);if(w.isDepthTexture)me=6402,o?w.type===gi?me=36012:w.type===mi?me=33190:w.type===qi?me=35056:me=33189:w.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&me===6402&&w.type!==hc&&w.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=mi,Ee=s.convert(w.type)),w.format===Ji&&me===6402&&(me=34041,w.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=qi,Ee=s.convert(w.type))),at&&(Xe?t.texStorage2D(3553,1,me,Y.width,Y.height):t.texImage2D(3553,0,me,Y.width,Y.height,0,be,Ee,null));else if(w.isDataTexture)if(Ie.length>0&&_e){Xe&&at&&t.texStorage2D(3553,I,me,Ie[0].width,Ie[0].height);for(let H=0,ne=Ie.length;H<ne;H++)ve=Ie[H],Xe?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,be,Ee,ve.data):t.texImage2D(3553,H,me,ve.width,ve.height,0,be,Ee,ve.data);w.generateMipmaps=!1}else Xe?(at&&t.texStorage2D(3553,I,me,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,be,Ee,Y.data)):t.texImage2D(3553,0,me,Y.width,Y.height,0,be,Ee,Y.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xe&&at&&t.texStorage3D(35866,I,me,Ie[0].width,Ie[0].height,Y.depth);for(let H=0,ne=Ie.length;H<ne;H++)ve=Ie[H],w.format!==mn?be!==null?Xe?t.compressedTexSubImage3D(35866,H,0,0,0,ve.width,ve.height,Y.depth,be,ve.data,0,0):t.compressedTexImage3D(35866,H,me,ve.width,ve.height,Y.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(35866,H,0,0,0,ve.width,ve.height,Y.depth,be,Ee,ve.data):t.texImage3D(35866,H,me,ve.width,ve.height,Y.depth,0,be,Ee,ve.data)}else{Xe&&at&&t.texStorage2D(3553,I,me,Ie[0].width,Ie[0].height);for(let H=0,ne=Ie.length;H<ne;H++)ve=Ie[H],w.format!==mn?be!==null?Xe?t.compressedTexSubImage2D(3553,H,0,0,ve.width,ve.height,be,ve.data):t.compressedTexImage2D(3553,H,me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(3553,H,0,0,ve.width,ve.height,be,Ee,ve.data):t.texImage2D(3553,H,me,ve.width,ve.height,0,be,Ee,ve.data)}else if(w.isDataArrayTexture)Xe?(at&&t.texStorage3D(35866,I,me,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,be,Ee,Y.data)):t.texImage3D(35866,0,me,Y.width,Y.height,Y.depth,0,be,Ee,Y.data);else if(w.isData3DTexture)Xe?(at&&t.texStorage3D(32879,I,me,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,be,Ee,Y.data)):t.texImage3D(32879,0,me,Y.width,Y.height,Y.depth,0,be,Ee,Y.data);else if(w.isFramebufferTexture){if(at)if(Xe)t.texStorage2D(3553,I,me,Y.width,Y.height);else{let H=Y.width,ne=Y.height;for(let fe=0;fe<I;fe++)t.texImage2D(3553,fe,me,H,ne,0,be,Ee,null),H>>=1,ne>>=1}}else if(Ie.length>0&&_e){Xe&&at&&t.texStorage2D(3553,I,me,Ie[0].width,Ie[0].height);for(let H=0,ne=Ie.length;H<ne;H++)ve=Ie[H],Xe?t.texSubImage2D(3553,H,0,0,be,Ee,ve):t.texImage2D(3553,H,me,be,Ee,ve);w.generateMipmaps=!1}else Xe?(at&&t.texStorage2D(3553,I,me,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,be,Ee,Y)):t.texImage2D(3553,0,me,be,Ee,Y);E(w,_e)&&L(te),Ae.__version=ue.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Te(P,w,X){if(w.image.length!==6)return;const te=U(P,w),re=w.source;t.bindTexture(34067,P.__webglTexture,33984+X);const ue=n.get(re);if(re.version!==ue.__version||te===!0){t.activeTexture(33984+X),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Y=[];for(let H=0;H<6;H++)!Ae&&!he?Y[H]=M(w.image[H],!1,!0,c):Y[H]=he?w.image[H].image:w.image[H],Y[H]=Dt(w,Y[H]);const _e=Y[0],be=g(_e)||o,Ee=s.convert(w.format,w.encoding),me=s.convert(w.type),ve=A(w.internalFormat,Ee,me,w.encoding),Ie=o&&w.isVideoTexture!==!0,Xe=ue.__version===void 0||te===!0;let at=b(w,_e,be);ce(34067,w,be);let I;if(Ae){Ie&&Xe&&t.texStorage2D(34067,at,ve,_e.width,_e.height);for(let H=0;H<6;H++){I=Y[H].mipmaps;for(let ne=0;ne<I.length;ne++){const fe=I[ne];w.format!==mn?Ee!==null?Ie?t.compressedTexSubImage2D(34069+H,ne,0,0,fe.width,fe.height,Ee,fe.data):t.compressedTexImage2D(34069+H,ne,ve,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+H,ne,0,0,fe.width,fe.height,Ee,me,fe.data):t.texImage2D(34069+H,ne,ve,fe.width,fe.height,0,Ee,me,fe.data)}}}else{I=w.mipmaps,Ie&&Xe&&(I.length>0&&at++,t.texStorage2D(34067,at,ve,Y[0].width,Y[0].height));for(let H=0;H<6;H++)if(he){Ie?t.texSubImage2D(34069+H,0,0,0,Y[H].width,Y[H].height,Ee,me,Y[H].data):t.texImage2D(34069+H,0,ve,Y[H].width,Y[H].height,0,Ee,me,Y[H].data);for(let ne=0;ne<I.length;ne++){const xe=I[ne].image[H].image;Ie?t.texSubImage2D(34069+H,ne+1,0,0,xe.width,xe.height,Ee,me,xe.data):t.texImage2D(34069+H,ne+1,ve,xe.width,xe.height,0,Ee,me,xe.data)}}else{Ie?t.texSubImage2D(34069+H,0,0,0,Ee,me,Y[H]):t.texImage2D(34069+H,0,ve,Ee,me,Y[H]);for(let ne=0;ne<I.length;ne++){const fe=I[ne];Ie?t.texSubImage2D(34069+H,ne+1,0,0,Ee,me,fe.image[H]):t.texImage2D(34069+H,ne+1,ve,Ee,me,fe.image[H])}}}E(w,be)&&L(34067),ue.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ae(P,w,X,te,re){const ue=s.convert(X.format,X.encoding),Ae=s.convert(X.type),he=A(X.internalFormat,ue,Ae,X.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,he,w.width,w.height,w.depth,0,ue,Ae,null):t.texImage2D(re,0,he,w.width,w.height,0,ue,Ae,null)),t.bindFramebuffer(36160,P),We(w)?f.framebufferTexture2DMultisampleEXT(36160,te,re,n.get(X).__webglTexture,0,dt(w)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,te,re,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(P,w,X){if(r.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(X||We(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===gi?te=36012:re.type===mi&&(te=33190));const ue=dt(w);We(w)?f.renderbufferStorageMultisampleEXT(36161,ue,te,w.width,w.height):r.renderbufferStorageMultisample(36161,ue,te,w.width,w.height)}else r.renderbufferStorage(36161,te,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const te=dt(w);X&&We(w)===!1?r.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):We(w)?f.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<te.length;re++){const ue=te[re],Ae=s.convert(ue.format,ue.encoding),he=s.convert(ue.type),Y=A(ue.internalFormat,Ae,he,ue.encoding),_e=dt(w);X&&We(w)===!1?r.renderbufferStorageMultisample(36161,_e,Y,w.width,w.height):We(w)?f.renderbufferStorageMultisampleEXT(36161,_e,Y,w.width,w.height):r.renderbufferStorage(36161,Y,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function Ve(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const te=n.get(w.depthTexture).__webglTexture,re=dt(w);if(w.depthTexture.format===_i)We(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,re):r.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===Ji)We(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,re):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function Se(P){const w=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ve(w.__webglFramebuffer,P)}else if(X){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=r.createRenderbuffer(),we(w.__webglDepthbuffer[te],P,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function De(P,w,X){const te=n.get(P);w!==void 0&&ae(te.__webglFramebuffer,P,P.texture,36064,3553),X!==void 0&&Se(P)}function st(P){const w=P.texture,X=n.get(P),te=n.get(w);P.addEventListener("dispose",O),P.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=w.version,a.memory.textures++);const re=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Ae=g(P)||o;if(re){X.__webglFramebuffer=[];for(let he=0;he<6;he++)X.__webglFramebuffer[he]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),ue)if(i.drawBuffers){const he=P.texture;for(let Y=0,_e=he.length;Y<_e;Y++){const be=n.get(he[Y]);be.__webglTexture===void 0&&(be.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&We(P)===!1){const he=ue?w:[w];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let Y=0;Y<he.length;Y++){const _e=he[Y];X.__webglColorRenderbuffer[Y]=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer[Y]);const be=s.convert(_e.format,_e.encoding),Ee=s.convert(_e.type),me=A(_e.internalFormat,be,Ee,_e.encoding,P.isXRRenderTarget===!0),ve=dt(P);r.renderbufferStorageMultisample(36161,ve,me,P.width,P.height),r.framebufferRenderbuffer(36160,36064+Y,36161,X.__webglColorRenderbuffer[Y])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),we(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,te.__webglTexture),ce(34067,w,Ae);for(let he=0;he<6;he++)ae(X.__webglFramebuffer[he],P,w,36064,34069+he);E(w,Ae)&&L(34067),t.unbindTexture()}else if(ue){const he=P.texture;for(let Y=0,_e=he.length;Y<_e;Y++){const be=he[Y],Ee=n.get(be);t.bindTexture(3553,Ee.__webglTexture),ce(3553,be,Ae),ae(X.__webglFramebuffer,P,be,36064+Y,3553),E(be,Ae)&&L(3553)}t.unbindTexture()}else{let he=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?he=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),ce(he,w,Ae),ae(X.__webglFramebuffer,P,w,36064,he),E(w,Ae)&&L(he),t.unbindTexture()}P.depthBuffer&&Se(P)}function vt(P){const w=g(P)||o,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let te=0,re=X.length;te<re;te++){const ue=X[te];if(E(ue,w)){const Ae=P.isWebGLCubeRenderTarget?34067:3553,he=n.get(ue).__webglTexture;t.bindTexture(Ae,he),L(Ae),t.unbindTexture()}}}function xt(P){if(o&&P.samples>0&&We(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,te=P.height;let re=16384;const ue=[],Ae=P.stencilBuffer?33306:36096,he=n.get(P),Y=P.isWebGLMultipleRenderTargets===!0;if(Y)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){ue.push(36064+_e),P.depthBuffer&&ue.push(Ae);const be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(be===!1&&(P.depthBuffer&&(re|=256),P.stencilBuffer&&(re|=1024)),Y&&r.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[_e]),be===!0&&(r.invalidateFramebuffer(36008,[Ae]),r.invalidateFramebuffer(36009,[Ae])),Y){const Ee=n.get(w[_e]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ee,0)}r.blitFramebuffer(0,0,X,te,0,0,X,te,re,9728),p&&r.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+_e,36161,he.__webglColorRenderbuffer[_e]);const be=n.get(w[_e]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),r.framebufferTexture2D(36009,36064+_e,3553,be,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function dt(P){return Math.min(d,P.samples)}function We(P){const w=n.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tt(P){const w=a.render.frame;v.get(P)!==w&&(v.set(P,w),P.update())}function Dt(P,w){const X=P.encoding,te=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ma||X!==$n&&(X===nt?o===!1?e.has("EXT_sRGB")===!0&&te===mn?(P.format=Ma,P.minFilter=on,P.generateMipmaps=!1):w=_c.sRGBToLinear(w):(te!==mn||re!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=W,this.resetTextureUnits=R,this.setTexture2D=ee,this.setTexture2DArray=Me,this.setTexture3D=se,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=st,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=We}function og(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Mi)return 5121;if(s===zu)return 32819;if(s===ku)return 32820;if(s===Nu)return 5120;if(s===Ou)return 5122;if(s===hc)return 5123;if(s===Fu)return 5124;if(s===mi)return 5125;if(s===gi)return 5126;if(s===Ar)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bu)return 6406;if(s===mn)return 6408;if(s===Gu)return 6409;if(s===Hu)return 6410;if(s===_i)return 6402;if(s===Ji)return 34041;if(s===Ma)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vu)return 6403;if(s===Wu)return 36244;if(s===ju)return 33319;if(s===Xu)return 33320;if(s===qu)return 36249;if(s===Is||s===Us||s===Ns||s===Os)if(a===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qa||s===Ka||s===Ja||s===$a)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Qa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ja)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===eo||s===to)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===eo)return a===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===to)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===no||s===io||s===ro||s===so||s===ao||s===oo||s===lo||s===co||s===uo||s===fo||s===ho||s===po||s===mo||s===go)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===no)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===io)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ro)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===so)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ao)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oo)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lo)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===co)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uo)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fo)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ho)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===po)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mo)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===go)return a===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Fs)return a===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Zu||s===_o||s===vo||s===xo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Fs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===_o)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class lg extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cg={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new es;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ug extends Jt{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:_i,h!==_i&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=mi),n===void 0&&h===Ji&&(n=qi),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class fg extends ir{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const x=t.getContextAttributes();let m=null,u=null;const _=[],M=[],g=new Set,y=new Map,E=new rn;E.layers.enable(1),E.viewport=new Ut;const L=new rn;L.layers.enable(2),L.viewport=new Ut;const A=[E,L],b=new lg;b.layers.enable(1),b.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=_[V];return Q===void 0&&(Q=new sa,_[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=_[V];return Q===void 0&&(Q=new sa,_[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=_[V];return Q===void 0&&(Q=new sa,_[V]=Q),Q.getHandSpace()};function O(V){const Q=M.indexOf(V.inputSource);if(Q===-1)return;const K=_[Q];K!==void 0&&K.dispatchEvent({type:V.type,data:V.inputSource})}function C(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",N);for(let V=0;V<_.length;V++){const Q=M[V];Q!==null&&(M[V]=null,_[V].disconnect(Q))}S=null,G=null,e.setRenderTarget(m),p=null,f=null,d=null,i=null,u=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",C),i.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),u=new ei(p.framebufferWidth,p.framebufferHeight,{format:mn,type:Mi,encoding:e.outputEncoding,stencilBuffer:x.stencil})}else{let Q=null,K=null,ce=null;x.depth&&(ce=x.stencil?35056:33190,Q=x.stencil?Ji:_i,K=x.stencil?qi:mi);const U={colorFormat:32856,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(U),i.updateRenderState({layers:[f]}),u=new ei(f.textureWidth,f.textureHeight,{format:mn,type:Mi,depthTexture:new ug(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,encoding:e.outputEncoding,samples:x.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(V){for(let Q=0;Q<V.removed.length;Q++){const K=V.removed[Q],ce=M.indexOf(K);ce>=0&&(M[ce]=null,_[ce].disconnect(K))}for(let Q=0;Q<V.added.length;Q++){const K=V.added[Q];let ce=M.indexOf(K);if(ce===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=M.length){M.push(K),ce=Pe;break}else if(M[Pe]===null){M[Pe]=K,ce=Pe;break}if(ce===-1)break}const U=_[ce];U&&U.connect(K)}}const z=new D,Z=new D;function R(V,Q,K){z.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(K.matrixWorld);const ce=z.distanceTo(Z),U=Q.projectionMatrix.elements,Pe=K.projectionMatrix.elements,Te=U[14]/(U[10]-1),ae=U[14]/(U[10]+1),we=(U[9]+1)/U[5],Ve=(U[9]-1)/U[5],Se=(U[8]-1)/U[0],De=(Pe[8]+1)/Pe[0],st=Te*Se,vt=Te*De,xt=ce/(-Se+De),dt=xt*-Se;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(dt),V.translateZ(xt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const We=Te+xt,tt=ae+xt,Dt=st-dt,P=vt+(ce-dt),w=we*ae/tt*We,X=Ve*ae/tt*We;V.projectionMatrix.makePerspective(Dt,P,w,X,We,tt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;b.near=L.near=E.near=V.near,b.far=L.far=E.far=V.far,(S!==b.near||G!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,G=b.far);const Q=V.parent,K=b.cameras;W(b,Q);for(let ce=0;ce<K.length;ce++)W(K[ce],Q);K.length===2?R(b,E,L):b.projectionMatrix.copy(E.projectionMatrix),$(V,b,Q)};function $(V,Q,K){K===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(K.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const ce=V.children;for(let U=0,Pe=ce.length;U<Pe;U++)ce[U].updateMatrixWorld(!0);V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return g};let ee=null;function Me(V,Q){if(h=Q.getViewerPose(c||a),v=Q,h!==null){const K=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ce=!1;K.length!==b.cameras.length&&(b.cameras.length=0,ce=!0);for(let U=0;U<K.length;U++){const Pe=K[U];let Te=null;if(p!==null)Te=p.getViewport(Pe);else{const we=d.getViewSubImage(f,Pe);Te=we.viewport,U===0&&(e.setRenderTargetTextures(u,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(u))}let ae=A[U];ae===void 0&&(ae=new rn,ae.layers.enable(U),ae.viewport=new Ut,A[U]=ae),ae.matrix.fromArray(Pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Te.x,Te.y,Te.width,Te.height),U===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ce===!0&&b.cameras.push(ae)}}for(let K=0;K<_.length;K++){const ce=M[K],U=_[K];ce!==null&&U!==void 0&&U.update(ce,Q,c||a)}if(ee&&ee(V,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let K=null;for(const ce of g)Q.detectedPlanes.has(ce)||(K===null&&(K=[]),K.push(ce));if(K!==null)for(const ce of K)g.delete(ce),y.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of Q.detectedPlanes)if(!g.has(ce))g.add(ce),y.set(ce,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const U=y.get(ce);ce.lastChangedTime>U&&(y.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}v=null}const se=new Ac;se.setAnimationLoop(Me),this.setAnimationLoop=function(V){ee=V},this.dispose=function(){}}}function hg(r,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,yc(r)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,_,M,g){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,g)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Kt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Kt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const M=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=M*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(_,M){const g=M.program;n.uniformBlockBinding(_,g)}function c(_,M){let g=i[_.id];g===void 0&&(v(_),g=h(_),i[_.id]=g,_.addEventListener("dispose",m));const y=M.program;n.updateUBOMapping(_,y);const E=e.render.frame;s[_.id]!==E&&(f(_),s[_.id]=E)}function h(_){const M=d();_.__bindingPointIndex=M;const g=r.createBuffer(),y=_.__size,E=_.usage;return r.bindBuffer(35345,g),r.bufferData(35345,y,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,g),g}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const M=i[_.id],g=_.uniforms,y=_.__cache;r.bindBuffer(35345,M);for(let E=0,L=g.length;E<L;E++){const A=g[E];if(p(A,E,y)===!0){const b=A.__offset,S=Array.isArray(A.value)?A.value:[A.value];let G=0;for(let O=0;O<S.length;O++){const C=S[O],N=x(C);typeof C=="number"?(A.__data[0]=C,r.bufferSubData(35345,b+G,A.__data)):C.isMatrix3?(A.__data[0]=C.elements[0],A.__data[1]=C.elements[1],A.__data[2]=C.elements[2],A.__data[3]=C.elements[0],A.__data[4]=C.elements[3],A.__data[5]=C.elements[4],A.__data[6]=C.elements[5],A.__data[7]=C.elements[0],A.__data[8]=C.elements[6],A.__data[9]=C.elements[7],A.__data[10]=C.elements[8],A.__data[11]=C.elements[0]):(C.toArray(A.__data,G),G+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,b,A.__data)}}r.bindBuffer(35345,null)}function p(_,M,g){const y=_.value;if(g[M]===void 0){if(typeof y=="number")g[M]=y;else{const E=Array.isArray(y)?y:[y],L=[];for(let A=0;A<E.length;A++)L.push(E[A].clone());g[M]=L}return!0}else if(typeof y=="number"){if(g[M]!==y)return g[M]=y,!0}else{const E=Array.isArray(g[M])?g[M]:[g[M]],L=Array.isArray(y)?y:[y];for(let A=0;A<E.length;A++){const b=E[A];if(b.equals(L[A])===!1)return b.copy(L[A]),!0}}return!1}function v(_){const M=_.uniforms;let g=0;const y=16;let E=0;for(let L=0,A=M.length;L<A;L++){const b=M[L],S={boundary:0,storage:0},G=Array.isArray(b.value)?b.value:[b.value];for(let O=0,C=G.length;O<C;O++){const N=G[O],z=x(N);S.boundary+=z.boundary,S.storage+=z.storage}if(b.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=g,L>0){E=g%y;const O=y-E;E!==0&&O-S.boundary<0&&(g+=y-E,b.__offset=g)}g+=S.storage}return E=g%y,E>0&&(g+=y-E),_.__size=g,_.__cache={},this}function x(_){const M={boundary:0,storage:0};return typeof _=="number"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const g=a.indexOf(M.__bindingPointIndex);a.splice(g,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function u(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:u}}function pg(){const r=Lr("canvas");return r.style.display="block",r}class Ic{constructor(e={}){const{canvas:t=pg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,v=null;const x=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$n,this.useLegacyLights=!0,this.toneMapping=wn,this.toneMappingExposure=1;const u=this;let _=!1,M=0,g=0,y=null,E=-1,L=null;const A=new Ut,b=new Ut;let S=null,G=t.width,O=t.height,C=1,N=null,z=null;const Z=new Ut(0,0,G,O),R=new Ut(0,0,G,O);let W=!1;const $=new Ra;let ee=!1,Me=!1,se=null;const V=new mt,Q=new D,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return y===null?C:1}let U=n;function Pe(T,F){for(let q=0;q<T.length;q++){const k=T[q],j=t.getContext(k,F);if(j!==null)return j}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const F=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&F.shift(),U=Pe(F,T),U===null)throw Pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,ae,we,Ve,Se,De,st,vt,xt,dt,We,tt,Dt,P,w,X,te,re,ue,Ae,he,Y,_e,be;function Ee(){Te=new Ep(U),ae=new xp(U,Te,e),Te.init(ae),Y=new og(U,Te,ae),we=new sg(U,Te,ae),Ve=new Cp,Se=new jm,De=new ag(U,Te,we,Se,ae,Y,Ve),st=new Sp(u),vt=new wp(u),xt=new Bf(U,ae),_e=new _p(U,Te,xt,ae),dt=new Tp(U,xt,Ve,_e),We=new Dp(U,dt,xt,Ve),ue=new Rp(U,ae,De),X=new Mp(Se),tt=new Wm(u,st,vt,Te,ae,_e,X),Dt=new hg(u,Se),P=new qm,w=new $m(Te,ae),re=new gp(u,st,vt,we,We,f,l),te=new rg(u,We,ae),be=new dg(U,Ve,ae,we),Ae=new vp(U,Te,Ve,ae),he=new Ap(U,Te,Ve,ae),Ve.programs=tt.programs,u.capabilities=ae,u.extensions=Te,u.properties=Se,u.renderLists=P,u.shadowMap=te,u.state=we,u.info=Ve}Ee();const me=new fg(u,U);this.xr=me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(T){T!==void 0&&(C=T,this.setSize(G,O,!1))},this.getSize=function(T){return T.set(G,O)},this.setSize=function(T,F,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,O=F,t.width=Math.floor(T*C),t.height=Math.floor(F*C),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(G*C,O*C).floor()},this.setDrawingBufferSize=function(T,F,q){G=T,O=F,C=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,F,q,k){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,F,q,k),we.viewport(A.copy(Z).multiplyScalar(C).floor())},this.getScissor=function(T){return T.copy(R)},this.setScissor=function(T,F,q,k){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,F,q,k),we.scissor(b.copy(R).multiplyScalar(C).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){we.setScissorTest(W=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(T=!0,F=!0,q=!0){let k=0;T&&(k|=16384),F&&(k|=256),q&&(k|=1024),U.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),P.dispose(),w.dispose(),Se.dispose(),st.dispose(),vt.dispose(),We.dispose(),_e.dispose(),be.dispose(),tt.dispose(),me.dispose(),me.removeEventListener("sessionstart",xe),me.removeEventListener("sessionend",Ke),se&&(se.dispose(),se=null),ke.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=Ve.autoReset,F=te.enabled,q=te.autoUpdate,k=te.needsUpdate,j=te.type;Ee(),Ve.autoReset=T,te.enabled=F,te.autoUpdate=q,te.needsUpdate=k,te.type=j}function Xe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function at(T){const F=T.target;F.removeEventListener("dispose",at),I(F)}function I(T){H(T),Se.remove(T)}function H(T){const F=Se.get(T).programs;F!==void 0&&(F.forEach(function(q){tt.releaseProgram(q)}),T.isShaderMaterial&&tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,k,j,oe){F===null&&(F=K);const pe=j.isMesh&&j.matrixWorld.determinant()<0,Le=Ir(T,F,q,k,j);we.setMaterial(k,pe);let Ne=q.index,Fe=1;k.wireframe===!0&&(Ne=dt.getWireframeAttribute(q),Fe=2);const ze=q.drawRange,Be=q.attributes.position;let $e=ze.start*Fe,kt=(ze.start+ze.count)*Fe;oe!==null&&($e=Math.max($e,oe.start*Fe),kt=Math.min(kt,(oe.start+oe.count)*Fe)),Ne!==null?($e=Math.max($e,0),kt=Math.min(kt,Ne.count)):Be!=null&&($e=Math.max($e,0),kt=Math.min(kt,Be.count));const ln=kt-$e;if(ln<0||ln===1/0)return;_e.setup(j,k,Le,q,Ne);let ni,St=Ae;if(Ne!==null&&(ni=xt.get(Ne),St=he,St.setIndex(ni)),j.isMesh)k.wireframe===!0?(we.setLineWidth(k.wireframeLinewidth*ce()),St.setMode(1)):St.setMode(4);else if(j.isLine){let je=k.linewidth;je===void 0&&(je=1),we.setLineWidth(je*ce()),j.isLineSegments?St.setMode(1):j.isLineLoop?St.setMode(2):St.setMode(3)}else j.isPoints?St.setMode(0):j.isSprite&&St.setMode(4);if(j.isInstancedMesh)St.renderInstances($e,ln,j.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,As=Math.min(q.instanceCount,je);St.renderInstances($e,ln,As)}else St.render($e,ln)},this.compile=function(T,F){function q(k,j,oe){k.transparent===!0&&k.side===bn&&k.forceSinglePass===!1?(k.side=Kt,k.needsUpdate=!0,Dn(k,j,oe),k.side=Jn,k.needsUpdate=!0,Dn(k,j,oe),k.side=bn):Dn(k,j,oe)}v=w.get(T),v.init(),m.push(v),T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(v.pushLight(k),k.castShadow&&v.pushShadow(k))}),v.setupLights(u.useLegacyLights),T.traverse(function(k){const j=k.material;if(j)if(Array.isArray(j))for(let oe=0;oe<j.length;oe++){const pe=j[oe];q(pe,T,k)}else q(j,T,k)}),m.pop(),v=null};let ne=null;function fe(T){ne&&ne(T)}function xe(){ke.stop()}function Ke(){ke.start()}const ke=new Ac;ke.setAnimationLoop(fe),typeof self!="undefined"&&ke.setContext(self),this.setAnimationLoop=function(T){ne=T,me.setAnimationLoop(T),T===null?ke.stop():ke.start()},me.addEventListener("sessionstart",xe),me.addEventListener("sessionend",Ke),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),T.isScene===!0&&T.onBeforeRender(u,T,F,y),v=w.get(T,m.length),v.init(),m.push(v),V.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(V),Me=this.localClippingEnabled,ee=X.init(this.clippingPlanes,Me),p=P.get(T,x.length),p.init(),x.push(p),wt(T,F,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(N,z),ee===!0&&X.beginShadows();const q=v.state.shadowsArray;if(te.render(q,T,F),ee===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,T),v.setupLights(u.useLegacyLights),F.isArrayCamera){const k=F.cameras;for(let j=0,oe=k.length;j<oe;j++){const pe=k[j];qt(p,T,pe,pe.viewport)}}else qt(p,T,F);y!==null&&(De.updateMultisampleRenderTarget(y),De.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(u,T,F),_e.resetDefaultState(),E=-1,L=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function wt(T,F,q,k){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){k&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const pe=We.update(T),Le=T.material;Le.visible&&p.push(T,pe,Le,q,Q.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ve.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ve.render.frame),!T.frustumCulled||$.intersectsObject(T))){k&&Q.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const pe=We.update(T),Le=T.material;if(Array.isArray(Le)){const Ne=pe.groups;for(let Fe=0,ze=Ne.length;Fe<ze;Fe++){const Be=Ne[Fe],$e=Le[Be.materialIndex];$e&&$e.visible&&p.push(T,pe,$e,q,Q.z,Be)}}else Le.visible&&p.push(T,pe,Le,q,Q.z,null)}}const oe=T.children;for(let pe=0,Le=oe.length;pe<Le;pe++)wt(oe[pe],F,q,k)}function qt(T,F,q,k){const j=T.opaque,oe=T.transmissive,pe=T.transparent;v.setupLightsView(q),ee===!0&&X.setGlobalState(u.clippingPlanes,q),oe.length>0&&ut(j,oe,F,q),k&&we.viewport(A.copy(k)),j.length>0&&Ct(j,F,q),oe.length>0&&Ct(oe,F,q),pe.length>0&&Ct(pe,F,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ut(T,F,q,k){if(se===null){const Le=ae.isWebGL2;se=new ei(1024,1024,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Ar:Mi,minFilter:Tr,samples:Le&&o===!0?4:0})}const j=u.getRenderTarget();u.setRenderTarget(se),u.clear();const oe=u.toneMapping;u.toneMapping=wn,Ct(T,q,k),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se);let pe=!1;for(let Le=0,Ne=F.length;Le<Ne;Le++){const Fe=F[Le],ze=Fe.object,Be=Fe.geometry,$e=Fe.material,kt=Fe.group;if($e.side===bn&&ze.layers.test(k.layers)){const ln=$e.side;$e.side=Kt,$e.needsUpdate=!0,zt(ze,q,k,Be,$e,kt),$e.side=ln,$e.needsUpdate=!0,pe=!0}}pe===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se)),u.setRenderTarget(j),u.toneMapping=oe}function Ct(T,F,q){const k=F.isScene===!0?F.overrideMaterial:null;for(let j=0,oe=T.length;j<oe;j++){const pe=T[j],Le=pe.object,Ne=pe.geometry,Fe=k===null?pe.material:k,ze=pe.group;Le.layers.test(q.layers)&&zt(Le,F,q,Ne,Fe,ze)}}function zt(T,F,q,k,j,oe){T.onBeforeRender(u,F,q,k,j,oe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(u,F,q,k,T,oe),j.transparent===!0&&j.side===bn&&j.forceSinglePass===!1?(j.side=Kt,j.needsUpdate=!0,u.renderBufferDirect(q,F,k,j,T,oe),j.side=Jn,j.needsUpdate=!0,u.renderBufferDirect(q,F,k,j,T,oe),j.side=bn):u.renderBufferDirect(q,F,k,j,T,oe),T.onAfterRender(u,F,q,k,j,oe)}function Dn(T,F,q){F.isScene!==!0&&(F=K);const k=Se.get(T),j=v.state.lights,oe=v.state.shadowsArray,pe=j.state.version,Le=tt.getParameters(T,j.state,oe,F,q),Ne=tt.getProgramCacheKey(Le);let Fe=k.programs;k.environment=T.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(T.isMeshStandardMaterial?vt:st).get(T.envMap||k.environment),Fe===void 0&&(T.addEventListener("dispose",at),Fe=new Map,k.programs=Fe);let ze=Fe.get(Ne);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===pe)return ti(T,Le),ze}else Le.uniforms=tt.getUniforms(T),T.onBuild(q,Le,u),T.onBeforeCompile(Le,u),ze=tt.acquireProgram(Le,Ne),Fe.set(Ne,ze),k.uniforms=Le.uniforms;const Be=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=X.uniform),ti(T,Le),k.needsLights=In(T),k.lightsStateVersion=pe,k.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMap.value=j.state.directionalShadowMap,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotShadowMap.value=j.state.spotShadowMap,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMap.value=j.state.pointShadowMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix);const $e=ze.getUniforms(),kt=ls.seqWithValue($e.seq,Be);return k.currentProgram=ze,k.uniformsList=kt,ze}function ti(T,F){const q=Se.get(T);q.outputEncoding=F.outputEncoding,q.instancing=F.instancing,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Ir(T,F,q,k,j){F.isScene!==!0&&(F=K),De.resetTextureUnits();const oe=F.fog,pe=k.isMeshStandardMaterial?F.environment:null,Le=y===null?u.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:$n,Ne=(k.isMeshStandardMaterial?vt:st).get(k.envMap||pe),Fe=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!k.normalMap&&!!q.attributes.tangent,Be=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,kt=!!q.morphAttributes.color,ln=k.toneMapped?u.toneMapping:wn,ni=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=ni!==void 0?ni.length:0,je=Se.get(k),As=v.state.lights;if(ee===!0&&(Me===!0||T!==L)){const $t=T===L&&k.id===E;X.setState(k,T,$t)}let Pt=!1;k.version===je.__version?(je.needsLights&&je.lightsStateVersion!==As.state.version||je.outputEncoding!==Le||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ne||k.fog===!0&&je.fog!==oe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==X.numPlanes||je.numIntersection!==X.numIntersection)||je.vertexAlphas!==Fe||je.vertexTangents!==ze||je.morphTargets!==Be||je.morphNormals!==$e||je.morphColors!==kt||je.toneMapping!==ln||ae.isWebGL2===!0&&je.morphTargetsCount!==St)&&(Pt=!0):(Pt=!0,je.__version=k.version);let ii=je.currentProgram;Pt===!0&&(ii=Dn(k,F,j));let za=!1,lr=!1,Cs=!1;const Bt=ii.getUniforms(),ri=je.uniforms;if(we.useProgram(ii.program)&&(za=!0,lr=!0,Cs=!0),k.id!==E&&(E=k.id,lr=!0),za||L!==T){if(Bt.setValue(U,"projectionMatrix",T.projectionMatrix),ae.logarithmicDepthBuffer&&Bt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),L!==T&&(L=T,lr=!0,Cs=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const $t=Bt.map.cameraPosition;$t!==void 0&&$t.setValue(U,Q.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Bt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||j.isSkinnedMesh)&&Bt.setValue(U,"viewMatrix",T.matrixWorldInverse)}if(j.isSkinnedMesh){Bt.setOptional(U,j,"bindMatrix"),Bt.setOptional(U,j,"bindMatrixInverse");const $t=j.skeleton;$t&&(ae.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Bt.setValue(U,"boneTexture",$t.boneTexture,De),Bt.setValue(U,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ps=q.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&ae.isWebGL2===!0)&&ue.update(j,q,ii),(lr||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,Bt.setValue(U,"receiveShadow",j.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ri.envMap.value=Ne,ri.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),lr&&(Bt.setValue(U,"toneMappingExposure",u.toneMappingExposure),je.needsLights&&or(ri,Cs),oe&&k.fog===!0&&Dt.refreshFogUniforms(ri,oe),Dt.refreshMaterialUniforms(ri,k,C,O,se),ls.upload(U,je.uniformsList,ri,De)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ls.upload(U,je.uniformsList,ri,De),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Bt.setValue(U,"center",j.center),Bt.setValue(U,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(U,"normalMatrix",j.normalMatrix),Bt.setValue(U,"modelMatrix",j.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const $t=k.uniformsGroups;for(let Ls=0,Qc=$t.length;Ls<Qc;Ls++)if(ae.isWebGL2){const ka=$t[Ls];be.update(ka,ii),be.bind(ka,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function or(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function In(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,F,q){Se.get(T.texture).__webglTexture=F,Se.get(T.depthTexture).__webglTexture=q;const k=Se.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=q===void 0,k.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const q=Se.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){y=T,M=F,g=q;let k=!0,j=null,oe=!1,pe=!1;if(T){const Ne=Se.get(T);Ne.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),k=!1):Ne.__webglFramebuffer===void 0?De.setupRenderTarget(T):Ne.__hasExternalTextures&&De.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);const ze=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(j=ze[F],oe=!0):ae.isWebGL2&&T.samples>0&&De.useMultisampledRTT(T)===!1?j=Se.get(T).__webglMultisampledFramebuffer:j=ze,A.copy(T.viewport),b.copy(T.scissor),S=T.scissorTest}else A.copy(Z).multiplyScalar(C).floor(),b.copy(R).multiplyScalar(C).floor(),S=W;if(we.bindFramebuffer(36160,j)&&ae.drawBuffers&&k&&we.drawBuffers(T,j),we.viewport(A),we.scissor(b),we.setScissorTest(S),oe){const Ne=Se.get(T.texture);U.framebufferTexture2D(36160,36064,34069+F,Ne.__webglTexture,q)}else if(pe){const Ne=Se.get(T.texture),Fe=F||0;U.framebufferTextureLayer(36160,36064,Ne.__webglTexture,q||0,Fe)}E=-1},this.readRenderTargetPixels=function(T,F,q,k,j,oe,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(Le=Le[pe]),Le){we.bindFramebuffer(36160,Le);try{const Ne=T.texture,Fe=Ne.format,ze=Ne.type;if(Fe!==mn&&Y.convert(Fe)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Ar&&(Te.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Te.has("EXT_color_buffer_float"));if(ze!==Mi&&Y.convert(ze)!==U.getParameter(35738)&&!(ze===gi&&(ae.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-k&&q>=0&&q<=T.height-j&&U.readPixels(F,q,k,j,Y.convert(Fe),Y.convert(ze),oe)}finally{const Ne=y!==null?Se.get(y).__webglFramebuffer:null;we.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(T,F,q=0){const k=Math.pow(2,-q),j=Math.floor(F.image.width*k),oe=Math.floor(F.image.height*k);De.setTexture2D(F,0),U.copyTexSubImage2D(3553,q,0,0,T.x,T.y,j,oe),we.unbindTexture()},this.copyTextureToTexture=function(T,F,q,k=0){const j=F.image.width,oe=F.image.height,pe=Y.convert(q.format),Le=Y.convert(q.type);De.setTexture2D(q,0),U.pixelStorei(37440,q.flipY),U.pixelStorei(37441,q.premultiplyAlpha),U.pixelStorei(3317,q.unpackAlignment),F.isDataTexture?U.texSubImage2D(3553,k,T.x,T.y,j,oe,pe,Le,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(3553,k,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,pe,F.mipmaps[0].data):U.texSubImage2D(3553,k,T.x,T.y,pe,Le,F.image),k===0&&q.generateMipmaps&&U.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(T,F,q,k,j=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=T.max.x-T.min.x+1,pe=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Ne=Y.convert(k.format),Fe=Y.convert(k.type);let ze;if(k.isData3DTexture)De.setTexture3D(k,0),ze=32879;else if(k.isDataArrayTexture)De.setTexture2DArray(k,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,k.flipY),U.pixelStorei(37441,k.premultiplyAlpha),U.pixelStorei(3317,k.unpackAlignment);const Be=U.getParameter(3314),$e=U.getParameter(32878),kt=U.getParameter(3316),ln=U.getParameter(3315),ni=U.getParameter(32877),St=q.isCompressedTexture?q.mipmaps[0]:q.image;U.pixelStorei(3314,St.width),U.pixelStorei(32878,St.height),U.pixelStorei(3316,T.min.x),U.pixelStorei(3315,T.min.y),U.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?U.texSubImage3D(ze,j,F.x,F.y,F.z,oe,pe,Le,Ne,Fe,St.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ze,j,F.x,F.y,F.z,oe,pe,Le,Ne,St.data)):U.texSubImage3D(ze,j,F.x,F.y,F.z,oe,pe,Le,Ne,Fe,St),U.pixelStorei(3314,Be),U.pixelStorei(32878,$e),U.pixelStorei(3316,kt),U.pixelStorei(3315,ln),U.pixelStorei(32877,ni),j===0&&k.generateMipmaps&&U.generateMipmap(ze),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?De.setTextureCube(T,0):T.isData3DTexture?De.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?De.setTexture2DArray(T,0):De.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){M=0,g=0,y=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class mg extends Ic{}mg.prototype.isWebGL1Renderer=!0;class gg extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Uc extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sl=new D,al=new D,ol=new mt,aa=new Pa,ts=new Ms;class Yn extends yt{constructor(e=new Xt,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)sl.fromBufferAttribute(t,i-1),al.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sl.distanceTo(al);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(i),ts.radius+=s,e.ray.intersectsSphere(ts)===!1)return;ol.copy(i).invert(),aa.copy(e.ray).applyMatrix4(ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,h=new D,d=new D,f=new D,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const u=Math.max(0,a.start),_=Math.min(v.count,a.start+a.count);for(let M=u,g=_-1;M<g;M+=p){const y=v.getX(M),E=v.getX(M+1);if(c.fromBufferAttribute(m,y),h.fromBufferAttribute(m,E),aa.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let M=u,g=_-1;M<g;M+=p){if(c.fromBufferAttribute(m,M),h.fromBufferAttribute(m,M+1),aa.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Ft extends Xt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],f=[],p=[];let v=0;const x=[],m=n/2;let u=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(p,2));function _(){const g=new D,y=new D;let E=0;const L=(t-e)/n;for(let A=0;A<=s;A++){const b=[],S=A/s,G=S*(t-e)+e;for(let O=0;O<=i;O++){const C=O/i,N=C*l+o,z=Math.sin(N),Z=Math.cos(N);y.x=G*z,y.y=-S*n+m,y.z=G*Z,d.push(y.x,y.y,y.z),g.set(z,L,Z).normalize(),f.push(g.x,g.y,g.z),p.push(C,1-S),b.push(v++)}x.push(b)}for(let A=0;A<i;A++)for(let b=0;b<s;b++){const S=x[b][A],G=x[b+1][A],O=x[b+1][A+1],C=x[b][A+1];h.push(S,G,C),h.push(G,O,C),E+=6}c.addGroup(u,E,0),u+=E}function M(g){const y=v,E=new qe,L=new D;let A=0;const b=g===!0?e:t,S=g===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),v++;const G=v;for(let O=0;O<=i;O++){const N=O/i*l+o,z=Math.cos(N),Z=Math.sin(N);L.x=b*Z,L.y=m*S,L.z=b*z,d.push(L.x,L.y,L.z),f.push(0,S,0),E.x=z*.5+.5,E.y=Z*.5*S+.5,p.push(E.x,E.y),v++}for(let O=0;O<i;O++){const C=y+O,N=G+O;g===!0?h.push(N,N+1,C):h.push(N+1,N,C),A+=3}c.addGroup(u,A,g===!0?1:2),u+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new D,g=new D,y=new D;for(let E=0;E<t.length;E+=3)p(t[E+0],M),p(t[E+1],g),p(t[E+2],y),l(M,g,y,_)}function l(_,M,g,y){const E=y+1,L=[];for(let A=0;A<=E;A++){L[A]=[];const b=_.clone().lerp(g,A/E),S=M.clone().lerp(g,A/E),G=E-A;for(let O=0;O<=G;O++)O===0&&A===E?L[A][O]=b:L[A][O]=b.clone().lerp(S,O/G)}for(let A=0;A<E;A++)for(let b=0;b<2*(E-A)-1;b++){const S=Math.floor(b/2);b%2===0?(f(L[A][S+1]),f(L[A+1][S]),f(L[A][S])):(f(L[A][S+1]),f(L[A+1][S+1]),f(L[A+1][S]))}}function c(_){const M=new D;for(let g=0;g<s.length;g+=3)M.x=s[g+0],M.y=s[g+1],M.z=s[g+2],M.normalize().multiplyScalar(_),s[g+0]=M.x,s[g+1]=M.y,s[g+2]=M.z}function h(){const _=new D;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];const g=m(_)/2/Math.PI+.5,y=u(_)/Math.PI+.5;a.push(g,1-y)}v(),d()}function d(){for(let _=0;_<a.length;_+=6){const M=a[_+0],g=a[_+2],y=a[_+4],E=Math.max(M,g,y),L=Math.min(M,g,y);E>.9&&L<.1&&(M<.2&&(a[_+0]+=1),g<.2&&(a[_+2]+=1),y<.2&&(a[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function p(_,M){const g=_*3;M.x=e[g+0],M.y=e[g+1],M.z=e[g+2]}function v(){const _=new D,M=new D,g=new D,y=new D,E=new qe,L=new qe,A=new qe;for(let b=0,S=0;b<s.length;b+=9,S+=6){_.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),g.set(s[b+6],s[b+7],s[b+8]),E.set(a[S+0],a[S+1]),L.set(a[S+2],a[S+3]),A.set(a[S+4],a[S+5]),y.copy(_).add(M).add(g).divideScalar(3);const G=m(y);x(E,S+0,_,G),x(L,S+2,M,G),x(A,S+4,g,G)}}function x(_,M,g,y){y<0&&_.x===1&&(a[M]=_.x-1),g.x===0&&g.z===0&&(a[M]=y/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function u(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.vertices,e.indices,e.radius,e.details)}}class Wi extends Ia{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wi(e.radius,e.detail)}}class Ua extends Xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,f=new D,p=[],v=[],x=[],m=[];for(let u=0;u<=n;u++){const _=[],M=u/n;let g=0;u===0&&a===0?g=.5/t:u===n&&l===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){const E=y/t;d.x=-e*Math.cos(i+E*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(i+E*s)*Math.sin(a+M*o),v.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(E+g,1-M),_.push(c++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<t;_++){const M=h[u][_+1],g=h[u][_],y=h[u+1][_],E=h[u+1][_+1];(u!==0||a>0)&&p.push(M,g,E),(u!==n-1||l<Math.PI)&&p.push(g,y,E)}this.setIndex(p),this.setAttribute("position",new ht(v,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class di extends Xt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,d=new D,f=new D;for(let p=0;p<=n;p++)for(let v=0;v<=i;v++){const x=v/i*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=i;v++){const x=(i+1)*p+v-1,m=(i+1)*(p-1)+v-1,u=(i+1)*(p-1)+v,_=(i+1)*p+v;a.push(x,m,_),a.push(m,u,_)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _g extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ll={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class vg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Nc=new vg;class Oc{constructor(e){this.manager=e!==void 0?e:Nc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class xg extends Oc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ll.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Lr("img");function l(){h(),ll.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class cl extends Oc{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,a=new xg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ul();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ul(){return(typeof performance=="undefined"?Date:performance).now()}class zc{constructor(e,t,n=0,i=1/0){this.ray=new Pa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new La,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort(fl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ya(e[i],this,n,t);return n.sort(fl),n}}function fl(r,e){return r.distance-e.distance}function ya(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)ya(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);const Mg=()=>{const r={show:Ye(!1),cameraPosition:Ye({x:0,y:0,z:1}),cameraLookAt:Ye({x:0,y:0,z:10}),objectPosition:Ye({x:0,y:0,z:10}),objectEuler:Ye(new Si(0,0,0,"ZXY")),cartEntity:Ye(0)};return{...r,...{setupModel(t){r.cameraPosition.set(Gi(t.cameraPosition)),r.cameraLookAt.set(Gi(t.cameraLookAt)),r.objectPosition.set(Gi(t.objectPosition)),r.objectEuler.set(new Si(Qt.degToRad(t.objectRotation.x),Qt.degToRad(t.objectRotation.z),Qt.degToRad(t.objectRotation.y),"YZX")),r.show.set(!0),r.cartEntity.set(t.cartEntity)},updateCamera(t){r.cameraPosition.set(Gi(t.cameraPosition)),r.cameraLookAt.set(Gi(t.cameraLookAt))},updateCameraPosition(t){r.cameraPosition.set(t.cameraPosition)},updateCameraLookAt(t){r.cameraLookAt.set(t.cameraLookAt)},sendMovementUpdate(t){Rt("moveObject",t)},sendRotationUpdate(t){const n=os(t);Rt("rotateObject",{x:Qt.radToDeg(n.x).toFixed(2),y:Qt.radToDeg(n.y).toFixed(2),z:Qt.radToDeg(n.z).toFixed(2)})}}}};var Gn=Mg();function hl(r){let e,t;const n=r[2].default,i=An(n,r,r[1],null);return{c(){e=ie("main"),i&&i.c(),J(e,"class","svelte-1fnr7mh")},m(s,a){Qe(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&2)&&Pn(i,n,s,s[1],t?Cn(n,s[1],a,null):Ln(s[1]),null)},i(s){t||(ye(i,s),t=!0)},o(s){Ce(i,s),t=!1},d(s){s&&Ze(e),i&&i.d(s)}}}function Sg(r){let e,t,n=r[0]&&hl(r);return{c(){n&&n.c(),e=er()},m(i,s){n&&n.m(i,s),Qe(i,e,s),t=!0},p(i,[s]){i[0]?n?(n.p(i,s),s&1&&ye(n,1)):(n=hl(i),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(vi(),Ce(n,1,1,()=>{n=null}),xi())},i(i){t||(ye(n),t=!0)},o(i){Ce(n),t=!1},d(i){n&&n.d(i),i&&Ze(e)}}}function bg(r,e,t){let n;Re(r,jt,o=>t(3,n=o));let{$$slots:i={},$$scope:s}=e,a;return Sr.subscribe(o=>{t(0,a=o)}),vn("setVisible",o=>{Sr.set(o),o&&He(jt,n=!1,n)}),nr(()=>{const o=l=>{a&&["Escape"].includes(l.code)&&(Rt("hideUI"),Sr.set(!1),Gn.show.set(!1))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}),r.$$set=o=>{"$$scope"in o&&t(1,s=o.$$scope)},[a,s,i]}class yg extends _t{constructor(e){super(),gt(this,e,bg,Sg,pt,{})}}const wg=()=>!window.invokeNative,wa=(r,e=0)=>{if(wg())for(const t of r)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:t.action,data:t.data}}))},e)};function dl(r,e,t){const n=r.slice();return n[6]=e[t],n}function pl(r,e,t){const n=r.slice();return n[9]=e[t],n}function ml(r){let e,t=r[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=_l(dl(r,t,i));return{c(){e=ie("div");for(let i=0;i<n.length;i+=1)n[i].c();J(e,"class","w-fit h-fit bg-gray-600 p-2 ")},m(i,s){Qe(i,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(i,s){if(s&2){t=i[1];let a;for(a=0;a<t.length;a+=1){const o=dl(i,t,a);n[a]?n[a].p(o,s):(n[a]=_l(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&Ze(e),Rr(n,i)}}}function gl(r){let e,t=r[9].name+"",n,i,s;function a(){return r[3](r[9])}return{c(){e=ie("button"),n=ot(t),J(e,"class","bg-blue-500 text-white p-2")},m(o,l){Qe(o,e,l),B(e,n),i||(s=Ue(e,"click",a),i=!0)},p(o,l){r=o},d(o){o&&Ze(e),i=!1,s()}}}function _l(r){let e,t,n=r[6].component+"",i,s,a,o=r[6].actions,l=[];for(let c=0;c<o.length;c+=1)l[c]=gl(pl(r,o,c));return{c(){e=ie("div"),t=ie("p"),i=ot(n),s=ge();for(let c=0;c<l.length;c+=1)l[c].c();a=ge(),J(t,"class","text-white"),J(e,"class","flex flex-row gap-2 items-center m-1")},m(c,h){Qe(c,e,h),B(e,t),B(t,i),B(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);B(e,a)},p(c,h){if(h&2){o=c[6].actions;let d;for(d=0;d<o.length;d+=1){const f=pl(c,o,d);l[d]?l[d].p(f,h):(l[d]=gl(f),l[d].c(),l[d].m(e,a))}for(;d<l.length;d+=1)l[d].d(1);l.length=o.length}},d(c){c&&Ze(e),Rr(l,c)}}}function Eg(r){let e,t,n,i,s,a=r[0]&&ml(r);return{c(){e=ie("div"),t=ie("button"),t.textContent="Show",n=ge(),a&&a.c(),J(t,"class","bg-red-500 text-white p-2"),J(e,"class","absolute top-0 left-1/2 z-[1000]")},m(o,l){Qe(o,e,l),B(e,t),B(e,n),a&&a.m(e,null),i||(s=Ue(t,"click",r[2]),i=!0)},p(o,[l]){o[0]?a?a.p(o,l):(a=ml(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:Et,o:Et,d(o){o&&Ze(e),a&&a.d(),i=!1,s()}}}function Tg(r,e,t){let n=!1,i=[{label:"Item 1",object:"v_res_d_coffeetable",price:100},{label:"Item 2",object:"v_res_d_coffeetable",price:100},{label:"Item 3",object:"v_res_d_coffeetable",price:100},{label:"Item 4",object:"v_res_d_coffeetable",price:100},{label:"Item 5",object:"v_res_d_coffeetable",price:100}];return[n,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"Furniture",actions:[{name:"Set Furniture Data",action:"setFurnituresData",data:[{category:"Category 1",items:i},{category:"Category 2",items:i},{category:"Category 3",items:i},{category:"Category 4",items:i},{category:"Category 5",items:i}]}]}],()=>{t(0,n=!n)},c=>{if(c.custom==!0){c.customFunction();return}wa([{action:c.action,data:c.data}])}]}class Ag extends _t{constructor(e){super(),gt(this,e,Tg,Eg,pt,{})}}function vl(r,e,t){const n=r.slice();return n[9]=e[t],n[11]=t,n}function xl(r){let e,t,n,i=r[9].label+"",s,a,o,l,c=r[9].price+"",h,d,f,p,v,x;function m(){return r[5](r[9])}function u(){return r[7](r[9])}return{c(){e=ie("button"),t=ie("div"),n=ie("p"),s=ot(i),a=ge(),o=ie("p"),l=ot("$"),h=ot(c),d=ge(),f=ie("div"),f.innerHTML='<i class="fas fa-eye text-[color:var(--color-text)] text-[2.5rem]"></i>',p=ge(),J(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),J(o,"class","text-[color:var(--color-text)] text-[2rem]"),J(t,"class","w-full h-full flex flex-col justify-center items-start "),J(f,"class","bg-[color:var(--color-tertiary)] aspect-square h-[5rem] grid place-items-center justify-center items-center"),J(e,"class","h-full w-[30rem] bg-[color:var(--color-secondary)] flex flex-row items-center px-[1.5rem] py-[0.5rem] hover:cursor-pointer")},m(_,M){Qe(_,e,M),B(e,t),B(t,n),B(n,s),B(t,a),B(t,o),B(o,l),B(o,h),B(e,d),B(e,f),B(e,p),v||(x=[Ue(f,"mouseenter",m),Ue(f,"mouseleave",r[6]),Ue(e,"click",u)],v=!0)},p(_,M){r=_,M&2&&i!==(i=r[9].label+"")&&It(s,i),M&2&&c!==(c=r[9].price+"")&&It(h,c)},d(_){_&&Ze(e),v=!1,sn(x)}}}function Cg(r){let e,t,n,i,s=r[1].items,a=[];for(let o=0;o<s.length;o+=1)a[o]=xl(vl(r,s,o));return{c(){e=ie("div"),t=ie("div");for(let o=0;o<a.length;o+=1)a[o].c();J(t,"class","grid grid-rows-2 grid-flow-col-dense gap-[1rem] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style scroll-style-horizontal"),J(e,"class","w-full h-[24rem] bg-[color:var(--color-primary)] p-[1rem]")},m(o,l){Qe(o,e,l),B(e,t);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);r[8](t),n||(i=Ue(t,"wheel",r[4]),n=!0)},p(o,[l]){if(l&14){s=o[1].items;let c;for(c=0;c<s.length;c+=1){const h=vl(o,s,c);a[c]?a[c].p(h,l):(a[c]=xl(h),a[c].c(),a[c].m(t,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:Et,o:Et,d(o){o&&Ze(e),Rr(a,o),r[8](null),n=!1,i()}}}function Pg(r,e,t){let n,i,s;Re(r,Qn,f=>t(1,n=f)),Re(r,hs,f=>t(2,i=f)),Re(r,jt,f=>t(3,s=f));let a;function o(f){f=window.event||f;var p=Math.max(-1,Math.min(1,f.wheelDelta||-f.detail));t(0,a.scrollLeft-=p*50,a),f.preventDefault()}const l=f=>{Rt("hoverIn",f)},c=()=>{Rt("hoverOut")},h=f=>{Rt("previewFurniture",f),He(hs,i=f,i),He(jt,s=!0,s)};function d(f){Hn[f?"unshift":"push"](()=>{a=f,t(0,a)})}return[a,n,i,s,o,l,c,h,d]}class Lg extends _t{constructor(e){super(),gt(this,e,Pg,Cg,pt,{})}}function Rg(r,e,t){let n,i,s,a;Re(r,Bn,l=>t(0,n=l)),Re(r,jt,l=>t(1,i=l)),Re(r,fs,l=>t(2,s=l)),Re(r,Sr,l=>t(3,a=l)),wa([{action:"setVisible",data:!0}]),wa([{action:"setBrowserMode",data:!0}]);function o(l){l.key==="="&&He(Sr,a=!0,a)}return vn("setBrowserMode",l=>{vs.set(l),console.log("browser mode enabled"),l?window.addEventListener("keydown",o):window.removeEventListener("keydown",o)}),vn("setupModel",l=>{Gn.show.set(!0),Gn.setupModel(l)}),vn("updateCamera",l=>{Gn.updateCamera(l)}),vn("setFurnituresData",l=>{fs.set(l),Qn.set(s[0])}),vn("addToCart",l=>{He(Bn,n=[...n,l],n),Gn.show.set(!1),He(jt,i=!1,i)}),vn("removeFromCart",l=>{He(Bn,n=n.filter(c=>c.entity!==l.entity),n),He(Bn,n=[...n],n)}),vn("clearCart",()=>{He(Bn,n=[],n)}),[]}class Dg extends _t{constructor(e){super(),gt(this,e,Rg,null,pt,{})}}function Ml(r,e,t){const n=r.slice();return n[17]=e[t],n[19]=t,n}function Sl(r){let e,t,n;return{c(){e=ie("input"),e.autofocus=!0,J(e,"class","min-w-[10rem] h-[4.5rem] px-[1rem] text-[2rem] bg-[color:var(--color-tertiary)]"),J(e,"type","text"),J(e,"placeholder","Search")},m(i,s){Qe(i,e,s),Mn(e,r[1]),e.focus(),t||(n=Ue(e,"input",r[11]),t=!0)},p(i,s){s&2&&e.value!==i[1]&&Mn(e,i[1])},d(i){i&&Ze(e),t=!1,n()}}}function bl(r){let e,t=r[17].category+"",n,i,s;function a(){return r[13](r[19])}return{c(){e=ie("button"),n=ot(t),J(e,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),us(e,"selected",r[0]===r[19])},m(o,l){Qe(o,e,l),B(e,n),i||(s=Ue(e,"click",a),i=!0)},p(o,l){r=o,l&4&&t!==(t=r[17].category+"")&&It(n,t),l&1&&us(e,"selected",r[0]===r[19])},d(o){o&&Ze(e),i=!1,s()}}}function Ig(r){let e,t,n,i,s,a,o,l,c,h,d,f,p,v,x,m,u,_=r[8].length+"",M,g,y,E,L,A,b,S=r[4]&&Sl(r),G=r[2],O=[];for(let C=0;C<G.length;C+=1)O[C]=bl(Ml(r,G,C));return{c(){e=ie("div"),t=ie("button"),n=ie("button"),n.innerHTML='<i class="fas fa-magnifying-glass text-[2rem]"></i>',i=ge(),S&&S.c(),a=ge(),o=ie("div"),l=ie("button"),l.textContent="Show All",c=ge();for(let C=0;C<O.length;C+=1)O[C].c();h=ge(),d=ie("div"),f=ie("button"),f.innerHTML=`<p class="w-fit whitespace-nowrap">Owned Furniture</p> 
			<span class="h-fit px-[1rem] bg-[color:var(--color-tertiary)]">0</span>`,p=ge(),v=ie("button"),x=ie("i"),m=ge(),u=ie("span"),M=ot(_),g=ge(),y=ie("button"),E=ie("i"),J(n,"class","h-[4.5rem] w-[5rem] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"),J(t,"class",s="h-[4.5rem] "+(r[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"),J(l,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),us(l,"selected",r[0]===-1),J(o,"class","w-full h-[5rem] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories svelte-vkl3yg"),J(f,"class","w-fit px-[2rem] items-center justify-center break h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"),J(x,"class","fas fa-shopping-cart"),J(u,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),J(v,"class","h-[4.5rem] w-fit px-[2rem] text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),J(E,"class",L="fas fa-chevron-"+(r[6]?"up":"down")),J(y,"class","h-[4.5rem] w-fit aspect-square text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),J(d,"class","overflow-y-visible flex flex-row gap-2 ml-auto"),J(e,"class","w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap")},m(C,N){Qe(C,e,N),B(e,t),B(t,n),B(t,i),S&&S.m(t,null),B(e,a),B(e,o),B(o,l),B(o,c);for(let z=0;z<O.length;z+=1)O[z]&&O[z].m(o,null);r[14](o),B(e,h),B(e,d),B(d,f),B(d,p),B(d,v),B(v,x),B(v,m),B(v,u),B(u,M),B(d,g),B(d,y),B(y,E),A||(b=[Ue(n,"click",r[10]),Ue(l,"click",r[12]),Ue(o,"wheel",r[9]),Ue(v,"click",r[15]),Ue(y,"click",r[16])],A=!0)},p(C,[N]){if(C[4]?S?S.p(C,N):(S=Sl(C),S.c(),S.m(t,null)):S&&(S.d(1),S=null),N&16&&s!==(s="h-[4.5rem] "+(C[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center")&&J(t,"class",s),N&1&&us(l,"selected",C[0]===-1),N&101){G=C[2];let z;for(z=0;z<G.length;z+=1){const Z=Ml(C,G,z);O[z]?O[z].p(Z,N):(O[z]=bl(Z),O[z].c(),O[z].m(o,null))}for(;z<O.length;z+=1)O[z].d(1);O.length=G.length}N&256&&_!==(_=C[8].length+"")&&It(M,_),N&64&&L!==(L="fas fa-chevron-"+(C[6]?"up":"down"))&&J(E,"class",L)},i:Et,o:Et,d(C){C&&Ze(e),S&&S.d(),Rr(O,C),r[14](null),A=!1,sn(b)}}}function Ug(r,e,t){let n,i,s,a,o;Re(r,fs,g=>t(2,n=g)),Re(r,Qn,g=>t(5,i=g)),Re(r,jt,g=>t(6,s=g)),Re(r,ds,g=>t(7,a=g)),Re(r,Bn,g=>t(8,o=g));let l=-1,c;function h(g){g=window.event||g;var y=Math.max(-1,Math.min(1,g.wheelDelta||-g.detail));t(3,c.scrollLeft-=y*50,c),g.preventDefault()}let d=!1,f="";const p=()=>{t(4,d=!d),s&&He(jt,s=!1,s)};function v(){f=this.value,t(1,f)}const x=()=>{t(0,l=-1);const g=n.flatMap(y=>y.items);He(Qn,i={category:"Show All",items:g},i),s&&He(jt,s=!1,s)},m=g=>{t(0,l=g),He(Qn,i=n[g],i),s&&He(jt,s=!1,s)};function u(g){Hn[g?"unshift":"push"](()=>{c=g,t(3,c)})}const _=()=>{He(ds,a=!a,a)},M=()=>{He(jt,s=!s,s)};return r.$$.update=()=>{if(r.$$.dirty&7)if(f.length>0){let g=null;l==-1?g=n.flatMap(E=>E.items):g=n[l].items;const y=g.filter(E=>E.label.toLowerCase().includes(f.toLowerCase()));He(Qn,i={category:"Search Results",items:y},i)}else if(l===-1){const g=n.flatMap(y=>y.items);He(Qn,i={category:"Show All",items:g},i)}else He(Qn,i=n[l],i)},[l,f,n,c,d,i,s,a,o,h,p,v,x,m,u,_,M]}class Ng extends _t{constructor(e){super(),gt(this,e,Ug,Ig,pt,{})}}function yl(r,e,t){const n=r.slice();return n[6]=e[t],n[8]=t,n}function wl(r){let e,t,n,i,s,a,o,l,c,h,d,f=r[1].reduce(Tl,0)+"",p,v,x,m,u,_=r[1],M=[];for(let g=0;g<_.length;g+=1)M[g]=El(yl(r,_,g));return{c(){e=ie("div"),t=ie("div"),n=ie("h1"),n.textContent="Cart",i=ge(),s=ie("button"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',a=ge(),o=ie("div");for(let g=0;g<M.length;g+=1)M[g].c();l=ge(),c=ie("div"),h=ie("h1"),d=ot("Total: $"),p=ot(f),v=ge(),x=ie("button"),x.innerHTML=`<p>Buy</p> 
				<i class="fa-solid fa-check"></i>`,J(n,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"),J(s,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"),J(t,"class","flex flex-row gap-2"),J(o,"class","flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"),J(h,"class","bg-[color:var(--color-secondary)] text-[2rem] w-full h-full flex items-center px-4"),J(x,"class","bg-[color:var(--color-secondary)] text-[2rem] h-full gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"),J(c,"class","flex flex-row gap-2 items-center justify-center h-[5rem]"),J(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]")},m(g,y){Qe(g,e,y),B(e,t),B(t,n),B(t,i),B(t,s),B(e,a),B(e,o);for(let E=0;E<M.length;E+=1)M[E]&&M[E].m(o,null);B(e,l),B(e,c),B(c,h),B(h,d),B(h,p),B(c,v),B(c,x),m||(u=[Ue(s,"click",r[2]),Ue(x,"click",r[5])],m=!0)},p(g,y){if(y&2){_=g[1];let E;for(E=0;E<_.length;E+=1){const L=yl(g,_,E);M[E]?M[E].p(L,y):(M[E]=El(L),M[E].c(),M[E].m(o,null))}for(;E<M.length;E+=1)M[E].d(1);M.length=_.length}y&2&&f!==(f=g[1].reduce(Tl,0)+"")&&It(p,f)},d(g){g&&Ze(e),Rr(M,g),m=!1,sn(u)}}}function El(r){let e,t,n,i,s,a=r[6].label+"",o,l,c,h,d=r[6].price+"",f,p,v,x,m,u;function _(){return r[3](r[6])}function M(){return r[4](r[6])}return{c(){e=ie("div"),t=ie("button"),t.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',n=ge(),i=ie("div"),s=ie("h1"),o=ot(a),l=ge(),c=ie("h1"),h=ot("$"),f=ot(d),p=ge(),v=ie("button"),v.innerHTML='<i class="fa-solid fa-xmark"></i>',x=ge(),J(t,"class","bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"),J(s,"class","text-[2rem]"),J(c,"class","text-[1.5rem]"),J(i,"class","flex flex-col gap-2 w-full"),J(v,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"),J(e,"class","flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center")},m(g,y){Qe(g,e,y),B(e,t),B(e,n),B(e,i),B(i,s),B(s,o),B(i,l),B(i,c),B(c,h),B(c,f),B(e,p),B(e,v),B(e,x),m||(u=[Ue(t,"click",_),Ue(v,"click",M)],m=!0)},p(g,y){r=g,y&2&&a!==(a=r[6].label+"")&&It(o,a),y&2&&d!==(d=r[6].price+"")&&It(f,d)},d(g){g&&Ze(e),m=!1,sn(u)}}}function Og(r){let e,t=r[0]&&wl(r);return{c(){t&&t.c(),e=er()},m(n,i){t&&t.m(n,i),Qe(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=wl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Et,o:Et,d(n){t&&t.d(n),n&&Ze(e)}}}const Tl=(r,e)=>r+e.price;function Fg(r,e,t){let n,i;return Re(r,ds,c=>t(0,n=c)),Re(r,Bn,c=>t(1,i=c)),[n,i,()=>He(ds,n=!1,n),c=>{Rt("selectCartItem",c)},c=>{Rt("removeCartItem",c)},()=>{Rt("buyCartItems")}]}class zg extends _t{constructor(e){super(),gt(this,e,Fg,Og,pt,{})}}function kg(r){let e,t,n,i,s,a,o,l,c,h,d,f,p,v,x,m,u=r[1].toFixed(1)+"",_,M,g,y,E,L,A;return t=new Ng({}),i=new Lg({}),a=new zg({}),{c(){e=ie("div"),lt(t.$$.fragment),n=ge(),lt(i.$$.fragment),s=ge(),lt(a.$$.fragment),o=ge(),l=ie("div"),c=ie("i"),h=ge(),d=ie("p"),d.textContent="C",f=ge(),p=ie("div"),v=ie("i"),x=ge(),m=ie("p"),_=ot(u),M=ge(),g=ie("input"),J(c,"class","fa-solid fa-video text-[white]"),J(d,"class","font-semibold"),Ha(l,"border-color",r[0]?"white":"var(--color-tertiary)"),J(l,"class","absolute -top-[5rem] text-[2rem] right-0 w-[8rem] border-[0.3rem] h-[4rem] bg-[color:var(--color-primary)] flex flex-row gap-[1rem] items-center justify-center"),J(v,"class","fa-solid fa-eye text-[white]"),J(m,"class","font-semibold text-center w-[4rem]"),J(g,"id","slider"),J(g,"type","range"),J(g,"min","1.0"),J(g,"max","12.5"),J(g,"step","0.5"),J(g,"class","w-full"),J(p,"class","flex flex-row gap-[1rem] items-center absolute left-0 -top-[5rem] w-[30rem] h-fit p-4 bg-[color:var(--color-primary)]"),J(e,"class",y="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(r[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1]")},m(b,S){Qe(b,e,S),it(t,e,null),B(e,n),it(i,e,null),B(e,s),it(a,e,null),B(e,o),B(e,l),B(l,c),B(l,h),B(l,d),B(e,f),B(e,p),B(p,v),B(p,x),B(p,m),B(m,_),B(p,M),B(p,g),Mn(g,r[1]),E=!0,L||(A=[Ue(g,"change",r[3]),Ue(g,"input",r[3]),Ue(g,"change",r[4])],L=!0)},p(b,[S]){(!E||S&1)&&Ha(l,"border-color",b[0]?"white":"var(--color-tertiary)"),(!E||S&2)&&u!==(u=b[1].toFixed(1)+"")&&It(_,u),S&2&&Mn(g,b[1]),(!E||S&4&&y!==(y="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(b[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1]"))&&J(e,"class",y)},i(b){E||(ye(t.$$.fragment,b),ye(i.$$.fragment,b),ye(a.$$.fragment,b),E=!0)},o(b){Ce(t.$$.fragment,b),Ce(i.$$.fragment,b),Ce(a.$$.fragment,b),E=!1},d(b){b&&Ze(e),rt(t),rt(i),rt(a),L=!1,sn(A)}}}function Bg(r,e,t){let n;Re(r,jt,c=>t(2,n=c));let i=!1,s=5;function a(c){c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement||c.key==="c"&&(Rt("freecamMode",!0),He(jt,n=!0,n),t(0,i=!0))}vn("freecamMode",c=>{c==!1&&(He(jt,n=!1,n),t(0,i=!1))}),nr(()=>{window.addEventListener("keypress",a),Rt("freecamMode",!1),Rt("setHoverDistance",s),He(jt,n=!1,n),t(0,i=!1)});function o(){s=ss(this.value),t(1,s)}return[i,s,n,o,()=>{Rt("setHoverDistance",s)}]}class Gg extends _t{constructor(e){super(),gt(this,e,Bg,kg,pt,{})}}const Hg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Vg=new Cc(-1,1,1,-1,0,1),Na=new Xt;Na.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3));Na.setAttribute("uv",new ht([0,2,0,0,2,0],2));class Wg{constructor(e){this._mesh=new de(Na,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jg extends ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wc.clone(e.uniforms),this.material=new Vn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Al extends ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Xg extends ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qg{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new qe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jg(Hg),this.clock=new Fc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Al!==void 0&&(a instanceof Al?n=!0:a instanceof Xg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kc extends ws{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Yg=(r,e,t)=>{r.renderer=new Ic({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new qg(r.renderer),r.composer.addPass(new kc(r.scene,Ta(r.camera)))},Cl=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=$n:r.renderer.outputEncoding=nt,t?r.renderer.toneMapping=wn:r.renderer.toneMapping=uc)},Pl=(r,e,t)=>{var n,i,s,a,o,l,c,h;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(a=(s=r.renderer).setPixelRatio)==null||a.call(s,t),(l=(o=r.composer).setSize)==null||l.call(o,e.width,e.height),(h=(c=r.composer).setPixelRatio)==null||h.call(c,t))},Ll=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},yn=r=>r.userData,Zg=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Bc=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),Qg=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,Kg=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);ct(i);let s;const a=r.pointer.subscribe(c=>s=c);ct(a);let o;const l=c=>{var f,p;c.preventDefault();const h=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Zg(r,c);const d=Jg(e,s,n);if(h==="pointerdown"&&(o=d?{object:d.object,instanceId:d.instanceId}:null),h==="click"){if(!$g(d,o)){o=null;return}o=null}!d||(p=(f=yn(d.object)).eventDispatcher)==null||p.call(f,h,{...d,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Jg(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Bc(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function $g(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const e_=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);ct(n);let i;const s=r.camera.subscribe(c=>i=c);ct(s);let a;const o=r.pointer.subscribe(c=>a=c);return ct(o),{raycast:()=>{var d,f,p,v,x,m,u,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Bc(e,a,i,Array.from(e.raycastableObjects)):[],h=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;h?e.lastIntersection?e.lastIntersection&&Qg(e.lastIntersection,h)&&((m=(x=yn(e.lastIntersection.object)).eventDispatcher)==null||m.call(x,"pointerleave",e.lastIntersection),(_=(u=yn(h.object)).eventDispatcher)==null||_.call(u,"pointerenter",h)):(v=(p=yn(h.object)).eventDispatcher)==null||v.call(p,"pointerenter",h):e.lastIntersection&&((f=(d=yn(e.lastIntersection.object)).eventDispatcher)==null||f.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=h}}},Es=typeof window!="undefined",t_=r=>{if(!Es)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),ct(()=>{!e||cancelAnimationFrame(e)})},n_=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var a,o;return((a=i.order)!=null?a:0)>((o=s.order)!=null?o:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},i_=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},r_=(r,e,t,n)=>{let i=Ta(r.camera);const s=r.camera.subscribe(o=>i=o);ct(s);const{raycast:a}=e_(r,e);t_(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!r.composer||!r.renderer||(n_(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),i_(t),t.frameInvalidated=!1,t.advance=!1))})},s_=()=>{const r=new rn(75,0,.1,1e3);return yn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},a_=r=>{const e=r.size.subscribe(t=>{yn(Ta(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});ct(e)},o_=(r,e,t,n,i,s,a)=>{const o={audioListeners:new Map,addAudioListener:(u,_)=>{if(_=_!=null?_:"default",o.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}o.audioListeners.set(_,u)},removeAudioListener:u=>{if(u=u!=null?u:"default",!o.audioListeners.has(u)){console.warn(`No AudioListener with the id "${u}" found, aborting.`);return}o.audioListeners.delete(u)},getAudioListener:u=>{if(u=u!=null?u:"default",!o.audioListeners.has(u)){console.warn(`No AudioListener with the id "${u}" found, aborting.`);return}return o.audioListeners.get(u)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:au([n,i],([u,_])=>u||_),pointer:Ye(new qe),pointerOverCanvas:Ye(!1),clock:new Fc,camera:Ye(s_()),scene:new gg,renderer:void 0,composer:void 0,invalidate:u=>{l.frameInvalidated=!0,l.debugFrameloop&&u&&(l.invalidations[u]=l.invalidations[u]?l.invalidations[u]+1:1)},advance:()=>{l.advance=!0}},h={flat:Ye(e),linear:Ye(r),dpr:Ye(t),setCamera:u=>{c.camera.set(u),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof kc&&(_.camera=u)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new zc,lastIntersection:null,addRaycastableObject:u=>{h.raycastableObjects.add(u)},removeRaycastableObject:u=>{h.raycastableObjects.delete(u)},addInteractiveObject:u=>{h.interactiveObjects.add(u)},removeInteractiveObject:u=>{h.interactiveObjects.delete(u)},addPass:u=>{!c.composer||(c.composer.addPass(u),c.invalidate("Canvas: adding pass"))},removePass:u=>{!c.composer||(c.composer.removePass(u),c.invalidate("Canvas: removing pass"))}},d={dispose:async(u=!1)=>{await Er(),!(!d.shouldDispose&&!u)&&(d.disposableObjects.forEach((_,M)=>{var g;(_===0||u)&&((g=M==null?void 0:M.dispose)==null||g.call(M),d.disposableObjects.delete(M))}),d.shouldDispose=!1)},collectDisposableObjects:(u,_)=>{const M=_!=null?_:[];return u&&((u==null?void 0:u.dispose)&&typeof u.dispose=="function"&&u.type!=="Scene"&&M.push(u),Object.entries(u).forEach(([g,y])=>{if(g==="parent"||g==="children"||typeof y!="object")return;const E=y;E!=null&&E.dispose&&d.collectDisposableObjects(E,M)})),M},addDisposableObjects:u=>{u.forEach(_=>{const M=d.disposableObjects.get(_);M?d.disposableObjects.set(_,M+1):d.disposableObjects.set(_,1)})},removeDisposableObjects:u=>{u.length!==0&&(u.forEach(_=>{const M=d.disposableObjects.get(_);M&&M>0&&d.disposableObjects.set(_,M-1)}),d.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return dn("threlte",c),dn("threlte-root",h),dn("threlte-render-context",l),dn("threlte-audio-context",o),dn("threlte-disposal-context",d),{ctx:c,rootCtx:h,renderCtx:l,audioCtx:o,disposalCtx:d,getCtx:()=>c,getRootCtx:()=>h,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>d}};function Ts(r,e){const t=Ye(r);let n=r;const i=t.subscribe(o=>n=o);return ct(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Rn=()=>Tn("threlte");function l_(r){let e;const t=r[8].default,n=An(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Pn(n,t,i,i[7],e?Cn(t,i[7],s,null):Ln(i[7]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}const c_=()=>({onChildMount:Tn("threlte-hierarchical-object-on-mount"),onChildDestroy:Tn("threlte-hierarchical-object-on-destroy")}),Gc=()=>Tn("threlte-hierarchical-parent-context");function u_(r,e,t){var u;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{o.push(_),t(1,o),l==null||l(_)};let{onChildDestroy:h=void 0}=e;const d=_=>{const M=o.findIndex(g=>g.uuid===_.uuid);M!==-1&&o.splice(M,1),t(1,o),h==null||h(_)},{invalidate:f}=Rn(),p=Gc();Re(r,p,_=>t(6,n=_));let{parent:v=n}=e;const x=c_();a&&((u=x.onChildMount)==null||u.call(x,a),f("HierarchicalObject: object added"));const m=Ts(a,(_,M)=>{var g,y;M&&((g=x.onChildDestroy)==null||g.call(x,M),f("HierarchicalObject: object added")),_&&((y=x.onChildMount)==null||y.call(x,_),f("HierarchicalObject: object removed"))});return ct(()=>{var _;a&&((_=x.onChildDestroy)==null||_.call(x,a),f("HierarchicalObject: object removed"))}),dn("threlte-hierarchical-object-on-mount",c),dn("threlte-hierarchical-object-on-destroy",d),dn("threlte-hierarchical-parent-context",m),r.$$set=_=>{"object"in _&&t(3,a=_.object),"children"in _&&t(1,o=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,h=_.onChildDestroy),"parent"in _&&t(2,v=_.parent),"$$scope"in _&&t(7,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,v=n),r.$$.dirty&8&&m.set(a)},[p,o,v,a,l,h,n,s,i]}class f_ extends _t{constructor(e){super(),gt(this,e,u_,l_,pt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function h_(r){let e;const t=r[1].default,n=An(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Pn(n,t,i,i[4],e?Cn(t,i[4],s,null):Ln(i[4]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function d_(r){let e,t;return e=new f_({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[h_]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function p_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class Oa extends _t{constructor(e){super(),gt(this,e,p_,d_,pt,{object:0})}}const m_=()=>{const r=Ye({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(a=>e=a);ct(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&r.set({width:o,height:l})},s=a=>{n=a,i(),window.addEventListener("resize",i)};return Es?(ct(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Rl(r){let e,t;return e=new Oa({props:{object:r[0].scene,$$slots:{default:[g_]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function g_(r){let e;const t=r[29].default,n=An(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Pn(n,t,i,i[33],e?Cn(t,i[33],s,null):Ln(i[33]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function __(r){let e,t,n,i,s=r[2]&&Rl(r);return{c(){e=ie("canvas"),s&&s.c(),J(e,"class","svelte-o3oskp")},m(a,o){Qe(a,e,o),s&&s.m(e,null),r[30](e),t=!0,n||(i=[eu(r[3].call(null,e)),Ue(e,"click",r[9]),Ue(e,"contextmenu",r[10]),Ue(e,"pointerup",r[13]),Ue(e,"pointerdown",r[11]),Ue(e,"pointermove",r[12]),Ue(e,"pointerenter",r[31]),Ue(e,"pointerleave",r[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&ye(s,1)):(s=Rl(a),s.c(),ye(s,1),s.m(e,null)):s&&(vi(),Ce(s,1,1,()=>{s=null}),xi())},i(a){t||(ye(s),t=!0)},o(a){Ce(s),t=!1},d(a){a&&Ze(e),s&&s.d(),r[30](null),n=!1,sn(i)}}}const Dl=new Set;function v_(r,e,t){let n,i,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=Es?window.devicePixelRatio:1}=e,{flat:h=!1}=e,{linear:d=!1}=e,{frameloop:f="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:v=!0}=e,{shadowMapType:x=ac}=e,{size:m=void 0}=e,{rendererParameters:u=void 0}=e,_,M=!1;const g=Ye(m),{parentSize:y,parentSizeAction:E}=m_(),L=o_(d,h,c,g,y,p,f),{getCtx:A,renderCtx:b,disposalCtx:S}=L,{ctx:G,rootCtx:O,audioCtx:C}=L;a_(G),Dl.add(G.invalidate),ct(()=>{Dl.delete(G.invalidate)});const{size:N,scene:z}=G;Re(r,N,U=>t(26,i=U));const{flat:Z,linear:R,dpr:W}=O;Re(r,Z,U=>t(27,s=U)),Re(r,R,U=>t(28,a=U)),Re(r,W,U=>t(25,n=U)),dn("threlte-parent",Ye(z)),nr(()=>{!_||(Yg(G,_,u),Cl(G,a,s),Pl(G,i,n),Ll(G,v,x),t(2,M=!0))}),r_(G,O,b,S);const{onClick:$,onContextMenu:ee,onPointerDown:Me,onPointerMove:se,onPointerUp:V}=Kg(G,O,b);ct(()=>{S.dispose(!0)});function Q(U){Hn[U?"unshift":"push"](()=>{_=U,t(1,_)})}const K=()=>A().pointerOverCanvas.set(!0),ce=()=>A().pointerOverCanvas.set(!1);return r.$$set=U=>{"dpr"in U&&t(14,c=U.dpr),"flat"in U&&t(15,h=U.flat),"linear"in U&&t(16,d=U.linear),"frameloop"in U&&t(17,f=U.frameloop),"debugFrameloop"in U&&t(18,p=U.debugFrameloop),"shadows"in U&&t(19,v=U.shadows),"shadowMapType"in U&&t(20,x=U.shadowMapType),"size"in U&&t(21,m=U.size),"rendererParameters"in U&&t(22,u=U.rendererParameters),"$$scope"in U&&t(33,l=U.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&g.set(m),r.$$.dirty[0]&65536&&He(R,a=d,a),r.$$.dirty[0]&32768&&He(Z,s=h,s),r.$$.dirty[0]&16384&&He(W,n=c,n),r.$$.dirty[0]&402653184&&Cl(A(),a,s),r.$$.dirty[0]&100663296&&Pl(A(),i,n),r.$$.dirty[0]&1572864&&Ll(A(),v,x)},[G,_,M,E,A,N,Z,R,W,$,ee,Me,se,V,c,h,d,f,p,v,x,m,u,O,C,n,i,s,a,o,Q,K,ce,l]}class x_ extends _t{constructor(e){super(),gt(this,e,v_,__,pt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Hc=()=>Tn("threlte-root"),M_=()=>Tn("threlte-disposal-context");function S_(r){let e;const t=r[9].default,n=An(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Pn(n,t,i,i[8],e?Cn(t,i[8],s,null):Ln(i[8]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}const Il="threlte-disposable-object-context";function b_(r,e,t){var m;let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=M_();let{object:h=void 0}=e,d=h,{dispose:f=void 0}=e;const p=Tn(Il);Re(r,p,u=>t(7,i=u));const v=Ye((m=f!=null?f:i)!=null?m:!0);Re(r,v,u=>t(6,n=u)),dn(Il,v);let x=n?o(h):[];return l(x),ct(()=>{c(x)}),r.$$set=u=>{"object"in u&&t(2,h=u.object),"dispose"in u&&t(3,f=u.dispose),"$$scope"in u&&t(8,a=u.$$scope)},r.$$.update=()=>{var u;r.$$.dirty&136&&v.set((u=f!=null?f:i)!=null?u:!0),r.$$.dirty&116&&h!==d&&(c(x),t(5,x=n?o(h):[]),l(x),t(4,d=h))},[p,v,h,f,d,x,n,i,a,s]}class Fa extends _t{constructor(e){super(),gt(this,e,b_,S_,pt,{object:2,dispose:3})}}function y_(r,e,t){let n,i,{object:s}=e;const a=Ts(s);Re(r,a,c=>t(4,i=c));const o=Tn("threlte-layers");Re(r,o,c=>t(3,n=c));const{invalidate:l}=Rn();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&a.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const h=c;n.includes(h)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[a,o,s,n,i]}class Vc extends _t{constructor(e){super(),gt(this,e,y_,null,pt,{object:2})}}const Wc=(r,e)=>{var o;if(!Es)return{start:()=>{},stop:()=>{},started:nc(!1)};const t=Tn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Ye(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((o=e==null?void 0:e.autostart)==null||o)&&a(),ct(()=>{s()}),{start:a,stop:s,started:{subscribe:i.subscribe}}},jc=()=>{const r=Ye(!1);return(async()=>{await Er(),r.set(!0)})(),r};function w_(r,e,t){let n,i,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const h=new D,d=ms(),{invalidate:f}=Rn(),p=jc();Re(r,p,M=>t(8,i=M));const v=async()=>{i||await Er(),d("transform")},x=async()=>{f("TransformableObject: transformed"),await v()};yn(s).onTransform=x;const{start:m,stop:u}=Wc(async()=>{c&&!l&&c instanceof yt&&(c.getWorldPosition(h),s.lookAt(h),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=Ts(s);return Re(r,_,M=>t(7,n=M)),r.$$set=M=>{"object"in M&&t(2,s=M.object),"position"in M&&t(3,a=M.position),"scale"in M&&t(4,o=M.scale),"rotation"in M&&t(5,l=M.rotation),"lookAt"in M&&t(6,c=M.lookAt)},r.$$.update=()=>{var M,g,y,E,L,A,b,S,G,O,C,N,z;r.$$.dirty&4&&_.set(s),r.$$.dirty&232&&(a&&(n.position.set((M=a.x)!=null?M:0,(g=a.y)!=null?g:0,(y=a.z)!=null?y:0),x()),c&&!l&&(c instanceof yt?m():(u(),n.lookAt((E=c.x)!=null?E:0,(L=c.y)!=null?L:0,(A=c.z)!=null?A:0),x())),c||u()),r.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set((b=o.x)!=null?b:1,(S=o.y)!=null?S:1,(G=o.z)!=null?G:1),x()),r.$$.dirty&160&&l&&(n.rotation.set((O=l.x)!=null?O:0,(C=l.y)!=null?C:0,(N=l.z)!=null?N:0,(z=l.order)!=null?z:"XYZ"),x())},[p,_,s,a,o,l,c,n]}class E_ extends _t{constructor(e){super(),gt(this,e,w_,null,pt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function T_(r,e,t){let n,i,s,{object:a}=e,{viewportAware:o=!1}=e;const l=ms(),{camera:c,invalidate:h}=Rn();Re(r,c,E=>t(8,s=E));const d=new Ra,f=new mt,p=E=>E.type==="Mesh",v=new D,x=()=>s?(f.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),d.setFromProjectionMatrix(f),p(a)?d.intersectsObject(a):(a.getWorldPosition(v),d.containsPoint(v))):!0,m=jc();Re(r,m,E=>t(7,i=E));let{inViewport:u=x()}=e;const _=async E=>{E?(i||await Er(),l("viewportenter",a)):(i||await Er(),l("viewportleave",a))},{start:M,stop:g,started:y}=Wc(()=>{const E=x();u===void 0?(t(3,u=x()),_(u)):E!==u&&(_(E),t(3,u=E))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Re(r,y,E=>t(6,n=E)),h("ViewportAwareObject"),r.$$set=E=>{"object"in E&&t(4,a=E.object),"viewportAware"in E&&t(5,o=E.viewportAware),"inViewport"in E&&t(3,u=E.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(o&&!n?M():!o&&n&&g())},[c,m,y,u,a,o,n]}class A_ extends _t{constructor(e){super(),gt(this,e,T_,null,pt,{object:4,viewportAware:5,inViewport:3})}}function C_(r){let e;const t=r[14].default,n=An(t,r,r[18],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Pn(n,t,i,i[18],e?Cn(t,i[18],s,null):Ln(i[18]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function P_(r){let e,t;return e=new Oa({props:{object:r[1],$$slots:{default:[C_]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function L_(r){let e,t,n,i,s,a,o,l,c;e=new Vc({props:{object:r[1]}}),n=new E_({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new Fa({props:{object:r[1],dispose:r[7],$$slots:{default:[P_]},$$scope:{ctx:r}}});function h(f){r[15](f)}let d={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(d.inViewport=r[0]),o=new A_({props:d}),Hn.push(()=>_s(o,"inViewport",h)),o.$on("viewportenter",r[16]),o.$on("viewportleave",r[17]),{c(){lt(e.$$.fragment),t=ge(),lt(n.$$.fragment),i=ge(),lt(s.$$.fragment),a=ge(),lt(o.$$.fragment)},m(f,p){it(e,f,p),Qe(f,t,p),it(n,f,p),Qe(f,i,p),it(s,f,p),Qe(f,a,p),it(o,f,p),c=!0},p(f,[p]){const v={};p&2&&(v.object=f[1]),e.$set(v);const x={};p&2&&(x.object=f[1]),p&4&&(x.position=f[2]),p&16&&(x.rotation=f[4]),p&8&&(x.scale=f[3]),p&32&&(x.lookAt=f[5]),n.$set(x);const m={};p&2&&(m.object=f[1]),p&128&&(m.dispose=f[7]),p&262146&&(m.$$scope={dirty:p,ctx:f}),s.$set(m);const u={};p&2&&(u.object=f[1]),p&64&&(u.viewportAware=f[6]),!l&&p&1&&(l=!0,u.inViewport=f[0],gs(()=>l=!1)),o.$set(u)},i(f){c||(ye(e.$$.fragment,f),ye(n.$$.fragment,f),ye(s.$$.fragment,f),ye(o.$$.fragment,f),c=!0)},o(f){Ce(e.$$.fragment,f),Ce(n.$$.fragment,f),Ce(s.$$.fragment,f),Ce(o.$$.fragment,f),c=!1},d(f){rt(e,f),f&&Ze(t),rt(n,f),f&&Ze(i),rt(s,f),f&&Ze(a),rt(o,f)}}}function R_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:h=!1}=e,{inViewport:d=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:x=void 0}=e,{visible:m=void 0}=e,{dispose:u=void 0}=e,{userData:_=void 0}=e;const{invalidate:M}=Rn(),g=()=>s;function y(A){d=A,t(0,d)}function E(A){Zi.call(this,r,A)}function L(A){Zi.call(this,r,A)}return r.$$set=A=>{"object"in A&&t(1,s=A.object),"position"in A&&t(2,a=A.position),"scale"in A&&t(3,o=A.scale),"rotation"in A&&t(4,l=A.rotation),"lookAt"in A&&t(5,c=A.lookAt),"viewportAware"in A&&t(6,h=A.viewportAware),"inViewport"in A&&t(0,d=A.inViewport),"castShadow"in A&&t(8,f=A.castShadow),"receiveShadow"in A&&t(9,p=A.receiveShadow),"frustumCulled"in A&&t(10,v=A.frustumCulled),"renderOrder"in A&&t(11,x=A.renderOrder),"visible"in A&&t(12,m=A.visible),"dispose"in A&&t(7,u=A.dispose),"userData"in A&&t(13,_=A.userData),"$$scope"in A&&t(18,i=A.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(m!==void 0&&(g().visible=m),f!==void 0&&(g().castShadow=f),p!==void 0&&(g().receiveShadow=p),v!==void 0&&(g().frustumCulled=v),x!==void 0&&(g().renderOrder=x),_!==void 0&&(g().userData={...g().userData,..._}),M("Object3DInstance: props changed"))},[d,s,a,o,l,c,h,u,f,p,v,x,m,_,n,y,E,L,i]}class D_ extends _t{constructor(e){super(),gt(this,e,R_,L_,pt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function I_(r){let e;const t=r[17].default,n=An(t,r,r[21],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&Pn(n,t,i,i[21],e?Cn(t,i[21],s,null):Ln(i[21]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function U_(r){let e,t,n;function i(a){r[18](a)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[I_]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new D_({props:s}),Hn.push(()=>_s(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){lt(e.$$.fragment)},m(a,o){it(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],gs(()=>t=!1)),e.$set(l)},i(a){n||(ye(e.$$.fragment,a),n=!0)},o(a){Ce(e.$$.fragment,a),n=!1},d(a){rt(e,a)}}}function N_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:h=void 0}=e,{viewportAware:d=!1}=e,{inViewport:f=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:x=void 0}=e,{renderOrder:m=void 0}=e,{visible:u=void 0}=e,{userData:_=void 0}=e,{dispose:M=void 0}=e,{useCamera:g=!1}=e;const y=Ts(a);Re(r,y,S=>t(16,n=S));const{setCamera:E}=Hc();function L(S){f=S,t(0,f)}function A(S){Zi.call(this,r,S)}function b(S){Zi.call(this,r,S)}return r.$$set=S=>{"camera"in S&&t(1,a=S.camera),"position"in S&&t(2,o=S.position),"scale"in S&&t(3,l=S.scale),"rotation"in S&&t(4,c=S.rotation),"lookAt"in S&&t(5,h=S.lookAt),"viewportAware"in S&&t(6,d=S.viewportAware),"inViewport"in S&&t(0,f=S.inViewport),"castShadow"in S&&t(7,p=S.castShadow),"receiveShadow"in S&&t(8,v=S.receiveShadow),"frustumCulled"in S&&t(9,x=S.frustumCulled),"renderOrder"in S&&t(10,m=S.renderOrder),"visible"in S&&t(11,u=S.visible),"userData"in S&&t(12,_=S.userData),"dispose"in S&&t(13,M=S.dispose),"useCamera"in S&&t(15,g=S.useCamera),"$$scope"in S&&t(21,s=S.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&y.set(a),r.$$.dirty&98304&&g&&E(n)},[f,a,o,l,c,h,d,p,v,x,m,u,_,M,y,g,n,i,L,A,b,s]}class O_ extends _t{constructor(e){super(),gt(this,e,N_,U_,pt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function F_(r){let e;const t=r[20].default,n=An(t,r,r[24],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&Pn(n,t,i,i[24],e?Cn(t,i[24],s,null):Ln(i[24]),null)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function z_(r){let e,t,n;function i(a){r[21](a)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[F_]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new O_({props:s}),Hn.push(()=>_s(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){lt(e.$$.fragment)},m(a,o){it(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&8192&&(l.viewportAware=a[13]),o&32&&(l.lookAt=a[5]),o&16384&&(l.useCamera=a[14]),o&16777216&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],gs(()=>t=!1)),e.$set(l)},i(a){n||(ye(e.$$.fragment,a),n=!0)},o(a){Ce(e.$$.fragment,a),n=!1},d(a){rt(e,a)}}}function k_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:h=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:x=void 0}=e,{dispose:m=void 0}=e,{viewportAware:u=!1}=e,{inViewport:_=!1}=e,{useCamera:M=!0}=e,{near:g=void 0}=e,{far:y=void 0}=e,{fov:E=void 0}=e;const{size:L,invalidate:A}=Rn();Re(r,L,C=>t(19,n=C));const b=new rn(E,n.width/n.height,g,y);function S(C){_=C,t(1,_)}function G(C){Zi.call(this,r,C)}function O(C){Zi.call(this,r,C)}return r.$$set=C=>{"position"in C&&t(2,a=C.position),"scale"in C&&t(3,o=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,c=C.lookAt),"castShadow"in C&&t(6,h=C.castShadow),"receiveShadow"in C&&t(7,d=C.receiveShadow),"frustumCulled"in C&&t(8,f=C.frustumCulled),"renderOrder"in C&&t(9,p=C.renderOrder),"visible"in C&&t(10,v=C.visible),"userData"in C&&t(11,x=C.userData),"dispose"in C&&t(12,m=C.dispose),"viewportAware"in C&&t(13,u=C.viewportAware),"inViewport"in C&&t(1,_=C.inViewport),"useCamera"in C&&t(14,M=C.useCamera),"near"in C&&t(16,g=C.near),"far"in C&&t(17,y=C.far),"fov"in C&&t(18,E=C.fov),"$$scope"in C&&t(24,s=C.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,b.aspect=n.width/n.height,b),b.updateProjectionMatrix(),A("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(g!==void 0&&t(0,b.near=g,b),y!==void 0&&t(0,b.far=y,b),E!==void 0&&t(0,b.fov=E,b),b.updateProjectionMatrix(),A("PerspectiveCamera: props changed"))},[b,_,a,o,l,c,h,d,f,p,v,x,m,u,M,L,g,y,E,n,i,S,G,O,s]}class B_ extends _t{constructor(e){super(),gt(this,e,k_,z_,pt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Ul=[],G_=(r,e)=>{const t=Ul.find(i=>i instanceof r);if(t)return t;const n=e();return Ul.push(n),n},li=new zc,Zt=new D,Zn=new D,ft=new Vt,Nl={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},oa={type:"change"},Ol={type:"mouseDown"},Fl={type:"mouseUp",mode:null},zl={type:"objectChange"};class H_ extends yt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new Y_;this._gizmo=n,this.add(n);const i=new Z_;this._plane=i,this.add(i);const s=this;function a(_,M){let g=M;Object.defineProperty(s,_,{get:function(){return g!==void 0?g:M},set:function(y){g!==y&&(g=y,i[_]=y,n[_]=y,s.dispatchEvent({type:_+"-changed",value:y}),s.dispatchEvent(oa))}}),s[_]=M,i[_]=M,n[_]=M}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new D,l=new D,c=new Vt,h=new Vt,d=new D,f=new Vt,p=new D,v=new D,x=new D,m=0,u=new D;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",p),a("pointEnd",v),a("rotationAxis",x),a("rotationAngle",m),a("eye",u),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Vt,this._parentQuaternionInv=new Vt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Vt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Vt,this._scaleStart=new D,this._getPointer=V_.bind(this),this._onPointerDown=j_.bind(this),this._onPointerHover=W_.bind(this),this._onPointerMove=X_.bind(this),this._onPointerUp=q_.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;li.setFromCamera(e,this.camera);const t=la(this._gizmo.picker[this.mode],li);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){li.setFromCamera(e,this.camera);const t=la(this._plane,li,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Ol.mode=this.mode,this.dispatchEvent(Ol)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;li.setFromCamera(e,this.camera);const a=la(this._plane,li,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(ft.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Zt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Zt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),Zn.set(o,o,o)}else Zt.copy(this.pointStart),Zn.copy(this.pointEnd),Zt.applyQuaternion(this._worldQuaternionInv),Zn.applyQuaternion(this._worldQuaternionInv),Zn.divide(Zt),t.search("X")===-1&&(Zn.x=1),t.search("Y")===-1&&(Zn.y=1),t.search("Z")===-1&&(Zn.z=1);i.scale.copy(this._scaleStart).multiply(Zn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Zt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Zt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Nl[t]),Zt.copy(Nl[t]),s==="local"&&Zt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Zt.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(oa),this.dispatchEvent(zl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Fl.mode=this.mode,this.dispatchEvent(Fl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(oa),this.dispatchEvent(zl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return li}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function V_(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function W_(r){if(!!this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function j_(r){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function X_(r){!this.enabled||this.pointerMove(this._getPointer(r))}function q_(r){!this.enabled||(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function la(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const ns=new Si,et=new D(0,1,0),kl=new D(0,0,0),Bl=new mt,is=new Vt,cs=new Vt,_n=new D,Gl=new mt,vr=new D(1,0,0),fi=new D(0,1,0),xr=new D(0,0,1),rs=new D,dr=new D,pr=new D;class Y_ extends yt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Ss({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Uc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const h=e.clone();h.color.setHex(255),h.opacity=.5;const d=e.clone();d.opacity=.25;const f=e.clone();f.color.setHex(16776960),f.opacity=.25,e.clone().color.setHex(16776960);const v=e.clone();v.color.setHex(7895160);const x=new Ft(0,.04,.1,12);x.translate(0,.05,0);const m=new Mt(.08,.08,.08);m.translate(0,.04,0);const u=new Xt;u.setAttribute("position",new ht([0,0,0,1,0,0],3));const _=new Ft(.0075,.0075,.5,3);_.translate(0,.25,0);function M(z,Z){const R=new di(z,.0075,3,64,Z*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function g(){const z=new Xt;return z.setAttribute("position",new ht([0,0,0,1,1,1],3)),z}const y={X:[[new de(x,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(x,s),[-.5,0,0],[0,0,Math.PI/2]],[new de(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new de(x,a),[0,.5,0]],[new de(x,a),[0,-.5,0],[Math.PI,0,0]],[new de(_,a)]],Z:[[new de(x,o),[0,0,.5],[Math.PI/2,0,0]],[new de(x,o),[0,0,-.5],[-Math.PI/2,0,0]],[new de(_,o),null,[Math.PI/2,0,0]]],XYZ:[[new de(new Wi(.1,0),d.clone()),[0,0,0]]],XY:[[new de(new Mt(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new de(new Mt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Mt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new de(new Ft(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ft(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ft(.2,0,.6,4),n),[0,.3,0]],[new de(new Ft(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ft(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ft(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new de(new Wi(.2,0),n)]],XY:[[new de(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new de(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new de(new Wi(.01,2),i),null,null,null,"helper"]],END:[[new de(new Wi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Yn(g(),i),null,null,null,"helper"]],X:[[new Yn(u,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yn(u,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yn(u,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},A={XYZE:[[new de(M(.5,1),v),null,[0,Math.PI/2,0]]],X:[[new de(M(.5,.5),s)]],Y:[[new de(M(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new de(M(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new de(M(.75,1),f),null,[0,Math.PI/2,0]]]},b={AXIS:[[new Yn(u,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new de(new Ua(.25,10,8),n)]],X:[[new de(new di(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new de(new di(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new de(new di(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new de(new di(.75,.1,2,24),n)]]},G={X:[[new de(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new de(_,s),[0,0,0],[0,0,-Math.PI/2]],[new de(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new de(m,a),[0,.5,0]],[new de(_,a)],[new de(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new de(m,o),[0,0,.5],[Math.PI/2,0,0]],[new de(_,o),[0,0,0],[Math.PI/2,0,0]],[new de(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new de(new Mt(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new de(new Mt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Mt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new Mt(.1,.1,.1),d.clone())]]},O={X:[[new de(new Ft(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new de(new Ft(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new de(new Ft(.2,0,.6,4),n),[0,.3,0]],[new de(new Ft(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new de(new Ft(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new de(new Ft(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new de(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new de(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new de(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new de(new Mt(.2,.2,.2),n),[0,0,0]]]},C={X:[[new Yn(u,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yn(u,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yn(u,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function N(z){const Z=new yt;for(const R in z)for(let W=z[R].length;W--;){const $=z[R][W][0].clone(),ee=z[R][W][1],Me=z[R][W][2],se=z[R][W][3],V=z[R][W][4];$.name=R,$.tag=V,ee&&$.position.set(ee[0],ee[1],ee[2]),Me&&$.rotation.set(Me[0],Me[1],Me[2]),se&&$.scale.set(se[0],se[1],se[2]),$.updateMatrix();const Q=$.geometry.clone();Q.applyMatrix4($.matrix),$.geometry=Q,$.renderOrder=1/0,$.position.set(0,0,0),$.rotation.set(0,0,0),$.scale.set(1,1,1),Z.add($)}return Z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=N(y)),this.add(this.gizmo.rotate=N(A)),this.add(this.gizmo.scale=N(G)),this.add(this.picker.translate=N(E)),this.add(this.picker.rotate=N(S)),this.add(this.picker.scale=N(O)),this.add(this.helper.translate=N(L)),this.add(this.helper.rotate=N(b)),this.add(this.helper.scale=N(C)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:cs;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const a=i[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(ft.setFromEuler(ns.set(0,0,0)),a.quaternion.copy(n).multiply(ft),Math.abs(et.copy(vr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(ft.setFromEuler(ns.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(ft),Math.abs(et.copy(fi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(ft.setFromEuler(ns.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(ft),Math.abs(et.copy(xr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(ft.setFromEuler(ns.set(0,Math.PI/2,0)),et.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Bl.lookAt(kl,et,fi)),a.quaternion.multiply(ft),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Zt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Zt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Zt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(et.copy(vr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(et.copy(fi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(et.copy(xr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(et.copy(xr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(et.copy(vr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(et.copy(fi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(is.copy(n),et.copy(this.eye).applyQuaternion(ft.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Bl.lookAt(this.eye,kl,fi)),a.name==="X"&&(ft.setFromAxisAngle(vr,Math.atan2(-et.y,et.z)),ft.multiplyQuaternions(is,ft),a.quaternion.copy(ft)),a.name==="Y"&&(ft.setFromAxisAngle(fi,Math.atan2(et.x,et.z)),ft.multiplyQuaternions(is,ft),a.quaternion.copy(ft)),a.name==="Z"&&(ft.setFromAxisAngle(xr,Math.atan2(et.y,et.x)),ft.multiplyQuaternions(is,ft),a.quaternion.copy(ft))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class Z_ extends de{constructor(){super(new bs(1e5,1e5,2,2),new Ss({visible:!1,wireframe:!0,side:bn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),rs.copy(vr).applyQuaternion(t==="local"?this.worldQuaternion:cs),dr.copy(fi).applyQuaternion(t==="local"?this.worldQuaternion:cs),pr.copy(xr).applyQuaternion(t==="local"?this.worldQuaternion:cs),et.copy(dr),this.mode){case"translate":case"scale":switch(this.axis){case"X":et.copy(this.eye).cross(rs),_n.copy(rs).cross(et);break;case"Y":et.copy(this.eye).cross(dr),_n.copy(dr).cross(et);break;case"Z":et.copy(this.eye).cross(pr),_n.copy(pr).cross(et);break;case"XY":_n.copy(pr);break;case"YZ":_n.copy(rs);break;case"XZ":et.copy(pr),_n.copy(dr);break;case"XYZ":case"E":_n.set(0,0,0);break}break;case"rotate":default:_n.set(0,0,0)}_n.length()===0?this.quaternion.copy(this.cameraQuaternion):(Gl.lookAt(Zt.set(0,0,0),_n,et),this.quaternion.setFromRotationMatrix(Gl)),super.updateMatrixWorld(e)}}function Q_(r){let e,t,n,i;return e=new Fa({props:{dispose:r[0],object:r[1]}}),n=new Vc({props:{object:r[1]}}),{c(){lt(e.$$.fragment),t=ge(),lt(n.$$.fragment)},m(s,a){it(e,s,a),Qe(s,t,a),it(n,s,a),i=!0},p(s,[a]){const o={};a&1&&(o.dispose=s[0]),a&2&&(o.object=s[1]),e.$set(o);const l={};a&2&&(l.object=s[1]),n.$set(l)},i(s){i||(ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!0)},o(s){Ce(e.$$.fragment,s),Ce(n.$$.fragment,s),i=!1},d(s){rt(e,s),s&&Ze(t),rt(n,s)}}}function K_(r,e,t){let n,i,{autoPauseOrbitControls:s=!0}=e,{mode:a=void 0}=e,{axis:o=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:h=void 0}=e,{scaleSnap:d=void 0}=e,{rotationSnap:f=void 0}=e,{showX:p=void 0}=e,{showY:v=void 0}=e,{showZ:x=void 0}=e,{size:m=void 0}=e,{space:u=void 0}=e,{dispose:_=void 0}=e;const{camera:M,renderer:g,invalidate:y,scene:E}=Rn();Re(r,M,R=>t(20,i=R));const L=Gc();if(Re(r,L,R=>t(19,n=R)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const A=ms(),b=()=>{if(!!i)return yn(i).orbitControls};let S;const G=()=>{if(S!==void 0){const R=b();R&&(R.enabled=S),S=void 0}};ct(G);const O={change:R=>{var W,$;n&&(($=(W=yn(n)).onTransform)==null||$.call(W)),y("TransformControls: change event"),A("change",R)},"camera-changed":R=>A("camera-changed",R),"object-changed":R=>A("object-changed",R),"enabled-changed":R=>A("enabled-changed",R),"axis-changed":R=>{t(4,o=R.value),A("axis-changed",R)},"mode-changed":R=>A("mode-changed",R),"translationSnap-changed":R=>A("translationSnap-changed",R),"rotationSnap-changed":R=>A("rotationSnap-changed",R),"scaleSnap-changed":R=>A("scaleSnap-changed",R),"space-changed":R=>A("space-changed",R),"size-changed":R=>A("size-changed",R),"dragging-changed":R=>{t(5,l=R.value);e:if(s){const W=b();if(!W)break e;const $=!R.value;if(W.enabled===$)break e;R.value&&(S=W.enabled),W.enabled=$}A("dragging-changed",R)},"showX-changed":R=>A("showX-changed",R),"showY-changed":R=>A("showY-changed",R),"showZ-changed":R=>A("showZ-changed",R),"worldPosition-changed":R=>A("worldPosition-changed",R),"worldPositionStart-changed":R=>A("worldPositionStart-changed",R),"worldQuaternion-changed":R=>A("worldQuaternion-changed",R),"worldQuaternionStart-changed":R=>A("worldQuaternionStart-changed",R),"cameraPosition-changed":R=>A("cameraPosition-changed",R),"cameraQuaternion-changed":R=>A("cameraQuaternion-changed",R),"pointStart-changed":R=>A("pointStart-changed",R),"pointEnd-changed":R=>A("pointEnd-changed",R),"rotationAxis-changed":R=>A("rotationAxis-changed",R),"rotationAngle-changed":R=>A("rotationAngle-changed",R),"eye-changed":R=>A("eye-changed",R),mouseDown:()=>A("mouseDown"),mouseUp:()=>A("mouseUp"),objectChange:()=>A("objectChange")};if(!g)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const C=new H_(i,g.domElement),N=()=>C.reset();C.attach(n);const z=()=>{Object.entries(O).forEach(([R,W])=>{C.addEventListener(R,W)})},Z=()=>{Object.entries(O).forEach(([R,W])=>{C.removeEventListener(R,W)})};return z(),E.add(C),ct(()=>{C.detach(),E.remove(C),Z()}),r.$$set=R=>{"autoPauseOrbitControls"in R&&t(6,s=R.autoPauseOrbitControls),"mode"in R&&t(7,a=R.mode),"axis"in R&&t(4,o=R.axis),"dragging"in R&&t(5,l=R.dragging),"enabled"in R&&t(8,c=R.enabled),"translationSnap"in R&&t(9,h=R.translationSnap),"scaleSnap"in R&&t(10,d=R.scaleSnap),"rotationSnap"in R&&t(11,f=R.rotationSnap),"showX"in R&&t(12,p=R.showX),"showY"in R&&t(13,v=R.showY),"showZ"in R&&t(14,x=R.showZ),"size"in R&&t(15,m=R.size),"space"in R&&t(16,u=R.space),"dispose"in R&&t(0,_=R.dispose)},r.$$.update=()=>{r.$$.dirty&64&&(s||G()),r.$$.dirty&256&&c!==void 0&&t(1,C.enabled=c,C),r.$$.dirty&4096&&p!==void 0&&t(1,C.showX=p,C),r.$$.dirty&8192&&v!==void 0&&t(1,C.showY=v,C),r.$$.dirty&16384&&x!==void 0&&t(1,C.showZ=x,C),r.$$.dirty&130&&a!==void 0&&C.setMode(a),r.$$.dirty&514&&h!==void 0&&C.setTranslationSnap(h),r.$$.dirty&1026&&d!==void 0&&C.setScaleSnap(d),r.$$.dirty&2050&&f!==void 0&&C.setRotationSnap(f),r.$$.dirty&32770&&m!==void 0&&C.setSize(m),r.$$.dirty&65538&&u!==void 0&&C.setSpace(u)},[_,C,M,L,o,l,s,a,c,h,d,f,p,v,x,m,u,N]}class J_ extends _t{constructor(e){super(),gt(this,e,K_,Q_,pt,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const Xc=new yt;Xc.scale.set(0,0,0);Xc.matrix;new mt().fromArray(new Array(16).fill(0));new Je(16777215);const qc=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},ca=Symbol("initialValueBeforeAttach"),$_=()=>{const{invalidate:r}=Rn();let e=!1,t=ca,n,i,s;const a=(l,c,h)=>{if(o(),!h){const d=l;((d==null?void 0:d.isMaterial)||!1)&&(h="material"),((d==null?void 0:d.isBufferGeometry)||(d==null?void 0:d.isGeometry)||!1)&&(h="geometry")}if(!!h){if(typeof h=="function")n=h(c,l);else{const{target:d,key:f}=qc(c,h);t=d[f],d[f]=l,i=d,s=f}e=!0,r()}},o=()=>{!e||(n?(n(),n=void 0):i&&s&&t!==ca&&(i[s]=t,t=ca,i=void 0,s=void 0),e=!1,r())};return ct(()=>{o()}),{update:a}},e0=r=>r&&r.isCamera,Yc=r=>r&&r.isOrthographicCamera,Zc=r=>r&&r.isPerspectiveCamera,t0=r=>Zc(r)||Yc(r),n0=()=>{const{invalidate:r,size:e}=Rn(),{setCamera:t}=Hc();let n,i;ct(()=>{i==null||i()});const s=l=>{!n||(Yc(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):Zc(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!t0(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!e0(l)||!c||(t(l),r())}}},Hl=r=>!!(r!=null&&r.addEventListener),i0=()=>{const r=ms(),e=tr(),t=f=>{f!=null&&f.type&&r(f.type,f)},n=(f,p)=>{Hl(f)&&p.forEach(v=>{f.removeEventListener(v,t)})},i=(f,p)=>{Hl(f)&&p.forEach(v=>{f.addEventListener(v,t)})};let s=[],a;const o=Ye([]),l=o.subscribe(f=>{n(a,s),i(a,f),s=f});ct(l);const c=Ye(),h=c.subscribe(f=>{n(a,s),i(f,s),a=f});return ct(h),ct(()=>{n(a,s)}),nr(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:f=>{c.set(f)}}},r0=["$$scope","$$slots","type","args","attach","instance"],s0=["fov","aspect","near","far","left","right","top","bottom","zoom"],a0=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r=="undefined"||r===null,o0=()=>{const{invalidate:r}=Rn(),e=new Map,t=(i,s,a,o)=>{var h,d;if(a0(a)){const f=e.get(s);if(f&&f.instance===i&&f.value===a)return;e.set(s,{instance:i,value:a})}const{key:l,target:c}=qc(i,s);if(!Array.isArray(a)&&typeof a=="number"&&typeof((h=c[l])==null?void 0:h.setScalar)=="function")c[l].setScalar(a);else if(typeof((d=c[l])==null?void 0:d.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;s0.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,a)=>{for(const o in s)r0.includes(o)||t(i,o,s[o],a),r()}}},l0=r=>({ref:r&1}),Vl=r=>({ref:r[0]}),c0=r=>({ref:r&1}),Wl=r=>({ref:r[0]});function jl(r){let e,t;return e=new Fa({props:{object:r[0],dispose:r[1]}}),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function u0(r){let e;const t=r[12].default,n=An(t,r,r[13],Vl);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Pn(n,t,i,i[13],e?Cn(t,i[13],s,l0):Ln(i[13]),Vl)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function f0(r){let e,t;return e=new Oa({props:{object:r[0],$$slots:{default:[h0]},$$scope:{ctx:r}}}),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function h0(r){let e;const t=r[12].default,n=An(t,r,r[13],Wl);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Pn(n,t,i,i[13],e?Cn(t,i[13],s,c0):Ln(i[13]),Wl)},i(i){e||(ye(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function d0(r){let e=r[4](r[0]),t,n,i,s,a,o,l=e&&jl(r);const c=[f0,u0],h=[];function d(f,p){return p&1&&(n=null),n==null&&(n=!!f[3](f[0])),n?0:1}return i=d(r,-1),s=h[i]=c[i](r),{c(){l&&l.c(),t=ge(),s.c(),a=er()},m(f,p){l&&l.m(f,p),Qe(f,t,p),h[i].m(f,p),Qe(f,a,p),o=!0},p(f,[p]){p&1&&(e=f[4](f[0])),e?l?(l.p(f,p),p&1&&ye(l,1)):(l=jl(f),l.c(),ye(l,1),l.m(t.parentNode,t)):l&&(vi(),Ce(l,1,1,()=>{l=null}),xi());let v=i;i=d(f,p),i===v?h[i].p(f,p):(vi(),Ce(h[v],1,1,()=>{h[v]=null}),xi(),s=h[i],s?s.p(f,p):(s=h[i]=c[i](f),s.c()),ye(s,1),s.m(a.parentNode,a))},i(f){o||(ye(l),ye(s),o=!0)},o(f){Ce(l),Ce(s),o=!1},d(f){l&&l.d(f),f&&Ze(t),h[i].d(f),f&&Ze(a)}}}function p0(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Ga(e,n),s,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:d=void 0}=e,{makeDefault:f=void 0}=e,{dispose:p=void 0}=e;const v=Tn("threlte-hierarchical-parent-context");Re(r,v,S=>t(11,s=S));const x=S=>typeof S=="function"&&/^\s*class\s+/.test(S.toString()),m=S=>Array.isArray(S);let{ref:u=x(l)&&m(c)?new l(...c):x(l)?new l:l}=e,_=!1;const M=Ye(u);dn("threlte-hierarchical-parent-context",M);const g=o0(),y=n0(),E=$_(),L=i0(),A=S=>!!S.isObject3D,b=S=>S.dispose!==void 0;return r.$$set=S=>{e=ua(ua({},e),$c(S)),t(21,i=Ga(e,n)),"type"in S&&t(5,l=S.type),"args"in S&&t(6,c=S.args),"attach"in S&&t(7,h=S.attach),"manual"in S&&t(8,d=S.manual),"makeDefault"in S&&t(9,f=S.makeDefault),"dispose"in S&&t(1,p=S.dispose),"ref"in S&&t(0,u=S.ref),"$$scope"in S&&t(13,o=S.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(_?t(0,u=x(l)&&m(c)?new l(...c):x(l)?new l:l):t(10,_=!0)),r.$$.dirty&1&&M.set(u),g.updateProps(u,i,{manualCamera:d}),r.$$.dirty&257&&y.update(u,d),r.$$.dirty&513&&y.makeDefaultCamera(u,f),r.$$.dirty&2177&&E.update(u,s,h),r.$$.dirty&1&&L.updateRef(u)},[u,p,v,A,b,l,c,h,d,f,_,s,a,o]}class m0 extends _t{constructor(e){super(),gt(this,e,p0,d0,pt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function g0(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Xl extends _t{constructor(e){super(),gt(this,e,g0,null,pt,{})}}new Proxy(Xl,{get(r,e){return r[e]||Xl}});G_(cl,()=>new cl(Nc));function ql(r){let e,t,n,i,s,a=r[4]=="translate"?"rotate":"translate",o,l,c,h,d,f,p,v,x,m,u,_,M,g,y,E=r[2].x.toFixed(2)+"",L,A,b,S,G,O,C=-r[2].z.toFixed(2)+"",N,z,Z,R,W,$,ee=r[2].y.toFixed(2)+"",Me,se,V,Q,K,ce,U,Pe,Te,ae,we,Ve,Se,De,st,vt,xt,dt,We=Qt.radToDeg(r[3].x).toFixed(2)+"",tt,Dt,P,w,X,te,re=Qt.radToDeg(r[3].y).toFixed(2)+"",ue,Ae,he,Y,_e,be,Ee=Qt.radToDeg(r[3].z).toFixed(2)+"",me,ve,Ie,Xe,at,I,H,ne,fe,xe,Ke,ke,wt,qt,ut,Ct,zt,Dn,ti,Ir,or,In,T,F,q,k,j=r[12]!==null&&Yl(r);return In=new x_({props:{$$slots:{default:[v0]},$$scope:{ctx:r}}}),{c(){e=ie("div"),t=ie("div"),n=ie("div"),i=ie("button"),s=ot("Change to "),o=ot(a),l=ge(),c=ie("div"),h=ie("button"),h.textContent="Reset Rotation",d=ge(),f=ie("button"),f.textContent="Reset Position",p=ge(),v=ie("div"),x=ie("p"),x.textContent="Translation Snap",m=ge(),u=ie("div"),_=ie("div"),M=ie("p"),M.textContent="x",g=ge(),y=ie("p"),L=ot(E),A=ge(),b=ie("div"),S=ie("p"),S.textContent="y",G=ge(),O=ie("p"),N=ot(C),z=ge(),Z=ie("div"),R=ie("p"),R.textContent="z",W=ge(),$=ie("p"),Me=ot(ee),se=ge(),V=ie("div"),Q=ie("div"),K=ot(r[5]),ce=ge(),U=ie("input"),Pe=ge(),Te=ie("button"),Te.textContent="Place On Ground",ae=ge(),we=ie("div"),Ve=ie("p"),Ve.textContent="Rotation Snap",Se=ge(),De=ie("div"),st=ie("div"),vt=ie("p"),vt.textContent="x",xt=ge(),dt=ie("p"),tt=ot(We),Dt=ge(),P=ie("div"),w=ie("p"),w.textContent="y",X=ge(),te=ie("p"),ue=ot(re),Ae=ge(),he=ie("div"),Y=ie("p"),Y.textContent="z",_e=ge(),be=ie("p"),me=ot(Ee),ve=ge(),Ie=ie("div"),Xe=ie("div"),at=ot(r[6]),I=ge(),H=ie("input"),ne=ge(),fe=ie("p"),fe.textContent="Object Alpha",xe=ge(),Ke=ie("div"),ke=ie("input"),wt=ge(),qt=ie("button"),qt.textContent="Cancel Placement",ut=ge(),Ct=ie("button"),zt=ie("i"),Ir=ge(),j&&j.c(),or=ge(),lt(In.$$.fragment),J(i,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),J(h,"class","bg-[color:var(--color-secondary)] text-white p-[0.5rem] w-full whitespace-nowrap"),J(f,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),J(c,"class","flex flex-row gap-[1rem]"),J(x,"class","h-fit"),J(_,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),J(b,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),J(Z,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),J(u,"class","flex flex-row gap-[1rem] text-center"),J(v,"class","flex flex-col items-center"),J(Q,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),J(U,"id","slider"),J(U,"type","range"),J(U,"min","0.01"),J(U,"max","1"),J(U,"step","0.01"),J(U,"class","w-full"),J(V,"class","flex flex-row gap-[1rem] items-center"),J(Te,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),J(Ve,"class","h-fit"),J(st,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),J(P,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),J(he,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),J(De,"class","flex flex-row gap-[1rem] text-center"),J(we,"class","flex flex-col items-center "),J(Xe,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),J(H,"id","slider"),J(H,"type","range"),J(H,"min","1"),J(H,"max","90"),J(H,"step","1"),J(H,"class","w-full"),J(Ie,"class","flex flex-row gap-[1rem] items-center"),J(fe,"class",""),J(ke,"id","slider"),J(ke,"type","range"),J(ke,"min","1"),J(ke,"max","255"),J(ke,"step","10"),J(ke,"class","w-full"),J(Ke,"class","flex flex-row gap-[1rem] items-center"),J(qt,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),J(n,"class","flex flex-col gap-[1rem] p-[2rem]"),J(zt,"class",Dn="fas text-[2rem] fa-chevron-"+(r[7]?"left":"right")),J(Ct,"class","h-full absolute -right-[4rem] w-[4rem] grid place-items-center bg-[color:var(--color-secondary)]"),J(t,"class",ti="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(r[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"),J(e,"class",T="modeler z-[0] absolute h-screen w-screen "+(r[9]?"bg-gray-800":""))},m(oe,pe){Qe(oe,e,pe),B(e,t),B(t,n),B(n,i),B(i,s),B(i,o),B(n,l),B(n,c),B(c,h),B(c,d),B(c,f),B(n,p),B(n,v),B(v,x),B(v,m),B(v,u),B(u,_),B(_,M),B(_,g),B(_,y),B(y,L),B(u,A),B(u,b),B(b,S),B(b,G),B(b,O),B(O,N),B(u,z),B(u,Z),B(Z,R),B(Z,W),B(Z,$),B($,Me),B(n,se),B(n,V),B(V,Q),B(Q,K),B(V,ce),B(V,U),Mn(U,r[5]),B(n,Pe),B(n,Te),B(n,ae),B(n,we),B(we,Ve),B(we,Se),B(we,De),B(De,st),B(st,vt),B(st,xt),B(st,dt),B(dt,tt),B(De,Dt),B(De,P),B(P,w),B(P,X),B(P,te),B(te,ue),B(De,Ae),B(De,he),B(he,Y),B(he,_e),B(he,be),B(be,me),B(n,ve),B(n,Ie),B(Ie,Xe),B(Xe,at),B(Ie,I),B(Ie,H),Mn(H,r[6]),B(n,ne),B(n,fe),B(n,xe),B(n,Ke),B(Ke,ke),Mn(ke,r[1]),B(n,wt),B(n,qt),B(t,ut),B(t,Ct),B(Ct,zt),B(e,Ir),j&&j.m(e,null),B(e,or),it(In,e,null),F=!0,q||(k=[Ue(i,"click",r[22]),Ue(h,"click",r[23]),Ue(f,"click",r[24]),Ue(U,"change",r[25]),Ue(U,"input",r[25]),Ue(Te,"click",r[26]),Ue(H,"change",r[27]),Ue(H,"input",r[27]),Ue(ke,"change",r[28]),Ue(ke,"input",r[28]),Ue(qt,"click",r[29]),Ue(Ct,"click",r[30])],q=!0)},p(oe,pe){(!F||pe[0]&16)&&a!==(a=oe[4]=="translate"?"rotate":"translate")&&It(o,a),(!F||pe[0]&4)&&E!==(E=oe[2].x.toFixed(2)+"")&&It(L,E),(!F||pe[0]&4)&&C!==(C=-oe[2].z.toFixed(2)+"")&&It(N,C),(!F||pe[0]&4)&&ee!==(ee=oe[2].y.toFixed(2)+"")&&It(Me,ee),(!F||pe[0]&32)&&It(K,oe[5]),pe[0]&32&&Mn(U,oe[5]),(!F||pe[0]&8)&&We!==(We=Qt.radToDeg(oe[3].x).toFixed(2)+"")&&It(tt,We),(!F||pe[0]&8)&&re!==(re=Qt.radToDeg(oe[3].y).toFixed(2)+"")&&It(ue,re),(!F||pe[0]&8)&&Ee!==(Ee=Qt.radToDeg(oe[3].z).toFixed(2)+"")&&It(me,Ee),(!F||pe[0]&64)&&It(at,oe[6]),pe[0]&64&&Mn(H,oe[6]),pe[0]&2&&Mn(ke,oe[1]),(!F||pe[0]&128&&Dn!==(Dn="fas text-[2rem] fa-chevron-"+(oe[7]?"left":"right")))&&J(zt,"class",Dn),(!F||pe[0]&128&&ti!==(ti="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(oe[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"))&&J(t,"class",ti),oe[12]!==null?j?j.p(oe,pe):(j=Yl(oe),j.c(),j.m(e,or)):j&&(j.d(1),j=null);const Le={};pe[0]&29821|pe[1]&128&&(Le.$$scope={dirty:pe,ctx:oe}),In.$set(Le),(!F||pe[0]&512&&T!==(T="modeler z-[0] absolute h-screen w-screen "+(oe[9]?"bg-gray-800":"")))&&J(e,"class",T)},i(oe){F||(ye(In.$$.fragment,oe),F=!0)},o(oe){Ce(In.$$.fragment,oe),F=!1},d(oe){oe&&Ze(e),j&&j.d(),rt(In),q=!1,sn(k)}}}function Yl(r){let e,t,n;return{c(){e=ie("button"),e.innerHTML=`<i class="fa-solid fa-shopping-cart text-[white]"></i> 
        	<p class="font-semibold">Add To Cart</p>`,J(e,"class","absolute text-[2rem] hover:brightness-110 top-1/2 -translate-y-1/2 right-[1rem] w-fit gap-[1rem] px-8 py-4 h-fit bg-[color:var(--color-secondary)] flex flex-row items-center justify-between")},m(i,s){Qe(i,e,s),t||(n=Ue(e,"click",r[31]),t=!0)},p:Et,d(i){i&&Ze(e),t=!1,n()}}}function _0(r){let e,t;return e=new J_({props:{mode:r[4],translationSnap:r[5],rotationSnap:Qt.degToRad(r[6]),size:.5,space:"local"}}),e.$on("objectChange",r[32]),e.$on("dragging-changed",r[33]),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},p(n,i){const s={};i[0]&16&&(s.mode=n[4]),i[0]&32&&(s.translationSnap=n[5]),i[0]&64&&(s.rotationSnap=Qt.degToRad(n[6])),e.$set(s)},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function v0(r){let e,t,n,i,s;e=new B_({props:{position:r[13],lookAt:r[10],fov:45}});function a(l){r[34](l)}let o={type:de,"position.x":r[2].x,"position.y":r[2].y,"position.z":r[2].z,quaternion:5,geometry:new Mt(0,0,0),material:new _g,"rotation.x":r[3].x,"rotation.y":r[3].y,"rotation.z":r[3].z,$$slots:{default:[_0]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.ref=r[0]),n=new m0({props:o}),Hn.push(()=>_s(n,"ref",a)),{c(){lt(e.$$.fragment),t=ge(),lt(n.$$.fragment)},m(l,c){it(e,l,c),Qe(l,t,c),it(n,l,c),s=!0},p(l,c){const h={};c[0]&8192&&(h.position=l[13]),c[0]&1024&&(h.lookAt=l[10]),e.$set(h);const d={};c[0]&4&&(d["position.x"]=l[2].x),c[0]&4&&(d["position.y"]=l[2].y),c[0]&4&&(d["position.z"]=l[2].z),c[0]&8&&(d["rotation.x"]=l[3].x),c[0]&8&&(d["rotation.y"]=l[3].y),c[0]&8&&(d["rotation.z"]=l[3].z),c[0]&20604|c[1]&128&&(d.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,d.ref=l[0],gs(()=>i=!1)),n.$set(d)},i(l){s||(ye(e.$$.fragment,l),ye(n.$$.fragment,l),s=!0)},o(l){Ce(e.$$.fragment,l),Ce(n.$$.fragment,l),s=!1},d(l){rt(e,l),l&&Ze(t),rt(n,l)}}}function x0(r){let e,t,n=r[8]&&ql(r);return{c(){n&&n.c(),e=er()},m(i,s){n&&n.m(i,s),Qe(i,e,s),t=!0},p(i,s){i[8]?n?(n.p(i,s),s[0]&256&&ye(n,1)):(n=ql(i),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(vi(),Ce(n,1,1,()=>{n=null}),xi())},i(i){t||(ye(n),t=!0)},o(i){Ce(n),t=!1},d(i){n&&n.d(i),i&&Ze(e)}}}function M0(r,e,t){let n,i,s,a,o,l,c,h,d;Re(r,vs,K=>t(9,a=K)),Re(r,hs,K=>t(11,l=K)),Re(r,Bn,K=>t(14,d=K));const{show:f,cameraPosition:p,cameraLookAt:v,objectPosition:x,objectEuler:m,cartEntity:u}=Gn;Re(r,f,K=>t(8,s=K)),Re(r,p,K=>t(13,h=K)),Re(r,v,K=>t(10,o=K)),Re(r,x,K=>t(2,n=K)),Re(r,m,K=>t(3,i=K)),Re(r,u,K=>t(12,c=K));let _,M="translate",g=.01,y=1,E=!1,L=200;vn("setObjectAlpha",K=>{t(1,L=K)});function A(K){K.button==2&&(M=="translate"?t(4,M="rotate"):t(4,M="translate"))}nr(()=>{document.addEventListener("contextmenu",A)}),ct(()=>{document.removeEventListener("contextmenu",A)});function b(K){return K.x!=n.x||K.y!=n.y||K.z!=n.z}function S(K){return K.x!=i.x||K.y!=i.y||K.z!=i.z}function G(){_&&(b(_.position)&&(He(x,n.x=_.position.x,n),He(x,n.y=_.position.y,n),He(x,n.z=_.position.z,n),Gn.sendMovementUpdate(os(n))),S(_.rotation)&&(He(m,i.x=_.rotation.x,i),He(m,i.y=_.rotation.y,i),He(m,i.z=_.rotation.z,i),Gn.sendRotationUpdate(i)))}const O=()=>{M=="translate"?t(4,M="rotate"):t(4,M="translate")},C=()=>{_.rotation.set(0,0,0,i.order),G()},N=()=>{_.position.set(o.x,o.y,o.z),G()};function z(){g=ss(this.value),t(5,g)}const Z=()=>{Rt("placeOnGround").then(K=>{const ce=Gi(K);_.position.set(ce.x,ce.y,ce.z),G()})};function R(){y=ss(this.value),t(6,y)}function W(){L=ss(this.value),t(1,L)}const $=()=>{Rt("cancelPlacement"),Gn.show.set(!1),He(hs,l=null,l)},ee=()=>{t(7,E=!E)},Me=()=>{Rt("addToCart",l)},se=K=>{G()},V=K=>{if(!K.detail.value&&c!=null){const U=d.find(ae=>ae.entity===c),Pe=os(n);U.position=Pe;const Te=os(i);U.rotation=Te,He(Bn,d=[...d],d),Rt("updateCartItem",U)}};function Q(K){_=K,t(0,_)}return r.$$.update=()=>{r.$$.dirty[0]&2&&Rt("setObjectAlpha",{alpha:L}),r.$$.dirty[0]&13&&_&&(_.rotation.set(i.x,i.y,i.z,i.order),_.position.set(n.x,n.y,n.z))},[_,L,n,i,M,g,y,E,s,a,o,l,c,h,d,f,p,v,x,m,u,G,O,C,N,z,Z,R,W,$,ee,Me,se,V,Q]}class S0 extends _t{constructor(e){super(),gt(this,e,M0,x0,pt,{},null,[-1,-1])}}function Zl(r){let e,t,n,i;return e=new Gg({}),n=new S0({}),{c(){lt(e.$$.fragment),t=ge(),lt(n.$$.fragment)},m(s,a){it(e,s,a),Qe(s,t,a),it(n,s,a),i=!0},i(s){i||(ye(e.$$.fragment,s),ye(n.$$.fragment,s),i=!0)},o(s){Ce(e.$$.fragment,s),Ce(n.$$.fragment,s),i=!1},d(s){rt(e,s),s&&Ze(t),rt(n,s)}}}function b0(r){let e,t,n=r[0]&&Zl();return{c(){n&&n.c(),e=er()},m(i,s){n&&n.m(i,s),Qe(i,e,s),t=!0},p(i,s){i[0]?n?s&1&&ye(n,1):(n=Zl(),n.c(),ye(n,1),n.m(e.parentNode,e)):n&&(vi(),Ce(n,1,1,()=>{n=null}),xi())},i(i){t||(ye(n),t=!0)},o(i){Ce(n),t=!1},d(i){n&&n.d(i),i&&Ze(e)}}}function Ql(r){let e,t;return e=new Ag({}),{c(){lt(e.$$.fragment)},m(n,i){it(e,n,i),t=!0},i(n){t||(ye(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){rt(e,n)}}}function y0(r){let e,t,n,i,s,a;e=new yg({props:{$$slots:{default:[b0]},$$scope:{ctx:r}}}),n=new Dg({});let o=r[1]&&Ql();return{c(){lt(e.$$.fragment),t=ge(),lt(n.$$.fragment),i=ge(),o&&o.c(),s=er()},m(l,c){it(e,l,c),Qe(l,t,c),it(n,l,c),Qe(l,i,c),o&&o.m(l,c),Qe(l,s,c),a=!0},p(l,[c]){const h={};c&17&&(h.$$scope={dirty:c,ctx:l}),e.$set(h),l[1]?o?c&2&&ye(o,1):(o=Ql(),o.c(),ye(o,1),o.m(s.parentNode,s)):o&&(vi(),Ce(o,1,1,()=>{o=null}),xi())},i(l){a||(ye(e.$$.fragment,l),ye(n.$$.fragment,l),ye(o),a=!0)},o(l){Ce(e.$$.fragment,l),Ce(n.$$.fragment,l),Ce(o),a=!1},d(l){rt(e,l),l&&Ze(t),rt(n,l),l&&Ze(i),o&&o.d(l),l&&Ze(s)}}}function w0(r,e,t){let n,i,s;return Re(r,pa,a=>t(2,n=a)),Re(r,fs,a=>t(0,i=a)),Re(r,vs,a=>t(1,s=a)),He(pa,n="ps-housing",n),[i,s]}class E0 extends _t{constructor(e){super(),gt(this,e,w0,y0,pt,{})}}new E0({target:document.getElementById("app")});
