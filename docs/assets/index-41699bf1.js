(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Tc(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Ec(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=pt(n)?km(n):Ec(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(pt(i))return i;if(st(i))return i}}const zm=/;(?![^(]*\))/g,Um=/:([^]+)/,Bm=/\/\*.*?\*\//gs;function km(i){const e={};return i.replace(Bm,"").split(zm).forEach(t=>{if(t){const n=t.split(Um);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Cc(i){let e="";if(pt(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=Cc(i[t]);n&&(e+=n+" ")}else if(st(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Gm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vm=Tc(Gm);function Jh(i){return!!i||i===""}const et={},Yr=[],Ln=()=>{},Hm=()=>!1,Wm=/^on[^a-z]/,pa=i=>Wm.test(i),Ac=i=>i.startsWith("onUpdate:"),Tt=Object.assign,Pc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},qm=Object.prototype.hasOwnProperty,We=(i,e)=>qm.call(i,e),Ie=Array.isArray,ks=i=>ma(i)==="[object Map]",Xm=i=>ma(i)==="[object Set]",Fe=i=>typeof i=="function",pt=i=>typeof i=="string",Rc=i=>typeof i=="symbol",st=i=>i!==null&&typeof i=="object",Qh=i=>st(i)&&Fe(i.then)&&Fe(i.catch),jm=Object.prototype.toString,ma=i=>jm.call(i),Ym=i=>ma(i).slice(8,-1),$m=i=>ma(i)==="[object Object]",Lc=i=>pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ho=Tc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Km=/-(\w)/g,Hn=ga(i=>i.replace(Km,(e,t)=>t?t.toUpperCase():"")),Zm=/\B([A-Z])/g,ys=ga(i=>i.replace(Zm,"-$1").toLowerCase()),_a=ga(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ua=ga(i=>i?`on${_a(i)}`:""),Ys=(i,e)=>!Object.is(i,e),Ba=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Qo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Jm=i=>{const e=parseFloat(i);return isNaN(e)?i:e},Qm=i=>{const e=pt(i)?Number(i):NaN;return isNaN(e)?i:e};let Su;const eg=()=>Su||(Su=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Tn;class tg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tn,!e&&Tn&&(this.index=(Tn.scopes||(Tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=Tn;try{return Tn=this,e()}finally{Tn=t}}}on(){Tn=this}off(){Tn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ng(i,e=Tn){e&&e.active&&e.effects.push(i)}function ig(){return Tn}const Dc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},ed=i=>(i.w&Ri)>0,td=i=>(i.n&Ri)>0,rg=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Ri},sg=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];ed(r)&&!td(r)?r.delete(i):e[t++]=r,r.w&=~Ri,r.n&=~Ri}e.length=t}},Bl=new WeakMap;let Fs=0,Ri=1;const kl=30;let Cn;const lr=Symbol(""),Gl=Symbol("");class Ic{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ng(this,n)}run(){if(!this.active)return this.fn();let e=Cn,t=Ti;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Cn,Cn=this,Ti=!0,Ri=1<<++Fs,Fs<=kl?rg(this):wu(this),this.fn()}finally{Fs<=kl&&sg(this),Ri=1<<--Fs,Cn=this.parent,Ti=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Cn===this?this.deferStop=!0:this.active&&(wu(this),this.onStop&&this.onStop(),this.active=!1)}}function wu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Ti=!0;const nd=[];function bs(){nd.push(Ti),Ti=!1}function Ms(){const i=nd.pop();Ti=i===void 0?!0:i}function Xt(i,e,t){if(Ti&&Cn){let n=Bl.get(i);n||Bl.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Dc()),id(r)}}function id(i,e){let t=!1;Fs<=kl?td(i)||(i.n|=Ri,t=!ed(i)):t=!i.has(Cn),t&&(i.add(Cn),Cn.deps.push(i))}function li(i,e,t,n,r,s){const o=Bl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?Lc(t)&&a.push(o.get("length")):(a.push(o.get(lr)),ks(i)&&a.push(o.get(Gl)));break;case"delete":Ie(i)||(a.push(o.get(lr)),ks(i)&&a.push(o.get(Gl)));break;case"set":ks(i)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&Vl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Vl(Dc(l))}}function Vl(i,e){const t=Ie(i)?i:[...i];for(const n of t)n.computed&&Tu(n);for(const n of t)n.computed||Tu(n)}function Tu(i,e){(i!==Cn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const og=Tc("__proto__,__v_isRef,__isVue"),rd=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Rc)),ag=Oc(),lg=Oc(!1,!0),cg=Oc(!0),Eu=ug();function ug(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Xe(this);for(let s=0,o=this.length;s<o;s++)Xt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Xe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){bs();const n=Xe(this)[e].apply(this,t);return Ms(),n}}),i}function fg(i){const e=Xe(this);return Xt(e,"has",i),e.hasOwnProperty(i)}function Oc(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Cg:cd:e?ld:ad).get(n))return n;const o=Ie(n);if(!i){if(o&&We(Eu,r))return Reflect.get(Eu,r,s);if(r==="hasOwnProperty")return fg}const a=Reflect.get(n,r,s);return(Rc(r)?rd.has(r):og(r))||(i||Xt(n,"get",r),e)?a:Rt(a)?o&&Lc(r)?a:a.value:st(a)?i?ud(a):uo(a):a}}const hg=sd(),dg=sd(!0);function sd(i=!1){return function(t,n,r,s){let o=t[n];if(rs(o)&&Rt(o)&&!Rt(r))return!1;if(!i&&(!ea(r)&&!rs(r)&&(o=Xe(o),r=Xe(r)),!Ie(t)&&Rt(o)&&!Rt(r)))return o.value=r,!0;const a=Ie(t)&&Lc(n)?Number(n)<t.length:We(t,n),l=Reflect.set(t,n,r,s);return t===Xe(s)&&(a?Ys(r,o)&&li(t,"set",n,r):li(t,"add",n,r)),l}}function pg(i,e){const t=We(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&li(i,"delete",e,void 0),n}function mg(i,e){const t=Reflect.has(i,e);return(!Rc(e)||!rd.has(e))&&Xt(i,"has",e),t}function gg(i){return Xt(i,"iterate",Ie(i)?"length":lr),Reflect.ownKeys(i)}const od={get:ag,set:hg,deleteProperty:pg,has:mg,ownKeys:gg},_g={get:cg,set(i,e){return!0},deleteProperty(i,e){return!0}},xg=Tt({},od,{get:lg,set:dg}),Fc=i=>i,xa=i=>Reflect.getPrototypeOf(i);function go(i,e,t=!1,n=!1){i=i.__v_raw;const r=Xe(i),s=Xe(e);t||(e!==s&&Xt(r,"get",e),Xt(r,"get",s));const{has:o}=xa(r),a=n?Fc:t?Uc:$s;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function _o(i,e=!1){const t=this.__v_raw,n=Xe(t),r=Xe(i);return e||(i!==r&&Xt(n,"has",i),Xt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function xo(i,e=!1){return i=i.__v_raw,!e&&Xt(Xe(i),"iterate",lr),Reflect.get(i,"size",i)}function Cu(i){i=Xe(i);const e=Xe(this);return xa(e).has.call(e,i)||(e.add(i),li(e,"add",i,i)),this}function Au(i,e){e=Xe(e);const t=Xe(this),{has:n,get:r}=xa(t);let s=n.call(t,i);s||(i=Xe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Ys(e,o)&&li(t,"set",i,e):li(t,"add",i,e),this}function Pu(i){const e=Xe(this),{has:t,get:n}=xa(e);let r=t.call(e,i);r||(i=Xe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&li(e,"delete",i,void 0),s}function Ru(){const i=Xe(this),e=i.size!==0,t=i.clear();return e&&li(i,"clear",void 0,void 0),t}function vo(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Xe(o),l=e?Fc:i?Uc:$s;return!i&&Xt(a,"iterate",lr),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function yo(i,e,t){return function(...n){const r=this.__v_raw,s=Xe(r),o=ks(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Fc:e?Uc:$s;return!e&&Xt(s,"iterate",l?Gl:lr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function hi(i){return function(...e){return i==="delete"?!1:this}}function vg(){const i={get(s){return go(this,s)},get size(){return xo(this)},has:_o,add:Cu,set:Au,delete:Pu,clear:Ru,forEach:vo(!1,!1)},e={get(s){return go(this,s,!1,!0)},get size(){return xo(this)},has:_o,add:Cu,set:Au,delete:Pu,clear:Ru,forEach:vo(!1,!0)},t={get(s){return go(this,s,!0)},get size(){return xo(this,!0)},has(s){return _o.call(this,s,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:vo(!0,!1)},n={get(s){return go(this,s,!0,!0)},get size(){return xo(this,!0)},has(s){return _o.call(this,s,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:vo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=yo(s,!1,!1),t[s]=yo(s,!0,!1),e[s]=yo(s,!1,!0),n[s]=yo(s,!0,!0)}),[i,t,e,n]}const[yg,bg,Mg,Sg]=vg();function Nc(i,e){const t=e?i?Sg:Mg:i?bg:yg;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(We(t,r)&&r in n?t:n,r,s)}const wg={get:Nc(!1,!1)},Tg={get:Nc(!1,!0)},Eg={get:Nc(!0,!1)},ad=new WeakMap,ld=new WeakMap,cd=new WeakMap,Cg=new WeakMap;function Ag(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pg(i){return i.__v_skip||!Object.isExtensible(i)?0:Ag(Ym(i))}function uo(i){return rs(i)?i:zc(i,!1,od,wg,ad)}function Rg(i){return zc(i,!1,xg,Tg,ld)}function ud(i){return zc(i,!0,_g,Eg,cd)}function zc(i,e,t,n,r){if(!st(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Pg(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function $r(i){return rs(i)?$r(i.__v_raw):!!(i&&i.__v_isReactive)}function rs(i){return!!(i&&i.__v_isReadonly)}function ea(i){return!!(i&&i.__v_isShallow)}function fd(i){return $r(i)||rs(i)}function Xe(i){const e=i&&i.__v_raw;return e?Xe(e):i}function hd(i){return Qo(i,"__v_skip",!0),i}const $s=i=>st(i)?uo(i):i,Uc=i=>st(i)?ud(i):i;function dd(i){Ti&&Cn&&(i=Xe(i),id(i.dep||(i.dep=Dc())))}function pd(i,e){i=Xe(i);const t=i.dep;t&&Vl(t)}function Rt(i){return!!(i&&i.__v_isRef===!0)}function md(i){return gd(i,!1)}function Lg(i){return gd(i,!0)}function gd(i,e){return Rt(i)?i:new Dg(i,e)}class Dg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Xe(e),this._value=t?e:$s(e)}get value(){return dd(this),this._value}set value(e){const t=this.__v_isShallow||ea(e)||rs(e);e=t?e:Xe(e),Ys(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:$s(e),pd(this))}}function Kr(i){return Rt(i)?i.value:i}const Ig={get:(i,e,t)=>Kr(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Rt(r)&&!Rt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function _d(i){return $r(i)?i:new Proxy(i,Ig)}var xd;class Og{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[xd]=!1,this._dirty=!0,this.effect=new Ic(e,()=>{this._dirty||(this._dirty=!0,pd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Xe(this);return dd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xd="__v_isReadonly";function Fg(i,e,t=!1){let n,r;const s=Fe(i);return s?(n=i,r=Ln):(n=i.get,r=i.set),new Og(n,r,s||!r,t)}function Ei(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){va(s,e,t)}return r}function yn(i,e,t,n){if(Fe(i)){const s=Ei(i,e,t,n);return s&&Qh(s)&&s.catch(o=>{va(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(yn(i[s],e,t,n));return r}function va(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ei(l,null,10,[i,o,a]);return}}Ng(i,t,r,n)}function Ng(i,e,t,n=!0){console.error(i)}let Ks=!1,Hl=!1;const At=[];let Un=0;const Zr=[];let Qn=null,tr=0;const vd=Promise.resolve();let Bc=null;function yd(i){const e=Bc||vd;return i?e.then(this?i.bind(this):i):e}function zg(i){let e=Un+1,t=At.length;for(;e<t;){const n=e+t>>>1;Zs(At[n])<i?e=n+1:t=n}return e}function kc(i){(!At.length||!At.includes(i,Ks&&i.allowRecurse?Un+1:Un))&&(i.id==null?At.push(i):At.splice(zg(i.id),0,i),bd())}function bd(){!Ks&&!Hl&&(Hl=!0,Bc=vd.then(Sd))}function Ug(i){const e=At.indexOf(i);e>Un&&At.splice(e,1)}function Bg(i){Ie(i)?Zr.push(...i):(!Qn||!Qn.includes(i,i.allowRecurse?tr+1:tr))&&Zr.push(i),bd()}function Lu(i,e=Ks?Un+1:0){for(;e<At.length;e++){const t=At[e];t&&t.pre&&(At.splice(e,1),e--,t())}}function Md(i){if(Zr.length){const e=[...new Set(Zr)];if(Zr.length=0,Qn){Qn.push(...e);return}for(Qn=e,Qn.sort((t,n)=>Zs(t)-Zs(n)),tr=0;tr<Qn.length;tr++)Qn[tr]();Qn=null,tr=0}}const Zs=i=>i.id==null?1/0:i.id,kg=(i,e)=>{const t=Zs(i)-Zs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Sd(i){Hl=!1,Ks=!0,At.sort(kg);const e=Ln;try{for(Un=0;Un<At.length;Un++){const t=At[Un];t&&t.active!==!1&&Ei(t,null,14)}}finally{Un=0,At.length=0,Md(),Ks=!1,Bc=null,(At.length||Zr.length)&&Sd()}}function Gg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||et;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||et;f&&(r=t.map(p=>pt(p)?p.trim():p)),h&&(r=t.map(Jm))}let a,l=n[a=Ua(e)]||n[a=Ua(Hn(e))];!l&&s&&(l=n[a=Ua(ys(e))]),l&&yn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,yn(c,i,6,r)}}function wd(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Fe(i)){const l=c=>{const u=wd(c,e,!0);u&&(a=!0,Tt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(st(i)&&n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):Tt(o,s),st(i)&&n.set(i,o),o)}function ya(i,e){return!i||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(i,e[0].toLowerCase()+e.slice(1))||We(i,ys(e))||We(i,e))}let gn=null,Td=null;function ta(i){const e=gn;return gn=i,Td=i&&i.type.__scopeId||null,e}function Gr(i,e=gn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Vu(-1);const s=ta(e);let o;try{o=i(...r)}finally{ta(s),n._d&&Vu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ka(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const b=ta(i);try{if(t.shapeFlag&4){const S=r||n;m=Nn(u.call(S,S,h,s,p,f,g)),_=l}else{const S=e;m=Nn(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),_=e.props?l:Vg(l)}}catch(S){Vs.length=0,va(S,i,1),m=Mt(oi)}let x=m;if(_&&d!==!1){const S=Object.keys(_),{shapeFlag:y}=x;S.length&&y&7&&(o&&S.some(Ac)&&(_=Hg(_,o)),x=Li(x,_))}return t.dirs&&(x=Li(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,ta(b),m}const Vg=i=>{let e;for(const t in i)(t==="class"||t==="style"||pa(t))&&((e||(e={}))[t]=i[t]);return e},Hg=(i,e)=>{const t={};for(const n in i)(!Ac(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Wg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Du(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!ya(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Du(n,o,c):!0:!!o;return!1}function Du(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!ya(t,s))return!0}return!1}function qg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Xg=i=>i.__isSuspense;function jg(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):Bg(i)}function Jr(i,e){if(at){let t=at.provides;const n=at.parent&&at.parent.provides;n===t&&(t=at.provides=Object.create(n)),t[i]=e}}function Lt(i,e,t=!1){const n=at||gn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Fe(e)?e.call(n.proxy):e}}const bo={};function Wo(i,e,t){return Ed(i,e,t)}function Ed(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=et){const a=ig()===(at==null?void 0:at.scope)?at:null;let l,c=!1,u=!1;if(Rt(i)?(l=()=>i.value,c=ea(i)):$r(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(x=>$r(x)||ea(x)),l=()=>i.map(x=>{if(Rt(x))return x.value;if($r(x))return Wr(x);if(Fe(x))return Ei(x,a,2)})):Fe(i)?e?l=()=>Ei(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),yn(i,a,3,[f])}:l=Ln,e&&n){const x=l;l=()=>Wr(x())}let h,f=x=>{h=_.onStop=()=>{Ei(x,a,4)}},p;if(Qs)if(f=Ln,e?t&&yn(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const x=U_();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Ln;let g=u?new Array(i.length).fill(bo):bo;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((S,y)=>Ys(S,g[y])):Ys(x,g)))&&(h&&h(),yn(e,a,3,[x,g===bo?void 0:u&&g[0]===bo?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let m;r==="sync"?m=d:r==="post"?m=()=>kt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>kc(d));const _=new Ic(l,m);e?t?d():g=_.run():r==="post"?kt(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&Pc(a.scope.effects,_)};return p&&p.push(b),b}function Yg(i,e,t){const n=this.proxy,r=pt(i)?i.includes(".")?Cd(n,i):()=>n[i]:i.bind(n,n);let s;Fe(e)?s=e:(s=e.handler,t=e);const o=at;os(this);const a=Ed(r,s.bind(n),t);return o?os(o):cr(),a}function Cd(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Wr(i,e){if(!st(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Rt(i))Wr(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)Wr(i[t],e);else if(Xm(i)||ks(i))i.forEach(t=>{Wr(t,e)});else if($m(i))for(const t in i)Wr(i[t],e);return i}function $g(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gc(()=>{i.isMounted=!0}),Od(()=>{i.isUnmounting=!0}),i}const cn=[Function,Array],Kg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},setup(i,{slots:e}){const t=R_(),n=$g();let r;return()=>{const s=e.default&&Rd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==oi){o=d;break}}const a=Xe(i),{mode:l}=a;if(n.isLeaving)return Ga(o);const c=Iu(o);if(!c)return Ga(o);const u=Wl(c,a,n,t);ql(c,u);const h=t.subTree,f=h&&Iu(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();r===void 0?r=d:d!==r&&(r=d,p=!0)}if(f&&f.type!==oi&&(!nr(c,f)||p)){const d=Wl(f,a,n,t);if(ql(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Ga(o);l==="in-out"&&c.type!==oi&&(d.delayLeave=(m,_,b)=>{const x=Pd(n,f);x[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},Ad=Kg;function Pd(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Wl(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:b}=e,x=String(i.key),S=Pd(t,i),y=(v,w)=>{v&&yn(v,n,9,w)},A=(v,w)=>{const D=w[1];y(v,w),Ie(v)?v.every(W=>W.length<=1)&&D():v.length<=1&&D()},L={mode:s,persisted:o,beforeEnter(v){let w=a;if(!t.isMounted)if(r)w=d||a;else return;v._leaveCb&&v._leaveCb(!0);const D=S[x];D&&nr(i,D)&&D.el._leaveCb&&D.el._leaveCb(),y(w,[v])},enter(v){let w=l,D=c,W=u;if(!t.isMounted)if(r)w=m||l,D=_||c,W=b||u;else return;let B=!1;const O=v._enterCb=F=>{B||(B=!0,F?y(W,[v]):y(D,[v]),L.delayedLeave&&L.delayedLeave(),v._enterCb=void 0)};w?A(w,[v,O]):O()},leave(v,w){const D=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();y(h,[v]);let W=!1;const B=v._leaveCb=O=>{W||(W=!0,w(),O?y(g,[v]):y(p,[v]),v._leaveCb=void 0,S[D]===i&&delete S[D])};S[D]=i,f?A(f,[v,B]):B()},clone(v){return Wl(v,e,t,n)}};return L}function Ga(i){if(ba(i))return i=Li(i),i.children=null,i}function Iu(i){return ba(i)?i.children?i.children[0]:void 0:i}function ql(i,e){i.shapeFlag&6&&i.component?ql(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Rd(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===En?(o.patchFlag&128&&r++,n=n.concat(Rd(o.children,e,a))):(e||o.type!==oi)&&n.push(a!=null?Li(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function yr(i){return Fe(i)?{setup:i,name:i.name}:i}const qo=i=>!!i.type.__asyncLoader,ba=i=>i.type.__isKeepAlive;function Ld(i,e){Id(i,"a",e)}function Dd(i,e){Id(i,"da",e)}function Id(i,e,t=at){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Ma(e,n,t),t){let r=t.parent;for(;r&&r.parent;)ba(r.parent.vnode)&&Zg(n,e,t,r),r=r.parent}}function Zg(i,e,t,n){const r=Ma(e,i,n,!0);Vc(()=>{Pc(n[e],r)},t)}function Ma(i,e,t=at,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;bs(),os(t);const a=yn(e,t,i,o);return cr(),Ms(),a});return n?r.unshift(s):r.push(s),s}}const fi=i=>(e,t=at)=>(!Qs||i==="sp")&&Ma(i,(...n)=>e(...n),t),Jg=fi("bm"),Gc=fi("m"),Qg=fi("bu"),e_=fi("u"),Od=fi("bum"),Vc=fi("um"),t_=fi("sp"),n_=fi("rtg"),i_=fi("rtc");function r_(i,e=at){Ma("ec",i,e)}function Vi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(bs(),yn(l,t,8,[i.el,a,i,e]),Ms())}}const Hc="components";function Ou(i,e){return Nd(Hc,i,!0,e)||i}const Fd=Symbol();function s_(i){return pt(i)?Nd(Hc,i,!1)||i:i||Fd}function Nd(i,e,t=!0,n=!1){const r=gn||at;if(r){const s=r.type;if(i===Hc){const a=F_(s,!1);if(a&&(a===e||a===Hn(e)||a===_a(Hn(e))))return s}const o=Fu(r[i]||s[i],e)||Fu(r.appContext[i],e);return!o&&n?s:o}}function Fu(i,e){return i&&(i[e]||i[Hn(e)]||i[_a(Hn(e))])}const Xl=i=>i?Yd(i)?jc(i)||i.proxy:Xl(i.parent):null,Gs=Tt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Xl(i.parent),$root:i=>Xl(i.root),$emit:i=>i.emit,$options:i=>Wc(i),$forceUpdate:i=>i.f||(i.f=()=>kc(i.update)),$nextTick:i=>i.n||(i.n=yd.bind(i.proxy)),$watch:i=>Yg.bind(i)}),Va=(i,e)=>i!==et&&!i.__isScriptSetup&&We(i,e),o_={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Va(n,e))return o[e]=1,n[e];if(r!==et&&We(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&We(c,e))return o[e]=3,s[e];if(t!==et&&We(t,e))return o[e]=4,t[e];jl&&(o[e]=0)}}const u=Gs[e];let h,f;if(u)return e==="$attrs"&&Xt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==et&&We(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,We(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Va(r,e)?(r[e]=t,!0):n!==et&&We(n,e)?(n[e]=t,!0):We(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==et&&We(i,o)||Va(e,o)||(a=s[0])&&We(a,o)||We(n,o)||We(Gs,o)||We(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:We(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let jl=!0;function a_(i){const e=Wc(i),t=i.proxy,n=i.ctx;jl=!1,e.beforeCreate&&Nu(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:x,unmounted:S,render:y,renderTracked:A,renderTriggered:L,errorCaptured:v,serverPrefetch:w,expose:D,inheritAttrs:W,components:B,directives:O,filters:F}=e;if(c&&l_(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const $ in o){const V=o[$];Fe(V)&&(n[$]=V.bind(t))}if(r){const $=r.call(t,t);st($)&&(i.data=uo($))}if(jl=!0,s)for(const $ in s){const V=s[$],ce=Fe(V)?V.bind(t,t):Fe(V.get)?V.get.bind(t,t):Ln,ue=!Fe(V)&&Fe(V.set)?V.set.bind(t):Ln,ve=mn({get:ce,set:ue});Object.defineProperty(n,$,{enumerable:!0,configurable:!0,get:()=>ve.value,set:H=>ve.value=H})}if(a)for(const $ in a)zd(a[$],n,t,$);if(l){const $=Fe(l)?l.call(t):l;Reflect.ownKeys($).forEach(V=>{Jr(V,$[V])})}u&&Nu(u,i,"c");function K($,V){Ie(V)?V.forEach(ce=>$(ce.bind(t))):V&&$(V.bind(t))}if(K(Jg,h),K(Gc,f),K(Qg,p),K(e_,g),K(Ld,d),K(Dd,m),K(r_,v),K(i_,A),K(n_,L),K(Od,b),K(Vc,S),K(t_,w),Ie(D))if(D.length){const $=i.exposed||(i.exposed={});D.forEach(V=>{Object.defineProperty($,V,{get:()=>t[V],set:ce=>t[V]=ce})})}else i.exposed||(i.exposed={});y&&i.render===Ln&&(i.render=y),W!=null&&(i.inheritAttrs=W),B&&(i.components=B),O&&(i.directives=O)}function l_(i,e,t=Ln,n=!1){Ie(i)&&(i=Yl(i));for(const r in i){const s=i[r];let o;st(s)?"default"in s?o=Lt(s.from||r,s.default,!0):o=Lt(s.from||r):o=Lt(s),Rt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Nu(i,e,t){yn(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function zd(i,e,t,n){const r=n.includes(".")?Cd(t,n):()=>t[n];if(pt(i)){const s=e[i];Fe(s)&&Wo(r,s)}else if(Fe(i))Wo(r,i.bind(t));else if(st(i))if(Ie(i))i.forEach(s=>zd(s,e,t,n));else{const s=Fe(i.handler)?i.handler.bind(t):e[i.handler];Fe(s)&&Wo(r,s,i)}}function Wc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>na(l,c,o,!0)),na(l,e,o)),st(e)&&s.set(e,l),l}function na(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&na(i,s,t,!0),r&&r.forEach(o=>na(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=c_[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const c_={data:zu,props:Zi,emits:Zi,methods:Zi,computed:Zi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Zi,directives:Zi,watch:f_,provide:zu,inject:u_};function zu(i,e){return e?i?function(){return Tt(Fe(i)?i.call(this,this):i,Fe(e)?e.call(this,this):e)}:e:i}function u_(i,e){return Zi(Yl(i),Yl(e))}function Yl(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Nt(i,e){return i?[...new Set([].concat(i,e))]:e}function Zi(i,e){return i?Tt(Tt(Object.create(null),i),e):e}function f_(i,e){if(!i)return e;if(!e)return i;const t=Tt(Object.create(null),i);for(const n in e)t[n]=Nt(i[n],e[n]);return t}function h_(i,e,t,n=!1){const r={},s={};Qo(s,Ta,1),i.propsDefaults=Object.create(null),Ud(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Rg(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function d_(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Xe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ya(i.emitsOptions,f))continue;const p=e[f];if(l)if(We(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Hn(f);r[g]=$l(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Ud(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!We(e,h)&&((u=ys(h))===h||!We(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=$l(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!We(e,h))&&(delete s[h],c=!0)}c&&li(i,"set","$attrs")}function Ud(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ho(l))continue;const c=e[l];let u;r&&We(r,u=Hn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ya(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Xe(t),c=a||et;for(let u=0;u<s.length;u++){const h=s[u];t[h]=$l(r,l,h,c[h],i,!We(c,h))}}return o}function $l(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=We(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(os(r),n=c[t]=l.call(null,e),cr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===ys(t))&&(n=!0))}return n}function Bd(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Fe(i)){const u=h=>{l=!0;const[f,p]=Bd(h,e,!0);Tt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return st(i)&&n.set(i,Yr),Yr;if(Ie(s))for(let u=0;u<s.length;u++){const h=Hn(s[u]);Uu(h)&&(o[h]=et)}else if(s)for(const u in s){const h=Hn(u);if(Uu(h)){const f=s[u],p=o[h]=Ie(f)||Fe(f)?{type:f}:Object.assign({},f);if(p){const g=Gu(Boolean,p.type),d=Gu(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||We(p,"default"))&&a.push(h)}}}const c=[o,a];return st(i)&&n.set(i,c),c}function Uu(i){return i[0]!=="$"}function Bu(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function ku(i,e){return Bu(i)===Bu(e)}function Gu(i,e){return Ie(e)?e.findIndex(t=>ku(t,i)):Fe(e)&&ku(e,i)?0:-1}const kd=i=>i[0]==="_"||i==="$stable",qc=i=>Ie(i)?i.map(Nn):[Nn(i)],p_=(i,e,t)=>{if(e._n)return e;const n=Gr((...r)=>qc(e(...r)),t);return n._c=!1,n},Gd=(i,e,t)=>{const n=i._ctx;for(const r in i){if(kd(r))continue;const s=i[r];if(Fe(s))e[r]=p_(r,s,n);else if(s!=null){const o=qc(s);e[r]=()=>o}}},Vd=(i,e)=>{const t=qc(e);i.slots.default=()=>t},m_=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Xe(e),Qo(e,"_",t)):Gd(e,i.slots={})}else i.slots={},e&&Vd(i,e);Qo(i.slots,Ta,1)},g_=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=et;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Tt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Gd(e,r)),o=e}else e&&(Vd(i,e),o={default:1});if(s)for(const a in r)!kd(a)&&!(a in o)&&delete r[a]};function Hd(){return{app:null,config:{isNativeTag:Hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let __=0;function x_(i,e){return function(n,r=null){Fe(n)||(n=Object.assign({},n)),r!=null&&!st(r)&&(r=null);const s=Hd(),o=new Set;let a=!1;const l=s.app={_uid:__++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:B_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Fe(c.install)?(o.add(c),c.install(l,...u)):Fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Mt(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,jc(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Kl(i,e,t,n,r=!1){if(Ie(i)){i.forEach((f,p)=>Kl(f,e&&(Ie(e)?e[p]:e),t,n,r));return}if(qo(n)&&!r)return;const s=n.shapeFlag&4?jc(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===et?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,We(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),Fe(l))Ei(l,a,12,[o,u]);else{const f=pt(l),p=Rt(l);if(f||p){const g=()=>{if(i.f){const d=f?We(h,l)?h[l]:u[l]:l.value;r?Ie(d)&&Pc(d,s):Ie(d)?d.includes(s)||d.push(s):f?(u[l]=[s],We(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,We(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,kt(g,t)):g()}}}const kt=jg;function v_(i){return y_(i)}function y_(i,e){const t=eg();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Ln,insertStaticContent:g}=i,d=(E,P,q,J=null,Q=null,fe=null,pe=!1,se=null,_e=!!P.dynamicChildren)=>{if(E===P)return;E&&!nr(E,P)&&(J=re(E),H(E,Q,fe,!0),E=null),P.patchFlag===-2&&(_e=!1,P.dynamicChildren=null);const{type:le,ref:T,shapeFlag:M}=P;switch(le){case Sa:m(E,P,q,J);break;case oi:_(E,P,q,J);break;case Ha:E==null&&b(P,q,J,pe);break;case En:B(E,P,q,J,Q,fe,pe,se,_e);break;default:M&1?y(E,P,q,J,Q,fe,pe,se,_e):M&6?O(E,P,q,J,Q,fe,pe,se,_e):(M&64||M&128)&&le.process(E,P,q,J,Q,fe,pe,se,_e,ge)}T!=null&&Q&&Kl(T,E&&E.ref,fe,P||E,!P)},m=(E,P,q,J)=>{if(E==null)n(P.el=a(P.children),q,J);else{const Q=P.el=E.el;P.children!==E.children&&c(Q,P.children)}},_=(E,P,q,J)=>{E==null?n(P.el=l(P.children||""),q,J):P.el=E.el},b=(E,P,q,J)=>{[E.el,E.anchor]=g(E.children,P,q,J,E.el,E.anchor)},x=({el:E,anchor:P},q,J)=>{let Q;for(;E&&E!==P;)Q=f(E),n(E,q,J),E=Q;n(P,q,J)},S=({el:E,anchor:P})=>{let q;for(;E&&E!==P;)q=f(E),r(E),E=q;r(P)},y=(E,P,q,J,Q,fe,pe,se,_e)=>{pe=pe||P.type==="svg",E==null?A(P,q,J,Q,fe,pe,se,_e):w(E,P,Q,fe,pe,se,_e)},A=(E,P,q,J,Q,fe,pe,se)=>{let _e,le;const{type:T,props:M,shapeFlag:U,transition:Z,dirs:ne}=E;if(_e=E.el=o(E.type,fe,M&&M.is,M),U&8?u(_e,E.children):U&16&&v(E.children,_e,null,J,Q,fe&&T!=="foreignObject",pe,se),ne&&Vi(E,null,J,"created"),L(_e,E,E.scopeId,pe,J),M){for(const be in M)be!=="value"&&!Ho(be)&&s(_e,be,null,M[be],fe,E.children,J,Q,I);"value"in M&&s(_e,"value",null,M.value),(le=M.onVnodeBeforeMount)&&On(le,J,E)}ne&&Vi(E,null,J,"beforeMount");const he=(!Q||Q&&!Q.pendingBranch)&&Z&&!Z.persisted;he&&Z.beforeEnter(_e),n(_e,P,q),((le=M&&M.onVnodeMounted)||he||ne)&&kt(()=>{le&&On(le,J,E),he&&Z.enter(_e),ne&&Vi(E,null,J,"mounted")},Q)},L=(E,P,q,J,Q)=>{if(q&&p(E,q),J)for(let fe=0;fe<J.length;fe++)p(E,J[fe]);if(Q){let fe=Q.subTree;if(P===fe){const pe=Q.vnode;L(E,pe,pe.scopeId,pe.slotScopeIds,Q.parent)}}},v=(E,P,q,J,Q,fe,pe,se,_e=0)=>{for(let le=_e;le<E.length;le++){const T=E[le]=se?yi(E[le]):Nn(E[le]);d(null,T,P,q,J,Q,fe,pe,se)}},w=(E,P,q,J,Q,fe,pe)=>{const se=P.el=E.el;let{patchFlag:_e,dynamicChildren:le,dirs:T}=P;_e|=E.patchFlag&16;const M=E.props||et,U=P.props||et;let Z;q&&Hi(q,!1),(Z=U.onVnodeBeforeUpdate)&&On(Z,q,P,E),T&&Vi(P,E,q,"beforeUpdate"),q&&Hi(q,!0);const ne=Q&&P.type!=="foreignObject";if(le?D(E.dynamicChildren,le,se,q,J,ne,fe):pe||V(E,P,se,null,q,J,ne,fe,!1),_e>0){if(_e&16)W(se,P,M,U,q,J,Q);else if(_e&2&&M.class!==U.class&&s(se,"class",null,U.class,Q),_e&4&&s(se,"style",M.style,U.style,Q),_e&8){const he=P.dynamicProps;for(let be=0;be<he.length;be++){const R=he[be],k=M[R],Me=U[R];(Me!==k||R==="value")&&s(se,R,k,Me,Q,E.children,q,J,I)}}_e&1&&E.children!==P.children&&u(se,P.children)}else!pe&&le==null&&W(se,P,M,U,q,J,Q);((Z=U.onVnodeUpdated)||T)&&kt(()=>{Z&&On(Z,q,P,E),T&&Vi(P,E,q,"updated")},J)},D=(E,P,q,J,Q,fe,pe)=>{for(let se=0;se<P.length;se++){const _e=E[se],le=P[se],T=_e.el&&(_e.type===En||!nr(_e,le)||_e.shapeFlag&70)?h(_e.el):q;d(_e,le,T,null,J,Q,fe,pe,!0)}},W=(E,P,q,J,Q,fe,pe)=>{if(q!==J){if(q!==et)for(const se in q)!Ho(se)&&!(se in J)&&s(E,se,q[se],null,pe,P.children,Q,fe,I);for(const se in J){if(Ho(se))continue;const _e=J[se],le=q[se];_e!==le&&se!=="value"&&s(E,se,le,_e,pe,P.children,Q,fe,I)}"value"in J&&s(E,"value",q.value,J.value)}},B=(E,P,q,J,Q,fe,pe,se,_e)=>{const le=P.el=E?E.el:a(""),T=P.anchor=E?E.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:Z}=P;Z&&(se=se?se.concat(Z):Z),E==null?(n(le,q,J),n(T,q,J),v(P.children,q,T,Q,fe,pe,se,_e)):M>0&&M&64&&U&&E.dynamicChildren?(D(E.dynamicChildren,U,q,Q,fe,pe,se),(P.key!=null||Q&&P===Q.subTree)&&Wd(E,P,!0)):V(E,P,q,T,Q,fe,pe,se,_e)},O=(E,P,q,J,Q,fe,pe,se,_e)=>{P.slotScopeIds=se,E==null?P.shapeFlag&512?Q.ctx.activate(P,q,J,pe,_e):F(P,q,J,Q,fe,pe,_e):j(E,P,_e)},F=(E,P,q,J,Q,fe,pe)=>{const se=E.component=P_(E,J,Q);if(ba(E)&&(se.ctx.renderer=ge),L_(se),se.asyncDep){if(Q&&Q.registerDep(se,K),!E.el){const _e=se.subTree=Mt(oi);_(null,_e,P,q)}return}K(se,E,P,q,Q,fe,pe)},j=(E,P,q)=>{const J=P.component=E.component;if(Wg(E,P,q))if(J.asyncDep&&!J.asyncResolved){$(J,P,q);return}else J.next=P,Ug(J.update),J.update();else P.el=E.el,J.vnode=P},K=(E,P,q,J,Q,fe,pe)=>{const se=()=>{if(E.isMounted){let{next:T,bu:M,u:U,parent:Z,vnode:ne}=E,he=T,be;Hi(E,!1),T?(T.el=ne.el,$(E,T,pe)):T=ne,M&&Ba(M),(be=T.props&&T.props.onVnodeBeforeUpdate)&&On(be,Z,T,ne),Hi(E,!0);const R=ka(E),k=E.subTree;E.subTree=R,d(k,R,h(k.el),re(k),E,Q,fe),T.el=R.el,he===null&&qg(E,R.el),U&&kt(U,Q),(be=T.props&&T.props.onVnodeUpdated)&&kt(()=>On(be,Z,T,ne),Q)}else{let T;const{el:M,props:U}=P,{bm:Z,m:ne,parent:he}=E,be=qo(P);if(Hi(E,!1),Z&&Ba(Z),!be&&(T=U&&U.onVnodeBeforeMount)&&On(T,he,P),Hi(E,!0),M&&Te){const R=()=>{E.subTree=ka(E),Te(M,E.subTree,E,Q,null)};be?P.type.__asyncLoader().then(()=>!E.isUnmounted&&R()):R()}else{const R=E.subTree=ka(E);d(null,R,q,J,E,Q,fe),P.el=R.el}if(ne&&kt(ne,Q),!be&&(T=U&&U.onVnodeMounted)){const R=P;kt(()=>On(T,he,R),Q)}(P.shapeFlag&256||he&&qo(he.vnode)&&he.vnode.shapeFlag&256)&&E.a&&kt(E.a,Q),E.isMounted=!0,P=q=J=null}},_e=E.effect=new Ic(se,()=>kc(le),E.scope),le=E.update=()=>_e.run();le.id=E.uid,Hi(E,!0),le()},$=(E,P,q)=>{P.component=E;const J=E.vnode.props;E.vnode=P,E.next=null,d_(E,P.props,J,q),g_(E,P.children,q),bs(),Lu(),Ms()},V=(E,P,q,J,Q,fe,pe,se,_e=!1)=>{const le=E&&E.children,T=E?E.shapeFlag:0,M=P.children,{patchFlag:U,shapeFlag:Z}=P;if(U>0){if(U&128){ue(le,M,q,J,Q,fe,pe,se,_e);return}else if(U&256){ce(le,M,q,J,Q,fe,pe,se,_e);return}}Z&8?(T&16&&I(le,Q,fe),M!==le&&u(q,M)):T&16?Z&16?ue(le,M,q,J,Q,fe,pe,se,_e):I(le,Q,fe,!0):(T&8&&u(q,""),Z&16&&v(M,q,J,Q,fe,pe,se,_e))},ce=(E,P,q,J,Q,fe,pe,se,_e)=>{E=E||Yr,P=P||Yr;const le=E.length,T=P.length,M=Math.min(le,T);let U;for(U=0;U<M;U++){const Z=P[U]=_e?yi(P[U]):Nn(P[U]);d(E[U],Z,q,null,Q,fe,pe,se,_e)}le>T?I(E,Q,fe,!0,!1,M):v(P,q,J,Q,fe,pe,se,_e,M)},ue=(E,P,q,J,Q,fe,pe,se,_e)=>{let le=0;const T=P.length;let M=E.length-1,U=T-1;for(;le<=M&&le<=U;){const Z=E[le],ne=P[le]=_e?yi(P[le]):Nn(P[le]);if(nr(Z,ne))d(Z,ne,q,null,Q,fe,pe,se,_e);else break;le++}for(;le<=M&&le<=U;){const Z=E[M],ne=P[U]=_e?yi(P[U]):Nn(P[U]);if(nr(Z,ne))d(Z,ne,q,null,Q,fe,pe,se,_e);else break;M--,U--}if(le>M){if(le<=U){const Z=U+1,ne=Z<T?P[Z].el:J;for(;le<=U;)d(null,P[le]=_e?yi(P[le]):Nn(P[le]),q,ne,Q,fe,pe,se,_e),le++}}else if(le>U)for(;le<=M;)H(E[le],Q,fe,!0),le++;else{const Z=le,ne=le,he=new Map;for(le=ne;le<=U;le++){const we=P[le]=_e?yi(P[le]):Nn(P[le]);we.key!=null&&he.set(we.key,le)}let be,R=0;const k=U-ne+1;let Me=!1,Ee=0;const Se=new Array(k);for(le=0;le<k;le++)Se[le]=0;for(le=Z;le<=M;le++){const we=E[le];if(R>=k){H(we,Q,fe,!0);continue}let Le;if(we.key!=null)Le=he.get(we.key);else for(be=ne;be<=U;be++)if(Se[be-ne]===0&&nr(we,P[be])){Le=be;break}Le===void 0?H(we,Q,fe,!0):(Se[Le-ne]=le+1,Le>=Ee?Ee=Le:Me=!0,d(we,P[Le],q,null,Q,fe,pe,se,_e),R++)}const Ae=Me?b_(Se):Yr;for(be=Ae.length-1,le=k-1;le>=0;le--){const we=ne+le,Le=P[we],ze=we+1<T?P[we+1].el:J;Se[le]===0?d(null,Le,q,ze,Q,fe,pe,se,_e):Me&&(be<0||le!==Ae[be]?ve(Le,q,ze,2):be--)}}},ve=(E,P,q,J,Q=null)=>{const{el:fe,type:pe,transition:se,children:_e,shapeFlag:le}=E;if(le&6){ve(E.component.subTree,P,q,J);return}if(le&128){E.suspense.move(P,q,J);return}if(le&64){pe.move(E,P,q,ge);return}if(pe===En){n(fe,P,q);for(let M=0;M<_e.length;M++)ve(_e[M],P,q,J);n(E.anchor,P,q);return}if(pe===Ha){x(E,P,q);return}if(J!==2&&le&1&&se)if(J===0)se.beforeEnter(fe),n(fe,P,q),kt(()=>se.enter(fe),Q);else{const{leave:M,delayLeave:U,afterLeave:Z}=se,ne=()=>n(fe,P,q),he=()=>{M(fe,()=>{ne(),Z&&Z()})};U?U(fe,ne,he):he()}else n(fe,P,q)},H=(E,P,q,J=!1,Q=!1)=>{const{type:fe,props:pe,ref:se,children:_e,dynamicChildren:le,shapeFlag:T,patchFlag:M,dirs:U}=E;if(se!=null&&Kl(se,null,q,E,!0),T&256){P.ctx.deactivate(E);return}const Z=T&1&&U,ne=!qo(E);let he;if(ne&&(he=pe&&pe.onVnodeBeforeUnmount)&&On(he,P,E),T&6)N(E.component,q,J);else{if(T&128){E.suspense.unmount(q,J);return}Z&&Vi(E,null,P,"beforeUnmount"),T&64?E.type.remove(E,P,q,Q,ge,J):le&&(fe!==En||M>0&&M&64)?I(le,P,q,!1,!0):(fe===En&&M&384||!Q&&T&16)&&I(_e,P,q),J&&ie(E)}(ne&&(he=pe&&pe.onVnodeUnmounted)||Z)&&kt(()=>{he&&On(he,P,E),Z&&Vi(E,null,P,"unmounted")},q)},ie=E=>{const{type:P,el:q,anchor:J,transition:Q}=E;if(P===En){de(q,J);return}if(P===Ha){S(E);return}const fe=()=>{r(q),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(E.shapeFlag&1&&Q&&!Q.persisted){const{leave:pe,delayLeave:se}=Q,_e=()=>pe(q,fe);se?se(E.el,fe,_e):_e()}else fe()},de=(E,P)=>{let q;for(;E!==P;)q=f(E),r(E),E=q;r(P)},N=(E,P,q)=>{const{bum:J,scope:Q,update:fe,subTree:pe,um:se}=E;J&&Ba(J),Q.stop(),fe&&(fe.active=!1,H(pe,E,P,q)),se&&kt(se,P),kt(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},I=(E,P,q,J=!1,Q=!1,fe=0)=>{for(let pe=fe;pe<E.length;pe++)H(E[pe],P,q,J,Q)},re=E=>E.shapeFlag&6?re(E.component.subTree):E.shapeFlag&128?E.suspense.next():f(E.anchor||E.el),ae=(E,P,q)=>{E==null?P._vnode&&H(P._vnode,null,null,!0):d(P._vnode||null,E,P,null,null,null,q),Lu(),Md(),P._vnode=E},ge={p:d,um:H,m:ve,r:ie,mt:F,mc:v,pc:V,pbc:D,n:re,o:i};let me,Te;return e&&([me,Te]=e(ge)),{render:ae,hydrate:me,createApp:x_(ae,me)}}function Hi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Wd(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yi(r[s]),a.el=o.el),t||Wd(o,a)),a.type===Sa&&(a.el=o.el)}}function b_(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const M_=i=>i.__isTeleport,En=Symbol(void 0),Sa=Symbol(void 0),oi=Symbol(void 0),Ha=Symbol(void 0),Vs=[];let Rn=null;function ss(i=!1){Vs.push(Rn=i?null:[])}function S_(){Vs.pop(),Rn=Vs[Vs.length-1]||null}let Js=1;function Vu(i){Js+=i}function qd(i){return i.dynamicChildren=Js>0?Rn||Yr:null,S_(),Js>0&&Rn&&Rn.push(i),i}function wa(i,e,t,n,r,s){return qd(ia(i,e,t,n,r,s,!0))}function Xd(i,e,t,n,r){return qd(Mt(i,e,t,n,r,!0))}function Zl(i){return i?i.__v_isVNode===!0:!1}function nr(i,e){return i.type===e.type&&i.key===e.key}const Ta="__vInternal",jd=({key:i})=>i??null,Xo=({ref:i,ref_key:e,ref_for:t})=>i!=null?pt(i)||Rt(i)||Fe(i)?{i:gn,r:i,k:e,f:!!t}:i:null;function ia(i,e=null,t=null,n=0,r=null,s=i===En?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&jd(e),ref:e&&Xo(e),scopeId:Td,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:gn};return a?(Xc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),Js>0&&!o&&Rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rn.push(l),l}const Mt=w_;function w_(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Fd)&&(i=oi),Zl(i)){const a=Li(i,e,!0);return t&&Xc(a,t),Js>0&&!s&&Rn&&(a.shapeFlag&6?Rn[Rn.indexOf(i)]=a:Rn.push(a)),a.patchFlag|=-2,a}if(N_(i)&&(i=i.__vccOpts),e){e=T_(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=Cc(a)),st(l)&&(fd(l)&&!Ie(l)&&(l=Tt({},l)),e.style=Ec(l))}const o=pt(i)?1:Xg(i)?128:M_(i)?64:st(i)?4:Fe(i)?2:0;return ia(i,e,t,n,r,o,s,!0)}function T_(i){return i?fd(i)||Ta in i?Tt({},i):i:null}function Li(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?E_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&jd(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(Xo(e)):[r,Xo(e)]:Xo(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==En?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Li(i.ssContent),ssFallback:i.ssFallback&&Li(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function jo(i=" ",e=0){return Mt(Sa,null,i,e)}function Nn(i){return i==null||typeof i=="boolean"?Mt(oi):Ie(i)?Mt(En,null,i.slice()):typeof i=="object"?yi(i):Mt(Sa,null,String(i))}function yi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Li(i)}function Xc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Xc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Ta in e)?e._ctx=gn:r===3&&gn&&(gn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),n&64?(t=16,e=[jo(e)]):t=8);i.children=e,i.shapeFlag|=t}function E_(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Cc([e.class,n.class]));else if(r==="style")e.style=Ec([e.style,n.style]);else if(pa(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function On(i,e,t,n=null){yn(i,e,7,[t,n])}const C_=Hd();let A_=0;function P_(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||C_,s={uid:A_++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new tg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(n,r),emitsOptions:wd(n,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:n.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Gg.bind(null,s),i.ce&&i.ce(s),s}let at=null;const R_=()=>at||gn,os=i=>{at=i,i.scope.on()},cr=()=>{at&&at.scope.off(),at=null};function Yd(i){return i.vnode.shapeFlag&4}let Qs=!1;function L_(i,e=!1){Qs=e;const{props:t,children:n}=i.vnode,r=Yd(i);h_(i,t,r,e),m_(i,n);const s=r?D_(i,e):void 0;return Qs=!1,s}function D_(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=hd(new Proxy(i.ctx,o_));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?O_(i):null;os(i),bs();const s=Ei(n,i,0,[i.props,r]);if(Ms(),cr(),Qh(s)){if(s.then(cr,cr),e)return s.then(o=>{Hu(i,o,e)}).catch(o=>{va(o,i,0)});i.asyncDep=s}else Hu(i,s,e)}else $d(i,e)}function Hu(i,e,t){Fe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:st(e)&&(i.setupState=_d(e)),$d(i,t)}let Wu;function $d(i,e,t){const n=i.type;if(!i.render){if(!e&&Wu&&!n.render){const r=n.template||Wc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Tt(Tt({isCustomElement:s,delimiters:a},o),l);n.render=Wu(r,c)}}i.render=n.render||Ln}os(i),bs(),a_(i),Ms(),cr()}function I_(i){return new Proxy(i.attrs,{get(e,t){return Xt(i,"get","$attrs"),e[t]}})}function O_(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=I_(i))},slots:i.slots,emit:i.emit,expose:e}}function jc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(_d(hd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Gs)return Gs[t](i)},has(e,t){return t in e||t in Gs}}))}function F_(i,e=!0){return Fe(i)?i.displayName||i.name:i.name||e&&i.__name}function N_(i){return Fe(i)&&"__vccOpts"in i}const mn=(i,e)=>Fg(i,e,Qs);function Yc(i,e,t){const n=arguments.length;return n===2?st(e)&&!Ie(e)?Zl(e)?Mt(i,null,[e]):Mt(i,e):Mt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Zl(t)&&(t=[t]),Mt(i,e,t))}const z_=Symbol(""),U_=()=>Lt(z_),B_="3.2.47",k_="http://www.w3.org/2000/svg",ir=typeof document<"u"?document:null,qu=ir&&ir.createElement("template"),G_={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?ir.createElementNS(k_,i):ir.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>ir.createTextNode(i),createComment:i=>ir.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ir.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{qu.innerHTML=n?`<svg>${i}</svg>`:i;const a=qu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function V_(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function H_(i,e,t){const n=i.style,r=pt(t);if(t&&!r){if(e&&!pt(e))for(const s in e)t[s]==null&&Jl(n,s,"");for(const s in t)Jl(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Xu=/\s*!important$/;function Jl(i,e,t){if(Ie(t))t.forEach(n=>Jl(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=W_(i,e);Xu.test(t)?i.setProperty(ys(n),t.replace(Xu,""),"important"):i[n]=t}}const ju=["Webkit","Moz","ms"],Wa={};function W_(i,e){const t=Wa[e];if(t)return t;let n=Hn(e);if(n!=="filter"&&n in i)return Wa[e]=n;n=_a(n);for(let r=0;r<ju.length;r++){const s=ju[r]+n;if(s in i)return Wa[e]=s}return e}const Yu="http://www.w3.org/1999/xlink";function q_(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Yu,e.slice(6,e.length)):i.setAttributeNS(Yu,e,t);else{const s=Vm(e);t==null||s&&!Jh(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function X_(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Jh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function j_(i,e,t,n){i.addEventListener(e,t,n)}function Y_(i,e,t,n){i.removeEventListener(e,t,n)}function $_(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=K_(e);if(n){const c=s[e]=Q_(n,r);j_(i,a,c,l)}else o&&(Y_(i,a,o,l),s[e]=void 0)}}const $u=/(?:Once|Passive|Capture)$/;function K_(i){let e;if($u.test(i)){e={};let n;for(;n=i.match($u);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):ys(i.slice(2)),e]}let qa=0;const Z_=Promise.resolve(),J_=()=>qa||(Z_.then(()=>qa=0),qa=Date.now());function Q_(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;yn(e0(n,t.value),e,5,[n])};return t.value=i,t.attached=J_(),t}function e0(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Ku=/^on[a-z]/,t0=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?V_(i,n,r):e==="style"?H_(i,t,n):pa(e)?Ac(e)||$_(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n0(i,e,n,r))?X_(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),q_(i,e,n,r))};function n0(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Ku.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Ku.test(e)&&pt(t)?!1:e in i}const di="transition",Ts="animation",$c=(i,{slots:e})=>Yc(Ad,i0(i),e);$c.displayName="Transition";const Kd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};$c.props=Tt({},Ad.props,Kd);const Wi=(i,e=[])=>{Ie(i)?i.forEach(t=>t(...e)):i&&i(...e)},Zu=i=>i?Ie(i)?i.some(e=>e.length>1):i.length>1:!1;function i0(i){const e={};for(const B in i)B in Kd||(e[B]=i[B]);if(i.css===!1)return e;const{name:t="v",type:n,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=i,g=r0(r),d=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:x,onLeave:S,onLeaveCancelled:y,onBeforeAppear:A=_,onAppear:L=b,onAppearCancelled:v=x}=e,w=(B,O,F)=>{qi(B,O?u:a),qi(B,O?c:o),F&&F()},D=(B,O)=>{B._isLeaving=!1,qi(B,h),qi(B,p),qi(B,f),O&&O()},W=B=>(O,F)=>{const j=B?L:b,K=()=>w(O,B,F);Wi(j,[O,K]),Ju(()=>{qi(O,B?l:s),pi(O,B?u:a),Zu(j)||Qu(O,n,d,K)})};return Tt(e,{onBeforeEnter(B){Wi(_,[B]),pi(B,s),pi(B,o)},onBeforeAppear(B){Wi(A,[B]),pi(B,l),pi(B,c)},onEnter:W(!1),onAppear:W(!0),onLeave(B,O){B._isLeaving=!0;const F=()=>D(B,O);pi(B,h),a0(),pi(B,f),Ju(()=>{B._isLeaving&&(qi(B,h),pi(B,p),Zu(S)||Qu(B,n,m,F))}),Wi(S,[B,F])},onEnterCancelled(B){w(B,!1),Wi(x,[B])},onAppearCancelled(B){w(B,!0),Wi(v,[B])},onLeaveCancelled(B){D(B),Wi(y,[B])}})}function r0(i){if(i==null)return null;if(st(i))return[Xa(i.enter),Xa(i.leave)];{const e=Xa(i);return[e,e]}}function Xa(i){return Qm(i)}function pi(i,e){e.split(/\s+/).forEach(t=>t&&i.classList.add(t)),(i._vtc||(i._vtc=new Set)).add(e)}function qi(i,e){e.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const{_vtc:t}=i;t&&(t.delete(e),t.size||(i._vtc=void 0))}function Ju(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let s0=0;function Qu(i,e,t,n){const r=i._endId=++s0,s=()=>{r===i._endId&&n()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=o0(i,e);if(!o)return n();const c=o+"end";let u=0;const h=()=>{i.removeEventListener(c,f),s()},f=p=>{p.target===i&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),i.addEventListener(c,f)}function o0(i,e){const t=window.getComputedStyle(i),n=g=>(t[g]||"").split(", "),r=n(`${di}Delay`),s=n(`${di}Duration`),o=ef(r,s),a=n(`${Ts}Delay`),l=n(`${Ts}Duration`),c=ef(a,l);let u=null,h=0,f=0;e===di?o>0&&(u=di,h=o,f=s.length):e===Ts?c>0&&(u=Ts,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?di:Ts:null,f=u?u===di?s.length:l.length:0);const p=u===di&&/\b(transform|all)(,|$)/.test(n(`${di}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function ef(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max(...e.map((t,n)=>tf(t)+tf(i[n])))}function tf(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function a0(){return document.body.offsetHeight}const l0=Tt({patchProp:t0},G_);let nf;function c0(){return nf||(nf=v_(l0))}const u0=(...i)=>{const e=c0().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=f0(n);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function f0(i){return pt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="149",Sr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},h0=0,rf=1,d0=2,Zd=1,p0=2,Ns=3,Di=0,tn=1,ii=2,Ci=0,Qr=1,sf=2,of=3,af=4,m0=5,Vr=100,g0=101,_0=102,lf=103,cf=104,x0=200,v0=201,y0=202,b0=203,Jd=204,Qd=205,M0=206,S0=207,w0=208,T0=209,E0=210,C0=0,A0=1,P0=2,Ql=3,R0=4,L0=5,D0=6,I0=7,ep=0,O0=1,F0=2,ai=0,N0=1,z0=2,U0=3,B0=4,k0=5,tp=300,as=301,ls=302,ec=303,tc=304,Ea=306,nc=1e3,An=1001,ic=1002,Ut=1003,uf=1004,ja=1005,dn=1006,G0=1007,eo=1008,mr=1009,V0=1010,H0=1011,np=1012,W0=1013,sr=1014,or=1015,to=1016,q0=1017,X0=1018,es=1020,j0=1021,Pn=1023,Y0=1024,$0=1025,ur=1026,cs=1027,K0=1028,Z0=1029,J0=1030,Q0=1031,ex=1033,Ya=33776,$a=33777,Ka=33778,Za=33779,ff=35840,hf=35841,df=35842,pf=35843,tx=36196,mf=37492,gf=37496,_f=37808,xf=37809,vf=37810,yf=37811,bf=37812,Mf=37813,Sf=37814,wf=37815,Tf=37816,Ef=37817,Cf=37818,Af=37819,Pf=37820,Rf=37821,Ja=36492,nx=36283,Lf=36284,Df=36285,If=36286,gr=3e3,Je=3001,ix=3200,rx=3201,sx=0,ox=1,Fn="srgb",no="srgb-linear",Qa=7680,ax=519,Of=35044,Ff="300 es",rc=1035;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,Nf=180/Math.PI;function fo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function lx(i,e){return(i%e+e)%e}function tl(i,e,t){return(1-t)*i+t*e}function zf(i){return(i&i-1)===0&&i!==0}function sc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mo(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(){en.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=r[0],m=r[3],_=r[6],b=r[1],x=r[4],S=r[7],y=r[2],A=r[5],L=r[8];return s[0]=o*d+a*b+l*y,s[3]=o*m+a*x+l*A,s[6]=o*_+a*S+l*L,s[1]=c*d+u*b+h*y,s[4]=c*m+u*x+h*A,s[7]=c*_+u*S+h*L,s[2]=f*d+p*b+g*y,s[5]=f*m+p*x+g*A,s[8]=f*_+p*S+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new en;function ip(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const il={[Fn]:{[no]:fr},[no]:{[Fn]:Yo}},Ft={legacyMode:!0,get workingColorSpace(){return no},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(il[e]&&il[e][t]!==void 0){const n=il[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},Mn={h:0,s:0,l:0},So={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function wo(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ft.workingColorSpace){if(e=lx(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=rl(o,s,e+1/3),this.g=rl(o,s,e),this.b=rl(o,s,e-1/3)}return Ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ft.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ft.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Fn){const n=rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ft.fromWorkingColorSpace(wo(this,ht),e),Gt(ht.r*255,0,255)<<16^Gt(ht.g*255,0,255)<<8^Gt(ht.b*255,0,255)<<0}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(wo(this,ht),t);const n=ht.r,r=ht.g,s=ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(wo(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Fn){return Ft.fromWorkingColorSpace(wo(this,ht),e),e!==Fn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(So);const n=tl(Mn.h,So.h,t),r=tl(Mn.s,So.s,t),s=tl(Mn.l,So.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}tt.NAMES=rp;let Tr;class sp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=ra("canvas")),Tr.width=e.width,Tr.height=e.height;const n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ra("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class op{constructor(e=null){this.isSource=!0,this.uuid=fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sl(r[o].image)):s.push(sl(r[o]))}else s=sl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cx=0;class nn extends br{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=An,r=An,s=dn,o=eo,a=Pn,l=mr,c=nn.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=fo(),this.name="",this.source=new op(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new en,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=tp;nn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(p+1)/2,y=(_+1)/2,A=(u+f)/4,L=(h+d)/4,v=(g+m)/4;return x>S&&x>y?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=L/n):S>y?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=A/r,s=v/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=L/s,r=v/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends br{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new nn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new op(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ap extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ux extends nn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-a;const _=l*f+c*p+u*g+h*d,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),A=Math.atan2(y,_*b);m=Math.sin(m*A)/y,a=Math.sin(a*A)/y}const S=a*b;if(l=l*m+f*S,c=c*m+p*S,u=u*m+g*S,h=h*m+d*S,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ol.copy(this).projectOnVector(e),this.sub(ol)}reflect(e){return this.sub(ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new Y,Uf=new xr;class ho{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Xi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xi)}else n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox),al.applyMatrix4(e.matrixWorld),this.union(al);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),To.subVectors(this.max,Es),Er.subVectors(e.a,Es),Cr.subVectors(e.b,Es),Ar.subVectors(e.c,Es),mi.subVectors(Cr,Er),gi.subVectors(Ar,Cr),ji.subVectors(Er,Ar);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-ji.z,ji.y,mi.z,0,-mi.x,gi.z,0,-gi.x,ji.z,0,-ji.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-ji.y,ji.x,0];return!ll(t,Er,Cr,Ar,To)||(t=[1,0,0,0,1,0,0,0,1],!ll(t,Er,Cr,Ar,To))?!1:(Eo.crossVectors(mi,gi),t=[Eo.x,Eo.y,Eo.z],ll(t,Er,Cr,Ar,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Xi=new Y,al=new ho,Er=new Y,Cr=new Y,Ar=new Y,mi=new Y,gi=new Y,ji=new Y,Es=new Y,To=new Y,Eo=new Y,Yi=new Y;function ll(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Yi.fromArray(i,s);const a=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fx=new ho,Cs=new Y,cl=new Y;class Zc{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Cs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(cl)),this.expandByPoint(Cs.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new Y,ul=new Y,Co=new Y,_i=new Y,fl=new Y,Ao=new Y,hl=new Y;class hx{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.direction).multiplyScalar(t).add(this.origin),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ul.copy(e).add(t).multiplyScalar(.5),Co.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(ul);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Co),a=_i.dot(this.direction),l=-_i.dot(Co),c=_i.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Co).multiplyScalar(f).add(ul),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){fl.subVectors(t,e),Ao.subVectors(n,e),hl.crossVectors(fl,Ao);let o=this.direction.dot(hl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Ao.crossVectors(_i,Ao));if(l<0)return null;const c=a*this.direction.dot(fl.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dx,e,px)}lookAt(e,t,n){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),xi.crossVectors(n,Kt),xi.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),xi.crossVectors(n,Kt)),xi.normalize(),Po.crossVectors(Kt,xi),r[0]=xi.x,r[4]=Po.x,r[8]=Kt.x,r[1]=xi.y,r[5]=Po.y,r[9]=Kt.y,r[2]=xi.z,r[6]=Po.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],b=n[3],x=n[7],S=n[11],y=n[15],A=r[0],L=r[4],v=r[8],w=r[12],D=r[1],W=r[5],B=r[9],O=r[13],F=r[2],j=r[6],K=r[10],$=r[14],V=r[3],ce=r[7],ue=r[11],ve=r[15];return s[0]=o*A+a*D+l*F+c*V,s[4]=o*L+a*W+l*j+c*ce,s[8]=o*v+a*B+l*K+c*ue,s[12]=o*w+a*O+l*$+c*ve,s[1]=u*A+h*D+f*F+p*V,s[5]=u*L+h*W+f*j+p*ce,s[9]=u*v+h*B+f*K+p*ue,s[13]=u*w+h*O+f*$+p*ve,s[2]=g*A+d*D+m*F+_*V,s[6]=g*L+d*W+m*j+_*ce,s[10]=g*v+d*B+m*K+_*ue,s[14]=g*w+d*O+m*$+_*ve,s[3]=b*A+x*D+S*F+y*V,s[7]=b*L+x*W+S*j+y*ce,s[11]=b*v+x*B+S*K+y*ue,s[15]=b*w+x*O+S*$+y*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+d*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],b=h*m*c-d*f*c+d*l*p-a*m*p-h*l*_+a*f*_,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*_-o*f*_,S=u*d*c-g*h*c+g*a*p-o*d*p-u*a*_+o*h*_,y=g*h*l-u*d*l-g*a*f+o*d*f+u*a*m-o*h*m,A=t*b+n*x+r*S+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=b*L,e[1]=(d*f*s-h*m*s-d*r*p+n*m*p+h*r*_-n*f*_)*L,e[2]=(a*m*s-d*l*s+d*r*c-n*m*c-a*r*_+n*l*_)*L,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*L,e[4]=x*L,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*_+t*f*_)*L,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*_-t*l*_)*L,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*L,e[8]=S*L,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*L,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*L,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*L,e[12]=y*L,e[13]=(u*d*r-g*h*r+g*n*f-t*d*f-u*n*m+t*h*m)*L,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*m-t*a*m)*L,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,d=o*u,m=o*h,_=a*h,b=l*c,x=l*u,S=l*h,y=n.x,A=n.y,L=n.z;return r[0]=(1-(d+_))*y,r[1]=(p+S)*y,r[2]=(g-x)*y,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+_))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+x)*L,r[9]=(m-b)*L,r[10]=(1-(f+d))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pr=new Y,Sn=new wt,dx=new Y(0,0,0),px=new Y(1,1,1),xi=new Y,Po=new Y,Kt=new Y,Bf=new wt,kf=new xr;class Ca{constructor(e=0,t=0,n=0,r=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mx=0;const Gf=new Y,Rr=new xr,$n=new wt,Ro=new Y,As=new Y,gx=new Y,_x=new xr,Vf=new Y(1,0,0),Hf=new Y(0,1,0),Wf=new Y(0,0,1),xx={type:"added"},qf={type:"removed"};class rn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new Y,t=new Ca,n=new xr,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new en}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Vf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Wf,e)}translateOnAxis(e,t){return Gf.copy(e).applyQuaternion(this.quaternion),this.position.add(Gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(As,Ro,this.up):$n.lookAt(Ro,As,this.up),this.quaternion.setFromRotationMatrix($n),r&&($n.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix($n),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(xx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(qf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,_x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rn.DEFAULT_UP=new Y(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new Y,Kn=new Y,dl=new Y,Zn=new Y,Lr=new Y,Dr=new Y,Xf=new Y,pl=new Y,ml=new Y,gl=new Y;class ni{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wn.subVectors(r,t),Kn.subVectors(n,t),dl.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Kn),l=wn.dot(dl),c=Kn.dot(Kn),u=Kn.dot(dl),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Zn),l.set(0,0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Kn.subVectors(e,t),wn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return ni.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,n),Dr.subVectors(s,n),pl.subVectors(e,n);const l=Lr.dot(pl),c=Dr.dot(pl);if(l<=0&&c<=0)return t.copy(n);ml.subVectors(e,r);const u=Lr.dot(ml),h=Dr.dot(ml);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Lr,o);gl.subVectors(e,s);const p=Lr.dot(gl),g=Dr.dot(gl);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Dr,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xf.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Xf,a);const _=1/(m+d+f);return o=d*_,a=f*_,t.copy(n).addScaledVector(Lr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vx=0;class Aa extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=Qr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cp extends Aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new Y,Lo=new Be;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Of,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Of&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class up extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fp extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yx=0;const un=new wt,_l=new rn,Ir=new Y,Zt=new ho,Ps=new ho,vt=new Y;class Ni extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ip(e)?fp:up)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new en().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Zt.min,Ps.min),Zt.expandByPoint(vt),vt.addVectors(Zt.max,Ps.max),Zt.expandByPoint(vt)):(Zt.expandByPoint(Ps.min),Zt.expandByPoint(Ps.max))}Zt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),vt.add(Ir)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new Y,u[D]=new Y;const h=new Y,f=new Y,p=new Y,g=new Be,d=new Be,m=new Be,_=new Y,b=new Y;function x(D,W,B){h.fromArray(r,D*3),f.fromArray(r,W*3),p.fromArray(r,B*3),g.fromArray(o,D*2),d.fromArray(o,W*2),m.fromArray(o,B*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const O=1/(d.x*m.y-m.x*d.y);isFinite(O)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(O),b.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(O),c[D].add(_),c[W].add(_),c[B].add(_),u[D].add(b),u[W].add(b),u[B].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let D=0,W=S.length;D<W;++D){const B=S[D],O=B.start,F=B.count;for(let j=O,K=O+F;j<K;j+=3)x(n[j+0],n[j+1],n[j+2])}const y=new Y,A=new Y,L=new Y,v=new Y;function w(D){L.fromArray(s,D*3),v.copy(L);const W=c[D];y.copy(W),y.sub(L.multiplyScalar(L.dot(W))).normalize(),A.crossVectors(v,W);const O=A.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=O}for(let D=0,W=S.length;D<W;++D){const B=S[D],O=B.start,F=B.count;for(let j=O,K=O+F;j<K;j+=3)w(n[j+0]),w(n[j+1]),w(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,h=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new kn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ni,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const jf=new wt,Or=new hx,xl=new Zc,Rs=new Y,Ls=new Y,Ds=new Y,vl=new Y,Do=new Y,Io=new Be,Oo=new Be,Fo=new Be,yl=new Y,No=new Y;class ri extends rn{constructor(e=new Ni,t=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Do.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(vl.fromBufferAttribute(h,e),o?Do.addScaledVector(vl,u):Do.addScaledVector(vl.sub(t),u))}t.add(Do)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),e.ray.intersectsSphere(xl)===!1)||(jf.copy(s).invert(),Or.copy(e.ray).applyMatrix4(jf),n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,S=b;x<S;x+=3){const y=a.getX(x),A=a.getX(x+1),L=a.getX(x+2);o=zo(this,m,e,Or,c,u,y,A,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),b=a.getX(d+1),x=a.getX(d+2);o=zo(this,r,e,Or,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,S=b;x<S;x+=3){const y=x,A=x+1,L=x+2;o=zo(this,m,e,Or,c,u,y,A,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,b=d+1,x=d+2;o=zo(this,r,e,Or,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function bx(i,e,t,n,r,s,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Di,a),l===null)return null;No.copy(a),No.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:i}}function zo(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,Rs),i.getVertexPosition(a,Ls),i.getVertexPosition(l,Ds);const c=bx(i,e,t,n,Rs,Ls,Ds,yl);if(c){r&&(Io.fromBufferAttribute(r,o),Oo.fromBufferAttribute(r,a),Fo.fromBufferAttribute(r,l),c.uv=ni.getUV(yl,Rs,Ls,Ds,Io,Oo,Fo,new Be)),s&&(Io.fromBufferAttribute(s,o),Oo.fromBufferAttribute(s,a),Fo.fromBufferAttribute(s,l),c.uv2=ni.getUV(yl,Rs,Ls,Ds,Io,Oo,Fo,new Be));const u={a:o,b:a,c:l,normal:new Y,materialIndex:0};ni.getNormal(Rs,Ls,Ds,u.normal),c.face=u}return c}class po extends Ni{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(h,2));function g(d,m,_,b,x,S,y,A,L,v,w){const D=S/L,W=y/v,B=S/2,O=y/2,F=A/2,j=L+1,K=v+1;let $=0,V=0;const ce=new Y;for(let ue=0;ue<K;ue++){const ve=ue*W-O;for(let H=0;H<j;H++){const ie=H*D-B;ce[d]=ie*b,ce[m]=ve*x,ce[_]=F,c.push(ce.x,ce.y,ce.z),ce[d]=0,ce[m]=0,ce[_]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(H/L),h.push(1-ue/v),$+=1}}for(let ue=0;ue<v;ue++)for(let ve=0;ve<L;ve++){const H=f+ve+j*ue,ie=f+ve+j*(ue+1),de=f+(ve+1)+j*(ue+1),N=f+(ve+1)+j*ue;l.push(H,ie,N),l.push(ie,de,N),V+=6}a.addGroup(p,V,w),p+=V,f+=$}}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const r in n)e[r]=n[r]}return e}function Mx(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hp(i){return i.getRenderTarget()===null&&i.outputEncoding===Je?Fn:no}const Sx={clone:us,merge:zt};var wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wx,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dp extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends dp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nf*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Nr=1;class Ex extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new pn(Fr,Nr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new pn(Fr,Nr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new pn(Fr,Nr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new pn(Fr,Nr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new pn(Fr,Nr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new pn(Fr,Nr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class pp extends nn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new po(5,5,5),s=new Ii({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ci});s.uniforms.tEquirect.value=t;const o=new ri(r,s),a=t.minFilter;return t.minFilter===eo&&(t.minFilter=dn),new Ex(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const bl=new Y,Ax=new Y,Px=new en;class Ji{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bl.subVectors(n,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(bl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Px.getNormalMatrix(e),r=this.coplanarPoint(bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Zc,Uo=new Y;class mp{constructor(e=new Ji,t=new Ji,n=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-r,h-l,d-f,x-m).normalize(),t[1].setComponents(a+r,h+l,d+f,x+m).normalize(),t[2].setComponents(a+s,h+c,d+p,x+_).normalize(),t[3].setComponents(a-s,h-c,d-p,x-_).normalize(),t[4].setComponents(a-o,h-u,d-g,x-b).normalize(),t[5].setComponents(a+o,h+u,d+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Uo.x=r.normal.x>0?e.max.x:e.min.x,Uo.y=r.normal.y>0?e.max.y:e.min.y,Uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Rx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Jc extends Ni{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const b=_*f-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-b,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,S=b+c*(_+1),y=b+1+c*(_+1),A=b+1+c*_;p.push(x,S,A),p.push(S,y,A)}this.setIndex(p),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(d,3)),this.setAttribute("uv",new Gn(m,2))}static fromJSON(e){return new Jc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zx="vec3 transformed = vec3( position );",Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,kx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kx=`#define PI 3.141592653589793
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
}`,Zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
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
}`,mv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,yv=`#if defined( USE_ENVMAP )
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
#endif`,bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ev=`struct PhysicalMaterial {
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,Cv=`
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
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
#endif`,Pv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
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
#endif`,Vv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,qv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$v=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ty=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ay=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fy=`float getShadowMask() {
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
}`,hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,py=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,my=`#ifdef USE_SKINNING
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
#endif`,gy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_y=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
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
#endif`,by=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
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
#endif`,My=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Sy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ty=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ey=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Cy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ry=`uniform sampler2D t2D;
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fy=`#include <common>
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
}`,Ny=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Uy=`#define DISTANCE
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,qy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,jy=`#define MATCAP
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
}`,Yy=`#define MATCAP
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
}`,$y=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,Zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,Jy=`#define PHONG
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
#include <uv2_pars_fragment>
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
}`,Qy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,eb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,tb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,rb=`uniform vec3 diffuse;
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
}`,sb=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ab=`uniform float rotation;
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
}`,lb=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Lx,alphamap_pars_fragment:Dx,alphatest_fragment:Ix,alphatest_pars_fragment:Ox,aomap_fragment:Fx,aomap_pars_fragment:Nx,begin_vertex:zx,beginnormal_vertex:Ux,bsdfs:Bx,iridescence_fragment:kx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:qx,color_fragment:Xx,color_pars_fragment:jx,color_pars_vertex:Yx,color_vertex:$x,common:Kx,cube_uv_reflection_fragment:Zx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:ev,emissivemap_fragment:tv,emissivemap_pars_fragment:nv,encodings_fragment:iv,encodings_pars_fragment:rv,envmap_fragment:sv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:yv,envmap_vertex:cv,fog_vertex:uv,fog_pars_vertex:fv,fog_fragment:hv,fog_pars_fragment:dv,gradientmap_pars_fragment:pv,lightmap_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_fragment:_v,lights_lambert_pars_fragment:xv,lights_pars_begin:vv,lights_toon_fragment:bv,lights_toon_pars_fragment:Mv,lights_phong_fragment:Sv,lights_phong_pars_fragment:wv,lights_physical_fragment:Tv,lights_physical_pars_fragment:Ev,lights_fragment_begin:Cv,lights_fragment_maps:Av,lights_fragment_end:Pv,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Lv,logdepthbuf_pars_vertex:Dv,logdepthbuf_vertex:Iv,map_fragment:Ov,map_pars_fragment:Fv,map_particle_fragment:Nv,map_particle_pars_fragment:zv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Bv,morphcolor_vertex:kv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Vv,morphtarget_vertex:Hv,normal_fragment_begin:Wv,normal_fragment_maps:qv,normal_pars_fragment:Xv,normal_pars_vertex:jv,normal_vertex:Yv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:Qv,output_fragment:ey,packing:ty,premultiplied_alpha_fragment:ny,project_vertex:iy,dithering_fragment:ry,dithering_pars_fragment:sy,roughnessmap_fragment:oy,roughnessmap_pars_fragment:ay,shadowmap_pars_fragment:ly,shadowmap_pars_vertex:cy,shadowmap_vertex:uy,shadowmask_pars_fragment:fy,skinbase_vertex:hy,skinning_pars_vertex:dy,skinning_vertex:py,skinnormal_vertex:my,specularmap_fragment:gy,specularmap_pars_fragment:_y,tonemapping_fragment:xy,tonemapping_pars_fragment:vy,transmission_fragment:yy,transmission_pars_fragment:by,uv_pars_fragment:My,uv_pars_vertex:Sy,uv_vertex:wy,uv2_pars_fragment:Ty,uv2_pars_vertex:Ey,uv2_vertex:Cy,worldpos_vertex:Ay,background_vert:Py,background_frag:Ry,backgroundCube_vert:Ly,backgroundCube_frag:Dy,cube_vert:Iy,cube_frag:Oy,depth_vert:Fy,depth_frag:Ny,distanceRGBA_vert:zy,distanceRGBA_frag:Uy,equirect_vert:By,equirect_frag:ky,linedashed_vert:Gy,linedashed_frag:Vy,meshbasic_vert:Hy,meshbasic_frag:Wy,meshlambert_vert:qy,meshlambert_frag:Xy,meshmatcap_vert:jy,meshmatcap_frag:Yy,meshnormal_vert:$y,meshnormal_frag:Ky,meshphong_vert:Zy,meshphong_frag:Jy,meshphysical_vert:Qy,meshphysical_frag:eb,meshtoon_vert:tb,meshtoon_frag:nb,points_vert:ib,points_frag:rb,shadow_vert:sb,shadow_frag:ob,sprite_vert:ab,sprite_frag:lb},ye={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new en},uv2Transform:{value:new en},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new en}}},zn={basic:{uniforms:zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:zt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:zt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:zt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:zt([ye.points,ye.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:zt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:zt([ye.common,ye.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:zt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:zt([ye.sprite,ye.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new en},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:zt([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:zt([ye.lights,ye.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};zn.physical={uniforms:zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Bo={r:0,b:0,g:0};function cb(i,e,t,n,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const S=i.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ea)?(u===void 0&&(u=new ri(new po(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:us(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Je,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ri(new Jc(2,2),new Ii({name:"BackgroundMaterial",uniforms:us(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Je,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Bo,hp(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function ub(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(F,j,K,$,V){let ce=!1;if(o){const ue=d($,K,j);c!==ue&&(c=ue,p(c.object)),ce=_(F,$,K,V),ce&&b(F,$,K,V)}else{const ue=j.wireframe===!0;(c.geometry!==$.id||c.program!==K.id||c.wireframe!==ue)&&(c.geometry=$.id,c.program=K.id,c.wireframe=ue,ce=!0)}V!==null&&t.update(V,34963),(ce||u)&&(u=!1,v(F,j,K,$),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function d(F,j,K){const $=K.wireframe===!0;let V=a[F.id];V===void 0&&(V={},a[F.id]=V);let ce=V[j.id];ce===void 0&&(ce={},V[j.id]=ce);let ue=ce[$];return ue===void 0&&(ue=m(f()),ce[$]=ue),ue}function m(F){const j=[],K=[],$=[];for(let V=0;V<r;V++)j[V]=0,K[V]=0,$[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:$,object:F,attributes:{},index:null}}function _(F,j,K,$){const V=c.attributes,ce=j.attributes;let ue=0;const ve=K.getAttributes();for(const H in ve)if(ve[H].location>=0){const de=V[H];let N=ce[H];if(N===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(N=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(N=F.instanceColor)),de===void 0||de.attribute!==N||N&&de.data!==N.data)return!0;ue++}return c.attributesNum!==ue||c.index!==$}function b(F,j,K,$){const V={},ce=j.attributes;let ue=0;const ve=K.getAttributes();for(const H in ve)if(ve[H].location>=0){let de=ce[H];de===void 0&&(H==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),H==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));const N={};N.attribute=de,de&&de.data&&(N.data=de.data),V[H]=N,ue++}c.attributes=V,c.attributesNum=ue,c.index=$}function x(){const F=c.newAttributes;for(let j=0,K=F.length;j<K;j++)F[j]=0}function S(F){y(F,0)}function y(F,j){const K=c.newAttributes,$=c.enabledAttributes,V=c.attributeDivisors;K[F]=1,$[F]===0&&(i.enableVertexAttribArray(F),$[F]=1),V[F]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),V[F]=j)}function A(){const F=c.newAttributes,j=c.enabledAttributes;for(let K=0,$=j.length;K<$;K++)j[K]!==F[K]&&(i.disableVertexAttribArray(K),j[K]=0)}function L(F,j,K,$,V,ce){n.isWebGL2===!0&&(K===5124||K===5125)?i.vertexAttribIPointer(F,j,K,V,ce):i.vertexAttribPointer(F,j,K,$,V,ce)}function v(F,j,K,$){if(n.isWebGL2===!1&&(F.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=$.attributes,ce=K.getAttributes(),ue=j.defaultAttributeValues;for(const ve in ce){const H=ce[ve];if(H.location>=0){let ie=V[ve];if(ie===void 0&&(ve==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),ve==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor)),ie!==void 0){const de=ie.normalized,N=ie.itemSize,I=t.get(ie);if(I===void 0)continue;const re=I.buffer,ae=I.type,ge=I.bytesPerElement;if(ie.isInterleavedBufferAttribute){const me=ie.data,Te=me.stride,E=ie.offset;if(me.isInstancedInterleavedBuffer){for(let P=0;P<H.locationSize;P++)y(H.location+P,me.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let P=0;P<H.locationSize;P++)S(H.location+P);i.bindBuffer(34962,re);for(let P=0;P<H.locationSize;P++)L(H.location+P,N/H.locationSize,ae,de,Te*ge,(E+N/H.locationSize*P)*ge)}else{if(ie.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)y(H.location+me,ie.meshPerAttribute);F.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let me=0;me<H.locationSize;me++)S(H.location+me);i.bindBuffer(34962,re);for(let me=0;me<H.locationSize;me++)L(H.location+me,N/H.locationSize,ae,de,N*ge,N/H.locationSize*me*ge)}}else if(ue!==void 0){const de=ue[ve];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(H.location,de);break;case 3:i.vertexAttrib3fv(H.location,de);break;case 4:i.vertexAttrib4fv(H.location,de);break;default:i.vertexAttrib1fv(H.location,de)}}}}A()}function w(){B();for(const F in a){const j=a[F];for(const K in j){const $=j[K];for(const V in $)g($[V].object),delete $[V];delete j[K]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const j=a[F.id];for(const K in j){const $=j[K];for(const V in $)g($[V].object),delete $[V];delete j[K]}delete a[F.id]}function W(F){for(const j in a){const K=a[j];if(K[F.id]===void 0)continue;const $=K[F.id];for(const V in $)g($[V].object),delete $[V];delete K[F.id]}}function B(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function fb(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function hb(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),x=f>0,S=o||e.has("OES_texture_float"),y=x&&S,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:A}}function db(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ji,a=new en,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,x=b*4;let S=_.clippingState||null;l.value=S,S=u(g,f,x,p);for(let y=0;y!==x;++y)S[y]=t[y];_.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,S=p;x!==d;++x,S+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function pb(i){let e=new WeakMap;function t(o,a){return a===ec?o.mapping=as:a===tc&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ec||a===tc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cx(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mb extends dp{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qr=4,Yf=[.125,.215,.35,.446,.526,.582],rr=20,Ml=new mb,$f=new tt;let Sl=null;const Qi=(1+Math.sqrt(5))/2,Ur=1/Qi,Kf=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Qi,Ur),new Y(0,Qi,-Ur),new Y(Ur,0,Qi),new Y(-Ur,0,Qi),new Y(Qi,Ur,0),new Y(-Qi,Ur,0)];class Zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Sl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl),e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:to,format:Pn,encoding:gr,depthBuffer:!1},r=Jf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gb(s)),this._blurMaterial=_b(s,e,t)}return r}_compileMaterial(e){const t=new ri(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,r){const a=new pn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($f),u.toneMapping=ai,u.autoClear=!1;const p=new cp({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ri(new po,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy($f),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;ko(r,b*x,_>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Kf[(r-1)%Kf.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ri(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rr-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const _=[];let b=0;for(let L=0;L<rr;++L){const v=L/d,w=Math.exp(-v*v/2);_.push(w),L===0?b+=w:L<m&&(b+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[r],y=3*S*(r>x-qr?r-x+qr:0),A=4*(this._cubeSize-S);ko(t,y,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Ml)}}function gb(i){const e=[],t=[],n=[];let r=i;const s=i-qr+1+Yf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-qr?l=Yf[o-i+qr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,b=new Float32Array(d*g*p),x=new Float32Array(m*g*p),S=new Float32Array(_*g*p);for(let A=0;A<p;A++){const L=A%3*2/3-1,v=A>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];b.set(w,d*g*A),x.set(f,m*g*A);const D=[A,A,A,A,A,A];S.set(D,_*g*A)}const y=new Ni;y.setAttribute("position",new kn(b,d)),y.setAttribute("uv",new kn(x,m)),y.setAttribute("faceIndex",new kn(S,_)),e.push(y),r>qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jf(i,e,t){const n=new _r(i,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _b(i,e,t){const n=new Float32Array(rr),r=new Y(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Qf(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function eh(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function xb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ec||l===tc,u=l===as||l===ls;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Zf(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Zf(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yb(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let x=0,S=b.length;x<S;x+=3){const y=b[x+0],A=b[x+1],L=b[x+2];f.push(y,A,A,L,L,y)}}else{const b=g.array;d=g.version;for(let x=0,S=b.length/3-1;x<S;x+=3){const y=x+0,A=x+1,L=x+2;f.push(y,A,A,L,L,y)}}const m=new(ip(f)?fp:up)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bb(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Mb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sb(i,e){return i[0]-e[0]}function wb(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Tb(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let K=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var g=K;_!==void 0&&_.texture.dispose();const S=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let D=0;S===!0&&(D=1),y===!0&&(D=2),A===!0&&(D=3);let W=u.attributes.position.count*D,B=1;W>e.maxTextureSize&&(B=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const O=new Float32Array(W*B*4*m),F=new ap(O,W,B,m);F.type=or,F.needsUpdate=!0;const j=D*4;for(let $=0;$<m;$++){const V=L[$],ce=v[$],ue=w[$],ve=W*B*4*$;for(let H=0;H<V.count;H++){const ie=H*j;S===!0&&(o.fromBufferAttribute(V,H),O[ve+ie+0]=o.x,O[ve+ie+1]=o.y,O[ve+ie+2]=o.z,O[ve+ie+3]=0),y===!0&&(o.fromBufferAttribute(ce,H),O[ve+ie+4]=o.x,O[ve+ie+5]=o.y,O[ve+ie+6]=o.z,O[ve+ie+7]=0),A===!0&&(o.fromBufferAttribute(ue,H),O[ve+ie+8]=o.x,O[ve+ie+9]=o.y,O[ve+ie+10]=o.z,O[ve+ie+11]=ue.itemSize===4?o.w:1)}}_={count:m,texture:F,size:new Be(W,B)},s.set(u,_),u.addEventListener("dispose",K)}let b=0;for(let S=0;S<p.length;S++)b+=p[S];const x=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let y=0;y<d;y++)m[y]=[y,0];n[u.id]=m}for(let y=0;y<d;y++){const A=m[y];A[0]=y,A[1]=p[y]}m.sort(wb);for(let y=0;y<8;y++)y<d&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Sb);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const A=a[y],L=A[0],v=A[1];L!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+y)!==_[L]&&u.setAttribute("morphTarget"+y,_[L]),b&&u.getAttribute("morphNormal"+y)!==b[L]&&u.setAttribute("morphNormal"+y,b[L]),r[y]=v,x+=v):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),b&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const S=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Eb(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const _p=new nn,xp=new ap,vp=new ux,yp=new pp,th=[],nh=[],ih=new Float32Array(16),rh=new Float32Array(9),sh=new Float32Array(4);function Ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=th[r];if(s===void 0&&(s=new Float32Array(r),th[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Lb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;sh.set(n),i.uniformMatrix2fv(this.addr,!1,sh),gt(t,n)}}function Db(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),gt(t,n)}}function Ib(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),gt(t,n)}}function Ob(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Ub(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Vb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||_p,r)}function Hb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vp,r)}function Wb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||yp,r)}function qb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xp,r)}function Xb(i){switch(i){case 5126:return Cb;case 35664:return Ab;case 35665:return Pb;case 35666:return Rb;case 35674:return Lb;case 35675:return Db;case 35676:return Ib;case 5124:case 35670:return Ob;case 35667:case 35671:return Fb;case 35668:case 35672:return Nb;case 35669:case 35673:return zb;case 5125:return Ub;case 36294:return Bb;case 36295:return kb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}function jb(i,e){i.uniform1fv(this.addr,e)}function Yb(i,e){const t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function $b(i,e){const t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function Kb(i,e){const t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Zb(i,e){const t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jb(i,e){const t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qb(i,e){const t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eM(i,e){i.uniform1iv(this.addr,e)}function tM(i,e){i.uniform2iv(this.addr,e)}function nM(i,e){i.uniform3iv(this.addr,e)}function iM(i,e){i.uniform4iv(this.addr,e)}function rM(i,e){i.uniform1uiv(this.addr,e)}function sM(i,e){i.uniform2uiv(this.addr,e)}function oM(i,e){i.uniform3uiv(this.addr,e)}function aM(i,e){i.uniform4uiv(this.addr,e)}function lM(i,e,t){const n=this.cache,r=e.length,s=Pa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||_p,s[o])}function cM(i,e,t){const n=this.cache,r=e.length,s=Pa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vp,s[o])}function uM(i,e,t){const n=this.cache,r=e.length,s=Pa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yp,s[o])}function fM(i,e,t){const n=this.cache,r=e.length,s=Pa(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||xp,s[o])}function hM(i){switch(i){case 5126:return jb;case 35664:return Yb;case 35665:return $b;case 35666:return Kb;case 35674:return Zb;case 35675:return Jb;case 35676:return Qb;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return oM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}class dM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Xb(t.type)}}class pM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=hM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function oh(i,e){i.seq.push(e),i.map[e.id]=e}function gM(i,e,t){const n=i.name,r=n.length;for(wl.lastIndex=0;;){const s=wl.exec(n),o=wl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){oh(t,c===void 0?new dM(a,i,e):new pM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new mM(a),oh(t,h)),t=h}}}class $o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ah(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let _M=0;function xM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function vM(i){switch(i){case gr:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function lh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xM(i.getShaderSource(e),o)}else return r}function yM(i,e){const t=vM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function bM(i,e){let t;switch(e){case N0:t="Linear";break;case z0:t="Reinhard";break;case U0:t="OptimizedCineon";break;case B0:t="ACESFilmic";break;case k0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function MM(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zs).join(`
`)}function SM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zs(i){return i!==""}function ch(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(TM,EM)}function EM(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return oc(t)}const CM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(CM,AM)}function AM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Zd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===p0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ns&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function LM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function DM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case F0:e="ENVMAP_BLENDING_ADD";break}return e}function IM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function OM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=PM(t),c=RM(t),u=LM(t),h=DM(t),f=IM(t),p=t.isWebGL2?"":MM(t),g=SM(s),d=r.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(zs).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(zs).join(`
`),_.length>0&&(_+=`
`)):(m=[hh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),_=[p,hh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Oe.tonemapping_pars_fragment:"",t.toneMapping!==ai?bM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,yM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=oc(o),o=ch(o,t),o=uh(o,t),a=oc(a),a=ch(a,t),a=uh(a,t),o=fh(o),a=fh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+m+o,S=b+_+a,y=ah(r,35633,x),A=ah(r,35632,S);if(r.attachShader(d,y),r.attachShader(d,A),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),D=r.getShaderInfoLog(y).trim(),W=r.getShaderInfoLog(A).trim();let B=!0,O=!0;if(r.getProgramParameter(d,35714)===!1){B=!1;const F=lh(r,y,"vertex"),j=lh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+F+`
`+j)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(D===""||W==="")&&(O=!1);O&&(this.diagnostics={runnable:B,programLog:w,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:_}})}r.deleteShader(y),r.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new $o(r,d)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=wM(r,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=_M++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=A,this}let FM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zM(e),t.set(e,n)),n}}class zM{constructor(e){this.id=FM++,this.code=e,this.usedTimes=0}}function UM(i,e,t,n,r,s,o){const a=new lp,l=new NM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,D,W,B){const O=W.fog,F=B.geometry,j=v.isMeshStandardMaterial?W.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),$=K&&K.mapping===Ea?K.image.height:null,V=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ue=ce!==void 0?ce.length:0;let ve=0;F.morphAttributes.position!==void 0&&(ve=1),F.morphAttributes.normal!==void 0&&(ve=2),F.morphAttributes.color!==void 0&&(ve=3);let H,ie,de,N;if(V){const Te=zn[V];H=Te.vertexShader,ie=Te.fragmentShader}else H=v.vertexShader,ie=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),N=l.getFragmentShaderID(v);const I=i.getRenderTarget(),re=v.alphaTest>0,ae=v.clearcoat>0,ge=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:H,fragmentShader:ie,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:N,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:I===null?i.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:gr,map:!!v.map,matcap:!!v.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:$,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ox,tangentSpaceNormalMap:v.normalMapType===sx,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Je,clearcoat:ae,clearcoatMap:ae&&!!v.clearcoatMap,clearcoatRoughnessMap:ae&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!v.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!v.iridescenceMap,iridescenceThicknessMap:ge&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Qr,alphaMap:!!v.alphaMap,alphaTest:re,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!O,useFog:v.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ve,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:ai,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===tn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)w.push(D),w.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(w,v),b(w,v),w.push(i.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function x(v){const w=g[v.type];let D;if(w){const W=zn[w];D=Sx.clone(W.uniforms)}else D=v.uniforms;return D}function S(v,w){let D;for(let W=0,B=c.length;W<B;W++){const O=c[W];if(O.cacheKey===w){D=O,++D.usedTimes;break}}return D===void 0&&(D=new OM(i,w,v,s),c.push(D)),D}function y(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:S,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:L}}function BM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function kM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ph(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,d,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function a(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||kM),n.length>1&&n.sort(f||dh),r.length>1&&r.sort(f||dh)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ph,i.set(n,[o])):r>=s.length?(o=new ph,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function VM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new tt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function HM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let WM=0;function qM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function XM(i,e){const t=new VM,n=HM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Y);const s=new Y,o=new wt,a=new wt;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,m=0,_=0,b=0,x=0,S=0,y=0,A=0,L=0,v=0;u.sort(qM);const w=h!==!0?Math.PI:1;for(let W=0,B=u.length;W<B;W++){const O=u[W],F=O.color,j=O.intensity,K=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=F.r*j*w,p+=F.g*j*w,g+=F.b*j*w;else if(O.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(O.sh.coefficients[V],j);else if(O.isDirectionalLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const ce=O.shadow,ue=n.get(O);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,r.directionalShadow[d]=ue,r.directionalShadowMap[d]=$,r.directionalShadowMatrix[d]=O.shadow.matrix,S++}r.directional[d]=V,d++}else if(O.isSpotLight){const V=t.get(O);V.position.setFromMatrixPosition(O.matrixWorld),V.color.copy(F).multiplyScalar(j*w),V.distance=K,V.coneCos=Math.cos(O.angle),V.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),V.decay=O.decay,r.spot[_]=V;const ce=O.shadow;if(O.map&&(r.spotLightMap[L]=O.map,L++,ce.updateMatrices(O),O.castShadow&&v++),r.spotLightMatrix[_]=ce.matrix,O.castShadow){const ue=n.get(O);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,r.spotShadow[_]=ue,r.spotShadowMap[_]=$,A++}_++}else if(O.isRectAreaLight){const V=t.get(O);V.color.copy(F).multiplyScalar(j),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),r.rectArea[b]=V,b++}else if(O.isPointLight){const V=t.get(O);if(V.color.copy(O.color).multiplyScalar(O.intensity*w),V.distance=O.distance,V.decay=O.decay,O.castShadow){const ce=O.shadow,ue=n.get(O);ue.shadowBias=ce.bias,ue.shadowNormalBias=ce.normalBias,ue.shadowRadius=ce.radius,ue.shadowMapSize=ce.mapSize,ue.shadowCameraNear=ce.camera.near,ue.shadowCameraFar=ce.camera.far,r.pointShadow[m]=ue,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=O.shadow.matrix,y++}r.point[m]=V,m++}else if(O.isHemisphereLight){const V=t.get(O);V.skyColor.copy(O.color).multiplyScalar(j*w),V.groundColor.copy(O.groundColor).multiplyScalar(j*w),r.hemi[x]=V,x++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==b||D.hemiLength!==x||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==A||D.numSpotMaps!==L)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=b,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=A+L-v,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=m,D.spotLength=_,D.rectAreaLength=b,D.hemiLength=x,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=A,D.numSpotMaps=L,r.version=WM++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const S=u[b];if(S.isDirectionalLight){const y=r.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),f++}else if(S.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(S.isRectAreaLight){const y=r.rectArea[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(S.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(S.isPointLight){const y=r.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(_),p++}else if(S.isHemisphereLight){const y=r.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function mh(i,e){const t=new XM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new mh(i,e),t.set(s,[l])):o>=a.length?(l=new mh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class YM extends Aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $M extends Aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Y,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`;function JM(i,e,t){let n=new mp;const r=new Be,s=new Be,o=new St,a=new YM({depthPacking:rx}),l=new $M,c={},u=t.maxTextureSize,h={[Di]:tn,[tn]:Di,[ii]:ii},f=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:KM,fragmentShader:ZM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ni;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ri(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd,this.render=function(S,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ci),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,B=S.length;W<B;W++){const O=S[W],F=O.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null){const $=this.type!==Ns?{minFilter:Ut,magFilter:Ut}:{};F.map=new _r(r.x,r.y,$),F.map.texture.name=O.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const K=F.getViewportCount();for(let $=0;$<K;$++){const V=F.getViewport($);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(o),F.updateMatrices(O,$),n=F.getFrustum(),x(y,A,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Ns&&_(F,A),F.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(L,v,w)};function _(S,y){const A=e.update(d);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new _r(r.x,r.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(y,null,A,f,d,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(y,null,A,p,d,null)}function b(S,y,A,L,v,w){let D=null;const W=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(W!==void 0)D=W;else if(D=A.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const B=D.uuid,O=y.uuid;let F=c[B];F===void 0&&(F={},c[B]=F);let j=F[O];j===void 0&&(j=D.clone(),F[O]=j),D=j}return D.visible=y.visible,D.wireframe=y.wireframe,w===Ns?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:h[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=L,D.farDistance=v),D}function x(S,y,A,L,v){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Ns)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const W=e.update(S),B=S.material;if(Array.isArray(B)){const O=W.groups;for(let F=0,j=O.length;F<j;F++){const K=O[F],$=B[K.materialIndex];if($&&$.visible){const V=b(S,$,L,A.near,A.far,v);i.renderBufferDirect(A,null,W,V,S,K)}}}else if(B.visible){const O=b(S,B,L,A.near,A.far,v);i.renderBufferDirect(A,null,W,O,S,null)}}const D=S.children;for(let W=0,B=D.length;W<B;W++)x(D[W],y,A,L,v)}}function QM(i,e,t){const n=t.isWebGL2;function r(){let z=!1;const ee=new St;let xe=null;const Ce=new St(0,0,0,0);return{setMask:function(Pe){xe!==Pe&&!z&&(i.colorMask(Pe,Pe,Pe,Pe),xe=Pe)},setLocked:function(Pe){z=Pe},setClear:function(Pe,je,_t,Et,Ui){Ui===!0&&(Pe*=Et,je*=Et,_t*=Et),ee.set(Pe,je,_t,Et),Ce.equals(ee)===!1&&(i.clearColor(Pe,je,_t,Et),Ce.copy(ee))},reset:function(){z=!1,xe=null,Ce.set(-1,0,0,0)}}}function s(){let z=!1,ee=null,xe=null,Ce=null;return{setTest:function(Pe){Pe?re(2929):ae(2929)},setMask:function(Pe){ee!==Pe&&!z&&(i.depthMask(Pe),ee=Pe)},setFunc:function(Pe){if(xe!==Pe){switch(Pe){case C0:i.depthFunc(512);break;case A0:i.depthFunc(519);break;case P0:i.depthFunc(513);break;case Ql:i.depthFunc(515);break;case R0:i.depthFunc(514);break;case L0:i.depthFunc(518);break;case D0:i.depthFunc(516);break;case I0:i.depthFunc(517);break;default:i.depthFunc(515)}xe=Pe}},setLocked:function(Pe){z=Pe},setClear:function(Pe){Ce!==Pe&&(i.clearDepth(Pe),Ce=Pe)},reset:function(){z=!1,ee=null,xe=null,Ce=null}}}function o(){let z=!1,ee=null,xe=null,Ce=null,Pe=null,je=null,_t=null,Et=null,Ui=null;return{setTest:function(Qe){z||(Qe?re(2960):ae(2960))},setMask:function(Qe){ee!==Qe&&!z&&(i.stencilMask(Qe),ee=Qe)},setFunc:function(Qe,qn,ln){(xe!==Qe||Ce!==qn||Pe!==ln)&&(i.stencilFunc(Qe,qn,ln),xe=Qe,Ce=qn,Pe=ln)},setOp:function(Qe,qn,ln){(je!==Qe||_t!==qn||Et!==ln)&&(i.stencilOp(Qe,qn,ln),je=Qe,_t=qn,Et=ln)},setLocked:function(Qe){z=Qe},setClear:function(Qe){Ui!==Qe&&(i.clearStencil(Qe),Ui=Qe)},reset:function(){z=!1,ee=null,xe=null,Ce=null,Pe=null,je=null,_t=null,Et=null,Ui=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,S=null,y=null,A=null,L=null,v=null,w=!1,D=null,W=null,B=null,O=null,F=null;const j=i.getParameter(35661);let K=!1,$=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=$>=2);let ce=null,ue={};const ve=i.getParameter(3088),H=i.getParameter(2978),ie=new St().fromArray(ve),de=new St().fromArray(H);function N(z,ee,xe){const Ce=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(z,Pe),i.texParameteri(z,10241,9728),i.texParameteri(z,10240,9728);for(let je=0;je<xe;je++)i.texImage2D(ee+je,0,6408,1,1,0,6408,5121,Ce);return Pe}const I={};I[3553]=N(3553,3553,1),I[34067]=N(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),re(2929),l.setFunc(Ql),Q(!1),fe(rf),re(2884),q(Ci);function re(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function ae(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function ge(z,ee){return p[z]!==ee?(i.bindFramebuffer(z,ee),p[z]=ee,n&&(z===36009&&(p[36160]=ee),z===36160&&(p[36009]=ee)),!0):!1}function me(z,ee){let xe=d,Ce=!1;if(z)if(xe=g.get(ee),xe===void 0&&(xe=[],g.set(ee,xe)),z.isWebGLMultipleRenderTargets){const Pe=z.texture;if(xe.length!==Pe.length||xe[0]!==36064){for(let je=0,_t=Pe.length;je<_t;je++)xe[je]=36064+je;xe.length=Pe.length,Ce=!0}}else xe[0]!==36064&&(xe[0]=36064,Ce=!0);else xe[0]!==1029&&(xe[0]=1029,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Te(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const E={[Vr]:32774,[g0]:32778,[_0]:32779};if(n)E[lf]=32775,E[cf]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(E[lf]=z.MIN_EXT,E[cf]=z.MAX_EXT)}const P={[x0]:0,[v0]:1,[y0]:768,[Jd]:770,[E0]:776,[w0]:774,[M0]:772,[b0]:769,[Qd]:771,[T0]:775,[S0]:773};function q(z,ee,xe,Ce,Pe,je,_t,Et){if(z===Ci){_===!0&&(ae(3042),_=!1);return}if(_===!1&&(re(3042),_=!0),z!==m0){if(z!==b||Et!==w){if((x!==Vr||A!==Vr)&&(i.blendEquation(32774),x=Vr,A=Vr),Et)switch(z){case Qr:i.blendFuncSeparate(1,771,1,771);break;case sf:i.blendFunc(1,1);break;case of:i.blendFuncSeparate(0,769,0,1);break;case af:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qr:i.blendFuncSeparate(770,771,1,771);break;case sf:i.blendFunc(770,1);break;case of:i.blendFuncSeparate(0,769,0,1);break;case af:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,y=null,L=null,v=null,b=z,w=Et}return}Pe=Pe||ee,je=je||xe,_t=_t||Ce,(ee!==x||Pe!==A)&&(i.blendEquationSeparate(E[ee],E[Pe]),x=ee,A=Pe),(xe!==S||Ce!==y||je!==L||_t!==v)&&(i.blendFuncSeparate(P[xe],P[Ce],P[je],P[_t]),S=xe,y=Ce,L=je,v=_t),b=z,w=!1}function J(z,ee){z.side===ii?ae(2884):re(2884);let xe=z.side===tn;ee&&(xe=!xe),Q(xe),z.blending===Qr&&z.transparent===!1?q(Ci):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Ce=z.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?re(32926):ae(32926)}function Q(z){D!==z&&(z?i.frontFace(2304):i.frontFace(2305),D=z)}function fe(z){z!==h0?(re(2884),z!==W&&(z===rf?i.cullFace(1029):z===d0?i.cullFace(1028):i.cullFace(1032))):ae(2884),W=z}function pe(z){z!==B&&(K&&i.lineWidth(z),B=z)}function se(z,ee,xe){z?(re(32823),(O!==ee||F!==xe)&&(i.polygonOffset(ee,xe),O=ee,F=xe)):ae(32823)}function _e(z){z?re(3089):ae(3089)}function le(z){z===void 0&&(z=33984+j-1),ce!==z&&(i.activeTexture(z),ce=z)}function T(z,ee,xe){xe===void 0&&(ce===null?xe=33984+j-1:xe=ce);let Ce=ue[xe];Ce===void 0&&(Ce={type:void 0,texture:void 0},ue[xe]=Ce),(Ce.type!==z||Ce.texture!==ee)&&(ce!==xe&&(i.activeTexture(xe),ce=xe),i.bindTexture(z,ee||I[z]),Ce.type=z,Ce.texture=ee)}function M(){const z=ue[ce];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function U(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function R(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function k(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(z){ie.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ie.copy(z))}function we(z){de.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),de.copy(z))}function Le(z,ee){let xe=h.get(ee);xe===void 0&&(xe=new WeakMap,h.set(ee,xe));let Ce=xe.get(z);Ce===void 0&&(Ce=i.getUniformBlockIndex(ee,z.name),xe.set(z,Ce))}function ze(z,ee){const Ce=h.get(ee).get(z);u.get(ee)!==Ce&&(i.uniformBlockBinding(ee,Ce,z.__bindingPointIndex),u.set(ee,Ce))}function $e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,ue={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,S=null,y=null,A=null,L=null,v=null,w=!1,D=null,W=null,B=null,O=null,F=null,ie.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:re,disable:ae,bindFramebuffer:ge,drawBuffers:me,useProgram:Te,setBlending:q,setMaterial:J,setFlipSided:Q,setCullFace:fe,setLineWidth:pe,setPolygonOffset:se,setScissorTest:_e,activeTexture:le,bindTexture:T,unbindTexture:M,compressedTexImage2D:U,compressedTexImage3D:Z,texImage2D:Ee,texImage3D:Se,updateUBOMapping:Le,uniformBlockBinding:ze,texStorage2D:k,texStorage3D:Me,texSubImage2D:ne,texSubImage3D:he,compressedTexSubImage2D:be,compressedTexSubImage3D:R,scissor:Ae,viewport:we,reset:$e}}function eS(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(T,M){return _?new OffscreenCanvas(T,M):ra("canvas")}function x(T,M,U,Z){let ne=1;if((T.width>Z||T.height>Z)&&(ne=Z/Math.max(T.width,T.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const he=M?sc:Math.floor,be=he(ne*T.width),R=he(ne*T.height);d===void 0&&(d=b(be,R));const k=U?b(be,R):d;return k.width=be,k.height=R,k.getContext("2d").drawImage(T,0,0,be,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+R+")."),k}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function S(T){return zf(T.width)&&zf(T.height)}function y(T){return a?!1:T.wrapS!==An||T.wrapT!==An||T.minFilter!==Ut&&T.minFilter!==dn}function A(T,M){return T.generateMipmaps&&M&&T.minFilter!==Ut&&T.minFilter!==dn}function L(T){i.generateMipmap(T)}function v(T,M,U,Z,ne=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=M;return M===6403&&(U===5126&&(he=33326),U===5131&&(he=33325),U===5121&&(he=33321)),M===33319&&(U===5126&&(he=33328),U===5131&&(he=33327),U===5121&&(he=33323)),M===6408&&(U===5126&&(he=34836),U===5131&&(he=34842),U===5121&&(he=Z===Je&&ne===!1?35907:32856),U===32819&&(he=32854),U===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function w(T,M,U){return A(T,U)===!0||T.isFramebufferTexture&&T.minFilter!==Ut&&T.minFilter!==dn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){return T===Ut||T===uf||T===ja?9728:9729}function W(T){const M=T.target;M.removeEventListener("dispose",W),O(M),M.isVideoTexture&&g.delete(M)}function B(T){const M=T.target;M.removeEventListener("dispose",B),j(M)}function O(T){const M=n.get(T);if(M.__webglInit===void 0)return;const U=T.source,Z=m.get(U);if(Z){const ne=Z[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(T),Object.keys(Z).length===0&&m.delete(U)}n.remove(T)}function F(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const U=T.source,Z=m.get(U);delete Z[M.__cacheKey],o.memory.textures--}function j(T){const M=T.texture,U=n.get(T),Z=n.get(M);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(U.__webglFramebuffer[ne]),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(U.__webglFramebuffer),U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ne=0;ne<U.__webglColorRenderbuffer.length;ne++)U.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[ne]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ne=0,he=M.length;ne<he;ne++){const be=n.get(M[ne]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(T)}let K=0;function $(){K=0}function V(){const T=K;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),K+=1,T}function ce(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function ue(T,M){const U=n.get(T);if(T.isVideoTexture&&_e(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(U,T,M);return}}t.bindTexture(3553,U.__webglTexture,33984+M)}function ve(T,M){const U=n.get(T);if(T.version>0&&U.__version!==T.version){ae(U,T,M);return}t.bindTexture(35866,U.__webglTexture,33984+M)}function H(T,M){const U=n.get(T);if(T.version>0&&U.__version!==T.version){ae(U,T,M);return}t.bindTexture(32879,U.__webglTexture,33984+M)}function ie(T,M){const U=n.get(T);if(T.version>0&&U.__version!==T.version){ge(U,T,M);return}t.bindTexture(34067,U.__webglTexture,33984+M)}const de={[nc]:10497,[An]:33071,[ic]:33648},N={[Ut]:9728,[uf]:9984,[ja]:9986,[dn]:9729,[G0]:9985,[eo]:9987};function I(T,M,U){if(U?(i.texParameteri(T,10242,de[M.wrapS]),i.texParameteri(T,10243,de[M.wrapT]),(T===32879||T===35866)&&i.texParameteri(T,32882,de[M.wrapR]),i.texParameteri(T,10240,N[M.magFilter]),i.texParameteri(T,10241,N[M.minFilter])):(i.texParameteri(T,10242,33071),i.texParameteri(T,10243,33071),(T===32879||T===35866)&&i.texParameteri(T,32882,33071),(M.wrapS!==An||M.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,10240,D(M.magFilter)),i.texParameteri(T,10241,D(M.minFilter)),M.minFilter!==Ut&&M.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Ut||M.minFilter!==ja&&M.minFilter!==eo||M.type===or&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===to&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function re(T,M){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",W));const Z=M.source;let ne=m.get(Z);ne===void 0&&(ne={},m.set(Z,ne));const he=ce(M);if(he!==T.__cacheKey){ne[he]===void 0&&(ne[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ne[he].usedTimes++;const be=ne[T.__cacheKey];be!==void 0&&(ne[T.__cacheKey].usedTimes--,be.usedTimes===0&&F(M)),T.__cacheKey=he,T.__webglTexture=ne[he].texture}return U}function ae(T,M,U){let Z=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=35866),M.isData3DTexture&&(Z=32879);const ne=re(T,M),he=M.source;t.bindTexture(Z,T.__webglTexture,33984+U);const be=n.get(he);if(he.version!==be.__version||ne===!0){t.activeTexture(33984+U),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const R=y(M)&&S(M.image)===!1;let k=x(M.image,R,!1,u);k=le(M,k);const Me=S(k)||a,Ee=s.convert(M.format,M.encoding);let Se=s.convert(M.type),Ae=v(M.internalFormat,Ee,Se,M.encoding,M.isVideoTexture);I(Z,M,Me);let we;const Le=M.mipmaps,ze=a&&M.isVideoTexture!==!0,$e=be.__version===void 0||ne===!0,z=w(M,k,Me);if(M.isDepthTexture)Ae=6402,a?M.type===or?Ae=36012:M.type===sr?Ae=33190:M.type===es?Ae=35056:Ae=33189:M.type===or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ur&&Ae===6402&&M.type!==np&&M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=sr,Se=s.convert(M.type)),M.format===cs&&Ae===6402&&(Ae=34041,M.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=es,Se=s.convert(M.type))),$e&&(ze?t.texStorage2D(3553,1,Ae,k.width,k.height):t.texImage2D(3553,0,Ae,k.width,k.height,0,Ee,Se,null));else if(M.isDataTexture)if(Le.length>0&&Me){ze&&$e&&t.texStorage2D(3553,z,Ae,Le[0].width,Le[0].height);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],ze?t.texSubImage2D(3553,ee,0,0,we.width,we.height,Ee,Se,we.data):t.texImage2D(3553,ee,Ae,we.width,we.height,0,Ee,Se,we.data);M.generateMipmaps=!1}else ze?($e&&t.texStorage2D(3553,z,Ae,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,Ee,Se,k.data)):t.texImage2D(3553,0,Ae,k.width,k.height,0,Ee,Se,k.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(35866,z,Ae,Le[0].width,Le[0].height,k.depth);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],M.format!==Pn?Ee!==null?ze?t.compressedTexSubImage3D(35866,ee,0,0,0,we.width,we.height,k.depth,Ee,we.data,0,0):t.compressedTexImage3D(35866,ee,Ae,we.width,we.height,k.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(35866,ee,0,0,0,we.width,we.height,k.depth,Ee,Se,we.data):t.texImage3D(35866,ee,Ae,we.width,we.height,k.depth,0,Ee,Se,we.data)}else{ze&&$e&&t.texStorage2D(3553,z,Ae,Le[0].width,Le[0].height);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],M.format!==Pn?Ee!==null?ze?t.compressedTexSubImage2D(3553,ee,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(3553,ee,Ae,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(3553,ee,0,0,we.width,we.height,Ee,Se,we.data):t.texImage2D(3553,ee,Ae,we.width,we.height,0,Ee,Se,we.data)}else if(M.isDataArrayTexture)ze?($e&&t.texStorage3D(35866,z,Ae,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,Ee,Se,k.data)):t.texImage3D(35866,0,Ae,k.width,k.height,k.depth,0,Ee,Se,k.data);else if(M.isData3DTexture)ze?($e&&t.texStorage3D(32879,z,Ae,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,Ee,Se,k.data)):t.texImage3D(32879,0,Ae,k.width,k.height,k.depth,0,Ee,Se,k.data);else if(M.isFramebufferTexture){if($e)if(ze)t.texStorage2D(3553,z,Ae,k.width,k.height);else{let ee=k.width,xe=k.height;for(let Ce=0;Ce<z;Ce++)t.texImage2D(3553,Ce,Ae,ee,xe,0,Ee,Se,null),ee>>=1,xe>>=1}}else if(Le.length>0&&Me){ze&&$e&&t.texStorage2D(3553,z,Ae,Le[0].width,Le[0].height);for(let ee=0,xe=Le.length;ee<xe;ee++)we=Le[ee],ze?t.texSubImage2D(3553,ee,0,0,Ee,Se,we):t.texImage2D(3553,ee,Ae,Ee,Se,we);M.generateMipmaps=!1}else ze?($e&&t.texStorage2D(3553,z,Ae,k.width,k.height),t.texSubImage2D(3553,0,0,0,Ee,Se,k)):t.texImage2D(3553,0,Ae,Ee,Se,k);A(M,Me)&&L(Z),be.__version=he.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ge(T,M,U){if(M.image.length!==6)return;const Z=re(T,M),ne=M.source;t.bindTexture(34067,T.__webglTexture,33984+U);const he=n.get(ne);if(ne.version!==he.__version||Z===!0){t.activeTexture(33984+U),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const be=M.isCompressedTexture||M.image[0].isCompressedTexture,R=M.image[0]&&M.image[0].isDataTexture,k=[];for(let ee=0;ee<6;ee++)!be&&!R?k[ee]=x(M.image[ee],!1,!0,c):k[ee]=R?M.image[ee].image:M.image[ee],k[ee]=le(M,k[ee]);const Me=k[0],Ee=S(Me)||a,Se=s.convert(M.format,M.encoding),Ae=s.convert(M.type),we=v(M.internalFormat,Se,Ae,M.encoding),Le=a&&M.isVideoTexture!==!0,ze=he.__version===void 0||Z===!0;let $e=w(M,Me,Ee);I(34067,M,Ee);let z;if(be){Le&&ze&&t.texStorage2D(34067,$e,we,Me.width,Me.height);for(let ee=0;ee<6;ee++){z=k[ee].mipmaps;for(let xe=0;xe<z.length;xe++){const Ce=z[xe];M.format!==Pn?Se!==null?Le?t.compressedTexSubImage2D(34069+ee,xe,0,0,Ce.width,Ce.height,Se,Ce.data):t.compressedTexImage2D(34069+ee,xe,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+ee,xe,0,0,Ce.width,Ce.height,Se,Ae,Ce.data):t.texImage2D(34069+ee,xe,we,Ce.width,Ce.height,0,Se,Ae,Ce.data)}}}else{z=M.mipmaps,Le&&ze&&(z.length>0&&$e++,t.texStorage2D(34067,$e,we,k[0].width,k[0].height));for(let ee=0;ee<6;ee++)if(R){Le?t.texSubImage2D(34069+ee,0,0,0,k[ee].width,k[ee].height,Se,Ae,k[ee].data):t.texImage2D(34069+ee,0,we,k[ee].width,k[ee].height,0,Se,Ae,k[ee].data);for(let xe=0;xe<z.length;xe++){const Pe=z[xe].image[ee].image;Le?t.texSubImage2D(34069+ee,xe+1,0,0,Pe.width,Pe.height,Se,Ae,Pe.data):t.texImage2D(34069+ee,xe+1,we,Pe.width,Pe.height,0,Se,Ae,Pe.data)}}else{Le?t.texSubImage2D(34069+ee,0,0,0,Se,Ae,k[ee]):t.texImage2D(34069+ee,0,we,Se,Ae,k[ee]);for(let xe=0;xe<z.length;xe++){const Ce=z[xe];Le?t.texSubImage2D(34069+ee,xe+1,0,0,Se,Ae,Ce.image[ee]):t.texImage2D(34069+ee,xe+1,we,Se,Ae,Ce.image[ee])}}}A(M,Ee)&&L(34067),he.__version=ne.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,U,Z,ne){const he=s.convert(U.format,U.encoding),be=s.convert(U.type),R=v(U.internalFormat,he,be,U.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,R,M.width,M.height,M.depth,0,he,be,null):t.texImage2D(ne,0,R,M.width,M.height,0,he,be,null)),t.bindFramebuffer(36160,T),se(M)?f.framebufferTexture2DMultisampleEXT(36160,Z,ne,n.get(U).__webglTexture,0,pe(M)):(ne===3553||ne>=34069&&ne<=34074)&&i.framebufferTexture2D(36160,Z,ne,n.get(U).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(T,M,U){if(i.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let Z=33189;if(U||se(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===or?Z=36012:ne.type===sr&&(Z=33190));const he=pe(M);se(M)?f.renderbufferStorageMultisampleEXT(36161,he,Z,M.width,M.height):i.renderbufferStorageMultisample(36161,he,Z,M.width,M.height)}else i.renderbufferStorage(36161,Z,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const Z=pe(M);U&&se(M)===!1?i.renderbufferStorageMultisample(36161,Z,35056,M.width,M.height):se(M)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,T)}else{const Z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<Z.length;ne++){const he=Z[ne],be=s.convert(he.format,he.encoding),R=s.convert(he.type),k=v(he.internalFormat,be,R,he.encoding),Me=pe(M);U&&se(M)===!1?i.renderbufferStorageMultisample(36161,Me,k,M.width,M.height):se(M)?f.renderbufferStorageMultisampleEXT(36161,Me,k,M.width,M.height):i.renderbufferStorage(36161,k,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function E(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ue(M.depthTexture,0);const Z=n.get(M.depthTexture).__webglTexture,ne=pe(M);if(M.depthTexture.format===ur)se(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ne):i.framebufferTexture2D(36160,36096,3553,Z,0);else if(M.depthTexture.format===cs)se(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ne):i.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function P(T){const M=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");E(M.__webglFramebuffer,T)}else if(U){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]=i.createRenderbuffer(),Te(M.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Te(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function q(T,M,U){const Z=n.get(T);M!==void 0&&me(Z.__webglFramebuffer,T,T.texture,36064,3553),U!==void 0&&P(T)}function J(T){const M=T.texture,U=n.get(T),Z=n.get(M);T.addEventListener("dispose",B),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,be=S(T)||a;if(ne){U.__webglFramebuffer=[];for(let R=0;R<6;R++)U.__webglFramebuffer[R]=i.createFramebuffer()}else{if(U.__webglFramebuffer=i.createFramebuffer(),he)if(r.drawBuffers){const R=T.texture;for(let k=0,Me=R.length;k<Me;k++){const Ee=n.get(R[k]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&se(T)===!1){const R=he?M:[M];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,U.__webglMultisampledFramebuffer);for(let k=0;k<R.length;k++){const Me=R[k];U.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(36161,U.__webglColorRenderbuffer[k]);const Ee=s.convert(Me.format,Me.encoding),Se=s.convert(Me.type),Ae=v(Me.internalFormat,Ee,Se,Me.encoding,T.isXRRenderTarget===!0),we=pe(T);i.renderbufferStorageMultisample(36161,we,Ae,T.width,T.height),i.framebufferRenderbuffer(36160,36064+k,36161,U.__webglColorRenderbuffer[k])}i.bindRenderbuffer(36161,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,Z.__webglTexture),I(34067,M,be);for(let R=0;R<6;R++)me(U.__webglFramebuffer[R],T,M,36064,34069+R);A(M,be)&&L(34067),t.unbindTexture()}else if(he){const R=T.texture;for(let k=0,Me=R.length;k<Me;k++){const Ee=R[k],Se=n.get(Ee);t.bindTexture(3553,Se.__webglTexture),I(3553,Ee,be),me(U.__webglFramebuffer,T,Ee,36064+k,3553),A(Ee,be)&&L(3553)}t.unbindTexture()}else{let R=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?R=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(R,Z.__webglTexture),I(R,M,be),me(U.__webglFramebuffer,T,M,36064,R),A(M,be)&&L(R),t.unbindTexture()}T.depthBuffer&&P(T)}function Q(T){const M=S(T)||a,U=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,ne=U.length;Z<ne;Z++){const he=U[Z];if(A(he,M)){const be=T.isWebGLCubeRenderTarget?34067:3553,R=n.get(he).__webglTexture;t.bindTexture(be,R),L(be),t.unbindTexture()}}}function fe(T){if(a&&T.samples>0&&se(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],U=T.width,Z=T.height;let ne=16384;const he=[],be=T.stencilBuffer?33306:36096,R=n.get(T),k=T.isWebGLMultipleRenderTargets===!0;if(k)for(let Me=0;Me<M.length;Me++)t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,R.__webglFramebuffer);for(let Me=0;Me<M.length;Me++){he.push(36064+Me),T.depthBuffer&&he.push(be);const Ee=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(ne|=256),T.stencilBuffer&&(ne|=1024)),k&&i.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[Me]),Ee===!0&&(i.invalidateFramebuffer(36008,[be]),i.invalidateFramebuffer(36009,[be])),k){const Se=n.get(M[Me]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Se,0)}i.blitFramebuffer(0,0,U,Z,0,0,U,Z,ne,9728),p&&i.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let Me=0;Me<M.length;Me++){t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Me,36161,R.__webglColorRenderbuffer[Me]);const Ee=n.get(M[Me]).__webglTexture;t.bindFramebuffer(36160,R.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Me,3553,Ee,0)}t.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function pe(T){return Math.min(h,T.samples)}function se(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(T){const M=o.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function le(T,M){const U=T.encoding,Z=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===rc||U!==gr&&(U===Je?a===!1?e.has("EXT_sRGB")===!0&&Z===Pn?(T.format=rc,T.minFilter=dn,T.generateMipmaps=!1):M=sp.sRGBToLinear(M):(Z!==Pn||ne!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",U)),M}this.allocateTextureUnit=V,this.resetTextureUnits=$,this.setTexture2D=ue,this.setTexture2DArray=ve,this.setTexture3D=H,this.setTextureCube=ie,this.rebindTextures=q,this.setupRenderTarget=J,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=me,this.useMultisampledRTT=se}function tS(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===mr)return 5121;if(s===q0)return 32819;if(s===X0)return 32820;if(s===V0)return 5120;if(s===H0)return 5122;if(s===np)return 5123;if(s===W0)return 5124;if(s===sr)return 5125;if(s===or)return 5126;if(s===to)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===j0)return 6406;if(s===Pn)return 6408;if(s===Y0)return 6409;if(s===$0)return 6410;if(s===ur)return 6402;if(s===cs)return 34041;if(s===rc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===K0)return 6403;if(s===Z0)return 36244;if(s===J0)return 33319;if(s===Q0)return 33320;if(s===ex)return 36249;if(s===Ya||s===$a||s===Ka||s===Za)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$a)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ff||s===hf||s===df||s===pf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ff)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===df)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===mf||s===gf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===mf)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===gf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_f||s===xf||s===vf||s===yf||s===bf||s===Mf||s===Sf||s===wf||s===Tf||s===Ef||s===Cf||s===Af||s===Pf||s===Rf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_f)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ef)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Af)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rf)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ja)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ja)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===nx||s===Lf||s===Df||s===If)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ja)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Lf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Df)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===If)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class nS extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Go extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iS={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Go;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rS extends nn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ur,u!==ur&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ur&&(n=sr),n===void 0&&u===cs&&(n=es),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=l!==void 0?l:Ut,this.flipY=!1,this.generateMipmaps=!1}}class sS extends br{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const b=[],x=[],S=new Set,y=new Map,A=new pn;A.layers.enable(1),A.viewport=new St;const L=new pn;L.layers.enable(2),L.viewport=new St;const v=[A,L],w=new nS;w.layers.enable(1),w.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=b[H];return ie===void 0&&(ie=new Tl,b[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=b[H];return ie===void 0&&(ie=new Tl,b[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=b[H];return ie===void 0&&(ie=new Tl,b[H]=ie),ie.getHandSpace()};function B(H){const ie=x.indexOf(H.inputSource);if(ie===-1)return;const de=b[ie];de!==void 0&&de.dispatchEvent({type:H.type,data:H.inputSource})}function O(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",F);for(let H=0;H<b.length;H++){const ie=x[H];ie!==null&&(x[H]=null,b[H].disconnect(ie))}D=null,W=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,_=null,ve.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",O),r.addEventListener("inputsourceschange",F),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:p}),_=new _r(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:mr,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ie=null,de=null,N=null;d.depth&&(N=d.stencil?35056:33190,ie=d.stencil?cs:ur,de=d.stencil?es:sr);const I={colorFormat:32856,depthFormat:N,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(I),r.updateRenderState({layers:[f]}),_=new _r(f.textureWidth,f.textureHeight,{format:Pn,type:mr,depthTexture:new rS(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const re=e.properties.get(_);re.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(H){for(let ie=0;ie<H.removed.length;ie++){const de=H.removed[ie],N=x.indexOf(de);N>=0&&(x[N]=null,b[N].disconnect(de))}for(let ie=0;ie<H.added.length;ie++){const de=H.added[ie];let N=x.indexOf(de);if(N===-1){for(let re=0;re<b.length;re++)if(re>=x.length){x.push(de),N=re;break}else if(x[re]===null){x[re]=de,N=re;break}if(N===-1)break}const I=b[N];I&&I.connect(de)}}const j=new Y,K=new Y;function $(H,ie,de){j.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(de.matrixWorld);const N=j.distanceTo(K),I=ie.projectionMatrix.elements,re=de.projectionMatrix.elements,ae=I[14]/(I[10]-1),ge=I[14]/(I[10]+1),me=(I[9]+1)/I[5],Te=(I[9]-1)/I[5],E=(I[8]-1)/I[0],P=(re[8]+1)/re[0],q=ae*E,J=ae*P,Q=N/(-E+P),fe=Q*-E;ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(fe),H.translateZ(Q),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const pe=ae+Q,se=ge+Q,_e=q-fe,le=J+(N-fe),T=me*ge/se*pe,M=Te*ge/se*pe;H.projectionMatrix.makePerspective(_e,le,T,M,pe,se)}function V(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;w.near=L.near=A.near=H.near,w.far=L.far=A.far=H.far,(D!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),D=w.near,W=w.far);const ie=H.parent,de=w.cameras;V(w,ie);for(let I=0;I<de.length;I++)V(de[I],ie);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),H.matrix.copy(w.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const N=H.children;for(let I=0,re=N.length;I<re;I++)N[I].updateMatrixWorld(!0);de.length===2?$(w,A,L):w.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return S};let ce=null;function ue(H,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let N=!1;de.length!==w.cameras.length&&(w.cameras.length=0,N=!0);for(let I=0;I<de.length;I++){const re=de[I];let ae=null;if(p!==null)ae=p.getViewport(re);else{const me=h.getViewSubImage(f,re);ae=me.viewport,I===0&&(e.setRenderTargetTextures(_,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(_))}let ge=v[I];ge===void 0&&(ge=new pn,ge.layers.enable(I),ge.viewport=new St,v[I]=ge),ge.matrix.fromArray(re.transform.matrix),ge.projectionMatrix.fromArray(re.projectionMatrix),ge.viewport.set(ae.x,ae.y,ae.width,ae.height),I===0&&w.matrix.copy(ge.matrix),N===!0&&w.cameras.push(ge)}}for(let de=0;de<b.length;de++){const N=x[de],I=b[de];N!==null&&I!==void 0&&I.update(N,ie,c||o)}if(ce&&ce(H,ie),ie.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ie.detectedPlanes});let de=null;for(const N of S)ie.detectedPlanes.has(N)||(de===null&&(de=[]),de.push(N));if(de!==null)for(const N of de)S.delete(N),y.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(const N of ie.detectedPlanes)if(!S.has(N))S.add(N),y.set(N,ie.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{const I=y.get(N);N.lastChangedTime>I&&(y.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}g=null}const ve=new gp;ve.setAnimationLoop(ue),this.setAnimationLoop=function(H){ce=H},this.dispose=function(){}}}function oS(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,hp(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===tn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===tn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const S=i.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*S}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===tn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function aS(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,x){const S=x.program;n.uniformBlockBinding(b,S)}function c(b,x){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(b,y);const A=e.render.frame;s[b.id]!==A&&(f(b),s[b.id]=A)}function u(b){const x=h();b.__bindingPointIndex=x;const S=i.createBuffer(),y=b.__size,A=b.usage;return i.bindBuffer(35345,S),i.bufferData(35345,y,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],S=b.uniforms,y=b.__cache;i.bindBuffer(35345,x);for(let A=0,L=S.length;A<L;A++){const v=S[A];if(p(v,A,y)===!0){const w=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let B=0;B<D.length;B++){const O=D[B],F=d(O);typeof O=="number"?(v.__data[0]=O,i.bufferSubData(35345,w+W,v.__data)):O.isMatrix3?(v.__data[0]=O.elements[0],v.__data[1]=O.elements[1],v.__data[2]=O.elements[2],v.__data[3]=O.elements[0],v.__data[4]=O.elements[3],v.__data[5]=O.elements[4],v.__data[6]=O.elements[5],v.__data[7]=O.elements[0],v.__data[8]=O.elements[6],v.__data[9]=O.elements[7],v.__data[10]=O.elements[8],v.__data[11]=O.elements[0]):(O.toArray(v.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,v.__data)}}i.bindBuffer(35345,null)}function p(b,x,S){const y=b.value;if(S[x]===void 0){if(typeof y=="number")S[x]=y;else{const A=Array.isArray(y)?y:[y],L=[];for(let v=0;v<A.length;v++)L.push(A[v].clone());S[x]=L}return!0}else if(typeof y=="number"){if(S[x]!==y)return S[x]=y,!0}else{const A=Array.isArray(S[x])?S[x]:[S[x]],L=Array.isArray(y)?y:[y];for(let v=0;v<A.length;v++){const w=A[v];if(w.equals(L[v])===!1)return w.copy(L[v]),!0}}return!1}function g(b){const x=b.uniforms;let S=0;const y=16;let A=0;for(let L=0,v=x.length;L<v;L++){const w=x[L],D={boundary:0,storage:0},W=Array.isArray(w.value)?w.value:[w.value];for(let B=0,O=W.length;B<O;B++){const F=W[B],j=d(F);D.boundary+=j.boundary,D.storage+=j.storage}if(w.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=S,L>0){A=S%y;const B=y-A;A!==0&&B-D.boundary<0&&(S+=y-A,w.__offset=S)}S+=D.storage}return A=S%y,A>0&&(S+=y-A),b.__size=S,b.__cache={},this}function d(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function lS(){const i=ra("canvas");return i.style.display="block",i}function bp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:lS(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gr,this.physicallyCorrectLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const d=this;let m=!1,_=0,b=0,x=null,S=-1,y=null;const A=new St,L=new St;let v=null,w=e.width,D=e.height,W=1,B=null,O=null;const F=new St(0,0,w,D),j=new St(0,0,w,D);let K=!1;const $=new mp;let V=!1,ce=!1,ue=null;const ve=new wt,H=new Be,ie=new Y,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return x===null?W:1}let I=t;function re(C,X){for(let te=0;te<C.length;te++){const G=C[te],oe=e.getContext(G,X);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Le,!1),I===null){const X=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&X.shift(),I=re(X,C),I===null)throw re(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,ge,me,Te,E,P,q,J,Q,fe,pe,se,_e,le,T,M,U,Z,ne,he,be,R,k,Me;function Ee(){ae=new vb(I),ge=new hb(I,ae,i),ae.init(ge),R=new tS(I,ae,ge),me=new QM(I,ae,ge),Te=new Mb,E=new BM,P=new eS(I,ae,me,E,ge,R,Te),q=new pb(d),J=new xb(d),Q=new Rx(I,ge),k=new ub(I,ae,Q,ge),fe=new yb(I,Q,Te,k),pe=new Eb(I,fe,Q,Te),ne=new Tb(I,ge,P),M=new db(E),se=new UM(d,q,J,ae,ge,k,M),_e=new oS(d,E),le=new GM,T=new jM(ae,ge),Z=new cb(d,q,J,me,pe,u,o),U=new JM(d,pe,ge),Me=new aS(I,Te,ge,me),he=new fb(I,ae,Te,ge),be=new bb(I,ae,Te,ge),Te.programs=se.programs,d.capabilities=ge,d.extensions=ae,d.properties=E,d.renderLists=le,d.shadowMap=U,d.state=me,d.info=Te}Ee();const Se=new sS(d,I);this.xr=Se,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(w,D,!1))},this.getSize=function(C){return C.set(w,D)},this.setSize=function(C,X,te){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,D=X,e.width=Math.floor(C*W),e.height=Math.floor(X*W),te!==!1&&(e.style.width=C+"px",e.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(w*W,D*W).floor()},this.setDrawingBufferSize=function(C,X,te){w=C,D=X,W=te,e.width=Math.floor(C*te),e.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,X,te,G){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,X,te,G),me.viewport(A.copy(F).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(j)},this.setScissor=function(C,X,te,G){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,X,te,G),me.scissor(L.copy(j).multiplyScalar(W).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){me.setScissorTest(K=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(C=!0,X=!0,te=!0){let G=0;C&&(G|=16384),X&&(G|=256),te&&(G|=1024),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),le.dispose(),T.dispose(),E.dispose(),q.dispose(),J.dispose(),pe.dispose(),k.dispose(),Me.dispose(),se.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ce),Se.removeEventListener("sessionend",Pe),ue&&(ue.dispose(),ue=null),je.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Te.autoReset,X=U.enabled,te=U.autoUpdate,G=U.needsUpdate,oe=U.type;Ee(),Te.autoReset=C,U.enabled=X,U.autoUpdate=te,U.needsUpdate=G,U.type=oe}function Le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const X=C.target;X.removeEventListener("dispose",ze),$e(X)}function $e(C){z(C),E.remove(C)}function z(C){const X=E.get(C).programs;X!==void 0&&(X.forEach(function(te){se.releaseProgram(te)}),C.isShaderMaterial&&se.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,G,oe,Re){X===null&&(X=de);const De=oe.isMesh&&oe.matrixWorld.determinant()<0,Ne=Im(C,X,te,G,oe);me.setMaterial(G,De);let Ue=te.index,qe=1;G.wireframe===!0&&(Ue=fe.getWireframeAttribute(te),qe=2);const Ge=te.drawRange,Ve=te.attributes.position;let lt=Ge.start*qe,jt=(Ge.start+Ge.count)*qe;Re!==null&&(lt=Math.max(lt,Re.start*qe),jt=Math.min(jt,(Re.start+Re.count)*qe)),Ue!==null?(lt=Math.max(lt,0),jt=Math.min(jt,Ue.count)):Ve!=null&&(lt=Math.max(lt,0),jt=Math.min(jt,Ve.count));const Xn=jt-lt;if(Xn<0||Xn===1/0)return;k.setup(oe,G,Ne,te,Ue);let Bi,ct=he;if(Ue!==null&&(Bi=Q.get(Ue),ct=be,ct.setIndex(Bi)),oe.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*N()),ct.setMode(1)):ct.setMode(4);else if(oe.isLine){let He=G.linewidth;He===void 0&&(He=1),me.setLineWidth(He*N()),oe.isLineSegments?ct.setMode(1):oe.isLineLoop?ct.setMode(2):ct.setMode(3)}else oe.isPoints?ct.setMode(0):oe.isSprite&&ct.setMode(4);if(oe.isInstancedMesh)ct.renderInstances(lt,Xn,oe.count);else if(te.isInstancedBufferGeometry){const He=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Oa=Math.min(te.instanceCount,He);ct.renderInstances(lt,Xn,Oa)}else ct.render(lt,Xn)},this.compile=function(C,X){function te(G,oe,Re){G.transparent===!0&&G.side===ii&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,ln(G,oe,Re),G.side=Di,G.needsUpdate=!0,ln(G,oe,Re),G.side=ii):ln(G,oe,Re)}f=T.get(C),f.init(),g.push(f),C.traverseVisible(function(G){G.isLight&&G.layers.test(X.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.physicallyCorrectLights),C.traverse(function(G){const oe=G.material;if(oe)if(Array.isArray(oe))for(let Re=0;Re<oe.length;Re++){const De=oe[Re];te(De,C,G)}else te(oe,C,G)}),g.pop(),f=null};let ee=null;function xe(C){ee&&ee(C)}function Ce(){je.stop()}function Pe(){je.start()}const je=new gp;je.setAnimationLoop(xe),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(C){ee=C,Se.setAnimationLoop(C),C===null?je.stop():je.start()},Se.addEventListener("sessionstart",Ce),Se.addEventListener("sessionend",Pe),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(X),X=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,X,x),f=T.get(C,g.length),f.init(),g.push(f),ve.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,V=M.init(this.clippingPlanes,ce),h=le.get(C,p.length),h.init(),p.push(h),_t(C,X,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(B,O),V===!0&&M.beginShadows();const te=f.state.shadowsArray;if(U.render(te,C,X),V===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,C),f.setupLights(d.physicallyCorrectLights),X.isArrayCamera){const G=X.cameras;for(let oe=0,Re=G.length;oe<Re;oe++){const De=G[oe];Et(h,C,De,De.viewport)}}else Et(h,C,X);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(d,C,X),k.resetDefaultState(),S=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function _t(C,X,te,G){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){G&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const De=pe.update(C),Ne=C.material;Ne.visible&&h.push(C,De,Ne,te,ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Te.render.frame&&(C.skeleton.update(),C.skeleton.frame=Te.render.frame),!C.frustumCulled||$.intersectsObject(C))){G&&ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const De=pe.update(C),Ne=C.material;if(Array.isArray(Ne)){const Ue=De.groups;for(let qe=0,Ge=Ue.length;qe<Ge;qe++){const Ve=Ue[qe],lt=Ne[Ve.materialIndex];lt&&lt.visible&&h.push(C,De,lt,te,ie.z,Ve)}}else Ne.visible&&h.push(C,De,Ne,te,ie.z,null)}}const Re=C.children;for(let De=0,Ne=Re.length;De<Ne;De++)_t(Re[De],X,te,G)}function Et(C,X,te,G){const oe=C.opaque,Re=C.transmissive,De=C.transparent;f.setupLightsView(te),V===!0&&M.setGlobalState(d.clippingPlanes,te),Re.length>0&&Ui(oe,X,te),G&&me.viewport(A.copy(G)),oe.length>0&&Qe(oe,X,te),Re.length>0&&Qe(Re,X,te),De.length>0&&Qe(De,X,te),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ui(C,X,te){const G=ge.isWebGL2;ue===null&&(ue=new _r(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?to:mr,minFilter:eo,samples:G&&s===!0?4:0})),d.getDrawingBufferSize(H),G?ue.setSize(H.x,H.y):ue.setSize(sc(H.x),sc(H.y));const oe=d.getRenderTarget();d.setRenderTarget(ue),d.clear();const Re=d.toneMapping;d.toneMapping=ai,Qe(C,X,te),d.toneMapping=Re,P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue),d.setRenderTarget(oe)}function Qe(C,X,te){const G=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,Re=C.length;oe<Re;oe++){const De=C[oe],Ne=De.object,Ue=De.geometry,qe=G===null?De.material:G,Ge=De.group;Ne.layers.test(te.layers)&&qn(Ne,X,te,Ue,qe,Ge)}}function qn(C,X,te,G,oe,Re){C.onBeforeRender(d,X,te,G,oe,Re),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(d,X,te,G,C,Re),oe.transparent===!0&&oe.side===ii&&oe.forceSinglePass===!1?(oe.side=tn,oe.needsUpdate=!0,d.renderBufferDirect(te,X,G,oe,C,Re),oe.side=Di,oe.needsUpdate=!0,d.renderBufferDirect(te,X,G,oe,C,Re),oe.side=ii):d.renderBufferDirect(te,X,G,oe,C,Re),C.onAfterRender(d,X,te,G,oe,Re)}function ln(C,X,te){X.isScene!==!0&&(X=de);const G=E.get(C),oe=f.state.lights,Re=f.state.shadowsArray,De=oe.state.version,Ne=se.getParameters(C,oe.state,Re,X,te),Ue=se.getProgramCacheKey(Ne);let qe=G.programs;G.environment=C.isMeshStandardMaterial?X.environment:null,G.fog=X.fog,G.envMap=(C.isMeshStandardMaterial?J:q).get(C.envMap||G.environment),qe===void 0&&(C.addEventListener("dispose",ze),qe=new Map,G.programs=qe);let Ge=qe.get(Ue);if(Ge!==void 0){if(G.currentProgram===Ge&&G.lightsStateVersion===De)return yu(C,Ne),Ge}else Ne.uniforms=se.getUniforms(C),C.onBuild(te,Ne,d),C.onBeforeCompile(Ne,d),Ge=se.acquireProgram(Ne,Ue),qe.set(Ue,Ge),G.uniforms=Ne.uniforms;const Ve=G.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=M.uniform),yu(C,Ne),G.needsLights=Fm(C),G.lightsStateVersion=De,G.needsLights&&(Ve.ambientLightColor.value=oe.state.ambient,Ve.lightProbe.value=oe.state.probe,Ve.directionalLights.value=oe.state.directional,Ve.directionalLightShadows.value=oe.state.directionalShadow,Ve.spotLights.value=oe.state.spot,Ve.spotLightShadows.value=oe.state.spotShadow,Ve.rectAreaLights.value=oe.state.rectArea,Ve.ltc_1.value=oe.state.rectAreaLTC1,Ve.ltc_2.value=oe.state.rectAreaLTC2,Ve.pointLights.value=oe.state.point,Ve.pointLightShadows.value=oe.state.pointShadow,Ve.hemisphereLights.value=oe.state.hemi,Ve.directionalShadowMap.value=oe.state.directionalShadowMap,Ve.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ve.spotShadowMap.value=oe.state.spotShadowMap,Ve.spotLightMatrix.value=oe.state.spotLightMatrix,Ve.spotLightMap.value=oe.state.spotLightMap,Ve.pointShadowMap.value=oe.state.pointShadowMap,Ve.pointShadowMatrix.value=oe.state.pointShadowMatrix);const lt=Ge.getUniforms(),jt=$o.seqWithValue(lt.seq,Ve);return G.currentProgram=Ge,G.uniformsList=jt,Ge}function yu(C,X){const te=E.get(C);te.outputEncoding=X.outputEncoding,te.instancing=X.instancing,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Im(C,X,te,G,oe){X.isScene!==!0&&(X=de),P.resetTextureUnits();const Re=X.fog,De=G.isMeshStandardMaterial?X.environment:null,Ne=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:gr,Ue=(G.isMeshStandardMaterial?J:q).get(G.envMap||De),qe=G.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ge=!!G.normalMap&&!!te.attributes.tangent,Ve=!!te.morphAttributes.position,lt=!!te.morphAttributes.normal,jt=!!te.morphAttributes.color,Xn=G.toneMapped?d.toneMapping:ai,Bi=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ct=Bi!==void 0?Bi.length:0,He=E.get(G),Oa=f.state.lights;if(V===!0&&(ce===!0||C!==y)){const Yt=C===y&&G.id===S;M.setState(G,C,Yt)}let xt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Oa.state.version||He.outputEncoding!==Ne||oe.isInstancedMesh&&He.instancing===!1||!oe.isInstancedMesh&&He.instancing===!0||oe.isSkinnedMesh&&He.skinning===!1||!oe.isSkinnedMesh&&He.skinning===!0||He.envMap!==Ue||G.fog===!0&&He.fog!==Re||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==M.numPlanes||He.numIntersection!==M.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==Ge||He.morphTargets!==Ve||He.morphNormals!==lt||He.morphColors!==jt||He.toneMapping!==Xn||ge.isWebGL2===!0&&He.morphTargetsCount!==ct)&&(xt=!0):(xt=!0,He.__version=G.version);let ki=He.currentProgram;xt===!0&&(ki=ln(G,X,oe));let bu=!1,ws=!1,Fa=!1;const Ot=ki.getUniforms(),Gi=He.uniforms;if(me.useProgram(ki.program)&&(bu=!0,ws=!0,Fa=!0),G.id!==S&&(S=G.id,ws=!0),bu||y!==C){if(Ot.setValue(I,"projectionMatrix",C.projectionMatrix),ge.logarithmicDepthBuffer&&Ot.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),y!==C&&(y=C,ws=!0,Fa=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Yt=Ot.map.cameraPosition;Yt!==void 0&&Yt.setValue(I,ie.setFromMatrixPosition(C.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ot.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||oe.isSkinnedMesh)&&Ot.setValue(I,"viewMatrix",C.matrixWorldInverse)}if(oe.isSkinnedMesh){Ot.setOptional(I,oe,"bindMatrix"),Ot.setOptional(I,oe,"bindMatrixInverse");const Yt=oe.skeleton;Yt&&(ge.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),Ot.setValue(I,"boneTexture",Yt.boneTexture,P),Ot.setValue(I,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=te.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&ge.isWebGL2===!0)&&ne.update(oe,te,G,ki),(ws||He.receiveShadow!==oe.receiveShadow)&&(He.receiveShadow=oe.receiveShadow,Ot.setValue(I,"receiveShadow",oe.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gi.envMap.value=Ue,Gi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ws&&(Ot.setValue(I,"toneMappingExposure",d.toneMappingExposure),He.needsLights&&Om(Gi,Fa),Re&&G.fog===!0&&_e.refreshFogUniforms(Gi,Re),_e.refreshMaterialUniforms(Gi,G,W,D,ue),$o.upload(I,He.uniformsList,Gi,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($o.upload(I,He.uniformsList,Gi,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ot.setValue(I,"center",oe.center),Ot.setValue(I,"modelViewMatrix",oe.modelViewMatrix),Ot.setValue(I,"normalMatrix",oe.normalMatrix),Ot.setValue(I,"modelMatrix",oe.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Yt=G.uniformsGroups;for(let za=0,Nm=Yt.length;za<Nm;za++)if(ge.isWebGL2){const Mu=Yt[za];Me.update(Mu,ki),Me.bind(Mu,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function Om(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Fm(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,X,te){E.get(C.texture).__webglTexture=X,E.get(C.depthTexture).__webglTexture=te;const G=E.get(C);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=te===void 0,G.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const te=E.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,te=0){x=C,_=X,b=te;let G=!0,oe=null,Re=!1,De=!1;if(C){const Ue=E.get(C);Ue.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),G=!1):Ue.__webglFramebuffer===void 0?P.setupRenderTarget(C):Ue.__hasExternalTextures&&P.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ge=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(oe=Ge[X],Re=!0):ge.isWebGL2&&C.samples>0&&P.useMultisampledRTT(C)===!1?oe=E.get(C).__webglMultisampledFramebuffer:oe=Ge,A.copy(C.viewport),L.copy(C.scissor),v=C.scissorTest}else A.copy(F).multiplyScalar(W).floor(),L.copy(j).multiplyScalar(W).floor(),v=K;if(me.bindFramebuffer(36160,oe)&&ge.drawBuffers&&G&&me.drawBuffers(C,oe),me.viewport(A),me.scissor(L),me.setScissorTest(v),Re){const Ue=E.get(C.texture);I.framebufferTexture2D(36160,36064,34069+X,Ue.__webglTexture,te)}else if(De){const Ue=E.get(C.texture),qe=X||0;I.framebufferTextureLayer(36160,36064,Ue.__webglTexture,te||0,qe)}S=-1},this.readRenderTargetPixels=function(C,X,te,G,oe,Re,De){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){me.bindFramebuffer(36160,Ne);try{const Ue=C.texture,qe=Ue.format,Ge=Ue.type;if(qe!==Pn&&R.convert(qe)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===to&&(ae.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ge!==mr&&R.convert(Ge)!==I.getParameter(35738)&&!(Ge===or&&(ge.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-G&&te>=0&&te<=C.height-oe&&I.readPixels(X,te,G,oe,R.convert(qe),R.convert(Ge),Re)}finally{const Ue=x!==null?E.get(x).__webglFramebuffer:null;me.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(C,X,te=0){const G=Math.pow(2,-te),oe=Math.floor(X.image.width*G),Re=Math.floor(X.image.height*G);P.setTexture2D(X,0),I.copyTexSubImage2D(3553,te,0,0,C.x,C.y,oe,Re),me.unbindTexture()},this.copyTextureToTexture=function(C,X,te,G=0){const oe=X.image.width,Re=X.image.height,De=R.convert(te.format),Ne=R.convert(te.type);P.setTexture2D(te,0),I.pixelStorei(37440,te.flipY),I.pixelStorei(37441,te.premultiplyAlpha),I.pixelStorei(3317,te.unpackAlignment),X.isDataTexture?I.texSubImage2D(3553,G,C.x,C.y,oe,Re,De,Ne,X.image.data):X.isCompressedTexture?I.compressedTexSubImage2D(3553,G,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):I.texSubImage2D(3553,G,C.x,C.y,De,Ne,X.image),G===0&&te.generateMipmaps&&I.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te,G,oe=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=C.max.x-C.min.x+1,De=C.max.y-C.min.y+1,Ne=C.max.z-C.min.z+1,Ue=R.convert(G.format),qe=R.convert(G.type);let Ge;if(G.isData3DTexture)P.setTexture3D(G,0),Ge=32879;else if(G.isDataArrayTexture)P.setTexture2DArray(G,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,G.flipY),I.pixelStorei(37441,G.premultiplyAlpha),I.pixelStorei(3317,G.unpackAlignment);const Ve=I.getParameter(3314),lt=I.getParameter(32878),jt=I.getParameter(3316),Xn=I.getParameter(3315),Bi=I.getParameter(32877),ct=te.isCompressedTexture?te.mipmaps[0]:te.image;I.pixelStorei(3314,ct.width),I.pixelStorei(32878,ct.height),I.pixelStorei(3316,C.min.x),I.pixelStorei(3315,C.min.y),I.pixelStorei(32877,C.min.z),te.isDataTexture||te.isData3DTexture?I.texSubImage3D(Ge,oe,X.x,X.y,X.z,Re,De,Ne,Ue,qe,ct.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,oe,X.x,X.y,X.z,Re,De,Ne,Ue,ct.data)):I.texSubImage3D(Ge,oe,X.x,X.y,X.z,Re,De,Ne,Ue,qe,ct),I.pixelStorei(3314,Ve),I.pixelStorei(32878,lt),I.pixelStorei(3316,jt),I.pixelStorei(3315,Xn),I.pixelStorei(32877,Bi),oe===0&&G.generateMipmaps&&I.generateMipmap(Ge),me.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,me.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cS extends bp{}cS.prototype.isWebGL1Renderer=!0;class uS extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class eu extends Ni{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new Y,f=new Y,p=[],g=[],d=[],m=[];for(let _=0;_<=n;_++){const b=[],x=_/n;let S=0;_==0&&o==0?S=.5/t:_==n&&l==Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){const A=y/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),m.push(A+S,1-x),b.push(c++)}u.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const x=u[_][b+1],S=u[_][b],y=u[_+1][b],A=u[_+1][b+1];(_!==0||o>0)&&p.push(x,S,A),(_!==n-1||l<Math.PI)&&p.push(S,y,A)}this.setIndex(p),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(d,3)),this.setAttribute("uv",new Gn(m,2))}static fromJSON(e){return new eu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gh(){return(typeof performance>"u"?Date:performance).now()}class _h{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const xh={type:"change"},El={type:"start"},vh={type:"end"};class hS extends br{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",le),this._domElementKeyEvents=R},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(xh),n.update(),s=r.NONE},this.update=function(){const R=new Y,k=new xr().setFromUnitVectors(e.up,new Y(0,1,0)),Me=k.clone().invert(),Ee=new Y,Se=new xr,Ae=2*Math.PI;return function(){const Le=n.object.position;R.copy(Le).sub(n.target),R.applyQuaternion(k),a.setFromVector3(R),n.autoRotate&&s===r.NONE&&w(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ze=n.minAzimuthAngle,$e=n.maxAzimuthAngle;return isFinite(ze)&&isFinite($e)&&(ze<-Math.PI?ze+=Ae:ze>Math.PI&&(ze-=Ae),$e<-Math.PI?$e+=Ae:$e>Math.PI&&($e-=Ae),ze<=$e?a.theta=Math.max(ze,Math.min($e,a.theta)):a.theta=a.theta>(ze+$e)/2?Math.max(ze,a.theta):Math.min($e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(a),R.applyQuaternion(Me),Le.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ee.distanceToSquared(n.object.position)>o||8*(1-Se.dot(n.object.quaternion))>o?(n.dispatchEvent(xh),Ee.copy(n.object.position),Se.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",q),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",_e),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",Q),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",le)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new _h,l=new _h;let c=1;const u=new Y;let h=!1;const f=new Be,p=new Be,g=new Be,d=new Be,m=new Be,_=new Be,b=new Be,x=new Be,S=new Be,y=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function w(R){l.theta-=R}function D(R){l.phi-=R}const W=function(){const R=new Y;return function(Me,Ee){R.setFromMatrixColumn(Ee,0),R.multiplyScalar(-Me),u.add(R)}}(),B=function(){const R=new Y;return function(Me,Ee){n.screenSpacePanning===!0?R.setFromMatrixColumn(Ee,1):(R.setFromMatrixColumn(Ee,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(Me),u.add(R)}}(),O=function(){const R=new Y;return function(Me,Ee){const Se=n.domElement;if(n.object.isPerspectiveCamera){const Ae=n.object.position;R.copy(Ae).sub(n.target);let we=R.length();we*=Math.tan(n.object.fov/2*Math.PI/180),W(2*Me*we/Se.clientHeight,n.object.matrix),B(2*Ee*we/Se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(Me*(n.object.right-n.object.left)/n.object.zoom/Se.clientWidth,n.object.matrix),B(Ee*(n.object.top-n.object.bottom)/n.object.zoom/Se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(R){f.set(R.clientX,R.clientY)}function $(R){b.set(R.clientX,R.clientY)}function V(R){d.set(R.clientX,R.clientY)}function ce(R){p.set(R.clientX,R.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(p),n.update()}function ue(R){x.set(R.clientX,R.clientY),S.subVectors(x,b),S.y>0?F(v()):S.y<0&&j(v()),b.copy(x),n.update()}function ve(R){m.set(R.clientX,R.clientY),_.subVectors(m,d).multiplyScalar(n.panSpeed),O(_.x,_.y),d.copy(m),n.update()}function H(R){R.deltaY<0?j(v()):R.deltaY>0&&F(v()),n.update()}function ie(R){let k=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),k=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),k=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),k=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),k=!0;break}k&&(R.preventDefault(),n.update())}function de(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),k=.5*(y[0].pageY+y[1].pageY);f.set(R,k)}}function N(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const R=.5*(y[0].pageX+y[1].pageX),k=.5*(y[0].pageY+y[1].pageY);d.set(R,k)}}function I(){const R=y[0].pageX-y[1].pageX,k=y[0].pageY-y[1].pageY,Me=Math.sqrt(R*R+k*k);b.set(0,Me)}function re(){n.enableZoom&&I(),n.enablePan&&N()}function ae(){n.enableZoom&&I(),n.enableRotate&&de()}function ge(R){if(y.length==1)p.set(R.pageX,R.pageY);else{const Me=be(R),Ee=.5*(R.pageX+Me.x),Se=.5*(R.pageY+Me.y);p.set(Ee,Se)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const k=n.domElement;w(2*Math.PI*g.x/k.clientHeight),D(2*Math.PI*g.y/k.clientHeight),f.copy(p)}function me(R){if(y.length===1)m.set(R.pageX,R.pageY);else{const k=be(R),Me=.5*(R.pageX+k.x),Ee=.5*(R.pageY+k.y);m.set(Me,Ee)}_.subVectors(m,d).multiplyScalar(n.panSpeed),O(_.x,_.y),d.copy(m)}function Te(R){const k=be(R),Me=R.pageX-k.x,Ee=R.pageY-k.y,Se=Math.sqrt(Me*Me+Ee*Ee);x.set(0,Se),S.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),F(S.y),b.copy(x)}function E(R){n.enableZoom&&Te(R),n.enablePan&&me(R)}function P(R){n.enableZoom&&Te(R),n.enableRotate&&ge(R)}function q(R){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",J),n.domElement.addEventListener("pointerup",Q)),Z(R),R.pointerType==="touch"?T(R):pe(R))}function J(R){n.enabled!==!1&&(R.pointerType==="touch"?M(R):se(R))}function Q(R){ne(R),y.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",J),n.domElement.removeEventListener("pointerup",Q)),n.dispatchEvent(vh),s=r.NONE}function fe(R){ne(R)}function pe(R){let k;switch(R.button){case 0:k=n.mouseButtons.LEFT;break;case 1:k=n.mouseButtons.MIDDLE;break;case 2:k=n.mouseButtons.RIGHT;break;default:k=-1}switch(k){case Sr.DOLLY:if(n.enableZoom===!1)return;$(R),s=r.DOLLY;break;case Sr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;V(R),s=r.PAN}else{if(n.enableRotate===!1)return;K(R),s=r.ROTATE}break;case Sr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;K(R),s=r.ROTATE}else{if(n.enablePan===!1)return;V(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(El)}function se(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ce(R);break;case r.DOLLY:if(n.enableZoom===!1)return;ue(R);break;case r.PAN:if(n.enablePan===!1)return;ve(R);break}}function _e(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(El),H(R),n.dispatchEvent(vh))}function le(R){n.enabled===!1||n.enablePan===!1||ie(R)}function T(R){switch(he(R),y.length){case 1:switch(n.touches.ONE){case wr.ROTATE:if(n.enableRotate===!1)return;de(),s=r.TOUCH_ROTATE;break;case wr.PAN:if(n.enablePan===!1)return;N(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case wr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;re(),s=r.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(El)}function M(R){switch(he(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ge(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;me(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;E(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(R),n.update();break;default:s=r.NONE}}function U(R){n.enabled!==!1&&R.preventDefault()}function Z(R){y.push(R)}function ne(R){delete A[R.pointerId];for(let k=0;k<y.length;k++)if(y[k].pointerId==R.pointerId){y.splice(k,1);return}}function he(R){let k=A[R.pointerId];k===void 0&&(k=new Be,A[R.pointerId]=k),k.set(R.pageX,R.pageY)}function be(R){const k=R.pointerId===y[0].pointerId?y[1]:y[0];return A[k.pointerId]}n.domElement.addEventListener("contextmenu",U),n.domElement.addEventListener("pointerdown",q),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",_e,{passive:!1}),this.update()}}const dS=`uniform float uTime;
uniform vec3 uColor;
uniform float uBlueWave;
uniform float uGreenWave;
uniform float uReadWave;
uniform float uRatio;

varying float vElevation;
varying float vElevation2;

//	Classic Perlin 3D Noise 
//	by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

void main() {
  vec4 objPosition;
  vec4 beforeObj;
  vec4 afterObj;

  if (uColor.b >= 0.00001 ) {
    vec4 modelPositionBlue = modelMatrix * vec4(position, 1.0);
    float blueElevation = sin(modelPositionBlue.z * 80.0 + uTime) * uBlueWave;
    blueElevation += sin(modelPositionBlue.x * 30.0 + uTime) * uBlueWave;
    vElevation = blueElevation;
    vec3 normal = normalize(mat3(modelMatrix) * normal);
    vec3 newPosition = position + normal * blueElevation;
    vec4 blue = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

  if(uColor.b >= 0.00001) {
    afterObj = blue;
  }
  if(uColor.b >= 0.5) {
    afterObj = beforeObj;
    beforeObj = blue;
  }

  }
  if(uColor.r >= 0.00001) {
    vec4 modelPositionRed = modelMatrix * vec4(position, 1.0);
    float redElevation = sin(modelPositionRed.y * 0.5 + uTime) * uReadWave;
    modelPositionRed.y += redElevation;
    vec3 normal = normalize(mat3(modelMatrix) * normal);
    vec3 newPosition = position + normal * redElevation;
    vec4 red = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    if(uColor.r >= 0.00001) {
      afterObj = red;
    }
    if(uColor.r >= 0.5) {
      afterObj = beforeObj;
      beforeObj = red;
    }

  }
  if(uColor.g >= 0.00001) {
    vec4 modelPositionGreen = modelMatrix * vec4(position, 1.0);
    float GreenElevation = (cnoise(vec3(modelPositionGreen.xz * 3.0, uTime * 0.6))) * uGreenWave;
    vElevation2 = GreenElevation;
    vec3 normal = normalize(mat3(modelMatrix) * normal);
    vec3 newPosition2 = position + normal * GreenElevation;
    vec4 green = projectionMatrix * modelViewMatrix * vec4(newPosition2, 1.0);

    if(uColor.g >= 0.00001) {
      afterObj = green;
    }
    if(uColor.g >= 0.5) {
      afterObj = beforeObj;
      beforeObj = green;
    }
  }
  
  objPosition = mix(beforeObj, afterObj, uRatio);
  gl_Position = objPosition;
}
`,pS=`uniform vec3 uColor;
uniform float uTime;
uniform float uRatio;
uniform vec2 uResolution;

varying float vElevation;
varying float vElevation2;
varying vec3 vNormal;
varying vec3 vPosition;

// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

float random(in vec2 st) {
  return fract(sin(dot(st.xy,
  vec2(12.9898,78.233)))
  * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f*f*(3.0-2.0*f);
  return mix( mix( random( i + vec2(0.0,0.0) ),
  random( i + vec2(1.0,0.0) ), u.x),
  mix( random( i + vec2(0.0,1.0) ),
  random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
  return mat2(cos(angle),-sin(angle),
  sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
  float scale = 10.0;
  pos *= scale;
  return smoothstep(0.0,
  .5+b*.5,
  abs((sin(pos.x*3.1415)+b*2.0))*.5);
}

void main() {
  vec3 color;
  vec3 beforeColor;
  vec3 afterColor;

  beforeColor = uColor;

  // blue
  float mixStrengthColor = (vElevation * 1.5) * 7.0;
  vec3 blue = mix(vec3(0.2, 0.4, 1.0), uColor.rgb * 0.9, mixStrengthColor);
  if(uColor.b >= 0.00001) {
    afterColor = blue;
  }
  if(uColor.b >= 0.5) {
    afterColor = beforeColor;
    beforeColor = blue;
  }

  // red
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st.y *= uResolution.y / uResolution.x;
  vec2 pos = st.yx * vec2(10.,3.0);
  pos = rotate2d( noise(pos) ) * pos + uTime * 0.3;
  float pattern = lines(pos,.5);
  vec3 red = vec3(max(pattern, uColor.r), max(pattern, uColor.g), max(pattern, uColor.b));
  if(uColor.b >= 0.00001) {
    afterColor = red;
  }
  if(uColor.r >= 0.5) {
    afterColor = beforeColor;
    beforeColor = red;
  }

  // green
  if(uColor.g > uColor.r && uColor.g > uColor.b) {}
  float mixStrengthColor2 = (vElevation2 * 1.0) * 11.0;
  vec3 green = mix(vec3(0.4, 1.0, 0.2), uColor.rgb * 0.9, mixStrengthColor2);
  if(uColor.g >= 0.00001) {
    afterColor = green;
  }
  if(uColor.g >= 0.5) {
    afterColor = beforeColor;
    beforeColor = green;
  }

  color = mix(beforeColor, afterColor, uRatio);
  gl_FragColor = vec4(color,1.0);
}`,mS={class:"nav"},gS=yr({__name:"Canvas",setup(i){const e=md();Jr("duration",2);const n=new bp({antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio);const r=new pn(75,window.innerWidth/window.innerHeight,1,10);r.position.set(0,0,3);const s=new uS,o=new eu(1,32,32),a={uColor:{value:new tt("#000000")},uTime:{value:0},uBlueWave:{value:0},uGreenWave:{value:0},uReadWave:{value:0},uResolution:{value:new Be(0,0)},uRatio:{value:0}},l=new Ii({vertexShader:dS,fragmentShader:pS,side:ii,uniforms:a});Jr("mat",l);const c=new ri(o,l);s.add(c),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)},!1);const u=()=>{document.addEventListener("touchmove",function(g){g.preventDefault()},{passive:!1});const p=new hS(r,n.domElement);p.enableDamping=!0,p.dampingFactor=.5},h=new fS,f=()=>{requestAnimationFrame(()=>{f()}),n.render(s,r);const p=h.getElapsedTime();a.uTime.value=p};return Gc(()=>{e.value.appendChild(n.domElement),u(),f()}),(p,g)=>{const d=Ou("router-link"),m=Ou("router-view");return ss(),wa(En,null,[ia("nav",mS,[Mt(d,{to:"/",class:"nav__link"},{default:Gr(()=>[jo("Red")]),_:1}),Mt(d,{to:"/blue",class:"nav__link"},{default:Gr(()=>[jo("Blue")]),_:1}),Mt(d,{to:"/green",class:"nav__link"},{default:Gr(()=>[jo("Green")]),_:1})]),ia("div",{ref_key:"canvas",ref:e,id:"canvas"},null,512),Mt(m,null,{default:Gr(({Component:_})=>[Mt($c,null,{default:Gr(()=>[(ss(),Xd(s_(_)))]),_:2},1024)]),_:1})],64)}}});const _S=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},xS=_S(gS,[["__scopeId","data-v-d4c17b1b"]]),vS=yr({__name:"App",setup(i){return(e,t)=>(ss(),Xd(xS))}});/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hr=typeof window<"u";function yS(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const Ye=Object.assign;function Cl(i,e){const t={};for(const n in e){const r=e[n];t[n]=In(r)?r.map(i):i(r)}return t}const Hs=()=>{},In=Array.isArray,bS=/\/$/,MS=i=>i.replace(bS,"");function Al(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=ES(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function SS(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function yh(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function wS(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&fs(e.matched[n],t.matched[r])&&Mp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function fs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Mp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!TS(i[t],e[t]))return!1;return!0}function TS(i,e){return In(i)?bh(i,e):In(e)?bh(e,i):i===e}function bh(i,e){return In(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function ES(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var io;(function(i){i.pop="pop",i.push="push"})(io||(io={}));var Ws;(function(i){i.back="back",i.forward="forward",i.unknown=""})(Ws||(Ws={}));function CS(i){if(!i)if(Hr){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),MS(i)}const AS=/^[^#]+#/;function PS(i,e){return i.replace(AS,"#")+e}function RS(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function LS(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=RS(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mh(i,e){return(history.state?history.state.position-e:-1)+i}const ac=new Map;function DS(i,e){ac.set(i,e)}function IS(i){const e=ac.get(i);return ac.delete(i),e}let OS=()=>location.protocol+"//"+location.host;function Sp(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),yh(l,"")}return yh(t,i)+n+r}function FS(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const p=Sp(i,location),g=t.value,d=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===g){o=null;return}m=d?f.position-d.position:0}else n(p);r.forEach(_=>{_(t.value,g,{delta:m,type:io.pop,direction:m?m>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){o=t.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ye({},f.state,{scroll:Ra()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Sh(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?Ra():null}}function NS(i){const{history:e,location:t}=window,n={value:Sp(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:OS()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){const u=Ye({},e.state,Sh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=Ye({},r.value,e.state,{forward:l,scroll:Ra()});s(u.current,u,!0);const h=Ye({},Sh(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function zS(i){i=CS(i);const e=NS(i),t=FS(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ye({location:"",base:i,go:n,createHref:PS.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function US(i){return typeof i=="string"||i&&typeof i=="object"}function wp(i){return typeof i=="string"||typeof i=="symbol"}const vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tp=Symbol("");var wh;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(wh||(wh={}));function hs(i,e){return Ye(new Error,{type:i,[Tp]:!0},e)}function Jn(i,e){return i instanceof Error&&Tp in i&&(e==null||!!(i.type&e))}const Th="[^/]+?",BS={sensitive:!1,strict:!1,start:!0,end:!0},kS=/[.+*?^${}()[\]/\\]/g;function GS(i,e){const t=Ye({},BS,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(kS,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=f;s.push({name:g,repeatable:d,optional:m});const b=_||Th;if(b!==Th){p+=10;try{new RegExp(`(${b})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+S.message)}}let x=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=20,m&&(p+=-8),d&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(In(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=In(_)?_.join("/"):_;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function VS(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function HS(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=VS(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Eh(n))return 1;if(Eh(r))return-1}return r.length-n.length}function Eh(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const WS={type:0,value:""},qS=/[a-zA-Z0-9_]/;function XS(i){if(!i)return[[]];if(i==="/")return[[WS]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:qS.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function jS(i,e,t){const n=GS(XS(i.path),t),r=Ye(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function YS(i,e){const t=[],n=new Map;e=Ph({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const p=!f,g=$S(u);g.aliasOf=f&&f.record;const d=Ph(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of x)m.push(Ye({},g,{components:f?f.record.components:g.components,path:S,aliasOf:f?f.record:g}))}let _,b;for(const x of m){const{path:S}=x;if(h&&S[0]!=="/"){const y=h.record.path,A=y[y.length-1]==="/"?"":"/";x.path=h.record.path+(S&&A+S)}if(_=jS(x,h,d),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),p&&u.name&&!Ah(_)&&o(u.name)),g.children){const y=g.children;for(let A=0;A<y.length;A++)s(y[A],_,f&&f.children[A])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:Hs}function o(u){if(wp(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&HS(u,t[h])>=0&&(u.record.path!==t[h].record.path||!Ep(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Ah(u)&&n.set(u.record.name,u)}function c(u,h){let f,p={},g,d;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw hs(1,{location:u});d=f.record.name,p=Ye(Ch(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Ch(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(p=f.parse(g),d=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw hs(1,{location:u,currentLocation:h});d=f.record.name,p=Ye({},h.params,u.params),g=f.stringify(p)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:ZS(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ch(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function $S(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:KS(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function KS(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Ah(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function ZS(i){return i.reduce((e,t)=>Ye(e,t.meta),{})}function Ph(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function Ep(i,e){return e.children.some(t=>t===i||Ep(i,t))}const Cp=/#/g,JS=/&/g,QS=/\//g,e1=/=/g,t1=/\?/g,Ap=/\+/g,n1=/%5B/g,i1=/%5D/g,Pp=/%5E/g,r1=/%60/g,Rp=/%7B/g,s1=/%7C/g,Lp=/%7D/g,o1=/%20/g;function tu(i){return encodeURI(""+i).replace(s1,"|").replace(n1,"[").replace(i1,"]")}function a1(i){return tu(i).replace(Rp,"{").replace(Lp,"}").replace(Pp,"^")}function lc(i){return tu(i).replace(Ap,"%2B").replace(o1,"+").replace(Cp,"%23").replace(JS,"%26").replace(r1,"`").replace(Rp,"{").replace(Lp,"}").replace(Pp,"^")}function l1(i){return lc(i).replace(e1,"%3D")}function c1(i){return tu(i).replace(Cp,"%23").replace(t1,"%3F")}function u1(i){return i==null?"":c1(i).replace(QS,"%2F")}function sa(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function f1(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Ap," "),o=s.indexOf("="),a=sa(o<0?s:s.slice(0,o)),l=o<0?null:sa(s.slice(o+1));if(a in e){let c=e[a];In(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Rh(i){let e="";for(let t in i){const n=i[t];if(t=l1(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(n)?n.map(s=>s&&lc(s)):[n&&lc(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function h1(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=In(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const Dp=Symbol(""),Lh=Symbol(""),nu=Symbol(""),Ip=Symbol(""),cc=Symbol("");function Is(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function d1(i,e,t){const n=()=>{i[e].delete(t)};Vc(n),Dd(n),Ld(()=>{i[e].add(t)}),i[e].add(t)}function iu(i){const e=Lt(Dp,{}).value;e&&d1(e,"leaveGuards",i)}function bi(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(hs(4,{from:t,to:e})):h instanceof Error?a(h):US(h)?a(hs(2,{from:e,to:h})):(s&&n.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Pl(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(p1(a)){const c=(a.__vccOpts||a)[e];c&&r.push(bi(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=yS(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&bi(f,t,n,s,o)()}))}}return r}function p1(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Dh(i){const e=Lt(nu),t=Lt(Ip),n=mn(()=>e.resolve(Kr(i.to))),r=mn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(fs.bind(null,u));if(f>-1)return f;const p=Ih(l[c-2]);return c>1&&Ih(u)===p&&h[h.length-1].path!==p?h.findIndex(fs.bind(null,l[c-2])):f}),s=mn(()=>r.value>-1&&x1(t.params,n.value.params)),o=mn(()=>r.value>-1&&r.value===t.matched.length-1&&Mp(t.params,n.value.params));function a(l={}){return _1(l)?e[Kr(i.replace)?"replace":"push"](Kr(i.to)).catch(Hs):Promise.resolve()}return{route:n,href:mn(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const m1=yr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dh,setup(i,{slots:e}){const t=uo(Dh(i)),{options:n}=Lt(nu),r=mn(()=>({[Oh(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Oh(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:Yc("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),g1=m1;function _1(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function x1(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!In(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function Ih(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Oh=(i,e,t)=>i??e??t,v1=yr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Lt(cc),r=mn(()=>i.route||n.value),s=Lt(Lh,0),o=mn(()=>{let c=Kr(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=mn(()=>r.value.matched[o.value]);Jr(Lh,mn(()=>o.value+1)),Jr(Dp,a),Jr(cc,r);const l=md();return Wo(()=>[l.value,a.value,i.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!fs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Fh(t.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Yc(f,Ye({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Fh(t.default,{Component:m,route:c})||m}}});function Fh(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const y1=v1;function b1(i){const e=YS(i.routes,i),t=i.parseQuery||f1,n=i.stringifyQuery||Rh,r=i.history,s=Is(),o=Is(),a=Is(),l=Lg(vi);let c=vi;Hr&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cl.bind(null,N=>""+N),h=Cl.bind(null,u1),f=Cl.bind(null,sa);function p(N,I){let re,ae;return wp(N)?(re=e.getRecordMatcher(N),ae=I):ae=N,e.addRoute(ae,re)}function g(N){const I=e.getRecordMatcher(N);I&&e.removeRoute(I)}function d(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function _(N,I){if(I=Ye({},I||l.value),typeof N=="string"){const E=Al(t,N,I.path),P=e.resolve({path:E.path},I),q=r.createHref(E.fullPath);return Ye(E,P,{params:f(P.params),hash:sa(E.hash),redirectedFrom:void 0,href:q})}let re;if("path"in N)re=Ye({},N,{path:Al(t,N.path,I.path).path});else{const E=Ye({},N.params);for(const P in E)E[P]==null&&delete E[P];re=Ye({},N,{params:h(N.params)}),I.params=h(I.params)}const ae=e.resolve(re,I),ge=N.hash||"";ae.params=u(f(ae.params));const me=SS(n,Ye({},N,{hash:a1(ge),path:ae.path})),Te=r.createHref(me);return Ye({fullPath:me,hash:ge,query:n===Rh?h1(N.query):N.query||{}},ae,{redirectedFrom:void 0,href:Te})}function b(N){return typeof N=="string"?Al(t,N,l.value.path):Ye({},N)}function x(N,I){if(c!==N)return hs(8,{from:I,to:N})}function S(N){return L(N)}function y(N){return S(Ye(b(N),{replace:!0}))}function A(N){const I=N.matched[N.matched.length-1];if(I&&I.redirect){const{redirect:re}=I;let ae=typeof re=="function"?re(N):re;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=b(ae):{path:ae},ae.params={}),Ye({query:N.query,hash:N.hash,params:"path"in ae?{}:N.params},ae)}}function L(N,I){const re=c=_(N),ae=l.value,ge=N.state,me=N.force,Te=N.replace===!0,E=A(re);if(E)return L(Ye(b(E),{state:typeof E=="object"?Ye({},ge,E.state):ge,force:me,replace:Te}),I||re);const P=re;P.redirectedFrom=I;let q;return!me&&wS(n,ae,re)&&(q=hs(16,{to:P,from:ae}),ue(ae,ae,!0,!1)),(q?Promise.resolve(q):w(P,ae)).catch(J=>Jn(J)?Jn(J,2)?J:ce(J):$(J,P,ae)).then(J=>{if(J){if(Jn(J,2))return L(Ye({replace:Te},b(J.to),{state:typeof J.to=="object"?Ye({},ge,J.to.state):ge,force:me}),I||P)}else J=W(P,ae,!0,Te,ge);return D(P,ae,J),J})}function v(N,I){const re=x(N,I);return re?Promise.reject(re):Promise.resolve()}function w(N,I){let re;const[ae,ge,me]=M1(N,I);re=Pl(ae.reverse(),"beforeRouteLeave",N,I);for(const E of ae)E.leaveGuards.forEach(P=>{re.push(bi(P,N,I))});const Te=v.bind(null,N,I);return re.push(Te),Br(re).then(()=>{re=[];for(const E of s.list())re.push(bi(E,N,I));return re.push(Te),Br(re)}).then(()=>{re=Pl(ge,"beforeRouteUpdate",N,I);for(const E of ge)E.updateGuards.forEach(P=>{re.push(bi(P,N,I))});return re.push(Te),Br(re)}).then(()=>{re=[];for(const E of N.matched)if(E.beforeEnter&&!I.matched.includes(E))if(In(E.beforeEnter))for(const P of E.beforeEnter)re.push(bi(P,N,I));else re.push(bi(E.beforeEnter,N,I));return re.push(Te),Br(re)}).then(()=>(N.matched.forEach(E=>E.enterCallbacks={}),re=Pl(me,"beforeRouteEnter",N,I),re.push(Te),Br(re))).then(()=>{re=[];for(const E of o.list())re.push(bi(E,N,I));return re.push(Te),Br(re)}).catch(E=>Jn(E,8)?E:Promise.reject(E))}function D(N,I,re){for(const ae of a.list())ae(N,I,re)}function W(N,I,re,ae,ge){const me=x(N,I);if(me)return me;const Te=I===vi,E=Hr?history.state:{};re&&(ae||Te?r.replace(N.fullPath,Ye({scroll:Te&&E&&E.scroll},ge)):r.push(N.fullPath,ge)),l.value=N,ue(N,I,re,Te),ce()}let B;function O(){B||(B=r.listen((N,I,re)=>{if(!de.listening)return;const ae=_(N),ge=A(ae);if(ge){L(Ye(ge,{replace:!0}),ae).catch(Hs);return}c=ae;const me=l.value;Hr&&DS(Mh(me.fullPath,re.delta),Ra()),w(ae,me).catch(Te=>Jn(Te,12)?Te:Jn(Te,2)?(L(Te.to,ae).then(E=>{Jn(E,20)&&!re.delta&&re.type===io.pop&&r.go(-1,!1)}).catch(Hs),Promise.reject()):(re.delta&&r.go(-re.delta,!1),$(Te,ae,me))).then(Te=>{Te=Te||W(ae,me,!1),Te&&(re.delta&&!Jn(Te,8)?r.go(-re.delta,!1):re.type===io.pop&&Jn(Te,20)&&r.go(-1,!1)),D(ae,me,Te)}).catch(Hs)}))}let F=Is(),j=Is(),K;function $(N,I,re){ce(N);const ae=j.list();return ae.length?ae.forEach(ge=>ge(N,I,re)):console.error(N),Promise.reject(N)}function V(){return K&&l.value!==vi?Promise.resolve():new Promise((N,I)=>{F.add([N,I])})}function ce(N){return K||(K=!N,O(),F.list().forEach(([I,re])=>N?re(N):I()),F.reset()),N}function ue(N,I,re,ae){const{scrollBehavior:ge}=i;if(!Hr||!ge)return Promise.resolve();const me=!re&&IS(Mh(N.fullPath,0))||(ae||!re)&&history.state&&history.state.scroll||null;return yd().then(()=>ge(N,I,me)).then(Te=>Te&&LS(Te)).catch(Te=>$(Te,N,I))}const ve=N=>r.go(N);let H;const ie=new Set,de={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:i,push:S,replace:y,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:j.add,isReady:V,install(N){const I=this;N.component("RouterLink",g1),N.component("RouterView",y1),N.config.globalProperties.$router=I,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(l)}),Hr&&!H&&l.value===vi&&(H=!0,S(r.location).catch(ge=>{}));const re={};for(const ge in vi)re[ge]=mn(()=>l.value[ge]);N.provide(nu,I),N.provide(Ip,uo(re)),N.provide(cc,l);const ae=N.unmount;ie.add(N),N.unmount=function(){ie.delete(N),ie.size<1&&(c=vi,B&&B(),B=null,l.value=vi,H=!1,K=!1),ae()}}};return de}function Br(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function M1(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>fs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>fs(c,l))||r.push(l))}return[t,n,r]}function ei(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Op(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ds={duration:.5,overwrite:!1,delay:0},ru,Dt,ft,_n=1e8,Ze=1/_n,uc=Math.PI*2,S1=uc/4,w1=0,Fp=Math.sqrt,T1=Math.cos,E1=Math.sin,yt=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},ci=function(e){return typeof e=="number"},su=function(e){return typeof e>"u"},Wn=function(e){return typeof e=="object"},Ht=function(e){return e!==!1},Np=function(){return typeof window<"u"},Vo=function(e){return rt(e)||yt(e)},zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},It=Array.isArray,fc=/(?:-?\.?\d|\.)+/gi,Up=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bp=/[+-]=-?[.\d]+/,kp=/[^,'"\[\]\s]+/gi,C1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nt,hn,hc,ou,on={},oa={},Gp,Vp=function(e){return(oa=vr(e,on))&&an},au=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},Hp=function(e,t){return e&&(on[e]=t)&&oa&&(oa[e]=t)||on},ro=function(){return 0},A1={suppressEvents:!0,isStart:!0,kill:!1},Ko={suppressEvents:!0,kill:!1},P1={suppressEvents:!0},lu={},Ai=[],dc={},Wp,Jt={},Ll={},Nh=30,Zo=[],cu="",uu=function(e){var t=e[0],n,r;if(Wn(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zo.length;r--&&!Zo[r].targetTest(t););n=Zo[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new hm(e[r],n)))||e.splice(r,1);return e},hr=function(e){return e._gsap||uu(xn(e))[0]._gsap},qp=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():su(n)&&e.getAttribute&&e.getAttribute(t)||n},Wt=function(e,t){return(e=e.split(",")).forEach(t)||e},ot=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},ts=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},R1=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},la=function(){var e=Ai.length,t=Ai.slice(0),n,r;for(dc={},Ai.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Xp=function(e,t,n,r){Ai.length&&!Dt&&la(),e.render(t,n,r||Dt&&t<0&&(e._initted||e._startAt)),Ai.length&&!Dt&&la()},jp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kp).length<2?t:yt(e)?e.trim():e},Yp=function(e){return e},bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},L1=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},vr=function(e,t){for(var n in t)e[n]=t[n];return e},zh=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ca=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},qs=function(e){var t=e.parent||nt,n=e.keyframes?L1(It(e.keyframes)):bn;if(Ht(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},D1=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},$p=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},La=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Oi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},dr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},I1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},pc=function(e,t,n,r){return e._startAt&&(Dt?e._startAt.revert(Ko):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},O1=function i(e){return!e||e._ts&&i(e.parent)},Uh=function(e){return e._repeat?ps(e._tTime,e=e.duration()+e._rDelay)*e:0},ps=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ua=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Da=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},Ia=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Da(e),n._dirty||dr(n,e)),e},Kp=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ua(e.rawTime(),t),(!t._dur||mo(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),dr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},Bn=function(e,t,n,r){return t.parent&&Oi(t),t._start=bt((ci(n)?n:n||e!==nt?fn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$p(e,t,"_first","_last",e._sort?"_start":0),mc(t)||(e._recent=t),r||Kp(e,t),e._ts<0&&Ia(e,e._tTime),e},Zp=function(e,t){return(on.ScrollTrigger||au("scrollTrigger",t))&&on.ScrollTrigger.create(t,e)},Jp=function(e,t,n,r,s){if(hu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wp!==Qt.frame)return Ai.push(e),e._lazy=[s,r],1},F1=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},mc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},N1=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&F1(e)&&!(!e._initted&&mc(e))||(e._ts<0||e._dp._ts<0)&&!mc(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=mo(0,e._tDur,t),u=ps(l,a),e._yoyo&&u&1&&(o=1-o),u!==ps(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Dt||r||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&Jp(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&pc(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Oi(e,1),!n&&!Dt&&(vn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},z1=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ms=function(e,t,n,r){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ia(e,e._tTime=e._tDur*a),e.parent&&Da(e),n||dr(e.parent,e),e},Bh=function(e){return e instanceof Vt?dr(e):ms(e,e._dur)},U1={_start:0,endTime:ro,totalDuration:ro},fn=function i(e,t,n){var r=e.labels,s=e._recent||U1,o=e.duration()>=_n?s.endTime(!1):e._dur,a,l,c;return yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(It(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Xs=function(e,t,n){var r=ci(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ht(l.vars.inherit)&&l.parent;o.immediateRender=Ht(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new dt(t[0],o,t[s+1])},zi=function(e,t){return e||e===0?t(e):t},mo=function(e,t,n){return n<e?e:n>t?t:n},Pt=function(e,t){return!yt(e)||!(t=C1.exec(e))?"":t[1]},B1=function(e,t,n){return zi(n,function(r){return mo(e,t,r)})},gc=[].slice,Qp=function(e,t){return e&&Wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wn(e[0]))&&!e.nodeType&&e!==hn},k1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return yt(r)&&!t||Qp(r,1)?(s=n).push.apply(s,xn(r)):n.push(r)})||n},xn=function(e,t,n){return ft&&!t&&ft.selector?ft.selector(e):yt(e)&&!n&&(hc||!gs())?gc.call((t||ou).querySelectorAll(e),0):It(e)?k1(e,n):Qp(e)?gc.call(e,0):e?[e]:[]},_c=function(e){return e=xn(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xn(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||ou.createElement("div"):e)}},em=function(e){return e.sort(function(){return .5-Math.random()})},tm=function(e){if(rt(e))return e;var t=Wn(e)?e:{each:e},n=pr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return yt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,g){var d=(g||t).length,m=o[d],_,b,x,S,y,A,L,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,_n])[1],!w){for(L=-_n;L<(L=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*u-.5:r%w,b=w===_n?0:l?d*h/w-.5:r/w|0,L=0,v=_n,A=0;A<d;A++)x=A%w-_,S=b-(A/w|0),m[A]=y=c?Math.abs(c==="y"?S:x):Fp(x*x+S*S),y>L&&(L=y),y<v&&(v=y);r==="random"&&em(m),m.max=L-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Pt(t.amount||t.each)||0,n=n&&d<0?cm(n):n}return d=(m[f]-m.min)/m.max||0,bt(m.b+(n?n(d):d)*m.v)+m.u}},xc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ci(n)?0:Pt(n))}},nm=function(e,t){var n=It(e),r,s;return!n&&Wn(e)&&(r=n=e.radius||_n,e.values?(e=xn(e.values),(s=!ci(e[0]))&&(r*=r)):e=xc(e.increment)),zi(t,n?rt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=_n,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||ci(o)?u:u+Pt(o)}:xc(e))},im=function(e,t,n,r){return zi(It(e)?!t:n===!0?!!(n=0):!r,function(){return It(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},G1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},V1=function(e,t){return function(n){return e(parseFloat(n))+(t||Pt(n))}},H1=function(e,t,n){return sm(e,t,0,1,n)},rm=function(e,t,n){return zi(n,function(r){return e[~~t(r)]})},W1=function i(e,t,n){var r=t-e;return It(e)?rm(e,i(0,e.length),t):zi(n,function(s){return(r+(s-e)%r)%r+e})},q1=function i(e,t,n){var r=t-e,s=r*2;return It(e)?rm(e,i(0,e.length-1),t):zi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},so=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?kp:fc),n+=e.substr(t,r-t)+im(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},sm=function(e,t,n,r,s){var o=t-e,a=r-n;return zi(s,function(l){return n+((l-e)/o*a||0)})},X1=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=yt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(It(e)&&!It(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else r||(e=vr(It(e)?[]:{},e));if(!u){for(l in t)fu.call(a,e,l,"get",t[l]);s=function(g){return mu(g,a)||(o?e.p:e)}}}return zi(n,s)},kh=function(e,t,n){var r=e.labels,s=_n,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},vn=function(e,t,n){var r=e.vars,s=r[t],o=ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ai.length&&la(),a&&(ft=a),u=l?s.apply(c,l):s.call(c),ft=o,u},Us=function(e){return Oi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dt),e.progress()<1&&vn(e,"onInterrupt"),e},jr,j1=function(e){e=!e.name&&e.default||e;var t=e.name,n=rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ro,render:mu,add:fu,kill:cw,modifier:lw,rawVars:0},o={targetTest:0,get:0,getSetter:pu,aliases:{},register:0};if(gs(),e!==r){if(Jt[t])return;bn(r,bn(ca(e,s),o)),vr(r.prototype,vr(s,ca(e,o))),Jt[r.prop=t]=r,e.targetTest&&(Zo.push(r),lu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hp(t,r),e.register&&e.register(an,r,qt)},Ke=255,Bs={aqua:[0,Ke,Ke],lime:[0,Ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ke],navy:[0,0,128],white:[Ke,Ke,Ke],olive:[128,128,0],yellow:[Ke,Ke,0],orange:[Ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ke,0,0],pink:[Ke,192,203],cyan:[0,Ke,Ke],transparent:[Ke,Ke,Ke,0]},Dl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ke+.5|0},om=function(e,t,n){var r=e?ci(e)?[e>>16,e>>8&Ke,e&Ke]:0:Bs.black,s,o,a,l,c,u,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])r=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ke,r&Ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ke,e&Ke]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(fc),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Dl(l+1/3,s,o),r[1]=Dl(l,s,o),r[2]=Dl(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Up),n&&r.length<4&&(r[3]=1),r}else r=e.match(fc)||Bs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Ke,o=r[1]/Ke,a=r[2]/Ke,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},am=function(e){var t=[],n=[],r=-1;return e.split(Pi).forEach(function(s){var o=s.match(Xr)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Gh=function(e,t,n){var r="",s=(e+r).match(Pi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=om(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=am(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Pi,"1").split(Xr),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Pi),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Pi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Y1=/hsl[a]?\(/,lm=function(e){var t=e.join(" "),n;if(Pi.lastIndex=0,Pi.test(t))return n=Y1.test(t),e[1]=Gh(e[1],n),e[0]=Gh(e[0],n,am(e[1])),!0},oo,Qt=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function d(m){var _=i()-r,b=m===!0,x,S,y,A;if(_>e&&(n+=_-t),r+=_,y=r-n,x=y-o,(x>0||b)&&(A=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,o+=x+(x>=s?4:s-x),S=1),b||(l=c(d)),S)for(p=0;p<a.length;p++)a[p](y,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Gp&&(!hc&&Np()&&(hn=hc=window,ou=hn.document||{},on.gsap=an,(hn.gsapVersions||(hn.gsapVersions=[])).push(an.version),Vp(oa||hn.GreenSockGlobals||!hn.gsap&&hn||{}),u=hn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},oo=1,g(2))},sleep:function(){(u?hn.cancelAnimationFrame:clearTimeout)(l),oo=0,c=ro},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,b){var x=_?function(S,y,A,L){m(S,y,A,L),h.remove(x)}:m;return h.remove(m),a[b?"unshift":"push"](x),gs(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),gs=function(){return!oo&&Qt.wake()},ke={},$1=/^[\d.\-M][\d.\-,\s]/,K1=/["']/g,Z1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(K1,"").trim():+c,r=l.substr(a+1).trim();return t},J1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Q1=function(e){var t=(e+"").split("("),n=ke[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Z1(t[1])]:J1(e).split(",").map(jp)):ke._CE&&$1.test(e)?ke._CE("",e):n},cm=function(e){return function(t){return 1-e(1-t)}},um=function i(e,t){for(var n=e._first,r;n;)n instanceof Vt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},pr=function(e,t){return e&&(rt(e)?e:ke[e]||Q1(e))||t},Mr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Wt(e,function(a){ke[a]=on[a]=s,ke[o=a.toLowerCase()]=n;for(var l in s)ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ke[a+"."+l]=s[l]}),s},fm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/uc*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*E1((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:fm(a);return s=uc/s,l.config=function(c,u){return i(e,c,u)},l},Ol=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fm(n);return r.config=function(s){return i(e,s)},r};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Mr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ke.Linear.easeNone=ke.none=ke.Linear.easeIn;Mr("Elastic",Il("in"),Il("out"),Il());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Mr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Mr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Mr("Circ",function(i){return-(Fp(1-i*i)-1)});Mr("Sine",function(i){return i===1?1:-T1(i*S1)+1});Mr("Back",Ol("in"),Ol("out"),Ol());ke.SteppedEase=ke.steps=on.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ze;return function(a){return((r*mo(0,o,a)|0)+s)*n}}};ds.ease=ke["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return cu+=i+","+i+"Params,"});var hm=function(e,t){this.id=w1++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qp,this.set=t?t.getSetter:pu},_s=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ms(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),oo||Qt.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ia(this,n),!s._dp||s.parent||Kp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xp(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Uh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Uh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ps(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ua(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(mo(-this._delay,this._tDur,r),!0),Da(this),I1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(gs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Bn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ht(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ua(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=P1);var r=Dt;return Dt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Bh(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(fn(this,n),Ht(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ht(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=rt(n)?n:Yp,a=function(){var c=r.then;r.then=null,rt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Us(this)},i}();bn(_s.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Vt=function(i){Op(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ht(n.sortChildren),nt&&Bn(n.parent||nt,ei(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zp(ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Xs(0,arguments,this),this},t.from=function(r,s,o){return Xs(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Xs(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(r,s,fn(this,o),1),this},t.call=function(r,s,o){return Bn(this,dt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new dt(r,o,fn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,qs(o).immediateRender=Ht(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,qs(a).immediateRender=Ht(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:bt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,d,m,_,b,x,S,y,A,L;if(this!==nt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,S=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=bt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),y=ps(this._tTime,m),!a&&this._tTime&&y!==d&&(y=d),A&&d&1&&(f=c-f,L=1),d!==y&&!this._lock){var v=A&&y&1,w=v===(A&&d&1);if(d<y&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(L?0:bt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;um(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=z1(this,bt(a),bt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&(vn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-Ze);break}}p=g}else{p=this._last;for(var D=r<0?r:f;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,s,o||Dt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=D?-Ze:Ze);break}}p=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-Ze)._zTime=f>=a?1:-1,this._ts))return this._start=S,Da(this),this.render(r,s,o);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Oi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(vn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ci(s)||(s=fn(this,s,r)),!(r instanceof _s)){if(It(r))return r.forEach(function(a){return o.add(a,s)}),this;if(yt(r))return this.addLabel(r,s);if(rt(r))r=dt.delayedCall(0,r);else return this}return this!==r?Bn(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-_n);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof dt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return yt(r)?this.removeLabel(r):rt(r)?this.killTweensOf(r):(La(this,r),r===this._recent&&(this._recent=this._last),dr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(Qt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=dt.delayedCall(0,s||ro,o);return a.data="isPause",this._hasPause=1,Bn(this,a,fn(this,r))},t.removePause=function(r){var s=this._first;for(r=fn(this,r);s;)s._start===r&&s.data==="isPause"&&Oi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Mi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=xn(r),l=this._first,c=ci(s),u;l;)l instanceof dt?R1(l._targets,a)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=fn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=dt.to(o,bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ze,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ms(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,bn({startAt:{time:fn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),kh(this,fn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),kh(this,fn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return dr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),dr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=_n,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ms(o,o===nt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(nt._ts&&(Xp(nt,ua(r,nt)),Wp=Qt.frame),Qt.frame>=Nh){Nh+=sn.autoSleep||120;var s=nt._first;if((!s||!s._ts)&&sn.autoSleep&&Qt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qt.sleep()}}},e}(_s);bn(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ew=function(e,t,n,r,s,o,a){var l=new qt(this._pt,e,t,0,1,xm,null,s),c=0,u=0,h,f,p,g,d,m,_,b;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=so(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),f=n.match(Rl)||[];h=Rl.exec(r);)g=h[0],d=r.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?ts(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Rl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Bp.test(r)||_)&&(l.e=0),this._pt=l,l},fu=function(e,t,n,r,s,o,a,l,c,u){rt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:rt(h)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=rt(h)?c?sw:gm:du,g;if(yt(r)&&(~r.indexOf("random(")&&(r=so(r)),r.charAt(1)==="="&&(g=ts(f,r)+(Pt(f)||0),(g||g===0)&&(r=g))),!u||f!==r||vc)return!isNaN(f*r)&&r!==""?(g=new qt(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?aw:_m,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&au(t,r),ew.call(this,e,t,f,r,p,l||sn.stringFilter,c))},tw=function(e,t,n,r,s){if(rt(e)&&(e=js(e,s,t,n,r)),!Wn(e)||e.style&&e.nodeType||It(e)||zp(e))return yt(e)?js(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=js(e[a],s,t,n,r);return o},dm=function(e,t,n,r,s,o){var a,l,c,u;if(Jt[e]&&(a=new Jt[e]).init(s,a.rawVars?t[e]:tw(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new qt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==jr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mi,vc,hu=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,b=e._targets,x=e.parent,S=x&&x.data==="nested"?x.vars.targets:b,y=e._overwrite==="auto"&&!ru,A=e.timeline,L,v,w,D,W,B,O,F,j,K,$,V,ce;if(A&&(!g||!s)&&(s="none"),e._ease=pr(s,ds.ease),e._yEase=p?cm(pr(p===!0?s:p,ds.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!A&&!!r.runBackwards,!A||g&&!r.stagger){if(F=b[0]?hr(b[0]).harness:0,V=F&&r[F.prop],L=ca(r,lu),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&m?Ko:A1),_._lazy=0),o){if(Oi(e._startAt=dt.set(b,bn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Ht(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt||!a&&!d)&&e._startAt.revert(Ko),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),w=bn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ht(l),immediateRender:a,stagger:0,parent:x},L),V&&(w[F.prop]=V),Oi(e._startAt=dt.set(b,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt?e._startAt.revert(Ko):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ht(l)||l&&!m,v=0;v<b.length;v++){if(W=b[v],O=W._gsap||uu(b)[v]._gsap,e._ptLookup[v]=K={},dc[O.id]&&Ai.length&&la(),$=S===b?v:S.indexOf(W),F&&(j=new F).init(W,V||L,e,$,S)!==!1&&(e._pt=D=new qt(e._pt,W,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(ue){K[ue]=D}),j.priority&&(B=1)),!F||V)for(w in L)Jt[w]&&(j=dm(w,L,e,$,W,S))?j.priority&&(B=1):K[w]=D=fu.call(e,W,w,"get",L[w],$,S,0,r.stringFilter);e._op&&e._op[v]&&e.kill(W,e._op[v]),y&&e._pt&&(Mi=e,nt.killTweensOf(W,K,e.globalTime(t)),ce=!e.parent,Mi=0),e._pt&&l&&(dc[O.id]=1)}B&&vm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ce,g&&t<=0&&A.render(_n,!0,!0)},nw=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return vc=1,e.vars[t]="+=0",hu(e,a),vc=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ot(n)+Pt(u.e)),u.b&&(u.b=c.s+Pt(u.b))},iw=function(e,t){var n=e[0]?hr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=vr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rw=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(It(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},js=function(e,t,n,r,s){return rt(e)?e.call(t,n,r,s):yt(e)&&~e.indexOf("random(")?so(e):e},pm=cu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mm={};Wt(pm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return mm[i]=1});var dt=function(i){Op(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:qs(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=r.parent||nt,x=(It(n)||zp(n)?ci(n[0]):"length"in r)?[n]:xn(n),S,y,A,L,v,w,D,W;if(a._targets=x.length?uu(x):aa("GSAP target "+n+" not found. https://greensock.com",!sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Vo(c)||Vo(u)){if(r=a.vars,S=a.timeline=new Vt({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:x}),S.kill(),S.parent=S._dp=ei(a),S._start=0,f||Vo(c)||Vo(u)){if(L=x.length,D=f&&tm(f),Wn(f))for(v in f)~pm.indexOf(v)&&(W||(W={}),W[v]=f[v]);for(y=0;y<L;y++)A=ca(r,mm),A.stagger=0,_&&(A.yoyoEase=_),W&&vr(A,W),w=x[y],A.duration=+js(c,ei(a),y,w,x),A.delay=(+js(u,ei(a),y,w,x)||0)-a._delay,!f&&L===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(w,A,D?D(y,w,x):0),S._ease=ke.none;S.duration()?c=u=0:a.timeline=0}else if(g){qs(bn(S.vars.defaults,{ease:"none"})),S._ease=pr(g.ease||r.ease||"none");var B=0,O,F,j;if(It(g))g.forEach(function(K){return S.to(x,K,">")}),S.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||rw(v,g[v],A,g.easeEach);for(v in A)for(O=A[v].sort(function(K,$){return K.t-$.t}),B=0,y=0;y<O.length;y++)F=O[y],j={ease:F.e,duration:(F.t-(y?O[y-1].t:0))/100*c},j[v]=F.v,S.to(x,j,B),B+=j.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return p===!0&&!ru&&(Mi=ei(a),nt.killTweensOf(x),Mi=0),Bn(b,ei(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===bt(b._time)&&Ht(h)&&O1(ei(a))&&b.data!=="nested")&&(a._tTime=-Ze,a.render(Math.max(0,-u)||0)),m&&Zp(ei(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ze&&!u?l:r<Ze?0:r,f,p,g,d,m,_,b,x,S;if(!c)N1(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(f=bt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(S=this._yEase,f=c-f),m=ps(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&um(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(bt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Jp(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(S||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&(vn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(r<0?r:!f&&_?-Ze:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&pc(this,r,s,o),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&pc(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Oi(this,1),!s&&!(u&&!a)&&(h||a||_)&&(vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){oo||Qt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||hu(this,l),c=this._ease(l/this._dur),nw(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Ia(this,0),this.parent||$p(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Us(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Mi&&Mi.vars.overwrite!==!0)._first||Us(this),this.parent&&o!==this.timeline.totalDuration()&&ms(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?xn(r):a,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&D1(a,l))return s==="all"&&(this._pt=0),Us(this);for(h=this._op=this._op||[],s!=="all"&&(yt(s)&&(d={},Wt(s,function(b){return d[b]=1}),s=d),s=iw(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&La(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Us(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Xs(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Xs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return nt.killTweensOf(r,s,o)},e}(_s);bn(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(i){dt[i]=function(){var e=new Vt,t=gc.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var du=function(e,t,n){return e[t]=n},gm=function(e,t,n){return e[t](n)},sw=function(e,t,n,r){return e[t](r.fp,n)},ow=function(e,t,n){return e.setAttribute(t,n)},pu=function(e,t){return rt(e[t])?gm:su(e[t])&&e.setAttribute?ow:du},_m=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xm=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},mu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lw=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},cw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?La(this,t,"_pt"):t.dep||(n=1),t=r;return!n},uw=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},vm=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},qt=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||_m,this.d=l||this,this.set=c||du,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=uw,this.m=n,this.mt=s,this.tween=r},i}();Wt(cu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return lu[i]=1});on.TweenMax=on.TweenLite=dt;on.TimelineLite=on.TimelineMax=Vt;nt=new Vt({sortChildren:!1,defaults:ds,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=lm;var xs=[],Jo={},fw=[],Vh=0,Fl=function(e){return(Jo[e]||fw).map(function(t){return t()})},yc=function(){var e=Date.now(),t=[];e-Vh>2&&(Fl("matchMediaInit"),xs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=hn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Fl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Vh=e,Fl("matchMedia"))},ym=function(){function i(t,n){this.selector=n&&_c(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){rt(n)&&(s=r,r=n,n=rt);var o=this,a=function(){var c=ft,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=_c(s)),ft=o,h=r.apply(o,arguments),rt(h)&&o._r.push(h),ft=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===rt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=ft;ft=null,n(this),ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof dt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof _s)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=xs.indexOf(this);~a&&xs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),hw=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Wn(n)||(n={matches:n});var o=new ym(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=hn.matchMedia(n[c]),l&&(xs.indexOf(o)<0&&xs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(yc):l.addEventListener("change",yc)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),fa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return j1(r)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return nt.getTweensOf(e,t)},getProperty:function(e,t,n,r){yt(e)&&(e=xn(e)[0]);var s=hr(e||{}).get,o=n?Yp:jp;return n==="native"&&(n=""),e&&(t?o((Jt[t]&&Jt[t].get||s)(e,t,n,r)):function(a,l,c){return o((Jt[a]&&Jt[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=xn(e),e.length>1){var r=e.map(function(u){return an.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Jt[t],a=hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;jr._pt=0,h.init(e,n?u+n:u,jr,0,[e]),h.render(1,h),jr._pt&&mu(1,jr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=an.to(e,vr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return nt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=pr(e.ease,ds.ease)),zh(ds,e||{})},config:function(e){return zh(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Jt[a]&&!on[a]&&aa(t+" effect requires "+a+" plugin.")}),Ll[t]=function(a,l,c){return n(xn(a),bn(l||{},s),c)},o&&(Vt.prototype[t]=function(a,l,c){return this.add(Ll[t](a,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ke[e]=pr(t)},parseEase:function(e,t){return arguments.length?pr(e,t):ke},getById:function(e){return nt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),r,s;for(n.smoothChildTiming=Ht(e.smoothChildTiming),nt.remove(n),n._dp=0,n._time=n._tTime=nt._time,r=nt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof dt&&r.vars.onComplete===r._targets[0]))&&Bn(n,r,r._start-r._delay),r=s;return Bn(nt,n,0),n},context:function(e,t){return e?new ym(e,t):ft},matchMedia:function(e){return new hw(e)},matchMediaRefresh:function(){return xs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||yc()},addEventListener:function(e,t){var n=Jo[e]||(Jo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:W1,wrapYoyo:q1,distribute:tm,random:im,snap:nm,normalize:H1,getUnit:Pt,clamp:B1,splitColor:om,toArray:xn,selector:_c,mapRange:sm,pipe:G1,unitize:V1,interpolate:X1,shuffle:em},install:Vp,effects:Ll,ticker:Qt,updateRoot:Vt.updateRoot,plugins:Jt,globalTimeline:nt,core:{PropTween:qt,globals:Hp,Tween:dt,Timeline:Vt,Animation:_s,getCache:hr,_removeLinkedListItem:La,reverting:function(){return Dt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return ru=e}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return fa[i]=dt[i]});Qt.add(Vt.updateRoot);jr=fa.to({},{duration:0});var dw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pw=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=dw(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Nl=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(yt(s)&&(l={},Wt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}pw(a,s)}}}},an=fa.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nl("roundProps",xc),Nl("modifiers"),Nl("snap",nm))||fa;dt.version=Vt.version=an.version="3.11.4";Gp=1;Np()&&gs();ke.Power0;ke.Power1;ke.Power2;ke.Power3;ke.Power4;ke.Linear;ke.Quad;ke.Cubic;ke.Quart;ke.Quint;ke.Strong;ke.Elastic;ke.Back;ke.SteppedEase;ke.Bounce;ke.Sine;ke.Expo;ke.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hh,Si,ns,gu,ar,Wh,_u,mw=function(){return typeof window<"u"},ui={},er=180/Math.PI,is=Math.PI/180,kr=Math.atan2,qh=1e8,xu=/([A-Z])/g,gw=/(left|right|width|margin|padding|x)/i,_w=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bw=function(e,t,n){return e.style[t]=n},Mw=function(e,t,n){return e.style.setProperty(t,n)},Sw=function(e,t,n){return e._gsap[t]=n},ww=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Tw=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ew=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},it="transform",Dn=it+"Origin",Cw=function(e,t){var n=this,r=this.target,s=r.style;if(e in ui){if(this.tfm=this.tfm||{},e!=="transform"&&(e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ti(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:ti(r,e)),this.props.indexOf(it)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=it}(s||t)&&this.props.push(e,t,s[e])},Sm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Aw=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(xu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_u(),s&&!s.isStart&&!n[it]&&(Sm(n),r.uncache=1)}},wm=function(e,t){var n={target:e,props:[],revert:Aw,save:Cw};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},Tm,Mc=function(e,t){var n=Si.createElementNS?Si.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Si.createElement(e);return n.style?n:Si.createElement(e)},Vn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(xu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,vs(t)||t,1)||""},Xh="O,Moz,ms,Ms,Webkit".split(","),vs=function(e,t,n){var r=t||ar,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Xh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Xh[o]:"")+e},Sc=function(){mw()&&window.document&&(Hh=window,Si=Hh.document,ns=Si.documentElement,ar=Mc("div")||{style:{}},Mc("div"),it=vs(it),Dn=it+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tm=!!vs("perspective"),_u=an.core.reverting,gu=1)},zl=function i(e){var t=Mc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(ns.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ns.removeChild(t),this.style.cssText=s,o},jh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Em=function(e){var t;try{t=e.getBBox()}catch{t=zl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===zl||(t=zl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+jh(e,["x","cx","x1"])||0,y:+jh(e,["y","cy","y1"])||0,width:0,height:0}:t},Cm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Em(e))},ao=function(e,t){if(t){var n=e.style;t in ui&&t!==Dn&&(t=it),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(xu,"-$1").toLowerCase())):n.removeAttribute(t)}},wi=function(e,t,n,r,s,o){var a=new qt(e._pt,t,n,0,1,o?Mm:bm);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Yh={deg:1,rad:1,turn:1},Pw={grid:1,flex:1},Fi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ar.style,l=gw.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,d,m,_;return r===o||!s||Yh[r]||Yh[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),_=e.getCTM&&Cm(e),(p||o==="%")&&(ui[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ot(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Si||!d.appendChild)&&(d=Si.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Qt.time&&!m.uncache?ot(s/m.width*h):((p||o==="%")&&!Pw[Vn(d,"display")]&&(a.position=Vn(e,"position")),d===e&&(a.position="static"),d.appendChild(ar),g=ar[u],d.removeChild(ar),a.position="absolute",l&&p&&(m=hr(d),m.time=Qt.time,m.width=d[u]),ot(f?g*s/h:g&&s?h/g*s:0))))},ti=function(e,t,n,r){var s;return gu||Sc(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),ui[t]&&t!=="transform"?(s=co(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:da(Vn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ha[t]&&ha[t](e,t,n)||Vn(e,t)||qp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fi(e,t,s,n)+n:s},Rw=function(e,t,n,r){if(!n||n==="none"){var s=vs(t,e,1),o=s&&Vn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var a=new qt(this._pt,e.style,t,0,1,xm),l=0,c=0,u,h,f,p,g,d,m,_,b,x,S,y;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Vn(e,t)||r,e.style[t]=n),u=[n,r],lm(u),n=u[0],r=u[1],f=n.match(Xr)||[],y=r.match(Xr)||[],y.length){for(;h=Xr.exec(r);)m=h[0],b=r.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,S=d.substr((p+"").length),m.charAt(1)==="="&&(m=ts(p,m)+S),_=parseFloat(m),x=m.substr((_+"").length),l=Xr.lastIndex-x.length,x||(x=x||sn.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Fi(e,t,d,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Mm:bm;return Bp.test(r)&&(a.e=0),this._pt=a,a},$h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lw=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=$h[n]||n,t[1]=$h[r]||r,t.join(" ")},Dw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ui[a]&&(l=1,a=a==="transformOrigin"?Dn:it),ao(n,a);l&&(ao(n,it),o&&(o.svg&&n.removeAttribute("transform"),co(n,1),o.uncache=1,Sm(r)))}},ha={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new qt(e._pt,t,n,0,0,Dw);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},lo=[1,0,0,1,0,0],Am={},Pm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kh=function(e){var t=Vn(e,it);return Pm(t)?lo:t.substr(7).match(Up).map(ot)},vu=function(e,t){var n=e._gsap||hr(e),r=e.style,s=Kh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?lo:s):(s===lo&&!e.offsetParent&&e!==ns&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ns.appendChild(e)),s=Kh(e),l?r.display=l:ao(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ns.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},wc=function(e,t,n,r,s,o){var a=e._gsap,l=s||vu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],b=l[5],x=t.split(" "),S=parseFloat(x[0])||0,y=parseFloat(x[1])||0,A,L,v,w;n?l!==lo&&(L=p*m-g*d)&&(v=S*(m/L)+y*(-d/L)+(d*b-m*_)/L,w=S*(-g/L)+y*(p/L)-(p*b-g*_)/L,S=v,y=w):(A=Em(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),y=A.y+(~(x[1]||x[0]).indexOf("%")?y/100*A.height:y)),r||r!==!1&&a.smooth?(_=S-c,b=y-u,a.xOffset=h+(_*p+b*d)-_,a.yOffset=f+(_*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=y,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(wi(o,a,"xOrigin",c,S),wi(o,a,"yOrigin",u,y),wi(o,a,"xOffset",h,a.xOffset),wi(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},co=function(e,t){var n=e._gsap||new hm(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Vn(e,Dn)||"0",u,h,f,p,g,d,m,_,b,x,S,y,A,L,v,w,D,W,B,O,F,j,K,$,V,ce,ue,ve,H,ie,de,N;return u=h=f=d=m=_=b=x=S=0,p=g=1,n.svg=!!(e.getCTM&&Cm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[it]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[it]!=="none"?l[it]:"")),r.scale=r.rotate=r.translate="none"),L=vu(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),wc(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,L)),y=n.xOrigin||0,A=n.yOrigin||0,L!==lo&&(W=L[0],B=L[1],O=L[2],F=L[3],u=j=L[4],h=K=L[5],L.length===6?(p=Math.sqrt(W*W+B*B),g=Math.sqrt(F*F+O*O),d=W||B?kr(B,W)*er:0,b=O||F?kr(O,F)*er+d:0,b&&(g*=Math.abs(Math.cos(b*is))),n.svg&&(u-=y-(y*W+A*O),h-=A-(y*B+A*F))):(N=L[6],ie=L[7],ue=L[8],ve=L[9],H=L[10],de=L[11],u=L[12],h=L[13],f=L[14],v=kr(N,H),m=v*er,v&&(w=Math.cos(-v),D=Math.sin(-v),$=j*w+ue*D,V=K*w+ve*D,ce=N*w+H*D,ue=j*-D+ue*w,ve=K*-D+ve*w,H=N*-D+H*w,de=ie*-D+de*w,j=$,K=V,N=ce),v=kr(-O,H),_=v*er,v&&(w=Math.cos(-v),D=Math.sin(-v),$=W*w-ue*D,V=B*w-ve*D,ce=O*w-H*D,de=F*D+de*w,W=$,B=V,O=ce),v=kr(B,W),d=v*er,v&&(w=Math.cos(v),D=Math.sin(v),$=W*w+B*D,V=j*w+K*D,B=B*w-W*D,K=K*w-j*D,W=$,j=V),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ot(Math.sqrt(W*W+B*B+O*O)),g=ot(Math.sqrt(K*K+N*N)),v=kr(j,K),b=Math.abs(v)>2e-4?v*er:0,S=de?1/(de<0?-de:de):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pm(Vn(e,it)),$&&e.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=ot(p),n.scaleY=ot(g),n.rotation=ot(d)+a,n.rotationX=ot(m)+a,n.rotationY=ot(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Dn]=da(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?Ow:Tm?Rm:Iw,n.uncache=0,n},da=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ul=function(e,t,n){var r=Pt(t);return ot(parseFloat(t)+parseFloat(Fi(e,"x",n+"px",r)))+r},Iw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rm(e,t)},$i="0deg",Os="0px",Ki=") ",Rm=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,S="",y=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==$i||u!==$i)){var A=parseFloat(u)*is,L=Math.sin(A),v=Math.cos(A),w;A=parseFloat(h)*is,w=Math.cos(A),o=Ul(b,o,L*w*-x),a=Ul(b,a,-Math.sin(A)*-x),l=Ul(b,l,v*w*-x+x)}m!==Os&&(S+="perspective("+m+Ki),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(y||o!==Os||a!==Os||l!==Os)&&(S+=l!==Os||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ki),c!==$i&&(S+="rotate("+c+Ki),u!==$i&&(S+="rotateY("+u+Ki),h!==$i&&(S+="rotateX("+h+Ki),(f!==$i||p!==$i)&&(S+="skew("+f+", "+p+Ki),(g!==1||d!==1)&&(S+="scale("+g+", "+d+Ki),b.style[it]=S||"translate(0, 0)"},Ow=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),S=parseFloat(a),y,A,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=is,c*=is,y=Math.cos(l)*h,A=Math.sin(l)*h,L=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=is,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),y*=w,A*=w)),y=ot(y),A=ot(A),L=ot(L),v=ot(v)):(y=h,v=f,A=L=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Fi(p,"x",o,"px"),S=Fi(p,"y",a,"px")),(g||d||m||_)&&(x=ot(x+g-(g*y+d*L)+m),S=ot(S+d-(g*A+d*v)+_)),(r||s)&&(w=p.getBBox(),x=ot(x+r/100*w.width),S=ot(S+s/100*w.height)),w="matrix("+y+","+A+","+L+","+v+","+x+","+S+")",p.setAttribute("transform",w),b&&(p.style[it]=w)},Fw=function(e,t,n,r,s){var o=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?er:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*qh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*qh)%o-~~(c/o)*o)),e._pt=f=new qt(e._pt,t,n,r,c,xw),f.e=u,f.u="deg",e._props.push(n),f},Zh=function(e,t){for(var n in t)e[n]=t[n];return e},Nw=function(e,t,n){var r=Zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[it]=t,a=co(n,1),ao(n,it),n.setAttribute("transform",c)):(c=getComputedStyle(n)[it],o[it]=t,a=co(n,1),o[it]=c);for(l in ui)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Pt(c),g=Pt(u),h=p!==g?Fi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new qt(e._pt,a,l,h,f-h,bc),e._pt.u=g||0,e._props.push(l));Zh(a,r)};Wt("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});ha[e>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return ti(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,p,h)}});var Lm={name:"css",register:Sc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,b,x,S,y,A,L,v;gu||Sc(),this.styles=this.styles||wm(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Jt[d]&&dm(d,t,n,r,e,s)))){if(p=typeof u,g=ha[d],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=so(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Pi.lastIndex=0,Pi.test(c)||(m=Pt(c),_=Pt(u)),_?m!==_&&(c=Fi(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],yt(c)&&~c.indexOf("random(")&&(c=so(c)),Pt(c+"")||(c+=sn.units[d]||Pt(ti(e,d))||""),(c+"").charAt(1)==="="&&(c=ti(e,d))):c=ti(e,d),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),d in si&&(d==="autoAlpha"&&(f===1&&ti(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),wi(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=si[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in ui,x){if(this.styles.save(d),S||(y=e._gsap,y.renderTransform&&!t.parseTransform||co(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,S=this._pt=new qt(this._pt,a,it,0,1,y.renderTransform,y,0,-1),S.dep=1),d==="scale")this._pt=new qt(this._pt,y,"scaleY",y.scaleY,(b?ts(y.scaleY,b+h):h)-y.scaleY||0,bc),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(Dn,0,a[Dn]),u=Lw(u),y.svg?wc(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&wi(this,y,"zOrigin",y.zOrigin,_),wi(this,a,d,da(c),da(u)));continue}else if(d==="svgOrigin"){wc(e,u,1,A,0,this);continue}else if(d in Am){Fw(this,y,d,f,b?ts(f,b+u):u);continue}else if(d==="smoothOrigin"){wi(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){Nw(this,u,e);continue}}else d in a||(d=vs(d)||d);if(x||(h||h===0)&&(f||f===0)&&!_w.test(u)&&d in a)m=(c+"").substr((f+"").length),h||(h=0),_=Pt(u)||(d in sn.units?sn.units[d]:m),m!==_&&(f=Fi(e,d,c,_)),this._pt=new qt(this._pt,x?y:a,d,f,(b?ts(f,b+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?yw:bc),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=vw);else if(d in a)Rw.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,r,s);else if(d!=="parseTransform"){au(d,u);continue}x||(d in a?v.push(d,0,a[d]):v.push(d,1,c||e[d])),o.push(d)}}L&&vm(this)},render:function(e,t){if(t.tween._time||!_u())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ti,aliases:si,getSetter:function(e,t,n){var r=si[t];return r&&r.indexOf(",")<0&&(t=r),t in ui&&t!==Dn&&(e._gsap.x||ti(e,"x"))?n&&Wh===n?t==="scale"?ww:Sw:(Wh=n||{})&&(t==="scale"?Tw:Ew):e.style&&!su(e.style[t])?bw:~t.indexOf("-")?Mw:pu(e,t)},core:{_removeProperty:ao,_getMatrix:vu}};an.utils.checkPrefix=vs;an.core.getStyleSaver=wm;(function(i,e,t,n){var r=Wt(i+","+e+","+t,function(s){ui[s]=1});Wt(e,function(s){sn.units[s]="deg",Am[s]=1}),si[r[13]]=i+","+e,Wt(n,function(s){var o=s.split(":");si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){sn.units[i]="px"});an.registerPlugin(Lm);var Bt=an.registerPlugin(Lm)||an;Bt.core.Tween;const zw={class:"text"},Uw=yr({__name:"Red",setup(i){const e=Lt("mat"),t=Lt("duration");return Bt.to(e.uniforms.uColor.value,{r:1,g:0,b:0,duration:t}),Bt.to(e.uniforms.uResolution.value,{x:350,y:200,duration:t}),Bt.to(e.uniforms.uReadWave,{value:.2,duration:t*.5,delay:t*.3}),Bt.timeline().to(e.uniforms.uRatio,{value:.5,duration:t*.5}).to(e.uniforms.uRatio,{value:0,duration:t*.5}),iu((n,r)=>{Bt.to(e.uniforms.uResolution.value,{x:0,y:0,delay:t}),Bt.to(e.uniforms.uReadWave,{value:0,duration:t*.5})}),(n,r)=>(ss(),wa("p",zw,"Red"))}}),Bw={class:"text"},kw=yr({__name:"Blue",setup(i){const e=Lt("mat"),t=Lt("duration");return Bt.to(e.uniforms.uColor.value,{r:0,g:0,b:1,duration:t}),Bt.to(e.uniforms.uBlueWave,{value:.1,duration:t*.5,delay:t*.3}),Bt.timeline().to(e.uniforms.uRatio,{value:.5,duration:t*.5}).to(e.uniforms.uRatio,{value:0,duration:t*.5}),iu((n,r)=>{Bt.to(e.uniforms.uBlueWave,{value:0,duration:t*.5})}),(n,r)=>(ss(),wa("p",Bw,"Blue"))}}),Gw={class:"text"},Vw=yr({__name:"Green",setup(i){const e=Lt("mat"),t=Lt("duration");return Bt.to(e.uniforms.uColor.value,{r:0,g:1,b:0,duration:t}),Bt.to(e.uniforms.uGreenWave,{value:.3,duration:t*.5,delay:t*.3}),Bt.timeline().to(e.uniforms.uRatio,{value:.5,duration:t*.5}).to(e.uniforms.uRatio,{value:0,duration:t*.5}),iu((n,r)=>{Bt.to(e.uniforms.uGreenWave,{value:0,duration:t*.5})}),(n,r)=>(ss(),wa("p",Gw,"Green"))}}),Hw=[{path:"/",name:"Red",component:Uw},{path:"/blue",name:"Blue",component:kw},{path:"/green",name:"Green",component:Vw}],Ww=b1({history:zS("/seamless-color-ball/"),routes:Hw}),Dm=u0(vS);Dm.use(Ww);Dm.mount("#app");
