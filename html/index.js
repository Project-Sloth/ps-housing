const iu=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};iu();function bt(){}function ha(r,e){for(const t in e)r[t]=e[t];return r}function ic(r){return r()}function Ha(){return Object.create(null)}function sn(r){r.forEach(ic)}function gs(r){return typeof r=="function"}function dt(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function ru(r){return Object.keys(r).length===0}function Aa(r,...e){if(r==null)return bt;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ca(r){let e;return Aa(r,t=>e=t)(),e}function Ae(r,e,t){r.$$.on_destroy.push(Aa(e,t))}function An(r,e,t,n){if(r){const i=rc(r,e,t,n);return r[0](i)}}function rc(r,e,t,n){return r[1]&&n?ha(t.ctx.slice(),r[1](n(e))):t.ctx}function Cn(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function Pn(r,e,t,n,i,s){if(i){const a=rc(e,t,n,s);r.p(a,i)}}function Ln(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function su(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function Va(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function Ue(r,e,t){return r.set(t),e}function au(r){return r&&gs(r.destroy)?r.destroy:bt}function U(r,e){r.appendChild(e)}function We(r,e,t){r.insertBefore(e,t||null)}function He(r){r.parentNode&&r.parentNode.removeChild(r)}function nr(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function te(r){return document.createElement(r)}function Je(r){return document.createTextNode(r)}function he(){return Je(" ")}function Si(){return Je("")}function Ie(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Y(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function ls(r){return r===""?null:+r}function ou(r){return Array.from(r.childNodes)}function wt(r,e){e=""+e,r.data!==e&&(r.data=e)}function Mn(r,e){r.value=e==null?"":e}function Wa(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function ds(r,e,t){r.classList[t?"add":"remove"](e)}function lu(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}let Cr;function Sr(r){Cr=r}function ir(){if(!Cr)throw new Error("Function called outside component initialization");return Cr}function rr(r){ir().$$.on_mount.push(r)}function ct(r){ir().$$.on_destroy.push(r)}function _s(){const r=ir();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=lu(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function pn(r,e){return ir().$$.context.set(r,e),e}function Tn(r){return ir().$$.context.get(r)}function Ki(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Gi=[],Hn=[];let qi=[];const da=[],sc=Promise.resolve();let pa=!1;function ac(){pa||(pa=!0,sc.then(oc))}function Pr(){return ac(),sc}function ma(r){qi.push(r)}function vs(r){da.push(r)}const Is=new Set;let yi=0;function oc(){if(yi!==0)return;const r=Cr;do{try{for(;yi<Gi.length;){const e=Gi[yi];yi++,Sr(e),cu(e.$$)}}catch(e){throw Gi.length=0,yi=0,e}for(Sr(null),Gi.length=0,yi=0;Hn.length;)Hn.pop()();for(let e=0;e<qi.length;e+=1){const t=qi[e];Is.has(t)||(Is.add(t),t())}qi.length=0}while(Gi.length);for(;da.length;)da.pop()();pa=!1,Is.clear(),Sr(r)}function cu(r){if(r.fragment!==null){r.update(),sn(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(ma)}}function uu(r){const e=[],t=[];qi.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),qi=e}const cs=new Set;let pi;function vi(){pi={r:0,c:[],p:pi}}function xi(){pi.r||sn(pi.c),pi=pi.p}function be(r,e){r&&r.i&&(cs.delete(r),r.i(e))}function Ce(r,e,t,n){if(r&&r.o){if(cs.has(r))return;cs.add(r),pi.c.push(()=>{cs.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function xs(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function at(r){r&&r.c()}function nt(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||ma(()=>{const a=r.$$.on_mount.map(ic).filter(gs);r.$$.on_destroy?r.$$.on_destroy.push(...a):sn(a),r.$$.on_mount=[]}),s.forEach(ma)}function it(r,e){const t=r.$$;t.fragment!==null&&(uu(t.after_update),sn(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function fu(r,e){r.$$.dirty[0]===-1&&(Gi.push(r),ac(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function mt(r,e,t,n,i,s,a,o=[-1]){const l=Cr;Sr(r);const c=r.$$={fragment:null,ctx:[],props:s,update:bt,not_equal:i,bound:Ha(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ha(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let f=!1;if(c.ctx=t?t(r,e.props||{},(d,u,...p)=>{const g=p.length?p[0]:u;return c.ctx&&i(c.ctx[d],c.ctx[d]=g)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](g),f&&fu(r,d)),u}):[],c.update(),f=!0,sn(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const d=ou(e.target);c.fragment&&c.fragment.l(d),d.forEach(He)}else c.fragment&&c.fragment.c();e.intro&&be(r.$$.fragment),nt(r,e.target,e.anchor,e.customElement),oc()}Sr(l)}class gt{$destroy(){it(this,1),this.$destroy=bt}$on(e,t){if(!gs(t))return bt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!ru(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function on(r,e){const t=n=>{const{action:i,data:s}=n.data;i===r&&e(s)};rr(()=>window.addEventListener("message",t)),ct(()=>window.removeEventListener("message",t))}const wi=[];function lc(r,e){return{subscribe:Ye(r,e).subscribe}}function Ye(r,e=bt){let t;const n=new Set;function i(o){if(dt(r,o)&&(r=o,t)){const l=!wi.length;for(const c of n)c[1](),wi.push(c,r);if(l){for(let c=0;c<wi.length;c+=2)wi[c][0](wi[c+1]);wi.length=0}}}function s(o){i(o(r))}function a(o,l=bt){const c=[o,l];return n.add(c),n.size===1&&(t=e(i)||bt),o(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:a}}function hu(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return lc(t,a=>{let o=!1;const l=[];let c=0,f=bt;const d=()=>{if(c)return;f();const p=e(n?l[0]:l,a);s?a(p):f=gs(p)?p:bt},u=i.map((p,g)=>Aa(p,v=>{l[g]=v,c&=~(1<<g),o&&d()},()=>{c|=1<<g}));return o=!0,d(),function(){sn(u),f(),o=!1}})}const yr=Ye(!1),Ms=Ye(!1),ga=Ye(""),ps=Ye(null),Qn=Ye(null),ms=Ye(null),jt=Ye(!1),wr=Ye(!1),Er=Ye(!1),Wi=Ye([]),Bn=Ye([]);let cc=!1;Ms.subscribe(r=>{cc=r});let uc="";ga.subscribe(r=>{uc=r});async function Et(r,e={},t){if(cc==!0&&t)return Promise.resolve(t||{});const n={method:"post",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(e)},i=window.GetParentResourceName?window.GetParentResourceName():uc;return await(await fetch(`https://${i}/${r}`,n)).json()}function Hi(r){return{x:r.x,y:r.z,z:-r.y}}function us(r){return{x:r.x,y:-r.z,z:r.y}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="151",du=0,ja=1,pu=2,fc=1,hc=2,_r=3,Jn=0,Kt=1,Sn=2,Kn=0,Yi=1,Xa=2,qa=3,Ya=4,mu=5,Vi=100,gu=101,_u=102,Za=103,Qa=104,vu=200,xu=201,Mu=202,bu=203,dc=204,pc=205,Su=206,yu=207,wu=208,Eu=209,Tu=210,Au=0,Cu=1,Pu=2,_a=3,Lu=4,Ru=5,Du=6,Iu=7,mc=0,Uu=1,Nu=2,wn=0,Ou=1,Fu=2,zu=3,gc=4,ku=5,_c=300,Ji=301,$i=302,va=303,xa=304,bs=306,Ma=1e3,mn=1001,ba=1002,Ht=1003,Ka=1004,Us=1005,ln=1006,Bu=1007,Lr=1008,Mi=1009,Gu=1010,Hu=1011,vc=1012,Vu=1013,mi=1014,gi=1015,Rr=1016,Wu=1017,ju=1018,Zi=1020,Xu=1021,gn=1023,qu=1024,Yu=1025,_i=1026,er=1027,Zu=1028,Qu=1029,Ku=1030,Ju=1031,$u=1033,Ns=33776,Os=33777,Fs=33778,zs=33779,Ja=35840,$a=35841,eo=35842,to=35843,ef=36196,no=37492,io=37496,ro=37808,so=37809,ao=37810,oo=37811,lo=37812,co=37813,uo=37814,fo=37815,ho=37816,po=37817,mo=37818,go=37819,_o=37820,vo=37821,ks=36492,tf=36283,xo=36284,Mo=36285,bo=36286,$n=3e3,st=3001,nf=3200,rf=3201,xc=0,sf=1,xn="srgb",Dr="srgb-linear",Mc="display-p3",Bs=7680,af=519,So=35044,yo="300 es",Sa=1035;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wo=1234567;const Tr=Math.PI/180,Ir=180/Math.PI;function ar(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Wt(r,e,t){return Math.max(e,Math.min(t,r))}function La(r,e){return(r%e+e)%e}function of(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function lf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ar(r,e,t){return(1-t)*r+t*e}function cf(r,e,t,n){return Ar(r,e,1-Math.exp(-t*n))}function uf(r,e=1){return e-Math.abs(La(r,e*2)-e)}function ff(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function hf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function df(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pf(r,e){return r+Math.random()*(e-r)}function mf(r){return r*(.5-Math.random())}function gf(r){r!==void 0&&(wo=r);let e=wo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _f(r){return r*Tr}function vf(r){return r*Ir}function ya(r){return(r&r-1)===0&&r!==0}function xf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function bc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mf(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),f=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*f,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*f,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*f,o*c);break;case"XZX":r.set(o*f,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*f,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vr(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:Tr,RAD2DEG:Ir,generateUUID:ar,clamp:Wt,euclideanModulo:La,mapLinear:of,inverseLerp:lf,lerp:Ar,damp:cf,pingpong:uf,smoothstep:ff,smootherstep:hf,randInt:df,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:_f,radToDeg:vf,isPowerOfTwo:ya,ceilPowerOfTwo:xf,floorPowerOfTwo:bc,setQuaternionFromProperEuler:Mf,normalize:Yt,denormalize:vr};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],h=i[6],_=i[1],M=i[4],x=i[7],y=i[2],E=i[5],P=i[8];return s[0]=a*v+o*_+l*y,s[3]=a*m+o*M+l*E,s[6]=a*h+o*x+l*P,s[1]=c*v+f*_+d*y,s[4]=c*m+f*M+d*E,s[7]=c*h+f*x+d*P,s[2]=u*v+p*_+g*y,s[5]=u*m+p*M+g*E,s[8]=u*h+p*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-n*s*f+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,u=o*l-f*s,p=c*s-a*l,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-f*n)*v,e[2]=(o*n-i*a)*v,e[3]=u*v,e[4]=(f*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ve;function Sc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ur(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const bf=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Sf=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yf(r){return r.convertSRGBToLinear().applyMatrix3(Sf)}function wf(r){return r.applyMatrix3(bf).convertLinearToSRGB()}const Ef={[Dr]:r=>r,[xn]:r=>r.convertSRGBToLinear(),[Mc]:yf},Tf={[Dr]:r=>r,[xn]:r=>r.convertLinearToSRGB(),[Mc]:wf},en={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Dr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ef[e],i=Tf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Ei;class yc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Ur("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class wc{constructor(e=null){this.isSource=!0,this.uuid=ar(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Vs(i[a].image)):s.push(Vs(i[a]))}else s=Vs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?yc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Af=0;class Jt extends sr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=mn,i=mn,s=ln,a=Lr,o=gn,l=Mi,c=Jt.DEFAULT_ANISOTROPY,f=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=ar(),this.name="",this.source=new wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ma:e.x=e.x-Math.floor(e.x);break;case mn:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ma:e.y=e.y-Math.floor(e.y);break;case mn:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=_c;Jt.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,i=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(p+1)/2,y=(h+1)/2,E=(f+u)/4,P=(d+v)/4,T=(g+m)/4;return M>x&&M>y?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=P/n):x>y?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=T/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=P/s,i=T/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-f)*(u-f));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-f)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends sr{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ec extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cf extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],f=n[i+2],d=n[i+3];const u=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==p||f!==g){let m=1-o;const h=l*u+c*p+f*g+d*v,_=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const y=Math.sqrt(M),E=Math.atan2(y,h*_);m=Math.sin(m*E)/y,o=Math.sin(o*E)/y}const x=o*_;if(l=l*m+u*x,c=c*m+p*x,f=f*m+g*x,d=d*m+v*x,m===1-o){const y=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=y,c*=y,f*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],f=n[i+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+f*d+l*p-c*u,e[t+1]=l*g+f*u+c*d-o*p,e[t+2]=c*g+f*p+o*u-l*d,e[t+3]=f*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(i/2),d=o(s/2),u=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*f*d+c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d-u*p*g;break;case"YXZ":this._x=u*f*d+c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d+u*p*g;break;case"ZXY":this._x=u*f*d-c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d-u*p*g;break;case"ZYX":this._x=u*f*d-c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d+u*p*g;break;case"YZX":this._x=u*f*d+c*p*g,this._y=c*p*d+u*f*g,this._z=c*f*g-u*p*d,this._w=c*f*d-u*p*g;break;case"XZY":this._x=u*f*d-c*p*g,this._y=c*p*d-u*f*g,this._z=c*f*g+u*p*d,this._w=c*f*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+a*o+i*c-s*l,this._y=i*f+a*l+s*o-n*c,this._z=s*f+a*c+n*l-i*o,this._w=a*f-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-t)*f)/c,u=Math.sin(t*f)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,f=l*n+o*t-s*i,d=l*i+s*n-a*t,u=-s*t-a*n-o*i;return this.x=c*l+u*-s+f*-o-d*-a,this.y=f*l+u*-a+d*-s-c*-o,this.z=d*l+u*-o+c*-a-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new D,Eo=new Vt;class Nr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ti.copy(e.boundingBox),Ti.applyMatrix4(e.matrixWorld),this.union(Ti);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Nn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else i.boundingBox===null&&i.computeBoundingBox(),Ti.copy(i.boundingBox),Ti.applyMatrix4(e.matrixWorld),this.union(Ti)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Fr.subVectors(this.max,fr),Ai.subVectors(e.a,fr),Ci.subVectors(e.b,fr),Pi.subVectors(e.c,fr),Wn.subVectors(Ci,Ai),jn.subVectors(Pi,Ci),si.subVectors(Ai,Pi);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-si.y,si.x,0];return!js(t,Ai,Ci,Pi,Fr)||(t=[1,0,0,0,1,0,0,0,1],!js(t,Ai,Ci,Pi,Fr))?!1:(zr.crossVectors(Wn,jn),t=[zr.x,zr.y,zr.z],js(t,Ai,Ci,Pi,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],Nn=new D,Ti=new Nr,Ai=new D,Ci=new D,Pi=new D,Wn=new D,jn=new D,si=new D,fr=new D,Fr=new D,zr=new D,ai=new D;function js(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ai.fromArray(r,s);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),f=n.dot(ai);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Pf=new Nr,hr=new D,Xs=new D;class Ss{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Xs)),this.expandByPoint(hr.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new D,qs=new D,kr=new D,Xn=new D,Ys=new D,Br=new D,Zs=new D;class Ra{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){qs.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(kr),o=Xn.dot(this.direction),l=-Xn.dot(kr),c=Xn.lengthSq(),f=Math.abs(1-a*a);let d,u,p,g;if(f>0)if(d=a*l-o,u=a*o-l,g=s*f,d>=0)if(u>=-g)if(u<=g){const v=1/f;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qs).addScaledVector(kr,u),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,s){Ys.subVectors(t,e),Br.subVectors(n,e),Zs.crossVectors(Ys,Br);let a=this.direction.dot(Zs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const l=o*this.direction.dot(Br.crossVectors(Xn,Br));if(l<0)return null;const c=o*this.direction.dot(Ys.cross(Xn));if(c<0||l+c>a)return null;const f=-o*Xn.dot(Zs);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,f,d,u,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=d,h[14]=u,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,p=a*d,g=o*f,v=o*d;t[0]=l*f,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*f,p=l*d,g=c*f,v=c*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*f,p=l*d,g=c*f,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*f,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*f,p=a*d,g=o*f,v=o*d;t[0]=l*f,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*f,t[4]=-d,t[8]=c*f,t[1]=u*d+v,t[5]=a*f,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*f,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lf,e,Rf)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),qn.crossVectors(n,tn),qn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),qn.crossVectors(n,tn)),qn.normalize(),Gr.crossVectors(tn,qn),i[0]=qn.x,i[4]=Gr.x,i[8]=tn.x,i[1]=qn.y,i[5]=Gr.y,i[9]=tn.y,i[2]=qn.z,i[6]=Gr.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],h=n[14],_=n[3],M=n[7],x=n[11],y=n[15],E=i[0],P=i[4],T=i[8],S=i[12],b=i[1],F=i[5],k=i[9],L=i[13],O=i[2],B=i[6],K=i[10],R=i[14],H=i[3],Z=i[7],Q=i[11],_e=i[15];return s[0]=a*E+o*b+l*O+c*H,s[4]=a*P+o*F+l*B+c*Z,s[8]=a*T+o*k+l*K+c*Q,s[12]=a*S+o*L+l*R+c*_e,s[1]=f*E+d*b+u*O+p*H,s[5]=f*P+d*F+u*B+p*Z,s[9]=f*T+d*k+u*K+p*Q,s[13]=f*S+d*L+u*R+p*_e,s[2]=g*E+v*b+m*O+h*H,s[6]=g*P+v*F+m*B+h*Z,s[10]=g*T+v*k+m*K+h*Q,s[14]=g*S+v*L+m*R+h*_e,s[3]=_*E+M*b+x*O+y*H,s[7]=_*P+M*F+x*B+y*Z,s[11]=_*T+M*k+x*K+y*Q,s[15]=_*S+M*L+x*R+y*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*p-n*l*p)+v*(+t*l*p-t*c*u+s*a*u-i*a*p+i*c*f-s*l*f)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*f-n*c*f)+h*(-i*o*f-t*l*d+t*o*u+i*a*d-n*a*u+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=d*m*c-v*u*c+v*l*p-o*m*p-d*l*h+o*u*h,M=g*u*c-f*m*c-g*l*p+a*m*p+f*l*h-a*u*h,x=f*v*c-g*d*c+g*o*p-a*v*p-f*o*h+a*d*h,y=g*d*l-f*v*l-g*o*u+a*v*u+f*o*m-a*d*m,E=t*_+n*M+i*x+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/E;return e[0]=_*P,e[1]=(v*u*s-d*m*s-v*i*p+n*m*p+d*i*h-n*u*h)*P,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*h+n*l*h)*P,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*p-n*l*p)*P,e[4]=M*P,e[5]=(f*m*s-g*u*s+g*i*p-t*m*p-f*i*h+t*u*h)*P,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*h-t*l*h)*P,e[7]=(a*u*s-f*l*s+f*i*c-t*u*c-a*i*p+t*l*p)*P,e[8]=x*P,e[9]=(g*d*s-f*v*s-g*n*p+t*v*p+f*n*h-t*d*h)*P,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*h+t*o*h)*P,e[11]=(f*o*s-a*d*s-f*n*c+t*d*c+a*n*p-t*o*p)*P,e[12]=y*P,e[13]=(f*v*i-g*d*i+g*n*u-t*v*u-f*n*m+t*d*m)*P,e[14]=(g*o*i-a*v*i-g*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*d*i-f*o*i+f*n*l-t*d*l-a*n*u+t*o*u)*P,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,f*o+n,f*l-i*a,0,c*l-i*o,f*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,d=o+o,u=s*c,p=s*f,g=s*d,v=a*f,m=a*d,h=o*d,_=l*c,M=l*f,x=l*d,y=n.x,E=n.y,P=n.z;return i[0]=(1-(v+h))*y,i[1]=(p+x)*y,i[2]=(g-M)*y,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(u+h))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+M)*P,i[9]=(m-_)*P,i[10]=(1-(u+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Li.set(i[0],i[1],i[2]).length();const a=Li.set(i[4],i[5],i[6]).length(),o=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const c=1/s,f=1/a,d=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=f,un.elements[5]*=f,un.elements[6]*=f,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,t.setFromRotationMatrix(un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),u=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),f=1/(a-s),d=(t+e)*l,u=(n+i)*c,p=(a+s)*f;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*f,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new D,un=new _t,Lf=new D(0,0,0),Rf=new D(1,1,1),qn=new D,Gr=new D,tn=new D,To=new _t,Ao=new Vt;class bi{constructor(e=0,t=0,n=0,i=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],f=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return To.makeRotationFromQuaternion(e),this.setFromRotationMatrix(To,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ao.setFromEuler(this),this.setFromQuaternion(Ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Da{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const Co=new D,Ri=new Vt,Fn=new _t,Hr=new D,dr=new D,If=new D,Uf=new Vt,Po=new D(1,0,0),Lo=new D(0,1,0),Ro=new D(0,0,1),Nf={type:"added"},Do={type:"removed"};class Tt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new D,t=new bi,n=new Vt,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ve}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Po,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Ro,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Po,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Ro,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(dr,Hr,this.up):Fn.lookAt(Hr,dr,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Do)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Do)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Tt.DEFAULT_UP=new D(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new D,zn=new D,Qs=new D,kn=new D,Di=new D,Ii=new D,Io=new D,Ks=new D,Js=new D,$s=new D;let Vr=!1;class dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fn.subVectors(e,t),i.cross(fn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){fn.subVectors(i,t),zn.subVectors(n,t),Qs.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(zn),l=fn.dot(Qs),c=zn.dot(zn),f=zn.dot(Qs),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(c*l-o*f)*u,g=(a*f-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,t,n,i,s,a,o,l){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,kn),l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l}static isFrontFacing(e,t,n,i){return fn.subVectors(n,t),zn.subVectors(e,t),fn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),fn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Vr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vr=!0),dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Di.subVectors(i,n),Ii.subVectors(s,n),Ks.subVectors(e,n);const l=Di.dot(Ks),c=Ii.dot(Ks);if(l<=0&&c<=0)return t.copy(n);Js.subVectors(e,i);const f=Di.dot(Js),d=Ii.dot(Js);if(f>=0&&d<=f)return t.copy(i);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(n).addScaledVector(Di,a);$s.subVectors(e,s);const p=Di.dot($s),g=Ii.dot($s);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ii,o);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return Io.subVectors(s,i),o=(d-f)/(d-f+(p-g)),t.copy(i).addScaledVector(Io,o);const h=1/(m+v+u);return a=v*h,o=u*h,t.copy(n).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Of=0;class or extends sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Yi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function ea(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=en.workingColorSpace){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=en.workingColorSpace){if(e=La(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ea(a,s,e+1/3),this.g=ea(a,s,e),this.b=ea(a,s,e-1/3)}return en.toWorkingColorSpace(this,i),this}setStyle(e,t=xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,en.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,en.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,f,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=Tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return en.fromWorkingColorSpace(Ot.copy(this),e),Wt(Ot.r*255,0,255)<<16^Wt(Ot.g*255,0,255)<<8^Wt(Ot.b*255,0,255)<<0}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=en.workingColorSpace){en.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=en.workingColorSpace){return en.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=xn){en.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Wr);const n=Ar(hn.h,Wr.h,t),i=Ar(hn.s,Wr.s,t),s=Ar(hn.l,Wr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new $e;$e.NAMES=Tc;class ys extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new D,jr=new Qe;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ac extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cc extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ff=0;const an=new _t,ta=new Tt,Ui=new D,nn=new Nr,pr=new Nr,Dt=new D;class Xt extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Cc:Ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(nn.min,pr.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,pr.max),nn.expandByPoint(Dt)):(nn.expandByPoint(pr.min),nn.expandByPoint(pr.max))}nn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Dt.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(e,c),Dt.add(Ui)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let b=0;b<o;b++)c[b]=new D,f[b]=new D;const d=new D,u=new D,p=new D,g=new Qe,v=new Qe,m=new Qe,h=new D,_=new D;function M(b,F,k){d.fromArray(i,b*3),u.fromArray(i,F*3),p.fromArray(i,k*3),g.fromArray(a,b*2),v.fromArray(a,F*2),m.fromArray(a,k*2),u.sub(d),p.sub(d),v.sub(g),m.sub(g);const L=1/(v.x*m.y-m.x*v.y);!isFinite(L)||(h.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(L),_.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(L),c[b].add(h),c[F].add(h),c[k].add(h),f[b].add(_),f[F].add(_),f[k].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,F=x.length;b<F;++b){const k=x[b],L=k.start,O=k.count;for(let B=L,K=L+O;B<K;B+=3)M(n[B+0],n[B+1],n[B+2])}const y=new D,E=new D,P=new D,T=new D;function S(b){P.fromArray(s,b*3),T.copy(P);const F=c[b];y.copy(F),y.sub(P.multiplyScalar(P.dot(F))).normalize(),E.crossVectors(T,F);const L=E.dot(f[b])<0?-1:1;l[b*4]=y.x,l[b*4+1]=y.y,l[b*4+2]=y.z,l[b*4+3]=L}for(let b=0,F=x.length;b<F;++b){const k=x[b],L=k.start,O=k.count;for(let B=L,K=L+O;B<K;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,f=new D,d=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,u=new c.constructor(l.length*f);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*f;for(let h=0;h<f;h++)u[g++]=c[p++]}return new En(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const u=c[f],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,p=d.length;u<p;u++)f.push(d[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new _t,_n=new Ra,Xr=new Ss,No=new D,Ni=new D,Oi=new D,Fi=new D,na=new D,qr=new D,Yr=new Qe,Zr=new Qe,Qr=new Qe,Oo=new D,Fo=new D,zo=new D,Kr=new D,Jr=new D;class pe extends Tt{constructor(e=new Xt,t=new ys){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(na.fromBufferAttribute(d,e),a?qr.addScaledVector(na,f):qr.addScaledVector(na.sub(t),f))}t.add(qr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),_n.copy(e.ray).recast(e.near),Xr.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Xr,No)===null||_n.origin.distanceToSquared(No)>(e.far-e.near)**2))||(Uo.copy(s).invert(),_n.copy(e.ray).applyMatrix4(Uo),n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,f=n.attributes.uv2,d=n.attributes.normal,u=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,v=u.length;g<v;g++){const m=u[g],h=i[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,y=M;x<y;x+=3){const E=o.getX(x),P=o.getX(x+1),T=o.getX(x+2);a=$r(this,h,e,_n,c,f,d,E,P,T),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);a=$r(this,i,e,_n,c,f,d,_,M,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,v=u.length;g<v;g++){const m=u[g],h=i[m.materialIndex],_=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,y=M;x<y;x+=3){const E=x,P=x+1,T=x+2;a=$r(this,h,e,_n,c,f,d,E,P,T),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,M=m+1,x=m+2;a=$r(this,i,e,_n,c,f,d,_,M,x),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function zf(r,e,t,n,i,s,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Jn,o),l===null)return null;Jr.copy(o),Jr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Jr);return c<t.near||c>t.far?null:{distance:c,point:Jr.clone(),object:r}}function $r(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ni),r.getVertexPosition(l,Oi),r.getVertexPosition(c,Fi);const f=zf(r,e,t,n,Ni,Oi,Fi,Kr);if(f){i&&(Yr.fromBufferAttribute(i,o),Zr.fromBufferAttribute(i,l),Qr.fromBufferAttribute(i,c),f.uv=dn.getInterpolation(Kr,Ni,Oi,Fi,Yr,Zr,Qr,new Qe)),s&&(Yr.fromBufferAttribute(s,o),Zr.fromBufferAttribute(s,l),Qr.fromBufferAttribute(s,c),f.uv2=dn.getInterpolation(Kr,Ni,Oi,Fi,Yr,Zr,Qr,new Qe)),a&&(Oo.fromBufferAttribute(a,o),Fo.fromBufferAttribute(a,l),zo.fromBufferAttribute(a,c),f.normal=dn.getInterpolation(Kr,Ni,Oi,Fi,Oo,Fo,zo,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};dn.getNormal(Ni,Oi,Fi,d.normal),f.face=d}return f}class Mt extends Xt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(f,3)),this.setAttribute("uv",new ht(d,2));function g(v,m,h,_,M,x,y,E,P,T,S){const b=x/P,F=y/T,k=x/2,L=y/2,O=E/2,B=P+1,K=T+1;let R=0,H=0;const Z=new D;for(let Q=0;Q<K;Q++){const _e=Q*F-L;for(let se=0;se<B;se++){const W=se*b-k;Z[v]=W*_,Z[m]=_e*M,Z[h]=O,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[h]=E>0?1:-1,f.push(Z.x,Z.y,Z.z),d.push(se/P),d.push(1-Q/T),R+=1}}for(let Q=0;Q<T;Q++)for(let _e=0;_e<P;_e++){const se=u+_e+B*Q,W=u+_e+B*(Q+1),$=u+(_e+1)+B*(Q+1),ee=u+(_e+1)+B*Q;l.push(se,W,ee),l.push(W,$,ee),H+=6}o.addGroup(p,H,S),p+=H,u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=tr(r[t]);for(const i in n)e[i]=n[i]}return e}function kf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Pc(r){return r.getRenderTarget()===null&&r.outputEncoding===st?xn:Dr}const Lc={clone:tr,merge:Gt};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends Rc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zi=-90,ki=1;class Hf extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new rn(zi,ki,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new rn(zi,ki,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new rn(zi,ki,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new rn(zi,ki,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new rn(zi,ki,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new rn(zi,ki,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,f=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Dc extends Jt{constructor(e,t,n,i,s,a,o,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,i,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vf extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Dc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mt(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Kn});s.uniforms.tEquirect.value=t;const a=new pe(i,s),o=t.minFilter;return t.minFilter===Lr&&(t.minFilter=ln),new Hf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ia=new D,Wf=new D,jf=new Ve;class ci{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ia.subVectors(n,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ia),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jf.getNormalMatrix(e),i=this.coplanarPoint(ia).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ss,es=new D;class Ia{constructor(e=new ci,t=new ci,n=new ci,i=new ci,s=new ci,a=new ci){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],f=n[6],d=n[7],u=n[8],p=n[9],g=n[10],v=n[11],m=n[12],h=n[13],_=n[14],M=n[15];return t[0].setComponents(o-i,d-l,v-u,M-m).normalize(),t[1].setComponents(o+i,d+l,v+u,M+m).normalize(),t[2].setComponents(o+s,d+c,v+p,M+h).normalize(),t[3].setComponents(o-s,d-c,v-p,M-h).normalize(),t[4].setComponents(o-a,d-f,v-g,M-_).normalize(),t[5].setComponents(o+a,d+f,v+g,M+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(es.x=i.normal.x>0?e.max.x:e.min.x,es.y=i.normal.y>0?e.max.y:e.min.y,es.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xf(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,f){const d=c.array,u=c.usage,p=r.createBuffer();r.bindBuffer(f,p),r.bufferData(f,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,d){const u=f.array,p=f.updateRange;r.bindBuffer(d,c),p.count===-1?r.bufferSubData(d,0,u):(t?r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(r.deleteBuffer(f.buffer),n.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,f)):d.version<c.version&&(s(d.buffer,c,f),d.version=c.version)}return{get:a,remove:o,update:l}}class ws extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,f=l+1,d=e/o,u=t/l,p=[],g=[],v=[],m=[];for(let h=0;h<f;h++){const _=h*u-a;for(let M=0;M<c;M++){const x=M*d-s;g.push(x,-_,0),v.push(0,0,1),m.push(M/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<o;_++){const M=_+c*h,x=_+c*(h+1),y=_+1+c*(h+1),E=_+1+c*h;p.push(M,x,E),p.push(x,y,E)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f="vec3 transformed = vec3( position );",eh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,th=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nh=`#ifdef USE_IRIDESCENCE
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
#endif`,ih=`#ifdef USE_BUMPMAP
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
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hh=`#define PI 3.141592653589793
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
} // validated`,dh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ph=`vec3 transformedNormal = objectNormal;
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
#endif`,mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_h=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lh=`#ifdef USE_GRADIENTMAP
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
}`,Rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nh=`uniform bool receiveShadow;
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
#endif`,Oh=`#if defined( USE_ENVMAP )
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
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
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
#endif`,Hh=`struct PhysicalMaterial {
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
}`,Vh=`
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
#endif`,Wh=`#if defined( RE_IndirectDiffuse )
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
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$h=`#if defined( USE_POINTS_UV )
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
#endif`,ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
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
#endif`,hd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ad=`float getShadowMask() {
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
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
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
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ud=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,zd=`#ifdef USE_UV
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
#endif`,kd=`#ifdef USE_UV
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
#endif`,Bd=`#ifdef USE_UV
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
#endif`,Gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ep=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,rp=`#define LAMBERT
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
}`,sp=`#define LAMBERT
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
}`,ap=`#define MATCAP
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
}`,op=`#define MATCAP
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
}`,lp=`#define NORMAL
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
}`,cp=`#define NORMAL
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
}`,up=`#define PHONG
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
}`,fp=`#define PHONG
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
}`,hp=`#define STANDARD
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
}`,dp=`#define STANDARD
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
}`,pp=`#define TOON
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
}`,mp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,_p=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,Mp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Fe={alphamap_fragment:qf,alphamap_pars_fragment:Yf,alphatest_fragment:Zf,alphatest_pars_fragment:Qf,aomap_fragment:Kf,aomap_pars_fragment:Jf,begin_vertex:$f,beginnormal_vertex:eh,bsdfs:th,iridescence_fragment:nh,bumpmap_pars_fragment:ih,clipping_planes_fragment:rh,clipping_planes_pars_fragment:sh,clipping_planes_pars_vertex:ah,clipping_planes_vertex:oh,color_fragment:lh,color_pars_fragment:ch,color_pars_vertex:uh,color_vertex:fh,common:hh,cube_uv_reflection_fragment:dh,defaultnormal_vertex:ph,displacementmap_pars_vertex:mh,displacementmap_vertex:gh,emissivemap_fragment:_h,emissivemap_pars_fragment:vh,encodings_fragment:xh,encodings_pars_fragment:Mh,envmap_fragment:bh,envmap_common_pars_fragment:Sh,envmap_pars_fragment:yh,envmap_pars_vertex:wh,envmap_physical_pars_fragment:Oh,envmap_vertex:Eh,fog_vertex:Th,fog_pars_vertex:Ah,fog_fragment:Ch,fog_pars_fragment:Ph,gradientmap_pars_fragment:Lh,lightmap_fragment:Rh,lightmap_pars_fragment:Dh,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:Uh,lights_pars_begin:Nh,lights_toon_fragment:Fh,lights_toon_pars_fragment:zh,lights_phong_fragment:kh,lights_phong_pars_fragment:Bh,lights_physical_fragment:Gh,lights_physical_pars_fragment:Hh,lights_fragment_begin:Vh,lights_fragment_maps:Wh,lights_fragment_end:jh,logdepthbuf_fragment:Xh,logdepthbuf_pars_fragment:qh,logdepthbuf_pars_vertex:Yh,logdepthbuf_vertex:Zh,map_fragment:Qh,map_pars_fragment:Kh,map_particle_fragment:Jh,map_particle_pars_fragment:$h,metalnessmap_fragment:ed,metalnessmap_pars_fragment:td,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:rd,morphtarget_vertex:sd,normal_fragment_begin:ad,normal_fragment_maps:od,normal_pars_fragment:ld,normal_pars_vertex:cd,normal_vertex:ud,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:hd,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,output_fragment:gd,packing:_d,premultiplied_alpha_fragment:vd,project_vertex:xd,dithering_fragment:Md,dithering_pars_fragment:bd,roughnessmap_fragment:Sd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:wd,shadowmap_pars_vertex:Ed,shadowmap_vertex:Td,shadowmask_pars_fragment:Ad,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Rd,specularmap_fragment:Dd,specularmap_pars_fragment:Id,tonemapping_fragment:Ud,tonemapping_pars_fragment:Nd,transmission_fragment:Od,transmission_pars_fragment:Fd,uv_pars_fragment:zd,uv_pars_vertex:kd,uv_vertex:Bd,worldpos_vertex:Gd,background_vert:Hd,background_frag:Vd,backgroundCube_vert:Wd,backgroundCube_frag:jd,cube_vert:Xd,cube_frag:qd,depth_vert:Yd,depth_frag:Zd,distanceRGBA_vert:Qd,distanceRGBA_frag:Kd,equirect_vert:Jd,equirect_frag:$d,linedashed_vert:ep,linedashed_frag:tp,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:rp,meshlambert_frag:sp,meshmatcap_vert:ap,meshmatcap_frag:op,meshnormal_vert:lp,meshnormal_frag:cp,meshphong_vert:up,meshphong_frag:fp,meshphysical_vert:hp,meshphysical_frag:dp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:_p,shadow_vert:vp,shadow_frag:xp,sprite_vert:Mp,sprite_frag:bp},le={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},bn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new $e(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};bn.physical={uniforms:Gt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const ts={r:0,b:0,g:0};function Sp(r,e,t,n,i,s,a){const o=new $e(0);let l=s===!0?0:1,c,f,d=null,u=0,p=null;function g(m,h){let _=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?t:e).get(M));const x=r.xr,y=x.getSession&&x.getSession();y&&y.environmentBlendMode==="additive"&&(M=null),M===null?v(o,l):M&&M.isColor&&(v(M,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===bs)?(f===void 0&&(f=new pe(new Mt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:tr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,f.material.toneMapped=M.encoding!==st,(d!==M||u!==M.version||p!==r.toneMapping)&&(f.material.needsUpdate=!0,d=M,u=M.version,p=r.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new pe(new ws(2,2),new Vn({name:"BackgroundMaterial",uniforms:tr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=M.encoding!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,h){m.getRGB(ts,Pc(r)),n.buffers.color.setClear(ts.r,ts.g,ts.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(m,h=1){o.set(m),l=h,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function yp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,f=!1;function d(O,B,K,R,H){let Z=!1;if(a){const Q=v(R,K,B);c!==Q&&(c=Q,p(c.object)),Z=h(O,R,K,H),Z&&_(O,R,K,H)}else{const Q=B.wireframe===!0;(c.geometry!==R.id||c.program!==K.id||c.wireframe!==Q)&&(c.geometry=R.id,c.program=K.id,c.wireframe=Q,Z=!0)}H!==null&&t.update(H,34963),(Z||f)&&(f=!1,T(O,B,K,R),H!==null&&r.bindBuffer(34963,t.get(H).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,B,K){const R=K.wireframe===!0;let H=o[O.id];H===void 0&&(H={},o[O.id]=H);let Z=H[B.id];Z===void 0&&(Z={},H[B.id]=Z);let Q=Z[R];return Q===void 0&&(Q=m(u()),Z[R]=Q),Q}function m(O){const B=[],K=[],R=[];for(let H=0;H<i;H++)B[H]=0,K[H]=0,R[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:R,object:O,attributes:{},index:null}}function h(O,B,K,R){const H=c.attributes,Z=B.attributes;let Q=0;const _e=K.getAttributes();for(const se in _e)if(_e[se].location>=0){const $=H[se];let ee=Z[se];if(ee===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),$===void 0||$.attribute!==ee||ee&&$.data!==ee.data)return!0;Q++}return c.attributesNum!==Q||c.index!==R}function _(O,B,K,R){const H={},Z=B.attributes;let Q=0;const _e=K.getAttributes();for(const se in _e)if(_e[se].location>=0){let $=Z[se];$===void 0&&(se==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),se==="instanceColor"&&O.instanceColor&&($=O.instanceColor));const ee={};ee.attribute=$,$&&$.data&&(ee.data=$.data),H[se]=ee,Q++}c.attributes=H,c.attributesNum=Q,c.index=R}function M(){const O=c.newAttributes;for(let B=0,K=O.length;B<K;B++)O[B]=0}function x(O){y(O,0)}function y(O,B){const K=c.newAttributes,R=c.enabledAttributes,H=c.attributeDivisors;K[O]=1,R[O]===0&&(r.enableVertexAttribArray(O),R[O]=1),H[O]!==B&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,B),H[O]=B)}function E(){const O=c.newAttributes,B=c.enabledAttributes;for(let K=0,R=B.length;K<R;K++)B[K]!==O[K]&&(r.disableVertexAttribArray(K),B[K]=0)}function P(O,B,K,R,H,Z){n.isWebGL2===!0&&(K===5124||K===5125)?r.vertexAttribIPointer(O,B,K,H,Z):r.vertexAttribPointer(O,B,K,R,H,Z)}function T(O,B,K,R){if(n.isWebGL2===!1&&(O.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const H=R.attributes,Z=K.getAttributes(),Q=B.defaultAttributeValues;for(const _e in Z){const se=Z[_e];if(se.location>=0){let W=H[_e];if(W===void 0&&(_e==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),_e==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){const $=W.normalized,ee=W.itemSize,ce=t.get(W);if(ce===void 0)continue;const N=ce.buffer,Le=ce.type,Te=ce.bytesPerElement;if(W.isInterleavedBufferAttribute){const ae=W.data,we=ae.stride,je=W.offset;if(ae.isInstancedInterleavedBuffer){for(let Se=0;Se<se.locationSize;Se++)y(se.location+Se,ae.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<se.locationSize;Se++)x(se.location+Se);r.bindBuffer(34962,N);for(let Se=0;Se<se.locationSize;Se++)P(se.location+Se,ee/se.locationSize,Le,$,we*Te,(je+ee/se.locationSize*Se)*Te)}else{if(W.isInstancedBufferAttribute){for(let ae=0;ae<se.locationSize;ae++)y(se.location+ae,W.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ae=0;ae<se.locationSize;ae++)x(se.location+ae);r.bindBuffer(34962,N);for(let ae=0;ae<se.locationSize;ae++)P(se.location+ae,ee/se.locationSize,Le,$,ee*Te,ee/se.locationSize*ae*Te)}}else if(Q!==void 0){const $=Q[_e];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(se.location,$);break;case 3:r.vertexAttrib3fv(se.location,$);break;case 4:r.vertexAttrib4fv(se.location,$);break;default:r.vertexAttrib1fv(se.location,$)}}}}E()}function S(){k();for(const O in o){const B=o[O];for(const K in B){const R=B[K];for(const H in R)g(R[H].object),delete R[H];delete B[K]}delete o[O]}}function b(O){if(o[O.id]===void 0)return;const B=o[O.id];for(const K in B){const R=B[K];for(const H in R)g(R[H].object),delete R[H];delete B[K]}delete o[O.id]}function F(O){for(const B in o){const K=o[B];if(K[O.id]===void 0)continue;const R=K[O.id];for(const H in R)g(R[H].object),delete R[H];delete K[O.id]}}function k(){L(),f=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:x,disableUnusedAttributes:E}}function wp(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,f){r.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let u,p;if(i)u=r,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,c,f,d),t.update(f,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Ep(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,d=r.getParameter(34930),u=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),v=r.getParameter(34921),m=r.getParameter(36347),h=r.getParameter(36348),_=r.getParameter(36349),M=u>0,x=a||e.has("OES_texture_float"),y=M&&x,E=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:M,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:E}}function Tp(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new ci,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?f(null):c();else{const _=s?0:n,M=_*4;let x=h.clippingState||null;l.value=x,x=f(g,u,M,p);for(let y=0;y!==M;++y)x[y]=t[y];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,x=p;M!==v;++M,x+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Ap(r){let e=new WeakMap;function t(a,o){return o===va?a.mapping=Ji:o===xa&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===va||o===xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vf(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Uc extends Rc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,ko=[.125,.215,.35,.446,.526,.582],hi=20,ra=new Uc,Bo=new $e;let sa=null;const ui=(1+Math.sqrt(5))/2,Bi=1/ui,Go=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,ui,Bi),new D(0,ui,-Bi),new D(Bi,0,ui),new D(-Bi,0,ui),new D(ui,Bi,0),new D(-ui,Bi,0)];class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){sa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sa),e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Rr,format:gn,encoding:$n,depthBuffer:!1},i=Vo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(s)),this._blurMaterial=Pp(s,e,t)}return i}_compileMaterial(e){const t=new pe(this._lodPlanes[0],e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,n,i){const o=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Bo),f.toneMapping=wn,f.autoClear=!1;const p=new ys({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new pe(new Mt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Bo),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):_===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const M=this._cubeSize;ns(i,_*M,h>2?M:0,M,M),f.setRenderTarget(i),v&&f.render(g,o),f.render(e,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ji||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new pe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Go[(i-1)%Go.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new pe(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),v=s/g,m=isFinite(s)?1+Math.floor(f*v):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const h=[];let _=0;for(let P=0;P<hi;++P){const T=P/v,S=Math.exp(-T*T/2);h.push(S),P===0?_+=S:P<m&&(_+=2*S)}for(let P=0;P<h.length;P++)h[P]=h[P]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const x=this._sizeLods[i],y=3*x*(i>M-ji?i-M+ji:0),E=4*(this._cubeSize-x);ns(t,y,E,3*x,2*x),l.setRenderTarget(t),l.render(d,ra)}}function Cp(r){const e=[],t=[],n=[];let i=r;const s=r-ji+1+ko.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ji?l=ko[a-r+ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,d=1+c,u=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),M=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let E=0;E<p;E++){const P=E%3*2/3-1,T=E>2?0:-1,S=[P,T,0,P+2/3,T,0,P+2/3,T+1,0,P,T,0,P+2/3,T+1,0,P,T+1,0];_.set(S,v*g*E),M.set(u,m*g*E);const b=[E,E,E,E,E,E];x.set(b,h*g*E)}const y=new Xt;y.setAttribute("position",new En(_,v)),y.setAttribute("uv",new En(M,m)),y.setAttribute("faceIndex",new En(x,h)),e.push(y),i>ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vo(r,e,t){const n=new ei(r,e,t);return n.texture.mapping=bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Pp(r,e,t){const n=new Float32Array(hi),i=new D(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Wo(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function jo(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Lp(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===xa,f=l===Ji||l===$i;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ho(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&i(d)){t===null&&(t=new Ho(r));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dp(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],34962)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let M=0,x=_.length;M<x;M+=3){const y=_[M+0],E=_[M+1],P=_[M+2];u.push(y,E,E,P,P,y)}}else{const _=g.array;v=g.version;for(let M=0,x=_.length/3-1;M<x;M+=3){const y=M+0,E=M+1,P=M+2;u.push(y,E,E,P,P,y)}}const m=new(Sc(u)?Cc:Ac)(u,1);m.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function f(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function Ip(r,e,t,n){const i=n.isWebGL2;let s;function a(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function f(u,p){r.drawElements(s,p,o,u*l),t.update(p,s,1)}function d(u,p,g){if(g===0)return;let v,m;if(i)v=r,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,o,u*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=d}function Up(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Np(r,e){return r[0]-e[0]}function Op(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Fp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(f);if(m===void 0||m.count!==v){let B=function(){L.dispose(),s.delete(f),f.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,E=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let S=0;M===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let b=f.attributes.position.count*S,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const k=new Float32Array(b*F*4*v),L=new Ec(k,b,F,v);L.type=gi,L.needsUpdate=!0;const O=S*4;for(let K=0;K<v;K++){const R=E[K],H=P[K],Z=T[K],Q=b*F*4*K;for(let _e=0;_e<R.count;_e++){const se=_e*O;M===!0&&(a.fromBufferAttribute(R,_e),k[Q+se+0]=a.x,k[Q+se+1]=a.y,k[Q+se+2]=a.z,k[Q+se+3]=0),x===!0&&(a.fromBufferAttribute(H,_e),k[Q+se+4]=a.x,k[Q+se+5]=a.y,k[Q+se+6]=a.z,k[Q+se+7]=0),y===!0&&(a.fromBufferAttribute(Z,_e),k[Q+se+8]=a.x,k[Q+se+9]=a.y,k[Q+se+10]=a.z,k[Q+se+11]=Z.itemSize===4?a.w:1)}}m={count:v,texture:L,size:new Qe(b,F)},s.set(f,m),f.addEventListener("dispose",B)}let h=0;for(let M=0;M<u.length;M++)h+=u[M];const _=f.morphTargetsRelative?1:1-h;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let v=n[f.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];n[f.id]=v}for(let x=0;x<g;x++){const y=v[x];y[0]=x,y[1]=u[x]}v.sort(Op);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Np);const m=f.morphAttributes.position,h=f.morphAttributes.normal;let _=0;for(let x=0;x<8;x++){const y=o[x],E=y[0],P=y[1];E!==Number.MAX_SAFE_INTEGER&&P?(m&&f.getAttribute("morphTarget"+x)!==m[E]&&f.setAttribute("morphTarget"+x,m[E]),h&&f.getAttribute("morphNormal"+x)!==h[E]&&f.setAttribute("morphNormal"+x,h[E]),i[x]=P,_+=P):(m&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),h&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),i[x]=0)}const M=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function zp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,d=e.get(l,f);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Nc=new Jt,Oc=new Ec,Fc=new Cf,zc=new Dc,Xo=[],qo=[],Yo=new Float32Array(16),Zo=new Float32Array(9),Qo=new Float32Array(4);function lr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Xo[i];if(s===void 0&&(s=new Float32Array(i),Xo[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Es(r,e){let t=qo[e];t===void 0&&(t=new Int32Array(e),qo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function Hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function Vp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Qo.set(n),r.uniformMatrix2fv(this.addr,!1,Qo),Pt(t,n)}}function Wp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Zo.set(n),r.uniformMatrix3fv(this.addr,!1,Zo),Pt(t,n)}}function jp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Yo.set(n),r.uniformMatrix4fv(this.addr,!1,Yo),Pt(t,n)}}function Xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function Zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function Qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function $p(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Nc,i)}function tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fc,i)}function nm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zc,i)}function im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Oc,i)}function rm(r){switch(r){case 5126:return kp;case 35664:return Bp;case 35665:return Gp;case 35666:return Hp;case 35674:return Vp;case 35675:return Wp;case 35676:return jp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return Qp;case 36294:return Kp;case 36295:return Jp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function sm(r,e){r.uniform1fv(this.addr,e)}function am(r,e){const t=lr(e,this.size,2);r.uniform2fv(this.addr,t)}function om(r,e){const t=lr(e,this.size,3);r.uniform3fv(this.addr,t)}function lm(r,e){const t=lr(e,this.size,4);r.uniform4fv(this.addr,t)}function cm(r,e){const t=lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function um(r,e){const t=lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fm(r,e){const t=lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hm(r,e){r.uniform1iv(this.addr,e)}function dm(r,e){r.uniform2iv(this.addr,e)}function pm(r,e){r.uniform3iv(this.addr,e)}function mm(r,e){r.uniform4iv(this.addr,e)}function gm(r,e){r.uniform1uiv(this.addr,e)}function _m(r,e){r.uniform2uiv(this.addr,e)}function vm(r,e){r.uniform3uiv(this.addr,e)}function xm(r,e){r.uniform4uiv(this.addr,e)}function Mm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Nc,s[a])}function bm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fc,s[a])}function Sm(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||zc,s[a])}function ym(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);Ct(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Oc,s[a])}function wm(r){switch(r){case 5126:return sm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return um;case 35676:return fm;case 5124:case 35670:return hm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return _m;case 36295:return vm;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return ym}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=rm(t.type)}}class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wm(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Ko(r,e){r.seq.push(e),r.map[e.id]=e}function Cm(r,e,t){const n=r.name,i=n.length;for(aa.lastIndex=0;;){const s=aa.exec(n),a=aa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ko(t,c===void 0?new Em(o,r,e):new Tm(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Am(o),Ko(t,d)),t=d}}}class fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Cm(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Jo(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Pm=0;function Lm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Rm(r){switch(r){case $n:return["Linear","( value )"];case st:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function $o(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Lm(r.getShaderSource(e),a)}else return i}function Dm(r,e){const t=Rm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Im(r,e){let t;switch(e){case Ou:t="Linear";break;case Fu:t="Reinhard";break;case zu:t="OptimizedCineon";break;case gc:t="ACESFilmic";break;case ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Um(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xr).join(`
`)}function Nm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Om(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function xr(r){return r!==""}function el(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(r){return r.replace(Fm,zm)}function zm(r,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wa(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(r){return r.replace(km,Bm)}function Bm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function il(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===_r&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ji:case $i:e="ENVMAP_TYPE_CUBE";break;case bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case Uu:e="ENVMAP_BLENDING_MIX";break;case Nu:e="ENVMAP_BLENDING_ADD";break}return e}function jm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Xm(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Gm(t),c=Hm(t),f=Vm(t),d=Wm(t),u=jm(t),p=t.isWebGL2?"":Um(t),g=Nm(s),v=i.createProgram();let m,h,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(xr).join(`
`),m.length>0&&(m+=`
`),h=[p,g].filter(xr).join(`
`),h.length>0&&(h+=`
`)):(m=[il(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),h=[p,il(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,Dm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=wa(a),a=el(a,t),a=tl(a,t),o=wa(o),o=el(o,t),o=tl(o,t),a=nl(a),o=nl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=_+m+a,x=_+h+o,y=Jo(i,35633,M),E=Jo(i,35632,x);if(i.attachShader(v,y),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(v).trim(),b=i.getShaderInfoLog(y).trim(),F=i.getShaderInfoLog(E).trim();let k=!0,L=!0;if(i.getProgramParameter(v,35714)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,y,E);else{const O=$o(i,y,"vertex"),B=$o(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,35715)+`

Program Info Log: `+S+`
`+O+`
`+B)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(b===""||F==="")&&(L=!1);L&&(this.diagnostics={runnable:k,programLog:S,vertexShader:{log:b,prefix:m},fragmentShader:{log:F,prefix:h}})}i.deleteShader(y),i.deleteShader(E);let P;this.getUniforms=function(){return P===void 0&&(P=new fs(i,v)),P};let T;return this.getAttributes=function(){return T===void 0&&(T=Om(i,v)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Pm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}let qm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zm(e),t.set(e,n)),n}}class Zm{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function Qm(r,e,t,n,i,s,a){const o=new Da,l=new Ym,c=[],f=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===1?"uv2":"uv"}function m(S,b,F,k,L){const O=k.fog,B=L.geometry,K=S.isMeshStandardMaterial?k.environment:null,R=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),H=!!R&&R.mapping===bs?R.image.height:null,Z=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_e=Q!==void 0?Q.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let W,$,ee,ce;if(Z){const fe=bn[Z];W=fe.vertexShader,$=fe.fragmentShader}else W=S.vertexShader,$=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const N=r.getRenderTarget(),Le=L.isInstancedMesh===!0,Te=!!S.map,ae=!!S.matcap,we=!!R,je=!!S.aoMap,Se=!!S.lightMap,De=!!S.bumpMap,ot=!!S.normalMap,vt=!!S.displacementMap,xt=!!S.emissiveMap,pt=!!S.metalnessMap,Xe=!!S.roughnessMap,rt=S.clearcoat>0,It=S.iridescence>0,C=S.sheen>0,w=S.transmission>0,X=rt&&!!S.clearcoatMap,ne=rt&&!!S.clearcoatNormalMap,re=rt&&!!S.clearcoatRoughnessMap,ue=It&&!!S.iridescenceMap,Pe=It&&!!S.iridescenceThicknessMap,de=C&&!!S.sheenColorMap,J=C&&!!S.sheenRoughnessMap,ve=!!S.specularMap,ye=!!S.specularColorMap,Ee=!!S.specularIntensityMap,ge=w&&!!S.transmissionMap,xe=w&&!!S.thicknessMap,Ne=!!S.gradientMap,Ze=!!S.alphaMap,lt=S.alphaTest>0,I=!!S.extensions,V=!!B.attributes.uv2;return{isWebGL2:f,shaderID:Z,shaderName:S.type,vertexShader:W,fragmentShader:$,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Le,instancingColor:Le&&L.instanceColor!==null,supportsVertexTextures:u,outputEncoding:N===null?r.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:$n,map:Te,matcap:ae,envMap:we,envMapMode:we&&R.mapping,envMapCubeUVHeight:H,aoMap:je,lightMap:Se,bumpMap:De,normalMap:ot,displacementMap:u&&vt,emissiveMap:xt,normalMapObjectSpace:ot&&S.normalMapType===sf,normalMapTangentSpace:ot&&S.normalMapType===xc,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&S.map.encoding===st,metalnessMap:pt,roughnessMap:Xe,clearcoat:rt,clearcoatMap:X,clearcoatNormalMap:ne,clearcoatRoughnessMap:re,iridescence:It,iridescenceMap:ue,iridescenceThicknessMap:Pe,sheen:C,sheenColorMap:de,sheenRoughnessMap:J,specularMap:ve,specularColorMap:ye,specularIntensityMap:Ee,transmission:w,transmissionMap:ge,thicknessMap:xe,gradientMap:Ne,opaque:S.transparent===!1&&S.blending===Yi,alphaMap:Ze,alphaTest:lt,combine:S.combine,mapUv:Te&&v(S.map.channel),aoMapUv:je&&v(S.aoMap.channel),lightMapUv:Se&&v(S.lightMap.channel),bumpMapUv:De&&v(S.bumpMap.channel),normalMapUv:ot&&v(S.normalMap.channel),displacementMapUv:vt&&v(S.displacementMap.channel),emissiveMapUv:xt&&v(S.emissiveMap.channel),metalnessMapUv:pt&&v(S.metalnessMap.channel),roughnessMapUv:Xe&&v(S.roughnessMap.channel),clearcoatMapUv:X&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:J&&v(S.sheenRoughnessMap.channel),specularMapUv:ve&&v(S.specularMap.channel),specularColorMapUv:ye&&v(S.specularColorMap.channel),specularIntensityMapUv:Ee&&v(S.specularIntensityMap.channel),transmissionMapUv:ge&&v(S.transmissionMap.channel),thicknessMapUv:xe&&v(S.thicknessMap.channel),alphaMapUv:Ze&&v(S.alphaMap.channel),vertexTangents:ot&&!!B.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs2:V,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Te||Ze),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:wn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:I&&S.extensions.derivatives===!0,extensionFragDepth:I&&S.extensions.fragDepth===!0,extensionDrawBuffers:I&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)b.push(F),b.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(_(b,S),M(b,S),b.push(r.outputEncoding)),b.push(S.customProgramCacheKey),b.join()}function _(S,b){S.push(b.precision),S.push(b.outputEncoding),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function M(S,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUvs2&&o.enable(13),b.vertexTangents&&o.enable(14),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.decodeVideoTexture&&o.enable(17),b.opaque&&o.enable(18),b.pointsUvs&&o.enable(19),S.push(o.mask)}function x(S){const b=g[S.type];let F;if(b){const k=bn[b];F=Lc.clone(k.uniforms)}else F=S.uniforms;return F}function y(S,b){let F;for(let k=0,L=c.length;k<L;k++){const O=c[k];if(O.cacheKey===b){F=O,++F.usedTimes;break}}return F===void 0&&(F=new Xm(r,b,S,s),c.push(F)),F}function E(S){if(--S.usedTimes===0){const b=c.indexOf(S);c[b]=c[c.length-1],c.pop(),S.destroy()}}function P(S){l.remove(S)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:y,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:T}}function Km(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Jm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function rl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function sl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,p,g,v,m){let h=r[e];return h===void 0?(h={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[e]=h):(h.id=d.id,h.object=d,h.geometry=u,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function o(d,u,p,g,v,m){const h=a(d,u,p,g,v,m);p.transmission>0?n.push(h):p.transparent===!0?i.push(h):t.push(h)}function l(d,u,p,g,v,m){const h=a(d,u,p,g,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function c(d,u){t.length>1&&t.sort(d||Jm),n.length>1&&n.sort(u||rl),i.length>1&&i.sort(u||rl)}function f(){for(let d=e,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:f,sort:c}}function $m(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new sl,r.set(n,[a])):i>=s.length?(a=new sl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function eg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function tg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ng=0;function ig(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rg(r,e){const t=new eg,n=tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new D);const s=new D,a=new _t,o=new _t;function l(f,d){let u=0,p=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let v=0,m=0,h=0,_=0,M=0,x=0,y=0,E=0,P=0,T=0;f.sort(ig);const S=d===!0?Math.PI:1;for(let F=0,k=f.length;F<k;F++){const L=f[F],O=L.color,B=L.intensity,K=L.distance,R=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*B*S,p+=O.g*B*S,g+=O.b*B*S;else if(L.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],B);else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const Z=L.shadow,Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=R,i.directionalShadowMatrix[v]=L.shadow.matrix,x++}i.directional[v]=H,v++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(O).multiplyScalar(B*S),H.distance=K,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[h]=H;const Z=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,Z.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[h]=Z.matrix,L.castShadow){const Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[h]=Q,i.spotShadowMap[h]=R,E++}h++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(O).multiplyScalar(B),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=H,_++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),H.distance=L.distance,H.decay=L.decay,L.castShadow){const Z=L.shadow,Q=n.get(L);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=R,i.pointShadowMatrix[m]=L.shadow.matrix,y++}i.point[m]=H,m++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(B*S),H.groundColor.copy(L.groundColor).multiplyScalar(B*S),i.hemi[M]=H,M++}}_>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==v||b.pointLength!==m||b.spotLength!==h||b.rectAreaLength!==_||b.hemiLength!==M||b.numDirectionalShadows!==x||b.numPointShadows!==y||b.numSpotShadows!==E||b.numSpotMaps!==P)&&(i.directional.length=v,i.spot.length=h,i.rectArea.length=_,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,b.directionalLength=v,b.pointLength=m,b.spotLength=h,b.rectAreaLength=_,b.hemiLength=M,b.numDirectionalShadows=x,b.numPointShadows=y,b.numSpotShadows=E,b.numSpotMaps=P,i.version=ng++)}function c(f,d){let u=0,p=0,g=0,v=0,m=0;const h=d.matrixWorldInverse;for(let _=0,M=f.length;_<M;_++){const x=f[_];if(x.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),u++}else if(x.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(h),g++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),o.identity(),a.copy(x.matrixWorld),a.premultiply(h),o.extractRotation(a),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:i}}function al(r,e){const t=new rg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sg(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new al(r,e),t.set(s,[l])):a>=o.length?(l=new al(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ag extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class og extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function ug(r,e,t){let n=new Ia;const i=new Qe,s=new Qe,a=new Ut,o=new ag({depthPacking:rf}),l=new og,c={},f=t.maxTextureSize,d={[Jn]:Kt,[Kt]:Jn,[Sn]:Sn},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xt;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc,this.render=function(x,y,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const P=r.getRenderTarget(),T=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),b=r.state;b.setBlending(Kn),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let F=0,k=x.length;F<k;F++){const L=x[F],O=L.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const B=O.getFrameExtents();if(i.multiply(B),s.copy(O.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/B.x),i.x=s.x*B.x,O.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/B.y),i.y=s.y*B.y,O.mapSize.y=s.y)),O.map===null){const R=this.type!==_r?{minFilter:Ht,magFilter:Ht}:{};O.map=new ei(i.x,i.y,R),O.map.texture.name=L.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const K=O.getViewportCount();for(let R=0;R<K;R++){const H=O.getViewport(R);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),b.viewport(a),O.updateMatrices(L,R),n=O.getFrustum(),M(y,E,O.camera,L,this.type)}O.isPointLightShadow!==!0&&this.type===_r&&h(O,E),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(P,T,S)};function h(x,y){const E=e.update(v);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ei(i.x,i.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(y,null,E,u,v,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(y,null,E,p,v,null)}function _(x,y,E,P){let T=null;const S=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0)T=S;else if(T=E.isPointLight===!0?l:o,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const b=T.uuid,F=y.uuid;let k=c[b];k===void 0&&(k={},c[b]=k);let L=k[F];L===void 0&&(L=T.clone(),k[F]=L),T=L}if(T.visible=y.visible,T.wireframe=y.wireframe,P===_r?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:d[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,E.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const b=r.properties.get(T);b.light=E}return T}function M(x,y,E,P,T){if(x.visible===!1)return;if(x.layers.test(y.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&T===_r)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const F=e.update(x),k=x.material;if(Array.isArray(k)){const L=F.groups;for(let O=0,B=L.length;O<B;O++){const K=L[O],R=k[K.materialIndex];if(R&&R.visible){const H=_(x,R,P,T);r.renderBufferDirect(E,null,F,H,x,K)}}}else if(k.visible){const L=_(x,k,P,T);r.renderBufferDirect(E,null,F,L,x,null)}}const b=x.children;for(let F=0,k=b.length;F<k;F++)M(b[F],y,E,P,T)}}function fg(r,e,t){const n=t.isWebGL2;function i(){let I=!1;const V=new Ut;let ie=null;const fe=new Ut(0,0,0,0);return{setMask:function(Me){ie!==Me&&!I&&(r.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){I=Me},setClear:function(Me,Ke,Be,At,qt){qt===!0&&(Me*=At,Ke*=At,Be*=At),V.set(Me,Ke,Be,At),fe.equals(V)===!1&&(r.clearColor(Me,Ke,Be,At),fe.copy(V))},reset:function(){I=!1,ie=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,V=null,ie=null,fe=null;return{setTest:function(Me){Me?N(2929):Le(2929)},setMask:function(Me){V!==Me&&!I&&(r.depthMask(Me),V=Me)},setFunc:function(Me){if(ie!==Me){switch(Me){case Au:r.depthFunc(512);break;case Cu:r.depthFunc(519);break;case Pu:r.depthFunc(513);break;case _a:r.depthFunc(515);break;case Lu:r.depthFunc(514);break;case Ru:r.depthFunc(518);break;case Du:r.depthFunc(516);break;case Iu:r.depthFunc(517);break;default:r.depthFunc(515)}ie=Me}},setLocked:function(Me){I=Me},setClear:function(Me){fe!==Me&&(r.clearDepth(Me),fe=Me)},reset:function(){I=!1,V=null,ie=null,fe=null}}}function a(){let I=!1,V=null,ie=null,fe=null,Me=null,Ke=null,Be=null,At=null,qt=null;return{setTest:function(ut){I||(ut?N(2960):Le(2960))},setMask:function(ut){V!==ut&&!I&&(r.stencilMask(ut),V=ut)},setFunc:function(ut,Lt,zt){(ie!==ut||fe!==Lt||Me!==zt)&&(r.stencilFunc(ut,Lt,zt),ie=ut,fe=Lt,Me=zt)},setOp:function(ut,Lt,zt){(Ke!==ut||Be!==Lt||At!==zt)&&(r.stencilOp(ut,Lt,zt),Ke=ut,Be=Lt,At=zt)},setLocked:function(ut){I=ut},setClear:function(ut){qt!==ut&&(r.clearStencil(ut),qt=ut)},reset:function(){I=!1,V=null,ie=null,fe=null,Me=null,Ke=null,Be=null,At=null,qt=null}}}const o=new i,l=new s,c=new a,f=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,v=[],m=null,h=!1,_=null,M=null,x=null,y=null,E=null,P=null,T=null,S=!1,b=null,F=null,k=null,L=null,O=null;const B=r.getParameter(35661);let K=!1,R=0;const H=r.getParameter(7938);H.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=R>=1):H.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=R>=2);let Z=null,Q={};const _e=r.getParameter(3088),se=r.getParameter(2978),W=new Ut().fromArray(_e),$=new Ut().fromArray(se);function ee(I,V,ie){const fe=new Uint8Array(4),Me=r.createTexture();r.bindTexture(I,Me),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Ke=0;Ke<ie;Ke++)r.texImage2D(V+Ke,0,6408,1,1,0,6408,5121,fe);return Me}const ce={};ce[3553]=ee(3553,3553,1),ce[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(_a),vt(!1),xt(ja),N(2884),De(Kn);function N(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Le(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function Te(I,V){return p[I]!==V?(r.bindFramebuffer(I,V),p[I]=V,n&&(I===36009&&(p[36160]=V),I===36160&&(p[36009]=V)),!0):!1}function ae(I,V){let ie=v,fe=!1;if(I)if(ie=g.get(V),ie===void 0&&(ie=[],g.set(V,ie)),I.isWebGLMultipleRenderTargets){const Me=I.texture;if(ie.length!==Me.length||ie[0]!==36064){for(let Ke=0,Be=Me.length;Ke<Be;Ke++)ie[Ke]=36064+Ke;ie.length=Me.length,fe=!0}}else ie[0]!==36064&&(ie[0]=36064,fe=!0);else ie[0]!==1029&&(ie[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function we(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const je={[Vi]:32774,[gu]:32778,[_u]:32779};if(n)je[Za]=32775,je[Qa]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(je[Za]=I.MIN_EXT,je[Qa]=I.MAX_EXT)}const Se={[vu]:0,[xu]:1,[Mu]:768,[dc]:770,[Tu]:776,[wu]:774,[Su]:772,[bu]:769,[pc]:771,[Eu]:775,[yu]:773};function De(I,V,ie,fe,Me,Ke,Be,At){if(I===Kn){h===!0&&(Le(3042),h=!1);return}if(h===!1&&(N(3042),h=!0),I!==mu){if(I!==_||At!==S){if((M!==Vi||E!==Vi)&&(r.blendEquation(32774),M=Vi,E=Vi),At)switch(I){case Yi:r.blendFuncSeparate(1,771,1,771);break;case Xa:r.blendFunc(1,1);break;case qa:r.blendFuncSeparate(0,769,0,1);break;case Ya:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:r.blendFuncSeparate(770,771,1,771);break;case Xa:r.blendFunc(770,1);break;case qa:r.blendFuncSeparate(0,769,0,1);break;case Ya:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,P=null,T=null,_=I,S=At}return}Me=Me||V,Ke=Ke||ie,Be=Be||fe,(V!==M||Me!==E)&&(r.blendEquationSeparate(je[V],je[Me]),M=V,E=Me),(ie!==x||fe!==y||Ke!==P||Be!==T)&&(r.blendFuncSeparate(Se[ie],Se[fe],Se[Ke],Se[Be]),x=ie,y=fe,P=Ke,T=Be),_=I,S=!1}function ot(I,V){I.side===Sn?Le(2884):N(2884);let ie=I.side===Kt;V&&(ie=!ie),vt(ie),I.blending===Yi&&I.transparent===!1?De(Kn):De(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const fe=I.stencilWrite;c.setTest(fe),fe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?N(32926):Le(32926)}function vt(I){b!==I&&(I?r.frontFace(2304):r.frontFace(2305),b=I)}function xt(I){I!==du?(N(2884),I!==F&&(I===ja?r.cullFace(1029):I===pu?r.cullFace(1028):r.cullFace(1032))):Le(2884),F=I}function pt(I){I!==k&&(K&&r.lineWidth(I),k=I)}function Xe(I,V,ie){I?(N(32823),(L!==V||O!==ie)&&(r.polygonOffset(V,ie),L=V,O=ie)):Le(32823)}function rt(I){I?N(3089):Le(3089)}function It(I){I===void 0&&(I=33984+B-1),Z!==I&&(r.activeTexture(I),Z=I)}function C(I,V,ie){ie===void 0&&(Z===null?ie=33984+B-1:ie=Z);let fe=Q[ie];fe===void 0&&(fe={type:void 0,texture:void 0},Q[ie]=fe),(fe.type!==I||fe.texture!==V)&&(Z!==ie&&(r.activeTexture(ie),Z=ie),r.bindTexture(I,V||ce[I]),fe.type=I,fe.texture=V)}function w(){const I=Q[Z];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(I){W.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function xe(I){$.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Ne(I,V){let ie=d.get(V);ie===void 0&&(ie=new WeakMap,d.set(V,ie));let fe=ie.get(I);fe===void 0&&(fe=r.getUniformBlockIndex(V,I.name),ie.set(I,fe))}function Ze(I,V){const fe=d.get(V).get(I);f.get(V)!==fe&&(r.uniformBlockBinding(V,fe,I.__bindingPointIndex),f.set(V,fe))}function lt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Z=null,Q={},p={},g=new WeakMap,v=[],m=null,h=!1,_=null,M=null,x=null,y=null,E=null,P=null,T=null,S=!1,b=null,F=null,k=null,L=null,O=null,W.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:N,disable:Le,bindFramebuffer:Te,drawBuffers:ae,useProgram:we,setBlending:De,setMaterial:ot,setFlipSided:vt,setCullFace:xt,setLineWidth:pt,setPolygonOffset:Xe,setScissorTest:rt,activeTexture:It,bindTexture:C,unbindTexture:w,compressedTexImage2D:X,compressedTexImage3D:ne,texImage2D:ye,texImage3D:Ee,updateUBOMapping:Ne,uniformBlockBinding:Ze,texStorage2D:J,texStorage3D:ve,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:Pe,compressedTexSubImage3D:de,scissor:ge,viewport:xe,reset:lt}}function hg(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,f=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return h?new OffscreenCanvas(C,w):Ur("canvas")}function M(C,w,X,ne){let re=1;if((C.width>ne||C.height>ne)&&(re=ne/Math.max(C.width,C.height)),re<1||w===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const ue=w?bc:Math.floor,Pe=ue(re*C.width),de=ue(re*C.height);v===void 0&&(v=_(Pe,de));const J=X?_(Pe,de):v;return J.width=Pe,J.height=de,J.getContext("2d").drawImage(C,0,0,Pe,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Pe+"x"+de+")."),J}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return ya(C.width)&&ya(C.height)}function y(C){return o?!1:C.wrapS!==mn||C.wrapT!==mn||C.minFilter!==Ht&&C.minFilter!==ln}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==Ht&&C.minFilter!==ln}function P(C){r.generateMipmap(C)}function T(C,w,X,ne,re=!1){if(o===!1)return w;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ue=w;return w===6403&&(X===5126&&(ue=33326),X===5131&&(ue=33325),X===5121&&(ue=33321)),w===33319&&(X===5126&&(ue=33328),X===5131&&(ue=33327),X===5121&&(ue=33323)),w===6408&&(X===5126&&(ue=34836),X===5131&&(ue=34842),X===5121&&(ue=ne===st&&re===!1?35907:32856),X===32819&&(ue=32854),X===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function S(C,w,X){return E(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==ln?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===Ht||C===Ka||C===Us?9728:9729}function F(C){const w=C.target;w.removeEventListener("dispose",F),L(w),w.isVideoTexture&&g.delete(w)}function k(C){const w=C.target;w.removeEventListener("dispose",k),B(w)}function L(C){const w=n.get(C);if(w.__webglInit===void 0)return;const X=C.source,ne=m.get(X);if(ne){const re=ne[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(C),Object.keys(ne).length===0&&m.delete(X)}n.remove(C)}function O(C){const w=n.get(C);r.deleteTexture(w.__webglTexture);const X=C.source,ne=m.get(X);delete ne[w.__cacheKey],a.memory.textures--}function B(C){const w=C.texture,X=n.get(C),ne=n.get(w);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,ue=w.length;re<ue;re++){const Pe=n.get(w[re]);Pe.__webglTexture&&(r.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(w[re])}n.remove(w),n.remove(C)}let K=0;function R(){K=0}function H(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function Z(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function Q(C,w){const X=n.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(X,C,w);return}}t.bindTexture(3553,X.__webglTexture,33984+w)}function _e(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Le(X,C,w);return}t.bindTexture(35866,X.__webglTexture,33984+w)}function se(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Le(X,C,w);return}t.bindTexture(32879,X.__webglTexture,33984+w)}function W(C,w){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Te(X,C,w);return}t.bindTexture(34067,X.__webglTexture,33984+w)}const $={[Ma]:10497,[mn]:33071,[ba]:33648},ee={[Ht]:9728,[Ka]:9984,[Us]:9986,[ln]:9729,[Bu]:9985,[Lr]:9987};function ce(C,w,X){if(X?(r.texParameteri(C,10242,$[w.wrapS]),r.texParameteri(C,10243,$[w.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,$[w.wrapR]),r.texParameteri(C,10240,ee[w.magFilter]),r.texParameteri(C,10241,ee[w.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(w.wrapS!==mn||w.wrapT!==mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,b(w.magFilter)),r.texParameteri(C,10241,b(w.minFilter)),w.minFilter!==Ht&&w.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ht||w.minFilter!==Us&&w.minFilter!==Lr||w.type===gi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Rr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function N(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",F));const ne=w.source;let re=m.get(ne);re===void 0&&(re={},m.set(ne,re));const ue=Z(w);if(ue!==C.__cacheKey){re[ue]===void 0&&(re[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[ue].usedTimes++;const Pe=re[C.__cacheKey];Pe!==void 0&&(re[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&O(w)),C.__cacheKey=ue,C.__webglTexture=re[ue].texture}return X}function Le(C,w,X){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const re=N(C,w),ue=w.source;t.bindTexture(ne,C.__webglTexture,33984+X);const Pe=n.get(ue);if(ue.version!==Pe.__version||re===!0){t.activeTexture(33984+X),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const de=y(w)&&x(w.image)===!1;let J=M(w.image,de,!1,f);J=It(w,J);const ve=x(J)||o,ye=s.convert(w.format,w.encoding);let Ee=s.convert(w.type),ge=T(w.internalFormat,ye,Ee,w.encoding,w.isVideoTexture);ce(ne,w,ve);let xe;const Ne=w.mipmaps,Ze=o&&w.isVideoTexture!==!0,lt=Pe.__version===void 0||re===!0,I=S(w,J,ve);if(w.isDepthTexture)ge=6402,o?w.type===gi?ge=36012:w.type===mi?ge=33190:w.type===Zi?ge=35056:ge=33189:w.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&ge===6402&&w.type!==vc&&w.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=mi,Ee=s.convert(w.type)),w.format===er&&ge===6402&&(ge=34041,w.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Zi,Ee=s.convert(w.type))),lt&&(Ze?t.texStorage2D(3553,1,ge,J.width,J.height):t.texImage2D(3553,0,ge,J.width,J.height,0,ye,Ee,null));else if(w.isDataTexture)if(Ne.length>0&&ve){Ze&&lt&&t.texStorage2D(3553,I,ge,Ne[0].width,Ne[0].height);for(let V=0,ie=Ne.length;V<ie;V++)xe=Ne[V],Ze?t.texSubImage2D(3553,V,0,0,xe.width,xe.height,ye,Ee,xe.data):t.texImage2D(3553,V,ge,xe.width,xe.height,0,ye,Ee,xe.data);w.generateMipmaps=!1}else Ze?(lt&&t.texStorage2D(3553,I,ge,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,ye,Ee,J.data)):t.texImage2D(3553,0,ge,J.width,J.height,0,ye,Ee,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&lt&&t.texStorage3D(35866,I,ge,Ne[0].width,Ne[0].height,J.depth);for(let V=0,ie=Ne.length;V<ie;V++)xe=Ne[V],w.format!==gn?ye!==null?Ze?t.compressedTexSubImage3D(35866,V,0,0,0,xe.width,xe.height,J.depth,ye,xe.data,0,0):t.compressedTexImage3D(35866,V,ge,xe.width,xe.height,J.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(35866,V,0,0,0,xe.width,xe.height,J.depth,ye,Ee,xe.data):t.texImage3D(35866,V,ge,xe.width,xe.height,J.depth,0,ye,Ee,xe.data)}else{Ze&&lt&&t.texStorage2D(3553,I,ge,Ne[0].width,Ne[0].height);for(let V=0,ie=Ne.length;V<ie;V++)xe=Ne[V],w.format!==gn?ye!==null?Ze?t.compressedTexSubImage2D(3553,V,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(3553,V,ge,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(3553,V,0,0,xe.width,xe.height,ye,Ee,xe.data):t.texImage2D(3553,V,ge,xe.width,xe.height,0,ye,Ee,xe.data)}else if(w.isDataArrayTexture)Ze?(lt&&t.texStorage3D(35866,I,ge,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,ye,Ee,J.data)):t.texImage3D(35866,0,ge,J.width,J.height,J.depth,0,ye,Ee,J.data);else if(w.isData3DTexture)Ze?(lt&&t.texStorage3D(32879,I,ge,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,ye,Ee,J.data)):t.texImage3D(32879,0,ge,J.width,J.height,J.depth,0,ye,Ee,J.data);else if(w.isFramebufferTexture){if(lt)if(Ze)t.texStorage2D(3553,I,ge,J.width,J.height);else{let V=J.width,ie=J.height;for(let fe=0;fe<I;fe++)t.texImage2D(3553,fe,ge,V,ie,0,ye,Ee,null),V>>=1,ie>>=1}}else if(Ne.length>0&&ve){Ze&&lt&&t.texStorage2D(3553,I,ge,Ne[0].width,Ne[0].height);for(let V=0,ie=Ne.length;V<ie;V++)xe=Ne[V],Ze?t.texSubImage2D(3553,V,0,0,ye,Ee,xe):t.texImage2D(3553,V,ge,ye,Ee,xe);w.generateMipmaps=!1}else Ze?(lt&&t.texStorage2D(3553,I,ge,J.width,J.height),t.texSubImage2D(3553,0,0,0,ye,Ee,J)):t.texImage2D(3553,0,ge,ye,Ee,J);E(w,ve)&&P(ne),Pe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Te(C,w,X){if(w.image.length!==6)return;const ne=N(C,w),re=w.source;t.bindTexture(34067,C.__webglTexture,33984+X);const ue=n.get(re);if(re.version!==ue.__version||ne===!0){t.activeTexture(33984+X),r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,J=[];for(let V=0;V<6;V++)!Pe&&!de?J[V]=M(w.image[V],!1,!0,c):J[V]=de?w.image[V].image:w.image[V],J[V]=It(w,J[V]);const ve=J[0],ye=x(ve)||o,Ee=s.convert(w.format,w.encoding),ge=s.convert(w.type),xe=T(w.internalFormat,Ee,ge,w.encoding),Ne=o&&w.isVideoTexture!==!0,Ze=ue.__version===void 0||ne===!0;let lt=S(w,ve,ye);ce(34067,w,ye);let I;if(Pe){Ne&&Ze&&t.texStorage2D(34067,lt,xe,ve.width,ve.height);for(let V=0;V<6;V++){I=J[V].mipmaps;for(let ie=0;ie<I.length;ie++){const fe=I[ie];w.format!==gn?Ee!==null?Ne?t.compressedTexSubImage2D(34069+V,ie,0,0,fe.width,fe.height,Ee,fe.data):t.compressedTexImage2D(34069+V,ie,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+V,ie,0,0,fe.width,fe.height,Ee,ge,fe.data):t.texImage2D(34069+V,ie,xe,fe.width,fe.height,0,Ee,ge,fe.data)}}}else{I=w.mipmaps,Ne&&Ze&&(I.length>0&&lt++,t.texStorage2D(34067,lt,xe,J[0].width,J[0].height));for(let V=0;V<6;V++)if(de){Ne?t.texSubImage2D(34069+V,0,0,0,J[V].width,J[V].height,Ee,ge,J[V].data):t.texImage2D(34069+V,0,xe,J[V].width,J[V].height,0,Ee,ge,J[V].data);for(let ie=0;ie<I.length;ie++){const Me=I[ie].image[V].image;Ne?t.texSubImage2D(34069+V,ie+1,0,0,Me.width,Me.height,Ee,ge,Me.data):t.texImage2D(34069+V,ie+1,xe,Me.width,Me.height,0,Ee,ge,Me.data)}}else{Ne?t.texSubImage2D(34069+V,0,0,0,Ee,ge,J[V]):t.texImage2D(34069+V,0,xe,Ee,ge,J[V]);for(let ie=0;ie<I.length;ie++){const fe=I[ie];Ne?t.texSubImage2D(34069+V,ie+1,0,0,Ee,ge,fe.image[V]):t.texImage2D(34069+V,ie+1,xe,Ee,ge,fe.image[V])}}}E(w,ye)&&P(34067),ue.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ae(C,w,X,ne,re){const ue=s.convert(X.format,X.encoding),Pe=s.convert(X.type),de=T(X.internalFormat,ue,Pe,X.encoding);n.get(w).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,de,w.width,w.height,w.depth,0,ue,Pe,null):t.texImage2D(re,0,de,w.width,w.height,0,ue,Pe,null)),t.bindFramebuffer(36160,C),Xe(w)?u.framebufferTexture2DMultisampleEXT(36160,ne,re,n.get(X).__webglTexture,0,pt(w)):(re===3553||re>=34069&&re<=34074)&&r.framebufferTexture2D(36160,ne,re,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function we(C,w,X){if(r.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(X||Xe(w)){const re=w.depthTexture;re&&re.isDepthTexture&&(re.type===gi?ne=36012:re.type===mi&&(ne=33190));const ue=pt(w);Xe(w)?u.renderbufferStorageMultisampleEXT(36161,ue,ne,w.width,w.height):r.renderbufferStorageMultisample(36161,ue,ne,w.width,w.height)}else r.renderbufferStorage(36161,ne,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ne=pt(w);X&&Xe(w)===!1?r.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Xe(w)?u.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<ne.length;re++){const ue=ne[re],Pe=s.convert(ue.format,ue.encoding),de=s.convert(ue.type),J=T(ue.internalFormat,Pe,de,ue.encoding),ve=pt(w);X&&Xe(w)===!1?r.renderbufferStorageMultisample(36161,ve,J,w.width,w.height):Xe(w)?u.renderbufferStorageMultisampleEXT(36161,ve,J,w.width,w.height):r.renderbufferStorage(36161,J,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function je(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Q(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,re=pt(w);if(w.depthTexture.format===_i)Xe(w)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,re):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===er)Xe(w)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,re):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Se(C){const w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");je(w.__webglFramebuffer,C)}else if(X){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=r.createRenderbuffer(),we(w.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function De(C,w,X){const ne=n.get(C);w!==void 0&&ae(ne.__webglFramebuffer,C,C.texture,36064,3553),X!==void 0&&Se(C)}function ot(C){const w=C.texture,X=n.get(C),ne=n.get(w);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=w.version,a.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,ue=C.isWebGLMultipleRenderTargets===!0,Pe=x(C)||o;if(re){X.__webglFramebuffer=[];for(let de=0;de<6;de++)X.__webglFramebuffer[de]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),ue)if(i.drawBuffers){const de=C.texture;for(let J=0,ve=de.length;J<ve;J++){const ye=n.get(de[J]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Xe(C)===!1){const de=ue?w:[w];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let J=0;J<de.length;J++){const ve=de[J];X.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer[J]);const ye=s.convert(ve.format,ve.encoding),Ee=s.convert(ve.type),ge=T(ve.internalFormat,ye,Ee,ve.encoding,C.isXRRenderTarget===!0),xe=pt(C);r.renderbufferStorageMultisample(36161,xe,ge,C.width,C.height),r.framebufferRenderbuffer(36160,36064+J,36161,X.__webglColorRenderbuffer[J])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),we(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ne.__webglTexture),ce(34067,w,Pe);for(let de=0;de<6;de++)ae(X.__webglFramebuffer[de],C,w,36064,34069+de);E(w,Pe)&&P(34067),t.unbindTexture()}else if(ue){const de=C.texture;for(let J=0,ve=de.length;J<ve;J++){const ye=de[J],Ee=n.get(ye);t.bindTexture(3553,Ee.__webglTexture),ce(3553,ye,Pe),ae(X.__webglFramebuffer,C,ye,36064+J,3553),E(ye,Pe)&&P(3553)}t.unbindTexture()}else{let de=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?de=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ne.__webglTexture),ce(de,w,Pe),ae(X.__webglFramebuffer,C,w,36064,de),E(w,Pe)&&P(de),t.unbindTexture()}C.depthBuffer&&Se(C)}function vt(C){const w=x(C)||o,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,re=X.length;ne<re;ne++){const ue=X[ne];if(E(ue,w)){const Pe=C.isWebGLCubeRenderTarget?34067:3553,de=n.get(ue).__webglTexture;t.bindTexture(Pe,de),P(Pe),t.unbindTexture()}}}function xt(C){if(o&&C.samples>0&&Xe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,ne=C.height;let re=16384;const ue=[],Pe=C.stencilBuffer?33306:36096,de=n.get(C),J=C.isWebGLMultipleRenderTargets===!0;if(J)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,de.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){ue.push(36064+ve),C.depthBuffer&&ue.push(Pe);const ye=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ye===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),J&&r.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[ve]),ye===!0&&(r.invalidateFramebuffer(36008,[Pe]),r.invalidateFramebuffer(36009,[Pe])),J){const Ee=n.get(w[ve]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ee,0)}r.blitFramebuffer(0,0,X,ne,0,0,X,ne,re,9728),p&&r.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ve,36161,de.__webglColorRenderbuffer[ve]);const ye=n.get(w[ve]).__webglTexture;t.bindFramebuffer(36160,de.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ve,3553,ye,0)}t.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function pt(C){return Math.min(d,C.samples)}function Xe(C){const w=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function rt(C){const w=a.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function It(C,w){const X=C.encoding,ne=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Sa||X!==$n&&(X===st?o===!1?e.has("EXT_sRGB")===!0&&ne===gn?(C.format=Sa,C.minFilter=ln,C.generateMipmaps=!1):w=yc.sRGBToLinear(w):(ne!==gn||re!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),w}this.allocateTextureUnit=H,this.resetTextureUnits=R,this.setTexture2D=Q,this.setTexture2DArray=_e,this.setTexture3D=se,this.setTextureCube=W,this.rebindTextures=De,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Xe}function dg(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===Mi)return 5121;if(s===Wu)return 32819;if(s===ju)return 32820;if(s===Gu)return 5120;if(s===Hu)return 5122;if(s===vc)return 5123;if(s===Vu)return 5124;if(s===mi)return 5125;if(s===gi)return 5126;if(s===Rr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xu)return 6406;if(s===gn)return 6408;if(s===qu)return 6409;if(s===Yu)return 6410;if(s===_i)return 6402;if(s===er)return 34041;if(s===Sa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Zu)return 6403;if(s===Qu)return 36244;if(s===Ku)return 33319;if(s===Ju)return 33320;if(s===$u)return 36249;if(s===Ns||s===Os||s===Fs||s===zs)if(a===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Os)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ja||s===$a||s===eo||s===to)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$a)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===to)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ef)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===no||s===io)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===no)return a===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===io)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ro||s===so||s===ao||s===oo||s===lo||s===co||s===uo||s===fo||s===ho||s===po||s===mo||s===go||s===_o||s===vo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ro)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===so)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ao)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===oo)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lo)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===co)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uo)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fo)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ho)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===po)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mo)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===go)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_o)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vo)return a===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ks)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ks)return a===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===tf||s===xo||s===Mo||s===bo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ks)return o.COMPRESSED_RED_RGTC1_EXT;if(s===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zi?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class pg extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class is extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=m.radius),h.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new is;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gg extends Jt{constructor(e,t,n,i,s,a,o,l,c,f){if(f=f!==void 0?f:_i,f!==_i&&f!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===_i&&(n=mi),n===void 0&&f===er&&(n=Zi),super(null,i,s,a,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1}}class _g extends sr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,u=null,p=null,g=null;const v=t.getContextAttributes();let m=null,h=null;const _=[],M=[],x=new Set,y=new Map,E=new rn;E.layers.enable(1),E.viewport=new Ut;const P=new rn;P.layers.enable(2),P.viewport=new Ut;const T=[E,P],S=new pg;S.layers.enable(1),S.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=_[W];return $===void 0&&($=new oa,_[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=_[W];return $===void 0&&($=new oa,_[W]=$),$.getGripSpace()},this.getHand=function(W){let $=_[W];return $===void 0&&($=new oa,_[W]=$),$.getHandSpace()};function k(W){const $=M.indexOf(W.inputSource);if($===-1)return;const ee=_[$];ee!==void 0&&ee.dispatchEvent({type:W.type,data:W.inputSource})}function L(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",O);for(let W=0;W<_.length;W++){const $=M[W];$!==null&&(M[W]=null,_[W].disconnect($))}b=null,F=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,h=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",L),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),h=new ei(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Mi,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let $=null,ee=null,ce=null;v.depth&&(ce=v.stencil?35056:33190,$=v.stencil?er:_i,ee=v.stencil?Zi:mi);const N={colorFormat:32856,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(N),i.updateRenderState({layers:[u]}),h=new ei(u.textureWidth,u.textureHeight,{format:gn,type:Mi,depthTexture:new gg(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Le=e.properties.get(h);Le.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(W){for(let $=0;$<W.removed.length;$++){const ee=W.removed[$],ce=M.indexOf(ee);ce>=0&&(M[ce]=null,_[ce].disconnect(ee))}for(let $=0;$<W.added.length;$++){const ee=W.added[$];let ce=M.indexOf(ee);if(ce===-1){for(let Le=0;Le<_.length;Le++)if(Le>=M.length){M.push(ee),ce=Le;break}else if(M[Le]===null){M[Le]=ee,ce=Le;break}if(ce===-1)break}const N=_[ce];N&&N.connect(ee)}}const B=new D,K=new D;function R(W,$,ee){B.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(ee.matrixWorld);const ce=B.distanceTo(K),N=$.projectionMatrix.elements,Le=ee.projectionMatrix.elements,Te=N[14]/(N[10]-1),ae=N[14]/(N[10]+1),we=(N[9]+1)/N[5],je=(N[9]-1)/N[5],Se=(N[8]-1)/N[0],De=(Le[8]+1)/Le[0],ot=Te*Se,vt=Te*De,xt=ce/(-Se+De),pt=xt*-Se;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(pt),W.translateZ(xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Xe=Te+xt,rt=ae+xt,It=ot-pt,C=vt+(ce-pt),w=we*ae/rt*Xe,X=je*ae/rt*Xe;W.projectionMatrix.makePerspective(It,C,w,X,Xe,rt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function H(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;S.near=P.near=E.near=W.near,S.far=P.far=E.far=W.far,(b!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,F=S.far);const $=W.parent,ee=S.cameras;H(S,$);for(let ce=0;ce<ee.length;ce++)H(ee[ce],$);ee.length===2?R(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),Z(W,S,$)};function Z(W,$,ee){ee===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(ee.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const ce=W.children;for(let N=0,Le=ce.length;N<Le;N++)ce[N].updateMatrixWorld(!0);W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ir*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.getPlanes=function(){return x};let Q=null;function _e(W,$){if(f=$.getViewerPose(c||a),g=$,f!==null){const ee=f.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ce=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let N=0;N<ee.length;N++){const Le=ee[N];let Te=null;if(p!==null)Te=p.getViewport(Le);else{const we=d.getViewSubImage(u,Le);Te=we.viewport,N===0&&(e.setRenderTargetTextures(h,we.colorTexture,u.ignoreDepthValues?void 0:we.depthStencilTexture),e.setRenderTarget(h))}let ae=T[N];ae===void 0&&(ae=new rn,ae.layers.enable(N),ae.viewport=new Ut,T[N]=ae),ae.matrix.fromArray(Le.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Le.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Te.x,Te.y,Te.width,Te.height),N===0&&(S.matrix.copy(ae.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(ae)}}for(let ee=0;ee<_.length;ee++){const ce=M[ee],N=_[ee];ce!==null&&N!==void 0&&N.update(ce,$,c||a)}if(Q&&Q(W,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ee=null;for(const ce of x)$.detectedPlanes.has(ce)||(ee===null&&(ee=[]),ee.push(ce));if(ee!==null)for(const ce of ee)x.delete(ce),y.delete(ce),n.dispatchEvent({type:"planeremoved",data:ce});for(const ce of $.detectedPlanes)if(!x.has(ce))x.add(ce),y.set(ce,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ce});else{const N=y.get(ce);ce.lastChangedTime>N&&(y.set(ce,ce.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ce}))}}g=null}const se=new Ic;se.setAnimationLoop(_e),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}}function vg(r,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Pc(r)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,_,M,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),f(m,h)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,_,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Kt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Kt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const M=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*M,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function f(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Kt&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(_,M){const x=M.program;n.uniformBlockBinding(_,x)}function c(_,M){let x=i[_.id];x===void 0&&(g(_),x=f(_),i[_.id]=x,_.addEventListener("dispose",m));const y=M.program;n.updateUBOMapping(_,y);const E=e.render.frame;s[_.id]!==E&&(u(_),s[_.id]=E)}function f(_){const M=d();_.__bindingPointIndex=M;const x=r.createBuffer(),y=_.__size,E=_.usage;return r.bindBuffer(35345,x),r.bufferData(35345,y,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,M,x),x}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const M=i[_.id],x=_.uniforms,y=_.__cache;r.bindBuffer(35345,M);for(let E=0,P=x.length;E<P;E++){const T=x[E];if(p(T,E,y)===!0){const S=T.__offset,b=Array.isArray(T.value)?T.value:[T.value];let F=0;for(let k=0;k<b.length;k++){const L=b[k],O=v(L);typeof L=="number"?(T.__data[0]=L,r.bufferSubData(35345,S+F,T.__data)):L.isMatrix3?(T.__data[0]=L.elements[0],T.__data[1]=L.elements[1],T.__data[2]=L.elements[2],T.__data[3]=L.elements[0],T.__data[4]=L.elements[3],T.__data[5]=L.elements[4],T.__data[6]=L.elements[5],T.__data[7]=L.elements[0],T.__data[8]=L.elements[6],T.__data[9]=L.elements[7],T.__data[10]=L.elements[8],T.__data[11]=L.elements[0]):(L.toArray(T.__data,F),F+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,T.__data)}}r.bindBuffer(35345,null)}function p(_,M,x){const y=_.value;if(x[M]===void 0){if(typeof y=="number")x[M]=y;else{const E=Array.isArray(y)?y:[y],P=[];for(let T=0;T<E.length;T++)P.push(E[T].clone());x[M]=P}return!0}else if(typeof y=="number"){if(x[M]!==y)return x[M]=y,!0}else{const E=Array.isArray(x[M])?x[M]:[x[M]],P=Array.isArray(y)?y:[y];for(let T=0;T<E.length;T++){const S=E[T];if(S.equals(P[T])===!1)return S.copy(P[T]),!0}}return!1}function g(_){const M=_.uniforms;let x=0;const y=16;let E=0;for(let P=0,T=M.length;P<T;P++){const S=M[P],b={boundary:0,storage:0},F=Array.isArray(S.value)?S.value:[S.value];for(let k=0,L=F.length;k<L;k++){const O=F[k],B=v(O);b.boundary+=B.boundary,b.storage+=B.storage}if(S.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,P>0){E=x%y;const k=y-E;E!==0&&k-b.boundary<0&&(x+=y-E,S.__offset=x)}x+=b.storage}return E=x%y,E>0&&(x+=y-E),_.__size=x,_.__cache={},this}function v(_){const M={boundary:0,storage:0};return typeof _=="number"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function h(){for(const _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:l,update:c,dispose:h}}function Mg(){const r=Ur("canvas");return r.style.display="block",r}class kc{constructor(e={}){const{canvas:t=Mg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;let p=null,g=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$n,this.useLegacyLights=!0,this.toneMapping=wn,this.toneMappingExposure=1;const h=this;let _=!1,M=0,x=0,y=null,E=-1,P=null;const T=new Ut,S=new Ut;let b=null,F=t.width,k=t.height,L=1,O=null,B=null;const K=new Ut(0,0,F,k),R=new Ut(0,0,F,k);let H=!1;const Z=new Ia;let Q=!1,_e=!1,se=null;const W=new _t,$=new D,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return y===null?L:1}let N=n;function Le(A,z){for(let q=0;q<A.length;q++){const G=A[q],j=t.getContext(G,z);if(j!==null)return j}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),N===null){const z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&z.shift(),N=Le(z,A),N===null)throw Le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Te,ae,we,je,Se,De,ot,vt,xt,pt,Xe,rt,It,C,w,X,ne,re,ue,Pe,de,J,ve,ye;function Ee(){Te=new Rp(N),ae=new Ep(N,Te,e),Te.init(ae),J=new dg(N,Te,ae),we=new fg(N,Te,ae),je=new Up,Se=new Km,De=new hg(N,Te,we,Se,ae,J,je),ot=new Ap(h),vt=new Lp(h),xt=new Xf(N,ae),ve=new yp(N,Te,xt,ae),pt=new Dp(N,xt,je,ve),Xe=new zp(N,pt,xt,je),ue=new Fp(N,ae,De),X=new Tp(Se),rt=new Qm(h,ot,vt,Te,ae,ve,X),It=new vg(h,Se),C=new $m,w=new sg(Te,ae),re=new Sp(h,ot,vt,we,Xe,u,l),ne=new ug(h,Xe,ae),ye=new xg(N,je,ae,we),Pe=new wp(N,Te,je,ae),de=new Ip(N,Te,je,ae),je.programs=rt.programs,h.capabilities=ae,h.extensions=Te,h.properties=Se,h.renderLists=C,h.shadowMap=ne,h.state=we,h.info=je}Ee();const ge=new _g(h,N);this.xr=ge,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(F,k,!1))},this.getSize=function(A){return A.set(F,k)},this.setSize=function(A,z,q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,k=z,t.width=Math.floor(A*L),t.height=Math.floor(z*L),q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(F*L,k*L).floor()},this.setDrawingBufferSize=function(A,z,q){F=A,k=z,L=q,t.width=Math.floor(A*q),t.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,z,q,G){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,z,q,G),we.viewport(T.copy(K).multiplyScalar(L).floor())},this.getScissor=function(A){return A.copy(R)},this.setScissor=function(A,z,q,G){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,z,q,G),we.scissor(S.copy(R).multiplyScalar(L).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(A){we.setScissorTest(H=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(A=!0,z=!0,q=!0){let G=0;A&&(G|=16384),z&&(G|=256),q&&(G|=1024),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),C.dispose(),w.dispose(),Se.dispose(),ot.dispose(),vt.dispose(),Xe.dispose(),ve.dispose(),ye.dispose(),rt.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Me),ge.removeEventListener("sessionend",Ke),se&&(se.dispose(),se=null),Be.stop()};function xe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=je.autoReset,z=ne.enabled,q=ne.autoUpdate,G=ne.needsUpdate,j=ne.type;Ee(),je.autoReset=A,ne.enabled=z,ne.autoUpdate=q,ne.needsUpdate=G,ne.type=j}function Ze(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const z=A.target;z.removeEventListener("dispose",lt),I(z)}function I(A){V(A),Se.remove(A)}function V(A){const z=Se.get(A).programs;z!==void 0&&(z.forEach(function(q){rt.releaseProgram(q)}),A.isShaderMaterial&&rt.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,G,j,oe){z===null&&(z=ee);const me=j.isMesh&&j.matrixWorld.determinant()<0,Re=Or(A,z,q,G,j);we.setMaterial(G,me);let Oe=q.index,ze=1;G.wireframe===!0&&(Oe=pt.getWireframeAttribute(q),ze=2);const ke=q.drawRange,Ge=q.attributes.position;let et=ke.start*ze,kt=(ke.start+ke.count)*ze;oe!==null&&(et=Math.max(et,oe.start*ze),kt=Math.min(kt,(oe.start+oe.count)*ze)),Oe!==null?(et=Math.max(et,0),kt=Math.min(kt,Oe.count)):Ge!=null&&(et=Math.max(et,0),kt=Math.min(kt,Ge.count));const cn=kt-et;if(cn<0||cn===1/0)return;ve.setup(j,G,Re,q,Oe);let ni,St=Pe;if(Oe!==null&&(ni=xt.get(Oe),St=de,St.setIndex(ni)),j.isMesh)G.wireframe===!0?(we.setLineWidth(G.wireframeLinewidth*ce()),St.setMode(1)):St.setMode(4);else if(j.isLine){let qe=G.linewidth;qe===void 0&&(qe=1),we.setLineWidth(qe*ce()),j.isLineSegments?St.setMode(1):j.isLineLoop?St.setMode(2):St.setMode(3)}else j.isPoints?St.setMode(0):j.isSprite&&St.setMode(4);if(j.isInstancedMesh)St.renderInstances(et,cn,j.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ps=Math.min(q.instanceCount,qe);St.renderInstances(et,cn,Ps)}else St.render(et,cn)},this.compile=function(A,z){function q(G,j,oe){G.transparent===!0&&G.side===Sn&&G.forceSinglePass===!1?(G.side=Kt,G.needsUpdate=!0,Dn(G,j,oe),G.side=Jn,G.needsUpdate=!0,Dn(G,j,oe),G.side=Sn):Dn(G,j,oe)}g=w.get(A),g.init(),m.push(g),A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(h.useLegacyLights),A.traverse(function(G){const j=G.material;if(j)if(Array.isArray(j))for(let oe=0;oe<j.length;oe++){const me=j[oe];q(me,A,G)}else q(j,A,G)}),m.pop(),g=null};let ie=null;function fe(A){ie&&ie(A)}function Me(){Be.stop()}function Ke(){Be.start()}const Be=new Ic;Be.setAnimationLoop(fe),typeof self!="undefined"&&Be.setContext(self),this.setAnimationLoop=function(A){ie=A,ge.setAnimationLoop(A),A===null?Be.stop():Be.start()},ge.addEventListener("sessionstart",Me),ge.addEventListener("sessionend",Ke),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(z),z=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(h,A,z,y),g=w.get(A,m.length),g.init(),m.push(g),W.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(W),_e=this.localClippingEnabled,Q=X.init(this.clippingPlanes,_e),p=C.get(A,v.length),p.init(),v.push(p),At(A,z,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(O,B),Q===!0&&X.beginShadows();const q=g.state.shadowsArray;if(ne.render(q,A,z),Q===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,A),g.setupLights(h.useLegacyLights),z.isArrayCamera){const G=z.cameras;for(let j=0,oe=G.length;j<oe;j++){const me=G[j];qt(p,A,me,me.viewport)}}else qt(p,A,z);y!==null&&(De.updateMultisampleRenderTarget(y),De.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(h,A,z),ve.resetDefaultState(),E=-1,P=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function At(A,z,q,G){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){G&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const me=Xe.update(A),Re=A.material;Re.visible&&p.push(A,me,Re,q,$.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==je.render.frame&&(A.skeleton.update(),A.skeleton.frame=je.render.frame),!A.frustumCulled||Z.intersectsObject(A))){G&&$.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);const me=Xe.update(A),Re=A.material;if(Array.isArray(Re)){const Oe=me.groups;for(let ze=0,ke=Oe.length;ze<ke;ze++){const Ge=Oe[ze],et=Re[Ge.materialIndex];et&&et.visible&&p.push(A,me,et,q,$.z,Ge)}}else Re.visible&&p.push(A,me,Re,q,$.z,null)}}const oe=A.children;for(let me=0,Re=oe.length;me<Re;me++)At(oe[me],z,q,G)}function qt(A,z,q,G){const j=A.opaque,oe=A.transmissive,me=A.transparent;g.setupLightsView(q),Q===!0&&X.setGlobalState(h.clippingPlanes,q),oe.length>0&&ut(j,oe,z,q),G&&we.viewport(T.copy(G)),j.length>0&&Lt(j,z,q),oe.length>0&&Lt(oe,z,q),me.length>0&&Lt(me,z,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ut(A,z,q,G){if(se===null){const Re=ae.isWebGL2;se=new ei(1024,1024,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Rr:Mi,minFilter:Lr,samples:Re&&o===!0?4:0})}const j=h.getRenderTarget();h.setRenderTarget(se),h.clear();const oe=h.toneMapping;h.toneMapping=wn,Lt(A,q,G),De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se);let me=!1;for(let Re=0,Oe=z.length;Re<Oe;Re++){const ze=z[Re],ke=ze.object,Ge=ze.geometry,et=ze.material,kt=ze.group;if(et.side===Sn&&ke.layers.test(G.layers)){const cn=et.side;et.side=Kt,et.needsUpdate=!0,zt(ke,q,G,Ge,et,kt),et.side=cn,et.needsUpdate=!0,me=!0}}me===!0&&(De.updateMultisampleRenderTarget(se),De.updateRenderTargetMipmap(se)),h.setRenderTarget(j),h.toneMapping=oe}function Lt(A,z,q){const G=z.isScene===!0?z.overrideMaterial:null;for(let j=0,oe=A.length;j<oe;j++){const me=A[j],Re=me.object,Oe=me.geometry,ze=G===null?me.material:G,ke=me.group;Re.layers.test(q.layers)&&zt(Re,z,q,Oe,ze,ke)}}function zt(A,z,q,G,j,oe){A.onBeforeRender(h,z,q,G,j,oe),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(h,z,q,G,A,oe),j.transparent===!0&&j.side===Sn&&j.forceSinglePass===!1?(j.side=Kt,j.needsUpdate=!0,h.renderBufferDirect(q,z,G,j,A,oe),j.side=Jn,j.needsUpdate=!0,h.renderBufferDirect(q,z,G,j,A,oe),j.side=Sn):h.renderBufferDirect(q,z,G,j,A,oe),A.onAfterRender(h,z,q,G,j,oe)}function Dn(A,z,q){z.isScene!==!0&&(z=ee);const G=Se.get(A),j=g.state.lights,oe=g.state.shadowsArray,me=j.state.version,Re=rt.getParameters(A,j.state,oe,z,q),Oe=rt.getProgramCacheKey(Re);let ze=G.programs;G.environment=A.isMeshStandardMaterial?z.environment:null,G.fog=z.fog,G.envMap=(A.isMeshStandardMaterial?vt:ot).get(A.envMap||G.environment),ze===void 0&&(A.addEventListener("dispose",lt),ze=new Map,G.programs=ze);let ke=ze.get(Oe);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===me)return ti(A,Re),ke}else Re.uniforms=rt.getUniforms(A),A.onBuild(q,Re,h),A.onBeforeCompile(Re,h),ke=rt.acquireProgram(Re,Oe),ze.set(Oe,ke),G.uniforms=Re.uniforms;const Ge=G.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=X.uniform),ti(A,Re),G.needsLights=In(A),G.lightsStateVersion=me,G.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix);const et=ke.getUniforms(),kt=fs.seqWithValue(et.seq,Ge);return G.currentProgram=ke,G.uniformsList=kt,ke}function ti(A,z){const q=Se.get(A);q.outputEncoding=z.outputEncoding,q.instancing=z.instancing,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Or(A,z,q,G,j){z.isScene!==!0&&(z=ee),De.resetTextureUnits();const oe=z.fog,me=G.isMeshStandardMaterial?z.environment:null,Re=y===null?h.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:$n,Oe=(G.isMeshStandardMaterial?vt:ot).get(G.envMap||me),ze=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ke=!!G.normalMap&&!!q.attributes.tangent,Ge=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,kt=!!q.morphAttributes.color,cn=G.toneMapped?h.toneMapping:wn,ni=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=ni!==void 0?ni.length:0,qe=Se.get(G),Ps=g.state.lights;if(Q===!0&&(_e===!0||A!==P)){const $t=A===P&&G.id===E;X.setState(G,A,$t)}let Rt=!1;G.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ps.state.version||qe.outputEncoding!==Re||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Oe||G.fog===!0&&qe.fog!==oe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==X.numPlanes||qe.numIntersection!==X.numIntersection)||qe.vertexAlphas!==ze||qe.vertexTangents!==ke||qe.morphTargets!==Ge||qe.morphNormals!==et||qe.morphColors!==kt||qe.toneMapping!==cn||ae.isWebGL2===!0&&qe.morphTargetsCount!==St)&&(Rt=!0):(Rt=!0,qe.__version=G.version);let ii=qe.currentProgram;Rt===!0&&(ii=Dn(G,z,j));let Ba=!1,ur=!1,Ls=!1;const Bt=ii.getUniforms(),ri=qe.uniforms;if(we.useProgram(ii.program)&&(Ba=!0,ur=!0,Ls=!0),G.id!==E&&(E=G.id,ur=!0),Ba||P!==A){if(Bt.setValue(N,"projectionMatrix",A.projectionMatrix),ae.logarithmicDepthBuffer&&Bt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),P!==A&&(P=A,ur=!0,Ls=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const $t=Bt.map.cameraPosition;$t!==void 0&&$t.setValue(N,$.setFromMatrixPosition(A.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Bt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||j.isSkinnedMesh)&&Bt.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(j.isSkinnedMesh){Bt.setOptional(N,j,"bindMatrix"),Bt.setOptional(N,j,"bindMatrixInverse");const $t=j.skeleton;$t&&(ae.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Bt.setValue(N,"boneTexture",$t.boneTexture,De),Bt.setValue(N,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Rs=q.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&ae.isWebGL2===!0)&&ue.update(j,q,ii),(ur||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Bt.setValue(N,"receiveShadow",j.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ri.envMap.value=Oe,ri.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),ur&&(Bt.setValue(N,"toneMappingExposure",h.toneMappingExposure),qe.needsLights&&cr(ri,Ls),oe&&G.fog===!0&&It.refreshFogUniforms(ri,oe),It.refreshMaterialUniforms(ri,G,L,k,se),fs.upload(N,qe.uniformsList,ri,De)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fs.upload(N,qe.uniformsList,ri,De),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Bt.setValue(N,"center",j.center),Bt.setValue(N,"modelViewMatrix",j.modelViewMatrix),Bt.setValue(N,"normalMatrix",j.normalMatrix),Bt.setValue(N,"modelMatrix",j.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $t=G.uniformsGroups;for(let Ds=0,nu=$t.length;Ds<nu;Ds++)if(ae.isWebGL2){const Ga=$t[Ds];ye.update(Ga,ii),ye.bind(Ga,ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ii}function cr(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function In(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,z,q){Se.get(A.texture).__webglTexture=z,Se.get(A.depthTexture).__webglTexture=q;const G=Se.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=q===void 0,G.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const q=Se.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,q=0){y=A,M=z,x=q;let G=!0,j=null,oe=!1,me=!1;if(A){const Oe=Se.get(A);Oe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),G=!1):Oe.__webglFramebuffer===void 0?De.setupRenderTarget(A):Oe.__hasExternalTextures&&De.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const ke=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(j=ke[z],oe=!0):ae.isWebGL2&&A.samples>0&&De.useMultisampledRTT(A)===!1?j=Se.get(A).__webglMultisampledFramebuffer:j=ke,T.copy(A.viewport),S.copy(A.scissor),b=A.scissorTest}else T.copy(K).multiplyScalar(L).floor(),S.copy(R).multiplyScalar(L).floor(),b=H;if(we.bindFramebuffer(36160,j)&&ae.drawBuffers&&G&&we.drawBuffers(A,j),we.viewport(T),we.scissor(S),we.setScissorTest(b),oe){const Oe=Se.get(A.texture);N.framebufferTexture2D(36160,36064,34069+z,Oe.__webglTexture,q)}else if(me){const Oe=Se.get(A.texture),ze=z||0;N.framebufferTextureLayer(36160,36064,Oe.__webglTexture,q||0,ze)}E=-1},this.readRenderTargetPixels=function(A,z,q,G,j,oe,me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Re=Re[me]),Re){we.bindFramebuffer(36160,Re);try{const Oe=A.texture,ze=Oe.format,ke=Oe.type;if(ze!==gn&&J.convert(ze)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ke===Rr&&(Te.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Te.has("EXT_color_buffer_float"));if(ke!==Mi&&J.convert(ke)!==N.getParameter(35738)&&!(ke===gi&&(ae.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-G&&q>=0&&q<=A.height-j&&N.readPixels(z,q,G,j,J.convert(ze),J.convert(ke),oe)}finally{const Oe=y!==null?Se.get(y).__webglFramebuffer:null;we.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(A,z,q=0){const G=Math.pow(2,-q),j=Math.floor(z.image.width*G),oe=Math.floor(z.image.height*G);De.setTexture2D(z,0),N.copyTexSubImage2D(3553,q,0,0,A.x,A.y,j,oe),we.unbindTexture()},this.copyTextureToTexture=function(A,z,q,G=0){const j=z.image.width,oe=z.image.height,me=J.convert(q.format),Re=J.convert(q.type);De.setTexture2D(q,0),N.pixelStorei(37440,q.flipY),N.pixelStorei(37441,q.premultiplyAlpha),N.pixelStorei(3317,q.unpackAlignment),z.isDataTexture?N.texSubImage2D(3553,G,A.x,A.y,j,oe,me,Re,z.image.data):z.isCompressedTexture?N.compressedTexSubImage2D(3553,G,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,me,z.mipmaps[0].data):N.texSubImage2D(3553,G,A.x,A.y,me,Re,z.image),G===0&&q.generateMipmaps&&N.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(A,z,q,G,j=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const oe=A.max.x-A.min.x+1,me=A.max.y-A.min.y+1,Re=A.max.z-A.min.z+1,Oe=J.convert(G.format),ze=J.convert(G.type);let ke;if(G.isData3DTexture)De.setTexture3D(G,0),ke=32879;else if(G.isDataArrayTexture)De.setTexture2DArray(G,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment);const Ge=N.getParameter(3314),et=N.getParameter(32878),kt=N.getParameter(3316),cn=N.getParameter(3315),ni=N.getParameter(32877),St=q.isCompressedTexture?q.mipmaps[0]:q.image;N.pixelStorei(3314,St.width),N.pixelStorei(32878,St.height),N.pixelStorei(3316,A.min.x),N.pixelStorei(3315,A.min.y),N.pixelStorei(32877,A.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(ke,j,z.x,z.y,z.z,oe,me,Re,Oe,ze,St.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ke,j,z.x,z.y,z.z,oe,me,Re,Oe,St.data)):N.texSubImage3D(ke,j,z.x,z.y,z.z,oe,me,Re,Oe,ze,St),N.pixelStorei(3314,Ge),N.pixelStorei(32878,et),N.pixelStorei(3316,kt),N.pixelStorei(3315,cn),N.pixelStorei(32877,ni),j===0&&G.generateMipmaps&&N.generateMipmap(ke),we.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),we.unbindTexture()},this.resetState=function(){M=0,x=0,y=null,we.reset(),ve.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class bg extends kc{}bg.prototype.isWebGL1Renderer=!0;class Sg extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Bc extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ol=new D,ll=new D,cl=new _t,la=new Ra,rs=new Ss;class Yn extends Tt{constructor(e=new Xt,t=new Bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ol.fromBufferAttribute(t,i-1),ll.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ol.distanceTo(ll);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(i),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;cl.copy(i).invert(),la.copy(e.ray).applyMatrix4(cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,f=new D,d=new D,u=new D,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const h=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let M=h,x=_-1;M<x;M+=p){const y=g.getX(M),E=g.getX(M+1);if(c.fromBufferAttribute(m,y),f.fromBufferAttribute(m,E),la.distanceSqToSegment(c,f,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(u);T<e.near||T>e.far||t.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let M=h,x=_-1;M<x;M+=p){if(c.fromBufferAttribute(m,M),f.fromBufferAttribute(m,M+1),la.distanceSqToSegment(c,f,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Ft extends Xt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const f=[],d=[],u=[],p=[];let g=0;const v=[],m=n/2;let h=0;_(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(p,2));function _(){const x=new D,y=new D;let E=0;const P=(t-e)/n;for(let T=0;T<=s;T++){const S=[],b=T/s,F=b*(t-e)+e;for(let k=0;k<=i;k++){const L=k/i,O=L*l+o,B=Math.sin(O),K=Math.cos(O);y.x=F*B,y.y=-b*n+m,y.z=F*K,d.push(y.x,y.y,y.z),x.set(B,P,K).normalize(),u.push(x.x,x.y,x.z),p.push(L,1-b),S.push(g++)}v.push(S)}for(let T=0;T<i;T++)for(let S=0;S<s;S++){const b=v[S][T],F=v[S+1][T],k=v[S+1][T+1],L=v[S][T+1];f.push(b,F,L),f.push(F,k,L),E+=6}c.addGroup(h,E,0),h+=E}function M(x){const y=g,E=new Qe,P=new D;let T=0;const S=x===!0?e:t,b=x===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;const F=g;for(let k=0;k<=i;k++){const O=k/i*l+o,B=Math.cos(O),K=Math.sin(O);P.x=S*K,P.y=m*b,P.z=S*B,d.push(P.x,P.y,P.z),u.push(0,b,0),E.x=B*.5+.5,E.y=K*.5*b+.5,p.push(E.x,E.y),g++}for(let k=0;k<i;k++){const L=y+k,O=F+k;x===!0?f.push(O,O+1,L):f.push(O+1,O,L),T+=3}c.addGroup(h,T,x===!0?1:2),h+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Na extends Xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),f(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const M=new D,x=new D,y=new D;for(let E=0;E<t.length;E+=3)p(t[E+0],M),p(t[E+1],x),p(t[E+2],y),l(M,x,y,_)}function l(_,M,x,y){const E=y+1,P=[];for(let T=0;T<=E;T++){P[T]=[];const S=_.clone().lerp(x,T/E),b=M.clone().lerp(x,T/E),F=E-T;for(let k=0;k<=F;k++)k===0&&T===E?P[T][k]=S:P[T][k]=S.clone().lerp(b,k/F)}for(let T=0;T<E;T++)for(let S=0;S<2*(E-T)-1;S++){const b=Math.floor(S/2);S%2===0?(u(P[T][b+1]),u(P[T+1][b]),u(P[T][b])):(u(P[T][b+1]),u(P[T+1][b+1]),u(P[T+1][b]))}}function c(_){const M=new D;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(_),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function f(){const _=new D;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];const x=m(_)/2/Math.PI+.5,y=h(_)/Math.PI+.5;a.push(x,1-y)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const M=a[_+0],x=a[_+2],y=a[_+4],E=Math.max(M,x,y),P=Math.min(M,x,y);E>.9&&P<.1&&(M<.2&&(a[_+0]+=1),x<.2&&(a[_+2]+=1),y<.2&&(a[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function p(_,M){const x=_*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function g(){const _=new D,M=new D,x=new D,y=new D,E=new Qe,P=new Qe,T=new Qe;for(let S=0,b=0;S<s.length;S+=9,b+=6){_.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),E.set(a[b+0],a[b+1]),P.set(a[b+2],a[b+3]),T.set(a[b+4],a[b+5]),y.copy(_).add(M).add(x).divideScalar(3);const F=m(y);v(E,b+0,_,F),v(P,b+2,M,F),v(T,b+4,x,F)}}function v(_,M,x,y){y<0&&_.x===1&&(a[M]=_.x-1),x.x===0&&x.z===0&&(a[M]=y/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.vertices,e.indices,e.radius,e.details)}}class Xi extends Na{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xi(e.radius,e.detail)}}class Oa extends Xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const f=[],d=new D,u=new D,p=[],g=[],v=[],m=[];for(let h=0;h<=n;h++){const _=[],M=h/n;let x=0;h===0&&a===0?x=.5/t:h===n&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const E=y/t;d.x=-e*Math.cos(i+E*s)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(i+E*s)*Math.sin(a+M*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(E+x,1-M),_.push(c++)}f.push(_)}for(let h=0;h<n;h++)for(let _=0;_<t;_++){const M=f[h][_+1],x=f[h][_],y=f[h+1][_],E=f[h+1][_+1];(h!==0||a>0)&&p.push(M,x,E),(h!==n-1||l<Math.PI)&&p.push(x,y,E)}this.setIndex(p),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(v,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class di extends Xt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],f=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),u.subVectors(d,f).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,h=(i+1)*(p-1)+g,_=(i+1)*p+g;a.push(v,m,_),a.push(m,h,_)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yg extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ul={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wg{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null}}}const Gc=new wg;class Hc{constructor(e){this.manager=e!==void 0?e:Gc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Eg extends Hc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ul.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Ur("img");function l(){f(),ul.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){f(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class fl extends Hc{constructor(e){super(e)}load(e,t,n,i){const s=new Jt,a=new Eg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Vc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hl(){return(typeof performance=="undefined"?Date:performance).now()}class Wc{constructor(e,t,n=0,i=1/0){this.ray=new Ra(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ea(e,this,n,t),n.sort(dl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ea(e[i],this,n,t);return n.sort(dl),n}}function dl(r,e){return r.distance-e.distance}function Ea(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Ea(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);const Tg=()=>{const r={show:Ye(!1),cameraPosition:Ye({x:0,y:0,z:1}),cameraLookAt:Ye({x:0,y:0,z:10}),objectPosition:Ye({x:0,y:0,z:10}),objectEuler:Ye(new bi(0,0,0,"ZXY")),cartEntity:Ye(0)};return{...r,...{setupModel(t){r.cameraPosition.set(Hi(t.cameraPosition)),r.cameraLookAt.set(Hi(t.cameraLookAt)),r.objectPosition.set(Hi(t.objectPosition)),r.objectEuler.set(new bi(Qt.degToRad(t.objectRotation.x),Qt.degToRad(t.objectRotation.z),Qt.degToRad(t.objectRotation.y),"YZX")),r.show.set(!0),r.cartEntity.set(t.cartEntity)},updateCamera(t){r.cameraPosition.set(Hi(t.cameraPosition)),r.cameraLookAt.set(Hi(t.cameraLookAt))},updateCameraPosition(t){r.cameraPosition.set(t.cameraPosition)},updateCameraLookAt(t){r.cameraLookAt.set(t.cameraLookAt)},sendMovementUpdate(t){Et("moveObject",t)},sendRotationUpdate(t){const n=us(t);Et("rotateObject",{x:Qt.radToDeg(n.x).toFixed(2),y:Qt.radToDeg(n.y).toFixed(2),z:Qt.radToDeg(n.z).toFixed(2)})}}}};var Gn=Tg();function pl(r){let e,t;const n=r[2].default,i=An(n,r,r[1],null);return{c(){e=te("main"),i&&i.c(),Y(e,"class","svelte-1fnr7mh")},m(s,a){We(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&2)&&Pn(i,n,s,s[1],t?Cn(n,s[1],a,null):Ln(s[1]),null)},i(s){t||(be(i,s),t=!0)},o(s){Ce(i,s),t=!1},d(s){s&&He(e),i&&i.d(s)}}}function Ag(r){let e,t,n=r[0]&&pl(r);return{c(){n&&n.c(),e=Si()},m(i,s){n&&n.m(i,s),We(i,e,s),t=!0},p(i,[s]){i[0]?n?(n.p(i,s),s&1&&be(n,1)):(n=pl(i),n.c(),be(n,1),n.m(e.parentNode,e)):n&&(vi(),Ce(n,1,1,()=>{n=null}),xi())},i(i){t||(be(n),t=!0)},o(i){Ce(n),t=!1},d(i){n&&n.d(i),i&&He(e)}}}function Cg(r,e,t){let n;Ae(r,jt,o=>t(3,n=o));let{$$slots:i={},$$scope:s}=e,a;return yr.subscribe(o=>{t(0,a=o)}),on("setVisible",o=>{yr.set(o),o&&Ue(jt,n=!1,n)}),rr(()=>{const o=l=>{a&&["Escape"].includes(l.code)&&(Et("hideUI"),yr.set(!1),Gn.show.set(!1))};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}),r.$$set=o=>{"$$scope"in o&&t(1,s=o.$$scope)},[a,s,i]}class Pg extends gt{constructor(e){super(),mt(this,e,Cg,Ag,dt,{})}}const Lg=()=>!window.invokeNative,Ta=(r,e=0)=>{if(Lg())for(const t of r)setTimeout(()=>{window.dispatchEvent(new MessageEvent("message",{data:{action:t.action,data:t.data}}))},e)};function ml(r,e,t){const n=r.slice();return n[6]=e[t],n}function gl(r,e,t){const n=r.slice();return n[9]=e[t],n}function _l(r){let e,t=r[1],n=[];for(let i=0;i<t.length;i+=1)n[i]=xl(ml(r,t,i));return{c(){e=te("div");for(let i=0;i<n.length;i+=1)n[i].c();Y(e,"class","w-fit h-fit bg-gray-600 p-2 ")},m(i,s){We(i,e,s);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(e,null)},p(i,s){if(s&2){t=i[1];let a;for(a=0;a<t.length;a+=1){const o=ml(i,t,a);n[a]?n[a].p(o,s):(n[a]=xl(o),n[a].c(),n[a].m(e,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){i&&He(e),nr(n,i)}}}function vl(r){let e,t=r[9].name+"",n,i,s;function a(){return r[3](r[9])}return{c(){e=te("button"),n=Je(t),Y(e,"class","bg-blue-500 text-white p-2")},m(o,l){We(o,e,l),U(e,n),i||(s=Ie(e,"click",a),i=!0)},p(o,l){r=o},d(o){o&&He(e),i=!1,s()}}}function xl(r){let e,t,n=r[6].component+"",i,s,a,o=r[6].actions,l=[];for(let c=0;c<o.length;c+=1)l[c]=vl(gl(r,o,c));return{c(){e=te("div"),t=te("p"),i=Je(n),s=he();for(let c=0;c<l.length;c+=1)l[c].c();a=he(),Y(t,"class","text-white"),Y(e,"class","flex flex-row gap-2 items-center m-1")},m(c,f){We(c,e,f),U(e,t),U(t,i),U(e,s);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(e,null);U(e,a)},p(c,f){if(f&2){o=c[6].actions;let d;for(d=0;d<o.length;d+=1){const u=gl(c,o,d);l[d]?l[d].p(u,f):(l[d]=vl(u),l[d].c(),l[d].m(e,a))}for(;d<l.length;d+=1)l[d].d(1);l.length=o.length}},d(c){c&&He(e),nr(l,c)}}}function Rg(r){let e,t,n,i,s,a=r[0]&&_l(r);return{c(){e=te("div"),t=te("button"),t.textContent="Show",n=he(),a&&a.c(),Y(t,"class","bg-red-500 text-white p-2"),Y(e,"class","absolute top-0 left-1/2 z-[1000]")},m(o,l){We(o,e,l),U(e,t),U(e,n),a&&a.m(e,null),i||(s=Ie(t,"click",r[2]),i=!0)},p(o,[l]){o[0]?a?a.p(o,l):(a=_l(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:bt,o:bt,d(o){o&&He(e),a&&a.d(),i=!1,s()}}}function Dg(r,e,t){let n=!1,i=[{label:"Item 1",object:"v_res_d_coffeetable",price:100},{label:"Item 2",object:"v_res_d_coffeetable",price:100},{label:"Item 3",object:"v_res_d_coffeetable",price:100},{label:"Item 4",object:"v_res_d_coffeetable",price:100},{label:"Item 5",object:"v_res_d_coffeetable",price:100}];return[n,[{component:"Show",actions:[{name:"show",action:"setVisible",data:!0},{name:"hide",action:"setVisible",data:!1}]},{component:"Furniture",actions:[{name:"Set Furniture Data",action:"setFurnituresData",data:[{category:"Category 1",items:i},{category:"Category 2",items:i},{category:"Category 3",items:i},{category:"Category 4",items:i},{category:"Category 5",items:i}]}]}],()=>{t(0,n=!n)},c=>{if(c.custom==!0){c.customFunction();return}Ta([{action:c.action,data:c.data}])}]}class Ig extends gt{constructor(e){super(),mt(this,e,Dg,Rg,dt,{})}}function Ml(r,e,t){const n=r.slice();return n[9]=e[t],n[11]=t,n}function bl(r){let e,t,n,i=r[9].label+"",s,a,o,l,c=r[9].price+"",f,d,u,p,g,v;function m(){return r[5](r[9])}function h(){return r[7](r[9])}return{c(){e=te("button"),t=te("div"),n=te("p"),s=Je(i),a=he(),o=te("p"),l=Je("$"),f=Je(c),d=he(),u=te("div"),u.innerHTML='<i class="fas fa-eye text-[color:var(--color-text)] text-[2.5rem]"></i>',p=he(),Y(n,"class","text-[color:var(--color-text)] text-[2rem] font-bold text-start"),Y(o,"class","text-[color:var(--color-text)] text-[2rem]"),Y(t,"class","w-full h-full flex flex-col justify-center items-start "),Y(u,"class","bg-[color:var(--color-tertiary)] aspect-square h-[5rem] grid place-items-center justify-center items-center"),Y(e,"class","h-full w-[30rem] bg-[color:var(--color-secondary)] flex flex-row items-center px-[1.5rem] py-[0.5rem] hover:cursor-pointer")},m(_,M){We(_,e,M),U(e,t),U(t,n),U(n,s),U(t,a),U(t,o),U(o,l),U(o,f),U(e,d),U(e,u),U(e,p),g||(v=[Ie(u,"mouseenter",m),Ie(u,"mouseleave",r[6]),Ie(e,"click",h)],g=!0)},p(_,M){r=_,M&2&&i!==(i=r[9].label+"")&&wt(s,i),M&2&&c!==(c=r[9].price+"")&&wt(f,c)},d(_){_&&He(e),g=!1,sn(v)}}}function Ug(r){let e,t,n,i,s=r[1].items,a=[];for(let o=0;o<s.length;o+=1)a[o]=bl(Ml(r,s,o));return{c(){e=te("div"),t=te("div");for(let o=0;o<a.length;o+=1)a[o].c();Y(t,"class","grid grid-rows-2 grid-flow-col-dense gap-[1rem] overflow-x-scroll overflow-y-hidden w-fit max-w-full h-full relative scroll-style scroll-style-horizontal"),Y(e,"class","w-full h-[24rem] bg-[color:var(--color-primary)] p-[1rem]")},m(o,l){We(o,e,l),U(e,t);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);r[8](t),n||(i=Ie(t,"wheel",r[4]),n=!0)},p(o,[l]){if(l&14){s=o[1].items;let c;for(c=0;c<s.length;c+=1){const f=Ml(o,s,c);a[c]?a[c].p(f,l):(a[c]=bl(f),a[c].c(),a[c].m(t,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:bt,o:bt,d(o){o&&He(e),nr(a,o),r[8](null),n=!1,i()}}}function Ng(r,e,t){let n,i,s;Ae(r,Qn,u=>t(1,n=u)),Ae(r,ms,u=>t(2,i=u)),Ae(r,jt,u=>t(3,s=u));let a;function o(u){u=window.event||u;var p=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail));t(0,a.scrollLeft-=p*50,a),u.preventDefault()}const l=u=>{Et("hoverIn",u)},c=()=>{Et("hoverOut")},f=u=>{Et("previewFurniture",u),Ue(ms,i=u,i),Ue(jt,s=!0,s)};function d(u){Hn[u?"unshift":"push"](()=>{a=u,t(0,a)})}return[a,n,i,s,o,l,c,f,d]}class Og extends gt{constructor(e){super(),mt(this,e,Ng,Ug,dt,{})}}function Fg(r,e,t){let n,i,s,a,o;Ae(r,Wi,c=>t(0,n=c)),Ae(r,Bn,c=>t(1,i=c)),Ae(r,jt,c=>t(2,s=c)),Ae(r,ps,c=>t(3,a=c)),Ae(r,yr,c=>t(4,o=c)),Ta([{action:"setVisible",data:!0}]),Ta([{action:"setBrowserMode",data:!0}]);function l(c){c.key==="="&&Ue(yr,o=!0,o)}return on("setBrowserMode",c=>{Ms.set(c),console.log("browser mode enabled"),c?window.addEventListener("keydown",l):window.removeEventListener("keydown",l)}),on("setupModel",c=>{Gn.show.set(!0),Gn.setupModel(c)}),on("updateCamera",c=>{Gn.updateCamera(c)}),on("setFurnituresData",c=>{ps.set(c),Qn.set(a[0])}),on("addToCart",c=>{Ue(Bn,i=[...i,c],i),Gn.show.set(!1),Ue(jt,s=!1,s)}),on("removeFromCart",c=>{Ue(Bn,i=i.filter(f=>f.entity!==c.entity),i),Ue(Bn,i=[...i],i)}),on("clearCart",()=>{Ue(Bn,i=[],i)}),on("setOwnedItems",c=>{Ue(Wi,n=c,n)}),on("removeOwnedItem",c=>{Ue(Wi,n=n.filter(f=>f.entity!==c.entity),n),Ue(Wi,n=[...n],n)}),[]}class zg extends gt{constructor(e){super(),mt(this,e,Fg,null,dt,{})}}function Sl(r,e,t){const n=r.slice();return n[20]=e[t],n[22]=t,n}function yl(r){let e,t,n;return{c(){e=te("input"),e.autofocus=!0,Y(e,"class","min-w-[10rem] h-[4.5rem] px-[1rem] text-[2rem] bg-[color:var(--color-tertiary)]"),Y(e,"type","text"),Y(e,"placeholder","Search")},m(i,s){We(i,e,s),Mn(e,r[1]),e.focus(),t||(n=Ie(e,"input",r[13]),t=!0)},p(i,s){s&2&&e.value!==i[1]&&Mn(e,i[1])},d(i){i&&He(e),t=!1,n()}}}function wl(r){let e,t=r[20].category+"",n,i,s;function a(){return r[15](r[22])}return{c(){e=te("button"),n=Je(t),Y(e,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),ds(e,"selected",r[0]===r[22])},m(o,l){We(o,e,l),U(e,n),i||(s=Ie(e,"click",a),i=!0)},p(o,l){r=o,l&4&&t!==(t=r[20].category+"")&&wt(n,t),l&1&&ds(e,"selected",r[0]===r[22])},d(o){o&&He(e),i=!1,s()}}}function kg(r){let e,t,n,i,s,a,o,l,c,f,d,u,p,g,v,m=r[9].length+"",h,_,M,x,y,E,P=r[10].length+"",T,S,b,F,k,L,O,B=r[4]&&yl(r),K=r[2],R=[];for(let H=0;H<K.length;H+=1)R[H]=wl(Sl(r,K,H));return{c(){e=te("div"),t=te("button"),n=te("button"),n.innerHTML='<i class="fas fa-magnifying-glass text-[2rem]"></i>',i=he(),B&&B.c(),a=he(),o=te("div"),l=te("button"),l.textContent="Show All",c=he();for(let H=0;H<R.length;H+=1)R[H].c();f=he(),d=te("div"),u=te("button"),p=te("p"),p.textContent="Owned Furniture",g=he(),v=te("span"),h=Je(m),_=he(),M=te("button"),x=te("i"),y=he(),E=te("span"),T=Je(P),S=he(),b=te("button"),F=te("i"),Y(n,"class","h-[4.5rem] w-[5rem] aspect-square bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center justify-center"),Y(t,"class",s="h-[4.5rem] "+(r[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center"),Y(l,"class","whitespace-nowrap w-fit px-10 h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] grid place-items-center transition-all duration-200 ease-in-out svelte-vkl3yg"),ds(l,"selected",r[0]===-1),Y(o,"class","w-full h-[5rem] items-end flex flex-row gap-2 overflow-y-visible overflow-x-scroll categories svelte-vkl3yg"),Y(p,"class","w-fit whitespace-nowrap"),Y(v,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),Y(u,"class","w-fit px-[2rem] items-center justify-center break h-[4.5rem] text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 transition-all duration-200 ease-in-out"),Y(x,"class","fas fa-shopping-cart"),Y(E,"class","h-fit px-[1rem] bg-[color:var(--color-tertiary)]"),Y(M,"class","h-[4.5rem] w-fit px-[2rem] text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),Y(F,"class",k="fas fa-chevron-"+(r[6]?"up":"down")),Y(b,"class","h-[4.5rem] w-fit aspect-square text-[2rem] bg-[color:var(--color-secondary)] flex flex-row gap-4 items-center justify-center transition-all duration-200 ease-in-out"),Y(d,"class","overflow-y-visible flex flex-row gap-2 ml-auto"),Y(e,"class","w-full h-full overflow-y-visible flex flex-row gap-2 items-end flex-nowrap")},m(H,Z){We(H,e,Z),U(e,t),U(t,n),U(t,i),B&&B.m(t,null),U(e,a),U(e,o),U(o,l),U(o,c);for(let Q=0;Q<R.length;Q+=1)R[Q]&&R[Q].m(o,null);r[16](o),U(e,f),U(e,d),U(d,u),U(u,p),U(u,g),U(u,v),U(v,h),U(d,_),U(d,M),U(M,x),U(M,y),U(M,E),U(E,T),U(d,S),U(d,b),U(b,F),L||(O=[Ie(n,"click",r[12]),Ie(l,"click",r[14]),Ie(o,"wheel",r[11]),Ie(u,"click",r[17]),Ie(M,"click",r[18]),Ie(b,"click",r[19])],L=!0)},p(H,[Z]){if(H[4]?B?B.p(H,Z):(B=yl(H),B.c(),B.m(t,null)):B&&(B.d(1),B=null),Z&16&&s!==(s="h-[4.5rem] "+(H[4]?"w-fit":"w-[5rem] aspect-square")+" bg-[color:var(--color-secondary)] flex flex-row gap-2 items-center")&&Y(t,"class",s),Z&1&&ds(l,"selected",H[0]===-1),Z&101){K=H[2];let Q;for(Q=0;Q<K.length;Q+=1){const _e=Sl(H,K,Q);R[Q]?R[Q].p(_e,Z):(R[Q]=wl(_e),R[Q].c(),R[Q].m(o,null))}for(;Q<R.length;Q+=1)R[Q].d(1);R.length=K.length}Z&512&&m!==(m=H[9].length+"")&&wt(h,m),Z&1024&&P!==(P=H[10].length+"")&&wt(T,P),Z&64&&k!==(k="fas fa-chevron-"+(H[6]?"up":"down"))&&Y(F,"class",k)},i:bt,o:bt,d(H){H&&He(e),B&&B.d(),nr(R,H),r[16](null),L=!1,sn(O)}}}function Bg(r,e,t){let n,i,s,a,o,l,c;Ae(r,ps,P=>t(2,n=P)),Ae(r,Qn,P=>t(5,i=P)),Ae(r,jt,P=>t(6,s=P)),Ae(r,wr,P=>t(7,a=P)),Ae(r,Er,P=>t(8,o=P)),Ae(r,Wi,P=>t(9,l=P)),Ae(r,Bn,P=>t(10,c=P));let f=-1,d;function u(P){P=window.event||P;var T=Math.max(-1,Math.min(1,P.wheelDelta||-P.detail));t(3,d.scrollLeft-=T*50,d),P.preventDefault()}let p=!1,g="";const v=()=>{t(4,p=!p),s&&Ue(jt,s=!1,s)};function m(){g=this.value,t(1,g)}const h=()=>{t(0,f=-1);const P=n.flatMap(T=>T.items);Ue(Qn,i={category:"Show All",items:P},i),s&&Ue(jt,s=!1,s)},_=P=>{t(0,f=P),Ue(Qn,i=n[P],i),s&&Ue(jt,s=!1,s)};function M(P){Hn[P?"unshift":"push"](()=>{d=P,t(3,d)})}const x=()=>{Ue(wr,a=!1,a),Ue(Er,o=!o,o)},y=()=>{Ue(Er,o=!1,o),Ue(wr,a=!a,a)},E=()=>{Ue(jt,s=!s,s)};return r.$$.update=()=>{if(r.$$.dirty&7)if(g.length>0){let P=null;f==-1?P=n.flatMap(S=>S.items):P=n[f].items;const T=P.filter(S=>S.label.toLowerCase().includes(g.toLowerCase()));Ue(Qn,i={category:"Search Results",items:T},i)}else if(f===-1){const P=n.flatMap(T=>T.items);Ue(Qn,i={category:"Show All",items:P},i)}else Ue(Qn,i=n[f],i)},[f,g,n,d,p,i,s,a,o,l,c,u,v,m,h,_,M,x,y,E]}class Gg extends gt{constructor(e){super(),mt(this,e,Bg,kg,dt,{})}}function El(r,e,t){const n=r.slice();return n[6]=e[t],n[8]=t,n}function Tl(r){let e,t,n,i,s,a,o,l,c,f,d,u=r[1].reduce(Cl,0)+"",p,g,v,m,h,_=r[1],M=[];for(let x=0;x<_.length;x+=1)M[x]=Al(El(r,_,x));return{c(){e=te("div"),t=te("div"),n=te("h1"),n.textContent="Cart",i=he(),s=te("button"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',a=he(),o=te("div");for(let x=0;x<M.length;x+=1)M[x].c();l=he(),c=te("div"),f=te("h1"),d=Je("Total: $"),p=Je(u),g=he(),v=te("button"),v.innerHTML=`<p>Buy</p> 
				<i class="fa-solid fa-check"></i>`,Y(n,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"),Y(s,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"),Y(t,"class","flex flex-row gap-2"),Y(o,"class","flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"),Y(f,"class","bg-[color:var(--color-secondary)] text-[2rem] w-full h-full flex items-center px-4"),Y(v,"class","bg-[color:var(--color-secondary)] text-[2rem] h-full gap-4 whitespace-nowrap flex flex-row items-center justify-center px-8 text-center"),Y(c,"class","flex flex-row gap-2 items-center justify-center h-[5rem]"),Y(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]")},m(x,y){We(x,e,y),U(e,t),U(t,n),U(t,i),U(t,s),U(e,a),U(e,o);for(let E=0;E<M.length;E+=1)M[E]&&M[E].m(o,null);U(e,l),U(e,c),U(c,f),U(f,d),U(f,p),U(c,g),U(c,v),m||(h=[Ie(s,"click",r[2]),Ie(v,"click",r[5])],m=!0)},p(x,y){if(y&2){_=x[1];let E;for(E=0;E<_.length;E+=1){const P=El(x,_,E);M[E]?M[E].p(P,y):(M[E]=Al(P),M[E].c(),M[E].m(o,null))}for(;E<M.length;E+=1)M[E].d(1);M.length=_.length}y&2&&u!==(u=x[1].reduce(Cl,0)+"")&&wt(p,u)},d(x){x&&He(e),nr(M,x),m=!1,sn(h)}}}function Al(r){let e,t,n,i,s,a=r[6].label+"",o,l,c,f,d=r[6].price+"",u,p,g,v,m,h;function _(){return r[3](r[6])}function M(){return r[4](r[6])}return{c(){e=te("div"),t=te("button"),t.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',n=he(),i=te("div"),s=te("h1"),o=Je(a),l=he(),c=te("h1"),f=Je("$"),u=Je(d),p=he(),g=te("button"),g.innerHTML='<i class="fa-solid fa-xmark"></i>',v=he(),Y(t,"class","bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"),Y(s,"class","text-[2rem]"),Y(c,"class","text-[1.5rem]"),Y(i,"class","flex flex-col gap-2 w-full"),Y(g,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square"),Y(e,"class","flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center")},m(x,y){We(x,e,y),U(e,t),U(e,n),U(e,i),U(i,s),U(s,o),U(i,l),U(i,c),U(c,f),U(c,u),U(e,p),U(e,g),U(e,v),m||(h=[Ie(t,"click",_),Ie(g,"click",M)],m=!0)},p(x,y){r=x,y&2&&a!==(a=r[6].label+"")&&wt(o,a),y&2&&d!==(d=r[6].price+"")&&wt(u,d)},d(x){x&&He(e),m=!1,sn(h)}}}function Hg(r){let e,t=r[0]&&Tl(r);return{c(){t&&t.c(),e=Si()},m(n,i){t&&t.m(n,i),We(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=Tl(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:bt,o:bt,d(n){t&&t.d(n),n&&He(e)}}}const Cl=(r,e)=>r+e.price;function Vg(r,e,t){let n,i;return Ae(r,wr,c=>t(0,n=c)),Ae(r,Bn,c=>t(1,i=c)),[n,i,()=>Ue(wr,n=!1,n),c=>{Et("selectCartItem",c)},c=>{Et("removeCartItem",c)},()=>{Et("buyCartItems")}]}class Wg extends gt{constructor(e){super(),mt(this,e,Vg,Hg,dt,{})}}function Pl(r,e,t){const n=r.slice();return n[5]=e[t],n[7]=t,n}function Ll(r){let e,t,n,i,s,a,o,l,c,f=r[1],d=[];for(let u=0;u<f.length;u+=1)d[u]=Dl(Pl(r,f,u));return{c(){e=te("div"),t=te("div"),n=te("h1"),n.textContent="Cart",i=he(),s=te("button"),s.innerHTML='<i class="fa-solid fa-xmark"></i>',a=he(),o=te("div");for(let u=0;u<d.length;u+=1)d[u].c();Y(n,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 w-full h-fit text-center"),Y(s,"class","bg-[color:var(--color-secondary)] text-[2rem] py-4 h-full text-center aspect-square"),Y(t,"class","flex flex-row gap-2"),Y(o,"class","flex flex-col gap-2 px-4 overflow-scroll h-full scroll-style scroll-style-vertical"),Y(e,"class","w-[40rem] h-[60rem] bg-[color:var(--color-primary)] absolute right-0 -top-[65rem] flex flex-col gap-[1rem]")},m(u,p){We(u,e,p),U(e,t),U(t,n),U(t,i),U(t,s),U(e,a),U(e,o);for(let g=0;g<d.length;g+=1)d[g]&&d[g].m(o,null);l||(c=Ie(s,"click",r[2]),l=!0)},p(u,p){if(p&2){f=u[1];let g;for(g=0;g<f.length;g+=1){const v=Pl(u,f,g);d[g]?d[g].p(v,p):(d[g]=Dl(v),d[g].c(),d[g].m(o,null))}for(;g<d.length;g+=1)d[g].d(1);d.length=f.length}},d(u){u&&He(e),nr(d,u),l=!1,c()}}}function Rl(r){let e,t,n;function i(){return r[4](r[5])}return{c(){e=te("button"),e.innerHTML='<i class="fa-solid fa-xmark"></i>',Y(e,"class","bg-[color:var(--color-tertiary)] text-[2rem] py-4 h-full text-center aspect-square")},m(s,a){We(s,e,a),t||(n=Ie(e,"click",i),t=!0)},p(s,a){r=s},d(s){s&&He(e),t=!1,n()}}}function Dl(r){let e,t,n,i,s,a=r[5].label+"",o,l,c,f,d=r[5].price+"",u,p,g,v,m;function h(){return r[3](r[5])}let _=!r[5].type&&Rl(r);return{c(){e=te("div"),t=te("button"),t.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',n=he(),i=te("div"),s=te("h1"),o=Je(a),l=he(),c=te("h1"),f=Je("$"),u=Je(d),p=he(),_&&_.c(),g=he(),Y(t,"class","bg-[color:var(--color-tertiary)] text-[2rem] w-[4rem] h-[4rem] text-center aspect-square"),Y(s,"class","text-[2rem]"),Y(c,"class","text-[1.5rem]"),Y(i,"class","flex flex-col gap-2 w-full"),Y(e,"class","flex flex-row gap-2 w-full justify-between bg-[color:var(--color-secondary)] p-4 items-center")},m(M,x){We(M,e,x),U(e,t),U(e,n),U(e,i),U(i,s),U(s,o),U(i,l),U(i,c),U(c,f),U(c,u),U(e,p),_&&_.m(e,null),U(e,g),v||(m=Ie(t,"click",h),v=!0)},p(M,x){r=M,x&2&&a!==(a=r[5].label+"")&&wt(o,a),x&2&&d!==(d=r[5].price+"")&&wt(u,d),r[5].type?_&&(_.d(1),_=null):_?_.p(r,x):(_=Rl(r),_.c(),_.m(e,g))},d(M){M&&He(e),_&&_.d(),v=!1,m()}}}function jg(r){let e,t=r[0]&&Ll(r);return{c(){t&&t.c(),e=Si()},m(n,i){t&&t.m(n,i),We(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=Ll(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:bt,o:bt,d(n){t&&t.d(n),n&&He(e)}}}function Xg(r,e,t){let n,i;return Ae(r,Er,l=>t(0,n=l)),Ae(r,Wi,l=>t(1,i=l)),[n,i,()=>Ue(Er,n=!1,n),l=>{Et("selectOwnedItem",l)},l=>{Et("removeOwnedItem",l)}]}class qg extends gt{constructor(e){super(),mt(this,e,Xg,jg,dt,{})}}function Yg(r){let e,t,n,i,s,a,o,l,c,f,d,u,p,g,v,m,h,_,M=r[1].toFixed(1)+"",x,y,E,P,T,S,b;return t=new Gg({}),i=new Og({}),a=new Wg({}),l=new qg({}),{c(){e=te("div"),at(t.$$.fragment),n=he(),at(i.$$.fragment),s=he(),at(a.$$.fragment),o=he(),at(l.$$.fragment),c=he(),f=te("div"),d=te("i"),u=he(),p=te("p"),p.textContent="C",g=he(),v=te("div"),m=te("i"),h=he(),_=te("p"),x=Je(M),y=he(),E=te("input"),Y(d,"class","fa-solid fa-video text-[white]"),Y(p,"class","font-semibold"),Wa(f,"border-color",r[0]?"white":"var(--color-tertiary)"),Y(f,"class","absolute -top-[5rem] text-[2rem] right-0 w-[8rem] border-[0.3rem] h-[4rem] bg-[color:var(--color-primary)] flex flex-row gap-[1rem] items-center justify-center"),Y(m,"class","fa-solid fa-eye text-[white]"),Y(_,"class","font-semibold text-center w-[4rem]"),Y(E,"id","slider"),Y(E,"type","range"),Y(E,"min","1.0"),Y(E,"max","12.5"),Y(E,"step","0.5"),Y(E,"class","w-full"),Y(v,"class","flex flex-row gap-[1rem] items-center absolute left-0 -top-[5rem] w-[30rem] h-fit p-4 bg-[color:var(--color-primary)]"),Y(e,"class",P="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(r[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1]")},m(F,k){We(F,e,k),nt(t,e,null),U(e,n),nt(i,e,null),U(e,s),nt(a,e,null),U(e,o),nt(l,e,null),U(e,c),U(e,f),U(f,d),U(f,u),U(f,p),U(e,g),U(e,v),U(v,m),U(v,h),U(v,_),U(_,x),U(v,y),U(v,E),Mn(E,r[1]),T=!0,S||(b=[Ie(E,"change",r[3]),Ie(E,"input",r[3]),Ie(E,"change",r[4])],S=!0)},p(F,[k]){(!T||k&1)&&Wa(f,"border-color",F[0]?"white":"var(--color-tertiary)"),(!T||k&2)&&M!==(M=F[1].toFixed(1)+"")&&wt(x,M),k&2&&Mn(E,F[1]),(!T||k&4&&P!==(P="w-[97%] h-fit flex flex-col absolute left-1/2 overflow-visible -translate-x-1/2 "+(F[2]?"-bottom-[24rem]":"bottom-[3rem]")+" z-[1]"))&&Y(e,"class",P)},i(F){T||(be(t.$$.fragment,F),be(i.$$.fragment,F),be(a.$$.fragment,F),be(l.$$.fragment,F),T=!0)},o(F){Ce(t.$$.fragment,F),Ce(i.$$.fragment,F),Ce(a.$$.fragment,F),Ce(l.$$.fragment,F),T=!1},d(F){F&&He(e),it(t),it(i),it(a),it(l),S=!1,sn(b)}}}function Zg(r,e,t){let n;Ae(r,jt,c=>t(2,n=c));let i=!1,s=5;function a(c){c.target instanceof HTMLInputElement||c.target instanceof HTMLTextAreaElement||c.key==="c"&&(Et("freecamMode",!0),Ue(jt,n=!0,n),t(0,i=!0))}on("freecamMode",c=>{c==!1&&(Ue(jt,n=!1,n),t(0,i=!1))}),rr(()=>{window.addEventListener("keypress",a),Et("freecamMode",!1),Et("setHoverDistance",s),Ue(jt,n=!1,n),t(0,i=!1)});function o(){s=ls(this.value),t(1,s)}return[i,s,n,o,()=>{Et("setHoverDistance",s)}]}class Qg extends gt{constructor(e){super(),mt(this,e,Zg,Yg,dt,{})}}const Kg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jg=new Uc(-1,1,1,-1,0,1),Fa=new Xt;Fa.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3));Fa.setAttribute("uv",new ht([0,2,0,0,2,0],2));class $g{constructor(e){this._mesh=new pe(Fa,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class e_ extends Ts{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lc.clone(e.uniforms),this.material=new Vn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $g(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Il extends Ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class t_ extends Ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class n_{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Qe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new e_(Kg),this.clock=new Vc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Il!==void 0&&(a instanceof Il?n=!0:a instanceof t_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jc extends Ts{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const i_=(r,e,t)=>{r.renderer=new kc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),r.composer=new n_(r.renderer),r.composer.addPass(new jc(r.scene,Ca(r.camera)))},Ul=(r,e,t)=>{!r.renderer||(e?r.renderer.outputEncoding=$n:r.renderer.outputEncoding=st,t?r.renderer.toneMapping=wn:r.renderer.toneMapping=gc)},Nl=(r,e,t)=>{var n,i,s,a,o,l,c,f;!r.renderer||!r.composer||((i=(n=r.renderer).setSize)==null||i.call(n,e.width,e.height),(a=(s=r.renderer).setPixelRatio)==null||a.call(s,t),(l=(o=r.composer).setSize)==null||l.call(o,e.width,e.height),(f=(c=r.composer).setPixelRatio)==null||f.call(c,t))},Ol=(r,e,t)=>{!r.renderer||(r.renderer.shadowMap.enabled=e,r.renderer.shadowMap.type=t)},yn=r=>r.userData,r_=(r,e)=>{r.pointer.update(t=>r.renderer?t.set(e.offsetX/r.renderer.domElement.clientWidth*2-1,-(e.offsetY/r.renderer.domElement.clientHeight)*2+1):t)},Xc=(r,e,t,n)=>(r.raycaster.setFromCamera(e,t),r.raycaster.intersectObjects(n,!1)),s_=(r,e)=>r.object.uuid!==e.object.uuid||r.instanceId!==e.instanceId,a_=(r,e,t)=>{let n;const i=r.camera.subscribe(c=>n=c);ct(i);let s;const a=r.pointer.subscribe(c=>s=c);ct(a);let o;const l=c=>{var u,p;c.preventDefault();const f=c.type;r.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,r_(r,c);const d=o_(e,s,n);if(f==="pointerdown"&&(o=d?{object:d.object,instanceId:d.instanceId}:null),f==="click"){if(!l_(d,o)){o=null;return}o=null}!d||(p=(u=yn(d.object)).eventDispatcher)==null||p.call(u,f,{...d,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function o_(r,e,t){if(r.interactiveObjects.size===0||r.raycastableObjects.size===0)return null;const n=Xc(r,e,t,Array.from(r.raycastableObjects));return n.length===0||!r.interactiveObjects.has(n[0].object)?null:n[0]}function l_(r,e){return!r||!e?!1:r.object.uuid===e.object.uuid&&r.instanceId===e.instanceId}const c_=(r,e)=>{let t;const n=r.pointerOverCanvas.subscribe(c=>t=c);ct(n);let i;const s=r.camera.subscribe(c=>i=c);ct(s);let a;const o=r.pointer.subscribe(c=>a=c);return ct(o),{raycast:()=>{var d,u,p,g,v,m,h,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?Xc(e,a,i,Array.from(e.raycastableObjects)):[],f=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;f?e.lastIntersection?e.lastIntersection&&s_(e.lastIntersection,f)&&((m=(v=yn(e.lastIntersection.object)).eventDispatcher)==null||m.call(v,"pointerleave",e.lastIntersection),(_=(h=yn(f.object)).eventDispatcher)==null||_.call(h,"pointerenter",f)):(g=(p=yn(f.object)).eventDispatcher)==null||g.call(p,"pointerenter",f):e.lastIntersection&&((u=(d=yn(e.lastIntersection.object)).eventDispatcher)==null||u.call(d,"pointerleave",e.lastIntersection)),e.lastIntersection=f}}},As=typeof window!="undefined",u_=r=>{if(!As)return;let e;const t=()=>{r(),e=requestAnimationFrame(t)};t(),ct(()=>{!e||cancelAnimationFrame(e)})},f_=(r,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,s)=>s.order?!0:i,!1),n=r.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,s)=>{var a,o;return((a=i.order)!=null?a:0)>((o=s.order)!=null?o:0)?1:-1}).forEach(i=>i.fn(r,n)):e.frameHandlers.forEach(i=>i.fn(r,n))},h_=r=>{!r.debugFrameloop||(r.frame+=1,console.log(`frame: ${r.frame}${Object.keys(r.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(r.invalidations).length>0&&console.table(r.invalidations),r.invalidations={})},d_=(r,e,t,n)=>{let i=Ca(r.camera);const s=r.camera.subscribe(o=>i=o);ct(s);const{raycast:a}=c_(r,e);u_(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!i||!r.composer||!r.renderer||(f_(r,t),r.composer.passes.length>1?r.composer.render():r.renderer.render(r.scene,i),h_(t),t.frameInvalidated=!1,t.advance=!1))})},p_=()=>{const r=new rn(75,0,.1,1e3);return yn(r).threlteDefaultCamera=!0,r.position.z=5,r.lookAt(0,0,0),r},m_=r=>{const e=r.size.subscribe(t=>{yn(Ca(r.camera)).threlteDefaultCamera&&r.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),r.invalidate("Default camera: aspect ratio changed"),i})});ct(e)},g_=(r,e,t,n,i,s,a)=>{const o={audioListeners:new Map,addAudioListener:(h,_)=>{if(_=_!=null?_:"default",o.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}o.audioListeners.set(_,h)},removeAudioListener:h=>{if(h=h!=null?h:"default",!o.audioListeners.has(h)){console.warn(`No AudioListener with the id "${h}" found, aborting.`);return}o.audioListeners.delete(h)},getAudioListener:h=>{if(h=h!=null?h:"default",!o.audioListeners.has(h)){console.warn(`No AudioListener with the id "${h}" found, aborting.`);return}return o.audioListeners.get(h)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:hu([n,i],([h,_])=>h||_),pointer:Ye(new Qe),pointerOverCanvas:Ye(!1),clock:new Vc,camera:Ye(p_()),scene:new Sg,renderer:void 0,composer:void 0,invalidate:h=>{l.frameInvalidated=!0,l.debugFrameloop&&h&&(l.invalidations[h]=l.invalidations[h]?l.invalidations[h]+1:1)},advance:()=>{l.advance=!0}},f={flat:Ye(e),linear:Ye(r),dpr:Ye(t),setCamera:h=>{c.camera.set(h),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof jc&&(_.camera=h)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Wc,lastIntersection:null,addRaycastableObject:h=>{f.raycastableObjects.add(h)},removeRaycastableObject:h=>{f.raycastableObjects.delete(h)},addInteractiveObject:h=>{f.interactiveObjects.add(h)},removeInteractiveObject:h=>{f.interactiveObjects.delete(h)},addPass:h=>{!c.composer||(c.composer.addPass(h),c.invalidate("Canvas: adding pass"))},removePass:h=>{!c.composer||(c.composer.removePass(h),c.invalidate("Canvas: removing pass"))}},d={dispose:async(h=!1)=>{await Pr(),!(!d.shouldDispose&&!h)&&(d.disposableObjects.forEach((_,M)=>{var x;(_===0||h)&&((x=M==null?void 0:M.dispose)==null||x.call(M),d.disposableObjects.delete(M))}),d.shouldDispose=!1)},collectDisposableObjects:(h,_)=>{const M=_!=null?_:[];return h&&((h==null?void 0:h.dispose)&&typeof h.dispose=="function"&&h.type!=="Scene"&&M.push(h),Object.entries(h).forEach(([x,y])=>{if(x==="parent"||x==="children"||typeof y!="object")return;const E=y;E!=null&&E.dispose&&d.collectDisposableObjects(E,M)})),M},addDisposableObjects:h=>{h.forEach(_=>{const M=d.disposableObjects.get(_);M?d.disposableObjects.set(_,M+1):d.disposableObjects.set(_,1)})},removeDisposableObjects:h=>{h.length!==0&&(h.forEach(_=>{const M=d.disposableObjects.get(_);M&&M>0&&d.disposableObjects.set(_,M-1)}),d.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return pn("threlte",c),pn("threlte-root",f),pn("threlte-render-context",l),pn("threlte-audio-context",o),pn("threlte-disposal-context",d),{ctx:c,rootCtx:f,renderCtx:l,audioCtx:o,disposalCtx:d,getCtx:()=>c,getRootCtx:()=>f,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>d}};function Cs(r,e){const t=Ye(r);let n=r;const i=t.subscribe(o=>n=o);return ct(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Rn=()=>Tn("threlte");function __(r){let e;const t=r[8].default,n=An(t,r,r[7],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&128)&&Pn(n,t,i,i[7],e?Cn(t,i[7],s,null):Ln(i[7]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}const v_=()=>({onChildMount:Tn("threlte-hierarchical-object-on-mount"),onChildDestroy:Tn("threlte-hierarchical-object-on-destroy")}),qc=()=>Tn("threlte-hierarchical-parent-context");function x_(r,e,t){var h;let n,{$$slots:i={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{o.push(_),t(1,o),l==null||l(_)};let{onChildDestroy:f=void 0}=e;const d=_=>{const M=o.findIndex(x=>x.uuid===_.uuid);M!==-1&&o.splice(M,1),t(1,o),f==null||f(_)},{invalidate:u}=Rn(),p=qc();Ae(r,p,_=>t(6,n=_));let{parent:g=n}=e;const v=v_();a&&((h=v.onChildMount)==null||h.call(v,a),u("HierarchicalObject: object added"));const m=Cs(a,(_,M)=>{var x,y;M&&((x=v.onChildDestroy)==null||x.call(v,M),u("HierarchicalObject: object added")),_&&((y=v.onChildMount)==null||y.call(v,_),u("HierarchicalObject: object removed"))});return ct(()=>{var _;a&&((_=v.onChildDestroy)==null||_.call(v,a),u("HierarchicalObject: object removed"))}),pn("threlte-hierarchical-object-on-mount",c),pn("threlte-hierarchical-object-on-destroy",d),pn("threlte-hierarchical-parent-context",m),r.$$set=_=>{"object"in _&&t(3,a=_.object),"children"in _&&t(1,o=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,f=_.onChildDestroy),"parent"in _&&t(2,g=_.parent),"$$scope"in _&&t(7,s=_.$$scope)},r.$$.update=()=>{r.$$.dirty&64&&t(2,g=n),r.$$.dirty&8&&m.set(a)},[p,o,g,a,l,f,n,s,i]}class M_ extends gt{constructor(e){super(),mt(this,e,x_,__,dt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function b_(r){let e;const t=r[1].default,n=An(t,r,r[4],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16)&&Pn(n,t,i,i[4],e?Cn(t,i[4],s,null):Ln(i[4]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function S_(r){let e,t;return e=new M_({props:{object:r[0],onChildMount:r[2],onChildDestroy:r[3],$$slots:{default:[b_]},$$scope:{ctx:r}}}),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.object=n[0]),i&1&&(s.onChildMount=n[2]),i&1&&(s.onChildDestroy=n[3]),i&16&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function y_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return r.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[s,n,a,o,i]}class za extends gt{constructor(e){super(),mt(this,e,y_,S_,dt,{object:0})}}const w_=()=>{const r=Ye({width:0,height:0});let e={width:0,height:0};const t=r.subscribe(a=>e=a);ct(t);let n;const i=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&r.set({width:o,height:l})},s=a=>{n=a,i(),window.addEventListener("resize",i)};return As?(ct(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:s,parentSize:r}):{parentSize:r,parentSizeAction:s}};function Fl(r){let e,t;return e=new za({props:{object:r[0].scene,$$slots:{default:[E_]},$$scope:{ctx:r}}}),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},p(n,i){const s={};i[1]&4&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function E_(r){let e;const t=r[29].default,n=An(t,r,r[33],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&4)&&Pn(n,t,i,i[33],e?Cn(t,i[33],s,null):Ln(i[33]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function T_(r){let e,t,n,i,s=r[2]&&Fl(r);return{c(){e=te("canvas"),s&&s.c(),Y(e,"class","svelte-o3oskp")},m(a,o){We(a,e,o),s&&s.m(e,null),r[30](e),t=!0,n||(i=[au(r[3].call(null,e)),Ie(e,"click",r[9]),Ie(e,"contextmenu",r[10]),Ie(e,"pointerup",r[13]),Ie(e,"pointerdown",r[11]),Ie(e,"pointermove",r[12]),Ie(e,"pointerenter",r[31]),Ie(e,"pointerleave",r[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&be(s,1)):(s=Fl(a),s.c(),be(s,1),s.m(e,null)):s&&(vi(),Ce(s,1,1,()=>{s=null}),xi())},i(a){t||(be(s),t=!0)},o(a){Ce(s),t=!1},d(a){a&&He(e),s&&s.d(),r[30](null),n=!1,sn(i)}}}const zl=new Set;function A_(r,e,t){let n,i,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=As?window.devicePixelRatio:1}=e,{flat:f=!1}=e,{linear:d=!1}=e,{frameloop:u="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:g=!0}=e,{shadowMapType:v=hc}=e,{size:m=void 0}=e,{rendererParameters:h=void 0}=e,_,M=!1;const x=Ye(m),{parentSize:y,parentSizeAction:E}=w_(),P=g_(d,f,c,x,y,p,u),{getCtx:T,renderCtx:S,disposalCtx:b}=P,{ctx:F,rootCtx:k,audioCtx:L}=P;m_(F),zl.add(F.invalidate),ct(()=>{zl.delete(F.invalidate)});const{size:O,scene:B}=F;Ae(r,O,N=>t(26,i=N));const{flat:K,linear:R,dpr:H}=k;Ae(r,K,N=>t(27,s=N)),Ae(r,R,N=>t(28,a=N)),Ae(r,H,N=>t(25,n=N)),pn("threlte-parent",Ye(B)),rr(()=>{!_||(i_(F,_,h),Ul(F,a,s),Nl(F,i,n),Ol(F,g,v),t(2,M=!0))}),d_(F,k,S,b);const{onClick:Z,onContextMenu:Q,onPointerDown:_e,onPointerMove:se,onPointerUp:W}=a_(F,k,S);ct(()=>{b.dispose(!0)});function $(N){Hn[N?"unshift":"push"](()=>{_=N,t(1,_)})}const ee=()=>T().pointerOverCanvas.set(!0),ce=()=>T().pointerOverCanvas.set(!1);return r.$$set=N=>{"dpr"in N&&t(14,c=N.dpr),"flat"in N&&t(15,f=N.flat),"linear"in N&&t(16,d=N.linear),"frameloop"in N&&t(17,u=N.frameloop),"debugFrameloop"in N&&t(18,p=N.debugFrameloop),"shadows"in N&&t(19,g=N.shadows),"shadowMapType"in N&&t(20,v=N.shadowMapType),"size"in N&&t(21,m=N.size),"rendererParameters"in N&&t(22,h=N.rendererParameters),"$$scope"in N&&t(33,l=N.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2097152&&x.set(m),r.$$.dirty[0]&65536&&Ue(R,a=d,a),r.$$.dirty[0]&32768&&Ue(K,s=f,s),r.$$.dirty[0]&16384&&Ue(H,n=c,n),r.$$.dirty[0]&402653184&&Ul(T(),a,s),r.$$.dirty[0]&100663296&&Nl(T(),i,n),r.$$.dirty[0]&1572864&&Ol(T(),g,v)},[F,_,M,E,T,O,K,R,H,Z,Q,_e,se,W,c,f,d,u,p,g,v,m,h,k,L,n,i,s,a,o,$,ee,ce,l]}class C_ extends gt{constructor(e){super(),mt(this,e,A_,T_,dt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Yc=()=>Tn("threlte-root"),P_=()=>Tn("threlte-disposal-context");function L_(r){let e;const t=r[9].default,n=An(t,r,r[8],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&256)&&Pn(n,t,i,i[8],e?Cn(t,i[8],s,null):Ln(i[8]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}const kl="threlte-disposable-object-context";function R_(r,e,t){var m;let n,i,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=P_();let{object:f=void 0}=e,d=f,{dispose:u=void 0}=e;const p=Tn(kl);Ae(r,p,h=>t(7,i=h));const g=Ye((m=u!=null?u:i)!=null?m:!0);Ae(r,g,h=>t(6,n=h)),pn(kl,g);let v=n?o(f):[];return l(v),ct(()=>{c(v)}),r.$$set=h=>{"object"in h&&t(2,f=h.object),"dispose"in h&&t(3,u=h.dispose),"$$scope"in h&&t(8,a=h.$$scope)},r.$$.update=()=>{var h;r.$$.dirty&136&&g.set((h=u!=null?u:i)!=null?h:!0),r.$$.dirty&116&&f!==d&&(c(v),t(5,v=n?o(f):[]),l(v),t(4,d=f))},[p,g,f,u,d,v,n,i,a,s]}class ka extends gt{constructor(e){super(),mt(this,e,R_,L_,dt,{object:2,dispose:3})}}function D_(r,e,t){let n,i,{object:s}=e;const a=Cs(s);Ae(r,a,c=>t(4,i=c));const o=Tn("threlte-layers");Ae(r,o,c=>t(3,n=c));const{invalidate:l}=Rn();return r.$$set=c=>{"object"in c&&t(2,s=c.object)},r.$$.update=()=>{if(r.$$.dirty&4&&a.set(s),r.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const f=c;n.includes(f)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[a,o,s,n,i]}class Zc extends gt{constructor(e){super(),mt(this,e,D_,null,dt,{object:2})}}const Qc=(r,e)=>{var o;if(!As)return{start:()=>{},stop:()=>{},started:lc(!1)};const t=Tn("threlte-render-context"),n={fn:r,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=Ye(!1),s=()=>{t.frameHandlers.delete(n),i.set(!1)},a=()=>{t.frameHandlers.add(n),i.set(!0)};return((o=e==null?void 0:e.autostart)==null||o)&&a(),ct(()=>{s()}),{start:a,stop:s,started:{subscribe:i.subscribe}}},Kc=()=>{const r=Ye(!1);return(async()=>{await Pr(),r.set(!0)})(),r};function I_(r,e,t){let n,i,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const f=new D,d=_s(),{invalidate:u}=Rn(),p=Kc();Ae(r,p,M=>t(8,i=M));const g=async()=>{i||await Pr(),d("transform")},v=async()=>{u("TransformableObject: transformed"),await g()};yn(s).onTransform=v;const{start:m,stop:h}=Qc(async()=>{c&&!l&&c instanceof Tt&&(c.getWorldPosition(f),s.lookAt(f),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=Cs(s);return Ae(r,_,M=>t(7,n=M)),r.$$set=M=>{"object"in M&&t(2,s=M.object),"position"in M&&t(3,a=M.position),"scale"in M&&t(4,o=M.scale),"rotation"in M&&t(5,l=M.rotation),"lookAt"in M&&t(6,c=M.lookAt)},r.$$.update=()=>{var M,x,y,E,P,T,S,b,F,k,L,O,B;r.$$.dirty&4&&_.set(s),r.$$.dirty&232&&(a&&(n.position.set((M=a.x)!=null?M:0,(x=a.y)!=null?x:0,(y=a.z)!=null?y:0),v()),c&&!l&&(c instanceof Tt?m():(h(),n.lookAt((E=c.x)!=null?E:0,(P=c.y)!=null?P:0,(T=c.z)!=null?T:0),v())),c||h()),r.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set((S=o.x)!=null?S:1,(b=o.y)!=null?b:1,(F=o.z)!=null?F:1),v()),r.$$.dirty&160&&l&&(n.rotation.set((k=l.x)!=null?k:0,(L=l.y)!=null?L:0,(O=l.z)!=null?O:0,(B=l.order)!=null?B:"XYZ"),v())},[p,_,s,a,o,l,c,n]}class U_ extends gt{constructor(e){super(),mt(this,e,I_,null,dt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function N_(r,e,t){let n,i,s,{object:a}=e,{viewportAware:o=!1}=e;const l=_s(),{camera:c,invalidate:f}=Rn();Ae(r,c,E=>t(8,s=E));const d=new Ia,u=new _t,p=E=>E.type==="Mesh",g=new D,v=()=>s?(u.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),d.setFromProjectionMatrix(u),p(a)?d.intersectsObject(a):(a.getWorldPosition(g),d.containsPoint(g))):!0,m=Kc();Ae(r,m,E=>t(7,i=E));let{inViewport:h=v()}=e;const _=async E=>{E?(i||await Pr(),l("viewportenter",a)):(i||await Pr(),l("viewportleave",a))},{start:M,stop:x,started:y}=Qc(()=>{const E=v();h===void 0?(t(3,h=v()),_(h)):E!==h&&(_(E),t(3,h=E))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return Ae(r,y,E=>t(6,n=E)),f("ViewportAwareObject"),r.$$set=E=>{"object"in E&&t(4,a=E.object),"viewportAware"in E&&t(5,o=E.viewportAware),"inViewport"in E&&t(3,h=E.inViewport)},r.$$.update=()=>{r.$$.dirty&96&&(o&&!n?M():!o&&n&&x())},[c,m,y,h,a,o,n]}class O_ extends gt{constructor(e){super(),mt(this,e,N_,null,dt,{object:4,viewportAware:5,inViewport:3})}}function F_(r){let e;const t=r[14].default,n=An(t,r,r[18],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&262144)&&Pn(n,t,i,i[18],e?Cn(t,i[18],s,null):Ln(i[18]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function z_(r){let e,t;return e=new za({props:{object:r[1],$$slots:{default:[F_]},$$scope:{ctx:r}}}),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.object=n[1]),i&262144&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function k_(r){let e,t,n,i,s,a,o,l,c;e=new Zc({props:{object:r[1]}}),n=new U_({props:{object:r[1],position:r[2],rotation:r[4],scale:r[3],lookAt:r[5]}}),s=new ka({props:{object:r[1],dispose:r[7],$$slots:{default:[z_]},$$scope:{ctx:r}}});function f(u){r[15](u)}let d={object:r[1],viewportAware:r[6]};return r[0]!==void 0&&(d.inViewport=r[0]),o=new O_({props:d}),Hn.push(()=>xs(o,"inViewport",f)),o.$on("viewportenter",r[16]),o.$on("viewportleave",r[17]),{c(){at(e.$$.fragment),t=he(),at(n.$$.fragment),i=he(),at(s.$$.fragment),a=he(),at(o.$$.fragment)},m(u,p){nt(e,u,p),We(u,t,p),nt(n,u,p),We(u,i,p),nt(s,u,p),We(u,a,p),nt(o,u,p),c=!0},p(u,[p]){const g={};p&2&&(g.object=u[1]),e.$set(g);const v={};p&2&&(v.object=u[1]),p&4&&(v.position=u[2]),p&16&&(v.rotation=u[4]),p&8&&(v.scale=u[3]),p&32&&(v.lookAt=u[5]),n.$set(v);const m={};p&2&&(m.object=u[1]),p&128&&(m.dispose=u[7]),p&262146&&(m.$$scope={dirty:p,ctx:u}),s.$set(m);const h={};p&2&&(h.object=u[1]),p&64&&(h.viewportAware=u[6]),!l&&p&1&&(l=!0,h.inViewport=u[0],vs(()=>l=!1)),o.$set(h)},i(u){c||(be(e.$$.fragment,u),be(n.$$.fragment,u),be(s.$$.fragment,u),be(o.$$.fragment,u),c=!0)},o(u){Ce(e.$$.fragment,u),Ce(n.$$.fragment,u),Ce(s.$$.fragment,u),Ce(o.$$.fragment,u),c=!1},d(u){it(e,u),u&&He(t),it(n,u),u&&He(i),it(s,u),u&&He(a),it(o,u)}}}function B_(r,e,t){let{$$slots:n={},$$scope:i}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:v=void 0}=e,{visible:m=void 0}=e,{dispose:h=void 0}=e,{userData:_=void 0}=e;const{invalidate:M}=Rn(),x=()=>s;function y(T){d=T,t(0,d)}function E(T){Ki.call(this,r,T)}function P(T){Ki.call(this,r,T)}return r.$$set=T=>{"object"in T&&t(1,s=T.object),"position"in T&&t(2,a=T.position),"scale"in T&&t(3,o=T.scale),"rotation"in T&&t(4,l=T.rotation),"lookAt"in T&&t(5,c=T.lookAt),"viewportAware"in T&&t(6,f=T.viewportAware),"inViewport"in T&&t(0,d=T.inViewport),"castShadow"in T&&t(8,u=T.castShadow),"receiveShadow"in T&&t(9,p=T.receiveShadow),"frustumCulled"in T&&t(10,g=T.frustumCulled),"renderOrder"in T&&t(11,v=T.renderOrder),"visible"in T&&t(12,m=T.visible),"dispose"in T&&t(7,h=T.dispose),"userData"in T&&t(13,_=T.userData),"$$scope"in T&&t(18,i=T.$$scope)},r.$$.update=()=>{r.$$.dirty&16128&&(m!==void 0&&(x().visible=m),u!==void 0&&(x().castShadow=u),p!==void 0&&(x().receiveShadow=p),g!==void 0&&(x().frustumCulled=g),v!==void 0&&(x().renderOrder=v),_!==void 0&&(x().userData={...x().userData,..._}),M("Object3DInstance: props changed"))},[d,s,a,o,l,c,f,h,u,p,g,v,m,_,n,y,E,P,i]}class G_ extends gt{constructor(e){super(),mt(this,e,B_,k_,dt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function H_(r){let e;const t=r[17].default,n=An(t,r,r[21],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&2097152)&&Pn(n,t,i,i[21],e?Cn(t,i[21],s,null):Ln(i[21]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function V_(r){let e,t,n;function i(a){r[18](a)}let s={object:r[1],lookAt:r[5],castShadow:r[7],receiveShadow:r[8],frustumCulled:r[9],renderOrder:r[10],position:r[2],scale:r[3],rotation:r[4],viewportAware:r[6],visible:r[11],userData:r[12],dispose:r[13],$$slots:{default:[H_]},$$scope:{ctx:r}};return r[0]!==void 0&&(s.inViewport=r[0]),e=new G_({props:s}),Hn.push(()=>xs(e,"inViewport",i)),e.$on("viewportenter",r[19]),e.$on("viewportleave",r[20]),{c(){at(e.$$.fragment)},m(a,o){nt(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],vs(()=>t=!1)),e.$set(l)},i(a){n||(be(e.$$.fragment,a),n=!0)},o(a){Ce(e.$$.fragment,a),n=!1},d(a){it(e,a)}}}function W_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:u=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:m=void 0}=e,{visible:h=void 0}=e,{userData:_=void 0}=e,{dispose:M=void 0}=e,{useCamera:x=!1}=e;const y=Cs(a);Ae(r,y,b=>t(16,n=b));const{setCamera:E}=Yc();function P(b){u=b,t(0,u)}function T(b){Ki.call(this,r,b)}function S(b){Ki.call(this,r,b)}return r.$$set=b=>{"camera"in b&&t(1,a=b.camera),"position"in b&&t(2,o=b.position),"scale"in b&&t(3,l=b.scale),"rotation"in b&&t(4,c=b.rotation),"lookAt"in b&&t(5,f=b.lookAt),"viewportAware"in b&&t(6,d=b.viewportAware),"inViewport"in b&&t(0,u=b.inViewport),"castShadow"in b&&t(7,p=b.castShadow),"receiveShadow"in b&&t(8,g=b.receiveShadow),"frustumCulled"in b&&t(9,v=b.frustumCulled),"renderOrder"in b&&t(10,m=b.renderOrder),"visible"in b&&t(11,h=b.visible),"userData"in b&&t(12,_=b.userData),"dispose"in b&&t(13,M=b.dispose),"useCamera"in b&&t(15,x=b.useCamera),"$$scope"in b&&t(21,s=b.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&y.set(a),r.$$.dirty&98304&&x&&E(n)},[u,a,o,l,c,f,d,p,g,v,m,h,_,M,y,x,n,i,P,T,S,s]}class j_ extends gt{constructor(e){super(),mt(this,e,W_,V_,dt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function X_(r){let e;const t=r[20].default,n=An(t,r,r[24],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&16777216)&&Pn(n,t,i,i[24],e?Cn(t,i[24],s,null):Ln(i[24]),null)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function q_(r){let e,t,n;function i(a){r[21](a)}let s={camera:r[0],position:r[2],scale:r[3],rotation:r[4],castShadow:r[6],receiveShadow:r[7],frustumCulled:r[8],renderOrder:r[9],visible:r[10],userData:r[11],dispose:r[12],viewportAware:r[13],lookAt:r[5],useCamera:r[14],$$slots:{default:[X_]},$$scope:{ctx:r}};return r[1]!==void 0&&(s.inViewport=r[1]),e=new j_({props:s}),Hn.push(()=>xs(e,"inViewport",i)),e.$on("viewportenter",r[22]),e.$on("viewportleave",r[23]),{c(){at(e.$$.fragment)},m(a,o){nt(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&8192&&(l.viewportAware=a[13]),o&32&&(l.lookAt=a[5]),o&16384&&(l.useCamera=a[14]),o&16777216&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],vs(()=>t=!1)),e.$set(l)},i(a){n||(be(e.$$.fragment,a),n=!0)},o(a){Ce(e.$$.fragment,a),n=!1},d(a){it(e,a)}}}function Y_(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:f=void 0}=e,{receiveShadow:d=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:p=void 0}=e,{visible:g=void 0}=e,{userData:v=void 0}=e,{dispose:m=void 0}=e,{viewportAware:h=!1}=e,{inViewport:_=!1}=e,{useCamera:M=!0}=e,{near:x=void 0}=e,{far:y=void 0}=e,{fov:E=void 0}=e;const{size:P,invalidate:T}=Rn();Ae(r,P,L=>t(19,n=L));const S=new rn(E,n.width/n.height,x,y);function b(L){_=L,t(1,_)}function F(L){Ki.call(this,r,L)}function k(L){Ki.call(this,r,L)}return r.$$set=L=>{"position"in L&&t(2,a=L.position),"scale"in L&&t(3,o=L.scale),"rotation"in L&&t(4,l=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"castShadow"in L&&t(6,f=L.castShadow),"receiveShadow"in L&&t(7,d=L.receiveShadow),"frustumCulled"in L&&t(8,u=L.frustumCulled),"renderOrder"in L&&t(9,p=L.renderOrder),"visible"in L&&t(10,g=L.visible),"userData"in L&&t(11,v=L.userData),"dispose"in L&&t(12,m=L.dispose),"viewportAware"in L&&t(13,h=L.viewportAware),"inViewport"in L&&t(1,_=L.inViewport),"useCamera"in L&&t(14,M=L.useCamera),"near"in L&&t(16,x=L.near),"far"in L&&t(17,y=L.far),"fov"in L&&t(18,E=L.fov),"$$scope"in L&&t(24,s=L.$$scope)},r.$$.update=()=>{r.$$.dirty&524289&&(t(0,S.aspect=n.width/n.height,S),S.updateProjectionMatrix(),T("PerspectiveCamera: aspect changed")),r.$$.dirty&458753&&(x!==void 0&&t(0,S.near=x,S),y!==void 0&&t(0,S.far=y,S),E!==void 0&&t(0,S.fov=E,S),S.updateProjectionMatrix(),T("PerspectiveCamera: props changed"))},[S,_,a,o,l,c,f,d,u,p,g,v,m,h,M,P,x,y,E,n,i,b,F,k,s]}class Z_ extends gt{constructor(e){super(),mt(this,e,Y_,q_,dt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Bl=[],Q_=(r,e)=>{const t=Bl.find(i=>i instanceof r);if(t)return t;const n=e();return Bl.push(n),n},li=new Wc,Zt=new D,Zn=new D,ft=new Vt,Gl={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},ca={type:"change"},Hl={type:"mouseDown"},Vl={type:"mouseUp",mode:null},Wl={type:"objectChange"};class K_ extends Tt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new i0;this._gizmo=n,this.add(n);const i=new r0;this._plane=i,this.add(i);const s=this;function a(_,M){let x=M;Object.defineProperty(s,_,{get:function(){return x!==void 0?x:M},set:function(y){x!==y&&(x=y,i[_]=y,n[_]=y,s.dispatchEvent({type:_+"-changed",value:y}),s.dispatchEvent(ca))}}),s[_]=M,i[_]=M,n[_]=M}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new D,l=new D,c=new Vt,f=new Vt,d=new D,u=new Vt,p=new D,g=new D,v=new D,m=0,h=new D;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",f),a("cameraPosition",d),a("cameraQuaternion",u),a("pointStart",p),a("pointEnd",g),a("rotationAxis",v),a("rotationAngle",m),a("eye",h),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Vt,this._parentQuaternionInv=new Vt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Vt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Vt,this._scaleStart=new D,this._getPointer=J_.bind(this),this._onPointerDown=e0.bind(this),this._onPointerHover=$_.bind(this),this._onPointerMove=t0.bind(this),this._onPointerUp=n0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;li.setFromCamera(e,this.camera);const t=ua(this._gizmo.picker[this.mode],li);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){li.setFromCamera(e,this.camera);const t=ua(this._plane,li,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Hl.mode=this.mode,this.dispatchEvent(Hl)}}pointerMove(e){const t=this.axis,n=this.mode,i=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),i===void 0||t===null||this.dragging===!1||e.button!==-1)return;li.setFromCamera(e,this.camera);const a=ua(this._plane,li,!0);if(!!a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(i.position.applyQuaternion(ft.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),s==="world"&&(i.parent&&i.position.add(Zt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Zt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),Zn.set(o,o,o)}else Zt.copy(this.pointStart),Zn.copy(this.pointEnd),Zt.applyQuaternion(this._worldQuaternionInv),Zn.applyQuaternion(this._worldQuaternionInv),Zn.divide(Zt),t.search("X")===-1&&(Zn.x=1),t.search("Y")===-1&&(Zn.y=1),t.search("Z")===-1&&(Zn.z=1);i.scale.copy(this._scaleStart).multiply(Zn),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Zt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Zt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Gl[t]),Zt.copy(Gl[t]),s==="local"&&Zt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(Zt.cross(this.eye).normalize())*o),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(ft.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ca),this.dispatchEvent(Wl)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Vl.mode=this.mode,this.dispatchEvent(Vl)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ca),this.dispatchEvent(Wl),this.pointStart.copy(this.pointEnd))}getRaycaster(){return li}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function J_(r){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:r.button};{const e=this.domElement.getBoundingClientRect();return{x:(r.clientX-e.left)/e.width*2-1,y:-(r.clientY-e.top)/e.height*2+1,button:r.button}}}function $_(r){if(!!this.enabled)switch(r.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(r));break}}function e0(r){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(r)),this.pointerDown(this._getPointer(r)))}function t0(r){!this.enabled||this.pointerMove(this._getPointer(r))}function n0(r){!this.enabled||(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(r)))}function ua(r,e,t){const n=e.intersectObject(r,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}const ss=new bi,tt=new D(0,1,0),jl=new D(0,0,0),Xl=new _t,as=new Vt,hs=new Vt,vn=new D,ql=new _t,Mr=new D(1,0,0),fi=new D(0,1,0),br=new D(0,0,1),os=new D,mr=new D,gr=new D;class i0 extends Tt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ys({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Bc({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const i=t.clone();i.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const f=e.clone();f.color.setHex(255),f.opacity=.5;const d=e.clone();d.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const v=new Ft(0,.04,.1,12);v.translate(0,.05,0);const m=new Mt(.08,.08,.08);m.translate(0,.04,0);const h=new Xt;h.setAttribute("position",new ht([0,0,0,1,0,0],3));const _=new Ft(.0075,.0075,.5,3);_.translate(0,.25,0);function M(B,K){const R=new di(B,.0075,3,64,K*Math.PI*2);return R.rotateY(Math.PI/2),R.rotateX(Math.PI/2),R}function x(){const B=new Xt;return B.setAttribute("position",new ht([0,0,0,1,1,1],3)),B}const y={X:[[new pe(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new pe(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new pe(_,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new pe(v,a),[0,.5,0]],[new pe(v,a),[0,-.5,0],[Math.PI,0,0]],[new pe(_,a)]],Z:[[new pe(v,o),[0,0,.5],[Math.PI/2,0,0]],[new pe(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new pe(_,o),null,[Math.PI/2,0,0]]],XYZ:[[new pe(new Xi(.1,0),d.clone()),[0,0,0]]],XY:[[new pe(new Mt(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new pe(new Mt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new pe(new Ft(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Ft(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Ft(.2,0,.6,4),n),[0,.3,0]],[new pe(new Ft(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Ft(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Ft(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Xi(.2,0),n)]],XY:[[new pe(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new pe(new Xi(.01,2),i),null,null,null,"helper"]],END:[[new pe(new Xi(.01,2),i),null,null,null,"helper"]],DELTA:[[new Yn(x(),i),null,null,null,"helper"]],X:[[new Yn(h,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yn(h,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yn(h,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},T={XYZE:[[new pe(M(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new pe(M(.5,.5),s)]],Y:[[new pe(M(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new pe(M(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new pe(M(.75,1),u),null,[0,Math.PI/2,0]]]},S={AXIS:[[new Yn(h,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},b={XYZE:[[new pe(new Oa(.25,10,8),n)]],X:[[new pe(new di(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new pe(new di(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new pe(new di(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new pe(new di(.75,.1,2,24),n)]]},F={X:[[new pe(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new pe(_,s),[0,0,0],[0,0,-Math.PI/2]],[new pe(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new pe(m,a),[0,.5,0]],[new pe(_,a)],[new pe(m,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new pe(m,o),[0,0,.5],[Math.PI/2,0,0]],[new pe(_,o),[0,0,0],[Math.PI/2,0,0]],[new pe(m,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new pe(new Mt(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new pe(new Mt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Mt(.1,.1,.1),d.clone())]]},k={X:[[new pe(new Ft(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new pe(new Ft(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new pe(new Ft(.2,0,.6,4),n),[0,.3,0]],[new pe(new Ft(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new pe(new Ft(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new pe(new Ft(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new pe(new Mt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new pe(new Mt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new pe(new Mt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new pe(new Mt(.2,.2,.2),n),[0,0,0]]]},L={X:[[new Yn(h,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Yn(h,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Yn(h,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(B){const K=new Tt;for(const R in B)for(let H=B[R].length;H--;){const Z=B[R][H][0].clone(),Q=B[R][H][1],_e=B[R][H][2],se=B[R][H][3],W=B[R][H][4];Z.name=R,Z.tag=W,Q&&Z.position.set(Q[0],Q[1],Q[2]),_e&&Z.rotation.set(_e[0],_e[1],_e[2]),se&&Z.scale.set(se[0],se[1],se[2]),Z.updateMatrix();const $=Z.geometry.clone();$.applyMatrix4(Z.matrix),Z.geometry=$,Z.renderOrder=1/0,Z.position.set(0,0,0),Z.rotation.set(0,0,0),Z.scale.set(1,1,1),K.add(Z)}return K}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(y)),this.add(this.gizmo.rotate=O(T)),this.add(this.gizmo.scale=O(F)),this.add(this.picker.translate=O(E)),this.add(this.picker.rotate=O(b)),this.add(this.picker.scale=O(k)),this.add(this.helper.translate=O(P)),this.add(this.helper.rotate=O(S)),this.add(this.helper.scale=O(L)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:hs;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let s=0;s<i.length;s++){const a=i[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(ft.setFromEuler(ss.set(0,0,0)),a.quaternion.copy(n).multiply(ft),Math.abs(tt.copy(Mr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(ft.setFromEuler(ss.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(ft),Math.abs(tt.copy(fi).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(ft.setFromEuler(ss.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(ft),Math.abs(tt.copy(br).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(ft.setFromEuler(ss.set(0,Math.PI/2,0)),tt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Xl.lookAt(jl,tt,fi)),a.quaternion.multiply(ft),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Zt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Zt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Zt),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(tt.copy(Mr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(tt.copy(fi).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(tt.copy(br).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(tt.copy(br).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(tt.copy(Mr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(tt.copy(fi).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(as.copy(n),tt.copy(this.eye).applyQuaternion(ft.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Xl.lookAt(this.eye,jl,fi)),a.name==="X"&&(ft.setFromAxisAngle(Mr,Math.atan2(-tt.y,tt.z)),ft.multiplyQuaternions(as,ft),a.quaternion.copy(ft)),a.name==="Y"&&(ft.setFromAxisAngle(fi,Math.atan2(tt.x,tt.z)),ft.multiplyQuaternions(as,ft),a.quaternion.copy(ft)),a.name==="Z"&&(ft.setFromAxisAngle(br,Math.atan2(tt.y,tt.x)),ft.multiplyQuaternions(as,ft),a.quaternion.copy(ft))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class r0 extends pe{constructor(){super(new ws(1e5,1e5,2,2),new ys({visible:!1,wireframe:!0,side:Sn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),os.copy(Mr).applyQuaternion(t==="local"?this.worldQuaternion:hs),mr.copy(fi).applyQuaternion(t==="local"?this.worldQuaternion:hs),gr.copy(br).applyQuaternion(t==="local"?this.worldQuaternion:hs),tt.copy(mr),this.mode){case"translate":case"scale":switch(this.axis){case"X":tt.copy(this.eye).cross(os),vn.copy(os).cross(tt);break;case"Y":tt.copy(this.eye).cross(mr),vn.copy(mr).cross(tt);break;case"Z":tt.copy(this.eye).cross(gr),vn.copy(gr).cross(tt);break;case"XY":vn.copy(gr);break;case"YZ":vn.copy(os);break;case"XZ":tt.copy(gr),vn.copy(mr);break;case"XYZ":case"E":vn.set(0,0,0);break}break;case"rotate":default:vn.set(0,0,0)}vn.length()===0?this.quaternion.copy(this.cameraQuaternion):(ql.lookAt(Zt.set(0,0,0),vn,tt),this.quaternion.setFromRotationMatrix(ql)),super.updateMatrixWorld(e)}}function s0(r){let e,t,n,i;return e=new ka({props:{dispose:r[0],object:r[1]}}),n=new Zc({props:{object:r[1]}}),{c(){at(e.$$.fragment),t=he(),at(n.$$.fragment)},m(s,a){nt(e,s,a),We(s,t,a),nt(n,s,a),i=!0},p(s,[a]){const o={};a&1&&(o.dispose=s[0]),a&2&&(o.object=s[1]),e.$set(o);const l={};a&2&&(l.object=s[1]),n.$set(l)},i(s){i||(be(e.$$.fragment,s),be(n.$$.fragment,s),i=!0)},o(s){Ce(e.$$.fragment,s),Ce(n.$$.fragment,s),i=!1},d(s){it(e,s),s&&He(t),it(n,s)}}}function a0(r,e,t){let n,i,{autoPauseOrbitControls:s=!0}=e,{mode:a=void 0}=e,{axis:o=null}=e,{dragging:l=!1}=e,{enabled:c=void 0}=e,{translationSnap:f=void 0}=e,{scaleSnap:d=void 0}=e,{rotationSnap:u=void 0}=e,{showX:p=void 0}=e,{showY:g=void 0}=e,{showZ:v=void 0}=e,{size:m=void 0}=e,{space:h=void 0}=e,{dispose:_=void 0}=e;const{camera:M,renderer:x,invalidate:y,scene:E}=Rn();Ae(r,M,R=>t(20,i=R));const P=qc();if(Ae(r,P,R=>t(19,n=R)),!n)throw new Error("TransformControls: parent not defined. Is this component a child of <Canvas>?");const T=_s(),S=()=>{if(!!i)return yn(i).orbitControls};let b;const F=()=>{if(b!==void 0){const R=S();R&&(R.enabled=b),b=void 0}};ct(F);const k={change:R=>{var H,Z;n&&((Z=(H=yn(n)).onTransform)==null||Z.call(H)),y("TransformControls: change event"),T("change",R)},"camera-changed":R=>T("camera-changed",R),"object-changed":R=>T("object-changed",R),"enabled-changed":R=>T("enabled-changed",R),"axis-changed":R=>{t(4,o=R.value),T("axis-changed",R)},"mode-changed":R=>T("mode-changed",R),"translationSnap-changed":R=>T("translationSnap-changed",R),"rotationSnap-changed":R=>T("rotationSnap-changed",R),"scaleSnap-changed":R=>T("scaleSnap-changed",R),"space-changed":R=>T("space-changed",R),"size-changed":R=>T("size-changed",R),"dragging-changed":R=>{t(5,l=R.value);e:if(s){const H=S();if(!H)break e;const Z=!R.value;if(H.enabled===Z)break e;R.value&&(b=H.enabled),H.enabled=Z}T("dragging-changed",R)},"showX-changed":R=>T("showX-changed",R),"showY-changed":R=>T("showY-changed",R),"showZ-changed":R=>T("showZ-changed",R),"worldPosition-changed":R=>T("worldPosition-changed",R),"worldPositionStart-changed":R=>T("worldPositionStart-changed",R),"worldQuaternion-changed":R=>T("worldQuaternion-changed",R),"worldQuaternionStart-changed":R=>T("worldQuaternionStart-changed",R),"cameraPosition-changed":R=>T("cameraPosition-changed",R),"cameraQuaternion-changed":R=>T("cameraQuaternion-changed",R),"pointStart-changed":R=>T("pointStart-changed",R),"pointEnd-changed":R=>T("pointEnd-changed",R),"rotationAxis-changed":R=>T("rotationAxis-changed",R),"rotationAngle-changed":R=>T("rotationAngle-changed",R),"eye-changed":R=>T("eye-changed",R),mouseDown:()=>T("mouseDown"),mouseUp:()=>T("mouseUp"),objectChange:()=>T("objectChange")};if(!x)throw new Error("TransformControls: renderer is undefined, is this component a child of <Canvas>?");const L=new K_(i,x.domElement),O=()=>L.reset();L.attach(n);const B=()=>{Object.entries(k).forEach(([R,H])=>{L.addEventListener(R,H)})},K=()=>{Object.entries(k).forEach(([R,H])=>{L.removeEventListener(R,H)})};return B(),E.add(L),ct(()=>{L.detach(),E.remove(L),K()}),r.$$set=R=>{"autoPauseOrbitControls"in R&&t(6,s=R.autoPauseOrbitControls),"mode"in R&&t(7,a=R.mode),"axis"in R&&t(4,o=R.axis),"dragging"in R&&t(5,l=R.dragging),"enabled"in R&&t(8,c=R.enabled),"translationSnap"in R&&t(9,f=R.translationSnap),"scaleSnap"in R&&t(10,d=R.scaleSnap),"rotationSnap"in R&&t(11,u=R.rotationSnap),"showX"in R&&t(12,p=R.showX),"showY"in R&&t(13,g=R.showY),"showZ"in R&&t(14,v=R.showZ),"size"in R&&t(15,m=R.size),"space"in R&&t(16,h=R.space),"dispose"in R&&t(0,_=R.dispose)},r.$$.update=()=>{r.$$.dirty&64&&(s||F()),r.$$.dirty&256&&c!==void 0&&t(1,L.enabled=c,L),r.$$.dirty&4096&&p!==void 0&&t(1,L.showX=p,L),r.$$.dirty&8192&&g!==void 0&&t(1,L.showY=g,L),r.$$.dirty&16384&&v!==void 0&&t(1,L.showZ=v,L),r.$$.dirty&130&&a!==void 0&&L.setMode(a),r.$$.dirty&514&&f!==void 0&&L.setTranslationSnap(f),r.$$.dirty&1026&&d!==void 0&&L.setScaleSnap(d),r.$$.dirty&2050&&u!==void 0&&L.setRotationSnap(u),r.$$.dirty&32770&&m!==void 0&&L.setSize(m),r.$$.dirty&65538&&h!==void 0&&L.setSpace(h)},[_,L,M,P,o,l,s,a,c,f,d,u,p,g,v,m,h,O]}class o0 extends gt{constructor(e){super(),mt(this,e,a0,s0,dt,{autoPauseOrbitControls:6,mode:7,axis:4,dragging:5,enabled:8,translationSnap:9,scaleSnap:10,rotationSnap:11,showX:12,showY:13,showZ:14,size:15,space:16,dispose:0,reset:17})}get reset(){return this.$$.ctx[17]}}const Jc=new Tt;Jc.scale.set(0,0,0);Jc.matrix;new _t().fromArray(new Array(16).fill(0));new $e(16777215);const $c=(r,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)r=r[t[i]];return{target:r,key:n}}else return{target:r,key:e}},fa=Symbol("initialValueBeforeAttach"),l0=()=>{const{invalidate:r}=Rn();let e=!1,t=fa,n,i,s;const a=(l,c,f)=>{if(o(),!f){const d=l;((d==null?void 0:d.isMaterial)||!1)&&(f="material"),((d==null?void 0:d.isBufferGeometry)||(d==null?void 0:d.isGeometry)||!1)&&(f="geometry")}if(!!f){if(typeof f=="function")n=f(c,l);else{const{target:d,key:u}=$c(c,f);t=d[u],d[u]=l,i=d,s=u}e=!0,r()}},o=()=>{!e||(n?(n(),n=void 0):i&&s&&t!==fa&&(i[s]=t,t=fa,i=void 0,s=void 0),e=!1,r())};return ct(()=>{o()}),{update:a}},c0=r=>r&&r.isCamera,eu=r=>r&&r.isOrthographicCamera,tu=r=>r&&r.isPerspectiveCamera,u0=r=>tu(r)||eu(r),f0=()=>{const{invalidate:r,size:e}=Rn(),{setCamera:t}=Yc();let n,i;ct(()=>{i==null||i()});const s=l=>{!n||(eu(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()):tu(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),r()))};return{update:(l,c)=>{if(i==null||i(),c||!u0(l)){n=void 0;return}n=l,i=e.subscribe(s)},makeDefaultCamera:(l,c)=>{!c0(l)||!c||(t(l),r())}}},Yl=r=>!!(r!=null&&r.addEventListener),h0=()=>{const r=_s(),e=ir(),t=u=>{u!=null&&u.type&&r(u.type,u)},n=(u,p)=>{Yl(u)&&p.forEach(g=>{u.removeEventListener(g,t)})},i=(u,p)=>{Yl(u)&&p.forEach(g=>{u.addEventListener(g,t)})};let s=[],a;const o=Ye([]),l=o.subscribe(u=>{n(a,s),i(a,u),s=u});ct(l);const c=Ye(),f=c.subscribe(u=>{n(a,s),i(u,s),a=u});return ct(f),ct(()=>{n(a,s)}),rr(()=>{o.set(Object.keys(e.$$.callbacks))}),{updateRef:u=>{c.set(u)}}},d0=["$$scope","$$slots","type","args","attach","instance"],p0=["fov","aspect","near","far","left","right","top","bottom","zoom"],m0=r=>typeof r=="string"||typeof r=="number"||typeof r=="boolean"||typeof r=="undefined"||r===null,g0=()=>{const{invalidate:r}=Rn(),e=new Map,t=(i,s,a,o)=>{var f,d;if(m0(a)){const u=e.get(s);if(u&&u.instance===i&&u.value===a)return;e.set(s,{instance:i,value:a})}const{key:l,target:c}=$c(i,s);if(!Array.isArray(a)&&typeof a=="number"&&typeof((f=c[l])==null?void 0:f.setScalar)=="function")c[l].setScalar(a);else if(typeof((d=c[l])==null?void 0:d.set)=="function")Array.isArray(a)?c[l].set(...a):c[l].set(a);else{if(c[l]=a,o.manualCamera)return;p0.includes(l)&&(c.isPerspectiveCamera||c.isOrthographicCamera)&&c.updateProjectionMatrix()}};return{updateProps:(i,s,a)=>{for(const o in s)d0.includes(o)||t(i,o,s[o],a),r()}}},_0=r=>({ref:r&1}),Zl=r=>({ref:r[0]}),v0=r=>({ref:r&1}),Ql=r=>({ref:r[0]});function Kl(r){let e,t;return e=new ka({props:{object:r[0],dispose:r[1]}}),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&2&&(s.dispose=n[1]),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function x0(r){let e;const t=r[12].default,n=An(t,r,r[13],Zl);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Pn(n,t,i,i[13],e?Cn(t,i[13],s,_0):Ln(i[13]),Zl)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function M0(r){let e,t;return e=new za({props:{object:r[0],$$slots:{default:[b0]},$$scope:{ctx:r}}}),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},p(n,i){const s={};i&1&&(s.object=n[0]),i&8193&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function b0(r){let e;const t=r[12].default,n=An(t,r,r[13],Ql);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s&8193)&&Pn(n,t,i,i[13],e?Cn(t,i[13],s,v0):Ln(i[13]),Ql)},i(i){e||(be(n,i),e=!0)},o(i){Ce(n,i),e=!1},d(i){n&&n.d(i)}}}function S0(r){let e=r[4](r[0]),t,n,i,s,a,o,l=e&&Kl(r);const c=[M0,x0],f=[];function d(u,p){return p&1&&(n=null),n==null&&(n=!!u[3](u[0])),n?0:1}return i=d(r,-1),s=f[i]=c[i](r),{c(){l&&l.c(),t=he(),s.c(),a=Si()},m(u,p){l&&l.m(u,p),We(u,t,p),f[i].m(u,p),We(u,a,p),o=!0},p(u,[p]){p&1&&(e=u[4](u[0])),e?l?(l.p(u,p),p&1&&be(l,1)):(l=Kl(u),l.c(),be(l,1),l.m(t.parentNode,t)):l&&(vi(),Ce(l,1,1,()=>{l=null}),xi());let g=i;i=d(u,p),i===g?f[i].p(u,p):(vi(),Ce(f[g],1,1,()=>{f[g]=null}),xi(),s=f[i],s?s.p(u,p):(s=f[i]=c[i](u),s.c()),be(s,1),s.m(a.parentNode,a))},i(u){o||(be(l),be(s),o=!0)},o(u){Ce(l),Ce(s),o=!1},d(u){l&&l.d(u),u&&He(t),f[i].d(u),u&&He(a)}}}function y0(r,e,t){const n=["type","args","attach","manual","makeDefault","dispose","ref"];let i=Va(e,n),s,{$$slots:a={},$$scope:o}=e,{type:l}=e,{args:c=void 0}=e,{attach:f=void 0}=e,{manual:d=void 0}=e,{makeDefault:u=void 0}=e,{dispose:p=void 0}=e;const g=Tn("threlte-hierarchical-parent-context");Ae(r,g,b=>t(11,s=b));const v=b=>typeof b=="function"&&/^\s*class\s+/.test(b.toString()),m=b=>Array.isArray(b);let{ref:h=v(l)&&m(c)?new l(...c):v(l)?new l:l}=e,_=!1;const M=Ye(h);pn("threlte-hierarchical-parent-context",M);const x=g0(),y=f0(),E=l0(),P=h0(),T=b=>!!b.isObject3D,S=b=>b.dispose!==void 0;return r.$$set=b=>{e=ha(ha({},e),su(b)),t(21,i=Va(e,n)),"type"in b&&t(5,l=b.type),"args"in b&&t(6,c=b.args),"attach"in b&&t(7,f=b.attach),"manual"in b&&t(8,d=b.manual),"makeDefault"in b&&t(9,u=b.makeDefault),"dispose"in b&&t(1,p=b.dispose),"ref"in b&&t(0,h=b.ref),"$$scope"in b&&t(13,o=b.$$scope)},r.$$.update=()=>{r.$$.dirty&1120&&(_?t(0,h=v(l)&&m(c)?new l(...c):v(l)?new l:l):t(10,_=!0)),r.$$.dirty&1&&M.set(h),x.updateProps(h,i,{manualCamera:d}),r.$$.dirty&257&&y.update(h,d),r.$$.dirty&513&&y.makeDefaultCamera(h,u),r.$$.dirty&2177&&E.update(h,s,f),r.$$.dirty&1&&P.updateRef(h)},[h,p,g,T,S,l,c,f,d,u,_,s,a,o]}class w0 extends gt{constructor(e){super(),mt(this,e,y0,S0,dt,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function E0(r){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class Jl extends gt{constructor(e){super(),mt(this,e,E0,null,dt,{})}}new Proxy(Jl,{get(r,e){return r[e]||Jl}});Q_(fl,()=>new fl(Gc));function $l(r){let e,t,n,i,s,a=r[4]=="translate"?"rotate":"translate",o,l,c,f,d,u,p,g,v,m,h,_,M,x,y,E=r[2].x.toFixed(2)+"",P,T,S,b,F,k,L=-r[2].z.toFixed(2)+"",O,B,K,R,H,Z,Q=r[2].y.toFixed(2)+"",_e,se,W,$,ee,ce,N,Le,Te,ae,we,je,Se,De,ot,vt,xt,pt,Xe=Qt.radToDeg(r[3].x).toFixed(2)+"",rt,It,C,w,X,ne,re=Qt.radToDeg(r[3].y).toFixed(2)+"",ue,Pe,de,J,ve,ye,Ee=Qt.radToDeg(r[3].z).toFixed(2)+"",ge,xe,Ne,Ze,lt,I,V,ie,fe,Me,Ke,Be,At,qt,ut,Lt,zt,Dn,ti,Or,cr,In,A,z,q,G,j=r[12]!==null&&ec(r);return In=new C_({props:{$$slots:{default:[A0]},$$scope:{ctx:r}}}),{c(){e=te("div"),t=te("div"),n=te("div"),i=te("button"),s=Je("Change to "),o=Je(a),l=he(),c=te("div"),f=te("button"),f.textContent="Reset Rotation",d=he(),u=te("button"),u.textContent="Reset Position",p=he(),g=te("div"),v=te("p"),v.textContent="Translation Snap",m=he(),h=te("div"),_=te("div"),M=te("p"),M.textContent="x",x=he(),y=te("p"),P=Je(E),T=he(),S=te("div"),b=te("p"),b.textContent="y",F=he(),k=te("p"),O=Je(L),B=he(),K=te("div"),R=te("p"),R.textContent="z",H=he(),Z=te("p"),_e=Je(Q),se=he(),W=te("div"),$=te("div"),ee=Je(r[5]),ce=he(),N=te("input"),Le=he(),Te=te("button"),Te.textContent="Place On Ground",ae=he(),we=te("div"),je=te("p"),je.textContent="Rotation Snap",Se=he(),De=te("div"),ot=te("div"),vt=te("p"),vt.textContent="x",xt=he(),pt=te("p"),rt=Je(Xe),It=he(),C=te("div"),w=te("p"),w.textContent="y",X=he(),ne=te("p"),ue=Je(re),Pe=he(),de=te("div"),J=te("p"),J.textContent="z",ve=he(),ye=te("p"),ge=Je(Ee),xe=he(),Ne=te("div"),Ze=te("div"),lt=Je(r[6]),I=he(),V=te("input"),ie=he(),fe=te("p"),fe.textContent="Object Alpha",Me=he(),Ke=te("div"),Be=te("input"),At=he(),qt=te("button"),qt.textContent="Cancel Placement",ut=he(),Lt=te("button"),zt=te("i"),Or=he(),j&&j.c(),cr=he(),at(In.$$.fragment),Y(i,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),Y(f,"class","bg-[color:var(--color-secondary)] text-white p-[0.5rem] w-full whitespace-nowrap"),Y(u,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),Y(c,"class","flex flex-row gap-[1rem]"),Y(v,"class","h-fit"),Y(_,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),Y(S,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),Y(K,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),Y(h,"class","flex flex-row gap-[1rem] text-center"),Y(g,"class","flex flex-col items-center"),Y($,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),Y(N,"id","slider"),Y(N,"type","range"),Y(N,"min","0.01"),Y(N,"max","1"),Y(N,"step","0.01"),Y(N,"class","w-full"),Y(W,"class","flex flex-row gap-[1rem] items-center"),Y(Te,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),Y(je,"class","h-fit"),Y(ot,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),Y(C,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),Y(de,"class","bg-[color:var(--color-secondary)] relative flex flex-col w-[8rem] px-[0.1rem]"),Y(De,"class","flex flex-row gap-[1rem] text-center"),Y(we,"class","flex flex-col items-center "),Y(Ze,"class","w-[5rem] h-[3rem] items-center flex justify-center bg-[color:var(--color-secondary)]"),Y(V,"id","slider"),Y(V,"type","range"),Y(V,"min","1"),Y(V,"max","90"),Y(V,"step","1"),Y(V,"class","w-full"),Y(Ne,"class","flex flex-row gap-[1rem] items-center"),Y(fe,"class",""),Y(Be,"id","slider"),Y(Be,"type","range"),Y(Be,"min","1"),Y(Be,"max","255"),Y(Be,"step","10"),Y(Be,"class","w-full"),Y(Ke,"class","flex flex-row gap-[1rem] items-center"),Y(qt,"class","bg-[color:var(--color-secondary)] text-white p-[1rem] w-full"),Y(n,"class","flex flex-col gap-[1rem] p-[2rem]"),Y(zt,"class",Dn="fas text-[2rem] fa-chevron-"+(r[7]?"left":"right")),Y(Lt,"class","h-full absolute -right-[4rem] w-[4rem] grid place-items-center bg-[color:var(--color-secondary)]"),Y(t,"class",ti="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(r[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"),Y(e,"class",A="modeler z-[0] absolute h-screen w-screen "+(r[9]?"bg-gray-800":""))},m(oe,me){We(oe,e,me),U(e,t),U(t,n),U(n,i),U(i,s),U(i,o),U(n,l),U(n,c),U(c,f),U(c,d),U(c,u),U(n,p),U(n,g),U(g,v),U(g,m),U(g,h),U(h,_),U(_,M),U(_,x),U(_,y),U(y,P),U(h,T),U(h,S),U(S,b),U(S,F),U(S,k),U(k,O),U(h,B),U(h,K),U(K,R),U(K,H),U(K,Z),U(Z,_e),U(n,se),U(n,W),U(W,$),U($,ee),U(W,ce),U(W,N),Mn(N,r[5]),U(n,Le),U(n,Te),U(n,ae),U(n,we),U(we,je),U(we,Se),U(we,De),U(De,ot),U(ot,vt),U(ot,xt),U(ot,pt),U(pt,rt),U(De,It),U(De,C),U(C,w),U(C,X),U(C,ne),U(ne,ue),U(De,Pe),U(De,de),U(de,J),U(de,ve),U(de,ye),U(ye,ge),U(n,xe),U(n,Ne),U(Ne,Ze),U(Ze,lt),U(Ne,I),U(Ne,V),Mn(V,r[6]),U(n,ie),U(n,fe),U(n,Me),U(n,Ke),U(Ke,Be),Mn(Be,r[1]),U(n,At),U(n,qt),U(t,ut),U(t,Lt),U(Lt,zt),U(e,Or),j&&j.m(e,null),U(e,cr),nt(In,e,null),z=!0,q||(G=[Ie(i,"click",r[22]),Ie(f,"click",r[23]),Ie(u,"click",r[24]),Ie(N,"change",r[25]),Ie(N,"input",r[25]),Ie(Te,"click",r[26]),Ie(V,"change",r[27]),Ie(V,"input",r[27]),Ie(Be,"change",r[28]),Ie(Be,"input",r[28]),Ie(qt,"click",r[29]),Ie(Lt,"click",r[30])],q=!0)},p(oe,me){(!z||me[0]&16)&&a!==(a=oe[4]=="translate"?"rotate":"translate")&&wt(o,a),(!z||me[0]&4)&&E!==(E=oe[2].x.toFixed(2)+"")&&wt(P,E),(!z||me[0]&4)&&L!==(L=-oe[2].z.toFixed(2)+"")&&wt(O,L),(!z||me[0]&4)&&Q!==(Q=oe[2].y.toFixed(2)+"")&&wt(_e,Q),(!z||me[0]&32)&&wt(ee,oe[5]),me[0]&32&&Mn(N,oe[5]),(!z||me[0]&8)&&Xe!==(Xe=Qt.radToDeg(oe[3].x).toFixed(2)+"")&&wt(rt,Xe),(!z||me[0]&8)&&re!==(re=Qt.radToDeg(oe[3].y).toFixed(2)+"")&&wt(ue,re),(!z||me[0]&8)&&Ee!==(Ee=Qt.radToDeg(oe[3].z).toFixed(2)+"")&&wt(ge,Ee),(!z||me[0]&64)&&wt(lt,oe[6]),me[0]&64&&Mn(V,oe[6]),me[0]&2&&Mn(Be,oe[1]),(!z||me[0]&128&&Dn!==(Dn="fas text-[2rem] fa-chevron-"+(oe[7]?"left":"right")))&&Y(zt,"class",Dn),(!z||me[0]&128&&ti!==(ti="w-fit text-[1.5rem] bg-[color:var(--color-primary)] top-[4rem] origin-top absolute "+(oe[7]?"left-[1.5rem]":"-left-[30rem]")+" flex flex-row gap-[1rem] items-center justify-between"))&&Y(t,"class",ti),oe[12]!==null?j?j.p(oe,me):(j=ec(oe),j.c(),j.m(e,cr)):j&&(j.d(1),j=null);const Re={};me[0]&29821|me[1]&128&&(Re.$$scope={dirty:me,ctx:oe}),In.$set(Re),(!z||me[0]&512&&A!==(A="modeler z-[0] absolute h-screen w-screen "+(oe[9]?"bg-gray-800":"")))&&Y(e,"class",A)},i(oe){z||(be(In.$$.fragment,oe),z=!0)},o(oe){Ce(In.$$.fragment,oe),z=!1},d(oe){oe&&He(e),j&&j.d(),it(In),q=!1,sn(G)}}}function ec(r){let e,t,n;return{c(){e=te("button"),e.innerHTML=`<i class="fa-solid fa-shopping-cart text-[white]"></i> 
        	<p class="font-semibold">Add To Cart</p>`,Y(e,"class","absolute text-[2rem] hover:brightness-110 top-1/2 -translate-y-1/2 right-[1rem] w-fit gap-[1rem] px-8 py-4 h-fit bg-[color:var(--color-secondary)] flex flex-row items-center justify-between")},m(i,s){We(i,e,s),t||(n=Ie(e,"click",r[31]),t=!0)},p:bt,d(i){i&&He(e),t=!1,n()}}}function T0(r){let e,t;return e=new o0({props:{mode:r[4],translationSnap:r[5],rotationSnap:Qt.degToRad(r[6]),size:.5,space:"local"}}),e.$on("objectChange",r[32]),e.$on("dragging-changed",r[33]),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},p(n,i){const s={};i[0]&16&&(s.mode=n[4]),i[0]&32&&(s.translationSnap=n[5]),i[0]&64&&(s.rotationSnap=Qt.degToRad(n[6])),e.$set(s)},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function A0(r){let e,t,n,i,s;e=new Z_({props:{position:r[13],lookAt:r[10],fov:45}});function a(l){r[34](l)}let o={type:pe,"position.x":r[2].x,"position.y":r[2].y,"position.z":r[2].z,quaternion:5,geometry:new Mt(0,0,0),material:new yg,"rotation.x":r[3].x,"rotation.y":r[3].y,"rotation.z":r[3].z,$$slots:{default:[T0]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.ref=r[0]),n=new w0({props:o}),Hn.push(()=>xs(n,"ref",a)),{c(){at(e.$$.fragment),t=he(),at(n.$$.fragment)},m(l,c){nt(e,l,c),We(l,t,c),nt(n,l,c),s=!0},p(l,c){const f={};c[0]&8192&&(f.position=l[13]),c[0]&1024&&(f.lookAt=l[10]),e.$set(f);const d={};c[0]&4&&(d["position.x"]=l[2].x),c[0]&4&&(d["position.y"]=l[2].y),c[0]&4&&(d["position.z"]=l[2].z),c[0]&8&&(d["rotation.x"]=l[3].x),c[0]&8&&(d["rotation.y"]=l[3].y),c[0]&8&&(d["rotation.z"]=l[3].z),c[0]&20604|c[1]&128&&(d.$$scope={dirty:c,ctx:l}),!i&&c[0]&1&&(i=!0,d.ref=l[0],vs(()=>i=!1)),n.$set(d)},i(l){s||(be(e.$$.fragment,l),be(n.$$.fragment,l),s=!0)},o(l){Ce(e.$$.fragment,l),Ce(n.$$.fragment,l),s=!1},d(l){it(e,l),l&&He(t),it(n,l)}}}function C0(r){let e,t,n=r[8]&&$l(r);return{c(){n&&n.c(),e=Si()},m(i,s){n&&n.m(i,s),We(i,e,s),t=!0},p(i,s){i[8]?n?(n.p(i,s),s[0]&256&&be(n,1)):(n=$l(i),n.c(),be(n,1),n.m(e.parentNode,e)):n&&(vi(),Ce(n,1,1,()=>{n=null}),xi())},i(i){t||(be(n),t=!0)},o(i){Ce(n),t=!1},d(i){n&&n.d(i),i&&He(e)}}}function P0(r,e,t){let n,i,s,a,o,l,c,f,d;Ae(r,Ms,ee=>t(9,a=ee)),Ae(r,ms,ee=>t(11,l=ee)),Ae(r,Bn,ee=>t(14,d=ee));const{show:u,cameraPosition:p,cameraLookAt:g,objectPosition:v,objectEuler:m,cartEntity:h}=Gn;Ae(r,u,ee=>t(8,s=ee)),Ae(r,p,ee=>t(13,f=ee)),Ae(r,g,ee=>t(10,o=ee)),Ae(r,v,ee=>t(2,n=ee)),Ae(r,m,ee=>t(3,i=ee)),Ae(r,h,ee=>t(12,c=ee));let _,M="translate",x=.01,y=1,E=!1,P=200;on("setObjectAlpha",ee=>{t(1,P=ee)});function T(ee){ee.button==2&&(M=="translate"?t(4,M="rotate"):t(4,M="translate"))}rr(()=>{document.addEventListener("contextmenu",T)}),ct(()=>{document.removeEventListener("contextmenu",T)});function S(ee){return ee.x!=n.x||ee.y!=n.y||ee.z!=n.z}function b(ee){return ee.x!=i.x||ee.y!=i.y||ee.z!=i.z}function F(){_&&(S(_.position)&&(Ue(v,n.x=_.position.x,n),Ue(v,n.y=_.position.y,n),Ue(v,n.z=_.position.z,n),Gn.sendMovementUpdate(us(n))),b(_.rotation)&&(Ue(m,i.x=_.rotation.x,i),Ue(m,i.y=_.rotation.y,i),Ue(m,i.z=_.rotation.z,i),Gn.sendRotationUpdate(i)))}const k=()=>{M=="translate"?t(4,M="rotate"):t(4,M="translate")},L=()=>{_.rotation.set(0,0,0,i.order),F()},O=()=>{_.position.set(o.x,o.y,o.z),F()};function B(){x=ls(this.value),t(5,x)}const K=()=>{Et("placeOnGround").then(ee=>{const ce=Hi(ee);_.position.set(ce.x,ce.y,ce.z),F()})};function R(){y=ls(this.value),t(6,y)}function H(){P=ls(this.value),t(1,P)}const Z=()=>{Et("cancelPlacement"),Gn.show.set(!1),Ue(ms,l=null,l)},Q=()=>{t(7,E=!E)},_e=()=>{Et("addToCart",l)},se=ee=>{F()},W=ee=>{if(!ee.detail.value&&c!=null){const N=d.find(ae=>ae.entity===c),Le=us(n);N.position=Le;const Te=us(i);N.rotation=Te,Ue(Bn,d=[...d],d),Et("updateCartItem",N)}};function $(ee){_=ee,t(0,_)}return r.$$.update=()=>{r.$$.dirty[0]&2&&Et("setObjectAlpha",{alpha:P}),r.$$.dirty[0]&13&&_&&(_.rotation.set(i.x,i.y,i.z,i.order),_.position.set(n.x,n.y,n.z))},[_,P,n,i,M,x,y,E,s,a,o,l,c,f,d,u,p,g,v,m,h,F,k,L,O,B,K,R,H,Z,Q,_e,se,W,$]}class L0 extends gt{constructor(e){super(),mt(this,e,P0,C0,dt,{},null,[-1,-1])}}function tc(r){let e,t,n,i;return e=new Qg({}),n=new L0({}),{c(){at(e.$$.fragment),t=he(),at(n.$$.fragment)},m(s,a){nt(e,s,a),We(s,t,a),nt(n,s,a),i=!0},i(s){i||(be(e.$$.fragment,s),be(n.$$.fragment,s),i=!0)},o(s){Ce(e.$$.fragment,s),Ce(n.$$.fragment,s),i=!1},d(s){it(e,s),s&&He(t),it(n,s)}}}function R0(r){let e,t,n=r[0]&&tc();return{c(){n&&n.c(),e=Si()},m(i,s){n&&n.m(i,s),We(i,e,s),t=!0},p(i,s){i[0]?n?s&1&&be(n,1):(n=tc(),n.c(),be(n,1),n.m(e.parentNode,e)):n&&(vi(),Ce(n,1,1,()=>{n=null}),xi())},i(i){t||(be(n),t=!0)},o(i){Ce(n),t=!1},d(i){n&&n.d(i),i&&He(e)}}}function nc(r){let e,t;return e=new Ig({}),{c(){at(e.$$.fragment)},m(n,i){nt(e,n,i),t=!0},i(n){t||(be(e.$$.fragment,n),t=!0)},o(n){Ce(e.$$.fragment,n),t=!1},d(n){it(e,n)}}}function D0(r){let e,t,n,i,s,a;e=new Pg({props:{$$slots:{default:[R0]},$$scope:{ctx:r}}}),n=new zg({});let o=r[1]&&nc();return{c(){at(e.$$.fragment),t=he(),at(n.$$.fragment),i=he(),o&&o.c(),s=Si()},m(l,c){nt(e,l,c),We(l,t,c),nt(n,l,c),We(l,i,c),o&&o.m(l,c),We(l,s,c),a=!0},p(l,[c]){const f={};c&17&&(f.$$scope={dirty:c,ctx:l}),e.$set(f),l[1]?o?c&2&&be(o,1):(o=nc(),o.c(),be(o,1),o.m(s.parentNode,s)):o&&(vi(),Ce(o,1,1,()=>{o=null}),xi())},i(l){a||(be(e.$$.fragment,l),be(n.$$.fragment,l),be(o),a=!0)},o(l){Ce(e.$$.fragment,l),Ce(n.$$.fragment,l),Ce(o),a=!1},d(l){it(e,l),l&&He(t),it(n,l),l&&He(i),o&&o.d(l),l&&He(s)}}}function I0(r,e,t){let n,i,s;return Ae(r,ga,a=>t(2,n=a)),Ae(r,ps,a=>t(0,i=a)),Ae(r,Ms,a=>t(1,s=a)),Ue(ga,n="ps-housing",n),[i,s]}class U0 extends gt{constructor(e){super(),mt(this,e,I0,D0,dt,{})}}new U0({target:document.getElementById("app")});
